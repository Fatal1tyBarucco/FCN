/* questions_m4.js — MÓDULO 4: SEGURANÇA DA INFORMAÇÃO E GOVERNANÇA DIGITAL
 * 85 questões autorais (q-m4-01..q-m4-85). DISTRIBUIÇÃO REAL CONFIRMADA POR
 * LEITURA DO ARQUIVO (P1-D, 2026-10-22 — o cabeçalho anterior declarava 40,
 * o que não correspondia ao conteúdo; corrigido para refletir a realidade):
 *   4.1 Fundamentos de Segurança — 10 (q-m4-01..q-m4-10)
 *   4.2 Malwares — 10 (q-m4-11..q-m4-20)
 *   4.3 Ameaças e Ataques — 10 (q-m4-21..q-m4-30)
 *   4.4 Legislação — 55 (q-m4-31..q-m4-85)
 * Níveis: 9 básico (10,6%) / 67 intermediário (78,8%) / 9 avançado (10,6%).
 * Formatos: 84 múltipla escolha + 1 Certo/Errado. Estilo: 85 × "cespe"
 * (formato de cobrança, não banca real — todas as questões são autorais,
 * origem: 'autoral'). Formato compatível com quiz-engine.js (validarQuestao).
 * P1-D: corrigidas aspas duplas não escapadas ("Man-in-the-Middle", campo
 * assunto de q-m4-25 e q-m4-30), justificativa não terminada de q-m4-53,
 * alternativa C mal formada de q-m4-74, campo `enunciado` ausente de
 * q-m4-36 e 17 ocorrências de "when" (inglês) em texto pt-BR — trocadas por
 * "quando"/"quando necessário". Nenhuma alteração de gabarito ou conteúdo
 * técnico das questões. Revisão de pós-PR #5 (P1-D): q-m4-32 foi reescrita —
 * a alternativa correta afirmava uma lista inventada de "princípios" do
 * Marco Civil ("liberdade, suscetibilidade, pluralidade, portabilidade e
 * segurança"); a questão foi corrigida para listar princípios reais do
 * art. 3º (neutralidade de rede, proteção da privacidade e proteção de
 * dados pessoais), com distratores verificáveis (fundamentos do art. 2º
 * apresentados como princípios; censura prévia; compartilhamento livre de
 * dados de conexão). Fonte: Lei nº 12.965/2014, arts. 2º e 3º, texto
 * oficial verificado em planalto.gov.br em 2026-10-22. As questões q-m4-40
 * e q-m4-42 não repetem a lista inventada e mantêm citações corretas —
 * preservadas; a q-m4-44 foi corrigida em 2026-10-23 (imprecisão léxica
 * sobre princípios/fundamentos do Marco Civil e typo), com gabarito e
 * alternativas intactos. Re-verificação do PR #5 (2026-10-23): a análise de
 * q-m4-70 foi traduzida para pt-BR e as citações dos arts. 8º e 15 da q-m4-32
 * (usados como fonte de vedação de filtragem e de anonimato) foram corrigidas
 * para o texto oficial — art. 9º, §3º, e art. 19 —, com fonte re-verificada
 * no planalto.gov.br em 2026-10-23. */

