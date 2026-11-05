const enriParcialM2U5P6 = {
 "m2-u5-t4-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "A mesma tela de \"site não abre\" pode nascer de DNS, conectividade, roteamento ou aplicação, e cada causa exige uma correção distinta. Em concurso, a banca apresenta cenários em que o sintoma é idêntico e só o teste diferencial revela a camada afetada: comparar nome com IP, pingar o gateway, pingar um IP externo e por fim testar a porta do serviço. Errar essa atribuição leva o candidato a consertar a coisa errada — por exemplo, culpar o provedor quando o resolvedor de nomes está fora do ar.",
   "preRequisitos": [
    "Diagnóstico estruturado por camadas (físico até aplicação)",
    "Uso de ping, nslookup/dig e traceroute",
    "Noção de gateway, rota padrão e serviço de nomes"
   ],
   "objetivosObservaveis": [
    "Reconhecer os sintomas típicos de falha de DNS, conectividade, roteamento e aplicação",
    "Escolher o teste diferencial que isola a camada afetada em um cenário dado",
    "Indicar a correção correspondente a cada tipo de falha",
    "Interpretar uma saída de ping/traceroute para decidir a hipótese seguinte"
   ],
   "competencias": [
    "Diagnóstico diferencial por eliminação de hipóteses",
    "Decisão de correção a partir da camada identificada",
    "Leitura de mensagens de ferramentas de rede"
   ],
   "dificuldade": "avancado",
   "relacoes": [
    "m2-u5-t4-s1 (Diagnóstico estruturado por camadas) — método base que ordena os testes",
    "m2-u5-t3-s1 (nslookup: consulta DNS) — confirma ou descarta falha de resolução",
    "m2-u5-t1-s1 (ping: finalidade, sintaxe e interpretação) — teste de enlace e de roteamento",
    "m2-u3-t4-s1 (SMTP, POP3 e IMAP no contexto de redes) — serviço usado no exemplo de falha de aplicação"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": " e exploram a distinção entre as falhas em itens de certo/errado e em cenários de diagnóstico; costuma cobrar a associação entre mensagem de erro e camada. Tema de aplicação, exige raciocínio sobre testes diferenciais, e não decoreba de portas. A classificação é qualitativa e pedagógica, sem estatística de incidência."
   }
  },
  "niveis": {
   "iniciante": "DNS: 'ERR_NAME_NOT_RESOLVED', nslookup falha, mas IP direto funciona. Conectividade (enlace/físico): sem IP, sem link, ping ao gateway falha. Roteamento: ping ao gateway ok, mas ping a IP externo falha, 'destination net unreachable', traceroute para no gateway. Aplicação: ping e DNS ok, mas HTTP falha (4xx/5xx, timeout na porta), certificado inválido. A distinção orienta a correção: DNS -> verificar resolvedor/cache/delegação; conectividade -> cabo/Wi-Fi/DHCP; roteamento -> rota padrão/NAT/provedor; aplicação -> serviço, porta, certificado e código.",
   "intermediario": "O procedimento isola a camada por etapas: se o nome não resolve mas o IP responde, a falha é de DNS; se nem o gateway responde, o problema está no enlace, no cabo, no Wi-Fi ou na configuração de IP; se o gateway responde e o destino externo não, falta rota ou o provedor está indisponível; se ambos respondem e o serviço falha, a causa está na aplicação, na porta ou no certificado. Cada teste deve descartar uma hipótese antes de passar à seguinte, para não confundir sintoma com causa.",
   "avancado": "Um único sintoma admite causas em camadas distintas, e a ordem dos testes define a economia do diagnóstico. \"Destination net unreachable\" vindo do próprio gateway indica rota ausente na tabela local; vindo de um roteador intermediário no traceroute, indica falha no provedor. Ausência de resposta ao ping não prova queda de rede: firewall pode descartar ICMP, e a conectividade continua íntegra. Por isso o diagnóstico diferencial crucia evidências: IP/diretório, resposta do gateway, resposta externa e estado da porta.",
   "especialista": "No diagnóstico de campo, a camada é apenas o ponto de partida: após isolar a falha, o técnico mede impacto e decide a correção. Falha de DNS aponta para resolvedor, cache ou delegação; falha de roteamento, para rota padrão, NAT ou contrato com o provedor; falha de aplicação, para serviço, porta, certificado e código. Em arquiteturas com balanceadores e proxies, o sintoma aparece na borda, mas a causa costuma estar no backend, o que exige correlacionar registros de diferentes camadas antes de agir."
  },
  "comparacoes": [
   {
    "tema": "Falha de DNS versus falha de conectividade",
    "a": {
     "rotulo": "Falha de DNS",
     "texto": "O nome não é resolvido (\"ERR_NAME_NOT_RESOLVED\", NXDOMAIN no nslookup), mas o acesso ao mesmo servidor pelo endereço IP funciona normalmente. A camada física e a rede estão íntegras; a resolução de nomes é que falha."
    },
    "b": {
     "rotulo": "Falha de conectividade",
     "texto": "A interface fica sem endereço válido, o link cai ou o ping ao gateway da própria rede local não responde. Nenhum teste além do enlace chega a ser executado, porque não há caminho até o destino."
    },
    "diferencaGabarito": "O teste que separa as duas hipóteses é acessar o destino por IP: se funcionar, a falha é de DNS; se nem o gateway responde, a falha é de conectividade. Confundir os dois casos leva a verificar o resolvedor quando o problema é o cabo ou o DHCP."
   },
   {
    "tema": "Falha de roteamento versus falha de aplicação",
    "a": {
     "rotulo": "Falha de roteamento",
     "texto": "O gateway responde ao ping, mas o ping a um endereço IP externo falha com \"destination net unreachable\" e o traceroute para no primeiro salto. O caminho até a saída da rede local está ausente ou bloqueado."
    },
    "b": {
     "rotulo": "Falha de aplicação",
     "texto": "Ping a hosts internos e externos e resolução de nomes funcionam, mas o serviço não responde: erros HTTP 4xx/5xx, tempo esgotado na conexão com a porta ou certificado inválido."
    },
    "diferencaGabarito": "Se o IP externo responde e o serviço falha, a rede provou que entrega pacotes: a causa está na aplicação, na porta ou no certificado. Culpar o roteamento nesse cenário é erro clássico de gabarito, porque a conectividade já foi comprovada."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Se o site não abre, o problema é da Internet.",
    "porqueErrada": "Trata sintoma genérico como causa única. A página pode falhar por resolução de nomes, por rota ausente na rede local ou por erro do próprio serviço, e as correções são completamente diferentes.",
    "versaoCorreta": "Antes de concluir, aplique testes diferenciais: compare acesso por nome e por IP, pingue o gateway e depois um IP externo. Só então atribua a falha a DNS, conectividade, roteamento ou aplicação."
   },
   {
    "afirmacaoEquivocada": "O ping ao gateway funcionando garante acesso à Internet.",
    "porqueErrada": "O gateway é apenas o primeiro salto. O roteamento externo, o NAT e o enlace com o provedor podem falhar depois dele, e o ping a um endereço externo continua sem resposta.",
    "versaoCorreta": "Confirme a conectividade de saída pingando um endereço IP externo conhecido; a resposta do gateway isoladamente só comprova o enlace local."
   },
   {
    "afirmacaoEquivocada": "Um erro HTTP 500 indica falha na rede do usuário.",
    "porqueErrada": "O código 500 é uma resposta do servidor, logo o pacote percorreu a rede e chegou ao destino. A falha ocorreu no processamento da aplicação ou do serviço, não no transporte.",
    "versaoCorreta": "Erro 500 é falha da aplicação ou do servidor: a rede funcionou. A investigação deve recair sobre o serviço, seus registros e o código, não sobre o enlace."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "Falha de DNS: nome não resolvido, acesso por IP preservado",
    "Falha de conectividade: interface sem IP, link down ou gateway inacessível",
    "Falha de roteamento: gateway responde, destino externo não",
    "Falha de aplicação: rede e nomes íntegros, serviço indisponível",
    "Teste diferencial: comparação que isola a camada afetada"
   ],
   "regras": [
    "Se o nome falha e o IP responde, a falha é de resolução de nomes",
    "Se o gateway não responde, a falha é de enlace ou de configuração local",
    "Se o gateway responde e o IP externo não, a falha é de roteamento",
    "Se tudo na rede responde e o serviço falha, a falha é da aplicação"
   ],
   "comparacoes": [
    "DNS x conectividade: uma preserva o acesso por IP, a outra impede qualquer teste além do enlace",
    "Roteamento x aplicação: na primeira o caminho falta, na segunda o caminho funciona e o serviço falha"
   ],
   "fluxos": [
    "Testar o nome; testar o gateway; testar um IP externo; testar a porta e o serviço — nessa ordem, eliminando uma camada por vez"
   ],
   "excecoes": [
    "Firewall que descarta ICMP pode fazer o ping falhar em rede saudável; bloquear o ping não é prova de queda de conectividade"
   ],
   "palavrasChave": [
    "sintoma",
    "causa",
    "camada",
    "teste diferencial",
    "gateway",
    "resolução de nomes"
   ],
   "checklist": [
    "Reconheço os sintomas de cada tipo de falha?",
    "Sei qual teste separa uma hipótese da outra?",
    "Consigo indicar a correção de cada caso?",
    "Evito concluir \"falta de Internet\" sem pingar um IP externo?"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Um site não abre no navegador, mas o ping ao endereço IP 93.184.216.34 responde normalmente. Qual é a suspeita e qual teste a confirma?",
    "dados": "Domínio acessado: exemplo.com.br. Ping ao IP 93.184.216.34: 4 respostas recebidas. Ping ao nome exemplo.com.br: falha. Consulta nslookup exemplo.com.br: \"server can't find\". Acesso a outros sites por nome: normal.",
    "conceitos": [
     "Resolução de nomes por DNS",
     "Distinção entre falha de DNS e falha de conectividade"
    ],
    "estrategia": "Como o acesso por IP funciona, a parte de rede está comprovada. Compara-se então o comportamento do nome com o do IP para localizar a falha na camada de aplicação, no serviço de nomes.",
    "execucao": [
     "Pingar o endereço IP do site e confirmar resposta, o que descarta conectividade e roteamento",
     "Repetir o acesso pelo nome e observar a mensagem de falha do navegador",
     "Consultar o nome com nslookup ou dig para verificar se o servidor responde a consulta",
     "Testar outro servidor DNS, se disponível, para separar falha de resolvedor de falha de delegação"
    ],
    "resultado": "A suspeita é falha de DNS: o nome não resolve, embora o IP responda. Se o nslookup também falhar, a causa está no resolvedor, no cache ou na delegação do domínio, e não na rede física.",
    "justificativa": "A conectividade foi comprovada pelo ping bem-sucedido ao IP, e a resolução de nomes foi refutada pela consulta que não retorna endereço. Como o IP direto funciona e o nome não, a falha está restrita ao serviço que traduz nomes em endereços.",
    "errosFrequentes": [
     "Concluir \"a Internet caiu\" sem testar o acesso por IP, ignorando que apenas o nome falha",
     "Confundir falha de resolução com falha do site: se o IP responde, o servidor está alcançável e a página pode estar com problemas próprios"
    ],
    "variacao": "O ping ao IP também falha, mas o ping ao gateway responde: a suspeita passa a ser de roteamento, e o teste seguinte é pingar um endereço IP externo e examinar o traceroute."
   },
   {
    "tipo": "aplicacao",
    "problema": "Em uma estação da rede 192.168.1.0/24, o ping ao gateway 192.168.1.1 responde, mas o ping a 8.8.8.8 retorna \"destination net unreachable\". Qual o diagnóstico e a correção?",
    "dados": "IP da estação: 192.168.1.50/24. Gateway: 192.168.1.1 (responde em 2 ms). Destino: 8.8.8.8 (\"destination net unreachable\" do próprio gateway). Traceroute: interrompido no primeiro salto. Outras estações da mesma rede: mesmo sintoma.",
    "conceitos": [
     "Rota padrão e função do gateway",
     "Mensagem destination net unreachable"
    ],
    "estrategia": "Com o gateway respondendo, o enlace local está íntegro. A falha ocorre ao encaminhar pacotes para fora da rede local, o que aponta para rota padrão ausente, NAT desativado ou indisponidade do provedor.",
    "execucao": [
     "Confirmar que o gateway responde ao ping, provando o enlace local",
     "Pingar um segundo endereço IP externo para verificar que o sintoma não é do destino específico",
     "Consultar a tabela de rotas da estação e verificar a existência da rota padrão pelo gateway",
     "Verificar no roteador a configuração de NAT e o estado do enlace com o provedor"
    ],
    "resultado": "Diagnóstico: falha de roteamento. A rota padrão está ausente ou o NAT não está configurado no roteador; a correção é restaurar a rota padrão e a tradução de endereços, ou acionar o provedor se o enlace externo estiver caído.",
    "justificativa": "A resposta do gateway comprova a conectividade local, e a mensagem \"destination net unreachable\" indica que não há caminho conhecido até a rede de destino. Como o traceroute para no primeiro salto, a falha está entre a rede local e a Internet, e não na estação.",
    "errosFrequentes": [
     "Atribuir o sintoma ao cabo ou ao Wi-Fi, já refutados pela resposta do gateway",
     "Reiniciar a estação sem verificar a rota padrão, o que não corrige a ausência de caminho externo"
    ],
    "variacao": "O ping a 8.8.8.8 funciona, mas o site por nome não abre: volta-se ao teste de DNS, consultando o nome com nslookup para inspecionar o resolvedor e o cache."
   },
   {
    "tipo": "erro",
    "problema": "O ping a 8.8.8.8 retorna \"request timed out\" e o operador conclui que a Internet está fora, acionando o provedor. No entanto, os usuários navegam normalmente. Onde está o erro de leitura?",
    "dados": "Ping 8.8.8.8: \"request timed out\" em 4 tentativas. Navegador: páginas HTTP e HTTPS abrendo normalmente. nslookup: nomes resolvidos. traceroute: saltos completos até o destino. Política de firewall da borda: ICMP de entrada descartado.",
    "conceitos": [
     "ICMP como ferramenta de diagnóstico, não como prova de conectividade",
     "Descarte seletivo de pacotes por firewall"
    ],
    "estrategia": "Cruzam-se as evidências: se o tráfego HTTP flui e o traceroute completa os saltos, a rede entrega pacotes. O tempo esgotado do ping reflete uma escolha de filtragem, não uma ausência de caminho.",
    "execucao": [
     "Testar um serviço que exija conectividade real, como abrir uma página ou consultar um nome",
     "Executar o traceroute até o destino e verificar se os saltos intermediários respondem",
     "Consultar a política de firewall da borda quanto ao tratamento do ICMP",
     "Registrar que o ping é inconclusivo quando o ICMP é filtrado e adotar outro teste como referência"
    ],
    "resultado": "A leitura ingênua está errada: a conectividade existe e o tempo esgotado do ping decorre do descarte de ICMP pelo firewall. A Internet não está fora, e o acionamento do provedor seria infundado.",
    "justificativa": "O ping depende de mensagens ICMP, que podem ser bloqueadas sem afetar o tráfego TCP. Como as páginas abrem e o traceroute completa o caminho, há entrega de pacotes; logo, a ausência de resposta ao ping não pode ser lida como queda de conectividade.",
    "errosFrequentes": [
     "Tratar o ping como prova absoluta de conectividade, ignorando a filtragem de ICMP",
     "Descartar o teste por completo, quando o correto é interpretá-lo junto a outras evidências"
    ],
    "variacao": "Além do ping, o traceroute também expira em todos os saltos e nenhuma página abre: agora a hipótese de falha de conectividade se sustenta, e o teste seguinte é verificar o gateway e o enlace."
   }
  ]
 },
 "m2-u5-t4-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "Mensagens de erro são pistas, não diagnósticos: cada uma indica a camada envolvida e a causa provável, e a prova cobra justamente essa associação entre mensagem, camada e conduta. Leitura apressada transforma um tempo esgotado em \"host desligado\" e um recusado em \"rede fora\", gerando a correção errada. Dominar o mapa mensagem → camada → causa → próximo teste permite resolver cenários simulados sem decorar listas soltas.",
   "preRequisitos": [
    "Ferramentas de diagnóstico (ping, traceroute, clientes TCP)",
    "Modelo de camadas e noção de porta e serviço",
    "Diferença entre falha de rede, de transporte e de aplicação"
   ],
   "objetivosObservaveis": [
    "Reconhecer as mensagens de erro mais comuns em diagnóstico de redes",
    "Mapear cada mensagem à camada e à causa provável",
    "Escolher o próximo teste que confirma ou descarta a hipótese",
    "Distinguir recusa de conexão de tempo esgotado quanto ao comportamento do firewall"
   ],
   "competencias": [
    "Interpretação de mensagens de erro em múltiplas camadas",
    "Seleção do próximo teste de diagnóstico",
    "Leitura de códigos de status HTTP e de erro de TLS"
   ],
   "dificuldade": "avancado",
   "relacoes": [
    "m2-u5-t4-s1 (Diagnóstico estruturado por camadas) — ordem de eliminação de hipóteses",
    "m2-u5-t4-s2 (Diferenças entre falha de DNS, conectividade, roteamento e aplicação) — classifica o sintoma antes da mensagem",
    "m2-u5-t1-s2 (traceroute/tracert: finalidade, sintaxe e interpretação) — interpreta \"TTL expired in transit\"",
    "m3-u2-t1-s1 (Calendários e convites de reunião) — erros de aplicação em videoconferência"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Bancas como e associam a mensagem à camada em itens de certo/errado, e apresenta cenários em que o candidato deve escolher a conduta correta diante de um erro específico. Exige raciocínio sobre camadas, não memorização de listas. A classificação é qualitativa e pedagógica, sem estatística de incidência."
   }
  },
  "niveis": {
   "iniciante": "Cada mensagem de erro aponta uma camada distinta, e o significado muda conforme o texto: 'Request timed out' no ping indica host desligado, firewall bloqueando o ICMP ou perda de pacotes; 'Destination Host Unreachable' aponta ARP que falhou ou rota ausente; 'TTL expired in transit' revela laço de roteamento ou TTL muito baixo; 'Connection refused' significa porta fechada, por serviço parado ou firewall em modo REJECT; 'Connection timed out' indica pacote descartado, por firewall em modo DROP ou host inacessível; 'ERR_NAME_NOT_RESOLVED' e 'NXDOMAIN' pertencem à camada de DNS; 'ERR_CERT_AUTHORITY_INVALID' acusa certificado não confiável; '502 Bad Gateway' mostra que o proxy reverso não alcançou o servidor de aplicação; '503' indica sobrecarga ou manutenção; '404' corresponde a recurso inexistente; '401' a falha de autenticação; e '403' a falta de permissão.",
   "intermediario": "Cada mensagem pertence a uma camada: unreachable e TTL expired indicam problemas de rede; refused e timed out indicam comportamento de transporte; códigos 4xx e 5xx indicam respostas da aplicação. A conduta é sempre o próximo teste que confirma ou descarta a hipótese. Diante de refused, verifica-se se o serviço está em escuta na porta; diante de timed out, verifica-se firewall e rota; diante de NXDOMAIN, testa-se a resolução com outro servidor.",
   "avancado": "Refused e timed out separam duas políticas de firewall: REJECT responde com recusa, DROP descarta em silêncio. Unreachable vem do próprio hospedeiro ou de um roteador sem rota, enquanto timed out indica ausência de resposta. No HTTP, 4xx atribui a falha ao cliente e 5xx ao servidor; 502 localiza a falha entre o proxy e o backend, e 503 indica indisponibilidade temporária. O diagnóstico correto cruza a camada da mensagem com o resultado dos testes já feitos.",
   "especialista": "Em incidentes reais, várias mensagens convivem e a causa raiz só aparece na correlação: timeouts generalizados com 502 na borda apontam para o backend; refused em uma porta específica aponta para o serviço. É preciso distinguir norma de sintoma — o código HTTP é resposta do servidor, não da rede — e escolher a evidência que fecha o caso. A leitura de registros de aplicação, firewall e roteador, nessa ordem, evita corrigir a camada errada."
  },
  "comparacoes": [
   {
    "tema": "Connection refused versus Connection timed out",
    "a": {
     "rotulo": "Connection refused",
     "texto": "O hospedeiro responde ativamente com uma recusa: a porta não tem serviço em escuta ou o firewall aplica política REJECT. Prova que a máquina está alcançável e ativa na rede."
    },
    "b": {
     "rotulo": "Connection timed out",
     "texto": "Nenhuma resposta chega dentro do prazo: o pacote foi descartado por firewall com DROP, houve perda, congestionamento ou o hospedeiro está inacessível. Não prova nem que a porta está fechada nem que a máquina caiu."
    },
    "diferencaGabarito": "A recusa é uma resposta do destino; o tempo esgotado é ausência de resposta. Concluir \"host desligado\" a partir de um tempo esgotado é erro, porque descarte silencioso de firewall produz o mesmo sintoma."
   },
   {
    "tema": "Destination Host Unreachable versus Request timed out",
    "a": {
     "rotulo": "Destination Host Unreachable",
     "texto": "Resposta afirmativa de falha: o emissor não encontrou rota ou não resolveu o endereço físico do vizinho. Indica problema de roteamento ou de ARP na camada de rede."
    },
    "b": {
     "rotulo": "Request timed out",
     "texto": "Silêncio do destino após o prazo: pode ser hospedeiro desligado, ICMP filtrado, perda de pacotes ou caminho congestionado. Não identifica a camada sem teste adicional."
    },
    "diferencaGabarito": "Unreachable informa que não há caminho; timed out apenas informa que não houve resposta. Somente o unreachable autoriza conclusão imediata de falha de roteamento ou de ARP."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Connection refused indica queda da rede.",
    "porqueErrada": "A mensagem é uma resposta do hospedeiro de destino, o que pressupõe entrega de pacotes pela rede. Se a rede estivesse caída, não existiria resposta alguma, e sim um tempo esgotado.",
    "versaoCorreta": "Connection refused indica que o hospedeiro está ativo, mas a porta não aceita conexões: serviço parado ou firewall com política de rejeição."
   },
   {
    "afirmacaoEquivocada": "NXDOMAIN é um problema do servidor web.",
    "porqueErrada": "NXDOMAIN é resposta do serviço de nomes, não do serviço HTTP. O servidor web pode estar íntegro; o que falhou foi a tradução do nome em endereço IP.",
    "versaoCorreta": "NXDOMAIN indica que o nome não existe ou não resolve: a falha está no DNS, no cache ou na delegação do domínio, e não no servidor web."
   },
   {
    "afirmacaoEquivocada": "Timeout sempre significa que o host está desligado.",
    "porqueErrada": "Tempo esgotado também ocorre com firewall descartando pacotes, com perda de pacotes, congestionamento ou rota ausente. A ausência de resposta não identifica a causa por si só.",
    "versaoCorreta": "Timeout é ausência de resposta e admite várias causas; a máquina ativa com porta fechada produz Connection refused, enquanto firewall com DROP produz tempo esgotado."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "Timed out: ausência de resposta dentro do prazo",
    "Unreachable: resposta de falha por rota ou ARP ausente",
    "TTL expired: laço de roteamento ou TTL reduzido",
    "Refused: porta fechada, hospedeiro ativo",
    "NXDOMAIN: nome inexistente ou não resolvido",
    "502 e 503: falha do proxy ou indisponibilidade do serviço"
   ],
   "regras": [
    "Mensagem → camada → causa provável → próximo teste",
    "Firewall com DROP gera timed out; com REJECT gera refused",
    "Código 4xx atribui a falha ao cliente; 5xx, ao servidor"
   ],
   "comparacoes": [
    "Refused x timed out: um é resposta ativa de recusa, o outro é silêncio do destino",
    "4xx x 5xx: o primeiro culpa a requisição do cliente, o segundo o processamento no servidor"
   ],
   "fluxos": [
    "Identificar a mensagem; situar a camada; levantar a causa provável; executar o teste que confirma ou descarta a hipótese"
   ],
   "excecoes": [
    "ICMP filtrado produz timed out em rede funcional; certificado expirado produz erro de TLS mesmo com conectividade perfeita"
   ],
   "palavrasChave": [
    "mensagem",
    "camada",
    "causa",
    "hipótese",
    "diagnóstico",
    "próximo teste"
   ],
   "checklist": [
    "Reconheço as mensagens mais comuns?",
    "Consigo mapear cada uma à camada e à causa?",
    "Sei situar a camada antes de agir?",
    "Escolho o teste seguinte em vez de supor a causa?"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Ao tentar abrir uma sessão SSH com o comando ssh admin@10.0.0.5, o cliente retorna \"Connection refused\" na porta 22. Como interpretar a mensagem?",
    "dados": "Destino: 10.0.0.5, porta 22 (SSH). Mensagem: \"Connection refused\". Ping a 10.0.0.5: responde em 1 ms. Serviço sshd no destino: parado. Firewall do destino: sem regra para a porta 22.",
    "conceitos": [
     "Connection refused como resposta ativa do destino",
     "Relação entre porta e serviço em escuta"
    ],
    "estrategia": "A recusa prova que o destino respondeu, portanto a conectividade foi descartada. A investigação se restringe à porta 22: serviço em escuta, firewall local ou permissão de acesso.",
    "execucao": [
     "Pingar o destino para confirmar que a máquina está alcançável",
     "Testar outra porta do mesmo hospedeiro para verificar que a recusa é específica da 22",
     "Verificar no destino se o serviço SSH está em escuta na porta 22",
     "Inspecionar as regras de firewall para a porta 22 e o estado do serviço"
    ],
    "resultado": "A mensagem indica hospedeiro ativo e rede íntegra, com a porta 22 fechada. A correção é iniciar o serviço SSH ou liberar a porta no firewall.",
    "justificativa": "Só é possível recusar uma conexão se o destino recebeu o pedido e respondeu; logo a camada de rede funciona. A recusa localiza a falha na camada de transporte, na porta, e a conduta seguinte é verificar o serviço em escuta.",
    "errosFrequentes": [
     "Interpretar a recusa como queda de rede, ignorando que ela é uma resposta do destino",
     "Reiniciar o roteador ou o cabo, quando a falha está no serviço ou na porta"
    ],
    "variacao": "A mesma tentativa retorna \"Connection timed out\" em vez de recusa: agora a hipótese é descarte de pacotes, e o teste seguinte é verificar a rota e as regras de firewall no caminho."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um navegador exibe \"ERR_CERT_DATE_INVALID\" ao acessar o portal da organização, enquanto outros sites abrem normalmente. Qual a causa provável e a correção?",
    "dados": "Endereço: portal.org.br (ping e resolução de nomes OK). Erro: \"ERR_CERT_DATE_INVALID\". Data do certificado do servidor: validade encerrada em 30/06/2026. Relógio do cliente: 04/11/2026. Outros sites HTTPS: funcionando.",
    "conceitos": [
     "Validade de certificado TLS",
     "Erro de aplicação em rede saudável"
    ],
    "estrategia": "Como ping e DNS funcionam, a falha está na camada de aplicação, na verificação de TLS. Compara-se a data do certificado com o relógio do cliente para decidir entre renovação e ajuste de hora.",
    "execucao": [
     "Confirmar que o destino responde ao ping e que o nome resolve, descartando rede e DNS",
     "Ler a validade informada ao inspecionar o certificado apresentado pelo servidor",
     "Confrontar essa validade com a data e o fuso do relógio do cliente",
     "Renovar o certificado no servidor se estiver expirado, ou corrigir a hora do cliente se estiver errada"
    ],
    "resultado": "O certificado do servidor está expirado em relação ao relógio do cliente, que está correto. A correção é renovar o certificado no servidor; o ajuste de hora do cliente seria a via alternativa em caso de relógio errado.",
    "justificativa": "O erro de data do certificado ocorre após o handshake TCP e a verificação de nome, ou seja, depois que a rede provou entregar pacotes. A falha é da camada de aplicação, e a causa é a validade do certificado, não a conectividade.",
    "errosFrequentes": [
     "Culpar a rede ou o provedor, embora ping e DNS respondam normalmente",
     "Ajustar o relógio do cliente sem antes verificar a data de validade do certificado apresentado"
    ],
    "variacao": "O erro passa a ser \"ERR_CERT_AUTHORITY_INVALID\" com datas corretas: a causa muda para cadeia de certificação não confiável, e a correção é instalar a cadeia completa ou o certificado do emissor."
   },
   {
    "tipo": "erro",
    "problema": "O ping a um hospedeiro retorna \"request timed out\" e o técnico afiança que o hospedeiro está desligado. A equipe de redes mostra que o hospedeiro responde a serviços TCP. Onde está o erro de interpretação?",
    "dados": "Ping 10.0.0.5: \"request timed out\" em todas as tentativas. Conexão TCP na porta 443 de 10.0.0.5: estabelecida. Política da borda: ICMP de entrada descartado. Logs do hospedeiro: atividade normal de serviço.",
    "conceitos": [
     "ICMP como ferramenta de diagnóstico",
     "Descarte seletivo de ICMP por firewall"
    ],
    "estrategia": "Comparar o resultado do ping com evidências de outra camada: se a conexão TCP se completa, o caminho de rede existe e o silêncio do ICMP é consequência da filtragem, não de máquina inativa.",
    "execucao": [
     "Estabelecer uma conexão TCP a uma porta conhecida do hospedeiro",
     "Consultar registros de firewall para verificar o tratamento do ICMP no caminho",
     "Confirmar a atividade do hospedeiro por outro meio, como serviço ou autenticação",
     "Registrar a conclusão de que o ping é inconclusivo sob filtragem de ICMP"
    ],
    "resultado": "A leitura está errada: o hospedeiro está ativo e o silêncio do ping decorre do descarte de ICMP pelo firewall. Tempo esgotado não pode ser lido como máquina desligada.",
    "justificativa": "Uma conexão TCP concluída exige troca de pacotes nas duas direções, o que só é possível com o caminho de rede íntegro. Como o handshake foi completado enquanto o ping silenciou, a ausência de resposta ao ICMP é filtragem, não queda do hospedeiro.",
    "errosFrequentes": [
     "Converter ausência de resposta em diagnóstico definitivo de host desligado",
     "Prescindir de teste complementar quando o ping falha, deixando de cruzar evidências de outras camadas"
    ],
    "variacao": "Além do ping, a conexão TCP também expira e nenhum serviço responde: a hipótese de hospedeiro inacessível passa a valer, e o próximo teste é examinar a rota com traceroute."
   }
  ]
 }
};
