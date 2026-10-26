/* questions_m6.js — MÓDULO 6: ÉTICA E RESPONSABILIDADE DIGITAL NO SERVIÇO PÚBLICO
 * 44 questões autorais (origem: 'autoral' sempre — o campo 'estilo' registra apenas
 * o FORMATO DE COBRANÇA inspirado em banca, nunca atribuição a banca real).
 * Distribuição atual: 6.1 Princípios (10), 6.2 Transparência/LAI/Governo Digital (14),
 * 6.3 Proteção de dados e sigilo (7), 6.4 Redes sociais e conduta (4),
 * 6.5 Acessibilidade e inclusão (3), 6.6 Automação e supervisão (6).
 * Níveis medidos no banco atual: 12 básicos, 18 intermediários e 14 avançados.
 * Formatos: 34 múltipla escolha + 10 certo/errado. Estilo indica apenas formato de cobrança,
 * não atribuição a banca real; todas as questões são autorais.
 * Tópicos: cada 'topico' é um id REAL de subtópico de curriculum_m6.js
 * (esquema m6-u{unidade}-t{topico}-s{subtopico}), conferido por script em 2026-10-22.
 * BASE NORMATIVA: apenas dispositivos conferidos em referencias/referencias-verificadas.md
 * (LAI 12.527/2011; Lei 14.129/2021; CF art. 37, caput, e art. 5º, XXXIII; LGPD arts. 1º,
 * 2º, 3º, 4º, 5º, 17, 18 e 46 — verificação de 2026-10-20/21). Dispositivos não conferidos
 * são referidos de forma genérica, sem número de artigo.
 * Formato compatível com quiz-engine.js (mesmo schema de questions.js e questions_m8.js). */

