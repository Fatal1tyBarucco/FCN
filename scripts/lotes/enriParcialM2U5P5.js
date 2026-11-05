const enriParcialM2U5P5 = {
 "m2-u5-t3-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "Existem ferramentas complementares de DNS (host, getent, resolvectl) e o arquivo hosts, que sobrescreve a resolução externa. O cache DNS explica por que um cliente continua usando um IP antigo após a alteração do registro. Concursos cobram esses comandos e o papel do cache na resolução de nomes.",
   "preRequisitos": [
    "DNS e registros de nome (A, MX, NS, TXT)",
    "nslookup e dig (consulta de registros DNS)"
   ],
   "objetivosObservaveis": [
    "Usar host para consulta DNS simples e concisa",
    "Usar getent hosts para consultar o resolvedor do sistema, incluindo /etc/hosts",
    "Usar resolvectl para status, query e flush-caches do cache DNS",
    "Limpar o cache DNS com ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux)"
   ],
   "competencias": [
    "Identificar ferramentas complementares de diagnóstico DNS",
    "Explicar o papel do cache DNS e como limpá-lo"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u5-t3-s1 (nslookup: consulta DNS)",
    "m2-u5-t3-s2 (dig: consulta DNS avançada)"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Ferramentas complementares de DNS e cache aparecem em questões de TI sobre diagnóstico de rede, com relevância mediana. Classificação média é estimativa pedagógica, não frequência estatística comprovada."
   }
  },
  "niveis": {
   "iniciante": "host: comando simples de consulta DNS (Linux/macOS), saída concisa. getent hosts: consulta o resolvedor do sistema, incluindo /etc/hosts antes do DNS, útil para verificar como o sistema resolve o nome. resolvectl (systemd-resolved): status, query e flush-caches. Cache DNS: sistemas e navegadores mantêm cache local; ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux) limpa o cache. Problemas de cache: DNS alterado, cliente ainda usa IP antigo até expirar. /etc/hosts e C:\\Windows\\System32\\drivers\\etc\\hosts (Windows) sobrescrevem o DNS para nomes específicos.",
   "intermediario": "O host faz consultas simples com saída concisa; o getent hosts consulta o resolvedor do sistema, incluindo /etc/hosts antes do DNS, útil para verificar como o sistema resolve o nome. O resolvectl oferece status, query e flush-caches. O cache DNS acelera consultas armazenando respostas durante o TTL, mas pode deixar o cliente com IP antigo após a mudança do registro. Limpar o cache resolve isso sem afetar roteamento, ARP ou conectividade IP.",
   "avancado": "O arquivo hosts tem prioridade sobre o DNS para nomes listados nele, override local antes de qualquer consulta externa. Útil para testes, mas vetor de sequestro se alterado maliciosamente. O cache pode existir em múltiplas camadas: sistema, navegador e aplicações, cada qual com seu TTL. O resolvectl inspeciona e esvazia o cache do systemd-resolved; ipconfig /flushdns faz o mesmo no Windows.",
   "especialista": "Ao diagnosticar falhas de resolução, considere a ordem: hosts primeiro, depois cache do sistema/navegador, e só então o DNS externo. Nome que resolve via getent hosts mas não via dig indica override em /etc/hosts. Limpar o cache (flushdns ou resolvectl flush-caches) remove respostas antigas, mas não corrige roteamento, ARP ou conectividade IP, que exigem outras ferramentas."
  },
  "comparacoes": [
   {
    "tema": "getent hosts vs dig na resolução de nomes",
    "a": {
     "rotulo": "getent hosts",
     "texto": "Consulta o resolvedor do sistema, incluindo primeiro /etc/hosts e depois o DNS; mostra como o próprio sistema resolve o nome, respeitando overrides locais."
    },
    "b": {
     "rotulo": "dig",
     "texto": "Consulta diretamente um servidor DNS, ignorando /etc/hosts; exibe resposta detalhada com status, flags e TTL, independente do resolvedor configurado no sistema."
    },
    "diferencaGabarito": "O getent hosts reflete a resolução real do sistema (incluindo /etc/hosts), enquanto o dig consulta diretamente o servidor DNS, ignorando overrides locais."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "O comando ipconfig /flushdns resolve problemas de roteamento e conectividade IP.",
    "porqueErrada": "O ipconfig /flushdns limpa apenas o cache DNS do Windows; não afeta roteamento, ARP ou conectividade IP, que são questões de camadas inferiores.",
    "versaoCorreta": "Errado. O flushdns limpa apenas o cache DNS; não afeta roteamento, ARP ou conectividade IP."
   },
   {
    "afirmacaoEquivocada": "O arquivo hosts só é consultado depois que o DNS falha em resolver um nome.",
    "porqueErrada": "O arquivo hosts é consultado antes do DNS e tem prioridade sobre ele para nomes listados nele, funcionando como override local.",
    "versaoCorreta": "Errado. O arquivo hosts é consultado antes do DNS e sobrescreve a resolução externa para nomes nele listados."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "host: consulta DNS simples e concisa",
    "getent hosts: resolução do sistema incluindo /etc/hosts",
    "resolvectl: status, query e flush-caches do cache DNS",
    "Arquivo hosts: override local nome para IP antes do DNS",
    "Cache DNS: armazena respostas durante o TTL"
   ],
   "regras": [
    "O arquivo hosts tem prioridade sobre o DNS para nomes listados nele",
    "ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux) limpa o cache DNS"
   ],
   "comparacoes": [
    "O getent hosts consulta o resolvedor do sistema incluindo /etc/hosts; o dig consulta diretamente o servidor DNS"
   ],
   "fluxos": [
    "Diagnóstico de resolução: verificar /etc/hosts, limpar cache DNS, consultar com host/getent/dig, identificar override ou cache desatualizado"
   ],
   "excecoes": [
    "O resolvectl está disponível em sistemas com systemd-resolved; em outros, use outros meios de gerenciar o cache"
   ],
   "palavrasChave": [
    "host",
    "getent",
    "resolvectl",
    "cache DNS",
    "flushdns",
    "/etc/hosts",
    "TTL",
    "resolvedor do sistema"
   ],
   "checklist": [
    "Usar host para consulta DNS simples",
    "Usar getent hosts para verificar resolução do sistema incluindo /etc/hosts",
    "Usar resolvectl query e flush-caches para gerenciar cache",
    "Limpar cache com ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux)",
    "Suspeitar de override em /etc/hosts se o nome resolver de forma diferente via dig",
    "Lembrar que limpar cache não corrige problemas de roteamento ou IP"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "O que é o arquivo hosts e como ele afeta a resolução de nomes, sobrescrevendo o DNS?",
    "dados": "Arquivo: /etc/hosts (Linux/macOS) ou C:\\Windows\\System32\\drivers\\etc\\hosts (Windows); conteúdo de exemplo: 192.168.1.10 servidor.local.",
    "conceitos": [
     "Arquivo hosts (override local nome para IP)",
     "Prioridade do hosts sobre o DNS"
    ],
    "estrategia": "Explicar que o arquivo hosts mapeia nomes para IP localmente, é consultado antes do DNS e sobrescreve a resolução externa para nomes listados nele.",
    "execucao": [
     "Identificar o caminho do arquivo hosts no sistema operacional",
     "Ler uma entrada exemplo: 192.168.1.10 servidor.local",
     "Entender que o sistema consulta hosts antes de consultar o DNS",
     "Concluir que servidor.local resolverá para 192.168.1.10 independentemente do DNS"
    ],
    "resultado": "O arquivo hosts mapeia nomes para IPs localmente, sobrescrevendo o DNS; útil para testes, mas risco de sequestro se alterado maliciosamente.",
    "justificativa": "Como o hosts é consultado antes do DNS, qualquer nome nele listado terá o IP do arquivo em vez do IP do servidor DNS, como override local.",
    "errosFrequentes": [
     "Acreditar que o hosts é consultado somente após falha do DNS",
     "Não perceber que alterações no hosts afetam imediatamente a resolução local"
    ],
    "variacao": "Se o arquivo hosts contivesse 10.0.0.5 exemplo.com, o sistema resolveria exemplo.com para 10.0.0.5, ignorando o registro DNS público."
   },
   {
    "tipo": "aplicacao",
    "problema": "O DNS de um domínio foi alterado no servidor, mas um cliente continua resolvendo o endereço IP antigo. Qual a causa e a correção?",
    "dados": "Cenário: registro DNS alterado; cliente ainda obtém IP antigo; comandos: ipconfig /flushdns ou resolvectl flush-caches.",
    "conceitos": [
     "Cache DNS local desatualizado",
     "TTL e retenção de resposta em cache"
    ],
    "estrategia": "Identificar que o cliente usa resposta antiga em cache e que limpar o cache força nova consulta ao DNS.",
    "execucao": [
     "Confirmar que o servidor DNS já tem o registro atualizado",
     "Verificar que o cliente ainda recebe o IP antigo (cache desatualizado)",
     "Executar ipconfig /flushdns no Windows ou resolvectl flush-caches no Linux",
     "Consultar novamente o nome para confirmar que agora recebe o IP novo"
    ],
    "resultado": "Cache DNS local desatualizado; a correção é limpar o cache com ipconfig /flushdns ou resolvectl flush-caches e testar novamente.",
    "justificativa": "O cache guarda a resposta antiga durante o TTL; limpar o cache descarta essa resposta e obriga o cliente a consultar o DNS novamente, obtendo o IP atualizado.",
    "errosFrequentes": [
     "Acreditar que alterar o DNS no servidor é suficiente e que o cliente atualiza imediatamente",
     "Confundir limpar cache DNS com reiniciar a rede ou o roteador"
    ],
    "variacao": "Se após limpar o cache o cliente ainda obtivesse o IP antigo, o problema poderia estar em um override no arquivo hosts ou em um cache intermediário de provedor."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'O comando flushdns resolve problemas de roteamento, conectividade IP e também DNS.'",
    "dados": "Afirmação sobre o escopo do flushdns; correção: ele limpa apenas o cache DNS, não afeta roteamento, ARP ou conectividade IP.",
    "conceitos": [
     "Escopo do ipconfig /flushdns e resolvectl flush-caches",
     "Diferença entre cache DNS e roteamento/IP"
    ],
    "estrategia": "Desmontar a afirmação mostrando que flushdns atua somente no cache DNS e não toca em roteamento, ARP ou conectividade IP.",
    "execucao": [
     "Executar ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux)",
     "Observar que apenas as entradas de cache DNS são removidas",
     "Verificar que rotas, tabelas ARP e interfaces de rede permanecem inalteradas",
     "Concluir que problemas de roteamento exigem outras ferramentas (ip route, ping, traceroute)"
    ],
    "resultado": "Errado. O flushdns limpa apenas o cache DNS; não afeta roteamento, ARP ou conectividade IP.",
    "justificativa": "A leitura ingênua associa 'rede' a qualquer comando de rede, mas o flushdns é escopo exclusivo do cache DNS; problemas de roteamento exigem diagnóstico de camadas inferiores.",
    "errosFrequentes": [
     "Acreditar que limpar o cache DNS conserta qualquer problema de rede",
     "Não distinguir falha de resolução de nome de falha de conectividade IP"
    ],
    "variacao": "Se a afirmação fosse 'flushdns resolve problemas de resolução de nome causados por cache desatualizado', ela seria correta, pois esse é exatamente o escopo do comando."
   }
  ]
 },
 "m2-u5-t4-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "O diagnóstico estruturado por camadas (bottom-up e top-down) organiza as verificações de rede do físico à aplicação, evitando chutes e isolando a causa rapidamente. Concursos cobram a ordem das verificações e a escolha da abordagem pela pista disponível, além da documentação dos testes.",
   "preRequisitos": [
    "Modelo de camadas de rede (físico, enlace, rede, transporte, aplicação)",
    "Comandos básicos de diagnóstico (ip, ping, ss, curl)"
   ],
   "objetivosObservaveis": [
    "Aplicar a abordagem bottom-up, começando pela camada física/enlace",
    "Aplicar a abordagem top-down, começando pela aplicação quando o sintoma é claro",
    "Escolher a abordagem adequada de acordo com a pista disponível",
    "Documentar cada teste e seu resultado para evitar repetição de passos"
   ],
   "competencias": [
    "Diagnóstico estruturado de falhas de rede",
    "Raciocínio por camadas para isolar a causa raiz"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u5-t3-s1 (nslookup: consulta DNS)",
    "m2-u5-t3-s3 (Ferramentas complementares e cache DNS)"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "O diagnóstico por camadas aparece em questões de TI sobre ordem de verificações de rede, com relevância mediana. Classificação média é estimativa pedagógica, não frequência estatística comprovada."
   }
  },
  "niveis": {
   "iniciante": "Método bottom-up: (1) Físico/Enlace — cabo conectado? Luz de link? ip addr mostra interface UP? (2) Rede — IP válido? Ping ao gateway funciona? Rota padrão (ip route)? (3) Transporte — porta em escuta (ss)? Firewall bloqueando? (4) Aplicação — serviço responde? HTTP 200? (5) Nome — DNS resolve? Testar IP direto separa nome de conectividade. Também top-down (aplicação para baixo) quando o sintoma aponta para a camada. Princípio: isolar a camada que falha antes de culpar a aplicação e documentar cada teste.",
   "intermediario": "No bottom-up, começa pelo físico/enlace (cabo, link, IP), depois rede (ping ao gateway, rota padrão), transporte (porta em escuta com ss, firewall) e aplicação (serviço responde, HTTP 200, DNS). Top-down é preferível quando o sintoma indica a camada, ex. HTTP 500 aponta para a aplicação. Chave: isolar a camada que falha antes de culpar a aplicação e documentar cada teste, evitando repetir passos.",
   "avancado": "O diagnóstico por camadas transforma um problema difuso ('a Internet não funciona') em hipóteses verificáveis. Teste por caminho alternativo (IP direto em vez do nome, outro resolvedor) para separar DNS de conectividade. Erro comum: pular etapas e testar a aplicação antes de confirmar link e IP, causando diagnósticos incorretos e retrabalho.",
   "especialista": "A documentação sistemática de cada teste e resultado diferencia um diagnóstico profissional de um palpite. Registre camada testada, comando, resultado e conclusão parcial, para que qualquer pessoa continue a investigação sem repetir etapas. O método escala para equipes e evita que técnicos repitam testes com interpretações divergentes."
  },
  "comparacoes": [
   {
    "tema": "Diagnóstico bottom-up vs top-down",
    "a": {
     "rotulo": "Bottom-up",
     "texto": "Começa pela camada física/enlace e sobe até a aplicação. Útil quando não há pista clara sobre onde está a falha; verifica cabo, link, IP, gateway, porta e serviço em sequência."
    },
    "b": {
     "rotulo": "Top-down",
     "texto": "Começa pela aplicação e desce até o físico. Útil quando o sintoma já aponta para uma camada (ex.: código 500 indica aplicação); desce até encontrar a causa raiz."
    },
    "diferencaGabarito": "O bottom-up é adequado sem pista prévia, verificando do físico para cima; o top-down é preferível quando o sintoma já indica a camada, descendo até a causa."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Diagnóstico por camadas é desnecessário; basta reiniciar o roteador para resolver qualquer problema de rede.",
    "porqueErrada": "Reiniciar o roteador pode mascarar o sintoma sem identificar a causa raiz, fazendo o problema reaparecer. O diagnóstico por camadas isola a camada com falha e permite correção definitiva.",
    "versaoCorreta": "Errado. Reiniciar pode mascarar o problema; o diagnóstico por camadas identifica a causa raiz e evita recorrência."
   },
   {
    "afirmacaoEquivocada": "Se o ping ao IP funciona, o problema está sempre na aplicação e não na rede.",
    "porqueErrada": "O ping ao IP testar apenas a camada de rede/conectividade; falhas de DNS, TLS/HTTP ou porta da aplicação podem impedir o acesso mesmo com ping funcionando.",
    "versaoCorreta": "Errado. Ping ao IP funcionando testa apenas conectividade de rede; ainda é preciso verificar DNS, porta (TLS/HTTP) e serviço da aplicação."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "Diagnóstico por camadas (bottom-up e top-down)",
    "Isolamento da camada que falha antes de culpar a aplicação",
    "Documentação de testes e resultados",
    "Caminho alternativo (IP direto vs nome) para separar DNS de conectividade"
   ],
   "regras": [
    "Começar pelo físico/enlace no bottom-up se não houver pista clara",
    "Usar top-down quando o sintoma já indica a camada (ex.: HTTP 500)",
    "Documentar cada teste e seu resultado para evitar repetições"
   ],
   "comparacoes": [
    "O bottom-up verifica do físico para cima; o top-down desce da aplicação até o físico"
   ],
   "fluxos": [
    "Diagnóstico: físico/enlace → rede → transporte → aplicação → nome; ou top-down do sintoma para a causa"
   ],
   "excecoes": [
    "Um código 500 aponta diretamente para a aplicação, justificando começar pelo top-down"
   ],
   "palavrasChave": [
    "bottom-up",
    "top-down",
    "camadas",
    "causa raiz",
    "documentação",
    "ping",
    "gateway",
    "DNS",
    "HTTP"
   ],
   "checklist": [
    "Verificar cabo/link e interface UP (físico/enlace)",
    "Fazer ping ao gateway e conferir rota padrão (rede)",
    "Verificar porta em escuta com ss e firewall (transporte)",
    "Testar serviço e HTTP 200 (aplicação)",
    "Verificar DNS com nslookup/dig (nome)",
    "Documentar cada teste e resultado"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Um site não carrega. Qual é a primeira verificação na abordagem bottom-up, começando pela camada física ou enlace?",
    "dados": "O cenário é o de um site que não carrega. A primeira verificação percorre a pilha de baixo para cima: começa pela camada física e de enlace, confirmando se o cabo ou o Wi-Fi está conectado, se o link está ativo e se o endereço IP foi atribuído (via ipconfig ou ip addr).",
    "conceitos": [
     "Camada física/enlace como primeiro passo do bottom-up",
     "ipconfig/ip addr para verificar IP atribuído"
    ],
    "estrategia": "Começar pela camada física/enlace: sem IP nem link ativo, o problema está abaixo da rede; não vale testar DNS ou aplicação ainda.",
    "execucao": [
     "Verificar se o cabo/Wi-Fi está conectado e há luz de link",
     "Executar ipconfig/ip addr para confirmar que a interface tem IP",
     "Se não houver IP, parar e corrigir DHCP ou o cabo antes de prosseguir",
     "Somente com IP válido, seguir para a camada de rede (ping ao gateway)"
    ],
    "resultado": "A primeira verificação percorre a pilha de baixo para cima e começa pela camada física e de enlace: sem cabo ou Wi-Fi conectado, sem link ativo e sem endereço IP atribuído, nada acima disso funciona. Sem IP, o diagnóstico para aí e a correção é no DHCP ou no cabo, antes de qualquer teste de aplicação.",
    "justificativa": "Sem camada física/enlace funcionando, nenhuma camada acima (rede, transporte, aplicação) terá chance de funcionar, então deve ser verificada primeiro.",
    "errosFrequentes": [
     "Pular a camada física e testar DNS ou aplicação sem saber se há IP",
     "Assumir que 'site não carrega' é sempre problema do servidor web"
    ],
    "variacao": "Se o computador tem IP mas o site ainda não carrega, segue-se para a camada de rede (ping ao gateway)."
   },
   {
    "tipo": "aplicacao",
    "problema": "O ping ao IP do servidor funciona, mas o site não carrega. Quais são os próximos passos?",
    "dados": "Cenário: ping ao IP funciona; próximo passo: testar DNS (nslookup/dig do nome), porta 443 (ss/curl), certificado TLS e HTTP (curl -I).",
    "conceitos": [
     "Isolamento DNS vs conectividade (ping ao IP versus nome)",
     "Teste de porta 443/TLS e HTTP (ss/curl/curl -I)"
    ],
    "estrategia": "Como o ping ao IP está OK, o problema está acima da rede: verificar DNS do nome, porta 443, TLS e HTTP.",
    "execucao": [
     "Confirmar que o ping ao IP funciona (conectividade de rede OK)",
     "Testar a resolução DNS do nome com nslookup/dig",
     "Testar a porta 443 com ss ou curl",
     "Verificar o certificado TLS e a resposta HTTP com curl -I"
    ],
    "resultado": "Como o ping ao IP funciona, os próximos passos são testar DNS do nome, porta 443 (TLS) e HTTP para isolar se o problema está em DNS, TLS ou na aplicação web.",
    "justificativa": "O ping ao IP prova que a rede opera; a falha está em DNS (nome não resolve), TLS (certificado/porta 443) ou HTTP (serviço da aplicação).",
    "errosFrequentes": [
     "Assumir que, como o ping funciona, o problema está apenas na aplicação",
     "Esquecer de testar DNS e concluir erroneamente que o servidor está fora do ar"
    ],
    "variacao": "Se o ping ao IP falhasse, o problema estaria na camada de rede (roteamento, gateway), não em DNS ou aplicação."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'Diagnóstico por camadas é desnecessário; basta reiniciar o roteador.'",
    "dados": "Afirmação sobre o diagnóstico por camadas; correção: reiniciar pode mascarar o sintoma sem identificar a causa raiz, gerando recorrência.",
    "conceitos": [
     "Limitação do reinício como diagnóstico",
     "Causa raiz versus sintoma mascarado"
    ],
    "estrategia": "Desmontar a afirmação mostrando que reiniciar o roteador limpa estados temporários mas não identifica a camada com falha, deixando o problema voltar.",
    "execucao": [
     "Reconhecer que reiniciar o roteador pode restaurar conectividade temporariamente",
     "Perceber que a causa raiz (ex.: porta bloqueada, DNS incorreto, IP conflitante) permanece",
     "Concluir que sem diagnóstico por camadas o problema tende a recorrer",
     "Defender o diagnóstico estruturado para correção definitiva"
    ],
    "resultado": "Errado. Reiniciar pode mascarar o problema; o diagnóstico por camadas identifica a causa raiz e evita recorrência.",
    "justificativa": "A leitura ingênua confunde 'sintoma sumiu' com 'problema resolvido'; o reinício limpa estado, mas o diagnóstico por camadas isola a falha para correção permanente.",
    "errosFrequentes": [
     "Acreditar que reiniciar equipamentos resolve qualquer falha de rede",
     "Não documentar a causa raiz, fazendo o problema reaparecer após o reinício"
    ],
    "variacao": "Se a afirmação fosse 'reiniciar o roteador pode restaurar conectividade temporariamente', seria correta, mas não substitui o diagnóstico por camadas."
   }
  ]
 }
};