const moduleQuestions4 = [

/* ===================== 4.1 Fundamentos de Segurança (10 questões) ===================== */

  { id: "q-m4-01", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m4-u1-t1-s1", assunto: "4.1 — Tríade CIA",
    contexto: "Uma empresa adota o modelo de segurança da informação baseado na tríade CIA.",
    enunciado: "Qual o termo que descreve a propriedade pela qual a informação só pode ser acessada por usuários autorizados?",
    alternativas: [
      { letra: "A", texto: "Disponibilidade" },
      { letra: "B", texto: "Integridade" },
      { letra: "C", texto: "Confidencialidade" },
      { letra: "D", texto: "Autenticidade" },
      { letra: "E", texto: "Não repúdio" }
    ],
    gabarito: "C",
    justificativa: "A confidencialidade garante que a informação só seja acessada por pessoas ou sistemas autorizados. A disponibilidade garante o acesso quando necessário (alternativa A incorreta); a integridade garante que os dados não sejam alterados sem autorização (alternativa B incorreta); a autenticidade e o não repúdio são conceitos complementares, não a definição de acesso restrito.",
    analise: {
      A: "INCORRETA. Erro conceitual: disponibilidade refere-se à garantia de acesso quando necessário, não ao controle de acesso.",
      B: "INCORRETA. Erro conceitual: integridade refere-se à preservação da exatidão e da não alteração não autorizada dos dados.",
      C: "CORRETA. Confidencialidade é o princípio que restringe o acesso à informação a usuários autorizados.",
      D: "INCORRETA. Autenticidade é o processo de verificação da identidade, não o controle de acesso em si.",
      E: "INCORRETA. Não repúdio impede a negação de uma operação realizada, sendo um requisito complementar."
    },
    regra: "Tríade CIA: Confidencialidade (acesso restrito), Integridade (dados corretos e não alterados), Disponibilidade (acesso quando necessário).",
    pegadinha: "Não confundir disponibilidade com confidencialidade: disponibilidade é 'quando precisa', confidencialidade é 'quem pode acessar'.",
    fonte: "NIST SP 800-122 (Guia para a proteção de informações pessoais), 2010."
  },

  { id: "q-m4-02", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m4-u1-t1-s2", assunto: "4.1 — Integridade",
    contexto: "Um sistema garante que nenhuma informação foi alterada sem autorização.",
    enunciado: "Em termos de segurança da informação, a integridade significa que:",
    alternativas: [
      { letra: "A", texto: "A informação está disponível a qualquer usuário." },
      { letra: "B", texto: "A informação não pode ser alterada sem autorização." },
      { letra: "C", texto: "A informação é criptografada com chave pública." },
      { letra: "D", texto: "A informação é armazenada em backups múltiplos." },
      { letra: "E", texto: "A informação é assinada digitalmente." }
    ],
    gabarito: "B",
    justificativa: "Integridade garante que os dados são precisos e não foram modificados de maneira não autorizada. A disponibilidade é a característica de 'acesso quando necessário' (alternativa A incorreta); a criptografia e a assinatura digital são mecanismos que ajudam a preservar integridade, mas não a definam o princípio (alternativas C e E incorretas); a múltipla cópia (backup) protege contra perda, não garante integridade (alternativa D incorreta).",
    analise: {
      A: "INCORRETA. Disponibilidade — o conceito que garante acesso quando necessário.",
      B: "CORRETA. Integridade é a propriedade de preservação da exatidão e não alteração não autorizada.",
      C: "INCORRETA. Criptografia é um meio de proteção, não a definição de integridade.",
      D: "INCORRETA. Backup protege contra perda de dados, não garante integridade.",
      E: "INCORRETA. Assinatura digital ajuda a garantir autenticidade e integridade, mas o princípio é a integridade."
    },
    regra: "Integridade: dados precisos, consistentes e não alterados sem autorização.",
    pegadinha: "A integridade não significa 'sem erro algum', mas 'sem alteração não autorizada'.",
    fonte: "ISO/IEC 27000:2018, Cláusula 3.5.2 (Integridade de informação)."
  },

  { id: "q-m4-03", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m4-u1-t1-s3", assunto: "4.1 — Disponibilidade",
    contexto: "Uma agência pública precisa garantir que seus sistemas estejam operacionais 24/7.",
    enunciado: "O princípio da disponibilidade garante que:",
    alternativas: [
      { letra: "A", texto: "A informação só pode ser acessada por autorizados." },
      { letra: "B", texto: "O sistema está disponível quando o usuário precisa acessá-lo." },
      { letra: "C", texto: "A informação nunca será alterada." },
      { letra: "D", texto: "Os dados estão copiados em múltiplos locais." },
      { letra: "E", texto: "Os usuários são autenticados corretamente." }
    ],
    gabarito: "B",
    justificativa: "Disponibilidade significa que sistemas e dados estão acessíveis quando o usuário precisa utilizá-los. Confidencialidade restringe o acesso (alternativa A incorreta); integridade é a preservação da exatidão (alternativa C incorreta); cópias de backup protegem contra perda (alternativa D incorreta); autenticação é o processo de verificação de identidade (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Confidencialidade — restrição de acesso a autorizados.",
      B: "CORRETA. Disponibilidade garante acesso quando o usuário precisa.",
      C: "INCORRETA. Isso descreve integridade, não disponibilidade.",
      D: "INCORRETA. Múltiplos locais descreve replicação/backup, não disponibilidade em si.",
      E: "INCORRETA. Autenticação é o processo de verificação de identidade."
    },
    regra: "Disponibilidade: 'a informação está lá quando você precisa' — uptime, redundância, escalonamento.",
    pegadinha: "Disponibilidade não é 'acessível a todos' — é 'acessível quando necessário'. Confidencialidade é quem pode acessar.",
    fonte: "ISO/IEC 27000:2018, Cláusula 3.5.3 (Disponibilidade de informação)."
  },

  { id: "q-m4-04", modulo: 4, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Controles de segurança",
    contexto: "Um governo adota controles preventivos, detectivos e corretivos para proteger os ativos digitais.",
    enunciado: "Afirmação: 'Um controle corretivo é aquele que impede a ocorrência de uma ameaça antes que ela se materialize.'",
    corrigir: true,
    gabarito: "errado",
    trechoDeterminante: "A definição de controle corretivo está incorreta na afirmação.",
    justificativa: "Controles corretivos agem APÓS a ocorrência de um evento (ex: restauração de backup, remoção de malware). Controles preventivos agem ANTES (ex: firewall, política de senha). A afirmação inverte o funcionamento dos dois tipos, tornando-a falsa.",
    analise: {
      item: "INCORRETA. Controles corretivos agem depois da ocorrência de um incidente (ex: remediação, recuperação), não antes. Controles preventivos agem antes (ex: firewall, criptografia), e controles detectivos identificam a ocorrência (ex: IDS, logs)."
    },
    regra: "Controles: preventivos (antes), detectivos (durante), corretivos (depois), compensatórios (alternativos).",
    pegadinha: "Múltiplos controles na mesma frase podem confundir a ordem de atuação (antes/depois).",
    fonte: "NIST SP 800-53 (Security and Privacy Controls), controle CP (Preventive) e CA (Corrective)."
  },

  { id: "q-m4-05", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Autenticação MFA",
    contexto: "Uma organização adota Multi-Fator Authentication (MFA) para proteger o acesso aos sistemas.",
    enunciado: "Sobre a Autenticação em Múltiplos Fatores (MFA), é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "A MFA elimina necessariamente a senha em todos os sistemas." },
      { letra: "B", texto: "A MFA exige duas ou mais formas independentes de verificação." },
      { letra: "C", texto: "A MFA é aplicável apenas a sistemas operacionais." },
      { letra: "D", texto: "A MFA aumenta a segurança, mas sempre impede o acesso remoto." },
      { letra: "E", texto: "A MFA é uma política de criptografia de dados." }
    ],
    gabarito: "B",
    justificativa: "MFA exige duas ou mais formas independentes de verificação: saber (senha), possuir (dispositivo) ou ser (biometria). A MFA não elimina a senha — pode usá-la como um dos fatores (alternativa A incorreta); a MFA é amplamente aplicável a qualquer sistema crítico, não apenas sistemas operacionais (alternativa C incorreta); a MFA reduz significativamente o risco, mas não garante absolutamente impedir tudo (alternativa D incorreta); a criptografia é outra camada de segurança, não a definição de MFA (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. A MFA não elimina a senha — pode integrar-se a ela como um dos fatores.",
      B: "CORRETA. MFA exige duas ou mais formas independentes de verificação (saber, possuir, ser).",
      C: "INCORRETA. A MFA é aplicável a sistemas e serviços de toda a arquitetura da informação.",
      D: "INCORRETA. A MFA aumenta a segurança significativamente, mas não garante absoluto.",
      E: "INCORRETA. A MFA é um mecanismo de autenticação que comprova a identidade do usuário por dois ou mais fatores independentes; política de criptografia é controle distinto, que protege os dados em repouso e em trânsito."
    },
    regra: "Fatores de autenticação: 1) Saber (senha, PIN), 2) Possuir (token, celular), 3) Ser (biometria).",
    pegadinha: "A MFA não elimina a senha — ela a complementa com um segundo fator independente.",
    fonte: "NIST SP 800-63B (Digital Identity Guidelines), 2017."
  },

  { id: "q-m4-06", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "modulo-4-unidade-1-topico-3", assunto: "4.1 — Criptografia simétrica vs assimétrica",
    contexto: "Dois sistemas precisam se comunicar com segurança. Um deles usa criptografia simétrica e outro, assimétrica.",
    enunciado: "Qual a principal diferença entre criptografia simétrica e assimétrica?",
    alternativas: [
      { letra: "A", texto: "A simétrica usa chave pública e privada, a assimétrica usa uma única chave." },
      { letra: "B", texto: "A simétrica usa a mesma chave para criptografar e descriptografar; a assimétrica usa um par de chaves." },
      { letra: "C", texto: "A simétrica é mais lenta que a assimétrica para grandes volumes de dados." },
      { letra: "D", texto: "A assimétrica não pode ser usada para assinatura digital." },
      { letra: "E", texto: "A simétrica não é segura." }
    ],
    gabarito: "B",
    justificativa: "Criptografia simétrica usa uma única chave compartilhada para criptografar e descriptografar; assimétrica usa um par de chaves pública/privada. A afirmação A inverte os tipos (incorreta); a simétrica é geralmente mais rápida do que a assimétrica (afirmação C incorreta — é a oposta); a assimétrica é amplamente usada para assinatura digital e troca de chaves (afirmação D incorreta); e a criptografia simétrica é altamente segura quando a chave é bem gerenciada (afirmação E incorreta).",
    analise: {
      A: "INCORRETA. Inverte os conceitos: a simétrica usa chave única, a assimétrica usa par de chaves.",
      B: "CORRETA. Simétrica: uma chave. Assimétrica: par público/privado.",
      C: "INCORRETA. A simétrica é geralmente mais rápida e é preferida para grandes volumes de dados.",
      D: "INCORRETA. A assimétrica é fundamental para assinatura digital e troca de chaves.",
      E: "INCORRETA. Criptografia simétrica é altamente segura quando a chave é protegida."
    },
    regra: "Criptografia simétrica usa chave secreta compartilhada; criptografia assimétrica usa um par de chaves relacionadas. Exemplos e operações dependem do algoritmo.",
    pegadinha: "Simétrica e assimétrica diferem pela quantidade de chaves: 1 para simétrica, 2 (par) para assimétrica.",
    fonte: "NIST FIPS 197 (AES), 2001."
  },

  { id: "q-m4-07", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.1 — Backup e estratégia 3-2-1",
    contexto: "Uma empresa adota a estratégia de backup 3-2-1 para proteção de dados.",
    enunciado: "Na estratégia de backup 3-2-1, o número 1 indica que:",
    alternativas: [
      { letra: "A", texto: "Três cópias dos dados devem existir." },
      { letra: "B", texto: "Dois sistemas de armazenamento devem ser usados." },
      { letra: "C", texto: "Uma cópia extra deve ser mantida fora do local (offline ou em nuvem)." },
      { letra: "D", texto: "Exatamente um backup por hora." },
      { letra: "E", texto: "Um plano de recuperação de desastres deve ser documentado." }
    ],
    gabarito: "C",
    justificativa: "Estratégia 3-2-1: 3 cópias dos dados, 2 sistemas de armazenamento diferentes, 1 cópia fora do local ou offline/imutável. Três cópias é o 3 (alternativa A incorreta); dois sistemas de armazenamento é o 2 (alternativa B incorreta); um plano de recuperação é uma prática recomendada, mas não o '1' da estratégia (alternativa E incorreta); a regra não define frequência de backup (alternativa D incorreta).",
    analise: {
      A: "INCORRETA. 3 cópias são o '3' da estratégia — o 3 está correto, mas a pergunta pede o 1.",
      B: "INCORRETA. Dois sistemas de armazenamento são o '2'.",
      C: "CORRETA. O '1' da regra tradicional refere-se a uma cópia fora do local; offline ou imutável são proteções adicionais.",
      D: "INCORRETA. A regra 3-2-1 não define frequência de backup.",
      E: "INCORRETA. Documentação de planos de recuperação é importante, mas não é o '1' da estratégia 3-2-1."
    },
    regra: "3-2-1: três cópias, dois tipos de mídia e uma cópia fora do local; offline ou imutável são proteções adicionais.",
    pegadinha: "O 3-2-1 não é 3 três cópias, 2 dois sistemas, 1 um único local — o 1 é a cópia fora do local.",
    fonte: "Veeam Blog — The 3-2-1 Backup Rule, 2016."
  },

  { id: "q-m4-08", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.1 — RPO e RTO",
    contexto: "Uma organização define objetivos de recuperação para seus sistemas críticos.",
    enunciado: "Qual alternativa distingue corretamente RPO (Recovery Point Objective) de RTO (Recovery Time Objective)?",
    alternativas: [
      { letra: "A", texto: "RPO é o tempo-alvo para recuperar o serviço; RTO é o ponto de recuperação dos dados." },
      { letra: "B", texto: "RPO define o ponto temporal de recuperação e a perda de dados tolerável; RTO define o tempo-alvo para restabelecer o serviço." },
      { letra: "C", texto: "RPO e RTO são sinônimos e podem ser usados sem distinção." },
      { letra: "D", texto: "RPO mede o número de usuários simultâneos; RTO mede a capacidade de armazenamento." },
      { letra: "E", texto: "RTO e RPO garantem que nunca haverá perda de dados ou indisponibilidade." }
    ],
    gabarito: "B",
    justificativa: "RPO (Recovery Point Objective) estabelece o ponto temporal até o qual os dados devem ser recuperados e orienta a perda de dados tolerável. RTO (Recovery Time Objective) estabelece o tempo-alvo para restabelecer o serviço. São objetivos distintos, derivados das necessidades de negócio e validados por meio de testes de recuperação.",
    analise: {
      A: "INCORRETA. Inverte os conceitos: RPO trata do ponto de recuperação dos dados; RTO, do tempo de recuperação do serviço.",
      B: "CORRETA. A alternativa distingue a perda de dados tolerável do tempo-alvo para restabelecimento.",
      C: "INCORRETA. RPO e RTO representam objetivos diferentes.",
      D: "INCORRETA. Essas descrições não correspondem aos conceitos de recuperação.",
      E: "INCORRETA. São metas de planejamento, não garantias de perda zero ou disponibilidade contínua."
    },
    regra: "RPO = ponto de recuperação/perda de dados tolerável; RTO = tempo-alvo para restabelecer o serviço.",
    pegadinha: "Metas de RPO e RTO precisam ser tecnicamente viáveis e testadas; defini-las não garante que serão cumpridas.",
    fonte: "NIST SP 800-34 Rev. 1 — Contingency Planning Guide for Federal Information Systems: https://csrc.nist.gov/pubs/sp/800/34/r1/final."
  },

  { id: "q-m4-09", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Controle de acesso e princípio do menor privilégio",
    contexto: "Uma organização adota o princípio do menor privilégio para gestão de acessos.",
    enunciado: "O princípio do menor privilégio (least privilege) significa que:",
    alternativas: [
      { letra: "A", texto: "Todo usuário deve ter acesso a todos os recursos do sistema." },
      { letra: "B", texto: "Os usuários devem receber apenas os privilégios necessários para realizar sua função." },
      { letra: "C", texto: "Os administradores devem ter privilégios ilimitados sempre." },
      { letra: "D", texto: "O acesso aos sistemas deve ser negado permanentemente." },
      { letra: "E", texto: "A criptografia é o único controle de acesso eficaz." }
    ],
    gabarito: "B",
    justificativa: "Menor privilégio: conceder ao usuário ou processo apenas os direitos estritamente necessários para executar suas funções. Acesso irrestrito viola o princípio (alternativa A incorreta); administradores devem ter privilégios elevados, mas apenas quando necessário — com administração restringida (alternativa C incorreta); o princípio não prossegue com negação permanente de acesso em todos os casos (alternativa D incorreta); a criptografia e outros controles de segurança são complementares, não exclusivos (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Acesso irrestrito é o oposto do princípio do menor privilégio.",
      B: "CORRETA. Menor privilégio: apenas os direitos necessários para a função.",
      C: "INCORRETA. Administradores devem ter privilégios quando necessário, mas não ilimitados 24/7.",
      D: "INCORRETA. O princípio não nega acesso; ele restringe ao necessário.",
      E: "INCORRETA. Criptografia é um controle de segurança, não o único controle de acesso."
    },
    regra: "Menor privilégio: conceder somente as permissões necessárias para a função, reduzindo a superfície de ataque.",
    pegadinha: "Menor privilégio não significa 'nenhum acesso', significa 'nenhum além do necessário'.",
    fonte: "NIST SP 800-53 (AC-2: Account Management; AC-3: Access Enforcement)."
  },

  { id: "q-m4-10", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Ameaça, vulnerabilidade e risco",
    contexto: "Um servidor exposto à internet possui uma falha conhecida e recebe tentativas de exploração.",
    enunciado: "Qual alternativa diferencia corretamente ameaça, vulnerabilidade e risco?",
    alternativas: [
      { letra: "A", texto: "A ameaça é a falha técnica; a vulnerabilidade é o impacto financeiro." },
      { letra: "B", texto: "A vulnerabilidade é uma fraqueza; a ameaça é um agente ou evento potencialmente danoso; o risco considera a possibilidade e as consequências no contexto." },
      { letra: "C", texto: "Risco é sinônimo de ameaça e independe da criticidade do ativo." },
      { letra: "D", texto: "A presença de uma vulnerabilidade prova que ela já foi explorada." },
      { letra: "E", texto: "Uma ameaça só existe depois que o dano está confirmado." }
    ],
    gabarito: "B",
    justificativa: "Vulnerabilidade é uma fraqueza que pode ser explorada; ameaça é uma circunstância, evento ou agente com potencial de causar dano; risco é avaliado considerando probabilidade e consequências no contexto. Uma vulnerabilidade não comprova, por si só, que houve exploração, e a priorização depende da exposição, da criticidade e do impacto potencial.",
    analise: {
      A: "INCORRETA. A falha técnica é a vulnerabilidade; impacto e probabilidade integram a avaliação de risco.",
      B: "CORRETA. A alternativa diferencia os três conceitos e considera o contexto da avaliação.",
      C: "INCORRETA. Ameaça e risco são conceitos relacionados, mas não sinônimos; criticidade e contexto importam.",
      D: "INCORRETA. Uma vulnerabilidade pode existir sem ter sido explorada.",
      E: "INCORRETA. A ameaça pode existir antes de qualquer dano confirmado."
    },
    regra: "Vulnerabilidade = fraqueza; ameaça = agente/evento potencialmente danoso; risco = avaliação contextual de possibilidade e consequências.",
    pegadinha: "Encontrar uma vulnerabilidade não prova exploração; diferencie a fraqueza, a ameaça e o risco associado.",
    fonte: "NIST SP 800-30 Rev. 1 — Guide for Conducting Risk Assessments: https://csrc.nist.gov/pubs/sp/800/30/r1/final."
  },

  { id: "q-m4-11", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "basico", topico: "m4-u2-t1-s1", assunto: "4.2 — Vírus e worms",
    contexto: "Uma equipe analisa dois códigos maliciosos: um infecta arquivos executáveis e outro consegue se propagar entre sistemas vulneráveis sem precisar ser anexado a um arquivo hospedeiro.",
    enunciado: "Qual distinção entre vírus e worm é mais precisa?",
    alternativas: [
      { letra: "A", texto: "Um vírus normalmente se associa a um arquivo ou programa hospedeiro; um worm é capaz de se replicar e se propagar de forma independente." },
      { letra: "B", texto: "Vírus se propagam apenas pela internet, enquanto worms se propagam apenas por mídias removíveis." },
      { letra: "C", texto: "Worms não podem causar danos nem instalar outros componentes." },
      { letra: "D", texto: "Vírus sempre exigem uma ação humana para cada propagação e worms nunca dependem de condições externas." },
      { letra: "E", texto: "A diferença é determinada pelo tamanho do arquivo malicioso." }
    ],
    gabarito: "A",
    justificativa: "Um vírus se associa a um arquivo, programa ou objeto hospedeiro e sua propagação costuma depender da execução desse objeto. Um worm é um programa independente capaz de se propagar entre sistemas, por exemplo explorando serviços vulneráveis. Ambos podem transportar outras cargas maliciosas, e a propagação real depende do ambiente e das condições técnicas.",
    analise: {
      A: "CORRETA. A distinção central é a dependência de um hospedeiro para o vírus versus a capacidade de propagação independente do worm.",
      B: "INCORRETA. Os meios de propagação não se limitam dessa forma.",
      C: "INCORRETA. Worms podem causar danos ou distribuir outras cargas maliciosas.",
      D: "INCORRETA. A propagação depende do mecanismo e do ambiente; a alternativa usa absolutos indevidos.",
      E: "INCORRETA. Tamanho do arquivo não define a categoria."
    },
    regra: "Vírus se associa a um hospedeiro; worm é independente e pode se propagar entre sistemas.",
    pegadinha: "A diferença não é o grau de perigo nem o tamanho; considere dependência de hospedeiro e mecanismo de propagação.",
    fonte: "NIST SP 800-83 Rev. 1 — Guide to Malware Incident Prevention and Handling for Desktops and Laptops: https://csrc.nist.gov/pubs/sp/800/83/r1/final."
  },

  { id: "q-m4-12", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "basico", topico: "m4-u2-t1-s2", assunto: "4.2 — Trojan e execução induzida",
    contexto: "Um usuário instala um utilitário que aparenta ser legítimo, mas que, após execução, realiza atividades não autorizadas.",
    enunciado: "Qual característica é mais associada a um cavalo de Troia (trojan)?",
    alternativas: [
      { letra: "A", texto: "Disfarçar sua finalidade ou se apresentar como software legítimo para induzir a execução; suas funções podem incluir roubo de dados ou acesso remoto." },
      { letra: "B", texto: "Replicar-se automaticamente em todos os dispositivos sem depender de execução ou interação." },
      { letra: "C", texto: "Ser um controle de rede que bloqueia conexões não autorizadas." },
      { letra: "D", texto: "Ser um mecanismo de backup que restaura arquivos excluídos." },
      { letra: "E", texto: "Ser um protocolo criptográfico que autentica servidores." }
    ],
    gabarito: "A",
    justificativa: "Um trojan se apresenta ou é distribuído como algo legítimo para induzir sua execução, mas realiza ações não autorizadas. Pode instalar outros componentes, roubar dados ou permitir acesso remoto, mas nenhuma dessas funções é obrigatória em todos os trojans. A autorreplicação independente é mais característica de worms.",
    analise: {
      A: "CORRETA. O disfarce ou a aparência legítima é característica comum do trojan; a carga maliciosa varia.",
      B: "INCORRETA. A propagação independente não é a característica definidora de um trojan.",
      C: "INCORRETA. Um controle de rede é uma medida defensiva, não um trojan.",
      D: "INCORRETA. Backup e restauração são funções de recuperação.",
      E: "INCORRETA. Protocolo criptográfico é uma tecnologia de segurança, não malware."
    },
    regra: "Trojan induz a execução ao se apresentar como software ou conteúdo legítimo; suas funções maliciosas variam.",
    pegadinha: "Nem todo trojan abre um backdoor, e nem todo malware que rouba dados é necessariamente classificado apenas como trojan.",
    fonte: "NIST SP 800-83 Rev. 1 — Guide to Malware Incident Prevention and Handling for Desktops and Laptops: https://csrc.nist.gov/pubs/sp/800/83/r1/final."
  },

  { id: "q-m4-13", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "basico", topico: "m4-u2-t1-s3", assunto: "4.2 — Ransomware e extorsão",
    contexto: "Uma organização perde acesso a arquivos críticos e recebe uma mensagem exigindo pagamento. A equipe também encontra indícios de que dados podem ter sido copiados antes do bloqueio.",
    enunciado: "Qual afirmação sobre ransomware é mais correta?",
    alternativas: [
      { letra: "A", texto: "Ransomware pode bloquear ou criptografar dados e exigir resgate; algumas campanhas também ameaçam divulgar informações exfiltradas." },
      { letra: "B", texto: "Todo ransomware apenas exclui arquivos temporariamente e não pode afetar cópias de segurança." },
      { letra: "C", texto: "Pagar o resgate garante recuperação dos dados e impede divulgação." },
      { letra: "D", texto: "Ransomware é um método legítimo de testar a segurança, independentemente de autorização." },
      { letra: "E", texto: "Ransomware só existe quando o atacante consegue criptografar todos os dispositivos da organização." }
    ],
    gabarito: "A",
    justificativa: "Ransomware pode negar acesso por criptografia ou outros mecanismos e exigir pagamento. Algumas campanhas combinam isso com exfiltração e ameaça de divulgação, chamada frequentemente de dupla extorsão. O pagamento não garante recuperação nem impede publicação; a resposta deve seguir o plano de incidentes, preservar evidências e acionar equipes e autoridades pertinentes.",
    analise: {
      A: "CORRETA. A alternativa inclui bloqueio/criptografia e a possibilidade de extorsão baseada em dados exfiltrados.",
      B: "INCORRETA. O impacto pode persistir e cópias acessíveis podem ser afetadas; backups precisam ser isolados e testados.",
      C: "INCORRETA. Não há garantia de que o pagamento resulte em recuperação ou confidencialidade.",
      D: "INCORRETA. A autorização e o escopo são indispensáveis para testes de segurança legítimos.",
      E: "INCORRETA. O ataque pode afetar apenas parte dos sistemas ou usar outras formas de bloqueio e extorsão."
    },
    regra: "Ransomware pode bloquear/criptografar dados e extorquir; algumas campanhas também exfiltram dados. Pagamento não garante recuperação.",
    pegadinha: "Não reduza ransomware a criptografia de todos os arquivos nem presuma que pagar resolve o incidente.",
    fonte: "CISA, #StopRansomware Guide: https://www.cisa.gov/stopransomware/ransomware-guide."
  },

  { id: "q-m4-14", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-2-topico-1", assunto: "4.2 — Botnets e dispositivos comprometidos",
    contexto: "Uma equipe de segurança identifica milhares de dispositivos comprometidos que recebem comandos de uma infraestrutura de controle e geram tráfego coordenado.",
    enunciado: "Qual descrição de botnet é mais adequada?",
    alternativas: [
      { letra: "A", texto: "Conjunto de dispositivos comprometidos coordenados por um operador ou infraestrutura de comando e controle, que podem ser usados para atividades como DDoS, spam ou outras ações maliciosas." },
      { letra: "B", texto: "Rede privada protegida por firewall, sem dispositivos comprometidos." },
      { letra: "C", texto: "Algoritmo criptográfico que distribui chaves públicas." },
      { letra: "D", texto: "Serviço de backup que replica dados entre dispositivos." },
      { letra: "E", texto: "Protocolo seguro que impede o controle remoto de dispositivos." }
    ],
    gabarito: "A",
    justificativa: "Uma botnet é um conjunto de dispositivos comprometidos que podem ser coordenados remotamente. Os dispositivos podem pertencer a usuários ou organizações sem que estes percebam o comprometimento. A finalidade varia conforme a operação, e a presença de tráfego coordenado deve ser investigada com evidências e controles defensivos.",
    analise: {
      A: "CORRETA. A alternativa descreve dispositivos comprometidos e coordenação para ações potencialmente maliciosas.",
      B: "INCORRETA. Uma rede protegida por firewall não é, por isso, uma botnet.",
      C: "INCORRETA. Um algoritmo criptográfico não é uma rede de dispositivos comprometidos.",
      D: "INCORRETA. Replicação de backup é uma função legítima de proteção de dados.",
      E: "INCORRETA. Um protocolo seguro não define botnet e não garante, sozinho, que dispositivos não serão comprometidos."
    },
    regra: "Botnet é uma rede de dispositivos comprometidos coordenados remotamente; a finalidade e o método de controle podem variar.",
    pegadinha: "Nem toda botnet executa DDoS; spam, fraude, roubo de dados e outras ações também podem ocorrer.",
    fonte: "CISA, Understanding and Responding to Distributed Denial-of-Service Attacks: https://www.cisa.gov/news-events/news/understanding-and-responding-distributed-denial-service-attacks; NIST SP 800-83 Rev. 1: https://csrc.nist.gov/pubs/sp/800/83/r1/final."
  },

  { id: "q-m4-15", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-2-topico-1", assunto: "4.2 — Rootkits e ocultação",
    contexto: "Uma ferramenta de resposta a incidentes encontra sinais de que processos, arquivos ou atividades privilegiadas estão sendo ocultados do sistema operacional.",
    enunciado: "Qual característica é mais associada a um rootkit?",
    alternativas: [
      { letra: "A", texto: "Ocultar a presença de componentes ou atividades maliciosas, podendo operar em diferentes níveis do sistema." },
      { letra: "B", texto: "Realizar exclusivamente cópias de segurança de arquivos." },
      { letra: "C", texto: "Ser um protocolo de sincronização de relógios." },
      { letra: "D", texto: "Ser uma ferramenta que necessariamente concede privilégios administrativos em todos os casos." },
      { letra: "E", texto: "Ser um algoritmo que criptografa dados para garantir confidencialidade." }
    ],
    gabarito: "A",
    justificativa: "Rootkit é uma categoria de técnicas ou componentes maliciosos associados à ocultação de sua presença ou de outras atividades no sistema. Pode envolver diferentes níveis de privilégio e técnicas de persistência; não é correto afirmar que todo rootkit necessariamente concede privilégios administrativos, pois pode depender de acesso previamente obtido ou explorar outros mecanismos.",
    analise: {
      A: "CORRETA. A ocultação de componentes ou atividades é característica associada a rootkits.",
      B: "INCORRETA. Backup é uma função de recuperação, não um rootkit.",
      C: "INCORRETA. NTP é um protocolo de sincronização temporal.",
      D: "INCORRETA. A obtenção de privilégio elevado pode estar relacionada, mas não é uma exigência universal da definição.",
      E: "INCORRETA. Algoritmos criptográficos são mecanismos de proteção, não rootkits."
    },
    regra: "Rootkit está associado à ocultação de componentes ou atividades maliciosas; os mecanismos e níveis de privilégio variam.",
    pegadinha: "Não confunda rootkit com uma garantia de que o malware sempre obtém root/admin; a ocultação é o aspecto central.",
    fonte: "MITRE ATT&CK, T1014 — Rootkit: https://attack.mitre.org/techniques/T1014/."
  },

  { id: "q-m4-16", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "basico", topico: "modulo-4-unidade-2-topico-2", assunto: "4.2 — Firewalls e filtragem de tráfego",
    contexto: "Uma organização precisa impedir que conexões externas não autorizadas alcancem serviços internos e limitar conexões de saída que não sejam necessárias.",
    enunciado: "Qual é a função principal de um firewall nesse cenário?",
    alternativas: [
      { letra: "A", texto: "Filtrar o tráfego de rede conforme regras de origem, destino, porta, protocolo ou outros atributos suportados." },
      { letra: "B", texto: "Criptografar automaticamente todos os arquivos armazenados em cada computador." },
      { letra: "C", texto: "Remover qualquer malware de todos os dispositivos sem ferramentas adicionais." },
      { letra: "D", texto: "Substituir a autenticação e a autorização de usuários em cada aplicação." },
      { letra: "E", texto: "Garantir que nenhuma mensagem de phishing chegue aos usuários." }
    ],
    gabarito: "A",
    justificativa: "Firewall aplica regras para permitir ou bloquear tráfego de rede, conforme sua arquitetura e capacidade. Ele pode ser um dispositivo, software ou serviço; não substitui controles de endpoint, autenticação, segurança de aplicações ou conscientização contra phishing.",
    analise: {
      A: "CORRETA. Filtrar tráfego conforme regras é a função central de um firewall.",
      B: "INCORRETA. Criptografia de arquivos é um controle distinto e não decorre automaticamente do firewall.",
      C: "INCORRETA. Remediação de malware é função de ferramentas e processos específicos.",
      D: "INCORRETA. Firewall não substitui autenticação nem autorização dentro das aplicações.",
      E: "INCORRETA. Um firewall pode integrar filtros complementares, mas não garante que toda tentativa de phishing seja bloqueada."
    },
    regra: "Firewall permite ou bloqueia tráfego conforme regras; é uma camada complementar de segurança.",
    pegadinha: "A presença de firewall não garante proteção completa contra malware, phishing ou falhas de aplicação.",
    fonte: "NIST SP 800-41 Rev. 1 — Guidelines on Firewalls and Firewall Policy: https://csrc.nist.gov/pubs/sp/800/41/r1/final."
  },

  { id: "q-m4-17", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-2-topico-2", assunto: "4.2 — Regras de firewall e negação por padrão",
    contexto: "Uma equipe configura regras de rede para um servidor que precisa receber HTTPS e consultar um serviço de atualização autorizado. Nenhuma outra comunicação é necessária.",
    enunciado: "Qual política de firewall segue melhor o princípio de reduzir a exposição?",
    alternativas: [
      { letra: "A", texto: "Permitir todo o tráfego e bloquear apenas conexões que já tenham causado incidente." },
      { letra: "B", texto: "Permitir somente os fluxos necessários, documentar as exceções e negar por padrão o tráfego não autorizado, validando as dependências do serviço." },
      { letra: "C", texto: "Bloquear todo o tráfego sem verificar se isso impede o funcionamento legítimo do serviço." },
      { letra: "D", texto: "Criar uma regra ampla de entrada e confiar apenas no antivírus instalado no servidor." },
      { letra: "E", texto: "Permitir tráfego de qualquer origem para todas as portas de administração." }
    ],
    gabarito: "B",
    justificativa: "Uma política restritiva permite os fluxos necessários e nega por padrão os demais, com exceções explícitas e justificadas. A implementação deve considerar dependências legítimas, monitorar efeitos e revisar as regras; uma regra excessivamente ampla aumenta a superfície de ataque, enquanto bloquear tudo sem análise pode causar indisponibilidade.",
    analise: {
      A: "INCORRETA. Permitir tudo transfere a defesa para a reação após o incidente e amplia a exposição.",
      B: "CORRETA. A política limita a comunicação ao necessário e mantém exceções controladas.",
      C: "INCORRETA. A restrição precisa preservar os fluxos legítimos necessários ao serviço.",
      D: "INCORRETA. Antivírus não substitui a restrição de tráfego de rede.",
      E: "INCORRETA. Expor portas administrativas a qualquer origem aumenta significativamente o risco."
    },
    regra: "Negação por padrão: permitir apenas fluxos necessários, com exceções justificadas, testadas e revisadas.",
    pegadinha: "Regra restritiva não significa bloquear sem análise; é preciso equilibrar exposição e continuidade do serviço.",
    fonte: "NIST SP 800-41 Rev. 1 — Guidelines on Firewalls and Firewall Policy: https://csrc.nist.gov/pubs/sp/800/41/r1/final."
  },

  { id: "q-m4-18", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "avancado", topico: "modulo-4-unidade-2-topico-4", assunto: "4.2 — Defesa em profundidade",
    contexto: "Uma organização depende de um único firewall de borda. Um invasor consegue roubar credenciais válidas e acessar um serviço interno por um caminho permitido.",
    enunciado: "Qual abordagem melhor representa defesa em profundidade para reduzir a dependência de um único controle?",
    alternativas: [
      { letra: "A", texto: "Adicionar camadas complementares, como MFA, menor privilégio, segmentação, monitoramento e proteção de endpoint, ajustadas ao risco." },
      { letra: "B", texto: "Comprar um firewall maior e dispensar os demais controles." },
      { letra: "C", texto: "Considerar que credenciais válidas tornam qualquer atividade do usuário confiável." },
      { letra: "D", texto: "Desativar os registros internos para reduzir o volume de alertas." },
      { letra: "E", texto: "Concentrar todos os controles em uma única conta administrativa compartilhada." }
    ],
    gabarito: "A",
    justificativa: "Defesa em profundidade combina controles diferentes e complementares para reduzir a probabilidade e o impacto de falhas individuais. MFA, menor privilégio, segmentação, monitoramento e proteção de endpoint podem limitar caminhos de ataque e apoiar detecção e resposta. Nenhuma combinação garante risco zero; a seleção deve considerar o contexto e ser testada.",
    analise: {
      A: "CORRETA. Camadas complementares reduzem a dependência de um único controle e limitam o impacto de credenciais comprometidas.",
      B: "INCORRETA. Um único controle continua sendo um ponto de dependência e não cobre todos os riscos.",
      C: "INCORRETA. Credenciais válidas podem ser roubadas; autorização e monitoramento continuam necessários.",
      D: "INCORRETA. Desativar registros reduz a capacidade de detectar e investigar atividade indevida.",
      E: "INCORRETA. Contas compartilhadas enfraquecem atribuição individual e aumentam o impacto de comprometimento."
    },
    regra: "Defesa em profundidade combina controles preventivos, detectivos e de resposta adequados ao risco; não promete proteção absoluta.",
    pegadinha: "Um controle pode falhar ou ser contornado; camadas distintas devem reduzir o impacto sem duplicar cegamente a mesma defesa.",
    fonte: "NIST SP 800-53 Rev. 5 — Security and Privacy Controls: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final."
  },

  { id: "q-m4-19", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.2 — Gestão segura de logs",
    contexto: "Um órgão precisa usar logs para investigar incidentes, mas os registros contêm identificadores pessoais e podem ser alterados por administradores do sistema investigado.",
    enunciado: "Qual desenho de gestão de logs é mais adequado?",
    alternativas: [
      { letra: "A", texto: "Coletar eventos relevantes, restringir e registrar o acesso aos logs, proteger sua integridade, definir retenção e limitar dados ao necessário para a finalidade." },
      { letra: "B", texto: "Guardar todos os dados indefinidamente e permitir acesso irrestrito para facilitar auditorias." },
      { letra: "C", texto: "Permitir que a conta investigada apague seus próprios registros sem gerar alerta." },
      { letra: "D", texto: "Coletar apenas eventos bem-sucedidos e descartar todas as falhas de autenticação." },
      { letra: "E", texto: "Substituir os logs por relatos verbais sem horário, autoria ou contexto." }
    ],
    gabarito: "A",
    justificativa: "Logs ajudam na detecção, investigação, auditoria e reconstrução de eventos quando sua coleta é adequada e os registros são protegidos. O desenho deve restringir acessos, detectar alterações, sincronizar horários, definir retenção e considerar minimização e proteção de dados pessoais. Mais coleta e retenção não significam automaticamente melhor segurança.",
    analise: {
      A: "CORRETA. A alternativa equilibra utilidade investigativa, integridade, controle de acesso, retenção e minimização.",
      B: "INCORRETA. Retenção indefinida e acesso irrestrito ampliam riscos de privacidade e adulteração.",
      C: "INCORRETA. A possibilidade de apagar evidências sem detecção compromete a confiabilidade dos registros.",
      D: "INCORRETA. Falhas de autenticação podem ser essenciais para detectar ataques.",
      E: "INCORRETA. Relatos verbais não substituem registros estruturados e rastreáveis."
    },
    regra: "Logs úteis devem ser relevantes, protegidos, acessíveis apenas a pessoas autorizadas, retidos conforme regras e minimizados conforme a finalidade.",
    pegadinha: "Coletar e reter tudo indefinidamente não é sinônimo de boa auditoria; considere finalidade, acesso, integridade e privacidade.",
    fonte: "NIST SP 800-92 — Guide to Computer Security Log Management: https://csrc.nist.gov/pubs/sp/800/92/final."
  },

  { id: "q-m4-20", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Controle de acesso e menor privilégio",
    contexto: "Uma servidora muda de função e deixa de precisar exportar dados pessoais. Seu perfil de acesso ainda permite exportação em massa e administração de usuários.",
    enunciado: "Qual ação aplica melhor o princípio do menor privilégio?",
    alternativas: [
      { letra: "A", texto: "Manter as permissões antigas para evitar solicitações de acesso no futuro." },
      { letra: "B", texto: "Revisar o perfil conforme as tarefas atuais, remover permissões desnecessárias e manter processo formal para conceder exceções justificadas." },
      { letra: "C", texto: "Conceder acesso administrativo a todos os integrantes da equipe." },
      { letra: "D", texto: "Compartilhar uma conta com permissões amplas para facilitar a substituição entre funcionários." },
      { letra: "E", texto: "Negar permanentemente qualquer acesso, independentemente das responsabilidades da servidora." }
    ],
    gabarito: "B",
    justificativa: "O menor privilégio exige que as permissões correspondam às tarefas e responsabilidades atuais. Mudanças de função devem acionar revisão de acesso, remoção de permissões desnecessárias e registro das exceções aprovadas. Contas individuais e revisões periódicas melhoram a rastreabilidade e reduzem o impacto de credenciais comprometidas.",
    analise: {
      A: "INCORRETA. Permissões obsoletas mantêm acesso além da necessidade atual.",
      B: "CORRETA. A alternativa ajusta as permissões à função e prevê tratamento controlado de exceções.",
      C: "INCORRETA. Acesso administrativo generalizado viola o menor privilégio.",
      D: "INCORRETA. Contas compartilhadas enfraquecem a atribuição individual e ampliam o acesso.",
      E: "INCORRETA. Menor privilégio limita o acesso ao necessário; não significa negar todo acesso."
    },
    regra: "Revise permissões quando funções mudam, remova acessos obsoletos e conceda exceções por processo formal.",
    pegadinha: "Menor privilégio não é acesso zero; é conceder o acesso necessário e nenhum privilégio desnecessário.",
    fonte: "NIST SP 800-53 Rev. 5, AC-2 e AC-6: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final."
  },

  { id: "q-m4-21", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "basico", topico: "m4-u3-t1-s1", assunto: "4.3 — Phishing e engenharia social",
    contexto: "Uma pessoa recebe uma mensagem que imita seu banco, cria urgência e direciona para uma página que solicita senha e código de autenticação.",
    enunciado: "Qual característica indica uma tentativa de phishing?",
    alternativas: [
      { letra: "A", texto: "A mensagem tenta induzir a pessoa a revelar informações, abrir um link malicioso ou executar uma ação por meio de engano." },
      { letra: "B", texto: "A mensagem foi enviada por um canal eletrônico, o que por si só prova que é fraudulenta." },
      { letra: "C", texto: "O phishing consiste exclusivamente em criptografar arquivos locais." },
      { letra: "D", texto: "A mensagem é legítima sempre que contém o logotipo correto da instituição." },
      { letra: "E", texto: "O ataque só existe quando há erros ortográficos evidentes." }
    ],
    gabarito: "A",
    justificativa: "Phishing é uma forma de engenharia social que usa mensagens, páginas ou outros meios enganosos para induzir a vítima a revelar informações, abrir conteúdo malicioso ou realizar ações que favoreçam o atacante. Logotipos e linguagem correta podem ser copiados; a avaliação deve considerar remetente, destino, contexto e solicitações incomuns, com verificação por canal independente.",
    analise: {
      A: "CORRETA. A característica central é a indução por engano a revelar dados ou executar ações prejudiciais.",
      B: "INCORRETA. O meio eletrônico, por si só, não determina fraude.",
      C: "INCORRETA. Criptografar arquivos pode ocorrer em ransomware, mas não define phishing.",
      D: "INCORRETA. Logotipos podem ser copiados e não autenticam a origem.",
      E: "INCORRETA. Mensagens fraudulentas podem ser bem escritas e personalizadas."
    },
    regra: "Phishing usa engano para induzir divulgação de dados, acesso a páginas falsas ou execução de ações.",
    pegadinha: "Não dependa de erros ortográficos ou da aparência visual; confirme solicitações sensíveis por canal independente.",
    fonte: "CISA, Avoiding Social Engineering and Phishing Attacks: https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks."
  },

{ id: "q-m4-22", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "m4-u3-t1-s2", assunto: "4.3 — Pharming e resolução de nomes",
    contexto: "Uma pessoa digita corretamente o endereço de um serviço conhecido, mas é direcionada a uma página fraudulenta por uma alteração indevida na resolução do nome ou na configuração do dispositivo.",
    enunciado: "Qual descrição é mais compatível com pharming?",
    alternativas: [
      { letra: "A", texto: "Manipular a resolução de nomes ou outra infraestrutura de direcionamento para levar a vítima a um destino fraudulento, mesmo sem erro de digitação." },
      { letra: "B", texto: "Enviar exclusivamente uma mensagem de e-mail com erro ortográfico." },
      { letra: "C", texto: "Aumentar a velocidade legítima de resolução de DNS." },
      { letra: "D", texto: "Bloquear mensagens de spam por meio de um filtro de e-mail." },
      { letra: "E", texto: "Gerar tráfego autorizado para testar a capacidade de um servidor." }
    ],
    gabarito: "A",
    justificativa: "Pharming descreve técnicas de redirecionamento da vítima para um destino fraudulento, por exemplo mediante manipulação de DNS ou de configurações locais. A técnica pode ocorrer sem que a vítima clique em um link enganoso ou digite incorretamente o endereço. O mecanismo específico deve ser investigado; não se deve equiparar pharming a qualquer ataque de intermediário.",
    analise: {
      A: "CORRETA. A alternativa descreve redirecionamento técnico para destino fraudulento, inclusive por manipulação de resolução de nomes.",
      B: "INCORRETA. E-mail com erro ortográfico é um possível veículo de phishing, não a definição de pharming.",
      C: "INCORRETA. Pharming não é uma melhoria de desempenho do DNS.",
      D: "INCORRETA. Filtro de spam é um controle defensivo.",
      E: "INCORRETA. Teste autorizado de capacidade não é pharming."
    },
    regra: "Pharming redireciona a vítima para destino fraudulento por manipulação de resolução ou configuração.",
    pegadinha: "Phishing costuma induzir a vítima a interagir com conteúdo enganoso; pharming pode redirecioná-la por manipulação técnica.",
    fonte: "CISA, Understanding and Responding to Distributed Denial-of-Service Attacks (contexto de segurança de rede): https://www.cisa.gov/news-events/news/understanding-and-responding-distributed-denial-service-attacks; NIST SP 800-81 Rev. 2 — Secure Domain Name System (DNS) Deployment Guide: https://csrc.nist.gov/pubs/sp/800/81/r2/final."
  },

