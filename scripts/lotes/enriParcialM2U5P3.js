const enriParcialM2U5P3 = {
 "m2-u5-t2-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "O comando ip e os utilitários netstat e ss permitem inspecionar endereços, rotas, sockets e portas em escuta, revelando se um serviço está ativo e quem está conectado. Provas de diagnóstico de rede cobram as opções ‑t, ‑u, ‑l, ‑n e ‑p e a leitura da diferença entre escuta em 0.0.0.0 e em 127.0.0.1, ponto que separa serviço exposto de serviço restrito ao próprio host.",
   "preRequisitos": [
    "Portas e sockets TCP/UDP e o conceito de escuta (LISTEN)",
    "Comando ifconfig e a transição para o ip no Linux",
    "Noção de endereço de loopback 127.0.0.1 e de endereço curinga 0.0.0.0",
    "Leitura básica de tabela de rotas"
   ],
   "objetivosObservaveis": [
    "Usar ip addr, ip link, ip route e ip neigh para inspecionar endereços, enlaces, rotas e vizinhos",
    "Executar ss -tlnp e netstat -tlnp e explicar o significado de cada opção",
    "Diferenciar netstat, ferramenta legada, do ss, seu sucessor moderno",
    "Interpretar uma porta em escuta em 0.0.0.0 em comparação a uma em 127.0.0.1",
    "Detectar conexões estabelecidas suspeitas na saída de ss"
   ],
   "competencias": [
    "Inspeção de sockets para confirmar se um serviço está escutando",
    "Análise de segurança: avaliar endereço de escuta e portas inesperadas"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u5-t2-s1 (ipconfig e ifconfig: configuração de interface) — comando legado que o ip substitui no Linux",
    "m2-u5-t2-s3 (Verificação de rotas, ARP e vizinhos) — uso de ip route e ip neigh no diagnóstico de caminho",
    "m2-u5-t3-s2 (dig: consulta DNS avançada) — inspeção da camada de aplicação que complementa a de transporte"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "ss, netstat e o comando ip aparecem em itens sobre diagnóstico e verificação de serviços, com ênfase na sintaxe e na leitura de portas em escuta. A classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
   }
  },
  "niveis": {
   "iniciante": "O comando ip, da suíte iproute2 no Linux, substitui ifconfig, route e arp: ip addr lista endereços das interfaces, ip link mostra o estado dos enlaces, ip route exibe a tabela de rotas e ip neigh traz o cache de vizinhos. O netstat é legado e exibe conexões ativas, portas em escuta, rotas e estatísticas; o ss é o sucessor moderno, mais rápido e com as mesmas finalidades.",
   "intermediario": "As opções essenciais de netstat e ss são ‑t para TCP, ‑u para UDP, ‑l para escuta, ‑n para saída numérica sem resolução de nomes e ‑p para exibir o processo responsável. O comando ss -tlnp lista as portas TCP em escuta com o processo que as detém, sendo a forma mais direta de confirmar que um serviço subiu na porta esperada.",
   "avancado": "A leitura correta exige atenção ao endereço de escuta: uma porta em 0.0.0.0 aceita conexões de qualquer origem, enquanto em 127.0.0.1 fica restrita ao próprio host. Porta desconhecida em escuta em servidor é indicador que merece investigação, especialmente se o processo responsável não corresponder a um serviço conhecido.",
   "especialista": "Em investigação de incidente, ss e netstat permitem correlacionar portas em escuta, conexões estabelecidas e processos para identificar serviços inesperados ou padrões de beaconing para destinos externos. Associados a ip addr e ip route, situam o socket na configuração do host; a opção ‑p pode exigir privilégio elevado para processos de outros usuários, e o ss lê as tabelas do kernel por netlink, sendo mais rápido que o netstat."
  },
  "comparacoes": [
   {
    "tema": "netstat e ss na inspeção de conexões",
    "a": {
     "rotulo": "netstat",
     "texto": "Ferramenta legada, disponível em Linux, Windows e Unix, que exibe conexões ativas, portas em escuta, tabela de roteamento e estatísticas. Sintaxe netstat -tlnp. Continua amplamente aceita em provas, embora esteja em desuso no Linux atual."
    },
    "b": {
     "rotulo": "ss",
     "texto": "Socket statistics, sucessor moderno do netstat no Linux, lê diretamente as tabelas do kernel e é mais rápido. Sintaxe ss -tlnp, com as mesmas opções principais e comportamento equivalente para listar sockets em escuta."
    },
    "diferencaGabarito": "Ambos listam sockets e portas, mas o ss consulta o kernel de forma mais eficiente e é a ferramenta atual no Linux; a semelhança de finalidade não se estende à sintaxe completa, que difere em opções secundárias."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "netstat e ss exibem apenas conexões TCP, não sendo possível listar sockets UDP.",
    "porqueErrada": "As duas ferramentas aceitam a opção ‑u, que seleciona sockets UDP, e exibem também sockets Unix; a listagem padrão não se restringe a TCP.",
    "versaoCorreta": "Errado. netstat e ss listam TCP e UDP com as opções ‑t e ‑u, além de sockets Unix; a escolha do protocolo é feita pelo operador."
   },
   {
    "afirmacaoEquivocada": "ifconfig continua sendo o comando atual para exibir endereços no Linux, ao lado do ip.",
    "porqueErrada": "O ifconfig é legado e foi substituído pelo comando ip, da suíte iproute2, que passou a concentrar endereços, enlaces, rotas e vizinhos.",
    "versaoCorreta": "Errado. No Linux atual utiliza-se ip addr; ifconfig é considerado legado e substituído pelo comando ip."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "ip addr, ip link, ip route e ip neigh: subcomandos do ip que substituem ifconfig, route e arp",
    "netstat: ferramenta legada de conexões, portas em escuta e rotas",
    "ss: socket statistics, sucessor moderno do netstat no Linux",
    "Endereço de escuta 0.0.0.0 versus 127.0.0.1"
   ],
   "regras": [
    "‑t seleciona TCP, ‑u seleciona UDP, ‑l lista apenas sockets em escuta",
    "‑n desativa a resolução de nomes e ‑p exibe o processo responsável",
    "ss -tlnp lista portas TCP em escuta com o processo"
   ],
   "comparacoes": [
    "ss lê as tabelas do kernel e é mais rápido que o netstat, embora ambos tenham finalidade equivalente"
   ],
   "fluxos": [
    "Verificar serviço ativo: executar ss -tlnp, filtrar a porta desejada, conferir o processo e o endereço de escuta"
   ],
   "excecoes": [
    "A ausência de uma porta em escuta pode indicar firewall local, privilégios insuficientes para ‑p ou socket ligado a outro endereço"
   ],
   "palavrasChave": [
    "ip",
    "iproute2",
    "netstat",
    "ss",
    "LISTEN",
    "porta",
    "processo",
    "0.0.0.0"
   ],
   "checklist": [
    "Executar ip addr e identificar os endereços das interfaces",
    "Executar ss -tlnp e listar as portas em escuta",
    "Diferenciar netstat de ss quanto a legado e modernidade",
    "Interpretar escuta em 0.0.0.0 como exposta a qualquer origem",
    "Investigar porta desconhecida pelo processo responsável"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Um servidor web subiu e o administrador precisa confirmar se ele está escutando na porta 80 antes de testar pelo navegador.",
    "dados": "Cenário: serviço web em execução; porta esperada 80/TCP; sistema Linux; acesso à linha de comando com privilégio para leitura de processos.",
    "conceitos": [
     "Socket em escuta",
     "ss -tlnp",
     "Filtro por porta"
    ],
    "estrategia": "Listar as portas TCP em escuta com o processo responsável e filtrar a porta 80 para confirmar o estado LISTEN.",
    "execucao": [
     "Executar ss -tlnp",
     "Filtrar a saída pela porta 80",
     "Verificar o estado LISTEN na linha retornada",
     "Conferir o processo indicado na coluna de processo"
    ],
    "resultado": "Deve-se executar ss -tlnp | grep :80, ou netstat -tlnp | grep :80, e confirmar uma linha com estado LISTEN na porta 80.",
    "justificativa": "A opção ‑l restringe a listagem aos sockets em escuta e ‑n evita a resolução de nomes; se a linha da porta 80 existe com LISTEN, o serviço está apto a receber conexões naquela porta.",
    "errosFrequentes": [
     "Concluir que o serviço caiu só porque o navegador falhou, sem inspecionar a porta",
     "Esquecer a opção ‑l e interpretar como falha a lista vazia de conexões estabelecidas"
    ],
    "variacao": "Se o serviço esperasse na porta 8080, o filtro passaria a :8080 e a ausência de linha LISTEN indicaria que o processo não subiu ou está ligado a outro endereço."
   },
   {
    "tipo": "aplicacao",
    "problema": "Uma aplicação não responde na porta 8080 e o netstat, executado com -tlnp, não retorna nenhuma linha para 8080. O que isso indica?",
    "dados": "Cenário: porta 8080/TCP; saída de netstat -tlnp lista portas 22, 80 e 443 em escuta e nenhuma em 8080; conexão do cliente falha.",
    "conceitos": [
     "Porta em escuta",
     "Firewall local",
     "Estado do processo"
    ],
    "estrategia": "Interpretar a ausência de LISTEN como indício de que o serviço não está rodando ou não está ligado àquela porta, e então verificar processo, configuração e filtragem local.",
    "execucao": [
     "Executar netstat -tlnp e confirmar a ausência da porta 8080",
     "Verificar se o processo da aplicação está em execução",
     "Conferir a configuração de bind do serviço",
     "Checar o firewall local antes de investigar a rede"
    ],
    "resultado": "Indica que o serviço não está rodando ou não está escutando naquela porta; deve-se verificar processo, configuração e firewall local.",
    "justificativa": "Uma porta que não aparece com LISTEN não pode aceitar conexões, logo a falha do cliente decorre da ausência do socket, e não do caminho de rede; a inspeção do processo é o passo seguinte natural.",
    "errosFrequentes": [
     "Atribuir a falha ao firewall remoto sem antes confirmar a existência do socket em escuta",
     "Confundir porta fechada, que gera recusa, com porta filtrada, que gera silêncio"
    ],
    "variacao": "Se a porta 8080 aparecesse em LISTEN apenas em 127.0.0.1, o serviço estaria restrito ao próprio host e clientes externos falhariam por falta de rota até o socket, não por processo parado."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação em questão: 'netstat e ss mostram apenas conexões TCP, sendo necessário outro utilitário para inspecionar UDP.'",
    "dados": "Afirmação sobre o escopo das ferramentas; as opções ‑t e ‑u selecionam TCP e UDP em ambas, e a listagem cobre também sockets Unix.",
    "conceitos": [
     "Opção ‑u",
     "Sockets UDP",
     "Sockets Unix"
    ],
    "estrategia": "Desmontar a afirmação mostrando que a seleção de protocolo é feita por opção e que UDP é suportado nativamente pelas duas ferramentas.",
    "execucao": [
     "Descrever o que a afirmação nega",
     "Contrapor a existência da opção ‑u em netstat e ss",
     "Exemplificar ss -ulnp para listar UDP em escuta",
     "Concluir que a limitação afirmada não existe"
    ],
    "resultado": "Errado. netstat e ss suportam TCP e UDP por meio das opções ‑t e ‑u, além de sockets Unix; nenhum utilitário adicional é necessário.",
    "justificativa": "A leitura ingênua trata a listagem padrão, centrada em TCP, como limite da ferramenta; a opção ‑u existe justamente para ampliar o escopo ao UDP, o que invalida a afirmação.",
    "errosFrequentes": [
     "Confundir o conteúdo padrão da listagem com a capability da ferramenta",
     "Supor que portas UDP exigem software distinto por não aparecerem sem ‑u"
    ],
    "variacao": "Se a questão perguntasse como listar serviços UDP em escuta, a resposta seria ss -ulnp ou netstat -ulnp, com ‑u, ‑l, ‑n e ‑p no mesmo padrão do caso TCP."
   }
  ]
 },
 "m2-u5-t2-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "Tabela de rotas, cache ARP e estado das interfaces localizam a falha entre enlace, roteamento e configuração do host. A prova cobra os comandos ip route, route print, ip neigh e arp -a e a interpretação da ausência de rota padrão, de gateway sem entrada ARP e de interface DOWN, além do teste de MTU com ping -M do -s 1472.",
   "preRequisitos": [
    "Gateway padrão, tabela de rotas e métrica de rota",
    "Funcionamento do ARP no IPv4 e do Neighbor Discovery no IPv6",
    "Estado de interface UP e DOWN e endereço MAC",
    "Noção de MTU, PMTU e fragmentação"
   ],
   "objetivosObservaveis": [
    "Listar a tabela de rotas com ip route no Linux e route print no Windows",
    "Inspecionar o cache de vizinhos com ip neigh e arp -a",
    "Verificar o estado das interfaces com ip link",
    "Relacionar a ausência de ARP do gateway a falha de camada 2",
    "Testar a MTU do caminho com ping -M do -s 1472"
   ],
   "competencias": [
    "Verificação sequencial de conectividade: interface, rota, gateway e vizinhos",
    "Diagnóstico de enlace e de configuração de roteamento"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u5-t2-s2 (comando ip e netstat/ss) — mesmo conjunto iproute2 aplicado a sockets e endereços",
    "m2-u3-t3-s3 (ARP e Neighbor Discovery) — protocolo cujo cache ip neigh e arp -a exibem",
    "m2-u5-t4-s1 (Diagnóstico estruturado por camadas) — critérios de isolamento da falha por camada"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Comandos de rota, ARP e estado de interface são frequentes em itens de diagnóstico de rede, principalmente na associação entre sintoma e camada afetada. A classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
   }
  },
  "niveis": {
   "iniciante": "A tabela de rotas é exibida por ip route, no Linux, e por route print, no Windows, mostrando as rotas conhecidas, o gateway padrão e as métricas. O cache de vizinhos aparece em ip neigh, no Linux, e em arp -a, no Windows, com os pares de IP e MAC já resolvidos. O estado das interfaces é visto com ip link, que indica se cada enlace está UP ou DOWN.",
   "intermediario": "A verificação útil segue uma sequência: existe rota padrão com a entrada padrão via <gateway>? O gateway responde? Há entrada ARP resolvida para ele? A interface está UP com IP válido? A ausência de ARP para o gateway aponta falha de enlace, como cabo ou Wi-Fi; rota padrão apontando para endereço inexistente aponta falha de configuração.",
   "avancado": "Quando a rota existe mas o gateway não tem entrada ARP, a falha tende a estar na camada 2; quando a interface está DOWN, nenhuma verificação das camadas superiores produz resultado. A MTU pode ser testada no Linux com ping -M do -s 1472 <host>, que envia payload de 1472 bytes, equivalente a uma MTU de 1500 com os cabeçalhos.",
   "especialista": "Fragmentação indevida ou descoberta de PMTU defeituosa produz sintomas como páginas que não carregam por completo, ainda com rota e ARP corretos; o teste com -M do diferencia pacote grande aceito de pacote descartado por MTU do caminho. A análise integrada de rota, vizinhos, MTU e estado da interface delimita a camada responsável antes de qualquer mudança de configuração."
  },
  "comparacoes": [
   {
    "tema": "rota presente e gateway alcançável no diagnóstico",
    "a": {
     "rotulo": "Rota padrão presente",
     "texto": "A tabela contém uma entrada padrão via <gateway>, o que indica que o host sabe para onde encaminhar tráfego destinado a outras redes. É condição necessária de roteamento, verificada com ip route ou route print."
    },
    "b": {
     "rotulo": "Gateway alcançável",
     "texto": "O gateway responde na camada 2, com entrada ARP resolvida em ip neigh ou arp -a e interface UP. É condição adicional, pois o host pode ter rota para um gateway inacessível."
    },
    "diferencaGabarito": "Ter rota padrão não garante que o gateway responda: a rota é informação de encaminhamento, enquanto o alcance depende do enlace e da resolução ARP, que devem ser verificadas em separado."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "'ip neigh' exibe a tabela de rotas do sistema Linux.",
    "porqueErrada": "O ip neigh exibe o cache de vizinhos, com pares de IP e MAC resolvidos por ARP ou NDP; as rotas ficam em ip route.",
    "versaoCorreta": "Errado. ip neigh mostra vizinhos (IP e MAC); a tabela de rotas é exibida por ip route."
   },
   {
    "afirmacaoEquivocada": "MTU e MSS designam o mesmo limite de tamanho na comunicação de rede.",
    "porqueErrada": "A MTU limita o pacote na camada de rede, considerando os cabeçalhos; o MSS limita a porção de dados do segmento TCP, excluindo os cabeçalhos.",
    "versaoCorreta": "Errado. A MTU limita o pacote IP inteiro, enquanto o MSS limita os dados do segmento TCP; o MSS deriva da MTU subtraindo os cabeçalhos."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "ip route e route print: tabela de rotas, gateway padrão e métricas",
    "ip neigh e arp -a: cache de vizinhos ARP/NDP com pares IP e MAC",
    "ip link: estado UP ou DOWN das interfaces",
    "MTU, PMTU e fragmentação"
   ],
   "regras": [
    "A rota padrão aparece como padrão via <gateway> dev <interface>",
    "ping -M do -s 1472 testa payload de 1472 bytes, equivalente a MTU 1500"
   ],
   "comparacoes": [
    "MTU limita o pacote IP; MSS limita os dados do segmento TCP"
   ],
   "fluxos": [
    "Diagnóstico de conectividade: interface UP, rota padrão presente, gateway com ARP resolvido, teste de MTU se houver sintoma de carga parcial"
   ],
   "excecoes": [
    "Encapsulamentos como túneis e VPN reduzem a MTU efetiva do caminho, exigindo teste além da configuração local"
   ],
   "palavrasChave": [
    "ip route",
    "route print",
    "ip neigh",
    "arp -a",
    "gateway",
    "MTU",
    "MSS",
    "UP"
   ],
   "checklist": [
    "Listar rotas e confirmar a rota padrão",
    "Inspecionar o cache ARP do gateway",
    "Verificar o estado das interfaces",
    "Relacionar ausência de ARP a falha de enlace",
    "Testar a MTU do caminho antes de suspeitar da aplicação"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Um operador precisa saber se um host Linux possui rota padrão antes de testar o acesso a um site externo.",
    "dados": "Cenário: host Linux com interface eth0; necessidade de confirmar saída para redes externas; acesso à linha de comando.",
    "conceitos": [
     "Rota padrão",
     "ip route show padrão",
     "Gateway"
    ],
    "estrategia": "Exibir apenas a rota padrão com ip route show padrão e verificar a presença das palavras padrão, via e dev.",
    "execucao": [
     "Executar ip route show padrão",
     "Procurar a entrada padrão",
     "Ler o endereço após via",
     "Ler a interface após dev"
    ],
    "resultado": "Deve-se executar ip route show padrão, que exibe uma linha no formato padrão via <gateway> dev <interface> quando a rota existe.",
    "justificativa": "A palavra padrão identifica a rota usada para destinos fora das redes conhecidas; a presença da entrada confirma que o host tem caminho de saída, e a ausência indica que o tráfego externo não será encaminhado.",
    "errosFrequentes": [
     "Confundir tabela completa com a rota padrão ao usar ip route sem filtro",
     "Interpretar rota para a rede local como rota de saída para a Internet"
    ],
    "variacao": "Se o comando não retornasse nada, a verificação seguinte seria o estado da interface e o endereço obtido, pois ausência de rota padrão costuma decorrer de configuração ausente ou DHCP incompleto."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um host está configurado, mas não acessa a rede; arp -a não traz nenhuma entrada para o gateway. O que isso indica?",
    "dados": "Cenário: IP 192.168.0.50/24; gateway 192.168.0.1; saída de arp -a sem linha para 192.168.0.1; outras máquinas da mesma rede funcionam.",
    "conceitos": [
     "Resolução ARP",
     "Camada de enlace",
     "Alcance do gateway"
    ],
    "estrategia": "Interpretar a ausência de entrada ARP como falha de resolução na camada 2 e investigar enlace físico, switch, Wi-Fi ou estado do gateway.",
    "execucao": [
     "Confirmar o IP e o gateway configurados",
     "Executar arp -a e constatar a ausência do gateway",
     "Testar o gateway com ping para forçar a resolução",
     "Verificar cabo, Wi-Fi e estado do gateway se o ARP persistir vazio"
    ],
    "resultado": "Indica que o ARP do gateway não foi resolvido, o que aponta problema de enlace, como cabo ou Wi-Fi, ou gateway inacessível na camada 2.",
    "justificativa": "Sem resposta ARP o host não consegue montar o quadro para o gateway, de modo que a falha está abaixo da camada de rede; a configuração de IP correta não substitui a entrega no enlace.",
    "errosFrequentes": [
     "Culpar o servidor DNS ou a aplicação antes de verificar a camada 2",
     "Supor que ARP vazio é normal e não requer investigação quando há IP configurado"
    ],
    "variacao": "Se arp -a contivesse o gateway mas o ping falhasse, a investigação se deslocaria para roteamento, filtragem e MTU, pois a resolução de endereço estaria comprovada."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação em questão: 'se a tabela de rotas está correta, a conectividade do host está garantida.'",
    "dados": "Afirmação sobre suficiência da rota; contraexemplos: gateway sem ARP, firewall que descarta, NAT sem tradução, DNS sem resposta e aplicação parada.",
    "conceitos": [
     "Necessário e suficiente",
     "Camadas de rede",
     "Firewall e NAT"
    ],
    "estrategia": "Desmontar a afirmação distinguindo condição necessária de condição suficiente e listando as camadas que podem falhar depois do roteamento.",
    "execucao": [
     "Reconhecer que a rota correta é necessária",
     "Apontar que firewall, NAT, DNS e aplicação podem falhar independentemente",
     "Citar o gateway sem ARP como falha anterior à rota",
     "Concluir que a conectividade exige verificação por camadas"
    ],
    "resultado": "Errado. A rota correta é necessária, mas não suficiente: firewall, NAT, DNS e a própria aplicação também podem falhar mesmo com roteamento em ordem.",
    "justificativa": "A leitura ingênua reduz a conectividade ao encaminhamento; como o tráfego depende também de resolução ARP, tradução de endereços, permissão de firewall e resposta da aplicação, a rota intacta não pode garantir o desempenho fim a fim.",
    "errosFrequentes": [
     "Encerrar o diagnóstico ao encontrar rota correta",
     "Ignorar que rotas estáticas podem coexistir com NAT ou firewall bloqueantes"
    ],
    "variacao": "Se o host tivesse rota correta, ARP resolvido e ping externo funcionando, mas o site falhasse, a falha estaria em DNS, firewall de aplicação ou no serviço remoto, fora do escopo da tabela de rotas."
   }
  ]
 }
};
