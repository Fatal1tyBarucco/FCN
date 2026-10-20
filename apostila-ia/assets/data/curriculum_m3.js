/* curriculum_m3.js — Módulo 3: Comunicação e Colaboração
 * Conteúdo didático real para comunicação, e-mail, reuniões e colaboração.
 */

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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                    "enunciado": "Quais elementos uma política de gravação deve conter?",
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
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
