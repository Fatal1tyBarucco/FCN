/* questions_m7.js — MÓDULO 7: FUNDAMENTOS E ENGENHARIA DE DADOS
 * Banco de questões AUTORAIS (origem: 'autoral'). Cada item é identificado por
 * um id de subtópico real de curriculum_m7.js (padrão m7-u{unidade}-t{tópico}-s{sub}),
 * extraído do próprio currículo — o campo `topico` é a chave estável de associação
 * curricular usada pelo motor de simulados (quiz-engine.js).
 * O campo `estilo` indica APENAS o formato de cobrança (CESPE/FGV/FCC/VUNESP);
 * nenhuma questão é atribuída a banca real e nenhuma foi copiada de prova.
 * Todo o conteúdo conceitual deriva de curriculum_m7.js (unidades 7.1, 7.2 e 7.3).
 * Revisto em 2026-10-22: sintaxe (dois objetos sem fechamento), ids de tópico
 * (substituídos os ids inexistentes 'dados-...' pelos subtópicos reais de
 * curriculum_m7.js) e precisão conceitual (itens reescritos: os que tratavam de
 * 'dados empíricos', 'ruído', 'qualidade x quantidade' e 'sabedoria' repetida
 * não tinham subtópico correspondente e foram refeitos).
 * Total: 40 questões — 12 básicas, 18 intermediárias, 10 avançadas;
 * 33 de múltipla escolha (5 alternativas) e 7 de Certo/Errado.
 * Cobertura: todos os 23 subtópicos de M7 (7.1, 7.2 e 7.3) têm ao menos 1 questão.
 * Sem eval. Sem fetch. Funciona em file://. */

