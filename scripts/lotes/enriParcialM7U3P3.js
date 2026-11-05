const enriParcialM7U3P3 = {
  "m7-u3-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A Lei nº 13.709/2018 determina que controlador e operador adotem medidas de segurança e técnicas aptas a proteger os dados pessoais (art. 46) e prevê sanções administrativas para a infração. Em concursos, o tema é cobrado pela conexão entre dever legal e controle concreto: criptografia, acesso por perfil, segregação de ambientes, trilha de auditoria, resposta a incidentes e cláusulas com terceiros. Tratar o tema como sinônimo de privacidade leva ao erro de gabarito.",
      "preRequisitos": [
        "Noções de controlador, operador, titular e dado pessoal conforme o art. 5º da Lei nº 13.709/2018",
        "Distinção entre base legal e finalidade declarada para o tratamento de dados",
        "Princípios de controle de acesso e de minimização de dados"
      ],
      "objetivosObservaveis": [
        "Relacionar os controles técnicos e organizacionais exigidos pelo art. 46 a cada tipo de dado tratado",
        "Classificar dado pessoal, dado pessoal sensível e dado anonimizado conforme o art. 5º",
        "Diagnosticar em um cenário de serviço público qual controle está ausente e por que ele importa",
        "Explicar por que conformidade declarada em política não substitui evidência técnica de proteção"
      ],
      "competencias": [
        "Leitura crítica de cenários de tratamento de dados, identificando lacunas de proteção",
        "Tradução de exigência legal em medida técnica e organizacional verificável",
        "Fundamentação técnica de providência corretiva após incidente com dados pessoais",
        "Comunicação clara de risco e de exposição para o titular e para a autoridade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u3-t2-s1 (Governança de dados: papéis, políticas e padrões) — define quem responde pela conformidade",
        "m7-u3-t2-s2 (Controle de acesso e minimização de dados) — fornece o núcleo dos controles preventivos",
        "m7-u3-t1-s1 (Anonimização x pseudonimização) — base conceitual para ler a norma"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "O art. 46 da Lei nº 13.709/2018 e a existência de sanções administrativas formam par frequente em itens de segurança da informação e de proteção de dados de editais de nível superior. A classificação é qualitativa, derivada da centralidade curricular, e não representa frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno identifica os quatro papéis da lei, controlador, operador, encarregado e titular, e reconhece que proteger dados pessoais é obrigação legal, não opção de boa prática. O foco está em distinguir dado pessoal de dado anonimizado e em entender que o art. 46 impõe medidas de segurança e técnicas de forma proporcional ao risco. O aluno ainda não desenha controles: apenas reconhece a obrigação e cita exemplos básicos de medida.",
      "intermediario": "Nível intermediário: o aluno associa cada tipo de dado a um controle concreto. Criptografia em repouso e em trânsito, acesso por perfil, segregação entre produção e teste, trilha de auditoria e plano de resposta a incidentes são explicados como resposta a riscos específicos, e não como lista genérica. O aluno aprende a justificar a adequação de uma medida pelo risco que ela reduz e a apontar o controle ausente em um cenário descrito.",
      "avancado": "Nível avançado: o aluno avalia cenários que combinam risco técnico e risco jurídico. Bases de teste alimentadas com dados reais, contratos com terceiros sem cláusulas de proteção, retenção acima do prazo e terceirização sem governança são analisados com a mesma disciplina. A distinção entre incidente com e sem dados pessoais dimensiona o procedimento de comunicação, sempre ancorado no texto verificado da norma.",
      "especialista": "Nível especialista: o aluno desenha um programa de conformidade auditável. Isso inclui inventário de tratamentos, matriz de riscos por finalidade, registro de medidas com evidência de eficácia, cláusulas contratuais com operadores, rotina de teste de recuperação, plano de resposta com comunicação ao titular e à autoridade, e revisão periódica alinhada às mudanças de finalidade. Cada controle é rastreável ao risco que mitiga e ao dever legal que sustenta."
    },
    "comparacoes": [
      {
        "tema": "Dado pessoal, dado pessoal sensível e dado anonimizado",
        "a": {
          "rotulo": "Dado pessoal (art. 5º, I)",
          "texto": "Informação relativa a pessoa natural identificada ou identificável. Abrange nome, CPF, endereço e registro funcional, e também dados de tratamento que permitam associação posterior, ainda que o identificador direto não conste da base consultada."
        },
        "b": {
          "rotulo": "Dado anonimizado",
          "texto": "Dado que, pelo tratamento e por meios técnicos razoáveis, não pode ser associado a pessoa natural, considerando o custo e o estado da tecnologia. Uma vez anonimizado de forma robusta, deixa de estar no alcance da lei."
        },
        "diferencaGabarito": "Pseudonimização não é anonimização: com chave de reversão ou registro de correspondência, o dado continua pessoal e a proteção integral se mantém. O critério decisivo é a inviabilidade prática de reidentificação, e não a simples ausência do nome."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Publicar dados pessoais na internet não configura tratamento, porque a informação já era pública.'",
        "porqueErrada": "Publicar dados pessoais continua sendo tratamento, pois há coleta, organização e divulgação com finalidade própria. O acesso público não elimina a licitude do tratamento: continuam aplicáveis a base legal, a finalidade, a transparência e os deveres de segurança previstos na lei.",
        "versaoCorreta": "Dados pessoais permanecem sob a lei mesmo quando a fonte é pública; a licitude do tratamento depende de base legal e de finalidade, não da origem da informação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A proteção de dados pessoais é responsabilidade exclusiva do encarregado.'",
        "porqueErrada": "A lei atribui deveres ao controlador e ao operador, e o art. 46 determina que adotem medidas de segurança e técnicas aptas a proteger os dados. O encarregado é ponto focal de interlocução e de boas práticas, não o único responsável legal. Delegar tudo a ele exime o controlador e agrava o risco de conformidade.",
        "versaoCorreta": "O dever de proteção recai sobre controlador e operador; o encarregado atua como ponto focal, com função de advise e canal de diálogo com titulares e com a autoridade."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Anonimizar a base é medida suficiente para dispensar o art. 46.'",
        "porqueErrada": "Anonimização robusta pode retirar o dado do alcance da lei, mas isso depende de método, custo e estado da tecnologia. O erro da pegadinha é tratar a anonimização como atalho para eliminar deveres: enquanto a reidentificação for viável, o dado permanece pessoal e todas as medidas de segurança e de governança continuam obrigatórias.",
        "versaoCorreta": "A anonimização é medida de mitigação dentro de um programa de proteção; ela só afasta a incidência da lei quando a reidentificação for efetivamente inviável."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Dado pessoal: informação relativa a pessoa natural identificada ou identificável, conforme o art. 5º, I",
        "Controlador: quem decide sobre finalidades e meios do tratamento; operador: quem trata em nome do controlador",
        "Pseudonimização: troca de identificadores por códigos, com reversão possível, não equivale a anonimização",
        "Encarregado: ponto focal de interlocução com titulares e com a autoridade, com função de advise"
      ],
      "regras": [
        "O art. 46 impõe medidas de segurança e técnicas aptas a proteger os dados, adequadas ao risco",
        "A anonimização só afasta a lei quando a reidentificação for inviável por meios técnicos razoáveis",
        "Conformidade se demonstra por evidência registrada, e não por declaração em política interna"
      ],
      "comparacoes": [
        "Dado pessoal contra dado anonimizado: o critério é a inviabilidade de reidentificação, não a ausência do nome"
      ],
      "fluxos": [
        "Inventário de tratamentos, classificação do dado, matriz de risco por finalidade, medida com evidência e revisão periódica"
      ],
      "excecoes": [
        "A obrigação de proteger subsiste mesmo quando o dado é divulgado publicamente, desde que permaneça pessoal"
      ],
      "palavrasChave": [
        "art. 46",
        "medidas de segurança",
        "dado pessoal",
        "anonimização",
        "pseudonimização",
        "controlador",
        "operador",
        "encarregado"
      ],
      "checklist": [
        "Classificar cada campo da base como pessoal, pessoal sensível, pseudonimizado ou anonimizado",
        "Registrar finalidade e base legal de cada tratamento no inventário",
        "Verificar segregação entre ambiente de produção e ambiente de teste",
        "Exigir registro de auditoria em acesso a dados pessoais",
        "Formalizar cláusulas de proteção e de comunicação de incidente com operadores",
        "Definir prazo de retenção e rotina de descarte"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma secretaria implanta planilha de atendimento com nome completo, CPF, endereço, histórico de fornecimento e observações sobre saúde. O encarregado pergunta quais medidas o art. 46 exige. Classifique o risco e proponha o primeiro conjunto de medidas.",
        "dados": "Planilha com 12.480 registros de 2019 a 2026 em arquivo único na rede da secretaria, com permissão de leitura para todo o setor e sem trilha de auditoria. Há campo de observações sobre saúde preenchido em 640 registros.",
        "conceitos": [
          "Dado pessoal sensível: dado sobre saúde, que exige proteção reforçada",
          "Segregação de ambientes e controle de acesso por perfil"
        ],
        "estrategia": "Tratar o conjunto como dado pessoal sensível por causa do campo de saúde, reduzir o conjunto ao mínimo necessário e fechar a lacuna mais óbvia de exposição: o acesso amplo sem registro. Cada medida deve ser proporcional ao risco e registrada para prova posterior.",
        "execucao": [
          "Classificar os campos: nome, CPF e endereço são pessoais, e as observações sobre saúde são dados pessoais sensíveis",
          "Retirar o campo de saúde da planilha de uso geral e guardá-lo em área restrita com base legal própria",
          "Restringir a leitura por perfil ao pessoal autorizado e remover o acesso amplo de todo o setor",
          "Ativar registro de auditoria com usuário, data e dado consultado",
          "Definir prazo de retenção conforme a finalidade do atendimento e rotina de descarte do excedente"
        ],
        "resultado": "Plano com cinco medidas: reclassificação dos campos, segregação do dado sensível, restrição por perfil, registro de auditoria e retenção com descarte. A exposição mais grave, leitura por todo o setor sem rastro, deixa de existir e passa a ser detectável.",
        "justificativa": "O art. 46 exige medidas aptas a proteger os dados, proporcionais ao risco. Dados de saúde elevam o risco, e acesso indiscriminado sem registro é o que torna qualquer incidente impossível de apurar. Segregação, restrição por perfil e auditoria respondem de forma verificável, enquanto a reclassificação evita que o conjunto siga tratado como dado comum.",
        "errosFrequentes": [
          "Confundir o encarregado com o responsável legal e entregar a ele toda a tarefa de proteção",
          "Considerar que criptografia sozinha resolve o problema, mantendo o acesso amplo sem registro",
          "Apagar os dados de saúde do sistema e perder a informação necessária ao atendimento"
        ],
        "variacao": "Se a planilha for migrada para um sistema com autenticação forte e registro nativo, mas a finalidade for ampliada para análise de fila, o plano muda: é preciso revisar a base legal, redefinir a retenção e avaliar se a finalidade nova exige informar o titular."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma secretaria terceiriza o envio de cartas de confirmação de benefício a uma empresa de comunicação. O contrato trata apenas de preço e prazo. Identifique os controles que faltam e a providência cabível.",
        "dados": "Contrato de 18 meses envia, mensalmente, 4.200 cartas com nome completo, CPF, endereço e valor do benefício a 4.800 destinatários distintos, com arquivo compartilhado por link.",
        "conceitos": [
          "Operador: quem trata dados pessoais em nome do controlador",
          "Cláusulas contratuais de proteção e de comunicação de incidente"
        ],
        "estrategia": "Enquadrar a situação como tratamento por operador e, a partir dessa qualificação, listar as cláusulas obrigatórias e o registro do tratamento. A providência é de governança: ajustar o instrumento antes do próximo ciclo de envio.",
        "execucao": [
          "Registrar no inventário que a secretaria é controladora e a empresa de comunicação é operadora",
          "Incluir no contrato cláusulas de proteção de dados, proibição de uso fora da finalidade, exigência de suboperadores autorizados e dever de comunicar incidente em prazo definido",
          "Definir descarte ou devolução dos dados ao término do contrato, com comprovação",
          "Exigir acesso restrito aos arquivos e registro das remessas",
          "Definir como a secretaria audita a conformidade do operador e em que periodicidade"
        ],
        "resultado": "Contrato complementado com cinco cláusulas e inventário atualizado. A quantidade de 4.200 cartas mensais deixa de ser apenas volume e passa a ser elemento de risco mensurável, o que permite calibrar a resposta a incidente e a auditoria.",
        "justificativa": "Enviar dados a terceiro é tratamento por operador, o que transfere a execução, mas não transfere a responsabilidade do controlador. Sem cláusulas, o contrato não assegura finalidade limitada, proteção do arquivo, descarte ao fim nem comunicação de incidente, e a organização fica sem meio de exigir ou comprovar qualquer desses pontos.",
        "errosFrequentes": [
          "Entender que a terceirização transfere a responsabilidade legal ao fornecedor",
          "Aceitar que a empresa descarte os dados apenas por declaração verbal",
          "Tratar o volume de envios como irrelevante para o dimensionamento do risco"
        ],
        "variacao": "Se a empresa sugerir o uso de sua própria plataforma de envio por link, em vez de receber arquivos, a qualificação permanece de operador, mas o contrato passa a prever o formato da integração, a garantia de exclusão no encerramento e a responsabilidade por falha de link."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como os dados dos beneficiários já constam de sistemas públicos, a secretaria pode republicá-los em planilha aberta no portal, desde que use o mesmo formato.'",
        "dados": "Portal do município publica arquivo com nome completo e CPF de 1.930 beneficiários de benefício social, sem agregação e sem ocultar qualquer campo.",
        "conceitos": [
          "Publicação de dado pessoal exige previsão legal específica, e não apenas formato idêntico ao original",
          "Agregação como alternativa de divulgação de interesse coletivo"
        ],
        "estrategia": "Identificar o erro na transposição da lógica: a origem pública do dado não autoriza nova publicação nominal. A leitura ingênua confunde reaproveitamento de formato com licitude de finalidade, e é por isso que a resposta aparentemente defensável falha.",
        "execucao": [
          "Separar as duas perguntas distintas: o dado é pessoal, e há previsão legal para a nova divulgação nominal?",
          "Verificar que a lista nominada é dado pessoal, ainda que a origem seja cadastro público",
          "Identificar a base legal invocada e sua compatibilidade com a finalidade pretendida",
          "Propor alternativa agregada que preserve o interesse coletivo sem identificar titulares",
          "Registrar providência de remoção do conteúdo publicado e de apuração do processo de publicação"
        ],
        "resultado": "Publicação indevida caracterizada, com providência de remover o arquivo e substituir por dados agregados por bairro ou faixa de renda, além de apuração interna. A quantidade nominal deixa de ser o produto legítimo da transparência.",
        "justificativa": "A transparência ativa exige fundamento legal para cada publicação e não se confunde com a disponibilização de cadastro. Ao publicar a lista nominada, o órgão disponibiliza dados pessoais a um conjunto de pessoas sem previsão legal, o que amplia a exposição e não corrige a publicação indevida.",
        "errosFrequentes": [
          "Justificar a publicação pela existência do cadastro público de origem",
          "Confundir obrigação de divulgar o benefício com obrigação de divulgar o nome do beneficiário",
          "Reconhecer o erro e manter a planilha online enquanto a correção é preparada"
        ],
        "variacao": "Se a publicação for substituída por agregado por bairro, a checagem muda de natureza: passa a incidir sobre a qualidade do agregado, sobre a possibilidade de reidentificação por combinações de atributos e sobre a atualização periódica dos dados publicados."
      }
    ]
  }
};
