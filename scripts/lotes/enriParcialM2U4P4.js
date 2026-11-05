const enriParcialM2U4P4 = {
  "m2-u4-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "VLSM divide um bloco em sub-redes de tamanhos diferentes, com prefixo escolhido pela demanda de hosts. Em provas, surge em dimensionamento e ordem de alocação: definir /n por necessidade e explicar por que as maiores sub-redes vão primeiro.",
      "preRequisitos": [
        "Cálculo de hosts por sub-rede: 2^(32 - prefixo) - 2",
        "Notação CIDR e alinhamento de blocos em fronteiras de potência de 2",
        "Identificação do endereço de rede e de broadcast de uma sub-rede"
      ],
      "objetivosObservaveis": [
        "explicará VLSM e aplicará divisão de sub-redes de tamanhos diferentes a partir de um bloco original",
        "Calcular o prefixo mínimo que atende a uma demanda de hosts",
        "Ordenar a alocação das sub-redes da maior para a menor necessidade",
        "Alocar blocos consecutivos sem sobreposição",
        "Explicar por que VLSM exige roteamento classless"
      ],
      "competencias": [
        "Planejar endereçamento com desperdício mínimo",
        "Dimensionar prefixos a partir da demanda de hosts",
        "Validar alinhamento e ausência de sobreposição entre blocos"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u4-t2-s2 (Quantidade de sub-redes e hosts) — base do cálculo de hosts por prefixo",
        "m2-u4-t2-s3 (Intervalos de hosts e validação) — usado para conferir cada bloco alocado",
        "m2-u4-t3-s2 (Sumarização de rotas (agregação)) — operação inversa: agregar blocos contíguos",
        "m2-u4-t3-s3 (Planejamento de endereçamento e roteamento classless) — aplica VLSM no plano do site"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "VLSM é tema central do conteúdo programático de TI: itens pedem o prefixo para uma demanda de hosts, a ordem correta de alocação e a relação com roteamento classless (RIPv1, RIPv2, OSPF). A classificação é qualitativa e configura estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "VLSM (Variable Length Subnet Mask) divide uma rede em sub-redes de tamanhos diferentes: cada uma recebe o prefixo que sua demanda exige, em vez de um tamanho único para todas. No bloco 192.168.10.0/24, a LAN de 50 hosts usa /26 (62 endereços), a de 25 hosts usa /27 (30) e o link entre roteadores usa /30 (2 hosts). A alocação começa pelas maiores: 192.168.10.0/26, depois 192.168.10.64/27 e 192.168.10.96/30, restando espaço livre no bloco.",
      "intermediario": "A escolha do prefixo parte da demanda: encontrar o menor /n tal que 2^(32 - n) - 2 ≥ hosts. Para 50 hosts, /26; para 25, /27; para 2, /30. Depois de definidos os prefixos, a alocação em ordem decrescente garante que cada bloco caiba alinhado: /26 ocupa múltiplos de 64 no último octeto, /27 múltiplos de 32 e /30 múltiplos de 4. Alocar os menores primeiro fragmenta o bloco e pode inviabilizar as sub-redes maiores.",
      "avancado": "Em um plano com vários sites, VLSM exige controlar fronteiras: cada bloco deve iniciar em múltiplo do próprio tamanho e não sobrepor o anterior. A técnica é ordenar as demandas, calcular os prefixos, alocar sequencialmente e registrar o restante como reserva de crescimento. Também é preciso verificar o suporte do roteamento: protocolos classful, como o RIPv1, assumem a máscara pela classe e não propagam máscaras distintas, inviabilizando VLSM entre roteadores.",
      "especialista": "No desenho corporativo, VLSM integra IPAM e sumarização: blocos hierárquicos por região e site permitem agregar rotas nas bordas, e a alocação por função (LAN, voz, links, gerência) facilita auditoria e políticas de segurança. Riscos avançados incluem sobreposição silenciosa entre blocos documentados e reservas, perda de espaço por alocação em ordem crescente e dependência de classless também nas rotas redistribuídas. Revisões periódicas do plano recuperam blocos órfãos."
    },
    "comparacoes": [
      {
        "tema": "Ordem de alocação: maiores primeiro vs. menores primeiro",
        "a": {
          "rotulo": "Maiores primeiro",
          "texto": "Alocar a sub-rede com mais hosts no início do bloco: 50 hosts → /26 em 192.168.10.0/26, 25 hosts → /27 em .64/27 e o link → /30 em .96/30. Cada bloco encontra fronteira livre e o restante permanece contíguo."
        },
        "b": {
          "rotulo": "Menores primeiro",
          "texto": "Alocar o link /30 em .0/30 e a LAN de 25 hosts em .4/27 consome pequenas fatias iniciais, mas deixa o restante fragmentado; a LAN de 50 hosts passa a exigir realocação ou um bloco adicional."
        },
        "diferencaGabarito": "A alocação decrescente preserva blocos contíguos e garante que toda demanda caiba no bloco original; a ordem crescente fragmenta o espaço e pode impedir a maior sub-rede."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Deve-se alocar as sub-redes menores primeiro para não desperdiçar endereços.",
        "porqueErrada": "A intenção é poupar endereços, mas o efeito é o oposto: fatias pequenas iniciais fragmentam o bloco e a maior sub-rede pode não encontrar fronteira alinhada livre.",
        "versaoCorreta": "Alocar as sub-redes maiores primeiro e deixar que as menores preencham as sobras, como em /26, depois /27 e /30."
      },
      {
        "afirmacaoEquivocada": "Um link ponto a ponto entre roteadores precisa de uma sub-rede /24.",
        "porqueErrada": "Confunde legibilidade com dimensionamento: /24 oferece 254 hosts para 2 interfaces, desperdiçando 252 endereços do bloco.",
        "versaoCorreta": "Link ponto a ponto usa /30 (2 hosts utilizáveis) ou /31 em cenários que admitam a exceção de não reservar rede e broadcast."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'VLSM pode ser usado com RIPv1.'",
        "porqueErrada": "RIPv1 é classful: anuncia a rota sem a máscara e o destinatário a infere pela classe do endereço, descartando a informação de prefixo necessária ao VLSM.",
        "versaoCorreta": "VLSM exige protocolo classless que carregue a máscara — RIPv2, OSPF, EIGRP ou BGP — ou rotas estáticas com máscara informada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "VLSM: sub-redes de tamanhos diferentes no mesmo bloco",
        "Prefixo por necessidade: menor /n com 2^(32 - n) - 2 ≥ hosts",
        "Ordem decrescente de alocação",
        "Fronteira alinhada: bloco inicia em múltiplo do próprio tamanho",
        "Requisito de roteamento classless"
      ],
      "regras": [
        "Escolher /n tal que 2^(32 - n) - 2 atenda à demanda com folga mínima",
        "Alocar da maior para a menor sub-rede",
        "Cada bloco deve iniciar em múltiplo do seu tamanho (ex.: /26 em múltiplos de 64)"
      ],
      "comparacoes": [
        "FLSM (tamanho único, desperdiça) vs. VLSM (tamanho variável, otimiza)",
        "Alocação decrescente (preserva blocos) vs. crescente (fragmenta)"
      ],
      "fluxos": [
        "Demanda de hosts → prefixo /n → ordenação decrescente → alocação sequencial → registro do restante"
      ],
      "excecoes": [
        "Links ponto a ponto podem usar /30 ou /31",
        "Protocolos classful (RIPv1) impedem VLSM, mesmo com máscaras configuradas localmente"
      ],
      "palavrasChave": [
        "VLSM",
        "prefixo variável",
        "ordem decrescente",
        "alinhamento",
        "classless"
      ],
      "checklist": [
        "Sei definir VLSM e diferenciá-lo de FLSM?",
        "Consigo calcular o prefixo para uma demanda de hosts?",
        "Ordeno a alocação da maior para a menor?",
        "Verifico alinhamento e ausência de sobreposição?",
        "Sei explicar o requisito de roteamento classless?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o VLSM é melhor que a divisão em sub-redes de tamanho fixo (FLSM) quando um bloco IPv4 atende a demandas diferentes de hosts?",
        "dados": "Bloco 192.168.10.0/24 com três demandas: LAN de 50 hosts, LAN de 25 hosts e um link entre roteadores. Em divisão fixa por /26, cada uma das três sub-redes teria 62 endereços.",
        "conceitos": [
          "VLSM e FLSM",
          "Desperdício de endereços",
          "Prefixo conforme a demanda"
        ],
        "estrategia": "Comparar o total de endereços consumidos nas duas abordagens: no FLSM todas as sub-redes têm o mesmo tamanho; no VLSM cada uma recebe o prefixo que sua demanda exige. O ganho aparece na diferença entre endereços alocados e endereços efetivamente usados.",
        "execucao": [
          "Em FLSM com /26, três sub-redes consomem 192 endereços para 77 hosts necessários (50 + 25 + 2)",
          "Em VLSM: /26 para 50 hosts, /27 para 25 e /30 para o link",
          "Somar a ocupação VLSM: 64 + 32 + 4 = 100 endereços",
          "Comparar os totais: 100 endereços alocados contra 192 no FLSM"
        ],
        "resultado": "Porque evita desperdício: uma sub-rede /24 fixa para um link ponto-a-ponto desperdiça 252 endereços; /30 usa apenas 4.",
        "justificativa": "O VLSM ajusta a máscara a cada necessidade, e a economia é a diferença entre os totais alocados. No exemplo, as demandas somam 77 hosts; com FLSM /26 o bloco consome 192 endereços, enquanto o VLSM usa 100 e preserva o restante para crescimento, sem reduzir a capacidade de nenhuma sub-rede.",
        "errosFrequentes": [
          "Escolher o prefixo pela quantidade de sub-redes em vez da quantidade de hosts por sub-rede",
          "Supor que VLSM dispensa roteamento classless porque as máscaras foram configuradas em cada roteador"
        ],
        "variacao": "Repita a comparação com o bloco 10.0.0.0/24 e demandas de 100, 20 e 2 hosts: calcule os prefixos VLSM e o total de endereços economizados em relação a três sub-redes /25 fixas."
      },
      {
        "tipo": "aplicacao",
        "problema": "A partir de 10.0.0.0/24, alocar sub-redes para: site A (100 hosts), site B (50 hosts), link (2 hosts).",
        "dados": "Bloco inicial 10.0.0.0/24 (endereços .0 a .255). Demandas: site A com 100 hosts, site B com 50 hosts e um link ponto a ponto com 2 hosts. A rede usa OSPF, protocolo classless.",
        "conceitos": [
          "Cálculo de hosts por prefixo",
          "Ordem decrescente de alocação",
          "Alinhamento de blocos"
        ],
        "estrategia": "Calcular o prefixo mínimo de cada demanda, ordenar da maior para a menor e alocar sequencialmente a partir de 10.0.0.0, verificando que cada bloco comece em múltiplo do seu tamanho.",
        "execucao": [
          "Site A (100 hosts): 2^7 - 2 = 126 ≥ 100 → /25; alocar 10.0.0.0/25 (.0 a .127)",
          "Site B (50 hosts): 2^6 - 2 = 62 ≥ 50 → /26; próximo múltiplo de 64 é .128 → 10.0.0.128/26 (.128 a .191)",
          "Link (2 hosts): /30; próximo múltiplo de 4 é .192 → 10.0.0.192/30 (.192 a .195)",
          "Restante .196 a .255 fica livre para crescimento"
        ],
        "resultado": "Site A: /25 (126 hosts) -> 10.0.0.0/25. Site B: /26 (62 hosts) -> 10.0.0.128/26. Link: /30 -> 10.0.0.192/30. (Verificar alinhamento dos blocos.)",
        "justificativa": "Cada prefixo é o menor que comporta a demanda com folga mínima: 100 hosts exigem /25 porque 2^6 - 2 = 62 é insuficiente. A alocação em ordem decrescente faz cada bloco iniciar em fronteira livre — .0 para /25, .128 para /26 e .192 para /30 —, o que garante ausência de sobreposição e coerência com o requisito classless do OSPF.",
        "errosFrequentes": [
          "Alocar o link /30 em 10.0.0.0/30 e depois tentar encaixar a LAN de 50 hosts em 10.0.0.0/26, sobrepondo ou fragmentando o bloco",
          "Escolher /24 para o site A por ser mais seguro, desperdiçando 154 endereços e impedindo as demais alocações"
        ],
        "variacao": "Altere as demandas para 60, 25 e 2 hosts no mesmo bloco 10.0.0.0/24 e refaça a alocação; depois some os endereços livres restantes e identifique o maior bloco contíguo ainda disponível."
      },
      {
        "tipo": "erro",
        "problema": "Um administrador configura máscaras VLSM (/26, /27 e /30) em uma rede que ainda anuncia rotas por RIPv1 e afirma que o VLSM está em uso. A afirmação está correta?",
        "dados": "Rede com três sub-redes: 192.168.10.0/26, 192.168.10.64/27 e 192.168.10.96/30. Os roteadores aprendem rotas por RIPv1; não há protocolo classless ativo nem rotas estáticas com máscara.",
        "conceitos": [
          "Roteamento classful x classless",
          "Propagação da máscara",
          "Suporte a VLSM"
        ],
        "estrategia": "Verificar como o protocolo propaga a informação de prefixo: no classful a máscara é inferida pela classe do endereço; no classless ela acompanha a rota. Sem essa informação, roteadores diferentes interpretam o mesmo endereço com máscaras distintas.",
        "execucao": [
          "RIPv1 anunciaria 192.168.10.0 sem máscara, como rede de classe C /24",
          "O roteador destinatário infere /24 e as distinções de /26, /27 e /30 desaparecem",
          "Sem a máscara correta, as rotas das sub-redes não são distinguidas e o tráfego falha ou é encaminhado de forma incorreta",
          "A correção exige migrar para RIPv2, OSPF, EIGRP ou BGP"
        ],
        "resultado": "A afirmação é incorreta: as máscaras VLSM existem apenas localmente nas interfaces, pois o RIPv1 não as propaga e o VLSM não opera entre roteadores.",
        "justificativa": "VLSM não é apenas configuração local de máscaras distintas; ele exige que o protocolo carregue o prefixo para que cada roteador calcule a mesma sub-rede. O RIPv1 é classful e infere a máscara pela classe, tornando indistinguíveis duas sub-redes do mesmo bloco /24 nos anúncios. Por isso o VLSM requer protocolos classless.",
        "errosFrequentes": [
          "Confundir máscara configurada na interface com máscara propagada pelo protocolo",
          "Achar que RIPv1 e RIPv2 diferem apenas por autenticação, ignorando a ausência de CIDR no primeiro"
        ],
        "variacao": "Suponha que a mesma rede use RIPv2 sem autenticação e rotas estáticas apontando para as sub-redes VLSM: o VLSM passa a funcionar? Justifique pela propagação da máscara em cada caso."
      }
    ]
  },
  "m2-u4-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A sumarização combina rotas contíguas em uma rota de prefixo menor, reduzindo a tabela de roteamento. Em provas, cobra-se o cálculo do prefixo agregado e a verificação de contiguidade e alinhamento; agregar blocos não alocados cria buraco negro.",
      "preRequisitos": [
        "Notação CIDR e conversão entre prefixo e máscara",
        "Cálculo de endereço de rede e de broadcast",
        "Noção de tabela de roteamento e próximo salto"
      ],
      "objetivosObservaveis": [
        "explicará sumarização de rotas e calculará uma rota agregada a partir de blocos contíguos",
        "Verificar se blocos são contíguos e alinhados",
        "Calcular o prefixo agregado pelos bits comuns",
        "Determinar a faixa de endereços coberta pelo agregado",
        "Citar os riscos da agregação excessiva"
      ],
      "competencias": [
        "Calcular o prefixo comum de um conjunto de rotas",
        "Analisar a tabela de roteamento e propor agregação",
        "Avaliar risco de black hole antes de anunciar um agregado"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — base do cálculo de prefixo e faixa",
        "m2-u4-t3-s1 (VLSM: máscara de comprimento variável) — operação inversa: dividir em vez de agregar",
        "m2-u4-t3-s3 (Planejamento de endereçamento e roteamento classless) — contiguidade planejada viabiliza a agregação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Sumarização aparece em itens de cálculo de rota agregada e em questões conceituais sobre redução de tabela, contiguidade e black hole. A cobrança é menos numérica que a de CIDR e VLSM, porém integrante do conteúdo programático de redes de nível médio e superior."
      }
    },
    "niveis": {
      "iniciante": "Sumarização (route aggregation/supernetting) combina múltiplas rotas contíguas em uma rota mais curta (prefixo menor), reduzindo tabelas de roteamento. Requer blocos contíguos alinhados (boundary). Exemplo: rotas 192.168.0.0/24, 192.168.1.0/24, ..., 192.168.7.0/24 agregam em 192.168.0.0/21 (8 sub-redes /24). A agregação só é válida se todos os blocos pertencerem ao agregado e estiverem alocados. Benefícios: tabelas menores, menos atualizações, estabilidade. Risco: agregação excessiva pode anunciar blocos inexistentes.",
      "intermediario": "Para agregar, conta-se o número de blocos em potência de 2 e subtrai-se o expoente do prefixo original: oito redes /24 formam 2^3 blocos, e o prefixo agregado é 24 - 3 = /21. A faixa coberta vai de 192.168.0.0 a 192.168.7.255. Blocos desalinhados, como 192.168.1.0/24 a 192.168.8.0/24, não compartilham a mesma fronteira e não formam um agregado único sem cobrir endereços estranhos ao conjunto.",
      "avancado": "O cálculo exato identifica os bits comuns a todos os endereços: 192.168.0.0 a 192.168.7.0 compartilham os 21 primeiros bits, e o agregado é 192.168.0.0/21, com 32 - 21 = 11 bits de host. Antes de anunciar, confirme que todos os blocos do agregado existem: um agregado que inclua blocos não alocados descarta o tráfego destinado a eles (black hole). Em BGP, a agregação de anúncios segue a mesma validação: só se agregam prefixos efetivamente anunciados.",
      "especialista": "Em arquitetura de provedor, a sumarização estrutura o roteamento hierárquico: agregados de clientes na borda, agregados regionais no núcleo e rota padrão na saída. A análise de impacto considera crescimento (um agregado /20 hoje pode exigir desagregação depois), convergência (menos rotas e atualizações mais rápidas) e resiliência (black holes por agregação excessiva). Auditorias comparam a tabela de roteamento com o IPAM para detectar agregados que cobrem espaço não alocado."
    },
    "comparacoes": [
      {
        "tema": "Sumarização vs. manutenção de rotas individuais",
        "a": {
          "rotulo": "Rota sumarizada",
          "texto": "Oito redes /24 contíguas anunciadas como 192.168.0.0/21: uma entrada na tabela, cobertura de 192.168.0.0 a 192.168.7.255 e menos atualizações."
        },
        "b": {
          "rotulo": "Rotas individuais",
          "texto": "As oito redes /24 anunciadas separadamente: oito entradas na tabela, granularidade por rede e maior volume de atualizações a cada mudança de topologia."
        },
        "diferencaGabarito": "A sumarização troca detalhe por estabilidade: o agregado é válido apenas quando cobre exatamente blocos existentes e alocados; fora disso, perde-se alcance ou cria-se buraco negro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Qualquer conjunto de rotas pode ser agregado.'",
        "porqueErrada": "A agregação depende de bits comuns no início dos endereços; blocos fora de uma mesma fronteira de potência de 2 não compartilham prefixo, e qualquer agregado que os una cobre endereços estranhos.",
        "versaoCorreta": "Errado. A agregação exige contiguidade e alinhamento ao boundary do prefixo agregado. Rotas não contíguas não agregam sem perda/overlap."
      },
      {
        "afirmacaoEquivocada": "Agregar rotas aumenta o prefixo (ex.: /24 para /27).",
        "porqueErrada": "Inverte a direção do cálculo: juntar blocos reduz o número de bits de rede do prefixo, porque o agregado cobre uma faixa maior que a de cada bloco individual.",
        "versaoCorreta": "Agregar reduz o prefixo: oito /24 formam 2^3 blocos e o agregado é /21 (24 - 3), com faixa de 192.168.0.0 a 192.168.7.255."
      },
      {
        "afirmacaoEquivocada": "Agregação excessiva é inofensiva, pois apenas reduz a tabela de roteamento.",
        "porqueErrada": "Ignora que o agregado passa a atrair tráfego para todos os endereços da faixa, inclusive blocos não alocados, que são descartados no roteador de borda.",
        "versaoCorreta": "Agregar somente blocos existentes; blocos não alocados dentro do agregado geram black hole e perda silenciosa de tráfego."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Sumarização: várias rotas contíguas em uma rota de prefixo menor",
        "Contiguidade e alinhamento em fronteira de potência de 2",
        "Prefixo agregado = bits comuns aos blocos",
        "Black hole: tráfego descartado em bloco não alocado"
      ],
      "regras": [
        "2^k blocos /n contíguos e alinhados agregam em /(n - k)",
        "O agregado deve cobrir apenas blocos existentes e alocados",
        "A faixa do agregado vai do endereço de rede ao último endereço do prefixo calculado"
      ],
      "comparacoes": [
        "Rotas individuais (granularidade) vs. rota agregada (estabilidade)",
        "Agregado válido (só blocos alocados) vs. inválido (inclui espaço livre)"
      ],
      "fluxos": [
        "Listar blocos contíguos → contar em potência de 2 → subtrair do prefixo → validar alocação → anunciar"
      ],
      "excecoes": [
        "Blocos não contíguos não agregam sem cobrir endereços estranhos",
        "Blocos não alocados dentro do agregado criam black hole"
      ],
      "palavrasChave": [
        "sumarização",
        "supernetting",
        "prefixo agregado",
        "contiguidade",
        "black hole"
      ],
      "checklist": [
        "Sei definir sumarização?",
        "Verifico contiguidade e alinhamento dos blocos?",
        "Calculo o prefixo agregado pela contagem de blocos?",
        "Confirmo que todos os blocos do agregado estão alocados?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um roteador anuncia separadamente 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24 e 172.16.3.0/24. Qual rota única resume essas quatro redes?",
        "dados": "Quatro blocos /24 consecutivos: 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24 e 172.16.3.0/24. Todos pertencem à mesma política de roteamento e estão alocados.",
        "conceitos": [
          "Contiguidade de blocos",
          "Prefixo agregado",
          "Contagem em potência de 2"
        ],
        "estrategia": "Contar os blocos como potência de 2 e subtrair o expoente do prefixo original; quatro blocos são 2^2, logo o prefixo agregado reduz dois bits em relação a /24.",
        "execucao": [
          "Contar os blocos: 4 redes /24 = 2^2",
          "Subtrair do prefixo: 24 - 2 = 22",
          "Formar a rota a partir do primeiro bloco: 172.16.0.0/22",
          "Conferir a faixa coberta: 172.16.0.0 a 172.16.3.255"
        ],
        "resultado": "A rota agregada é 172.16.0.0/22: as quatro redes /24 passam a ocupar uma única entrada na tabela, com prefixo 22 e faixa de 172.16.0.0 a 172.16.3.255.",
        "justificativa": "Os quatro blocos são contíguos e começam em 172.16.0.0, múltiplo de 4 no terceiro octeto, o que os alinha na fronteira de um /22. Como 4 = 2^2, o prefixo agregado é 24 - 2 = 22, e a rota 172.16.0.0/22 cobre exatamente os quatro blocos, sem endereços estranhos.",
        "errosFrequentes": [
          "Calcular o prefixo somando em vez de subtrair (24 + 2 = /26)",
          "Esquecer de verificar o alinhamento e construir o agregado a partir de um bloco que não é o primeiro"
        ],
        "variacao": "Agregue 172.16.0.0/24 a 172.16.7.0/24, indique a rota única e a faixa coberta, e verifique se 172.16.4.0/24 continuaria anunciável separadamente."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um roteador tem 16 rotas /24 contíguas (10.10.0.0/24 ... 10.10.15.0/24). Qual rota agregada?",
        "dados": "Dezesseis redes /24 contíguas: de 10.10.0.0/24 a 10.10.15.0/24. O roteador de borda deve anunciar uma única rota ao provedor.",
        "conceitos": [
          "Contagem de blocos",
          "Prefixo agregado",
          "Redução da tabela de roteamento"
        ],
        "estrategia": "Contar os blocos como potência de 2, subtrair o expoente do prefixo /24 e validar que o primeiro bloco seja múltiplo do tamanho do agregado.",
        "execucao": [
          "Contar os blocos: 16 redes /24 = 2^4",
          "Subtrair do prefixo: 24 - 4 = 20",
          "Formar a rota 10.10.0.0/20 (múltiplo de 16 no segundo octeto)",
          "Conferir a cobertura: 10.10.0.0 a 10.10.15.255, exatamente as 16 redes"
        ],
        "resultado": "A rota agregada é 10.10.0.0/20: 16 sub-redes /24 contíguas (2^4 blocos) resumidas em um prefixo 20, cobrindo 10.10.0.0 a 10.10.15.255.",
        "justificativa": "Os dezesseis blocos formam 2^4 unidades e o prefixo agregado reduz quatro bits: 24 - 4 = /20. O endereço base 10.10.0.0 é múltiplo de 16 no segundo octeto, portanto alinhado na fronteira do /20, e a faixa resultante cobre somente as dezesseis redes existentes, o que torna o agregado válido e sem black hole.",
        "errosFrequentes": [
          "Usar /19 por confundir 16 blocos com 2^5",
          "Construir o agregado a partir de um bloco diferente de 10.10.0.0/24, quebrando o alinhamento da fronteira do /20"
        ],
        "variacao": "Suponha 32 rotas /24 contíguas iniciando em 10.20.0.0/24: calcule a rota agregada e a quantidade de entradas economizadas na tabela de roteamento."
      },
      {
        "tipo": "erro",
        "problema": "Um analista resume as redes 192.168.0.0/24 a 192.168.2.0/24 em uma única rota 192.168.0.0/22 e a anuncia ao vizinho. A agregação está correta?",
        "dados": "Blocos existentes: 192.168.0.0/24, 192.168.1.0/24 e 192.168.2.0/24 (três redes). O agregado anunciado foi 192.168.0.0/22, que cobre 192.168.0.0 a 192.168.3.255.",
        "conceitos": [
          "Alinhamento do agregado",
          "Blocos não alocados",
          "Black hole"
        ],
        "estrategia": "Conferir se o agregado cobre apenas blocos existentes: um /22 exige quatro blocos /24 alinhados; com três blocos, a quarta fatia da faixa passa a atrair tráfego sem destino.",
        "execucao": [
          "Contar os blocos do conjunto: 3 redes /24, quantidade que não é potência de 2",
          "Escolher o menor prefixo alinhado que os cubra: /22 cobre 4 blocos (0 a 3)",
          "Identificar a sobra: 192.168.3.0/24 não existe, mas faz parte da rota anunciada",
          "Concluir que o tráfego destinado a 192.168.3.0/24 é descartado no roteador de borda"
        ],
        "resultado": "A agregação é inválida: o /22 cobre quatro blocos /24, mas só três existem; 192.168.3.0/24 vira destino sem rota específica e o tráfego é descartado.",
        "justificativa": "Sumarizar exige que o agregado seja formado por potência de 2 de blocos alinhados e que todos estejam alocados. Com três blocos, qualquer agregado único inclui espaço não alocado, neste caso 192.168.3.0/24. O roteador que anuncia o /22 atrai o tráfego dessa fatia e, sem rota mais específica, descarta os pacotes, caracterizando black hole.",
        "errosFrequentes": [
          "Achar que três blocos /24 sempre agregam em /22 porque são quase quatro",
          "Ignorar a necessidade de rota mais específica ou de descarte controlado para a fatia não alocada"
        ],
        "variacao": "Refaça o caso com cinco blocos /24 contíguos (192.168.0.0/24 a 192.168.4.0/24): determine o menor agregado alinhado, a fração não alocada incluída e uma forma de evitar o black hole."
      }
    ]
  }
};
