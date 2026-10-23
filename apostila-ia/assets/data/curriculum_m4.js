/* curriculum_m4.js — Módulo 4: Segurança da Informação e Governança Digital
 * Conteúdo didático real (Escrita.txt, Seção 6 — Módulo 4), no MESMO esquema de
 * curriculum_m3.js: unidades -> topicos -> subtopicos com objetivoAprendizagem,
 * conteudo, exemplos (tipo introducao/aplicacao/erro) e exercicios
 * (tipo certos_erro/multipla).
 *
 * RASTREABILIDADE DE LEGISLAÇÃO (Escrita.txt, Seções 13 e 19) — declare antes de citar:
 * - LGPD (Lei nº 13.709/2018): dispositivos citados neste arquivo (arts. 1º, 2º,
 *   3º, 4º, 5º, 17, 18 e 46) foram VERIFICADOS em
 *   referencias/referencias-verificadas.md (texto oficial planalto.gov.br,
 *   verificação em 2026-10-20).
 * - Marco Civil (Lei nº 12.965/2014): VERIFICADA em 2026-10-23 (Bloco 3 de
 *   referencias/referencias-verificadas.md; texto oficial planalto.gov.br) —
 *   arts. 2º (I a VI), 3º (II a IV), 7º, 9º § 3º, 15 e 19; os demais artigos
 *   continuam sem conferência e não devem ser citados literalmente.
 * - Constituição Federal de 1988: menções a princípios no Módulo 6 são
 *   marcadas como não verificadas nesta sessão.
 * - Nenhum prazo, sanção, obrigação específica ou estatística foi inventado.
 * - A única URL citada é a do texto oficial da LGPD, presente no arquivo de
 *   referências verificadas.
 */