const moduleQuestions6 = [

  /* ---- 6.1 Princípios constitucionais aplicados a sistemas digitais (10) ---- */

  { id: "q-m6-01", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m6-u1-t1-s2", assunto: "6.1 — Legalidade administrativa",
    contexto: "O art. 37, caput, da Constituição Federal enumera os princípios a que se submete a administração pública direta e indireta.",
    enunciado: "Sobre o princípio da legalidade aplicado à Administração Pública, assinale a alternativa correta.",
    alternativas: [
      { letra: "A", texto: "A Administração pode praticar qualquer ato que a lei não proíba, como ocorre nas relações entre particulares." },
      { letra: "B", texto: "A legalidade autoriza o gestor a afastar a norma quando a medida se mostrar mais eficiente." },
      { letra: "C", texto: "A Administração só pode praticar atos previstos ou autorizados em norma, observando a competência e o procedimento definidos." },
      { letra: "D", texto: "A legalidade se satisfaz com a existência de dotação orçamentária para a despesa pretendida." },
      { letra: "E", texto: "A legalidade impede que o Poder Executivo edite atos normativos de regulamentação." }
    ],
    gabarito: "C",
    justificativa: "A legalidade administrativa submete a atuação pública à Constituição e às normas aplicáveis, inclusive quanto à competência e ao procedimento. A alternativa A transpõe indevidamente para a Administração a lógica geral de liberdade dos particulares; B erra porque eficiência não autoriza descumprir a lei; C está correta; D confunde legalidade com disponibilidade orçamentária, que não basta para autorizar o ato; E erra porque o poder regulamentar pode ser exercido nos limites legais.",
    analise: {
      A: "INCORRETA. Erro conceitual de inversão de regimes: no direito privado, o que não é proibido é permitido; na Administração, só é permitido o que a norma autoriza.",
      B: "INCORRETA. Erro conceitual de confusão entre princípios: eficiência não é autorização para descumprir a lei — não há eficiência legítima contra a legalidade.",
      C: "CORRETA. Traduz a legalidade como submissão à norma, com competência e procedimento — a formulação compatível com o art. 37, caput, da CF/88.",
      D: "INCORRETA. Erro conceitual de redução: dotação orçamentária é requisito de execução da despesa, não fundamento de validade do ato.",
      E: "INCORRETA. Erro conceitual de inversão: o poder regulamentar é forma de concretizar a lei, e não conduta vedada pela legalidade."
    },
    regra: "Legalidade administrativa: a Administração só faz o que a norma autoriza e como a norma autoriza — competência e procedimento incluídos.",
    pegadinha: "A alternativa A é a 'lógica do particular' transplantada para o Poder Público; é o distrator mais recorrente em prova de princípios.",
    fonte: "CF/88, art. 37, caput (verificado em referencias/referencias-verificadas.md, 2026-10-21)."
  },

  { id: "q-m6-02", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "basico", topico: "m6-u1-t1-s2", assunto: "6.1 — Impessoalidade e critérios de priorização",
    contexto: "Um órgão define, em sistema, a ordem de análise dos requerimentos de um benefício.",
    enunciado: "À luz do princípio da impessoalidade, os critérios de priorização de atendimento devem ser",
    alternativas: [
      { letra: "A", texto: "definidos caso a caso pelo servidor que opera o sistema, conforme sua avaliação do requerente." },
      { letra: "B", texto: "mantidos sob sigilo, para evitar que os cidadãos controvertam a ordem da fila." },
      { letra: "C", texto: "definidos previamente, escritos, comunicáveis ao cidadão e auditáveis, vedado o favorecimento por vínculo pessoal." },
      { letra: "D", texto: "idênticos para todos os requerentes, ainda que a lei determine tratamento diferenciado." },
      { letra: "E", texto: "definidos pelo fornecedor do sistema, que responde tecnicamente pela ordem de atendimento." }
    ],
    gabarito: "C",
    justificativa: "Impessoalidade exige que a Administração aplique critérios objetivos, previamente definidos e compatíveis com a lei, sem favorecimento pessoal. A alternativa A permite arbítrio individual; B propõe sigilo injustificado dos critérios; C está correta ao exigir critérios comunicáveis e auditáveis; D confunde impessoalidade com resultado idêntico e ignora diferenciações legalmente exigidas; E transfere indevidamente ao fornecedor uma decisão que compete ao órgão.",
    analise: {
      A: "INCORRETA. Erro conceitual: decisão caso a caso por preferência do operador é exatamente o arbítrio que a impessoalidade veda.",
      B: "INCORRETA. Erro conceitual duplo: sigilo do critério impede demonstrar igualdade de tratamento (impessoalidade) e contraria a publicidade do modo de decidir.",
      C: "CORRETA. Critério prévio, escrito, comunicável e auditável é a tradução operacional da impessoalidade em sistemas.",
      D: "INCORRETA. Erro conceitual: confunde impessoalidade formal com resultado idêntico; a lei admite e às vezes exige tratamento diferenciado por razões legítimas.",
      E: "INCORRETA. Erro conceitual de imputação: o fornecedor executa tecnicamente; a definição do critério e a responsabilidade pelo ato são do órgão."
    },
    regra: "Impessoalidade = mesmo critério para casos iguais, com critério escrito, comunicável e auditável; não é indiferença nem resultado uniforme.",
    pegadinha: "'Tratar todos exatamente igual' parece elogio e é erro: o que se exige é igualdade de critério, não de resultado.",
    fonte: "CF/88, art. 37, caput; Lei nº 14.129/2021, art. 3º, IV e VII (transparência na execução dos serviços e linguagem clara; verificado em 2026-10-21)."
  },

  { id: "q-m6-03", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m6-u1-t1-s2", assunto: "6.1 — Finalidade e adequação no tratamento de dados",
    contexto: "Um órgão coleta dados pessoais para prestar atendimento a cidadãos. Sem informar essa finalidade adicional, sem demonstrar compatibilidade com a finalidade pública do serviço e sem identificar fundamento jurídico aplicável, uma equipe decide reutilizar os registros para classificar individualmente o desempenho dos usuários do serviço.",
    enunciado: "Considerando os princípios da finalidade e da adequação da LGPD e as regras aplicáveis ao tratamento de dados pelo poder público, qual avaliação é correta?",
    alternativas: [
      { letra: "A", texto: "A reutilização descrita é incompatível com o regime de proteção de dados, pois a finalidade adicional não foi informada nem demonstrada como compatível com a finalidade pública e com um fundamento jurídico aplicável." },
      { letra: "B", texto: "A reutilização é automaticamente válida se os critérios de classificação forem públicos e aplicados de modo impessoal." },
      { letra: "C", texto: "A reutilização é automaticamente válida porque o órgão já coletou legitimamente os dados para o atendimento." },
      { letra: "D", texto: "A reutilização é sempre proibida, mesmo quando houver finalidade pública compatível, fundamento jurídico e transparência." },
      { letra: "E", texto: "A reutilização torna-se válida apenas porque uma pessoa revisa manualmente a classificação produzida." }
    ],
    gabarito: "A",
    justificativa: "A LGPD exige propósitos legítimos, específicos, explícitos e informados, compatibilidade entre o tratamento e as finalidades informadas e limitação ao mínimo necessário (art. 6º, I a III). Para o poder público, o art. 23 também exige finalidade pública e tratamento orientado às competências ou atribuições legais, com informação clara sobre previsão legal, finalidade, procedimentos e práticas. No cenário, a equipe não informou a finalidade adicional nem demonstrou sua compatibilidade ou o fundamento jurídico aplicável. Isso não significa que toda reutilização seja proibida: ela precisa ser avaliada à luz da finalidade pública, da base jurídica, da adequação, da necessidade e da transparência.",
    analise: {
      A: "CORRETA. Identifica a ausência de informação e de demonstração de compatibilidade e fundamento jurídico no cenário apresentado.",
      B: "INCORRETA. Publicidade e impessoalidade dos critérios não substituem os requisitos da LGPD para a finalidade e o tratamento pelo poder público.",
      C: "INCORRETA. A coleta legítima para uma finalidade não autoriza automaticamente qualquer uso posterior.",
      D: "INCORRETA. A LGPD não proíbe toda finalidade adicional; exige análise de compatibilidade, fundamento jurídico, necessidade, transparência e demais requisitos aplicáveis.",
      E: "INCORRETA. Revisão manual, isoladamente, não corrige a ausência de finalidade compatível ou de fundamento jurídico para o tratamento."
    },
    regra: "Finalidade e adequação: o uso deve corresponder a propósitos legítimos, específicos, explícitos e informados, ser compatível com o contexto e, no poder público, atender à finalidade pública e às competências ou atribuições legais.",
    pegadinha: "Não confunda coleta inicialmente legítima com autorização irrestrita para reutilização; tampouco conclua que toda finalidade adicional é proibida.",
    fonte: "Lei nº 13.709/2018 (LGPD), art. 6º, I a III, e art. 23, caput e inciso I, texto oficial consolidado: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm; Constituição Federal, art. 37, caput: https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm."
  },

  { id: "q-m6-04", modulo: 6, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "basico", topico: "m6-u1-t1-s2", assunto: "6.1 — Publicidade e sigilo como exceção",
    contexto: "Publicidade e sigilo convivem: o art. 5º, XXXIII, da CF/88 ressalva as informações cujo sigilo seja imprescindível à segurança da sociedade e do Estado.",
    enunciado: "O princípio da publicidade, na Administração Pública, significa que",
    alternativas: [
      { letra: "A", texto: "todos os documentos devem ser divulgados, inclusive os que contêm dados pessoais identificáveis." },
      { letra: "B", texto: "a publicidade é faculdade do gestor, que decide conforme conveniência e oportunidade." },
      { letra: "C", texto: "a divulgação do que é público é preceito geral, e o sigilo é exceção que depende de hipótese legal e de formalização." },
      { letra: "D", texto: "a publicidade se limita à afixação de avisos na sede do órgão." },
      { letra: "E", texto: "a publicidade autoriza a divulgação de informação sigilosa quando houver interesse jornalístico." }
    ],
    gabarito: "C",
    justificativa: "A LAI estabelece a publicidade como preceito geral e o sigilo como exceção (art. 3º, I), enquanto a Constituição ressalva hipóteses de sigilo imprescindível à segurança da sociedade e do Estado. A alternativa A ignora a proteção de informações pessoais (art. 31 da LAI) e a legislação aplicável; B trata o dever de publicidade como faculdade; C está correta ao exigir divulgação do que é público e sigilo fundamentado em hipótese legal; D reduz a publicidade a um único meio de divulgação; E presume uma exceção ao sigilo que não decorre automaticamente de interesse jornalístico.",
    analise: {
      A: "INCORRETA. Erro conceitual: publicidade não alcança informação pessoal identificável, que tem regime próprio de proteção.",
      B: "INCORRETA. Erro conceitual: publicidade é dever, não faculdade sujeita a conveniência.",
      C: "CORRETA. Reproduz a diretriz legal: publicidade como preceito geral, sigilo como exceção fundamentada e formalizada.",
      D: "INCORRETA. Erro conceitual de anacronismo: o art. 8º, § 2º, torna obrigatória a divulgação em sítios oficiais.",
      E: "INCORRETA. Erro conceitual: interesse jornalístico não é hipótese legal de afastamento de sigilo; o art. 22 preserva as hipóteses legais de sigilo."
    },
    regra: "Publicidade = preceito geral; sigilo = exceção legal e formalizada (LAI, art. 3º, I, e arts. 23 e 28).",
    pegadinha: "'Tudo é público' e 'nada é público' são igualmente errados: a régua é a natureza da informação, não a vontade do gestor.",
    fonte: "CF/88, art. 37, caput, e art. 5º, XXXIII; Lei nº 12.527/2011, art. 3º, I, e art. 8º, § 2º (verificados em 2026-10-21)."
  },

  { id: "q-m6-05", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "intermediario", topico: "m6-u1-t1-s2", assunto: "6.1 — Eficiência e digitalização de serviços",
    contexto: "A eficiência foi incorporada ao caput do art. 37 da CF/88 e aparece na Lei de Governo Digital como diretriz de simplificação.",
    enunciado: "Sobre o princípio da eficiência aplicado à digitalização de serviços públicos, é correto afirmar que",
    alternativas: [
      { letra: "A", texto: "eficiência se mede exclusivamente pelo custo unitário do atendimento: quanto menor o custo, maior a eficiência." },
      { letra: "B", texto: "eficiência autoriza suprimir etapas de controle sempre que elas retardarem a entrega do serviço." },
      { letra: "C", texto: "eficiência é obter o resultado com uso racional de recursos, sem que isso autorize renunciar a direitos ou suprimir controles." },
      { letra: "D", texto: "eficiência é incompatível com a manutenção de atendimento presencial." },
      { letra: "E", texto: "eficiência dispensa indicadores de desempenho, pois o resultado é evidente." }
    ],
    gabarito: "C",
    justificativa: "Eficiência exige resultados adequados com uso racional de recursos, sem autorizar renúncia a direitos ou supressão indiscriminada de controles. A Lei de Governo Digital condiciona a eliminação de formalidades à avaliação de que seu custo econômico ou social supera o risco envolvido (art. 3º, XI). A alternativa A reduz eficiência ao custo unitário; B trata a demora como autorização automática para retirar controles; C está correta; D ignora que a digitalização não torna incompatível a manutenção de atendimento presencial (art. 3º, XVI, e art. 14); E desconsidera a importância de indicadores de desempenho, inclusive os previstos no art. 22.",
    analise: {
      A: "INCORRETA. Erro conceitual de reducionismo: custo é uma dimensão; qualidade, prazo e satisfação também integram a eficiência (art. 22).",
      B: "INCORRETA. Erro conceitual: a supressão de formalidades exige juízo de custo social versus risco (art. 3º, XI), não mera impaciência de entrega.",
      C: "CORRETA. Define eficiência como resultado com uso racional de recursos, preservados direitos e controles.",
      D: "INCORRETA. Erro conceitual de oposição indevida: a lei preserva o atendimento presencial como diretriz simultânea à digitalização.",
      E: "INCORRETA. Erro conceitual: sem indicador não há verificação de eficiência; o painel do art. 22 existe justamente para medi-la."
    },
    regra: "Eficiência = resultado com uso racional de recursos, com indicadores e sem renúncia a direitos; não é sinônimo de corte de custo nem de supressão de controle.",
    pegadinha: "Alternativas que opõem eficiência a controle ou a acessibilidade criam falsa incompatibilidade — os princípios convivem e se ponderam.",
    fonte: "CF/88, art. 37, caput; Lei nº 14.129/2021, arts. 3º, XI, XVI, 14 e 22 (verificado em 2026-10-21)."
  },

  { id: "q-m6-06", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u1-t2-s2", assunto: "6.1 — Critério oculto de priorização",
    contexto: "Um órgão publica edital de priorização de análise, mas a ordem efetiva é definida por um critério não divulgado, aplicado diretamente pelo sistema.",
    enunciado: "O caso compromete, simultaneamente,",
    alternativas: [
      { letra: "A", texto: "a impessoalidade e a publicidade, pois não se pode demonstrar igualdade de tratamento nem tornar público o modo de decidir." },
      { letra: "B", texto: "apenas a eficiência, pois critério oculto é questão de desempenho interno." },
      { letra: "C", texto: "apenas a moralidade, pois não há previsão legal de divulgação de critérios." },
      { letra: "D", texto: "apenas a legalidade, porque a Constituição não trata de critérios de priorização." },
      { letra: "E", texto: "nenhum princípio, pois a escolha do critério é ato discricionário insuscetível de controle." }
    ],
    gabarito: "A",
    justificativa: "Critério oculto produz violação dupla: não permite demonstrar que casos iguais recebem tratamento igual (impessoalidade) e não torna público o modo de decidir (publicidade). A LAI assegura acesso a informações sobre atividades, política, organização e serviços dos órgãos (art. 7º, V), e a Lei nº 14.129/2021 exige transparência na execução dos serviços e linguagem clara (art. 3º, IV e VII). As alternativas B, C e D isolam um único princípio e erram por redução; E confunde discricionariedade com arbitrariedade.",
    analise: {
      A: "CORRETA. Identifica a dupla violação: impessoalidade (não demonstrável) e publicidade (modo de decidir não publicizado).",
      B: "INCORRETA. Erro conceitual de redução: o problema não é de desempenho, e sim de critério não sindicável.",
      C: "INCORRETA. Erro conceitual: a moralidade pode estar em jogo, mas afirmar que 'não há previsão legal de divulgação de critérios' contraria o dever de publicidade.",
      D: "INCORRETA. Erro conceitual: o art. 37, caput, alcança a atividade administrativa como um todo, inclusive a priorização.",
      E: "INCORRETA. Erro conceitual central: discricionariedade é margem dentro da lei, sujeita a controle; não é arbitrariedade imune."
    },
    regra: "Critério oculto = violação simultânea de impessoalidade e publicidade; o critério de decisão é informação pública.",
    pegadinha: "A alternativa E explora a confusão entre discricionariedade e arbitrariedade — a mais clássica das provas de administrativo.",
    fonte: "CF/88, art. 37, caput; Lei nº 12.527/2011, arts. 3º, V, e 7º, V; Lei nº 14.129/2021, art. 3º, IV e VII (verificados em 2026-10-21)."
  },

  { id: "q-m6-07", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "intermediario", topico: "m6-u3-t1-s2", assunto: "6.3 — LGPD aplicada ao poder público",
    contexto: "A LGPD alcança expressamente o tratamento de dados pessoais realizado por pessoa jurídica de direito público.",
    enunciado: "Sobre a aplicação da Lei nº 13.709/2018 (LGPD) ao serviço público digital, assinale a alternativa correta.",
    alternativas: [
      { letra: "A", texto: "A LGPD não se aplica ao poder público, pois disciplina apenas relações de consumo." },
      { letra: "B", texto: "O consentimento do titular é a única hipótese que legitima o tratamento de dados pelo poder público." },
      { letra: "C", texto: "O poder público é agente de tratamento: decide sobre o tratamento dos dados que coleta e responde pelas medidas de segurança adotadas." },
      { letra: "D", texto: "Dado pessoal sensível pode ser tratado livremente pelo poder público, pois a finalidade é pública." },
      { letra: "E", texto: "A LGPD afasta a incidência da LAI sobre os conjuntos de dados comuns aos dois regimes." }
    ],
    gabarito: "C",
    justificativa: "O art. 1º da LGPD abrange o tratamento de dados pessoais por pessoas jurídicas de direito público ou privado, e o art. 5º define controlador como quem toma as decisões referentes ao tratamento. A alternativa A nega indevidamente a incidência da lei sobre o poder público; B erra ao tratar o consentimento como única hipótese, pois a LGPD prevê outras bases e regras aplicáveis; C está correta quanto ao papel do poder público como agente de tratamento e aos deveres de segurança, sem dispensar a análise do papel concreto; D ignora o regime específico dos dados sensíveis; E cria oposição inexistente, pois LAI e LGPD devem ser observadas conforme suas respectivas incidências.",
    analise: {
      A: "INCORRETA. Erro conceitual de exclusão indevida: o art. 1º nomeia expressamente a pessoa jurídica de direito público.",
      B: "INCORRETA. Erro conceitual de concentração: o consentimento é uma entre outras hipóteses de tratamento previstas na lei.",
      C: "CORRETA. Decorre do art. 1º (aplicação ao direito público) e do art. 5º, V e VI (controlador e operador), com o dever de segurança do art. 46.",
      D: "INCORRETA. Erro conceitual: dado pessoal sensível (art. 5º, II) exige disciplina própria e mais restritiva; 'finalidade pública' não é salvo-conduto.",
      E: "INCORRETA. Erro conceitual de oposição: os regimes se somam e prevalece o mais restritivo que incida sobre o conjunto."
    },
    regra: "LGPD alcança o poder público (art. 1º); o órgão é agente de tratamento e responde por segurança (art. 46) e pelos direitos do titular (arts. 17 e 18).",
    pegadinha: "Cuidado com 'consentimento é a única base': no setor público, outras hipóteses legais coexistem — e a LAI soma-se à LGPD, não é afastada por ela.",
    fonte: "Lei nº 13.709/2018, arts. 1º, 5º (I, II, V, VI), 17, 18 e 46 (verificado em 2026-10-20); Lei nº 14.129/2021, art. 1º, parágrafo único (2026-10-21)."
  },

  { id: "q-m6-08", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u1-t2-s2", assunto: "6.1 — Uso da posição institucional em interface digital",
    contexto: "Uma ferramenta de atendimento foi configurada para exibir, antes do resultado da consulta, oferta de serviço de parceiro privado sem relação com o pedido do cidadão.",
    enunciado: "Do ponto de vista dos princípios aplicados a sistemas digitais, a prática é",
    alternativas: [
      { letra: "A", texto: "incompatível com a moralidade e com a impessoalidade, por usar a posição do órgão para finalidade alheia ao serviço." },
      { letra: "B", texto: "compatível, pois amplia a arrecadação do órgão." },
      { letra: "C", texto: "compatível, desde que o cidadão possa fechar a oferta." },
      { letra: "D", texto: "incompatível apenas com a eficiência, por acrescentar etapas ao atendimento." },
      { letra: "E", texto: "indiferente aos princípios, pois se trata de decisão de interface, não de ato administrativo." }
    ],
    gabarito: "A",
    justificativa: "A interface do serviço é o próprio serviço: exibir oferta alheia ao pedido usa a posição institucional em finalidade diversa, o que ofende a moralidade (finalidade real distinta da declarada) e a impessoalidade (o cidadão é tratado como audiência comercial, não como usuário de serviço). A alternativa B troca legalidade por arrecadação; C supõe que a possibilidade de fechar a oferta sana o desvio; D reduz o problema a desempenho; E separa artificialmente interface e ato administrativo, quando a interface é o meio de prestação do serviço.",
    analise: {
      A: "CORRETA. Identifica o desvio de finalidade e o uso da posição institucional, atingindo moralidade e impessoalidade.",
      B: "INCORRETA. Erro conceitual: arrecadação não legitima finalidade estranha ao serviço.",
      C: "INCORRETA. Erro conceitual: a opção de fechar não elimina o uso da posição do órgão para fim alheio.",
      D: "INCORRETA. Erro conceitual de redução: o problema é de finalidade e de isonomia, não apenas de desempenho.",
      E: "INCORRETA. Erro conceitual de separação indevida: a interface é o canal de prestação do serviço e integra o ato administrativo."
    },
    regra: "A interface é parte do serviço: espaço institucional não é espaço comercial, e finalidade declarada deve coincidir com a finalidade real.",
    pegadinha: "A alternativa C explora o argumento 'é só um banner, o usuário pode fechar' — consentimento de navegação não sana desvio de finalidade.",
    fonte: "CF/88, art. 37, caput; Lei nº 14.129/2021, art. 3º, XVII (verificado em 2026-10-21)."
  },

  /* ---- 6.2 Transparência: LAI e Lei de Governo Digital (11) ---- */

  { id: "q-m6-09", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "intermediario", topico: "m6-u2-t2-s1", assunto: "6.2 — Transparência ativa",
    contexto: "A LAI separa o dever de divulgar de ofício do dever de responder a pedido.",
    enunciado: "A transparência ativa, na Lei nº 12.527/2011, corresponde a",
    alternativas: [
      { letra: "A", texto: "responder a pedido formulado por interessado, no prazo legal de 20 dias, prorrogável por 10." },
      { letra: "B", texto: "publicar apenas o organograma e os telefones das unidades administrativas." },
      { letra: "C", texto: "divulgar de ofício, em local de fácil acesso, informações de interesse coletivo ou geral produzidas ou custodiadas pelo órgão, independentemente de requerimento." },
      { letra: "D", texto: "divulgar informações restritas aos órgãos de controle interno e ao Ministério Público." },
      { letra: "E", texto: "adotar medida facultativa, conforme a disponibilidade de pessoal do órgão." }
    ],
    gabarito: "C",
    justificativa: "O art. 8º, caput, da LAI impõe a divulgação de ofício, em local de fácil acesso, de informações de interesse coletivo ou geral produzidas ou custodiadas pelo órgão. A alternativa A descreve transparência passiva; B reduz indevidamente a transparência ativa a apenas dois tipos de informação, embora o § 1º do art. 8º estabeleça um rol mínimo mais amplo; C está correta; D restringe indevidamente os destinatários; E transforma um dever legal em faculdade.",
    analise: {
      A: "INCORRETA. Erro conceitual de troca de regime: descreve a transparência passiva (pedido), não a ativa.",
      B: "INCORRETA. Erro conceitual de redução: o § 1º do art. 8º traz rol mínimo com despesas, licitações, contratos, programas e respostas a perguntas frequentes, entre outros.",
      C: "CORRETA. Reproduz o caput do art. 8º: divulgação de ofício, local de fácil acesso, informação de interesse coletivo ou geral.",
      D: "INCORRETA. Erro conceitual: transparência ativa é voltada ao público em geral, não a órgãos de controle.",
      E: "INCORRETA. Erro conceitual: é dever, não faculdade; o § 2º torna obrigatória a divulgação em sítios oficiais."
    },
    regra: "Ativa = divulgação de ofício (art. 8º); passiva = resposta a pedido (art. 10 e art. 11).",
    pegadinha: "A alternativa A é a definição correta de outro instituto: trocar o rótulo é a pegadinha mais comum do tema.",
    fonte: "Lei nº 12.527/2011, art. 8º, caput, § 1º e § 2º (verificado em 2026-10-21)."
  },

  { id: "q-m6-10", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "avancado", topico: "m6-u2-t2-s3", assunto: "6.2 — Painel de desempenho e eficiência real",
    contexto: "Um órgão tornou o canal digital obrigatório para requerer um benefício e comemorou queda de 40% no tempo médio de atendimento. O painel de monitoramento exibe apenas solicitações concluídas no prazo; no mesmo período, o atendimento presencial cresceu 30%.",
    enunciado: "À luz da Lei nº 14.129/2021, a leitura correta do resultado é:",
    alternativas: [
      { letra: "A", texto: "o indicador é incompleto e o crescimento do presencial sugere barreira no canal digital; o painel deve refletir solicitações em andamento e concluídas, tempo médio e satisfação, e a lei preserva o atendimento presencial." },
      { letra: "B", texto: "o resultado é suficiente, pois o tempo médio é o indicador legal previsto para o painel." },
      { letra: "C", texto: "o crescimento do presencial é irrelevante, pois a lei exige apenas a oferta do canal digital." },
      { letra: "D", texto: "a obrigatoriedade do canal digital é legítima porque a eficiência prevalece sobre a acessibilidade." },
      { letra: "E", texto: "o painel pode excluir casos em andamento, pois interessa apenas o que foi concluído." }
    ],
    gabarito: "A",
    justificativa: "O art. 22 da Lei nº 14.129/2021 define o conteúdo mínimo do painel: quantidade de solicitações em andamento e concluídas anualmente, tempo médio de atendimento e grau de satisfação dos usuários. Exibir apenas concluídas no prazo maquia a fila e o abandono. O art. 3º, XVI, e o art. 14 preservam a permanência do atendimento presencial, e o crescimento de 30% é sinal de barreira no canal digital — provável efeito de exclusão, não de eficiência. A alternativa D opõe princípios que a lei trata como cumulativos.",
    analise: {
      A: "CORRETA. Combina o conteúdo mínimo do art. 22 com a preservação do presencial (art. 3º, XVI, e art. 14) e lê o indicador de forma crítica.",
      B: "INCORRETA. Erro conceitual: o art. 22 prevê três componentes (em andamento e concluídas, tempo médio e satisfação), não apenas tempo médio.",
      C: "INCORRETA. Erro conceitual: a lei não autoriza extinguir nem ignorar o canal presencial; ele é diretriz permanente.",
      D: "INCORRETA. Erro conceitual de ponderação indevida: eficiência não prevalece sobre acessibilidade; os princípios se compatibilizam.",
      E: "INCORRETA. Erro conceitual: excluir casos em andamento elimina justamente a informação sobre fila e tempo de espera."
    },
    regra: "Painel do art. 22: solicitações em andamento e concluídas, tempo médio e satisfação; indicador parcial produz diagnóstico falso.",
    pegadinha: "Métrica correta com recorte conveniente engana: 'tempo médio das concluídas no prazo' não mede o serviço, mede o subconjunto que se quer mostrar.",
    fonte: "Lei nº 14.129/2021, arts. 3º, XVI, 14 e 22 (verificado em 2026-10-21)."
  },

  { id: "q-m6-11", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m6-u2-t1-s2", assunto: "6.2 — Escopo da LAI",
    contexto: "A LAI regulamenta o direito constitucional de acesso à informação.",
    enunciado: "A Lei nº 12.527/2011 tem por objeto",
    alternativas: [
      { letra: "A", texto: "instituir o sigilo como regra geral e o acesso como exceção." },
      { letra: "B", texto: "disciplinar exclusivamente o acesso a informações do Poder Executivo federal." },
      { letra: "C", texto: "regular o acesso a informações previsto na Constituição, alcançando órgãos públicos dos três Poderes e entidades da administração indireta." },
      { letra: "D", texto: "substituir a LGPD no tratamento de dados pessoais pelo poder público." },
      { letra: "E", texto: "criar cadastro único nacional de servidores públicos." }
    ],
    gabarito: "C",
    justificativa: "A ementa da LAI registra que ela regula o acesso a informações previsto no art. 5º, XXXIII, no art. 37, § 3º, II, e no art. 216, § 2º, da CF/88, e o parágrafo único do art. 1º subordina ao regime os órgãos da administração direta dos Poderes Executivo, Legislativo (incluindo Cortes de Contas) e Judiciário, o Ministério Público e as entidades da administração indireta. A alternativa A inverte a diretriz do art. 3º, I; C restringe indevidamente o alcance; D cria substituição que não existe — LAI e LGPD se complementam; E atribui à lei objeto que ela não tem.",
    analise: {
      A: "INCORRETA. Erro conceitual de inversão: a lei adota publicidade como preceito geral e sigilo como exceção.",
      B: "INCORRETA. Erro conceitual de restrição: o alcance inclui os três Poderes e o Ministério Público, em todos os entes federativos.",
      C: "CORRETA. Corresponde à ementa e ao art. 1º, caput e parágrafo único.",
      D: "INCORRETA. Erro conceitual de substituição: os regimes convivem e prevalece o mais restritivo.",
      E: "INCORRETA. Erro conceitual de atribuição: cadastro de servidores não é objeto da LAI."
    },
    regra: "LAI: escopo amplo (três Poderes, MP, administração indireta) e diretriz de publicidade como preceito geral.",
    pegadinha: "'Exclusivamente o Executivo federal' explora a confusão entre âmbito de aplicação e âmbito de regulamentação.",
    fonte: "Lei nº 12.527/2011, art. 1º, caput e parágrafo único, e art. 3º, I (verificado em 2026-10-21)."
  },

  { id: "q-m6-12", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u2-t1-s2", assunto: "6.2 — Vedação de exigência de motivos",
    contexto: "Analise a afirmação sobre os requisitos do pedido de acesso à informação.",
    enunciado: "O pedido de acesso à informação pode ser recusado pelo órgão quando o requerente não justificar os motivos da solicitação.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «quando o requerente não justificar os motivos»: o art. 10, § 3º, da LAI veda quaisquer exigências relativas aos motivos determinantes da solicitação, e o § 1º veda exigências que inviabilizem o pedido de informação de interesse público.",
    justificativa: "O pedido deve conter a identificação do requerente e a especificação da informação (art. 10, caput), e nada além disso pode ser exigido como condição de atendimento. Recusar por falta de justificativa de interesse é ilegítimo: a motivação do pedido é irrelevante para o direito de acesso. A parte inicial do item é neutra; o predicado é que o torna falso.",
    analise: {
      item: "Item FALSO. A recusa fundada na ausência de justificativa dos motivos contraria o art. 10, § 3º, da LAI.",
      leituraIncorreta: "Leitura que induz ao erro: supor que o órgão pode exigir 'interesse legítimo' ou 'justificativa' como nos pedidos administrativos comuns. Na LAI, o interesse é presumido e a motivação do requerente é matéria vedada."
    },
    regra: "Pedido de acesso: identificação do requerente + especificação da informação; vedado exigir motivos.",
    pegadinha: "Itens que introduzem requisito não previsto em lei são falsos ainda que soem 'administrativamente razoáveis'.",
    fonte: "Lei nº 12.527/2011, art. 10, caput, § 1º e § 3º (verificado em 2026-10-21)."
  },

  { id: "q-m6-13", modulo: 6, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "intermediario", topico: "m6-u2-t1-s2", assunto: "6.2 — Alcance da LAI e entidades privadas",
    contexto: "A LAI disciplina o acesso a informações públicas e alcança, em hipóteses definidas, entidades privadas.",
    enunciado: "Quanto ao alcance da LAI em relação a entidades privadas, é correto afirmar que",
    alternativas: [
      { letra: "A", texto: "entidades privadas sem fins lucrativos que recebam recursos públicos para ações de interesse público submetem-se à lei, no que couber, com publicidade restrita à parcela dos recursos recebidos e à sua destinação." },
      { letra: "B", texto: "toda empresa privada, com ou sem recursos públicos, submete-se integralmente à LAI." },
      { letra: "C", texto: "nenhuma entidade privada se submete à LAI, qualquer que seja o vínculo com o poder público." },
      { letra: "D", texto: "entidades privadas se submetem à LAI apenas se mantiverem empregados cedidos pelo órgão." },
      { letra: "E", texto: "a LAI alcança empresas privadas exclusivamente quanto à proteção de segredo industrial." }
    ],
    gabarito: "A",
    justificativa: "O art. 2º da LAI estende, no que couber, as disposições às entidades privadas sem fins lucrativos que recebam recursos públicos para ações de interesse público, com publicidade restrita à parcela dos recursos recebidos e à sua destinação. A alternativa B amplia indevidamente o alcance; C nega o que a lei expressamente prevê; D cria condição inexistente; E confunde o regime de sigilo industrial, preservado pelo art. 22, com o alcance subjetivo da lei.",
    analise: {
      A: "CORRETA. Reproduz o art. 2º, com a limitação de publicidade à parcela de recursos públicos e à destinação.",
      B: "INCORRETA. Erro conceitual de ampliação: a extensão é para entidades sem fins lucrativos e é restrita à parcela pública.",
      C: "INCORRETA. Erro conceitual de negação: contraria o art. 2º.",
      D: "INCORRETA. Erro conceitual de invenção de requisito: cessão de empregados não é critério de incidência.",
      E: "INCORRETA. Erro conceitual de confusão: segredo industrial é hipótese preservada (art. 22), não critério de alcance da lei."
    },
    regra: "LAI alcança, no que couber, entidade privada sem fins lucrativos que receba recurso público para ação de interesse público — publicidade limitada à parcela pública.",
    pegadinha: "A palavra 'restrita' é decisiva: quem lê só 'entidades privadas' erra por generalização.",
    fonte: "Lei nº 12.527/2011, art. 2º, e art. 22 (verificado em 2026-10-21)."
  },

  { id: "q-m6-14", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "intermediario", topico: "m6-u2-t2-s2", assunto: "6.2 — Transparência passiva e prazos",
    contexto: "O procedimento de acesso a informações está disciplinado nos arts. 10 a 15 da LAI.",
    enunciado: "Sobre o prazo de resposta a pedido de acesso à informação, a LAI estabelece que o órgão deve",
    alternativas: [
      { letra: "A", texto: "conceder acesso imediato quando a informação estiver disponível e, não sendo possível, responder no prazo de até 20 dias, prorrogável por mais 10 mediante justificativa expressa, com ciência do requerente." },
      { letra: "B", texto: "responder em 48 horas, improrrogavelmente." },
      { letra: "C", texto: "responder em 5 dias úteis, prorrogáveis por mais 5." },
      { letra: "D", texto: "responder em 30 dias, sem possibilidade de prorrogação." },
      { letra: "E", texto: "responder somente após a identificação da autoridade hierarquicamente superior, em 120 horas." }
    ],
    gabarito: "A",
    justificativa: "O art. 11 determina autorizar ou conceder o acesso imediato à informação disponível; não sendo possível, o órgão tem prazo não superior a 20 dias (art. 11, § 1º) para comunicar data, local e modo, indicar as razões de fato ou de direito da recusa ou informar que não possui a informação, indicando o detentor ou remetendo o pedido. O § 2º admite prorrogação por mais 10 dias, mediante justificativa expressa, da qual o requerente é cientificado. As alternativas B, C, D e E apresentam prazos que a lei não fixa para a resposta ao pedido.",
    analise: {
      A: "CORRETA. Reproduz o art. 11, caput e §§ 1º e 2º: acesso imediato quando possível; 20 dias, prorrogáveis por 10 com justificativa expressa.",
      B: "INCORRETA. Erro de prazo: 48 horas não é prazo de resposta ao pedido; é usado em outros fluxos administrativos, não neste dispositivo.",
      C: "INCORRETA. Erro de prazo: 5 dias úteis não corresponde ao art. 11.",
      D: "INCORRETA. Erro de prazo e de regime: 30 dias ignora a prorrogação legal de 10 dias.",
      E: "INCORRETA. Erro de prazo e de procedimento: o art. 11 não condiciona a resposta à identificação prévia de autoridade superior nem fixa 120 horas."
    },
    regra: "Art. 11: acesso imediato quando possível; 20 dias para responder; prorrogação de 10 dias com justificativa expressa; informar recurso e autoridade (§ 4º).",
    pegadinha: "Prazos redondos e curtos (48 h, 120 h, 5 dias) são inventados com frequência em prova: memorize apenas o par 20 + 10.",
    fonte: "Lei nº 12.527/2011, art. 11, caput e §§ 1º, 2º e 4º (verificado em 2026-10-21)."
  },

  { id: "q-m6-15", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m6-u2-t1-s2", assunto: "6.2 — Conceitos legais de informação e documento",
    contexto: "O art. 4º da LAI define os conceitos operacionais usados em toda a lei.",
    enunciado: "Nos termos do art. 4º da LAI, «documento» é",
    alternativas: [
      { letra: "A", texto: "apenas o papel assinado por autoridade competente e protocolado no órgão." },
      { letra: "B", texto: "o conjunto organizado de dados pessoais mantido em banco de dados." },
      { letra: "C", texto: "unidade de registro de informações, qualquer que seja o suporte ou formato." },
      { letra: "D", texto: "a informação submetida temporariamente a restrição de acesso público." },
      { letra: "E", texto: "a informação coletada na fonte, com o máximo de detalhamento e sem modificações." }
    ],
    gabarito: "C",
    justificativa: "O art. 4º, II, define documento como unidade de registro de informações, qualquer que seja o suporte ou formato — o que inclui o documento nativo digital. A alternativa A restringe a suportes e formalidades não previstos; C descreve banco de dados, conceito da LGPD; D descreve informação sigilosa (art. 4º, III); E descreve primariedade (art. 4º, IX).",
    analise: {
      A: "INCORRETA. Erro conceitual de restrição: suporte e formato são indiferentes para a definição legal.",
      B: "INCORRETA. Erro conceitual de troca de conceito: banco de dados é definição da LGPD (art. 5º, IV), não da LAI.",
      C: "CORRETA. Transcrição do art. 4º, II.",
      D: "INCORRETA. Erro conceitual de troca: essa é a definição de informação sigilosa (art. 4º, III).",
      E: "INCORRETA. Erro conceitual de troca: essa é a definição de primariedade (art. 4º, IX)."
    },
    regra: "Documento = unidade de registro, qualquer suporte ou formato; a LAI é indiferente ao meio.",
    pegadinha: "A questão cobra a troca entre os nove conceitos do art. 4º; leia todos antes de responder.",
    fonte: "Lei nº 12.527/2011, art. 4º, I a IX (verificado em 2026-10-21)."
  },

  { id: "q-m6-16", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u2-t2-s1", assunto: "6.2 — Relação entre transparência ativa e passiva",
    contexto: "Analise a afirmação sobre a convivência entre os dois modos de transparência.",
    enunciado: "A transparência ativa e a transparência passiva são alternativas excludentes: o órgão que divulga de ofício as informações do art. 8º da LAI não precisa atender a pedidos de acesso.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «alternativas excludentes» e «não precisa atender a pedidos»: o art. 8º impõe o dever de divulgação de ofício e o art. 10 assegura a qualquer interessado o direito de apresentar pedido de acesso, cumulativamente.",
    justificativa: "Os dois regimes são complementares. O dever de divulgar de ofício não esgota o direito de pedir: o pedido alcança informação não publicada e permite ao cidadão obter acesso, certidão ou cópia. A parte inicial do item enuncia corretamente o art. 8º; é o predicado de exclusão que o torna falso.",
    analise: {
      item: "Item FALSO. Ativa e passiva coexistem; o cumprimento do art. 8º não dispensa o atendimento do art. 10.",
      leituraIncorreta: "Leitura que induz ao erro: supor que portal de transparência 'já cumpre tudo'. O portal pode estar incompleto, e o pedido é o instrumento de acesso ao que não foi publicado — inclusive com acesso parcial (art. 7º, § 2º)."
    },
    regra: "Transparência ativa (art. 8º) e passiva (arts. 10 e 11) são cumulativas, não alternativas.",
    pegadinha: "Palavras absolutas — 'excludentes', 'dispensa', 'somente' — costumam indicar item falso em prova de transparência.",
    fonte: "Lei nº 12.527/2011, arts. 8º, 10 e 11 (verificado em 2026-10-21)."
  },

  { id: "q-m6-17", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "intermediario", topico: "m6-u2-t2-s1", assunto: "6.2 — Requisitos dos sítios oficiais",
    contexto: "O art. 8º, § 3º, da LAI fixa requisitos técnicos para os sítios oficiais.",
    enunciado: "Entre os requisitos que os sítios oficiais devem atender, o art. 8º, § 3º, da LAI exige",
    alternativas: [
      { letra: "A", texto: "gravação de relatórios em formatos eletrônicos abertos e não proprietários e acesso automatizado por sistemas externos em formatos abertos, estruturados e legíveis por máquina." },
      { letra: "B", texto: "publicação exclusivamente em PDF, para preservar a autenticidade do documento." },
      { letra: "C", texto: "cadastro prévio do cidadão como condição para consultar qualquer informação." },
      { letra: "D", texto: "divulgação apenas dos contratos de valor superior ao limite de licitação." },
      { letra: "E", texto: "atualização anual das informações, sem necessidade de indicar formatos ou data." }
    ],
    gabarito: "A",
    justificativa: "O § 3º do art. 8º exige, entre outros: ferramenta de pesquisa com acesso objetivo e linguagem fácil (I); gravação de relatórios em diversos formatos eletrônicos, inclusive abertos e não proprietários (II); acesso automatizado por sistemas externos em formatos abertos, estruturados e legíveis por máquina (III); divulgação dos formatos utilizados (IV); autenticidade e integridade (V); manutenção atualizada (VI); indicação de local e instruções de contato (VII); acessibilidade (VIII). A alternativa B cria exclusividade inexistente; C cria barreira de acesso; D restringe o rol do § 1º, IV; E dispensa requisitos expressos.",
    analise: {
      A: "CORRETA. Combina os incisos II e III do § 3º, que sustentam dados abertos e reutilização.",
      B: "INCORRETA. Erro conceitual: o inciso II exige formatos abertos e não proprietários, não PDF exclusivo.",
      C: "INCORRETA. Erro conceitual: cadastro prévio como condição de consulta é barreira incompatível com acesso objetivo e transparente (inciso I).",
      D: "INCORRETA. Erro conceitual de restrição: o § 1º, IV, alcança procedimentos licitatórios e todos os contratos celebrados.",
      E: "INCORRETA. Erro conceitual: o inciso VI exige manutenção atualizada e o IV exige divulgar os formatos utilizados."
    },
    regra: "Sítio oficial (art. 8º, § 3º): pesquisa fácil, formatos abertos, acesso automatizado, formatos declarados, autenticidade, atualização, contato e acessibilidade.",
    pegadinha: "'PDF é o formato oficial' é senso comum e está errado: a lei pede formato aberto e não proprietário.",
    fonte: "Lei nº 12.527/2011, art. 8º, § 1º, IV, e § 3º, I a VIII (verificado em 2026-10-21)."
  },

  { id: "q-m6-18", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u2-t1-s2", assunto: "6.2 — Diretriz de uso de tecnologia da informação",
    contexto: "Analise a afirmação sobre as diretrizes do art. 3º da LAI.",
    enunciado: "A utilização de meios de comunicação viabilizados pela tecnologia da informação é uma das diretrizes da LAI, e não mera faculdade do gestor.",
    alternativas: null,
    gabarito: "certo",
    trechoDeterminante: "O trecho determinante é «diretriz … e não mera faculdade»: o art. 3º, III, enumera a utilização de meios de comunicação viabilizados pela tecnologia da informação entre as diretrizes que os procedimentos de acesso devem observar, e o art. 8º, § 2º, torna obrigatória a divulgação em sítios oficiais.",
    justificativa: "O art. 3º fixa diretrizes que devem ser observadas nos procedimentos de acesso, entre elas a utilização de meios de comunicação viabilizados pela tecnologia da informação (inciso III). A obrigatoriedade de observar a diretriz decorre do art. 3º, III. O art. 8º, § 2º, prevê divulgação em sítios oficiais, ressalvadas as hipóteses legais específicas, como a exceção do § 4º para municípios com até 10 mil habitantes quanto à divulgação obrigatória na internet, sem afastar as demais obrigações legais.",
    analise: {
      item: "Item CERTO. O inciso III do art. 3º é diretriz vinculante, e o art. 8º, § 2º, torna o sítio oficial obrigatório.",
      leituraIncorreta: "Leitura que induz ao erro: tratar diretriz como recomendação. Diretriz, na lei, é parâmetro de execução do procedimento — descumpri-la é descumprir o art. 3º."
    },
    regra: "Diretrizes do art. 3º: publicidade/sigilo como exceção; divulgação de interesse público; uso de TI; cultura de transparência; controle social.",
    pegadinha: "Itens que opõem 'diretriz' a 'obrigação' tentam transformar norma de execução em conselho — e são falsos.",
    fonte: "Lei nº 12.527/2011, art. 3º, III, e art. 8º, § 2º (verificado em 2026-10-21)."
  },

  { id: "q-m6-19", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u3-t2-s2", assunto: "6.3 — Regime da informação pessoal na LAI",
    contexto: "A LAI trata a informação pessoal em regime próprio, distinto do sigilo classificado.",
    enunciado: "Sobre a proteção da informação pessoal na Lei nº 12.527/2011, é correto afirmar que",
    alternativas: [
      { letra: "A", texto: "o acesso a informações relativas à intimidade, vida privada, honra e imagem é restrito, independentemente de classificação de sigilo, pelo prazo máximo de 100 anos a contar da produção." },
      { letra: "B", texto: "a proteção depende de classificação nos graus ultrassecreto, secreto ou reservado." },
      { letra: "C", texto: "a restrição é perpétua, sem prazo definido em lei." },
      { letra: "D", texto: "qualquer servidor pode divulgar informação pessoal, desde que não exista sigilo classificado." },
      { letra: "E", texto: "a restrição pode ser invocada para impedir a apuração de irregularidades em que o titular esteja envolvido." }
    ],
    gabarito: "A",
    justificativa: "O art. 31, § 1º, I, restringe o acesso a informações relativas à intimidade, vida privada, honra e imagem a agentes públicos legalmente autorizados e à própria pessoa, pelo prazo máximo de 100 anos a contar da produção, independentemente de classificação de sigilo. A alternativa B confunde o regime da informação pessoal com o da informação classificada (arts. 23 e 24); C ignora o prazo legal; D contraria o § 1º e o § 2º; E é expressamente vedada pelo § 4º.",
    analise: {
      A: "CORRETA. Reproduz o art. 31, § 1º, I, incluindo a independência em relação à classificação de sigilo.",
      B: "INCORRETA. Erro conceitual de confusão de regimes: informação pessoal não se protege por classificação, e sim pelo art. 31.",
      C: "INCORRETA. Erro conceitual: a lei fixa prazo máximo de 100 anos.",
      D: "INCORRETA. Erro conceitual: a ausência de classificação não autoriza divulgação; exige-se previsão legal ou consentimento expresso (§ 1º, II).",
      E: "INCORRETA. Erro conceitual: o § 4º veda usar a restrição para prejudicar apuração de irregularidades em que o titular esteja envolvido."
    },
    regra: "Informação pessoal (art. 31): restrição por 100 anos, independentemente de classificação; divulgação a terceiros só com previsão legal ou consentimento expresso.",
    pegadinha: "A alternativa E transforma a proteção da privacidade em escudo contra accountability — vedação expressa do § 4º.",
    fonte: "Lei nº 12.527/2011, art. 31, caput, § 1º, I e II, § 2º e § 4º (verificado em 2026-10-21)."
  },

  { id: "q-m6-20", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "intermediario", topico: "m6-u2-t2-s1", assunto: "6.2 — Conteúdo mínimo da divulgação de ofício",
    contexto: "O art. 8º, § 1º, da LAI lista o mínimo que deve ser divulgado independentemente de requerimento.",
    enunciado: "O rol mínimo de informações a divulgar de ofício inclui",
    alternativas: [
      { letra: "A", texto: "registros das despesas, informações sobre procedimentos licitatórios e contratos celebrados e dados gerais para acompanhamento de programas, ações, projetos e obras, com metas e indicadores." },
      { letra: "B", texto: "a íntegra dos prontuários e fichas de atendimento individual dos usuários do órgão." },
      { letra: "C", texto: "a relação nominal de beneficiários, com CPF e endereço, para conferência individual pela população." },
      { letra: "D", texto: "apenas o organograma e o horário de atendimento, sendo os demais itens facultativos." },
      { letra: "E", texto: "os contratos somente após o encerramento do exercício financeiro, quando não houver mais risco envolvido." }
    ],
    gabarito: "A",
    justificativa: "O § 1º do art. 8º exige, no mínimo: competências e estrutura organizacional, endereços, telefones e horários (I); repasses e transferências (II); registros das despesas (III); licitações, inclusive editais e resultados, e todos os contratos celebrados (IV); dados gerais para acompanhamento de programas, ações, projetos e obras, com metas e indicadores (V); respostas a perguntas mais frequentes (VI). As alternativas B e C divulgam informação pessoal, protegida pelo art. 31; D reduz o rol mínimo a dois itens; E cria postergação inexistente.",
    analise: {
      A: "CORRETA. Combina os incisos III, IV e V do § 1º.",
      B: "INCORRETA. Erro conceitual: prontuário e ficha individual são informação pessoal, com acesso restrito (art. 31).",
      C: "INCORRETA. Erro conceitual: relação nominal com CPF e endereço é divulgação irrestrita de dado pessoal, vedada sem base legal ou consentimento.",
      D: "INCORRETA. Erro conceitual de redução: o rol é mínimo e obrigatório, não exemplificativo facultativo.",
      E: "INCORRETA. Erro conceitual de invenção de prazo: o inciso IV alcança todos os contratos celebrados, e o inciso VI exige manutenção atualizada."
    },
    regra: "Divulgação de ofício (art. 8º, § 1º): competências, repasses, despesas, licitações e contratos, programas com metas e indicadores, perguntas frequentes.",
    pegadinha: "Alternativas que 'publicam tudo de todo mundo' em nome da transparência são a armadilha central do módulo: publicidade não é exposição de dado pessoal.",
    fonte: "Lei nº 12.527/2011, art. 8º, § 1º, I a VI, e § 3º, VI; art. 31 (verificado em 2026-10-21)."
  },

  /* ---- 6.1 Legalidade e automação de atos (2) ---- */

  { id: "q-m6-21", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "basico", topico: "m6-u1-t2-s1", assunto: "6.1 — Prática de atos processuais em meio eletrônico",
    contexto: "A Lei nº 14.129/2021 disciplina a produção de atos processuais em meio eletrônico.",
    enunciado: "Sobre a prática de atos processuais em meio eletrônico, na forma da Lei nº 14.129/2021, é correto afirmar que",
    alternativas: [
      { letra: "A", texto: "é a regra, admitida a prática em papel nas exceções legais — como solicitação do usuário, inviabilidade do procedimento ou indisponibilidade do meio eletrônico —, com digitalização do documento-base." },
      { letra: "B", texto: "é facultativa, cabendo ao servidor escolher o meio que preferir em cada caso." },
      { letra: "C", texto: "é obrigatória em qualquer hipótese, vedada a prática em papel ainda que o meio eletrônico esteja indisponível." },
      { letra: "D", texto: "depende de autorização judicial caso a caso, inclusive para atos de rotina." },
      { letra: "E", texto: "só é admitida para atos de mero expediente, sendo vedada para atos decisórios." }
    ],
    gabarito: "A",
    justificativa: "O art. 6º determina a prática dos atos processuais em meio eletrônico e prevê exceções expressas — entre elas a solicitação do usuário, a inviabilidade do procedimento, a indisponibilidade do meio eletrônico e o risco de dano relevante à celeridade —, admitindo, nessas hipóteses, a prática posterior conforme as regras do processo em papel, desde que o documento-base seja digitalizado. A alternativa B transforma a regra em escolha; C ignora as exceções legais; D cria condição judicial inexistente; E restringe o alcance sem base no dispositivo.",
    analise: {
      A: "CORRETA. Reproduz o art. 6º: regra do meio eletrônico, exceções expressas e digitalização do documento-base.",
      B: "INCORRETA. Erro conceitual: a escolha do meio não é livre — é regra legal com exceções taxativas.",
      C: "INCORRETA. Erro conceitual de absolutismo: a própria lei prevê a prática em papel nas hipóteses de exceção.",
      D: "INCORRETA. Erro conceitual de invenção de condição: não há exigência de autorização judicial por ato.",
      E: "INCORRETA. Erro conceitual de restrição: a lei não limita o meio eletrônico a atos de expediente."
    },
    regra: "Art. 6º: atos processuais em meio eletrônico como regra, com exceções expressas e digitalização do documento-base na prática em papel.",
    pegadinha: "Dizer que 'a lei obriga sempre' é tão errado quanto dizer que 'é facultativo': o regime tem regra e exceções nominadas.",
    fonte: "Lei nº 14.129/2021, art. 6º (verificado em 2026-10-21)."
  },

  { id: "q-m6-22", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u1-t2-s1", assunto: "6.1 — Automação não cria competência",
    contexto: "Um sistema foi configurado para indeferir automaticamente pedidos de isenção acima de determinado valor, embora a norma do benefício não preveja indeferimento por valor e a competência para decidir seja de comissão colegiada.",
    enunciado: "A configuração é compatível com a legalidade, porque o critério está cadastrado no sistema e é aplicado de forma uniforme a todos os requerentes.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «porque o critério está cadastrado no sistema»: a automação não cria competência nem substitui a norma que define o critério; cadastrar parâmetro não legaliza decisão sem previsão normativa e sem observância da competência do colegiado.",
    justificativa: "A automação de atos administrativos não cria competência, não substitui a motivação e não afasta contraditório e publicidade. O caso reúne dois vícios autônomos: o critério de indeferimento não existe na norma do benefício e a decisão foi retirada de quem a lei atribuiu competência. Uniformidade de aplicação é condição necessária da impessoalidade, mas não supre ausência de base normativa. O art. 48 da Lei nº 14.129/2021 reforça que os controles devem ser proporcionais ao risco — e decisão que nega direito exige controle reforçado.",
    analise: {
      item: "Item FALSO. Falta base normativa do critério e houve deslocamento de competência; a uniformidade de aplicação não sana nenhum dos dois vícios.",
      leituraIncorreta: "Leitura que induz ao erro: aceitar 'está no sistema, logo é regra'. Parâmetro cadastrado é implementação técnica; sua validade depende da norma que o autoriza e da competência de quem decide."
    },
    regra: "Requisitos de conformidade da decisão automatizada: norma de competência, critério escrito e versionado, motivação, registro e canal de revisão.",
    pegadinha: "Itens que oferecem 'uniformidade' ou 'alta acurácia' como justificativa tentam trocar legalidade por consistência estatística.",
    fonte: "CF/88, art. 37, caput; Lei nº 14.129/2021, arts. 5º, 6º e 48 (verificado em 2026-10-21)."
  },

  /* ---- 6.2 Transparência passiva e limites da publicidade (3) ---- */

  { id: "q-m6-23", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u2-t2-s2", assunto: "6.2 — Teor da resposta ao pedido de acesso",
    contexto: "Um cidadão pede cópia de relatório de fiscalização. No 18º dia, o órgão responde: «informação não localizada neste setor». Não indica onde está, não remete o pedido e não informa prazo nem possibilidade de recurso.",
    enunciado: "Quanto ao teor da resposta, é correto afirmar que",
    alternativas: [
      { letra: "A", texto: "a resposta é incompleta: o art. 11, § 1º, III, exige comunicar que não possui a informação e indicar o órgão detentor ou remeter o pedido, e o § 4º exige informar a possibilidade de recurso, os prazos e a autoridade competente." },
      { letra: "B", texto: "a resposta é válida, pois foi apresentada dentro do prazo de 20 dias." },
      { letra: "C", texto: "a resposta é válida, pois o órgão não é obrigado a indicar outro órgão que detenha a informação." },
      { letra: "D", texto: "a resposta só seria inválida se houvesse prova de má-fé do servidor que a redigiu." },
      { letra: "E", texto: "a resposta dispensa fundamentação porque não houve negativa expressa de acesso." }
    ],
    gabarito: "A",
    justificativa: "Cumprir o prazo não é cumprir o dever. O art. 11, § 1º, III, exige que, não sendo possível o acesso, o órgão comunique que não possui a informação, indique o órgão ou entidade que a detém ou remeta o requerimento, cientificando o interessado. O § 4º determina informar a possibilidade de recurso, os prazos e condições e a autoridade competente. A resposta do caso é, portanto, incompleta em dois pontos. A alternativa B confunde tempestividade com adequação; C contraria o inciso III; D cria exigência probatória que a lei não faz; E ignora que a comunicação de não localização é resposta negativa para fins de recurso.",
    analise: {
      A: "CORRETA. Aponta as duas omissões: encaminhamento/indicação do detentor (§ 1º, III) e informação sobre recurso (§ 4º).",
      B: "INCORRETA. Erro conceitual: prazo cumprido não sana resposta incompleta.",
      C: "INCORRETA. Erro conceitual: o inciso III impõe indicar o detentor ou remeter o pedido.",
      D: "INCORRETA. Erro conceitual: a validade da resposta é objetiva; não depende de prova de má-fé.",
      E: "INCORRETA. Erro conceitual: a comunicação de não localização opera como negativa e deve vir fundamentada e com via recursal."
    },
    regra: "Art. 11, § 1º: três respostas possíveis (data/local/modo; razões de recusa; não possui, com indicação do detentor ou remessa) — e o § 4º exige informar recurso.",
    pegadinha: "A alternativa B é a armadilha do 'cumpriu o prazo, logo está certo' — prazo e conteúdo são requisitos autônomos.",
    fonte: "Lei nº 12.527/2011, art. 11, § 1º, III, e § 4º (verificado em 2026-10-21)."
  },

  { id: "q-m6-24", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m6-u2-t3-s1", assunto: "6.2 — Publicidade administrativa e dados pessoais",
    contexto: "Para dar transparência a um programa social, um órgão publica no portal e em rede social a relação nominal dos beneficiários de um bairro, com nome completo e valor recebido, invocando apenas o art. 8º da LAI, sem indicar norma específica que autorize a divulgação nominativa nem avaliar a necessidade dessa exposição.",
    enunciado: "A publicação é automaticamente legítima, pois o art. 8º da LAI impõe a divulgação de informações de interesse coletivo ou geral.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «automaticamente legítima»: o dever de transparência ativa não autoriza, por si só, qualquer divulgação nominativa de dados pessoais. É necessário avaliar o regime legal aplicável, a finalidade pública, a base jurídica, a necessidade e a proporcionalidade da exposição, preservando os direitos dos titulares.",
    justificativa: "O art. 8º da LAI impõe divulgação de informações de interesse coletivo ou geral, mas deve ser interpretado em conjunto com o art. 31 da LAI, a LGPD e as regras específicas do programa. A divulgação nominativa pode depender de fundamento legal e de avaliação de finalidade, necessidade, proporcionalidade e salvaguardas; não se deve presumir que consentimento seja sempre obrigatório nem que transparência autorize exposição irrestrita. Quando suficiente para o controle social, dados agregados ou anonimizados podem reduzir a exposição sem eliminar a informação relevante.",
    analise: {
      item: "Item FALSO. O dever geral de transparência não torna automática qualquer publicação nominativa; o caso exige análise do regime legal e da proporcionalidade.",
      leituraIncorreta: "Leitura que induz ao erro: concluir que o art. 8º da LAI sempre exige publicar nomes e valores individualizados. A solução depende da norma aplicável ao programa, da finalidade de transparência e dos limites de proteção de dados."
    },
    regra: "Transparência ativa deve ser conciliada com a LAI, a LGPD e a norma específica do programa; avalie base jurídica, finalidade, necessidade, proporcionalidade e salvaguardas.",
    pegadinha: "Não presuma nem que toda informação nominativa deve ser publicada nem que consentimento é sempre a única base: verifique o fundamento legal e o contexto.",
    fonte: "Lei nº 12.527/2011, arts. 8º e 31, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm; Lei nº 13.709/2018, arts. 6º, 23 e 26, texto compilado: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm."
  },

{ id: "q-m6-25", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "avancado", topico: "m6-u2-t3-s1", assunto: "6.2 — Anonimização como via de publicação",
    contexto: "Uma secretaria quer publicar base de atendimentos para pesquisa e monitoramento de política pública. A base contém nome, CPF, diagnóstico e município.",
    enunciado: "A solução compatível com a LAI e com a Lei nº 14.129/2021 é",
    alternativas: [
      { letra: "A", texto: "publicar a base anonimizada antes da disponibilização, mantendo granularidade útil (município, faixa etária, tipo de atendimento) e documentando estrutura e semântica dos campos." },
      { letra: "B", texto: "publicar a base integral, pois a finalidade é pesquisa e monitoramento de política pública." },
      { letra: "C", texto: "publicar a base integral excluindo apenas a coluna com o nome dos atendidos." },
      { letra: "D", texto: "publicar a base em PDF, formato que impede a reidentificação dos titulares." },
      { letra: "E", texto: "não publicar nada, pois dados de saúde jamais podem ser objeto de tratamento por órgão público." }
    ],
    gabarito: "A",
    justificativa: "O art. 36 da Lei nº 14.129/2021 autoriza disponibilizar dados para pesquisa acadêmica e para monitoramento e avaliação de políticas públicas desde que os dados protegidos por sigilo ou com restrição de acesso sejam anonimizados antes da disponibilização. O art. 31, § 3º, II, da LAI admite estatísticas e pesquisas científicas de evidente interesse público ou geral, previstas em lei, vedada a identificação. O art. 29, § 1º, III, exige descrição das bases com informação suficiente sobre estrutura e semântica. A alternativa B ignora a exigência de anonimização; C mantém identificadores diretos (CPF); D confunde formato com técnica de anonimização; E nega o próprio regime, que admite tratamento com finalidade legítima.",
    analise: {
      A: "CORRETA. Combina anonimização prévia (art. 36; art. 31, § 3º, II) com granularidade útil e dicionário de dados (art. 29, § 1º, III).",
      B: "INCORRETA. Erro conceitual: a finalidade legítima não dispensa a anonimização exigida pelo art. 36.",
      C: "INCORRETA. Erro conceitual: retirar o nome não anonimiza — CPF e diagnóstico permanecem identificadores.",
      D: "INCORRETA. Erro conceitual de confusão entre formato e técnica: PDF não impede reidentificação e ainda reduz a reutilização.",
      E: "INCORRETA. Erro conceitual: o regime admite tratamento de dado sensível com finalidade legítima e salvaguardas; a resposta correta é proteger, não paralisar."
    },
    regra: "Anonimizar antes de disponibilizar, preservar granularidade útil e documentar a base: é assim que transparência e proteção de dados convivem.",
    pegadinha: "Suprimir o nome e manter CPF é o exemplo clássico de falsa anonimização.",
    fonte: "Lei nº 12.527/2011, art. 31, § 3º, II; Lei nº 14.129/2021, arts. 29, § 1º, III, e 36; Lei nº 13.709/2018, art. 5º, II e III (verificados em 2026-10-20/21)."
  },

  /* ---- 6.3 Sigilo, informação pessoal e responsabilização (5) ---- */

  { id: "q-m6-26", modulo: 6, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "basico", topico: "m6-u3-t2-s1", assunto: "6.3 — Graus e prazos de classificação",
    contexto: "A LAI fixa graus de classificação e prazos máximos de restrição de acesso.",
    enunciado: "Quanto aos graus de classificação de sigilo e aos prazos máximos de restrição de acesso, a LAI estabelece",
    alternativas: [
      { letra: "A", texto: "ultrassecreto — 25 anos; secreto — 15 anos; reservado — 5 anos, contados da data de produção." },
      { letra: "B", texto: "ultrassecreto — 25 anos; secreto — 10 anos; reservado — 5 anos, contados da data de produção." },
      { letra: "C", texto: "ultrassecreto — 30 anos; secreto — 15 anos; reservado — 5 anos, contados da data de produção." },
      { letra: "D", texto: "prazo único de 5 anos para todos os graus, renovável indefinidamente." },
      { letra: "E", texto: "prazos definidos caso a caso pela autoridade classificadora, sem limite legal." }
    ],
    gabarito: "A",
    justificativa: "O art. 24 fixa os prazos máximos de restrição de acesso, contados da data de produção: ultrassecreto — 25 anos (I); secreto — 15 anos (II); reservado — 5 anos (III). O § 4º determina que, transcorrido o prazo ou consumado o evento que define o termo final, a informação se torna automaticamente de acesso público. As alternativas B e C alteram prazos; D cria prazo único renovável; E nega a existência de limite legal.",
    analise: {
      A: "CORRETA. Reproduz o art. 24, I a III.",
      B: "INCORRETA. Erro de prazo: secreto é 15 anos, não 10.",
      C: "INCORRETA. Erro de prazo: ultrassecreto é 25 anos, não 30.",
      D: "INCORRETA. Erro conceitual: não há prazo único nem renovação indefinida; a Lei nº 12.527/2011 substituiu a lógica de renovação sem limite.",
      E: "INCORRETA. Erro conceitual: os prazos são legais, e a autoridade observa o critério menos restritivo possível (§ 5º)."
    },
    regra: "25 / 15 / 5 anos (ultrassecreto, secreto, reservado), contados da produção; esgotado o prazo, acesso público automático (§ 4º).",
    pegadinha: "A troca 15 ↔ 10 e 25 ↔ 30 é a variação mais usada para testar memorização; associe sempre 'quanto mais grave, mais longo'.",
    fonte: "Lei nº 12.527/2011, art. 24, I a III, § 4º e § 5º (verificado em 2026-10-21)."
  },

  { id: "q-m6-27", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u3-t2-s1", assunto: "6.3 — Elementos da decisão de classificação",
    contexto: "Um diretor classifica como secreto um contrato administrativo já publicado, sem indicar o fundamento legal da classificação nem o prazo, e determina a retirada do documento do portal.",
    enunciado: "A classificação é válida, pois a autoridade que a praticou exerce função de direção.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «é válida, pois a autoridade exerce função de direção»: a decisão de classificação exige fundamento entre as hipóteses legais, indicação de prazo ou de evento que defina o termo final e identificação da autoridade que a classificou (art. 28), com observância do critério menos restritivo (§ 5º do art. 24).",
    justificativa: "Exercer função de direção não basta: a competência é escalonada por grau (art. 27) e a decisão precisa dos quatro elementos do art. 28 — assunto, fundamento entre as hipóteses do art. 23, prazo ou evento e identificação da autoridade. Além disso, o art. 24, § 5º, impõe observar o interesse público e o critério menos restritivo possível. No caso, faltam fundamento e prazo, e a informação já era pública — o que torna a classificação, além de formalmente defeituosa, incompatível com a publicidade.",
    analise: {
      item: "Item FALSO. A decisão é desprovida de fundamento e de prazo, e o grau de secreto exige autoridade cuja competência o art. 27 define — função de direção, por si, não confere competência para qualquer grau.",
      leituraIncorreta: "Leitura que induz ao erro: associar hierarquia a poder ilimitado de sigilo. A competência para classificar é vinculada ao grau, e a decisão é formal e motivada."
    },
    regra: "Classificação (art. 28): assunto, fundamento legal, prazo ou evento e autoridade classificadora; competência por grau (art. 27) e critério menos restritivo (art. 24, § 5º).",
    pegadinha: "Itens que justificam a validade pelo cargo ocupado, sem enfrentar os elementos da decisão, são falsos.",
    fonte: "Lei nº 12.527/2011, arts. 23, 24, § 5º, 27 e 28 (verificado em 2026-10-21)."
  },

  { id: "q-m6-28", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u3-t2-s2", assunto: "6.3 — Dispensa de consentimento da informação pessoal",
    contexto: "O art. 31, § 3º, da LAI relaciona hipóteses em que o consentimento do titular é dispensado.",
    enunciado: "A dispensa de consentimento do titular, no regime do art. 31, § 3º, da LAI, alcança, entre outras hipóteses,",
    alternativas: [
      { letra: "A", texto: "a realização de estatísticas e pesquisas científicas de evidente interesse público ou geral, previstas em lei, vedada a identificação da pessoa." },
      { letra: "B", texto: "qualquer pedido de jornalista, independentemente de previsão legal e de finalidade definida." },
      { letra: "C", texto: "a divulgação de prontuário para fins comerciais da empresa contratada pelo órgão." },
      { letra: "D", texto: "a publicação de lista de devedores em rede social institucional, para constrangimento do titular." },
      { letra: "E", texto: "o compartilhamento irrestrito entre órgãos, sem finalidade definida e sem controle de acesso." }
    ],
    gabarito: "A",
    justificativa: "O art. 31, § 3º, dispensa o consentimento quando as informações forem necessárias à prevenção e diagnóstico médico em favor de pessoa física ou legalmente incapaz para uso exclusivamente médico (I); à realização de estatísticas e pesquisas científicas de evidente interesse público ou geral, previstas em lei, vedada a identificação (II); ao cumprimento de ordem judicial (III); à defesa de direitos humanos (IV); ou à proteção do interesse público e geral preponderante (V). A alternativa A reproduz o inciso II. As demais criam hipóteses sem previsão legal, com finalidade ilícita ou sem os requisitos de finalidade e controle.",
    analise: {
      A: "CORRETA. Reproduz o inciso II, incluindo a vedação de identificação.",
      B: "INCORRETA. Erro conceitual: não existe hipótese genérica de 'pedido de jornalista'; a lei exige previsão e finalidade.",
      C: "INCORRETA. Erro conceitual: finalidade comercial não figura entre as hipóteses do § 3º.",
      D: "INCORRETA. Erro conceitual e de finalidade: exposição para constrangimento é ilícita e contrária à moralidade e à proteção da dignidade.",
      E: "INCORRETA. Erro conceitual: compartilhamento exige finalidade e controles; 'irrestrito' é incompatível com o regime."
    },
    regra: "Art. 31, § 3º: dispensa de consentimento com finalidade qualificada e, na pesquisa, vedação de identificação.",
    pegadinha: "Hipóteses de dispensa são típicas e finalísticas: 'qualquer jornalista' e 'qualquer órgão' não se enquadram.",
    fonte: "Lei nº 12.527/2011, art. 31, § 3º, I a V (verificado em 2026-10-21)."
  },

  { id: "q-m6-29", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "intermediario", topico: "m6-u3-t3-s1", assunto: "6.3 — Rastreabilidade e trilha de auditoria",
    contexto: "Um órgão público precisa investigar alterações em registros e acessos a dados pessoais sem coletar informações excessivas nem manter registros indefinidamente.",
    enunciado: "Ao definir uma trilha de auditoria para esse sistema, qual abordagem é tecnicamente mais adequada e compatível com os princípios de proteção de dados?",
    alternativas: [
      { letra: "A", texto: "Adotar um conjunto fixo de campos como mínimo legal universal, incluindo sempre a identidade civil completa do usuário e a versão de toda regra existente." },
      { letra: "B", texto: "Registrar eventos relevantes conforme a finalidade e o risco, com identificação adequada do ator ou serviço, data e hora, ação e recurso afetado; acrescentar contexto necessário, proteger os registros e definir acesso e retenção." },
      { letra: "C", texto: "Anonimizar irreversivelmente todos os registros no momento da criação, independentemente de a finalidade documentada exigir apuração individual de incidentes." },
      { letra: "D", texto: "Registrar somente totais agregados por setor, pois dados individualizados nunca podem ser tratados para segurança ou responsabilização." },
      { letra: "E", texto: "Guardar senhas ou tokens reutilizáveis junto aos eventos para provar qual credencial foi usada, mantendo os registros sem prazo de eliminação." }
    ],
    gabarito: "B",
    justificativa: "A trilha deve ser projetada para a finalidade concreta, os riscos e as exigências legais ou setoriais aplicáveis. Em geral, registros úteis podem incluir identidade técnica do usuário ou serviço, data e hora confiáveis, ação, recurso afetado, resultado e contexto necessário à investigação; a versão de uma regra ou modelo pode ser relevante quando influenciar a decisão. Isso não constitui uma lista legal universal nem autoriza coletar dados sem necessidade. É preciso controlar acesso, integridade, retenção e eventual dado pessoal registrado. A LGPD prevê registro das operações de tratamento e medidas de segurança, além do princípio da responsabilização e prestação de contas; não fixa nesses dispositivos um único esquema de campos para toda trilha. Anonimização, pseudonimização e identificação devem ser avaliadas conforme a finalidade e os riscos. Senhas e tokens secretos não devem ser registrados em logs.",
    analise: {
      A: "INCORRETA. Erro de generalização: não há nos dispositivos citados um conjunto fixo de campos imposto como mínimo legal universal; a coleta também deve respeitar finalidade e necessidade.",
      B: "CORRETA. Ajusta os eventos registrados à finalidade e ao risco e inclui controles de proteção, acesso e retenção, sem transformar boas práticas técnicas em regra legal absoluta.",
      C: "INCORRETA. Erro de absolutização: anonimização pode ser adequada em alguns usos, mas não é obrigatoriamente aplicável a todo registro no instante da criação; a decisão depende da finalidade, da necessidade e das salvaguardas.",
      D: "INCORRETA. Erro de generalização: dados agregados podem servir a métricas, mas podem ser insuficientes para investigar eventos individuais quando essa apuração for legítima e necessária.",
      E: "INCORRETA. Erro de segurança e retenção: segredos de autenticação não devem ser gravados em logs, e o prazo de conservação deve ser definido segundo finalidade, obrigações aplicáveis e necessidade."
    },
    regra: "Desenhar a trilha conforme finalidade, risco e requisitos aplicáveis; registrar apenas eventos e atributos necessários e proteger acesso, integridade e retenção.",
    pegadinha: "Não confundir uma prática técnica recomendável com um mínimo legal universal; proteção de dados não significa apagar sempre a autoria nem registrar indiscriminadamente todos os dados.",
    fonte: "Lei nº 13.709/2018 (LGPD), arts. 6º, III e X, 37 e 46; Lei nº 12.527/2011 (LAI), art. 6º, III; NIST SP 800-92, Guide to Computer Security Log Management (2006)."
  },

  { id: "q-m6-30", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u3-t3-s1", assunto: "6.3 — Responsabilização do órgão e de terceiro",
    contexto: "Um consultor externo, com credencial legítima, exportou uma base com CPF e endereço de beneficiários para uma conta pessoal de armazenamento, em desacordo com as instruções do órgão. Em seguida, compartilhou o arquivo com destinatário sem autorização. A exportação não foi registrada no módulo de auditoria, e o órgão alega que eventual responsabilidade é exclusiva do consultor.",
    enunciado: "A alegação do órgão é correta, pois eventual responsabilidade por divulgação não autorizada ou uso indevido de informação pessoal recai exclusivamente sobre o terceiro que realizou o compartilhamento.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «recai exclusivamente sobre o terceiro»: o art. 34 da LAI prevê responsabilidade direta dos órgãos e entidades públicos pelos danos causados em decorrência da divulgação não autorizada ou utilização indevida de informações sigilosas ou pessoais. Seu parágrafo único estende o dispositivo à pessoa física ou entidade privada vinculada ao poder público que submeta essas informações a tratamento indevido. A aplicação concreta exige apurar os fatos, o dano e o nexo causal pertinente.",
    justificativa: "A conduta descrita vai além da falta de registro: há compartilhamento com destinatário não autorizado e em desacordo com as instruções do órgão. O art. 34 da LAI não permite afastar de antemão a responsabilidade do órgão apenas porque o ato imediato foi praticado por terceiro vinculado; o parágrafo único também alcança esse terceiro. Isso não significa que a responsabilidade de cada envolvido, o dano e o nexo causal estejam automaticamente provados. A falta de trilha de auditoria é uma deficiência relevante para a apuração e pode indicar insuficiência de controles, mas, isoladamente, não comprova todos os requisitos de responsabilidade civil. A LGPD, art. 46, exige medidas técnicas e administrativas de segurança adequadas à proteção dos dados pessoais.",
    analise: {
      item: "Item FALSO. A alegação de exclusividade não se sustenta: a LAI prevê responsabilidade direta do órgão nas hipóteses do art. 34 e estende o dispositivo ao terceiro vinculado que trate indevidamente a informação. A atribuição concreta de responsabilidade depende da apuração dos fatos e dos requisitos aplicáveis.",
      leituraIncorreta: "Leitura que induz ao erro: concluir que o ato ter sido executado por um consultor com credencial legítima elimina a possível responsabilidade do órgão ou transforma a falta de log, por si só, em prova conclusiva de responsabilidade."
    },
    regra: "LAI, art. 34: verificar a divulgação não autorizada ou o uso indevido, o dano e os elementos pertinentes; o parágrafo único alcança pessoa física ou entidade privada vinculada que submeta informação protegida a tratamento indevido.",
    pegadinha: "Não confundir a previsão legal de responsabilidade com conclusão automática sobre culpa, dano ou nexo causal; tampouco atribuir toda a responsabilidade exclusivamente ao terceiro.",
    fonte: "Lei nº 12.527/2011, art. 34, caput e parágrafo único; Lei nº 13.709/2018, art. 46 (textos oficiais: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm e https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm)."
  },

  /* ---- 6.4 Redes sociais institucionais e conduta (3) ---- */

  { id: "q-m6-31", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "basico", topico: "m6-u4-t1-s2", assunto: "6.4 — Governança do canal institucional",
    contexto: "Órgãos públicos mantêm perfis institucionais em redes sociais, além de sítio oficial e portal de transparência.",
    enunciado: "Sobre o uso de redes sociais por órgão público, é correto afirmar que",
    alternativas: [
      { letra: "A", texto: "o uso é complementar: o dever de divulgação do art. 8º da LAI se cumpre nos sítios oficiais, e a rede social não os substitui." },
      { letra: "B", texto: "a rede social substitui o sítio oficial, por alcançar mais pessoas." },
      { letra: "C", texto: "o perfil institucional pode ser administrado com senha compartilhada pela equipe, desde que haja acordo interno documentado." },
      { letra: "D", texto: "a conta pessoal do servidor pode ser usada para publicar atos oficiais, desde que ele ocupe cargo de direção." },
      { letra: "E", texto: "a publicação em rede social dispensa registro de autoria e de aprovação, por se tratar de canal informal." }
    ],
    gabarito: "A",
    justificativa: "O art. 8º, § 2º, da LAI torna obrigatória a divulgação em sítios oficiais; a rede social é canal adicional, não substitutivo. A alternativa C contraria a governança do canal (titularidade do órgão, conta institucional, autenticação multifator e autoria individual, necessárias à rastreabilidade e à responsabilização); D desloca para a pessoa uma atribuição do cargo e dificulta comprovar a autoria institucional; E erra ao tratar a informalidade da plataforma como justificativa para dispensar controles internos. O registro de autoria e aprovação é apresentado aqui como prática de governança e controle, não como obrigação específica dos arts. 34 da LAI ou 43, IV, da Lei nº 14.129/2021, dispositivos que não fundamentam essa afirmação neste contexto.",
    analise: {
      A: "CORRETA. Rede social é complementar ao sítio oficial, que permanece obrigatório.",
      B: "INCORRETA. Erro conceitual: substituição contraria o art. 8º, § 2º.",
      C: "INCORRETA. Erro conceitual: credencial compartilhada impede autoria e responsabilização, ainda que haja acordo interno.",
      D: "INCORRETA. Erro conceitual: ato oficial exige canal institucional; hierarquia não converte conta pessoal em canal do órgão.",
      E: "INCORRETA. Erro conceitual: o caráter informal da plataforma não elimina a necessidade de controles internos, rastreabilidade e responsabilização; o registro de autoria e aprovação é boa prática de governança."
    },
    regra: "Canal institucional: titularidade do órgão, conta individual com segundo fator, política editorial, registro de publicação e rotina de correção; rede social é complementar.",
    pegadinha: "A alternativa C parece 'colaborativa' e é justamente o exemplo de falha de controle do currículo.",
    fonte: "Lei nº 12.527/2011, art. 8º, caput e § 2º; Lei nº 14.129/2021, art. 3º, IV (transparência na execução dos serviços públicos e divulgação de informações de interesse público; verificados em fontes oficiais em 2026-10-26)."
  },

  { id: "q-m6-32", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u4-t2-s1", assunto: "6.4 — Conflito de interesse: tipologia e tratamento",
    contexto: "Antes da homologação de uma licitação no Poder Executivo federal, o servidor responsável identifica que o irmão é sócio de uma das empresas concorrentes. Ainda não praticou ato que favoreça a empresa e comunica formalmente o vínculo à unidade de integridade.",
    enunciado: "O caso configura, e o tratamento adequado é",
    alternativas: [
      { letra: "A", texto: "risco potencial de conflito que deve ser formalmente avaliado; enquanto isso, cabe registrar o vínculo e adotar salvaguardas proporcionais, como afastamento do ato específico se necessário." },
      { letra: "B", texto: "situação irrelevante, pois não houve influência efetiva sobre o resultado." },
      { letra: "C", texto: "conflito real, que se resolve com comunicação verbal ao colega de equipe." },
      { letra: "D", texto: "impedimento definitivo para o exercício do cargo, com exoneração automática." },
      { letra: "E", texto: "questão estritamente privada, cujo registro é vedado para proteger a vida privada do servidor." }
    ],
    gabarito: "A",
    justificativa: "A Lei nº 12.813/2013 define conflito de interesses pelo confronto entre interesses públicos e privados que possa comprometer o interesse coletivo ou influenciar impropriamente a função (art. 3º, I), impõe dever preventivo (art. 4º) e inclui ato em benefício de pessoa jurídica da qual participe parente até o terceiro grau, quando a empresa possa ser beneficiada ou influir em sua gestão (art. 5º, V). O parentesco, isoladamente, não prova infração consumada: é necessário avaliar o ato, a atribuição do servidor e o risco de benefício. Antes da homologação, a resposta prudente é declarar e registrar formalmente o vínculo, consultar a unidade de integridade e adotar salvaguardas proporcionais, inclusive afastamento do ato específico quando indicado. A alternativa B ignora o risco preventivo; C propõe comunicação informal; D inventa exoneração automática; E impede o controle.",
    analise: {
      A: "CORRETA. Trata a situação como risco potencial, exige registro e avaliação formal e prevê salvaguardas proporcionais sem presumir infração consumada.",
      B: "INCORRETA. A ausência de influência efetiva até o momento não elimina o dever preventivo de avaliar e administrar o risco antes da decisão.",
      C: "INCORRETA. Comunicação apenas verbal não oferece registro formal adequado e não resolve o risco de imparcialidade.",
      D: "INCORRETA. Erro conceitual: o tratamento é do ato específico, não do vínculo funcional.",
      E: "INCORRETA. Erro conceitual: o vínculo que afeta a imparcialidade é matéria de interesse público, não questão privada opaca."
    },
    regra: "Prevenção de conflito: declarar e registrar o vínculo, avaliar a possibilidade de benefício ou influência e aplicar salvaguardas proporcionais; não presumir infração apenas pelo parentesco.",
    pegadinha: "Não confundir ausência de favorecimento consumado com ausência de risco preventivo; também não presumir infração automática só pelo parentesco.",
    fonte: "Lei nº 12.813/2013, arts. 3º, I, 4º e 5º, V (texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm); Manual de Tratamento de Conflito de Interesses, seção 4.5 (CGU/Fundação Cultural Palmares: https://www.gov.br/palmares/pt-br/midias/arquivos-menu-acesso-a-informacao/manual-tratamento-de-conflito-de-interesse-2022.pdf). O manual esclarece que o inciso V exige avaliar a prática de ato e o risco de beneficiar a pessoa jurídica, não apenas a existência de parentesco."
  },

  { id: "q-m6-33", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u4-t2-s2", assunto: "6.4 — Conduta em conta pessoal",
    contexto: "Servidor publica, em conta pessoal, foto da tela do sistema interno com nome e CPF de um cidadão, comentando o «caso curioso do dia», sem mencionar o órgão.",
    enunciado: "A conduta é irrelevante do ponto de vista institucional, pois a publicação ocorreu em perfil pessoal e não identificou o órgão.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «irrelevante … pois ocorreu em perfil pessoal»: a proteção da informação pessoal independe do canal, e a divulgação de dado de terceiro obtido no atendimento configura uso indevido de informação (art. 31, § 2º, e art. 32, IV, da LAI), ainda que o órgão não seja mencionado.",
    justificativa: "O dever de reserva decorre do cargo, não do canal. Quem obtém acesso a informação pessoal responde pelo uso indevido (§ 2º do art. 31), e divulgar ou permitir acesso indevido é conduta tipificada (art. 32, IV). A ausência de menção ao órgão não descaracteriza o vínculo entre o dado e o atendimento, nem afasta a LGPD (dado pessoal e dever de segurança). Além disso, a exposição de tela de sistema pode revelar detalhes de segurança interna.",
    analise: {
      item: "Item FALSO. Perfil pessoal não é zona franca: o dado foi obtido em razão do cargo e sua divulgação é uso indevido.",
      leituraIncorreta: "Leitura que induz ao erro: separar 'vida pessoal' e 'exercício do cargo' como se o dever de reserva terminasse ao sair do sistema. O dever acompanha a informação obtida."
    },
    regra: "Dever de reserva alcança o canal pessoal: dado de terceiro obtido no serviço não se divulga, com ou sem menção ao órgão.",
    pegadinha: "«Não citei o órgão» é o argumento mais frequente para tentar descaracterizar a violação — e não funciona.",
    fonte: "Lei nº 12.527/2011, art. 31, caput e § 2º, e art. 32, IV; Lei nº 13.709/2018, art. 5º, I, e art. 46 (verificados em 2026-10-20/21)."
  },

  /* ---- 6.5 Acessibilidade e inclusão digital (2) ---- */

  { id: "q-m6-34", modulo: 6, formato: "mc", estilo: "vunesp", origem: "autoral",
    nivel: "basico", topico: "m6-u5-t1-s2", assunto: "6.5 — Acessibilidade de conteúdo digital",
    contexto: "A acessibilidade é diretriz do Governo Digital e requisito dos sítios oficiais.",
    enunciado: "Sobre acessibilidade de conteúdo digital no serviço público, é correto afirmar que",
    alternativas: [
      { letra: "A", texto: "os sítios oficiais devem adotar medidas que garantam acessibilidade a pessoas com deficiência, e a prática inclui texto alternativo em imagens, legenda em vídeos e navegação por teclado." },
      { letra: "B", texto: "a acessibilidade se resolve com a publicação do conteúdo em PDF." },
      { letra: "C", texto: "o formato aberto garante, por si só, a acessibilidade do conteúdo." },
      { letra: "D", texto: "a acessibilidade é recomendação sem base legal para sítios oficiais." },
      { letra: "E", texto: "acessibilidade e inclusão digital são sinônimos, pois ambas tratam apenas de conexão à internet." }
    ],
    gabarito: "A",
    justificativa: "O art. 8º, § 3º, VIII, da LAI exige medidas para garantir acessibilidade de conteúdo a pessoas com deficiência, e o art. 3º, XIX, da Lei nº 14.129/2021 adota a acessibilidade como diretriz. As práticas correspondem às dimensões perceptível, operável, compreensível e robusta: texto alternativo, legenda e transcrição, contraste, navegação por teclado, rótulos explícitos e compatibilidade com tecnologia assistiva. A alternativa B confunde formato com acessibilidade; C repete o erro para formato aberto; D nega base legal expressa; E reduz dois conceitos distintos — acessibilidade é condição de uso por pessoa com deficiência, e inclusão digital envolve conexão, equipamento, habilidade e condições socioeconômicas.",
    analise: {
      A: "CORRETA. Combina o dispositivo legal com práticas técnicas verificáveis.",
      B: "INCORRETA. Erro conceitual: PDF sem estrutura e sem marcação é inacessível a leitor de tela; o formato não garante nada.",
      C: "INCORRETA. Erro conceitual: formato aberto serve à reutilização; acessibilidade depende de estrutura, semântica e alternativa.",
      D: "INCORRETA. Erro conceitual: há base legal expressa (LAI, art. 8º, § 3º, VIII; Lei nº 14.129/2021, art. 3º, XIX).",
      E: "INCORRETA. Erro conceitual de sinonímia: são conceitos relacionados e distintos."
    },
    regra: "Acessibilidade: base legal nos sítios oficiais (LAI, art. 8º, § 3º, VIII) e diretriz do Governo Digital (art. 3º, XIX), com práticas técnicas verificáveis.",
    pegadinha: "Trocar 'formato aberto' por 'acessível' é o erro conceitual mais frequente da unidade 6.5.",
    fonte: "Lei nº 12.527/2011, art. 8º, § 3º, VIII; Lei nº 14.129/2021, art. 3º, XIX (verificados em 2026-10-21)."
  },

  { id: "q-m6-35", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m6-u5-t2-s1", assunto: "6.5 — Preservação do atendimento presencial",
    contexto: "Analise a afirmação sobre a relação entre digitalização e atendimento presencial.",
    enunciado: "A digitalização de um serviço público autoriza a extinção do atendimento presencial, pois a Lei nº 14.129/2021 prioriza o autosserviço.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «autoriza a extinção»: a lei preserva a permanência do atendimento presencial (art. 3º, XVI, e art. 14), conforme características, relevância e público-alvo do serviço, e o autosserviço é diretriz de simplificação, não causa de supressão do canal presencial.",
    justificativa: "O art. 3º, XVI, assegura a permanência da possibilidade de atendimento presencial, e o art. 14 determina a prestação digital por tecnologias de amplo acesso, inclusive de baixa renda e de áreas rurais e isoladas. O art. 3º, X, estimula o autosserviço, mas o faz ao lado da universalização do acesso. A leitura correta é de convivência: a digitalização amplia canais e não elimina o canal que atende quem está fora ou não consegue usar o digital.",
    analise: {
      item: "Item FALSO. A lei não autoriza extinguir o presencial; ela o preserva como garantia de inclusão.",
      leituraIncorreta: "Leitura que induz ao erro: tomar 'prioriza o autosserviço' como 'elimina o balcão'. Simplificação e universalização são diretrizes simultâneas, e o art. 3º, XVI, é expresso."
    },
    regra: "Digitalizar não é extinguir: art. 3º, XVI, e art. 14 preservam o atendimento presencial e exigem tecnologia de amplo acesso.",
    pegadinha: "Itens que deduzem extinção de canal a partir de preferência legal invertem o sentido da diretriz.",
    fonte: "Lei nº 14.129/2021, arts. 3º, X e XVI, e 14 (verificado em 2026-10-21)."
  },

  /* ---- 6.6 Automação, supervisão humana e estudos de caso (8) ---- */

  { id: "q-m6-36", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral",
    nivel: "basico", topico: "m6-u6-t1-s2", assunto: "6.6 — Níveis de automação de decisão",
    contexto: "A classificação de níveis de automação é ferramenta de governança: quanto maior o nível, maior o conjunto de salvaguardas exigidas.",
    enunciado: "No nível em que o sistema decide e produz efeito imediato, com revisão posterior por amostra ou por gatilho de risco, tem-se",
    alternativas: [
      { letra: "A", texto: "decisão automatizada com revisão posterior ou amostral." },
      { letra: "B", texto: "decisão manual pura, com apoio documental." },
      { letra: "C", texto: "apoio à decisão, com decisão final do servidor antes do efeito." },
      { letra: "D", texto: "decisão automatizada com revisão prévia como condição de eficácia." },
      { letra: "E", texto: "automação plena, sem qualquer revisão." }
    ],
    gabarito: "A",
    justificativa: "A classificação didática adotada no módulo distingue: decisão manual pura (N0); apoio à decisão, em que o sistema calcula e o servidor decide (N1); decisão automatizada com revisão prévia, em que o efeito depende da revisão (N2); decisão automatizada com revisão posterior ou amostral, com efeito imediato e revisão por amostra ou gatilho (N3); decisão automatizada com autorização prévia em alçada (N4); e automação plena (N5). O enunciado descreve o N3, cuja exigência adicional é amostragem dimensionada e gatilhos de risco.",
    analise: {
      A: "CORRETA. Corresponde ao nível em que o efeito é imediato e a revisão é posterior, por amostra ou gatilho.",
      B: "INCORRETA. Erro conceitual: no manual puro não há decisão do sistema.",
      C: "INCORRETA. Erro conceitual: no apoio à decisão o efeito só ocorre depois da decisão humana.",
      D: "INCORRETA. Erro conceitual: na revisão prévia o ato não produz efeito antes da revisão.",
      E: "INCORRETA. Erro conceitual: automação plena dispensa revisão — o enunciado prevê revisão posterior."
    },
    regra: "N0 manual; N1 apoio; N2 revisão prévia; N3 revisão posterior/amostral; N4 alçada; N5 automação plena — salvaguardas crescem com o nível.",
    pegadinha: "A diferença entre N2 e N3 é o momento da revisão (antes ou depois do efeito), não a existência dela.",
    fonte: "Currículo do Módulo 6, unidade 6.6 (classificação didática de níveis de automação); Lei nº 14.129/2021, art. 48, II (2026-10-21)."
  },

  { id: "q-m6-37", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u6-t1-s3", assunto: "6.6 — Desenho da supervisão humana",
    contexto: "Sistema nega automaticamente requerimentos; a única revisão humana ocorre quando o cidadão reclama. O órgão afirma que a revisão é suficiente e apresenta taxa de reversão global de 4%.",
    enunciado: "A avaliação correta do desenho de supervisão é:",
    alternativas: [
      { letra: "A", texto: "a revisão por reclamação é detecção do caso relatado e depende da capacidade de reclamar; deve ser complementada por amostragem estratificada e gatilhos de risco, e o indicador global pode mascarar erro concentrado em subgrupos." },
      { letra: "B", texto: "o desenho é suficiente, pois existe revisão humana e a taxa de reversão é baixa." },
      { letra: "C", texto: "o desenho é suficiente desde que a reclamação seja registrada em protocolo formal." },
      { letra: "D", texto: "o desenho é inválido porque a lei veda decisão automatizada que negue benefício em qualquer hipótese." },
      { letra: "E", texto: "o desenho é adequado se a amostra de reclamações for ampliada para 10% dos casos." }
    ],
    gabarito: "A",
    justificativa: "Revisão por reclamação não é controle de qualidade: é detecção do caso relatado, e depende de o cidadão saber que foi prejudicado, ter acesso e capacidade de reclamar — o que enviesa a detecção. O desenho correto combina amostragem aleatória e estratificada, gatilhos objetivos (erro histórico, reclamação, subgrupo com desempenho pior) e revisão integral nos casos de maior impacto. O indicador global de reversão esconde concentração de erro em subgrupos. A alternativa D cria vedação que a lei não estabelece; B e C confundem existência de revisão com desenho adequado; E apenas aumenta o volume do canal enviesado.",
    analise: {
      A: "CORRETA. Reconhece o viés do canal de reclamação, propõe complementação por amostragem estratificada e gatilhos e critica o indicador global.",
      B: "INCORRETA. Erro conceitual: existir revisão não significa que ela detecte erro; taxa global baixa pode conviver com erro concentrado.",
      C: "INCORRETA. Erro conceitual: protocolo formal não corrige o viés de quem reclama.",
      D: "INCORRETA. Erro conceitual: a lei não veda automação; exige conformidade, motivação, registro e canal de revisão.",
      E: "INCORRETA. Erro conceitual: ampliar a amostra de reclamações mantém o mesmo vício de seleção."
    },
    regra: "Supervisão = alçada + gatilho + amostragem estratificada + registro + indicadores por subgrupo; reclamação é complemento, não controle.",
    pegadinha: "'Existe revisão humana' é resposta de aparência: o que se avalia é o desenho, não a existência.",
    fonte: "Lei nº 14.129/2021, art. 48, II; Currículo do Módulo 6, unidade 6.6 (desenho da supervisão humana)."
  },

  {
    id: "q-m6-38", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "avancado", topico: "m6-u6-t2-s1", assunto: "6.6 — Estudo de caso: vazamento com credencial legítima",
    contexto: "Auditoria aponta que o perfil de consulta permitia exportar a base inteira de beneficiários sem registro de download, e três fornecedores usavam esse perfil. Após a denúncia, a equipe revogou as credenciais compartilhadas. A investigação posterior constatou que os registros de sessão eram voláteis, foram sobrescritos durante a revogação e não havia cópia centralizada; não foi possível reconstruir todas as ações realizadas.",
    enunciado: "Sobre a condução do caso, a análise correta é:",
    alternativas: [
      { letra: "A", texto: "houve falha de desenho — exportação massiva sem registro e sem menor privilégio — e falha de resposta por não preservar os registros voláteis antes de uma ação que comprovadamente os sobrescreveu; a contenção das credenciais, por si só, não é o erro." },
      { letra: "B", texto: "a revogação imediata de credenciais é suficiente e dispensa a preservação de logs, pois o risco foi eliminado." },
      { letra: "C", texto: "não há falha de desenho, pois o acesso era legítimo e autorizado." },
      { letra: "D", texto: "a responsabilidade é exclusivamente dos fornecedores, por serem os usuários do perfil." },
      { letra: "E", texto: "o caso se resolve com a comunicação ao titular, sem necessidade de apuração interna." }
    ],
    gabarito: "A",
    justificativa: "O caso apresenta uma falha de desenho: um perfil compartilhado permite exportação massiva sem registro de download, contrariando a necessidade de medidas de segurança proporcionais ao risco (LGPD, arts. 46 e 49). Também houve falha de resposta porque os registros de sessão, que eram voláteis e foram sobrescritos durante a revogação, não foram preservados nem copiados centralmente. A contenção de credenciais pode ser necessária e não deve ser atrasada automaticamente; a equipe deve coordenar a contenção com a coleta e preservação das evidências, documentando as ações. A alternativa D atribui responsabilidade exclusiva aos fornecedores sem investigação; a aplicação do art. 34 da LAI depende de divulgação não autorizada ou uso indevido de informação sigilosa ou pessoal, fatos que precisam ser apurados. Comunicação de incidente, quando cabível, não substitui investigação nem correção dos controles.",
    analise: {
      A: "CORRETA. Identifica a falha de desenho e a perda comprovada de evidência, sem tratar a revogação de credenciais como erro por definição.",
      B: "INCORRETA. Erro de método: conter o acesso não dispensa preservar evidências relevantes nem documentar as providências.",
      C: "INCORRETA. Erro conceitual: autorização de acesso não justifica privilégio excessivo, compartilhamento de perfil ou ausência de registro de exportações.",
      D: "INCORRETA. Erro de atribuição prematura: o uso por fornecedores não exclui a necessidade de apurar controles do órgão, condutas individuais e responsabilidades aplicáveis.",
      E: "INCORRETA. Erro de procedimento: comunicar o incidente quando exigido não substitui apuração, preservação de evidências e correção das falhas."
    },
    regra: "Resposta a incidente: coordenar contenção e preservação de evidências; coletar registros voláteis antes de ações que possam sobrescrevê-los, quando isso puder ser feito sem atrasar uma contenção urgente; documentar as ações e corrigir os controles.",
    pegadinha: "Não confunda a revogação de credenciais — medida potencialmente necessária de contenção — com a perda de evidência causada por uma ação que sobrescreve registros sem preservação prévia.",
    fonte: "Lei nº 13.709/2018, arts. 46, 48 e 49 (texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm); Lei nº 12.527/2011, art. 34 (aplicabilidade condicionada à divulgação não autorizada ou uso indevido de informação sigilosa ou pessoal: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm); NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide, seções sobre contenção e coleta/preservação de evidências (https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf; consultado em 2026-10-26)."
  },
  { id: "q-m6-39", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u6-t2-s2", assunto: "6.6 — Estudo de caso: uso de IA sem revisão",
    contexto: "Servidor usa ferramenta de IA generativa para redigir resposta a reclamação, insere o texto integral da reclamação (com nome e CPF) em ferramenta externa sem verificar se seu uso está autorizado pelas regras do órgão, não confere o resultado e publica no canal oficial. A resposta informa prazo que não consta do sistema.",
    enunciado: "O uso de IA generativa pode ser admitido como apoio de redação, e a publicação dispensa revisão porque a responsabilidade é da ferramenta que gerou o texto.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «dispensa revisão porque a responsabilidade é da ferramenta»: a saída de IA é rascunho e deve ser revisada e conferida em fonte oficial antes da publicação. A ferramenta não substitui os deveres de revisão do agente público. O envio de dados pessoais a ferramenta externa deve ser avaliado conforme a finalidade, a base legal, as instruções institucionais e as medidas de segurança aplicáveis.",
    justificativa: "O item é FALSO porque a possibilidade de usar IA como apoio não autoriza publicar uma resposta sem conferência nem transfere à ferramenta os deveres de quem valida e divulga a comunicação oficial. O art. 5º da LAI exige que o acesso à informação seja assegurado de forma transparente, clara e em linguagem de fácil compreensão; não deve ser citado, isoladamente, como regra específica de veracidade de toda saída de IA. A LGPD exige que o tratamento de dados pessoais tenha hipótese legal aplicável e observe os princípios pertinentes, além de medidas de segurança (arts. 6º, 7º ou 23, conforme o caso, e 46). A responsabilidade civil ou administrativa concreta não decorre automaticamente do simples uso da ferramenta: depende dos fatos, do regime jurídico e dos requisitos aplicáveis. O prazo inventado demonstra uma informação incorreta que a conferência poderia ter identificado.",
    analise: {
      item: "Item FALSO por predicado: usar IA como apoio pode ser admissível, mas isso não valida publicação sem revisão nem transfere à ferramenta os deveres de conferência e validação da comunicação oficial.",
      leituraIncorreta: "Leitura que induz ao erro: concordar com a primeira metade ('é aceitável como apoio') e não examinar a segunda ('dispensa revisão'). Em C/E, a segunda metade decide."
    },
    regra: "IA em redação oficial: tratar a saída como rascunho, revisar e conferir informações antes da publicação; avaliar finalidade, base legal, minimização e segurança antes de inserir dados pessoais em ferramenta externa, conforme as regras institucionais.",
    pegadinha: "O uso da IA como apoio não valida automaticamente o conteúdo produzido, não dispensa revisão e não afasta os deveres legais e institucionais do agente público.",
    fonte: "Lei nº 12.527/2011, art. 5º (dever de assegurar acesso transparente e claro); Lei nº 13.709/2018, arts. 6º, 7º ou 23, conforme o regime aplicável, e 46 (princípios, hipótese legal e segurança); Lei nº 14.129/2021, conforme seu âmbito de aplicação. Textos oficiais: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm ; https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm ; https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm."
  },

  { id: "q-m6-40", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u6-t2-s2", assunto: "6.6 — Estudo de caso: transparência administrativa incompleta",
    contexto: "O portal de transparência publica a estrutura organizacional, mas não traz resultados de licitações nem contratos do exercício corrente. O catálogo de dados abertos não registra atualização há 18 meses, embora tenham ocorrido novas licitações e contratos no período. O órgão afirma que cumpre a LAI porque responde pedidos em 20 dias.",
    enunciado: "A afirmação do órgão é",
    alternativas: [
      { letra: "A", texto: "incorreta: o art. 8º, § 1º, IV, da LAI exige divulgação de informações sobre procedimentos licitatórios, inclusive editais e resultados, e sobre todos os contratos celebrados; o § 3º, VI, exige manter atualizadas as informações disponíveis. Atender pedidos não substitui a divulgação de ofício." },
      { letra: "B", texto: "correta, pois a LAI exige apenas resposta a pedidos de acesso." },
      { letra: "C", texto: "correta, pois a atualização dos dados publicados é facultativa." },
      { letra: "D", texto: "incorreta apenas quanto ao prazo de resposta, que deveria ser de 48 horas." },
      { letra: "E", texto: "correta, desde que o órgão publique anualmente o rol de informações classificadas." }
    ],
    gabarito: "A",
    justificativa: "A LAI determina a divulgação de ofício, no mínimo, das informações sobre procedimentos licitatórios — inclusive editais e resultados — e de todos os contratos celebrados (art. 8º, § 1º, IV); também exige manter atualizadas as informações disponibilizadas no sítio (art. 8º, § 3º, VI). O cenário registra licitações e contratos novos sem divulgação e ausência prolongada de atualização do catálogo, não apenas uma periodicidade abstrata. A Lei nº 14.129/2021, art. 29, § 1º, VI, prevê atualização periódica com histórico para os órgãos e entidades abrangidos por seu âmbito de aplicação. Transparência ativa e passiva são cumulativas: responder pedidos não sana a omissão de divulgação de ofício. A alternativa D erra o prazo: o art. 11 da LAI prevê até 20 dias, prorrogáveis por mais 10 mediante justificativa expressa; E trata do dever distinto do art. 30 e não supre a omissão descrita.",
    analise: {
      A: "CORRETA. Aponta os dois dispositivos descumpridos e a independência entre transparência ativa e passiva.",
      B: "INCORRETA. Erro conceitual: a LAI impõe também o dever de divulgar de ofício.",
      C: "INCORRETA. Erro conceitual: a manutenção atualizada é exigência expressa do § 3º, VI.",
      D: "INCORRETA. Erro de prazo e de foco: 20 dias é o prazo legal de resposta, e o problema central é a omissão de publicação.",
      E: "INCORRETA. Erro conceitual de substituição: publicar o rol do art. 30 é dever distinto e não cumpre o § 1º, IV."
    },
    regra: "Portal em conformidade: rol do art. 8º, § 1º, completo, requisitos do § 3º (inclusive atualização) e dados abertos atualizados com histórico.",
    pegadinha: "Órgão que 'responde bem aos pedidos' mas não publica cria a aparência de conformidade — a prova cobra justamente a distinção.",
    fonte: "Lei nº 12.527/2011, arts. 8º, § 1º, IV, § 3º, VI, 11 e 30 (texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm); Lei nº 14.129/2021, art. 29, § 1º, VI, observada a aplicabilidade definida no art. 2º (texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm)."
  },
  {
    id: "q-m6-41", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "m6-u4-t2-s1", assunto: "6.4 — Conflito de interesses",
    contexto: "No âmbito do Poder Executivo federal, agente público abrangido pela Lei nº 12.813/2013 participa de decisão administrativa que pode favorecer empresa ligada a interesse privado seu. A apuração inicial ainda não identificou prejuízo ao erário nem vantagem efetivamente recebida.",
    enunciado: "Qual conclusão é juridicamente mais adequada sobre a ausência de prejuízo ou de vantagem comprovada?",
    alternativas: [
      { letra: "A", texto: "Ela afasta necessariamente o conflito, pois só existe infração quando há dano financeiro." },
      { letra: "B", texto: "Ela impede qualquer avaliação até que se comprove pagamento ao agente público." },
      { letra: "C", texto: "Ela torna o caso exclusivamente disciplinar, sem necessidade de prevenção." },
      { letra: "D", texto: "Ela não afasta, por si só, a possibilidade de conflito; a situação deve ser avaliada e prevenida conforme a lei e as circunstâncias." },
      { letra: "E", texto: "Ela prova que houve conflito e determina exoneração automática." }
    ],
    gabarito: "D",
    justificativa: "A Lei nº 12.813/2013, art. 4º, exige prevenir ou impedir possível conflito e resguardar informação privilegiada. Seu § 2º estabelece que a ocorrência de conflito independe de lesão ao patrimônio público ou de recebimento de vantagem pelo agente ou por terceiro. Isso não significa que qualquer vínculo prove automaticamente uma infração: é necessário avaliar os fatos, a função e o regime aplicável.",
    analise: {
      A: "INCORRETA. A lei não condiciona a existência de conflito a dano financeiro.",
      B: "INCORRETA. A prevenção não depende de comprovar pagamento ou vantagem consumada.",
      C: "INCORRETA. O dever legal inclui prevenir ou impedir situações potencialmente conflitantes.",
      D: "CORRETA. Ausência de dano ou vantagem não encerra a análise; o risco deve ser avaliado sem presumir automaticamente uma infração.",
      E: "INCORRETA. A ausência de dano não prova nem exclui o conflito, e a lei não estabelece exoneração automática apenas por essa circunstância."
    },
    regra: "No âmbito de aplicação da Lei nº 12.813/2013, conflito de interesses não depende de dano ao erário nem de vantagem efetivamente recebida; a avaliação deve considerar os fatos e o dever preventivo.",
    pegadinha: "Não confundir ausência de prejuízo com ausência de conflito, nem risco potencial com infração automaticamente comprovada.",
    fonte: "Lei nº 12.813/2013, arts. 1º a 4º, especialmente art. 4º, § 2º (texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm). A lei tem âmbito próprio; a incidência concreta depende do cargo, entidade e circunstâncias previstos nela."
  },
  {
    id: "q-m6-42", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "m6-u4-t1-s2", assunto: "6.4 — Governança de redes sociais institucionais",
    contexto: "Cinco servidores publicam e moderam o perfil oficial de um órgão usando a mesma senha. A instituição não consegue atribuir com confiança cada ação, não revisa periodicamente as permissões e não definiu fluxo de aprovação nem procedimento para retirar acessos quando alguém muda de função.",
    enunciado: "Qual conjunto de controles enfrenta melhor os riscos de acesso indevido, falta de rastreabilidade e publicação não autorizada?",
    alternativas: [
      { letra: "A", texto: "Manter a senha compartilhada e exigir uma planilha assinada no fim de cada mês." },
      { letra: "B", texto: "Desativar registros de atividade para reduzir a quantidade de dados armazenados." },
      { letra: "C", texto: "Usar identidades e permissões individualizadas sempre que a plataforma permitir, aplicar privilégio mínimo e autenticação forte, revisar e revogar acessos, registrar ações e definir fluxo de aprovação." },
      { letra: "D", texto: "Permitir publicação livre e investigar apenas quando houver reclamação pública." },
      { letra: "E", texto: "Criar uma segunda senha compartilhada para quem aprova conteúdo, sem alterar os demais acessos." }
    ],
    gabarito: "C",
    justificativa: "O Guia do Framework de Privacidade e Segurança da Informação (PPSI 2.0), no Controle 6, recomenda gerir concessão, revisão e revogação de acessos, aplicar privilégio mínimo e autenticação forte para funções críticas. A recomendação do CISC gov.br esclarece que o controle deve abranger também redes sociais oficiais. Registros de atividade e aprovação editorial complementam esses controles, desde que sejam proporcionais, protegidos e compatíveis com as capacidades da plataforma. Se ela não oferecer identidades separadas para todos os operadores, o órgão deve documentar uma alternativa controlada, sem presumir que uma planilha posterior resolva a falta de atribuição.",
    analise: {
      A: "INCORRETA. A assinatura posterior de uma planilha não substitui controles de acesso e não garante que a ação possa ser atribuída de forma confiável a uma pessoa.",
      B: "INCORRETA. Registros não devem ser eliminados indiscriminadamente; a organização precisa definir registros proporcionais à finalidade, ao risco e às regras aplicáveis.",
      C: "CORRETA. A alternativa combina identificação, acesso mínimo, autenticação, revisão e revogação, rastreabilidade e aprovação de conteúdo.",
      D: "INCORRETA. Uma resposta apenas reativa não previne publicação indevida nem controla quem pode operar a conta.",
      E: "INCORRETA. Uma segunda credencial compartilhada mantém a dificuldade de atribuição individual e não corrige a gestão do ciclo de vida dos acessos."
    },
    regra: "A gestão segura de perfis institucionais deve controlar concessão, revisão e revogação de acessos, aplicar privilégio mínimo e autenticação adequada e estabelecer responsabilidades de publicação.",
    pegadinha: "Não presumir que todas as plataformas oferecem os mesmos recursos de contas e auditoria; quando houver limitações, a instituição precisa documentar controles compensatórios.",
    fonte: "Secretaria de Governo Digital, Guia do Framework de Privacidade e Segurança da Informação (PPSI 2.0), Controle 6 — Gestão de acesso: https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi-2.0/arquivos/guiafwppsi2-0-v1-2-30012026.pdf/%40%40download/file; CISC gov.br, #002 — Gestão do controle de acessos e reforço da conscientização, com aplicação expressa às redes sociais oficiais: https://www.gov.br/cisc/pt-br/recomendacoes/002-gestao-do-controle-de-acessos-e-reforco-da-conscientizacao; Secom, Guia de boas práticas para atuação de redes sociais do Governo Federal: https://www.gov.br/secom/pt-br/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf."
  },
  {
    id: "q-m6-43", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "m6-u5-t1-s2", assunto: "6.5 — Acessibilidade e inclusão digital",
    contexto: "Formulário de serviço público contém 27 campos, não permite salvar e retomar e, quando detecta erros, não identifica claramente o campo nem orienta a correção. A equipe ainda não verificou quais dados são indispensáveis nem testou o fluxo com tecnologias assistivas.",
    enunciado: "Qual resposta reduz barreiras e permite avaliar se o serviço digital se tornou mais acessível?",
    alternativas: [
      { letra: "A", texto: "Manter o formulário e recomendar outro navegador, sem alterar o processo." },
      { letra: "B", texto: "Adicionar mais campos obrigatórios para evitar dúvidas posteriores." },
      { letra: "C", texto: "Remover mensagens de erro e deixar que o usuário descubra o problema." },
      { letra: "D", texto: "Validar a necessidade de cada dado, simplificar etapas, permitir salvar e retomar, oferecer erros identificáveis e orientações de correção, testar acessibilidade e acompanhar conclusão e abandono." },
      { letra: "E", texto: "Tornar o canal digital exclusivo e encaminhar dificuldades apenas a uma página de perguntas frequentes." }
    ],
    gabarito: "D",
    justificativa: "A equipe deve verificar se cada dado é necessário, reduzir etapas evitáveis e apoiar a recuperação de erros e a continuidade do preenchimento. A Lei Brasileira de Inclusão, art. 63, exige acessibilidade nos sítios governamentais. As WCAG 2.2, critérios 3.3.1 e 3.3.3, tratam da identificação textual dos erros e, quando conhecidas, de sugestões para corrigi-los. Testes com pessoas e tecnologias assistivas, junto de métricas de conclusão e abandono, ajudam a verificar resultados; a quantidade de campos, isoladamente, não prova uma violação.",
    analise: {
      A: "INCORRETA. Recomendar outro navegador transfere o ônus ao cidadão sem investigar as barreiras do serviço.",
      B: "INCORRETA. Campos obrigatórios adicionais podem aumentar esforço e coleta excessiva; cada campo deve ser justificado pela finalidade do serviço.",
      C: "INCORRETA. Erros detectados devem ser identificados em texto, e sugestões de correção devem ser fornecidas quando conhecidas e apropriadas.",
      D: "CORRETA. A alternativa combina simplificação baseada em necessidade, continuidade, assistência para corrigir erros, testes de acessibilidade e métricas de resultado.",
      E: "INCORRETA. Um FAQ não corrige por si só as barreiras do formulário, e a exclusividade digital pode excluir pessoas que enfrentam obstáculos de acesso."
    },
    regra: "Serviços digitais acessíveis devem remover barreiras verificadas, identificar erros de forma compreensível, orientar correções e ser avaliados com testes e métricas de uso.",
    pegadinha: "Não concluir que 27 campos, por si só, tornam o formulário inacessível; a avaliação considera necessidade, barreiras reais e conformidade com diretrizes aplicáveis.",
    fonte: "Lei nº 13.146/2015 (Lei Brasileira de Inclusão), art. 63, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm; W3C, Web Content Accessibility Guidelines (WCAG) 2.2, critérios 3.3.1 — Error Identification e 3.3.3 — Error Suggestion: https://www.w3.org/TR/wcag/; Governo Digital, Modelo de Acessibilidade em Governo Eletrônico (eMAG): https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade."
  },
  {
    id: "q-m6-44", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "m6-u6-t3-s1", assunto: "6.6 — Método de resolução de questões — transparência e dados pessoais",
    contexto: "Um cidadão solicita cópia de processo de contratação pública. O documento contém objeto, valores e decisões administrativas, mas também CPF, endereço residencial e dados de contato pessoal de pessoas físicas. A equipe considera negar acesso ao processo inteiro por conter dados pessoais.",
    enunciado: "À luz da LAI e das orientações de transparência e proteção de dados, qual encaminhamento é mais adequado?",
    alternativas: [
      { letra: "A", texto: "Avaliar quais trechos estão sujeitos a restrição legal, ocultar de modo seguro os dados pessoais cuja divulgação não seja autorizada e fornecer o restante do documento, com a justificativa cabível." },
      { letra: "B", texto: "Negar integralmente o acesso sempre que um documento público contiver qualquer dado pessoal." },
      { letra: "C", texto: "Divulgar todos os dados sem análise, pois a publicidade administrativa elimina qualquer proteção de dados pessoais." },
      { letra: "D", texto: "Substituir o documento por um resumo elaborado pela equipe, mesmo quando seja possível fornecer cópia parcial." },
      { letra: "E", texto: "Cobrir visualmente os dados no PDF, sem verificar se o texto ocultado continua selecionável ou recuperável no arquivo." }
    ],
    gabarito: "A",
    justificativa: "A análise deve distinguir a informação de interesse público dos trechos cuja divulgação esteja legalmente restrita. A LAI estabelece a publicidade como regra e prevê, no art. 7º, § 2º, o acesso à parte não sigilosa por certidão, extrato ou cópia com ocultação da parte sob sigilo. O art. 31 estabelece proteção específica para informações pessoais. A ocultação deve ser efetiva, e não apenas uma tarja visual que deixe o dado recuperável. A decisão depende do conteúdo e da base legal aplicável; a presença de dado pessoal não justifica automaticamente negar o documento inteiro.",
    analise: {
      A: "CORRETA. Preserva o acesso à informação pública e restringe apenas os trechos cuja divulgação não seja autorizada, com tratamento seguro e justificativa adequada.",
      B: "INCORRETA. A existência de dados pessoais não torna automaticamente todo o documento inacessível; deve-se avaliar o acesso à parte não restrita.",
      C: "INCORRETA. A publicidade como regra não elimina as restrições e salvaguardas previstas em lei para informações pessoais.",
      D: "INCORRETA. Um resumo não substitui automaticamente o acesso à parte não sigilosa quando a cópia parcial é viável.",
      E: "INCORRETA. Uma tarja meramente visual pode deixar o dado recuperável; a versão pública deve ser sanitizada de forma efetiva, preservando o original restrito."
    },
    regra: "Ao conciliar transparência e proteção de dados, identifique a base legal de eventual restrição e viabilize acesso à parte não protegida; a ocultação precisa ser efetiva.",
    pegadinha: "Evite os dois extremos: divulgar indiscriminadamente dados protegidos ou negar todo o documento só porque contém algum dado pessoal.",
    fonte: "Lei nº 12.527/2011 (LAI), arts. 7º, § 2º, e 31, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm; Ministério da Gestão e da Inovação em Serviços Públicos, Boas práticas em anonimização de dados, publicado em 19/05/2026: https://www.gov.br/gestao/pt-br/acesso-a-informacao/privacidade-e-protecao-de-dados/lgpd-no-mgi-1/anonimizacao/boas-praticas-em-anonimizacao-de-dados."
  },
  {
    id: "q-m6-45", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral", nivel: "intermediario",
    topico: "m6-u1-t3", assunto: "6.1 — Síntese aplicada dos princípios administrativos",
    contexto: "Uma equipe de governo digital propõe automatizar a concessão de um benefício. O sistema reduz o tempo médio de resposta, mas não documenta critérios, não permite contestação e não prevê revisão de decisões potencialmente equivocadas.",
    enunciado: "Qual encaminhamento melhor concilia eficiência administrativa com os demais princípios aplicáveis ao serviço público?",
    alternativas: [
      { letra: "A", texto: "Implantar imediatamente, pois a melhoria da velocidade torna dispensáveis os demais controles." },
      { letra: "B", texto: "Suspender toda automação pública, porque decisões administrativas nunca podem ser apoiadas por sistemas digitais." },
      { letra: "C", texto: "Definir critérios e responsabilidades, documentar decisões, testar riscos e vieses, prever revisão humana proporcional ao risco e oferecer canal de contestação." },
      { letra: "D", texto: "Manter o sistema sem documentação, desde que a taxa média de atendimento seja superior à do processo manual." },
      { letra: "E", texto: "Delegar a responsabilidade integral ao fornecedor do software e dispensar monitoramento após a implantação." }
    ],
    gabarito: "C",
    justificativa: "A eficiência é relevante, mas não afasta legalidade, impessoalidade, publicidade na medida cabível, motivação, controle e responsabilização. Um serviço automatizado precisa ter critérios definidos, avaliação de riscos, registro suficiente, mecanismos de correção e revisão compatíveis com o impacto das decisões.",
    analise: {
      A: "INCORRETA. Ganho de velocidade não elimina os demais deveres administrativos nem justifica decisões sem controle.",
      B: "INCORRETA. A automação pode apoiar serviços públicos, desde que haja governança, controles e respeito aos direitos aplicáveis.",
      C: "CORRETA. A alternativa combina critérios transparentes, responsabilização, avaliação de risco e mecanismos de revisão e contestação.",
      D: "INCORRETA. Um indicador médio não demonstra, sozinho, legalidade, equidade, qualidade ou correção de decisões individuais.",
      E: "INCORRETA. A contratação de fornecedor não elimina a responsabilidade do órgão pela governança e supervisão do serviço."
    },
    regra: "A eficiência deve ser conciliada com legalidade, impessoalidade, transparência cabível, motivação, controle e responsabilização.",
    pegadinha: "Não confundir melhoria de desempenho médio com prova suficiente de que cada decisão é correta, justa e contestável.",
    fonte: "Constituição Federal, art. 37, caput (princípios gerais da Administração Pública), texto oficial: https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm. Os controles específicos de documentação, avaliação de riscos, revisão e contestação são apresentados nesta questão como práticas de governança digital proporcionais ao risco, não como transcrição literal de um único dispositivo."
  },
  {
    id: "q-m6-46", modulo: 6, formato: "mc", estilo: "vunesp", origem: "autoral", nivel: "intermediario",
    topico: "m6-u4-t3", assunto: "6.4 — Síntese aplicada de comunicação e conduta digital",
    contexto: "Um perfil institucional publica informação incorreta sobre um serviço. A equipe identifica o erro, mas alguns responsáveis defendem apagar silenciosamente a publicação e não registrar a correção para evitar críticas.",
    enunciado: "Qual procedimento é mais adequado para uma comunicação pública responsável?",
    alternativas: [
      { letra: "A", texto: "Apagar a publicação sem explicação e impedir que usuários solicitem esclarecimentos." },
      { letra: "B", texto: "Corrigir a informação com clareza, registrar a retificação conforme o procedimento do órgão, orientar o público afetado e preservar evidências necessárias à prestação de contas." },
      { letra: "C", texto: "Manter a informação incorreta para não demonstrar falha institucional." },
      { letra: "D", texto: "Transferir a responsabilidade aos usuários que compartilharam a publicação." },
      { letra: "E", texto: "Responder apenas por mensagens privadas, sem corrigir o conteúdo público que continua circulando." }
    ],
    gabarito: "B",
    justificativa: "A comunicação institucional deve ser confiável, responsável e orientada ao interesse público. Corrigir publicamente uma informação errada reduz a propagação do erro e permite que quem recebeu a mensagem identifique a versão válida. O registro da correção deve seguir as regras de governança e preservação aplicáveis.",
    analise: {
      A: "INCORRETA. A exclusão silenciosa pode deixar o público sem contexto e não corrige cópias já compartilhadas.",
      B: "CORRETA. A retificação clara, o registro e a orientação ao público favorecem transparência e responsabilização.",
      C: "INCORRETA. Preservar uma informação sabidamente errada agrava o risco de desinformação.",
      D: "INCORRETA. O órgão deve corrigir a informação que publicou e não deslocar a responsabilidade para o público.",
      E: "INCORRETA. Mensagens privadas não corrigem a publicação pública que continua acessível ou compartilhada."
    },
    regra: "Erros em comunicação institucional devem ser corrigidos de forma clara, rastreável e proporcional ao alcance e ao impacto da informação.",
    pegadinha: "Apagar o post não garante que o erro deixou de circular; a correção precisa alcançar o público que recebeu a informação.",
    fonte: "Secretaria de Comunicação Social da Presidência da República, Guia de boas práticas para atuação de redes sociais do Governo Federal: https://www.gov.br/secom/pt-br/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf."
  },
  {
    id: "q-m6-47", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "intermediario",
    topico: "m6-u5-t3", assunto: "6.5 — Síntese aplicada de acessibilidade e inclusão",
    contexto: "Após reformular um serviço digital, a equipe observa que mais usuários concluem o formulário. Ainda não testou navegação por teclado, leitor de tela nem a compreensão das mensagens de erro por pessoas com diferentes necessidades.",
    enunciado: "Qual conclusão e próxima ação são tecnicamente mais adequadas?",
    alternativas: [
      { letra: "A", texto: "O aumento da conclusão comprova conformidade integral com os requisitos de acessibilidade." },
      { letra: "B", texto: "Basta verificar contraste de cores, pois os demais aspectos são preferências individuais." },
      { letra: "C", texto: "A equipe deve avaliar apenas usuários sem deficiência para manter os resultados comparáveis." },
      { letra: "D", texto: "O indicador é útil, mas insuficiente sozinho; é necessário testar critérios aplicáveis, navegação por teclado, tecnologia assistiva, compreensão e tarefas com usuários diversos." },
      { letra: "E", texto: "A acessibilidade pode ser adiada se o serviço apresentar bom desempenho em dispositivos móveis." }
    ],
    gabarito: "D",
    justificativa: "Uma métrica agregada de conclusão ajuda a avaliar o serviço, mas não demonstra sozinha a conformidade com requisitos de acessibilidade nem revela todas as barreiras. A avaliação deve combinar critérios técnicos aplicáveis, testes de teclado e tecnologias assistivas, conteúdo compreensível e participação de usuários com necessidades diversas.",
    analise: {
      A: "INCORRETA. Melhoria de uma métrica não prova atendimento a todos os critérios de acessibilidade.",
      B: "INCORRETA. Contraste é apenas uma dimensão; também importam teclado, estrutura, nomes acessíveis, mensagens e outras barreiras.",
      C: "INCORRETA. Excluir pessoas com deficiência impede observar barreiras relevantes para a população usuária.",
      D: "CORRETA. Combina métricas de resultado com verificações técnicas e avaliação com usuários diversos.",
      E: "INCORRETA. Desempenho responsivo não substitui acessibilidade e não justifica postergar a remoção de barreiras."
    },
    regra: "A acessibilidade deve ser avaliada por critérios técnicos aplicáveis, testes de interação e evidências de uso por pessoas com diferentes necessidades.",
    pegadinha: "Uma taxa de conclusão melhor pode coexistir com barreiras específicas que afetam grupos de usuários.",
    fonte: "W3C, Web Content Accessibility Guidelines (WCAG) 2.2: https://www.w3.org/TR/WCAG22/; Governo Digital, Modelo de Acessibilidade em Governo Eletrônico (eMAG): https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade."
  }
  ];