{ id: "q-m4-23", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "m4-u3-t1-s3", assunto: "4.3 — Engenharia social e verificação de solicitações",
    contexto: "Uma pessoa que se apresenta como suporte técnico pede a um servidor público que informe um código de autenticação de uso único para resolver uma suposta falha urgente.",
    enunciado: "Qual resposta aplica melhor uma defesa contra engenharia social?",
    alternativas: [
      { letra: "A", texto: "Fornecer o código porque o solicitante conhece o cargo e o nome do servidor." },
      { letra: "B", texto: "Interromper a interação e confirmar a solicitação por um canal institucional independente já conhecido, sem compartilhar o código." },
      { letra: "C", texto: "Enviar o código, mas solicitar que o suporte prometa não reutilizá-lo." },
      { letra: "D", texto: "Confiar na solicitação sempre que houver urgência e linguagem profissional." },
      { letra: "E", texto: "Publicar o código em um canal interno para que outras pessoas confirmem se é válido." }
    ],
    gabarito: "B",
    justificativa: "Engenharia social explora confiança, autoridade, urgência, familiaridade ou medo para induzir ações. Dados reais sobre a vítima não autenticam o solicitante. Códigos de uso único e outros segredos de autenticação não devem ser compartilhados; solicitações sensíveis devem ser confirmadas por um canal independente e reportadas conforme o procedimento institucional.",
    analise: {
      A: "INCORRETA. Conhecer dados do servidor não prova a identidade do solicitante.",
      B: "CORRETA. A confirmação independente evita depender do mesmo canal potencialmente fraudulento.",
      C: "INCORRETA. Um código de autenticação é segredo temporário e não deve ser compartilhado.",
      D: "INCORRETA. Urgência e linguagem profissional podem ser usadas para manipular a vítima.",
      E: "INCORRETA. Publicar o código expõe a credencial e amplia o risco."
    },
    regra: "Confirme pedidos sensíveis por canal independente e nunca compartilhe códigos de autenticação.",
    pegadinha: "Conhecimento de dados pessoais ou linguagem profissional não comprova identidade nem legitimidade.",
    fonte: "CISA, Avoiding Social Engineering and Phishing Attacks: https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks."
  },

{ id: "q-m4-24", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Força bruta e tentativas de autenticação",
    contexto: "Um serviço observa tentativas automatizadas de adivinhar senhas. A equipe precisa diferenciar ataques online contra o serviço de tentativas offline contra hashes de senhas obtidos indevidamente.",
    enunciado: "Qual afirmação sobre força bruta e suas mitigações é correta?",
    alternativas: [
      { letra: "A", texto: "Força bruta testa sistematicamente combinações candidatas; limites de tentativa ajudam em ataques online, enquanto hashes de senha robustos e parâmetros de custo ajudam a dificultar ataques offline." },
      { letra: "B", texto: "Força bruta é uma técnica de autenticação sem senha." },
      { letra: "C", texto: "A limitação de tentativas no site impede qualquer tentativa offline contra hashes roubados." },
      { letra: "D", texto: "O armazenamento de senhas em texto claro é a melhor forma de detectar força bruta." },
      { letra: "E", texto: "Força bruta não pode ser mitigada por nenhum controle." }
    ],
    gabarito: "A",
    justificativa: "Força bruta envolve testar sistematicamente combinações candidatas para encontrar uma senha ou chave. Em ataques online, limitação adaptativa, detecção, MFA e controles de autenticação reduzem oportunidades; em ataques offline, o atacante testa candidatos contra material obtido, por isso o armazenamento de senhas deve usar esquemas adequados com sal e custo. Nenhuma medida isolada garante bloqueio absoluto.",
    analise: {
      A: "CORRETA. A alternativa diferencia os cenários online e offline e associa controles adequados a cada um.",
      B: "INCORRETA. Autenticação sem senha é um mecanismo de autenticação, não um ataque de força bruta.",
      C: "INCORRETA. O atacante offline pode testar candidatos sem consultar o serviço online.",
      D: "INCORRETA. Senhas não devem ser armazenadas em texto claro; detecção não justifica expor credenciais.",
      E: "INCORRETA. Controles diferentes reduzem a viabilidade e o impacto, embora não garantam risco zero."
    },
    regra: "Ataques online exigem controles no serviço; ataques offline exigem armazenamento de senha resistente a tentativas e proteção do material obtido.",
    pegadinha: "Limitar tentativas no login não protege, por si só, hashes de senha já roubados.",
    fonte: "NIST SP 800-63B — Digital Identity Guidelines: Authentication and Lifecycle Management: https://pages.nist.gov/800-63-4/sp800-63b.html."
  },

{ id: "q-m4-25", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Man-in-the-Middle e validação de identidade",
    contexto: "Um usuário acessa um serviço por uma rede pública. Um atacante tenta intermediar a comunicação e apresentar um certificado inválido para se passar pelo servidor.",
    enunciado: "Qual medida ajuda a impedir que o cliente aceite um intermediário fraudulento?",
    alternativas: [
      { letra: "A", texto: "Ignorar avisos de certificado para manter o acesso disponível." },
      { letra: "B", texto: "Validar corretamente o certificado, a cadeia de confiança e o nome do servidor, usando um protocolo seguro configurado de forma adequada." },
      { letra: "C", texto: "Usar apenas um firewall local e dispensar a autenticação do servidor." },
      { letra: "D", texto: "Confiar em qualquer rede Wi-Fi que exija senha." },
      { letra: "E", texto: "Presumir que o uso de criptografia torna impossível um ataque de intermediário, mesmo com validação desativada." }
    ],
    gabarito: "B",
    justificativa: "Um ataque Man-in-the-Middle (MitM) pode permitir que um intermediário observe ou altere a comunicação. Um protocolo criptográfico corretamente configurado e a validação do certificado e do nome do servidor ajudam a autenticar o endpoint e proteger o canal. Ignorar avisos ou desativar validação pode permitir que a conexão criptografada seja estabelecida com o endpoint errado.",
    analise: {
      A: "INCORRETA. Ignorar avisos pode eliminar uma defesa importante contra certificados inválidos.",
      B: "CORRETA. A validação de identidade é essencial para evitar confiar em um intermediário fraudulento.",
      C: "INCORRETA. Firewall local não substitui a autenticação do servidor no canal.",
      D: "INCORRETA. Uma rede Wi-Fi protegida por senha não é necessariamente confiável.",
      E: "INCORRETA. Criptografia sem validação correta de identidade pode proteger um canal com o endpoint errado."
    },
    regra: "Criptografia de canal deve ser acompanhada de validação correta da identidade do servidor.",
    pegadinha: "Criptografia sem validação do endpoint não garante que a conexão foi estabelecida com o servidor pretendido.",
    fonte: "NIST SP 800-52 Rev. 2 — Guidelines for the Selection, Configuration, and Use of TLS Implementations: https://csrc.nist.gov/pubs/sp/800/52/r2/final."
  },

