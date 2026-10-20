/* questions.js — BANCO DE QUESTÕES AUTORAIS (Seção 10 do Escrita.txt).
 *
 * ============================================================================
 * REGRAS DESTE ARQUIVO (Seção 10.1 — justificativa obrigatória)
 * ============================================================================
 * Cada questão possui TODOS os campos exigidos:
 *   id, modulo, formato (mc | ce), estilo (cespe | fgv | fcc | vunesp),
 *   origem ('autoral'), nivel (basico | intermediario | avancado),
 *   topico (id real de assets/data/curriculum*.js), assunto (rótulo curto),
 *   contexto (contexto/dados necessários), enunciado, alternativas (quando mc),
 *   gabarito, trechoDeterminante (quando ce — Seção 10.1, item 12),
 *   justificativa detalhada, analise (ANÁLISE INDIVIDUAL de TODAS as
 *   alternativas / do item, com o erro conceitual de cada distrator),
 *   regra (regra, fórmula ou princípio envolvido), pegadinha, fonte (só quando
 *   exigida — legislação: apenas LGPD verificada em
 *   referencias/referencias-verificadas.md).
 *
 * FORMATOS (Seção 10, "estilos de cobrança"):
 *   cespe  → item Certo/Errado (formato: 'ce')
 *   fgv    → interpretação contextual e alternativas próximas (formato: 'mc')
 *   fcc    → precisão conceitual e aplicação de regras (formato: 'mc')
 *   vunesp → conhecimento objetivo, interpretação e aplicação (formato: 'mc')
 * O campo `estilo` indica APENAS o estilo de cobrança. TODAS as questões são
 * autorais (origem: 'autoral') — NENHUMA é atribuída a banca real, conforme
 * regra absoluta da Seção 10.
 *
 * ORIGEM DO CONTEÚDO (regra absoluta: não inventar fatos/fórmulas/leis):
 *   M1 → assets/data/curriculum.js (1.1, 1.2 Word, 1.4 PowerPoint em
 *        curriculumPowerPoint14, 1.5 OneDrive em curriculumOneDrive15),
 *        assets/js/simulators.js (escopo documentado do simulador Excel) e os
 *        exemplos resolvidos do próprio index.html (1.3 Excel).
 *   M2 → assets/data/curriculum_m2.js (unidade 2.1 — 7 subtópicos reais).
 *   M3 → assets/data/curriculum_m3.js (3.1 e 3.2 — 8 subtópicos reais).
 *   Legislação → APENAS LGPD (Lei 13.709/2018) com os artigos verificados em
 *        referencias/referencias-verificadas.md (arts. 1º, 2º, 3º, 4º, 5º, 17,
 *        18, 46). Nenhum artigo inventado; nenhuma outra lei citada.
 *
 * DISTRIBUIÇÃO DE DIFICULDADE (Seção 10): ~30% básica / 45% intermediária /
 * 25% avançada — os percentuais REAIS deste núcleo estão calculados no
 * rodapé deste arquivo (função resumoEstatisticas) e declarados na seção
 * "Estado atual" do index.html.
 *
 * COBERTURA HONESTA (não fingir completude):
 *   Piso exigido pela Seção 10: 320 questões (40 por módulo × 8 módulos).
 *   Este incremento entrega o núcleo inicial dos módulos que JÁ possuem
 *   currículo real (M1, M2, M3). Os módulos 4–8 ainda NÃO têm currículo
 *   implementado — por isso NÃO existe questão para eles (faria-se conteúdo
 *   inventado). Contagens exatas no rodapé.
 *
 * SEM eval. SEM fetch. Funciona em file://. Todo texto exibido em HTML passa
 * por esc() no quiz-engine.js.
 */