const moduleQuestions7 = [

  /* ================== 7.1 Fundamentos Conceituais de Dados ================== */

  /* ---- m7-u1-t1-s1 — Dado, informação, conhecimento e sabedoria ---- */

  { id: "q-m7-01", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "basico", topico: "m7-u1-t1-s1",
    assunto: "7.1 — Modelo DIKW: o nível 'dado'",
    contexto: "Um painel hospitalar exibe apenas o número 238, sem unidade, sem identificação de paciente e sem data de medição.",
    enunciado: "No modelo DIKW, esse número isolado, antes de qualquer interpretação, corresponde a:",
    alternativas: [
      { letra: "A", texto: "Metadado." },
      { letra: "B", texto: "Informação." },
      { letra: "C", texto: "Conhecimento." },
      { letra: "D", texto: "Sabedoria." },
      { letra: "E", texto: "Dado." }
    ],
    gabarito: "E",
    justificativa: "O currículo define dado como registro bruto, anterior a contexto e interpretação: '238' sem unidade, sem paciente e sem data é exatamente isso. Informação é o dado já contextualizado ('238 mmHg, sistólica do paciente X, medida às 9h'); conhecimento é informação combinada com experiência e julgamento; sabedoria é o discernimento que orienta a decisão; metadado é dado que descreve outro dado, o que não é o caso do número em si.",
    analise: {
      A: "INCORRETA. Metadado descreve outro dado (tipo, unidade, dono, origem); o número 238 é o conteúdo, não a descrição.",
      B: "INCORRETA. Informação exige contexto e interpretação atribuídos (unidade, paciente, momento), que o painel não fornece.",
      C: "INCORRETA. Conhecimento pressupõe informação combinada com experiência e julgamento, apta a orientar ação.",
      D: "INCORRETA. Sabedoria é o discernimento sobre o que fazer diante de consequências e valores, nível posterior ao conhecimento.",
      E: "CORRETA. Número sem unidade, sem titular e sem data permanece registro bruto — o nível 'dado' do DIKW."
    },
    regra: "DIKW: dado (registro bruto) → informação (dado contextualizado) → conhecimento (informação + experiência/julgamento) → sabedoria (discernimento para decidir).",
    pegadinha: "O formato numérico engana: '238' só vira informação quando alguém atribui unidade, contexto e interpretação.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-02", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "basico", topico: "m7-u1-t1-s1",
    assunto: "7.1 — Modelo DIKW: critério de classificação",
    contexto: "Quatro analistas descrevem o mesmo registro de atendimento de formas diferentes.",
    enunciado: "A característica que define um DADO, e não uma informação, é:",
    alternativas: [
{ letra: "A", texto: "Estar armazenado em tabela com colunas tipadas." },
{ letra: "B", texto: "Ter sido conferido contra cadastro oficial." },
{ letra: "C", texto: "Ser registro bruto, sem contexto nem interpretação atribuída." },
{ letra: "D", texto: "Expressar julgamento sobre as consequências da decisão." },
{ letra: "E", texto: "Descrever a estrutura de outro conjunto de dados." }
    ],
    gabarito: "C",
    justificativa: "O critério do DIKW é o grau de elaboração, não o suporte: dado é registro bruto, sem contexto nem interpretação. Estar em tabela tipada é forma de armazenamento (dado estruturado continua sendo dado); conferir contra cadastro oficial é acurácia (dimensão de qualidade, unidade 7.2); julgar consequências é sabedoria; descrever a estrutura de outro conjunto é metadado.",
    analise: {
      A: "INCORRETA. A estrutura (tabela, colunas tipadas) descreve a forma do dado, não o eleva a informação.",
      B: "INCORRETA. Confronto com cadastro oficial mede acurácia; um registro acurado ainda pode ser apenas dado.",
      C: "CORRETA. Ausência de contexto e de interpretação é o que caracteriza o nível mais baixo da hierarquia.",
      D: "INCORRETA. Julgar consequências é sabedoria, o nível mais alto do modelo.",
      E: "INCORRETA. Descrever a estrutura de outro conjunto é a definição de metadado técnico."
    },
    regra: "Dado = registro bruto; informação = dado com contexto e interpretação. O suporte (planilha, banco) não altera o nível.",
    pegadinha: "Dado estruturado não é informação: a estrutura é forma, e o DIKW classifica grau de elaboração.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-03", modulo: 7, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "basico", topico: "m7-u1-t1-s2",
    assunto: "7.1 — Limitações conceituais do DIKW",
    contexto: "Uma diretoria anuncia que, ao dobrar o volume de dados coletados, a organização 'alcançará sabedoria'.",
    enunciado: "À luz das limitações do modelo DIKW apontadas no currículo, essa afirmação é:",
    alternativas: [
{ letra: "A", texto: "Correta: a pirâmide DIKW prevê transformação automática e proporcional entre os níveis." },
{ letra: "B", texto: "Correta, desde que os dados coletados sejam estruturados." },
{ letra: "C", texto: "Incorreta: a passagem entre níveis exige contextualização, interpretação e julgamento — volume de dados, por si, não produz sabedoria." },
{ letra: "D", texto: "Incorreta apenas porque sabedoria não faz parte do modelo DIKW." },
{ letra: "E", texto: "Correta, desde que exista catálogo de dados atualizado." }
    ],
    gabarito: "C",
    justificativa: "O currículo lista como limitação do DIKW a linearidade: a pirâmide sugere transformação mecânica e cumulativa, quando cada passagem exige trabalho explícito — contextualizar (dado→informação), interpretar com experiência (informação→conhecimento) e julgar consequências (conhecimento→sabedoria). Acrescenta que acervo sem contexto e sem qualidade amplia ruído, não sabedoria. Catálogo e estruturação são instrumentos úteis, mas não removem essa limitação.",
    analise: {
      A: "INCORRETA. O currículo nega expressamente a transformação automática e proporcional entre níveis.",
      B: "INCORRETA. Estruturação melhora tratamento e consulta, mas não converte dado em sabedoria.",
      C: "CORRETA. Reproduz a limitação de linearidade: a passagem de nível é trabalho explícito, não efeito automático do volume.",
      D: "INCORRETA. Sabedoria integra o modelo; o erro da afirmação original é outro (a automaticidade).",
      E: "INCORRETA. Catálogo é instrumento de governança e descoberta, não motor de transformação de níveis."
    },
    regra: "DIKW é modelo didático, não lei de transformação: 'mais dados' não gera 'mais sabedoria' — cada passagem exige trabalho explícito.",
    pegadinha: "A alternativa 'correta, desde que estruturados/desde que haja catálogo' é a armadilha condicional: nenhum instrumento elimina a necessidade de interpretação e julgamento.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-04", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "basico", topico: "m7-u1-t1-s1",
    assunto: "7.1 — Modelo DIKW: o nível 'conhecimento'",
    contexto: "Um técnico recebe o alerta de que a leitura de um sensor ultrapassou o limite de segurança do equipamento.",
    enunciado: "Segundo o modelo DIKW adotado no currículo, conhecimento corresponde a:",
    alternativas: [
      { letra: "A", texto: "Decisão já executada e registrada em ata." },
      { letra: "B", texto: "Registro bruto, ainda sem tratamento." },
      { letra: "C", texto: "Dado apenas com contexto atribuído." },
      { letra: "D", texto: "Conjunto de metadados técnicos do sensor." },
      { letra: "E", texto: "Informação combinada com experiência e julgamento, apta a orientar ação." }
    ],
    gabarito: "E",
    justificativa: "O currículo adota como definição de trabalho: conhecimento é informação combinada com experiência e julgamento, aplicada por alguém ou por regra explícita de decisão. Registro bruto é dado; dado com contexto é informação; metadados descrevem o dado; a decisão executada é o produto da aplicação (sabedoria/ação), não o nível de conhecimento em si.",
    analise: {
      E: "CORRETA. Definição literal do currículo: informação + experiência + julgamento, orientada à ação.",
      B: "INCORRETA. Registro bruto é o nível 'dado'.",
      C: "INCORRETA. Dado com contexto é o nível 'informação' — ainda falta experiência e julgamento.",
      D: "INCORRETA. Metadados descrevem o dado e apoiam interpretação; não são conhecimento.",
      A: "INCORRETA. Decisão executada é aplicação (sabedoria em ato), não o conceito de conhecimento."
    },
    regra: "Conhecimento = informação + experiência + julgamento, apta a orientar ação.",
    pegadinha: "Conhecimento não é 'informação organizada' apenas — a definição do curso exige experiência e julgamento.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-05", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "basico", topico: "m7-u1-t1-s1",
    assunto: "7.1 — Modelo DIKW: o nível 'sabedoria'",
    contexto: "Um gestor dispõe de informação consolidada e de conhecimento técnico sobre o problema e precisa escolher entre duas condutas com efeitos distintos sobre os usuários.",
    enunciado: "No modelo DIKW, o nível em que se exerce discernimento para decidir, considerando consequências e valores, é:",
    alternativas: [
      { letra: "A", texto: "Conhecimento." },
      { letra: "B", texto: "Dado." },
      { letra: "C", texto: "Informação." },
      { letra: "D", texto: "Sabedoria." },
      { letra: "E", texto: "Metadado de processo." }
    ],
    gabarito: "D",
    justificativa: "O currículo trata sabedoria como discernimento — o nível em que se julga o que fazer diante de consequências e valores, e não apenas se conhece o mecanismo. Dado é registro bruto; informação é dado contextualizado; conhecimento é informação com experiência e julgamento aplicada a uma regra; metadado de processo registra como o dado chegou (extração, versão do job, responsável).",
    analise: {
      D: "CORRETA. Discernimento sobre consequências e valores na decisão é exatamente o nível de sabedoria.",
      B: "INCORRETA. Dado é registro bruto, sem interpretação.",
      C: "INCORRETA. Informação é o dado contextualizado, sem o julgamento de valor envolvido na escolha.",
      A: "INCORRETA. Conhecimento orienta a ação, mas o enunciado destaca o julgamento de consequências e valores — nível de sabedoria.",
      E: "INCORRETA. Metadado de processo descreve a trajetória operacional do dado, não decide nada."
    },
    regra: "Sabedoria = discernimento: aplicar conhecimento considerando consequências e valores.",
    pegadinha: "Sabedoria não é 'acúmulo de conhecimento' nem 'decisão automática' — exige julgamento.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u1-t2-s1 — Estruturados, semiestruturados e não estruturados ---- */

  { id: "q-m7-07", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "basico", topico: "m7-u1-t2-s1",
    assunto: "7.1 — Graus de estrutura dos dados",
    contexto: "Um órgão recebe três arquivos: (i) tabela de servidores com colunas tipadas; (ii) arquivo JSON de sensores, em que campos aparecem ou faltam conforme o registro; (iii) gravação em vídeo de uma audiência pública.",
    enunciado: "A classificação correta dos três arquivos, nessa ordem, é:",
    alternativas: [
      { letra: "A", texto: "Semiestruturado — estruturado — não estruturado." },
      { letra: "B", texto: "Estruturado — não estruturado — semiestruturado." },
      { letra: "C", texto: "Estruturado — semiestruturado — não estruturado." },
      { letra: "D", texto: "Não estruturado — semiestruturado — estruturado." },
      { letra: "E", texto: "Estruturado — estruturado — semiestruturado." }
    ],
    gabarito: "C",
    justificativa: "O currículo define: estruturado = schema rígido com tipo, regra e domínio definidos de antemão (tabela relacional, planilha); semiestruturado = sem schema imposto de fora, mas com marcadores internos que descrevem a estrutura (JSON, XML, log), permitindo parsing ainda que campos variem por registro; não estruturado = sem formato computável de campos (texto livre, PDF digitalizado, imagem, áudio, vídeo).",
    analise: {
      C: "CORRETA. Tabela tipada = estruturado; JSON com campos variáveis = semiestruturado; vídeo = não estruturado.",
      B: "INCORRETA. JSON tem marcadores internos (é semiestruturado) e vídeo não tem campo algum (não estruturado) — a ordem está invertida.",
      A: "INCORRETA. A tabela tipada é o caso mais rígido de estrutura, não o JSON.",
      D: "INCORRETA. Inverte os três graus: a tabela é a mais estruturada, não a menos.",
      E: "INCORRETA. JSON não é estruturado no sentido do currículo: não há schema único imposto sobre todos os registros."
    },
    regra: "Estruturado (schema rígido) / semiestruturado (marcadores, sem schema único) / não estruturado (sem campos computáveis).",
    pegadinha: "JSON e XML parecem 'estruturados' por terem formato reconhecível, mas são semiestruturados: o schema não é único nem imposto.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u1-t2-s2 — Qualitativos e quantitativos ---- */

  { id: "q-m7-06", modulo: 7, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "intermediario", topico: "m7-u1-t2-s2",
    assunto: "7.1 — Dado qualitativo codificado em número",
    contexto: "Uma equipe calculou a média das matrículas dos servidores admitidos no ano e divulgou o valor 20260431 como 'matrícula média'.",
    enunciado: "O erro dessa divulgação é que:",
    alternativas: [
{ letra: "A", texto: "A média deveria ser substituída pela mediana, pois matrícula é variável ordinal." },
{ letra: "B", texto: "Matrícula é variável contínua, de modo que a média exigiria também o desvio padrão." },
{ letra: "C", texto: "Matrícula é código de identificação (qualitativa nominal): média não tem significado para códigos, ainda que sejam formados por dígitos." },
{ letra: "D", texto: "O cálculo seria válido se todas as matrículas tivessem o mesmo número de dígitos." },
{ letra: "E", texto: "O problema é apenas de arredondamento do valor final divulgado." }
    ],
    gabarito: "C",
    justificativa: "O critério do currículo é a validade da operação aritmética, não a presença de dígitos: matrícula, CEP e telefone são códigos qualitativos nominais, e a média de matrículas não significa nada. Mediana também não resolve (não há ordem com significado), o número de dígitos não cria escala e não existe erro de arredondamento a corrigir: o indicador é inválido por construção.",
    analise: {
      A: "INCORRETA. Mediana exige ordem com significado; matrícula é nominal, não ordinal.",
      B: "INCORRETA. Não há medição em intervalo: o código não expressa quantidade.",
      C: "CORRETA. Aplicação literal da regra 'número escrito não significa dado quantitativo'.",
      D: "INCORRETA. Uniformidade de formato não cria escala numérica com significado.",
      E: "INCORRETA. O problema é conceitual (tipo de variável), não de precisão do cálculo."
    },
    regra: "Número não é sinônimo de dado quantitativo: o critério é a validade da operação aritmética sobre o valor.",
    pegadinha: "Códigos numéricos (matrícula, CEP, telefone, CPF) são qualitativos nominais — qualquer média sobre eles é erro de interpretação.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u1-t2-s3 — Níveis de mensuração ---- */

  { id: "q-m7-09", modulo: 7, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "intermediario", topico: "m7-u1-t2-s3",
    assunto: "7.1 — Escala ordinal e média",
    contexto: "Pesquisa de satisfação classifica o atendimento em ruim, regular e bom. Para 'facilitar', a equipe converteu as categorias em 1, 2 e 3 e passou a divulgar a 'média de satisfação'.",
    enunciado: "Sobre esse procedimento, é correto afirmar que:",
    alternativas: [
{ letra: "A", texto: "A escala é nominal, portanto apenas a moda é legítima." },
{ letra: "B", texto: "A escala é discreta, logo a média é sempre legítima e o desvio padrão é obrigatório." },
{ letra: "C", texto: "A escala é ordinal: há ordem, mas as distâncias entre graus não são comparáveis, de modo que a média exige suposição que a escala não garante." },
{ letra: "D", texto: "A escala é contínua de razão, e a média é a única estatística possível." },
{ letra: "E", texto: "Qualquer escala admite média, desde que os códigos atribuídos sejam números inteiros." }
    ],
    gabarito: "C",
    justificativa: "No currículo, nível ordinal tem ordem sem distâncias comparáveis (ruim < regular < bom): valem contagem, moda e mediana; a média exige suposição adicional de equidistância que a escala não garante. A escala não é nominal (há ordem explícita), não é discreta de contagem (os códigos 1-2-3 não representam quantidades contadas) e muito menos contínua de razão.",
    analise: {
      A: "INCORRETA. Há ordem entre as categorias, o que exclui o nível nominal.",
      B: "INCORRETA. Contagem não é o que a variável mede; desvio padrão também depende de distâncias iguais.",
      C: "CORRETA. Ordem sem distância comparável é a definição de ordinal; a média passa a depender de suposição declarada.",
      D: "INCORRETA. Não há medição em intervalo nem zero com significado.",
      E: "INCORRETA. Codificar em inteiros não cria escala intervalar — o significado das distâncias continua indefinido."
    },
    regra: "Ordinal: ordem sem distância comparável — valem contagem, moda e mediana; média só com suposição declarada.",
    pegadinha: "Atribuir 1/2/3 a ruim/regular/bom não transforma a escala em intervalar: a numeração é só codificação.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-24", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "basico", topico: "m7-u1-t2-s3",
    assunto: "7.1 — Escala nominal em códigos numéricos",
    contexto: "Uma base cadastral traz CEP, telefone e matrícula, todos compostos apenas por dígitos.",
    enunciado: "O nível de mensuração dessas três variáveis é:",
    alternativas: [
{ letra: "A", texto: "Ordinal, pois os dígitos crescem da esquerda para a direita." },
{ letra: "B", texto: "Discreto, pois são números inteiros." },
{ letra: "C", texto: "Nominal: são códigos de identificação, e ordenar ou calcular média não produz informação válida." },
{ letra: "D", texto: "Contínuo, pois admitem casas decimais quando necessário." },
{ letra: "E", texto: "Intervalar, pois a diferença entre dois códigos é constante." }
    ],
    gabarito: "C",
    justificativa: "O currículo classifica CEP, telefone e matrícula como códigos qualitativos nominais: a média de matrículas não significa nada, ordenar e subtrair CEP não produz distância geográfica. Ser inteiro não cria escala (discreto exige contagem com distâncias iguais), e não há zero nem intervalo com significado para sustentar nível intervalar ou contínuo.",
    analise: {
      A: "INCORRETA. A ordem dos dígitos é convenção de escrita, não ordem da variável.",
      B: "INCORRETA. Discreto pressupõe contagem com distâncias iguais entre valores consecutivos.",
      C: "CORRETA. Códigos de identificação são nominais: contagem, frequência e moda são as operações válidas.",
      D: "INCORRETA. Não há medição em intervalo; casas decimais não teriam significado.",
      E: "INCORRETA. A diferença entre dois CEPs não tem unidade nem significado constante."
    },
    regra: "Nominal: categorias sem ordem — valem contagem, frequência e moda; nada de média.",
    pegadinha: "Dígitos não criam escala: o que define o nível é o significado da diferença entre valores.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u1-t3-s1 — Metadados ---- */

  { id: "q-m7-08", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "basico", topico: "m7-u1-t3-s1",
    assunto: "7.1 — Metadados de negócio",
    contexto: "O dicionário de dados de um sistema registra, para o campo 'prazo': a unidade (dias úteis), a regra de cálculo e o dono responsável pelo domínio.",
    enunciado: "Esses registros são:",
    alternativas: [
{ letra: "A", texto: "Dados transacionais produzidos pelo processo administrativo." },
{ letra: "B", texto: "Metadados técnicos, pois tratam do tipo de armazenamento físico." },
{ letra: "C", texto: "Metadados de negócio, que descrevem significado, unidade de medida, regra e responsável pelo dado." },
{ letra: "D", texto: "Dados derivados, calculados a partir do prazo original." },
{ letra: "E", texto: "Quasi-identificadores do titular do dado." }
    ],
    gabarito: "C",
    justificativa: "O currículo separa três classes: técnicos (nome de tabela/coluna, tipo, tamanho, chave, partição — 'como está armazenado'); de negócio (significado do campo, unidade, regra de cálculo, dono, sensibilidade — 'o que significa e a quem pertence'); e de processo/uso (data da extração, versão do job, quem consultou). Unidade, regra de cálculo e dono são, pela própria definição, metadados de negócio.",
    analise: {
      A: "INCORRETA. Dado transacional é conteúdo do processo, não descrição do campo.",
      B: "INCORRETA. Metadado técnico descreveria tipo, tamanho e formato de armazenamento — não a unidade de negócio.",
      C: "CORRETA. Significado, unidade, regra de cálculo e dono compõem o metadado de negócio.",
      D: "INCORRETA. Nada foi calculado: descreve-se o campo, não se produz valor derivado.",
      E: "INCORRETA. Quasi-identificador é atributo que ajuda a reidentificar pessoa (idade, CEP, cargo), tema da unidade 7.3."
    },
    regra: "Metadado = dado sobre dado. Técnico (como está armazenado), de negócio (o que significa e a quem pertence), de processo (como chegou e quem mexeu).",
    pegadinha: "Nem todo metadado é técnico: unidade, regra de cálculo e dono são metadados de NEGÓCIO, e é deles que depende a leitura correta do número.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u1-t3-s2 — Linhagem e catálogo ---- */

  { id: "q-m7-10", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "intermediario", topico: "m7-u1-t3-s2",
    assunto: "7.1 — Linhagem (lineage) x catálogo de dados",
    contexto: "O número de um painel gerencial não bate com a base de origem; a equipe precisa descobrir em qual etapa o valor divergiu.",
    enunciado: "O instrumento adequado para percorrer extração, transformação, carga e agregação até localizar onde o valor mudou é:",
    alternativas: [
{ letra: "A", texto: "O catálogo de dados, que inventaria o que existe e o que significa." },
{ letra: "B", texto: "O dicionário de dados, que descreve tipos e domínios de campos." },
{ letra: "C", texto: "A linhagem (lineage), que registra a trajetória do dado e as transformações sofridas." },
{ letra: "D", texto: "A política de retenção, que define prazos de guarda e descarte." },
{ letra: "E", texto: "A matriz de classificação de sensibilidade da informação." }
    ],
    gabarito: "C",
    justificativa: "O currículo opõe os dois conceitos: linhagem é histórico/fluxo — responde 'de onde veio este número e o que já passou por ele', permitindo rastrear a causa da divergência etapa por etapa; catálogo é índice/estado — responde 'o que existe, o que significa e como achar'. O catálogo é consultado em seguida, para confirmar a definição do indicador e o dono; dicionário, retenção e classificação não registram trajetória.",
    analise: {
      A: "INCORRETA. O catálogo descreve o estado dos ativos; sem registro de transformação, não explica como o número foi calculado.",
      B: "INCORRETA. O dicionário descreve campos e domínios (metadado técnico/negócio), não o fluxo entre sistemas.",
      C: "CORRETA. Percorrer as etapas e localizar onde o valor divergiu é exatamente a função da linhagem.",
      D: "INCORRETA. Retenção trata de prazos de guarda e descarte, não de rastreabilidade do valor.",
      E: "INCORRETA. Classificação de sensibilidade orienta acesso, não reconstitui a trajetória do dado."
    },
    regra: "Linhagem = histórico do fluxo (como chegou); catálogo = índice do acervo (o que existe e o que significa).",
    pegadinha: "'Fonte: sistema X' registrado de forma isolada não é linhagem completa — é declaração parcial de origem.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u1-t3-s3 — Ciclo de vida ---- */

  { id: "q-m7-25", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "intermediario", topico: "m7-u1-t3-s3",
    assunto: "7.1 — Ciclo de vida: retenção e descarte",
    contexto: "Encerrado o processo seletivo, uma área pede para manter indefinidamente a base de candidatos não aprovados, 'por precaução'.",
    enunciado: "Conforme o ciclo de vida dos dados descrito no currículo, a conduta correta é:",
    alternativas: [
{ letra: "A", texto: "Manter indefinidamente, pois guardar dado nunca gera custo nem risco." },
{ letra: "B", texto: "Eliminar imediatamente todos os registros, inclusive os necessários a auditoria e responsabilização." },
{ letra: "C", texto: "Definir prazo de retenção justificado (inclusive por eventual contencioso), restringir o acesso nesse período e eliminar ou anonimizar ao término da finalidade." },
{ letra: "D", texto: "Manter a base apenas em planilha local, sem controle de acesso, para reduzir custo." },
{ letra: "E", texto: "Compartilhar a base com terceiros para reuso em finalidade diversa, evitando retrabalho de coleta." }
    ],
    gabarito: "C",
    justificativa: "O currículo fixa dois limites para a retenção: mínimo (manter enquanto houver finalidade ou obrigação) e máximo (não manter indefinidamente 'por precaução'); manter além do necessário aumenta custo e exposição sem benefício, e a eliminação de dado que deveria ser arquivado é tão grave quanto o excesso de guarda. No descarte, o alcance inclui cópias, backups, caches e extrações — não apenas o arquivo principal.",
    analise: {
      A: "INCORRETA. O currículo afirma o oposto: guarda indefinida é custo e risco sem finalidade.",
      B: "INCORRETA. Eliminar o que deve ser arquivado destrói evidência necessária a auditoria e responsabilização.",
      C: "CORRETA. Equilibra os dois limites da retenção e trata o descarte como etapa com prazo e registro.",
      D: "INCORRETA. Planilha local sem controle de acesso agrava o risco e contraria a fase de armazenamento.",
      E: "INCORRETA. Reuso em finalidade diversa contraria a restrição à finalidade declarada (fase de uso/compartilhamento)."
    },
    regra: "Retenção tem limite mínimo (finalidade/obrigação) e máximo (nada de guarda indefinida); descarte alcança cópias e backups.",
    pegadinha: "'Por precaução, guardar tudo para sempre' parece prudente, mas é justamente o que o ciclo de vida condena.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ======== 7.2 Qualidade, Integração e Transformação de Dados ======== */

  /* ---- m7-u2-t1-s1 — Acurácia, completude e validade ---- */

  { id: "q-m7-11", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "basico", topico: "m7-u2-t1-s1",
    assunto: "7.2 — Validade (conformidade a domínio)",
    contexto: "Uma base de endereços registra a unidade federativa em campo próprio; a conferência encontrou 12 linhas com o valor 'XX'.",
    enunciado: "A dimensão de qualidade violada pelo valor 'XX' é:",
    alternativas: [
{ letra: "A", texto: "Acurácia: seria necessário confrontar cada linha com o cadastro oficial do cidadão." },
{ letra: "B", texto: "Completude: o campo está vazio." },
{ letra: "C", texto: "Validade: o valor não pertence ao domínio de unidades federativas existentes, o que se verifica pela regra, sem consulta externa." },
{ letra: "D", texto: "Tempestividade: o dado está atrasado em relação ao fato." },
{ letra: "E", texto: "Unicidade: há registros duplicados na base." }
    ],
    gabarito: "C",
    justificativa: "O currículo define validade pela aderência ao formato, ao domínio e às regras definidas — 'UF com dois dígitos válidos, valor não negativo, código presente na tabela de referência' — e destaca que validade se confere pela REGRA, internamente, enquanto acurácia se confere pela REALIDADE. 'XX' não é UF existente: viola domínio. O campo está preenchido (não é completude), não há atraso nem duplicidade envolvidos.",
    analise: {
      A: "INCORRETA. Confronto com cadastro oficial mede acurácia — outro eixo, mais caro e aqui desnecessário.",
      B: "INCORRETA. O campo contém valor; completude mede presença, não conformidade.",
      C: "CORRETA. Domínio violado = validade; a verificação é interna, contra a tabela de referência.",
      D: "INCORRETA. Tempestividade compara data do fato com data de disponibilidade.",
      E: "INCORRETA. Unicidade mede duplicatas, não valores fora do domínio."
    },
    regra: "Validade = aderência à regra, formato e domínio (verificação interna). Acurácia = correspondência com a realidade (referência externa).",
    pegadinha: "Valor inválido não é necessariamente valor falso: as dimensões são independentes e se medem por caminhos diferentes.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-12", modulo: 7, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t1-s1",
    assunto: "7.2 — Acurácia",
    contexto: "Um cadastro apresenta nome de processo que não existe, CPF que pertence a outra pessoa e valor de pagamento divergente do comprovante.",
    enunciado: "A acurácia é a dimensão que exige referência externa porque:",
    alternativas: [
      { letra: "A", texto: "mede o intervalo entre o fato e a disponibilidade do dado." },
      { letra: "B", texto: "mede apenas se o campo está preenchido." },
      { letra: "C", texto: "mede a aderência ao formato e ao domínio definidos na regra." },
      { letra: "D", texto: "mede a correspondência entre o valor registrado e a realidade que ele representa." },
      { letra: "E", texto: "mede a ausência de registros duplicados." }
    ],
    gabarito: "D",
    justificativa: "O currículo define acurácia como correspondência com a realidade — 'o nome do processo existe mesmo, o CPF pertence à pessoa dita, o valor bate com o comprovante' — e observa que se mede contra referência externa (cadastro oficial, conferência manual, leitura física), o que a torna a dimensão mais cara de verificar. As demais alternativas descrevem completude, validade, tempestividade e unicidade.",
    analise: {
      A: "INCORRETA. Intervalo entre fato e disponibilidade é tempestividade.",
      B: "INCORRETA. Presença de valor é completude.",
      C: "INCORRETA. Aderência a formato/domínio é validade, verificável internamente.",
      D: "CORRETA. Correspondência com a realidade, verificada por referência externa, é a definição de acurácia.",
      E: "INCORRETA. Ausência de duplicatas é unicidade."
    },
    regra: "Acurácia = valor corresponde à realidade (referência externa). É a dimensão mais cara de medir.",
    pegadinha: "Base 100% preenchida e no formato correto pode ter acurácia baixa — as três dimensões não se implicam.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-13", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t1-s1",
    assunto: "7.2 — Completude e métrica de qualidade",
    contexto: "Em uma base de 100 registros, 6 estão com o campo 'data de nascimento' vazio; o campo é obrigatório para o uso declarado.",
    enunciado: "A completude desse campo e a leitura correta do resultado são:",
    alternativas: [
{ letra: "A", texto: "6%, pois a métrica conta as ausências e não os preenchimentos." },
{ letra: "B", texto: "100%, pois o campo existe na estrutura da tabela." },
{ letra: "C", texto: "94%, o que não autoriza concluir que o dado é acurado: preenchimento não prova correspondência com a realidade." },
{ letra: "D", texto: "Indeterminada em qualquer hipótese, pois completude não se calcula." },
{ letra: "E", texto: "94%, e esse percentual também comprova a validade das datas restantes." }
    ],
    gabarito: "C",
    justificativa: "Completude mede-se pela fração de registros (ou de campo obrigatório) sem valor ausente: (100 − 6) ÷ 100 = 94%. O currículo alerta que completude é relativa à regra — contar nulos sem saber se o campo é obrigatório não é medir qualidade — e que preenchimento (completude) e formato (validade) não garantem correspondência com a realidade (acurácia); formulários obrigatórios ampliam até o risco de preenchimento inventado.",
    analise: {
      A: "INCORRETA. A métrica usual é o percentual de registros conformes (preenchidos), não o de ausentes.",
      B: "INCORRETA. Existir na estrutura não significa estar preenchido.",
      C: "CORRETA. 94% de completude, sem qualquer inferência automática sobre acurácia.",
      D: "INCORRETA. A completude é calculável e o próprio currículo traz o cálculo.",
      E: "INCORRETA. Completude não verifica se a data é plausível ou está no domínio — isso é validade, medida em outro eixo."
    },
    regra: "Completude = fração de registros com o campo preenchido, relativa à regra de obrigatoriedade. Não implica acurácia nem validade.",
    pegadinha: "A alternativa que 'aproveita' o número certo para concluir qualidade global é a mais perigosa: cada dimensão tem sua própria métrica e denominador.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-15", modulo: 7, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t1-s1",
    assunto: "7.2 — Validade de datas",
    contexto: "Um sistema aceitou, no campo de data de nascimento, o valor 31/02/2020.",
    enunciado: "Antes de qualquer confronto com a realidade do titular, esse registro viola a dimensão de:",
    alternativas: [
{ letra: "A", texto: "Acurácia, pois só o titular pode dizer se a data é verdadeira." },
{ letra: "B", texto: "Completude, pois falta o ano do nascimento." },
{ letra: "C", texto: "Validade, pois a data não existe no calendário e descumpre o domínio permitido." },
{ letra: "D", texto: "Tempestividade, pois a data é antiga." },
{ letra: "E", texto: "Unicidade, pois outro registro pode ter a mesma data." }
    ],
    gabarito: "C",
    justificativa: "O currículo define validade como obediência ao formato, ao domínio e às regras definidas — 'data dentro do intervalo permitido' é exemplo expresso. 31/02 não existe: a violação é detectável internamente, pela regra, sem consultar o titular (o que seria necessário para aferir acurácia). O campo está preenchido (não é completude), a data não é 'antiga' em relação a um fato recente (não é tempestividade) e datas iguais entre pessoas diferentes são legítimas (não é unicidade).",
    analise: {
      A: "INCORRETA. Acurácia responderia 'nasceu nesse dia?'; aqui o dia nem existe.",
      B: "INCORRETA. O campo está preenchido; o problema é o conteúdo, não a ausência.",
      C: "CORRETA. Data inexistente viola domínio/regra: validade, verificável sem referência externa.",
      D: "INCORRETA. Tempestividade compara o fato com o momento da disponibilização.",
      E: "INCORRETA. Unicidade trata de entidades repetidas, não de valores de campo."
    },
    regra: "Validade: valor obedece a formato, domínio e intervalo permitido — checagem interna.",
    pegadinha: "Confundir 'data impossível' (validade) com 'data errada' (acurácia) é o erro clássico da trinca.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-18", modulo: 7, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "avancado", topico: "m7-u2-t1-s1",
    assunto: "7.2 — A trinca acurácia/completude/validade",
    contexto: "Em auditoria, um cadastro apresentou CPF com 11 dígitos, dígitos verificadores válidos e campo preenchido. A conferência com o titular revelou que o número pertence a outra pessoa.",
    enunciado: "A conclusão tecnicamente correta é que:",
    alternativas: [
{ letra: "A", texto: "A validade está violada, pois o CPF pertence a outra pessoa." },
{ letra: "B", texto: "A completude está violada, pois faltam informações do titular." },
{ letra: "C", texto: "Completude e validade estão atendidas e a acurácia está violada, pois a correspondência com a realidade só se verifica por referência externa." },
{ letra: "D", texto: "As três dimensões estão violadas, pois o registro é falso." },
{ letra: "E", texto: "Nenhuma dimensão está violada, pois formato e preenchimento estão corretos." }
    ],
    gabarito: "C",
    justificativa: "O currículo apresenta exatamente esse caso: 'sistema mostra CPF com todos os dígitos preenchidos e formato correto, mas o titular real é outro' — a completude está ok (campo preenchido), a validade também (formato e dígitos verificadores passam), e a violação é de acurácia, que só se detecta confrontando com referência. Dizer que 'validade está violada porque o CPF é de outra pessoa' desloca para a regra um problema de realidade.",
    analise: {
      A: "INCORRETA. Validade se verifica pela regra de formato e dígitos verificadores, que passaram.",
      B: "INCORRETA. Nenhum campo obrigatório está vazio.",
      C: "CORRETA. Separa corretamente presença (completude), conformidade (validade) e correspondência (acurácia).",
      D: "INCORRETA. Generalização indevida: duas dimensões estão atendidas; só a acurácia falha.",
      E: "INCORRETA. Ignora que o valor registrado não corresponde à pessoa real."
    },
    regra: "Validade confere-se pela REGRA; acurácia, pela REALIDADE; completude, pela PRESENÇA.",
    pegadinha: "CPF válido não é CPF correto: dígito verificador só atesta consistência formal do número.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t1-s2 — Consistência, unicidade e tempestividade ---- */

  { id: "q-m7-14", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t1-s2",
    assunto: "7.2 — Consistência",
    contexto: "Filial e matriz registram a mesma estante, medida no mesmo momento: 2,0 m em uma base e 220 cm na outra, sem regra de reconciliação.",
    enunciado: "A dimensão de qualidade violada é:",
    alternativas: [
      { letra: "A", texto: "Completude: falta a unidade de medida em uma das bases." },
      { letra: "B", texto: "Unicidade: há duas linhas para a mesma entidade." },
      { letra: "C", texto: "Tempestividade: o dado da filial é mais antigo." },
      { letra: "D", texto: "Consistência: o mesmo fato é representado de forma incompatível entre fontes." },
      { letra: "E", texto: "Acurácia: a correspondência com a medida real exige uma referência externa; a divergência entre fontes já indica inconsistência." }
    ],
    gabarito: "D",
    justificativa: "A inconsistência ocorre porque duas fontes atribuem valores divergentes ao mesmo atributo do mesmo objeto e momento: 2,0 m equivalem a 200 cm, não a 220 cm. A dimensão de consistência pode ser verificada pela regra de reconciliação entre fontes, sem que isso, por si só, determine qual fonte corresponde à realidade. Não há duplicidade (são bases distintas), nada indica atraso e as unidades estão declaradas. Acurácia exige comparar o valor com uma referência confiável sobre a medida real.",
    analise: {
      A: "INCORRETA. As unidades estão presentes (m e cm); o problema é a falta de conversão.",
      B: "INCORRETA. Duas bases com o mesmo objeto não configuram, por si, duplicidade de entidade.",
      C: "INCORRETA. O enunciado não informa data de atualização.",
      D: "CORRETA. Representações incompatíveis do mesmo fato = inconsistência entre fontes.",
      E: "INCORRETA. A divergência entre fontes indica inconsistência, mas a acurácia de cada valor depende de comparação com uma referência confiável; o enunciado não fornece essa referência."
    },
    regra: "Consistência = mesmo fato representado de forma compatível, dentro do registro e entre sistemas.",
    pegadinha: "Valores divergentes para o mesmo fato indicam inconsistência entre fontes; determinar qual valor é acurado exige referência externa.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-16", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t1-s2",
    assunto: "7.2 — Unicidade e métrica de duplicidade",
    contexto: "Três linhas idênticas do mesmo atendimento entraram na base porque o formulário foi reenviado.",
    enunciado: "A dimensão violada e a métrica típica correspondente são, respectivamente:",
    alternativas: [
      { letra: "A", texto: "Tempestividade; latência entre fato e disponibilidade." },
      { letra: "B", texto: "Consistência; divergência em regra de reconciliação." },
      { letra: "C", texto: "Completude; percentual de campos nulos." },
      { letra: "D", texto: "Unicidade; taxa de duplicatas." },
      { letra: "E", texto: "Validade; percentual de valores fora do domínio." }
    ],
    gabarito: "D",
    justificativa: "O currículo define unicidade como 'cada entidade real aparece uma única vez' e indica a métrica: taxa de duplicatas — registros idênticos ou quase idênticos por erro de carga, reenvio ou cadastro duplo. As demais alternativas associam dimensões corretas a métricas corretas, mas nenhuma delas descreve três linhas idênticas do mesmo atendimento.",
    analise: {
      A: "INCORRETA. Não há informação sobre atraso na disponibilização.",
      B: "INCORRETA. Consistência trata de representações incompatíveis do mesmo fato, não de repetição de linhas.",
      C: "INCORRETA. Nenhum campo está vazio.",
      D: "CORRETA. Reenvio gerando linhas idênticas é o caso típico de violação de unicidade, medida por taxa de duplicatas.",
      E: "INCORRETA. Os valores estão no domínio; o problema é a repetição do registro."
    },
    regra: "Unicidade = cada entidade real uma única vez; métrica: taxa de duplicatas.",
    pegadinha: "Decorar a métrica sem a dimensão (ou o contrário) faz errar pares que parecem plausíveis isoladamente.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-17", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t1-s2",
    assunto: "7.2 — Tempestividade",
    contexto: "O painel que apoia a decisão sobre a fila de atendimento é atualizado uma vez por dia, mas a decisão precisa ser tomada a cada hora.",
    enunciado: "O problema descrito é de:",
    alternativas: [
      { letra: "A", texto: "Completude: faltam campos no painel." },
      { letra: "B", texto: "Acurácia: os valores do painel não correspondem à realidade." },
      { letra: "C", texto: "Unicidade: há atendimentos repetidos no painel." },
      { letra: "D", texto: "Validade: a data de atualização está em formato inválido." },
      { letra: "E", texto: "Tempestividade: latência incompatível com o momento da decisão, ainda que o dado seja acurado e completo." }
    ],
    gabarito: "E",
    justificativa: "O currículo define tempestividade como disponibilidade no momento necessário, com latência aceitável, medida pelo intervalo entre o fato e sua disponibilidade, e registra a consequência: 'dado antigo pode ser acurado e completo e ainda assim inútil para decidir'. O enunciado não menciona erro de valor, repetição, formato ou ausência de campo.",
    analise: {
      A: "INCORRETA. Não há campo faltante citado.",
      B: "INCORRETA. Nada indica que os valores estejam errados — eles podem estar corretos e atrasados.",
      C: "INCORRETA. Duplicidade não é o tema do enunciado.",
      D: "INCORRETA. Formato de data não é mencionado.",
      E: "CORRETA. Defasagem diante de decisão horária é violação de tempestividade."
    },
    regra: "Tempestividade = dado disponível no momento necessário, com latência aceitável para a decisão.",
    pegadinha: "Tempestividade não é 'velocidade de processamento': é adequação ao momento do uso.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-20", modulo: 7, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t1-s2",
    assunto: "7.2 — Trade-offs entre dimensões de qualidade",
    contexto: "Para reduzir duplicidades, a equipe propõe descartar as linhas mais antigas e manter apenas o registro mais recente de cada entidade, sem preservar histórico.",
    enunciado: "A medida melhora a unicidade e não afeta outras dimensões, pois duplicidade é sempre um defeito a eliminar.",
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'não afeta outras dimensões': o currículo alerta que deduplicar para ganhar unicidade pode reduzir a completude histórica do conjunto quando a regra de fusão descarta registros históricos, e que qualidade é gestão de trade-offs com métrica declarada.",
    justificativa: "O currículo trata conflitos entre dimensões explicitamente: ganhar unicidade pode custar completude histórica (perda de registros do passado), coletar tudo por precaução pode melhorar cobertura mas piorar minimização e tempestividade, e validação rígida reduz certos erros mas pode rejeitar registros legítimos. Qualidade não é estado absoluto: é gestão de compromissos, com regra de fusão documentada e métrica declarada.",
    analise: {
      item: "Item FALSO. A deduplicação por descarte do histórico pode melhorar unicidade e degradar a completude histórica — a afirmação de que nada mais é afetado é o erro central.",
      leituraIncorreta: "Leitura que induz ao erro: tratar 'duplicidade' como defeito absoluto, ignorando que o registro antigo pode conter informação que o recente perdeu (endereço anterior, vínculo encerrado, evidência de auditoria)."
    },
    regra: "Dimensões de qualidade e requisitos de histórico podem entrar em conflito: toda intervenção deve declarar o ganho, a perda histórica e a métrica usada.",
    pegadinha: "A primeira metade do item é verdadeira ('melhora a unicidade') — o erro está na segunda ('não afeta outras dimensões'). Em C/E, basta uma proposição falsa para o item ser falso.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t2-s1 — Estágios do pipeline ---- */

  { id: "q-m7-19", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "avancado", topico: "m7-u2-t2-s1",
    assunto: "7.2 — Estágios do pipeline e reconciliação",
    contexto: "Após a carga, o total por unidade não fecha com a soma do detalhe. As duas fontes divergem sobre o mesmo fato e os nomes de unidade aparecem abreviados de formas diferentes.",
    enunciado: "O estágio em que a falha deve ser investigada e o que verificar são:",
    alternativas: [
      { letra: "A", texto: "Descarte — o prazo de retenção venceu e removeu linhas." },
      { letra: "B", texto: "Coleta — a origem sempre explica a divergência, sem necessidade de conferência posterior." },
      { letra: "C", texto: "Consumo — o painel deve corrigir o total manualmente para fechar." },
      { letra: "D", texto: "Armazenamento — a causa é sempre ausência de backup." },
      { letra: "E", texto: "Integração — chaves não padronizadas, granularidade divergente e regra de prevalência entre fontes." }
    ],
    gabarito: "E",
    justificativa: "O currículo responde a esse caso no estágio de integração (reconciliação): verificar chaves (unidade com nome abreviado divergente), granularidade (detalhe diário versus total mensal) e regra de prevalência entre fontes; a verificação é de consistência — a soma dos filhos deve igualar o total. Ajustar o painel manualmente mascara o erro e destrói a reprodutibilidade, e backup ou retenção não produzem divergência entre fonte e detalhe.",
    analise: {
      A: "INCORRETA. Descarte afeta disponibilidade futura, não a aritmética entre total e detalhe.",
      B: "INCORRETA. A origem pode estar correta; o enunciado aponta conflito entre fontes, tratado na integração.",
      C: "INCORRETA. Corrigir no consumo mascara o erro e impede auditoria — o currículo condena ajuste manual como validação.",
      D: "INCORRETA. Falha de backup se manifesta como perda, não como total que não fecha com o detalhe.",
      E: "CORRETA. Divergência entre fontes com chaves e granularidades distintas é falha de integração/reconciliação."
    },
    regra: "Integração reconcilia fontes: padronizar chaves, alinhar granularidade e definir qual fonte prevalece. Soma dos filhos deve igualar o total.",
    pegadinha: "'O painel está errado, então conserta no painel' é a armadilha: o consumo mostra o efeito, não a causa.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t2-s2 — ETL e ELT ---- */

  { id: "q-m7-21", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "basico", topico: "m7-u2-t2-s2",
    assunto: "7.2 — Ordem das operações em ETL",
    contexto: "A equipe descreve o fluxo de carga de dados no qual o tratamento ocorre fora do destino, que recebe apenas dados já tratados.",
    enunciado: "Esse fluxo corresponde a:",
    alternativas: [
      { letra: "A", texto: "ETL — extrair, transformar e carregar." },
      { letra: "B", texto: "ELT — extrair, carregar e transformar." },
      { letra: "C", texto: "Transformar, extrair e carregar, nessa ordem." },
      { letra: "D", texto: "Carregar, extrair e transformar, nessa ordem." },
      { letra: "E", texto: "Extrair e carregar, sem etapa de transformação." }
    ],
    gabarito: "A",
    justificativa: "O currículo define ETL como extrair → transformar → carregar: os dados são tratados FORA do destino e só entram prontos; a diferença que muda o gabarito é a posição da transformação em relação à carga. ELT inverte a ordem (carrega os dados antes de transformar, normalmente no destino). Existem arquiteturas EL em que a transformação é externa ou não faz parte daquele pipeline, mas elas não correspondem ao ETL descrito no enunciado.",
    analise: {
      A: "CORRETA. Transformação antes da carga caracteriza ETL.",
      B: "INCORRETA. ELT carrega bruto e transforma no destino — o oposto do descrito.",
      C: "INCORRETA. Não existe fluxo que transforme antes de extrair.",
      D: "INCORRETA. Carregar antes de extrair é impossível.",
      E: "INCORRETA. A alternativa não descreve o fluxo do enunciado: a transformação ocorre antes da carga. Embora existam arquiteturas EL, isso não corresponde ao ETL apresentado."
    },
    regra: "ETL: extrair → transformar → carregar. ELT: extrair → carregar → transformar.",
    pegadinha: "A pegadinha é acreditar que ELT não transforma — ele transforma depois, dentro do destino.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-33", modulo: 7, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "avancado", topico: "m7-u2-t2-s2",
    assunto: "7.2 — Escolha entre ETL e ELT por sensibilidade",
    contexto: "Dados sensíveis precisam ser tratados antes de qualquer armazenamento em ambiente analítico compartilhado, ainda que o destino tenha grande capacidade de processamento e armazenamento.",
    enunciado: "A escolha e a justificativa corretas são:",
    alternativas: [
      { letra: "A", texto: "ETL — a transformação ocorre antes da carga, evitando que dado sensível chegue bruto ao destino compartilhado." },
      { letra: "B", texto: "ELT — a capacidade do destino é o único critério relevante de decisão." },
      { letra: "C", texto: "ELT — porque ETL é tecnologia ultrapassada em qualquer cenário." },
      { letra: "D", texto: "ETL — porque ETL sempre carrega menos volume, independentemente da regra aplicada." },
      { letra: "E", texto: "Nenhum dos dois, pois anonimização não é uma transformação de dados." }
    ],
    gabarito: "A",
    justificativa: "O currículo registra que ETL é adequado quando o destino não deve receber bruto por sensibilidade, custo ou regra de negócio, e que, no caso de dados sensíveis que precisam ser tratados antes do armazenamento em ambiente compartilhado, o critério de privacidade prevalece sobre a capacidade técnica do destino. Também alerta que não vale a generalização 'ETL é ultrapassado e ELT é moderno': a escolha depende de volume, capacidade, auditoria, sensibilidade e custo.",
    analise: {
      A: "CORRETA. Privacidade e regra de negócio prevalecem: tratar antes de carregar é ETL.",
      B: "INCORRETA. Capacidade do destino é um dos critérios, não o único — e não se sobrepõe à sensibilidade.",
      C: "INCORRETA. O currículo rejeita expressamente essa generalização.",
      D: "INCORRETA. Volume depende da regra de transformação, não de uma propriedade fixa do ETL.",
      E: "INCORRETA. Anonimização é transformação — inclusive a razão de escolher ETL neste cenário."
    },
    regra: "ELT exige disciplina extra de governança porque o bruto fica guardado antes do tratamento; com dado sensível, ETL protege o destino.",
    pegadinha: "Argumento de 'modernidade' e de 'capacidade do destino' são distratores: o critério decisivo aqui é a sensibilidade.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t3-s1 — Valores ausentes ---- */

  { id: "q-m7-26", modulo: 7, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t3-s1",
    assunto: "7.2 — Ausência seletiva e viés de não-resposta",
    contexto: "Em pesquisa de satisfação, responderam apenas 20% dos usuários, e quem respondeu é majoritariamente quem ficou insatisfeito.",
    enunciado: "O tratamento adequado da ausência, nesse caso, é:",
    alternativas: [
      { letra: "A", texto: "Declarar o viés de não-resposta e limitar a conclusão ao que os dados suportam, pois a ausência depende do próprio valor investigado." },
      { letra: "B", texto: "Imputar a média das respostas, pois ela preserva a quantidade de registros." },
      { letra: "C", texto: "Imputar a moda das respostas, por ser a medida mais frequente." },
      { letra: "D", texto: "Substituir os ausentes por zero, que representa neutralidade." },
      { letra: "E", texto: "Divulgar a média dos que responderam como se representasse todos os usuários." }
    ],
    gabarito: "A",
    justificativa: "O currículo classifica a ausência em tipos e fixa o critério decisivo: se a ausência depende do valor ausente em si (pessoas insatisfeitas respondem mais), qualquer imputação cega introduz viés silencioso e a conduta correta é declarar a limitação, buscar nova coleta ou restringir a conclusão. No exemplo 'respondeu apenas quem ficou insatisfeito', o texto afirma explicitamente que não se deve imputar. Imputar média, moda ou zero, ou divulgar a média dos respondentes como se fosse de todos, mascara o problema.",
    analise: {
      A: "CORRETA. Ausência seletiva: declarar o viés e limitar a conclusão é a única conduta honesta.",
      B: "INCORRETA. Média imputada reduz variabilidade e projeta nos ausentes um padrão que não se observou.",
      C: "INCORRETA. Moda tem o mesmo problema: pressupõe que os ausentes se comportariam como os respondentes.",
      D: "INCORRETA. Zero não é neutralidade: é um valor com significado próprio e distorce médias e somas.",
      E: "INCORRETA. Isso é generalização indevida da amostra enviesada — exatamente o que o currículo condena."
    },
    regra: "Antes de imputar, classifique o mecanismo de ausência (MCAR, MAR ou MNAR). A imputação depende das hipóteses e do modelo; quando a ausência depende do próprio valor não observado, imputação simples não elimina o viés.",
    pegadinha: "Imputação parece 'cuidado com os dados', mas em ausência seletiva ela fabrica resultado.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-34", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "avancado", topico: "m7-u2-t3-s1",
    assunto: "7.2 — Contagem de ausência com zero substituto",
    contexto: "Base com 250 registros de salário. A conferência encontrou 15 células nulas explícitas, 3 com o texto 'N/A' e 5 com o valor 0 gravado por rotina de preenchimento automático, embora o salário não tenha sido medido em nenhum desses casos.",
    enunciado: "A taxa de ausência do campo e a completude correspondente são, respectivamente:",
    alternativas: [
      { letra: "A", texto: "9,2% e 90,8%, pois o zero substituto mascara ausência e deve ser contado como ausente." },
      { letra: "B", texto: "6,0% e 94,0%, contando apenas os nulos explícitos." },
      { letra: "C", texto: "7,2% e 92,8%, contando nulos e 'N/A', mas não o zero." },
      { letra: "D", texto: "2,0% e 98,0%, pois somente o zero indica ausência." },
      { letra: "E", texto: "0% e 100%, pois todos os registros possuem algum valor preenchido." }
    ],
    gabarito: "A",
    justificativa: "O currículo enumera as formas de ausência: nulo explícito, string vazia, marcador textual ('N/A', '-') e zero substituto — descrito como o pior caso, porque mascara ausência com aparência de medida. Somando as três formas: 15 + 3 + 5 = 23 ausentes em 250 registros → 23 ÷ 250 = 0,092 = 9,2% de ausência. A completude é o complemento: 227 ÷ 250 = 0,908 = 90,8%.",
    analise: {
      A: "CORRETA. 23 em 250 = 9,2% de ausência; completude de 90,8%.",
      B: "INCORRETA. Ignora o marcador textual e o zero substituto — subestima a ausência em 8 registros.",
      C: "INCORRETA. Exclui justamente o zero, que o currículo classifica como a pior forma de ausência.",
      D: "INCORRETA. Inverte o critério: os nulos explícitos são ausência evidente.",
      E: "INCORRETA. Preenchimento aparente não equivale a valor medido — é o erro que o zero substituto provoca."
    },
    regra: "Ausência inclui nulo explícito, string vazia, marcador textual e zero substituto. Completude = registros com valor efetivamente medido ÷ total.",
    pegadinha: "Contar só os nulos explícitos é o erro mais comum: zero gravado por rotina parece dado e infla artificialmente a completude.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t3-s2 — Duplicidades, inconsistências e erros de tipo ---- */

  { id: "q-m7-27", modulo: 7, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t3-s2",
    assunto: "7.2 — Erro de tipo e ordenação lexicográfica",
    contexto: "Uma coluna de quantidade foi importada como texto; ao ordenar os valores, o '10' aparece antes do '9'.",
    enunciado: "A causa é a comparação lexicográfica, caractere a caractere, típica de erro de tipo — e a correção é converter a coluna para numérico com relatório das falhas de conversão.",
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'importada como texto' combinado com '10 antes de 9': em comparação de texto, '1' < '9', exatamente a consequência silenciosa descrita no currículo.",
    justificativa: "O currículo descreve o erro de tipo e sua consequência silenciosa: número guardado como texto leva à comparação lexicográfica ('10' vem antes de '9' em ordem de texto), sem que o sistema avise. O tratamento indicado é conversão explícita com relatório de falhas — nunca coerção automática sem registro, para que linhas não conversíveis sejam listadas e corrigidas na origem.",
    analise: {
      item: "Item VERDADEIRO. Diagnóstico correto (erro de tipo) e conduta correta (conversão explícita com relatório de falhas).",
      leituraIncorreta: "Leitura que induz ao erro: atribuir o fenômeno à formatação de exibição ou ao banco de dados, quando a causa é o tipo da coluna — o sistema ordena o que recebe, e recebeu texto."
    },
    regra: "Coluna numérica importada como texto ordena lexicograficamente; corrigir exige conversão explícita com registro das falhas.",
    pegadinha: "Quem pensa em 'ajustar a visualização' não resolve: o problema está no tipo, e a correção precisa de conversão rastreável.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-35", modulo: 7, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m7-u2-t3-s2",
    assunto: "7.2 — Taxa de duplicidade e efeito em indicadores",
    contexto: "Após a carga, a base tem 1.000 linhas. A conferência por chave normalizada (CPF) identificou 940 entidades distintas.",
    enunciado: "A taxa de duplicidade e o efeito sobre um indicador de contagem de pessoas são:",
    alternativas: [
      { letra: "A", texto: "6% (60 linhas excedentes em 1.000), com superestimação da contagem em 60 registros." },
      { letra: "B", texto: "6% (60 linhas excedentes em 1.000), com subestimação da contagem em 60 registros." },
      { letra: "C", texto: "60% e superestimação da contagem em 600 registros." },
      { letra: "D", texto: "0,6% e nenhum efeito sobre a contagem." },
      { letra: "E", texto: "6% e nenhum efeito, pois a chave foi normalizada antes da conferência." }
    ],
    gabarito: "A",
    justificativa: "Linhas excedentes = 1.000 − 940 = 60; taxa de duplicidade = 60 ÷ 1.000 = 6%. Como a contagem simples de linhas soma registros repetidos, o indicador 'número de pessoas' fica inflado em 60 — exatamente o tipo de distorção que o currículo associa à violação de unicidade (contagens e somas superestimadas). A normalização da chave não elimina a duplicidade: ela apenas permitiu detectá-la.",
    analise: {
      A: "CORRETA. 60 excedentes em 1.000 linhas = 6%; repetição infla contagens.",
      B: "INCORRETA. Duplicidade aumenta a contagem, não a reduz.",
      C: "INCORRETA. Erro de escala: 60 ÷ 1.000 = 0,06, não 0,60.",
      D: "INCORRETA. Erro de escala na porcentagem e conclusão falsa sobre o efeito.",
      E: "INCORRETA. Normalizar a chave é técnica de detecção; sem remoção/fusão a linha duplicada permanece."
    },
    regra: "Taxa de duplicidade = (linhas − entidades distintas) ÷ linhas. Duplicatas inflam contagens e somas.",
    pegadinha: "Trocar o denominador (dividir por 940) ou errar a casa decimal são os dois desvios mais frequentes nesse cálculo.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t3-s3 — Normalização estatística ---- */

  { id: "q-m7-28", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t3-s3",
    assunto: "7.2 — Padronização por z-score",
    contexto: "Duas provas com escalas distintas: na primeira, nota 85, com média 70 e desvio padrão 10; na segunda, nota 70, com média 60 e desvio padrão 5.",
    enunciado: "Os z-scores correspondentes e a conclusão correta são:",
    alternativas: [
      { letra: "A", texto: "1,5 e 2,0 — o desempenho relativo na segunda prova é melhor, embora a nota absoluta seja menor." },
      { letra: "B", texto: "1,5 e 1,4 — o desempenho na primeira prova é melhor." },
      { letra: "C", texto: "15 e 10 — os valores não são comparáveis." },
      { letra: "D", texto: "0,85 e 0,70 — o desempenho na primeira prova é melhor." },
      { letra: "E", texto: "1,5 e 2,0 — o desempenho na primeira prova é melhor, pois 85 > 70." }
    ],
    gabarito: "A",
    justificativa: "Pelo currículo, z = (x − média) ÷ desvio padrão. Primeira prova: (85 − 70) ÷ 10 = 1,5. Segunda: (70 − 60) ÷ 5 = 2,0. O z-score é medido em desvios-padrão da média, o que permite comparar variáveis com unidades e escalas diferentes: a segunda nota está 2,0 desvios acima da sua média, contra 1,5 da primeira — desempenho relativo melhor, ainda que o valor absoluto seja menor.",
    analise: {
      A: "CORRETA. Cálculo exato e interpretação correta do z-score como posição relativa.",
      B: "INCORRETA. O segundo z-score é 2,0 — 10 ÷ 5 = 2, e não 1,4.",
      C: "INCORRETA. Subtraiu sem dividir pelo desvio padrão e concluiu, indevidamente, que não há comparação.",
      D: "INCORRETA. Confundiu nota normalizada por 100 com z-score.",
      E: "INCORRETA no conjunto: o cálculo está correto, mas a conclusão está errada; valor absoluto maior não significa melhor desempenho relativo."
    },
    regra: "z = (x − média) ÷ desvio padrão: mede quantos desvios-padrão o valor está acima (ou abaixo) da média.",
    pegadinha: "A alternativa com os dois valores certos e conclusão invertida existe de propósito: em prova, o cálculo sozinho não garante o ponto.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-36", modulo: 7, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "avancado", topico: "m7-u2-t3-s3",
    assunto: "7.2 — Redimensionamento min-max e valores fora da faixa",
    contexto: "Uma variável foi redimensionada por min-max a partir de mínimo 60 e máximo 100. Depois, entraram dois registros novos: 110 e 40.",
    enunciado: "Os valores transformados são, respectivamente, e o que eles revelam é:",
    alternativas: [
      { letra: "A", texto: "1,25 e −0,50 — a régua foi rompida porque os parâmetros foram calculados com dados anteriores." },
      { letra: "B", texto: "1,00 e 0,00 — o min-max trava os extremos por definição." },
      { letra: "C", texto: "1,10 e 0,40 — basta dividir cada valor por 100." },
      { letra: "D", texto: "1,25 e 0,00 — valores abaixo do mínimo viram zero." },
      { letra: "E", texto: "0,25 e 0,50 — resultado de (x − 100) ÷ 40." }
    ],
    gabarito: "A",
    justificativa: "Pelo currículo, x' = (x − mínimo) ÷ (máximo − mínimo). Para 110: (110 − 60) ÷ 40 = 50 ÷ 40 = 1,25. Para 40: (40 − 60) ÷ 40 = −20 ÷ 40 = −0,50. O próprio currículo registra que um valor fora da faixa produz resultado fora de [0; 1] — 'sinal de que a escala foi rompida', típico ao aplicar a fórmula a dados não vistos no cálculo dos parâmetros (limitação: os parâmetros dependem da amostra).",
    analise: {
      A: "CORRETA. Cálculo exato e leitura correta da limitação do método.",
      B: "INCORRETA. A fórmula é linear; ela não trunca valores fora dos extremos usados no ajuste.",
      C: "INCORRETA. Dividir por 100 não é min-max e ignora mínimo e máximo da amostra.",
      D: "INCORRETA. Não há truncamento em zero na fórmula apresentada no currículo.",
      E: "INCORRETA. Fórmula com sinal invertido e deslocamento errado."
    },
    regra: "min-max: x' = (x − min) ÷ (max − min); min → 0, max → 1, e valores fora da faixa geram resultados fora de [0; 1].",
    pegadinha: "Achar que min-max 'garante' o intervalo [0;1] para qualquer dado futuro é a armadilha: a garantia vale só para a amostra que fixou os parâmetros.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t3-s4 — Normalização de bancos de dados ---- */

  { id: "q-m7-29", modulo: 7, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t3-s4",
    assunto: "7.2 — Primeira forma normal (1FN)",
    contexto: "A tabela CLIENTE possui a coluna 'telefones', com o conteúdo '99999-0001, 3333-0002' em uma única célula.",
    enunciado: "A forma normal violada e a correção adequada são:",
    alternativas: [
      { letra: "A", texto: "1FN — valor não atômico; a correção é criar uma tabela TELEFONES ligada ao cliente." },
      { letra: "B", texto: "2FN — dependência parcial; basta dividir a coluna em duas pela metade da chave." },
      { letra: "C", texto: "3FN — dependência transitória; criar uma tabela de estados." },
      { letra: "D", texto: "Nenhuma forma normal, pois listas são permitidas em tabelas relacionais." },
      { letra: "E", texto: "2FN e 3FN simultaneamente, pois toda lista gera dependência transitória." }
    ],
    gabarito: "A",
    justificativa: "O currículo define 1FN como valores atômicos, sem lista ou repetição em célula, e usa exatamente esse exemplo — coluna 'telefones' com dois números viola 1FN, e a correção é uma tabela TELEFONES ligada ao cliente. 2FN trata de dependência parcial em chave composta, 3FN de dependência transitória; nenhuma delas é o problema descrito.",
    analise: {
      A: "CORRETA. Célula multivalorada viola atomicidade (1FN); a solução é tabela separada com chave estrangeira.",
      B: "INCORRETA. Não há chave composta nem dependência parcial em jogo.",
      C: "INCORRETA. Dependência transitória é outro fenômeno (coluna não-chave dependendo de outra não-chave).",
      D: "INCORRETA. O modelo relacional parte de valores atômicos; listas em célula são justamente a violação.",
      E: "INCORRETA. Lista não implica dependência transitória — a classificação é indevida."
    },
    regra: "1FN: valores atômicos. 2FN: sem dependência parcial da chave composta. 3FN: sem dependência transitória.",
    pegadinha: "Separar em duas colunas 'telefone1' e 'telefone2' não resolve de verdade: apenas desloca a repetição para o esquema.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-37", modulo: 7, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m7-u2-t3-s4",
    assunto: "7.2 — Os dois sentidos de normalização",
    contexto: "Em uma reunião, dois analistas usam a palavra 'normalização' para coisas diferentes e passam a discordar sem necessidade.",
    enunciado: "A distinção correta entre os dois sentidos, conforme o currículo, é:",
    alternativas: [
      { letra: "A", texto: "A normalização estatística altera a escala dos valores de uma variável (z-score, min-max); a de banco de dados altera a organização das tabelas (1FN, 2FN, 3FN), sem alterar valores." },
      { letra: "B", texto: "Ambas alteram valores e estrutura, diferindo apenas na ferramenta utilizada." },
      { letra: "C", texto: "A de banco de dados leva os valores para a faixa [0; 1]; a estatística elimina redundância entre tabelas." },
      { letra: "D", texto: "A estatística elimina dependências parciais; a de banco de dados calcula desvios-padrão." },
      { letra: "E", texto: "São sinônimos: as duas apenas padronizam formatos de apresentação." }
    ],
    gabarito: "A",
    justificativa: "O currículo formula o contraste de modo explícito: normalização ESTATÍSTICA muda a ESCALA dos valores de uma variável; normalização de BANCOS muda a ORGANIZAÇÃO das tabelas. Um domínio fala de valores, o outro de esquema — e a regra mnemônica registrada é que a normalização estatística 'mexe nos números, nunca na estrutura das tabelas'. As alternativas B a E trocam os domínios entre si ou reduzem ambas a formatação.",
    analise: {
      A: "CORRETA. Escala de valores versus organização de tabelas: a distinção exata do currículo.",
      B: "INCORRETA. A normalização de banco não altera valores; a estatística não altera esquema.",
      C: "INCORRETA. Inverte os dois sentidos.",
      D: "INCORRETA. Dependência parcial é tema de formas normais; desvio-padrão, de estatística.",
      E: "INCORRETA. Não são sinônimos nem se resumem a padronizar apresentação."
    },
    regra: "Normalização estatística = escala dos valores (z-score, min-max). Normalização de BD = organização das tabelas (1FN/2FN/3FN).",
    pegadinha: "A pergunta da prova revela o sentido: se aparecer 'z-score/min-max', é estatística; se aparecer 'redundância/dependência parcial', é banco de dados.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t4-s1 — Agregação e agrupamento ---- */

  { id: "q-m7-38", modulo: 7, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "avancado", topico: "m7-u2-t4-s1",
    assunto: "7.2 — O erro da média de médias",
    contexto: "Turma A: 10 alunos, média 5. Turma B: 30 alunos, média 7. O relatório divulgou 'média geral = (5 + 7) ÷ 2 = 6,0'.",
    enunciado: "Sobre esse cálculo, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "Está errado: a média global é ponderada pelo tamanho dos grupos, (10×5 + 30×7) ÷ 40 = 6,5." },
      { letra: "B", texto: "Está correto: a média das médias sempre coincide com a média global." },
      { letra: "C", texto: "Está errado porque o correto seria usar a mediana das duas médias." },
      { letra: "D", texto: "Está correto apenas quando os grupos têm tamanhos diferentes." },
      { letra: "E", texto: "Está errado porque o resultado deveria ser multiplicado pelo número de grupos." }
    ],
    gabarito: "A",
    justificativa: "O currículo trata o caso como erro clássico de concurso: somar médias e dividir pelo número de grupos só está certo se todos os grupos tiverem o mesmo tamanho; caso contrário, a média correta é ponderada. Com os números do próprio currículo: (10×5 + 30×7) ÷ 40 = 260 ÷ 40 = 6,5, contra 6,0 da média simples das médias. Mediana de médias não é agregação válida, e o erro não depende de os grupos serem iguais — ao contrário.",
    analise: {
      A: "CORRETA. Ponderação pelo tamanho do grupo, com o resultado exato (6,5).",
      B: "INCORRETA. A igualdade só vale com grupos de mesmo tamanho — e aqui são 10 e 30.",
      C: "INCORRETA. Mediana de medianas (ou de médias) não é a mediana do conjunto; o problema é de ponderação.",
      D: "INCORRETA. A afirmação inverte a condição: é justamente com tamanhos diferentes que a média simples erra.",
      E: "INCORRETA. Multiplicar por 2 transformaria 6,0 em 12,0, valor sem qualquer significado."
    },
    regra: "Média global = Σ(nᵢ × médiaᵢ) ÷ Σnᵢ. Média simples das médias só vale com grupos de igual tamanho.",
    pegadinha: "Mediana e percentis não são agregáveis por média: a mediana de medianas não é a mediana do todo.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u2-t4-s2 — Deduplicação ---- */

  { id: "q-m7-31", modulo: 7, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m7-u2-t4-s2",
    assunto: "7.2 — Falso negativo na deduplicação",
    contexto: "A deduplicação usou apenas o nome sem normalização. A mesma pessoa permaneceu duas vezes na base porque foi grafada 'Jose' e 'José'.",
    enunciado: "Esse resultado é classificado como:",
    alternativas: [
      { letra: "A", texto: "Falso negativo: a mesma entidade real permanece duplicada." },
      { letra: "B", texto: "Falso positivo: duas pessoas distintas foram fundidas em uma." },
      { letra: "C", texto: "Violação de validade do campo nome." },
      { letra: "D", texto: "Erro de tipo na conversão de datas." },
      { letra: "E", texto: "Falha de tempestividade na carga." }
    ],
    gabarito: "A",
    justificativa: "O currículo define os dois erros fundamentais da deduplicação: falso positivo (fundir duas pessoas diferentes — homônimos, gêmeos) e falso negativo (deixar a mesma pessoa duplicada por diferença de grafia). 'Jose' e 'José' são a mesma pessoa, e a regra não normalizou acento: falso negativo. Também registra a mitigação: usar chave normalizada ou identificador confiável, e não apenas similaridade de nome.",
    analise: {
      A: "CORRETA. Entidade não fundida por variação de grafia = falso negativo.",
      B: "INCORRETA. Nada foi fundido; o registro permaneceu duplicado.",
      C: "INCORRETA. Grafia correta do nome não é problema de domínio.",
      D: "INCORRETA. Datas não participam do caso descrito.",
      E: "INCORRETA. O problema é de identidade, não de prazo de disponibilização."
    },
    regra: "Falso positivo = fundir quem não devia; falso negativo = não fundir quem devia. Nome sem normalização produz falso negativo.",
    pegadinha: "O sentido dos dois erros é trocado com frequência em prova: 'positivo' é a fusão, 'negativo' é a duplicata que sobra.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-23", modulo: 7, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m7-u2-t1-s2",
    assunto: "7.2 — Efeito da duplicidade nos indicadores",
    contexto: "O mesmo formulário foi reenviado três vezes e a rotina de carga executou duas vezes no mesmo dia, gerando linhas idênticas na base.",
    enunciado: "O efeito imediato é a violação de unicidade, com superestimação das contagens e das somas calculadas sobre a base.",
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é 'linhas idênticas na base' por reenvio e carga dupla: são as causas típicas de duplicidade apontadas no currículo, cuja dimensão correspondente é a unicidade (taxa de duplicatas).",
    justificativa: "O currículo lista reenvio de formulário e carga executada duas vezes entre as causas típicas de duplicidade, define unicidade como 'cada entidade real aparece uma única vez' e indica a métrica — taxa de duplicatas. Como contagens e somas operam sobre linhas, registros repetidos inflam os resultados.",
    analise: {
      item: "Item VERDADEIRO. Causa típica identificada, dimensão correta (unicidade) e efeito coerente (contagem e soma superestimadas).",
      leituraIncorreta: "Leitura que induz ao erro: supor que duplicidade afeta apenas espaço de armazenamento, sem impacto em indicadores — em relatórios, ela distorce totais."
    },
    regra: "Duplicidade de linhas infla contagens e somas; unicidade se mede por taxa de duplicatas.",
    pegadinha: "A palavra 'imediato' no item é deliberada: o efeito sobre indicadores é direto, sem precisar de outra etapa.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ====== 7.3 Governança, Anonimização e Proteção de Dados ====== */

  /* ---- m7-u3-t1-s1 — Anonimização x pseudonimização ---- */

  { id: "q-m7-22", modulo: 7, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m7-u3-t1-s1",
    assunto: "7.3 — Limite entre anonimização e pseudonimização",
    contexto: "Para analisar uma base de saúde, a equipe substituiu o CPF por um código (id_token) e guardou, em cofre com acesso restrito, a tabela que liga cada código ao CPF.",
    enunciado: "Nesse caso, houve anonimização, e a base deixou de conter dado pessoal.",
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'guardou ... a tabela que liga cada código ao CPF': a existência de chave de reatribuição é exatamente o que separa pseudonimização de anonimização, e o currículo afirma que a chave é o critério decisivo.",
    justificativa: "O currículo distingue anonimização — processo que torna o titular não identificável considerando os meios técnicos razoáveis e disponíveis no contexto — de pseudonimização, que substitui o identificador por código enquanto mantém uma tabela de reatribuição separada e protegida. Como a chave continua disponível, a identificação permanece possível para quem a detém e os dados continuam sendo pessoais. 'Anonimizar mantendo a chave em cofre' é pseudonimização.",
    analise: {
      item: "Item FALSO. Com a tabela de correspondência preservada, há reatribuição possível: é pseudonimização, medida de segurança, e o dado permanece pessoal.",
      leituraIncorreta: "Leitura que induz ao erro: concluir que 'saiu o CPF, então anonimizou'. Remover o identificador direto é o primeiro passo, não a descaracterização."
    },
    regra: "Anonimização: a identificação não é razoavelmente possível com os meios disponíveis no contexto. Pseudonimização: há chave de reatribuição — o dado continua pessoal.",
    pegadinha: "O cofre protege a chave, mas não a elimina: proteção de acesso não transforma pseudonimização em anonimização; a avaliação de anonimização depende dos meios razoáveis de identificação disponíveis no contexto.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-39", modulo: 7, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m7-u3-t1-s2",
    assunto: "7.3 — Quasi-identificadores e ataque de recorte",
    contexto: "Uma prefeitura publicou microdados de atendimento sem nome nem CPF, mantendo idade exata, CEP completo, cargo e data de atendimento.",
    enunciado: "Como os identificadores diretos foram removidos, o risco de reidentificação é nulo e a publicação dispensa avaliação de risco.",
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é 'sem nome nem CPF, mantendo idade exata, CEP completo, cargo e data de atendimento': esses quatro campos são quasi-identificadores, e a combinação deles restringe o recorte até um indivíduo — é o mecanismo do ataque de recorte descrito no currículo.",
    justificativa: "O currículo define reidentificação como o processo de voltar a identificar titulares em bases supostamente anônimas usando quasi-identificadores (idade, sexo, CEP, data de nascimento, cargo, lotação, data de atendimento), cujo efeito é reduzir o espaço de candidatos — com recorte de 1 ou 2 pessoas, a identidade é trivial. Também afirma que anonimização é medida de risco, não garantia absoluta, e que a publicação exige avaliação de risco contemporânea.",
    analise: {
      item: "Item FALSO. Granularidade fina de quasi-identificadores mantém o risco alto; remover nome e CPF não encerra a análise.",
      leituraIncorreta: "Leitura que induz ao erro: tratar 'não tem nome nem CPF' como sinônimo de 'anônimo', ignorando o poder de combinação dos atributos remanescentes."
    },
    regra: "Quasi-identificadores combinados reidentificam. Mitigações: agregar, suprimir atributos raros, garantir tamanho mínimo de grupo e testar reidentificação antes de publicar.",
    pegadinha: "'Risco nulo' é expressão que praticamente denuncia o item falso: anonimização é gestão de risco, não garantia.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u3-t2-s1 — Governança de dados ---- */

  { id: "q-m7-30", modulo: 7, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m7-u3-t2-s1",
    assunto: "7.3 — Papéis de governança",
    contexto: "Duas áreas calculam o mesmo indicador de formas diferentes, e a discussão passa a ser sobre números, não sobre a decisão apoiada.",
    enunciado: "Cabe ao dono do dado definir a regra de negócio do indicador e responder por ela, cabendo ao steward registrar a definição no dicionário e no catálogo.",
    gabarito: "certo",
    trechoDeterminante: "O trecho que torna o item VERDADEIRO é a atribuição de papéis: o currículo define o dono como accountable pelo conteúdo, pelas regras de negócio e pela qualidade de seu domínio, e o steward como executor que mantém metadados, dicionário e qualidade.",
    justificativa: "O currículo descreve a governança como conjunto de políticas, papéis, padrões e processos, com papéis definidos: dono do dado (conteúdo, regras de negócio, qualidade), steward (executa: metadados, dicionário, qualidade, dúvidas de significado), encarregado (privacidade e titulares), arquiteto/engenheiro (modela, transforma, documenta) e comitê (resolve conflitos e prioriza). O exemplo do indicador divergente termina justamente com o dono definindo a regra e o steward registrando-a.",
    analise: {
      item: "Item VERDADEIRO. Reproduz a divisão de responsabilidades do currículo sem inverter papéis nem atribuir a definição à ferramenta.",
      leituraIncorreta: "Leitura que induz ao erro: supor que a definição do indicador pertence à área que consome o número ou ao fornecedor da ferramenta, e não ao dono do domínio."
    },
    regra: "Dono do dado responde pelo conteúdo, regras e qualidade; steward executa e mantém metadados, dicionário e catálogo.",
    pegadinha: "Governança não é sinônimo de catálogo: catálogo é instrumento; governança é o sistema de decisões que o mantém útil.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  { id: "q-m7-40", modulo: 7, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m7-u3-t2-s2",
    assunto: "7.3 — Acesso temporário e minimização",
    contexto: "Permissões de acesso a uma base de dados pessoais foram concedidas em situação de urgência, há oito meses, e nunca foram revistas. A análise em curso usa apenas faixa etária, mas a base entrega também data de nascimento, endereço e telefone.",
    enunciado: "As duas falhas descritas são, respectivamente:",
    alternativas: [
      { letra: "A", texto: "Acesso temporário que virou privilégio permanente, por falta de expiração e revisão; e desvio de minimização, pois se entrega dado não necessário à finalidade." },
      { letra: "B", texto: "Excesso de auditoria e ausência de backup." },
      { letra: "C", texto: "Falha de tempestividade e violação de unicidade." },
      { letra: "D", texto: "Erro de tipo na coluna de data e duplicidade de cadastros." },
      { letra: "E", texto: "Problema de formato de data e de domínio de UF." }
    ],
    gabarito: "A",
    justificativa: "O currículo registra que permissão concedida em situação de urgência deve ser revogada quando a urgência terminar, porque acessos temporários que não expiram viram privilégio permanente — falha clássica de controle de acesso. Quanto à minimização, o exemplo do próprio currículo é coletar data de nascimento quando a análise usa apenas faixa etária: guardar/entregar o que não é necessário à finalidade é desvio de proporcionalidade. Nada no enunciado trata de auditoria, backup, prazo, duplicidade, tipo de dado ou domínio.",
    analise: {
      A: "CORRETA. Identifica os dois controles violados: expiração/revisão de acesso e necessidade (minimização).",
      B: "INCORRETA. Não há indício de auditoria excessiva nem de falta de backup.",
      C: "INCORRETA. Nenhum elemento temporal de disponibilidade nem repetição de registros é citado.",
      D: "INCORRETA. Não se menciona tipo de coluna nem cadastro repetido.",
      E: "INCORRETA. Formato de data e domínio de UF são temas de validade, ausentes do caso."
    },
    regra: "Acesso: menor privilégio, com expiração e revisão periódica. Minimização: usar e entregar apenas o necessário à finalidade declarada.",
    pegadinha: "Minimização não é 'apagar tudo o mais rápido possível': é proporcionalidade entre finalidade, necessidade e prazo — inclusive para preservar evidência de auditoria.",
    fonte: "NIST SP 1500-18 (Research Data Framework, RDaF) — qualidade, metadados e governança de dados: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html (verificado em 2026-10-26)."
  },

  /* ---- m7-u3-t2-s3 — LGPD ---- */

  { id: "q-m7-32", modulo: 7, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m7-u3-t2-s3",
    assunto: "7.3 — LGPD: controlador, operador e segurança",
    contexto: "Um órgão público revisa seu programa de proteção de dados à luz da Lei nº 13.709/2018 (LGPD).",
    enunciado: "Segundo a LGPD, o operador decide sobre o tratamento dos dados pessoais e o controlador apenas executa as instruções, sem responsabilidade por medidas de segurança.",
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é a inversão de papéis — 'o operador decide ... e o controlador apenas executa': o currículo registra que o controlador decide sobre o tratamento e o operador trata em nome do controlador, e que o art. 46 atribui a ambos o dever de adotar medidas de segurança.",
    justificativa: "O currículo M7 registra, a partir da LGPD (Lei nº 13.709/2018), as definições centrais: dado pessoal (pessoa natural identificada ou identificável, art. 5º), titular, controlador (decide sobre o tratamento) e operador (trata em nome do controlador), além das finalidades e bases legais (arts. 2º a 4º). O art. 46 determina que controlador e operador adotem medidas de segurança e técnicas aptas a proteger os dados pessoais. Inverter os papéis e excluir a responsabilidade do controlador contraria esse quadro. A conferência do texto legal neste projeto está registrada em referencias/referencias-verificadas.md (verificação de 2026-10-20, fonte oficial do Planalto).",
    analise: {
      item: "Item FALSO. Dupla incorreção: inverte controlador/operador e afasta o dever de segurança, que alcança os dois.",
      leituraIncorreta: "Leitura que induz ao erro: supor que só quem 'hospeda' ou 'processa' responde por segurança, quando o art. 46 alcança controlador e operador."
    },
    regra: "LGPD: controlador decide sobre o tratamento; operador trata em nome do controlador; ambos respondem por medidas de segurança (art. 46).",
    pegadinha: "Questão de papéis é resolvida pela pergunta 'quem decide?': decidir é do controlador, sempre.",
    fonte: "LGPD — Lei nº 13.709/2018 (Planalto): https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm (verificado em 2026-10-26)."
  }

];