{ id: "q-m4-26", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "avancado", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — DoS/DDoS e mitigação",
    contexto: "Um portal público fica indisponível durante um pico de requisições distribuídas provenientes de muitos dispositivos. A equipe precisa manter serviços essenciais acessíveis.",
    enunciado: "Qual resposta técnica inicial é mais adequada para um possível ataque de negação de serviço distribuído (DDoS)?",
    alternativas: [
      { letra: "A", texto: "Desligar permanentemente todos os serviços e descartar os registros de tráfego." },
      { letra: "B", texto: "Validar a anomalia com telemetria, acionar o provedor e os controles de mitigação disponíveis, priorizar serviços essenciais e preservar evidências." },
      { letra: "C", texto: "Aumentar indiscriminadamente todos os limites de conexão, sem observar a capacidade da infraestrutura." },
      { letra: "D", texto: "Presumir que o tráfego é legítimo porque vem de muitos endereços IP diferentes." },
      { letra: "E", texto: "Desativar monitoramento e alertas para reduzir a carga do sistema." }
    ],
    gabarito: "B",
    justificativa: "DoS busca degradar ou interromper a disponibilidade; DDoS envolve origens distribuídas. A resposta depende do vetor e da arquitetura e pode incluir validação por telemetria, coordenação com provedores, filtragem ou mitigação especializada, priorização de serviços e preservação de evidências. Não há uma medida única que resolva todos os ataques.",
    analise: {
      A: "INCORRETA. Desligamento indiscriminado e descarte de registros podem ampliar o impacto e prejudicar a investigação.",
      B: "CORRETA. A resposta combina análise, mitigação coordenada, priorização de serviços e preservação de evidências.",
      C: "INCORRETA. Aumentar limites sem análise pode sobrecarregar ainda mais a infraestrutura.",
      D: "INCORRETA. A distribuição de origens é compatível com DDoS e não prova legitimidade.",
      E: "INCORRETA. Desativar monitoramento reduz a visibilidade durante o incidente."
    },
    regra: "DDoS visa degradar disponibilidade com tráfego ou solicitações distribuídas; a mitigação deve ser orientada por telemetria, vetor e capacidade.",
    pegadinha: "Muitas origens não significam necessariamente tráfego legítimo; investigue o padrão e coordene a mitigação.",
    fonte: "CISA, Understanding and Responding to Distributed Denial-of-Service Attacks: https://www.cisa.gov/news-events/news/understanding-and-responding-distributed-denial-service-attacks."
  },

  { id: "q-m4-27", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Incidente de exposição de dados",
    contexto: "Uma agência pública descobre que um repositório foi configurado como público e pode ter exposto dados pessoais a pessoas não autorizadas.",
    enunciado: "Qual é a resposta inicial mais adequada após identificar a possível exposição?",
    alternativas: [
      { letra: "A", texto: "Restringir o acesso indevido, preservar registros e evidências, avaliar o escopo e o impacto e acionar os responsáveis para cumprir os procedimentos de resposta e as obrigações aplicáveis." },
      { letra: "B", texto: "Apagar imediatamente todos os dados e logs sem preservar evidências." },
      { letra: "C", texto: "Aguardar uma reclamação pública antes de investigar." },
      { letra: "D", texto: "Divulgar a lista de pessoas afetadas e seus dados para demonstrar transparência." },
      { letra: "E", texto: "Presumir que não houve incidente porque a exposição resultou de configuração, e não de invasão." }
    ],
    gabarito: "A",
    justificativa: "Uma exposição não autorizada pode constituir incidente mesmo quando decorre de erro de configuração, sem invasão comprovada. A resposta deve restringir o acesso indevido, preservar evidências, avaliar dados e pessoas potencialmente afetados, documentar decisões e acionar responsáveis jurídicos, de privacidade e de segurança para determinar notificações e outras obrigações conforme o caso.",
    analise: {
      A: "CORRETA. A alternativa combina contenção, preservação, avaliação e escalonamento para decidir as medidas aplicáveis.",
      B: "INCORRETA. A exclusão indiscriminada pode destruir evidências e não substitui contenção segura.",
      C: "INCORRETA. A organização deve investigar prontamente, sem depender de reclamação pública.",
      D: "INCORRETA. Divulgar dados das pessoas afetadas pode agravar a exposição.",
      E: "INCORRETA. Uma configuração incorreta pode expor dados sem exploração ativa e ainda assim exigir resposta."
    },
    regra: "Em possível exposição de dados, contenha, preserve evidências, avalie escopo/impacto e acione responsáveis para definir obrigações e comunicações.",
    pegadinha: "A ausência de invasão comprovada não significa ausência de incidente ou de risco para titulares.",
    fonte: "ANPD, Comunicação de incidente de segurança: https://www.gov.br/anpd/pt-br/assuntos/incidente-de-seguranca."
  },

  { id: "q-m4-28", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Ataques de repetição (replay)",
    contexto: "Um serviço aceita uma mensagem de autorização capturada anteriormente, embora ela tenha sido enviada em uma sessão legítima no passado.",
    enunciado: "Qual propriedade ou mecanismo ajuda a reduzir o risco de um ataque de repetição (replay)?",
    alternativas: [
      { letra: "A", texto: "Usar nonces, números de sequência, timestamps ou identificadores de sessão validados para rejeitar mensagens repetidas ou fora de contexto." },
      { letra: "B", texto: "Reutilizar indefinidamente a mesma mensagem de autorização, pois ela foi válida uma vez." },
      { letra: "C", texto: "Desativar autenticação para evitar que mensagens sejam rejeitadas." },
      { letra: "D", texto: "Confiar apenas no endereço IP de origem, sem verificar a sessão ou a mensagem." },
      { letra: "E", texto: "Aumentar o tamanho dos arquivos transmitidos." }
    ],
    gabarito: "A",
    justificativa: "Um ataque de repetição reapresenta mensagens ou transações válidas capturadas anteriormente. Protocolos podem usar nonces, números de sequência, timestamps, expiração e vinculação à sessão para detectar duplicação ou contexto inválido. Esses mecanismos precisam ser validados corretamente e não substituem a proteção geral do protocolo.",
    analise: {
      A: "CORRETA. Valores únicos e controles temporais ou de sequência permitem detectar mensagens repetidas ou fora de contexto.",
      B: "INCORRETA. Uma mensagem válida no passado não deve ser automaticamente aceita de novo.",
      C: "INCORRETA. Desativar autenticação enfraquece a proteção contra abuso.",
      D: "INCORRETA. Endereços IP podem ser compartilhados, alterados ou falsificados e não provam validade da transação.",
      E: "INCORRETA. O tamanho do arquivo não previne replay."
    },
    regra: "Replay é a reutilização de mensagem/transação capturada; use mecanismos de frescor e vinculação ao contexto previstos pelo protocolo.",
    pegadinha: "Uma mensagem autenticada pode ser reproduzida se o protocolo não verificar frescor, sequência ou unicidade.",
    fonte: "NIST SP 800-63B — Digital Identity Guidelines: https://pages.nist.gov/800-63-4/sp800-63b.html; RFC 8446 — The Transport Layer Security (TLS) Protocol Version 1.3: https://www.rfc-editor.org/rfc/rfc8446."
  },

  { id: "q-m4-29", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Indicadores de comprometimento (IoCs)",
    contexto: "Um analista encontra um hash de arquivo suspeito, conexões com um domínio associado a malware e uma sequência incomum de processos em um endpoint.",
    enunciado: "Como os indicadores de comprometimento (IoCs) devem ser usados na investigação?",
    alternativas: [
      { letra: "A", texto: "Como evidências que orientam a investigação e a correlação, avaliadas no contexto e atualizadas conforme novas informações." },
      { letra: "B", texto: "Como prova isolada e definitiva de que todo sistema que contém o indicador está comprometido." },
      { letra: "C", texto: "Como ferramentas que removem automaticamente qualquer malware." },
      { letra: "D", texto: "Como substitutos de registros, análise e confirmação do incidente." },
      { letra: "E", texto: "Como métricas exclusivamente de desempenho de rede." }
    ],
    gabarito: "A",
    justificativa: "IoCs são artefatos ou padrões observáveis que podem indicar comprometimento, como hashes, domínios, endereços, artefatos de host ou padrões de comportamento. Um indicador pode ser compartilhado por atividade legítima, ficar desatualizado ou ter baixa especificidade; deve ser correlacionado com outras evidências e com o contexto antes de concluir que ocorreu comprometimento.",
    analise: {
      A: "CORRETA. IoCs ajudam a orientar busca e correlação, mas precisam de contexto e validação.",
      B: "INCORRETA. Um indicador isolado não é necessariamente prova conclusiva e pode gerar falsos positivos.",
      C: "INCORRETA. IoCs são evidências ou padrões; não são, por si, ferramentas de remediação.",
      D: "INCORRETA. A investigação exige registros, análise e confirmação conforme a evidência disponível.",
      E: "INCORRETA. IoCs não se limitam a métricas de desempenho."
    },
    regra: "IoCs são pistas técnicas para orientar detecção e investigação; correlacione indicadores com contexto e outras evidências.",
    pegadinha: "Um IoC não prova sozinho o comprometimento nem garante que um sistema sem aquele indicador esteja limpo.",
    fonte: "CISA, Cybersecurity Incident & Vulnerability Response Playbooks: https://www.cisa.gov/resources-tools/resources/federal-government-cybersecurity-incident-and-vulnerability-response-playbooks."
  },

  { id: "q-m4-30", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Ataques à cadeia de suprimentos",
    contexto: "Uma organização instala uma atualização legítima de um fornecedor, mas depois descobre que o mecanismo de distribuição ou o processo de desenvolvimento foi comprometido.",
    enunciado: "Qual cenário caracteriza um ataque à cadeia de suprimentos de software?",
    alternativas: [
      { letra: "A", texto: "Comprometer um fornecedor, dependência, processo de construção ou canal de distribuição para atingir organizações que confiam no componente ou atualização." },
      { letra: "B", texto: "Executar exclusivamente um ataque de força bruta contra uma única conta de usuário." },
      { letra: "C", texto: "Aplicar uma atualização oficial verificada e autorizada conforme o processo de gestão de mudanças." },
      { letra: "D", texto: "Realizar uma cópia de segurança testada antes de uma implantação." },
      { letra: "E", texto: "Monitorar logs para identificar mudanças não autorizadas." }
    ],
    gabarito: "A",
    justificativa: "Ataques à cadeia de suprimentos comprometem um fornecedor, dependência, ferramenta, ambiente de build ou canal de distribuição para alcançar organizações que confiam nesses componentes. A defesa pode incluir inventário de dependências, revisão de fornecedores, proteção do pipeline, verificação de assinaturas e proveniência, segregação de funções e monitoramento; nenhuma medida isolada elimina todo o risco.",
    analise: {
      A: "CORRETA. A alternativa descreve o comprometimento de um elo confiável para afetar consumidores do software ou serviço.",
      B: "INCORRETA. Força bruta contra uma conta não caracteriza, por si, ataque à cadeia de suprimentos.",
      C: "INCORRETA. Uma atualização autorizada e verificada faz parte da gestão legítima de mudanças.",
      D: "INCORRETA. Backup testado é uma prática de recuperação, não um ataque à cadeia de suprimentos.",
      E: "INCORRETA. Monitoramento de logs é um controle defensivo."
    },
    regra: "Ataque à cadeia de suprimentos compromete fornecedor, dependência, pipeline ou distribuição para alcançar consumidores que confiam no componente.",
    pegadinha: "Um pacote assinado ou vindo de fornecedor conhecido não é garantia absoluta se o processo confiável que o produziu foi comprometido.",
    fonte: "CISA, Defending Against Software Supply Chain Attacks: https://www.cisa.gov/resources-tools/resources/defending-against-software-supply-chain-attacks."
  },

  { id: "q-m4-31", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — LGPD — princípios do tratamento",
    contexto: "Uma organização define como coletará e utilizará dados pessoais para prestar um serviço.",
    enunciado: "À luz da LGPD, qual prática está alinhada aos princípios que regem o tratamento de dados pessoais?",
    alternativas: [
      { letra: "A", texto: "Coletar todos os dados que possam ser úteis no futuro, mesmo sem finalidade definida." },
      { letra: "B", texto: "Definir finalidades legítimas e específicas, limitar a coleta ao necessário e informar o titular de modo adequado." },
      { letra: "C", texto: "Tratar qualquer dado pessoal apenas com consentimento, independentemente da hipótese legal aplicável." },
      { letra: "D", texto: "Publicar os dados pessoais para demonstrar transparência, mesmo quando não houver base legal para divulgação." },
      { letra: "E", texto: "Conservar os dados indefinidamente, pois a LGPD proíbe a eliminação de registros." }
    ],
    gabarito: "B",
    justificativa: "A LGPD estabelece princípios como finalidade, adequação, necessidade e transparência (art. 6º). A organização deve definir propósitos legítimos e específicos, limitar os dados ao mínimo pertinente e fornecer informações claras sobre o tratamento. Consentimento é uma das bases legais, não a única; a existência de dados pessoais não autoriza divulgação pública indiscriminada nem conservação sem limite.",
    analise: {
      A: "INCORRETA. A coleta deve observar finalidade, adequação e necessidade; utilidade futura genérica não justifica acumular dados sem limite.",
      B: "CORRETA. A alternativa aplica finalidade específica, minimização e transparência, em conformidade com os princípios do art. 6º.",
      C: "INCORRETA. A LGPD prevê diferentes bases legais, cuja aplicabilidade depende do contexto; consentimento não é obrigatório em todo tratamento.",
      D: "INCORRETA. Transparência no tratamento não significa divulgação pública irrestrita de dados pessoais.",
      E: "INCORRETA. A conservação deve respeitar a finalidade e as hipóteses legais; a LGPD prevê eliminação quando cabível, ressalvadas as exceções legais."
    },
    regra: "Princípios da LGPD incluem finalidade, adequação, necessidade, transparência, segurança, prevenção, não discriminação e responsabilização, entre outros do art. 6º.",
    pegadinha: "Base legal não é sinônimo de consentimento; transparência não significa tornar dados pessoais públicos.",
    fonte: "Lei nº 13.709/2018 (LGPD), arts. 6º, 7º e 16, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm."
  },

  { id: "q-m4-32", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-2", assunto: "4.4 — Marco Civil da Internet",
    contexto: "A Lei nº 12.965/2014 (Marco Civil da Internet) distingue, em seu texto, os fundamentos da disciplina (art. 2º) dos princípios do uso da internet no Brasil (art. 3º).",
    enunciado: "A Lei nº 12.965/2014 (Marco Civil da Internet) estabelece, em seu art. 3º, os princípios da disciplina de uso da internet no Brasil. Dentre esses princípios estão:",
    alternativas: [
      { letra: "A", texto: "O reconhecimento da escala mundial da rede, a pluralidade e a diversidade e a abertura e a colaboração." },
      { letra: "B", texto: "A preservação e a garantia da neutralidade de rede, a proteção da privacidade e a proteção de dados pessoais." },
      { letra: "C", texto: "A livre iniciativa, a livre concorrência, a defesa do consumidor e a finalidade social da rede." },
      { letra: "D", texto: "A regulamentação prévia dos conteúdos difundidos na internet e a vedação do anonimato em qualquer hipótese." },
      { letra: "E", texto: "A liberdade absoluta do provedor para compartilhar dados de conexão dos usuários com terceiros sem autorização legal." }
    ],
    gabarito: "B",
    justificativa: "O art. 3º do Marco Civil da Internet (Lei nº 12.965/2014) lista os princípios da disciplina, dentre eles a proteção da privacidade (II), a proteção de dados pessoais (III) e a preservação e a garantia da neutralidade de rede (IV) — o que confirma a alternativa B. As alternativas A e C transcrevem, na verdade, fundamentos do art. 2º (reconhecimento da escala mundial da rede, pluralidade e diversidade, abertura e colaboração; livre iniciativa, livre concorrência, defesa do consumidor e finalidade social da rede), e não princípios do art. 3º. A alternativa D é falsa: o Marco Civil não prevê regulamentação prévia de conteúdos; o art. 9º, §3º, veda bloquear, monitorar, filtrar ou analisar o conteúdo dos pacotes de dados, ressalvadas as hipóteses do §1º, e a responsabilização por conteúdo gerado por terceiros depende de ordem judicial específica (art. 19). A alternativa E é falsa: o acesso a dados de conexão de usuários pelo provedor exige hipótese legal ou ordem judicial (art. 7º), não liberdade absoluta de compartilhamento.",
    analise: {
      A: "INCORRETA. Escala mundial da rede, pluralidade e diversidade, e abertura e colaboração são FUNDAMENTOS da disciplina (art. 2º, I, III e IV), não princípios do art. 3º.",
      B: "CORRETA. Neutralidade de rede (art. 3º, IV), proteção da privacidade (art. 3º, II) e proteção de dados pessoais (art. 3º, III) são princípios expressos do art. 3º.",
      C: "INCORRETA. Livre iniciativa, livre concorrência, defesa do consumidor e finalidade social da rede são FUNDAMENTOS (art. 2º, V e VI), não princípios do art. 3º.",
      D: "INCORRETA. Não há princípio de regulamentação prévia de conteúdos; a vedação de bloquear/filtrar pacotes está no art. 9º, §3º (com as ressalvas do §1º), e a remoção de conteúdo por ordem judicial é tratada no art. 19. A menção ao anonimato não corresponde a princípio do art. 3º; o art. 15 trata da guarda de registros de acesso a aplicações, não de anonimato.",
      E: "INCORRETA. O acesso a dados de conexão pelos provedores exige hipótese legal ou ordem judicial (art. 7º) — não há liberdade absoluta de compartilhamento sem autorização legal."
    },
    regra: "Marco Civil: art. 2º = FUNDAMENTOS; art. 3º = PRINCÍPIOS. Neutralidade de rede, proteção da privacidade e proteção de dados pessoais são PRINCÍPIOS (art. 3º, II, III e IV).",
    pegadinha: "Fundamentos (art. 2º) e princípios (art. 3º) são listas distintas — não misture as duas. Pluralidade e diversidade e livre iniciativa são fundamentos; neutralidade, privacidade e dados pessoais são princípios.",
    fonte: "Lei nº 12.965/2014, arts. 2º, 3º, 7º, 9º, §3º, e 19 — texto oficial verificado em planalto.gov.br (https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm) em 2026-10-23."
  },

  { id: "q-m4-33", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — LGPD — base legal e marketing",
    contexto: "Uma empresa pretende enviar ofertas personalizadas a clientes usando dados obtidos durante compras anteriores.",
    enunciado: "Antes de iniciar esse tratamento, qual análise é mais adequada à LGPD?",
    alternativas: [
      { letra: "A", texto: "Considerar que a existência de cadastro torna qualquer uso posterior dos dados automaticamente permitido." },
      { letra: "B", texto: "Identificar uma base legal aplicável à finalidade, avaliar necessidade e compatibilidade do uso, cumprir deveres de transparência e respeitar os direitos dos titulares." },
      { letra: "C", texto: "Compartilhar os dados com qualquer parceiro comercial, pois o marketing é uma finalidade econômica." },
      { letra: "D", texto: "Exigir consentimento em todos os casos, sem analisar as demais bases legais previstas na LGPD." },
      { letra: "E", texto: "Dispensar medidas de segurança quando os dados forem utilizados apenas para publicidade." }
    ],
    gabarito: "B",
    justificativa: "O uso de dados para marketing não é automaticamente autorizado pela existência de cadastro. O controlador deve identificar uma base legal válida para a finalidade concreta, observar os princípios do art. 6º, informar o titular de forma adequada e implementar medidas de segurança. Se invocar legítimo interesse, deve avaliar finalidade, necessidade, expectativas e direitos e liberdades do titular, documentando a análise; essa hipótese não se aplica a dados pessoais sensíveis nos termos do art. 11.",
    analise: {
      A: "INCORRETA. A coleta inicial não autoriza qualquer reutilização; a finalidade e a base legal do novo tratamento precisam ser avaliadas.",
      B: "CORRETA. A alternativa reúne base legal, finalidade, necessidade, transparência e respeito aos direitos, sem presumir autorização automática.",
      C: "INCORRETA. O compartilhamento exige análise de finalidade, base legal, transparência e salvaguardas aplicáveis.",
      D: "INCORRETA. Consentimento é uma das bases legais; a base apropriada depende do caso e deve ser demonstrável.",
      E: "INCORRETA. As obrigações de segurança não desaparecem porque o uso é publicitário."
    },
    regra: "Para cada finalidade de tratamento, identifique e documente a base legal e observe finalidade, necessidade, transparência, segurança e direitos do titular.",
    pegadinha: "Legítimo interesse não é autorização genérica para marketing; exige avaliação concreta e não serve como base do art. 11 para dados pessoais sensíveis.",
    fonte: "Lei nº 13.709/2018 (LGPD), arts. 6º, 7º, 10 e 11, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm."
  },

  { id: "q-m4-34", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — ANPD e LGPD",
    contexto: "A Agência Nacional de Proteção de Dados (ANPD) é a autarquia federal competente para zelar pela proteção de dados pessoais e fiscalizar o cumprimento da LGPD.",
    enunciado: "A respeito da Agência Nacional de Proteção de Dados (ANPD) e da LGPD, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "A ANPD é uma entidade privada que fiscaliza os tratamentos de dados." },
      { letra: "B", texto: "A ANPD é uma autarquia de natureza especial que zela pela proteção de dados e fiscaliza o cumprimento da LGPD." },
      { letra: "C", texto: "A ANPD não tem competência para fiscalizar tratamentos de dados." },
      { letra: "D", texto: "A ANPD é uma entidade sem competências previstas na LGPD." },
      { letra: "E", texto: "A ANPD não exerce fiscalização de dados pessoais." }
    ],
    gabarito: "B",
    justificativa: "A Lei nº 15.352/2026 alterou a denominação e a natureza institucional da ANPD: atualmente, a Agência Nacional de Proteção de Dados é uma autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública. Suas competências incluem zelar pela proteção de dados e fiscalizar o cumprimento da LGPD. Entidade privada (alternativa A incorreta); ausência de competência fiscalizatória (alternativas C e E incorretas); ausência de competências legais (alternativa D incorreta).",
    analise: {
      A: "INCORRETA. A ANPD é uma autarquia federal de natureza especial, não uma entidade privada.",
      B: "CORRETA. A ANPD possui competências legais para zelar pela proteção de dados e fiscalizar o cumprimento da LGPD.",
      C: "INCORRETA. A fiscalização é uma das competências expressamente previstas na LGPD.",
      D: "INCORRETA. A LGPD define competências regulatórias e fiscalizatórias para a ANPD.",
      E: "INCORRETA. A ANPD exerce fiscalização nos termos da LGPD."
    },
    regra: "ANPD = Agência Nacional de Proteção de Dados; autarquia de natureza especial com competências de regulação e fiscalização.",
    pegadinha: "Não usar a denominação histórica Autoridade Nacional como nome institucional atual após a Lei nº 15.352/2026.",
    fonte: "Lei nº 13.709/2018, arts. 55-A e 55-J, com redação dada pela Lei nº 15.352/2026, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm; LGPD compilada: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm."
  },

  { id: "q-m4-35", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — Direitos dos Titulares",
    contexto: "Sob a LGPD, o titular dos dados tem direitos específicos sobre seus dados.",
    enunciado: "Entre os direitos dos titulares de dados pessoais previstos na LGPD estão:",
    alternativas: [
      { letra: "A", texto: "O direito de não ser lembrado de nenhum dado." },
      { letra: "B", texto: "O direito de acesso, correção de dados desatualizados, eliminação de dados nas hipóteses legais e portabilidade nos termos da regulamentação." },
      { letra: "C", texto: "O direito de fornecer dados falsos." },
      { letra: "D", texto: "O direito de excluir todos os registros do passado." },
      { letra: "E", texto: "O direito de não informar dados pessoais a qualquer autoridade." }
    ],
    gabarito: "B",
    justificativa: "O art. 18 da LGPD prevê, entre outros, confirmação do tratamento, acesso, correção de dados incompletos, inexatos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade, portabilidade nos termos da regulamentação e revogação do consentimento quando aplicável. Esses direitos têm condições legais e não significam eliminação irrestrita de todo registro. As alternativas A, C, D e E descrevem direitos inexistentes ou absolutos.",
    analise: {
      A: "INCORRETA. A LGPD não cria um direito geral e irrestrito de não ser lembrado de qualquer dado.",
      B: "CORRETA. A LGPD prevê esses direitos, mas a eliminação e a portabilidade obedecem aos requisitos e limites legais aplicáveis.",
      C: "INCORRETA. Fornecer dados falsos não é um direito previsto no art. 18 da LGPD.",
      D: "INCORRETA. A eliminação não é absoluta; depende das hipóteses legais e pode haver deveres de conservação.",
      E: "INCORRETA. A LGPD não estabelece uma proibição absoluta de fornecer dados a autoridades competentes."
    },
    regra: "Direitos do titular incluem acesso, correção, anonimização, bloqueio, eliminação nas hipóteses legais, portabilidade regulamentada e revogação do consentimento quando aplicável.",
    pegadinha: "Não confundir direitos previstos na LGPD com um direito absoluto de apagar todo dado ou registro.",
    fonte: "Lei nº 13.709/2018 (LGPD), art. 18, texto oficial compilado: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm."
  },

  { id: "q-m4-36", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — ANPD — fiscalização e sanções administrativas",
    contexto: "Após apurar uma infração à LGPD, uma organização questiona se a ANPD pode adotar medidas administrativas ou se a proteção de dados é matéria exclusivamente judicial.",
    enunciado: "Qual afirmação descreve melhor a competência da ANPD quanto à fiscalização e às sanções previstas na LGPD?",
    alternativas: [
      { letra: "A", texto: "A ANPD pode fiscalizar o cumprimento da LGPD e aplicar as sanções administrativas previstas em lei, observados o procedimento aplicável e os limites legais." },
      { letra: "B", texto: "A ANPD só pode publicar recomendações e nunca pode fiscalizar ou sancionar agentes de tratamento." },
      { letra: "C", texto: "A ANPD pode impor qualquer penalidade, mesmo que não esteja prevista na legislação." },
      { letra: "D", texto: "A competência da ANPD elimina todas as competências do Poder Judiciário e de outras autoridades legalmente competentes." },
      { letra: "E", texto: "A ANPD só pode fiscalizar empresas privadas, nunca operações realizadas pelo Poder Público." }
    ],
    gabarito: "A",
    justificativa: "A LGPD atribui à ANPD competências de fiscalização e de aplicação das sanções administrativas legalmente previstas. O exercício dessas competências deve respeitar a lei, o procedimento aplicável e as garantias pertinentes; a atuação administrativa não elimina as atribuições judiciais ou de outras autoridades nos respectivos âmbitos. A ANPD também possui competências relativas a tratamentos realizados pelo Poder Público.",
    analise: {
      A: "CORRETA. A fiscalização e a aplicação das sanções previstas na LGPD integram as competências legais da ANPD, sujeitas aos limites e procedimentos aplicáveis.",
      B: "INCORRETA. A lei prevê competências fiscalizatórias e sancionatórias para a ANPD.",
      C: "INCORRETA. A autoridade deve atuar dentro das sanções e dos limites estabelecidos em lei.",
      D: "INCORRETA. A competência administrativa da ANPD não elimina as atribuições do Judiciário ou de outras autoridades.",
      E: "INCORRETA. A LGPD também prevê competências da ANPD relacionadas ao tratamento de dados pelo Poder Público."
    },
    regra: "A ANPD fiscaliza o cumprimento da LGPD e aplica as sanções administrativas previstas em lei, respeitando os limites e procedimentos aplicáveis.",
    pegadinha: "Competência administrativa não significa poder ilimitado nem exclusividade sobre todas as consequências judiciais ou criminais.",
    fonte: "Lei nº 13.709/2018 (LGPD), arts. 52, 55-J e 55-K, com alterações aplicáveis: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm; Lei nº 15.352/2026: https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm."
  },

  { id: "q-m4-37", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — Constituição Federal — direito fundamental à proteção de dados",
    contexto: "Uma questão de concurso pede a relação entre a Constituição Federal e a legislação infraconstitucional de proteção de dados, considerando a Emenda Constitucional nº 115/2022.",
    enunciado: "Qual alternativa identifica corretamente a proteção constitucional de dados pessoais e sua relação com a LGPD?",
    alternativas: [
      { letra: "A", texto: "A CF/88 não menciona dados pessoais." },
      { letra: "B", texto: "A Constituição protege a intimidade e a vida privada no art. 5º, X, e reconhece o direito fundamental à proteção de dados pessoais no art. 5º, LXXIX; a LGPD disciplina o tratamento desses dados." },
      { letra: "C", texto: "A LGPD substitui a CF/88." },
      { letra: "D", texto: "A CF/88 é inexistente." },
      { letra: "E", texto: "A CF/88 e a LGPD são incompatíveis." }
    ],
    gabarito: "B",
    justificativa: "O art. 5º, X, da Constituição protege a intimidade e a vida privada. O art. 5º, LXXIX, incluído pela Emenda Constitucional nº 115/2022, assegura o direito à proteção dos dados pessoais, inclusive nos meios digitais. A LGPD disciplina o tratamento de dados pessoais. Portanto, a Constituição e a LGPD são complementares, mas os dispositivos constitucionais precisam ser identificados corretamente.",
    analise: {
      A: "INCORRETA. A Constituição menciona expressamente a proteção de dados pessoais no art. 5º, LXXIX, incluído pela EC nº 115/2022.",
      B: "CORRETA. O art. 5º, X, protege a intimidade e a vida privada; o inciso LXXIX assegura o direito à proteção de dados pessoais.",
      C: "INCORRETA. A LGPD não substitui a Constituição; as normas têm funções complementares.",
      D: "INCORRETA. A Constituição Federal de 1988 está vigente.",
      E: "INCORRETA. A Constituição e a LGPD são complementares na proteção de direitos fundamentais e na disciplina do tratamento de dados pessoais."
    },
    regra: "CF/88, art. 5º, X: intimidade e vida privada; art. 5º, LXXIX: direito fundamental à proteção de dados pessoais; LGPD: disciplina o tratamento.",
    pegadinha: "Não atribuir a proteção expressa de dados pessoais ao caput do art. 5º; o inciso LXXIX foi incluído pela EC nº 115/2022.",
    fonte: "Constituição Federal, art. 5º, X e LXXIX, texto oficial: https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm; Emenda Constitucional nº 115/2022: https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc115.htm; Lei nº 13.709/2018 (LGPD), texto compilado: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm."
  },

  { id: "q-m4-38", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — LGPD — responsabilidades de controlador e operador",
    contexto: "Uma organização define as finalidades do tratamento de dados pessoais e contrata uma empresa para executar parte das operações seguindo suas instruções.",
    enunciado: "À luz da LGPD, qual afirmação distingue corretamente controlador e operador?",
    alternativas: [
      { letra: "A", texto: "O controlador toma as decisões referentes ao tratamento; o operador realiza o tratamento em nome do controlador, observadas as instruções e as obrigações legais aplicáveis." },
      { letra: "B", texto: "O operador é sempre o titular dos dados e decide livremente as finalidades." },
      { letra: "C", texto: "A contratação de um operador transfere automaticamente ao fornecedor todas as responsabilidades legais do controlador." },
      { letra: "D", texto: "A LGPD atribui deveres apenas ao controlador e nunca ao operador." },
      { letra: "E", texto: "Controlador e operador são sinônimos definidos pela lei." }
    ],
    gabarito: "A",
    justificativa: "A LGPD distingue controlador — a quem competem as decisões referentes ao tratamento — de operador — quem realiza o tratamento em nome do controlador. Ambos podem ter deveres e responder nas hipóteses legais aplicáveis; a contratação não elimina automaticamente as obrigações do controlador nem torna os papéis equivalentes.",
    analise: {
      A: "CORRETA. A alternativa expressa a distinção do art. 5º e reconhece que as obrigações concretas dependem da lei e do papel desempenhado.",
      B: "INCORRETA. Titular é a pessoa natural a quem os dados se referem; operador não é sinônimo de titular nem decide livremente as finalidades.",
      C: "INCORRETA. Contratar um operador não transfere automaticamente todas as responsabilidades legais do controlador.",
      D: "INCORRETA. A LGPD prevê obrigações e hipóteses de responsabilização para operadores, além dos controladores.",
      E: "INCORRETA. São papéis distintos, com definições próprias na LGPD."
    },
    regra: "Controlador decide as finalidades e os elementos essenciais do tratamento; operador trata dados em nome do controlador, dentro das atribuições e instruções aplicáveis.",
    pegadinha: "A terceirização não elimina automaticamente a responsabilidade do controlador; a responsabilização de cada agente depende do papel e das hipóteses legais.",
    fonte: "Lei nº 13.709/2018 (LGPD), arts. 5º, VI e VII, 37, 39 e 42, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm."
  },

  { id: "q-m4-39", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — LGPD — conceito de dado pessoal",
    contexto: "Uma equipe avalia se identificadores indiretos e informações de localização estão sujeitos à LGPD.",
    enunciado: "De acordo com a definição da LGPD, qual informação se enquadra como dado pessoal?",
    alternativas: [
      { letra: "A", texto: "Informação relacionada a pessoa natural identificada ou identificável." },
      { letra: "B", texto: "Somente o nome completo de uma pessoa." },
      { letra: "C", texto: "Apenas informação financeira armazenada por bancos." },
      { letra: "D", texto: "Somente endereço residencial, nunca localização ou identificadores indiretos." },
      { letra: "E", texto: "Qualquer dado de pessoa jurídica, mesmo sem relação com pessoa natural identificada ou identificável." }
    ],
    gabarito: "A",
    justificativa: "O art. 5º, I, da LGPD define dado pessoal como informação relacionada a pessoa natural identificada ou identificável. A classificação depende do contexto e da possibilidade de associação a uma pessoa natural; não se limita a nome, endereço, e-mail ou dados financeiros. Dados de pessoa jurídica, por si sós, não são dados pessoais pela definição da LGPD, embora possam conter informações pessoais de indivíduos.",
    analise: {
      A: "CORRETA. É a definição legal do art. 5º, I, da LGPD.",
      B: "INCORRETA. Nome completo é apenas um exemplo; outros identificadores e informações relacionáveis também podem ser dados pessoais.",
      C: "INCORRETA. A definição não se restringe a dados financeiros nem a um setor específico.",
      D: "INCORRETA. Localização e identificadores indiretos podem ser dados pessoais conforme o contexto e a possibilidade de identificação.",
      E: "INCORRETA. A definição legal refere-se a pessoa natural identificada ou identificável, embora registros empresariais possam conter dados pessoais de indivíduos."
    },
    regra: "Dado pessoal, para a LGPD, é informação relacionada a pessoa natural identificada ou identificável.",
    pegadinha: "Não confundir dado pessoal com apenas dado diretamente identificador; informações indiretas podem permitir identificação quando combinadas com outros dados.",
    fonte: "Lei nº 13.709/2018 (LGPD), art. 5º, I, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm."
  },

  { id: "q-m4-40", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-4-topico-2", assunto: "4.4 — Marco Civil da Internet e LGPD",
    contexto: "Um serviço digital coleta dados pessoais de usuários para fornecer funcionalidades e também mantém registros de conexão nos termos aplicáveis.",
    enunciado: "Como o Marco Civil da Internet e a LGPD se relacionam nesse cenário?",
    alternativas: [
      { letra: "A", texto: "A LGPD substitui integralmente o Marco Civil sempre que houver dados pessoais." },
      { letra: "B", texto: "As leis têm objetos e disposições próprios e complementares; a aplicação concreta depende do tratamento realizado e das regras pertinentes de cada diploma." },
      { letra: "C", texto: "O Marco Civil autoriza qualquer uso secundário de dados, dispensando a análise de base legal prevista na LGPD." },
      { letra: "D", texto: "A LGPD se aplica apenas a empresas privadas, enquanto o Marco Civil se aplica apenas ao Poder Público." },
      { letra: "E", texto: "O cumprimento de uma das leis elimina automaticamente todas as obrigações previstas na outra." }
    ],
    gabarito: "B",
    justificativa: "O Marco Civil da Internet (Lei nº 12.965/2014) estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil, incluindo regras relativas à privacidade e a registros. A LGPD (Lei nº 13.709/2018) disciplina o tratamento de dados pessoais. As normas são complementares; a organização deve identificar quais disposições se aplicam a cada atividade, sem presumir que uma lei substitui ou dispensa a outra.",
    analise: {
      A: "INCORRETA. A LGPD não substitui integralmente o Marco Civil.",
      B: "CORRETA. Os diplomas têm âmbitos próprios e complementares, cuja aplicação depende do caso concreto.",
      C: "INCORRETA. O Marco Civil não autoriza indistintamente qualquer uso secundário de dados pessoais.",
      D: "INCORRETA. O âmbito de cada lei não se divide dessa forma simplista entre setor privado e Poder Público.",
      E: "INCORRETA. Cumprir uma lei não elimina automaticamente obrigações pertinentes da outra."
    },
    regra: "Marco Civil regula direitos e deveres no uso da internet; LGPD disciplina o tratamento de dados pessoais. A aplicação pode ser complementar.",
    pegadinha: "Não trate os diplomas como substitutos nem presuma que cumprir um elimina as obrigações pertinentes do outro.",
    fonte: "Lei nº 12.965/2014 (Marco Civil da Internet): https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm; Lei nº 13.709/2018 (LGPD): https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm."
  },

  { id: "q-m4-41", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-4-topico-2", assunto: "4.4 — Lei de Acesso à Informação",
    contexto: "A Lei nº 12.527/2011 (Lei de Acesso à Informação) garante o acesso à informação pública.",
    enunciado: "A Lei nº 12.527/2011 (Lei de Acesso à Informação Pública) estabelece, entre outros, que:",
    alternativas: [
      { letra: "A", texto: "O acesso à informação pública é negado em todas as hipóteses." },
      { letra: "B", texto: "Assegura acesso a informações públicas, observadas as hipóteses legais de restrição e sigilo." },
      { letra: "C", texto: "A lei não garante acesso à informação." },
      { letra: "D", texto: "A lei é proibitiva." },
      { letra: "E", texto: "A lei não possui dispositivos sobre acesso." }
    ],
    gabarito: "B",
    justificativa: "A LAI estabelece a publicidade como preceito geral e o sigilo como exceção, além de garantir acesso a informações públicas nos termos da lei. Existem hipóteses legais de restrição de acesso e regras de proteção de informações pessoais; portanto, não se trata de acesso irrestrito a todo registro. As alternativas A, C, D e E negam incorretamente a finalidade e as garantias da lei.",
    analise: {
      A: "INCORRETA. A Lei 12.527/2011 garante o acesso à informação pública, não o nega.",
      B: "CORRETA. A publicidade é a regra, mas a lei preserva hipóteses legais de sigilo e a proteção de informações pessoais.",
      C: "INCORRETA. A lei é uma das principais garantias de transparência no Brasil.",
      D: "INCORRETA. A lei não é proibitiva — é estimuladora do acesso à informação.",
      E: "INCORRETA. A lei possui diversos dispositivos que disciplinam o acesso à informação."
    },
    regra: "LAI (Lei nº 12.527/2011): publicidade como regra e sigilo como exceção, respeitadas as restrições legais.",
    pegadinha: "A LAI garante acesso à informação pública, mas não torna todo dado irrestritamente público.",
    fonte: "Lei nº 12.527/2011 (LAI), arts. 3º, I, 6º, III, e 7º, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm."
  },

  { id: "q-m4-42", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-2", assunto: "4.4 — Marco Civil — registros e acesso a dados",
    contexto: "Um órgão público pretende obter de um provedor registros de conexão ou de acesso a aplicações de internet para instruir uma investigação.",
    enunciado: "Como regra, segundo o Marco Civil da Internet, a disponibilização a terceiros de registros de conexão e de acesso a aplicações de internet depende de:",
    alternativas: [
      { letra: "A", texto: "Autorização judicial, observadas as hipóteses legais específicas e os limites do pedido." },
      { letra: "B", texto: "Apenas da frequência com que a pessoa utiliza o serviço." },
      { letra: "C", texto: "Nenhuma formalidade, pois os registros são sempre públicos." },
      { letra: "D", texto: "Somente de uma solicitação informal feita por qualquer servidor público." },
      { letra: "E", texto: "Da publicação prévia dos dados pelo próprio provedor, independentemente de lei." }
    ],
    gabarito: "A",
    justificativa: "O art. 10 do Marco Civil da Internet estabelece salvaguardas para a guarda e disponibilização de registros e dados. O § 1º condiciona, como regra, a disponibilização dos registros de conexão e de acesso a aplicações de internet à ordem judicial, nos termos legais; o § 3º prevê regime específico para acesso a dados cadastrais por autoridades com competência legal. Por isso, a questão trata dos registros e explicita a regra geral, sem confundi-los com dados cadastrais ou sugerir acesso irrestrito.",
    analise: {
      A: "CORRETA. A regra para disponibilização de registros é a autorização judicial, respeitadas as hipóteses legais específicas e os limites do pedido.",
      B: "INCORRETA. A frequência de uso não é fundamento jurídico para disponibilizar registros.",
      C: "INCORRETA. Registros não são sempre públicos; a lei prevê salvaguardas de privacidade e acesso.",
      D: "INCORRETA. Uma solicitação informal não substitui a ordem judicial exigida para a disponibilização de registros, ressalvadas as hipóteses legais específicas.",
      E: "INCORRETA. A publicação pelo provedor não é requisito nem autorização geral para disponibilizar registros."
    },
    regra: "Marco Civil, art. 10: protege a privacidade e estabelece condições legais para a disponibilização de registros; a regra geral para registros é a ordem judicial, com exceções legais específicas.",
    pegadinha: "Não confundir registros de conexão/acesso com dados cadastrais, que podem estar sujeitos a regime legal específico.",
    fonte: "Lei nº 12.965/2014 (Marco Civil da Internet), art. 10, §§ 1º e 3º, texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm."
  },

  { id: "q-m4-43", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — Proteção de Dados",
    contexto: "A LGPD estabelece deveres para os agentes de tratamento e competências para a autoridade nacional; o titular dos dados possui direitos próprios.",
    enunciado: "A responsabilidade pela proteção de dados pessoais no Brasil é:",
    alternativas: [
      { letra: "A", texto: "Apenas dos cidadãos." },
      { letra: "B", texto: "Os deveres e as responsabilidades são distribuídos conforme as funções legais dos agentes de tratamento e as competências das autoridades, sem transformar o titular automaticamente em responsável pelo tratamento." },
      { letra: "C", texto: "Apenas do Estado." },
      { letra: "D", texto: "Apenas dos controladores." },
      { letra: "E", texto: "Apenas dos operadores." }
    ],
    gabarito: "B",
    justificativa: "A LGPD define controlador e operador como agentes de tratamento com funções e deveres distintos, prevê hipóteses de responsabilidade civil e atribui competências à ANPD. O titular é a pessoa a quem os dados se referem e possui direitos; não deve ser apresentado, apenas por ser titular, como responsável pelo tratamento. Por isso, a resposta correta descreve deveres e responsabilidades conforme as funções legais, não uma responsabilidade indiferenciada de todos os envolvidos.",
    analise: {
      A: "INCORRETA. A proteção de dados não é responsabilidade exclusiva dos cidadãos titulares.",
      B: "CORRETA. Controladores e operadores têm deveres definidos em lei; as autoridades exercem competências próprias; o titular possui direitos.",
      C: "INCORRETA. O Estado e as autoridades têm competências importantes, mas os deveres legais dos agentes de tratamento também são relevantes.",
      D: "INCORRETA. A responsabilidade não recai exclusivamente sobre controladores em todos os casos; a LGPD também define o papel do operador.",
      E: "INCORRETA. A responsabilidade não recai exclusivamente sobre operadores; a LGPD define funções e deveres distintos."
    },
    regra: "Controlador, operador e autoridade têm funções e deveres distintos; o titular é a pessoa a quem os dados se referem e possui direitos.",
    pegadinha: "Não confundir titularidade de dados com responsabilidade jurídica pelo tratamento.",
    fonte: "Lei nº 13.709/2018 (LGPD), arts. 5º, V a VII, 42 e 55-J, texto oficial compilado: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm."
  },

  { id: "q-m4-44", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-2", assunto: "4.4 — Comparação entre LGPD e Marco Civil",
    contexto: "Uma equipe precisa identificar qual norma orienta o tratamento de dados pessoais e qual estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil.",
    enunciado: "Qual alternativa compara corretamente a LGPD e o Marco Civil da Internet sem sugerir que uma lei substitui a outra?",
    alternativas: [
      { letra: "A", texto: "A LGPD só se aplica a provedores de conexão, enquanto o Marco Civil regula qualquer tratamento de dados pessoais em todos os setores." },
      { letra: "B", texto: "A LGPD disciplina o tratamento de dados pessoais; o Marco Civil estabelece princípios, garantias, direitos e deveres para o uso da internet, incluindo regras relacionadas à privacidade e aos registros." },
      { letra: "C", texto: "O Marco Civil substituiu a LGPD por ser anterior e tratar de privacidade." },
      { letra: "D", texto: "A LGPD proíbe qualquer tratamento de dados pessoais, enquanto o Marco Civil autoriza sua divulgação irrestrita." },
      { letra: "E", texto: "As duas leis têm o mesmo objeto e os mesmos requisitos, portanto apenas uma delas precisa ser observada." }
    ],
    gabarito: "B",
    justificativa: "A Lei nº 13.709/2018 (LGPD) disciplina o tratamento de dados pessoais, com bases legais, princípios, direitos dos titulares e deveres dos agentes de tratamento. A Lei nº 12.965/2014 (Marco Civil da Internet) estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil. No Marco Civil, o art. 2º apresenta fundamentos, como liberdade de expressão, pluralidade e diversidade; o art. 3º estabelece princípios, entre eles proteção da privacidade, proteção de dados pessoais e neutralidade de rede. Os campos normativos se relacionam, mas uma lei não substitui a outra.",
    analise: {
      A: "INCORRETA. A LGPD não se limita a provedores de conexão e o Marco Civil não substitui o regime geral de tratamento de dados.",
      B: "CORRETA. A alternativa descreve o foco normativo de cada lei e reconhece sua complementaridade.",
      C: "INCORRETA. A anterioridade do Marco Civil não revoga nem substitui a LGPD.",
      D: "INCORRETA. A LGPD permite tratamentos amparados por base legal e o Marco Civil não autoriza divulgação irrestrita.",
      E: "INCORRETA. As leis têm objetos e disposições distintos; a aplicabilidade deve ser avaliada conforme o caso."
    },
    regra: "LGPD: tratamento de dados pessoais. Marco Civil: uso da internet e respectivas garantias, direitos e deveres. Aplicação complementar quando pertinente.",
    pegadinha: "Não resumir as leis a slogans nem presumir que a incidência de uma exclui a outra.",
    fonte: "Lei nº 13.709/2018 (LGPD): https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm; Lei nº 12.965/2014 (Marco Civil da Internet): https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm."
  },

