const enriParcialM2U3P1 = {
 "m2-u3-t1-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "Comparar IPv4 e IPv6 é tema central do conteúdo programático de redes, que aborda tamanho do endereço, notação, cabeçalho e mecanismos de transição. Confundir os dois protocolos leva a erro em itens que atribuem ao IPv6 recursos exclusivos do IPv4, como o ARP.",
   "preRequisitos": ["Camada de rede do modelo OSI e do TCP/IP", "Noção de endereço lógico e de cabeçalho de pacote"],
   "objetivosObservaveis": ["Comparar IPv4 e IPv6 quanto ao tamanho do endereço e ao formato de notação", "Explicar o esgotamento do espaço de endereçamento IPv4", "Citar recursos do IPv6: NDP, SLAAC, cabeçalho simplificado e IPsec nativo", "Descrever pilha dupla, túnel e tradução como estratégias de migração"],
   "competencias": ["Comparação de protocolos por características técnicas objetivas", "Análise de transição tecnológica e de convivência entre versões"],
   "dificuldade": "intermediario",
   "relacoes": ["m2-u4-t1-s1 (Estrutura de um endereço IPv4) — detalha os campos do endereço comparado aqui", "m2-u3-t3-s3 (ARP e Neighbor Discovery) — a substituição do ARP pelo NDP no IPv6", "m2-u4-t4-s1 (Representação e abreviação de endereços IPv6) — aprofunda a notação hexadecimal"],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Classificação qualitativa alta (estimativa pedagógica): a transição IPv4-IPv6 integra editais de redes em itens sobre notação, cabeçalho e migração; sem frequência estatística comprovada."
   }
  },
  "niveis": {
   "iniciante": "IPv4: endereços de 32 bits em notação decimal pontuada, como 192.168.1.10, cerca de 4,3 bilhões de endereços, espaço já esgotado. IPv6: endereços de 128 bits em notação hexadecimal com dois-pontos, como 2001:db8::1, espaço praticamente inesgotável, cabeçalho de 40 bytes, sem checksum e com autoconfiguração.",
   "intermediario": "O aluno associa recursos a cada versão: no IPv4, cabeçalho de 20 bytes no mínimo, com TTL, checksum e fragmentação também nos roteadores; no IPv6, cabeçalho fixo de 40 bytes, sem checksum, fragmentação apenas na origem e extensões opcionais. Também nota que o IPv6 troca o ARP pelo NDP, oferece SLAAC e inclui IPsec nativo, de uso opcional.",
   "avancado": "No nível avançado o aluno escolhe a estratégia de migração por cenário: pilha dupla para operar os dois protocolos em paralelo; túnel para transportar IPv6 sobre infraestrutura IPv4; tradução NAT64/DNS64 quando só existe IPv4. Avalia ainda o custo de cada opção em rotas, firewall e suporte a aplicações legadas.",
   "especialista": "No nível especialista o aluno analisa impactos: a tradução quebra o princípio fim a fim e pode impedir funções que dependem de endereços visíveis nas pontas, enquanto a pilha dupla exige o dobro de rotas e de monitoramento. Justifica a escolha pela topologia, pelo plano de endereçamento e pela exigência de SLAAC."
  },
  "comparacoes": [
   {
    "tema": "IPv4 x IPv6",
    "a": { "rotulo": "IPv4", "texto": "Endereços de 32 bits em notação decimal pontuada, como 192.168.1.10; cabeçalho de 20 bytes no mínimo, com checksum e fragmentação nos roteadores." },
    "b": { "rotulo": "IPv6", "texto": "Endereços de 128 bits em notação hexadecimal, como 2001:db8::1; cabeçalho fixo de 40 bytes, sem checksum e sem fragmentação intermediária." },
    "diferencaGabarito": "A diferença decisiva é o tamanho do endereço e a estrutura do cabeçalho: 32 bits com campos variáveis no IPv4 contra 128 bits e cabeçalho fixo no IPv6."
   },
   {
    "tema": "ARP x Neighbor Discovery (NDP)",
    "a": { "rotulo": "ARP (IPv4)", "texto": "Descobre o endereço MAC correspondente a um endereço IPv4 por difusão no mesmo segmento, sem oferecer autoconfiguração." },
    "b": { "rotulo": "NDP (IPv6)", "texto": "Executa a descoberta de vizinhança sobre ICMPv6 e acrescenta SLAAC e detecção de endereço duplicado." },
    "diferencaGabarito": "No IPv6 o NDP substitui o ARP e acrescenta funções de autoconfiguração; afirmar que o IPv6 continua usando ARP está incorreto."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "IPv6 é o IPv4 com mais bits, sem outras mudanças relevantes.",
    "porqueErrada": "Ignora que o cabeçalho fica fixo em 40 bytes e sem checksum, a fragmentação deixa de ocorrer nos roteadores, o ARP dá lugar ao NDP e há SLAAC.",
    "versaoCorreta": "O IPv6 altera endereço, cabeçalho, descoberta de vizinhos e autoconfiguração; não é apenas o IPv4 com mais bits."
   },
   {
    "afirmacaoEquivocada": "IPv6 usa ARP para resolver endereços na rede local.",
    "porqueErrada": "O ARP pertence ao IPv4; no IPv6 a descoberta de vizinhança é executada pelo Neighbor Discovery sobre mensagens ICMPv6.",
    "versaoCorreta": "No IPv6 o ARP é substituído pelo NDP sobre ICMPv6, que também oferece SLAAC e detecção de endereço duplicado."
   },
   {
    "afirmacaoEquivocada": "Afirmação: 'IPv6 elimina a necessidade de NAT porque cada dispositivo terá IP público.'",
    "porqueErrada": "A abundância de endereços retira do NAT sua justificativa principal, mas a tradução pode persistir por política interna ou por convivência com o IPv4.",
    "versaoCorreta": "Parcialmente incorreta: a disponibilidade de endereços globais permite o fim a fim, porém a tradução pode persistir por política (ULA) ou por transição (NAT64)."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["IPv4 (endereços de 32 bits)", "IPv6 (endereços de 128 bits)", "Pilha dupla, túnel e tradução (NAT64/DNS64)", "NDP e SLAAC"],
   "regras": ["IPv4: 2^32 endereços, cerca de 4,3 bilhões, em notação decimal pontuada", "IPv6: 2^128 endereços, em notação hexadecimal e cabeçalho fixo de 40 bytes", "O IPsec é nativo no IPv6, mas seu uso permanece opcional"],
   "comparacoes": ["O IPv4 tem cabeçalho com checksum e fragmentação intermediária; o IPv6 tem cabeçalho fixo, sem checksum e sem fragmentação nos roteadores"],
   "fluxos": ["Migração: pilha dupla para operar os dois protocolos, túnel para transportar IPv6 sobre IPv4 e tradução NAT64/DNS64 quando só há IPv4"],
   "excecoes": ["O IPsec nativo do IPv6 não é de uso obrigatório, e NAT também pode existir no IPv6 por política (ULA) ou por transição"],
   "palavrasChave": ["esgotamento", "128 bits", "NDP", "SLAAC", "pilha dupla", "coexistência"],
   "checklist": ["Comparo IPv4 e IPv6 em bits e notação?", "Explico por que o espaço IPv4 se esgotou?", "Cito cabeçalho, NDP, SLAAC e IPsec do IPv6?", "Descrevo pilha dupla, túnel e tradução?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Em uma comparação entre protocolos, quantos endereços IPv4 e IPv6 existem aproximadamente?",
    "dados": "Cálculo do espaço de endereçamento: IPv4 com 32 bits e IPv6 com 128 bits por endereço; referência de 4,3 bilhões para o IPv4.",
    "conceitos": ["Tamanho do endereço em bits", "Espaço de endereçamento e esgotamento"],
    "estrategia": "Extraia os bits do endereço de cada versão, aplique a potência de base 2 e compare as ordens de grandeza para justificar a transição.",
    "execucao": ["1) Identificar o tamanho do endereço IPv4: 32 bits.", "2) Calcular 2^32, aproximadamente 4,3 bilhões de endereços.", "3) Calcular 2^128 para o IPv6, cerca de 3,4 x 10^38 endereços.", "4) Comparar as escalas e concluir pela migração."],
    "resultado": "IPv4: 2^32 ≈ 4,3 bilhões. IPv6: 2^128 ≈ 3,4×10^38. A diferença de escala é a motivação central da transição.",
    "justificativa": "O espaço de endereçamento é 2 elevado ao número de bits. Como 32 bits geram apenas 4,3 bilhões de endereços e a demanda os superou, o esgotamento motivou o IPv6, cujos 128 bits ampliam o espaço de forma inesgotável.",
    "errosFrequentes": ["Confundir 2^32 com 2^64 e superestimar o espaço do IPv4.", "Ignorar que endereços reservados e privados reduzem o espaço utilizável do IPv4."],
    "variacao": "Se o enunciado pedir a diferença em ordem de grandeza, o aluno deve responder que o IPv6 oferece 2^96 vezes mais endereços que o IPv4."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um roteador de borda precisa suportar IPv4 e IPv6 simultaneamente. Qual estratégia de migração adotar?",
    "dados": "Cenário: roteador de borda; conexões IPv4 ativas e início da adoção de IPv6; parte dos enlaces internos ainda opera somente em IPv4.",
    "conceitos": ["Pilha dupla (dual stack)", "Túneis IPv6 sobre IPv4", "Tradução NAT64 e DNS64"],
    "estrategia": "Compare as três estratégias de migração e escolha a que opera os dois protocolos em paralelo, descartando túnel e tradução.",
    "execucao": ["1) Listar as estratégias: pilha dupla, túnel e tradução.", "2) Verificar que a pilha dupla mantém os dois protocolos em paralelo, com rotas e interfaces separadas.", "3) Descartar o túnel, indicado quando a rede interna é IPv6 e o caminho é IPv4.", "4) Descartar NAT64/DNS64, reservado a cenários só IPv4.", "5) Concluir pela pilha dupla como estratégia preferida."],
    "resultado": "Pilha dupla (dual stack): o roteador processa os dois protocolos em paralelo, com tabelas de rotas e interfaces separadas; é a estratégia preferida quando possível.",
    "justificativa": "A pilha dupla configura os dois protocolos no mesmo equipamento, preservando a comunicação fim a fim e evitando conversões de endereço; por isso é a opção preferida quando há suporte nas duas pontas.",
    "errosFrequentes": ["Indicar NAT64/DNS64 por associar migração a tradução automática de endereços.", "Confundir túnel com pilha dupla: o túnel encapsula um protocolo no outro."],
    "variacao": "Se a rede interna passasse a ser exclusivamente IPv6 e o acesso à Internet seguisse em IPv4, a resposta correta passaria a ser um túnel, como o 6in4."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'IPv6 elimina a necessidade de NAT porque cada dispositivo terá IP público.' — avaliar se procede.",
    "dados": "Afirmação a avaliar. Contexto: organização com IPv6 e faixas ULA internas; parte dos serviços acessados ainda opera somente em IPv4.",
    "conceitos": ["Endereçamento fim a fim no IPv6", "NAT66 e faixas ULA", "Tradução no período de transição"],
    "estrategia": "Separe a parte correta da generalização indevida: o IPv6 acaba com a escassez de endereços, mas a tradução pode persistir por política ou por transição.",
    "execucao": ["1) Isolar a afirmação: o IPv6 eliminaria por completo a necessidade de NAT.", "2) Verificar que os 128 bits permitem fim a fim, retirando do NAT a justificativa por escassez.", "3) Reconhecer que a tradução pode persistir por política (ULA) ou transição (NAT64).", "4) Concluir que a afirmação é parcialmente incorreta."],
    "resultado": "Parcialmente incorreta. O IPv6 acaba com a escassez que motiva o NAT, mas a tradução pode persistir por política (ULA) ou por transição; a eliminação não é automática.",
    "justificativa": "A afirmação confunde disponibilidade de endereços com obrigatoriedade de tradução: o IPv6 torna o NAT desnecessário por escassez, mas ele pode persistir por decisão administrativa ou para converter tráfego IPv4.",
    "errosFrequentes": ["Marcá-la como certa por associar IPv6 a endereço público único por dispositivo.", "Marcá-la como inteiramente errada, ignorando que a abundância de endereços retira a justificativa do NAT."],
    "variacao": "Trocar a afirmação: 'No IPv6, cada dispositivo pode receber endereço global sem NAT' — nesse caso a afirmação é correta e exige explicar o fim a fim."
   }
  ]
 }
