/* curriculum_m8.js — Módulo 8: Visualização, Análise e Storytelling com Dados
 * Conteúdo didático real para o M8 (Escrita.txt, Seção 6 — MÓDULO 8).
 * Mesmo esquema de curriculum_m3.js: cada subtópico tem objetivoAprendizagem,
 * conteudo, exemplos (introducao/aplicacao/erro) e exercicios (certos_erro/multipla).
 * Os cálculos numéricos dos exemplos foram conferidos com script independente em Node.
 * Nenhuma URL, estatística de incidência em concurso ou recurso específico de versão
 * de ferramenta foi inventado — dependências de versão/plano são declaradas.
 */

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
                "conteudo": "Visualizar dados é converter tabelas em formas visuais para que o olho detecte o que a tabela esconde: ordem, magnitude, agrupamento, tendência, ruptura e exceção. O gráfico é interface entre dado e DECISÃO, e sua qualidade se mede pela pergunta que ele responde — não pela beleza. TAREFAS ANALÍTICAS clássicas: COMPARAR valores entre categorias (barras), EVOLUIR no tempo (linhas), DISTRIBUIR um conjunto (histograma, box plot), RELACIONAR duas variáveis (dispersão), COMPOR um todo (barras empilhadas, tabela), LOCALIZAR valor exato (tabela, rótulo de dado). Método de escolha em três passos: (1) formule a pergunta em uma frase; (2) identifique a tarefa analítica; (3) escolha o gráfico que executa a tarefa com menor esforço cognitivo. Dois erros de partida: escolher pela ferramenta ('o painel tem um gráfico de rosca') e escolher pela estética ('3D chama atenção'). Ambos produzem visualização que decora sem responder. LIMITE do gráfico: quando o leitor precisa de precisão exata de todos os valores (poucas células), a TABELA é superior ao gráfico — reconhecer isso é domínio do assunto, não desprezo por visualização. O laboratório de gráficos desta apostila permite praticar a escolha: cada um dos cinco tipos obrigatórios recebe dados editáveis e mostra a leitura resultante.",
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
                ]
              },
              {
                "id": "m8-u1-t1-s2",
                "titulo": "Princípios da Gestalt aplicados a gráficos",
                "objetivoAprendizagem": "Aluno aplicará proximidade, similaridade, continuidade, fechamento e figura-fundo ao desenho de um gráfico.",
                "conteudo": "A Gestalt estuda como a percepção organiza estímulos em grupos e formas. Cinco princípios com aplicação direta em gráficos. PROXIMIDADE: elementos próximos são vistos como um grupo — use espaço para separar séries e categorias em vez de molduras; agrupe barras da mesma categoria com folga menor entre elas. SIMILARIDADE: elementos com mesma cor, forma ou textura parecem pertencer ao mesmo grupo — mantenha uma cor fixa por série e por categoria ao longo de todo o painel; trocar a cor sem mudar o significado quebra a leitura. CONTINUIDADE: o olho segue linhas e curvas contínuas — linhas de tendência e séries temporais são lidas como trajetórias; linhas que se cruzam muitas vezes geram perda de rastro (neste caso, destaque a série de interesse e acinzentar as demais). FECHAMENTO: a percepção completa formas incompletas — barras 'flutuando' ou áreas abertas ainda são lidas como formas; isso permite barras iniciadas fora do zero apenas em linhas, nunca em comparação de área. FIGURA-FUNDO: o objeto se destaca do fundo — fundos escuros ou texturas disputam a figura e elevam o ruído; mantenha o fundo neutro. Aplicação prática: agrupamento por espaço, identidade por cor, trajetória por linha, hierarquia por destaque.",
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
                ]
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
                "conteudo": "Cor em visualização codifica informação, não enfeita. TRÊS TIPOS DE VARIÁVEL E SUAS PALETAS. CATEGÓRICA: cores distintas e de mesma força para classes sem ordem (região, espécie de serviço) — poucas cores, sem sobreposição de significado. SEQUENCIAL: variação de luminosidade de uma cor para magnitudes contínuas (de claro a escuro = de menor a maior) — respeita a ordem perceptiva. DIVERGENTE: duas cores separadas por ponto neutro quando existe referência central (superávit/déficit, acima/abaixo da meta) — o neutro é a meta, e as duas pontas são os extremos. CONTRASTE: diferença de luminosidade entre elemento e fundo deve sustentar a leitura; teste rápido em escala de cinza (se o elemento some em cinza, o contraste é insuficiente ou dependente apenas de matiz). HIERARQUIA: destaque o que deve ser visto primeiro — uma cor forte para a série de interesse, cinza para o contexto; mais de três cores fortes disputam atenção e nivelam tudo (efeito contrário ao desejado). REGRAS DE OURO: cor redundante (cor + rótulo + posição) em vez de cor sozinha; paleta coerente no painel inteiro; gradiente decorativo sem escala é ruído. Contraste não é brilho: gráfico chamativo com baixo contraste de texto é menos legível que gráfico sóbrio com contraste correto.",
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
                ]
              },
              {
                "id": "m8-u1-t2-s2",
                "titulo": "Acessibilidade em visualizações",
                "objetivoAprendizagem": "Aluno produzirá gráficos legíveis por pessoas com deficiência visual e por leitores de tela.",
                "conteudo": "Acessibilidade visual não é item opcional: é condição de que a informação chegue a todo o público. REGRAS PRÁTICAS. (1) NUNCA depender apenas de cor: muitas pessoas distinguem mal matizes (vermelho/verde é a combinação mais problemática); use redundância — cor acompanhada de rótulo, forma, padrão ou posição. (2) CONTRASTE suficiente entre texto e fundo e entre séries adjacentes; verifique em escala de cinza. (3) FONTE legível, sem rotação de rótulos longos (prefira barras horizontais quando os nomes são extensos). (4) TEXTO ALTERNATIVO: todo gráfico deve ter descrição escrita (quem, o quê, quando, unidade, mensagem principal) — é o que o leitor de tela lê, e é o que permite compreender o gráfico sem vê-lo. (5) DADOS SUBJACENTES: tabela equivalente disponível, com os mesmos números, evita que a interpretação dependa de estimativa visual. (6) EVITAR animação obrigatória e transição longa; respeitar preferências de movimento do sistema quando a ferramenta permite. (7) CORES com significado cultural variado: não codificar 'bom/ruim' apenas por verde/vermelho. ERRO COMUM: construir o painel no monitor do autor e publicar sem teste alternativo — a prova do contrário é o teste em escala de cinza e a leitura por leitor de tela.",
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
                ]
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
                "conteudo": "RUÍDO VISUAL é tudo que compete com o dado pela atenção sem informar: molduras pesadas, grades densas, 3D, sombras, texturas, emojis, cores sem significado, títulos longos repetidos. CHARTJUNK é o conjunto de ornamentos gráficos descritos na literatura de visualização (termo associado a Edward Tufte) — a medida prática associada é a razão entre tinta que informa e tinta que decora: maximize a primeira, elimine a segunda (a ideia funciona também em tela: pixel que não informa é ruído). INTEGRIDADE GRÁFICA é o compromisso de representar os dados sem distorção: eixo de valores iniciando em zero quando a comparação é de magnitude (barras), áreas e comprimentos proporcionais aos valores, escala declarada, sem manipulação de cor para sugerir julgamento, sem gráfico truncado apresentado como proporcional. Distorções clássicas: eixo y cortado em barras (transforma 14% de diferença em 'dobro'), empilhar áreas com larguras diferentes, usar raio (área) para codificar valor (área cresce com o quadrado do raio) e ordenar categorias de forma que esconda o pior resultado. Princípio de resolução: se a leitura correta exige correção mental do leitor, o gráfico está errado — a correção deve ser do autor.",
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
                ]
              },
              {
                "id": "m8-u1-t3-s2",
                "titulo": "Eixos, rótulos, unidades, legendas e fontes",
                "objetivoAprendizagem": "Aluno completará um gráfico com todos os elementos de composição exigidos para leitura autônoma.",
                "conteudo": "Um gráfico deve ser compreendido sem explicação oral. ELEMENTOS OBRIGATÓRIOS: TÍTULO que anuncia a mensagem (não apenas a variável) — 'Espera média subiu de 12 para 21 minutos entre março e junho' é informativo; 'Espera' não. EIXOS com NOME e UNIDADE ('minutos', 'R$', 'atendimentos/mês'); eixo de magnitude iniciando em 0 em barras. RÓTULOS DE DADO quando os pontos são poucos e a comparação exige precisão. LEGENDA próxima ao gráfico, com a ordem das séries coerente com a ordem visual das linhas/barras; quando houver poucas séries, rotular diretamente as linhas e dispensar a legendas distante. FONTE DA BASE e PERÍODO DE REFERÊNCIA (de onde vieram os dados e até quando valem) — sem isso, o número não é auditável; se os dados forem fictícios ou simulados, isso deve estar declarado. DATA DE ATUALIZAÇÃO quando o painel é dinâmico. NOTAS DE ESCALA quando houver corte, estimativa ou mudança de critério. GRID discreta, alinhada às leituras úteis. Checklist de entrega: título com mensagem, eixo nomeado e com unidade, legenda ou rótulo direto, fonte e período, semântica de cor declarada, dados subjacentes disponíveis. Gráfico sem fonte é opinião com formato de evidência.",
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
                ]
              },
              {
                "id": "m8-u1-t3-s3",
                "titulo": "Escalas linear, logarítmica e eixos truncados",
                "objetivoAprendizagem": "Aluno escolherá e lerá escalas corretamente e justificará o uso de escala logarítmica ou eixo cortado.",
                "conteudo": "ESCALA LINEAR: distâncias iguais representam diferenças iguais (de 10 a 20 = de 110 a 120). É a escala padrão e a que preserva a proporcionalidade visual. ESCALA LOGARÍTMICA: distâncias iguais representam RAZÕES iguais — cada passo multiplica (10, 100, 1.000); o passo visual entre 10 e 100 é igual ao entre 100 e 1.000. Serve quando os dados cobrem várias ordens de grandeza (populações, volumes, potências) e o interesse é taxa de crescimento, não diferença absoluta. CUIDADOS: valores zero ou negativos não existem em log; a leitura ingênua ('subiu o mesmo tanto') passa a ser errada — em log, 'subiu o mesmo tanto' significa 'multiplicou pelo mesmo fator'; toda escala log deve ser rotulada como tal. EIXO TRUNCADO (cortado): o eixo de valores não começa na origem. Em LINHAS é aceitável com sinalização (a leitura é de variação ao longo do tempo, não de proporção de área); em BARRAS é enganoso, porque a comparação é de comprimento/área e o corte distorce a razão visual. EXEMPLO NUMÉRICO: valores 70 e 80 — com base 0, a barra de 80 tem 1,14 vez a de 70 (14% maior); com base 60, as alturas são 10 e 20 e a razão visual vira 2,0 (parece o dobro). A escolha da base criou uma 'verdade' inexistente.",
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
                ]
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
                "conteudo": "Matriz de decisão por tarefa: COMPARAR categorias → barras horizontais (nomes longos) ou colunas (categorias curtas), ordenadas quando o objetivo é ranquear; EVOLUIR no tempo → linhas (a ordem temporal é contínua e o olho segue trajetória) ou área quando o total importa; DISTRIBUIR valores → histograma (forma) e box plot (resumo por grupo); RELACIONAR duas variáveis → dispersão; COMPOR um todo → barra empilhada 100% com poucas categorias ou tabela de partes; LOCALIZAR valor exato → tabela. REGRAS QUE MUDAM O GABARITO: (1) linhas pressupõem ordem — plotar categorias nominais como linha implica continuidade que não existe; (2) pizza/rosca só com poucas fatias de tamanhos bem distintos e sempre com o todo claro — 10 fatias próximas são ilegíveis; (3) empilhar mais de três séries torna as faixas do meio difíceis de comparar; (4) dispersão exige duas variáveis quantitativas (ou uma quantitativa e uma categórica com eixo de categoria); (5) box plot supõe leitor familiarizado com quartis — em público leigo, explicar ou preferir histograma por grupo. ESCOLHA também considera o público e a decisão: painel de operação pede destaque de exceções; relatório acadêmico pede distribuição completa. E o critério final é a pergunta — se o gráfico escolhido não responder à pergunta em uma frase, troque o gráfico, não a pergunta.",
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
                ]
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
                "conteudo": "DEFINIÇÃO E OBJETIVO: gráfico da DISTRIBUIÇÃO de uma variável quantitativa; divide o domínio em classes e desenha retângulos cuja área é proporcional à frequência de cada classe. DADO ADEQUADO: quantitativo (contínuo ou discreto com muitos valores). CONSTRUÇÃO: 1) ordenar os n valores e obter mínimo e máximo; 2) escolher o número de classes k — regra de Sturges: k ≈ 1 + 3,322 × log10(n); 3) largura h = (máximo − mínimo) ÷ k; 4) definir classes de amplitude igual com convenção [inferior, superior), a última incluindo o superior; 5) contar frequência absoluta (fi) de cada classe; 6) plotar com as classes no eixo x e a frequência no eixo y, BARRAS ENCOSTADAS (sem folga — a continuidade visual sinaliza que os intervalos se tocam). EXEMPLO NUMÉRICO COMPLETO (25 salários fictícios, didáticos): classes de R$ 500 — [1000,1500): fi = 6 (fr = 0,24); [1500,2000): fi = 9 (0,36); [2000,2500): fi = 5 (0,20); [2500,3000): fi = 3 (0,12); [3000,3500): fi = 2 (0,08). Σfi = 25 ✓ e Σfr = 1,00 ✓. Classe modal: [1500,2000), com 9 salários. Forma: assimétrica à direita (cauda alongada para valores altos). Média aparente estimada pelos pontos médios: (1250×6 + 1750×9 + 2250×5 + 2750×3 + 3250×2) ÷ 25 = 49.250 ÷ 25 = R$ 1.970. INTERPRETAÇÃO: centro, dispersão, picos (moda), vales e caudas; bimodalidade sugere dois grupos misturados. ERROS FREQUENTES: colocar folga entre as barras (transforma em gráfico de barras categórico); esquecer a unidade no eixo; afirmar que a mediana é a barra central (é preciso calcular). PEGADINHA DE CONCURSO: em histograma com classes de larguras diferentes, a frequência relativa não está na altura — está na ÁREA (use densidade); e a comparação entre dois histogramas só é legítima com a mesma largura de classe.",
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
                ]
              },
              {
                "id": "m8-u2-t1-s2",
                "titulo": "Densidade e o efeito da escolha dos intervalos",
                "objetivoAprendizagem": "Aluno calculará densidades e explicará como o número e os limites das classes alteram a leitura.",
                "conteudo": "DENSIDADE = frequência ÷ largura da classe. Ela torna comparáveis histogramas com larguras distintas e mantém a coerência de área: Σ(altura × largura) = n (densidade absoluta) ou = 1 (densidade relativa). No exemplo de 25 salários com largura R$ 500: densidades = 0,012; 0,018; 0,010; 0,006; 0,004 — e Σ(altura × 500) = 0,050 × 500 = 25 ✓ (confere com n). EFEITO DA ESCOLHA DOS INTERVALOS: (a) poucos classes escondem a forma — com 2 classes, uma distribuição bimodal vira 'metade para cada lado'; (b) muitas classes introduzem ruído — barras de altura 1 alternando com 3 sugerem picos que não existem; (c) deslocar os limites muda a classe modal: os mesmos valores com classes começando em 900 em vez de 1000 redistribuem frequências e podem trocar a moda de classe. REGRAS PRÁTICAS: declarar número e largura das classes; testar duas ou três divisões antes de publicar; usar largura igual sempre que possível (se não for possível, densidade); na comparação de grupos, mesma largura e escala comum. LIMITAÇÃO honesta: a forma do histograma é uma ESTIMATIVA da distribuição real, não a distribuição — amostras pequenas produzem formas instáveis. O laboratório de gráficos desta apostila permite variar o número de classes sobre os mesmos dados e observar a mudança de forma.",
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
                ]
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
                "conteudo": "OBJETIVO: mostrar EVOLUÇÃO ao longo do tempo e sustentar leitura de tendência. DADO ADEQUADO: uma (ou poucas) variável(is) quantitativa(s) medida(s) em intervalos regulares (dia, mês, trimestre). CONSTRUÇÃO: eixo x TEMPO ORDENADO com passo constante (ou com passo variável sinalizado); eixo y com unidade e, preferencialmente, base zero; pontos conectados por segmentos — a conexão sugere continuidade do processo entre medições. INTERPRETAÇÃO: tendência de longo prazo (subida/descida sustentada), sazonalidade (padrão que se repete em ciclos), rupturas (mudança de nível) e volatilidade. Variação absoluta = valor atual − valor anterior; variação percentual = (atual − anterior) ÷ anterior × 100. EXEMPLO NUMÉRICO COMPLETO (atendimentos fictícios, jan–abr): 120, 132, 115, 140. Fev: 132 − 120 = +12 (+10,00%). Mar: 115 − 132 = −17 (−12,88%). Abr: 140 − 115 = +25 (+21,74%). De jan a abr: (140 − 120) ÷ 120 = +16,67%. Média da série = 507 ÷ 4 = 126,75; mediana = (120 + 132) ÷ 2 = 126 — média acima da mediana, coerente com o valor máximo puxando a cauda. ERROS FREQUENTES: ORDENAR OS VALORES POR MAGNITUDE (destrói o tempo e inventa tendência); interpolar entre medições muito espaçadas como se houvesse dado; ocultar lacunas de coleta; eixo truncado sem aviso. PEGADINHA DE CONCURSO: linha exige ordem temporal — se o enunciado dá pontos fora de ordem, o primeiro passo é ordenar por data, não por valor. Reta de tendência (por mínimos quadrados) resume a direção geral, mas não substitui a leitura dos pontos.",
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
                ]
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
                "conteudo": "OBJETIVO: comparar MAGNITUDES entre categorias. Colunas (verticais) para categorias curtas; barras (horizontais) quando os nomes são longos (facilita leitura sem rotação). DADO ADEQUADO: uma variável quantitativa por categoria nominal/ordinal. REGRA DE OURO: LINHA DE BASE EM ZERO — a comparação é de comprimento/área, e comprimento só é proporcional quando começa na origem. ORDENAÇÃO: se o objetivo é ranquear, ordene decrescentemente (ou crescentemente); se as categorias têm ordem própria (faixas etárias), respeite-a; ordem alfabética só quando a consulta alfabética for o uso real. Ordenação afeta a leitura: a mesma tabela com barras decrescentes comunica ranking; embaralhada, esconde o pior resultado. EXEMPLO NUMÉRICO COMPLETO (atendimentos por unidade, fictício): A = 450, B = 320, C = 280, D = 190; total = 1.240. Participações: 450/1.240 = 36,3%; 320/1.240 = 25,8%; 280/1.240 = 22,6%; 190/1.240 = 15,3% (soma ≈ 100%). Razão entre extremos: 450 ÷ 190 ≈ 2,37 — a unidade A atende cerca de 2,4 vezes a D. ESCALAS ENGANOSAS: eixo de 60 a 500 tornaria a diferença entre A e D visualmente esmagadora; eixo de 0 a 1.240 (o total) espremeria todas as barras perto do zero — a escala deve cobrir os dados com folga modesta e começar em 0. ERROS: 3D, sombra, trocar cores sem significado, empilhar demais séries (as faixas do meio ficam incomparáveis). PEGADINHA: percentuais só se somam se o denominador for o mesmo (o total 1.240).",
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
                ]
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
                "conteudo": "OBJETIVO: explorar a RELAÇÃO entre DUAS variáveis quantitativas — cada ponto é um registro. LEITURA EM QUATRO CAMADAS: forma da nuvem (linear, curva, sem padrão), direção (associação positiva: sobem juntas; negativa: uma sobe, outra desce), força (próxima de r = ±1, forte; próxima de 0, fraca/inexistente) e exceções (outliers, agrupamentos ocultos). r DE PEARSON: mede associação LINEAR, entre −1 e +1; não mede causalidade nem associação não linear. RETA DE REGRESSÃO (mínimos quadrados): a reta que minimiza a soma dos quadrados das distâncias verticais dos pontos; serve para descrever a relação e para predição DENTRO do domínio observado. EXEMPLO NUMÉRICO COMPLETO (fictício): pares (x,y) = (1,2), (2,3), (3,5), (4,6), (5,8). Médias: x̄ = 3, ȳ = 4,8. Somas de desvios: Σ(x−x̄)(y−ȳ) = 15; Σ(x−x̄)² = 10; Σ(y−ȳ)² = 22,8. Logo r = 15 ÷ √(10 × 22,8) = 15 ÷ √228 ≈ 0,993 — associação positiva muito forte. Reta: inclinação = 15 ÷ 10 = 1,5; intercepto = 4,8 − 1,5 × 3 = 0,3; logo ŷ = 0,3 + 1,5x. CORRELAÇÃO ≠ CAUSALIDADE: a associação pode decorrer de variável oculta (temperatura explica consumo de sorvete E afogamentos), de direção reversa ou de coincidência amostral. REGRA DE OURO: nunca escrever 'X causa Y' com base apenas em r; escrever 'associação', indicar o tamanho do efeito e listar explicações alternativas. ERROS: extrapolar a reta para fora dos dados; esconder os pontos (mostrar só a reta); ignorar outliers que inflam r.",
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
                ]
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
                "conteudo": "OBJETIVO: resumir a distribuição de uma variável quantitativa (ou comparar distribuições entre grupos) com cinco números e exceções. ELEMENTOS: mínimo, primeiro quartil (Q1, 25%), mediana (50%), terceiro quartil (Q3, 75%) e máximo; a CAIXA vai de Q1 a Q3 e a linha interna marca a mediana; o INTERVALO INTERQUARTÍLICO (IIQ) = Q3 − Q1 e mede a dispersão central. BIGODES: segundo a convenção de Tukey, limites em Q1 − 1,5 × IIQ e Q3 + 1,5 × IIQ; o bigode vai até o MAIOR/MENOR valor DENTRO dos limites, e valores fora são plotados isoladamente como OUTLIERS. EXEMPLO NUMÉRICO COMPLETO (fictício): 2, 4, 6, 8, 10, 12, 50. Ordenado, n = 7. Por interpolação linear de percentis (método tipo 7, o padrão do R e do Excel QUARTILE.INC): Q1 = 5; mediana = 8; Q3 = 11; IIQ = 11 − 5 = 6. Limites: 5 − 1,5×6 = −4 e 11 + 1,5×6 = 20. Logo bigodes: 2 e 12; outlier: 50 (acima de 20). Média = 92 ÷ 7 ≈ 13,14, bem acima da mediana 8 — sinal de cauda à direita puxada pelo outlier. DIFERENÇAS ENTRE IMPLEMENTAÇÕES: (a) os quartis podem variar conforme o método de interpolação (tipo 7, tipo 6, arredondamento de posição), alterando Q1/Q3; (b) o múltiplo do IIQ não é universal (há softwares com 1,0; 1,5; 2,0); (c) há variações que estendem o bigode até o extremo absoluto. POR ISSO: declare a convenção usada ao publicar. ERROS: ler o bigode como mínimo/máximo absolutos; comparar caixas de convenções diferentes; tratar outlier como erro (às vezes é informação — o valor 50 pode ser legítimo e relevante). PEGADINHA: 'a distância entre Q1 e Q3' é o IIQ, não a amplitude total.",
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
                ]
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
                "conteudo": "MÉDIA (aritmética): soma dos valores ÷ número de valores. Usa todas as observações e a unidade original, mas é SENSÍVEL a extremos: um único valor distante puxa a média. MEDIANA: valor central do conjunto ordenado (com n par, a média dos dois centrais). Só usa a ordem, por isso é ROBUSTA a outliers — é a medida preferida para renda, tempos de espera e durações. MODA: valor mais frequente; pode não existir (valores todos distintos) ou ser múltipla (bimodal); é a única medida válida para variáveis categóricas nominais. EXEMPLO NUMÉRICO COMPLETO 1 (distribuição simétrica com moda): 2, 4, 4, 4, 5, 5, 7, 9 — média = 40 ÷ 8 = 5,0; mediana = (4 + 5) ÷ 2 = 4,5; moda = 4. EXEMPLO NUMÉRICO COMPLETO 2 (cauda à direita): 2, 4, 6, 8, 10, 12, 50 — média = 92 ÷ 7 ≈ 13,14; mediana = 8; moda inexistente (valores distintos). A média ficou muito acima da mediana porque o valor 50 puxa a cauda: para esse conjunto, a mediana descreve o caso típico. MÉDIA PONDERADA (fórmula padrão): média ponderada = Σ(valor × peso) ÷ Σpesos — ex.: notas 7 (peso 2), 5 (peso 3) e 9 (peso 1): (14 + 15 + 9) ÷ 6 = 38 ÷ 6 ≈ 6,33. REGRAS DE LEITURA: em distribuição simétrica, média ≈ mediana ≈ moda; em assimetria à direita, moda < mediana < média; à esquerda, a ordem se inverte. ARMADILHA: 'média dos pacientes' numa base com um registro de 900 anos (erro de digitação) é aritmética correta e conclusão errada — por isso média sempre pede conferência de extremos.",
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
                ]
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
                "conteudo": "Tendência central não basta: dois conjuntos com a mesma média podem ter realidades opostas. AMPLITUDE = máximo − mínimo — simples, mas depende só de dois valores e ignora todo o resto (sensível a outliers). VARIÂNCIA = média dos quadrados dos desvios em relação à média. Populacional: σ² = Σ(x − μ)² ÷ n. Amostral: s² = Σ(x − x̄)² ÷ (n − 1) — o divisor n−1 (correção de Bessel) compensa o fato de a média amostral ser estimada pelos próprios dados, consumindo um grau de liberdade; com n−1 a variância amostral fica sem viés como estimativa da populacional. DESVIO PADRÃO = raiz quadrada da variância; retorna à unidade original (minutos, R$), o que torna a interpretação direta. COEFICIENTE DE VARIAÇÃO = desvio padrão ÷ média × 100 — permite comparar dispersão relativa entre conjuntos com unidades ou magnitudes diferentes. EXEMPLO NUMÉRICO COMPLETO: 2, 4, 4, 4, 5, 5, 7, 9. Média = 5,0. Desvios: −3, −1, −1, −1, 0, 0, +2, +4. Quadrados: 9, 1, 1, 1, 0, 0, 4, 16 → Σ = 32. σ² = 32 ÷ 8 = 4,0 e σ = 2,0. s² = 32 ÷ 7 ≈ 4,5714 e s ≈ 2,1381. Amplitude = 9 − 2 = 7. CV (populacional) = 2,0 ÷ 5,0 = 40%. LEITURA: valores típicos distam cerca de 2 unidades da média; CV de 40% indica dispersão considerável frente à média. ERROS: dividir por n em dado amostral; comparar desvios-padrão de variáveis em unidades diferentes sem CV; concluir 'mais variável' apenas pela amplitude.",
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
                ]
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
                "conteudo": "PERCENTIL p é o valor tal que aproximadamente p% dos dados estão abaixo dele; QUARTIS são os percentis 25 (Q1), 50 (mediana) e 75 (Q3); DECIS são os percentis 10, 20, ... 90. MÉTODO DE POSICIONAMENTO (interpolação linear, tipo 7 — o padrão do R e do Excel QUARTILE.INC): com dados ordenados x1 ≤ ... ≤ xn, a posição de percentil p é (n − 1) × p + 1 (posição 1-based); se não cair em número inteiro, interpolar entre os vizinhos. EXEMPLO NUMÉRICO COMPLETO: 12, 18, 21, 25, 27, 30, 33, 38, 44, 60 (n = 10). P10: posição (9)(0,10) + 1 = 1,9 → 12 + 0,9 × (18 − 12) = 17,4. P25 (Q1): posição 3,25 → 21 + 0,25 × (25 − 21) = 22. P50 (mediana): posição 5,5 → 27 + 0,5 × (30 − 27) = 28,5. P75 (Q3): posição 7,75 → 33 + 0,75 × (38 − 33) = 36,75. P90: posição 9,1 → 44 + 0,1 × (60 − 44) = 45,6. IIQ = 36,75 − 22 = 14,75. INTERPRETAÇÃO CORRETA: 'P90 = 45,6' significa que 90% dos valores estão até 45,6 — NÃO que 90% dos dados são 45,6, e NÃO que 90% das pessoas sejam iguais a isso. LIMITAÇÃO: os quartis dependem do método de posicionamento (há outros métodos, com arredondamento de posição), o que altera levemente os valores — declare o método ao publicar.",
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
                ]
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
                "conteudo": "FORMAS. SIMÉTRICA: os dois lados espelham; média ≈ mediana ≈ moda. ASSIMÉTRICA À DIREITA (cauda longa para valores altos): moda < mediana < média — típico de renda, tempos de espera, custos. ASSIMÉTRICA À ESQUERDA: inversão da relação. BIMODAL: dois picos — normalmente dois grupos distintos misturados (ex.: espera de duas filas); investigar a fonte vale mais que calcular média geral. PLATICÚRTICA (caudas leves) e LEPTICÚRTICA (caudas pesadas) descrevem o peso dos extremos. VALORES EXTREMOS (outliers): pontos muito afastados do padrão. CRITÉRIOS OBJETIVOS: fora de Q1 − 1,5 × IIQ ou Q3 + 1,5 × IIQ (regra do box plot); ou, em distribuição aproximadamente normal, além de 3 desvios-padrão da média (regra empírica). DECISÃO: outlier NÃO é sinônimo de erro — investigue (erro de digitação? unidade trocada? caso real legítimo e informativo?). Se for erro, corrija na origem e registre; se for real, mantenha e use medida robusta (mediana, IIQ) ou transformação; se não houver como decidir, trate com as duas possibilidades e declare. REGRESSÃO À MÉDIA: extremos tendem a suavizar na próxima medição sem nenhuma causa especial — explicar melhora pior como se fosse efeito de política é erro clássico.",
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
                ]
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
                "conteudo": "CORRELAÇÃO é associação entre variáveis (medida, por exemplo, por r de Pearson); CAUSALIDADE é a afirmação de que intervir em X produz mudança em Y. Correlação é condição NECESSÁRIA, mas não SUFICIENTE para causalidade. QUATRO EXPLICAÇÕES para X e Y andarem juntos: (1) X causa Y; (2) Y causa X (direção reversa); (3) variável oculta Z causa as duas (confundimento — temperatura explica sorvete e afogamentos); (4) coincidência/erro amostral. CRITÉRIOS CLÁSSICOS de apoio à causalidade em estudos observacionais: TEMPORALIDADE (X antecede Y), FORÇA e CONSISTÊNCIA (associação repetida em amostras distintas), GRADIENTE (mais X, mais Y), PLAUSIBILIDADE (mecanismo conhecido) e EXPERIMENTO/AUSÊNCIA de confundente controlável (delineamento experimental com randomização é o que sustenta a inferência mais forte). CONCLUSÕES INDEVIDAS típicas: 'causa' com base em gráfico de dispersão; previsão por extrapolação de reta fora do domênio; comparar grupos diferentes e atribuir a diferença ao fator isolado; ignorar que r mede apenas associação LINEAR (r ≈ 0 não exclibe associação curva). LINGUAGEM CORRETA: 'associa-se', 'correlaciona-se com', 'acompanha-se de'; reservar 'causa' para evidência experimental ou argumento causal bem sustentado. O gráfico de dispersão desta apostila exibe, junto do r, aviso permanente de que correlação não implica causalidade.",
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
                ]
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
                "conteudo": "POPULAÇÃO é o conjunto de interesse; AMOSTRA é a parte observada. AMOSTRAGEM PROBABILÍSTICA garante chance conhecida e não nula de seleção para cada indivíduo: ALEATÓRIA SIMPLES (sorteio puro), ESTRATIFICADA (sortear dentro de subgrupos relevantes — região, faixa etária — para representar estratos), SISTEMÁTICA (a cada k-ésimo registro, com cuidado de não casar com ciclo) e POR CONGLOMERADOS (sortear grupos inteiros — unidades, escolas). AMOSTRAGEM NÃO PROBABILÍSTICA (conveniência, julgamento) é útil para diagnóstico rápido, mas NÃO permite inferência representativa. DUAS FONTES DE ERRO, que não se confundem: ERRO DE AMOSTRAGEM — flutuação esperada mesmo com amostra aleatória; medido por margem/intervalo e diminui com n maior. VIÉS — erro sistemático que não desaparece crescendo a amostra (amostra grande de gente errada continua errada). VIÉS CLÁSSICOS: SELEÇÃO (quem está na amostra difere do todo), NÃO-RESPOSTA (quem responde difere de quem não responde), SOBREVIVÊNCIA (só se observa quem permaneceu), MEDIÇÃO (instrumento ou entrevistador desviados), EXPECTATIVA do analista (confirmar a tese), SAZONALIDADE (coletar em período atípico) e REGRESSÃO À MÉDIA. FÓRMULA CLÁSSICA de tamanho amostral para proporção (nível 95%, margem de 5 p.p., p = 0,5 — cenário mais conservador): n = z² × p × (1 − p) ÷ e² = 3,8416 × 0,25 ÷ 0,0025 = 384,16 → arredonda para 385. LEITURA CRÍTICA: antes de acreditar num percentual, pergunte quem foi perguntado, quem não respondeu e como o instrumento foi feito.",
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
                ]
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
                "conteudo": "POWER BI é plataforma de business intelligence da Microsoft: ferramenta de modelação e autoria instalada (Power BI Desktop), serviço em nuvem para publicar e compartilhar painéis, e conectores a fontes de dados. POWER QUERY é o editor de preparação: extração das fontes e transformação por PASSOS REGISTRADOS (filtrar colunas, trocar tipos, agregar, mesclar, expandir) — os passos ficam documentados e são reexecutados a cada atualização, o que permite refazer a carga inteira sem retrabalho manual; é a materialização prática de ETL/ELT dentro da ferramenta. DAX (Data Analysis Expressions) é a linguagem de medidas e colunas calculadas. DOIS CONCEITOS FUNDAMENTAIS: CONTEXTO DE LINHA (cada linha da tabela) e CONTEXTO DE FILTRO (o recorte aplicado pelos visuais e filtros do relatório) — uma medida como SOMA(Valor) resulta diferente conforme o filtro ativo, porque é avaliada no contexto de cada visual. Exemplo conceitual de medida: 'ReceitaLiquida = Soma(Valor) − Soma(Desconto)' — calculada dinamicamente por unidade, mês ou categoria conforme o recorte. AGREGAÇÃO: BI moderno agrega medidas no momento da consulta; para volumes grandes, usa tabelas resumidas pré-agregadas (conceito de agregação prévia). DEPENDÊNCIA DE VERSÃO DECLARADA: recursos, limites de capacidade, volume de dados, publicação e governança variam entre edições e planos (gratuito, por usuário, corporativo) — este curso NÃO lista limites específicos porque mudam com as versões; confira a matriz de recursos vigente antes de afirmar em projeto. Nomes de função podem variar entre idiomas (ex.: Soma/SUM).",
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
                ]
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
                "conteudo": "TABLEAU é plataforma de visualização e análise. Tableau DESKTOP é a ferramenta de autoria instalada, de licença paga (com avaliação temporária oferecida pelo editor); Tableau PUBLIC é a edição gratuita, cuja publicação é em área pública (os arquivos ficam acessíveis a qualquer pessoa — incompatível com dado sensível); Tableau PREP cuida da preparação/limpeza com interface de passos. Tableau é conhecido pela exploração visual arrastada ('mostrar como deseja ver') e pelo uso de tabelas de planilha ou arquivos de dados como fonte. LOOKER STUDIO é ferramenta de painéis em navegador, com editor gratuito para uso básico e conectores a fontes de dados (planilhas, bancos, plataformas de anúncios e analytics) — parte dos conectores e capacidades depende da conta e do ecossistema de dados da organização, e há diferenças entre versões; declare a dependência antes de prometer. COMPARAÇÃO EM NÍVEL CONCEITUAL: Tableau Desktop oferece análise local e forte capacidade interativa, com licença; Looker Studio elimina instalação e custo inicial de autoria, ao custo de depender de navegador e de conectividade com as fontes. Para estudo e exercício didático, as duas permitem praticar os princípios deste módulo sem conta corporativa — mas recursos de publicação, governança, auditoria e limites de volume mudam conforme edição, plano e versão, e não devem ser afirmados sem conferência na documentação vigente. Regra prática de escolha: dado sensível não vai para publicação pública; trabalho efêmero pode usar edição gratuita; painel institucional exige governança e controle de acesso.",
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
                ]
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
                "conteudo": "MODELAGEM ANALÍTICA organiza dados para consulta de indicadores. ESQUEMA ESTRELA: uma tabela de FATOS no centro ligada a tabelas de DIMENSÕES. FATO: eventos transacionais, granulares, com medidas numéricas (venda, atendimento, pagamento) — cada linha representa um evento e a granularidade deve estar declarada (um atendimento por linha?). DIMENSÕES: contextos de análise — Tempo (data, mês, trimestre), Local (unidade, região), Categoria (serviço, produto), Agente — com chaves simples e atributos descritivos; dimensões enxutas (SCD é conceito avançado: mudanças de atributo ao longo do tempo) e FATOS finos. MEDIDA vs COLUNA CALCULADA: medida é cálculo avaliado no contexto de cada visual (dinâmica, ocupa pouco espaço); coluna calculada é materializada linha a linha (útil em chaves e atributos, ocupa espaço). FILTROS: contexto de filtro do relatório/visual alimenta as medidas; filtros em dimensões cortam fatos correspondentes — por isso o modelo deve permitir que o leitor recorte sem quebrar o total. AGREGAÇÕES PRÉVIAS: pré-agrupar (por dia e unidade, por exemplo) reduz leitura em volumes grandes; exige cuidado para não perder granularidade necessária. ARMADILHA CLÁSSICA: medir por contagem de LINHAS do fato quando há duplicidade de chave (contagem inflada) — usar contagem distinta quando a entidade importa.",
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
                ]
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
                "conteudo": "CRITÉRIOS de comparação (todos declaráveis sem citar preço): 1) CUSTO DE LICENÇA (autoria, publicação, visualização — frequentemente licenciados separadamente); 2) CUSTO DE COMPARTILHAMENTO (muitas ferramentas são gratuitas para criar e cobradas para publicar/colaborar; Tableau Public é gratuito com publicação PÚBLICA — incompatível com dado sensível); 3) CAPACIDADE DE DADOS (volume, tipo de fonte, atualização); 4) GOVERNANÇA E AUDITORIA (controle de acesso, registro, certificação de dados); 5) DEPENDÊNCIA DE CONECTIVIDADE (ferramenta web exige rede; desktop permite trabalho offline); 6) PORTABILIDADE (arquivos proprietários dificultam migração; CSV/parquet facilitam); 7) CURVA DE APRENDIZAGEM E SUPORTE (comunidade, documentação, suporte contratado). CENÁRIOS: ESTUDO/PESSOAL — ferramenta gratuita com publicação pública e dados fictícios; ESCRITÓRIO COM DADO SENSÍVEL — ferramenta local ou serviço com controle de acesso, sem área pública; GESTÃO INSTITUCIONAL — plataforma comercial com governança, auditoria e suporte, salvo decisão documentada em contrário; SEM REDE — autoria local. REGRA FINAL: a escolha é pelo USO, não pela marca — e todo comparativo deve declarar edição, versão e data, porque o mercado de ferramentas muda rápido. Atenção à honestidade: não afirmar limites numéricos de volume ou planos sem fonte conferida.",
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
                ]
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
                "conteudo": "Storytelling com dados é a organização de evidência em uma sequência que termina em DECISÃO. QUATRO MOVIMENTOS. CONTEXTO: o que está em jogo, para quem, qual a régua de referência (meta, período, comparativo) — em poucas frases, sem história longa. CONFLITO: a tensão que exige decisão — meta não alcançada, ruptura de tendência, risco materializado, oportunidade perdida. Conflito sem ameaça/oportunidade não motiva ação. DESCOBERTA: a análise que explica o conflito — o gráfico certo, com a leitura narrada (diga o que o leitor deve ver; não deixe o gráfico 'falar sozinho'). RECOMENDAÇÃO: a ação proposta, com responsável, prazo, custo e o que acontece se não for feita. REGRAS PRÁTICAS: uma mensagem por gráfico; título com a mensagem; começar pela conclusão principal e abrir detalhes em anexo; alinhar cada slide/objeto a uma frase da narrativa. TESTE DA FRASE: se a apresentação inteira couber em 'por causa de X, devemos fazer Y até Z', a narrativa está pronta; se só couber em 'apresentamos os números', não há história. LIMITES: a narrativa não pode inverter a evidência — se os dados mostram efeito pequeno e incerto, a recomendação deve refletir isso; persuadir não é distorcer.",
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
                ]
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
                "conteudo": "PÚBLICO define profundidade e vocabulário: equipe técnica pede detalhe de método, distribuição e incerteza; diretoria pede poucos números, comparação com meta e implicação de custo; cidadão/usuário pede linguagem direta, período e fonte. Antes de produzir qualquer visual, responda: PARA QUEM e QUE DECISÃO este material apoia? Sem decisão identificada, o painel vira vitrine. SELEÇÃO DE MÉTRICAS: poucas (normalmente entre 3 e 7 por painel), cada uma com DEFINIÇÃO FORMAL (fórmula, numerador, denominador, período) — disputa de número quase sempre é disputa de definição. Combinar MÉTRICAS DE RESULTADO (lagging: o que já aconteceu — receita realizada, atendimentos concluídos) com MÉTRICAS DE PROCESSO (leading: o que antecede o resultado — prazo de resposta, fila de entrada) permite agir antes do resultado consolidar. EVITAR MÉTRICAS DE VAIDADE (vanity metrics): números bonitos que ninguém usa para decidir (visualizações de página, total de cadastros sem taxa de conclusão). PARA CADA MÉTRICA: meta ou referência, tendência (linha curta) e dono responsável. Teste final: 'o que farei diferente se este número mudar?' — se a resposta for nenhuma, tire a métrica do painel.",
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
                ]
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
                "conteudo": "TODA ESTIMATIVA tem incerteza; comunicá-la é credibilidade, não fraqueza. FORMAS DE COMUNICAR: rótulo de estimativa ('≈', 'estimativa preliminar'), margem de erro/intervalo quando houver amostra (com método declarado), cenários (otimista/realista/pessimista) quando o futuro é previsível em faixa, e nota de dado provisório quando a base ainda pode mudar. LIMITAÇÕES A DECLARAR: cobertura (quem/que período os dados representam), coleta (como foram obtidos), transformações (o que foi tratado/excluído) e derivação (o que foi estimado). INTEGRIDADE — regras inegociáveis: (1) eixos e escalas declarados, sem truncamento encoberto; (2) SEM CHERRY-PICKING de período (escolher só o intervalo favorável); (3) mesma base de cálculo durante todo o relato (trocar definição no meio é fraude analítica); (4) fonte, período e data de extração sempre visíveis; (5) dados fictícios ou simulados ROTALDOS como tal; (6) divergência conhecida entre fontes exibida, não escondida. ERRO COMUM: apresentar estimativa ponto a ponto como fato ('vai chegar a 1.200') — corrigido por 'cenário projetado entre 1.050 e 1.300, conforme premissas X e Y'. A régua: se o leitor descobrir depois a incerteza que você omitiu, tudo o mais fica desacreditado.",
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
                ]
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
                "conteudo": "PAINÉIS DE GESTÃO PÚBLICA: indicadores com meta orçamentária ou de serviço, prazos, cobertura territorial e transparência ativa (fonte, período, definição pública do indicador); público variado (cidadão + imprensa + controladoria), o que exige linguagem direta e dados auditáveis. PAINÉIS DE GESTÃO PRIVADA: foco em receita, custo, satisfação e produtividade, com segmentação por unidade/cliente e leitura de margem; velocidade e confidencialidade pesam mais. ELEMENTOS COMUNS: poucos indicadores, exceções em destaque (o que foge da meta), tendência curta, atualização declarada e caminho de drill-down (do agregado ao detalhe) sempre que o gestor puder agir no detalhe. ESTUDO DE CASO (dados FICTÍCIOS, criados para exercício — não são estatística oficial): central de serviços; série mensal de atendimentos 120, 132, 115, 140 (jan–abr); unidades A = 450, B = 320, C = 280, D = 190 (total 1.240); distribuição de esperas 2, 4, 6, 8, 10, 12, 50 minutos. ANÁLISE: (1) LINHAS mostra alta de 10,00%, queda de 12,88% e alta de 21,74%, com recuperação; média 126,75 e mediana 126. (2) BARRAS ordenadas revelam concentração: A = 36,3% do total, e A/D ≈ 2,37. (3) BOX PLOT das esperas: Q1 = 5, mediana = 8, Q3 = 11, IIQ = 6, limites −4/20, outlier 50 — a fila típica é ágil, mas existe cauda extrema. (4) HISTOGRAMA de esperas com classes de largura 5 em 2..50 mostra a cauda à direita. (5) DISPERSÃO entre volume da unidade e espera média (se houver dados por unidade) testa a hipótese 'mais volume, mais espera'. RECOMENDAÇÃO FUNDADA: investigar o procedimento responsável pela cauda (valor 50), priorizar na unidade de maior volume, revisar em 60 dias. INCERTEZA DECLARADA: todos os números são fictícios e as amostras são pequenas — a recomendação é propor investigação, não prometer resultado.",
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
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
