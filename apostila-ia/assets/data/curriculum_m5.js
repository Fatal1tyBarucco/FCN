/* curriculum_m5.js — Módulo 5: Inteligência Artificial
 * Conteúdo didático real (Escrita.txt, Seção 6 — Módulo 5), no MESMO esquema de
 * curriculum_m3.js: unidades -> topicos -> subtopicos com objetivoAprendizagem,
 * conteudo, exemplos (tipo introducao/aplicacao/erro) e exercicios
 * (tipo certos_erro/multipla).
 *
 * REGRAS DE HONESTIDADE APLICADAS A ESTE MÓDULO:
 * - Nenhum número estatístico, benchmark ou capacidade específica de ferramenta
 *   comercial é afirmado como fato verificado; exemplos comprovados (IA clássica
 *   em operação cotidiana) são distinguidos de hipóteses ilustrativas.
 * - Conceitos consagrados (overfitting, Transformer, atenção, embeddings,
 *   difusão, RAG) são descritos em nível conceitual, sem atribuir desempenho
 *   quantitativo a produtos reais.
 * - Não há citação de legislação neste módulo (legislação é tratada em 4.4 e
 *   no Módulo 6); a LGPD aparece apenas como referência de governança, com os
 *   mesmos dispositivos já verificados em referencias/referencias-verificadas.md.
 */

