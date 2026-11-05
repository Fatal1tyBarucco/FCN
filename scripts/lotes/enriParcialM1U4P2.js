const enriParcialM1U4P2 = {
  "modulo-1-unidade-4-topico-1-sub-3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Inserir mídia, gráficos e objetos é o que transforma um slide de simples repositório de texto em apresentação visual. Em concursos, o PowerPoint é objeto de avaliação em itens de informática sobre pacote Office, e dominar os caminhos da faixa de opções (Inserir > Imagem/Vídeo/Áudio/Tabela/Gráfico/Formas) evita erros de navegação sob pressão. A distinção entre mídia local e online, a noção de objeto com manipuladores de dimensionamento, o encadear de texto (wrap) e o agrupamento de objetos são conceitos cobrados em interpretação de interface e procedimento.",
      "preRequisitos": [
        "Noção de interface do PowerPoint (faixa de opções, guias Inserir e Layout)",
        "Conceito de objeto selecionável com manipuladores de borda",
        "Diferença entre arquivo local e recurso online (URL)"
      ],
      "objetivosObservaveis": [
        "Inserir imagem local via Inserir > Imagem > Local e dimensionar com manipuladores de borda",
        "Inserir vídeo do YouTube por URL via Inserir > Vídeo > Online Vídeo",
        "Inserir áudio via Inserir > Áudio",
        "Criar tabela via Inserir > Tabela (grade ou desenho manual)",
        "Inserir gráfico via Inserir > Gráfico e distinguir gráfico estático de gráfico vinculado ao Excel",
        "Inserir formas (retângulos, setas) e associar texto a elas",
        "Aplicar encadear de texto (Layout > Encadear) a objetos do slide",
        "Agrupar objetos para movimentá-los como unidade"
      ],
      "competencias": [
        "Navegação precisa na faixa de opções do PowerPoint",
        "Distinguição entre mídia embarcada e mídia vinculada/online",
        "Organização visual de elementos em slides"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-4-topico-1-sub-4 (Compatibilidade de fontes, mídia e formatos (.ppt vs .pptx)) — depende da inserção correta de mídia para evitar referências quebradas",
        "modulo-1-unidade-4-topico-1-sub-2 (Temas e variações visuais (Design > Temas)) — o objeto inserido se comporta diferente conforme o layout do slide"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Inserir mídia, gráficos e objetos no PowerPoint integra o conteúdo programático de informática para concursos, e os itens costumam perguntar qual caminho de menu executa determinada ação de inserção, a diferença entre .ppt e .pptx, o comportamento de mídia online e o procedimento de encadear de texto. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O PowerPoint permite inserir imagem, vídeo e áudio como objetos no slide. A imagem local entra via Inserir > Imagem > Local e ganha manipuladores de borda para redimensionar. O vídeo online (YouTube por URL) entra via Inserir > Vídeo > Online Vídeo e exige conexão de internet durante a apresentação. O áudio entra via Inserir > Áudio. Cada mídia é um objeto independente que pode ser selecionado, movido e redimensionado individualmente.",
      "intermediario": "Além da mídia, o PowerPoint aceita tabelas (Inserir > Tabela, por grade ou desenho manual), gráficos (Inserir > Gráfico) e objetos de desenho (Inserir > Formas: retângulos, setas, figuras). O gráfico pode ser estático (imagem) ou vinculado ao Excel para atualização de dados. Formas podem receber texto associado. O encadear de texto (Layout > Encadear) controla como o texto do slide contorna o objeto inserido, com opções como Enquadrar e Barrar.",
      "avancado": "Agrupar objetos (Grupo) permite movimentar e editar vários elementos como uma unidade, alterando a interação de edição do slide. A distinção entre inserir objeto estático e vincular dados (gráfico do Excel) define se o conteúdo se atualiza automaticamente. O encadear de texto afeta a legibilidade e deve ser testado em projeção, pois a quebra de linhas pode mudar conforme a resolução do projetor.",
      "especialista": "Em cenários de produção, o autor de apresentações gerencia bibliotecas de mídia, padroniza objetos reutilizáveis e testa o comportamento de encadear e agrupamento em diferentes resoluções de tela. Para distribuição offline, deve garantir que toda mídia inserida esteja disponível na máquina de destino, evitando referências quebradas. O gráfico vinculado ao Excel exige que o arquivo de dados acompanhe a apresentação ou seja reencontrado ao abrir."
    },
    "comparacoes": [
      {
        "tema": "Mídia local versus mídia online inserida em slide",
        "a": {
          "rotulo": "Mídia local (imagem/vídeo/áudio do computador)",
          "texto": "O arquivo é embarcado na apresentação. Não exige conexão de internet durante a exibição, mas aumenta o tamanho do arquivo .pptx."
        },
        "b": {
          "rotulo": "Mídia online (vídeo do YouTube por URL)",
          "texto": "O vídeo não é embarcado; o slide referência a URL. Exige conexão de internet ativa durante a apresentação e não funciona offline."
        },
        "diferencaGabarito": "A mídia local funciona sem internet mas pesa o arquivo; a mídia online depende de conexão ao vivo e pode deixar de funcionar se o vídeo for removido da plataforma."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A tabela inserida no slide se atualiza automaticamente quando a planilha de origem no Excel é alterada.",
        "porqueErrada": "Uma tabela inserida via Inserir > Tabela é uma cópia estática de células no PowerPoint; não mantém vínculo ativo com a planilha do Excel, então mudanças na origem não se refletem no slide.",
        "versaoCorreta": "Somente o gráfico vinculado ao Excel pode manter conexão com dados externos; a tabela inserida é estática e não se atualiza com alterações na planilha de origem."
      },
      {
        "afirmacaoEquivocada": "Qualquer objeto do slide, incluindo imagem e forma, permite aplicar encadear de texto (wrap) ao redor.",
        "porqueErrada": "O encadear de texto se aplica a objetos que ocupam área do slide e interagem com o fluxo de texto, mas nem todo objeto inserido se comporta como esperado; a opção Layout > Encadear deve ser testada caso a caso, especialmente em objetos de desenho sobrepostos.",
        "versaoCorreta": "O encadear de texto é aplicado selecionando o objeto e usando Layout > Encadear (Enquadrar, Barrar etc.), mas seu efeito depende do tipo de objeto e da disposição dos elementos no slide."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Objeto de slide com manipuladores de borda",
        "Mídia local versus mídia online por URL",
        "Gráfico estático versus gráfico vinculado ao Excel",
        "Encadear de texto (wrap) via Layout > Encadear",
        "Agrupamento de objetos (Grupo)"
      ],
      "regras": [
        "Imagem local entra via Inserir > Imagem > Local e se dimensiona por manipuladores de borda",
        "Vídeo do YouTube entra via Inserir > Vídeo > Online Vídeo colando a URL e exige conexão durante a apresentação",
        "Áudio entra via Inserir > Áudio como objeto independente",
        "Tabela entra via Inserir > Tabela (grade ou desenho manual) e é estática",
        "Formas entram via Inserir > Formas e podem receber texto associado"
      ],
      "comparacoes": [
        "Mídia local não exige internet mas aumenta o arquivo; mídia online exige conexão ao vivo",
        "Tabela inserida é estática; gráfico vinculado ao Excel pode atualizar dados",
        "Objeto agrupado se move como unidade; objetos soltos se movem individualmente"
      ],
      "fluxos": [
        "Selecionar Inserir > Escolher tipo de mídia > Local ou Online > Confirmar inserção > Redimensionar via manipuladores",
        "Selecionar objeto > Layout > Encadear > Escolher opção de enquadramento > Ajustar posição no slide"
      ],
      "excecoes": [
        "Vídeo online não funciona sem conexão de internet durante a apresentação",
        "Tabela inserida não se atualiza automaticamente com planilha do Excel",
        "Gráfico vinculado ao Excel exige que o arquivo de dados esteja acessível para atualização"
      ],
      "palavrasChave": [
        "Inserir",
        "Imagem",
        "Vídeo",
        "Áudio",
        "Tabela",
        "Gráfico",
        "Formas",
        "Encadear",
        "Agrupar",
        "YouTube"
      ],
      "checklist": [
        "Inseriu imagem local via Inserir > Imagem > Local",
        "Dimensionou imagem usando manipuladores de borda",
        "Inseriu vídeo do YouTube por URL e verificou conexão de internet",
        "Inseriu áudio via Inserir > Áudio",
        "Criou tabela via Inserir > Tabela",
        "Inseriu gráfico via Inserir > Gráfico",
        "Associou texto a uma forma inserida",
        "Aplicou encadear de texto a um objeto",
        "Agrupou dois ou mais objetos como unidade"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Inserir uma imagem local (foto em JPEG) em um slide de apresentação e redimensioná-la para ocupar a largura do slide.",
        "dados": "Arquivo foto.jpg armazenado na pasta Documentos do computador; slide em branco aberto no PowerPoint.",
        "conceitos": [
          "Objeto de slide com manipuladores de borda",
          "Mídia local embarcada"
        ],
        "estrategia": "Usar o comando Inserir da faixa de opções, escolher Imagem > Local, localizar o arquivo na pasta Documentos, inserir como objeto e depois arrastar os manipuladores de borda para ajustar o tamanho sem distorcer a proporção.",
        "execucao": [
          "1. Clicar na guia Inserir da faixa de opções.",
          "2. Clicar em Imagem e escolher a opção Local (este computador).",
          "3. Navegar até a pasta Documentos, selecionar foto.jpg e clicar em Inserir.",
          "4. A imagem aparece no slide como objeto com pontos (manipuladores) nas bordas e cantos.",
          "5. Arrastrar um manipulador de canto para redimensionar mantendo a proporção original."
        ],
        "resultado": "A imagem fica inserida no slide como um objeto selecionável, com manipuladores de borda visíveis, e pode ser redimensionada sem exigir conexão de internet.",
        "justificativa": "O resultado é o gabarito porque o caminho Inserir > Imagem > Local é o procedimento correto para trazer um arquivo de imagem do computador para o slide, e os manipuladores de borda são o mecanismo padrão de dimensionamento de objetos no PowerPoint.",
        "errosFrequentes": [
          "Copiar e colar a imagem de outro documento sem usar Inserir > Imagem, o que pode perder metadados ou vínculo com o arquivo original.",
          "Arraster um manipulador de canto sem segurar Shift, distorcendo a proporção da imagem."
        ],
        "variacao": "Em vez de uma foto em JPEG, inserir um logotipo em PNG com fundo transparente e posicioná-lo no canto superior direito do slide."
      },
      {
        "tipo": "aplicacao",
        "problema": "Inserir um vídeo do YouTube em um slide de apresentação institucional a partir do endereço da página do vídeo.",
        "dados": "URL do vídeo no YouTube (https://www.youtube.com/watch?v=exemplo); apresentação aberta no PowerPoint; computador com conexão de internet ativa.",
        "conceitos": [
          "Mídia online por URL",
          "Requisito de conexão de internet durante a apresentação"
        ],
        "estrategia": "Usar Inserir > Vídeo > Online Vídeo, colar a URL do YouTube no campo indicado, confirmar a inserção e verificar que o player aparece no slide, lembrando que a exibição depende de conexão ao vivo.",
        "execucao": [
          "1. Clicar na guia Inserir da faixa de opções.",
          "2. Clicar em Vídeo e escolher Online Vídeo.",
          "3. Colar a URL do YouTube no campo de endereço do vídeo online.",
          "4. Clicar em Inserir para adicionar o player ao slide.",
          "5. Reproduzir o slide para confirmar que o vídeo carrega (exige conexão de internet)."
        ],
        "resultado": "O slide passa a exibir um player de vídeo do YouTube vinculado pela URL; a reprodução funciona apenas se houver conexão de internet durante a apresentação.",
        "justificativa": "O resultado é o gabarito porque Inserir > Vídeo > Online Vídeo é o comando específico para mídia online por URL, e o comportamento de exigir conexão ao vivo é inerente ao vídeo hospedado externamente, não embarcado no arquivo.",
        "errosFrequentes": [
          "Esperar que o vídeo funcione offline após ser inserido por URL, sem perceber que ele não está embarcado no arquivo .pptx.",
          "Colar o link de um vídeo do YouTube que foi removido ou definido como privado, impedindo a reprodução."
        ],
        "variacao": "Inserir um vídeo de outra plataforma de hospedagem (por exemplo, Vimeo) via URL, verificando se o PowerPoint reconhece o endereço como vídeo online válido."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que uma tabela inserida no slide a partir do Excel se atualiza sozinha se a planilha de origem mudar depois da apresentação pronta.",
        "dados": "Tabela inserida no PowerPoint via Inserir > Tabela (células copiadas ou recriadas manualmente no slide); planilha do Excel original alterada após a inserção.",
        "conceitos": [
          "Objeto estático inserido",
          "Gráfico vinculado ao Excel versus tabela estática"
        ],
        "estrategia": "Identificar que a tabela inserida é uma cópia estática de células, não um objeto vinculado ao Excel; explicar que apenas o gráfico vinculado ao Excel mantém conexão com dados externos; corrigir a expectativa de atualização automática.",
        "execucao": [
          "1. Abrir o slide que contém a tabela inserida.",
          "2. Verificar que a tabela foi criada via Inserir > Tabela (grade ou desenho), não via gráfico vinculado ao Excel.",
          "3. Alterar um valor na planilha do Excel de origem.",
          "4. Observar que a tabela no slide permanece inalterada, confirmando que não há vínculo ativo.",
          "5. Concluir que, para dados atualizados, é necessário usar gráfico vinculado ao Excel ou reinserir a tabela após a alteração."
        ],
        "resultado": "A tabela inserida no slide não se altera quando a planilha do Excel muda, porque é um objeto estático; apenas um gráfico vinculado ao Excel manteria conexão com os dados de origem.",
        "justificativa": "O resultado é o gabarito porque o conteúdo base afirma explicitamente que tabela/gráfico inserido de forma estática não se atualiza, reservando a atualização de dados ao gráfico vinculado ao Excel.",
        "errosFrequentes": [
          "Confundir tabela inserida com gráfico vinculado ao Excel, atribuindo à tabela uma capacidade de atualização automática que ela não tem.",
          "Assumir que qualquer conteúdo vindo do Excel permanece vinculado após ser inserido no PowerPoint."
        ],
        "variacao": "Um usuário afirma que um gráfico do Excel copiado como imagem para o slide se atualiza com a planilha; a correção é que a imagem é estática e somente o gráfico vinculado (não a cópia de imagem) mantém conexão com os dados."
      }
    ]
  },
  "modulo-1-unidade-4-topico-1-sub-4": {
    "orientacaoEstrategica": {
      "porqueImporta": "Garantir compatibilidade de apresentações entre máquinas e versões é fundamental para evitar que o slide quebre na hora da projeção. Em concursos, o PowerPoint é objeto de avaliação em itens de informática sobre pacote Office, e dominar formatos (.ppt legado versus .pptx Open XML), substituição de fontes, empacotamento para exportação offline e exportação para PDF evita erros de interpretação de interface e procedimento. O tema é de presença permanente no conteúdo programático porque qualquer apresentação distribuída ou apresentada em equipamento diferente do de criação está sujeita a incompatibilidades de formato, fonte ausente e mídia quebrada.",
      "preRequisitos": [
        "Noção de extensões de arquivo do PowerPoint (.ppt e .pptx)",
        "Conceito de máquina de destino diferente da máquina de criação",
        "Noção de fonte instalada no sistema operacional"
      ],
      "objetivosObservaveis": [
        "Distinguir formato .ppt (binário, PowerPoint 97-2003) de .pptx (Open XML, padrão desde 2007)",
        "Explicar por que salvar como .pptx é a prática recomendada para distribuição",
        "Descrever o que acontece quando uma fonte usada no slide não existe na máquina de destino (substituição automática e alteração de aparência)",
        "Indicar fontes padrão (Calibri, Arial) como forma de reduzir risco de substituição",
        "Explicar que mídia local inserida deve existir na máquina de destino e que mídia online exige conexão",
        "Descrever o procedimento Empacotar Apresentação para CD (Package Presentation) com fontes vinculadas e mídia",
        "Explicar que exportação para PDF preserva o layout da apresentação",
        "Registrar a versão mínima exigida ao distribuir apresentações que usam recursos de versões recentes"
      ],
      "competencias": [
        "Avaliação de compatibilidade de arquivos entre versões do PowerPoint",
        "Prevenção de problemas de fonte e mídia em máquina de destino",
        "Escolha de formato e método de distribuição adequados ao cenário"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-4-topico-1-sub-3 (Inserção de mídia, gráficos e objetos em slides) — a mídia inserida deve estar disponível na máquina de destino para não quebrar referências",
        "modulo-1-unidade-4-topico-1-sub-2 (Temas e variações visuais (Design > Temas)) — o layout afeta como fontes e objetos se comportam ao serem compatibilizados entre versões"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O pacote Office, incluindo o PowerPoint, integra o conteúdo programático de informática para concursos, e os itens costumam perguntar a diferença entre .ppt e .pptx, o comportamento de fonte ausente na máquina de destino e o procedimento de empacotamento para apresentação offline. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Existem dois formatos principais do PowerPoint: .ppt (binário, usado até o PowerPoint 2003) e .pptx (Open XML, padrão desde 2007). Ao abrir um arquivo .ppt em versões modernas, o programa pode convertê-lo, mas a prática recomendada é salvar como .pptx. Se uma fonte usada nos slides não existir no computador de destino, o PowerPoint aplica uma fonte substituta, o que pode mudar a aparência da apresentação.",
      "intermediario": "Fontes padrão como Calibri e Arial reduzem o risco de substituição porque estão instaladas na maioria dos computadores. Mídia local inserida (imagem, vídeo) precisa existir na máquina de destino; mídia online exige conexão de internet. Para apresentar offline sem internet, usa-se Empacotar Apresentação para CD (Package Presentation) com fontes vinculadas e mídia, que reúne o arquivo e seus recursos em uma pasta ou CD. Exportar para PDF preserva o layout, mas remove animações e interatividade.",
      "avancado": "A compatibilidade também depende da versão do PowerPoint: recursos de animação e transição de versões recentes podem não existir em versões antigas. Ao distribuir a apresentação, deve-se registrar a versão mínima exigida. Referências de mídia podem quebrar ao mover o arquivo de computador, por isso é recomendável testar a apresentação na máquina de destino antes do uso real.",
      "especialista": "Em ambientes corporativos, o autor padroniza o uso de fontes comuns, empacota apresentações com todos os recursos vinculados e verifica o comportamento em diferentes versões do PowerPoint e sistemas operacionais. Para distribuição crítica, testa em máquina de destino, documenta a versão mínima e considera exportar para PDF quando a fidelidade do layout for mais importante que animações e interatividade."
    },
    "comparacoes": [
      {
        "tema": "Formato .ppt versus formato .pptx",
        "a": {
          "rotulo": ".ppt (binário, PowerPoint 97-2003)",
          "texto": "Formato legado anterior ao Open XML. Ao abrir em versões modernas pode ser convertido, mas é menos estável e não é o padrão recomendado."
        },
        "b": {
          "rotulo": ".pptx (Open XML, padrão desde 2007)",
          "texto": "Formato padrão atual do PowerPoint, mais moderno, compacto e compatível com versões recentes; recomendado para salvar e distribuir apresentações."
        },
        "diferencaGabarito": "O .pptx é o formato recomendado desde 2007; o .ppt é legado e pode sofrer conversão ou limitações ao ser aberto em versões modernas do PowerPoint."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A fonte de título aplicada em um slide será mantida exatamente em qualquer máquina de destino.",
        "porqueErrada": "A fonte só aparece como planejada se estiver instalada no computador de destino. Caso contrário, o PowerPoint aplica uma fonte substituta automaticamente, o que pode alterar o tamanho, o espaçamento e a aparência geral do slide.",
        "versaoCorreta": "A fonte deve existir na máquina de destino ou o PowerPoint aplicará uma substituta; usar fontes padrão (Calibri, Arial) reduz o risco de substituição."
      },
      {
        "afirmacaoEquivocada": "Um arquivo .ppt aberto em versões modernas do PowerPoint não apresenta qualquer incompatibilidade de formato.",
        "porqueErrada": "O .ppt é um formato binário legado. Versões modernas podem abri-lo e convertê-lo, mas recursos específicos podem não funcionar perfeitamente e o arquivo pode sofrer alterações na conversão; o .pptx é o formato indicado para evitar esses problemas.",
        "versaoCorreta": "O .ppt pode ser aberto em versões modernas com conversão, mas pode apresentar incompatibilidades ou limitações; o formato recomendado para distribuição é o .pptx (Open XML)."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Formato .ppt (binário, legado)",
        "Formato .pptx (Open XML, padrão desde 2007)",
        "Fonte substituta quando a fonte original não existe na máquina de destino",
        "Empacotar Apresentação para CD (Package Presentation)",
        "Exportação para PDF preservando layout"
      ],
      "regras": [
        "O formato padrão desde 2007 é o .pptx (Open XML); o .ppt é binário e legado",
        "Ao abrir .ppt em versões modernas, o arquivo pode ser convertido",
        "Fonte não encontrada na máquina de destino leva o PowerPoint a aplicar fonte substituta",
        "Fontes padrão (Calibri, Arial) reduzem o risco de substituição de fonte",
        "Mídia local inserida deve existir na máquina de destino; mídia online exige conexão de internet",
        "Empacotar Apresentação para CD reúne a apresentação com fontes vinculadas e mídia",
        "Exportar para PDF preserva o layout da apresentação"
      ],
      "comparacoes": [
        ".ppt é legado/binário e pode converter ao abrir em versões modernas; .pptx é o padrão Open XML desde 2007",
        "Empacotar Apresentação preserva fontes e mídia para uso offline; exportar para PDF preserva o layout mas remove animações",
        "Fonte instalada na máquina de destino preserva a aparência; fonte ausente provoca substituição automática"
      ],
      "fluxos": [
        "Salvar apresentação como .pptx para distribuição",
        "Empacotar Apresentação para CD com fontes vinculadas e mídia para uso offline",
        "Testar a apresentação na máquina de destino antes de apresentar"
      ],
      "excecoes": [
        "Recursos de animação de versões recentes podem não funcionar em versões antigas do PowerPoint",
        "Mídia online não funciona sem conexão de internet durante a apresentação",
        "Exportação para PDF remove animações e interatividade da apresentação"
      ],
      "palavrasChave": [
        ".ppt",
        ".pptx",
        "Open XML",
        "fonte substituta",
        "Empacotar Apresentação para CD",
        "Package Presentation",
        "PDF",
        "versão mínima",
        "mídia quebrada"
      ],
      "checklist": [
        "Salvar a apresentação no formato .pptx (Open XML)",
        "Verificar se as fontes usadas estão instaladas na máquina de destino",
        "Usar fontes padrão (Calibri, Arial) para reduzir risco de substituição",
        "Confirmar que toda mídia local inserida está disponível na máquina de destino",
        "Empacotar Apresentação para CD com fontes vinculadas e mídia para uso offline",
        "Testar a apresentação na máquina de destino antes do uso real",
        "Registrar a versão mínima do PowerPoint exigida ao distribuir",
        "Considerar exportar para PDF quando a fidelidade do layout for prioridade"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar o formato de arquivo recomendado para salvar e distribuir uma apresentação do PowerPoint criada em versão recente.",
        "dados": "Apresentação criada no PowerPoint versão moderna (2007 ou posterior); necessidade de salvar para distribuição em outro computador.",
        "conceitos": [
          "Formato .pptx (Open XML, padrão desde 2007)",
          "Formato .ppt (binário, legado)"
        ],
        "estrategia": "Reconhecer que o .pptx é o formato padrão e recomendado desde 2007, enquanto o .ppt é o formato binário legado do PowerPoint 97-2003, sujeito a conversão ao abrir em versões modernas.",
        "execucao": [
          "1. Abrir o menu Arquivo > Salvar Como no PowerPoint.",
          "2. Observar as opções de formato disponíveis (.ppt e .pptx).",
          "3. Selecionar .pptx (Apresentação do PowerPoint) como formato de destino.",
          "4. Salvar o arquivo com extensão .pptx para garantir compatibilidade com versões modernas."
        ],
        "resultado": "O formato recomendado é o .pptx (Open XML), padrão desde 2007, porque é o formato nativo das versões modernas e evita problemas de conversão do formato legado .ppt.",
        "justificativa": "O resultado é o gabarito porque o conteúdo base estabelece que o .pptx é o padrão desde 2007 e a prática recomendada é salvar como .pptx, enquanto o .ppt é binário legado com risco de conversão em versões modernas.",
        "errosFrequentes": [
          "Salvar no formato .ppt por hábito de versões antigas, expondo a apresentação a conversão e limitações em computadores modernos.",
          "Assumir que .ppt e .pptx são totalmente equivalentes e intercambiáveis sem qualquer risco de incompatibilidade."
        ],
        "variacao": "Salvar a mesma apresentação no formato .ppt para abrir em um computador com PowerPoint 2003, avaliando quais recursos de versão recente podem ser perdidos."
      },
      {
        "tipo": "aplicacao",
        "problema": "Preparar uma apresentação para projeção offline em equipamento sem internet, incluindo fontes e vídeos inseridos.",
        "dados": "Apresentação pronta com fontes específicas e vídeos locais inseridos; computador de destino (projetor) sem conexão de internet.",
        "conceitos": [
          "Empacotar Apresentação para CD (Package Presentation)",
          "Mídia local deve existir na máquina de destino"
        ],
        "estrategia": "Usar o recurso Empacotar Apresentação para CD (Package Presentation) para reunir o arquivo da apresentação com as fontes vinculadas e a mídia em uma pasta ou mídia removível, e depois verificar se as fontes existem no computador de destino.",
        "execucao": [
          "1. Abrir a apresentação no PowerPoint.",
          "2. Ir em Arquivo > Exportar > Empacotar Apresentação para CD (Package Presentation).",
          "3. Marcar a opção de incluir fontes vinculadas e mídia no pacote.",
          "4. Escolher a pasta de destino ou unidade removível (CD/pendrive) para salvar o pacote.",
          "5. Levar o pacote ao computador de destino e abrir a apresentação para verificar fontes e reprodução de vídeo."
        ],
        "resultado": "A apresentação é empacotada com fontes vinculadas e mídia, permitindo projeção offline no computador de destino sem depender de conexão de internet nem de fontes instaladas previamente.",
        "justificativa": "O resultado é o gabarito porque o conteúdo base indica que Empacotar Apresentação para CD (Package Presentation) com fontes vinculadas e mídia é o procedimento recomendado para apresentação offline, e que mídia local deve existir na máquina de destino.",
        "errosFrequentes": [
          "Levar apenas o arquivo .pptx sem a mídia relacionada, fazendo com que os vídeos inseridos não funcionem no computador de destino.",
          "Esquecer de incluir fontes vinculadas no pacote, fazendo com que o computador de destino aplique fonte substituta e altere o layout."
        ],
        "variacao": "Preparar a mesma apresentação para projeção em computador com internet, mas sem permissão para instalar fontes, decidindo entre empacotar com fontes ou exportar para PDF."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que a fonte de título aplicada em um slide será mantida exatamente igual em qualquer máquina de destino, independentemente de a fonte estar instalada lá.",
        "dados": "Apresentação com título formatado em uma fonte específica (por exemplo, uma fonte não padrão); computador de destino que não possui essa fonte instalada.",
        "conceitos": [
          "Fonte substituta aplicada pelo PowerPoint quando a fonte original está ausente",
          "Fontes padrão (Calibri, Arial) reduzem risco de substituição"
        ],
        "estrategia": "Identificar que a afirmação é incorreta: se a fonte usada não existir na máquina de destino, o PowerPoint aplica automaticamente uma fonte substituta, alterando a aparência. Concluir que só fontes instaladas localmente ou fontes padrão garantem previsibilidade.",
        "execucao": [
          "1. Abrir a apresentação no computador de criação e observar a fonte do título (ex.: uma fonte decorativa não padrão).",
          "2. Copiar o arquivo para um computador de destino que não tenha essa fonte instalada.",
          "3. Abrir a apresentação no computador de destino.",
          "4. Observar que o título aparece com uma fonte diferente (substituta), alterando tamanho e espaçamento.",
          "5. Concluir que a fonte não é mantida automaticamente; apenas se estiver instalada no destino ou for uma fonte padrão comum."
        ],
        "resultado": "A afirmação é incorreta: a fonte de título não é mantida em qualquer máquina; se a fonte não existir no destino, o PowerPoint aplica uma fonte substituta, alterando a aparência do slide.",
        "justificativa": "O resultado é o gabarito porque o conteúdo base afirma explicitamente que, caso a fonte não exista na máquina de destino, o PowerPoint aplica fonte substituta, o que pode alterar a aparência, e que fontes padrão reduzem esse risco.",
        "errosFrequentes": [
          "Assumir que a fonte fica embutida no arquivo .pptx e viaja com a apresentação, quando na verdade o PowerPoint apenas referência o nome da fonte.",
          "Acreditar que exportar para PDF é a única forma de preservar a fonte, ignorando que usar fontes padrão ou empacotar com fontes vinculadas também são soluções."
        ],
        "variacao": "Um usuário afirma que fontes baixadas da internet e usadas no título são automaticamente disponíveis em qualquer computador; a correção é que elas só funcionam se instaladas na máquina de destino, caso contrário o PowerPoint substitui por outra fonte."
      }
    ]
  }
};
