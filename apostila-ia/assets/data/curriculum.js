/* curriculum.js - Módulo 1: Microsoft 365, Unidade 1: Word */

const curriculum = {
  "modulo-1": {
    "titulo": "MICROSOFT 365 E APLICAÇÕES DE ESCRITÓRIO",
    "unidades": [
      {
        "id": "modulo-1-unidade-1",
        "titulo": "1.1 Ecossistema Microsoft 365",
        "topicos": [
          {
            "id": "modulo-1-unidade-1-topico-1",
            "titulo": "Diferenças entre Microsoft 365, Office LTSC e versões perpétuas",
            "metadados": {
              "recursosVisuais": [],
              "fontes": [],
              "testes": ["node-check", "smoke-vm"],
              "estado": "implementado"
            },
            "subtopicos": [
              {
                "id": "modulo-1-unidade-1-topico-1-sub-1",
                "titulo": "Comparação de planos e recursos disponíveis",
                "objetivoAprendizagem": "Aluno diferenciará Microsoft 365, Office LTSC e versões perpétuas.",
                "conteudo": "Microsoft 365 é serviço assinatura com Office, OneDrive, Teams, atualizações contínuas. Office LTSC é versão perpétua com apps selecionados (sem Teams/OneDrive cloud) e atualizações de segurança apenas. Versões perpétuas são compras únicas com apps limitados (Word, Excel, PowerPoint) e sem garantia de atualização de funcionalidades novas.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Identificar o produto de uma organização que precisa de Teams, OneDrive 5 TB por usuário e atualizações contínuas.", "resposta": "Microsoft 365 (Business/Enterprise); LTSC não inclui Teams/OneDrive cloud; versão perpétua não oferece assinatura nem atualizações de recurso." },
                  { "tipo": "aplicacao", "enunciado": "Empresa com 50 estações precisa de Word/Excel/PowerPoint sem colaboração em nuvem e com atualizações apenas de segurança.", "resposta": "Office LTSC (Volume Licensing) — preço único, sem Teams, sem OneDrive cloud, apenas patches de segurança." },
                  { "tipo": "erro", "enunciado": "Um colaborador afirma que a versão perpétua inclui Teams e 5 TB de armazenamento.", "correcao": "Incorreto: a versão perpétua (Office Home & Student) não inclui Teams nem armazenamento em nuvem integrado; essas são características do M365." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) O Office LTSC inclui Teams e atualizações de funcionalidades continuamente.", "resposta": "Errado. LTSC = apenas apps selecionados, apenas segurança, sem Teams/OneDrive cloud." },
                  { "tipo": "multipla", "enunciado": "Qual é a diferença principal entre M365 e versão perpétua? A) Preço; B) Modelo de assinatura vs compra única + atualizações; C) Apenas interface.", "resposta": "B" }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de classificar um produto Microsoft (M365/LTSC/perpétuo) a partir de requisitos de colaboração, atualização e licenciamento, evidenciado por resposta correta a item de múltipla escolha."
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-2",
                "titulo": "Licenciamento por volume e benefícios organizacionais",
                "objetivoAprendizagem": "Aluno compreenderá modelos de licenciamento por volume.",
                "conteudo": "Licenciamento por volume (Volume Licensing) para organizações com múltiplas estações. Benefícios: preços descontados, implantação centralizada, direitos de transferência, programas de upgrade. Modelos: Open License, Open Value, Enterprise Agreement.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Organização com 200 estações precisa comprar Office com desconto e implantação centralizada.","resposta":"Open Value ou Enterprise Agreement (Volume Licensing) — preços descontados e gestão centralizada."},
                  {"tipo":"aplicacao","enunciado":"Escola com 50 computadores precisa de Word/Excel/PowerPoint sem Teams.","resposta":"Office LTSC via Volume Licensing — compra única, apenas patches de segurança."},
                  {"tipo":"erro","enunciado":"Um gestor afirma que licenciamento por volume exige pagamento mensal por usuário.","correcao":"Incorreto: modelos como Open License são compra única; Enterprise Agreement pode ser anual. Depende do programa escolhido."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual programa de licenciamento por volume é voltado a grandes organizações? A) Open License; B) Enterprise Agreement; C) Retail.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Volume Licensing permite transferência de licenças entre dispositivos.","resposta":"Certo (conforme termos do programa)."}
                ]
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-3",
                "titulo": "Aplicações Web, desktop e mobile",
                "objetivoAprendizagem": "Aluno distingirá versões web, desktop e mobile das aplicações Microsoft 365.",
                "conteudo": "Aplicações Web: via navegador, funcionalidades básicas, atualizações automáticas, requer internet. Desktop: instalação local, funcionalidades completas, atualizações via Microsoft Update, funciona offline. Mobile: apps iOS/Android, funcionalidades simplificadas, visualização e edição básica, sincronização com nuvem.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Usuário precisa editar documento em tablet sem instalação.","resposta":"Usar aplicação Web (Office on the web) via navegador — funcionalidades básicas, requer internet."},
                  {"tipo":"aplicacao","enunciado":"Trabalhador offline em avião precisa de todas as funções do Excel.","resposta":"Aplicação desktop instalada — funciona offline e tem funcionalidades completas."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que a versão mobile tem todas as funções da desktop.","correcao":"Incorreto: mobile oferece funcionalidades simplificadas (visualização/edição básica)."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual versão funciona offline com funcionalidades completas? A) Web; B) Mobile; C) Desktop.","resposta":"C"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Aplicações Web atualizam automaticamente.","resposta":"Certo."}
                ]
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-4",
                "titulo": "Armazenamento local e em nuvem",
                "objetivoAprendizagem": "Aluno compreenderá opções de armazenamento do Microsoft 365.",
                "conteudo": "OneDrive (armazenamento em nuvem por usuário, com cota conforme o plano — planos Enterprise oferecem cotas superiores aos planos pessoais; valor exato depende do plano contratado e deve ser conferido na documentação oficial), SharePoint (armazenamento de equipe/colaborativo), armazenamento local. Integração: sincronização automática, acesso remoto, histórico de versões, recuperação de arquivos.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Empresa com 100 usuários precisa de 5 TB por pessoa.","resposta":"OneDrive for Business (plano Enterprise) — 5 TB por usuário."},
                  {"tipo":"aplicacao","enunciado":"Equipe precisa de biblioteca compartilhada de documentos.","resposta":"SharePoint (armazenamento de equipe) integrado ao M365."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que armazenamento local sincroniza automaticamente com a nuvem.","correcao":"Incorreto: sincronização exige cliente (OneDrive Sync) configurado; armazenamento puramente local não sincroniza."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual serviço oferece armazenamento de equipe no M365? A) OneDrive pessoal; B) SharePoint; C) Teams chat.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) OneDrive pessoal oferece 5 TB em todos os planos.","resposta":"Errado. 5 TB é típico de planos Enterprise; planos pessoais têm cotas menores."}
                ]
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-5",
                "titulo": "Integração entre aplicações",
                "objetivoAprendizagem": "Aluno identificará integrações entre aplicações Microsoft 365.",
                "conteudo": "Inserir tabela do Excel em Word com link dinâmico, apresentações PowerPoint com dados ao vivo do Excel, Teams como hub de colaboração, Power Automate para automação entre aplicações. Integração via OLE, APIs REST do Microsoft Graph, compatibilidade de formatos.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Inserir tabela do Excel em Word com atualização automática.","resposta":"Colar especial > Vincular (OLE) — alterações no Excel refletem no Word."},
                  {"tipo":"aplicacao","enunciado":"Apresentação PowerPoint com gráfico do Excel atualizado.","resposta":"Inserir > Gráfico (vinculado ao Excel) ou copiar/colar vinculado; dados atualizam ao recalcular fonte."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que a integração entre apps exige programação.","correcao":"Incorreto: a integração básica (OLE, copiar/colar vinculado) é nativa; APIs (Microsoft Graph) são para automação avançada."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual mecanismo vincula tabela do Excel em Word com atualização? A) Copiar/colar comum; B) OLE vinculado; C) Exportar PDF.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Teams pode ser hub de colaboração integrando apps M365.","resposta":"Certo."}
                ]
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-6",
                "titulo": "Salvamento automático, sincronização, colaboração simultânea e histórico de versões",
                "objetivoAprendizagem": "Aluno compreenderá mecanismos de salvamento automático e colaboração em tempo real.",
                "conteudo": "Salvamento automático (auto-save) com indicador no canto superior esquerdo. Sincronização via OneDrive/SharePoint, edição simultânea de múltiplos usuários com alterações visíveis em tempo real, indicadores de presença e cursor de posição. Histórico de versões: cópias de recuperação por período padrão conforme o serviço (conferir na documentação oficial do produto), restauração de versões anteriores. Políticas de retenção configuráveis por administrador.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Identificar se o documento está sendo salvo automaticamente.","resposta":"Indicador 'Salvamento automático' no canto superior esquerdo (arquivos no OneDrive/SharePoint)."},
                  {"tipo":"aplicacao","enunciado":"Dois usuários editam o mesmo Word simultaneamente.","resposta":"Presença (nome/cursor colorido) visível; alterações em tempo real; conflitos resolvidos (última alteração prevalece offline)."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que o histórico de versões guarda apenas 1 versão.","correcao":"Incorreto: o período padrão e a quantidade máxima de versões dependem do plano/serviço (conferir na documentação oficial); a configuração é administrável."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Por quantos dias o histórico de versões padrão mantém cópias? A) 7; B) 30; C) 90.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Edição simultânea exige fechar o arquivo para outro usuário editar.","resposta":"Errado. Coautoria permite edição simultânea."}
                ]
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-7",
                "titulo": "Contas pessoais e organizacionais",
                "objetivoAprendizagem": "Aluno diferenciara contas pessoais e organizacionais no Microsoft 365.",
                "conteudo": "Contas pessoais (Personal/Family): limite de usuários, recursos focados doméstico. Contas organizacionais (Business/Enterprise): gestão centralizada, domínios personalizados, políticas de segurança avançadas, eDiscovery, gerenciamento de dispositivos, compliance features. Diferenças: escopo de administração, licenças por usuário vs. familiar, recursos de segurança e conformidade.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Família compartilhando Office em casa.","resposta":"Conta pessoal (Family) — limite de usuários, foco doméstico."},
                  {"tipo":"aplicacao","enunciado":"Empresa com 500 funcionários precisa de eDiscovery e gestão de dispositivos.","resposta":"Conta organizacional (Enterprise) — recursos de segurança/compliance."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que contas pessoais têm eDiscovery.","correcao":"Incorreto: eDiscovery é recurso de contas organizacionais (Enterprise)."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual conta permite domínio personalizado e políticas de segurança avançadas? A) Personal; B) Organizacional; C) Ambas.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Contas pessoais e organizacionais têm o mesmo escopo de administração.","resposta":"Errado."}
                ]
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-8",
                "titulo": "Permissões, compartilhamento, privacidade e recuperação de arquivos",
                "objetivoAprendizagem": "Aluno compreenderá modelo de permissões do Microsoft 365.",
                "conteudo": "Permissões granulares (visualizar, editar, comentar, controlar). Compartilhamento por link (com expiração, senha protegido, permissões de download). Privacidade via configurações de locatário e rotulagem de dados. Recuperação: lixeira (30 dias), versões anteriores, eDiscovery para administradores Enterprise.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Compartilhar arquivo com permissão de visualização e expiração em 7 dias.","resposta":"Compartilhar > Pessoas específicas > Visualizar > Definir expiração > Enviar."},
                  {"tipo":"aplicacao","enunciado":"Recuperar arquivo excluído há 5 dias.","resposta":"Lixeira (período de retenção conforme o serviço — conferir na documentação oficial) → Restaurar; se além do período, versões anteriores/eDiscovery (admin)."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que link de compartilhamento nunca expira por padrão.","correcao":"Incorreto: políticas de locatário podem definir expiração; opção de expiração disponível ao compartilhar."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"A lixeira do serviço de armazenamento em nuvem mantém arquivos excluídos por um período de retenção (conferir o valor na documentação oficial do produto). Qual prática é correta ao excluir um arquivo importante? A) Confiar apenas na lixeira; B) Verificar a retenção e manter backup independente; C) Desativar a lixeira para economizar espaço.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Permissões incluem visualizar, editar, comentar e controlar.","resposta":"Certo."}
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-1-unidade-2",
        "titulo": "1.2 Microsoft Word",
        "topicos": [
          {
            "id": "modulo-1-unidade-2-topico-1",
            "titulo": "Interface, documentos, modelos e formatos",
            "objetivoAprendizagem": "Aluno navegará na interface do Word, criará e gerenciará documentos, modelos e formatos de arquivo.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-1-sub-1",
                "titulo": "Interface do Word e navegação",
                "objetivoAprendizagem": "Aluno identificará os elementos da interface do Word moderno (Ribbon).",
                "conteudo": "A interface do Word modernizado (Ribbon interface) organiza funcionalidades em guias (Arquivo, Início, Inserir, Desenho, Layout, Referências, Correios, Revisão, Exibir). Cada tab contém grupos de comandos relacionados. A barra de acesso rápido (Quick Access Toolbar) pode ser personalizada com comandos de uso frequente. O modo de leitura otimiza a visualização em dispositivos com tela menor, e a visão de seleção permite editar o documento como uma lista de objetos.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Localizar o comando 'Verificar Ortografia'.","resposta":"Guia Revisão > Verificar Ortografia (ou F7)."},
                  {"tipo":"aplicacao","enunciado":"Personalizar a Barra de Acesso Rápido com 'Salvar'.","resposta":"Clicar na seta da QAT > Mais Comandos > selecionar 'Salvar' > Adicionar."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que o Modo de Leitura permite edição.","correcao":"Incorreto: Modo de Leitura otimiza visualização; edição exige modo de Edição/Exibição de Impressão."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual guia contém 'Inserir Tabela'? A) Início; B) Inserir; C) Layout.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) O Ribbon organiza comandos em guias e grupos.","resposta":"Certo."}
                ]
              },
              {
                "id": "modulo-1-unidade-2-topico-1-sub-2",
                "titulo": "Formatos de documento (.docx, .doc, .pdf, .rtf, .txt)",
                "objetivoAprendizagem": "Aluno compreenderá as diferenças entre os formatos de arquivo do Word e quando usar cada um.",
                "conteudo": ".docx (padrão Open XML, compatível com versões recentes, suporta macros via .docm). .doc (formato legado, binário, compatibilidade com Word 2003 e anteriores). .pdf (portátil, preserva layout, não editável sem ferramentas específicas). .rtf (Rich Text Format, compatibilidade intermediária entre processadores de texto). .txt (texto puro, sem formatação). A escolha do formato depende do objetivo: edição colaborativa (.docx), distribuição leitura-only (.pdf), compatibilidade antiga (.doc).",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Salvar documento para distribuição leitura-only.","resposta":"Arquivo > Exportar > Criar PDF/XPS — preserva layout."},
                  {"tipo":"aplicacao","enunciado":"Abrir documento .doc antigo no Word 365.","resposta":"Abre em Modo de Compatibilidade, limitando funcionalidades novas; converter para .docx se necessário."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que .txt preserva formatação.","correcao":"Incorreto: .txt é texto puro, sem formatação."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual formato é padrão Open XML desde Office 2007? A) .doc; B) .docx; C) .rtf.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) .docm é .docx com macros.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-2",
            "titulo": "Formatação direta versus estilos",
            "objetivoAprendizagem": "Aluno utilizará estilos para formatação consistente.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-2-sub-1",
                "titulo": "Formatação direta vs. estilos",
                "objetivoAprendizagem": "Aluno distinguirá formatação direta de estilos e usará estilos para consistência.",
                "conteudo": "Formatação direta aplica atributos (fonte, tamanho, cor) diretamente ao texto selecionado, sem relação com outros textos. Estilos são conjuntos nomeados de formatação que podem ser aplicados globalmente: modificar um estilo atualiza todo o texto formatado com ele. O uso de estilos é essencial para consistência visual, criação automática de sumários, navegação estrutural e acessibilidade. O Word oferece estilos pré-definidos (Normal, Título 1, Título 2, etc.) que podem ser personalizados e salvos em modelos.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Aplicar negrito a uma palavra específica.","resposta":"Formatação direta: selecionar palavra > Ctrl+B (não cria estilo)."},
                  {"tipo":"aplicacao","enunciado":"Criar estilo 'Destaque' reutilizável.","resposta":"Início > Estilos > Criar um Estilo > definir formatação; aplicar a vários trechos; modificar estilo atualiza todos."},
                  {"tipo":"erro","enunciado":"Um usuário formata todos os títulos com negrito direto e espera sumário automático.","correcao":"Incorreto: sumário usa estilos (Título 1), não formatação direta."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual recurso atualiza todo o texto ao modificar a formatação? A) Formatação direta; B) Estilos; C) Copiar/colar.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Modificar um estilo atualiza todas as ocorrências.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-3",
            "titulo": "Parágrafos, recuos, tabulações, espaçamento e paginação",
            "objetivoAprendizagem": "Aluno ajustará parágrafos, recuos, tabulações, espaçamento e paginação.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-3-sub-1",
                "titulo": "Parágrafos e recuos",
                "objetivoAprendizagem": "Aluno ajustará parágrafos, recuos e tabulações corretamente.",
                "conteudo": "Parágrafos são unidades de texto separadas por quebras de parágrafo (Enter) ou linha (Shift+Enter). Recuos deslocam o texto da margem esquerda (recuo inicial, recuo de parágrafo). Tabulações avançam o cursor para posições pré-definidas (tabulador simples, centrado, decimal, direita). Espaçamento pode ser definido antes e depois do parágrafo, entre linhas (1.0, 1.5, duplo) e dentro do parágrafo.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Recuar a primeira linha de um parágrafo.","resposta":"Régua > marcador de recuo de primeira linha (ou Parágrafo > Recuo especial: Primeira linha)."},
                  {"tipo":"aplicacao","enunciado":"Criar lista com tabulação decimal.","resposta":"Parágrafo > Tabulações > definir posição e alinhamento decimal; pressionar Tab para alinhar números."},
                  {"tipo":"erro","enunciado":"Um usuário usa espaços para alinhar texto.","correcao":"Incorreto: usar tabulações/recuos; espaços não alinham de forma consistente entre fontes."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual tecla insere quebra de linha dentro do parágrafo? A) Enter; B) Shift+Enter; C) Ctrl+Enter.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Shift+Enter cria novo parágrafo.","resposta":"Errado. Cria nova linha no mesmo parágrafo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-4",
            "titulo": "Listas, listas multinível e numeração automática",
            "objetivoAprendizagem": "Aluno criará e gerenciará listas simples, listas multinível e numeração automática.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-4-sub-1",
                "titulo": "Listas bullet e numeradas",
                "objetivoAprendizagem": "Aluno criará e gerenciará listas bullet e numeradas.",
                "conteudo": "Listas do tipo bullet (pontos, círculos, setas) para itens onde a ordem não é crítica. Listas numeradas (numbered) usam números ou letras sequenciais automáticas, ideais quando a sequência importa (passos, argumentos). O Word oferece variações de símbolos para bullet e formatos personalizados para numeração (numerais romanos, letras, algarismos). Listas podem estar dentro de tabelas, dentro de células ou flutuantes ao lado de imagens.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Criar lista de compras com bullets.","resposta":"Início > Marcadores > escolher símbolo; Enter para novo item; Enter duplo para sair."},
                  {"tipo":"aplicacao","enunciado":"Criar lista numerada de passos.","resposta":"Início > Numeração > escolher formato; a numeração atualiza automaticamente ao inserir/excluir itens."},
                  {"tipo":"erro","enunciado":"Um usuário digita '1.' manualmente em vez de usar numeração automática.","correcao":"Incorreto: ao excluir/inserir itens a numeração manual não se ajusta; usar recurso automático."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual lista é adequada quando a ordem importa? A) Bullet; B) Numerada; C) Ambas.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Listas multinível podem combinar bullets e numeração.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-5",
            "titulo": "Cabeçalhos, rodapés, notas e numeração de páginas",
            "objetivoAprendizagem": "Aluno inserirá e gerenciará cabeçalhos, rodapés, notas de página e numeração avançada.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-5-sub-1",
                "titulo": "Cabeçalhos e rodapés",
                "objetivoAprendizagem": "Aluno inserirá e gerenciará cabeçalhos e rodapés em documentos.",
                "conteudo": "Cabeçalhos aparecem no topo de cada página e podem conter título do documento, nome do autor, data, etc. Rodapés aparecem no fim de cada página e frequentemente contém números de página, informações de arquivo ou rodapés corporativos. Pode-se ter diferentes cabeçalhos/rodapés para seções diferentes usando quebras de seção. A numeração de páginas pode ser personalizada: formato arábico (1, 2, 3), romano (i, ii, iii), alfabético (A, B, C), posição (centro, direita, esquerda), e início em número diferente de 1.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Inserir número de página no rodapé.","resposta":"Inserir > Número de Página > posição (ex.: Inferior/Centro)."},
                  {"tipo":"aplicacao","enunciado":"Cabeçalho diferente na primeira página.","resposta":"Duplo clique no cabeçalho > marcar 'Primeira Página Diferente' > editar."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que o mesmo cabeçalho vale para todas as seções.","correcao":"Incorreto: quebras de seção permitem cabeçalhos/rodapés diferentes por seção (desvincular do anterior)."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Como ter numeração romana nas páginas preliminares? A) Alterar formato por seção; B) Editar manualmente; C) Não é possível.","resposta":"A"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Cabeçalho aparece no topo de cada página.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-6",
            "titulo": "Quebras de página e de seção",
            "objetivoAprendizagem": "Aluno distinguirá quebras de página e de seção e aplicará cada uma corretamente.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-6-sub-1",
                "titulo": "Quebra de página vs. quebra de seção",
                "objetivoAprendizagem": "Aluno distinguirá quebra de página e quebra de seção.",
                "conteudo": "Quebra de página (Page Break) força o início de novo conteúdo na página seguinte, sem alterar formatação. Quebra de seção permite mudar formatação entre partes do documento: orientação (retrato/paisagem), margens, número de colunas, formato de numeração, cabeçalhos/rodapés específicos. Tipos: Início de seção (Next Page) começa na página seguinte; Início de seção (Continuous) começa na mesma página (usado para colunas). A escolha depende se apenas a localização importa (quebra de página) ou se a formatação também deve mudar (quebra de seção).",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Forçar início de novo capítulo na página seguinte.","resposta":"Layout > Quebras > Página (Page Break)."},
                  {"tipo":"aplicacao","enunciado":"Criar seção com orientação paisagem no meio do documento.","resposta":"Layout > Quebras > Próxima Página (seção) > Layout > Orientação > Paisagem (apenas essa seção)."},
                  {"tipo":"erro","enunciado":"Um usuário usa quebra de página para mudar margens.","correcao":"Incorreto: mudança de margens exige quebra de seção."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual quebra permite mudar cabeçalho por parte do documento? A) Quebra de página; B) Quebra de seção; C) Quebra de coluna.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Quebra contínua inicia seção na mesma página.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-7",
            "titulo": "Sumários automáticos, estilos de títulos e atualização de campos",
            "objetivoAprendizagem": "Aluno gerará e manterá sumários automáticos baseados em estilos de títulos.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-7-sub-1",
                "titulo": "Gerando sumários automáticos",
                "objetivoAprendizagem": "Aluno gerará e atualizará sumários automáticos baseados em estilos de títulos.",
                "conteudo": "O Word pode gerar sumários automaticamente baseando-se nos estilos de títulos aplicados (Título 1, Título 2, etc.). Processo: aplicar estilos de títulos aos tópicos, posicionar cursor onde o sumário será inserido, usar 'Referências > Sumário' e escolher o formato. O sumário é inserido como um campo que pode ser atualizado ('Atualizar campo') sempre que estilos ou estrutura mudarem. Campos podem incluir números de capítulo (ex: '2.3 Visão geral') quando usados heading levels apropriados. É possível personalizar excluindo certos níveis ou adicionando texto personalizado.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Gerar sumário automático.","resposta":"Aplicar estilos Título 1/2 → Referências > Sumário > Sumário Automático."},
                  {"tipo":"aplicacao","enunciado":"Atualizar sumário após editar títulos.","resposta":"Clicar no sumário > Atualizar campo > Atualizar página inteira."},
                  {"tipo":"erro","enunciado":"Sumário vazio após atualização.","correcao":"Verificar se capítulos têm estilo Título 1 aplicado (não apenas formatação direta); reinserir sumário."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"O sumário automático baseia-se em: A) Formatação direta; B) Estilos de título; C) Marcadores manuais.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) O sumário é um campo atualizável.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-8",
            "titulo": "Referências cruzadas, legendas, índices e citações",
            "objetivoAprendizagem": "Aluno inserirá referências cruzadas, legendas automáticas, índices e gerenciará citações bibliográficas.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-8-sub-1",
                "titulo": "Referências cruzadas e legendas automáticas",
                "objetivoAprendizagem": "Aluno inserirá referências cruzadas e legendas automáticas para figuras e tabelas.",
                "conteudo": "Referências cruzadas criam links que saltam para locais específicos (ex: 'Veja a Figura 1') que atualizam automatic quando a figura é movida. Legendas automáticas geradas para figuras, tabelas e equações baseadas em textos de legenda inseridos. Índice gerado a partir de marcas de entrada de índice marcando termos ao longo do documento. Citações bibliográficas gerenciadas usando o recurso 'Referências' com fontes de bibliografia, estilos APA/MLA/Chicago e inserção automática no texto e geração de bibliografia no final.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Inserir referência cruzada para 'Figura 1'.","resposta":"Referências > Referência Cruzada > Tipo: Figura > inserir; atualiza se a figura for movida."},
                  {"tipo":"aplicacao","enunciado":"Gerar legenda automática para tabela.","resposta":"Referências > Inserir Legenda > selecionar rótulo (Tabela) > posição; Word numera automaticamente."},
                  {"tipo":"erro","enunciado":"Um usuário digita 'Figura 1' manualmente.","correcao":"Incorreto: referência manual não atualiza; usar referência cruzada."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual recurso gera bibliografia com estilo APA? A) Referência cruzada; B) Citações; C) Legenda.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Índice é gerado a partir de marcas de entrada.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-9",
            "titulo": "Tabelas, imagens, formas e disposição de texto",
            "objetivoAprendizagem": "Aluno criará e formatará tabelas, inserirá imagens e formas, e controlará disposição de texto.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-9-sub-1",
                "titulo": "Tabelas no Word",
                "objetivoAprendizagem": "Aluno criará e formatará tabelas com fórmulas e propriedades avançadas.",
                "conteudo": "Tabelas organizam dados em linhas e colunas com formatação (cores de fundo, bordas, sombreamento), fórmulas integradas (SUM, AVERAGE, etc.), classificação e filtros. Podem ser convertidas em texto e vice-versa. Propriedades de tabela incluem alinhamento, autoajuste de colunas, repetir como cabeçalho linha e sombreamento de linhas alternadas.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Criar tabela 3x3.","resposta":"Inserir > Tabela > selecionar grade 3x3 (ou desenhar)."},
                  {"tipo":"aplicacao","enunciado":"Somar coluna em tabela do Word.","resposta":"Layout da Tabela > Fórmula > =SUM(ABOVE) > OK (fórmula integrada)."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que tabelas do Word têm todas as funções do Excel.","correcao":"Incorreto: fórmulas integradas são limitadas (SUM, AVERAGE etc.); para cálculos complexos usar Excel."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual propriedade repete linha de cabeçalho em cada página? A) Autoajuste; B) Repetir como cabeçalho; C) Sombreamento.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Tabelas do Word podem ser convertidas em texto.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-10",
            "titulo": "Revisão, comentários, controle de alterações e comparação de documentos",
            "objetivoAprendizagem": "Aluno utilizará as ferramentas de revisão do Word para colaborar e comparar versões.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-10-sub-1",
                "titulo": "Rastreamento de alterações e comentários",
                "objetivoAprendizagem": "Aluno utilizará rastreamento de alterações e comentários para revisão colaborativa.",
                "conteudo": "Rastreamento de alterações (Track Changes) marca todas as modificações (inserções, exclusões, formatação) em cores diferentes, permitindo que revisores vejam o que foi alterado. Comentários podem ser adicionados a trechos específicos, resolvidos ou removidos. Comparar documentos ('Comparar e Mesclar') identifica diferenças entre duas versões e gera um documento resultante destacando alterações. O recurso 'Combinar' mescla alterações de múltiplas versões. Essenciais para revisão colaborativa, controle de qualidade e manutenção de histórico.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Ativar rastreamento de alterações.","resposta":"Revisão > Controlar Alterações > Ativar (inserções/exclusões marcadas em cores)."},
                  {"tipo":"aplicacao","enunciado":"Comparar duas versões de um documento.","resposta":"Revisão > Comparar > selecionar original e revisado > gerar documento com diferenças destacadas."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que comentários alteram o texto.","correcao":"Incorreto: comentários são anotações vinculadas a trechos; não alteram o texto."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual recurso mescla alterações de múltiplas versões? A) Comparar; B) Combinar; C) Rastrear.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Comentários podem ser resolvidos.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-11",
            "titulo": "Proteção, restrições de edição e permissões",
            "objetivoAprendizagem": "Aluno protegerá documentos contra edições não autorizadas.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-11-sub-1",
                "titulo": "Restrições de edição e senhas",
                "objetivoAprendizagem": "Aluno aplicará restrições de edição e senhas de proteção.",
                "conteudo": "Proteção inclui: restrições de edição (limitar quem pode editar, comentar, somente visualizar), senhas de abertura e modificação, marcas d'água. 'Restrição de Edição' (Review > Restrict Editing) define áreas permitidas e níveis de acesso. Senhas: 'Password to open' (para abrir) e 'Password to modify' (para modificar). Permissões no SharePoint/OneDrive controlam edição, comentário ou visualização com opções de expiração de link e proteção por senha para links compartilhados.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Restringir edição a comentários.","resposta":"Revisão > Restringir Edição > permitir apenas comentários > Ativar proteção (senha opcional)."},
                  {"tipo":"aplicacao","enunciado":"Definir senha para abrir documento.","resposta":"Arquivo > Informações > Proteger Documento > Criptografar com Senha."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que senha de modificação impede leitura.","correcao":"Incorreto: 'Password to modify' permite abrir (leitura) mas impede edição sem senha."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual proteção exige senha para abrir o arquivo? A) Restrição de edição; B) Password to open; C) Marca d'água.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Permissões do SharePoint controlam visualização/edição por link.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-12",
            "titulo": "Acessibilidade, verificação ortográfica e exportação para PDF",
            "objetivoAprendizagem": "Aluno garantirá acessibilidade, verificará ortografia e exportará corretamente para PDF.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-12-sub-1",
                "titulo": "Acessibilidade e exportação PDF",
                "objetivoAprendizagem": "Aluno garantirá acessibilidade e exportará documentos para PDF preservando estruturas.",
                "conteudo": "Verificar Acessibilidade (Review > Verificar Acessibilidade) identifica problemas como texto alternativo faltando, uso de estilos de título, contraste, navegação por teclado. Verificação ortográfica (Revisão > Verificação Ortográfica) detecta palavras escritas incorretamente. Exportação para PDF (Arquivo > Exportar > Criar PDF/XPS) preserva layout, com opções para marcas d'água, otimizar tamanho, preservar cametas de acessibilidade (texto alternativo, estruturas de heading) para leitores de tela. Verificar PDF resultante para garantir preservação de elementos essenciais.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Verificar acessibilidade do documento.","resposta":"Revisão > Verificar Acessibilidade > corrigir problemas (texto alternativo, headings, contraste)."},
                  {"tipo":"aplicacao","enunciado":"Exportar PDF preservando acessibilidade.","resposta":"Arquivo > Exportar > Criar PDF/XPS > Opções > marcar 'Criar tags de acessibilidade'."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que PDF sempre preserva estrutura de headings.","correcao":"Incorreto: é necessário marcar a opção de tags de acessibilidade na exportação."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual verificação identifica texto alternativo faltando? A) Ortografia; B) Acessibilidade; C) Contagem de palavras.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Exportação para PDF preserva layout.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-13",
            "titulo": "Compatibilidade de formatos e problemas de formatação",
            "objetivoAprendizagem": "Aluno compreenderá questões de compatibilidade entre versões do Word e formatos de arquivo.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-13-sub-1",
                "titulo": "Formatos .doc vs .docx e compatibilidade",
                "objetivoAprendizagem": "Aluno compreenderá questões de compatibilidade entre versões do Word.",
                "conteudo": "Formatos: .doc (legado, binário, Office 2003 e anteriores), .docx (Open XML, padrão desde Office 2007), .docm (docx com macros), .dotx (modelo), .dotm (modelo com macros). Compatibilidade: abrir .doc no Word 365 ativa Modo de Compatibilidade, limitando funcionalidades novas. Converter .doc para .docx geralmente preserva conteúdo mas pode reformatar elementos. Para máxima compatibilidade, recomenda-se salvar em .pdf para distribuição. O Modo de Compatibilidade desabilita funcionalidades introduzidas após 2007 para preservar integridade do conteúdo original.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Abrir .doc no Word 365.","resposta":"Modo de Compatibilidade ativo; funcionalidades novas desabilitadas para preservar o original."},
                  {"tipo":"aplicacao","enunciado":"Converter .doc para .docx.","resposta":"Arquivo > Informações > Converter (ou Salvar Como .docx) — preserva conteúdo, pode reformatar."},
                  {"tipo":"erro","enunciado":"Um usuário afirma que .doc e .docx são idênticos.","correcao":"Incorreto: .doc é binário (legado); .docx é Open XML (padrão desde 2007)."}
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual formato suporta macros? A) .docx; B) .docm; C) .doc.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Para distribuição, recomenda-se PDF.","resposta":"Certo."}
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-14",
            "titulo": "Exemplos resolvidos de criação e correção de documentos complexos",
            "objetivoAprendizagem": "Aluno executará exemplos práticos de criação e correção de documentos Word complexos.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-14-sub-1",
                "titulo": "Criação de relatório técnico integrado",
                "objetivoAprendizagem": "Aluno criará um relatório técnico integrando sumário, tabelas, figuras, cabeçalhos diferenciados e exportação para PDF com acessibilidade.",
                "conteudo": "Exemplo integrado: 1) Aplicar estilos Título 1/2 aos capítulos/seções. 2) Inserir sumário no início. 3) Criar tabela com fórmulas e funções. 4) Inserir figuras com legendas automáticas. 5) Configurar quebras de seção e cabeçalhos/rodapés diferentes para seções preliminares e corpo. 6) Durante revisão, ativar rastreamento de alterações. 7) Exportar para PDF verificando texto alternativo e estruturas de heading. 8) Abrir PDF em leitor de tela para validação de acessibilidade.",
                "exemplos": [
                  {"tipo":"introducao","enunciado":"Criar relatório com sumário e tabelas.","resposta":"Aplicar estilos Título 1/2 → inserir sumário → criar tabela com fórmulas → legendas automáticas."},
                  {"tipo":"aplicacao","enunciado":"Configurar cabeçalhos diferentes por seção.","resposta":"Quebra de Seção (Next Page) → desvincular cabeçalho → editar por seção → numerar páginas por seção."},
                  {"tipo":"erro","enunciado":"Relatório com sumário vazio após atualização.","correcao":"Verificar estilos Título 1 aplicados; excluir sumário antigo e reinserir via Referências."},
                  { "tipo": "introducao", "enunciado": "Criar sumário automático a partir de estilos de título.", "resposta": "Aplicar estilo 'Título 1' a cada capítulo → Referências > Sumário > Sumário Automático 1 → o campo atualiza automaticamente quando títulos mudam (atualizar campo)" },
                  { "tipo": "aplicacao", "enunciado": "Configurar cabeçalhos diferentes por seção (corpo vs anexos com numeração romana).", "resposta": "Inserir Quebra de Seção (Next Page) → desmarcar 'Vincular ao anterior' no cabeçalho de cada seção → inserir cabeçalho específico por seção → configurar numeração de páginas por seção." },
                  { "tipo": "erro", "enunciado": "Um documento com sumário vazio após atualização do campo.", "correcao": "Verificar se capítulos têm estilo 'Título 1' aplicado (não apenas formatação direta); confirmar que o campo do sumário está inserido (não texto estático); excluir sumário antigo e reinserir via Referências > Sumário." }
                ],
                "exercicios": [
                  {"tipo":"multipla","enunciado":"Qual sequência é correta para relatório com acessibilidade? A) Escrever texto → exportar PDF; B) Aplicar estilos → sumário → tabelas/figuras → exportar PDF com tags; C) Formatação direta → PDF.","resposta":"B"},
                  {"tipo":"certos_erro","enunciado":"(C/E) Exportar para PDF e verificar em leitor de tela valida acessibilidade.","resposta":"Certo."},
                  { "tipo": "certos_erro", "enunciado": "(C/E) A formatação direta (negrito + tamanho) é suficiente para o sumário automático reconhecer capítulos.", "resposta": "Errado. O sumário usa estilos (Título 1), não formatação direta." },
                  { "tipo": "multipla", "enunciado": "Qual a função da quebra de seção (não de página)? A) Apenas nova página; B) Nova página com formatação independente (cabeçalho, rodapé, numeração); C) Nenhuma diferença.", "resposta": "B" }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-1-unidade-3",
        "titulo": "1.3 Microsoft Excel",
        "topicos": [
          {
            "id": "modulo-1-unidade-3-topico-1",
            "titulo": "Pasta de trabalho, planilhas, células, intervalos e tabelas",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-1-sub-1",
                "titulo": "Células, intervalos e referências de intervalo",
                "objetivoAprendizagem": "Aluno compreenderá a estrutura de pasta de trabalho, planilhas, células e intervalos no Excel.",
                "conteudo": "Pasta de trabalho (workbook) é o arquivo .xlsx que contém uma ou mais planilhas (worksheets). Cada planilha é uma grade de células identificadas por coluna (letra) e linha (número), ex.: A1, B10. Intervalo é um conjunto contínuo de células (A1:B5, A1:A10). Referência de intervalo pode ser usada em fórmulas (SOMA(A1:A10)). O simulador Excel documentado neste projeto (assets/js/simulators.js) suporta referências A1, absolutas ($A$1), mistas ($A1, A$1) e intervalos A1:B5, com recálculo automático; tabelas estruturadas (Tabela1[Coluna]) e nomes definidos não são suportados (limitação declarada).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Identificar a célula na coluna C, linha 5.", "resposta": "C5 (coluna C, linha 5). Intervalo C5:C5 é a própria célula; intervalo C1:C5 inclui C5." },
                  { "tipo": "aplicacao", "enunciado": "Somar os valores de A1 a A5.", "resposta": "=SOMA(A1:A5) — referência de intervalo contínuo; equivalente a =SOMA(A1;A2;A3;A4;A5) em sintaxe pt-BR." },
                  { "tipo": "erro", "enunciado": "Um usuário escreve =SOMA(A1;B5) esperando somar A1 até B5.", "correcao": "Incorreto: ';' separa argumentos, não define intervalo. Para intervalo contínuo use ':' (=SOMA(A1:B5)). =SOMA(A1;B5) soma apenas A1 e B5." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual referência define um intervalo contínuo de A1 a D10? A) A1;D10; B) A1:D10; C) A1..D10.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) Uma pasta de trabalho pode conter várias planilhas.", "resposta": "Certo." }
                ]
              },
              {
                "id": "modulo-1-unidade-3-topico-1-sub-2",
                "titulo": "Tabelas estruturadas e referências estruturadas",
                "objetivoAprendizagem": "Aluno compreenderá tabelas estruturadas (ListObjects) e suas referências estruturadas.",
                "conteudo": "Tabela estruturada (Inserir > Tabela) converte um intervalo em tabela com cabeçalho, filtros automáticos e formatação. Referências estruturadas usam o nome da tabela e coluna (ex.: Vendas[Quantidade]) em vez de A1:B10, facilitando fórmulas que se expandem com novas linhas. O simulador documentado não suporta referências estruturadas (limitação declarada); o conteúdo didático abrange o conceito para provas teóricas.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Converter A1:D100 em tabela estruturada.", "resposta": "Selecionar A1:D100 > Inserir > Tabela (ou Ctrl+T) > marcar 'A tabela tem cabeçalhos' > OK; Excel passa a filtrar e formatar automaticamente." },
                  { "tipo": "aplicacao", "enunciado": "Somar a coluna 'Quantidade' da tabela 'Vendas'.", "resposta": "=SOMA(Vendas[Quantidade]) — referência estruturada; a fórmula acompanha a tabela ao adicionar linhas." },
                  { "tipo": "erro", "enunciado": "Um usuário afirma que referências estruturadas funcionam no simulador Excel deste projeto.", "correcao": "Incorreto: o simulador suporta apenas referências A1 (relativas/absolutas/mistas) e intervalos; tabelas estruturadas estão fora do escopo documentado." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Tabelas estruturadas expandem automaticamente ao adicionar linhas.", "resposta": "Certo (quando dentro do intervalo da tabela)." },
                  { "tipo": "multipla", "enunciado": "Qual sintaxe é de referência estruturada? A) A1:B10; B) Vendas[Quantidade]; C) $A$1.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-2",
            "titulo": "Referências relativas, absolutas e mistas; operadores",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-2-sub-1",
                "titulo": "Referências relativas, absolutas e mistas",
                "objetivoAprendizagem": "Aluno diferenciará referências relativas, absolutas e mistas no Excel.",
                "conteudo": "Referência relativa (A1) ajusta ao copiar a fórmula. Referência absoluta ($A$1) não ajusta. Referência mista ($A1 ou A$1) trava apenas coluna ou apenas linha. O simulador oferece ExcelSimulator.ajustarFormulaAoCopiar(formula; origem; destino) que aplica a regra real de ajuste (trava $ preservada; mistas ajustam apenas o eixo relativo).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Copiar =A1+B1 de B2 para C3 (relativas).", "resposta": "=B2+C2 — ambas as referências deslocam +1 coluna e +1 linha." },
                  { "tipo": "aplicacao", "enunciado": "Fixar a taxa em $B$2 ao copiar fórmula para baixo.", "resposta": "=A2*$B$2 — A2 relativa ajusta linha; $B$2 permanece fixo (absoluta)." },
                  { "tipo": "erro", "enunciado": "Um usuário copia =A$1+B1 esperando que A$1 não ajuste linha e B1 não ajuste coluna.", "correcao": "Incorreto: A$1 trava apenas a linha 1 (coluna A relativa); B1 é totalmente relativa. Resultado em C2: =B$1+C2 (coluna A→B, linha 1 fixa; B1→C2)." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual referência trava apenas a coluna A? A) $A1; B) A$1; C) $A$1.", "resposta": "A" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) Referência mista $A1 trava coluna e linha.", "resposta": "Errado. Trava apenas a coluna; a linha é relativa." }
                ]
              },
              {
                "id": "modulo-1-unidade-3-topico-2-sub-2",
                "titulo": "Operadores aritméticos, relacionais, lógicos e de texto; precedência",
                "objetivoAprendizagem": "Aluno identificará operadores do Excel e sua precedência.",
                "conteudo": "Operadores aritméticos: +, -, *, /, ^ (potência), % (porcentagem). Relacionais: =, <>, <, >, <=, >=. Lógicos: E, OU, NÃO (funções, não símbolos). Texto: & (concatenação). Precedência (do Excel): %, ^, * e /, + e -, &, = <> < > <= >=. O simulador segue a precedência do Excel (ex.: -2^2 = 4; 2^3^2 = 512; 5+10% = 5,1). Parênteses alteram a ordem. Diferença declarada: comparações encadeadas (1=1=1) são avaliadas da esquerda para a direita no simulador; o Excel rejeita a sintaxe.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Calcular 5 + 10%.", "resposta": "=5+10% = 5,1 (o % divide 10 por 100 antes da soma)." },
                  { "tipo": "aplicacao", "enunciado": "Concatenar nome e sobrenome com espaço.", "resposta": "=A1&\" \"&B1 — operador & une textos; aspas duplas delimitam literais." },
                  { "tipo": "erro", "enunciado": "Um usuário espera que 2^3^2 resulte 64 (associatividade à esquerda).", "correcao": "Incorreto: a potência é associativa à direita no Excel e no simulador: 2^(3^2) = 2^9 = 512." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual a ordem de precedência maior: A) + ; B) * ; C) ^ ?", "resposta": "C" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) O operador & é aritmético.", "resposta": "Errado. & é operador de texto (concatenação)." }
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-3",
            "titulo": "Tipos de dados, datas e funções essenciais",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-3-sub-1",
                "titulo": "Tipos de dados, datas, horários e formatos numéricos",
                "objetivoAprendizagem": "Aluno compreenderá tipos de dados do Excel e o tratamento de datas/horários.",
                "conteudo": "Tipos: número (inteiros/decimais), texto, lógico (VERDADEIRO/FALSO), data/hora (armazenada como número serial: dias desde 01/01/1900 no sistema Windows), erro (#N/A, #REF!, #VAL!, #DIV/0!, #NUM!). Formatos numéricos alteram a exibição sem alterar o valor. Datas são números: 01/01/1900 = 1. Aritmética de datas é possível (subtrair datas dá dias). O simulador oferece HOJE() (data real do sistema, formato AAAA/MM/DD) e não formata células (limitação declarada).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Diferença entre 10/05/2024 e 01/05/2024.", "resposta": "=B2-A2 (onde A2 e B2 são datas) retorna 9 (dias), porque datas são seriais." },
                  { "tipo": "aplicacao", "enunciado": "Obter a data atual.", "resposta": "=HOJE() retorna a data do sistema no formato AAAA/MM/DD (ex.: 2026/10/23)." },
                  { "tipo": "erro", "enunciado": "Um usuário soma '10' (texto) com 5 e espera 15.", "correcao": "Incorreto: texto não numérico em operação aritmética gera #VAL! no simulador (e no Excel, dependendo do contexto). Converter com a função VALOR() do Excel (não suportada no simulador) ou garantir tipo numérico." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Como o Excel armazena internamente uma data? A) Texto; B) Número serial; C) Objeto de data.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) Alterar o formato de número muda o valor armazenado.", "resposta": "Errado. Formato altera apenas a exibição." }
                ]
              },
              {
                "id": "modulo-1-unidade-3-topico-3-sub-2",
                "titulo": "Funções matemáticas, estatísticas, lógicas, condicionais, textuais e de data",
                "objetivoAprendizagem": "Aluno utilizará as funções essenciais do Excel: SE, SES, E, OU, NÃO, SEERRO, CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIA, MÉDIASE, MÁXIMO, MÍNIMO, CONT.VALORES, entre outras.",
                "conteudo": "Funções matemáticas/estatísticas: SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO, CONT.VALORES. Lógicas/condicionais: SE, SES (nesta implementação SES é alias de E — atenção: no Excel real SES é SE com múltiplas condições; aqui SES=E por decisão documentada do simulador), E, OU, NÃO, SEERRO (avalia preguiçosamente apenas o ramo usado). Condicionais com critério: CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIASE (critérios aceitam operadores >=, <=, <>, >, <, = ou igualdade). O simulador suporta essas funções com busca/cálculo reais; SES é alias de E (limitação declarada). Aliases em inglês: SUM, AVERAGE, MAX, MIN, COUNTA, IF, AND, OR, NOT, IFERROR, COUNTIF, COUNTIFS, SUMIF, SUMIFS, AVERAGEIF.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Média de A1:A5.", "resposta": "=MÉDIA(A1:A5) — soma dos valores numéricos dividida pela quantidade (ignora texto/vazio em intervalos)." },
                  { "tipo": "aplicacao", "enunciado": "Contar valores maiores que 7 em A1:A10.", "resposta": "=CONT.SE(A1:A10; \">7\") — critério com operador relacional." },
                  { "tipo": "erro", "enunciado": "Um usuário espera que SES(cond1; val1; cond2; val2) funcione como SE encadeado.", "correcao": "Incorreto no simulador: SES é alias de E (retorna VERDADEIRO/FALSO). Para SE encadeado use SE aninhado: =SE(cond1; val1; SE(cond2; val2; val3))." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual função retorna a maior valor de um intervalo? A) MÉDIA; B) MÁXIMO; C) SOMA.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) CONT.VALORES conta células vazias.", "resposta": "Errado. CONT.VALORES conta células não vazias (texto, número, lógico, erro); células vazias são ignoradas. Observação documentada: o simulador trata texto vazio como vazio (diferença pontual em relação ao Excel real, que conta texto vazio)." }
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-4",
            "titulo": "Pesquisa e referência; erros e fórmulas aninhadas",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-4-sub-1",
                "titulo": "PROCV, PROCH, PROCX, ÍNDICE e CORRESP; correspondência exata vs aproximada",
                "objetivoAprendizagem": "Aluno utilizará funções de pesquisa e referência e distinguirá correspondência exata de aproximada.",
                "conteudo": "PROCV (busca vertical), PROCH (busca horizontal), PROCX (busca moderna, exata por padrão, com argumento se_não_encontrado), ÍNDICE (retorna valor por linha/coluna), CORRESP (retorna posição). Correspondência exata: valor procurado deve ser igual. Aproximada: último valor <= alvo (crescente) ou primeiro >= alvo (decrescente) — exige ordenação; sem ordenação o resultado é imprevisível (limitação declarada). O simulador implementa busca real para essas funções. Erros: #N/A (não encontrado), #REF! (índice fora do intervalo), #VAL! (tipo incompatível).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Buscar preço do produto 'Caneta' em tabela (PROCV exato).", "resposta": "=PROCV(\"Caneta\"; A1:B10; 2; FALSO) retorna o valor da 2ª coluna da linha onde a 1ª coluna = 'Caneta'; FALSO = correspondência exata." },
                  { "tipo": "aplicacao", "enunciado": "Usar PROCX com valor não encontrado customizado.", "resposta": "=PROCX(20; A1:A3; B1:B3; \"não há\") retorna B correspondente a 20 ou \"não há\" se não existir." },
                  { "tipo": "erro", "enunciado": "Um usuário usa PROCV aproximado (VERDADEIRO) em tabela não ordenada.", "correcao": "Incorreto/impredizível: correspondência aproximada exige 1ª coluna numérica em ordem crescente. Em tabela desordenada o resultado pode ser qualquer valor <= alvo. Use FALSO para exata ou ordene a tabela." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual argumento do PROCV ativa correspondência exata? A) VERDADEIRO; B) FALSO; C) 0.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) ÍNDICE retorna a posição de um valor.", "resposta": "Errado. ÍNDICE retorna o valor; CORRESP retorna a posição." }
                ]
              },
              {
                "id": "modulo-1-unidade-3-topico-4-sub-2",
                "titulo": "Células vazias, erros e fórmulas aninhadas",
                "objetivoAprendizagem": "Aluno tratará células vazias, erros e fórmulas aninhadas no Excel.",
                "conteudo": "Células vazias: em critérios (CONT.SE etc.) nunca casam com critérios numéricos (vazio conta como 0 em '='0 no Excel real — diferença declarada); em operações aritméticas vazio vale 0; em concatenação vazio vale \"\". Erros: #N/A, #REF!, #VAL!, #DIV/0!, #NUM!. SEERRO captura erros e retorna valor alternativo. Fórmulas aninhadas: funções dentro de funções (ex.: =SEERRO(PROCV(...); \"não encontrado\")); avaliação passo a passo de dentro para fora. O simulador avalia fórmulas aninhadas recursivamente e SE/SEERRO preguiçosamente (apenas o ramo usado).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Evitar #N/A em PROCV.", "resposta": "=SEERRO(PROCV(\"X\"; A1:B10; 2; FALSO); \"não encontrado\") — se PROCV retornar #N/A, SEERRO retorna o texto." },
                  { "tipo": "aplicacao", "enunciado": "Fórmula aninhada: SE com MÉDIA.", "resposta": "=SE(MÉDIA(A1:A5)>=7; \"aprovado\"; \"reprovado\") — MÉDIA avaliada primeiro, depois SE." },
                  { "tipo": "erro", "enunciado": "Um usuário espera que SEERRO capture #VAL! de texto não numérico.", "correcao": "Certo no simulador: SEERRO captura qualquer erro (incluindo #VAL!). Mas se o erro ocorrer em argumento avaliado antes (ex.: MÉDIA de texto), SEERRO ao redor captura. Atenção: SEERRO não captura erros de entrada ('ERRO DE ENTRADA') levantados antes da execução." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual função captura erros e retorna alternativa? A) SE; B) SEERRO; C) NÃO.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) Em critérios do simulador, célula vazia casa com critério numérico 0.", "resposta": "Errado (limitação declarada: vazio nunca casa com critério numérico no simulador)." }
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-5",
            "titulo": "Classificação, filtros, validação, formatação condicional e visualização",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-5-sub-1",
                "titulo": "Classificação, filtros, validação de dados e formatação condicional",
                "objetivoAprendizagem": "Aluno aplicará classificação, filtros, validação de dados e formatação condicional.",
                "conteudo": "Classificação (Ordenar) reorganiza linhas por critério (crescente/decrescente, múltiplos níveis). Filtros (AutoFiltro) exibem subconjunto de linhas conforme critério. Validação de dados restringe entrada (lista, número, data, texto, fórmula) e exibe mensagem de erro. Formatação condicional aplica formato (cor, ícone, barra) conforme regra (escala de cores, conjunto de ícones, fórmula). Esses recursos são interface do Excel; o simulador documentado não os executa (limitação declarada), mas o conteúdo didático abrange para provas.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Validar entrada de 'Status' com lista suspensa.", "resposta": "Dados > Validação de Dados > Permitir: Lista > Fonte: Aprovado;Reprovado;Pendente > OK; célula exibe lista suspensa." },
                  { "tipo": "aplicacao", "enunciado": "Formatar condicionalmente células > 7 em verde.", "resposta": "Selecionar intervalo > Formatação Condicional > Regra de Realce de Células > Maior que > 7 > formato verde." },
                  { "tipo": "erro", "enunciado": "Um usuário afirma que a validação de dados impede a digitação de valores inválidos sempre.", "correcao": "Incorreto: a validação padrão pode ser ignorada (colar valor, importar). Para bloquear de fato, marcar 'Mostrar alerta de erro' com estilo 'Parar' e validar também no nível de proteção de planilha." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual recurso restringe a entrada de dados em uma célula? A) Filtro; B) Validação de dados; C) Formatação condicional.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) Formatação condicional altera o valor da célula.", "resposta": "Errado. Altera apenas a aparência." }
                ]
              },
              {
                "id": "modulo-1-unidade-3-topico-5-sub-2",
                "titulo": "Gráficos, tabelas dinâmicas, campos, agregações e segmentações",
                "objetivoAprendizagem": "Aluno compreenderá gráficos, tabelas dinâmicas, campos, agregações e segmentações no Excel.",
                "conteudo": "Gráficos (Inserir > Gráfico) visualizam dados (colunas, linhas, pizza, dispersão). Tabela dinâmica (PivotTable) resume dados por campos (linhas, colunas, valores, filtros) com agregações (SOMA, MÉDIA, CONTAGEM). Segmentação de dados (Slicer) filtra tabelas dinâmicas por botões. Campos calculados permitem fórmulas dentro da tabela dinâmica. Esses recursos são interface do Excel; o simulador documentado não os executa (limitação declarada).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Criar tabela dinâmica de vendas por região.", "resposta": "Selecionar dados > Inserir > Tabela Dinâmica > arrastar 'Região' para Linhas e 'Valor' para Valores (agregação SOMA) > OK." },
                  { "tipo": "aplicacao", "enunciado": "Adicionar segmentação por 'Ano'.", "resposta": "Selecionar tabela dinâmica > Inserir Segmentação de Dados > marcar 'Ano' > OK; botões filtram a tabela dinâmica." },
                  { "tipo": "erro", "enunciado": "Um usuário afirma que tabela dinâmica atualiza automaticamente ao mudar a fonte de dados.", "correcao": "Incorreto: é necessário atualizar (Atualizar Tudo ou Atualizar) para refletir alterações na fonte de dados." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual recurso resume dados por campos com agregações? A) Gráfico; B) Tabela dinâmica; C) Filtro.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) Segmentação de dados funciona apenas em tabelas dinâmicas.", "resposta": "Errado. Funciona também em tabelas estruturadas do Excel (versões recentes)." }
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-6",
            "titulo": "Importação, proteção, desempenho e compatibilidade",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-6-sub-1",
                "titulo": "Power Query: importação, limpeza e transformação de dados",
                "objetivoAprendizagem": "Aluno compreenderá a importação, limpeza e transformação de dados com Power Query.",
                "conteudo": "Power Query (Obter Dados) importa de fontes (CSV, web, banco de dados, pasta) e permite transformações (remover colunas, filtrar, mesclar, acrescentar, tipo de dados, coluna personalizada) com interface gráfica e linguagem M. As transformações são reaplicadas ao atualizar. Diferença de ETL/ELT: Power Query faz ETL (extrair, transformar, carregar) no Excel. O conteúdo didático abrange o conceito para provas; o simulador não executa Power Query (limitação declarada).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Importar CSV e remover colunas vazias.", "resposta": "Dados > Obter Dados > De Arquivo > De Texto/CSV > selecionar arquivo > Transformar Dados > remover colunas > Fechar e Carregar." },
                  { "tipo": "aplicacao", "enunciado": "Mesclar duas tabelas por chave.", "resposta": "Power Query > Mesclar Consultas > selecionar tabelas e coluna-chave > tipo de junção (interna, esquerda) > Expandir colunas desejadas." },
                  { "tipo": "erro", "enunciado": "Um usuário afirma que Power Query atualiza automaticamente ao mudar o arquivo-fonte.", "correcao": "Incorreto: é necessário atualizar (Atualizar Tudo) para reaplicar as etapas e recarregar os dados." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual ferramenta do Excel importa e transforma dados de fontes externas? A) Power Pivot; B) Power Query; C) Power View.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) Power Query usa a linguagem M para transformações.", "resposta": "Certo." }
                ]
              },
              {
                "id": "modulo-1-unidade-3-topico-6-sub-2",
                "titulo": "Proteção, desempenho, depuração e compatibilidade; simulador Excel",
                "objetivoAprendizagem": "Aluno compreenderá proteção de planilhas, desempenho, depuração e compatibilidade, além do escopo do simulador Excel.",
                "conteudo": "Proteção: proteger planilha (impedir edição de células bloqueadas) e proteger pasta de trabalho (impedir alteração de estrutura). Desempenho: evitar fórmulas voláteis excessivas (AGORA, ALEATÓRIO), usar tabelas estruturadas, limitar intervalos inteiros (A:A). Depuração: Rastrear Precedentes/Dependentes, Avaliar Fórmula, verificação de erros. Compatibilidade: funções de diferentes versões (PROCX disponível em versões recentes; PROCV em todas). Simulador Excel documentado (assets/js/simulators.js): suporta SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO, CONT.VALORES, SE, SES (alias de E), E, OU, NÃO, SEERRO, CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIASE, PROCV, PROCH, PROCX, CORRESP, ÍNDICE, HOJE, operadores aritméticos/relacionais/lógicos/texto, referências A1 relativas/absolutas/mistas e intervalos, com busca/cálculo reais e rejeição de entradas inválidas. Não suporta: tabelas estruturadas, nomes definidos, R1C1, matrizes dinâmicas, spilling, LET/LAMBDA, formatação de célula, arquivos externos. Não testado em navegador real (verificado com node --check e smoke test em Node/vm).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Depurar uma fórmula que retorna #REF!.", "resposta": "Fórmulas > Rastrear Erro > Rastrear Precedentes; identificar célula com referência inválida; corrigir." },
                  { "tipo": "aplicacao", "enunciado": "Proteger planilha permitindo edição apenas de B2:B10.", "resposta": "Selecionar B2:B10 > Formatar Células > Proteção > desmarcar 'Bloqueada' > Revisar > Proteger Planilha (senha opcional)." },
                  { "tipo": "erro", "enunciado": "Um usuário afirma que o simulador Excel executa tabelas estruturadas.", "correcao": "Incorreto: o simulador suporta apenas referências A1 e intervalos; tabelas estruturadas estão fora do escopo documentado (limitação declarada em assets/js/simulators.js)." }
                ],
                "exercicios": [
                  { "tipo": "multipla", "enunciado": "Qual função é volátil e recalcula a cada alteração? A) SOMA; B) AGORA; C) MÁXIMO.", "resposta": "B" },
                  { "tipo": "certos_erro", "enunciado": "(C/E) PROCX está disponível em todas as versões do Excel.", "resposta": "Errado. PROCX foi introduzido em versões recentes (Microsoft 365/Excel 2021+)." }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-1-unidade-4",
        "titulo": "1.4 Microsoft PowerPoint",
        "topicos": [
          {
            "id": "modulo-1-unidade-4-topico-1",
            "titulo": "Apresentações, layouts, animações e apresentação",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-4-topico-1-sub-1",
                "titulo": "Slide Mestre, layouts, animações, transições e apresentação",
                "objetivoAprendizagem": "Aluno compreenderá Slide Mestre, layouts, animações, transições e modos de apresentação no PowerPoint.",
                "conteudo": "PowerPoint organiza conteúdo em slides com hierarquia de layouts baseados no Slide Mestre (Slide Master). Slide Mestre define tipografia, cores, logotipos e layouts filhos; alterar o mestre propaga para todos os slides vinculados. Layouts (Título, Título e Conteúdo, Comparação, Em branco) determinam a disposição dos placeholders. Tipografia requer contraste adequado (ex.: fundo claro + texto escuro; evitar combinações de baixo contraste como amarelo/claro). Animações aplicam efeitos a objetos individuais (entrada, ênfase, saída) com ordem, duração e gatilhos configuráveis. Transições são efeitos entre slides (fade, push, wipe). Modo de apresentação (Slide Show) inclui exibição do apresentador com notas, cronômetro e navegação; notas não são visíveis ao público por padrão. Acessibilidade exige ordem de leitura lógica (via Painel de Seleção), texto alternativo para imagens, contraste adequado e fontes legíveis. Exportação para PDF preserva layout; para apresentação offline, usar 'Empacotar Apresentação para CD' (Package Presentation) incluindo fontes vinculadas e mídia.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Configurar um Slide Mestre com logotipo, fonte e cor corporativos.", "resposta": "Exibir > Slide Mestre → editar o mestre principal (layout pai) com logotipo, fontes (título: Arial 28pt; corpo: Arial 16pt) e cores; todos os layouts filhos herdam essas propriedades." },
                  { "tipo": "aplicacao", "enunciado": "Aplicar animação sequencial a uma lista de 4 itens com atraso progressivo.", "resposta": "Selecionar cada item → Animações → Adicionar animação (ex: Aparecer) → Painel de Animação → configurar ordem, duração (0,5s) e atraso progressivo (0,2s entre itens) → gatilho: ao clicar." },
                  { "tipo": "erro", "enunciado": "Um usuário afirma que animações e transições são o mesmo conceito.", "correcao": "Incorreto: animações = efeitos dentro de um slide (objetos); transições = efeitos entre slides. Confundir os dois leva a apresentações com ritmo inadequado (excesso de efeitos entre slides quando o objetivo é destacar conteúdo interno)." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) A alteração do Slide Mestre afeta apenas o slide atual.", "resposta": "Errado. O Slide Mestre afeta todos os slides vinculados ao mestre e seus layouts filhos." },
                  { "tipo": "multipla", "enunciado": "Qual diferença entre animação e transição? A) Nenhuma; B) Animação = dentro do slide, transição = entre slides; C) Transição = dentro do slide.", "resposta": "B" }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-1-unidade-5",
        "titulo": "1.5 OneDrive e Colaboração",
        "topicos": [
          {
            "id": "modulo-1-unidade-5-topico-1",
            "titulo": "Sincronização, versionamento, compartilhamento e segurança",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-5-topico-1-sub-1",
                "titulo": "OneDrive: sincronização, coautoria, histórico de versões, compartilhamento e permissões",
                "objetivoAprendizagem": "Aluno compreenderá sincronização, coautoria, histórico de versões, compartilhamento e permissões no OneDrive.",
                "conteudo": "OneDrive é o serviço de armazenamento em nuvem integrado ao M365. Sincronização (Sync): cliente OneDrive baixa cópia local dos arquivos e mantém sincronização bidirecional; alterações locais propagam para a nuvem e vice-versa. Coautoria: múltiplos usuários editam o mesmo arquivo (Word, Excel, PowerPoint) simultaneamente com indicações de presença (nome, cursor colorido) e resolução de conflitos (última alteração prevalece quando offline). Histórico de versões: cada arquivo armazena versões anteriores (período padrão e quantidade máxima conforme o plano/serviço — conferir na documentação oficial do produto); restauração não exclui versão atual — cria cópia restaurada. Compartilhamento: link com permissões (visualizar, editar, revisar, comentar); opções de expiração de link e bloqueio de download; compartilhamento externo requer cuidado com LGPD (ver Módulo 4.1, referência oficial verificada: Lei 13.709/2018 art. 46 — medidas de segurança). Permissões de arquivo/pasta: proprietário, coautor, revisor, visualizador; alteração de permissões é registrada no log de atividades (Audit Log no M365 Admin Center — não implementado neste simulador). Backup: OneDrive NÃO substitui backup corporativo completo; é sincronização, não backup imutável (ransomware pode propagar alterações maliciosas para nuvem). A recomendação oficial (sem inventar estatísticas) é manter backup separado (3-2-1: 3 cópias, 2 mídias, 1 offsite) conforme boas práticas de segurança, sem citar porcentagem não verificada.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Ativar sincronização seletiva para uma pasta grande.", "resposta": "OneDrive > Configurações > Conta > Escolher pastas → desmarcar pastas não necessárias localmente; arquivo permanece na nuvem, acessível sob demanda (Files On-Demand)." },
                  { "tipo": "aplicacao", "enunciado": "Restaurar versão anterior de um documento editado por engano há 3 dias.", "resposta": "Abrir arquivo no OneDrive web → Histórico de versões → selecionar versão de 3 dias atrás → Restaurar; uma cópia da versão atual é preservada automaticamente." },
                  { "tipo": "erro", "enunciado": "Um usuário afirma que o OneDrive é um backup completo e protege contra ransomware automaticamente.", "correcao": "Incorreto: OneDrive sincroniza; alterações (inclusive maliciosas) propagam. A proteção real exige backup imutável separado (offsite, não sincronizado) + medidas de segurança (ver LGPD art. 46, referência verificada no arquivo `referencias/referencias-verificadas.md`). Nenhuma estatística de eficácia inventada." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) OneDrive é um backup imutável e protege automaticamente contra ransomware.", "resposta": "Errado. OneDrive sincroniza; alterações (inclusive maliciosas) propagam. Backup imutável separado é necessário." },
                  { "tipo": "multipla", "enunciado": "Qual a diferença entre sincronização e backup? A) Nenhuma; B) Sincronização = propagação bidirecional; backup = cópia independente e imutável; C) Sincronização é apenas download.", "resposta": "B" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};

/* Módulo 1 — 1.4 PowerPoint: MIGRADO para curriculum['modulo-1'].unidades (modulo-1-unidade-4) — const mantida comentada. */
/* const curriculumPowerPoint14 = {
  "modulo-1-unidade-4": {
    "id": "modulo-1-unidade-4",
    "titulo": "1.4 Microsoft PowerPoint",
    "conteudoGeral": "PowerPoint organiza conteúdo em slides com hierarquia de layouts baseados no Slide Mestre (Slide Master). Slide Mestre define tipografia, cores, logotipos e layouts filhos; alterar o mestre propaga para todos os slides vinculados. Layouts (Título, Título e Conteúdo, Comparação, Em branco) determinam a disposição dos placeholders. Tipografia requer contraste adequado (ex: fundo claro + texto escuro; evitar combinações de baixo contraste como amarelo/claro). Animações aplicam efeitos a objetos individuais (entrada, ênfase, saída) com ordem, duração e gatilhos configuráveis. Transições são efeitos entre slides (fade, push, wipe). Modo de apresentação (Slide Show) inclui exibição do apresentador com notas, cronômetro e navegação; notas não são visíveis ao público por padrão. Acessibilidade exige ordem de leitura lógica (via Painel de Seleção), texto alternativo para imagens, contraste adequado e fontes legíveis. Exportação para PDF preserva layout; para apresentação offline, usar 'Empacotar Apresentação para CD' (Package Presentation) incluindo fontes vinculadas e mídia.",
    "exemplos": [
      { "tipo": "introducao", "enunciado": "Configurar um Slide Mestre com logotipo, fonte e cor corporativos.", "resposta": "Exibir > Slide Mestre → editar o mestre principal (layout pai) com logotipo, fontes (título: Arial 28pt; corpo: Arial 16pt) e cores; todos os layouts filhos herdam essas propriedades." },
      { "tipo": "aplicacao", "enunciado": "Aplicar animação sequencial a uma lista de 4 itens com atraso progressivo.", "resposta": "Selecionar cada item → Animações → Adicionar animação (ex: Aparecer) → Painel de Animação → configurar ordem, duração (0,5s) e atraso progressivo (0,2s entre itens) → gatilho: ao clicar." },
      { "tipo": "erro", "enunciado": "Um usuário afirma que animações e transições são o mesmo conceito.", "correcao": "Incorreto: animações = efeitos dentro de um slide (objetos); transições = efeitos entre slides. Confundir os dois leva a apresentações com ritmo inadequado (excesso de efeitos entre slides quando o objetivo é destacar conteúdo interno)." }
    ],
    "exercicios": [
      { "tipo": "certos_erro", "enunciado": "(C/E) A alteração do Slide Mestre afeta apenas o slide atual.", "resposta": "Errado. O Slide Mestre afeta todos os slides vinculados ao mestre e seus layouts filhos." },
      { "tipo": "multipla", "enunciado": "Qual diferença entre animação e transição? A) Nenhuma; B) Animação = dentro do slide, transição = entre slides; C) Transição = dentro do slide.", "resposta": "B" }
    ]
  }
};
*/
/* Fim M1.4 PowerPoint — MIGRADO: const comentada (conteúdo movido para modulo-1-unidade-4) */

/* Módulo 1 - 1.2 Word: tópicos já implementados: 1 (interface), 2 (formatação direta vs estilos), 3 (parágrafos), 4 (listas), 5 (cabeçalhos/rodapés), 6 (quebras), 7 (sumários), 8 (referências cruzadas/legendas/índices), 9 (tabelas/imagens/formas/disposição texto), 10 (revisão/comentários/controle alterações), 11 (proteção/restrições/permissões), 12 (acessibilidade/verificação ortográfica/PDF), 13 (compatibilidade formatos/problemas formatação), 14 (exemplos resolvidos) */
/* Módulo 1 - 1.3 Excel: COMPLETO (P1-C/P1-D) — 6 tópicos, 12 subtópicos, cada um com objetivoAprendizagem + conteudo + >=3 exemplos (introducao/aplicacao/erro) + >=2 exercicios. Simulador documentado (assets/js/simulators.js): SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO, CONT.VALORES, SE, SES (alias de E), E, OU, NÃO, SEERRO, CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIASE, PROCV, PROCH, PROCX, CORRESP, ÍNDICE, HOJE + operadores e referências A1 relativas/absolutas/mistas; rejeita entradas inválidas com mensagem útil. */
/* Módulo 1 — 1.4 PowerPoint: PARCIAL — conteúdo base implementado (slide mestre, layouts, animações vs transições, modos apresentação, notas, exportação, acessibilidade) */
/* Módulo 4 — 4.1 Segurança / LGPD: PARCIAL — conteúdo base (referência oficial verificada: Lei 13.709/2018; art. 1º, 2º, 3º, 4º, 5º, 17, 18, 46 confirmados; arquivo referencias/referencias-verificadas.md criado) */
/* Módulo 1 - 1.5 OneDrive: PARCIAL — conteúdo base (sincronização, coautoria, histórico versões, compartilhamento/permissões, backup) + 3 exemplos + 2 exercícios */
/* COMPLEMENTO M1.2 WORD — 3 exemplos resolvidos + 2 exercícios autorais */
/* const curriculumWord12Supplement = {
  "modulo-1-unidade-2-exemplos-complemento": {
    "id": "m1-u2-suppl",
    "titulo": "1.2 Word — Exemplos resolvidos complementares (adicionados neste incremento)",
    "exemplos": [
      { "tipo": "introducao", "enunciado": "Criar sumário automático a partir de estilos de título.", "resposta": "Aplicar estilo 'Título 1' a cada capítulo → Referências > Sumário > Sumário Automático 1 → o campo atualiza automaticamente quando títulos mudam (atualizar campo)" },
      { "tipo": "aplicacao", "enunciado": "Configurar cabeçalhos diferentes por seção (corpo vs anexos com numeração romana).", "resposta": "Inserir Quebra de Seção (Next Page) → desmarcar 'Vincular ao anterior' no cabeçalho de cada seção → inserir cabeçalho específico por seção → configurar numeração de páginas por seção." },
      { "tipo": "erro", "enunciado": "Um documento com sumário vazio após atualização do campo.", "correcao": "Verificar se capítulos têm estilo 'Título 1' aplicado (não apenas formatação direta); confirmar que o campo do sumário está inserido (não texto estático); excluir sumário antigo e reinserir via Referências > Sumário." }
    ],
    "exercicios": [
      { "tipo": "certos_erro", "enunciado": "(C/E) A formatação direta (negrito + tamanho) é suficiente para o sumário automático reconhecer capítulos.", "resposta": "Errado. O sumário usa estilos (Título 1), não formatação direta." },
      { "tipo": "multipla", "enunciado": "Qual a função da quebra de seção (não de página)? A) Apenas nova página; B) Nova página com formatação independente (cabeçalho, rodapé, numeração); C) Nenhuma diferença.", "resposta": "B" }
    ]
  }
};
*/
/* Fim M1.2 Word complemento — MIGRADO: const comentada (conteúdo movido para modulo-1-unidade-2) */
/* Módulo 1 - 1.2 Word: PARCIAL (texto OK) → COMPLEMENTADO: 3 exemplos resolvidos + 2 exercícios autorais adicionados no incremento atual */
/* Módulo 2 - Redes: A SER IMPLEMENTADO */
/* Módulo 3 - Comunicação e Colaboração: A SER IMPLEMENTADO */
/* Módulo 4 - Segurança da Informação: A SER IMPLEMENTADO */
/* Módulo 5 - IA: A SER IMPLEMENTADO */
/* Módulo 6 - Ética e Responsabilidade Digital: A SER IMPLEMENTADO */
/* Módulo 7 - Fundamentos e Engenharia de Dados: A SER IMPLEMENTADO */
/* Módulo 8 - Visualização, Análise e Storytelling: A SER IMPLEMENTADO */

/* Módulo 1 - 1.5 OneDrive: MIGRADO para curriculum['modulo-1'].unidades (modulo-1-unidade-5) — const mantida comentada. */
/* const curriculumOneDrive15 = {
  "modulo-1-unidade-5": {
    "id": "modulo-1-unidade-5",
    "titulo": "1.5 OneDrive e Colaboração",
    "conteudoGeral": "OneDrive é o serviço de armazenamento em nuvem integrado ao M365. Sincronização (Sync): cliente OneDrive baixa cópia local dos arquivos e mantém sincronização bidirecional; alterações locais propagam para a nuvem e vice-versa. Coautoria: múltiplos usuários editam o mesmo arquivo (Word, Excel, PowerPoint) simultaneamente com indicações de presença (nome, cursor colorido) e resolução de conflitos (última alteração prevalece quando offline). Histórico de versões: cada arquivo armazena versões anteriores (período padrão e quantidade máxima conforme o plano/serviço — conferir na documentação oficial do produto); restauração não exclui versão atual — cria cópia restaurada. Compartilhamento: link com permissões (visualizar, editar, revisar, comentar); opções de expiração de link e bloqueio de download; compartilhamento externo requer cuidado com LGPD (ver Módulo 4.1, referência oficial verificada: Lei 13.709/2018 art. 46 — medidas de segurança). Permissões de arquivo/pasta: proprietário, coautor, revisor, visualizador; alteração de permissões é registrada no log de atividades (Audit Log no M365 Admin Center — não implementado neste simulador). Backup: OneDrive NÃO substitui backup corporativo completo; é sincronização, não backup imutável (ransomware pode propagar alterações maliciosas para nuvem). A recomendação oficial (sem inventar estatísticas) é manter backup separado (3-2-1: 3 cópias, 2 mídias, 1 offsite) conforme boas práticas de segurança, sem citar porcentagem não verificada.",
    "exemplos": [
      { "tipo": "introducao", "enunciado": "Ativar sincronização seletiva para uma pasta grande.", "resposta": "OneDrive > Configurações > Conta > Escolher pastas → desmarcar pastas não necessárias localmente; arquivo permanece na nuvem, acessível sob demanda (Files On-Demand)." },
      { "tipo": "aplicacao", "enunciado": "Restaurar versão anterior de um documento editado por engano há 3 dias.", "resposta": "Abrir arquivo no OneDrive web → Histórico de versões → selecionar versão de 3 dias atrás → Restaurar; uma cópia da versão atual é preservada automaticamente." },
      { "tipo": "erro", "enunciado": "Um usuário afirma que o OneDrive é um backup completo e protege contra ransomware automaticamente.", "correcao": "Incorreto: OneDrive sincroniza; alterações (inclusive maliciosas) propagam. A proteção real exige backup imutável separado (offsite, não sincronizado) + medidas de segurança (ver LGPD art. 46, referência verificada no arquivo `referencias/referencias-verificadas.md`). Nenhuma estatística de eficácia inventada." }
    ],
    "exercicios": [
      { "tipo": "certos_erro", "enunciado": "(C/E) OneDrive é um backup imutável e protege automaticamente contra ransomware.", "resposta": "Errado. OneDrive sincroniza; alterações (inclusive maliciosas) propagam. Backup imutável separado é necessário." },
      { "tipo": "multipla", "enunciado": "Qual a diferença entre sincronização e backup? A) Nenhuma; B) Sincronização = propagação bidirecional; backup = cópia independente e imutável; C) Sincronização é apenas download.", "resposta": "B" }
    ]
  }
};
*/
/* Fim M1.5 OneDrive — MIGRADO: const comentada (conteúdo movido para modulo-1-unidade-5) */
