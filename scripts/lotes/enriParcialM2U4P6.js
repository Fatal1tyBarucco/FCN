const enriParcialM2U4P6 = {
 "m2-u4-t4-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "Reconhecer o tipo de um endereço IPv6 pelo prefixo é item frequente de prova: a distinção entre global unicast, unique local, link-local e multicast determina se o endereço é roteável, privado ou restrito ao enlace.",
   "preRequisitos": [
    "Representação hexadecimal e compressão de endereços IPv6",
    "Noções de prefixo e notação CIDR",
    "Diferença entre endereço de unicast e de grupo"
   ],
   "objetivosObservaveis": [
    "Classificar um endereço IPv6 pelo prefixo que o inicia",
    "Explicar a função e o alcance de cada tipo de endereço",
    "Relacionar prefixos de /48, /56 e /64, usados na definição de sub-rede e de organização",
    "Diferenciar o link-local do IPv6 do link-local do IPv4"
   ],
   "competencias": [
    "Classificação de endereços IPv6",
    "Planejamento de prefixos por organização e sub-rede",
    "Leitura de itens sobre endereçamento global e local"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u4-t4-s1 (Representação e abreviação de endereços IPv6) — base para ler os prefixos",
    "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — analogia IPv4 entre público e privado"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Itens que pedem a classificação de endereços IPv6 pelo prefixo aparecem com regularidade em provas de redes, com o contraste entre global unicast e unique local como distrator mais frequente. A classificação é estimativa pedagógica qualitativa."
   }
  },
  "niveis": {
   "iniciante": "Nível iniciante: o aluno reconhece que o endereço global unicast começa em 2000::/3 e é o equivalente ao endereço público do IPv4, e que o endereço link-local começa em fe80::/10 e serve apenas à comunicação dentro do mesmo enlace.",
   "intermediario": "Nível intermediário: o aluno associa cada prefixo ao tipo: unique local em fc00::/7, multicast em ff00::/8, loopback em ::1 e endereço não especificado em ::; distingue endereços de documentation, como 2001:db8::, dos globais atribuídos.",
   "avancado": "Nível avançado: o aluno explica por que o IPv6 eliminou o broadcast e o substituiu por grupos multicast, como ff02::1 para todos os nós do enlace e ff02::2 para todos os roteadores, e reconhece a economia de processamento resultante.",
   "especialista": "Nível especialista: o aluno planeja o endereçamento IPv6, adotando /64 por sub-rede conforme o mecanismo de autoconfiguração sem estado, /48 ou /56 por organização e /128 para um host específico, e sabe que o anycast reutiliza um endereço global unicast em vários nós."
  },
  "comparacoes": [
   {
    "tema": "Global unicast x unique local",
    "a": {
     "rotulo": "Global unicast",
     "texto": "Prefixo 2000::/3, com endereços roteáveis na Internet, equivalentes aos endereços públicos do IPv4, atribuídos por registro e roteados pelos provedores."
    },
    "b": {
     "rotulo": "Unique local",
     "texto": "Prefixo fc00::/7, com endereços de uso interno, não roteáveis na Internet, análogos às faixas privadas reservadas no IPv4."
    },
    "diferencaGabarito": "A diferença é o alcance do roteamento: o global unicast é publicado na Internet, enquanto o unique local existe apenas dentro do domínio interno e não é roteado externamente."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "O IPv6 mantém o broadcast, com difusão para todos os hosts do enlace.",
    "porqueErrada": "O IPv6 eliminou o broadcast porque a difusão indiscriminada desperta processamento em todos os nós; as funções correspondentes passaram a ser exercidas por grupos multicast específicos.",
    "versaoCorreta": "Não há broadcast em IPv6; as difusões são feitas por multicast, como ff02::1 para todos os nós e ff02::2 para todos os roteadores do enlace."
   },
   {
    "afirmacaoEquivocada": "O endereço fe80::/10 é roteável na Internet, assim como os endereços globais.",
    "porqueErrada": "Esse prefixo identifica endereços de escopo local ao enlace, usados no protocolo de descoberta de vizinhos e na autoconfiguração; roteadores não os anunciam para fora do segmento.",
    "versaoCorreta": "fe80::/10 é link-local, vale apenas dentro do enlace e não é roteável na Internet, ao contrário dos endereços 2000::/3."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "Global unicast (2000::/3)",
    "Unique local (fc00::/7)",
    "Link-local (fe80::/10)",
    "Multicast (ff00::/8)",
    "Loopback (::1) e não especificado (::)",
    "Anycast"
   ],
   "regras": [
    "O tipo do endereço é reconhecido pelo prefixo que o inicia",
    "Sub-rede IPv6 usa /64 por padrão; /128 identifica um único host",
    "Não existe broadcast em IPv6; as funções são cobertas por grupos multicast"
   ],
   "comparacoes": [
    "Global unicast (roteável) x unique local (privado)",
    "Link-local IPv6 fe80::/10 x link-local IPv4 169.254.0.0/16"
   ],
   "fluxos": [
    "Ler o prefixo do endereço → classificar o tipo → verificar o alcance do roteamento → conferir o tamanho do prefixo da sub-rede"
   ],
   "excecoes": [
    "O anycast não tem prefixo próprio e usa um endereço global unicast replicado em vários nós",
    "O prefixo de documentation 2001:db8:: não deve ser usado em produção"
   ],
   "palavrasChave": [
    "prefixo",
    "roteável",
    "privado",
    "enlace",
    "multicast",
    "autoconfiguração"
   ],
   "checklist": [
    "Classifiquei o endereço pelo prefixo?",
    "Verifiquei se o alcance pretendido é o enlace ou a Internet?",
    "Confirmei o tamanho do prefixo de sub-rede?",
    "Evitei confundir fe80::/10 com 169.254.0.0/16?",
    "Tratei a ausência de broadcast no IPv6 corretamente?"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Classificar os endereços fe80::1, 2001:db8::1, fd00::1 e ff02::1 quanto ao tipo e ao alcance.",
    "dados": "Endereços IPv6: fe80::1, 2001:db8::1, fd00::1 e ff02::1; prefixes correspondentes fe80::/10, 2000::/3, fc00::/7 e ff00::/8.",
    "conceitos": [
     "Classificação por prefixo",
     "Link-local",
     "Multicast"
    ],
    "estrategia": "Ler o início de cada endereço, associá-lo ao prefixo correspondente e indicar a função e o alcance de cada tipo.",
    "execucao": [
     "fe80::1 começa em fe80, dentro de fe80::/10: link-local do enlace.",
     "2001:db8::1 começa em 2000::/3: global unicast, reservado à documentação.",
     "fd00::1 começa em fd00, dentro de fc00::/7: unique local, de uso interno.",
     "ff02::1 começa em ff00::/8: multicast do grupo de todos os nós do enlace."
    ],
    "resultado": "fe80::1 é link-local, 2001:db8::1 é global unicast de documentação, fd00::1 é unique local e ff02::1 é multicast de todos os nós.",
    "justificativa": "O tipo é definido pelo prefixo: fe80 indica escopo de enlace, fd00 indica uso interno, o bloco 2000 indica endereçamento global e o byte ff inicial indica endereço de grupo.",
    "errosFrequentes": [
     "Classificar fe80::1 como endereço global por não ter a forma do IPv4",
     "Confundir o endereço de documentação com um endereço em produção",
     "Ler ff02::1 como endereço de host individual"
    ],
    "variacao": "Se o endereço for 2003::1, ele permanece no bloco global unicast 2000::/3, mas deixa de ser o prefixo de documentação e passa a representar um endereço global atribuído."
   },
   {
    "tipo": "aplicacao",
    "problema": "Explicar por que o IPv6 eliminou o broadcast e quais mecanismos substituem essa função em uma rede local.",
    "dados": "Rede IPv6 local comalink de Ethernet; comparação de custo de processamento entre difusão para todos e grupos multicast específicos.",
    "conceitos": [
     "Ausência de broadcast",
     "Multicast",
     "Grupos de enlace"
    ],
    "estrategia": "Descrever o custo do broadcast para os hosts que não precisam da mensagem, apontar os grupos multicast que cobrem as mesmas funções e relacionar o mecanismo à eficiência do enlace.",
    "execucao": [
     "Descrever o broadcast IPv4: todos os hosts do segmento processam o quadro.",
     "Relacionar ao IPv6: a difusão indiscriminada foi removida do protocolo.",
     "Indicar os grupos substitutos: ff02::1 para todos os nós e ff02::2 para todos os roteadores.",
     "Explicar o ganho: apenas os hosts inscritos no grupo recebem a mensagem."
    ],
    "resultado": "O broadcast foi substituído por grupos multicast: as funções de difusão são cobertas por endereços de grupo, e apenas os nós interessados recebem a mensagem.",
    "justificativa": "No IPv6, a entrega é feita por grupos identificados por prefixo ff, o que evita o processamento desnecessário de quadros de difusão em hosts que não participam do grupo solicitado.",
    "errosFrequentes": [
     "Afirmar que o IPv6 ainda suporta broadcast para compatibilidade",
     "Confundir grupo multicast com endereço de unicast de servidor",
     "Citar ff02::2 como grupo de todos os nós em vez de todos os roteadores"
    ],
    "variacao": "Em redes com muitos dispositivos móveis e sensores, a redução de processamento é proporcional ao número de hosts que não pertencem ao grupo."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'fe80::/10 é roteável na Internet.' Julgar a afirmação e apresentar a leitura correta.",
    "dados": "Prefixo fe80::/10 apresentado como rota pública; contexto de protocolo de descoberta de vizinhos e autoconfiguração de endereço.",
    "conceitos": [
     "Escopo do endereço",
     "Link-local",
     "Roteabilidade"
    ],
    "estrategia": "Ligar o prefixo à função que ele atende no protocolo, mostrar por que o escopo é restrito e delimitar onde o endereço pode circular.",
    "execucao": [
     "Associar fe80::/10 ao prefixo de endereços de enlace.",
     "Relacionar o uso à descoberta de vizinhos e à autoconfiguração.",
     "Explicar que roteadores não anunciam esses endereços fora do segmento.",
     "Contrastar com o bloco global unicast 2000::/3."
    ],
    "resultado": "Errado: fe80::/10 é o prefixo link-local, válido apenas dentro do enlace e jamais roteado na Internet, ao contrário dos endereços do bloco 2000::/3.",
    "justificativa": "O escopo de um endereço é definido pelo bloco alocado a ele; endereços link-local existem para a comunicação local e não são propagados por roteadores, que ignoram qualquer rota para esse prefixo.",
    "errosFrequentes": [
     "Confundir o endereço link-local do IPv6 com o do IPv4, 169.254.0.0/16",
     "Supor que a autoconfiguração gera endereço global",
     "Considerar que o NAT é dispensado apenas por haver endereços link-local"
    ],
    "variacao": "Se a organização adotar endereços unique local fd00::/8 em sua rede interna, o tráfego continua sem roteamento para a Internet, mas pode ser roteado entre segmentos internos."
   }
  ]
 },
 "m2-u4-t4-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "A maioria dos erros em questões de endereçamento decorre de armadilhas previsíveis, como confundir prefixo com número de hosts, esquecer a subtração de rede e broadcast,(classificar) faixas pela aparência e ignorar o alinhamento do bloco; reconhecê-las evita perda de pontos.",
   "preRequisitos": [
    "Cálculo de máscara decimal e prefixo CIDR",
    "Operação lógica AND entre endereço e máscara",
    "Regras de sub-rede e endereçamento VLSM"
   ],
   "objetivosObservaveis": [
    "Listar as armadilhas mais comuns do endereçamento IPv4 e IPv6",
    "Recalcular rede e broadcast a partir do AND com a máscara",
    "Classificar faixas privadas e públicas sem rely na aparência",
    "Verificar o alinhamento de um endereço dentro do bloco"
   ],
   "competencias": [
    "Autoverificação de cálculos de rede",
    "Precisão em itens quantitativos de prova",
    "Auditoria de listas de endereçamento"
   ],
   "dificuldade": "avancado",
   "relacoes": [
    "m2-u4-t3-s1 (VLSM: máscara de comprimento variável) — a ordem de alocação é uma das armadilhas do plano",
    "m2-u4-t4-s2 (Prefixos e tipos de endereço IPv6) — antecipa a confusão entre link-local IPv4 e IPv6"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "As armadilhas de endereçamento organizam boa parte dos itens de cálculo de rede em provas de TI, e o erro de alinhamento é o distrator mais frequente. A classificação é estimativa pedagógica qualitativa, não medição de incidência."
   }
  },
  "niveis": {
   "iniciante": "Nível iniciante: o aluno memoriza que o número de hosts utilizáveis de uma sub-rede é 2 elevado ao número de bits de host, menos dois, e que o /24 corresponde a 256 endereços totais e 254 endereços utilizáveis.",
   "intermediario": "Nível intermediário: o aluno converte prefixo em máscara decimal e calcula o endereço de rede pelo AND lógico do endereço com a máscara, obtendo a partir dele o broadcast e o intervalo de hosts.",
   "avancado": "Nível avançado: o aluno verifica o alinhamento do bloco, identifica o erro em afirmações como dizer que 192.168.1.100/25 pertence à rede .128 e reconhece que 172.32.0.0 é público, embora pareça privado.",
   "especialista": "Nível especialista: o aluno audita uma lista inteira de endereços, sinalizando cada armadilha presente, checandoclassification Ranges, prefixos IPv6 duplicados, alocação VLSM fora de ordem e classificações feitas por aparência."
  },
  "comparacoes": [
   {
    "tema": "Classificação por aparência x classificação por cálculo",
    "a": {
     "rotulo": "Por aparência",
     "texto": "Deduz a faixa a partir do primeiro octeto, supondo que todo endereço iniciado por 192 ou 172 seja privado, o que leva a erro sobre a faixa 172.32.0.0 em diante."
    },
    "b": {
     "rotulo": "Por cálculo",
     "texto": "Confere o bloco reservado pela máscara e o endereço de rede calculado, o que permite afirmar com segurança se o endereço é privado, público ou de enlace."
    },
    "diferencaGabarito": "A aparência falha em faixas de transição, como 172.16.0.0/12, que termina em 172.31; somente o cálculo com a máscara delimita o bloco corretamente."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "O endereço 192.168.1.100/25 pertence à rede 192.168.1.128/25.",
    "porqueErrada": "O AND do último octeto 100, em binário 01100100, com a máscara 255.255.255.128 resulta em zero, de modo que o endereço pertence ao bloco que começa em .0 e não ao que começa em .128.",
    "versaoCorreta": "192.168.1.100/25 pertence à rede 192.168.1.0/25, com hosts de .1 a .126 e broadcast em .127."
   },
   {
    "afirmacaoEquivocada": "O endereço 172.32.5.3 é privado, pois começa com 172.",
    "porqueErrada": "A faixa privada 172.16.0.0/12 cobre de 172.16.0.0 até 172.31.255.255; a partir de 172.32.0.0 os endereços são públicos, embora mantenham o mesmo primeiro octeto.",
    "versaoCorreta": "172.32.5.3 é público; o bloco privado dessa faixa termina em 172.31.255.255."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "Prefixo e máscara",
    "Endereço de rede e broadcast",
    "Alinhamento de bloco",
    "Operação AND",
    "Faixas privadas",
    "Link-local IPv4 e IPv6"
   ],
   "regras": [
    "Hosts utilizáveis = 2^(32 − n) − 2",
    "Rede = endereço IP AND máscara; broadcast = rede OR máscara invertida",
    "O último octeto igual a 255 não é, por si só, indicador de broadcast"
   ],
   "comparacoes": [
    "Alinhamento por cálculo x classificação por aparência",
    "Link-local IPv4 169.254.0.0/16 x link-local IPv6 fe80::/10"
   ],
   "fluxos": [
    "Converter prefixo em máscara → calcular rede por AND → derivar broadcast e intervalo → verificar alinhamento → classificar a faixa pela máscara"
   ],
   "excecoes": [
    "O prefixo /31 dispensa a reserva de rede e broadcast em enlaces ponto a ponto",
    "O endereço 255.255.255.255 é o broadcast limitado, e não o indicador de uma rede"
   ],
   "palavrasChave": [
    "armadilha",
    "alinhamento",
    "AND",
    "broadcast",
    "faixa privada",
    "recalcular"
   ],
   "checklist": [
    "Converti o prefixo em máscara decimal?",
    "Recalculei a rede pelo AND em vez de confiar na aparência?",
    "Descontei rede e broadcast ao contar os hosts?",
    "Verifiquei a classificação da faixa pela máscara?",
    "Chequei a duplicação do operador dois pontos no IPv6?"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Calcular a rede, o broadcast e o intervalo de hosts do endereço 10.20.30.40/26, mostrando o recálculo pelo AND.",
    "dados": "Endereço 10.20.30.40 com prefixo /26; máscara correspondente 255.255.255.192; último octeto 40 em binário igual a 00101000.",
    "conceitos": [
     "Máscara decimal",
     "Operação AND",
     "Contagem de hosts"
    ],
    "estrategia": "Converter o prefixo em máscara, calcular o AND do último octeto com o valor da máscara e derivar do resultado o endereço de rede, o broadcast e o intervalo útil.",
    "execucao": [
     "Converter /26 em máscara: 255.255.255.192.",
     "Calcular o AND do último octeto: 00101000 AND 11000000 resulta em 00000000, ou seja, zero.",
     "Formar a rede: 10.20.30.0/26.",
     "Calcular o broadcast: todos os bits de host em um, o que resulta em 10.20.30.63.",
     "Contar os hosts: 2^6 − 2 = 62, de .1 a .62."
    ],
    "resultado": "Rede 10.20.30.0/26, broadcast 10.20.30.63 e 62 endereços utilizáveis, de .1 a .62.",
    "justificativa": "Como a máscara de /26 deixa seis bits de host, o AND zera os bits menos significativos do octeto 40 e fixa o endereço de rede em .0, whence o intervalo de .1 a .62 e o broadcast em .63.",
    "errosFrequentes": [
     "Assumir rede .64 por causa do terceiro bit do octeto",
     "Contar 64 hosts em vez de 62, esquecendo rede e broadcast",
     "Usar o valor 40 como broadcast sem recalcular"
    ],
    "variacao": "Para 10.20.30.200/26, o AND do octeto 200 com 192 resulta em 192, logo a rede é 10.20.30.192/26, com hosts de .193 a .254 e broadcast em .255."
   },
   {
    "tipo": "aplicacao",
    "problema": "Explicar por que a ordem de alocação das sub-redes no VLSM precisa ser decrescente e o que falha quando se começa pelas menores.",
    "dados": "Bloco 192.168.10.0/24; demandas de 50, 25 e 2 endereços; tentativa de alocar primeiro a sub-rede de 2 endereços.",
    "conceitos": [
     "VLSM",
     "Alinhamento de blocos",
     "Fragmentação do espaço"
    ],
    "estrategia": "Comparar a sequência de alocação, mostrar como o primeiro bloco pequeno ocupa o início do espaço e impedir que a maior demanda encontre faixa alinhada disponível.",
    "execucao": [
     "Calcular os prefixos por demanda: /26, /27 e /30.",
     "Alocar primeiro o /30, que ocupa os quatro primeiros endereços do bloco.",
     "Verificar que a faixa seguinte deixa de estar alinhada ao tamanho do /26 exigido.",
     "Concluir que a alocação decrescente preserva blocos contíguos e alinhados para as maiores demandas."
    ],
    "resultado": "Começar pelas sub-redes pequenas fragmenta o espaço e impede a alocação contígua e alinhada do /26, obrigando a refazer o plano inteiro.",
    "justificativa": "Cada sub-rede precisa ocupar um múltiplo do próprio tamanho dentro do bloco; consumir o início do espaço com um bloco pequeno desloca as fronteiras e quebra a condição de alinhamento exigida pela maior demanda.",
    "errosFrequentes": [
     "Alocar na ordem em que os blocos aparecem na demanda",
     "Supor que qualquer sequência de prefixos cabe no bloco",
     "Não conferir as fronteiras após cada alocação"
    ],
    "variacao": "Se as demandas forem 100, 50 e 2 endereços, a ordem decrescente produz /25, /26 e /30, e a sobra fica concentrada no fim do bloco, o que amplia a folga para crescimento."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'Para descobrir o broadcast, basta olhar se o último octeto vale 255.' Julgar a afirmação e apresentar o método correto.",
    "dados": "Três endereços com máscara /24, /26 e /30, Respectivamente; apenas um deles apresenta último octeto igual a 255.",
    "conceitos": [
     "Broadcast",
     "Máscara",
     "Bits de host"
    ],
    "estrategia": "Mostrar que o broadcast depende dos bits de host em um dentro da máscara, e não do valor numérico do último octeto, comparando os três casos.",
    "execucao": [
     "Lembrar que o broadcast se obtém ligando todos os bits de host.",
     "Com /24, os oito bits de host em um produzem o último octeto 255.",
     "Com /26, restam seis bits de host, logo o broadcast termina em 63.",
     "Com /30, restam dois bits de host, logo o broadcast termina em 3."
    ],
    "resultado": "Errado: o valor 255 aparece como último octeto do broadcast apenas com a máscara /24; nos demais casos o broadcast é determinado pela quantidade de bits de host.",
    "justificativa": "O broadcast é o maior endereço do bloco, obtido da máscara, e não um valor fixo; com máscara /26, o maior endereço é .63, e com /30, é .3, o que mostra que a máscara determina o resultado.",
    "errosFrequentes": [
     "Usar 255 como broadcast em qualquer máscara",
     "Confundir o endereço de broadcast com o endereço 255.255.255.255",
     "Esquecer que o endereço de rede também deriva da máscara"
    ],
    "variacao": "Com um prefixo /22, o bloco tem dez bits de host e o broadcast do segmento 192.168.0.0/22 é 192.168.3.255, mostrando que o valor 255 aparece apenas no último dos quatro octetos."
   }
  ]
 }
};
