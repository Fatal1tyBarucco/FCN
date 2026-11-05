const enriParcialM4U3P1 = {
  "m4-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "As três variantes exploram a confiança da vítima e se separam pelo volume de alvos e pelo grau de personalização. Essa distinção define a defesa: filtro e treinamento contra o ataque em massa, verificação de procedimento contra a fraude dirigida a lideranças.",
      "preRequisitos": [
        "Conceito de engenharia social como exploração de fatores humanos",
        "Leitura de endereços de e-mail e noção de domínio",
        "Uso de MFA e de verificação por canal independente"
      ],
      "objetivosObservaveis": [
        "Classificar um cenário descrito como phishing, spear phishing ou whaling pelo critério de alvo e personalização",
        "Enumerar indicadores verificáveis de uma tentativa a partir de um cabeçalho ou mensagem",
        "Justificar por que erros de ortografia são indic fraco em ataques direcionados"
      ],
      "competencias": [
        "Leitura crítica de mensagens antes de agir",
        "Verificação de autoria por canal distinto do usado pelo remetente",
        "Aplicação de procedimento institucional sob pressão de urgência"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t1-s2 (Pharming, spoofing e fraude por impersonação) — distingue persuasão por mensagem de redirecionamento técnico",
        "m4-u3-t1-s3 (Pretexting, baiting e princípios de manipulação) — detalha os princípios psicológicos usados na mensagem",
        "m4-u3-t2-s1 (Força bruta, password spraying e credential stuffing) — a credencial obtida alimenta esses ataques"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A taxonomia phishing, spear phishing e whaling integra o programa usual de segurança e é cobrada em itens que descrevem cenário e pedem a técnica. Classificação qualitativa de frequência, sem estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "Phishing é a fraude de massa em que alguém se passa por entidade confiável para induzir a entrega de credenciais, dados ou a execução de uma ação (pagamento, habilitação de macro, instalação de programa). Caracteriza-se por imitação de aparência, apelo emocional e urgência, enviada a grande volume por e-mail, SMS ou mensagens.",
      "intermediario": "Spear phishing é a versão direcionada: o atacante pesquisa o alvo — site do órgão, lista de servidores, redes sociais — e personaliza a mensagem com remetente plausível, referência a processo real e anexo de nome corriqueiro. A taxa de sucesso sobe porque o conteúdo deixa de ser genérico e passa a dialogar com a rotina do destinatário.",
      "avancado": "Whaling é o spear phishing voltado a autoridades e altas lideranças, em que o ganho e o impacto institucional são maiores e o disfarce usa agendas, decisões e ritos do alto escalão. Os indicadores verificáveis incluem remetente divergente do domínio real, pedido fora de procedimento, link cujo texto difere do endereço e solicitação de sigilo. A defesa se apoia em filtro, MFA e dupla verificação para pagamentos.",
      "especialista": "Em falhas reais coexistem sinais: urgência artificial, pedido fora de procedimento e anexo inesperado. Erros de português são indicador frágil, pois ataques sofisticados são bem redigidos. A defesa combinada exige filtro, MFA, treinamento com simulações defensivas e procedimento de dupla verificação para pagamentos e mudanças de cadastro, com registro das tentativas para auditoria."
    },
    "comparacoes": [
      {
        "tema": "Phishing, spear phishing e whaling: público e personalização",
        "a": {
          "rotulo": "Phishing tradicional",
          "texto": "Mensagem genérica, pouca ou nenhuma pesquisa sobre o destinatário, distribuição em massa por e-mail ou SMS. O sucesso depende do volume: muitos alvos, taxa de conversão pequena. Filtros e reputação de domínio bastam para barrar a maior parte."
        },
        "b": {
          "rotulo": "Spear phishing e whaling",
          "texto": "Mensagem construída a partir de dados reais do alvo, com poucos destinatários ou um único alvo de alto escalão. A aparência de rotina institucional reduz a desconfiança e a defesa passa pela verificação de procedimento."
        },
        "diferencaGabarito": "A quantidade de alvos e o grau de personalização: o primeiro é indiscriminado e o segundo é direcionado, e a direção segue a investigação prévia feita pelo atacante sobre o alvo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Whaling se distingue do spear phishing apenas por visar servidores com maior remuneração salarial.",
        "porqueErrada": "O critério classificatório é o nível hierárquico do alvo e o impacto institucional da ação induzida, não a renda individual do destinatário. Confunde o objetivo da fraude com a característica pessoal da vítima.",
        "versaoCorreta": "Whaling é o spear phishing direcionado a autoridades e altas lideranças; o que muda é o patamar do alvo e a dimensão da decisão que se pretende obter, com disfarce baseado em agendas e ritos do alto escalão."
      },
      {
        "afirmacaoEquivocada": "Mensagem sem nenhum erro de ortografia pode ser considerada legítima por ter sido redigida com cuidado.",
        "porqueErrada": "Erros gramaticais são resquício de campanhas amadoras e não constituem evidência técnica de autenticidade; ataques direcionados são revisados, e até produzidos com auxílio de ferramentas de linguagem.",
        "versaoCorreta": "A autenticidade se verifica pelo domínio remetente e pela confirmação por canal independente previamente conhecido; a qualidade textual da mensagem não é evidência válida."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Phishing: imitação de entidade confiável em distribuição de massa",
        "Spear phishing: versão direcionada, com pesquisa prévia sobre o alvo",
        "Whaling: spear phishing contra autoridades e altas lideranças",
        "Indicador verificável: sinal observável na mensagem ou no canal, não suposição sobre intenção"
      ],
      "regras": [
        "Ações sensíveis exigem verificação por canal distinto do usado pelo atacante.",
        "Nenhuma verificação pode ser concluída dentro do próprio canal suspeito."
      ],
      "comparacoes": [
        "Volume elevado com personalização fraca (phishing) versus poucos alvos com personalização forte (spear phishing e whaling)."
      ],
      "fluxos": [
        "Receber mensagem com apelo urgente, inspecionar o domínio, confrontar com procedimento, confirmar por canal conhecido, decidir e relatar a tentativa."
      ],
      "excecoes": [
        "A ausência de erros de português não afasta a hipótese de phishing, e a presença deles não a confirma."
      ],
      "palavrasChave": [
        "engenharia social",
        "personalização",
        "domínio remetente",
        "urgência artificial",
        "dupla verificação",
        "canal independente"
      ],
      "checklist": [
        "O domínio do remetente corresponde ao órgão alegado?",
        "O pedido está previsto em procedimento escrito?",
        "O texto do link coincide com o endereço destino?",
        "O anexo é esperado e nominalmente identificado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Duas mensagens chegam ao setor: uma genérica a cinquenta mil endereços imitando o banco; outra personalizada ao diretor citando um processo licitatório real. Classifique as duas.",
        "dados": "Mensagem A: mesmo texto idêntico para cinquenta mil destinatários, sem menção a dado pessoal. Mensagem B: destinatário único, referência a processo licitatório em curso no órgão e nome do diretor correto no campo exibido.",
        "conceitos": [
          "Volume de envio como marcador de phishing de massa",
          "Personalização como marcador de spear phishing",
          "Nível hierárquico do alvo como marcador de whaling"
        ],
        "estrategia": "Examinar primeiro a extensão do público: número de destinatários e existência de dado específico do alvo. Depois verificar se o endereço remetente pertence ao domínio real da entidade imitada.",
        "execucao": [
          "Contar os destinatários visíveis e observar se há dado pessoal do alvo na mensagem.",
          "Confrontar o domínio do remetente com o domínio oficial da entidade.",
          "Classificar pela combinação de volume e personalização obtida."
        ],
        "resultado": "A primeira é phishing em massa: público extenso e conteúdo uniforme. A segunda é spear phishing, pois usa informação real do alvo; se o destinatário fosse a autoridade máxima do órgão, seria whaling.",
        "justificativa": "A distinção repousa sobre o grau de direcionamento: distribuir a mesma promessa em volume abrange phishing genérico, enquanto referência a processo real exige pesquisa prévia sobre o destinatário. Quando o alvo é a cúpula da instituição, o rótulo passa a whaling.",
        "errosFrequentes": [
          "Classificar como phishing qualquer fraude por e-mail, ignorando a personalização que caracteriza o spear phishing.",
          "Tratar o whaling como categoria independente do spear phishing, quando ele é um caso particular deste."
        ],
        "variacao": "Suponha que a mensagem personalizada seja enviada à ouvido e não à diretoria, sem mencionar processo algum. Reclassifique o caso e indique qual indicador verificável resta."
      },
      {
        "tipo": "aplicacao",
        "problema": "O setor financeiro recebe mensagem do suposto setor contábil pedindo troca urgente de dados bancários de fornecedor para pagamento no mesmo dia. Que verificações independentes impedem a fraude?",
        "dados": "Pedido de substituição da conta bancária de um fornecedor ativo, pagamento previsto para o dia seguinte, remetente com nome exibido do servidor da contabilidade e domínio externo divergente. Nenhum documento assinado acompanha o pedido.",
        "conceitos": [
          "Verificação por canal previamente cadastrado",
          "Regra de dupla autorização para alteração bancária",
          "Confirmação da autoria pelo domínio, não pelo nome exibido"
        ],
        "estrategia": "Suspender a execução sem responder pelo mesmo canal, confirmar a alteração com o setor contábil por telefone cadastrado ou presencialmente, e conferir o domínio do remetente. Por fim, exigir dupla autorização formal para a mudança.",
        "execucao": [
          "Registrar a tentativa e não executar a alteração bancária.",
          "Confirmar o pedido com o contábil por telefone cadastrado, sem usar o número informado na mensagem.",
          "Comparar o domínio remetente com o domínio oficial do órgão.",
          "Aplicar a dupla autorização para cadastramento da nova conta bancária."
        ],
        "resultado": "A fraude é barrada pela confirmação em outro canal, pela conferência de domínio e pela dupla autorização; nenhuma dessas verificações depende de meio fornecido pelo atacante.",
        "justificativa": "O ponto decisivo é que toda verificação legítima ocorre fora do canal controlado pelo fraudador. Confirmação por telefone cadastrado, inspeção do domínio e autorização dupla criam evidências independentes, enquanto responder ao e-mail suspeito apenas alimentaria o golpe.",
        "errosFrequentes": [
          "Usar o telefone ou link informados na própria mensagem para confirmar o pedido, o que mantém a vítima sob controle do atacante.",
          "Aceitar a alteração porque o nome exibido do remetente é conhecido, sem examinar o domínio de origem."
        ],
        "variacao": "Admita que o pedido chegue por telefone, e não por e-mail, com número aparentemente interno. Reordene as verificações e explique qual delas permanece válida."
      },
      {
        "tipo": "erro",
        "problema": "Um analista conclui que a mensagem é legítima porque não contém erros de ortografia e apresenta identidade visual compatível com a do órgão. Avalie a conclusão.",
        "dados": "Mensagem solicitando credenciais para regularizar cadastro, com logomarca do órgão reproduzida por imagem anexada, texto sem erros aparentes e remetente em domínio que difere do oficial por um caractere.",
        "conceitos": [
          "Textura e identidade visual não são prova de autoria",
          "Autenticidade depende de domínio e de canal independente",
          "Indicador frágil gerada por campanhas amadoras"
        ],
        "estrategia": "Separar aparência de autoria: comparar o endereço real do remetente, e não o rótulo exibido, e exigir confirmação por canal conhecido antes de fornecer qualquer credencial.",
        "execucao": [
          "Ler o endereço completo do remetente, ignorando o nome de exibição.",
          "Confrontar o domínio com o endereço oficial publicado do órgão.",
          "Recusar o fornecimento da credencial e relatar a tentativa pelo canal de denúncia."
        ],
        "resultado": "A conclusão do analista está errada: a correção textual e a identidade visual são reprodutíveis pelo atacante, enquanto o domínio divergente é evidência técnica de fraude.",
        "justificativa": "A leitura ingênua falha ao converter critério estético em prova de autenticidade. Autoria se estabelece por verificação de domínio e por confirmação em canal independente; erros de escrita e logomarca não integram esse conjunto de provas.",
        "errosFrequentes": [
          "Confiar na formatação da mensagem por associar cuidado visual a origem institucional.",
          "Descartar a fraude apenas porque a mensagem foi recebida em caixa corporativa com filtro antispam."
        ],
        "variacao": "Considere que o domínio seja legítimo, mas o conteúdo peça senha. Explique qual princípio continua válido e por que o canal de origem não sana o pedido indevido."
      }
    ]
  },
  "m4-u3-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Pharming, spoofing e impersonação atacam a identificação: o primeiro corrompe a resolução de nomes, o segundo falsifica um identificador técnico e o terceiro forja uma identidade pessoal. Nos serviços públicos a distinção importa porque as defesas são distintas — política de autenticação de domínio para o e-mail, confirmação por canal cadastrado para decisões assinadas por gestores e MFA para credenciais. Questões de concurso exploram exatamente o ponto em que a leitura ingênua erra: confiar no nome exibido ou no endereço digitado.",
      "preRequisitos": [
        "Noção de resolução DNS e de arquivo de hosts",
        "Leitura de cabeçalhos e de endereços de e-mail",
        "Conceitos de MFA e de verificação por canal independente"
      ],
      "objetivosObservaveis": [
        "Diferenciar pharming de phishing pelo vetor: redirecionamento da resolução versus persuasão por mensagem",
        "Identificar formas de spoofing aplicáveis ao serviço público a partir de um cenário",
        "Indicar as defesas correspondentes a cada técnica"
      ],
      "competencias": [
        "Exame técnico do endereço exibido e do domínio remetente",
        "Recusa fundamentada de pedido fora de procedimento",
        "Articulação entre autenticação de domínio e confirmação por canal independente"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — base da persuasão por mensagem",
        "m4-u3-t1-s3 (Pretexting, baiting e princípios de manipulação) — descreve a construção do cenário fictício",
        "m4-u3-t3-s3 (Análise segura de mensagens, links e anexos) — procedimento de triagem aplicado à mensagem falsa"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A taxonomia das fraudes de identidade integra o programa usual de segurança da informação e costuma ser cobrada em itens que descrevem um vetor e pedem o nome da técnica. A carga é predominantemente conceitual e de leitura de cenário, incluindo distinções com o phishing e o spoofing de números em chamadas, sem exigir cálculos."
      }
    },
    "niveis": {
      "iniciante": "Pharming redireciona a vítima ao site falso sem que ela perceba: o endereço digitado é legítimo, mas a resolução é corrompida. Quem faz isso corrompe o cache DNS, altera o arquivo de hosts, compromete o roteador ou emprega malware local. Como a vítima visita o endereço que digitou, a fraude não depende de mensagem persuasiva.",
      "intermediario": "Spoofing é a falsificação de um identificador: endereço de e-mail, inclusive o nome exibido e, quando o domínio não é autenticado, até o próprio domínio; endereço de origem de pacotes; número de telefone em chamadas; identificação de aparelho. A falsificação só persiste enquanto não há verificação técnica da procedência.",
      "avancado": "Impersonação é falsificação de pessoa: o atacante se passa por gestor, colega ou fornecedor para obter ação, como liberação de pagamento, envio de dados ou entrega de credenciais. O e-mail sem SPF, DKIM e DMARC fica vulnerável a spoofing de domínio, e a chamada com número falsificado explora a confiança depositada na autoridade exibida.",
      "especialista": "A defesa se organiza em camadas: autenticação de domínio no e-mail, verificação por canal independente para ações sensíveis, MFA e treinamento focado em pedidos fora de fluxo. Em auditoria, a distinção importa porque o pharming deixa rastros na resolução local e o spoofing deixa divergência entre identidade exibida e identidade verificada."
    },
    "comparacoes": [
      {
        "tema": "Phishing e pharming: onde a fraude é introduzida",
        "a": {
          "rotulo": "Phishing",
          "texto": "A fraude entra pela mensagem: o atacante convence a vítima a clicar em link falso, a responder com dados ou a abrir anexo. O canal de persuasão é a comunicação, e a concretização depende da aceitação do destinatário."
        },
        "b": {
          "rotulo": "Pharming",
          "texto": "A fraude entra na infraestrutura de resolução: o usuário digita o endereço correto e, ainda assim, chega a uma cópia do site. A entrega da senha acontece no destino errado sem que o usuário tenha aceitado nada."
        },
        "diferencaGabarito": "O phishing convence por mensagem; o pharming compromete o caminho até o site legítimo, de modo que o desvio ocorre sem participação consciente da vítima."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Pharming exige que o usuário clique em link de mensagem fraudulenta para ser bem-sucedido.",
        "porqueErrada": "O vetor é o redirecionamento provocado por envenenamento de cache DNS, alteração do arquivo de hosts, comprometimento de roteador ou malware local. A leitura incorreta atribui ao pharming uma etapa de persuasão que não lhe é necessária.",
        "versaoCorreta": "No pharming a vítima digita o endereço correto e a resolução é corrompida antes da requisição, tornando o ataque bem-sucedido sem que haja mensagem nem clique em link enviado pelo atacante."
      },
      {
        "afirmacaoEquivocada": "Falsificar o número de chamada exibido no telefone do destinatário configura crime de assédio praticado por meios digitais.",
        "porqueErrada": "Confunde o objeto falsificado com o efeito da conduta: o que se manipula é o identificador técnico do originador, e não a intimidade da vítima. O número forjado apenas explora a confiança no número que aparece na tela.",
        "versaoCorreta": "A falsificação do número de chamada é hipótese de spoofing de identificador, prática que se aproxima da impersonação quando serve para se passar por autoridade ou instituição conhecida."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Pharming: redirecionamento por corrupção da resolução de nomes",
        "Spoofing: falsificação de identificador técnico, como endereço e número",
        "Impersonação: falsificação de identidade pessoal para obter ação",
        "SPF, DKIM e DMARC: mecanismos de verificação da autoria do e-mail"
      ],
      "regras": [
        "A autoria de um e-mail se verifica pelo domínio, e não pelo nome exibido.",
        "Ação sensível exige confirmação por canal previamente cadastrado e distinto do usado no pedido."
      ],
      "comparacoes": [
        "No pharming o desvio ocorre na infraestrutura, antes da requisição; no phishing o desvio ocorre na mensagem que persuade a vítima."
      ],
      "fluxos": [
        "Receber pedido supostamente oficial, confrontar o domínio ou a identificação, confirmar por canal cadastrado, executar se confirmado e registrar a tentativa."
      ],
      "excecoes": [
        "Domínio legítimo não sana pedido indevido: a autoria correta não dispensa o confronto com o procedimento."
      ],
      "palavrasChave": [
        "pharming",
        "spoofing",
        "impersonação",
        "SPF",
        "DKIM",
        "DMARC",
        "canal independente"
      ],
      "checklist": [
        "O endereço digitado confere com o destino realmente acessado?",
        "O domínio remetente é verificável e corresponde ao órgão?",
        "O pedido está previsto no procedimento institucional?",
        "A confirmação foi feita por canal previamente cadastrado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O servidor digita o endereço correto do portal do órgão e chega a uma cópia idêntica que solicita login. Trata-se de phishing ou de pharming?",
        "dados": "Acesso iniciado pela digitação do endereço oficial, sem clique em link recebido; a página reproduz a identidade visual do portal e exige usuário e senha; a resolução do nome está sendo atendida por endereço distinto do institucional.",
        "conceitos": [
          "Vetor de redirecionamento versus vetor de persuasão",
          "Corrupção da resolução de nomes",
          "Ausência de interação prévia como sinal distintivo"
        ],
        "estrategia": "Verificar se houve interação prévia com mensagem suspeita e, na sequência, conferir o destino real da resolução do nome. Sem mensagem e com desvio na resolução, o caso é pharming.",
        "execucao": [
          "Confirmar que o acesso partiu da digitação direta do endereço.",
          "Comparar o endereço resolvido com o utilizado oficialmente pelo órgão.",
          "Inspecionar o arquivo de hosts e o cache DNS da estação em busca de alteração."
        ],
        "resultado": "Trata-se de pharming, cuja base é o redirecionamento da resolução, e não a persuasão. O indício está no endereço exibido continuar aparentemente correto e no desvio ocorrer antes do envio da senha.",
        "justificativa": "A classificação segue a origem do desvio: se a vítima é levada por mensagem, o ataque é phishing; se é levada por corrupção da resolução, é pharming. Como aqui a navegação começou pela digitação direta e a página falsa foi atingida sem interação persuasiva, o vetor é técnico e não comunicativo.",
        "errosFrequentes": [
          "Atribuir qualquer página falsa de login ao phishing, sem examinar como a vítima chegou até ela.",
          "Considerar que a aparência correta do endereço descarta a possibilidade de fraude."
        ],
        "variacao": "Imagine que o servidor tenha recebido mensagem com link disfarçado e, ao clicá-lo, chegue à mesma página falsa. Reclassifique a situação e indique qual evidência muda o diagnóstico."
      },
      {
        "tipo": "aplicacao",
        "problema": "Chega autorização por e-mail pedindo pagamento urgente, assinada pelo gestor. Como blindar o processo contra impersonação?",
        "dados": "Pedido de pagamento a fornecedor novo, valor acima do teto de rotina, remetente com nome do gestor e domínio externo divergente, justificativa de urgência e solicitação de sigilo. O servidor destinatário tem poder de liberar despesas.",
        "conceitos": [
          "Impersonação de gestor",
          "Insuficiência do e-mail como prova de autorização",
          "Autenticação de domínio e de fluxo formal"
        ],
        "estrategia": "Recusar a autorização baseada apenas em e-mail: exigir que pagamentos tramitem em sistema com autenticação forte, confirmar o pedido com o gestor por canal cadastrado e manter registro completo para auditoria.",
        "execucao": [
          "Suspender a liberação e encaminhar o pedido ao canal oficial de pagamentos.",
          "Confirmar com o gestor por meio previamente cadastrado.",
          "Verificar o domínio e conferir SPF, DKIM e DMARC do remetente.",
          "Registrar a tentativa no canal de denúncia para apuração."
        ],
        "resultado": "Com autenticação de domínio, fluxo formal de pagamento, confirmação em canal cadastrado e registro, a tentativa de impersonação não produz efeito financeiro e permanece documentada para auditoria.",
        "justificativa": "A defesa repousa em que autorização não pode se apoiar em meio falsificável. Verificar o domínio ataca o spoofing; o fluxo formal e a confirmação cadastrada atacam a falsificação da pessoa; e o registro garante rastreabilidade da tentativa.",
        "errosFrequentes": [
          "Aceitar urgência e sigilo como justificativa para dispensar o procedimento.",
          "Confirmar o pedido respondendo ao próprio e-mail ou usando telefone informado na mensagem."
        ],
        "variacao": "Admita que o pedido venha do endereço real do gestor, com domínio autenticado. Descreva qual controle adicional permanece necessário e por que ele ainda é indispensável."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor argumenta que a mensagem é oficial porque o nome exibido do remetente está correto e grafia o nome do órgão sem erro. A conclusão procede?",
        "dados": "E-mail exibindo nome do órgão e de servidor real, com endereço remetente em domínio que não pertence à instituição, sem registro SPF publicado pelo suposto remetente e anexo em formato executável.",
        "conceitos": [
          "Nome exibido como campo livremente falsificável",
          "Verificação técnica de domínio",
          "Autenticidade como resultado de verificação, não de aparência"
        ],
        "estrategia": "Desconsiderar o rótulo de exibição e examinar o endereço real e os mecanismos de autenticação do domínio, antes de tratar a mensagem como institucional.",
        "execucao": [
          "Inspecionar o endereço completo do remetente, além do nome exibido.",
          "Verificar a publicação de SPF, DKIM e DMARC do domínio de origem.",
          "Não abrir o anexo e relatar a mensagem pelo canal institucional."
        ],
        "resultado": "A conclusão não procede. O nome exibido é texto livre e falsificável; a autenticidade depende da verificação do domínio e, para ações sensíveis, de confirmação por canal independente.",
        "justificativa": "A leitura ingênua falha ao confundir forma de exibição com prova de origem. Nome exibido é preenchido pelo remetente e pode reproduzir qualquer instituição, enquanto o domínio e seus registros de autenticação permitem verificação objetiva, ainda que imperfeita, da procedência.",
        "errosFrequentes": [
          "Interpretar a grafia correta do nome do órgão como prova de origem institucional.",
          "Confundir a existência de certificado de transporte com a autenticidade do remetente."
        ],
        "variacao": "Suponha que o e-mail tenha domínio e autenticação válidos, mas anexo inesperado. Explique o que ainda assim deve ser verificado e qual princípio de procedimento continua aplicável."
      }
    ]
  }
};
