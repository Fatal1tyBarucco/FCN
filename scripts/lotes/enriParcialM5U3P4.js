const enriParcialM5U3P4 = {
  "m5-u3-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O uso de IA generativa no serviço público envolve transferência de conteúdo para fornecedores externos, o que pode expor dados pessoais, informações sigilosas e credenciais. Além disso, a saída do modelo levanta questões de titularidade, licença e direitos autorais, e precisa de critérios de avaliação (fidelidade, completude, clareza, reprodutibilidade) antes de embasar qualquer ato administrativo. Dominar esses riscos e construir um conjunto de critérios de avaliação é indispensável para uso institucional seguro.",
      "preRequisitos": [
        "Noção de dado pessoal e dado sensível (LGPD)",
        "Base legal para tratamento de dados no serviço público",
        "Termos de uso de serviço de IA generativa (retenção, treinamento, subcontratação)",
        "Direitos autorais: titularidade e licença de obras e de saídas de modelo"
      ],
      "objetivosObservaveis": [
        "Relacionar o uso de IA generativa aos riscos de privacidade, segurança e direitos autorais",
        "Aplicar regras de uso: não inserir dado pessoal/sensível/sigiloso sem base legal e avaliação de risco",
        "Preferir anonimização ou pseudonimização antes de enviar conteúdo a ferramenta externa",
        "Registrar o que foi enviado, por quem e por qual base legal",
        "Construir critérios de avaliação de resultados (fidelidade, completude, conformidade, relevância, clareza, segurança, reprodutibilidade, impacto)"
      ],
      "competencias": [
        "Análise de risco de privacidade e segurança em uso de IA generativa",
        "Leitura crítica de termos de serviço e de saídas de modelo",
        "Construção de critérios de avaliação de resultados aplicável a uso institucional",
        "Tomada de decisão fundamentada sobre envio de conteúdo a fornecedor externo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u3-t3-s2 (Aplicações no setor público e privado: exemplos comprovados e hipóteses ilustrativas) — distingue exemplos comprovados de hipóteses ilustrativas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Privacidade, segurança, direitos autorais e avaliação de resultados integram o conteúdo programático de TI para concursos públicos com classificação qualitativa média; o tema é central no Módulo 5. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que enviar conteúdo a um serviço de IA generativa externo transfere informação para o fornecedor, podendo expor dado pessoal, dado sensível, informação sigilosa ou credencial. Conhece as regras de uso: não inserir dados protegidos sem base legal e avaliação de risco, preferir anonimização, verificar termos do fornecedor quanto a retenção e treinamento, e registrar o envio. Identifica que a saída do modelo envolve titularidade, licença e direitos autorais.",
      "intermediario": "O aluno aplica as regras de uso de IA generativa: (a) não inserir dado pessoal, dado sensível, informação sigilosa ou credencial em ferramenta sem base legal e sem avaliação de risco prévia; (b) preferir anonimização ou pseudonimização do conteúdo antes do envio; (c) verificar os termos do fornecedor quanto a retenção, uso para treinamento e subcontratação; (d) registrar o que foi enviado, por quem e por qual base. Constrói critérios de avaliação de resultados: fidelidade, completude, conformidade de formato, relevância e clareza, segurança, reprodutibilidade e impacto.",
      "avancado": "O aluno projeta um programa de uso institucional de IA generativa: matriz de dados que podem ou não ser enviados, avaliação de risco prévia, anonimização/pseudonimização, termos do fornecedor revisados, registro de envio, proibição de dados sensíveis e credenciais. Implementa critérios de avaliação com conferência automática de números, prazos, nomes de ato e citações; bloqueio de saída sem trecho de origem; e indicadores de ganho de tempo e índice de correção.",
      "especialista": "O aluno governa o uso de IA generativa na instituição: política de envio de conteúdo, base legal documentada, contrato de tratamento com ausência de retenção para treinamento, registro imutável de envio, critérios de avaliação transformados em checklist e indicadores monitorados, avaliação periódica com casos de teste contra produção humana, e procedimento de suspensão quando o índice de correção ultrapassa o limite definido."
    },
    "comparacoes": [
      {
        "tema": "Uso de IA generativa com e sem critérios de avaliação de resultados",
        "a": {
          "rotulo": "Sem critérios de avaliação",
          "texto": "A saída do modelo é usada diretamente no documento institucional, sem conferência de fatos, sem verificação de identificadores e sem registro de prompt, parâmetros ou versão do modelo. Não há rastreabilidade nem mensuração do ganho real."
        },
        "b": {
          "rotulo": "Com critérios de avaliação",
          "texto": "Cada minuta passa por checklist de fidelidade, completude, conformidade, relevância, clareza, segurança e reprodutibilidade; prompt, parâmetros, versão do modelo e trecho são registrados; há indicadores de ganho de tempo e índice de correção, com avaliação periódica contra produção humana."
        },
        "diferencaGabarito": "Com critérios de avaliação, o uso de IA generativa passa de apoio não controlado a processo rastreável, mensurável e adequado ao serviço público, com redução de riscos de privacidade, segurança e direitos autorais."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como o modelo não copia obras protegidas, não há questão de direito autoral no uso de saída de IA em documento institucional.",
        "porqueErrada": "Não é verdade que a falta de cópia literal isente o uso da saída de qualquer questão autoral. O erro está em confundir «não reproduzir obra protegida» com «não haver direitos autorais envolvidos». Na prática, usar a resposta do modelo em um documento institucional exige examinar separadamente: quem detém a titularidade da saída e sob que licença ela é oferecida (conforme os termos do serviço que o usuário deve ler e aceitar), se os dados de treinamento foram obtidos de forma lícita (ponto que o usuário não controla) e se o resultado apresenta similaridade com obra protegida (risco que exige verificação antes do uso institucional).",
        "versaoCorreta": "Há questão de direito autoral mesmo sem cópia literal: titularidade e licença da saída conforme os termos do serviço, licitude dos dados de treinamento e risco de similaridade com obra protegida exigem verificação antes de uso institucional."
      },
      {
        "afirmacaoEquivocada": "Basta o modelo não reter dados para treinamento para que qualquer conteúdo, incluindo dado pessoal e sigiloso, possa ser enviado livremente.",
        "porqueErrada": "Mesmo com ausência de retenção para treinamento, o envio de dado pessoal, dado sensível ou informação sigilosa exige base legal e avaliação de risco prévia. A ausência de retenção não elimina a necessidade de anonimização, registro do envio e verificação dos termos do fornecedor.",
        "versaoCorreta": "A ausência de retenção para treinamento não autoriza o envio livre de conteúdo protegido; é necessário base legal, avaliação de risco, anonimização/pseudonimização, registro do envio e verificação dos termos do fornecedor."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Dado pessoal",
        "Dado sensível",
        "Informação sigilosa",
        "Base legal para tratamento",
        "Anonimização",
        "Pseudonimização",
        "Termos de serviço (retenção, treinamento, subcontratação)",
        "Titularidade e licença da saída",
        "Risco de similaridade com obra protegida",
        "Critérios de avaliação de resultados"
      ],
      "regras": [
        "Não inserir dado pessoal, dado sensível, informação sigilosa ou credencial sem base legal e avaliação de risco",
        "Preferir anonimização ou pseudonimização antes do envio",
        "Verificar termos do fornecedor quanto a retenção, uso para treinamento e subcontratação",
        "Registrar o que foi enviado, por quem e por qual base",
        "Nunca inserir dados sensíveis, credenciais ou informação sigilosa"
      ],
      "comparacoes": [
        "Com critérios de avaliação: rastreável e mensurável; sem critérios: uso direto sem controle",
        "Anonimização reduz exposição; envio direto amplia retenção indefinida"
      ],
      "fluxos": [
        "Conteúdo → avaliação de base legal e risco → anonimização/pseudonimização → envio com registro → saída avaliada por critérios",
        "Minuta gerada → conferência de fatos e identificadores → validação humana → documento institucional"
      ],
      "excecoes": [
        "Ausência de retenção para treinamento não elimina necessidade de base legal",
        "Ausência de cópia literal não afasta discussão de licença e titularidade",
        "Dados sensíveis, credenciais e informação sigilosa nunca devem ser inseridos"
      ],
      "palavrasChave": [
        "privacidade",
        "segurança",
        "direitos autorais",
        "dado pessoal",
        "base legal",
        "anonimização",
        "titularidade",
        "licença",
        "critérios de avaliação",
        "reprodutibilidade"
      ],
      "checklist": [
        "Avaliar base legal e necessidade do tratamento de conteúdo",
        "Minimizar o contexto, suprimindo identificadores e substituindo por marcadores",
        "Verificar termos do fornecedor (retenção, treinamento, subcontratação)",
        "Registrar o que foi enviado, por quem e por qual base",
        "Não inserir dados sensíveis, credenciais ou informação sigilosa",
        "Avaliar minuta por critérios: fidelidade, completude, conformidade, relevância, clareza, segurança",
        "Registrar prompt, parâmetros, versão do modelo e trecho",
        "Monitorar indicadores de ganho de tempo e índice de correção"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um servidor cola no chat da ferramenta o texto de uma reclamação completa, com nome, CPF e endereço do cidadão, para pedir uma minuta de resposta. Qual o problema e a alternativa?",
        "dados": "Reclamação completa contendo nome, CPF e endereço do cidadão, enviada a serviço de IA generativa externo para geração de minuta de resposta.",
        "conceitos": [
          "dado pessoal",
          "transferência para fornecedor",
          "base legal",
          "anonimização"
        ],
        "estrategia": "Identificar a transferência de dado pessoal a terceiro sem base legal e apresentar alternativa baseada em avaliação de base legal, minimização de contexto, versão corporativa, registro e não inserção de dados sensíveis.",
        "execucao": [
          "1. Identificar que nome, CPF e endereço são dados pessoais transferidos para fornecedor externo.",
          "2. Avaliar se há base legal e necessidade para esse tratamento.",
          "3. Minimizar o contexto: usar apenas o necessário, suprimindo identificadores e substituindo por marcadores.",
          "4. Usar versão corporativa com contrato de tratamento e ausência de retenção para treinamento.",
          "5. Registrar o envio; nunca inserir dados sensíveis, credenciais ou informação sigilosa."
        ],
        "resultado": "O problema é TRANSFERÊNCIA de dado pessoal e de informação identificável a terceiro sem base legal para esse uso, além de ampliar a exposição por retenção indefinida no histórico da ferramenta. A alternativa: (1) avaliar se há base legal e necessidade para esse tratamento, considerando o art. 31 da Lei nº 12.527/2011 e o regime de dados pessoais; (2) minimizar o contexto — usar apenas o necessário, suprimindo identificadores e substituindo por marcadores; (3) usar versão corporativa com contrato de tratamento e ausência de retenção para treinamento; (4) registrar o envio; (5) nunca inserir dados sensíveis, credenciais ou informação sigilosa. O rascunho pode ser obtido com o texto já anonimizado.",
        "justificativa": "O resultado é o gabarito porque nomeia a causa raiz (transferência sem base legal) e lista a alternativa concreta e ordenada para uso institucional seguro.",
        "errosFrequentes": [
          "Achar que o problema é apenas de qualidade da minuta, e não de exposição de dados pessoais",
          "Esquecer de registrar o envio e de verificar a base legal antes de usar a ferramenta"
        ],
        "variacao": "Se o cidadão for servidor público e a reclamação envolver dado de saúde, o conteúdo passa a ser dado sensível, exigindo base legal ainda mais restritiva e proibição de envio sem avaliação de risco prévia."
      },
      {
        "tipo": "aplicacao",
        "problema": "Monte o conjunto de critérios de avaliação de uma minuta gerada para resposta a cidadão.",
        "dados": "Minuta de resposta a cidadão gerada por IA generativa, com base em trecho de origem; necessidade de critérios de fidelidade, completude, conformidade, relevância, clareza, segurança, reprodutibilidade e impacto.",
        "conceitos": [
          "fidelidade à fonte",
          "completude",
          "conformidade de formato",
          "relevância e clareza",
          "segurança",
          "reprodutibilidade",
          "impacto"
        ],
        "estrategia": "Definir cada critério como item de checklist e indicador monitorado, com conferência automática de fatos contra a fonte e bloqueio de saída sem trecho válido.",
        "execucao": [
          "1. Fidelidade: toda afirmação factual existe no trecho de origem (conferência automática de números, prazos, nomes de ato e citações; bloqueio se não houver trecho).",
          "2. Completude: todos os pontos da pergunta foram respondidos.",
          "3. Conformidade de formato: campos obrigatórios e tipos válidos.",
          "4. Relevância e clareza: resposta direta, em linguagem adequada ao cidadão (art. 3º, VII, da Lei nº 14.129/2021).",
          "5. Segurança: nenhum identificador do requerente ou de terceiro além do necessário, nenhum segredo de sistema.",
          "6. Reprodutibilidade: prompt, parâmetros, versão do modelo e trecho registrados.",
          "7. Impacto: comparação entre a minuta e a resposta final do servidor, para medir ganho real de tempo e índice de correção."
        ],
        "resultado": "FIDELIDADE: toda afirmação factual existe no trecho de origem (conferência automática de números, prazos, nomes de ato e citações; bloqueio se não houver trecho); COMPLETUDE: todos os pontos da pergunta foram respondidos; CONFORMIDADE DE FORMATO: campos obrigatórios e tipos válidos; RELEVÂNCIA e CLAREZA: resposta direta, em linguagem adequada ao cidadão (art. 3º, VII, da Lei nº 14.129/2021); SEGURANÇA: nenhum identificador do requerente ou de terceiro na minuta além do necessário, nenhum segredo de sistema; REPRODUTIBILIDADE: prompt, parâmetros, versão do modelo e trecho registrados; IMPACTO: comparação entre a minuta e a resposta final do servidor, para medir o ganho real de tempo e o índice de correção. Cada critério vira um item de checklist e um indicador monitorado.",
        "justificativa": "O resultado é o gabarito porque apresenta um conjunto completo e ordenado de critérios de avaliação, cada um vinculado a um controle concreto e transformável em item de checklist e indicador.",
        "errosFrequentes": [
          "Avaliar apenas a clareza da redação e ignorar a fidelidade factual à fonte",
          "Não registrar prompt, parâmetros e versão do modelo, impossibilitando reprodução"
        ],
        "variacao": "Se a minuta contiver prazo recursal ou valor indenizatório, a conferência automática contra o trecho de origem deve ser reforçada, pois erro nesses dados implica consequência jurídica direta."
      },
      {
        "tipo": "erro",
        "problema": "O servidor incorpora a saída do modelo em um documento institucional sem citar trecho de origem e sem verificar titularidade, licença ou risco de similaridade, movido pelo pressuposto ingênuo de que, como o modelo não reproduz obras protegidas literalmente, não existe qualquer questão de direito autoral envolvida.",
        "dados": "Saída de modelo de linguagem usada em documento institucional, sem cópia literal de obra protegida, mas sem verificação de titularidade, licença dos termos do serviço e risco de similaridade com obra protegida.",
        "conceitos": [
          "titularidade da saída",
          "licença dos termos do serviço",
          "licitude dos dados de treinamento",
          "risco de similaridade com obra protegida"
        ],
        "estrategia": "Desmontar a afirmação mostrando que a questão de direito autoral é tripartite (titularidade/licença da saída, licitude dos dados de treinamento, risco de similaridade) e que a ausência de cópia literal não a afasta.",
        "execucao": [
          "1. Reconhecer que a ausência de cópia literal não elimina a questão de direito autoral.",
          "2. Verificar titularidade e licença da saída conforme os termos do serviço (que o usuário deve ler e aceitar).",
          "3. Avaliar licitude dos dados de treinamento (que o usuário não controla).",
          "4. Verificar risco de similaridade com obra protegida antes do uso.",
          "5. Concluir que a discussão de licença e titularidade persiste independentemente de cópia literal."
        ],
        "resultado": "Errado. A questão é tripartite: titularidade e licença da saída conforme os termos do serviço (que o usuário deve ler e aceitar), licitude dos dados de treinamento (que o usuário não controla) e risco de similaridade com obra protegida (que exige verificação antes de uso). A ausência de cópia literal não afasta a discussão de licença e de titularidade.",
        "justificativa": "O resultado é o gabarito porque desmonta a afirmação falsa, apresenta a questão tripartite e exige verificação antes do uso institucional.",
        "errosFrequentes": [
          "Achar que ausência de cópia literal elimina qualquer questão de direito autoral",
          "Esquecer que os dados de treinamento não são controlados pelo usuário"
        ],
        "variacao": "Se a saída for usada em edital público, a verificação de titularidade e licença deve ser feita antes da publicação, pois o uso institucional amplia a exposição e a responsabilidade do órgão."
      }
    ]
  },
  "m5-u3-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Este subtópico ensina a distinguir exemplos comprovados de uso de IA generativa (padrões observados em operação) de hipóteses ilustrativas de projeto (aplicações plausíveis ainda não observadas). Essa distinção evita afirmar como fato o que é apenas hipótese e evita inventar capacidades de produtos comerciais não verificadas, competência essencial para responder corretamente a itens de prova e para conduzir projetos de IA no serviço público com honestidade factual.",
      "preRequisitos": [
        "Diferença entre exemplo comprovado e hipótese ilustrativa",
        "Requisito de governança que acompanha cada uso de IA generativa",
        "Proibição de afirmar estatística ou alcance sem fonte verificada",
        "Revisão humana obrigatória em uso de IA no serviço público"
      ],
      "objetivosObservaveis": [
        "Distinguir exemplo comprovado de hipótese ilustrativa de projeto",
        "Relacionar cada uso de IA generativa ao requisito de governança que o acompanha",
        "Descrever padrões de uso sem afirmar capacidade específica de produto comercial não verificada",
        "Identificar afirmações de alcance ou número sem fonte e tratá-las com ceticismo"
      ],
      "competencias": [
        "Análise de honestidade factual e normativa na descrição de usos de IA",
        "Julgamento de ceticismo diante de afirmações de alcance ou número sem fonte",
        "Projeto de uso de IA generativa como hipótese com marco de validação",
        "Tomada de decisão sobre quando um uso passa de hipótese a uso verificado"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u3-t3-s1 (Privacidade, segurança, direitos autorais e avaliação de resultados) — critérios de avaliação aplicam-se à validação de hipóteses de projeto"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Aplicações no setor público e privado, exemplos comprovados e hipóteses ilustrativas compõem tema de relevância média no programa de IA para concursos públicos; o tema é central no Módulo 5. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que este subtópico separa exemplos comprovados (padrões de uso largamente observados e documentáveis, descritos sem dados específicos de produto, ferramenta ou índice) de hipóteses ilustrativas (aplicações plausíveis ainda não observadas em operação, apresentadas como hipótese de projeto e nunca como fato). Entende que afirmar alcance ou número sem fonte deve ser tratado com ceticismo.",
      "intermediario": "O aluno conduz um projeto de IA generativa como hipótese: trata como hipótese no documento interno com responsável, prazo e marco de validação; delimita escopo; monta base de conhecimento a partir de fontes oficiais; define critérios de avaliação (fidelidade, completude, clareza, reprodutibilidade) com conjunto de testes; pilota com servidor, revisão humana obrigatória e medição de ganho e índice de correção; só publica após validação e aprovação editorial; registra versão do modelo, prompt e base. Até a validação, é hipótese; a partir dela, é uso verificado.",
      "avancado": "O aluno distingue padrões de uso amplamente observados (redação de minutas com revisão, triagem de chamados por assunto, síntese de corpus interno com exibição de trechos) de práticas não consolidadas (substituição automática integral do atendimento humano, que exige supervisão e canal humano). Relaciona cada uso ao requisito de governança que o acompanha e rejeita afirmações de índice de satisfação sem fonte.",
      "especialista": "O aluno governa o ciclo de hipótese a uso verificado: marco de validação definido, conjunto de testes de aceitação, revisão humana obrigatória, medição de ganho de tempo e índice de correção, aprovação editorial, registro de versão do modelo/prompt/base, e critério claro de quando o projeto deixa de ser hipótese para ser uso verificado institucional."
    },
    "comparacoes": [
      {
        "tema": "Exemplo comprovado versus hipótese ilustrativa de projeto",
        "a": {
          "rotulo": "Exemplo comprovado",
          "texto": "Padrão de uso largamente observado e documentável em atenção a serviço, que pode ser descrito sem afirmar dados específicos de produto, ferramenta ou índice (ex.: redação de minutas com revisão humana, triagem de chamados por assunto, síntese de corpus interno com exibição de trechos)."
        },
        "b": {
          "rotulo": "Hipótese ilustrativa de projeto",
          "texto": "Aplicação plausível mas ainda não observada em operação no recorte analisado; apresentada como hipótese de projeto e nunca como fato, com responsável, prazo e marco de validação."
        },
        "diferencaGabarito": "Exemplo comprovado já é observado em operação; hipótese ilustrativa ainda não é e exige validação antes de ser apresentada como fato. Nenhum dos dois deve afirmar alcance, número ou nome de produto sem fonte."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A automação integral do atendimento pelo chat do órgão é prática comum em toda a administração pública brasileira, com alto índice de satisfação.",
        "porqueErrada": "Errado, e o erro é duplo: primeiro, generaliza sem fonte (a prática não é uniforme e não há indicador validado neste material); segundo, afirma estatística («alto índice de satisfação») sem verificação. Item que contenha afirmação de alcance ou de número sem fonte deve ser tratado com ceticismo — a versão tecnicamente correta é: «há usos de IA generativa em apoio a atendimento e redação, com supervisão humana obrigatória e avaliação de qualidade».",
        "versaoCorreta": "Há usos de IA generativa em apoio a atendimento e redação, com supervisão humana obrigatória e avaliação de qualidade; a automação integral não é prática comprovada uniforme e qualquer afirmação de alcance ou índice de satisfação exige fonte verificada."
      },
      {
        "afirmacaoEquivocada": "Ao descrever uso de IA generativa no serviço público, é correto afirmar a capacidade específica de um produto comercial como se fosse fato comprovado.",
        "porqueErrada": "Não é correto afirmar capacidade específica de produto comercial não verificada. A regra de honestidade normativa e factual vale também para o desempenho de ferramenta: descrever padrões de uso e requisitos de governança, sem afirmar capacidade de produto não verificada.",
        "versaoCorreta": "Descrever padrões de uso e requisitos de governança, sem afirmar capacidade específica de produto comercial não verificada; a honestidade factual veda a afirmação de desempenho de ferramenta sem fonte."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "exemplo comprovado",
        "hipótese ilustrativa de projeto",
        "requisito de governança",
        "honestidade factual",
        "ceticismo diante de afirmação sem fonte",
        "revisão humana obrigatória",
        "marco de validação",
        "uso verificado"
      ],
      "regras": [
        "Separar exemplo comprovado de hipótese ilustrativa",
        "Não afirmar como fato o que é apenas hipótese",
        "Não afirmar capacidade específica de produto comercial não verificada",
        "Tratar afirmação de alcance ou número sem fonte com ceticismo",
        "Supervisão humana obrigatória e canal humano em atendimento automatizado"
      ],
      "comparacoes": [
        "Exemplo comprovado: observado em operação; hipótese: ainda não observada, exige validação",
        "Apoio com revisão (padrão) versus substituição automática integral (não consolidada)"
      ],
      "fluxos": [
        "Tratar como hipótese no documento interno → delimitar escopo → montar base de conhecimento → definir critérios de avaliação → pilotar com servidor e revisão humana → publicar após validação → registrar versão/modelo/prompt/base",
        "Hipótese de projeto → marco de validação → conjunto de testes → uso verificado institucional"
      ],
      "excecoes": [
        "Afirmação de alcance ou número sem fonte deve ser tratada com ceticismo",
        "Substituição automática integral do atendimento humano exige supervisão e canal humano",
        "Não afirmar capacidade de produto comercial como fato comprovado"
      ],
      "palavrasChave": [
        "exemplo comprovado",
        "hipótese ilustrativa",
        "governança",
        "honestidade factual",
        "revisão humana",
        "marco de validação",
        "uso verificado",
        "ceticismo",
        "supervisão humana"
      ],
      "checklist": [
        "Tratar o projeto como hipótese no documento interno, com responsável, prazo e marco de validação",
        "Delimitar escopo: um benefício, um canal, um conjunto de perguntas",
        "Montar base de conhecimento a partir de fontes oficiais e indexá-la",
        "Definir critérios de avaliação (fidelidade, completude, clareza, reprodutibilidade) com conjunto de testes",
        "Piloto com servidor, revisão humana obrigatória e medição de ganho e índice de correção",
        "Publicar apenas após validação e aprovação editorial",
        "Registrar versão do modelo, do prompt e da base",
        "Não afirmar alcance, número ou nome de produto sem fonte"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Como redigir, em prova, uma afirmação sobre uso de IA generativa sem inventar capacidade de ferramenta?",
        "dados": "Item de prova sobre uso de IA generativa no serviço público, com alternativa que menciona número, prazo ou nome de produto sem fonte.",
        "conceitos": [
          "padrão de uso",
          "requisito de governança",
          "honestidade factual"
        ],
        "estrategia": "Descrever o padrão de uso e o requisito de governança, não a ferramenta; escolher a alternativa que evita afirmação específica sem fonte, que é o padrão de resposta honesta e tecnicamente defensável.",
        "execucao": [
          "1. Identificar se a alternativa menciona número, prazo ou nome de produto sem fonte.",
          "2. Se sim, tratar com ceticismo e não escolher essa alternativa.",
          "3. Descrever o padrão de uso e o requisito de governança, não a ferramenta.",
          "4. Escolher a alternativa que evita afirmação específica sem fonte."
        ],
        "resultado": "Descreva o PADRÃO DE USO e o REQUISITO DE GOVERNANÇA, não a ferramenta: «sistemas de IA generativa podem ser usados como apoio à redação de minutas, desde que haja revisão humana, registro e uso apenas de dados com base legal». Se o item oferecer alternativa com número, prazo ou nome de produto sem fonte, a escolha correta será a que evita a afirmação específica. Esse é o padrão de resposta honesta e, em itens de prova, é também a tecnicamente defensável.",
        "justificativa": "O resultado é o gabarito porque ensina a responder itens de prova com honestidade factual, descrevendo padrão de uso e requisito de governança sem inventar capacidade de ferramenta.",
        "errosFrequentes": [
          "Escolher alternativa que menciona nome de produto ou número sem fonte",
          "Afirmar como fato o que é apenas hipótese de projeto"
        ],
        "variacao": "Se a alternativa afirmar índice de satisfação de atendimento automatizado sem fonte, deve ser rejeitada por falta de evidência, mesmo que pareça plausível."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão quer publicar um guia de trâmite de um benefício usando IA. Como o projeto deve ser conduzido para não ser apenas uma hipótese apresentada como fato?",
        "dados": "Projeto de publicação de guia de trâmite de benefício usando IA generativa; necessidade de tratar como hipótese, delimitar escopo, montar base de conhecimento, definir critérios de avaliação, pilotar, validar e publicar.",
        "conceitos": [
          "hipótese de projeto",
          "marco de validação",
          "revisão humana obrigatória",
          "uso verificado"
        ],
        "estrategia": "Conduzir o projeto como hipótese com marco de validação, delimitando escopo, montando base de conhecimento de fontes oficiais, definindo critérios de avaliação com testes, pilotando com servidor e revisão humana, publicando apenas após validação e registrando versão/modelo/prompt/base.",
        "execucao": [
          "1. Tratar como HIPÓTESE DE PROJETO no documento interno, com responsável, prazo e marco de validação.",
          "2. Delimitar escopo: um benefício, um canal, um conjunto de perguntas.",
          "3. Montar base de conhecimento a partir das fontes oficiais e indexá-la.",
          "4. Definir critérios de avaliação (fidelidade, completude, clareza, reprodutibilidade) com conjunto de testes.",
          "5. Pilotar com servidor, com revisão humana obrigatória e medição de ganho de tempo e índice de correção.",
          "6. Só publicar o guia após validação e aprovação editorial.",
          "7. Registrar a versão do modelo, do prompt e da base."
        ],
        "resultado": "(1) TRATAR COMO HIPÓTESE DE PROJETO no documento interno, com responsável, prazo e marco de validação; (2) delimitar escopo: um benefício, um canal, um conjunto de perguntas; (3) montar base de conhecimento a partir das fontes oficiais e indexá-la; (4) definir critérios de avaliação (fidelidade, completude, clareza, reprodutibilidade) com conjunto de testes; (5) pilotar com servidor, com revisão humana obrigatória e medição de temporal de ganho e de índice de correção; (6) só publicar o guia após validação e aprovação editorial; (7) registrar a versão do modelo, do prompt e da base. Até a etapa 6, o projeto é hipótese; a partir dela, é uso verificado.",
        "justificativa": "O resultado é o gabarito porque apresenta um procedimento ordenado que transforma uma hipótese de projeto em uso verificado, com marco de validação claro e revisão humana obrigatória.",
        "errosFrequentes": [
          "Publicar o guia como fato comprovado antes da validação",
          "Não registrar versão do modelo, do prompt e da base, impossibilitando reprodução"
        ],
        "variacao": "Se o guia envolver cálculo de prazo recursal ou valor de benefício, a conferência automática contra a fonte oficial deve ser reforçada, pois erro nesses dados tem consequência jurídica direta."
      },
      {
        "tipo": "erro",
        "problema": "O item afirma que a automação integral do atendimento pelo chat do órgão é prática comum em toda a administração pública brasileira, com alto índice de satisfação, sem indicar fonte que comprove o alcance ou validade da estatística — uma generalização sem base verificada que induz à leitura ingênua.",
        "dados": "Afirmação de que a automação integral do atendimento por chat é prática comum em toda a administração pública brasileira, com alto índice de satisfação, sem fonte indicando alcance ou indicador validado.",
        "conceitos": [
          "afirmação sem fonte",
          "estatística não verificada",
          "ceticismo",
          "supervisão humana obrigatória"
        ],
        "estrategia": "Corrigir a afirmação mostrando o erro duplo (generalização sem fonte e estatística não verificada) e apresentar a versão tecnicamente correta (usos de apoio com supervisão humana obrigatória e avaliação de qualidade).",
        "execucao": [
          "1. Identificar o erro duplo: generalização sem fonte e estatística («alto índice de satisfação») sem verificação.",
          "2. Tratar afirmação de alcance ou número sem fonte com ceticismo.",
          "3. Apresentar a versão tecnicamente correta: «há usos de IA generativa em apoio a atendimento e redação, com supervisão humana obrigatória e avaliação de qualidade».",
          "4. Reconhecer que a substituição automática integral não é prática consolidada e exige supervisão e canal humano."
        ],
        "resultado": "A afirmação está errada por duas razões: generaliza sem indicar fonte (a prática não é uniforme nem há indicador validado neste material) e cita uma estatística («alto índice de satisfação») sem verificação. Qualquer item que afirme alcance ou número sem fonte deve ser lido com ceticismo. A correção técnica é dizer apenas que existem usos de IA generativa em apoio a atendimento e redação, com supervisão humana obrigatória e avaliação de qualidade.",
        "justificativa": "O resultado é o gabarito porque desmonta a afirmação falsa, identifica o erro duplo e apresenta a versão tecnicamente correta com supervisão humana obrigatória.",
        "errosFrequentes": [
          "Aceitar afirmação de alcance ou índice de satisfação sem fonte",
          "Considerar a automação integral como prática comum consolidada"
        ],
        "variacao": "Se a alternativa afirmar que «todos os órgãos usam chatbot com 90% de satisfação», deve ser rejeitada por falta de fonte e por ser estatística não verificável neste material."
      }
    ]
  }
};