{ id: "q-m4-45", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-1", assunto: "4.4 — Confidencialidade e controle de acesso",
    contexto: "Uma equipe armazena documentos com dados pessoais e informações internas. O repositório permite que qualquer funcionário leia todos os arquivos, mesmo quando não precisa deles para executar suas tarefas.",
    enunciado: "Qual medida aplica melhor o princípio da confidencialidade nesse cenário?",
    alternativas: [
      { letra: "A", texto: "Aplicar controle de acesso baseado nas funções e necessidades, revisar permissões e proteger os dados contra divulgação a pessoas não autorizadas." },
      { letra: "B", texto: "Permitir acesso irrestrito a todos os funcionários para garantir transparência interna." },
      { letra: "C", texto: "Publicar os documentos e confiar que os usuários não os copiarão." },
      { letra: "D", texto: "Desativar a autenticação para evitar bloqueios de acesso." },
      { letra: "E", texto: "Manter permissões amplas indefinidamente, mesmo após mudanças de função." }
    ],
    gabarito: "A",
    justificativa: "Confidencialidade busca assegurar que informações sejam acessíveis apenas a entidades autorizadas. Controle de acesso, menor privilégio, autenticação adequada e revisão de permissões ajudam a reduzir divulgação não autorizada. A criptografia pode ser uma medida complementar, mas não substitui a gestão de identidade e autorização no uso cotidiano do repositório.",
    analise: {
      A: "CORRETA. A alternativa limita o acesso conforme a necessidade e prevê revisão das permissões.",
      B: "INCORRETA. Transparência não exige acesso irrestrito a toda informação interna.",
      C: "INCORRETA. Publicar dados aumenta a exposição e não é um controle de confidencialidade.",
      D: "INCORRETA. Desativar autenticação reduz a capacidade de restringir o acesso a usuários autorizados.",
      E: "INCORRETA. Permissões obsoletas mantêm exposição desnecessária e violam o princípio do menor privilégio."
    },
    regra: "Confidencialidade: restringir o acesso à informação a entidades autorizadas; aplicar menor privilégio e revisar permissões.",
    pegadinha: "Confidencialidade não é acesso zero nem transparência irrestrita; é acesso apropriado conforme autorização e finalidade.",
    fonte: "NIST SP 800-53 Rev. 5, AC-2 e AC-6: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final; NIST FIPS PUB 199: https://csrc.nist.gov/pubs/fips/199/final."
  },

