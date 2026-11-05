const enriParcialM3U5P2 = {
  "m3-u5-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Gravação não autorizada é vetor de vazamento difícil de conter: o conteúdo sai do ambiente controlado e circula sem rastro. A prova cobra a diferença entre gravação pela plataforma e captura externa, as mitigações e a resposta ao incidente.",
      "preRequisitos": [
        "Unidade 3.4 — políticas de gravação e consentimento em videoconferência",
        "Noção de dado pessoal e de base legal no tratamento da informação"
      ],
      "objetivosObservaveis": [
        "Distinguir gravação autorizada de gravação não autorizada em um cenário de reunião",
        "Identificar os cenários de vazamento: participante que grava, anfitrião que omite o aviso e arquivo guardado em local inseguro",
        "Aplicar mitigações de consentimento, restrição de permissão e proteção do arquivo gravado",
        "Descrever as etapas de resposta a um vazamento de gravação, da contenção à comunicação"
      ],
      "competencias": [
        "Proteção da informação em ambientes de videoconferência",
        "Resposta a incidentes de vazamento de conteúdo gravado"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t3-s3 (Retenção, descarte e proteção de gravações) — proteção do arquivo gravado contra vazamento",
        "m3-u4-t3-s2 (Consentimento e bases legais (LGPD)) — fundamento do aviso e do consentimento para gravar",
        "m3-u5-t3-s3 (Boas práticas e resposta a incidentes de comunicação) — resposta ao vazamento de gravação",
        "m3-u5-t1-s2 (Compartilhamento acidental de tela) — outro vetor de exposição em reunião"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Adequação qualitativa média ao programa de concursos de TI e proteção de dados, por estimativa pedagógica: o subtópico sustenta itens sobre gravação, consentimento e vazamento em reuniões, sem configurar tema exclusivo de edital."
      }
    },
    "niveis": {
      "iniciante": "Riscos: participante grava reunião sem consentimento (gravação de tela/áudio) e distribui; anfitrião grava sem informar; gravação armazenada em local inseguro. Mitigações: informar sobre gravação; obter consentimento; restringir gravação ao anfitrião; usar marca d'água (quando disponível); monitorar; política clara. Caso ilustrativo (hipotético): gravação de reunião com dados de clientes distribuída em grupo de mensagens; causa: ausência de política e controle de acesso.",
      "intermediario": "Distinguir os dois caminhos da gravação: a feita pela própria plataforma, que pode ser restrita ao anfitrião e costuma deixar registro administrativo, e a captura externa por software de terceiros, que a plataforma não impede. Escolher a mitigação adequada a cada caso e explicar por que consentimento e comportamento seguem sendo a defesa principal.",
      "avancado": "Reduzir a exposição quando a captura não pode ser bloqueada tecnicamente: limitar a circulação do link de acesso, evitar projetar dado sensível na tela, registrar o aviso de gravação no início da reunião e proteger o arquivo armazenado com permissão mínima e prazo de retenção definido.",
      "especialista": "Conduzir a resposta a um vazamento de gravação: conter o material circulante, avaliar quais dados e pessoas foram atingidos, preservar evidências, comunicar conforme a política institucional e a LGPD, revistar as permissões do repositório e revisar a política de gravação para impedir recorrência."
    },
    "comparacoes": [
      {
        "tema": "Gravação pela plataforma x captura externa",
        "a": {
          "rotulo": "Pela plataforma",
          "texto": "Registro feito pelo próprio serviço de reunião; pode ser limitado ao anfitrião, costuma gerar aviso e deixa rastro administrativo."
        },
        "b": {
          "rotulo": "Captura externa",
          "texto": "Registro feito por software de terceiros na máquina do participante; a plataforma não detecta nem impede o registro."
        },
        "diferencaGabarito": "A gravação pela plataforma é controlável e auditável; a captura externa é quase indetectável, o que desloca a defesa para consentimento, comportamento e minimização do que é exibido."
      },
      {
        "tema": "Conter x divulgar após o vazamento",
        "a": {
          "rotulo": "Conter",
          "texto": "Interromper a circulação do material e restringir o acesso ao arquivo para limitar o dano já ocorrido."
        },
        "b": {
          "rotulo": "Divulgar",
          "texto": "Comunicar o incidente aos envolvidos e à instituição conforme a política interna e a legislação aplicável."
        },
        "diferencaGabarito": "A contenção age sobre o material e reduz o dano; a comunicação atende à política e à transparência, e as duas etapas não se substituem."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Só o anfitrião pode gravar, então não há risco.",
        "porqueErrada": "A restrição de gravação ao anfitrião vale para o recurso da plataforma; qualquer participante pode capturar a tela ou o áudio com software próprio, fora do alcance do serviço.",
        "versaoCorreta": "Restringir a gravação na plataforma reduz o risco, mas não elimina a captura externa: é preciso somar consentimento, aviso e proteção do arquivo."
      },
      {
        "afirmacaoEquivocada": "Gravar sem avisar é aceitável se a reunião for interna.",
        "porqueErrada": "Reunião interna ainda trata de dado pessoal e informação institucional; a ausência de aviso retira dos participantes a chance de não expor determinado conteúdo.",
        "versaoCorreta": "Informar a gravação no início e observar a política da instituição, inclusive quando a reunião é restrita a servidores."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Gravação não autorizada: registro feito sem conhecimento ou concordância dos participantes",
        "Captura externa: gravação por software de terceiros na máquina do participante",
        "Vazamento: distribuição do conteúdo gravado a quem não deveria ter acesso",
        "Marca d'água: identificação do participante na gravação, quando o recurso existe"
      ],
      "regras": [
        "Restringir a gravação ao anfitrião reduz o registro pelo recurso nativo",
        "Informar e obter consentimento antes de gravar",
        "Proteger o arquivo gravado com permissão mínima e prazo de retenção definido"
      ],
      "comparacoes": [
        "Gravação pela plataforma é auditável; captura externa é praticamente invisível"
      ],
      "fluxos": [
        "Detecção do vazamento → contenção do material → avaliação dos dados atingidos → comunicação conforme a política → revisão das permissões"
      ],
      "excecoes": [
        "A captura externa não pode ser impedida tecnicamente pela plataforma de reunião"
      ],
      "palavrasChave": [
        "gravação",
        "consentimento",
        "vazamento",
        "captura externa",
        "retenção"
      ],
      "checklist": [
        "Os participantes foram avisados de que a reunião seria gravada?",
        "A gravação está restrita ao anfitrião ou a pessoas autorizadas?",
        "O arquivo gravado está em local com acesso controlado?",
        "Há prazo de retenção e descarte definidos para a gravação?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma equipe marca reunião por videoconferência para tratar de contratos. Quem pode acionar a gravação e em que circunstância o registro se torna não autorizado?",
        "dados": "Plataforma de videoconferência com recurso de gravação; participantes: 3 servidores e 2 participantes externos; nenhum aviso de gravação foi feito na convocação.",
        "conceitos": [
          "Gravação pela plataforma",
          "Consentimento",
          "Captura externa"
        ],
        "estrategia": "Isolar o conceito: separar quem tem o recurso de gravar na plataforma, em regra anfitrião e coanfitrião autorizado, da possibilidade de qualquer participante registrar a tela ou o áudio por software próprio.",
        "execucao": [
          "1. Verificar quais papéis a plataforma autoriza a gravar.",
          "2. Verificar se os participantes foram avisados da gravação.",
          "3. Verificar se alguém registrou a tela ou o áudio por fora da plataforma.",
          "4. Concluir se o registro foi autorizado ou não autorizado."
        ],
        "resultado": "A gravação é autorizada quando há aviso e consentimento; torna-se não autorizada quando alguém registra sem o conhecimento dos participantes, inclusive por captura externa.",
        "justificativa": "A autorização não depende do recurso disponível na plataforma, mas da concordância de quem participa: sem aviso, qualquer registro do conteúdo tratado configura exposição indevida.",
        "errosFrequentes": [
          "Confundir quem pode gravar na plataforma com quem pode registrar o conteúdo.",
          "Supor que a ausência de aviso automático do serviço impede a captura externa."
        ],
        "variacao": "Reunião em que o próprio anfitrião grava e não avisa: o mesmo raciocínio se aplica, agora quanto à omissão do aviso por quem detém o recurso."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma secretaria precisa preservar o registro das reuniões de planejamento sem violar a privacidade dos participantes. Que conjunto de controles aplicar?",
        "dados": "Reuniões mensais de planejamento com 8 participantes, dois deles terceirizados; política institucional exige aviso e retenção de 12 meses; a plataforma permite restringir a gravação ao anfitrião.",
        "conceitos": [
          "Restrição de gravação",
          "Consentimento",
          "Retenção e descarte",
          "Marca d'água"
        ],
        "estrategia": "Montar os controles em camadas: aviso e consentimento no início, gravação restrita a quem precisa, marca d'água quando disponível, armazenamento com acesso mínimo e prazo de retenção com descarte programado.",
        "execucao": [
          "1. Anunciar a gravação no início e registrar a concordância dos participantes.",
          "2. Restringir o recurso de gravação ao anfitrião designado.",
          "3. Ativar marca d'água de identificação, quando a plataforma oferecer.",
          "4. Guardar o arquivo em pasta com permissão restrita e prazo de retenção definido.",
          "5. Monitorar o acesso e descartar a gravação ao fim do prazo."
        ],
        "resultado": "Gravação restrita, com aviso e consentimento registrados, marca d'água quando disponível, acesso mínimo ao arquivo e descarte ao término da retenção.",
        "justificativa": "Cada controle cobre uma falha distinta: aviso e consentimento tratam da legalidade; restrição e marca d'água reduzem a escala do registro; acesso mínimo e retenção limitam o dano de um acesso indevido.",
        "errosFrequentes": [
          "Deixar a gravação liberada a todos os participantes para simplificar a operação.",
          "Guardar a gravação em pasta de rede aberta por comodidade de acesso."
        ],
        "variacao": "Cenário em que a reunião trata de dado pessoal sensível: além dos controles, avaliar substituir a reunião por troca documental ou aplicar barreiras adicionais de acesso."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Se ninguém usou o botão de gravação da plataforma, a reunião não foi registrada e o conteúdo está protegido.'",
        "dados": "Reunião com 12 participantes, dos quais 5 acessaram de computadores pessoais; o registro da plataforma não mostra gravação pelo serviço; captura de tela por software de terceiros não aparece nesse registro.",
        "conceitos": [
          "Captura externa",
          "Limites do registro da plataforma",
          "Exposição acidental"
        ],
        "estrategia": "Mostrar que a leitura ingênua confunde ausência de gravação na plataforma com ausência de registro do conteúdo: o histórico do serviço só prova que o recurso nativo não foi acionado.",
        "execucao": [
          "1. Interpretar o resultado: o registro não exibe gravação pelo serviço.",
          "2. Reconhecer o que esse registro não cobre: captura por software na máquina do participante.",
          "3. Verificar se aviso e restrição de gravação foram aplicados.",
          "4. Concluir que a proteção depende de consentimento e minimização, não do registro."
        ],
        "resultado": "A conclusão está errada: a ausência de gravação na plataforma não afasta a captura externa, e o conteúdo pode ter sido registrado por participante.",
        "justificativa": "O histórico da plataforma é evidência limitada: descreve apenas ações do recurso nativo. Como a captura externa ocorre fora do ambiente do serviço, a defesa está no aviso e na redução do que é exibido.",
        "errosFrequentes": [
          "Tratar o registro vazio como prova de que não houve gravação do conteúdo.",
          "Acreditar que desativar o recurso nativo encerra o risco de vazamento."
        ],
        "variacao": "Afirmação: 'Com a gravação restrita ao anfitrião, o risco está eliminado.' A leitura correta exige notar que a restrição vale somente para o recurso da plataforma."
      }
    ]
  },
  "m3-u5-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O e-mail é o canal mais usado e um dos mais sujeitos a erro humano: campo marcado por engano, anexo trocado ou histórico encaminhado expõem dados a destinatários indevidos. A prova cobra a diferença entre Cc e Bcc e as prevenções.",
      "preRequisitos": [
        "Unidade 3.1 — cabeçalhos, destinatários e anexos de e-mail",
        "Noção de dado pessoal e de incidente de segurança da informação"
      ],
      "objetivosObservaveis": [
        "Identificar as formas de exposição por e-mail: lista em Cc, anexo errado, histórico no encaminhamento e responder a todos",
        "Explicar por que o Cc expõe os endereços dos destinatários e o Bcc os oculta",
        "Aplicar as mitigações de revisão de destinatários, conferência de anexo e limpeza de histórico",
        "Situar o papel da prevenção de perda de dados na detecção do envio indevido"
      ],
      "competencias": [
        "Manuseio seguro de correio eletrônico institucional",
        "Prevenção de vazamento de dados por comunicação escrita"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u1-t1-s3 (Cabeçalhos, destinatários, anexos, CC e BCC) — base técnica dos campos do e-mail",
        "m3-u1-t2-s1 (Spam, phishing e spoofing) — outro vetor de risco no mesmo canal",
        "m3-u5-t2-s2 (Exposição em calendários e convites) — exposição acidental em canal correlato",
        "m3-u5-t2-s3 (Exposição em plataformas de colaboração) — exposição por permissão e compartilhamento"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância qualitativa média por estimativa pedagógica: exposição por e-mail aparece em itens sobre Cc, Bcc, anexos e encaminhamento, em geral dentro de blocos de segurança da informação, sem ser tema exclusivo de edital."
      }
    },
    "niveis": {
      "iniciante": "Casos: enviar lista de clientes em Cc em vez de Bcc (exposição de e-mails); encaminhar e-mail com histórico sensível; anexar arquivo errado (versão com dados pessoais); responder a todos expondo informação. Mitigações: revisar destinatários, usar Bcc para listas, verificar anexos, limpar histórico ao encaminhar, usar DLP (Data Loss Prevention) quando disponível. Caso ilustrativo (hipotético): envio de planilha com CPFs de servidores para lista em Cc.",
      "intermediario": "Aplicar Bcc em listas e conferir anexos antes do envio: escolher o campo correto conforme a necessidade de ocultar destinatários, abrir o arquivo para confirmar a versão, ler o histórico antes de encaminhar e avaliar se o responder a todos é realmente necessário para cada pessoa.",
      "avancado": "Usar recursos de prevenção de perda de dados e limpar o histórico ao encaminhar: apagar trechos com dado sensível da conversa anterior, manter apenas o contexto necessário e apoiar-se em regras automatizadas que detectam conteúdo sensível na saída.",
      "especialista": "Responder a um incidente de envio indevido: conter a mensagem quando o servidor permitir revogação do envio, levantar quem recebeu o conteúdo, avaliar os dados expostos, comunicar conforme a política institucional e a LGPD e rever os controles do canal."
    },
    "comparacoes": [
      {
        "tema": "Cc x Bcc",
        "a": {
          "rotulo": "Cc",
          "texto": "Exibe o endereço de todos os destinatários a cada um deles; uma lista em Cc revela quem mais recebeu a mensagem."
        },
        "b": {
          "rotulo": "Bcc",
          "texto": "Oculta os endereços dos destinatários em cópia oculta; cada pessoa vê apenas o remetente e o próprio endereço."
        },
        "diferencaGabarito": "Em lista grande, Cc expõe os endereços de terceiros e Bcc preserva a privacidade; a escolha do campo determina se a relação de destinatários vaza."
      },
      {
        "tema": "Encaminhar x responder a todos",
        "a": {
          "rotulo": "Encaminhar",
          "texto": "Leva o histórico e os anexos da conversa para um novo destinatário, que pode não ter relação com o conteúdo anterior."
        },
        "b": {
          "rotulo": "Responder a todos",
          "texto": "Devolve a resposta ao grupo inteiro, tornando visível a quem não deveria receber a informação tratada."
        },
        "diferencaGabarito": "Encaminhar carrega o passado da conversa; responder a todos amplia a plateia — ambos exigem revisão de conteúdo e de destinatários antes do envio."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Usar Cc é aceitável para listas internas.",
        "porqueErrada": "Lista interna ainda é lista: todos os destinatários passam a ver os endereços uns dos outros, o que expõe dados de contato e facilita spam e phishing direcionado.",
        "versaoCorreta": "Em listas, usar Bcc; reservar o Cc para destinatários que realmente precisam saber quem mais recebeu a cópia."
      },
      {
        "afirmacaoEquivocada": "Encaminhar não expõe histórico.",
        "porqueErrada": "O encaminhamento costuma incluir a conversa anterior e os anexos já trocados, levando dado sensível a quem nunca teve acesso autorizado a eles.",
        "versaoCorreta": "Antes de encaminhar, revisar e limpar o histórico, mantendo só o contexto necessário ao novo destinatário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Cc: campo que exibe os endereços a todos os destinatários da mensagem",
        "Bcc: campo que oculta os endereços em cópia invisível",
        "Encaminhamento: reenvio que costuma carregar histórico e anexos",
        "Prevenção de perda de dados: recurso que detecta e bloqueia envio de conteúdo sensível"
      ],
      "regras": [
        "Revisar destinatários e anexos antes de enviar",
        "Usar Bcc em listas grandes",
        "Limpar o histórico ao encaminhar mensagem"
      ],
      "comparacoes": [
        "Cc expõe a lista de destinatários; Bcc a oculta"
      ],
      "fluxos": [
        "Revisar destinatários → conferir anexo → limpar histórico → enviar, com prevenção de perda de dados quando disponível"
      ],
      "excecoes": [
        "A prevenção de perda de dados depende de configuração e de disponibilidade na plataforma"
      ],
      "palavrasChave": [
        "exposição",
        "Cc",
        "Bcc",
        "anexo",
        "histórico",
        "prevenção de perda de dados"
      ],
      "checklist": [
        "Os destinatários foram revisados um a um?",
        "O campo é Cc ou Bcc — o ocultamento é necessário?",
        "O anexo é a versão correta e foi aberto antes do envio?",
        "O histórico foi limpo no encaminhamento?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um setor precisa enviar um comunicado a 400 pessoas. O que acontece se todos os endereços forem colocados no campo Cc?",
        "dados": "Lista com 400 endereços de servidores e fornecedores; campos disponíveis: Para, Cc e Bcc; nenhuma regra de prevenção de perda de dados configurada no serviço.",
        "conceitos": [
          "Cc",
          "Bcc",
          "Exposição de endereços"
        ],
        "estrategia": "Isolar o conceito: explicar o comportamento distinto dos campos, mostrando que o Cc torna cada endereço visível aos demais destinatários, enquanto o Bcc os oculta uns dos outros.",
        "execucao": [
          "1. Identificar que a lista tem muitos destinatários.",
          "2. Reconhecer que o Cc exibe cada endereço aos demais.",
          "3. Concluir que a relação inteira fica exposta a todos.",
          "4. Escolher Bcc para preservar os endereços."
        ],
        "resultado": "Com Cc, todos os 400 endereços ficam visíveis a todos os destinatários; com Bcc, cada pessoa vê apenas o remetente e o próprio endereço.",
        "justificativa": "O comportamento do campo é a evidência: Cc compartilha a lista com todos, expondo dados de contato de terceiros e facilitando spam direcionado; Bcc existe para evitar essa exposição.",
        "errosFrequentes": [
          "Achar que endereço de e-mail não é dado pessoal.",
          "Supor que, sendo comunicado interno, o uso de Cc é inofensivo."
        ],
        "variacao": "Envio a 30 destinatários externos em que o remetente quer que todos saibam quem recebeu: nesse caso o Cc é a escolha adequada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um analista deve enviar a versão final de uma planilha de orçamento a um destinatário externo, sem expor a versão interna com dados de servidores.",
        "dados": "Pasta com dois arquivos: 'orçamento_v2_interno.xlsx', com dados de servidores, e 'orçamento_v2_externo.xlsx'; prazo de envio no fim do dia; política proíbe envio de planilha com dado pessoal sem proteção.",
        "conceitos": [
          "Conferência de anexo",
          "Versão de documento",
          "Prevenção de perda de dados"
        ],
        "estrategia": "Tratar o anexo como etapa obrigatória do envio: conferir nome, versão e conteúdo imediatamente antes de enviar, e manter nomenclatura que dificulte a confusão entre versões.",
        "execucao": [
          "1. Abrir o arquivo escolhido e conferir o conteúdo antes de anexar.",
          "2. Comparar o nome com a versão autorizada para envio externo.",
          "3. Revisar destinatário e assunto da mensagem.",
          "4. Enviar e respeitar o bloqueio da prevenção de perda de dados, se houver."
        ],
        "resultado": "A versão externa é enviada após conferência de conteúdo, com destinatário revisado e eventual bloqueio automatizado respeitado.",
        "justificativa": "O erro de anexo nasce da seleção em pastas com nomes parecidos; conferir o conteúdo, e não apenas o nome do arquivo, é o que garante que a versão com dado pessoal não saia da instituição.",
        "errosFrequentes": [
          "Confiar apenas no nome do arquivo sem abri-lo.",
          "Anexar direto da lista de arquivos recentes, que ainda guarda a versão anterior."
        ],
        "variacao": "Cenário em que o anexo correto já foi enviado, mas com histórico sensível na mensagem: aplica-se a limpeza do histórico em novo envio."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Encaminhar uma mensagem transmite somente o texto que o remetente escreveu, sem o conteúdo anterior da conversa.'",
        "dados": "Conversa com 12 mensagens trocadas ao longo de três semanas, contendo números de documento e anexos; o remetente encaminha a última mensagem a um destinatário externo.",
        "conceitos": [
          "Encaminhamento",
          "Histórico de conversa",
          "Minimização"
        ],
        "estrategia": "Mostrar que a leitura ingênua confunde encaminhar com responder: o encaminhamento costuma carregar a conversa completa e os anexos, de modo que o novo destinatário recebe o passado do assunto.",
        "execucao": [
          "1. Identificar o que a afirmação supõe sobre o encaminhamento.",
          "2. Verificar que a conversa e os anexos costumam acompanhar a mensagem encaminhada.",
          "3. Reconhecer que o destinatário externo passa a ter acesso a dado sensível.",
          "4. Concluir que é preciso limpar o histórico antes de encaminhar."
        ],
        "resultado": "A afirmação está errada: o encaminhamento pode incluir histórico e anexos sensíveis, e o conteúdo deve ser revisado e reduzido antes do envio.",
        "justificativa": "O cliente replica a conversa ao encaminhar, e não apenas a última mensagem; o destinatário novo recebe dados nunca autorizados para ele, o que caracteriza exposição acidental e pode configurar incidente.",
        "errosFrequentes": [
          "Confundir encaminhar com responder, que mantém o foco na resposta atual.",
          "Achar que apagar a última mensagem remove o histórico anterior da conversa."
        ],
        "variacao": "Afirmação: 'Responder a todos equivale a encaminhar.' A diferença está nos destinatários alcançados e no volume de histórico transportado."
      }
    ]
  }
};
