const enriParcialM2U1P4 = {
 "m2-u1-t4-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "O meio de transmissão define banda, alcance, imunidade a interferência e custo do enlace; concursos cobram a associação entre meio, categoria e cenário. Saber distinguir UTP, STP, fibra óptica, Wi-Fi e rádio permite resolver itens sobre qual cabo usar em fábrica ou enlace externo.",
   "preRequisitos": [
    "Conceito de enlace (canal de comunicação entre dois nós)",
    "Diferença entre sinal elétrico, óptico e eletromagnético"
   ],
   "objetivosObservaveis": [
    "Classificar meios em guiados e não guiados",
    "Citar característica, vantagem e limitação de cada meio",
    "Associar categoria de par trançado (Cat5e, Cat6, Cat6a) à taxa",
    "Escolher o meio adequado para um cenário de rede"
   ],
   "competencias": [
    "Seleção de meio de transmissão por cenário",
    "Leitura de especificações de cabeamento"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u1-t1-s1 (Definição de rede e componentes básicos)",
    "m2-u1-t3-s1 (Métricas de desempenho de rede)",
    "m2-u1-t2-s1 (Unicast, broadcast, multicast, anycast)"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Meios de transmissão aparecem em questões de TI, associando meio e categoria de cabeamento ao ambiente de instalação. Classificação média é estimativa pedagógica de adequação ao programa."
   }
  },
  "niveis": {
   "iniciante": "Meios guiados levam o sinal por cabo físico. UTP (sem blindagem) é barato e fácil, mas suscetível a interferência; STP adiciona blindagem para ambientes com muita interferência eletromagnética. A fibra óptica transmite luz, com alta banda, longo alcance e imunidade a interferência. O coaxial foi usado em redes antigas e TV a cabo.",
   "intermediario": "No par trançado, Cat5e suporta até 1 Gbps, Cat6 até 10 Gbps limitado a cerca de 55 m e Cat6a mantém 10 Gbps até 100 m; o segmento padrão de UTP é de 100 m. O STP reduz ruído em indústrias e perto de motores elétricos. A fibra óptica oferece banda muito maior que o cobre e não sofre interferência eletromagnética, ideal para backbone.",
   "avancado": "A fibra monomodo usa núcleo estreito e laser, permitindo dezenas de quilômetros com baixa atenuação; a multimodo usa núcleo mais largo e LED, limitada a poucos cientos de metros. Em ambientes com alta EMI, o STP atenua o ruído, mas a fibra é a solução definitiva por ser totalmente imune.",
   "especialista": "O orçamento de enlace compara atenuação (dB/km), largura de banda, distância máxima e custo de instalação e manutenção. UTP/STP são limitados a 100 m por segmento sem repetidor; a fibra monomodo atinge dezenas de quilômetros sem regeneração. A reflexão e a dispersão cromática limitam a fibra multimodo em altas taxas."
  },
  "comparacoes": [
   {
    "tema": "UTP vs STP em ambiente com interferência eletromagnética",
    "a": {
     "rotulo": "UTP (Unshielded Twisted Pair)",
     "texto": "Par trançado sem blindagem, barato e fácil de instalar, limitado a 100 m por segmento; suscetível a interferência eletromagnética de motores, lâmpadas fluorescentes e cabos de energia."
    },
    "b": {
     "rotulo": "STP (Shielded Twisted Pair)",
     "texto": "Par trançado com blindagem metálica que reduz a interferência eletromagnética, indicado para ambientes industriais; custo e dificuldade de instalação maiores que o UTP."
    },
    "diferencaGabarito": "O STP oferece maior imunidade a interferência que o UTP devido à blindagem, mas custa mais e é mais difícil de instalar; em ambiente com alta EMI, o STP é preferível ao UTP."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "O Cat6 sempre suporta 10 Gbps até 100 metros em qualquer instalação.",
    "porqueErrada": "O Cat6 suporta 10 Gbps apenas até cerca de 55 metros; para 10 Gbps até 100 metros é necessário o Cat6a, versão aprimorada com melhor desempenho contra diafonia.",
    "versaoCorreta": "Errado. O Cat6 suporta 10 Gbps até aproximadamente 55 m; para 10 Gbps até 100 m usa-se o Cat6a. A distância máxima padrão de um enlace de par trançado é de 100 m independentemente da categoria."
   },
   {
    "afirmacaoEquivocada": "A fibra óptica é mais lenta que o UTP porque a luz viaja mais devagar que o sinal elétrico no cobre.",
    "porqueErrada": "A velocidade da luz na fibra (cerca de 200.000 km/s) é comparável à do sinal elétrico no cobre; a vantagem da fibra está na largura de banda (múltiplos comprimentos de onda de luz) e na imunidade a interferência, não na velocidade de propagação do sinal.",
    "versaoCorreta": "Errado. A velocidade de propagação na fibra é comparável à do cobre; a fibra se destaca pela largura de banda muito maior e imunidade a interferência eletromagnética, não por ser mais rápida na propagação do sinal."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "Meio guiado: conduz sinal por caminho físico (cabo)",
    "Meio não guiado: propaga sinal pelo ar (rádio, Wi-Fi)",
    "Par trançado UTP/STP: categorias definem taxa e distância"
   ],
   "regras": [
    "Um segmento de par trançado tem no máximo 100 m sem repetidor",
    "O broadcast não atravessa roteadores; fica restrito à sub-rede local",
    "A fibra óptica é imune a interferência eletromagnética"
   ],
   "comparacoes": [
    "O 2,4 GHz tem maior alcance que o 5 GHz, mas o 5 GHz oferece maior taxa em menor área"
   ],
   "fluxos": [
    "Escolha do meio: analisar banda, distância, imunidade a interferência, mobilidade e custo do cenário"
   ],
   "excecoes": [
    "A fibra multimodo é limitada a curtas distâncias por dispersão, ao contrário da monomodo"
   ],
   "palavrasChave": [
    "UTP",
    "STP",
    "fibra óptica",
    "coaxial",
    "Wi-Fi",
    "rádio",
    "interferência",
    "largura de banda"
   ],
   "checklist": [
    "Identificar se o meio é guiado ou não guiado",
    "Verificar a categoria do par trançado e a taxa suportada",
    "Confirmar a distância máxima do segmento (100 m para UTP)",
    "Avaliar a presença de interferência eletromagnética no local",
    "Escolher fibra para backbone ou longo alcance",
    "Prever custo de instalação e manutenção"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Qual meio de transmissão cabeado usar para conectar dois prédios a 500 m de distância?",
    "dados": "Distância: 500 m entre os prédios; cabeamento externo; possibilidade de interferência atmosférica e eletromagnética.",
    "conceitos": [
     "Fibra óptica monomodo",
     "Imunidade a interferência eletromagnética"
    ],
    "estrategia": "Comparar o alcance máximo de cada meio com a distância exigida (500 m) e a imunidade a interferência no trajeto externo entre prédios.",
    "execucao": [
     "Verificar que UTP/Cat6 é limitado a 100 m por segmento, insuficiente para 500 m",
     "Confirmar que a fibra óptica monomodo atinge dezenas de quilômetros sem repetidor",
     "Concluir que a fibra monomodo é o meio adequado, sendo imune a raios e interferência"
    ],
    "resultado": "Fibra óptica monomodo — imune a interferência (raios), suporta 500 m sem repetidor. UTP Cat6 limita-se a 100 m.",
    "justificativa": "A distância de 500 m excede o limite de 100 m do par trançado, e o trajeto externo expõe o cabo a interferência atmosférica; a fibra monomodo cobre quilômetros sem repetidor e é imune a EMI, atendendo ao cenário.",
    "errosFrequentes": [
     "Escolher UTP Cat6 ignorando o limite de 100 m de segmento",
     "Escolher Wi-Fi para enlace externo fixo, sujeito a interferência e perda de sinal"
    ],
    "variacao": "Se os prédios estivessem a 30 m de distância dentro do mesmo prédio, o UTP Cat6 seria suficiente e mais barato que a fibra."
   },
   {
    "tipo": "aplicacao",
    "problema": "Uma fábrica com máquinas elétricas de alta potência precisa de rede cabeada. UTP ou STP?",
    "dados": "Ambiente: fábrica com motores elétricos de alta potência; requisito: rede cabeada; opções: UTP ou STP.",
    "conceitos": [
     "STP (blindagem contra interferência eletromagnética)",
     "Interferência eletromagnética (EMI) em ambiente industrial"
    ],
    "estrategia": "Avaliar a exposição do cabeamento a fontes de interferência eletromagnética das máquinas e escolher o meio com blindagem adequada.",
    "execucao": [
     "Identificar que motores elétricos geram intensa interferência eletromagnética",
     "Reconhecer que o UTP não tem blindagem e sofreria corrompimento de dados",
     "Confirmar que o STP possui blindagem metálica que atenua o ruído"
    ],
    "resultado": "STP — blindagem reduz interferência eletromagnética; em casos extremos, fibra óptica é a solução definitiva (imune a EMI).",
    "justificativa": "O STP oferece blindagem que protege os pares trançados da EMI gerada pelas máquinas, preservando a integridade dos dados; o UTP sem blindagem teria alta taxa de erros no ambiente industrial.",
    "errosFrequentes": [
     "Escolher UTP por ser mais barato, ignorando a interferência das máquinas elétricas",
     "Assumir que qualquer blindagem elimina toda a interferência, sem avaliar a intensidade do ruído"
    ],
    "variacao": "Se a fábrica tivesse um andar administrativo longe das máquinas, o UTP seria suficiente ali, reservando o STP apenas ao trecho perto dos motores."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'Fibra óptica é mais lenta que UTP porque a luz é mais lenta que eletricidade.'",
    "dados": "Afirmação sobre velocidade de propagação da luz na fibra versus sinal elétrico no cobre.",
    "conceitos": [
     "Velocidade de propagação do sinal",
     "Largura de banda da fibra óptica"
    ],
    "estrategia": "Desmontar a afirmação comparando a velocidade real de propagação da luz na fibra com a do sinal elétrico no cobre e identificando a verdadeira vantagem da fibra.",
    "execucao": [
     "Comparar a velocidade da luz na fibra (~200.000 km/s) com a do sinal elétrico no cobre (comparável)",
     "Identificar que a vantagem da fibra é a largura de banda (múltiplos comprimentos de onda) e imunidade a interferência",
     "Concluir que a afirmação confunde velocidade de propagação com capacidade de transmissão"
    ],
    "resultado": "Errado. A velocidade da luz na fibra é comparável à do sinal elétrico no cobre; a vantagem da fibra é largura de banda e imunidade a interferência.",
    "justificativa": "A leitura ingênua associa 'luz' a maior velocidade e conclui o inverso; na verdade, ambos se propagam a ordens de magnitude semelhantes, e a fibra vence por banda e imunidade, não por velocidade do sinal.",
    "errosFrequentes": [
     "Acreditar que a luz na fibra é muito mais lenta que a eletricidade no cobre",
     "Confundir velocidade de propagação do sinal com largura de banda do canal"
    ],
    "variacao": "Se a afirmação fosse 'fibra óptica tem maior largura de banda que UTP porque usa luz', ela seria correta, pois múltiplos comprimentos de onda permitem maior capacidade."
   }
  ]
 }
};
