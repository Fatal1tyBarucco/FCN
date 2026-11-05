const enriParcialM3U3P3 = {
  "m3-u3-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A disponibilidade de recursos de acessibilidade varia por plataforma, plano e versão; generalizar gera erro e prejudica o usuário. Em concursos cobram os recursos comuns, o caráter condicional deles e o cuidado de verificar a documentação oficial antes de afirmar uma capacidade.",
      "preRequisitos": [
        "Princípios de acessibilidade"
      ],
      "objetivosObservaveis": [
        "Citar recursos comuns de acessibilidade em plataformas",
        "Indicar que os recursos são condicionais (plataforma, plano, versão)",
        "Orientar a verificação na documentação oficial do produto",
        "Relacionar recurso de acessibilidade à necessidade do usuário"
      ],
      "competencias": [
        "Seleção de recurso acessível",
        "Avaliação condicional de funcionalidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t2-s1 (Princípios de acessibilidade em comunicação) — base dos princípios WCAG aplicados às plataformas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Recursos de acessibilidade em plataformas de comunicação (legendas, leitores de tela, alto contraste, atalhos) integram o conteúdo programático de TI e cargos administrativos, com itens sobre disponibilidade condicional por plano/versão, escolha de ferramenta acessível para surdos, cegos ou mobilidade reduzida, distinção entre recurso nativo e gambiarra, e verificação de que legenda automática não garante acessibilidade plena. A classificação média reflete a presença do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Recursos comuns: leitores de tela compatíveis; legendas automáticas (live captions) em reuniões; transcrição de áudio; atalhos de teclado; alto contraste; tamanho de fonte ajustável; intérprete de libras (quando disponível); descrição de slides. A disponibilidade e qualidade desses recursos variam por plataforma e plano; verificar documentação oficial da plataforma e versão utilizada. Não generalizar entre plataformas ou planos.",
      "intermediario": "Relacionar recurso e necessidade (surdo, cego, mobilidade reduzida): legenda para surdo, leitor de tela para cego, atalhos para mobilidade reduzida. Confirmar que cada recurso existe na plataforma, no plano e na versão usados antes de depender dele, e prever alternativa quando faltar.",
      "avancado": "Avaliar se uma plataforma atende a um requisito de acessibilidade específico: verificar leitor de tela, legendas revisadas, alto contraste e atalhos no contexto concreto (qual plataforma, qual plano, qual versão) antes de adotar a ferramenta institucionalmente.",
      "especialista": "Planejar contornar a ausência de um recurso com alternativa equivalente: por exemplo, oferecer material textual complementar à legenda automática quando não houver legenda revisada, garantindo acesso mesmo com limitações da plataforma."
    },
    "comparacoes": [
      {
        "tema": "Legenda automática vs. legenda revisada",
        "a": {
          "rotulo": "Automática",
          "texto": "É imediata, mas sujeita a erros de transcrição."
        },
        "b": {
          "rotulo": "Revisada",
          "texto": "É confiável, pois passou por revisão humana."
        },
        "diferencaGabarito": "A automática é rápida e pode errar; a revisada garante confiabilidade do conteúdo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Toda plataforma tem legendas ao vivo gratuitas.",
        "porqueErrada": "Depende do plano; nem toda plataforma oferece o recurso ou o oferece sem custo.",
        "versaoCorreta": "Conferir a documentação oficial da plataforma e do plano antes de assumir a disponibilidade."
      },
      {
        "afirmacaoEquivocada": "A legenda automática dispensa acessibilidade.",
        "porqueErrada": "Ela erra e não cobre todo o conteúdo relevante; legendas críticas precisam ser revisadas.",
        "versaoCorreta": "Revisar legendas automáticas e complementar com transcrição quando necessário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "leitor de tela",
        "legenda",
        "transcrição",
        "atalhos",
        "contraste",
        "Libras"
      ],
      "regras": [
        "Recursos variam por plataforma, plano e versão",
        "Verificar documentação oficial antes de assumir disponibilidade",
        "Prever alternativa quando o recurso faltar"
      ],
      "comparacoes": [
        "Recurso padrão existe independentemente do plano; recurso condicional depende dele"
      ],
      "fluxos": [
        "Verificar plataforma → plano → versão → confirmar recurso → prever alternativa"
      ],
      "excecoes": [
        "Intérprete de Libras e descrição de conteúdo compartilhado só quando disponível"
      ],
      "palavrasChave": [
        "leitor de tela",
        "legenda",
        "transcrição",
        "atalho",
        "contraste",
        "plataforma"
      ],
      "checklist": [
        "O recurso existe na plataforma?",
        "Depende do plano?",
        "Qual a versão?",
        "Há alternativa se faltar?",
        "Documentação oficial consultada?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que são live captions (legendas ao vivo) e para que servem durante uma reunião online?",
        "dados": "Reunião online; legendas geradas em tempo real; pessoas com deficiência auditiva; ambiente ruidoso.",
        "conceitos": [
          "legenda ao vivo",
          "live captions",
          "deficiência auditiva"
        ],
        "estrategia": "Explicar que as live captions são legendas geradas automaticamente em tempo real durante a reunião, úteis para acessibilidade.",
        "execucao": [
          "1. Ativar o recurso de legendas ao vivo na plataforma da reunião.",
          "2. Acompanhar as legendas geradas em tempo real na tela.",
          "3. Usar as legendas para compreender o áudio em ambientes ruidosos.",
          "4. Observar que a precisão pode variar e revisar se crítico."
        ],
        "resultado": "Legendas geradas em tempo real durante uma reunião, úteis para pessoas com deficiência auditiva e para participantes em ambientes ruidosos.",
        "justificativa": "As legendas ao vivo convertem o áudio falado em texto na tela, permitindo acompanhamento mesmo sem ouvir o áudio claramente.",
        "errosFrequentes": [
          "Acreditar que a legenda automática está sempre correta.",
          "Esquecer que o recurso pode não existir em todas as plataformas."
        ],
        "variacao": "Ativar live captions em uma reunião de treinamento com muitos termos técnicos, verificando a precisão da transcrição."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como planejar uma reunião acessível verificando os recursos disponíveis na plataforma e no plano contratado?",
        "dados": "Plataforma de videoconferência; plano contratado; participantes com necessidades diversas (surdo, cego, mobilidade reduzida).",
        "conceitos": [
          "recurso condicional",
          "plataforma",
          "plano",
          "alternativa equivalente"
        ],
        "estrategia": "Planejar a reunião verificando quais recursos de acessibilidade a plataforma oferece no plano contratado e prevendo alternativas quando faltar.",
        "execucao": [
          "1. Verificar quais recursos de acessibilidade a plataforma oferece.",
          "2. Confirmar se os recursos dependem do plano contratado.",
          "3. Enviar pauta e materiais com antecedência.",
          "4. Ativar legendas e disponibilizar gravação com transcrição.",
          "5. Oferecer canal de perguntas acessível e material textual complementar."
        ],
        "resultado": "Enviar pauta e materiais com antecedência, ativar legendas, disponibilizar gravação com transcrição, usar linguagem clara e oferecer canal de perguntas acessível.",
        "justificativa": "A verificação prévia dos recursos e o envio de materiais antecipados garantem que participantes com necessidades diferentes consigam acompanhar a reunião.",
        "errosFrequentes": [
          "Assumir que todas as plataformas oferecem os mesmos recursos.",
          "Não prever alternativa quando um recurso de acessibilidade falta."
        ],
        "variacao": "Planejar uma reunião com intérprete de Libras quando a plataforma não oferecer a janela do intérprete nativamente."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação equivocada: 'Todas as plataformas oferecem os mesmos recursos de acessibilidade, independentemente do plano.'",
        "dados": "Múltiplas plataformas de comunicação; planos diferentes; afirmação de uniformidade de recursos.",
        "conceitos": [
          "recurso condicional",
          "plataforma",
          "plano",
          "documentação oficial"
        ],
        "estrategia": "Demonstrar que os recursos de acessibilidade variam por plataforma, plano e versão, e que generalizar gera erro para o usuário.",
        "execucao": [
          "1. Identificar a afirmação de uniformidade entre plataformas.",
          "2. Reconhecer que presença, qualidade e configuração dependem da plataforma, do plano e da versão.",
          "3. Concluir que não se deve generalizar a disponibilidade de recursos.",
          "4. Determinar que se deve consultar a documentação oficial do produto."
        ],
        "resultado": "Errado. Recursos variam por plataforma, plano e versão; consultar documentação oficial antes de assumir disponibilidade.",
        "justificativa": "Cada plataforma implementa acessibilidade de forma diferente, e um recurso presente num plano pode estar ausente noutro, prejudicando o usuário que generaliza.",
        "errosFrequentes": [
          "Acreditar que todos os recursos estão disponíveis em qualquer plano.",
          "Não consultar a documentação oficial antes de assumir a disponibilidade."
        ],
        "variacao": "Afirmação: 'Legendas ao vivo são sempre gratuitas em todas as plataformas.' — Errado: dependem do plano e da versão do produto."
      }
    ]
  },
  "m3-u3-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Documentos e mensagens são a entrega final da comunicação; acessibilidade neles torna o conteúdo utilizável por todos. Concursos cobram estilos de título, listas reais, tabelas com cabeçalho, alt text, links descritivos e contraste, porque acessibilidade torna o conteúdo utilizável inclusive por pessoas com deficiência.",
      "preRequisitos": [
        "Princípios de acessibilidade",
        "Uso de editor de texto"
      ],
      "objetivosObservaveis": [
        "Usar estilos de título (Heading) em vez de negrito",
        "Construir listas e tabelas acessíveis",
        "Nomear links de forma descritiva",
        "Garantir contraste e fontes legíveis"
      ],
      "competencias": [
        "Produção de documentos acessíveis",
        "Revisão de acessibilidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t2-s1 (Princípios de acessibilidade em comunicação) — base dos princípios aplicados a documentos e mensagens"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A produção de documentos acessíveis faz parte do conteúdo programático. A classificação é qualitativa e reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Boas práticas: usar estilos de título (Heading) em vez de negrito; listas reais (não hífens manuais); tabelas com cabeçalho; evitar imagens com texto embutido sem alt text; nomear links descritivamente (evitar 'clique aqui'); garantir contraste mínimo; fornecer versão acessível de PDFs; usar fontes legíveis. Em e-mails: texto simples quando possível; evitar excesso de imagens; testar com leitor de tela.",
      "intermediario": "Construir uma tabela acessível com linha de cabeçalho identificada e nomear links descritivamente: usar estilos de título hierárquicos, listas reais em vez de hífens manuais, evitar imagens com texto embutido sem alt text e garantir contraste mínimo entre texto e fundo.",
      "avancado": "Revisar um PDF acessível e corrigir ordem de leitura: verificar que o PDF não é apenas imagem escaneada, aplicar reconhecimento de texto quando necessário, confirmar a ordem lógica de leitura e garantir tags de estrutura adequadas.",
      "especialista": "Auditar um conjunto de documentos e padronizar a acessibilidade: revisar estilos, listas, tabelas, alt text, links e contraste em toda a produção documental da instituição e definir padrões de revisão com tecnologia assistiva."
    },
    "comparacoes": [
      {
        "tema": "Estilo de título vs. negrito manual",
        "a": {
          "rotulo": "Estilo de título",
          "texto": "Cria estrutura navegável para leitores de tela e permite geração de sumário."
        },
        "b": {
          "rotulo": "Negrito manual",
          "texto": "Apenas destaca visualmente o texto, sem criar estrutura navegável."
        },
        "diferencaGabarito": "O estilo de título cria estrutura acessível; o negrito só destaca visualmente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Negrito no lugar do título é equivalente.",
        "porqueErrada": "O negrito não cria estrutura navegável para leitores de tela, apenas destaca visualmente.",
        "versaoCorreta": "Usar estilos de título (Heading) para criar estrutura navegável."
      },
      {
        "afirmacaoEquivocada": "PDF escaneado já é acessível.",
        "porqueErrada": "Uma imagem escaneada não tem camada de texto, portanto não é lida por leitores de tela.",
        "versaoCorreta": "Aplicar reconhecimento de texto (OCR) e corrigir a ordem de leitura do PDF."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "estilo de título",
        "lista real",
        "tabela com cabeçalho",
        "alt text",
        "link descritivo",
        "contraste"
      ],
      "regras": [
        "Usar estilos de título (Heading) em vez de negrito",
        "Listas reais em vez de hífens manuais",
        "Tabelas com linha de cabeçalho identificada"
      ],
      "comparacoes": [
        "Link descritivo informa o destino; 'clique aqui' não faz sentido fora de contexto"
      ],
      "fluxos": [
        "Documento estruturado → estilos de título → listas reais → alt text → PDF com tags"
      ],
      "excecoes": [
        "PDF escaneado sem camada de texto não é acessível"
      ],
      "palavrasChave": [
        "estilo de título",
        "lista real",
        "tabela",
        "alt text",
        "link descritivo",
        "contraste"
      ],
      "checklist": [
        "Estilos de título usados?",
        "Listas reais (não hífens)?",
        "Tabelas com cabeçalho?",
        "Links descritos (não 'clique aqui')?",
        "Contraste mínimo respeitado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que evitar o texto genérico 'clique aqui' em links de documentos e mensagens institucionais?",
        "dados": "Link em documento ou e-mail; leitor de tela lê o texto do link fora de contexto.",
        "conceitos": [
          "link descritivo",
          "leitor de tela",
          "contexto fora do link"
        ],
        "estrategia": "Explicar que leitores de tela leem o texto do link fora de contexto, então 'clique aqui' não informa o destino; usar descrição do destino.",
        "execucao": [
          "1. Identificar o link no documento ou mensagem.",
          "2. Substituir 'clique aqui' por descrição do destino (ex.: 'Acesse o relatório de março').",
          "3. Verificar que o texto do link faz sentido lido sozinho.",
          "4. Testar com leitor de tela, quando relevante."
        ],
        "resultado": "Leitores de tela leem o texto do link fora de contexto; 'clique aqui' não informa o destino. Use descrição do destino, ex.: 'Acesse o relatório de março'.",
        "justificativa": "O texto descritivo do link permite que o usuário, inclusive via leitor de tela, saiba para onde será direcionado sem precisar do contexto ao redor.",
        "errosFrequentes": [
          "Usar 'clique aqui' ou 'acesse aqui' como texto do link.",
          "Deixar o texto do link sem sentido quando lido isoladamente."
        ],
        "variacao": "Substituir 'clique aqui' por 'baixar o edital 2026' em um link de documento oficial."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como estruturar um documento acessível usando estilos de título, listas reais e tabelas com cabeçalho em um editor de texto?",
        "dados": "Documento de texto; editor com estilos (Heading); imagens; tabelas; links.",
        "conceitos": [
          "estilo de título",
          "lista real",
          "tabela com cabeçalho",
          "alt text",
          "contraste"
        ],
        "estrategia": "Aplicar estrutura semântica: estilos de título hierárquicos, listas reais, tabelas com cabeçalho, alt text em imagens e contraste adequado.",
        "execucao": [
          "1. Aplicar estilos de título hierárquicos (H1, H2, H3) em vez de negrito manual.",
          "2. Usar listas reais (bullet/numeração) em vez de hífens manuais.",
          "3. Criar tabelas com linha de cabeçalho identificada.",
          "4. Inserir alt text descritivo em imagens.",
          "5. Garantir contraste mínimo entre texto e fundo."
        ],
        "resultado": "Usar estilos de título hierárquicos (H1, H2...), listas reais, tabelas com cabeçalho, alt text em imagens e contraste adequado.",
        "justificativa": "A estrutura semântica permite navegação por leitores de tela, geração de sumário e leitura acessível do documento por todos os usuários.",
        "errosFrequentes": [
          "Usar negrito manual no lugar de estilos de título.",
          "Fazer listas com hífens manuais em vez de listas reais."
        ],
        "variacao": "Estruturar um relatório institucional com sumário automático gerado a partir dos estilos de título."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação equivocada: 'PDF é sempre um formato acessível, independentemente de como foi gerado.'",
        "dados": "PDF gerado; imagem escaneada sem camada de texto; afirmação de que todo PDF é acessível.",
        "conceitos": [
          "PDF acessível",
          "reconhecimento de texto (OCR)",
          "ordem de leitura",
          "tags de PDF"
        ],
        "estrategia": "Explicar que PDFs podem ser inacessíveis se forem imagens escaneadas ou sem estrutura, e que preferir PDF com texto selecionável e tags ou fornecer versão acessível.",
        "execucao": [
          "1. Identificar a afirmação de que todo PDF é acessível.",
          "2. Reconhecer que PDFs escaneados são imagens sem camada de texto.",
          "3. Concluir que tais PDFs não são lidos por leitores de tela.",
          "4. Determinar aplicar reconhecimento de texto e corrigir ordem de leitura, ou fornecer versão acessível."
        ],
        "resultado": "Errado. PDFs podem ser inacessíveis se forem imagens escaneadas ou sem estrutura; prefira PDF com texto selecionável e tags, ou forneça versão acessível.",
        "justificativa": "Um PDF acessível requer texto selecionável, tags de estrutura e ordem de leitura correta; sem isso, leitores de tela não conseguem ler o conteúdo.",
        "errosFrequentes": [
          "Acreditar que qualquer PDF é acessível por ser digital.",
          "Enviar PDF escaneado sem reconhecimento de texto (OCR)."
        ],
        "variacao": "Afirmação: 'Converter um documento do Word para PDF preserva automaticamente a acessibilidade.' — Errado: depende de usar estilos e exportar com tags."
      }
    ]
  }
};
