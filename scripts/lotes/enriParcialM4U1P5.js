const enriParcialM4U1P5 = {
  "m4-u1-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Hash e assinatura digital sustentam integridade, autenticidade e não repúdio. Em prova, aparecem em itens que opõem hash a criptografia e testam o que a assinatura garante.",
      "preRequisitos": [
        "Noções de integridade e de autenticidade da tríade CIA",
        "Criptografia simétrica e par de chaves pública e privada"
      ],
      "objetivosObservaveis": [
        "Enumerar as propriedades do hash: determinismo, efeito avalanche e as três resistências",
        "Distinguir hash, de mão única e sem chave, de criptografia, reversível com chave",
        "Descrever os três passos da assinatura e por que a verificação falha com documento alterado"
      ],
      "competencias": [
        "Leitura crítica de itens que misturam hash, cifra e assinatura",
        "Deduzir de um controle o que ele garante e o que não garante"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t3-s1 (Criptografia simétrica) — contraste: hash não tem chave nem inversa",
        "m4-u1-t3-s2 (Criptografia assimétrica, certificados e PKI) — a assinatura cifra o hash com a chave privada",
        "m4-u1-t1-s2 (Autenticidade, responsabilização e não repúdio) — a assinatura é a evidência do não repúdio",
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — o hash atua como controle de integridade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Comparece em itens que opõem hash e criptografia ou listam o que a assinatura garante. Classificação qualitativa e estimativa pedagógica, sem medição estatística."
      }
    },
    "niveis": {
      "iniciante": "Hash transforma qualquer entrada em resumo fixo, sempre igual para a mesma entrada, com efeito avalanche: um caractere diferente muda o resumo por completo. Ele resiste a três ataques: achar a entrada pelo resumo, achar outra igual e achar duas iguais.",
      "intermediario": "Hash não usa chave e não se decifra: compara-se o resumo publicado com o recalculado. Senhas exigem hash lento com sal individual (bcrypt, Argon2), nunca texto puro. A assinatura cifra o hash com a chave privada; o verificador recalcula e compara.",
      "avancado": "A lentidão do hash de senha encarece força bruta, e o sal individual impede cálculo reaproveitado entre usuários. Na assinatura, a propriedade vem do sentido de uso da chave: cifrar o hash com a privada prova autoria e integridade, mas não esconde nada.",
      "especialista": "Resistência a colisão e resistência a pré-imagem não se confundem na prática forense. A assinatura cobre o hash do conjunto assinado, logo anexos trocados invalidam a verificação; o ponto frágil passa a ser a guarda da chave privada."
    },
    "comparacoes": [
      {
        "tema": "Hash e criptografia",
        "a": {
          "rotulo": "Função de hash",
          "texto": "Mão única e sem chave: gera resumo fixo e não possui inversa; atesta integridade."
        },
        "b": {
          "rotulo": "Criptografia",
          "texto": "Reversível com chave: protege confidencialidade e devolve o original a quem decifra."
        },
        "diferencaGabarito": "Hash atesta integridade sem segredo algum; cifra protege confidencialidade e depende de chave."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Cifrar a senha do usuário com AES é a forma correta de armazená-la.'",
        "porqueErrada": "Confunde cifra com hash: o servidor não precisa recuperar a senha, e a chave AES vazada devolve a base inteira.",
        "versaoCorreta": "Errado em dois pontos: senhas devem ser armazenadas com hash de propósito lento com sal (não cifradas), pois o servidor não precisa recuperar o texto original; e se a cifragem for usada, o atacante que obtenha a chave recupera todas as senhas de uma vez."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Assinatura digital garante que só o destinatário leia o documento.'",
        "porqueErrada": "Atribui à assinatura propriedade de confidencialidade: ela prova autoria e integridade, mas o conteúdo segue legível.",
        "versaoCorreta": "Assinatura garante integridade, autenticidade e não repúdio; confidencialidade exige cifrar com a chave do destinatário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Hash: entrada qualquer em resumo fixo, determinístico, com efeito avalanche",
        "Resistências: pré-imagem, segunda pré-imagem e colisão",
        "Assinatura: hash do documento cifrado com a chave privada",
        "Sal: valor individual por senha, que impede cálculo reaproveitado"
      ],
      "regras": [
        "Senha se guarda com hash lento e sal individual, nunca em texto puro",
        "Verificação: decifrar com a chave pública, recalcular o hash e comparar",
        "Documento alterado gera hash diferente e a verificação falha"
      ],
      "comparacoes": [
        "Hash é de mão única e sem chave; cifra é reversível com chave"
      ],
      "fluxos": [
        "Assinar: calcular hash → cifrá-lo com a chave privada → anexar. Verificar: decifrar com a pública → recalcular → comparar"
      ],
      "excecoes": [
        "Resumo em canal comprometido não protege: atacante troca arquivo e resumo juntos"
      ],
      "palavrasChave": [
        "hash",
        "SHA-256",
        "assinatura digital",
        "sal",
        "colisão"
      ],
      "checklist": [
        "Identificar se o item trata de integridade ou de confidencialidade",
        "Conferir o sentido de uso da chave na assinatura",
        "Descartar itens que dão confidencialidade à assinatura",
        "Lembrar que senha se guarda com hash lento e sal"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Você baixa um arquivo e o distribuidor publica o resumo SHA-256. Como o resumo é usado?",
        "dados": "Arquivo de 40 MB do site do distribuidor; resumo SHA-256 publicado na mesma página; download pela internet.",
        "conceitos": [
          "Determinismo do hash",
          "Efeito avalanche",
          "Comparação como teste de integridade"
        ],
        "estrategia": "Recalcular o hash do arquivo e comparar com o publicado: igual indica integridade; diferente indica alteração ou corrupção.",
        "execucao": [
          "Calcular o SHA-256 do arquivo baixado",
          "Comparar caractere a caractere com o resumo publicado",
          "Concluir que iguais atestam integridade e diferentes indicam alteração"
        ],
        "resultado": "Recalcula-se o hash do arquivo baixado e compara-se com o publicado: igual → integridade preservada desde a publicação; diferente → arquivo alterado (ou corrompido na transmissão). O resumo não protege contra ataque se o canal de publicação também estiver comprometido.",
        "justificativa": "Hash determinístico com efeito avalanche: um bit diferente muda o resumo, e a comparação passa a ser um teste de integridade. Sem chave, tudo depende de o resumo publicado ser autêntico.",
        "errosFrequentes": [
          "Tratar resumo diferente como arquivo inválido sem reconsiderar download incompleto",
          "Confiar no resumo hospedado no mesmo servidor do arquivo"
        ],
        "variacao": "O resumo passa a ser publicado em página assinada pela chave do projeto. O que muda na conclusão e por quê?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um contrato é assinado digitalmente e depois um dos anexos é trocado. O que acontece na verificação?",
        "dados": "Contrato em PDF com dois anexos; assinatura sobre o conjunto; na conferência, o primeiro anexo aparece substituído.",
        "conceitos": [
          "Assinatura sobre o hash do conjunto",
          "Recálculo do hash na verificação",
          "Integridade e não repúdio"
        ],
        "estrategia": "A verificação decifra a assinatura com a chave pública, recalcula o hash do documento e compara: com o anexo trocado, o hash diverge e falha.",
        "execucao": [
          "Decifrar a assinatura com a chave pública e obter o hash original",
          "Recalcular o hash do documento recebido com todos os anexos",
          "Comparar os dois resumos e concluir que houve alteração após a assinatura"
        ],
        "resultado": "A assinatura cobre o hash do documento original; com o anexo trocado, o hash recalculado diverge e a verificação falha — evidência de adulteração. Por isso a assinatura deve cobrir todos os elementos do ato, inclusive anexos.",
        "justificativa": "A assinatura sela o hash do conjunto, não o texto: qualquer mudança em qualquer parte gera resumo diferente. A verificação compara resumos, então a divergência é prova de alteração.",
        "errosFrequentes": [
          "Achar que a assinatura cobre só o corpo do contrato e ignorar anexos",
          "Interpretar a falha como certificado inválido, e não como documento alterado"
        ],
        "variacao": "A troca atinge o certificado do signatário: a chave pública não decifra a assinatura. O que a falha indica e qual providência cabe?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em item de prova: 'Cifrar a senha do usuário com AES é a forma correta de armazená-la no banco de dados.'",
        "dados": "Sistema web com 80 mil usuários; proposta de cifrar senhas com AES-256; chave em arquivo de configuração no mesmo servidor.",
        "conceitos": [
          "Hash lento com sal",
          "Cifra reversível e dependência de chave",
          "Superfície de vazamento da base"
        ],
        "estrategia": "Testar dois eixos: o servidor precisa da senha original ou apenas compará-la? E o que ocorre se a chave vazar? O correto exige hash lento com sal.",
        "execucao": [
          "Verificar que o servidor não precisa da senha em texto claro",
          "Notar que AES é reversível: com a chave, decifra-se a base inteira",
          "Concluir pelo hash lento com sal individual (bcrypt, Argon2)"
        ],
        "resultado": "O item está errado: o correto é hash de propósito lento com sal individual, e a cifra AES concentra o risco na chave, que devolve todas as senhas se vazada.",
        "justificativa": "Hash com sal é de mão única e custoso por construção: testar senhas uma a uma fica caro, e o sal impede cálculo entre usuários. Cifra é reversível, logo a base depende de um único segredo.",
        "errosFrequentes": [
          "Confundir protegido com recuperável: cifrar permite reverter tecnicamente",
          "Esquecer que a chave vira ponto único de falha da base"
        ],
        "variacao": "A proposta muda para MD5 sem sal, por desempenho. Qual é o novo problema e qual família atende à lentidão intencional?"
      }
    ]
  },
  "m4-u1-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Completo, incremental e diferencial trocam custo de execução por custo de restauração. Em prova, cobra-se o número de mídias ou o tempo de recuperação de uma semana.",
      "preRequisitos": [
        "Conceitos de disponibilidade e de controles corretivos de segurança",
        "Noção de volume alterado por dia e de janela noturna de execução"
      ],
      "objetivosObservaveis": [
        "Calcular quantas mídias uma restauração exige em sequência com completo e incrementais",
        "Calcular o volume copiado por um diferencial ao longo da semana",
        "Escolher a estratégia coerente com a janela e a meta de restauração"
      ],
      "competencias": [
        "Leitura de sequências temporais de backup",
        "Decisão sob restrição de janela e de risco de falha de mídia"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t4-s2 (Estratégia 3-2-1, cópias imutáveis e testes de restauração) — a política que cerca os três tipos",
        "m4-u1-t4-s3 (Continuidade de negócios, recuperação de desastres, RPO e RTO) — as metas que definem a frequência",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — a restauração como controle corretivo",
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — o backup sustenta a disponibilidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Comparece em itens de disponibilidade e continuidade, em múltipla escolha com sequência semanal e volumes em GB. Classificação qualitativa e estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "Completo copia todos os dados selecionados: gasta mais tempo e espaço, mas restaurar é simples, pois basta uma mídia. Incremental copia o que mudou desde o último backup de qualquer tipo: execução rápida, e restauração que exige o completo mais todas as incrementais em ordem.",
      "intermediario": "Diferencial copia o que mudou desde o último completo: as execuções crescem na semana e a restauração precisa só do completo com a última diferencial. Na sequência canônica, quarta se restaura com duas mídias; pela cadeia incremental seriam três.",
      "avancado": "A escolha é uma troca explícita: janela curta favorece o incremental, restauração rápida favorece completo com diferencial, e o risco de cópia corrompida no meio penaliza o incremental. Política madura combina os dois e sempre testa a restauração.",
      "especialista": "Sob ameaça de ransomware, variar o meio e isolar as cópias importa mais que o tipo: uma cadeia incremental íntegra, porém cifrada junto com o servidor, não restaura nada. Medir o tempo real de restauração comprova a capacidade."
    },
    "comparacoes": [
      {
        "tema": "Incremental e diferencial",
        "a": {
          "rotulo": "Backup incremental",
          "texto": "Copia o que mudou desde o último backup de qualquer tipo; execuções curtas e cadeia longa na restauração."
        },
        "b": {
          "rotulo": "Backup diferencial",
          "texto": "Copia o que mudou desde o último completo; execuções crescem e a restauração usa só a última diferencial."
        },
        "diferencaGabarito": "A referência define tudo: último backup de qualquer tipo para o incremental, último completo para o diferencial."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Backup diferencial pega as alterações desde o último backup de qualquer tipo.'",
        "porqueErrada": "Empresta ao diferencial a regra do incremental: a referência do diferencial é sempre o último completo, e isso muda volume e cadeia.",
        "versaoCorreta": "Errado: é o incremental que copia desde o último backup de qualquer tipo; o diferencial copia sempre desde o último COMPLETO."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Se a execução do backup é rápida, a restauração também será rápida.'",
        "porqueErrada": "Confunde tempo de cópia com tempo de recuperação: o incremental grava pouco, mas exige aplicar o completo e toda a cadeia seguinte.",
        "versaoCorreta": "Execução rápida não implica restauração rápida: cadeias incrementais são baratas de gravar e caras de reconstruir."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Completo: cópia integral dos dados selecionados na execução",
        "Incremental: cópia do que mudou desde o último backup de qualquer tipo",
        "Diferencial: cópia do que mudou desde o último completo",
        "Cadeia de restauração: sequência obrigatória de mídias"
      ],
      "regras": [
        "Restauração incremental exige o completo e todas as incrementais em ordem",
        "Restauração diferencial exige o completo e apenas a última diferencial",
        "Toda política se completa com teste de restauração e verificação de checksum"
      ],
      "comparacoes": [
        "Incremental referência o último backup qualquer; diferencial, o último completo"
      ],
      "fluxos": [
        "Semana canônica: domingo completo, segunda e terça incrementais, quarta diferencial; restaurar quarta exige completo mais a diferencial"
      ],
      "excecoes": [
        "Incremental perdida no meio da cadeia: só se restaura até a última cópia íntegra anterior"
      ],
      "palavrasChave": [
        "backup completo",
        "incremental",
        "diferencial",
        "cadeia de restauração",
        "checksum"
      ],
      "checklist": [
        "Identificar a referência de cada cópia",
        "Contar as mídias exigidas para a data pedida",
        "Comparar o volume por dia com a janela",
        "Desconfiar de item que iguala execução e restauração"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Na sequência 'domingo completo, segunda incremental, terça incremental', quantas mídias são necessárias para restaurar na terça?",
        "dados": "Semana com completo no domingo, incremental na segunda e incremental na terça; base de 100 GB e 10 GB alterados por dia.",
        "conceitos": [
          "Backup completo",
          "Backup incremental",
          "Cadeia ordenada de restauração"
        ],
        "estrategia": "Contar as execuções posteriores ao último completo: cada incremental copia a diferença sobre a anterior, então terça exige aplicar todas em ordem.",
        "execucao": [
          "Localizar o último completo da semana: o de domingo",
          "Listar as incrementais seguintes: segunda e terça",
          "Aplicar o completo e cada incremental na ordem"
        ],
        "resultado": "Três: o completo de domingo, a incremental de segunda e a incremental de terça, nesta ordem. Se qualquer uma faltar ou estiver corrompida, o conjunto pode ficar inutilizável.",
        "justificativa": "Cada incremental guarda apenas a diferença sobre a execução anterior, então o estado de terça fica distribuído na cadeia. A ordem é obrigatória porque cada diferença foi calculada sobre a anterior.",
        "errosFrequentes": [
          "Contar apenas as incrementais e esquecer o completo",
          "Tratar as cópias como independentes, quando a restauração é sequencial"
        ],
        "variacao": "A cópia incremental de segunda está corrompida. O que ainda é possível restaurar e com quais mídias?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão tem janela de 1 hora à noite e meta de restauração em 2 horas. Que combinação é coerente?",
        "dados": "Janela noturna de 1 hora; base de 100 GB com 10 GB alterados por dia útil; meta de restauração em 2 horas.",
        "conceitos": [
          "Janela de execução",
          "Custo de restauração",
          "RTO e teste de restauração"
        ],
        "estrategia": "Dimensionar pela janela: um completo diário de 100 GB não caberia em 1 hora, logo completo periódico com incrementais diários; a meta exige cadeia curta e teste cronometrado.",
        "execucao": [
          "Descartar o completo diário: 100 GB não cabem na janela",
          "Adotar completo semanal e incrementais diários de cerca de 10 GB",
          "Validar os 2 horas com teste de restauração cronometrado e registro"
        ],
        "resultado": "Incrementais diários (execução curta) com um completo semanal e um diferencial intermediário se a janela permitir; além disso, RTO de 2 horas exige restauração treinada com medição real de tempo — estratégia que só funciona se o teste de restauração comprovar o prazo.",
        "justificativa": "A janela limita o volume por noite e elimina o completo diário; a meta limita o tamanho da cadeia. As restrições conflitam, a solução combina tipos de cópia e só o teste a garante.",
        "errosFrequentes": [
          "Projetar apenas pela facilidade de execução, ignorando a meta",
          "Tratar o teste de restauração como etapa opcional"
        ],
        "variacao": "A janela sobe para 4 horas e a meta cai para 30 minutos. Que combinação se torna coerente e que verificação é indispensável?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Backup diferencial pega as alterações desde o último backup de qualquer tipo.'",
        "dados": "Semana com completo no domingo, incrementais de segunda a quarta e diferencial na sexta; base de 100 GB e 10 GB por dia.",
        "conceitos": [
          "Ponto de referência da cópia",
          "Diferencial",
          "Incremental"
        ],
        "estrategia": "Confrontar a afirmação com a definição: o diferencial acumula desde o último completo, e o incremental desde a última execução. Os números da semana mostram que a leitura errada muda volume e mídias.",
        "execucao": [
          "Identificar a referência na afirmação: último backup de qualquer tipo",
          "Confrontar com a definição: diferencial referência o último completo",
          "Verificar que na sexta o diferencial acumula 50 GB desde domingo, não 10 desde quinta"
        ],
        "resultado": "Errado. A descrição é do incremental; o diferencial copia desde o último completo, e é isso que permite restaurar sexta com apenas duas mídias.",
        "justificativa": "A referência determina volume e cadeia: desde o último completo, o diferencial acumula a semana e dispensa incrementais; desde a última execução, o incremental grava pouco e depende da cadeia.",
        "errosFrequentes": [
          "Aplicar ao diferencial a regra do incremental pela semelhança dos nomes",
          "Calcular a sexta como 10 GB, ignorando a acumulação desde domingo"
        ],
        "variacao": "A mesma frase passa a ser sobre o incremental: 'pega o que mudou desde o último backup qualquer'. Está correta, e que consequência tem para sexta?"
      }
    ]
  }
};
