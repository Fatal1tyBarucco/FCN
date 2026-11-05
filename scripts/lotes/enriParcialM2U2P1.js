const enriParcialM2U2P1 = {
 "m2-u2-t1-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "O modelo OSI é a referência para localizar funções e diagnosticar falhas em rede. Concursos de TI cobram ordem das camadas, função de cada uma e respectiva PDU; confundir camadas 2, 3 e 4 gera perda de pontos em múltipla escolha e certos ou errados.",
   "preRequisitos": ["Vocabulário básico de redes: nó, enlace e endereço", "Diferença entre endereçamento físico e lógico"],
   "objetivosObservaveis": ["Enumerar as sete camadas do modelo OSI em ordem", "Associar a função principal a cada camada", "Indicar o tipo de PDU de cada camada", "Explicar o princípio da divisão em camadas"],
   "competencias": ["Organização mental do funcionamento de rede", "Localização de funções por camada"],
   "dificuldade": "intermediario",
   "relacoes": ["m2-u2-t1-s2 (Encapsulamento e desencapsulamento) — sequência lógica da unidade"],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Classificação qualitativa alta (estimativa pedagógica): o modelo OSI é central nos conteúdos programáticos de redes de concursos, que avaliam ordem, função e PDU de cada camada; não representa frequência estatística comprovada em provas recentes."
   }
  },
  "niveis": {
   "iniciante": "O modelo OSI (Open Systems Interconnection), padronizado pela ISO, divide a comunicação em rede em sete camadas, da mais baixa (física) à mais alta (aplicação). Camada 1 - Física: transmissão de bits pelo meio (cabos, fibra, rádio), tensões, taxas, topologia física. PDU: bit. Camada 2 - Enlace de dados: entrega nó-a-nó no mesmo segmento, endereçamento físico (MAC), detecção de erros, controle de acesso ao meio (CSMA/CD, CSMA/CA). PDU: quadro (frame). Camada 3 - Rede: entrega fim-a-fim entre redes…",
   "intermediario": "Associe cada camada à sua função e PDU: Física transmite bits pelo meio; Enlace entrega nó-a-nó no mesmo segmento com endereço MAC (quadro); Rede roteia entre redes com IP (pacote); Transporte entrega processo-a-processo com TCP ou UDP (segmento/datagrama); Sessão estabelece, mantém e encerra diálogos entre aplicações; Apresentação trata formato, tradução, compressão e criptografia; Aplicação é a interface com o usuário e serviços de rede (HTTP, SMTP, DNS, FTP). Nas camadas 5 a 7 a PDU costuma ser chamada de dados.",
   "avancado": "Situar protocolos no modelo: ICMP opera na camada 3 (Rede) para diagnósticos de rede; TLS funciona entre transporte e aplicação (camada 6-ish, apresentação/sessão), criptografando antes dos dados seguirem para o transporte; HTTP, DNS, SMTP e FTP são protocolos de aplicação (camada 7). Cada camada isola responsabilidades, de modo que uma falha em uma camada não impede o funcionamento das outras camadas não afetadas.",
   "especialista": "Localizar, a partir de um sintoma, a camada mais provável de falha: se não há luz nos cabos nem detecção de portadora, suspeite da camada 1 (Física); se há link físico mas não há comunicação MAC a MAC, suspeite da camada 2 (Enlace); se o ping ao IP de destino falha mas o ARP local funciona, suspeite da camada 3 (Rede); se o IP responde mas uma porta específica não atende, suspeite da camada 4 (Transporte)."
  },
  "comparacoes": [
   {
    "tema": "Enlace de dados x camada de rede",
    "a": { "rotulo": "Camada 2 — Enlace", "texto": "Entrega nó a nó dentro do mesmo segmento, usa endereçamento físico (MAC), PDU quadro." },
    "b": { "rotulo": "Camada 3 — Rede", "texto": "Entrega fim a fim entre redes distintas, usa endereçamento lógico (IP), PDU pacote." },
    "diferencaGabarito": "O enlace não roteia entre redes; a rede não faz detecção de erros de quadro no segmento local. Mudança de endereço usado: MAC vs IP."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "O modelo OSI é o protocolo usado pela Internet.",
    "porqueErrada": "O OSI é um modelo de referência conceitual padronizado pela ISO, não um conjunto de protocolos implementado na Internet.",
    "versaoCorreta": "A Internet opera a pilha TCP/IP, com IP, TCP, UDP e HTTP; o OSI é uma referência conceitual usada para descrever e comparar funções entre camadas."
   },
   {
    "afirmacaoEquivocada": "A camada de transporte endereça hosts.",
    "porqueErrada": "Confunde transporte com rede: o transporte endereça processos por portas, não hosts.",
    "versaoCorreta": "O endereçamento de host é função da camada de rede (endereço IP). A camada de transporte (TCP/UDP) entrega processo-a-processo usando portas."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["OSI (Open Systems Interconnection)", "sete camadas", "PDU (Protocol Data Unit)", "bit, quadro, pacote, segmento"],
   "regras": ["Ordem das camadas: 1 Física → 7 Aplicação", "Cada camada tem uma PDU específica"],
   "comparacoes": ["Enlace entrega no mesmo segmento (MAC); rede entrega entre redes (IP)"],
   "fluxos": ["Dados descem da aplicação (7) à física (1) no envio e sobem na recepção"],
   "excecoes": ["Sessão e apresentação raramente existem como camadas separadas na prática"],
   "palavrasChave": ["camada", "função", "PDU", "ISO", "encapsulamento"],
   "checklist": ["Enumero as sete camadas em ordem?", "Associo a função a cada camada?", "Indico a PDU de cada camada?", "Explico por que dividir em camadas?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Em qual camada do modelo OSI atua um roteador ao decidir para onde enviar um pacote IP?",
    "dados": "Dispositivo: roteador. Dado examinado: endereço IP de destino do pacote. Mecanismo: consulta da tabela de rotas.",
    "conceitos": ["Camada 3 — Rede", "PDU pacote", "Endereçamento lógico (IP)"],
    "estrategia": "Identifique o endereço examinado pelo equipamento. Roteador usa IP de destino, logo atua na camada de rede. Switch de camada 2 usaria MAC, não IP.",
    "execucao": ["1 O roteador recebe o quadro Ethernet.", "2 Desencapsula até obter o pacote IP.", "3 Examina o endereço IP de destino.", "4 Consulta a tabela de rotas e escolhe a próxima interface.", "5 Reencapsula e encaminha."],
    "resultado": "Camada 3 (Rede) — o roteador examina o endereço IP de destino e consulta sua tabela de rotas para encaminhar o pacote para a próxima interface.",
    "justificativa": "O roteamento entre redes distintas e o uso do endereço IP são funções exclusivas da camada 3 (Rede), cuja PDU é o pacote, conforme definido no modelo OSI.",
    "errosFrequentes": ["Confundir roteador com switch e responder camada 2 (Enlace) por causa do quadro Ethernet de entrada.", "Responder camada 4 (Transporte) por associar pacote a transporte, que na verdade usa segmento."],
    "variacao": "Se o equipamento fosse um switch de camada 2 comutando dentro de uma VLAN, ele usaria o endereço MAC e a PDU seria o quadro, não o pacote IP."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um switch de camada 2 (convencional) comuta tráfego dentro de uma VLAN. Em qual camada ele opera e qual PDU manipula?",
    "dados": "Equipamento: switch de camada 2. Contexto: dentro de uma VLAN (mesmo segmento). PDU candidata: quadro Ethernet.",
    "conceitos": ["Camada 2 — Enlace de dados", "Endereço MAC", "PDU quadro"],
    "estrategia": "O switch opera dentro de um único segmento (VLAN) e decide com base no endereço MAC de destino, sem examinar o IP. Portanto é camada de enlace e manipula quadros.",
    "execucao": ["1 O switch recebe um quadro Ethernet.", "2 Lê o endereço MAC de destino no cabeçalho do quadro.", "3 Consulta a tabela de endereços MAC (CAM table).", "4 Encaminha o quadro apenas pela porta associada a esse MAC.", "5 Não examina nem altera o pacote IP encapsulado."],
    "resultado": "Camada 2 (Enlace) — manipula quadros Ethernet e toma decisão com base no endereço MAC de destino. Não examina o IP.",
    "justificativa": "A comutação dentro de um mesmo segmento usando endereço MAC é a função definidora da camada de enlace (camada 2), cuja PDU é o quadro.",
    "errosFrequentes": ["Dizer que o switch usa IP porque a rede é IP, confundindo enlace com rede.", "Afirmar que o switch altera o cabeçalho IP, o que só ocorre no roteador (camada 3)."],
    "variacao": "Se o tráfego tivesse de cruzar VLANs distintas, seria necessário um roteador ou switch de camada 3, passando a usar IP e PDU pacote."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: \"O modelo OSI é o protocolo usado pela Internet.\" — decidir se procede, identificando o modelo efetivo.",
    "dados": "Enunciado da afirmação. Contexto: Internet e seus protocolos (IP, TCP, UDP, HTTP).",
    "conceitos": ["Modelo de referência conceitual", "Modelo TCP/IP", "Protocolo vs modelo"],
    "estrategia": "Distinguir modelo de referência (OSI) de conjunto de protocolos implementado (TCP/IP). A Internet não implementa o OSI como um todo; usa TCP/IP com quatro camadas.",
    "execucao": ["1 Identifique a afirmação: \"OSI é o protocolo da Internet\".", "2 Reconheça que OSI é um modelo conceitual da ISO, não um protocolo.", "3 Lembre que a Internet usa o modelo TCP/IP (quatro camadas).", "4 Conclua que a afirmação confunde modelo com implementação."],
    "resultado": "Errado. O modelo OSI é um modelo de referência conceitual. O modelo OSI é conceitual: quem trafega na Internet é a pilha TCP/IP, com IP, TCP, UDP e HTTP. O OSI continua útil para descrever e comparar funções entre camadas.",
    "justificativa": "A afirmação confunde um modelo de referência com um conjunto de protocolos; a Internet é baseada em TCP/IP, não em OSI, que tem papel descritivo e didático.",
    "errosFrequentes": ["Acreditar que OSI e TCP/IP são sinônimos e intercambiáveis.", "Pensar que a Internet implementa todas as sete camadas do OSI."],
    "variacao": "Se a afirmação fosse \"O modelo TCP/IP tem quatro camadas\", ela estaria correta, pois TCP/IP é o modelo efetivo da Internet."
   }
  ]
 },
 "m2-u2-t1-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "O encapsulamento explica como dados atravessam camadas e onde residem endereços e portas; a prova cobra a ordem e o conteúdo de cada cabeçalho, sendo tema de presença permanente no conteúdo programático de redes.",
   "preRequisitos": ["As sete camadas do modelo OSI", "Diferença entre cabeçalho e payload"],
   "objetivosObservaveis": ["Definir encapsulamento", "Ordenar a adição de cabeçalhos", "Descrever o desencapsulamento", "Localizar portas, IP e MAC"],
   "competencias": ["Leitura de diagramas de pacote", "Compreensão do fluxo de dados"],
   "dificuldade": "intermediario",
   "relacoes": ["m2-u2-t1-s1 (As sete camadas do modelo OSI e suas funções) — base da unidade"],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Classificação qualitativa alta (estimativa pedagógica): encapsulamento/desencapsulamento é central nos conteúdos programáticos de redes, que avaliam a ordem e o conteúdo de cada cabeçalho; não representa frequência estatística comprovada em provas recentes."
   }
  },
  "niveis": {
   "iniciante": "Encapsulamento é o processo pelo qual, ao enviar dados, cada camada adiciona seu próprio cabeçalho (e às vezes trailer) à unidade de dados recebida da camada superior, criando a PDU da camada. Ordem de envio (de cima para baixo): a aplicação gera os dados; a camada de apresentação/sessão os passa; a camada de transporte adiciona cabeçalho com portas e número de sequência (segmento); a camada de rede adiciona cabeçalho com endereços IP (pacote); a camada de enlace adiciona cabeçalho e trailer com…",
   "intermediario": "Ordem de envio (descendente): aplicação gera os dados; transporte acrescenta portas e número de sequência formando o segmento; rede acrescenta endereços IP formando o pacote; enlace acrescenta endereços MAC e trailer FCS formando o quadro; física converte em bits no meio. Desencapsulamento é o inverso na recepção: cada camada remove e interpreta seu próprio cabeçalho, entregando o payload à camada superior até a aplicação.",
   "avancado": "Localizar campos em uma PDU: as portas (processo) estão no cabeçalho de transporte; os IPs (host) estão no cabeçalho de rede; os MACs (interface no enlace) estão no cabeçalho de enlace. O encapsulamento preserva o payload da camada superior: cada camada apenas adiciona seu cabeçalho sem reescrever os dados anteriores, o que garante interoperabilidade.",
   "especialista": "Analisar uma captura e identificar as camadas de cada campo: o cabeçalho externo é de enlace (MAC + FCS), seguido do cabeçalho de rede (IPs), depois do cabeçalho de transporte (portas) e, por fim, os dados da aplicação. Exceções: alguns protocolos, como TLS, se posicionam entre camadas (entre transporte e aplicação)."
  },
  "comparacoes": [
   {
    "tema": "Encapsulamento x desencapsulamento",
    "a": { "rotulo": "Encapsulamento (envio)", "texto": "Cada camada acrescenta seu próprio cabeçalho (e, às vezes, trailer) à PDU recebida da camada superior, de cima para baixo." },
    "b": { "rotulo": "Desencapsulamento (recepção)", "texto": "Cada camada remove e interpreta seu próprio cabeçalho, entregando o payload à camada superior, de baixo para cima." },
    "diferencaGabarito": "O emissor encapsula (adiciona cabeçalhos); o receptor desencapsula (remove cabeçalhos). A ordem é inversa entre os dois processos."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Encapsulamento significa comprimir os dados para economizar banda.",
    "porqueErrada": "Encapsulamento é adicionar cabeçalhos de controle, não comprimir os dados; compressão é função opcional da camada de apresentação.",
    "versaoCorreta": "Errado. Encapsulamento é adicionar cabeçalhos de controle, não comprimir. Compressão é função da camada de apresentação (opcional) e não é o mesmo conceito."
   },
   {
    "afirmacaoEquivocada": "Desencapsulamento ocorre no emissor.",
    "porqueErrada": "Desencapsulamento é o processo inverso, que ocorre na recepção; o emissor é quem encapsula.",
    "versaoCorreta": "Errado. O emissor encapsula (adiciona cabeçalhos ao descer as camadas); o receptor desencapsula (remove cabeçalhos ao subir as camadas)."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["Encapsulamento", "Desencapsulamento", "Cabeçalho", "Trailer", "Payload", "PDU"],
   "regras": ["Aplicação → transporte (portas) → rede (IPs) → enlace (MACs) → física (bits)", "Na recepção, a ordem é inversa: cada camada remove seu próprio cabeçalho (desencapsulamento)"],
   "comparacoes": ["O cabeçalho de transporte traz portas; o de rede traz IPs"],
   "fluxos": ["No envio, cada camada adiciona seu cabeçalho; na recepção, cada camada remove o seu"],
   "excecoes": ["Alguns protocolos, como TLS, se posicionam entre camadas"],
   "palavrasChave": ["envelope", "porta", "IP", "MAC", "FCS"],
   "checklist": ["Defino encapsulamento?", "Ordeno os cabeçalhos?", "Descrevo o desencapsulamento?", "Localizo porta, IP e MAC?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Descrever, em ordem, os cabeçalhos adicionados a uma mensagem HTTP ao ser enviada por Ethernet.",
    "dados": "Mensagem HTTP como payload inicial. Caminho: aplicação → transporte → rede → enlace → física.",
    "conceitos": ["Encapsulamento", "Cabeçalho TCP", "Cabeçalho IP", "Cabeçalho+trailer Ethernet"],
    "estrategia": "Siga a ordem descendente do envio: a aplicação gera os dados; transporte adiciona portas; rede adiciona IPs; enlace adiciona MACs e FCS; física converte em bits.",
    "execucao": ["1 A aplicação gera a mensagem HTTP.", "2 O transporte adiciona cabeçalho TCP (portas 80/443, sequência), formando o segmento.", "3 A rede adiciona cabeçalho IP (IPs origem/destino), formando o pacote.", "4 O enlace adiciona cabeçalho e trailer Ethernet (MACs origem/destino, FCS), formando o quadro.", "5 A física converte o quadro em bits no meio."],
    "resultado": "Dados HTTP → cabeçalho TCP (porta 80/443, sequência) → cabeçalho IP (IP origem/destino) → cabeçalho+trailer Ethernet (MAC origem/destino, FCS) → bits no meio físico.",
    "justificativa": "Cada camada acrescenta seu cabeçalho à PDU da camada superior, seguindo a ordem descendente do envio, conforme definido no modelo de encapsulamento.",
    "errosFrequentes": ["Inverter a ordem dos cabeçalhos (colocar IP antes de TCP).", "Esquecer o trailer FCS do quadro Ethernet."],
    "variacao": "Se o transporte fosse UDP em vez de TCP, o cabeçalho de transporte seria mais simples (sem número de sequência), mas a ordem das camadas permaneceria a mesma."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um analista de rede captura um quadro Ethernet e vê dentro dele um pacote IP, dentro do qual há um segmento TCP, dentro do qual há uma requisição HTTP. Como isso é possível?",
    "dados": "Quadro Ethernet capturado contendo pacote IP contendo segmento TCP contendo requisição HTTP.",
    "conceitos": ["Encapsulamento", "Desencapsulamento", "PDU aninhada"],
    "estrategia": "Encapsulamento em ação: cada camada anexa seu cabeçalho à PDU da camada superior. A captura exibe o quadro completo e, ao desencapsular camada por camada, recupera-se Ethernet, IP, TCP e HTTP.",
    "execucao": ["1 O analista captura o quadro Ethernet completo.", "2 Remove o cabeçalho/trailer Ethernet: resta o pacote IP.", "3 Remove o cabeçalho IP: resta o segmento TCP.", "4 Remove o cabeçalho TCP: resta a requisição HTTP.", "5 Confirma que cada camada removeu seu próprio cabeçalho."],
    "resultado": "É o encapsulamento em ação: cada camada empacota a PDU da camada superior. A captura mostra o quadro completo; ao desencapsular camada por camada, recuperam-se IP, TCP e HTTP.",
    "justificativa": "O aninhamento de PDUs reflete a ordem de encapsulamento: Ethernet (enlace) envolve IP (rede), que envolve TCP (transporte), que envolve HTTP (aplicação).",
    "errosFrequentes": ["Acreditar que as camadas sobrescrevem os dados anteriores, em vez de encapsulá-los.", "Confundir a ordem de remoção na recepção com a ordem de adição no envio."],
    "variacao": "Se o protocolo de transporte fosse UDP, o segmento seria um datagrama UDP, mas o princípio de aninhamento e desencapsulamento permaneceria idêntico."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: \"Encapsulamento significa comprimir os dados para economizar banda.\" — avaliar se procede, distinguindo encapsulamento de compressão.",
    "dados": "Enunciado da afirmação. Conceitos envolvidos: encapsulamento vs compressão.",
    "conceitos": ["Encapsulamento", "Cabeçalho de controle", "Compressão (camada de apresentação)"],
    "estrategia": "Distinguir encapsulamento (adicionar cabeçalhos de controle) de compressão (reduzir tamanho dos dados). Compressão é função opcional da camada de apresentação, não é encapsulamento.",
    "execucao": ["1 Identifique a afirmação: \"encapsulamento comprime os dados\".", "2 Reconheça que encapsulamento adiciona cabeçalhos, não reduz dados.", "3 Lembre que compressão é opcional e pertence à camada de apresentação.", "4 Conclua que a afirmação confunde dois conceitos distintos."],
    "resultado": "Errado. Encapsulamento acrescenta cabeçalhos de controle aos dados, não os comprime; a compressão cabe à camada de apresentação, de forma opcional.",
    "justificativa": "Encapsulamento aumenta ligeiramente o tamanho (acrescenta cabeçalhos) e serve ao controle, não à economia de banda; compressão é um mecanismo separado e opcional.",
    "errosFrequentes": ["Confundir encapsulamento com compressão por ambos mexerem no tamanho dos dados.", "Atribuir compressão a qualquer camada, quando é específica da apresentação."],
    "variacao": "Se a afirmação fosse \"A compressão é função opcional da camada de apresentação\", estaria correta, pois diferencia corretamente compressão de encapsulamento."
   }
  ]
 }
};