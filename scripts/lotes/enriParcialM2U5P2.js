const enriParcialM2U5P2 = {
 "m2-u5-t1-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "mtr, pathping e hping3 ampliam o diagnóstico além do ping e do traceroute. O mtr e o pathping observam a rota de forma contínua e estatística, revelando o salto em que a perda se concentra; o hping3 constrói pacotes sob medida para testar firewalls, MTU e portas. Provas de diagnóstico de rede cobram a finalidade de cada ferramenta, a leitura de perda por salto e o uso ético da injeção de pacotes.",
   "preRequisitos": [
    "Funcionamento do ping (ICMP echo request/reply, RTT e perda de pacotes)",
    "Leitura da saída do traceroute (saltos numerados e TTL decrecente)",
    "Noção de TCP, UDP e ICMP e do papel dos firewalls",
    "Conceito de MTU e de fragmentação de pacotes IP"
   ],
   "objetivosObservaveis": [
    "Diferenciar mtr, pathping e hping3 quanto à finalidade e ao modo de operação",
    "Interpretar uma saída de mtr/pathping com perda e latência por salto",
    "Indicar o que o hping3 permite testar (regras de firewall, MTU do caminho, portas)",
    "Selecionar a ferramenta adequada a um objetivo de diagnóstico apresentado",
    "Reconhecer a exigência de autorização para injeção de pacotes em redes de terceiros"
   ],
   "competencias": [
    "Seleção da ferramenta de diagnóstico conforme o sintoma observado",
    "Leitura estatística de rotas: distinguir perda concentrada de perda propagada",
    "Ética e legalidade no uso de ferramentas de injeção de pacotes"
   ],
   "dificuldade": "avancado",
   "relacoes": [
    "m2-u5-t1-s1 (ping: finalidade, sintaxe e interpretação) — base pontual de latência e perda que o mtr estende no tempo",
    "m2-u5-t1-s2 (traceroute/tracert: finalidade, sintaxe e interpretação) — rota instantânea que o mtr e o pathping transformam em série estatística",
    "m2-u5-t2-s3 (Verificação de rotas, ARP e vizinhos) — interpreta o caminho e a MTU que o hping3 testa"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "mtr, pathping e hping3 aparecem em itens sobre diagnóstico de rede em algumas bancas, com ênfase na diferença entre medição contínua e injeção de pacotes. A classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
   }
  },
  "niveis": {
   "iniciante": "O mtr (My Traceroute) combina ping e traceroute de modo contínuo: para cada salto, mostra a perda e a latência ao longo do tempo, o que ajuda a localizar perda intermitente que um ping único não revela. O pathping, do Windows, faz algo semelhante ao enviar pacotes por um período e calcular estatísticas por salto. O hping3 é uma ferramenta de crafting: monta pacotes TCP, UDP ou ICMP sob medida para testar regras de firewall, descobrir a MTU do caminho e sondar portas, e costuma exigir privilégios administrativos.",
   "intermediario": "mtr e pathping respondem a 'onde está a perda?': comparando cada salto, distinguem um salto que perde pacotes de um salto que apenas não responde ICMP. O hping3 responde a perguntas hipotéticas: o firewall descarta SYN na porta 443? Qual o maior pacote que atravessa o caminho sem fragmentar? Como as três ferramentas atuam em camadas e protocolos distintos (ICMP de medição versus pacotes TCP/UDP construídos), o diagnóstico se apoia em evidências diferentes.",
   "avancado": "A leitura correta de uma saída de mtr exige comparar a perda entre saltos consecutivos: se o salto 3 perde 5% e o salto 4 perde 8%, a perda se propaga e o problema tende a estar antes do salto 3; se o salto 3 perde 5% e o salto 4 volta a 0%, aquele roteador provavelmente limita a taxa de ICMP. O mesmo raciocínio se aplica ao pathping no Windows. Resultados variam com a carga da rede, e o bloqueio de ICMP pode esconder saltos reais.",
   "especialista": "No plano de diagnóstico, mtr/pathping localizam o salto problemático com visão estatística, enquanto o hping3 testa uma hipótese específica, como uma regra de firewall ou o tamanho máximo de pacote. O hping3 também é usado em auditoria ofensiva, o que impõe restrição de uso a redes próprias ou com autorização explícita, conforme as normas de segurança. O diagnóstico competente articula as três ferramentas e documenta as evidências de cada etapa."
  },
  "comparacoes": [
   {
    "tema": "mtr e pathping versus hping3 no diagnóstico de rede",
    "a": {
     "rotulo": "mtr e pathping",
     "texto": "Ferramentas de medição contínua: combinam ping e traceroute e acumulam estatísticas de perda e latência por salto durante um período. O mtr é multiplataforma e o pathping é nativo do Windows. Servem para localizar em qual salto a perda se concentra."
    },
    "b": {
     "rotulo": "hping3",
     "texto": "Ferramenta de injeção: constrói pacotes TCP, UDP ou ICMP com campos definidos pelo operador, dispensando a medição por salto. Serve para testar regras de firewall, descobrir a MTU do caminho e sondar portas. Em geral exige privilégios administrativos."
    },
    "diferencaGabarito": "mtr e pathping medem o caminho de forma contínua e estatística; o hping3 testa uma hipótese pontual por meio de pacotes construídos sob medida, sem produzir estatísticas por salto."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "mtr e traceroute executam a mesma função, diferindo apenas no nome do comando.",
    "porqueErrada": "O traceroute produz uma fotografia instantânea da rota, enquanto o mtr reenvia sondas continuamente e acumula perda e latência por salto, o que permite identificar perda intermitente.",
    "versaoCorreta": "Errado. O mtr é contínuo e estatístico: reenvia sondas e mantém histórico por salto; o traceroute mostra uma única medição instantânea da rota."
   },
   {
    "afirmacaoEquivocada": "O hping3 pode ser utilizado em qualquer rede, desde que o operador tenha privilégios administrativos na própria máquina.",
    "porqueErrada": "A injeção de pacotes em redes de terceiros configura uso não autorizado, com implicações éticas e legais; o privilégio administrativo local não concede autorização sobre a rede alvo.",
    "versaoCorreta": "Errado. O hping3 deve ser aplicado apenas em redes próprias ou com autorização explícita do responsável, independentemente dos privilégios locais do operador."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "mtr: ping e traceroute contínuos, com perda e latência acumuladas por salto",
    "pathping: equivalente do Windows, com estatísticas por salto ao longo de um período",
    "hping3: construção de pacotes TCP, UDP ou ICMP sob medida (crafting)",
    "Perda propagada versus perda local: comparação entre saltos consecutivos"
   ],
   "regras": [
    "mtr e pathping medem latência e perda; o hping3 testa hipóteses como regras de firewall e MTU",
    "O hping3 geralmente requer privilégios administrativos para criar pacotes brutos"
   ],
   "comparacoes": [
    "Medição contínua (mtr/pathping) difere de injeção de pacotes (hping3) pelo tipo de evidência produzida"
   ],
   "fluxos": [
    "Diagnosticar perda intermitente: executar mtr por alguns minutos, comparar a perda de cada salto, confirmar com teste de porta via hping3"
   ],
   "excecoes": [
    "O bloqueio de ICMP pode ocultar saltos ou inflar a perda aparente, distorcendo a leitura do mtr e do pathping"
   ],
   "palavrasChave": [
    "mtr",
    "pathping",
    "hping3",
    "perda por salto",
    "MTU",
    "firewall",
    "crafting",
    "autorização"
   ],
   "checklist": [
    "Explicar o que o mtr acrescenta ao traceroute",
    "Explicar a função do pathping no Windows",
    "Explicar o que o hping3 permite construir e testar",
    "Escolher a ferramenta adequada a um objetivo de diagnóstico",
    "Reconhecer a exigência de autorização para injeção de pacotes"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Um técnico executou ping e traceroute e ambos indicaram caminho normal, mas usuários relatam lentidão intermitente. Qual ferramenta usar e por quê?",
    "dados": "Cenário: rota com 8 saltos até o destino; ping com 0% de perda em 4 pacotes; traceroute sem saltos com asterisco; reclamações de lentidão em horários variados.",
    "conceitos": [
     "Medição contínua versus medição pontual",
     "Perda intermitente",
     "Estatística por salto"
    ],
    "estrategia": "Reconhecer que medições pontuais não capturam perda intermitente e escolher uma ferramenta que acumule estatísticas ao longo do tempo, como o mtr.",
    "execucao": [
     "Identificar que ping e traceroute oferecem apenas um retrato instantâneo",
     "Selecionar o mtr por observar a rota continuamente",
     "Executar mtr <destino> por alguns minutos",
     "Comparar a perda de cada salto para localizar onde ela se concentra"
    ],
    "resultado": "Deve-se usar o mtr: ele monitora a rota de forma contínua e identifica salto com perda intermitente que o ping pontual não captura.",
    "justificativa": "A perda intermitente, por definição, não aparece em uma amostra pequena; o mtr reenvia sondas e acumula dados por salto, o que permite separar um salto defeituoso da variação momentânea da rede.",
    "errosFrequentes": [
     "Concluir que a rede está saudável porque um ping de 4 pacotes não acusou perda",
     "Confundir mtr com traceroute e esperar que a rota instantânea revele falha periódica"
    ],
    "variacao": "Se a medição contínua mostrar perda apenas em um salto intermediário, com os saltos seguintes sem perda, a conclusão passa a ser de limitação de ICMP naquele roteador, e não de falha de enlace."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um administrador executa mtr até um servidor e obtém, no salto 3, 6% de perda com latência média de 40 ms; o salto 4 mantém latência próxima e 0% de perda. Como interpretar?",
    "dados": "Saída de mtr: salto 1 (1 ms, 0%), salto 2 (12 ms, 0%), salto 3 (40 ms, 6%), salto 4 (41 ms, 0%), salto 5 (39 ms, 0%); destino final com 0% de perda.",
    "conceitos": [
     "Perda propagada versus perda local",
     "Latência por salto",
     "Não resposta ICMP"
    ],
    "estrategia": "Comparar a perda entre saltos consecutivos: se ela não se propaga, o salto provavelmente apenas limita a taxa de ICMP em vez de descartar tráfego real.",
    "execucao": [
     "Ler a coluna de perda do salto 3 e anotar os 6%",
     "Verificar a perda dos saltos seguintes",
     "Constatar que o salto 4 e o destino estão com 0%",
     "Concluir que a perda não se propaga e tratá-la como candidata a limitação de ICMP, confirmando com o hping3"
    ],
    "resultado": "A perda de 6% no salto 3 não se propaga aos saltos seguintes, o que sugere limitação de ICMP naquele roteador, e não congestionamento real do caminho.",
    "justificativa": "Quando um roteador descarta tráfego de verdade, a perda aparece também nos saltos posteriores, pois os pacotes perdidos não chegam adiante; a ausência de perda nos saltos seguintes indica que as sondas ICMP foram apenas limitadas.",
    "errosFrequentes": [
     "Tratar toda perda exibida em um salto como falha da rede, sem verificar os saltos seguintes",
     "Ignorar a coluna de perda e decidir apenas pela latência"
    ],
    "variacao": "Se o salto 3 perdesse 6% e o salto 4 registrasse 9%, a perda estaria se propagando, e a investigação deveria recuar até o último salto sem perda para isolar o enlace responsável."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação em questão: 'o hping3 serve apenas para medir latência e perda de pacotes, como um ping com mais opções.'",
    "dados": "Afirmação reduz o hping3 a medição; funcionalidades reais: montar pacotes TCP, UDP ou ICMP com campos definidos, testar regras de firewall, descobrir MTU do caminho e sondar portas.",
    "conceitos": [
     "Injeção de pacotes",
     "Teste de regra de firewall",
     "Descoberta de MTU"
    ],
    "estrategia": "Desmontar a afirmação mostrando que o hping3 não mede estatísticas de caminho: ele produz pacotes sob medida para testar hipóteses específicas.",
    "execucao": [
     "Listar o que a afirmação atribui ao hping3",
     "Contrapor a função de crafting de pacotes TCP, UDP e ICMP",
     "Exemplificar o teste de uma regra de firewall ou da MTU",
     "Concluir que medir latência é papel do ping, do mtr e do pathping"
    ],
    "resultado": "Errado. O hping3 constrói pacotes sob medida para testar firewalls, MTU e portas; medir latência e perda é função do ping, do mtr e do pathping.",
    "justificativa": "A leitura ingênua confunde medição com injeção: o hping3 decide o conteúdo dos pacotes que envia, o que permite diagnosticar filtragem e tamanho máximo, coisas que uma medição de RTT não revela.",
    "errosFrequentes": [
     "Classificar o hping3 como evolução do ping sem perceber a diferença de finalidade",
     "Desconhecer que o teste de MTU e de firewall exige pacotes construídos, não sondas padrão"
    ],
    "variacao": "Se a questão perguntasse qual ferramenta confirma se um firewall descarta pacotes na porta 443, a resposta seria o hping3, e não o mtr nem o pathping, pois apenas ele define os campos do pacote enviado."
   }
  ]
 },
 "m2-u5-t2-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "Verificar a configuração da interface é o primeiro passo de grande parte dos diagnósticos de rede. O ipconfig, no Windows, e o ifconfig, no Linux e macOS, exibem endereço IP, máscara, gateway, DNS e MAC, além de renovarem a concessão DHCP e limparem o cache DNS. Bancas cobram as opções desses comandos e a interpretação de saídas que indicam falha de DHCP ou ausência de rota padrão.",
   "preRequisitos": [
    "Endereçamento IPv4, máscara de sub-rede e gateway padrão",
    "Funcionamento do DHCP (descoberta, oferta, requisição e concessão)",
    "Noção de cache DNS e de resolução de nomes",
    "Diferença entre interface de rede e endereço MAC"
   ],
   "objetivosObservaveis": [
    "Identificar o que o ipconfig exibe e o que cada opção faz (/all, /release, /renew, /flushdns, /displaydns)",
    "Interpretar os campos do ifconfig: inet, netmask, broadcast, ether e estado UP/DOWN",
    "Reconhecer um endereço 169.254.x.x como sinal de falha na obtenção por DHCP",
    "Renovar a concessão DHCP e limpar o cache DNS com os comandos adequados",
    "Diferenciar ipconfig (Windows), ifconfig e o comando ip (Linux atual)"
   ],
   "competencias": [
    "Inspeção da configuração de interfaces antes de qualquer conclusão diagnóstica",
    "Renovação de concessão DHCP e limpeza de cache DNS como ações corretivas"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u3-t2-s3 (DHCP: atribuição dinâmica de endereços) — origem do endereço que ipconfig exibe",
    "m2-u5-t2-s2 (comando ip e netstat/ss) — sucessor moderno do ifconfig no Linux",
    "m2-u5-t2-s3 (Verificação de rotas, ARP e vizinhos) — analisa o gateway que a configuração indica",
    "m2-u5-t3-s3 (Ferramentas complementares e cache DNS) — cache que /flushdns limpa"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "ipconfig e ifconfig são tradicionais em questões de diagnóstico de rede, sobretudo em itens que associam um sintoma ao comando correto. A classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
   }
  },
  "niveis": {
   "iniciante": "O ipconfig, no Windows, exibe a configuração das interfaces: endereço IP, máscara, gateway e servidores DNS. As opções úteis são /all, que traz o detalhamento incluindo MAC e informações de DHCP, /release, que libera o IP obtido por DHCP, /renew, que solicita nova concessão, /flushdns, que limpa o cache DNS, e /displaydns, que o exibe. O ifconfig, no Linux e no macOS, é o comando legado equivalente e também permite alterar a configuração das interfaces.",
   "intermediario": "A saída do ifconfig traz inet com o endereço IPv4, netmask, broadcast, ether com o MAC e o estado UP ou DOWN da interface. No Linux atual ele foi substituído pelo comando ip. O uso típico é verificar qual IP foi obtido, identificar a interface ativa, renovar a concessão DHCP e limpar o cache DNS quando um nome passa a resolver para um endereço antigo, o que exige interpretar cada campo antes de concluir.",
   "avancado": "A interpretação correta evita conclusões apressadas: interface sem IP ou com endereço 169.254.x.x indica falha na obtenção por DHCP; ausência do gateway esperado sugere rota padrão inexistente. Convém ainda conferir se o IP pertence à rede do gateway, pois uma configuração estática incorreta pode exibir endereço válido em sub-rede incompatível.",
   "especialista": "No diagnóstico, ipconfig e ifconfig situam o problema por camada: falha de DHCP, quando o endereço é link-local; falha de enlace, quando a interface está DOWN; falha de configuração, quando falta o gateway. A sequência renovar concessão, limpar cache DNS e re testar isola o serviço do cliente, e a comparação com o comando ip evita depender de ferramentas legadas em distribuições atuais."
  },
  "comparacoes": [
   {
    "tema": "ipconfig e ifconfig na verificação da configuração de interface",
    "a": {
     "rotulo": "ipconfig (Windows)",
     "texto": "Exibe IP, máscara, gateway e DNS das interfaces, com opções /all (MAC, DHCP e servidores), /release, /renew, /flushdns e /displaydns. Comando nativo do Windows, sem equivalentes de configuração de interface no Linux."
    },
    "b": {
     "rotulo": "ifconfig (Linux e macOS)",
     "texto": "Exibe e altera a configuração das interfaces, com os campos inet (IPv4), netmask, broadcast, ether (MAC) e o estado UP ou DOWN. Comando legado, hoje substituído pelo comando ip no Linux."
    },
    "diferencaGabarito": "ipconfig é o comando do Windows e ifconfig o do Linux e macOS, sendo este último legado e substituído pelo ip; ambos leem a configuração, mas ifconfig também a modifica."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Um endereço 169.254.x.x indica que a interface recebeu uma configuração normal do servidor DHCP.",
    "porqueErrada": "A faixa 169.254.0.0/16 é de endereço link-local, atribuído pelo próprio host quando a obtenção por DHCP falha; não há concessão de servidor algum envolvida.",
    "versaoCorreta": "Errado. O endereço 169.254.x.x é link-local (APIPA) e indica falha na obtenção por DHCP; deve-se verificar o servidor DHCP, o cabo ou a rede sem fio."
   },
   {
    "afirmacaoEquivocada": "A opção /flushdns do ipconfig exibe o conteúdo do cache de resolução de nomes.",
    "porqueErrada": "O /flushdns limpa o cache do resolvedor local; quem exibe o conteúdo das entradas em cache é o /displaydns.",
    "versaoCorreta": "Errado. O /flushdns limpa o cache DNS; para visualizar as entradas em cache utiliza-se /displaydns."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "ipconfig: exibe e gerencia a configuração de interface no Windows",
    "ifconfig: exibe e altera interfaces no Linux e macOS, em desuso",
    "Comando ip: sucessor do ifconfig no Linux atual",
    "Endereço link-local 169.254.x.x: sinal de falha de DHCP"
   ],
   "regras": [
    "/all detalha a configuração, incluindo MAC, DHCP e servidores DNS",
    "/release libera o IP obtido por DHCP e /renew solicita nova concessão",
    "/flushdns limpa o cache DNS, enquanto /displaydns o exibe"
   ],
   "comparacoes": [
    "ifconfig é legado no Linux, enquanto o comando ip é a ferramenta atual da suíte iproute2"
   ],
   "fluxos": [
    "Diagnóstico de conectividade: ler a configuração, identificar o IP e o gateway, renovar o DHCP, limpar o cache DNS e testar novamente"
   ],
   "excecoes": [
    "Interface sem IP ou com 169.254.x.x falha em DHCP mesmo com o cabo conectado, pois o problema pode estar no servidor ou na oferta"
   ],
   "palavrasChave": [
    "ipconfig",
    "ifconfig",
    "ip",
    "/all",
    "/renew",
    "/flushdns",
    "APIPA",
    "gateway"
   ],
   "checklist": [
    "Executar ipconfig e identificar IP, máscara e gateway",
    "Usar ipconfig /all para obter MAC e dados de DHCP",
    "Diferenciar /release de /renew",
    "Reconhecer 169.254.x.x como falha de DHCP",
    "Limpar o cache DNS com /flushdns e conferir com /displaydns"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Ao executar ipconfig em uma estação Windows, a saída mostra IPv4 Address como 169.254.10.44 e o gateway não aparece. O que isso indica?",
    "dados": "Saída: Adaptador Ethernet; IPv4 Address: 169.254.10.44; Subnet Mask: 255.255.0.0; Gateway padrão: ausente; DHCP habilitado.",
    "conceitos": [
     "Endereço link-local APIPA",
     "Atribuição por DHCP",
     "Gateway padrão"
    ],
    "estrategia": "Reconhecer a faixa 169.254.0.0/16 como atribuição automática local, sinal de que o DHCP não respondeu, e concluir que a configuração está incompleta.",
    "execucao": [
     "Identificar que 169.254.10.44 pertence à faixa link-local",
     "Interpretar a máscara 255.255.0.0 como padrão dessa atribuição",
     "Constatar a ausência de gateway padrão",
     "Concluir pela falha de DHCP e verificar cabo, Wi-Fi e servidor"
    ],
    "resultado": "Indica falha de DHCP: a interface autoatribuiu um endereço link-local 169.254.10.44 e ficou sem gateway, devendo-se verificar o servidor DHCP e o enlace.",
    "justificativa": "A faixa link-local só é usada quando o host não obtém endereço de um servidor DHCP; a ausência de gateway decorre da mesma falha, pois nenhuma concessão completa foi recebida.",
    "errosFrequentes": [
     "Tratar 169.254.10.44 como endereço válido da rede corporativa",
     "Culpar o DNS antes de verificar se a própria camada de rede está sem endereço"
    ],
    "variacao": "Se o ipconfig mostrasse 192.168.1.20 com gateway 192.168.1.1, a camada de rede estaria configurada e a investigação deveria seguir para o teste de conectividade com o gateway."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um site mudou de servidor e, apesar de o IP novo estar correto no DNS, a estação Windows continua acessando o endereço antigo. Qual comando corrige isso?",
    "dados": "Cenário: estação Windows 11; mudança de DNS registrada; acesso ao site ainda resolve o IP antigo; cabo e Wi-Fi funcionando para outros hosts.",
    "conceitos": [
     "Cache do resolvedor local",
     "Flushdns",
     "Renovação de concessão"
    ],
    "estrategia": "Suspeitar do cache do resolvedor local, limpá-lo com ipconfig /flushdns e confirmar a resolução com nslookup ou dig.",
    "execucao": [
     "Levantar a hipótese de cache DNS desatualizado",
     "Executar ipconfig /flushdns para limpar o cache do resolvedor",
     "Testar o nome com nslookup ou dig",
     "Confirmar que o acesso passa a usar o IP novo"
    ],
    "resultado": "Deve-se executar ipconfig /flushdns, que limpa o cache do resolvedor local; em seguida testar com nslookup ou dig para confirmar o IP novo.",
    "justificativa": "O resolvedor local guarda respostas anteriores e, sem TTL vencido, continua devolvendo o IP antigo; limpar o cache força uma nova consulta ao servidor DNS autoritativo.",
    "errosFrequentes": [
     "Usar /displaydns esperando limpar o cache, quando ele apenas exibe as entradas",
     "Executar /renew e esperar que a renovação de IP altere a resolução de nomes"
    ],
    "variacao": "Se após o /flushdns o site ainda resolvesse o IP antigo, o cache estaria em um proxy ou no servidor DNS da rede, e a verificação deveria partir para o teste da porta e do caminho até o serviço."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação em questão: 'ipconfig /renew sempre atribui à estação um endereço IP diferente do anterior.'",
    "dados": "Afirmação sobre /renew; comportamento real: /renew envia requisição DHCP ao servidor e, se a concessão anterior ainda for válida, o servidor costuma devolver o mesmo endereço.",
    "conceitos": [
     "Renovação de concessão DHCP",
     "Lease válido",
     "/release e /renew"
    ],
    "estrategia": "Desmontar a afirmação distinguindo renovar uma concessão vigente de obtê-la novamente após liberação completa.",
    "execucao": [
     "Descrever o que a afirmação espera do /renew",
     "Explicar que /renew pede a renovação da concessão existente",
     "Notar que o servidor tende a devolver o mesmo IP se o lease for válido",
     "Concluir que a sequência /release e /renew não garante endereço diferente"
    ],
    "resultado": "Errado. O /renew solicita renovação ao servidor DHCP e geralmente devolve o mesmo IP; /release seguido de /renew pode gerar endereço diferente, mas sem garantia.",
    "justificativa": "A leitura ingênua trata renovação como sorteio de endereço; o protocolo DHCP conserva o vínculo com o cliente enquanto a concessão é válida, de modo que a continuidade do endereço é o comportamento esperado.",
    "errosFrequentes": [
     "Confundir /renew com /release e achar que o IP sempre muda",
     "Assumir que a mudança de endereço é a forma correta de resolver conflito de IP sem verificar o servidor"
    ],
    "variacao": "Se a questão descrevesse um conflito de IP na rede, a conduta seria /release, verificador do servidor DHCP e reserva do endereço, e não a expectativa de que o /renew resolva sozinho."
   }
  ]
 }
};
