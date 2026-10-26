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
      { letra: "A", texto: "A MFA substitui completamente a senha, eliminando-o do processo." },
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
    regra: "Simétrica: mesma chave (AES, DES, 3DES). Assimétrica: par chave (RSA, ECDSA, Diffie-Hellman).",
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
      C: "CORRETA. O '1' refere-se à cópia offline/imutável fora do local.",
      D: "INCORRETA. A regra 3-2-1 não define frequência de backup.",
      E: "INCORRETA. Documentação de planos de recuperação é importante, mas não é o '1' da estratégia 3-2-1."
    },
    regra: "3-2-1: 3 cópias, 2 mídias/arquiteturas diferentes, 1 cópia fora do local ou offline.",
    pegadinha: "O 3-2-1 não é 3 três cópias, 2 dois sistemas, 1 um único local — o 1 é a cópia fora do local.",
    fonte: "Veeam Blog — The 3-2-1 Backup Rule, 2016."
  },

  { id: "q-m4-08", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.1 — RPO e RTO",
    contexto: "Uma empresa define objetivos de recuperação para seus sistemas críticos.",
    enunciado: "Sobre RPO (Recovery Point Objective) e RTO (Recovery Time Objective), é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "RPO mede o tempo máximo de indisponibilidade aceitável; RTO mede quantotempo será perdido de dados." },
      { letra: "B", texto: "RPO mede a quantidade máxima de dados que pode ser perdida; RTO mede o tempo máximo para se recuperar." },
      { letra: "C", texto: "RPO e RTO são sinônimos." },
      { letra: "D", texto: "RPO é o tempo de resposta a incidentes; RTO é o tempo disponível." }
    ],
    gabarito: "B",
    justificativa: "RPO define a quantidade máxima de dados que pode ser perdida (ex: se RPO=1 hora, podem ser perdidos até 1 hora de dados recentes); RTO define o tempo máximo que o sistema pode ficar indisponível. A alternativa A inverte os conceitos; as alternativas C e D são incorretas pela definição. RTO e RPO são conceitos distintos e necessários para planejamento de recuperação.",
    analise: {
      A: "INCORRETA. RPO mede quantidade de dados perdidos, RTO mede tempo de indisponibilidade.",
      B: "CORRETA. RPO é o limite de perda de dados; RTO é o tempo máximo de indisponibilidade.",
      C: "INCORRETA. RPO (perda de dados) e RTO (tempo de indisponibilidade) são conceitos distintos.",
      D: "INCORRETA. RPO e RTO não incluem tempo de resposta como definidos."
    },
    regra: "RPO = quanto de dados pode ser perdido; RTO = quanto tempo o sistema pode ficar indisponível.",
    pegadinha: "Não confundir: RPO é 'quanto de dados', RTO é 'quanto tempo'. Ambos são medidos nas unidades certas.",
    fonte: "ITIL v3 — Continual Service Improvement, recovery objectives."
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
    regra: "Menor privilégio: 'só o que é necessário, nothing more' — reduz superfície de ataque.",
    pegadinha: "Menor privilégio não significa 'nenhum acesso', significa 'nenhum além do necessário'.",
    fonte: "NIST SP 800-53 (AC-2: Account Management; AC-3: Access Enforcement)."
  },

  { id: "q-m4-10", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.1 — Risco e ameaça",
    contexto: "Um gestor de TI define os conceitos de risco e ameaça para o planejamento de segurança.",
    enunciado: "A relação correta entre risco e ameaça é que:",
    alternativas: [
      { letra: "A", texto: "Ameaça é a probabilidade de um risco se materializar; risco é a causa da ameaça." },
      { letra: "B", texto: "Ameaça é uma situação que pode explorar uma vulnerabilidade; risco é o impacto ou probabilidade de dano." },
      { letra: "C", texto: "Risco e ameaça são sinônimos." },
      { letra: "D", texto: "Ameaça é uma condição que torna os ativos mais expostos; risco é a probabilidade de dano." }
    ],
    gabarito: "B",
    justificativa: "Ameaça é uma situação ou entidade capaz de explorar uma vulnerabilidade (ex: malware, atacante); risco é o impacto ou probabilidade de dano que resulta dessa possibilidade. A alternativa A inverte a relação; C é incorreta por definição; a alternativa D descreve vulnerabilidade, não ameaça.",
    analise: {
      A: "INCORRETA. Inverte as definições: ameaça é a situação que pode causar dano; risco é o dano potencial.",
      B: "CORRETA. Ameaça é a possibilidade de exploração; risco é o impacto/probabilidade do dano.",
      C: "INCORRETA. Risco e ameaça são conceitos distintos, embora relacionados.",
      D: "INCORRETA. Isso descreve vulnerabilidade, não ameaça."
    },
    regra: "Ameaça = oportunidade de exploração; Vulnerabilidade = fraqueza; Risco = impacto da exploração.",
    pegadinha: "Não confundir: ameaça é quem/ o que possa atacar; vulnerabilidade é o que pode ser atacado; risco é o dano resultante.",
    fonte: "ISO/IEC 27000:2018, cláusulas 3.9 (Ameaça), 3.11 (Vulnerabilidade), 3.15 (Risco)."
  },

  /* ===================== 4.2 Malwares (10 questões) ===================== */

  { id: "q-m4-11", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m4-u2-t1-s1", assunto: "4.2 — Vírus e worms",
    contexto: "Dois tipos de malwares são comparados: vírus e worm.",
    enunciado: "A principal diferença entre vírus e worm é que:",
    alternativas: [
      { letra: "A", texto: "Worms precisam de uma hospeste para se propagar, vírus não." },
      { letra: "B", texto: "Vírus se propagam apenas pela rede, worms não." },
      { letra: "C", texto: "Worms se replicam e se propagam de forma independente, sem necessidade de anexo ou interação do usuário." },
      { letra: "D", texto: "Vírus são sempre perigosos, worms não." },
      { letra: "E", texto: "Worms não podem ser detectados por antivírus." }
    ],
    gabarito: "C",
    justificativa: "Worms são malwares independentes que se replicam e se propagam por redes sem interação do usuário. Vírus depende de um programa hospedeiro e da ação do usuário para se propagar (alternativa A incorreta); vírus se propagam por muitos meios, não apenas pela rede (alternativa B incorreta); tanto vírus quanto worms podem causar danos — nem um nem outro são sempre perigosos (alternativas D e E incorretas).",
    analise: {
      A: "INCORRETA. Worms são independentes e não precisam de hospeste nem ação do usuário.",
      B: "INCORRETA. Vírus se propagam por muitos meios, incluindo anexos, periféricos, etc.",
      C: "CORRETA. Worms se replicam independentemente, sem precisar de ação do usuário.",
      D: "INCORRETA. Tanto vírus quanto worms podem ser danificados ou inofensivos.",
      E: "INCORRETA. Worms podem ser detectados por antivírus, embora evasivos sometimes."
    },
    regra: "Vírus: depende de hospedeiro + ação do usuário. Worm: replica e se propaga sozinho pela rede.",
    pegadinha: "Worms são 'independentes' — não precisam de anexo nem clique do usuário para se propagar.",
    fonte: "CERT.br — Guia de Malware, 2021."
  },

  { id: "q-m4-12", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m4-u2-t1-s2", assunto: "4.2 — Trojans e backdoors",
    contexto: "Um equipamento é comprometido por um malware que se disfarça de software legítimo.",
    enunciado: "Sobre o 'Trojan' (cavalo de troia), é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "É um malware que se replica automaticamente." },
      { letra: "B", texto: "É um malware disfarçado de software legítimo, que abre um backdoor para ataques." },
      { letra: "C", texto: "É um tipo de firewall." },
      { letra: "D", texto: "É um ataque de negação de serviço." },
      { letra: "E", texto: "É uma ferramenta de criptografia." }
    ],
    gabarito: "B",
    justificativa: "Trojan é um malware disfarçado de software legítimo. Uma vez executado, pode abrir um backdoor, roubar dados ou conceder acesso remoto. Trojans não se replicam sozinhos (alternativa A incorreta); não é firewall (alternativa C incorreta); não é DoS (alternativa D incorreta); não é criptografia (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Trojans não se replicam — diferente de vírus e worms.",
      B: "CORRETA. Trojans disfarçados de software legítimo, que secretamente abrem porta de acesso.",
      C: "INCORRETA. Firewall é uma defesa; Trojan é um malware.",
      D: "INCORRETA. DoS é um ataque de negação de serviço.",
      E: "INCORRETA. Criptografia é uma ferramenta de proteção, não um malware."
    },
    regra: "Trojan: 'pensando que é algo útil, o usuário instala um ataque' — sociedade do ingênuo.",
    pegadinha: "Trojan não se replica — ele se disfarce de algo legítimo e pede para ser executado.",
    fonte: "Symantec — CyberCrime Report, 2020."
  },

  { id: "q-m4-13", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m4-u2-t1-s3", assunto: "4.2 — Ransomware",
    contexto: "Uma organização é vítima de um ataque de ransomware que criptografa os dados.",
    enunciado: "O ransomware é definido como um malware que:",
    alternativas: [
      { letra: "A", texto: "Espiona o usuário e rouba informações." },
      { letra: "B", texto: "Criptografa os dados do usuário e exige pagamento para descriptografar." },
      { letra: "C", texto: "Cria redes de bots para ataques." },
      { letra: "D", texto: "Exclui arquivos temporariamente." },
      { letra: "E", texto: "Estuda a segurança do sistema." }
    ],
    gabarito: "B",
    justificativa: "Ransomware criptografa os dados do alvo e exige um pagamento (resgate) para liberar o acesso. Espionagem é o spyware (alternativa A incorreta); criação de botnets é outro tipo de malware (alternativa C incorreta); exclusão temporária não é a definição de ransomware (alternativa D incorreta); 'estudar a segurança' é uma descrição vaga e incorreta (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Espionagem é o spyware, não o ransomware.",
      B: "CORRETA. Ransomware criptografa dados e exige pagamento pela descriptografia.",
      C: "INCORRETA. Criação de botnets é outra categoria de malware (ex: botnet).",
      D: "INCORRETA. Exclusão de arquivos pode ocorrer, mas o recurso definidor é a criptografia e o resgate.",
      E: "INCORRETA. Estudo de segurança não é uma definição de ransomware."
    },
    regra: "Ransomware = criptografia + extorsão. 'Se não pagar, seus dados ficam inacessíveis'.",
    pegadinha: "Ransomware não é só exlusão — é criptografia dos dados com requerimento de resgate.",
    fonte: "FBI — Internet Crime Complaint Center (IC3) Annual Report, 2022."
  },

  { id: "q-m4-14", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-1", assunto: "4.2 — Botnets",
    contexto: "Um atacante controla uma rede de dispositivos infectados sem o conhecimento dos donos.",
    enunciado: "O termo 'botnet' refere-se a:",
    alternativas: [
      { letra: "A", texto: "Um sistema de firewall distribuído." },
      { letra: "B", texto: "Uma rede de computadores infectados sob controle remoto de um atacante." },
      { letra: "C", texto: "Um tipo de algoritmo de encriptação." },
      { letra: "D", texto: "Um protocolo de rede seguro." },
      { letra: "E", texto: "Um software de backup automatizado." }
    ],
    gabarito: "B",
    justificativa: "Botnet é uma rede de dispositivos (computadores, IoT, servidores) infectados e controlados remotamente por um atacante (botmaster), usada para enviar spam, realizar DDoS, criptomoedas etc. Não é firewall (alternativa A incorreta); não é algoritmo de criptografia (alternativa C incorreta); nem protocolo de rede (alternativa D incorreta); nem software de backup (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Firewall é uma defesa, botnet é um ataque distribuído de dispositivos infectados.",
      B: "CORRETA. Botnet é uma rede de dispositivos comprometidos sob controle remoto de um atacante.",
      C: "INCORRETA. Algoritmo de criptografia é uma função matemática, não um malware.",
      D: "INCORRETA. Protocolo de rede seguro é uma especificação de comunicação.",
      E: "INCORRETA. Software de backup automatizado é uma ferramenta de proteção."
    },
    regra: "Botnet = 'cada um no controle do outro' — uma rede de 'robots' infectados sob comando remoto.",
    pegadinha: "Botnet não é 'rede segura' — é uma rede de máquinas infectadas no controle de um atacante.",
    fonte: "Kaspersky Lab — Botnet Evolution Report, 2021."
  },

  { id: "q-m4-15", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-1", assunto: "4.2 — Rootkits",
    contexto: "Um ataque de rootkit consegue esconder sua presença no sistema operacional.",
    enunciado: "O termo 'rootkit' refere-se a:",
    alternativas: [
      { letra: "A", texto: "Um software de análise de segurança." },
      { letra: "B", texto: "Um tipo de malware projetado para ganhar acesso de root e esconder sua presença." },
      { letra: "C", texto: "Um tipo de protocolo de rede." },
      { letra: "D", texto: "Um serviço de backup automático." },
      { letra: "E", texto: "Um sistema operacional próprio." }
    ],
    gabarito: "B",
    justificativa: "Rootkit é um conjunto de ferramentas que concede acesso privilegiado (root/admin) e esconde sua presença do usuário e sistema. Não é software de análise (alternativa A incorreta); não é protocolo de rede (alternativa C incorreta); não é backup (alternativa D incorreta); não é um sistema operacional (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Rootkit é um malwares com capacidade de persistência e ocultação.",
      B: "CORRETA. Rootkit = acesso root + tecnologia de ocultação.",
      C: "INCORRETA. Rootkit não é um protocolo de rede.",
      D: "INCORRETA. Rootkit não é backup automático.",
      E: "INCORRETA. Rootkit é um malware, não um sistema operacional."
    },
    regra: "Rootkit = 'chave mestra + ocultação'. Dá root e esconde o malwares do sistema.",
    pegadinha: "Rootkit não é só 'root' — é root + tecnologia que esconde a presença.",
    fonte: "MITRE ATT&CK — T1055 (Rootkit), 2022."
  },

  { id: "q-m4-16", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-2", assunto: "4.2 — Firewalls",
    contexto: "Uma organização usa um firewall para filtrar tráfego de rede.",
    enunciado: "O que um Firewall (bastão de watt) faz?",
    alternativas: [
      { letra: "A", texto: "Criptografa todos os dados que passam pela rede." },
      { letra: "B", texto: "Filtra o tráfego de rede baseado em regras de segurança." },
      { letra: "C", texto: "Remove vírus automaticamente." },
      { letra: "D", texto: "Protege contra phishing apenas." },
      { letra: "E", texto: "Substitui a necessidade de autenticação." }
    ],
    gabarito: "B",
    justificativa: "Firewall é um dispositivo ou software que filtra o tráfego de rede baseado em regras de segurança (endereços, portas, protocolos, aplicações). Criptografa? Não (alternativa A incorreta); remove vírus? Não (é o papel do antivírus/EDR, não do firewall tradicional; alternativa C incorreta); protege contra phishing? Apenas de forma limitada (alternativa D incorreta); não substitui autenticação (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Firewall filtra tráfego; criptografia é feita por outros meios (SSL/TLS, IPSec).",
      B: "CORRETA. Firewall é um sistema que filtra o tráfego de entrada e saída pela rede.",
      C: "INCORRETA. Remoção de vírus é a responsabilidade do antivírus/EDR, não do firewall.",
      D: "INCORRETA. Firewall pode ajudar, mas não é a principal defesa contra phishing.",
      E: "INCORRETA. Firewall não substitui autenticação. Movimento de controle de acesso é complementar."
    },
    regra: "Firewall = filtro de tráfego. 'O que entra e o que sai' — baseando-se em regras de segurança.",
    pegadinha: "Firewall não é 'chave de segurança' — é 'bastão de watt' que controla o fluxo de dados.",
    fonte: "Cisco — Introduction to Firewalls, 2020."
  },

  { id: "q-m4-17", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.2 — IDS e IPS",
    contexto: "Uma empresa adota sistemas de detecção e prevenção de intrusão.",
    enunciado: "A diferença fundamental entre IDS (Intrusion Detection System) e IPS (Intrusion Prevention System) é que:",
    alternativas: [
      { letra: "A", texto: "IDS só detecta, IPS só previne." },
      { letra: "B", texto: "IDS gera alertas sobre atividade suspeita; IPS age para bloquear ou impedir o ataque." },
      { letra: "C", texto: "IDS é de rede, IPS é de hospedeiro." },
      { letra: "D", texto: "IDS e IPS são sinônimos." },
      { letra: "E", texto: "IPS só funciona com criptografia ativa." }
    ],
    gabarito: "B",
    justificativa: "IDS monitora o tráfego e gera alertas (detecção); IPS também monitora, mas também age para bloquear o tráfego malintencionado em tempo real (prevenção). IDS não impede (alternativa A incorreta); IDS gera alertas e pode tomar ações limitadas, mas a característica definidora é IDS detectar vs IPS prevenir (alternativa C incorreta); IDS e IPS não são sinônimos (alternativa D incorreta); IPS não requer ativação de criptografia (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. IDS detecta (alerta), IPS impede (age) — não são 'só detecta/ somente impede'.",
      B: "CORRETA. IDS gera alertas; IPS bloqueia o tráfego malintencionado ativamente.",
      C: "INCORRETA. Ambos podem ser rede (NIDS/NIPS) e de host (HIDS/HIPS).",
      D: "INCORRETA. IDS (detecção) e IPS (prevenção) são conceitos distintos.",
      E: "INCORRETA. IPS não requer criptografia ativa para funcionar."
    },
    regra: "IDS = 'olhar e alertar'; IPS = 'olhar, alertar e impedir'.",
    pegadinha: "IDS é de monitoramento; IPS é de bloqueio ativo. Diferença na ação, não na arquitetura.",
    fonte: "SANS Institute — Intrusion Detection Systems, 2018."
  },

  { id: "q-m4-18", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-2-topico-4", assunto: "4.2 — Defesa em Profundidade",
    contexto: "Uma organização implementa várias camadas de controle de segurança para proteger seus ativos.",
    enunciado: "O conceito de 'defesa em profundidade' (defense in depth) significa que:",
    alternativas: [
      { letra: "A", texto: "Apenas um controle de segurança é necessário." },
      { letra: "B", texto: "Várias camadas de defesa são implementadas para compensar falhas de controle." },
      { letra: "C", texto: "Todas as defesas são centralizadas em um único firewall." },
      { letra: "D", texto: "Segurança é ignorada quando outros controles estão presentes." },
      { letra: "E", texto: "O antivírus é o único controle necessário." }
    ],
    gabarito: "B",
    justificativa: "Defesa em profundidade adota múltiplas camadas de controle para garantir que se uma falhar, outras ainda protejam o ativo. Apenas um controle é insuficiente (alternativa A incorreta); a centralização em um único firewall é uma fraqueza — defesa em profundidade requer múltiplas camadas (alternativa C incorreta); segurança não é ignorada — é reforçada (alternativa D incorreta); o antivírus é apenas uma camada, não o único controle (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Defesa em profundidade requer múltiplas camadas.",
      B: "CORRETA. Múltiplas camadas compensam falhas de controle em cascata.",
      C: "INCORRETA. Centralização em um único firewall é um único ponto de falha.",
      D: "INCORRETA. Segurança é reforçada, não ignorada.",
      E: "INCORRETA. Antivírus é uma camada, não o único controle de segurança."
    },
    regra: "Defesa em profundidade = 'múltiplas camadas, sem confiar em uma só'.",
    pegadinha: "Não basta um firewall — defesa em profundidade exige camadas de segurança diversas.",
    fonte: "NIST SP 800-115 (Technical Guide to Information Security Testing and Assessment)."
  },

  { id: "q-m4-19", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.2 — Monitoramento e registros",
    contexto: "Um departamento de TI implementa um sistema de monitoramento de logs.",
    enunciado: "A importância do monitoramento e dos logs (registros) na segurança da informação é:",
    alternativas: [
      { letra: "A", texto: "Permitir o acesso irrestrito a todos os sistemas." },
      { letra: "B", texto: "Fornecer audibilidade, detecção de incidentes e análise forense." },
      { letra: "C", texto: "Não ter valor na detecção de ameaças." },
      { letra: "D", texto: "Substituir a necessidade de backups." },
      { letra: "E", texto: "Criptografar todos os dados automaticamente." }
    ],
    gabarito: "B",
    justificativa: "Logs e monitoramento são essenciais para auditoria, detecção de incidentes, análise forense e conformidade. Permitir acesso irrestrito (alternativa A incorreta); não ter valor na detecção (alternativa C incorreta); não substituem backups (alternativa D incorreta); nem criptografam dados automaticamente (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Logs são usados para auditoria, não para acesso irrestrito.",
      B: "CORRETA. Monitoramento e logs são a base da auditoria, detecção e análise forense.",
      C: "INCORRETA. Logs são fundamentais para detecção e análise de incidentes.",
      D: "INCORRETA. Logs não substituem backups — são informações demográficas, não cópias.",
      E: "INCORRETA. Log monitoring não criptografa dados automaticamente."
    },
    regra: "Logs = 'memória do sistema'. São essenciais para auditoria, detecção e resposta.",
    pegadinha: "Monitoramento de logs não é 'visualização de dados' — é 'gravação e análise de eventos'.",
    fonte: "NIST SP 800-92 (Guide to Computer Security Log Management), 2007."
  },

  { id: "q-m4-20", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.2 — Controle de acesso",
    contexto: "Uma agência pública adota políticas de controle de acesso aos sistemas e dados.",
    enunciado: "A política de controle de acesso baseada no menor privilégio garante que:",
    alternativas: [
      { letra: "A", texto: "Qualquer usuário pode acessar qualquer recurso." },
      { letra: "B", texto: "Usuários recebem apenas os direitos necessários para suas funções." },
      { letra: "C", texto: "Acesso é concedido com base no cargo e não na necessidade funcional." },
      { letra: "D", texto: "Todos os administradores recebem privilégios ilimitados." }
    ],
    gabarito: "B",
    justificativa: "Menor privilégio: conceder ao usuário apenas os privilégios necessários para sua função. Ninguém é 'qualquer um' (alternativa A incorreta); o acesso é baseado na necessidade de saber e função, não apenas no cargo (alternativa C incorreta); administradores também seguem a mínimação, com privilégios quando necessário (alternativa D incorreta).",
    analise: {
      A: "INCORRETA. Controle de acesso exige restrição, não acesso irrestrito.",
      B: "CORRETA. O menor privilégio atribui apenas o necessário para cada função.",
      C: "INCORRETA. Acesso deve basear-se na necessidade e no papel, não apenas no cargo.",
      D: "INCORRETA. Administradores também seguem o princípio do menor privilégio."
    },
    regra: "Menor privilégio = 'só o necessário para a função' — não mais, não menos.",
    pegadinha: "Menor privilégio é 'quanto é necessário' — não leva em conta 'o que ele quer'.",
    fonte: "NIST SP 800-53 (AC-2, AC-3, AC-6: Least Privilege)."
  },

  /* ===================== 4.3 Ameaças e Ataques (10 questões) ===================== */

  { id: "q-m4-21", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m4-u3-t1-s1", assunto: "4.3 — Phishing",
    contexto: "Um usuário recebe uma mensagem de e-mail que imita uma instituição financeira.",
    enunciado: "O 'phishing' é um ataque que se caracteriza por:",
    alternativas: [
      { letra: "A", texto: "Criptografar os dados do usuário." },
      { letra: "B", texto: "Tentar induzir o usuário a fornecer informações confidenciais." },
      { letra: "C", texto: "Aumentar a velocidade de rede." },
      { letra: "D", texto: "Melhorar a segurança da autenticação." },
      { letra: "E", texto: "Estudar a segurança do sistema." }
    ],
    gabarito: "B",
    justificativa: "Phishing é um tipo de engenharia social onde o atacante imita uma entidade legítima para induzir o usuário a divulgar informações confidenciais (senhas, dados bancários). Criptografia não é phishing (alternativa A incorreta); aumento de velocidade não está relacionado (alternativa C incorreta); melhoria de segurança é oposta ao objetivo do ataque (alternativa D incorreta); 'estudar a segurança' é vago e incorreto (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Criptografia é uma técnica de proteção, não um objetivo do phishing.",
      B: "CORRETA. Phishing é induzir o usuário a fornecer informações confidenciais por engano.",
      C: "INCORRETA. Phishing não tem relação com velocidade de rede.",
      D: "INCORRETA. Phishing visa substituir métodos seguros por engano, não melhorar a segurança.",
      E: "INCORRETA. Estudar a segurança é uma atividade de defesa, não de ataque."
    },
    regra: "Phishing = 'pegar' — imitar quem confiável para roubar credenciais ou dados.",
    pegadinha: "Phishing é 'enganação' — o atacante simula uma entidade confiável para induzir a ação.",
    fonte: "APWG (Anti-Phishing Working Group) — Phishing Activity Trends Report, 2022."
  },

  { id: "q-m4-22", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m4-u3-t1-s2", assunto: "4.3 — Pharming",
    contexto: "Um atacante redireciona um domínio de um site legítimo para um site falso.",
    enunciado: "O 'pharming' é um ataque que:",
    alternativas: [
      { letra: "A", texto: "Oferece uma página de login legítima." },
      { letra: "B", texto: "Redireciona o acesso a um domínio de um site legítimo para um site falso." },
      { letra: "C", texto: "Melhora o desempenho de DNS." },
      { letra: "D", texto: "Bloqueia e-mails spam." },
      { letra: "E", texto: "Gera tráfego de rede para testes." }
    ],
    gabarito: "B",
    justificativa: "Pharming redireciona tecnicamente o acesso a um domínio para um site falso (invadindo DNS ou arquitetura do host). Diferente de phishing, que engana o usuário (alternativa A incorreta); não melhora o DNS (alternativa C incorreta); não bloqueia spam (alternativa D incorreta); não gera tráfego para testes (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Pharming redireciona para um site falso, não legítimo.",
      B: "CORRETA. Pharming redireciona o tráfego de um domínio legítimo para um site falso.",
      C: "INCORRETA. Pharming não melhora o desempenho de DNS.",
      D: "INCORRETA. Bloqueio de spam é uma função de filtro, não do pharming.",
      E: "INCORRETA. Geração de tráfego para testes não é pharming."
    },
    regra: "Pharming = 'redirecionar' — muda o DNS/roteamento para forçar acesso a site falso.",
    pegadinha: "Pharming é 'forçado' — o usuário não precisa ser enganado; o tráfego é redirecionado.",
    fonte: "MITRE ATT&CK — T1557 (Man-in-the-Middle), sub-technique T1557.001.",
  },

  { id: "q-m4-23", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m4-u3-t1-s3", assunto: "4.3 — Engenharia Social",
    contexto: "Um atacante se identifica como um técnico de suporte para obter acesso.",
    enunciado: "A 'engenharia social' em segurança da informação refere-se a:",
    alternativas: [
      { letra: "A", texto: "Técnicas de criptografia de dados." },
      { letra: "B", texto: "A manipulação psicológica de pessoas para obter acesso ou informações." },
      { letra: "C", texto: "A implementação de firewalls." },
      { letra: "D", texto: "O uso de antivírus." },
      { letra: "E", texto: "A configuração de roteadores." }
    ],
    gabarito: "B",
    justificativa: "Engenharia social é o processo de manipulação psicológica de pessoas para obter acesso a sistemas, informações ou ações, aproveitando a confiança, a autoridade ou a urgência. Técnicas de criptografia são técnicas de proteção (alternativa A incorreta); firewalls são defensivos (alternativa C incorreta); antivírus são ferramentas defensivas (alternativa D incorreta); configuração de roteadores é um procedimento técnico (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Engenharia social é uma técnica de manipulação social, não de criptografia.",
      B: "CORRETA. Engenharia social explora a psicologia humana para obter acesso ou informações.",
      C: "INCORRETA. Firewall é uma defesa, não um ataque de engenharia social.",
      D: "INCORRETA. Antivírus é uma ferramenta defensiva, não um ataque.",
      E: "INCORRETA. Configuração de roteadores é uma atividade de administração de rede."
    },
    regra: "Engenharia social = 'estupidez tecnológica'. Explora a psicologia humana para obter o que se quer.",
    pegadinha: "Engenharia social não é 'engenharia inversa' — é 'manipulação de pessoas'.",
    fonte: "NIST SP 800-115 (Technical Guide to Information Security Testing and Assessment)."
  },

  { id: "q-m4-24", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Força Bruta e Password Spraying",
    contexto: "Um atacante tenta adivinhar senhas de contas de usuários.",
    enunciado: "A 'força bruta' em criptografia é uma técnica de:",
    alternativas: [
      { letra: "A", texto: "Que garante a segurança de uma senha." },
      { letra: "B", texto: "Que testa todas as combinações possíveis de caracteres até encontrar a senha." },
      { letra: "C", texto: "Que criptografa dados de forma mais segura." },
      { letra: "D", texto: "De autenticação sem senha." },
      { letra: "E", texto: "De limpeza de dados." }
    ],
    gabarito: "B",
    justificativa: "Força bruta é uma técnica de quebra de senhas/criptografia que testa sistematicamente todas as combinações possíveis até achar a correta. Garante segurança? Não (alternativa A incorreta); criptografa mais segura? Inversamente, enfraquece (alternativa C incorreta); autenticação sem senha é a autenticação MFA ou biométrica (alternativa D incorreta); limpeza de dados não se aplica (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Força bruta é uma técnica de quebra, não de segurança.",
      B: "CORRETA. Força bruta testa todas as combinações até encontrar a chave/senha.",
      C: "INCORRETA. Força bruta não criptografa mais segura — enfraquece a segurança.",
      D: "INCORRETA. Autenticação sem senha é uma alternativa, não a força bruta.",
      E: "INCORRETA. Limpeza de dados não é uma definição de força bruta."
    },
    regra: "Força bruta = 'tentar todas as senhas possíveis' — 'adivinhar tudo'.",
    pegadinha: "Força bruta não é 'quebrar' — é 'tentar todas as opções' até acertar.",
    fonte: "Offensive Security — Brute Force Attacks, 2021."
  },

  { id: "q-m4-25", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Ataque de “Man-in-the-Middle” (MitM)",
    contexto: "Dois sistemas se comunicam, e um atacante intercepta e maliciosamente modifica as mensagens.",
    enunciado: "O ataque de 'Man-in-the-Middle' (MitM) consiste em:",
    alternativas: [
      { letra: "A", texto: "Autenticar duas partes legítimas." },
      { letra: "B", texto: "Um atacante se posicionando entre as duas partes, interceptando e modificando a comunicação." },
      { letra: "C", texto: "Criptografar a comunicação entre as partes." },
      { letra: "D", texto: "Melhorar a velocidade de rede." },
      { letra: "E", texto: "Proteger os dados contra interceptação." }
    ],
    gabarito: "B",
    justificativa: "MitM é um ataque onde o invasor coloca-se entre duas partes que estão se comunicando, podendo interceptar e/ou modificar mensagens. Autenticar partes legítimas é uma função de rede segura (alternativa A incorreta); criptografar é uma defesa, não um ataque MitM (alternativa C incorreta); melhorar velocidade de rede não está relacionado (alternativa D incorreta); proteger contra interceptação é o oposto (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. MitM não autentica partes legítimas — ele se passa por intermediário.",
      B: "CORRETA. MitM é a posse do canal de comunicação, permitindo interceptação e modificação.",
      C: "INCORRETA. Criptografia dificulta MitM, não é um ataque.",
      D: "INCORRETA. MitM não melhora velocidade — além disso, pode degradar.",
      E: "INCORRETA. MitM é uma forma de interceptação, não proteção."
    },
    regra: "MitM = 'porta do diabo'. O atacante se torna o 'meio' entre duas partes.",
    pegadinha: "MitM não é 'proteção' — é 'intercepção' de comunicação entre duas partes.",
    fonte: "NIST SP 800-53 (SC-7: Boundary Protection)."
  },

  { id: "q-m4-26", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Ataque de negação de serviço (DoS/DDoS)",
    contexto: "Uma organização é alvo de um ataque de negação de serviço.",
    enunciado: "Sobre o ataque de negação de serviço (DoS) e DDoS, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "O objetivo é melhorar a disponibilidade do serviço." },
      { letra: "B", texto: "O objetivo é travar ou inutilizar um sistema, impedindo o acesso legítimo." },
      { letra: "C", texto: "O ataque não gera impacto mensurável." },
      { letra: "D", texto: "O ataque é injusto e deve ser ignorado." },
      { letra: "E", texto: "O ataque não pode ser detectado." }
    ],
    gabarito: "B",
    justificativa: "DoS/DDoS buscam travar ou inutilizar um serviço, impedindo o acesso legítimo a ele. O objetivo é derrubar a disponibilidade, não melhorar (alternativa A incorreta); o impacto é claramente mensurável (queda de tráfego, indisponibilidade, perda de receita — alternativa C incorreta); o ataque é ilegal e deve ser reportado e mitigado — ignorar é negligência (alternativa D incorreta); o ataque é detectável por anomalias no tráfego (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. O objetivo é reduzir a disponibilidade, não melhorar.",
      B: "CORRETA. DoS/DDoS travar um sistema ou rede, impedindo o acesso legítimo.",
      C: "INCORRETA. O impacto para o alvo é drástico — indisponibilidade e perdas financeiras.",
      D: "INCORRETA. O ataque deve ser reportado e mitigado, não ignorado.",
      E: "INCORRETA. O ataque é detectável por análise de tráfego anômalo."
    },
    regra: "DoS/DDoS = 'tirar a internet do ar'. Infinitar tráfego injustamente para travar o serviço.",
    pegadinha: "Não confundir: DoS é um ataque; 'DoS' em inglês também é 'serviço de negócios' — mas no contexto é ataque.",
    fonte: "Cisco — Understanding Denial of Service Attacks, 2020."
  },

  { id: "q-m4-27", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Vazamento de dados",
    contexto: "Ágencia pública expõe dados de cidadãos por falha de configuração.",
    enunciado: "O 'vazamento de dados' (data breach) ocorre quando:",
    alternativas: [
      { letra: "A", texto: "Os dados são acessados ou divulgados de forma não autorizada." },
      { letra: "B", texto: "Os dados são criptografados com segurança." },
      { letra: "C", texto: "Os dados são armazenados emBackups." },
      { letra: "D", texto: "Os dados são consolidados em relatórios." },
      { letra: "E", texto: "Os dados são validados numericamente." }
    ],
    gabarito: "A",
    justificativa: "Vazamento de dados é o acesso, divulgação ou exposição não autorizada de informações sensíveis. Criptografia é uma proteção (alternativa B incorreta); backups são cópias de segurança (alternativa C incorreta); consolidação em relatórios não é vazamento (alternativa D incorreta); validação numérica não é vazamento (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Data breach ocorre quando dados são acessados ou divulgados sem autorização.",
      B: "INCORRETA. Criptografia protege contra vazamento, não é um vazamento em si.",
      C: "INCORRETA. Backup é uma cópia de segurança, não um vazamento.",
      D: "INCORRETA. Consolidação em relatórios não é vazamento de dados.",
      E: "INCORRETA. Validação numérica não envolve vazamento."
    },
    regra: "Data breach = 'dados fora do controle'. Exposição não autorizada de informações sensíveis.",
    pegadinha: "Vazamento de dados não é 'erro de edição' — é 'acesso não autorizado'.",
    fonte: "ANPD — Relatório de Incidentes de Vazamento, 2022."
  },

  { id: "q-m4-28", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Ataque de intermediário (Man-in-the-Middle) — telefonia",
    contexto: "Em uma comunicação entre dois sistemas, um atacante consegue interceptar e modificar as mensagens:",
    enunciado: "Em um ataque MitM no contexto de comunicação de dados, o atacante:",
    alternativas: [
      { letra: "A", texto: "Permite que os dois sistemas se comuniquem diretamente." },
      { letra: "B", texto: "Estabelece uma ponte entre eles, intercetando e modificar mensagens." },
      { letra: "C", texto: "Aumenta a velocidade da comunicação." },
      { letra: "D", texto: "Bloqueia todas as mensagens permanentemente." },
      { letra: "E", texto: "Substitui a criptografia pela autenticação." }
    ],
    gabarito: "B",
    justificativa: "MitM no contexto de comunicação de dados é entender a ponte entre duas partes, permitindo interceptar e potencialmente modificar as mensagens. Permite comunicação direta? Não (alternativa A incorreta); aumentar velocidade? Não (alternativa C incorreta); bloquear permanentemente todas as mensagens não é MitM (alternativa D incorreta); substituir criptografia pela autenticação não é MitM (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. MitM interrompe a comunicação direta entre as partes.",
      B: "CORRETA. MitM age como 'meio' intermediário, interceptando e modificando mensagens.",
      C: "INCORRETA. MitM não melhora a velocidade da comunicação.",
      D: "INCORRETA. Bloqueio permanente de todas as mensagens é um ataque de negação de serviço, não MitM.",
      E: "INCORRETA. MitM não substitui criptografia pela autenticação — ele sabotagem o processo."
    },
    regra: "MitM = 'meio entre dois'. A comunicação é vista e manipulada por um terceiro.",
    pegadinha: "MitM não é 'seção' — é 'intercepção ativa' da comunicação entre dois lados.",
    fonte: "Cyber threats — MITM attacks and prevention, 2022."
  },

  { id: "q-m4-29", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.3 — Indicadores de Comprometimento (IoCs)",
    contexto: "Um analista de segurança identifica indicadores de que um sistema foi comprometido.",
    enunciado: "Indicadores de Comprometimento (Indicators of Compromise, IoC) são:",
    alternativas: [
      { letra: "A", texto: "Métricas de desempenho de rede." },
      { letra: "B", texto: "Ferramentas de proteção anti-malware." },
      { letra: "C", texto: "Padrões ou evidências técnicas que sugerem um sistema foi comprometido." },
      { letra: "D", texto: "Protocolos de autenticação." },
      { letra: "E", texto: "Relatórios de audiência." }
    ],
    gabarito: "C",
    justificativa: "IoC são evidências técnicas (endereços IP, hash de arquivos, padrões de rede, comportamento incomum) que sugerem que um sistema foi comprometido. Métricas de desempenho (alternativa A incorreta); ferramentas de proteção são defesas, não indicadores (alternativa B incorreta); protocolos de autenticação são estruturas, não indicadores (alternativa D incorreta); relatórios de audiência são processos administrativos (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Desempenho de rede é métrica, não indicador de comprometimento.",
      B: "INCORRETA. Antivírus é uma defesa, não um indicador de comprometimento.",
      C: "CORRETA. IoC são padrões técnicos que indicam comprometimento de um sistema.",
      D: "INCORRETA. Autenticação é um processo de segurança, não indicador de comprometimento.",
      E: "INCORRETA. Relatório de audiência é processo administrativo."
    },
    regra: "IoC = 'pistas da invasão'. Evidências técnicas de que o sistema foi comprometido.",
    pegadinha: "IoC não é 'indicador de desempenho' — é 'indicador de invasão'.",
    fonte: "MITRE ATT&CK — Detection and Response, 2022."
  },

  { id: "q-m4-30", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.3 — Ataque de “Man-in-the-Middle” — Redes",
    contexto: "No contexto de redes, um ataque MitM ocorre quando um atacante intercepta a comunicação entre dois hosts:",
    enunciado: "O ataque MitM no contexto de redes",
    alternativas: [
      { letra: "A", texto: "Permite a comunicação direta e segura entre dois hosts." },
      { letra: "B", texto: "O atacante intercepta e maliciosamente modifica as mensagens entre os dois hosts." },
      { letra: "C", texto: "Criptografa a comunicação entre dois hosts." },
      { letra: "D", texto: "Elimina a necessidade de criptografia." },
      { letra: "E", texto: "Betters a segurança da comunicação." }
    ],
    gabarito: "B",
    justificativa: "MitM no contexto de redes é quando o atacante intercepta e modifica passivamente as mensagens entre dois hosts. Permitir comunicação direta e segura (alternativa A incorreta); criptografar (alternativa C incorreta); eliminar necessidade de criptografia (alternativa D incorreta); melhorar segurança (alternativa E incorreta) não são definições de MitM.",
    analise: {
      A: "INCORRETA. MitM não permite comunicação direta e segura — ele intercepta a comunicação.",
      B: "CORRETA. MitM é a intercepção maliciosa e modificação de mensagens entre dois hosts.",
      C: "INCORRETA. Criptografia é uma defesa, não um ataque MitM.",
      D: "INCORRETA. MitM não elimina a necessidade de criptografia — ele a contorna.",
      E: "INCORRETA. MitM não betters a segurança — ele a compromete."
    },
    regra: "MitM = 'troca de papéis'. A comunicação entre dois hosts é enganada e controlada por um atacante.",
    pegadinha: "No MitM, o atacante não está 'do outro lado' — está 'no meio' entre eles.",
    fonte: "MITRE ATT&CK — T1557 (Man-in-the-Middle), 2022."
  },

  /* ===================== 4.4 Legislação (10 questões) ===================== */

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
    fonte: "Lei nº 13.709/2018, arts. 55-A e 55-J, com redação dada pela Lei nº 15.352/2026."
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
    fonte: "Lei nº 13.709/2018, art. 18, especialmente incisos II a VI e IX."
  },

  { id: "q-m4-36", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — LGPD e Órgãos Competentes",
    contexto: "A LGPD atribui à ANPD competências para zelar pela proteção de dados pessoais e fiscalizar o cumprimento da lei, inclusive em operações realizadas pelo Poder Público.",
    enunciado: "Qual entidade possui competência legal para zelar pela proteção de dados pessoais e fiscalizar o cumprimento da LGPD, inclusive no setor público?",
    alternativas: [
      { letra: "A", texto: "Ministério Público." },
      { letra: "B", texto: "Agência Nacional de Proteção de Dados (ANPD)." },
      { letra: "C", texto: "Polícia Federal." },
      { letra: "D", texto: "Justiça Federal." },
      { letra: "E", texto: "Superintendência de Tecnologia da Informação." }
    ],
    gabarito: "B",
    justificativa: "A Agência Nacional de Proteção de Dados (ANPD) tem competência legal para zelar pela proteção de dados, fiscalizar tratamentos em desconformidade e solicitar informações a entidades públicas. A base institucional está nos arts. 55-A e 55-J da LGPD, com redação dada pela Lei nº 15.352/2026. Ministério Público, Polícia Federal e Justiça Federal têm atribuições distintas; uma superintendência de TI não substitui a autoridade nacional de proteção de dados.",
    analise: {
      A: "INCORRETA. Ministério Público pode agir em âmbito criminal, mas não é o órgão de monitoramento da LGPD.",
      B: "CORRETA. A ANPD possui competências legais de fiscalização, inclusive em relação a tratamentos realizados pelo Poder Público.",
      C: "INCORRETA. Polícia Federal não é o órgão regulador da LGPD.",
      D: "INCORRETA. Justiça Federal atua em casos de infração, não no monitoramento sistemático.",
      E: "INCORRETA. Superintendências de TI são órgãos administrativos, não reguladores."
    },
    regra: "A ANPD zela pela proteção de dados e fiscaliza o cumprimento da LGPD; também possui competências específicas relativas ao tratamento realizado pelo Poder Público.",
    pegadinha: "Não confundir a fiscalização administrativa da LGPD pela ANPD com competências judiciais, criminais ou de controle interno.",
    fonte: "Lei nº 13.709/2018, art. 55-A e art. 55-J, IV, XI e XVI, com redação vigente em 25/10/2026."
  },

  { id: "q-m4-37", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-1", assunto: "4.4 — LGPD — Incisos do Art. 5º",
    contexto: "A Constituição protege a intimidade e a vida privada; após a Emenda Constitucional nº 115/2022, o art. 5º, LXXIX, reconhece expressamente o direito fundamental à proteção dos dados pessoais.",
    enunciado: "A relação correta entre a CF/88 e a LGPD em relação aos dados pessoais é:",
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
    fonte: "Constituição Federal, art. 5º, X e LXXIX; Emenda Constitucional nº 115/2022; Lei nº 13.709/2018, art. 1º."
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
    nivel: "avancado", topico: "modulo-4-unidade-4-topico-2", assunto: "4.4 — Marco Civil e LGPD",
    contexto: "Múltiplas leis federais regulam a proteção de dados e a internet no Brasil.",
    enunciado: "A relação entre Marco Civil da Internet e a LGPD no contexto da proteção de dados é:",
    alternativas: [
      { letra: "A", texto: "A LGPD substitui o Marco Civil da Internet." },
      { letra: "B", texto: "O Marco Civil e a LGPD são complementares, conectados por princípios e competências." },
      { letra: "C", texto: "O Marco Civil dispensa a LGPD." },
      { letra: "D", texto: "O Marco Civil não tem relação com dados pessoais." },
      { letra: "E", texto: "A LGPD é irrelevante para o Marco Civil." }
    ],
    gabarito: "B",
    justificativa: "O Marco Civil da Internet (Lei nº 12.965/2014) estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil, incluindo garantias relacionadas à privacidade. A LGPD (Lei nº 13.709/2018) disciplina o tratamento de dados pessoais. As normas são complementares; nenhuma substitui ou dispensa a outra.",
    analise: {
      A: "INCORRETA. A LGPD complementa o Marco Civil e a Lei 12.965/2014; não substitui.",
      B: "CORRETA. O Marco Civil disciplina o uso da internet; a LGPD disciplina o tratamento de dados pessoais. As normas têm campos complementares.",
      C: "INCORRETA. O Marco Civil não dispensa a LGPD — ambas têm âmbitos complementares.",
      D: "INCORRETA. O Marco Civil trata de dados pessoais no contexto da internet.",
      E: "INCORRETA. A LGPD é relevante para a proteção de dados no âmbito do Marco Civil."
    },
    regra: "Marco Civil: princípios, garantias, direitos e deveres para o uso da internet. LGPD: regras para o tratamento de dados pessoais. As normas são complementares.",
    pegadinha: "Não reduzir o Marco Civil a uma lei sobre dados públicos: ele disciplina o uso da internet e contém garantias relacionadas à privacidade.",
    fonte: "Lei nº 12.965/2014; Lei nº 13.709/2018."
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
    fonte: "Lei nº 12.527/2011, arts. 3º, I, 6º, III, e 7º."
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
    fonte: "Lei nº 13.709/2018, art. 5º, V a VII, art. 42 e art. 55-J."
  },

  { id: "q-m4-44", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-4-topico-2", assunto: "4.4 — Comparação LGPD e Marco Civil",
    contexto: "É possível observar diferenças conceituais entre LGPD e Marco Civil.",
    enunciado: "A principal diferença conceitual entre LGPD e Marco Civil da Internet está em:",
    alternativas: [
      { letra: "A", texto: "Ambas tratam de dados pessoais." },
      { letra: "B", texto: "A LGPD prioriza a proteção de dados pessoais; o Marco Civil prioriza a liberdade e a regulação da internet." },
      { letra: "C", texto: "A LGPD não protege dados." },
      { letra: "D", texto: "O Marco Civil é obsoleto." },
      { letra: "E", texto: "A LGPD é irrelevante." }
    ],
    gabarito: "B",
    justificativa: "A LGPD é a lei que protege dados pessoais com base nos direitos dos titulares; o Marco Civil (12.965/2014) regula a internet no Brasil, com princípios como a garantia da liberdade de expressão, a proteção da privacidade e a neutralidade de rede (art. 3º) e fundamentos como a pluralidade e a diversidade (art. 2º). Ambas tratam de dados (alternativa A incorreta); a LGPD é fundamentada nos direitos da pessoa, o Marco Civil na regulação da internet; a LGPD não é irrelevante (alternativa E incorreta); o Marco Civil não é obsoleto (alternativa D incorreta).",
    analise: {
      A: "INCORRETA. Ambas tratam de dados pessoais, mas com abrangências diferentes.",
      B: "CORRETA. LGPD protege dados pessoais; Marco Civil regula a internet e seus princípios.",
      C: "INCORRETA. A LGPD é a lei que protege dados pessoais.",
      D: "INCORRETA. O Marco Civil não é obsoleto — é a lei da internet no Brasil.",
      E: "INCORRETA. A LGPD é relevante para a proteção de dados no contexto de internet."
    },
    regra: "LGPD = 'dados protegidos'. Marco Civil = 'internet regulada'. Complementares.",
    pegadinha: "LGPD não é 'direito de acesso' — é 'direito de controle'. Marco Civil não é 'obsoleto' — é a lei da internet.",
    fonte: "Lei nº 13.709/2018; Lei nº 12.965/2014, arts. 2º e 3º — verificado em planalto.gov.br em 2026-10-22."
  },

  { id: "q-m4-45", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-1", assunto: "4.4 — Confidencialidade",
    contexto: "A confidencialidade é um princípio fundamental de segurança da informação.",
    enunciado: "A confidencialidade estrita é:",
    alternativas: [
      { letra: "A", texto: "Um princípio que garante que a informação só pode ser acessada por usuários autorizados." },
      { letra: "B", texto: "Um princípio que garante acesso a todos os sistemas." },
      { letra: "C", texto: "Um princípio de liberdade de informação." },
      { letra: "D", texto: "Um princípio de abertura de dados." },
      { letra: "E", texto: "Um princípio de não criptografia." }
    ],
    gabarito: "A",
    justificativa: "Confidencialidade é o princípio que assegura que a informação só possa ser acessada por usuários ou sistemas autorizados. É a definição correta do princípio de confidencialidade (alternativa A correta). Garantir acesso a todos os sistemas (alternativa B incorreta); princípio de liberdade de informação (alternativa C incorreta); abertura de dados (alternativa D incorreta); não criptografia (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Confidencialidade = acesso restrito a usuários autorizados.",
      B: "INCORRETA. Acesso a todos os sistemas é o oposto do princípio de confidencialidade.",
      C: "INCORRETA. Confidencialidade não é princípio de liberdade de informação.",
      D: "INCORRETA. Abertura de dados é o oposto do princípio de confidencialidade.",
      E: "INCORRETA. A confidencialidade pode ser garantida por criptografia."
    },
    regra: "Confidencialidade = acesso à informação restrito a quem tem autorização.",
    pegadinha: "Confidencialidade não é 'direito de acesso' — é 'exclusão de acesso' a quem não tem autorização.",
    fonte: "NIST SP 800-53 (SC-5)."
  },

  { id: "q-m4-46", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-1", assunto: "4.4 — Integridade",
    contexto: "A integridade é um dos pilares da segurança da informação.",
    enunciado: "A integridade de dados significa que:",
    alternativas: [
      { letra: "A", texto: "Os dados estão disponíveis a qualquer usuário." },
      { letra: "B", texto: "Os dados não foram alterados de forma não autorizada." },
      { letra: "C", texto: "Os dados são acessíveis a todos com chave." },
      { letra: "D", texto: "Os dados nunca são armazenados." },
      { letra: "E", texto: "Os dados são apenas para leitura." }
    ],
    gabarito: "B",
    justificativa: "Integridade garante que os dados não foram alterados de forma não autorizada — preservando a exatidão e a confiabilidade da informação. Disponibilidade (alternativa A incorreta); acesso a todos (alternativa C incorreta); armazenamento (alternativa D incorreta); apenas leitura (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Disponibilidade é outro dos pilares, não a definição de integridade.",
      B: "CORRETA. Integridade = preservação da exatidão dos dados, sem alteração não autorizada.",
      C: "INCORRETA. Acesso a todos não é integridade — é confidencialidade invertida.",
      D: "INCORRETA. Armazenamento não é o foco da integridade.",
      E: "INCORRETA. Somente leitura não garante integridade — alteração não autorizada seria o problema."
    },
    regra: "Integridade = 'dados corretos e intactos'. Preservação da exatidão.",
    pegadinha: "Integridade não é 'sempre correto' — é 'sem alteração não autorizada'.",
    fonte: "ISO/IEC 27000:2018."
  },

  { id: "q-m4-47", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-1", assunto: "4.4 — Disponibilidade",
    contexto: "A disponibilidade é a garantia de acesso quando necessário.",
    enunciado: "A disponibilidade de sistemas e dados significa que:",
    alternativas: [
      { letra: "A", texto: "Os dados estão sempre online." },
      { letra: "B", texto: "Os sistemas e dados estão acessíveis quando o uso for necessário." },
      { letra: "C", texto: "Os dados nunca são acessados." },
      { letra: "D", texto: "Os sistemas são sempre desativados." },
      { letra: "E", texto: "Os dados são exclusivamente para leitura." }
    ],
    gabarito: "B",
    justificativa: "Disponibilidade significa que sistemas e dados estão operacionais e acessíveis quando o usuário precisa acessá-los. Sempre online (alternativa A incorreta); nunca acessados (alternativa C incorreta); sempre desativados (alternativa D incorreta); exclusivamente para leitura (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. 'Sempre online' não é a definição — é acessível 'quando necessário'.",
      B: "CORRETA. Disponibilidade = sistemas e dados acessíveis quando o uso for necessário.",
      C: "INCORRETA. Dados acessíveis quando needed, não 'nunca acessados'.",
      D: "INCORRETA. Sistemas sempre desativados é o oposto de disponibilidade.",
      E: "INCORRETA. Disponibilidade não se refere à leitura exclusiva."
    },
    regra: "Disponibilidade = 'quando você precisar'. Garantir que o sistema responda quando necessário.",
    pegadinha: "Disponibilidade não é 'sempre ativo' — é 'disponível quando needed'.",
    fonte: "NIST SP 800-53 (AVA-1)."
  },

  { id: "q-m4-48", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.4 — Autenticação",
    contexto: "A autenticação é o processo de verificação da identidade de um usuário ou sistema.",
    enunciado: "A autenticação é:",
    alternativas: [
      { letra: "A", texto: "O processo de autorizar o acesso a recursos." },
      { letra: "B", texto: "O processo de criptografar dados." },
      { letra: "C", texto: "O processo de verificar a identidade de um usuário ou sistema." },
      { letra: "D", texto: "O processo de excluir dados." },
      { letra: "E", texto: "O processo de criar dados." }
    ],
    gabarito: "C",
    justificativa: "Autenticação é o processo de verificar a identidade de um usuário ou sistema — saber 'quem é'. Autorização é um processo posterior (alternativa A incorreta); criptografia é proteção (alternativa B incorreta); exclusão (alternativa D incorreta); criação (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Autorização é o processo de conceder acesso — é posterior à autenticação.",
      B: "INCORRETA. Criptografia é uma técnica de proteção, não autenticação.",
      C: "CORRETA. Autenticação = verificar a identidade de um usuário ou sistema.",
      D: "INCORRETA. Exclusão é uma operação de gestão, não autenticação.",
      E: "INCORRETA. Criação de dados não é autenticação."
    },
    regra: "Autenticação = 'quem é?'. Verificar identidade antes de conceder acesso.",
    pegadinha: "Autenticação não é 'quem pode acessar' — é 'quem é' (anterior à autorização).",
    fonte: "NIST SP 800-63B."
  },

  { id: "q-m4-49", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.4 — Autorização",
    contexto: "A autorização é o processo de conceder ou recusar acesso a recursos.",
    enunciado: "A autorização é:",
    alternativas: [
      { letra: "A", texto: "Processo de verificar a identidade de um usuário." },
      { letra: "B", texto: "Processo de conceder ou recusar o acesso a recursos baseado em permissões." },
      { letra: "C", texto: "Processo de criptografia de dados." },
      { letra: "D", texto: "Processo de exclusão de dados." },
      { letra: "E", texto: "Processo de geração de senhas." }
    ],
    gabarito: "B",
    justificativa: "Autorização é o processo de conceder ou recusar acesso a recursos, baseado em permissões, roles e políticas de segurança. Verificar identidade (alternativa A incorreta); criptografar (alternativa C incorreta); excluir (alternativa D incorreta); gerar senhas (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Verificar identidade é autenticação, não autorização.",
      B: "CORRETA. Autorização = conceder ou recusar acesso baseado em permissões.",
      C: "INCORRETA. Criptografia é proteção de dados, não autorização.",
      D: "INCORRETA. Exclusão é gestão de dados, não autorização.",
      E: "INCORRETA. Geração de senhas é gestão de credenciais, não autorização."
    },
    regra: "Autorização = 'quem pode usar o que'. Conceder/recusar acesso com base em regras.",
    pegadinha: "Autorização não é 'ver quem está' — é 'conceder ou recusar acesso'.",
    fonte: "NIST SP 800-53 (AC-3)."
  },

  { id: "q-m4-50", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.4 — Auditoria",
    contexto: "A auditoria é o processo de monitoramento e registro de ações em sistemas.",
    enunciado: "A auditoria em segurança da informação é:",
    alternativas: [
      { letra: "A", texto: "O processo de excluir Logs." },
      { letra: "B", texto: "O processo de criptografar acesso." },
      { letra: "C", texto: "O processo de monitorar e registrar ações para auditoria e análise." },
      { letra: "D", texto: "O processo de impedir acesso." },
      { letra: "E", texto: "O processo de evitar relatórios." }
    ],
    gabarito: "C",
    justificativa: "Auditoria é o processo de monitorar, registrar e analisar ações de sistemas e usuários — essencial para detecção, investigação e conformidade. Excluir Logs (alternativa A incorreta); criptografar acesso (alternativa B incorreta); impedir acesso (alternativa D incorreta); evitar relatórios (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Auditoria requer Logs; excluí-los compromete a auditoria.",
      B: "INCORRETA. Criptografia não é auditoria.",
      C: "CORRETA. Auditoria = monitorar e registrar ações, para análise e conformidade.",
      D: "INCORRETA. Auditoria não impede acesso — é monitoramento pós-fato.",
      E: "INCORRETA. Auditoria gera relatórios para análise."
    },
    regra: "Auditoria = 'olhar o que aconteceu'. Monitoramento, registro e análise de ações.",
    pegadinha: "Auditoria não é 'impedir' — é 'registrar e analisar depois'.",
    fonte: "NIST SP 800-53 (AU-2)."
  },

  { id: "q-m4-51", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.4 — Backup",
    contexto: "O backup é uma cópia de segurança de dados e sistemas.",
    enunciado: "O backup é:",
    alternativas: [
      { letra: "A", texto: "Um processo de restauração de sistemas a partir de uma cópia de segurança." },
      { letra: "B", texto: "Um processo de criação de uma cópia de segurança dos dados." },
      { letra: "C", texto: "Um processo de criptografia de dados." },
      { letra: "D", texto: "Um processo de exclusão de dados." },
      { letra: "E", texto: "Um processo de verificação de dados." }
    ],
    gabarito: "B",
    justificativa: "Backup é o processo de criar cópias de segurança de dados para proteção contra perda, corrupção ou destruição. Restauração (alternativa A incorreta); criptografia (alternativa C incorreta); exclusão (alternativa D incorreta); verificação (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Restauração é o uso do backup, não o backup em si.",
      B: "CORRETA. Backup = criar cópias de segurança dos dados.",
      C: "INCORRETA. Criptografia é proteção de dados, não backup.",
      D: "INCORRETA. Backup não é exclusão — é cópia.",
      E: "INCORRETA. Verificação não é backup."
    },
    regra: "Backup = 'cópia para não perder'. Criação de cópia de segurança.",
    pegadinha: "Backup não é 'restaurar' — é 'fazer a cópia'. Restaurar é usar o backup.",
    fonte: "ITIL — Service Design; NIST SP 800-115."
  },

  { id: "q-m4-52", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.4 — Recuperação de Desastres",
    contexto: "A recuperação de desastres é o plano de resposta a incidentes que afetam sistemas críticos.",
    enunciado: "A recuperação de desastres é:",
    alternativas: [
      { letra: "A", texto: "Um processo de exclusão de dados." },
      { letra: "B", texto: "Um processo de criptografia de backups." },
      { letra: "C", texto: "Um plano para prever e responder a incidentes que ameçam a continuidade dos negócios." },
      { letra: "D", texto: "Um processo de verificação de desempenho." },
      { letra: "E", texto: "Um processo de criação de backups." }
    ],
    gabarito: "C",
    justificativa: "Recuperação de desastres é um plano que visa à continuidade dos negócios, incluindo a prevenção e resposta a incidentes que ameçam a operação dos sistemas críticos. Exclusão (alternativa A incorreta); criptografia (alternativa B incorreta); verificação de desempenho (alternativa D incorreta); criação de backups (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Recuperação de desastres não é exclusão de dados.",
      B: "INCORRETA. Criptografia não é a definição da recuperação de desastres.",
      C: "CORRETA. Recuperação de desastres = plano que garante continuidade e resposta a incidentes que ameaçam os negócios.",
      D: "INCORRETA. Desempenho não é o foco principal da recuperação de desastres.",
      E: "INCORRETA. Criação de backups é parte, mas não é a definição completa."
    },
    regra: "Recuperação de desastres = 'continuidade'. Plano para não parar os negócios com emergências.",
    pegadinha: "Recuperação de desastres não é 'backup simples' — é 'plano completo de continuidade'.",
    fonte: "NIST SP 800-34 (Contingency Planning)."
  },

  { id: "q-m4-53", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.4 — RTO e RPO",
    contexto: "RTO e RPO são métricas críticas para o planejamento de continuidade.",
    enunciado: "A relação correta entre RTO e RPO é:",
    alternativas: [
      { letra: "A", texto: "RTO é o tempo máximo de indisponibilidade; RPO é a quantidade máxima de dados que pode ser perdida." },
      { letra: "B", texto: "RTO é a quantidade de dados perdida; RPO é o tempo de indisponibilidade." },
      { letra: "C", texto: "RTO e RPO são sinônimos." },
      { letra: "D", texto: "RTO é o tempo de e RPO é a quantidade de dados — invertido." },
      { letra: "E", texto: "RTO é a contagem do tempo; RPO é a contagem dos dados." }
    ],
    gabarito: "A",
    justificativa: "RTO (Recovery Time Objective) = tempo máximo de indisponibilidade aceitável; RPO (Recovery Point Objective) = quantidade máxima de dados que pode ser perdida. A alternativa B inverte os conceitos; C é incorreta por definição; D está invertido; E confunde as métricas com contagens.",
    analise: {
      A: "CORRETA. RTO = tempo de indisponibilidade; RPO = quantidade de dados perdida.",
      B: "INCORRETA. RTO não é quantidade de dados — é tempo de indisponibilidade.",
      C: "INCORRETA. RTO e RPO são métricas distintas.",
      D: "INCORRETA. RTO e RPO não estão invertidos — A está correta.",
      E: "INCORRETA. RTO e RPO não são 'contagem do tempo' / 'contagem dos dados'."
    },
    regra: "RTO = 'quanto tempo'. RPO = 'quanto de dados'. Métricas para continuidade.",
    pegadinha: "RTO e RPO não são 'tanto quanto' — RTO é tempo, RPO é dados.",
    fonte: "ITIL v3 — Service Continuity Management."
  },

  { id: "q-m4-54", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.4 — Estratégia 3-2-1",
    contexto: "A estratégia 3-2-1 é amplamente recomendada para backup e recuperação.",
    enunciado: "A estratégia de backups 3-2-1 indica:",
    alternativas: [
      { letra: "A", texto: "3 cópias, 2 sistemas de armazenamento diferentes, 1 cópia offline ou fora do local." },
      { letra: "B", texto: "3 sistemas de armazenamento, 2 Backup, 1 cópia." },
      { letra: "C", texto: "3 backup, 2 sistemas, 1 offline." },
      { letra: "D", texto: "3 offline, 2 locales, 1 sistema." },
      { letra: "E", texto: "3 dados, 2 sistemas, 1 rede." }
    ],
    gabarito: "A",
    justificativa: "A estratégia 3-2-1: 3 cópias dos dados, 2 sistemas de armazenamento diferentes, 1 cópia offline ou fora do local (imutável). As demais alternativas distorcem a distribuição (alternativas B, C, D, E incorretas).",
    analise: {
      A: "CORRETA. 3 cópias, 2 sistemas de armazenamento, 1 para offline/fu licence.",
      B: "INCORRETA. A distribuição é 3-2-1 (cópias, sistemas, cópia offline).",
      C: "INCORRETA. Não é 3 backup, 2 sistemas, 1 offline.",
      D: "INCORRETA. Não é 3 offline, 2 locales, 1 sistema.",
      E: "INCORRETA. Não é 3 dados, 2 sistemas, 1 rede."
    },
    regra: "3-2-1 = 3 cópias, 2 sistemas, 1 offline/fu license. Proteção contra perda e ransomware.",
    pegadinha: "O 1 final não é 'um backup' — é 'uma cópia offline ou fora do local'.",
    fonte: "Veeam Blog — 3-2-1 Backup Rule."
  },

  { id: "q-m4-55", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.4 — Criptografia Simétrica",
    contexto: "Criptografia simétrica é o método de criptografia mais antigo e eficiente.",
    enunciado: "A criptografia simétrica é caracterizada por:",
    alternativas: [
      { letra: "A", texto: "Uso de um único par de chaves público/privada." },
      { letra: "B", texto: "Uso de uma única chave compartilhada para criptografar e descriptografar." },
      { letra: "C", texto: "Uso de chaves diferentes para cada usuário." },
      { letra: "D", texto: "Uso de quadros de criptografia." },
      { letra: "E", texto: "Uso de chaves infinitas." }
    ],
    gabarito: "B",
    justificativa: "Criptografia simétrica usa uma única chave compartilhada (secreta) para criptografar e descriptografar os dados. Uso de par público/privada (alternativa A incorreta); chaves diferentes para cada usuário (alternativa C incorreta); quadros (alternativa D incorreta); chaves infinitas (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Par público/privada é a criptografia assimétrica.",
      B: "CORRETA. Criptografia simétrica usa uma única chave compartilhada.",
      C: "INCORRETA. Chaves diferentes é a criptografia assimétrica.",
      D: "INCORRETA. Quadros não são o conceito central da criptografia simétrica.",
      E: "INCORRETA. Chaves finitas são usadas, não infinitas."
    },
    regra: "Simétrica = 'uma chave só'. Tudo que entra e sai com a mesma chave.",
    pegadinha: "Simétrica não é 'dois pares' — é 'uma única chave' compartilhada.",
    fonte: "NIST FIPS 197 (AES)."
  },

  { id: "q-m4-56", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.4 — Criptografia Assimétrica",
    contexto: "Criptografia assimétrica usa um par de chaves público/privada.",
    enunciado: "A criptografia assimétrica é caracterizada por:",
    alternativas: [
      { letra: "A", texto: "Uso de um único par de chaves público/privada para cada comunicação." },
      { letra: "B", texto: "Uso de uma chave única compartilhada." },
      { letra: "C", texto: "Uso de quadros de criptografia." },
      { letra: "D", texto: "Uso de chaves infinitas." },
      { letra: "E", texto: "Uso de chaves próprias para cada comunicação." }
    ],
    gabarito: "A",
    justificativa: "Criptografia assimétrica usa um par de chaves (pública e privada) — uma para criptografar, outra para descriptografar, ou uma para assinar, outra para verificar. Uso de uma chave única compartilhada (alternativa B incorreta); quadros (alternativa C incorreta); chaves infinitas (alternativa D incorreta); chave própria para cada comunicação (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Criptografia assimétrica usa um par único de chaves público/privada para comunicação.",
      B: "INCORRETA. Uma chave única compartilhada é a criptografia simétrica.",
      C: "INCORRETA. Quadros não são o conceito central da criptografia assimétrica.",
      D: "INCORRETA. Chaves finitas são usadas, não infinitas.",
      E: "INCORRETA. Cada comunicação não usa uma chave própria — usa um par público/privado."
    },
    regra: "Assimétrica = 'dois pares'. Uma chave pública para codificar, uma privada para decodificar.",
    pegadinha: "Assimétrica não é 'uma chave' — é 'um par de chaves' (pública + privada).",
    fonte: "NIST FIPS 186 (RSA)."
  },

  { id: "q-m4-57", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.4 — Código Hash",
    contexto: "Código hash é uma função que mapeia dados de qualquer tamanho para um valor fixo.",
    enunciado: "Um código hash (resumo de mensagem) é:",
    alternativas: [
      { letra: "A", texto: "Uma função que converte dados de qualquer tamanho em um valor fixo de tamanho." },
      { letra: "B", texto: "Um processo de criptografia de dados." },
      { letra: "C", texto: "Um processo de compressão de dados." },
      { letra: "D", texto: "Um processo de recuperação de dados." },
      { letra: "E", texto: "Um processo de verificação de senhas." }
    ],
    gabarito: "A",
    justificativa: "Hash é uma função que mapeia dados de qualquer tamanho para um valor (hash) de tamanho fixo — usado para integridade, verificação de senhas, assinatura digital. Criptografia (alternativa B incorreta); compressão (alternativa C incorreta); recuperação (alternativa D incorreta); verificação de senhas (alternativa E incorreta — é uma aplicação do hash, não a definição).",
    analise: {
      A: "CORRETA. Hash converte dados de qualquer tamanho em um valor fixo (resumo).",
      B: "INCORRETA. Hash não é criptografia — não é diretamente reversível.",
      C: "INCORRETA. Compressão é a redução de tamanho, não o hash.",
      D: "INCORRETA. Recuperação de dados é outra operação, não hash.",
      E: "INCORRETA. Hash é usado para verificação de senhas, mas a definição é o resumo."
    },
    regra: "Hash = 'ballote'. Dados de qualquer tamanho → saída fixa, sem reversão.",
    pegadinha: "Hash não é 'criptografia' — não pode ser revertido para obter os dados originais.",
    fonte: "NIST FIPS 180-4 (SHA-256)."
  },

  { id: "q-m4-58", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.4 — Assinatura Digital",
    contexto: "A assinatura digital é um mecanismo de segurança que garante autenticidade e integridade.",
    enunciado: "A assinatura digital é um método que:",
    alternativas: [
      { letra: "A", texto: "Garante autenticidade, integridade e não repúdio de mensagens." },
      { letra: "B", texto: "Criptografa todos os dados." },
      { letra: "C", texto: "Remove a necessidade de autenticação." },
      { letra: "D", texto: "Substitui a verificação de senhas." },
      { letra: "E", texto: "Cria dados aleatórios." }
    ],
    gabarito: "A",
    justificativa: "A assinatura digital garante autenticidade (quem assinou), integridade (dados não alterados) e não repúdio (o autor não pode negar a assinatura). Criptografar todos os dados (alternativa B incorreta); remover necessidade de autenticação (alternativa C incorreta); substituir senhas (alternativa D incorreta); criar dados aleatórios (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Assinatura digital garante autenticidade, integridade e não repúdio.",
      B: "INCORRETA. A assinatura digital não criptografa todos os dados — apenas afaixa a integridade/identidade.",
      C: "INCORRETA. A assinatura digital não remove a autenticação — é uma forma de autenticação.",
      D: "INCORRETA. A assinatura digital não substitui a verificação de senhas — é complementar.",
      E: "INCORRETA. Assinatura digital não cria dados aleatórios."
    },
    regra: "Assinatura digital = 'garantia de quem, o que e quando'. Autentica + integridade + não repúdio.",
    pegadinha: "Assinatura digital não é 'levar um documento' — é 'criptografia matemática' para provar autoria.",
    fonte: "NIST FIPS 186 (DSA), FIPS 197 (AES)."
  },

  { id: "q-m4-59", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-3", assunto: "4.4 — Certificados Digitais",
    contexto: "Certificados digitais são usados para verificar a identidade de usuários e sistemas.",
    enunciado: "Certificado digital é:",
    alternativas: [
      { letra: "A", texto: "Um documento que verifica a identidade de uma entidade em uma comunicação segura." },
      { letra: "B", texto: "Um documento de identidade físico." },
      { letra: "C", texto: "Um documento de acesso a sistemas." },
      { letra: "D", texto: "Um documento de backup." },
      { letra: "E", texto: "Um documento de verificação de senha." }
    ],
    gabarito: "A",
    justificativa: "Certificado digital é um documento digital (geralmente baseado em X.509) que vincula uma chave pública a uma entidade, verificando sua identidade em comunicação segura. Documento físico (alternativa B incorreta); documento de acesso (alternativa C incorreta); documento de backup (alternativa D incorreta); documento de verificação de senha (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Certificado digital verifica a identidade de uma entidade em comunicação segura.",
      B: "INCORRETA. Certificado digital é digital, não físico.",
      C: "INCORRETA. Certificado não é documento de acesso — é de identidade em rede.",
      D: "INCORRETA. Certificado não é documento de backup.",
      E: "INCORRETA. Certificado não verifica senha — vincula chave pública a uma entidade."
    },
    regra: "Certificado digital = 'carteira de identidade eletrônica'. Verifica quem está falando.",
    pegadinha: "Certificado digital não é 'documento físico' — é 'certificado eletrônico' para rede.",
    fonte: "ITU-T X.509; NIST SP 800-25."
  },

  { id: "q-m4-60", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-1", assunto: "4.4 — Phishing Avançado",
    contexto: "Phishing avançado usa técnicas sofisticadas para enganar usuários.",
    enunciado: "O 'spear phishing' (phishing direcionado) é caracterizado por:",
    alternativas: [
      { letra: "A", texto: "Um ataque generalizado, sem alvo específico." },
      { letra: "B", texto: "Um ataque personalizado contra uma pessoa ou organização específica." },
      { letra: "C", texto: "Um ataque que não envia e-mails." },
      { letra: "D", texto: "Um ataque que não usa tecnologia." },
      { letra: "E", texto: "Um ataque que não usa fraudes." }
    ],
    gabarito: "B",
    justificativa: "Spear phishing é um ataque personalizado contra uma pessoa ou organização específica, usando informações de pesquisa para aumentar a credibilidade. Ataque geralizado (alternativa A incorreta); não envia e-mails (alternativa C incorreta); não usa tecnologia (alternativa D incorreta); não usa fraude (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Spear phishing é direcionado, não generalizado (o geral é 'phishing' comum).",
      B: "CORRETA. Spear phishing é personalizado contra uma pessoa ou organização específica.",
      C: "INCORRETA. Normalmente envia e-mails (ou outras mídias) como veículo de ataque.",
      D: "INCORRETA. O ataque usa tecnologia (e-mail, sites falsos, etc.).",
      E: "INCORRETA. Spear phishing é uma fraude — enganar o alvo é sua essência."
    },
    regra: "Spear phishing = 'furada de caça'. Alvo específico, elaborado e personalizado.",
    pegadinha: "Spear phishing não é 'golpe espalhado' — é 'espada de caça', focado e preciso.",
    fonte: "MITRE ATT&CK — T1566 (Phishing)."
  },

  { id: "q-m4-61", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-1", assunto: "4.4 — Malware Analisado",
    contexto: "Os malwares são classificados por comportamento e disseminação.",
    enunciado: "A classificação dos malwares (vírus, worms, trojans, ransomware) é baseada em:",
    alternativas: [
      { letra: "A", texto: "Comportamento e meio de disseminação." },
      { letra: "B", texto: "Tamanho do arquivo." },
      { letra: "C", texto: "Cor do arquivo." },
      { letra: "D", texto: "Data de criação." },
      { letra: "E", texto: "Nenhum dos anteriores." }
    ],
    gabarito: "A",
    justificativa: "Malwares são classificados por comportamento (ex: criptografia, espionagem, propagação) e meio de disseminação (ex: anexo, rede, macro). Tamanho do arquivo (alternativa B incorreta); cor (alternativa C incorreta); data de criação (alternativa D incorreta); nenhum dos anteriores (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Malwares são classificados por comportamento e meio de disseminação.",
      B: "INCORRETA. Tamanho do arquivo não é critério de classificação de malwares.",
      C: "INCORRETA. Cor do arquivo não é critério.",
      D: "INCORRETA. Data de criação não é critério.",
      E: "INCORRETA. O critério é comportamento + disseminação."
    },
    regra: "Classificar malware = 'como se espalha' + 'o que faz'. Comportamento + disseminação.",
    pegadinha: "Malware não é 'trojan de barco' — é 'vírus de computador' — mas a classificação é por comportamento.",
    fonte: "Virus Bulletin — Classification of Malware."
  },

  { id: "q-m4-62", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.4 — Antivírus e EDR",
    contexto: "Antivírus e EDR são defensas endpoint.",
    enunciado: "A principal diferença entre Antivírus (AV) e EDR (Endpoint Detection and Response) é:",
    alternativas: [
      { letra: "A", texto: "Software AV só detecta, PDR detecta e responde ativamente." },
      { letra: "B", texto: "AV e EDR são a mesma coisa." },
      { letra: "C", texto: "AV é para servidores; EDR é para clientes." },
      { letra: "D", texto: "EDR é mais antigo que AV." },
      { letra: "E", texto: "AV é offline; EDR é online." }
    ],
    gabarito: "A",
    justificativa: "Antivírus clássico é uma defesa signature-based (assinatura), limitada a detecção; EDR é um sistema moderno que detecta, responde ativamente e permite investigação/remediação de ameaças em tempo real. AV e EDR não são a mesma coisa (alternativa B incorreta); ambos podem ser em servidores e cliente (alternativa C incorreta); EDR é mais recente que AV (alternativa D incorreta); AV pode ser online ou offline (alternativa E incorreta).",
    analise: {
      A: "CORRETA. AV é principalmente detecção (geralmente assinatura); EDR detecta e responde ativamente.",
      B: "INCORRETA. AV e EDR são ferramentas diferentes com arquiteturas distintas.",
      C: "INCORRETA. Ambos podem estar em servidores e clientes (endpoint).",
      D: "INCORRETA. EDR é uma geração mais recente que o AV tradicional.",
      E: "INCORRETA. AV pode funcionar offline ou online."
    },
    regra: "AV = 'detectar + avisar'. EDR = 'detectar + responder + investigar'. EDR é mais completo.",
    pegadinha: "AV não é 'fim do ataque' — é 'detecção de ameaça'. EDR é o próximo nível de defesa.",
    fonte: "CrowdStrike — EDR vs Antivirus, 2022."
  },

  { id: "q-m4-63", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.4 — Segmentação de Rede",
    contexto: "A segmentação de rede divide a rede em sub-redes menores para isolar ameaças.",
    enunciado: "A segmentação de rede é uma prática de segurança que:",
    alternativas: [
      { letra: "A", texto: "Juntar todas as redes em uma única sub-rede." },
      { letra: "B", texto: "Criptografar toda a rede." },
      { letra: "C", texto: "Separar a rede em sub-redes menores para isolar zonas e controlar o tráfego entre elas." },
      { letra: "D", texto: "Eliminar o tráfego de rede." },
      { letra: "E", texto: "Criar uma rede sem segmentos." }
    ],
    gabarito: "C",
    justificativa: "Segmentação de rede divide a infraestrutura em sub-redes/manejo, permitindo isolar zonas críticas e controlar o tráfego entre elas. Juntar redes (alternativa A incorreta); criptografar toda a rede (alternativa B incorreta); eliminar tráfego (alternativa D incorreta); criar rede sem segmentos (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Junção de redes é o oposto de segmentação.",
      B: "INCORRETA. Criptografia é uma defesa complementar, não a segmentação.",
      C: "CORRETA. Segmentação divide a rede em sub-redes, isolando zonas e controlando o tráfego.",
      D: "INCORRETA. Eliminar tráfego não é segmentação — é paralisação.",
      E: "INCORRETA. 'Rede sem segmentos' é exatamente o que se evita com segmentação."
    },
    regra: "Segmentação = 'partes separadas'. Isolamento de zonas críticas e controle de tráfego.",
    pegadinha: "Segmentação não é 'reduzir a rede' — é 'organizar a rede em zonas seguras'.",
    fonte: "NIST SP 800-125 (Segmented Networks)."
  },

  { id: "q-m4-64", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.4 — Hardening",
    contexto: "Hardening é o processo de reforçar a segurança de sistemas e redes.",
    enunciado: "Hardening (afeitamento/agentar a segurança) de sistemas é:",
    alternativas: [
      { letra: "A", texto: "O processo de reforçar a segurança de sistemas e redes, desabilitando serviços desnecessários, aplicando patchs e configurações seguras." },
      { letra: "B", texto: "O processo de instalar mais softwares." },
      { letra: "C", texto: "O processo de desativar o firewall." },
      { letra: "D", texto: "O processo de excluir conforme normas." },
      { letra: "E", texto: "O processo de aumentar o tráfego de rede." }
    ],
    gabarito: "A",
    justificativa: "Hardening é o processo de reforçar a segurança de sistemas, desabilitando serviços desnecessários, aplicando patchs e configurações seguras para reduzir a superfície de ataque. Instalar mais softwares (alternativa B incorreta); desativar firewall (alternativa C incorreta); excluir conforme normas (alternativa D incorreta); aumentar tráfego (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Hardening é o processo de reforçar a segurança, desabilitar serviços desnecessários e aplicar configurações seguras.",
      B: "INCORRETA. Instalar mais softwares amplia a superfície de ataque, não segurança.",
      C: "INCORRETA. Hardening não é desativar firewall.",
      D: "INCORRETA. Exclusão de dados não é hardening.",
      E: "INCORRETA. Aumentar tráfego não é hardening."
    },
    regra: "Hardening = 'tirar a faca dos sistema'. Desabilitar o que não é necessário.",
    pegadinha: "Hardening não é 'adormecer o sistema' — é 'fortalecer a postura de segurança'.",
    fonte: "CIS Controls — Critical Security Controls, v8."
  },

  { id: "q-m4-65", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.4 — Gestão de Vulnerabilidades",
    contexto: "A gestão de vulnerabilidades é um processo contínuo de identificação, avaliação e correção.",
    enunciado: "A gestão de vulnerabilidades envolve:",
    alternativas: [
      { letra: "A", texto: "Ignorar vulnerabilidades." },
      { letra: "B", texto: "Criptografar vulnerabilidades." },
      { letra: "C", texto: "Identificar, avaliar e corrigir vulnerabilidades de sistemas e aplicações." },
      { letra: "D", texto: "Excluir todos os sistemas." },
      { letra: "E", texto: "Aplicar patches aleatórios." }
    ],
    gabarito: "C",
    justificativa: "Gestão de vulnerabilidades é o processo contínuo de identificar, avaliar, priorizar e corrigir (patchs, configurações) as fraquezas de sistemas e aplicações. Ignorar (alternativa A incorreta); criptografar (alternativa B incorreta); excluir sistemas (alternativa D incorreta); patches aleatórios (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Ignorar vulnerabilidades aumenta o risco.",
      B: "INCORRETA. Criptografia não corrige vulnerabilidades — pode protegê-las.",
      C: "CORRETA. Gestão de vulnerabilidades identifica, avalia e corrige fraquezas de sistemas.",
      D: "INCORRETA. Eliminar todos os sistemas não é gestão de vulnerabilidades.",
      E: "INCORRETA. Patches aleatórios são ineficazes — a gestão é sistemática e prioritária."
    },
    regra: "Gestão de vulnerabilidades = 'escavar'. Encontrar, classificar e remover pontos fracos.",
    pegadinha: "Não confunda: gestão de vulnerabilidades não é 'esse bug é corrigido' — é 'um processo contínuo'.",
    fonte: "NIST SP 800-40 (Guide to Enterprise Patch Management)."
  },

  { id: "q-m4-66", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-2", assunto: "4.4 — WAF",
    contexto: "WAF (Web Application Firewall) protege aplicações web contra ataques específicos.",
    enunciado: "Um WAF (Web Application Firewall) é:",
    alternativas: [
      { letra: "A", texto: "Um firewall de borda de rede." },
      { letra: "B", texto: "Um firewall de dados." },
      { letra: "C", texto: "Um firewall que protege aplicações web contra ataques comuns (SQLi, XSS, etc.)." },
      { letra: "D", texto: "Um firewall de backup." },
      { letra: "E", texto: "Um firewall para e-mail." }
    ],
    gabarito: "C",
    justificativa: "WAF é um firewall projetado para proteger aplicações web contra ataques específicos, como SQL injection (SQLi), cross-site scripting (XSS), etc. Firewall de borda (alternativa A incorreta); firewall de dados (alternativa B incorreta); firewall de backup (alternativa D incorreta); firewall para e-mail (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Firewall de borda é um dispositivo de rede, não específico para aplicações web.",
      B: "INCORRETA. WAF não é firewall de dados — é para aplicações web.",
      C: "CORRETA. WAF protege aplicações web contra ataques comuns como SQLi e XSS.",
      D: "INCORRETA. WAF não é firewall de backup.",
      E: "INCORRETA. WAF não é firewall para e-mail."
    },
    regra: "WAF = 'escudo para aplicação web'. Protege contra SQLi, XSS, CSRF e outros ataques.",
    pegadinha: "WAF não é 'bloquear tudo' — é 'allowlist' de segurança para aplicações web.",
    fonte: "OWASP — Web Application Firewall (WAF)."
  },

  { id: "q-m4-67", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.4 — IDS vs IPS — Detalhe",
    contexto: "IDS e IPS são complementares, mas com diferenças fundamentais.",
    enunciado: "Sobre a diferença entre IDS e IPS, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "O IDS adiciona alertas sobre a atividade suspeita; o IPS impede ou bloqueia o tráfego malintencionoso." },
      { letra: "B", texto: "O IDS e o IPS são a mesma tecnologia." },
      { letra: "C", texto: "O IDS impede o tráfego; o IPS apenas monitora." },
      { letra: "D", texto: "O IDS não monitora." },
      { letra: "E", texto: "O IPS não gera alertas." }
    ],
    gabarito: "A",
    justificativa: "IDS é monitoramento passivo que gera alertas sobre atividade suspeita; IPS é ativo, impedindo ou bloqueando o tráfego malintencionoso. IDS e IPS não são a mesma tecnologia (alternativa B incorreta); IDS não impede (alternativa C incorreta); IDS monitora sim (alternativa D incorreta); IPS também gera alertas (alternativa E incorreta).",
    analise: {
      A: "CORRETA. IDS = monitoramento e alertas; IPS = bloqueio ativo do tráfego malintencionoso.",
      B: "INCORRETA. IDS e IPS têm funcionalidades diferentes — um monitora, o outro age.",
      C: "INCORRETA. IDS não impede — é o IPS que impede o tráfego.",
      D: "INCORRETA. IDS monitora continuamente o tráfego para gerar alertas.",
      E: "INCORRETA. IPS, além de bloquear, também gera alertas de segurança."
    },
    regra: "IDS = 'olhar e avisar'. IPS = 'olhar, avisar e impedir'. IDS é monitoramento; IPS é bloqueio.",
    pegadinha: "Não confunda: IDS é 'monitoramento e alerta'; IPS é 'bloqueio e prevenção'.",
    fonte: "SANS Institute — Intrusion Detection Systems."
  },

  { id: "q-m4-68", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.4 — VPN",
    contexto: "VPN (Virtual Private Network) cria uma conexão segura entre duas redes.",
    enunciado: "Uma VPN (Virtual Private Network) é:",
    alternativas: [
      { letra: "A", texto: "Um dispositivo de roteamento." },
      { letra: "B", texto: "Um protocolo de e-mail." },
      { letra: "C", texto: "Um método de criar uma rede privada segura sobre uma rede pública (internet)." },
      { letra: "D", texto: "Um sistema de backup." },
      { letra: "E", texto: "Um serviço de armazenamento." }
    ],
    gabarito: "C",
    justificativa: "VPN é um método que cria uma rede privada segura sobre uma rede pública (internet), criptografando o tráfego e garantindo privacidade e integridade. Dispositivo de roteamento (alternativa A incorreta); protocolo de e-mail (alternativa B incorreta); sistema de backup (alternativa D incorreta); serviço de armazenamento (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. VPN não é um roteador — é um serviço de tunnel seguro.",
      B: "INCORRETA. VPN não é protocolo de e-mail.",
      C: "CORRETA. VPN cria uma conexão privada segura sobre a internet pública.",
      D: "INCORRETA. VPN não é sistema de backup.",
      E: "INCORRETA. VPN não é serviço de armazenamento."
    },
    regra: "VPN = 'canal privado via internet'. Criptografia e tunelamento para acesso seguro.",
    pegadinha: "VPN não é 'acesso à internet' — é 'privacidade e segurança na internet'.",
    fonte: "NIST SP 800-77 (VPN)."
  },

  { id: "q-m4-69", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.4 — NTP",
    contexto: "O NTP (Network Time Protocol) é essencial para sincronizar relógios em redes.",
    enunciado: "O NTP (Network Time Protocol) é:",
    alternativas: [
      { letra: "A", texto: "Um protocolo para roteamento de pacotes." },
      { letra: "B", texto: "Um protocolo de segurança de dados." },
      { letra: "C", texto: "Um protocolo para sincronizar o relógio de sistemas em uma rede." },
      { letra: "D", texto: "Um protocolo de e-mail." },
      { letra: "E", texto: "Um protocolo de backup." }
    ],
    gabarito: "C",
    justificativa: "NTP é um protocolo de rede para sincronizar o relógio de sistemas em uma rede — essencial para logs, certificados, auditoria e processos que dependem de tempo. Roteamento de pacotes (alternativa A incorreta); protocolo de segurança de dados (alternativa B incorreta); protocolo de e-mail (alternativa D incorreta); protocolo de backup (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. NTP não roteia pacotes — é o protocolo de sincronização de tempo.",
      B: "INCORRETA. NTP não é um protocolo de segurança de dados.",
      C: "CORRETA. NTP é um protocolo para sincronizar o relógio de sistemas em rede.",
      D: "INCORRETA. NTP não é protocolo de e-mail.",
      E: "INCORRETA. NTP não é protocolo de backup."
    },
    regra: "NTP = 'mesmo relógio para todos'. Sincronização de tempo é essencial para auditoria e segurança.",
    pegadinha: "NTP não é 'roteamento' — é 'sincronização de relógios'.",
    fonte: "RFC 5905 (Network Time Protocol)."
  },

  { id: "q-m4-70", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-1-topico-3", assunto: "4.4 — Dispositivos de Segurança",
    contexto: "Diversos dispositivos de segurança são utilizados em redes.",
    enunciado: "O mecanismo mais eficaz para garantir que a comunicação entre dois sistemas seja autêntica e protegida é:",
    alternativas: [
      { letra: "A", texto: "Uso de firewalls apenas." },
      { letra: "B", texto: "Uso de criptografia, assinatura digital e certificados digitais." },
      { letra: "C", texto: "Desativação de todos os firewalls." },
      { letra: "D", texto: "Uso de senha única." },
      { letra: "E", texto: "Uso de backup automático." }
    ],
    gabarito: "B",
    justificativa: "Para comunicação autêntica, segura e íntegra, o uso combinado de criptografia, assinatura digital e certificados digitais é o mais eficaz — garantindo confidencialidade, integridade, autenticidade e não repúdio. Uso de firewalls apenas (alternativa A incorreta); desativar firewalls (alternativa C incorreta); senha única (alternativa D incorreta); backup automático (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Firewalls, isoladamente, não garantem autenticidade nem proteção de ponta a ponta.",
      B: "CORRETA. Criptografia + assinatura + certificados digitais garantem autenticidade, integridade e confidencialidade.",
      C: "INCORRETA. Desativar firewalls aumenta a exposição, não a segurança.",
      D: "INCORRETA. Senha única não garante autenticidade ou segurança de comunicação.",
      E: "INCORRETA. Backup automático não garante segurança de comunicação."
    },
    regra: "Proteção completa: 'criptografia + assinatura + certificado'. Combinação de camadas de segurança.",
    pegadinha: "Nenhum dispositivo isolado garante segurança — é a combinação de criptografia, assinatura e certificado.",
    fonte: "NIST SP 800-53 (SC-8, SC-12, SC-20, SC-23)."
  },

  { id: "q-m4-71", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.4 — Controles Compensatórios",
    contexto: "Os controles compensatórios são alternativas seguras quando o controle principal não é viável.",
    enunciado: "Os controles compensatórios em segurança da informação são:",
    alternativas: [
      { letra: "A", texto: "Alternativas que compensam a falha de um controle principal, mantendo o nível de segurança." },
      { letra: "B", texto: "Controles que aumentam o risco de forma artificial." },
      { letra: "C", texto: "Controles que eliminam a necessidade de segurança." },
      { letra: "D", texto: "Controles que excluem a verificação." },
      { letra: "E", texto: "Controles que afetam apenas o desempenho." }
    ],
    gabarito: "A",
    justificativa: "Controles compensatórios são alternativas que mantêm o nível de segurança quando o controle primário não pode ser implementado (quer seja por restrições técnicas, financeiras ou operacionais). Aumentam o risco (alternativa B incorreta); eliminam necessidade de segurança (alternativa C incorreta); excluem verificação (alternativa D incorreta); afetam apenas desempenho (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Controles compensatórios são alternativas que compensam a falha de controle principal.",
      B: "INCORRETA. Controles compensatórios reduzem o risco, não aumentam artificialmente.",
      C: "INCORRETA. Controles compensatórios não eliminam a necessidade de segurança.",
      D: "INCORRETA. Controles compensatórios não excluem a verificação — são uma alternativa segura.",
      E: "INCORRETA. Controles compensatórios afetam a segurança, não apenas desempenho."
    },
    regra: "Controle compensatório = 'retroalimentação segura'. Alternativa que mantém a segurança quando o ideal é inviável.",
    pegadinha: "Controle compensatório não significa 'deixar passar' — é 'controle alternativo seguro'.",
    fonte: "NIST SP 800-53 (CP-10: Contingency Planning)."
  },

  { id: "q-m4-72", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.4 — Privilege Escalation",
    contexto: "Privilege Escalation é o ato de obter privilégios mais altos do que deveria ter um usuário.",
    enunciado: "O 'privilege escalation' (escalada de privilégios) é:",
    alternativas: [
      { letra: "A", texto: "O processo pelo qual um usuário ou processo cancerce privilégios mais altos do que os concedidos." },
      { letra: "B", texto: "O processo de conceder privilégios." },
      { letra: "C", texto: "O processo de excluir privilégios." },
      { letra: "D", texto: "O processo de criptografar privilégios." },
      { letra: "E", texto: "O processo de verificar privilégios." }
    ],
    gabarito: "A",
    justificativa: "Privilege escalation é o ato de obter privilégios mais altos do que os concedidos — seja por modo horizontal (mesma conta) ou vertical (mayor privilégios no próprio usuário). O processo de conceder privilégios (alternativa B incorreta); excluir privilégios (alternativa C incorreta); criptografar privilégios (alternativa D incorreta); verificar privilégios (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Privilege escalation é obter privilégios mais altos do que os concedidos.",
      B: "INCORRETA. Conceder privilégios é 'provisão', não 'escalada'.",
      C: "INCORRETA. Excluir privilégios é 'diminuição', não 'escalada'.",
      D: "INCORRETA. Criptografar privilégios não é escalada.",
      E: "INCORRETA. Verificar privilégios é 'monitoring', não escalada."
    },
    regra: "Privilege Escalation = 'dar mais do que deve'. Atingir privilégios acima do necessário.",
    pegadinha: "Escalada não é 'dar privilégios' — é 'gastar privilégios' (obter além do concedido).",
    fonte: "MITRE ATT&CK — T1068 (Privilege Escalation)."
  },

  { id: "q-m4-73", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.4 — Brute Force",
    contexto: "Ataques de força bruta são uma técnica comum de quebra de senhas.",
    enunciado: "Sobre o ataque de força bruta, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "É uma técnica que garante a segurança da senha." },
      { letra: "B", texto: "É uma técnica que criptografa a senha." },
      { letra: "C", texto: "É uma técnica que testa sistematicamente todas as combinações possíveis de senhas até achar a correta." },
      { letra: "D", texto: "É uma técnica que exclui a senha." },
      { letra: "E", texto: "É uma técnica que não pode ser bloqueada." }
    ],
    gabarito: "C",
    justificativa: "Força bruta testa sistematicamente todas as combinações de caracteres até encontrar a senha correta. Garante segurança — não (alternativa A incorreta); criptografa a senha — não (alternativa B incorreta); exclui a senha — não (alternativa D incorreta); pode ser bloqueada com políticas (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Força bruta enfraquece a segurança — não garante nada.",
      B: "INCORRETA. Força bruta não criptografa a senha — tenta adivinhar.",
      C: "CORRETA. Força bruta testa todas as combinações até achar a senha correta.",
      D: "INCORRETA. Força bruta não exclui a senha — tenta adivinhar.",
      E: "INCORRETA. Força bruta pode ser bloqueada com limitação de tentativas."
    },
    regra: "Força bruta = 'tentar tudo'. Método sistemático de quebra de senhas.",
    pegadinha: "Força bruta não é 'cifra' — é 'adivinhar todos os casos possíveis'.",
    fonte: "NIST SP 800-63B."
  },

  { id: "q-m4-74", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.4 — Password Spraying",
    contexto: "Ataques de password spraying são uma variante da força bruta.",
    enunciado: "O ataque de 'password spraying' é caracterizado por:",
    alternativas: [
      { letra: "A", texto: "Usar uma senha comum em várias contas, evitando bloqueios por tentativas múltiplas." },
      { letra: "B", texto: "Criptografar senhas." },
      { letra: "C", texto: "Excluir contas." },
      { letra: "D", texto: "Gerar senhas aleatórias." },
      { letra: "E", texto: "Proteger contas." }
    ],
    gabarito: "A",
    justificativa: "Password spraying é um ataque que tenta uma senha comum em várias contas, evitando os mecanismos de bloqueio por múltiplas falhas de autenticação em uma única conta. Criptografar (alternativa B incorreta); excluir contas (alternativa C incorreta); gerar aleatoriamente (alternativa D incorreta); proteger (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Password spraying usa uma senha comum em múltiplas contas para evitar bloqueios.",
      B: "INCORRETA. Password spraying não criptografa senhas.",
      C: "INCORRETA. Password spraying não exclui contas — tenta autenticação falsa.",
      D: "INCORRETA. Password spraying não gera senhas aleatoriamente — usa senhas comuns.",
      E: "INCORRETA. Password spraying não protege contas — esconde dentro delas."
    },
    regra: "Password Spraying = 'senha comum em todas as contas'. Evita bloqueio ao testar poucas falhas por conta.",
    pegadinha: "Password spraying é 'a senha do dia' — um esquema comum, distribuído em muitas contas.",
    fonte: "Microsoft Security — Password Spraying Attack, 2021."
  },

  { id: "q-m4-75", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-2", assunto: "4.4 — Credential Stuffing",
    contexto: "Credential stuffing é um ataque que usa credenciais violadas de outros serviços.",
    enunciado: "O 'credential stuffing' é um ataque que:",
    alternativas: [
      { letra: "A", texto: "Usa credenciais (e-mail/senha) violadas de outros serviços para tentar login em conta." },
      { letra: "B", texto: "Criptografa credenciais." },
      { letra: "C", texto: "Exclui contas." },
      { letra: "D", texto: "Gera senhas aleatórias." },
      { letra: "E", texto: "Protege contas." }
    ],
    gabarito: "A",
    justificativa: "Credential stuffing é a tentativa de usar credenciais (e-mail/senha) violadas em outros serviços para obter acesso a contas. Criptografar (alternativa B incorreta); excluir contas (alternativa C incorreta); gerar aleatoriamente (alternativa D incorreta); proteger (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Credential stuffing usa credenciais violadas de outros serviços para tentar login.",
      B: "INCORRETA. Credential stuffing não criptografa credenciais.",
      C: "INCORRETA. Credential stuffing não exclui contas — tenta acessá-las.",
      D: "INCORRETA. Credential stuffing não gera senhas aleatoriamente.",
      E: "INCORRETA. Credential stuffing não protege contas — esconde dentro delas."
    },
    regra: "Credential stuffing = 'repetir o esquema'. Usar credenciais vazadas em outros sites para acessar contas.",
    pegadinha: "Credential stuffing é 'mesma senha' — uma senha vlada, muitas contas.",
    fonte: "Akamai — Credential Stuffing Attacks, 2022."
  },

  { id: "q-m4-76", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.4 — Ataque SSRF",
    contexto: "O SSRF (Server-Side Request Forgery) explora a capacidade de um servidor de fazer requisições.",
    enunciado: "O ataque SSRF (Server-Side Request Forgery) é caracterizado por:",
    alternativas: [
      { letra: "A", texto: "Forçar o servidor a fazer requisições internas a sistemas internos, muitas vezes para escapar." },
      { letra: "B", texto: "Criptografar requisições." },
      { letra: "C", texto: "Excluir requisições." },
      { letra: "D", texto: "Gerar requisições aleatórias." },
      { letra: "E", texto: "Proteger requisições." }
    ],
    gabarito: "A",
    justificativa: "SSRF força o servidor a realizar requisições HTTP para recursos internos (internet, sistemas internos), muitas vezes para escapar de controles de segurança. Criptografar (alternativa B incorreta); excluir requisições (alternativa C incorreta); gerar aleatoriamente (alternativa D incorreta); proteger requisições (alternativa E incorreta).",
    analise: {
      A: "CORRETA. SSRF força o servidor a fazer requisições para sistemas internos, escapando dos controles.",
      B: "INCORRETA. SSRF não criptografa requisições.",
      C: "INCORRETA. SSRF não exclui requisições.",
      D: "INCORRETA. SSRF não gera requisições aleatoriamente — direciona requisições internas.",
      E: "INCORRETA. SSRF não protege requisições."
    },
    regra: "SSRF = 'requisição do servidor'. Forçar o servidor a chamar o que ele não deveria.",
    pegadinha: "SSRF não é 'teclado do servidor' — é 'redirecionamento de requisição do servidor'.",
    fonte: "OWASP — Server-Side Request Forgery (SSRF)."
  },

  { id: "q-m4-77", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.4 — Mitigação de Ameaças",
    contexto: "A mitigação de ameaças é um processo contínuo de controle de riscos.",
    enunciado: "A mitigação de ameaças envolve:",
    alternativas: [
      { letra: "A", texto: "Identificar, avaliar e tomar ações para reduzir riscos de ameaças." },
      { letra: "B", texto: "Ignorar ameaças." },
      { letra: "C", texto: "Criptografar ameaças." },
      { letra: "D", texto: "Excluir ameaças." },
      { letra: "E", texto: "Omitir ameaças." }
    ],
    gabarito: "A",
    justificativa: "Mitigação de ameaças é o processo de identificar, avaliar e tomar ações para reduzir o risco de ameaças — através de controles preventivos, detectivos, corretivos ou compensatórios. Ignorar (alternativa B incorreta); criptografar (alternativa C incorreta); excluir (alternativa D incorreta); omitir (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Mitigação envolve identificar, avaliar e tomar ações para reduzir riscos.",
      B: "INCORRETA. Ignorar ameaças aumenta o risco de incidentes não tratados.",
      C: "INCORRETA. Criptografar ameaças não é mitigação — é uma medida de proteção.",
      D: "INCORRETA. Excluir ameaças é irreversível e geralmente impraticável.",
      E: "INCORRETA. Omitir ameaças é uma falha de gestão de riscos."
    },
    regra: "Mitigação = 'controlar o risco'. Identificar, avaliar e agir para reduzir ameaças.",
    pegadinha: "Mitigação não é 'eliminar' — é 'reduzir o risco'.",
    fonte: "NIST SP 800-30 (Guide for Conducting Risk Assessments)."
  },

  { id: "q-m4-78", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.4 — Gestão de Incidentes",
    contexto: "A gestão de incidentes é a disciplina de responder a incidentes de segurança.",
    enunciado: "A gestão de incidentes envolve:",
    alternativas: [
      { letra: "A", texto: "Processos para detectar, responder, conter e recuperar de incidentes de segurança." },
      { letra: "B", texto: "Ignorar incidentes." },
      { letra: "C", texto: "Criptografar incidentes." },
      { letra: "D", texto: "Excluir incidentes." },
      { letra: "E", texto: "Omitir incidentes." }
    ],
    gabarito: "A",
    justificativa: "Gestão de incidentes define processos para detecção, análise, contenção, erradicação, recuperação e lições aprendidas de incidentes de segurança. Ignorar (alternativa B incorreta); criptografar (alternativa C incorreta); excluir (alternativa D incorreta); omitir (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Gestão de incidentes inclui processos para responder a incidentes de segurança.",
      B: "INCORRETA. Ignorar incidentes aumenta o dano potencial.",
      C: "INCORRETA. Criptografar incidentes não é gestão de incidentes.",
      D: "INCORRETA. Excluir incidentes não é possível — é registrar e aprender com eles.",
      E: "INCORRETA. Omitir incidentes compromete a segurança e a conformidade."
    },
    regra: "Gestão de incidentes = 'detectar, responder, aprender'. Ciclo contínuo de resposta.",
    pegadinha: "Gestão de incidentes não é 'evitar' — é 'responder e recomeçar'.",
    fonte: "NIST SP 800-61 (Computer Security Incident Handling Guide)."
  },

  { id: "q-m4-79", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-4", assunto: "4.4 — Plano de Continuidade",
    contexto: "O plano de continuidade é definido para manter ou recuperar serviços críticos.",
    enunciado: "O plano de continuidade de negócios é:",
    alternativas: [
      { letra: "A", texto: "Um plano para manter ou recuperar serviços essenciais após uma interrupção." },
      { letra: "B", texto: "Um processo de excluir serviços." },
      { letra: "C", texto: "Um processo de criptografar serviços." },
      { letra: "D", texto: "Um processo de verificar serviços." },
      { letra: "E", texto: "Um processo de reduzir serviços." }
    ],
    gabarito: "A",
    justificativa: "Plano de continuidade de negócios (BCP) define como manter ou recuperar serviços essenciais após uma interrupção, incluindo backup, recuperação de desastres e aumentar a capacidade. Excluir serviços (alternativa B incorreta); criptografar (alternativa C incorreta); verificar (alternativa D incorreta); reduzir (alternativa E incorreta).",
    analise: {
      A: "CORRETA. BCP = plano para manter ou recuperar serviços essenciais após interrupção.",
      B: "INCORRETA. BCP não exclui serviços — garante sua continuidade.",
      C: "INCORRETA. BCP não criptografa serviços — trata de continuidade operacional.",
      D: "INCORRETA. Verificação não é a definição — é um plano de continuidade.",
      E: "INCORRETA. BCP não reduz serviços — garante a operação em emergências."
    },
    regra: "BCP = 'não parar'. Manter e recuperar serviços essenciais em emergências.",
    pegadinha: "BCP não é 'backup' — é 'plano estratégico de continuidade'.",
    fonte: "NIST SP 800-34 (Contingency Planning)."
  },

  { id: "q-m4-80", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-3-topico-3", assunto: "4.4 — Resposta a Incidentes",
    contexto: "Resposta a incidentes envolve múltiplos estágios e papéis.",
    enunciado: "Os estágios típicos de resposta a incidentes incluem:",
    alternativas: [
      { letra: "A", texto: "Detecção, análise, contenção, erradicação, recuperação e lições aprendidas." },
      { letra: "B", texto: "Detecção, análise, contenção, erradicação, recuperação e repetição." },
      { letra: "C", texto: "Detecção, análise, contenção, erradicação, recuperação e excluir." },
      { letra: "D", texto: "Detecção, análise, contenção, erradicação, recuperação e criptografar." },
      { letra: "E", texto: "Detecção, análise, contenção, erradicação, recuperação e omitir." }
    ],
    gabarito: "A",
    justificativa: "Estágios típicos de resposta: detecção, análise, contenção, erradicação, recuperação e lições aprendidas. Detecção → análise → contenção → erradicação → recuperação → lições aprendidas (alternativa B incorreta); excluir (alternativa C incorreta); criptografar (alternativa D incorreta); omitir (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Ciclo de resposta: detecção, análise, contenção, erradicação, recuperação, lições aprendidas.",
      B: "INCORRETA. 'Repetição' não faz parte do ciclo — é 'lições aprendidas'.",
      C: "INCORRETA. Exclusão não faz parte do ciclo — é 'lições aprendidas'.",
      D: "INCORRETA. Criptografia não faz parte do ciclo — é 'lições aprendidas'.",
      E: "INCORRETA. Omitir não faz parte do ciclo — é 'lições aprendidas'."
    },
    regra: "Ciclo de resposta: 'detectar, analisar, conter, erradicar, recuperar e aprender'.",
    pegadinha: "Resposta a incidentes não é 'pular' — é 'curto'.",
    fonte: "NIST SP 800-61."
  },

  { id: "q-m4-81", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-4-unidade-1-topico-2", assunto: "4.4 — Controles Preventivos",
    contexto: "Os controles preventivos agem antes de um evento ocorrer.",
    enunciado: "Controles preventivos são:",
    alternativas: [
      { letra: "A", texto: "Controles que agem antes de um evento, evitando sua ocorrência." },
      { letra: "B", texto: "Controles que agem após um evento." },
      { letra: "C", texto: "Controles que apenas reportam eventos." },
      { letra: "D", texto: "Controles que aumentam o risco." },
      { letra: "E", texto: "Controles que ignoram o evento." }
    ],
    gabarito: "A",
    justificativa: "Controles preventivos agem antes de um evento para evitar sua ocorrência — como firewall, criptografia, política de senha, treinamento. Ação após evento (alternativa B incorreta); relatar eventos (alternativa C incorreta); aumentar risco (alternativa D incorreta); ignorar (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Controles preventivos evitam a ocorrência de eventos.",
      B: "INCORRETA. Ação após evento é controle corretivo.",
      C: "INCORRETA. Relatar eventos é controle detectivo.",
      D: "INCORRETA. Controles preventivos reduzem risco, não aumentam.",
      E: "INCORRETA. Ignorar eventos é uma falha de gestão."
    },
    regra: "Preventivo = 'antes'. Evita a ocorrência de incidentes.",
    pegadinha: "Preventivo não é 'depois' — é 'antes' do evento.",
    fonte: "NIST SP 800-53 (Control Categories)."
  },

  { id: "q-m4-82", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-3", assunto: "4.4 — Controles Detectivos",
    contexto: "Os controles detectivos identificam a ocorrência de eventos.",
    enunciado: "Controles detectivos são:",
    alternativas: [
      { letra: "A", texto: "Controles que identificam a ocorrência de eventos, como logs, IDS e auditoria." },
      { letra: "B", texto: "Controles que evitam eventos." },
      { letra: "C", texto: "Controles que corrigem eventos." },
      { letra: "D", texto: "Controles que ignoram eventos." },
      { letra: "E", texto: "Controles que aumentam o risco." }
    ],
    gabarito: "A",
    justificativa: "Controles detectivos identificam a ocorrência de eventos — log, IDS, IPS, auditoria, monitoramento. Evitar eventos (alternativa B incorreta); corrigir eventos (alternativa C incorreta); ignorar (alternativa D incorreta); aumentar risco (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Controles detectivos identificam a ocorrência de eventos.",
      B: "INCORRETA. Evitar é controle preventivo.",
      C: "INCORRETA. Corrigir é controle corretivo.",
      D: "INCORRETA. Ignorar eventos é uma falha de segurança.",
      E: "INCORRETA. Controles detectivos reduzem risco, não aumentam."
    },
    regra: "Detectivo = 'identificar'. Alertar quando o evento ocorreu.",
    pegadinha: "Detectivo não é 'adesivo' — é 'detector' de eventos.",
    fonte: "NIST SP 800-53 (RA-5, AU-2)."
  },

  { id: "q-m4-83", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.4 — Controles Corretivos",
    contexto: "Os controles corretivos agem após um evento.",
    enunciado: "Controles corretivos são:",
    alternativas: [
      { letra: "A", texto: "Controles que agem após um evento, corrigindo os efeitos e restaurando o estado." },
      { letra: "B", texto: "Controles que evitam eventos." },
      { letra: "C", texto: "Controles que identificam eventos." },
      { letra: "D", texto: "Controles que ignoram eventos." },
      { letra: "E", texto: "Controles que aumentam o risco." }
    ],
    gabarito: "A",
    justificativa: "Controles corretivos atuam após a ocorrência do evento, corrigindo os efeitos e restaurando o estado normal — como backup, EDR, remoção de malware. Evitar eventos (alternativa B incorreta); identificar eventos (alternativa C incorreta); ignorar (alternativa D incorreta); aumentar risco (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Controles corretivos agem após o evento, corrigindo e restaurando o estado.",
      B: "INCORRETA. Evitar é controle preventivo.",
      C: "INCORRETA. Identificar é controle detectivo.",
      D: "INCORRETA. Ignorar eventos é falha de segurança.",
      E: "INCORRETA. Controles corretivos reduzem o risco, não aumentam."
    },
    regra: "Corretivo = 'depois'. Corrige os danos e restaura o estado normal.",
    pegadinha: "Corretivo não é 'preventivo' — é 'após o fato'.",
    fonte: "NIST SP 800-53 (CP-2, CP-4)."
  },

  { id: "q-m4-84", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-1-topico-2", assunto: "4.4 — Controles Compensatórios",
    contexto: "Controles compensatórios são alternativas quando o controle principal não é aplicável.",
    enunciado: "Controles compensatórios são:",
    alternativas: [
      { letra: "A", texto: "Alternativas que mantêm a segurança quando o controle primário não pode ser implementado." },
      { letra: "B", texto: "Controles que aumentam o risco." },
      { letra: "C", texto: "Controles que eliminam a necessidade de segurança." },
      { letra: "D", texto: "Controles que ignoram a segurança." },
      { letra: "E", texto: "Controles que são apenas sugestões." }
    ],
    gabarito: "A",
    justificativa: "Controles compensatórios são alternativas de segurança que mantêm o nível de proteção quando o controle primário não pode ser implementado. Aumentar risco (alternativa B incorreta); eliminar necessidade (alternativa C incorreta); ignorar (alternativa D incorreta); apenas sugestões (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Controles compensatórios são alternativas que mantêm a segurança quando o primário não é viável.",
      B: "INCORRETA. Controles compensatórios reduzem o risco, não aumentam.",
      C: "INCORRETA. Controles compensatórios não eliminam a necessidade de segurança.",
      D: "INCORRETA. Controles compensatórios não ignoram a segurança — são medidas de segurança legítimas.",
      E: "INCORRETA. Controles compensatórios são obrigatórios quando aplicados."
    },
    regra: "Compensatório = 'alívio seguro'. Quando o controle ideal não é possível, usa-se uma alternativa segura.",
    pegadinha: "Controle compensatório não é 'deixar passar' — é 'controle alternativo seguro'.",
    fonte: "NIST SP 800-53 (CP-10)."
  },

  { id: "q-m4-85", modulo: 4, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-4-unidade-2-topico-4", assunto: "4.4 — Vulnerabilidade",
    contexto: "Uma vulnerabilidade é uma fraqueza que pode ser explorada por uma ameaça.",
    enunciado: "Uma vulnerabilidade em segurança da informação é:",
    alternativas: [
      { letra: "A", texto: "Uma fraqueza que pode ser explorada por uma ameaça para causar dano." },
      { letra: "B", texto: "Uma característica de segurança." },
      { letra: "C", texto: "Um tipo de malware." },
      { letra: "D", texto: "Um padrão de criptografia." },
      { letra: "E", texto: "Um método de autenticação." }
    ],
    gabarito: "A",
    justificativa: "Uma vulnerabilidade é uma fraqueza (padrão, configuração, bug, design) que pode ser explorada por uma ameaça para causar dano ou acesso não autorizado. Característica de segurança (alternativa B incorreta); tipo de malware (alternativa C incorreta); padrão de criptografia (alternativa D incorreta); método de autenticação (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Vulnerabilidade é uma fraqueza que pode ser explorada por ameaça.",
      B: "INCORRETA. Vulnerabilidade é uma fraqueza, não uma característica de segurança.",
      C: "INCORRETA. Vulnerabilidade é um estado de fraqueza, não um tipo de malware.",
      D: "INCORRETA. Padrão de criptografia não é uma definição de vulnerabilidade.",
      E: "INCORRETA. Método de autenticação não é uma definição de vulnerabilidade."
    },
    regra: "Vulnerabilidade = 'brecha'. Fraqueza que pode ser explorada por uma ameaça.",
    pegadinha: "Vulnerabilidade não é 'ameaça' — é 'dobra' (fraqueza). Ameaça é quem aplica a dobrada.",
    fonte: "ISO/IEC 27000:2018."
  },
];
