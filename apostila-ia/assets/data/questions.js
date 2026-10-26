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

/* P1-D (2026-10-22): `var` no lugar de `const` — o script inline de fusão do
 * index.html reatribui window.questoesBanco com o banco COMPLETO (questões
 * deste arquivo + moduleQuestions4..8 dos arquivos questions_m4/m5/m6/m7/
 * m8.js). Como `var` global, a property de window e o binding lexical são a
 * MESMA variável: search.js (lê `questoesBanco` lexical) e quiz-engine.js
 * (lê window.questoesBanco) passam a enxergar o banco fundido sem qualquer
 * alteração nesses dois arquivos. Deduplicação por id acontece na fusão. */
var questoesBanco = [
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
    contexto: "Secretaria com 40 postos de trabalho que precisa de Teams, 5 TB de OneDrive por usuário e atualização contínua de funcionalidades. A documentação do fornecedor confirma uma licença elegível com direito ao Teams e cota de 5 TB para os usuários envolvidos.",
    enunciado: "Qual opção atende integralmente à demanda descrita?",
    alternativas: [
      { letra: "A", texto: "Office LTSC por licenciamento por volume — compra única, com atualizações apenas de segurança." },
      { letra: "B", texto: "Microsoft 365 por assinatura — inclui Office, OneDrive, Teams e atualizações contínuas." },
      { letra: "C", texto: "Versão perpétua Home & Student — compra única com Word, Excel e PowerPoint." },
      { letra: "D", texto: "Office LTSC com pacote de nuvem opcional — mesmo escopo do Microsoft 365." }
    ],
    gabarito: "B",
    justificativa: "O Microsoft 365 por assinatura é a única categoria entre as opções que pode reunir Office, Teams e atualizações contínuas; a contratação deve confirmar a elegibilidade do plano, a cota de 5 TB e as condições aplicáveis ao locatário, pois nem toda assinatura garante automaticamente esse limite. O Office LTSC é versão perpétua com apps selecionados, sem Teams/OneDrive em nuvem e com apenas atualizações de segurança; a versão perpétua é compra única com apps limitados (Word, Excel, PowerPoint). Por isso as alternativas A e C não satisfazem a demanda, e D descreve um produto não existente no currículo.",
    analise: {
      A: "INCORRETA. Erro conceitual: confundir 'atualização' com 'atualização de segurança'. O LTSC recebe apenas patches de segurança e não inclui Teams nem OneDrive em nuvem, logo não atende a nenhum dos três requisitos.",
      B: "CORRETA. A assinatura é a opção compatível com Office, Teams e atualizações contínuas; a cota de 5 TB deve constar da licença elegível confirmada na documentação do fornecedor.",
      C: "INCORRETA. Erro conceitual: a versão perpétua é compra única com apps limitados e sem armazenamento em nuvem integrado nem Teams — erro idêntico ao documentado no exemplo 'erro' do próprio currículo.",
      D: "INCORRETA. Erro conceitual: invenção de produto. O currículo não descreve 'LTSC com pacote de nuvem'; LTSC e M365 são modelos distintos (perpétuo × assinatura), não versões empilháveis."
    },
    regra: "Modelo de licenciamento: assinatura (recorrente, serviços na nuvem + atualizações de funcionalidades) × perpétuo (compra única, apenas atualizações de segurança, sem serviços em nuvem).",
    pegadinha: "A palavra 'atualizações' aparece nas duas alternativas — a pegadinha é não distinguir tipo de atualização (segurança × funcionalidade) e esquecer que Teams/OneDrive em nuvem só aparecem na assinatura.",
    fonte: "Microsoft — comparação de planos com e sem Teams: https://www.microsoft.com/pt-BR/microsoft-365/business/microsoft-365-plans-and-pricing; descrição do serviço OneDrive e limites de armazenamento: https://learn.microsoft.com/pt-br/office365/servicedescriptions/onedrive-for-business-service-description.",
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
      { letra: "A", texto: "A versão web é acessada pelo navegador e normalmente requer internet; a desktop instalada oferece mais recursos e pode funcionar offline após instalação e ativação; a mobile adapta a experiência à tela e também permite trabalho offline com arquivos disponíveis no dispositivo." },
      { letra: "B", texto: "As três versões oferecem exatamente as mesmas funcionalidades, variando apenas o esquema de cores da interface." },
      { letra: "C", texto: "A versão desktop só é atualizada por download manual; a versão web não recebe atualização automática; a mobile funciona exclusivamente offline." },
      { letra: "D", texto: "A versão mobile oferece todas as funcionalidades do desktop, e a versão web não requer conexão com a internet." }
    ],
    gabarito: "A",
    justificativa: "As versões diferem em recursos e condições de uso. A versão web é acessada pelo navegador e depende normalmente de conexão; algumas funcionalidades avançadas podem estar disponíveis apenas no aplicativo desktop. Os aplicativos desktop, depois de instalados e ativados, podem ser usados offline para arquivos locais ou sincronizados, embora instalação, ativação, atualização e acesso a arquivos somente na nuvem exijam conexão. Os aplicativos móveis têm recursos adaptados ao dispositivo e podem trabalhar offline com arquivos previamente disponíveis, sincronizando alterações quando a conexão retorna. A alternativa A é a única que preserva essas distinções sem afirmar paridade funcional.",
    analise: {
      A: "CORRETA. Reproduz as três descrições do currículo sem acrescentar nem omitir características.",
      B: "INCORRETA. Erro conceitual: equivalência indevida entre plataformas. O currículo registra explicitamente que a web é 'básica' e a mobile é 'simplificada' — não há paridade funcional.",
      C: "INCORRETA. Erro conceitual: inverte os mecanismos. A web recebe atualização automática (é servida pelo navegador), a desktop atualiza via Microsoft Update, e a mobile depende de sincronização com a nuvem — nada disso é 'exclusivamente offline' ou 'manual'.",
      D: "INCORRETA. Erro conceitual: afirma exatamente o oposto do currículo (mobile simplificado; web requer internet). É a alternativa 'espelho' típica de FCC/VUNESP."
    },
    regra: "Classificação de clientes de aplicativo: servidor (web), instalação local (desktop) e aplicativo nativo com sincronização (mobile) — as três diferem em requisito de rede, escopo funcional e canal de atualização.",
    pegadinha: "As alternativas B e D são 'quase verdade' para quem lê só uma frase do enunciado; a palavra-chave é comparar TODOS os atributos (funcionalidade, internet, atualização) de cada versão.",
    fonte: "Microsoft Support — diferença entre Microsoft 365 e Office 2024, incluindo uso offline após instalação/ativação: https://support.microsoft.com/pt-br/office/lifecycle/lc-account/what-s-the-difference-between-microsoft-365-and-office-2024; comparação de recursos Word Web/Desktop: https://support.microsoft.com/pt-br/word/word-features-comparison-word-for-the-web-vs-desktop.",
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
    contexto: "Plano Enterprise elegível contratado por um órgão, com a documentação do licenciamento confirmando a cota de armazenamento; descrição do armazenamento conforme o tópico 'Armazenamento local e em nuvem'.",
    enunciado: "Em um plano Microsoft 365 Enterprise elegível, o OneDrive pode oferecer 5 TB por usuário conforme as condições de licenciamento; o SharePoint é indicado para armazenamento e colaboração de equipe.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho determinante é 'plano Microsoft 365 Enterprise elegível' e 'pode oferecer 5 TB conforme as condições de licenciamento': a capacidade é condicional, enquanto o papel do SharePoint está corretamente descrito.",
    justificativa: "A cota de armazenamento deve ser confirmada para a licença e o locatário específicos; não é correto generalizar 5 TB para todo plano Enterprise. O papel do SharePoint para armazenamento e colaboração de equipe está corretamente atribuído.",
    analise: {
      item: "Item VERDADEIRO. A afirmação sobre 5 TB depende de elegibilidade e condições do plano; o papel do SharePoint para colaboração de equipe está corretamente atribuído.",
      leituraIncorreta: "Leitura que induz ao erro: generalizar os 5 TB para todos os planos. O item é verdadeiro justamente porque o enunciado limita a 'Enterprise' — se ele dissesse 'em todos os planos Microsoft 365', seria FALSO."
    },
    regra: "Divisão de papéis no M365: OneDrive = armazenamento pessoal do usuário; SharePoint = armazenamento e colaboração de equipe; o limite de capacidade é propriedade do plano licenciado.",
    pegadinha: "A pegadinha é generalizar a cota de armazenamento: o enunciado limita a oferta a planos elegíveis e às condições documentadas; não presume que todos os planos Enterprise ofereçam 5 TB.",
    fonte: "Microsoft Learn — limites de armazenamento do OneDrive por plano: https://learn.microsoft.com/pt-br/office365/servicedescriptions/onedrive-for-business-service-description; gerenciamento do limite por usuário: https://learn.microsoft.com/en-us/onedrive/change-user-storage.",
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
    enunciado: "A retenção do histórico de versões do OneDrive/SharePoint é sempre de 30 dias por padrão, independentemente do tipo de conta, plano e política do locatário.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'sempre de 30 dias por padrão, independentemente do tipo de conta, plano e política do locatário': o prazo de histórico de versões depende do serviço, do tipo de conta e das configurações aplicáveis.",
    justificativa: "Histórico de versões e lixeira são mecanismos distintos. Não se deve ensinar um prazo universal de 30 dias para o histórico de versões; a retenção varia conforme o tipo de conta, a configuração do serviço e as políticas aplicáveis. As políticas de retenção do locatário podem ser administradas, mas isso não torna universal um prazo fixo.",
    analise: {
      item: "Item FALSO. O prazo fixo universal de 30 dias não pode ser presumido para todo histórico de versões do OneDrive/SharePoint.",
      leituraIncorreta: "Leitura que induz ao erro: confundir 'histórico de versões' com 'backup'. O histórico é funcionalidade de recuperação dentro do próprio serviço — a questão do backup separado aparece no tópico 1.5 (OneDrive), e lá o currículo afirma que sincronização não substitui backup."
    },
    regra: "Retenção × backup: histórico de versões é retenção limitada e configurável dentro do serviço; backup é cópia independente (recomendação 3-2-1 citada no currículo do OneDrive).",
    pegadinha: "A pegadinha é o prazo universal: não confunda uma configuração observada em determinado ambiente com regra fixa para todo serviço, tipo de conta e locatário."
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
      { letra: "B", texto: "Conta organizacional (Business/Enterprise) com plano elegível que inclua as capacidades exigidas: gestão centralizada, domínio personalizado, eDiscovery, gerenciamento de dispositivos e compliance." },
      { letra: "C", texto: "Conta Microsoft pessoal com autenticação em dois fatores, pois o MFA substitui a gestão por domínio." },
      { letra: "D", texto: "Conta local do sistema operacional, pois contas em nuvem não suportam políticas de segurança." }
    ],
    gabarito: "B",
    justificativa: "O currículo diferencia contas pessoais, voltadas ao uso doméstico, de contas organizacionais, que permitem administração centralizada e recursos de gestão. O requisito só é atendido por um plano organizacional que inclua explicitamente eDiscovery, gerenciamento de dispositivos e os recursos de compliance necessários; a disponibilidade exata varia conforme o plano e as licenças atribuídas.",
    analise: {
      A: "INCORRETA. Erro conceitual: escopo doméstico. Contas pessoais/familiares não têm gestão centralizada nem eDiscovery — características do tópico 'contas organizacionais'.",
      B: "CORRETA. O cenário exige uma conta organizacional e um plano elegível que confirme todas as capacidades; a categoria da conta, sozinha, não garante cada recurso.",
      C: "INCORRETA. Erro conceitual: confundir fator de autenticação com modelo de gestão. MFA é controle de acesso; não cria domínio personalizado, eDiscovery nem conformidade.",
      D: "INCORRETA. Erro conceitual: premissa falsa. O currículo atribui 'políticas de segurança avançadas' às contas organizacionais no M365 — a negação de suporte em contas nuvem não existe no conteúdo base."
    },
    regra: "Classificação de identidades no M365: conta pessoal/familiar (consumo) × conta organizacional (diretório e administração central); recursos avançados como eDiscovery e gestão de dispositivos dependem do plano/licenças.",
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
    contexto: "Um órgão define política de compartilhamento externo e recuperação de arquivos para contas pessoais e organizacionais.",
    enunciado: "Em qualquer conta do Microsoft 365, a lixeira retém arquivos exatamente 30 dias e todos os links podem sempre receber expiração, senha e restrição de download, sem depender do tipo de conta ou das políticas do locatário.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'em qualquer conta', 'exatamente 30 dias' e 'sem depender ... das políticas do locatário': a retenção e os controles de compartilhamento variam conforme o tipo de conta, o serviço e a configuração aplicável.",
    justificativa: "Não se deve generalizar um prazo único de retenção da lixeira para todas as contas pessoais e organizacionais. Da mesma forma, expiração, senha e restrição de download em links dependem dos recursos disponíveis e das políticas configuradas pelo administrador. A política deve ser verificada para o serviço, o tipo de conta e o locatário específicos; histórico de versões e lixeira são mecanismos distintos.",
    analise: {
      item: "Item FALSO. O enunciado transforma opções configuráveis em garantias universais e ignora diferenças entre contas e políticas.",
      leituraIncorreta: "Leitura que induz ao erro: reconhecer que alguns links oferecem esses controles e generalizar que todos os links e contas sempre os oferecem."
    },
    regra: "Verifique retenção e compartilhamento conforme o tipo de conta, o serviço e as políticas do locatário; não confunda lixeira com histórico de versões.",
    pegadinha: "Palavras absolutas como 'qualquer', 'exatamente' e 'sempre' tornam falsa uma afirmação que ignora as configurações aplicáveis."
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
    contexto: "Coluna de medições com vírgula decimal e precisões diferentes (1,0; 2,50; 10,750) deve alinhar as vírgulas verticalmente, formando coluna.",
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
    contexto: "Norma interna exige o texto 'Veja a Figura 3' no corpo do texto, que deve poder ser corrigido de forma consistente após mover ou reordenar a figura e atualizar os campos do documento.",
    enunciado: "Qual recurso do Word cria a referência vinculada que pode ser atualizada após mover a figura?",
    alternativas: [
      { letra: "A", texto: "Legenda automática inserida sob a figura, digitada manualmente no corpo." },
      { letra: "B", texto: "Referência cruzada, que cria um campo vinculado à legenda/figura e pode ser atualizado quando o objeto é movido ou renumerado." },
      { letra: "C", texto: "Índice remissivo, gerado a partir das marcas de entrada de índice." },
      { letra: "D", texto: "Citação bibliográfica gerenciada pelo grupo 'Referências'." }
    ],
    gabarito: "B",
    justificativa: "O currículo define referências cruzadas como vínculos para locais específicos (por exemplo, 'Veja a Figura 1'). No Word, a referência cruzada é inserida como campo e pode ser atualizada (por exemplo, selecionando o campo e usando Atualizar Campo/F9) após mover ou renumerar a figura. A legenda identifica e numera a figura, mas não mantém por si só o texto de referência no corpo.",
    analise: {
      A: "INCORRETA. Erro conceitual: confundir identificação com vinculação. A legenda dá o número à figura; o texto no corpo continua estático se digitado à mão.",
      B: "CORRETA. A referência cruzada cria um campo vinculado à figura/legenda, que pode ser atualizado após mudanças no documento.",
      C: "INCORRETA. Erro conceitual: finalidade trocada. Índice remissivo é gerado das marcas de entrada de índice marcadas ao longo do texto — não vincula figuras.",
      D: "INCORRETA. Erro conceitual: mesmo grupo de interface ('Referências'), função diferente — gerenciar fontes e bibliografia, não figuras."
    },
    regra: "Referência cruzada = campo interno que pode ser atualizado; legenda = numeração do objeto; índice remissivo = mapa de marcas de entrada.",
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
    justificativa: "O currículo descreve a exportação (Arquivo > Exportar > Criar PDF/XPS) com opções para 'preservar camadas de acessibilidade (texto alternativo, estrutura de títulos) para leitores de tela' e recomenda 'verificar PDF resultante para garantir preservação de elementos essenciais'. O Verificar Acessibilidade identifica justamente texto alternativo ausente, uso de estilos de título, contraste e navegação por teclado.",
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
    enunciado: "O Modo de Compatibilidade, ativado ao abrir arquivos .doc legados no Word moderno, restringe alguns recursos posteriores que não são compatíveis com o formato original para preservar a compatibilidade do conteúdo.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'desabilita funcionalidades introduzidas depois de 2007 para preservar a integridade do conteúdo original' — definição literal do tópico de compatibilidade.",
    justificativa: "O currículo descreve o Modo de Compatibilidade como forma de preservar a estrutura de arquivos legados, restringindo recursos que não são compatíveis com o formato original. Converter para .docx pode permitir recursos mais recentes, mas também pode alterar a formatação; por isso, recomenda-se salvar uma cópia antes da conversão.",
    analise: {
      item: "Item VERDADEIRO. Gatilho (.doc no 365), efeito (desabilitar funções pós-2007) e finalidade (integridade) coincidem com o currículo.",
      leituraIncorreta: "Leitura que induz ao erro: supor que o modo 'congela tudo' ou que impede salvar. Ele limita funcionalidades novas, não bloqueia o documento — salvar em .docx sai do modo."
    },
    regra: "Compatibilidade de formatos: .doc (binário legado) → modo de compatibilidade e restrições de alguns recursos; .docx (Open XML) → suporte a recursos modernos; .pdf → distribuição.",
    pegadinha: "O ano (2007) é o marco que separa 'funcionalidades antigas' de 'novas' — itens C/E costumam trocá-lo por 2003 ou 2010; aqui ele está correto, então o item é Certo."
  },
  {
    id: "q-m1-26",
    modulo: 1,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-4-topico-1-sub-1",
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
    topico: "modulo-1-unidade-4-topico-1-sub-1",
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
    topico: "modulo-1-unidade-5-topico-1-sub-1",
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
    topico: "modulo-1-unidade-5-topico-1-sub-1",
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
    topico: "modulo-1-unidade-3-topico-3-sub-2",
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
    topico: "modulo-1-unidade-3-topico-3-sub-2",
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
    topico: "modulo-1-unidade-3-topico-6-sub-2",
    assunto: "M1.3 Excel (simulador documentado)",
    /* Reescrita (2026-10-20, incremento P0): a versão anterior afirmava que
     * PROCV/PROCH/PROCX "retornam mensagem documentada de não-execução de
     * busca real" e citava strings ("SIMULADO: ...", "não executa busca real
     * em matriz externa") que NÃO existem em simulators.js. O código real
     * executa busca de verdade (fnProcv ~589, fnProch ~622, fnProcx ~655),
     * com correspondência exata e aproximada e erros #N/A/#REF!/#VAL!/
     * #DIV/0!/#NUM! (cabeçalho "TIPOS E ERROS"). Conferido por leitura direta
     * do arquivo; nenhum outro objeto de questions.js foi alterado. */
    contexto: "Manual do simulador Excel desta apostila descreve o escopo de aceitação de entradas e o comportamento das funções de pesquisa (assets/js/simulators.js — cabeçalho 'TIPOS E ERROS', tokenizador/analisador, funções fnProcv, fnProch, fnProcx e rejeitaEntradaInvalida).",
    enunciado: "No simulador documentado, entradas que utilizem nomes definidos, tabelas estruturadas ou referências a células fora dos limites da planilha são rejeitadas antes da avaliação, com mensagem iniciada por \"ERRO DE ENTRADA\", enquanto as funções PROCX/PROCH/PROCV executam busca real nos intervalos informados — correspondência exata ou aproximada — e devolvem o código #N/A (no PROCX, alternativamente o valor informado em \"se_não_encontrado\") quando não encontram o valor procurado.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'as funções PROCX/PROCH/PROCV executam busca real nos intervalos informados — correspondência exata ou aproximada — e devolvem o código #N/A ... quando não encontram o valor procurado': em simulators.js, fnProcv varre a 1ª coluna da matriz (laço de comparação com igual(); na aproximada usa ultimaPosicaoAte, 'último valor <= alvo'), fnProch faz o mesmo na 1ª linha e fnProcx percorre o intervalo_busca comparando com igual() — nenhum desses trechos retorna mensagem de busca não-real; a ausência de correspondência vira #N/A (linhas ~612, ~618, ~645, ~651 e ~705).",
    justificativa: "As duas cláusulas do item são conferíveis no código. (1) Rejeição prévia: o tokenizador dispara 'referência \"...\" fora dos limites da planilha' e o analisador dispara 'nome \"...\" não reconhecido — nomes definidos e tabelas estruturadas estão fora do escopo documentado'; ambas as exceções são capturadas em calcularFormula e convertidas em mensagem que começa com 'ERRO DE ENTRADA [calcularFormula]' — recusa ocorre durante a análise sintática, antes da avaliação. (2) Busca real: fnProcv, fnProch e fnProcx comparam de fato o valor procurado com os elementos do intervalo (exata) ou aplicam a semântica 'último valor menor ou igual' (aproximada) e só então devolvem o resultado ou o código #N/A; no PROCX, se o 4º argumento 'se_não_encontrado' for informado, ele é devolvido no lugar do #N/A. Os erros de execução seguem os códigos declarados no cabeçalho: #N/A, #REF!, #VAL!, #DIV/0! e #NUM!. O item descreve fielmente o comportamento do código atual.",
    analise: {
      item: "Item VERDADEIRO. Ambas as cláusulas correspondem ao código: recusa de entradas fora do escopo ANTES da avaliação, com mensagem iniciada por 'ERRO DE ENTRADA' (tokenizador e analisador sintático), e busca de verdade em PROCX/PROCH/PROCV, exata ou aproximada, com retorno #N/A na ausência de correspondência.",
      leituraIncorreta: "Leitura que induz ao erro: (1) tratar 'ERRO DE ENTRADA' como sinal de falha do simulador — é recusa deliberada, documentada e anterior à execução; (2) supor, por descrições desatualizadas do banco, que PROCX não foi implementado ou que PROCV/PROCH apenas avisam que não buscam — as três funções executam busca real; (3) confundir os dois canais de erro: 'ERRO DE ENTRADA' (entrada fora do escopo, antes da avaliação) é diferente dos códigos #N/A, #REF!, #VAL!, #DIV/0! e #NUM! (erros durante a execução)."
    },
    regra: "Escopo declarado × funcionalidade (Seção 7.1 do prompt mestre — laboratórios com ações e resultados reais dentro do escopo declarado): entradas fora do escopo são recusadas ANTES da avaliação com mensagem útil iniciada por 'ERRO DE ENTRADA'; erros de execução usam os códigos Excel declarados (#N/A, #REF!, #VAL!, #DIV/0!, #NUM!); e PROCV/PROCH/PROCX executam busca real — nenhum resultado pode ser apresentado como real quando não o for.",
    pegadinha: "Item técnico com duas cláusulas que tratam de canais distintos: a primeira é sobre RECUSA de entrada (antes da avaliação) e a segunda sobre COMPORTAMENTO das funções de pesquisa (durante a execução). Quem associa 'mensagem de erro' a defeito, ou decorou a limitação antiga de PROCX, tende a marcar Errado o que o código atual confirma."
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
    justificativa: "Em P2P, cada par pode consumir e fornecer recursos em momentos diferentes ou simultaneamente. Isso não impede que uma implementação use serviços auxiliares de coordenação ou indexação; o aspecto distintivo é a participação dos pares no compartilhamento de recursos.",
    analise: {
      A: "INCORRETA. Erro conceitual: eliminar a distinção em vez de torná-la dinâmica — é literalmente a correção documentada no exemplo 'erro' do currículo.",
      B: "CORRETA. Dualidade e dinamismo de papéis, conforme a correção do currículo.",
      C: "INCORRETA. Erro conceitual: negar a solicitação; se todos só servissem, ninguém baixaria — contraria o próprio cenário.",
      D: "INCORRETA. Erro conceitual: nega a oferta de recursos; e a inexistência de servidor dedicado não apaga o papel funcional de servidor."
    },
    regra: "Arquitetura P2P: os pares podem ofertar e consumir recursos; a distribuição não depende necessariamente de um servidor central dedicado, embora algumas implementações usem servidores de coordenação ou indexação.",
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
    pegadinha: "A alternativa C tenta confundir com caminhos lógicos predefinidos em algumas tecnologias. Isso não transforma o encaminhamento IP da Internet em comutação clássica de circuitos; MPLS usa caminhos comutados por rótulos e não deve ser tratado como circuito telefônico dedicado."
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
    justificativa: "O exemplo 'erro' do currículo: 'Incorreto. Na comutação de pacotes IP, os datagramas podem seguir caminhos diferentes conforme as decisões de roteamento. Algumas tecnologias, como Frame Relay e MPLS, podem estabelecer caminhos lógicos de encaminhamento; isso não as torna equivalentes à comutação clássica de circuitos.' A observação do cenário (chegada desordenada) é a consequência natural desse roteamento independente.",
    analise: {
      item: "Item FALSO. O advérbio 'sempre' contradiz o roteamento independente por pacote; a ordenação no destino é justamente uma das desvantagens listadas (necessidade de reordenação).",
      leituraIncorreta: "Leitura que induz ao erro: confundir sessão/conexão TCP (comunicacionalmente contínua) com caminho de encaminhamento dos pacotes — continuidade lógica não implica rota física única."
    },
    regra: "Encaminhamento IP por pacote pode variar; caminhos lógicos de tecnologias como MPLS/Frame Relay são outra forma de organizar o encaminhamento, não comutação clássica de circuitos. A reordenação, quando ocorre, deve ser tratada pelo protocolo ou aplicação apropriados.",
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
    enunciado: "Em redes IPv4, a associação de receptores a grupos multicast é gerenciada por IGMP; em IPv6, a função correspondente é realizada por MLD.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'o receptor precisa inscrever-se em um grupo para receber o tráfego, gerenciamento realizado por meio do protocolo IGMP'.",
    justificativa: "Em IPv4, multicast permite que receptores se associem a grupos e o IGMP gerencia essa associação. Em IPv6, o protocolo correspondente é MLD. O item é correto porque delimita explicitamente o uso de IGMP a redes IPv4.",
    analise: {
      item: "Item VERDADEIRO. Inscrição no grupo e papel do IGMP constam tanto do conteúdo quanto do exercício do currículo.",
      leituraIncorreta: "Leitura que induz ao erro: confundir com broadcast, que é enviado a todos sem inscrição — a distinção central é o JOIN (participação opt-in)."
    },
    regra: "Multicast: envio para um grupo; em IPv4, IGMP gerencia associação de membros; em IPv6, MLD desempenha função correspondente. A rede replica o tráfego nos pontos necessários.",
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
    justificativa: "O currículo define: 'IMAP: mantém e-mails sincronizados no servidor e no cliente. Ideal para multi-dispositivo (celular, tablet, computador)', e o exemplo de aplicação responde: 'IMAP. Com a configuração padrão de POP3, as mensagens baixadas podem ser removidas do servidor e deixar de estar disponíveis em outro dispositivo; o comportamento depende das opções de manter cópia.'",
    analise: {
      A: "INCORRETA. Erro conceitual: POP3 baixa e, por padrão, apaga do servidor — o segundo dispositivo ficaria sem as mensagens.",
      B: "CORRETA. Sincronização servidor-cliente é o requisito do cenário (multi-dispositivo).",
      C: "INCORRETA. Erro conceitual: SMTP é protocolo de ENVIO, não de recebimento (o currículo registra esse engano como exemplo 'erro').",
      D: "INCORRETA. Erro conceitual: invenção de comportamento ('apaga após o segundo download') — o currículo descreve o apagamento por padrão no download."
    },
    regra: "POP3 (110/995): download local; conforme a configuração, pode apagar a cópia do servidor — adequado a cenários de um dispositivo/offline. IMAP (143/993): estado no servidor e sincronização — multi-dispositivo.",
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
    enunciado: "O SPF lista servidores autorizados para o domínio e o DKIM assina mensagens; em conjunto com alinhamento e política DMARC, ajudam a reduzir spoofing do domínio, mas não bloqueiam todas as formas de falsificação de remetente.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho determinante é 'em conjunto com alinhamento e política DMARC, ajudam a reduzir spoofing do domínio, mas não bloqueiam todas as formas de falsificação': SPF e DKIM fornecem sinais de autenticação, sem garantir a eliminação de toda falsificação.",
    justificativa: "SPF e DKIM fornecem sinais de autenticação do domínio/remetente; DMARC permite definir tratamento e relatórios para mensagens que falham nos critérios configurados. Esses controles ajudam a reduzir spoofing de domínio, mas não garantem impedir toda falsificação, como nomes de exibição enganosos.",
    analise: {
      item: "Item VERDADEIRO. As funções de SPF e DKIM estão descritas corretamente e, com DMARC configurado, ajudam a reduzir spoofing de domínio sem garantir proteção contra toda falsificação.",
      leituraIncorreta: "Leitura que induz ao erro: pensar que SPF/DKIM 'impedem' o envio falsificado no ato — eles permitem DETECTAR/verificar; a aplicação da política (bloquear/quarentenar) é do DMARC. A expressão do currículo ('previnem spoofing verificando') é a base do item."
    },
    regra: "SPF autoriza servidores, DKIM fornece assinatura verificável e DMARC define política e relatórios com base nos resultados e no alinhamento configurado; esses controles ajudam a reduzir spoofing de domínio, sem bloquear todas as falsificações.",
    pegadinha: "Não trate autenticação de domínio como garantia absoluta: SPF/DKIM/DMARC ajudam a reduzir spoofing, mas não eliminam todos os ataques de engenharia social ou falsificação de nome de exibição."
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
    regra: "Distinção entre categorias: spam é mensagem não solicitada; phishing é fraude para induzir ação ou obter dados; spear phishing é phishing direcionado/personalizado. Não é uma escala universal de gravidade; spoofing é uma técnica que pode acompanhar diferentes ataques.",
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
      { letra: "C", texto: "Zoom, se o plano contratado suportar 500 participantes, webinars e salas simultâneas (breakout rooms)." },
      { letra: "D", texto: "Qualquer plataforma é equivalente — todas têm os mesmos recursos." }
    ],
    gabarito: "C",
    justificativa: "O exemplo de aplicação do currículo é este cenário: 'Uma universidade precisa dar uma palestra online para 500 alunos. Teams, Meet ou Zoom? → Zoom — webinars e salas simultâneas, desde que a licença contratada suporte 500 participantes e os recursos de moderação exigidos'.",
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
    topico: "m3-u4-t1-s1",
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
    topico: "m3-u4-t3-s1",
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
    justificativa: "O currículo lista os elementos: 'definir quando e como gravar, quem pode gravar, onde armazenar, quanto tempo manter ... Retenção ... Acesso ... Compartilhamento ... Proteção: criptografar gravações sensíveis', e o exemplo introdutório resume: 'Quando gravar, quem pode gravar, onde armazenar, prazo de retenção, quem tem acesso, regras de compartilhamento, proteção (criptografia), e procedimento para exclusão'. A aplicação da LGPD exige identificar a hipótese legal adequada, definir finalidade e retenção, adotar medidas de segurança e atender aos direitos dos titulares; consentimento é necessário quando for a base aplicável, não em todos os tratamentos.",
    analise: {
      A: "CORRETA. Reúne todos os elementos do currículo mais o consentimento exigido no exemplo de aplicação com LGPD.",
      B: "INCORRETA. Erro conceitual: omissão sistemática — sem finalidade, retenção, acesso e proteção, a política não atende ao descrito (e a LGPD exige mais do que um aviso isolado).",
      C: "INCORRETA. Erro conceitual: critérios operacionais de reunião, não de governança da gravação — nenhum dos itens da lista do currículo aparece.",
      D: "INCORRETA. Erro conceitual: consentimento genérico e permanente sem finalidade/prazo contraria a lógica descrita (definição de finalidade, prazo de retenção, direito de acesso e exclusão)."
    },
    regra: "Governança de gravação: finalidade → consentimento → quem/grava/onde/retém → controle de acesso → compartilhamento → proteção → exclusão.",
    pegadinha: "A alternativa D é a 'confortável': consentimento único soa profissional, mas sem finalidade e prazo ela viola o próprio exemplo de aplicação do módulo — a FCC cobra a política completa.",
    fonte: "Currículo M3, unidade 2, tópico 3; Lei nº 13.709/2018 (LGPD), arts. 6º, 9º e 46.",
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
    pegadinha: "Em questões jurídicas, a pegadinha é a REFORMULAÇÃO que altera o sentido (trocar 'agentes de tratamento' por 'titulares', ou 'medidas de segurança' por 'consentimento'). Aqui o item transcreve o dispositivo sem trocas — logo, Certo.",
    fonte: "Lei nº 13.709/2018 (LGPD), art. 46 — medidas de segurança técnicas e administrativas.",
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


