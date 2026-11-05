const enriParcialM4U4P2 = {
  "m4-u4-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O art. 46 da LGPD é o dispositivo central de segurança da lei e é cobrado em concursos de TI, controle e administrativas. Ele exige que todo agente de tratamento adote medidas técnicas e administrativas aptas a proteger dados pessoais contra acessos não autorizados e contra destruição, perda, alteração ou comunicação ilícita. Para o dia a dia do órgão, isso traduz-se em autenticação forte, criptografia em repouso e em trânsito, controle de acesso por perfil, registro de auditoria, backup imutável, política de acesso, contratos com operadores e treinamento. Distinguir 'o que a lei exige' (dispositivo verificado) de 'boa prática recomendável' evita a pegadinha clássica de afirmar obrigações que o texto não prevê.",
      "preRequisitos": [
        "Conceito de dado pessoal e dado pessoal sensível (art. 5º, I e II)",
        "Diferença entre controlador e operador (art. 5º, VI e VII)",
        "Noção de base legal para tratamento no poder público (art. 7º e art. 23)",
        "Princípios da LGPD: finalidade, adequação, necessidade e minimização (art. 6º)"
      ],
      "objetivosObservaveis": [
        "Relacionar o art. 46 da LGPD às medidas técnicas e administrativas exigidas dos agentes de tratamento",
        "Distinguir, em um cenário de órgão público, o que a lei exige do que é boa prática recomendável",
        "Classificar uma medida de segurança como técnica (ex.: criptografia) ou administrativa (ex.: política de acesso)",
        "Aplicar o art. 46 como parâmetro de adequação após a confirmação de um incidente de vazamento de dados"
      ],
      "competencias": [
        "Leitura técnica de dispositivo legal: extrair do texto o que é exigência e o que é recomendação",
        "Classificação de controles de segurança em técnicas e administrativas",
        "Pensamento de governança: ligar a exigência legal à rotina operacional do órgão",
        "Cautela normativa: não citar prazos ou artigos não verificados sem conferir fonte oficial"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s2 (Fundamentos, titularidade e direitos do titular) — arts. 2º, 17, 18",
        "m4-u4-t2-s1 (Marco Civil da Internet — Lei nº 12.965/2014) — distinção de objeto e artes de uso da Internet",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — art. 23 LGPD menciona a LAI"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Segurança da informação e LGPD no setor público integram o conteúdo programático, especialmente em itens C/E sobre medidas técnicas e administrativas do art. 46 e sobre a aplicação da lei a órgãos públicos. A classificação é uma estimativa pedagógica qualitativa baseada na centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "O art. 46 da LGPD determina que os agentes de tratamento adotem medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais contra acessos não autorizados e contra situações acidentais ou ilícitas, como destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito. As medidas técnicas incluem autenticação forte, criptografia em repouso e em trânsito, controle de acesso por perfil, registro de auditoria e backup imutável. As medidas administrativas incluem política de acesso, contratos com operadores, treinamento de servidores, procedimento de resposta a incidentes e gestão de licenças e saídas. O texto do dispositivo foi verificado no plano oficial.",
      "intermediario": "No nível intermediário, o aluno aplica o art. 46 a um cenário concreto de órgão público: dado um fluxo de tratamento (ex.: cadastro de servidores em nuvem), identifica quais controles são exigidos e quais são apenas boas práticas. Exemplo: criptografia de disco é técnica e exigida como parcela das medidas aptas; treinamento periódico é administrativa e também exigida. Uma política genérica sem operacionalização não cumpre o dispositivo. O órgão, como controlador, deve exigir do operador (empresa de tecnologia) cláusulas de segurança compatíveis com o art. 46.",
      "avancado": "No nível avançado, o aluno diferencia a obrigação do art. 46 (medidas aptas, genéricas no texto) de especificações operacionais que o dispositivo não lista, como 'backup diário' ou 'MFA obrigatório'. Essas são boas práticas ou decisões de política interna, não exigência literal do art. 46. Também avalia a articulação com a LAI (art. 23 LGPD menciona a LAI) e com o Marco Civil, distinguindo o objeto de cada lei: dado pessoal (LGPD), informação pública (LAI), uso da Internet (Marco Civil). A exceção do art. 4º, III, da LGPD é restrita a finalidades exclusivas de segurança pública, defesa e investigação penal.",
      "especialista": "No nível especialista, o aluno projeta a governança de segurança de dados do órgão: mapeia agentes de tratamento, define quem é controlador e quem é operador, elabora o procedimento de resposta a incidentes com preservação de evidências, e estabelece o relatório de impacto quando houver tratamento de alto risco (ex.: biometria). Integra o art. 46 com o art. 41 (encarregado), art. 38 (relatório de impacto) e art. 52 (sanções), observando que órgão público não paga multa da LGPD, mas responde por danos e sanções administrativas internas. Toda afirmação normativa deve indicar a fonte verificada e a data."
    },
    "comparacoes": [
      {
        "tema": "Medidas de segurança: técnicas vs. administrativas (art. 46 LGPD)",
        "a": {
          "rotulo": "Medidas técnicas",
          "texto": "Controles implementados em tecnologia e arquitetura: autenticação forte, criptografia de dados em repouso e em trânsito, controle de acesso baseado em perfil, registro de auditoria de acessos e alterações, e backup imutável. Exemplos: criptografar disco do servidor, exigir MFA para acesso ao sistema de cadastro."
        },
        "b": {
          "rotulo": "Medidas administrativas",
          "texto": "Controles de gestão, processo e pessoas: política de acesso escrita, contratos com operadores que imponham cláusulas de segurança, treinamento periódico de servidores, procedimento documentado de resposta a incidentes e gestão de licenças e saídas de funcionários. Exemplos: publicar política de acesso no intranet, treinar toda a equipe anualmente."
        },
        "diferencaGabarito": "A pegadinha é afirmar que 'criptografia de disco' é medida administrativa ou que 'política de acesso' é técnica. O art. 46 exige as duas categorias; uma só atende parcialmente. Técnica atua sobre o dado e o sistema; administrativa atua sobre regras, contratos e pessoas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A LGPD determina que o órgão comunique o incidente de vazamento à autoridade e aos titulares em até 3 dias úteis.",
        "porqueErrada": "O dispositivo específico da LGPD sobre comunicação de incidentes e seu prazo não foi verificado nas referências deste material (que cobrem arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46). Repetir um prazo decorado sem conferir a redação oficial é erro grave em concurso.",
        "versaoCorreta": "A LGPD impõe medidas de segurança (art. 46, verificado) e trata da comunicação de incidentes em dispositivo próprio, mas a redação exata e o prazo devem ser confirmados em fonte oficial (planalto.gov.br) antes de qualquer citação em prova ou documento."
      },
      {
        "afirmacaoEquivocada": "O art. 46 da LGPD obriga o órgão a fazer backup diário de todos os sistemas.",
        "porqueErrada": "O art. 46 exige medidas de segurança aptas, mas não especifica frequência de backup nem impõe 'backup diário'. Essa é uma decisão de política interna ou boa prática que atende ao dispositivo, não uma exigência literal do texto legal.",
        "versaoCorreta": "A escolha da frequência de backup (diário, semanal, contínuo) cabe ao órgão, com base em risco, RPO e política interna. O art. 46 apenas exige que haja medida técnica adequada (ex.: backup imutável) como parte do conjunto de proteção."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Art. 46 da LGPD: medidas de segurança técnicas e administrativas aptas a proteger dados pessoais",
        "Medidas técnicas: autenticação forte, criptografia em repouso e em trânsito, controle de acesso por perfil, registro de auditoria, backup imutável",
        "Medidas administrativas: política de acesso, contratos com operadores, treinamento, procedimento de resposta a incidentes, gestão de licenças e saídas",
        "Controlador: define finalidade e meios essenciais do tratamento; no serviço público, costuma ser o órgão",
        "Operador: trata dados em nome do controlador, sob instruções (ex.: empresa de tecnologia/nuvem)"
      ],
      "regras": [
        "O art. 46 exige ambas as categorias (técnica e administrativa); uma só atende parcialmente",
        "'O que a lei exige' só se afirma com dispositivo verificado; 'boa prática recomenda' é categoria distinta",
        "O prazo e redação da comunicação de incidentes não foram verificados neste material — conferir em fonte oficial",
        "Órgão público é sujeito da LGPD (art. 1º, pessoa jurídica de direito público); não há isenção geral"
      ],
      "comparacoes": [
        "Medida técnica (atua sobre dado/sistema, ex.: criptografia) vs. medida administrativa (atua sobre regras/pessoas, ex.: política de acesso)"
      ],
      "fluxos": [
        "Confirma vazamento → Conter e erradicar o incidente → Registrar o incidente → Consultar dispositivo de comunicação (fonte oficial) → Comunicar fatos confirmados → Documentar medidas → Aplicar art. 46 como parâmetro de adequação"
      ],
      "excecoes": [
        "Art. 4º, III: exceção restrita a finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão penal — não se estende à administração geral"
      ],
      "palavrasChave": [
        "LGPD",
        "Lei nº 13.709/2018",
        "art. 46",
        "medidas técnicas",
        "medidas administrativas",
        "controlador",
        "operador",
        "criptografia",
        "backup imutável",
        "registro de auditoria",
        "incidente de vazamento",
        "boa prática"
      ],
      "checklist": [
        "Sei listar medidas técnicas e administrativas exigidas pelo art. 46",
        "Distinguo o que a lei exige (dispositivo verificado) da boa prática recomendada",
        "Não cito prazo de comunicação de incidente sem conferir fonte oficial",
        "Reconheço o órgão público como agente de tratamento (controlador/operador)"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Que categorias de medidas de segurança o art. 46 da LGPD exige dos agentes de tratamento, e uma só categoria é suficiente?",
        "dados": "Dispositivo: art. 46 da LGPD (verificado) — 'medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas'. Exemplo de órgão: prefeitura com sistema de cadastro de cidadãos (nome, CPF, endereço).",
        "conceitos": [
          "Medidas técnicas (art. 46)",
          "Medidas administrativas (art. 46)",
          "Agente de tratamento (art. 5º, IX)"
        ],
        "estrategia": "Ler o texto do art. 46: ele nomeia duas categorias cumulativas ('técnicas e administrativas') e exige que sejam 'aptas a proteger'. Uma só categoria não satisfaz a dupla exigência do dispositivo.",
        "execucao": [
          "Passo 1: Identificar o dispositivo aplicável — art. 46 da LGPD (verificado).",
          "Passo 2: Extrair as duas categorias nomeadas — técnicas e administrativas.",
          "Passo 3: Verificar se ambas são exigidas — o texto usa 'e', não 'ou'.",
          "Passo 4: Concluir que uma só categoria atende parcialmente o dispositivo."
        ],
        "resultado": "O art. 46 exige medidas técnicas E administrativas, ambas aptas a proteger dados pessoais. Uma só categoria (por exemplo, apenas criptografia sem política de acesso) atende parcialmente e não cumpre integralmente o dispositivo.",
        "justificativa": "A leitura do art. 46 é cumulativa: 'medidas de segurança, técnicas e administrativas'. O verbo 'aptas a proteger' se aplica ao conjunto, de modo que a omissão de uma categoria deixa o tratamento sem a proteção completa que o dispositivo exige. Isso é confirmado pela transposição prática do conteúdo base (técnicas: criptografia, controle de acesso; administrativas: política, treinamento).",
        "errosFrequentes": [
          "Achar que apenas criptografia (técnica) basta, ignorando a medida administrativa",
          "Achar que apenas política de acesso (administrativa) basta, ignorando a medida técnica",
          "Citar dispositivos não verificados ou prazos de comunicação sem conferir fonte oficial"
        ],
        "variacao": "Cenário: uma secretaria implanta criptografia de disco em todos os servidores, mas não tem política de acesso escrita nem treinamento de servidores. Avaliar se cumpre o art. 46 — resposta: não, porque falta a categoria administrativa."
      },
      {
        "tipo": "aplicacao",
        "problema": "A prefeitura confirma vazamento da planilha de cadastro único (nome, CPF, renda de cidadãos). O que fazer em relação à LGPD, separando o que é exigido do que é boa prática?",
        "dados": "Cenário: vazamento confirmado de dados pessoais (nome, CPF, renda) de cadastro único municipal. Dispositivos aplicáveis citados: art. 46 (verificado, medidas de segurança); dispositivo de comunicação de incidentes NÃO verificado nesta sessão. Boas práticas: conter, erradicar, registrar, comunicar fatos confirmados, documentar.",
        "conceitos": [
          "Art. 46 LGPD (medidas de segurança técnicas e administrativas)",
          "Procedimento de resposta a incidentes (medida administrativa)",
          "Distinção lei exige x boa prática recomenda"
        ],
        "estrategia": "Aplicar o art. 46 como parâmetro de adequação das medidas que faltavam, e tratar a comunicação de incidentes com cautela: afirmar apenas o que o dispositivo verificado cobre e indicar que o prazo e destinatários devem ser confirmados em fonte oficial.",
        "execucao": [
          "Passo 1: Conter o incidente — restringir acesso à planilha exposta e revogar links/compartilhamentos.",
          "Passo 2: Eradicar a causa — corrigir a permissão ampla que permitiu a exposição.",
          "Passo 3: Registrar o incidente internamente (medida administrativa) e preservar evidências.",
          "Passo 4: Comunicar fatos confirmados, sem especular sobre prazos ou destinatários não verificados.",
          "Passo 5: Aplicar o art. 46 como parâmetro — verificar se haviam medidas técnicas (criptografia, controle de acesso) e administrativas (política, treinamento) adequadas."
        ],
        "resultado": "Conter, erradicar e registrar o incidente; comunicar apenas fatos confirmados; confirmar o dispositivo de comunicação e seu prazo em fonte oficial antes de citar; usar o art. 46 para avaliar e corrigir as medidas de segurança que faltavam.",
        "justificativa": "O art. 46 (verificado) impõe medidas de segurança, mas não trata da comunicação de incidentes com prazo definido neste material. A prática correta é separar: o que o dispositivo verificado exige (segurança apta) do que exige confirmação externa (prazo/destinatários de comunicação). Isso evita a pegadinha de afirmar prazos decorados de memória.",
        "errosFrequentes": [
          "Afirmar que a LGPD determina comunicação em '3 dias úteis' sem conferir o dispositivo",
          "Confundir boa prática (comunicar rapidamente) com exigência literal do art. 46",
          "Esquecer de documentar as medidas adotadas (registro de auditoria)"
        ],
        "variacao": "Cenário idêntico, mas o vazamento envolve dado sensível (saúde de servidores). Avaliar se a gravidade muda a classificação da base legal (art. 11) e se o relatório de impacto (art. 38) se torna relevante — mesma estrutura de resposta, regime mais restritivo."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A LGPD determina comunicação de incidente de vazamento em até 3 dias úteis à autoridade e aos titulares.'",
        "dados": "Item C/E de concurso: 'Considerando a LGPD, é correto afirmar que o órgão deve comunicar o incidente de vazamento de dados pessoais à autoridade e aos titulares em até 3 dias úteis.' Referências verificadas: arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46 — dispositivo de comunicação e prazo NÃO estão entre os verificados.",
        "conceitos": [
          "Art. 46 LGPD (verificado — medidas de segurança)",
          "Dispositivo de comunicação de incidentes (não verificado neste material)",
          "Cautela normativa: não citar prazo sem fonte oficial"
        ],
        "estrategia": "Desconstruir a afirmação: o art. 46 é verificado e trata de medidas de segurança, não de prazo de comunicação. O prazo '3 dias úteis' não consta das referências verificadas. Em concurso, afirmar número de artigo ou prazo sem conferir fonte oficial é erro. A resposta correta é que a afirmação não é verificável com base no material.",
        "execucao": [
          "Passo 1: Identificar o que é verificado — art. 46 (medidas de segurança) está entre os dispositivos verificados.",
          "Passo 2: Identificar o que não é verificado — o dispositivo específico de comunicação de incidentes e seu prazo não integram as referências verificadas (arts. 1º, 2º, 3º, 4º, 5º, 17, 18, 46).",
          "Passo 3: Concluir que o prazo '3 dias úteis' não pode ser afirmado sem conferir o texto oficial (planalto.gov.br) e registrar a data.",
          "Passo 4: Marcar o item como não verificável/falso com base no material disponível."
        ],
        "resultado": "Afirmação não verificável com base nas referências deste material. O prazo '3 dias úteis' e o dispositivo de comunicação não foram verificados; não se deve repetir prazos decorados de memória sem conferir a redação atual em fonte oficial.",
        "justificativa": "A regra de honestidade normativa do projeto exige afirmar apenas o que a verificação cobre. Como o dispositivo de comunicação e o prazo não estão entre os arts. verificados (1º, 2º, 3º, 4º, 5º, 17, 18, 46), afirmar '3 dias úteis' é inventar dado. A conduta correta é consultar o planoalto.gov.br e registrar a data de verificação.",
        "errosFrequentes": [
          "Decorar e repetir '3 dias úteis' como se fosse do art. 46",
          "Confundir art. 46 (segurança) com dispositivo de comunicação de incidentes",
          "Afirmar número de artigo ou prazo sem conferir fonte oficial e registrar data"
        ],
        "variacao": "Item: 'O art. 46 da LGPD impõe medidas técnicas e administrativas de segurança aos agentes de tratamento.' — CERTO, pois esse dispositivo está verificado. Testa a diferença entre dispositivo verificado (certo) e prazo de comunicação não verificado (incerto)."
      }
    ]
  },
  "m4-u4-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O Marco Civil da Internet (Lei nº 12.965/2014) é a lei-marco do uso da Internet no Brasil e integra o conteúdo programático de TI, redes e segurança. Ele estabelece princípios, garantias, direitos e deveres para o uso da Internet, com dispositivos verificados em 2026-10-23 (arts. 2º, 3º, 7º, 9º §3º, 15 e 19). Para o servidor público, é essencial distinguir o objeto do Marco Civil (uso da Internet, direitos e deveres dos usuários, regulação de serviços) do objeto da LGPD (tratamento de dados pessoais) e da LAI (acesso a informações públicas). Citar artigos não conferidos ou confundir as três leis é pegadinha de conteúdo programático.",
      "preRequisitos": [
        "Noção de serviço de Internet e de aplicação de internet (arts. 7º e 9º)",
        "Diferença entre conteúdo de comunicação e metadados/registros de acesso",
        "Noção de responsabilidade do provedor por conteúdo de terceiros (art. 19)",
        "Conceito de guarda de registros de acesso (art. 15)"
      ],
      "objetivosObservaveis": [
        "Situar o Marco Civil no ordenamento de direitos digitais brasileiro",
        "Distinguir o objeto do Marco Civil do objeto da LGPD e da LAI",
        "Citar a lei pelo número e ano (Lei nº 12.965/2014) e limitar a citação de artigos aos verificados",
        "Aplicar a marcação explícita do grau de verificação de cada dispositivo"
      ],
      "competencias": [
        "Leitura responsável de lei: citar apenas dispositivos conferidos com data",
        "Classificação normativa: enquadrar questão em Marco Civil, LGPD ou LAI pelo objeto",
        "Honestidade intelectual: indicar quando um dispositivo exige conferência em fonte oficial",
        "Raciocínio comparativo entre três leis com objetos distintos e zonas de articulação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — distinção de objeto LGPD vs Marco Civil",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — leitura conjunta das três leis",
        "m4-u4-t1-s3 (Segurança, incidentes e a LGPD no dia a dia do órgão) — art. 23 LGPD menciona a LAI"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Marco Civil da Internet integra o conteúdo programático de TI, redes e segurança, especialmente em itens sobre neutralidade, guarda de registros e responsabilidade de provedores. A classificação é uma estimativa pedagógica qualitativa baseada na relevância do tema."
      }
    },
    "niveis": {
      "iniciante": "O Marco Civil da Internet é a Lei nº 12.965/2014, que estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil. O enquadramento geral foi verificado no texto oficial do planalto.gov.br em 2026-10-23 (Bloco 3 de referências-verificadas.md), abrangendo arts. 2º (fundamentos), 3º (princípios), 7º (direitos do usuário), 9º §3º (vedação de bloquear, monitorar, filtrar ou analisar o conteúdo dos pacotes de dados, ressalvado o disposto no artigo), 15 (guarda de registros de acesso a aplicações por 6 meses) e 19 (responsabilização por conteúdo de terceiros após ordem judicial). Os demais artigos não integram esta verificação e não devem ser citados literalmente sem nova conferência.",
      "intermediario": "No nível intermediário, o aluno aplica o Marco Civil a cenários concretos: dado um fato (ex.: provedor deve guardar logs por 6 meses; conteúdo de terceiros só gera responsabilização após ordem judicial), identifica o dispositivo aplicável entre os verificados e distingue o que pode ser citado do que exige conferência. Também articula com a LGPD: o texto oficial da LGPD indica alterações no Marco Civil (relação confirmada no preâmbulo).",
      "avancado": "No nível avançado, o aluno diferencia os objetos das três leis: Marco Civil = uso da Internet (direitos/deveres de usuários, regulação de serviços); LGPD = tratamento de dados pessoais; LAI = acesso a informações públicas. Identifica zonas de articulação (dados de conexão e registros de acesso tratados em ambas as lógicas) e aplica o método de verificação antes de afirmar: identificar a fonte, confirmar redação atual em fonte oficial, registrar a data.",
      "especialista": "No nível especialista, o aluno integra o Marco Civil em arquitetura de governança digital do órgão: define políticas de uso da Internet alinhadas aos arts. 7º e 9º §3º, estabelece rotinas de guarda de registros de acesso compatíveis com o art. 15, e define fluxo de responsabilização por conteúdo de terceiros (art. 19). Observa que o Marco Civil dialoga com a LGPD e a LAI, e que toda afirmação normativa deve indicar fonte verificada e data — afirmação inventada em documento oficial gera responsabilização."
    },
    "comparacoes": [
      {
        "tema": "Marco Civil vs. LGPD vs. LAI — objetos distintos",
        "a": {
          "rotulo": "Marco Civil (Lei nº 12.965/2014)",
          "texto": "Objeto: uso da Internet no Brasil — princípios, garantias, direitos e deveres dos usuários, regulação de serviços de Internet. Dispositivos verificados (2026-10-23): arts. 2º, 3º, 7º, 9º §3º, 15 e 19."
        },
        "b": {
          "rotulo": "LGPD (Lei nº 13.709/2018)",
          "texto": "Objeto: tratamento de dados pessoais — proteção da privacidade e do livre desenvolvimento da personalidade. Dispositivos verificados: arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46. Art. 23 menciona a LAI."
        },
        "diferencaGabarito": "Três leis, três objetos. Marco Civil trata do ambiente e das relações de uso da Internet; LGPD trata do dado pessoal e dos sujeitos do tratamento; LAI trata do acesso a informações públicas. Zonas de articulação existem (dados de conexão e registros de acesso), mas os objetos são distintos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Marco Civil e LGPD são a mesma lei em versões diferentes.",
        "porqueErrada": "São leis distintas, de anos distintos (Marco Civil: 2014; LGPD: 2018), com objetos diferentes. A LGPD inclusive alterou disposições do Marco Civil (relação verificada no preâmbulo do texto oficial da LGPD). Confundir as duas é erro de conteúdo programático.",
        "versaoCorreta": "Marco Civil (Lei nº 12.965/2014) e LGPD (Lei nº 13.709/2018) são leis distintas, com objetos diferentes: uso da Internet vs. tratamento de dados pessoais. A LGPD alterou disposições do Marco Civil (relação verificada no preâmbulo)."
      },
      {
        "afirmacaoEquivocada": "Qualquer artigo do Marco Civil pode ser citado em prova sem conferir a fonte.",
        "porqueErrada": "Apenas os arts. 2º, 3º, 7º, 9º §3º, 15 e 19 foram verificados em 2026-10-23. Os demais artigos não integram a verificação e não devem ser citados literalmente sem nova conferência em fonte oficial. Citar dispositivo não conferido é erro de honestidade intelectual.",
        "versaoCorreta": "Cite o Marco Civil pelo número e ano (Lei nº 12.965/2014) e limite a citação de artigos aos verificados (2º, 3º, 7º, 9º §3º, 15, 19), registrando a data de verificação. Demais dispositivos exigem conferência em fonte oficial antes de qualquer citação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Marco Civil da Internet (Lei nº 12.965/2014): princípios, garantias, direitos e deveres para o uso da Internet",
        "Art. 2º: fundamentos; Art. 3º: princípios; Art. 7º: direitos do usuário",
        "Art. 9º §3º: vedação de bloquear, monitorar, filtrar ou analisar conteúdo dos pacotes de dados (ressalvado o disposto no artigo)",
        "Art. 15: guarda de registros de acesso a aplicações de internet pelo provedor por 6 meses",
        "Art. 19: responsabilização por conteúdo de terceiros após ordem judicial"
      ],
      "regras": [
        "Cite a lei pelo número e ano (Lei nº 12.965/2014); limite citação de artigos aos verificados",
        "Dispositivos verificados em 2026-10-23: arts. 2º, 3º, 7º, 9º §3º, 15 e 19",
        "Objeto do Marco Civil (uso da Internet) é mais amplo que o da LGPD (dado pessoal) e da LAI (informação pública)",
        "Art. 23 da LGPD menciona a LAI — leitura conjunta das três leis"
      ],
      "comparacoes": [
        "Marco Civil (uso da Internet) vs. LGPD (tratamento de dados pessoais) vs. LAI (acesso a informações públicas)"
      ],
      "fluxos": [
        "Identificar o objeto da questão → Enquadrar em Marco Civil/LGPD/LAI → Verificar se o dispositivo está entre os verificados → Citar com número, ano e data de verificação, ou indicar necessidade de conferência"
      ],
      "excecoes": [
        "Art. 9º §3º: vedação de analisar conteúdo dos pacotes tem ressalva 'ressalvado o disposto no artigo'"
      ],
      "palavrasChave": [
        "Marco Civil",
        "Lei nº 12.965/2014",
        "uso da Internet",
        "direitos do usuário",
        "registros de acesso",
        "art. 15",
        "art. 19",
        "art. 9º",
        "LGPD",
        "Lei nº 13.709/2018",
        "LAI",
        "Lei nº 12.527/2011",
        "verificação",
        "planalto.gov.br"
      ],
      "checklist": [
        "Sei situar o Marco Civil no ordenamento de direitos digitais",
        "Distinguo o objeto do Marco Civil do da LGPD e da LAI",
        "Cito apenas dispositivos verificados (2º, 3º, 7º, 9º §3º, 15, 19) com data",
        "Indico quando um dispositivo exige conferência em fonte oficial"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual lei trataria de (a) regras gerais de uso da Internet e (b) base legal para tratar nome de cidadão em cadastro?",
        "dados": "(a) Regras gerais de uso da Internet → Marco Civil (Lei nº 12.965/2014), verificada em 2026-10-23 (arts. 2º, 3º, 7º, 9º §3º, 15 e 19). (b) Tratar nome de cidadão em cadastro → LGPD (Lei nº 13.709/2018), art. 1º e art. 5º, I (verificados). Demais dispositivos exigem conferência em fonte oficial.",
        "conceitos": [
          "Marco Civil (uso da Internet)",
          "LGPD (tratamento de dados pessoais)",
          "Grau de verificação dos dispositivos"
        ],
        "estrategia": "Separar as duas perguntas por objeto: uso da Internet é Marco Civil; tratar dado pessoal (nome) é LGPD. Citar cada lei com número e ano, e limitar a citação de artigos aos verificados, indicando que os demais exigem conferência.",
        "execucao": [
          "Passo 1: Identificar o objeto da parte (a) — regras gerais de uso da Internet — enquadrar no Marco Civil (Lei nº 12.965/2014).",
          "Passo 2: Identificar o objeto da parte (b) — tratar nome de cidadão — enquadrar na LGPD (Lei nº 13.709/2018), dado pessoal (art. 5º, I).",
          "Passo 3: Citar cada lei pelo número e ano, e limitar a citação de artigos aos verificados com data de verificação.",
          "Passo 4: Indicar que demais dispositivos exigem conferência em fonte oficial antes de qualquer citação."
        ],
        "resultado": "(a) Marco Civil (Lei nº 12.965/2014); (b) LGPD (Lei nº 13.709/2018), art. 1º e art. 5º, I. Cada lei citada com número, ano e grau de verificação explícito; demais dispositivos marcados como pendentes de conferência.",
        "justificativa": "A distinção de objetos é o ponto-chave: Marco Civil rege o uso da Internet; LGPD rege o tratamento de dados pessoais. A marcação do grau de verificação (verificado em 2026-10-23 para arts. 2º, 3º, 7º, 9º §3º, 15 e 19 do Marco Civil; arts. 1º e 5º, I da LGPD) cumpre a exigência de honestidade intelectual do material.",
        "errosFrequentes": [
          "Confundir Marco Civil com LGPD (mesmo objeto)",
          "Citar artigos do Marco Civil não verificados sem indicar necessidade de conferência",
          "Esquecer de indicar o grau de verificação de cada dispositivo"
        ],
        "variacao": "Pergunta: qual lei trata de acesso a informações públicas (ex.: pedido de transparência)? Resposta: LAI (Lei nº 12.527/2011). Mesma estrutura de resposta, terceiro objeto."
      },
      {
        "tipo": "aplicacao",
        "problema": "Projeto menciona 'obrigação do art. 15 do Marco Civil' sem conferir a fonte. Como o material didático deve tratar isso?",
        "dados": "O art. 15 do Marco Civil foi verificado em 2026-10-23 (Bloco 3) e trata da guarda de registros de acesso a aplicações de internet pelo provedor por 6 meses (parte verificada: caput). As regras de disponibilização desses registros aos requerentes não integram a lista de dispositivos verificados e devem ser conferidas em fonte oficial antes de qualquer citação.",
        "conceitos": [
          "Art. 15 do Marco Civil (guarda de registros de acesso, 6 meses, verificado)",
          "Disponibilização de registros aos requerentes (não verificada)",
          "Honestidade intelectual: afirmar apenas o que a verificação cobre"
        ],
        "estrategia": "Afirmar apenas o que a verificação cobre (caput do art. 15: guarda de registros por 6 meses) e indicar que as regras de disponibilização exigem conferência em fonte oficial. Não inventar prazos nem destinatários.",
        "execucao": [
          "Passo 1: Confirmar que o art. 15 do Marco Civil foi verificado em 2026-10-23 (Bloco 3 de referências-verificadas.md).",
          "Passo 2: Identificar o que é verificado — guarda de registros de acesso a aplicações de internet pelo provedor por 6 meses (caput).",
          "Passo 3: Identificar o que NÃO é verificado — regras de disponibilização desses registros aos requerentes.",
          "Passo 4: Escrever o material afirmando apenas a parte verificada e indicando que o restante exige conferência em fonte oficial."
        ],
        "resultado": "O material afirma que o art. 15 do Marco Civil (verificado em 2026-10-23) trata da guarda de registros de acesso por 6 meses (caput), e indica que as regras de disponibilização aos requerentes devem ser conferidas em fonte oficial antes de qualquer citação.",
        "justificativa": "A conduta segue a regra de honestidade intelectual: afirmar apenas o que a verificação cobre e indicar explicitamente o que exige conferência. Isso evita a pegadinha de citar dispositivo não conferido como se fosse certeza.",
        "errosFrequentes": [
          "Afirmar regras de disponibilização de registros como se estivessem no art. 15 sem conferir",
          "Inventar prazo ou destinatário da disponibilização sem fonte oficial",
          "Esquecer de registrar a data de verificação (2026-10-23)"
        ],
        "variacao": "Cenário: projeto cita 'art. 7º do Marco Civil garante direito do usuário à proteção de seus dados pessoais'. Avaliar: art. 7º é verificado (direitos do usuário), mas a formulação exata exige conferência da redação — mesma cautela, dispositivo diferente."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de item de verificação de concurso: 'Marco Civil e LGPD são a mesma lei em versões diferentes.'",
        "dados": "Item de verificação: 'Marco Civil (Lei nº 12.965/2014) e LGPD (Lei nº 13.709/2018) são a mesma lei em versões diferentes.' Dados: anos distintos, objetos distintos; a LGPD alterou disposições do Marco Civil (relação verificada no preâmbulo do texto oficial da LGPD).",
        "conceitos": [
          "Marco Civil (Lei nº 12.965/2014) — objeto: uso da Internet",
          "LGPD (Lei nº 13.709/2018) — objeto: tratamento de dados pessoais",
          "Relação verificada no preâmbulo da LGPD"
        ],
        "estrategia": "Desconstruir a afirmação em três pontos: (1) leis distintas de anos distintos; (2) objetos diferentes (uso da Internet vs. tratamento de dados pessoais); (3) a LGPD alterou o Marco Civil, o que já prova que não é 'a mesma lei'. Concluir que a afirmação é falsa.",
        "execucao": [
          "Passo 1: Identificar que Marco Civil (2014) e LGPD (2018) são leis de anos distintos.",
          "Passo 2: Identificar que os objetos são diferentes — uso da Internet (Marco Civil) vs. tratamento de dados pessoais (LGPD).",
          "Passo 3: Observar que a LGPD alterou disposições do Marco Civil (relação verificada no preâmbulo), o que incompatibiliza a tese de 'mesma lei'.",
          "Passo 4: Concluir que a afirmação é falsa e marcar como erro."
        ],
        "resultado": "Falso. Marco Civil e LGPD são leis distintas, de anos distintos, com objetos diferentes; a LGPD alterou disposições do Marco Civil (relação verificada no preâmbulo do texto oficial da LGPD).",
        "justificativa": "A afirmação confunde leis com objetos distintos. Marco Civil regula o uso da Internet (direitos/deveres de usuários, regulação de serviços); LGPD regula o tratamento de dados pessoais (proteção da privacidade). O fato de a LGPD ter alterado o Marco Civil prova que são diplomas diferentes. É armadilha de conteúdo programático.",
        "errosFrequentes": [
          "Achar que \"versões diferentes\" significa a mesma lei atualizada",
          "Esquecer que a LGPD alterou o Marco Civil (prova de que são leis distintas)",
          "Não citar os anos (2014 vs. 2018) e os objetos distintos"
        ],
        "variacao": "Item: 'A LAI trata do mesmo objeto que a LGPD (dados pessoais).' — FALSO. LAI trata de acesso a informações públicas; LGPD de dados pessoais. Testa o terceiro objeto, mesma lógica."
      }
    ]
  }
};