const curriculumM4 = {
  "modulo-4": {
    "titulo": "SEGURANÇA DA INFORMAÇÃO E GOVERNANÇA DIGITAL",
    "unidades": [
      {
        "id": "modulo-4-unidade-1",
        "titulo": "4.1 Fundamentos de segurança",
        "topicos": [
          {
            "id": "modulo-4-unidade-1-topico-1",
            "titulo": "Confidencialidade, integridade, disponibilidade e responsabilização",
            "subtopicos": [
              {
                "id": "m4-u1-t1-s1",
                "titulo": "Confidencialidade, integridade e disponibilidade (tríade CIA)",
                "objetivoAprendizagem": "Aluno definirá as três propriedades da tríade de segurança da informação, diferenciará cenários de violação de cada uma e relacionará cada propriedade a controles concretos.",
                "conteudo": "Confidencialidade, integridade e disponibilidade (CIA) são as três propriedades clássicas que a segurança da informação procura preservar. Confidencialidade: a informação é acessível apenas a quem tem autorização — controles típicos são criptografia em repouso e em trânsito, controle de acesso baseado em perfis, classificação da informação e dever de sigilo. Integridade: a informação permanece exata e completa, e toda alteração legítima é rastreável — controles: verificação por hash, assinatura digital, controle de versões, permissão de escrita restrita e registros de auditoria. Disponibilidade: a informação e o serviço estão acessíveis no momento em que são necessários — controles: backup testado, redundância de equipamentos e energia, balanceamento de carga, plano de continuidade e proteção contra ataques de negação de serviço. As propriedades entram em tensão prática: restringir acessos com múltiplas aprovações aumenta a confidencialidade e reduz a agilidade (disponibilidade operacional); cifrar grandes volumes com chaves fortes protege a confidencialidade, mas exige desempenho e gestão de chaves. Uma única falha frequentemente atinge mais de uma propriedade — o ransomware cifra os arquivos (perda de disponibilidade), pode alterá-los (integridade) e ameaça publicá-los (confidencialidade).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um servidor de e-mail do setor de recursos humanos fica fora do ar por seis horas no dia de folga pagamento de subsídio. Qual propriedade da tríade foi violada?", "resposta": "Disponibilidade: o serviço não estava acessível quando necessário. Não houve necessariamente violação de confidencialidade (ninguém indevido leu os dados) nem de integridade (nenhuma alteração indevida foi comprovada)." },
                  { "tipo": "aplicacao", "enunciado": "Um cartório digital pede a definição de controles para consultas de registros. Quais controles protegem cada propriedade da tríade?", "resposta": "Confidencialidade: autenticação forte, perfis de acesso por serviço em atendimento, criptografia dos dados em repouso. Integridade: registros de auditoria de cada consulta e alteração, verificação de hash dos arquivos de carga, controle de versões dos formulários. Disponibilidade: backup diário testado com restauração periódica, serviço redundante e plano de continuidade com procedimento escrito de retomada." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Se os dados estão criptografados, a segurança da informação está garantida.'", "correcao": "Errado. A criptografia sustenta principalmente a confidencialidade. Ela não garante integridade (um arquivo cifrado pode ser substituído por outra versão cifrada) nem disponibilidade (perda da chave, exclusão do backup ou cifragem pelo próprio ransomware deixam o dado inacessível). Segurança exige controles combinados para as três propriedades." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Um backup criptografado, mas nunca restaurado, garante a disponibilidade da informação.", "resposta": "Errado. Criptografar protege a confidencialidade do backup, mas disponibilidade só é comprovada por restauração efetivamente testada; cópia nunca testada pode estar corrompida ou incompleta." },
                  { "tipo": "multipla", "enunciado": "Um servidor deixa de responder a todos os usuários durante a abertura de inscrições de concurso. Propriedade violada: A) confidencialidade; B) integridade; C) disponibilidade; D) autenticidade.", "resposta": "C" }
                ]
              },
              {
                "id": "m4-u1-t1-s2",
                "titulo": "Autenticidade, responsabilização e não repúdio",
                "objetivoAprendizagem": "Aluno diferenciará autenticidade, responsabilização (accountability) e não repúdio, e indicará os mecanismos que sustentam cada um.",
                "conteudo": "Autenticidade é a garantia de que a identidade do emissor ou do acessante corresponde à declarada: a senha correta prova que quem se autenticou conhece o segredo; um certificado digital prova que a chave pública pertence a quem diz ser. Responsabilização (accountability) é a capacidade de atribuir cada ação a um sujeito identificável e de prestar contas por ela — depende de identificação individual (nunca de contas compartilhadas), de registros de auditoria completos e de proteção contra adulteração desses registros. Não repúdio é a impossibilidade prática de o agente negar com credibilidade sua participação: é sustentado por evidências que sobrevivem ao ato, como assinatura digital sobre certificado confiável e trilhas de registro horadadas e protegidas. As três coisas se apoiam, mas não se confundem: autenticar-se no momento do acesso não prova, por si só, o que foi feito depois; sem registros íntegros, a responsabilização falha; sem evidência assinada ou registro protegido, não há não repúdio. Contas compartilhadas destroem responsabilização e não repúdio, mesmo que a autenticação esteja correta.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Qual propriedade está em jogo quando um relatório é assinado digitalmente e qualquer pessoa pode verificar a assinatura?", "resposta": "Autenticidade (a assinatura vincula o documento ao signatário), integridade (qualquer alteração invalida a verificação) e não repúdio (o signatário não consegue negar ter assinado, desde que a chave privada esteja sob seu controle)." },
                  { "tipo": "aplicacao", "enunciado": "Um sistema de despacho registra alterações feitas por três operadores em uma conta funcional única. Que falha de segurança isso representa e como corrigir?", "resposta": "Falha de responsabilização e de não repúdio: as ações não são atribuíveis a um indivíduo, pois todos usam a mesma credencial. Correção: conta individual para cada operador com menor privilégio, autenticação forte, registro de auditoria com identificador, data/hora e ação, e proteção dos registros contra exclusão ou edição." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Como o sistema exige senha na entrada, ele comprova o não repúdio das ações.'", "correcao": "Errado. A senha prova autenticação no instante do acesso; não repúdio exige evidência do ato em si (assinatura digital ou registro íntegro e não repudiável). Se a senha for compartilhada ou divulgada, a negativa posterior fica facilitada, não afastada." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) O uso de contas compartilhadas é compatível com a responsabilização de ações.", "resposta": "Errado. Com conta compartilhada, não há como identificar o autor real da ação; responsabilidade e não repúdio ficam comprometidos." },
                  { "tipo": "multipla", "enunciado": "Qual mecanismo sustenta melhor o não repúdio de um documento eletrônico? A) Senha trocada a cada 30 dias; B) Assinatura digital baseada em certificado confiável; C) Endereço IP do computador; D) Nome de usuário no formulário.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u1-t1-s3",
                "titulo": "Ativos, ameaças, vulnerabilidades, risco e impacto",
                "objetivoAprendizagem": "Aluno construirá a cadeia conceitual ativo-ameaça-vulnerabilidade-risco-impacto e classificará tratamentos de risco em situações concretas.",
                "conteudo": "Ativo é tudo aquilo que tem valor para o órgão: dados (inclusive dados pessoais), hardware e software, instalações, serviços, tempo de equipe, informação não documentada e reputação. Ameaça é um evento ou agente capaz de provocar dano a um ativo — pode ser humana intencional (atacante), humana involuntária (erro operacional) ou ambiental (incêndio, inundação). Vulnerabilidade é a fraqueza explorável: portas abertas por padrão, software sem correção, senha padrão de fábrica, ausência de controle de acesso, falha de processo humano. Risco combina a probabilidade de a ameaça explorar a vulnerabilidade com o impacto que daí resulta; modelos gerenciais frequentemente expressam risco como probabilidade × impacto, tratando-se de escala qualitativa (baixa/média/alta), não de cálculo financeiro exato. Impacto é a consequência materializada: multa, paralisação, vazamento de dados pessoais, perda de confiança. Importante: risco residual é o que permanece após o tratamento — ele nunca é zero, apenas aceito formalmente. Tratamentos possíveis: evitar (não realizar a atividade de risco), mitigar (reduzir probabilidade ou impacto), transferir (seguro, contratos) e aceitar (decisão consciente registrada).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Identifique ativo, ameaça, vulnerabilidade e risco no cenário: 'a página do órgão usa a senha padrão de fábrica do fabricante do roteador'.", "resposta": "Ativo: a rede e as informações acessíveis por ela. Ameaça: agente externo ou interno que tenta acesso indevido. Vulnerabilidade: credencial padrão conhecida publicamente. Risco: probabilidade de exploração multiplicada pelo impacto do acesso à rede interna, que tende a ser alto pela extensão do dano." },
                  { "tipo": "aplicacao", "enunciado": "Após implantar MFA e treinamento, o risco de fraude por roubo de senha caiu, mas não desapareceu (ex.: engenharia social dirigida ao suporte). Que tipo de risco restou e qual tratamento cabe?", "resposta": "Risco residual. Cabe tratamento de mitigação adicional (procedimento de verificação de identidade no suporte, bloqueio de alteração de cadastro por canal não autenticado) e aceite formal documentado do que restar, com responsável e data — aceite implícito não é gestão de risco." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Depois de todos os controles implantados, o risco do sistema ficou zero.'", "correcao": "Errado. Controles reduzem risco a um patamar residual; eliminação total é inatingível porque novas ameaças e vulnerabilidades surgem continuamente. O correto é declarar o risco residual aceito formalmente e revisá-lo periodicamente." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Backup é um controle que reduz risco de indisponibilidade.", "resposta": "Certo. Backup é controle corretivo: ele sustenta a restauração do estado desejado após a perda e reduz o impacto do incidente — sem ele, a perda de dados torna-se potencialmente irreversível." },
                  { "tipo": "multipla", "enunciado": "Um órgão contrata seguro contra fraude para transferir parte do risco financeiro. Tratamento utilizado: A) evitar; B) mitigar; C) transferir; D) aceitar.", "resposta": "C" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-1-topico-2",
            "titulo": "Controles de segurança e gestão de acesso",
            "subtopicos": [
              {
                "id": "m4-u1-t2-s1",
                "titulo": "Controles preventivos, detectivos, corretivos e compensatórios",
                "objetivoAprendizagem": "Aluno classificará controles de segurança por sua natureza e justificará o uso de controles compensatórios temporários.",
                "conteudo": "Controles preventivos evitam que o incidente ocorra: firewall com política de negação padrão, exigência de MFA, controle de acesso físico, bloqueio de macros em documentos recebidos. Controles detectivos identificam que o incidente ocorreu ou está ocorrendo: alertas de login fora do padrão, IDS, varreduras de vulnerabilidade, revisão periódica de registros de auditoria. Controles corretivos eliminam a causa ou restauram o estado desejado após o dano: restauração de backup, revogação de credencial comprometida, remoção de malware, correção de configuração. Controles compensatórios são medidas alternativas temporárias adotadas quando o controle principal não pode ser aplicado no momento — por exemplo, bloqueio manual de acesso enquanto a MFA é implantada no sistema legado, ou revisão humana diária enquanto a automação de validação não existe. Regra de gestão: todo controle compensatório deve ter prazo, responsável e data de substituição pelo controle principal; sem isso, vira solução permanente silenciosa. A combinação dos quatro tipos é o que sustenta a defesa em profundidade: um controle preventivo falha, um detectivo avisa, um corretivo restaura e um compensatório cobre a janela de exposição.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Classifique: 'antivírus com atualização de assinaturas', 'alerta de tentativa de login recusada' e 'restauração de arquivos a partir de cópia de segurança'.", "resposta": "Antivírus atua de forma preventiva (bloqueia código malicioso conhecido) e, quando identifica após a execução, de forma corretiva ao remover. Alerta de login recusada é detectivo. Restauração a partir de backup é corretivo." },
                  { "tipo": "aplicacao", "enunciado": "O sistema legado do órgão não suporta MFA e a substituição levará 12 meses. Que controle compensatório é proporcional e como ele deve ser governado?", "resposta": "Controle compensatório: acesso restrito a rede interna e lista de endereços permitidos, verificação de identidade por canal registrado no atendimento ao usuário e revisão diária dos registros de acesso daquele perfil. Governança: registrar prazo de 12 meses (ou menos), responsável nomeado e critério objetivo de substituição, com revisão mensal até a migração para MFA." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Controles compensatórios podem ser mantidos indefinidamente, desde que funcionem.'", "correcao": "Errado. Compensatório é exceção temporária: sem prazo e substituição pelo controle principal, a exceção se normaliza, acumula risco e impede a correção da vulnerabilidade original." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Um alerta disparado pelo IDS é um exemplo de controle corretivo.", "resposta": "Errado. O alerta é controle detectivo: ele informa que algo ocorreu, mas não corrige nada por si só; a correção depende de resposta (controle corretivo)." },
                  { "tipo": "multipla", "enunciado": "Bloquear o acesso à lista de permitidos enquanto a MFA ainda não foi implantada é: A) preventivo; B) detectivo; C) corretivo; D) compensatório.", "resposta": "D" }
                ]
              },
              {
                "id": "m4-u1-t2-s2",
                "titulo": "Autenticação, autorização, auditoria e menor privilégio",
                "objetivoAprendizagem": "Aluno distinguirá autenticação, autorização e auditoria e aplicará o princípio do menor privilégio ao desenho de perfis de acesso.",
                "conteudo": "As três funções formam o ciclo clássico de controle de acesso. Autenticação responde 'quem é você?': verificação de credenciais (senha, token, biometria, certificado). Autorização responde 'o que você pode fazer?': mapeamento identidade → perfil → permissões (arquivos, telas, comandos). Auditoria responde 'o que você fez?': registro das ações com identificador, data/hora e resultado, protegido contra alteração. Menor privilégio: conceder somente o mínimo necessário para a função — nem mais, nem menos; complementado pelo need-to-know (necessitar saber) e pela separação de funções (quem aprova não executa; quem cadastra não paga). Erro clássico: dar perfil de administrador ao usuário final 'para facilitar'; o efeito é que qualquer falha ou comprometimento dessa conta atinge toda a máquina. Menor privilégio também se aplica a serviços: conta de serviço de aplicação deve ter acesso apenas ao banco de dados que usa, e nunca deve fazer login como administrador do domínio. Autorização deve ser avaliada a cada requisição, não apenas na entrada do sistema — autenticado não significa autorizado.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um servidor autentica corretamente o usuário, mas ele tenta abrir a pasta de outro setor. Em que etapa do ciclo a falha está?", "resposta": "Na autorização: a identidade foi confirmada (autenticação), mas a permissão solicitada não corresponde ao perfil. A ação deve ser negada e registrada para auditoria." },
                  { "tipo": "aplicacao", "enunciado": "Desenhe perfis para a seção de licitações: equipe que digita, analista que aprova e auditoria externa.", "resposta": "Menor privilégio + separação de funções: equipe de digitação cria e edita registros próprios, sem aprovação; analista aprova e edita campos de conformidade, sem excluir o histórico; auditoria tem acesso somente leitura a registros e logs, sem permissão de escrita. Todos com conta individual e registro de auditoria." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Usuário autenticado pode acessar qualquer recurso do sistema.'", "correcao": "Errado. Autenticação identifica; autorização delimita. O acesso depende do perfil, avaliado a cada operação — a regra padrão é negar o que não foi explicitamente permitido." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Separar quem aprova de quem executa é uma aplicação do princípio do menor privilégio.", "resposta": "Certo. É a separação de funções, decorrente da mesma lógica: reduzir poderes acumulados em uma só identidade reduz o impacto de erro ou fraude." },
                  { "tipo": "multipla", "enunciado": "Qual ação o sistema deve registrar para atender à auditoria? A) Somente senhas incorretas; B) Identificador, data/hora, ação realizada e resultado; C) Apenas o nome do usuário no primeiro acesso; D) Somente alterações de cadastro.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u1-t2-s3",
                "titulo": "MFA, senhas, gerenciadores e autenticação resistente a phishing",
                "objetivoAprendizagem": "Aluno comparará fatores de autenticação, avaliará a força de diferentes mecanismos MFA e indicará alternativas resistentes a phishing.",
                "conteudo": "Autenticação fatorada usa categorias independentes: algo que sabe (senha, PIN), algo que tem (aplicativo autenticador, cartão, token), algo que é (biometria) e, em algumas taxonomias, algo que corresponde a contexto (localização). MFA (autenticação multifator) exige ao menos dois fatores de categorias distintas; 2FA é o caso particular com exatamente dois. Senhas: o problema real é reutilização e previsibilidade — senhas longas e únicas por serviço, guardadas em gerenciador de senhas, superam políticas que exigem troca periódica forçada, que tendem a produzir variantes previsíveis. Limitações por fator: SMS e chamada podem ser afetados por fraude de troca de chip (SIM swap); códigos de uso único (TOTP) podem ser capturados por sites falsos. Autenticação resistente a phishing (baseada em padrões como WebAuthn/FIDO2 e passkeys) vincula o fator ao domínio legítimo: o navegador só conclui a autenticação no endereço correto, o que anula o site clonado. MFA não substitui senhas fracas nem protege contra fraude de engenharia social dirigida ao suporte — por isso autenticação de recuperação de conta também precisa de fatores.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um sistema pede senha e código enviado por SMS. Essa é MFA? Justifique.", "resposta": "Sim, é 2FA (caso de MFA): combina algo que sabe (senha) com algo que tem (receptor do SMS). Os dois fatores são de categorias distintas, embora o segundo apresente vulnerabilidade a fraude de troca de chip." },
                  { "tipo": "aplicacao", "enunciado": "Um servidor público de alta exposição exige autenticação que resista a site clonado. Que tipo de fator você recomenda e por quê?", "resposta": "Fator criptográfico vinculado ao domínio (passkey/WebAuthn): a chave privada só é usada pelo navegador para o domínio registrado, então o código não é digitaível em site falso. Complementar: segundo fator independente e procedimento de recuperação de conta com verificação humana documentada." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'MFA elimina o risco de roubo de credenciais.'", "correcao": "Errado. MFA reduz muito o risco de autenticação indevida, mas há vetores residuais: fraude de engenharia social no suporte, interceptação de códigos em tempo real (SIM swap, aplicativo clonado) e contaminação do próprio dispositivo. MFA é controle forte, não absoluto." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Senha + código de uso único exibido por aplicativo autenticador constituem dois fatores de categorias distintas.", "resposta": "Certo: algo que sabe (senha) e algo que tem (dispositivo com o aplicativo autenticador)." },
                  { "tipo": "multipla", "enunciado": "Qual autenticação é intrinsecamente resistente a site clonado? A) Senha + SMS; B) Senha + TOTP; C) Passkey vinculada ao domínio; D) Pergunta de segurança.", "resposta": "C" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-1-topico-3",
            "titulo": "Criptografia, hashes, assinaturas e certificados",
            "subtopicos": [
              {
                "id": "m4-u1-t3-s1",
                "titulo": "Criptografia simétrica",
                "objetivoAprendizagem": "Aluno explicará o funcionamento da criptografia simétrica, identificará seu problema central e indicará usos adequados.",
                "conteudo": "Na criptografia simétrica, a mesma chave cifra e decifra. Como o custo computacional é baixo em relação à assimétrica, é a escolha para proteger grandes volumes: cifragem de disco, proteção de backup e o canal de dados de uma sessão TLS (após a negociação inicial). O problema central é a distribuição da chave: para que duas partes cifrem entre si sem já terem canal seguro, a chave precisa chegar a elas sem ser interceptada — e quando há muitos pares, o número de chaves a gerenciar cresce rapidamente (n pares exigem n(n−1)/2 chaves em comunicações plenas). Por isso, na prática a criptografia simétrica é quase sempre precedida por um acordo de chave por meio assimétrico. Pontos operacionais: o algoritmo é público e a segurança depende da chave, não do segredo do algoritmo; chaves precisam de ciclo de vida (geração, armazenamento, rotação, revogação) e não devem ser reutilizadas de maneira previsível para conteúdos distintos. Algoritmos amplamente citados em material técnico: AES (padrão de referência) e ChaCha20, entre outros.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Por que o mesmo processo que cifra um arquivo de 2 TB usa criptografia simétrica e não assimétrica?", "resposta": "Desempenho: a criptografia simétrica consome muito menos processamento por byte; a assimétrica é reservada, nesse cenário, para proteger a chave simétrica envolvida, e não o conteúdo inteiro." },
                  { "tipo": "aplicacao", "enunciado": "Duas agências precisam trocar arquivos diários criptografados. Descreva o fluxo completo de chaves.", "resposta": "1) As agências estabelecem uma chave simétrica de sessão protegida por troca assimétrica (cada uma cifra a chave com a chave pública da outra). 2) Os arquivos são cifrados com a chave simétrica. 3) Ao fim, a chave é destruída ou rotacionada. Assim, resolve-se o problema de distribuição mantendo o desempenho simétrico no conteúdo." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Em criptografia simétrica, a chave secreta é enviada junto ao arquivo cifrado para o destinatário.'", "correcao": "Errado. Enviar a chave com o conteúdo anula a proteção: quem intercepta cifra e decifra. A chave deve ser distribuída por canal seguro ou por acordo com chave pública, sempre separada do dado cifrado." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) A segurança da criptografia simétrica depende de manter o algoritmo em segredo.", "resposta": "Errado. Depende da chave: algoritmos são públicos e amplamente auditados; algoritmo secreto (segredo de Kerckhoffs) é considerado pratica frágil." },
                  { "tipo": "multipla", "enunciado": "Qual é o problema central da criptografia simétrica? A) Custo computacional alto; B) Distribuição segura da chave; C) Saída de tamanho variável; D) Impossibilidade de usar em disco.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u1-t3-s2",
                "titulo": "Criptografia assimétrica, certificados e PKI",
                "objetivoAprendizagem": "Aluno descreverá o par de chaves, relacionará usos (confidencialidade x assinatura), explicará certificados e a cadeia de confiança e detalhará o funcionamento híbrido do TLS.",
                "conteudo": "A criptografia assimétrica usa um par matematicamente relacionado: chave pública (divulgável) e chave privada (sigilosa). Cifrar com a chave pública e decifrar com a privada garante confidencialidade a qualquer remetente; assinar com a privada e verificar com a pública sustenta autenticidade, integridade e não repúdio. O custo computacional é maior, por isso se combina ao simétrico: no TLS, o cliente e o servidor usam assimétrico (ou troca efêmera de curva elíptica) para concordar uma chave simétrica de sessão, e todo o tráfego seguinte usa a simétrica. Certificado digital é o documento que vincula uma identidade a uma chave pública, emitido e assinado por uma autoridade de certificação (AC) confiável; a cadeia de confiança vai do certificado final até uma raiz de confiança pré-instalada no navegador ou no sistema, e cada elo é verificado por assinatura. Vida útil: certificado expira (isso é intencional, limita o dano de chave comprometida) e pode ser revogado antes do prazo — os mecanismos de consulta de revogação (listas e consultas online de status) existem justamente para isso. PKI (infraestrutura de chaves públicas) é o conjunto de políticas, processos, ACs, registros e softwares que sustentam essa cadeia.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Numa navegação HTTPS, em que momento a criptografia assimétrica é usada e o que ela protege?", "resposta": "No início da conexão: durante a negociação TLS, as partes combinam a chave simétrica de sessão usando o par de chaves e o certificado do servidor. Depois, os dados trafegam cifrados com a chave simétrica; o certificado prova a identidade do servidor." },
                  { "tipo": "aplicacao", "enunciado": "O navegador acusa que um certificado expirou. Explique por que expirar é desenho e não defeito.", "resposta": "Expiração limita no tempo o poder de uma chave pública: se a privada for comprometida, o período de abuso é restrito ao prazo do certificado; além disso, força a renovação com práticas atualizadas. O alerta é correto — o site pode ser legítimo, mas a garantia vencida exige renovar (ou validar a configuração do servidor)." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Cifrar com a chave privada protege a confidencialidade da mensagem.'", "correcao": "Errado. Como a chave pública é de todos, todos conseguem decifrar — não há confidencialidade. Cifrar com a chave privada é, na prática, ato de assinatura/verificação; para confidencialidade, cifra-se com a chave pública do destinatário." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Um certificado digital pode ser revogado antes do vencimento.", "resposta": "Certo. Revogação antecipada existe para casos de comprometimento de chave privada, mudança de titularidade ou erro de emissão." },
                  { "tipo": "multipla", "enunciado": "No TLS, a criptografia assimétrica é usada principalmente para: A) cifrar todo o tráfego; B) concordar a chave simétrica de sessão; C) comprimir o conteúdo; D) autenticar o usuário final.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u1-t3-s3",
                "titulo": "Hashes e assinaturas digitais",
                "objetivoAprendizagem": "Aluno enumerará as propriedades de uma função de hash, distinguirá hash de criptografia e explicará como a assinatura combina hash e chave privada.",
                "conteudo": "Função de hash mapeia entrada de tamanho qualquer para resumo de tamanho fixo, de forma determinística, com efeito avalanche (pequena mudança no texto altera completamente o resumo) e resistência a três ataques: pré-imagem (dado o resumo, achar a entrada), segundo pré-imagem (achar outra entrada com o mesmo resumo) e colisão (achar duas entradas quaisquer com o mesmo resumo). Usos: verificar integridade de arquivos e downloads, indexar, e armazenar senhas — senhas devem ser guardadas com hash lento e com sal individual (famílias projetadas para serem lentas, como bcrypt e Argon2), nunca em texto puro nem com hash rápido puro. Diferença decisiva para provas: hash é de mão única (não há chave e não se 'decifra'), enquanto criptografia é reversível com a chave. Assinatura digital funciona assim: 1) calcula-se o hash do documento; 2) cifra-se o hash com a chave privada do signatário; 3) o verificador recalcula o hash com a chave pública e compara. Altera o documento, o hash diverge e a verificação falha. A assinatura garante integridade, autenticidade e não repúdio — mas não confidencialidade: o conteúdo segue legível.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Você baixa um arquivo e o distribuidor publica o resumo SHA-256. Como o resumo é usado?", "resposta": "Recalcula-se o hash do arquivo baixado e compara-se com o publicado: igual → integridade preservada desde a publicação; diferente → arquivo alterado (ou corrompido na transmissão). O resumo não protege contra ataque se o canal de publicação também estiver comprometido." },
                  { "tipo": "aplicacao", "enunciado": "Um contrato é assinado digitalmente e depois um dos anexos é trocado. O que acontece na verificação?", "resposta": "A assinatura cobre o hash do documento original; com o anexo trocado, o hash recalculado diverge e a verificação falha — evidência de adulteração. Por isso a assinatura deve cobrir todos os elementos do ato, inclusive anexos." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Cifrar a senha do usuário com AES é a forma correta de armazená-la.'", "correcao": "Errado em dois pontos: senhas devem ser armazenadas com hash de propósito lento com sal (não cifradas), pois o servidor não precisa recuperar o texto original; e se a cifragem for usada, o atacante que obtenha a chave recupera todas as senhas de uma vez." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Assinatura digital confere confidencialidade ao documento assinado.", "resposta": "Errado. Assinatura confere integridade, autenticidade e não repúdio; a confidencialidade depende de cifragem com chave do destinatário, que é outro mecanismo." },
                  { "tipo": "multipla", "enunciado": "Uma função de hash com resistência a colisão garante que: A) ninguém recupera o texto original; B) é impraticável encontrar duas entradas com o mesmo resumo; C) o resumo tem tamanho igual à entrada; D) o resumo depende de chave secreta.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-1-topico-4",
            "titulo": "Backup, continuidade, RPO e RTO",
            "subtopicos": [
              {
                "id": "m4-u1-t4-s1",
                "titulo": "Backup completo, incremental e diferencial",
                "objetivoAprendizagem": "Aluno calculará custo de restauração dos três tipos de backup em uma sequência semanal e escolherá a estratégia adequada a uma janela de tempo disponível.",
                "conteudo": "Backup completo copia todos os dados selecionados na execução: maior consumo de tempo e espaço, mas restauração mais simples (uma única mídia). Incremental copia o que mudou desde o ÚLTIMO backup (completo ou incremental): execuções rápidas, mas a restauração exige o completo + todas as incrementais seguintes em ordem — perder uma delas inviabiliza a cadeia. Diferencial copia o que mudou desde o ÚLTIMO COMPLETO: execuções crescem ao longo da semana, mas a restauração precisa apenas do completo + a última diferencial. Exemplo canônico (semana, com 100 GB e 10 GB alterados por dia): domingo — completo (100 GB); segunda — incremental, pega os 10 GB desde domingo; terça — incremental, só os 10 GB desde segunda; quarta — diferencial, os 20 GB acumulados desde domingo. Restaurar quarta-feira: completo + única diferencial (incremental exigiria completo + segunda + terça). Escolha prática: janela de backup curta → incremental; prioridade de restauração rápida e simples → completo periódico + diferencial; regra sempre combinada com teste de restauração e verificação de checksum da cópia.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Na sequência 'domingo completo, segunda incremental, terça incremental', quantas mídias são necessárias para restaurar na terça?", "resposta": "Três: o completo de domingo, a incremental de segunda e a incremental de terça, nesta ordem. Se qualquer uma faltar ou estiver corrompida, o conjunto pode ficar inutilizável." },
                  { "tipo": "aplicacao", "enunciado": "O órgão tem janela de 1 hora à noite e meta de restauração em 2 horas. Que combinação é coerente?", "resposta": "Incrementais diários (execução curta) com um completo semanal e um diferencial intermediário se a janela permitir; além disso, RTO de 2 horas exige restauração treinada com medição real de tempo — estratégia que só funciona se o teste de restauração comprovar o prazo." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Backup diferencial pega as alterações desde o último backup de qualquer tipo.'", "correcao": "Errado: é o incremental que copia desde o último backup de qualquer tipo; o diferencial copia sempre desde o último COMPLETO." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Um backup diferencial de sexta-feira substitui todas as incrementais da semana na restauração.", "resposta": "Certo, para restauração: completo de domingo + diferencial de sexta já contêm tudo. Exige apenas que o diferencial tenha sido gerado desde aquele completo e esteja íntegro." },
                  { "tipo": "multipla", "enunciado": "Se a incremental de quarta-feira está perdida, o que se pode restaurar com segurança? A) Até terça com a cadeia anterior; B) Nada; C) Somente o completo; D) Somente arquivos de quinta.", "resposta": "A" }
                ]
              },
              {
                "id": "m4-u1-t4-s2",
                "titulo": "Estratégia 3-2-1, cópias imutáveis e testes de restauração",
                "objetivoAprendizagem": "Aluno aplicará a regra 3-2-1 a um cenário de órgão público e justificará cópias imutáveis e testes de restauração como defesa contra ransomware.",
                "conteudo": "Regra 3-2-1: manter 3 cópias dos dados (a original + 2 backups), em 2 meios distintos (por exemplo, disco de rede e fita/nuvem), com pelo menos 1 cópia fora do local ou em ambiente separado (outro site, nuvem com política de retenção, ou imune à mesma falha). Objetivo: sobreviver a falha simultânea de mídia, incêndio, roubo e cifragem por ransomware. Cópia imutável é aquela que não pode ser alterada ou excluída por um período definido — nem pelo administrador comum nem por um atacante que roube credenciais; na prática, significa controle de objetos só-leitura com retenção (WORM) e credenciais de escrita separadas. Sem imutabilidade, o ransomware criptografa ou apaga os backups junto com o sistema. Teste de restauração: só há backup comprovado quando a restauração foi executada, mediida e conferida (arquivos abrem, checksums batem, aplicativo inicia); o teste deve ser periódico e registrado, com responsável e resultado. Três elementos juntos formam a defesa real: redundância (3), diversidade de meio (2) e isolamento/imutabilidade (1).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um órgão mantém a pasta de arquivos e seu backup no mesmo servidor de arquivos. Quantas cópias efetivas existem na regra 3-2-1?", "resposta": "Uma cópia física: se o servidor falhar ou for cifrado, arquivos e backup vão juntos. Faltam diversidade de meio e cópia isolada — a política 3-2-1 não é atendida." },
                  { "tipo": "aplicacao", "enunciado": "Proponha uma configuração 3-2-1 com imutabilidade para uma secretaria com dados pessoais.", "resposta": "1) Arquivos originais no servidor de arquivos. 2) Backup diário no storage de rede com retenção de 90 dias em objetos só-leitura (WORM) e credenciais de escrita exclusivas do serviço de backup. 3) Backup semanal criptografado para serviço de nuvem com política de versionamento e restauração por conta separada. Teste de restauração amostral mensal, registrado com data e resultado." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Backup na nuvem já garante 3-2-1, porque a nuvem fica fora do local.'", "correcao": "Errado. A nuvem atende apenas à cópia isolada; se a única cópia na nuvem for sincronizada e mutável, um ransomware com credenciais válidas pode destruí-la. Ainda faltam 3 cópias e 2 meios distintos, além de imutabilidade e teste." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Backup imutável impede que um atacante com credenciais de leitura apague as cópias.", "resposta": "Certo. Imutabilidade/retenção impede exclusão e alteração durante o período definido; por isso credenciais de escrita devem ser separadas e protegidas." },
                  { "tipo": "multipla", "enunciado": "Quantas cópias, meios distintos e cópias isoladas a regra 3-2-1 exige, respectivamente? A) 2-2-1; B) 3-2-1; C) 3-3-3; D) 1-1-3.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u1-t4-s3",
                "titulo": "Continuidade de negócios, recuperação de desastres, RPO e RTO",
                "objetivoAprendizagem": "Aluno diferenciará continuidade de negócios de recuperação de desastres, calculará a frequência de backup exigida por um RPO e traduzirá um RTO em requisito de infraestrutura.",
                "conteudo": "Continuidade de negócios (BC) trata de manter as atividades críticas em operação durante e após uma interrupção — processos, pessoas, comunicação, alternativas manuais. Recuperação de desastres (DR) trata de restaurar a infraestrutura e os sistemas depois da falha. Análise de impacto no negócio (BIA) identifica as atividades críticas e quantifica o dano por tempo de parada, e dela derivam dois indicadores: RPO (Recovery Point Objective) = maior perda de dados aceitável, medida em TEMPO → define a frequência máxima de backup (RPO de 4 horas exige ponto de restauração a cada 4 horas, no pior caso); RTO (Recovery Time Objective) = maior tempo de indisponibilidade aceitável → define a infraestrutura de retomada (se RTO é 30 minutos, não dá para instalar do zero: é preciso ambiente quente ou alternativa já pronta). Pegadinha clássica: RPO mede dados, RTO mede tempo de parada; trocá-los na prova é erro garantido. Ambos custam dinheiro: quanto menores, maior a redundância e a frequência exigidas. Metas devem ser documentadas, aprovadas e validadas por teste — meta sem teste é intenção, não capacidade.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "O órgão declara RPO de 6 horas. Qual a consequência direta para a rotina de backup?", "resposta": "Os backups devem ocorrer, no mínimo, a cada 6 horas — ou haver replicação contínua equivalente —, de modo que, em um desastre, no máximo 6 horas de registros sejam perdidas." },
                  { "tipo": "aplicacao", "enunciado": "Sistema de triagem de urgência com RTO de 20 minutos e RPO de 1 hora. Desenhe a solução.", "resposta": "RPO 1 h → replicação de dados no máximo a cada hora (ideal contínua) para local alternativo. RTO 20 min → ambiente secundário pré-configurado (quente/frio controlado) com teste documentado de comutação dentro de 20 minutos, monitoramento 24×7 e procedimento escrito com responsáveis — sem os quais a meta é inatingível." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'RTO de 2 horas significa que podemos perder até 2 horas de dados.'", "correcao": "Errado. RTO é tempo aceitável de indisponibilidade (retomada); a perda de dados aceitável é o RPO. Os dois conceitos são independentes e podem ter valores diferentes no mesmo serviço." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Reduzir o RPO de 24 h para 1 h exige aumentar a frequência de cópias ou adotar replicação mais frequente.", "resposta": "Certo. RPO define a janela máxima de perda; menor janela exige mais cópias por unidade de tempo (ou replicação contínua)." },
                  { "tipo": "multipla", "enunciado": "Meta de sistema indisponível no máximo 30 minutos corresponde a: A) RPO; B) RTO; C) BIA; D) SLA de backup.", "resposta": "B" }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-4-unidade-2",
        "titulo": "4.2 Malwares e ferramentas defensivas",
        "topicos": [
          {
            "id": "modulo-4-unidade-2-topico-1",
            "titulo": "Malwares: vetores de infecção, propagação e impacto",
            "subtopicos": [
              {
                "id": "m4-u2-t1-s1",
                "titulo": "Vírus e worms",
                "objetivoAprendizagem": "Aluno diferenciará vírus de worm pelos critérios hospedeiro e propagação autônoma, e identificará seus vetores de infecção.",
                "conteudo": "Malware é qualquer software projetado para prejudicar, explorar ou comprometer sistemas. Vírus é código que se adere a um arquivo hospedeiro e depende de duas condições para se propagar: ação humana (abrir o arquivo, executar o macro, plugar a mídia) e existência de um arquivo ao qual se agarrar. Worm é código autônomo: não precisa de hospedeiro nem de ação do usuário; explora serviços de rede expostos ou falhas de segmentação para copiar-se sozinho entre máquinas. Consequência prática da diferença: o vírus tende a se limitar a estações onde o arquivo circulou (e-mail, pen drive, anexo); o worm causa surtos em rede em minutos, saturando enlaces e explorando vulnerabilidades de propagação lateral. Vetores comuns de ambos: anexos de e-mail, macros em documentos, downloads de sites não confiáveis, mídias removíveis, instalações de software de procedência duvidosa e exploração de vulnerabilidades em serviços expostos à Internet. Impacto típico: degradação de desempenho, corrupção de arquivos, roubo de credenciais e ponto de entrada para ataque maior.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um funcionário abre um anexo de e-mail e o código se espalha pelos computadores da rede por conta própria. É vírus ou worm?", "resposta": "Worm: a propagação autônoma, sem depender de nova ação humana ou de hospedeiro, é a marca do worm. Se dependesse de cada usuário abrir o anexo encaminhado, seria vírus." },
                  { "tipo": "aplicacao", "enunciado": "Um setor do órgão ainda usa macros de planilha para rotinas diárias. Que controles reduzem o risco de infecção por vírus de macro?", "resposta": "Bloqueio ou restrição de macros vindo da Internet, configuração de proteção da área de trabalho (Protected View), treinamento para não habilitar macro em documento inesperado, antivírus com inspeção de conteúdo e correção do aplicativo. Em paralelo, migrar a rotina para processos que não exijam macro é a correção de causa raiz." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Vírus e worm são sinônimos; a diferença é apenas a época de criação.'", "correcao": "Errado. A diferença é operacional: vírus depende de hospedeiro e ação humana; worm é autônomo e se propaga pela rede. Confundir os dois leva a dimensionar mal a resposta (isolamento de estações x bloqueio de tráfego de rede)." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Um worm pode se propagar sem que o usuário clique em qualquer coisa.", "resposta": "Certo. É a definição operacional do worm: propagação autônoma, tipicamente explorando serviços de rede ou falhas de segmentação." },
                  { "tipo": "multipla", "enunciado": "Qual malware depende de arquivo hospedeiro e ação do usuário? A) Worm; B) Vírus; C) Botnet; D) Rootkit.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u2-t1-s2",
                "titulo": "Trojans, spyware e adware",
                "objetivoAprendizagem": "Aluno explicará o mecanismo do trojan (falsificação de aparência legítima) e relacionará spyware e adware a violações de privacidade e de proteção de dados.",
                "conteudo": "Trojan (cavalo de Troia) é software que aparenta ser útil ou legítimo e executa função oculta maliciosa. Ele não se propaga sozinho: sua distribuição depende de engenharia social (instalador de programa pirata, atualizador falso, anexo), o que o aproxima conceitualmente da fraude, não da epidemia. Capacidades típicas: abrir porta dos fundos para acesso remoto, roubar credenciais gravadas, baixar outros componentes. Spyware é software que coleta informações do usuário sem consentimento — histórico de navegação, teclas digitadas, capturas de tela — e as envia a terceiros; quando grava teclas, recebe o nome específico de keylogger. Adware exibe publicidade não solicitada e frequentemente acompanha adware-like componentes que redirecionam buscas e anúncios. Conexão legal relevante: a coleta não consentida de dados que identifiquem pessoa é tratamento de dados pessoais — a LGPD exige base legal e transparência para tratamento (fundamentos do art. 2º e direitos do art. 18, verificados em referencias-verificadas.md), o que torna spyware em máquina corporativa também questão de conformidade, não só de segurança.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um 'instalador de utilitários otimizadores' distribuído em fóruns pede privilégios de administrador e instala também um módulo que envia histórico de navegação. Classifique.", "resposta": "Trojan (finge ser utilitário e executa função oculta) com módulo spyware (coleta e envio de dados de navegação). A distribuição em fórum é engenharia social aplicada à propagação." },
                  { "tipo": "aplicacao", "enunciado": "O setor de TI detecta que estações instalam automaticamente extensões de navegador que exibem anexos publicitários e alteram a busca padrão. Que tipo de malware é provável e qual a primeira ação?", "resposta": "Provável adware com alteração de configuração do navegador. Primeira ação: isolar a causa (extensão ou instalador), remover extensões e componentes não autorizados, restaurar configurações, revogar sessões se houve captura de credenciais e corrigir o canal de distribuição que permitiu a instalação." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Trojan propaga-se automaticamente entre máquinas da rede.'", "correcao": "Errado. Propagação autônoma é característica do worm. O trojan depende de distribuição enganosa e instalação — por isso controles de engenharia social e de software são tão importantes contra ele." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Spyware coleta dados do usuário sem consentimento, o que pode configurar tratamento ilícito de dados pessoais.", "resposta": "Certo. Sob a LGPD, coleta e transmissão de dados identificáveis exigem base legal e transparência; spyware, por definição, não as atende (arts. 2º e 18 da LGPD — verificados)." },
                  { "tipo": "multipla", "enunciado": "Qual malware grava as teclas digitadas pelo usuário? A) Adware; B) Keylogger (spyware); C) Firewall; D) Worm.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u2-t1-s3",
                "titulo": "Ransomware, rootkits e botnets",
                "objetivoAprendizagem": "Aluno descreverá o ciclo de ataque do ransomware, o mecanismo de ocultação de rootkits e o funcionamento de botnets, e relacionará cada um a controles de defesa específicos.",
                "conteudo": "Ransomware cifra os arquivos acessíveis pela conta comprometida e exige pagamento pela chave; variantes modernas também ameaçam publicar dados vazados (dupla extorsão). O ciclo típico: exploração de acesso exposto ou fraude de credenciais, elevação de privilégio, movimentação lateral, desativação de defesas e cópias de sombra, cifragem em massa e nota de resgate. A defesa comprovada inclui segmentação (limita o alcance), MFA (bloqueia o ponto de entrada), correção de vulnerabilidades exploradas e backups imutáveis e testados — sem cópia íntegra, a única alternativa vira o pagamento. Rootkit é conjunto que oculta a presença de malware do usuário e das ferramentas de inspeção: pode operar em nível de aplicativo, driver ou núcleo (kernel), alterando listas de processos e arquivos vistos; por isso a detecção confiável muitas vezes exige inspeção fora do sistema comprometido (arranque limpo ou varredura offline). Botnet é rede de dispositivos comprometidos (zumbis) controlados por canal de comando e controle (C&C): serve para enviar spam, mineração forçada e ataques de negação de serviço distribuída — a botnet é a fonte de tráfego do DDoS.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Após um clique em anexo, arquivos ganham extensão nova e não abrem; há instrução de pagamento. Identifique o tipo de malware e o primeiro ciclo de resposta.", "resposta": "Ransomware. Primeiro ciclo: isolar a máquina da rede, preservar evidências, identificar a variante por assinatura ou hash do arquivo, iniciar contenção das demais estações e acionar o plano de recuperação usando backup imutável verificado." },
                  { "tipo": "aplicacao", "enunciado": "Um órgão pagou resgate e mesmo assim os arquivos voltaram lentamente a ficar inacessíveis semanas depois. Explique tecnicamente.", "resposta": "Sinais de persistência: o atacante manteve acesso (backdoor, credencial não revogada) ou o rootkit/componente residual continuou ativo. Erradicação completa exige reconstrução de sistemas, rotação de todas as credenciais e revogação de certificados — pagamento não erradica a causa raiz." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Pagar o resgate garante a recuperação dos arquivos.'", "correcao": "Errado. Pagamento não garante entrega da chave, não revogar acesso do atacante e não remove persistências; além disso, financia a atividade. A alternativa comprovada é backup imutável testado e reconstrução." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) A cópia de sombra do sistema pode ser destruída pelo ransomware antes da cifragem.", "resposta": "Certo. É prática comum do ataque apagar ou criptografar as cópias locais; por isso a defesa exige cópias fora do alcance da conta comprometida (imutáveis, fora do local)." },
                  { "tipo": "multipla", "enunciado": "O que caracteriza uma botnet? A) Um único atacante usando força bruta; B) Múltiplos dispositivos comprometidos sob comando e controle; C) Um vírus de arquivo; D) Um firewall em modo promíscuo.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-2-topico-2",
            "titulo": "Firewalls e filtragem de tráfego",
            "subtopicos": [
              {
                "id": "m4-u2-t2-s1",
                "titulo": "Firewall de pacotes",
                "objetivoAprendizagem": "Aluno lerá e escreverá regras de firewall de pacotes e explicará por que a política padrão é a negação.",
                "conteudo": "Firewall de pacotes filtra tráfego com base em informações do cabeçalho dos pacotes: endereço IP de origem e destino, protocolo (TCP, UDP, ICMP) e portas de origem/destino. É stateless: avalia pacote a pacote, sem memória de conexões — por isso, para permitir o retorno de uma conexão, é preciso regra explícita para o sentido oposto, o que aumenta o número de regras e o risco de erro. Boas práticas de desenho: política de negação padrão (default deny) com permissões explícitas (allowlist) — tudo que não é permitido é negado; regras ordenadas do mais específico para o mais geral; documentação de cada regra (finalidade, responsável, data); revisão periódica para remover regras mortas. Exemplo de regra: permitir TCP destino 443 de qualquer origem para o servidor web 203.0.113.10 — não permite SSH, não permite UDP, não permite outro destino. Limitações estruturais: não inspeciona o conteúdo da aplicação nem o payload criptografado; tráfego cifrado passa como caixa-preta para ele.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Escreva o conjunto mínimo de regras para um servidor DNS interno (UDP 53) acessível apenas pela rede 192.168.10.0/24.", "resposta": "1) Permitir UDP destino 53 origem 192.168.10.0/24 destino 192.168.1.53. 2) Negar qualquer origem para UDP/TCP 53 destino 192.168.1.53. 3) Negar padrão tudo mais. Regras específicas antes da negação geral, com documentação." },
                  { "tipo": "aplicacao", "enunciado": "O servidor web fica atrás de firewall de pacotes com uma única regra 'permitir TCP 443'. Um atacante usa o mesmo túnel TLS para tráfego de comando e controle. Por que passou?", "resposta": "Porque o firewall de pacotes enxerga apenas cabeçalho: TCP, porta 443, IPs — regra satisfeita. Ele não distingue TLS legítimo de tráfego malicioso cifrado; é preciso inspeção de aplicação (WAF/proxy com capacidade adequada) ou monitoramento comportamental." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Firewall de pacotes analisa o conteúdo das mensagens aplicacionais.'", "correcao": "Errado. Ele decide com base em endereços, protocolos e portas. Análise de conteúdo aplicacional é papel de firewall de aplicação (WAF), proxy ou IDS/IPS com inspeção profunda." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Na política de negação padrão, uma nova porta aberta permanece disponível até que exista regra explícita negando-a.", "resposta": "Errado. Na negação padrão, tudo que não foi explicitamente permitido já é negado; a nova porta só passa se alguém criar regra de permissão." },
                  { "tipo": "multipla", "enunciado": "Firewall de pacotes stateless decide com base em: A) estado da conexão e histórico; B) IP, protocolo e porta do pacote; C) conteúdo do e-mail; D) assinatura do executável.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u2-t2-s2",
                "titulo": "Inspeção de estado (stateful inspection)",
                "objetivoAprendizagem": "Aluno explicará como a tabela de estados simplifica regras e introduz o ciclo de vida de conexão TCP como critério de filtragem.",
                "conteudo": "A inspeção de estado mantém uma tabela com as conexões em andamento: origem, destino, porta, estado (por exemplo, conexão em abertura, estabelecida, encerrando) e timeout. Com ela, o administrador escreve uma regra no sentido entrada (permitir novas conexões de saída para a Internet) e o firewall automaticamente permite o retorno correspondente, sabendo que aquele pacote pertence a uma conexão que ele mesmo autorizou — o retorno não precisa de regra explícita. Ganho prático: menos regras, menos erros de configuração e rejeição de pacotes soltos que fingem ser resposta de conexão que nunca existiu. Exemplo de engano que o stateful bloqueia: pacote TCP com flag de confirmação (ACK) vindo de fora sem conexão anterior registrado — em firewall stateless mal configurado, ele seria aceito pela regra genérica de retorno. Limitações: não inspeciona o payload aplicacional; o consumo de memória cresce com o número de conexões (é vetor de esgotamento); tráfego cifrado continua opaco quanto ao conteúdo. Mecanismo análogo em hosts: a tabela de conexões permite que a filtragem de pacotes local seja dirigida por estado também.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Descreva o que acontece quando um usuário abre um site pela primeira vez em firewall stateful.", "resposta": "1) O pacote de SYN de saída passa pela regra de novas conexões; 2) o firewall cria registro na tabela de estados (origem, destino, porta, estado SYN_SENT → ESTABLISHED); 3) os pacotes de resposta são reconhecidos como parte daquela conexão e liberados sem regra extra; 4) ao encerrar, o registro expira por timeout." },
                  { "tipo": "aplicacao", "enunciado": "Por que um ataque de injeção de pacotes com ACK vindo da Internet falha em firewall stateful bem configurado?", "resposta": "Porque não existe conexão correspondente na tabela de estados: o pacote ACK não casa com nenhuma sessão autorizada, logo é descartado como pacote órfão — mesmo que exista regra permissiva genérica de rede." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Inspeção de estado substitui completamente a necessidade de regras de permissão.'", "correcao": "Errado. O estado automatiza apenas o retorno de conexões que o próprio firewall autorizou; cada nova conexão de entrada ou saída continua dependendo de regra explícita. Estado reduz regras, não elimina política." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) A tabela de estados do firewall é esgotável e pode ser alvo de ataque por volume de conexões.", "resposta": "Certo. Cada conexão consome memória e entradas; rajadas de conexões podem estourar a tabela, derrubando o firewall ou forçando timeouts — daí limites de taxa e dimensionamento." },
                  { "tipo": "multipla", "enunciado": "Principal ganho da inspeção de estado: A) criptografia do tráfego; B) retorno automático de conexões autorizadas, com menos regras; C) detecção de vírus; D) filtro de conteúdo de e-mail.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u2-t2-s3",
                "titulo": "Firewall de aplicação e WAF",
                "objetivoAprendizagem": "Aluno diferenciará firewall de aplicação de firewall de pacotes e explicará o papel do WAF na proteção de aplicações web.",
                "conteudo": "Firewall de aplicação (firewall de camada de aplicação ou proxy de aplicação) entende o protocolo da aplicação: HTTP, FTP, SMTP etc. Ele valida se o tráfego obedece à gramática do protocolo e aplica políticas por conteúdo — por exemplo, permitir apenas o método HTTP GET/POST, rejeitar requisições com corpo malformado ou parâmetros suspeitos. WAF (Web Application Firewall) é a especialização para aplicações web: fica em frente ao site (proxy reverso), inspeciona requisições e respostas HTTP(S) e bloqueia padrões de ataque de camada aplicacional, como injeção de SQL, scripts entre usuários (XSS) e exploração de falhas de autenticação. Posicionamento típico: entre o usuário e o servidor web, com política baseada em regras e, quando disponível, em conjunto de regras de referência de ataques web. Responsabilidades e limites: WAF melhora a higiene do perímetro web, mas não corrige falhas de código — é controle que compra tempo enquanto a aplicação é corrigida; exige sintonia para reduzir falsos positivos; não protege contra fraudes feitas por usuário autenticado em app legítimo. Confira sempre a documentação do produto: capacidades variam entre fabricantes e versões, e generalizar recurso de um produto é erro comum de prova.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um formulário público recebe parâmetro que vira consulta direta ao banco. Que ferramenta intercepta o padrão de ataque e qual corrige a causa?", "resposta": "O WAF pode bloquear a sintaxe típica de injeção de SQL inspecionando a requisição HTTP. A causa raiz é corrigida no código: uso de consulta parametrizada, validação de entrada e permissão mínima do banco — WAF não substitui correção." },
                  { "tipo": "aplicacao", "enunciado": "O portal de transparência do órgão passa a exibir erro 500 em formulários após ativar WAF em modo bloqueio estrito. Como proceder?", "resposta": "Verificar logs do WAF para identificar regras que casam com tráfego legítimo (falsos positivos), passar a modo de observação para ajustar, excluir falsos positivos documentados, reativar bloqueio e manter revisão periódica de política — sem desativar a proteção inteira como atalho." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Com WAF, a aplicação fica imune a falhas de desenvolvimento.'", "correcao": "Errado. WAF é controle externo e baseado em padrões; falha lógica nova ou padrão desconhecido pode passar. Segurança de aplicação exige revisão de código, validação de entrada e gestão de dependências — o WAF complementa, não corrige." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) WAF inspeciona conteúdo HTTP(S) das requisições, ao contrário do firewall de pacotes.", "resposta": "Certo. É exatamente essa a diferença de camada: WAF atua no conteúdo aplicacional; firewall de pacotes decide por endereços e portas." },
                  { "tipo": "multipla", "enunciado": "Qual ataque é típico alvo de WAF? A) SYN flood volumétrico; B) Injeção de SQL via parâmetro de formulário; C) SIM swap; D) Engenharia social por telefone.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-2-topico-3",
            "titulo": "Detecção, resposta e proteção de endpoints",
            "subtopicos": [
              {
                "id": "m4-u2-t3-s1",
                "titulo": "IDS e IPS",
                "objetivoAprendizagem": "Aluno diferenciará IDS e IPS por atuação (alerta x bloqueio) e colocação na rede, e comparará detecção por assinatura e por anomalia.",
                "conteudo": "IDS (Intrusion Detection System) observa o tráfego e EMITE ALERTAS quando encontra padrões de ataque; é dispositivo passivo — sua implantação típica liga-se a um ponto de espelho (span/mirror) de switch ou a um TAP, de modo que não participa do caminho do tráfego e não consegue bloquear nada sozinho. IPS (Intrusion Prevention System) atua no caminho (inline) e BLOQUEIA ou saneia o tráfego malicioso conforme política; por isso tem risco operacional próprio: falha ou falso positivo do IPS interrompe tráfego legítimo, o que exige teste em modo de observação antes do bloqueio. Mecanismos de detecção: por assinatura (base de padrões conhecidos — precisa de atualização constante, só vê o conhecido) e por anomalia/heurística (compara com comportamento esperado — pega o inédito, mas produz mais falsos positivos). Existem variantes por localização: HIDS/HIPS atuam no host (arquivos, configurações, processos). IDS/IPS não substitui firewall: firewalls aplicam política de acesso; IDS/IPS detectam exploração dentro do que foi permitido.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um dispositivo alerta sobre tentativa de exploração de vulnerabilidade conhecida, mas o tráfego chegou ao servidor. Que ferramenta é e o que isso indica?", "resposta": "IDS (detecção passiva). Indica que houve tentativa e que o alerta depende de operador para resposta; se bloqueio automático fosse exigido, a arquitetura precisaria de IPS inline." },
                  { "tipo": "aplicacao", "enunciado": "A equipe quer implantar bloqueio automático, mas teme parar sistema crítico por falso positivo. Descreva a implantação prudente.", "resposta": "Fase 1: IPS em modo somente alerta (monitoração) por período representativo, coletando falsos positivos. Fase 2: ajuste de política, exclusão de exceções documentadas, testes em janela de manutenção. Fase 3: bloqueio ativado por categoria de ataque de alto impacto, com monitoramento 24×7 e procedimento de reversão." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'IDS inline bloqueia pacotes maliciosos automaticamente.'", "correcao": "Errado: inline e bloqueio automático são características de IPS. IDS, por definição, detecta e alerta; sua posição típica é fora do caminho do tráfego." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Detecção por assinatura consegue identificar ataque nunca antes visto.", "resposta": "Errado. Assinatura descreve ataque conhecido; o inédito só é captado por detecção comportamental/anomalia, com mais falsos positivos." },
                  { "tipo": "multipla", "enunciado": "Diferença operacional decisiva entre IPS e IDS: A) preço; B) IPS bloqueia, IDS alerta; C) IPS atua só em Wi-Fi; D) IDS não usa assinaturas.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u2-t3-s2",
                "titulo": "Monitoramento, registros e resposta a incidentes",
                "objetivoAprendizagem": "Aluno elencará o que registrar, como proteger os registros e descreverá as fases da resposta a incidentes na ordem correta.",
                "conteudo": "Monitoramento contínuo é a condição de descobrir incidente antes do usuário reclamar. O que registrar: autenticações (sucesso e falha), autorizações negadas, alterações de configuração, acessos a dados sensíveis, eventos de sistema e de aplicação, com identificador, data/hora sincronizada e resultado. Boas práticas de registros: centralização (servidor dedicado), proteção contra edição/exclusão (somente leitura, cadeia de custódia), retenção compatível com obrigações, sincronização de hora e capacidade de análise — log que ninguém lê não detecta nada. Resposta a incidentes segue fases lógicas: 1) identificação (detecção e confirmação); 2) contenção (isolar sistemas, bloquear contas, preservar evidências, limitar o dano); 3) erradicação (remover causa: malware, backdoor, credencial comprometida, vulnerabilidade explorada); 4) recuperação (restaurar com verificação, monitorar com atenção redobrada); 5) lições aprendidas (relatório com causa, cronologia, melhorias e prazos). Ordem importa: erradicar sem conter espalha o dano; recuperar sem erradicar traz o incidente de volta. Evidências devem ser preservadas com registro de cadeia de custódia para eventual responsabilização.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Alerta indica login anômalo às 3h. Qual a sequência correta de primeira hora?", "resposta": "Confirmar o alerta (identificação), bloquear a sessão e revogar/rotacionar a credencial e sessões ativas (contenção), verificar lateral movement e persistências (preparação para erradicação), preservando registros — antes de qualquer reinstalação." },
                  { "tipo": "aplicacao", "enunciado": "Confirmou-se vazamento de planilha com dados pessoais de servidores. O que a equipe de segurança faz e o que o órgão precisa considerar?", "resposta": "Segurança: contenção (restringir acesso ao arquivo, revogar links, apagar cópias acessíveis), erradicação (corrigir permissão que permitiu o compartilhamento), recuperação e relatório. Órgão: registrar o incidente, avaliar comunicação a autoridade e aos titulares conforme dispositivo aplicável da LGPD (art. 46, verificado; a redação exata do dispositivo que trata da comunicação não foi verificada nesta sessão — confirmar em fonte oficial) e implementar as melhorias apontadas." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Basta reinstalar o sistema comprometido para encerrar o incidente.'", "correcao": "Errado. Sem contenção e erradicação de causa (credenciais, backdoors, vulnerabilidade explorada), a reinicialização devolve o sistema ao atacante; além disso, descaracteriza evidências." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Registros de auditoria devem permitir edição pelo administrador para correção de erros de digitação.", "resposta": "Errado. Registros íntegros não devem ser editáveis; correções são feitas por novo registro (entrada de ajuste) — edição destrói a rastreabilidade e o não repúdio." },
                  { "tipo": "multipla", "enunciado": "Qual fase isola sistemas e bloqueia contas para limitar o dano? A) Identificação; B) Contenção; C) Recuperação; D) Lições aprendidas.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u2-t3-s3",
                "titulo": "Antivírus, EDR e proteção de endpoints",
                "objetivoAprendizagem": "Aluno comparará antivírus por assinatura e solução EDR, indicando requisitos operacionais de cada um.",
                "conteudo": "Antivírus clássico compara amostras com base de assinaturas de malware conhecido; é leve e eficiente contra o conhecido, mas não enxerga ataque inédito. Soluções modernas de proteção de endpoints adicionam análise comportamental (heurística, aprendizado de máquina): observam ações suspeitas — processo escrevendo em muitos arquivos, tentativa de desabilitar proteção, injeção de código — e podem bloquear em tempo real. EDR (Endpoint Detection and Response) vai além: mantém telemetria contínua do endpoint (processos, conexões, alterações), permite investigação retroativa do que aconteceu e auxilia na resposta (isolamento remoto do host, matar processo, coletar evidências). Requisito operacional crítico: EDR gera dado, não decisão — sem equipe ou serviço de análise para triar alertas, o órgão paga licença e acumula alertas ignorados. Boas práticas: cobertura mínima declarada (inventário x instalação), atualização de mecanismos, políticas de exclusão mínimas e justificadas, integração com central de monitoramento e teste periódico de bloqueio. EDR não substitui correção de vulnerabilidades nem MFA: é camada, não base.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Um arquivo nunca visto começa a criptografar unidades de rede. Qual mecanismo provavelmente interrompe e por quê?", "resposta": "Proteção comportamental/EDR: sem assinatura correspondente, a decisão é por comportamento anômalo (escrita em massa, alteração de extensões), justamente o que mecanismos baseados só em assinatura não detectam." },
                  { "tipo": "aplicacao", "enunciado": "O órgão adquire EDR, instala em 40% das estações e não dimensiona triagem de alertas. Avalie o risco residual.", "resposta": "Cobertura parcial deixa 60% das estações sem telemetria — o atacante usa o lado fraco como entrada. Sem triagem, alertas de alto risco podem passar despercebidos. Ações: metas de cobertura com inventário confiável, responsável pela triagem, SLA interno de atendimento a alertas e teste de resposta." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'EDR detecta qualquer ataque, independentemente de operação humana.'", "correcao": "Errado. EDR é ferramenta de detecção e apoio à resposta; sua eficácia depende de implantação ampla, qualidade das regras e análise humana de alertas." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Proteção baseada apenas em assinaturas é suficiente contra ataque inédito (zero-day).", "resposta": "Errado. Assinatura descreve o já conhecido; contra inédito, a defesa depende de mecanismos comportamentais, correção preventiva e defesa em profundidade." },
                  { "tipo": "multipla", "enunciado": "Recurso típico de EDR (e não de antivírus clássico): A) atualização de assinaturas; B) investigação retroativa de eventos do endpoint; C) varredura por assinatura; D) bloqueio por lista branca simples.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-2-topico-4",
            "titulo": "Arquitetura de defesa: segmentação, hardening, vulnerabilidades e defesa em profundidade",
            "subtopicos": [
              {
                "id": "m4-u2-t4-s1",
                "titulo": "Segmentação de rede e hardening",
                "objetivoAprendizagem": "Aluno projetará segmentação de rede para conter movimentação lateral e enumerará ações de hardening de um servidor exposto.",
                "conteudo": "Segmentação de rede divide a rede em zonas com políticas distintas (por exemplo, estações, servidores de aplicação, banco de dados, convidados, dispositivos de voz), de modo que o comprometimento de uma zona não alcance automaticamente as demais — o ganho é redução do alcance do dano (blast radius) e da movimentação lateral. Mecanismos usuais: VLANs com ACLs, firewalls entre zonas (leste-oeste), microsegmentação quando o ambiente suporta. Hardening é reduzir a superfície de ataque de um ativo: desabilitar serviços, portas e contas não necessários; trocar credenciais padrão de fábrica; aplicar correções; restringir privilégios; remover software supérfluo; ativar registro de eventos; definir permissões mínimas de arquivos. Sequência prática de hardening de servidor web exposto: 1) inventário de serviços; 2) desativar tudo que não é requisito; 3) correções de sistema e aplicativo; 4) credenciais fortes e contas individuais; 5) filtro de acesso à gestão (apenas rede administrativa); 6) registro e backup da configuração; 7) varredura de verificação. Regra gerencial: hardening sem inventário e sem padrão documentado vira prática dependente de cada profissional.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Estação infectada alcança automaticamente todos os servidores da rede. Que falha arquitetural permitiu e como corrigir?", "resposta": "Ausência de segmentação: a rede plana faz da estação porta de entrada para tudo. Corrigir com zonas (estações X servidores) e ACL/firewall entre elas, permitindo apenas o tráfego necessário — por exemplo, estação fala com servidor web na porta 443, nunca com a porta de gestão do banco." },
                  { "tipo": "aplicacao", "enunciado": "Um dispositivo IoT de vídeo deve ficar na rede do órgão. Como segmentá-lo?", "resposta": "Zona própria (VLAN de dispositivos) com acesso somente ao servidor de gravação e à Internet se indispensável, negado para estações e servidores; credencial padrão trocada; firmware atualizado; gestão restrita à rede administrativa. Assim, comprometimento do câmera não abre caminho para a zona de dados." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Segmentar a rede significa criar VLANs e nada mais.'", "correcao": "Errado. VLAN sem políticas entre zonas apenas agrupa; segmentação efetiva exige controle de tráfego entre as zonas (ACLs/firewall), monitoramento e revisão de regras." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Trocar a senha padrão de fábrica é elemento de hardening.", "resposta": "Certo. Credencial padrão é vulnerabilidade conhecida e explorável em massa; a troca é um dos passos básicos de redução de superfície de ataque." },
                  { "tipo": "multipla", "enunciado": "Objetivo primário da segmentação de rede: A) aumentar velocidade; B) reduzir o alcance do dano em caso de comprometimento; C) substituir backup; D) eliminar a necessidade de MFA.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u2-t4-s2",
                "titulo": "Gestão de vulnerabilidades e correções",
                "objetivoAprendizagem": "Aluno descreverá o ciclo inventário–varredura–priorização–correção–verificação e priorizará vulnerabilidades combinando severidade e exposição.",
                "conteudo": "Gestão de vulnerabilidades é processo contínuo: 1) inventário de ativos (o que existe, quem é dono, onde roda); 2) varredura periódica (scanner de vulnerabilidade, atualizado) e, para aplicações, avaliação específica; 3) priorização; 4) correção (patch, mitigação ou aceite formal); 5) verificação de que a correção funcionou. Priorização não é só severidade técnica: combina severidade (impacto potencial) com exposição (o ativo está na Internet? dados sensíveis?) e com explorabilidade (existe exploração conhecida e facilitada?). Classificações públicas de vulnerabilidade (como os identificadores CVE) padronizam a referência, mas não substituem o contexto do órgão. Realidade operacional: nem todo patch entra imediatamente — correção pode quebrar aplicação legítima; por isso existem janelas de manutenção, testes em ambiente equivalente e, quando o risco de não corrigir supera o risco de corrigir, correção de emergência com acompanhamento. Mitigação alternativa quando o patch não existe ou não pode ser aplicado: desativar função afetada, restringir acesso, compensar com controle. Toda decisão (corrigir, mitigar, aceitar) deve ser registrada com responsável e prazo.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Vulnerabilidade crítica foi encontrada em servidor de aplicação exposto à Internet com dados pessoais. Como priorizar frente a outras da mesma semana?", "resposta": "Prioridade máxima: severidade alta + exposição externa + dados sensíveis + exploração facilitada. O critério de priorização documentado deve refletir essa combinação, e não apenas a nota do scanner." },
                  { "tipo": "aplicacao", "enunciado": "O patch disponível quebra módulo legado sem substituição prevista. Qual o caminho correto?", "resposta": "Testar em ambiente de homologação; se quebrar, aplicar mitigação (restringir acesso ao componente, desativar função afetada), registrar risco aceito formalmente com responsável e prazo, planejar substituição do legado e monitorar indicadores de exploração. Registro é obrigatório: aceite implícito não é gestão." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Aplicar todos os patches no dia da publicação é sempre a conduta correta.'", "correcao": "Errado como regra absoluta. Patches podem quebrar aplicações; a conduta é priorizar por risco, testar quando possível e registrar decisões — incluindo correção emergencial justificada quando a exposição é iminente." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Mitigação é aceitável temporariamente quando o patch não pode ser aplicado, desde que documentada com prazo.", "resposta": "Certo. Mitigação reduz o risco na janela até a correção definitiva; o registro com prazo e responsável impede que a exceção vire permanência." },
                  { "tipo": "multipla", "enunciado": "Qual fator, além da severidade técnica, deve entrar na priorização? A) Cor da interface; B) Exposição do ativo e sensibilidade dos dados; C) Nome do fabricante; D) Data de compra do equipamento.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u2-t4-s3",
                "titulo": "Defesa em profundidade",
                "objetivoAprendizagem": "Aluno argumentará pela sobreposição de camadas de controle e demonstrará como uma falha isolada não compromete o todo.",
                "conteudo": "Defesa em profundidade é o princípio de empregar múltiplas camadas independentes de controle, de modo que a falha de uma camada seja coberta por outra. Não se trata de duplicar o mesmo controle, mas de combinar controles de naturezas diferentes ao longo do caminho do ataque: perímetro (firewall, WAF), rede (segmentação, IDS/IPS), endpoint (EDR, correções), aplicação (validação de entrada, autenticação), dados (criptografia, backup imutável) e pessoas (treinamento, procedimentos). Exemplo de caminhos cobertos: phishing que escapa do filtro de e-mail esbarra em MFA; credencial vazada que autentica é limitada por menor privilégio e segmentação; movimentação lateral é vista pelo IDS e pelo monitoramento de registros; cifragem por ransomware é neutralizada por backup imutável fora do alcance. Custo-benefício: cada camada tem preço (licença, operação, desempenho), então a escolha das camadas deve seguir o risco mapeado — profundidade uniforme sem análise de risco desperdiça recursos; profundidade só no perímetro cria a casca dura com miolo mole. Princípio complementar: defesa supõe que intrusão ocorrerá — por isso detecção e resposta são parte da profundidade, não opcional.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Liste três camadas independentes que impedem o roubo de senha de um servidor público.", "resposta": "1) Filtro de e-mail e treinamento (reduzem phishing). 2) MFA resistente a phishing (impede uso da senha roubada sozinha). 3) Restrição de origem e monitoramento de login anômalo (contêm tentativa residual). Camadas de naturezas diferentes: pessoas, autenticação e rede." },
                  { "tipo": "aplicacao", "enunciado": "A gestão pede concentrar orçamento em um único controle 'que resolva o problema'. Como argumentar tecnicamente?", "resposta": "Apresentar o mapa de caminhos de ataque: nenhum controle único cobre todos os caminhos. Propor pacote mínimo com MFA, correção priorizada, segmentação básica, backup imutável testado e monitoramento — combinando prevenção, detecção e recuperação —, com justificativa de risco para cada camada e metas mensuráveis." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Defesa em profundidade significa ter dois firewalls iguais em série.'", "correcao": "Errado. Repetir o mesmo controle não cria camada nova: a mesma falha ou ataque que atravessa um atravessa o outro. Profundidade exige controles de naturezas distintas." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Backup imutável é uma camada de defesa em profundidade para ataques de ransomware.", "resposta": "Certo. É a camada de recuperação: quando prevenção e detecção falham, ela mantém a alternativa de restauração sem depender do atacante." },
                  { "tipo": "multipla", "enunciado": "Qual conjunto representa defesa em profundidade correta? A) Firewall + firewall; B) MFA + segmentação + backup testado + monitoramento; C) Antivírus em duas estações; D) Senha longa apenas.", "resposta": "B" }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-4-unidade-3",
        "titulo": "4.3 Ameaças e ataques",
        "topicos": [
          {
            "id": "modulo-4-unidade-3-topico-1",
            "titulo": "Engenharia social e fraudes de identidade",
            "subtopicos": [
              {
                "id": "m4-u3-t1-s1",
                "titulo": "Phishing, spear phishing e whaling",
                "objetivoAprendizagem": "Aluno diferenciará phishing, spear phishing e whaling pelos critérios de alvo e grau de personalização, e enumerará indicadores verificáveis de tentativa.",
                "conteudo": "Phishing é fraude em que o atacante se passa por entidade confiável para induzir a vítima a revelar credenciais, dados ou a executar ação (pagamento, habilitação de macro, instalação). Caracteriza-se por imitação de aparência, apelo emocional e urgência, e canal de grande volume (e-mail em massa, SMS, mensagens). Spear phishing é a versão direcionada: o atacante pesquisa o alvo (site do órgão, lista de servidores, redes sociais) e personaliza a mensagem — remetente plausível, referência a processo real, anexo com nome corriqueiro. Whaling é o spear phishing dirigido a autoridades e altas lideranças (caça baleias), onde o ganho e o impacto institucional são maiores e o disfarce usa agendas, decisões e ritos do alto escalão. Indicadores verificáveis: remetente que não corresponde ao domínio real, urgência artificial, pedido fora de procedimento, link cujo texto diverge do endereço real, anexo inesperado, erros de português (menos frequente em ataques sofisticados), pedido de sigilo. Defesa combinada: filtro, MFA, treinamento com simulações defensivas, procedimento de dupla verificação para pagamentos e mudanças de cadastro.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Mensagem genérica a 50 mil endereços imitando o banco; e-mail personalizado ao diretor citando processo licitatório real. Classifique os dois.", "resposta": "Primeiro: phishing em massa. Segundo: spear phishing (personalizado com informação real do alvo). Se o alvo fosse a autoridade máxima do órgão, whaling." },
                  { "tipo": "aplicacao", "enunciado": "O setor recebe e-mail do 'contabil' pedindo troca urgente de dados bancários para pagamento de fornecedor. Que verificações independentes impedem a fraude?", "resposta": "1) Confirmar por canal conhecido e diferente do e-mail (telefone cadastrado, presencial). 2) Conferir o domínio real do remetente, não o nome exibido. 3) Aplicar regra de procedimento: troca bancária exige dupla autorização e cadastro com verificação. Nenhuma verificação usa o canal do atacante." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Se a mensagem não tem erros de ortografia, é legítima.'", "correcao": "Errado. Texto fluente não é evidência de autenticidade; ataques sofisticados são redigidos com cuidado (e até com auxílio de tecnologia). A autenticidade verifica-se por canal e por domínio, não por qualidade do texto." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Whaling é phishing dirigido a alvos de alto escalão.", "resposta": "Certo. O nome vem da 'caça às baleias': alvos são autoridades e lideranças, com personalização alta." },
                  { "tipo": "multipla", "enunciado": "Diferença decisiva entre phishing e spear phishing: A) o canal (e-mail); B) o grau de personalização e direcionamento ao alvo; C) a exigência de pagamento; D) o uso de marca imitada.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u3-t1-s2",
                "titulo": "Pharming, spoofing e fraude por impersonação",
                "objetivoAprendizagem": "Aluno diferenciará pharming de phishing pelo vetor (redirecionamento x persuasão) e identificará formas de spoofing relevantes para o serviço público.",
                "conteudo": "Pharming redireciona o usuário ao site falso sem que ele perceba: o endereço digitado é legítimo, mas a resolução é corrompida (envenenamento de cache DNS, alteração de arquivo de hosts, roubo de roteador, malware local). A vítima 'visita' o site certo e entrega a senha no site errado — por isso pharming dispensa a persuasão da vítima. Spoofing é a falsificação de um identificador: endereço de e-mail (nome exibido e até domínio, quando não autenticado), endereço de origem de pacotes, número de telefone em chamadas, identificação de aparelho. Impersonação (roubo de persona) é a falsificação de pessoa: atacante se passa por gestor, colega ou fornecedor para obter ação (liberação de pagamento, envio de dados, credenciais). Conexões importantes: e-mail sem SPF/DKIM/DMARC é vulnerável a spoofing (mecanismos tratados no Módulo 3); ligações com identificação falsa exploram confiança em autoridade. Defesa: autenticação de domínio no e-mail, verificação por canal independente para ações sensíveis, MFA e treinamento focado em pedidos fora do fluxo.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "O usuário digita o endereço correto do portal e chega a uma cópia idêntica que pede login. Phishing ou pharming?", "resposta": "Pharming: o vetor é o redirecionamento da resolução (DNS/envenenamento local), não a persuasão por mensagem. O indício é o endereço exibido estar correto ou levemente alterado." },
                  { "tipo": "aplicacao", "enunciado": "Autorização por e-mail pede pagamento urgente assinada pelo gestor. Como blindar o processo contra impersonation?", "resposta": "1) Autenticação do domínio remetente (SPF/DKIM/DMARC com política rígida). 2) Regra institucional: pedidos de pagamento seguem sistema de fluxo com autenticação forte, nunca só e-mail. 3) Confirmação por canal previamente cadastrado. 4) Registro de tudo para auditoria." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Mostrar o nome correto do órgão no e-mail prova que a mensagem veio dele.'", "correcao": "Errado. O nome exibido é texto livre, falsificável; a autenticidade depende de verificação de domínio (SPF/DKIM/DMARC) e, para ações sensíveis, de confirmação por canal independente." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Pharming exige que o usuário clique em link de mensagem fraudulenta.", "resposta": "Errado. Pharming ataca a resolução/redirecionamento; o usuário digita o endereço correto e ainda assim é levado ao site falso." },
                  { "tipo": "multipla", "enunciado": "Falsificar o número de telefone que aparece na chamada é exemplo de: A) pharming; B) spoofing; C) watering hole; D) typosquatting.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u3-t1-s3",
                "titulo": "Pretexting, baiting e princípios de manipulação",
                "objetivoAprendizagem": "Aluno reconhecerá pretexting e baiting, relacionará os princípios psicológicos explorados e desenhará treinamento defensivo com simulação.",
                "conteudo": "Engenharia social explora características humanas, não falhas de máquina. Pretexting: o atacante constrói um cenário fictício crível (pesquisa, auditoria, novo colega do TI, urgência do gestor) e conduz a vítima a cumprir o roteiro — é a base das fraudes de pedidos urgentes em nome do gestor e dos golpes de suporte técnico por telefone. Baiting: oferta física ou digital irresistível que induz à curiosidade — pen drive abandonado na recepção, 'brinde' com programa malicioso, cabo USB com logotipo do órgão; a vítima inicia a ação por conta própria. Princípios psicológicos explorados: autoridade (pedido vem de cima), urgência (decidir sem checar), confiança/aparência de rotina, reciprocidade (favor prévio), medo de consequência (multa, suspensão). Defesa prática: procedimentos escritos que obriguem verificação por canal independente para ações sensíveis, canal oficial de denúncia de tentativas, simulações defensivas periódicas com feedback (sem punição, para que relato seja a norma), e autorização explícita para o servidor dizer 'não' a pedido fora do procedimento. Nota de escopo: este material não ensina a executar ataques; o objetivo é reconhecimento, prevenção e resposta.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Ligação de alguém que se apresenta do 'suporte interno', pedindo senha para 'concluir migração'. Identifique a técnica e o princípio explorado.", "resposta": "Pretexting (cenário fictício de suporte) explorando autoridade e urgência. Defesa: suporte legítimo nunca pede senha; confirmação deve ser feita por canal oficial conhecido pelo funcionário." },
                  { "tipo": "aplicacao", "enunciado": "O órgão quer medir a eficácia do treinamento. Desenhe uma campanha defensiva ética.", "resposta": "Simulação com mensagem fictícia inofensiva (sem coleta de senha real, sem malware), registro de cliques por setor, feedback imediato explicando indicadores, rodada de reforço para quem caiu — sem identificar publicamente — e relatório gerencial com evolução temporal. Objetivo: mudança de comportamento, não vergonha." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Funcionário que cai em golpe deve ser punido publicamente para servir de exemplo.'", "correcao": "Errado do ponto de vista de segurança: punição pública reduz o relato de incidentes, que é a matéria-prima da defesa. A conduta correta é feedback privado, treinamento e melhoria de processos." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Pen drive abandonado na recepção que instala código malicioso é vetor de baiting.", "resposta": "Certo. O 'isca' (bait) induz a vítima a conectar o dispositivo por curiosidade ou conveniência." },
                  { "tipo": "multipla", "enunciado": "Atacante finge ser colega recém-transferido e pede acesso 'provisório'. Técnica: A) baiting; B) pretexting; C) DDoS; D) tailgating físico apenas.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-3-topico-2",
            "titulo": "Ataques a credenciais, à disponibilidade e à comunicação",
            "subtopicos": [
              {
                "id": "m4-u3-t2-s1",
                "titulo": "Força bruta, password spraying e credential stuffing",
                "objetivoAprendizagem": "Aluno diferenciará os três ataques pela distribuição de tentativas e indicará defesas específicas para cada um.",
                "conteudo": "Força bruta testa muitas senhas contra UMA conta, automatizadamente, até acertar; exige tempo e gera volume de falhas visível naquela conta. Password spraying ('borrifado') testa poucas senhas comuns (uma ou duas) contra MUITAS contas, evitando bloqueios por tentativas falhas — já que faz apenas poucas tentativas em cada conta; é silencioso se a política só conta falhas por conta. Credential stuffing usa pares usuário-senha vazados em outros serviços e a reutilização de senhas pelo usuário: não é quebra de senha, é exploração de hábito — funciona porque as credenciais são reais. Defesas por ataque: contra força bruta — limite de tentativas com bloqueio progressivo e alerta; contra spraying — monitoramento de volume de falhas por origem e por conjunto de contas, janelas de bloqueio curtas por origem; contra stuffing — MFA (impede uso da senha roubada), senhas únicas por serviço (gerenciador), verificação de exposição de credenciais, alerta de login de local incompatível. Ponto crítico: MFA é a defesa mais efetiva contra stuffing; senha única é a defesa mais efetiva contra propagação do dano quando há vazamento.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Milhares de falhas de login em contas distintas, 2 tentativas por conta, vindas de poucos endereços. Que ataque é esse?", "resposta": "Password spraying: volume baixo por conta (evita bloqueio), volume alto entre contas, origem concentrada. O monitoramento por origem e por contas-alvo é o que o revela." },
                  { "tipo": "aplicacao", "enunciado": "Vazamento externo expôs senhas de colaboradores que reutilizaram a senha do portal. Qual defesa teria barrado o acesso e qual reduz o dano?", "resposta": "Barraria o acesso: MFA, pois a senha roubada sozinha não autentica. Reduz o dano: senha única por serviço (gerenciador), impedindo que o vazamento de um serviço valide outro." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Credential stuffing é o mesmo que força bruta.'", "correcao": "Errado. Força bruta gera tentativas contra uma conta; credential stuffing usa credenciais reais vazadas em massa, sem quebrar nada — por isso sem MFA e com reutilização de senhas ela funciona escala." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Bloquear a conta após 5 falhas consecutivas é defesa eficaz contra password spraying.", "resposta": "Errado como defesa isolada: o spraying faz poucas tentativas por conta justamente para não disparar bloqueio; é preciso monitorar o padrão agregado por origem e por conjunto de contas." },
                  { "tipo": "multipla", "enunciado": "Qual ataque NÃO depende de descobrir senha nova, e sim de testar senhas já vazadas? A) Força bruta; B) Credential stuffing; C) Phishing; D) DoS.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u3-t2-s2",
                "titulo": "DoS e DDoS",
                "objetivoAprendizagem": "Aluno diferenciará DoS de DDoS pela origem do tráfego, descreverá as camadas de esgotamento e enumerará contramedidas defensivas.",
                "conteudo": "DoS (Denial of Service) busca tornar o serviço indisponível esgotando um recurso: banda, conexões simultâneas, memória, tempo de processamento. DDoS (Distribuito) faz o mesmo a partir de muitas origens coordenadas — tipicamente uma botnet ou serviços de reflexão/amplificação —, o que dilui o tráfego e torna o bloqueio por origem ineficaz. Taxonomia por camada: volumétrico (saturar banda, ex.: UDP amplification); de protocolo (esgotar tabelas de estado/firewall, ex.: SYN flood); de aplicação (consumir servidor web com requisições caras, ex.: many requests that demand database lookup). Defesa em camadas: 1) redundância e escala (absorver picos); 2) filtros e rate limiting no perímetro; 3) serviço de mitigação/scrubbing com anúncio de prefixo; 4) aplicação resistente (limites de requisição, cache, limitação de custo por operação); 5) monitoramento com planos de acionamento. Nota de integridade profissional: simulações didáticas usam ambientes isolados e dados fictícios; jamais se executa ataque real contra sistemas de terceiros — inclusive por curiosidade acadêmica, o que é conduta sujeita a responsabilização.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "O site do órgão cai com tráfego vindo de milhares de IPs. DoS ou DDoS? Por quê?", "resposta": "DDoS: a multiplicidade de origens coordenadas é a característica; bloquear um IP é inútil e a resposta exige filtragem no provedor ou serviço de mitigação." },
                  { "tipo": "aplicacao", "enunciado": "Durante abertura de inscrições, o formulário é bombeado com requisições pesadas que sobrecarregam o banco. Que camada de ataque e que defesa?", "resposta": "Ataque de camada de aplicação (7): consome CPU/banco com requisições individualmente válidas. Defesa: limitação de taxa por sessão e origem, cache de páginas públicas, fila com capacidade declarada, verificação de automatização e limitação do custo de cada consulta no projeto do formulário." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Bloquear o IP de origem resolve um DDoS.'", "correcao": "Errado. Em DDoS as origens são dispersas (e frequentemente de máquinas inocentes); a mitigação depende de filtragem distribuída, capacidade extra e mitigação no provedor." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Um ataque SYN flood é classificado como ataque de camada de protocolo/transporte.", "resposta": "Certo. Ele esgota o estado de conexões (tabela do firewall/servidor) no handshake TCP, sem completar a abertura." },
                  { "tipo": "multipla", "enunciado": "O que distingue DDoS de DoS? A) O alvo ser servidor web; B) Múltiplas origens coordenadas; C) O uso de criptografia; D) A duração superior a uma hora.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u3-t2-s3",
                "titulo": "Ataques de intermediário e interceptação",
                "objetivoAprendizagem": "Aluno explicará o mecanismo do ataque de intermediário (MITM) e relacionará cada técnica a uma contramedida específica.",
                "conteudo": "Em um ataque de intermediário (Man-in-the-Middle, MITM), o atacante fica no caminho entre vítima e destino e passa a ler, modificar ou retardar o tráfego, muitas vezes sem que as pontas percebam. Técnicas comuns: envenenamento ARP (o atacante anuncia ser o gateway para a vítima); ponto de acesso sem fio falsificado (evil twin) com nome atraente; spoofing de DNS ou envenenamento de cache; proxy malicioso; downgrading de segurança (sslstrip) forçando a versão sem criptografia. Efeito: credenciais e sessões podem ser capturadas, e conteúdo pode ser alterado em trânsito (por exemplo, troca de número de conta em formulário). Contramedidas por vetor: TLS correto e verificado (cadeia de certificados íntegra, sem ignorar avisos); HSTS para evitar downgrade; autenticação de Wi-Fi do órgão e recusa de redes abertas para trabalho; proteção de ARP/segmentação; VPN para acesso remoto. Diagnóstico útil: certificado aviso em site legítimo pode indicar interceptação ativa — e não deve ser ignorado; ignorar aviso de certificado é entregar a chave da porta ao intermediário.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "No wi-fi público, usuário acessa o portal do órgão e vê aviso de certificado, que decide ignorar. O que está acontecendo e o que ele fez?", "resposta": "Provável interceptação ativa (MITM com certificado próprio, aceito pelo usuário). Ao ignorar o aviso, ele validou o certificado do atacante e entregou credenciais/sessão. Conduta correta: abortar, não confiar e usar canal criptografado confiável (VPN)." },
                  { "tipo": "aplicacao", "enunciado": "Relatórios indicam que contas estão sendo vistas por terceiros sem login suspeito. Que hipótese MITM verificar?", "resposta": "Verificar: sessões roubadas por interceptação (HTTP sem TLS, downgrade), envenenamento ARP na rede local, proxy instalado no cliente, extensão/malware no navegador. Correções: exigir TLS ponta a ponta, corrigir HSTS, remover malware, educar sobre avisos de certificado." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'MITM e phishing são a mesma técnica.'", "correcao": "Errado. Phishing induz a vítima a entregar dados em um canal falso; MITM ocupa o caminho legítimo entre as pontas. Podem ser combinados, mas o mecanismo difere — e as defesas também." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Aceitar o aviso de certificado inválido em site do órgão pode viabilizar ataque de intermediário.", "resposta": "Certo. O aviso indica que a cadeia de confiança não fecha; aceitá-lo equivale a confiar no certificado apresentado, que pode ser do atacante." },
                  { "tipo": "multipla", "enunciado": "Qual técnica MITM ataca a resolução de nomes, redirecionando o usuário sem alterar o navegador? A) Envenenamento ARP; B) Envenenamento/spoofing de DNS; C) SYN flood; D) Credential stuffing.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-3-topico-3",
            "titulo": "Comprometimento, indicadores e resposta",
            "subtopicos": [
              {
                "id": "m4-u3-t3-s1",
                "titulo": "Vazamento de dados, roubo de identidade e comprometimento de contas",
                "objetivoAprendizagem": "Aluno descreverá a cadeia vazamento → reutilização → comprometimento de conta e enumerará as primeiras ações de contenção e os deveres de transparência do órgão.",
                "conteudo": "Vazamento de dados é a divulgação não autorizada de informação (bases, planilhas, configurações expostas, backup público). Roubo de identidade usa dados pessoais vazados para se passar por alguém (abrir conta, obter serviço, solicitar benefício); no serviço público, o dano inclui desvio de benefícios e fraude cadastral. Comprometimento de conta é o controle indevido de uma conta real (por reutilização, phishing, malware ou interceptação) e costuma ser a porta para movimentação lateral e abuso de confiança (envio de ordens em nome do servidor). Cadeia típica: vazamento → credenciais testadas em massa (stuffing) → conta tomada → abuso de permissão. Primeiras ações pelo órgão: bloquear/rotacionar credenciais e sessões afetadas, restringir acesso ao dado exposto, preservar registros, identificar o escopo (quem, o quê, quantos), registrar o incidente e avaliar comunicação à autoridade e aos titulares conforme os dispositivos aplicáveis da LGPD — o art. 46 (verificado) impõe medidas de segurança; o dispositivo específico que trata da comunicação de incidente deve ser conferido na fonte oficial, pois não foi verificado nesta sessão. Transparência sem pânico: comunicar fatos confirmados, riscos e medidas — não especulações.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Planilha com dados de servidores foi publicada em pasta de compartilhamento público por 3 dias. Classifique e liste o escopo a apurar.", "resposta": "Vazamento por exposição indevida de acesso. Escopo: quais dados (pessoais? sensíveis?), quantos titulares, quem acessou (registros), período de exposição, causa raiz (permissão ampla demais) e medidas de contenção imediata." },
                  { "tipo": "aplicacao", "enunciado": "Credenciais de dezenas de servidores apareceram em lista pública. O que fazer nas primeiras horas?", "resposta": "Forçar troca de senhas, revogar sessões, exigir MFA nas contas afetadas, bloquear acessos fora do padrão, monitorar ações recentes dessas contas, registrar o incidente e notificar responsáveis — sem esperar que 'alguém use', pois o teste automatizado pode ocorrer minutos após a publicação." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Vazamento só gera risco de privacidade; sem fraude concreta, não há nada a fazer.'", "correcao": "Errado. Vazamento cria risco imediato de reutilização de credenciais e de identidade; além disso, gera deveres de resposta e transparência. Inação transforma risco em incidente." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Revogar sessões ativas é parte da contenção de comprometimento de conta.", "resposta": "Certo. Trocar senha sem revogar sessões deixa o atacante autenticado; a revogação encerra o que já estava aberto." },
                  { "tipo": "multipla", "enunciado": "Cadeia correta: A) comprometimento → vazamento → identidade; B) vazamento → reutilização de credenciais → comprometimento de conta; C) phishing → ransomware obrigatoriamente; D) roubo de identidade → vazamento.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u3-t3-s2",
                "titulo": "Indicadores de comprometimento (IoC)",
                "objetivoAprendizagem": "Aluno classificará indicadores de comprometimento por tipo, explicará a diferença entre indicador e evidência e discutirá os limites da detecção baseada em listas.",
                "conteudo": "Indicadores de comprometimento (IoCs) são artefatos observáveis associados a ataque: hash de arquivo malicioso, domínio ou endereço de comando e controle, endereço IP de atacante, nome de arquivo suspeito, chave de registro alterada, sequência de eventos (login fora do padrão + elevação de privilégio + acesso a pasta sensível). Uso prático: lista de verificação (blocklist) em filtros, EDR e IDS; correlação em central de monitoramento; apoio à triagem do analista. Limites essenciais: 1) IoC é majoritariamente retroativo — só é conhecido depois que o ataque foi observado; 2) IPs e domínios legítimos podem ser reutilizados, gerando falsos positivos; 3) atacante que muda de ferramenta 'some' das listas — por isso a detecção avançada trabalha com padrões de comportamento (TTPs: táticas, técnicas e procedimentos), que são mais difíceis de mudar. Distinção conceitual para prova: indicador é pista; evidência é pista preservada e autenticada, apta a sustentar responsabilização. IoC sem contexto não prova comprometimento; contexto temporal + múltiplos indicadores sustentam a hipótese e orientam a resposta.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Lista de bloqueio contém domínio usado por malware ontem. Se o tráfego hoje for bloqueado, isso prova infecção local?", "resposta": "Não. Prova apenas tentativa/contato com domínio listado; a confirmação de comprometimento exige correlação com processos, arquivos e comportamento do host — múltiplos indicadores em contexto." },
                  { "tipo": "aplicacao", "enunciado": "Logs mostram: login legítimo às 14h, novo acesso 14h07 de outro estado, criação de conta e envio em massa de e-mails. Interprete.", "resposta": "Sequência suspeira de comprometimento: acesso tomado + movimentação + abuso de função (conta de e-mail como ferramenta de ataque). Ações: bloquear conta, coletar indicadores (origem, hashes de anexos enviados), varrer sessões similares e propagar detecção a toda a base." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Se o antivírus não alertou, não houve comprometimento.'", "correcao": "Errado. Ausência de alerta não é prova negativa: ataque pode ser inédito, ferramenta desativada ou vetor não coberto. A avaliação usa registros, comportamento e múltiplas fontes — não apenas assinatura." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Padrão de comportamento (TTP) é mais estável que IP de atacante para detecção de longo prazo.", "resposta": "Certo. IP/domínio mudam com facilidade; a forma de atuar (técnicas e sequências) muda menos e sustenta detecção comportamental." },
                  { "tipo": "multipla", "enunciado": "Melhor descrição de IoC: A) prova judicial do crime; B) artefato observável usado como pista de detecção; C) relatório final de auditoria; D) política de segurança.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u3-t3-s3",
                "titulo": "Análise segura de mensagens, links e anexos",
                "objetivoAprendizagem": "Aluno executará procedimento de triagem de mensagem suspeita sem se expor ao risco e justificará cada passo.",
                "conteudo": "Procedimento defensivo de triagem (executar apenas em ambiente controlado; nenhum passo visa explorar terceiros): 1) Identificação do remetente: conferir domínio real, não o nome exibido; verificar autenticação do e-mail quando disponível. 2) Análise do conteúdo: pedido urgente, sigilo, ação fora do procedimento, discrepância de endereço bancário. 3) Links: passar o cursor e ler o endereço real sem clicar; conferir se o domínio imita o oficial (troca de letras, subdomínios extras); digitá-lo manualmente se houver necessidade legítima de acesso. 4) Anexos: não abrir em máquina de produção; extensões executáveis disfarçadas (dupla extensão) são suspeitas; documentos com instrução de habilitar macro não devem ter macro habilitada. 5) Encaminhamento: usar o canal oficial de denúncia do órgão, sem repassar a colegas. 6) Se clicou ou abriu: isolar, informar TI imediatamente, trocar credenciais a partir de outro dispositivo. Análise técnica profunda (abrir em máquina virtual, extrair hash) é papel de equipe treinada com ambiente isolado — usuário comum não faz isso.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "E-mail traz anexo 'Relatorio.pdf.exe' com aviso de 'documento bloqueado'. Decisão correta?", "resposta": "Não abrir: a dupla extensão indica executável disfarçado. Encaminhar ao canal oficial de denúncia do órgão e informar colegas do setor sem repassar o anexo." },
                  { "tipo": "aplicacao", "enunciado": "Servidor recebe e-mail com link para 'atualizar cadastro'. Descreva a triagem sem risco.", "resposta": "Conferir domínio do remetente; passar cursor sobre o botão e comparar o domínio real com o oficial; não digitar dados; acessar o portal digitando o endereço conhecido; se já digitou dados, reportar imediatamente para bloqueio e troca de senha. Nunca usar o link da mensagem." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Para saber se é vírus, posso abrir o anexo no computador do setor e fechar se parecer estranho.'", "correcao": "Errado. A execução já ocorre ao abrir; fechar a janela não desfaz infecção. Anexos suspeitos são reportados, não executados — a análise é feita em ambiente isolado por equipe treinada." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Passar o cursor sobre um link (sem clicar) para ler o endereço real é medida segura de triagem.", "resposta": "Certo. Revela o domínio verdadeiro de destino; ainda assim, a ação correta para acesso legítimo é digitar o endereço oficial manualmente." },
                  { "tipo": "multipla", "enunciado": "E-mail do 'banco' com link. Qual ação é a mais segura para verificar a legitimidade? A) Clicar e ver se o site parece bom; B) Digitar o endereço oficial do banco no navegador; C) Responder pedindo confirmação; D) Encaminhar ao colega para opinião.", "resposta": "B" }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-4-unidade-4",
        "titulo": "4.4 Legislação e conformidade",
        "topicos": [
          {
            "id": "modulo-4-unidade-4-topico-1",
            "titulo": "LGPD — Lei nº 13.709/2018",
            "subtopicos": [
              {
                "id": "m4-u4-t1-s1",
                "titulo": "Objeto, aplicação, sujeitos e conceitos da LGPD",
                "objetivoAprendizagem": "Aluno aplicará os arts. 1º, 3º, 4º e 5º da LGPD (verificados) para classificar sujeitos e situações de tratamento em cenários do serviço público.",
                "conteudo": "A Lei nº 13.709/2018 (LGPD) dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade (art. 1º — verificado em referencias/referencias-verificadas.md, texto oficial planalto.gov.br, 2026-10-20). Aplicação (art. 3º — verificado): alcança operação de tratamento no território nacional, atividade de oferta/fornecimento de bens, serviços ou tratamento de indivíduos localizados no Brasil e dados coletados no território nacional. Exceções (art. 4º — verificado): I — pessoa natural para fins exclusivamente particulares e não econômicos; II — finalidades exclusivamente jornalísticas, artísticas ou acadêmicas; III — finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão de infrações penais, com ressalvas dos §§ 1º e 2º do artigo. Conceitos do art. 5º (verificado): dado pessoal (I), dado pessoal sensível — origem racial/étnica, convicção religiosa, opinião política, filiação sindical e dados sobre saúde ou vida sexual, entre outros (II), dado anonimizado (III), banco de dados (IV), titular (V), controlador (VI), operador (VII), encarregado (VIII), agentes de tratamento (IX) e relatório de impacto à proteção de dados pessoais (X). No serviço público, o órgão costuma atuar como controlador (define finalidade e meios) e o prestador de tecnologia como operador (trata em nome do controlador) — a classificação determina deveres de cada parte.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Prefeitura contrata empresa para hospedar sistema de cadastro único. Quem é controlador e quem é operador?", "resposta": "A prefeitura define finalidade e meios essenciais do tratamento (controlador); a empresa processa os dados conforme instruções do contrato (operador). A contratação deve disciplinar segurança e instruções documentadas (art. 46 — verificado impõe medidas de segurança aos agentes)." },
                  { "tipo": "aplicacao", "enunciado": "Sistema registra opinião política de servidores para fins de gestão de equipe. Como a LGPD trata esse dado?", "resposta": "Opinião política é dado pessoal sensível (art. 5º, II — verificado). Dado sensível tem regime mais restritivo que o dado comum; tratá-lo exige atenção redobrada a base legal adequada e a necessidade — recomenda-se evitar a coleta quando a finalidade administrativa não a justifica (minimização)." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'A LGPD não se aplica a órgãos públicos, pois eles tratam dados por obrigação legal.'", "correcao": "Errado. O art. 1º menciona expressamente pessoa jurídica de direito público (verificado); órgãos públicos são agentes de tratamento. O art. 4º, III, prevê exceção para finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão de infrações penais — exceção específica, não regra geral para a administração." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Dado anonimizado é, pela definição do art. 5º, III da LGPD, aquele que perdeu a possibilidade de identificação, salvo uso de método reversível.", "resposta": "Certo (síntese da definição verificada): anonimização deve impedir a identificação por meios razoáveis; se o método for reversível, o dado continua tratável como pessoal — por isso anonimização e pseudonimização não são sinônimos." },
                  { "tipo": "multipla", "enunciado": "Pela LGPD, quem define finalidade e meios essenciais do tratamento é: A) titular; B) encarregado; C) controlador; D) operador.", "resposta": "C" }
                ]
              },
              {
                "id": "m4-u4-t1-s2",
                "titulo": "Fundamentos, titularidade e direitos do titular",
                "objetivoAprendizagem": "Aluno enumerará os fundamentos e os direitos do titular (arts. 2º, 17 e 18 — verificados) e descreverá como um órgão público atende cada direito na prática.",
                "conteudo": "Fundamentos da LGPD (art. 2º — verificado): respeito à privacidade (I); autodeterminação informativa (II); liberdade de expressão, informação, comunicação e opinião (III); inviolabilidade da intimidade, honra e imagem (IV); desenvolvimento econômico, tecnológico e inovação (V); livre iniciativa, livre concorrência e defesa do consumidor (VI); direitos humanos, desenvolvimento da personalidade, dignidade e cidadania (VII). Titularidade (art. 17 — verificado): toda pessoa natural tem assegurada a titularidade de seus dados pessoais e garantidos os direitos fundamentais de liberdade, intimidade e privacidade. Direitos do titular (art. 18 — verificado): I — confirmação da existência de tratamento; II — acesso aos dados; III — correção de dados incompletos, inexatos ou desatualizados; IV — anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade; V — portabilidade dos dados; VI — informação sobre entidades com as quais houve compartilhamento; VII — informação sobre a possibilidade de não fornecer consentimento e suas consequências; VIII — revogação do consentimento. Na prática administrativa, esses direitos se exercitam por pedido formal, com identificação do titular e prazo interno de resposta documentado; a transparência ativa reduz a carga de pedidos ao publicar informações de ofício. Cuidado didático: este material não oferece aconselhamento jurídico; casos concretos seguem a orientação da autoridade competente e da assessoria jurídica do órgão.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Cidadão pede confirmação se o órgão trata dados dele. Que direito é esse e como atender?", "resposta": "Direito de confirmação (art. 18, I — verificado). Atendimento: canal formal, identificação do titular, verificação nos sistemas, resposta objetiva registrando existência ou inexistência de tratamento e finalidade correspondente." },
                  { "tipo": "aplicacao", "enunciado": "Servidor identifica dados desatualizados em cadastro interno. Quais direitos cabem e qual a resposta esperada?", "resposta": "Correção (art. 18, III — verificado) e, se o dado for excessivo para a finalidade, eliminação ou anonimização (art. 18, IV — verificado). A correção deve refletir-se em todas as bases relacionadas, com registro da alteração." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'O titular pode exigir exclusão de qualquer dado que o órgão mantém por obrigação legal.'", "correcao": "Errado. Direitos do titular são exercidos dentro do regime legal: dados mantidos por obrigação legal ou para exercício regular de direitos podem não ser elimináveis — a fundamentação deve ser verificada caso a caso; a eliminação não é poder absoluto." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Portabilidade dos dados é direito previsto no art. 18 da LGPD.", "resposta": "Certo. Está no inciso V do art. 18 (verificado)." },
                  { "tipo": "multipla", "enunciado": "Direito que NÃO consta do art. 18 (verificado): A) confirmação; B) acesso; C) eliminação de dados excessivos; D) indenização automática por dano moral.", "resposta": "D" }
                ]
              },
              {
                "id": "m4-u4-t1-s3",
                "titulo": "Segurança, incidentes e a LGPD no dia a dia do órgão",
                "objetivoAprendizagem": "Aluno relacionará o art. 46 da LGPD às medidas técnicas e administrativas de um órgão e distinguirá o que a lei exige do que é boa prática recomendável.",
                "conteudo": "O art. 46 da LGPD (verificado) determina que os agentes de tratamento adotem medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas — destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito. Transposição prática: técnicas (autenticação forte, criptografia em repouso e em trânsito, controle de acesso por perfil, registro de auditoria, backup imutável) e administrativas (política de acesso, contratos com operadores, treinamento, procedimento de resposta a incidentes, gestão de licenças e saídas). A LGPD também trata da comunicação de incidentes à autoridade e aos titulares em dispositivo próprio — a redação exata e o prazo desse dispositivo NÃO foram verificados nesta sessão (a verificação disponível cobre os arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46); antes de citar número de artigo ou prazo, confirme em fonte oficial (planalto.gov.br) e registre a data. Distinção essencial para concursos: 'a lei exige' só pode ser afirmado com o dispositivo verificado; 'boa prática recomenda' é outra categoria. Relação com a LAI: o art. 23 da LGPD menciona expressamente a Lei nº 12.527/2011 (LAI) — confirmado no texto oficial —, articulando acesso a informação pública e proteção de dados pessoais.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Que categorias de medidas o art. 46 exige?", "resposta": "Medidas técnicas E administrativas aptas a proteger dados de acessos não autorizados e de situações acidentais ou ilícitas (redação verificada). Ambas as categorias são exigidas; uma sem a outra atende parcialmente." },
                  { "tipo": "aplicacao", "enunciado": "Após confirmar vazamento de dados pessoais, o que fazer em relação à LGPD?", "resposta": "Conter, erradicar e registrar o incidente; consultar o dispositivo da LGPD que trata da comunicação (não verificado nesta sessão — confirmar em fonte oficial) para prazo e destinatários; comunicar fatos confirmados; documentar medidas adotadas. Em paralelo, aplicar o art. 46 como parâmetro de adequação das medidas que faltavam." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'A LGPD determina comunicação de incidente em até 3 dias úteis.'", "correcao": "Afirmativa não verificável nesta sessão: o dispositivo específico da LGPD sobre comunicação de incidentes e seu prazo NÃO constam do arquivo de referências verificadas (que cobre arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46). Não repita prazo decorado de memória sem conferir a redação atual em fonte oficial." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) O art. 46, verificado, impõe medidas de segurança técnicas e administrativas aos agentes de tratamento.", "resposta": "Certo — redação confirmada no texto oficial em 2026-10-20 (referencias/referencias-verificadas.md)." },
                  { "tipo": "multipla", "enunciado": "Medida administrativa de proteção de dados (art. 46): A) criptografia de disco; B) política de acesso e treinamento; C) firewall de pacotes; D) IDS.", "resposta": "B" }
                ]
              }
            ]
          },
          {
            "id": "modulo-4-unidade-4-topico-2",
            "titulo": "Marco Civil, articulação normativa e limites das afirmações",
            "subtopicos": [
              {
                "id": "m4-u4-t2-s1",
                "titulo": "Marco Civil da Internet — Lei nº 12.965/2014",
                "objetivoAprendizagem": "Aluno situará o Marco Civil no ordenamento de direitos digitais e distinguirá seu objeto do objeto da LGPD, com marcação explícita do grau de verificação.",
                "conteudo": "O Marco Civil da Internet é a Lei nº 12.965/2014, que estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil — enquadramento geral verificado no texto oficial do planalto.gov.br em 2026-10-23 (Bloco 3 de referencias-verificadas.md) — arts. 2º (fundamentos), 3º (princípios), 7º (direitos do usuário), 9º, § 3º (vedação de bloquear, monitorar, filtrar ou analisar o conteúdo dos pacotes de dados, ressalvado o disposto no artigo), 15 (guarda de registros de acesso a aplicações por 6 meses) e 19 (responsabilização por conteúdo de terceiros após ordem judicial); os demais artigos não integram esta verificação e não devem ser citados literalmente sem nova conferência. Importância para a segurança e a governança: o Marco Civil é a lei-marco do uso da Internet no país e dialoga com a LGPD — o texto oficial da LGPD indica alterações no Marco Civil (relação confirmada no preâmbulo do texto oficial da LGPD, presente em referencias-verificadas.md como relação verificada). Uso didático responsável: nas provas, cite a lei pelo número e ano (dado identificador), evite artigos que não tenha conferido, e saiba que o objeto do Marco Civil (uso da Internet, direitos e deveres dos usuários, regulação de serviços) é mais amplo do que o da LGPD (tratamento de dados pessoais). Distinção clássica de cobrança: Marco Civil trata do ambiente e das relações de uso da Internet; LGPD trata do dado pessoal e dos sujeitos do tratamento; LAI trata do acesso às informações públicas. Três leis, três objetos — mas com zonas de articulação (por exemplo, dados de conexão e registros de acesso tratados em ambas as lógicas).",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Qual lei trataria de: (a) regras gerais de uso da Internet; (b) base legal para tratar nome de cidadão em cadastro?", "resposta": "(a) Marco Civil (Lei nº 12.965/2014) — verificada em 2026-10-23 (arts. 2º, 3º, 7º, 9º §3º, 15 e 19); demais dispositivos, confirmar em fonte oficial. (b) LGPD (Lei nº 13.709/2018), art. 1º e art. 5º, I (verificados)." },
                  { "tipo": "aplicacao", "enunciado": "Projeto menciona 'obrigação do art. 15 do Marco Civil' sem conferir a fonte. Como o material didático deve tratar isso?", "resposta": "O art. 15 do Marco Civil foi verificado em 2026-10-23 e trata da guarda de registros de acesso a aplicações de internet pelo provedor por 6 meses — parte verificada (caput). As regras de disponibilização desses registros aos requerentes não integram a lista de dispositivos verificados (Bloco 3) e devem ser conferidas em fonte oficial antes de qualquer citação. O material deve afirmar apenas o que a verificação cobre e indicar que os demais dispositivos devem ser conferidos em fonte oficial antes de qualquer citação — prática de honestidade intelectual exigida pelas regras de entrega do projeto." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Marco Civil e LGPD são a mesma lei em versões diferentes.'", "correcao": "Errado. São leis distintas, de anos distintos, com objetos diferentes; a LGPD inclusive alterou disposições do Marco Civil (relação verificada no preâmbulo do texto oficial da LGPD)." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) O número e o ano do Marco Civil (Lei nº 12.965/2014) podem ser citados; dos dispositivos, os arts. 2º, 3º, 7º, 9º §3º, 15 e 19 foram verificados e os demais exigem conferência em fonte oficial.", "resposta": "Certo — é exatamente o tratamento adotado neste material: identificador da lei citado a partir do prompt mestre do projeto; dos dispositivos, os arts. 2º, 3º, 7º, 9º §3º, 15 e 19 foram verificados em 2026-10-23; os demais seguem marcados como não verificados." },
                  { "tipo": "multipla", "enunciado": "Objeto da LGPD: A) uso da Internet no Brasil; B) tratamento de dados pessoais; C) acesso a informações públicas; D) regulação de telecomunicações.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u4-t2-s2",
                "titulo": "Articulação entre LGPD, Marco Civil e LAI",
                "objetivoAprendizagem": "Aluno resolverá conflitos aparentes entre transparência e proteção de dados usando a distinção entre informação pública e dado pessoal.",
                "conteudo": "Três leis convivem no mesmo ato administrativo digital. A LAI (Lei nº 12.527/2011) disciplina o acesso a informações públicas — enquadramento geral verificado no planalto.gov.br em 2026-10-21 (Bloco 2 de referencias-verificadas.md), com os dispositivos conferidos para o Módulo 6 — arts. 1º, 2º, 3º, 4º, 5º, 6º, 7º, 8º, 8º-A, 8º-B, 10, 11, 12, 13, 14, 15, 16, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34 e 38; os demais artigos fora do Bloco 2 continuam a exigir conferência em fonte oficial. A LGPD protege dados pessoais no tratamento (dispositivos verificados: arts. 1º, 2º, 3º, 4º, 5º, 17, 18, 46). O Marco Civil trata do uso da Internet (verificado em 2026-10-23 — Bloco 3; arts. 2º, 3º, 7º, 9º §3º, 15 e 19). A articulação se resolve pela natureza da informação: publicar lista de servidores com nome e matrícula é publicidade administrativa de dados que identificam; publicar dados de saúde ou de conta bancária é expor dado pessoal — sensível no caso da saúde (art. 5º, II, verificado). O art. 23 da LGPD menciona expressamente a LAI (relação verificada), sinalizando que transparência pública e proteção de dados devem ser lidas em conjunto, não como antagonistas. Exceção relevante e verificada: o art. 4º, III, da LGPD afasta a aplicação para finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão de infrações penais, com ressalvas dos §§ 1º e 2º — não confundir exceção com permissão geral. Método prático de decisão: 1) qual a natureza da informação (pública x dado pessoal x sensível)? 2) qual a finalidade e base legal? 3) há informação protegida por sigilo? 4) o que a política interna e a assessoria jurídica determinam?",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Transparência ativa publica valor de contratos e nomes de fornecedores pessoa jurídica. Dado pessoal?", "resposta": "Valor e contratante pessoa jurídica são informação pública de gestão; se o fornecedor for pessoa física, o nome é dado pessoal, mas a publicidade decorre da própria execução contratual — avaliar minimização do que excede a finalidade de transparência." },
                  { "tipo": "aplicacao", "enunciado": "Pedido de acesso solicita 'todos os dados do servidor X'. Como responder tecnicamente?", "resposta": "Conceder a informação pública pertinente à finalidade (matrícula, lotação, atos e remuneração conforme política de transparência), esclarecendo que dados pessoais que excedam a finalidade exigem fundamentação; não confundir transparência com divulgação irrestrita de tudo — a resposta deve ser motivada e registrada." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Pela LGPD, o órgão não pode publicar nomes de servidores em nenhuma hipótese.'", "correcao": "Errado. A LGPD convive com deveres de transparência (o art. 23 menciona a LAI — verificado); a análise é de finalidade, necessidade e proporcionalidade, não proibição absoluta. Generalizações absolutas são armadilha clássica de prova." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) A LGPD e a LAI devem ser lidas em conjunto, conforme articulação presente no próprio texto verificado da LGPD.", "resposta": "Certo. O art. 23 da LGPD menciona expressamente a Lei nº 12.527/2011 (LAI) — relação confirmada no texto oficial." },
                  { "tipo": "multipla", "enunciado": "Dado sensível (art. 5º, II, verificado) inclui: A) endereço residencial; B) dado sobre saúde; C) número de matrícula funcional; D) endereço de e-mail corporativo.", "resposta": "B" }
                ]
              },
              {
                "id": "m4-u4-t2-s3",
                "titulo": "Obrigação legal, norma técnica e boa prática",
                "objetivoAprendizagem": "Aluno classificará afirmações normativas por grau de obrigatoriedade e corrigirá generalizações típicas de provas e de políticas internas.",
                "conteudo": "Classificação hierárquica útil para a prática e para concursos: 1) Constituição e leis (obrigatórias; exemplo verificado: LGPD, arts. 1º a 46 citados neste material); 2) regulamentos e atos da autoridade competente (obrigatórios no âmbito delegado — conferir vigência); 3) normas técnicas e padrões (obrigatórios quando incorporados por contrato, política interna ou referência normativa — caso contrário, orientam); 4) orientações e boas práticas de mercado (recomendadas; adotá-las pode virar parâmetro de cuidado esperado, mas não é 'lei'). Erros clássicos: tratar recomendação de framework como exigência legal; citar prazo ou sanção decorado sem conferir; confundir norma com política interna do órgão (que obriga servidores, mas não é lei). Método de verificação antes de afirmar: identificar a fonte (lei, regulamento, norma, política), confirmar a redação atual em fonte oficial, registrar a data de verificação e escrever a afirmação com o grau correto ('a lei determina', 'a norma recomenda', 'a política interna obriga'). A honestidade normativa é também proteção profissional: afirmação inventada em documento oficial gera responsabilização.",
                "exemplos": [
                  { "tipo": "introducao", "enunciado": "Cláusula de edital diz 'o órgão adotará as melhores práticas de mercado'. Isso é obrigação legal determinada?", "resposta": "Não. É compromisso genérico a ser detalhado; sem critérios verificáveis, não é exigência normativa autoexecutável. O correto é especificar norma ou política aplicável e responsáveis." },
                  { "tipo": "aplicacao", "enunciado": "Relatório interno afirma: 'A LGPD obriga backup diário.' Como corrigir?", "resposta": "A LGPD exige medidas de segurança aptas (art. 46 — verificado), mas backup diário é medida técnica específica — não descrita no dispositivo. A correção: 'A política interna do órgão determina backup diário como medida técnica que atende ao art. 46'. Assim separa lei de política." },
                  { "tipo": "erro", "enunciado": "Afirmação: 'Norma técnica brasileira tem sempre força de lei.'", "correcao": "Errado. Norma técnica vincula quando é incorporada por referência em lei, edital, contrato ou política; por si só, orienta. Tratá-la como lei é generalização falsa — armadilha recorrente." }
                ],
                "exercicios": [
                  { "tipo": "certos_erro", "enunciado": "(C/E) Política interna de segurança do órgão obriga os servidores, mas não pode criar obrigação para terceiros sem base contratual ou legal.", "resposta": "Certo. A política tem eficácia no âmbito interno; extensão a terceiros depende de contrato ou dispositivo legal." },
                  { "tipo": "multipla", "enunciado": "Fonte correta para afirmar 'a LGPD determina X': A) blog; B) texto oficial da lei verificado com data; C) post em rede social; D) apostila sem referência.", "resposta": "B" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
