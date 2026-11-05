const enriParcialM4U4P1 = {
  "m4-u4-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A LGPD (Lei nº 13.709/2018) é a norma central de proteção de dados no Brasil e sua incidência sobre o setor público é cobrada transversalmente em concursos de todas as carreiras (analista de TI, controle, administração, jurídicas). O art. 1º estende expressamente a lei a pessoas jurídicas de direito público, mas a classificação de controlador/operador no setor público gera dúvidas recorrentes. Em provas, a banca testa: (a) se o órgão é controlador (define finalidade) ou operador (processa por conta de outro); (b) se a base legal é consentimento ou obrigação legal/legítimo interesse; (c) se dado sensível (art. 5º, II) recebe tratamento diferenciado; (d) a articulação com LAI (Lei nº 12.527/2011) e Marco Civil (Lei nº 12.965/2014). A confusão entre 'obrigação legal de tratar' e 'dispensa de conformidade' é a pegadinha nº 1.",
      "preRequisitos": [
        "Conceito de dado pessoal, dado pessoal sensível, dado anonimizado (art. 5º, I-III)",
        "Diferença entre controlador e operador (art. 5º, VI-VII)",
        "Noção de base legal para tratamento (art. 7º e art. 23 para poder público)",
        "Princípios da LGPD (art. 2º, I-VII) e finalidade/adequação/necessidade (art. 6º, I-III)"
      ],
      "objetivosObservaveis": [
        "Aplicar o art. 1º (objeto), art. 3º (aplicação territorial), art. 4º (exceções) e art. 5º (conceitos) para classificar cenários de tratamento no serviço público",
        "Distinguir controlador (define finalidade e meios) de operador (trata em nome do controlador) em contratos de tecnologia do setor público",
        "Classificar dado como pessoal comum ou sensível (art. 5º, II) e identificar o regime mais restritivo aplicável",
        "Identificar exceções do art. 4º (pessoal não econômico, jornalístico/artístico/acadêmico, segurança pública/defesa) e não confundir com regra geral",
        "Articular LGPD com LAI (art. 23 LGPD menciona LAI) e Marco Civil (objetos distintos: dado pessoal vs. uso da Internet)"
      ],
      "competencias": [
        "Leitura técnica de lei: extrair do texto legal (não de resumo) a resposta para o caso concreto",
        "Classificação jurídica: enquadrar agente como controlador/operador e dado como comum/sensível",
        "Pensamento sistêmico: ver LGPD, LAI e Marco Civil como regime articulado, não isolado",
        "Cautela normativa: distinguir 'a lei determina' (dispositivo verificado) de 'boa prática recomenda'"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s2 (Fundamentos, titularidade e direitos do titular) — arts. 2º, 17, 18",
        "m4-u4-t1-s3 (Segurança, incidentes e a LGPD no dia a dia do órgão) — art. 46",
        "m4-u4-t2-s1 (Marco Civil da Internet — Lei nº 12.965/2014) — distinção de objetos e arts. 9º §3º, 15, 19",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — método prático de decisão",
        "m6-u3-t1-s1 (Orientação estratégica da unidade) — LGPD no serviço público digital: estrutura, proteção de dados e sigilo"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "LGPD no setor público integra o conteúdo programático de TI e segurança da informação, com itens C/E sobre incidência da lei em órgãos públicos, classificação controlador/operador, dado sensível, exceções do art. 4º e precisão na citação de artigos (art. 1º, 3º, 4º, 5º, 7º, 23, 46). A declaração 'a LGPD não se aplica ao poder público' é item falso padrão."
      }
    },
    "niveis": {
      "iniciante": "A Lei nº 13.709/2018 (LGPD) dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade (art. 1º — verificado no texto oficial planalto.gov.br, 2026-10-20). Aplicação (art. 3º — verificado): alcança operação de tratamento no território nacional, atividade de oferta/fornecimento de bens, serviços ou tratamento de indivíduos localizados no Brasil e dados coletados no território nacional. Exceções (art. 4º — verificado): I — pessoa natural para fins exclusivamente particulares e não econômicos; II — finalidades exclusivamente jornalísticas, artísticas ou acadêmicas; III — finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão de infrações penais, com ressalvas dos §§ 1º e 2º. Conceitos do art. 5º (verificado): dado pessoal (I) — informação relacionada a pessoa natural identificada ou identificável; dado pessoal sensível (II) — origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, genético, biométrico; dado anonimizado (III); banco de dados (IV); titular (V); controlador (VI) — define finalidade e meios; operador (VII) — trata em nome do controlador; encarregado (VIII); agentes de tratamento (IX); relatório de impacto (X). No serviço público, o órgão costuma ser controlador (define finalidade legal) e a empresa de tecnologia operadora (processa sob instruções).",
      "intermediario": "No nível intermediário, a classificação controlador/operador exige análise do caso concreto. Ex.: Prefeitura contrata SaaS para folha de pagamento. Prefeitura = controlador (finalidade legal: pagar servidores, base legal art. 7º, II ou art. 23, I). Empresa = operadora (processa conforme contrato, art. 5º, VII). Mas se a empresa usa os dados para 'melhorar seu produto' (finalidade própria), vira controladora também (co-controlação). Dado sensível (art. 5º, II): opinião política de servidor em sistema de RH = sensível. Tratamento exige base legal específica (art. 11) — consentimento específico e destacado OU hipótese do art. 11, II (cumprimento de obrigação legal). Minimização (art. 6º, III): coletar só o estritamente necessário. Exceção art. 4º, III: não se aplica a 'toda atividade de segurança pública'; apenas a finalidades EXCLUSIVAS de segurança pública, defesa nacional, segurança do Estado, investigação/repressão penal, com ressalvas. Atividade mista (ex.: guarda municipal que também faz trânsito) não se enquadra automaticamente.",
      "avancado": "Nível avançado aborda tensões entre LGPD e regime administrativo. (1) Base legal no poder público: art. 7º (geral) vs. art. 23 (poder público). Art. 23 exige: finalidade pública, atribuição legal, publicidade dos procedimentos, minimização. Não basta 'tenho lei que manda coletar'; precisa demonstrar necessidade e proporcionalidade. (2) Consentimento no setor público: art. 7º, I (consentimento) vs. art. 23, I (obrigação legal). Em regra, órgão público NÃO usa consentimento como base para tratamento obrigatório (coação invalida consentimento). Usa art. 7º, II (cumprimento de obrigação legal) ou art. 23. (3) Compartilhamento entre órgãos: art. 26 (comunicação entre controladores) exige compatibilidade de finalidades, minimização, segurança. Não é 'livre trânsito de dados entre órgãos'. (4) ANPD: art. 55-A (autarquia especial, Lei nº 14.460/2022, atualizada pela Lei nº 15.352/2026) — fiscaliza poder público. (5) Sanções: art. 52 (advertência, multa até 2% do faturamento, limitada a R$ 50M por infração). Órgão público não paga multa (vedação constitucional), mas responde por danos (art. 42-45) e sanções administrativas internas. (6) Articulação LAI: art. 23 LGPD menciona LAI — transparência pública e proteção de dados se leem juntas. Publicar lista de servidores (nome, matrícula, cargo) = publicidade administrativa (CF art. 37, §3º). Publicar salários nominais = debate: TCU entende que remuneração é dado pessoal, mas publicidade de remuneração é dever (LC nº 131/2009). Solução: publicar faixa salarial + cargo, não nome + valor individual, salvo previsão legal.",
      "especialista": "No nível especialista, a LGPD no setor público integra arquitetura de governança de dados e compliance. (a) DPO/Encarregado (art. 41): no poder público, indicação por ato do dirigente máximo, autonomia funcional, reporte direto à alta administração. (b) Relatório de Impacto (art. 38): obrigatório para tratamento de alto risco (ex.: biometria em controle de acesso, IA para concessão de benefícios). Metodologia: descrição do tratamento, avaliação de necessidade/proporcionalidade, riscos aos direitos, medidas mitigadoras. (c) Internacionalização: art. 33-35 (transferência internacional) — cláusulas-padrão, decisão de adequação, BCR. Órgão público que usa nuvem global (AWS/Azure/GCP) deve garantir salvaguardas. (d) IA e LGPD: art. 20 (decisão automatizada) — direito de solicitar revisão humana. Sistema que nega benefício automaticamente precisa de canal de contestação efetivo (art. 20, §1º). (e) Referências normativas verificadas: Lei nº 13.709/2018 (arts. 1º, 2º, 3º, 4º, 5º, 6º, 7º, 11, 17, 18, 20, 23, 26, 38, 41, 42, 46, 52, 55-A), Lei nº 12.527/2011 (LAI), Lei nº 12.965/2014 (Marco Civil arts. 2º, 3º, 7º, 9º §3º, 15, 19), CF/88 arts. 5º X, LXXIX, 37, 37 §3º, LC nº 131/2009. Em concursos de nível superior (auditor, procurador, analista de controle), a cobrança incide sobre desenho de governança, não decoreba de artigos."
    },
    "comparacoes": [
      {
        "tema": "Controlador vs. Operador no setor público",
        "a": {
          "rotulo": "Controlador (art. 5º, VI)",
          "texto": "Pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais. No serviço público: órgão/entidade que define a finalidade legal do tratamento (ex.: conceder benefício, cadastrar servidor, fiscalizar) e os meios essenciais (qual sistema, quais dados, por quanto tempo). Responsável por atender direitos do titular, adotar medidas de segurança (art. 46), contratar operadores com cláusulas específicas (art. 39), comunicar incidentes (art. 48)."
        },
        "b": {
          "rotulo": "Operador (art. 5º, VII)",
          "texto": "Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador. No serviço público: empresa de tecnologia, nuvem, BPO, call center que processa dados conforme instruções documentadas do controlador (contrato, termo de uso). Não define finalidade; segue instruções. Deve adotar medidas de segurança (art. 46), subcontratar só com autorização, comunicar incidentes ao controlador, apoiar no atendimento a direitos. Não responde diretamente ao titular (exceto solidariedade art. 42-45)."
        },
        "diferencaGabarito": "A pegadinha: 'A empresa de nuvem é controladora porque decide onde os dados ficam armazenados (região, data center).' — FALSO. Decisão sobre infraestrutura técnica (meios acidentais) ≠ decisão sobre finalidade e meios essenciais (art. 5º, VI). O controlador define 'PARA QUÊ' e 'QUAIS DADOS'; o operador define 'COMO TECNICAMENTE' (sob instruções). Em co-controlação (art. 5º, VI, parágrafo único), ambos definem finalidade conjuntamente — exige arranjo transparente."
      },
      {
        "tema": "Dado pessoal comum vs. Dado pessoal sensível (art. 5º, I vs. II)",
        "a": {
          "rotulo": "Dado pessoal comum (art. 5º, I)",
          "texto": "Informação relacionada a pessoa natural identificada ou identificável. Ex.: nome, CPF, matrícula, e-mail, endereço, telefone, IP, cookies, geolocalização não sensível. Regime geral: bases do art. 7º (consentimento, obrigação legal, execução de contrato, legítimo interesse, etc.), princípios do art. 6º."
        },
        "b": {
          "rotulo": "Dado pessoal sensível (art. 5º, II)",
          "texto": "Dado sobre: origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, genético, biométrico. Regime reforçado: bases do art. 11 (consentimento específico e destacado OU hipóteses taxativas: cumprimento de obrigação legal, políticas públicas, pesquisa, proteção da vida, tutela da saúde, defesa em processo). Princípios do art. 6º aplicam-se com rigor máximo (necessidade, minimização, finalidade)."
        },
        "diferencaGabarito": "Em prova: 'Sistema de RH armazena filiação sindical do servidor para desconto em folha. Qual regime?' — SENSÍVEL (art. 5º, II, 'filiação sindical'). Base legal: art. 11, II, 'a' (cumprimento de obrigação legal — desconto autorizado por lei) OU consentimento específico. Tratar como dado comum (art. 7º) é erro. Outra: 'Biometria para controle de acesso de servidor' — SENSÍVEL (dado biométrico, art. 5º, II). Exige base do art. 11 e relatório de impacto (art. 38)."
      },
      {
        "tema": "LGPD vs. LAI (Lei nº 12.527/2011) vs. Marco Civil (Lei nº 12.965/2014)",
        "a": {
          "rotulo": "LGPD (Lei nº 13.709/2018)",
          "texto": "Objeto: tratamento de dados pessoais (proteção da privacidade e livre desenvolvimento da personalidade). Sujeitos: controlador, operador, titular. Arts. verificados: 1º, 2º, 3º, 4º, 5º, 6º, 7º, 11, 17, 18, 20, 23, 26, 38, 41, 46, 48, 52, 55-A."
        },
        "b": {
          "rotulo": "LAI (Lei nº 12.527/2011) — Acesso à Informação",
          "texto": "Objeto: acesso a informações públicas (transparência ativa e passiva). Sujeitos: órgãos/entidades, cidadãos. Arts. verificados (Bloco 2): 1º a 38. Art. 23 LGPD menciona expressamente a LAI — leitura conjunta."
        },
        "diferencaGabarito": "Três leis, três objetos. Marco Civil = uso da Internet (direitos/deveres de usuários, neutralidade, guarda de logs arts. 15/19). LGPD = dado pessoal. LAI = informação pública. Conflito aparente: publicar nome de servidor = publicidade administrativa (LAI/CF) vs. dado pessoal (LGPD). Solução: art. 23 LGPD + art. 31 LAI + princípios (finalidade, necessidade, proporcionalidade). Publicar nome + cargo + lotação = publicidade administrativa (dado identificador, não sensível). Publicar saúde, vida sexual, opinião política = violação LGPD (dado sensível). Generalização 'LGPD proíbe publicar qualquer nome' = FALSO (pegadinha)."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A LGPD não se aplica a órgãos públicos, pois eles tratam dados por obrigação legal.",
        "porqueErrada": "O art. 1º da LGPD menciona expressamente 'pessoa jurídica de direito público' como sujeito passivo da lei. Órgãos públicos são agentes de tratamento (controladores ou operadores) e devem observar princípios, bases legais, direitos do titular, segurança (art. 46) e governança (art. 41). A 'obrigação legal de tratar' é BASE LEGAL (art. 7º, II ou art. 23), não dispensa de conformidade. O art. 4º, III, prevê exceção RESTRITA para finalidades EXCLUSIVAS de segurança pública, defesa nacional, segurança do Estado e investigação/repressão penal — não se estende à administração geral.",
        "versaoCorreta": "A LGPD APLICA-SE a órgãos públicos (art. 1º, 'pessoa jurídica de direito público'). O tratamento por obrigação legal é hipótese de base legal (art. 7º, II; art. 23), não isenção. A exceção do art. 4º, III, é específica e não abrange a administração geral. Órgão público deve ter encarregado (art. 41), medidas de segurança (art. 46), atender direitos do titular (art. 18) e articular com LAI (art. 23)."
      },
      {
        "afirmacaoEquivocada": "No setor público, o consentimento é a base legal principal para tratamento de dados pessoais.",
        "porqueErrada": "No poder público, o consentimento (art. 7º, I) é base EXCEPCIONAL para tratamentos obrigatórios. A coação inerente à relação cidadão-Estado invalida a livre manifestação de vontade. As bases principais são: art. 7º, II (cumprimento de obrigação legal) e art. 23 (tratamento pelo poder público: finalidade pública, atribuição legal, publicidade, minimização). Usar consentimento para tratamento obrigatório (ex.: 'consinto que meu CPF seja usado para emitir minha certidão') é vício de consentimento (livre? informado? sem coação?).",
        "versaoCorreta": "No setor público, as bases legais predominantes são obrigação legal (art. 7º, II) e finalidade pública/atribuição legal (art. 23). O consentimento (art. 7º, I) é reservado para tratamentos NÃO obrigatórios, onde o titular tem escolha real (ex.: pesquisa de satisfação opcional, adesão a programa de fidelidade). Em tratamento obrigatório (cadastro, tributação, benefício, fiscalização), usar consentimento é erro jurídico."
      },
      {
        "afirmacaoEquivocada": "Dado anonimizado (art. 5º, III) pode ser livremente compartilhado e publicado, pois não é mais dado pessoal.",
        "porqueErrada": "A definição do art. 5º, III, exige que o dado anonimizado tenha perdido a possibilidade de associação DIRETA OU INDIRETA a indivíduo, 'salvo uso de método reversível'. Anonimização malfeita (pseudonimização, hash sem sal, supressão apenas de identificadores diretos) permite reidentificação por linkage attack (cruzamento com bases públicas). Além disso, a LGPD não regula dado anonimizado, mas a ANPD pode exigir demonstração da irreversibilidade. 'Anonimizado' declarado sem metodologia validada é risco de vazamento.",
        "versaoCorreta": "Dado anonimizado (art. 5º, III) é aquele que, por meios técnicos razoáveis e disponíveis no momento do tratamento, não permite a identificação do titular, direta ou indiretamente, exceto se usado método reversível. A anonimização deve ser robusta (k-anonimato e privacidade diferencial, com metodologia documentada). Pseudonimização (art. 5º, §1º) NÃO é anonimização — continua sendo dado pessoal. Compartilhamento de 'dado anonimizado' sem validação técnica é violação potencial."
      },
      {
        "afirmacaoEquivocada": "A LGPD e a LAI são leis conflitantes: uma proíbe divulgar, a outra obriga publicar.",
        "porqueErrada": "Não há conflito, há articulação. O art. 23 da LGPD menciona expressamente a LAI, sinalizando leitura conjunta. A LAI regula acesso a INFORMAÇÕES PÚBLICAS (transparência). A LGPD regula tratamento de DADOS PESSOAIS. A conciliação se faz pela natureza da informação: (1) Informação pública não pessoal (ex.: contratos, licitações, estrutura orgânica) — LAI manda publicar, LGPD não se opõe. (2) Dado pessoal comum identificador (ex.: nome, cargo, lotação de servidor) — publicidade administrativa (CF art. 37, §3º; LC nº 131/2009) prevalece, com base legal art. 7º, II ou art. 23 LGPD. (3) Dado pessoal SENSÍVEL (saúde, vida sexual, opinião política, biométrico) — LGPD prevalece (regime restritivo art. 11); LAI art. 31, §1º, veda divulgação de informação que viole intimidade. Método: 1) Qual a natureza? 2) Qual a finalidade? 3) Há base legal? 4) É necessário e proporcional? 5) O que diz a assessoria jurídica?",
        "versaoCorreta": "LGPD e LAI se complementam (art. 23 LGPD menciona LAI). A transparência pública (LAI/CF) convive com proteção de dados (LGPD) através da análise de finalidade, necessidade, proporcionalidade e base legal. Dado sensível não se publica; dado identificador de servidor em cargo público publica-se (publicidade administrativa). Conflito aparente resolve-se pelo método de decisão articulado, não por hierarquia rígida."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "LGPD (Lei nº 13.709/2018): tratamento de dados pessoais, inclusive no setor público (art. 1º)",
        "Art. 3º: aplicação territorial (território nacional, oferta a brasileiros, dados coletados no Brasil)",
        "Art. 4º: exceções (particular não econômico, jornalístico/artístico/acadêmico, segurança pública/defesa EXCLUSIVAS)",
        "Art. 5º: conceitos — dado pessoal (I), sensível (II), anonimizado (III), controlador (VI), operador (VII)",
        "Controlador = define finalidade e meios; Operador = trata em nome do controlador",
        "Dado sensível (art. 5º, II): racial, religioso, político, sindical, saúde, vida sexual, genético, biométrico — regime art. 11",
        "Art. 23: tratamento pelo poder público — finalidade pública, atribuição legal, publicidade, minimização",
        "Art. 46: medidas de segurança técnicas e administrativas",
        "Art. 23 LGPD menciona LAI — leitura conjunta; Marco Civil = objeto distinto (uso da Internet)"
      ],
      "regras": [
        "Regra da incidência: art. 1º alcança pessoa jurídica de direito público — não há isenção geral",
        "Regra da base legal no poder público: art. 7º, II (obrigação legal) e art. 23 (finalidade pública) prevalecem sobre consentimento",
        "Regra do dado sensível: art. 5º, II + art. 11 — base legal específica, consentimento específico e destacado",
        "Regra da anonimização: irreversibilidade técnica razoável (art. 5º, III), não pseudonimização",
        "Regra da articulação LAI/LGPD: natureza da informação (pública vs. pessoal vs. sensível) define o regime"
      ],
      "comparacoes": [
        "Controlador (define finalidade) vs. Operador (processa sob instruções) — meios essenciais vs. acidentais",
        "O dado pessoal comum, regido pelo art. 7º da LGPD, admite as bases gerais de tratamento; já o dado pessoal sensível, do art. 11, está sujeito a um regime restritivo que exige base legal específica.",
        "A LGPD protege dados pessoais, a LAI garante o acesso a informações públicas e o Marco Civil disciplina o uso da Internet — três objetos distintos que devem ser lidos em conjunto.",
        "A anonimização é irreversível e retira o dado do âmbito da LGPD, ao passo que a pseudonimização é reversível e o dado continua sendo dado pessoal"
      ],
      "fluxos": [
        "Cenário de tratamento → Identificar controlador/operador → Classificar dado (comum/sensível) → Escolher base legal (art. 7º/11/23) → Verificar princípios (art. 6º) → Aplicar medidas (art. 46) → Atender direitos (art. 18)"
      ],
      "excecoes": [
        "Art. 4º, I: pessoa natural para fins exclusivamente particulares e não econômicos",
        "O art. 4º, II da LGPD exclui do seu âmbito as finalidades exclusivamente jornalísticas, artísticas ou acadêmicas.",
        "O art. 4º, III reserva como exceção as finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação ou repressão penal, ressalvados os §§ 1º e 2º do mesmo artigo.",
        "O art. 11, II lista as bases legais que permitem tratar dado sensível sem consentimento, entre elas a obrigação legal, a política pública, a pesquisa, a proteção da vida, a tutela da saúde e a defesa em processo.",
        "Poder público: consentimento não é base para tratamento obrigatório (coação invalida livre manifestação)"
      ],
      "palavrasChave": [
        "LGPD",
        "Lei nº 13.709/2018",
        "dado pessoal",
        "dado sensível",
        "controlador",
        "operador",
        "base legal",
        "consentimento",
        "obrigação legal",
        "finalidade pública",
        "art. 23",
        "art. 46",
        "ANPD",
        "encarregado",
        "DPO",
        "LAI",
        "Lei nº 12.527/2011",
        "Marco Civil",
        "Lei nº 12.965/2014",
        "anonimização",
        "pseudonimização",
        "art. 5º",
        "art. 7º",
        "art. 11",
        "art. 18",
        "art. 20"
      ],
      "checklist": [
        "Sei citar art. 1º (incidência no poder público), art. 3º (aplicação), art. 4º (exceções), art. 5º (conceitos)",
        "Distinguo controlador de operador em contratos de tecnologia pública (SaaS, nuvem, BPO)",
        "Classifico dado como comum ou sensível (art. 5º, II) e sei o regime de cada um (art. 7º vs art. 11)",
        "Identifico a pegadinha 'LGPD não se aplica a órgão público' e contraponho com art. 1º",
        "Sei que consentimento NÃO é base principal no poder público (art. 7º, II e art. 23 prevalecem)",
        "Distinguo anonimização (irreversível) de pseudonimização (reversível, continua dado pessoal)",
        "Aplico método de decisão LAI/LGPD: natureza → finalidade → base legal → necessidade/proporcionalidade"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Prefeitura contrata empresa de nuvem (SaaS) para hospedar sistema de cadastro único de cidadãos (nome, CPF, endereço, telefone, renda). Classifique controlador e operador; identifique base legal; verifique se há dado sensível.",
        "dados": "Contrato: prefeitura define finalidade (cadastro único para programas sociais), campos obrigatórios, retenção (10 anos após último acesso). Empresa fornece infraestrutura, backup, criptografia, monitoramento. Empresa NÃO usa dados para analytics próprio. Base legal citada no edital: 'obrigação legal — lei municipal institui o cadastro'. Dados: nome, CPF, endereço, telefone, renda, composição familiar. NÃO há opinião política, saúde, biométrico.",
        "conceitos": [
          "Controlador (art. 5º, VI): define finalidade e meios essenciais",
          "Operador (art. 5º, VII): trata em nome do controlador sob instruções",
          "Nome, CPF, endereço, telefone e renda são exemplos de dado pessoal comum (art. 5º, I), informação que identifica ou torna identificável uma pessoa natural",
          "A base legal do tratamento pela prefeitura é a obrigação legal (art. 7º, II), reforçada pelo art. 23, que disciplina o tratamento realizado pelo poder público",
          "Princípios art. 6º: finalidade, adequação, necessidade, minimização"
        ],
        "estrategia": "Aplicar definições do art. 5º ao caso: quem decide 'para quê' e 'quais dados'? A prefeitura (lei municipal cria cadastro único). Quem executa tecnicamente? A empresa (infraestrutura). Base legal: lei municipal impõe cadastro → obrigação legal (art. 7º, II) + finalidade pública (art. 23). Dados listados são comuns (não sensíveis). Verificar cláusulas de segurança no contrato (art. 39, 46).",
        "execucao": [
          "Passo 1: Controlador = Prefeitura. Fundamento: Lei municipal cria Cadastro Único, define finalidade (programas sociais), campos, retenção. Prefeitura decide 'para quê' e 'quais dados'. Art. 5º, VI verificado.",
          "Passo 2: Operador = Empresa de nuvem. Fundamento: Contrato diz 'processar dados conforme instruções da Prefeitura'. Empresa fornece meios técnicos (servidores, criptografia, backup) — meios acidentais. Não define finalidade nem campos. Art. 5º, VII verificado.",
          "Passo 3: Classificação dos dados. Nome, CPF, endereço, telefone, renda, composição familiar = dados pessoais comuns (art. 5º, I). NÃO há origem racial, opinião política, saúde, biométrico = NÃO há dado sensível (art. 5º, II).",
          "Passo 4: Base legal. Lei municipal impõe cadastro → obrigação legal (art. 7º, II). Poder público com finalidade pública (art. 23). Consentimento (art. 7º, I) NÃO é base (tratamento obrigatório para acesso a benefícios).",
          "Passo 5: Verificações de conformidade. Contrato tem cláusula de segurança (art. 39, 46)? Empresa tem encarregado (art. 41)? Prefeitura tem canal de direitos do titular (art. 18)? Retenção 10 anos compatível com finalidade?"
        ],
        "resultado": "Controlador: Prefeitura (define finalidade legal e meios essenciais). Operador: Empresa de nuvem (processa sob instruções). Dados: todos comuns (art. 5º, I). Base legal: art. 7º, II (obrigação legal) + art. 23 (poder público). Conformidade exige: cláusulas contratuais art. 39, medidas art. 46, canal art. 18, encarregado art. 41.",
        "justificativa": "A classificação controlador/operador deriva do art. 5º, VI-VII: quem tem poder de decisão sobre finalidade e meios essenciais é controlador. No setor público, a lei/ato normativo confere esse poder ao órgão. A empresa de nuvem, embora decida aspectos técnicos (região do data center, tipo de disco, versão do banco), não decide 'para quê' nem 'quais dados' — são meios acidentais. Base legal: tratamento obrigatório por lei municipal = obrigação legal (art. 7º, II) e finalidade pública (art. 23). O consentimento seria inválido (coação: sem cadastro, sem benefício). Dados listados não se enquadram no rol taxativo do art. 5º, II (racial, religioso, político, sindical, saúde, vida sexual, genético, biométrico). Renda e composição familiar são dados econômicos/sociais, não sensíveis.",
        "errosFrequentes": [
          "Classificar empresa de nuvem como controladora porque 'hospeda os dados'",
          "Dizer que base legal é consentimento (tratamento obrigatório invalida livre manifestação)",
          "Classificar renda ou composição familiar como dado sensível (não estão no art. 5º, II)",
          "Esquecer de citar art. 23 (tratamento pelo poder público) como base complementar"
        ],
        "variacao": "Mesmo cenário, mas a empresa de nuvem propõe 'usar dados anonimizados para melhorar seus algoritmos de detecção de fraude'. Análise: se anonimização for robusta (irreversível, art. 5º, III), empresa vira controladora do novo tratamento (finalidade própria). Se for pseudonimização (reversível), continua operadora e precisa de instrução específica do controlador. Testa: distinção anonimização vs pseudonimização e mudança de papel."
      },
      {
        "tipo": "aplicacao",
        "problema": "Órgão público implementa controle de acesso biométrico (digital) para servidores. Dado biométrico é sensível (art. 5º, II). Qual base legal do art. 11? Quais salvaguardas? É necessário Relatório de Impacto (art. 38)?",
        "dados": "Portaria institui controle de acesso por digital em todas as unidades. Finalidade: segurança patrimonial, registro de ponto. Base legal citada: 'interesse legítimo da administração'. Dados: digital (biométrico), nome, matrícula, unidade, timestamp. Retenção: 5 anos. Compartilhamento: empresa de segurança privada (monitoramento).",
        "conceitos": [
          "Dado biométrico = sensível (art. 5º, II, 'dado biométrico')",
          "Bases do art. 11: consentimento específico OU hipóteses taxativas (II, a-g)",
          "Interesse legítimo (art. 7º, IX) NÃO é base para dado sensível",
          "Relatório de Impacto (art. 38): obrigatório para alto risco (biometria em larga escala)",
          "As medidas de segurança reforçadas (art. 46) incluem criptografia e controle de acesso restrito, exigidas para proteger os dados pessoais tratados"
        ],
        "estrategia": "Identificar: digital = biométrico = sensível (art. 5º, II). Art. 11 NÃO admite 'interesse legítimo' como base para sensível. Bases possíveis: (a) consentimento específico e destacado (art. 11, I) — mas servidor pode se recusar? Se recusa, não entra no órgão? Coação invalida. (b) Obrigação legal (art. 11, II, 'a') — precisa de LEI (não portaria) autorizando biometria para ponto/segurança. (c) Proteção da vida/integridade (art. 11, II, 'd') — argumento de segurança patrimonial. (d) Tutela da saúde (art. 11, II, 'e') — não se aplica. Relatório de Impacto (art. 38) é OBRIGATÓRIO: biometria + larga escala + monitoramento = alto risco. Empresa de segurança = operadora (art. 39).",
        "execucao": [
          "Passo 1: Classificação. Digital = dado biométrico = sensível (art. 5º, II, verificado). Regime art. 11.",
          "Passo 2: Base legal. 'Interesse legítimo' (art. 7º, IX) NÃO serve para sensível (art. 11 não lista). Opções do art. 11, II: (a) consentimento específico — servidor pode recusar? Se não, coação. (b) Obrigação legal — precisa LEI (art. 11, II, 'a'), não portaria. (c) Proteção da vida/integridade física (art. 11, II, 'd') — argumento de segurança. (d) Tutela da saúde (art. 11, II, 'e') — não cabe. (e) Defesa em processo (art. 11, II, 'f') — não cabe. (f) Prevenção à fraude (art. 11, II, 'g') — possível, mas precisa de lei.",
          "Passo 3: Relatório de Impacto (art. 38). Biometria + todas as unidades + monitoramento contínuo = alto risco. RIPD OBRIGATÓRIO antes de implantar. Conteúdo: descrição, necessidade/proporcionalidade, riscos (vazamento, uso indevido, falsificação), medidas (criptografia, acesso restrito, logs, retenção).",
          "Passo 4: Medidas de segurança (art. 46). Criptografia em repouso e trânsito. Acesso restrito (need-to-know). Logs de auditoria imutáveis. Teste de penetração anual. Plano de resposta a incidente (art. 48).",
          "Passo 5: Empresa de segurança = operadora. Contrato art. 39: instruções documentadas, segurança, subcontratação só com autorização, comunicação de incidente, apoio a direitos do titular."
        ],
        "resultado": "Base legal viável: art. 11, II, 'a' (obrigação legal) — EXIGE LEI EM SENTIDO FORMAL autorizando biometria para ponto/segurança. Portaria não basta. Alternativa: art. 11, II, 'd' (proteção da vida/integridade) com lei de segurança institucional. RIPD (art. 38) OBRIGATÓRIO. Medidas art. 46 reforçadas. Empresa = operadora (art. 39). Sem lei formal, implementação é irregular.",
        "justificativa": "O art. 11 estabelece regime ESPECIAL para dado sensível: bases taxativas, não admite 'interesse legítimo'. A biometria em controle de acesso de servidores envolve processamento em larga escala de dado sensível (digital), com risco alto de vazamento e uso indevido (falsificação de digital, acesso não autorizado a sistemas). O RIPD (art. 38) é pré-requisito para demonstrar necessidade e proporcionalidade. A base 'obrigação legal' (art. 11, II, 'a') exige LEI (não decreto, não portaria) — princípio da legalidade (CF art. 5º, II). A exceção 'proteção da vida/integridade' (art. 11, II, 'd') também pressupõe previsão legal. Empresa de segurança é operadora (processa digital para autenticação sob instruções do órgão). Contrato deve ter cláusulas art. 39.",
        "errosFrequentes": [
          "Usar 'interesse legítimo' (art. 7º, IX) como base para dado sensível (art. 11 não prevê)",
          "Achar que portaria/ato normativo interno basta para 'obrigação legal' (precisa LEI)",
          "Dispensar RIPD (art. 38) alegando 'é só ponto eletrônico' (biometria + larga escala = alto risco)",
          "Não classificar empresa de segurança como operadora (art. 39) e omitir cláusulas contratuais"
        ],
        "variacao": "Órgão usa reconhecimento facial (biométrico) para acesso a sistema de concessão de benefício (cidão). Análise: mesmo regime (art. 5º, II + art. 11). Base: art. 11, II, 'a' (lei autorizando) OU 'c' (política pública) OU 'g' (prevenção à fraude). RIPD obrigatório. Testa: mesma estrutura, finalidade diferente (benefício vs. ponto), mesmo regime jurídico."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A LGPD não se aplica a órgãos públicos, pois eles tratam dados por obrigação legal.'",
        "dados": "Item C/E de concurso: 'Considerando a LGPD, é correto afirmar que órgãos da administração pública direta estão dispensados de observar a lei quando o tratamento decorre de obrigação legal.'",
        "conceitos": [
          "O art. 1º da LGPD estende a lei à pessoa jurídica de direito público, de modo que órgãos públicos estão expressamente abrangidos pelo seu disposto",
          "A obrigação legal funciona como base legal para o tratamento (art. 7º, II e art. 23 da LGPD), não como isenção de conformidade com a lei de proteção de dados",
          "O art. 4º, III prevê exceção restrita, limitada às finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação ou repressão penal",
          "Princípios (art. 2º, 6º), direitos (art. 18), segurança (art. 46), encarregado (art. 41) — todos se aplicam"
        ],
        "estrategia": "Desconstruir a falácia em 3 pilares: (1) Texto legal: art. 1º menciona 'pessoa jurídica de direito público'. (2) Lógica jurídica: base legal ≠ isenção; obrigação legal AUTORIZA o tratamento, não DISPENSA a conformidade (princípios, direitos, segurança). (3) Exceção real: art. 4º, III é específica e não abrange administração geral. Demonstrar com contraexemplo: órgão que trata dado sensível de servidor (saúde) por obrigação legal — ainda precisa de base art. 11, RIPD, segurança reforçada.",
        "execucao": [
          "Passo 1: Citar art. 1º: 'Esta Lei dispõe sobre o tratamento de dados pessoais [...] por pessoa natural ou por pessoa jurídica de direito público ou privado'. Texto expresso = sem dúvida.",
          "Passo 2: Explicar 'obrigação legal'. Art. 7º, II: 'cumprimento de obrigação legal [...] pelo controlador'. Art. 23: tratamento pelo poder público exige finalidade pública, atribuição legal, publicidade, minimização. A obrigação legal É a base que LEGITIMA o tratamento; não o isenta de observar princípios (art. 6º), direitos (art. 18), segurança (art. 46), encarregado (art. 41).",
          "Passo 3: Analisar exceção real. Art. 4º, III: 'finalidades EXCLUSIVAS de segurança pública, defesa nacional, segurança do Estado e investigação/repressão de infrações penais'. Palavra 'exclusivas' + rol taxativo. Administração geral (RH, tributação, benefícios, licenciamento) NÃO se enquadra. Ressalvas dos §§ 1º-2º mantêm princípios e direitos mesmo nas exceções.",
          "Passo 4: contraexemplo prático. A Secretaria de Saúde trata prontuário (dado sensível de saúde) com base na obrigação legal prevista na Lei nº 8.080/90. Mesmo assim, exige base do art. 11, II (consentimento ou obrigação legal), relatório de impacto (art. 38), segurança reforçada (art. 46) e atendimento aos direitos do paciente (art. 18); a obrigação legal não dispensou nenhuma dessas exigências."
        ],
        "resultado": "Item FALSO. A LGPD aplica-se a órgãos públicos (art. 1º). Obrigação legal é base legal (art. 7º, II; art. 23), não isenção. Exceção do art. 4º, III é restrita a segurança/defesa EXCLUSIVAS. Órgão público deve observar princípios, direitos, segurança, encarregado, RIPD quando couber.",
        "justificativa": "A falácia confunde 'autorização para tratar' (base legal) com 'dispensa de conformidade'. No direito administrativo, a lei que obriga a tratar (ex.: cadastrar contribuinte) não afasta a lei que regula COMO tratar (LGPD). Princípio da legalidade (CF art. 5º, II) exige que a restrição a direitos (privacidade) tenha base legal — a LGPD É essa lei de regulação. O art. 23 LGPD menciona expressamente a LAI, mostrando que o legislador previu a convivência de regimes no setor público. Itens que afirmam 'LGPD não se aplica ao poder público' ou 'obrigação legal dispensa LGPD' são SEMPRE falsos. A exceção do art. 4º, III é a ÚNICA isenção parcial, e mesmo assim com ressalvas (§§ 1º-2º).",
        "errosFrequentes": [
          "Confundir base legal (art. 7º, II) com isenção de conformidade",
          "Estender art. 4º, III para 'qualquer atividade de segurança' (ex.: guarda municipal de trânsito não é 'exclusivamente segurança pública')",
          "Esquecer que mesmo nas exceções do art. 4º, III, os §§ 1º-2º mantêm princípios e direitos",
          "Não citar art. 1º como fundamento textual direto da incidência no poder público"
        ],
        "variacao": "Item: 'A LGPD afasta a incidência da LAI sobre conjuntos de dados comuns aos dois regimes.' — FALSO. Art. 23 LGPD menciona LAI; art. 31 LAI veda divulgação que viole intimidade. Leis se complementam. Testa: articulação LAI/LGPD, não conflito."
      }
    ]
  },
  "m4-u4-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Fundamentos e direitos do titular (arts. 2º, 17 e 18) formam o núcleo dos direitos subjetivos da LGPD e são cobrados de forma direta: as bancas pedem a enumeração dos incisos do art. 18 e o enquadramento de pedidos de confirmação, correção e eliminação no serviço público. O erro recorrente é tratar a eliminação como poder absoluto do titular sobre qualquer dado.",
      "preRequisitos": [
        "Conceitos do art. 5º da LGPD: dado pessoal, titular, controlador e operador",
        "Incidência da LGPD sobre o poder público (art. 1º e art. 23)",
        "Noção de base legal para o tratamento (art. 7º e art. 23)"
      ],
      "objetivosObservaveis": [
        "Enumerar os fundamentos do art. 2º e associar cada um ao interesse que protege, da autodeterminação informativa ao desenvolvimento econômico",
        "Reconhecer os direitos do art. 18 e indicar o inciso correspondente a cada pedido do titular, de confirmação a revogação do consentimento",
        "Descrever o fluxo prático de atendimento a um pedido no órgão: canal formal, identificação, verificação, prazo e registro"
      ],
      "competencias": [
        "Leitura normativa dos incisos: associar o pedido do titular ao inciso do art. 18 correspondente",
        "Raciocínio de conformidade: balancear o direito do titular com a obrigação legal de manutenção do dado",
        "Organização de processo administrativo: documentar recebimento, resposta e prazo do pedido"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — conceitos do art. 5º usados aqui",
        "m4-u4-t1-s3 (Segurança, incidentes e a LGPD no dia a dia do órgão) — dever de segurança que sustenta os direitos",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — convivência entre transparência e proteção de dados",
        "m6-u3-t1-s2 (LGPD: objeto, fundamentos, aplicação, exceções, direitos do titular e dever de segurança) — revisão do tema no Módulo 6"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A enumeração dos direitos do art. 18 integra o conteúdo programático, com incisos isolados como confirmação e portabilidade e cenários de correção de cadastro. Classificação alta em estimativa pedagógica, pela centralidade do tema no conteúdo programático de TI e de controle."
      }
    },
    "niveis": {
      "iniciante": "A LGPD parte de fundamentos como o respeito à privacidade e a autodeterminação informativa (art. 2º) e assegura a toda pessoa natural a titularidade dos próprios dados (art. 17). O titular pode pedir confirmação de que o órgão trata seus dados, acesso ao conteúdo, correção de informações inexatas e eliminação ou anonimização de dados excessivos (art. 18). O pedido é formal, com identificação, e a resposta segue o canal previsto.",
      "intermediario": "Cada direito corresponde a um inciso do art. 18 e a um procedimento: a correção (inciso III) deve propagar-se a todas as bases relacionadas; a anonimização, o bloqueio ou a eliminação (inciso IV) cabem para dados desnecessários, excessivos ou em desconformidade; a portabilidade (inciso V) e a informação sobre compartilhamentos (inciso VI) pressupõem controle de quem recebeu o dado. A publicação de informações de ofício reduz o volume de pedidos.",
      "avancado": "O exercício dos direitos convive com o regime do poder público: dados mantidos por obrigação legal ou para o exercício regular de direitos podem não ser elimináveis, e a resposta deve ser fundamentada caso a caso, com apoio da assessoria jurídica. A revogação do consentimento (inciso VIII) perde objeto quando o tratamento se apoia em obrigação legal, e o órgão comunica ao titular a possibilidade de não fornecer consentimento e suas consequências (inciso VII).",
      "especialista": "Na governança madura, os direitos do titular viram processo medido: canal único, prazo interno documentado, indicadores de atendimento e revisão periódica das bases para eliminar de ofício o dado excessivo, antecipando pedidos. O desenho contempla dados anonimizados para estatística, fora do regime de direitos, desde que a irreversibilidade seja técnica e documentada, e o encarregado articula pedidos, tecnologia e assessoria jurídica."
    },
    "comparacoes": [
      {
        "tema": "Confirmação (art. 18, I) versus acesso (art. 18, II)",
        "a": {
          "rotulo": "Confirmação do tratamento",
          "texto": "Resposta objetiva sobre a existência ou inexistência de tratamento dos dados do titular, sem entrega do conteúdo; cabe quando o cidadão quer saber se o órgão mantém cadastro dele."
        },
        "b": {
          "rotulo": "Acesso aos dados",
          "texto": "Entrega de quais dados são tratados e de sua finalidade, conforme o caso até cópia do conteúdo; pressupõe verificação nos sistemas e controle de identidade do solicitante."
        },
        "diferencaGabarito": "A confirmação responde se há tratamento; o acesso revela quais dados e como são tratados. Em prova, pedido de mera constatação remete ao inciso I, e pedido de conteúdo ou cópia remete ao inciso II."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'O titular pode exigir exclusão de qualquer dado que o órgão mantém por obrigação legal.'",
        "porqueErrada": "Os direitos do art. 18 são exercidos dentro do regime legal de cada tratamento: quando a manutenção decorre de obrigação legal ou é necessária ao exercício regular de direitos, a eliminação pode ser inviável, e a recusa deve ser fundamentada. Tratar o direito como poder absoluto ignora as bases legais que autorizam o tratamento.",
        "versaoCorreta": "Errado. Direitos do titular são exercidos dentro do regime legal: dados mantidos por obrigação legal ou para exercício regular de direitos podem não ser elimináveis — a fundamentação deve ser verificada caso a caso; a eliminação não é poder absoluto."
      },
      {
        "afirmacaoEquivocada": "Portabilidade e revogação do consentimento são direitos exclusivos de clientes de empresas privadas, sem aplicação ao serviço público.",
        "porqueErrada": "O rol do art. 18 vale para todo tratamento alcançado pela LGPD, inclusive o do poder público; o que muda é a base legal. Quando o tratamento não se apoia em consentimento, a revogação perde objeto prático, mas o direito permanece previsto, e a portabilidade depende de viabilidade técnica e regulamentar, não do setor do controlador.",
        "versaoCorreta": "Os direitos do art. 18, inclusive portabilidade (inciso V) e revogação do consentimento (inciso VIII), alcançam também o poder público; o efeito prático de cada um depende da base legal do tratamento, que no serviço público costuma ser a obrigação legal, e não o consentimento."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Fundamentos do art. 2º",
        "Autodeterminação informativa",
        "Titularidade (art. 17)",
        "Direitos do titular (art. 18)",
        "Transparência ativa"
      ],
      "regras": [
        "Todo pedido do titular é formal, com identificação do solicitante e resposta registrada",
        "A correção (art. 18, III) deve alcançar todas as bases relacionadas ao dado retificado",
        "Dados mantidos por obrigação legal podem não ser elimináveis a pedido do titular"
      ],
      "comparacoes": [
        "Confirmação (inciso I) constata a existência do tratamento; acesso (inciso II) entrega o conteúdo e a finalidade"
      ],
      "fluxos": [
        "Pedido do titular, identificação, verificação nos sistemas, resposta fundamentada no prazo, registro e, quando cabível, retificação em todas as bases"
      ],
      "excecoes": [
        "A eliminação a pedido (inciso IV) não alcança dado cuja manutenção decorre de obrigação legal ou de exercício regular de direitos"
      ],
      "palavrasChave": [
        "autodeterminação informativa",
        "titular",
        "art. 18",
        "confirmação",
        "portabilidade",
        "revogação do consentimento"
      ],
      "checklist": [
        "Enumero os fundamentos do art. 2º e ligo cada um ao interesse protegido",
        "Associo cada pedido do titular ao inciso do art. 18 correspondente",
        "Descrevo o fluxo administrativo de atendimento ao pedido",
        "Explico por que a eliminação não é absoluta no serviço público",
        "Distingo confirmação (inciso I) de acesso (inciso II)"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Cidadão pede confirmação se o órgão trata dados dele. Que direito é esse e como atender?",
        "dados": "Pedido protocolado pelo canal de ouvidoria com nome completo e CPF do solicitante; os sistemas do órgão registram cadastro com dados do cidadão e não há compartilhamento recente a terceiros.",
        "conceitos": [
          "Direito de confirmação (art. 18, I)",
          "Identificação do titular"
        ],
        "estrategia": "Enquadrar o pedido no inciso I do art. 18 e seguir o rito formal: autenticar o solicitante, verificar os sistemas e responder de forma registrada.",
        "execucao": [
          "Protocolar o pedido e validar a identidade do titular",
          "Consultar os sistemas e confirmar a existência de tratamento",
          "Responder pelo canal formal, registrando a existência do tratamento e a finalidade correspondente"
        ],
        "resultado": "Direito de confirmação (art. 18, I — verificado). Atendimento: canal formal, identificação do titular, verificação nos sistemas, resposta objetiva registrando existência ou inexistência de tratamento e finalidade correspondente.",
        "justificativa": "O inciso I do art. 18 assegura ao titular a confirmação da existência de tratamento, e a resposta objetiva documentada é a evidência de conformidade do órgão. O rito formal protege também o titular, impedindo que terceiros consultem dados alheios sob pretexto de pedido.",
        "errosFrequentes": [
          "Responder informalmente, sem protocolo nem registro",
          "Entregar conteúdo completo quando o pedido pedia apenas confirmação"
        ],
        "variacao": "Troque a confirmação por pedido de acesso: a resposta passa a indicar quais dados são tratados e a finalidade, exigindo consulta detalhada às bases em vez de mera constatação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Servidor identifica dados desatualizados em cadastro interno. Quais direitos cabem e qual a resposta esperada?",
        "dados": "Cadastro interno mantém endereço antigo e formação acadêmica incorreta do servidor; há ainda campo de observações pessoais sem finalidade definida, coletado em formulário antigo e não usado por nenhum processo.",
        "conceitos": [
          "Correção (art. 18, III)",
          "Eliminação de dado excessivo (art. 18, IV)"
        ],
        "estrategia": "Separar o pedido em duas frentes: retificar os dados inexatos, propagando a correção às bases relacionadas, e examinar o campo sem finalidade à luz da necessidade.",
        "execucao": [
          "Formalizar o pedido de correção pelo canal interno previsto",
          "Retificar endereço e formação no cadastro e nas bases relacionadas, com registro da alteração",
          "Classificar o campo de observações como desnecessário e solicitar anonimização ou eliminação nos termos do inciso IV"
        ],
        "resultado": "Correção (art. 18, III — verificado) e, se o dado for excessivo para a finalidade, eliminação ou anonimização (art. 18, IV — verificado). A correção deve refletir-se em todas as bases relacionadas, com registro da alteração.",
        "justificativa": "O inciso III assegura a correção de dados incompletos, inexatos ou desatualizados, e o inciso IV alcança dados desnecessários ou excessivos. A retificação deve alcançar as bases derivadas, para não preservar o erro em outro sistema, e o registro documental evidência o atendimento.",
        "errosFrequentes": [
          "Corrigir apenas o cadastro principal, deixando o erro nas bases relacionadas",
          "Manter o campo sem finalidade por comodidade, contra a necessidade"
        ],
        "variacao": "Troque o dado desatualizado por opinião registrada em avaliação funcional: a revisão de mérito segue rito próprio, e o direito do art. 18 não serve para reescrever juízo de valor."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O titular pode exigir exclusão de qualquer dado que o órgão mantém por obrigação legal.'",
        "dados": "Item de prova afirma o direito de exclusão sobre dados de folha de pagamento mantidos por determinação legal; o órgão guarda os registros para fiscalização e defesa administrativa.",
        "conceitos": [
          "Eliminação não é poder absoluto",
          "Obrigação legal como base do tratamento"
        ],
        "estrategia": "Desconstruir a generalização identificando a base legal do tratamento e mostrando que a recusa fundamentada é a resposta compatível com o art. 18.",
        "execucao": [
          "Identificar a base legal que sustenta a manutenção dos dados de folha",
          "Verificar se o dado é necessário à finalidade e ao prazo de guarda",
          "Fundamentar a resposta ao titular, indicando a previsão legal aplicável"
        ],
        "resultado": "Errado. O direito de eliminação é exercido dentro do regime de cada tratamento: quando a manutenção decorre de obrigação legal ou é necessária ao exercício regular de direitos, o órgão fundamenta a permanência, e o pedido não vira exclusão automática.",
        "justificativa": "O art. 18 disciplina os direitos dentro do regime legal do tratamento; a eliminação do inciso IV restringe-se a dados desnecessários, excessivos ou em desconformidade. Dado mantido por obrigação legal cumpre finalidade legítima, e a negativa fundamentada, com indicação da previsão aplicável, é resposta conforme a lei.",
        "errosFrequentes": [
          "Afirmar que todo dado pode ser excluído a pedido, sem examinar a base legal",
          "Negar o pedido sem fundamentação, descumprindo o dever de resposta"
        ],
        "variacao": "Troque a folha pelo registro de atendimento médico do servidor: o prazo legal de guarda continua afastando a exclusão automática, agora no regime reforçado do dado sensível de saúde."
      }
    ]
  }
};
