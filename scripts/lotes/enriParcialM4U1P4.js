const enriParcialM4U1P4 = {
  "m4-u1-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A criptografia simétrica usa a mesma chave para cifrar e decifrar, tem custo baixo por byte e protege grandes volumes (disco, backup, canal TLS), mas seu problema central é distribuir a chave com segurança. Dominar isso é essencial em concursos de TI para dimensionar soluções e evitar o erro de expor a chave junto ao conteúdo cifrado.",
      "preRequisitos": ["Noção de cifra e decifra", "Diferença entre texto claro e texto cifrado", "Conceito de chave como segredo que protege a comunicação"],
      "objetivosObservaveis": ["Explique que a mesma chave cifra e decifra na simétrica", "Identifique o problema central: distribuição segura da chave", "Indique usos adequados: cifragem de disco, backup, canal de dados TLS"],
      "competencias": ["Raciocínio de desempenho: escolher simétrica para grandes volumes", "Atenção à separação entre chave e dado cifrado", "Conhecimento do ciclo de vida de chaves (geração, armazenamento, rotação, revogação)"],
      "dificuldade": "intermediario",
      "relacoes": ["m4-u1-t3-s2 (Criptografia assimétrica, certificados e PKI) — mecanismo que protege a troca da chave simétrica"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Criptografia simétrica e o problema da distribuição de chaves integram o conteúdo programático de TI em questões sobre desempenho de cifras, uso adequado por volume de dados e segurança da chave, com relevância para cargos de segurança da informação."
      }
    },
    "niveis": {
      "iniciante": "Na criptografia simétrica, a mesma chave cifra e decifra. Como o custo computacional é baixo em relação à assimétrica, é a escolha para proteger grandes volumes: cifragem de disco, proteção de backup e o canal de dados de uma sessão TLS, após a negociação inicial. O problema central é a distribuição da chave: ela precisa chegar a ambas as partes sem ser interceptada.",
      "intermediario": "Quando há muitos pares de usuários, o número de chaves cresce rapidamente: n pares exigem n(n−1)/2 chaves em comunicações plenas. Por isso, na prática a simétrica é quase sempre precedida por um acordo de chave por meio assimétrico. O algoritmo é público e a segurança depende da chave, não do segredo do algoritmo.",
      "avancado": "Chaves precisam de ciclo de vida completo: geração, armazenamento seguro, rotação periódica e revogação. Não devem ser reutilizadas de maneira previsível para conteúdos distintos. AES é o padrão de referência e ChaCha20 é outra alternativa amplamente citada em material técnico.",
      "especialista": "Implementar simétrica em produção exige gerenciador de chaves (KMS), rotação automática, separação entre chave de cifração e chave de autenticação de mensagens, e auditoria de acesso às chaves. Isso reduz o impacto de comprometimento de uma única chave."
    },
    "comparacoes": [
      {
        "tema": "Criptografia simétrica versus assimétrica em desempenho e uso",
        "a": { "rotulo": "Simétrica", "texto": "Mesma chave cifra e decifra; custo baixo por byte; indicada para grandes volumes (disco, backup, canal de dados)." },
        "b": { "rotulo": "Assimétrica", "texto": "Par de chaves pública e privada; custo maior; usada para proteger a troca da chave simétrica e assinaturas." },
        "diferencaGabarito": "A simétrica é rápida e protege o conteúdo em volume; a assimétrica é lenta e serve principalmente a negociar a chave simétrica com segurança."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Em criptografia simétrica, a chave secreta é enviada junto ao arquivo cifrado para o destinatário.",
        "porqueErrada": "Enviar a chave junto com o conteúdo anula a proteção: quem intercepta ambos cifra e decifra, tornando a cifra inútil.",
        "versaoCorreta": "A chave deve ser distribuída por canal seguro ou por acordo com chave pública, sempre separada do dado cifrado."
      },
      {
        "afirmacaoEquivocada": "A segurança da criptografia simétrica depende de manter o algoritmo em segredo.",
        "porqueErrada": "Algoritmos simétricos são públicos e amplamente auditados; a segurança repousa na chave, conforme o princípio de Kerckhoffs, e não na obscuridade do algoritmo.",
        "versaoCorreta": "Depende da chave: algoritmos são públicos e auditados; manter o algoritmo em segredo é prática considerada frágil."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Mesma chave cifra e decifra", "Custo baixo por byte; indicada para grandes volumes", "Problema central: distribuição segura da chave", "Algoritmo público; segurança depende da chave"],
      "regras": ["Nunca enviar a chave junto ao arquivo cifrado", "Distribuir chave por canal seguro ou acordo com chave pública", "Aplicar ciclo de vida: geração, armazenamento, rotação, revogação"],
      "comparacoes": ["Simétrica é rápida para grandes volumes; assimétrica é lenta e protege a troca da chave simétrica."],
      "fluxos": ["Acordo de chave simétrica via assimétrica; arquivos cifrados com a chave simétrica; chave destruída ou rotacionada ao fim."],
      "excecoes": ["Chave de sessão curta reduz exposição se comprometida, mas exige rotação frequente.", "Uso de chave previsível para conteúdos distintos facilita ataques de criptoanálise."],
      "palavrasChave": ["criptografia simétrica", "mesma chave", "cifrar e decifrar", "distribuição de chave", "AES", "ChaCha20", "ciclo de vida da chave", "princípio de Kerckhoffs"],
      "checklist": ["Usar mesma chave para cifrar e decifrar", "Preferir simétrica para grandes volumes de dados", "Distribuir a chave separadamente do conteúdo cifrado", "Aplicar rotação e revogação de chaves"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o mesmo processo que cifra um arquivo de 2 TB usa criptografia simétrica e não assimétrica?",
        "dados": "Arquivo de 2 TB a ser cifrado; alternativa entre simétrica e assimétrica; fator de desempenho por byte.",
        "conceitos": ["Criptografia simétrica", "Desempenho por byte", "Uso adequado por volume"],
        "estrategia": "Compare o custo computacional das duas abordagens para grande volume e defina o papel de cada uma no cenário.",
        "execucao": ["Reconheça que o arquivo é grande (2 TB), então o desempenho por byte é decisivo.", "Note que a simétrica consome muito menos processamento por byte que a assimétrica.", "Conclua que a simétrica cifra o conteúdo e a assimétrica protege apenas a chave."],
        "resultado": "Desempenho: a criptografia simétrica consome muito menos processamento por byte; a assimétrica é reservada, nesse cenário, para proteger a chave simétrica envolvida, e não o conteúdo inteiro.",
        "justificativa": "O gabarito está correto porque, em grande volume, o custo da assimétrica seria proibitivo, enquanto a simétrica é eficiente e a assimétrica protege somente a chave, não todo o conteúdo.",
        "errosFrequentes": ["Achar que a assimétrica é mais segura e, portanto, deve cifrar tudo.", "Esquecer que a simétrica também precisa de troca segura da chave."],
        "variacao": "A mesma análise aplicada a um banco de dados de 500 GB cifrado em disco, comparando AES com RSA para o conteúdo inteiro."
      },
      {
        "tipo": "aplicacao",
        "problema": "Duas agências precisam trocar arquivos diários criptografados. Descreva o fluxo completo de chaves.",
        "dados": "Duas agências; troca de arquivos diários; fluxo de chaves com troca assimétrica protegendo a chave simétrica de sessão.",
        "conceitos": ["Troca de chave simétrica via assimétrica", "Chave de sessão", "Rotação de chave"],
        "estrategia": "Estabeleça uma chave simétrica de sessão protegida por troca assimétrica, cifre os arquivos com ela e rotacione ou destrua a chave ao fim.",
        "execucao": ["Cada agência cifra a chave simétrica de sessão com a chave pública da outra.", "Os arquivos diários são cifrados com a chave simétrica de sessão estabelecida.", "Ao fim do período, a chave é destruída ou rotacionada para uma nova sessão."],
        "resultado": "1) As agências estabelecem uma chave simétrica de sessão protegida por troca assimétrica (cada uma cifra a chave com a chave pública da outra). 2) Os arquivos são cifrados com a chave simétrica. 3) Ao fim, a chave é destruída ou rotacionada. Assim, resolve-se o problema de distribuição mantendo o desempenho simétrico no conteúdo.",
        "justificativa": "O fluxo está correto porque combina a segurança da troca assimétrica com o desempenho da simétrica, e a rotação/destruição da chave limita o impacto de eventual comprometimento.",
        "errosFrequentes": ["Enviar a chave simétrica junto com os arquivos cifrados.", "Reutilizar indefinidamente a mesma chave de sessão sem rotação."],
        "variacao": "Uma das agências não possui par de chaves assimétricas, exigindo um canal físico ou out-of-band para entregar a chave simétrica."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: Em criptografia simétrica, a chave secreta é enviada junto ao arquivo cifrado para o destinatário.",
        "dados": "Arquivo cifrado e sua chave secreta enviados juntos pelo mesmo canal; atacante intercepta a transmissão.",
        "conceitos": ["Distribuição de chave", "Separação entre chave e dado cifrado", "Canal seguro"],
        "estrategia": "Reconheça que enviar a chave com o conteúdo anula a proteção; a chave deve viajar separada, por canal seguro ou acordo com chave pública.",
        "execucao": ["Identifique que a afirmação propõe enviar chave e conteúdo juntos.", "Lembre que quem intercepta ambos pode cifrar e decifrar, anulando a cifra.", "Conclua que a chave deve ser distribuída separadamente do dado cifrado."],
        "resultado": "Errado. Enviar a chave com o conteúdo anula a proteção: quem intercepta cifra e decifra. A chave deve ser distribuída por canal seguro ou por acordo com chave pública, sempre separada do dado cifrado.",
        "justificativa": "A leitura ingênua falha porque assume que o destinatário precisa da chave junto ao arquivo; na prática, expor a chave com o conteúdo entrega o segredo a quem interceptar a transmissão.",
        "errosFrequentes": ["Achar que a cifra protege a própria chave quando enviada junto.", "Não distinguir canal de dados do canal de distribuição da chave."],
        "variacao": "A chave simétrica é entregue por mensageiro físico em envelopes lacrados, enquanto o arquivo cifrado viaja por e-mail."
      }
    ]
  },
  "m4-u1-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A criptografia assimétrica usa um par de chaves (pública e privada) para confidencialidade e assinatura, com custo maior, por isso combina à simétrica no TLS. Certificados, cadeia de confiança e revogação são centrais para entender HTTPS, assinatura digital e PKI, temas frequentes em concursos de TI.",
      "preRequisitos": ["Noção de chave pública e privada", "Conceito de confidencialidade, integridade e autenticidade", "Noção básica de certificado e autoridade certificadora"],
      "objetivosObservaveis": ["Descrever o par de chaves pública e privada e seus usos", "Relatar confidencialidade (cifrar com pública) versus assinatura (assinar com privada)", "Explicar certificados, cadeia de confiança e funcionário híbrido do TLS"],
      "competencias": ["Raciocínio de confiança: vincular identidade a chave pública via certificado", "Atenção à diferença entre cifrar para confidencialidade e assinar para autenticidade", "Conhecimento de ciclo de vida de certificados (emissão, validade, revogação)"],
      "dificuldade": "intermediario",
      "relacoes": ["m4-u1-t3-s1 (Criptografia simétrica) — mecanismo protegido pela troca de chave assimétrica no TLS híbrido"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Assimétrica, certificados, PKI e TLS híbrido integram o conteúdo programático de TI em cenários de HTTPS, assinatura digital e confiança em certificados, com peso para cargos de segurança da informação."
      }
    },
    "niveis": {
      "iniciante": "A criptografia assimétrica usa um par matematicamente relacionado: chave pública (divulgável) e chave privada (sigilosa). Cifrar com a chave pública e decifrar com a privada garante confidencialidade a qualquer remetente; assinar com a privada e verificar com a pública sustenta autenticidade, integridade e não repúdio.",
      "intermediario": "O custo computacional é maior, por isso se combina ao simétrico: no TLS, cliente e servidor usam assimétrico (ou troca efêmera de curva elíptica) para concordar uma chave simétrica de sessão, e todo o tráfego seguinte usa a simétrica. Certificado digital vincula uma identidade a uma chave pública, emitido e assinado por uma autoridade certificadora (AC) confiável.",
      "avancado": "A cadeia de confiança vai do certificado final até uma raiz de confiança pré-instalada no navegador ou sistema, com cada elo verificado por assinatura. O certificado expira intencionalmente (limita o dano de chave comprometida) e pode ser revogado antes do prazo; mecanismos de consulta de revogação existem para isso.",
      "especialista": "PKI é o conjunto de políticas, processos, ACs, registros e softwares que sustentam a cadeia. Implementá-la exige AC raiz e subordinadas, políticas de emissão, repositórios de revogação (CRL e OCSP) e auditoria de emissões. Expirar é desenho, não defeito, e limita o período de abuso."
    },
    "comparacoes": [
      {
        "tema": "Cifrar com chave pública versus cifrar com chave privada",
        "a": { "rotulo": "Cifrar com chave pública", "texto": "Somente o detentor da chave privada decifra; garante confidencialidade, pois a pública é de todos." },
        "b": { "rotulo": "Cifrar com chave privada", "texto": "Qualquer um com a chave pública decifra; não há confidencialidade, funciona como ato de assinatura/verificação." },
        "diferencaGabarito": "Cifrar com a chave pública protege a confidencialidade; cifrar com a chave privada é, na prática, assinatura, não confidencialidade."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Cifrar com a chave privada protege a confidencialidade da mensagem.",
        "porqueErrada": "Como a chave pública é de todos, todos conseguem decifrar; não há confidencialidade. Cifrar com a chave privada é ato de assinatura/verificação.",
        "versaoCorreta": "Para confidencialidade, cifra-se com a chave pública do destinatário; apenas a chave privada correspondente decifra."
      },
      {
        "afirmacaoEquivocada": "Um certificado digital nunca pode ser revogado antes do vencimento do prazo.",
        "porqueErrada": "A revogação antecipada existe justamente para casos de comprometimento da chave privada, mudança de titularidade ou erro de emissão, limitando o dano antes da data de expiração.",
        "versaoCorreta": "Certo: um certificado pode ser revogado antecipadamente por comprometimento da chave, mudança de titularidade ou erro de emissão."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Par de chaves: pública (divulgável) e privada (sigilosa)", "Confidencialidade: cifrar com pública, decifrar com privada", "Assinatura: assinar com privada, verificar com pública", "Certificado digital: vincula identidade a chave pública, emitido por AC"],
      "regras": ["Para confidencialidade, cifre com a chave pública do destinatário", "Para assinatura, assine com a chave privada e verifique com a pública", "Certificado expira intencionalmente e pode ser revogado antes do prazo"],
      "comparacoes": ["Cifrar com pública protege confidencialidade; cifrar com privada é assinatura, sem confidencialidade."],
      "fluxos": ["TLS híbrido: assimétrico negocia a chave simétrica de sessão; dados trafegam cifrados com a simétrica; certificado prova a identidade do servidor."],
      "excecoes": ["Certificado expirado em site legítimo ainda exige renovação ou validação da configuração do servidor.", "Chave comprometida exige revogação imediata, não apenas esperar a expiração."],
      "palavrasChave": ["criptografia assimétrica", "chave pública", "chave privada", "certificado digital", "autoridade certificadora", "cadeia de confiança", "PKI", "TLS híbrido", "revogação", "assinatura digital"],
      "checklist": ["Distinguir cifrar para confidencialidade de assinar para autenticidade", "Usar assimétrica para negociar a chave simétrica de sessão no TLS", "Verificar cadeia de confiança do certificado até a raiz", "Revogar certificados com chave comprometida antes do vencimento"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Numa navegação HTTPS, em que momento a criptografia assimétrica é usada e o que ela protege?",
        "dados": "Conexão HTTPS; negociação TLS no início da conexão; par de chaves e certificado do servidor.",
        "conceitos": ["Criptografia assimétrica", "Negociação TLS", "Certificado do servidor"],
        "estrategia": "Identificar que a assimétrica atua no início da conexão para combinar a chave simétrica e que o certificado prova a identidade do servidor.",
        "execucao": ["No início da conexão HTTPS, ocorre a negociação TLS.", "As partes usam o par de chaves e o certificado para concordar uma chave simétrica de sessão.", "Depois, os dados trafegam cifrados com a chave simétrica; o certificado prova a identidade do servidor."],
        "resultado": "No início da conexão: durante a negociação TLS, as partes combinam a chave simétrica de sessão usando o par de chaves e o certificado do servidor. Depois, os dados trafegam cifrados com a chave simétrica; o certificado prova a identidade do servidor.",
        "justificativa": "O gabarito está correto porque a assimétrica, por ser lenta, é usada apenas no aperto de mãos para estabelecer a chave simétrica, que depois protege o tráfego inteiro com bom desempenho.",
        "errosFrequentes": ["Achar que a assimétrica cifra todo o tráfego HTTPS.", "Esquecer que o certificado serve para provar a identidade do servidor."],
        "variacao": "O mesmo raciocínio aplicado a uma conexão de email seguro (SMTPS/IMAPS) usando TLS para proteger a troca da chave de sessão."
      },
      {
        "tipo": "aplicacao",
        "problema": "O navegador acusa que um certificado expirou. Explique por que expirar é desenho e não defeito.",
        "dados": "Navegador exibe alerta de certificado expirado; site pode ser legítimo; necessidade de entender o motivo da expiração.",
        "conceitos": ["Validade do certificado", "Expiração intencional", "Limite do dano de chave comprometida"],
        "estrategia": "Explicar que a expiração limita no tempo o poder da chave pública e força renovação com práticas atualizadas; o alerta está correto e exige renovação ou validação do servidor.",
        "execucao": ["Reconheça que a expiração limita o período em que uma chave pública pode ser usada.", "Note que, se a chave privada for comprometida, o abuso fica restrito ao prazo do certificado.", "Entenda que a expiração força renovação com práticas e algoritmos atualizados.", "Conclua que o alerta é correto: o site pode ser legítimo, mas a garantia venceu."],
        "resultado": "Expiração limita no tempo o poder de uma chave pública: se a privada for comprometida, o período de abuso é restrito ao prazo do certificado; além disso, força a renovação com práticas atualizadas. O alerta é correto — o site pode ser legítimo, mas a garantia vencida exige renovar (ou validar a configuração do servidor).",
        "justificativa": "A explicação está correta porque a expiração é um controle de risco intencional, não um erro: reduz a janela de exposição de uma chave e obriga a renovação periódica com padrões atuais.",
        "errosFrequentes": ["Achar que certificado expirado indica sempre site falso ou ataque.", "Ignorar que a expiração força renovação com práticas atualizadas."],
        "variacao": "Um servidor interno mantém um certificado autossignado expirado; avaliar se o alerta deve ser ignorado ou a configuração corrigida."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: Cifrar com a chave privada protege a confidencialidade da mensagem, de modo que apenas o destinatário poderia lê-la.",
        "dados": "Mensagem cifrada com a chave privada do remetente; qualquer interessado possui a chave pública correspondente.",
        "conceitos": ["Chave pública de todos", "Ausência de confidencialidade", "Assinatura versus cifragem"],
        "estrategia": "Reconhecer que, como a chave pública é de todos, qualquer um decifra; não há confidencialidade. Cifrar com a chave privada é assinatura, e confidencialidade exige cifrar com a chave pública do destinatário.",
        "execucao": ["Identifique que a afirmação confunde assinatura com cifragem confidencial.", "Lembre que a chave pública é acessível a qualquer pessoa, então todos decifrariam.", "Conclua que não há confidencialidade; para confidencialidade, cifra-se com a chave pública do destinatário."],
        "resultado": "Errado. Como a chave pública é de todos, todos conseguem decifrar — não há confidencialidade. Cifrar com a chave privada é, na prática, ato de assinatura/verificação; para confidencialidade, cifra-se com a chave pública do destinatário.",
        "justificativa": "A leitura ingênua falha porque assume que apenas o detentor da chave privada pode ler; na prática, cifrar com a privada expõe o conteúdo a qualquer um que tenha a pública, que é o inverso da confidencialidade.",
        "errosFrequentes": ["Achar que qualquer cifra com chave privada é confidencial.", "Não distinguir o papel da chave pública (de todos) da privada (sigilosa)."],
        "variacao": "Um usuário assina um documento com sua chave privada e outro verifica com a pública, confirmando autenticidade e integridade, não confidencialidade."
      }
    ]
  }
};
