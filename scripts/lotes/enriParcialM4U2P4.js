const enriParcialM4U2P4 = {
  "m4-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "IDS e IPS são dispositivos de detecção e prevenção de intrusão que aparecem com frequência em concursos de redes e segurança. O candidato precisa saber que o IDS apenas alerta e não bloqueia, enquanto o IPS atua inline e pode interromper tráfego legítimo em caso de falso positivo. Além disso, deve comparar detecção por assinatura (só o conhecido) com detecção por anomalia (pega o inédito, mas gera mais falsos positivos). Confundir as duas ferramentas ou achar que IDS bloqueia pacotes leva diretamente ao gabarito errado.",
      "preRequisitos": [
        "O que é firewall e política de acesso de rede",
        "Noção de tráfego de rede e pacotes TCP/IP",
        "O que é uma assinatura de ataque e um padrão conhecido",
        "Noção de falso positivo e seu impacto operacional"
      ],
      "objetivosObservaveis": [
        "Diferenciar IDS e IPS por atuação: alerta versus bloqueio",
        "Explicar a colocação típica do IDS fora do caminho do tráfego (span/mirror, TAP)",
        "Explicar a colocação do IPS inline e seu risco operacional",
        "Comparar detecção por assinatura e por anomalia/heurística"
      ],
      "competencias": [
        "Raciocínio sobre detecção versus prevenção como funções distintas",
        "Julgamento operacional: reconhecer que falso positivo de IPS interrompe tráfego legítimo",
        "Atenção a detalhes: IDS não substitui firewall, apenas detecta dentro do que foi permitido"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t2-s2 (Inspeção de estado (stateful inspection)) — firewall stateful filtra por conexao, IDS/IPS detectam exploração dentro do que foi permitido",
        "m4-u2-t3-s3 (Antivírus, EDR e proteção de endpoints) — detecção por assinatura e comportamento também aparece em endpoint"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de TI e segurança, com a diferença operacional entre IDS e IPS, a colocação na rede e a comparação entre detecção por assinatura e por anomalia, com peso médio por combinar conceito e implantação prática."
      }
    },
    "niveis": {
      "iniciante": "IDS (Intrusion Detection System) observa o tráfego de rede e emite alertas quando encontra padrões de ataque; é um dispositivo passivo que normalmente se conecta a um ponto de espelho (span/mirror) de switch ou a um TAP, de modo que não participa do caminho do tráfego e não consegue bloquear nada sozinho. IPS (Intrusion Prevention System) atua no caminho (inline) e bloqueia ou sanea o tráfego malicioso conforme política, mas traz risco próprio: falha ou falso positivo do IPS interrompe tráfego legítimo, exigindo teste em modo de observação antes do bloqueio.",
      "intermediario": "Os mecanismos de detecção são por assinatura e por anomalia. A detecção por assinatura compara o tráfego com uma base de padrões conhecidos: precisa de atualização constante e só identifica o já conhecido. A detecção por anomalia ou heurística compara o tráfego com um comportamento esperado: consegue identificar ataques inéditos, mas produz mais falsos positivos. Existem também variantes por localização, como HIDS/HIPS, que atuam no host (arquivos, configurações, processos). IDS/IPS não substitui firewall: firewalls aplicam política de acesso; IDS/IPS detectam exploração dentro do que foi permitido.",
      "avancado": "A implantação prudente de um IPS segue etapas: primeiro, modo somente alerta (monitoração) por período representativo, coletando falsos positivos; depois, ajuste de política, exclusão de exceções documentadas e testes em janela de manutenção; finalmente, bloqueio ativado por categoria de ataque de alto impacto, com monitoramento 24×7 e procedimento de reversão. Isso evita que um falso positivo derrube um sistema crítico.",
      "especialista": "O especialista integra IDS/IPS com outros controles de defesa em profundidade, define regras de detecção com base no perfil de risco do órgão, ajusta finamente as assinaturas para reduzir ruído, e estabelece procedimentos de resposta a alertas. Lembra que IDS/IPS detectam exploração dentro do tráfego permitido pelo firewall, portanto não dispensam uma política de acesso bem desenhada."
    },
    "comparacoes": [
      {
        "tema": "IDS versus IPS",
        "a": {
          "rotulo": "IDS (Intrusion Detection System)",
          "texto": "Dispositivo passivo que observa o tráfego e emite alertas; instala-se fora do caminho do tráfego (span/mirror ou TAP) e não consegue bloquear pacotes por si só."
        },
        "b": {
          "rotulo": "IPS (Intrusion Prevention System)",
          "texto": "Dispositivo ativo que atua inline no caminho do tráfego e bloqueia ou sanea tráfego malicioso conforme política; falso positivo pode interromper tráfego legítimo."
        },
        "diferencaGabarito": "O IDS apenas detecta e alerta; o IPS detecta e bloqueia ativamente, mas requer cuidado operacional por risco de falso positivo interromper tráfego legítimo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "IDS inline bloqueia pacotes maliciosos automaticamente.",
        "porqueErrada": "Confunde IDS com IPS: inline e bloqueio automático são características do IPS. O IDS, por definição, apenas detecta e alerta; sua posição típica é fora do caminho do tráfego, portanto não bloqueia nada sozinho.",
        "versaoCorreta": "Errado. Inline e bloqueio automático são características do IPS, não do IDS. O IDS apenas detecta e emite alertas, normalmente fora do caminho do tráfego; o bloqueio depende de um IPS ou de ação do operador."
      },
      {
        "afirmacaoEquivocada": "Detecção por assinatura consegue identificar ataque nunca antes visto.",
        "porqueErrada": "A assinatura descreve um ataque já catalogado; contra um ataque inédito não há padrão para comparar. Somente a detecção comportamental ou por anomalia consegue capturar o inédito, mas com mais falsos positivos.",
        "versaoCorreta": "Errado. A detecção por assinatura identifica somente ataques já conhecidos; o inédito só é capturado por detecção comportamental ou por anomalia, que por sua vez gera mais falsos positivos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "IDS",
        "IPS",
        "Detecção por assinatura",
        "Detecção por anomalia",
        "Falso positivo",
        "Modo inline",
        "Ponto de espelho (span/mirror)"
      ],
      "regras": [
        "IDS apenas alerta; não bloqueia tráfego por si só",
        "IPS atua inline e pode bloquear, mas falso positivo interrompe tráfego legítimo",
        "Testar IPS em modo somente alerta antes de ativar o bloqueio",
        "Atualizar constantemente a base de assinaturas"
      ],
      "comparacoes": [
        "IDS alerta e não bloqueia; IPS bloqueia ativamente e exige cuidado com falso positivo"
      ],
      "fluxos": [
        "Tráfego chega ao dispositivo → detecção por assinatura ou anomalia → IDS emite alerta ou IPS bloqueia/saneia → operador tria e responde"
      ],
      "excecoes": [
        "IDS/IPS não substitui firewall: detectam exploração dentro do tráfego que o firewall já permitiu",
        "Ataque inédito não é pego por assinatura; exige detecção por anomalia, com mais falsos positivos"
      ],
      "palavrasChave": [
        "IDS",
        "IPS",
        "assinatura",
        "anomalia",
        "alerta",
        "bloqueio",
        "inline",
        "falso positivo"
      ],
      "checklist": [
        "Diferenciar IDS (alerta) de IPS (bloqueio)",
        "Confirmar colocação do IDS fora do caminho do tráfego",
        "Testar IPS em modo observação antes do bloqueio",
        "Manter base de assinaturas atualizada",
        "Ajustar políticas para reduzir falsos positivos",
        "Não considerar IDS/IPS como substituto do firewall"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um dispositivo alerta sobre uma tentativa de exploração de vulnerabilidade conhecida, mas o tráfego chegou ao servidor. Que ferramenta é e o que isso indica?",
        "dados": "Dispositivo de rede gera alerta sobre exploração de vulnerabilidade conhecida; o tráfego malicioso chegou ao servidor de destino.",
        "conceitos": [
          "IDS",
          "Detecção passiva",
          "Alerta de intrusão"
        ],
        "estrategia": "Identificar que se trata de um IDS, que apenas detecta e alerta sem bloquear, e que o tráfego chegou ao servidor porque o dispositivo não atua no caminho dos pacotes.",
        "execucao": [
          "Reconhecer que o dispositivo apenas emitiu um alerta, não bloqueou o tráfego",
          "Identificar o comportamento como detecção passiva, própria de um IDS",
          "Concluir que o tráfego chegou ao servidor porque o IDS não atua inline",
          "Perceber que, se bloqueio automático fosse exigido, seria necessário um IPS inline"
        ],
        "resultado": "É um IDS (detecção passiva). Indica que houve uma tentativa de exploração e que o alerta depende de um operador para resposta; se o bloqueio automático fosse exigido, a arquitetura precisaria de um IPS inline.",
        "justificativa": "O IDS apenas observa e alerta, sem participar do caminho do tráfego; portanto o pacote malicioso chegou ao servidor, e a resposta depende de intervenção humana.",
        "errosFrequentes": [
          "Achar que o IDS bloqueou o tráfego malicioso",
          "Esquecer que o IDS não atua inline e não pode impedir a chegada do pacote"
        ],
        "variacao": "O mesmo dispositivo é reposicionado para atuar inline e passa a bloquear o tráfego. Que ferramenta é agora?"
      },
      {
        "tipo": "aplicacao",
        "problema": "A equipe quer implantar bloqueio automático, mas teme parar um sistema crítico por falso positivo. Descreva a implantação prudente de um IPS.",
        "dados": "Sistema crítico em produção; equipe deseja bloqueio automático; risco de falso positivo do IPS interromper tráfego legítimo.",
        "conceitos": [
          "IPS",
          "Modo somente alerta",
          "Falso positivo",
          "Janela de manutenção"
        ],
        "estrategia": "Implantar o IPS primeiro em modo somente alerta para coletar falsos positivos, depois ajustar a política com exceções documentadas e testar em janela de manutenção, ativando o bloqueio apenas para categorias de ataque de alto impacto.",
        "execucao": [
          "Fase 1: colocar o IPS em modo somente alerta (monitoração) por período representativo, coletando falsos positivos",
          "Fase 2: ajustar a política, excluir exceções documentadas e testar em janela de manutenção",
          "Fase 3: ativar o bloqueio apenas por categoria de ataque de alto impacto",
          "Manter monitoramento 24×7 e procedimento de reversão pronto"
        ],
        "resultado": "A implantação começa com o IPS em modo somente alerta para coletar falsos positivos, segue com ajuste de política e exceções, testes em janela de manutenção, e ativa o bloqueio apenas para ataques de alto impacto, com monitoramento 24×7 e reversão.",
        "justificativa": "A abordagem gradual evita que um falso positivo derrube um sistema crítico, permitindo ajustar o IPS antes de expor a produção ao bloqueio automático.",
        "errosFrequentes": [
          "Ativar o bloqueio automático imediatamente sem período de observação",
          "Esquecer de manter um procedimento de reversão para casos de falso positivo"
        ],
        "variacao": "Após alguns meses em modo bloqueio, um falso positivo derruba um servidor. Qual a ação imediata da equipe?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'IDS inline bloqueia pacotes maliciosos automaticamente.' Avalie se está correta.",
        "dados": "Alegação de que um dispositivo IDS, posicionado inline, bloqueia pacotes maliciosos de forma automática.",
        "conceitos": [
          "IDS não bloqueia",
          "IPS atua inline",
          "Detecção versus prevenção"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que inline e bloqueio automático são características do IPS; o IDS, por definição, apenas detecta e alerta, normalmente fora do caminho do tráfego.",
        "execucao": [
          "Reconhecer que inline e bloqueio automático pertencem ao IPS, não ao IDS",
          "Identificar que o IDS apenas detecta e emite alertas",
          "Concluir que a afirmação confunde as duas ferramentas e está incorreta"
        ],
        "resultado": "Errado. Inline e bloqueio automático são características do IPS. O IDS, por definição, detecta e alerta; sua posição típica é fora do caminho do tráfego, portanto não bloqueia pacotes sozinho.",
        "justificativa": "A afirmação atribui ao IDS uma função que pertence ao IPS; o IDS não tem capacidade de bloquear, apenas de detectar e reportar.",
        "errosFrequentes": [
          "Achar que qualquer dispositivo de detecção de intrusão também bloqueia",
          "Confundir IDS com IPS pelo fato de ambos usarem assinaturas de ataque"
        ],
        "variacao": "Afirmação: 'Um IPS em modo somente alerta já bloqueia automaticamente todo tráfego malicioso.'"
      }
    ]
  },
  "m4-u2-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Monitoramento, registros e resposta a incidentes formam o ciclo de descobrimento e contenção de incidentes de segurança: sem registrar o que acontece, o incidente só é descoberto quando o usuário reclama, e sem fases ordenadas a recuperação pode reabrir o ataque. Em concursos, aparecem em questões sobre o que registrar, como proteger a integridade dos registros (cadeia de custódia) e a ordem correta das fases de resposta (identificação, contenção, erradicação, recuperação, lições aprendidas). Errar a ordem — por exemplo, erradicar sem conter — espalha o dano.",
      "preRequisitos": [
        "O que é um registro de log e para que serve",
        "Noção de autenticação, sucesso e falha de login",
        "Noção de integridade de dados e não repúdio",
        "Noção de incidente de segurança e seus impactos"
      ],
      "objetivosObservaveis": [
        "Elencar o que deve ser registrado: autenticações, autorizações negadas, alterações de configuração, acessos a dados sensíveis",
        "Explicar boas práticas de proteção de registros: centralização, somente leitura, cadeia de custódia, retenção, sincronização de hora",
        "Descrever as cinco fases da resposta a incidentes na ordem correta",
        "Justificar por que a ordem das fases importa: conter antes de erradicar, erradicar antes de recuperar"
      ],
      "competencias": [
        "Raciocínio sobre evidência: registros íntegros são condição para responsabilização",
        "Julgamento de processo: aplicar as fases de resposta na sequência correta",
        "Atenção a detalhes: log que ninguém lê não detecta nada, então análise é parte do controle"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t3-s1 (IDS e IPS) — IDS/IPS geram alertas que alimentam a identificação do incidente",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — erradicação de incidente inclui correção de vulnerabilidade explorada"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de TI e segurança, com o que registrar, proteção da integridade dos registros e as fases ordenadas da resposta a incidentes, com peso médio por combinar conceito de governança com procedimento operacional."
      }
    },
    "niveis": {
      "iniciante": "Monitoramento contínuo é a condição de descobrir o incidente antes que o usuário reclamar. O que registrar: autenticações (sucesso e falha), autorizações negadas, alterações de configuração, acessos a dados sensíveis, eventos de sistema e de aplicação, cada um com identificador, data/hora sincronizada e resultado. Boas práticas de registros incluem centralização em servidor dedicado, proteção contra edição ou exclusão (somente leitura e cadeia de custódia), retenção compatível com obrigações e sincronização de hora — um log que ninguém lê não detecta nada.",
      "intermediario": "A resposta a incidentes segue cinco fases em ordem lógica: 1) identificação (detecção e confirmação do incidente); 2) contenção (isolar sistemas, bloquear contas, preservar evidências, limitar o dano); 3) erradicação (remover a causa: malware, backdoor, credencial comprometida, vulnerabilidade explorada); 4) recuperação (restaurar sistemas com verificação e monitorar com atenção redobrada); 5) lições aprendidas (relatório com causa, cronologia, melhorias e prazos). A ordem importa: erradicar sem conter espalha o dano; recuperar sem erradicar traz o incidente de volta.",
      "avancado": "As evidências devem ser preservadas com registro de cadeia de custódia para eventual responsabilização. Correções de erros de digitação em registros de auditoria não são feitas por edição: usam-se novos registros (entradas de ajuste), pois edição destrói a rastreabilidade e o não repúdio. O monitoramento só é efetivo se houver alguém analisando os registros; centralizar sem ler é inoperante.",
      "especialista": "O especialista define a política de retenção compatível com obrigações legais e regulatórias, implementa servidores dedicados de coleta centralizada com acesso restrito, estabelece procedimentos de resposta com responsáveis e prazos para cada fase, e promove exercícios periódicos (tabletop) para validar que a equipe segue a ordem correta das fases sob pressão."
    },
    "comparacoes": [
      {
        "tema": "Edição de registro versus entrada de ajuste",
        "a": {
          "rotulo": "Edição do registro existente",
          "texto": "Modificar um registro de auditoria já gravado para corrigir um erro de digitação; destrói a integridade, a rastreabilidade e o não repúdio do registro original."
        },
        "b": {
          "rotulo": "Entrada de ajuste (novo registro)",
          "texto": "Inserir um novo registro que corrija ou complemente a informação, preservando o registro original inalterado e mantendo a cadeia de custódia."
        },
        "diferencaGabarito": "Editar um registro de auditoria destrói sua integridade; a correção deve ser feita por um novo registro de ajuste, nunca por edição do original."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Registros de auditoria devem permitir edição pelo administrador para correção de erros de digitação.",
        "porqueErrada": "Registros íntegros não devem ser editáveis; qualquer correção é feita por um novo registro de ajuste, pois editar o original destrói a rastreabilidade e o não repúdio, invalidando o registro como evidência.",
        "versaoCorreta": "Errado. Registros de auditoria não devem ser editáveis pelo administrador; correções são feitas por um novo registro de entrada de ajuste, pois a edição do original destrói a cadeia de custódia e o não repúdio."
      },
      {
        "afirmacaoEquivocada": "Basta reinstalar o sistema comprometido para encerrar o incidente.",
        "porqueErrada": "Sem contenção e erradicação da causa (credenciais, backdoors, vulnerabilidade explorada), a reinstalação devolve o sistema ao atacante e ainda descaracteriza as evidências, tornando a responsabilização mais difícil.",
        "versaoCorreta": "Errado. Sem contenção e erradicação de causa, a reinstalação devolve o sistema ao atacante e descaracteriza evidências; as fases devem ser seguidas na ordem: identificar, conter, erradicar, recuperar e lições aprendidas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Registro de auditoria",
        "Cadeia de custódia",
        "Resposta a incidentes",
        "Conteúdo",
        "Erradicação",
        "Lições aprendidas"
      ],
      "regras": [
        "Registrar autenticações, autorizações negadas, alterações de configuração e acessos a dados sensíveis",
        "Centralizar registros em servidor dedicado com acesso restrito",
        "Proteger registros contra edição ou exclusão (somente leitura)",
        "Seguir as cinco fases da resposta na ordem correta",
        "Preservar evidências com cadeia de custódia"
      ],
      "comparacoes": [
        "Edição do registro destrói a integridade; entrada de ajuste preserva o original"
      ],
      "fluxos": [
        "Identificação (detecção e confirmação) → Conteúdo (isolar, bloquear, preservar) → Erradicação (remover causa) → Recuperação (restaurar e monitorar) → Lições aprendidas (relatório e melhorias)"
      ],
      "excecoes": [
        "Recuperar sem erradicar traz o incidente de volta; erradicar sem conter espalha o dano",
        "Log que ninguém lê não detecta nada: a análise dos registros é parte do controle"
      ],
      "palavrasChave": [
        "monitoramento",
        "registro de auditoria",
        "cadeia de custódia",
        "resposta a incidentes",
        "conteúdo",
        "erradicação",
        "lições aprendidas"
      ],
      "checklist": [
        "Registrar autenticações de sucesso e falha",
        "Centralizar registros em servidor dedicado",
        "Proteger registros contra edição ou exclusão",
        "Seguir as cinco fases da resposta na ordem correta",
        "Preservar evidências com cadeia de custódia",
        "Revisar e analisar os registros periodicamente"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um alerta indica login anômalo às 3h da manhã. Qual é a sequência correta de ação na primeira hora?",
        "dados": "Alerta de segurança indica login anômalo fora do horário comercial; é necessário decidir a sequência de resposta nas primeiras horas.",
        "conceitos": [
          "Identificação",
          "Conteúdo",
          "Preservação de registros"
        ],
        "estrategia": "Aplicar as fases iniciais da resposta a incidentes: confirmar o alerta (identificação), isolar a sessão e revogar credenciais (contenção), e preservar os registros antes de qualquer reinstalação.",
        "execucao": [
          "Confirmar o alerta, verificando se o login é realmente anômalo (identificação)",
          "Bloquear a sessão e revogar/rotacionar a credencial e sessões ativas (contenção)",
          "Verificar movimentação lateral e possíveis persistências (preparação para erradicação)",
          "Preservar os registros relacionados antes de qualquer reinstalação do sistema"
        ],
        "resultado": "A sequência correta é: confirmar o alerta (identificação), bloquear a sessão e revogar/rotacionar a credencial e sessões ativas (contenção), verificar lateral movement e persistências, sempre preservando registros antes de qualquer reinstalação.",
        "justificativa": "Seguir a ordem das fases evita que ações precipitadas, como reinstalar sem conter, espalhem o dano ou destruam evidências necessárias para a investigação.",
        "errosFrequentes": [
          "Reinstalar o sistema imediatamente sem conter ou preservar evidências",
          "Esquecer de rotacionar a credencial comprometida durante a contenção"
        ],
        "variacao": "O alerta indica acesso a um banco de dados sensível por uma conta de serviço à noite. Qual a sequência?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Confirmou-se vazamento de planilha com dados pessoais de servidores. O que a equipe de segurança faz e o que o órgão precisa considerar?",
        "dados": "Planilha com dados pessoais de servidores vazada; equipe de segurança confirmou o incidente; órgão público sujeito à LGPD.",
        "conceitos": [
          "Conteúdo",
          "Erradicação",
          "LGPD",
          "Comunicação de incidente"
        ],
        "estrategia": "A equipe de segurança aplica contenção (restringir acesso ao arquivo, revogar links, apagar cópias acessíveis), erradicação (corrigir a permissão que permitiu o compartilhamento) e recuperação; o órgão registra o incidente, avalia comunicação à autoridade e aos titulares conforme dispositivo aplicável da LGPD, e implementa as melhorias apontadas.",
        "execucao": [
          "Conter o incidente: restringir acesso ao arquivo, revogar links de compartilhamento, apagar cópias acessíveis",
          "Eradicar a causa: corrigir a permissão que permitiu o compartilhamento indevido",
          "Recuperar: restaurar o acesso legítimo e monitorar com atenção redobrada",
          "Registrar o incidente e avaliar comunicação à autoridade e aos titulares conforme a LGPD",
          "Implementar as melhorias apontadas na análise pós-incidente"
        ],
        "resultado": "Segurança: contenção, erradicação e recuperação. Órgão: registrar o incidente, avaliar comunicação à autoridade e aos titulares conforme dispositivo aplicável da LGPD (artigo relativo à comunicação de incidente de segurança) e implementar melhorias apontadas no relatório.",
        "justificativa": "A resposta combina ação técnica imediata (conter e erradicar) com obrigações institucionais (registrar e comunicar), evitando que o vazamento se repita e que o órgão descumpra deveres legais.",
        "errosFrequentes": [
          "Esquecer de comunicar o incidente à autoridade e aos titulares quando exigido",
          "Restaurar o acesso sem antes corrigir a permissão que causou o vazamento"
        ],
        "variacao": "O vazamento envolve dados de saúde de pacientes. Quais obrigações adicionais o órgão deve considerar?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Basta reinstalar o sistema comprometido para encerrar o incidente.' Avalie se está correta.",
        "dados": "Alegação de que reinstalar o sistema comprometido é suficiente para encerrar um incidente de segurança.",
        "conceitos": [
          "Conteúdo",
          "Erradicação",
          "Preservação de evidências"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que, sem contenção e erradicação da causa, a reinstalação devolve o sistema ao atacante e ainda descaracteriza evidências; as fases devem ser seguidas na ordem.",
        "execucao": [
          "Reconhecer que reinstalar sem conter espalha o dano e não remove a causa",
          "Identificar que credenciais, backdoors e a vulnerabilidade explorada devem ser erradicados",
          "Concluir que a reinstalação sem ordem correta descaracteriza evidências e reabre o ataque"
        ],
        "resultado": "Errado. Sem contenção e erradicação de causa (credenciais, backdoors, vulnerabilidade explorada), a reinstalação devolve o sistema ao atacante e descaracteriza as evidências; as fases devem ser seguidas na ordem correta.",
        "justificativa": "A ordem das fases existe para garantir que o dano seja contido, a causa removida e as evidências preservadas; pular etapas invalida a resposta ao incidente.",
        "errosFrequentes": [
          "Achar que reinstalar o sistema remove automaticamente toda a causa do incidente",
          "Esquecer que a reinstalação sem preservar registros destrói evidências"
        ],
        "variacao": "Afirmação: 'Como o sistema foi reinstalado, não é necessário mais investigar como o atacante entrou.'"
      }
    ]
  }
};
