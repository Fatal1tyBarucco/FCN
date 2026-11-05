const enriParcialM4U2P1 = {
  "m4-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Distinguir vírus de worm é o que orienta toda a resposta a um incidente de malware: o vírus fica preso às máquinas por onde o arquivo hospedeiro passou e depende de alguém abri-lo, enquanto o worm caminha sozinho pela rede e pode saturar enlaces em poucos minutos. Errar essa classificação leva a isolar a estação errada ou a deixar aberto o vetor de propagação lateral, atrasando a contenção e ampliando o dano.",
      "preRequisitos": [
        "Noção de software malicioso e da finalidade de comprometer o sistema",
        "Funcionamento básico de arquivos executáveis e de macros em documentos",
        "Conceito de rede de computadores e de tráfego entre estações",
        "Ideia de vulnerabilidade em serviço exposto à Internet"
      ],
      "objetivosObservaveis": [
        "Classificar um incidente como vírus ou worm pelos critérios de hospedeiro e propagação autônoma",
        "Reconhecer vetores de infecção comuns: anexos de e-mail, macros, mídias removíveis e downloads",
        "Explicar por que o worm provoca surto em rede e o vírus se restringe às estações por onde o arquivo circulou",
        "Escolher o controle de contenção compatível com o tipo de malware identificado"
      ],
      "competencias": [
        "Análise por critérios: distinguir conceitos por propriedades observáveis, não por exemplos decorados",
        "Diagnóstico sob pressão: definir a contenção diante de um surto em andamento",
        "Atenção ao detalhe: perceber que a ausência de hospedeiro caracteriza a propagação autônoma"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t1-s2 (Trojans, spyware e adware) — malwares distribuídos por engano ao usuário, sem propagação autônoma",
        "m4-u2-t1-s3 (Ransomware, rootkits e botnets) — desdobramentos de impacto direto e de controle remoto sobre redes comprometidas"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema consolidado no conteúdo programático de segurança da informação, com a distinção entre vírus e worm e a identificação de vetores de infecção, reunindo definição conceitual e escolha do controle de contenção em cenário de incidente, conforme estimativa pedagógica de adequação ao edital."
      }
    },
    "niveis": {
      "iniciante": "Malware é todo software feito para prejudicar, espionar ou comprometer um sistema. O vírus é um trecho de código que se gruda a um arquivo hospedeiro e só avança quando alguém executa esse arquivo, por isso depende de ação humana. O worm não precisa de hospedeiro nem de clique: explora serviços de rede expostos e se copia sozinho de uma máquina para outra, o que explica a rapidez com que provoca surtos em rede.",
      "intermediario": "O critério decisivo está em duas perguntas: existe arquivo hospedeiro? depende de ação humana? Se as duas respostas são sim, trata-se de vírus, cuja dispersão acompanha o anexo, o pen drive ou o macro que o transportou. Se a propagação ocorre sem hospedeiro e sem clique, é worm, que costuma explorar falhas de segmentação para alcançar vários setores da rede. Essa leitura define o alcance provável do incidente e a prioridade da contenção.",
      "avancado": "Em campo, a classificação muda a estratégia: contra o vírus, prioriza-se desinfetar arquivos e estações por onde o hospedeiro circulou; contra o worm, é preciso bloquear o tráfego de propagação e fechar o serviço vulnerável, pois isolar uma única máquina não interrompe o surto. Muitos incidentes combinam os dois, com um worm que instala vírus ou abre caminho para outros componentes, exigindo análise do vetor dominante.",
      "especialista": "O especialista lê o tipo de propagação como indicador da arquitetura de defesa: um worm bem-sucedido revela falha de segmentação, serviço exposto sem correção ou ausência de controle de saída. A resposta inclui análise de fluxo para mapear a propagação, bloqueio das portas de exploração, correção do serviço e verificação de que nenhum hospedeiro permaneceu infectado, evitando que a contenção apenas adie o surto."
    },
    "comparacoes": [
      {
        "tema": "Vírus versus worm",
        "a": {
          "rotulo": "Vírus",
          "texto": "Prende-se a um arquivo hospedeiro e só se propaga com ação humana, como abrir o anexo, executar o macro ou conectar a mídia removível; tende a se limitar às estações por onde o arquivo circulou."
        },
        "b": {
          "rotulo": "Worm",
          "texto": "Não usa hospedeiro nem depende do usuário: explora serviços de rede expostos ou falhas de segmentação e se copia sozinho entre máquinas, o que produz surtos rápidos e saturação de enlaces."
        },
        "diferencaGabarito": "A diferença está no binômio hospedeiro e autonomia: o vírus precisa de arquivo para se agarrar e de alguém que o execute, enquanto o worm se propaga por conta própria pela rede."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Vírus e worm são a mesma coisa; o que muda é apenas a época em que foram criados.",
        "porqueErrada": "A afirmação troca um critério técnico por uma noção de cronologia: o que separa os dois não é a data, mas a dependência de hospedeiro e de ação humana para a propagação, algo que se observa no comportamento atual do código.",
        "versaoCorreta": "Errado. O vírus depende de um arquivo hospedeiro e de ação humana; o worm é autônomo e se espalha pela rede. Como a consequência difere, o vírus exige desinfecção das estações e o worm exige bloqueio do vetor de propagação em rede."
      },
      {
        "afirmacaoEquivocada": "Todo worm precisa que o usuário abra um anexo para começar a se espalhar.",
        "porqueErrada": "Confunde worm com vírus: se dependesse de abrir um anexo, o código estaria preso a um hospedeiro e exigiria ação humana, que é justamente a definição do vírus, não a do worm.",
        "versaoCorreta": "Errado. O worm dispensa clique e hospedeiro: ele explora serviços expostos e se copia sozinho entre máquinas. O anexo que só se espalha após ser aberto caracteriza comportamento de vírus."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Malware: software feito para prejudicar, espionar ou comprometer sistemas",
        "Vírus: código que depende de arquivo hospedeiro e de ação humana",
        "Worm: código autônomo que se propaga pela rede sem hospedeiro",
        "Vetor de infecção: caminho pelo qual o código chega à máquina"
      ],
      "regras": [
        "Classificar pelo par de perguntas: existe hospedeiro? depende de ação humana?",
        "Diante de worm, bloquear o tráfego de propagação; diante de vírus, desinfetar arquivos e estações",
        "Tratar anexos, macros, mídias removíveis e downloads como vetores sob suspeita"
      ],
      "comparacoes": [
        "Vírus se limita às estações por onde o arquivo circulou; worm alcança vários setores e satura enlaces"
      ],
      "fluxos": [
        "Vetor chega à máquina (anexo, macro, mídia, download) → código é executado ou explora serviço exposto → o vírus depende de novo clique para avançar, enquanto o worm se copia sozinho para outros hosts → o impacto se manifesta como corrupção local ou surto de rede"
      ],
      "excecoes": [
        "Alguns códigos combinam características, com worm que instala vírus; prevalece a análise do vetor dominante de propagação",
        "A ausência de surto visível não garante ausência de worm; é preciso observar o tráfego, não apenas o desempenho percebido"
      ],
      "palavrasChave": [
        "vírus",
        "worm",
        "hospedeiro",
        "propagação autônoma",
        "vetor de infecção",
        "propagação lateral",
        "malware"
      ],
      "checklist": [
        "Confirmar se há arquivo hospedeiro e ação humana envolvidos",
        "Verificar se o código se propaga sozinho pela rede",
        "Listar os vetores de infecção presentes no ambiente",
        "Definir contenção compatível: desinfecção de arquivos ou bloqueio de tráfego",
        "Registrar as portas e os serviços explorados na propagação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um funcionário abre um anexo de e-mail e, minutos depois, o código passa a se espalhar sozinho pelos computadores da rede. Classifique o malware pelo critério de propagação.",
        "dados": "Anexo aberto em uma estação; em poucos minutos, outras máquinas do mesmo segmento passam a apresentar tráfego elevado e novas infecções, sem que ninguém abra o arquivo original.",
        "conceitos": [
          "Propagação autônoma",
          "Dependência de hospedeiro",
          "Surto em rede"
        ],
        "estrategia": "Isolar o critério hospedeiro e autonomia: observar se a dispersão segue o arquivo (ação humana) ou se ocorre sozinha pela rede, o que separa vírus de worm.",
        "execucao": [
          "Identificar que a propagação ocorreu sem novo clique nas demais máquinas",
          "Notar que o código não ficou preso ao arquivo original, mas alcançou outros hosts",
          "Concluir que a autonomia na rede caracteriza o worm"
        ],
        "resultado": "Trata-se de worm: a propagação sem nova ação humana e sem hospedeiro é a marca desse tipo. Fosse necessário abrir o anexo em cada máquina, seria vírus.",
        "justificativa": "O sinal decisivo é a ausência de hospedeiro e de clique nas máquinas seguintes; como o código viajou sozinho pela rede, o comportamento corresponde à definição de worm, e não à de vírus.",
        "errosFrequentes": [
          "Chamar de vírus qualquer código que chegue por anexo, ignorando que a propagação seguinte não exigiu ação humana",
          "Supor que a ausência de hospedeiro é detalhe irrelevante, quando é justamente o critério de separação"
        ],
        "variacao": "Reescreva o caso supondo que cada nova infecção só ocorre depois de o funcionário abrir o anexo encaminhado. Qual é a classificação e o que muda na contenção?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um setor mantém rotinas diárias em macros de planilha. Proponha controles que reduzam o risco de infecção por vírus de macro e indique a correção de causa raiz.",
        "dados": "Estações com suíte de escritório; planilhas com macro compartilhadas por pasta de rede; macros hoje liberadas sem restrição, inclusive as provenientes da Internet.",
        "conceitos": [
          "Vírus de macro",
          "Vetor de infecção",
          "Correção de causa raiz"
        ],
        "estrategia": "Atacar o vetor (macro vinda de fonte externa) e a rotina que o sustenta, combinando bloqueio, treinamento e correção da origem.",
        "execucao": [
          "Bloquear ou restringir a execução de macros provenientes da Internet e manter a proteção de exibição",
          "Orientar o usuário a não habilitar macro em documento inesperado",
          "Manter antivírus com inspeção de conteúdo e aplicar as correções da suíte de escritório",
          "Migrar a rotina para um processo que não dependa de macro"
        ],
        "resultado": "Os controles reduzem o risco ao cortar o vetor e a causa raiz: a macro deixa de ser liberada sem critério e a rotina passa a dispensar o recurso que sustentava o vírus.",
        "justificativa": "Como o vírus de macro depende de o usuário habilitar o código no documento, restringir a execução e corrigir a rotina remove ao mesmo tempo o gatilho e o motivo de sua existência no ambiente.",
        "errosFrequentes": [
          "Limitar-se a instalar antivírus sem restringir macro, mantendo o vetor ativo",
          "Tratar o alerta como problema de usuário, sem corrigir a rotina que expõe o setor"
        ],
        "variacao": "A rotina migra para um aplicativo web que não executa macro local. Quais controles do conjunto passam a ser dispensáveis e por quê?"
      },
      {
        "tipo": "erro",
        "problema": "Uma equipe afirma que, ao detectar propagação, deve isolar apenas a estação onde o arquivo foi aberto. Avalie a leitura desse caso.",
        "dados": "Detecção de código que se espalha por vários hosts do segmento em minutos; a equipe planeja isolar somente a máquina de origem do anexo e manter o restante da rede conectado.",
        "conceitos": [
          "Propagação lateral",
          "Contenção proporcional ao tipo",
          "Leitura ingênua do incidente"
        ],
        "estrategia": "Comparar o alcance real da propagação com a medida proposta: se o código é autônomo, isolar a origem não interrompe o surto nem remove os hosts já alcançados.",
        "execucao": [
          "Reconhecer que a dispersão por vários hosts em minutos indica propagação autônoma",
          "Verificar que a máquina de origem não é o único ponto do surto",
          "Concluir que isolar apenas a origem deixa ativos os vetores nos demais hosts"
        ],
        "resultado": "A leitura é insuficiente: em propagação autônoma, isolar só a origem não contém o surto, pois os demais hosts já alcançados continuam a espalhar o código. A contenção precisa cobrir o vetor de rede.",
        "justificativa": "Se o malware caminha sozinho entre máquinas, o ponto crítico não é o arquivo aberto, e sim o tráfego de propagação; limitar a ação à origem ignora esse mecanismo e prolonga o incidente.",
        "errosFrequentes": [
          "Assumir que todo incidente se origina e se encerra na máquina onde o arquivo foi aberto",
          "Confundir a origem da infecção com o conjunto de máquinas já comprometidas"
        ],
        "variacao": "O mesmo cenário ocorre com um vírus que só avança quando cada usuário abre o anexo. A medida de isolar a origem passa a ser suficiente? Justifique."
      }
    ]
  },
  "m4-u2-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Trojan, spyware e adware não provocam surto: entram por engano ou acompanham algo que o usuário instala, e o dano aparece como função oculta, vigilância e propaganda imposta. Distinguir esses mecanismos é decisivo porque a resposta difere da usada contra vírus e worm e porque a coleta de dados pessoais sem consentimento coloca a organização diante de deveres de proteção de dados previstos na LGPD.",
      "preRequisitos": [
        "Noção de engenharia social e de falsa aparência de legitimidade",
        "Conceito de dados pessoais e de consentimento no tratamento",
        "Funcionamento básico de navegador, extensões e instaladores de software",
        "Ideia de acesso remoto e de credenciais guardadas no sistema"
      ],
      "objetivosObservaveis": [
        "Explicar por que o trojan depende de distribuição enganosa, e não de propagação autônoma",
        "Diferenciar spyware de adware pelo efeito principal: coleta de dados e publicidade imposta",
        "Relacionar a coleta de dados sem consentimento a deveres de proteção de dados pessoais",
        "Indicar as primeiras ações diante de extensões e instaladores não autorizados"
      ],
      "competencias": [
        "Desconfiança calibrada: suspeitar de software que pede privilégios altos e promete demais",
        "Leitura de impacto: separar dano à privacidade de incômodo publicitário",
        "Enquadramento de conformidade: reconhecer quando a falha técnica gera dever de tratamento de dados"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t1-s1 (Vírus e worms) — malwares de propagação, contraponto ao trojan, que avança pelo engano",
        "m4-u2-t1-s3 (Ransomware, rootkits e botnets) — outros efeitos do comprometimento, do sequestro de dados ao controle remoto",
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — engenharia social como canal de entrega de software enganoso",
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — base legal para tratar a coleta indevida de dados como questão de conformidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema de presença permanente no conteúdo programático de segurança da informação, com a classificação de trojan, spyware e adware e o enquadramento da captura de dados na LGPD, exigindo que o candidato diferencie o modo de distribuição desses malwares do de vírus e worms."
      }
    },
    "niveis": {
      "iniciante": "Trojan, ou cavalo de Troia, é software que parece útil ou legítimo e executa uma função oculta. Ele não se espalha sozinho: chega por engenharia social, como instalador pirata, atualizador falso ou anexo. Suas capacidades típicas incluem abrir acesso remoto, roubar credenciais guardadas e baixar outros componentes. Spyware coleta informações do usuário sem consentimento, como histórico, teclas digitadas e capturas de tela, e as envia a terceiros.",
      "intermediario": "O spyware que grava teclas recebe o nome específico de keylogger. Adware exibe publicidade não solicitada e costuma acompanhar componentes que alteram a busca padrão e redirecionam anúncios, misturando incômodo e risco. O ponto comum é a ausência de propagação autônoma: a distribuição depende de engano ou de instalação consentida sob informação incompleta, por isso a resposta prioriza remover o componente, restaurar configurações e cortar o canal que permitiu a entrada.",
      "avancado": "A coleta não consentida de dados que identifiquem pessoa é tratamento de dados pessoais e atrai obrigações previstas na LGPD, como base legal e transparência. Em máquina corporativa, o spyware deixa de ser apenas problema de segurança e passa a ser questão de conformidade, exigindo apuração do dado alcançado, comunicação aos responsáveis e revisão do controle que falhou.",
      "especialista": "O especialista trata trojan, spyware e adware como falhas de ingestão de software: reforça a procedência dos instaladores, restringe privilégios de administrador, controla extensões de navegador e integra a apuração técnica à avaliação de impacto sobre dados pessoais. A remoção inclui revogar sessões e credenciais que possam ter sido capturadas, pois a coleta silenciosa costuma anteceder o uso dessas credenciais."
    },
    "comparacoes": [
      {
        "tema": "Spyware versus adware",
        "a": {
          "rotulo": "Spyware",
          "texto": "Coleta informações do usuário sem consentimento, como histórico de navegação, teclas digitadas e capturas de tela, e as envia a terceiros; a captura de teclas caracteriza o keylogger."
        },
        "b": {
          "rotulo": "Adware",
          "texto": "Impõe publicidade não solicitada e costuma alterar a busca padrão e redirecionar anúncios, gerando incômodo e exposição; pode acompanhar componentes indesejados."
        },
        "diferencaGabarito": "O spyware tem foco em vigilância e coleta de dados, enquanto o adware tem foco em exibição de propaganda; ambos podem coexistir em um mesmo pacote instalado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O trojan se propaga automaticamente entre as máquinas da rede.",
        "porqueErrada": "Propagação automática é característica do worm. O trojan depende de distribuição enganosa e de instalação pelo usuário, o que o aproxima da fraude e exige controles de engenharia social e de procedência de software.",
        "versaoCorreta": "Errado. O trojan não se espalha sozinho: chega disfarçado e precisa ser instalado. Sem essa instalação enganosa, ele não avança, por isso a defesa prioriza procedência de software, privilégios restritos e treinamento contra fraude."
      },
      {
        "afirmacaoEquivocada": "Spyware é apenas um incômodo e não gera consequências legais para a organização.",
        "porqueErrada": "A coleta não consentida de dados que identifiquem pessoa é tratamento de dados pessoais e demanda base legal e transparência; em máquina corporativa, o caso passa a envolver deveres de proteção de dados, não apenas limpeza técnica.",
        "versaoCorreta": "Errado. A captura de dados pessoais sem consentimento atrai obrigações de proteção de dados; o spyware em ambiente corporativo exige apuração do dado alcançado e revisão do controle, além da remoção do componente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Trojan: software aparentemente legítimo que executa função oculta",
        "Spyware: coleta de dados do usuário sem consentimento",
        "Keylogger: spyware especializado em gravar teclas",
        "Adware: publicidade não solicitada e alteração do navegador"
      ],
      "regras": [
        "Não confundir trojan com worm: o trojan depende de instalação enganosa",
        "Tratar a coleta de dados pessoais como questão também de conformidade",
        "Restringir privilégios e controlar a procedência do software instalado"
      ],
      "comparacoes": [
        "Spyware vigia e coleta; adware impõe propaganda; trojan disfarça a função maliciosa"
      ],
      "fluxos": [
        "Usuário acredita na aparência legítima → instala o software ou habilita a extensão → a função oculta roda com os privilégios concedidos → dados são coletados ou o acesso remoto é aberto → a resposta remove o componente, restaura configurações e revoga credenciais"
      ],
      "excecoes": [
        "Um único pacote pode reunir trojan, spyware e adware; classificar pelo efeito predominante sem ignorar os demais",
        "A presença de adware visível não exclui coleta silenciosa de dados no mesmo componente"
      ],
      "palavrasChave": [
        "trojan",
        "spyware",
        "adware",
        "keylogger",
        "engenharia social",
        "dados pessoais",
        "extensão de navegador"
      ],
      "checklist": [
        "Verificar a procedência do instalador e os privilégios solicitados",
        "Listar extensões e componentes de navegador não autorizados",
        "Revogar sessões e credenciais que possam ter sido capturadas",
        "Avaliar se houve captura de dados pessoais sujeita à LGPD",
        "Restaurar configurações alteradas e fechar o canal de distribuição"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um instalador de utilitários de otimização distribuído em fórum pede privilégios de administrador e instala também um módulo que envia o histórico de navegação. Classifique o que ocorreu.",
        "dados": "Instalador baixado de fórum; solicitação de privilégios administrativos; instalação de módulo adicional não informado que transmite o histórico de navegação a um servidor remoto.",
        "conceitos": [
          "Trojan",
          "Spyware",
          "Engenharia social"
        ],
        "estrategia": "Separar a aparência declarada (utilitário legítimo) do efeito real (envio de dados) e identificar o canal de entrega como engenharia social.",
        "execucao": [
          "Reconhecer que o programa finge ser útil e executa uma função oculta",
          "Identificar o envio de histórico como coleta de dados sem consentimento",
          "Concluir que há um trojan que embute um módulo spyware"
        ],
        "resultado": "Trata-se de um trojan que embute um módulo spyware: o programa se apresenta como utilitário e, na verdade, coleta e transmite dados de navegação do usuário.",
        "justificativa": "A aparência legítima somada à função oculta caracteriza o trojan, e o envio de histórico sem consentimento caracteriza o spyware; a distribuição em fórum mostra que a entrega dependeu de engano, não de propagação autônoma.",
        "errosFrequentes": [
          "Chamar o caso apenas de vírus, ignorando que não houve propagação e que a entrada dependeu de instalação enganosa",
          "Tratar o envio de dados como detalhe secundário, sem reconhecer a coleta de dados pessoais"
        ],
        "variacao": "O mesmo instalador passa a alterar a busca padrão do navegador e a exibir anúncios. Que componente adicional deve ser reconhecido no caso?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O setor de tecnologia identifica estações que instalam extensões de navegador exibindo propaganda e alterando a busca padrão. Indique o tipo provável e a primeira ação de resposta.",
        "dados": "Várias estações com extensões instaladas sem autorização; busca padrão redirecionada; anúncios exibidos em páginas acessadas; suspeita de pacote instalado por usuários a partir de site não confiável.",
        "conceitos": [
          "Adware",
          "Canal de distribuição",
          "Resposta a incidente"
        ],
        "estrategia": "Classificar pelo efeito observado (propaganda e alteração de configuração), isolar a causa e cortar o canal que permitiu a instalação antes de apenas limpar o sintoma.",
        "execucao": [
          "Identificar as extensões e o instalador que as introduziu",
          "Remover extensões e componentes não autorizados e restaurar as configurações",
          "Revogar sessões e credenciais caso haja indício de captura",
          "Corrigir o canal de distribuição que permitiu a instalação"
        ],
        "resultado": "O quadro é compatível com adware que altera a configuração do navegador; a primeira ação é isolar a causa, remover os componentes, restaurar as configurações e fechar o canal de distribuição.",
        "justificativa": "A propaganda imposta e a mudança da busca padrão são o efeito típico do adware; remover apenas o anúncio deixaria a fonte ativa, por isso a resposta prioriza o canal de distribuição.",
        "errosFrequentes": [
          "Limpar apenas os sintomas no navegador, sem remover o instalador que reintroduz as extensões",
          "Descartar a possibilidade de captura de credenciais por trás do adware visível"
        ],
        "variacao": "Após a limpeza, as extensões voltam em poucos dias. Que etapa da resposta provavelmente foi deixada de lado e como corrigi-la?"
      },
      {
        "tipo": "erro",
        "problema": "Uma equipe conclui que o problema de um trojan será resolvido com antivírus, pois todo malware se espalha e o antivírus contém a propagação. Avalie essa conclusão.",
        "dados": "Detecção de programa disfarçado de atualizador que abriu acesso remoto; a equipe planeja apenas atualizar as assinaturas do antivírus e manter a estação em uso, sem revogar credenciais nem revisar a origem da instalação.",
        "conceitos": [
          "Distribuição enganosa",
          "Credenciais comprometidas",
          "Limite da assinatura de antivírus"
        ],
        "estrategia": "Comparar o mecanismo do trojan (entrada por engano e acesso já aberto) com a medida proposta (apenas atualizar assinaturas), verificando o que permanece sem tratamento.",
        "execucao": [
          "Reconhecer que o trojan entrou por instalação enganosa, não por propagação",
          "Notar que o acesso remoto já pode ter permitido captura de credenciais",
          "Concluir que atualizar assinaturas sem revogar credenciais e revisar a origem deixa o risco ativo"
        ],
        "resultado": "A conclusão é insuficiente: atualizar as assinaturas pode remover o arquivo detectado, mas não fecha o acesso já aberto, não revoga as credenciais expostas e não corrige o canal de instalação enganosa.",
        "justificativa": "Como o trojan já operou com os privilégios concedidos, o risco não se limita ao arquivo; é preciso tratar a credencial capturada e a origem da instalação para que o mesmo engano não se repita.",
        "errosFrequentes": [
          "Acreditar que a detecção por assinatura encerra o incidente de trojan",
          "Ignorar a revisão do canal de instalação, deixando aberta a porta para nova entrada"
        ],
        "variacao": "O mesmo cenário ocorre com um worm que explora um serviço exposto. A medida de apenas atualizar assinaturas seria suficiente? Justifique."
      }
    ]
  }
};
