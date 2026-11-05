const enriParcialM5U3P3 = {
  "m5-u3-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O RAG combina busca semântica em base vetorial com geração de texto, de modo que a resposta do modelo fica fundamentada em trechos recuperados da organização em vez de depender apenas do conhecimento paramétrico. Isso reduz alucinações, permite citar fontes e atende a exigências de rastreabilidade no serviço público. Dominar embeddings, chunking e busca por similaridade é indispensável para dimensionar e auditar um sistema RAG.",
      "preRequisitos": ["Representação de texto como vetores (embeddings)", "Operação de similaridade cosseno entre vetores", "Fluxo de geração de texto por modelo de linguagem", "Base de conhecimento e indexação de documentos"],
      "objetivosObservaveis": ["Descrever a arquitetura de um fluxo RAG em cinco passos (indexação, consulta, busca, composição, geração)", "Relacionar embeddings e bases vetoriais ao mecanismo de busca semântica", "Explicar os limites e os riscos do RAG, incluindo alucinação residual e segregação de acesso", "Avaliar a qualidade da recuperação e da geração separadamente"],
      "competencias": ["Análise técnica de sistemas de recuperação aumentada", "Leitura crítica de saída de modelo e de trechos recuperados", "Tomada de decisão fundamentada sobre uso de RAG no serviço público", "Avaliação de qualidade de recuperação e geração"],
      "dificuldade": "intermediario",
      "relacoes": ["m5-u3-t2-s3 (Agentes, ferramentas e fluxos com supervisão) — estende o RAG com decisão autônoma e uso de ferramentas"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "IA generativa e RAG recebem classificação qualitativa média como temas do conteúdo programático de TI para concursos públicos; o tema é central no Módulo 5. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que o RAG combina busca em base de conhecimento com geração de texto. Entende que os documentos são divididos em trechos, transformados em embeddings e armazenados em uma base vetorial, e que a consulta é transformada em embedding para buscar trechos semelhantes por similaridade cosseno. Conhece a diferença entre conhecimento paramétrico do modelo e conhecimento recuperado da base, e identifica que o RAG reduz, mas não elimina, o risco de alucinação.",
      "intermediario": "O aluno descreve o fluxo RAG em cinco passos: (1) indexação — chunking dos documentos, geração de embeddings e gravação na base vetorial com metadados (origem, data, versão, permissões); (2) consulta — a pergunta do usuário vira embedding; (3) busca — a base calcula similaridade entre o embedding da consulta e os dos trechos; (4) composição — os trechos recuperados são inseridos no prompt; (5) geração — o modelo produz a resposta fundamentada nos trechos. Avalia recuperação e geração como níveis separados.",
      "avancado": "O aluno projeta um sistema RAG institucional: define estratégia de chunking, modelo de embarcação, métrica de similaridade e filtros de metadados por competência e classificação de sigilo. Implementa teste de vazamento entre bases, revisão da indexação existente e exibição de fonte por resposta. Identifica falhas de recuperação (trecho ausente) e de geração (alucinação ou distorção) e propõe conjunto de perguntas com resposta esperada para avaliação.",
      "especialista": "O aluno arquitetura e governa um RAG de porte institucional: estabelece política de indexação com metadados de sigilo e competência, filtro obrigatório na busca, orçamento de tokens, logs de prompt e trechos recuperados, métricas de precisão de recuperação e de fidelidade da geração, e procedimento de suspensão automática quando a taxa de alucinação ultrapassa o limite definido. Integra supervisão humana e rastreabilidade completa."
    },
    "comparacoes": [
      {
        "tema": "RAG versus ajuste fino do modelo (fine-tuning)",
        "a": { "rotulo": "RAG (recuperação aumentada por geração)", "texto": "Não altera os pesos do modelo. Insere trechos recuperados da base no prompt no momento da consulta. Permite atualizar a base sem retreinar, exibir fontes e controlar o que o modelo pode acessar por metadados." },
        "b": { "rotulo": "Ajuste fino (fine-tuning)", "texto": "Ajusta os pesos do modelo a partir de um conjunto de dados de treinamento. Requer novo ciclo de treinamento para incorporar mudanças, não exibe fontes naturalmente e não restringe o acesso do modelo por metadados de consulta." },
        "diferencaGabarito": "RAG é indicado quando o conhecimento muda com frequência e exige rastreabilidade por fonte; ajuste fino é indicado quando se quer adaptar o estilo ou o comportamento do modelo. No serviço público, o RAG é preferível por não expor dados sensíveis no treinamento e por permitir auditoria da origem da resposta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O RAG elimina a alucinação porque a resposta é sempre ancorada na base.",
        "porqueErrada": "O RAG melhora a disponibilidade de material relevante, não a verdade da geração. O modelo pode afirmar algo que o trecho não diz ou resumir de modo distorcido. Sem exibição de fonte e sem verificação automática, o RAG continua sujeito ao mesmo risco de alucinação.",
        "versaoCorreta": "O RAG reduz, mas não elimina, a alucinação. A resposta deve ser verificada contra o trecho recuperado, e a avaliação exige dois níveis: recuperação (o trecho correto foi encontrado?) e geração (a resposta é sustentada pelo trecho?)."
      },
      {
        "afirmacaoEquivocada": "Não é necessário indexar metadados de competência e de sigilo na base vetorial; a busca pode devolver qualquer trecho acessível ao servidor.",
        "porqueErrada": "Sem metadados de competência e de classificação de sigilo, a busca semântica pode devolver material que o consultante não tem autorização para ver, quebrando a proteção de informações e expõe dados pessoais. A falta de filtro na busca cria vazamento entre bases e resposta sem base adequada para o cidadão.",
        "versaoCorreta": "A base vetorial deve ser indexada com metadados de classificação e de competência, com filtro obrigatório na busca, teste de vazamento entre bases e revisão da indexação existente, para garantir segregação de acesso e proteção de dados pessoais."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["RAG (recuperação aumentada por geração)", "Embedding (representação vetorial de texto)", "Base vetorial (armazena embeddings com metadados)", "Busca semântica por similaridade cosseno", "Chunking (divisão de documentos em trechos)"],
      "regras": ["Os documentos são divididos em trechos antes de gerar embeddings", "Cada trecho recebe metadados de origem, data, versão e permissões", "A consulta é transformada em embedding para buscar trechos semelhantes", "Os trechos recuperados são inseridos no prompt antes da geração", "A resposta deve ser verificável contra o trecho de origem"],
      "comparacoes": ["RAG não retreina o modelo; o ajuste fino sim", "RAG exibe fonte e controla acesso por metadados; o ajuste fino não"],
      "fluxos": ["Indexação: chunking → embeddings → base vetorial com metadados", "Consulta: pergunta → embedding → busca por similaridade → trechos", "Geração: trechos + prompt → modelo → resposta fundamentada"],
      "excecoes": ["O RAG não elimina alucinação por si só", "Trecho ausente na base causa falha de recuperação, não de geração", "Modelo pode distorcer o trecho mesmo quando recuperado corretamente"],
      "palavrasChave": ["RAG", "embeddings", "base vetorial", "busca semântica", "chunking", "similaridade cosseno", "metadados", "alucinação"],
      "checklist": ["Definir estratégia de chunking dos documentos", "Escolher modelo de embarcação e métrica de similaridade", "Indexar metadados de competência e classificação de sigilo", "Aplicar filtro obrigatório na busca por metadados", "Realizar teste de vazamento entre bases", "Exibir fonte por resposta gerada", "Avaliar recuperação e geração separadamente", "Estabelecer conjunto de perguntas com resposta esperada"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o RAG não elimina a alucinação, mesmo que a resposta seja ancorada em trechos da base?",
        "dados": "Um modelo de linguagem responde a uma pergunta institucional com base em trechos recuperados de uma base vetorial; o modelo pode afirmar algo que nenhum trecho diz ou resumir o trecho de modo distorcido.",
        "conceitos": ["RAG", "alucinação", "trecho recuperado"],
        "estrategia": "Explicar que o RAG melhora a disponibilidade de material relevante, não a verdade da geração, e que a verificação contra o trecho é o mecanismo de segurança.",
        "execucao": ["1. O usuário faz uma pergunta sobre um documento da base.", "2. O sistema recupera trechos semelhantes por similaridade cosseno.", "3. O modelo gera a resposta usando os trechos como contexto.", "4. O revisor confronta a resposta com o trecho recuperado para verificar fidelidade."],
        "resultado": "O RAG torna possível a verificação: se a resposta cita o trecho, o revisor pode confrontá-la. Sem exibição de fonte e sem verificação automática, o RAG continua sujeito ao mesmo risco de alucinação.",
        "justificativa": "O resultado é o gabarito porque distingue disponibilidade de material (o que o RAG garante) de verdade da geração (o que o modelo produz), mostrando que a verificação contra o trecho é a camada de controle.",
        "errosFrequentes": ["Achar que a presença de trechos na base garante que a resposta é verdadeira", "Confundir busca semântica com avaliação de qualidade da resposta"],
        "variacao": "Se a base contém dois trechos contraditórios sobre o mesmo assunto, o modelo deve ser obrigado a indicar qual trecho usou e a sinalizar o conflito, em vez de fundi-los em uma única resposta."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um RAG institucional passa a responder perguntas sobre documentos de outro órgão, porque o índice reúne tudo o que o servidor poderia acessar. Qual o defeito?",
        "dados": "Índice único reunindo documentos de vários órgãos; servidor de órgão A consulta o RAG e recebe trechos de documentos do órgão B sem filtro de competência nem de classificação de sigilo.",
        "conceitos": ["segregação de acesso", "metadados", "vazamento entre bases"],
        "estrategia": "Identificar o defeito como falha de metadados e de segregação de acesso, e propor correção com metadados de classificação e competência mais filtro obrigatório na busca.",
        "execucao": ["1. Verificar se a base indexou material além do escopo da consulta do servidor.", "2. Confirmar a ausência de metadados de classificação e de competência nos trechos.", "3. Aplicar filtro obrigatório na busca por competência e sigilo do consultante.", "4. Realizar teste de vazamento entre bases para confirmar a correção.", "5. Revisar a indexação existente para remover trechos fora de escopo."],
        "resultado": "O defeito é de segregação de acesso e de metadados: a base indexou material além do escopo da consulta. A correção é a indexação com metadados de classificação e de competência, com filtro obrigatório na busca, teste de vazamento entre bases e revisão da indexação existente.",
        "justificativa": "O resultado é o gabarito porque aponta a causa raiz (metadados ausentes) e o procedimento corretivo (filtro por metadados, teste de vazamento e revisão de indexação), protegendo dados pessoais e informações sigilosas.",
        "errosFrequentes": ["Achar que o problema é de qualidade da resposta, e não de controle de acesso", "Esquecer de revisar a indexação existente após criar o filtro"],
        "variacao": "Se o mesmo servidor acessar documentos de seu próprio órgão e de outro com sigilo diferente, o filtro por metadados deve bloquear o trecho de sigilo superior mesmo quando a similaridade semântica seja alta."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O RAG dispensa a avaliação de qualidade, porque a resposta é sempre ancorada na base.'",
        "dados": "Um sistema RAG responde a perguntas sobre uma base de normas; a resposta é apresentada como definitiva porque 'vem da base', sem avaliação de recuperação nem de geração.",
        "conceitos": ["avaliação de recuperação", "avaliação de geração", "alucinação"],
        "estrategia": "Corrigir a afirmação mostrando que o RAG exige dois níveis de avaliação (recuperação e geração) e que a âncora na base não garante correção.",
        "execucao": ["1. Verificar se o trecho correto foi recuperado (nível de recuperação).", "2. Verificar se a resposta é sustentada pelo trecho recuperado (nível de geração).", "3. Montar conjunto de perguntas com resposta esperada para comparação.", "4. Classificar falhas como de busca (trecho ausente) ou de geração (alucinação/distorção).", "5. Exigir verificação humana antes de usar a resposta em ato administrativo."],
        "resultado": "Errado. O RAG introduz dois níveis de avaliação: recuperação — o trecho correto foi recuperado?; geração — a resposta é sustentada pelo trecho recuperado? Sem o primeiro nível, a resposta falha por falha de busca; sem o segundo, por alucinação ou distorção.",
        "justificativa": "O resultado é o gabarito porque desmonta a afirmação falsa, separa os dois níveis de avaliação e exige conjunto de perguntas com resposta esperada, seguindo a mesma lógica da unidade 5.2.",
        "errosFrequentes": ["Considerar que âncora na base equivale a correção absoluta", "Avaliar apenas a geração e ignorar se o trecho recuperado está correto"],
        "variacao": "Se o trecho recuperado estiver correto, mas o modelo omitir uma restrição importante (ex.: 'válido apenas para servidores efetivos'), a falha é de geração, não de recuperação, e exige correção no prompt ou no modelo."
      }
    ]
  },
  "m5-u3-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Um agente decide qual ação executar, seleciona ferramentas, observa resultados e itera até concluir a tarefa, diferentemente de um fluxo determinístico que segue passos predefinidos. Essa autonomia traz ganho de flexibilidade, mas também risco de decisões sobre direitos com menor rastreabilidade. Compreender planejamento, ferramentas, memória e supervisão é essencial para projetar agentes seguros no serviço público.",
      "preRequisitos": ["Diferença entre fluxo determinístico e agente autônomo", "Noção de planejamento de tarefas (decomposição de objetivo)", "Ferramentas invocáveis por um modelo (busca, sistema, mensagem, cálculo)", "Supervisão humana e alçadas de decisão"],
      "objetivosObservaveis": ["Explicar o que distingue um agente de um fluxo determinístico", "Relacionar ferramentas e fluxos multietapa ao risco de decisões autônomas sobre direitos", "Desenhar o modelo de supervisão aplicável a um agente", "Identificar riscos de não determinismo e mecanismos de auditoria"],
      "competencias": ["Análise de risco de decisões autônomas sobre direitos", "Projeto de governança de agentes (registro, alçadas, validação, supervisão)", "Leitura crítica de trilhas de auditoria e logs de ferramentas", "Tomada de decisão sobre nível de autonomia delegável"],
      "dificuldade": "intermediario",
      "relacoes": ["m5-u3-t2-s2 (RAG, embeddings e bases vetoriais) — agente pode usar RAG como uma de suas ferramentas"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Agentes de IA e supervisão humana têm classificação qualitativa média nos editais de TI para concursos públicos; trata-se de estimativa pedagógica de adequação programática, e não de frequência estatística apurada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que um fluxo determinístico executa uma sequência pré-definida de passos, enquanto um agente recebe um objetivo e decide qual ação executar, quais ferramentas usar e quando parar. Conhece os quatro elementos do agente: planejamento, ferramentas, memória e execução, e entende que o não determinismo exige mais registro, não menos.",
      "intermediario": "O aluno descreve a diferença operacional entre fluxo com RAG e agente que usa RAG: o fluxo segue passos fixos (recuperar, compor, gerar, revisar); o agente decide quando recuperar, quando perguntar, quando chamar outra ferramenta e quando parar. Desenha um modelo de supervisão com permissões, separação de escrita, alçadas para temas sensíveis, log de chamadas, orçamento de passos, validação automática, métricas e suspensão automática.",
      "avancado": "O aluno projeta a governança de um agente que redige minutas de resposta a cidadãos: define permissões (leitura nas bases, escrita apenas na fila de minutas), separação (publicação exige servidor identificado), alçadas automáticas para temas sensíveis, log de prompt/trechos/ferramentas/tokens, orçamento de tempo e passos, validação de números/prazos/citações contra a fonte, métricas de aproveitamento e correção, e suspensão automática se a taxa de alucinação ultrapassar o limite.",
      "especialista": "O aluno arquitetura um programa de governança de agentes institucional: matriz de alçadas por irreversibilidade e impacto sobre terceiros, registro imutável de chamadas de ferramenta, validação de saída antes de qualquer ação, orçamento de execução por tarefa, avaliação periódica com casos de teste contra produção humana, e procedimento de encerramento e passagem ao humano quando limites são excedidos."
    },
    "comparacoes": [
      {
        "tema": "Fluxo determinístico versus agente autônomo",
        "a": { "rotulo": "Fluxo determinístico (cadeia de passos)", "texto": "Executa uma sequência previamente definida, com encadeamento previsível e saída auditável em cada etapa. O programa decide o próximo passo. É previsível, testável e auditável, recomendado como ponto de partida no serviço público." },
        "b": { "rotulo": "Agente autônomo", "texto": "Diante de um objetivo, decide qual ação executar, seleciona ferramentas, observa o resultado e itera até concluir a tarefa. O modelo decide o próximo passo. É mais flexível, mas muito mais difícil de auditar porque o mesmo objetivo pode gerar caminhos diferentes." },
        "diferencaGabarito": "A diferença chave é quem decide o próximo passo: o programa (fluxo) ou o modelo (agente). No serviço público, começar pelo fluxo determinístico e evoluir para o agente apenas em tarefas de baixo impacto, com alçadas e registro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como o agente usa modelo de linguagem, ele não é determinístico e por isso não pode ser usado em serviço público.",
        "porqueErrada": "O não determinismo não impede o uso: o que se exige é governança do processo, com registro, alçadas, validação e supervisão. Ao contrário, a variabilidade de caminhos reforça a necessidade de trilhas que permitam reconstituir o caminho efetivamente percorrido.",
        "versaoCorreta": "O não determinismo não impede o uso em serviço público; exige governança do processo (registro, alçadas, validação, supervisão). O mesmo objetivo pode gerar caminhos diferentes, por isso a auditoria precisa de reconstituir o caminho efetivamente percorrido."
      },
      {
        "afirmacaoEquivocada": "Quanto maior a autonomia do agente, menor a necessidade de supervisão humana, pois o modelo decide o caminho ótimo por si só.",
        "porqueErrada": "A regra de proporcionalidade aplicada a agentes diz o contrário: quanto maior a irreversibilidade da ação e o impacto sobre terceiros, maior a necessidade de supervisão humana e menor a autonomia delegável. Autonomia sem supervisão remove a rastreabilidade de autorização e elimina a alçada.",
        "versaoCorreta": "Quanto maior a irreversibilidade da ação e o impacto sobre terceiros, maior a necessidade de supervisão humana e menor a autonomia delegável, conforme a regra de proporcionalidade e controles proporcionais ao risco."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Agente autônomo", "Fluxo determinístico (cadeia de passos)", "Planejamento (decomposição de objetivo)", "Ferramentas invocáveis pelo agente", "Memória do agente", "Supervisão humana e alçadas", "Não determinismo", "Trilha de auditoria"],
      "regras": ["O agente decide qual ação executar; o fluxo segue sequência pré-definida", "Quanto maior a irreversibilidade, maior a supervisão humana exigida", "A publicação de minutas exige servidor identificado, com nome e matrícula", "Temas sensíveis escalam automaticamente a um humano", "Registrar prompt, trechos recuperados, ferramentas chamadas, tokens e custo"],
      "comparacoes": ["Fluxo determinístico: previsível, testável, auditável; agente: flexível, difícil de auditar", "Programa decide o próximo passo (fluxo) versus modelo decide (agente)"],
      "fluxos": ["Objetivo → planejamento (subtarefas) → seleção de ferramentas → execução → observação → iteração até conclusão", "Agente produz minuta → servidor identificado publica → log completo da execução"],
      "excecoes": ["O não determinismo não impede uso; exige mais registro", "Mesmo objetivo pode gerar caminhos diferentes; auditoria reconstitui o caminho efetivo", "Agente só em tarefas de baixo impacto, com alçadas e registro, no início"],
      "palavrasChave": ["agente", "fluxo determinístico", "ferramentas", "planejamento", "memória", "supervisão", "alçada", "não determinismo", "trilha de auditoria"],
      "checklist": ["Definir permissões de leitura e escrita do agente", "Estabelecer separação: agente produz, humano publica", "Criar alçadas automáticas para temas sensíveis", "Registrar prompt, trechos, ferramentas, tokens e custo", "Definir orçamento de passos e tempo por tarefa", "Validar números, prazos e citações contra a fonte", "Estabelecer métricas de aproveitamento e correção", "Configurar suspensão automática se taxa de alucinação ultrapassar o limite"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença operacional entre um fluxo com RAG e um agente que usa RAG, ou seja, quem decide o próximo passo?",
        "dados": "Mesma base de documentos; um sistema segue passos fixos (recuperar, compor, gerar, revisar); outro recebe o objetivo e decide quando recuperar, quando perguntar, quando chamar outra ferramenta e quando parar.",
        "conceitos": ["fluxo determinístico", "agente", "RAG"],
        "estrategia": "Contrastar execução pré-definida (fluxo) com decisão autônoma de próximo passo (agente), destacando previsibilidade versus flexibilidade e dificuldade de auditoria.",
        "execucao": ["1. O fluxo executa: recuperar, compor, gerar, revisar — sempre nessa sequência.", "2. O agente recebe o objetivo e decide quando recuperar, quando perguntar, quando chamar outra ferramenta e quando parar.", "3. Com a mesma base, o agente é mais flexível e mais difícil de auditar.", "4. Para serviço público, começar pelo fluxo determinístico, previsível e auditável."],
        "resultado": "O fluxo tem os passos escritos e segue essa sequência sempre. O agente recebe o objetivo e decide quando recuperar, quando perguntar, quando chamar outra ferramenta e quando parar; com a mesma base, o agente pode ser mais flexível e muito mais difícil de auditar.",
        "justificativa": "O resultado é o gabarito porque diferencia claramente quem decide o próximo passo em cada modelo e recomenda o fluxo determinístico como ponto de partida no serviço público.",
        "errosFrequentes": ["Achar que agente e fluxo são a mesma coisa com nomes diferentes", "Esquecer que o agente é mais difícil de auditar por gerar caminhos variados"],
        "variacao": "Se o agente tiver permissão para escrever diretamente em sistemas de terceiros, a ausência de alçada elimina a rastreabilidade de autorização, exigindo interrupção e revisão humana."
      },
      {
        "tipo": "aplicacao",
        "problema": "Desenhe o desenho de supervisão de um agente que redige minutas de resposta a cidadãos.",
        "dados": "Agente redige minutas de resposta a cidadãos com base em documentos internos; necessidade de permissões, separação de escrita, alçadas, log, orçamento, validação, métricas e suspensão.",
        "conceitos": ["supervisão", "alçada", "log de auditoria", "separação de funções", "orçamento de execução"],
        "estrategia": "Apresentar nove elementos de supervisão: permissões, separação, alçadas, log, orçamento, validação, métricas, avaliação periódica e suspensão automática.",
        "execucao": ["1. Definir permissões: apenas leitura nas bases e apenas escrita na fila de minutas.", "2. Separar: o agente produz minuta; a publicação exige servidor identificado, com nome e matrícula.", "3. Definir alçadas: temas sensíveis escalam automaticamente a um humano.", "4. Registrar log: prompt, trechos recuperados, minuta, ferramentas chamadas, tokens e custo.", "5. Estabelecer orçamento: limite de passos e de tempo por tarefa, com encerramento e passagem ao humano.", "6. Validar automaticamente números, prazos e citações contra a fonte; bloquear saída sem trecho válido.", "7. Monitorar métricas: taxa de aproveitamento da minuta, taxa de correção por tipo de erro, incidência de alucinação.", "8. Fazer avaliação periódica com casos de teste e comparação com a produção humana.", "9. Suspender automaticamente se a taxa de correção por alucinação ultrapassar o limite definido."],
        "resultado": "(1) PERMISSÕES: apenas leitura nas bases e apenas escrita na fila de minutas; (2) SEPARAÇÃO: o agente produz minuta; a publicação exige servidor identificado, com nome e matrícula; (3) ALÇADA: temas sensíveis escalam automaticamente a um humano; (4) LOG: prompt, trechos recuperados, minuta, ferramentas chamadas, tokens e custo; (5) ORÇAMENTO: limite de passos e de tempo por tarefa, com encerramento e passagem ao humano; (6) VALIDAÇÃO: conferência automática de números, prazos e citações contra a fonte, e bloqueio de saída sem trecho válido; (7) MÉTRICAS: taxa de aproveitamento da minuta, taxa de correção por tipo de erro, incidência de alucinação; (8) AVALIAÇÃO PERIÓDICA com casos de teste e comparação com a produção humana; (9) SUSPENSÃO AUTOMÁTICA se a taxa de correção por alucinação ultrapassar o limite definido.",
        "justificativa": "O resultado é o gabarito porque lista todos os elementos de supervisão necessários para governar um agente de minutas, vinculando cada um a um controle concreto de risco.",
        "errosFrequentes": ["Esquecer que a publicação exige servidor identificado (separação de funções)", "Não definir orçamento de passos, permitindo execução indefinida do agente"],
        "variacao": "Se a minuta tratar de reclamação com indício de irregularidade, menção a dado de saúde ou risco jurídico, a alçada escalará automaticamente a um humano antes de qualquer publicação."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como o agente usa modelo de linguagem, ele não é determinístico e por isso não pode ser usado em serviço público.'",
        "dados": "Um órgão considera proibir agentes por não serem determinísticos, sem considerar mecanismos de registro, alçada, validação e supervisão.",
        "conceitos": ["não determinismo", "governança do processo", "auditoria", "alçada"],
        "estrategia": "Corrigir a afirmação mostrando que o não determinismo exige mais registro, não menos, e que a governança do processo viabiliza o uso seguro do agente.",
        "execucao": ["1. Reconhecer que o agente é não determinístico: o mesmo objetivo pode gerar caminhos diferentes.", "2. Rejeitar a conclusão de que não pode ser usado; o não determinismo exige governança do processo.", "3. Implementar registro, alçadas, validação e supervisão como camadas de controle.", "4. Assegurar que a auditoria reconstitua o caminho efetivamente percorrido.", "5. Permitir o uso em serviço público com esses controles, em tarefas adequadas ao nível de risco."],
        "resultado": "Errado. O não determinismo não impede uso; o que exige é governança do processo — registro, alçadas, validação e supervisão. Não determinismo é, ao contrário, argumento a favor de mais registro, porque o mesmo objetivo pode gerar caminhos diferentes e a auditoria precisa de reconstituir o caminho efetivamente percorrido.",
        "justificativa": "O resultado é o gabarito porque desmonta a afirmação falsa, inverte o raciocínio (não determinismo → mais registro) e vincula a auditoria à reconstituição do caminho efetivo.",
        "errosFrequentes": ["Concluir que não determinismo proíbe uso em serviço público", "Esquecer que a auditoria precisa reconstituir o caminho efetivamente percorrido"],
        "variacao": "Se o mesmo objetivo gerar dois caminhos diferentes em duas execuções, a auditoria deve registrar ambos com seus logs respectivos, em vez de assumir que o resultado é idêntico."
      }
    ]
  }
};
