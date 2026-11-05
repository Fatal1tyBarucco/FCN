const enriParcialM2U5P1 = {
 "m2-u5-t1-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "ping é o primeiro teste de conectividade em redes locais e de acesso, e concursos cobram sua interpretação para distinguir latência, perda e bloqueio de ICMP, evitando conclusões precipitadas sobre falha total de serviço.",
   "preRequisitos": [
    "ICMP echo request e echo reply",
    "Noção de RTT e TTL",
    "Comando básico em terminal Linux/Windows"
   ],
   "objetivosObservaveis": [
    "explicará a função do ping, sua sintaxe básica e interpretará a saída (RTT, perda, TTL)",
    "executará ping com -c ou -n para limitar envios e comparar tempos",
    "identificará mensagens Destination Host Unreachable versus Request timed out"
   ],
   "competencias": [
    "Diagnóstico inicial de conectividade IP",
    "Leitura crítica de saída de ferramenta de rede",
    "Evitar inferência incorreta a partir de bloqueio de ICMP"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u5-t1-s2 (traceroute/tracert: finalidade, sintaxe e interpretação)"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Questões de diagnóstico aparecem em provas de redes do , e , exigindo leitura de RTT, perda e mensagens de erro do ping para localizar camadas IP versus aplicação."
   }
  },
  "niveis": {
   "iniciante": "ping envia ICMP echo request e espera echo reply, medindo RTT (round-trip time) e perda de pacotes. Sintaxe: ping <host> (Linux/macOS contínuo; Windows envia 4 por padrão). Opções: -c (quantidade, Linux), -n (quantidade, Windows), -t (TTL), -i (intervalo). Interpretação: RTT baixo e estável = boa conectividade; RTT alto = latência/congestionamento; perda = problema de enlace/roteamento/firewall; 'Destination Host Unreachable' = roteamento; 'Request timed out' = sem resposta (firewall, host desligado ou perda).",
   "intermediario": "Com TTL e intervalo ajustados, o aluno calcula variação de RTT, interpreta porcentagem de perda e relaciona mensagens de erro a causas prováveis: bloqueio de ICMP, host inativo ou roteamento quebrado, distinguindo problemas de camada 3 de indisponibilidade de serviço de aplicação.",
   "avancado": "Analisa sequências de ping com latência crescente, correlaciona com congestionamento, jitter e perda intermitente, e avalia impacto de MTU e fragmentação, propondo testes complementares (traceroute) quando ping isolado gera ambiguidade.",
   "especialista": "Modela cenários de bloqueio seletivo de ICMP por políticas de firewall, explica por que serviços TCP permanecem acessíveis mesmo com ping falhando e projeta procedimentos de diagnóstico que combinam ping, traceroute e teste de porta sem assumir simetria de rota."
  },
  "comparacoes": [
   {
    "tema": "Ping versus teste de conectividade de aplicação",
    "a": {
     "rotulo": "Ping ICMP",
     "texto": "Envia echo request e mede RTT e perda na camada 3, podendo ser bloqueado por firewall sem indicar falha de serviço."
    },
    "b": {
     "rotulo": "Teste de porta TCP",
     "texto": "Tenta estabelecer conexão TCP no porto do serviço, confirmando disponibilidade da aplicação independentemente de ICMP."
    },
    "diferencaGabarito": "Ping avalia caminho IP; teste de porta avalia serviço. Sucesso de porta com ping falho indica bloqueio de ICMP, não falha total da rede."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Afirmação: 'Se o ping falha, a rede está totalmente inoperante.'",
    "porqueErrada": "Ignora que firewalls podem bloquear ICMP enquanto TCP/UDP continuam funcionando, e confunde conectividade IP com disponibilidade de aplicação.",
    "versaoCorreta": "Errado. Firewall pode bloquear ICMP enquanto HTTP/HTTPS funcionam. Ping é indicador, não prova absoluta."
   },
   {
    "afirmacaoEquivocada": "Afirmação: 'RTT alto sempre significa cabo defeituoso.'",
    "porqueErrada": "RTT reflete distância, carga de roteadores e filas; latência alta pode ser normal em links internacionais ou por congestionamento temporário.",
    "versaoCorreta": "RTT alto indica latência elevada, que pode decorrer de distância geográfica, congestionamento ou roteamento subótimo, não necessariamente falha física."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "ICMP echo request/reply",
    "Round-trip time RTT",
    "TTL Time To Live"
   ],
   "regras": [
    "Ping limitado a camada 3, não testa aplicação",
    "Ausência de resposta não prova indisponibilidade de serviço"
   ],
   "comparacoes": [
    "Ping indica caminho IP; teste de porta indica serviço"
   ],
   "fluxos": [
    "Emitir echo request → aguardar reply → calcular RTT e perda"
   ],
   "excecoes": [
    "ICMP bloqueado por política de segurança",
    "Host pode responder TCP mesmo sem responder ICMP"
   ],
   "palavrasChave": [
    "ICMP",
    "RTT",
    "perda",
    "TTL",
    "timeout"
   ],
   "checklist": [
    "Verificar sintaxe correta do comando",
    "Interpretar RTT médio e desvio",
    "Distinguir timeout de host unreachable",
    "Testar complementarmente com teste de porta"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Saída do ping mostra '64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=12.3 ms'. O que indica?",
    "dados": "Host 8.8.8.8 respondeu em 12.3 ms, TTL 117, pacote de 64 bytes, sequência 1. Sem perdas relatadas nesta amostra.",
    "conceitos": [
     "ICMP echo reply",
     "RTT"
    ],
    "estrategia": "Ler campos da linha de resposta, identificar RTT, TTL e ausência de perda, concluir conectividade IP funcional.",
    "execucao": [
     "Observar endereço de origem na resposta",
     "Registrar tempo time=12.3 ms",
     "Inferir TTL 117 como número de saltos percorridos",
     "Concluir que pacote chegou ao destino e retornou"
    ],
    "resultado": "Resposta recebida com sucesso; RTT 12,3 ms; TTL 117 (passou por ~11 roteadores, se TTL inicial 128). Conectividade IP ok.",
    "justificativa": "A presença de echo reply comprova caminho IP bidirecional; RTT baixo indica baixa latência; TTL decrescente indica saltos percorridos, compatível com conectividade funcional.",
    "errosFrequentes": [
     "Confundir TTL com número exato de roteadores sem considerar TTL inicial",
     "Interpretar RTT único como garantia de estabilidade"
    ],
    "variacao": "Mudar host para 1.1.1.1 e observar RTT diferente, mantendo a mesma lógica de interpretação de TTL e tempo."
   },
   {
    "tipo": "aplicacao",
    "problema": "ping ao gateway (192.168.1.1) funciona, mas ping a 8.8.8.8 falha. Onde está o problema?",
    "dados": "Ping para 192.168.1.1 retorna RTT 1 ms sem perda. Ping para 8.8.8.8 gera Request timed out em 100% das tentativas com -c 4.",
    "conceitos": [
     "Roteamento local",
     "NAT e ISP"
    ],
    "estrategia": "Comparar alcance local versus remoto, inferir que problema está além do gateway e verificar roteamento padrão, NAT ou bloqueio.",
    "execucao": [
     "Confirmar resposta do gateway",
     "Registrar falta de resposta ao destino externo",
     "Verificar rota padrão no host",
     "Considerar modem/ISP como possível ponto de falha"
    ],
    "resultado": "Conectividade local ok; problema de roteamento/NAT/ISP além do gateway. Verificar rota padrão, NAT, modem/ISP.",
    "justificativa": "Resposta do gateway prova camada local; ausência de resposta externa aponta falha de encaminhamento além do primeiro salto, típica de configuração de rota, NAT ou serviço de acesso.",
    "errosFrequentes": [
     "Atribuir falha ao host remoto sem testar gateway",
     "Assumir que ping falho significa internet inoperante"
    ],
    "variacao": "Trocar destino externo por outro IP público e repetir ping, verificando se falha é específica ou geral de acesso."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'Se o ping falha, a rede está totalmente inoperante.' Avalie essa afirmação considerando firewall que bloqueia ICMP e serviço de aplicação funcionando.",
    "dados": "Ambiente corporativo com firewall bloqueando ICMP. Acesso HTTP ao servidor interno funciona normalmente, porém ping ao mesmo servidor retorna timeout.",
    "conceitos": [
     "Bloqueio de ICMP",
     "Camada de aplicação"
    ],
    "estrategia": "Contrastar teste de camada 3 com teste de serviço, evidenciar que ping mede ICMP, não disponibilidade da aplicação.",
    "execucao": [
     "Executar ping ao servidor e registrar timeout",
     "Acessar serviço via navegador e confirmar funcionamento",
     "Identificar política de firewall bloqueando ICMP",
     "Concluir que rede opera, apenas ICMP filtrado"
    ],
    "resultado": "Errado. Firewall pode bloquear ICMP enquanto HTTP/HTTPS funcionam. Ping é indicador, não prova absoluta.",
    "justificativa": "ICMP é protocolo independente; bloqueio por política de segurança impede echo reply, mas fluxos TCP para portas de serviço podem estar liberados, mantendo aplicação acessível.",
    "errosFrequentes": [
     "Equiparar ausência de resposta ICMP a falha total de rede",
     "Ignorar possibilidade de filtragem seletiva por protocolo"
    ],
    "variacao": "Substituir ping por teste de porta TCP 80 e observar sucesso mesmo com ping falho, reforçando distinção entre camada 3 e aplicação."
   }
  ]
 },
 "m2-u5-t1-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "traceroute mapeia saltos até destino usando TTL crescente, permitindo localizar onde latência aumenta ou pacotes desaparecem, habilidade essencial para diagnóstico de roteamento cobrado em concursos de redes.",
   "preRequisitos": [
    "ICMP time exceeded",
    "Conceito de TTL",
    "Noção de roteamento"
   ],
   "objetivosObservaveis": [
    "explicará como traceroute mapeia a rota e interpretará sua saída (saltos, *, latência)",
    "executará traceroute/tracert com sintaxe correta",
    "identificará ausência de resposta * e relacionará a bloqueio ou perda"
   ],
   "competencias": [
    "Diagnóstico de rota",
    "Interpretação de caminho lógico",
    "Criticar conclusões apressadas sobre falha"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u5-t1-s1 (ping: finalidade, sintaxe e interpretação)"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": " e pedem interpretação de saída de traceroute, identificando * como ausência de resposta e explicando mecanismo de TTL crescente para descoberta de saltos."
   }
  },
  "niveis": {
   "iniciante": "traceroute (Linux/macOS) / tracert (Windows) mapeia a rota (saltos) até o destino, enviando pacotes com TTL crescente e capturando ICMP 'time exceeded' de cada roteador. Sintaxe: traceroute <host> (Linux, UDP por padrão ou ICMP com -I), tracert <host> (Windows, ICMP). Saída: lista de saltos com IP/nome e RTT de cada um. '*' indica ausência de resposta (roteador não responde ICMP, perda ou firewall). Limitações: roteadores podem não responder; rotas assimétricas; NAT; load balancing causa saltos variáveis.",
   "intermediario": "Compreende que cada salto responde com time exceeded quando TTL expira, mede RTT por salto, diferencia * de latência alta e reconhece que três tentativas por salto reduzem ruído de perda temporária.",
   "avancado": "Interpreta rotas assimétricas, identifica saltos que não respondem ICMP por política, correlaciona variação de RTT entre tentativas com balanceamento e avalia impacto de NAT e tunelamento no mapeamento.",
   "especialista": "Projeta procedimentos de diagnóstico combinando traceroute com ping e teste de porta, explica limitações de mapeamento quando roteadores silenciam ICMP e propõe interpretação cautelosa em ambientes com políticas de segurança rígidas."
  },
  "comparacoes": [
   {
    "tema": "Traceroute versus ping",
    "a": {
     "rotulo": "Traceroute",
     "texto": "Varre TTL crescente para descobrir cada salto e medir latência por trecho, expondo caminho."
    },
    "b": {
     "rotulo": "Ping",
     "texto": "Mede RTT ponta a ponta sem expor intermediários, útil para teste rápido de conectividade."
    },
    "diferencaGabarito": "Traceroute detalha rota; ping resume conectividade total."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Afirmação: 'traceroute mostra a rota exata e simétrica de ida e volta.'",
    "porqueErrada": "O traceroute mostra caminho de ida baseado em TTL; roteamento de retorno pode usar caminhos diferentes e roteadores podem não responder ICMP.",
    "versaoCorreta": "Errado. Mostra a rota de ida (com base em TTL). A rota de volta pode ser diferente (roteamento assimétrico)."
   },
   {
    "afirmacaoEquivocada": "Afirmação: '* no traceroute significa roteador quebrado definitivamente.'",
    "porqueErrada": "* indica ausência de resposta ICMP, que pode ser política de segurança, perda temporária ou filtragem, não falha física comprovada.",
    "versaoCorreta": "* indica que o salto não respondeu ICMP nesse momento, exigindo confirmação com outros testes."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "TTL crescente",
    "ICMP time exceeded",
    "Salto"
   ],
   "regras": [
    "Cada salto decrementa TTL",
    "Roteador responde time exceeded quando TTL chega a zero"
   ],
   "comparacoes": [
    "Traceroute detalha caminho; ping testa extremidade"
   ],
   "fluxos": [
    "Enviar pacote com TTL=1 → receber time exceeded do primeiro salto → repetir com TTL+1"
   ],
   "excecoes": [
    "Roteadores silenciam ICMP",
    "Rotas assimétricas alteram caminho de volta"
   ],
   "palavrasChave": [
    "TTL",
    "salto",
    "time exceeded",
    "latência",
    "asterisco"
   ],
   "checklist": [
    "Verificar sintaxe do comando",
    "Analisar RTT por salto",
    "Interpretar * sem assumir falha",
    "Comparar com ping para validar"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Saída do traceroute mostra 3 saltos até o destino com RTTs 1ms, 5ms, 12ms. O que isso significa?",
    "dados": "Salto 1 192.168.1.1 1 ms, salto 2 10.0.0.1 5 ms, salto 3 8.8.8.8 12 ms. Sem asteriscos, três tentativas por salto consistentes.",
    "conceitos": [
     "TTL crescente",
     "RTT por salto"
    ],
    "estrategia": "Ler sequência de saltos, observar acúmulo de latência e ausência de perda para inferir rota curta.",
    "execucao": [
     "Identificar número de saltos",
     "Registrar RTT de cada salto",
     "Somar latência acumulada",
     "Concluir rota direta"
    ],
    "resultado": "O pacote passou por 3 roteadores; latência acumulada ~12 ms no destino. Rota curta, sem perda.",
    "justificativa": "RTT crescente por salto indica caminho estável; ausência de * indica respostas ICMP time exceeded em todos os intermediários, compatível com rota funcional.",
    "errosFrequentes": [
     "Confundir RTT do último salto com RTT total",
     "Assumir que número de saltos é constante"
    ],
    "variacao": "Mudar destino para servidor distante e observar aumento de saltos e RTT, mantendo interpretação de acúmulo."
   },
   {
    "tipo": "aplicacao",
    "problema": "traceroute mostra saltos 1-5 normais, depois '*' até o fim. Como interpretar ausência de resposta nos saltos seguintes e qual teste complementar usar?",
    "dados": "Saltos 1 a 5 respondem com RTTs 1-10 ms. A partir do salto 6, três tentativas retornam * * *. Destino é 1.1.1.1.",
    "conceitos": [
     "Ausência de resposta ICMP",
     "Filtro de segurança"
    ],
    "estrategia": "Distinguir saltos respondentes de silenciosos, considerar bloqueio de ICMP versus perda, complementar com ping.",
    "execucao": [
     "Confirmar respostas dos primeiros saltos",
     "Verificar padrão de * nos saltos seguintes",
     "Executar ping ao destino",
     "Avaliar necessidade de teste de porta"
    ],
    "resultado": "Roteadores intermediários não respondem ICMP (firewall) ou há perda; não prova falha de rota. Complementar com ping e teste de aplicação.",
    "justificativa": "Respostas iniciais provam conectividade até salto 5; * posteriores indicam silêncio ou perda, não necessariamente ruptura, pois ICMP pode ser filtrado.",
    "errosFrequentes": [
     "Interpretar * como rota quebrada",
     "Desconsiderar filtragem de ICMP por política"
    ],
    "variacao": "Trocar destino por outro IP na mesma rede e observar se padrão de * se repete, isolando problema específico."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'traceroute mostra a rota exata e simétrica de ida e volta.' Discuta por que o caminho de retorno pode diferir e como TTL mapeia apenas ida.",
    "dados": "Traceroute de A para B mostra saltos X-Y-Z. Traceroute de B para A mostra saltos W-K-Z, com diferentes IPs intermediários.",
    "conceitos": [
     "Roteamento assimétrico",
     "Caminho de ida"
    ],
    "estrategia": "Comparar traceroutes inversos, evidenciar que TTL mapeia apenas ida e políticas de roteamento podem divergir.",
    "execucao": [
     "Executar traceroute A→B",
     "Executar traceroute B→A",
     "Comparar listas de saltos",
     "Concluir assimetria"
    ],
    "resultado": "Errado. Mostra a rota de ida (com base em TTL). A rota de volta pode ser diferente (roteamento assimétrico).",
    "justificativa": "Roteadores escolhem próximo salto conforme tabelas dinâmicas e políticas; caminhos de ida e volta não são obrigatoriamente iguais, e traceroute só revela caminho de ida.",
    "errosFrequentes": [
     "Assumir simetria de rota",
     "Usar traceroute como prova de caminho de retorno"
    ],
    "variacao": "Repetir teste em horário de pico e observar mudanças de saltos por balanceamento de carga."
   }
  ]
 }
};