{ id: "q-m4-46", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-1", assunto: "4.1 — Integridade e verificação de alterações",
    contexto: "Um órgão precisa detectar se um arquivo de configuração foi modificado sem autorização entre duas implantações.",
    enunciado: "Qual medida fornece evidência técnica útil para verificar se o conteúdo do arquivo mudou?",
    alternativas: [
      { letra: "A", texto: "Calcular e comparar um hash criptográfico confiável do arquivo antes e depois, protegendo a referência esperada." },
      { letra: "B", texto: "Verificar apenas se o nome e a extensão do arquivo continuam iguais." },
      { letra: "C", texto: "Confiar que a data de modificação não pode ser alterada." },
      { letra: "D", texto: "Permitir escrita a todos os usuários e confiar no histórico verbal da equipe." },
      { letra: "E", texto: "Criptografar o nome do arquivo sem verificar o conteúdo." }
    ],
    gabarito: "A",
    justificativa: "Um hash criptográfico pode ajudar a detectar alterações no conteúdo quando o valor esperado é confiável e protegido contra substituição. A comparação não identifica necessariamente quem alterou o arquivo nem prova que a versão original era legítima; por isso, deve ser combinada com controle de acesso, gestão de mudanças e registros apropriados.",
    analise: {
      A: "CORRETA. Comparar hashes confiáveis ajuda a detectar mudanças no conteúdo; a proteção da referência esperada é essencial.",
      B: "INCORRETA. Nome e extensão podem permanecer iguais mesmo quando o conteúdo é alterado.",
      C: "INCORRETA. Metadados de data podem ser modificados e não constituem prova suficiente de integridade.",
      D: "INCORRETA. Permissões excessivas aumentam o risco e relatos verbais não fornecem evidência técnica confiável.",
      E: "INCORRETA. Proteger o nome não permite verificar se o conteúdo do arquivo mudou."
    },
    regra: "Hash criptográfico confiável ajuda a detectar alteração de conteúdo, mas não prova autoria nem legitimidade da versão original.",
    pegadinha: "A detecção de mudança depende de uma referência confiável; se um invasor puder substituir o arquivo e o hash esperado, a comparação perde valor.",
    fonte: "NIST, FIPS PUB 180-4 — Secure Hash Standard: https://csrc.nist.gov/pubs/fips/180-4/upd1/final."
  },

  { id: "q-m4-47", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-1", assunto: "4.1 — Disponibilidade, RTO e RPO",
    contexto: "Um sistema de atendimento deve voltar a operar rapidamente após uma interrupção, e a organização precisa definir quanto tempo e quantos dados pode perder.",
    enunciado: "Qual associação entre objetivos de recuperação está correta?",
    alternativas: [
      { letra: "A", texto: "RTO é o tempo-alvo para recuperação do serviço; RPO é o ponto no tempo até o qual os dados precisam ser recuperados, refletindo a perda de dados tolerável." },
      { letra: "B", texto: "RTO mede a quantidade de dados pessoais coletados e RPO mede o número de usuários autorizados." },
      { letra: "C", texto: "RTO e RPO significam que a organização nunca terá interrupção ou perda de dados." },
      { letra: "D", texto: "RPO define o tempo de resposta da equipe de suporte, enquanto RTO define a senha de recuperação." },
      { letra: "E", texto: "RTO e RPO são sinônimos de criptografia em repouso." }
    ],
    gabarito: "A",
    justificativa: "O Recovery Time Objective (RTO) estabelece o tempo-alvo para restabelecer um serviço após uma interrupção. O Recovery Point Objective (RPO) estabelece o ponto temporal de recuperação dos dados e, na prática, orienta a perda máxima de dados que a organização pode tolerar. Ambos são objetivos de planejamento, não garantias de ausência de incidentes.",
    analise: {
      A: "CORRETA. RTO trata do tempo de recuperação; RPO trata do ponto de recuperação dos dados e da perda tolerável.",
      B: "INCORRETA. Essas descrições não correspondem aos objetivos de recuperação.",
      C: "INCORRETA. RTO e RPO são metas de continuidade, não promessas de interrupção ou perda zero.",
      D: "INCORRETA. Nenhuma dessas definições corresponde aos termos RTO e RPO.",
      E: "INCORRETA. RTO e RPO são objetivos de recuperação, não técnicas criptográficas."
    },
    regra: "RTO = tempo-alvo para restaurar o serviço; RPO = ponto temporal de recuperação dos dados e perda de dados tolerável.",
    pegadinha: "Metas de recuperação orientam a arquitetura e os testes, mas não garantem por si sós que a meta será cumprida.",
    fonte: "NIST SP 800-34 Rev. 1 — Contingency Planning Guide for Federal Information Systems: https://csrc.nist.gov/pubs/sp/800/34/r1/final."
  },

  { id: "q-m4-48", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Autenticação multifator",
    contexto: "Uma aplicação exige senha e um código enviado ao mesmo endereço de e-mail usado para recuperar a conta.",
    enunciado: "Qual avaliação técnica é mais adequada sobre a proteção oferecida por esse mecanismo?",
    alternativas: [
      { letra: "A", texto: "A exigência de dois códigos sempre configura dois fatores independentes, qualquer que seja o mecanismo." },
      { letra: "B", texto: "A aplicação deve avaliar se os elementos usados pertencem a categorias distintas e se a recuperação da conta não contorna o segundo fator." },
      { letra: "C", texto: "Duas senhas memorizadas são necessariamente dois fatores diferentes." },
      { letra: "D", texto: "Autenticação multifator elimina a necessidade de proteger sessões e dispositivos." },
      { letra: "E", texto: "Um código de uso único torna impossível qualquer ataque à conta." }
    ],
    gabarito: "B",
    justificativa: "A autenticação multifator combina fatores de categorias distintas, como conhecimento, posse e inerência. Dois elementos do mesmo tipo não constituem necessariamente MFA. A arquitetura também deve considerar recuperação de conta, proteção de sessão e resistência a phishing; nenhum fator isolado elimina todos os riscos.",
    analise: {
      A: "INCORRETA. Contar elementos não basta; importa se são fatores independentes de categorias distintas.",
      B: "CORRETA. A avaliação considera categorias de fatores e caminhos alternativos de recuperação que possam contornar o controle.",
      C: "INCORRETA. Duas senhas são, em geral, fatores da mesma categoria: conhecimento.",
      D: "INCORRETA. Sessões, dispositivos e recuperação continuam precisando de controles de segurança.",
      E: "INCORRETA. Códigos de uso único reduzem certos riscos, mas não tornam ataques impossíveis."
    },
    regra: "MFA exige fatores de categorias distintas e deve incluir análise dos fluxos de recuperação, sessão e resistência a phishing.",
    pegadinha: "Dois passos de verificação não significam automaticamente dois fatores independentes.",
    fonte: "NIST SP 800-63B — Digital Identity Guidelines: Authentication and Lifecycle Management: https://pages.nist.gov/800-63-4/sp800-63b.html."
  },

  { id: "q-m4-49", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Controle de acesso baseado em papéis",
    contexto: "Uma equipe de atendimento precisa consultar dados de solicitações, mas não deve alterar regras de negócio nem exportar toda a base.",
    enunciado: "Qual configuração aplica melhor o princípio do menor privilégio?",
    alternativas: [
      { letra: "A", texto: "Conceder perfil de administrador a toda a equipe para evitar solicitações de acesso." },
      { letra: "B", texto: "Compartilhar uma única conta com todas as permissões e registrar apenas o horário de uso." },
      { letra: "C", texto: "Conceder somente permissões necessárias às tarefas, separar funções incompatíveis e revisar os acessos periodicamente." },
      { letra: "D", texto: "Manter permissões antigas após a mudança de função para evitar indisponibilidade." },
      { letra: "E", texto: "Usar a mesma permissão para leitura, alteração, exportação e administração em todos os perfis." }
    ],
    gabarito: "C",
    justificativa: "O menor privilégio limita cada identidade às permissões necessárias para suas tarefas. A separação de funções reduz concentrações incompatíveis de poder, e revisões periódicas ajudam a remover acessos obsoletos. O desenho deve preservar a atribuição individual e acompanhar mudanças de função.",
    analise: {
      A: "INCORRETA. Permissões administrativas amplas excedem o necessário para atendimento e ampliam o impacto de erros ou comprometimentos.",
      B: "INCORRETA. Contas compartilhadas enfraquecem a atribuição individual e mantêm permissões excessivas.",
      C: "CORRETA. A alternativa combina menor privilégio, separação de funções e revisão periódica de acesso.",
      D: "INCORRETA. Acesso deve ser atualizado quando a função muda, conforme a necessidade atual.",
      E: "INCORRETA. Permissões distintas devem refletir tarefas e responsabilidades diferentes."
    },
    regra: "Menor privilégio: conceder apenas o acesso necessário, manter identidades individuais e revisar permissões diante de mudanças de função.",
    pegadinha: "Facilidade operacional não justifica privilégios administrativos para todos nem contas compartilhadas.",
    fonte: "NIST SP 800-53 Rev. 5, AC-6 — Least Privilege: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final."
  },

  { id: "q-m4-50", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Registros de auditoria e proteção contra adulteração",
    contexto: "Após um incidente, a equipe descobre que a conta comprometida tinha permissão para apagar os registros que documentariam suas próprias ações.",
    enunciado: "Qual medida melhora a confiabilidade dos registros de auditoria?",
    alternativas: [
      { letra: "A", texto: "Permitir que todos os usuários alterem e apaguem livremente os registros." },
      { letra: "B", texto: "Desativar a sincronização de horário para evitar divergências entre sistemas." },
      { letra: "C", texto: "Restringir e separar a administração dos logs, proteger sua integridade, sincronizar relógios e monitorar falhas de registro." },
      { letra: "D", texto: "Guardar somente capturas de tela, sem registrar eventos relevantes." },
      { letra: "E", texto: "Apagar os logs após cada incidente para reduzir o volume de armazenamento." }
    ],
    gabarito: "C",
    justificativa: "Registros de auditoria são mais úteis quando os eventos relevantes são definidos, os relógios são sincronizados, o acesso aos registros é restrito e a alteração ou exclusão não autorizada é detectável ou impedida. A separação de funções reduz a possibilidade de uma conta comprometida apagar suas próprias evidências. A retenção deve seguir requisitos legais, operacionais e de privacidade.",
    analise: {
      A: "INCORRETA. Permissões amplas permitem adulteração e destruição de evidências.",
      B: "INCORRETA. Sem sincronização de horário, correlacionar eventos entre sistemas fica mais difícil.",
      C: "CORRETA. A alternativa reúne controles importantes para integridade, rastreabilidade e investigação.",
      D: "INCORRETA. Capturas de tela não substituem registros estruturados de eventos necessários à investigação.",
      E: "INCORRETA. A eliminação indiscriminada pode destruir evidências e contrariar políticas de retenção."
    },
    regra: "Logs confiáveis exigem eventos relevantes, horário consistente, acesso restrito, proteção contra adulteração e retenção definida.",
    pegadinha: "Registrar eventos não basta se a conta investigada puder apagar ou modificar os próprios registros sem detecção.",
    fonte: "NIST SP 800-53 Rev. 5, família AU — Audit and Accountability: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final."
  },

  { id: "q-m4-51", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.1 — Backups e testes de restauração",
    contexto: "Uma equipe confirma que os backups são executados diariamente, mas nunca realizou uma restauração de teste.",
    enunciado: "Qual ação é mais importante para verificar se o plano de backup atende à necessidade de recuperação?",
    alternativas: [
      { letra: "A", texto: "Considerar o backup válido apenas porque a tarefa terminou sem erro aparente." },
      { letra: "B", texto: "Executar restaurações de teste em ambiente controlado, verificar a integridade e a consistência dos dados e medir o tempo de recuperação." },
      { letra: "C", texto: "Manter todas as cópias na mesma conta administrativa e no mesmo ambiente de produção." },
      { letra: "D", texto: "Desativar os registros de execução para economizar armazenamento." },
      { letra: "E", texto: "Presumir que um backup pode ser restaurado mesmo sem verificar chaves, dependências e permissões." }
    ],
    gabarito: "B",
    justificativa: "A conclusão bem-sucedida de uma tarefa de backup não comprova, por si só, que os dados possam ser restaurados de forma íntegra e dentro do tempo necessário. Testes de restauração devem validar consistência, dependências, permissões e tempos de recuperação, com escopo e periodicidade definidos pelo risco e pelos objetivos de continuidade.",
    analise: {
      A: "INCORRETA. A conclusão da tarefa é evidência limitada e não substitui teste de restauração.",
      B: "CORRETA. Testes de restauração verificam a recuperabilidade real e ajudam a medir se os objetivos de recuperação são viáveis.",
      C: "INCORRETA. Concentrar cópias no mesmo ambiente e sob a mesma administração aumenta o risco de comprometimento simultâneo.",
      D: "INCORRETA. Registros são necessários para identificar falhas e demonstrar execução e resultado.",
      E: "INCORRETA. Chaves, dependências, permissões e outros requisitos podem impedir uma restauração mesmo com os arquivos presentes."
    },
    regra: "Backup confiável exige testes periódicos de restauração, verificação de integridade e medição do tempo necessário para recuperar o serviço.",
    pegadinha: "Backup concluído não é sinônimo de restauração comprovada.",
    fonte: "NIST SP 800-34 Rev. 1 — Contingency Planning Guide for Federal Information Systems: https://csrc.nist.gov/pubs/sp/800/34/r1/final."
  },

  { id: "q-m4-52", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.1 — Recuperação de desastres e continuidade",
    contexto: "Uma interrupção no datacenter afeta sistemas internos, atendimento ao público, comunicação com fornecedores e a capacidade de executar serviços essenciais.",
    enunciado: "Qual abordagem diferencia corretamente recuperação de desastres e continuidade de negócios?",
    alternativas: [
      { letra: "A", texto: "Recuperação de desastres trata apenas da compra de novos equipamentos, e continuidade é apenas o backup diário." },
      { letra: "B", texto: "Recuperação de desastres foca no restabelecimento de sistemas e infraestrutura afetados; continuidade de negócios abrange manter ou retomar processos e serviços prioritários, inclusive por meios alternativos." },
      { letra: "C", texto: "Os termos são sempre sinônimos e não precisam ser definidos no planejamento." },
      { letra: "D", texto: "Continuidade de negócios começa somente depois que todos os sistemas forem recuperados." },
      { letra: "E", texto: "Ambos garantem que nenhum incidente possa interromper os serviços." }
    ],
    gabarito: "B",
    justificativa: "Os planos de recuperação de desastres e de continuidade de negócios são relacionados, mas têm escopos diferentes. A recuperação de desastres concentra-se no restabelecimento de recursos de tecnologia e ambientes afetados; a continuidade considera processos prioritários, pessoas, fornecedores, instalações e formas alternativas de prestar serviços durante a interrupção. A terminologia exata pode variar conforme a organização e o referencial adotado.",
    analise: {
      A: "INCORRETA. Recuperação não se limita à compra de equipamentos, e continuidade não se resume a backup.",
      B: "CORRETA. A alternativa distingue recuperação de recursos tecnológicos da manutenção ou retomada dos processos essenciais.",
      C: "INCORRETA. Embora relacionados, os planos devem ter objetivos, responsabilidades e interfaces definidos.",
      D: "INCORRETA. Medidas de continuidade podem operar durante a interrupção, antes da recuperação integral da tecnologia.",
      E: "INCORRETA. Os planos reduzem impacto e organizam resposta; não garantem ausência de incidentes."
    },
    regra: "Recuperação de desastres restabelece recursos afetados; continuidade de negócios mantém ou retoma processos e serviços prioritários.",
    pegadinha: "Continuidade pode exigir procedimentos alternativos enquanto a recuperação tecnológica ainda está em andamento.",
    fonte: "NIST SP 800-34 Rev. 1 — Contingency Planning Guide for Federal Information Systems: https://csrc.nist.gov/pubs/sp/800/34/r1/final."
  },

  { id: "q-m4-53", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.1 — Planejamento de recuperação baseado em risco",
    contexto: "Um serviço processa transações continuamente. A área de negócio informa que perder mais de cinco minutos de transações seria inaceitável, enquanto a equipe técnica estima que a recuperação completa pode levar até duas horas.",
    enunciado: "Como a equipe deve usar essas informações no planejamento de continuidade?",
    alternativas: [
      { letra: "A", texto: "Definir RPO e RTO a partir da necessidade de negócio, validar se a arquitetura e os procedimentos suportam as metas e testar a recuperação." },
      { letra: "B", texto: "Definir RPO igual a duas horas, pois RPO é sempre igual ao tempo de recuperação." },
      { letra: "C", texto: "Adotar metas sem consultar a área de negócio, pois somente a infraestrutura determina o impacto aceitável." },
      { letra: "D", texto: "Considerar que backup a cada dia atende automaticamente a uma perda máxima de cinco minutos." },
      { letra: "E", texto: "Dispensar testes porque os valores foram acordados entre as equipes." }
    ],
    gabarito: "A",
    justificativa: "As metas de recuperação devem refletir o impacto tolerável para o negócio e ser confrontadas com as capacidades reais da solução. A tolerância a perda de transações informa o RPO; o tempo de restabelecimento aceitável informa o RTO. A equipe deve verificar se frequência de cópia, replicação, procedimentos, dependências e testes sustentam as metas definidas.",
    analise: {
      A: "CORRETA. Metas derivadas do impacto de negócio precisam ser verificadas contra a capacidade técnica e validadas por testes.",
      B: "INCORRETA. RPO e RTO medem aspectos diferentes e não precisam ter o mesmo valor.",
      C: "INCORRETA. As metas dependem do impacto para o negócio e das capacidades técnicas, exigindo coordenação entre áreas.",
      D: "INCORRETA. Backup diário não satisfaz, por si só, uma tolerância a perda de apenas cinco minutos.",
      E: "INCORRETA. O acordo não comprova que as metas sejam tecnicamente alcançáveis."
    },
    regra: "Defina RTO/RPO com base no impacto de negócio e valide a viabilidade com arquitetura, procedimentos e testes de recuperação.",
    pegadinha: "Metas acordadas no papel não demonstram que a infraestrutura consegue cumpri-las.",
    fonte: "NIST SP 800-34 Rev. 1 — Contingency Planning Guide for Federal Information Systems: https://csrc.nist.gov/pubs/sp/800/34/r1/final."
  },

  { id: "q-m4-54", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.1 — Estratégia de cópias 3-2-1",
    contexto: "Uma organização guarda três cópias dos arquivos em dois dispositivos de armazenamento, mas todos ficam no mesmo prédio e podem ser acessados com a mesma conta administrativa.",
    enunciado: "Qual avaliação da estratégia 3-2-1 é mais correta?",
    alternativas: [
      { letra: "A", texto: "A estratégia está completa, pois a quantidade de cópias torna desnecessária qualquer separação física ou lógica." },
      { letra: "B", texto: "A regra tradicional recomenda três cópias dos dados, em dois tipos de mídia, com uma cópia fora do local; controles offline ou imutáveis podem fortalecer a resiliência contra ransomware." },
      { letra: "C", texto: "A regra exige exatamente três contas de usuário, duas senhas e um arquivo compactado." },
      { letra: "D", texto: "A regra tradicional exige que todas as cópias estejam offline, no mesmo dispositivo." },
      { letra: "E", texto: "Uma cópia fora do local elimina a necessidade de testar a restauração." }
    ],
    gabarito: "B",
    justificativa: "A regra 3-2-1 é uma recomendação de resiliência: manter três cópias dos dados, usar dois tipos de mídia e guardar uma cópia fora do local. A regra tradicional não exige que a cópia externa seja necessariamente offline; cópias offline ou imutáveis podem adicionar proteção contra ransomware. Separação de credenciais e testes de restauração continuam importantes.",
    analise: {
      A: "INCORRETA. Cópias concentradas no mesmo local e sob a mesma administração podem ser afetadas pelo mesmo desastre ou comprometimento.",
      B: "CORRETA. A alternativa apresenta a regra tradicional e distingue medidas adicionais de proteção contra ransomware.",
      C: "INCORRETA. Os números se referem a cópias e meios de armazenamento, não a contas, senhas ou arquivos compactados.",
      D: "INCORRETA. A regra não exige que todas as cópias estejam offline nem que compartilhem um dispositivo.",
      E: "INCORRETA. A cópia externa não comprova que os dados possam ser restaurados corretamente."
    },
    regra: "3-2-1 = três cópias, dois tipos de mídia, uma cópia fora do local; cópias offline/imutáveis e testes de restauração reforçam a estratégia.",
    pegadinha: "“Fora do local” não significa automaticamente “offline”; são propriedades diferentes.",
    fonte: "CISA, #StopRansomware Guide: https://www.cisa.gov/stopransomware/ransomware-guide."
  },

  { id: "q-m4-55", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.1 — Criptografia simétrica e gestão de chaves",
    contexto: "Um serviço precisa criptografar grandes volumes de dados armazenados e também permitir que diferentes instâncias autorizadas os processem.",
    enunciado: "Qual afirmação descreve uma característica e um requisito importante da criptografia simétrica?",
    alternativas: [
      { letra: "A", texto: "Usa uma chave pública para criptografar e uma chave privada para descriptografar em todos os algoritmos simétricos." },
      { letra: "B", texto: "Usa uma chave secreta compartilhada para as operações criptográficas correspondentes; a distribuição, o armazenamento, a rotação e o controle de acesso à chave precisam ser protegidos." },
      { letra: "C", texto: "Dispensa gestão de chaves porque o algoritmo torna a chave pública." },
      { letra: "D", texto: "Garante autenticidade e integridade em qualquer modo de operação, mesmo sem mecanismo adicional." },
      { letra: "E", texto: "É inadequada para grandes volumes de dados porque sempre exige um par de chaves por bloco." }
    ],
    gabarito: "B",
    justificativa: "A criptografia simétrica utiliza uma chave secreta compartilhada para cifrar e decifrar conforme o algoritmo. A segurança prática depende não só do algoritmo, mas também da geração, distribuição, armazenamento, rotação e proteção da chave. Nem todo modo de cifragem oferece autenticação ou integridade; quando necessário, deve-se usar um modo autenticado ou um mecanismo apropriado.",
    analise: {
      A: "INCORRETA. Par de chaves pública/privada caracteriza criptografia assimétrica, não simétrica.",
      B: "CORRETA. A chave secreta é central e precisa de gestão segura ao longo de seu ciclo de vida.",
      C: "INCORRETA. A chave continua secreta; a gestão de chaves é parte essencial da segurança.",
      D: "INCORRETA. A garantia de autenticidade e integridade depende do algoritmo e do modo de operação utilizados.",
      E: "INCORRETA. Criptografia simétrica é amplamente utilizada para grandes volumes de dados e não exige um par de chaves por bloco."
    },
    regra: "Criptografia simétrica usa chave secreta compartilhada; gestão de chaves e escolha de modo de operação são essenciais.",
    pegadinha: "Cifrar não garante automaticamente integridade ou autenticidade; verifique se o modo usado oferece autenticação.",
    fonte: "NIST FIPS 197 — Advanced Encryption Standard (AES): https://csrc.nist.gov/pubs/fips/197/final; NIST SP 800-38D — GCM and GMAC: https://csrc.nist.gov/pubs/sp/800/38/d/final."
  },

  { id: "q-m4-56", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.1 — Criptografia assimétrica e usos de chaves",
    contexto: "Uma aplicação precisa autenticar a origem de uma mensagem e também estabelecer material de chave para proteger uma sessão.",
    enunciado: "Qual afirmação sobre criptografia assimétrica é tecnicamente correta?",
    alternativas: [
      { letra: "A", texto: "Toda operação assimétrica usa obrigatoriamente a chave pública para cifrar e a privada para decifrar; assinaturas digitais funcionam da mesma maneira." },
      { letra: "B", texto: "Um par de chaves pública e privada pode apoiar operações diferentes, como assinatura/verificação ou mecanismos de estabelecimento de chave; o uso exato depende do algoritmo e do protocolo." },
      { letra: "C", texto: "A chave pública deve ser mantida em segredo e a chave privada publicada." },
      { letra: "D", texto: "Criptografia assimétrica dispensa validação de chaves e certificados em qualquer contexto." },
      { letra: "E", texto: "Cada mensagem exige obrigatoriamente um novo par de chaves, independentemente do protocolo." }
    ],
    gabarito: "B",
    justificativa: "A criptografia assimétrica utiliza um par relacionado de chaves, mas o papel de cada chave depende do algoritmo e da operação. Em assinaturas digitais, a chave privada gera a assinatura e a chave pública permite verificá-la; em mecanismos de cifragem ou estabelecimento de chaves, aplicam-se outros procedimentos. A chave privada deve ser protegida, enquanto a chave pública pode ser distribuída com controles de autenticidade apropriados.",
    analise: {
      A: "INCORRETA. A descrição simplifica indevidamente os usos assimétricos e confunde assinatura digital com cifragem.",
      B: "CORRETA. A alternativa reconhece usos distintos do par de chaves conforme algoritmo e protocolo.",
      C: "INCORRETA. A chave privada deve permanecer protegida; a chave pública pode ser distribuída.",
      D: "INCORRETA. A validação de chave, identidade, certificado e contexto é essencial quando aplicável.",
      E: "INCORRETA. A geração e a reutilização de chaves dependem do algoritmo, do protocolo e da política de segurança."
    },
    regra: "Em criptografia assimétrica, a chave pública pode ser distribuída e a privada deve ser protegida; o uso do par depende do algoritmo e do protocolo.",
    pegadinha: "Assinatura digital não é simplesmente cifrar a mensagem com a chave privada; assinatura e cifragem têm objetivos e operações distintos.",
    fonte: "NIST FIPS 186-5 — Digital Signature Standard: https://csrc.nist.gov/pubs/fips/186-5/final; NIST SP 800-56A Rev. 3 — Pair-Wise Key-Establishment Schemes: https://csrc.nist.gov/pubs/sp/800/56/a/r3/final."
  },

  { id: "q-m4-57", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.1 — Hash criptográfico e senhas",
    contexto: "Um serviço armazena senhas de usuários e também precisa comparar arquivos para detectar alterações.",
    enunciado: "Qual afirmação distingue corretamente hash criptográfico e armazenamento seguro de senhas?",
    alternativas: [
      { letra: "A", texto: "Basta armazenar o hash rápido e sem sal da senha, pois o resumo de tamanho fixo impede ataques por tentativa." },
      { letra: "B", texto: "Funções hash criptográficas produzem resumos de tamanho definido; para senhas, devem-se usar esquemas específicos de derivação/hash de senha, com sal único e parâmetros de custo adequados." },
      { letra: "C", texto: "Hash é uma forma de criptografia reversível, de modo que a senha pode ser recuperada diretamente do resumo." },
      { letra: "D", texto: "Todos os algoritmos de hash garantem integridade e autenticidade, independentemente do modo de uso." },
      { letra: "E", texto: "O mesmo hash para arquivos diferentes prova que os arquivos são necessariamente idênticos em qualquer situação." }
    ],
    gabarito: "B",
    justificativa: "Uma função hash criptográfica mapeia uma entrada para um resumo de tamanho definido e pode apoiar a detecção de alterações quando o valor de referência é confiável. Senhas exigem tratamento específico: funções de derivação ou hash de senha, sal único e parâmetros de custo dificultam ataques de adivinhação. Um hash simples e rápido não é a escolha adequada para armazenar senhas; hash tampouco é criptografia reversível nem fornece autenticação por si só.",
    analise: {
      A: "INCORRETA. Hash rápido sem sal facilita ataques offline e não impede tentativas de adivinhação.",
      B: "CORRETA. A alternativa diferencia o uso geral de hash do armazenamento especializado de senhas.",
      C: "INCORRETA. Hash criptográfico não foi projetado para permitir recuperação direta da entrada.",
      D: "INCORRETA. Integridade e autenticidade dependem do uso correto, da proteção do valor de referência e de mecanismos adicionais quando necessários.",
      E: "INCORRETA. Colisões são teoricamente possíveis; igualdade de hash é evidência útil, mas não prova matemática de identidade absoluta."
    },
    regra: "Use hashes criptográficos para resumos e verificação; para senhas, use algoritmos específicos, sal único e custo adequado.",
    pegadinha: "Um hash simples de senha não equivale a um esquema seguro de armazenamento de senhas.",
    fonte: "NIST FIPS 180-4 — Secure Hash Standard: https://csrc.nist.gov/pubs/fips/180-4/upd1/final; NIST SP 800-63B — Digital Identity Guidelines: https://pages.nist.gov/800-63-4/sp800-63b.html."
  },

  { id: "q-m4-58", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.1 — Assinatura digital: integridade e validação",
    contexto: "Uma entidade recebe um documento assinado digitalmente e precisa verificar se ele foi alterado e se a assinatura corresponde à chave pública declarada.",
    enunciado: "Qual procedimento oferece uma validação técnica adequada da assinatura digital?",
    alternativas: [
      { letra: "A", texto: "Verificar a assinatura com a chave pública, validar a associação dessa chave à identidade por meio da cadeia de confiança e conferir validade, revogação e contexto do certificado conforme a política aplicável." },
      { letra: "B", texto: "Considerar o documento válido apenas porque existe uma imagem da assinatura manuscrita no PDF." },
      { letra: "C", texto: "Presumir que a assinatura digital criptografa todo o conteúdo e dispensa verificação de integridade." },
      { letra: "D", texto: "Aceitar qualquer certificado vencido, pois a chave pública não tem relação com a identidade." },
      { letra: "E", texto: "Concluir automaticamente que houve não repúdio absoluto em qualquer disputa jurídica, sem examinar contexto ou evidências." }
    ],
    gabarito: "A",
    justificativa: "A validação técnica envolve verificar a assinatura e a integridade do conteúdo, além de avaliar se a chave pública está corretamente vinculada à identidade e se o certificado e a cadeia de confiança atendem às regras aplicáveis. O resultado não deve ser reduzido à aparência visual de uma assinatura nem tratado como prova absoluta de todos os fatos ou de uma conclusão jurídica em qualquer contexto.",
    analise: {
      A: "CORRETA. A alternativa contempla verificação criptográfica e validação do vínculo de confiança e do estado do certificado.",
      B: "INCORRETA. Uma imagem pode ser copiada e não comprova uma assinatura digital criptográfica.",
      C: "INCORRETA. Assinatura digital não significa que todo o documento foi cifrado; a verificação de integridade é parte do processo.",
      D: "INCORRETA. Validade temporal, revogação e cadeia de confiança podem ser relevantes à validação.",
      E: "INCORRETA. A assinatura oferece evidências técnicas importantes, mas não determina automaticamente todas as conclusões jurídicas ou factuais."
    },
    regra: "Valide a assinatura, a integridade, o vínculo entre chave e identidade e o estado do certificado conforme a política aplicável.",
    pegadinha: "Assinatura digital não equivale a criptografar o documento nem torna dispensável a validação do certificado.",
    fonte: "NIST FIPS 186-5 — Digital Signature Standard: https://csrc.nist.gov/pubs/fips/186-5/final; ICP-Brasil, documentos e normas oficiais: https://www.gov.br/iti/pt-br/assuntos/icp-brasil."
  },

  { id: "q-m4-59", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.1 — Certificados digitais e cadeia de confiança",
    contexto: "Um navegador recebe um certificado de servidor para uma conexão HTTPS e precisa decidir se confia na identidade apresentada.",
    enunciado: "Qual afirmação descreve corretamente a função de um certificado digital X.509?",
    alternativas: [
      { letra: "A", texto: "Vincula uma chave pública a uma identidade ou nome, sendo a confiança avaliada por validação da cadeia, do período de validade, do nome e do estado do certificado." },
      { letra: "B", texto: "Garante que o servidor não contém vulnerabilidades e que todo conteúdo é seguro." },
      { letra: "C", texto: "Substitui a necessidade de validar o nome do servidor e a cadeia de certificação." },
      { letra: "D", texto: "É um backup criptografado dos dados do usuário." },
      { letra: "E", texto: "Prova, por si só, que a pessoa que controla o domínio tem autorização legal para todo conteúdo publicado nele." }
    ],
    gabarito: "A",
    justificativa: "Um certificado X.509 associa uma chave pública a uma identidade ou nome conforme os campos e as políticas aplicáveis. O cliente precisa validar a cadeia até uma âncora de confiança, o período de validade, a correspondência do nome e, conforme o perfil, o estado de revogação e outros requisitos. Um certificado válido não atesta que o sistema esteja livre de vulnerabilidades ou que o conteúdo seja legítimo em todos os sentidos.",
    analise: {
      A: "CORRETA. A alternativa descreve a função de vinculação e os principais aspectos da validação.",
      B: "INCORRETA. Certificados não são auditorias de segurança do servidor nem garantem a segurança do conteúdo.",
      C: "INCORRETA. A cadeia e a correspondência do nome precisam ser verificadas.",
      D: "INCORRETA. Certificado digital não é um backup.",
      E: "INCORRETA. O certificado não comprova autorização legal para todo conteúdo nem a veracidade de tudo que o site publica."
    },
    regra: "Certificado X.509 vincula chave pública a uma identidade/nome; confiança depende da validação do certificado e da cadeia segundo regras aplicáveis.",
    pegadinha: "Um certificado aceito não garante que o site seja confiável em todos os aspectos, livre de malware ou correto no conteúdo.",
    fonte: "ITU-T X.509 — Information technology — Public-key and attribute certificate frameworks: https://www.itu.int/rec/T-REC-X.509; RFC 5280 — Internet X.509 Public Key Infrastructure Certificate and CRL Profile: https://www.rfc-editor.org/rfc/rfc5280."
  },

  { id: "q-m4-60", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-1", assunto: "4.3 — Phishing direcionado (spear phishing)",
    contexto: "Uma servidora recebe mensagem que cita seu cargo, uma reunião real e o nome de seu gestor. A mensagem solicita que ela abra um link e informe credenciais em uma página externa.",
    enunciado: "Qual característica torna esse caso compatível com spear phishing e qual resposta inicial é mais segura?",
    alternativas: [
      { letra: "A", texto: "É uma mensagem legítima por mencionar fatos reais; basta abrir o link para confirmar." },
      { letra: "B", texto: "É uma tentativa direcionada e personalizada; a servidora deve evitar o link, verificar o pedido por canal independente e reportar a mensagem conforme o procedimento institucional." },
      { letra: "C", texto: "Spear phishing ocorre apenas por telefone, nunca por e-mail ou mensagens." },
      { letra: "D", texto: "O uso de informações públicas impede que a mensagem seja fraudulenta." },
      { letra: "E", texto: "A mensagem só é suspeita se contiver erros ortográficos evidentes." }
    ],
    gabarito: "B",
    justificativa: "Spear phishing é uma tentativa de phishing direcionada a uma pessoa ou organização e pode incorporar detalhes reais para aumentar a credibilidade. Esses detalhes não autenticam o remetente nem o destino do link. A resposta segura é não interagir com o conteúdo suspeito, confirmar solicitações por canal independente já conhecido e reportar conforme os procedimentos da organização.",
    analise: {
      A: "INCORRETA. Informações verdadeiras podem ser obtidas publicamente ou por comprometimento e não autenticam a mensagem.",
      B: "CORRETA. A personalização é compatível com spear phishing; a verificação independente e o reporte reduzem o risco.",
      C: "INCORRETA. O ataque pode usar e-mail, mensagens, redes sociais ou outros canais.",
      D: "INCORRETA. Informações públicas podem ser usadas para tornar a fraude mais convincente.",
      E: "INCORRETA. Mensagens bem escritas também podem ser fraudulentas; erros de linguagem não são requisito para identificar phishing."
    },
    regra: "Spear phishing é phishing direcionado e personalizado; confirme solicitações sensíveis por canal independente e reporte mensagens suspeitas.",
    pegadinha: "Detalhes reais e texto bem escrito não provam autenticidade do remetente ou do link.",
    fonte: "MITRE ATT&CK, T1566 — Phishing: https://attack.mitre.org/techniques/T1566/; CISA, Recognize and Report Phishing: https://www.cisa.gov/secure-our-world/recognize-and-report-phishing."
  },

  { id: "q-m4-61", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-1", assunto: "4.2 — Categorias e comportamento de malware",
    contexto: "Uma estação apresenta arquivos com extensões alteradas, notas de resgate e impossibilidade de abrir documentos; em outro equipamento, um programa se disfarça de utilitário legítimo para coletar credenciais.",
    enunciado: "Qual classificação relaciona corretamente os comportamentos descritos?",
    alternativas: [
      { letra: "A", texto: "O primeiro caso é compatível com ransomware; o segundo pode ser um trojan, conforme sua forma de se disfarçar e suas funções." },
      { letra: "B", texto: "Ambos são necessariamente worms, pois qualquer malware se propaga automaticamente pela rede." },
      { letra: "C", texto: "O primeiro caso é spyware exclusivamente, pois criptografar arquivos é uma forma de monitoramento." },
      { letra: "D", texto: "Nenhum caso pode ser malware sem replicação automática." },
      { letra: "E", texto: "A classificação depende principalmente do tamanho e da extensão dos arquivos." }
    ],
    gabarito: "A",
    justificativa: "Ransomware é associado à extorsão, frequentemente por criptografia ou bloqueio de acesso a dados. Trojan descreve malware que se apresenta como algo legítimo ou útil para induzir sua execução; pode carregar funções adicionais. As categorias podem se sobrepor, e a classificação deve considerar comportamento observado e evidências, não apenas um sintoma isolado.",
    analise: {
      A: "CORRETA. Os sintomas são compatíveis com ransomware no primeiro cenário e com um trojan no segundo, sem afirmar que a classificação seja exclusiva.",
      B: "INCORRETA. Worms se caracterizam pela capacidade de propagação, mas nem todo malware se replica automaticamente.",
      C: "INCORRETA. Criptografia de arquivos para extorsão é compatível com ransomware, não define spyware.",
      D: "INCORRETA. Muitos malwares dependem de execução ou engano do usuário e não se replicam automaticamente.",
      E: "INCORRETA. Tamanho e extensão não determinam a categoria de malware."
    },
    regra: "Classifique malware pelo comportamento e pelas evidências: ransomware extorque/bloqueia dados; trojan disfarça sua natureza; worm se propaga automaticamente.",
    pegadinha: "As categorias de malware podem se sobrepor; não conclua a família apenas pelo nome do arquivo ou por um único indicador.",
    fonte: "CISA, Understanding and Responding to a Ransomware Attack: https://www.cisa.gov/stopransomware/ransomware-guide; NIST SP 800-83 Rev. 1 — Guide to Malware Incident Prevention and Handling for Desktops and Laptops: https://csrc.nist.gov/pubs/sp/800/83/r1/final."
  },

  { id: "q-m4-62", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.2 — Antivírus, EDR e resposta a incidentes",
    contexto: "Uma organização usa proteção antimalware nos endpoints e avalia adicionar uma plataforma para investigar comportamentos suspeitos e coordenar ações de contenção.",
    enunciado: "Qual descrição diferencia de forma mais precisa antivírus tradicional e EDR?",
    alternativas: [
      { letra: "A", texto: "Antivírus tradicional pode detectar ameaças por assinaturas e outras técnicas; EDR acrescenta telemetria, investigação e capacidades de resposta, conforme o produto e a configuração." },
      { letra: "B", texto: "Antivírus só funciona offline e EDR só funciona online." },
      { letra: "C", texto: "EDR impede todos os incidentes e torna desnecessário o monitoramento." },
      { letra: "D", texto: "Antivírus é exclusivo de estações pessoais e EDR é exclusivo de servidores." },
      { letra: "E", texto: "EDR é apenas outro nome para firewall de rede." }
    ],
    gabarito: "A",
    justificativa: "Produtos antimalware modernos podem combinar assinaturas, heurísticas e análise comportamental. EDR normalmente amplia a visibilidade dos endpoints com telemetria, investigação e resposta, mas as capacidades variam por produto, licença e configuração. EDR não substitui controles de rede, gestão de vulnerabilidades, cópias de segurança ou resposta organizacional a incidentes.",
    analise: {
      A: "CORRETA. A alternativa descreve diferenças típicas sem reduzir o antivírus a assinaturas nem prometer capacidades idênticas em todos os produtos.",
      B: "INCORRETA. Tanto produtos antimalware quanto EDR podem ter componentes e modos de operação diferentes; a distinção não é simplesmente offline/online.",
      C: "INCORRETA. EDR pode apoiar detecção e resposta, mas não elimina todos os incidentes nem dispensa monitoramento.",
      D: "INCORRETA. Ambos podem proteger diferentes tipos de endpoints, conforme a solução.",
      E: "INCORRETA. Firewall e EDR têm funções distintas, embora possam integrar sinais e respostas."
    },
    regra: "EDR costuma acrescentar telemetria, investigação e resposta no endpoint; a proteção efetiva depende das capacidades e da configuração.",
    pegadinha: "Não trate EDR como garantia de prevenção total nem como substituto de todas as demais camadas de segurança.",
    fonte: "NIST SP 800-83 Rev. 1 — Guide to Malware Incident Prevention and Handling for Desktops and Laptops: https://csrc.nist.gov/pubs/sp/800/83/r1/final."
  },

  { id: "q-m4-63", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.2 — Segmentação de rede e movimento lateral",
    contexto: "Uma rede corporativa mantém estações de usuários, servidores administrativos e sistemas críticos no mesmo segmento, com comunicação ampla entre dispositivos.",
    enunciado: "Qual alteração reduz melhor o risco de que o comprometimento de uma estação alcance sistemas críticos?",
    alternativas: [
      { letra: "A", texto: "Conectar todas as redes a um único segmento para facilitar o diagnóstico." },
      { letra: "B", texto: "Separar zonas por função e risco, aplicar regras explícitas de comunicação entre elas e monitorar os fluxos autorizados." },
      { letra: "C", texto: "Criptografar somente os nomes dos dispositivos e manter todo o tráfego permitido." },
      { letra: "D", texto: "Eliminar qualquer comunicação de rede, inclusive a necessária aos serviços." },
      { letra: "E", texto: "Criar sub-redes sem controles de tráfego, presumindo que a separação lógica bloqueie todos os ataques." }
    ],
    gabarito: "B",
    justificativa: "A segmentação divide a rede em zonas e limita a comunicação entre elas por meio de controles apropriados. Isso pode reduzir a superfície de ataque e dificultar o movimento lateral, mas a mera criação de sub-redes não garante isolamento se as regras permitirem tráfego amplo ou se os controles forem mal configurados.",
    analise: {
      A: "INCORRETA. Um segmento amplo pode facilitar a propagação e o movimento lateral após o comprometimento.",
      B: "CORRETA. Zonas definidas por função e risco, regras explícitas e monitoramento limitam comunicações desnecessárias.",
      C: "INCORRETA. Criptografar nomes não controla os fluxos entre sistemas.",
      D: "INCORRETA. O objetivo é controlar a comunicação necessária, não interromper indiscriminadamente todos os serviços.",
      E: "INCORRETA. Sub-redes sem regras de controle não garantem isolamento efetivo."
    },
    regra: "Segmentação eficaz combina zonas bem definidas, controles de tráfego e monitoramento; sub-redes isoladas apenas no desenho não bastam.",
    pegadinha: "A segmentação reduz risco, mas sua eficácia depende das regras e da aplicação real dos controles.",
    fonte: "NIST SP 800-207 — Zero Trust Architecture: https://csrc.nist.gov/pubs/sp/800/207/final; NIST SP 800-53 Rev. 5, SC-7 — Boundary Protection: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final."
  },

  { id: "q-m4-64", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.2 — Hardening e redução da superfície de ataque",
    contexto: "Um servidor recém-instalado mantém serviços padrão desnecessários, contas antigas, permissões amplas e atualizações pendentes.",
    enunciado: "Qual conjunto de medidas representa uma abordagem adequada de hardening?",
    alternativas: [
      { letra: "A", texto: "Desabilitar serviços e contas desnecessários, aplicar atualizações testadas, restringir privilégios e adotar uma configuração segura documentada." },
      { letra: "B", texto: "Instalar ferramentas adicionais sem avaliar suas necessidades ou permissões." },
      { letra: "C", texto: "Desativar o firewall para evitar conflitos e manter as configurações padrão." },
      { letra: "D", texto: "Aplicar patches aleatórios em produção sem avaliação ou plano de reversão." },
      { letra: "E", texto: "Compartilhar a conta administrativa para facilitar a operação e evitar atrasos." }
    ],
    gabarito: "A",
    justificativa: "Hardening busca reduzir a superfície de ataque por meio de configuração segura, remoção ou desativação do que não é necessário, aplicação controlada de atualizações, restrição de privilégios e revisão de contas e serviços. As medidas precisam ser testadas e mantidas ao longo do ciclo de vida do sistema para não introduzir indisponibilidade ou regressões.",
    analise: {
      A: "CORRETA. A alternativa reúne redução de superfície, atualização controlada, privilégio mínimo e configuração documentada.",
      B: "INCORRETA. Instalar ferramentas sem necessidade pode ampliar a superfície de ataque.",
      C: "INCORRETA. Desativar controles e manter padrões inseguros contraria o hardening.",
      D: "INCORRETA. Atualizações devem ser priorizadas, testadas e implantadas com controles adequados, não aleatoriamente.",
      E: "INCORRETA. Contas administrativas compartilhadas enfraquecem a rastreabilidade e ampliam o impacto de comprometimento."
    },
    regra: "Hardening = reduzir a superfície de ataque com configuração segura, serviços mínimos, atualizações controladas e privilégios adequados.",
    pegadinha: "Hardening não é instalar mais ferramentas nem alterar produção sem teste; é reduzir exposições com mudanças controladas.",
    fonte: "CIS Critical Security Controls v8.1: https://www.cisecurity.org/controls/v8; NIST SP 800-123 — Guide to General Server Security: https://csrc.nist.gov/pubs/sp/800/123/final."
  },

  { id: "q-m4-65", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.2 — Priorização de vulnerabilidades",
    contexto: "Um scanner identifica dezenas de vulnerabilidades. Algumas têm pontuação técnica alta, mas não estão expostas; outra, de pontuação menor, afeta um serviço crítico exposto à internet e já tem exploração conhecida.",
    enunciado: "Qual estratégia de gestão de vulnerabilidades é mais adequada?",
    alternativas: [
      { letra: "A", texto: "Corrigir sempre apenas pela pontuação técnica, sem considerar exposição ou criticidade do ativo." },
      { letra: "B", texto: "Ignorar as vulnerabilidades de menor pontuação até que um incidente ocorra." },
      { letra: "C", texto: "Priorizar considerando severidade, exploração conhecida, exposição, criticidade do ativo e impacto; remediar ou mitigar, verificar a correção e documentar exceções." },
      { letra: "D", texto: "Aplicar todos os patches em qualquer ordem, diretamente em produção e sem teste." },
      { letra: "E", texto: "Considerar a execução do scanner prova de que todas as vulnerabilidades foram encontradas." }
    ],
    gabarito: "C",
    justificativa: "A priorização deve combinar gravidade técnica com contexto operacional: exploração ativa ou conhecida, exposição, importância do ativo, impacto potencial e controles existentes. A correção deve ser verificada; quando não for possível corrigir imediatamente, a organização precisa definir mitigação, prazo, responsável e aceite formal do risco conforme sua governança. Scanners têm limites e não provam ausência de vulnerabilidades.",
    analise: {
      A: "INCORRETA. Uma pontuação isolada não representa todo o risco do ambiente.",
      B: "INCORRETA. Vulnerabilidades de menor pontuação podem ser críticas no contexto de exposição e impacto.",
      C: "CORRETA. A alternativa combina risco contextual, remediação/mitigação, verificação e governança das exceções.",
      D: "INCORRETA. Mudanças precisam de planejamento e teste proporcionais ao risco para evitar falhas operacionais.",
      E: "INCORRETA. Scanners podem produzir falsos positivos e negativos e não cobrem necessariamente todos os ativos e falhas."
    },
    regra: "Priorize vulnerabilidades pelo risco contextual e verifique a remediação; registre mitigação e exceções quando a correção imediata não for viável.",
    pegadinha: "Pontuação técnica e resultado de scanner são insumos, não uma avaliação completa nem prova de segurança.",
    fonte: "NIST SP 800-40 Rev. 4 — Guide to Enterprise Patch Management Planning: https://csrc.nist.gov/pubs/sp/800/40/r4/final; CISA, Known Exploited Vulnerabilities Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog."
  },

  { id: "q-m4-66", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-2", assunto: "4.2 — WAF e proteção de aplicações web",
    contexto: "Uma aplicação web recebe tentativas de SQL injection e cross-site scripting. A equipe pretende adicionar um controle de segurança sem substituir a correção do código.",
    enunciado: "Qual afirmação sobre um Web Application Firewall (WAF) é mais adequada?",
    alternativas: [
      { letra: "A", texto: "Um WAF pode inspecionar requisições HTTP e bloquear padrões de ataque conforme suas regras, mas não substitui desenvolvimento seguro e correção de vulnerabilidades." },
      { letra: "B", texto: "Um WAF garante que a aplicação não tenha vulnerabilidades e elimina a necessidade de testes." },
      { letra: "C", texto: "Um WAF é destinado exclusivamente a filtrar mensagens de e-mail." },
      { letra: "D", texto: "Um WAF deve bloquear toda requisição legítima para evitar falsos negativos." },
      { letra: "E", texto: "Um WAF criptografa automaticamente o banco de dados e as cópias de segurança." }
    ],
    gabarito: "A",
    justificativa: "Um WAF atua sobre o tráfego HTTP/HTTPS e pode detectar ou bloquear padrões associados a ataques contra aplicações web. A eficácia depende das regras, do modo de implantação, do contexto e da manutenção; podem ocorrer falsos positivos e falsos negativos. Ele é uma camada complementar, não substitui correção no código, configuração segura ou testes.",
    analise: {
      A: "CORRETA. A alternativa delimita a função típica do WAF e reconhece que ele complementa outras práticas de segurança.",
      B: "INCORRETA. Um WAF não garante ausência de vulnerabilidades nem substitui testes ou correções.",
      C: "INCORRETA. Filtragem de e-mail não é a função típica de um WAF.",
      D: "INCORRETA. Bloquear indiscriminadamente o tráfego legítimo pode interromper o serviço e não é uma estratégia adequada.",
      E: "INCORRETA. Um WAF não criptografa automaticamente bancos de dados nem backups."
    },
    regra: "WAF inspeciona e controla tráfego de aplicações web segundo regras; deve complementar, não substituir, correção e testes de segurança.",
    pegadinha: "Ter WAF não prova que a aplicação está livre de SQL injection, XSS ou outras vulnerabilidades.",
    fonte: "OWASP, Web Application Firewall: https://owasp.org/www-community/Web_Application_Firewall."
  },

  { id: "q-m4-67", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.2 — IDS/IPS e controles de detecção",
    contexto: "Uma equipe quer monitorar tráfego suspeito e, em outro ponto da rede, bloquear automaticamente fluxos que correspondam a regras de prevenção.",
    enunciado: "Qual distinção entre IDS e IPS é a mais precisa?",
    alternativas: [
      { letra: "A", texto: "IDS é usado para detectar e alertar; IPS pode ser implantado em linha para bloquear tráfego, mas as capacidades e os efeitos dependem da arquitetura e das regras." },
      { letra: "B", texto: "Todo IDS bloqueia automaticamente o tráfego e todo IPS apenas registra alertas." },
      { letra: "C", texto: "IDS e IPS são sinônimos e sempre operam de forma idêntica." },
      { letra: "D", texto: "IPS não pode gerar alertas nem produzir registros." },
      { letra: "E", texto: "IDS não observa eventos ou tráfego de rede." }
    ],
    gabarito: "A",
    justificativa: "Um IDS é orientado à detecção e ao alerta, enquanto um IPS pode atuar em linha para impedir tráfego que corresponda a regras de prevenção. Implementações podem compartilhar tecnologia e recursos, e alguns produtos integram ambas as funções. A configuração deve equilibrar eficácia, falsos positivos e risco de interromper tráfego legítimo.",
    analise: {
      A: "CORRETA. A alternativa descreve a distinção funcional típica e reconhece a dependência da implantação e configuração.",
      B: "INCORRETA. A descrição inverte os papéis típicos de IDS e IPS.",
      C: "INCORRETA. As funções são distintas, ainda que possam estar integradas no mesmo produto.",
      D: "INCORRETA. Um IPS pode registrar eventos e gerar alertas.",
      E: "INCORRETA. Monitorar eventos ou tráfego para detectar atividade suspeita é função típica de IDS."
    },
    regra: "IDS detecta e alerta; IPS pode bloquear tráfego em linha. A distinção funcional não significa que todo produto tenha apenas uma capacidade.",
    pegadinha: "Bloqueio automático pode gerar falso positivo e indisponibilidade; regras e modo de implantação precisam ser testados.",
    fonte: "NIST SP 800-94 — Guide to Intrusion Detection and Prevention Systems (IDPS): https://csrc.nist.gov/pubs/sp/800/94/final."
  },

  { id: "q-m4-68", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.2 — VPN, tunelamento e limites de confiança",
    contexto: "Uma funcionária acessa a rede corporativa por uma VPN a partir de uma rede Wi-Fi pública.",
    enunciado: "Qual conclusão sobre a proteção oferecida pela VPN é mais adequada?",
    alternativas: [
      { letra: "A", texto: "A VPN pode proteger o tráfego entre o dispositivo e o ponto de terminação do túnel, conforme a configuração, mas não torna automaticamente confiável o dispositivo nem todo destino acessado." },
      { letra: "B", texto: "A VPN impede qualquer malware, phishing ou roubo de credenciais no dispositivo." },
      { letra: "C", texto: "Toda VPN garante anonimato absoluto para qualquer atividade online." },
      { letra: "D", texto: "A VPN torna desnecessários autenticação, atualização e controles de acesso." },
      { letra: "E", texto: "A VPN sempre protege o tráfego de ponta a ponta até cada aplicação, independentemente da arquitetura." }
    ],
    gabarito: "A",
    justificativa: "Uma VPN cria um túnel lógico entre pontos definidos e pode proteger o tráfego nesse percurso por meio de mecanismos criptográficos e autenticação. A proteção termina conforme a arquitetura do túnel e não elimina riscos no endpoint, phishing, malware, configuração incorreta ou observação do tráfego após a terminação. A VPN não garante anonimato absoluto.",
    analise: {
      A: "CORRETA. A alternativa delimita o trecho protegido e não atribui à VPN propriedades que dependem de outros controles.",
      B: "INCORRETA. VPN não impede automaticamente malware, phishing ou comprometimento de credenciais.",
      C: "INCORRETA. A VPN não garante anonimato absoluto; o provedor, o destino e outros identificadores podem continuar observáveis.",
      D: "INCORRETA. Autenticação, atualização, controle de acesso e proteção do endpoint continuam necessários.",
      E: "INCORRETA. A proteção depende dos pontos de terminação e da arquitetura, não necessariamente de ponta a ponta."
    },
    regra: "VPN protege um túnel entre pontos definidos; não substitui segurança do endpoint, autenticação nem controles no destino.",
    pegadinha: "“Usar VPN” não significa anonimato absoluto nem proteção integral de toda a atividade digital.",
    fonte: "NIST SP 800-77 Rev. 1 — Guide to IPsec VPNs: https://csrc.nist.gov/pubs/sp/800/77/r1/final."
  },

  { id: "q-m4-69", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.2 — Sincronização de tempo e integridade dos logs",
    contexto: "Após um incidente, os horários registrados por servidores, firewall e ferramenta de identidade divergem vários minutos, dificultando a reconstrução da sequência dos eventos.",
    enunciado: "Qual medida ajuda a melhorar a correlação temporal dos registros?",
    alternativas: [
      { letra: "A", texto: "Sincronizar os relógios com fontes de tempo confiáveis, monitorar desvios e registrar os horários de forma consistente, protegendo também os próprios logs." },
      { letra: "B", texto: "Desativar o relógio de todos os servidores para evitar diferenças." },
      { letra: "C", texto: "Ordenar os eventos apenas pelo nome do arquivo de log." },
      { letra: "D", texto: "Permitir que cada usuário ajuste o relógio de seu dispositivo sem registro." },
      { letra: "E", texto: "Presumir que o NTP, por si só, prova a autenticidade de todos os eventos registrados." }
    ],
    gabarito: "A",
    justificativa: "Sincronizar relógios com fontes confiáveis e monitorar desvios ajuda a correlacionar eventos de sistemas diferentes. NTP é um protocolo de sincronização de tempo, mas a segurança depende da configuração e da fonte utilizada; sincronização temporal não comprova, por si só, autenticidade ou integridade dos logs.",
    analise: {
      A: "CORRETA. A sincronização monitorada melhora a correlação temporal e deve ser combinada com proteção dos registros.",
      B: "INCORRETA. Sem horário confiável, a investigação e a correlação de eventos ficam prejudicadas.",
      C: "INCORRETA. O nome do arquivo não determina a ordem real dos eventos.",
      D: "INCORRETA. Ajustes livres e não registrados podem introduzir erros ou facilitar adulteração.",
      E: "INCORRETA. NTP ajuda a sincronizar relógios, mas não garante autenticidade nem integridade dos eventos registrados."
    },
    regra: "Sincronize relógios com fontes confiáveis e monitore desvios; trate sincronização temporal e integridade/autenticidade dos logs como controles distintos.",
    pegadinha: "Horários coerentes ajudam a investigar, mas não provam que um registro é genuíno ou não foi adulterado.",
    fonte: "RFC 5905 — Network Time Protocol Version 4: https://www.rfc-editor.org/rfc/rfc5905; NIST SP 800-92 — Guide to Computer Security Log Management: https://csrc.nist.gov/pubs/sp/800/92/final."
  },

  { id: "q-m4-70", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-1-topico-3", assunto: "4.1 — Comunicação segura e seleção de controles",
    contexto: "Um sistema de folha de pagamento troca dados sensíveis com outro sistema por uma rede não confiável. A equipe precisa proteger a confidencialidade, detectar alterações e autenticar o servidor remoto.",
    enunciado: "Qual desenho de segurança atende melhor aos objetivos, sem presumir que um único mecanismo resolva todos os riscos?",
    alternativas: [
      { letra: "A", texto: "Usar apenas firewall de rede, sem proteger o canal nem autenticar o servidor." },
      { letra: "B", texto: "Usar um protocolo seguro configurado corretamente, validar o certificado e o nome do servidor, empregar criptografia autenticada quando aplicável e gerir adequadamente as chaves." },
      { letra: "C", texto: "Desativar o firewall e compartilhar uma senha fixa em texto claro." },
      { letra: "D", texto: "Confiar em qualquer certificado, mesmo inválido, pois a criptografia sempre garante identidade." },
      { letra: "E", texto: "Fazer backup automático dos dados e dispensar autenticação do canal." }
    ],
    gabarito: "B",
    justificativa: "A proteção de uma comunicação sensível requer controles compatíveis com os objetivos: um protocolo seguro, validação correta da identidade do servidor, criptografia adequada, gestão de chaves e configuração robusta. Um firewall e um backup podem ser controles complementares, mas não substituem autenticação e proteção do canal. A segurança depende da implementação e da manutenção, não apenas da presença nominal de um mecanismo.",
    analise: {
      A: "INCORRETA. Um firewall isolado não autentica o servidor nem garante confidencialidade e integridade do canal.",
      B: "CORRETA. A alternativa reúne autenticação do endpoint, proteção criptográfica e gestão de chaves sem prometer segurança absoluta.",
      C: "INCORRETA. Desativar controles e transmitir senha em texto claro aumenta o risco de comprometimento.",
      D: "INCORRETA. Aceitar certificados inválidos enfraquece a autenticação e pode permitir ataques de intermediário.",
      E: "INCORRETA. Backup não protege a comunicação em trânsito nem substitui a autenticação do canal."
    },
    regra: "Comunicação segura exige protocolo bem configurado, validação da identidade, proteção criptográfica adequada e gestão segura de chaves.",
    pegadinha: "Criptografia sem validação correta do certificado pode proteger um canal com o endpoint errado.",
    fonte: "NIST SP 800-52 Rev. 2 — Guidelines for the Selection, Configuration, and Use of TLS Implementations: https://csrc.nist.gov/pubs/sp/800/52/r2/final."
  },

  { id: "q-m4-71", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Controles compensatórios e risco residual",
    contexto: "Um sistema legado não pode receber imediatamente uma atualização crítica porque ela interromperia um processo essencial ainda sem alternativa. A organização precisa reduzir a exposição enquanto prepara a mudança.",
    enunciado: "Qual abordagem caracteriza melhor o uso responsável de controles compensatórios?",
    alternativas: [
      { letra: "A", texto: "Documentar a limitação, avaliar o risco, aplicar controles alternativos proporcionais, definir responsável e prazo e reavaliar até que a correção principal seja possível." },
      { letra: "B", texto: "Declarar que o risco foi eliminado assim que qualquer controle alternativo for instalado." },
      { letra: "C", texto: "Ignorar a vulnerabilidade indefinidamente porque a atualização é inconveniente." },
      { letra: "D", texto: "Remover todos os registros de auditoria para evitar alertas durante a mitigação." },
      { letra: "E", texto: "Considerar o controle compensatório equivalente ao principal sem testar sua eficácia." }
    ],
    gabarito: "A",
    justificativa: "Um controle compensatório pode reduzir o risco quando o controle preferencial não é viável, mas não deve ser presumido equivalente nem suficiente sem avaliação. A organização precisa documentar a limitação, avaliar o risco residual, implementar medidas alternativas, atribuir responsabilidades e prazos e revisar a decisão conforme o contexto muda.",
    analise: {
      A: "CORRETA. A alternativa combina mitigação temporária, avaliação de risco residual, responsabilidade, prazo e revisão.",
      B: "INCORRETA. Um controle alternativo pode reduzir o risco, mas não prova sua eliminação.",
      C: "INCORRETA. A dificuldade de atualização não justifica ignorar indefinidamente o risco.",
      D: "INCORRETA. Remover registros enfraquece detecção, investigação e prestação de contas.",
      E: "INCORRETA. A eficácia e as limitações do controle compensatório precisam ser avaliadas."
    },
    regra: "Controle compensatório reduz risco quando o controle preferencial não é viável; registre o risco residual, a justificativa, a responsabilidade, o prazo e a revisão.",
    pegadinha: "Compensar não significa eliminar o risco nem autoriza uma exceção permanente sem reavaliação.",
    fonte: "NIST SP 800-53 Rev. 5 — Security and Privacy Controls for Information Systems and Organizations: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final."
  },

  { id: "q-m4-72", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Escalada vertical e horizontal de privilégios",
    contexto: "Em um sistema, um usuário comum explora uma falha para executar ações administrativas. Em outro caso, um usuário acessa registros pertencentes a outro usuário com o mesmo nível de permissão.",
    enunciado: "Qual classificação distingue corretamente os dois casos?",
    alternativas: [
      { letra: "A", texto: "O primeiro é escalada vertical; o segundo pode caracterizar escalada horizontal ou acesso indevido entre contas do mesmo nível." },
      { letra: "B", texto: "Ambos são necessariamente escalada vertical, pois qualquer acesso indevido aumenta o nível de privilégio." },
      { letra: "C", texto: "O primeiro é apenas autenticação; o segundo é criptografia." },
      { letra: "D", texto: "Nenhum caso envolve autorização, porque o usuário já estava autenticado." },
      { letra: "E", texto: "Escalada de privilégios só ocorre quando alguém recebe formalmente uma nova função." }
    ],
    gabarito: "A",
    justificativa: "Escalada vertical ocorre quando um usuário ou processo obtém permissões de nível superior às que deveria possuir. Escalada horizontal ocorre quando alguém acessa recursos de outra conta ou identidade no mesmo nível de privilégio. A classificação depende do recurso e das permissões obtidas; autenticação bem-sucedida não significa que todo acesso esteja autorizado.",
    analise: {
      A: "CORRETA. O primeiro cenário eleva o nível de permissão; o segundo envolve acesso a recursos de outra identidade no mesmo nível.",
      B: "INCORRETA. Acesso indevido não implica sempre elevação vertical; pode ocorrer horizontalmente.",
      C: "INCORRETA. Os cenários descrevem abuso de permissões, não criptografia ou simples autenticação.",
      D: "INCORRETA. A autorização continua relevante depois da autenticação, em cada recurso e ação.",
      E: "INCORRETA. A escalada pode resultar de falhas técnicas ou de configuração, não apenas de uma alteração formal de função."
    },
    regra: "Escalada vertical = obter privilégios superiores; horizontal = acessar recursos de outra identidade em nível semelhante.",
    pegadinha: "Estar autenticado não autoriza acesso a todos os objetos; autorização deve ser verificada por recurso e ação.",
    fonte: "MITRE ATT&CK, T1068 — Exploitation for Privilege Escalation: https://attack.mitre.org/techniques/T1068/; OWASP, Authorization Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html."
  },

  { id: "q-m4-73", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Tentativas de senha e controles contra força bruta",
    contexto: "Um portal registra muitas tentativas de autenticação contra uma conta. A equipe quer reduzir a probabilidade de adivinhação automatizada sem criar bloqueios que permitam negar serviço a usuários legítimos.",
    enunciado: "Qual conjunto de controles é mais adequado para mitigar ataques de força bruta?",
    alternativas: [
      { letra: "A", texto: "Combinar limitação de tentativas e detecção de padrões, autenticação multifator e respostas de bloqueio proporcionais, monitoradas e resistentes a abuso." },
      { letra: "B", texto: "Permitir tentativas ilimitadas, pois senhas longas tornam os controles desnecessários." },
      { letra: "C", texto: "Bloquear permanentemente uma conta após uma única tentativa falha em qualquer circunstância." },
      { letra: "D", texto: "Registrar a senha em texto claro para identificar rapidamente o atacante." },
      { letra: "E", texto: "Desativar alertas para evitar que a equipe receba muitos eventos." }
    ],
    gabarito: "A",
    justificativa: "A mitigação pode combinar limitação adaptativa de tentativas, monitoramento, MFA, detecção de padrões e políticas de resposta que considerem o risco de bloqueio abusivo. Nenhum controle isolado elimina todos os ataques; a estratégia deve equilibrar segurança, disponibilidade, acessibilidade e experiência legítima do usuário.",
    analise: {
      A: "CORRETA. A combinação de controles reduz tentativas automatizadas e permite resposta proporcional, com monitoramento.",
      B: "INCORRETA. Senhas fortes ajudam, mas não tornam desnecessários controles de autenticação e monitoramento.",
      C: "INCORRETA. Bloqueio rígido após uma falha pode permitir abuso para negar acesso a usuários legítimos.",
      D: "INCORRETA. Senhas não devem ser armazenadas em texto claro; isso criaria um risco grave adicional.",
      E: "INCORRETA. Desativar alertas reduz a capacidade de identificar ataques."
    },
    regra: "Mitigue força bruta com controles em camadas: limitação proporcional, MFA, detecção, monitoramento e armazenamento seguro de credenciais.",
    pegadinha: "Um bloqueio muito rígido pode ser abusado para negar serviço; controles precisam considerar ataques e usuários legítimos.",
    fonte: "NIST SP 800-63B — Digital Identity Guidelines: Authentication and Lifecycle Management: https://pages.nist.gov/800-63-4/sp800-63b.html; OWASP Authentication Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html."
  },

  { id: "q-m4-74", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Password spraying e defesa de identidade",
    contexto: "Uma organização detecta tentativas de autenticação em muitas contas diferentes, com poucas falhas por conta e horários semelhantes.",
    enunciado: "Qual interpretação e resposta são mais adequadas?",
    alternativas: [
      { letra: "A", texto: "O padrão é compatível com password spraying; a equipe deve correlacionar tentativas entre contas, investigar origem e aplicar controles proporcionais, MFA e monitoramento." },
      { letra: "B", texto: "Não pode ser ataque porque cada conta apresenta poucas tentativas falhas." },
      { letra: "C", texto: "É necessariamente credential stuffing, pois todos os ataques distribuídos usam credenciais vazadas." },
      { letra: "D", texto: "A melhor resposta é desativar os registros para reduzir o volume de alertas." },
      { letra: "E", texto: "Basta aumentar o tamanho mínimo da senha, sem investigar o padrão observado." }
    ],
    gabarito: "A",
    justificativa: "Password spraying costuma testar uma ou poucas senhas comuns em várias contas, tentando evitar limiares de bloqueio por conta. A detecção pode exigir correlação entre identidades, origens, horários e resultados. A resposta deve combinar investigação, controles de autenticação e monitoramento, sem presumir que todo padrão distribuído seja o mesmo tipo de ataque.",
    analise: {
      A: "CORRETA. A distribuição entre muitas contas é compatível com password spraying e justifica correlação e investigação.",
      B: "INCORRETA. A baixa quantidade de falhas por conta pode ser justamente uma característica da técnica.",
      C: "INCORRETA. Credential stuffing usa pares de credenciais previamente comprometidas; password spraying tenta senhas comuns em várias contas.",
      D: "INCORRETA. Desativar registros elimina evidências necessárias para detecção e resposta.",
      E: "INCORRETA. Políticas de senha podem ajudar, mas não substituem análise do padrão e controles de autenticação."
    },
    regra: "Password spraying distribui tentativas de poucas senhas entre várias contas; correlacione eventos por identidade, origem, horário e resultado.",
    pegadinha: "Poucas falhas por conta não excluem um ataque quando há muitas contas envolvidas.",
    fonte: "Microsoft Security, password spray attacks: https://learn.microsoft.com/en-us/entra/architecture/security-operations-password-spray."
  },

  { id: "q-m4-75", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Credential stuffing e reutilização de senhas",
    contexto: "Um serviço observa logins bem-sucedidos em contas de usuários que utilizam senhas reutilizadas após vazamentos em outros serviços.",
    enunciado: "Qual controle reduz mais diretamente o risco de credential stuffing?",
    alternativas: [
      { letra: "A", texto: "Incentivar senhas únicas por serviço, oferecer MFA resistente a phishing quando viável, detectar padrões de login e orientar a troca de credenciais comprometidas." },
      { letra: "B", texto: "Permitir que usuários reutilizem a mesma senha em todos os serviços para facilitar a memorização." },
      { letra: "C", texto: "Usar apenas um bloqueio por conta após a primeira falha, sem monitorar autenticações bem-sucedidas." },
      { letra: "D", texto: "Armazenar senhas em texto claro para compará-las com listas de vazamentos." },
      { letra: "E", texto: "Presumir que um login bem-sucedido é legítimo mesmo quando o padrão de acesso é anômalo." }
    ],
    gabarito: "A",
    justificativa: "Credential stuffing utiliza pares de usuário e senha expostos em um serviço para tentar acessar outros. Senhas únicas reduzem o efeito da reutilização, MFA acrescenta uma barreira, e a detecção de padrões de autenticação ajuda a identificar tentativas e acessos suspeitos. O serviço deve armazenar senhas com mecanismos apropriados e responder a credenciais comprometidas sem expor segredos.",
    analise: {
      A: "CORRETA. A alternativa combina prevenção da reutilização, fator adicional, detecção e resposta a credenciais comprometidas.",
      B: "INCORRETA. Reutilizar senhas permite que um vazamento em um serviço afete outros.",
      C: "INCORRETA. Um bloqueio isolado pode ser abusado e não identifica necessariamente tentativas distribuídas ou acessos bem-sucedidos suspeitos.",
      D: "INCORRETA. Senhas não devem ser armazenadas em texto claro.",
      E: "INCORRETA. Sucesso de autenticação não prova legitimidade quando há sinais de comprometimento ou anomalia."
    },
    regra: "Credential stuffing explora reutilização de credenciais vazadas; use senhas únicas, MFA, detecção e resposta segura a credenciais comprometidas.",
    pegadinha: "Uma autenticação bem-sucedida pode ser resultado de credenciais roubadas; avalie o contexto do acesso.",
    fonte: "OWASP, Credential Stuffing Prevention Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Credential_Stuffing_Prevention_Cheat_Sheet.html; NIST SP 800-63B: https://pages.nist.gov/800-63-4/sp800-63b.html."
  },

  { id: "q-m4-76", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — SSRF e validação de destinos",
    contexto: "Uma aplicação permite que usuários informem uma URL para que o servidor busque conteúdo externo. O recurso também pode alcançar endereços internos da rede.",
    enunciado: "Qual medida reduz melhor o risco de Server-Side Request Forgery (SSRF)?",
    alternativas: [
      { letra: "A", texto: "Validar e restringir esquemas, destinos e endereços resolvidos por lista de permissões, bloquear acesso a redes internas e metadados sensíveis e revalidar após resolução de DNS." },
      { letra: "B", texto: "Aceitar qualquer URL porque a requisição parte do servidor e, portanto, é confiável." },
      { letra: "C", texto: "Bloquear apenas URLs que contenham a palavra 'admin', sem validar destino ou redirecionamentos." },
      { letra: "D", texto: "Permitir redirecionamentos ilimitados e confiar somente na extensão do recurso." },
      { letra: "E", texto: "Exibir o conteúdo obtido sem registrar ou limitar as requisições feitas pelo servidor." }
    ],
    gabarito: "A",
    justificativa: "SSRF ocorre quando um atacante influencia requisições originadas pelo servidor para destinos que não deveriam estar acessíveis por esse caminho. A mitigação deve restringir esquemas e destinos, considerar endereços IPv4/IPv6 e DNS, tratar redirecionamentos e impedir acesso a serviços internos ou endpoints de metadados. A validação superficial de texto não é suficiente, e controles de rede complementam a validação na aplicação.",
    analise: {
      A: "CORRETA. A alternativa combina validação rigorosa de destino com restrições de rede e atenção a DNS e redirecionamentos.",
      B: "INCORRETA. Uma requisição iniciada pelo servidor pode abusar da confiança e do acesso de rede desse servidor.",
      C: "INCORRETA. Filtrar uma palavra não valida o destino e pode ser contornado por variações de URL ou redirecionamentos.",
      D: "INCORRETA. Redirecionamentos podem conduzir a destinos não autorizados e precisam ser controlados.",
      E: "INCORRETA. A ausência de limites e de observabilidade dificulta prevenção, detecção e investigação."
    },
    regra: "Mitigue SSRF restringindo esquemas e destinos, validando endereços resolvidos, controlando redirecionamentos e bloqueando acesso desnecessário a redes internas.",
    pegadinha: "Validar apenas o texto da URL não basta: DNS, endereços alternativos e redirecionamentos podem mudar o destino efetivo.",
    fonte: "OWASP, Server Side Request Forgery Prevention Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html."
  },

  { id: "q-m4-77", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Tratamento de risco de segurança",
    contexto: "Uma avaliação identifica risco relevante em um sistema legado. A organização compara correção técnica, isolamento temporário, transferência contratual e eventual aceitação formal do risco residual.",
    enunciado: "Qual abordagem representa uma gestão de risco responsável?",
    alternativas: [
      { letra: "A", texto: "Registrar o risco, estimar probabilidade e impacto, selecionar tratamento proporcional, atribuir responsáveis e acompanhar o risco residual." },
      { letra: "B", texto: "Presumir que toda ameaça pode ser eliminada por completo antes de qualquer operação." },
      { letra: "C", texto: "Aceitar automaticamente todo risco de baixo custo de correção, sem aprovação ou documentação." },
      { letra: "D", texto: "Transferir um contrato e concluir que a organização deixou de ter qualquer responsabilidade." },
      { letra: "E", texto: "Tratar todos os riscos da mesma forma, independentemente de impacto, contexto ou criticidade." }
    ],
    gabarito: "A",
    justificativa: "Gestão de risco envolve identificar e analisar cenários, avaliar probabilidade e impacto, selecionar uma resposta adequada e monitorar o risco residual. Tratamentos podem incluir mitigação, evitação, compartilhamento/transferência e aceitação formal conforme a governança. Nenhuma opção garante risco zero ou elimina automaticamente as responsabilidades da organização.",
    analise: {
      A: "CORRETA. A alternativa inclui análise, tratamento proporcional, responsabilidade e acompanhamento do risco residual.",
      B: "INCORRETA. Risco zero raramente é uma premissa realista; decisões devem considerar tolerância e impacto.",
      C: "INCORRETA. Aceitação de risco deve seguir autoridade, critérios e registro definidos pela governança.",
      D: "INCORRETA. Contratos podem distribuir obrigações, mas não eliminam automaticamente todas as responsabilidades da organização.",
      E: "INCORRETA. O tratamento deve considerar o contexto, a criticidade e o impacto do risco."
    },
    regra: "Gestão de risco: identificar, analisar, avaliar, tratar, documentar e acompanhar o risco residual.",
    pegadinha: "Transferir ou aceitar risco não significa que ele desapareceu; a decisão precisa ser autorizada e monitorada.",
    fonte: "NIST SP 800-30 Rev. 1 — Guide for Conducting Risk Assessments: https://csrc.nist.gov/pubs/sp/800/30/r1/final; NIST SP 800-39 — Managing Information Security Risk: https://csrc.nist.gov/pubs/sp/800/39/final."
  },

  { id: "q-m4-78", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Evidências e comunicação em incidentes",
    contexto: "Uma equipe identifica possível comprometimento de uma conta privilegiada. Há risco de novas ações, e os registros podem ser sobrescritos em pouco tempo.",
    enunciado: "Qual é a resposta inicial mais adequada, respeitando os procedimentos de resposta a incidentes?",
    alternativas: [
      { letra: "A", texto: "Preservar evidências relevantes, conter o risco de forma proporcional, acionar responsáveis e registrar decisões, horários e ações realizadas." },
      { letra: "B", texto: "Apagar todos os registros e reinstalar o sistema imediatamente, sem documentar o ocorrido." },
      { letra: "C", texto: "Publicar os dados técnicos e pessoais do incidente em redes sociais para alertar todos os usuários." },
      { letra: "D", texto: "Esperar até que o atacante conclua as ações para reunir evidências completas." },
      { letra: "E", texto: "Alterar os registros para que todos os eventos pareçam ocorrer no mesmo horário." }
    ],
    gabarito: "A",
    justificativa: "A resposta inicial deve equilibrar contenção e preservação de evidências, seguindo o plano institucional e a gravidade do caso. A equipe deve documentar decisões e ações, preservar registros relevantes, limitar acessos comprometidos e comunicar as pessoas responsáveis pelos canais apropriados. A sequência exata depende do incidente e dos riscos imediatos; ações precipitadas podem destruir evidências ou ampliar o impacto.",
    analise: {
      A: "CORRETA. A alternativa combina contenção proporcional, preservação de evidências, escalonamento e documentação.",
      B: "INCORRETA. Apagar registros sem preservação pode destruir evidências úteis e dificultar a investigação.",
      C: "INCORRETA. A divulgação indiscriminada pode expor dados pessoais e detalhes sensíveis; a comunicação deve seguir os canais e deveres aplicáveis.",
      D: "INCORRETA. A demora pode ampliar o dano; contenção e preservação devem ser avaliadas conforme o risco.",
      E: "INCORRETA. Alterar horários ou registros compromete a integridade das evidências."
    },
    regra: "Em incidentes, siga o plano, contenha proporcionalmente, preserve evidências, registre ações e comunique pelos canais autorizados.",
    pegadinha: "Conter o incidente é importante, mas ações sem planejamento podem destruir evidências ou afetar sistemas críticos.",
    fonte: "NIST SP 800-61 Rev. 3 — Incident Response Recommendations and Considerations for Cybersecurity Risk Management: https://csrc.nist.gov/pubs/sp/800/61/r3/final."
  },

  { id: "q-m4-79", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.1 — Análise de impacto nos negócios (BIA)",
    contexto: "Uma organização tem recursos limitados para preparar a continuidade de dezenas de processos. Alguns serviços são essenciais para a população; outros podem permanecer indisponíveis por mais tempo sem impacto crítico.",
    enunciado: "Qual é a principal contribuição da análise de impacto nos negócios (BIA) para o planejamento de continuidade?",
    alternativas: [
      { letra: "A", texto: "Identificar processos prioritários, impactos de interrupção, dependências e necessidades de recuperação para orientar prioridades e recursos." },
      { letra: "B", texto: "Garantir que nenhum processo sofra interrupção." },
      { letra: "C", texto: "Substituir todos os testes de recuperação por uma lista de contatos." },
      { letra: "D", texto: "Definir prioridades exclusivamente pela facilidade técnica de restaurar um sistema." },
      { letra: "E", texto: "Limitar o planejamento à compra de cópias de segurança, sem avaliar processos de negócio." }
    ],
    gabarito: "A",
    justificativa: "A BIA identifica funções e processos críticos, consequências de interrupções, dependências e prioridades de recuperação. Seus resultados orientam recursos, estratégias de continuidade e metas como RTO/RPO, mas não garantem ausência de interrupções nem substituem testes e revisão periódica.",
    analise: {
      A: "CORRETA. A BIA conecta impacto para o negócio, criticidade, dependências e prioridades de recuperação.",
      B: "INCORRETA. A análise orienta preparação e resposta, mas não garante interrupção zero.",
      C: "INCORRETA. Lista de contatos não substitui estratégias, procedimentos e testes de recuperação.",
      D: "INCORRETA. Prioridade deve considerar impacto no negócio, não apenas facilidade técnica.",
      E: "INCORRETA. A BIA abrange processos e impactos organizacionais, não apenas backups."
    },
    regra: "BIA identifica processos críticos, impactos, dependências e prioridades para orientar estratégias e metas de recuperação.",
    pegadinha: "O sistema tecnicamente mais fácil de recuperar não é necessariamente o processo de maior prioridade para o negócio.",
    fonte: "NIST SP 800-34 Rev. 1 — Contingency Planning Guide for Federal Information Systems: https://csrc.nist.gov/pubs/sp/800/34/r1/final."
  },

  { id: "q-m4-80", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Plano de resposta a incidentes e exercícios",
    contexto: "Uma organização tem um documento de resposta a incidentes, mas os responsáveis não sabem quem autoriza isolamento de sistemas, quem comunica áreas afetadas nem como avaliar a recuperação.",
    enunciado: "Qual medida melhora a capacidade real de resposta da organização?",
    alternativas: [
      { letra: "A", texto: "Manter o documento sem exercícios, pois sua existência comprova prontidão." },
      { letra: "B", texto: "Definir papéis e critérios de escalonamento, exercitar cenários, revisar resultados e atualizar o plano com as lições aprendidas." },
      { letra: "C", texto: "Deixar todas as decisões para o primeiro técnico que detectar um alerta, sem limites de autoridade." },
      { letra: "D", texto: "Impedir comunicação entre equipes para evitar divergência de informações." },
      { letra: "E", texto: "Tratar cada incidente sem registrar decisões para preservar flexibilidade." }
    ],
    gabarito: "B",
    justificativa: "Um plano é útil quando as responsabilidades, os critérios de escalonamento, as comunicações e as ações de resposta são compreendidos e testados. Exercícios ajudam a revelar lacunas em decisões, dependências e comunicação. Os resultados devem ser documentados e usados para atualizar o plano; a preparação não elimina a possibilidade de incidentes.",
    analise: {
      A: "INCORRETA. A existência do documento não comprova que os participantes consigam executá-lo.",
      B: "CORRETA. Papéis definidos, exercícios, revisão e lições aprendidas transformam o plano em capacidade operacional.",
      C: "INCORRETA. A resposta precisa de autoridade, critérios e coordenação proporcionais ao impacto.",
      D: "INCORRETA. Comunicação coordenada é necessária para responder de modo consistente e evitar ações conflitantes.",
      E: "INCORRETA. Registrar decisões permite reconstruir ações, avaliar eficácia e melhorar o plano."
    },
    regra: "Plano de resposta eficaz exige papéis claros, critérios de escalonamento, comunicação, exercícios e melhoria contínua baseada em evidências.",
    pegadinha: "Documento publicado não é prova de prontidão; a capacidade deve ser exercitada e atualizada.",
    fonte: "NIST SP 800-61 Rev. 3 — Incident Response Recommendations and Considerations for Cybersecurity Risk Management: https://csrc.nist.gov/pubs/sp/800/61/r3/final."
  },

  { id: "q-m4-81", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Seleção de controles preventivos",
    contexto: "Antes de liberar um serviço para a internet, a equipe identifica uma interface administrativa que não deveria estar acessível externamente.",
    enunciado: "Qual medida atua principalmente como controle preventivo nesse cenário?",
    alternativas: [
      { letra: "A", texto: "Restringir a interface à rede administrativa autorizada, exigir autenticação adequada e bloquear o acesso externo desnecessário antes de ocorrer um incidente." },
      { letra: "B", texto: "Revisar os logs depois de detectar uma tentativa de acesso." },
      { letra: "C", texto: "Restaurar o serviço a partir de backup após um comprometimento." },
      { letra: "D", texto: "Documentar as lições aprendidas depois de um incidente." },
      { letra: "E", texto: "Investigar a origem de uma invasão já confirmada." }
    ],
    gabarito: "A",
    justificativa: "Controles preventivos reduzem a probabilidade de um evento indesejado antes que ocorra, por exemplo, restringindo a exposição e aplicando autenticação e autorização. Revisão de logs e investigação são atividades detectivas ou de resposta; restauração e lições aprendidas ocorrem depois do evento.",
    analise: { A: "CORRETA. A restrição de exposição e o controle de acesso atuam antes de um incidente.", B: "INCORRETA. Revisar logs para identificar atividade suspeita é principalmente detectivo.", C: "INCORRETA. Restaurar um serviço após comprometimento é uma atividade de recuperação/correção.", D: "INCORRETA. Lições aprendidas são parte da melhoria após um incidente.", E: "INCORRETA. Investigar uma invasão confirmada é resposta a um evento já ocorrido." },
    regra: "Preventivo reduz a probabilidade de um evento antes que ocorra; detectivo identifica, e corretivo/recuperação trata os efeitos após o evento.",
    pegadinha: "A classificação depende da função do controle no cenário, não apenas do nome da ferramenta usada.",
    fonte: "NIST SP 800-53 Rev. 5 — Security and Privacy Controls: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final."
  },

  { id: "q-m4-82", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.2 — Controles detectivos e qualidade dos alertas",
    contexto: "A organização coleta eventos de autenticação e rede, mas gera tantos alertas repetidos que a equipe não consegue priorizar os incidentes relevantes.",
    enunciado: "Qual ação melhora a utilidade dos controles detectivos?",
    alternativas: [
      { letra: "A", texto: "Desativar todos os alertas para reduzir o volume de trabalho." },
      { letra: "B", texto: "Correlacionar eventos, ajustar regras com base em evidências, definir severidade e escalonamento e avaliar falsos positivos e falsos negativos." },
      { letra: "C", texto: "Considerar todo alerta prova conclusiva de ataque confirmado." },
      { letra: "D", texto: "Registrar apenas eventos bem-sucedidos e descartar falhas de autenticação." },
      { letra: "E", texto: "Substituir registros por mensagens verbais sem data ou responsável." }
    ],
    gabarito: "B",
    justificativa: "Controles detectivos são úteis quando os eventos relevantes são registrados e analisados de forma que permita priorizar e investigar. Correlação, ajuste de regras, classificação de severidade e procedimentos de escalonamento ajudam a lidar com o volume de alertas. Alertas são sinais para análise, não prova automática de comprometimento.",
    analise: { A: "INCORRETA. Desativar alertas elimina a capacidade de detectar eventos relevantes.", B: "CORRETA. A alternativa melhora priorização e investigação sem presumir que todo alerta seja verdadeiro.", C: "INCORRETA. Alertas podem ser falsos positivos e precisam de validação.", D: "INCORRETA. Falhas de autenticação podem ser importantes para detectar ataques.", E: "INCORRETA. Registros estruturados e rastreáveis são necessários para análise e resposta." },
    regra: "Detecção eficaz combina eventos relevantes, correlação, priorização, investigação e ajuste contínuo das regras.",
    pegadinha: "Alerta é indício que exige triagem, não prova automática de ataque nem justificativa para desativar a monitoração.",
    fonte: "NIST SP 800-92 — Guide to Computer Security Log Management: https://csrc.nist.gov/pubs/sp/800/92/final; NIST SP 800-61 Rev. 3: https://csrc.nist.gov/pubs/sp/800/61/r3/final."
  },

  { id: "q-m4-83", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Controles corretivos e recuperação",
    contexto: "Após confirmar que uma conta administrativa foi comprometida, a equipe remove o acesso indevido e precisa restaurar a operação com segurança.",
    enunciado: "Qual conjunto de ações é mais adequado como parte da correção e recuperação?",
    alternativas: [
      { letra: "A", texto: "Revogar sessões e credenciais comprometidas, corrigir a causa identificada, restaurar sistemas de fonte confiável e verificar o funcionamento e a segurança antes de retomar o serviço." },
      { letra: "B", texto: "Reativar a mesma conta sem alterar credenciais ou revisar os registros." },
      { letra: "C", texto: "Apagar todos os registros para que a conta comprometida não apareça na investigação." },
      { letra: "D", texto: "Retomar o serviço imediatamente, sem verificar se o vetor de comprometimento permanece." },
      { letra: "E", texto: "Considerar o incidente encerrado assim que a conta for desativada, sem avaliar o impacto." }
    ],
    gabarito: "A",
    justificativa: "A correção e recuperação devem remover o acesso comprometido, tratar a causa conhecida, restaurar a partir de fontes confiáveis e verificar se os sistemas estão íntegros antes de retomar a operação. A equipe deve preservar evidências e avaliar o alcance do incidente; uma única ação, como desativar a conta, não comprova que todo o risco foi eliminado.",
    analise: { A: "CORRETA. A alternativa combina contenção de credenciais, correção da causa, recuperação confiável e validação antes da retomada.", B: "INCORRETA. Reativar credenciais sem correção pode permitir novo comprometimento.", C: "INCORRETA. Apagar registros destrói evidências e compromete a investigação.", D: "INCORRETA. Se o vetor permanecer, a retomada pode resultar em novo incidente.", E: "INCORRETA. O alcance e os efeitos do incidente precisam ser avaliados antes do encerramento." },
    regra: "Correção/recuperação exige remover o acesso comprometido, tratar a causa, restaurar de fonte confiável, validar e preservar evidências.",
    pegadinha: "Conter um sintoma não comprova que a causa foi eliminada nem que o serviço pode ser retomado com segurança.",
    fonte: "NIST SP 800-61 Rev. 3 — Incident Response Recommendations and Considerations for Cybersecurity Risk Management: https://csrc.nist.gov/pubs/sp/800/61/r3/final."
  },

  { id: "q-m4-84", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Controle compensatório para sistema legado",
    contexto: "Um equipamento industrial não pode ser atualizado imediatamente sem interromper uma operação crítica. O fabricante não oferece correção imediata, e o equipamento precisa continuar em serviço por período limitado.",
    enunciado: "Qual decisão representa melhor um controle compensatório responsável?",
    alternativas: [
      { letra: "A", texto: "Isolar o equipamento em uma zona de rede restrita, permitir apenas comunicações necessárias, monitorar acessos e definir prazo, responsável e revisão para a exceção." },
      { letra: "B", texto: "Conectar o equipamento diretamente à internet para facilitar a manutenção." },
      { letra: "C", texto: "Declarar o equipamento seguro apenas porque não há correção disponível." },
      { letra: "D", texto: "Remover os registros de rede para evitar alertas durante a operação." },
      { letra: "E", texto: "Manter a exceção indefinidamente sem documentar o risco." }
    ],
    gabarito: "A",
    justificativa: "Quando a correção preferencial não está disponível ou não pode ser aplicada imediatamente, controles compensatórios podem reduzir a exposição, como isolamento, restrição de comunicações e monitoramento. Eles não eliminam necessariamente a vulnerabilidade; a exceção deve ter justificativa, responsável, prazo, risco residual e reavaliação.",
    analise: { A: "CORRETA. A alternativa reduz exposição e inclui governança temporária da exceção.", B: "INCORRETA. Exposição direta amplia a superfície de ataque sem necessidade demonstrada.", C: "INCORRETA. A ausência de correção não significa que o sistema seja seguro.", D: "INCORRETA. Remover registros prejudica detecção e investigação.", E: "INCORRETA. Exceções sem prazo e revisão tornam o risco residual invisível e permanente." },
    regra: "Controle compensatório reduz exposição quando a correção preferencial não é viável; registre e reavalie a exceção e o risco residual.",
    pegadinha: "Uma limitação técnica não transforma a vulnerabilidade em risco aceitável automaticamente.",
    fonte: "NIST SP 800-53 Rev. 5: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final; CISA, Known Exploited Vulnerabilities Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog."
  },

  { id: "q-m4-85", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral", nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.2 — Ameaça, vulnerabilidade e risco",
    contexto: "Um servidor exposto à internet contém uma falha conhecida. Um grupo tenta explorar essa falha para obter acesso; o servidor suporta um serviço público crítico.",
    enunciado: "Qual alternativa distingue melhor ameaça, vulnerabilidade e risco nesse cenário?",
    alternativas: [
      { letra: "A", texto: "A falha é a vulnerabilidade; o grupo ou evento capaz de explorá-la é uma ameaça; o risco considera a possibilidade e o impacto do cenário sobre o serviço." },
      { letra: "B", texto: "A vulnerabilidade é o grupo atacante, e a ameaça é a correção instalada." },
      { letra: "C", texto: "Risco é sinônimo de vulnerabilidade e não depende de impacto ou contexto." },
      { letra: "D", texto: "A existência de uma vulnerabilidade prova que o incidente já ocorreu." },
      { letra: "E", texto: "Uma ameaça só existe quando o dano já foi confirmado." }
    ],
    gabarito: "A",
    justificativa: "Vulnerabilidade é uma fraqueza que pode ser explorada; ameaça é uma circunstância, evento ou agente com potencial de causar dano; risco expressa a combinação de probabilidade e consequências no contexto considerado, segundo o método de avaliação adotado. A presença de uma vulnerabilidade não prova que houve exploração, mas sua exposição e a existência de atividade ameaçadora podem elevar a prioridade de tratamento.",
    analise: { A: "CORRETA. A alternativa separa a fraqueza técnica, o agente/evento potencial e o risco contextual.", B: "INCORRETA. O grupo atacante pode ser uma ameaça; a falha é a vulnerabilidade, e uma correção é uma medida de tratamento.", C: "INCORRETA. Risco não é sinônimo de vulnerabilidade e depende do cenário e das consequências.", D: "INCORRETA. Uma vulnerabilidade pode existir sem que tenha sido explorada.", E: "INCORRETA. A ameaça pode existir antes de o dano ocorrer." },
    regra: "Vulnerabilidade = fraqueza; ameaça = agente/evento potencialmente danoso; risco = avaliação contextual da possibilidade e das consequências.",
    pegadinha: "Encontrar uma vulnerabilidade não prova exploração; a avaliação de risco considera exposição, ameaça, probabilidade e impacto.",
    fonte: "NIST SP 800-30 Rev. 1 — Guide for Conducting Risk Assessments: https://csrc.nist.gov/pubs/sp/800/30/r1/final; ISO/IEC 27000:2018."
  },


];
