const enriParcialM3U1P2 = {
  "m3-u1-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os campos do cabeçalho definem quem vê a mensagem e para onde vai a resposta, e um erro neles expõe endereços de terceiros sem intenção. O Bcc é o campo correto para listas; o Cc, ao contrário, mostra todos os destinatários entre si. Em prova, a cobrança recai sobre a função de cada campo e sobre o efeito do 'Responder a todos' em mensagem recebida por cópia oculta.",
      "preRequisitos": [
        "Noção de mensagem de correio e de endereço de e-mail",
        "Formato MIME e ideia de anexo como parte da mensagem",
        "Diferença entre remetente exibido e endereço de resposta"
      ],
      "objetivosObservaveis": [
        "Identificar a função de From, To, Cc, Bcc, Reply-To e Message-ID",
        "Explicar a diferença entre Cc e Bcc quanto à visibilidade dos endereços",
        "Indicar o campo adequado ao envio para listas de destinatários",
        "Reconhecer que anexos são transportados com codificação MIME"
      ],
      "competencias": [
        "Redação de mensagens com uso correto dos campos de destinatário",
        "Proteção de dados pessoais em listas de distribuição"
      ],
      "dificuldade": "iniciante",
      "relacoes": [
        "m3-u1-t1-s1 (SMTP — Simple Mail Transfer Protocol) — protocolo que transporta a mensagem e seus cabeçalhos",
        "m3-u1-t2-s1 (Spam, phishing e spoofing) — leitura dos cabeçalhos na triagem de fraude",
        "m3-u5-t2-s1 (Exposição por e-mail (CC/BCC, anexos, encaminhamento)) — risco de privacidade no uso dos campos",
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — proteção de dados pessoais dos destinatários"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens sobre a função do Bcc e sobre exposição de endereços em listas são parte do conteúdo programático. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Cabeçalhos de e-mail: From (remetente), To (destinatário principal), Cc (Carbon Copy — destinatários secundários que veem os demais destinatários), Bcc (Blind Carbon Copy — destinatários ocultos; os demais não veem). Assunto (Subject) é o título do e-mail. Anexos são arquivos codificados em base64 e incluídos no corpo MIME. O cabeçalho 'Reply-To' define o endereço de resposta (pode ser diferente do remetente). O cabeçalho 'Message-ID' é um identificador único do e-mail.",
      "intermediario": "O que distingue Cc de Bcc é a visibilidade: em Cc todos os destinatários, inclusive os secundários, aparecem na mensagem; em Bcc os endereços ficam ocultos uns dos outros e também de quem está em To e Cc. Por isso o Bcc é o campo usado em comunicados a listas, enquanto o Cc serve à cópia formal, em que a ciência de todos é desejada e não há dados a resguardar.",
      "avancado": "O Reply-To desvia a resposta do From, o que é legítimo em caixas de atendimento, mas exige leitura atenta antes de responder. O 'Responder a todos' alcança os destinatários visíveis em To e Cc, de modo que uma resposta dada em mensagem recebida por Bcc pode alcançar toda a lista visível; anexos, por sua vez, trafegam codificados pelo MIME e são decodificados apenas pelo cliente.",
      "especialista": "Diante de um incidente de exposição de lista, a reconstrução começa pelos campos da mensagem original: se os endereços estavam em To ou Cc, a visibilidade era inevitável e a falha está no processo de envio; se estavam em Bcc, a reexposição veio do 'Responder a todos'. A correção proposta é padrão de envio com Bcc e orientação de resposta, e não troca de ferramenta."
    },
    "comparacoes": [
      {
        "tema": "Cc versus Bcc",
        "a": {
          "rotulo": "Cc (cópia carbono)",
          "texto": "Destinatários secundários que recebem a mensagem e veem todos os demais endereços, inclusive os de outras pessoas em Cc. Indicado quando a ciência de todos é intencional e não há dados pessoais a resguardar."
        },
        "b": {
          "rotulo": "Bcc (cópia oculta)",
          "texto": "Destinatários que recebem a mensagem sem que seus endereços apareçam para os outros, nem para quem está em To e Cc. É o campo usado em comunicados a listas, justamente para não expor endereços."
        },
        "diferencaGabarito": "Cc é visível e Bcc é oculto: em lista de destinatários, usar Cc expõe todos os endereços e é erro de privacidade. Afirmar que os dois campos têm a mesma função inverte o gabarito."
      },
      {
        "tema": "From versus Reply-To",
        "a": {
          "rotulo": "From",
          "texto": "Endereço do remetente exibido na mensagem. Identifica quem enviou, mas não determina para onde a resposta do destinatário será encaminhada."
        },
        "b": {
          "rotulo": "Reply-To",
          "texto": "Endereço que o cliente usa quando o destinatário responde. Pode divergir legitimamente do From, como ocorre em caixas de atendimento."
        },
        "diferencaGabarito": "A resposta segue o Reply-To quando ele existe, e não o From. Afirmar que a resposta sempre volta ao remetente exibido desconsidera o cabeçalho e leva ao erro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Cc e Bcc têm a mesma funcionalidade.",
        "porqueErrada": "Confunde cópia visível com cópia oculta: em Cc todos os destinatários se veem; em Bcc nenhum endereço é revelado aos demais.",
        "versaoCorreta": "Cc exibe os destinatários secundários para todos; Bcc os mantém ocultos, e é o campo correto para enviar a listas sem expor endereços."
      },
      {
        "afirmacaoEquivocada": "A resposta a uma mensagem sempre vai para o endereço do remetente.",
        "porqueErrada": "Ignora o cabeçalho Reply-To, que quando presente passa a ser o destino das respostas, mesmo divergindo do From.",
        "versaoCorreta": "Se a mensagem trouxer Reply-To, a resposta é dirigida a esse endereço; na ausência dele, volta ao From."
      },
      {
        "afirmacaoEquivocada": "Anexos são transportados em texto puro dentro da mensagem.",
        "porqueErrada": "Desconsidera o padrão MIME: o arquivo é codificado para o transporte, historicamente em base64, e somente o cliente o reconstitui na entrega.",
        "versaoCorreta": "O anexo viaja como parte MIME da mensagem, codificado, e é decodificado pelo cliente de e-mail do destinatário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "From: remetente exibido na mensagem",
        "To: destinatários principais; Cc: cópias visíveis a todos",
        "Bcc: cópias ocultas, invisíveis aos demais destinatários",
        "Reply-To: endereço de destino das respostas",
        "MIME: estrutura que transporta anexos codificados"
      ],
      "regras": [
        "Listas de destinatários devem usar Bcc para não expor endereços",
        "Anexos são codificados pelo MIME, historicamente em base64",
        "A resposta segue o Reply-To quando presente, e o From na ausência dele"
      ],
      "comparacoes": [
        "Cc exibe os endereços de todos; Bcc os oculta de todos"
      ],
      "fluxos": [
        "Remetente redige com From, To e Bcc; o cliente codifica o anexo em MIME; o SMTP transporta a mensagem; o destinatário decodifica e responde conforme o Reply-To"
      ],
      "excecoes": [
        "O Reply-To pode divergir legitimamente do From, como em caixas de atendimento"
      ],
      "palavrasChave": [
        "cabeçalho",
        "cópia oculta",
        "destinatário",
        "anexo",
        "MIME",
        "Reply-To"
      ],
      "checklist": [
        "Identifico a função de cada campo do cabeçalho?",
        "Sei quando usar Bcc em lugar de Cc?",
        "Verifico o Reply-To antes de responder?",
        "Reconheço que anexos são codificados pelo MIME?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma mensagem é enviada com From: ana@escola.br, To: bruno@orgao.br, Cc: clara@escola.br e Bcc: dani@escola.br. Quem consegue ver o endereço de dani?",
        "dados": "Cabeçalhos informados: From ana@escola.br; To bruno@orgao.br; Cc clara@escola.br; Bcc dani@escola.br. Cada destinatário recebe uma cópia da mensagem.",
        "conceitos": [
          "Bcc oculta endereços dos demais destinatários",
          "Cc é visível a todos que recebem a mensagem"
        ],
        "estrategia": "Separar os campos visíveis dos ocultos e analisar a mensagem do ponto de vista de cada destinatário, e não do remetente.",
        "execucao": [
          "Listar os campos visíveis: From, To e Cc aparecem para todos que recebem a mensagem",
          "Reconhecer que o Bcc não é exibido, de modo que dani@escola.br não aparece para ninguém",
          "Verificar o que cada destinatário vê: bruno e clara enxergam ana, um ao outro, e clara em Cc",
          "Concluir que dani recebe a mensagem sem revelar o endereço e sem ver os demais em Bcc"
        ],
        "resultado": "Ninguém vê o endereço de dani: o Bcc fica oculto para todos, inclusive para os destinatários em To e Cc. Apenas ana sabe que a cópia foi enviada.",
        "justificativa": "O Bcc retira o endereço da parte visível da mensagem, e é justamente essa propriedade que o torna o campo adequado a listas. Como o campo não é exibido, cada destinatário recebe a mensagem como se os endereços ocultos não existissem, o que preserva a privacidade de dani sem impedir a entrega.",
        "errosFrequentes": [
          "Supor que o Bcc é visto pelos demais destinatários, comportamento que é do Cc",
          "Achar que o remetente deixa de saber quem recebeu, quando a cópia oculta é conhecida por quem envia"
        ],
        "variacao": "A mensagem passa a trazer To: lista@escola.br com cem destinatários em Bcc: a mesma regra se aplica em escala, e a lista inteira recebe sem expor endereço algum."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa envia um comunicado com extrato em anexo para 500 clientes, sem expor os endereços uns aos outros. Que campo usar e como o anexo trafega?",
        "dados": "Remetente: atendimento@banco.br. Anexo: extrato.pdf de 1,2 MB. Destinatários: 500 clientes, cada um com endereço distinto. Requisito: nenhum endereço visível aos demais.",
        "conceitos": [
          "Bcc como campo oculto para listas de destinatários",
          "Anexos transportados como parte MIME com codificação"
        ],
        "estrategia": "Colocar todos os clientes em Bcc para que cada um receba isoladamente, e tratar o extrato como parte MIME codificada, que o cliente decodifica ao exibir a mensagem.",
        "execucao": [
          "Redigir a mensagem com To no próprio endereço de atendimento e os 500 clientes em Bcc",
          "Anexar o extrato.pdf, que passa a integrar a mensagem como parte MIME codificada",
          "Enviar pelo SMTP, que transporta cabeçalhos, corpo e anexo sem alterar a ocultação do Bcc",
          "Confirmar em um cliente de teste que cada destinatário vê apenas o próprio endereço"
        ],
        "resultado": "Bcc com os 500 clientes, e o extrato.pdf trafega como parte MIME codificada, sendo decodificado pelo cliente de cada destinatário.",
        "justificativa": "O Bcc é o único campo que entrega a mensagem a muitos destinatários sem revelar endereço algum, o que atende ao requisito de privacidade. O anexo não é enviado em texto puro: o MIME o codifica para o transporte e o cliente o reconstrói, de modo que a empresa não precisa de nenhum mecanismo extra para isso.",
        "errosFrequentes": [
          "Usar To ou Cc com os 500 endereços, expondo dados pessoais de todos os clientes",
          "Achar que o anexo exige protocolo próprio, quando ele integra a própria mensagem pelo MIME"
        ],
        "variacao": "O comunicado passa a exigir resposta dos clientes: a orientação é responder somente ao remetente, e não usar 'Responder a todos', que alcançaria os destinatários visíveis em To e Cc."
      },
      {
        "tipo": "erro",
        "problema": "Um funcionário recebe um comunicado da diretoria enviado com Bcc e aciona 'Responder a todos' para comentar com o remetente. A resposta é entregue também aos gestores em To e Cc, e ele alega que o Bcc deveria ter protegido a conversa. O que há de errado nessa leitura?",
        "dados": "Cabeçalhos originais: From diretoria@orgao.br; To 12 gestores; Cc 4 coordenadores; Bcc 210 funcionários; Reply-To ausente. Ação do funcionário: 'Responder a todos'. Resultado observado: 16 destinatários visíveis receberam a resposta.",
        "conceitos": [
          "Bcc oculta endereços, mas não altera o alcance do 'Responder a todos'",
          "Destinatários visíveis em To e Cc são alcançados pela resposta"
        ],
        "estrategia": "Distinguir o que o Bcc oculta no envio do que o 'Responder a todos' alcança na resposta: os dois efeitos são independentes e precisam ser analisados em separado.",
        "execucao": [
          "Listar os destinatários visíveis da mensagem original em To e Cc",
          "Verificar que o Bcc ocultou os 210 endereços uns dos outros, sem participar da visibilidade",
          "Confrontar o alcance do 'Responder a todos', que devolve a resposta a todos os visíveis",
          "Concluir que a exposição veio do comando usado, e não do campo oculto"
        ],
        "resultado": "A leitura está errada: o Bcc protegeu os endereços no envio original, mas o 'Responder a todos' alcança quem está em To e Cc. A conversa teria ficado restrita com o 'Responder' simples.",
        "justificativa": "O Bcc retira endereços da lista visível, mas não transforma a mensagem em correspondência privada. O 'Responder a todos' opera sobre os destinatários que a mensagem declara de forma visível, de modo que a proteção do campo oculto não se estende à resposta, e foi exatamente isso que o funcionário deixou de considerar.",
        "errosFrequentes": [
          "Tratar o Bcc como garantia de privacidade de toda a conversa, incluindo as respostas",
          "Confundir 'Responder' com 'Responder a todos' em mensagem que tem muitos destinatários visíveis"
        ],
        "variacao": "A mensagem trouxer Reply-To: suporte@orgao.br e o funcionário acionar 'Responder': a resposta deixa de ir ao From e passa a ser entregue ao endereço declarado nesse cabeçalho."
      }
    ]
  },
  "m3-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Spam, phishing e falsificação de remetente são fenômenos distintos que chegam à mesma caixa de entrada, e confundi-los leva à resposta errada: filtrar o que é fraude ou tratar como fraude o que é apenas propaganda. A falsificação do endereço exibido é combatida por SPF, DKIM e DMARC, que autenticam o domínio sem avaliar a intenção de quem escreve.",
      "preRequisitos": [
        "Conceito de remetente, cabeçalho e domínio de e-mail",
        "Noção de sessão protegida por TLS no transporte da mensagem",
        "Diferença entre mensagem legítima e mensagem forjada"
      ],
      "objetivosObservaveis": [
        "Definir spam, phishing, spear phishing, whaling e falsificação de remetente",
        "Reconhecer sinais de fraude em uma mensagem suspeita",
        "Explicar o que SPF, DKIM e DMARC autenticam no domínio",
        "Indicar a conduta segura diante de uma suspeita"
      ],
      "competencias": [
        "Triagem defensiva de mensagens antes de qualquer ação",
        "Leitura dos mecanismos de autenticação de domínio"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u1-t1-s3 (Cabeçalhos, destinatários, anexos, CC e BCC) — leitura do remetente exibido e dos cabeçalhos na triagem de fraude",
        "m3-u1-t1-s1 (SMTP — Simple Mail Transfer Protocol) — transporte da mensagem e das respostas do servidor remetente",
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — modalidades de fraude aprofundadas no módulo de segurança",
        "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — proteção do transporte, que não confirma a identidade de quem escreve"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A distinção entre spam, phishing e falsificação de remetente faz parte do conteúdo programático. A classificação é qualitativa e reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Spam: e-mails não solicitados, geralmente comerciais ou maliciosos. Phishing: e-mails fraudulentos que se passam por entidades confiáveis (bancos, empresas) para roubar credenciais ou dados. Spear phishing: phishing direcionado a uma pessoa ou organização específica. Spoofing de remetente: falsificação do endereço 'From' para fazer o e-mail parecer legítimo. Técnicas de autenticação: SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), DMARC (Domain-based Message Authentication, Reporting and Conformance).",
      "intermediario": "Os sinais de fraude são observáveis: urgência injustificada, link que aponta para endereço diferente do exibido, erros de idioma, anexo inesperado e pedido de credencial ou de pagamento a conta não cadastrada. A conduta correta é não clicar, não responder e confirmar o pedido por outro canal antes de agir.",
      "avancado": "SPF lista os servidores autorizados a enviar em nome do domínio; DKIM assina a mensagem e atesta sua integridade; DMARC define a política quando SPF ou DKIM falham e produz relatórios. Os três reduzem a falsificação direta do domínio, mas não cobrem conta comprometida nem domínio visualmente parecido, que seguem sendo vetores de fraude.",
      "especialista": "A avaliação de uma mensagem parte de três camadas independentes: autenticação do domínio, contexto do pedido e confirmação por canal alternativo. Autenticação aprovada afasta apenas a falsificação de remetente; a decisão de agir depende do conteúdo e da corroboração fora do e-mail."
    },
    "comparacoes": [
      {
        "tema": "Phishing versus spam",
        "a": {
          "rotulo": "Spam",
          "texto": "Mensagem não solicitada, em massa, de conteúdo comercial ou malicioso. Não exige identidade falsa: o objetivo é volume, e a resposta esperada é filtro e descadastro."
        },
        "b": {
          "rotulo": "Phishing",
          "texto": "Fraude que se passa por entidade confiável para obter credencial, dado ou pagamento. Exige identidade falsa e direcionamento, e a resposta esperada é bloqueio, comunicação ao suporte e confirmação por outro canal."
        },
        "diferencaGabarito": "O spam se define pelo envio em massa não solicitado; o phishing, pela falsificação de identidade com intenção de enganar. Todo phishing pode chegar como spam, mas nem todo spam é phishing — inverter a relação é erro de gabarito."
      },
      {
        "tema": "Spoofing versus conta comprometida",
        "a": {
          "rotulo": "Spoofing",
          "texto": "O endereço do remetente é forjado e a mensagem parte de servidor alheio ao domínio. SPF, DKIM e DMARC atuam exatamente aqui, acusando o envio não autorizado."
        },
        "b": {
          "rotulo": "Conta comprometida",
          "texto": "O envio parte de credencial válida roubada, com domínio autenticado e assinatura legítima. Nenhum mecanismo de autenticação de domínio distingue o titular do invasor."
        },
        "diferencaGabarito": "No spoofing o remetente é forjado e a autenticação falha; na conta comprometida ela passa, e a fraude se revela apenas pelo conteúdo e pelo contexto. Afirmar que a autenticação elimina o phishing ignora a segunda situação."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "SPF, DKIM e DMARC tornam o phishing impossível.",
        "porqueErrada": "Atribui aos mecanismos uma garantia que eles não têm: autenticam o domínio de envio, mas não avaliam o conteúdo nem confirmam quem escreveu a mensagem.",
        "versaoCorreta": "Eles reduzem a falsificação de remetente; domínios visualmente parecidos e contas comprometidas continuam sendo vetores de fraude."
      },
      {
        "afirmacaoEquivocada": "Spam e phishing são sinônimos.",
        "porqueErrada": "Confunde envio em massa com fraude: o spam é propaganda ou lixo eletrônico não solicitado; o phishing imita entidade confiável para capturar dado.",
        "versaoCorreta": "O spam é mensagem não solicitada; o phishing é fraude por falsificação de identidade. Um pode ocorrer sem o outro, e só o segundo tem intenção de enganar."
      },
      {
        "afirmacaoEquivocada": "O nome exibido do remetente comprova a origem da mensagem.",
        "porqueErrada": "O nome exibido é campo livre da mensagem e pode ser falsificado, o que permite que remetente forjado apareça com o nome de um colega ou de um banco.",
        "versaoCorreta": "A verificação recai sobre o domínio real do endereço e sobre o resultado da autenticação, e não sobre o nome que a mensagem exibe."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Spam: mensagem não solicitada, enviada em massa",
        "Phishing: fraude que se passa por entidade confiável",
        "Spear phishing: versão personalizada e direcionada da fraude",
        "Whaling: fraude direcionada a alvo de alta hierarquia",
        "Spoofing: falsificação do endereço exibido como remetente",
        "SPF, DKIM e DMARC: autenticação do domínio de envio"
      ],
      "regras": [
        "SPF lista os servidores autorizados a enviar pelo domínio",
        "DKIM assina a mensagem e atesta sua integridade",
        "DMARC define a política quando SPF ou DKIM falham e gera relatórios"
      ],
      "comparacoes": [
        "Spam é massa não solicitada; phishing é fraude com identidade falsa"
      ],
      "fluxos": [
        "Mensagem recebida → verificar autenticação do domínio → avaliar sinais de fraude no conteúdo → confirmar por outro canal antes de agir"
      ],
      "excecoes": [
        "A autenticação aprovada não afasta a fraude: conta comprometida e domínio visualmente parecido escapam aos mecanismos"
      ],
      "palavrasChave": [
        "fraude",
        "urgência",
        "autenticação",
        "remetente forjado",
        "engenharia social",
        "spam"
      ],
      "checklist": [
        "Distingo spam de phishing?",
        "Reconheço sinais de fraude na mensagem?",
        "Explico o que SPF, DKIM e DMARC autenticam?",
        "Sei que autenticação aprovada não é garantia de legitimidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Diferencie spam de phishing a partir de duas mensagens recebidas pelo mesmo usuário em um mesmo dia.",
        "dados": "Mensagem 1: oferta não solicitada de colchão ortopédico, enviada a milhares de destinatários, com link de descadastro. Mensagem 2: aviso com o logotipo do banco do usuário, pedindo a senha de acesso por formulário externo, dirigido somente a ele.",
        "conceitos": [
          "Spam como envio em massa não solicitado",
          "Phishing como fraude com identidade falsa"
        ],
        "estrategia": "Comparar volume de destinatários, intenção declarada e presença de solicitação de dado sensível; a intenção de enganar é o que separa as duas categorias.",
        "execucao": [
          "Verificar a origem e o volume do envio: distribuição automatizada em massa indica spam",
          "Examinar a intenção: conteúdo comercial sem pedido de credencial é spam, ainda que indesejado",
          "Examinar a segunda mensagem: imitação de entidade confiável com pedido de senha é phishing",
          "Classificar os dois casos e registrar que o tratamento de cada um é diferente"
        ],
        "resultado": "A mensagem 1 é spam: não solicitada e em massa, sem intenção declarada de fraude. A mensagem 2 é phishing: imita o banco para capturar credencial. Ambas são indesejadas, mas só a segunda é fraude.",
        "justificativa": "O spam se define pelo caráter não solicitado e pelo volume; o phishing se define pela falsificação de identidade e pelo objetivo de obter dado ou pagamento. Por isso a resposta difere: filtro e descadastro para o spam, bloqueio e comunicação ao suporte para o phishing.",
        "errosFrequentes": [
          "Tratar todo indesejado como phishing, ignorando que o spam pode ser apenas propaganda",
          "Esperar que o phishing sempre venha em massa, quando campanhas direcionadas atingem poucos alvos"
        ],
        "variacao": "A mensagem fraudulenta chega personalizada com o nome e o cargo do destinatário, após coleta em rede social: passa a ser spear phishing, a versão direcionada do phishing."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como SPF, DKIM e DMARC protegem o domínio de uma organização contra a falsificação de remetente?",
        "dados": "Domínio: orgao.br. SPF publicado: dois servidores de saída autorizados e nenhum outro. DKIM: chave assimétrica de 2048 bits, com assinatura no cabeçalho. DMARC: política de rejeição, com relatórios ao administrador. Mensagem de teste: From rh@orgao.br enviada por servidor externo não listado.",
        "conceitos": [
          "SPF valida os servidores autorizados a enviar pelo domínio",
          "DKIM assina a mensagem e DMARC define a política a aplicar"
        ],
        "estrategia": "Verificar cada camada em sequência: quem pode enviar pelo domínio, se a mensagem está assinada e íntegra, e qual política aplicar quando alguma verificação falha.",
        "execucao": [
          "Consultar o SPF do domínio e confirmar que o servidor de envio da mensagem de teste não está na lista",
          "Conferir a assinatura DKIM e a integridade dos cabeçalhos da mensagem",
          "Aplicar a política do DMARC: sem SPF nem DKIM válidos, a diretriz de rejeição determina o descarte",
          "Registrar o evento no relatório do DMARC para monitoramento do domínio"
        ],
        "resultado": "O SPF acusa envio fora dos servidores autorizados, o DKIM sustenta a integridade das mensagens legítimas e o DMARC aplica a política de rejeição. Juntos, eles reduzem a falsificação do domínio.",
        "justificativa": "Cada mecanismo cobre uma falha distinta: o SPF atesta a origem do envio, o DKIM a integridade e a autoria da assinatura, e o DMARC a decisão sobre o que fazer quando as verificações falham. A fraude por falsificação de endereço depende de ao menos uma delas para passar, e a combinação das três fecha o caminho mais comum.",
        "errosFrequentes": [
          "Atribuir ao DKIM a função de listar servidores autorizados, que é do SPF",
          "Esperar que os mecanismos barram qualquer fraude, sem considerar conta comprometida e domínio visualmente parecido"
        ],
        "variacao": "A mensagem parte de servidor listado no SPF, mas sem assinatura DKIM: a decisão passa a depender do alinhamento do SPF, e o descarte só ocorre se essa verificação também falhar."
      },
      {
        "tipo": "erro",
        "problema": "Um analista recebe mensagem com From: diretor@orgao.br pedindo pagamento urgente a uma conta bancária não cadastrada. O relatório de autenticação mostra SPF, DKIM e DMARC aprovados, e ele conclui que a mensagem é legítima. O que há de errado nessa leitura?",
        "dados": "Cabeçalho From: diretor@orgao.br. Resultado da autenticação do domínio: SPF, DKIM e DMARC aprovados. Conteúdo: promessa de fatura, urgência e conta bancária não cadastrada. Contexto: nenhum pedido de pagamento foi confirmado por telefone ou outro canal.",
        "conceitos": [
          "SPF, DKIM e DMARC autenticam o domínio, não a intenção",
          "Conta comprometida produz autenticação legítima"
        ],
        "estrategia": "Separar dois planos: o que os mecanismos comprovam, isto é, o domínio e os servidores de envio, e o que eles não comprovam, isto é, a identidade de quem escreveu e a legitimidade do pedido.",
        "execucao": [
          "Ler o resultado da autenticação e reconhecer que ele atesta o domínio de envio",
          "Verificar se o pedido foi confirmado por canal alternativo, o que não ocorreu",
          "Cruzar com o padrão da fraude: urgência, conta nova e ausência de corroboração",
          "Classificar a mensagem como suspeita e acionar o suporte de segurança antes de qualquer pagamento"
        ],
        "resultado": "A leitura está errada: autenticação aprovada não afasta a fraude. A mensagem partiu de conta válida do domínio, possivelmente comprometida, e o pedido segue o padrão de fraude por engenharia social.",
        "justificativa": "O SPF atesta os servidores autorizados, o DKIM a integridade e a assinatura da mensagem, e o DMARC a política aplicada; nenhum deles avalia o conteúdo nem confirma que o titular da conta escreveu. Quando a credencial é roubada, os três passam, e somente a análise do contexto e a confirmação fora do e-mail revelam a fraude.",
        "errosFrequentes": [
          "Interpretar autenticação aprovada como atestado de legitimidade do pedido",
          "Descartar a suspeita porque o domínio é o da própria organização, sem considerar comprometimento de conta"
        ],
        "variacao": "A mensagem parte de domínio com grafia imitativa do legítimo: a autenticação do domínio real falha, e o diagnóstico passa a ser o uso de endereço visualmente semelhante, outro caminho que escapa aos mecanismos."
      }
    ]
  }
};
