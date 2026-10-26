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
    justificativa: "A legalidade administrativa é a submissão da atuação pública à norma: a Administração só age quando há previsão ou autorização normativa e deve observar a competência e o procedimento. A alternativa A inverte a lógica aplicável ao particular (autonomia da vontade), que não vale para o Poder Público; C confunde legalidade com conveniência; D reduz a legalidade à disponibilidade orçamentária; E transforma a legalidade em vedação ao poder regulamentar, que é justamente instrumento de execução da lei.",
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
    justificativa: "Impessoalidade significa tratamento desvinculado do arbítrio do servidor, com critérios previamente definidos e igualmente aplicáveis a casos iguais. No ambiente digital, isso se traduz em critério escrito, comunicável e auditável. A alternativa A reintroduz o arbítrio individual; C troca impessoalidade por opacidade, violando também a publicidade; D confunde impessoalidade com resultado uniforme — o princípio exige o mesmo critério, não o mesmo resultado, e a lei pode determinar diferenciação legítima (por exemplo, acessibilidade e proteção de dados pessoais); E desloca para o fornecedor uma competência que é do órgão.",
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
    nivel: "basico", topico: "m6-u1-t1-s2", assunto: "6.1 — Moralidade e finalidade do tratamento de dados",
    contexto: "A moralidade administrativa opera na zona que a lei não cobre e complementa a legalidade.",
    enunciado: "A moralidade administrativa, aplicada ao tratamento de dados em serviço público digital, veda, entre outras condutas,",
    alternativas: [
      { letra: "A", texto: "o desvio de finalidade: usar dado coletado para o atendimento com propósito diverso, como ranking de desempenho." },
      { letra: "B", texto: "a adoção de critérios públicos e impessoais de decisão." },
      { letra: "C", texto: "a recusa de vantagem pessoal oferecida por fornecedor interessado no contrato." },
      { letra: "D", texto: "a divulgação, em transparência ativa, de indicadores agregados de atendimento." },
      { letra: "E", texto: "a revisão humana de decisões automatizadas de maior impacto." }
    ],
    gabarito: "A",
    justificativa: "A moralidade exige compatibilidade entre a finalidade declarada e a finalidade real do tratamento. Coletar dado para atender e usá-lo para ranking é desvio de finalidade — conduta vedada ainda que houvesse algum amparo formal. As demais alternativas descrevem condutas conformes: critérios públicos (B), recusa de vantagem (C), transparência ativa de dado agregado (D) e revisão humana de decisões de impacto (E).",
    analise: {
      A: "CORRETA. Desvio de finalidade é o exemplo típico de violação da moralidade no tratamento de dados: o dado serve ao serviço, não a finalidade superveniente.",
      B: "INCORRETA. Erro conceitual de inversão: critério público e impessoal é o que a moralidade e a impessoalidade exigem, não o que vedam.",
      C: "INCORRETA. Erro conceitual de inversão: recusar vantagem é conduta exigível; a vedação recai sobre aceitá-la.",
      D: "INCORRETA. Erro conceitual de confusão entre transparência e exposição: indicador agregado é transparência legítima; a exposição vedada é a de dado identificável.",
      E: "INCORRETA. Erro conceitual de inversão: a revisão humana é salvaguarda, não conduta vedada."
    },
    regra: "Moralidade digital: a finalidade declarada da coleta deve ser a finalidade real do uso; desvio de finalidade é violação autônoma.",
    pegadinha: "Questões que apresentam como 'vedado' exatamente o que a norma exige são armadilha de leitura; confira a direção do verbo.",
    fonte: "CF/88, art. 37, caput; Lei nº 12.527/2011, art. 31, caput; Lei nº 13.709/2018, arts. 5º, I, e 6º, I a III (finalidade, adequação e necessidade; verificados em fontes oficiais em 2026-10-26)."
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
    justificativa: "A LAI adota expressamente a publicidade como preceito geral e o sigilo como exceção (art. 3º, I), e a Constituição ressalva apenas o sigilo imprescindível à segurança da sociedade e do Estado. A alternativa A ignora o regime da informação pessoal (art. 31 da LAI) e a LGPD; C transforma dever em faculdade; D reduz o dever a um meio arcaico, incompatível com a divulgação em sítios oficiais; E cria hipótese de levantamento de sigilo que a lei não prevê.",
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
    justificativa: "Eficiência é qualidade do serviço com uso racional de recursos, e não autoriza renúncia a direitos nem eliminação de controles: a própria Lei de Governo Digital condiciona a eliminação de formalidades ao custo econômico ou social superior ao risco envolvido (art. 3º, XI). A alternativa A reduz eficiência a custo; C elimina controle sem juízo de risco; D contraria a permanência do atendimento presencial (art. 3º, XVI, e art. 14); E ignora que o art. 22 exige painel com solicitações em andamento e concluídas, tempo médio e grau de satisfação.",
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
    justificativa: "O art. 1º da LGPD dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado; o art. 5º define controlador como quem decide sobre o tratamento. A alternativa A nega a incidência expressa da lei; C reduz o regime ao consentimento, quando a própria lei prevê outras hipóteses de tratamento; D ignora que dado sensível tem disciplina mais restritiva, mesmo no setor público; E cria oposição inexistente: LAI e LGPD se complementam e o art. 1º, parágrafo único, da Lei de Governo Digital manda observar ambas.",
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
    justificativa: "O art. 8º, caput, da LAI impõe o dever de promover, independentemente de requerimentos, a divulgação, em local de fácil acesso, de informações de interesse coletivo ou geral produzidas ou custodiadas pelo órgão. A alternativa A descreve transparência passiva; C reduz o dever a dois itens de um rol mínimo maior; D inventa restrição de destinatários; E transforma dever em faculdade.",
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
    justificativa: "O art. 3º fixa cinco diretrizes a serem observadas nos procedimentos de acesso, entre elas a do inciso III (meios viabilizados pela tecnologia da informação). A obrigatoriedade é reforçada pelo art. 8º, § 2º, que impõe a divulgação em sítios oficiais da rede mundial de computadores. Não há, portanto, discricionariedade sobre adotar ou não o meio digital.",
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
    contexto: "Para «dar transparência» a um programa social, um órgão publica no portal e em rede social a relação nominal dos beneficiários de um bairro, com nome completo e valor recebido, invocando o art. 8º da LAI.",
    enunciado: "A publicação é legítima, pois o art. 8º da LAI impõe a divulgação de informações de interesse coletivo ou geral.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «é legítima, pois o art. 8º impõe»: o dever de publicidade incide sobre o que é público; nome e valor recebido são informação pessoal e dado pessoal, cuja divulgação por terceiros exige previsão legal ou consentimento expresso (art. 31, § 1º, II, da LAI).",
    justificativa: "A publicidade administrativa divulga o que é público do órgão; a lista nominada expõe o que é da pessoa. O art. 31, caput, exige tratamento transparente com respeito à intimidade, vida privada, honra e imagem; o § 1º, II, só admite divulgação a terceiros com previsão legal ou consentimento expresso; o § 4º impede invocar a restrição para prejudicar apuração, mas não autoriza divulgação. A via correta é dado agregado (art. 8º, § 1º, V) e, para pesquisa, base anonimizada (art. 31, § 3º, II; art. 36 da Lei nº 14.129/2021).",
    analise: {
      item: "Item FALSO. A finalidade de transparência não converte dado pessoal em informação pública; falta base legal ou consentimento.",
      leituraIncorreta: "Leitura que induz ao erro: concluir que 'transparência total' é dever. O art. 29, § 1º, VIII, da Lei nº 14.129/2021 exige respeito à privacidade dos dados pessoais e sensíveis justamente na transparência ativa."
    },
    regra: "Publicidade administrativa ≠ divulgação irrestrita de dados pessoais: o que é da pessoa só se divulga com base legal ou consentimento, e preferencialmente de forma agregada.",
    pegadinha: "A expressão «em nome da transparência» precede, com frequência, o erro mais grave do módulo.",
    fonte: "Lei nº 12.527/2011, art. 4º, IV, art. 8º, § 1º, V, e art. 31, caput, § 1º, II e § 3º, II; Lei nº 13.709/2018, art. 5º, I; Lei nº 14.129/2021, arts. 29, § 1º, VIII, e 36 (verificados em 2026-10-20/21)."
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
    contexto: "A responsabilização depende de reconstruir a cadeia de eventos de uma decisão ou de um acesso a dados.",
    enunciado: "Uma trilha de auditoria é considerada útil para responsabilização quando registra, no mínimo,",
    alternativas: [
      { letra: "A", texto: "usuário individual, data e hora, ação executada, objeto afetado, resultado e versão da regra aplicada." },
      { letra: "B", texto: "apenas o endereço IP da estação, que identifica o servidor responsável pelo acesso." },
      { letra: "C", texto: "apenas data e hora do acesso, preservada a identidade por política de privacidade interna." },
      { letra: "D", texto: "o total de acessos por setor, sem detalhamento individual." },
      { letra: "E", texto: "a senha compartilhada do setor e o turno em que ocorreu o acesso." }
    ],
    gabarito: "A",
    justificativa: "Rastreabilidade é a capacidade de reconstruir quem fez o quê, quando, em que sistema, com que autorização e sobre qual versão da regra. Os componentes mínimos são identificador do usuário (conta individual), data e hora com fuso, ação, objeto afetado, resultado e versão da regra ou do modelo. A alternativa B confunde estação com pessoa; C suprime a identidade, inviabilizando imputação; D agrega e perde o indivíduo; E registra credencial compartilhada, que por definição não identifica autoria — além de ser prática contrária ao não repúdio.",
    analise: {
      A: "CORRETA. Reúne os seis componentes que permitem reconstituir o caso concreto.",
      B: "INCORRETA. Erro conceitual: IP identifica estação/rede, não a pessoa; sem conta individual não há autoria.",
      C: "INCORRETA. Erro conceitual: anonimizar o log de auditoria elimina a própria finalidade da trilha.",
      D: "INCORRETA. Erro conceitual de agregação indevida: total por setor não permite apuração individual.",
      E: "INCORRETA. Erro conceitual: credencial compartilhada impede não repúdio e responsabilização."
    },
    regra: "Trilha útil = usuário individual + data/hora + ação + objeto + resultado + versão da regra; sem isso, a apuração é narrativa.",
    pegadinha: "Log sem identidade individual parece 'proteção de dados', mas destrói accountability — proteção de dados não se faz apagando autoria de acesso.",
    fonte: "Lei nº 12.527/2011, arts. 6º, III, e 34; Lei nº 13.709/2018, arts. 6º, X, 37 e 46 (verificados em fontes oficiais em 2026-10-26)."
  },

  { id: "q-m6-30", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u3-t3-s1", assunto: "6.3 — Responsabilização do órgão e de terceiro",
    contexto: "Um consultor externo, com credencial legítima, exportou base com CPF e endereço de beneficiários. A exportação não foi registrada no módulo de auditoria, e o órgão alega que a responsabilidade é exclusiva do consultor.",
    enunciado: "A alegação do órgão é correta, pois a responsabilidade por dano decorrente de uso indevido de informação pessoal recai apenas sobre quem praticou o ato.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «recai apenas sobre quem praticou o ato»: o art. 34 responsabiliza os órgãos e entidades públicos diretamente pelos danos causados em consequência de divulgação não autorizada ou utilização indevida de informação sigilosa ou pessoal, com apuração de responsabilidade funcional em caso de dolo ou culpa e direito de regresso; o parágrafo único estende o dispositivo a pessoa física ou entidade privada vinculada ao poder público.",
    justificativa: "O regime é de responsabilidade direta do órgão, sem prejuízo da apuração individual. O fato de o acesso ser legítimo não afasta a falha de desenho: perfil que permite exportação massiva sem registro contraria o dever de segurança (art. 46 da LGPD) e a exigência de controles proporcionais ao risco (art. 48 da Lei nº 14.129/2021). Também incide o art. 32, IV, que tipifica divulgar ou permitir acesso indevido a informação pessoal. A responsabilidade do terceiro existe, mas é cumulativa, não excludente.",
    analise: {
      item: "Item FALSO. A responsabilidade do órgão é direta (art. 34, caput), e o parágrafo único alcança o terceiro vinculado; a existência de credencial legítima não elimina a falha de controle.",
      leituraIncorreta: "Leitura que induz ao erro: concluir que 'acesso autorizado' equivale a 'acesso seguro'. Autorização sem controle de exportação e sem trilha é, ela própria, deficiência de desenho."
    },
    regra: "Art. 34: órgão responde diretamente pelo dano; apura-se dolo ou culpa do agente, com direito de regresso; o regime alcança o privado vinculado (parágrafo único).",
    pegadinha: "Itens que transferem integralmente a responsabilidade ao terceiro ou ao fornecedor ignoram o caput do art. 34.",
    fonte: "Lei nº 12.527/2011, art. 32, IV, e art. 34, caput e parágrafo único; Lei nº 13.709/2018, art. 46; Lei nº 14.129/2021, art. 48 (verificados em 2026-10-20/21)."
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

  { id: "q-m6-38", modulo: 6, formato: "mc", estilo: "fgv", origem: "autoral",
    nivel: "avancado", topico: "m6-u6-t2-s1", assunto: "6.6 — Estudo de caso: vazamento com credencial legítima",
    contexto: "Auditoria aponta que o perfil de consulta permitia exportar a base inteira de beneficiários sem registro de download, e três fornecedores usavam esse perfil. Após a denúncia, a equipe rotacionou todas as credenciais antes de copiar os logs.",
    enunciado: "Sobre a condução do caso, a análise correta é:",
    alternativas: [
      { letra: "A", texto: "houve falha de desenho — exportação massiva sem registro e sem menor privilégio — e falha na preservação da evidência, pois a rotação de credenciais antes da cópia dos logs compromete a apuração." },
      { letra: "B", texto: "a rotação imediata de credenciais é suficiente e dispensa a preservação de logs, pois o risco foi eliminado." },
      { letra: "C", texto: "não há falha de desenho, pois o acesso era legítimo e autorizado." },
      { letra: "D", texto: "a responsabilidade é exclusivamente dos fornecedores, por serem os usuários do perfil." },
      { letra: "E", texto: "o caso se resolve com a comunicação ao titular, sem necessidade de apuração interna." }
    ],
    gabarito: "A",
    justificativa: "O caso tem duas falhas autônomas. A primeira é de desenho: perfil de consulta que permite exportação massiva, sem registro de download e compartilhado por três fornecedores, contraria o menor privilégio e o dever de segurança (art. 46 da LGPD) e a exigência de controles proporcionais ao risco (art. 48 da Lei nº 14.129/2021). A segunda é de resposta ao incidente: a evidência deve ser preservada antes de qualquer rotação de credencial. A responsabilidade do órgão é direta (art. 34 da LAI), o que afasta a alternativa D; comunicar o titular não substitui apuração nem correção de desenho.",
    analise: {
      A: "CORRETA. Separa falha de desenho e falha de preservação de evidência, na ordem correta de tratamento.",
      B: "INCORRETA. Erro de método: conter não é apagar rastro; a rotação antes da cópia destrói a trilha.",
      C: "INCORRETA. Erro conceitual: acesso autorizado não equivale a controle adequado — exportação massiva sem registro é falha de desenho.",
      D: "INCORRETA. Erro conceitual: a responsabilidade do órgão é direta, sem prejuízo da apuração do terceiro.",
      E: "INCORRETA. Erro conceitual: comunicação ao titular é uma providência entre outras; não dispensa apuração e correção."
    },
    regra: "Incidente: conter, preservar evidência, avaliar extensão, comunicar, analisar o controle que falhou, corrigir e registrar.",
    pegadinha: "A ordem das providências é objeto de prova: preservar a prova vem antes de mexer no ambiente.",
    fonte: "Lei nº 12.527/2011, arts. 6º, III, 32, IV, e 34; Lei nº 13.709/2018, arts. 37, 46, 48 e 49 (verificados em fontes oficiais em 2026-10-26)."
  },

  { id: "q-m6-39", modulo: 6, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u6-t2-s2", assunto: "6.6 — Estudo de caso: uso de IA sem revisão",
    contexto: "Servidor usa ferramenta de IA generativa para redigir resposta a reclamação, insere o texto integral da reclamação (com nome e CPF), não revisa o resultado e publica no canal oficial. A resposta informa prazo que não consta do sistema.",
    enunciado: "O uso da ferramenta é aceitável como apoio de redação, e a publicação dispensa revisão porque a responsabilidade é da ferramenta que gerou o texto.",
    alternativas: null,
    gabarito: "errado",
    trechoDeterminante: "O trecho que torna o item FALSO é «dispensa revisão porque a responsabilidade é da ferramenta»: a saída de IA é rascunho e exige revisão humana e conferência em fonte oficial; o conteúdo publicado é de responsabilidade do órgão e do servidor, e a inserção de dado pessoal na ferramenta exige base e política que a autorizem.",
    justificativa: "O primeiro período do item é verdadeiro — o uso como apoio de redação é legítimo —, mas o predicado é falso, e em prova de certo/errado basta um predicado falso. Publicar saída não verificada como comunicação oficial contraria o dever de informação verdadeira e clara (art. 5º da LAI; art. 3º, VII, da Lei nº 14.129/2021); a responsabilidade pelo ato é do órgão (art. 34 da LAI); e o dado pessoal inserido em ferramenta externa configura tratamento que exige base legal e medidas de segurança (art. 46 da LGPD). O erro sobre o prazo é o dano concreto que a revisão teria evitado.",
    analise: {
      item: "Item FALSO por predicado: meio lícito (apoio de redação) não valida publicação sem revisão nem transfere responsabilidade à ferramenta.",
      leituraIncorreta: "Leitura que induz ao erro: concordar com a primeira metade ('é aceitável como apoio') e não examinar a segunda ('dispensa revisão'). Em C/E, a segunda metade decide."
    },
    regra: "IA em redação oficial: apoio com revisão humana obrigatória, conferência em fonte oficial, vedação de inserir dado pessoal/sigiloso e registro do uso.",
    pegadinha: "Item com primeira metade correta e segunda errada é o formato clássico de meia-verdade; leia até o fim antes de julgar.",
    fonte: "Lei nº 12.527/2011, arts. 5º e 34; Lei nº 13.709/2018, arts. 5º, I, e 46; Lei nº 14.129/2021, arts. 3º, VII, 48 e 49 (verificados em 2026-10-20/21)."
  },

  { id: "q-m6-40", modulo: 6, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m6-u6-t2-s2", assunto: "6.6 — Estudo de caso: transparência administrativa incompleta",
    contexto: "O portal de transparência publica a estrutura organizacional, mas não traz resultados de licitações nem contratos do exercício corrente; o conjunto de dados abertos não é atualizado há 18 meses. O órgão afirma que cumpre a LAI porque responde pedidos em 20 dias.",
    enunciado: "A afirmação do órgão é",
    alternativas: [
      { letra: "A", texto: "incorreta: o art. 8º, § 1º, IV, exige divulgação de licitações, inclusive resultados, e de todos os contratos, e o § 3º, VI, exige manutenção atualizada; atender pedidos não supre o dever de divulgação de ofício." },
      { letra: "B", texto: "correta, pois a LAI exige apenas resposta a pedidos de acesso." },
      { letra: "C", texto: "correta, pois a atualização dos dados publicados é facultativa." },
      { letra: "D", texto: "incorreta apenas quanto ao prazo de resposta, que deveria ser de 48 horas." },
      { letra: "E", texto: "correta, desde que o órgão publique anualmente o rol de informações classificadas." }
    ],
    gabarito: "A",
    justificativa: "O art. 8º, § 1º, IV, exige informações concernentes a procedimentos licitatórios, inclusive editais e resultados, e a todos os contratos celebrados; o § 3º, VI, exige manutenção atualizada das informações. A Lei nº 14.129/2021, art. 29, § 1º, VI, exige atualização periódica com histórico. Transparência ativa e passiva são cumulativas: responder pedidos não sana a omissão de divulgação de ofício. A alternativa D erra o prazo (o art. 11 da LAI fixa 20 dias, prorrogáveis por 10) e não enfrenta a omissão principal; E trata de dever diverso (art. 30 da LAI) e não supre o § 1º, IV.",
    analise: {
      A: "CORRETA. Aponta os dois dispositivos descumpridos e a independência entre transparência ativa e passiva.",
      B: "INCORRETA. Erro conceitual: a LAI impõe também o dever de divulgar de ofício.",
      C: "INCORRETA. Erro conceitual: a manutenção atualizada é exigência expressa do § 3º, VI.",
      D: "INCORRETA. Erro de prazo e de foco: 20 dias é o prazo legal de resposta, e o problema central é a omissão de publicação.",
      E: "INCORRETA. Erro conceitual de substituição: publicar o rol do art. 30 é dever distinto e não cumpre o § 1º, IV."
    },
    regra: "Portal em conformidade: rol do art. 8º, § 1º, completo, requisitos do § 3º (inclusive atualização) e dados abertos atualizados com histórico.",
    pegadinha: "Órgão que 'responde bem aos pedidos' mas não publica cria a aparência de conformidade — a prova cobra justamente a distinção.",
    fonte: "Lei nº 12.527/2011, art. 8º, § 1º, IV, e § 3º, VI, e art. 30; Lei nº 14.129/2021, art. 29, § 1º, VI (verificados em 2026-10-21)."
  },
  {
    id: "q-m6-41", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "modulo-6-unidade-1-topico-3", assunto: "Ética e governança em TI", contexto: "Durante uma contratação pública, integrante da comissão identifica relação pessoal relevante com representante de empresa participante.", enunciado: "Qual conduta inicial é mais compatível com integridade e prevenção de conflito de interesses?",
    alternativas: [
      { letra: "A", texto: "Prosseguir, desde que não assine o contrato final." },
      { letra: "B", texto: "Ocultar a relação para não atrasar a contratação." },
      { letra: "C", texto: "Participar após declaração informal de apoio técnico." },
      { letra: "D", texto: "Publicar dados pessoais do representante em rede social." },
      { letra: "E", texto: "Declarar formalmente a situação e acionar o procedimento institucional competente antes de atuar." }
    ],
    gabarito: "E", justificativa: "A situação deve ser declarada e tratada pelo procedimento aplicável, prevenindo influência indevida e registrando a decisão; o enquadramento concreto depende do regime jurídico e das regras do órgão.",
    analise: {
      A: "INCORRETA. A influência pode ocorrer durante a instrução e na avaliação da proposta, mesmo que o integrante não assine o contrato.",
      B: "INCORRETA. O ocultamento impede que a instituição avalie e trate o possível conflito.",
      C: "INCORRETA. Uma declaração informal de apoio técnico não substitui o procedimento formal de análise do conflito.",
      D: "INCORRETA. Expor dados pessoais em rede social não é procedimento de integridade e pode criar outro dano.",
      E: "CORRETA. A declaração formal e o encaminhamento permitem que a instituição avalie o caso antes da atuação do integrante."
    },
    regra: "Risco de conflito deve ser declarado e tratado por canal formal.", pegadinha: "Transparência não autoriza exposição indiscriminada de dados pessoais.", fonte: "Currículo M6 — modulo-6-unidade-1-topico-3 (ética e governança em TI)."
  },
  {
    id: "q-m6-42", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "modulo-6-unidade-4-topico-3", assunto: "Governança de redes sociais institucionais", contexto: "Cinco servidores acessam o perfil institucional usando a mesma senha. Não há autoria confiável nem fluxo formal de aprovação.", enunciado: "Qual conjunto de medidas corrige melhor a falha de governança?",
    alternativas: [
      { letra: "A", texto: "Manter senha compartilhada e pedir planilha mensal assinada." },
      { letra: "B", texto: "Desativar registros para reduzir coleta de dados." },
      { letra: "C", texto: "Adotar acessos individualizados, privilégio mínimo, autenticação forte, registro de autoria e aprovação formal." },
      { letra: "D", texto: "Permitir publicação livre e revisar apenas após reclamações." },
      { letra: "E", texto: "Criar uma segunda senha comum para quem aprova conteúdo." }
    ],
    gabarito: "C", justificativa: "Identidades individuais e privilégio mínimo permitem atribuir ações; autenticação forte reduz acesso indevido; registros e aprovação formal fortalecem auditoria e controle editorial.",
    analise: {
      A: "INCORRETA. Uma planilha assinada posteriormente não garante identidade digital nem atribuição confiável de cada ação.",
      B: "INCORRETA. A trilha de auditoria deve ser proporcional e protegida, não simplesmente desativada.",
      C: "CORRETA. Contas individuais, privilégio mínimo, autenticação forte, registros e aprovação formal cobrem identidade, acesso, rastreabilidade e controle editorial.",
      D: "INCORRETA. Revisão apenas após reclamações é reativa e não previne publicações indevidas.",
      E: "INCORRETA. Uma segunda senha compartilhada mantém o problema de atribuição individual e controle de acesso."
    },
    regra: "Canal institucional exige identidade individual, acesso mínimo, trilha de auditoria e responsabilidades editoriais.", pegadinha: "Assinar planilha depois da publicação não equivale a autenticação individual.", fonte: "Currículo M6 — modulo-6-unidade-4-topico-3 (governança de redes sociais e conduta)."
  },
  {
    id: "q-m6-43", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "modulo-6-unidade-5-topico-3", assunto: "Acessibilidade e inclusão digital", contexto: "Formulário de serviço público tem 27 campos, não permite salvar e retomar e exibe erros sem indicar como corrigi-los.", enunciado: "Qual resposta reduz barreiras sem abandonar a digitalização?",
    alternativas: [
      { letra: "A", texto: "Manter formulário e recomendar outro navegador." },
      { letra: "B", texto: "Adicionar mais campos obrigatórios." },
      { letra: "C", texto: "Remover mensagens de erro para simplificar a página." },
      { letra: "D", texto: "Mapear dados necessários, simplificar etapas, permitir salvar e retomar, corrigir acessibilidade e medir abandono." },
      { letra: "E", texto: "Tornar canal digital exclusivo e encaminhar dificuldades apenas a um FAQ." }
    ],
    gabarito: "D", justificativa: "A solução deve eliminar exigências desnecessárias, tornar erros compreensíveis, apoiar a continuidade e testar acessibilidade; a taxa de abandono permite avaliar o efeito.",
    analise: {
      A: "INCORRETA. Recomendar outro navegador transfere o ônus ao cidadão sem investigar as barreiras do serviço.",
      B: "INCORRETA. Campos obrigatórios adicionais podem aumentar esforço e coleta excessiva, em vez de simplificar.",
      C: "INCORRETA. Mensagens de erro claras são necessárias para que a pessoa consiga corrigir o formulário.",
      D: "CORRETA. Simplificação, salvamento e retomada, correção de acessibilidade e medição de abandono permitem reduzir barreiras e avaliar o resultado.",
      E: "INCORRETA. Um FAQ não corrige a barreira do formulário, e exclusividade digital pode excluir pessoas."
    },
    regra: "Acessibilidade exige remover barreiras, testar e acompanhar conclusão e abandono.", pegadinha: "Digitalizar um processo não o torna automaticamente acessível ou simples.", fonte: "Currículo M6 — modulo-6-unidade-5-topico-3 (acessibilidade e inclusão digital)."
  },
  {
    id: "q-m6-44", modulo: 6, formato: "mc", estilo: "fcc", origem: "autoral", nivel: "avancado",
    topico: "modulo-6-unidade-6-topico-3", assunto: "Método de resolução de questões", contexto: "Um item descreve publicação de documento por servidor, mas não esclarece se é público, pessoal ou sigiloso. Alternativas misturam transparência, proteção de dados e sigilo.", enunciado: "Qual método reduz o risco de marcar uma alternativa apenas por parecer correta?",
    alternativas: [
      { letra: "A", texto: "Escolher a alternativa com mais citações sem verificar contexto." },
      { letra: "B", texto: "Identificar sujeito e conduta, definir o regime, localizar o dispositivo e confrontar as afirmações com a norma aplicável." },
      { letra: "C", texto: "Tratar transparência como regra absoluta que sempre prevalece." },
      { letra: "D", texto: "Assumir que a intenção do servidor determina sozinha a legalidade." },
      { letra: "E", texto: "Ignorar o enunciado e memorizar o número da lei." }
    ],
    gabarito: "B", justificativa: "A resolução parte do contexto e da conduta, identifica o regime e testa as alternativas contra o dispositivo pertinente, observando termos absolutos e mistura de regimes.",
    analise: {
      A: "INCORRETA. Mais citações não garantem pertinência; é necessário verificar o contexto e a norma aplicável.",
      B: "CORRETA. A sequência identifica os fatos relevantes, o regime jurídico e o dispositivo antes de avaliar as alternativas.",
      C: "INCORRETA. Transparência tem de ser conciliada com proteção de dados e hipóteses legais de sigilo, conforme o caso.",
      D: "INCORRETA. A intenção isolada não determina a legalidade; importam a conduta, o contexto e a norma.",
      E: "INCORRETA. Memorizar o número da lei sem interpretar o dispositivo não permite resolver o caso concreto."
    },
    regra: "Leia o item integralmente, determine o regime e confira a alternativa contra o dispositivo aplicável.", pegadinha: "Termos absolutos e mistura de regimes exigem conferir o alcance exato da norma.", fonte: "Currículo M6 — modulo-6-unidade-6-topico-3 (método de análise de questões e dispositivos)."
  },
  ];
