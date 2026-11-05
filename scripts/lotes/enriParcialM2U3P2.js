const enriParcialM2U3P2 = {
 "m2-u3-t1-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "Saber quando o UDP é preferível ao TCP é tema central do conteúdo programático de redes: aborda a comparação direta entre os dois protocolos de transporte e os exemplos clássicos de aplicação. O candidato precisa reconhecer que a ausência de handshake, de confirmação e de controle de fluxo não é defeito, mas escolha de projeto que compra latência baixa e overhead pequeno.",
   "preRequisitos": [
    "Camada de transporte e o conceito de porta lógica",
    "Modelo TCP/IP em camadas",
    "Noção de handshake e confirmação (ACK)"
   ],
   "objetivosObservaveis": [
    "Definir o UDP como protocolo de transporte sem conexão e não confiável",
    "Citar vantagens do UDP: latência, overhead e suporte a broadcast/multicast",
    "Reconhecer limitações: perda, duplicação e reordenação de datagramas",
    "Associar DNS, DHCP, VoIP, streaming e jogos ao UDP"
   ],
   "competencias": [
    "Escolha de protocolo de transporte conforme requisito da aplicação",
    "Leitura de cenários de tempo real sob pressão de prova"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u3-t1-s2 (TCP: confiabilidade, fluxo e congestionamento) — contraponto obrigatório: confiável e ordenado",
    "m2-u3-t2-s2 (DNS: resolução de nomes) — usa UDP/53 nas consultas simples",
    "m2-u3-t2-s3 (DHCP: atribuição dinâmica de endereços) — depende de broadcast, impossível em TCP",
    "m2-u1-t2-s1 (Unicast, broadcast, multicast, anycast) — UDP sustenta broadcast e multicast"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": " e alternam itens de certo/errado sobre cabeçalho de 8 bytes e ausência de sequência; costuma pedir o protocolo indicado para voz e videoconferência. A classificação é estimativa pedagógica qualitativa de adequação ao edital, não medição de incidência."
   }
  },
  "niveis": {
   "iniciante": "UDP (User Datagram Protocol) é sem conexão e não confiável: envia datagramas independentes, sem handshake, sem ACK, sem retransmissão, sem controle de fluxo/congestionamento, sem ordenação. Cabeçalho mínimo (8 bytes: portas origem/destino, comprimento, checksum). Vantagens: baixa latência, overhead mínimo, suporta broadcast/multicast. Limitações: pode perder, duplicar ou reordenar pacotes; a aplicação deve tratar confiabilidade se necessário. Usado por DNS, DHCP, VoIP, streaming, jogos online e QUIC.",
   "intermediario": "A comparação com o TCP é o eixo da questão: o TCP paga três vias de handshake, números de sequência, ACKs, janelas e retransmissão para entregar fluxo ordenado e confiável; o UDP entrega o datagrama imediatamente, encostando no IP com apenas portas, comprimento e checksum. Em taxa de 20 atualizações por segundo, esperar retransmissão atrasaria o estado do jogo mais do que perder um pacote. O checksum do UDP é opcional no IPv4 e cobre apenas o cabeçalho e os dados do próprio datagrama, sem reconstruir conexão.",
   "avancado": "Como o UDP não oferece garantias, a confiabilidade precisa ser reimplementada acima dele quando a aplicação exigir: o QUIC, base do HTTP/3, adiciona números de sequência, ACKs, controle de congestionamento e TLS dentro do espaço de usuário. Também é o UDP que permite difusão para muitos receptores ao mesmo tempo — DHCP depende de broadcast antes de o cliente ter IP, e multicast de vídeo não escalaria em TCP. Diagnosticar queda de pacotes UDP exige olhar filas, jitter e perda, não retransmissões.",
   "especialista": "Em projeto de serviço, decidir o transporte é decidir onde ficam as garantias: aplicações de tempo real escolhem UDP e tratam perda por interpolação, redundância ou FEC; transferências de arquivo escolhem TCP porque a integridade do bytes importa mais que o atraso. Uma arquitetura pode combinar os dois — sinalização em TCP e mídia em UDP (RTP/RTCP). O argumento de gabarito jamais é 'UDP é pior', e sim 'UDP é o adequado quando latência, difusão ou escala superam a confiabilidade ponto a ponto'."
  },
  "comparacoes": [
   {
    "tema": "TCP e UDP como opções de transporte",
    "a": {
     "rotulo": "TCP",
     "texto": "Orientado a conexão, confiável e ordenado: handshake, ACK, retransmissão, controle de fluxo e congestionamento; cabeçalho maior."
    },
    "b": {
     "rotulo": "UDP",
     "texto": "Sem conexão e não confiável: datagramas independentes, cabeçalho de 8 bytes, sem ACK nem ordenação; permite broadcast e multicast."
    },
    "diferencaGabarito": "TCP garante entrega e ordem com custo de latência; UDP entrega rápido e enxuto, transferindo à aplicação o tratamento de falhas."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "O UDP é um protocolo inferior ao TCP e por isso está em desuso.",
    "porqueErrada": "A afirmação confunde ausência de garantias com defeito: o UDP é a escolha correta quando latência e difusão pesam mais que confiabilidade.",
    "versaoCorreta": "UDP e TCP servem a requisitos distintos; VoIP, DNS, DHCP, streaming e jogos operam em UDP justamente por ele ser enxuto."
   },
   {
    "afirmacaoEquivocada": "O UDP garante a ordem de chegada dos datagramas, pois usa a mesma porta de origem e destino.",
    "porqueErrada": "O cabeçalho do UDP não tem número de sequência; pacotes podem chegar fora de ordem, duplicados ou perdidos.",
    "versaoCorreta": "A ordenação, quando necessária, é responsabilidade da aplicação — o UDP não carrega número de sequência."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "UDP (User Datagram Protocol)",
    "Datagrama independente",
    "Cabeçalho de 8 bytes",
    "Broadcast e multicast",
    "QUIC sobre UDP"
   ],
   "regras": [
    "Sem handshake, sem ACK, sem retransmissão",
    "Portas de origem e destino identificam os processos",
    "Confiança, se exigida, vem da aplicação"
   ],
   "comparacoes": [
    "TCP: confiável e ordenado; UDP: rápido e sem garantias",
    "UDP permite broadcast/multicast; TCP não"
   ],
   "fluxos": [
    "Aplicação escreve dados na porta UDP → datagrama segue pelo IP → receptor porta → aplicação trata perda"
   ],
   "excecoes": [
    "DNS usa TCP em transferência de zona e respostas grandes",
    "QUIC reimplementa confiabilidade acima do UDP"
   ],
   "palavrasChave": [
    "latência",
    "overhead",
    "ordenação",
    "streaming",
    "tempo real"
   ],
   "checklist": [
    "Defino o UDP?",
    "Cito vantagens e limitações?",
    "Associo DNS, DHCP e VoIP ao UDP?",
    "Escolho UDP sobre TCP com justificativa?"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Por que o DNS usa UDP na porta 53 para consultas simples, e em que situação a troca por TCP se torna obrigatória?",
    "dados": "Consulta DNS por www.exemplo.com.br; resposta do tipo A dentro de 512 bytes; resolvedor com cache; porta 53.",
    "conceitos": [
     "Stateless da consulta DNS",
     "Cabeçalho UDP de 8 bytes",
     "Custo de handshake"
    ],
    "estrategia": "Avaliar o tamanho da troca: se uma pergunta e uma resposta pequenas resolvem o problema, pagar handshake e retransmissão só acrescenta latência.",
    "execucao": [
     "1. Medir o volume: uma consulta e uma resposta curtas cabem em um datagrama.",
     "2. Descartar o handshake: UDP dispensa as três vias do TCP.",
     "3. Enviar o datagrama para a porta 53 do servidor.",
     "4. Se a resposta estourar 512 bytes (ou exigir EDNS), reenviar a consulta sobre TCP na mesma porta."
    ],
    "resultado": "UDP na porta 53 para consultas simples; TCP apenas quando a resposta é grande ou há transferência de zona.",
    "justificativa": "A consulta DNS é uma troca única e curta: o UDP entrega com latência mínima e, se o datagrama se perder, o próprio cliente reenvia a pergunta. O TCP só se justifica quando o volume de dados exige fluxo confiável.",
    "errosFrequentes": [
     "Dizer que DNS usa apenas TCP porque 'precisa ser confiável' — ignora que o cliente reconsulta.",
     "Esquecer a exceção: respostas acima de 512 bytes e transferência de zona usam TCP."
    ],
    "variacao": "E se a zona do domínio precisar ser transferida entre servidores autoritativos? Aí o volume é grande e contínuo, e o transporte passa a ser TCP na porta 53."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um jogo de ação online envia a posição do jogador 20 vezes por segundo. TCP ou UDP, e o que a aplicação precisa fazer?",
    "dados": "Taxa de 20 atualizações por segundo; datagrama de posição com cerca de 40 bytes; orçamento de atraso de 100 ms; Interpolação no cliente.",
    "conceitos": [
     "Requisito de tempo real",
     "Custo da retransmissão",
     "Tratamento de perda na aplicação"
    ],
    "estrategia": "Comparar o custo de perder um pacote antigo com o custo de esperar sua retransmissão: em jogo, o dado velho vale menos que o dado novo.",
    "execucao": [
     "1. Fixar a exigência: atraso máximo de 100 ms por atualização.",
     "2. Calcular o efeito do TCP: retransmissão + reordenação elevariam o atraso além do orçamento.",
     "3. Escolher UDP para os pacotes de posição.",
     "4. Implementar na aplicação numeração de pacotes e interpolação entre as duas últimas posições recebidas.",
     "5. Reservar TCP para dados que não admitem perda, como histórico e inventário."
    ],
    "resultado": "UDP para posição, com interpolação no cliente; perda ocasional é aceitável, atraso não.",
    "justificativa": "O valor de uma atualização de posição decai rapidamente: quando a retransmissão chegasse, o estado já estaria superado. O UDP preserva o orçamento de latência e a aplicação resolve a descontinuidade interpolando movimento.",
    "errosFrequentes": [
     "Escolher TCP por 'segurança' e introduzir lag sempre que há perda na rede.",
     "Achar que UDP dispensa qualquer tratamento: sem numeração, o cliente não percebe o pacote perdido."
    ],
    "variacao": "Se o jogo passa a transmitar voz entre jogadores, a decisão se mantém? Sim — voz em tempo real também usa UDP, pois atraso e jitter prejudicam mais que pequenas perdas."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação sob julgamento: 'UDP é inútil porque não garante entrega.' Essa leitura está correta?",
    "dados": "Serviços em uso: consultas DNS, DHCP, VoIP corporativo, streaming de vídeo e jogos online; todos operando sobre UDP.",
    "conceitos": [
     "Ausência de garantia não é ausência de utilidade",
     "Adequação ao requisito",
     "Confiabilidade na camada de aplicação"
    ],
    "estrategia": "Testar a afirmação contra os fatos: se UDP fosse inútil, os serviços citados não funcionariam; procurar o que a garantia custaria em cada caso.",
    "execucao": [
     "1. Listar onde a latência vale mais que a entrega certa: voz, vídeo, posição de jogo.",
     "2. Verificar como cada serviço lida com a perda: reconsulta (DNS), interpolação (jogos), buffers (streaming).",
     "3. Reconhecer que o QUIC acrescenta confiabilidade acima do UDP quando a aplicação precisa.",
     "4. Concluir que a afirmação troca 'sem garantia' por 'sem utilidade'."
    ],
    "resultado": "A afirmação é falsa: UDP é indispensável onde latência, difusão e escala superam a confiabilidade ponto a ponto.",
    "justificativa": "A utilidade de um protocolo depende do requisito, e não de uma escala absoluta de recursos. O UDP entrega o mínimo necessário — endereçar processos e transmitir dados — e deixa as garantias opcionais à aplicação, o que o torna insubstituível em tempo real e em difusão.",
    "errosFrequentes": [
     "Tratar 'não confiável' como 'não utilizável'.",
     "Ignorar que a confiabilidade pode ser reimplementada acima, como faz o QUIC."
    ],
    "variacao": "Se a mesma afirmação mencionar especificamente transferência de arquivos, a conclusão muda? Não: para arquivos, o TCP é o adequado, mas por exigência de integridade, não por o UDP ser inútil."
   }
  ]
 },
 "m2-u3-t2-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "HTTP é o protocolo da web e sustenta boa parte do conteúdo cobrado em provas de redes e de segurança da informação. A banca testa se o candidato sabe o que cada método faz, como interpretar a classe de um código de status e o que o HTTPS acrescenta ao HTTP em termos de confidencialidade, integridade e autenticação.",
   "preRequisitos": [
    "TCP, portas e três vias de handshake",
    "Noções de TLS e certificado digital",
    "Modelo cliente-servidor e URL"
   ],
   "objetivosObservaveis": [
    "Listar métodos HTTP e seus efeitos (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)",
    "Interpretar códigos de status por classe (1xx a 5xx)",
    "Diferenciar HTTP de HTTPS quanto a porta e proteções",
    "Reconhecer que stateless não significa ausência de sessão"
   ],
   "competencias": [
    "Leitura de tráfego web e diagnóstico por método/status",
    "Interpretação de códigos de status em cenários de manutenção"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — camada que dá cifra e autenticação ao HTTPS",
    "m2-u3-t1-s2 (TCP: confiabilidade, fluxo e congestionamento) — transporte do HTTP clássico e do HTTP/2",
    "m2-u3-t1-s3 (UDP: datagramas sem conexão) — base do QUIC, usado pelo HTTP/3",
    "m2-u5-t4-s2 (Diferenças entre falha de DNS, conectividade, roteamento e aplicação) — separar erro 5xx de falha de rede"
   ],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Protocolos de aplicação são frequentes em editais de infraestrutura de TI: explora itens C/E sobre stateless e portas 80/443, enquanto e montam cenários com códigos de status e métodos. A classificação é estimativa pedagógica qualitativa, sem medição de incidência."
   }
  },
  "niveis": {
   "iniciante": "HTTP (HyperText Transfer Protocol) é um protocolo de aplicação stateless baseado em requisição-resposta: o cliente pede, o servidor responde. Métodos: GET (obter), POST (enviar dados), PUT (atualizar), DELETE (remover), PATCH, HEAD, OPTIONS. Códigos de status: 1xx informativo, 2xx sucesso (200 OK), 3xx redirecionamento (301, 302), 4xx erro do cliente (400, 401, 403, 404), 5xx erro do servidor (500, 502, 503). HTTP usa TCP porta 80. HTTPS é HTTP sobre TLS: cifra o conteúdo e autentica o servidor via certificado, usando porta 443.",
   "intermediario": "O modelo stateless significa que cada requisição é independente — o protocolo não guarda contexto entre elas. Sessões existem, mas são mantidas pela aplicação com cookies e tokens, não pelo HTTP. A escolha do método indica a intenção: GET obtém recurso (parâmetros na URL, cacheável e idempotente), POST envia dados no corpo e não é cacheável por padrão, PUT substitui um recurso e DELETE o remove. Os códigos organizam o diagnóstico: 4xx aponta falha do cliente (404 = não encontrado, 401 = não autenticado, 403 = proibido) e 5xx aponta falha do servidor (500, 502 gateway, 503 indisponível).",
   "avancado": "As versões mudam o transporte e a eficiência: HTTP/2 multiplexa vários fluxos em uma única conexão TCP e comprime cabeçalhos com HPACK; HTTP/3 abandona o TCP e roda sobre QUIC (UDP), reduzindo o atraso de estabelecimento. O HTTPS não é outro protocolo de aplicação: é o mesmo HTTP sobre TLS, que acrescenta confidencialidade (ninguém fora da sessão lê o conteúdo), integridade (alteração no trânsito invalida a verificação de MAC e derruba a conexão) e autenticação do servidor por certificado. Errar a porta — 80 sem TLS, 443 com TLS — é falha de configuração típica de proxy.",
   "especialista": "Diagnosticar a web exige separar camadas: falha de resolução de nomes (DNS), falha de conectividade (rota, firewall), falha de apresentação (TLS/certificado) e falha de aplicação (código 5xx). Um 503 com conteúdo de proxy difere de um erro de handshake TLS. Em manutenção planejada usa-se 503 com Retry-After; em aplicação quebrada, 500. Cookies só trafegam com atributo Secure por HTTPS, e Mixed Content é reprovado pelos navegadores modernos."
  },
  "comparacoes": [
   {
    "tema": "HTTP e HTTPS quanto a proteção e porta",
    "a": {
     "rotulo": "HTTP",
     "texto": "Texto claro sobre TCP na porta 80; qualquer intermediário no caminho pode ler e alterar as mensagens."
    },
    "b": {
     "rotulo": "HTTPS",
     "texto": "HTTP sobre TLS na porta 443; cifra o conteúdo, garante integridade e autentica o servidor por certificado."
    },
    "diferencaGabarito": "HTTPS não é protocolo diferente: é o mesmo HTTP com TLS, e a diferença cobrada em prova é cifra, integridade, autenticação e porta 443."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "HTTPS é um protocolo de aplicação diferente do HTTP, com métodos e códigos próprios.",
    "porqueErrada": "A troca está em colocar o TLS no lugar do HTTP: métodos, status e semântica continuam sendo os do HTTP.",
    "versaoCorreta": "HTTPS é o HTTP sobre TLS; o que muda é a camada de segurança (porta 443, cifra, integridade e autenticação do servidor)."
   },
   {
    "afirmacaoEquivocada": "404 indica erro do servidor, por isso aparece quando um site está fora do ar.",
    "porqueErrada": "A afirmação confunde classe de status: 404 pertence a 4xx, erro do cliente porque o recurso não foi encontrado.",
    "versaoCorreta": "404 é erro do cliente (recurso inexistente); erro do servidor é a classe 5xx, como 500 ou 503."
   },
   {
    "afirmacaoEquivocada": "Stateless significa que o HTTP não permite login nem sessão de usuário.",
    "porqueErrada": "A afirmação confunde ausência de estado no protocolo com ausência de sessão na aplicação.",
    "versaoCorreta": "O protocolo não guarda estado entre requisições; cookies e tokens, mantidos pela aplicação, sustentam a sessão."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "HTTP e modelo requisição-resposta",
    "Stateless e sessão por cookies",
    "Métodos e segurança semântica",
    "Classes de status",
    "HTTPS como HTTP sobre TLS"
   ],
   "regras": [
    "2xx sucesso, 3xx redirecionamento, 4xx cliente, 5xx servidor",
    "HTTP porta 80; HTTPS porta 443",
    "GET obtem; POST envia no corpo"
   ],
   "comparacoes": [
    "4xx: falha do cliente; 5xx: falha do servidor",
    "HTTP/2: TCP multiplexado; HTTP/3: QUIC sobre UDP"
   ],
   "fluxos": [
    "Cliente resolve nome → conexão TCP → requisição com método e URL → resposta com status → recurso renderizado"
   ],
   "excecoes": [
    "HTTP/3 usa UDP via QUIC",
    "Sessão existe, mas é responsabilidade da aplicação"
   ],
   "palavrasChave": [
    "requisição",
    "status",
    "certificado",
    "sessão",
    "redirecionamento"
   ],
   "checklist": [
    "Listo métodos HTTP?",
    "Classifico 404 e 503 corretamente?",
    "Digo o que HTTPS acrescenta?",
    "Indico as portas 80 e 443?"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Diferenciar uma requisição GET de uma POST quanto a parâmetros, cache, efeito no servidor e idempotência.",
    "dados": "Formulário de busca com campo q=concurso; envio de cadastro com nome e e-mail no corpo; URL https://exemplo.com/busca.",
    "conceitos": [
     "Método GET",
     "Método POST",
     "Idempotência e cacheabilidade"
    ],
    "estrategia": "Identificar para onde vão os dados e qual efeito a operação causa no servidor, pois isso define método e comportamento de cache.",
    "execucao": [
     "1. Verificar o destino dos parâmetros: URL na query string (GET) ou corpo da mensagem (POST).",
     "2. Avaliar o efeito: obtenção de recurso (GET) ou criação/alteração de estado (POST).",
     "3. Aplicar a regra de cache: respostas GET podem ser cacheadas; POST não por padrão.",
     "4. Concluir que usar GET para alterar estado é erro de projeto."
    ],
    "resultado": "GET transporta parâmetros na URL, é cacheável e idempotente; POST envia dados no corpo e não é cacheável por padrão.",
    "justificativa": "A semântica do método decorre da intenção da operação: obter um recursosão repetível e pode ser reexecutada sem efeito colateral, enquanto enviar dados processa uma alteração e por isso não deve ser cacheado nem reenviado por agentes.",
    "errosFrequentes": [
     "Colocar senha em query string via GET, expondo dado em log e histórico.",
     "Enviar tudo por POST, inclusive buscas que poderiam ser cacheadas."
    ],
    "variacao": "E se a operação precisa substituir integralmente um recurso já identificado na URL? O método adequado passa a ser PUT, não POST."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um site retorna 301 ao acessar http://exemplo.com. O que isso significa e o que cliente e buscadores devem fazer?",
    "dados": "Requisição GET http://exemplo.com; resposta 301 com cabeçalho Location: https://exemplo.com; indicador de migração permanente.",
    "conceitos": [
     "Classe 3xx",
     "Redirecionamento permanente",
     "Atualização de referências"
    ],
    "estrategia": "Ler o código pela classe antes do número: 3xx informa que o recurso está em outro endereço, e 301 especifica que a mudança é permanente.",
    "execucao": [
     "1. Classificar o status: 301 está em 3xx, família de redirecionamento.",
     "2. Ler o cabeçalho Location para obter o novo endereço (https://exemplo.com).",
     "3. Orientar o cliente a repetir a requisição no novo endereço e atualizar favoritos e links.",
     "4. Informar que buscadores transferem relevância para a URL definitiva por se tratar de mudança permanente.",
     "5. Observar que o cliente deixa de usar o endereço antigo em novas requisições."
    ],
    "resultado": "301 indica redirecionamento permanente: o cliente deve passar a usar https://exemplo.com e atualizar referências.",
    "justificativa": "A família 3xx sinaliza que a resposta não está no endereço pedido, e o dígito seguinte qualifica a duração da mudança. Como 301 é permanente, agentes de usuário e indexadores migram definitivamente as referências, diferentemente do 302, que é provisório.",
    "errosFrequentes": [
     "Confundir 301 com 404 e tratar o site como fora do ar.",
     "Ignorar o cabeçalho Location e concluir que não há ação possível."
    ],
    "variacao": "Se o status fosse 503 durante manutenção programada, a leitura muda: o recurso existe, está indisponível e deve-se aguardar ou repetir depois."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação sob julgamento: 'HTTPS garante que o servidor seja quem diz ser e que ninguém leia os dados, mas não impede alteração.' Está correta?",
    "dados": "Conexão HTTPS na porta 443 com certificado válido; tráfego interceptado por proxy transparente; mensagem alterada no trânsito.",
    "conceitos": [
     "Papel do TLS",
     "Verificação de integridade (MAC)",
     "Autenticação por certificado"
    ],
    "estrategia": "Testar a afirmação propriedade por propriedade: confidencialidade, integridade e autenticação são as três entregas do TLS, e a terceira cláusula nega uma delas.",
    "execucao": [
     "1. Confirmar a confidencialidade: o conteúdo circula cifrado, ilegível para terceiros.",
     "2. Confirmar a autenticação: o certificado vincula a chave ao nome do servidor.",
     "3. Testar a integridade: alterar um byte no trânsito invalida o MAC e a sessão é encerrada.",
     "4. Concluir que a afirmação é falsa porque nega justamente a proteção que o TLS oferece contra alteração."
    ],
    "resultado": "A afirmação é incorreta: HTTPS oferece confidencialidade, integridade e autenticidade do servidor — alterar dados no trânsito derruba a conexão.",
    "justificativa": "O TLS protege a mensagem com código de autificação: qualquer modificação no caminho falha na verificação e a conexão é abortada antes de chegar à aplicação. Como confidencialidade e integridade são entregues pelo mesmo registro, não é possível afirmar que o HTTPS esconde o conteúdo mas permite alterá-lo.",
    "errosFrequentes": [
     "Achar que cifrar já basta e que alteração passa despercebida.",
     "Confundir proteção do canal com a legitimidade do conteúdo exibido pelo site."
    ],
    "variacao": "Se o certificado do servidor for autoassinado, o que cai? A autenticação — o navegador alerta, e a garantia de 'quem diz ser' deixa de existir mesmo com o canal cifrado."
   }
  ]
 }
};
