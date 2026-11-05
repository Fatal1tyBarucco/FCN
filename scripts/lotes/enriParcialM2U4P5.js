const enriParcialM2U4P5 = {
  "m2-u4-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Planejar o endereçamento antes de implantar evita renumeração custosa e habilita sumarização. Em provas, surgem boas práticas (documentar, usar blocos contíguos, evitar sobreposição) e a distinção entre roteamento classless e classful, condição para VLSM e agregação.",
      "preRequisitos": [
        "VLSM e escolha de prefixo por demanda de hosts",
        "Sumarização e requisitos de contiguidade",
        "Noção de protocolos de roteamento interno"
      ],
      "objetivosObservaveis": [
        "explicará boas práticas de planejamento de endereçamento e a necessidade de roteamento classless para VLSM",
        "Listar boas práticas de planejamento de endereçamento",
        "Distinguir protocolos classless de classful",
        "Indicar prefixos típicos para links IPv4 e sub-redes IPv6",
        "Apontar as limitações de um planejamento ruim"
      ],
      "competencias": [
        "Documentar um plano de endereçamento por site e função",
        "Projetar blocos contíguos que permitam agregação",
        "Avaliar o impacto de renumeração em rede em produção"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u4-t3-s1 (VLSM: máscara de comprimento variável) — o plano define os prefixos variáveis alocados",
        "m2-u4-t3-s2 (Sumarização de rotas (agregação)) — depende de blocos contíguos planejados",
        "m2-u4-t4-s1 (Representação e abreviação de endereços IPv6) — base para documentar endereços IPv6",
        "m2-u4-t4-s2 (Prefixos e tipos de endereço IPv6) — origem do /64 por sub-rede"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Boas práticas de planejamento e a dicotomia classless/classful são cobradas em itens conceituais e de associação de protocolos. A parte numérica é menor que em CIDR e VLSM, mas o tema sustenta questões de arquitetura e justifica itens sobre RIPv1 e RIPv2."
      }
    },
    "niveis": {
      "iniciante": "Planejamento de endereçamento: documentar blocos por site e função, reservar espaço para crescimento, usar VLSM para otimizar e manter a sumarização nas bordas. Roteamento classless (CIDR): protocolos que carregam a máscara junto com o prefixo (RIPv2, OSPF, EIGRP, BGP, IS-IS) — necessários para VLSM e sumarização. Roteamento classful (RIPv1, IGRP) assume a máscara pela classe e não suporta VLSM nem agregação. Boas práticas: alocar blocos contíguos para facilitar a agregação; evitar sobreposição; reservar /30 ou /31 para links ponto a ponto e /64 por sub-rede no IPv6.",
      "intermediario": "Um plano começa pelo inventário de demanda: hosts por site, links entre roteadores e folga de crescimento. Cada demanda recebe um prefixo (2^(32 - n) - 2 ≥ hosts) e a alocação em ordem decrescente preserva blocos contíguos. A escolha do protocolo vem depois: apenas protocolos classless carregam a máscara no anúncio, condição para VLSM e sumarização; protocolos classful inferem a máscara pela classe e restringem a rede a uma máscara por classe.",
      "avancado": "Na prática, o plano é um documento versionado: tabela de blocos por site, função e responsável, reservas de crescimento e regra de agregação nas bordas. A validação inclui teste de sobreposição (nenhum endereço em dois blocos), contiguidade para agregação e suporte classless em todos os roteadores do domínio, inclusive nas rotas estáticas redistribuídas. Prefixos típicos: /30 ou /31 para links IPv4 e /64 por sub-rede IPv6, tamanho exigido pelo SLAAC.",
      "especialista": "Em ambiente corporativo e de provedor, o planejamento integra IPAM, automação e governança: alocação hierárquica por região, vínculo com o inventário de serviços e auditoria periódica de utilização. Riscos monitorados: sobreposição entre blocos documentados e reservas, perda de contiguidade por crescimento orgânico e migração de classful para classless no legado. Planos maduros preveem renumeração controlada por fases e agregação progressiva nas bordas."
    },
    "comparacoes": [
      {
        "tema": "Roteamento classless vs. classful no planejamento",
        "a": {
          "rotulo": "Classless (CIDR)",
          "texto": "Protocolos como RIPv2, OSPF, EIGRP e BGP anunciam a rota com a máscara; o plano pode usar VLSM, prefixos fora da classe e sumarização nas bordas."
        },
        "b": {
          "rotulo": "Classful",
          "texto": "Protocolos como RIPv1 e IGRP anunciam a rota sem máscara e a inferem pela classe; o plano fica limitado a uma máscara por classe e não suporta VLSM nem agregação."
        },
        "diferencaGabarito": "A diferença está no que é anunciado: com a máscara, o roteamento é classless e o planejamento variável é viável; sem ela, a máscara é inferida pela classe e o VLSM deixa de funcionar."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'RIPv1 suporta VLSM porque é um protocolo de roteamento.'",
        "porqueErrada": "Ser protocolo de roteamento não implica carregar máscara: o RIPv1 é classful, anuncia a rota sem prefixo e o destinatário infere a máscara pela classe, o que inviabiliza máscaras distintas no mesmo bloco.",
        "versaoCorreta": "A afirmação é falsa: RIPv1 é classful, não propaga a máscara e por isso não suporta VLSM nem sumarização; a rede deve usar RIPv2, OSPF ou outro protocolo classless."
      },
      {
        "afirmacaoEquivocada": "No IPv6, cada sub-rede pode receber qualquer prefixo, como /80 ou /96.",
        "porqueErrada": "Ignora a dependência do SLAAC: a autoconfiguração sem estado espera interface de 64 bits, e prefixos menores quebram esse mecanismo e a atribuição automática de endereços.",
        "versaoCorreta": "Usar /64 por sub-rede IPv6, tamanho esperado pelo SLAAC; /128 identifica um host e /48 ou /56 são comuns para uma organização."
      },
      {
        "afirmacaoEquivocada": "Renumerar uma rede em produção é trivial: basta trocar os endereços.",
        "porqueErrada": "Subestima o alcance da mudança: endereços aparecem em rotas, listas de controle, DNS, certificados, monitoramento e regras de firewall, e cada omissão gera falha intermitente.",
        "versaoCorreta": "Renumeração é custosa e arriscada; a alternativa é planejar antes, com folga de crescimento e blocos documentados por função."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Planejamento de endereçamento documentado por site e função",
        "Blocos contíguos como condição de agregação",
        "Roteamento classless x classful",
        "Prefixos típicos: /30 e /31 em links IPv4, /64 por sub-rede IPv6"
      ],
      "regras": [
        "Documentar blocos, finalidades e reservas antes da implantação",
        "Alocar blocos contíguos e sem sobreposição para permitir sumarização",
        "Usar protocolos classless onde houver VLSM ou agregação"
      ],
      "comparacoes": [
        "Classless (carrega a máscara, suporta VLSM) vs. classful (infere pela classe)",
        "Planejar (evita renumeração) vs. improvisar (gera custo futuro)"
      ],
      "fluxos": [
        "Inventariar demanda → definir prefixos → alocar em ordem decrescente → documentar → validar classless e contiguidade"
      ],
      "excecoes": [
        "/30 ou /31 em links ponto a ponto",
        "/64 por sub-rede IPv6, exigência do SLAAC"
      ],
      "palavrasChave": [
        "planejamento",
        "documentação",
        "contiguidade",
        "classless",
        "renumeração"
      ],
      "checklist": [
        "Listo boas práticas de planejamento?",
        "Distingo classless de classful?",
        "Indico prefixos típicos para links e IPv6?",
        "Aponto as limitações de um plano ruim?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que a documentação do plano de endereçamento é considerada uma boa prática indispensável antes da implantação de uma rede?",
        "dados": "Uma empresa com três sites e dois links WAN atribui endereços sem registro: cada técnico escolhe blocos distintos e dois sites acabam usando faixas que se sobrepõem parcialmente.",
        "conceitos": [
          "Documentação de blocos",
          "Sobreposição de endereços",
          "Renumeração"
        ],
        "estrategia": "Rastrear as consequências da ausência de registro: sem documentação não há como detectar sobreposição, reservar crescimento nem garantir contiguidade para agregação.",
        "execucao": [
          "Sem registro, dois sites podem receber blocos com endereços comuns",
          "A sobreposição provoca conflito de endereços e falhas intermitentes de roteamento",
          "Corrigir exige renumeração de roteadores, hosts, DNS e regras de firewall",
          "Com documentação, blocos, finalidades e reservas ficam auditáveis antes do uso"
        ],
        "resultado": "Para evitar sobreposição, facilitar sumarização e permitir crescimento sem renumeração.",
        "justificativa": "A documentação transforma o endereçamento em decisão verificável: cada bloco tem finalidade, responsável e reserva de crescimento, o que permite detectar sobreposição antes da implantação e manter blocos contíguos, condição para sumarização. Sem ela, a correção depende de renumeração em produção, procedimento custoso por alcançar rotas, serviços e regras de filtragem.",
        "errosFrequentes": [
          "Confundir documentação com etiquetagem de cabo: o plano registra blocos e finalidades, não a fiação",
          "Achar que a sobreposição pode ser detectada depois, em produção, sem impacto"
        ],
        "variacao": "Descreva o conteúdo mínimo de uma tabela de plano de endereçamento para três sites e dois links, indicando quais colunas permitem detectar sobreposição antes da implantação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa com 3 filiais (50, 30 e 10 hosts) e 2 links WAN. Como planejar a partir de 10.0.0.0/22?",
        "dados": "Bloco disponível 10.0.0.0/22 (10.0.0.0 a 10.0.3.255). Demandas: filiais de 50, 30 e 10 hosts e dois links ponto a ponto.",
        "conceitos": [
          "Escolha de prefixo por demanda",
          "Ordem decrescente",
          "Blocos contíguos para agregação"
        ],
        "estrategia": "Calcular o prefixo mínimo de cada demanda, alocar em ordem decrescente dentro do /22 e documentar as sobras como reserva de crescimento.",
        "execucao": [
          "Filial de 50 hosts: 2^6 - 2 = 62 ≥ 50 → /26 em 10.0.0.0/26",
          "Filial de 30 hosts: 2^5 - 2 = 30 ≥ 30 → /27 em 10.0.0.64/27",
          "Filial de 10 hosts: 2^4 - 2 = 14 ≥ 10 → /28 em 10.0.0.96/28",
          "Links WAN: /30 em 10.0.0.112/30 e 10.0.0.116/30",
          "Restante (10.0.0.120 a 10.0.3.255) documentado como reserva"
        ],
        "resultado": "Filiais: /26 (62 hosts) para 50, /27 (30) para 30, /28 (14) para 10; links: /30 cada. Alocar em ordem decrescente para evitar fragmentação.",
        "justificativa": "Cada prefixo é o menor que atende à demanda com folga mínima: 50 hosts exigem /26 porque 2^5 - 2 = 30 é insuficiente; 30 hosts cabem exatamente em /27 e 10 hosts em /28. A alocação decrescente mantém os blocos alinhados e contíguos dentro do /22, o que preserva a possibilidade de sumarizar o conjunto na borda, enquanto cada link consome apenas 4 endereços.",
        "errosFrequentes": [
          "Alocar as filiais em ordem crescente, o que fragmenta o /22 e pode impedir o encaixe da filial de 50 hosts",
          "Reservar /24 para cada filial por simplicidade, esgotando o /22 com apenas três demandas"
        ],
        "variacao": "Refaça o plano para demandas de 100, 60 e 20 hosts mais dois links no bloco 10.0.0.0/22 e indique se ainda há espaço contíguo para crescimento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'RIPv1 suporta VLSM porque é um protocolo de roteamento.' A afirmação está correta em uma rede com sub-redes /26, /27 e /30?",
        "dados": "Rede com três sub-redes VLSM: 10.0.0.0/26, 10.0.0.64/27 e 10.0.0.96/28, mais dois links /30. Os roteadores usam RIPv1 para aprender rotas entre os sites.",
        "conceitos": [
          "Classful x classless",
          "Propagação da máscara",
          "Viabilidade de VLSM"
        ],
        "estrategia": "Verificar o que o protocolo anuncia: no classful a máscara não acompanha a rota e é inferida pela classe, de modo que sub-redes do mesmo bloco se tornam indistinguíveis.",
        "execucao": [
          "RIPv1 anuncia 10.0.0.0 sem máscara, como rede de classe A /8",
          "O roteador vizinho infere /8 e não distingue /26, /27, /28 e /30",
          "As rotas das sub-redes ficam inalcançáveis de forma confiável entre os sites",
          "A correção é migrar para RIPv2, OSPF ou outro protocolo classless"
        ],
        "resultado": "Errado. RIPv1 é classful e não carrega máscara; não suporta VLSM nem sumarização. Usar RIPv2 ou OSPF.",
        "justificativa": "VLSM depende de o protocolo carregar o prefixo, pois cada roteador precisa calcular a mesma sub-rede a partir do anúncio recebido. O RIPv1 não anuncia máscara e o destinatário a infere pela classe do endereço, o que colapsa todas as sub-redes do bloco em uma única rota. Assim, mesmo com máscaras corretas nas interfaces, o VLSM não opera entre roteadores sem protocolo classless.",
        "errosFrequentes": [
          "Confundir máscara de interface com máscara propagada no anúncio",
          "Atribuir a limitação à distância administrativa ou ao limite de saltos do RIPv1, e não à ausência de CIDR"
        ],
        "variacao": "Suponha que a mesma rede substitua o RIPv1 por OSPF e mantenha duas rotas estáticas sem máscara explícita: o VLSM passa a operar? Justifique pelo que cada mecanismo propaga."
      }
    ]
  },
  "m2-u4-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Abreviar e expandir endereços IPv6 é integrante do conteúdo programático: o candidato precisa reconhecer a forma canônica, aplicar as duas regras de compressão e detectar endereços malformados. O tema sustenta itens sobre endereços especiais, como o loopback e o endereço não especificado.",
      "preRequisitos": [
        "Noção de hexadecimal e de conversão entre hexadecimal e binário",
        "Estrutura de endereços IPv4 e notação CIDR",
        "Conceito de máscara e bits de rede"
      ],
      "objetivosObservaveis": [
        "representará e abreviará endereços IPv6 corretamente, aplicando as regras de compressão",
        "Aplicar as duas regras de abreviação de endereços IPv6",
        "Expandir um endereço abreviado com '::' para a forma completa",
        "Identificar os endereços especiais ::1 e ::"
      ],
      "competencias": [
        "Manipular representações hexadecimais de 128 bits",
        "Interpretar endereços abreviados em configurações e diagnósticos",
        "Detectar endereços IPv6 inválidos por ambiguidade de compressão"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t4-s2 (Prefixos e tipos de endereço IPv6) — usa a representação abreviada para classificar tipos",
        "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — contraste decimal pontuado x hexadecimal com dois-pontos",
        "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — mesma lógica de prefixo aplicada a 128 bits"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A representação IPv6 é cobrada em itens de associação e C/E sobre compressão, expansão e endereços especiais. A exigência é conceitual e de leitura, sem cálculo extenso, o que a torna integrante do conteúdo programático de nível médio sem grande peso numérico."
      }
    },
    "niveis": {
      "iniciante": "IPv6: 128 bits = 8 grupos de 16 bits em hexadecimal, separados por dois-pontos (ex.: 2001:0db8:0000:0000:0000:ff00:0042:8329). Regras de abreviação: (1) omitir zeros à esquerda em cada grupo (0db8 -> db8, 0042 -> 42); (2) substituir um único bloco de grupos consecutivos todos zero por :: (apenas uma vez por endereço). Exemplo abreviado: 2001:db8::ff00:42:8329. :: não pode ser usado mais de uma vez (ambiguidade). Endereço loopback: ::1. Endereço não especificado: ::.",
      "intermediario": "As duas regras são independentes e se aplicam em qualquer ordem. A omissão de zeros à esquerda vale grupo a grupo e é sempre permitida; a compressão com :: só pode substituir uma sequência contígua de grupos inteiramente zero e apenas uma vez. Ao expandir, conte os grupos presentes e complete com grupos 0000 até oito: 2001:db8::ff00:42:8329 tem 5 grupos, logo :: representa 3 grupos zero, resultando em 2001:0db8:0000:0000:0000:ff00:0042:8329.",
      "avancado": "A checagem de validade exige dois testes: nenhum grupo pode exceder quatro dígitos hexadecimais (FFFF) e o endereço deve ter exatamente oito grupos após a expansão. Um endereço com dois :: é ambíguo porque a quantidade de zeros de cada ocorrência não pode ser determinada; endereços como 2001:db8::1::2 são portanto inválidos. Em diagnósticos, a expansão completa evita erro de leitura ao comparar prefixos ou aplicar filtros.",
      "especialista": "Em ambientes de produção, a representação canônica importa para bases IPAM, comparação de prefixos e normalização de logs: ferramentas distintas podem exibir formas abreviadas diferentes para o mesmo endereço, e a ordenação textual não corresponde à ordenação numérica. Casos de borda incluem :: (todos os bits zero, endereço não especificado), ::1 (loopback /128) e endereços com :: no início ou no fim, como ::ffff:0:0. A validação por expressão regular e a expansão antes de comparar são práticas defensivas."
    },
    "comparacoes": [
      {
        "tema": "Omissão de zeros à esquerda vs. compressão com ::",
        "a": {
          "rotulo": "Zeros à esquerda",
          "texto": "Regra por grupo: 0db8 -> db8 e 0042 -> 42. Pode ser aplicada em todos os grupos e não altera o número de grupos do endereço."
        },
        "b": {
          "rotulo": "Compressão com ::",
          "texto": "Regra por bloco: substitui uma sequência de grupos inteiramente zero, como em 2001:db8::ff00:42:8329. Só vale para um bloco e apenas uma vez por endereço."
        },
        "diferencaGabarito": "A primeira regra encurta grupos e sempre é válida; a segunda encurta sequências de grupos zero e é única. Aplicar :: duas vezes torna o endereço ambíguo e, por isso, inválido."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Pode-se usar :: mais de uma vez no mesmo endereço para comprimir múltiplos blocos de zeros.'",
        "porqueErrada": "Com duas ocorrências, não se pode determinar quantos grupos de zero cada uma representa: a expansão produziria endereços diferentes para a mesma escrita.",
        "versaoCorreta": "Errado. :: pode ser usado apenas uma vez por endereço; caso contrário, o endereço seria ambíguo."
      },
      {
        "afirmacaoEquivocada": "O endereço 2001:db8::1 tem apenas quatro grupos e, por isso, é um endereço curto válido.",
        "porqueErrada": "Confunde a forma abreviada com a forma completa: :: representa grupos omitidos, e todo endereço IPv6 válido tem oito grupos após a expansão.",
        "versaoCorreta": "2001:db8::1 expande para oito grupos: 2001:0db8:0000:0000:0000:0000:0000:0001."
      },
      {
        "afirmacaoEquivocada": "Os zeros à esquerda de cada grupo hexadecimal são obrigatórios na forma completa.",
        "porqueErrada": "A obrigatoriedade vale apenas para a forma expandida didática; a regra de abreviação permite omitir zeros à esquerda sem alterar o endereço representado.",
        "versaoCorreta": "Zeros à esquerda podem ser omitidos: 0db8 e db8, ou 0042 e 42, representam o mesmo grupo de 16 bits."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Endereço IPv6 com 128 bits em oito grupos de 16 bits",
        "Notação hexadecimal separada por dois-pontos",
        "Regra 1: omitir zeros à esquerda de cada grupo",
        "Regra 2: comprimir uma única sequência de grupos zero com ::",
        "Endereços especiais: ::1 (loopback) e :: (não especificado)"
      ],
      "regras": [
        ":: pode aparecer no máximo uma vez por endereço",
        "Após a expansão, o endereço deve ter exatamente oito grupos",
        "Nenhum grupo pode ter mais de quatro dígitos hexadecimais"
      ],
      "comparacoes": [
        "Zeros à esquerda (por grupo, sempre permitido) vs. :: (por bloco, uma única vez)",
        "IPv4 decimal pontuado com 4 octetos vs. IPv6 hexadecimal com 8 grupos"
      ],
      "fluxos": [
        "Forma completa → omitir zeros à esquerda → localizar a maior sequência de grupos zero → aplicar :: uma vez"
      ],
      "excecoes": [
        ":: representa todos os oito grupos zero (endereço não especificado)",
        "Endereços com dois :: são inválidos por ambiguidade"
      ],
      "palavrasChave": [
        "IPv6",
        "abreviação",
        "expansão",
        "loopback",
        "hexadecimal"
      ],
      "checklist": [
        "Reconheço os oito grupos de 16 bits?",
        "Aplico as duas regras de abreviação?",
        "Expando corretamente um endereço com ::?",
        "Identifico ::1 e ::"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Abreviar 2001:0db8:0000:0000:0000:0000:0000:0001 aplicando as duas regras de compressão do IPv6.",
        "dados": "Endereço completo com oito grupos: 2001, 0db8, 0000, 0000, 0000, 0000, 0000 e 0001. Há seis grupos consecutivos inteiramente zero no meio do endereço.",
        "conceitos": [
          "Regra de zeros à esquerda",
          "Regra de compressão com ::"
        ],
        "estrategia": "Aplicar as duas regras em sequência: primeiro encurtar cada grupo removendo zeros à esquerda e depois comprimir a única sequência de grupos zero.",
        "execucao": [
          "Remover zeros à esquerda: 2001:db8:0:0:0:0:0:1",
          "Identificar a maior sequência de grupos zero: do terceiro ao sétimo grupo",
          "Aplicar :: uma única vez no lugar dessa sequência",
          "Conferir o resultado: 2001:db8::1"
        ],
        "resultado": "2001:db8::1 (zeros à esquerda removidos e bloco de zeros comprimido com ::).",
        "justificativa": "A omissão de zeros à esquerda é válida grupo a grupo, e a sequência de zeros do meio pode ser comprimida uma única vez por ::. A escrita 2001:db8::1 preserva os oito grupos na expansão e é a forma abreviada canônica do endereço apresentado, sem ambiguidade.",
        "errosFrequentes": [
          "Comprimir também os grupos não zero subsequentes, escrevendo formas como 2001:db8::",
          "Aplicar :: em duas sequências separadas do mesmo endereço"
        ],
        "variacao": "Abreviar 2001:0db8:0000:0000:0000:ff00:0042:8329 e, em seguida, abreviar fe80:0000:0000:0000:0202:b3ff:fe1e:8329, indicando em cada caso qual sequência foi comprimida."
      },
      {
        "tipo": "aplicacao",
        "problema": "Expandir o endereço abreviado ::1 para a forma completa, com oito grupos de 16 bits escritos em hexadecimal.",
        "dados": "Endereço abreviado ::1, usado como loopback IPv6. Nenhum grupo é explicitado antes do 1, portanto o :: ocupa a posição inicial.",
        "conceitos": [
          "Expansão de ::",
          "Endereço de loopback"
        ],
        "estrategia": "Contar os grupos explicitados e completar com grupos 0000 até oito, posicionando os grupos ausentes onde o :: aparece.",
        "execucao": [
          "Contar os grupos explicitados: apenas o grupo 1",
          "Calcular os grupos omitidos: 8 - 1 = 7 grupos zero",
          "Preencher com 0000 os grupos anteriores, mantendo 0001 no final",
          "Escrever a forma completa: 0000:0000:0000:0000:0000:0000:0000:0001"
        ],
        "resultado": "A forma completa é 0000:0000:0000:0000:0000:0000:0000:0001, endereço de loopback do IPv6, em que o :: representa sete grupos zero.",
        "justificativa": "A regra de expansão exige oito grupos de 16 bits; como apenas um grupo está explícito, o :: representa sete grupos zero. O resultado 0000:0000:0000:0000:0000:0000:0000:0001 corresponde ao endereço de loopback IPv6, equivalente funcional ao 127.0.0.1 do IPv4.",
        "errosFrequentes": [
          "Expandir gerando oito grupos iguais a 0001",
          "Interpretar ::1 como um prefixo /1 em vez de um endereço de host"
        ],
        "variacao": "Expandir 2001:db8::1 e :: para a forma completa e indique, em cada caso, quantos grupos zero o :: representa."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato escreve o endereço 2001:db8::1::2 e afirma que a compressão com :: pode ser repetida para abreviar vários blocos de zeros. Essa leitura está correta?",
        "dados": "Endereço proposto: 2001:db8::1::2. Há duas ocorrências de :: separadas por grupos explicitados, o que torna a expansão ambígua.",
        "conceitos": [
          "Unicidade da compressão",
          "Ambiguidade de expansão"
        ],
        "estrategia": "Testar a expansão: se duas escritas distintas de zeros satisfazem a forma abreviada, o endereço não identifica um destino único e a notação é inválida.",
        "execucao": [
          "Contar os grupos explicitados: 2001, db8, 1 e 2 (quatro grupos)",
          "Calcular os grupos zero a distribuir: 8 - 4 = 4 grupos entre as duas ocorrências",
          "Testar divisões possíveis: 3 e 1, ou 2 e 2, produzindo endereços diferentes",
          "Concluir que a escrita não corresponde a um único endereço IPv6 válido"
        ],
        "resultado": "A escrita é inválida: com duas ocorrências de :: a expansão deixa de ser única, e a norma admite no máximo uma compressão por endereço.",
        "justificativa": "A compressão com :: substitui uma sequência de grupos zero, e a regra limita seu uso a uma ocorrência justamente para que a expansão seja única. Com quatro grupos zero a distribuir entre duas ocorrências, existem várias expansões possíveis, e o destinatário não saberá qual delas foi pretendida; por isso a notação é rejeitada como inválida.",
        "errosFrequentes": [
          "Achar que a compressão é permitida em cada bloco de zeros, como se cada bloco fosse independente",
          "Validar o endereço apenas pela contagem de grupos, sem testar a unicidade da expansão"
        ],
        "variacao": "Avalie se fe80::202:b3ff:fe1e::8329 é válido e reescreva o endereço de forma abreviada correta, comprimindo apenas a maior sequência de grupos zero."
      }
    ]
  }
};
