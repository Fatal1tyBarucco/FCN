const enriParcialM1U2P8 = {
  "modulo-1-unidade-2-topico-12-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A acessibilidade de documentos decide se um edital, parecer ou texto legal pode ser lido por pessoas que usam leitores de tela, e o módulo de aplicativos de escritório trata desse cuidado no conteúdo programático. No Word, a ferramenta Verificar Acessibilidade aponta problemas antes da exportação, e a opção de etiquetas de estrutura no PDF é o que transporta títulos e descrições para o arquivo final. Sem essa verificação, um PDF com boa aparência visual continua inacessível para tecnologia assistiva, o que configura falha de conformidade em editais públicos.",
      "preRequisitos": [
        "Noção de editor de texto (Microsoft Word)",
        "Conhecimento dos menus Arquivo, Revisão e Exibir",
        "Diferença entre formatação visual (fonte, negrito) e estilo semântico (título, cabeçalho)"
      ],
      "objetivosObservaveis": [
        "Executar Revisão > Verificar Acessibilidade e interpretar o relatório de problemas apontados",
        "Aplicar estilos de título aos capítulos e seções em vez de apenas aumentar a fonte",
        "Preencher texto alternativo descritivo nas imagens do documento",
        "Exportar via Arquivo > Exportar > Criar PDF/XPS marcando a geração de etiquetas de estrutura para acessibilidade",
        "Verificar a navegação por títulos e a leitura de imagens e tabelas no PDF resultante"
      ],
      "competencias": [
        "Atenção à estrutura semântica do documento, não apenas à aparência visual",
        "Diferenciação entre conteúdo visual e marcação para tecnologia assistiva",
        "Verificação de acessibilidade antes e depois da exportação para PDF"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-13-sub-1 (Formatos .doc vs .docx e compatibilidade) — escolha do formato de destino na distribuição de documentos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Acessibilidade de documentos e exportação para PDF integram o conteúdo programático de informática para concursos e são objeto de avaliação em itens sobre recursos do Word e boas práticas de edição de textos oficiais. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Verificar Acessibilidade (Review > Verificar Acessibilidade) identifica problemas como texto alternativo faltando, uso de estilos de título, contraste, navegação por teclado. Verificação ortográfica (Revisão > Verificação Ortográfica) detecta palavras escritas incorretamente. Exportação para PDF (Arquivo > Exportar > Criar PDF/XPS) preserva layout, com opções para marcas d'água, otimizar tamanho, preservar cametas de acessibilidade (texto alternativo, estruturas de heading) para leitores de tela…",
      "intermediario": "O aluno executa Verificar Acessibilidade sobre o documento de origem, trata cada item apontado (texto alternativo em imagens, estilos de título, contraste e ordem de leitura) e, só então, exporta via Arquivo > Exportar > Criar PDF/XPS marcando a opção de etiquetas de estrutura. Após gerar o PDF, confere se a navegação por títulos funciona e se as imagens têm descrição, corrigindo a origem sempre que uma pendência persistir no arquivo final.",
      "avancado": "O aluno compara dois caminhos de geração de PDF a partir do mesmo documento: impressão virtual, que reproduz apenas a aparência visual sem marcação semântica, e exportação com etiquetas de estrutura, que transporta títulos, descrições e cabeçalhos de tabela para o leitor de tela. Verifica, no arquivo resultante de cada caminho, se a navegação por títulos sobrevive, e conclui que a preservação da acessibilidade depende do procedimento de exportação e não da aparência idêntica das páginas.",
      "especialista": "O aluno audita um fluxo de publicação recorrente (edição periódica a partir de um modelo), estabelece o modelo de origem com estilos de título e texto alternativo preenchidos, define a exportação com etiquetas de estrutura como etapa obrigatória e cria um roteiro de conferência no PDF gerado (navegação, ordem de leitura, tabelas com cabeçalhos). Também avalia exceções, como documentos que precisam de arquivamento de longo prazo, em que a conferência visual não substitui a verificação de marcação semântica."
    },
    "comparacoes": [
      {
        "tema": "Caminho de geração do PDF e preservação da acessibilidade",
        "a": {
          "rotulo": "Exportar com etiquetas de estrutura",
          "texto": "Arquivo > Exportar > Criar PDF/XPS, com a opção de gerar etiquetas de estrutura para acessibilidade marcada; transporta títulos, descrições de imagens e cabeçalhos de tabela para o leitor de tela."
        },
        "b": {
          "rotulo": "Impressão virtual para PDF",
          "texto": "Geração de PDF por impressão virtual; reproduz páginas com aparência idêntica, mas não transporta a estrutura semântica, deixando títulos e descrições inacessíveis para tecnologia assistiva."
        },
        "diferencaGabarito": "Somente a exportação com etiquetas de estrutura preserva a acessibilidade; a impressão virtual produz páginas visualmente iguais, mas sem navegação por títulos nem descrições para leitores de tela."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário afirma que PDF sempre preserva a estrutura de headings do documento e que basta salvar como PDF para cumprir o requisito de acessibilidade.",
        "porqueErrada": "A preservação não é automática: depende da opção de etiquetas de estrutura estar marcada na exportação; a impressão virtual não gera essa marcação, ainda que a aparência seja idêntica.",
        "versaoCorreta": "Correto: o PDF preserva a estrutura somente quando a exportação inclui etiquetas de acessibilidade; confira sempre a navegação no arquivo gerado."
      },
      {
        "afirmacaoEquivocada": "Verificar a acessibilidade apenas pelo aspecto visual do PDF já garante que um leitor de tela percorre o documento corretamente.",
        "porqueErrada": "A aparência visual não revela a ausência de marcação semântica; títulos formatados apenas com fonte maior e imagens sem descrição parecem normais, mas são inacessíveis.",
        "versaoCorreta": "Correto: a conferência deve ser feita com leitor de tela ou ferramenta de verificação, checando navegação por títulos, ordem de leitura e descrições de imagens e tabelas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "texto alternativo: descrição textual de uma imagem, lida por tecnologia assistiva",
        "estrutura de títulos: hierarquia semântica que permite navegação no documento",
        "etiquetas de estrutura no PDF: marcação que transporta títulos e descrições para o arquivo exportado",
        "ordem de leitura: sequência em que a tecnologia assistiva percorre o conteúdo"
      ],
      "regras": [
        "Corrigir a acessibilidade no documento de origem antes de exportar, porque o PDF deriva da marcação existente",
        "Marcar a opção de etiquetas de estrutura na exportação para PDF para preservar títulos e descrições",
        "Conferir a navegação por títulos e a leitura de imagens e tabelas no PDF resultante"
      ],
      "comparacoes": [
        "Exportação com etiquetas de estrutura preserva acessibilidade; impressão virtual preserva apenas a aparência visual."
      ],
      "fluxos": [
        "Revisão > Verificar Acessibilidade > corrigir itens > Arquivo > Exportar > Criar PDF/XPS > marcar etiquetas > conferir PDF gerado"
      ],
      "excecoes": [
        "Documentos com texto alternativo ausente permanecem sem descrição no PDF mesmo com etiquetas marcadas; a correção deve ocorrer na origem",
        "Títulos formatados apenas com fonte maior não geram marcador de navegação, exigindo estilo de título adequado"
      ],
      "palavrasChave": [
        "acessibilidade",
        "texto alternativo",
        "estilos de título",
        "etiquetas de estrutura",
        "PDF",
        "leitor de tela"
      ],
      "checklist": [
        "Executar Verificar Acessibilidade no documento de origem",
        "Preencher texto alternativo em todas as imagens relevantes",
        "Aplicar estilos de título a capítulos e seções",
        "Exportar para PDF com etiquetas de estrutura marcadas",
        "Conferir navegação por títulos e leitura de tabelas no PDF gerado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Preparar um edital em editor de texto para publicação em PDF que possa ser lido por leitor de tela, identificando o que impede a leitura antes da exportação.",
        "dados": "Documento de 30 páginas com cinco imagens, duas delas sem descrição, títulos parcialmente formatados de modo manual, três tabelas e exportação prevista para PDF.",
        "conceitos": [
          "texto alternativo: descrição textual de uma imagem, lida por tecnologia assistiva",
          "estrutura de títulos: hierarquia semântica que permite navegação no documento",
          "etiquetas de estrutura no PDF: marcação que transporta títulos e descrições para o arquivo exportado"
        ],
        "estrategia": "Corrigir a origem antes de exportar, porque a acessibilidade do PDF depende do que existe no documento de texto; em seguida marcar a opção que preserva a estrutura na exportação.",
        "execucao": [
          "Executar Revisão > Verificar Acessibilidade e tratar cada item apontado.",
          "Escrever texto alternativo nas duas imagens sem descrição e aplicar estilos de título onde havia apenas formatação manual.",
          "Conferir contraste e ordem de leitura dos elementos posicionados sobre o texto.",
          "Exportar com Arquivo > Exportar > Criar PDF/XPS e, em Opções, marcar a geração de etiquetas de estrutura para acessibilidade, conferindo o resultado no PDF gerado."
        ],
        "resultado": "PDF com estrutura de títulos navegável e texto alternativo preservado, permitindo que o leitor de tela anuncie a hierarquia; a verificação no documento de origem não aponta pendências graves.",
        "justificativa": "A exportação não cria acessibilidade: ela transporta a estrutura existente quando a opção de etiquetas é marcada. Imagem sem texto alternativo continua sem descrição no PDF e título formatado apenas com fonte maior não gera marcador de navegação, de modo que a correção precisa ocorrer na origem e ser conferida no arquivo final.",
        "errosFrequentes": [
          "Exportar primeiro e tentar corrigir acessibilidade no PDF, que é derivado e não corrige a origem.",
          "Presumir que toda exportação preserva títulos e descrições, sem marcar as etiquetas de estrutura.",
          "Descrever a imagem com o nome do arquivo, que não informa conteúdo ao leitor de tela."
        ],
        "variacao": "O mesmo edital precisa ser publicado também em HTML acessível. Indique quais verificações feitas no documento de texto continuam válidas e qual informação a versão HTML exige que o PDF não exigia."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno recebe a tarefa de revisar um PDF já publicado que foi reprovado em teste com leitor de tela, sem permissão para alterar o conteúdo, apenas o arquivo de origem.",
        "dados": "PDF com 42 páginas, títulos sem navegação, quatro imagens sem descrição e tabelas que o leitor de tela anuncia como bloco único.",
        "conceitos": [
          "ordem de leitura: sequência em que a tecnologia assistiva percorre o conteúdo",
          "marcador de tabela: estrutura que associa células a linhas e colunas",
          "arquivo de origem: documento editável que gera o PDF"
        ],
        "estrategia": "Tratar a origem e reexportar com etiquetas, porque corrigir marcação dentro do PDF é limitado e não sobrevive a uma nova geração do arquivo.",
        "execucao": [
          "Abrir a origem e aplicar estilos de título nos capítulos e seções que estavam apenas em negrito.",
          "Preencher o texto alternativo das quatro imagens, descrevendo a informação que cada uma transmite.",
          "Demarcar as tabelas com cabeçalho de linha e de coluna para que o leitor de tela associe as células.",
          "Reexportar com etiquetas de estrutura e testar a navegação por títulos e a leitura de uma tabela no PDF resultante."
        ],
        "resultado": "PDF reexportado com navegação por títulos, descrições presentes e tabelas anunciadas com seus cabeçalhos; o teste com leitor de tela percorre o documento na ordem prevista.",
        "justificativa": "A qualidade do PDF é consequência da marcação do documento de origem, e cada deficiência apontada corresponde a uma ausência específica: estilo de título, texto alternativo e demarcação de cabeçalhos de tabela. Reexportar a partir da origem preserva a correção em futuras publicações, o que não ocorre ao editar a marcação do PDF.",
        "errosFrequentes": [
          "Corrigir a marcação apenas no PDF e gerar nova versão a partir da origem não corrigida.",
          "Demarcar a tabela como imagem para preservar a aparência, perdendo a leitura célula a célula.",
          "Testar a acessibilidade apenas com verificação automática, sem percorrer o documento com leitor de tela."
        ],
        "variacao": "A publicação passa a ser trimestral, sempre a partir do mesmo modelo. Explique o que deve ser corrigido no modelo para que as próximas gerações já saiam acessíveis e por que isso reduz o retrabalho."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor afirma que o PDF sempre preserva a estrutura de títulos do documento e que, portanto, basta salvar como PDF para cumprir o requisito de acessibilidade.",
        "dados": "Documento com doze títulos estilizados, exportação feita pela opção de impressão virtual, nenhuma etiqueta de estrutura no arquivo gerado.",
        "conceitos": [
          "etiquetagem: marcação que preserva a semântica no PDF",
          "impressão virtual: geração de PDF que reproduz páginas sem transportar estrutura",
          "verificação pós-exportação: conferência da navegação e das descrições no arquivo final"
        ],
        "estrategia": "Comparar dois caminhos de geração do PDF e verificar, no arquivo resultante, se a navegação por títulos sobreviveu.",
        "execucao": [
          "Gerar um PDF pela opção de impressão virtual e verificar a ausência de marcadores de título.",
          "Gerar outro pela exportação com etiquetas de estrutura marcada.",
          "Comparar a navegação por títulos nos dois arquivos.",
          "Concluir que a preservação depende do caminho de exportação e conferir sempre o resultado."
        ],
        "resultado": "A afirmação é incorreta: o PDF preserva a estrutura somente quando a geração inclui etiquetagem, e a impressão virtual produz páginas sem marcação semântica, ainda que a aparência seja idêntica.",
        "justificativa": "PDF é um formato de apresentação de páginas e pode ou não carregar marcação semântica. A exportação com etiquetas traduz estilos e descrições do documento de origem; a impressão virtual reproduz apenas o resultado visual. Como a aparência é a mesma nos dois casos, a conferência precisa ser feita por navegação e não por inspeção visual.",
        "errosFrequentes": [
          "Julgar a acessibilidade pela aparência do PDF.",
          "Usar impressão virtual em documento que precisa de navegação por leitor de tela.",
          "Exportar com etiquetas e não conferir se os títulos chegaram ao arquivo final."
        ],
        "variacao": "O mesmo documento precisa atender a um requisito de arquivamento de longo prazo, além da acessibilidade. Indique o que deve ser verificado no arquivo gerado e por que a conferência visual não é suficiente."
      }
    ]
  },
  "modulo-1-unidade-2-topico-13-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Entender a diferença entre .doc e .docx é fundamental para editar, converter e distribuir documentos do Word sem perder recursos nem comprometer a integridade do conteúdo. O formato .doc é binário e legado (Office 2003 e anteriores); o .docx é Open XML, padrão desde o Office 2007. Abrir um .doc no Word 365 ativa o Modo de Compatibilidade, que limita funcionalidades novas, e simplesmente renomear a extensão não converte o arquivo. Para distribuição sem edição, recomenda-se PDF. Esses pontos são cobrados em questões de informática de concursos sobre compatibilidade de versões e formato de arquivos.",
      "preRequisitos": [
        "Noção de editor de texto (Microsoft Word)",
        "Conhecimento de extensões de arquivo (.doc, .docx)",
        "Noção do que são macros em documentos"
      ],
      "objetivosObservaveis": [
        "Diferenciar o formato .doc (binário, legado) do .docx (Open XML, padrão desde 2007)",
        "Identificar quando o Word ativa o Modo de Compatibilidade ao abrir um .doc",
        "Converter um .doc para .docx preservando o original como referência",
        "Decidir quando distribuir em PDF em vez de formato editável do Word",
        "Revisar sumários, campos e macros após conversão de formato"
      ],
      "competencias": [
        "Atenção à integridade do documento ao mudar de formato",
        "Julgamento sobre o formato adequado para edição, distribuição ou arquivamento",
        "Diferenciação entre renomear extensão e converter realmente o arquivo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-12-sub-1 (Acessibilidade e exportação PDF) — formato recomendado para distribuição sem edição"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Compatibilidade de formatos do Word (.doc, .docx, modo de compatibilidade) é objeto de avaliação em questões de informática de concursos, sobretudo em itens que testam o comportamento do editor ao abrir documentos legados e a escolha do formato para distribuição. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Formatos: .doc (legado, binário, Office 2003 e anteriores), .docx (Open XML, padrão desde Office 2007), .docm (docx com macros), .dotx (modelo), .dotm (modelo com macros). Compatibilidade: abrir .doc no Word 365 ativa Modo de Compatibilidade, limitando funcionalidades novas. Converter .doc para .docx geralmente preserva conteúdo mas pode reformatar elementos. Para máxima compatibilidade, recomenda-se salvar em .pdf para distribuição. O Modo de Compatibilidade desabilita funcionalidades introduzi…",
      "intermediario": "O aluno abre um documento .doc legado no Word 365 e identifica a ativação do Modo de Compatibilidade, que restringe recursos introduzidos após 2007 para preservar a integridade do conteúdo original. Decide se edita no formato original ou converte para .docx, usando Arquivo > Informações > Converter ou Salvar Como com o tipo atual, e guarda uma cópia do .doc como referência. Após converter, revisa sumário, campos e macros, atualizando os elementos cuja representação mudou.",
      "avancado": "O aluno padroniza um acervo de documentos .doc para .docx, separando arquivos com macro (.docm) dos demais porque o formato de destino deve suportar macro para não descartar o código. Converte em lotes com cópia de segurança dos originais, revisa por amostragem sumários, tabelas complexas e campos de formulário, e registra os arquivos que exigiram ajuste manual antes de tratar o acervo inteiro.",
      "especialista": "O aluno define uma política de formato para a instituição: .docx para edição conjunta com recursos atuais, .docm/.dotm quando houver macros, .dotx/.dotm para modelos, e PDF para distribuição sem edição a qualquer dispositivo. Avalia a tensão entre formato de edição e formato de arquivamento de longo prazo, determinando quais conferências de legibilidade acompanham a escolha e por que o formato de edição não é necessariamente o de preservação."
    },
    "comparacoes": [
      {
        "tema": "Formatos .doc vs .docx: estrutura e compatibilidade",
        "a": {
          "rotulo": ".doc (binário, legado)",
          "texto": "Formato binário legado do Office 2003 e anteriores; aberto no Word 365 em Modo de Compatibilidade, que limita funcionalidades novas para preservar a integridade do conteúdo original."
        },
        "b": {
          "rotulo": ".docx (Open XML)",
          "texto": "Formato baseado em XML aberto, padrão desde o Office 2007; suporta recursos atuais, sumário, campos e coautoria, e é o alvo natural da conversão de documentos legados."
        },
        "diferencaGabarito": ".doc é binário e legado, restrito pelo Modo de Compatibilidade; .docx é Open XML, aberto desde 2007, com recursos completos e coautoria."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um servidor afirma que .doc e .docx são formatos equivalentes e que um documento pode ser trocado de um para o outro sem consequências.",
        "porqueErrada": "A extensão apenas rotula o arquivo; renomeá-la não altera a estrutura interna binária para Open XML, provocando avisos de formato divergente e possível perda de campos.",
        "versaoCorreta": "Correto: .doc é binário legado e .docx é Open XML; somente a conversão pelo editor transforma o formato e preserva os elementos."
      },
      {
        "afirmacaoEquivocada": "Renomear um arquivo de .doc para .docx converte o documento para o formato atual e habilita todos os recursos do Word.",
        "porqueErrada": "Trocar a extensão não reescreve a estrutura interna; o arquivo continua binário e o editor exibe avisos, sem habilitar coautoria nem recursos novos.",
        "versaoCorreta": "Correto: somente a conversão feita pelo editor (Arquivo > Informações > Converter ou Salvar Como) transforma o formato de verdade."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        ".doc: formato binário legado, anterior ao padrão aberto",
        ".docx: formato baseado em XML aberto, adotado a partir do pacote de 2007",
        "modo de compatibilidade: estado que restringe recursos para preservar o formato antigo"
      ],
      "regras": [
        "Abrir .doc no Word 365 ativa o Modo de Compatibilidade, limitando funcionalidades novas",
        "Converter .doc para .docx geralmente preserva conteúdo, mas pode reformatar elementos",
        "Para distribuição sem edição, recomenda-se salvar em PDF"
      ],
      "comparacoes": [
        ".doc é binário e legado; .docx é Open XML e padrão desde 2007."
      ],
      "fluxos": [
        "Abrir .doc > observar Modo de Compatibilidade > converter para .docx > revisar sumário, campos e macros > guardar original como referência"
      ],
      "excecoes": [
        "Arquivos com macro exigem formato de destino com suporte a macro (.docm); converter para .docx sem suporte a macro descarta o código",
        "Converter sem guardar o original perde a referência do estado anterior do documento"
      ],
      "palavrasChave": [
        ".doc",
        ".docx",
        "modo de compatibilidade",
        "conversão",
        "macro",
        "PDF"
      ],
      "checklist": [
        "Guardar uma cópia do .doc original antes de converter",
        "Abrir o arquivo e observar o aviso de modo de compatibilidade",
        "Usar Arquivo > Informações > Converter ou Salvar Como com o tipo atual",
        "Revisar sumário, campos e macros após a conversão",
        "Escolher PDF para distribuição sem edição"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Receber um modelo antigo em .doc e decidir se convém editá-lo no formato original ou convertê-lo para .docx antes de produzir um contrato novo.",
        "dados": "Arquivo de 2003 em .doc com macros, quinze páginas, sumário automático e campos de formulário, editor atual disponível e necessidade de coautoria.",
        "conceitos": [
          ".doc: formato binário legado, anterior ao padrão aberto",
          ".docx: formato baseado em XML aberto, adotado a partir do pacote de 2007",
          "modo de compatibilidade: estado que restringe recursos para preservar o formato antigo"
        ],
        "estrategia": "Comparar o que o arquivo precisa fazer com o que o formato antigo suporta e converter preservando o original como cópia de referência.",
        "execucao": [
          "Salvar uma cópia do .doc original antes de qualquer conversão.",
          "Abrir o arquivo e observar o aviso de modo de compatibilidade.",
          "Usar Arquivo > Informações > Converter, ou Salvar Como com o tipo de documento atual.",
          "Revisar sumário, campos e macros após a conversão, atualizando os campos e conferindo se o arquivo convertido abre com os recursos esperados."
        ],
        "resultado": "Documento no formato atual, sem modo de compatibilidade, com sumário e campos atualizados e coautoria disponível; o .doc original permanece guardado como referência do estado anterior.",
        "justificativa": "O formato define o conjunto de recursos disponíveis: o binário legado é aberto em modo de compatibilidade, que restringe recursos posteriores, enquanto o formato aberto é aquele em que os recursos atuais e a coautoria funcionam plenamente. A conversão preserva o conteúdo, mas exige revisão de elementos cuja representação mudou.",
        "errosFrequentes": [
          "Converter sem guardar o original e perder a referência do estado anterior.",
          "Presumir que a conversão é neutra e não revisar sumário, tabelas e campos.",
          "Enviar o formato antigo a quem usa versão atual e supor que verá os mesmos recursos."
        ],
        "variacao": "O contrato precisa ser distribuído para assinatura e leitura em qualquer dispositivo, sem edição pelo destinatário. Indique o formato de distribuição adequado e explique o que se perde ao optar por ele em relação ao formato editável."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa padronizar quarenta documentos legados de um acervo, todos em formato binário, para que passem a abrir sem restrição de compatibilidade e possam ser editados em conjunto.",
        "dados": "Quarenta arquivos em .doc, dois deles com macros, sumários automáticos em vinte arquivos, três com tabelas complexas e nenhum backup do acervo.",
        "conceitos": [
          "lote: conjunto de arquivos tratados pelo mesmo procedimento",
          "macro: código armazenado no documento, que exige formato compatível",
          "revisão pós-conversão: conferência dos elementos que podem mudar de representação"
        ],
        "estrategia": "Separar os arquivos com macro dos demais, porque o formato de destino com suporte a macro é diferente, e converter em lotes com verificação por amostragem antes de tratar o acervo inteiro.",
        "execucao": [
          "Copiar o acervo para uma pasta de trabalho, preservando os originais.",
          "Separar os dois arquivos com macro e tratá-los no formato correspondente com suporte a macro.",
          "Converter os demais para o formato atual e revisar, por amostragem, sumários, tabelas e campos.",
          "Registrar quais arquivos exigiram ajuste manual e repetir a revisão nos casos semelhantes."
        ],
        "resultado": "Acervo convertido com dois arquivos mantidos no formato com macro, sumários atualizados nos vinte arquivos que os possuíam e tabelas complexas revisadas; os originais permanecem disponíveis como referência.",
        "justificativa": "A conversão em lote reduz esforço, mas não dispensa a revisão, porque elementos como sumário e tabelas dependem de representação que pode mudar entre formatos. Separar arquivos com macro é obrigatório, já que o formato de destino sem suporte a macro descartaria o código.",
        "errosFrequentes": [
          "Converter todo o acervo para o formato sem macro e perder o código dos dois arquivos.",
          "Tratar os quarenta arquivos sem cópia de segurança.",
          "Considerar a conversão concluída sem revisar sumários e tabelas."
        ],
        "variacao": "O acervo precisa ser arquivado por vinte anos, com garantia de legibilidade. Explique por que o formato de edição não é necessariamente o de arquivamento e qual conferência deve acompanhar a escolha."
      },
      {
        "tipo": "erro",
        "problema": "Um colega afirma que .doc e .docx são apenas duas extensões do mesmo formato e que trocar a extensão do arquivo basta para atualizá-lo.",
        "dados": "Arquivo em .doc de 180 páginas com campos de formulário, tentativa de renomear a extensão para .docx, abertura do arquivo resultante em dois editores distintos.",
        "conceitos": [
          "extensão: indicação do formato, que não converte o conteúdo",
          "formato binário x formato aberto: estruturas internas distintas",
          "verificação de integridade: conferência de que o arquivo abre e mantém os elementos"
        ],
        "estrategia": "Reproduzir a troca de extensão e verificar o comportamento do arquivo, comparando com a conversão feita pelo próprio editor.",
        "execucao": [
          "Renomear a extensão do arquivo e tentar abri-lo.",
          "Observar o aviso de formato divergente e o risco de conteúdo perdido.",
          "Repetir o procedimento com a conversão pelo editor e comparar a integridade dos campos de formulário.",
          "Concluir qual caminho preserva o documento e manter o original intacto."
        ],
        "resultado": "A afirmação é incorreta: a extensão apenas rotula o arquivo, e renomeá-la não altera a estrutura interna. A conversão pelo editor é o procedimento que transforma o formato e preserva os elementos revisados.",
        "justificativa": "O formato é determinado pela estrutura interna do arquivo, não pelo nome. Renomear a extensão cria um arquivo cujo rótulo não corresponde ao conteúdo, o que provoca avisos de reparo e pode descartar campos; a conversão feita pelo editor reescreve a estrutura e permite revisar o que mudou.",
        "errosFrequentes": [
          "Renomear a extensão e considerar o arquivo convertido.",
          "Ignorar o aviso de formato divergente e salvar por cima do original.",
          "Concluir que a perda de campos é defeito do editor, quando decorre do procedimento adotado."
        ],
        "variacao": "O arquivo precisa ser aberto por um editor antigo que não entende o formato atual. Descreva o procedimento correto e o que deve ser conferido no arquivo entregue."
      }
    ]
  }
};