,
 "m2-u3-t1-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "O TCP sustenta HTTP, e-mail e transferências de arquivo, e a prova cobra handshake, sequência, ACK, retransmissão e a distinção entre controle de fluxo e de congestionamento. Confundir rwnd com cwnd inverte o gabarito de itens recorrentes.",
   "preRequisitos": ["Camada de transporte do modelo OSI e do TCP/IP", "Conceito de segmento, porta e conexão"],
   "objetivosObservaveis": ["Descrever o three-way handshake SYN, SYN-ACK e ACK", "Explicar números de sequência, ACK e retransmissão por estouro do RTO", "Diferenciar controle de fluxo (rwnd) de controle de congestionamento (cwnd)", "Descrever o encerramento da conexão por FIN/ACK ou por RST"],
   "competencias": ["Análise de protocolo e leitura de diagramas de conexão", "Diagnóstico de lentidão em transferências de dados"],
   "dificuldade": "intermediario",
   "relacoes": ["m2-u3-t1-s3 (UDP: datagramas sem conexão) — contraponto sem conexão e sem confiabilidade", "m2-u3-t2-s1 (HTTP e HTTPS: finalidade, fluxo e portas) — aplicação que depende do TCP", "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — protocolo que opera sobre o TCP"],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Classificação qualitativa alta (estimativa pedagógica): os mecanismos do TCP integram editais de redes em itens sobre handshake, retransmissão e janelas; sem frequência estatística comprovada."
   }
  },
  "niveis": {
   "iniciante": "O TCP (Transmission Control Protocol) é orientado à conexão e confiável. A abertura usa three-way handshake: o cliente envia SYN, o servidor responde SYN-ACK e o cliente confirma com ACK. Cada byte tem número de sequência e o receptor confirma o próximo esperado; sem confirmação no RTO, o segmento é reenviado. O encerramento ocorre por FIN/ACK ou por RST.",
   "intermediario": "O aluno detalha os mecanismos: a sequência numera cada byte e o ACK confirma o próximo esperado; a retransmissão ocorre quando o RTO expira; o controle de fluxo usa a janela rwnd anunciada pelo receptor; o controle de congestionamento ajusta a cwnd do emissor com slow start e congestion avoidance. HTTP, SMTP, FTP e SSH utilizam o TCP.",
   "avancado": "No nível avançado o aluno separa as duas janelas: rwnd protege o receptor e é anunciada por ele; cwnd protege a rede e é calculada pelo emissor conforme o estado do enlace. Também explica o custo da confiabilidade — cabeçalho maior, latência do handshake e atraso das retransmissões — e por que voz e vídeo ao vivo preferem o UDP.",
   "especialista": "No nível especialista o aluno interpreta falhas: perda de segmento provoca retransmissão e redução da cwnd, derrubando a vazão mesmo sem congestionamento real; atrasos variáveis alteram o RTO e o tempo de resposta percebido. Usa essa leitura para diagnosticar transferências lentas e escolher o transporte adequado."
  },
  "comparacoes": [
   {
    "tema": "Controle de fluxo x controle de congestionamento",
    "a": { "rotulo": "Controle de fluxo", "texto": "Protege o receptor: ele anuncia a janela rwnd, limitando quantos bytes pode receber sem sobrecarregar seus buffers." },
    "b": { "rotulo": "Controle de congestionamento", "texto": "Protege a rede: o emissor ajusta a janela cwnd conforme o estado do enlace, reduzindo a velocidade em situações de congestionamento." },
    "diferencaGabarito": "O fluxo é limitado pelo receptor e o congestionamento pelo emissor, com base no estado da rede; trocar os dois inverte o gabarito de itens sobre quem define a janela."
   },
   {
    "tema": "Abertura x encerramento da conexão",
    "a": { "rotulo": "Abertura (handshake)", "texto": "O cliente envia SYN, o servidor responde SYN-ACK e o cliente confirma com ACK, sincronizando as sequências iniciais dos dois lados." },
    "b": { "rotulo": "Encerramento", "texto": "Cada lado envia FIN para indicar o fim de seu envio e recebe o ACK do outro; o RST encerra a conexão de forma abrupta." },
    "diferencaGabarito": "A abertura usa três mensagens (SYN, SYN-ACK e ACK) e o encerramento usa FIN com ACK; o RST não participa do handshake de abertura."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Controle de fluxo e controle de congestionamento são o mesmo mecanismo com nomes diferentes.",
    "porqueErrada": "Cada um protege um agente distinto: o fluxo é limitado pelo receptor para não sobrecarregar seus buffers; o congestionamento é ajustado pelo emissor segundo a rede.",
    "versaoCorreta": "São mecanismos distintos: o controle de fluxo protege o receptor pela janela rwnd, e o controle de congestionamento protege a rede pela cwnd do emissor."
   },
   {
    "afirmacaoEquivocada": "O TCP garante que os dados cheguem dentro de um prazo determinado.",
    "porqueErrada": "O protocolo assegura entrega ordenada e sem duplicação, mas não estabelece prazo: retransmissões e congestionamento tornam o atraso variável.",
    "versaoCorreta": "O TCP garante entrega confiável e ordenada, sem garantia de prazo; aplicações com restrição de atraso usam UDP, aceitando perdas."
   },
   {
    "afirmacaoEquivocada": "Afirmação: 'TCP garante entrega em tempo real sem perda.'",
    "porqueErrada": "Mistura confiabilidade com tempo real: o TCP recupera perdas por retransmissão, o que introduz latência variável e o torna inadequado a atrasos rígidos.",
    "versaoCorreta": "Errado. O TCP entrega os dados de forma confiável e ordenada, mas não em tempo real; VoIP e streaming ao vivo usam UDP, que tolera perdas."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["TCP orientado à conexão e confiável", "Three-way handshake (SYN, SYN-ACK, ACK)", "Números de sequência e ACK", "Janelas rwnd e cwnd", "Retransmissão por estouro do RTO"],
   "regras": ["Abertura: SYN, SYN-ACK e ACK; encerramento: FIN com ACK, ou RST", "O receptor confirma o próximo byte esperado e o emissor reenvia segmentos não confirmados", "A rwnd é anunciada pelo receptor; a cwnd é ajustada pelo emissor"],
   "comparacoes": ["O controle de fluxo protege o receptor, enquanto o controle de congestionamento protege a rede"],
   "fluxos": ["Abertura da conexão, troca de dados com ACKs e retransmissões, e encerramento por FIN/ACK ou RST"],
   "excecoes": ["Aplicações sensíveis a atraso, como VoIP e streaming ao vivo, preferem UDP apesar da perda de confiabilidade"],
   "palavrasChave": ["conexão", "confiabilidade", "sequência", "ACK", "janela", "congestionamento"],
   "checklist": ["Descrevo o handshake com as três mensagens?", "Explico o que o ACK confirma?", "Diferencio rwnd de cwnd e digo quem define cada uma?", "Descrevo o encerramento por FIN/ACK e a função do RST?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Descrever o three-way handshake TCP entre cliente e servidor, indicando as mensagens trocadas e o que cada uma sincroniza.",
    "dados": "Cenário: cliente em 10.0.0.5 abre conexão com o servidor na porta 80. ISN definidos por cada lado; flags SYN e ACK do cabeçalho TCP.",
    "conceitos": ["Three-way handshake", "ISN (Initial Sequence Number)", "Flags SYN e ACK"],
    "estrategia": "Ordene as três mensagens da abertura e identifique o que cada uma sincroniza: o ISN do cliente, o do servidor e a confirmação de ambos.",
    "execucao": ["1) O cliente envia SYN com seu ISN para solicitar a conexão.", "2) O servidor responde SYN-ACK com seu ISN e o ACK do ISN+1 do cliente.", "3) O cliente envia ACK confirmando o ISN do servidor somado de um.", "4) A conexão fica estabelecida e sincronizada."],
    "resultado": "Cliente envia SYN com ISN; servidor responde SYN-ACK com seu ISN e o ACK do ISN+1 do cliente; cliente envia ACK do ISN+1 do servidor. Conexão estabelecida.",
    "justificativa": "O handshake faz os dois lados conhecerem os números de sequência iniciais um do outro antes da troca de dados; sem essa sincronização, os ACKs não poderiam indicar quais bytes já foram recebidos.",
    "errosFrequentes": ["Citar apenas SYN e ACK, esquecendo o SYN-ACK do servidor.", "Afirmar que o handshake carrega dados de aplicação, quando apenas sincroniza sequências."],
    "variacao": "Se a pergunta tratar de reconexão após queda, o aluno deve descrever um novo SYN com ISN diferente mantendo o padrão de três mensagens."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um download TCP está lento em uma rede congestionada. Quais mecanismos do TCP reagem?",
    "dados": "Cenário: transferência HTTP por TCP em enlace com perdas; queda de vazão; janela cwnd em slow start.",
    "conceitos": ["Controle de congestionamento", "Janela cwnd", "Slow start e congestion avoidance"],
    "estrategia": "Identifique o sintoma — perda e lentidão — e relacione-o aos mecanismos do emissor: redução da cwnd, com slow start ou congestion avoidance.",
    "execucao": ["1) Relacionar a lentidão a perdas de segmento no enlace congestionado.", "2) Verificar que o emissor reduz a cwnd ao detectar perda.", "3) Reconhecer a retomada por slow start ou congestion avoidance.", "4) Concluir que a vazão cai até a rede se restabelecer."],
    "resultado": "Controle de congestionamento: reduz cwnd, entra em slow start ou congestion avoidance e pode usar fast recovery; a vazão cai até a rede se recuperar.",
    "justificativa": "O TCP interpreta a perda de segmentos como sinal de congestionamento e reduz a janela para aliviar a rede; com menos dados em trânsito, a vazão percebida cai até o enlace se restabelecer.",
    "errosFrequentes": ["Atribuir a reação ao controle de fluxo, que depende do receptor e não das perdas na rede.", "Esperar que o TCP acelere para compensar a perda, quando ele reduz a cwnd."],
    "variacao": "Se o enlace estiver ocioso e o receptor for lento, a limitação passa a ser a janela rwnd anunciada pelo receptor, e não o congestionamento."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'TCP garante entrega em tempo real sem perda.' — avaliar se a afirmação procede e corrigi-la.",
    "dados": "Afirmação a avaliar. Contexto: voz sobre IP com restrição de atraso; rede com perdas pontuais e retransmissões TCP ativas.",
    "conceitos": ["Confiabilidade do TCP", "Retransmissão e RTO", "UDP em aplicações de tempo real"],
    "estrategia": "Separe as propriedades citadas: o TCP entrega sem perda, mas a recuperação por retransmissão torna o atraso variável, incompatível com tempo real.",
    "execucao": ["1) Isolar a afirmação: entrega em tempo real e sem perda.", "2) Confirmar que o TCP recupera perdas, logo entrega sem perda.", "3) Verificar que a recuperação depende do RTO, o que impede prazo garantido.", "4) Concluir que a afirmação é errada e corrigi-la."],
    "resultado": "Errado. O TCP garante entrega confiável e ordenada, mas não em tempo real: retransmissões e congestionamento tornam a latência variável; tempo real usa UDP (VoIP, streaming).",
    "justificativa": "A afirmação confunde ausência de perda com determinismo de tempo: o TCP não perde dados, mas o preço é a espera por confirmações e retransmissões, que gera atraso variável; daí a preferência por UDP.",
    "errosFrequentes": ["Aceitar a afirmação por saber que o TCP não perde dados.", "Concluir que o UDP também garante a entrega, quando ele apenas não retransmite."],
    "variacao": "Trocar a afirmação: 'O TCP entrega os dados sem perda, mas sem garantia de prazo' — nesse caso a afirmação é correta e exige explicar o custo da confiabilidade."
   }
  ]
 }
};