const curriculumM5 = {
  "modulo-5": {
    "titulo": "INTELIGÊNCIA ARTIFICIAL",
    "unidades": [
      {
        "id": "modulo-5-unidade-1",
        "titulo": "5.1 Fundamentos de IA",
        "topicos": [
          {
            "id": "modulo-5-unidade-1-topico-1",
            "titulo": "IA, sistemas baseados em regras, aprendizado de máquina e aprendizado profundo",
            "subtopicos": [
              {
                "id": "m5-u1-t1-s1",
                "titulo": "Abordagens de inteligência artificial: regras, aprendizado de máquina e deep learning",
                "objetivoAprendizagem": "Aluno distinguirá sistemas baseados em regras, aprendizado de máquina e aprendizado profundo pela origem do conhecimento e pelos requisitos de dados.",
                "conteudo": "Inteligência artificial é o campo que estuda sistemas capazes de executar tarefas que associamos a capacidades humanas (percepção, linguagem, decisão, previsão). Sistemas baseados em regras: o conhecimento é escrito por especialistas em forma de regras (SE condição ENTÃO ação); são transparentes e determinísticos, mas frágeis diante de exceções e caros de manter quando o volume de regras cresce. Aprendizado de máquina (machine learning): o conhecimento é INFERIDO dos dados por algoritmos que ajustam parâmetros para minimizar um erro — o programador define o procedimento, os dados definem o comportamento. Aprendizado profundo (deep learning): subcampo do aprendizado de máquina que usa redes neurais com muitas camadas, capazes de aprender representações hierárquicas diretamente dos dados brutos (texto, imagem, áudio), reduzindo a necessidade de engenharia manual de atributos ao custo de mais dados, mais processamento e menor transparência. Relação de subconjunto: deep learning ⊂ aprendizado de máquina ⊂ inteligência artificial. Critério prático de escolha: quando as regras são conhecidas e estáveis, regras são mais auditáveis; quando o padrão é complexo e há dados rotulados abundantes, aprendizado de máquina tende a superar regras manuais.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Sistema de folha de ponto que rejeita registro sem aprovação do chefe: qual abordagem?", "resposta": "Sistema baseado em regras: a regra ('sem aprovação, rejeitar') é conhecida, estável e deve ser auditável — não faz sentido treinar modelo estatístico para isso." },
                  { "tipo": "aplicacao", "enunciado": "O órgão quer classificar e-mails de atendimento em assuntos sem padrão fixo. Qual abordagem e por quê?", "resposta": "Aprendizado de máquina supervisionado: os padrões são variáveis e há exemplos históricos rotulados; regras manuais cobririam poucos casos e quebrariam com o tempo. Requisito: conjunto de treinamento representativo e reavaliação periódica." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Todo sistema de inteligência artificial aprende dos dados.'", "correcao": "Errado. Sistemas baseados em regras não aprendem: o conhecimento é escrito e versionado por humanos; só os modelos de aprendizado de máquina extraem conhecimento dos dados." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Deep learning é um subcampo do aprendizado de máquina.", "resposta": "Certo. Deep learning usa redes neurais profundas dentro do campo do aprendizado de máquina, que por sua vez está dentro da inteligência artificial." },
                  { "tipo": "multipla", "enunciado": "Quando um sistema de regras é preferível a um modelo aprendido? A) Quando há milhões de exemplos rotulados; B) Quando a regra é conhecida, estável e exige auditoria; C) Quando o padrão é invisível a olho nu; D) Quando falta processamento.", "resposta": "B" }
                ]
              },
              {
                "id": "m5-u1-t1-s2",
                "titulo": "Dados, atributos, modelos, parâmetros e inferência",
                "objetivoAprendizagem": "Aluno mapeará o vocabulário do ciclo do aprendizado (dados, atributos, alvo, modelo, parâmetros, inferência) para uma situação concreta.",
                "conteudo": "Dados: registros das observações (linhas = exemplos; colunas = atributos). Atributos (features) são as variáveis descritivas usadas como entrada; variável-alvo (rótulo) é o que o modelo deve prever, quando existe. Modelo é a estrutura matemática com parâmetros ajustáveis (por exemplo, os pesos de uma rede neural ou os coeficientes de uma regressão); hiperparâmetros são as configurações que controlam o aprendizado (taxa de aprendizado, profundidade, tamanho do lote) e não são aprendidos dos dados. Treinamento é o ajuste dos parâmetros para minimizar o erro em função de exemplo; inferência é a aplicação do modelo treinado para prever um novo caso. Exemplo canônico: priorizar a fila de análise de requerimentos — atributos (tipo de requerimento, área, documentação anexa, histórico), alvo (aprovado em X dias), modelo (árvore ou regressão), parâmetros (pesos aprendidos), inferência (priorizar fila para triagem humana). Conceito crítico: modelo aprende padrões estatísticos dos dados, não 'entende' o mundo; quando a realidade muda (conceito drift), o modelo continua a operar com o antigo padrão até ser reavaliado. Dados de qualidade (completos, consistentes, representativos) valem mais que modelo sofisticado sobre dados ruins — a maioria dos fracassos práticos começa na coleta e na preparação.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Numa planilha de 10 mil linhas (uma por requerimento) com 12 colunas, quais são dados, atributos e alvo?", "resposta": "Dados: as 10 mil observações. Atributos: as 11 colunas descritivas (tipo, área, anexos etc.). Alvo: a coluna que se quer prever (ex.: 'analisado em até 5 dias' — sim/não)." },
                  { "tipo": "aplicacao", "enunciado": "Equipe ajusta 'épocas de treinamento' e 'taxa de aprendizado'. Esses são parâmetros ou hiperparâmetros?", "resposta": "Hiperparâmetros: controlam o processo de aprendizado e são definidos fora do loop de ajuste (por busca e validação). Os parâmetros (pesos) são ajustados automaticamente pelo otimizador." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Modelo com mais parâmetros é sempre melhor previsor.'", "correcao": "Errado. Mais parâmetros aumentam a capacidade de memorizar o ruído do treinamento (overfitting); desempenho real é medido em dados nunca vistos." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Hiperparâmetros são aprendidos automaticamente durante o treinamento junto com os pesos.", "resposta": "Errado. Hiperparâmetros (taxa de aprendizado, profundidade, tamanho do lote) são definidos externamente e ajustados por validação; os pesos é que são aprendidos." },
                  { "tipo": "multipla", "enunciado": "Aplicar modelo treinado a um caso novo para obter previsão é: A) treinamento; B) inferência; C) rotulagem; D) segmentação.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-5-unidade-1-topico-2",
            "titulo": "Treinamento, validação, teste, generalização e limitações",
            "subtopicos": [
              {
                "id": "m5-u1-t2-s1",
                "titulo": "Treinamento, validação e teste",
                "objetivoAprendizagem": "Aluno justificará a separação em três conjuntos e atribuirá a cada conjunto um papel correto no ciclo de desenvolvimento.",
                "conteudo": "Os dados são separados em, no mínimo, três conjuntos disjuntos. Treinamento: nele os parâmetros são ajustados. Validação: usado durante o desenvolvimento para comparar variantes, escolher hiperparâmetros e decidir paradas — não participa do ajuste dos pesos. Teste: conjunto vedado, usado uma única vez ao final para estimar o desempenho em dados nunca vistos; reutilizá-lo repetidamente transforma-o em conjunto de validação e contamina a avaliação. Regra geral: proporções como 60/20/20 ou 70/15/15 são didáticas, não dogmáticas; com poucos dados, usa-se validação cruzada (divisões repetidas) em vez de um único corte. Exigências adicionais: dividir por unidade correta (não misturar registros do mesmo indivíduo ou do mesmo período entre treino e teste — vazamento temporal); manter a mesma distribuição do alvo nos conjuntos; e nunca treinar com informação derivada do futuro. Avaliação final deve refletir o uso real: se o modelo atuar em dados desbalanceados, a métrica de teste deve mostrar isso.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Por que medir o desempenho no próprio conjunto de treinamento é enganoso?", "resposta": "O modelo já viu aqueles exemplos: o erro medido subestima o erro real, porque inclui memória dos dados. O desempenho que interessa é em dados nunca vistos (validação/teste)." },
                  { "tipo": "aplicacao", "enunciado": "Previsão de demanda mensal: como separar os dados corretamente?", "resposta": "Separação temporal: treinar com meses anteriores, validar com meses seguintes e testar com o período mais recente ainda não usado. Emular o futuro com dados passados é o único modo honesto de avaliação para séries temporais." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Basta dividir 80/20 para obter avaliação confiável.'", "correcao": "Errado como garantia: depende da independência dos registros e da representatividade; com dados agrupados ou temporais, divisão aleatória simples vaza informação e infla a métrica." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) O conjunto de teste pode ser consultado várias vezes durante o ajuste de hiperparâmetros.", "resposta": "Errado. Consulta repetida transforma o teste em validação e contamina a avaliação; o teste fica vedado até a decisão final." },
                  { "tipo": "multipla", "enunciado": "Conjunto de validação serve para: A) ajustar pesos; B) comparar variantes e escolher hiperparâmetros; C) publicar resultado oficial; D) coletar novos dados.", "resposta": "B" }
                ]
              },
              {
                "id": "m5-u1-t2-s2",
                "titulo": "Generalização, overfitting e underfitting",
                "objetivoAprendizagem": "Aluno diagnosticará overfitting e underfitting a partir de curvas de desempenho e indicará correções adequadas a cada caso.",
                "conteudo": "Generalização é a capacidade de ir bem em dados nunca vistos — o objetivo real do aprendizado. Overfitting (superajuste): o modelo memoriza particularidades e ruído do treinamento; sintoma clássico: erro de treino muito menor que o de validação. Causas: modelo complexo demais para o volume de dados, treino prolongado, atributos irrelevantes, vazamento de informação. Correções: mais dados, regularização, simplificação do modelo, seleção de atributos, parada antecipada. Underfitting (subajuste): o modelo é simples demais para captar o padrão; sintoma: erro alto tanto no treino quanto na validação. Correções: modelo mais expressivo, melhores atributos, mais treinamento. Relação viés-variância: viés alto = erro sistemático por simplificação excessiva; variância alta = sensibilidade excessiva às flutuações da amostra; a fronteira do bom modelo equilibra os dois. Diagnóstico correto exige os dois erros: só comparar com o treinamento leva a conclusões invertidas.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Treino com 2% de erro e validação com 31% de erro. Diagnóstico?", "resposta": "Overfitting típico: o modelo decorou o treinamento e não generaliza. Ações: regularizar, reduzir complexidade ou obter mais dados — não adianta treinar mais." },
                  { "tipo": "aplicacao", "enunciado": "Modelo de triagem tem treino 28% e validação 29%. O que isso indica e o próximo passo?", "resposta": "Underfitting: falta de capacidade ou de atributos úteis. Próximo passo: usar modelo mais expressivo ou enriquecer atributos (ex.: histórico do requerente, completude documental), reavaliando em validação." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Erro de treinamento baixo prova que o modelo está bom.'", "correcao": "Errado. Baixo erro de treino pode ser overfitting; a prova de qualidade é desempenho em validação/teste, representativos do uso real." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Aumentar a complexidade do modelo é correção adequada para underfitting.", "resposta": "Certo. Underfitting indica insuficiência de capacidade ou de atributos; mais expressividade ajuda — desde que validada para não migrar a overfitting." },
                  { "tipo": "multipla", "enunciado": "Sinal de overfitting: A) treino e validação altos e próximos; B) treino muito menor que validação; C) validação menor que treino; D) erro constante em ambos.", "resposta": "B" }
                ]
              },
              {
                "id": "m5-u1-t2-s3",
                "titulo": "Viés, variância, explicabilidade e limitações",
                "objetivoAprendizagem": "Aluno identificará fontes de viés em dados, relacionará explicabilidade a exigências de auditoria e apontará limites inerentes de modelos estatísticos.",
                "conteudo": "Viés de modelo: erro sistemático do ajuste (modelos simplistas). Viés de dados: distorção da amostra em relação à população (ex.: base histórica só de um segmento do serviço) — causa frequente de modelo bom em laboratório e injusto ou inútil em produção. Viés de medição: o rótulo mede errado a realidade (ex.: registrar 'fila resolvida' como se fosse 'pedido atendido'). Variância: instabilidade do modelo ante pequenas mudanças nos dados de treino. Explicabilidade: capacidade de justificar a saída do modelo com fatores compreensíveis; é exigência prática em serviços públicos — decisão automatizada que afeta direitos precisa de trilha de justificativa e de via de revisão humana. Técnicas de apoio: análise de importância de atributos, casos de referência e contrafactuais ('a decisão mudaria se X fosse diferente'). Limites inerentes: modelos aprendem correlações, não causalidade; desempenho passado não garante futuro; incerteza raramente é espontaneamente comunicada; e nenhuma métrica global substitui análise de erro por subgrupo quando o alvo afeta pessoas. Governança: registrar versão do modelo, dados de treino e data de avaliação — sem isso, reprodutibilidade e auditoria são impossíveis.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Modelo de priorização treinado com dados de uma região rica avalia mal na periférica. Que tipo de viés?", "resposta": "Viés de dados (amostra não representativa da população atendida). A correção exige dados das subpopulações e avaliação por subgrupo — não apenas média global." },
                  { "tipo": "aplicacao", "enunciado": "Decisão automatizada negou benefício. Que trilha o órgão deve manter para permitir revisão?", "resposta": "Versão do modelo, data, atributos de entrada usados, saída/ranking, fatores principais da decisão, limite aplicado e registro de intervenção humana — permitindo reprocessar e justificar, e atendendo ao dever de segurança e responsabilização (art. 46 da LGPD — verificado)." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Se a acurácia global é alta, o modelo não precisa de análise por subgrupos.'", "correcao": "Errado. Métrica global mascara erros concentrados em subgrupos (ex.: um segmento de cidadãos); quando a decisão afeta pessoas, o erro deve ser examinado por subgrupo." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Modelo aprende causalidade sempre que o volume de dados é grande.", "resposta": "Errado. Volume grande não converte correlação em causalidade; identificação causal exige desenho experimental ou métodos específicos." },
                  { "tipo": "multipla", "enunciado": "Distorção porque a amostra não representa a população é: A) viés de dados; B) overfitting; C) drift conceitual; D) ruído aleatório.", "resposta": "A" }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-5-unidade-2",
        "titulo": "5.2 Aprendizado de máquina",
        "topicos": [
          {
            "id": "modulo-5-unidade-2-topico-1",
            "titulo": "Paradigmas de aprendizado",
            "subtopicos": [
              {
                "id": "m5-u2-t1-s1",
                "titulo": "Aprendizado supervisionado: classificação e regressão",
                "objetivoAprendizagem": "Aluno identificará quando o problema é de classificação ou de regressão e elegerá métrica compatível com a finalidade.",
                "conteudo": "No supervisionado, o modelo aprende a partir de pares (entrada, saída desejada) — exige rótulos. Classificação: a saída é uma categoria (aprovar/não aprovar, tipo de requerimento). Regressão: a saída é um valor contínuo (quantidade esperada de demanda, tempo de análise em horas). Exemplos de algoritmos: para classificação, regressão logística e árvores de decisão; para regressão, regressão linear e árvores de regressão — o algoritmo é escolhido em função do tipo de alvo, do tamanho da base e da necessidade de explicabilidade. Erro decisório: classificar um problema contínuo como categórico perde informação (arredondar tempo de fila em categorias esconde magnitude); regressão aplicada a classe binária exige limiar de corte, introduzindo escolha de política (quanto erro do tipo II é aceitável?). A métrica deve acompanhar o tipo: acurácia/F1/precisão/recall para classificação; erro médio absoluto, raiz do erro quadrático médio e R² para regressão. Nomenclatura de prova: 'variável-alvo' é o que se prevê; confundir alvo com atributo de entrada (ex.: usar o resultado do futuro como atributo) é vazamento de dados.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Prever se um requerimento será protocolado como 'pendente' ou 'deferido' é classificação ou regressão?", "resposta": "Classificação: a saída é categórica (pendente/deferido). Se o alvo fosse 'dias até a decisão', seria regressão." },
                  { "tipo": "aplicacao", "enunciado": "Modelo de regressão prevê dias úteis de análise; a operação quer 'sim/não cabe no prazo de 10 dias'. Como converter?", "resposta": "Aplicar limiar sobre a previsão contínua (≤ 10 dias = sim), declarando explicitamente a escolha do limiar e medindo impacto de classificações erradas dos dois tipos — a conversão é decisão de política, não detalhe técnico." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Para problema binário, basta um modelo de regressão com corte em 0,5.'", "correcao": "Reduz a rigor: é possível, mas 0,5 é convenção, não necessidade; o corte deve ser definido pelo custo dos erros e pela distribuição das previsões — e classificadores próprios (logística, árvores) costumam calibrar melhor as probabilidades." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Prever o valor de um imóvel é problema de regressão.", "resposta": "Certo. A saída é numérica contínua; métricas adequadas são MAE, RMSE e R²." },
                  { "tipo": "multipla", "enunciado": "Qual alvo define problema de classificação? A) dias até conclusão; B) valor em reais; C) categoria de assunto; D) percentual de ocupação.", "resposta": "C" }
                ]
              },
              {
                "id": "m5-u2-t1-s2",
                "titulo": "Aprendizado não supervisionado: agrupamento e redução de dimensionalidade",
                "objetivoAprendizagem": "Aluno distinguirá agrupamento de redução de dimensionalidade e avaliará criticamente a validade dos grupos encontrados.",
                "conteudo": "No não supervisionado, não há alvo: o objetivo é descobrir estrutura nos dados. Agrupamento (clustering) partitions exemplos em grupos com semelhança interna — ex.: segmentar demandas por padrão de comportamento para dimensionar equipes. Métrica interna de qualidade compara coesão (quão próximos os elementos de um grupo) e separação (quão distantes os grupos). Redução de dimensionalidade diminui o número de atributos preservando informação relevante — usada para visualizar alta dimensionalidade, remover ruído e reduzir custo de treino; cuidado: componentes resultantes perdem interpretação direta. Cuidados críticos: 1) número de grupos raramente é óbvio — resultados devem ser testados com métrica interna E validade externa (os grupos fazem sentido para quem opera o serviço?); 2) algoritmos sempre retornam grupos, mesmo em dados sem estrutura — 'achar padrão' não é prova de padrão existir; 3) escala dos atributos domina a distância — padronização é pré-requisito. Diferença de prova: supervisionado aprende pares rotulados; não supervisionado infere estrutura; rotulagem manual posterior transforma descoberta em base para supervised.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Milhares de chamados de atendimento sem categorias definidas. Que tarefa não supervisionada é natural?", "resposta": "Agrupamento por conteúdo do chamado, para descobrir temas recorrentes; os grupos servem para propor taxonomia e dimensionar filas — a validação é com especialistas do atendimento." },
                  { "tipo": "aplicacao", "enunciado": "Dataset com 80 atributos de desempenho de equipes. Qual papel da redução de dimensionalidade?", "resposta": "Comprimir para 2-3 dimensões para visualização e remoção de ruído/redundância (atributos correlacionados), facilitando análise — mantendo clareza de que os eixos sintéticos não são atributos originais interpretáveis." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'O algoritmo encontrou 5 grupos, logo existem 5 perfis reais de usuário.'", "correcao": "Errado. O agrupamento é uma hipótese dependente de parâmetros e escala; exige validação externa (sentido operacional, estabilidade em nova amostra) antes de virar decisão." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Agrupamento exige dados rotulados para treinar.", "resposta": "Errado. Agrupamento é não supervisionado: opera sem alvo rotulado; rótulos só entram na avaliação externa, se disponíveis." },
                  { "tipo": "multipla", "enunciado": "Coesão alta e separação baixa indicam: A) grupos bem definidos; B) grupos sobrepostos/fracos; C) vazamento de dados; D) overfitting de classificador.", "resposta": "B" }
                ]
              },
              {
                "id": "m5-u2-t1-s3",
                "titulo": "Aprendizado por reforço",
                "objetivoAprendizagem": "Aluno explicará o ciclo agente-ambiente-recompensa e identificará aplicações e riscos de uso sem supervisão humana.",
                "conteudo": "No aprendizado por reforço, um agente toma ações em um ambiente e recebe sinais de recompensa (ou punição) que maximizam o retorno ao longo do tempo — sem rótulo por ação individual: a avaliação é do resultado acumulado. Conceitos: estado, ação, política (mapeamento estado → ação), recompensa, exploração x aproveitamento (explorar alternativas novas x usar o que já funciona). Exemplos didáticos de aplicação: roteamento de fila, alocação de recursos, simulações de operação — todos com ambientes de teste controlados. Risco central em serviço público: o agente otimiza a RECOMPENSA especificada, não a intenção humana; se a métrica proxy for mal definida (ex.: 'minimizar tempo de atendimento' sem qualidade), o agente encontrará atalhos indesejáveis — o problema do alinhamento da métrica. Por isso, decisões que afetam cidadãos não devem ser delegadas a agentes sem supervisão, limites de ação e revisão humana; política de avaliação em ambiente simulado antes de operação real.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Em aprendizado por reforço, quem dá o 'rótulo'?", "resposta": "Ninguém rotula cada ação: o ambiente devolve recompensa acumulada; o agente ajusta a política para maximizar o retorno esperado." },
                  { "tipo": "aplicacao", "enunciado": "Agente otimiza 'minimizar tempo de triagem' e passa a encerrar casos sem verificar documentação. O que houve?", "resposta": "Alinhamento defeituoso da métrica: a recompensa proxy (tempo) foi maximizada às custas da qualidade. Correção: incluir indicadores de qualidade/correção na recompensa, adicionar restrições e supervisão humana amostral." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Agente de reforço aprende a intenção do gestor automaticamente.'", "correcao": "Errado. Ele aprende a recompensa formalizada; qualquer divergência entre métrica e intenção vira comportamento indesejado — a intenção precisa ser traduzida em função de recompensa e limites verificáveis." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Exploração significa testar ações novas ainda pouco conhecidas.", "resposta": "Certo. Exploração (exploration) coleta informação sobre alternativas; aproveitamento (exploitation) usa o que já se sabe ser bom — o equilíbrio entre as duas é decisão central do método." },
                  { "tipo": "multipla", "enunciado": "Risco típico de reforço sem supervisão: A) demora de convergência; B) otimização da métrica proxy às custas da intenção; C) necessidade de GPU; D) uso de dados rotulados.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-5-unidade-2-topico-2",
            "titulo": "Preparação de dados: atributos, separação e desbalanceamento",
            "subtopicos": [
              {
                "id": "m5-u2-t2-s1",
                "titulo": "Rotulagem, atributos, variável-alvo e engenharia de atributos",
                "objetivoAprendizagem": "Aluno descreverá o processo de rotulagem com critérios e aplicará engenharia de atributos sem contaminar o alvo.",
                "conteudo": "Rotulagem é a atribuição da saída desejada a cada exemplo; sua qualidade depende de critério escrito, treinamento de rotuladores e conferência de concordância (duas pessoas independentes concordam?) — rótulo ambíguo ensina ambiguidade. Atributos devem estar disponíveis no momento da decisão: um atributo só pode existir na produção se existir no instante em que a previsão será feita. Engenharia de atributos cria variáveis de entrada a partir das brutas (taxa de completude de documentos, dias desde o último contato, contagem de ocorrências), frequentemente com mais valor que trocar de algoritmo. Regras de ouro: 1) nenhum atributo derivado do resultado futuro (vazamento); 2) consistência temporal (mesma transformação em treino e produção); 3) documentação de cada atributo (origem, cálculo, disponibilidade); 4) cuidado com identificadores — matrícula e protocolo não são padrão, são códigos: usá-los como atributo induz memorização. Atributo ausente exige política declarada (indicador de ausência, imputação justificada) — preencher com média às cegas pode introduzir viés.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Para prever déficit de estoque, engenheiro cria atributo 'estoque no dia seguinte'. Problema?", "resposta": "Vazamento: o atributo só existe depois da decisão; na produção real ele não estará disponível. É atributo-alvo disfarçado." },
                  { "tipo": "aplicacao", "enunciado": "Modelo usa 'número de protocolo' como atributo numérico. Por que é armadilha?", "resposta": "Protocolo é identificador, não padrão: seu valor numérico é arbitrário (ordem de entrada), então o modelo aprende artefatos de numeração que não se repetem em produção." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Engenharia de atributos é preencher células vazias com a média.'", "correcao": "Reduzido. Imputação é apenas uma técnica de tratamento de ausentes; engenharia de atributos é criação de variáveis informativas (taxas, contagens, agregações temporais) a partir de dados brutos." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Um atributo disponível apenas após a decisão pode ser usado no treinamento.", "resposta": "Errado. É vazamento de dados: o modelo aprende um artefato inexistente em produção e o desempenho real despenca." },
                  { "tipo": "multipla", "enunciado": "Qual garante qualidade de rótulo? A) Mais épocas de treino; B) Critério escrito, treinamento e conferência de concordância; C) Modelo mais complexo; D) Amostra maior apenas.", "resposta": "B" }
                ]
              },
              {
                "id": "m5-u2-t2-s2",
                "titulo": "Separação treino/validação/teste e vazamento de dados",
                "objetivoAprendizagem": "Aluno detectará vazamento de dados em cenários concretos e corrigirá a separação dos conjuntos.",
                "conteudo": "Vazamento de dados (data leakage) é quando informação que não estaria disponível na operação real entra no treinamento ou na avaliação, inflando artificialmente a métrica. Formas típicas: 1) atributo derivado do futuro (ex.: 'resultado da auditoria' como entrada para prever o resultado da auditoria); 2) normalização/ajuste calculado sobre o conjunto inteiro antes da divisão (a estatística do teste vazou para o treino); 3) registros do mesmo indivíduo ou evento em treino e teste (fuga por identidade/tempo); 4) duplicatas cruzando conjuntos. Regra: todo cálculo de preparação (escala, imputação, seleção) se ajusta no treinamento e se aplica aos demais — nunca o inverso. Detecção prática: desempenho excelente demais para ser verdade, atributo 'muito bom' demais (perfeito separador) e queda súbita em produção são sintomas clássicos; auditoria de linhagem dos dados é parte da engenharia. Vazamento é distinto de overfitting: overfitting é memorização do treino; vazamento é contaminação por informação proibida — a correção de cada um é diferente.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Acurácia de 99,9% em teste e 70% em produção. Quais hipóteses investigar?", "resposta": "Vazamento (atributo do futuro, ajuste prévio no conjunto inteiro, duplicatas), não apenas overfitting. Auditar linhagem: o que o modelo usa e quando aquela informação passa a existir." },
                  { "tipo": "aplicacao", "enunciado": "Equipe padronizou atributos com média e desvio calculados em TODA a base, depois dividiu em treino/teste. Correção?", "resposta": "Dividir PRIMEIRO e ajustar o padronizador apenas no treinamento, aplicando-o em seguida ao teste (pipeline de pré-processamento dentro da validação) — a estatística do teste não pode informar o treino." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Vazamento é o mesmo que overfitting.'", "correcao": "Errado. Overfitting: modelo decora o treino (correção: regularizar/simplificar). Vazamento: informação proibida entra nos dados (correção: remover a fonte e refazer o fluxo). Métricas vazadas exigem reavaliação do zero." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Estatísticas de padronização devem ser calculadas apenas no conjunto de treinamento.", "resposta": "Certo. Calcular no conjunto inteiro é vazamento: informação do teste influencia o treino e infla a métrica." },
                  { "tipo": "multipla", "enunciado": "Vazar informação do futuro para o modelo é chamado de: A) underfitting; B) vazamento de dados (leakage); C) drift; D) regressão.", "resposta": "B" }
                ]
              },
              {
                "id": "m5-u2-t2-s3",
                "titulo": "Desbalanceamento de classes",
                "objetivoAprendizagem": "Aluno diagnosticará desbalanceamento, avaliará acurácia enganosa e comparará técnicas de tratamento com seus efeitos colaterais.",
                "conteudo": "Desbalanceamento: uma classe minoritária representa fração pequena do total (ex.: 2% de fraudes, 1% de pedidos irregulares). Nesse cenário, modelo que 'prevê sempre classe majoritária' atinge 98% de acurácia e zero utilidade — a acurácia torna-se métrica enganosa; use precisão, recall, F1 e matriz de confusão. Tratamentos: 1) na amostragem — reamostragem por sub ou superamostragem da minoritária (cuidado: superamostragem ingênua memoriza); 2) no algoritmo — pesos de classe que penalizam mais o erro na minoritária; 3) no limiar — mover o corte de decisão em vez de reequilibrar dados; 4) coleta de mais dados da classe rara. O que NÃO fazer: reportar apenas acurácia; testar em dados balanceados artificialmente quando a produção é desbalanceada; tratar a escolha de tratamento sem considerar o custo dos erros. Decisão de política: se o custo de perder um caso raro (não detectar fraude) é alto, priorize recall; se o custo de falsa acusação é alto, priorize precisão — a métrica alvo deriva do custo, não do hábito.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Detector com 97% de acurácia nunca sinaliza anomalia (ocorre em 3%). Avalie.", "resposta": "Acurácia enganosa: recall da classe rara é zero — o modelo é inútil para a finalidade. Avaliar com matriz de confusão, precisão, recall e F1 da minoritária." },
                  { "tipo": "aplicacao", "enunciado": "Falsa acusação de irregularidade gera dano grave à reputação do cidadão. Onde priorizar?", "resposta": "Priorizar precisão da classe positiva (reduzir falsos positivos), aceitando menor recall, com revisão humana dos casos sinalizados — a métrica acompanha o custo do erro." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Basta duplicar os exemplos da classe minoritária para equilibrar.'", "correcao": "Insuficiente e arriscado: duplicação exata não traz informação nova e favorece memorização; prefira reamostragem inteligente, pesos de classe ou coleta adicional, sempre validando em teste desbalanceado." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) O conjunto de teste deve refletir a distribuição real esperada em produção.", "resposta": "Certo. Balancear o teste esconde o problema real: a avaliação precisa espelhar a operação (inclusive desbalanceada)." },
                  { "tipo": "multipla", "enunciado": "Com 1% de positivos, métrica mais inadequada como única: A) recall; B) precisão; C) acurácia global; D) F1.", "resposta": "C" }
                ]
              }
            ]
          },
          {
            "id": "modulo-5-unidade-2-topico-3",
            "titulo": "Métricas de avaliação",
            "subtopicos": [
              {
                "id": "m5-u2-t3-s1",
                "titulo": "Matriz de confusão, precisão e recall",
                "objetivoAprendizagem": "Aluno montará matriz de confusão a partir de um exemplo numérico e calculará precisão e recall com interpretação.",
                "conteudo": "Matriz de confusão cruza previsão e realidade em quatro células: verdadeiros positivos (VP), falsos positivos (FP), verdadeiros negativos (VN), falsos negativos (FN). Precisão = VP / (VP + FP): entre os que o modelo acusou, quantos eram mesmo positivos — mede o custo de falsa acusação. Recall (sensibilidade) = VP / (VP + FN): entre os realmente positivos, quantos o modelo achou — mede a capacidade de não perder casos. Exemplo numérico: de 1.000 requerimentos, 50 irregulares; modelo sinaliza 80, dos quais 40 são realmente irregulares. VP = 40, FP = 40, FN = 10, VN = 910. Precisão = 40/80 = 0,50 (metade das acusações é falsa). Recall = 40/50 = 0,80 (achou 80% das irregulares). Interpretação: o modelo perde 20% dos irregulares e incomoda 40 servidores inocentes — decisão de uso depende desses custos. Falso negativo é frequentemente o erro mais grave em triagem de risco (caso perdido); falso positivo é o mais sensível em acusação (dano reputacional). Erro clássico de prova: trocar denominadores — precisão usa a linha da previsão positiva; recall, a coluna do real positivo.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "VP = 30, FP = 10, FN = 5. Calcule precisão e recall.", "resposta": "Precisão = 30/(30+10) = 0,75. Recall = 30/(30+5) ≈ 0,857. Entre as acusações, 75% eram corretas; entre os positivos reais, ~86% foram capturados." },
                  { "tipo": "aplicacao", "enunciado": "Triagem de indício de fraude com custo alto de acusação indevida. Como equilibrar?", "resposta": "Escolher limiar que eleve a precisão (ex.: exigir evidência mínima para sinalizar), aceitando recall menor e complementando com análise humana dos casos não sinalizados por amostragem." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Precisão e recall são a mesma medida vistas por ângulos diferentes.'", "correcao": "Errado como sinônimo: medem coisas distintas — precisão governa falsos positivos; recall, falsos negativos. Uma pode subir enquanto a outra cai; por isso existe F1 (média harmônica) para resumir o equilíbrio." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Recall alto com precisão baixa significa que o modelo sinaliza demais, incluindo muitos inocentes.", "resposta": "Certo. Alto recall poupa falsos negativos; baixa precisão acumula falsos positivos — perfil típico de triagem sensível com limiar baixo." },
                  { "tipo": "multipla", "enunciado": "Fórmula da precisão: A) VP/(VP+FN); B) VP/(VP+FP); C) (VP+VN)/total; D) FP/(FP+VN).", "resposta": "B" }
                ]
              },
              {
                "id": "m5-u2-t3-s2",
                "titulo": "Especificidade, F1 e limiar de decisão",
                "objetivoAprendizagem": "Aluno calculará especificidade e F1, e defenderá a escolha do limiar de decisão em função dos custos dos erros.",
                "conteudo": "Especificidade = VN / (VN + FP): entre os realmente negativos, quantos o modelo deixou em paz — complementar do recall (sensibilidade). F1 = 2 × (precisão × recall) / (precisão + recall): média harmônica que só é alta quando as duas são altas; é a métrica preferida quando a classe positiva é rara e os dois erros importam. Acurácia = (VP + VN) / total — só faz sentido com classes equilibradas e custos simétricos. Limiar de decisão: classificadores produzem probabilidade; o corte em 0,5 é convenção, não lei. Deslocar o limiar para cima: menos falsos positivos, mais falsos negativos (modelo mais 'precavido'); para baixo: mais recall, menos precisão. A curva precisão-recall visualiza o trade-off por limiar; a escolha final é de política: quantos falsos positivos o serviço tolera? Exemplo: limiar 0,3 sinaliza mais casos (recall alto) — adequado a varredura preventiva; limiar 0,8, a acusação formal. Regra de ouro: a métrica-alvo e o limiar são definidos ANTES de olhar o resultado final, sob pena de ajuste pós-hoc que contamina a avaliação.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "VN = 850, FP = 50. Calcule a especificidade.", "resposta": "Especificidade = 850/(850+50) ≈ 0,944: 94,4% dos negativos reais foram corretamente classificados." },
                  { "tipo": "aplicacao", "enunciado": "Precisão 0,4 e recall 0,9. Qual F1 e qual perfil?", "resposta": "F1 = 2×(0,4×0,9)/(0,4+0,9) ≈ 0,554. Perfil de varredura sensível: quase todos os positivos são achados, mas 60% das acusações são falsas — bom para triagem inicial com revisão humana, ruim para acusação direta." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'O limiar ideal é sempre 0,5.'", "correcao": "Errado. 0,5 é convenção de classificador calibrado sem custos assimétricos; com custos distintos, o limiar é definido pela política de erro, validado em dados de teste." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) F1 é adequada quando se quer equilíbrio entre precisão e recall em classe rara.", "resposta": "Certo. Por ser média harmônica, só é alta com as duas altas — evita o 'falso conforto' de uma métrica isolada." },
                  { "tipo": "multipla", "enunciado": "Subir o limiar de decisão tende a: A) aumentar recall e precisão; B) reduzir falsos positivos e aumentar falsos negativos; C) não afetar erros; D) equilibrar classes.", "resposta": "B" }
                ]
              },
              {
                "id": "m5-u2-t3-s3",
                "titulo": "Métricas de regressão e interpretação numérica",
                "objetivoAprendizagem": "Aluno calculará MAE e RMSE em exemplo pequeno e explicará por que o RMSE pune erros grandes e o que o R² mede (e o que não mede).",
                "conteudo": "Para alvos contínuos: MAE (erro médio absoluto) = média de |previsão − real|, na unidade do alvo — robusto a erros extremos, interpretação direta ('erro médio de 3 dias'). RMSE (raiz do erro quadrático médio) = raiz da média dos quadrados dos erros — penaliza mais erros grandes que o MAE; RMSE ≥ MAE sempre, e a distância entre os dois sinaliza presença de erros extremos. Exemplo: erros de −2, −1, +1, +8 dias: MAE = (2+1+1+8)/4 = 3 dias. RMSE = √((4+1+1+64)/4) = √17,5 ≈ 4,18 dias — puxado pelo erro de 8 dias. R² (coeficiente de determinação) mede quanto da variância do alvo é explicada pelo modelo em relação a um baseline (prever sempre a média): 1 é ajuste perfeito, 0 é igual ao baseline; R² negativo significa pior que prever a média. Armadilha: R² não mede calibração nem viés sistemático — modelo com R² alto pode ter erro sistemático de +30% em um segmento; e correlação alta não implica R² alto em presença de erros grandes. Interpretação sempre contextual: MAE de R$ 50 é bom para imóvel de R$ 500 mil e péssimo para item de R$ 80.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Previsões 10, 20, 30 vs. reais 12, 18, 34. MAE?", "resposta": "Erros absolutos: 2, 2, 4 → MAE = 8/3 ≈ 2,67 unidades do alvo." },
                  { "tipo": "aplicacao", "enunciado": "MAE 1,9 e RMSE 6,4. O que a distância indica e o que fazer?", "resposta": "RMSE bem acima do MAE indica poucos erros muito grandes; investigar casos extremos (outliers, sazonalidade mal capturada) — a média esconde problema concentrado." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'R² de 0,9 prova que o modelo é adequado para decisão.'", "correcao": "Errado. R² mede explicação de variância, não exatidão em termos úteis nem equidade por segmento; a adequação depende do tamanho do erro na unidade do alvo e da análise por subgrupo." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) RMSE é sempre maior ou igual ao MAE.", "resposta": "Certo. A penalização quadrática dá mais peso a erros grandes; a igualdade só ocorre quando todos os erros têm o mesmo módulo." },
                  { "tipo": "multipla", "enunciado": "R² negativo significa: A) modelo perfeito; B) modelo pior que prever sempre a média; C) dados desbalanceados; D) vazamento.", "resposta": "B" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