const questoesBanco = [
  /* ===================== MÓDULO 1 — Microsoft 365 (32 questões) ===================== */

  {
    id: "q-m1-01",
    modulo: 1,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-1-topico-1-sub-1",
    assunto: "M1.1 Ecossistema Microsoft 365",
    contexto: "Secretaria com 40 postos de trabalho que precisa de Teams, 5 TB de OneDrive por usuário e atualização contínua de funcionalidades. Três opções de licenciamento foram apresentadas pelo fornecedor.",
    enunciado: "Qual opção atende integralmente à demanda descrita?",
    alternativas: [
      { letra: "A", texto: "Office LTSC por licenciamento por volume — compra única, com atualizações apenas de segurança." },
      { letra: "B", texto: "Microsoft 365 por assinatura — inclui Office, OneDrive, Teams e atualizações contínuas." },
      { letra: "C", texto: "Versão perpétua Home & Student — compra única com Word, Excel e PowerPoint." },
      { letra: "D", texto: "Office LTSC com pacote de nuvem opcional — mesmo escopo do Microsoft 365." }
    ],
    gabarito: "B",
    justificativa: "O currículo define o Microsoft 365 como serviço de assinatura com Office, OneDrive, Teams e atualizações contínuas — exatamente os três requisitos da demanda (Teams, 5 TB de OneDrive por usuário e atualizações de funcionalidades). O Office LTSC é versão perpétua com apps selecionados, sem Teams/OneDrive em nuvem e com apenas atualizações de segurança; a versão perpétua é compra única com apps limitados (Word, Excel, PowerPoint). Por isso as alternativas A e C não satisfazem a demanda, e D descreve um produto não existente no currículo.",
    analise: {
      A: "INCORRETA. Erro conceitual: confundir 'atualização' com 'atualização de segurança'. O LTSC recebe apenas patches de segurança e não inclui Teams nem OneDrive em nuvem, logo não atende a nenhum dos três requisitos.",
      B: "CORRETA. É a única alternativa que reúne os três requisitos: assinatura com Office + OneDrive + Teams + atualizações contínuas, conforme a definição do currículo.",
      C: "INCORRETA. Erro conceitual: a versão perpétua é compra única com apps limitados e sem armazenamento em nuvem integrado nem Teams — erro idêntico ao documentado no exemplo 'erro' do próprio currículo.",
      D: "INCORRETA. Erro conceitual: invenção de produto. O currículo não descreve 'LTSC com pacote de nuvem'; LTSC e M365 são modelos distintos (perpétuo × assinatura), não versões empilháveis."
    },
    regra: "Modelo de licenciamento: assinatura (recorrente, serviços na nuvem + atualizações de funcionalidades) × perpétuo (compra única, apenas atualizações de segurança, sem serviços em nuvem).",
    pegadinha: "A palavra 'atualizações' aparece nas duas alternativas — a pegadinha é não distinguir tipo de atualização (segurança × funcionalidade) e esquecer que Teams/OneDrive em nuvem só aparecem na assinatura."
  },
  {
    id: "q-m1-02",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-1-topico-1-sub-1",
    assunto: "M1.1 Ecossistema Microsoft 365",
    contexto: "Analise a afirmação sobre o canal de distribuição LTSC (Long Term Servicing Channel) conforme a comparação de planos do currículo.",
    enunciado: "O Office LTSC inclui Teams e recebe atualizações de funcionalidades continuamente.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'inclui Teams e recebe atualizações de funcionalidades continuamente': o LTSC inclui apenas apps selecionados e recebe apenas atualizações de segurança — não de funcionalidades — e não inclui Teams.",
    justificativa: "Pelo currículo, o Office LTSC é versão perpétua com apps selecionados (sem Teams/OneDrive em nuvem) e com atualizações de segurança apenas. A parte inicial do item ('O Office LTSC') é neutra; é o predicado completo que o torna falso. O pacote com Teams e atualizações contínuas pertence ao Microsoft 365 (assinatura).",
    analise: {
      item: "Item FALSO. Os dois predicados são incorretos: (1) LTSC não inclui Teams; (2) LTSC não recebe atualizações de funcionalidades continuamente — apenas de segurança.",
      leituraIncorreta: "Leitura que induz ao erro: considerar que 'toda suíte Office moderna acompanha Teams', ou que 'atualização contínua' é padrão de qualquer produto Microsoft. A distinção correta é modelo de licenciamento (assinatura × perpétuo), não marca do produto."
    },
    regra: "LTSC = Long Term Servicing Channel: canal de suporte longo com atualizações de segurança, sem atualizações de funcionalidades e sem serviços em nuvem associados.",
    pegadinha: "Item duplo: mesmo que o examinando aceite parcialmente o trecho ('inclui Teams'), o item só é Certo se TODA a afirmação for verdadeira — estilo CESPE/CEBRASPE penaliza a meia-verdade."
  },
  {
    id: "q-m1-03",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-1-topico-1-sub-3",
    assunto: "M1.1 Ecossistema Microsoft 365",
    contexto: "Equipe distribuída precisa acessar os aplicativos do Microsoft 365 em três cenários: estação fixa, navegador em máquina compartilhada e celular em campo.",
    enunciado: "Sobre as versões web, desktop e mobile do Microsoft 365, assinale a opção correta.",
    alternativas: [
      { letra: "A", texto: "A versão web requer internet e oferece funcionalidades básicas; a desktop tem funcionalidades completas e funciona offline; a mobile é simplificada e sincroniza com a nuvem." },
      { letra: "B", texto: "As três versões oferecem exatamente as mesmas funcionalidades, variando apenas o esquema de cores da interface." },
      { letra: "C", texto: "A versão desktop só é atualizada por download manual; a versão web não recebe atualização automática; a mobile funciona exclusivamente offline." },
      { letra: "D", texto: "A versão mobile oferece todas as funcionalidades do desktop, e a versão web não requer conexão com a internet." }
    ],
    gabarito: "A",
    justificativa: "O currículo descreve: web = via navegador, funcionalidades básicas, atualizações automáticas, requer internet; desktop = instalação local, funcionalidades completas, atualizações via Microsoft Update, funciona offline; mobile = apps iOS/Android, funcionalidades simplificadas, visualização e edição básica, sincronização com nuvem. A alternativa A reproduz fielmente os três conjuntos de características.",
    analise: {
      A: "CORRETA. Reproduz as três descrições do currículo sem acrescentar nem omitir características.",
      B: "INCORRETA. Erro conceitual: equivalência indevida entre plataformas. O currículo registra explicitamente que a web é 'básica' e a mobile é 'simplificada' — não há paridade funcional.",
      C: "INCORRETA. Erro conceitual: inverte os mecanismos. A web recebe atualização automática (é servida pelo navegador), a desktop atualiza via Microsoft Update, e a mobile depende de sincronização com a nuvem — nada disso é 'exclusivamente offline' ou 'manual'.",
      D: "INCORRETA. Erro conceitual: afirma exatamente o oposto do currículo (mobile simplificado; web requer internet). É a alternativa 'espelho' típica de FCC/VUNESP."
    },
    regra: "Classificação de clientes de aplicativo: servidor (web), instalação local (desktop) e aplicativo nativo com sincronização (mobile) — as três diferem em requisito de rede, escopo funcional e canal de atualização.",
    pegadinha: "As alternativas B e D são 'quase verdade' para quem lê só uma frase do enunciado; a palavra-chave é comparar TODOS os atributos (funcionalidade, internet, atualização) de cada versão."
  },
  {
    id: "q-m1-04",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-1-topico-1-sub-4",
    assunto: "M1.1 Ecossistema Microsoft 365",
    contexto: "Plano Enterprise do Microsoft 365 contratado por um órgão; descrição do armazenamento conforme o tópico 'Armazenamento local e em nuvem'.",
    enunciado: "No Microsoft 365 Enterprise, o OneDrive oferece 5 TB de armazenamento por usuário e o SharePoint é o serviço indicado para armazenamento e colaboração de equipe.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'o OneDrive oferece 5 TB de armazenamento por usuário e o SharePoint é o serviço indicado para armazenamento e colaboração de equipe' — correspondem exatamente à descrição do currículo para o plano Enterprise.",
    justificativa: "O currículo registra: 'OneDrive (5TB por usuário Enterprise), SharePoint (armazenamento equipe/collaborativo), armazenamento local', além de integração com sincronização automática, acesso remoto, histórico de versões e recuperação de arquivos. O item combina as duas afirmações corretamente.",
    analise: {
      item: "Item VERDADEIRO. O valor 5 TB por usuário é restrito ao plano Enterprise (como declara o próprio currículo), e o papel do SharePoint (armazenamento colaborativo de equipe) está corretamente atribuído.",
      leituraIncorreta: "Leitura que induz ao erro: generalizar os 5 TB para todos os planos. O item é verdadeiro justamente porque o enunciado limita a 'Enterprise' — se ele dissesse 'em todos os planos Microsoft 365', seria FALSO."
    },
    regra: "Divisão de papéis no M365: OneDrive = armazenamento pessoal do usuário; SharePoint = armazenamento e colaboração de equipe; o limite de capacidade é propriedade do plano licenciado.",
    pegadinha: "A pegadinha clássica de item Certo/Errado é o quantificador escondido ('todos os planos', 'sempre'). Aqui o quantificador correto ('Enterprise') está explícito — quem lê com pressa tende a 'consertar' o item e o marca Errado."
  },
  {
    id: "q-m1-05",
    modulo: 1,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-1-topico-1-sub-5",
    assunto: "M1.1 Ecossistema Microsoft 365",
    contexto: "Relatório no Word deve exibir uma tabela de orçamento que, ao ser atualizada no Excel, mude automaticamente no documento.",
    enunciado: "Qual mecanismo de integração descrito no currículo atende ao requisito de atualização automática da tabela no Word?",
    alternativas: [
      { letra: "A", texto: "Copiar e colar a tabela como imagem estática, sem qualquer vínculo com a planilha." },
      { letra: "B", texto: "Inserir a tabela do Excel como objeto vinculado (link dinâmico), mecanismo de integração via OLE." },
      { letra: "C", texto: "Transcrever manualmente os valores como texto puro e repetir o processo a cada alteração." },
      { letra: "D", texto: "Exportar a planilha para PDF e inserir o PDF como anexo não vinculado." }
    ],
    gabarito: "B",
    justificativa: "O tópico 'Integração entre aplicações' cita explicitamente 'Inserir tabela do Excel em Word com link dinâmico' e identifica os mecanismos de integração: OLE, APIs REST do Microsoft Graph e compatibilidade de formatos. Apenas o objeto vinculado mantém a atualização automática exigida pelo cenário.",
    analise: {
      A: "INCORRETA. Erro conceitual: estaticidade. Uma imagem não mantém vínculo com a origem; a tabela não muda quando o Excel muda.",
      B: "CORRETA. É o mecanismo nomeado no currículo (tabela do Excel em Word com link dinâmico), cujo transporte técnico é a integração via OLE.",
      C: "INCORRETA. Erro conceitual: confundir integração com reimpressão manual — não há vínculo nem automação, e o risco de erro humano é alto.",
      D: "INCORRETA. Erro conceitual: finalidade trocada. Exportar para PDF preserva layout para distribuição (topico-12), não cria vínculo dinâmico de dados entre aplicativos."
    },
    regra: "Integração entre aplicativos Microsoft: OLE (objeto vinculado/embutido) para vínculo dinâmico, Microsoft Graph/APIs REST para automação entre serviços, Power Automate para fluxos.",
    pegadinha: "A palavra 'automática' no enunciado exclui qualquer alternativa baseada em reentrada manual; a pegadinha é confundir 'colar especial (pegar manter vínculo)' com exportação estática."
  },
  {
    id: "q-m1-06",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-1-topico-1-sub-6",
    assunto: "M1.1 Ecossistema Microsoft 365",
    contexto: "Política de recuperação de arquivos do órgão baseada no tópico 'Salvamento automático, sincronização, colaboração simultânea e histórico de versões'.",
    enunciado: "O histórico de versões do OneDrive/SharePoint mantém cópias de recuperação por 30 dias por padrão e permite ao administrador configurar políticas de retenção.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'mantém cópias de recuperação por 30 dias por padrão e permite ao administrador configurar políticas de retenção' — ambos os valores constam do currículo (30 dias padrão; políticas de retenção configuráveis por administrador).",
    justificativa: "O currículo descreve: 'Histórico de versões: cópias de recuperação por 30 dias padrão, restauração de versões anteriores. Políticas de retenção configuráveis por administrador.' O item combina as duas informações sem alterar prazo nem responsável pela configuração.",
    analise: {
      item: "Item VERDADEIRO. Os dois componentes estão corretos: prazo padrão (30 dias) e agente de configuração (administrador).",
      leituraIncorreta: "Leitura que induz ao erro: confundir 'histórico de versões' com 'backup'. O histórico é funcionalidade de recuperação dentro do próprio serviço — a questão do backup separado aparece no tópico 1.5 (OneDrive), e lá o currículo afirma que sincronização não substitui backup."
    },
    regra: "Retenção × backup: histórico de versões é retenção limitada e configurável dentro do serviço; backup é cópia independente (recomendação 3-2-1 citada no currículo do OneDrive).",
    pegadinha: "Número + agente: itens C/E falsos costumam trocar o número (30 dias → 90 dias) ou o responsável ('usuário final' em vez de 'administrador'). Aqui ambos estão corretos."
  },
  {
    id: "q-m1-07",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-1-topico-1-sub-7",
    assunto: "M1.1 Ecossistema Microsoft 365",
    contexto: "Órgão público exige gestão centralizada de identidades, domínio próprio, eDiscovery e gerenciamento de dispositivos para todos os servidores.",
    enunciado: "Que tipo de conta do Microsoft 365 é adequado ao requisito descrito?",
    alternativas: [
      { letra: "A", texto: "Conta pessoal (Personal/Family), pois oferece licença familiar e recursos focados no uso doméstico." },
      { letra: "B", texto: "Conta organizacional (Business/Enterprise), por oferecer gestão centralizada, domínios personalizados, eDiscovery, gerenciamento de dispositivos e recursos de compliance." },
      { letra: "C", texto: "Conta Microsoft pessoal com autenticação em dois fatores, pois o MFA substitui a gestão por domínio." },
      { letra: "D", texto: "Conta local do sistema operacional, pois contas em nuvem não suportam políticas de segurança." }
    ],
    gabarito: "B",
    justificativa: "O currículo diferencia contas pessoais (limite de usuários, recursos domésticos) de contas organizacionais (Business/Enterprise): gestão centralizada, domínios personalizados, políticas de segurança avançadas, eDiscovery, gerenciamento de dispositivos e recursos de compliance. Todos os requisitos do órgão estão na descrição das contas organizacionais.",
    analise: {
      A: "INCORRETA. Erro conceitual: escopo doméstico. Contas pessoais/familiares não têm gestão centralizada nem eDiscovery — características do tópico 'contas organizacionais'.",
      B: "CORRETA. Reproduz integralmente o conjunto de capacidades organizacionais descrito no currículo.",
      C: "INCORRETA. Erro conceitual: confundir fator de autenticação com modelo de gestão. MFA é controle de acesso; não cria domínio personalizado, eDiscovery nem conformidade.",
      D: "INCORRETA. Erro conceitual: premissa falsa. O currículo atribui 'políticas de segurança avançadas' às contas organizacionais no M365 — a negação de suporte em contas nuvem não existe no conteúdo base."
    },
    regra: "Classificação de identidades no M365: conta pessoal/familiar (consumo) × conta organizacional (diretório, domínio, compliance e administração central).",
    pegadinha: "A alternativa C é a pegadinha contemporânea: MFA resolve autenticação, não governança — em provas de precisão conceitual (FCC) separar 'quem entra' de 'como a organização gerencia' é o ponto cobrado."
  },
  {
    id: "q-m1-08",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-1-topico-1-sub-8",
    assunto: "M1.1 Ecossistema Microsoft 365",
    contexto: "Documento compartilhado externamente precisa de expiração de link e recuperação acidental; ver tópico 'Permissões, compartilhamento, privacidade e recuperação de arquivos'.",
    enunciado: "No Microsoft 365, a lixeira retém arquivos por 30 dias e o compartilhamento por link pode ser configurado com expiração, senha e permissão de download.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'a lixeira retém arquivos por 30 dias e o compartilhamento por link pode ser configurado com expiração, senha e permissão de download' — todas as capacidades constam do subtópico correspondente.",
    justificativa: "O currículo lista: permissões granulares (visualizar, editar, comentar, controlar), compartilhamento por link com expiração, senha protegido e permissões de download, privacidade via configurações de locatário e rotulagem de dados, e recuperação: lixeira (30 dias), versões anteriores e eDiscovery para administradores Enterprise.",
    analise: {
      item: "Item VERDADEIRO. Prazo (30 dias) e controles de link (expiração, senha, download) são exatamente os registrados no currículo.",
      leituraIncorreta: "Leitura que induz ao erro: achar que 'expiração e senha' são recursos de tier pago exclusivo e portanto inexistentes. O currículo não faz essa restrição — quem infere restrição não encontrada marca Errado indevidamente."
    },
    regra: "Princípio de compartilhamento mínimo: permissão necessária pelo menor tempo possível (expiração) + autenticação do link (senha) + controle de cópia (download).",
    pegadinha: "Item composto: se apenas um dos três controles de link não existisse, o item seria falso. O examinando deve validar CADA elemento do trecho, não a ideia geral."
  },
  {
    id: "q-m1-09",
    modulo: 1,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-2-topico-1-sub-2",
    assunto: "M1.2 Word — interface e formatos",
    contexto: "Manual técnico será distribuído a leitores externos que não devem alterar o documento, mas o layout (colunas, figuras, numeração) deve preservar-se em qualquer computador.",
    enunciado: "Qual formato de arquivo atende melhor à exigência descrita?",
    alternativas: [
      { letra: "A", texto: ".docx — padrão Open XML, para edição colaborativa." },
      { letra: "B", texto: ".pdf — formato portátil que preserva o layout e não é editável sem ferramentas específicas." },
      { letra: "C", texto: ".txt — texto puro, elimina qualquer formatação acidental." },
      { letra: "D", texto: ".doc — formato legado binário, compatível com o Word 2003 e anteriores." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: .pdf é portátil, preserva layout e não é editável sem ferramentas específicas; a escolha do formato depende do objetivo — 'distribuição leitura-only (.pdf)'. O cenário exige exatamente isso: distribuição sem edição com preservação de layout.",
    analise: {
      A: "INCORRETA. Erro conceitual: finalidade trocada. O .docx é indicado para edição colaborativa — justamente o comportamento que o cenário quer evitar.",
      B: "CORRETA. Combina portabilidade + preservação de layout + não edição, os três requisitos do enunciado.",
      C: "INCORRETA. Erro conceitual: perder a restrição de layout. O .txt descarta formatação (colunas, figuras, numeração) — resolve a não-edição e quebra a preservação.",
      D: "INCORRETA. Erro conceitual: confundir compatibilidade com distribuição segura. O .doc é legado/binário e editável; serve a compatibilidade antiga, não à leitura-only."
    },
    regra: "Escolha de formato por objetivo: edição colaborativa → .docx; distribuição leitura-only → .pdf; compatibilidade antiga → .doc; texto puro → .txt; interoperabilidade intermediária → .rtf.",
    pegadinha: "A pegadinha é a 'meia solução': .txt e .doc atendem um critério do enunciado, mas violam o outro — a FGV cobra interpretar todas as condições, não a primeira que se lê."
  },
  {
    id: "q-m1-10",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-13-sub-1",
    assunto: "M1.2 Word — interface e formatos",
    contexto: "Equipe de padrões corporativos lista extensões de arquivo do Word para o manual de identidade documental.",
    enunciado: "Um arquivo .dotx é um modelo que pode conter macros, e o formato padrão Open XML do Word é o .docm.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'um arquivo .dotx é um modelo que pode conter macros, e o formato padrão Open XML do Word é o .docm': modelos com macros são .dotm (não .dotx) e o padrão Open XML é .docx (não .docm).",
    justificativa: "O currículo registra: .docx é o padrão Open XML desde o Office 2007; .docm é .docx com macros; .dotx é modelo; .dotm é modelo com macros. O item comete dois erros simultâneos — atribui macros ao .dotx e atribui o status de padrão ao .docm.",
    analise: {
      item: "Item FALSO. Dupla falsidade: extensão de modelo com macros incorreta (.dotx em vez de .dotm) e extensão de padrão incorreta (.docm em vez de .docx).",
      leituraIncorreta: "Leitura que induz ao erro: memorizar que 'm de macro' aparece em alguma extensão e inferir que todo .dxm existe. A regra mnemotécnica correta é: DOC = documento, DOT = modelo; o sufixo M = macros habilitadas."
    },
    regra: "Matriz de extensões: DOCX (documento padrão) / DOCM (documento com macros) / DOTX (modelo) / DOTM (modelo com macros) / DOC (legado binário).",
    pegadinha: "Itens com duas cláusulas exigem avaliar AMBAS. Mesmo que o examinando acerte uma metade, o item é Errado — e o CESPE cobra exatamente essa disciplina de leitura."
  },
  {
    id: "q-m1-11",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-2-topico-2-sub-1",
    assunto: "M1.2 Word — estilos e sumários",
    contexto: "Documento com 10 capítulos, todos formatados com o estilo 'Título 1' (18 pt). O responsável decide alterar o título para 16 pt.",
    enunciado: "Ao modificar o estilo 'Título 1' de 18 pt para 16 pt, o que ocorre no documento?",
    alternativas: [
      { letra: "A", texto: "Somente o parágrafo com o cursor posicionado muda de tamanho; os demais permanecem em 18 pt." },
      { letra: "B", texto: "Todos os textos aplicados com o estilo 'Título 1' são atualizados para 16 pt." },
      { letra: "C", texto: "Nada muda, porque estilos valem apenas para a criação de sumários." },
      { letra: "D", texto: "Apenas o sumário automático passa a exibir 16 pt, sem alterar os títulos do corpo." }
    ],
    gabarito: "B",
    justificativa: "O currículo define estilos como 'conjuntos nomeados de formatação que podem ser aplicados globalmente: modificar um estilo atualiza todo o texto formatado com ele'. É essa propriedade de propagação que distingue estilo de formatação direta.",
    analise: {
      A: "INCORRETA. Erro conceitual: descrição da formatação direta (atributo aplicado ao texto selecionado), não de estilo.",
      B: "CORRETA. Atende à definição de atualização global do estilo registrada no currículo.",
      C: "INCORRETA. Erro conceitual: reducionismo. Estilos servem também à consistência visual, navegação estrutural e acessibilidade — e o sumário é apenas um dos consumidores.",
      D: "INCORRETA. Erro conceitual: inverter causa e efeito. O sumário referencia os títulos; alterar só o sumário não modifica o corpo do documento."
    },
    regra: "Formatação direta × estilo: direta altera a seleção atual; estilo é definição nomeada propagante (mudou o estilo, mudou todo o texto com aquele estilo).",
    pegadinha: "A alternativa D é a pegadinha de quem conhece o sumário, mas não entende o vínculo estilo → texto → sumário (nesta ordem)."
  },
  {
    id: "q-m1-12",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-7-sub-1",
    assunto: "M1.2 Word — estilos e sumários",
    contexto: "Servidor publicou relatório no qual os capítulos receberam negrito e tamanho manualmente; ao inserir o sumário, o resultado veio vazio.",
    enunciado: "A formatação direta (negrito e tamanho aplicados diretamente ao texto) é suficiente para que o sumário automático reconheça os capítulos do documento.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'a formatação direta ... é suficiente para que o sumário automático reconheça os capítulos': o sumário é gerado a partir dos estilos de título (Título 1, Título 2 etc.), não da aparência do texto.",
    justificativa: "O currículo afirma: 'O Word pode gerar sumários automaticamente baseando-se nos estilos de títulos aplicados (Título 1, Título 2, etc.)'. O exemplo resolvido do próprio módulo documenta o diagnóstico do sumário vazio: verificar se os capítulos têm estilo 'Título 1' aplicado (não apenas formatação direta) e confirmar que o sumário é um campo, não texto estático.",
    analise: {
      item: "Item FALSO. O sumário lê a estrutura de estilos; formatação direta não cria nível de título, logo não gera entradas.",
      leituraIncorreta: "Leitura que induz ao erro: supor que o sumário 'olha' a aparência (negrito grande = título). O sumário é um campo baseado em estilos — aparência não é estrutura."
    },
    regra: "Sumário automático = campo indexado por estilos de título. Regra prática: estrutura (estilos) → sumário; formatação direta → apenas aparência.",
    pegadinha: "Item quase-verdade: formatação direta de fato 'faz o texto parecer título'. A pegadinha é confundir efeito visual com marcação estrutural — o erro mais comum documentado no exemplo 'erro' do próprio currículo."
  },
  {
    id: "q-m1-13",
    modulo: 1,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-2-topico-3-sub-1",
    assunto: "M1.2 Word — parágrafos, listas e paginação",
    contexto: "Ao digitar um endereço em três linhas no cabeçalho de um formulário, o funcionário pressiona Shift+Enter entre as linhas em vez de Enter.",
    enunciado: "Em relação ao Enter, a tecla Shift+Enter no Word produz:",
    alternativas: [
      { letra: "A", texto: "uma quebra de página, iniciando novo conteúdo na página seguinte." },
      { letra: "B", texto: "uma quebra de parágrafo, encerrando o parágrafo atual e iniciando outro." },
      { letra: "C", texto: "uma quebra de linha dentro do mesmo parágrafo, sem iniciar novo parágrafo." },
      { letra: "D", texto: "uma tabulação, movendo o cursor para a próxima parada definida." }
    ],
    gabarito: "C",
    justificativa: "O currículo estabelece: 'Parágrafos são unidades de texto separadas por quebras de parágrafo (Enter) ou linha (Shift+Enter)'. Portanto Shift+Enter quebra a linha mantendo o mesmo parágrafo — é o que se deseja em endereços, pois o bloco continua sendo um só parágrafo com espaçamento uniforme.",
    analise: {
      A: "INCORRETA. Erro conceitual: escala trocada. Quebra de página é recurso de paginação (topico-6), não de digitação de linha.",
      B: "INCORRETA. Erro conceitual: essa é exatamente a função do Enter — nova quebra de parágrafo, com espaçamento antes/depois aplicado ao novo parágrafo.",
      C: "CORRETA. Quebra de linha (soft return): nova linha dentro do mesmo parágrafo.",
      D: "INCORRETA. Erro conceitual: confundir salto de linha com tabulador; tabulação é avanço para parada definida (Tab simples, centrado, decimal, direita)."
    },
    regra: "Enter = quebra de parágrafo (novo parágrafo, com formatação parágrafo própria); Shift+Enter = quebra de linha (mesmo parágrafo).",
    pegadinha: "A alternativa A pega quem associa qualquer 'quebra' à página; o nome técnico ('quebra de linha') está no currículo — leia o termo, não a intuição."
  },
  {
    id: "q-m1-14",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-3-sub-1",
    assunto: "M1.2 Word — parágrafos, listas e paginação",
    contexto: "Coluna de valores monetários com vírgula decimal (1,00; 2,50; 10,75) deve alinhar as vírgulas verticalmente, formando coluna.",
    enunciado: "Qual tipo de tabulação atende ao alinhamento descrito?",
    alternativas: [
      { letra: "A", texto: "Tabulador simples, que avança o cursor até a próxima parada de tabulação." },
      { letra: "B", texto: "Tabulador centrado, que posiciona o texto simetricamente em relação à parada." },
      { letra: "C", texto: "Tabulador decimal, que alinha os valores em torno da vírgula decimal." },
      { letra: "D", texto: "Tabulador à direita, que alinha o fim de todos os valores na mesma parada." }
    ],
    gabarito: "C",
    justificativa: "O currículo lista os tipos de tabulação — 'tabulador simples, centrado, decimal, direita' — e o objetivo do enunciado é alinhar a vírgula decimal, função exclusiva do tabulador decimal. O alinhamento à direita (D) alinharia o último caractere de cada valor, o que não satisfaz o critério da vírgula quando os valores têm casas decimais iguais, mas tamanhos inteiros diferentes (1,00 × 100,00).",
    analise: {
      A: "INCORRETA. Erro conceitual: tabulador genérico — serve para deslocar o cursor, não para alinhar colunas numéricas por casa decimal.",
      B: "INCORRETA. Erro conceitual: centrar é para títulos ou cabeçalhos curtos; com números de tamanhos distintos, o centro das strings não coincide com a vírgula.",
      C: "CORRETA. Alinhamento decimal é a parada desenhada para alinhar vírgulas decimais em coluna.",
      D: "INCORRETA. Erro conceitual: resposta 'quase certa'. Alinha à direita o fim do texto; em valores com mesma precisão decimal o efeito visual é próximo, mas a parada que ancora a vírgula é a decimal — e é ela que o currículo associa ao alinhamento por casa decimal."
    },
    regra: "Paradas de tabulação do Word: simples (esquerda), centrado, decimal (alinha pela vírgula) e direita (alinha o fim do texto).",
    pegadinha: "A proximidade visual entre 'decimal' e 'direita' é o filtro natural da FCC: quem não leu a definição dos quatro tipos escolhe a opção que 'parece' alinhar."
  },
  {
    id: "q-m1-15",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-2-topico-4-sub-1",
    assunto: "M1.2 Word — parágrafos, listas e paginação",
    contexto: "Manual de procedimentos com lista de etapas obrigatórias em ordem cronológica e, em outra seção, lista de materiais sem ordem definida.",
    enunciado: "No Word, listas com marcadores (bullet) são indicadas quando a ordem dos itens é crítica, e listas numeradas quando a ordem não importa.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'listas com marcadores (bullet) ... quando a ordem dos itens é crítica, e listas numeradas ... quando a ordem não importa': a relação está invertida.",
    justificativa: "O currículo define: 'Listas do tipo bullet (pontos, círculos, setas) para itens onde a ordem não é crítica. Listas numeradas (numbered) usam números ou letras sequenciais automáticas, ideais quando a sequência importa (passos, argumentos)'. O item troca as duas funções de lugar.",
    analise: {
      item: "Item FALSO por inversão funcional: bullet = ordem irrelevante; numerada = sequência importa.",
      leituraIncorreta: "Leitura que induz ao erro: a frase soa 'técnica e plausível' e quem lê depressa valida o vocabulário em vez da relação. A inversão é o único defeito do item — a parte sobre a existência dos dois tipos de lista está correta."
    },
    regra: "Escolha de lista por semântica: ordem importa → numeração/letras sequenciais; ordem irrelevante → marcadores (bullet).",
    pegadinha: "Inversão de predicados — pegadinha padrão de item C/E: tudo parece certo porque todos os termos existem; só a relação entre eles está trocada."
  },
  {
    id: "q-m1-16",
    modulo: 1,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-6-sub-1",
    assunto: "M1.2 Word — parágrafos, listas e paginação",
    contexto: "Relatório com capa sem numeração, corpo numerado a partir de 1 e anexos com numeração própria em algarismos romanos.",
    enunciado: "Qual configuração atende simultaneamente aos três requisitos de numeração do relatório?",
    alternativas: [
      { letra: "A", texto: "Três quebras de página com numeração manual digitada no rodapé de cada parte." },
      { letra: "B", texto: "Quebras de seção (Início de seção), com numeração configurada por seção e vínculo de cabeçalho/rodapé desmarcado entre as partes." },
      { letra: "C", texto: "Apenas desmarcar 'Vincular ao anterior' no rodapé, mantendo quebras de página simples." },
      { letra: "D", texto: "Aplicar o estilo Normal com numeração contínua em todo o documento e editar o número visualmente na capa." }
    ],
    gabarito: "B",
    justificativa: "O currículo afirma que a quebra de seção permite mudar formatação entre partes — 'orientação, margens, número de colunas, formato de numeração, cabeçalhos/rodapés específicos' — e que a escolha depende de 'se a formatação também deve mudar (quebra de seção)'. Os exemplos resolvidos do módulo detalham o passo a passo exato: inserir quebra de seção (Next Page), desmarcar 'Vincular ao anterior' e configurar numeração por seção (romana vs arábica).",
    analise: {
      A: "INCORRETA. Erro conceitual: quebra de página não altera formatação (o currículo diz explicitamente 'sem alterar formatação'); numeração manual não é automática e quebra ao editar.",
      B: "CORRETA. Combina os dois mecanismos certos: seção (para formatação/numeração independente) e desvinculação de cabeçalho/rodapé.",
      C: "INCORRETA. Erro conceitual: solução incompleta. Sem quebra de seção, o documento continua sendo UMA seção — desvincular não cria autonomia de numeração; e a capa sem número exigiria esconder o rodapé da primeira página da mesma seção, o que não cobre anexos romanos.",
      D: "INCORRETA. Erro conceitual: formatação visual no lugar de estrutura; numeração contínua não satisfaz capa/romano e o número digitado manualmente não recalcula."
    },
    regra: "Quebra de página = mesma formatação, nova página; quebra de seção = fronteira de formatação (numeração, margens, orientação, cabeçalhos/rodapés) — e o vínculo 'Vincular ao anterior' deve ser desmarcado por seção.",
    pegadinha: "A alternativa C é a 'meia verdade' favorita da FGV: o desvincular é necessário, mas não suficiente sem a quebra de seção — cobram a combinação completa de passos."
  },
  {
    id: "q-m1-17",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-2-topico-6-sub-1",
    assunto: "M1.2 Word — parágrafos, listas e paginação",
    contexto: "Apêndice de um edital deve iniciar na mesma página do conteúdo anterior, mas exibir texto em duas colunas a partir dali.",
    enunciado: "Para o caso descrito, a quebra de seção do tipo 'Início de seção: Contínuo' inicia o novo conteúdo na mesma página e permite mudar a formatação (por exemplo, número de colunas) a partir desse ponto.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'a quebra de seção do tipo Início de seção: Contínuo inicia o novo conteúdo na mesma página e permite mudar a formatação ... a partir desse ponto'.",
    justificativa: "O currículo descreve os tipos de quebra de seção: 'Início de seção (Next Page) começa na página seguinte; Início de seção (Continuous) começa na mesma página (usado para colunas)'. O cenário — duas colunas sem nova página — é exatamente o caso de uso registrado para o modo Contínuo.",
    analise: {
      item: "Item VERDADEIRO. Os dois atributos do modo Contínuo (mesma página + mudança de formatação) constam do currículo e resolvem o cenário.",
      leituraIncorreta: "Leitura que induz ao erro: supor que só a quebra de página muda colunas, ou que toda quebra de seção força nova página. Só o modo Next Page força a página nova — o Contínuo, não."
    },
    regra: "Tipos de quebra de seção: Next Page (nova página + formatação nova) × Continuous (mesma página + formatação nova); colunas múltiplas mudam por seção, não por quebra de página.",
    pegadinha: "A pegadinha é a palavra 'Contínuo' sugerir 'nada muda'. Na verdade, é justamente a quebra que muda formatação SEM mudar de página — o examinando deve separar localização (página) de formatação (seção)."
  },
  {
    id: "q-m1-18",
    modulo: 1,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-2-topico-7-sub-1",
    assunto: "M1.2 Word — estilos e sumários",
    contexto: "Aluno precisa inserir o sumário de um TCC com capítulos e seções.",
    enunciado: "O sumário automático do Word é gerado a partir de:",
    alternativas: [
      { letra: "A", texto: "qualquer trecho de texto previamente selecionado com o mouse." },
      { letra: "B", texto: "estilos de título aplicados aos capítulos (Título 1, Título 2 etc.), inserido como campo atualizável." },
      { letra: "C", texto: "parágrafos com negrito e tamanho maiores que o restante do texto." },
      { letra: "D", texto: "da lista de figuras e tabelas criada automaticamente no documento." }
    ],
    gabarito: "B",
    justificativa: "O currículo descreve o processo: aplicar estilos de títulos aos tópicos, posicionar o cursor, usar 'Referências > Sumário' e escolher o formato; o sumário é inserido como um campo atualizável ('Atualizar campo'). A base de geração são os estilos de título, não aparência nem seleção manual.",
    analise: {
      A: "INCORRETA. Erro conceitual: seleção manual não alimenta campo indexado — o sumário é regenerável a partir de toda a estrutura, não de um recorte.",
      B: "CORRETA. Reúne os dois elementos corretos: estilos de título como fonte e campo atualizável como mecanismo.",
      C: "INCORRETA. Erro conceitual: aparência × estrutura (idêntico ao erro documentado no exemplo 'erro' do módulo: formatação direta não é reconhecida).",
      D: "INCORRETA. Erro conceitual: confundir recursos do grupo 'Referências'. Lista de figuras/legendas é gerada por legendas automáticas (topico-8), não é a fonte do sumário."
    },
    regra: "Sumário = campo indexado por estilos de título; atualização manual via 'Atualizar campo' após mudanças estruturais.",
    pegadinha: "A alternativa C repete o erro mais comum dos alunos — a VUNESP a coloca em posição de plausibilidade justamente porque 'negrito grande' parece título."
  },
  {
    id: "q-m1-19",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-7-sub-1",
    assunto: "M1.2 Word — estilos e sumários",
    contexto: "Após renomear três seções e inserir uma nova, o sumário do documento está desatualizado.",
    enunciado: "O sumário deve ser atualizado pelo comando 'Atualizar campo', porque é inserido no documento como um campo que pode ser regenerado quando os estilos ou a estrutura mudarem.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'deve ser atualizado pelo comando Atualizar campo, porque é inserido no documento como um campo que pode ser regenerado quando os estilos ou a estrutura mudarem'.",
    justificativa: "O currículo registra: 'O sumário é inserido como um campo que pode ser atualizado (Atualizar campo) sempre que estilos ou estrutura mudarem'. A causa (campo) e o efeito (comando de atualização) estão corretamente relacionados no item.",
    analise: {
      item: "Item VERDADEIRO. Mecanismo (campo) e procedimento (Atualizar campo) correspondem ao descrito no currículo.",
      leituraIncorreta: "Leitura que induz ao erro: pensar que o sumário se atualiza sozinho como a numeração de páginas. A atualização é automática em alguns eventos, mas o comando manual é o procedimento documentado para refletir mudanças estruturais."
    },
    regra: "Campo do Word: objeto com instrução de atualização; sumário é campo baseado em estilos de título.",
    pegadinha: "A palavra 'sempre' do currículo ('sempre que estilos ou estrutura mudarem') não significa atualização instantânea automática — quem transforma 'sempre' em 'sozinho' marca Errado."
  },
  {
    id: "q-m1-20",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-8-sub-1",
    assunto: "M1.2 Word — tabelas, referências e acessibilidade",
    contexto: "Norma interna exige o texto 'Veja a Figura 3' no corpo do texto, que deve permanecer correto mesmo quando a figura é movida ou reordenada no documento.",
    enunciado: "Qual recurso do Word produz o texto indicado com atualização automática?",
    alternativas: [
      { letra: "A", texto: "Legenda automática inserida sob a figura, digitada manualmente no corpo." },
      { letra: "B", texto: "Referência cruzada, que cria link para locais específicos e se atualiza quando o objeto é movido." },
      { letra: "C", texto: "Índice remissivo, gerado a partir das marcas de entrada de índice." },
      { letra: "D", texto: "Citação bibliográfica gerenciada pelo grupo 'Referências'." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: 'Referências cruzadas criam links que saltam para locais específicos (ex: Veja a Figura 1) que atualizam automaticamente quando a figura é movida'. A legenda (A) identifica a figura no seu local, mas não gera o texto atualizável no corpo.",
    analise: {
      A: "INCORRETA. Erro conceitual: confundir identificação com vinculação. A legenda dá o número à figura; o texto no corpo continua estático se digitado à mão.",
      B: "CORRETA. É o recurso nomeado no currículo, com o exemplo idêntico ('Veja a Figura 1').",
      C: "INCORRETA. Erro conceitual: finalidade trocada. Índice remissivo é gerado das marcas de entrada de índice marcadas ao longo do texto — não vincula figuras.",
      D: "INCORRETA. Erro conceitual: mesmo grupo de interface ('Referências'), função diferente — gerenciar fontes e bibliografia, não figuras."
    },
    regra: "Referência cruzada = vínculo interno atualizável (campos); legenda = numeração do objeto; índice = mapa de marcas de entrada.",
    pegadinha: "Três recursos ficam no mesmo grupo de guiia 'Referências' — a pegadinha é escolher pela proximidade de menu em vez da função descrita."
  },
  {
    id: "q-m1-21",
    modulo: 1,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-9-sub-1",
    assunto: "M1.2 Word — tabelas, referências e acessibilidade",
    contexto: "Tabela de dados de 6 páginas no relatório: a linha de cabeçalho deve repetir em cada página e as linhas devem ser ordenadas por uma coluna de classificação.",
    enunciado: "Quais recursos do Word atendem aos dois requisitos descritos?",
    alternativas: [
      { letra: "A", texto: "Fórmulas SUM e AVERAGE aplicadas às células da coluna de classificação." },
      { letra: "B", texto: "Propriedades de tabela: opção 'Repetir como cabeçalho' e classificação de linhas por coluna." },
      { letra: "C", texto: "Quebras de seção inseridas antes de cada página da tabela." },
      { letra: "D", texto: "Modo de leitura combinado com a visão de seleção do documento." }
    ],
    gabarito: "B",
    justificativa: "O currículo lista as propriedades de tabela: 'alinhamento, autoajuste de colunas, repetir como cabeçalho linha e sombreamento de linhas alternadas', além de 'classificação e filtros'. Os dois requisitos do enunciado correspondem, respectivamente, a 'repetir como cabeçalho' e à classificação de linhas.",
    analise: {
      A: "INCORRETA. Erro conceitual: fórmulas de tabela calculam valores (SUM/AVERAGE) — não organizam apresentação nem ordenam linhas por coluna.",
      B: "CORRETA. Cobre exatamente os dois requisitos com recursos documentados no tópico de tabelas.",
      C: "INCORRETA. Erro conceitual: quebra de seção muda formatação de página, não cabeçalho de tabela; além de fracionar a tabela desnecessariamente.",
      D: "INCORRETA. Erro conceitual: modos de exibição não alteram propriedades internas da tabela."
    },
    regra: "Propriedades de tabela do Word: cabeçalho repetido por página, classificação/filtros, autoajuste, sombreamento — funções da própria tabela, não da página.",
    pegadinha: "A alternativa A soa técnica ('SUM/AVERAGE' aparece no currículo) mas é irrelevante ao objetivo — a pegadinha é confundir cálculo com organização."
  },
  {
    id: "q-m1-22",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-2-topico-10-sub-1",
    assunto: "M1.2 Word — revisão e proteção",
    contexto: "Duas versões de um edital foram revisadas por servidores distintos; um terceiro responsável precisa produzir um documento único com todas as alterações.",
    enunciado: "O recurso 'Comparar e Mesclar' identifica diferenças entre duas versões e gera um documento resultante destacando alterações, e o comando 'Combinar' mescla alterações de múltiplas versões.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'Comparar e Mesclar identifica diferenças entre duas versões ... e o comando Combinar mescla alterações de múltiplas versões' — a divisão entre as duas funções está correta no currículo.",
    justificativa: "O currículo registra: 'Comparar documentos (Comparar e Mesclar) identifica diferenças entre duas versões e gera um documento resultante destacando alterações. O recurso Combinar mescla alterações de múltiplas versões.' O item reproduz essa divisão sem confundir as duas funções.",
    analise: {
      item: "Item VERDADEIRO. 'Comparar' para duas versões; 'Combinar' para múltiplas versões — exatamente como descrito.",
      leituraIncorreta: "Leitura que induz ao erro: tratar 'Comparar e Mesclar' e 'Combinar' como sinônimos. A diferença está na quantidade de versões envolvidas (duas × múltiplas), e é esse o critério do currículo."
    },
    regra: "Revisão colaborativa: rastreamento de alterações (marcação) → comentários → comparação (duas versões) → combinação (múltiplas versões).",
    pegadinha: "Prova de atenção nominal: dois comandos de nome parecido com domínios distintos — quem lê 'e' como 'ou' aceita o item sem perceber a especificação."
  },
  {
    id: "q-m1-23",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-2-topico-11-sub-1",
    assunto: "M1.2 Word — revisão e proteção",
    contexto: "Documento em revisão: dois servidores podem editar apenas as seções que lhes cabem; os demais leitores podem comentar, e o texto geral deve permanecer sem edição livre.",
    enunciado: "Que combinação de recursos atende melhor ao cenário?",
    alternativas: [
      { letra: "A", texto: "Apenas a senha de abertura (Password to open), aplicada uma única vez ao arquivo." },
      { letra: "B", texto: "Restrição de edição (Revisão > Restringir Edição) definindo áreas permitidas e níveis de acesso, complementada pelas senhas de abertura/modificação quando necessário." },
      { letra: "C", texto: "Marca d'água com o texto 'Confidencial', pois restringe a edição por política visual." },
      { letra: "D", texto: "Compartilhamento por link com permissão de visualização apenas, sem qualquer controle interno do documento." }
    ],
    gabarito: "B",
    justificativa: "O currículo descreve: 'Restrição de Edição (Review > Restrict Editing) define áreas permitidas e níveis de acesso' e distingue as senhas: 'Password to open (para abrir) e Password to modify (para modificar)'. O cenário pede controle granular por área e por papel — função da restrição de edição; as senhas complementam (abrir/modificar), mas não definem áreas.",
    analise: {
      A: "INCORRETA. Erro conceitual: granularidade ausente. Senha de abertura controla quem abre o arquivo, não quem edita qual seção.",
      B: "CORRETA. É o único recurso que define áreas permitidas e níveis de acesso (editar/comentar/somente visualizar), com as senhas como complemento — como descrito no currículo.",
      C: "INCORRETA. Erro conceitual: marca d'água é sinalização visual, não controle de permissão; não impede edição alguma.",
      D: "INCORRETA. Erro conceitual: leva o controle para fora do arquivo. O currículo trata do link de permissão (visualizar/editar/comentar com expiração), mas o cenário exige controle INTERNO por seção dentro do documento — e sem edição livre não há como revisar."
    },
    regra: "Camadas de proteção do Word: restrição de edição (granular, por área/papel) × senha de abertura (acesso) × senha de modificação (escrita) × marca d'água (sinalização).",
    pegadinha: "A alternativa D é plausível porque 'visualizar apenas' parece atender à leitura — mas o cenário exige edição restrita a áreas, o que só a restrição interna resolve."
  },
  {
    id: "q-m1-24",
    modulo: 1,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-12-sub-1",
    assunto: "M1.2 Word — tabelas, referências e acessibilidade",
    contexto: "Relatório com figuras será publicado como PDF e precisa continuar acessível a leitores de tela.",
    enunciado: "Na exportação para PDF, o que deve ser verificado para preservar a acessibilidade?",
    alternativas: [
      { letra: "A", texto: "Que texto alternativo e estruturas de títulos (heading) sejam preservados no PDF para leitores de tela." },
      { letra: "B", texto: "Que todas as figuras sejam convertidas em imagem bitmap de alta resolução." },
      { letra: "C", texto: "Que os estilos de título sejam removidos para simplificar a estrutura do arquivo." },
      { letra: "D", texto: "Que o arquivo seja salvo como .doc antes da publicação, pois o PDF não suporta acessibilidade." }
    ],
    gabarito: "A",
    justificativa: "O currículo descreve a exportação (Arquivo > Exportar > Criar PDF/XPS) com opções para 'preservar cametas de acessibilidade (texto alternativo, estruturas de heading) para leitores de tela' e recomenda 'verificar PDF resultante para garantir preservação de elementos essenciais'. O Verificar Acessibilidade identifica justamente texto alternativo ausente, uso de estilos de título, contraste e navegação por teclado.",
    analise: {
      A: "CORRETA. Reúne os dois elementos de acessibilidade citados no currículo: texto alternativo e estruturas de títulos.",
      B: "INCORRETA. Erro conceitual: converter texto/figuras em imagem bitmap costuma destruir a camada de texto e o texto alternativo — efeito contrário ao desejado.",
      C: "INCORRETA. Erro conceitual: remover estilos elimina a estrutura de navegação que leitores de tela usam (o currículo aponta estilos de título como achado do verificador).",
      D: "INCORRETA. Erro conceitual: premissa falsa — o próprio currículo descreve preservação de acessibilidade na exportação para PDF."
    },
    regra: "Acessibilidade documental: texto alternativo + hierarquia de títulos (estilos) + contraste + navegação por teclado; a exportação deve preservar essas estruturas.",
    pegadinha: "A alternativa B atrai quem associa 'PDF = imagem fixa'; o ponto cobrado é que acessibilidade depende de estrutura preservada, não de fidelidade visual."
  },
  {
    id: "q-m1-25",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-2-topico-13-sub-1",
    assunto: "M1.2 Word — interface e formatos",
    contexto: "Arquivo legado .doc recebido de terceiro é aberto no Word 365 e exibe aviso de Modo de Compatibilidade.",
    enunciado: "O Modo de Compatibilidade, ativado ao abrir arquivos .doc no Word 365, desabilita funcionalidades introduzidas depois de 2007 para preservar a integridade do conteúdo original.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'desabilita funcionalidades introduzidas depois de 2007 para preservar a integridade do conteúdo original' — definição literal do tópico de compatibilidade.",
    justificativa: "O currículo afirma: 'O Modo de Compatibilidade desabilita funcionalidades introduzidas após 2007 para preservar integridade do conteúdo original' e que é ativado ao abrir .doc no Word 365. A conversão para .docx remove o modo, mas 'pode reformatar elementos' — razão pela qual se recomenda salvar cópia antes.",
    analise: {
      item: "Item VERDADEIRO. Gatilho (.doc no 365), efeito (desabilitar funções pós-2007) e finalidade (integridade) coincidem com o currículo.",
      leituraIncorreta: "Leitura que induz ao erro: supor que o modo 'congela tudo' ou que impede salvar. Ele limita funcionalidades novas, não bloqueia o documento — salvar em .docx sai do modo."
    },
    regra: "Compatibilidade de formatos: .doc (binário legado) → Modo de Compatibilidade no editor moderno; .docx (Open XML) → funcionalidades completas; .pdf → distribuição.",
    pegadinha: "O ano (2007) é o marco que separa 'funcionalidades antigas' de 'novas' — itens C/E costumam trocá-lo por 2003 ou 2010; aqui ele está correto, então o item é Certo."
  },
  {
    id: "q-m1-26",
    modulo: 1,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-4",
    assunto: "M1.4 PowerPoint",
    contexto: "Apresentação corporativa: deseja-se que o logotipo e as fontes mudem em todos os slides de uma vez, e que um gráfico 'entre' em cena quando o slide for exibido.",
    enunciado: "Sobre os recursos do PowerPoint citados, assinale a opção correta.",
    alternativas: [
      { letra: "A", texto: "Animação é o efeito aplicado entre slides, e transição é o efeito aplicado a objetos dentro de um slide." },
      { letra: "B", texto: "Animação é o efeito aplicado a objetos individuais dentro do slide, e transição é o efeito aplicado entre slides." },
      { letra: "C", texto: "Animação e transição são sinônimos e diferem apenas pelo nome do menu." },
      { letra: "D", texto: "A mudança de logotipo em todos os slides é feita editando um a um os slides, pois não existe mestre compartilhado." }
    ],
    gabarito: "B",
    justificativa: "O conteúdo base do PowerPoint (curriculumPowerPoint14) define: 'Animações aplicam efeitos a objetos individuais (entrada, ênfase, saída) com ordem, duração e gatilhos configuráveis. Transições são efeitos entre slides (fade, push, wipe)'. A logomarca/fontes em todos os slides é papel do Slide Mestre — 'alterar o mestre propaga para todos os slides vinculados' — o que também derruba a alternativa D.",
    analise: {
      A: "INCORRETA. Erro conceitual: inversão exata dos dois conceitos — o exemplo 'erro' do próprio conteúdo base registra essa confusão.",
      B: "CORRETA. Objeto dentro do slide (animação) × transição entre slides, conforme o conteúdo base.",
      C: "INCORRETA. Erro conceitual: sinonímia falsa; aplicam-se a alvos e momentos diferentes (dentro × entre slides).",
      D: "INCORRETA. Erro conceitual: nega o Slide Mestre, que é justamente o mecanismo de alteração global de identidade visual (tipografia, cores, logotipos) descrito no conteúdo base."
    },
    regra: "Slide Mestre = propagação de identidade visual; animação = objeto no slide; transição = fronteira entre slides.",
    pegadinha: "A alternativa A é o 'espelho' clássico: quem decorou os dois termos sem associar o alvo (objeto × slide) escolhe a inversão."
  },
  {
    id: "q-m1-27",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-4",
    assunto: "M1.4 PowerPoint",
    contexto: "Servidor atualizou a fonte do título no Slide Mestre e a alteração apareceu na apresentação inteira.",
    enunciado: "A alteração do Slide Mestre afeta apenas o slide atual em que o comando foi executado.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'afeta apenas o slide atual': o Slide Mestre é o layout pai — alterá-lo propaga a mudança para todos os slides vinculados e seus layouts filhos.",
    justificativa: "O conteúdo base do PowerPoint afirma: 'Slide Mestre define tipografia, cores, logotipos e layouts filhos; alterar o mestre propaga para todos os slides vinculados'. O exercício registrado no conteúdo (C/E) é literalmente este item, com resposta 'Errado'.",
    analise: {
      item: "Item FALSO. O efeito do Mestre é global (propagação para slides vinculados), não local.",
      leituraIncorreta: "Leitura que induz ao erro: associar 'mestre' ao slide aberto ('o slide que estou editando'). Mestre é a hierarquia pai — daí a propagação."
    },
    regra: "Hierarquia do PowerPoint: Slide Mestre (pai) → layouts filhos → slides; mudanças descem na hierarquia para todos os vinculados.",
    pegadinha: "O item inverte escopo global/local — a mesma pegadinha da quebra de seção no Word, agora com a árvore de layouts."
  },
  {
    id: "q-m1-28",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-5",
    assunto: "M1.5 OneDrive",
    contexto: "Usuário pergunta se manter a pasta do OneDrive sincronizada no computador já configura o backup da empresa.",
    enunciado: "Sobre a diferença entre sincronização e backup no OneDrive, qual afirmação é correta?",
    alternativas: [
      { letra: "A", texto: "Sincronização e backup são a mesma funcionalidade, mudando apenas o nome do serviço." },
      { letra: "B", texto: "Sincronização é propagação bidirecional entre local e nuvem (inclusive de alterações maliciosas); backup é cópia independente e imutável." },
      { letra: "C", texto: "Sincronização é apenas download de arquivos para a nuvem, sem retorno de alterações." },
      { letra: "D", texto: "Backup propaga automaticamente todas as alterações locais para todos os dispositivos do usuário." }
    ],
    gabarito: "B",
    justificativa: "O conteúdo do OneDrive (curriculumOneDrive15) define: 'Sincronização (Sync): cliente baixa cópia local e mantém sincronização bidirecional; alterações locais propagam para a nuvem e vice-versa' e alerta: 'OneDrive NÃO substitui backup corporativo completo; é sincronização, não backup imutável (ransomware pode propagar alterações maliciosas para a nuvem)'. O exercício registrado no conteúdo é este, com resposta B equivalente.",
    analise: {
      A: "INCORRETA. Erro conceitual: sinonímia. O conteúdo base separa explicitamente os dois conceitos (exercício 'sincronização × backup').",
      B: "CORRETA. Reproduz as duas definições: propagação bidirecional × cópia independente/imutável.",
      C: "INCORRETA. Erro conceitual: descreve upload unidirecional; a sincronização é bidirecional (alterações da nuvem também voltam ao local).",
      D: "INCORRETA. Erro conceitual: descreve propagação (comportamento da sincronização) e a chama de backup — o oposto da imutabilidade exigida de um backup."
    },
    regra: "Sincronização = espelhamento bidirecional (propaga alterações); backup = cópia independente para recuperação (recomendação 3-2-1 citada no conteúdo).",
    pegadinha: "A alternativa D troca os rótulos dos dois conceitos — quem lê 'propaga alterações' e para aí marca D sem notar que a palavra usada foi 'backup'."
  },
  {
    id: "q-m1-29",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-5",
    assunto: "M1.5 OneDrive",
    contexto: "Setor de TI afirma que a política de retenção de arquivos no OneDrive torna desnecessário manter cópias de segurança separadas do órgão.",
    enunciado: "O OneDrive é um backup imutável que protege automaticamente os usuários contra ransomware, dispensando cópias de segurança separadas.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'backup imutável que protege automaticamente ... contra ransomware, dispensando cópias de segurança separadas': o conteúdo base afirma que o OneDrive sincroniza (não é backup imutável), que alterações maliciosas propagam e que se recomenda backup separado (3-2-1).",
    justificativa: "O conteúdo do OneDrive é categórico: 'OneDrive NÃO substitui backup corporativo completo; é sincronização, não backup imutável (ransomware pode propagar alterações maliciosas para a nuvem)'. A recomendação registrada é manter backup separado (3 cópias, 2 mídias, 1 offsite). O item afirma o exato contrário.",
    analise: {
      item: "Item FALSO. Três asserções falsas no mesmo trecho: (1) não é backup imutável; (2) não há proteção automática garantida; (3) cópias separadas continuam necessárias.",
      leituraIncorreta: "Leitura que induz ao erro: o raciocínio de que 'está na nuvem, então está salvo'. A nuvem sincronizada é alvo da mesma ameaça que afeta a estação — é o modo como o ransomware se espalha."
    },
    regra: "Propriedades de backup: cópia independente, imutável e testável (3-2-1). Sincronização cumpre disponibilidade, não essas três propriedades.",
    pegadinha: "Item com conclusão de política ('dispensa backup'): mesmo que parte da frase pareça protetora, a negação de cópias separadas é suficiente para tornar o item falso."
  },
  {
    id: "q-m1-30",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-3",
    assunto: "M1.3 Excel (simulador documentado)",
    contexto: "Planilha com notas 7,5; 8,0; 6,5; 9,0 e 8,5. Fonte do conteúdo: escopo documentado do simulador Excel (assets/js/simulators.js) e exemplos resolvidos do index.html — a unidade 1.3 NÃO possui entrada de currículo em curriculum.js (limitação declarada do repositório).",
    enunciado: "Qual o resultado de MÉDIA(7,5; 8,0; 6,5; 9,0; 8,5)?",
    alternativas: [
      { letra: "A", texto: "7,9" },
      { letra: "B", texto: "7,5" },
      { letra: "C", texto: "9,0" },
      { letra: "D", texto: "39,5" }
    ],
    gabarito: "A",
    justificativa: "Cálculo completo: soma = 7,5 + 8,0 + 6,5 + 9,0 + 8,5 = 39,5; quantidade de valores = 5; média = 39,5 / 5 = 7,9. No simulador documentado, a função MEDIA converte vírgula para ponto, filtra não numéricos e retorna a média aritmética simples — exatamente 7,9 (representada como 7.9 na saída numérica).",
    analise: {
      A: "CORRETA. 39,5 ÷ 5 = 7,9 — cálculo completo demonstrado na justificativa.",
      B: "INCORRETA. Erro conceitual: 7,5 é o primeiro valor da lista (mínimo entre os dois primeiros), não a média; confundir 'valor inicial' com 'resultado da função'.",
      C: "INCORRETA. Erro conceitual: 9,0 é o MAIOR valor — resultado de MÁXIMO, não de MÉDIA (funções distintas no escopo documentado).",
      D: "INCORRETA. Erro conceitual: 39,5 é a SOMA — a média exige dividir pela contagem; retornar a soma é o erro típico de esquecer a divisão."
    },
    regra: "Média aritmética simples = soma dos valores ÷ quantidade de valores. No simulador: MÉDIA aceita vírgula ou ponto e ignora valores não numéricos.",
    pegadinha: "As alternativas B, C e D são resultados reais de OUTRAS funções do mesmo escopo (início da lista, MÁXIMO, SOMA) — a pegadinha é identificar a função pedida antes de calcular."
  },
  {
    id: "q-m1-31",
    modulo: 1,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-3",
    assunto: "M1.3 Excel (simulador documentado)",
    contexto: "Classificação de notas com o padrão do órgão: nota maior ou igual a 7 é 'Aprovado'; menor que 7 é 'Reprovado'. Fonte do conteúdo: exemplos resolvidos do index.html e escopo do simulador (assets/js/simulators.js).",
    enunciado: "Qual o resultado de SE(6,0 >= 7; \"Aprovado\"; \"Reprovado\")?",
    alternativas: [
      { letra: "A", texto: "Aprovado, porque a condição é sempre verdadeira quando há três argumentos." },
      { letra: "B", texto: "Reprovado, porque a condição 6,0 >= 7 é falsa e a função retorna o terceiro argumento." },
      { letra: "C", texto: "Reprovado, porque a função retorna sempre o último argumento recebido." },
      { letra: "D", texto: "ERRO, porque a SE não aceita comparações numéricas como condição." }
    ],
    gabarito: "B",
    justificativa: "A função SE avalia a condição lógica e retorna o segundo argumento se verdadeira e o terceiro se falsa (escopo documentado: SE requer condição; verdadeiro; falso). Como 6,0 >= 7 é falso, o retorno é o terceiro argumento: 'Reprovado'. O exemplo resolvido do index.html demonstra o caso oposto — SE(7.5 >= 7, ...) => 'Aprovado' — com a mesma estrutura.",
    analise: {
      A: "INCORRETA. Erro conceitual: achar que a quantidade de argumentos define a condição; a SE só devolve o segundo argumento se a condição for verdadeira.",
      B: "CORRETA. Condição falsa → terceiro argumento ('Reprovado'), conforme a semântica documentada da função.",
      C: "INCORRETA. Erro conceitual: retorno posicional fixo. A SE devolve o segundo OU o terceiro argumento conforme a condição — não 'sempre o último' (SE(6>=7; 'A'; 'B') retornaria 'A' na verdade... em sentido contrário: se a condição fosse verdadeira, retornaria o segundo).",
      D: "INCORRETA. Erro conceitual: a SE existe justamente para avaliar condições lógicas; o simulador aceita comparações numéricas na primeira posição dos argumentos."
    },
    regra: "SE(condição; valor_se_verdadeiro; valor_se_falso): retorna o 2º argumento quando a condição é verdadeira e o 3º quando é falsa. Ordem dos argumentos é obrigatória (erro comum documentado: inverter a ordem).",
    pegadinha: "A alternativa C imita quem decora 'o último valor digitado'. A regra é posicional e CONDICIONAL — releia sempre qual argumento corresponde ao ramo falso."
  },
  {
    id: "q-m1-32",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-3",
    assunto: "M1.3 Excel (simulador documentado)",
    contexto: "Manual do simulador Excel desta apostila descreve as regras de aceitação de entradas (assets/js/simulators.js — função rejeitaEntradaInvalida e escopo declarado).",
    enunciado: "No simulador documentado, entradas que utilizem fórmulas aninhadas complexas, nomes de intervalo externos ou referências a células fora do escopo declarado são rejeitadas com mensagem de erro útil, e as funções PROCX/PROCH/PROCV retornam mensagem documentada de não-execução de busca real.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'entradas ... com fórmulas aninhadas complexas, nomes de intervalo externos ou referências a células fora do escopo declarado são rejeitadas com mensagem de erro útil, e as funções PROCX/PROCH/PROCV retornam mensagem documentada de não-execução de busca real'.",
    justificativa: "O simulador declara literalmente: 'Este simulador aceita apenas valores numéricos, booleanos, strings simples e intervalos explícitos. Não aceita fórmulas aninhadas complexas, nomes de intervalo externos, referências a células fora do escopo documentado, ou sintaxe de outra versão/região', rejeitando com mensagem contendo 'ERRO DE ENTRADA'. PROCV/PROCH retornam 'SIMULADO: ... não executa busca real em matriz externa' e PROCX declara não implementado. O item descreve fielmente o escopo declarado.",
    analise: {
      item: "Item VERDADEIRO. Cada cláusula corresponde a uma regra publicada no próprio arquivo do simulador (aceitação/rejeição e limites das funções de pesquisa).",
      leituraIncorreta: "Leitura que induz ao erro: supor que PROCX executa busca de verdade ou que 'mensagem de erro' significa falha do sistema. O simulador DELIBERA rejeitar entradas fora do escopo — é comportamento documentado, não defeito."
    },
    regra: "Escopo declarado × funcionalidade: funções fora do escopo devem recusar entrada com mensagem útil e identificar a limitação (regra da Seção 7.1 do prompt mestre; nenhum resultado simulado pode ser apresentado como real).",
    pegadinha: "Item técnico longo com duas cláusulas: quem conhece só PROCX (não implementado) pode achar que a segunda metade 'exagera' ao citar PROCV/PROCH — mas ambos também documentam a mesma restrição de busca não-real."
  },
  /* ===================== FIM MÓDULO 1 (32 questões) ===================== */
  /* ===================== MÓDULO 2 — Redes de Computadores (26 questões) =====================
   * Fonte: assets/data/curriculum_m2.js — unidade 2.1 (7 subtópicos reais).
   * As unidades 2.2–2.5 ainda não possuem entrada de currículo; por isso não
   * há questões para elas (nada foi inventado para cobrir a lacuna). */

  {
    id: "q-m2-01",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — conceitos e componentes",
    contexto: "Estações de trabalho acessam arquivos de um servidor de arquivos compartilhado na rede do órgão.",
    enunciado: "Qual é a função principal de um servidor em uma rede, conforme a classificação cliente-servidor?",
    alternativas: [
      { letra: "A", texto: "Solicitar recursos e serviços de outros dispositivos da rede." },
      { letra: "B", texto: "Fornecer recursos e serviços para outros dispositivos." },
      { letra: "C", texto: "Interconectar redes geograficamente distantes entre si." },
      { letra: "D", texto: "Armazenar exclusivamente energia elétrica para as estações." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: 'Clientes são dispositivos que solicitam recursos; servidores são dispositivos que fornecem recursos', e a comunicação segue o modelo requisição-resposta, em que o cliente inicia o pedido e o servidor processa e responde. No cenário, o servidor de arquivos fornece arquivos às estações.",
    analise: {
      A: "INCORRETA. Erro conceitual: essa é a definição de CLIENTE (solicita), invertida no enunciado.",
      B: "CORRETA. Definição literal de servidor: fornece recursos e serviços.",
      C: "INCORRETA. Erro conceitual: atribuição de função de roteamento/interconexão (papel de roteadores e da própria WAN) ao servidor.",
      D: "INCORRETA. Erro conceitual: desconexão com o conteúdo — rede compartilha recursos e informação, não energia elétrica."
    },
    regra: "Modelo requisição-resposta: cliente solicita → servidor processa e responde. Papéis são funcionais, não físicos (o mesmo dispositivo pode ter ambos).",
    pegadinha: "Alternativa A é o oposto exato da definição; quem decora 'cliente-servidor' sem ler os verbos (solicitar × fornecer) tropeça nela."
  },
  {
    id: "q-m2-02",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — conceitos e componentes",
    contexto: "Servidor web do órgão consulta um servidor de banco de dados para montar páginas dinâmicas antes de responder ao navegador do usuário.",
    enunciado: "Em uma rede cliente-servidor, o servidor nunca assume o papel de cliente.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'o servidor nunca assume o papel de cliente': no próprio exemplo do currículo, um servidor web que consulta um servidor de banco de dados atua como cliente.",
    justificativa: "O exercício registrado no currículo afirma: 'Errado. Servidores podem ser clientes de outros servidores (ex: um servidor web que consulta um servidor de banco de dados)'. Os papéis são dinâmicos e dependem da comunicação específica, não do equipamento.",
    analise: {
      item: "Item FALSO. O advérbio 'nunca' é o que o destrói: em cadeias de requisição-resposta, o mesmo nó solicita (cliente) e fornece (servidor) em fluxos diferentes.",
      leituraIncorreta: "Leitura que induz ao erro: tratar 'cliente-servidor' como classificação fixa do equipamento. É classificação do MOMENTO da comunicação — é por isso que o exercício do currículo marca o item como Errado."
    },
    regra: "Papéis funcionais por comunicação: em uma cadeia A→B→C, B é servidor para A e cliente para C.",
    pegadinha: "Palavras absolutas ('nunca', 'sempre', 'somente') são os gatilhos clássicos de item C/E falso — mas só o conteúdo decide; aqui o currículo fornece contraprova explícita."
  },
  {
    id: "q-m2-03",
    modulo: 2,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — conceitos e componentes",
    contexto: "Empresa com 20 estações de trabalho, 1 servidor de arquivos e 1 impressora de rede; as estações acessam arquivos e enviam trabalhos de impressão.",
    enunciado: "Qual a classificação correta dos dispositivos do cenário?",
    alternativas: [
      { letra: "A", texto: "Servidores: servidor de arquivos e servidor de impressão (gerencia a impressora); clientes: as 20 estações quando acessam arquivos ou enviam impressões; nós: todos os dispositivos; enlaces: cabos ou Wi-Fi." },
      { letra: "B", texto: "Somente o servidor de arquivos é servidor; a impressora é sempre cliente e as estações são sempre servidores." },
      { letra: "C", texto: "As 20 estações são exclusivamente servidores porque iniciam requisições; os servidores são exclusivamente clientes." },
      { letra: "D", texto: "Só existem nós e enlaces; a distinção cliente-servidor só se aplica à Internet, não a redes internas." }
    ],
    gabarito: "A",
    justificativa: "O exemplo de aplicação do currículo mapeia exatamente o cenário: 'Servidores: servidor de arquivos (fornece arquivos) e servidor de impressão (gerencia impressora). Clientes: as 20 estações ao acessarem arquivos ou enviarem impressões. Nós: todos os dispositivos. Enlaces: cabos Cat6 ou Wi-Fi.' O exemplo introdutório do roteador/doméstico segue a mesma lógica (o roteador atua como servidor DNS/DHCP).",
    analise: {
      A: "CORRETA. Reproduz o mapeamento do exemplo resolvido do currículo, incluindo nós e enlaces.",
      B: "INCORRETA. Erro conceitual: fixação errônea de papéis (a impressora é recurso gerenciado; o serviço de impressão é que funciona como servidor).",
      C: "INCORRETA. Erro conceitual: confundir 'iniciar requisição' com ser servidor. Iniciar a requisição é característica do CLIENTE no modelo requisição-resposta.",
      D: "INCORRETA. Erro conceitual: restrição geográfica indevida. A classificação cliente-servidor descreve qualquer comunicação de rede, interna ou não."
    },
    regra: "Nós = todos os dispositivos (finais e intermediários); enlaces = canais; cliente/servidor = papéis por recurso solicitado/fornecido.",
    pegadinha: "A alternativa C é a pegadinha conceitual mais comum: 'quem pede é cliente, quem dá é servidor' — inverter os verbos leva a C, não a A."
  },
  {
    id: "q-m2-04",
    modulo: 2,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — conceitos e componentes",
    contexto: "Em uma rede peer-to-peer (ex.: compartilhamento de arquivos via BitTorrent), um nó baixa um arquivo e, ao mesmo tempo, serve pedidos de outros participantes.",
    enunciado: "Qual a descrição correta dos papéis em uma rede P2P?",
    alternativas: [
      { letra: "A", texto: "Em P2P não há distinção entre cliente e servidor: os papéis simplesmente desaparecem da arquitetura." },
      { letra: "B", texto: "Em P2P cada nó pode ser cliente E servidor simultaneamente; os papéis tornam-se dinâmicos, mas continuam existindo por comunicação." },
      { letra: "C", texto: "Em P2P todos os nós são exclusivamente servidores e nunca solicitam recursos." },
      { letra: "D", texto: "Em P2P só existe o papel de cliente, porque não há servidores dedicados na camada física." }
    ],
    gabarito: "B",
    justificativa: "O exemplo 'erro' do currículo corrige exatamente a afirmação da alternativa A: 'Parcialmente incorreto. Em P2P cada nó pode ser cliente E servidor simultaneamente (ex: BitTorrent), mas isso não elimina os papéis — apenas os torna dinâmicos'. O cenário (baixar e servir ao mesmo tempo) é a materialização desse conceito.",
    analise: {
      A: "INCORRETA. Erro conceitual: eliminar a distinção em vez de torná-la dinâmica — é literalmente a correção documentada no exemplo 'erro' do currículo.",
      B: "CORRETA. Dualidade e dinamismo de papéis, conforme a correção do currículo.",
      C: "INCORRETA. Erro conceitual: negar a solicitação; se todos só servissem, ninguém baixaria — contraria o próprio cenário.",
      D: "INCORRETA. Erro conceitual: nega a oferta de recursos; e a inexistência de servidor dedicado não apaga o papel funcional de servidor."
    },
    regra: "Arquitetura P2P: sem servidor central dedicado, mas com papéis funcionais simétricos — cada nó oferta e demanda recursos conforme a comunicação.",
    pegadinha: "A FGV adora a alternativa 'conceito radicalmente correto-errada' (A): ela parece profundamente técnica ('os papéis desaparecem'), mas contradiz a correção explícita do material."
  },
  {
    id: "q-m2-05",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s2",
    assunto: "M2.1 Fundamentos — classificação de redes",
    contexto: "Prefeitura deseja interligar suas secretarias distribuídas por uma mesma cidade.",
    enunciado: "Que tipo de rede atende à interligação descrita?",
    alternativas: [
      { letra: "A", texto: "PAN (Personal Area Network) — rede pessoal de curto alcance." },
      { letra: "B", texto: "LAN (Local Area Network) — rede limitada a um edifício ou campus." },
      { letra: "C", texto: "MAN (Metropolitan Area Network) — rede que cobre uma cidade." },
      { letra: "D", texto: "WAN (Wide Area Network) — rede de longa distância entre países." }
    ],
    gabarito: "C",
    justificativa: "O currículo define MAN como 'rede metropolitana, cobre uma cidade (ex: rede de uma prefeitura)' — o exemplo é literalmente o do enunciado. LAN cobre edifício/campus; WAN cobre países/continentes; PAN é pessoal (Bluetooth).",
    analise: {
      A: "INCORRETA. Erro conceitual: escopo pessoal (celular/fone) — muito aquém da interligação de secretarias.",
      B: "INCORRETA. Erro conceitual: escopo local restrito (edifício/campus); não cobre a cidade inteira entre prédios distintos.",
      C: "CORRETA. Definição e exemplo do currículo coincidem com o cenário.",
      D: "INCORRETA. Erro conceitual: generalização indevida — WAN é usada entre cidades/países; para uma única cidade, MAN é a classificação específica."
    },
    regra: "Classificação por escopo geográfico: PAN (pessoal) < LAN/WLAN (local) < MAN (cidade) < WAN (país/continente).",
    pegadinha: "WAN é a tentação clássica ('maior é melhor'); a classificação é por ABRANGÊNCIA MÍNIMA necessária, não pelo tamanho da organização."
  },
  {
    id: "q-m2-06",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s2",
    assunto: "M2.1 Fundamentos — classificação de redes",
    contexto: "Escritório com acesso Wi-Fi corporativo em todos os andares.",
    enunciado: "Uma WLAN é um tipo de LAN que utiliza comunicação sem fio.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'uma WLAN é um tipo de LAN que utiliza comunicação sem fio' — o currículo define WLAN (Wireless LAN) como 'LAN sem fio (ex: Wi-Fi)'.",
    justificativa: "A definição do currículo é literal: WLAN = Wireless LAN, ou seja, LAN sem fio, com o Wi-Fi como exemplo. O item apenas explicita a sigla expandida.",
    analise: {
      item: "Item VERDADEIRO. WLAN é derivação de LAN com meio sem fio — a relação hipônima está correta.",
      leituraIncorreta: "Leitura que induz ao erro: considerar WLAN uma categoria autônoma, distinta de LAN (o currículo a define como subtipo)."
    },
    regra: "Siglas de abrangência: PAN/LAN/MAN/WAN classificam área; o sufixo 'W' (Wireless) indica meio, não nova área.",
    pegadinha: "Item simples por design (básico): o risco é o excesso de confiança — itens C/E fáceis aparecem misturados com difíceis para testar disciplina de leitura."
  },
  {
    id: "q-m2-07",
    modulo: 2,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s2",
    assunto: "M2.1 Fundamentos — classificação de redes",
    contexto: "Empresa com matriz em São Paulo e filial no Rio de Janeiro precisa interligar as duas redes internas com segurança.",
    enunciado: "Que tipo de rede descreve a interconexão entre as duas sedes?",
    alternativas: [
      { letra: "A", texto: "LAN, porque ambas as sedes usam protocolos TCP/IP." },
      { letra: "B", texto: "MAN, porque as duas cidades são áreas metropolitanas." },
      { letra: "C", texto: "WAN, porque a interconexão cobre geograficamente distantes — podendo ser via Internet com VPN ou circuito dedicado." },
      { letra: "D", texto: "PAN, porque liga dois pontos específicos." }
    ],
    gabarito: "C",
    justificativa: "O exemplo de aplicação do currículo trata deste caso: 'Empresa com matriz em São Paulo e filial em Rio de Janeiro... WAN — interconexão entre redes geograficamente distantes. Pode ser via Internet (com VPN para segurança) ou via circuito dedicado (MPLS, fibra alugada)'.",
    analise: {
      A: "INCORRETA. Erro conceitual: protocolo não define abrangência — TCP/IP é usado em LAN, MAN e WAN.",
      B: "INCORRETA. Erro conceitual: MAN cobre UMA cidade; São Paulo–Rio são cidades distintas (intermunicipal/interestadual).",
      C: "CORRETA. Classificação correta + meios de realização descritos no exemplo do currículo.",
      D: "INCORRETA. Erro conceitual: PAN é curto alcance pessoal (Bluetooth), não interligação entre sedes."
    },
    regra: "WAN = interconexão de redes sobre longa distância; meios: VPN sobre Internet ou circuito dedicado (MPLS, fibra alugada).",
    pegadinha: "A alternativa B explora a palavra 'cidade' — quem lê 'duas cidades' e para aí escolhe MAN não percebe que a MAN do currículo cobre uma única área metropolitana."
  },
  {
    id: "q-m2-08",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s2",
    assunto: "M2.1 Fundamentos — classificação de redes",
    contexto: "Intranet do órgão hospeda o portal interno e é acessível apenas por contas corporativas; o mesmo portal tem uma área restrita a parceiros (extranet).",
    enunciado: "Intranet e Internet são a mesma coisa, mudando apenas o nome, porque ambas utilizam os mesmos protocolos TCP/IP.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'são a mesma coisa, mudando apenas o nome': o currículo define a intranet como rede interna PRIVADA de uma organização, não acessível publicamente, ao passo que a Internet é a rede pública global.",
    justificativa: "O exemplo 'erro' do currículo é este item: 'Errado. Intranet é uma rede privada interna de uma organização, não acessível publicamente. Internet é a rede pública global. A intranet usa protocolos TCP/IP iguais, mas com acesso restrito.' O uso de TCP/IP em ambos é verdadeiro, mas não equivale as duas redes.",
    analise: {
      item: "Item FALSO. A segunda metade (mesmos protocolos) é verdadeira; a primeira (mesma coisa) é falsa — e o item C/E exige que todo o enunciado seja verdadeiro.",
      leituraIncorreta: "Leitura que induz ao erro: validar só o trecho técnico (TCP/IP) e ignorar a identificação de rede. O critério distintivo é o ACESSO (privado/restrito × público global), não o protocolo."
    },
    regra: "Igualdade de protocolo ≠ igualdade de rede: distinção por domínio administrativo e política de acesso (intranet privada, extranet estendida a terceiros, Internet pública).",
    pegadinha: "Item composto com metade verdadeira — a pegadinha CESPE mais frequente. Anote cada cláusula separadamente antes de decidir."
  },
  {
    id: "q-m2-09",
    modulo: 2,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s3",
    assunto: "M2.1 Fundamentos — topologias",
    contexto: "Sala com 12 computadores conectados individualmente a um switch central.",
    enunciado: "Que topologia física é descrita?",
    alternativas: [
      { letra: "A", texto: "Topologia em anel, pois os pacotes viajam em uma direção." },
      { letra: "B", texto: "Topologia em estrela, com o switch como ponto central." },
      { letra: "C", texto: "Topologia em barra (bus), pois todos compartilham o mesmo enlace." },
      { letra: "D", texto: "Topologia em malha completa, pois cada nó se conecta a todos os demais." }
    ],
    gabarito: "B",
    justificativa: "O exemplo introdutório do currículo descreve exatamente o cenário: 'rede onde todos os computadores conectam a um switch central → Topologia estrela. O switch é o ponto central. Se um cabo falha, só aquele computador é afetado; se o switch falha, toda a rede cai'.",
    analise: {
      A: "INCORRETA. Erro conceitual: anel exige conexão em círculo com circulação de dados em uma direção (token ring) — não há ponto central.",
      B: "CORRETA. Todos os nós convergem para um dispositivo central (switch) — definição de estrela.",
      C: "INCORRETA. Erro conceitual: bus = mesmo cabo compartilhado (backbone coaxial); aqui cada nó tem enlace próprio até o switch.",
      D: "INCORRETA. Erro conceitual: em malha completa cada nó ligaria a todos os outros (12×11/2 = 66 enlaces); o cenário tem 12 enlaces até o central."
    },
    regra: "Estrela: enlaces ponta-a-ponta até hub/switch central; ponto único de falha = dispositivo central.",
    pegadinha: "A alternativa D soa 'moderna' (malha = alta disponibilidade), mas o critério é a disposição física dos enlaces descritos, não a qualidade desejada."
  },
  {
    id: "q-m2-10",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s3",
    assunto: "M2.1 Fundamentos — topologias",
    contexto: "Rede em estrela; um cabo de uma estação foi danificado durante obra no piso.",
    enunciado: "Na topologia em estrela, a falha de um computador derruba toda a rede, enquanto a falha do switch central não afeta os demais computadores.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é a dupla afirmação 'a falha de um computador derruba toda a rede, enquanto a falha do switch central não afeta os demais': o currículo inverte exatamente esses papéis — falha de um nó afeta apenas esse nó; falha do switch derruba toda a rede.",
    justificativa: "O exemplo 'erro' do currículo: 'Incorreto: na estrela, a falha de um nó afeta apenas esse nó. A falha do dispositivo central (switch/hub) é o que derruba toda a rede.' O cenário (cabo danificado de uma estação) resulta em indisponibilidade apenas daquela estação.",
    analise: {
      item: "Item FALSO. Inversão completa de causas e efeitos: as duas metades estão trocadas.",
      leituraIncorreta: "Leitura que induz ao erro: aceitar a primeira parte ('falha derruba tudo') por parecer 'preocupante e técnico'. A topologia estrela foi desenhada justamente para isolar falhas de nó — o custo é a dependência do central."
    },
    regra: "Estrela: tolerância a falha de nó; vulnerabilidade ao ponto central. Bus: falha do backbone derruba tudo. Anel: falha de nó pode quebrar o anel. Malha: redundância contra falha de enlace.",
    pegadinha: "Inversão de predicados em item composto — a mesma estrutura do item de listas no M1; a leitura cláusula a cláusula resolve."
  },
  {
    id: "q-m2-11",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t1-s3",
    assunto: "M2.1 Fundamentos — topologias",
    contexto: "Rede industrial de controle de processo com disponibilidade crítica: a parada do sistema gera prejuízo e risco; o orçamento admite custo adicional de cabos.",
    enunciado: "Que topologia é a mais adequada ao requisito de alta disponibilidade descrito?",
    alternativas: [
      { letra: "A", texto: "Topologia em barra (bus), por usar um único cabo e ser simples de instalar." },
      { letra: "B", texto: "Topologia em anel, pois a circulação em uma direção garante entrega." },
      { letra: "C", texto: "Topologia em malha, porque cada nó possui múltiplos caminhos e o tráfego é redirecionado em caso de falha de enlace — com custo maior." },
      { letra: "D", texto: "Topologia em estrela simples, pois o switch central elimina a possibilidade de falha." }
    ],
    gabarito: "C",
    justificativa: "O exemplo de aplicação do currículo é este: 'Uma rede industrial precisa de alta disponibilidade e tolerância a falhas. Qual topologia é mais adequada? Malha — cada nó tem múltiplos caminhos. Se um enlace falha, o tráfego é redirecionado. O custo é maior, mas a justificativa é a disponibilidade crítica'.",
    analise: {
      A: "INCORRETA. Erro conceitual: a bus tem ponto único de falha (cabo backbone) e colisões frequentes — o oposto de tolerância.",
      B: "INCORRETA. Erro conceitual: em anel, falha de um nó pode quebrar o anel (o currículo registra essa fragilidade) — não há redundância intrínseca.",
      C: "CORRETA. Redundância de caminhos + redirecionamento, com o trade-off de custo registrado no exemplo.",
      D: "INCORRETA. Erro conceitual: o switch central é ponto único de falha — a estrela não elimina falha; apenas isola falhas de nó."
    },
    regra: "Trade-off topologia × disponibilidade × custo: malha = redundância máxima/custo máximo; estrela = custo baixo/dependência do central; bus = ponto único de falha.",
    pegadinha: "A alternativa D nega a realidade ('elimina a possibilidade de falha') — qualquer afirmação absoluta sobre falhas em rede deve acender alerta; a FCC cobra o trade-off explícito custo × disponibilidade."
  },
  {
    id: "q-m2-12",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t1-s3",
    assunto: "M2.1 Fundamentos — topologias",
    contexto: "Rede legada em topologia bus (coaxial 10BASE2); um corte no cabo backbone interrompeu a comunicação de todas as estações.",
    enunciado: "Na topologia em barra (bus), a falha do cabo principal derruba toda a rede, pois o backbone é ponto único de falha e a topologia apresenta colisões frequentes.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'a falha do cabo principal derruba toda a rede, pois o backbone é ponto único de falha e a topologia apresenta colisões frequentes'.",
    justificativa: "O exercício registrado no currículo marca o item como Certo ('O cabo backbone é ponto único de falha na topologia bus'), e o subtópico descreve a barra como 'simples mas colisões frequentes e falha no cabo derruba tudo'. O cenário observado (corte no backbone parando tudo) é a consequência prevista.",
    analise: {
      item: "Item VERDADEIRO. Causa (backbone único) e efeitos (queda total; colisões) são atributos documentados da topologia bus.",
      leituraIncorreta: "Leitura que induz ao erro: imaginar que o cabo 'partido' ainda conduz parte da rede (em bus com terminadores, a integridade do enlace é necessária em toda a extensão)."
    },
    regra: "Bus: enlace compartilhado único — indisponibilidade total em falha do backbone e colisões por domínio de contenção compartilhado.",
    pegadinha: "Item Certo 'tecnicalmente duro': o examinando pode associar bus apenas a 'rede antiga' e reler o efeito da falha; a cobrança é do ponto único de falha, não da antiguidade."
  },
  {
    id: "q-m2-13",
    modulo: 2,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s4",
    assunto: "M2.1 Fundamentos — comutação",
    contexto: "Usuário acessa páginas web em um navegador conectado à Internet.",
    enunciado: "Que tipo de comutação é utilizado pela Internet?",
    alternativas: [
      { letra: "A", texto: "Comutação de circuitos, com caminho dedicado estabelecido antes da comunicação." },
      { letra: "B", texto: "Comutação de pacotes, em que os dados são divididos em pacotes que caminham independentemente pela rede." },
      { letra: "C", texto: "Comutação de circuitos virtuais exclusiva, sem divisão de dados em pacotes." },
      { letra: "D", texto: "Nenhuma das anteriores: a Internet não realiza comutação, apenas transmissão." }
    ],
    gabarito: "B",
    justificativa: "O currículo afirma: 'A Internet usa comutação de pacotes; redes telefônicas tradicionais usam comutação de circuitos', e define: pacotes caminham independentemente (eficiência, tolerância a falhas; latência variável).",
    analise: {
      A: "INCORRETA. Erro conceitual: é o modelo da telefonia tradicional (PSTN) descrito no currículo — caminho dedicado, banda fixa.",
      B: "CORRETA. Definição e exemplo do currículo apontam a Internet como comutação de pacotes.",
      C: "INCORRETA. Erro conceitual: mistura os modelos. Circuitos virtuais (Frame Relay, MPLS) têm caminho lógico predefinido; a Internet roteia pacotes independentemente.",
      D: "INCORRETA. Erro conceitual: premissa falsa — toda comunicação em rede passa por algum modelo de comutação; o currículo classifica a Internet explicitamente."
    },
    regra: "Comutação de circuitos (caminho dedicado, antes da fala) × comutação de pacotes (divisão e roteamento independente, após a fala).",
    pegadinha: "A alternativa C é a 'sofisticada': circuito VIRTUAL parece conciliar os dois — mas no currículo ela é exempificação de outro protocolo (MPLS/Frame Relay), não da Internet."
  },
  {
    id: "q-m2-14",
    modulo: 2,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s4",
    assunto: "M2.1 Fundamentos — comutação",
    contexto: "Comparação entre uma ligação telefônica tradicional (PSTN) e uma chamada VoIP para fins de dimensionamento.",
    enunciado: "Qual é a principal vantagem da comutação de pacotes sobre a de circuitos, conforme o currículo?",
    alternativas: [
      { letra: "A", texto: "Latência sempre menor e previsível, sem variação entre pacotes." },
      { letra: "B", texto: "Melhor aproveitamento da largura de banda, pois o enlace é compartilhado entre múltiplas comunicações." },
      { letra: "C", texto: "Maior simplicidade de implementação, por dispensar cabeçalhos e roteamento." },
      { letra: "D", texto: "Eliminação de perda de pacotes e de necessidade de reordenação." }
    ],
    gabarito: "B",
    justificativa: "O currículo lista as vantagens da comutação de pacotes: 'eficiência (compartilha largura de banda), tolerância a falhas'. A alternativa B traduz a eficiência em aproveitamento do enlace. As desvantagens registradas são justamente latência variável (jitter), perda de pacotes e necessidade de reordenação — o que derruba A e D.",
    analise: {
      A: "INCORRETA. Erro conceitual: desvantagem apresentada como vantagem. Latência previsível é atributo do circuito dedicado; o pacote sofre jitter.",
      B: "CORRETA. Compartilhar largura de banda entre comunicações é a eficiência citada no currículo.",
      C: "INCORRETA. Erro conceitual: a comutação de pacotes exige cabeçalhos por pacote e roteamento independente — mais mecanismos, não menos.",
      D: "INCORRETA. Erro conceitual: perda e reordenação são listadas como DESVANTAGENS do modelo — nada é eliminado."
    },
    regra: "Trade-off: circuitos = reserva fixa (desperdício ocioso, latência previsível) × pacotes = compartilhamento (eficiência, jitter, perda, reordenação).",
    pegadinha: "A alternativa A atrai quem associa 'VoIP = mais rápida'; a FGV cobra separar a característica do modelo (previsibilidade × eficiência), não a sensação de uso."
  },
  {
    id: "q-m2-15",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s4",
    assunto: "M2.1 Fundamentos — comutação",
    contexto: "Análise de tráfego mostra que pacotes de uma mesma transferência chegam por caminhos e ordens diferentes no destino.",
    enunciado: "Na comutação de pacotes utilizada na Internet, os pacotes de uma mesma comunicação sempre seguem o mesmo caminho entre origem e destino.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'sempre seguem o mesmo caminho': na comutação de pacotes, cada pacote é roteado independentemente e pode seguir caminhos diferentes — o caminho lógico predefinido é característica de circuitos virtuais (Frame Relay, MPLS).",
    justificativa: "O exemplo 'erro' do currículo: 'Incorreto. Na comutação de pacotes (como na Internet), cada pacote é roteado independentemente e pode seguir caminhos diferentes. Na comutação de circuitos virtuais (Frame Relay, MPLS), há um caminho lógico predefinido.' A observação do cenário (chegada desordenada) é a consequência natural desse roteamento independente.",
    analise: {
      item: "Item FALSO. O advérbio 'sempre' contradiz o roteamento independente por pacote; a ordenação no destino é justamente uma das desvantagens listadas (necessidade de reordenação).",
      leituraIncorreta: "Leitura que induz ao erro: confundir sessão/conexão TCP (comunicacionalmente contínua) com caminho de encaminhamento dos pacotes — continuidade lógica não implica rota física única."
    },
    regra: "Encaminhamento stateless por pacote × circuito virtual com caminho lógico predefinido; reordenação é responsabilidade das camadas superiores quando necessário.",
    pegadinha: "A palavra 'sempre' é o gatilho; mas atenção — o item só cai por causa dela: se fosse 'cada pacote é roteado independentemente', seria Certo. Identifique o modificador, não a impressão geral."
  },
  {
    id: "q-m2-16",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t1-s4",
    assunto: "M2.1 Fundamentos — comutação",
    contexto: "Operadora compara a PSTN tradicional com uma chamada VoIP para explicar diferenças a um cliente.",
    enunciado: "Sobre os dois modelos descritos, qual afirmação é correta?",
    alternativas: [
      { letra: "A", texto: "A PSTN usa comutação de pacotes com latência variável; a VoIP usa comutação de circuitos com banda fixa." },
      { letra: "B", texto: "A PSTN estabelece um circuito dedicado pela duração da chamada (latência previsível, banda fixa); a VoIP divide a voz em pacotes que competem com outros tráfegos (latência variável)." },
      { letra: "C", texto: "Os dois modelos são idênticos; apenas o código de cores dos aparelhos difere." },
      { letra: "D", texto: "A VoIP elimina jitter e perda de pacotes, pois a voz tem prioridade automática em qualquer rede." }
    ],
    gabarito: "B",
    justificativa: "O exemplo introdutório do currículo compara: 'PSTN: comutação de circuitos — caminho dedicado estabelecido pela duração da chamada, banda fixa. VoIP: comutação de pacotes — voz dividida em pacotes que competem com outros tráfegos, latência variável.' A alternativa B reproduz integralmente essa comparação.",
    analise: {
      A: "INCORRETA. Erro conceitual: inversão dos dois modelos (mesma pegadinha do item de anexos no M1, agora com protocolos).",
      B: "CORRETA. Atributos corretos para cada modelo, conforme o exemplo do currículo.",
      C: "INCORRETA. Erro conceitual: igualdade falsa — o currículo sustenta a comparação justamente nas diferenças de caminho e latência.",
      D: "INCORRETA. Erro conceitual: premissa de garantia inexistente. Jitter e perda são desvantagens registradas da comutação de pacotes; priorização exige QoS configurada (aparece no exemplo de aplicação de métricas)."
    },
    regra: "PSTN/circuito: setup → circuito reservado → liberação. VoIP/pacotes: encapsulamento da voz em pacotes sujeitos a fila, jitter e perda — mitigáveis com QoS.",
    pegadinha: "A alternativa D 'resolve o problema' com uma garantia universal ('em qualquer rede') — afirmações de garantia absoluta em redes são quase sempre falsas."
  },
  {
    id: "q-m2-17",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t2-s1",
    assunto: "M2.1 Comunicação — unicast, broadcast, multicast e anycast",
    contexto: "Navegador do usuário estabelece conexão com o servidor web de um portal gov.br.",
    enunciado: "Que tipo de comunicação corresponde ao acesso descrito?",
    alternativas: [
      { letra: "A", texto: "Unicast — comunicação um-para-um entre navegador e servidor." },
      { letra: "B", texto: "Broadcast — envio um-para-todos na rede." },
      { letra: "C", texto: "Multicast — envio para um grupo de assinantes." },
      { letra: "D", texto: "Anycast — envio para o nó mais próximo de um conjunto distribuído." }
    ],
    gabarito: "A",
    justificativa: "O exemplo introdutório do subtópico: 'Identificar o tipo de comunicação quando um computador acessa um site → Unicast — comunicação um-para-um entre o navegador (cliente) e o servidor web'.",
    analise: {
      A: "CORRETA. Um cliente, um servidor — unicast.",
      B: "INCORRETA. Erro conceitual: broadcast alcança todos os nós do domínio de broadcast (ex.: ARP, DHCP discovery) — não é o caso de uma requisição HTTP direcionada.",
      C: "INCORRETA. Erro conceitual: multicast exige grupo com inscrição (IGMP) — ex.: streaming IPTV; acesso web não cria nem pertence a grupo.",
      D: "INCORRETA. Erro conceitual: anycast distribui várias réplicas do mesmo serviço e entrega à mais próxima (ex.: servidores DNS raiz, CDN) — não é o modelo de acesso direto a um site específico."
    },
    regra: "Tipos de comunicação por cardinalidade: unicast (1:1), broadcast (1:todos no domínio), multicast (1:grupo inscrito), anycast (1:réplica mais próxima).",
    pegadinha: "Anycast (D) é a alternativa moderna tentadora: 'servidor mais próximo' parece plausível para sites, mas o currículo o associa a serviços distribuídos (DNS raiz/CDN), não ao acesso web genérico do exemplo."
  },
  {
    id: "q-m2-18",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t2-s1",
    assunto: "M2.1 Comunicação — unicast, broadcast, multicast e anycast",
    contexto: "Servidor de streaming corporativo entrega um fluxo de vídeo a estações que demonstraram interesse em recebê-lo.",
    enunciado: "No multicast, o receptor precisa inscrever-se em um grupo para receber o tráfego, gerenciamento realizado por meio do protocolo IGMP.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'o receptor precisa inscrever-se em um grupo para receber o tráfego, gerenciamento realizado por meio do protocolo IGMP'.",
    justificativa: "O currículo define multicast como 'um-para-muitos (grupo específico que se inscreveu)' e afirma que 'multicast usa IGMP para gerenciamento de grupo'; o exercício registrado responde 'Certo. O receptor envia IGMP join para receber tráfego multicast'.",
    analise: {
      item: "Item VERDADEIRO. Inscrição no grupo e papel do IGMP constam tanto do conteúdo quanto do exercício do currículo.",
      leituraIncorreta: "Leitura que induz ao erro: confundir com broadcast, que é enviado a todos sem inscrição — a distinção central é o JOIN (participação opt-in)."
    },
    regra: "Multicast: envio único replicado apenas nos pontos de ramificação; participação opt-in gerenciada por IGMP (IP de camada 3).",
    pegadinha: "O item combina conceito (inscrição) e protocolo (IGMP) — quem decora só um dos dois relê e decide Errado; leia cláusula a cláusula."
  },
  {
    id: "q-m2-19",
    modulo: 2,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t2-s1",
    assunto: "M2.1 Comunicação — unicast, broadcast, multicast e anycast",
    contexto: "Empresa fará streaming de treinamento para 50 funcionários simultaneamente na mesma rede.",
    enunciado: "Qual o tipo de comunicação mais eficiente para o cenário, e por quê?",
    alternativas: [
      { letra: "A", texto: "Unicast, pois cada funcionário receberia fluxo próprio com menor latência individual." },
      { letra: "B", texto: "Broadcast, pois todos os funcionários devem receber o conteúdo." },
      { letra: "C", texto: "Multicast, pois um fluxo único é replicado apenas nos pontos de ramificação — em vez dos 50 fluxos exigidos pelo unicast." },
      { letra: "D", texto: "Anycast, pois o servidor mais próximo atenderia cada funcionário." }
    ],
    gabarito: "C",
    justificativa: "O exemplo de aplicação do currículo: 'Multicast — o servidor envia um fluxo único que é replicado pela rede apenas nos pontos de ramificação. Unicast exigiria 50 fluxos separados, consumindo 50x a largura de banda'. O exemplo introdutório de multicast é justamente streaming (IPTV).",
    analise: {
      A: "INCORRETA. Erro conceitual: eficiência de banda ignorada — 50 fluxos independentes, consumo multiplicado (o currículo quantifica 50×).",
      B: "INCORRETA. Erro conceitual: broadcast atinge todos do domínio (inclusive quem não quer), é limitado por roteador e não é o modelo de 'grupo que se inscreveu'.",
      C: "CORRETA. Reproduz o raciocínio de eficiência documentado no exemplo do currículo.",
      D: "INCORRETA. Erro conceitual: anycast distribui réplicas de serviço para nós distintos mais próximos — não resolve entrega simultânea do mesmo fluxo a um grupo na LAN."
    },
    regra: "Eficiência de entrega: unicast escala linearmente em banda (N receptores = N fluxos); multicast replica só onde há ramificação de grupo.",
    pegadinha: "A alternativa B parece resolver ('todos precisam receber'), mas broadcast é indiscriminado e limitado ao domínio — a pegadinha é confundir 'todo mundo quer' com 'todo mundo do domínio recebe'."
  },
  {
    id: "q-m2-20",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t2-s1",
    assunto: "M2.1 Comunicação — unicast, broadcast, multicast e anycast",
    contexto: "Nota técnica afirma que uma estação pode propagar mensagens de descoberta broadcast para toda a Internet, alcançando servidores remotos.",
    enunciado: "A mensagem de broadcast enviada por uma estação atravessa roteadores e pode chegar a qualquer destino na Internet.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'atravessa roteadores e pode chegar a qualquer destino na Internet': o currículo afirma que o broadcast é limitado ao domínio de broadcast (sub-rede local) porque roteadores não encaminham broadcasts (255.255.255.255) para evitar tempestades de broadcast.",
    justificativa: "O exemplo 'erro' do subtópico: 'Incorreto. Broadcast é limitado ao domínio de broadcast (sub-rede local). Roteadores não encaminham broadcasts (255.255.255.255) para evitar tempestades de broadcast.' O próprio conteúdo registra que 'broadcast é limitado por roteadores (não atravessa sub-redes)'.",
    analise: {
      item: "Item FALSO. Roteadores fazem fronteira de domínio de broadcast — o pacote de broadcast não sai da sub-rede.",
      leituraIncorreta: "Leitura que induz ao erro: associação com multicast (que trafega entre redes quando o roteamento multicast existe) ou com a ideia de que 'broadcast = alta propagação'. São mecanismos distintos."
    },
    regra: "Domínio de broadcast = sub-rede; roteador encaminha tráfego unicast/multicast roteável, mas bloqueia broadcast para evitar tempestade (broadcast storm).",
    pegadinha: "Exemplo prático no currículo: DHCP discovery e ARP usam broadcast justamente porque se destinam à sub-rede local — é essa a fronteira natural do mecanismo."
  },
  {
    id: "q-m2-21",
    modulo: 2,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t3-s1",
    assunto: "M2.1 Métricas de desempenho",
    contexto: "Link contratado de 100 Mbps; medições mostram transferência real de 85 Mbps.",
    enunciado: "Qual afirmação explica corretamente a diferença observada?",
    alternativas: [
      { letra: "A", texto: "Largura de banda é 100 Mbps (capacidade máxima teórica) e throughput é 85 Mbps (taxa real); a diferença decorre de overhead de protocolo, colisões e congestionamento." },
      { letra: "B", texto: "Largura de banda e throughput são sinônimos; os 15 Mbps restantes foram 'perdidos' por erro do provedor." },
      { letra: "C", texto: "O throughput (100 Mbps) é a capacidade teórica e a largura de banda (85 Mbps) é o que se mede em campo." },
      { letra: "D", texto: "A latência explica integralmente a diferença, pois pacotes lentos reduzem a capacidade máxima teórica do canal." }
    ],
    gabarito: "A",
    justificativa: "O exemplo introdutório do currículo: 'Um link de 100 Mbps tem throughput de 85 Mbps → Largura de banda = 100 Mbps (capacidade teórica). Throughput = 85 Mbps (real). A diferença se deve a overhead de protocolo (cabeçalhos TCP/IP), colisões, congestionamento e qualidade do sinal.' O item reproduz a explicação completa.",
    analise: {
      A: "CORRETA. Conceitos, valores e causas coincidem com o exemplo resolvido do currículo.",
      B: "INCORRETA. Erro conceitual: sinonímia — o exemplo 'erro' do currículo corrige exatamente isso ('Largura de banda e throughput não são sinônimos').",
      C: "INCORRETA. Erro conceitual: inversão dos dois termos (teórica × real).",
      D: "INCORRETA. Erro conceitual: latência é tempo de trânsito, não capacidade do canal; e a diferença é multicausa (overhead, colisões, congestionamento, sinal)."
    },
    regra: "bandwidth = capacidade máxima teórica; throughput = taxa efetiva medida (≤ bandwidth); causas da diferença: overhead de cabeçalhos, colisões, congestionamento, qualidade do sinal.",
    pegadinha: "A alternativa C inverte os termos — a FGV cobra o par conceitual (teórico × real) sob pressão numérica; escreva os rótulos antes de decidir."
  },
  {
    id: "q-m2-22",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t3-s1",
    assunto: "M2.1 Métricas de desempenho",
    contexto: "Chamada VoIP com áudio interrompido; diagnóstico: ping estável em 30 ms, mas jitter medido em 50 ms.",
    enunciado: "Qual a causa provável do problema e a providência indicada pelo currículo?",
    alternativas: [
      { letra: "A", texto: "Perda de pacotes alta; solução: aumentar a largura de banda do link." },
      { letra: "B", texto: "Jitter alto (variação de latência); solução: habilitar QoS para priorizar tráfego de voz ou usar buffer de jitter no receptor." },
      { letra: "C", texto: "Latência média alta; solução: trocar o meio de transmissão para fibra óptica." },
      { letra: "D", texto: "Throughput baixo; solução: reduzir o número de dispositivos na rede." }
    ],
    gabarito: "B",
    justificativa: "O exemplo de aplicação do currículo descreve o caso: 'ping está estável (30 ms) mas o jitter é alto (50 ms) → Jitter alto — variação na latência. Solução: habilitar QoS (Quality of Service) para priorizar tráfego de voz, ou usar buffer de jitter no receptor'. Com ping estável, a latência média não é o problema — a variação é.",
    analise: {
      A: "INCORRETA. Erro conceitual: perda de pacotes teria sintoma de truncamento/ruído por ausência de pacotes, e o cenário não reporta perda; a métrica problemática informada é o jitter.",
      B: "CORRETA. Diagnóstico e remédio idênticos ao exemplo do currículo.",
      C: "INCORRETA. Erro conceitual: latência alta seria ping alto e constante — o ping está estável em 30 ms (baixo).",
      D: "INCORRETA. Erro conceitual: throughput não é a métrica de suavidade temporal da voz; remover dispositivos não trata variação de latência."
    },
    regra: "Interpretação de métricas: ping estável + jitter alto = variação (problema de temporização); ping alto = latência; perda = pacotes ausentes. Mitigação de jitter: QoS e buffer de jitter.",
    pegadinha: "A FCC cobra ler o DIAGNÓSTICO inteiro: as alternativas A, C e D descrevem problemas reais de rede, mas nenhum deles é o que os dados do enunciado indicam."
  },
  {
    id: "q-m2-23",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t3-s1",
    assunto: "M2.1 Métricas de desempenho",
    contexto: "Relatório de monitoramento registra, para cada pacote de uma sessão, o tempo de trânsito e a diferença entre pacotes consecutivos.",
    enunciado: "Jitter é a variação na latência entre pacotes consecutivos, e a perda de pacotes pode indicar congestionamento, erro de transmissão ou bloqueio por firewall.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'jitter é a variação na latência entre pacotes consecutivos, e a perda de pacotes pode indicar congestionamento, erro de transmissão ou bloqueio por firewall'.",
    justificativa: "O subtópico de métricas define: 'Jitter: variação na latência entre pacotes consecutivos — crítico para VoIP e streaming' e 'Perda de pacotes: porcentagem de pacotes que não chegam ao destino — pode indicar congestionamento, erro de transmissão ou firewall'. Ambas as metades do item são literais.",
    analise: {
      item: "Item VERDADEIRO. Definição de jitter e causas de perda de pacotes estão corretamente reproduzidas.",
      leituraIncorreta: "Leitura que induz ao erro: tratar jitter como 'latência alta' (sinônimo). Jitter é DIFERENÇA entre latências — por isso VoIP falha mesmo com ping baixo (ver exemplo de aplicação do currículo)."
    },
    regra: "Métricas temporais: latência (nível), jitter (variação do nível), perda (ausência). Causas de perda: congestionamento, erro de transmissão, firewall.",
    pegadinha: "Item duplo com duas definições — valide cada uma separadamente; a segunda metade traz 'pode indicar' (lista de hipóteses), o que é compatível com o texto-base e não invalida o item."
  },
  {
    id: "q-m2-24",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t4-s1",
    assunto: "M2.1 Meios de transmissão",
    contexto: "Ambiente de fábrica com máquinas elétricas de alta potência exige instalação de rede cabeada curta (30 m), com orçamento controlado.",
    enunciado: "Qual meio de transmissão é o mais indicado para o cenário?",
    alternativas: [
      { letra: "A", texto: "UTP (par trançado sem blindagem), por ser barato e simples de instalar." },
      { letra: "B", texto: "STP (par trançado com blindagem), que reduz a interferência eletromagnética em ambientes com alta interferência." },
      { letra: "C", texto: "Coaxial, pois é o meio usado em redes antigas e TV a cabo." },
      { letra: "D", texto: "Wi-Fi na banda de 2,4 GHz, pois não exige cabeamento." }
    ],
    gabarito: "B",
    justificativa: "O exemplo de aplicação do currículo: 'Uma fábrica com máquinas elétricas de alta potência precisa de rede cabeada. UTP ou STP? → STP — blindagem reduz interferência eletromagnética. Em casos extremos, fibra óptica é a solução definitiva (imune a EMI).' O cenário exige rede cabeada (exclui D), com proteção contra EMI (exclui A e C).",
    analise: {
      A: "INCORRETA. Erro conceitual: o currículo classifica o UTP como 'suscetível a interferência eletromagnética' — justamente a fraqueza crítica no ambiente descrito.",
      B: "CORRETA. STP = blindagem contra EMI, recomendado pelo exemplo de aplicação do currículo.",
      C: "INCORRETA. Erro conceitual: o coaxial não é blindagem contra EMI de máquina; é meio legado (TV a cabo, 10BASE2) sem a vantagem exigida.",
      D: "INCORRETA. Erro conceitual: viola a premissa 'rede cabeada' do cenário e o Wi-Fi é suscetível a interferência em ambiente industrial."
    },
    regra: "Meios × ambiente: UTP (barato, suscetível) / STP (blindado, EMI) / fibra (imune, maior custo) / coaxial (legado) / Wi-Fi (sem fio, 2,4/5 GHz).",
    pegadinha: "A alternativa D até 'resolve' a EMI por não ter fio, mas fere a premissa explícita do enunciado ('rede cabeada') — premissas do cenário são parte da questão."
  },
  {
    id: "q-m2-25",
    modulo: 2,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t4-s1",
    assunto: "M2.1 Meios de transmissão",
    contexto: "Dois prédios do órgão estão distantes 500 m; a ligação deve suportar tráfego sem repetidor intermediário e não pode sofrer interferência eletromagnética (risco de raios na região).",
    enunciado: "Qual meio de transmissão atende aos requisitos?",
    alternativas: [
      { letra: "A", texto: "UTP Cat6, pois suporta 10 Gbps em distâncias que cobrem 500 m." },
      { letra: "B", texto: "Wi-Fi ponto a ponto em 5 GHz outdoor, pois dispensa cabo." },
      { letra: "C", texto: "Fibra óptica monomodo — indicada para longa distância, imune a interferência eletromagnética, suportando os 500 m sem repetidor." },
      { letra: "D", texto: "Coaxial 10BASE2, por ser o meio de maior alcance entre os cabados." }
    ],
    gabarito: "C",
    justificativa: "O exemplo introdutório do currículo: 'Dois prédios a 500m → Fibra óptica monomodo — imune a interferência eletromagnética (raios), suporta 500m sem repetidor. UTP Cat6 limita-se a 100m.' O conteúdo completo confirma: fibra monomodo = longa distância (laser), imunidade a EMI, alta largura de banda; UTP Cat6 = 10 Gbps até 55 m (Cat6a até 100 m).",
    analise: {
      A: "INCORRETA. Erro conceitual: distância inválida. O UTP limita-se a 100 m (e o Cat6 a 55 m para 10 Gbps) — 500 m extrapola a premissa do próprio currículo.",
      B: "INCORRETA. Erro conceitual: o cenário exige imunidade a EMI e o enlace sem fio é justamente vulnerável a interferências; a fibra é apontada como solução para o caso.",
      C: "CORRETA. Monomodo + imunidade a EMI + alcance — todos os requisitos do cenário.",
      D: "INCORRETA. Erro conceitual: coaxial é meio legado de curta/média distância em redes antigas; não é a solução de longa distância imune a EMI."
    },
    regra: "Limites de alcance: UTP até 100 m (Cat6 10 Gbps até 55 m; Cat6a 10 Gbps até 100 m); fibra monomodo para longa distância; fibra multimodo para curta distância (LED).",
    pegadinha: "A alternativa A repete um dado verdadeiro (Cat6 = 10 Gbps) fora de contexto (distância) — a VUNESP cobra combinar TODAS as propriedades: taxa, alcance e imunidade."
  },
  {
    id: "q-m2-26",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t4-s1",
    assunto: "M2.1 Meios de transmissão",
    contexto: "Projeto de cabeamento especifica enlaces de 10 Gbps com execução de 90 metros em cada ponto até o switch.",
    enunciado: "A especificação atende ao limite do UTP Cat6, que suporta 10 Gbps até 100 metros.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'o UTP Cat6, que suporta 10 Gbps até 100 metros': conforme o currículo, o Cat6 suporta 10 Gbps até 55 m — os 100 m cabíveis em 10 Gbps são do Cat6a.",
    justificativa: "O exercício registrado no currículo: '(C/E) UTP Cat6 suporta 10 Gbps até 100 metros → Errado. Cat6 suporta 10 Gbps até 55m; Cat6a suporta 10 Gbps até 100m.' Com 90 m de execução, a especificação Cat6 não atinge 10 Gbps — o projeto exigiria Cat6a.",
    analise: {
      item: "Item FALSO. O número associado ao Cat6 está trocado: 10 Gbps até 55 m (não 100 m). O cenário de 90 m torna o erro prático, não apenas nominal.",
      leituraIncorreta: "Leitura que induz ao erro: memorizar '100 m' como limite universal de par trançado (verdadeiro para 1 Gbps e para Cat6a em 10 Gbps). O limite depende da TAXA: 10 Gbps × Cat6 = 55 m."
    },
    regra: "Limites UTP: Cat5e — 1 Gbps; Cat6 — 10 Gbps até 55 m; Cat6a — 10 Gbps até 100 m. Alcance padrão de par trançado = 100 m na taxa de 1 Gbps.",
    pegadinha: "Número + categoria + taxa: três variáveis no mesmo item. O CESPE troca apenas uma (100 m no lugar de 55 m) — quem lê '100 m é padrão de UTP' e não confere a taxa marca Certo por engano."
  },
  /* ===================== FIM MÓDULO 2 (26 questões) ===================== */
  /* ===================== MÓDULO 3 — Comunicação e Colaboração (24 questões) =====================
   * Fonte: assets/data/curriculum_m3.js — 3.1 Correio eletrônico (4 subtópicos)
   * e 3.2 Calendários e reuniões (4 subtópicos). Questões jurídicas citam
   * APENAS os artigos da LGPD verificados em referencias/referencias-verificadas.md. */

  {
    id: "q-m3-01",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t1-s1",
    assunto: "M3.1 E-mail — SMTP",
    contexto: "Funcionário enviará e-mails corporativos com segurança por meio do servidor de submissão do órgão.",
    enunciado: "Qual porta SMTP é recomendada para envio seguro de e-mail, conforme o currículo?",
    alternativas: [
      { letra: "A", texto: "Porta 25 — porta padrão do SMTP sem criptografia." },
      { letra: "B", texto: "Porta 110 — porta POP3 sem criptografia." },
      { letra: "C", texto: "Porta 587 — submissão com STARTTLS." },
      { letra: "D", texto: "Porta 143 — porta IMAP sem criptografia." }
    ],
    gabarito: "C",
    justificativa: "O currículo descreve as portas do SMTP: '25 (sem criptografia), 587 (submissão com STARTTLS), 465 (SMTPS com SSL/TLS implícito)' e o exemplo de aplicação indica: 'Porta 587 com STARTTLS (submissão) ou porta 465 com SSL/TLS implícito (SMTPS)'. A alternativa C corresponde à recomendação registrada.",
    analise: {
      A: "INCORRETA. Erro conceitual: a porta 25 existe no SMTP, mas 'sem criptografia' — o currículo adverte que deve ser bloqueada para clientes externos (uso de relay).",
      B: "INCORRETA. Erro conceitual: a porta 110 pertence ao POP3 (recebimento), não ao envio — protocolo e função trocados.",
      C: "CORRETA. Submissão (envio do cliente ao servidor) com STARTTLS na porta 587, conforme o exemplo de aplicação.",
      D: "INCORRETA. Erro conceitual: a porta 143 é do IMAP sem criptografia — protocolo de recebimento."
    },
    regra: "Portas do ecossistema de e-mail: SMTP 25 (relay/sem TLS), 587 (submissão + STARTTLS), 465 (SMTPS); POP3 110/995; IMAP 143/993.",
    pegadinha: "A pegadinha é misturar as portas de ENVIO (SMTP) com as de RECEBIMENTO (POP3/IMAP) — todas as distratoras são portas reais de e-mail, só que de outro protocolo."
  },
  {
    id: "q-m3-02",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t1-s1",
    assunto: "M3.1 E-mail — SMTP",
    contexto: "Questionário de certificação pede a posição do SMTP no modelo de referência.",
    enunciado: "O SMTP opera na camada de aplicação do modelo OSI e utiliza serviços da camada de transporte (TCP) para transportar suas mensagens.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'opera na camada de aplicação do modelo OSI e utiliza serviços da camada de transporte (TCP)': o currículo posiciona o SMTP na camada 7 (aplicação) e o exercício do módulo confirma que ele usa TCP na camada 4.",
    justificativa: "O conteúdo do SMTP afirma: 'Opera na camada de aplicação (modelo OSI camada 7 / TCP/IP aplicação)'. O exercício registrado complementa: 'Errado. SMTP opera na camada de aplicação (camada 7). Usa TCP na camada de transporte (camada 4).' O item combina as duas afirmações corretamente.",
    analise: {
      item: "Item VERDADEIRO. Camada de aplicação (7) + transporte TCP (4) é a arquitetura descrita no conteúdo e confirmada no exercício.",
      leituraIncorreta: "Leitura que induz ao erro: lembrar que SMTP usa TCP e concluir que 'opera na camada de transporte'. Usar um serviço de outra camada não determina a camada do próprio protocolo — o currículo marca o exercício ('SMTP opera na camada de transporte') como Errado."
    },
    regra: "Posicionamento por função: SMTP é protocolo de transferência de mensagens entre agentes (camada de aplicação); o transporte confiável é fornecido pelo TCP.",
    pegadinha: "Item clássico de 'camada × protocolo subjacente' — o exercício do próprio currículo já documenta esse erro como o mais comum."
  },
  {
    id: "q-m3-03",
    modulo: 3,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t1-s1",
    assunto: "M3.1 E-mail — SMTP",
    contexto: "Fluxo de envio de e-mail: o cliente já se autenticou no servidor SMTP do remetente e informou o remetente (MAIL FROM).",
    enunciado: "Qual comando SMTP identifica o DESTINATÁRIO da mensagem, na sequência descrita no currículo?",
    alternativas: [
      { letra: "A", texto: "HELO/EHLO — saudação que identifica o cliente ao servidor." },
      { letra: "B", texto: "MAIL FROM — identificação do remetente." },
      { letra: "C", texto: "RCPT TO — identificação do destinatário da mensagem." },
      { letra: "D", texto: "DATA — transmissão do corpo do e-mail." }
    ],
    gabarito: "C",
    justificativa: "O exemplo introdutório do currículo descreve a sequência: '1) Cliente autentica... 2) MAIL FROM (remetente). 3) RCPT TO (destinatário). 4) DATA (corpo do e-mail). 5) Servidor do remetente encaminha... 6) Servidor do destinatário armazena na caixa de entrada'. No ponto do cenário (remetente já informado), o próximo passo é RCPT TO.",
    analise: {
      A: "INCORRETA. Erro conceitual: HELO/EHLO é a saudação inicial (identificação do cliente), anterior ao remetente.",
      B: "INCORRETA. Erro conceitual: MAIL FROM identifica o REMETENTE — e o cenário informa que isso já ocorreu.",
      C: "CORRETA. RCPT TO declara o destinatário (um ou mais) antes do envio do corpo.",
      D: "INCORRETA. Erro conceitual: DATA vem DEPOIS dos destinatários — é a etapa do corpo da mensagem."
    },
    regra: "Sequência SMTP: HELO/EHLO → MAIL FROM → RCPT TO → DATA → (encaminhamento/entrega) → QUIT.",
    pegadinha: "A ordem dos comandos é o conteúdo cobrado; a alternativa D só funciona depois que todos os RCPT TO foram declarados — em vários destinatários, RCPT TO se repete antes do DATA."
  },
  {
    id: "q-m3-04",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t1-s1",
    assunto: "M3.1 E-mail — SMTP",
    contexto: "Servidor de e-mail do órgão mantém a porta 25 aberta para clientes externos para facilitar o envio de mensagens.",
    enunciado: "A porta 25 deve ser mantida aberta para clientes externos, pois é a porta recomendada para envio seguro de e-mail.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'deve ser mantida aberta para clientes externos, pois é a porta recomendada para envio seguro': o currículo registra que a porta 25 é usada para relay entre servidores de e-mail e DEVE SER BLOQUEADA para clientes externos para evitar spam — e o envio seguro é feito nas portas 587 (STARTTLS) ou 465 (SMTPS).",
    justificativa: "O exemplo de aplicação do currículo: 'A porta 25 é usada para relay entre servidores de e-mail e deve ser bloqueada para clientes externos para evitar spam'. O item inverte a recomendação e ainda rotula a 25 como 'segura', quando o conteúdo a descreve como 'sem criptografia'.",
    analise: {
      item: "Item FALSO. Duas falsidades: (1) abertura para externos — o currículo determina bloqueio; (2) 'envio seguro' — a 25 não tem criptografia por padrão.",
      leituraIncorreta: "Leitura que induz ao erro: associar 'porta padrão do SMTP' a 'porta recomendada'. Padrão ≠ recomendado — a porta padrão é justamente a que deve ser fechada para o exterior."
    },
    regra: "Higiene de porta SMTP: 25 só para relay servidor-a-servidor (bloquear de clientes externos); submissão de clientes via 587/465 com TLS.",
    pegadinha: "Item com recomendação INVERTIDA: o vocabulário ('deve ser mantida', 'recomendada') soa normativo; quem decora apenas as portas e não a política de bloqueio marca Certo."
  },
  {
    id: "q-m3-05",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t1-s2",
    assunto: "M3.1 E-mail — POP3 e IMAP",
    contexto: "Servidor precisa acessar a caixa de entrada do mesmo e-mail pelo computador fixo e pelo celular, simultaneamente.",
    enunciado: "Qual protocolo é o adequado para o cenário descrito?",
    alternativas: [
      { letra: "A", texto: "POP3, pois baixa os e-mails do servidor para o dispositivo local." },
      { letra: "B", texto: "IMAP, pois mantém os e-mails sincronizados no servidor e no cliente, permitindo acesso multi-dispositivo." },
      { letra: "C", texto: "SMTP, pois é o protocolo padrão de recebimento de e-mails." },
      { letra: "D", texto: "POP3 com configuração padrão, pois apaga do servidor apenas após o segundo download." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: 'IMAP: mantém e-mails sincronizados no servidor e no cliente. Ideal para multi-dispositivo (celular, tablet, computador)', e o exemplo de aplicação responde: 'IMAP. Com POP3, os e-mails baixados para um dispositivo são apagados do servidor e não estarão disponíveis no outro dispositivo.'",
    analise: {
      A: "INCORRETA. Erro conceitual: POP3 baixa e, por padrão, apaga do servidor — o segundo dispositivo ficaria sem as mensagens.",
      B: "CORRETA. Sincronização servidor-cliente é o requisito do cenário (multi-dispositivo).",
      C: "INCORRETA. Erro conceitual: SMTP é protocolo de ENVIO, não de recebimento (o currículo registra esse engano como exemplo 'erro').",
      D: "INCORRETA. Erro conceitual: invenção de comportamento ('apaga após o segundo download') — o currículo descreve o apagamento por padrão no download."
    },
    regra: "POP3 (110/995): download local, apaga por padrão — 1 dispositivo/offline. IMAP (143/993): estado no servidor, sincronização — multi-dispositivo.",
    pegadinha: "A alternativa D inventa uma exceção confortável ('só apaga no segundo download') — quando a exceção não está no material, ela é pegadinha, não conhecimento."
  },
  {
    id: "q-m3-06",
    modulo: 3,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t1-s2",
    assunto: "M3.1 E-mail — POP3 e IMAP",
    contexto: "Configuração de conta de e-mail com criptografia SSL/TLS explícita no cliente de correio.",
    enunciado: "Qual porta do IMAP com SSL/TLS?",
    alternativas: [
      { letra: "A", texto: "Porta 143 — porta IMAP sem criptografia." },
      { letra: "B", texto: "Porta 110 — porta POP3 sem criptografia." },
      { letra: "C", texto: "Porta 993 — porta IMAP com SSL/TLS." },
      { letra: "D", texto: "Porta 995 — porta POP3 com SSL/TLS." }
    ],
    gabarito: "C",
    justificativa: "O currículo declara: 'IMAP ... Porta 143 (sem criptografia) ou 993 (SSL/TLS)'. O exercício registrado é literalmente esta questão, com resposta C.",
    analise: {
      A: "INCORRETA. Erro conceitual: 143 é IMAP, mas sem criptografia — o enunciado exige SSL/TLS.",
      B: "INCORRETA. Erro conceitual: 110 é POP3 sem criptografia — protocolo e segurança errados.",
      C: "CORRETA. 993 = IMAP sobre SSL/TLS, conforme o currículo.",
      D: "INCORRETA. Erro conceitual: 995 é a versão segura do POP3 — protocolo trocado."
    },
    regra: "Mapa de portas: POP3 110 / 995(TLS); IMAP 143 / 993(TLS). Lembrete: porta '99x' = versão com SSL/TLS do protocolo correspondente.",
    pegadinha: "Duas dimensões por alternativa (protocolo × criptografia): errar uma já invalida — pare cada caractere antes de marcar."
  },
  {
    id: "q-m3-07",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t1-s2",
    assunto: "M3.1 E-mail — POP3 e IMAP",
    contexto: "Migração de estações: o setor deseja confirmar o comportamento de armazenamento antes de escolher o protocolo.",
    enunciado: "O POP3, por padrão, baixa os e-mails do servidor para o dispositivo local e os apaga do servidor, enquanto o IMAP mantém as mensagens no servidor e permite criar pastas no servidor e buscar mensagens sem baixá-las por completo.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'o POP3, por padrão, baixa os e-mails ... e os apaga do servidor, enquanto o IMAP mantém as mensagens no servidor e permite criar pastas no servidor e buscar mensagens sem baixá-las por completo'.",
    justificativa: "O currículo registra: POP3 'baixa e-mails do servidor para o dispositivo local e, por padrão, apaga do servidor'; IMAP 'mantém e-mails sincronizados no servidor e no cliente ... permite criar pastas no servidor, buscar mensagens sem baixar, e manter cópia no servidor'. O exemplo 'erro' do módulo corrige quem afirma que IMAP apaga após o download.",
    analise: {
      item: "Item VERDADEIRO. As três características atribuídas (apagar por padrão, manter no servidor, pastas/busca no servidor) constam do conteúdo.",
      leituraIncorreta: "Leitura que induz ao erro: lembrar que POP3 'pode' manter cópia (existe a opção) e negar o padrão. O item fala em 'por padrão' — é esse qualificador que o torna verdadeiro."
    },
    regra: "Estado das mensagens: POP3 = propriedade local após download (padrão apagar no servidor); IMAP = estado no servidor sincronizado com clientes.",
    pegadinha: "O qualificador 'por padrão' é tudo: sem ele, a afirmação sobre POP3 seria falsa (a opção de manter cópia existe). No CESPE, qualificadores decidem itens."
  },
  {
    id: "q-m3-08",
    modulo: 3,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t1-s2",
    assunto: "M3.1 E-mail — POP3 e IMAP",
    contexto: "Agente de campo acessa e-mail apenas em um único dispositivo (notebook do órgão) e precisa de acesso offline em áreas sem internet.",
    enunciado: "Considerando o currículo, qual protocolo é apontado como ideal para o cenário?",
    alternativas: [
      { letra: "A", texto: "POP3 — indicado para acesso offline em um único dispositivo." },
      { letra: "B", texto: "IMAP — indicado para acesso offline em um único dispositivo." },
      { letra: "C", texto: "SMTP — pois dispensa conexão contínua com o servidor." },
      { letra: "D", texto: "Nenhum: os dois protocolos de recebimento exigem conexão permanente com o servidor." }
    ],
    gabarito: "A",
    justificativa: "O currículo define o POP3 como 'ideal para acesso offline em um único dispositivo' e o IMAP como 'ideal para multi-dispositivo'. O cenário limita-se a um único dispositivo com uso offline — exatamente o caso descrito para o POP3.",
    analise: {
      A: "CORRETA. É a indicação literal do currículo para o cenário de dispositivo único + offline.",
      B: "INCORRETA. Erro conceitual: IMAP é o ideal para MULTI-dispositivo; no cenário, ele funcionaria, mas não é a indicação apontada pelo material para o caso.",
      C: "INCORRETA. Erro conceitual: SMTP é envio, não recebimento — não resolve a caixa de entrada.",
      D: "INCORRETA. Erro conceitual: premissa falsa — POP3 foi desjustamente para trabalho offline (baixa local das mensagens)."
    },
    regra: "Escolha por perfil de uso: 1 dispositivo + offline → POP3; múltiplos dispositivos + sincronização → IMAP.",
    pegadinha: "A alternativa B é a 'moderna e plausível' (todo mundo usa IMAP), mas a FGV cobra a indicação EXATA do material para o caso — leia o perfil do usuário, não a tendência."
  },
  {
    id: "q-m3-09",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t1-s3",
    assunto: "M3.1 E-mail — cabeçalhos e destinatários",
    contexto: "Comunicado interno deve ir a duas chefias em copia explícita (Cc) e a um grupo de servidores sem expor seus endereços uns aos outros.",
    enunciado: "Qual campo do e-mail oculta os destinatários dos demais destinatários?",
    alternativas: [
      { letra: "A", texto: "To — destinatário principal, visível a todos." },
      { letra: "B", texto: "Cc (Carbon Copy) — destinatários secundários, visíveis a todos." },
      { letra: "C", texto: "Bcc (Blind Carbon Copy) — destinatários ocultos; os demais não os veem." },
      { letra: "D", texto: "From — cabeçalho do remetente." }
    ],
    gabarito: "C",
    justificativa: "O currículo define: 'Cc (Carbon Copy — destinatários secundários que veem os demais destinatários), Bcc (Blind Carbon Copy — destinatários ocultos; os demais não veem)'. O exemplo de aplicação usa Bcc justamente para 'não expor os endereços uns aos outros'.",
    analise: {
      A: "INCORRETA. Erro conceitual: o To é o destinatário principal, visível a todos os receptores.",
      B: "INCORRETA. Erro conceitual: Cc é secundário, mas VISÍVEL — a cópia explícita não oculta ninguém.",
      C: "CORRETA. Bcc = oculto para os demais destinatários, conforme a definição do currículo.",
      D: "INCORRETA. Erro conceitual: From identifica o remetente, não destinatários."
    },
    regra: "Campos de destinatário: To (principal, visível) / Cc (cópia, visível) / Bcc (cópia oculta).",
    pegadinha: "Cc e Bcc têm o mesmo comportamento de entrega; a diferença é VISIBILIDADE — a pegadinha é confundir 'cópia' com 'ocultação'."
  },
  {
    id: "q-m3-10",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t1-s3",
    assunto: "M3.1 E-mail — cabeçalhos e destinatários",
    contexto: "E-mail com duas chefias em Cc e três servidores em Bcc; todos os destinatários recebem a mensagem.",
    enunciado: "No campo Cc, todos os destinatários veem quem está copiado; no campo Bcc, os destinatários ficam ocultos uns dos outros, preservando a privacidade.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'no campo Cc, todos os destinatários veem quem está copiado; no campo Bcc, os destinatários ficam ocultos uns dos outros'.",
    justificativa: "O currículo define Cc como destinatários 'que veem os demais destinatários' e Bcc como 'destinatários ocultos; os demais não veem', e o exemplo de aplicação do Bcc justifica a proteção de privacidade em listas grandes (evita exposição e respostas em cadeia). O exercício registrado marca como Certo o item 'Bcc oculta os destinatários de todos os demais'.",
    analise: {
      item: "Item VERDADEIRO. Visibilidade em Cc (compartilhada) e em Bcc (oculta) é exatamente a definição do currículo.",
      leituraIncorreta: "Leitura que induz ao erro: supor que o Bcc oculta também os destinatários do To — o remetente escolhe; oculto é o que está em Bcc para os demais."
    },
    regra: "Visibilidade de destinatários: To e Cc são explícitos em todas as caixas; Bcc aparece apenas na caixa de cada oculto (e no remetente).",
    pegadinha: "A expressão 'ocultos uns dos outros' refere-se aos Bcc entre si e para os demais; a leitura apressada pode transformar em 'todos ocultos' — o item fala o que o currículo fala."
  },
  {
    id: "q-m3-11",
    modulo: 3,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t1-s3",
    assunto: "M3.1 E-mail — cabeçalhos e destinatários",
    contexto: "Órgão enviará comunicado a 500 clientes sem expor os endereços uns aos outros e evitando respostas em cadeia.",
    enunciado: "Que configuração de destinatários atende ao caso?",
    alternativas: [
      { letra: "A", texto: "Todos os 500 endereços no campo To, para garantir o envio." },
      { letra: "B", texto: "Endereços no campo Cc, pois a cópia evita respostas em cadeia." },
      { letra: "C", texto: "Endereços no campo Bcc, para que cada destinatário receba sem ver os demais — protegendo privacidade e evitando respostas em cadeia." },
      { letra: "D", texto: "Campo Reply-To com os 500 endereços, ocultando-os no corpo." }
    ],
    gabarito: "C",
    justificativa: "O exemplo de aplicação do currículo é o cenário: 'Uma empresa envia um e-mail para 500 clientes sem expor os endereços uns aos outros. Qual campo usar? → Bcc — cada destinatário recebe o e-mail sem ver os demais endereços. Isso protege a privacidade dos clientes e evita respostas em cadeia.'",
    analise: {
      A: "INCORRETA. Erro conceitual: todos os endereços ficam expostos a todos (500 endereços visíveis) — viola privacidade e gera cadeia de respostas.",
      B: "INCORRETA. Erro conceitual: Cc também expõe os endereços; 'cópia' não implica ocultação.",
      C: "CORRETA. Bcc preserva privacidade e evita respostas em cadeia, conforme o exemplo do currículo.",
      D: "INCORRETA. Erro conceitual: Reply-To define o endereço de resposta (que pode ser diferente do remetente) — não oculta destinatários."
    },
    regra: "Privacidade em discurso em massa: destinatários em Bcc + (boas práticas) reply controlado; To/Cc expõem a lista.",
    pegadinha: "A alternativa D usa um cabeçalho real e mal compreendido (Reply-To) — ele muda PARA ONDE vão as respostas, não quem vê a lista de destinatários."
  },
  {
    id: "q-m3-12",
    modulo: 3,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t2-s1",
    assunto: "M3.1 E-mail — spam, phishing e autenticação",
    contexto: "Caixa de entrada recebe propaganda não solicitada de uma loja, sem pedido de credenciais; em outro dia, chega mensagem fingindo ser do banco pedindo login em link.",
    enunciado: "Como classificar corretamente as duas mensagens?",
    alternativas: [
      { letra: "A", texto: "Ambas são spam; a diferença é apenas o remetente." },
      { letra: "B", texto: "A propaganda não solicitada é spam; a mensagem fraudulenta que se passa por banco para roubar credenciais é phishing." },
      { letra: "C", texto: "A propaganda é phishing leve; a do banco é spam agressivo." },
      { letra: "D", texto: "São spoofing as duas, pois ambas foram não solicitadas." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: 'Spam: e-mails não solicitados, geralmente comerciais ou maliciosos. Phishing: e-mails fraudulentos que se passam por entidades confiáveis (bancos, empresas) para roubar credenciais ou dados', e o exemplo introdutório diferencia: spam 'sem necessariamente ter intenção maliciosa'; phishing 'com intenção de roubar dados ou credenciais'.",
    analise: {
      A: "INCORRETA. Erro conceitual: apaga a distinção de intenção — o currículo separa não-solicitado (spam) de fraudulento (phishing).",
      B: "CORRETA. Classificação exatamente conforme as definições e o exemplo do currículo.",
      C: "INCORRETA. Erro conceitual: 'phishing leve' não existe como categoria; phishing é fraude com intenção de roubo — a propaganda é spam.",
      D: "INCORRETA. Erro conceitual: spoofing é falsificação do remetente (técnica), não a classificação do conteúdo — e propaganda comercial não é necessariamente falsificada."
    },
    regra: "Classificação por conteúdo e intenção: spam = não solicitado (comercial/malicioso); phishing = fraude para roubo de dados; spoofing = falsificação do endereço 'From'.",
    pegadinha: "A FGV cobra a diferença de INTENÇÃO entre categorias aparentemente parecidas; 'spam malicioso' existe no currículo, mas phishing é definido pela fraude, não pelo volume."
  },
  {
    id: "q-m3-13",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t2-s1",
    assunto: "M3.1 E-mail — spam, phishing e autenticação",
    contexto: "Administrador de e-mail configura o que acontece quando as verificações SPF e DKIM de uma mensagem falham.",
    enunciado: "Qual protocolo define a política para falhas de SPF/DKIM, conforme o currículo?",
    alternativas: [
      { letra: "A", texto: "SPF (Sender Policy Framework) — define os servidores autorizados a enviar pelo domínio." },
      { letra: "B", texto: "DKIM (DomainKeys Identified Mail) — assina digitalmente o e-mail." },
      { letra: "C", texto: "DMARC (Domain-based Message Authentication, Reporting & Conformance) — define a política (rejeitar, quarentenar, aceitar) para falhas de SPF/DKIM." },
      { letra: "D", texto: "TLS — criptografa o transporte entre servidores." }
    ],
    gabarito: "C",
    justificativa: "O currículo descreve: 'SPF: define quais servidores podem enviar e-mails para o domínio. DKIM: assina digitalmente o e-mail para garantir autenticidade. DMARC: define política para falhas de SPF/DKIM (rejeitar, quarentenar, aceitar)'. O exercício registrado confirma: 'Qual protocolo define política para falhas de autenticação? → DMARC'.",
    analise: {
      A: "INCORRETA. Erro conceitual: SPF é a lista de servidores autorizados (verificação), não a política de tratamento da falha.",
      B: "INCORRETA. Erro conceitual: DKIM é a assinatura (verificação de integridade/autenticidade), não a política.",
      C: "CORRETA. DMARC orquestra SPF/DKIM e define o comportamento em falha, conforme o currículo.",
      D: "INCORRETA. Erro conceitual: TLS protege o canal (transporte), não autentica o remetente nem define política de falha."
    },
    regra: "Tríade de autenticação de e-mail: SPF (quem pode enviar) + DKIM (assinatura) → DMARC (política e reporte em falha).",
    pegadinha: "Os três protocolos são descritos no mesmo parágrafo do currículo — a cobrança FCC é a de composição: verificação (SPF/DKIM) × decisão (DMARC)."
  },
  {
    id: "q-m3-14",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t2-s1",
    assunto: "M3.1 E-mail — spam, phishing e autenticação",
    contexto: "Auditoria de segurança do e-mail corporativo revisa os registros DNS de autenticação.",
    enunciado: "O SPF lista os servidores autorizados a enviar e-mails em nome do domínio, e o DKIM assina digitalmente as mensagens para garantir autenticidade, medidas que previnem o spoofing de remetente.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'o SPF lista os servidores autorizados a enviar e-mails em nome do domínio, e o DKIM assina digitalmente as mensagens para garantir autenticidade, medidas que previnem o spoofing de remetente'.",
    justificativa: "O currículo descreve o spoofing como 'falsificação do endereço From para fazer o e-mail parecer legítimo' e apresenta SPF, DKIM e DMARC como 'técnicas de autenticação [que] previnem spoofing verificando o servidor remetente', com as funções exatas de SPF e DKIM citadas no item. O exercício registrado afirma: '(C/E) DKIM usa criptografia para assinar e-mails — Certo'.",
    analise: {
      item: "Item VERDADEIRO. As duas funções (lista de servidores × assinatura) e a finalidade (prevenir spoofing) coincidem com o conteúdo do módulo.",
      leituraIncorreta: "Leitura que induz ao erro: pensar que SPF/DKIM 'impedem' o envio falsificado no ato — eles permitem DETECTAR/verificar; a aplicação da política (bloquear/quarentenar) é do DMARC. A expressão do currículo ('previnem spoofing verificando') é a base do item."
    },
    regra: "Detecção × aplicação: SPF/DKIM provem os elementos de verificação; DMARC aplica política; o cliente recebe apenas mensagens que passam no filtro.",
    pegadinha: "Cuidado com verbos de força ('impede', 'bloqueia'): o currículo diz 'previnem ... verificando' — o item adota o verbo do material, o que o torna verdadeiro."
  },
  {
    id: "q-m3-15",
    modulo: 3,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u1-t2-s1",
    assunto: "M3.1 E-mail — spam, phishing e autenticação",
    contexto: "Servidor recebe mensagem personalizada, citando número de processo interno e o nome da chefia do destinatário, fingindo vir da corregedoria e solicitando acesso a sistema corporativo por link.",
    enunciado: "Que classificação mais precisa se aplica à mensagem descrita?",
    alternativas: [
      { letra: "A", texto: "Spam comercial, pois a mensagem não foi solicitada pelo destinatário." },
      { letra: "B", texto: "Spear phishing, por ser phishing direcionado a uma pessoa ou organização específica, com personalização que o torna mais convincente." },
      { letra: "C", texto: "Spoofing simples, pois apenas o endereço 'From' foi falsificado, sem intenção de roubo." },
      { letra: "D", texto: "Marketing por e-mail, pois cita assunto interno do órgão." }
    ],
    gabarito: "B",
    justificativa: "O currículo define spear phishing como 'phishing direcionado a uma pessoa ou organização específica'. O cenário reúne os elementos: fraude (se passa por corregedoria), intenção maliciosa (roubo de acesso/credenciais por link) e direcionamento personalizado (processo interno, nome da chefia) — phishing dirigido, portanto spear phishing.",
    analise: {
      A: "INCORRETA. Erro conceitual: 'não solicitada' descreve spam, mas perde a fraude e o direcionamento — a definição de spear phishing exige os três elementos.",
      B: "CORRETA. Phishing (fraude) + direcionamento a pessoa/organização específica = spear phishing, conforme o currículo.",
      C: "INCORRETA. Erro conceitual: o cenário inclui pedido fraudulento de credencial/acesso — há intenção de roubo, não apenas falsificação.",
      D: "INCORRETA. Erro conceitual: marketing não solicita credenciais por link fingindo autoridade; citação interna é engenharia social, não comercialização."
    },
    regra: "Hierarquia de ameaças por e-mail: spam (não solicitado) < phishing (fraude genérica) < spear phishing (fraude direcionada/personalizada); spoofing é técnica de falsificação usada em todas.",
    pegadinha: "A VUNESP cobra o critério de DIRECIONAMENTO: mesma fraude, público genérico = phishing; público específico com detalhes reais = spear phishing."
  },
  {
    id: "q-m3-16",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u2-t1-s1",
    assunto: "M3.2 Calendários e convites",
    contexto: "Coordenador precisa permitir que um assessor altere horário e descrição de eventos do calendário da equipe, sem lhe dar controle total.",
    enunciado: "Qual permissão do calendário permite modificar um evento, conforme os tipos descritos no currículo?",
    alternativas: [
      { letra: "A", texto: "Proprietário — controle total do calendário." },
      { letra: "B", texto: "Editor — pode modificar eventos." },
      { letra: "C", texto: "Comentar — permite apenas comentários nos eventos." },
      { letra: "D", texto: "Somente visualização — permite apenas consultar." }
    ],
    gabarito: "B",
    justificativa: "O currículo lista os tipos de permissão de calendário: 'proprietário (controle total), editor (pode modificar), comentar, somente visualização'. O exercício registrado confirma: 'Qual permissão permite modificar um evento? → Editor'. O cenário pede modificação sem controle total — papel do editor.",
    analise: {
      A: "INCORRETA. Erro conceitual: proprietário tem controle TOTAL — excede o requisito ('sem controle total') e transferiria a titularidade.",
      B: "CORRETA. Editor = pode modificar, exatamente a permissão necessária.",
      C: "INCORRETA. Erro conceitual: comentar não altera horário/descrição — não atende ao requisito de modificação.",
      D: "INCORRETA. Erro conceitual: visualização é somente leitura."
    },
    regra: "Permissões de calendário por menor privilégio: proprietário > editor > comentar > somente visualização — escolha a menor que satisfaz a necessidade.",
    pegadinha: "A alternativa A é o 'excesso de privilégio' — em provas de serviço público, o menor privilégio funcional é a resposta esperada quando o cenário descarta o controle total."
  },
  {
    id: "q-m3-17",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u2-t1-s1",
    assunto: "M3.2 Calendários e convites",
    contexto: "Convite de reunião recorrente mensal com participantes obrigatórios (chefia) e opcionais (colaboradores convidados), lembretes automáticos e pauta anexada.",
    enunciado: "Convites de reunião podem distinguir participantes obrigatórios e opcionais, e permitem definir recorrência e lembretes automáticos antes do evento.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'podem distinguir participantes obrigatórios e opcionais, e permitem definir recorrência e lembretes automáticos antes do evento'.",
    justificativa: "O currículo descreve: 'Convites de reunião incluem: título, data/hora, local, participantes (obrigatórios, opcionais), descrição, anexos' e 'Recorrência: eventos diários, semanais, mensais. Lembretes: notificações automáticas antes do evento'. O exercício registrado marca como Certo o item sobre participantes obrigatórios e opcionais.",
    analise: {
      item: "Item VERDADEIRO. As três funcionalidades citadas (obrigatórios/opcionais, recorrência, lembretes) constam do subtópico de calendários.",
      leituraIncorreta: "Leitura que induz ao erro: supor que recorrência e lembrete sejam exclusivos de uma plataforma. O currículo trata das capacidades genéricas de calendários digitais (Google Calendar, Outlook Calendar)."
    },
    regra: "Estrutura de convite: identificação (título), temporalidade (data/hora/fuso, recorrência), participantes (papéis), contexto (descrição, anexos), alerta (lembretes).",
    pegadinha: "Item composto de três afirmações — valide cada uma; a pegadinha é achar que uma das partes ('opcionais') é invenção, quando consta explicitamente entre os campos do convite."
  },
  {
    id: "q-m3-18",
    modulo: 3,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u2-t2-s1",
    assunto: "M3.2 Plataformas de reunião",
    contexto: "Órgão já utiliza Google Workspace para correio e armazenamento e busca plataforma de reunião integrada ao mesmo ecossistema.",
    enunciado: "Qual plataforma é a indicada pelo currículo para o cenário?",
    alternativas: [
      { letra: "A", texto: "Microsoft Teams — por ser a mais usada em organizações." },
      { letra: "B", texto: "Google Meet — integrada ao Google Workspace, com funcionamento em navegador sem instalação." },
      { letra: "C", texto: "Zoom — por suportar webinars e salas simultâneas." },
      { letra: "D", texto: "Slack — plataforma citada como alternativa nativa do Google Workspace." }
    ],
    gabarito: "B",
    justificativa: "O currículo descreve: 'Google Meet: integrado ao Google Workspace, simplicidade, não requer instalação (navegador)' e o exercício registrado responde: 'Qual plataforma é integrada ao Google Workspace? → Meet'. O cenário de organização já no Workspace aponta para a integração nativa.",
    analise: {
      A: "INCORRETA. Erro conceitual: Teams é integrada ao Microsoft 365, não ao Google Workspace (o currículo destaca essa integração para o M365).",
      B: "CORRETA. Integração ao Workspace + execução em navegador, conforme o currículo.",
      C: "INCORRETA. Erro conceitual: Zoom é apontado para webinars e grandes eventos/externos — não para integração com o Workspace.",
      D: "INCORRETA. Erro conceitual: invenção — Slack não é descrito no currículo como integrado ao Google Workspace."
    },
    regra: "Integração é o critério de escolha no currículo: Teams × M365; Meet × Google Workspace; Zoom × webinars/eventos externos.",
    pegadinha: "As alternativas A e C descrevem QUALIDADES REAIS das plataformas (Teams integrada ao M365; Zoom com webinars) — mas fora do contexto do cenário. A pegadinha é escolher 'a melhor plataforma' em vez da integrada ao ecossistema pedido."
  },
  {
    id: "q-m3-19",
    modulo: 3,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u2-t2-s1",
    assunto: "M3.2 Plataformas de reunião",
    contexto: "Universidade realizará palestra online com 500 alunos, com moderação, salas paralelas de trabalho e recursos de webinar.",
    enunciado: "Qual plataforma o currículo aponta como a mais adequada ao cenário?",
    alternativas: [
      { letra: "A", texto: "Microsoft Teams, pela colaboração contínua em canais." },
      { letra: "B", texto: "Google Meet, pela simplicidade de uso em navegador." },
      { letra: "C", texto: "Zoom, pelo suporte a webinars com grande número de participantes e salas simultâneas (breakout rooms)." },
      { letra: "D", texto: "Qualquer plataforma é equivalente — todas têm os mesmos recursos." }
    ],
    gabarito: "C",
    justificativa: "O exemplo de aplicação do currículo é este cenário: 'Uma universidade precisa dar uma palestra online para 500 alunos. Teams, Meet ou Zoom? → Zoom — suporte a webinars com grande número de participantes, salas simultâneas e recursos avançados de moderação'.",
    analise: {
      A: "INCORRETA. Erro conceitual: o ponto forte do Teams (colaboração contínua, canais) não é o critério do evento (webinar com grande público).",
      B: "INCORRETA. Erro conceitual: simplicidade não atende aos requisitos de webinar/salas simultâneas destacados no exemplo.",
      C: "CORRETA. É a escolha do exemplo de aplicação do currículo, com os mesmos critérios (webinar, salas simultâneas, moderação).",
      D: "INCORRETA. Erro conceitual: o currículo compara as três destacando diferenciais distintos (collaboração contínua × simplicidade × webinars) — não há equivalência."
    },
    regra: "Critérios de escolha registrados no currículo: Teams = colaboração contínua no M365; Meet = simplicidade; Zoom = webinars e grandes eventos.",
    pegadinha: "A alternativa D ('todas iguais') é o relativismo típico da FGV — o material justamente diferencia as plataformas; quem lê só o enunciado e não o comparativo cai nela."
  },
  {
    id: "q-m3-20",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u2-t2-s2",
    assunto: "M3.2 Plataformas de reunião",
    contexto: "Reunião sensível com participantes externos: o anfitrião aprovou cada entrada pela sala de espera e removeu um participante não convidado.",
    enunciado: "O lobby (sala de espera) permite ao anfitrião aprovar ou rejeitar participantes antes que entrem, e a remoção de participantes é faculdade do anfitrião.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'o lobby ... permite ao anfitrião aprovar ou rejeitar participantes antes que entrem, e a remoção de participantes é faculdade do anfitrião'.",
    justificativa: "O currículo descreve: 'Lobby (sala de espera): participantes aguardam aprovação do anfitrião antes de entrar' e 'Remover participante: anfitrião pode expulsar participantes'; o exercício registrado confirma ambos os pontos (lobby aprova/rejeita; anfitrião remove).",
    analise: {
      item: "Item VERDADEIRO. As duas competências (aprovação no lobby e remoção) pertencem ao anfitrião no conteúdo do módulo.",
      leituraIncorreta: "Leitura que induz ao erro: supor que qualquer participante possa remover outros — o currículo atribui a remoção ao anfitrião; e confundir lobby com chat (ambos aparecem na mesma lista de recursos)."
    },
    regra: "Controle de reunião online: lobby (filtro de entrada), senha, remoção, bloqueio de mídia/compartilhamento — todos com o anfitrião como agente.",
    pegadinha: "Item de duas cláusulas: quem acerta só o lobby e não sabe quem remove marca Errado — o CESPE exige domínio completo do trecho."
  },
  {
    id: "q-m3-21",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u2-t3-s1",
    assunto: "M3.2 Segurança e gravação de reuniões",
    contexto: "Secretaria vai gravar reuniões com servidores e precisa instituir política formal, cumprindo as exigências de proteção de dados aplicáveis.",
    enunciado: "Qual conjunto melhor representa os elementos de uma política de gravação descrita no currículo?",
    alternativas: [
      { letra: "A", texto: "Consentimento informado dos participantes, definição de finalidade, prazo de retenção, armazenamento com criptografia, controle de acesso, regras de compartilhamento e procedimento de exclusão." },
      { letra: "B", texto: "Apenas o aviso verbal no início da reunião, dispensando qualquer definição adicional." },
      { letra: "C", texto: "Número máximo de participantes, duração máxima da reunião e quantidade de gravações simultâneas permitidas." },
      { letra: "D", texto: "Consentimento único e permanente, válido para qualquer finalidade futura, sem prazo de retenção definido." }
    ],
    gabarito: "A",
    justificativa: "O currículo lista os elementos: 'definir quando e como gravar, quem pode gravar, onde armazenar, quanto tempo manter ... Retenção ... Acesso ... Compartilhamento ... Proteção: criptografar gravações sensíveis', e o exemplo introdutório resume: 'Quando gravar, quem pode gravar, onde armazenar, prazo de retenção, quem tem acesso, regras de compartilhamento, proteção (criptografia), e procedimento para exclusão'. A aplicação (LGPD) exige consentimento, finalidade, prazo, segurança e direitos dos titulares (exemplo de aplicação do módulo).",
    analise: {
      A: "CORRETA. Reúne todos os elementos do currículo mais o consentimento exigido no exemplo de aplicação com LGPD.",
      B: "INCORRETA. Erro conceitual: omissão sistemática — sem finalidade, retenção, acesso e proteção, a política não atende ao descrito (e a LGPD exige mais do que um aviso isolado).",
      C: "INCORRETA. Erro conceitual: critérios operacionais de reunião, não de governança da gravação — nenhum dos itens da lista do currículo aparece.",
      D: "INCORRETA. Erro conceitual: consentimento genérico e permanente sem finalidade/prazo contraria a lógica descrita (definição de finalidade, prazo de retenção, direito de acesso e exclusão)."
    },
    regra: "Governança de gravação: finalidade → consentimento → quem/grava/onde/retém → controle de acesso → compartilhamento → proteção → exclusão.",
    pegadinha: "A alternativa D é a 'confortável': consentimento único soa profissional, mas sem finalidade e prazo ela viola o próprio exemplo de aplicação do módulo — a FCC cobra a política completa."
  },
  {
    id: "q-m3-22",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u2-t3-s1",
    assunto: "M3.2 Segurança e gravação de reuniões",
    contexto: "Questionário de conformidade cita a LGPD (Lei nº 13.709, de 14 de agosto de 2018) para a proteção de dados pessoais em gravações de reuniões.",
    enunciado: "A LGPD determina que os agentes de tratamento adotem medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'determina que os agentes de tratamento adotem medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas' — redação do art. 46 da Lei 13.709/2018, verificada no texto oficial.",
    justificativa: "Fonte verificada (referencias/referencias-verificadas.md, planalto.gov.br, verificação em 2026-10-20): art. 46 — 'agentes de tratamento devem adotar medidas de segurança, técnicas e administrativas aptas a proteger dados pessoais de acessos não autorizados e situações acidentais ou ilícitas'. O item transcreve fielmente o dispositivo; a relação com o contexto (gravações com dados pessoais) segue o exemplo de aplicação do módulo, que exige segurança no armazenamento (criptografia).",
    analise: {
      item: "Item VERDADEIRO. Correspondência literal com o art. 46 verificado no texto oficial da Lei 13.709/2018.",
      leituraIncorreta: "Leitura que induz ao erro: atribuir ao art. 46 direitos do titular (que são do art. 18, também verificado) ou fundamentos (art. 2º). Cada artigo tem objeto próprio — confira o dispositivo citado."
    },
    regra: "LGPD — Lei 13.709/2018 (art. 46): obrigatoriedade de medidas de segurança técnicas e administrativas pelos agentes de tratamento. Referência primária: planalto.gov.br (verificado em 2026-10-20).",
    pegadinha: "Em questões jurídicas, a pegadinha é a REFORMULAÇÃO que altera o sentido (trocar 'agentes de tratamento' por 'titulares', ou 'medidas de segurança' por 'consentimento'). Aqui o item transcreve o dispositivo sem trocas — logo, Certo."
  },
  {
    id: "q-m3-23",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u1-t1-s1",
    assunto: "M3.1 E-mail — SMTP",
    contexto: "Questionário pede a ordem CORRETA dos comandos SMTP na sessão de envio de um e-mail com um destinatário.",
    enunciado: "Qual sequência corresponde ao fluxo descrito no currículo?",
    alternativas: [
      { letra: "A", texto: "DATA → RCPT TO → MAIL FROM → HELO/EHLO → QUIT." },
      { letra: "B", texto: "HELO/EHLO → MAIL FROM → RCPT TO → DATA → QUIT (com encaminhamento entre servidores após o DATA)." },
      { letra: "C", texto: "MAIL FROM → HELO/EHLO → DATA → RCPT TO → QUIT." },
      { letra: "D", texto: "RCPT TO → DATA → HELO/EHLO → MAIL FROM → QUIT." }
    ],
    gabarito: "B",
    justificativa: "O exemplo introdutório do currículo descreve o fluxo: autenticar no servidor SMTP do remetente, MAIL FROM (remetente), RCPT TO (destinatário), DATA (corpo), encaminhar ao servidor do destinatário e armazenar na caixa; e o subtópico lista os comandos textuais: 'HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT'. A alternativa B respeita a ordem lógica: saudação → remetente → destinatário → corpo → encerramento.",
    analise: {
      A: "INCORRETA. Erro conceitual: ordem exatamente invertida — o corpo (DATA) só é transmitido depois de remetente e destinatários declarados.",
      B: "CORRETA. Sequência conforme os comandos listados e o fluxo do exemplo do currículo.",
      C: "INCORRETA. Erro conceitual: HELO/EHLO antecede a declaração do remetente (saudação é o início da sessão); e DATA antes de RCPT TO não tem destinatário a quem entregar.",
      D: "INCORRETA. Erro conceitual: começa pelo destinatário sem saudação nem remetente — inviabiliza o roteamento da mensagem."
    },
    regra: "Sessão SMTP: HELO/EHLO (identificação) → MAIL FROM (origem) → RCPT TO (destino; repetível) → DATA (conteúdo) → QUIT; depois, encaminhamento servidor-a-servidor.",
    pegadinha: "A FCC adora sequências permutadas: todos os comandos do item são REAIS — só a ordem muda. Decore a LÓGICA (quem envia, para quem, o quê), não a lista."
  },
  {
    id: "q-m3-24",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u1-t1-s2",
    assunto: "M3.1 E-mail — POP3 e IMAP",
    contexto: "Colaborador afirma ter abandonado o IMAP porque 'o servidor não suporta organização' e 'é preciso baixar tudo integralmente para ler'.",
    enunciado: "Embora o IMAP mantenha as mensagens no servidor, ele não permite criar pastas no servidor nem buscar mensagens sem baixá-las por completo.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'não permite criar pastas no servidor nem buscar mensagens sem baixá-las por completo': o currículo afirma que 'o IMAP permite criar pastas no servidor, buscar mensagens sem baixar, e manter cópia no servidor'.",
    justificativa: "O conteúdo do IMAP é explícito nas duas capacidades negadas pelo item. A metade inicial ('mantém as mensagens no servidor') é verdadeira, mas o item C/E exige verdade integral — e a negação contradiz literalmente o currículo.",
    analise: {
      item: "Item FALSO. A cláusula concessiva ('Embora ... mantenha') é verdadeira; a principal ('não permite ...') é falsa em suas duas partes.",
      leituraIncorreta: "Leitura que induz ao erro: validar a metade inicial e parar aí. A estrutura 'Embora X, não-Y' exige decidir sobre Y — e Y é precisamente o que o currículo afirma que o IMAP faz."
    },
    regra: "Capacidades do IMAP (servidor): pastas no servidor, busca sem download completo, cópia mantida no servidor, sincronização multi-dispositivo.",
    pegadinha: "Estrutura concessiva: a parte antes da vírgula é verdadeira de propósito, para conduzir à marcação errada. Analise a cláusula principal separadamente — é onde mora o gabarito."
  }


];

/* ----------------------------------------------------------------------------
 * Registro da fonte de dados.
 * Os arquivos data/*.js usam `const` em escopo global léxico (não window).
 * Define-se window.questoesBanco como referência explícita para o
 * quiz-engine.js. ATENÇÃO: navigation.js substitui window.apostilaDados por
 * inteiro no DOMContentLoaded — por isso o quiz-engine lê PRIMEIRO
 * window.questoesBanco (propriedade de window não é sobrescrita por ele).
 * ------------------------------------------------------------------------- */
if (typeof window !== 'undefined') {
  window.questoesBanco = questoesBanco;
  window.apostilaDados = window.apostilaDados || {};
  window.apostilaDados.questoes = questoesBanco;
}

/* Resumo estatístico do banco (usado pelo quiz-engine, pela seção de estado
 * atual do index.html e pelo smoke test — funções puras, sem DOM). */
function resumoBancoQuestoes(lista) {
  const banco = Array.isArray(lista) ? lista : (typeof questoesBanco !== 'undefined' ? questoesBanco : []);
  const resumo = {
    total: banco.length,
    pisoExigido: 320,
    faltamParaPiso: Math.max(0, 320 - banco.length),
    porModulo: {},
    porNivel: {},
    porFormato: {},
    porEstilo: {},
    idsDuplicados: []
  };
  const vistos = {};
  banco.forEach((q) => {
    resumo.porModulo[q.modulo] = (resumo.porModulo[q.modulo] || 0) + 1;
    resumo.porNivel[q.nivel] = (resumo.porNivel[q.nivel] || 0) + 1;
    resumo.porFormato[q.formato] = (resumo.porFormato[q.formato] || 0) + 1;
    resumo.porEstilo[q.estilo] = (resumo.porEstilo[q.estilo] || 0) + 1;
    if (vistos[q.id]) resumo.idsDuplicados.push(q.id);
    vistos[q.id] = true;
  });
  resumo.porcentual = {
    basico: resumo.total ? Math.round((resumo.porNivel.basico || 0) * 1000 / resumo.total) / 10 : 0,
    intermediario: resumo.total ? Math.round((resumo.porNivel.intermediario || 0) * 1000 / resumo.total) / 10 : 0,
    avancado: resumo.total ? Math.round((resumo.porNivel.avancado || 0) * 1000 / resumo.total) / 10 : 0
  };
  return resumo;
}