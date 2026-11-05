const curriculumM8 = {
  "modulo-8": {
    "titulo": "VISUALIZAÇÃO, ANÁLISE E STORYTELLING COM DADOS",
    "unidades": [
      {
        "id": "modulo-8-unidade-1",
        "titulo": "8.1 Fundamentos Visuais",
        "topicos": [
          {
            "id": "modulo-8-unidade-1-topico-1",
            "titulo": "Propósito da visualização e percepção visual",
            "subtopicos": [
              {
                "id": "m8-u1-t1-s1",
                "titulo": "O que a visualização de dados deve realizar",
                "objetivoAprendizagem": "Aluno relacionará cada tarefa analítica ao tipo de gráfico capaz de executá-la.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o propósito da visualização de dados; (b) a diferença entre visualização exploratória e explicativa; (c) a relação entre pergunta analítica e escolha de gráfico; (d) a integridade gráfica. POR QUE O CONHECIMENTO É IMPORTANTE: a visualização é o último elo entre a análise e a decisão; um gráfico errado leva a decisão errada, e a prova cobra a escolha do gráfico conforme o objetivo. PRÉ-REQUISITOS: conceitos básicos de dados e de estatística descritiva. OBJETIVOS OBSERVÁVEIS: (1) definir visualização e seus propósitos; (2) distinguir exploratória de explicativa; (3) escolher gráfico conforme o objetivo analítico. COMPETÊNCIAS DESENVOLVIDAS: análise visual; comunicação de dados. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.2 (gráficos); unidade 8.5 (storytelling); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: definição de visualização como representação gráfica de dados para ampliar a cognição humana; propósitos: explorar (descobrir padrões), explicar (comunicar achados), monitorar (acompanhar indicadores), persuadir (apoiar decisão); a visualização deve responder a uma pergunta analítica; princípios de integridade gráfica (proporção, linha de base, escala); a escolha do gráfico depende do tipo de dado e do objetivo (comparar, distribuir, relacionar, compor, evoluir). PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que gráfico serve a uma pergunta, não decoração.\n- Nível intermediário: distinguir visualização exploratória de explicativa.\n- Nível avançado: escolher gráfico conforme objetivo e tipo de dado.\n- Nível especialista: auditar um painel quanto à integridade gráfica.\nCOMPARAÇÕES CRÍTICAS:\n- exploratória x explicativa: a primeira busca padrões; a segunda comunica achados; muda a escolha de gráfico e de anotação.\n- tabela x gráfico: tabela é precisa para consulta; gráfico é melhor para padrão e tendência.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"qualquer gráfico serve para qualquer dado\" — Motivo: cada gráfico tem tipo de dado adequado — Versão tecnicamente correta: escolher conforme o dado e o objetivo.\n- Afirmação errada: \"mais cores e efeitos melhoram a visualização\" — Motivo: ruído visual prejudica — Versão tecnicamente correta: simplicidade e integridade.\n- Afirmação errada: \"gráfico substitui a análise\" — Motivo: visualização apoia, não substitui — Versão tecnicamente correta: complementar com números e contexto.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: visualização, propósito, exploratória, explicativa, integridade gráfica, escolha de gráfico.\n- Regras e fórmulas: gráfico deve responder a pergunta analítica; manter proporção e linha de base.\n- Exceções: em casos de muitas categorias, tabela pode ser melhor.\n- Palavras-chave: visualização, propósito, exploratória, explicativa, integridade, escolha.\n- Checklist de domínio: (1) Defino visualização e propósitos? (2) Distingo exploratória de explicativa? (3) Escolho gráfico conforme objetivo? (4) Avalio integridade gráfica?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual o propósito da visualização? (2) Diferença entre exploratória e explicativa? (3) Como escolher o gráfico? (4) O que é integridade gráfica? (5) Quando tabela é melhor que gráfico?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Pergunta: 'Qual unidade atendeu mais em cada mês do semestre?' Qual gráfico?",
                    "resposta": "Barras agrupadas por mês (uma barra por unidade) ou linhas com uma série por unidade, se o foco for a evolução de cada unidade ao longo do tempo. A pergunta tem duas tarefas — comparação entre unidades e evolução mensal — e a escolha prioriza uma delas; o título deve anunciar qual."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Gestor pede 'um gráfico bonito' para 12 categorias com valores muito próximos entre si. O que entregar?",
                    "resposta": "Tabela ordenada decrescentemente com rótulos de destaque para os três maiores, e não gráfico de pizza: 12 fatias com valores próximos são ilegíveis (ângulos e áreas quase iguais). O gráfico adequado seria de barras ordenadas; a tabela é melhor quando o leitor vai consultar valores específicos."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Gráfico tridimensional transmite mais informação porque mostra três dimensões.'",
                    "correcao": "Errado. O 3D aplicado a dados bidimensionais adiciona perspectiva decorativa: distorce áreas, esconde barras atrás de outras e obriga o leitor a corrigir a distorção visual. Informação a mais exigiria uma terceira variável real (por exemplo, tamanho ou cor codificando um valor)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A escolha do gráfico deve começar pela pergunta de negócio, e não pelo tipo disponível na ferramenta.",
                    "resposta": "Certo. A tarefa analítica define o gráfico; a ferramenta é meio, não critério."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para distribuição de idades de 500 servidores, o gráfico mais indicado é: A) linhas; B) histograma; C) pizza; D) dispersão.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de relacionar cada tarefa analítica ao tipo de gráfico capaz de executá-la, evidenciado por resposta correta a item de verificação associado ao subtópico.",
                "videos": [
                  {
                    "id": "P6E_Kts9pxE",
                    "titulo": "É o fim do Power BI? Criando Dashboard com Python em 15 minutos",
                    "canal": "Asimov Academy",
                    "urlOriginal": "https://www.youtube.com/watch?v=P6E_Kts9pxE",
                    "embedUrl": "https://www.youtube-nocookie.com/embed/P6E_Kts9pxE",
                    "descricao": "Videoaula prática de criação de dashboard interativo com Python usando Streamlit, Plotly e Pandas. Demonstra: carregamento e preparação de dados, criação de gráficos interativos (barras, linhas, dispersão, mapas), filtros dinâmicos (sidebar, selectbox, slider), layout em colunas, métricas (KPIs), deployment no Streamlit Community Cloud. Compara a abordagem código-first (Python) com ferramentas low-code (Power BI, Tableau), discutindo versionamento, reprodutibilidade, custo e flexibilidade. Inclui boas práticas de design visual e acessibilidade.",
                    "dataValidacao": "2026-10-24"
                  }
                ]
              },
              {
                "id": "m8-u1-t1-s2",
                "titulo": "Princípios da Gestalt aplicados a gráficos",
                "objetivoAprendizagem": "Aluno aplicará proximidade, similaridade, continuidade, fechamento e figura-fundo ao desenho de um gráfico.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) princípios da Gestalt aplicados a gráficos: proximidade, similaridade, continuidade, fechamento, figura-fundo; (b) como eles guiam a percepção visual; (c) implicações para o desenho de gráficos. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a aplicação dos princípios da Gestalt na leitura de gráficos; confundi-los muda o gabarito. PRÉ-REQUISITOS: conceitos básicos de visualização. OBJETIVOS OBSERVÁVEIS: (1) definir os cinco princípios; (2) aplicá-los a gráficos; (3) identificar violações. COMPETÊNCIAS DESENVOLVIDAS: análise visual; desenho de gráficos. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (fundamentos); unidade 8.2 (gráficos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: Gestalt como teoria da percepção que descreve como o cérebro agrupa elementos visuais; proximidade (elementos próximos são percebidos como grupo); similaridade (elementos semelhantes em cor/forma/tamanho são agrupados); continuidade (percepção de linhas contínuas); fechamento (completar formas incompletas); figura-fundo (separação entre objeto e fundo); aplicação: agrupar séries por cor, ordenar por proximidade, evitar confusão figura-fundo. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer os princípios em exemplos simples.\n- Nível intermediário: aplicar a gráficos reais.\n- Nível avançado: identificar violações e propor correção.\n- Nível especialista: auditar um painel quanto aos princípios.\nCOMPARAÇÕES CRÍTICAS:\n- proximidade x similaridade: proximidade agrupa por posição; similaridade por aparência; podem conflitar.\n- figura-fundo x continuidade: figura-fundo separa; continuidade conecta.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"cores aleatórias não afetam a leitura\" — Motivo: similaridade por cor guia o agrupamento — Versão tecnicamente correta: usar cor com propósito.\n- Afirmação errada: \"grade forte melhora a leitura\" — Motivo: compete com os dados (figura-fundo) — Versão tecnicamente correta: grade discreta.\n- Afirmação errada: \"agrupar por proximidade sempre é suficiente\" — Motivo: pode conflitar com similaridade — Versão tecnicamente correta: combinar princípios.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: proximidade, similaridade, continuidade, fechamento, figura-fundo.\n- Regras e mecanismos: a percepção agrupa por proximidade e similaridade; a continuidade conecta; o fechamento completa; figura-fundo separa.\n- Exceções: princípios podem conflitar, exigindo hierarquia visual.\n- Palavras-chave: Gestalt, proximidade, similaridade, continuidade, fechamento, figura-fundo.\n- Checklist de domínio: (1) Defino os cinco princípios? (2) Aplico a gráficos? (3) Identifico violações? (4) Proponho correção?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é proximidade? (2) O que é similaridade? (3) O que é continuidade? (4) O que é fechamento? (5) O que é figura-fundo?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Gráfico de barras mostra quatro grupos de três barras, todos colados. Como aplicar proximidade?",
                    "resposta": "Aumentar a folga ENTRE grupos e reduzir a folga DENTRO de cada grupo: o olho passa a enxergar quatro blocos (três unidades) em vez de doze barras soltas. O princípio da proximidade faz o agrupamento sem nenhuma linha adicional."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Painel mensal usa 'azul' para receita em janeiro e 'verde' para receita em março. Avalie.",
                    "resposta": "Viola a similaridade: a mesma série mudou de cor, então o leitor supõe categoria nova. A regra é cor fixa por série durante todo o painel; variação de cor deve codificar variação de significado (por exemplo, acima/abaixo da meta), nunca apenas passagem de tempo."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Na Gestalt, cores diferentes no mesmo gráfico sempre indicam grupos diferentes.'",
                    "correcao": "Errado: cores diferentes sugerem grupos diferentes APENAS quando a mudança de cor é usada como codificação. Se a ferramenta alterna cores automaticamente a cada mês ou a cada fatia sem mudança de categoria, a percepção é enganada — a cor passa a ser ruído decorativo."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O princípio da continuidade explica por que séries temporais são lidas como trajetórias que o olho completa.",
                    "resposta": "Certo. A percepção segue linhas contínuas, o que dá ao gráfico de linhas sua força de leitura de tendência."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Separar categorias usando espaço (e não molduras) aplica qual princípio da Gestalt? A) fechamento; B) proximidade; C) figura-fundo; D) contraste.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar proximidade, similaridade, continuidade, fechamento e figura-fundo ao desenho de um gráfico, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-1-topico-2",
            "titulo": "Cor, hierarquia e acessibilidade",
            "subtopicos": [
              {
                "id": "m8-u1-t2-s1",
                "titulo": "Cores, contraste e hierarquia visual",
                "objetivoAprendizagem": "Aluno selecionará paleta conforme o tipo de variável e construirá hierarquia por contraste.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) uso de cores em visualização; (b) contraste; (c) hierarquia visual; (d) acessibilidade de cores. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra o uso adequado de cores e contraste; confundir estética com acessibilidade muda o gabarito. PRÉ-REQUISITOS: conceitos básicos de visualização. OBJETIVOS OBSERVÁVEIS: (1) escolher paleta adequada; (2) garantir contraste suficiente; (3) estabelecer hierarquia visual. COMPETÊNCIAS DESENVOLVIDAS: desenho de visualização acessível. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (Gestalt); Módulo 4 (acessibilidade). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: cores devem ter função (diferenciar séries, destacar, indicar valor); paletas categóricas, sequenciais e divergentes; contraste suficiente entre texto e fundo e entre séries; hierarquia visual por tamanho, cor e posição; acessibilidade: nunca depender apenas de cor (usar redundância), evitar vermelho/verde como única distinção, testar em escala de cinza. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: usar cores com propósito e contraste suficiente.\n- Nível intermediário: escolher paleta conforme o tipo de dado.\n- Nível avançado: garantir acessibilidade (redundância, escala de cinza).\n- Nível especialista: auditar um painel quanto a cores e contraste.\nCOMPARAÇÕES CRÍTICAS:\n- paleta categórica x sequencial: a primeira diferencia categorias; a segunda mostra magnitude.\n- cor como único canal x redundância: depender só de cor exclui pessoas com deficiência de visão de cores.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"vermelho/verde é a melhor combinação\" — Motivo: é a mais problemática para daltonismo — Versão tecnicamente correta: usar redundância.\n- Afirmação errada: \"mais cores melhoram a leitura\" — Motivo: ruído visual — Versão tecnicamente correta: mínimo necessário.\n- Afirmação errada: \"contraste alto sempre é suficiente\" — Motivo: contraste resolve luminosidade, não dependência de matiz — Versão tecnicamente correta: combinar cor com rótulo/forma.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: cor, contraste, hierarquia, paleta, acessibilidade, redundância.\n- Regras e mecanismos: cor com função; contraste suficiente; nunca depender apenas de cor.\n- Exceções: em impressão preto-e-branco, usar padrões.\n- Palavras-chave: cor, contraste, hierarquia, paleta, acessibilidade, redundância.\n- Checklist de domínio: (1) Escolho paleta adequada? (2) Garanto contraste? (3) Estabeleço hierarquia? (4) Garanto acessibilidade?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual a função da cor em visualização? (2) O que é contraste suficiente? (3) Como estabelecer hierarquia visual? (4) Por que nunca depender apenas de cor? (5) Como testar acessibilidade de cores?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Variável: número de atendimentos por bairro, de 5 a 120. Que tipo de paleta usar?",
                    "resposta": "Sequencial (uma cor em degradê de luminosidade): a magnitude é contínua e ordenada, e a percepção de mais-ou-menos acompanha o escurecimento. Usar cores categóricas distintas para cada faixa de valor destruiria a ordem perceptiva e complicaria a leitura."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Mapa de desempenho contra meta: 3 unidades acima, 7 abaixo, 2 na meta. Que paleta?",
                    "resposta": "Divergente com ponto neutro na meta: uma cor para acima, outra para abaixo e neutro (cinza claro) para 'na meta'. O ponto neutro carrega a informação de referência, que é exatamente o que o leitor precisa localizar primeiro."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Paleta arco-íris é a melhor porque aproveita todas as cores disponíveis.'",
                    "correcao": "Errado. Muitas cores fortes simultâneas nivelam a hierarquia, dificultam distinguir séries parecidas e cansam a leitura. A paleta deve ser dimensionada pelo número de categorias relevantes e pela tarefa — normalmente poucas cores, bem escolhidas."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em valores que cruzam uma referência central (meta), a paleta divergente é adequada.",
                    "resposta": "Certo. Duas cores em torno de um neutro comunicam o sinal em relação à referência."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para magnitudes contínuas ordenadas, a paleta indicada é: A) categórica; B) sequencial; C) arco-íris decorativa; D) apenas preto e branco.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de selecionar paleta conforme o tipo de variável e construirá hierarquia por contraste, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m8-u1-t2-s2",
                "titulo": "Acessibilidade em visualizações",
                "objetivoAprendizagem": "Aluno produzirá gráficos legíveis por pessoas com deficiência visual e por leitores de tela.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) acessibilidade em visualizações (texto alternativo, tabela equivalente, fonte legível, navegação por teclado); (b) inclusão digital; (c) testes de acessibilidade. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra acessibilidade como requisito de visualização pública; um gráfico inacessível é informação negada. PRÉ-REQUISITOS: conceitos de acessibilidade (Módulo 4/Módulo 6). OBJETIVOS OBSERVÁVEIS: (1) listar requisitos de acessibilidade de visualização; (2) descrever texto alternativo e tabela equivalente; (3) planejar teste de acessibilidade. COMPETÊNCIAS DESENVOLVIDAS: desenho de visualização inclusiva. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (fundamentos); Módulo 6 (acessibilidade legal). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: acessibilidade como condição de que a informação chegue a todo o público; requisitos: texto alternativo (descrição com quem, o quê, quando, unidade, mensagem principal), tabela equivalente com os dados subjacentes, fonte legível sem rotação de rótulos longos, contraste suficiente, navegação por teclado, ausência de animação obrigatória, respeito a preferências de movimento; inclusão digital (conexão, equipamento, habilidade); testes: escala de cinza, leitor de tela, navegação por teclado. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer a necessidade de texto alternativo.\n- Nível intermediário: descrever os requisitos de acessibilidade de visualização.\n- Nível avançado: planejar teste de acessibilidade.\n- Nível especialista: auditar um painel quanto à acessibilidade.\nCOMPARAÇÕES CRÍTICAS:\n- acessibilidade x estética: acessibilidade é condição de uso; estética é preferência.\n- texto alternativo x tabela equivalente: o primeiro descreve; a segunda fornece os dados.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"acessibilidade é opcional em visualização\" — Motivo: é condição de uso — Versão tecnicamente correta: obrigatória.\n- Afirmação errada: \"texto alternativo genérico basta\" — Motivo: deve descrever a mensagem — Versão tecnicamente correta: descrição específica.\n- Afirmação errada: \"teste automatizado é suficiente\" — Motivo: não avalia clareza e usabilidade — Versão tecnicamente correta: combinar automático, manual e usuário.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: acessibilidade, texto alternativo, tabela equivalente, inclusão digital, teste.\n- Regras e mecanismos: todo gráfico deve ter descrição e dados subjacentes; contraste e fonte legíveis.\n- Exceções: gráficos decorativos podem ter descrição simplificada.\n- Palavras-chave: acessibilidade, texto alternativo, tabela equivalente, inclusão, teste.\n- Checklist de domínio: (1) Forneço texto alternativo? (2) Forneço tabela equivalente? (3) Garanto contraste e fonte? (4) Testo acessibilidade?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é texto alternativo em gráfico? (2) O que é tabela equivalente? (3) Quais os requisitos de acessibilidade? (4) Como testar? (5) O que é inclusão digital?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Gráfico usa vermelho = quedas e verde = altas, sem rótulos. Como tornar acessível?",
                    "resposta": "Adicionar redundância: rótulo de texto ('alta'/'queda'), seta ou padrão de preenchimento distinto, além da cor; e descrever no texto alternativo o critério. Assim, quem não distingue as matizes lê a informação pela forma ou pelo rótulo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Redigir texto alternativo para gráfico de linhas 'Atendimentos mensais da Central 1 e da Central 2, jan–jun/2026, escala de 0 a 4 mil atendimentos, com Central 1 ascendente e Central 2 estável'.",
                    "resposta": "O texto alternativo acima já é adequado: identifica o quê (atendimentos), quem (Central 1 e 2), período (jan–jun/2026), unidade (atendimentos), escala e a mensagem principal (ascensão de uma, estabilidade da outra). Acessível é isso: compreensão sem depender da visão do gráfico."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Se as cores têm bom contraste, o gráfico é acessível.'",
                    "correcao": "Errado. Contraste ajuda, mas acessibilidade exige mais: redundância além da cor, texto alternativo, dados subjacentes, legibilidade de fonte e ausência de dependência de animação. Contraste resolve luminosidade, não dependência de matiz."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Testar o gráfico convertido em escala de cinza é forma simples de detectar dependência excessiva da cor.",
                    "resposta": "Certo. Se categorias diferentes se tornam indistinguíveis em cinza, a informação não está redundante."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "O texto alternativo de um gráfico deve conter, no mínimo: A) apenas o nome do autor; B) quem, o quê, quando, unidade e mensagem principal; C) o código-fonte do painel; D) a paleta de cores usada.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de produzir gráficos legíveis por pessoas com deficiência visual e por leitores de tela, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-1-topico-3",
            "titulo": "Integridade gráfica e elementos de composição",
            "subtopicos": [
              {
                "id": "m8-u1-t3-s1",
                "titulo": "Ruído visual, chartjunk e integridade gráfica",
                "objetivoAprendizagem": "Aluno eliminará elementos decorativos e detectará distorções que violam a integridade gráfica.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) ruído visual e chartjunk; (b) integridade gráfica; (c) princípios de limpeza visual. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a identificação de chartjunk e de violações de integridade gráfica; um gráfico com ruído leva a conclusão errada. PRÉ-REQUISITOS: conceitos básicos de visualização. OBJETIVOS OBSERVÁVEIS: (1) definir ruído visual e chartjunk; (2) identificar violações de integridade; (3) propor correção. COMPETÊNCIAS DESENVOLVIDAS: auditoria visual; desenho limpo. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (fundamentos); unidade 8.2 (gráficos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: ruído visual como elementos que não transmitem informação (3D, gradientes, sombras, ícones decorativos); chartjunk como \"lixo gráfico\" que compete com os dados; integridade gráfica como proporção fiel entre valores e representação (linha de base em zero em barras, escala adequada); princípios de limpeza: remover o não essencial, destacar o dado, usar grade discreta. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: identificar elementos decorativos inúteis.\n- Nível intermediário: avaliar integridade gráfica.\n- Nível avançado: propor correção e redesenho.\n- Nível especialista: auditar um painel completo.\nCOMPARAÇÕES CRÍTICAS:\n- decoração x informação: decoração não transmite dado; informação sim.\n- 3D x 2D: 3D distorce proporções e dificulta leitura.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"efeitos 3D melhoram a visualização\" — Motivo: distorcem proporções — Versão tecnicamente correta: usar 2D.\n- Afirmação errada: \"mais elementos aumentam a credibilidade\" — Motivo: ruído prejudica — Versão tecnicamente correta: simplicidade.\n- Afirmação errada: \"grade forte ajuda a leitura\" — Motivo: compete com os dados — Versão tecnicamente correta: grade discreta.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: ruído visual, chartjunk, integridade gráfica, limpeza.\n- Regras e mecanismos: remover o não essencial; manter proporção e linha de base.\n- Exceções: anotações podem ser úteis se destacarem achados.\n- Palavras-chave: ruído, chartjunk, integridade, limpeza, proporção.\n- Checklist de domínio: (1) Identifico ruído visual? (2) Avalio integridade gráfica? (3) Proponho correção? (4) Redesenho com simplicidade?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é chartjunk? (2) O que é integridade gráfica? (3) Por que evitar 3D? (4) O que é limpeza visual? (5) Como avaliar um gráfico quanto a ruído?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Listar três elementos de chartjunk em um painel: grade a cada 10 unidades, sombra nas barras, moldura tripla ao redor.",
                    "resposta": "Grade densa (compete com as barras), sombra (decoação que altera a percepção de contorno) e moldura tripla (enquadramento sem informação). Remover os três preserva a leitura e reduz esforço — nenhum dado se perde."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Valores 70 e 80 comparados em barras com eixo iniciado em 60: qual a distorção e a correção?",
                    "resposta": "Com base em 60, as barras têm alturas 10 e 20 — parece que o segundo valor é o DOBRO do primeiro, quando 80/70 = 1,14 (apenas 14% maior). A correção é iniciar o eixo de magnitude em 0; se houver motivo legítimo para truncar, aviso explícito e valor numérico junto às barras."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Eixo truncado é sempre proibido.'",
                    "correcao": "Exagero. Em gráficos de BARRAS a comparação é de área/comprimento e o truncamento destrói a proporcionalidade — aí ele é enganoso. Em séries TEMPORAIS de valores altos e variação pequena, truncar o eixo é aceitável para revelar variação, desde que a base cortada seja sinalizada claramente."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Adicionar profundidade tridimensional a barras bidimensionais pode alterar a percepção de altura e esconder valores.",
                    "resposta": "Certo. A perspectiva distorce comprimento/área e pode ocultar barras atrás de outras."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Barra A = 70 e barra B = 80 com eixo y de 60 a 90. A leitura visual sugere que B é: A) 14% maior; B) o dobro de A; C) igual a A; D) 30% menor.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de eliminar elementos decorativos e detectará distorções que violam a integridade gráfica, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m8-u1-t3-s2",
                "titulo": "Eixos, rótulos, unidades, legendas e fontes",
                "objetivoAprendizagem": "Aluno completará um gráfico com todos os elementos de composição exigidos para leitura autônoma.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) eixos, rótulos, unidades, legendas e fontes; (b) a função de cada elemento; (c) boas práticas de composição. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a identificação de elementos ausentes ou inadequados em gráficos; um gráfico sem unidade ou fonte é ambíguo. PRÉ-REQUISITOS: conceitos básicos de visualização. OBJETIVOS OBSERVÁVEIS: (1) identificar a função de eixos, rótulos, unidades, legendas e fontes; (2) avaliar a composição de um gráfico. COMPETÊNCIAS DESENVOLVIDAS: auditoria visual; desenho de gráficos autossuficientes. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (fundamentos); unidade 8.2 (gráficos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: eixo identifica a grandeza e sua unidade; rótulo de dado mostra o valor; legenda identifica séries; fonte indica a origem dos dados e o período; composição autossuficiente: título que anuncia a mensagem, eixos com nome e unidade, rótulos quando poucos pontos, legenda próxima (ou rótulo direto), fonte e data de atualização; legenda e rótulo de eixo têm funções diferentes. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer a ausência de elementos essenciais.\n- Nível intermediário: descrever a função de cada elemento.\n- Nível avançado: avaliar a composição de um gráfico real.\n- Nível especialista: auditar um painel quanto à completude.\nCOMPARAÇÕES CRÍTICAS:\n- legenda x rótulo de eixo: legenda identifica séries; rótulo de eixo identifica a grandeza e sua unidade.\n- rótulo de dado x legenda: rótulo de dado mostra valor; legenda identifica série.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"gráfico sem fonte é aceitável\" — Motivo: sem fonte não há verificabilidade — Versão tecnicamente correta: sempre incluir fonte.\n- Afirmação errada: \"legenda substitui rótulo de eixo\" — Motivo: funções distintas — Versão tecnicamente correta: usar ambos.\n- Afirmação errada: \"rótulos longos rotacionados são legíveis\" — Motivo: dificultam leitura — Versão tecnicamente correta: usar barras horizontais.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: eixo, rótulo, unidade, legenda, fonte, composição.\n- Regras e mecanismos: gráfico autossuficiente tem título, eixos com unidade, rótulos, legenda, fonte.\n- Exceções: em painéis dinâmicos, a fonte pode estar em nota de rodapé.\n- Palavras-chave: eixo, rótulo, unidade, legenda, fonte, composição.\n- Checklist de domínio: (1) Identifico função de cada elemento? (2) Avalio composição? (3) Proponho correção? (4) Garanto autossuficiência?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual a função do eixo? (2) Qual a diferença entre legenda e rótulo de eixo? (3) Por que a fonte é essencial? (4) O que torna um gráfico autossuficiente? (5) Como resolver rótulos longos?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Reescrever o título 'Receita 2026' com mensagem.",
                    "resposta": "'Receita cresceu 8% no 1º trimestre de 2026, concentrada em duas unidades' (exemplo didático). A mensagem orienta a leitura; a variável já está no eixo. O título informativo reduz o salto cognitivo entre olhar e concluir."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Painel mostra linha com duas séries, sem legenda e sem unidade. Diagnóstico e correção mínima.",
                    "resposta": "Diagnóstico: leitura impossível de atribuir séries e de interpretar a grandeza. Correção mínima: rótulo direto ao fim de cada linha (melhor que legenda distante), nome do eixo com unidade e período de referência; acrescentar fonte da base e data de atualização."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'A legenda no canto superior resolve a ausência de rótulo de eixo.'",
                    "correcao": "Errado. A legenda identifica SÉRIES; o rótulo de eixo identifica a GRANDEZA e sua unidade. Funções diferentes: uma linha com legenda e sem unidade continua ambígua ('subiu 30%' — 30% de quê, em que unidade?)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Todo gráfico deve indicar a fonte dos dados e o período de referência.",
                    "resposta": "Certo. Sem fonte e período, o dado não é auditável nem datável."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual título é informativo? A) 'Vendas'; B) 'Indicadores'; C) 'Vendas caíram 12% no 2º trimestre'; D) 'Gráfico de barras'.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de completar um gráfico com todos os elementos de composição exigidos para leitura autônoma, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m8-u1-t3-s3",
                "titulo": "Escalas linear, logarítmica e eixos truncados",
                "objetivoAprendizagem": "Aluno escolherá e lerá escalas corretamente e justificará o uso de escala logarítmica ou eixo cortado.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) escalas linear, logarítmica e eixos truncados; (b) efeito da escolha da escala na interpretação; (c) detecção de manipulação. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a identificação de eixo truncado e de escala inadequada; uma escala errada pode inverter a conclusão. PRÉ-REQUISITOS: conceitos de gráficos e de escalas. OBJETIVOS OBSERVÁVEIS: (1) distinguir escala linear de logarítmica; (2) identificar eixo truncado; (3) avaliar o efeito da escala. COMPETÊNCIAS DESENVOLVIDAS: auditoria de gráficos; leitura crítica. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (fundamentos); unidade 8.2 (gráficos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: escala linear com intervalos iguais, adequada a variações absolutas; escala logarítmica com intervalos proporcionais, adequada a variações relativas e a dados com grande amplitude (crescimento exponencial); eixo truncado (não começando em zero) em barras distorce proporções e pode exagerar diferenças; em linhas, truncar pode ser aceitável se anotado; detecção de manipulação: verificar linha de base, escala e proporção. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer eixo truncado em barras.\n- Nível intermediário: distinguir escala linear de logarítmica.\n- Nível avançado: avaliar o efeito da escala na conclusão.\n- Nível especialista: auditar um gráfico quanto a manipulação.\nCOMPARAÇÕES CRÍTICAS:\n- escala linear x logarítmica: linear mostra variação absoluta; logarítmica mostra variação relativa.\n- eixo truncado em barras x em linhas: em barras distorce proporção; em linhas pode ser aceitável com anotação.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"truncar eixo em barras é sempre aceitável\" — Motivo: distorce proporção — Versão tecnicamente correta: barras devem começar em zero.\n- Afirmação errada: \"escala logarítmica é sempre melhor\" — Motivo: dificulta leitura de variações absolutas — Versão tecnicamente correta: escolher conforme o objetivo.\n- Afirmação errada: \"escala não afeta a conclusão\" — Motivo: pode inverter a percepção — Versão tecnicamente correta: verificar a escala antes de concluir.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: escala linear, logarítmica, eixo truncado, linha de base, proporção.\n- Regras e mecanismos: barras começam em zero; log para variações relativas; anotar truncamento.\n- Exceções: em linhas, truncar pode ser aceitável com anotação.\n- Palavras-chave: escala, linear, logarítmica, truncado, linha de base, proporção.\n- Checklist de domínio: (1) Distingo escalas? (2) Identifico eixo truncado? (3) Avalio o efeito? (4) Detecto manipulação?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quando usar escala logarítmica? (2) Por que barras devem começar em zero? (3) O que é eixo truncado? (4) Como a escala afeta a conclusão? (5) Como detectar manipulação?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Série: 10, 30, 100, 300, 1.000. Por que a escala logarítmica é mais informativa que a linear?",
                    "resposta": "Os valores cobrem duas ordens de grandeza: em linear, os três primeiros pontos ficam espremidos perto do zero e parecem 'planos', enquanto o último domina o gráfico. Em log, cada passo (multiplicação por ~3 ou por 10) aparece como distância comparável, revelando a taxa de crescimento."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Gráfico de barras 'Tempo de resposta (min)': valores 70 e 80, eixo de 60 a 90. Corrigir a leitura enganosa.",
                    "resposta": "Reiniciar o eixo em 0: a razão visual volta a ser 1,14 (= 80 ÷ 70). Se a intenção é mostrar a variação de 10 minutos, alternativa honesta é exibir o rótulo de dado (70 e 80) e o delta (+10 min) — e não alterar a base para inflar a diferença."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Em escala logarítmica, subidas de mesma altura indicam o mesmo acréscimo absoluto de valores.'",
                    "correcao": "Errado. Em escala logarítmica, altura igual significa o mesmo FATOR multiplicativo (mesmo percentual aproximado) — é exatamente isso que a escala ressalta. Acréscimo absoluto igual é lido em escala linear. O erro clássico é interpretar um gráfico log como se fosse linear e afirmar 'a diferença foi a mesma'."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Eixo truncado em gráfico de barras distorce a razão visual entre os valores.",
                    "resposta": "Certo. Por isso o eixo de magnitude em barras deve começar em zero."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Em escala logarítmica, subida visual igual corresponde a: A) mesmo acréscimo absoluto; B) mesmo fator multiplicativo; C) mesmo valor final; D) mesma mediana.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de escolher e lerá escalas corretamente e justificará o uso de escala logarítmica ou eixo cortado, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-1-topico-4",
            "titulo": "Escolha do gráfico conforme o objetivo analítico",
            "subtopicos": [
              {
                "id": "m8-u1-t4-s1",
                "titulo": "Matriz de decisão: comparar, evoluir, distribuir, relacionar, compor",
                "objetivoAprendizagem": "Aluno decidirá o tipo de gráfico a partir da tarefa analítica e justificará a recusa de gráficos inadequados.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) matriz de decisão para escolha de gráfico (comparar, evoluir, distribuir, relacionar, compor); (b) a relação entre objetivo analítico e tipo de gráfico. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a escolha do gráfico conforme o objetivo; usar o gráfico errado muda a conclusão. PRÉ-REQUISITOS: conceitos de visualização e de tipos de dado. OBJETIVOS OBSERVÁVEIS: (1) mapear objetivo a tipo de gráfico; (2) justificar a escolha. COMPETÊNCIAS DESENVOLVIDAS: escolha de visualização; análise crítica. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (fundamentos); unidade 8.2 (gráficos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: matriz de decisão: comparar (barras/colunas), evoluir (linhas), distribuir (histograma/box plot), relacionar (dispersão), compor (barras empilhadas, com cautela); a escolha depende do tipo de dado (categórico, numérico, temporal) e do objetivo; evitar gráficos inadequados (pizza com muitas categorias, 3D). PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: associar objetivo a tipo de gráfico.\n- Nível intermediário: justificar a escolha com tipo de dado.\n- Nível avançado: avaliar alternativas e trade-offs.\n- Nível especialista: auditar um painel quanto à adequação.\nCOMPARAÇÕES CRÍTICAS:\n- barras x linhas: barras comparam categorias; linhas mostram evolução temporal.\n- histograma x barras: histograma mostra distribuição de numérico; barras comparam categorias.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"pizza é sempre adequada para composição\" — Motivo: muitas fatias são ilegíveis — Versão tecnicamente correta: usar barras quando há muitas categorias.\n- Afirmação errada: \"dispersão prova causalidade\" — Motivo: associação não é causalidade — Versão tecnicamente correta: distinguir correlação de causalidade.\n- Afirmação errada: \"qualquer gráfico serve para qualquer objetivo\" — Motivo: cada tipo tem propósito — Versão tecnicamente correta: escolher conforme objetivo e dado.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: comparar, evoluir, distribuir, relacionar, compor; matriz de decisão.\n- Regras e mecanismos: mapear objetivo e tipo de dado ao gráfico adequado.\n- Exceções: em casos de poucas categorias, pizza pode ser aceitável.\n- Palavras-chave: comparar, evoluir, distribuir, relacionar, compor, matriz.\n- Checklist de domínio: (1) Mapeio objetivo a gráfico? (2) Justifico a escolha? (3) Avalio alternativas? (4) Evito gráficos inadequados?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual gráfico para comparar categorias? (2) Qual para evolução temporal? (3) Qual para distribuição? (4) Qual para relação entre duas variáveis? (5) Quando evitar pizza?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Decidir gráficos: (a) reclamações por tipo; (b) série diária de chamados em 90 dias; (c) idade de 1.000 servidores; (d) renda x escolaridade.",
                    "resposta": "(a) barras por tipo (ordenadas decrescentemente). (b) linhas (evolução diária). (c) histograma (distribuição). (d) dispersão (duas variáveis quantitativas). Cada escolha executa a tarefa analítica da pergunta."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Equipe quer mostrar que 'o número de chamados oscilou pouco'. Série: 120, 132, 115, 140 (atendimentos/mês). Que cuidado de eixo evitar?",
                    "resposta": "Evitar eixo truncado que amplifique as oscilações e contradiga o enunciado: com base em 0, a variação máxima é de 140/115 ≈ 1,22 (22% acima do menor), o que mostra oscilação moderada. Cortar a base em 110 faria as mesmas oscilações parecerem explosivas — distorção a favor da tese."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Gráfico de linhas é adequado para comparar cinco regiões do país.'",
                    "correcao": "Errado, a menos que haja ordem natural entre as regiões (não há). Linhas implicam continuidade e trajetória; para categorias sem ordem, barras agrupadas ou pequenos múltiplos. Se a intenção for comparar magnitudes, ordenar as barras resolve melhor."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Dados categóricos sem ordem natural não devem ser plotados como gráfico de linhas.",
                    "resposta": "Certo. A linha sugeriria continuidade e tendência onde só existem categorias."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para comparar a distribuição de um variável contínua entre três grupos, o mais indicado é: A) pizza; B) linhas; C) box plot (ou histogramas por grupo); D) área empilhada.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de decidir o tipo de gráfico a partir da tarefa analítica e justificará a recusa de gráficos inadequados, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-8-unidade-2",
        "titulo": "8.2 Gráficos Estatísticos",
        "topicos": [
          {
            "id": "modulo-8-unidade-2-topico-1",
            "titulo": "Histograma",
            "subtopicos": [
              {
                "id": "m8-u2-t1-s1",
                "titulo": "Histograma: construção, classes e frequências",
                "objetivoAprendizagem": "Aluno construirá histograma de um conjunto real, interpretando forma, classe modal e assimetria.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) histograma: definição, objetivo, dado adequado; (b) construção (classes, intervalos, frequências, densidade); (c) interpretação (centro, dispersão, assimetria, outliers); (d) efeito da escolha dos intervalos; (e) vantagens, limitações, quando usar/evitar, erros frequentes, pegadinhas. POR QUE O CONHECIMENTO É IMPORTANTE: o histograma é o gráfico de distribuição por excelência; a prova cobra classes, intervalos, frequências e densidade, além do efeito da escolha dos intervalos. PRÉ-REQUISITOS: conceitos de variável numérica e de distribuição. OBJETIVOS OBSERVÁVEIS: (1) construir um histograma a partir de dados; (2) interpretar centro, dispersão e assimetria; (3) explicar o efeito da escolha dos intervalos. COMPETÊNCIAS DESENVOLVIDAS: análise de distribuição; leitura crítica de gráfico. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.2 (densidade); unidade 8.3 (estatística); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: definição de histograma como representação gráfica da distribuição de uma variável numérica contínua (ou discreta com muitos valores), com barras adjacentes representando classes (intervalos); objetivo: mostrar a forma da distribuição (centro, dispersão, assimetria, multimodalidade); dado adequado: variável numérica; construção: definir número e largura das classes, contar frequências (absolutas ou relativas), desenhar barras adjacentes (sem espaços); densidade: frequência dividida pela largura da classe, de modo que a área represente a proporção; efeito da escolha dos intervalos: classes muito largas escondem detalhes; muito estreitas criam ruído; a regra de Sturges (k ≈ 1 + 3,322 log10 n) é uma referência, não uma lei. Exemplo numérico: dados de tempo de atendimento (minutos): 12,15,18,20,22,25,28,30,32,35,38,40,42,45,48,50,52,55,58,60 (n=20). Classes de 10 min: 10-20 (3), 20-30 (4), 30-40 (4), 40-50 (4), 50-60 (5). Frequências: 3,4,4,4,5. Densidade na classe 10-20: 3/10 = 0,3. A distribuição é levemente assimétrica à direita. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que histograma mostra distribuição de numérico.\n- Nível intermediário: construir classes e contar frequências.\n- Nível avançado: interpretar forma e efeito dos intervalos.\n- Nível especialista: auditar um histograma quanto à escolha de classes.\nCOMPARAÇÕES CRÍTICAS:\n- histograma x gráfico de barras: histograma tem barras adjacentes para numérico contínuo; barras têm espaços para categórico.\n- histograma x box plot: histograma mostra a forma completa; box plot resume em quartis.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"histograma e gráfico de barras são iguais\" — Motivo: diferem no tipo de dado e no espaçamento — Versão tecnicamente correta: histograma para numérico contínuo, barras adjacentes.\n- Afirmação errada: \"classes podem ser escolhidas arbitrariamente sem efeito\" — Motivo: afetam a percepção — Versão tecnicamente correta: justificar a escolha.\n- Afirmação errada: \"frequência absoluta sempre é a melhor\" — Motivo: densidade é necessária para classes de larguras diferentes — Versão tecnicamente correta: usar densidade quando as classes têm larguras diferentes.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: classe, intervalo, frequência, densidade, assimetria, Sturges.\n- Regras e fórmulas: densidade = frequência/largura da classe; área = proporção; Sturges: k ≈ 1 + 3,322 log10 n.\n- Exceções: em distribuições multimodais, classes mais estreitas podem revelar picos.\n- Palavras-chave: histograma, classe, intervalo, frequência, densidade, assimetria.\n- Checklist de domínio: (1) Construo histograma? (2) Interpreto forma? (3) Explico efeito dos intervalos? (4) Distingo de barras?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é um histograma? (2) Como se definem as classes? (3) O que é densidade? (4) Como a escolha dos intervalos afeta a interpretação? (5) Diferença entre histograma e gráfico de barras?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Com os 25 salários acima, quantas classes sugeriria Sturges e o que mudaria com 10 classes?",
                    "resposta": "k ≈ 1 + 3,322 × log10(25) ≈ 1 + 3,322 × 1,398 ≈ 5,6 — arredondando para baixo, 5 classes (a divisão usada no exemplo). Com 10 classes (largura R$ 250), a cauda direita se fatia em barras de altura 1 e 2 e a forma parece mais espiculada: o número de classes altera a aparência da mesma distribuição — por isso o parâmetro deve ser declarado."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Dois grupos de 30 e 300 indivíduos, mesma variável. Como comparar suas distribuições em histograma?",
                    "resposta": "Usar frequência relativa (ou densidade) e a MESMA largura de classe nos dois. Com frequência absoluta, o grupo de 300 dominaria a escala vertical e as formas ficariam incomparáveis; com larguras diferentes, as áreas deixam de representar a mesma grandeza."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'No histograma, a altura da barra mostra a frequência da classe — portanto, classes mais largas têm mais representatividade.'",
                    "correcao": "Com larguras IGUAIS, a altura basta. Com larguras DIFERENTES, o que representa a frequência é a ÁREA (altura = densidade = frequência ÷ largura). Ignorar isso faz classes largas parecerem mais frequentes sem o serem."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) As barras de um histograma devem ser encostadas, ao contrário do gráfico de barras categórico.",
                    "resposta": "Certo. As classes são contíguas; a folga indicaria categorias discretas e sem ordem."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Com Σfi = 25 e classes de R$ 500, a densidade da classe com fi = 9 é: A) 0,36; B) 0,018; C) 9; D) 450.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de construir histograma de um conjunto real, interpretando forma, classe modal e assimetria, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m8-u2-t1-s2",
                "titulo": "Densidade e o efeito da escolha dos intervalos",
                "objetivoAprendizagem": "Aluno calculará densidades e explicará como o número e os limites das classes alteram a leitura.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) densidade e o efeito da escolha dos intervalos; (b) histograma de densidade; (c) comparação com a curva de densidade (KDE); (d) interpretação. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a diferença entre frequência e densidade e o efeito dos intervalos; confundi-los muda o gabarito. PRÉ-REQUISITOS: histograma e distribuição. OBJETIVOS OBSERVÁVEIS: (1) explicar densidade; (2) comparar frequência e densidade; (3) avaliar o efeito dos intervalos. COMPETÊNCIAS DESENVOLVIDAS: leitura crítica de histograma. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.2 (histograma); unidade 8.3 (estatística). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média. FUNDAMENTAÇÃO CONCEITUAL: densidade como frequência relativa dividida pela largura da classe, de modo que a área da barra represente a proporção; quando as classes têm larguras iguais, frequência e densidade são proporcionais; quando as larguras diferem, apenas a densidade permite comparação correta; efeito dos intervalos: classes largas suavizam e podem esconder multimodalidade; classes estreitas revelam detalhe mas podem criar ruído; KDE (estimativa de densidade por kernel) como alternativa suavizada, com parâmetro de largura de banda (bandwidth) que controla o suavizamento. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que a área representa a proporção.\n- Nível intermediário: calcular densidade e comparar com frequência.\n- Nível avançado: avaliar o efeito dos intervalos e do bandwidth.\n- Nível especialista: escolher entre histograma e KDE.\nCOMPARAÇÕES CRÍTICAS:\n- frequência x densidade: frequência conta; densidade normaliza pela largura, permitindo classes de tamanhos diferentes.\n- histograma x KDE: histograma é discreto e depende das classes; KDE é suavizado e depende do bandwidth.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"densidade e frequência são a mesma coisa\" — Motivo: diferem quando as classes têm larguras diferentes — Versão tecnicamente correta: densidade normaliza.\n- Afirmação errada: \"KDE elimina a necessidade de escolher intervalos\" — Motivo: substitui por escolha de bandwidth — Versão tecnicamente correta: ambos exigem decisão.\n- Afirmação errada: \"classes estreitas sempre são melhores\" — Motivo: podem criar ruído — Versão tecnicamente correta: equilibrar detalhe e suavidade.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: densidade, frequência, classe, largura, KDE, bandwidth.\n- Regras e fórmulas: densidade = (frequência relativa)/largura; área = proporção.\n- Exceções: com classes de largura igual, frequência e densidade são proporcionais.\n- Palavras-chave: densidade, frequência, classe, largura, KDE, bandwidth.\n- Checklist de domínio: (1) Explico densidade? (2) Comparo com frequência? (3) Avalio efeito dos intervalos? (4) Comparo com KDE?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é densidade em um histograma? (2) Quando frequência e densidade diferem? (3) Como os intervalos afetam a interpretação? (4) O que é KDE? (5) Como escolher entre histograma e KDE?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Verificar a propriedade de área do exemplo: Σ(altura × largura).",
                    "resposta": "Alturas: 0,012 + 0,018 + 0,010 + 0,006 + 0,004 = 0,050. Multiplicando pela largura: 0,050 × 500 = 25 — igual a n = 25 registros. A propriedade confirma que as densidades foram calculadas corretamente."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Mudando de 5 para 12 classes, a distribuição passou a 'parecer' três picos. O que concluir?",
                    "resposta": "Nada definitivo sobre picos: com 12 classes de largura menor, flutuações de amostragem ganham barra própria e simulam modas. Conclusão responsável: testar estabilidade — se os picos persistem em intervalações razoáveis e fazem sentido de negócio, há indício; se desaparecem, era ruído de intervalação."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Existem as classes corretas, independentes do analista.'",
                    "correcao": "Errado. Não existe intervalação única: o parâmetro é uma escolha (com regras de apoio como Sturges) e ela afet a leitura. Por isso boas práticas exigem declarar número, largura e limites das classes — e permitir ao leitor julgar a escolha."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em histograma de densidade, a soma das áreas dos retângulos equivale ao total de observações.",
                    "resposta": "Certo (densidade absoluta). Com densidade relativa, a soma das áreas equivale a 1."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Com larguras de classe diferentes, a altura correta de cada retângulo é: A) frequência absoluta; B) frequência relativa; C) densidade (frequência ÷ largura); D) média da classe.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de calcular densidades e explicará como o número e os limites das classes alteram a leitura, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-2-topico-2",
            "titulo": "Gráfico de linhas",
            "subtopicos": [
              {
                "id": "m8-u2-t2-s1",
                "titulo": "Linhas: ordenação temporal, continuidade e tendências",
                "objetivoAprendizagem": "Aluno construirá e interpretará série temporal, calculando variações absolutas e percentuais.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) gráfico de linhas: definição, objetivo, dado adequado; (b) ordenação temporal e continuidade; (c) interpretação de tendências; (d) vantagens, limitações, erros frequentes, pegadinhas. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a interpretação de tendência e a distinção entre linha e barra; confundi-las muda o gabarito. PRÉ-REQUISITOS: conceitos de séries temporais. OBJETIVOS OBSERVÁVEIS: (1) construir um gráfico de linhas; (2) interpretar tendência e sazonalidade; (3) identificar erros comuns. COMPETÊNCIAS DESENVOLVIDAS: análise temporal; leitura de tendência. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (fundamentos); unidade 8.3 (estatística). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: definição de gráfico de linhas como representação de valores ordenados ao longo de um eixo contínuo (geralmente tempo), com pontos conectados por segmentos; objetivo: mostrar evolução, tendência e sazonalidade; dado adequado: variável numérica ao longo de tempo (ou de outra variável ordenada); ordenação temporal: o eixo X deve estar ordenado cronologicamente; continuidade: a linha implica continuidade entre pontos, o que pode ser enganoso se houver lacunas; interpretação: tendência (crescimento/decrescimento), sazonalidade (padrão repetitivo), ruptura (mudança abrupta). Exemplo numérico: atendimentos mensais de janeiro a junho: 120,135,128,142,150,160. A tendência é de crescimento; há leve queda em março. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que linha mostra evolução temporal.\n- Nível intermediário: ordenar e interpretar tendência.\n- Nível avançado: identificar sazonalidade e rupturas.\n- Nível especialista: auditar um gráfico de linhas quanto a continuidade e escala.\nCOMPARAÇÕES CRÍTICAS:\n- linhas x barras: linhas para evolução contínua; barras para comparação de categorias discretas.\n- tendência x causalidade: tendência descreve; não prova causa.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"linhas servem para qualquer categoria\" — Motivo: exigem ordem natural — Versão tecnicamente correta: usar barras para categorias sem ordem.\n- Afirmação errada: \"lacuna nos dados pode ser ignorada\" — Motivo: a linha implica continuidade — Versão tecnicamente correta: marcar ou interromper a linha.\n- Afirmação errada: \"tendência garante previsão\" — Motivo: não considera mudanças de contexto — Versão tecnicamente correta: tendência é descritiva.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: linha, tendência, sazonalidade, ruptura, continuidade, ordenação.\n- Regras e mecanismos: eixo X ordenado; linha implica continuidade; anotar lacunas.\n- Exceções: múltiplas séries exigem legenda clara e poucas linhas.\n- Palavras-chave: linha, tendência, sazonalidade, ruptura, continuidade.\n- Checklist de domínio: (1) Construo gráfico de linhas? (2) Interpreto tendência? (3) Identifico sazonalidade? (4) Avalio continuidade?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é um gráfico de linhas? (2) Quando usar linhas em vez de barras? (3) O que é tendência? (4) O que é sazonalidade? (5) Como lidar com lacunas nos dados?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular a variação percentual de março para abril na série 120, 132, 115, 140.",
                    "resposta": "(140 − 115) ÷ 115 × 100 = 25 ÷ 115 × 100 ≈ +21,74%. Atenção ao denominador: a variação percentual é sempre referida ao valor ANTERIOR; usar 140 como base daria outro número (17,86%) e não responde à pergunta."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Série trimestral tem lacuna em 2024T2 (sem coleta). Como representar?",
                    "resposta": "Quebrar a linha (não conectar diretamente) e sinalizar a lacuna — conectar criaria a ilusão de continuidade e de valores intermediários inexistentes. Alternativa legítima: exibir 'sem dado' e, se útil, mostrar a série com e sem estimativa, identificando o que é estimativa."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'A reta de tendência demonstra o crescimento futuro do indicador.'",
                    "correcao": "Errado. A reta resume a direção passada dos pontos (ajuste de mínimos quadrados); projetá-la é extrapolação, válida apenas sob suposição de que o padrão continua — suposição raramente garantida e que deve ser declarada como cenário, não como previsão."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Antes de plotar linhas, os dados devem ser ordenados pelo eixo temporal, e não pelo valor.",
                    "resposta": "Certo. Ordenar por valor destrói a dimensão temporal e fabrica tendência."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Série 120 → 132. A variação percentual é: A) 12%; B) 10%; C) 90,9%; D) 132%.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de construir e interpretará série temporal, calculando variações absolutas e percentuais, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-2-topico-3",
            "titulo": "Barras e colunas",
            "subtopicos": [
              {
                "id": "m8-u2-t3-s1",
                "titulo": "Barras e colunas: ordenação, comparação e linha de base",
                "objetivoAprendizagem": "Aluno construirá barras ordenadas com linha de base correta e detectará escalas enganosas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) gráfico de barras/colunas: definição, objetivo, dado adequado; (b) ordenação, comparação, linha de base; (c) risco de escalas enganosas; (d) vantagens, limitações, erros, pegadinhas. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra linha de base em zero e ordenação; um eixo truncado em barras distorce a conclusão. PRÉ-REQUISITOS: conceitos de categorias e de proporção. OBJETIVOS OBSERVÁVEIS: (1) construir gráfico de barras; (2) ordenar adequadamente; (3) avaliar linha de base e escala. COMPETÊNCIAS DESENVOLVIDAS: análise comparativa; auditoria visual. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.1 (fundamentos); unidade 8.3 (estatística). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: definição de gráfico de barras/colunas como comparação de valores por categoria, com comprimento (barra horizontal) ou altura (coluna vertical) proporcional ao valor; objetivo: comparar categorias; dado adequado: variável categórica com valor numérico; ordenação: decrescente para ranking, respeitando ordem própria quando existir (tempo, escala); linha de base em zero, porque a comparação é de comprimento/área e só é proporcional a partir da origem; risco de escalas enganosas: truncar o eixo em barras exagera diferenças. Exemplo numérico: atendimentos por canal: presencial 320, telefone 280, chat 210, e-mail 150. Barras ordenadas decrescentemente evidenciam o ranking; se o eixo começar em 100, a diferença aparente entre presencial e telefone será exagerada. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que comprimento representa valor.\n- Nível intermediário: ordenar e avaliar linha de base.\n- Nível avançado: detectar escala enganosa.\n- Nível especialista: auditar um painel de barras.\nCOMPARAÇÕES CRÍTICAS:\n- barras x colunas: barras horizontais para rótulos longos; colunas verticais para séries temporais curtas.\n- barras x pizza: barras para muitas categorias; pizza apenas para poucas.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"barras podem começar em valor diferente de zero\" — Motivo: distorce proporção — Versão tecnicamente correta: linha de base em zero.\n- Afirmação errada: \"ordenação não afeta a leitura\" — Motivo: afeta a percepção de ranking — Versão tecnicamente correta: ordenar conforme o objetivo.\n- Afirmação errada: \"pizza é sempre melhor para composição\" — Motivo: muitas fatias são ilegíveis — Versão tecnicamente correta: usar barras empilhadas ou 100% quando apropriado.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: barra, coluna, ordenação, linha de base, escala, ranking.\n- Regras e mecanismos: linha de base em zero; ordenação decrescente para ranking.\n- Exceções: barras horizontais para rótulos longos.\n- Palavras-chave: barra, coluna, ordenação, linha de base, escala, ranking.\n- Checklist de domínio: (1) Construo gráfico de barras? (2) Ordeno adequadamente? (3) Avalio linha de base? (4) Detecto escala enganosa?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Por que barras devem começar em zero? (2) Como ordenar barras? (3) Quando usar barras horizontais? (4) O que é escala enganosa? (5) Quando evitar pizza?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Verificar a soma das participações: 36,3% + 25,8% + 22,6% + 15,3%.",
                    "resposta": "Soma = 100,0% — coerente, porque todas as participações usam o mesmo denominador (1.240). Se cada percentual fosse calculado contra o total da própria unidade (100% para todas), a soma não significaria nada."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Comparar 40 e 80 com barras partindo de 70. Qual leitura visual e qual correção?",
                    "resposta": "Com base 70, as alturas são 0 e 10: a segunda barra parece 'infinitamente' maior, enquanto a razão real é 80 ÷ 40 = 2 (dobro). Correção: base em 0. Caso o eixo precise ser cortado por legítima necessidade de detalhe, isso só é aceitável em linhas; em barras, a alternativa honesta é rótulo de dado e destaque de variação."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Barras empilhadas são ideais para comparar a evolução de seis séries ao longo de doze meses.'",
                    "correcao": "Errado. Empilhar seis séries obriga o leitor a comparar faixas do meio sem linha de base comum — a comparação fica impossível. Para muitas séries, pequenos múltiplos (uma linha/coluna por série) ou linhas são superiores."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em gráfico de barras, o eixo de valores deve começar em zero para preservar a proporcionalidade visual.",
                    "resposta": "Certo. A leitura é de comprimento/área comparados a uma linha de base comum."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Unidade A = 450 e unidade D = 190. A razão correta A/D é aproximadamente: A) 2,4; B) 0,42; C) 260; D) 1,4.",
                    "resposta": "A"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de construir barras ordenadas com linha de base correta e detectará escalas enganosas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-2-topico-4",
            "titulo": "Gráfico de dispersão",
            "subtopicos": [
              {
                "id": "m8-u2-t4-s1",
                "titulo": "Dispersão: associação, correlação e outliers",
                "objetivoAprendizagem": "Aluno lerá dispersão calculando r de Pearson e reta de regressão, e distinguirá correlação de causalidade.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) gráfico de dispersão: definição, objetivo, dado adequado; (b) associação, correlação, outliers; (c) variáveis ocultas; (d) diferença entre correlação e causalidade; (e) vantagens, limitações, erros, pegadinhas. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a interpretação de associação e a distinção entre correlação e causalidade; confundi-las muda o gabarito. PRÉ-REQUISITOS: conceitos de duas variáveis numéricas. OBJETIVOS OBSERVÁVEIS: (1) construir gráfico de dispersão; (2) interpretar associação; (3) distinguir correlação de causalidade. COMPETÊNCIAS DESENVOLVIDAS: análise bivariada; leitura crítica. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.3 (correlação); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: definição de gráfico de dispersão como representação de pares de valores de duas variáveis numéricas, com pontos no plano cartesiano; objetivo: revelar associação (linear, não linear, ausente), outliers e agrupamentos; dado adequado: duas variáveis numéricas; associação: direção (positiva/negativa) e força; correlação: medida numérica da associação linear (Pearson); outliers: pontos que se afastam do padrão, que podem ser erros ou casos legítimos; variáveis ocultas (confundidores): uma terceira variável pode explicar a associação aparente; correlação não implica causalidade: associação não prova causa-efeito. Exemplo numérico: variável X (horas de estudo) e Y (nota): pontos (2,5),(4,6),(6,7),(8,8),(10,9). Associação positiva forte; correlação de Pearson alta; mas uma variável oculta (motivação) pode influenciar ambas. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que dispersão mostra relação entre duas variáveis.\n- Nível intermediário: interpretar direção e força da associação.\n- Nível avançado: identificar outliers e variáveis ocultas.\n- Nível especialista: distinguir correlação de causalidade e auditar conclusões.\nCOMPARAÇÕES CRÍTICAS:\n- correlação x causalidade: correlação mede associação; causalidade exige desenho experimental ou evidência.\n- outlier legítimo x erro: outlier pode ser caso real ou erro de medição.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"correlação alta prova causalidade\" — Motivo: associação não é causalidade — Versão tecnicamente correta: distinguir os dois.\n- Afirmação errada: \"outlier deve sempre ser removido\" — Motivo: pode ser caso legítimo — Versão tecnicamente correta: investigar antes de remover.\n- Afirmação errada: \"dispersão só serve para variáveis lineares\" — Motivo: revela padrões não lineares também — Versão tecnicamente correta: usar para explorar qualquer relação.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: dispersão, associação, correlação, outlier, variável oculta, causalidade.\n- Regras e mecanismos: pontos no plano cartesiano; correlação mede associação linear.\n- Exceções: associação não linear exige outras medidas (Spearman).\n- Palavras-chave: dispersão, associação, correlação, outlier, confundidor, causalidade.\n- Checklist de domínio: (1) Construo dispersão? (2) Interpreto associação? (3) Identifico outliers? (4) Distingo correlação de causalidade?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é um gráfico de dispersão? (2) Como interpretar associação? (3) O que é correlação? (4) O que são variáveis ocultas? (5) Por que correlação não implica causalidade?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular r para Σ(x−x̄)(y−ȳ) = 15, Σ(x−x̄)² = 10, Σ(y−ȳ)² = 22,8.",
                    "resposta": "r = 15 ÷ √(10 × 22,8) = 15 ÷ √228 ≈ 15 ÷ 15,10 ≈ 0,993. Interpretação: associação linear positiva muito forte — os cinco pontos estão quase sobre a reta ŷ = 0,3 + 1,5x."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Estudo mostra r = 0,8 entre horas de estudo e pontuação. Afirmação: 'cada hora extra causa +80 pontos'. Corrija.",
                    "resposta": "A afirmação troca associação por causalidade e ainda inventa unidade de efeito: r não informa causalidade nem quanto de Y muda por unidade de X. O que se pode dizer: há associação positiva forte; para estimar efeito, usar a inclinação da reta (com suas unidades), discutir variáveis confundentes (disciplina, renda, saúde) e lembrar que predição não é intervenção."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'r = 0,95 significa que X explica 95% de Y.'",
                    "correcao": "Errado. r = 0,95 mede a FORÇA da associação linear. O coeficiente de determinação (r²) é 0,9025, ou seja, cerca de 90% da variabilidade de Y está linearmente associada a X — e ainda assim sem implicar causalidade nem garantir predição fora da amostra."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Correlação forte entre duas variáveis demonstra que uma causa a outra.",
                    "resposta": "Errado. Correlação é associação; causalidade exige delineamento (experimento, controle de confundentes) e argumento."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Uma variável oculta (temperatura) explica consumo de sorvete e afogamentos. O caso ilustra: A) causalidade direta; B) correlação com confundimento; C) multicolinearidade perfeita; D) erro de tipo.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de ler dispersão calculando r de Pearson e reta de regressão, e distinguirá correlação de causalidade, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-2-topico-5",
            "titulo": "Box plot",
            "subtopicos": [
              {
                "id": "m8-u2-t5-s1",
                "titulo": "Box plot: quartis, intervalo interquartílico, bigodes e outliers",
                "objetivoAprendizagem": "Aluno calculará o box plot de um conjunto, identificando quartis, IIQ, bigodes e outliers pela convenção de Tukey.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) box plot: mediana, quartis, IQR, bigodes, outliers; (b) convenções de outliers; (c) diferenças entre implementações; (d) vantagens, limitações, erros, pegadinhas. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra o cálculo de Q1, mediana, Q3, IQR e bigodes; confundir convenções muda o gabarito. PRÉ-REQUISITOS: conceitos de quartis e mediana. OBJETIVOS OBSERVÁVEIS: (1) calcular Q1, mediana, Q3, IQR e bigodes; (2) identificar outliers; (3) explicar diferenças entre implementações. COMPETÊNCIAS DESENVOLVIDAS: análise de distribuição; leitura de box plot. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.3 (quartis); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: box plot (diagrama de caixa) resume a distribuição por cinco números: mínimo, Q1, mediana, Q3, máximo (ou bigodes); mediana como valor central; quartis Q1 (25%) e Q3 (75%); IQR = Q3 - Q1; bigodes: geralmente até 1,5·IQR a partir dos quartis; outliers: pontos fora dos bigodes; convenções: Tukey (1,5·IQR), outros usam 3·IQR ou percentis; diferenças entre implementações (Excel, R, Python) nos métodos de cálculo de quartis (interpolação linear, método exclusivo/inclusivo). Exemplo numérico: dados ordenados: 2,4,5,7,8,10,12,14,15,18,20,22,25,30,100. n=15. Mediana = 8º valor = 14. Q1 = mediana da metade inferior (2,4,5,7,8,10,12) = 7. Q3 = mediana da metade superior (15,18,20,22,25,30,100) = 22. IQR = 22-7 = 15. Bigode inferior = max(2, 7-1,5·15) = max(2, -15,5) = 2 (ou 7-22,5=-15,5, então mínimo não outlier é 2). Bigode superior = min(100, 22+22,5) = 30 (100 é outlier). Outlier: 100. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender os cinco números.\n- Nível intermediário: calcular Q1, mediana, Q3, IQR e bigodes.\n- Nível avançado: identificar outliers e explicar convenções.\n- Nível especialista: comparar implementações e auditar.\nCOMPARAÇÕES CRÍTICAS:\n- box plot x histograma: box plot resume em quartis; histograma mostra a forma completa.\n- média x mediana: a mediana é robusta a outliers; a média não.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"outliers são sempre erros\" — Motivo: podem ser casos legítimos — Versão tecnicamente correta: investigar.\n- Afirmação errada: \"todos os softwares calculam quartis igual\" — Motivo: métodos diferem — Versão tecnicamente correta: verificar a implementação.\n- Afirmação errada: \"box plot mostra a média\" — Motivo: mostra a mediana — Versão tecnicamente correta: mediana, não média.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: mediana, Q1, Q3, IQR, bigode, outlier, convenção.\n- Regras e fórmulas: IQR = Q3 - Q1; bigodes = Q1 - 1,5·IQR e Q3 + 1,5·IQR (Tukey).\n- Exceções: implementações diferem no cálculo de quartis.\n- Palavras-chave: box plot, mediana, quartil, IQR, bigode, outlier.\n- Checklist de domínio: (1) Calculo Q1, mediana, Q3, IQR? (2) Determino bigodes e outliers? (3) Explico convenções? (4) Comparo implementações?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é um box plot? (2) Como se calcula o IQR? (3) Como se determinam os bigodes? (4) O que é um outlier? (5) Por que implementações diferem?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Confirmar o cálculo dos quartis de 2, 4, 6, 8, 10, 12, 50 por interpolação linear.",
                    "resposta": "Com n = 7, a posição de Q1 em percentil 25 é (7−1)×0,25 + 1 = 2,5 → Q1 = 4 + 0,5×(6−4) = 5. Mediana: posição 4 → 8. Q3: (7−1)×0,75 + 1 = 5,5 → Q3 = 10 + 0,5×(12−10) = 11. IIQ = 6; limites −4 e 20; outlier 50."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Dois grupos com mesma mediana (80) e IIQs 10 e 40. O que isso comunica?",
                    "resposta": "A tendência central é igual, mas a dispersão central difere quatro vezes: no grupo 2, metade dos dados está espalhada em um intervalo muito maior (40 unidades contra 10). Quem lê só a mediana ignora essa diferença — por isso o box plot é informativo em comparações de grupos."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Todos os softwares calculam os mesmos quartis para o mesmo conjunto.'",
                    "correcao": "Errado. Os métodos de posicionamento de percentis diferem (interpolação tipo 7, tipo 6, arredondamento), e as convenções de bigode também. Conjuntos pequenos amplificam as diferenças. Boas práticas: declarar método e convenção ao divulgar o gráfico."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O intervalo interquartílico corresponde a Q3 − Q1 e mede a dispersão da metade central dos dados.",
                    "resposta": "Certo. É a definição de IIQ — e não a amplitude total (máximo − mínimo)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Conjunto 2, 4, 6, 8, 10, 12, 50 (IIQ = 6, convenção 1,5×IIQ). O outlier é: A) 12; B) 50; C) 20; D) nenhum.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de calcular o box plot de um conjunto, identificando quartis, IIQ, bigodes e outliers pela convenção de Tukey, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-8-unidade-3",
        "titulo": "8.3 Estatística Aplicada à Leitura de Gráficos",
        "topicos": [
          {
            "id": "modulo-8-unidade-3-topico-1",
            "titulo": "Medidas de tendência central",
            "subtopicos": [
              {
                "id": "m8-u3-t1-s1",
                "titulo": "Média, mediana e moda — quando usar cada uma",
                "objetivoAprendizagem": "Aluno calculará média, mediana e moda e decidirá qual delas descreve melhor um conjunto.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) média, mediana e moda; (b) quando usar cada uma; (c) sensibilidade a outliers; (d) assimetria. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a escolha da medida de tendência central conforme a distribuição; confundi-las muda o gabarito. PRÉ-REQUISITOS: conceitos básicos de estatística. OBJETIVOS OBSERVÁVEIS: (1) calcular média, mediana e moda; (2) escolher a medida adequada; (3) interpretar assimetria. COMPETÊNCIAS DESENVOLVIDAS: análise descritiva; leitura de distribuição. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.2 (gráficos); unidade 8.3 (dispersão). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: média como soma dividida por n, sensível a outliers; mediana como valor central da série ordenada, robusta a outliers; moda como valor mais frequente; escolha: distribuição simétrica → média; assimétrica ou com outliers → mediana; categórica → moda; assimetria: positiva (cauda à direita, média > mediana), negativa (cauda à esquerda, média < mediana). Exemplo numérico: dados 10,12,14,16,100. Média = 152/5 = 30,4 (inflada pelo outlier); mediana = 14; moda não existe. A mediana representa melhor o centro. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: calcular média, mediana e moda.\n- Nível intermediário: escolher a medida conforme a distribuição.\n- Nível avançado: interpretar assimetria e efeito de outliers.\n- Nível especialista: auditar um relatório quanto à medida usada.\nCOMPARAÇÕES CRÍTICAS:\n- média x mediana: média sensível a outliers; mediana robusta.\n- mediana x moda: mediana para numérico; moda para categórico.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"média é sempre a melhor medida\" — Motivo: sensível a outliers — Versão tecnicamente correta: usar mediana em distribuições assimétricas.\n- Afirmação errada: \"moda só existe para números\" — Motivo: é a mais útil para categorias — Versão tecnicamente correta: moda para categórico.\n- Afirmação errada: \"assimetria não afeta a escolha\" — Motivo: define qual medida é adequada — Versão tecnicamente correta: avaliar a distribuição.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: média, mediana, moda, assimetria, outlier, robustez.\n- Regras e fórmulas: média = Σx/n; mediana = valor central; moda = mais frequente.\n- Exceções: distribuição bimodal tem duas modas.\n- Palavras-chave: média, mediana, moda, assimetria, outlier, robustez.\n- Checklist de domínio: (1) Calculo as três medidas? (2) Escolho a adequada? (3) Interpreto assimetria? (4) Identifico efeito de outliers?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como se calcula a média? (2) Como se calcula a mediana? (3) Quando usar moda? (4) Como a assimetria afeta a escolha? (5) Por que a média é sensível a outliers?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Nos dados 2, 4, 6, 8, 10, 12, 50, qual medida representa melhor o caso típico?",
                    "resposta": "A mediana (8). A média (≈13,14) está distante do valor central porque o 50, isolado na cauda, a arrasta. Para descrever o 'valor usual', a mediana é a medida correta."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Notas 7 (peso 2), 5 (peso 3), 9 (peso 1). Calcular a média ponderada.",
                    "resposta": "Σ(valor × peso) = 7×2 + 5×3 + 9×1 = 14 + 15 + 9 = 38; Σpesos = 6; média = 38 ÷ 6 ≈ 6,33. A média simples (7+5+9)/3 = 7,0 ignoraria os pesos e superestimaria o resultado."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'A média é sempre a melhor medida porque usa todos os dados.'",
                    "correcao": "Errado. Usar todos os dados também significa dar peso total aos extremos; em distribuições assimétricas ou com erros de digitação, a média mente sobre o caso típico. A escolha depende da forma da distribuição e do que se quer descrever."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A mediana é mais robusta que a média diante de valores extremos.",
                    "resposta": "Certo. A mediana depende apenas da ordem; mover o maior valor de 50 para 5.000 não a altera."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Conjunto 2, 4, 4, 4, 5, 5, 7, 9: média, mediana e moda são, respectivamente: A) 5, 4,5 e 4; B) 5, 5 e 5; C) 4,5, 4 e 5; D) 5, 4 e 4,5.",
                    "resposta": "A"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de calcular média, mediana e moda e decidirá qual delas descreve melhor um conjunto, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-3-topico-2",
            "titulo": "Medidas de dispersão: amplitude, variância e desvio padrão",
            "subtopicos": [
              {
                "id": "m8-u3-t2-s1",
                "titulo": "Amplitude, variância, desvio padrão e coeficiente de variação",
                "objetivoAprendizagem": "Aluno calculará variância e desvio padrão (populacional e amostral) e interpretará o resultado em unidade original.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) amplitude, variância, desvio padrão e coeficiente de variação; (b) cálculo e interpretação; (c) comparação de dispersão. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra cálculo de variância, desvio padrão e coeficiente de variação; confundi-los muda o gabarito. PRÉ-REQUISITOS: conceitos de média. OBJETIVOS OBSERVÁVEIS: (1) calcular amplitude, variância, desvio padrão e CV; (2) interpretar dispersão; (3) comparar dispersão entre séries. COMPETÊNCIAS DESENVOLVIDAS: análise de dispersão; comparação de séries. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.3 (média); unidade 8.2 (box plot). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: amplitude = máximo - mínimo, sensível a outliers; variância = média dos quadrados dos desvios em relação à média; desvio padrão = raiz quadrada da variância, nas unidades originais; coeficiente de variação = desvio padrão/média, adimensional, útil para comparar dispersão entre séries com médias diferentes; interpretação: desvio padrão alto = dados mais dispersos. Exemplo numérico: dados 10,12,14,16,18. Média = 14. Desvios: -4,-2,0,2,4. Quadrados: 16,4,0,4,16. Soma = 40. Variância (populacional) = 40/5 = 8. Desvio padrão = √8 ≈ 2,83. Amplitude = 8. CV = 2,83/14 ≈ 0,20 (20%). PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender dispersão como \"quão espalhados estão os dados\".\n- Nível intermediário: calcular variância e desvio padrão.\n- Nível avançado: calcular CV e comparar séries.\n- Nível especialista: auditar um relatório quanto à medida de dispersão.\nCOMPARAÇÕES CRÍTICAS:\n- variância x desvio padrão: variância em unidades quadradas; desvio padrão nas unidades originais.\n- desvio padrão x CV: desvio padrão absoluto; CV relativo, permite comparar séries com médias diferentes.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"variância e desvio padrão são equivalentes em interpretação\" — Motivo: unidades diferem — Versão tecnicamente correta: desvio padrão nas unidades originais.\n- Afirmação errada: \"amplitude é robusta a outliers\" — Motivo: depende do mínimo e máximo — Versão tecnicamente correta: usar desvio padrão ou IQR.\n- Afirmação errada: \"CV pode ser usado com média zero\" — Motivo: divisão por zero — Versão tecnicamente correta: CV exige média não nula.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: amplitude, variância, desvio padrão, CV, dispersão.\n- Regras e fórmulas: amplitude = max-min; variância = Σ(x-x̄)²/n; desvio padrão = √variância; CV = σ/x̄.\n- Exceções: variância amostral divide por n-1.\n- Palavras-chave: amplitude, variância, desvio padrão, CV, dispersão.\n- Checklist de domínio: (1) Calculo amplitude, variância, desvio padrão, CV? (2) Interpreto dispersão? (3) Comparo séries? (4) Distingo populacional de amostral?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como se calcula a variância? (2) Qual a relação entre variância e desvio padrão? (3) Para que serve o CV? (4) Por que a amplitude é sensível a outliers? (5) Quando usar n e quando n-1?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular desvio padrão populacional de 2, 4, 4, 4, 5, 5, 7, 9.",
                    "resposta": "Média = 5. Σ(x − x̄)² = 32. σ² = 32 ÷ 8 = 4 → σ = √4 = 2,0. Em unidade original, os valores ficam tipicamente a 2 unidades da média."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Agora o mesmo conjunto tratado como amostra: variância e desvio padrão amostrais.",
                    "resposta": "s² = 32 ÷ (8 − 1) = 32 ÷ 7 ≈ 4,5714; s = √4,5714 ≈ 2,1381. O divisor n−1 produz valor maior que o populacional — correção esperada quando a média usada é a amostral."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Dois conjuntos com média 50 e desvio-padrão 5 têm a mesma variabilidade, independentemente da unidade.'",
                    "correcao": "Errado se as unidades diferem: desvio-padrão herda a unidade do dado (5 minutos ≠ 5 kg). Para comparar dispersão entre variáveis com unidades ou médias muito distintas, use o coeficiente de variação (desvio ÷ média)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Para variância amostral, o divisor correto é n − 1, e não n.",
                    "resposta": "Certo. É a correção que torna a estimativa amostral não-enviesada da variância populacional."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Com Σ(x − x̄)² = 32 e n = 8 (dados como população), σ é: A) 2,0; B) 2,14; C) 4,0; D) 4,57.",
                    "resposta": "A"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de calcular variância e desvio padrão (populacional e amostral) e interpretará o resultado em unidade original, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-3-topico-3",
            "titulo": "Quartis e percentis",
            "subtopicos": [
              {
                "id": "m8-u3-t3-s1",
                "titulo": "Quartis, percentis e o método de posicionamento",
                "objetivoAprendizagem": "Aluno calculará percentis por interpolação linear e interpretará cortes percentílicos corretamente.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) quartis e percentis; (b) método de posicionamento; (c) cálculo e interpretação. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra o cálculo de quartis e percentis; diferentes métodos de posicionamento podem mudar o resultado. PRÉ-REQUISITOS: conceitos de ordenação e de mediana. OBJETIVOS OBSERVÁVEIS: (1) calcular quartis e percentis; (2) explicar o método de posicionamento; (3) interpretar. COMPETÊNCIAS DESENVOLVIDAS: análise de posição; leitura de distribuição. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.2 (box plot); unidade 8.3 (média). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: quartis como valores que dividem a série ordenada em quatro partes iguais (Q1=25%, Q2=50%=mediana, Q3=75%); percentis como generalização (P_k = k%); método de posicionamento: calcular a posição i = k·(n+1)/100 (ou k·n/100) e interpolar linearmente entre os valores adjacentes; diferenças entre métodos (exclusivo/inclusivo, interpolação) podem produzir resultados ligeiramente diferentes; interpretação: Q1 é o valor abaixo do qual estão 25% dos dados. Exemplo numérico: série ordenada de 9 valores: 2,4,6,8,10,12,14,16,18. Mediana (Q2) = 5º valor = 10. Q1: posição = 0,25·(9+1) = 2,5 → entre 2º (4) e 3º (6): 4 + 0,5·(6-4) = 5. Q3: posição = 0,75·10 = 7,5 → entre 7º (14) e 8º (16): 14 + 0,5·(16-14) = 15. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender quartis como divisão em quatro partes.\n- Nível intermediário: calcular Q1, Q2, Q3 por posicionamento.\n- Nível avançado: calcular percentis e interpolar.\n- Nível especialista: comparar métodos e auditar resultados.\nCOMPARAÇÕES CRÍTICAS:\n- quartis x percentis: quartis são casos especiais de percentis (25, 50, 75).\n- método exclusivo x inclusivo: diferem no tratamento da mediana na divisão.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"quartis são sempre os valores da série\" — Motivo: podem exigir interpolação — Versão tecnicamente correta: usar o método de posicionamento.\n- Afirmação errada: \"todos os softwares calculam quartis igual\" — Motivo: métodos diferem — Versão tecnicamente correta: verificar a implementação.\n- Afirmação errada: \"percentil 50 é diferente da mediana\" — Motivo: são o mesmo valor — Versão tecnicamente correta: P50 = mediana.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: quartil, percentil, posicionamento, interpolação, Q1, Q2, Q3.\n- Regras e fórmulas: posição = k·(n+1)/100; interpolação linear entre adjacentes.\n- Exceções: métodos diferem (exclusivo/inclusivo).\n- Palavras-chave: quartil, percentil, posicionamento, interpolação.\n- Checklist de domínio: (1) Calculo quartis? (2) Calculo percentis? (3) Explico posicionamento? (4) Comparo métodos?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é um quartil? (2) Como se calcula Q1? (3) O que é um percentil? (4) Como funciona a interpolação? (5) Por que métodos diferem?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular a mediana de 12, 18, 21, 25, 27, 30, 33, 38, 44, 60.",
                    "resposta": "n = 10 (par): a mediana é a média dos dois centrais ordenados (5º e 6º): (27 + 30) ÷ 2 = 28,5 — igual ao P50 obtido por interpolação (posição 5,5)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Interpretar Q1 = 22 e Q3 = 36,75 do conjunto acima.",
                    "resposta": "Um quarto dos valores está até 22; três quartis até 36,75; portanto a metade central ocupa 22–36,75, com IIQ de 14,75. Metade dos dados está concentrada nesse intervalo de 14,75 unidades — leitura que a média sozinha não daria."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'P90 = 45,6 significa que 90% dos indivíduos valem 45,6.'",
                    "correcao": "Errado. Percentil é CORTE, não valor frequente: 90% dos valores estão ABAIXO (ou até) 45,6, e os 10% restantes estão acima. Confundir corte percentílico com valor da maioria é erro clássico de interpretação."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O IIQ corresponde a Q3 − Q1 e mede a dispersão da metade central dos dados.",
                    "resposta": "Certo: 36,75 − 22 = 14,75 no exemplo trabalhado."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Nos dados 12, 18, 21, 25, 27, 30, 33, 38, 44, 60 (interpolação linear), Q1 é: A) 18; B) 21; C) 22; D) 25.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de calcular percentis por interpolação linear e interpretará cortes percentílicos corretamente, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-3-topico-4",
            "titulo": "Distribuições, assimetria e valores extremos",
            "subtopicos": [
              {
                "id": "m8-u3-t4-s1",
                "titulo": "Formas de distribuição, assimetria e tratamento de extremos",
                "objetivoAprendizagem": "Aluno classificará a forma de uma distribuição e decidirá o tratamento de valores extremos.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) formas de distribuição; (b) assimetria e seu efeito na média e mediana; (c) tratamento de extremos (outliers). POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a identificação de assimetria e o tratamento de extremos; confundi-los muda o gabarito. PRÉ-REQUISITOS: conceitos de média, mediana e dispersão. OBJETIVOS OBSERVÁVEIS: (1) classificar a assimetria; (2) explicar seu efeito na média e mediana; (3) descrever tratamento de extremos. COMPETÊNCIAS DESENVOLVIDAS: análise de distribuição; tratamento de dados. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.3 (média); unidade 8.2 (box plot). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: distribuições: simétrica (normal), assimétrica à direita (cauda longa à direita, média > mediana), assimétrica à esquerda (cauda longa à esquerda, média < mediana); assimetria afeta a escolha da medida de tendência central; extremos (outliers) podem ser erros de medição ou casos legítimos; tratamento: investigar, corrigir se erro, manter se legítimo, usar medidas robustas (mediana, IQR), transformação (log) quando apropriado. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer assimetria visualmente.\n- Nível intermediário: classificar assimetria e seu efeito.\n- Nível avançado: tratar extremos com justificativa.\n- Nível especialista: auditar um conjunto quanto a distribuição e extremos.\nCOMPARAÇÕES CRÍTICAS:\n- assimetria positiva x negativa: positiva tem cauda à direita e média > mediana; negativa tem cauda à esquerda e média < mediana.\n- remover outlier x manter: remover se erro; manter se legítimo e usar medidas robustas.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"assimetria não afeta a análise\" — Motivo: afeta a escolha da medida — Versão tecnicamente correta: avaliar a distribuição.\n- Afirmação errada: \"outliers devem sempre ser removidos\" — Motivo: podem ser casos legítimos — Versão tecnicamente correta: investigar antes.\n- Afirmação errada: \"transformação log sempre resolve assimetria\" — Motivo: depende da distribuição — Versão tecnicamente correta: testar e justificar.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: distribuição, assimetria, cauda, extremo, outlier, transformação.\n- Regras e mecanismos: assimetria positiva: média > mediana; negativa: média < mediana.\n- Exceções: extremos legítimos exigem medidas robustas.\n- Palavras-chave: distribuição, assimetria, cauda, extremo, outlier, transformação.\n- Checklist de domínio: (1) Classifico assimetria? (2) Explico efeito na média/mediana? (3) Trato extremos? (4) Justifico transformação?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é assimetria? (2) Como a assimetria afeta média e mediana? (3) O que são extremos? (4) Como tratar outliers? (5) Quando usar transformação log?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Distribuição com moda 8, mediana 8 e média ≈ 13,14 (dados 2, 4, 6, 8, 10, 12, 50). Que forma é essa?",
                    "resposta": "Assimétrica à direita: a média está bem acima da mediana porque a cauda estica para valores altos, puxada pelo 50. A leitura correta é reportar mediana (8) e IIQ, com nota sobre o extremo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um posto registra média de espera 30 min com mediana 12 min. O gestor deve agir sobre o quê?",
                    "resposta": "Sobre as duas coisas, com diagnóstico antes: a mediana diz que a metade dos atendimentos é ágil; a média elevada indica cauda longa (alguns casos muito demorados). A ação proporcional é investigar os casos de cauda (ex.: serviços sem esteira) — atacar a mediana com medida geral desperdiça esforço."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Todo valor fora de 1,5 × IIQ é erro de dados e deve ser removido.'",
                    "correcao": "Errado. A regra identifica pontos ATÍPICOS, não incorretos. Remover sem investigar apaga informação real (fraudes, gargalos, casos raros) e melhora artificialmente os indicadores — operação de mascaramento, não de limpeza."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em distribuição assimétrica à direita, a média costuma ser maior que a mediana.",
                    "resposta": "Certo. A cauda à direita eleva a média, que é sensível a extremos; a mediana resiste."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Duas filas misturadas (picos em 5 e 25 minutos) produzem distribuição: A) simétrica; B) bimodal; C) uniforme; D) leptocúrtica.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de classificar a forma de uma distribuição e decidirá o tratamento de valores extremos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-3-topico-5",
            "titulo": "Correlação e causalidade",
            "subtopicos": [
              {
                "id": "m8-u3-t5-s1",
                "titulo": "Correlação, causalidade e conclusões indevidas",
                "objetivoAprendizagem": "Aluno separará associação de causalidade e enumerará explicações alternativas para uma correlação observada.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) correlação (Pearson, Spearman); (b) causalidade; (c) conclusões indevidas; (d) variáveis de confusão. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a distinção entre correlação e causalidade; confundi-las muda o gabarito. PRÉ-REQUISITOS: conceitos de dispersão e de associação. OBJETIVOS OBSERVÁVEIS: (1) calcular e interpretar correlação; (2) distinguir correlação de causalidade; (3) identificar conclusões indevidas. COMPETÊNCIAS DESENVOLVIDAS: análise bivariada; leitura crítica. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.2 (dispersão); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: correlação de Pearson como medida de associação linear entre duas variáveis numéricas, variando de -1 a 1; Spearman como correlação de postos, adequada a relações monotônicas não lineares; causalidade como relação de causa-efeito, que exige desenho experimental, controle de confundidores e evidência além da associação; conclusões indevidas: inferir causalidade de correlação, ignorar variáveis de confusão, extrapolar além do domínio dos dados; variáveis de confusão (confundidores) como terceira variável que influencia ambas. Exemplo numérico: correlação entre número de sorvetes vendidos e casos de afogamento é alta, mas a variável de confusão (temperatura) explica ambas; não há causalidade. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que correlação mede associação.\n- Nível intermediário: calcular Pearson e Spearman e interpretar.\n- Nível avançado: identificar confundidores e conclusões indevidas.\n- Nível especialista: auditar uma análise quanto à causalidade.\nCOMPARAÇÕES CRÍTICAS:\n- Pearson x Spearman: Pearson para linear; Spearman para monotônica (postos).\n- correlação x causalidade: correlação é associação; causalidade exige evidência adicional.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"correlação alta prova causalidade\" — Motivo: associação não é causalidade — Versão tecnicamente correta: distinguir os dois.\n- Afirmação errada: \"Pearson serve para qualquer relação\" — Motivo: mede apenas linear — Versão tecnicamente correta: usar Spearman para não linear.\n- Afirmação errada: \"correlação zero significa independência\" — Motivo: pode haver relação não linear — Versão tecnicamente correta: avaliar também visualmente.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: Pearson, Spearman, causalidade, confundidor, conclusão indevida.\n- Regras e fórmulas: Pearson = cov(X,Y)/(σ_X σ_Y); varia de -1 a 1.\n- Exceções: correlação zero não implica independência.\n- Palavras-chave: correlação, Pearson, Spearman, causalidade, confundidor.\n- Checklist de domínio: (1) Calculo Pearson e Spearman? (2) Interpreto? (3) Distingo de causalidade? (4) Identifico confundidores?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é correlação de Pearson? (2) Quando usar Spearman? (3) O que é causalidade? (4) Por que correlação não implica causalidade? (5) O que é um confundidor?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "r = 0,9 entre horas de estudo e pontuação. Que frases são sustentadas e qual não é?",
                    "resposta": "Sustentadas: 'houve associação positiva forte na amostra'; 'estudar mais acompanhou pontuações mais altas'. Não sustentada: 'cada hora extra CAUSA tanta pontuação a mais' — falta controle de confundentes (disciplina, renda, sono) e delineamento que isole o fator."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Painel mostra que municípios com mais equipes de saúde têm mais casos registrados. Causalidade?",
                    "resposta": "Provavelmente confundimento/detecção: mais equipes significam MAIS VIGILÂNCIA, logo mais casos identificados e registrados. A variável oculta é a capacidade de detecção; afirmar que equipes 'aumentam a doença' inverte causa e efeito de medição."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'r = 0 significa que as variáveis não têm nenhuma relação.'",
                    "correcao": "Errado. r ≈ 0 descarta apenas associação LINEAR; relações em U, em V ou por grupos misturados podem existir com r nulo. Antes de concluir 'sem relação', examine o gráfico de dispersão."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Para sustentar causalidade, é necessário que a causa antecede o efeito no tempo.",
                    "resposta": "Certo. A temporalidade é condição básica — e ainda assim insuficiente sem controle de confundentes."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Temperatura explica consumo de sorvete e afogamentos. Esse caso é: A) causalidade reversa; B) confundimento por variável oculta; C) causalidade direta; D) multicolinearidade.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de separar associação de causalidade e enumerará explicações alternativas para uma correlação observada, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-3-topico-6",
            "titulo": "Amostragem e vieses",
            "subtopicos": [
              {
                "id": "m8-u3-t6-s1",
                "titulo": "Métodos de amostragem, erro de amostragem e vieses",
                "objetivoAprendizagem": "Aluno distinguirá erro de amostragem de viés e escolherá método de amostragem coerente com o objetivo.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) métodos de amostragem (aleatória simples, estratificada, sistemática, por conglomerados); (b) erro de amostragem; (c) vieses de amostragem. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a distinção entre métodos de amostragem e vieses; confundi-los muda o gabarito. PRÉ-REQUISITOS: conceitos de população e amostra. OBJETIVOS OBSERVÁVEIS: (1) distinguir métodos de amostragem; (2) explicar erro de amostragem; (3) identificar vieses. COMPETÊNCIAS DESENVOLVIDAS: análise de dados; avaliação de qualidade de amostra. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.3 (estatística); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: amostragem aleatória simples: cada elemento tem probabilidade igual de seleção; estratificada: divide a população em estratos e amostra de cada um; sistemática: seleciona a cada k-ésimo elemento; por conglomerados: seleciona grupos e estuda todos os elementos dos grupos selecionados; erro de amostragem: diferença entre estatística amostral e parâmetro populacional devido ao acaso; vieses: de seleção (amostra não representativa), de não resposta (quem não responde difere), de cobertura (população-alvo ≠ população amostrada), de resposta (respostas distorcidas). PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender a diferença entre população e amostra.\n- Nível intermediário: distinguir métodos de amostragem.\n- Nível avançado: identificar vieses e seu impacto.\n- Nível especialista: auditar um estudo quanto à amostragem.\nCOMPARAÇÕES CRÍTICAS:\n- aleatória simples x estratificada: estratificada garante representação de subgrupos.\n- erro de amostragem x viés: erro é aleatório e reduz com n; viés é sistemático e não reduz com n.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"aumentar n elimina viés\" — Motivo: viés é sistemático — Versão tecnicamente correta: corrigir o desenho.\n- Afirmação errada: \"amostragem por conveniência é aceitável\" — Motivo: gera viés de seleção — Versão tecnicamente correta: usar métodos probabilísticos.\n- Afirmação errada: \"erro de amostragem é erro de medição\" — Motivo: são fontes distintas — Versão tecnicamente correta: distinguir.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: amostra, população, aleatória, estratificada, sistemática, conglomerados, erro, viés.\n- Regras e mecanismos: métodos probabilísticos garantem representatividade; vieses são sistemáticos.\n- Exceções: em populações homogêneas, amostragem simples pode bastar.\n- Palavras-chave: amostragem, erro, viés, seleção, estratificação.\n- Checklist de domínio: (1) Distingo métodos de amostragem? (2) Explico erro de amostragem? (3) Identifico vieses? (4) Avalio qualidade da amostra?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é amostragem aleatória simples? (2) Quando usar estratificada? (3) O que é erro de amostragem? (4) O que é viés de seleção? (5) Como reduzir vieses?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular n para proporção com z = 1,96, p = 0,5 e margem e = 0,05.",
                    "resposta": "n = (1,96)² × 0,5 × 0,5 ÷ (0,05)² = 3,8416 × 0,25 ÷ 0,0025 = 0,9604 ÷ 0,0025 = 384,16 → 385 indivíduos (arredondamento para cima). Esse é o tamanho típico citado para proporções com esses parâmetros."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Pesquisa por link enviada a mailing: 8% responderam e 70% aprovaram a política. O que declarar?",
                    "resposta": "O viés de seleção e de não-resposta: quem clica em pesquisa de e-mail tende a ter opinião formada — os 70% não são generalizáveis para a população. Correto: declarar a forma de coleta, a taxa de resposta (8%), limitar a conclusão à amostra e, para afirmar sobre a população, usar amostragem probabilística com margem declarada."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Com 10 mil respostas, o resultado é representativo — o tamanho da amostra elimina o viés.'",
                    "correcao": "Errado. O tamanho reduz o ERRO DE AMOSTRAGEM, não o VIÉS. Uma amostra enviesada de 10 mil permanece enviesada; a direção do desvio é sistemática e só se corrige mudando o desenho da coleta."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Amostragem estratificada garante representação dos subgrupos relevantes definidos previamente.",
                    "resposta": "Certo. É o objetivo dos estratos: assegurar a presença proporcional (ou ponderada) de cada subgrupo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Pesquisa com z = 1,96, p = 0,5, margem de 5 p.p.: n mínimo é: A) 96; B) 385; C) 1.000; D) 64.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir erro de amostragem de viés e escolherá método de amostragem coerente com o objetivo, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-8-unidade-4",
        "titulo": "8.4 Ferramentas de Análise e Business Intelligence",
        "topicos": [
          {
            "id": "modulo-8-unidade-4-topico-1",
            "titulo": "Power BI, Power Query e fundamentos de DAX",
            "subtopicos": [
              {
                "id": "m8-u4-t1-s1",
                "titulo": "Power BI, Power Query e DAX em nível conceitual",
                "objetivoAprendizagem": "Aluno descreverá o papel de cada componente e construirá uma medida conceitual em linguagem de BI.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) Power BI, Power Query e fundamentos de DAX; (b) modelagem analítica básica; (c) dimensões, medidas, filtros e agregações; (d) diferenças entre recursos gratuitos e comerciais. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a distinção entre Power BI Desktop (gratuito) e serviço em nuvem (licença), e os conceitos de dimensão e medida; confundi-los muda o gabarito. PRÉ-REQUISITOS: conceitos de dados e de visualização. OBJETIVOS OBSERVÁVEIS: (1) descrever Power BI, Power Query e DAX em nível conceitual; (2) explicar modelagem analítica; (3) distinguir dimensão de medida; (4) diferenciar recursos gratuitos e comerciais. COMPETÊNCIAS DESENVOLVIDAS: análise de ferramentas de BI; desenho de modelo analítico. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.4 (comparação); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: Power BI como plataforma de análise e visualização, com Power BI Desktop (gratuito, para criação) e serviço em nuvem (publicação e compartilhamento, sujeito a licença); Power Query como ferramenta de extração, transformação e carga (ETL) com interface visual; DAX (Data Analysis Expressions) como linguagem de fórmulas para medidas e colunas calculadas; modelagem analítica básica: tabela fato (medidas) e tabelas dimensão (contexto); dimensão como atributo descritivo (produto, região, data); medida como valor numérico agregável (vendas, quantidade); filtros e agregações (soma, média, contagem); diferença entre recursos gratuitos e comerciais: o Desktop é gratuito para uso individual; a publicação e o compartilhamento em nuvem dependem de licença (depende do plano/versão; conferir na documentação oficial). PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender o fluxo dados → modelo → painel.\n- Nível intermediário: distinguir dimensão de medida e explicar DAX.\n- Nível avançado: modelar esquema estrela.\n- Nível especialista: avaliar limitações e governança.\nCOMPARAÇÕES CRÍTICAS:\n- Power BI Desktop x serviço em nuvem: Desktop gratuito para criação; nuvem para publicação e compartilhamento, sujeito a licença.\n- dimensão x medida: dimensão descreve; medida quantifica.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Power BI é totalmente gratuito\" — Motivo: publicação e compartilhamento dependem de licença — Versão tecnicamente correta: Desktop gratuito; nuvem sujeita a licença.\n- Afirmação errada: \"DAX é igual a fórmulas do Excel\" — Motivo: DAX opera em colunas e tabelas, com contexto de filtro — Versão tecnicamente correta: linguagem própria de modelagem.\n- Afirmação errada: \"medida e coluna calculada são a mesma coisa\" — Motivo: medida é avaliada no contexto de filtro; coluna calculada é por linha — Versão tecnicamente correta: conceitos distintos.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: Power BI, Power Query, DAX, modelo, dimensão, medida, filtro, agregação.\n- Regras e mecanismos: Desktop gratuito; nuvem sujeita a licença; DAX para medidas e colunas calculadas.\n- Exceções: limites dependem do plano/versão; conferir documentação oficial.\n- Palavras-chave: Power BI, Power Query, DAX, dimensão, medida, filtro, agregação.\n- Checklist de domínio: (1) Descrevo Power BI/Power Query/DAX? (2) Explico modelagem analítica? (3) Distingo dimensão de medida? (4) Diferencio recursos gratuitos e comerciais?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é Power BI Desktop? (2) O que é Power Query? (3) O que é DAX? (4) Qual a diferença entre dimensão e medida? (5) Quais recursos dependem de licença?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Em que momento o Power Query roda em relação ao carregamento dos dados?",
                    "resposta": "Os passos de transformação são definidos antes/atualização e executados quando a consulta é atualizada — em geral o fluxo é extrair e transformar no editor, carregando o resultado para o modelo. A ordem exata de execução e as opções de carga dependem da configuração e da versão: declare-a ao descrever o fluxo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Escrever o conceito de uma medida 'Ticket médio' sobre faturamento e quantidade.",
                    "resposta": "TicketMedio = Soma(Faturamento) ÷ Soma(Quantidade) — a agregação correta é somar ANTES de dividir; dividir a soma pela contagem de linhas erraria quando cada linha tem quantidade diferente de 1. A medida se recalcula por recorte (por loja, por mês) graças ao contexto de filtro."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Em DAX, a média de uma coluna calculada por linha é sempre igual à média do agregado.'",
                    "correcao": "Errado. Média linha a linha (por exemplo, Faturamento ÷ Quantidade em cada linha) e média agregada (Soma(Faturamento) ÷ Soma(Quantidade)) diferem quando as quantidades variam — é a mesma armadilha da média de médias vista em agregação."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O Power Query registra os passos de transformação, permitindo reexecutar o processo a cada atualização.",
                    "resposta": "Certo. A consulta é um script declarativo de passos, não um ajuste manual descartável."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Em linguagem de BI, o recorte aplicado pelos filtros do relatório que afeta o cálculo de medidas é: A) contexto de linha; B) contexto de filtro; C) contexto de segurança; D) contexto de exportação.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de descrever o papel de cada componente e construirá uma medida conceitual em linguagem de BI, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-4-topico-2",
            "titulo": "Tableau e Looker Studio",
            "subtopicos": [
              {
                "id": "m8-u4-t2-s1",
                "titulo": "Tableau (Desktop, Public, Prep) e Looker Studio",
                "objetivoAprendizagem": "Aluno comparará ferramentas de visualização por modelo de acesso, preparação de dados e publicação.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) Tableau (Desktop, Public, Prep) e Looker Studio; (b) comparação de recursos, limitações, integração, governança; (c) diferença entre recursos gratuitos e comerciais; (d) exemplos que não dependam de conta comercial. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a distinção entre edições gratuitas e comerciais e os cenários de uso; confundi-las muda o gabarito. PRÉ-REQUISITOS: conceitos de visualização e de BI. OBJETIVOS OBSERVÁVEIS: (1) descrever Tableau e Looker Studio; (2) comparar recursos e limitações; (3) diferenciar gratuitos e comerciais. COMPETÊNCIAS DESENVOLVIDAS: análise de ferramentas; escolha de ferramenta. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.4 (comparação); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: Tableau Desktop (comercial, para criação), Tableau Public (gratuito, com publicação pública), Tableau Prep (preparação de dados); Looker Studio (gratuito, baseado em web, integração com fontes Google e outras); comparação: Tableau tem forte visualização interativa e preparação de dados; Looker Studio é gratuito e integrado a fontes web; limitações: Tableau Desktop requer licença; Tableau Public publica dados publicamente; Looker Studio depende de conectores e pode ter limites de atualização; integração e governança: controle de acesso, versionamento, compartilhamento; exemplos didáticos: usar Tableau Public ou Looker Studio para não depender de conta comercial. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: conhecer as ferramentas e suas edições.\n- Nível intermediário: comparar recursos e limitações.\n- Nível avançado: escolher ferramenta conforme cenário.\n- Nível especialista: avaliar governança e integração.\nCOMPARAÇÕES CRÍTICAS:\n- Tableau Desktop x Tableau Public: Desktop comercial com publicação controlada; Public gratuito com publicação pública.\n- Tableau x Looker Studio: Tableau com visualização interativa avançada; Looker Studio gratuito e baseado em web.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Tableau é gratuito\" — Motivo: Desktop requer licença; apenas Public é gratuito — Versão tecnicamente correta: distinguir edições.\n- Afirmação errada: \"Looker Studio requer licença paga\" — Motivo: é gratuito — Versão tecnicamente correta: gratuito, com limites de conectores.\n- Afirmação errada: \"qualquer ferramenta serve para qualquer cenário\" — Motivo: limitações e governança diferem — Versão tecnicamente correta: escolher conforme cenário.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: Tableau Desktop, Tableau Public, Tableau Prep, Looker Studio, licença, governança.\n- Regras e mecanismos: Desktop comercial; Public gratuito com publicação pública; Looker Studio gratuito.\n- Exceções: limites dependem do plano/versão; conferir documentação oficial.\n- Palavras-chave: Tableau, Looker Studio, licença, governança, integração.\n- Checklist de domínio: (1) Descrevo Tableau e Looker Studio? (2) Comparo recursos? (3) Diferencio gratuitos e comerciais? (4) Escolho conforme cenário?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais as edições do Tableau? (2) O que é Tableau Public? (3) O que é Looker Studio? (4) Quais recursos dependem de licença? (5) Como escolher a ferramenta?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Cenário: analista quer publicar painel com dados de servidores (dados pessoais). Tableau Public ou Desktop?",
                    "resposta": "Nem Tableau Public: a publicação pública exporia dado pessoal. O caminho é ferramenta com publicação controlada (Desktop para autoria local, ou painel no serviço da organização com controle de acesso), alinhado às regras de proteção do M7."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Escola quer painel simples ligado a planilha, sem instalação e sem custo inicial. Qual caminho conceitual?",
                    "resposta": "Ferramenta de painel em navegador com conector de planilha (Looker Studio é o exemplo deste perfil). Cuidados: confirmar quem terá acesso, proteger a planilha de origem e lembrar que a dependência de conexão/compartilhamento segue as regras da conta usada."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'A edição gratuita de qualquer ferramenta de BI atende igualmente uma prefeitura com dados sensíveis.'",
                    "correcao": "Errado. Edições gratuitas frequentemente limitam publicação, controle de acesso, auditoria ou exigem área pública. Para dado sensível, o critério é governança e controle de acesso — nem sempre disponíveis na edição gratuita; por isso a dependência de licença deve ser declarada."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Tableau Public publica em área acessível publicamente, o que a torna inadequada para dados sensíveis.",
                    "resposta": "Certo. É a característica que define a edição gratuita e condiciona o uso."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual característica associa-se ao perfil do Looker Studio? A) instalação obrigatória no servidor; B) painel em navegador com conectores a fontes; C) licença exclusiva por servidor; D) ausência total de conectores.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de comparar ferramentas de visualização por modelo de acesso, preparação de dados e publicação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-4-topico-3",
            "titulo": "Modelagem analítica: dimensões, medidas, filtros e agregações",
            "subtopicos": [
              {
                "id": "m8-u4-t3-s1",
                "titulo": "Esquema estrela, fatos, dimensões e medidas",
                "objetivoAprendizagem": "Aluno separará fatos de dimensões em um modelo e justificará o uso de medidas agregadas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) esquema estrela, fatos, dimensões e medidas; (b) modelagem analítica básica; (c) agregações e filtros. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a distinção entre tabela fato e tabela dimensão; confundi-las muda o gabarito. PRÉ-REQUISITOS: conceitos de dados e de BI. OBJETIVOS OBSERVÁVEIS: (1) descrever esquema estrela; (2) distinguir fato de dimensão; (3) explicar medidas e agregações. COMPETÊNCIAS DESENVOLVIDAS: modelagem analítica; desenho de painel. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.4 (ferramentas); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: esquema estrela como modelo com uma tabela fato central (eventos mensuráveis) cercada por tabelas dimensão (contexto descritivo); tabela fato contém medidas (valores numéricos agregáveis) e chaves estrangeiras; tabela dimensão contém atributos descritivos (produto, região, data); medidas: soma, média, contagem; agregações: roll-up (agregar), drill-down (detalhar); filtros: restrição do conjunto analisado; a modelagem deve ser orientada à pergunta analítica. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender a separação entre fato e dimensão.\n- Nível intermediário: descrever esquema estrela e medidas.\n- Nível avançado: projetar modelo analítico.\n- Nível especialista: avaliar governança e desempenho.\nCOMPARAÇÕES CRÍTICAS:\n- fato x dimensão: fato contém eventos e medidas; dimensão contém contexto descritivo.\n- agregação x filtro: agregação resume; filtro restringe.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"tudo pode ser medida\" — Motivo: medidas devem ser numéricas e agregáveis — Versão tecnicamente correta: distinguir medida de atributo.\n- Afirmação errada: \"esquema estrela é o único modelo\" — Motivo: existem outros (floco de neve) — Versão tecnicamente correta: escolher conforme o caso.\n- Afirmação errada: \"dimensão não precisa de chave\" — Motivo: a chave liga fato e dimensão — Versão tecnicamente correta: usar chave estrangeira.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: esquema estrela, fato, dimensão, medida, agregação, filtro.\n- Regras e mecanismos: fato central com medidas; dimensões com contexto; agregações e filtros.\n- Exceções: modelos mais complexos (floco de neve) podem ser usados.\n- Palavras-chave: esquema estrela, fato, dimensão, medida, agregação, filtro.\n- Checklist de domínio: (1) Descrevo esquema estrela? (2) Distingo fato de dimensão? (3) Explico medidas e agregações? (4) Projeto modelo analítico?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é um esquema estrela? (2) O que é uma tabela fato? (3) O que é uma tabela dimensão? (4) Qual a diferença entre medida e dimensão? (5) O que são agregações e filtros?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Em 'pagamento de benefício', quais são fato e dimensões?",
                    "resposta": "Fato: PAGAMENTO (um registro por pagamento; medidas: valor, quantidade de parcelas). Dimensões: TEMPO (data de pagamento), ÓRGÃO/UNIDADE, BENEFÍCIO (tipo), PESSOA (titular, com chave pseudonimizada quando for analisar). A granularidade declarada é 'um pagamento por linha'."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Relatório mostra 1.500 'atendimentos' mas a base tem 1.500 linhas com 1.200 protocolos distintos. Diagnóstico.",
                    "resposta": "Contagem por linhas inflada por duplicidade (300 linhas repetidas). A medida correta é contagem distinta de protocolo (= 1.200). O caso mostra por que o modelo precisa de chave identificadora e de contagem distinta: número bruto de linhas não é número de eventos."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Na estrela, os atributos descritivos devem ficar na tabela de fato.'",
                    "correcao": "Errado. Atributos descritivos pertencem às dimensões; a tabela de fato guarda chaves e medidas. Mover atributos para o fato duplica dados, aumenta volume e quebra a consistência dos filtros."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) 'Mês de referência' é atributo de dimensão Tempo, não medida de fato.",
                    "resposta": "Certo. É contexto de análise (dimensão); medida é numérica e agregável (valor, contagem)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para contar atendimentos únicos em base com linhas repetidas, a medida adequada é: A) soma das linhas; B) contagem distinta do protocolo; C) média por linha; D) máxima do protocolo.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de separar fatos de dimensões em um modelo e justificará o uso de medidas agregadas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-4-topico-4",
            "titulo": "Gratuitos, comerciais e dependentes de licença: escolha e cenários",
            "subtopicos": [
              {
                "id": "m8-u4-t4-s1",
                "titulo": "Critérios de comparação e cenários de uso",
                "objetivoAprendizagem": "Aluno comparará ferramentas por critérios explícitos e recomendará opção para um cenário dado.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) critérios de comparação de ferramentas de BI; (b) cenários de uso; (c) limitações e governança. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a escolha de ferramenta conforme o cenário; confundi-las muda o gabarito. PRÉ-REQUISITOS: conceitos de visualização e de BI. OBJETIVOS OBSERVÁVEIS: (1) comparar ferramentas por critérios; (2) escolher conforme cenário; (3) avaliar limitações e governança. COMPETÊNCIAS DESENVOLVIDAS: análise de ferramentas; decisão técnica. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.4 (ferramentas); Módulo 7 (dados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: critérios de comparação: custo/licenciamento, facilidade de uso, capacidade de visualização, preparação de dados, integração com fontes, governança (controle de acesso, versionamento), escalabilidade; cenários: uso individual (ferramenta gratuita), equipe (licença compartilhada), organização (governança e segurança); limitações: dependem do plano/versão; exemplos didáticos que não dependam de conta comercial: Tableau Public, Looker Studio, Power BI Desktop. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: conhecer os critérios de comparação.\n- Nível intermediário: comparar ferramentas por critérios.\n- Nível avançado: escolher conforme cenário.\n- Nível especialista: avaliar governança e integração.\nCOMPARAÇÕES CRÍTICAS:\n- custo x capacidade: ferramentas gratuitas têm limitações; comerciais oferecem mais recursos.\n- facilidade x governança: ferramentas simples podem ter menos controle.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"a melhor ferramenta é a mais cara\" — Motivo: depende do cenário — Versão tecnicamente correta: escolher conforme necessidade.\n- Afirmação errada: \"ferramentas gratuitas são suficientes para tudo\" — Motivo: limitações de governança e compartilhamento — Versão tecnicamente correta: avaliar o cenário.\n- Afirmação errada: \"licenciamento não afeta a escolha\" — Motivo: pode inviabilizar o uso — Versão tecnicamente correta: considerar custo e plano.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: critérios, cenário, limitação, governança, licenciamento.\n- Regras e mecanismos: comparar por custo, capacidade, integração e governança; escolher conforme cenário.\n- Exceções: limites dependem do plano/versão; conferir documentação oficial.\n- Palavras-chave: comparação, cenário, limitação, governança, licenciamento.\n- Checklist de domínio: (1) Comparo ferramentas por critérios? (2) Escolho conforme cenário? (3) Avalio limitações? (4) Considero governança?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais os critérios de comparação? (2) Como escolher conforme cenário? (3) Quais as limitações comuns? (4) O que é governança em BI? (5) Quais exemplos não dependem de conta comercial?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Comparar opções A (gratuita, publicação pública) e B (licenciada, publicação com controle) para painel com dados de saúde.",
                    "resposta": "B: dado de saúde é sensível e exige controle de acesso, registro e retenção — a publicação pública da opção A é incompatível. O custo da licença é o preço da conformidade, não um excesso."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Equipe de estudo quer praticar com dados fictícios, sem orçamento. Que critério prevalece?",
                    "resposta": "Custo zero de autoria e publicação com dados fictícios: ferramenta gratuita é adequada, desde que os dados sejam realmente fictícios e rotulados como tal. Nesse cenário, governança e auditoria pesam menos que acessibilidade e velocidade de aprendizado."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Ferramenta gratuita é sempre a escolha correta para o serviço público, por economia.'",
                    "correcao": "Errado. Economia de licença não pode custar controle de acesso, auditoria e proteção de dados. Quando a ferramenta gratuita não sustenta governança exigida, a escolha correta é a licenciada — com justificativa registrada no processo."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Antes de comparar ferramentas, é preciso declarar edição, versão e data da comparação.",
                    "resposta": "Certo. Recursos e planos mudam; comparação sem esse dado envelhece rápido e engana."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para painel institucional com dados sensíveis, o critério que deve prevalecer é: A) menor custo de licença; B) controle de acesso e auditoria; C) maior número de tipos de gráfico; D) animações do painel.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de comparar ferramentas por critérios explícitos e recomendará opção para um cenário dado, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-8-unidade-5",
        "titulo": "8.5 Storytelling com Dados",
        "topicos": [
          {
            "id": "modulo-8-unidade-5-topico-1",
            "titulo": "Arco narrativo: contexto, conflito, descoberta e recomendação",
            "subtopicos": [
              {
                "id": "m8-u5-t1-s1",
                "titulo": "Contexto, conflito, descoberta e recomendação",
                "objetivoAprendizagem": "Aluno estruturará uma apresentação de dados em quatro movimentos e testará a narrativa em uma frase.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) storytelling com dados: contexto, conflito, descoberta, recomendação; (b) estrutura narrativa; (c) aplicação em painéis. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a estrutura narrativa e a integridade; um storytelling sem integridade é propaganda. PRÉ-REQUISITOS: conceitos de visualização. OBJETIVOS OBSERVÁVEIS: (1) descrever a estrutura narrativa; (2) aplicar em um caso; (3) manter integridade. COMPETÊNCIAS DESENVOLVIDAS: comunicação de dados; narrativa analítica. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.5 (público, métricas, incerteza); Módulo 6 (ética). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: storytelling com dados como estrutura narrativa para comunicar achados analíticos: contexto (situação inicial), conflito (problema ou oportunidade), descoberta (achado analítico), recomendação (ação sugerida); a narrativa deve ser ancorada em dados e manter integridade (não distorcer, não omitir contexto desfavorável); aplicação em painéis: guiar o leitor da visão geral ao detalhe. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: identificar os quatro elementos da narrativa.\n- Nível intermediário: construir uma narrativa a partir de dados.\n- Nível avançado: aplicar em painéis e manter integridade.\n- Nível especialista: auditar um storytelling quanto à integridade.\nCOMPARAÇÕES CRÍTICAS:\n- narrativa x relatório: narrativa guia; relatório lista.\n- descoberta x recomendação: descoberta é o achado; recomendação é a ação.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"storytelling pode omitir dados desfavoráveis\" — Motivo: viola integridade — Versão tecnicamente correta: comunicar incertezas e limitações.\n- Afirmação errada: \"narrativa substitui a análise\" — Motivo: storytelling apoia, não substitui — Versão tecnicamente correta: ancorar em dados.\n- Afirmação errada: \"qualquer gráfico serve para contar a história\" — Motivo: deve ser adequado ao dado e ao objetivo — Versão tecnicamente correta: escolher conforme o objetivo.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: contexto, conflito, descoberta, recomendação, integridade, narrativa.\n- Regras e mecanismos: estrutura em quatro atos; ancorar em dados; comunicar incertezas.\n- Exceções: em painéis de monitoramento, a narrativa pode ser mais leve.\n- Palavras-chave: storytelling, contexto, conflito, descoberta, recomendação, integridade.\n- Checklist de domínio: (1) Descrevo a estrutura narrativa? (2) Aplico em caso? (3) Mantenho integridade? (4) Comunico incertezas?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais os quatro elementos do storytelling? (2) O que é contexto? (3) O que é conflito? (4) O que é descoberta? (5) O que é recomendação?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Estruturar os quatro movimentos para: espera média de um serviço subiu de 12 para 21 minutos.",
                    "resposta": "Contexto: meta operacional de espera ≤ 15 minutos, série mensal. Conflito: a espera média subiu 75% [(21 − 12) ÷ 12] e rompeu a meta. Descoberta: box plot revela cauda longa concentrada em um tipo de procedimento; barras mostram concentração em uma unidade. Recomendação: redimensionar a esteira do procedimento X na unidade Y, com revisão em 60 dias."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Diretor pede 2 minutos. Como abrir?",
                    "resposta": "Pela recomendação e pelo conflito: 'A espera subiu 75% e rompeu a meta; proponho X até Z'. Em seguida, um único gráfico de suporte e os números-chave. Detalhes metodológicos em anexo, para quem perguntar."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'A apresentação deve seguir a ordem em que os dados foram coletados.'",
                    "correcao": "Errado. A ordem da investigação não é a da narrativa de decisão: apresente conclusão e ação primeiro, evidência depois. Relatar o processo ('primeiro limpei a base, depois...') é assunto de anexo metodológico, não do slide de abertura."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A recomendação deve indicar ação, responsável, prazo e o custo de não agir.",
                    "resposta": "Certo. Recomendação sem esses elementos é constatação — não apoia decisão."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "O movimento que apresenta a tensão exigindo decisão é: A) contexto; B) conflito; C) coleta; D) apêndice.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de estruturar uma apresentação de dados em quatro movimentos e testará a narrativa em uma frase, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-5-topico-2",
            "titulo": "Público, decisão e seleção de métricas",
            "subtopicos": [
              {
                "id": "m8-u5-t2-s1",
                "titulo": "Público, decisão a apoiar e métricas relevantes",
                "objetivoAprendizagem": "Aluno definirá público e decisão de uma comunicação e justificará a seleção de cada métrica.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) público e decisão a apoiar; (b) seleção de métricas relevantes; (c) alinhamento entre dados e decisão. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a definição do público e da decisão antes da escolha de métricas; métricas irrelevantes levam a decisões erradas. PRÉ-REQUISITOS: conceitos de visualização e de storytelling. OBJETIVOS OBSERVÁVEIS: (1) definir o público e a decisão; (2) selecionar métricas relevantes; (3) alinhar dados à decisão. COMPETÊNCIAS DESENVOLVIDAS: análise de necessidade; comunicação de dados. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.5 (storytelling); unidade 8.4 (BI). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: público como quem toma a decisão (gestor, técnico, cidadão); decisão como ação a apoiar (alocar recurso, mudar processo, comunicar); métricas relevantes como indicadores que informam a decisão (não apenas os disponíveis); alinhamento: a métrica deve ser acionável, compreensível e tempestiva; evitar vanity metrics (métricas vaidosas) que não informam decisão. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: identificar o público e a decisão.\n- Nível intermediário: selecionar métricas relevantes.\n- Nível avançado: alinhar dados à decisão e evitar vanity metrics.\n- Nível especialista: auditar um painel quanto à relevância das métricas.\nCOMPARAÇÕES CRÍTICAS:\n- métrica relevante x vanity metric: a primeira informa decisão; a segunda apenas impressiona.\n- público técnico x gestor: o técnico quer detalhe; o gestor quer síntese.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"mostrar todos os dados é melhor\" — Motivo: informação irrelevante dilui a mensagem — Versão tecnicamente correta: selecionar métricas relevantes.\n- Afirmação errada: \"a mesma métrica serve para todo público\" — Motivo: públicos têm necessidades diferentes — Versão tecnicamente correta: adaptar ao público.\n- Afirmação errada: \"métrica disponível é métrica relevante\" — Motivo: disponibilidade não implica relevância — Versão tecnicamente correta: avaliar a decisão a apoiar.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: público, decisão, métrica, relevância, vanity metric, alinhamento.\n- Regras e mecanismos: definir público e decisão antes de escolher métricas.\n- Exceções: em painéis de monitoramento, pode-se incluir métricas de contexto.\n- Palavras-chave: público, decisão, métrica, relevância, alinhamento.\n- Checklist de domínio: (1) Defino público e decisão? (2) Seleciono métricas relevantes? (3) Evito vanity metrics? (4) Alinho dados à decisão?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como definir o público? (2) Como definir a decisão? (3) O que é uma métrica relevante? (4) O que é uma vanity metric? (5) Como alinhar dados à decisão?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Mesmo relatório para equipe técnica e para diretoria: o que muda?",
                    "resposta": "Técnica: distribuição completa, box plot, método e limitações, mais números. Diretoria: mediana, pico, comparação com meta, custo estimado e a recomendação — com o método em anexo. Os dados são os mesmos; a profundidade e o vocabulário mudam com o público e a decisão."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Painel de atendimento com 12 métricas. Como reduzir?",
                    "resposta": "Listar as decisões que o painel apoia; para cada métrica, perguntar o que se faria se ela mudasse; eliminar as que não mudam ação (vanidade), consolidar as redundantes (três métricas de volume viram uma com segmentação) e manter as essenciais com meta e tendência. Resultado esperado: painel com poucas métricas, cada uma ligada a uma decisão."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Métrica de processo é dispensável, pois o que importa é o resultado final.'",
                    "correcao": "Errado. Resultado consolida o passado; métrica de processo (fila, prazo de resposta) permite corrigir ANTES de o resultado piorar. Painel só de resultados reage tarde."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Métricas de um painel devem ter definição formal (fórmula, período e unidade) para evitar disputa de números.",
                    "resposta": "Certo. 'Atendimento médio' sem definição gera contas diferentes e discussão de processo em vez de decisão."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual é métrica de processo (leading)? A) receita realizada no mês; B) prazo médio de resposta na fila; C) total de atendimentos concluídos no trimestre; D) saldo orçamentário.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de definir público e decisão de uma comunicação e justificará a seleção de cada métrica, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-5-topico-3",
            "titulo": "Comunicação de incerteza e integridade",
            "subtopicos": [
              {
                "id": "m8-u5-t3-s1",
                "titulo": "Incerteza, limitações e transparência",
                "objetivoAprendizagem": "Aluno comunicará incerteza e limitações sem enfraquecer a recomendação.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) incerteza, limitações e transparência em storytelling; (b) comunicação de incerteza; (c) integridade e transparência. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a comunicação de incerteza e a integridade; omitir limitações é desonestidade analítica. PRÉ-REQUISITOS: conceitos de visualização e de storytelling. OBJETIVOS OBSERVÁVEIS: (1) comunicar incerteza; (2) declarar limitações; (3) manter transparência. COMPETÊNCIAS DESENVOLVIDAS: comunicação honesta de dados; análise crítica. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.5 (storytelling); Módulo 6 (ética). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: incerteza como variabilidade e limitação dos dados e do modelo; comunicação de incerteza por intervalos, cenários e sensibilidade; limitações: qualidade dos dados, escopo, causalidade não comprovada; transparência: declarar fonte, método, suposições e limitações; integridade: não distorcer nem omitir contexto desfavorável. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer a necessidade de comunicar incerteza.\n- Nível intermediário: descrever métodos de comunicação de incerteza.\n- Nível avançado: declarar limitações e manter transparência.\n- Nível especialista: auditar um storytelling quanto à integridade.\nCOMPARAÇÕES CRÍTICAS:\n- certeza aparente x incerteza real: omitir incerteza cria falsa certeza.\n- transparência x simplicidade: transparência pode complexificar, mas é obrigatória.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"comunicar incerteza enfraquece a mensagem\" — Motivo: aumenta a credibilidade — Versão tecnicamente correta: comunicar incerteza fortalece.\n- Afirmação errada: \"limitações podem ser omitidas\" — Motivo: viola transparência — Versão tecnicamente correta: declarar limitações.\n- Afirmação errada: \"intervalos de confiança são opcionais\" — Motivo: comunicam incerteza — Versão tecnicamente correta: usar quando apropriado.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: incerteza, limitação, transparência, integridade, intervalo, cenário.\n- Regras e mecanismos: comunicar incerteza por intervalos, cenários e sensibilidade; declarar fonte, método e limitações.\n- Exceções: em comunicação executiva, simplificar sem omitir.\n- Palavras-chave: incerteza, limitação, transparência, integridade, intervalo.\n- Checklist de domínio: (1) Comunico incerteza? (2) Declaro limitações? (3) Mantenho transparência? (4) Evito distorção?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é incerteza em dados? (2) Como comunicar incerteza? (3) O que são limitações? (4) O que é transparência? (5) Por que omitir limitações é desonestidade analítica?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Projeção de demanda: 1.200 atendimentos no próximo trimestre. Como comunicar?",
                    "resposta": "'Projeção de 1.050 a 1.300 atendimentos no próximo trimestre (cenário central 1.200), com base na tendência dos 12 meses e considerando variação histórica de ±X%. Estimativa, não meta.' As premissas ficam explícitas e a recomendação de capacidade usa a faixa."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Gráfico mostra crescimento forte nos últimos 3 meses após 12 meses de queda. Avaliar integridade.",
                    "resposta": "Risco de cherry-picking de período: destacar só os 3 meses favoráveis pode inverter a leitura do ano. Correção: exibir a série completa, destacar os 3 meses COM destaque explícito ('recuperação recente após queda acumulada') e reportar o resultado do período longo."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Comunicar incerteza confunde o público e por isso deve ser evitada.'",
                    "correcao": "Errado. Ocultar incerteza produz confiança indevida e decisões frágeis; além disso, quando a incerteza emerge depois, destrói a credibilidade do material. A alternativa é comunicar incerteza de forma simples: faixa, rótulo e premissa."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Selecionar apenas o período em que o indicador melhora, omitindo a série completa, compromete a integridade gráfica.",
                    "resposta": "Certo. É cherry-picking de período: a leitura viesada decorre da seleção, não dos dados."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática NÃO compromete a integridade? A) truncar eixo de barras sem aviso; B) declarar faixa de projeção com premissas; C) trocar a definição de métrica no meio do relato; D) ocultar fonte dos dados.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de comunicar incerteza e limitações sem enfraquecer a recomendação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-8-unidade-5-topico-4",
            "titulo": "Painéis para gestão pública e privada e estudo de caso",
            "subtopicos": [
              {
                "id": "m8-u5-t4-s1",
                "titulo": "Painéis de gestão e estudo de caso integrador",
                "objetivoAprendizagem": "Aluno desenhará painel para um cenário de gestão e resolverá estudo de caso com os cinco gráficos obrigatórios.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) painéis de gestão; (b) estudo de caso integrador com dados fictícios; (c) análise, gráficos e recomendação fundamentada. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a integração de análise, gráfico e recomendação; um painel sem narrativa não apoia decisão. PRÉ-REQUISITOS: conceitos de visualização e de storytelling. OBJETIVOS OBSERVÁVEIS: (1) desenhar um painel de gestão; (2) conduzir um estudo de caso com dados fictícios; (3) formular recomendação fundamentada. COMPETÊNCIAS DESENVOLVIDAS: análise integrada; comunicação de dados; tomada de decisão. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 8.5 (storytelling); unidade 8.4 (BI). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta. FUNDAMENTAÇÃO CONCEITUAL: painel de gestão como conjunto de indicadores e gráficos para apoiar decisão; estudo de caso com dados fictícios (rótulo explícito): cenário de atendimento público, com dados de tempo médio, volume por canal e satisfação; análise: identificar gargalos, tendências e outliers; gráficos: série temporal de volume, barras por canal, box plot de tempo de atendimento; recomendação fundamentada: ação específica com justificativa e métrica de acompanhamento; integridade: declarar que os dados são fictícios para fins didáticos. PROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender a estrutura de um painel.\n- Nível intermediário: analisar dados e escolher gráficos.\n- Nível avançado: formular recomendação fundamentada.\n- Nível especialista: auditar um painel e um estudo de caso.\nCOMPARAÇÕES CRÍTICAS:\n- painel de monitoramento x painel de análise: monitoramento acompanha; análise investiga.\n- dados reais x dados fictícios: fictícios para didática; reais para decisão.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"painel sem narrativa é suficiente\" — Motivo: não apoia decisão — Versão tecnicamente correta: incluir contexto e recomendação.\n- Afirmação errada: \"dados fictícios podem ser apresentados como reais\" — Motivo: viola integridade — Versão tecnicamente correta: rotular explicitamente.\n- Afirmação errada: \"recomendação não precisa de métrica de acompanhamento\" — Motivo: não permite avaliar o resultado — Versão tecnicamente correta: incluir métrica de acompanhamento.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: painel, gestão, estudo de caso, dados fictícios, análise, gráfico, recomendação.\n- Regras e mecanismos: painel com indicadores e gráficos; estudo de caso com dados fictícios rotulados; recomendação com justificativa e métrica.\n- Exceções: painéis de monitoramento podem ter narrativa mais leve.\n- Palavras-chave: painel, gestão, estudo de caso, dados fictícios, análise, recomendação.\n- Checklist de domínio: (1) Desenho painel de gestão? (2) Conduzo estudo de caso? (3) Formulo recomendação? (4) Rotulo dados fictícios?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é um painel de gestão? (2) Por que rotular dados fictícios? (3) Como analisar um estudo de caso? (4) Como formular recomendação? (5) Qual a diferença entre painel de monitoramento e de análise?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Que gráfico comunica melhor a cauda extrema das esperas para a gestão?",
                    "resposta": "O box plot (mostra mediana 8, IIQ 6 e o outlier 50 isolado) e o histograma (mostra a forma da cauda). Para diretoria, um box plot com a frase 'metade dos atendimentos até 8 minutos; casos extremos acima de 20' resolve."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Secretaria pede 'prova' de que a unidade A é o problema. O que os dados sustentam?",
                    "resposta": "Os dados sustentam concentração de VOLUME (36,3% do total) e razão A/D ≈ 2,37 — não, sozinhos, que a unidade A cause maior espera (isso exigiria espera por unidade e controle de confundentes). A recomendação honesta: investigar A primeiro por materialidade, sem afirmar causalidade não demonstrada."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Painel de gestão deve exibir todos os indicadores disponíveis para dar visão completa.'",
                    "correcao": "Errado. Visão completa produz paralisia: painel de gestão destaca poucos indicadores ligados a decisões, com exceções em destaque. Todo o resto pertence a relatório analítico ou drill-down, não à tela principal."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Dados fictícios usados em exercício didático devem ser rotulados como fictícios no material apresentado.",
                    "resposta": "Certo. Apresentar dado fictício como estatística real é fraude de comunicação — a rotulagem explícita preserva a honestidade do exercício."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Em atendimentos 120, 132, 115, 140, a variação de março (115) para abril (140) é: A) +17,86%; B) +21,74%; C) +25%; D) +10%.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de desenhar painel para um cenário de gestão e resolverá estudo de caso com os cinco gráficos obrigatórios, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      }
    ]
  }
};