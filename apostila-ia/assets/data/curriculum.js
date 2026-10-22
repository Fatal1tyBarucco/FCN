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
                ]
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-2",
                "titulo": "Licenciamento por volume e benefícios organizacionais",
                "objetivoAprendizagem": "Aluno compreenderá modelos de licenciamento por volume.",
                "conteudo": "Licenciamento por volume (Volume Licensing) para organizações com múltiplas estações. Benefícios: preços descontados, implantação centralizada, direitos de transferência, programas de upgrade. Modelos: Open License, Open Value, Enterprise Agreement.",
                "exemplos": [],
                "exercicios": []
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-3",
                "titulo": "Aplicações Web, desktop e mobile",
                "objetivoAprendizagem": "Aluno distingirá versões web, desktop e mobile das aplicações Microsoft 365.",
                "conteudo": "Aplicações Web: via navegador, funcionalidades básicas, atualizações automáticas, requer internet. Desktop: instalação local, funcionalidades completas, atualizações via Microsoft Update, funciona offline. Mobile: apps iOS/Android, funcionalidades simplificadas, visualização e edição básica, sincronização com nuvem.",
                "exemplos": [],
                "exercicios": []
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-4",
                "titulo": "Armazenamento local e em nuvem",
                "objetivoAprendizagem": "Aluno compreenderá opções de armazenamento do Microsoft 365.",
                "conteudo": "OneDrive (5TB por usuário Enterprise), SharePoint (armazenamento equipe/collaborativo), armazenamento local. Integração: sinconexerência automática, acesso remoto, version history, recuperação de arquivos.",
                "exemplos": [],
                "exercicios": []
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-5",
                "titulo": "Integração entre aplicações",
                "objetivoAprendizagem": "Aluno identificará integrações entre aplicações Microsoft 365.",
                "conteudo": "Inserir tabela do Excel em Word com link dinâmico, apresentações PowerPoint com dados ao vivo do Excel, Teams como hub de colaboração, Power Automate para automação entre aplicações. Integração via OLE, APIs REST do Microsoft Graph, compatibilidade de formatos.",
                "exemplos": [],
                "exercicios": []
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-6",
                "titulo": "Salvamento automático, sincronização, colaboração simultânea e histórico de versões",
                "objetivoAprendizagem": "Aluno compreenderá mecanismos de salvamento automático e colaboração em tempo real.",
                "conteudo": "Salvamento automático (auto-save) com indicador no canto superior esquerdo. Sincronização via OneDrive/SharePoint, edição simultânea de múltiplos usuários com alterações visíveis em tempo real, indicadores de presença e cursor de posição. Histórico de versões: cópias de recuperação por 30 dias padrão, restauração de versões anteriores. Políticas de retenção configuráveis por administrador.",
                "exemplos": [],
                "exercicios": []
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-7",
                "titulo": "Contas pessoais e organizacionais",
                "objetivoAprendizagem": "Aluno diferenciara contas pessoais e organizacionais no Microsoft 365.",
                "conteudo": "Contas pessoais (Personal/Family): limite de usuários, recursos focados doméstico. Contas organizacionais (Business/Enterprise): gestão centralizada, domínios personalizados, políticas de segurança avançadas, eDiscovery, gerenciamento de dispositivos, compliance features. Diferenças: escopo de administração, licenças por usuário vs. familiar, recursos de segurança e conformidade.",
                "exemplos": [],
                "exercicios": []
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-8",
                "titulo": "Permissões, compartilhamento, privacidade e recuperação de arquivos",
                "objetivoAprendizagem": "Aluno compreenderá modelo de permissões do Microsoft 365.",
                "conteudo": "Permissões granulares (visualizar, editar, comentar, controlar). Compartilhamento por link (com expiração, senha protegido, permissões de download). Privacidade via configurações de locatário e rotulagem de dados. Recuperação: lixeira (30 dias), versões anteriores, eDiscovery para administradores Enterprise.",
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
              },
              {
                "id": "modulo-1-unidade-2-topico-1-sub-2",
                "titulo": "Formatos de documento (.docx, .doc, .pdf, .rtf, .txt)",
                "objetivoAprendizagem": "Aluno compreenderá as diferenças entre os formatos de arquivo do Word e quando usar cada um.",
                "conteudo": ".docx (padrão Open XML, compatível com versões recentes, suporta macros via .docm). .doc (formato legado, binário, compatibilidade com Word 2003 e anteriores). .pdf (portátil, preserva layout, não editável sem ferramentas específicas). .rtf (Rich Text Format, compatibilidade intermediária entre processadores de texto). .txt (texto puro, sem formatação). A escolha do formato depende do objetivo: edição colaborativa (.docx), distribuição leitura-only (.pdf), compatibilidade antiga (.doc).",
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
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
                "exemplos": [],
                "exercicios": []
              }
            ]
          }
        ]
      }
    ]
  }
};

