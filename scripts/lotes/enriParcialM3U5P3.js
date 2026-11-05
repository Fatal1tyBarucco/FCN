const enriParcialM3U5P3 = {
  "m3-u5-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Calendários e convites são vetores frequentes de exposição acidental: o título do evento, a descrição, a lista de participantes e o link de reunião ficam visíveis a todos os convidados e circulam com encaminhamentos. Um convite com dados sigilosos expõe informações a pessoas que não deveriam vê-las.",
      "preRequisitos": [
        "Unidade 2.1 — calendários e convites"
      ],
      "objetivosObservaveis": [
        "Citar três formas como calendários e convites expõem dados",
        "Explicar o risco de conceder permissão de edição a todos em agenda compartilhada",
        "Aplicar mitigações de minimização de dados e restrição de permissões"
      ],
      "competencias": [
        "Configuração segura de calendário e de convites",
        "Proteção da informação em agendas institucionais"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t2-s1 (Exposição por e-mail (CC/BCC, anexos, encaminhamento)) — exposição acidental em outro canal",
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões) — base das permissões de agenda"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo programático, com foco em exposição acidental em calendários e convites."
      }
    },
    "niveis": {
      "iniciante": "Formas de exposição: título e descrição do evento visíveis a todos os convidados; agenda compartilhada ou pública expõe horários a terceiros; lista de participantes exposta; link do convite reencaminhável fora da organização; anexos e campo de observação carregam dados. Mitigação: minimizar dados na descrição, restringir permissões, manter a agenda sensível privada, revisar convidados e nunca escrever senha no convite.",
      "intermediario": "O candidato distingue o necessário do desnecessário em uma agenda: aplica permissão mínima, somente leitura para quem consulta e edição restrita ao responsável; revisa a lista de convidados antes de confirmar; remove dados estratégicos da descrição; sabe que o link do convite circula com encaminhamentos e exige controle de acesso na reunião, como lobby, senha ou login.",
      "avancado": "O candidato equilibra utilidade e privacidade na agenda institucional: decide quais eventos ficam públicos, ocupados ou privados conforme a sensibilidade do conteúdo. Avalia o risco de um calendário público revelar rotinas individuais e propõe revisão periódica da agenda.",
      "especialista": "O candidato audita as agendas de uma equipe: encontra calendários públicos, exposição excessiva, convites com descrição sensível e links sem controle de acesso; corrige exposições, define o padrão institucional de compartilhamento e documenta a revisão periódica de permissões."
    },
    "comparacoes": [
      {
        "tema": "Calendário público x calendário privado",
        "a": {
          "rotulo": "Calendário público",
          "texto": "Expõe título, horário, descrição e participantes dos eventos a quem obtiver o endereço de visualização."
        },
        "b": {
          "rotulo": "Calendário privado",
          "texto": "Restringe a consulta ao proprietário e somente às pessoas autorizadas pelo contexto institucional."
        },
        "diferencaGabarito": "O calendário público revela agenda e detalhes a terceiros; o privado limita a exposição a autorizados."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: a descrição do evento é invisível aos convidados do convite.",
        "porqueErrada": "A descrição é exibida a todos os convidados e acompanha os encaminhamentos do convite, logo o dado escrito nela circula além do público previsto.",
        "versaoCorreta": "Minimizar dados sensíveis na descrição, evitando dado pessoal, senha e informação estratégica, e remeter a documento em repositório controlado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: compartilhar o calendário com permissão de edição para todos facilita o trabalho e não gera risco.",
        "porqueErrada": "A permissão de edição para todos permite que qualquer convidado altere ou cancele eventos, ocorrendo alteração indevida de compromissos institucionais.",
        "versaoCorreta": "Conceder o mínimo necessário: somente leitura para quem consulta e permissão de edição restrita aos responsáveis pela agenda."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Calendário",
        "Convite",
        "Permissão"
      ],
      "regras": [
        "Minimizar dados sensíveis na descrição do evento",
        "Conceder a permissão mínima e revisar a lista de convidados"
      ],
      "comparacoes": [
        "Calendário público expõe agenda e detalhes; calendário privado restringe a consulta a autorizados"
      ],
      "fluxos": [
        "Criar evento sensível → descrição mínima → restringir permissões → controlar o link → revisar convidados"
      ],
      "excecoes": [
        "Agenda pública institucional exige análise de sensibilidade antes do compartilhamento"
      ],
      "palavrasChave": [
        "calendário",
        "convite",
        "permissão",
        "link"
      ],
      "checklist": [
        "Citei formas de exposição em calendário?",
        "Expliquei o risco de permissão para todos?",
        "Apliquei mitigações de minimização e restrição?",
        "Avaliei o link de reunião no convite?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quais dados devem ser evitados na descrição de um evento de calendário para que o convite não exponha informação sensível?",
        "dados": "Evento de revisão contratual com CPF de cliente, valor da proposta e senha da reunião; doze convidados.",
        "conceitos": [
          "Descrição do evento",
          "Minimização de dados"
        ],
        "estrategia": "Percorrer a descrição e separar o operacional (assunto, horário, local) do sensível (dado pessoal, valor e credencial), mantendo apenas o necessário no convite.",
        "execucao": [
          "Ler a descrição do evento e listar cada informação escrita nela",
          "Separar dados operacionais de dados pessoais, valores e credenciais",
          "Remover da descrição tudo que for sensível"
        ],
        "resultado": "Evitar na descrição dado pessoal, senha e informação estratégica; manter o operacional e remeter a documento protegido.",
        "justificativa": "A descrição é exibida a todos os convidados e acompanha encaminhamentos, logo é tratada como pública. Remover o sensível e remeter a documento protegido reduz a exposição.",
        "errosFrequentes": [
          "Achar que apenas anexos expõem dados e ignorar o texto da descrição",
          "Acumular informações por precaução no convite, ampliando a exposição"
        ],
        "variacao": "Trocar o evento por uma reunião de avaliação de desempenho e reaplicar a triagem."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como compartilhar a agenda de uma secretaria com outras equipes sem expor eventos sensíveis nem permitir alteração indevida?",
        "dados": "Agenda com quarenta eventos, seis sobre processos sigilosos; três equipes consultam horários e apenas um servidor cria e cancela eventos.",
        "conceitos": [
          "Permissão mínima",
          "Somente leitura",
          "Permissão de edição"
        ],
        "estrategia": "Definir o acesso pela necessidade real: leitura a quem consulta, edição somente ao responsável e privacidade aos sigilosos, com revisão de quem recebeu permissão.",
        "execucao": [
          "Identificar quem precisa consultar a agenda e quem precisa alterá-la",
          "Conceder somente leitura somente às equipes de consulta",
          "Reservar a edição ao servidor responsável pela agenda",
          "Marcar os eventos sigilosos como privados, sem descrição sensível"
        ],
        "resultado": "Permissões restritas ao necessário, eventos sensíveis como privados e revisão periódica da lista de acesso.",
        "justificativa": "Cada nível atende uma necessidade: a leitura permite consultar sem risco de alteração e a edição cabe somente quem administra a agenda. Marcar o sigiloso como privado esconde título e descrição mesmo de quem tem leitura.",
        "errosFrequentes": [
          "Conceder edição a todos para evitar questões sobre acesso",
          "Compartilhar a agenda inteira publicamente por praticidade"
        ],
        "variacao": "Levar o cenário a uma agenda cujos eventos tragam link de reunião e reaplicar as permissões somando o controle do link."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: calendário público não expõe informações, porque mostra apenas horários livres e ocupados. Como avaliar?",
        "dados": "Calendário institucional compartilhado publicamente com detalhes completos; terceiros veem títulos, participantes e descrições.",
        "conceitos": [
          "Calendário público",
          "Detalhe do evento",
          "Exposição acidental"
        ],
        "estrategia": "Testar a afirmação verificando o que o compartilhamento público publica: título, horário, participantes e descrição, e não somente a indicação de ocupado.",
        "execucao": [
          "Verificar o modo de compartilhamento adotado no calendário",
          "Constatar que os detalhes dos eventos estão sendo publicados",
          "Observar que título, participantes e descrição ficam visíveis"
        ],
        "resultado": "Errado. O calendário público pode expor agenda, participantes e detalhes dos eventos, devendo ser evitado em contexto sensível.",
        "justificativa": "A leitura ingênua confunde a exibição de ocupado ou livre com o padrão do compartilhamento público, que publica detalhes do evento. A agenda revela rotinas de pessoas identificadas, atingindo a privacidade.",
        "errosFrequentes": [
          "Achar que o calendário público mostra somente ocupados e livres",
          "Confundir compartilhamento público com leitura para pessoas específicas"
        ],
        "variacao": "Trocar por um calendário aberto a qualquer pessoa com o link, sem login, e reaplicar a verificação do que fica visível."
      }
    ]
  },
  "m3-u5-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Plataformas de colaboração — repositórios, wikis e canais de equipe — expõem dados quando as permissões são amplas demais ou o compartilhamento externo está liberado. Link permissivo, canais abertos, compartilhamento externo sem restrição de domínio e integrações conectadas são vetores de vazamento.",
      "preRequisitos": [
        "Unidade 4.2 — coautoria"
      ],
      "objetivosObservaveis": [
        "Citar três formas como plataformas de colaboração expõem dados",
        "Explicar o risco de links permissivos e canais abertos com dados sensíveis",
        "Aplicar mitigações de minimização de dados e restrição de permissões"
      ],
      "competencias": [
        "Gestão de permissões em plataformas de colaboração",
        "Prevenção de vazamento de dados em ambientes de coautoria"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t2-s1 (Exposição por e-mail (CC/BCC, anexos, encaminhamento)) — exposição acidental em outro canal",
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões) — comunicação como vetor de exposição"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo programático, com foco em exposição acidental em plataformas de colaboração."
      }
    },
    "niveis": {
      "iniciante": "Formas de exposição: documentos e planilhas com link permissivo que qualquer pessoa pode abrir; canais abertos a toda a organização; compartilhamento externo sem restrição de domínio; comentários e histórico que preservam conteúdo removido; permissões herdadas de grupo não revogadas na saída do colaborador; integrações e aplicativos conectados com acesso amplo ao drive. Mitigações: link com acesso restrito e expiração, sem a opção qualquer pessoa com o link; auditoria periódica de membros e ex-colaboradores; revisão de compartilhamento externo; eliminação de canais abertos sem necessidade; classificação de sensibilidade; trilhas de auditoria; revogação efetiva na saída.",
      "intermediario": "O candidato distingue configuração conforme cliente e contexto: acesso interno, convidado externo, link copiado para fora, aplicativo móvel e integração de terceiros exigem permissões diferentes. Revisar permissões uma vez não basta. Aplica o menor privilégio: acesso mínimo, menor escopo e menor tempo. Define links com expiração e destinatário, remove compartilhamento externo desnecessário e programa revisões periódicas de membros, canais e aplicativos conectados.",
      "avancado": "O candidato audita o espaço de trabalho: encontra documentos com link permissivo, canais abertos com dados sensíveis, ex-colaboradores com acesso persistente e aplicativos de terceiro com alcance amplo. Corrige exposições, define o padrão institucional de compartilhamento e estabelece revogação efetiva na saída de colaboradores e fim de parcerias.",
      "especialista": "O candidato governa a plataforma de colaboração de uma organização: mapeia integrações e aplicativos conectados, revisa condicionalidade das configurações por contexto e cliente, elimina canais abertos sem necessidade, implementa classificação de sensibilidade e assegura revogação efetiva na saída de qualquer pessoa."
    },
    "comparacoes": [
      {
        "tema": "Link permissivo x link restrito",
        "a": {
          "rotulo": "Link permissivo",
          "texto": "Qualquer pessoa com o link pode visualizar ou editar o documento, sem autenticação; o link pode ser copiado e encaminhado a terceiros, perdendo-se o controle de quem acessa o conteúdo."
        },
        "b": {
          "rotulo": "Link restrito",
          "texto": "Acesso somente a usuários autenticados da organização, com controle de domínio e exigência de login; o link não pode ser copiado para fora do ambiente sem perda de controle das permissões."
        },
        "diferencaGabarito": "O link permissivo expande o documento a terceiros não autenticados, risco de divulgação não autorizada; o link restrito mantém o controle de identidade e domínio, reduzindo o risco de vazamento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: compartilhar documento por link na plataforma de colaboração é seguro, pois apenas colaboradores podem acessar.",
        "porqueErrada": "O link permissivo pode ser encaminhado, copiado e sincronizado para pessoas não autorizadas; a segurança depende das permissões técnicas do link, não da intenção inicial de compartilhar apenas com colaboradores.",
        "versaoCorreta": "Usar apenas links restritos a usuários autenticados da organização; qualquer pessoa com o link é um vetor de vazamento comprovado, independentemente de afirmar que apenas colaboradores acessam."
      },
      {
        "afirmacaoEquivocada": "Afirmação: o ex-colaborador perde o acesso automaticamente após o término do contrato ou a demissão.",
        "porqueErrada": "As permissões herdadas de grupo não são revogadas na saída do colaborador, de modo que o acesso persiste mesmo após o término da relação institucional.",
        "versaoCorreta": "A política de saída deve incluir revogação efetiva de todas as permissões nas plataformas de colaboração; o acesso expirado ou revogado impede que o ex-colaborador mantenha acesso a documentos e histórico."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Plataforma de colaboração",
        "Link permissivo",
        "Compartilhamento externo",
        "Permissão herdada",
        "Histórico de versões",
        "Classificação de sensibilidade",
        "Revogação de acesso"
      ],
      "regras": [
        "Verificar a permissão antes de compartilhar documento na plataforma de colaboração",
        "Revogar acessos de ex-colaboradores imediatamente após o término da relação"
      ],
      "comparacoes": [
        "Link permissivo expande o documento a terceiros; link restrito mantém o controle de identidade e domínio"
      ],
      "fluxos": [
        "Identificar documento sensível → verificar permissões atuais → restringir link inadequado → revisar lista de colaboradores → classificar sensibilidade"
      ],
      "excecoes": [
        "Nomes, escopos e tipos de link variam por plataforma e plano, devendo ser confirmados na documentação oficial"
      ],
      "palavrasChave": [
        "colaboração",
        "permissão",
        "link",
        "compartilhamento"
      ],
      "checklist": [
        "Citei formas de exposição em plataforma de colaboração?",
        "Expliquei o risco de links permissivos?",
        "Apliquei minimização e restrição de permissões?",
        "Revisei acessos de ex-colaboradores?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quais dados devem ser evitados no corpo de um documento colaborativo para não expor informação sensível?",
        "dados": "Documento de reunião com CPF de cliente, valores da proposta e credenciais de acesso; link permissivo; dez colaboradores.",
        "conceitos": [
          "Descrição do documento",
          "Minimização de dados"
        ],
        "estrategia": "Percorrer o documento e separar o operacional (assunto, horário, participantes) do sensível (dado pessoal, valor e credencial), mantendo apenas o necessário.",
        "execucao": [
          "Ler o documento e listar cada informação escrita nele",
          "Separar dados operacionais de dados pessoais, valores e credenciais",
          "Remover do documento tudo que for sensível"
        ],
        "resultado": "Evitar no documento dado pessoal, senha e informação estratégica; manter o operacional e remeter a repositório controlado.",
        "justificativa": "O corpo do documento é exibido a todos os participantes com permissão e acompanha sincronizações e encaminhamentos, logo é tratado como público. Remover o sensível e remeter a repositório controlado reduz a exposição.",
        "errosFrequentes": [
          "Achar que apenas o anexo expõe dados e ignorar o texto do documento",
          "Acumular informações por precaução no documento, ampliando a exposição"
        ],
        "variacao": "Trocar o documento por um canal de wiki corporativa compartilhado e reaplicar a triagem, pois o histórico de versões preserva conteúdo removido."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como proteger um documento colaborativo sensível entre equipes sem expor dados nem permitir alteração indevida?",
        "dados": "Documento de vinte páginas sobre processo sigiloso; cinco equipes consultam; um servidor cria e cancela eventos; acesso móvel e integração de terceiros ativos.",
        "conceitos": [
          "Permissão mínima",
          "Somente leitura",
          "Permissão de edição"
        ],
        "estrategia": "Definir o acesso pela necessidade real: leitura a quem consulta, edição restrita ao responsável, privacidade aos sigilosos, revisão de quem recebeu permissão e controle do link com expiração e destinatário.",
        "execucao": [
          "Identificar quem precisa consultar o documento e quem precisa alterá-lo",
          "Conceder somente leitura somente às equipes de consulta",
          "Reservar a edição ao servidor responsável pelo documento",
          "Marcar os conteúdos sigilosos como privados, sem descrição sensível"
        ],
        "resultado": "Permissões restritas ao necessário, conteúdos sigilosos como privados e revisão periódica da lista de acesso e das integrações.",
        "justificativa": "A leitura permite consultar sem risco de alteração e a edição cabe somente quem administra o documento; marcar o sigiloso como privado esconde título e descrição mesmo de quem tem leitura, e o controle do link com expiração impede que terceiros abram o conteúdo.",
        "errosFrequentes": [
          "Conceder edição a todos para evitar questões sobre acesso",
          "Compartilhar o documento inteiro publicamente por praticidade"
        ],
        "variacao": "Levar o cenário a uma plataforma wiki corporativa e reaplicar as permissões somando o controle do histórico de acesso."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: compartilhamento por link na plataforma de colaboração é sempre seguro porque apenas colaboradores podem acessar.",
        "dados": "Plataforma de equipe com compartilhamento ativo; link com permissão qualquer pessoa com o link pode visualizar; o link é copiado para fora da organização.",
        "conceitos": [
          "Link permissivo",
          "Colaborador versus qualquer pessoa com o link",
          "Segurança dependente da configuração"
        ],
        "estrategia": "Testar a afirmação verificando as permissões reais do link: se a opção qualquer pessoa com o link está ativada, a afirmação é falsa.",
        "execucao": [
          "Verificar o modo de compartilhamento adotado na plataforma",
          "Constatar que as permissões do link permitem acesso a não autenticados",
          "Observar que a afirmação ignora o cenário de link copiado para fora"
        ],
        "resultado": "Errado. A segurança existe apenas quando restrito a usuários autenticados da organização; qualquer pessoa com o link é vetor de alto risco de vazamento.",
        "justificativa": "A leitura ingênua confunde a intenção de compartilhamento com a configuração real de permissões do link; links copiados para fora chegam a pessoas não autorizadas, comprometendo a privacidade dos dados.",
        "errosFrequentes": [
          "Achar que a restrição para colaboradores se aplica automaticamente ao link compartilhado",
          "Confundir compartilhamento interno com leitura para pessoas específicas fora da organização"
        ],
        "variacao": "Trocar por um cenário de link com senha ou tempo de expiração e reaplicar a verificação do que fica visível quando o link é copiado."
      }
    ]
  }
};
