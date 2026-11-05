const enriParcialM7U2P3 = {
  "m7-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Escolher o tratamento de valores ausentes evita o erro mais comum da análise: transformar viés em número. A ausência não é fenômeno único, e a estratégia de exclusão, imputação ou indicador só se defende depois de classificar a causa que a produziu.",
      "preRequisitos": [
        "Noção de tabela com linhas, colunas e tipos de dado",
        "Diferença entre valor ausente, valor zero e valor inválido",
        "Leitura de medidas-resumo, como média, mediana e moda"
      ],
      "objetivosObservaveis": [
        "Classificar um valor ausente segundo sua forma e sua causa: aleatória, dependente de atributo observado ou dependente do próprio valor",
        "Escolher a estratégia de tratamento coerente com a causa, entre exclusão, imputação fixa, imputação por modelo e indicador de ausência",
        "Justificar por que substituir ausência por zero mascara a falta com aparência de medida"
      ],
      "competencias": [
        "Diagnóstico da causa da ausência antes de imputar",
        "Avaliação do efeito da imputação sobre a variabilidade e a conclusão",
        "Documentação da regra de tratamento e da taxa de ausência"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t1-s1 (Acurácia, completude e validade) — a completude mede a ausência",
        "m7-u2-t3-s2 (Duplicidades, inconsistências e erros de tipo) — outra família de defeitos no mesmo registro",
        "m7-u2-t4-s1 (Agregação e agrupamento (e o erro da média de médias)) — a imputação fixa altera médias"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância classificada como média, por estimativa pedagógica de adequação do tema ao conteúdo de qualidade de dados em editais; a cobrança recai na escolha justificada da estratégia e na crítica ao uso indiscriminado da média como imputação."
      }
    },
    "niveis": {
      "iniciante": "Valor ausente assume várias formas: nulo explícito, string vazia, marcador textual como 'N/A', zero usado no lugar da ausência e ausência lógica, em que o campo só se aplica sob certa condição — o nome do cônjuge só existe para quem é casado. Reconhecer essas formas é o primeiro passo, pois cada uma pede tratamento diferente.",
      "intermediario": "As estratégias têm custos distintos: excluir a linha perde informação e enviesa quando a ausência não é aleatória; excluir a coluna cabe quando o campo é quase todo vazio; imputar média, mediana ou moda preserva os registros, mas comprime a variabilidade; imputar por modelo é mais fiel havendo atributo preditor; e o indicador de ausência preserva a falta.",
      "avancado": "O critério decisivo é a causa da ausência. Se é aleatória, a imputação é relativamente segura; se depende de atributos observados, esses atributos devem entrar no cálculo; se depende do próprio valor omitido, como rendas altas que se omitem, qualquer imputação cega introduz viés silencioso, e a conduta honesta é declarar a limitação.",
      "especialista": "Em governança, documentam-se a taxa de ausência, a regra aplicada e o motivo, porque imputar reescreve a base e apaga a evidência da falta. A ausência também pode ser informação: profissão vazia para menor de idade sinaliza regra de negócio. Testar tratamentos alternativos e verificar se a conclusão muda integra o procedimento."
    },
    "comparacoes": [
      {
        "tema": "Imputação por valor fixo versus indicador de ausência",
        "a": {
          "rotulo": "Imputação fixa",
          "texto": "Preenche o vazio com média, mediana ou moda; mantém a quantidade de registros, mas reduz a variabilidade e atenua diferenças reais."
        },
        "b": {
          "rotulo": "Indicador de ausência",
          "texto": "Cria uma coluna que registra que o valor faltou, preservando o fato e permitindo tratá-lo como variável própria na análise."
        },
        "diferencaGabarito": "A imputação fixa apaga a falta em troca de completude aparente; o indicador preserva a falta e deixa a imputação para quem interpreta o resultado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Como a média é a medida central do campo, todo valor ausente deve ser preenchido por ela.'",
        "porqueErrada": "A média é opção entre várias e só se defende quando a ausência não é seletiva e ela representa bem o campo; com valores extremos, a mediana é mais robusta, e variáveis categóricas pedem moda.",
        "versaoCorreta": "Errado. Imputar a média é apenas uma estratégia e depende da causa e da distribuição. Campos com valores extremos pedem mediana; variáveis categóricas, moda; ausência informativa, indicador próprio. Aplicar a média sempre converte viés em número arredondado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Substituir ausência por zero é a forma mais neutra de completar a base, pois não altera a média.'",
        "porqueErrada": "Zero é valor legítimo em muitas variáveis; tratá-lo como sinônimo de não medido confunde ausência com medida e distorce somas e médias.",
        "versaoCorreta": "Errado. Zero é um valor medido em contagens e saldos; usá-lo para representar falta inventa observação e rebaixa a média artificialmente. O tratamento correto é imputação declarada ou indicador de ausência, nunca o zero automático."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "valor ausente",
        "ausência lógica",
        "imputação",
        "indicador de ausência",
        "viés de não-resposta"
      ],
      "regras": [
        "classificar a causa da ausência antes de imputar",
        "documentar taxa de ausência e regra de tratamento",
        "zero substituto nunca representa falta medida"
      ],
      "comparacoes": [
        "exclusão versus imputação: perda de informação versus completude aparente"
      ],
      "fluxos": [
        "identificar a forma da ausência, classificar a causa, escolher a estratégia, documentar e testar a robustez"
      ],
      "excecoes": [
        "ausência lógica em campo condicional é regra de negócio, e não falha",
        "ausência seletiva invalida imputação cega mesmo com poucos registros"
      ],
      "palavrasChave": [
        "ausência",
        "imputação",
        "mediana",
        "viés",
        "indicador"
      ],
      "checklist": [
        "A ausência está classificada por forma e causa?",
        "A estratégia escolhida é coerente com a causa?",
        "A taxa de ausência foi registrada?",
        "A conclusão muda se o tratamento alternativo for usado?",
        "O zero foi evitado como preenchimento automático?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma base de recursos humanos reúne 200 salários e tem 10 valores ausentes, sem padrão entre os setores. Qual tratamento é defensável para a média salarial?",
        "dados": "200 registros; 10 ausentes, ou 5% da base; ausência sem relação com setor, cargo ou tempo de serviço; os 190 valores presentes servem de referência para o campo.",
        "conceitos": [
          "ausência aleatória",
          "imputação por mediana",
          "taxa de ausência"
        ],
        "estrategia": "Verificar se a ausência segue padrão; como não segue, comparar duas condutas viáveis, imputar pela mediana ou excluir as linhas, e registrar a perda de informação de cada uma.",
        "execucao": [
          "1) Conferir se a ausência se concentra em algum setor ou cargo.",
          "2) Calcular a mediana dos 190 valores presentes.",
          "3) Imputar os 10 ausentes pela mediana e registrar a taxa de 5%.",
          "4) Refazer a média com exclusão e comparar o resultado."
        ],
        "resultado": "Com ausência aleatória em 5% da base, a imputação pela mediana mantém os 200 registros, e a exclusão perde 10 casos; nos dois caminhos, a média final deve ser registrada junto com a taxa de ausência.",
        "justificativa": "O gabarito aceita as duas condutas porque a ausência não segue padrão: a mediana é mais robusta que a média para imputar salários, e a exclusão de 5% tem impacto limitado. A exigência é documentar a regra e conferir se a conclusão se mantém sob o outro tratamento.",
        "errosFrequentes": [
          "Assumir a média como imputação padrão, sem olhar a distribuição.",
          "Excluir as linhas sem registrar quantos casos se perderam."
        ],
        "variacao": "Se os 10 ausentes se concentrassem no setor de maior remuneração, a ausência deixaria de ser aleatória e a mediana global seria trocada por imputação por grupo ou por declaração da limitação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma pesquisa de satisfação recebeu 80% dos questionários, preenchidos sobretudo por insatisfeitos, e a secretaria pede que se impute os 20% restantes. Qual é a conduta correta?",
        "dados": "800 de 1.000 questionários respondidos, ou 80%, sobretudo por insatisfeitos; 200 sem resposta, sem motivo informado; a variável de interesse é o nível de satisfação, de 1 a 5.",
        "conceitos": [
          "ausência seletiva",
          "viés de não-resposta",
          "limitação declarada"
        ],
        "estrategia": "Reconhecer que a não-resposta depende do próprio valor investigado, pois quem responde tende a ser insatisfeito, e recusar a imputação, que mascararia a seletividade em vez de corrigi-la.",
        "execucao": [
          "1) Comparar o perfil dos respondentes com o dos ausentes.",
          "2) Constatar que a resposta se concentra nos insatisfeitos.",
          "3) Recusar a imputação e apurar o indicador só sobre os respondentes.",
          "4) Declarar o viés de não-resposta e sugerir nova coleta ou ponderação."
        ],
        "resultado": "A imputação não é a conduta correta: preencher os 20% ausentes esconderia que os insatisfeitos responderam mais. O aceitável é analisar os respondentes e declarar o viés de não-resposta, indicando que a satisfação real tende a ser menor que a medida.",
        "justificativa": "O gabarito recusa a imputação porque a ausência depende do valor omitido, caso em que o preenchimento cego introduz viés. Como a amostra responde de forma seletiva, a estimativa sobre os respondentes é enviesada por construção; a resposta técnica é declarar a limitação.",
        "errosFrequentes": [
          "Imputar a média de satisfação aos ausentes e apresentar o resultado como representativo.",
          "Tratar a não-resposta como falha de digitação, e não como comportamento."
        ],
        "variacao": "Se a pesquisa tivesse respondentes equilibrados entre satisfeitos e insatisfeitos, a não-resposta deixaria de ser seletiva e a imputação por moda poderia ser admitida com registro."
      },
      {
        "tipo": "erro",
        "problema": "Um analista afirma: 'Ausência é sempre falha de medição; como a média é a medida central, basta preencher todo campo vazio com ela.' A afirmação serve como regra geral de limpeza?",
        "dados": "Três campos: idade, 2% ausente; renda, 18% ausente, com omissão maior nas faixas altas; estado civil, 12% ausente, quase todos menores de idade, para quem o campo não se aplica.",
        "conceitos": [
          "causa da ausência",
          "ausência lógica",
          "imputação condicionada"
        ],
        "estrategia": "Separar as três origens: idade, ausência aleatória; renda, ausência dependente do próprio valor; estado civil, ausência lógica por regra de negócio. A regra única pedida não sobrevive a essa separação.",
        "execucao": [
          "1) Classificar a causa de cada campo: aleatória, seletiva e lógica.",
          "2) Verificar que imputar renda pela média subestima as faixas altas que omitem.",
          "3) Verificar que estado civil vazio para menor é regra, não falha.",
          "4) Concluir que cada campo pede tratamento próprio."
        ],
        "resultado": "A afirmação não serve como regra geral. Imputar renda pela média esconde a omissão das faixas altas; preencher estado civil de menores inventa dado; apenas a idade admitiria imputação simples, com a taxa registrada.",
        "justificativa": "A leitura ingênua trata toda ausência como ruído de medição, mas os três campos têm causas distintas: uma aleatória, uma dependente do valor omitido e uma lógica. Preencher os três do mesmo modo contraria a exigência de classificar a causa antes de imputar.",
        "errosFrequentes": [
          "Aplicar a mesma regra de imputação a todos os campos.",
          "Preencher campo condicional sem respeitar a regra de negócio."
        ],
        "variacao": "Se o campo de renda passasse a ter declaração obrigatória e verificada, a omissão seletiva desapareceria e a mediana voltaria a ser defensável para os poucos casos residuais."
      }
    ]
  },
  "m7-u2-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Duplicidade, inconsistência e erro de tipo são defeitos silenciosos: a base parece completa, mas soma linhas repetidas, ordena códigos pela primeira letra e compara textos como números. Tratá-los com regra explícita evita efeito colateral em relatórios e indicadores.",
      "preRequisitos": [
        "Noção de chave de identidade, como CPF, matrícula ou protocolo",
        "Diferença entre armazenamento como texto e tipo numérico ou de data",
        "Leitura de regras de consistência entre campos de um registro"
      ],
      "objetivosObservaveis": [
        "Distinguir duplicidade de chave exata, de chave normalizada e de similaridade aproximada",
        "Identificar inconsistências internas ao registro e entre sistemas, propondo regra de reconciliação",
        "Explicar por que erros de tipo permanecem silenciosos e como a conversão com relatório de falhas os expõe"
      ],
      "competencias": [
        "Definição de chave e de regra de prevalência antes de fundir registros",
        "Leitura crítica de ordenações lexicográficas e de somas que ignoram linhas não numéricas",
        "Documentação das transformações e das perdas aceitas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t1-s2 (Consistência, unicidade e tempestividade) — a unicidade é a dimensão violada pela duplicidade",
        "m7-u2-t3-s1 (Valores ausentes e estratégias de tratamento) — defeito vizinho no mesmo passo de limpeza",
        "m7-u2-t4-s2 (Deduplicação: chaves de identidade, fusão e riscos) — aprofunda a chave e a fusão iniciadas aqui"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância classificada como média, por estimativa pedagógica de adequação do tema ao conteúdo de qualidade de dados em editais; a cobrança pede detectar duplicidade com chave normalizada, apontar inconsistência e explicar por que texto não soma como número."
      }
    },
    "niveis": {
      "iniciante": "Duplicidades nascem de reenvio de formulário, de carga repetida e de cadastro paralelo em duas unidades. Detectá-las tem três graus: chave exata, quando o identificador coincide; chave normalizada, quando se removem espaços, caixa e acentos; e similaridade aproximada, com limiar declarado. Inconsistências violam regras internas ou entre sistemas; erros de tipo guardam o valor no formato errado.",
      "intermediario": "O tratamento de duplicidade exige escolha prévia: manter a versão mais completa ou recente, fundir campos complementares ou conservar ambas com marcador e regra de prevalência. A inconsistência interna surge quando a data final antecede a inicial ou a soma difere do total; entre sistemas, quando a mesma pessoa aparece com nomes divergentes ou a mesma medida em unidades incompatíveis.",
      "avancado": "Erros de tipo enganam porque não geram aviso: a soma ignora linhas não numéricas, a ordenação lexicográfica coloca '10' antes de '9' e o filtro não encontra o valor que existe. A conversão explícita com relatório de falhas torna o erro visível. Não há autoridade para inventar o valor que fecha a conta: sem reconciliação possível, o caso escala para o dono do dado.",
      "especialista": "Limpeza madura separa o que se corrige do que se registra. Padronizar caixa e espaçamento, adotar datas no formato ISO 8601, unificar unidades no Sistema Internacional e registrar telefones com código do país reduzem a duplicidade na origem. Cada transformação deixa trilha: qual chave foi usada, qual regra de prevalência venceu e quantos registros foram fundidos ou descartados."
    },
    "comparacoes": [
      {
        "tema": "Duplicidade exata versus similaridade aproximada",
        "a": {
          "rotulo": "Chave exata",
          "texto": "Compara o identificador sem transformação: mesmo CPF ou mesmo código. É objetiva, mas só captura o que coincide caractere a caractere."
        },
        "b": {
          "rotulo": "Similaridade aproximada",
          "texto": "Compara registros parecidos por medida de distância, com limiar declarado; alcança variações de digitação, ao custo de falsos positivos."
        },
        "diferencaGabarito": "A chave exata é determinística; a similaridade exige calibrar o limiar e revisar à mão, pois aproxima demais e pode juntar pessoas distintas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Para eliminar duplicidades, basta remover as linhas com CPF repetido e manter a primeira ocorrida.'",
        "porqueErrada": "A primeira linha pode ser a menos completa ou a mais antiga, e a exclusão simples descarta dado complementar, como endereço atualizado ou telefone novo da linha posterior.",
        "versaoCorreta": "Errado. Deduplicar exige definir a chave, escolher a regra de prevalência — mais recente, mais completa ou fonte autoritativa — e decidir entre fundir campos ou manter ambas com marcador. Remover pela ordem de chegada descarta dado sem critério e sem registro."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Valores numéricos gravados como texto somam normalmente, desde que não haja vírgula.'",
        "porqueErrada": "O tipo de armazenamento decide a operação: ao somar uma coluna textual, a ferramenta pode ignorar as linhas não numéricas e devolver um total incompleto sem avisar.",
        "versaoCorreta": "Errado. Soma exige tipo numérico; sobre texto, a operação pode descartar linhas silenciosamente ou concatená-las. A conduta correta é converter com regra explícita, reportar as falhas e só então totalizar."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "duplicidade",
        "chave normalizada",
        "similaridade aproximada",
        "regra de prevalência",
        "erro de tipo"
      ],
      "regras": [
        "definir chave e regra de prevalência antes de fundir registros",
        "converter tipo com relatório de falhas, nunca por coerção silenciosa",
        "não inventar valor para fechar inconsistência sem autoridade"
      ],
      "comparacoes": [
        "chave exata versus similaridade aproximada: coincidência determinística versus limiar calibrado"
      ],
      "fluxos": [
        "detectar duplicidade por chave exata, normalizada ou similaridade, escolher a regra de prevalência, fundir ou marcar e registrar a transformação"
      ],
      "excecoes": [
        "inconsistência entre sistemas pode exigir escalonamento ao dono do dado",
        "conversão de data com formato variado pede interpretação por padrão declarado"
      ],
      "palavrasChave": [
        "duplicidade",
        "deduplicação",
        "chave",
        "normalização",
        "ISO 8601"
      ],
      "checklist": [
        "A chave de identidade foi definida antes da comparação?",
        "A regra de prevalência está explícita?",
        "O tipo das colunas numéricas e de data foi conferido?",
        "As linhas que não convertem foram listadas?",
        "A fusão ou a exclusão ficou registrada para auditoria?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma planilha de despesas traz a coluna de valor com as entradas '1.234,56', 'R$ 200', '300' e 'abc'. Que regra de conversão produz um número confiável sem esconder erro?",
        "dados": "Quatro entradas: '1.234,56', com ponto como milhar e vírgula como decimal; 'R$ 200', com símbolo de moeda; '300', número puro; e 'abc', texto sem valor. A convenção de origem é ponto para milhar e vírgula para decimal.",
        "conceitos": [
          "erro de tipo",
          "conversão explícita",
          "relatório de falhas"
        ],
        "estrategia": "Declarar a convenção numérica antes de converter, limpar símbolos e separadores de forma controlada e separar as linhas que não convertem, para que nenhuma entrada vire zero nem desapareça em silêncio.",
        "execucao": [
          "1) Declarar que ponto representa milhar e vírgula representa decimal.",
          "2) Remover o símbolo 'R$' e os espaços.",
          "3) Converter as três entradas numéricas pela convenção.",
          "4) Isolar 'abc' em uma lista de falhas."
        ],
        "resultado": "As entradas convertem para 1234,56, 200 e 300; 'abc' não vira zero nem some, mas entra em uma lista de falhas. A coluna passa a ter três valores válidos e uma pendência explícita, em vez de quatro células de aparência numérica.",
        "justificativa": "O gabarito converte o que a convenção explica e reporta o que ela não explica. Tratar milhar e decimal conforme regra declarada e listar a falha preserva a integridade da coluna: a soma não incluirá um zero fabricado, e a origem poderá corrigir o valor textual.",
        "errosFrequentes": [
          "Deixar 'abc' virar zero e somar a coluna como se tudo fosse número.",
          "Trocar a ordem de grandeza ao aplicar a convenção de ponto decimal a dados que usam vírgula."
        ],
        "variacao": "Se a origem usasse ponto como separador decimal, a regra declarada inverteria o papel dos separadores, e '1.234' deixaria de valer mil duzentos e trinta e quatro para representar pouco mais de uma unidade."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em um relatório ordenado por uma coluna de texto, '9' e '10' aparecem com 10 antes de 9, e a chefia acredita que os dados estão errados. Qual é a causa e a correção?",
        "dados": "Coluna de quantidade como texto, com valores '9', '10', '100' e '9'; a ordenação crescente devolve '10', '100', '9', '9'; o total calculado sobre a coluna retorna 128.",
        "conceitos": [
          "ordenação lexicográfica",
          "tipo numérico",
          "erro de tipo silencioso"
        ],
        "estrategia": "Reconhecer que a coluna é texto e que a comparação ocorre caractere a caractere; converter para tipo numérico e repetir a ordenação, conferindo também se o total coincide após a conversão.",
        "execucao": [
          "1) Verificar o tipo declarado da coluna: texto, não número.",
          "2) Explicar que '1' vem antes de '9' na comparação de caracteres.",
          "3) Converter a coluna para inteiro com relatório de falhas.",
          "4) Reordenar e somar de novo, comparando com o total anterior."
        ],
        "resultado": "Após a conversão, a ordem passa a 9, 9, 10 e 100, e o total soma corretamente os quatro valores. A causa não era erro de coleta, mas erro de tipo: a coluna sempre foi texto, e o sistema apenas ordenou o que foi digitado, sem avisar.",
        "justificativa": "O gabarito identifica o erro de tipo como origem: em texto, a comparação é lexicográfica e '10' precede '9' porque o caractere '1' é menor que '9'. Converter para inteiro restaura a ordem e a soma; o caso mostra por que o defeito passa despercebido, sem aviso da ferramenta.",
        "errosFrequentes": [
          "Concluir que os dados foram digitados errados, quando o problema é o tipo da coluna.",
          "Corrigir a ordem à mão sem converter o tipo, deixando o defeito para a próxima carga."
        ],
        "variacao": "Se a coluna tivesse sido criada como inteiro desde a origem, a ordenação e a soma sairiam corretas na primeira execução, sem conversão corretiva a cada relatório."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor afirma: 'Basta remover as linhas com CPF repetido mantendo a primeira; assim a base fica sem duplicidade.' A conduta resolve o problema sem perda de informação?",
        "dados": "Duas linhas com o mesmo CPF: a de 2019 traz nome e matrícula, mas sem telefone nem endereço; a de 2024 traz telefone e endereço atualizados e o mesmo nome. Não há campo que indique a fonte autoritativa.",
        "conceitos": [
          "chave de identidade",
          "regra de prevalência",
          "fusão de registros"
        ],
        "estrategia": "Comparar as duas linhas campo a campo, identificar o que cada uma traz de exclusivo e reconhecer que manter a primeira descarta a atualização mais recente; decidir entre fundir e conservar ambas com marcador.",
        "execucao": [
          "1) Definir o CPF como chave de identidade.",
          "2) Listar os campos presentes em cada linha.",
          "3) Constatar que a linha antiga é menos completa que a recente.",
          "4) Fundir os campos complementares e registrar a regra de prevalência."
        ],
        "resultado": "A remoção pela ordem de chegada perde o telefone e o endereço atualizados da linha de 2024. O correto é fundir os campos complementares, adotar a linha mais recente como prevalente nos conflitos e registrar a fusão, mantendo a base íntegra e auditável.",
        "justificativa": "O gabarito recusa a exclusão cega porque a chave repetida não indica qual linha é melhor: aqui a mais antiga é a menos completa, e remover a posterior descartaria dado válido. Definir prevalência e fundir preserva a informação que a exclusão pela ordem de chegada jogaria fora.",
        "errosFrequentes": [
          "Assumir que a primeira linha é sempre a mais confiável.",
          "Fundir sem registrar a regra, deixando a auditoria sem saber qual valor venceu."
        ],
        "variacao": "Se a segunda linha tivesse endereço divergente e não houvesse fonte autoritativa definida, a decisão deixaria de ser automática e escalaria para o dono do dado, em vez de escolher um endereço por conveniência."
      }
    ]
  }
};