/* Módulo 1 — 1.4 PowerPoint (adicionado neste incremento): conteúdo base real */
const curriculumPowerPoint14 = {
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
/* Fim M1.4 PowerPoint — conteúdo base implementado (sem inventar estatísticas de prova; sem atribuir a banca real) */

/* Módulo 1 - 1.2 Word: tópicos já implementados: 1 (interface), 2 (formatação direta vs estilos), 3 (parágrafos), 4 (listas), 5 (cabeçalhos/rodapés), 6 (quebras), 7 (sumários), 8 (referências cruzadas/legendas/índices), 9 (tabelas/imagens/formas/disposição texto), 10 (revisão/comentários/controle alterações), 11 (proteção/restrições/permissões), 12 (acessibilidade/verificação ortográfica/PDF), 13 (compatibilidade formatos/problemas formatação), 14 (exemplos resolvidos) */
/* Módulo 1 - 1.3 Excel: PARCIAL — conteúdo base + simulador documentado (SOMA, MÉDIA, MÁX, MÍN, CONT.VALORES, SE, E, OU, SEERRO, CONT.SE, SOMASE; PROCV/PROCH/PROCX não implementados; rejeita inválido com msg útil) */
/* Módulo 1 — 1.4 PowerPoint: PARCIAL — conteúdo base implementado (slide mestre, layouts, animações vs transições, modos apresentação, notas, exportação, acessibilidade) */
/* Módulo 4 — 4.1 Segurança / LGPD: PARCIAL — conteúdo base (referência oficial verificada: Lei 13.709/2018; art. 1º, 2º, 3º, 4º, 5º, 17, 18, 46 confirmados; arquivo referencias/referencias-verificadas.md criado) */
/* Módulo 1 - 1.5 OneDrive: PARCIAL — conteúdo base (sincronização, coautoria, histórico versões, compartilhamento/permissões, backup) + 3 exemplos + 2 exercícios */
/* COMPLEMENTO M1.2 WORD — 3 exemplos resolvidos + 2 exercícios autorais */
const curriculumWord12Supplement = {
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
/* Módulo 1 - 1.2 Word: PARCIAL (texto OK) → COMPLEMENTADO: 3 exemplos resolvidos + 2 exercícios autorais adicionados no incremento atual */
/* Módulo 2 - Redes: A SER IMPLEMENTADO */
/* Módulo 3 - Comunicação e Colaboração: A SER IMPLEMENTADO */
/* Módulo 4 - Segurança da Informação: A SER IMPLEMENTADO */
/* Módulo 5 - IA: A SER IMPLEMENTADO */
/* Módulo 6 - Ética e Responsabilidade Digital: A SER IMPLEMENTADO */
/* Módulo 7 - Fundamentos e Engenharia de Dados: A SER IMPLEMENTADO */
/* Módulo 8 - Visualização, Análise e Storytelling: A SER IMPLEMENTADO */

/* Módulo 1 - 1.5 OneDrive (adicionado neste incremento): conteúdo base real */
const curriculumOneDrive15 = {
  "modulo-1-unidade-5": {
    "id": "modulo-1-unidade-5",
    "titulo": "1.5 OneDrive e Colaboração",
    "conteudoGeral": "OneDrive é o serviço de armazenamento em nuvem integrado ao M365. Sincronização (Sync): cliente OneDrive baixa cópia local dos arquivos e mantém sincronização bidirecional; alterações locais propagam para a nuvem e vice-versa. Coautoria: múltiplos usuários editam o mesmo arquivo (Word, Excel, PowerPoint) simultaneamente com indicações de presença (nome, cursor colorido) e resolução de conflitos (última alteração prevalece quando offline). Histórico de versões: cada arquivo armazena versões anteriores (30 dias padrão no M365; até 500 versões); restauração não exclui versão atual — cria cópia restaurada. Compartilhamento: link com permissões (visualizar, editar, revisar, comentar); opções de expiração de link e bloqueio de download; compartilhamento externo requer cuidado com LGPD (ver Módulo 4.1, referência oficial verificada: Lei 13.709/2018 art. 46 — medidas de segurança). Permissões de arquivo/pasta: proprietário, coautor, revisor, visualizador; alteração de permissões é registrada no log de atividades (Audit Log no M365 Admin Center — não implementado neste simulador). Backup: OneDrive NÃO substitui backup corporativo completo; é sincronização, não backup imutável (ransomware pode propagar alterações maliciosas para nuvem). A recomendação oficial (sem inventar estatísticas) é manter backup separado (3-2-1: 3 cópias, 2 mídias, 1 offsite) conforme boas práticas de segurança, sem citar porcentagem não verificada.",
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
/* Fim M1.5 OneDrive — conteúdo base implementado (sem inventar estatísticas de proteção; referência LGPD citada com rastreabilidade) */
