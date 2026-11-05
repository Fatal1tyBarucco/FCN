const curriculumM3 = {
  "modulo-3": {
    "titulo": "COMUNICAÇÃO E COLABORAÇÃO",
    "unidades": [
      {
        "id": "modulo-3-unidade-1",
        "titulo": "3.1 Correio Eletrônico",
        "topicos": [
          {
            "id": "modulo-3-unidade-1-topico-1",
            "titulo": "SMTP, POP3 e IMAP",
            "subtopicos": [
              {
                "id": "m3-u1-t1-s1",
                "titulo": "SMTP — Simple Mail Transfer Protocol",
                "objetivoAprendizagem": "Aluno compreenderá o funcionamento do SMTP para envio de e-mails.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é o SMTP e qual problema ele resolve (envio e transporte de mensagens); (b) as portas usuais 25, 587 e 465 e o papel distinto de cada uma; (c) os comandos textuais do protocolo; (d) a diferença entre submissão do cliente e relay entre servidores; (e) como o STARTTLS e o SMTPS protegem o envio. POR QUE O CONHECIMENTO É IMPORTANTE: o correio eletrônico é a espinha dorsal da comunicação institucional; entender o SMTP permite diagnosticar falhas de envio, reconhecer riscos de fraude e compreender por que a segurança depende de TLS. PRÉ-REQUISITOS: noção de cliente e servidor, de camada de aplicação e de TCP. OBJETIVOS OBSERVÁVEIS: (1) descrever o fluxo de envio em etapas; (2) associar cada porta ao seu uso; (3) diferenciar submissão de relay; (4) explicar a função do STARTTLS. COMPETÊNCIAS DESENVOLVIDAS: leitura de fluxo de protocolo; configuração de cliente de e-mail; diagnóstico de falha de envio. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: Módulo 2 (TCP, portas, TLS); subtópico POP3 x IMAP; unidade 3.3 (comunicação profissional). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o SMTP (Simple Mail Transfer Protocol) é o protocolo de aplicação responsável por ENVIAR e TRANSPORTAR mensagens de correio; ele opera sobre TCP e usa comandos textuais: HELO/EHLO (abertura da sessão, com EHLO anunciando as extensões), MAIL FROM (remetente), RCPT TO (destinatário), DATA (corpo da mensagem) e QUIT (encerramento). Existem três situações de porta: a 25 é usada para relay entre servidores de e-mail; a 587 é a porta de submissão autenticada do cliente, tipicamente com STARTTLS; a 465 usa TLS implícito (SMTPS). O STARTTLS começa a conexão em texto claro e depois a eleva para TLS; o TLS implícito já inicia cifrado. O servidor do remetente encaminha a mensagem ao servidor do destinatário, que a armazena na caixa postal; o recebimento em si é feito por POP3 ou IMAP, não pelo SMTP. O protocolo não criptografa por padrão: sem TLS, o conteúdo trafega exposto.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: analogia do correio físico — o SMTP é o carteiro que coleta e entrega a carta; a caixa postal do destinatário é lida por outro protocolo.\n- Nível intermediário: ordenar os comandos de uma sessão e associar HELO/EHLO, MAIL FROM, RCPT TO e DATA às suas funções.\n- Nível avançado: distinguir submissão (587, autenticada) de relay (25) e justificar o bloqueio da porta 25 para clientes externos como medida antifraude.\n- Nível especialista: diante de um e-mail legítimo marcado como spam, avaliar se o problema é autenticação (SPF/DKIM/DMARC), criptografia ou reputação do IP remetente.\nCOMPARAÇÕES CRÍTICAS:\n- SMTP x POP3/IMAP: o SMTP envia e transporta; POP3 e IMAP recebem e permitem a leitura — confundir isso muda o gabarito.\n- STARTTLS x SMTPS: STARTTLS eleva uma conexão inicialmente sem cifra; SMTPS inicia a conexão já cifrada (porta 465).\n- porta 25 x porta 587: 25 serve ao relay entre servidores; 587 serve à submissão autenticada do usuário.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"SMTP é usado para receber e-mails.\" — Motivo: confunde envio com recebimento — Versão tecnicamente correta: SMTP envia/transporta; POP3 e IMAP recebem.\n- Afirmação errada: \"SMTP sempre criptografa as mensagens.\" — Motivo: a criptografia depende de TLS configurado — Versão tecnicamente correta: sem STARTTLS/SMTPS o tráfego é em texto claro.\n- Afirmação errada: \"A porta 25 é a recomendada para o cliente enviar e-mail.\" — Motivo: a 25 é para relay entre servidores — Versão tecnicamente correta: o cliente usa 587 (submissão) ou 465.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: SMTP, comandos HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT, submissão, relay, STARTTLS, SMTPS.\n- Regras e fórmulas: portas 25 (relay), 587 (submissão com STARTTLS), 465 (TLS implícito).\n- Exceções: o protocolo não cifra por padrão; a cifra depende de TLS.\n- Palavras-chave: envio, transporte, relay, submissão, comandos textuais, TLS.\n- Checklist de domínio: (1) Descrevo o fluxo de envio? (2) Associo cada porta ao uso? (3) Diferencio submissão de relay? (4) Explico STARTTLS x TLS implícito?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual protocolo envia e qual recebe e-mail? (2) Para que serve a porta 587? (3) Qual a diferença entre STARTTLS e TLS implícito? (4) Em que etapa entra o servidor do destinatário? (5) Por que bloquear a porta 25 para clientes externos?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Descreva o fluxo básico de envio de um e-mail usando SMTP.",
                    "resposta": "1) Cliente autentica no servidor SMTP do remetente. 2) Cliente envia MAIL FROM (remetente). 3) Cliente envia RCPT TO (destinatário). 4) Cliente envia DATA (corpo do e-mail). 5) Servidor do remetente encaminha para o servidor do destinatário. 6) Servidor do destinatário armazena na caixa de entrada do destinatário."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Qual porta SMTP deve ser usada para envio seguro de e-mail?",
                    "resposta": "Porta 587 com STARTTLS (submissão) ou porta 465 com SSL/TLS implícito (SMTPS). A porta 25 é usada para relay entre servidores de e-mail e deve ser bloqueada para clientes externos para evitar spam."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'SMTP é usado para receber e-mails.'",
                    "correcao": "Errado. SMTP é usado para ENVIAR e-mails. POP3 e IMAP são usados para RECEBER e-mails."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) SMTP opera na camada de transporte do modelo OSI.",
                    "resposta": "Errado. SMTP opera na camada de aplicação (camada 7). Usa TCP na camada de transporte (camada 4)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual porta SMTP é recomendada para envio seguro? A) 25; B) 110; C) 587; D) 143.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender o funcionamento do SMTP para envio de e-mails, evidenciado por resposta correta a item de verificação associado ao subtópico.",
                "videos": [
                  {
                    "id": "QtqbaEiwlyU",
                    "titulo": "Funcionamento do protocolo SMTP",
                    "canal": "Marco Antoni",
                    "urlOriginal": "https://www.youtube.com/watch?v=QtqbaEiwlyU",
                    "embedUrl": "https://www.youtube-nocookie.com/embed/QtqbaEiwlyU",
                    "descricao": "Videoaula explicativa sobre o protocolo SMTP (Simple Mail Transfer Protocol), abordando seu funcionamento para envio de e-mails, comandos principais (HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT), portas padrão (25, 587, 465), diferenças entre SMTP, POP3 e IMAP, e a importância da autenticação e criptografia (STARTTLS, SMTPS) para segurança no envio.",
                    "dataValidacao": "2026-11-03"
                  }
                ]
              },
              {
                "id": "m3-u1-t1-s2",
                "titulo": "POP3 vs IMAP",
                "objetivoAprendizagem": "Aluno diferenciará POP3 e IMAP para recebimento de e-mails.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que POP3 e IMAP fazem no recebimento; (b) como cada um trata a cópia no servidor; (c) as portas usuais e as versões seguras; (d) quando escolher cada protocolo. POR QUE O CONHECIMENTO É IMPORTANTE: a escolha errada de protocolo faz o usuário perder mensagens entre dispositivos; a prova cobra a diferença entre baixar e sincronizar. PRÉ-REQUISITOS: noção de cliente/servidor e do funcionamento básico de caixa postal. OBJETIVOS OBSERVÁVEIS: (1) descrever o comportamento de POP3; (2) descrever o comportamento de IMAP; (3) indicar as portas usuais; (4) escolher o protocolo conforme o cenário. COMPETÊNCIAS DESENVOLVIDAS: configuração de cliente de correio; decisão técnica de multiplataforma. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópico SMTP; unidade 3.1 (fluxo de mensagem); Módulo 2 (portas e TLS). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: POP3 (Post Office Protocol versão 3) foi projetado para acesso offline em um único dispositivo: o cliente baixa as mensagens e, por padrão, remove-as do servidor; as portas usuais são 110 (sem cifra) e 995 (SSL/TLS). IMAP (Internet Message Access Protocol) mantém as mensagens no servidor e as sincroniza entre dispositivos, permitindo organizar pastas remotamente, marcar lidas e buscar sem baixar tudo; as portas usuais são 143 (sem cifra) e 993 (SSL/TLS). O IMAP é do tipo \"cópia única no servidor, várias vistas\"; o POP3 é \"baixar e, tipicamente, esvaziar a caixa\". A escolha depende do cenário: um computador dedicado e conexão instável favorecem POP3; múltiplos dispositivos, celular e webmail favorecem IMAP. Ambos pressupõem autenticação e podem usar STARTTLS ou TLS implícito.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: analogia da caixa de correio — o IMAP lê as cartas no próprio correio; o POP3 leva as cartas para casa e esvazia a caixa.\n- Nível intermediário: associar portas 110/995 (POP3) e 143/993 (IMAP) e explicar o efeito de cada modo no servidor.\n- Nível avançado: analisar o impacto da sincronização em cenários de uso móvel, cotas de servidor e backup.\n- Nível especialista: diagnosticar por que uma mensagem aparece em um dispositivo e não em outro, atribuindo a causa ao protocolo adotado.\nCOMPARAÇÕES CRÍTICAS:\n- POP3 x IMAP: POP3 baixa e tende a apagar do servidor; IMAP mantém cópia central e sincroniza — isso altera diretamente o gabarito sobre multi-dispositivo.\n- porta sem cifra x porta segura: 110/143 trafegam sem cifra por padrão; 995/993 usam TLS.\n- acesso offline x sincronizado: POP3 é naturalmente offline; IMAP depende do servidor.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"IMAP apaga as mensagens do servidor após o download.\" — Motivo: inverte o comportamento — Versão tecnicamente correta: IMAP mantém no servidor; POP3 tende a remover.\n- Afirmação errada: \"POP3 é o protocolo mais indicado para vários dispositivos.\" — Motivo: confunde conforto offline com sincronização — Versão tecnicamente correta: IMAP atende múltiplos dispositivos.\n- Afirmação errada: \"Esses protocolos enviaram e receberam mensagens.\" — Motivo: atribui envio a quem só recebe — Versão tecnicamente correta: POP3 e IMAP só recebem/leem; o envio é do SMTP.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: POP3, IMAP, download, sincronização, caixa postal, TLS.\n- Regras e fórmulas: portas 110/995 (POP3) e 143/993 (IMAP).\n- Exceções: o POP3 pode ser configurado para manter cópia, mas o padrão é remover.\n- Palavras-chave: baixar, sincronizar, servidor, multi-dispositivo, offline.\n- Checklist de domínio: (1) Explico cada comportamento? (2) Informo as portas? (3) Escolho conforme o cenário? (4) Evito confundir com SMTP?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o POP3 faz com a mensagem após o download? (2) Por que o IMAP é preferível em celular e computador? (3) Quais as portas seguras de cada protocolo? (4) Em que situação o POP3 é adequado? (5) Quem faz o envio?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual protocolo é mais adequado para acessar e-mails de múltiplos dispositivos?",
                    "resposta": "IMAP — mantém os e-mails no servidor e sincroniza com todos os dispositivos. POP3 baixa e apaga do servidor, fazendo com que os e-mails não estejam disponíveis em outros dispositivos."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um funcionário precisa acessar e-mails de celular e computador simultaneamente. POP3 ou IMAP?",
                    "resposta": "IMAP. Com POP3, os e-mails baixados para um dispositivo são apagados do servidor e não estarão disponíveis no outro dispositivo."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'IMAP apaga os e-mails do servidor após o download.'",
                    "correcao": "Errado. IMAP mantém os e-mails no servidor. POP3, por padrão, apaga após o download (embora haja opção de manter cópia)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) POP3 é mais adequado para uso em múltiplos dispositivos.",
                    "resposta": "Errado. IMAP é mais adequado para múltiplos dispositivos. POP3 é melhor para uso em um único dispositivo com acesso offline."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual porta IMAP com SSL/TLS? A) 143; B) 110; C) 993; D) 995.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de diferenciar POP3 e IMAP para recebimento de e-mails, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u1-t1-s3",
                "titulo": "Cabeçalhos, destinatários, anexos, CC e BCC",
                "objetivoAprendizagem": "Aluno identificará os campos de um e-mail e suas funções.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os principais cabeçalhos de uma mensagem; (b) a diferença entre To, Cc e Bcc; (c) como funcionam anexos e codificação; (d) cuidados de privacidade no uso dos campos. POR QUE O CONHECIMENTO É IMPORTANTE: erro no campo de destinatários expõe dados pessoais e gera incidente; a prova cobra a função de cada campo e o efeito do Bcc. PRÉ-REQUISITOS: noção de mensagem de correio e do formato MIME. OBJETIVOS OBSERVÁVEIS: (1) identificar From, To, Cc, Bcc, Reply-To e Message-ID; (2) explicar a diferença entre Cc e Bcc; (3) usar Bcc para proteger listas; (4) reconhecer que anexos usam codificação. COMPETÊNCIAS DESENVOLVIDAS: redação de mensagens; proteção de dados em listas de destinatários. GRAU DE DIFICULDADE: básico. RELAÇÃO COM OUTROS TÓPICOS: subtópico de spam/phishing; unidade 5.2 (exposição por e-mail); Módulo 6 (proteção de dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o cabeçalho de uma mensagem reúne metadados de roteamento e apresentação. From indica o remetente exibido; To traz os destinatários principais; Cc (Carbon Copy, cópia carbono) inclui destinatários secundários que VEEM todos os demais; Bcc (Blind Carbon Copy, cópia oculta) inclui destinatários que NÃO são visíveis uns aos outros nem para os do To/Cc; Reply-To define para onde vão as respostas, podendo divergir do From; Subject é o assunto; Message-ID é um identificador único da mensagem; Date registra a data. O padrão MIME permite anexos: o arquivo é codificado (historicamente em base64) e transportado junto ao corpo, sendo decodificado pelo cliente. O Bcc é a ferramenta correta para enviar a listas sem revelar endereços, protegendo dados pessoais; remover o Bcc ao responder (\"Responder a todos\") é uma falha comum que reexpõe a lista.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: analogia de um envelope — To é o destinatário, Cc são os \"em cópia\" visíveis e Bcc são cópias secretas.\n- Nível intermediário: explicar o efeito prático do Bcc na privacidade de uma lista.\n- Nível avançado: analisar como o Reply-To e o \"Responder a todos\" podem vazar endereços e conteúdo.\n- Nível especialista: diante de um incidente de exposição de lista, identificar o campo mal utilizado e propor a correção.\nCOMPARAÇÕES CRÍTICAS:\n- To x Cc x Bcc: To e Cc são visíveis a todos; Bcc oculta — usar To/Cc para listas expõe endereços e muda a avaliação de privacidade.\n- From x Reply-To: o primeiro é o remetente exibido; o segundo é o destino das respostas; podem divergir legitimamente.\n- corpo x anexo: o corpo é texto direto; o anexo é codificado e adicionado pela estrutura MIME.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Cc e Bcc são equivalentes.\" — Motivo: Bcc oculta os endereços — Versão tecnicamente correta: Cc é visível; Bcc é oculto.\n- Afirmação errada: \"O endereço que responde é sempre o From.\" — Motivo: o Reply-To pode redirecionar — Versão tecnicamente correta: as respostas seguem o Reply-To quando presente.\n- Afirmação errada: \"Anexos são enviados em texto puro.\" — Motivo: usa-se codificação de transporte — Versão tecnicamente correta: o anexo é codificado pelo padrão MIME.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: From, To, Cc, Bcc, Reply-To, Subject, Message-ID, MIME, base64.\n- Regras e fórmulas: listas de destinatários devem usar Bcc para preservar privacidade.\n- Exceções: o Reply-To pode diferir legitimamente do From.\n- Palavras-chave: cabeçalho, cópia oculta, anexo, privacidade, MIME.\n- Checklist de domínio: (1) Identifico cada campo? (2) Explico Cc x Bcc? (3) Uso Bcc em listas? (4) Sei que anexos são codificados?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual campo oculta os destinatários? (2) Qual a função do Reply-To? (3) Como o anexo é transportado? (4) O que expõe um \"Responder a todos\" mal usado? (5) Qual campo é o identificador único?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual a diferença entre Cc e Bcc?",
                    "resposta": "Cc (Carbon Copy): todos os destinatários veem quem está em Cc. Bcc (Blind Carbon Copy): destinatários ocultos; ninguém mais vê quem está em Bcc. Bcc é útil para proteger a privacidade de destinatários em e-mails para listas grandes."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma empresa envia um e-mail para 500 clientes sem expor os endereços uns aos outros. Qual campo usar?",
                    "resposta": "Bcc — cada destinatário recebe o e-mail sem ver os demais endereços. Isso protege a privacidade dos clientes e evita respostas em cadeia."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Cc e Bcc têm a mesma funcionalidade.'",
                    "correcao": "Errado. Cc mostra os destinatários uns aos outros. Bcc oculta os destinatários."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Bcc oculta os destinatários de todos os demais.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual campo oculta os destinatários? A) To; B) Cc; C) Bcc; D) From.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de identificar os campos de um e-mail e suas funções, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-1-topico-2",
            "titulo": "Spam, phishing e falsificação de remetente",
            "subtopicos": [
              {
                "id": "m3-u1-t2-s1",
                "titulo": "Spam, phishing e spoofing",
                "objetivoAprendizagem": "Aluno identificará spam, phishing e falsificação de remetente.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que são spam, phishing e spoofing; (b) os sinais de uma mensagem fraudulenta; (c) o papel de SPF, DKIM e DMARC; (d) por que autenticação reduz, mas não elimina, o risco. POR QUE O CONHECIMENTO É IMPORTANTE: fraude por e-mail é vetor central de incidentes; a prova cobra a distinção entre os termos e a função dos mecanismos de autenticação. PRÉ-REQUISITOS: conceito de remetente, cabeçalho e domínio de e-mail. OBJETIVOS OBSERVÁVEIS: (1) definir spam, phishing, spear phishing e spoofing; (2) reconhecer sinais de fraude; (3) explicar SPF, DKIM e DMARC; (4) indicar conduta segura diante de suspeita. COMPETÊNCIAS DESENVOLVIDAS: triagem defensiva de mensagens; conscientização de segurança. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópico de cabeçalhos; unidade 5.3 (phishing e spoofing); Módulo 4 (segurança). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: spam é a mensagem não solicitada, em massa, de conteúdo comercial ou malicioso. Phishing é a fraude que se passa por entidade confiável (banco, órgão, colega) para obter credenciais, dados ou pagamento; o spear phishing é a versão direcionada a uma pessoa ou grupo, personalizada com nomes e cargos; o whaling mira alvos de alta hierarquia. Spoofing é a falsificação do endereço exibido como remetente, fazendo a mensagem parecer legítima. Para combater a falsificação existem mecanismos de autenticação de domínio: o SPF (Sender Policy Framework) lista os servidores autorizados a enviar em nome do domínio; o DKIM (DomainKeys Identified Mail) assina criptograficamente a mensagem; o DMARC (Domain-based Message Authentication, Reporting & Conformance) define a política a aplicar quando SPF/DKIM falham e produz relatórios. Esses mecanismos reduzem o spoofing direto, mas não eliminam o risco: domínios visualmente parecidos, contas comprometidas e engenharia social contornam a autenticação.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir lixo eletrônico (spam) de fraude direcionada (phishing).\n- Nível intermediário: reconhecer sinais de fraude (urgência, link divergente, erro de idioma, anexo inesperado).\n- Nível avançado: explicar o encadeamento SPF → DKIM → DMARC e o que cada falha significa.\n- Nível especialista: diante de um e-mail aparentemente legítimo, avaliar autenticação, contexto e canal alternativo antes de agir.\nCOMPARAÇÕES CRÍTICAS:\n- phishing x spam: spam é massa; phishing é fraude com intenção de enganar — o enquadramento muda a resposta ao incidente.\n- spoofing x conta comprometida: no spoofing o remetente é forjado; na conta comprometida o envio parte de credencial válida roubada — o DMARC só resolve o primeiro.\n- SPF x DKIM x DMARC: SPF valida a origem do envio; DKIM valida a integridade/assinatura; DMARC define a política — são complementares, não substitutos.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"SPF, DKIM e DMARC tornam o phishing impossível.\" — Motivo: só autenticam o domínio — Versão tecnicamente correta: reduzem spoofing; domínios parecidos e contas comprometidas escapam.\n- Afirmação errada: \"Phishing e spam são sinônimos.\" — Motivo: um é envio em massa; o outro é fraude — Versão tecnicamente correta: phishing busca enganar; spam é não solicitado.\n- Afirmação errada: \"O nome exibido do remetente comprova a origem.\" — Motivo: o nome exibido é falsificável — Versão tecnicamente correta: verifica-se o domínio real e o resultado da autenticação.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: spam, phishing, spear phishing, whaling, spoofing, SPF, DKIM, DMARC.\n- Regras e fórmulas: SPF (quem pode enviar) + DKIM (assinatura) + DMARC (política) reduzem spoofing.\n- Exceções: autenticação não cobre conta comprometida nem domínios parecidos.\n- Palavras-chave: fraude, urgência, autenticação, remetente forjado, relatório.\n- Checklist de domínio: (1) Distingo os termos? (2) Reconheço sinais? (3) Explico SPF/DKIM/DMARC? (4) Sei que a autenticação não é garantia total?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que diferencia spam de phishing? (2) O que é spear phishing? (3) Para que serve o DKIM? (4) Por que a autenticação não elimina o phishing? (5) Qual a conduta diante de suspeita?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Diferencie spam de phishing.",
                    "resposta": "Spam: e-mail não solicitado, geralmente comercial, sem necessariamente ter intenção maliciosa. Phishing: e-mail fraudulento com intenção de roubar dados ou credenciais, se passando por entidade confiável."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como SPF, DKIM e DMARC protegem contra falsificação de remetente?",
                    "resposta": "SPF: define quais servidores podem enviar e-mails para o domínio. DKIM: assina digitalmente o e-mail para garantir autenticidade. DMARC: define política para falhas de SPF/DKIM (rejeitar, quarentenar, aceitar)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Spam é um tipo de phishing.'",
                    "correcao": "Errado. Spam é e-mail não solicitado; phishing é fraude para roubar dados. Todo phishing pode ser spam, mas nem todo spam é phishing."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) DKIM usa criptografia assimétrica para assinar e-mails.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo define política para falhas de autenticação? A) SPF; B) DKIM; C) DMARC; D) TLS.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de identificar spam, phishing e falsificação de remetente, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-3-unidade-2",
        "titulo": "3.2 Calendários e Reuniões",
        "topicos": [
          {
            "id": "modulo-3-unidade-2-topico-1",
            "titulo": "Calendários, convites e permissões",
            "subtopicos": [
              {
                "id": "m3-u2-t1-s1",
                "titulo": "Calendários e convites de reunião",
                "objetivoAprendizagem": "Aluno compreenderá o funcionamento de calendários e convites de reunião.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que um calendário digital gerencia; (b) os campos de um convite de reunião; (c) os níveis de permissão de compartilhamento; (d) recorrência e lembretes; (e) cuidados de privacidade. POR QUE O CONHECIMENTO É IMPORTANTE: calendários coordenam equipes e, mal configurados, expõem agenda e dados; a prova cobra a função dos convites e das permissões. PRÉ-REQUISITOS: uso básico de conta institucional e de correio eletrônico. OBJETIVOS OBSERVÁVEIS: (1) listar os componentes de um evento; (2) diferenciar participante obrigatório de opcional; (3) explicar os níveis de permissão; (4) configurar recorrência e lembretes. COMPETÊNCIAS DESENVOLVIDAS: organização de agenda; coordenação de reuniões; proteção de informação em convites. GRAU DE DIFICULDADE: básico. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (comunicação assíncrona); unidade 5.2 (exposição em calendários); unidade 4.1 (controle de acesso). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: um calendário digital é um repositório de eventos com data, hora, duração, local, participantes e descrição; ele sincroniza entre dispositivos e suporta convites que geram respostas de aceitação, recusa ou provisório. Participantes obrigatórios precisam comparecer; opcionais são informados sem exigência de presença. Recorrência cria séries (diária, semanal, mensal) com a possibilidade de editar apenas uma ocorrência ou toda a série. Lembretes disparam notificações antes do evento. O compartilhamento segue níveis de permissão: proprietário (controle total), editor (altera eventos), comentar e somente leitura; o calendário pode ainda ser privado, compartilhado com pessoas específicas ou, indevidamente, público. Em serviços públicos, a descrição e os anexos do convite podem conter dados pessoais, e o link de reunião incluído no corpo é um vetor de acesso indevido se o evento for público.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer os campos essenciais de um evento (título, quando, onde, quem).\n- Nível intermediário: distinguir recorrência de evento único e o efeito de editar uma ocorrência.\n- Nível avançado: avaliar o risco de compartilhar o calendário com permissão de edição ou de torná-lo público.\n- Nível especialista: montar um convite seguro para reunião sensível, minimizando dados e restringindo o link.\nCOMPARAÇÕES CRÍTICAS:\n- obrigatório x opcional: o primeiro exige presença; o segundo apenas informa — a lista correta altera a ata e a responsabilidade.\n- editor x somente leitura: editor altera o evento (inclusive cancela); leitura apenas consulta — a permissão excessiva é falha de segurança.\n- evento único x recorrente: editar uma ocorrência não altera a série, salvo escolha explícita.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Convidar todos como editor é conveniente e inofensivo.\" — Motivo: permite alterar ou cancelar o evento — Versão tecnicamente correta: conceder o menor privilégio necessário.\n- Afirmação errada: \"Um calendário público não expõe nada relevante.\" — Motivo: descrição e participantes podem conter dados — Versão tecnicamente correta: tratar o calendário conforme a sensibilidade do conteúdo.\n- Afirmação errada: \"Editar um evento recorrente sempre altera toda a série.\" — Motivo: há escolha entre ocorrência e série — Versão tecnicamente correta: selecionar explicitamente o alcance da edição.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: evento, convite, obrigatório, opcional, recorrência, lembrete, permissões.\n- Regras e fórmulas: aplicar o princípio do menor privilégio ao compartilhar o calendário.\n- Exceções: a recorrência admite edição de ocorrência isolada.\n- Palavras-chave: agenda, convite, permissão, privacidade, lembrete.\n- Checklist de domínio: (1) Listo os campos do evento? (2) Distingo obrigatório de opcional? (3) Explico as permissões? (4) Aplico menor privilégio?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais campos compõem um convite? (2) O que significa permissão de editor? (3) Como a recorrência trata uma ocorrência? (4) Que risco há em calendário público? (5) O que um lembrete faz?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Montar um convite de reunião para participantes de três cidades, com pauta, documento de apoio e horário que não seja ambíguo para nenhum deles.",
                    "resposta": "Convite com pauta, link e documento, participantes obrigatórios e opcionais distinguidos e horário correto nos três fusos; o calendário registra aceite, recusa ou resposta provisória de cada convidado."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa reorganizar uma reunião que será remarcada duas vezes em uma semana, sem que os participantes percam o histórico de mensagens e a pauta já enviada.",
                    "resposta": "Evento único com a data correta, pauta preservada, respostas atualizadas e a nova participante presente apenas na data prevista, sem eventos duplicados nas agendas."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que calendários compartilhados não permitem permissões diferentes por pessoa e que, por isso, compartilhar a agenda com a equipe necessariamente expõe todos os compromissos.",
                    "correcao": "A afirmação é incorreta: a agenda fica compartilhada com níveis distintos por pessoa, exibindo apenas disponibilidade para a equipe e detalhes para quem precisa deles."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Convites de reunião podem ter participantes obrigatórios e opcionais.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual permissão permite modificar um evento? A) Proprietário; B) Editor; C) Comentar; D) Visualização.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender o funcionamento de calendários e convites de reunião, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-2-topico-2",
            "titulo": "Microsoft Teams, Google Meet e Zoom",
            "subtopicos": [
              {
                "id": "m3-u2-t2-s1",
                "titulo": "Teams, Meet e Zoom — comparação",
                "objetivoAprendizagem": "Aluno comparará Teams, Google Meet e Zoom.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o posicionamento de Microsoft Teams, Google Meet e Zoom; (b) capacidades que são condicionais ao plano/versão; (c) como comparar sem generalizar; (d) critérios de escolha. POR QUE O CONHECIMENTO É IMPORTANTE: a prova pede comparação de plataformas; generalizar recursos entre planos gera erro, pois muitos dependem de licença ou edição. PRÉ-REQUISITOS: uso básico de videoconferência; noção de licenciamento/plano. OBJETIVOS OBSERVÁVEIS: (1) situar cada plataforma no seu ecossistema; (2) citar capacidades comuns; (3) indicar que recursos específicos dependem de plano; (4) escolher conforme o cenário. COMPETÊNCIAS DESENVOLVIDAS: avaliação comparativa de ferramentas; decisão de adoção com base em requisitos. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4 (controle de reunião); unidade 5.2 (exposição em plataformas); Módulo 1 (Microsoft 365). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: as três plataformas resolvem o mesmo problema — reunião e colaboração a distância — mas diferem na integração e no modelo de licenciamento. Microsoft Teams é integrado ao ecossistema Microsoft 365, com forte ênfase em canais, chat persistente, edição colaborativa de arquivos e reuniões; Google Meet integra-se ao Google Workspace, com uso pelo navegador e integração com Agenda e Documentos; Zoom é amplamente usado em reuniões com participantes externos e oferece recursos de webinars e salas simultâneas. Capacidades frequentemente presentes nas três: compartilhamento de tela, chat, levantar mão, reações, gravação e salas de espera. Entretanto, limites de duração, número de participantes, gravação em nuvem, transcrição, legendas ao vivo e webinars dependem do plano, da edição ou da versão — não devendo ser generalizados entre plataformas. Decisão técnica: priorizar integração com o ecossistema já adotado, requisitos de segurança/governança e integração com calendário e armazenamento.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: identificar a qual ecossistema cada plataforma pertence.\n- Nível intermediário: listar capacidades comuns e sinalizar as condicionais ao plano.\n- Nível avançado: escolher uma plataforma considerando segurança, governança e integração.\n- Nível especialista: avaliar migração entre plataformas considerando custo, interoperabilidade e soberania dos dados.\nCOMPARAÇÕES CRÍTICAS:\n- Teams/Meet x Zoom: as duas primeiras privilegiam integração com o respectivo ecossistema (M365/Workspace); o Zoom é independente do ecossistema — isso muda o critério de escolha.\n- capacidade base x capacidade condicional: muitas funções (gravação em nuvem, transcrição, webinars) dependem do plano — afirmar como universais gera erro.\n- navegador x aplicativo instalado: alguns recursos variam conforme o modo de acesso.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Todas as plataformas oferecem gravação e transcrição idênticas.\" — Motivo: depende do plano/versão — Versão tecnicamente correta: verificar a documentação oficial do produto.\n- Afirmação errada: \"O Zoom é integrado ao Microsoft 365 como o Teams.\" — Motivo: são ecossistemas distintos — Versão tecnicamente correta: o Zoom é uma plataforma independente com integrações opcionais.\n- Afirmação errada: \"O número de participantes é igual em qualquer plano.\" — Motivo: é limitado pela licença — Versão tecnicamente correta: conferir o limite do plano contratado.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: Teams, Google Meet, Zoom, integração, plano, licenciamento.\n- Regras e fórmulas: capacidades comuns existem, mas recursos avançados são condicionais ao plano.\n- Exceções: limites de tempo, participantes e gravação variam por licença.\n- Palavras-chave: videoconferência, ecossistema, webinar, sala simultânea, transcrição.\n- Checklist de domínio: (1) Situo cada plataforma? (2) Cito capacidades comuns? (3) Sinalizo o condicional ao plano? (4) Escolho por requisitos?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) A qual ecossistema pertence o Teams? (2) Quais recursos são comuns às três? (3) Por que não generalizar recursos entre planos? (4) Que critérios orientam a escolha? (5) O que é webinar?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Escolher a plataforma para uma organização que já usa um pacote de produtividade corporativo e precisa de reuniões internas com acesso aos arquivos no mesmo ambiente.",
                    "resposta": "Plataforma do pacote adotada para as reuniões internas, com arquivos acessados no próprio ambiente e ingresso de externos validado por teste; os limites do plano ficam documentados."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa comparar duas plataformas para uma aula remota com alunos de uma instituição que usa ambiente de ensino próprio e exige gravação das sessões.",
                    "resposta": "Plataforma escolhida com base no requisito de gravação confirmado na licença institucional, com integração ao ambiente de ensino e acesso dos alunos sem cadastro adicional."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que uma das plataformas exige instalação de programa em todos os casos e que, por isso, não pode ser usada por participantes externos que não podem instalar software.",
                    "correcao": "A afirmação é incorreta: o acesso pelo navegador dispensa instalação, ainda que alguns recursos possam ser limitados; a conclusão correta é verificar quais requisitos a reunião exige."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Zoom suporta salas simultâneas (breakout rooms).",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual plataforma é integrada ao Google Workspace? A) Teams; B) Meet; C) Zoom; D) Slack.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de comparar Teams, Google Meet e Zoom, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u2-t2-s2",
                "titulo": "Controle de participantes, lobby e gravação",
                "objetivoAprendizagem": "Alvo compreenderá recursos de segurança em reuniões online.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) recursos de controle de participantes; (b) o papel do lobby/sala de espera; (c) controles de áudio, vídeo e compartilhamento; (d) gravação e senha; (e) limites condicionais ao plano. POR QUE O CONHECIMENTO É IMPORTANTE: reuniões mal controladas sofrem intrusão e vazamento; a prova cobra a função de cada recurso de moderação. PRÉ-REQUISITOS: noção de reunião online e de papéis (anfitrião/coanfitrião). OBJETIVOS OBSERVÁVEIS: (1) explicar lobby e senha; (2) descrever a moderação de participantes; (3) indicar controles de compartilhamento e mute; (4) reconhecer que os nomes e a disponibilidade variam por plataforma. COMPETÊNCIAS DESENVOLVIDAS: condução segura de reuniões; aplicação de controles de acesso. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (lobby e autenticação); unidade 5.1 (intrusão); unidade 2.3 (consentimento de gravação). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o anfitrião (host) e seus coanfitriões coordenam a reunião. O lobby (sala de espera) retém os participantes até a aprovação, reduzindo intrusão; a senha da reunião protege o acesso; o login obrigatório restringe a usuários autenticados. Entre os controles de moderação: remover participante, silenciar todos, desativar o microfone ou a câmera de alguém, bloquear ou restringir o compartilhamento de tela, e impedir que participantes entrem antes do anfitrião. A gravação (vídeo, áudio, chat e, conforme a plataforma, transcrição) é um recurso que depende de plano/permissão. O chat permite troca textual persistente e pode ser gravado junto. A disponibilidade e a nomenclatura desses controles variam por plataforma, plano e versão, devendo ser confirmadas na documentação oficial; o que é estável é o princípio: quanto mais sensível a reunião, mais restritiva deve ser a configuração.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer para que servem lobby, senha e \"silenciar todos\".\n- Nível intermediário: ordenar controles conforme o risco (reunião aberta, interna, sensível).\n- Nível avançado: combinar lobby, autenticação e restrição de compartilhamento para conter intrusão.\n- Nível especialista: diante de uma intrusão, executar a sequência de contenção (remover, bloquear entrada, travar reunião) e registrar o incidente.\nCOMPARAÇÕES CRÍTICAS:\n- lobby x senha: o lobby exige aprovação caso a caso; a senha apenas exige conhecimento do segredo — o lobby é mais forte contra link divulgado.\n- anfitrião x participante: só papéis elevados moderam; afirmar que qualquer um remove gera erro.\n- gravação x privacidade: gravar amplia o registro e o risco; exige consentimento e política.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Com senha, o lobby é desnecessário.\" — Motivo: a senha vaza junto com o link — Versão tecnicamente correta: o lobby contém quem tem o link sem autorização.\n- Afirmação errada: \"Qualquer participante pode remover outro.\" — Motivo: moderação é de papéis elevados — Versão tecnicamente correta: apenas anfitrião/coanfitrião moderam.\n- Afirmação errada: \"Todos os planos permitem gravar em nuvem.\" — Motivo: depende do plano — Versão tecnicamente correta: conferir a licença e a documentação.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: anfitrião, coanfitrião, lobby, senha, mute, gravação, compartilhamento.\n- Regras e fórmulas: reunião mais sensível → configuração mais restritiva.\n- Exceções: nomes e disponibilidade de recursos variam por plataforma/plano.\n- Palavras-chave: moderação, sala de espera, controle de acesso, gravação.\n- Checklist de domínio: (1) Explico lobby e senha? (2) Descrevo a moderação? (3) Indico controles? (4) Ressalvo o condicional ao plano?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o lobby faz? (2) Quem pode remover participantes? (3) O que a senha protege? (4) Por que a disponibilidade varia? (5) Que controles restringem o compartilhamento?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Realizar uma reunião com fornecedor externo sobre assunto sensível, reduzindo o risco de entrada de pessoa não convidada e de exposição acidental de tela.",
                    "resposta": "Reunião com entrada controlada, apresentação restrita a dois papéis, áudio organizado e gravação iniciada somente após o aviso e a concordância dos participantes."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa conduzir uma reunião de conselho com votação nominal, garantindo que apenas membros votem e que o resultado seja registrado sem ambiguidade.",
                    "resposta": "Deliberações com votação nominal registrada apenas por membros, ouvintes sem direito a voto, presença comprovada e gravação arquivada com os registros da sessão."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a gravação de reunião dispensa consentimento porque a sessão é interna e que, além disso, o recurso está disponível em qualquer plano contratado.",
                    "correcao": "A afirmação é incorreta nos dois pontos: reunião interna não dispensa base legal nem informação prévia, e a gravação depende da licença contratada, com retenção definida."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O lobby permite ao anfitrião aprovar ou rejeitar participantes antes de entrar.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Quem pode remover um participante de uma reunião? A) Qualquer participante; B) O anfitrião; C) O primeiro a entrar; D) Ninguém.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de alvo compreenderá recursos de segurança em reuniões online, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-2-topico-3",
            "titulo": "Políticas de gravação, consentimento e proteção de informações",
            "subtopicos": [
              {
                "id": "m3-u2-t3-s1",
                "titulo": "Políticas de gravação e consentimento",
                "objetivoAprendizagem": "Aluno compreenderá políticas de gravação e proteção de informações em reuniões.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que uma política de gravação deve definir; (b) por que o consentimento importa; (c) retenção, acesso e proteção; (d) o que a LGPD exige ao gravar dados pessoais. POR QUE O CONHECIMENTO É IMPORTANTE: gravar sem política gera vazamento e responsabilização; a prova cobra os elementos de uma política e a exigência de consentimento. PRÉ-REQUISITOS: noção de reunião online e de proteção de dados. OBJETIVOS OBSERVÁVEIS: (1) enumerar os itens de uma política de gravação; (2) explicar consentimento livre, informado e inequívoco; (3) definir retenção e acesso; (4) citar a LGPD como referência. COMPETÊNCIAS DESENVOLVIDAS: elaboração de política de gravação; proteção de informação. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.3 (gravação institucional); unidade 5.1 (vazamento); Módulo 4 (LGPD). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: gravar uma reunião cria um registro permanente que pode conter dados pessoais e informação sensível. Uma política de gravação deve responder: quando gravar (finalidade legítima), quem pode gravar, o que é capturado (vídeo, áudio, chat, transcrição), onde armazenar, quem acessa, por quanto tempo manter e como descartar. O consentimento, quando é a base legal aplicável, deve ser livre, informado e inequívoco: o participante precisa saber que está sendo gravado e concordar; gravar silenciosamente compromete o consentimento. A LGPD (Lei nº 13.709/2018, já verificada nas referências do projeto) rege o tratamento de dados pessoais e exige base legal; em reuniões com dados pessoais, a finalidade e a necessidade orientam a decisão de gravar. Em serviço público, somam-se as normas de gestão documental e a lógica de transparência. Gravação não é obrigatória: muitas reuniões não precisam ser gravadas e a minimização recomenda não captar mais do que o necessário.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: compreender que gravar exige finalidade e aviso.\n- Nível intermediário: redigir uma política com os campos quando/quem/onde/retenção/acesso.\n- Nível avançado: avaliar se determinada reunião deve ou não ser gravada, à luz da LGPD.\n- Nível especialista: revisar a política de uma instituição e apontar lacunas de consentimento, retenção e descarte.\nCOMPARAÇÕES CRÍTICAS:\n- gravar x não gravar: gravar amplia o registro e o risco; não gravar preserva a privacidade, mas perde memória — a decisão é por finalidade.\n- consentimento x obrigação legal: quando há base legal distinta do consentimento, a análise muda; não tratar consentimento como única base.\n- retenção x descarte: guardar além do necessário contraria a minimização; descartar cedo demais pode violar obrigação de guarda.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Se todos são da casa, não é preciso consentimento.\" — Motivo: dados pessoais exigem base legal independentemente do vínculo — Versão tecnicamente correta: observar a LGPD e a política institucional.\n- Afirmação errada: \"Gravar é sempre a prática recomendada.\" — Motivo: minimização recomenda captar o necessário — Versão tecnicamente correta: gravar apenas quando houver finalidade.\n- Afirmação errada: \"O aviso na descrição do convite substitui o consentimento.\" — Motivo: o consentimento deve ser inequívoco — Versão tecnicamente correta: informar no momento e obter concordância quando aplicável.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: política de gravação, finalidade, consentimento, retenção, acesso, descarte, LGPD.\n- Regras e fórmulas: quando/quem/o quê/onde/retenção/acesso/descarte.\n- Exceções: existem outras bases legais além do consentimento.\n- Palavras-chave: gravação, consentimento, minimização, retenção, LGPD.\n- Checklist de domínio: (1) Enumero a política? (2) Explico consentimento? (3) Defino retenção? (4) Cito a LGPD?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais itens compõem a política? (2) O que é consentimento inequívoco? (3) Por que minimizar a captura? (4) Que lei rege os dados pessoais? (5) Quando não se deve gravar?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Definir a política de gravação para as reuniões de um órgão, considerando que algumas sessões tratam de dados pessoais de cidadãos.",
                    "resposta": "Política que distingue reuniões gravadas das não gravadas, com aviso prévio, acesso restrito, prazo de retenção definido e rotina de descarte registrada."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa atender a um pedido de titular que solicita acesso ao conteúdo de uma reunião gravada da qual participou, sem expor dados de terceiros.",
                    "resposta": "Solicitante recebe o conteúdo que lhe diz respeito, sem dados de terceiros, com registro do atendimento e do critério de recorte aplicado."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um servidor afirma que, como a gravação é feita em plataforma institucional, ela pode ser compartilhada livremente com qualquer setor, inclusive por link aberto, porque o conteúdo é público por natureza.",
                    "correcao": "A afirmação é incorreta: reunião interna não é conteúdo público, e o compartilhamento precisa observar finalidade e restrição de acesso, com registro da base utilizada."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A LGPD exige consentimento para gravação de comunicações com dados pessoais.",
                    "resposta": "Certo (com ressalvas — depende da base legal aplicável)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual elemento NÃO é essencial em uma política de gravação? A) Prazo de retenção; B) Proteção por criptografia; C) Número máximo de participantes; D) Consentimento dos participantes.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender políticas de gravação e proteção de informações em reuniões, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-3-unidade-3",
        "titulo": "3.3 Etiqueta digital, acessibilidade e comunicação profissional",
        "topicos": [
          {
            "id": "modulo-3-unidade-3-topico-1",
            "titulo": "Etiqueta digital (netiqueta) em ambientes profissionais",
            "subtopicos": [
              {
                "id": "m3-u3-t1-s1",
                "titulo": "Princípios de netiqueta",
                "objetivoAprendizagem": "Aluno conhecerá princípios de etiqueta digital aplicáveis a ambientes profissionais.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é netiqueta; (b) princípios aplicáveis ao ambiente profissional; (c) erros comuns de forma e destinatários; (d) relação com a comunicação institucional. POR QUE O CONHECIMENTO É IMPORTANTE: a forma da mensagem afeta a interpretação e a imagem institucional; a prova cobra regras de convivência digital. PRÉ-REQUISITOS: uso de e-mail e mensagens instantâneas. OBJETIVOS OBSERVÁVEIS: (1) definir netiqueta; (2) aplicar princípios de clareza e respeito; (3) evitar erros como CAIXA ALTA e \"responder a todos\"; (4) adequar a forma ao contexto. COMPETÊNCIAS DESENVOLVIDAS: comunicação escrita profissional; autocontrole digital. GRAU DE DIFICULDADE: básico. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (tom e clareza); unidade 3.3 (padrões institucionais); unidade 5.2 (exposição por e-mail). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: netiqueta é o conjunto de convenções de cortesia e eficiência na comunicação mediada por tecnologia. No ambiente profissional, ela se traduz em: usar assunto descritivo e específico; ser claro e conciso; evitar CAIXA ALTA (que, na leitura escrita, equivale a gritar); moderar exclamações; responder em prazo razoável; manter a linha de assunto coerente para preservar o histórico (thread); citar apenas o trecho necessário ao responder; não acionar \"responder a todos\" sem necessidade; não enviar anexos pesados sem aviso; e manter respeito mesmo em discordância. A netiqueta difere da etiqueta presencial porque a ausência de tom de voz e de expressão facial aumenta a ambiguidade: ironia e sarcasmo são frequentemente mal interpretados por escrito. A forma da mensagem também tem efeito institucional — em órgãos públicos, a comunicação representa a instituição e deve observar impessoalidade e clareza.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer o efeito da CAIXA ALTA e do assunto vago.\n- Nível intermediário: reescrever uma mensagem aplicando clareza, concisão e respeito.\n- Nível avançado: decidir quando usar \"responder a todos\" e como citar histórico sem expor dados.\n- Nível especialista: revisar um fluxo de comunicação de equipe e propor acordos de netiqueta.\nCOMPARAÇÕES CRÍTICAS:\n- comunicação presencial x escrita: a escrita perde tom e expressão; por isso exige mais cuidado com ambiguidade.\n- \"responder\" x \"responder a todos\": o segundo inclui toda a lista e pode expor ou poluir — muda o efeito da mensagem.\n- informalidade x profissionalismo: o registro informal cabe no chat interno, mas não na comunicação externa.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"CAIXA ALTA apenas dá ênfase, é neutra.\" — Motivo: por convenção, equivale a gritar — Versão tecnicamente correta: use negrito ou reformulação para ênfase.\n- Afirmação errada: \"Responder a todos demonstra atenção.\" — Motivo: sobrecarrega e expõe contatos — Versão tecnicamente correta: usar apenas os destinatários pertinentes.\n- Afirmação errada: \"Ironia é aceitável por escrito.\" — Motivo: perde-se o tom — Versão tecnicamente correta: evitar ironia e sarcasmo na comunicação profissional.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: netiqueta, clareza, concisão, assunto descritivo, thread, respeito.\n- Regras e fórmulas: mensagem eficaz = destinatário certo + assunto claro + ação explícita.\n- Exceções: o registro varia conforme o canal e o público.\n- Palavras-chave: cortesia, CAIXA ALTA, responder a todos, ambiguidade, tom.\n- Checklist de domínio: (1) Defino netiqueta? (2) Aplico clareza? (3) Evito erros comuns? (4) Adequo a forma ao contexto?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é netiqueta? (2) Por que CAIXA ALTA é inadequada? (3) Quando usar \"responder a todos\"? (4) Por que a escrita amplia a ambiguidade? (5) Como dar ênfase sem CAIXA ALTA?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que evitar CAIXA ALTA em e-mails profissionais?",
                    "resposta": "CAIXA ALTA é interpretada como grito/agressividade. Use apenas para ênfase pontual ou siglas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um colega enviou e-mail com assunto 'URGENTE!!!'. Como responder adequadamente?",
                    "resposta": "Responder com calma, avaliar urgência real, evitar ecoar o tom agressivo e, se necessário, sugerir canal síncrono (telefone/reunião) para questões urgentes."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Responder a todos é sempre a prática correta.'",
                    "correcao": "Errado. Responder a todos (Reply All) quando apenas o remetente precisa da resposta gera ruído e pode expor informações a quem não deveria recebê-las."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Netiqueta inclui evitar o uso excessivo de CAIXA ALTA.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática NÃO é recomendada em e-mail profissional? A) Assunto descritivo; B) Responder a todos sempre; C) Citar apenas o necessário; D) Evitar anexos pesados sem aviso.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de conhecer princípios de etiqueta digital aplicáveis a ambientes profissionais, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t1-s2",
                "titulo": "Comunicação síncrona versus assíncrona",
                "objetivoAprendizagem": "Aluno distinguirá comunicação síncrona e assíncrona e escolherá o canal adequado.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que distingue comunicação síncrona de assíncrona; (b) vantagens e custos de cada modo; (c) critérios de escolha do canal; (d) riscos como fadiga de reuniões e atraso de decisões. POR QUE O CONHECIMENTO É IMPORTANTE: escolher o modo errado gera retrabalho e perda de registro; a prova cobra a distinção e a adequação ao cenário. PRÉ-REQUISITOS: conhecimento dos canais (e-mail, chat, reunião). OBJETIVOS OBSERVÁVEIS: (1) definir síncrono e assíncrono; (2) indicar quando cada modo é preferível; (3) relacionar com fuso horário e registro; (4) reconhecer riscos de excesso. COMPETÊNCIAS DESENVOLVIDAS: escolha de canal; gestão de tempo e de colaboração. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (netiqueta); unidade 3.3 (escolha de canais); unidade 2.1 (calendários). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: comunicação síncrona ocorre em tempo real — reunião, chamada, chat ao vivo — e exige disponibilidade simultânea; é adequada para decisões complexas que se beneficiam de debate imediato e para urgências. Comunicação assíncrona ocorre com defasagem — e-mail, mensagem gravada, documento colaborativo — e permite reflexão, registro durável e participação em fusos diferentes. A escolha do canal deve considerar urgência, complexidade, necessidade de registro e disponibilidade dos participantes. O excesso de reuniões síncronas produz fadiga e reduz o tempo de trabalho focado; o excesso de mensagens assíncronas pode atrasar decisões e gerar interpretações divergentes. A prática recomendada é reservar o síncrono para o que realmente exige debate e usar o assíncrono para informar, documentar e decidir com registro. O registro durável é vantagem central do assíncrono em contexto institucional e de auditoria.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir tempo real de defasado.\n- Nível intermediário: escolher o modo conforme urgência, complexidade e registro.\n- Nível avançado: desenhar o fluxo (assíncrono prepara, síncrono decide, assíncrono documenta).\n- Nível especialista: redesenhar a rotina de uma equipe distribuída reduzindo reuniões sem perder decisão.\nCOMPARAÇÕES CRÍTICAS:\n- síncrono x assíncrono: síncrono é imediato e exige presença; assíncrono é refletido e registrado — a escolha muda o registro e a inclusão.\n- reunião x documento: a reunião decide rápido, mas não deixa registro automático; o documento registra, mas demora mais.\n- urgência x complexidade: urgente costuma pedir síncrono; complexo pode exigir preparação assíncrona prévia.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Sempre que possível, deve-se reunir.\" — Motivo: gera fadiga e custo — Versão tecnicamente correta: reunir quando há necessidade de debate.\n- Afirmação errada: \"Assíncrono é sempre mais lento.\" — Motivo: ganha em inclusão e registro — Versão tecnicamente correta: o tempo depende do fluxo desenhado.\n- Afirmação errada: \"Chat ao vivo é assíncrono por ser escrito.\" — Motivo: o critério é o tempo, não o meio — Versão tecnicamente correta: chat ao vivo é síncrono.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: síncrono, assíncrono, canal, registro, fuso, fadiga de reuniões.\n- Regras e fórmulas: urgência+complexidade+registro+disponibilidade definem o canal.\n- Exceções: o meio não determina o modo; o critério é a simultaneidade.\n- Palavras-chave: tempo real, defasagem, registro, inclusão, decisão.\n- Checklist de domínio: (1) Defino os modos? (2) Escolho por critérios? (3) Reconheço riscos? (4) Desenho o fluxo?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que define o modo síncrono? (2) Quando o assíncrono é preferível? (3) Que risco o excesso de reuniões gera? (4) Chat por escrito é sempre assíncrono? (5) Cite um critério de escolha.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quando usar comunicação síncrona?",
                    "resposta": "Para decisões complexas, negociações, feedback sensível, emergências e situações que exigem troca rápida de informações."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma equipe distribuída em 3 fusos horários precisa aprovar um relatório. Qual canal?",
                    "resposta": "Assíncrono (documento colaborativo com comentários + e-mail de fechamento) para permitir participação de todos sem exigir horário comum; reservar síncrono apenas para pontos de impasse."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Toda decisão deve ser tomada em reunião síncrona.'",
                    "correcao": "Errado. Muitas decisões podem ser assíncronas, com registro e rastreabilidade; reuniões devem ser reservadas para casos que exigem interação em tempo real."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Comunicação assíncrona favorece participantes em diferentes fusos horários.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual canal é assíncrono? A) Videoconferência; B) Telefone; C) E-mail; D) Chat ao vivo.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir comunicação síncrona e assíncrona e escolherá o canal adequado, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t1-s3",
                "titulo": "Tom, clareza e estrutura de mensagens profissionais",
                "objetivoAprendizagem": "Aluno estruturará mensagens profissionais claras e adequadas ao contexto.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a estrutura recomendada de uma mensagem profissional; (b) clareza e concisão; (c) adequação de tom; (d) revisão antes do envio. POR QUE O CONHECIMENTO É IMPORTANTE: mensagens mal estruturadas geram retrabalho e erro; a prova cobra elementos de uma comunicação eficaz. PRÉ-REQUISITOS: netiqueta e noção de comunicação assíncrona. OBJETIVOS OBSERVÁVEIS: (1) estruturar saudação, contexto, pedido, prazo e fechamento; (2) aplicar uma ideia principal por mensagem; (3) adequar o tom ao público; (4) revisar destinatários, anexos e texto. COMPETÊNCIAS DESENVOLVIDAS: redação profissional; clareza e objetividade. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (netiqueta); unidade 3.3 (padrões institucionais); unidade 1.1 (cabeçalhos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: uma mensagem profissional eficaz segue um esqueleto: saudação adequada à relação e ao cargo; contexto breve que situa o assunto; pedido ou ação explícita; prazo quando houver; e fechamento cordial com assinatura. A clareza exige uma ideia principal por mensagem e o uso de listas numeradas quando há várias ações, reduzindo ambiguidade. O tom varia do formal (comunicação externa, autoridades) ao cordial (equipe interna); ironia e sarcasmo devem ser evitados por escrito. A assinatura identifica nome, cargo, unidade e contato, reforçando a rastreabilidade. A revisão final verifica destinatários corretos, anexos efetivamente incluídos e ausência de erros de digitação. Em serviço público, a mensagem representa a instituição e deve observar impessoalidade, clareza e registro adequado (Módulo 6). Mensagens longas e sem estrutura aumentam a chance de o interlocutor não identificar a ação solicitada.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: identificar as partes de um pedido claro.\n- Nível intermediário: reescrever uma mensagem estruturada com ação e prazo.\n- Nível avançado: ajustar o tom de acordo com o destinatário e a sensibilidade do assunto.\n- Nível especialista: consolidar um pedido complexo em mensagem única sem ambiguidade.\nCOMPARAÇÕES CRÍTICAS:\n- mensagem direta x prolixa: a direta preserva a ação; a prolixa dilui — a estrutura muda a compreensão.\n- tom formal x cordial: muda conforme público e relação; escolher o registro errado altera a leitura institucional.\n- pedido x informação: o pedido exige resposta; a informação apenas comunica — misturá-los confunde o interlocutor.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Quanto mais texto, mais claro.\" — Motivo: excesso dilui a ação — Versão tecnicamente correta: uma ideia principal e ação explícita.\n- Afirmação errada: \"O assunto pode ficar vago; o corpo explica.\" — Motivo: o assunto facilita a busca e o encaminhamento — Versão tecnicamente correta: assunto descritivo e específico.\n- Afirmação errada: \"Não é necessário revisar se o anexo foi incluído.\" — Motivo: esquecer anexo é erro frequente — Versão tecnicamente correta: revisar destinatários e anexos antes do envio.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: saudação, contexto, pedido, prazo, fechamento, assinatura, revisão.\n- Regras e fórmulas: estrutura = saudação + contexto + ação + prazo + fechamento.\n- Exceções: comunicação informal cabe em canais internos.\n- Palavras-chave: clareza, concisão, tom, assinatura, revisão.\n- Checklist de domínio: (1) Estruturo a mensagem? (2) Aplico uma ideia por mensagem? (3) Adequo o tom? (4) Reviso antes do envio?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais partes compõem a estrutura? (2) Por que uma ideia principal por mensagem? (3) Como o tom varia? (4) O que revisar antes do envio? (5) Por que evitar ironia?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual a estrutura mínima de um e-mail profissional?",
                    "resposta": "Saudação + contexto + pedido/ação + prazo + fechamento + assinatura."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Escreva um e-mail solicitando aprovação de um relatório com prazo.",
                    "resposta": "'Prezado(a) [nome], segue em anexo o relatório [X] para análise. Solicito aprovação até [data]. Disponível para esclarecimentos. Atenciosamente, [assinatura]'."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Ironia em e-mail profissional é inofensiva.'",
                    "correcao": "Errado. Ironia/sarcasmo por escrito frequentemente é mal interpretada; evite em comunicação institucional."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Incluir prazo claro no e-mail reduz idas e vindas.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual elemento ajuda a evitar erros de envio? A) Assinatura; B) Revisão de destinatários/anexos; C) Saudação; D) Tom formal.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de estruturar mensagens profissionais claras e adequadas ao contexto, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-3-topico-2",
            "titulo": "Acessibilidade digital na comunicação",
            "subtopicos": [
              {
                "id": "m3-u3-t2-s1",
                "titulo": "Princípios de acessibilidade em comunicação",
                "objetivoAprendizagem": "Aluno compreenderá princípios de acessibilidade aplicáveis a comunicação digital.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é acessibilidade digital; (b) os quatro princípios da WCAG; (c) aplicações práticas (texto alternativo, legendas, contraste, estrutura); (d) por que acessibilidade é requisito, e não favor. POR QUE O CONHECIMENTO É IMPORTANTE: a comunicação institucional deve alcançar todas as pessoas; a prova cobra princípios e sua aplicação. PRÉ-REQUISITOS: noção de comunicação digital e de público diverso. OBJETIVOS OBSERVÁVEIS: (1) definir acessibilidade; (2) listar os princípios perceptível, operável, compreensível e robusto; (3) aplicar exemplos práticos; (4) reconhecer o caráter inclusivo. COMPETÊNCIAS DESENVOLVIDAS: comunicação inclusiva; aplicação de boas práticas de acessibilidade. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (recursos de plataformas); unidade 3.3 (comunicação profissional); Módulo 6 (inclusão digital). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: acessibilidade digital é a característica que permite a pessoas com deficiência (visual, auditiva, motora, cognitiva) perceber, operar, compreender e contribuir com o conteúdo. As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) organizam boas práticas em quatro princípios: perceptível (a informação deve ser percebida — texto alternativo, legendas, contraste); operável (a interface deve ser usável por teclado e leitor de tela); compreensível (linguagem clara, comportamento previsível); e robusto (compatibilidade com tecnologias assistivas). Aplicações: textos alternativos em imagens, legendas e transcrições para vídeos e áudios, contraste adequado, evitar depender apenas da cor para transmitir informação, usar estrutura semântica (títulos e listas reais) e empregar linguagem clara. A acessibilidade não é apenas técnica: é também inclusão, permitindo participação efetiva e atendendo ao interesse público.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que acessibilidade amplia o alcance da comunicação.\n- Nível intermediário: aplicar os quatro princípios a exemplos concretos.\n- Nível avançado: detectar barreiras em uma peça de comunicação e propor correções.\n- Nível especialista: revisar um fluxo institucional garantindo acessibilidade de ponta a ponta.\nCOMPARAÇÕES CRÍTICAS:\n- alt text x legenda de imagem: o alt text descreve para leitores de tela; a legenda é visível a todos — não se substituem.\n- cor como informação x cor como reforço: depender só da cor exclui; a cor deve reforçar — isso altera a avaliação de acessibilidade.\n- acessibilidade x usabilidade: a primeira foca grupos com deficiência; a segunda, o uso geral — são complementares.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Acessibilidade é opcional.\" — Motivo: é requisito de inclusão — Versão tecnicamente correta: deve ser considerada no design.\n- Afirmação errada: \"Legenda automática dispensa revisão.\" — Motivo: a automática erra — Versão tecnicamente correta: revisar legendas críticas.\n- Afirmação errada: \"Só cor é suficiente para indicar status.\" — Motivo: exclui daltônicos e leitores de tela — Versão tecnicamente correta: usar rótulos e ícones além da cor.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: acessibilidade, WCAG, perceptível, operável, compreensível, robusto, tecnologia assistiva.\n- Regras e fórmulas: quatro princípios orientam toda checagem de acessibilidade.\n- Exceções: recursos automáticos exigem revisão humana.\n- Palavras-chave: alt text, legenda, contraste, semântica, inclusão.\n- Checklist de domínio: (1) Defino acessibilidade? (2) Listo os princípios? (3) Aplico exemplos? (4) Reconheço o caráter inclusivo?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é acessibilidade? (2) Cite os quatro princípios. (3) Para que serve o alt text? (4) Por que não depender só da cor? (5) O que torna a comunicação robusta?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O que é alt text e por que é importante?",
                    "resposta": "Texto alternativo que descreve uma imagem para leitores de tela; essencial para pessoas com deficiência visual e também para indexação."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como tornar um vídeo de reunião acessível?",
                    "resposta": "Adicionar legendas (closed captions), fornecer transcrição, descrever visualmente conteúdo importante e garantir player acessível."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Acessibilidade é responsabilidade apenas da área de TI.'",
                    "correcao": "Errado. Acessibilidade é responsabilidade de todos que produzem comunicação; a Lei Brasileira de Inclusão (Lei 13.146/2015) e normas de acessibilidade digital (eMAG) orientam o setor público."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Legendas em vídeos beneficiam pessoas surdas e com deficiência auditiva.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual princípio WCAG trata de garantir que o conteúdo seja percebido? A) Operável; B) Perceptível; C) Compreensível; D) Robusto.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender princípios de acessibilidade aplicáveis a comunicação digital, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t2-s2",
                "titulo": "Recursos de acessibilidade em plataformas de comunicação",
                "objetivoAprendizagem": "Aluno identificará recursos de acessibilidade em plataformas de comunicação.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) recursos de acessibilidade em plataformas; (b) capacidades condicionais; (c) cuidados ao afirmar disponibilidade; (d) como verificar. POR QUE O CONHECIMENTO É IMPORTANTE: a disponibilidade varia por plataforma e plano; generalizar gera erro e prejudica o usuário. PRÉ-REQUISITOS: princípios de acessibilidade. OBJETIVOS OBSERVÁVEIS: (1) citar recursos comuns; (2) indicar que são condicionais; (3) orientar a verificação na documentação; (4) relacionar recurso e necessidade. COMPETÊNCIAS DESENVOLVIDAS: seleção de recurso acessível; avaliação condicional de funcionalidade. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (boas práticas); unidade 2.2 (plataformas); Módulo 6 (inclusão). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: plataformas de comunicação oferecem, tipicamente, compatibilidade com leitores de tela, legendas automáticas em reuniões, transcrição de áudio, atalhos de teclado, temas de alto contraste, ajuste de tamanho de fonte e, quando disponível, janela de intérprete de Libras e descrição de conteúdo compartilhado. Esses recursos NÃO são uniformes: a presença, a qualidade e a configuração dependem da plataforma, do plano e da versão. Por isso, ao afirmar uma capacidade, deve-se ressalvar que varia e remeter à documentação oficial do produto. A postura correta é verificar o recurso no contexto concreto (qual plataforma, qual plano, qual versão) antes de depender dele, e prever alternativa quando faltar — por exemplo, oferecer material textual complementar à legenda automática. Em contexto institucional, a escolha da plataforma deve considerar a acessibilidade como requisito, não como detalhe.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer que existem recursos e que variam.\n- Nível intermediário: relacionar recurso e necessidade (surdo, cego, mobilidade reduzida).\n- Nível avançado: avaliar se uma plataforma atende a um requisito de acessibilidade específico.\n- Nível especialista: planejar contornar a ausência de um recurso com alternativa equivalente.\nCOMPARAÇÕES CRÍTICAS:\n- legenda automática x legenda revisada: a automática é imediata e sujeita a erro; a revisada é confiável — a escolha muda a qualidade.\n- recurso padrão x recurso condicional: o primeiro existe independentemente do plano; o segundo depende dele — afirmar o segundo como universal gera erro.\n- acessibilidade nativa x extensão: alguns recursos vêm do produto, outros de ferramentas auxiliares.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Toda plataforma tem legendas ao vivo gratuitas.\" — Motivo: depende do plano — Versão tecnicamente correta: conferir a documentação oficial.\n- Afirmação errada: \"A legenda automática dispensa acessibilidade.\" — Motivo: ela erra e não cobre tudo — Versão tecnicamente correta: revisar e complementar.\n- Afirmação errada: \"Acessibilidade é igual entre planos.\" — Motivo: recursos variam — Versão tecnicamente correta: verificar caso a caso.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: leitor de tela, legenda, transcrição, atalhos, contraste, Libras.\n- Regras e fórmulas: recurso acessível deve ser verificado por plataforma/plano/versão.\n- Exceções: recursos automáticos exigem revisão.\n- Palavras-chave: tecnologia assistiva, legenda, transcrição, plano, documentação.\n- Checklist de domínio: (1) Cito recursos comuns? (2) Ressalvo o condicional? (3) Oriento a verificação? (4) Prevejo alternativa?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite três recursos comuns. (2) Por que não generalizar? (3) Onde verificar a disponibilidade? (4) O que fazer se o recurso faltar? (5) Legenda automática é suficiente?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O que são live captions?",
                    "resposta": "Legendas geradas em tempo real durante uma reunião, úteis para pessoas com deficiência auditiva e para participantes em ambientes ruidosos."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como planejar uma reunião acessível?",
                    "resposta": "Enviar pauta e materiais com antecedência, ativar legendas, disponibilizar gravação com transcrição, usar linguagem clara e oferecer canal de perguntas acessível."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Todas as plataformas oferecem os mesmos recursos de acessibilidade.'",
                    "correcao": "Errado. Recursos variam por plataforma, plano e versão; consultar documentação oficial antes de assumir disponibilidade."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A disponibilidade de recursos de acessibilidade varia por plataforma e plano.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso auxilia pessoas com deficiência visual em documentos? A) Legendas; B) Texto alternativo (alt text); C) Alto contraste apenas; D) Transcrição de áudio.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de identificar recursos de acessibilidade em plataformas de comunicação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t2-s3",
                "titulo": "Boas práticas de acessibilidade em documentos e mensagens",
                "objetivoAprendizagem": "Aluno aplicará boas práticas de acessibilidade em documentos e mensagens.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) boas práticas de acessibilidade em documentos; (b) boas práticas em mensagens; (c) o papel de estilos, listas e tabelas; (d) verificação com tecnologia assistiva. POR QUE O CONHECIMENTO É IMPORTANTE: documentos e mensagens são a entrega final da comunicação; acessibilidade neles torna o conteúdo utilizável. PRÉ-REQUISITOS: princípios de acessibilidade; uso de editor de texto. OBJETIVOS OBSERVÁVEIS: (1) usar estilos de título; (2) construir listas e tabelas acessíveis; (3) nomear links de forma descritiva; (4) garantir contraste e fontes legíveis. COMPETÊNCIAS DESENVOLVIDAS: produção de documentos acessíveis; revisão de acessibilidade. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (princípios); Módulo 1 (Word e documentos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: em documentos, a acessibilidade começa pela estrutura semântica: usar estilos de título (Heading) em vez de apenas negrito, o que permite a navegação por leitores de tela e a geração de sumários; empregar listas reais em vez de hífens manuais; construir tabelas com linha de cabeçalho identificada; evitar imagens com texto embutido sem alternativa; e nomear links de forma descritiva (evitar \"clique aqui\"). O contraste mínimo entre texto e fundo e o uso de fontes legíveis completam o conjunto. Em mensagens de correio, prefira texto simples quando possível, evite excesso de imagens que carreguem informação essencial e teste a leitura com leitor de tela quando relevante. PDFs devem ser gerados a partir de documentos estruturados e, quando escaneados, receber camada de texto acessível. A verificação com tecnologia assistiva revela barreiras que a inspeção visual não detecta.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: trocar negrito manual por estilos de título.\n- Nível intermediário: construir uma tabela acessível e nomear links.\n- Nível avançado: revisar um PDF acessível e corrigir ordem de leitura.\n- Nível especialista: auditar um conjunto de documentos e padronizar a acessibilidade.\nCOMPARAÇÕES CRÍTICAS:\n- estilo de título x negrito: o estilo cria estrutura navegável; o negrito só destaca visualmente — muda a acessibilidade.\n- lista real x hífen manual: a lista real é anunciada como lista pelo leitor de tela; o hífen não.\n- link descritivo x \"clique aqui\": o descritivo informa o destino; o genérico não faz sentido fora de contexto.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Negrito no lugar do título é equivalente.\" — Motivo: não cria estrutura — Versão tecnicamente correta: usar estilos de título.\n- Afirmação errada: \"PDF escaneado já é acessível.\" — Motivo: imagem sem camada de texto não é lida — Versão tecnicamente correta: aplicar reconhecimento de texto e ordem de leitura.\n- Afirmação errada: \"Contraste é questão de estética.\" — Motivo: afeta a leitura por baixa visão — Versão tecnicamente correta: garantir contraste mínimo.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: estilo de título, lista real, tabela com cabeçalho, alt text, link descritivo, contraste.\n- Regras e fórmulas: estrutura semântica + contraste + alternativa textual = documento acessível.\n- Exceções: PDFs escaneados exigem camada de texto.\n- Palavras-chave: semântica, leitor de tela, contraste, link, PDF.\n- Checklist de domínio: (1) Uso estilos? (2) Construo listas/tabelas acessíveis? (3) Nomeio links? (4) Garanto contraste?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Por que usar estilos de título? (2) Como tornar uma tabela acessível? (3) O que reescrever em \"clique aqui\"? (4) O que falta em um PDF escaneado? (5) Como testar a acessibilidade?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que evitar 'clique aqui' em links?",
                    "resposta": "Leitores de tela leem o texto do link fora de contexto; 'clique aqui' não informa o destino. Use descrição do destino, ex.: 'Acesse o relatório de março'."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como estruturar um documento acessível?",
                    "resposta": "Usar estilos de título hierárquicos (H1, H2...), listas reais, tabelas com cabeçalho, alt text em imagens e contraste adequado."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'PDF sempre é acessível.'",
                    "correcao": "Errado. PDFs podem ser inacessíveis se forem imagens escaneadas ou sem estrutura; prefira PDF com texto selecionável e tags, ou forneça versão acessível."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Usar estilos de título (Heading) melhora a navegação por leitores de tela.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática melhora acessibilidade de links? A) Usar 'clique aqui'; B) Descrever o destino do link; C) Links sem texto; D) Links em imagens sem alt text.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar boas práticas de acessibilidade em documentos e mensagens, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-3-topico-3",
            "titulo": "Comunicação profissional e institucional",
            "subtopicos": [
              {
                "id": "m3-u3-t3-s1",
                "titulo": "Padrões de comunicação institucional",
                "objetivoAprendizagem": "Aluno conhecerá padrões de comunicação institucional.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é comunicação institucional; (b) seus objetivos; (c) a distinção entre interna e externa; (d) o marco legal aplicável no serviço público. POR QUE O CONHECIMENTO É IMPORTANTE: a comunicação representa a instituição e deve ser consistente e transparente; a prova cobra padrões e normas. PRÉ-REQUISITOS: noção de comunicação profissional e de administração pública. OBJETIVOS OBSERVÁVEIS: (1) definir comunicação institucional; (2) listar seus objetivos; (3) distinguir interna de externa; (4) citar LAI e Lei de Governo Digital. COMPETÊNCIAS DESENVOLVIDAS: alinhamento à identidade institucional; conformidade com transparência. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (tom e clareza); unidade 3.3 (canais); Módulo 6 (transparência). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: comunicação institucional é o conjunto de práticas padronizadas pelas quais uma organização se comunica: canais definidos, identidade visual, tom de voz, modelos de documentos e mensagens, assinatura institucional e protocolos de resposta. Seus objetivos são clareza, consistência, transparência e rastreabilidade, evitando mensagens contraditórias e retrabalho. Distingue-se a comunicação interna (voltada a colaboradores) da externa (voltada a cidadãos, parceiros e imprensa). No serviço público, somam-se deveres legais: a Lei de Acesso à Informação (Lei nº 12.527/2011) orienta a transparência e o acesso a informações, e a Lei de Governo Digital (Lei nº 14.129/2021) trata de canais e serviços digitais — ambas já verificadas nas referências do projeto. Isso não significa divulgar dados pessoais: transparência administrativa e proteção de dados convivem, e a publicidade deve observar os limites legais (Módulo 6). Padronizar a comunicação reduz ruído e fortalece a confiança do cidadão.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer que a forma da mensagem representa a instituição.\n- Nível intermediário: aplicar tom, identidade e modelos padronizados.\n- Nível avançado: conciliar transparência com proteção de dados pessoais.\n- Nível especialista: revisar o plano de comunicação de um órgão e apontar inconsistências.\nCOMPARAÇÕES CRÍTICAS:\n- interna x externa: mudam o público, o registro e os canais — confundir altera o padrão exigido.\n- transparência x proteção de dados: divulgar o administrativo não autoriza expor o pessoal — o limite muda o gabarito.\n- identidade visual x conteúdo: a forma padroniza, mas não substitui a clareza do conteúdo.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Transparência significa divulgar tudo.\" — Motivo: há dados protegidos — Versão tecnicamente correta: publicar o administrativo, protegendo dados pessoais.\n- Afirmação errada: \"Cada setor pode adotar seu próprio formato.\" — Motivo: fragmenta a comunicação — Versão tecnicamente correta: seguir padrões institucionais.\n- Afirmação errada: \"LAI e Governo Digital dispensam boa prática de comunicação.\" — Motivo: a lei é piso, não teto — Versão tecnicamente correta: aliar conformidade e clareza.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: comunicação institucional, identidade, tom, interna, externa, LAI, Governo Digital.\n- Regras e fórmulas: clareza + consistência + transparência + rastreabilidade.\n- Exceções: transparência não afasta a proteção de dados pessoais.\n- Palavras-chave: padrão, canal, cidadão, transparência, conformidade.\n- Checklist de domínio: (1) Defino o conceito? (2) Listo objetivos? (3) Distingo interna/externa? (4) Cito o marco legal?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é comunicação institucional? (2) Cite dois objetivos. (3) Qual a diferença entre interna e externa? (4) Que leis se aplicam no setor público? (5) Transparência permite expor dados pessoais?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que padronizar assinaturas de e-mail institucional?",
                    "resposta": "Garante identidade visual, facilita identificação do remetente e transmite profissionalismo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como definir tom de voz institucional?",
                    "resposta": "Criar guia de estilo com vocabulário, formalidade, tratamento (você/senhora), e exemplos de mensagens padrão."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Comunicação institucional pode ser informal como a pessoal.'",
                    "correcao": "Errado. Deve seguir padrões institucionais de clareza, respeito e rastreabilidade; informalidade excessiva pode gerar ambiguidade e risco."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) LAI orienta transparência ativa e passiva na comunicação pública.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual lei trata de governo digital? A) Lei 13.709/2018; B) Lei 12.527/2011; C) Lei 14.129/2021; D) Lei 12.965/2014.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de conhecer padrões de comunicação institucional, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t3-s2",
                "titulo": "Escolha de canais e rastreabilidade",
                "objetivoAprendizagem": "Aluno escolherá canais adequados e garantirá rastreabilidade.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os principais canais e seus usos; (b) o que é rastreabilidade; (c) riscos de canais efêmeros; (d) registro de decisões no serviço público. POR QUE O CONHECIMENTO É IMPORTANTE: escolher o canal certo e registrar decisões evita perda de informação e retrabalho; a prova cobra adequação e rastreabilidade. PRÉ-REQUISITOS: unidade 3.1 (síncrono x assíncrono); noção de protocolo administrativo. OBJETIVOS OBSERVÁVEIS: (1) associar canal e finalidade; (2) definir rastreabilidade; (3) identificar decisões que exigem registro; (4) evitar decisões só em chat. COMPETÊNCIAS DESENVOLVIDAS: escolha de canal; gestão documental. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (síncrono); unidade 3.3 (equipes distribuídas); Módulo 6 (gestão documental). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: cada canal tem vocação: o e-mail é formal e rastreável; o chat é rápido e menos formal; o telefone atende urgências; a videoconferência trata assuntos complexos; o documento colaborativo apoia a coautoria; e o sistema de protocolo confere oficialidade e autuação. Rastreabilidade é a capacidade de reconstruir o histórico de uma decisão — quem decidiu, quando, com base em quê e onde está registrado. Ela se sustenta em atas de reunião, versionamento de documentos, registros de acesso (logs) e arquivamento conforme normas de gestão documental. Decisões relevantes não devem existir apenas em canais efêmeros, como mensagens que se perdem ou que não têm valor probatório. No serviço público, a documentação e o arquivamento seguem regras próprias, e a decisão precisa ser recuperável para auditoria e transparência. A escolha do canal, portanto, não é apenas conveniência: é parte da conformidade.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer a vocação de cada canal.\n- Nível intermediário: decidir qual canal registra melhor determinada decisão.\n- Nível avançado: montar um fluxo em que a decisão nasce informal e é formalizada com registro.\n- Nível especialista: auditar uma decisão e recompor seu histórico a partir dos registros existentes.\nCOMPARAÇÕES CRÍTICAS:\n- chat x e-mail: o chat é ágil e pouco rastreável; o e-mail é formal e registrado — a escolha altera a proteção da decisão.\n- ata x gravação: a ata resume e é buscável; a gravação é fiel, mas volumosa e sensível.\n- documento colaborativo x protocolo: o primeiro apoia a construção; o segundo confere oficialidade.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Decidir no chat basta.\" — Motivo: canais efêmeros não garantem registro — Versão tecnicamente correta: formalizar em ata, e-mail ou protocolo.\n- Afirmação errada: \"Rastreabilidade é só guardar tudo.\" — Motivo: é reconstruir decisões — Versão tecnicamente correta: registrar quem, quando, o quê e com base em quê.\n- Afirmação errada: \"Qualquer canal serve para qualquer decisão.\" — Motivo: formalidade depende do ato — Versão tecnicamente correta: adequar o canal à natureza da decisão.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: canal, rastreabilidade, ata, versionamento, log, protocolo.\n- Regras e fórmulas: decisão relevante exige registro recuperável.\n- Exceções: conversas exploratórias podem ocorrer em canais informais, com formalização posterior.\n- Palavras-chave: e-mail, chat, ata, protocolo, auditoria.\n- Checklist de domínio: (1) Associo canal e finalidade? (2) Defino rastreabilidade? (3) Identifico decisões que exigem registro? (4) Evito depender de chat?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual canal é mais formal? (2) O que é rastreabilidade? (3) Por que o chat é frágil para decisões? (4) O que uma ata registra? (5) Como formalizar uma decisão nascida no chat?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que decisões importantes não devem ficar apenas no chat?",
                    "resposta": "Chat é efêmero e de difícil recuperação; falta rastreabilidade e formalidade para auditoria e prestação de contas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como registrar uma decisão tomada em reunião?",
                    "resposta": "Elaborar ata com participantes, pauta, decisões, responsáveis e prazos; compartilhar e arquivar em repositório institucional."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Chat institucional é suficiente para decisões formais.'",
                    "correcao": "Errado. Chat não substitui registro formal; decisões formais exigem ata/documento arquivado."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Atas de reunião contribuem para rastreabilidade institucional.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual canal é mais adequado para decisão formal? A) Chat; B) Telefone; C) E-mail/ata arquivada; D) Mensagem de voz.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de escolher canais adequados e garantirá rastreabilidade, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t3-s3",
                "titulo": "Comunicação profissional em equipes distribuídas",
                "objetivoAprendizagem": "Aluno aplicará boas práticas de comunicação em equipes distribuídas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os desafios de equipes distribuídas; (b) boas práticas de comunicação; (c) acordos de resposta (SLA); (d) inclusão de quem não está síncrono. POR QUE O CONHECIMENTO É IMPORTANTE: o trabalho remoto amplia fusos e culturas; comunicar bem evita exclusão e atraso. PRÉ-REQUISITOS: unidade 3.1 (síncrono x assíncrono); unidade 3.3 (canais). OBJETIVOS OBSERVÁVEIS: (1) listar desafios de fuso, idioma e cultura; (2) aplicar comunicação assíncrona com prazos claros; (3) documentar decisões; (4) definir acordos de resposta. COMPETÊNCIAS DESENVOLVIDAS: colaboração intercultural; gestão de equipes remotas. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (modos); unidade 3.3 (canais); unidade 2.1 (calendários). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: equipes distribuídas enfrentam fusos horários, idiomas e diferenças culturais de comunicação. As boas práticas incluem: definir janelas de sobreposição em que todos estão disponíveis; preferir comunicação assíncrona com prazos explícitos; documentar decisões para quem não participou; evitar marcar reuniões fora do horário de trabalho alheio; respeitar feriados locais; usar ferramentas colaborativas compartilhadas; e estabelecer acordos de nível de serviço (SLA) — prazos esperados de resposta para cada tipo de mensagem. A inclusão exige cuidado para não excluir quem não pode estar presente ao vivo: decisões tomadas em reunião síncrona devem ser registradas e comunicadas, e materiais devem ficar disponíveis. A clareza redobrada compensa a ausência de contexto presencial: mensagens explícitas reduzem interpretações divergentes entre culturas. A rotatividade de horário das reuniões recorrentes favorece a equidade entre fusos.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer que fuso e idioma afetam a comunicação.\n- Nível intermediário: aplicar prazos claros e documentar decisões.\n- Nível avançado: definir acordos de resposta (SLA) adequados à equipe.\n- Nível especialista: reorganizar o fluxo de uma equipe multinacional reduzindo exclusão e retrabalho.\nCOMPARAÇÕES CRÍTICAS:\n- assíncrono x síncrono em equipes distribuídas: o assíncrono promove inclusão de fusos; o síncrono deve ser reservado — a escolha afeta a equidade.\n- prazo explícito x expectativa implícita: o explícito evita atraso; o implícito gera conflito — muda o resultado.\n- documento compartilhado x mensagem solta: o primeiro é durável; a segunda se perde.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Reunião fora do horário de alguém é aceitável se for importante.\" — Motivo: ignora limites e fusos — Versão tecnicamente correta: respeitar horários e alternar para equidade.\n- Afirmação errada: \"Assíncrono dispensa prazos.\" — Motivo: sem prazo, atrasa — Versão tecnicamente correta: definir SLA de resposta.\n- Afirmação errada: \"Todos entendem o mesmo contexto.\" — Motivo: culturas diferem — Versão tecnicamente correta: explicitar contexto e decisões.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: fuso, idioma, cultura, sobreposição, SLA, assíncrono, documentação.\n- Regras e fórmulas: janela de sobreposição + prazos + documentação = colaboração distribuída saudável.\n- Exceções: decisões síncronas precisam ser registradas para quem faltou.\n- Palavras-chave: distribuída, fuso, SLA, inclusão, documentação.\n- Checklist de domínio: (1) Listo desafios? (2) Aplico assíncrono com prazo? (3) Documento decisões? (4) Incluo quem não está síncrono?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite dois desafios de equipes distribuídas. (2) O que é SLA de resposta? (3) Por que documentar decisões? (4) Como incluir quem não pode ao vivo? (5) Por que alternar horários de reunião?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Como lidar com fusos horários diferentes?",
                    "resposta": "Definir janela de sobreposição, usar rotação de horários para reuniões e preferir assíncrono quando possível."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma equipe global precisa decidir sobre um bug crítico. Como proceder?",
                    "resposta": "Comunicação assíncrona urgente (e-mail/mensagem com prazo curto) + reunião síncrona apenas se necessário, com gravação para ausentes."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Reuniões sempre devem ser no horário do escritório sede.'",
                    "correcao": "Errado. Isso exclui participantes de outros fusos; rotacionar horários e usar assíncrono é mais inclusivo."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Documentar decisões ajuda equipes distribuídas.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática favorece inclusão em equipes globais? A) Reuniões sempre no horário da sede; B) Rotação de horários; C) Excluir ausentes da decisão; D) Apenas chat síncrono.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar boas práticas de comunicação em equipes distribuídas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-3-unidade-4",
        "titulo": "3.4 Uso institucional de plataformas de videoconferência",
        "topicos": [
          {
            "id": "modulo-3-unidade-4-topico-1",
            "titulo": "Controle de participantes e lobby",
            "subtopicos": [
              {
                "id": "m3-u4-t1-s1",
                "titulo": "Lobby e sala de espera",
                "objetivoAprendizagem": "Aluno compreenderá o uso de lobby para controlar acesso a reuniões.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é lobby/sala de espera; (b) seus benefícios; (c) as configurações típicas; (d) seu papel institucional. POR QUE O CONHECIMENTO É IMPORTANTE: o lobby é o controle de acesso mais eficaz contra intrusão; a prova cobra sua função. PRÉ-REQUISITOS: noção de reunião online e de papéis de anfitrião. OBJETIVOS OBSERVÁVEIS: (1) definir lobby; (2) explicar como ele reduz intrusão; (3) distinguir configurações; (4) aplicar em reuniões sensíveis. COMPETÊNCIAS DESENVOLVIDAS: controle de acesso em reuniões; condução segura. GRAU DE DIFICULDADE: básico. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (autenticação); unidade 5.1 (zoombombing); unidade 2.2 (controle de participantes). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o lobby (sala de espera) é o recurso que retém os participantes até que o anfitrião os admita. Ele resolve o problema do link divulgado: mesmo que um desconhecido obtenha o endereço da reunião, não entra sem aprovação. As configurações típicas variam: lobby sempre ativo (todos aguardam), lobby apenas para convidados externos (membros da organização entram direto) e lobby desativado. A forma de identificação de quem espera (nome exibido, conta autenticada) ajuda o anfitrião a decidir. Boa prática institucional: ativar o lobby por padrão em reuniões que tratam dados sensíveis, verificar a identidade antes de admitir e designar coanfitriões para monitorar a fila. Os nomes e a disponibilidade exata das opções dependem da plataforma e do plano, devendo ser confirmados na documentação oficial; o princípio estável é que o lobby transfere ao anfitrião a decisão de entrada, reduzindo a superfície de ataque.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o lobby é uma \"porta com porteiro\".\n- Nível intermediário: escolher a configuração de lobby conforme o tipo de reunião.\n- Nível avançado: combinar lobby, autenticação e verificação de identidade.\n- Nível especialista: projetar o fluxo de uma reunião pública minimizando risco de intrusão.\nCOMPARAÇÕES CRÍTICAS:\n- lobby x senha: o lobby decide caso a caso; a senha só exige o segredo — o lobby contém quem tem o link.\n- lobby sempre x lobby só para externos: o primeiro é mais restritivo; o segundo equilibra conveniência — muda o risco.\n- identificar x apenas admitir: verificar quem entra é mais seguro que admitir em massa.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Com senha, o lobby é dispensável.\" — Motivo: a senha vaza com o link — Versão tecnicamente correta: o lobby contém acessos não autorizados.\n- Afirmação errada: \"O lobby bloqueia automaticamente quem é da casa.\" — Motivo: depende da configuração — Versão tecnicamente correta: pode-se admitir membros direto, se desejado.\n- Afirmação errada: \"O lobby elimina a necessidade de monitorar.\" — Motivo: alguém precisa admitir — Versão tecnicamente correta: designar anfitrião/coanfitrião para a fila.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: lobby, sala de espera, anfitrião, coanfitrião, configuração.\n- Regras e fórmulas: reunião sensível → lobby ativo.\n- Exceções: a nomenclatura varia por plataforma.\n- Palavras-chave: controle de acesso, fila, admissão, intrusão.\n- Checklist de domínio: (1) Defino lobby? (2) Explico o benefício? (3) Distingo configurações? (4) Aplico em reuniões sensíveis?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é o lobby? (2) Como ele reduz intrusão? (3) Cite duas configurações. (4) Por que verificar identidade? (5) Substitui a senha?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Em reuniões com lobby ativo, qual o principal risco de zoombombing e como minimizá-lo?",
                    "resposta": "Intrusão não autorizada (facilitada por lista aberta e ausência de senha). Mitigação: lobby sempre ativo, senha obrigatória, login dos participantes, restrição de compartilhamento de tela e desativação de entrada após início."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como reduzir risco de intrusão em reunião pública?",
                    "resposta": "Ativar lobby, exigir senha, restringir compartilhamento de tela ao anfitrião e desativar entrada após início."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Lobby é desnecessário em reuniões internas.'",
                    "correcao": "Depende do risco. Reuniões com dados sensíveis devem usar lobby mesmo internas; verificar política institucional."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Lobby permite aprovar/rejeitar participantes antes da entrada.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso reduz intrusão não autorizada? A) Chat público; B) Lobby; C) Compartilhamento livre; D) Sem senha.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender o uso de lobby para controlar acesso a reuniões, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t1-s2",
                "titulo": "Remoção e moderação de participantes",
                "objetivoAprendizagem": "Aluno compreenderá recursos de moderação de participantes.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que a moderação permite fazer; (b) boas práticas de condução; (c) registro de ocorrências; (d) limites e condicionalidade dos recursos. POR QUE O CONHECIMENTO É IMPORTANTE: saber moderar mantém a reunião segura e produtiva; a prova cobra as ações do anfitrião. PRÉ-REQUISITOS: papéis de anfitrião e coanfitrião. OBJETIVOS OBSERVÁVEIS: (1) listar ações de moderação; (2) definir coanfitriões; (3) aplicar comunicação de regras; (4) registrar incidentes. COMPETÊNCIAS DESENVOLVIDAS: moderação de reuniões; gestão de incidentes. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (lobby); unidade 5.1 (intrusão); unidade 3.1 (netiqueta). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a moderação reúne as ações disponíveis ao anfitrião e aos coanfitriões para conduzir e proteger a reunião: remover participantes, desativar o microfone ou a câmera de alguém, silenciar todos, bloquear ou restringir o compartilhamento de tela e designar outros coanfitriões. Boas práticas incluem designar coanfitriões em reuniões grandes (um conduz, outro monitora), comunicar as regras no início, usar o recurso \"levantar mão\" para organizar a fala e registrar ocorrências relevantes. A remoção de um participante deve ter justificativa; em serviço público, um incidente (intrusão, conteúdo ofensivo, compartilhamento indevido) deve ser documentado e, conforme o caso, comunicado. A disponibilidade e a nomenclatura exata das ações variam por plataforma e plano, devendo ser confirmadas na documentação oficial; o princípio estável é que a moderação concentra no anfitrião o poder de manter a ordem e a segurança.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: saber que o anfitrião pode silenciar e remover.\n- Nível intermediário: aplicar coanfitriões e regras de fala.\n- Nível avançado: conter uma perturbação sem interromper toda a reunião.\n- Nível especialista: documentar um incidente e propor controles preventivos.\nCOMPARAÇÕES CRÍTICAS:\n- silenciar x remover: silenciar reduz ruído de forma reversível; remover exclui — a gravidade define a escolha.\n- anfitrião x coanfitrião: ambos moderam; o coanfitrião amplia a capacidade de monitoramento.\n- moderar x cercear: a moderação visa a ordem e a segurança, não a censura indevida.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Qualquer participante pode remover outro.\" — Motivo: é ação de papéis elevados — Versão tecnicamente correta: só anfitrião/coanfitrião moderam.\n- Afirmação errada: \"Remover resolve, não precisa registrar.\" — Motivo: incidente relevante exige registro — Versão tecnicamente correta: documentar em contexto institucional.\n- Afirmação errada: \"Silenciar e remover são a mesma coisa.\" — Motivo: diferem em reversibilidade e gravidade — Versão tecnicamente correta: escolher conforme o caso.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: moderação, anfitrião, coanfitrião, silenciar, remover, registro.\n- Regras e fórmulas: reunião maior → mais coanfitriões e regras explícitas.\n- Exceções: nomes e disponibilidade variam por plataforma/plano.\n- Palavras-chave: ordem, remoção, mute, incidente, registro.\n- Checklist de domínio: (1) Listo ações? (2) Defino coanfitriões? (3) Comunico regras? (4) Registro incidentes?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quem pode moderar? (2) Diferença entre silenciar e remover? (3) Por que designar coanfitriões? (4) Quando registrar um incidente? (5) O que \"levantar mão\" organiza?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quem pode remover participantes?",
                    "resposta": "Anfitrião e coanfitriões (conforme plataforma/plano). Participantes comuns não podem."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Em reunião com 100 participantes, como manter ordem?",
                    "resposta": "Designar coanfitriões, desativar microfones por padrão, usar 'levantar mão', liberar fala por vez, compartilhar tela apenas pelo anfitrião."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Qualquer participante pode remover outro.'",
                    "correcao": "Errado. Apenas anfitrião/coanfitrião tem essa permissão."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Coanfitriões auxiliam na moderação de grandes reuniões.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso organiza a fala em reuniões grandes? A) Chat livre; B) Levantar mão; C) Microfone sempre aberto; D) Compartilhamento de tela livre.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender recursos de moderação de participantes, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t1-s3",
                "titulo": "Autenticação e controle de acesso",
                "objetivoAprendizagem": "Aluno compreenderá mecanismos de autenticação em reuniões.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) mecanismos de autenticação em reuniões; (b) login obrigatório e domínio restrito; (c) senha e link com token; (d) boas práticas institucionais. POR QUE O CONHECIMENTO É IMPORTANTE: a autenticação restringe quem entra; a prova cobra as opções e seus efeitos. PRÉ-REQUISITOS: unidade 4.1 (lobby); noção de identidade digital. OBJETIVOS OBSERVÁVEIS: (1) citar mecanismos; (2) explicar login obrigatório; (3) restringir a domínio; (4) aplicar boas práticas. COMPETÊNCIAS DESENVOLVIDAS: controle de acesso; configuração segura de reunião. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (lobby); unidade 5.1 (intrusão); Módulo 4 (autenticação). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a autenticação verifica a identidade antes de conceder acesso. Em reuniões, os mecanismos típicos são: senha da reunião (segredo compartilhado); link com token (endereço exclusivo e difícil de adivinhar); login obrigatório (só entra quem está autenticado); restrição a determinado domínio (só contas da organização); e sala pessoal protegida por senha. Quanto mais forte a exigência, menor o risco de intrusão, mas maior a fricção para convidados externos. Boas práticas institucionais: exigir login para reuniões internas; restringir ao domínio organizacional quando não houver convidados externos; não publicar links em canais abertos; e rotacionar senhas de salas recorrentes. A disponibilidade de cada método varia por plataforma e plano, devendo ser confirmada na documentação oficial. A autenticação complementa (não substitui) o lobby e a moderação: em conjunto, formam camadas de defesa.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que a autenticação prova quem é o participante.\n- Nível intermediário: escolher o mecanismo conforme a presença de convidados externos.\n- Nível avançado: combinar domínio restrito, login e lobby.\n- Nível especialista: desenhar a política de acesso para diferentes tipos de reunião institucional.\nCOMPARAÇÕES CRÍTICAS:\n- link com token x senha: o link é único e perde-se ao ser compartilhado; a senha é reutilizável — muda o risco de vazamento.\n- login obrigatório x acesso livre: o primeiro vincula a identidade; o segundo permite anônimos — altera o controle.\n- domínio restrito x qualquer conta: o primeiro exclui externos; o segundo não — a escolha depende do convidado.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Link secreto dispensa autenticação.\" — Motivo: links vazam — Versão tecnicamente correta: combinar com login/lobby.\n- Afirmação errada: \"Reunião interna pode ser aberta a qualquer conta.\" — Motivo: expõe informação — Versão tecnicamente correta: restringir ao domínio.\n- Afirmação errada: \"Senha fixa de sala recorrente é segura.\" — Motivo: repetição facilita vazamento — Versão tecnicamente correta: rotacionar periodicamente.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: autenticação, senha, token, login, domínio restrito, sala pessoal.\n- Regras e fórmulas: mais exigência → menos intrusão e mais fricção.\n- Exceções: disponibilidade varia por plataforma/plano.\n- Palavras-chave: identidade, acesso, domínio, senha, token.\n- Checklist de domínio: (1) Cito mecanismos? (2) Explico login? (3) Restrinjo domínio? (4) Aplico boas práticas?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite três mecanismos. (2) O que o login obrigatório garante? (3) Quando restringir ao domínio? (4) Por que rotacionar senhas? (5) A autenticação substitui o lobby?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que exigir login para reuniões internas?",
                    "resposta": "Garante que apenas pessoas autenticadas da organização entrem, reduzindo acesso anônimo e intrusão."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma reunião com dados sensíveis deve ser protegida como?",
                    "resposta": "Login obrigatório, domínio restrito, lobby, senha, compartilhamento de tela restrito ao anfitrião e gravação controlada."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Publicar link de reunião em rede social é seguro.'",
                    "correcao": "Errado. Publicar links abertamente permite acesso de qualquer pessoa; compartilhe por canais seguros e restritos."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Restringir reunião ao domínio organizacional aumenta a segurança.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual método NÃO é recomendado para reuniões sensíveis? A) Login obrigatório; B) Domínio restrito; C) Link público sem senha; D) Lobby.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender mecanismos de autenticação em reuniões, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-4-topico-2",
            "titulo": "Compartilhamento de tela e colaboração",
            "subtopicos": [
              {
                "id": "m3-u4-t2-s1",
                "titulo": "Compartilhamento de tela: riscos e controle",
                "objetivoAprendizagem": "Aluno compreenderá riscos e controles no compartilhamento de tela.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que o compartilhamento de tela expõe; (b) os riscos típicos; (c) os controles preventivos; (d) o papel do anfitrião. POR QUE O CONHECIMENTO É IMPORTANTE: a exposição acidental de tela é uma das causas mais comuns de vazamento; a prova cobra riscos e controles. PRÉ-REQUISITOS: noção de reunião online e de informação sensível. OBJETIVOS OBSERVÁVEIS: (1) identificar o que pode ser exposto; (2) explicar o risco da tela inteira; (3) aplicar controles (janela específica, não perturbe); (4) parar o compartilhamento ao fim. COMPETÊNCIAS DESENVOLVIDAS: condução segura de compartilhamento; prevenção de vazamento. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.1 (exposição acidental); unidade 4.1 (moderação); Módulo 4 (DLP). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: compartilhar a tela exibe o conteúdo do dispositivo aos participantes. O risco não está apenas no que se pretende mostrar, mas em tudo o que aparece junto: notificações de mensagens, abas abertas, janelas sobrepostas, arquivos em segundo plano e barras de favoritos. Compartilhar a tela INTEIRA amplia esse risco; compartilhar apenas a janela ou o aplicativo específico reduz a superfície. Controles preventivos incluem: escolher compartilhar janela/aplicativo em vez de tela inteira; ativar o modo \"não perturbe\" ou desativar notificações; fechar abas e programas sensíveis antes; revisar o que está visível antes de iniciar; e parar o compartilhamento ao terminar. O anfitrião pode restringir quem tem permissão para compartilhar, o que concentra a ação em pessoas confiáveis. A combinação \"compartilhar a janela certa + silenciar notificações + encerrar o compartilhamento\" é a prática recomendada em reuniões com dados sensíveis.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que compartilhar tela mostra o que está visível.\n- Nível intermediário: distinguir tela inteira de janela/aplicativo.\n- Nível avançado: montar um procedimento pré-compartilhamento que elimine exposições.\n- Nível especialista: diante de um vazamento por tela, identificar o que falhou e propor controles.\nCOMPARAÇÕES CRÍTICAS:\n- tela inteira x janela específica: a primeira expõe tudo; a segunda limita — a escolha altera o risco.\n- notificações ativas x modo não perturbe: as notificações vazam conteúdo privado — o controle as elimina.\n- compartilhar x encerrar: esquecer de encerrar mantém a exposição após a discussão — o encerramento é parte do processo.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Compartilhar a tela inteira é mais prático e seguro.\" — Motivo: expõe conteúdo não intencional — Versão tecnicamente correta: compartilhar a janela específica.\n- Afirmação errada: \"Notificações não aparecem durante o compartilhamento.\" — Motivo: aparecem e vazam — Versão tecnicamente correta: ativar o modo não perturbe.\n- Afirmação errada: \"Ao terminar o assunto, o compartilhamento para sozinho.\" — Motivo: permanece ativo — Versão tecnicamente correta: encerrar explicitamente.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: compartilhamento de tela, janela específica, notificação, não perturbe, exposição.\n- Regras e fórmulas: janela específica + notificações silenciadas + encerrar = compartilhamento seguro.\n- Exceções: o anfitrião pode restringir quem compartilha.\n- Palavras-chave: vazamento, aba aberta, notificação, escopo, encerrar.\n- Checklist de domínio: (1) Identifico o que expõe? (2) Explico o risco da tela inteira? (3) Aplico controles? (4) Encerro o compartilhamento?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o compartilhamento expõe além do intencional? (2) Por que a tela inteira é arriscada? (3) Que controle silencia notificações? (4) O que fazer antes de compartilhar? (5) É preciso encerrar manualmente?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual a diferença entre compartilhar tela inteira e janela específica?",
                    "resposta": "Tela inteira expõe tudo (notificações, abas); janela específica expõe apenas o aplicativo escolhido, reduzindo risco."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Antes de compartilhar tela em reunião institucional, o que verificar?",
                    "resposta": "Fechar abas/arquivos sensíveis, desativar notificações, compartilhar apenas a janela necessária e confirmar com participantes o que será exibido."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Compartilhar tela inteira é sempre seguro.'",
                    "correcao": "Errado. Pode expor dados sensíveis; prefira compartilhamento de janela específica."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Desativar notificações reduz exposição acidental ao compartilhar tela.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática reduz risco ao compartilhar tela? A) Compartilhar tela inteira sempre; B) Compartilhar apenas janela específica; C) Deixar notificações ativas; D) Não verificar conteúdo antes.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender riscos e controles no compartilhamento de tela, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t2-s2",
                "titulo": "Coautoria e documentos compartilhados em reunião",
                "objetivoAprendizagem": "Aluno compreenderá colaboração em documentos durante reuniões.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é coautoria em tempo real; (b) seus benefícios; (c) riscos de versão e de exposição; (d) boas práticas. POR QUE O CONHECIMENTO É IMPORTANTE: editar documentos durante a reunião agiliza decisões, mas sem controle gera versões inconsistentes e vazamentos. PRÉ-REQUISITOS: noção de documento compartilhado e de permissões. OBJETIVOS OBSERVÁVEIS: (1) definir coautoria; (2) citar benefícios; (3) reconhecer riscos; (4) aplicar boas práticas. COMPETÊNCIAS DESENVOLVIDAS: colaboração em documentos; controle de versão. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.2 (exposição em plataformas); Módulo 1 (OneDrive/colaboração); unidade 3.3 (rastreabilidade). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a coautoria em tempo real permite que vários participantes editem o mesmo documento simultaneamente, com as alterações aparecendo instantaneamente; é comum em suítes de escritório integradas. Benefícios: decisões registradas no próprio documento, menos troca de versões por e-mail e maior transparência do trabalho. Riscos: edições não revisadas que introduzem erro, perda do controle de versão quando não há histórico, exposição de dados a participantes que não deveriam ver o conteúdo e conflitos de edição. Boas práticas incluem: definir um editor responsável pela versão final; usar controle de versão e comentários; salvar a versão validada; e restringir permissões — concedendo edição apenas a quem precisa e mantendo o restante em modo de visualização. Em reuniões sensíveis, compartilhar o documento apenas com os participantes autorizados e revisar as permissões ao final. O histórico de versões é o recurso que permite reverter alterações indevidas.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que todos podem editar ao mesmo tempo.\n- Nível intermediário: distinguir edição de visualização e usar comentários.\n- Nível avançado: gerenciar conflitos e restabelecer uma versão válida.\n- Nível especialista: definir o modelo de permissões e o fluxo de revisão para documentos sensíveis.\nCOMPARAÇÕES CRÍTICAS:\n- editar x visualizar: a edição altera o documento; a visualização apenas consulta — a permissão errada expõe ou corrompe.\n- coautoria x envio por anexo: a primeira concentra a versão; o segundo cria cópias divergentes.\n- edição ao vivo x revisão posterior: editar ao vivo acelera, mas exige revisão para evitar erro.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Se todos editam, não há risco de versão.\" — Motivo: sem histórico, conflitos persistem — Versão tecnicamente correta: usar controle de versão.\n- Afirmação errada: \"Compartilhar com edição para todos é inofensivo.\" — Motivo: permite alteração indevida — Versão tecnicamente correta: aplicar o menor privilégio.\n- Afirmação errada: \"O documento ao vivo dispensa versão final.\" — Motivo: a versão validada é o registro — Versão tecnicamente correta: salvar e comunicar a versão final.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: coautoria, edição simultânea, controle de versão, comentário, permissão.\n- Regras e fórmulas: edição apenas para quem precisa + versão final validada.\n- Exceções: o histórico permite reverter alterações.\n- Palavras-chave: documento compartilhado, versão, permissão, revisão.\n- Checklist de domínio: (1) Defino coautoria? (2) Cito benefícios? (3) Reconheço riscos? (4) Aplico boas práticas?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é coautoria em tempo real? (2) Cite dois benefícios. (3) Que risco a edição ampla traz? (4) Como controlar versões? (5) Que permissão dar a quem só consulta?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quais benefícios da coautoria em reunião?",
                    "resposta": "Registro imediato de decisões, redução de versões paralelas e alinhamento em tempo real."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como evitar edição descontrolada em documento compartilhado?",
                    "resposta": "Definir um editor responsável, usar comentários/sugestões, restringir permissões e salvar versão final após a reunião."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Coautoria não exige controle de permissões.'",
                    "correcao": "Errado. Sem controle, qualquer participante pode alterar ou excluir conteúdo; defina permissões adequadas."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Restringir permissões de edição melhora o controle em coautoria.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática é recomendada em coautoria? A) Todos editam sem restrição; B) Editor responsável + comentários; C) Sem versionamento; D) Sem salvamento final.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender colaboração em documentos durante reuniões, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t2-s3",
                "titulo": "Chat, reações e recursos auxiliares",
                "objetivoAprendizagem": "Aluno conhecerá recursos auxiliares de reuniões e seus cuidados.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os recursos auxiliares de reunião; (b) cuidados com dados; (c) relação com gravação; (d) boas práticas. POR QUE O CONHECIMENTO É IMPORTANTE: recursos como chat e enquetes coletam e registram informação; usá-los sem cuidado expõe dados. PRÉ-REQUISITOS: noção de reunião online. OBJETIVOS OBSERVÁVEIS: (1) listar recursos auxiliares; (2) reconhecer riscos de registro; (3) relacionar chat e gravação; (4) aplicar boas práticas. COMPETÊNCIAS DESENVOLVIDAS: uso responsável de recursos; proteção de informação. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.3 (gravação); unidade 5.1 (exposição); Módulo 4 (dados pessoais). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: reuniões oferecem recursos auxiliares além do áudio e vídeo: o chat (mensagens de texto), as reações (emojis), o \"levantar mão\", as enquetes (polls), o quadro branco (whiteboard) e as salas simultâneas (breakout rooms). Cada um tem efeitos sobre a informação: o chat produz registro textual que pode ser gravado; as enquetes coletam respostas e, por vezes, dados pessoais; o quadro branco acumula conteúdo colaborativo; as salas simultâneas dividem grupos e podem escapar ao monitoramento central. Boas práticas: definir previamente se o chat será gravado ou salvo; evitar inserir dados sensíveis no chat; informar os participantes quando uma enquete coleta dados; baixar e tratar o resultado das enquetes conforme a finalidade; e encerrar ou limpar o quadro branco quando contiver informação sensível. A disponibilidade e os nomes exatos desses recursos variam por plataforma e plano. O princípio é tratar cada recurso como um canal que pode registrar informação e, portanto, exigir tratamento adequado.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer os recursos disponíveis.\n- Nível intermediário: identificar o que cada recurso registra.\n- Nível avançado: decidir se o chat participa da gravação e como tratar enquetes.\n- Nível especialista: desenhar o uso de recursos em reunião sensível sem criar exposição.\nCOMPARAÇÕES CRÍTICAS:\n- chat x fala: o chat deixa registro textual facilmente copiável; a fala depende de gravação — a exposição difere.\n- enquete x votação formal: a enquete é indicativa e pode coletar dados; a votação formal tem regras próprias.\n- sala simultânea x plenária: a primeira escapa ao monitoramento; a segunda é visível ao anfitrião.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O chat nunca é gravado.\" — Motivo: pode integrar a gravação — Versão tecnicamente correta: verificar a configuração e avisar.\n- Afirmação errada: \"Enquetes são anônimas por definição.\" — Motivo: depende da configuração — Versão tecnicamente correta: informar a coleta e a finalidade.\n- Afirmação errada: \"Sala simultânea é tão monitorada quanto a plenária.\" — Motivo: o anfitrião pode não ver tudo — Versão tecnicamente correta: prever coanfitriões por sala.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: chat, reações, levantar mão, enquete, quadro branco, sala simultânea.\n- Regras e fórmulas: todo recurso que registra informação exige tratamento e aviso.\n- Exceções: nomes e disponibilidade variam por plataforma/plano.\n- Palavras-chave: registro, enquete, breakout room, quadro branco, dados.\n- Checklist de domínio: (1) Listo recursos? (2) Reconheço riscos? (3) Relaciono chat e gravação? (4) Aplico boas práticas?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite três recursos auxiliares. (2) Por que o chat é sensível? (3) Enquete é sempre anônima? (4) Que cuidado ter com o quadro branco? (5) Sala simultânea é monitorada?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O chat de reunião é gravado?",
                    "resposta": "Depende da plataforma e configuração; em muitos casos a gravação inclui chat. Verificar antes de enviar informações sensíveis."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como usar enquetes de forma adequada?",
                    "resposta": "Informar finalidade, evitar coleta de dados pessoais desnecessários, anonimizar quando possível e respeitar LGPD."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Chat de reunião é efêmero e não fica registrado.'",
                    "correcao": "Errado. Chat pode ser gravado e arquivado; trate como comunicação formal."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Enquetes podem coletar dados pessoais e exigem cuidado com LGPD.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso organiza a fala em grandes reuniões? A) Chat livre; B) Levantar mão; C) Microfone sempre aberto; D) Reações aleatórias.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de conhecer recursos auxiliares de reuniões e seus cuidados, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-4-topico-3",
            "titulo": "Gravação, consentimento, retenção e proteção",
            "subtopicos": [
              {
                "id": "m3-u4-t3-s1",
                "titulo": "Políticas de gravação institucional",
                "objetivoAprendizagem": "Aluno compreenderá políticas de gravação em contexto institucional.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que uma política institucional de gravação deve definir; (b) por que gravar apenas quando necessário; (c) o que a gravação captura; (d) alinhamento com gestão documental e LGPD. POR QUE O CONHECIMENTO É IMPORTANTE: gravar sem política é fonte de vazamento e de responsabilização; a prova cobra os elementos da política. PRÉ-REQUISITOS: unidade 2.3 (políticas de gravação); noção de informação sensível. OBJETIVOS OBSERVÁVEIS: (1) definir os itens da política; (2) justificar a finalidade; (3) enumerar o que é capturado; (4) indicar retenção e acesso. COMPETÊNCIAS DESENVOLVIDAS: elaboração e aplicação de política de gravação. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.3 (consentimento); unidade 4.3 (consentimento e LGPD); unidade 5.3 (resposta a incidentes). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: uma política de gravação institucional define quando gravar (finalidade legítima), quem pode gravar, o armazenamento, o acesso, a retenção e a exclusão. Gravar apenas quando necessário é a aplicação do princípio de minimização: a reunião padrão não precisa ser registrada em vídeo. É preciso ter clareza de que a gravação pode conter vídeo, áudio, chat e transcrição — cada elemento amplia o volume de dados e o risco. O acesso deve ser restrito a autorizados, as gravações sensíveis devem ser protegidas (criptografia, controle de acesso), e a retenção deve seguir normas de gestão documental e a LGPD (Lei nº 13.709/2018, verificada nas referências do projeto). A política também precisa prever o que fazer em caso de pedido de acesso (transparência) e de incidente (vazamento). Sem política clara, decisões improvisadas geram inconsistência e exposição.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que gravar é uma decisão com finalidade.\n- Nível intermediário: redigir os itens da política e definir retenção.\n- Nível avançado: conciliar acesso, transparência e proteção de dados.\n- Nível especialista: auditar a política vigente e propor melhoria nos pontos frágeis.\nCOMPARAÇÕES CRÍTICAS:\n- gravar tudo x gravar o necessário: a primeira maximiza risco e armazenamento; a segunda aplica minimização.\n- política formal x prática improvisada: a primeira garante consistência e rastreabilidade; a segunda varia por pessoa.\n- transcrição x vídeo: a transcrição é mais leve e buscável; o vídeo é mais completo e mais sensível.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Se a plataforma permite gravar, não há política a definir.\" — Motivo: permitir não é autorizar — Versão tecnicamente correta: definir finalidade, acesso e retenção.\n- Afirmação errada: \"Gravação é sempre benéfica para o registro.\" — Motivo: amplia dados e risco — Versão tecnicamente correta: gravar apenas quando necessário.\n- Afirmação errada: \"Retenção indefinida preserva a informação.\" — Motivo: contraria a minimização — Versão tecnicamente correta: definir prazo e descarte.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: política, finalidade, acesso, retenção, exclusão, minimização, LGPD.\n- Regras e fórmulas: quando/quem/onde/quem acessa/por quanto tempo/como descartar.\n- Exceções: a política deve prever pedidos de acesso e incidentes.\n- Palavras-chave: gravação, finalidade, retenção, acesso, gestão documental.\n- Checklist de domínio: (1) Defino os itens? (2) Justifico a finalidade? (3) Enumer o que é capturado? (4) Indico retenção e acesso?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais itens compõem a política? (2) Por que gravar só quando necessário? (3) O que a gravação pode capturar? (4) A que normas a retenção se alinha? (5) Permitir gravar equivale a autorizar?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quais elementos uma política de gravação deve conter?",
                    "resposta": "Finalidade, autorização, armazenamento, acesso, retenção, exclusão e proteção (criptografia)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma reunião gravada contém dados pessoais. O que fazer?",
                    "resposta": "Obter consentimento/base legal, definir finalidade e prazo, proteger armazenamento e garantir direitos dos titulares (acesso/exclusão)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Gravações podem ser compartilhadas livremente.'",
                    "correcao": "Errado. Gravações podem conter dados pessoais e informações sensíveis; compartilhamento deve seguir política."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Política de gravação deve definir prazo de retenção.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual elemento NÃO é essencial em política de gravação? A) Prazo de retenção; B) Criptografia; C) Número de participantes; D) Consentimento.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender políticas de gravação em contexto institucional, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t3-s2",
                "titulo": "Consentimento e bases legais (LGPD)",
                "objetivoAprendizagem": "Aluno compreenderá consentimento e bases legais para gravação.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que a LGPD exige ao tratar dados pessoais; (b) o que é base legal; (c) consentimento livre, informado e inequívoco; (d) limites entre lei e prática. POR QUE O CONHECIMENTO É IMPORTANTE: gravar reuniões é tratamento de dados; sem base legal, há irregularidade. PRÉ-REQUISITOS: unidade 4.3 (política de gravação); noção de proteção de dados. OBJETIVOS OBSERVÁVEIS: (1) explicar que o tratamento exige base legal; (2) citar bases legais; (3) definir consentimento; (4) situar a LGPD no contexto público. COMPETÊNCIAS DESENVOLVIDAS: análise de conformidade; proteção de dados. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.3 (retenção); unidade 5.3 (incidentes); Módulo 4 (LGPD). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a LGPD (Lei nº 13.709/2018, verificada nas referências do projeto) estabelece que o tratamento de dados pessoais exige uma base legal. Entre as bases estão o consentimento, a execução de contrato, o cumprimento de obrigação legal, a proteção da vida, o exercício regular de direitos e o legítimo interesse (com os limites próprios). Gravar uma reunião que contenha dados pessoais configura tratamento: é preciso finalidade, base legal e informação ao titular. O consentimento, quando adotado, deve ser livre, informado e inequívoco — o titular precisa saber o que será gravado, para quê e por quanto tempo. No serviço público, somam-se as normas de gestão documental e a lógica de transparência (Lei nº 12.527/2011), mas transparência não autoriza expor dados pessoais indiscriminadamente. A análise é casuística: a mesma reunião pode exigir bases diferentes conforme o conteúdo. Não se deve inventar dispositivos: cita-se a lei e seus conceitos, conferindo-se a redação vigente em fonte oficial.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que dados pessoais só se tratam com base legal.\n- Nível intermediário: identificar a base legal aplicável a uma gravação concreta.\n- Nível avançado: distinguir consentimento das demais bases e seus efeitos.\n- Nível especialista: analisar um caso controvertido conciliando finalidade, necessidade e direitos do titular.\nCOMPARAÇÕES CRÍTICAS:\n- consentimento x obrigação legal: no primeiro, o titular pode revogar; na segunda, a base prescinde do consentimento — a distinção altera a análise.\n- LGPD x LAI: uma protege dados pessoais; a outra garante acesso à informação pública — precisam ser conciliadas, não opostas.\n- dado pessoal x dado anonimizado: o anonimizado, quando de fato irreversível, sai do escopo; pseudonimizado ainda é pessoal.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Basta avisar que está gravando para estar em conformidade.\" — Motivo: o aviso informa, mas é preciso base legal — Versão tecnicamente correta: definir e documentar a base legal.\n- Afirmação errada: \"Consentimento é a única base legal.\" — Motivo: há outras bases — Versão tecnicamente correta: identificar a base aplicável ao caso.\n- Afirmação errada: \"Transparência obriga a divulgar toda gravação.\" — Motivo: protege-se dados pessoais — Versão tecnicamente correta: conciliar LAI e LGPD.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: LGPD, base legal, consentimento, finalidade, titular, anonimização.\n- Regras e fórmulas: tratamento de dado pessoal exige base legal + finalidade.\n- Exceções: transparência não afasta a proteção de dados.\n- Palavras-chave: LGPD, base legal, consentimento, finalidade, LAI.\n- Checklist de domínio: (1) Explico a exigência de base legal? (2) Cito bases? (3) Defino consentimento? (4) Situo a LGPD no público?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que a LGPD exige para tratar dados? (2) Cite três bases legais. (3) O que é consentimento inequívoco? (4) Como conciliar LAI e LGPD? (5) Por que o aviso não basta?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O que é base legal na LGPD?",
                    "resposta": "Fundamento jurídico que autoriza o tratamento de dados pessoais (ex.: consentimento, execução de contrato, obrigação legal)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como obter consentimento para gravação?",
                    "resposta": "Informar claramente sobre gravação, finalidade e uso; obter manifestação livre e inequívoca (ex.: aceite explícito); registrar."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Gravação sempre exige consentimento explícito.'",
                    "correcao": "Depende da base legal aplicável; em alguns casos a obrigação legal ou execução de contrato pode fundamentar. Verificar caso a caso."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A LGPD exige base legal para tratamento de dados pessoais.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual lei trata de proteção de dados pessoais no Brasil? A) Lei 12.527/2011; B) Lei 13.709/2018; C) Lei 14.129/2021; D) Lei 12.965/2014.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender consentimento e bases legais para gravação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t3-s3",
                "titulo": "Retenção, descarte e proteção de gravações",
                "objetivoAprendizagem": "Aluno compreenderá retenção e descarte de gravações.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é retenção de gravações; (b) o que é descarte seguro; (c) como proteger gravações; (d) alinhamento com gestão documental. POR QUE O CONHECIMENTO É IMPORTANTE: guardar demais ou descartar mal gera risco jurídico e de vazamento; a prova cobra os princípios de retenção e proteção. PRÉ-REQUISITOS: unidade 4.3 (consentimento e LGPD). OBJETIVOS OBSERVÁVEIS: (1) definir retenção; (2) explicar descarte seguro; (3) citar medidas de proteção; (4) relacionar com tabela de temporalidade. COMPETÊNCIAS DESENVOLVIDAS: gestão do ciclo de vida da informação; proteção de dados. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.3 (política); Módulo 4 (backup e segurança). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: retenção é o período durante o qual uma gravação é mantida, definido por norma de gestão documental e pela LGPD (Lei nº 13.709/2018, verificada). O princípio da minimização orienta a não manter além do necessário; entretanto, obrigações de guarda podem exigir certo prazo. Descarte seguro significa eliminar a gravação de forma que não seja recuperável — não basta apagar a referência ou mover para a lixeira. Proteção inclui criptografia em repouso e em trânsito, controle de acesso por perfil, registro de auditoria (logs) de quem acessou e backups seguros. Em serviço público, a retenção deve observar a tabela de temporalidade documental, que define prazos de guarda e destinação. As características específicas de armazenamento (criptografia, retenção automática, marca d'água) dependem da plataforma e do plano, devendo ser conferidas na documentação oficial. Sem ciclo de vida definido, a informação se acumula indefinidamente, ampliando a superfície de vazamento.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que a gravação tem prazo de vida.\n- Nível intermediário: distinguir retenção de descarte e aplicar criptografia.\n- Nível avançado: alinhar a retenção à tabela de temporalidade.\n- Nível especialista: desenhar o ciclo de vida completo (criação, uso, retenção, descarte) de gravações institucionais.\nCOMPARAÇÕES CRÍTICAS:\n- retenção x descarte: reter preserva; descartar elimina — ambos precisam de regra, não de improviso.\n- apagar a referência x descarte seguro: o primeiro é reversível; o segundo é irreversível — muda a proteção.\n- logs x conteúdo: os logs registram acesso; o conteúdo é o dado — ambos se protegem.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Mover para a lixeira é descarte seguro.\" — Motivo: permanece recuperável — Versão tecnicamente correta: aplicar eliminação segura.\n- Afirmação errada: \"Quanto mais tempo guardar, melhor.\" — Motivo: contraria a minimização — Versão tecnicamente correta: seguir o prazo definido.\n- Afirmação errada: \"Criptografia resolve todo o risco.\" — Motivo: acesso e chaves também importam — Versão tecnicamente correta: combinar criptografia, acesso e auditoria.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: retenção, descarte seguro, criptografia, controle de acesso, auditoria, temporalidade.\n- Regras e fórmulas: criação → uso → retenção (prazo) → descarte seguro.\n- Exceções: obrigação de guarda pode exigir retenção maior.\n- Palavras-chave: ciclo de vida, retenção, descarte, criptografia, log.\n- Checklist de domínio: (1) Defino retenção? (2) Explico descarte seguro? (3) Cito proteção? (4) Relaciono com temporalidade?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é retenção? (2) Por que apagar a referência não é seguro? (3) Cite duas medidas de proteção. (4) A que instrumento a retenção pública se alinha? (5) O que é minimização?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que definir prazo de retenção?",
                    "resposta": "Evita manter dados além do necessário, reduz risco e custo, e atende LGPD e normas de gestão documental."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como descartar uma gravação com dados pessoais?",
                    "resposta": "Exclusão segura (sobrescrita/cripto-shredding), registro de descarte e verificação de backups."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Apagar o link da gravação é suficiente.'",
                    "correcao": "Errado. É necessário excluir o arquivo e verificar backups; caso contrário os dados permanecem."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Criptografia protege gravações em repouso.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática é inadequada? A) Definir prazo de retenção; B) Criptografar gravações; C) Manter gravações indefinidamente; D) Controlar acesso.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender retenção e descarte de gravações, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-3-unidade-5",
        "titulo": "3.5 Estudos de caso: reuniões inseguras e exposição acidental de dados",
        "topicos": [
          {
            "id": "modulo-3-unidade-5-topico-1",
            "titulo": "Reuniões inseguras: casos e vetores de risco",
            "subtopicos": [
              {
                "id": "m3-u5-t1-s1",
                "titulo": "Zoombombing e intrusão em reuniões",
                "objetivoAprendizagem": "Aluno analisará casos de intrusão em reuniões online.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é intrusão em reuniões (zoombombing); (b) os vetores de entrada; (c) as mitigações; (d) como responder a um incidente. POR QUE O CONHECIMENTO É IMPORTANTE: reuniões invadidas causam dano à imagem e vazamento; a prova cobra causas e controles. PRÉ-REQUISITOS: unidade 4.1 (lobby, moderação e autenticação). OBJETIVOS OBSERVÁVEIS: (1) definir intrusão em reunião; (2) citar vetores; (3) aplicar mitigações; (4) executar contenção. COMPETÊNCIAS DESENVOLVIDAS: prevenção e resposta a incidentes de reunião. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (controles); unidade 5.3 (resposta a incidentes); Módulo 4 (segurança). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: zoombombing é a entrada de pessoas não autorizadas em uma reunião online para exibir conteúdo ofensivo, interromper ou coletar informação. Os vetores típicos são: link da reunião publicado em redes sociais ou canais abertos; ausência de senha; lobby desativado; configurações permissivas (qualquer um compartilha tela, entra antes do anfitrião); e reuniões recorrentes com endereço fixo e divulgado. As mitigações combinam: senha; lobby (sala de espera); login obrigatório; restrição do compartilhamento de tela ao anfitrião; impedir que participantes entrem antes do anfitrião; bloqueio da reunião após o início; e monitoramento ativo por coanfitriões. Diante de uma intrusão, a contenção envolve remover o intruso, bloquear novas entradas, eventualmente encerrar e recriar a reunião com link novo, e registrar o ocorrido. Em contexto institucional, o incidente deve ser documentado e, se houver vazamento de dados, comunicado conforme a política e a LGPD. Caso ilustrativo hipotético: reunião pública sem senha e sem lobby foi invadida por desconhecidos que compartilharam conteúdo ofensivo; a causa foi o link divulgado sem controles de acesso.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender por que reuniões abertas são alvo.\n- Nível intermediário: associar vetor e mitigação correspondente.\n- Nível avançado: configurar uma reunião resiliente a link divulgado.\n- Nível especialista: conduzir a contenção e o registro de um incidente de intrusão.\nCOMPARAÇÕES CRÍTICAS:\n- reunião aberta x reunião com lobby: a primeira aceita qualquer pessoa com o link; a segunda exige aprovação — muda o risco.\n- compartilhar para todos x restrito ao anfitrião: a primeira permite abuso da tela; a segunda o bloqueia.\n- prevenir x remediar: a prevenção reduz a chance; a remediação limita o dano — ambas são necessárias.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Só reuniões públicas são invadidas.\" — Motivo: links internos também vazam — Versão tecnicamente correta: aplicar controles em todas.\n- Afirmação errada: \"Expulsar o intruso encerra o incidente.\" — Motivo: pode haver registro/coleta — Versão tecnicamente correta: documentar e avaliar impacto.\n- Afirmação errada: \"A senha sozinha impede a invasão.\" — Motivo: a senha vaza com o link — Versão tecnicamente correta: combinar senha e lobby.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: zoombombing, vetor, senha, lobby, login, contenção, registro.\n- Regras e fórmulas: link divulgado sem controle = risco; senha + lobby + restrição de tela = mitigação.\n- Exceções: reuniões internas também podem ser alvo.\n- Palavras-chave: intrusão, link, lobby, remoção, incidente.\n- Checklist de domínio: (1) Defino intrusão? (2) Cito vetores? (3) Aplico mitigações? (4) Executo contenção?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é zoombombing? (2) Cite dois vetores. (3) Cite três mitigações. (4) O que fazer diante de uma invasão? (5) Por que registrar o incidente?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O que é zoombombing?",
                    "resposta": "Intrusão não autorizada em reunião online, geralmente para compartilhar conteúdo ofensivo ou perturbar."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como prevenir zoombombing?",
                    "resposta": "Não publicar links publicamente; usar senha e lobby; exigir login; restringir compartilhamento de tela; monitorar participantes."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Reuniões internas não precisam de senha.'",
                    "correcao": "Depende do risco e da política; reuniões com dados sensíveis devem ter controles mesmo internas."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Publicar link de reunião em rede social aumenta risco de intrusão.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual controle mitiga zoombombing? A) Link público; B) Lobby + senha; C) Chat aberto; D) Compartilhamento livre.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de analisar casos de intrusão em reuniões online, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t1-s2",
                "titulo": "Compartilhamento acidental de tela",
                "objetivoAprendizagem": "Aluno analisará casos de exposição acidental via compartilhamento de tela.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) como a tela expõe dados sem intenção; (b) os casos típicos; (c) as mitigações; (d) o padrão de prevenção. POR QUE O CONHECIMENTO É IMPORTANTE: exposição acidental é causa frequente de incidente; a prova cobra causas e prevenção. PRÉ-REQUISITOS: unidade 4.2 (compartilhamento de tela). OBJETIVOS OBSERVÁVEIS: (1) explicar como a exposição ocorre; (2) citar casos; (3) aplicar mitigações; (4) adotar rotina de prevenção. COMPETÊNCIAS DESENVOLVIDAS: prevenção de vazamento; condução segura. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.2 (controles); unidade 5.1 (gravação); Módulo 4 (DLP). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a exposição acidental ocorre quando o compartilhamento de tela revela informação que não se pretendia mostrar. Casos típicos: compartilhar a tela inteira e uma notificação de mensagem exibir dado pessoal; manter abas com documentos confidenciais visíveis; mostrar uma janela de planilha com dados de terceiros; revelar o histórico de navegação ou a área de trabalho com arquivos sensíveis. A causa raiz costuma ser a combinação de notificações ativas com o compartilhamento de tela inteira. As mitigações são procedimentais e simples: compartilhar apenas a janela ou o aplicativo específico; ativar o modo \"não perturbe\" ou desativar notificações; fechar abas e programas sensíveis antes; revisar o que está visível; e encerrar o compartilhamento ao terminar. Em ambiente institucional, separar contas (uma de trabalho, usada nas reuniões) reduz a chance de aparecer conteúdo pessoal. Caso ilustrativo hipotético: durante a reunião, uma notificação exibiu mensagem com dado de cliente; a causa foi o compartilhamento de tela inteira com notificações ativas.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: perceber que a tela mostra mais do que se pretende.\n- Nível intermediário: identificar as causas da exposição acidental.\n- Nível avançado: estabelecer uma rotina pré-compartilhamento.\n- Nível especialista: revisar um incidente e propor controles técnicos e procedimentais.\nCOMPARAÇÕES CRÍTICAS:\n- exposição intencional x acidental: a primeira é deliberada; a segunda decorre de falta de controle — a prevenção difere.\n- compartilhar aplicativo x tela inteira: o primeiro reduz a superfície; a segunda a amplia.\n- notificações x modo não perturbe: as notificações são a causa; o modo as elimina.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Compartilhar só a tela do aplicativo em uso é o mais seguro.\" — Motivo: ainda pode exibir janelas sobrepostas — Versão tecnicamente correta: compartilhar a janela específica.\n- Afirmação errada: \"Fechar a aba sensível resolve tudo.\" — Motivo: notificações e outros programas podem vazar — Versão tecnicamente correta: silenciar notificações e revisar a tela.\n- Afirmação errada: \"O vazamento acidental não tem consequência.\" — Motivo: pode configurar incidente de dados pessoais — Versão tecnicamente correta: tratar e registrar conforme a política.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: exposição acidental, notificação, tela inteira, janela específica, não perturbe.\n- Regras e fórmulas: janela específica + notificações off + revisão = prevenção.\n- Exceções: contas separadas reduzem exposição pessoal.\n- Palavras-chave: vazamento, notificação, aba, tela, revisão.\n- Checklist de domínio: (1) Explico como ocorre? (2) Cito casos? (3) Aplico mitigações? (4) Adoto rotina?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como ocorre a exposição acidental? (2) Qual a causa raiz típica? (3) Cite três mitigações. (4) Por que separar contas? (5) Exposição acidental tem consequência?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Como ocorre exposição acidental por notificação?",
                    "resposta": "Ao compartilhar tela inteira, notificações pop-up exibem conteúdo para todos os participantes."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Quais passos antes de compartilhar tela?",
                    "resposta": "Fechar abas sensíveis, desativar notificações, compartilhar apenas janela necessária, verificar com participantes."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Notificações não aparecem para quem vê a tela compartilhada.'",
                    "correcao": "Errado. Notificações aparecem na tela compartilhada se estiverem ativas."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Compartilhar janela específica reduz exposição acidental.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática reduz risco de exposição por notificação? A) Deixar notificações ativas; B) Modo 'não perturbe'; C) Compartilhar tela inteira; D) Não verificar abas.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de analisar casos de exposição acidental via compartilhamento de tela, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t1-s3",
                "titulo": "Gravação não autorizada e vazamento",
                "objetivoAprendizagem": "Aluno analisará riscos de gravação não autorizada.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o risco da gravação não autorizada; (b) os cenários de vazamento; (c) as mitigações; (d) a resposta ao incidente. POR QUE O CONHECIMENTO É IMPORTANTE: gravar ou distribuir reunião sem consentimento expõe dados e gera responsabilização. PRÉ-REQUISITOS: unidade 4.3 (gravação e consentimento). OBJETIVOS OBSERVÁVEIS: (1) reconhecer cenários de gravação não autorizada; (2) explicar os riscos; (3) aplicar mitigações; (4) responder ao vazamento. COMPETÊNCIAS DESENVOLVIDAS: proteção de informação; resposta a incidentes. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.3 (retenção); unidade 5.3 (resposta); Módulo 4 (LGPD). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a gravação não autorizada ocorre quando alguém registra a reunião — pela própria plataforma ou por captura de tela/áudio externa — sem o conhecimento ou a concordância dos participantes, e depois distribui o conteúdo. Os cenários incluem: participante grava e compartilha; anfitrião grava sem informar; e gravação legítima armazenada em local inseguro e posteriormente vazada. Os riscos são a exposição de dados pessoais, a quebra de confidencialidade e a responsabilização. As mitigações: informar e obter consentimento quando aplicável; restringir a gravação ao anfitrião; usar marca d'água de identificação (quando disponível); monitorar; e manter política clara de gravação e retenção. A captura externa (por software de terceiros na máquina do participante) é difícil de impedir tecnicamente, o que reforça a importância do consentimento e do comportamento — por isso reuniões com informação muito sensível devem evitar a exposição do conteúdo ou usar controles adicionais. Caso ilustrativo hipotético: gravação de reunião com dados de clientes foi distribuída em grupo de mensagens; a causa foi a ausência de política e de controle de acesso ao arquivo.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que gravar sem avisar é problema.\n- Nível intermediário: distinguir gravação pela plataforma de captura externa.\n- Nível avançado: reduzir a exposição mesmo quando a captura não pode ser impedida.\n- Nível especialista: responder a um vazamento de gravação com contenção, avaliação e comunicação.\nCOMPARAÇÕES CRÍTICAS:\n- gravação autorizada x não autorizada: a primeira tem base e aviso; a segunda viola confiança e, possivelmente, a lei.\n- gravação pela plataforma x captura externa: a primeira pode ser restringida e registrada; a segunda é quase indetectável.\n- conter x divulgar: a contenção limita o dano; a comunicação segue a política e a lei.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Só o anfitrião pode gravar, então não há risco.\" — Motivo: há captura externa — Versão tecnicamente correta: combinar controles e consentimento.\n- Afirmação errada: \"Gravar sem avisar é aceitável se a reunião for interna.\" — Motivo: dados pessoais exigem base legal — Versão tecnicamente correta: informar e observar a política.\n- Afirmação errada: \"Arquivo em pasta compartilhada é seguro.\" — Motivo: pode vazar — Versão tecnicamente correta: restringir acesso e proteger.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: gravação não autorizada, captura externa, consentimento, marca d'água, vazamento.\n- Regras e fórmulas: restringir gravação + informar + proteger o arquivo = mitigação.\n- Exceções: a captura externa é difícil de impedir tecnicamente.\n- Palavras-chave: gravação, consentimento, vazamento, acesso, política.\n- Checklist de domínio: (1) Reconheço cenários? (2) Explico riscos? (3) Aplico mitigações? (4) Respondo ao vazamento?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite dois cenários de gravação não autorizada. (2) Por que a captura externa preocupa? (3) Cite três mitigações. (4) Como proteger o arquivo? (5) O que fazer diante de um vazamento?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quem pode gravar uma reunião?",
                    "resposta": "Depende da plataforma/plano; geralmente anfitrião e coanfitriões autorizados. Participantes podem gravar localmente sem consentimento, o que é risco."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como reduzir gravação não autorizada?",
                    "resposta": "Informar política, obter consentimento, restringir gravação, usar marca d'água e monitorar compartilhamento."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Participantes não podem gravar reuniões.'",
                    "correcao": "Errado. Participantes podem gravar localmente (tela/áudio) sem que a plataforma impeça; por isso política e consentimento são essenciais."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Política clara de gravação reduz risco de vazamento.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática NÃO reduz risco de gravação não autorizada? A) Informar participantes; B) Obter consentimento; C) Permitir gravação livre; D) Restringir gravação ao anfitrião.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de analisar riscos de gravação não autorizada, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-5-topico-2",
            "titulo": "Exposição acidental de dados em comunicação",
            "subtopicos": [
              {
                "id": "m3-u5-t2-s1",
                "titulo": "Exposição por e-mail (CC/BCC, anexos, encaminhamento)",
                "objetivoAprendizagem": "Aluno analisará casos de exposição acidental por e-mail.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) como o e-mail expõe dados; (b) os casos típicos; (c) as mitigações; (d) o papel de DLP. POR QUE O CONHECIMENTO É IMPORTANTE: o e-mail é o canal mais usado e um dos mais sujeitos a erro humano; a prova cobra causas e prevenção de exposição. PRÉ-REQUISITOS: unidade 1.1 (cabeçalhos, Cc/Bcc). OBJETIVOS OBSERVÁVEIS: (1) citar formas de exposição; (2) explicar o risco de Cc x Bcc; (3) aplicar mitigações; (4) situar o DLP. COMPETÊNCIAS DESENVOLVIDAS: manuseio seguro de e-mail; prevenção de vazamento. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.1 (campos); unidade 1.2 (phishing); Módulo 4 (DLP). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o e-mail expõe dados quando a lista de destinatários, o histórico ou o anexo revelam informação. Casos típicos: colocar uma lista de clientes em Cc em vez de Bcc, expondo todos os endereços; encaminhar uma mensagem sem remover o histórico com dados sensíveis; anexar o arquivo errado (uma versão com dados pessoais); e usar \"responder a todos\", expondo a informação a quem não deveria recebê-la. As mitigações: revisar os destinatários antes de enviar; usar Bcc para listas; conferir o anexo correto; limpar o histórico ao encaminhar; e, quando disponível, empregar recursos de prevenção de perda de dados (DLP), que detectam e bloqueiam o envio de conteúdo sensível. Em contexto institucional, dado pessoal enviado a destinatário indevido configura incidente e deve ser tratado conforme a política e a LGPD. Caso ilustrativo hipotético: uma planilha com dados pessoais foi enviada a uma lista em Cc por engano, expondo os endereços e o conteúdo a todos os destinatários.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o campo errado expõe a lista.\n- Nível intermediário: aplicar Bcc e revisar anexos.\n- Nível avançado: usar DLP e limpar histórico ao encaminhar.\n- Nível especialista: responder a um incidente de envio indevido com contenção e comunicação.\nCOMPARAÇÕES CRÍTICAS:\n- Cc x Bcc: o Cc revela os endereços; o Bcc os oculta — a escolha expõe ou protege.\n- encaminhar x responder: o encaminhamento leva o histórico; a resposta mantém a thread — ambos exigem revisão.\n- aviso manual x DLP: o primeiro depende da atenção; o segundo automatiza a detecção.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Usar Cc é aceitável para listas internas.\" — Motivo: expõe endereços — Versão tecnicamente correta: usar Bcc.\n- Afirmação errada: \"O anexo certo está sempre selecionado.\" — Motivo: erros de arquivo são frequentes — Versão tecnicamente correta: conferir antes de enviar.\n- Afirmação errada: \"Encaminhar não expõe histórico.\" — Motivo: leva o conteúdo anterior — Versão tecnicamente correta: limpar o histórico quando necessário.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: Cc, Bcc, anexo, histórico, responder a todos, DLP.\n- Regras e fórmulas: revisar destinatários + Bcc + anexo conferido = envio seguro.\n- Exceções: o DLP depende de configuração e disponibilidade.\n- Palavras-chave: exposição, lista, anexo, histórico, DLP.\n- Checklist de domínio: (1) Cito formas de exposição? (2) Explico Cc x Bcc? (3) Aplico mitigações? (4) Situo o DLP?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite três formas de exposição por e-mail. (2) Por que Cc expõe? (3) O que revisar antes de enviar? (4) Para que serve o DLP? (5) Encaminhar exige cuidado?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual o risco de usar Cc em lista grande?",
                    "resposta": "Expõe todos os endereços de e-mail aos demais, violando privacidade e podendo facilitar spam/phishing."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como evitar anexo errado?",
                    "resposta": "Verificar nome e conteúdo do anexo antes de enviar; usar nomenclatura clara; revisar; considerar DLP."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Encaminhar e-mail mantém apenas o necessário.'",
                    "correcao": "Errado. Encaminhamento pode incluir histórico e anexos sensíveis; revisar e limpar antes."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Bcc protege a privacidade de destinatários em listas grandes.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática reduz exposição por e-mail? A) Usar Cc em listas grandes; B) Revisar destinatários e anexos; C) Encaminhar histórico completo; D) Não verificar anexo.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de analisar casos de exposição acidental por e-mail, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t2-s2",
                "titulo": "Exposição em calendários e convites",
                "objetivoAprendizagem": "Aluno analisará casos de exposição acidental em calendários.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) como calendários e convites expõem dados; (b) os casos típicos; (c) as mitigações; (d) o princípio do menor privilégio. POR QUE O CONHECIMENTO É IMPORTANTE: convites frequentemente carregam dados e links sensíveis; a prova cobra a exposição em calendário. PRÉ-REQUISITOS: unidade 2.1 (calendários e convites). OBJETIVOS OBSERVÁVEIS: (1) citar formas de exposição; (2) explicar permissões excessivas; (3) aplicar mitigações; (4) minimizar dados no convite. COMPETÊNCIAS DESENVOLVIDAS: configuração segura de calendário; proteção de informação. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.1 (convites); unidade 5.1 (intrusão); Módulo 4 (menor privilégio). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: calendários e convites podem expor informação de diversas formas: detalhes sensíveis na descrição do evento visíveis a todos os convidados; compartilhamento público do calendário; convite contendo link de reunião aberto; e permissões excessivas, como conceder edição a todos. As mitigações: minimizar dados sensíveis na descrição (evitar incluir dados pessoais, senhas ou informação estratégica); restringir as permissões ao necessário; manter calendários sensíveis como privados ou compartilhados apenas com pessoas específicas; revisar a lista de convidados; e nunca incluir senhas no corpo do convite. O link de reunião no convite é um vetor: se o evento for público ou o convite for encaminhado, o link circula — por isso o controle de acesso da reunião (lobby, senha, login) importa. Em contexto institucional, um calendário público que revela agendas individuais pode ferir a privacidade; a prática é tratar a agenda conforme a sensibilidade do conteúdo e observar a proteção de dados.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: perceber que o evento pode ser visto por quem não se pretende.\n- Nível intermediário: aplicar permissões mínimas e revisar convidados.\n- Nível avançado: conciliar utilidade do calendário compartilhado com privacidade.\n- Nível especialista: revisar a configuração de agendas de uma equipe e eliminar exposições.\nCOMPARAÇÕES CRÍTICAS:\n- calendário público x privado: o primeiro expõe título, horário e descrição; o segundo restringe — muda a privacidade.\n- editor x somente leitura: o editor altera/cancela; a leitura só consulta — a permissão excessiva é risco.\n- link no convite x link controlado: o primeiro circula com o convite; o segundo é protegido por lobby/senha.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Descrição do evento é invisível aos convidados.\" — Motivo: é visível — Versão tecnicamente correta: minimizar dados sensíveis.\n- Afirmação errada: \"Compartilhar o calendário com edição facilita e não custa nada.\" — Motivo: permite alteração indevida — Versão tecnicamente correta: conceder o mínimo necessário.\n- Afirmação errada: \"Convite é canal seguro para enviar senha.\" — Motivo: o convite circula — Versão tecnicamente correta: não incluir senhas.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: calendário, convite, descrição, permissão, link, privacidade.\n- Regras e fórmulas: minimizar dados + permissão mínima + revisar convidados.\n- Exceções: agendas públicas exigem análise de sensibilidade.\n- Palavras-chave: evento, descrição, permissão, link, privacidade.\n- Checklist de domínio: (1) Cito formas de exposição? (2) Explico permissões? (3) Aplico mitigações? (4) Minimizo dados?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite três formas de exposição em calendário. (2) Por que a descrição importa? (3) Como o link do convite vira risco? (4) Que permissão conceder? (5) Por que não incluir senha?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quais dados evitar em descrição de evento?",
                    "resposta": "Senhas, dados pessoais, informações confidenciais; use referência a documento seguro."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como compartilhar calendário com segurança?",
                    "resposta": "Restringir permissões (visualização), evitar compartilhamento público, revisar convidados."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Calendário público não expõe informações.'",
                    "correcao": "Errado. Calendário público pode expor agenda, participantes e detalhes; evite em contextos sensíveis."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Incluir senha de reunião no convite é arriscado.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática é inadequada em convites? A) Minimizar dados sensíveis; B) Restringir permissões; C) Incluir senha no convite; D) Revisar convidados.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de analisar casos de exposição acidental em calendários, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t2-s3",
                "titulo": "Exposição em plataformas de colaboração",
                "objetivoAprendizagem": "Aluno analisará casos de exposição em plataformas de colaboração.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) como plataformas de colaboração expõem dados; (b) os casos típicos; (c) as mitigações; (d) a condicionalidade das configurações. POR QUE O CONHECIMENTO É IMPORTANTE: links permissivos e canais abertos são vetores comuns de vazamento; a prova cobra causas e controles. PRÉ-REQUISITOS: unidade 4.2 (coautoria); noção de permissão de documento. OBJETIVOS OBSERVÁVEIS: (1) citar formas de exposição; (2) explicar links permissivos; (3) aplicar mitigações; (4) revisar acessos de ex-colaboradores. COMPETÊNCIAS DESENVOLVIDAS: gestão de permissões; prevenção de vazamento. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.2 (documentos); unidade 5.2 (e-mail); Módulo 4 (controle de acesso). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: plataformas de colaboração — repositórios de arquivos, wikis, canais de equipe — expõem dados quando as permissões são amplas demais ou o compartilhamento externo está liberado. Casos típicos: compartilhar um documento com \"qualquer pessoa com o link pode editar\"; manter um canal público com dados sensíveis; gerar notificação de conteúdo sensível em canal aberto; e deixar o histórico acessível a ex-colaboradores que deveriam ter o acesso revogado. As mitigações: revisar permissões periodicamente; usar grupos e equipes restritos em vez de canais abertos; remover o acesso de ex-colaboradores; desativar o compartilhamento externo quando não for necessário; e empregar recursos de prevenção de perda de dados quando disponíveis. As características específicas (tipos de link, escopo de compartilhamento, retenção de histórico) variam por plataforma e plano, devendo ser confirmadas na documentação oficial. O princípio estável é o do menor privilégio: conceder o acesso mínimo necessário e revogá-lo quando deixar de ser necessário.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: perceber que \"qualquer pessoa com o link\" amplia o acesso.\n- Nível intermediário: distinguir canal público de restrito e revisar permissões.\n- Nível avançado: revogar acessos e desativar compartilhamento externo.\n- Nível especialista: auditar o compartilhamento de uma organização e corrigir exposições.\nCOMPARAÇÕES CRÍTICAS:\n- link público x acesso restrito: o primeiro dispensa autenticação; o segundo exige — muda o risco.\n- canal público x equipe restrita: o primeiro é visível a muitos; a segunda limita o público.\n- permissão ativa x acesso residual: revogar o acesso ao sair é tão importante quanto conceder.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Compartilhar por link é conveniente e seguro.\" — Motivo: o link pode vazar — Versão tecnicamente correta: restringir a pessoas ou grupos.\n- Afirmação errada: \"Ex-colaborador perde o acesso automaticamente.\" — Motivo: nem sempre — Versão tecnicamente correta: revogar explicitamente.\n- Afirmação errada: \"Canal privado é impossível de vazar.\" — Motivo: membros podem copiar/compartilhar — Versão tecnicamente correta: combinar controle e conscientização.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: permissão, link público, canal, compartilhamento externo, revogação, menor privilégio.\n- Regras e fórmulas: acesso mínimo + revisão periódica + revogação = controle.\n- Exceções: nomes e escopos variam por plataforma/plano.\n- Palavras-chave: link, permissão, canal, ex-colaborador, DLP.\n- Checklist de domínio: (1) Cito formas de exposição? (2) Explico links permissivos? (3) Aplico mitigações? (4) Reviso acessos?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite três formas de exposição em plataformas. (2) Por que \"qualquer pessoa com o link\" é risco? (3) O que revisar periodicamente? (4) Por que revogar acesso de ex-colaborador? (5) O que é menor privilégio?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual risco de 'qualquer pessoa com o link pode editar'?",
                    "resposta": "Qualquer pessoa com o link (inclusive externos) pode editar/excluir conteúdo, sem controle de identidade."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como proteger documento colaborativo sensível?",
                    "resposta": "Restringir a usuários autenticados da organização, definir permissões de visualização/edição, desativar compartilhamento externo, revisar acessos periodicamente."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Compartilhamento por link é sempre seguro.'",
                    "correcao": "Errado. Depende das permissões associadas ao link; 'qualquer pessoa com o link' é de alto risco."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Revisar permissões periodicamente reduz exposição.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual permissão é mais arriscada para documento sensível? A) Somente visualização para usuários autenticados; B) Edição para usuários autenticados; C) Qualquer pessoa com link pode editar; D) Sem compartilhamento.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de analisar casos de exposição em plataformas de colaboração, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-3-unidade-5-topico-3",
            "titulo": "Spam, phishing e falsificação de remetente em contexto de comunicação institucional",
            "subtopicos": [
              {
                "id": "m3-u5-t3-s1",
                "titulo": "Phishing direcionado a comunicação institucional",
                "objetivoAprendizagem": "Aluno analisará phishing no contexto de comunicação institucional.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é phishing direcionado à comunicação institucional; (b) seus sinais; (c) as mitigações; (d) a conduta do usuário. POR QUE O CONHECIMENTO É IMPORTANTE: e-mails que se passam por sistemas de reunião, TI ou liderança iludem o usuário; a prova cobra identificação e resposta. PRÉ-REQUISITOS: unidade 1.2 (spam, phishing e spoofing). OBJETIVOS OBSERVÁVEIS: (1) reconhecer o phishing institucional; (2) citar sinais; (3) aplicar mitigações; (4) orientar a conduta. COMPETÊNCIAS DESENVOLVIDAS: triagem defensiva; conscientização de segurança. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.2 (autenticação de e-mail); unidade 5.3 (resposta); Módulo 4 (ameaças). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o phishing direcionado à comunicação institucional explora a confiança em ferramentas do dia a dia: mensagens que se passam por sistemas de reunião ou calendário (por exemplo, \"sua reunião foi cancelada, clique para reagendar\"), por suporte de TI (redefinição de senha) ou por liderança (pedido urgente). O spear phishing é a versão personalizada, com nomes, cargos e contexto reais, tornando a mensagem verossímil. Sinais de alerta: senso de urgência; links cujo domínio real difere do exibido; anexos inesperados; erros de idioma ou de formatação; remetente incompatível com o conteúdo; e pedido de credenciais ou de ação fora do fluxo habitual. As mitigações: verificar o remetente e o domínio real (apoiando-se em SPF, DKIM e DMARC quando disponíveis); não clicar em links nem abrir anexos suspeitos; confirmar por canal alternativo antes de agir; reportar a mensagem; e usar autenticação multifator (MFA), que reduz o impacto mesmo se a credencial for exposta. Caso ilustrativo hipotético: uma mensagem falsa de \"cancelamento de reunião\" levou o usuário a uma página que imitava o login institucional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: desconfiar de urgência e de link desconhecido.\n- Nível intermediário: identificar sinais objetivos de fraude.\n- Nível avançado: verificar domínio e autenticação e confirmar por canal alternativo.\n- Nível especialista: analisar um caso com múltiplos indícios e decidir com segurança.\nCOMPARAÇÕES CRÍTICAS:\n- phishing genérico x spear phishing: o primeiro é massificado; o segundo é personalizado — este é mais difícil de detectar.\n- urgência real x urgência fabricada: a fabricada pressiona a agir sem verificar — sinal clássico de fraude.\n- MFA x senha isolada: o MFA limita o dano do vazamento — muda o impacto do incidente.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Se o nome exibido é de dentro da instituição, é confiável.\" — Motivo: o nome é falsificável — Versão tecnicamente correta: verificar o domínio real e a autenticação.\n- Afirmação errada: \"Basta ler o texto para decidir.\" — Motivo: a fraude é verossímil — Versão tecnicamente correta: confirmar por canal alternativo.\n- Afirmação errada: \"Reportar não muda nada.\" — Motivo: protege outros usuários — Versão tecnicamente correta: reportar e alertar.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: phishing institucional, spear phishing, urgência, domínio real, MFA, reporte.\n- Regras e fórmulas: desconfiar + verificar domínio + confirmar por outro canal = defesa.\n- Exceções: nenhum indício isolado é prova; avaliar o conjunto.\n- Palavras-chave: fraude, urgência, link, anexo, MFA.\n- Checklist de domínio: (1) Reconheço o phishing institucional? (2) Cito sinais? (3) Aplico mitigações? (4) Oriento a conduta?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que caracteriza o phishing institucional? (2) O que é spear phishing? (3) Cite três sinais. (4) Como confirmar antes de agir? (5) Por que o MFA ajuda?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Como identificar e-mail de phishing sobre reunião?",
                    "resposta": "Verificar remetente real, links (domínio), urgência artificial, solicitação de credenciais, anexos inesperados."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Recebeu e-mail 'sua conta será desativada, clique aqui'. O que fazer?",
                    "resposta": "Não clicar; verificar por canal oficial; reportar à equipe de segurança; alterar senha se suspeitar de comprometimento."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'E-mails de reunião são sempre seguros.'",
                    "correcao": "Errado. Phishing pode imitar convites de reunião; sempre verificar remetente e link."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Urgência artificial é sinal comum de phishing.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática mitiga phishing? A) Clicar em links para verificar; B) Verificar remetente e domínio; C) Responder com credenciais; D) Abrir anexos inesperados.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de analisar phishing no contexto de comunicação institucional, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t3-s2",
                "titulo": "Falsificação de remetente (spoofing) e autenticação de e-mail",
                "objetivoAprendizagem": "Aluno compreenderá spoofing e mecanismos de autenticação.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é spoofing; (b) o que fazem SPF, DKIM e DMARC; (c) os limites desses mecanismos; (d) como decidir diante de mensagem suspeita. POR QUE O CONHECIMENTO É IMPORTANTE: entender a autenticação de e-mail evita confiar no nome exibido; a prova cobra a função de cada mecanismo. PRÉ-REQUISITOS: unidade 1.2 (spam, phishing e spoofing). OBJETIVOS OBSERVÁVEIS: (1) definir spoofing; (2) explicar SPF, DKIM e DMARC; (3) reconhecer que não eliminam o phishing; (4) adotar verificação de contexto. COMPETÊNCIAS DESENVOLVIDAS: análise de autenticidade de mensagem; triagem defensiva. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.2 (phishing); unidade 5.3 (resposta); Módulo 2 (protocolos de correio). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: spoofing de remetente é a falsificação do campo From, fazendo a mensagem parecer vir de um remetente legítimo mesmo partindo de outra origem. Para combatê-lo há mecanismos de autenticação de domínio: o SPF publica quais servidores estão autorizados a enviar em nome do domínio; o DKIM assina criptograficamente a mensagem, permitindo verificar integridade e origem; o DMARC define a política a ser aplicada quando SPF/DKIM falham e gera relatórios. Esses mecanismos reduzem o spoofing direto, mas não eliminam o phishing: um atacante pode registrar domínios visualmente parecidos (typosquatting), comprometer uma conta legítima (que então passa na autenticação) ou usar texto e contexto convincentes. Por isso, a decisão segura combina a verificação técnica (o domínio real e o resultado da autenticação) com o bom senso (contexto, urgência, canal alternativo). No caso de uma conta comprometida, a mensagem é autenticada legitimamente e só a análise de contexto a distingue de um envio normal.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o remetente exibido pode ser falso.\n- Nível intermediário: explicar o papel de SPF, DKIM e DMARC.\n- Nível avançado: reconhecer cenários que escapam à autenticação (domínio parecido, conta comprometida).\n- Nível especialista: analisar um e-mail autenticado, mas suspeito, e decidir a conduta.\nCOMPARAÇÕES CRÍTICAS:\n- SPF x DKIM x DMARC: SPF valida a origem; DKIM valida a assinatura; DMARC define a política — são camadas distintas.\n- spoofing x conta comprometida: no primeiro o domínio é forjado; na segunda é legítimo — o DMARC só cobre o primeiro.\n- domínio exibido x domínio real: podem divergir; verifica-se o real.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Com DMARC, não há mais phishing.\" — Motivo: cobre spoofing direto — Versão tecnicamente correta: domínios parecidos e contas comprometidas escapam.\n- Afirmação errada: \"E-mail autenticado é sempre confiável.\" — Motivo: a conta pode estar comprometida — Versão tecnicamente correta: avaliar contexto e canal alternativo.\n- Afirmação errada: \"O nome exibido comprova a autenticação.\" — Motivo: o nome é falsificável — Versão tecnicamente correta: verificar o domínio real.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: spoofing, SPF, DKIM, DMARC, typosquatting, conta comprometida.\n- Regras e fórmulas: verificação técnica + análise de contexto = decisão segura.\n- Exceções: autenticação não cobre conta comprometida nem domínio parecido.\n- Palavras-chave: remetente, assinatura, política, domínio, contexto.\n- Checklist de domínio: (1) Defino spoofing? (2) Explico os três mecanismos? (3) Reconheço limites? (4) Verifico o contexto?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é spoofing? (2) Para que serve o SPF? (3) O que o DMARC decide? (4) Por que o phishing persiste? (5) Como reconhecer conta comprometida?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O que é spoofing de remetente?",
                    "resposta": "Falsificação do endereço 'From' para fazer o e-mail parecer de uma fonte confiável."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como SPF/DKIM/DMARC ajudam?",
                    "resposta": "SPF define servidores autorizados; DKIM assina o e-mail; DMARC define política para falhas e gera relatórios."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'DMARC elimina todo phishing.'",
                    "correcao": "Errado. DMARC reduz spoofing de domínio, mas phishing pode usar domínios parecidos ou contas comprometidas."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) DKIM usa assinatura digital para autenticar e-mails.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual mecanismo define política para falhas de autenticação? A) SPF; B) DKIM; C) DMARC; D) TLS.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender spoofing e mecanismos de autenticação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t3-s3",
                "titulo": "Boas práticas e resposta a incidentes de comunicação",
                "objetivoAprendizagem": "Aluno conhecerá boas práticas e resposta a incidentes de comunicação.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) boas práticas preventivas; (b) o que fazer diante de um incidente de comunicação; (c) obrigações institucionais; (d) limites do conhecimento. POR QUE O CONHECIMENTO É IMPORTANTE: saber responder a um incidente reduz o dano; a prova cobra a sequência de resposta e as boas práticas. PRÉ-REQUISITOS: unidade 5.3 (phishing, spoofing); unidade 5.1 (intrusão). OBJETIVOS OBSERVÁVEIS: (1) listar boas práticas; (2) descrever a resposta a incidente; (3) situar obrigações; (4) evitar inventar prazos. COMPETÊNCIAS DESENVOLVIDAS: prevenção e resposta a incidentes de comunicação. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.3 (autenticação); Módulo 4 (segurança e LGPD); Módulo 6 (responsabilização). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: as boas práticas de comunicação segura incluem: treinamento periódico dos usuários; simulações defensivas de phishing; uso de autenticação multifator (MFA); verificação de links e anexos antes de clicar ou abrir; reporte rápido de mensagens suspeitas; backup de comunicações críticas; e uma política de uso aceitável dos recursos. Diante de um incidente (conta comprometida, mensagem fraudulenta enviada, dado exposto), a resposta segue uma sequência: isolar a conta afetada (bloquear, encerrar sessões); alterar as credenciais; notificar as partes competentes; registrar e preservar evidências; avaliar o impacto (quais dados foram expostos); e revisar os controles para evitar recorrência. Em serviço público, somam-se deveres de proteção de dados (a LGPD trata de comunicação de incidentes) e normas de segurança da informação. Não se devem inventar prazos nem dispositivos: cita-se a lei e o conceito, conferindo-se a redação vigente e o procedimento interno aplicável. A prevenção reduz a frequência; a resposta bem executada reduz a gravidade.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer que existem boas práticas e resposta.\n- Nível intermediário: ordenar as ações de resposta a um incidente.\n- Nível avançado: avaliar o impacto e comunicar afetados conforme a política.\n- Nível especialista: conduzir a resposta completa e propor melhorias de controle.\nCOMPARAÇÕES CRÍTICAS:\n- prevenção x resposta: a primeira reduz a chance; a segunda reduz o dano — ambas são necessárias.\n- isolar x deletar: isolar preserva evidências; deletar as apaga — a ordem correta importa.\n- treinamento x ferramenta: o treinamento forma o usuário; a ferramenta apoia — não se substituem.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Ao suspeitar, apague tudo imediatamente.\" — Motivo: apaga evidências — Versão tecnicamente correta: isolar e preservar o registro.\n- Afirmação errada: \"Um filtro de spam dispensa treinamento.\" — Motivo: a fraude evolui — Versão tecnicamente correta: combinar ferramenta e conscientização.\n- Afirmação errada: \"Há um prazo único e conhecido para comunicar incidentes.\" — Motivo: depende da norma e do procedimento — Versão tecnicamente correta: seguir a política e a redação vigente, sem inventar prazos.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: treinamento, simulação, MFA, reporte, isolamento, comunicação de incidente.\n- Regras e fórmulas: isolar → alterar credenciais → notificar → registrar → avaliar → corrigir.\n- Exceções: prazos e dispositivos dependem da norma vigente e do procedimento interno.\n- Palavras-chave: prevenção, resposta, evidência, notificação, LGPD.\n- Checklist de domínio: (1) Listo boas práticas? (2) Descrevo a resposta? (3) Situo obrigações? (4) Evito inventar prazos?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite três boas práticas. (2) Qual a primeira ação diante de conta comprometida? (3) Por que não apagar evidências? (4) Que lei rege dados pessoais? (5) Por que não afirmar prazo único?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O que fazer ao suspeitar de conta comprometida?",
                    "resposta": "Alterar senha, revogar sessões, notificar equipe de segurança, verificar atividades recentes."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como preparar equipe contra phishing?",
                    "resposta": "Treinamento periódico, simulações defensivas, política clara de reporte e MFA obrigatório."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Treinamento único é suficiente.'",
                    "correcao": "Errado. Ameaças evoluem; treinamento deve ser contínuo e atualizado."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) MFA reduz risco de comprometimento de conta por phishing.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual ação inicial em incidente de comunicação? A) Ignorar; B) Isolar conta e alterar credenciais; C) Compartilhar senha; D) Apagar logs.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de conhecer boas práticas e resposta a incidentes de comunicação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      }
    ]
  }
};