,
/* ===================== Continuação MÓDULO 1 — Microsoft 365 (q-m1-33..q-m1-40) ===================== */

  {
    id: "q-m1-33",
    modulo: 1,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-3-topico-2-sub-1",
    assunto: "M1.3 Excel — referências absolutas/mistas ao copiar fórmula",
    contexto: "Planilha do simulador Excel (assets/js/simulators.js) com uma taxa unitária fixa na célula B1 e valores brutos na coluna A. Em C2 foi digitada a fórmula =A2*$B$1 e ela é copiada para a célula imediatamente abaixo, C3. Fonte: escopo documentado do simulador (refs A1, $A$1 absoluta, $A1/B$2 mistas e a regra de ajustarFormulaAoCopiar).",
    enunciado: "De acordo com a regra do simulador para ajuste de fórmulas ao copiar, qual será o conteúdo da célula C3 após a cópia de C2?",
    alternativas: [
      { letra: "A", texto: "=A2*$B$2 — ambos os índices de linha avançam uma posição." },
      { letra: "B", texto: "=A3*$B$1 — a parte relativa (A2) avança e a absoluta ($B$1) permanece inalterada." },
      { letra: "C", texto: "=A2*$B$1 — a fórmula não se altera ao ser copiada para outra linha." },
      { letra: "D", texto: "=$A3*$B$1 — a referência A2 passa a ser absoluta na coluna ao descer uma linha." }
    ],
    gabarito: "B",
    justificativa: "O simulador documenta que ajustarFormulaAoCopiar ajusta apenas as partes relativas, preservando a trava $; referências mistas ajustam somente o eixo relativo. Em =A2*$B$1, A2 é totalmente relativa (muda de linha: A2→A3) e $B$1 é totalmente absoluta (permanece $B$1). Logo, copiando de C2 para C3 (mesma coluna, uma linha abaixo), o resultado é =A3*$B$1.",
    analise: {
      A: "INCORRETA. Erro conceitual: tratar a referência absoluta $B$1 como se fosse relativa. A trava $ em $B$1 impede qualquer alteração de linha ou coluna ao copiar; apenas A2 (relativa) deve mudar.",
      B: "CORRETA. É a única que aplica corretamente a regra: a parte relativa (A2→A3) avança uma linha e a absoluta ($B$1) permanece idêntica, conforme a semântica documentada do ajuste ao copiar.",
      C: "INCORRETA. Erro conceitual: achar que a fórmula é imutável ao copiar. A referência A2 é relativa e, ao descer uma linha, passa a A3; só as referências com $ em ambos os eixos seriam preservadas integralmente.",
      D: "INCORRETA. Erro conceitual: converter indevidamente A2 em $A2/$A3. A referência original A2 não possui trava; copiá-la não adiciona uma trava nova — a trava só se preserva quando já existia."
    },
    regra: "Referências ao copiar: relativa (A2) muda em ambos os eixos conforme o deslocamento; absoluta ($A$1) nunca muda; mista ($A2 ou A$2) muda apenas o eixo sem $. O simulador implementa isso em ajustarFormulaAoCopiar (trava $ preservada; mistas ajustam só o eixo relativo).",
    pegadinha: "A pegadinha é a mistura de dois eixos numa só fórmula: quem copia 'no olho' tende a deslocar também a célula travada ($B$1) ou a esquecer de deslocar a relativa (A2)."
  },
  {
    id: "q-m1-34",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-3-topico-4-sub-1",
    assunto: "M1.3 Excel — PROCX e o argumento opcional se_não_encontrado",
    contexto: "Afirmação sobre o comportamento documentado da função de pesquisa PROCX no simulador Excel (assets/js/simulators.js — cabeçalho 'FUNÇÕES SUPORTADAS' e exemplo de sintaxe PROCX(20; A1:A3; B1:B3; \"n/a\"; 0)).",
    enunciado: "No simulador documentado, o PROCX realiza correspondência exata por padrão e, quando o valor procurado não é encontrado e o argumento opcional \"se_não_encontrado\" foi informado, a função devolve esse valor personalizado em vez do código de erro #N/A.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'correspondência exata por padrão e, quando o valor procurado não é encontrado e o argumento opcional \"se_não_encontrado\" foi informado, a função devolve esse valor personalizado em vez do código de erro #N/A': o cabeçalho lista PROCX como 'busca moderna real, exato por padrão, com argumento \"se_não_encontrado\"', e o exemplo PROCX(20; A1:A3; B1:B3; \"n/a\"; 0) mostra esse quarto argumento recebendo o texto \"n/a\" a ser retornado na ausência de correspondência.",
    justificativa: "Ambas as cláusulas correspondem ao escopo documentado. (1) Por padrão, o PROCX usa correspondência exata (modo 0), diferentemente da busca aproximada padrão do PROCV/PROCH. (2) O quarto argumento 'se_não_encontrado' é opcional e, quando informado, é devolvido no lugar do #N/A que a função retornaria ao não encontrar o valor — exatamente como no exemplo do cabeçalho, em que \"n/a\" substitui o #N/A. O item descreve fielmente o comportamento.",
    analise: {
      item: "Item VERDADEIRO. O PROCX é de correspondência exata por padrão e aceita um argumento opcional 'se_não_encontrado' que, quando informado, é retornado no lugar do #N/A, conforme o cabeçalho e o exemplo de sintaxe do simulador.",
      leituraIncorreta: "Leitura que induz ao erro: (1) confundir PROCX com PROCV, achando que o padrão é busca aproximada; (2) crer que o PROCX sempre lança #N/A sem alternativa, ignorando o argumento opcional 'se_não_encontrado' que permite um retorno customizado; (3) tratar o #N/A como obrigatório mesmo quando o usuário forneceu um valor de fallback."
    },
    regra: "PROCX(procurar; intervalo_busca; intervalo_retorno; [se_não_encontrado]; [modo]): correspondência exata por padrão; na ausência de correspondência, devolve #N/A ou o valor do argumento opcional 'se_não_encontrado', quando informado.",
    pegadinha: "A armadilha é projetar o comportamento do PROCV (aproximado por padrão, sem retorno customizado simples) sobre o PROCX, que é exato por padrão e possui o argumento específico 'se_não_encontrado'."
  },
  {
    id: "q-m1-35",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-3-topico-3-sub-2",
    assunto: "M1.3 Excel — separador regional de argumentos e decimais",
    contexto: "Afirmação sobre a regra de desambiguação do separador regional no simulador Excel (assets/js/simulators.js — cabeçalho 'SEPARADOR REGIONAL').",
    enunciado: "No simulador documentado, a fórmula SOMA(1,5; 2,5) resulta em 4, porque a presença do ponto e vírgula ativa o modo regional pt-BR, em que o ponto e vírgula separa argumentos e a vírgula funciona como separador decimal; já SOMA(1,5), sem o ponto e vírgula, resulta em 6, por ser interpretada como dois argumentos no modo internacional.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'SOMA(1,5; 2,5) resulta em 4 ... o ponto e vírgula separa argumentos e a vírgula funciona como separador decimal; já SOMA(1,5), sem o ponto e vírgula, resulta em 6': o cabeçalho declara exatamente esses dois exemplos — SOMA(1,5; 2,5) = 4 (modo pt-BR) e a consequência SOMA(1,5) sem ';' = 1+5 = 6 (dois argumentos, modo internacional).",
    justificativa: "A regra documentada é: se a fórmula contém ';' fora de textos entre aspas, o modo é pt-BR (';' separa argumentos; ',' ou '.' são decimais) — daí SOMA(1,5; 2,5) = 1,5 + 2,5 = 4. Caso contrário, o modo é internacional (',' separa argumentos; apenas '.' é decimal) — daí SOMA(1,5) é lida como dois argumentos 1 e 5, resultando em 6. O item reproduz fielmente os dois exemplos declarados no cabeçalho.",
    analise: {
      item: "Item VERDADEIRO. As duas fórmulas e seus resultados (4 e 6) correspondem exatamente aos exemplos do cabeçalho 'SEPARADOR REGIONAL', que usa a presença de ';' para escolher entre modo pt-BR e modo internacional.",
      leituraIncorreta: "Leitura que induz ao erro: (1) assumir que ',' é sempre decimal, ignorando que, sem ';', o simulador entra em modo internacional e a trata como separador de argumentos; (2) calcular SOMA(1,5) como se fosse 1,5 (um único valor), quando a ausência de ';' a torna dois argumentos (1 e 5 = 6)."
    },
    regra: "Desambiguação pelo ';': com ';' (fora de textos) → modo pt-BR (';' separa argumentos, ',' ou '.' é decimal); sem ';' → modo internacional (',' separa argumentos, '.' é decimal). Consequência declarada: SOMA(1,5) sem ';' = 6.",
    pegadinha: "A armadilha é a aparente identidade textual entre '1,5' (decimal em pt-BR) e '1,5' (dois argumentos em modo internacional): o que decide é a presença ou não do ponto e vírgula."
  },
  {
    id: "q-m1-36",
    modulo: 1,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "basico",
    topico: "modulo-1-unidade-4-topico-1-sub-1",
    assunto: "M1.4 PowerPoint — diferença entre animação e transição",
    contexto: "Secretário municipal prepara uma apresentação de prestação de contas em PowerPoint e precisa aplicar efeitos visuais. Ele confunde 'animação' com 'transição'. Fonte: conteúdo da unidade 1.4 (curriculumPowerPoint14).",
    enunciado: "Sobre animações e transições no PowerPoint, conforme a unidade 1.4, assinale a alternativa que apresenta a diferença correta entre os dois conceitos.",
    alternativas: [
      { letra: "A", texto: "Animações são efeitos aplicados entre slides, e transições são efeitos aplicados a objetos individuais dentro de um slide." },
      { letra: "B", texto: "Animações aplicam efeitos a objetos individuais de um slide (entrada, ênfase, saída), enquanto transições são efeitos entre slides (fade, push, wipe)." },
      { letra: "C", texto: "Animações e transições são conceitos idênticos; a única diferença é o nome usado em versões diferentes do programa." },
      { letra: "D", texto: "Transições só podem ser aplicadas ao primeiro slide da apresentação, e animações só ao último slide." }
    ],
    gabarito: "B",
    justificativa: "A unidade 1.4 define: animações aplicam efeitos a objetos individuais (entrada, ênfase, saída), com ordem, duração e gatilhos configuráveis; transições são efeitos entre slides (fade, push, wipe). O próprio exemplo de 'erro' do currículo corrige a confusão: 'animações = efeitos dentro de um slide (objetos); transições = efeitos entre slides'. A alternativa B reproduz exatamente essa distinção.",
    analise: {
      A: "INCORRETA. Erro conceitual: inverte os conceitos. Animações atuam dentro do slide (objetos), não entre slides; transições atuam entre slides, não em objetos individuais.",
      B: "CORRETA. É a única que respeita a definição da unidade 1.4: animação = objeto dentro do slide (entrada/ênfase/saída); transição = efeito entre slides (fade/push/wipe).",
      C: "INCORRETA. Erro conceitual: trata como sinônimos o que a unidade 1.4 distingue explicitamente (dentro do slide × entre slides). A confusão é justamente o 'erro' documentado no exemplo do currículo.",
      D: "INCORRETA. Erro conceitual: invenção de restrição inexistente. O currículo não limita transições ao primeiro slide nem animações ao último; ambos os efeitos são aplicáveis a qualquer slide/objeto."
    },
    regra: "Animação = efeito em objeto individual dentro de um slide (entrada, ênfase, saída). Transição = efeito entre slides (fade, push, wipe). São conceitos distintos.",
    pegadinha: "A alternativa A é a inversão direta da definição; quem decorou os termos sem fixar 'dentro × entre' tende a escolhê-la."
  },
  {
    id: "q-m1-37",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-4-topico-1-sub-1",
    assunto: "M1.4 PowerPoint — escopo de ação do Slide Mestre",
    contexto: "Afirmação sobre o comportamento do Slide Mestre (Slide Master) na unidade 1.4 (curriculumPowerPoint14).",
    enunciado: "No PowerPoint, ao alterar o Slide Mestre (layout pai), a modificação é aplicada apenas ao slide atualmente selecionado, pois cada slide guarda uma cópia independente dos elementos de layout definidos pelo mestre.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'a modificação é aplicada apenas ao slide atualmente selecionado, pois cada slide guarda uma cópia independente dos elementos de layout': a unidade 1.4 afirma o oposto — 'alterar o mestre propaga para todos os slides vinculados', e o exercício de C/E do próprio currículo responde 'Errado. O Slide Mestre afeta todos os slides vinculados ao mestre e seus layouts filhos'.",
    justificativa: "O Slide Mestre define tipografia, cores, logotipos e layouts filhos; ao alterá-lo, a mudança se propaga para todos os slides vinculados e seus layouts filhos — não fica restrita ao slide selecionado. A premissa de 'cópia independente por slide' contradiz o mecanismo de vinculação ao mestre descrito na unidade 1.4.",
    analise: {
      item: "Item FALSO. O Slide Mestre tem ação coletiva: a alteração propaga para todos os slides vinculados e layouts filhos, e não se limita ao slide atual nem parte de cópias independentes por slide.",
      leituraIncorreta: "Leitura que induz ao erro: imaginar que cada slide 'congelou' uma cópia dos elementos do mestre no momento da criação, de modo que editá-lo só afetaria o slide aberto. Na verdade, os slides permanecem vinculados ao mestre, e a edição do mestre os atualiza em conjunto."
    },
    regra: "Slide Mestre (Slide Master): define tipografia, cores, logotipos e layouts filhos; alterá-lo propaga para todos os slides vinculados (e seus layouts filhos).",
    pegadinha: "A armadilha é a intuição de 'cópia local fixa': quem acredita que o slide guarda uma cópia independente dos elementos do mestre conclui, equivocadamente, que a edição do mestre afeta só o slide aberto."
  },
  {
    id: "q-m1-38",
    modulo: 1,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-5-topico-1-sub-1",
    assunto: "M1.5 OneDrive — sincronização não é backup imutável",
    contexto: "Afirmação sobre a natureza do OneDrive como serviço de armazenamento em nuvem (unidade 1.5, curriculumOneDrive15).",
    enunciado: "Como o OneDrive é um serviço de sincronização bidirecional e não de backup imutável, alterações maliciosas — como as provocadas por ransomware em arquivos locais — podem se propagar para a nuvem, razão pela qual ele não substitui um backup corporativo completo e separado.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'OneDrive é um serviço de sincronização bidirecional e não de backup imutável ... alterações maliciosas ... podem se propagar para a nuvem ... não substitui um backup corporativo completo e separado': a unidade 1.5 afirma literalmente que 'OneDrive NÃO substitui backup corporativo completo; é sincronização, não backup imutável (ransomware pode propagar alterações maliciosas para nuvem)'.",
    justificativa: "A unidade 1.5 é explícita: a sincronização é bidirecional (alterações locais propagam para a nuvem e vice-versa) e o OneDrive não é backup imutável — ransomware pode propagar alterações maliciosas para a nuvem. Por isso ele não substitui backup corporativo completo; a recomendação é manter backup separado (3-2-1: 3 cópias, 2 mídias, 1 offsite). O item reproduz fielmente esse raciocínio.",
    analise: {
      item: "Item VERDADEIRO. As três teses (sincronização bidirecional; não é backup imutável; propagação de alterações maliciosas para a nuvem; não substitui backup completo) estão todas na unidade 1.5.",
      leituraIncorreta: "Leitura que induz ao erro: confundir 'ter uma cópia na nuvem' com 'ter backup'. Como a cópia é sincronizada (não imutável), um arquivo criptografado localmente por ransomware é replicado para a nuvem, destruindo a suposta proteção. A cópia em nuvem só protege se houver um backup independente e não sincronizado."
    },
    regra: "OneDrive = sincronização bidirecional, não backup imutável. Alterações (inclusive maliciosas) propagam para a nuvem; não substitui backup corporativo completo (recomendação 3-2-1: 3 cópias, 2 mídias, 1 offsite).",
    pegadinha: "A armadilha é equiparar 'armazenamento em nuvem' a 'backup': a sincronização replica o estado atual (inclusive o danificado), enquanto o backup exige uma cópia independente e imutável."
  },
  {
    id: "q-m1-39",
    modulo: 1,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-1-topico-1-sub-6",
    assunto: "M1.1 OneDrive — histórico de versões e restauração",
    contexto: "Um órgão está definindo procedimentos de recuperação de arquivos no OneDrive e precisa documentar limites aplicáveis ao seu ambiente.",
    enunciado: "Qual orientação sobre o histórico de versões é tecnicamente mais segura?",
    alternativas: [
      { letra: "A", texto: "Todos os arquivos mantêm exatamente 500 versões por 30 dias, independentemente do tipo de conta e das políticas." },
      { letra: "B", texto: "Verifique o tipo de conta, o serviço e as políticas de retenção aplicáveis; não presuma um limite universal de versões ou prazo, e teste o processo de restauração." },
      { letra: "C", texto: "Restaurar uma versão anterior sempre apaga definitivamente a versão atual." },
      { letra: "D", texto: "O histórico de versões é um backup imutável e substitui cópias de segurança independentes." }
    ],
    gabarito: "B",
    justificativa: "A retenção e a quantidade de versões disponíveis dependem do serviço, do tipo de conta e das configurações e políticas aplicáveis; não se deve generalizar um prazo ou limite único para todo ambiente Microsoft 365. Antes de definir um procedimento institucional, confirme a configuração efetiva e teste a restauração. O histórico de versões é útil para recuperação, mas não equivale, por si só, a um backup independente e imutável.",
    analise: {
      A: "INCORRETA. Transforma valores que podem variar por serviço e política em garantias universais.",
      B: "CORRETA. A orientação exige confirmar a configuração aplicável e validar o procedimento de recuperação.",
      C: "INCORRETA. A restauração não deve ser descrita como exclusão definitiva universal da versão atual; o comportamento deve ser verificado na experiência documentada do serviço.",
      D: "INCORRETA. Histórico de versões e backup independente têm propriedades e objetivos distintos; sincronização/histórico não substituem uma estratégia de backup."
    },
    regra: "Documente a retenção conforme serviço, tipo de conta e política do locatário; teste restauração e mantenha backup independente conforme o risco.",
    pegadinha: "Não transforme um valor padrão observado em uma configuração específica em regra universal para todas as contas e locatários."
  },
  {
id: "q-m1-40",
    modulo: 1,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "avancado",
    topico: "modulo-1-unidade-4-topico-1-sub-1",
    assunto: "M1.4 PowerPoint — PDF vs Empacotar Apresentação para CD",
    contexto: "Uma autarquia preparará uma apresentação em PowerPoint que será exibida em um projetor em sala sem internet e em um computador que não possui o PowerPoint instalado. O responsável precisa escolher como disponibilizar o arquivo para esse ambiente offline. Fonte: unidade 1.4 (curriculumPowerPoint14) — exportação e empacotamento.",
    enunciado: "À luz da unidade 1.4, sobre como garantir que a apresentação funcione corretamente nesse ambiente offline (sem internet e sem o PowerPoint instalado), assinale a alternativa correta.",
    alternativas: [
      { letra: "A", texto: "Basta exportar a apresentação para PDF, pois o PDF já vincula as fontes e inclui toda a mídia, transformando o arquivo em apresentação executável e dispensando qualquer outro procedimento." },
      { letra: "B", texto: "Para apresentação offline em máquina sem o PowerPoint, deve-se usar 'Empacotar Apresentação para CD' (Package Presentation), que inclui fontes vinculadas e mídia; a exportação para PDF preserva o layout, mas não converte o arquivo em apresentação executável." },
      { letra: "C", texto: "O modo de apresentação (Slide Show) roda mesmo sem o PowerPoint instalado, desde que haja conexão com a internet para carregar os slides." },
      { letra: "D", texto: "A exportação para PDF e o 'Empacotar Apresentação para CD' têm exatamente a mesma função e podem ser usados de forma totalmente intercambiável em qualquer situação." }
    ],
    gabarito: "B",
    justificativa: "A unidade 1.4 trata dois recursos distintos: 'Exportação para PDF preserva layout' e, 'para apresentação offline, usar \"Empacotar Apresentação para CD\" (Package Presentation) incluindo fontes vinculadas e mídia'. O Empacotar é o caminho para levar a apresentação (com fontes e mídia) a um ambiente offline; o PDF, por sua vez, preserva o layout mas é um documento para leitura/impressão, não uma apresentação executável no PowerPoint. A alternativa B respeita essa distinção.",
    analise: {
      A: "INCORRETA. Erro conceitual: atribui ao PDF o que o currículo reserva ao Empacotar (vincular fontes e incluir mídia) e o transforma em 'apresentação executável'. O PDF preserva layout, mas não é a ferramenta de empacotamento offline descrita.",
      B: "CORRETA. É a única que aplica corretamente a unidade 1.4: para offline sem PowerPoint usa-se 'Empacotar Apresentação para CD' (fontes vinculadas + mídia); o PDF preserva o layout mas não converte o arquivo em apresentação executável.",
      C: "INCORRETA. Erro conceitual: invenção dupla. O modo de apresentação (Slide Show) exige o PowerPoint instalado e não depende de internet; a alternativa afirma o oposto (roda sem o programa e precisa de internet).",
      D: "INCORRETA. Erro conceitual: equiparação indevida. O currículo descreve funções distintas (PDF preserva layout; Empacotar leva fontes e mídia para offline); não são intercambiáveis em qualquer situação."
    },
    regra: "Exportação para PDF preserva o layout (documento para leitura/impressão). Para apresentação offline, usar 'Empacotar Apresentação para CD' (Package Presentation), que inclui fontes vinculadas e mídia.",
    pegadinha: "A armadilha é a alternativa A, que transfere ao PDF a responsabilidade de vincular fontes e incluir mídia — papel que a unidade 1.4 atribui ao Empacotar para CD — e a D, que apaga a distinção entre os dois recursos."
  },
  /* ===================== FIM do bloco q-m1-33..q-m1-40 (Módulo 1) ===================== */
{
    id: "q-m2-27",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — comutação de circuitos vs. pacotes",
    contexto: "Uma concessionária de serviços públicos precisa transmitir dados de medidores entre filiais com latência variável típica da Internet.",
    enunciado: "Sobre a escolha entre comutação de circuitos e de pacotes para esse tráfego de dados na Internet, assinale a alternativa correta.",
    alternativas: [
      { letra: "A", texto: "A comutação de pacotes estabelece um caminho dedicado antes da comunicação, garantindo latência fixa." },
      { letra: "B", texto: "A comutação de pacotes divide os dados em pacotes roteados independentemente, compartilhando a largura de banda e oferecendo tolerância a falhas." },
      { letra: "C", texto: "A Internet utiliza comutação de circuitos, pois assim cada pacote segue sempre o mesmo caminho." },
      { letra: "D", texto: "A principal vantagem da comutação de pacotes é a banda garantida e o setup mais lento que a de circuitos." }
    ],
    gabarito: "B",
    justificativa: "O currículo define que, na comutação de pacotes, os dados são divididos em pacotes que caminham independentemente pela rede; suas vantagens são eficiência (compartilhamento de largura de banda) e tolerância a falhas, e suas desvantagens são latência variável (jitter), perda de pacotes e necessidade de reordenação. Afirma ainda que a Internet usa comutação de pacotes. A alternativa B reproduz essa definição.",
    analise: {
      A: "INCORRETA. Erro conceitual: descreve comutação de CIRCUITOS (caminho dedicado, latência previsível), não de pacotes. Atribui a pacotes a garantia que é própria dos circuitos.",
      B: "CORRETA. É a única que apresenta a definição correta de comutação de pacotes (roteamento independente, compartilhamento de banda, tolerância a falhas), conforme o currículo.",
      C: "INCORRETA. Erro conceitual duplo: a Internet usa comutação de PACOTES, e nela cada pacote é roteado independentemente (pode seguir caminhos diferentes) — o oposto do afirmado.",
      D: "INCORRETA. Erro conceitual: troca as vantagens/desvantagens. Banda garantida e setup lento são características da comutação de CIRCUITOS; a vantagem dos pacotes é o aproveitamento de banda."
    },
    regra: "Comutação de pacotes: dados em pacotes independentes, banda compartilhada, tolerância a falhas; latência variável e possível perda/reordenação. A Internet usa pacotes; a telefonia tradicional, circuitos.",
    pegadinha: "Inverter vantagens e desvantagens entre os dois tipos de comutação: 'banda garantida' e 'setup lento' pertencem aos circuitos, não aos pacotes."
  },
  {
    id: "q-m2-28",
    modulo: 2,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — métricas de desempenho",
    contexto: "Um enlace de 1 Gbps apresenta, em teste, throughput de 720 Mbps; o ping é estável, mas aplicações de voz apresentam áudio interrompido.",
    enunciado: "Considerando largura de banda, throughput, latência e jitter, assinale a alternativa que interpreta corretamente o cenário.",
    alternativas: [
      { letra: "A", texto: "Largura de banda e throughput são sinônimos; os 280 Mbps restantes são consumidos exclusivamente por colisões." },
      { letra: "B", texto: "Throughput (720 Mbps) é a taxa real alcançada, inferior à largura de banda teórica (1 Gbps); o áudio interrompido é típico de jitter alto, não de latência estável." },
      { letra: "C", texto: "Throughput nunca é inferior à largura de banda; se mede 720 Mbps, a largura de banda real é 720 Mbps." },
      { letra: "D", texto: "Jitter é a latência média do enlace; como o ping está estável, o jitter é necessariamente alto." }
    ],
    gabarito: "B",
    justificativa: "O currículo distingue largura de banda nominal (capacidade do enlace) de throughput (taxa útil observada), normalmente menor devido a overhead de protocolo, congestionamento, erros e outras condições da rede. Jitter = variação na latência entre pacotes consecutivos, crítico para VoIP (áudio interrompido). Latência e jitter são métricas distintas: ping estável não implica jitter alto nem baixo. A alternativa B é a única coerente.",
    analise: {
      A: "INCORRETA. Erro conceitual: afirma que largura de banda e throughput são sinônimos (o currículo corrige isso) e reduz a diferença a 'colisões apenas', ignorando overhead, congestionamento e qualidade do sinal.",
      B: "CORRETA. Throughput é a taxa real (sempre < largura de banda) e o áudio interrompido em VoIP é sintoma de jitter alto; a latência estável (ping) é métrica distinta do jitter, conforme o currículo.",
      C: "INCORRETA. Erro conceitual: inverte a regra — o currículo afirma que 'throughput nunca excede largura de banda', ou seja, é sempre menor ou igual, não que seriam iguais.",
      D: "INCORRETA. Erro conceitual: define jitter como 'latência média' (é a VARIAÇÃO da latência) e deduz jitter alto de ping estável — dois erros, pois latência e jitter são independentes."
    },
    regra: "Largura de banda (teórica) ≥ throughput (real). Jitter = variação da latência entre pacotes; é distinto da latência média e crítico para VoIP/streaming.",
    pegadinha: "Confundir latência (ping) com jitter (variação da latência): ping estável não diz nada sobre o jitter, que é o que causa o áudio interrompido."
  },
  {
    id: "q-m2-29",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s2",
    assunto: "M2.1 Fundamentos — comunicação unicast/broadcast/multicast/anycast",
    contexto: "Um administrador observa, em um switch, o tráfego de uma requisição ARP e de um DHCP discovery na rede local.",
    enunciado: "As comunicações ARP e DHCP discovery são exemplos de broadcast, que é limitado ao domínio de broadcast (sub-rede local) e não é encaminhado por roteadores.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho 'ARP e DHCP discovery são exemplos de broadcast' e 'broadcast é limitado ao domínio de broadcast (sub-rede local) e não é encaminhado por roteadores' coincide com o currículo, que cita exatamente ARP e DHCP discovery como broadcast e afirma que roteadores não encaminham broadcasts.",
    justificativa: "O currículo lista broadcast como comunicação um-para-todos na mesma rede/domínio de broadcast, com exemplos em ARP e DHCP discovery, e registra que 'Broadcast é limitado por roteadores (não atravessa sub-redes)'. O item reproduz fielmente esses dois pontos.",
    analise: {
      item: "Item VERDADEIRO. ARP e DHCP discovery são os exemplos canônicos de broadcast do currículo, e a contenção por roteadores (domínio de broadcast = sub-rede) está correta.",
      leituraIncorreta: "Leitura que induz ao erro: achar que broadcast 'chega a toda a Internet' (o próprio exemplo 'erro' do currículo corrige: roteadores não encaminham 255.255.255.255 para evitar tempestades de broadcast)."
    },
    regra: "Broadcast = um-para-todos no domínio de broadcast; limitado pela sub-rede, não atravessa roteadores. ARP e DHCP discovery são exemplos didáticos.",
    pegadinha: "Itens simples por design: o risco é a superstição de que 'broadcast se espalha por toda a rede/Internet'; ele é contido na sub-rede pelos roteadores."
  },
  {
    id: "q-m2-30",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s2",
    assunto: "M2.1 Fundamentos — tipos de comunicação",
    contexto: "Uma secretaria realiza videoaula ao vivo para 200 servidores simultaneamente e, em paralelo, um usuário acessa um site.",
    enunciado: "Sobre os tipos de comunicação empregados nesses dois casos, assinale a alternativa correta.",
    alternativas: [
      { letra: "A", texto: "Ambos são unicast; a videoaula exigiria 200 fluxos separados para ser eficiente." },
      { letra: "B", texto: "O acesso ao site é unicast (um-para-um); a videoaula é mais eficiente em multicast (um-para-muitos, grupo inscrito), evitando 200 fluxos duplicados." },
      { letra: "C", texto: "A videoaula é broadcast, pois atinge muitos receptores, e atravessa roteadores até todos os setores." },
      { letra: "D", texto: "O acesso ao site é anycast e a videoaula é broadcast, que exige inscrição em grupo via IGMP." }
    ],
    gabarito: "B",
    justificativa: "O currículo define unicast como comunicação um-para-um (ex.: acessar um site) e multicast como um-para-muitos, para um grupo específico que se inscreveu (ex.: streaming de vídeo IPTV), exigindo inscrição do receptor (IGMP join). No exemplo de aplicação, streaming para muitos funcionários é mais eficiente em multicast do que em unicast (que exigiria N fluxos separados). A alternativa B aplica corretamente essas definições.",
    analise: {
      A: "INCORRETA. Erro conceitual: a videoaula para muitos é o caso típico de multicast; afirmar que 'unicast é mais eficiente' contradiz o exemplo do currículo (unicast exigiria 200 fluxos, consumindo muito mais banda).",
      B: "CORRETA. Site = unicast (um-para-um); videoaula = multicast (um-para-muitos, com inscrição em grupo), mais eficiente que N fluxos unicast, conforme o currículo.",
      C: "INCORRETA. Erro conceitual: multicast não é broadcast, e broadcast (não multicast) é que é limitado pelos roteadores; além disso, multicast exige grupo inscrito, não 'todos os setores'.",
      D: "INCORRETA. Erro conceitual: acesso a um site é unicast, não anycast; e quem exige inscrição via IGMP é o multicast, não o broadcast — troca de conceitos."
    },
    regra: "Unicast (1:1, ex.: site) × multicast (1:many, grupo inscrito, IGMP, ex.: streaming) × broadcast (1:all da sub-rede, limitado por roteadores) × anycast (1:mais-próximo).",
    pegadinha: "Confundir multicast com broadcast: multicast exige grupo inscrito (IGMP) e é contido de forma diferente; broadcast atinge todos da sub-rede e não atravessa roteadores."
  },
  {
    id: "q-m2-31",
    modulo: 2,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u1-t1-s4",
    assunto: "M2.1 Fundamentos — meios de transmissão (UTP/fibra)",
    contexto: "Uma fábrica com máquinas de alta potência precisa de rede cabeada entre dois prédios distantes 300 m, com risco de interferência eletromagnética.",
    enunciado: "Com base nas características dos meios do currículo, assinale a alternativa que recomenda o meio adequado e justifica corretamente.",
    alternativas: [
      { letra: "A", texto: "UTP Cat6, pois suporta 10 Gbps até 100 m e é imune a interferência eletromagnética." },
      { letra: "B", texto: "Fibra óptica, pois tem alta largura de banda, é imune a interferência eletromagnética e percorre 300 m sem repetidor; UTP limita-se a 100 m." },
      { letra: "C", texto: "UTP Cat5e, pois é o meio mais barato e atende a distâncias acima de 500 m sem perda de 1 Gbps." },
      { letra: "D", texto: "Coaxial, pois é o meio moderno recomendado para ligações entre prédios e imune a raios." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: UTP limita-se a 100 m (Cat6 suporta 10 Gbps até 55 m; Cat6a até 100 m) e é suscetível a interferência; a fibra óptica tem alta largura de banda, é imune a interferência eletromagnética e percorre longas distâncias (o exemplo do currículo usa fibra monomodo para 500 m sem repetidor). Para 300 m com EMI, a fibra é a recomendação correta.",
    analise: {
      A: "INCORRETA. Erro conceitual duplo: UTP tem limite de 100 m (não cobre 300 m) e NÃO é imune a interferência — é suscetível; a imunidade é da fibra.",
      B: "CORRETA. Fibra: alta largura de banda, imune a EMI e alcance bem acima de 300 m sem repetidor; UTP fica limitado a 100 m — justificativa fiel ao currículo.",
      C: "INCORRETA. Erro conceitual: Cat5e (1 Gbps) e UTP têm limite de 100 m; não atende a 500 m nem a ambientes com EMI sem blindagem — invenção de alcance.",
      D: "INCORRETA. Erro conceitual: coaxial é citado como meio de redes antigas/TV a cabo, não como recomendação moderna entre prédios; a imunidade a interferência pertence à fibra."
    },
    regra: "UTP: até 100 m, suscetível a EMI (Cat6: 10 Gbps/55 m; Cat6a: 10 Gbps/100 m). Fibra óptica: alta banda, imune a EMI, longa distância sem repetidor.",
    pegadinha: "Atribuir a UTP a imunidade a interferência eletromagnética (é da fibra) e esquecer o teto de 100 m do par trançado."
  },
  {
    id: "q-m2-32",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s4",
    assunto: "M2.1 Fundamentos — meios de transmissão (categorias UTP)",
    contexto: "Um técnico especifica cabeamento estruturado e afirma que um cabo UTP Cat6 garantirá 10 Gbps em toda a extensão padrão de 100 m.",
    enunciado: "De acordo com o currículo, o UTP Cat6 suporta 10 Gbps até 100 metros.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'Cat6 suporta 10 Gbps até 100 metros': o currículo afirma que 'Cat6 suporta 10 Gbps até 55m; Cat6a suporta 10 Gbps até 100m'.",
    justificativa: "O exercício registrado no currículo marca esse item como Errado e corrige: Cat6 suporta 10 Gbps até 55 m; para 10 Gbps até 100 m é necessário Cat6a. A extensão de 100 m a 10 Gbps não é garantida pelo Cat6.",
    analise: {
      item: "Item FALSO. O Cat6 atinge 10 Gbps apenas até 55 m; a distância de 100 m a 10 Gbps exige Cat6a — o item confunde as duas categorias.",
      leituraIncorreta: "Leitura que induz ao erro: associar 'Cat6 = 10 Gbps' ao alcance máximo de 100 m do par trançado (esse 100 m vale para 1 Gbps; a 10 Gbps o Cat6 cai para 55 m)."
    },
    regra: "UTP: Cat5e (1 Gbps), Cat6 (10 Gbps até 55 m), Cat6a (10 Gbps até 100 m). O alcance de 100 m só se mantém a 10 Gbps com Cat6a.",
    pegadinha: "Confundir Cat6 com Cat6a: a letra 'a' (augmented) é justamente o que estende 10 Gbps aos 100 m completos."
  },
  {
    id: "q-m2-33",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — topologias físicas",
    contexto: "Uma rede predial tem todos os computadores conectados a um switch central; a falha de um cabo afeta apenas o computador daquele cabo.",
    enunciado: "Sobre a topologia descrita, assinale a alternativa correta.",
    alternativas: [
      { letra: "A", texto: "É topologia em anel: a falha de um nó quebra o círculo e derruba toda a rede.",
      letra2: null },
      { letra: "B", texto: "É topologia em estrela: a falha de um nó afeta apenas esse nó; a falha do dispositivo central (switch) derruba toda a rede." },
      { letra: "C", texto: "É topologia em barra (bus): a falha do switch é irrelevante e só a falha do cabo central derruba a rede." },
      { letra: "D", texto: "É topologia em malha: há um único dispositivo central e alta redundância por definição." }
    ],
    gabarito: "B",
    justificativa: "O currículo define topologia em estrela como 'todos conectados a um switch/hub central — falha em um nó não afeta os demais; falha no switch derruba tudo'. O cenário (todos ao switch central; falha de cabo afeta só aquele nó) é exatamente a estrela. A falha do dispositivo central é o ponto único de falha que derruba a rede.",
    analise: {
      A: "INCORRETA. Erro conceitual: anel conecta nós em círculo com um token; não há dispositivo central e a falha de nó pode quebrar o anel — não corresponde ao cenário (switch central).",
      B: "CORRETA. Estrela: nós ao switch central, falha de nó isolada, falha do switch derruba tudo — definição literal do currículo.",
      C: "INCORRETA. Erro conceitual: em barra (bus) o cabo backbone é o ponto único de falha e não há switch central; o item troca os papéis do cabo e do dispositivo central.",
      D: "INCORRETA. Erro conceitual: malha conecta cada nó a todos os outros (redundância por múltiplos caminhos), sem dispositivo central único — a descrição mistura malha com estrela."
    },
    regra: "Estrela: todos os nós a um switch/hub central; falha de nó = isolada; falha do central = rede toda caída. Malha = redundância por múltiplos caminhos.",
    pegadinha: "A pegadinha é localizar o ponto único de falha: na estrela é o dispositivo central (não o nó), ao contrário do bus, onde é o cabo backbone."
  },
  {
    id: "q-m2-34",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t3-s1",
    assunto: "M2.1 Fundamentos — métricas de desempenho",
    contexto: "Um enlace de 1 Gbps é testado e apresenta throughput de 850 Mbps.",
    enunciado: "Throughput é a taxa útil efetivamente observada em um enlace e, sob definições e unidades de medida compatíveis, não excede a capacidade nominal do canal.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho 'throughput ... nunca excede a largura de banda teórica' é VERDADEIRO: o currículo define 'Throughput: taxa real de transferência alcançada (sempre menor que a largura de banda)' e afirma explicitamente que 'Throughput nunca excede largura de banda'.",
    justificativa: "A largura de banda descreve a capacidade nominal do enlace; throughput é a taxa útil efetivamente medida. Em condições reais, overhead, congestionamento e erros costumam deixar o throughput abaixo da capacidade nominal, e a comparação exige definições e unidades compatíveis.",
    analise: {
      item: "Item VERDADEIRO. Throughput é a taxa real e é sempre menor ou igual à largura de banda teórica — o currículo registra isso duas vezes (definição e correção do exemplo 'erro').",
      leituraIncorreta: "Leitura que induz ao erro: tratar largura de banda e throughput como sinônimos (o exemplo 'erro' do currículo corrige justamente essa equiparação)."
    },
    regra: "Largura de banda = capacidade nominal do enlace; throughput = taxa útil medida, normalmente inferior por overhead e condições de rede. Compare-os usando definições e unidades compatíveis.",
    pegadinha: "Itens C/E básicos misturam definições próximas; a disciplina é não confundir 'capacidade teórica' (banda) com 'taxa real' (throughput)."
  },
  {
    id: "q-m2-35",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u1-t1-s2",
    assunto: "M2.1 Fundamentos — tipos de comunicação",
    contexto: "Um engenheiro documenta os tipos de tráfego usados por servidores DNS raiz, por uma CDN e por um serviço de streaming de vídeo.",
    enunciado: "O anycast direciona o tráfego para o receptor mais próximo de um grupo (sendo usado em servidores DNS raiz e CDNs), enquanto o multicast exige que os receptores se inscrevam em um grupo.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho é VERDADEIRO: o currículo define anycast como 'um-para-o-mais-próximo (ex: DNS root servers, CDN)' e multicast como 'um-para-muitos (grupo específico que se inscreveu)', com o receptor enviando IGMP join.",
    justificativa: "O currículo lista anycast com exemplos em servidores DNS raiz e CDN (um-para-o-mais-próximo) e multicast como um-para-muitos para um grupo inscrito, exigindo inscrição do receptor (IGMP join). O item associa corretamente cada tipo ao seu mecanismo e exemplos.",
    analise: {
      item: "Item VERDADEIRO. AnyCast = mais-próximo (DNS raiz/CDN); multicast = grupo inscrito (IGMP) — ambas as afirmações coincidem com o currículo.",
      leituraIncorreta: "Leitura que induz ao erro: confundir anycast com multicast (anycast não exige inscrição em grupo; entrega ao nó mais próximo) ou achar que multicast atinge 'todos' (é grupo específico)."
    },
    regra: "Anycast encaminha para uma instância selecionada pela política de roteamento, muitas vezes a mais próxima em termos topológicos (ex.: serviços DNS/CDN); multicast envia a um grupo; broadcast alcança o domínio local; unicast é 1:1.",
    pegadinha: "A pegadinha é trocar os mecanismos: anycast não exige inscrição (IGMP); quem exige grupo inscrito é o multicast."
  },
  {
    id: "q-m2-36",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — comutação de circuitos vs. pacotes",
    contexto: "Um usuário faz uma ligação telefônica tradicional (PSTN) e, em outro aparelho, uma chamada VoIP pela Internet.",
    enunciado: "A telefonia tradicional (PSTN) utiliza comutação de circuitos, estabelecendo um caminho dedicado durante a chamada, enquanto a Internet utiliza comutação de pacotes.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho é VERDADEIRO: o currículo afirma que a comutação de circuitos 'estabelece um caminho dedicado ... antes da comunicação (ex: telefonia tradicional)' e que 'A Internet usa comutação de pacotes; redes telefônicas tradicionais usam comutação de circuitos'.",
    justificativa: "O currículo associa a telefonia tradicional (PSTN) à comutação de circuitos (caminho dedicado, banda fixa) e a VoIP/Internet à comutação de pacotes (voz em pacotes que competem por banda, latência variável). O item reproduz exatamente essa classificação.",
    analise: {
      item: "Item VERDADEIRO. PSTN = comutação de circuitos (caminho dedicado); Internet = comutação de pacotes — correspondência literal com o currículo.",
      leituraIncorreta: "Leitura que induz ao erro: achar que a Internet estabelece caminho dedicado (isso é comutação de circuitos) ou que a PSTN divide dados em pacotes (isso é comutação de pacotes)."
    },
    regra: "Comutação de circuitos = caminho dedicado (PSTN/telefonia tradicional); comutação de pacotes = dados em pacotes independentes (Internet/VoIP).",
    pegadinha: "Itens simples que testam se o examinando associa cada tecnologia ao tipo de comutação correto, sem inverter PSTN (circuitos) e Internet (pacotes)."
  },
  {
    id: "q-m2-37",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m2-u1-t1-s1",
    assunto: "M2.1 Fundamentos — topologias físicas",
    contexto: "Uma rede legada usa um único cabo coaxial ao qual todas as estações se conectam.",
    enunciado: "Na topologia em barra (bus), a falha do cabo principal (backbone) derruba toda a rede, pois ele é o ponto único de falha.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho é VERDADEIRO: o currículo descreve a barra como 'todos conectam ao mesmo cabo coaxial — simples mas colisões frequentes e falha no cabo derruba tudo' e o exercício registra 'Certo. O cabo backbone é ponto único de falha na topologia bus'.",
    justificativa: "O currículo define a topologia em barra (bus) com um cabo compartilhado e aponta que a falha nesse cabo derruba toda a rede, sendo o cabo backbone o ponto único de falha — exatamente o que o item afirma.",
    analise: {
      item: "Item VERDADEIRO. O cabo backbone é o ponto único de falha da topologia bus; sua ruptura derruba a rede — afirmação literal do currículo e do exercício correspondente.",
      leituraIncorreta: "Leitura que induz ao erro: confundir o ponto único de falha da barra (o cabo) com o da estrela (o dispositivo central) — são topologias distintas."
    },
    regra: "Barra (bus): cabo compartilhado; falha no cabo backbone = rede toda caída (ponto único de falha); colisões frequentes.",
    pegadinha: "A pegadinha é localizar o ponto único de falha: na barra é o cabo; na estrela é o switch/hub central."
  },
  {
    id: "q-m2-38",
    modulo: 2,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u4-t2-s1",
    assunto: "M2.1 Fundamentos — cálculo CIDR (/26)",
    contexto: "Um administrador recebe o bloco 192.168.10.0/26 para uma nova sub-rede de servidores.",
    enunciado: "Sobre os endereços dessa sub-rede, assinale a alternativa correta.",
    alternativas: [
      { letra: "A", texto: "Endereço de rede: 192.168.10.0; broadcast: 192.168.10.63; hosts válidos: 192.168.10.1 a 192.168.10.62 (62 hosts); máscara decimal: 255.255.255.192." },
      { letra: "B", texto: "Endereço de rede: 192.168.10.0; broadcast: 192.168.10.127; hosts válidos: 192.168.10.1 a 192.168.10.126 (126 hosts); máscara: 255.255.255.128." },
      { letra: "C", texto: "Endereço de rede: 192.168.10.0; broadcast: 192.168.10.255; hosts válidos: 192.168.10.1 a 192.168.10.254 (254 hosts); máscara: 255.255.255.0." },
      { letra: "D", texto: "Endereço de rede: 192.168.10.0; broadcast: 192.168.10.62; hosts válidos: 192.168.10.1 a 192.168.10.61 (61 hosts); máscara: 255.255.255.192." }
    ],
    gabarito: "A",
    justificativa: "Cálculo do bloco 192.168.10.0/26: prefixo 26 → bits de host = 32 − 26 = 6 → total de endereços = 2^6 = 64 → hosts válidos = 64 − 2 = 62. O bloco tem tamanho 64 no último octeto, começando em .0: endereço de rede = 192.168.10.0; broadcast = 192.168.10.63 (último do bloco); primeiro host = 192.168.10.1; último host = 192.168.10.62. A máscara decimal de /26 é 255.255.255.192 (11111111.11111111.11111111.11000000). A alternativa A reproduz todos esses valores.",
    analise: {
      A: "CORRETA. /26 → 64 endereços, 62 hosts válidos; rede .0, broadcast .63, hosts .1–.62, máscara 255.255.255.192 — cálculo binário correto.",
      B: "INCORRETA. Erro conceitual: descreve /25 (máscara .128, 128 endereços, 126 hosts, broadcast .127), não /26 — trocou o prefixo em um bit.",
      C: "INCORRETA. Erro conceitual: descreve /24 (máscara .0, 256 endereços, 254 hosts, broadcast .255) — prefixo três bits menor que o pedido.",
      D: "INCORRETA. Erro conceitual: número correto de hosts (62) mas broadcast trocado — .62 é o ÚLTIMO HOST, e o broadcast é .63; além disso limita os hosts a .61."
    },
    regra: "CIDR: hosts válidos = 2^(32−prefixo) − 2. /26 → 64 endereços / 62 hosts; bloco de 64 no último octeto; máscara 255.255.255.192; broadcast = último endereço do bloco.",
    pegadinha: "Confundir broadcast com o último host: o broadcast é .63 (último do bloco), enquanto .62 é o último host utilizável — a alternativa D explora essa troca."
  },
  {
    id: "q-m2-39",
    modulo: 2,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u4-t2-s2",
    assunto: "M2.1 Fundamentos — cálculo CIDR (/27)",
    contexto: "Um administrador segmenta o bloco 10.0.0.0 em sub-redes e destina uma delas como 10.0.0.0/27.",
    enunciado: "A sub-rede 10.0.0.0/27 possui 32 endereços no total, dos quais 30 são hosts válidos, e seu endereço de broadcast é 10.0.0.31.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho é VERDADEIRO: para /27, bits de host = 32 − 27 = 5 → total = 2^5 = 32 endereços → hosts válidos = 32 − 2 = 30; o bloco de tamanho 32 começa em .0, logo broadcast = 10.0.0.31.",
    justificativa: "Cálculo de 10.0.0.0/27: prefixo 27 → 5 bits de host → 32 endereços totais → 30 hosts válidos (descontando rede e broadcast). O bloco tem 32 endereços no último octeto (0 a 31): rede = 10.0.0.0, primeiro host = 10.0.0.1, último host = 10.0.0.30, broadcast = 10.0.0.31. As três afirmações do item estão corretas.",
    analise: {
      item: "Item VERDADEIRO. /27 → 32 endereços, 30 hosts válidos, broadcast 10.0.0.31 — cálculo binário coerente (hosts = 2^5 − 2 = 30; broadcast é o último do bloco de 32).",
      leituraIncorreta: "Leitura que induz ao erro: contar o broadcast (ou a rede) como host válido, ou confundir o tamanho do bloco (/27 = 32, não 16 nem 64)."
    },
    regra: "CIDR: total = 2^(32−prefixo); hosts válidos = total − 2. /27 → 32 endereços / 30 hosts; bloco de 32 no último octeto; broadcast = último endereço do bloco (10.0.0.31).",
    pegadinha: "A pegadinha é contar rede e broadcast como hosts utilizáveis — a regra subtrai 2, restando 30 hosts válidos."
  },
  {
    id: "q-m2-40",
    modulo: 2,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "avancado",
    topico: "m2-u4-t2-s1",
    assunto: "M2.1 Fundamentos — cálculo CIDR (/28)",
    contexto: "Uma VLAN recebeu o bloco 172.16.5.16/28 para segmentar um segmento de servidores.",
    enunciado: "Sobre os endereços dessa sub-rede, assinale a alternativa correta.",
    alternativas: [
      { letra: "A", texto: "Rede: 172.16.5.16; broadcast: 172.16.5.31; hosts válidos: 172.16.5.17 a 172.16.5.30 (14 hosts); máscara decimal: 255.255.255.240." },
      { letra: "B", texto: "Rede: 172.16.5.16; broadcast: 172.16.5.30; hosts válidos: 172.16.5.17 a 172.16.5.29 (13 hosts); máscara: 255.255.255.240." },
      { letra: "C", texto: "Rede: 172.16.5.16; broadcast: 172.16.5.47; hosts válidos: 172.16.5.17 a 172.16.5.46 (30 hosts); máscara: 255.255.255.224." },
      { letra: "D", texto: "Rede: 172.16.5.0; broadcast: 172.16.5.15; hosts válidos: 172.16.5.1 a 172.16.5.14 (14 hosts); máscara: 255.255.255.240." }
    ],
    gabarito: "A",
    justificativa: "Cálculo do bloco 172.16.5.16/28: prefixo 28 → bits de host = 32 − 28 = 4 → total = 2^4 = 16 endereços → hosts válidos = 16 − 2 = 14. O bloco tem tamanho 16 no último octeto; começando em .16, vai até .31: rede = 172.16.5.16; broadcast = 172.16.5.31; primeiro host = 172.16.5.17; último host = 172.16.5.30. A máscara decimal de /28 é 255.255.255.240 (11111111.11111111.11111111.11110000). A alternativa A reproduz todos os valores.",
    analise: {
      A: "CORRETA. /28 → 16 endereços, 14 hosts válidos; rede .16, broadcast .31, hosts .17–.30, máscara 255.255.255.240 — cálculo binário correto.",
      B: "INCORRETA. Erro conceitual: coloca o broadcast em .30 (que é o ÚLTIMO HOST) e reduz os hosts a 13 — troca broadcast por último host.",
      C: "INCORRETA. Erro conceitual: descreve /27 (máscara .224, bloco de 32, 30 hosts, broadcast .47) em vez de /28 — prefixo errado.",
      D: "INCORRETA. Erro conceitual: usa o bloco /28 ANTERIOR (172.16.5.0/28, rede .0, broadcast .15); a VLAN recebeu o bloco que começa em .16, não em .0."
    },
    regra: "CIDR: hosts válidos = 2^(32−prefixo) − 2. /28 → 16 endereços / 14 hosts; bloco de 16 no último octeto; máscara 255.255.255.240; rede .16 → broadcast .31.",
    pegadinha: "Dupla armadilha: (1) trocar broadcast (.31) pelo último host (.30); (2) confundir o bloco pedido (.16/28) com o bloco anterior (.0/28)."
  },
{
    id: "q-m3-25",
    modulo: 3,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t1-s1",
    assunto: "M3.1 E-mail — papel do SMTP no percurso da mensagem",
    contexto: "Administrador de correio precisa explicar à equipe por que um e-mail enviado por um colaborador leva alguns segundos para aparecer na caixa de entrada de um destinatário de outra organização.",
    enunciado: "Sobre o percurso de uma mensagem de e-mail enviada por um colaborador do órgão a um destinatário externo, assinale a alternativa que descreve corretamente o papel do SMTP.",
    alternativas: [
      { letra: "A", texto: "O SMTP recebe a mensagem na caixa de entrada do destinatário e a armazena até que ele a consulte." },
      { letra: "B", texto: "O SMTP transporta a mensagem do cliente para o servidor de e-mail do remetente, que a encaminha ao servidor do destinatário; o recebimento na caixa é feito por POP3 ou IMAP." },
      { letra: "C", texto: "O SMTP conecta diretamente o cliente do remetente ao cliente do destinatário, sem passar por servidores de e-mail intermediários." },
      { letra: "D", texto: "O SMTP é o protocolo de recebimento e, por isso, baixa a mensagem para o dispositivo do destinatário." }
    ],
    gabarito: "B",
    justificativa: "O currículo define o SMTP como 'protocolo padrão para envio de e-mails': 'O SMTP envia o e-mail do cliente para o servidor de e-mail do remetente, que então encaminha para o servidor do destinatário.' O recebimento/armazenamento na caixa de entrada é função do POP3/IMAP — o próprio exemplo 'erro' do currículo corrige: 'SMTP é usado para ENVIAR e-mails. POP3 e IMAP são usados para RECEBER e-mails.' A alternativa B reproduz exatamente esse fluxo.",
    analise: {
      A: "INCORRETA. Erro conceitual: atribui ao SMTP a função de receber e armazenar na caixa de entrada — papel do POP3/IMAP. O SMTP encaminha; não conserta a mensagem na caixa do destinatário.",
      B: "CORRETA. É a única que descreve o fluxo do currículo: cliente → servidor do remetente → servidor do destinatário, sendo o recebimento feito por POP3/IMAP.",
      C: "INCORRETA. Erro conceitual: o SMTP opera com servidores intermediários (do remetente e do destinatário); não há conexão direta cliente-a-cliente.",
      D: "INCORRETA. Erro conceitual: inverte a função — SMTP é de ENVIO, não de recebimento/baixar mensagens, conforme o exemplo 'erro' documentado no currículo."
    },
    regra: "SMTP = envio/transferência entre agentes de correio (cliente→servidor remetente→servidor destinatário). Recebimento/armazenamento na caixa = POP3/IMAP.",
    pegadinha: "A pegadinha é trocar a função: quem associa 'SMTP' a 'caixa de entrada/baixar e-mail' inverte envio e recebimento — conceito corrigido no próprio exemplo 'erro' do currículo."
  },
  {
    id: "q-m3-26",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u1-t1-s1",
    assunto: "M3.1 E-mail — criptografia e portas do SMTP",
    contexto: "Auditor de segurança revisando a configuração de criptografia e de portas do servidor de correio do órgão.",
    enunciado: "O SMTP não criptografa as mensagens por padrão, mas a segurança é adicionada via STARTTLS ou SMTPS; nesse contexto, a porta 587 corresponde à submissão com STARTTLS, a 465 ao SMTPS com SSL/TLS implícito, e a porta 25 é destinada ao relay entre servidores de e-mail.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'não criptografa por padrão, mas a segurança é adicionada via STARTTLS ou SMTPS' e a associação '587 → submissão com STARTTLS; 465 → SMTPS com SSL/TLS implícito; 25 → relay entre servidores': todas coincidem com o conteúdo e com o exemplo de aplicação do currículo.",
    justificativa: "O conteúdo do SMTP afirma: 'SMTP ... não criptografa por padrão — a segurança é adicionada via STARTTLS ou SMTPS' e lista '25 (sem criptografia), 587 (submissão com STARTTLS), 465 (SMTPS com SSL/TLS implícito)'. O exemplo de aplicação complementa: 'A porta 25 é usada para relay entre servidores de e-mail'. O item reúne esses fatos sem distorção.",
    analise: {
      item: "Item VERDADEIRO. 'Sem criptografia por padrão' + 'STARTTLS/SMTPS' + o mapeamento 587/465/25 reproduzem fielmente o conteúdo e o exemplo de aplicação do currículo.",
      leituraIncorreta: "Leitura que induz ao erro: confundir a porta 25 com 'submissão segura' — ela é a de relay (sem criptografia) e deve ser bloqueada para clientes externos; a submissão segura é 587/465."
    },
    regra: "Portas SMTP: 25 (relay, sem TLS, bloquear de externos), 587 (submissão + STARTTLS), 465 (SMTPS, SSL/TLS implícito). Criptografia é adicionada, não inerente.",
    pegadinha: "Item composto: basta uma das três associações de porta estivesse trocada que seria Errado — a armadilha é a tentação de 'confiar' na porta 25 como segura."
  },
  {
    id: "q-m3-27",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t1-s2",
    assunto: "M3.1 E-mail — POP3 e IMAP (sincronização multi-dispositivo)",
    contexto: "Servidor público acessa o mesmo e-mail pelo computador da repartição e pelo celular, em momentos distintos, e quer que as marcações (lida/não lida) apareçam em ambos os dispositivos.",
    enunciado: "Qual protocolo é o mais adequado para esse cenário e qual a razão correta?",
    alternativas: [
      { letra: "A", texto: "POP3, porque sincroniza o estado das mensagens no servidor para todos os dispositivos." },
      { letra: "B", texto: "IMAP, porque mantém as mensagens sincronizadas no servidor e no cliente, permitindo acesso multi-dispositivo." },
      { letra: "C", texto: "POP3, porque mantém cópia permanente no servidor e nunca apaga as mensagens baixadas." },
      { letra: "D", texto: "SMTP, porque é o protocolo de recebimento que sincroniza as caixas entre os dispositivos." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: 'IMAP: mantém e-mails sincronizados no servidor e no cliente. Ideal para multi-dispositivo (celular, tablet, computador)'. O exemplo de aplicação reforça: 'IMAP. Com POP3, os e-mails baixados para um dispositivo são apagados do servidor e não estarão disponíveis no outro dispositivo.' A alternativa B reproduz a definição de IMAP.",
    analise: {
      A: "INCORRETA. Erro conceitual: POP3 não sincroniza o estado entre dispositivos — ele baixa e, por padrão, apaga do servidor; a sincronização é propriedade do IMAP.",
      B: "CORRETA. Sincronização servidor-cliente e acesso multi-dispositivo são a definição de IMAP no currículo.",
      C: "INCORRETA. Erro conceitual: inverte o comportamento do POP3 — por padrão ele APAGA do servidor após o download; 'cópia permanente' não é o padrão.",
      D: "INCORRETA. Erro conceitual: SMTP é protocolo de ENVIO, não de recebimento/sincronização — confusão de função já corrigida no exemplo 'erro' do currículo."
    },
    regra: "IMAP (143/993): estado no servidor, sincronização multi-dispositivo. POP3 (110/995): download local, apaga por padrão — 1 dispositivo/offline.",
    pegadinha: "A alternativa C veste o POP3 com um comportamento confortável ('cópia permanente') que não é o padrão; a A atribui a POP3 a sincronização que pertence ao IMAP."
  },
  {
    id: "q-m3-28",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t1-s2",
    assunto: "M3.1 E-mail — POP3 (apagamento por padrão) vs. IMAP",
    contexto: "Configuração padrão de um cliente de e-mail usando POP3 em um único computador da repartição.",
    enunciado: "Por padrão, o POP3 baixa as mensagens do servidor para o dispositivo local e as apaga do servidor, tornando o conteúdo indisponível em outros dispositivos; o IMAP, ao contrário, mantém as mensagens no servidor.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'POP3 baixa ... e as apaga do servidor, tornando o conteúdo indisponível em outros dispositivos' e 'IMAP ... mantém as mensagens no servidor': coincidem com o conteúdo 'POP3: baixa e-mails ... e, por padrão, apaga do servidor' e 'IMAP: mantém e-mails sincronizados no servidor'.",
    justificativa: "O currículo afirma: 'POP3 (Post Office Protocol versão 3): baixa e-mails do servidor para o dispositivo local e, por padrão, apaga do servidor' e 'IMAP ... mantém e-mails sincronizados no servidor e no cliente'. O item combina as duas definições corretamente.",
    analise: {
      item: "Item VERDADEIRO. O apagamento por padrão do POP3 e a manutenção no servidor pelo IMAP são as definições literais do currículo.",
      leituraIncorreta: "Leitura que induz ao erro: supor que POP3 'deixa cópia no servidor por padrão' — o currículo marca isso como exceção (há opção de manter cópia), não como comportamento padrão."
    },
    regra: "POP3: download + apagamento por padrão (1 dispositivo). IMAP: cópia mantida no servidor (multi-dispositivo). A 'opção de manter cópia' do POP3 é exceção, não padrão.",
    pegadinha: "A pegadinha é a memória de que 'dá para configurar o POP3 para manter cópia' e concluir que o padrão é manter — o padrão é apagar."
  },
  {
    id: "q-m3-29",
    modulo: 3,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t1-s3",
    assunto: "M3.1 E-mail — campos To, Cc, Bcc",
    contexto: "Secretaria envia um comunicado para 500 cidadãos e precisa preservar a privacidade dos endereços, sem expor os destinatários uns aos outros.",
    enunciado: "Qual campo do e-mail deve ser utilizado para esse envio em massa?",
    alternativas: [
      { letra: "A", texto: "To — destinatários principais, que se veem mutuamente." },
      { letra: "B", texto: "Cc — destinatários secundários, mas cujos endereços continuam visíveis entre todos." },
      { letra: "C", texto: "Bcc — destinatários ocultos, sem exposição mútua dos endereços." },
      { letra: "D", texto: "From — define o endereço do remetente do comunicado." }
    ],
    gabarito: "C",
    justificativa: "O currículo define: 'Bcc (Blind Carbon Copy): destinatários ocultos; ninguém mais vê quem está em Bcc. Bcc é útil para proteger a privacidade dos destinatários em e-mails para listas grandes.' O exemplo de aplicação é exatamente esse cenário de 500 clientes. A alternativa C reproduz a definição.",
    analise: {
      A: "INCORRETA. Erro conceitual: To é o destinatário principal e visível — exporia todos os endereços, o oposto do objetivo de privacidade.",
      B: "INCORRETA. Erro conceitual: Cc mostra os destinatários uns aos outros ('Carbon Copy — destinatários secundários que veem os demais destinatários'); não protege privacidade.",
      C: "CORRETA. Bcc oculta os destinatários e é indicado para listas grandes, conforme o currículo.",
      D: "INCORRETA. Erro conceitual: From define o remetente, não tem relação com a visibilidade/ocultação dos destinatários."
    },
    regra: "To (principal, visível) × Cc (secundário, visível entre todos) × Bcc (oculto, protege privacidade em listas).",
    pegadinha: "A pegadinha é confundir Cc com Bcc: ambos são 'cópias', mas só o Bcc oculta os endereços — a pegadinha do próprio exemplo 'erro' do currículo ('Cc e Bcc têm a mesma funcionalidade' = Errado)."
  },
  {
    id: "q-m3-30",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u1-t1-s3",
    assunto: "M3.1 E-mail — visibilidade entre Cc e Bcc",
    contexto: "Dois e-mails são comparados: um com destinatários no campo Cc e outro com destinatários no campo Bcc.",
    enunciado: "Em um e-mail com destinatários no campo Cc, todos os destinatários (To e Cc) veem os endereços uns dos outros; em um e-mail com destinatários no campo Bcc, os demais destinatários não veem quem está em Bcc.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'Cc ... todos os destinatários veem os endereços uns dos outros' e 'Bcc ... os demais destinatários não veem quem está em Bcc': coincidem com 'Cc (Carbon Copy — destinatários secundários que veem os demais destinatários)' e 'Bcc (Blind Carbon Copy — destinatários ocultos; os demais não veem)'.",
    justificativa: "O currículo descreve Cc como 'destinatários secundários que veem os demais destinatários' e Bcc como 'destinatários ocultos; os demais não veem'. As duas metades do item reproduzem essas definições.",
    analise: {
      item: "Item VERDADEIRO. A visibilidade mútua do Cc e a ocultação do Bcc são as definições literais do currículo.",
      leituraIncorreta: "Leitura que induz ao erro: tratar Cc e Bcc como equivalentes — o exemplo 'erro' do currículo corrige exatamente isso ('Cc e Bcc têm a mesma funcionalidade' = Errado)."
    },
    regra: "Cc = visível para todos os destinatários; Bcc = oculto para os demais. Funções distintas.",
    pegadinha: "A armadilha é a suposição de equivalência entre Cc e Bcc; a diferença está na visibilidade dos endereços."
  },
  {
    id: "q-m3-31",
    modulo: 3,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u1-t2-s1",
    assunto: "M3.1 E-mail — spam, phishing e spear phishing",
    contexto: "Usuário recebe um e-mail que se passa pelo banco pedindo a senha da conta e, em outro momento, uma propaganda de loja que não solicitou.",
    enunciado: "Sobre spam e phishing, assinale a alternativa correta, conforme o currículo.",
    alternativas: [
      { letra: "A", texto: "Todo spam é phishing, pois ambos têm a intenção de roubar credenciais do destinatário." },
      { letra: "B", texto: "Phishing é a fraude que se passa por entidade confiável para roubar dados; spam é e-mail não solicitado, e nem todo spam é phishing." },
      { letra: "C", texto: "Spam e phishing são sinônimos técnicos e descrevem o mesmo tipo de e-mail." },
      { letra: "D", texto: "Spear phishing é spam genérico enviado em massa, sem direcionamento a pessoa ou organização específica." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: 'Spam: e-mails não solicitados, geralmente comerciais ou maliciosos' e 'Phishing: e-mails fraudulentos que se passam por entidades confiáveis (bancos, empresas) para roubar credenciais ou dados'. O exemplo 'erro' corrige: 'Todo phishing pode ser spam, mas nem todo spam é phishing.' E 'Spear phishing: phishing direcionado a uma pessoa ou organização específica.' A alternativa B reproduz essas definições.",
    analise: {
      A: "INCORRETA. Erro conceitual: inverte a relação — o currículo diz 'nem todo spam é phishing'; spam é não solicitado, sem necessariamente intenção de roubo.",
      B: "CORRETA. Define phishing (fraude que se passa por entidade confiável) e spam (não solicitado) e a relação 'nem todo spam é phishing', conforme o currículo.",
      C: "INCORRETA. Erro conceitual: não são sinônimos — têm propósitos distintos (spam = não solicitado; phishing = fraude para roubo de dados).",
      D: "INCORRETA. Erro conceitual: inverte a definição de spear phishing, que é justamente o direcionado (a pessoa/organização específica), não o genérico em massa."
    },
    regra: "Spam (não solicitado) ⊃ phishing (fraude para roubo); spear phishing = phishing direcionado. 'Todo phishing pode ser spam, mas nem todo spam é phishing.'",
    pegadinha: "A pegadinha é a generalização 'todo spam é phishing' (A) e a inversão de spear phishing (D) — ambos opostos ao que o currículo afirma."
  },
  {
    id: "q-m3-32",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u1-t2-s1",
    assunto: "M3.1 E-mail — SPF, DKIM e DMARC contra spoofing",
    contexto: "Equipe de segurança configurando a autenticação de e-mail do domínio do órgão para combater a falsificação de remetente (spoofing).",
    enunciado: "Sobre SPF, DKIM e DMARC, assinale a alternativa que descreve corretamente as funções de cada um, conforme o currículo.",
    alternativas: [
      { letra: "A", texto: "SPF assina digitalmente a mensagem com criptografia simétrica; DKIM lista os servidores autorizados a enviar; DMARC criptografa o corpo do e-mail." },
      { letra: "B", texto: "SPF define quais servidores podem enviar e-mails para o domínio; DKIM assina digitalmente a mensagem para garantir autenticidade; DMARC define a política para falhas de SPF/DKIM (rejeitar, quarentenar, aceitar)." },
      { letra: "C", texto: "Basta o DMARC estar ativo; SPF e DKIM são desnecessários porque o DMARC já autentica o servidor remetente." },
      { letra: "D", texto: "DKIM usa criptografia simétrica e compartilha a chave privada com o destinatário para que ele verifique a mensagem." }
    ],
    gabarito: "B",
    justificativa: "SPF identifica servidores autorizados para o domínio; DKIM permite verificar a assinatura da mensagem; DMARC define políticas e relatórios baseados nos resultados e no alinhamento de SPF/DKIM. Esses mecanismos ajudam a reduzir spoofing de domínio, mas não garantem impedir todas as formas de falsificação. A alternativa B associa corretamente as funções centrais.",
    analise: {
      A: "INCORRETA. Erro conceitual: troca as funções — listar servidores é SPF (não DKIM), assinar é DKIM (não SPF), e DMARC define política de falhas, não 'criptografa o corpo'.",
      B: "CORRETA. É a única que associa cada protocolo à sua função conforme o currículo (SPF = servidores autorizados; DKIM = assinatura de autenticidade; DMARC = política para falhas).",
      C: "INCORRETA. Erro conceitual: invenção — o currículo apresenta SPF, DKIM e DMARC como técnicas complementares; não afirma que o DMARC torna os outros desnecessários.",
      D: "INCORRETA. Erro conceitual duplo: DKIM usa criptografia ASSIMÉTRICA (exercício do currículo), e nunca compartilha a chave privada — a verificação usa a chave pública publicada no domínio."
    },
    regra: "SPF = lista de servidores autorizados a enviar pelo domínio; DKIM = assinatura digital (criptografia assimétrica) de autenticidade; DMARC = política de tratamento das falhas de SPF/DKIM (rejeitar/quarentenar/aceitar).",
    pegadinha: "A pegadinha é a troca de funções (A) e o erro sobre DKIM como 'simétrica com chave privada compartilhada' (D) — a assinatura é assimétrica e a chave privada nunca sai do domínio."
  },
  {
    id: "q-m3-33",
    modulo: 3,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u2-t1-s1",
    assunto: "M3.2 Calendários — níveis de permissão",
    contexto: "Coordenador compartilha a agenda de uma sala de reuniões e precisa que um assistente possa alterar os eventos agendados sem assumir a propriedade do calendário.",
    enunciado: "Qual nível de permissão deve ser concedido ao assistente, conforme os tipos de permissão do currículo?",
    alternativas: [
      { letra: "A", texto: "Proprietário — concede controle total, incluindo a exclusão do calendário." },
      { letra: "B", texto: "Editor — permite modificar os eventos do calendário." },
      { letra: "C", texto: "Comentar — permite apenas comentar, sem modificar eventos." },
      { letra: "D", texto: "Somente visualização — permite apenas ver os eventos, sem modificá-los." }
    ],
    gabarito: "B",
    justificativa: "O currículo lista os tipos de permissão: 'proprietário (controle total), editor (pode modificar), comentar, somente visualização'. O cenário pede 'modificar eventos sem assumir a propriedade' — exatamente a definição de editor. O exercício do currículo é literal: 'Qual permissão permite modificar um evento?' com resposta B (Editor).",
    analise: {
      A: "INCORRETA. Erro conceitual: proprietário é controle TOTAL (inclui exclusão) — vai além do necessário e transfere a propriedade, que o cenário quer preservar.",
      B: "CORRETA. Editor é a permissão que 'pode modificar' eventos, conforme o currículo — atende ao cenário sem conceder propriedade.",
      C: "INCORRETA. Erro conceitual: 'comentar' permite apenas comentar, não modificar eventos — não atende ao requisito de alteração.",
      D: "INCORRETA. Erro conceitual: 'somente visualização' é leitura pura; o assistente não poderia alterar nada."
    },
    regra: "Permissões de calendário: proprietário (controle total) > editor (modifica) > comentar > somente visualização (leitura).",
    pegadinha: "A pegadinha é dar poder demais (Proprietário) ou de menos (Comentar/Visualização): o termo-chave do cenário é 'modificar sem assumir a propriedade' = Editor."
  },
  {
    id: "q-m3-34",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u2-t1-s1",
    assunto: "M3.2 Calendários — convites e fuso horário",
    contexto: "Organizador monta um convite de reunião com participantes localizados em três fusos horários diferentes.",
    enunciado: "Um convite de reunião pode conter participantes obrigatórios e opcionais, e os calendários com suporte a fuso horário convertem automaticamente o horário do evento para o fuso de cada participante.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'participantes obrigatórios e opcionais' e 'convertem automaticamente o horário do evento para o fuso de cada participante': coincidem com 'participantes (obrigatórios, opcionais)' e com o exemplo de aplicação 'o sistema converte automaticamente para o fuso de cada participante'.",
    justificativa: "O currículo lista entre os elementos do convite 'participantes (obrigatórios, opcionais)' e o exercício confirma '(C/E) Convites de reunião podem ter participantes obrigatórios e opcionais' → Certo. O exemplo de aplicação sobre fusos afirma: 'Usar calendários que suportam fuso horário ... O sistema converte automaticamente para o fuso de cada participante.' O item combina os dois pontos.",
    analise: {
      item: "Item VERDADEIRO. Participantes obrigatórios/opcionais e a conversão automática de fuso são afirmações diretas do currículo.",
      leituraIncorreta: "Leitura que induz ao erro: achar que cada participante precisa anotar manualmente o horário alheio — o currículo diz que a conversão é automática quando o calendário suporta fuso."
    },
    regra: "Convite = título, data/hora (com fuso), local/link, participantes obrigatórios e opcionais, pauta, anexos. Calendários com fuso convertem automaticamente por participante.",
    pegadinha: "Item simples por design; o risco é duvidar da conversão automática de fuso, que é justamente a solução do exemplo de aplicação do currículo."
  },
  {
    id: "q-m3-35",
    modulo: 3,
    formato: "mc",
    estilo: "fgv",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u2-t2-s1",
    assunto: "M3.2 Reuniões — Teams, Meet e Zoom (escolha por contexto)",
    contexto: "Órgão público que já adota o Microsoft 365 precisa escolher uma plataforma de reuniões integradas à suíte já contratada.",
    enunciado: "Qual plataforma é a mais adequada para esse órgão e qual a razão correta, conforme o currículo?",
    alternativas: [
      { letra: "A", texto: "Google Meet, porque é a única plataforma que funciona diretamente no navegador." },
      { letra: "B", texto: "Microsoft Teams, pela integração nativa com o Microsoft 365 (Outlook, SharePoint, OneNote etc.)." },
      { letra: "C", texto: "Zoom, porque é a única das três que oferece gravação da reunião." },
      { letra: "D", texto: "Google Meet, porque se destaca por webinars avançados e salas simultâneas (breakout rooms)." }
    ],
    gabarito: "B",
    justificativa: "O currículo afirma: 'Microsoft Teams: integrado ao Microsoft 365, ideal para organizações que já usam M365' e o exemplo de aplicação responde: 'Microsoft Teams — integração nativa com Outlook, SharePoint, OneNote e outros serviços M365.' A alternativa B reproduz essa razão. As demais atribuem a outras plataformas características que o currículo reserva ao Zoom (webinars/breakout) ou que são comuns a todas (gravação, navegador).",
    analise: {
      A: "INCORRETA. Erro conceitual: funcionar no navegador sem instalação é a característica do Meet, mas não é exclusivo (a escolha aqui é por integração com M365) — e a justificativa 'única' é falsa.",
      B: "CORRETA. Teams é a plataforma integrada ao Microsoft 365, conforme o currículo — atende exatamente ao cenário de órgão que já usa M365.",
      C: "INCORRETA. Erro conceitual: gravação é recurso COMUM às três ('Todos oferecem: compartilhamento de tela, gravação, chat, levantar mão, reações'); não é diferencial do Zoom.",
      D: "INCORRETA. Erro conceitual: webinars avançados e breakout rooms são destaque do ZOOM, não do Meet — troca de plataforma."
    },
    regra: "Teams = integração M365 / colaboração contínua; Meet = simplicidade, navegador (Google Workspace); Zoom = webinars, breakout rooms, grandes eventos. Gravação/compartilhamento/chat são comuns às três.",
    pegadinha: "A pegadinha é confundir diferenciais: 'webinars/breakout' é Zoom (não Meet), e 'gravação' é comum a todas — o critério do cenário é a integração com M365."
  },
  {
    id: "q-m3-36",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u2-t2-s1",
    assunto: "M3.2 Reuniões — diferenciais de Teams, Meet e Zoom",
    contexto: "Comparação de recursos para decidir qual plataforma adotar em três cenários distintos (colaboração contínua, simplicidade e grandes eventos).",
    enunciado: "O Google Meet é a plataforma que se destaca por recursos avançados de webinars e salas simultâneas (breakout rooms), enquanto o Zoom se diferencia por funcionar no navegador sem exigir instalação de software.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'Google Meet ... se destaca por ... webinars e salas simultâneas (breakout rooms)' e 'Zoom ... funciona no navegador sem exigir instalação': o currículo reserva breakout rooms/webinars ao ZOOM e o 'não requer instalação (navegador)' ao MEET — as atribuições estão trocadas.",
    justificativa: "O currículo define: 'Zoom: ... recursos avançados de webinars, salas simultâneas (breakout rooms)' e 'Google Meet: ... não requer instalação (navegador)'. O item inverte as duas características, atribuindo os diferenciais de forma cruzada.",
    analise: {
      item: "Item FALSO. As duas atribuições estão invertidas: breakout rooms/webinars são do Zoom; funcionamento no navegador sem instalação é do Meet.",
      leituraIncorreta: "Leitura que induz ao erro: memorizar 'Meet = simples/no navegador' e 'Zoom = recursos avançados' mas trocá-las ao responder; o exemplo 'erro' do currículo já corrige 'Google Meet requer instalação de software' = Errado."
    },
    regra: "Diferenciais: Meet = simplicidade/navegador (sem instalação); Zoom = webinars e breakout rooms; Teams = integração M365. Não inverter as atribuições.",
    pegadinha: "Item de duas metades trocadas: cada característica pertence à plataforma oposta — estilo CESPE que pune a meia-verdade por troca de sujeito."
  },
  {
    id: "q-m3-37",
    modulo: 3,
    formato: "mc",
    estilo: "fcc",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u4-t1-s2",
    assunto: "M3.2 Reuniões — lobby e controle de participantes",
    contexto: "Reunião sensível com participantes externos; o anfitrião quer controlar quem entra e impedir a ação de intrusos.",
    enunciado: "Sobre o controle de participantes em reuniões online, assinale a alternativa correta, conforme o currículo.",
    alternativas: [
      { letra: "A", texto: "Qualquer participante pode remover outro participante e aprovar a entrada pela sala de espera (lobby)." },
      { letra: "B", texto: "O lobby é a sala de espera em que os participantes aguardam a aprovação do anfitrião, e somente o anfitrião pode remover participantes." },
      { letra: "C", texto: "O anfitrião não pode bloquear o vídeo ou o microfone dos participantes durante a reunião." },
      { letra: "D", texto: "A entrada de participantes não pode ser impedida após o início da reunião." }
    ],
    gabarito: "B",
    justificativa: "O currículo define: 'Lobby (sala de espera): participantes aguardam aprovação do anfitrião antes de entrar' e 'Remover participante: anfitrião pode expulsar participantes'. O exercício do currículo confirma: 'Quem pode remover um participante de uma reunião?' → B (O anfitrião). A alternativa B reproduz essas definições.",
    analise: {
      A: "INCORRETA. Erro conceitual: remover participantes e aprovar pelo lobby são poderes do ANFITRIÃO, não de qualquer participante.",
      B: "CORRETA. Lobby = sala de espera com aprovação do anfitrião; remover participantes é função do anfitrião — conforme o currículo.",
      C: "INCORRETA. Erro conceitual: o currículo afirma que 'Bloquear vídeo/microfone: anfitrião pode desativar dispositivos de participantes' — o item nega um recurso existente.",
      D: "INCORRETA. Erro conceitual: o exemplo de aplicação orienta 'desativar a entrada de participantes após o início' — é possível impedir a entrada, o oposto do afirmado."
    },
    regra: "Controle do anfitrião: lobby (aprovação prévia), remover participantes, bloquear vídeo/microfone, controlar quem compartilha, senha, impedir entrada após início.",
    pegadinha: "A pegadinha é atribuir ao 'qualquer participante' (A) poderes exclusivos do anfitrião; C e D negam recursos que o currículo lista explicitamente."
  },
  {
    id: "q-m3-38",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "avancado",
    topico: "m3-u4-t3-s3",
    assunto: "M3.2 Reuniões — gravação, proteção e consentimento",
    contexto: "Política interna de reuniões online do órgão, que grava sessões com participação de servidores e cidadãos.",
    enunciado: "O anfitrião pode gravar a reunião (vídeo, áudio e chat) e combinar medidas de proteção — senha da reunião, lobby e bloqueio do vídeo/microfone dos participantes —, mas a gravação de comunicações com dados pessoais pode exigir o consentimento dos participantes, conforme a legislação aplicável.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'O anfitrião pode gravar a reunião (vídeo, áudio e chat)' e 'pode combinar medidas de proteção — senha, lobby, bloqueio de vídeo/microfone' e 'a gravação ... com dados pessoais pode exigir o consentimento': todos coincidem com o conteúdo e com o exemplo 'erro' do currículo.",
    justificativa: "O currículo afirma: 'Gravação: anfitrião pode gravar a reunião (vídeo, áudio, chat)' e lista medidas de proteção (senha, lobby, restringir compartilhamento, bloquear vídeo/microfone). O exemplo 'erro' corrige a ideia de que 'a gravação não requer consentimento': 'Depende da legislação. No Brasil, a LGPD e o Marco Civil podem exigir consentimento para gravação de comunicações. Sempre informar os participantes e obter consentimento quando aplicável.' A menção à legislação é genérica, como permite o currículo.",
    analise: {
      item: "Item VERDADEIRO. Gravação pelo anfitrião + medidas de proteção + a ressalva de que a gravação com dados pessoais pode exigir consentimento são afirmações do currículo.",
      leituraIncorreta: "Leitura que induz ao erro: crer que 'o anfitrião pode gravar' implica 'gravar sem jamais informar' — o exemplo 'erro' do currículo corrige que a LGPD/Marco Civil podem exigir consentimento."
    },
    regra: "Anfitrião grava (vídeo/áudio/chat) e aplica proteções (senha, lobby, bloqueio); gravação com dados pessoais pode exigir consentimento (LGPD/Marco Civil) — informar sempre os participantes.",
    pegadinha: "A armadilha é o absolutismo 'o anfitrião decide tudo sobre a gravação': a competência técnica de gravar não elimina a obrigação de consentimento quando há dados pessoais.",
    fonte: "Currículo M3, unidade 4, tópico 3; Lei nº 13.709/2018 (LGPD), arts. 6º e 46.",
  },
  {
    id: "q-m3-39",
    modulo: 3,
    formato: "mc",
    estilo: "vunesp",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u4-t3-s1",
    assunto: "M3.2 Reuniões — elementos de uma política de gravação",
    contexto: "Órgão está redigindo uma política de gravação de reuniões online e precisa separar o que é essencial do que é acessório.",
    enunciado: "Dentre os elementos abaixo, assinale aquele que NÃO é essencial em uma política de gravação, conforme o currículo.",
    alternativas: [
      { letra: "A", texto: "Prazo de retenção das gravações." },
      { letra: "B", texto: "Proteção das gravações sensíveis por criptografia." },
      { letra: "C", texto: "Número máximo de participantes por reunião." },
      { letra: "D", texto: "Consentimento/informação dos participantes sobre a gravação." }
    ],
    gabarito: "C",
    justificativa: "O currículo lista os elementos de uma política de gravação: 'quando e como gravar, quem pode gravar, onde armazenar, quanto tempo manter' e, no exemplo, 'quando gravar, quem pode gravar, onde armazenar, prazo de retenção, quem tem acesso, regras de compartilhamento, proteção (criptografia), e procedimento para exclusão', além do consentimento. O exercício do currículo é literal: 'Qual elemento NÃO é essencial em uma política de gravação?' → C (Número máximo de participantes).",
    analise: {
      A: "INCORRETA (para o enunciado). Erro conceitual: prazo de retenção ('quanto tempo manter') É essencial — está na lista do currículo.",
      B: "INCORRETA (para o enunciado). Erro conceitual: proteção por criptografia ('criptografar gravações sensíveis') É essencial — consta na política.",
      C: "CORRETA. Número máximo de participantes não integra a política de gravação — é o elemento NÃO essencial, conforme o exercício do currículo.",
      D: "INCORRETA (para o enunciado). Erro conceitual: consentimento/informação dos participantes É essencial quando há dados pessoais — o currículo o exige."
    },
    regra: "Política de gravação: quando gravar, quem pode gravar, onde armazenar, prazo de retenção, quem acessa, compartilhamento, criptografia, exclusão e consentimento. Limite de participantes não é elemento da política.",
    pegadinha: "A pegadinha é a inversão do comando ('NÃO é essencial'): três alternativas são itens reais da política; só o número máximo de participantes é alheio a ela."
  },
  {
    id: "q-m3-40",
    modulo: 3,
    formato: "ce",
    estilo: "cespe",
    origem: "autoral",
    nivel: "basico",
    topico: "m3-u4-t3-s2",
    assunto: "M3.2 Reuniões — gravação com dados pessoais e proteção",
    contexto: "Reunião gravada pelo órgão contém dados pessoais dos participantes (nomes, falas, eventual identificação de cargos).",
    enunciado: "Quando uma gravação de reunião contém dados pessoais dos participantes, a política deve prever consentimento ou informação dos participantes, definição de finalidade, prazo de retenção e segurança no armazenamento, assegurando aos titulares o direito de acesso e exclusão.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é a lista 'consentimento/informação, finalidade, prazo de retenção, segurança no armazenamento, direito de acesso e exclusão': coincide com o exemplo de aplicação do currículo sobre gravação com dados pessoais.",
    justificativa: "O exemplo de aplicação do currículo responde, para 'reunião gravada contém dados pessoais': 'Consentimento dos participantes para gravação, definição de finalidade, prazo de retenção, segurança no armazenamento (criptografia), e direito de acesso e exclusão pelos titulares.' O item reproduz esses elementos. A menção à proteção de dados é genérica, sem número de artigo.",
    analise: {
      item: "Item VERDADEIRO. Consentimento/informação, finalidade, retenção, segurança (criptografia) e direitos de acesso/exclusão são exatamente os elementos do exemplo de aplicação.",
      leituraIncorreta: "Leitura que induz ao erro: tratar a gravação como mero arquivo interno sem dados pessoais — contendo dados pessoais, ela cai nas práticas de proteção e nos direitos do titular descritas no currículo."
    },
    regra: "Gravação com dados pessoais exige: consentimento/informação, finalidade, prazo de retenção, segurança (criptografia) e respeito aos direitos de acesso e exclusão dos titulares.",
    pegadinha: "Item simples por design; o risco é esquecer que uma gravação de reunião é tratamento de dados pessoais e, como tal, carrega finalidade, retenção e direitos do titular."
  },,
  {
    id: "q-m1-41",
    modulo: 1,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-2-topico-5",
    assunto: "M1.2 Word — cabeçalhos e rodapés",
    contexto: "Um relatório deve exibir cabeçalho e número de página, exceto na capa; as páginas seguintes devem manter esses elementos.",
    enunciado: "Qual recurso atende diretamente ao requisito?",
    alternativas: [
      { letra: "A", texto: "Aplicar negrito ao título da capa." },
      { letra: "B", texto: "Ativar Primeira Página Diferente nas configurações de cabeçalho e rodapé." },
      { letra: "C", texto: "Inserir uma tabela vazia na capa." },
      { letra: "D", texto: "Converter o documento em texto simples." },
      { letra: "E", texto: "Desativar o cabeçalho em todo o documento." }
    ],
    gabarito: "B",
    justificativa: "A opção Primeira Página Diferente permite ocultar ou personalizar cabeçalho e rodapé da capa sem removê-los das páginas seguintes. Uma quebra de seção é útil quando partes do documento precisam de layouts ou numerações diferentes.",
    analise: {
      A: "INCORRETA. Negrito muda a aparência do texto, não a exibição do cabeçalho.",
      B: "CORRETA. Permite configurar a primeira página separadamente, preservando os elementos nas seguintes.",
      C: "INCORRETA. Tabelas não controlam cabeçalhos e rodapés.",
      D: "INCORRETA. Texto simples remove formatação e não atende à paginação.",
      E: "INCORRETA. Isso remove o elemento também das páginas que precisam exibi-lo."
    },
    regra: "Cabeçalhos e rodapés são controlados por opções de layout e, quando necessário, por seções.",
    pegadinha: "Não confundir Primeira Página Diferente com remover o cabeçalho do documento inteiro.",
    fonte: "Currículo M1, unidade 2, tópico 5 — cabeçalhos, rodapés, notas e numeração."
  },
  {
    id: "q-m1-42",
    modulo: 1,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-3-topico-1",
    assunto: "M1.3 Excel — células, intervalos e tabelas",
    contexto: "Uma lista de solicitações recebe novas linhas semanalmente. A coluna calculada deve acompanhar os novos registros e os dados precisam de cabeçalhos e filtros.",
    enunciado: "Qual recurso é mais adequado para estruturar a lista?",
    alternativas: [
      { letra: "A", texto: "Colocar cada registro em uma planilha diferente." },
      { letra: "B", texto: "Mesclar todas as células da primeira linha." },
      { letra: "C", texto: "Formatar o intervalo como Tabela do Excel, com cabeçalhos." },
      { letra: "D", texto: "Converter os dados em imagens." },
      { letra: "E", texto: "Alinhar valores com espaços." }
    ],
    gabarito: "C",
    justificativa: "Tabelas do Excel estruturam dados, fornecem filtros e podem expandir-se com novas linhas; colunas calculadas e referências estruturadas facilitam a manutenção.",
    analise: {
      A: "INCORRETA. Isso dificulta análise, filtragem e consolidação.",
      B: "INCORRETA. Células mescladas prejudicam a estrutura tabular.",
      C: "CORRETA. Tabelas estruturam listas, expandem-se com novos registros e facilitam filtros e fórmulas.",
      D: "INCORRETA. Imagens não preservam dados editáveis e estruturados.",
      E: "INCORRETA. Espaços não substituem células, colunas ou referências."
    },
    regra: "Células formam intervalos; Tabelas acrescentam estrutura e recursos a listas de dados.",
    pegadinha: "Aplicar cores não é o mesmo que converter um intervalo em Tabela.",
    fonte: "Currículo M1, unidade 3, tópico 1 — pasta de trabalho, planilhas, células, intervalos e tabelas."
  },
  {
    id: "q-m1-43",
    modulo: 1,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "modulo-1-unidade-3-topico-5",
    assunto: "M1.3 Excel — filtros, validação e formatação condicional",
    contexto: "Uma planilha deve exibir apenas inscrições pendentes, restringir Status a uma lista aprovada e destacar prazos vencidos.",
    enunciado: "Qual combinação de recursos atende aos requisitos?",
    alternativas: [
      { letra: "A", texto: "Proteger a pasta e ocultar todas as linhas." },
      { letra: "B", texto: "Mesclar células, congelar painéis e usar negrito." },
      { letra: "C", texto: "Classificar, inserir comentário e mudar orientação da página." },
      { letra: "D", texto: "Filtro, Validação de Dados e Formatação Condicional." },
      { letra: "E", texto: "Usar apenas um gráfico de pizza." }
    ],
    gabarito: "D",
    justificativa: "Os três recursos atendem funções diferentes: filtro para exibição, validação para entradas permitidas e formatação condicional para destaque automático.",
    analise: {
      A: "INCORRETA. Ocultar tudo impede a análise e não valida os dados.",
      B: "INCORRETA. Esses recursos não implementam os três requisitos.",
      C: "INCORRETA. Classificação ordena dados, mas os outros recursos não validam entradas nem destacam vencimentos.",
      D: "CORRETA. Filtro limita linhas exibidas; validação restringe entradas; formatação condicional destaca valores por regra.",
      E: "INCORRETA. Um gráfico não substitui filtros, validação e regras de formatação."
    },
    regra: "Filtro seleciona o que fica visível; classificação muda a ordem; validação controla entradas.",
    pegadinha: "Não confundir classificação com filtragem.",
    fonte: "Currículo M1, unidade 3, tópico 5 — classificação, filtros, validação, formatação condicional e visualização."
  },
  {
    id: "q-m2-41",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u2-t1-s1",
    assunto: "M2.2 Modelo OSI — funções das camadas",
    contexto: "A equipe precisa distinguir endereçamento lógico, entrega fim a fim e transmissão física.",
    enunciado: "Qual associação está correta?",
    alternativas: [
      { letra: "A", texto: "Enlace: endereços IP públicos; Transporte: resolução de nomes." },
      { letra: "B", texto: "Física: endereços IP; Rede: conectores; Transporte: nomes DNS." },
      { letra: "C", texto: "Aplicação: encaminhamento de quadros; Enlace: aplicações do usuário." },
      { letra: "D", texto: "Sessão: sinais ópticos; Apresentação: rotas IP." },
      { letra: "E", texto: "Rede: endereçamento lógico/roteamento; Transporte: comunicação fim a fim; Física: transmissão de bits." }
    ],
    gabarito: "E",
    justificativa: "No OSI, Rede trata de endereçamento lógico e encaminhamento; Transporte oferece comunicação entre processos; Física transmite bits pelo meio.",
    analise: {
      A: "INCORRETA. IP pertence à camada Rede e DNS à Aplicação.",
      B: "INCORRETA. Troca funções de Rede, Física e Aplicação.",
      C: "INCORRETA. Quadros são tratados em Enlace; aplicações ficam na camada Aplicação.",
      D: "INCORRETA. Sinais são da camada Física; rotas são da camada Rede.",
      E: "CORRETA. Essas funções correspondem às camadas Rede, Transporte e Física."
    },
    regra: "As sete camadas são Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação.",
    pegadinha: "Não confundir endereço IP (Rede) com endereço MAC/quadros (Enlace).",
    fonte: "Currículo M2, unidade 2, tópico 1 — modelo OSI; padrões de rede."
  },
  {
    id: "q-m2-42",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u2-t2-s1",
    assunto: "M2.2 Modelo TCP/IP — quatro camadas",
    contexto: "Uma equipe documenta uma arquitetura de rede usando o modelo TCP/IP de quatro camadas.",
    enunciado: "Qual lista corresponde à nomenclatura usual?",
    alternativas: [
      { letra: "A", texto: "Acesso à rede, Internet, Transporte e Aplicação." },
      { letra: "B", texto: "Física, Enlace, Sessão e Apresentação." },
      { letra: "C", texto: "Internet, Sessão, Apresentação e Física." },
      { letra: "D", texto: "Aplicação, Banco de Dados, Segurança e Hardware." },
      { letra: "E", texto: "Transporte, Roteamento, Criptografia e Interface Gráfica." }
    ],
    gabarito: "A",
    justificativa: "A representação didática usual do TCP/IP agrupa protocolos em Acesso à Rede, Internet, Transporte e Aplicação.",
    analise: {
      A: "CORRETA. Essa é a representação usual de quatro camadas do TCP/IP.",
      B: "INCORRETA. Mistura camadas OSI e omite camadas TCP/IP.",
      C: "INCORRETA. Sessão e Apresentação não são camadas independentes no modelo TCP/IP de quatro camadas.",
      D: "INCORRETA. Não são as quatro camadas do TCP/IP.",
      E: "INCORRETA. São funções ou componentes, não a lista de camadas."
    },
    regra: "Modelos diferentes agrupam funções de modo diferente; não há correspondência um-para-um perfeita entre todas as camadas OSI e TCP/IP.",
    pegadinha: "Não misturar nomes de camadas OSI com a lista de quatro camadas TCP/IP.",
    fonte: "Currículo M2, unidade 2, tópico 2 — modelo TCP/IP e protocolos associados."
  },
  {
    id: "q-m2-43",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u2-t3-s1",
    assunto: "M2.2 Comunicação cliente-servidor — HTTPS sobre TCP",
    contexto: "Considere HTTPS sobre TCP, sem HTTP/3/QUIC. O navegador acessará um domínio que não está no cache DNS.",
    enunciado: "Qual sequência didática descreve melhor o fluxo antes de receber o conteúdo HTTP?",
    alternativas: [
      { letra: "A", texto: "Enviar HTTP antes de resolver o nome e estabelecer transporte." },
      { letra: "B", texto: "Resolver o nome via DNS, estabelecer TCP, negociar TLS e enviar a requisição HTTP." },
      { letra: "C", texto: "Executar DHCP para cada pacote e usar FTP para abrir a página." },
      { letra: "D", texto: "Negociar TLS sem identificar/endereço do servidor e dispensar transporte." },
      { letra: "E", texto: "Usar ARP para resolver o nome público na Internet inteira." }
    ],
    gabarito: "B",
    justificativa: "No cenário especificado, DNS resolve o nome, TCP estabelece transporte, TLS protege a conexão e HTTP troca requisições e respostas. HTTP/3 usa QUIC, por isso foi excluído do enunciado.",
    analise: {
      A: "INCORRETA. A requisição precisa de destino e conexão apropriados.",
      B: "CORRETA. É o fluxo usual de HTTPS sobre TCP no cenário delimitado.",
      C: "INCORRETA. DHCP configura a rede; FTP não é o protocolo de acesso à página.",
      D: "INCORRETA. O cenário requer transporte e identificação do destino.",
      E: "INCORRETA. ARP resolve endereços de enlace IPv4 no domínio local, não nomes DNS."
    },
    regra: "DNS resolve nomes; TCP estabelece transporte; TLS protege a sessão; HTTP define requisições e respostas.",
    pegadinha: "A sequência depende da versão: HTTP/3 usa QUIC, não TCP.",
    fonte: "Currículo M2, unidade 2, tópico 3; RFCs HTTP/TLS cadastradas em references.js."
  },
  {
    id: "q-m2-44",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u3-t1-s1",
    assunto: "M2.3 IPv4, IPv6, TCP e UDP",
    contexto: "Um aplicativo precisa distinguir protocolos de endereçamento de rede dos protocolos de transporte.",
    enunciado: "Qual afirmação está correta?",
    alternativas: [
      { letra: "A", texto: "UDP garante entrega ordenada; TCP não mantém estado de conexão." },
      { letra: "B", texto: "IPv6 é transporte confiável e TCP é um endereço IP." },
      { letra: "C", texto: "IPv4/IPv6 tratam de endereçamento e encaminhamento; TCP/UDP são protocolos de transporte com características distintas." },
      { letra: "D", texto: "IPv4 e IPv6 são protocolos de aplicação para consultar DNS." },
      { letra: "E", texto: "TCP e UDP definem máscaras e endereços de broadcast." }
    ],
    gabarito: "C",
    justificativa: "IPv4/IPv6 endereçam e encaminham pacotes; TCP fornece transporte orientado à conexão com mecanismos de confiabilidade; UDP transporta datagramas sem garantir entrega ou ordenação.",
    analise: {
      A: "INCORRETA. TCP fornece confiabilidade/ordenação; UDP não garante isso por padrão.",
      B: "INCORRETA. IPv6 não é transporte e TCP não é endereço IP.",
      C: "CORRETA. Separa corretamente os protocolos de Internet dos protocolos de transporte.",
      D: "INCORRETA. DNS é protocolo de aplicação; IP opera em nível de rede.",
      E: "INCORRETA. Esses são conceitos de endereçamento, não funções de transporte."
    },
    regra: "IP cuida do endereçamento/encaminhamento; TCP e UDP transportam dados de aplicações.",
    pegadinha: "Não afirmar que UDP é sempre melhor ou mais rápido; a escolha depende da aplicação.",
    fonte: "Currículo M2, unidade 3, tópico 1; RFC 791 e RFC 793."
  },
  {
    id: "q-m2-45",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u3-t2-s1",
    assunto: "M2.3 HTTP, HTTPS, DNS e DHCP",
    contexto: "Um notebook recebe configuração de rede automaticamente. Ao abrir um site por nome de domínio, o navegador precisa encontrar o servidor.",
    enunciado: "Qual associação de funções está correta?",
    alternativas: [
      { letra: "A", texto: "DHCP resolve nomes públicos; DNS negocia certificados; HTTPS distribui IPs." },
      { letra: "B", texto: "DNS atribui o IP local; DHCP traduz nomes; HTTPS substitui o roteamento." },
      { letra: "C", texto: "HTTPS atribui IP; DHCP criptografa páginas; DNS transfere arquivos." },
      { letra: "D", texto: "DHCP configura parâmetros de rede; DNS resolve nomes; HTTPS protege a comunicação web por TLS." },
      { letra: "E", texto: "DNS e DHCP são protocolos de transporte que substituem TCP e UDP." }
    ],
    gabarito: "D",
    justificativa: "DHCP distribui parâmetros como endereço IP e gateway; DNS resolve nomes; HTTPS é HTTP protegido por TLS.",
    analise: {
      A: "INCORRETA. As funções estão trocadas.",
      B: "INCORRETA. Troca as funções dos protocolos.",
      C: "INCORRETA. Nenhum desses protocolos tem as funções descritas.",
      D: "CORRETA. Cada protocolo está associado à função adequada.",
      E: "INCORRETA. DNS e DHCP são protocolos de aplicação."
    },
    regra: "Obter IP por DHCP é diferente de resolver o nome do servidor por DNS.",
    pegadinha: "Não confundir configuração de rede com resolução de nomes.",
    fonte: "Currículo M2, unidade 3, tópico 2; referências DNS/DHCP."
  },
  {
    id: "q-m2-46",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u3-t3-s1",
    assunto: "M2.3 FTP, FTPS, SFTP, SSH e ICMP",
    contexto: "Uma equipe precisa transferir arquivos entre servidores por um canal seguro e já utiliza SSH.",
    enunciado: "Qual protocolo usa a infraestrutura SSH para transferir arquivos?",
    alternativas: [
      { letra: "A", texto: "SMTP." },
      { letra: "B", texto: "FTP sem criptografia." },
      { letra: "C", texto: "ICMP Echo." },
      { letra: "D", texto: "DHCP." },
      { letra: "E", texto: "SFTP." }
    ],
    gabarito: "E",
    justificativa: "SFTP é um protocolo de transferência de arquivos sobre SSH. FTPS protege FTP com TLS; são tecnologias diferentes.",
    analise: {
      A: "INCORRETA. SMTP transporta mensagens de e-mail.",
      B: "INCORRETA. FTP simples não protege conteúdo e credenciais por padrão.",
      C: "INCORRETA. ICMP Echo é usado em diagnóstico de conectividade.",
      D: "INCORRETA. DHCP distribui parâmetros de configuração.",
      E: "CORRETA. SFTP opera sobre SSH."
    },
    regra: "SFTP usa SSH; FTPS usa TLS para proteger FTP.",
    pegadinha: "SFTP não é apenas outro nome para FTPS.",
    fonte: "Currículo M2, unidade 3, tópico 3; referências SSH/FTP."
  },
  {
    id: "q-m2-47",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u3-t4-s3",
    assunto: "M2.3 NAT/PAT, proxy e VPN",
    contexto: "Funcionários precisam acessar a rede interna remotamente por um túnel protegido e autenticado.",
    enunciado: "Qual tecnologia atende diretamente ao requisito?",
    alternativas: [
      { letra: "A", texto: "VPN configurada com autenticação e criptografia adequadas." },
      { letra: "B", texto: "NAT, que por si só criptografa todo o tráfego." },
      { letra: "C", texto: "Proxy DNS, que substitui autenticação." },
      { letra: "D", texto: "PAT, que garante confidencialidade de ponta a ponta." },
      { letra: "E", texto: "ICMP, que cria um túnel de aplicação autenticado." }
    ],
    gabarito: "A",
    justificativa: "VPN é a tecnologia indicada para conectividade remota protegida, com autenticação, criptografia e controles adequados.",
    analise: {
      A: "CORRETA. Uma VPN pode criar conectividade remota protegida quando configurada corretamente.",
      B: "INCORRETA. NAT traduz endereços e não é mecanismo de criptografia.",
      C: "INCORRETA. Proxy DNS não substitui autenticação e controle de acesso.",
      D: "INCORRETA. PAT traduz portas e endereços, sem garantir confidencialidade.",
      E: "INCORRETA. ICMP não é protocolo de túnel autenticado."
    },
    regra: "NAT/PAT traduzem endereços/portas; proxy intermedeia solicitações; VPN cria conectividade lógica protegida.",
    pegadinha: "NAT não é sinônimo de firewall nem garante segurança por si só.",
    fonte: "Currículo M2, unidade 3, tópico 4; referências de redes."
  },
  {
    id: "q-m2-48",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u4-t1-s1",
    assunto: "M2.4 Estrutura IPv4 — endereços privados",
    contexto: "Um computador usa o endereço 192.168.10.25/24.",
    enunciado: "Qual afirmação é correta?",
    alternativas: [
      { letra: "A", texto: "É um endereço loopback." },
      { letra: "B", texto: "Está no espaço IPv4 privado e não é, por si só, um endereço público roteável na Internet." },
      { letra: "C", texto: "É necessariamente multicast." },
      { letra: "D", texto: "Todo endereço iniciado por 192 é privado." },
      { letra: "E", texto: "Um endereço privado nunca pode acessar a Internet." }
    ],
    gabarito: "B",
    justificativa: "192.168.10.25 pertence ao bloco privado 192.168.0.0/16; o acesso externo depende da arquitetura de borda.",
    analise: {
      A: "INCORRETA. Loopback IPv4 usa 127.0.0.0/8.",
      B: "CORRETA. 192.168.0.0/16 é um bloco privado.",
      C: "INCORRETA. Multicast IPv4 usa 224.0.0.0/4.",
      D: "INCORRETA. A classificação depende do bloco completo, não apenas do primeiro número.",
      E: "INCORRETA. Redes privadas podem acessar por gateways/NAT ou outras arquiteturas."
    },
    regra: "Blocos privados IPv4: 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16.",
    pegadinha: "Não classificar o endereço apenas pelo primeiro octeto.",
    fonte: "Currículo M2, unidade 4, tópico 1; RFC 1918."
  },
  {
    id: "q-m2-49",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u4-t3-s1",
    assunto: "M2.4 VLSM e sumarização de rotas",
    contexto: "Uma organização tem departamentos com diferentes necessidades de hosts e quer reduzir a quantidade de rotas anunciadas.",
    enunciado: "Qual alternativa diferencia VLSM de sumarização?",
    alternativas: [
      { letra: "A", texto: "VLSM exige máscaras idênticas; sumarização cria um endereço por host." },
      { letra: "B", texto: "VLSM criptografa pacotes; sumarização converte IPv4 em IPv6." },
      { letra: "C", texto: "VLSM usa prefixos de tamanhos diferentes conforme a necessidade; sumarização agrega redes contíguas quando os limites permitem." },
      { letra: "D", texto: "VLSM é transporte; sumarização é DNS." },
      { letra: "E", texto: "Ambos são nomes diferentes para DHCP." }
    ],
    gabarito: "C",
    justificativa: "VLSM permite dimensionar sub-redes com prefixos variados; sumarização representa redes contíguas por um prefixo agregado quando o alinhamento permite.",
    analise: {
      A: "INCORRETA. VLSM permite prefixos variáveis.",
      B: "INCORRETA. Não são funções de criptografia nem conversão de versões IP.",
      C: "CORRETA. Distingue dimensionamento de sub-redes e agregação de rotas.",
      D: "INCORRETA. São conceitos de endereçamento e roteamento.",
      E: "INCORRETA. DHCP configura interfaces, não substitui VLSM ou sumarização."
    },
    regra: "VLSM melhora a alocação; sumarização reduz a quantidade de rotas.",
    pegadinha: "Não se pode sumarizar arbitrariamente redes não contíguas ou desalinhadas.",
    fonte: "Currículo M2, unidade 4, tópico 3 — VLSM e sumarização."
  },
  {
    id: "q-m2-50",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u4-t4-s1",
    assunto: "M2.4 IPv6 — abreviação",
    contexto: "Um analista precisa abreviar 2001:0db8:0000:0000:0000:ff00:0042:8329.",
    enunciado: "Qual representação é válida e preserva o endereço?",
    alternativas: [
      { letra: "A", texto: "2001:db8:ff00:42:8329" },
      { letra: "B", texto: "2001:db8:::ff00:42:8329" },
      { letra: "C", texto: "2001:db8::ff00::42:8329" },
      { letra: "D", texto: "2001:db8::ff00:42:8329" },
      { letra: "E", texto: "2001:0db8:0000:0000:0000:ff00:0042:8329:0000" }
    ],
    gabarito: "D",
    justificativa: "Zeros à esquerda podem ser removidos e uma sequência contínua de hextetos zero pode ser substituída por ::, usada no máximo uma vez.",
    analise: {
      A: "INCORRETA. Omitir hextetos sem :: altera o endereço.",
      B: "INCORRETA. Três dois-pontos consecutivos não são a forma válida de compressão.",
      C: "INCORRETA. :: aparece duas vezes e torna ambíguo o número de hextetos omitidos.",
      D: "CORRETA. Remove zeros à esquerda e comprime uma sequência de hextetos zero com ::.",
      E: "INCORRETA. Adiciona um hexteto e excede a estrutura de oito hextetos."
    },
    regra: "IPv6 usa oito hextetos; :: comprime uma sequência de hextetos zero.",
    pegadinha: "Não usar :: duas vezes no mesmo endereço.",
    fonte: "Currículo M2, unidade 4, tópico 4; RFC 4291 e RFC 5952."
  },
  {
    id: "q-m2-51",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u5-t1-s1",
    assunto: "M2.5 ping e traceroute",
    contexto: "Um usuário relata lentidão e suspeita de falha em algum salto entre origem e destino.",
    enunciado: "Qual alternativa diferencia ping de traceroute/tracert?",
    alternativas: [
      { letra: "A", texto: "Ambos sempre funcionam mesmo quando mensagens de controle são filtradas." },
      { letra: "B", texto: "Ping lista todas as rotas da Internet; traceroute altera DNS." },
      { letra: "C", texto: "Ping configura IP; traceroute distribui endereços DHCP." },
      { letra: "D", texto: "Ping criptografa tráfego; traceroute instala certificados TLS." },
      { letra: "E", texto: "Ping testa alcance e tempos de resposta; traceroute/tracert tenta revelar os saltos do caminho." }
    ],
    gabarito: "E",
    justificativa: "Ping ajuda a avaliar alcance e tempo de resposta; traceroute/tracert infere saltos do caminho. Filtragem pode limitar a saída.",
    analise: {
      A: "INCORRETA. Filtros e ausência de respostas podem limitar resultados.",
      B: "INCORRETA. Nenhum comando faz essas ações.",
      C: "INCORRETA. Configuração IP e DHCP são funções distintas.",
      D: "INCORRETA. Esses comandos não executam essas funções.",
      E: "CORRETA. Resume as funções diagnósticas principais."
    },
    regra: "Usar ferramentas de diagnóstico conforme o sintoma e interpretar respostas com cautela.",
    pegadinha: "A ausência de resposta de um salto não prova que o roteador esteja fora de serviço.",
    fonte: "Currículo M2, unidade 5, tópico 1 — ping e traceroute/tracert."
  },
  {
    id: "q-m2-52",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u5-t2-s1",
    assunto: "M2.5 ipconfig e comandos de configuração",
    contexto: "Em Windows, o técnico precisa conferir endereço IP, máscara, gateway e DNS recebidos pela interface.",
    enunciado: "Qual comando exibe diretamente esses parâmetros em detalhe?",
    alternativas: [
      { letra: "A", texto: "ipconfig /all." },
      { letra: "B", texto: "nslookup." },
      { letra: "C", texto: "tracert." },
      { letra: "D", texto: "ping -t." },
      { letra: "E", texto: "net use." }
    ],
    gabarito: "A",
    justificativa: "ipconfig /all exibe a configuração detalhada das interfaces, incluindo endereço, máscara, gateway e servidores DNS quando configurados.",
    analise: {
      A: "CORRETA. Mostra informações detalhadas da configuração IP no Windows.",
      B: "INCORRETA. Consulta registros/resolução DNS.",
      C: "INCORRETA. Investiga o caminho até um destino.",
      D: "INCORRETA. Testa alcance e tempos de resposta de forma contínua.",
      E: "INCORRETA. Gerencia conexões com recursos compartilhados."
    },
    regra: "Escolher a ferramenta conforme o sintoma: configuração, DNS, alcance ou rota.",
    pegadinha: "Não usar nslookup para verificar máscara ou gateway local.",
    fonte: "Currículo M2, unidade 5, tópico 2 — comandos de configuração e estado."
  },
  {
    id: "q-m2-53",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u5-t3-s1",
    assunto: "M2.5 nslookup e dig",
    contexto: "O acesso por IP funciona, mas é necessário confirmar se api.exemplo.gov.br resolve para o endereço esperado.",
    enunciado: "Qual ferramenta consulta registros DNS desse nome?",
    alternativas: [
      { letra: "A", texto: "ipconfig /release." },
      { letra: "B", texto: "nslookup ou dig." },
      { letra: "C", texto: "traceroute sem destino." },
      { letra: "D", texto: "chmod." },
      { letra: "E", texto: "tasklist." }
    ],
    gabarito: "B",
    justificativa: "nslookup e dig permitem consultar DNS e inspecionar respostas; o resultado ajuda a distinguir problemas de nome, cache, resolvedor ou registro.",
    analise: {
      A: "INCORRETA. Libera a configuração DHCP no Windows.",
      B: "CORRETA. Ambas consultam servidores DNS e mostram respostas de resolução.",
      C: "INCORRETA. Não consulta registros DNS diretamente.",
      D: "INCORRETA. Altera permissões em sistemas Unix-like.",
      E: "INCORRETA. Lista processos no Windows."
    },
    regra: "Usar nslookup/dig para testar resolução e consultar registros DNS.",
    pegadinha: "Falha de resolução não prova que o servidor esteja indisponível pelo IP.",
    fonte: "Currículo M2, unidade 5, tópico 3 — nslookup e dig."
  },
  {
    id: "q-m2-54",
    modulo: 2,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m2-u5-t4-s1",
    assunto: "M2.5 Diagnóstico por camadas",
    contexto: "O usuário acessa um servidor pelo endereço IP, mas falha ao usar o nome DNS. Outros serviços de rede continuam funcionando.",
    enunciado: "Qual hipótese deve ser investigada primeiro?",
    alternativas: [
      { letra: "A", texto: "Ausência total de conectividade IP." },
      { letra: "B", texto: "Falha total do cabo físico." },
      { letra: "C", texto: "Resolução DNS, comparando a consulta do nome com o endereço esperado." },
      { letra: "D", texto: "Falha obrigatória de DHCP em todos os dispositivos." },
      { letra: "E", texto: "Necessidade de substituir TCP por FTP." }
    ],
    gabarito: "C",
    justificativa: "O acesso por IP demonstra conectividade; a falha específica por nome direciona a investigação para DNS, cache e configuração do resolvedor, sem excluir outras causas.",
    analise: {
      A: "INCORRETA. O servidor é acessível por IP.",
      B: "INCORRETA. O acesso por IP indica alguma conectividade funcional.",
      C: "CORRETA. A diferença entre acesso por IP e por nome aponta inicialmente para DNS.",
      D: "INCORRETA. O sintoma não prova falha de DHCP na rede.",
      E: "INCORRETA. FTP não corrige resolução de nomes."
    },
    regra: "Diagnosticar por camadas e comparar sintomas antes de concluir a causa.",
    pegadinha: "O primeiro sintoma orienta a hipótese, mas não é prova definitiva.",
    fonte: "Currículo M2, unidade 5, tópico 4 — diagnóstico por camadas e cenários simulados."
  },
  {
    id: "q-m3-41",
    modulo: 3,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u3-t1-s1",
    assunto: "M3.3 Netiqueta profissional",
    contexto: "Uma equipe distribuída usa e-mail e chat para coordenar tarefas com prazos curtos.",
    enunciado: "Qual comportamento demonstra netiqueta profissional?",
    alternativas: [
      { letra: "A", texto: "Usar ironia e abreviações ambíguas." },
      { letra: "B", texto: "Escrever todas as mensagens em maiúsculas para indicar urgência." },
      { letra: "C", texto: "Encaminhar todas as conversas para todos os contatos." },
      { letra: "D", texto: "Usar assunto claro, linguagem respeitosa, contexto suficiente e canal adequado; evitar responder a todos sem necessidade." },
      { letra: "E", texto: "Enviar decisões por canal pessoal e não registrar o resultado." }
    ],
    gabarito: "D",
    justificativa: "Netiqueta inclui respeito, clareza, concisão, contexto, pertinência e escolha apropriada do canal.",
    analise: {
      A: "INCORRETA. Isso pode reduzir a compreensão e gerar conflito.",
      B: "INCORRETA. Maiúsculas podem ser interpretadas como grito e não substituem prioridade explícita.",
      C: "INCORRETA. Cópias indiscriminadas aumentam ruído e exposição.",
      D: "CORRETA. Favorece clareza, respeito e pertinência.",
      E: "INCORRETA. Compromete rastreabilidade e continuidade."
    },
    regra: "Comunicação digital profissional deve ser respeitosa, inclusiva, pertinente e rastreável.",
    pegadinha: "Netiqueta não é apenas polidez; também envolve privacidade e escolha do canal.",
    fonte: "Currículo M3, unidade 3, tópico 1 — etiqueta digital em ambientes profissionais."
  },
  {
    id: "q-m3-42",
    modulo: 3,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u3-t2-s1",
    assunto: "M3.3 Acessibilidade na comunicação",
    contexto: "Uma equipe publica vídeo de treinamento e documentos com gráficos para pessoas com diferentes necessidades sensoriais.",
    enunciado: "Qual conjunto melhora a acessibilidade?",
    alternativas: [
      { letra: "A", texto: "Repetir o mesmo texto alternativo em todas as imagens." },
      { letra: "B", texto: "Fonte pequena, baixo contraste e instruções baseadas apenas em cor." },
      { letra: "C", texto: "Converter todo texto em imagem." },
      { letra: "D", texto: "Remover títulos e estrutura semântica." },
      { letra: "E", texto: "Legendas/transcrição, texto alternativo significativo e informação que não dependa apenas da cor." }
    ],
    gabarito: "E",
    justificativa: "Legendas/transcrições apoiam quem não ouve o áudio; texto alternativo comunica o propósito da imagem; contraste e pistas além da cor ajudam diferentes usuários.",
    analise: {
      A: "INCORRETA. Texto alternativo deve transmitir a função ou informação relevante.",
      B: "INCORRETA. Cria barreiras visuais e cognitivas.",
      C: "INCORRETA. Reduz seleção, redimensionamento e acesso semântico.",
      D: "INCORRETA. Dificulta orientação e navegação assistiva.",
      E: "CORRETA. Oferece alternativas ao áudio e às imagens e evita depender só de cor."
    },
    regra: "Acessibilidade exige conteúdo perceptível, navegável, semanticamente estruturado e com alternativas apropriadas.",
    pegadinha: "Texto alternativo deve ser significativo, não repetitivo ou decorativo sem necessidade.",
    fonte: "W3C — WCAG 2.2, https://www.w3.org/TR/WCAG22/."
  },
  {
    id: "q-m3-43",
    modulo: 3,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u3-t3-s1",
    assunto: "M3.3 Comunicação institucional",
    contexto: "Um órgão solicita providência formal a outra unidade, precisa registrar a decisão e acompanhar o prazo.",
    enunciado: "Qual abordagem é mais adequada?",
    alternativas: [
      { letra: "A", texto: "Usar canal oficial aprovado, assunto descritivo, linguagem objetiva, responsável e prazo, preservando o registro." },
      { letra: "B", texto: "Enviar por conta pessoal e apagar a conversa após a resposta." },
      { letra: "C", texto: "Usar assunto genérico e omitir o prazo." },
      { letra: "D", texto: "Enviar dados pessoais desnecessários a todos os destinatários." },
      { letra: "E", texto: "Substituir sempre o registro formal por conversa verbal." }
    ],
    gabarito: "A",
    justificativa: "A comunicação institucional deve ser clara, rastreável e realizada em canal aprovado; responsável, prazo e contexto apoiam prestação de contas.",
    analise: {
      A: "CORRETA. Favorece clareza, rastreabilidade e acompanhamento.",
      B: "INCORRETA. Compromete governança e continuidade.",
      C: "INCORRETA. Dificulta triagem e acompanhamento.",
      D: "INCORRETA. Viola minimização e amplia exposição.",
      E: "INCORRETA. A conversa pode complementar, mas não substitui registros exigidos."
    },
    regra: "Combinar finalidade, canal, clareza, rastreabilidade e proteção de dados.",
    pegadinha: "Rastreabilidade não significa copiar todos os envolvidos nem compartilhar dados em excesso.",
    fonte: "Currículo M3, unidade 3, tópico 3 — comunicação profissional e institucional."
  },
  {
    id: "q-m3-44",
    modulo: 3,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u4-t2-s1",
    assunto: "M3.4 Compartilhamento de tela seguro",
    contexto: "Durante uma reunião externa, a área de trabalho contém notificações e janelas com informações pessoais. O servidor precisa mostrar uma planilha específica.",
    enunciado: "Qual prática reduz melhor a exposição acidental?",
    alternativas: [
      { letra: "A", texto: "Compartilhar a tela inteira e deixar notificações ativas." },
      { letra: "B", texto: "Compartilhar somente a janela necessária, silenciar notificações e revisar o conteúdo antes de transmitir." },
      { letra: "C", texto: "Abrir documentos sigilosos para encontrá-los rapidamente durante a reunião." },
      { letra: "D", texto: "Permitir controle remoto a todos sem necessidade." },
      { letra: "E", texto: "Publicar a senha da reunião no chat aberto." }
    ],
    gabarito: "B",
    justificativa: "Compartilhar apenas a janela necessária, revisar o conteúdo e limitar notificações reduz a exposição de dados fora do escopo da reunião.",
    analise: {
      A: "INCORRETA. Pode revelar dados sem relação com a reunião.",
      B: "CORRETA. Limita a superfície exposta e reduz vazamentos acidentais.",
      C: "INCORRETA. Aumenta o risco de exibição acidental.",
      D: "INCORRETA. Concede privilégios excessivos.",
      E: "INCORRETA. Facilita acesso não autorizado."
    },
    regra: "Compartilhamento seguro aplica minimização, revisão e controle de permissões.",
    pegadinha: "Notificações e janelas de fundo também podem revelar informações.",
    fonte: "Currículo M3, unidade 4, tópico 2 — compartilhamento de tela: riscos e controle."
  },
  {
    id: "q-m3-45",
    modulo: 3,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u5-t1-s1",
    assunto: "M3.5 Zoombombing e intrusão em reuniões",
    contexto: "Uma reunião institucional recebe participante desconhecido que interrompe a sessão e tenta compartilhar conteúdo ofensivo.",
    enunciado: "Qual resposta combina melhor contenção e prevenção?",
    alternativas: [
      { letra: "A", texto: "Conceder privilégio de anfitrião ao participante." },
      { letra: "B", texto: "Publicar o link da reunião nas redes sociais." },
      { letra: "C", texto: "Remover o intruso, restringir compartilhamento/entrada, ativar lobby ou senha e reportar o incidente." },
      { letra: "D", texto: "Desativar autenticação e deixar a reunião aberta." },
      { letra: "E", texto: "Ignorar o incidente e manter permissões abertas." }
    ],
    gabarito: "C",
    justificativa: "A contenção exige remover o intruso, restringir recursos abusáveis, rever controles de entrada e registrar o evento conforme o procedimento institucional.",
    analise: {
      A: "INCORRETA. Aumenta o risco e o alcance do intruso.",
      B: "INCORRETA. Amplia a exposição e pode atrair novos intrusos.",
      C: "CORRETA. Contém o evento e reduz recorrência.",
      D: "INCORRETA. Facilita novas entradas não autorizadas.",
      E: "INCORRETA. Deixa o vetor de risco ativo."
    },
    regra: "Resposta a intrusões combina contenção, controle de participantes e reporte.",
    pegadinha: "Remover o intruso pode ser insuficiente se o link continuar público e as permissões permanecerem abertas.",
    fonte: "Currículo M3, unidade 5, tópico 1 — zoombombing e intrusão em reuniões."
  },
  {
    id: "q-m3-46",
    modulo: 3,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u5-t2-s2",
    assunto: "M3.5 Exposição em calendários e convites",
    contexto: "Um convite enviado a muitos participantes externos contém no título o nome de um paciente e no corpo detalhes confidenciais desnecessários.",
    enunciado: "Qual ajuste aplica melhor minimização e proteção de dados?",
    alternativas: [
      { letra: "A", texto: "Adicionar os endereços de todos os convidados no corpo do evento." },
      { letra: "B", texto: "Manter todos os detalhes porque os convidados receberam o convite." },
      { letra: "C", texto: "Tornar o calendário público." },
      { letra: "D", texto: "Usar título neutro, remover detalhes pessoais desnecessários e restringir os detalhes aos participantes autorizados." },
      { letra: "E", texto: "Copiar o conteúdo completo para canal público." }
    ],
    gabarito: "D",
    justificativa: "Convites podem expor dados em títulos, descrições, participantes e permissões; deve-se limitar o conteúdo ao necessário e controlar a visibilidade.",
    analise: {
      A: "INCORRETA. Expõe identificadores sem necessidade.",
      B: "INCORRETA. Receber convite não justifica expor dados desnecessários.",
      C: "INCORRETA. Amplia a exposição.",
      D: "CORRETA. Reduz a quantidade de dados expostos e limita acesso.",
      E: "INCORRETA. Divulga informação confidencial a público inadequado."
    },
    regra: "Aplicar minimização e controle de acesso também a metadados de calendários.",
    pegadinha: "O título do evento pode expor informação pessoal mesmo que o corpo esteja restrito.",
    fonte: "Currículo M3, unidade 5, tópico 2; LGPD, art. 6º, III."
  },
  {
    id: "q-m3-47",
    modulo: 3,
    formato: "mc",
    estilo: "cespe",
    origem: "autoral",
    nivel: "intermediario",
    topico: "m3-u5-t3-s1",
    assunto: "M3.5 Phishing direcionado e spoofing",
    contexto: "Uma mensagem usa nome de exibição semelhante ao do gestor, exige credenciais com urgência e contém link para domínio parecido com o institucional.",
    enunciado: "Qual resposta é mais segura?",
    alternativas: [
      { letra: "A", texto: "Desativar filtros antiphishing." },
      { letra: "B", texto: "Responder com a senha para confirmar a identidade." },
      { letra: "C", texto: "Confiar no nome exibido, pois ele não pode ser falsificado." },
      { letra: "D", texto: "Encaminhar a mensagem a todos com o link ativo." },
      { letra: "E", texto: "Não clicar nem fornecer credenciais; verificar por canal independente e reportar a mensagem." }
    ],
    gabarito: "E",
    justificativa: "A aparência do remetente pode ser falsificada; verificar por canal independente, evitar o link e reportar reduz o risco. SPF/DKIM/DMARC ajudam na autenticação, mas não eliminam toda engenharia social.",
    analise: {
      A: "INCORRETA. Reduz a proteção.",
      B: "INCORRETA. Senhas não devem ser compartilhadas por e-mail.",
      C: "INCORRETA. O nome de exibição pode ser falsificado.",
      D: "INCORRETA. Pode ampliar a campanha maliciosa.",
      E: "CORRETA. Evita interação com o vetor suspeito e confirma o pedido fora do canal comprometido."
    },
    regra: "Em suspeita de phishing, interromper interação, verificar independentemente e reportar.",
    pegadinha: "SPF, DKIM e DMARC não garantem que toda mensagem seja legítima ou segura.",
    fonte: "Currículo M3, unidade 5, tópico 3 — phishing direcionado e autenticação de e-mail."
  },


  {
    id: "q-m1-44", modulo: 1, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "modulo-1-unidade-2-topico-14",
    assunto: "M1.2 — Relatório técnico integrado no Word",
    contexto: "Uma equipe precisa publicar relatório técnico longo com títulos hierárquicos, sumário, tabelas, figuras, cabeçalhos diferentes entre seções e PDF acessível.",
    enunciado: "Qual procedimento reduz retrabalho e mantém a estrutura consistente?",
    alternativas: [
      { letra: "A", texto: "Formatar cada título manualmente e digitar o sumário." },
      { letra: "B", texto: "Usar apenas quebras de página e o mesmo cabeçalho em todas as seções." },
      { letra: "C", texto: "Aplicar estilos semânticos, usar quebras de seção quando necessário, atualizar campos e validar a estrutura e as opções de exportação acessível do PDF." },
      { letra: "D", texto: "Converter todo o texto em imagens para impedir alterações." },
      { letra: "E", texto: "Exportar para PDF primeiro e estruturar o documento nesse formato." }
    ],
    gabarito: "C",
    justificativa: "Estilos estruturam a hierarquia e permitem gerar sumário; quebras de seção controlam cabeçalhos distintos; campos devem ser atualizados. Na entrega em PDF, verificar marcação estrutural, ordem de leitura, idioma, texto alternativo pertinente e opções de exportação acessível, além de testar o resultado.",
    analise: {
      A: "INCORRETA. A formatação manual não oferece estrutura confiável para sumário automático.",
      B: "INCORRETA. Quebras de página não substituem quebras de seção quando a configuração varia.",
      C: "CORRETA. Combina estrutura semântica, controle de seção, atualização de campos e verificação da exportação acessível.",
      D: "INCORRETA. Imagens prejudicam busca, seleção, leitura assistiva e manutenção.",
      E: "INCORRETA. O PDF é formato de entrega, não o melhor ambiente para estruturar o documento."
    },
    regra: "Documentos longos exigem estilos, campos atualizáveis, quebras apropriadas e verificação da estrutura e das opções de acessibilidade do PDF.",
    pegadinha: "Aparência visual não garante estrutura semântica.",
    fonte: "Currículo M1 — modulo-1-unidade-2-topico-14 (criação e correção de documentos complexos)."
  },

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