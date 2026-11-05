const enriParcialM4U2P6 = {
  "m4-u2-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A gestão de vulnerabilidades é um ciclo contínuo — inventário, varredura, priorização, correção e verificação — e não apenas aplicar patches. Em concursos, aparece em priorização por risco (severidade + exposição + explorabilidade), CVE, janela de manutenção e aceite formal. Priorizar só pela nota do scanner ou tratar mitigação como solução definitiva leva ao gabarito errado.",
      "preRequisitos": ["Noção de ativo de TI e quem é o responsável por ele", "O que é uma vulnerabilidade e um CVE", "Noção de patch, mitigação e aceite de risco", "Noção de severidade e de exposição de um ativo à Internet"],
      "objetivosObservaveis": ["Descrever o ciclo inventário–varredura–priorização–correção–verificação", "Priorizar vulnerabilidades combinando severidade, exposição e explorabilidade", "Diferenciar correção (patch), mitigação e aceite formal de risco", "Explicar por que toda decisão deve ser registrada com responsável e prazo"],
      "competencias": ["Raciocínio de risco: combinar severidade técnica com contexto do órgão", "Julgamento operacional: decidir entre corrigir, mitigar ou aceitar", "Documentação: registrar decisões de risco com responsável e prazo"],
      "dificuldade": "intermediario",
      "relacoes": ["m4-u2-t4-s1 (Segmentação de rede e hardening) — hardening reduz a superfície e se relaciona com correção", "m4-u2-t4-s3 (Defesa em profundidade) — correção de vulnerabilidades é camada de controle", "m4-u2-t3-s3 (Antivírus, EDR e proteção de endpoints) — endpoints são ativos do inventário e exigem correção"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de TI e segurança, com o ciclo de gestão de vulnerabilidades, priorização por risco, CVE e aceite formal, com peso médio por combinar conceito e gestão."
      }
    },
    "niveis": {
      "iniciante": "Gestão de vulnerabilidades é um processo contínuo em cinco etapas: 1) inventário de ativos (o que existe, quem é dono, onde roda); 2) varredura periódica com scanner atualizado e, para aplicações, avaliação específica; 3) priorização; 4) correção (patch, mitigação ou aceite formal); 5) verificação de que a correção funcionou. Priorização não é só severidade técnica.",
      "intermediario": "Priorização combina severidade (impacto potencial), exposição (o ativo está na Internet? trata dados sensíveis?) e explorabilidade (existe exploração conhecida e facilitada?). Identificadores CVE padronizam a referência, mas não substituem o contexto do órgão. Nem todo patch entra imediatamente: pode quebrar aplicação legítima, por isso usam-se janelas de manutenção, testes em homologação e, quando o risco de não corrigir supera o de corrigir, correção de emergência.",
      "avancado": "Quando o patch não existe ou não pode ser aplicado, usa-se mitigação alternativa: desativar função afetada, restringir acesso ou compensar com outro controle. Toda decisão — corrigir, mitigar ou aceitar — deve ser registrada com responsável e prazo; aceite implícito não é gestão. O risco aceito deve ser monitorado e revisado periodicamente.",
      "especialista": "O especialista constrói o ciclo com inventário confiável, scanners atualizados e critério de priorização documentado. Define janelas de manutenção, ambiente de homologação equivalente e processo de correção emergencial justificada. Acompanha indicadores de exploração e revisa riscos aceitos, garantindo que a mitigação temporária não se torne permanente."
    },
    "comparacoes": [
      {
        "tema": "Correção por patch versus mitigação temporária",
        "a": { "rotulo": "Correção (patch)", "texto": "Remove a vulnerabilidade na origem ao aplicar a correção do fornecedor; é a solução definitiva quando não quebra a aplicação." },
        "b": { "rotulo": "Mitigação temporária", "texto": "Reduz o risco sem remover a vulnerabilidade (desativar função, restringir acesso); usada enquanto o patch não pode ser aplicado, com registro e prazo." },
        "diferencaGabarito": "O patch elimina a vulnerabilidade; a mitigação apenas reduz a exposição na janela até a correção definitiva e exige registro formal com prazo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Aplicar todos os patches no dia da publicação é sempre a conduta correta.",
        "porqueErrada": "Patches podem quebrar aplicações em produção; por isso a conduta é priorizar por risco, testar quando possível e registrar as decisões, admitindo correção emergencial justificada quando a exposição é iminente.",
        "versaoCorreta": "Errado como regra absoluta. Patches podem quebrar aplicações; a conduta é priorizar por risco, testar quando possível e registrar decisões — incluindo correção emergencial justificada quando a exposição é iminente."
      },
      {
        "afirmacaoEquivocada": "Priorizar vulnerabilidades apenas pela severidade técnica do scanner é suficiente.",
        "porqueErrada": "A severidade sozinha ignora exposição e explorabilidade; uma vulnerabilidade crítica em ativo sem exposição pode ser menos urgente que uma de severidade média em servidor com dados sensíveis na Internet.",
        "versaoCorreta": "Errado. Priorização combina severidade com exposição do ativo e explorabilidade; a nota do scanner por si só não define a ordem de correção."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Inventário de ativos", "Varredura de vulnerabilidades", "CVE", "Priorização por risco", "Mitigação", "Aceite formal de risco"],
      "regras": ["Combinar severidade com exposição e explorabilidade na priorização", "Testar o patch em ambiente de homologação antes de aplicar", "Registrar toda decisão (corrigir, mitigar, aceitar) com responsável e prazo", "Usar janela de manutenção para correções em produção"],
      "comparacoes": ["Patch remove a vulnerabilidade; mitigação reduz o risco temporariamente com registro e prazo"],
      "fluxos": ["Inventário → varredura → priorização → correção/mitigação/aceite → verificação da correção"],
      "excecoes": ["Nem todo patch entra imediatamente; pode quebrar aplicação legítima, exigindo correção emergencial ou mitigação temporária"],
      "palavrasChave": ["vulnerabilidade", "CVE", "patch", "priorização", "mitigação", "aceite", "explorabilidade", "exposição"],
      "checklist": ["Manter inventário de ativos atualizado com responsáveis", "Executar varredura periódica com scanner atualizado", "Priorizar por severidade, exposição e explorabilidade", "Testar patches em homologação antes da produção", "Registrar decisões de risco com responsável e prazo", "Verificar que a correção funcionou"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Vulnerabilidade crítica foi encontrada em servidor de aplicação exposto à Internet com dados pessoais. Como priorizar frente a outras da mesma semana?",
        "dados": "Servidor de aplicação exposto à Internet; armazena dados pessoais; vulnerabilidade classificada como crítica pelo scanner; outras vulnerabilidades da mesma semana aguardam correção.",
        "conceitos": ["Priorização por risco", "Exposição de ativo", "Dados sensíveis"],
        "estrategia": "Priorizar pelo risco combinado — severidade alta mais exposição externa mais dados sensíveis — e não apenas pela nota do scanner.",
        "execucao": ["Identificar severidade alta da vulnerabilidade", "Confirmar exposição do servidor à Internet", "Confirmar que o ativo armazena dados pessoais (sensíveis)", "Atribuir prioridade máxima e registrar a decisão com responsável e prazo"],
        "resultado": "Prioridade máxima: severidade alta + exposição externa + dados sensíveis + exploração facilitada. O critério de priorização documentado deve refletir essa combinação, e não apenas a nota do scanner.",
        "justificativa": "A combinação de severidade, exposição e sensibilidade dos dados define o risco real, então esse item passa à frente de vulnerabilidades menos expostas mesmo com nota similar.",
        "errosFrequentes": ["Priorizar apenas pela nota crítica do scanner sem considerar exposição", "Deixar de registrar a decisão de priorização com responsável e prazo"],
        "variacao": "Duas vulnerabilidades críticas: uma em servidor interno sem Internet, outra em servidor externo com dados públicos. Qual corrigir primeiro?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O patch disponível quebra módulo legado sem substituição prevista. Qual o caminho correto?",
        "dados": "Patch disponível para vulnerabilidade; módulo legado sem substituição prevista; quebrar o módulo impacta operação do órgão.",
        "conceitos": ["Mitigação", "Aceite formal de risco", "Homologação"],
        "estrategia": "Testar em homologação; se quebrar, aplicar mitigação, registrar risco aceito com responsável e prazo, e planejar substituição do legado.",
        "execucao": ["Testar o patch em ambiente de homologação equivalente", "Confirmar que o patch quebra o módulo legado", "Aplicar mitigação temporária: restringir acesso ao componente ou desativar função afetada", "Registrar risco aceito formalmente com responsável e prazo; planejar substituição do legado"],
        "resultado": "Testar em ambiente de homologação; se quebrar, aplicar mitigação (restringir acesso ao componente, desativar função afetada), registrar risco aceito formalmente com responsável e prazo, planejar substituição do legado e monitorar indicadores de exploração. Registro é obrigatório: aceite implícito não é gestão.",
        "justificativa": "Quando o patch não pode ser aplicado sem quebrar a operação, a mitigação reduz o risco na janela e o registro formal impede que a exceção vire permanência.",
        "errosFrequentes": ["Aplicar o patch direto na produção sabendo que quebra o legado", "Tratar o aceite de risco como algo implícito, sem registro de responsável e prazo"],
        "variacao": "O patch corrige a vulnerabilidade mas degrada o desempenho do sistema em 40%. Qual a conduta?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Aplicar todos os patches no dia da publicação é sempre a conduta correta.' Avalie se está correta.",
        "dados": "Alegação de que todo patch deve ser aplicado no dia da publicação, sem exceção, independentemente de impacto na aplicação.",
        "conceitos": ["Patch", "Janela de manutenção", "Homologação"],
        "estrategia": "Desconstruir a afirmação absoluta mostrando que patches podem quebrar aplicações e que a conduta é priorizar por risco e testar.",
        "execucao": ["Reconhecer que aplicar patches no dia da publicação não é regra absoluta", "Identificar que patches podem quebrar aplicações legítimas", "Concluir que a conduta é priorizar por risco, testar quando possível e registrar decisões"],
        "resultado": "A leitura ingênua instala o patch no dia da publicação sem teste e quebra o módulo legado em produção: aplicar patches imediatamente não é regra absoluta. A conduta é priorizar por risco, testar quando possível e registrar a decisão, com correção emergencial apenas quando a exposição é iminente.",
        "justificativa": "A aplicação imediata sem teste pode causar mais dano que a vulnerabilidade, especialmente em sistemas legítimos que dependem do comportamento alterado.",
        "errosFrequentes": ["Achar que todo patch deve ser instalado no dia da publicação sem exceção", "Confundir correção de emergência com aplicação imediata sem teste"],
        "variacao": "Afirmação: 'Mitigação é sempre preferível a aplicar um patch, porque é mais segura.'"
      }
    ],
  },
  "m4-u2-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Defesa em profundidade sobrepõe camadas independentes de controle, de modo que a falha de uma seja coberta por outra — não é duplicar o mesmo controle. Em concursos de segurança, aparece em camadas de natureza diferente, pressuposto de que a intrusão ocorrerá e casca dura com miolo mole. Achar que dois firewalls iguais em série são profundidade leva ao gabarito errado.",
      "preRequisitos": ["Noção de firewall, WAF e IDS/IPS", "Noção de autenticação e MFA", "Noção de criptografia e backup", "Noção de phishing e engenharia social"],
      "objetivosObservaveis": ["Argumentar pela sobreposição de camadas de controle independentes", "Demonstrar como uma falha isolada não compromete o todo", "Diferenciar defesa em profundidade (camadas diversas) de duplicar o mesmo controle", "Exemplar camadas: perímetro, rede, endpoint, aplicação, dados e pessoas"],
      "competencias": ["Visão sistêmica: enxergar o ataque como caminho que atravessa controles", "Avaliação de custo-benefício: escolher camadas com base no risco", "Análise de cenários: rastrear como cada camada bloqueia um caminho de ataque"],
      "dificuldade": "intermediario",
      "relacoes": ["m4-u2-t4-s1 (Segmentação de rede e hardening) — segmentação e hardening são camadas de rede/endpoint", "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — correção é camada de endpoint", "m4-u2-t3-s3 (Antivírus, EDR e proteção de endpoints) — EDR é camada de endpoint com detecção e resposta"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de segurança, com defesa em profundidade, camadas de controle, pressuposto de intrusão e custo-benefício, com peso médio por combinar arquitetura e gestão de risco."
      }
    },
    "niveis": {
      "iniciante": "Defesa em profundidade é o princípio de empregar múltiplas camadas independentes de controle, de modo que a falha de uma camada seja coberta por outra. Não se trata de duplicar o mesmo controle, mas de combinar controles de naturezas diferentes ao longo do caminho do ataque: perímetro (firewall, WAF), rede (segmentação, IDS/IPS), endpoint (EDR, correções), aplicação (validação de entrada, autenticação), dados (criptografia, backup imutável) e pessoas (treinamento, procedimentos).",
      "intermediario": "Exemplo de caminhos cobertos: phishing que escapa do filtro de e-mail esbarra em MFA; credencial vazada que autentica é limitada por menor privilégio e segmentação; movimentação lateral é vista pelo IDS e pelo monitoramento de registros; cifragem por ransomware é neutralizada por backup imutável fora do alcance. Cada camada tem preço (licença, operação, desempenho), então a escolha segue o risco mapeado.",
      "avancado": "Custo-benefício: profundidade uniforme sem análise de risco desperdiça recursos; profundidade só no perímetro cria a casca dura com miolo mole. O princípio complementar pressupõe que a intrusão ocorrerá — por isso detecção e resposta são parte da profundidade, não opcional. Cada camada deve ter um propósito distinto no caminho do atacante.",
      "especialista": "O especialista desenha o pacote mínimo de camadas com justificativa de risco para cada uma e metas mensuráveis, combinando prevenção, detecção e recuperação. Acompanha indicadores de cada camada, revisa sobreposições redundantes e garante que a falha de um controle seja absorvida por outra sem comprometer o todo."
    },
    "comparacoes": [
      {
        "tema": "Duplicar controle versus camadas independentes",
        "a": { "rotulo": "Duplicar o mesmo controle", "texto": "Dois firewalls iguais em série: a mesma falha ou ataque que atravessa um atravessa o outro, não criando camada nova." },
        "b": { "rotulo": "Camadas independentes (defesa em profundidade)", "texto": "Controles de naturezas diferentes (ex.: MFA + segmentação + backup + monitoramento); a falha de uma é coberta pela outra." },
        "diferencaGabarito": "Duplicar igual não acrescenta proteção; profundidade exige controles de naturezas distintas, de modo que uma falha não comprometa o todo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Defesa em profundidade significa ter dois firewalls iguais em série.",
        "porqueErrada": "Repetir o mesmo controle não cria uma camada nova de defesa: a mesma falha ou o mesmo ataque que atravessa um atravessa o outro. Profundidade exige controles de naturezas distintas.",
        "versaoCorreta": "A defesa em profundidade combina controles de naturezas distintas, de modo que a falha de um seja coberta por outro; dois filtros idênticos em série apenas repetem a mesma barreira."
      },
      {
        "afirmacaoEquivocada": "Defesa em profundidade é só prevenção: impedir o ataque de entrar.",
        "porqueErrada": "A profundidade pressupõe que a intrusão ocorrerá, então detecção e resposta são parte dela, não opcional; sem detecção, uma camada rompida deixa o atacante livre.",
        "versaoCorreta": "Errado. A defesa em profundidade pressupõe que a intrusão ocorrerá, por isso detecção e resposta são parte da profundidade, e não apenas prevenção."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Defesa em profundidade", "Camadas independentes", "Pressuposto de intrusão", "Casca dura com miolo mole", "Detecção e resposta"],
      "regras": ["Combinar controles de naturezas diferentes ao longo do caminho do ataque", "Cada camada deve ter um propósito distinto", "Detecção e resposta são parte da profundidade, não opcional", "Escolher camadas com base no risco mapeado"],
      "comparacoes": ["Dois firewalls iguais não são profundidade; MFA + segmentação + backup + monitoramento são"],
      "fluxos": ["Ataque tenta perímetro → falha → camada seguinte bloqueia → detecção e resposta contêm o dano"],
      "excecoes": ["Profundidade uniforme sem análise de risco desperdiça recursos; profundidade só no perímetro cria casca dura com miolo mole"],
      "palavrasChave": ["defesa em profundidade", "camada", "perímetro", "endpoint", "dados", "pessoas", "intrusão", "detecção"],
      "checklist": ["Mapear caminhos de ataque do perímetro aos dados", "Escolher camadas de natureza distinta para cada caminho", "Combinar prevenção, detecção e recuperação", "Justificar cada camada com base no risco", "Testar que uma falha de camada é coberta por outra", "Revisar sobreposições redundantes e custo-benefício"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Liste três camadas independentes que impedem o roubo de senha de um servidor público.",
        "dados": "Servidor público; risco de roubo de senha; três camadas de natureza diferente necessárias.",
        "conceitos": ["Camadas independentes", "MFA", "Filtro de e-mail"],
        "estrategia": "Apresentar camadas de naturezas diferentes (pessoas, autenticação e rede) que juntas impedem o roubo de senha.",
        "execucao": ["Camada de pessoas: filtro de e-mail e treinamento reduzem phishing", "Camada de autenticação: MFA resistente a phishing impede uso da senha roubada sozinha", "Camada de rede: restrição de origem e monitoramento de login anômalo contêm tentativa residual"],
        "resultado": "1) Filtro de e-mail e treinamento (reduzem phishing). 2) MFA resistente a phishing (impede uso da senha roubada sozinha). 3) Restrição de origem e monitoramento de login anômalo (contêm tentativa residual). Camadas de naturezas diferentes: pessoas, autenticação e rede.",
        "justificativa": "Cada camada atua em um ponto diferente do caminho do ataque, de modo que o falhamento de uma ainda é contido pela outra.",
        "errosFrequentes": ["Listar três camadas do mesmo tipo (ex.: três firewalls)", "Esquecer que as camadas devem ser de naturezas distintas"],
        "variacao": "Liste três camadas independentes que impedem a infecção por ransomware em uma estação de trabalho."
      },
      {
        "tipo": "aplicacao",
        "problema": "A gestão pede concentrar orçamento em um único controle 'que resolva o problema'. Como argumentar tecnicamente?",
        "dados": "Gestão quer um único controle; orçamento limitado; necessidade de demonstrar que nenhum controle único cobre todos os caminhos de ataque.",
        "conceitos": ["Caminhos de ataque", "Custo-benefício", "Pacote mínimo de camadas"],
        "estrategia": "Apresentar mapa de caminhos de ataque mostrando que nenhum controle único cobre todos; propor pacote mínimo com MFA, correção priorizada, segmentação, backup imutável e monitoramento.",
        "execucao": ["Apresentar o mapa de caminhos de ataque do órgão", "Mostrar que nenhum controle único cobre todos os caminhos", "Propor pacote mínimo: MFA, correção priorizada, segmentação básica, backup imutável testado, monitoramento", "Combinar prevenção, detecção e recuperação com justificativa de risco e metas mensuráveis"],
        "resultado": "Apresentar o mapa de caminhos de ataque: nenhum controle único cobre todos os caminhos. Propor pacote mínimo com MFA, correção priorizada, segmentação básica, backup imutável testado e monitoramento — combinando prevenção, detecção e recuperação —, com justificativa de risco para cada camada e metas mensuráveis.",
        "justificativa": "Sem sobreposição de camadas, um único ponto de falha compromete tudo; com o pacote mínimo, cada caminho de ataque é coberto por mais de uma camada.",
        "errosFrequentes": ["Aceitar concentrar orçamento em um único controle", "Esquecer de incluir detecção e recuperação, não só prevenção"],
        "variacao": "A gestão quer comprar um firewall de última geração e cortar todos os outros controles de segurança. Qual o argumento?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Defesa em profundidade significa ter dois firewalls iguais em série.' Avalie se está correta.",
        "dados": "Alegação de que defesa em profundidade é duplicar o mesmo controle (dois firewalls iguais em série).",
        "conceitos": ["Duplicar controle", "Camadas independentes", "Defesa em profundidade"],
        "estrategia": "Desconstruir a afirmação mostrando que repetir o mesmo controle não cria camada nova e que profundidade exige controles de naturezas distintas.",
        "execucao": ["Reconhecer que repetir o mesmo controle não cria camada nova", "Identificar que a mesma falha atravessa ambos os firewalls iguais", "Concluir que profundidade exige controles de naturezas distintas ao longo do caminho do ataque"],
        "resultado": "Errado. Dois firewalls iguais em série não criam camada nova: a mesma falha que atravessa um atravessa o outro. Profundidade exige controles de naturezas distintas.",
        "justificativa": "Dois firewalls iguais compartilham a mesma superfície de falha, então um ataque que passa um passa o outro; apenas camadas diversas contêm o dano.",
        "errosFrequentes": ["Achar que mais do mesmo já é defesa em profundidade", "Confundir quantidade de controles com diversidade de camadas"],
        "variacao": "Afirmação: 'Instalar antivírus em duas estações diferentes já é defesa em profundidade.'"
      }
    ]
  }
};
