const enriParcialM7U2P2 = {
  "m7-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Localizar em que estágio do pipeline reside uma falha é o que permite corrigi-la em vez de maquiar o resultado. Questões de concurso descrevem um sintoma — total que não fecha, indicador que muda de sentido, dado sem origem — e pedem o estágio responsável; responder pelo efeito observado no painel desvia o gabarito. A governança atravessa todos os estágios e é a resposta de quem confunde tecnologia com responsabilidade.",
      "preRequisitos": [
        "Noção de sistema transacional, planilha e base analítica como fontes distintas de dado.",
        "Diferenciar captar, integrar, guardar, tratar e consumir informação."
      ],
      "objetivosObservaveis": [
        "descrever os cinco estágios do pipeline, indicando entrada, saída e risco típico de cada um;",
        "identificar o estágio responsável por uma falha descrita em um cenário;",
        "justificar por que a validação deve ocorrer em cada estágio e não apenas na saída."
      ],
      "competencias": [
        "mapeamento do fluxo de dado da origem ao consumo, com pontos de controle em cada estágio;",
        "diagnóstico de falha pela etapa de origem em vez do sintoma final."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t2-s2 (ETL e ELT: diferenças e quando aplicar cada um) — aprofunda os estágios de transformação e carga e a ordem entre eles;",
        "m7-u2-t1-s1 (Acurácia, completude e validade) — a qualidade entra pela coleta e se decide na transformação."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A descrição dos estágios do pipeline e a identificação da etapa responsável por uma falha são itens frequentes em provas de engenharia de dados, porque permitem cobrar tanto a sequência conceitual quanto o diagnóstico de um cenário de carga sem exigir ferramenta específica."
      }
    },
    "niveis": {
      "iniciante": "Pipeline é o caminho percorrido pelo dado da fonte até o uso, em cinco estágios. A coleta capta o dado nas fontes: sistemas transacionais, planilhas, formulários e sensores. A integração reúne as fontes em um conjunto coerente, por chaves de ligação e reconciliação. O armazenamento guarda o dado com estrutura adequada ao uso. A transformação limpa, padroniza, converte e deriva campos. O consumo entrega relatórios, painéis, análises e decisões.",
      "intermediario": "Cada estágio tem um risco típico. Na coleta, captar sem direito de uso ou sem regra de qualidade contamina tudo a jusante. Na integração, chave mal padronizada gera casamento errado ou linhas órfãs. No armazenamento, guardar sem metadados, sem backup e sem controle de acesso compromete a recuperação e a auditoria. Na transformação, regra não versionada impede reproduzir o número. No consumo, indicador sem definição produz valores iguais com sentidos diferentes.",
      "avancado": "A governança atravessa os cinco estágios e define finalidade, acesso, retenção e responsáveis; ela não é um sexto estágio isolado. O erro de um estágio viaja para os seguintes e pode aparecer apenas no consumo, o que exige conferência em cada etapa: entrada, transformação e saída. Chave de ligação, granularidade e regra de prevalência entre fontes divergentes concentram as falhas de integração que fazem o detalhe não fechar com o total.",
      "especialista": "No desenho maduro, cada estágio declara contrato de entrada e saída, regra de qualidade e responsável, e as transformações são versionadas para tornar o resultado reproduzível. A reconciliação entre fontes exige hierarquia declarada de prevalência; a granularidade precisa ser explícita para impedir a comparação entre detalhe diário e total mensal; e o consumo exige definição formal do indicador. Sem esses controles, corrigir o painel apenas esconde a falha de origem."
    },
    "comparacoes": [
      {
        "tema": "Estágio de integração versus estágio de transformação",
        "a": {
          "rotulo": "Integração",
          "texto": "Reúne fontes distintas em um conjunto coerente: padroniza chaves de ligação, reconcilia divergências entre fontes e resolve a granularidade das informações."
        },
        "b": {
          "rotulo": "Transformação",
          "texto": "Atua sobre o dado já reunido: limpa, padroniza valores, converte tipos, deriva campos, normaliza e agrega conforme regra definida."
        },
        "diferencaGabarito": "A integração decide como as fontes se encontram e qual prevalece; a transformação decide como o dado reunido é tratado — confundir as duas desloca a correção para o estágio errado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se o painel de consumo apresenta os números corretos, os estágios anteriores estão corretos.",
        "porqueErrada": "O consumo mostra apenas o efeito; erro de origem pode ser mascarado por ajuste manual no relatório, e erro de transformação pode coincidir com um total que, por acaso, fecha. A validação exige conferência em entrada, transformação e saída, não apenas no resultado final.",
        "versaoCorreta": "Incorreto: o painel correto não prova que a origem está correta. Um ajuste manual pode esconder erro de coleta ou de integração, e só a conferência em cada estágio, com regra declarada, sustenta a conclusão."
      },
      {
        "afirmacaoEquivocada": "Regras de transformação não precisam de versão nem de documentação, pois o resultado final é o que importa.",
        "porqueErrada": "Sem versionamento e documentação, o número não é reproduzível nem auditável: ninguém consegue explicar como foi produzido nem refazer o cálculo com a mesma regra. A transformação é justamente o estágio em que a ausência de controle é mais danosa.",
        "versaoCorreta": "Errado: regras de transformação devem ser versionadas e documentadas para que o resultado seja reproduzível e auditável; sem isso, o número não pode ser conferido nem reconstruído."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Pipeline de dados: caminho percorrido pelo dado da fonte até o uso, em cinco estágios.",
        "Coleta: captação do dado nas fontes, com direito de uso e regra de qualidade.",
        "Integração: reunião de fontes em conjunto coerente, por chaves, reconciliação e granularidade.",
        "Transformação: limpeza, padronização, conversão, derivação e agregação com regra versionada.",
        "Consumo: entrega do dado em relatórios, painéis, análises e decisões."
      ],
      "regras": [
        "A governança de finalidade, acesso, retenção e responsáveis atravessa todos os estágios e não é um estágio à parte.",
        "Cada estágio tem entrada, saída e risco típico, e a falha de um viaja para os seguintes.",
        "A validação exige conferência na entrada, na transformação e na saída, não somente no resultado final."
      ],
      "comparacoes": [
        "A integração decide como as fontes se encontram; a transformação decide como o dado reunido é tratado."
      ],
      "fluxos": [
        "Coleta na fonte → integração por chave, reconciliação e granularidade → armazenamento com metadados e controle de acesso → transformação versionada → consumo com indicador definido → governança de finalidade, acesso e retenção em todo o percurso."
      ],
      "excecoes": [
        "Um estágio pode estar correto e o resultado ainda parecer errado quando a granularidade comparada é diferente: detalhe diário confrontado com total mensal gera divergência aparente sem defeito de cálculo."
      ],
      "palavrasChave": [
        "pipeline",
        "coleta",
        "integração",
        "transformação",
        "consumo",
        "governança",
        "granularidade"
      ],
      "checklist": [
        "O contrato de entrada e saída de cada estágio está definido?",
        "As chaves de ligação foram padronizadas antes da integração?",
        "A regra de prevalência entre fontes divergentes está declarada?",
        "As transformações estão versionadas e documentadas?",
        "Cada indicador de consumo tem definição formal?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Mapear os cinco estágios do pipeline para apurar indicadores de saúde a partir de notificações enviadas em planilhas pelas unidades.",
        "dados": "Notificações de saúde registradas em planilhas por várias unidades, com formatos e nomes de unidade divergentes; necessidade de painel de vigilância e relatório gerencial; os dados chegam das unidades por envio periódico.",
        "conceitos": [
          "coleta",
          "integração",
          "transformação",
          "consumo"
        ],
        "estrategia": "Percorrer o caminho do dado na ordem dos estágios, atribuindo a cada um a atividade correspondente: receber as planilhas, consolidá-las, guardá-las com histórico, padronizá-las e, por fim, apresentá-las em painel com indicador definido.",
        "execucao": [
          "Coleta: receber as planilhas enviadas pelas unidades.",
          "Integração: consolidar em base única, com chave de unidade e data, resolvendo formatos distintos.",
          "Armazenamento: guardar com histórico e metadados das unidades.",
          "Transformação: padronizar nomes de unidade, converter datas e deduplicar notificações repetidas.",
          "Consumo: publicar painel de vigilância e relatório gerencial com cada indicador definido."
        ],
        "resultado": "A apuração percorre coleta (planilhas das unidades), integração (base única por unidade e data), armazenamento (histórico e metadados), transformação (padronização, conversão e deduplicação) e consumo (painel e relatório com indicador definido).",
        "justificativa": "O gabarito segue a ordem do caminho do dado: cada atividade pertence ao estágio que a executa e o consumo só é o último passo. Mapear os estágios evita tratar a padronização como parte do painel, quando ela pertence à transformação, e a consolidação como coleta, quando pertence à integração.",
        "errosFrequentes": [
          "Colocar a padronização de nomes de unidade no consumo, quando ela pertence à transformação.",
          "Tratar a consolidação das planilhas como coleta, confundindo receber o dado com reuni-lo em base única."
        ],
        "variacao": "Se as unidades enviassem os dados por interface automática em vez de planilhas, a coleta mudaria de meio, mas as etapas de integração, armazenamento, transformação e consumo permaneceriam as mesmas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Após a carga, o total por unidade não fecha com o detalhe. Em qual estágio está a falha e o que deve ser verificado?",
        "dados": "Relatório consolidado em que a soma dos registros detalhados por unidade difere do total apresentado; unidades cadastradas com nomes abreviados diferentes entre fontes; convivência de detalhe diário com total mensal; duas fontes para o mesmo fato.",
        "conceitos": [
          "integração",
          "reconciliação",
          "granularidade"
        ],
        "estrategia": "Como a divergência aparece na comparação entre duas representações do mesmo fato, direcionar a análise ao estágio de integração e verificar, nessa ordem, a padronização das chaves, a compatibilidade de granularidade e a regra de prevalência entre as fontes.",
        "execucao": [
          "Confirmar a divergência: a soma do detalhe por unidade difere do total consolidado.",
          "Verificar as chaves: nomes de unidade abreviados de formas diferentes impedem o casamento correto.",
          "Verificar a granularidade: detalhe diário não se soma diretamente a total mensal sem alinhamento.",
          "Verificar a regra de prevalência: definir qual fonte se sobrepõe quando as duas divergem."
        ],
        "resultado": "A falha está no estágio de integração, na reconciliação entre fontes. Deve-se conferir a padronização das chaves, a compatibilidade de granularidade e a regra de prevalência; a diferença entre a soma dos filhos e o total revela linha órfã ou duplicada.",
        "justificativa": "O gabarito aponta a integração porque é ali que as representações do mesmo fato se encontram e se reconciliam. Chave não padronizada produz casamento errado, granularidade incompatível impede a soma direta e ausência de regra de prevalência faz duas fontes divergentes coexistirem, falhas que a transformação posterior não resolve sozinha.",
        "errosFrequentes": [
          "Atribuir a falha ao consumo, tratando o total que não fecha como erro de painel.",
          "Procurar erro de coleta, quando as duas fontes foram captadas corretamente e divergem entre si."
        ],
        "variacao": "Se o total não fechasse apenas para uma unidade e as demais estivessem corretas, a investigação se concentraria na chave daquela unidade, mantendo o diagnóstico no estágio de integração."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'se o consumo, isto é, o painel, está correto, então os estágios anteriores estão corretos'.",
        "dados": "Afirmação de um analista; painel apresenta os totais esperados pela área; não há registro de conferência na coleta, na integração nem na transformação; o relatório contém ajuste manual lançado para fechar o número.",
        "conceitos": [
          "consumo",
          "governança",
          "validação por estágio"
        ],
        "estrategia": "Testar a implicação pela contraprova: procurar um caminho em que o painel fique correto sem que os estágios anteriores estejam corretos. O ajuste manual no relatório é exatamente esse caminho, pois corrige a saída sem eliminar a causa na origem.",
        "execucao": [
          "Identificar o que a afirmação observa: apenas a saída, no consumo.",
          "Procurar como a saída pode estar correta por meio de ação que não corrige a origem.",
          "Reconhecer o ajuste manual no relatório como correção de efeito, não de causa.",
          "Concluir que a implicação é falsa e que a validação exige conferência em cada estágio."
        ],
        "resultado": "Afirmação incorreta. Um ajuste manual pode fazer o painel fechar mesmo com erro de coleta ou de integração, de modo que a correção no consumo esconde a causa. Validar exige conferir entrada, transformação e saída.",
        "justificativa": "O gabarito rejeita a implicação porque o consumo é o estágio que apenas exibe o efeito. Erros de origem e de transformação podem ser mascarados por ajuste no relatório ou coincidir com o valor esperado; somente a conferência em cada estágio, com regra declarada, comprova que o percurso está correto.",
        "errosFrequentes": [
          "Concluir que o painel correto valida a base, ignorando ajustes manuais na saída.",
          "Confundir ausência de erro visível com ausência de erro no percurso."
        ],
        "variacao": "Se a afirmação fosse 'se a transformação está documentada, o pipeline está correto', o erro seria o mesmo tipo de salto, pois a documentação de um estágio não garante a qualidade da coleta, da integração nem do consumo."
      }
    ]
  },
  "m7-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A diferença entre ETL e ELT não está no resultado entregue, mas na ordem entre transformar e carregar, e essa ordem muda custo, governança e capacidade exigida do destino. Questões de concurso cobram exatamente o critério de escolha em um cenário — dado sensível, volume grande, necessidade de reprocessar — e reprovam quem repete a generalização de que ETL é antigo e ELT é moderno.",
      "preRequisitos": [
        "Conhecer os estágios de extração, transformação, carga e consumo do pipeline.",
        "Diferenciar ambiente de origem e repositório analítico de destino."
      ],
      "objetivosObservaveis": [
        "diferenciar ETL e ELT pela posição da transformação em relação à carga;",
        "escolher entre ETL e ELT em cenários concretos, justificando por sensibilidade, volume, auditoria e capacidade do destino;",
        "reconhecer que ambos entregam dado tratado no consumo."
      ],
      "competencias": [
        "análise de requisitos de privacidade, volume e auditoria para decidir a ordem das operações;",
        "identificação de generalizações indevidas sobre a modernidade das abordagens."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t2-s1 (Estágios do pipeline de dados) — ETL e ELT são dois arranjos dos estágios de transformação e carga;",
        "m7-u2-t1-s2 (Consistência, unicidade e tempestividade) — a ordem entre transformar e carregar afeta a tempestividade e a disciplina de governança."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens sobre ETL e ELT integram o conteúdo programático de dados, tanto na forma conceitual, exigindo a ordem das operações, quanto em cenários que pedem a escolha justificada; o conteúdo explora a falsa equivalência entre abordagem moderna e qualidade do resultado."
      }
    },
    "niveis": {
      "iniciante": "ETL significa extrair, transformar e carregar: o dado é tratado fora do destino e entra pronto. ELT significa extrair, carregar e transformar: o dado bruto entra primeiro no destino e é transformado ali, com a capacidade de armazenamento e processamento do próprio destino. A diferença central é a posição da transformação em relação à carga, e nos dois arranjos o resultado consumido é dado tratado.",
      "intermediario": "A ordem tem consequências. No ETL há controle do que entra, o volume carregado é menor e o destino não recebe dado bruto, o que atende a exigência de sensibilidade, custo ou regra de negócio; em contrapartida, reprocessar com nova regra exige voltar à origem. No ELT o dado bruto fica disponível para reprocessar quantas vezes for preciso e evoluir regras sem extrair de novo, mas isso exige capacidade no destino e disciplina extra de governança, pois o dado sensível é guardado antes do tratamento.",
      "avancado": "A escolha depende de volume, capacidade do destino, exigência de auditoria, sensibilidade dos dados e custo de processamento. Não vale a generalização de que ETL é ultrapassado e ELT é moderno: cada arranjo atende a um perfil de requisitos. Quando o dado sensível não deve chegar bruto ao ambiente analítico compartilhado, a transformação precisa ocorrer antes da carga, o que caracteriza ETL; quando o objetivo é reprocessar e evoluir regras com liberdade, o carregamento prévio do bruto caracteriza ELT.",
      "especialista": "Em nível avançado, a decisão combina ordem das operações e governança do dado bruto. O ELT exige que o repositório destino trate o dado sensível com controle de acesso, retenção e mascaramento desde a chegada, porque o tratamento passa a ocorrer depois. O ETL centraliza o controle na etapa de transformação anterior à carga, mas paga em flexibilidade de reprocessamento. A escolha correta reconhece que os dois entregam dado tratado e explicita qual restrição prevalece — privacidade, capacidade, auditoria ou custo."
    },
    "comparacoes": [
      {
        "tema": "ETL versus ELT",
        "a": {
          "rotulo": "ETL",
          "texto": "Extrai, transforma e carrega: a transformação ocorre fora do destino, que recebe o dado já tratado. Controla o que entra e reduz o volume carregado, mas reprocessar exige nova extração."
        },
        "b": {
          "rotulo": "ELT",
          "texto": "Extrai, carrega e transforma: o dado bruto entra no destino e é tratado ali. Permite reprocessar e evoluir regras sem reextrair, mas exige capacidade no destino e governança do dado bruto."
        },
        "diferencaGabarito": "A diferença decisiva é a posição da transformação em relação à carga: no ETL ela antecede o carregamento; no ELT ela o sucede, dentro do destino."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Em ELT não há transformação, pois os dados são usados brutos.",
        "porqueErrada": "O ELT apenas inverte a ordem: a transformação acontece dentro do destino, depois da carga. O dado consumido é tratado igualmente; o que muda é o local e o momento do processamento, não a existência da transformação.",
        "versaoCorreta": "Incorreto: o ELT também transforma, mas dentro do destino e após a carga. O dado entregue ao consumo é tratado nos dois arranjos; a diferença está em onde e quando a transformação ocorre."
      },
      {
        "afirmacaoEquivocada": "ETL é uma abordagem ultrapassada e o ELT é sempre a escolha moderna e superior.",
        "porqueErrada": "A escolha depende de volume, capacidade do destino, exigência de auditoria, sensibilidade dos dados e custo de processamento. Quando o dado sensível não deve chegar bruto ao destino, transformar antes da carga é o requisito, o que caracteriza ETL, e não uma opção obsoleta.",
        "versaoCorreta": "Errado: nenhum dos arranjos é superior em absoluto. O ETL é adequado quando o destino não deve receber dado bruto e o ELT quando se quer reprocessar e evoluir regras; a decisão segue os requisitos do cenário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ETL: extrair, transformar e carregar, com a transformação fora do destino.",
        "ELT: extrair, carregar e transformar, com a transformação dentro do destino.",
        "Carga: momento em que o dado passa da origem para o repositório de destino.",
        "Governança do dado bruto: controle de acesso, retenção e mascaramento aplicado antes do tratamento."
      ],
      "regras": [
        "A diferença entre ETL e ELT é a ordem entre transformação e carga, e não a existência de transformação.",
        "Nos dois arranjos o resultado consumido é dado tratado e pronto para uso.",
        "A escolha depende de volume, capacidade do destino, auditoria, sensibilidade e custo, e não da modernidade da abordagem."
      ],
      "comparacoes": [
        "No ETL a transformação antecede a carga e o destino recebe dado tratado; no ELT ela sucede a carga e o dado bruto é tratado dentro do destino."
      ],
      "fluxos": [
        "Definir o requisito dominante (privacidade, volume, reprocessamento ou auditoria) → se o destino não deve receber bruto, transformar antes e carregar (ETL) → se é preciso reprocessar com liberdade, carregar bruto e transformar no destino (ELT) → garantir governança do dado bruto no destino no caso do ELT."
      ],
      "excecoes": [
        "Um mesmo ambiente pode combinar os arranjos: dado sensível tratado antes da carga por ETL e dados não sensíveis carregados brutos para transformação posterior por ELT, conforme o tipo de informação."
      ],
      "palavrasChave": [
        "ETL",
        "ELT",
        "extração",
        "transformação",
        "carga",
        "dado bruto",
        "governança"
      ],
      "checklist": [
        "O destino pode receber o dado bruto, por sensibilidade, custo ou regra?",
        "É necessário reprocessar com novas regras sem reextrair da origem?",
        "O destino tem capacidade de armazenamento e processamento para o bruto?",
        "A governança do dado bruto no destino está definida?",
        "A escolha foi justificada pelo requisito, e não pela suposta modernidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Descrever ETL e ELT em uma frase cada e apontar a diferença central entre os dois arranjos.",
        "dados": "Dois arranjos possíveis para levar o dado da origem ao consumo; a origem é um sistema transacional e o destino é um repositório analítico; a pergunta pede a ordem das operações em cada arranjo.",
        "conceitos": [
          "ETL",
          "ELT",
          "ordem entre transformação e carga"
        ],
        "estrategia": "Fixar a ordem das operações como critério de identificação: em cada sigla, seguir a sequência das letras e localizar onde a transformação aparece em relação à carga; a diferença central está nessa posição.",
        "execucao": [
          "ETL: extrair da fonte, transformar em etapa intermediária e só então carregar o dado pronto no destino.",
          "ELT: extrair da fonte, carregar o dado bruto no destino e transformá-lo dentro do próprio destino.",
          "Comparar os dois arranjos pela posição da transformação.",
          "Concluir que a diferença é transformar antes ou depois da carga."
        ],
        "resultado": "ETL extrai, transforma fora do destino e carrega pronto; ELT extrai, carrega bruto no destino e transforma ali dentro. A diferença central é a posição da transformação em relação à carga: antes no ETL, depois no ELT.",
        "justificativa": "O gabarito se apoia na ordem literal das operações: a sigla ETL coloca a transformação antes da carga e a sigla ELT a coloca depois. Nenhum dos arranjos dispensa a transformação; o que muda é o momento e o local em que ela acontece.",
        "errosFrequentes": [
          "Afirmar que o ELT não transforma, confundindo transformar depois da carga com não transformar.",
          "Dizer que a diferença é a ferramenta utilizada, quando a definição se baseia apenas na ordem das operações."
        ],
        "variacao": "Se a pergunta pedisse a ordem das operações em um arranjo que carrega e depois transforma, a resposta seria ELT, mantendo o mesmo critério de identificação pela posição da transformação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Dados sensíveis precisam ser tratados antes de qualquer armazenamento em ambiente analítico compartilhado. A escolha correta é ETL ou ELT?",
        "dados": "Dados pessoais sensíveis que não podem permanecer em ambiente analítico compartilhado sem tratamento; risco de que o dado bruto fique acessível a mais usuários; o destino é um repositório analítico usado por várias equipes; a origem é um sistema transacional.",
        "conceitos": [
          "ETL",
          "privacidade",
          "transformação antes da carga"
        ],
        "estrategia": "Identificar o requisito dominante: o destino não pode receber o dado bruto. Como no ETL a transformação precede a carga, é esse arranjo que impede a chegada do dado sensível sem tratamento ao ambiente compartilhado; a decisão é de governança e precede a comparação de capacidade técnica.",
        "execucao": [
          "Reconhecer o requisito: dado sensível não pode ser armazenado sem tratamento.",
          "Verificar em qual arranjo a transformação ocorre antes da carga.",
          "Concluir que o ETL trata o dado antes de ele entrar no destino compartilhado.",
          "Justificar a escolha pela privacidade e pela regra de negócio, e não pela capacidade do destino."
        ],
        "resultado": "ETL: a transformação, no caso o tratamento do dado sensível, ocorre antes da carga, de modo que o dado bruto não chega ao ambiente analítico compartilhado. O critério decisivo é a privacidade e a regra de negócio.",
        "justificativa": "O gabarito é o ETL porque ele posiciona a transformação antes do carregamento e impede que o dado sensível seja armazenado sem tratamento no destino compartilhado. No ELT o dado bruto entraria primeiro, exigindo governança sobre o bruto no próprio destino, o que contraria o requisito declarado.",
        "errosFrequentes": [
          "Escolher ELT por sua flexibilidade de reprocessamento, ignorando a exigência de não armazenar dado sensível sem tratamento.",
          "Supor que a governança no destino dispensa tratar o dado sensível antes da carga, contrariando a regra de negócio."
        ],
        "variacao": "Se os dados não fossem sensíveis e o requisito fosse reprocessar com novas regras sem reextrair da origem, a escolha passaria a ser o ELT, mantendo o mesmo critério de decisão pelo requisito dominante."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'em ELT não há transformação, pois os dados são usados brutos'.",
        "dados": "Afirmação de um colega; o arranjo em questão carrega o dado bruto no destino e executa as rotinas de padronização e agregação dentro do próprio repositório; o consumo final recebe campos padronizados.",
        "conceitos": [
          "ELT",
          "transformação no destino",
          "dado tratado no consumo"
        ],
        "estrategia": "Distinguir a ordem da transformação de sua existência: verificar onde as rotinas de padronização e agregação são executadas e se o dado consumido é bruto ou tratado; a conclusão é que o ELT transforma dentro do destino, apenas depois da carga.",
        "execucao": [
          "Registrar a afirmação: o ELT não transformaria e usaria dado bruto.",
          "Localizar onde as rotinas de padronização e agregação são executadas: dentro do destino.",
          "Verificar o dado que chega ao consumo: campos padronizados, portanto tratado.",
          "Concluir que o ELT transforma, apenas em outro momento."
        ],
        "resultado": "Afirmação incorreta. O ELT transforma dentro do destino, depois da carga; o dado consumido é tratado, e o que muda em relação ao ETL é o local e o momento do processamento, não a existência da transformação.",
        "justificativa": "O gabarito rejeita a afirmação porque a definição do ELT inclui a transformação, ainda que posterior à carga. Como as rotinas de padronização e agregação rodam dentro do repositório e o consumo recebe campos tratados, tomar o dado bruto como produto final contradiz o próprio arranjo.",
        "errosFrequentes": [
          "Concluir que transformar depois da carga equivale a não transformar.",
          "Associar o dado bruto do ELT ao dado entregue ao consumo, quando o bruto é apenas a etapa inicial."
        ],
        "variacao": "Se a afirmação fosse 'no ETL o dado é carregado bruto e tratado no destino', o erro seria o mesmo tipo de troca: inverter a posição da transformação, atribuindo ao ETL o comportamento do ELT."
      }
    ]
  }
};
