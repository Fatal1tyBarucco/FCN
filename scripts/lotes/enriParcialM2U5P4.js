const enriParcialM2U5P4 = {
 "m2-u5-t3-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "O nslookup consulta servidores DNS e exibe o resultado, sendo útil para confirmar ou descartar falhas de resolução de nomes. Concursos de TI cobram a sintaxe básica, a consulta de tipos específicos (A, MX, TXT) e a leitura da saída com Server, Name, Address e códigos de erro como NXDOMAIN e SERVFAIL.",
   "preRequisitos": [
    "Noção de DNS e de registros de nome (A, MX, TXT)",
    "Endereço IPv4 e o conceito de resolvedor DNS"
   ],
   "objetivosObservaveis": [
    "Consultar um nome com nslookup <nome> e identificar Server, Name e Address",
    "Consultar um tipo específico de registro com nslookup -type=MX exemplo.com",
    "Indicar o servidor DNS a consultar com nslookup nome 8.8.8.8",
    "Interpretar códigos de erro NXDOMAIN e SERVFAIL na saída"
   ],
   "competencias": [
    "Verificação de resolução de nomes via DNS",
    "Leitura e interpretação da saída do nslookup"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u5-t3-s2 (dig: consulta DNS avançada)"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "A consulta DNS com nslookup aparece em questões de TI sobre diagnóstico de rede, mas com menor centralidade que o cálculo CIDR. Classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística comprovada."
   }
  },
  "niveis": {
   "iniciante": "nslookup consulta servidores DNS. Sintaxe: nslookup <nome> (consulta A/AAAA padrão) ou nslookup -type=MX exemplo.com. Pode especificar servidor: nslookup exemplo.com 8.8.8.8. Saída: Server (resolvedor usado), Name, Address(es). Limitações: saída menos detalhada que dig; comportamento varia entre sistemas; em alguns sistemas está deprecated em favor de dig/host. Útil para testes rápidos. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
   "intermediario": "No nslookup, a consulta padrão busca registros A/AAAA, mas -type=MX, -type=NS e -type=TXT retornam outros registros. O terceiro argumento define o servidor consultado, permitindo comparar resolvedores: se um resolve e outro não, o problema está no cache ou no servidor, não no nome. A saída traz Server, Name e Address(es), com codes NXDOMAIN (nome inexistente) e SERVFAIL (falha do servidor).",
   "avancado": "O nslookup tem comportamento diferente entre sistemas: no Windows é nativo, no Linux depende do pacote instalado e, em algumas distribuições, é considerado legado em favor de dig e host. Não exibe TTL nem flags com clareza, ao contrário do dig, o que limita a análise de cache e de delegação. Para diagnóstico profundo, prefira dig; use nslookup apenas para verificações rápidas de resolução.",
   "especialista": "O nslookup consulta o resolvedor configurado no sistema por padrão, mas aceita um servidor alternativo como terceiro argumento, isolando problemas de resolvedor local versus servidor autoritativo. Combine com dig para comparar TTL, flags de recursão e resposta de DNSSEC. Lembre-se de que um resultado em cache pode mascarar alterações recentes no DNS do domínio."
  },
  "comparacoes": [
   {
    "tema": "nslookup vs dig na consulta de registros DNS",
    "a": {
     "rotulo": "nslookup",
     "texto": "Consulta DNS simples e rápida; sintaxe nslookup <nome> [-type=tipo] [servidor]. Exibe Server, Name e Address(es); saída menos detalhada, não mostra TTL nem flags de forma clara."
    },
    "b": {
     "rotulo": "dig",
     "texto": "Consulta DNS avançada; sintaxe dig <nome> [tipo] [@servidor]. Exibe cabeçalho com status (NOERROR/NXDOMAIN/SERVFAIL), flags, QUERY TIME, seções QUESTION, ANSWER (com TTL), AUTHORITY e ADDITIONAL. Opções +short, +trace e -x."
    },
    "diferencaGabarito": "O dig é mais detalhado que o nslookup, mostrando TTL, flags e todas as seções da resposta; o nslookup é mais simples e rápido para verificações pontuais, mas carece desses metadados."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "O nslookup sempre usa o DNS configurado no sistema e não permite escolher outro servidor.",
    "porqueErrada": "O nslookup aceita um terceiro argumento com o endereço do servidor DNS a ser consultado, como nslookup exemplo.com 8.8.8.8, permitindo comparar resolvedores e isolar falhas de cache ou de servidor.",
    "versaoCorreta": "Errado. O nslookup permite especificar outro servidor com nslookup nome 8.8.8.8, útil para isolar se o problema está no resolvedor local ou no servidor autoritativo."
   },
   {
    "afirmacaoEquivocada": "O nslookup exibe TTL e flags de recursão com a mesma clareza que o dig.",
    "porqueErrada": "O nslookup não exibe TTL nem flags de recursão com clareza; esses metadados estão presentes na saída detalhada do dig, nas seções ANSWER e cabeçalho.",
    "versaoCorreta": "Errado. O nslookup não mostra TTL nem flags de recursão de forma clara; para esses dados use dig, que exibe TTL na seção ANSWER e flags no cabeçalho."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "nslookup: consulta de registros DNS por linha de comando",
    "Registros A/AAAA (endereço), MX (e-mail), NS (servidor de nome), TXT",
    "Códigos de erro: NXDOMAIN (nome inexistente), SERVFAIL (falha do servidor)"
   ],
   "regras": [
    "A consulta padrão do nslookup busca registros A/AAAA",
    "O terceiro argumento do nslookup define o servidor DNS consultado"
   ],
   "comparacoes": [
    "O nslookup é mais simples que o dig e não exibe TTL nem flags de forma clara"
   ],
   "fluxos": [
    "Diagnóstico de DNS: consultar nome, verificar Server/Name/Address, interpretar NXDOMAIN ou SERVFAIL, comparar resolvedores"
   ],
   "excecoes": [
    "Em alguns sistemas o nslookup é considerado legado, sendo substituído por dig e host"
   ],
   "palavrasChave": [
    "nslookup",
    "DNS",
    "registro A",
    "registro MX",
    "NXDOMAIN",
    "SERVFAIL",
    "resolvedor",
    "dig"
   ],
   "checklist": [
    "Executar nslookup <nome> e identificar Server, Name e Address",
    "Usar nslookup -type=MX para consultar servidores de e-mail",
    "Especificar servidor com nslookup nome 8.8.8.8",
    "Interpretar NXDOMAIN como nome inexistente",
    "Interpretar SERVFAIL como falha do servidor DNS",
    "Comparar resultado de dois resolvedores para isolar cache"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Ao executar nslookup www.exemplo.com, a saída mostra 'Address: 93.184.216.34'. O que isso indica sobre a resolução?",
    "dados": "Comando: nslookup www.exemplo.com; saída: Server: 8.8.8.8, Name: www.exemplo.com, Address: 93.184.216.34.",
    "conceitos": [
     "Registro A (endereço IPv4)",
     "Resolvedor DNS padrão"
    ],
    "estrategia": "Identificar que a saída com Address e um IP significa que o nome foi resolvido com sucesso pelo resolvedor indicado em Server.",
    "execucao": [
     "Ler o campo Server para confirmar o resolvedor usado",
     "Ler o campo Name para confirmar o nome consultado",
     "Ler o campo Address para obter o IP resolvido",
     "Concluir que a resolução funcionou para aquele resolvedor"
    ],
    "resultado": "O nome www.exemplo.com foi resolvido para o IP 93.184.216.34 pelo resolvedor padrão; DNS ok para esse nome.",
    "justificativa": "A presença de Address com um IP válido indica que o resolvedor conseguiu traduzir o nome em endereço, confirmando que a resolução DNS funciona para aquele nome naquele resolvedor.",
    "errosFrequentes": [
     "Acreditar que qualquer saída indica sucesso, sem verificar se há erro NXDOMAIN",
     "Confundir o IP do resolvedor (Server) com o IP do nome consultado (Address)"
    ],
    "variacao": "Se a saída mostrasse 'NXDOMAIN' em vez de Address, o nome não existiria ou haveria erro de digitação, e a resolução falharia."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um administrador precisa verificar os servidores de e-mail do domínio exemplo.com usando nslookup.",
    "dados": "Comando: nslookup -type=MX exemplo.com; saída esperada: exemplo.com MX preference = 10, mail exchanger = mx1.exemplo.com; exemplo.com MX preference = 20, mail exchanger = mx2.exemplo.com.",
    "conceitos": [
     "Registro MX (servidor de e-mail)",
     "Prioridade/preferência do MX (menor número = maior prioridade)"
    ],
    "estrategia": "Consultar o tipo MX com nslookup -type=MX e interpretar a lista de servidores de e-mail ordenados por prioridade.",
    "execucao": [
     "Executar nslookup -type=MX exemplo.com",
     "Ler os registros MX retornados com suas preferências",
     "Identificar o servidor com menor número de preferência como o primário",
     "Verificar se os servidores apontam para IPs válidos"
    ],
    "resultado": "O domínio exemplo.com tem dois servidores de e-mail: mx1 (preferência 10, primário) e mx2 (preferência 20, secundário).",
    "justificativa": "O registro MX lista os servidores de e-mail e a preferência define a ordem de tentativa; o menor número tem maior prioridade, então mx1 é tentado primeiro.",
    "errosFrequentes": [
     "Ignorar a preferência e assumir que qualquer servidor MX serve em qualquer ordem",
     "Confundir registro MX com registro A, que retorna endereço IP do servidor web"
    ],
    "variacao": "Se o domínio tivesse um único registro MX com preferência 5, esse seria o único servidor de e-mail e não haveria ordem de fallback."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'O nslookup sempre consulta o DNS configurado no sistema, não sendo possível escolher outro servidor.'",
    "dados": "Afirmação sobre a impossibilidade de escolher servidor alternativo no nslookup; comando alternativo: nslookup exemplo.com 8.8.8.8.",
    "conceitos": [
     "Servidor DNS alternativo como terceiro argumento",
     "Isolamento de problemas de resolvedor local"
    ],
    "estrategia": "Desmontar a afirmação mostrando que o nslookup aceita um servidor DNS alternativo como terceiro argumento, permitindo comparar resolvedores.",
    "execucao": [
     "Executar nslookup exemplo.com sem servidor (usa o configurado no sistema)",
     "Executar nslookup exemplo.com 8.8.8.8 (força o servidor 8.8.8.8)",
     "Comparar os resultados: se diferirem, o problema está no resolvedor local",
     "Concluir que é possível escolher outro servidor"
    ],
    "resultado": "Errado. O nslookup permite especificar outro servidor com nslookup nome 8.8.8.8, útil para isolar problemas de resolvedor.",
    "justificativa": "A leitura ingênua assume que o nslookup é limitado ao resolvedor do sistema, mas o terceiro argumento permite consultar qualquer servidor, diferenciando falha de cache local de falha do servidor autoritativo.",
    "errosFrequentes": [
     "Acreditar que o nslookup está preso ao DNS configurado no sistema",
     "Não usar um servidor alternativo para testar se o resolvedor local está com problema"
    ],
    "variacao": "Se nslookup exemplo.com 8.8.8.8 retornasse NXDOMAIN enquanto o servidor local resolvesse, o problema estaria no servidor local ou em seu cache, não no nome."
   }
  ]
 },
 "m2-u5-t3-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "O dig é a ferramenta de referência para depurar DNS, oferecendo saída detalhada com status, flags, TTL e seções de resposta. Concursos de TI cobram a leitura do cabeçalho (NOERROR, NXDOMAIN, SERVFAIL), das flags e do TTL, além de opções como +short, +trace e consulta reversa -x para diagnóstico avançado.",
   "preRequisitos": [
    "DNS e registros de nome (A, MX, NS, TXT)",
    "Noção de resolvedor DNS e de TTL (time to live)"
   ],
   "objetivosObservaveis": [
    "Consultar um nome com dig <nome> [tipo] [@servidor]",
    "Interpretar status NOERROR, NXDOMAIN e SERVFAIL e as flags da resposta",
    "Usar +short para resposta enxuta e +trace para rastrear desde a raiz",
    "Realizar consulta reversa com dig -x IP para nome via registros PTR"
   ],
   "competencias": [
    "Depuração de DNS com saída detalhada",
    "Leitura de TTL, status e seções da resposta DNS"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u5-t3-s1 (nslookup: consulta DNS)"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "O dig aparece em questões de TI que exigem leitura de status DNS, flags e TTL, sendo mais detalhado que o nslookup. Classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística comprovada."
   }
  },
  "niveis": {
   "iniciante": "dig (Domain Information Groper) é ferramenta avançada de consulta DNS, disponível no Linux e no macOS e no Windows com o pacote BIND. Sintaxe: dig <nome> [tipo] [@servidor]. A saída traz cabeçalho com status (NOERROR/NXDOMAIN/SERVFAIL), flags, QUERY TIME, seção QUESTION, ANSWER (registros com TTL), AUTHORITY e ADDITIONAL. Opções úteis: +short mostra apenas a resposta, +trace rastreia desde a raiz e -x faz consulta reversa.",
   "intermediario": "O cabeçalho do dig mostra o status da consulta: NOERROR (resposta obtida), NXDOMAIN (nome não existe) e SERVFAIL (falha do servidor). A seção ANSWER lista os registros com seus TTL, indicando por quanto tempo o cache mantém a resposta. A opção +short exibe apenas a resposta, enquanto +trace percorre a resolução iterativa desde os servidores raiz, útil para verificar delegação.",
   "avancado": "O dig é mais detalhado que o nslookup e permite verificar o suporte a DNSSEC com +dnssec. No diagnóstico, responde a 'o registro existe?', 'qual o TTL e por quanto tempo o cache mantém a resposta?' e 'a delegação a partir da raiz está correta?'. A consulta reversa -x IP usa registros PTR para obter o nome a partir de um endereço.",
   "especialista": "Interpretar corretamente o status e as seções do dig separa um nome inexistente (NXDOMAIN) de uma falha do servidor (SERVFAIL). O +trace ignora o cache do resolvedor local, revelando problemas de delegação. Combine TTL de ANSWER com +short para avaliar caches, e use -x para confirmar registros PTR em consultas reversas."
  },
  "comparacoes": [
   {
    "tema": "dig vs nslookup na consulta DNS",
    "a": {
     "rotulo": "dig",
     "texto": "Saída detalhada com cabeçalho (status, flags, QUERY TIME), QUESTION, ANSWER com TTL, AUTHORITY e ADDITIONAL. Opções +short, +trace, -x e +dnssec. Mais adequado para diagnóstico avançado."
    },
    "b": {
     "rotulo": "nslookup",
     "texto": "Saída simples com Server, Name e Address(es). Sintaxe nslookup <nome> [-type=tipo] [servidor]. Não mostra TTL nem flags com clareza. Mais adequado para verificações rápidas de resolução."
    },
    "diferencaGabarito": "O dig fornece metadados como TTL, flags e todas as seções da resposta, enquanto o nslookup é mais simples e rápido, mas carece desses detalhes para diagnóstico profundo."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "O comando dig +trace consulta apenas o resolvedor local configurado no sistema.",
    "porqueErrada": "O +trace faz resolução iterativa desde os servidores raiz, ignorando o cache do resolvedor local, o que é justamente útil para diagnosticar problemas de delegação e cadeia de autoridades.",
    "versaoCorreta": "Errado. O comando dig +trace percorre a cadeia de delegação desde a raiz e não consulta o cache local, servindo para diagnosticar falhas de delegação."
   },
   {
    "afirmacaoEquivocada": "O status NXDOMAIN do dig indica que o servidor DNS falhou ao responder.",
    "porqueErrada": "NXDOMAIN significa que o nome consultado não existe (resposta autoritativa de que não há registro), enquanto SERVFAIL indica que o servidor encontrou um problema ao tentar resolver, como falha de DNSSEC ou de delegação.",
    "versaoCorreta": "Errado. NXDOMAIN indica que o nome não existe, não uma falha do servidor; já SERVFAIL é que indica problema do servidor ao resolver."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "dig: consulta avançada de registros DNS",
    "Status DNS: NOERROR, NXDOMAIN, SERVFAIL",
    "TTL e seções QUESTION, ANSWER, AUTHORITY, ADDITIONAL"
   ],
   "regras": [
    "A seção ANSWER exibe os registros com seus TTL",
    "O +trace rastreia a resolução desde os servidores raiz ignorando o cache local"
   ],
   "comparacoes": [
    "O dig é mais detalhado que o nslookup, exibindo TTL, flags e todas as seções da resposta"
   ],
   "fluxos": [
    "Diagnóstico com dig: consultar nome, ler status e flags, verificar TTL da ANSWER, usar +trace para delegação e -x para reverso"
   ],
   "excecoes": [
    "O dig não está instalado por padrão em algumas distribuições Linux e requer o pacote BIND no Windows"
   ],
   "palavrasChave": [
    "dig",
    "DNS",
    "NOERROR",
    "NXDOMAIN",
    "SERVFAIL",
    "TTL",
    "+trace",
    "-x"
   ],
   "checklist": [
    "Executar dig <nome> e ler o cabeçalho com status e flags",
    "Verificar a seção ANSWER e os TTL dos registros",
    "Usar dig +short para resposta enxuta",
    "Usar dig +trace para rastrear desde a raiz",
    "Usar dig -x IP para consulta reversa via PTR",
    "Diferenciar NXDOMAIN (nome não existe) de SERVFAIL (falha do servidor)"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Ao executar dig www.exemplo.com, a saída mostra status NOERROR e seção ANSWER com A 93.184.216.34 TTL 3600. O que isso indica?",
    "dados": "Comando: dig www.exemplo.com; saída: status NOERROR, seção ANSWER com A 93.184.216.34 TTL 3600.",
    "conceitos": [
     "Registro A (endereço IPv4)",
     "TTL (time to live) e cache de DNS"
    ],
    "estrategia": "Ler o status NOERROR para confirmar sucesso e o TTL da seção ANSWER para saber por quanto tempo o cache mantém a resposta.",
    "execucao": [
     "Confirmar que o status é NOERROR (resolução bem-sucedida)",
     "Ler o registro A na seção ANSWER: 93.184.216.34",
     "Ler o TTL associado: 3600 segundos",
     "Concluir que o nome resolve e fica em cache por até 3600 s"
    ],
    "resultado": "Resolução bem-sucedida: IP 93.184.216.34; o registro permanece em cache por até 3600 segundos (TTL).",
    "justificativa": "O status NOERROR indica que o servidor respondeu com sucesso, e o TTL de 3600 informa o tempo máximo de retenção da resposta em cache, de modo que a resolução funciona para aquele nome naquele resolvedor.",
    "errosFrequentes": [
     "Ignorar o status e assumir sucesso apenas porque há uma seção ANSWER",
     "Confundir TTL com o tempo de vida do pacote na rede em vez do cache de DNS"
    ],
    "variacao": "Se o status fosse NXDOMAIN, o nome não existiria, independentemente do TTL mostrado em outras seções."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um administrador quer listar apenas os servidores de e-mail (MX) do domínio exemplo.com, sem metadados, usando dig.",
    "dados": "Comando: dig exemplo.com MX +short; saída: 10 mx1.exemplo.com\n20 mx2.exemplo.com.",
    "conceitos": [
     "Registro MX (servidor de e-mail)",
     "Opção +short do dig (resposta enxuta)"
    ],
    "estrategia": "Usar dig com o tipo MX e a opção +short para obter apenas a lista de servidores de e-mail e suas prioridades.",
    "execucao": [
     "Executar dig exemplo.com MX +short",
     "Ler cada linha: prioridade seguida do servidor de e-mail",
     "Identificar que menor número de prioridade indica maior prioridade",
     "Confirmar que mx1 (10) é primário e mx2 (20) é secundário"
    ],
    "resultado": "Lista de servidores de e-mail com prioridade: mx1.exemplo.com (10, primário) e mx2.exemplo.com (20, secundário).",
    "justificativa": "O +short remove metadados e exibe somente a resposta; o registro MX associa prioridade a cada servidor, sendo o menor número tentado primeiro na entrega de e-mail.",
    "errosFrequentes": [
     "Assumir que o primeiro servidor listado é sempre o primário, sem olhar a prioridade",
     "Confundir prioridade MX com ordem alfabética ou de aparição na saída"
    ],
    "variacao": "Se a saída fosse dig exemplo.com MX +short com uma única linha '5 mx.exemplo.com', haveria um único servidor de e-mail com prioridade 5."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'O comando dig +trace consulta apenas o resolvedor local configurado no sistema.'",
    "dados": "Afirmação sobre o escopo do dig +trace; comportamento correto: resolução iterativa desde os servidores raiz.",
    "conceitos": [
     "Opção +trace do dig (resolução iterativa desde a raiz)",
     "Cache do resolvedor local versus servidores raiz"
    ],
    "estrategia": "Desmontar a afirmação explicando que o +trace ignora o cache do resolvedor local e percorre a cadeia desde os servidores raiz até o servidor autoritativo.",
    "execucao": [
     "Executar dig exemplo.com +trace",
     "Observar a consulta aos servidores raiz e a descentralização até o autoritativo",
     "Comparar com dig exemplo.com (usa cache do resolvedor local)",
     "Concluir que o +trace não se limita ao resolvedor local"
    ],
    "resultado": "Errado. O dig +trace faz resolução iterativa desde os servidores raiz, ignorando o cache do resolvedor local, útil para diagnosticar delegação.",
    "justificativa": "A leitura ingênua confunde +trace com uma consulta comum ao resolvedor local; na verdade, o +trace ignora esse cache e revela a cadeia completa de delegação, expondo problemas que uma consulta normal mascararia.",
    "errosFrequentes": [
     "Acreditar que o +trace apenas repete a consulta do resolvedor local",
     "Não perceber que o +trace ignora o cache e pode mostrar resultados diferentes da consulta normal"
    ],
    "variacao": "Se dig exemplo.com +trace parasse em um servidor intermediário sem chegar ao autoritativo, haveria um problema de delegação nessa parte da cadeia."
   }
  ]
 }
};
