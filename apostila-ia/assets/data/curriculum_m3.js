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
                "conteudo": "SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para envio de e-mails. Opera na camada de aplicação (modelo OSI camada 7 / TCP/IP aplicação). Porta padrão: 25 (sem criptografia), 587 (submissão com STARTTLS), 465 (SMTPS com SSL/TLS implícito). O SMTP envia o e-mail do cliente para o servidor de e-mail do remetente, que então encaminha para o servidor do destinatário. O protocolo usa comandos textuais: HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT. O SMTP não criptografa por padrão — a segurança é adicionada via STARTTLS ou SMTPS.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá o funcionamento do SMTP para envio de e-mails, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u1-t1-s2",
                "titulo": "POP3 vs IMAP",
                "objetivoAprendizagem": "Aluno diferenciará POP3 e IMAP para recebimento de e-mails.",
                "conteudo": "POP3 (Post Office Protocol versão 3): baixa e-mails do servidor para o dispositivo local e, por padrão, apaga do servidor. Porta 110 (sem criptografia) ou 995 (SSL/TLS). Ideal para acesso offline em um único dispositivo. IMAP (Internet Message Access Protocol): mantém e-mails sincronizados no servidor e no cliente. Porta 143 (sem criptografia) ou 993 (SSL/TLS). Ideal para multi-dispositivo (celular, tablet, computador). IMAP permite criar pastas no servidor, buscar mensagens sem baixar, e manter cópia no servidor.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno diferenciará POP3 e IMAP para recebimento de e-mails, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u1-t1-s3",
                "titulo": "Cabeçalhos, destinatários, anexos, CC e BCC",
                "objetivoAprendizagem": "Aluno identificará os campos de um e-mail e suas funções.",
                "conteudo": "Cabeçalhos de e-mail: From (remetente), To (destinatário principal), Cc (Carbon Copy — destinatários secundários que veem os demais destinatários), Bcc (Blind Carbon Copy — destinatários ocultos; os demais não veem). Assunto (Subject) é o título do e-mail. Anexos são arquivos codificados em base64 e incluídos no corpo MIME. O cabeçalho 'Reply-To' define o endereço de resposta (pode ser diferente do remetente). O cabeçalho 'Message-ID' é um identificador único do e-mail.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno identificará os campos de um e-mail e suas funções, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Spam: e-mails não solicitados, geralmente comerciais ou maliciosos. Phishing: e-mails fraudulentos que se passam por entidades confiáveis (bancos, empresas) para roubar credenciais ou dados. Spear phishing: phishing direcionado a uma pessoa ou organização específica. Spoofing de remetente: falsificação do endereço 'From' para fazer o e-mail parecer legítimo. Técnicas de autenticação: SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), DMARC (Domain-based Message Authentication, Reporting & Conformance) — previnem spoofing verificando o servidor remetente.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno identificará spam, phishing e falsificação de remetente, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Calendários digitais (Google Calendar, Outlook Calendar) permitem agendar eventos, convidar participantes e definir permissões. Convites de reunião incluem: título, data/hora, local (físico ou virtual), participantes (obrigatórios, opcionais), descrição, anexos. Tipos de permissão: proprietário (controle total), editor (pode modificar), comentar, somente visualização. Recorrência: eventos diários, semanais, mensais. Lembretes: notificações automáticas antes do evento.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quais informações um convite de reunião deve conter?",
                    "resposta": "Título, data/hora (com fuso horário), local ou link de videoconferência, lista de participantes (obrigatórios e opcionais), descrição da pauta, anexos relevantes, duração estimada."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como garantir que participantes de diferentes fusos horários recebam o horário correto?",
                    "resposta": "Usar calendários que suportam fuso horário (Google Calendar, Outlook) e definir o fuso horário do evento no convite. O sistema converte automaticamente para o fuso de cada participante."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Calendários não permitem definir permissões diferentes para cada participante.'",
                    "correcao": "Errado. Calendários permitem definir permissões: proprietário, editor, comentar, somente visualização."
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá o funcionamento de calendários e convites de reunião, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Microsoft Teams: integrado ao Microsoft 365, ideal para organizações que já usam M365. Recursos: canais, chat, reuniões, colaboração em documentos. Google Meet: integrado ao Google Workspace, simplicidade, não requer instalação (navegador). Zoom: popular para reuniões externas, recursos avançados de webinars, salas simultâneas (breakout rooms). Todos oferecem: compartilhamento de tela, gravação, chat, levantar mão, reações. Teams destaca-se em colaboração contínua; Meet em simplicidade; Zoom em webinars e grandes eventos.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual plataforma é mais adequada para uma organização que já usa Microsoft 365?",
                    "resposta": "Microsoft Teams — integração nativa com Outlook, SharePoint, OneNote e outros serviços M365."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma universidade precisa dar uma palestra online para 500 alunos. Teams, Meet ou Zoom?",
                    "resposta": "Zoom — suporte a webinars com grande número de participantes, salas simultâneas e recursos avançados de moderação."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Google Meet requer instalação de software.'",
                    "correcao": "Errado. Google Meet funciona no navegador sem instalação."
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno comparará Teams, Google Meet e Zoom, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u2-t2-s2",
                "titulo": "Controle de participantes, lobby e gravação",
                "objetivoAprendizagem": "Alvo compreenderá recursos de segurança em reuniões online.",
                "conteudo": "Lobby (sala de espera): participantes aguardam aprovação do anfitrião antes de entrar. Remover participante: anfitrião pode expulsar participantes. Bloquear vídeo/microfone: anfitrião pode desativar dispositivos de participantes. Gravação: anfitrião pode gravar a reunião (vídeo, áudio, chat). Compartilhamento de tela: controle de quem pode compartilhar. Chat: mensagens durante a reunião. Senha da reunião: proteção por senha para acesso. Espera: participantes entram em ordem de aprovação.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O que é o lobby em reuniões online?",
                    "resposta": "Sala de espera onde participantes aguardam aprovação do anfitrião antes de entrar na reunião. Útil para controlar quem entra e evitar intrusos."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Como proteger uma reunião contra acesso não autorizado?",
                    "resposta": "Usar senha da reunião, ativar lobby, restringir compartilhamento de tela apenas ao anfitrião, e desativar entrada de participantes após o início."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'A gravação de reuniões não requer consentimento.'",
                    "correcao": "Depende da legislação. No Brasil, a LGPD e o Marco Civil podem exigir consentimento para gravação de comunicações. Sempre informar os participantes e obter consentimento quando aplicável."
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
                "conteudo": "Políticas de gravação: definir quando e como gravar, quem pode gravar, onde armazenar, quanto tempo manter. Consentimento: informar participantes sobre gravação e obter consentimento (especialmente exigido por LGPD para dados pessoais). Retenção: definir prazo de retenção de gravações. Acesso: restringir acesso a gravações autorizadas. Compartilhamento: regras para distribuir gravações. Proteção: criptografar gravações sensíveis.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quais elementos são essenciais em uma política de gravação aplicada à correspondência eletrônica e aos calendários corporativos?",
                    "resposta": "Quando gravar, quem pode gravar, onde armazenar, prazo de retenção, quem tem acesso, regras de compartilhamento, proteção (criptografia), e procedimento para exclusão."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma reunião gravada contém dados pessoais de participantes. O que a LGPD exige?",
                    "resposta": "Consentimento dos participantes para gravação, definição de finalidade, prazo de retenção, segurança no armazenamento (criptografia), e direito de acesso e exclusão pelos titulares."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Gravações de reuniões podem ser compartilhadas livremente.'",
                    "correcao": "Errado. Gravações podem conter dados pessoais e informações sensíveis. O compartilhamento deve seguir políticas de segurança e proteção de dados."
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá políticas de gravação e proteção de informações em reuniões, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Netiqueta (etiqueta da rede) são regras de cortesia e profissionalismo na comunicação digital. Princípios: ser claro e conciso; usar assunto descritivo; evitar CAIXA ALTA (equivale a gritar); não abusar de exclamações; responder em prazo razoável; manter thread (não alterar assunto indevidamente); citar apenas o necessário; não enviar anexos pesados sem aviso; evitar responder a todos quando não necessário; ser respeitoso mesmo em discordâncias.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno conhecerá princípios de etiqueta digital aplicáveis a ambientes profissionais, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t1-s2",
                "titulo": "Comunicação síncrona versus assíncrona",
                "objetivoAprendizagem": "Aluno distinguirá comunicação síncrona e assíncrona e escolherá o canal adequado.",
                "conteudo": "Síncrona: ocorre em tempo real (reunião, chat ao vivo, telefone) — exige disponibilidade simultânea, adequada para decisões complexas e emergências. Assíncrona: ocorre com defasagem (e-mail, mensagem gravada, documento colaborativo) — permite reflexão, registro e fuso horário diferente. Escolha do canal: urgência, complexidade, necessidade de registro, disponibilidade dos participantes. Excesso de reuniões síncronas gera fadiga; excesso de e-mails assíncronos pode atrasar decisões.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno distinguirá comunicação síncrona e assíncrona e escolherá o canal adequado, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t1-s3",
                "titulo": "Tom, clareza e estrutura de mensagens profissionais",
                "objetivoAprendizagem": "Aluno estruturará mensagens profissionais claras e adequadas ao contexto.",
                "conteudo": "Estrutura recomendada: saudação adequada ao cargo/relação; contexto breve; pedido/ação clara; prazo; fechamento profissional. Clareza: uma ideia principal por mensagem; listas numeradas para ações; evitar ambiguidades. Tom: formal para institucional, cordial para interno; evitar ironia/sarcasmo (mal interpretados por escrito). Assinatura: nome, cargo, unidade, contato. Revisão antes do envio: destinatários, anexos, erros de digitação.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno estruturará mensagens profissionais claras e adequadas ao contexto, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Acessibilidade digital: garantir que pessoas com deficiência (visual, auditiva, motora, cognitiva) possam perceber, operar e compreender a comunicação. Princípios (WCAG): perceptível, operável, compreensível, robusto. Aplicação: textos alternativos (alt text) em imagens; legendas/transcrições em vídeos e áudios; contraste adequado; evitar depender apenas de cor; estrutura semântica (títulos, listas); linguagem clara.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá princípios de acessibilidade aplicáveis a comunicação digital, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t2-s2",
                "titulo": "Recursos de acessibilidade em plataformas de comunicação",
                "objetivoAprendizagem": "Aluno identificará recursos de acessibilidade em plataformas de comunicação.",
                "conteudo": "Recursos comuns: leitores de tela compatíveis; legendas automáticas (live captions) em reuniões; transcrição de áudio; atalhos de teclado; alto contraste; tamanho de fonte ajustável; intérprete de libras (quando disponível); descrição de slides. A disponibilidade e qualidade desses recursos variam por plataforma e plano; verificar documentação oficial da plataforma e versão utilizada. Não generalizar entre plataformas ou planos.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno identificará recursos de acessibilidade em plataformas de comunicação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t2-s3",
                "titulo": "Boas práticas de acessibilidade em documentos e mensagens",
                "objetivoAprendizagem": "Aluno aplicará boas práticas de acessibilidade em documentos e mensagens.",
                "conteudo": "Boas práticas: usar estilos de título (Heading) em vez de negrito; listas reais (não hífens manuais); tabelas com cabeçalho; evitar imagens com texto embutido sem alt text; nomear links descritivamente (evitar 'clique aqui'); garantir contraste mínimo; fornecer versão acessível de PDFs; usar fontes legíveis. Em e-mails: texto simples quando possível; evitar excesso de imagens; testar com leitor de tela.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno aplicará boas práticas de acessibilidade em documentos e mensagens, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Comunicação institucional: padronização de canais, identidade visual, tom de voz, templates de documentos e mensagens, assinatura institucional, protocolos de resposta. Objetivos: clareza, consistência, transparência, rastreabilidade. Distinguir comunicação interna (colaboradores) de externa (cidadãos, parceiros). Em órgãos públicos, observar LAI (Lei 12.527/2011) e Lei de Governo Digital (Lei 14.129/2021) quanto a transparência e canais digitais.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno conhecerá padrões de comunicação institucional, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t3-s2",
                "titulo": "Escolha de canais e rastreabilidade",
                "objetivoAprendizagem": "Aluno escolherá canais adequados e garantirá rastreabilidade.",
                "conteudo": "Canais: e-mail (formal, rastreável), chat (rápido, menos formal), telefone (urgente), videoconferência (complexo), documento colaborativo (coautoria), sistema de protocolo (oficial). Rastreabilidade: registro de decisões, atas de reunião, versionamento de documentos, logs de acesso. Evitar decisões importantes apenas em canais efêmeros (chat) sem registro. Em serviço público, decisões devem ser documentadas e arquivadas conforme normas de gestão documental.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno escolherá canais adequados e garantirá rastreabilidade, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u3-t3-s3",
                "titulo": "Comunicação profissional em equipes distribuídas",
                "objetivoAprendizagem": "Aluno aplicará boas práticas de comunicação em equipes distribuídas.",
                "conteudo": "Equipes distribuídas: fusos horários, idiomas, culturas. Boas práticas: definir horários de sobreposição; usar comunicação assíncrona com prazos claros; documentar decisões; evitar reuniões fora do horário de trabalho; respeitar feriados locais; usar ferramentas colaborativas; estabelecer acordos de nível de serviço (SLA) de resposta. Atenção a inclusão: não excluir quem não pode estar síncrono.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno aplicará boas práticas de comunicação em equipes distribuídas, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Lobby (sala de espera): participantes aguardam aprovação do anfitrião antes de entrar. Benefícios: controle de quem entra, redução de intrusos (zoombombing), verificação de identidade. Configurações: lobby sempre ativo; lobby para convidados externos; lobby para todos. Boa prática institucional: ativar lobby por padrão em reuniões com dados sensíveis. As opções exatas dependem da plataforma e do plano; verificar documentação oficial.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá o uso de lobby para controlar acesso a reuniões, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t1-s2",
                "titulo": "Remoção e moderação de participantes",
                "objetivoAprendizagem": "Aluno compreenderá recursos de moderação de participantes.",
                "conteudo": "Moderação: anfitrião/coanfitrião pode remover participantes, desativar microfone/vídeo, bloquear compartilhamento de tela, silenciar todos, designar coanfitriões. Boas práticas: definir coanfitriões para grandes reuniões; comunicar regras no início; usar 'levantar mão' para ordem; registrar ocorrências. Remoção deve ser justificada e, em serviço público, documentada se houver incidente.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá recursos de moderação de participantes, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t1-s3",
                "titulo": "Autenticação e controle de acesso",
                "objetivoAprendizagem": "Aluno compreenderá mecanismos de autenticação em reuniões.",
                "conteudo": "Autenticação: senha da reunião; link com token; login obrigatório (apenas usuários autenticados da organização); domínio restrito; sala pessoal com senha. Boas práticas institucionais: exigir login para reuniões internas; restringir a domínio organizacional; não publicar links em canais abertos; rotacionar senhas de salas recorrentes. A disponibilidade de cada método varia por plataforma e plano.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá mecanismos de autenticação em reuniões, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Compartilhamento de tela: exibir conteúdo do dispositivo aos participantes. Riscos: exposição acidental de dados sensíveis (notificações, abas, arquivos), compartilhamento de tela inteira em vez de janela específica, esquecer de parar o compartilhamento. Controles: compartilhar apenas janela/aplicativo específico; desativar notificações; usar modo 'não perturbe'; verificar antes de compartilhar; parar ao terminar. Anfitrião pode restringir quem compartilha.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá riscos e controles no compartilhamento de tela, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t2-s2",
                "titulo": "Coautoria e documentos compartilhados em reunião",
                "objetivoAprendizagem": "Aluno compreenderá colaboração em documentos durante reuniões.",
                "conteudo": "Coautoria em tempo real: múltiplos participantes editam o mesmo documento (Word/Google Docs) durante a reunião. Benefícios: decisões registradas, menos versões. Riscos: edições não revisadas, perda de controle de versão, exposição de dados. Boas práticas: definir editor responsável, usar controle de versão/comentários, salvar versão final, restringir permissões (edição vs visualização).",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá colaboração em documentos durante reuniões, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t2-s3",
                "titulo": "Chat, reações e recursos auxiliares",
                "objetivoAprendizagem": "Aluno conhecerá recursos auxiliares de reuniões e seus cuidados.",
                "conteudo": "Recursos auxiliares: chat (mensagens de texto), reações (emojis), levantar mão, enquetes (polls), quadro branco (whiteboard), salas simultâneas (breakout rooms). Cuidados: chat pode registrar informações sensíveis; enquetes podem coletar dados pessoais; gravação pode incluir chat. Boas práticas: definir se chat será gravado, evitar dados sensíveis no chat, informar sobre coleta em enquetes.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno conhecerá recursos auxiliares de reuniões e seus cuidados, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Política de gravação: definir quando gravar, quem pode gravar, finalidade, armazenamento, acesso, retenção e exclusão. Boas práticas: gravar apenas quando necessário; informar participantes; restringir acesso a autorizados; criptografar; definir prazo de retenção conforme normas de gestão documental e LGPD. A gravação pode incluir vídeo, áudio, chat e transcrição.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá políticas de gravação em contexto institucional, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t3-s2",
                "titulo": "Consentimento e bases legais (LGPD)",
                "objetivoAprendizagem": "Aluno compreenderá consentimento e bases legais para gravação.",
                "conteudo": "LGPD (Lei 13.709/2018): tratamento de dados pessoais exige base legal (consentimento, execução de contrato, obrigação legal, etc.). Gravação de reunião com dados pessoais: informar participantes, obter consentimento quando aplicável, definir finalidade e prazo. Consentimento deve ser livre, informado e inequívoco. Em serviço público, observar também normas de gestão documental e transparência (LAI). Não inventar dispositivos; verificar redação atual em fonte oficial.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá consentimento e bases legais para gravação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u4-t3-s3",
                "titulo": "Retenção, descarte e proteção de gravações",
                "objetivoAprendizagem": "Aluno compreenderá retenção e descarte de gravações.",
                "conteudo": "Retenção: prazo de guarda conforme normas de gestão documental e LGPD (não manter além do necessário). Descarte: exclusão segura (não apenas apagar referência). Proteção: criptografia em repouso e em trânsito, controle de acesso, logs de auditoria, backup seguro. Em serviço público, observar tabela de temporalidade documental. Características específicas de armazenamento dependem da plataforma e do plano; verificar documentação oficial.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá retenção e descarte de gravações, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Zoombombing: intrusos entram em reuniões públicas e compartilham conteúdo ofensivo ou roubam informações. Vetores: links publicados em redes sociais, ausência de senha/lobby, configurações permissivas. Mitigações: senha, lobby, login obrigatório, restrição de compartilhamento de tela, desativar entrada após início, monitoramento ativo. Caso ilustrativo (hipotético): reunião pública sem senha invadida por intrusos que compartilharam conteúdo ofensivo; causa: link divulgado publicamente e ausência de controles.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno analisará casos de intrusão em reuniões online, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t1-s2",
                "titulo": "Compartilhamento acidental de tela",
                "objetivoAprendizagem": "Aluno analisará casos de exposição acidental via compartilhamento de tela.",
                "conteudo": "Caso ilustrativo (hipotético): anfitrião compartilha tela inteira e notificação exibe mensagem com dado pessoal de cliente; causa: notificações ativas e compartilhamento de tela inteira. Mitigações: compartilhar janela específica; modo 'não perturbe'; revisar antes; usar conta de trabalho separada. Outro caso: abas com documentos confidenciais visíveis; mitigação: fechar abas sensíveis antes.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno analisará casos de exposição acidental via compartilhamento de tela, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t1-s3",
                "titulo": "Gravação não autorizada e vazamento",
                "objetivoAprendizagem": "Aluno analisará riscos de gravação não autorizada.",
                "conteudo": "Riscos: participante grava reunião sem consentimento (gravação de tela/áudio) e distribui; anfitrião grava sem informar; gravação armazenada em local inseguro. Mitigações: informar sobre gravação; obter consentimento; restringir gravação ao anfitrião; usar marca d'água (quando disponível); monitorar; política clara. Caso ilustrativo (hipotético): gravação de reunião com dados de clientes distribuída em grupo de mensagens; causa: ausência de política e controle de acesso.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno analisará riscos de gravação não autorizada, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Casos: enviar lista de clientes em Cc em vez de Bcc (exposição de e-mails); encaminhar e-mail com histórico sensível; anexar arquivo errado (versão com dados pessoais); responder a todos expondo informação. Mitigações: revisar destinatários, usar Bcc para listas, verificar anexos, limpar histórico ao encaminhar, usar DLP (Data Loss Prevention) quando disponível. Caso ilustrativo (hipotético): envio de planilha com CPFs de servidores para lista em Cc.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno analisará casos de exposição acidental por e-mail, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t2-s2",
                "titulo": "Exposição em calendários e convites",
                "objetivoAprendizagem": "Aluno analisará casos de exposição acidental em calendários.",
                "conteudo": "Casos: detalhes sensíveis na descrição do evento visíveis a todos os convidados; compartilhamento público de calendário; convite com link de reunião aberto; permissões excessivas (editor para todos). Mitigações: minimizar dados sensíveis na descrição; restringir permissões; usar calendários privados; revisar lista de convidados; não incluir senhas no convite.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno analisará casos de exposição acidental em calendários, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t2-s3",
                "titulo": "Exposição em plataformas de colaboração",
                "objetivoAprendizagem": "Aluno analisará casos de exposição em plataformas de colaboração.",
                "conteudo": "Casos: compartilhar link de documento com permissão 'qualquer pessoa com o link pode editar'; canal público com dados sensíveis; notificações em canal aberto; histórico acessível a ex-colaboradores. Mitigações: revisar permissões, usar grupos/teams restritos, remover acesso de ex-colaboradores, desativar compartilhamento externo quando não necessário, usar DLP. Características específicas variam por plataforma e plano.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno analisará casos de exposição em plataformas de colaboração, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "Phishing institucional: e-mails que se passam por sistemas de reunião/calendário (ex.: 'sua reunião foi cancelada, clique para reagendar'), por TI (redefinição de senha) ou por liderança. Spear phishing: personalizado com nomes/cargos. Sinais: urgência, links suspeitos, anexos inesperados, remetente falsificado. Mitigações: verificar remetente (SPF/DKIM/DMARC), não clicar em links suspeitos, reportar, treinamento, MFA. Caso ilustrativo (hipotético).",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno analisará phishing no contexto de comunicação institucional, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t3-s2",
                "titulo": "Falsificação de remetente (spoofing) e autenticação de e-mail",
                "objetivoAprendizagem": "Aluno compreenderá spoofing e mecanismos de autenticação.",
                "conteudo": "Spoofing de remetente: falsificação do campo 'From' para parecer legítimo. Autenticação: SPF (servidores autorizados a enviar pelo domínio), DKIM (assinatura digital do e-mail), DMARC (política para falhas e relatórios). Esses mecanismos reduzem spoofing mas não eliminam phishing (domínios parecidos, comprometimento de conta). Sempre verificar contexto e não confiar apenas no nome do remetente.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno compreenderá spoofing e mecanismos de autenticação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m3-u5-t3-s3",
                "titulo": "Boas práticas e resposta a incidentes de comunicação",
                "objetivoAprendizagem": "Aluno conhecerá boas práticas e resposta a incidentes de comunicação.",
                "conteudo": "Boas práticas: treinamento periódico, simulações de phishing (defensivas), MFA, verificação de links/anexos, reporte rápido, backup de comunicações críticas, política de uso aceitável. Resposta a incidente: isolar conta comprometida, alterar credenciais, notificar afetados, registrar, revisar controles. Em serviço público, observar LGPD (comunicação de incidente) e normas de segurança. Não inventar prazos; verificar dispositivos aplicáveis.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aluno conhecerá boas práticas e resposta a incidentes de comunicação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      }
    ]
  }
};
