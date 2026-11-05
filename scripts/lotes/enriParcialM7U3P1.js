const enriParcialM7U3P1 = {
  "m7-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Separar anonimização de pseudonimização decide obrigações de proteção de dados: o dado efetivamente anônimo deixa de ser pessoal, enquanto o pseudonimizado continua sendo dado pessoal e mantém as salvaguardas. O critério único é a existência de chave que permita reatribuir a identidade.",
      "preRequisitos": ["Noção de dado pessoal e de identificador direto, como nome e CPF", "Diferença entre guardar um identificador e guardar a chave que o reconecta ao titular", "Conceito de finalidade do tratamento e de controle de acesso"],
      "objetivosObservaveis": ["Classificar uma transformação como anonimização ou pseudonimização pela existência de chave de reatribuição", "Justificar por que o dado pseudonimizado permanece sujeito às salvaguardas de dado pessoal", "Relacionar a escolha entre anonimizar e pseudonimizar à finalidade do uso"],
      "competencias": ["Reconhecimento de pseudonimização disfarçada de anonimização", "Escolha de técnica de descaracterização coerente com a finalidade", "Argumentação sobre risco residual e necessidade de salvaguarda"],
      "dificuldade": "intermediario",
      "relacoes": ["m7-u3-t1-s2 (Riscos de reidentificação) — aprofunda por que a anonimização é medida de risco, e não garantia", "m7-u3-t2-s2 (Controle de acesso e minimização de dados) — a pseudonimização apoia-se em acesso restrito à chave", "m7-u3-t2-s3 (Proteção de dados e a LGPD) — a distinção define se o dado permanece pessoal"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância classificada como média, por estimativa pedagógica de adequação do tema ao conteúdo de proteção e governança de dados em editais; a cobrança explora a fronteira entre as duas técnicas e o erro de tratar a remoção de nome ou CPF como anonimização."
      }
    },
    "niveis": {
      "iniciante": "Anonimizar é transformar o conjunto de modo que ninguém reconstrua a identidade do titular: removem-se os identificadores diretos e reduz-se o poder discriminante do que resta, por supressão, generalização em faixas ou agregação. Pseudonimizar é substituir o identificador direto por um código e guardar à parte a tabela que reconecta o código ao titular.",
      "intermediario": "O que separa as duas técnicas é a chave. Substituir o CPF por um código e manter a tabela de reatribuição em cofre protegido é pseudonimização: o dado continua pessoal, porque a identificação permanece possível para quem detém a chave. Só há anonimização quando a chave não existe ou não permite voltar ao titular.",
      "avancado": "As duas técnicas servem a finalidades distintas. Pseudonimização é medida de segurança: reduz a exposição no ambiente de análise, permite trabalhar sem a identificação direta à vista e mantém trilha de auditoria, ao custo de conservar o vínculo. Anonimização é descaracterização, indicada para publicar ou pesquisar dados agregados, em que o vínculo não é necessário.",
      "especialista": "A avaliação madura reconhece a pseudonimização disfarçada: manter quase-identificadores granulares e remover apenas nome e documento não descaracteriza, apenas disfarça. A escolha depende de quem detém a chave e de quantos a acessam; quanto mais restrito o acesso e mais forte a separação entre base e tabela, menor o risco."
    },
    "comparacoes": [
      {
        "tema": "Anonimização versus pseudonimização: a chave decide",
        "a": { "rotulo": "Anonimização", "texto": "Elimina a possibilidade de reatribuir a identidade: sem chave e com atributos generalizados, o conjunto deixa de ser dado pessoal." },
        "b": { "rotulo": "Pseudonimização", "texto": "Troca o identificador direto por um código e guarda à parte a chave de reatribuição, protegida; o dado continua sendo pessoal." },
        "diferencaGabarito": "O critério é a existência de chave de reatribuição: sem chave que volte ao titular há anonimização; com chave guardada há pseudonimização, ainda que o identificador direto tenha saído da base."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Substituir o CPF por um código e guardar a tabela de correspondência em cofre é anonimização, pois o identificador saiu da base.'",
        "porqueErrada": "O identificador direto saiu da base de análise, mas a chave guardada permite reatribuir a identidade; o vínculo com o titular permanece, e por isso a operação é pseudonimização.",
        "versaoCorreta": "Errado. Guardar a chave de reatribuição é justamente o que caracteriza a pseudonimização: o dado continua pessoal e mantém as salvaguardas de acesso, finalidade e registro. Anonimização exigiria que não houvesse chave que permitisse voltar ao titular."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Pseudonimização descaracteriza o dado, de modo que ele deixa de ser dado pessoal.'",
        "porqueErrada": "Enquanto existir chave de reatribuição, a identificação permanece possível para quem a detém, e o dado segue sendo pessoal; a pseudonimização é medida de segurança, não de descaracterização.",
        "versaoCorreta": "Errado. Pseudonimizar remove o identificador direto à vista, mas não rompe o vínculo: o dado permanece pessoal e sujeito às mesmas obrigações. Quem descaracteriza é a anonimização, ao eliminar a possibilidade de reatribuir a identidade."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["anonimização", "pseudonimização", "chave de reatribuição", "identificador direto", "quase-identificador"],
      "regras": ["a existência de chave de reatribuição separa pseudonimização de anonimização", "dado pseudonimizado continua sendo dado pessoal", "a finalidade do uso define qual técnica adotar"],
      "comparacoes": ["anonimização versus pseudonimização: ausência de chave versus chave guardada"],
      "fluxos": ["identificar identificadores diretos, avaliar a finalidade, escolher entre descaracterizar e pseudonimizar, documentar técnica e controle da chave"],
      "excecoes": ["dado sem chave guardada, mas com atributos granulares, ainda pode ser reidentificável", "pseudonimização com chave acessível a muitos perde a proteção que promete"],
      "palavrasChave": ["anonimização", "pseudonimização", "chave", "generalização", "dado pessoal"],
      "checklist": ["Existe chave que reconecte o código ao titular?", "A tabela de reatribuição está separada e sob acesso restrito?", "A técnica atende à finalidade declarada do tratamento?", "Os quase-identificadores foram generalizados?", "A operação e o controle da chave ficaram documentados?"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma base de saúde substitui o CPF de cada paciente por um código e guarda a tabela que liga código e CPF em cofre acessível ao encarregado. Trata-se de anonimização ou de pseudonimização?",
        "dados": "Base clínica com 5.000 registros; o CPF foi trocado por um código; a tabela que reconecta código e CPF está em cofre separado, com acesso restrito ao encarregado; os campos clínicos permanecem na base de análise.",
        "conceitos": ["identificador direto", "chave de reatribuição", "dado pessoal"],
        "estrategia": "Localizar o critério decisivo, a existência de chave que reconecta o código ao titular, e verificar se ela existe e está acessível; se existe, a identificação permanece possível e a operação não é anonimização.",
        "execucao": ["1) Identificar o identificador direto substituído: o CPF.", "2) Verificar se existe e onde está guardada a tabela de reatribuição.", "3) Confirmar que a chave permite voltar ao titular.", "4) Classificar a operação e listar as salvaguardas aplicáveis."],
        "resultado": "Trata-se de pseudonimização. O identificador direto saiu da base de análise, mas a chave em cofre torna a reatribuição possível, e o conjunto permanece dado pessoal. A operação reduz a exposição cotidiana, sem dispensar as obrigações de acesso, finalidade e registro.",
        "justificativa": "O gabarito é pseudonimização porque existe chave que reconecta o código ao CPF: o critério não é a presença do nome na linha, e sim a possibilidade de reatribuir a identidade. Como ela persiste, o dado segue pessoal e exige as mesmas salvaguardas.",
        "errosFrequentes": ["Chamar de anonimização só porque o CPF não aparece na base de análise.", "Concluir que o dado deixou de ser pessoal e dispensar o controle de acesso à chave."],
        "variacao": "Se o código fosse gerado por embaralhamento irreversível, sem tabela de correspondência em poder do controlador, a base deixaria de permitir a reatribuição e a operação se aproximaria da anonimização."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma prefeitura quer publicar, em portal de transparência, os gastos por servidor. Que transformações aproximam a publicação de uma anonimização, preservando a finalidade de transparência?",
        "dados": "Base com nome, matrícula, cargo, lotação, data de pagamento e valor pago. O objetivo é permitir o controle social dos gastos; não há necessidade de identificar cada servidor individualmente na publicação.",
        "conceitos": ["supressão de identificadores", "generalização", "agregação"],
        "estrategia": "Suprimir identificadores diretos, reduzir a granularidade dos quase-identificadores e preferir publicar por agregados, de modo que nenhum recorte revele uma pessoa; se a finalidade admite o agregado, ele é mais seguro que a linha individual.",
        "execucao": ["1) Suprimir nome, matrícula e demais identificadores diretos.", "2) Reduzir a granularidade: cargo genérico, faixa salarial e mês no lugar do dia exato.", "3) Suprimir combinações raras que apontem para uma pessoa.", "4) Publicar por cargo, unidade e mês, registrando a decisão tomada."],
        "resultado": "A publicação por agregados, com identificadores suprimidos e faixas em vez de valores exatos, atende à transparência sem expor indivíduos. O portal mostra o gasto por cargo, unidade e mês, e não a linha de cada servidor, reduzindo a granularidade que permitiria reidentificar quem recebeu quanto.",
        "justificativa": "O gabarito combina supressão, generalização e agregação porque a finalidade, o controle social do gasto, não exige identificar o indivíduo. Suprimir apenas o nome manteria a reidentificação por combinação; ao publicar por grupos, a mesma finalidade é atendida com risco menor.",
        "errosFrequentes": ["Publicar a linha individual removendo só o nome, deixando cargo e lotação exatos como pistas.", "Recusar a transparência por completo, em vez de ajustar a granularidade."],
        "variacao": "Se a lei local exigisse a identificação nominal do servidor, a publicação deixaria de poder ser anônima; caberia tratar o dado como pessoal, com base legal e salvaguardas próprias."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato afirma: 'Removidos o nome e o CPF, os dados já estão anonimizados e podem ser publicados livremente.' A afirmação é correta?",
        "dados": "Base de atendimentos com nome e CPF suprimidos, mas mantendo idade exata, CEP, cargo e data do atendimento. Há cargos raros no município, e o número de registros em alguns recortes é pequeno.",
        "conceitos": ["quase-identificador", "reidentificação por combinação", "redução de granularidade"],
        "estrategia": "Testar se a combinação dos atributos remanescentes restringe o espaço até uma pessoa; idade exata mais CEP mais cargo raro pode apontar para um único indivíduo, o que mostra que a remoção dos identificadores diretos não conclui a anonimização.",
        "execucao": ["1) Listar os atributos remanescentes e o poder de recorte de cada um.", "2) Combinar idade, CEP e cargo e contar as pessoas do recorte.", "3) Constatar que cargos raros reduzem o grupo a poucos indivíduos.", "4) Concluir que faltam generalização e supressão de combinações raras."],
        "resultado": "A afirmação está errada. Remover identificadores diretos é o primeiro passo, não a conclusão: a combinação de idade exata, CEP e cargo raro pode recortar a base até uma pessoa. Sem reduzir a granularidade e suprimir combinações raras, o dado permanece reidentificável e segue sendo pessoal.",
        "justificativa": "A leitura ingênua iguala remoção de nome e anonimização, mas a reidentificação costuma ocorrer pela combinação de atributos que, isolados, nada revelam. Como idade, CEP e cargo raro reduzem muito o grupo compatível, o gabarito exige generalização e supressão antes de tratar o conjunto como anônimo.",
        "errosFrequentes": ["Acreditar que suprimir nome e CPF encerra a proteção e liberar a publicação.", "Ignorar que atributos comuns, em combinação, funcionam como identificador."],
        "variacao": "Se a idade fosse publicada em faixas de dez anos, o CEP reduzido ao município e os cargos agrupados por categoria, os recortes ficariam populosos e a distância da anonimização diminuiria de forma sensível."
      }
    ]
  },
  "m7-u3-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Toda base supostamente anônima carrega risco: bastam quase-identificadores combinados com outra base disponível para apontar um indivíduo. Compreender o ataque de recorte e as mitigações — agregar, suprimir atributos raros e adotar grupo mínimo — separa a publicação responsável do vazamento por descuido.",
      "preRequisitos": ["Noção de atributo que, isolado, não identifica, mas combina com outros", "Ideia de cruzamento de bases distintas que descrevem as mesmas pessoas", "Conceito de dado agregado em contraste com microdado de linha individual"],
      "objetivosObservaveis": ["Identificar quase-identificadores em uma tabela e explicar por que a combinação restringe o grupo até uma pessoa", "Descrever o ataque de recorte e avaliar quando uma publicação se torna auto-reveladora", "Aplicar mitigações de agregação, supressão de atributos raros e grupo mínimo antes de publicar"],
      "competencias": ["Simulação de ataque de reidentificação antes da publicação", "Julgamento de risco conforme a granularidade publicada e o contexto de bases disponíveis", "Escolha fundamentada entre publicar microdados e publicar agregados"],
      "dificuldade": "avancado",
      "relacoes": ["m7-u3-t1-s1 (Anonimização x pseudonimização) — define o vocabulário cuja fragilidade este subtópico examina", "m7-u3-t2-s2 (Controle de acesso e minimização de dados) — a redução de granularidade é uma forma de minimização", "m7-u3-t2-s3 (Proteção de dados e a LGPD) — o risco de reidentificação orienta tratar o dado como pessoal"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância classificada como média, por estimativa pedagógica de adequação do tema ao conteúdo de proteção de dados em editais; a cobrança reconhece quase-identificadores, associa o recorte de grupo pequeno à reidentificação e pede a mitigação adequada."
      }
    },
    "niveis": {
      "iniciante": "Reidentificação é voltar a identificar pessoas em bases supostamente anônimas. O instrumento são os quase-identificadores: atributos que, sozinhos, não apontam ninguém, mas que em conjunto estreitam o grupo até uma pessoa, como idade, sexo, CEP, cargo e lotação. Retirar o nome não basta quando esses atributos permanecem em granularidade fina.",
      "intermediario": "O ataque clássico é o recorte, também chamado de mosaicismo: filtra-se a base por combinações de quase-identificadores e, quando o grupo restante tem uma ou duas pessoas, a identidade sai por dedução. Publicações de alto risco combinam granularidade individual, cruzamento com bases livres, atributos raros e sequências finas de tempo ou de localização.",
      "avancado": "As mitigações operam sobre a granularidade e a raridade. Agregar transforma idade em faixa etária e CEP em região; suprimir remove atributos que poucos possuem; e o grupo mínimo exige que cada recorte reúna ao menos k indivíduos. A diversidade pede variação dos atributos sensíveis dentro do recorte. Testar a reidentificação antes de publicar torna-se procedimento.",
      "especialista": "O risco não é propriedade fixa da base, mas função do contexto: o que era seguro ontem pode deixar de ser quando uma nova base se torna pública e passa a permitir cruzamento. Por isso a avaliação é contemporânea e periódica, com a decisão registrada. Em governança, o padrão é preferir o agregado ao microdado e tratar cada publicação como ato de gestão de risco."
    },
    "comparacoes": [
      {
        "tema": "Microdado versus dado agregado",
        "a": { "rotulo": "Microdado", "texto": "Publica cada linha individual, com atributos em granularidade fina; preserva o detalhe, mas aumenta a chance de recorte que isola uma pessoa." },
        "b": { "rotulo": "Dado agregado", "texto": "Publica totais por grupo, com faixas e categorias; perde o detalhe individual e ganha proteção, ao juntar as pessoas em recortes populosos." },
        "diferencaGabarito": "O microdado prioriza o detalhe e traz risco de reidentificação; o agregado prioriza a proteção e responde a perguntas de grupo, o que costuma bastar para a finalidade pública."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Base anônima não pode ser reidentificada; logo, publicá-la não oferece risco algum.'",
        "porqueErrada": "Anonimização é redução de risco, não garantia absoluta: depende do contexto, das bases disponíveis para cruzamento e da granularidade dos atributos publicados.",
        "versaoCorreta": "Errado. O risco de reidentificação é uma estimativa que depende do ambiente de dados: novas bases públicas podem permitir cruzamentos antes inexistentes. Publicar exige avaliação de risco feita no momento, e o que era seguro ontem pode deixar de ser amanhã."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Se cada recorte da base tiver mais de uma pessoa, a reidentificação está descartada.'",
        "porqueErrada": "Grupos de duas pessoas ainda revelam identidade quando se conhece uma delas ou quando um atributo sensível coincide; a proteção exige grupo mínimo maior e alguma diversidade interna.",
        "versaoCorreta": "Errado. Grupo de duas pessoas pode ser reduzido a uma por informação externa, e a homogeneidade dos atributos sensíveis permite inferir o valor do outro membro. O cuidado é exigir grupo mínimo mais folgado e verificar se os atributos sensíveis variam no recorte."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["reidentificação", "quase-identificador", "ataque de recorte", "grupo mínimo", "diversidade"],
      "regras": ["a combinação de quase-identificadores não pode isolar poucos indivíduos", "preferir o agregado ao microdado quando a finalidade permitir", "avaliar o risco no contexto atual de bases disponíveis"],
      "comparacoes": ["microdado versus agregado: detalhe com risco versus proteção com perda de detalhe"],
      "fluxos": ["listar quase-identificadores, simular o recorte, contar o grupo mínimo, generalizar ou suprimir e registrar a decisão"],
      "excecoes": ["combinação rara pode reidentificar mesmo com atributos individualmente inofensivos", "publicação por agregado também pode falhar se o grupo for pequeno e homogêneo"],
      "palavrasChave": ["reidentificação", "quase-identificador", "recorte", "agregação", "granularidade"],
      "checklist": ["Os quase-identificadores foram listados?", "Algum recorte isola uma ou duas pessoas?", "Os atributos raros foram suprimidos?", "A publicação é por agregado quando possível?", "A decisão de risco e sua justificativa ficaram registradas?"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma tabela publicada traz as colunas idade, CEP e cargo, sem nome nem documento. Por que ela ainda pode identificar pessoas, apesar da ausência de identificadores diretos?",
        "dados": "Tabela com três colunas: idade em anos exatos, CEP completo e cargo. Há cargos raros no município, e as idades variam ano a ano, sem agrupamento em faixas.",
        "conceitos": ["quase-identificador", "combinação de atributos", "granularidade"],
        "estrategia": "Verificar o poder de recorte de cada coluna e, sobretudo, o da combinação: idade exata mais CEP completo mais cargo raro estreita o grupo, até que o cruzamento com uma lista pública que traga esses atributos aponte uma pessoa.",
        "execucao": ["1) Avaliar cada coluna isolada: idade, CEP e cargo não identificam sozinhos.", "2) Combinar as três e estimar o tamanho do grupo resultante.", "3) Observar que idade exata e CEP completo têm alto poder de recorte.", "4) Concluir que a tabela é reidentificável e precisa de generalização."],
        "resultado": "A tabela continua identificável porque a tríade idade, CEP e cargo funciona como quase-identificador de alta capacidade: em combinação com uma lista pública que contenha os mesmos atributos, o grupo de pessoas compatíveis costuma cair a um único indivíduo. Sem agregação em faixas, remover o nome não protege nada.",
        "justificativa": "O gabarito reconhece que a proteção não vem da ausência de nome, e sim do controle sobre a combinação de atributos. Como idade exata e CEP completo discriminam muito e o cargo raro reduz o universo, a reidentificação se torna viável; a remediação é agrupar idade em faixas e reduzir o CEP a uma região.",
        "errosFrequentes": ["Concluir que a tabela é anônima por não conter nome ou documento.", "Subestimar o CEP completo como atributo, quando ele já é bastante discriminante."],
        "variacao": "Se a idade fosse publicada em faixas de dez anos e o CEP reduzido à região, a mesma tabela formaria grupos maiores e a reidentificação por cruzamento ficaria bem menos provável."
      },
      {
        "tipo": "aplicacao",
        "problema": "Antes de publicar microdados de atendimentos, que verificação prática reduziria o risco de reidentificação? O conjunto traz sexo, faixa etária, bairro e tipo de atendimento.",
        "dados": "Microdados de atendimentos com as colunas sexo, faixa etária, bairro e tipo de atendimento; alguns bairros são pequenos e certos tipos de atendimento são raros; a finalidade é mostrar a distribuição dos serviços prestados.",
        "conceitos": ["simulação de recorte", "grupo mínimo", "supressão de combinações raras"],
        "estrategia": "Simular o ataque antes de publicar: agrupar pelos quase-identificadores, contar o tamanho de cada recorte e localizar os grupos de uma pessoa; depois ampliar faixas, suprimir combinações raras ou publicar apenas o agregado.",
        "execucao": ["1) Listar sexo, faixa etária, bairro e tipo de atendimento como quase-identificadores.", "2) Agrupar pelas quatro colunas e medir cada recorte.", "3) Isolar os recortes com uma ou duas pessoas.", "4) Ampliar as faixas, suprimir combinações raras e, se preciso, publicar por agregado."],
        "resultado": "A verificação que reduz o risco é a contagem do grupo mínimo por recorte: onde o agrupamento deixa uma ou duas pessoas, a linha é auto-reveladora. Ampliando as faixas etárias, agrupando bairros pequenos e suprimindo tipos raros de atendimento, os recortes ganham tamanho suficiente para a publicação.",
        "justificativa": "O gabarito adota a simulação do ataque porque o risco está na combinação, e não em cada coluna: medir o grupo de cada recorte revela onde a agregação falhou. Ampliar faixas e suprimir combinações raras são as respostas proporcionais, e a decisão deve ser registrada.",
        "errosFrequentes": ["Publicar os microdados sem contar quantas pessoas caem em cada recorte.", "Generalizar todas as colunas ao extremo, inutilizando o dado sem registrar o motivo."],
        "variacao": "Se o bairro fosse substituído por uma divisão regional mais ampla e o tipo de atendimento agrupado por categoria, os recortes cresceriam e a publicação se aproximaria de um risco aceitável."
      },
      {
        "tipo": "erro",
        "problema": "Um gestor afirma: 'Como a base foi anonimizada, a publicação é segura e o risco de reidentificação é nulo.' A afirmação resiste à análise de contexto?",
        "dados": "Base publicada com identificadores diretos removidos, mantendo idade exata, CEP e cargo; existe, à parte, uma lista pública de servidores com idade, função e região que cobre parcialmente o mesmo grupo.",
        "conceitos": ["risco contextual", "cruzamento de bases", "avaliação periódica"],
        "estrategia": "Reconhecer que o risco depende do contexto e testar o cruzamento com a lista pública disponível; identificar se a combinação dos atributos remanescentes com aquela lista aponta indivíduos concretos.",
        "execucao": ["1) Identificar as bases externas disponíveis para cruzamento.", "2) Cruzar os atributos remanescentes com a lista pública de servidores.", "3) Verificar se algum registro fica isolado no cruzamento.", "4) Concluir que o teste precisa ser feito na publicação e repetido depois."],
        "resultado": "A afirmação não resiste. O risco de reidentificação não é nulo, porque depende das bases disponíveis: cruzando os atributos remanescentes com a lista pública, registros podem ficar isolados. A anonimização é medida de risco a ser reavaliada sempre que o ambiente de dados mudar.",
        "justificativa": "O gabarito recusa a garantia absoluta porque o risco é função do contexto: uma lista pública com atributos compatíveis transforma uma base aparentemente anônima em conjunto reidentificável. A conduta correta é avaliar e registrar o risco na publicação e revisá-lo quando novas bases surgirem.",
        "errosFrequentes": ["Assumir que a anonimização encerra o risco em definitivo.", "Ignorar bases externas já públicas que podem ser cruzadas com a publicação."],
        "variacao": "Se a base tivesse sido publicada apenas por agregados e as faixas fossem amplas, o cruzamento com a lista pública não isolaria indivíduos, e a declaração de risco nulo seria mais defensável."
      }
    ]
  }
};
