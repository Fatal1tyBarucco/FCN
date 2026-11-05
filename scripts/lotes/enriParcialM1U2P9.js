const enriParcialM1U2P9 = {
  "modulo-1-unidade-2-topico-14-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Um relatório técnico integrado é o produto que reúne todos os recursos da unidade 1.2 do Word em uma ordem logicamente dependente. Questões de concurso cobram exatamente essa sequência: aplicar o sumário antes dos estilos produz lista vazia, e exportar PDF sem tags de acessibilidade elimina a semântica para leitores de tela. Montar a ordem errada muda o gabarito, pois o avaliador verifica se o candidato sabe que estilos de título são a base de sumário, navegação e acessibilidade, e que campos como sumário e referências cruzadas exigem atualização explícita antes da versão final. Dominar a sequência evita retrabalho e garante um documento estruturado, navegável e acessível desde a criação até a distribuição.",
      "preRequisitos": [
        "Estilos de título (Título 1 e Título 2) aplicados a capítulos e seções",
        "Criação e formatação de tabelas com fórmulas simples",
        "Inserção de sumário automático via Referências > Sumário",
        "Legendas automáticas de figuras via Referências > Inserir Legenda",
        "Quebras de seção e cabeçalhos/rodapés distintos por seção",
        "Revisão com controle de alterações e aceitação/rejeição de mudanças",
        "Exportação para PDF com opções de estrutura de acessibilidade"
      ],
      "objetivosObservaveis": [
        "Ordenar corretamente as etapas de produção de um relatório técnico completo no Word",
        "Executar cada etapa com seu ponto de verificação (sumário, tabelas, legendas, seções, revisão, exportação PDF)",
        "Diagnosticar defeitos de integração em relatório pronto (sumário vazio, numeração inconsistente, PDF sem estrutura de acessibilidade)"
      ],
      "competencias": [
        "Gestão de documento complexo com múltiplos recursos interdependentes",
        "Garantia de qualidade e acessibilidade do produto final para leitores de tela",
        "Diagnóstico e correção de erros de sequência e estrutura em documentos longos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "Estilos de título e navegação (tópico anterior da unidade 1.2) — base do sumário automático e da acessibilidade",
        "Sumário automático e referências cruzadas (tópico anterior da unidade 1.2) — campo gerado dos estilos que exige atualização",
        "Quebras de seção e numeração de páginas (tópico anterior da unidade 1.2) — separa preliminares em romano do corpo em arábico",
        "Unidade 1.5 (armazenamento e compartilhamento do produto final) — destino do PDF acessível gerado",
        "Módulo 6 (transparência e acessibilidade no serviço público) — validação final do PDF em leitor de tela"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Questões de integração do Word em concursos de informática avaliam a ordem correta das etapas e a identificação de erros de sequência, como gerar o sumário antes de definir os estilos ou exportar PDF sem tags de acessibilidade. O tema é classificado como de média a alta relevância no conteúdo programático de informática. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Reproduzir o fluxo simples e linear de construção do relatório: aplicar estilos Título 1 e Título 2 aos capítulos e seções; inserir o sumário automático via Referências > Sumário; criar tabela com formatação e fórmulas integradas quando =SUM(ABOVE) for suficiente; inserir figuras com legendas automáticas via Referências > Inserir Legenda; exportar para PDF verificando a presença de textos alternativos e estruturas de heading; abrir o PDF em leitor de tela para validar a ordem de leitura. Cada passo tem um ponto de verificação que o aluno deve conferir antes de avançar para o próximo, evitando que um erro inicial (por exemplo, formatação direta em vez de estilo) invalide todo o documento posterior.",
      "intermediario": "Configurar duas seções com numerações e cabeçalhos distintos: inserir quebra de seção (tipo Próxima Página) após as preliminares para separá-las do corpo; nas preliminares aplicar rodapé com numeração em algarismos romanos (i, ii, iii); no início do corpo desvincular o cabeçalho e o rodapé da seção anterior (desmarcar Vincular ao Anterior) e definir numeração arábica (1, 2, 3) reiniciada em 1; editar o cabeçalho de cada seção de forma independente. Antes de exportar, atualizar todos os campos — selecionar todo o documento com Ctrl+A, pressionar F9 ou clicar no sumário e escolher Atualizar campo > atualizar toda a estrutura — conferindo referências cruzadas e legendas. Só então exportar o PDF com as opções que preservam a estrutura de acessibilidade, quando disponíveis na versão do Word em uso.",
      "avancado": "Conduzir o ciclo completo de revisão com controle de alterações: ativar o rastreamento de alterações durante a revisão para que cada inserção, exclusão e mudança de formatação fique registrada; resolver todos os comentários pendentes; aceitar ou rejeitar individualmente cada alteração registrada e, se necessário, utilizar a comparação de versões para identificar diferenças entre dois estados do documento. Após encerrar a revisão, atualizar todos os campos do documento (sumário, referências cruzadas, legendas) antes de qualquer exportação, pois a edição de títulos e posições invalida os campos gerados. Manter a integridade dos campos garante que o relatório final entregue ao revisor ou à banca seja coerente com o conteúdo efetivamente revisado.",
      "especialista": "Auditar um relatório pronto e prescrever a correção na ordem certa: diagnosticar sumário vazio verificando se os capítulos têm estilos de título aplicados (e não apenas formatação direta de negrito e tamanho maior) e se o sumário é um campo gerado via Referências > Sumário e não texto estático digitado; corrigir figuras sem texto alternativo; identificar numeração de página reiniciada indevidamente devido à falta de quebra de seção ou à má desvinculação de cabeçalhos/rodapés; validar o PDF final em leitor de tela ou verificador de acessibilidade confirmando textos alternativos, estrutura de títulos e ordem de leitura. O especialista entende que a acessibilidade começa nos estilos do documento, não na exportação, e que a validação final em leitor de tela é etapa obrigatória, não opcional."
    },
    "comparacoes": [
      {
        "tema": "Ordem de construção do sumário",
        "a": {
          "rotulo": "Estilos antes do sumário",
          "texto": "Aplicar estilos Título 1 e Título 2 aos capítulos e seções primeiro, e só então inserir o sumário via Referências > Sumário; o campo se alimenta dos estilos e produz a lista correta dos capítulos."
        },
        "b": {
          "rotulo": "Sumário antes dos estilos",
          "texto": "Inserir o sumário antes de aplicar os estilos de título, ou confiar em formatação direta (negrito e tamanho maior) nos títulos; o sumário fica vazio porque não há estrutura de estilo para se alimentar."
        },
        "diferencaGabarito": "A alternativa correta é aplicar estilos antes do sumário; o sumário antes dos estilos ou a formatação direta produzem lista vazia e estão errados em questões de concurso."
      },
      {
        "tema": "PDF com ou sem tags de acessibilidade",
        "a": {
          "rotulo": "PDF com estrutura de acessibilidade",
          "texto": "Exportar usando as opções que preservam a estrutura (tags de acessibilidade) quando disponíveis na versão, mantendo títulos, textos alternativos e ordem de leitura para leitores de tela."
        },
        "b": {
          "rotulo": "PDF sem tags de acessibilidade",
          "texto": "Exportar PDF sem as opções de estrutura; o documento perde a semântica, títulos e alternativos, tornando-se inacessível para leitores de tela mesmo que esteja visualmente correto."
        },
        "diferencaGabarito": "Em questões de acessibilidade, a alternativa sem tags está errada; só o PDF exportado com opções de estrutura preserva a semântica exigida."
      },
      {
        "tema": "Quebra de página versus quebra de seção",
        "a": {
          "rotulo": "Quebra de seção com desvinculação",
          "texto": "Usar quebra de seção (Próxima Página) para separar preliminares do corpo e desvincular cabeçalho/rodapé da seção anterior, permitindo numeração romana nas preliminares e arábica no corpo."
        },
        "b": {
          "rotulo": "Quebra de página simples",
          "texto": "Usar apenas quebra de página simples, que não permite numerações nem cabeçalhos distintos entre partes; a numeração romana/arábica quebra e o cabeçalho é herdado indevidamente."
        },
        "diferencaGabarito": "A separação preliminares/corpo exige quebra de seção com desvinculação; a quebra de página simples é insuficiente e gera erro de numeração."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Basta formatar os títulos com negrito e tamanho maior para que o sumário automático reconheça os capítulos do relatório.",
        "porqueErrada": "Confunde formatação direta com estilos de título: o sumário se gera exclusivamente dos estilos Título 1 e Título 2 aplicados aos capítulos; formatação direta não cria estrutura de campo e não aparece no sumário.",
        "versaoCorreta": "Aplicar estilos Título 1 e Título 2 aos capítulos e seções, e só então inserir o sumário via Referências > Sumário; formatação direta não alimenta o campo de sumário."
      },
      {
        "afirmacaoEquivocada": "Exportar o documento para PDF já garante que o relatório seja acessível a leitores de tela.",
        "porqueErrada": "Generalização incorreta: a acessibilidade depende de estilos de título aplicados no documento, de textos alternativos nas figuras e de exportar com as opções que preservam a estrutura, quando disponíveis na versão; a validação final é abrir o PDF em leitor de tela ou verificador de acessibilidade.",
        "versaoCorreta": "A acessibilidade começa nos estilos do Word e nos textos alternativos, continua na exportação com opções de estrutura (tags) quando disponíveis, e se confirma na validação final em leitor de tela."
      },
      {
        "afirmacaoEquivocada": "Os campos do sumário e das referências cruzadas se atualizam sozinhos sempre que os títulos ou as posições são alterados no documento.",
        "porqueErrada": "Termo absoluto incorreto: os campos do Word não se atualizam automaticamente; após editar títulos, posições, referências cruzadas ou legendas, é necessário atualizar todos os campos (Ctrl+A, F9, atualizar todo o sumário) antes de exportar a versão final.",
        "versaoCorreta": "Após qualquer alteração de títulos ou posições, atualizar todos os campos do documento antes da exportação para garantir que sumário, referências cruzadas e legendas estejam coerentes com o conteúdo final."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Estilos de título (Título 1, Título 2) como base do sumário, navegação e acessibilidade",
        "Sumário automático como campo gerado dos estilos, exigindo atualização explícita",
        "Legenda automática de figuras e referências cruzadas via Referências",
        "Quebra de seção para separar preliminares (numeração romana) do corpo (numeração arábica)",
        "Cabeçalho e rodapé distintos por seção, com desvinculação da seção anterior",
        "Controle de alterações na revisão, com aceitação/rejeição de mudanças e comparação de versões",
        "Exportação para PDF com opções de estrutura de acessibilidade (tags) quando disponíveis",
        "Validação final do PDF em leitor de tela ou verificador de acessibilidade"
      ],
      "regras": [
        "Ordem de produção: estilos de título → sumário → tabelas e figuras com legendas → seções → revisão → exportação PDF → validação em leitor de tela",
        "Campo alterado exige atualização: sumário, referências cruzadas e legendas devem ser atualizados (Ctrl+A, F9) após qualquer mudança de títulos ou posições",
        "Mudança de numeração de página ou de cabeçalho entre partes exige quebra de seção com desvinculação de cabeçalho/rodapé",
        "Cálculos complexos migram da tabela do Word para o Excel; fórmulas simples como =SUM(ABOVE) bastam para tabelas simples",
        "A validação de acessibilidade é etapa final obrigatória, não opcional, e começa nos estilos, não na exportação"
      ],
      "comparacoes": [
        "Estilos antes do sumário produzem lista correta; sumário antes dos estilos ou formatação direta produzem sumário vazio.",
        "PDF com tags de acessibilidade preserva títulos e alternativos para leitores de tela; PDF sem tags perde a semântica do documento.",
        "Quebra de seção com desvinculação permite numeração romana nas preliminares e arábica no corpo; quebra de página simples não permite cabeçalhos distintos."
      ],
      "fluxos": [
        "Aplicar estilos Título 1 e Título 2 > Inserir sumário automático > Criar tabelas com fórmulas simples > Inserir figuras com legendas automáticas > Inserir quebra de seção e configurar cabeçalhos/rodapés distintos > Ativar controle de alterações na revisão > Atualizar todos os campos > Exportar PDF com estrutura de acessibilidade > Validar em leitor de tela"
      ],
      "excecoes": [
        "Cálculos complexos não ficam na tabela do Word: migram para o Excel, deixando apenas fórmulas simples como =SUM(ABOVE) quando suficientes",
        "A exportação com opções de estrutura de acessibilidade depende da versão do Word; quando não disponíveis, a acessibilidade deve ser garantida pelos estilos e textos alternativos e validada em leitor de tela",
        "Formatação direta em títulos nunca substitui estilos de título para geração de sumário, independentemente da aparência visual"
      ],
      "palavrasChave": [
        "sumário automático",
        "legenda automática",
        "quebra de seção",
        "controle de alterações",
        "PDF acessível",
        "atualizar campo",
        "leitor de tela",
        "estilos de título"
      ],
      "checklist": [
        "Ordeno as etapas de produção do relatório na sequência correta",
        "Executo o ponto de verificação de cada etapa antes de avançar",
        "Diagnóstico sumário vazio verificando estilos de título aplicados",
        "Garanto numeração de página distinta por seção (romana nas preliminares, arábica no corpo)",
        "Valido o PDF final em leitor de tela ou verificador de acessibilidade antes da distribuição"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Criar um relatório técnico simples com sumário automático e uma tabela, aplicando estilos de título aos capítulos e inserindo o sumário na ordem correta.",
        "dados": "Documento do Word com três capítulos (Introdução, Metodologia, Conclusão) e uma tabela simples com três colunas e cinco linhas; os capítulos devem receber estilos Título 1 antes de qualquer sumário ser inserido.",
        "conceitos": [
          "Estilos de título (Título 1, Título 2)",
          "Sumário automático como campo gerado dos estilos"
        ],
        "estrategia": "Aplicar estilos Título 1 aos títulos dos capítulos antes de inserir o sumário, para que o campo tenha estrutura de onde se alimentar; inserir o sumário via Referências > Sumário > Sumário Automático apenas após os estilos estarem aplicados; criar a tabela simples com formatação padrão.",
        "execucao": [
          "Selecionar o título do primeiro capítulo e aplicar o estilo Título 1 na galeria de estilos; repetir para os demais capítulos",
          "Posicionar o cursor no início do documento, onde o sumário deve ficar, e abrir Referências > Sumário > Sumário Automático",
          "Inserir a tabela simples via Inserir > Tabela com três colunas e cinco linhas, aplicando formatação padrão",
          "Salvar o documento e abrir a visualização de impressão para confirmar que o sumário lista os três capítulos com os números de página corretos"
        ],
        "resultado": "O relatório exibe um sumário automático populado com os três capítulos e números de página, a tabela simples está inserida com formatação padrão, e o sumário é um campo gerado dos estilos Título 1 aplicados, não texto digitado.",
        "justificativa": "O resultado é o gabarito porque o sumário se alimenta exclusivamente dos estilos de título aplicados aos capítulos; aplicar os estilos primeiro garante que o campo de sumário encontre os títulos e gere a lista correta, enquanto a formatação direta não apareceria no sumário.",
        "errosFrequentes": [
          "Aplicar formatação direta (negrito e tamanho maior) nos títulos em vez de estilos Título 1, deixando o sumário vazio",
          "Inserir o sumário antes de aplicar os estilos de título, produzindo lista vazia porque o campo não tem estrutura de onde se alimentar",
          "Digitar o sumário manualmente como texto estático, que não se atualiza quando os capítulos mudam de posição"
        ],
        "variacao": "O relatório passa a incluir seções secundárias dentro de cada capítulo, que devem receber estilo Título 2 e aparecer no sumário com recuo hierárquico, exigindo que o aluno aplique Título 2 aos subtítulos e atualize o campo do sumário para refletir a nova estrutura."
      },
      {
        "tipo": "aplicacao",
        "problema": "Montar um relatório com preliminares (folha de rosto e resumo) numeradas em algarismos romanos e corpo numerado em algarismos arábicos, com cabeçalhos e rodapés diferentes entre as duas partes.",
        "dados": "Relatório dividido em duas partes: preliminares com duas páginas (folha de rosto e resumo) numeradas i e ii, e corpo a partir da página 1 numerado 1, 2, 3; cada parte deve exibir cabeçalho e rodapé próprios, sem herdar da outra seção.",
        "conceitos": [
          "Quebra de seção (tipo Próxima Página)",
          "Cabeçalho e rodapé distintos por seção com desvinculação (Vincular ao Anterior desmarcado)"
        ],
        "estrategia": "Inserir uma quebra de seção do tipo Próxima Página após as preliminares para separar as duas partes; nas preliminares configurar rodapé com numeração em algarismos romanos; no início do corpo desvincular o cabeçalho e o rodapé da seção anterior e definir numeração arábica reiniciada em 1; editar o cabeçalho de cada seção de forma independente.",
        "execucao": [
          "Inserir quebra de seção (tipo Próxima Página) imediatamente após as páginas preliminares, separando-as do corpo do relatório",
          "Nas preliminares, abrir Inserir > Número de Página e definir formato em algarismos romanos (i, ii, iii) para o rodapé",
          "No início do corpo, desmarcar Vincular ao Anterior no cabeçalho e no rodapé para desvincular da seção preliminar, e definir formato arábico (1, 2, 3) reiniciado em 1",
          "Editar o texto do cabeçalho de cada seção independentemente para que cada parte exiba seu próprio cabeçalho sem herdar da outra",
          "Visualizar o documento para confirmar que as preliminares exibem i e ii enquanto o corpo reinicia em 1, com cabeçalhos distintos por seção"
        ],
        "resultado": "O relatório apresenta preliminares numeradas em algarismos romanos (i, ii) e corpo numerado em algarismos arábicos reiniciado em 1, com cabeçalhos e rodapés próprios de cada seção, sem herança indevida entre as partes.",
        "justificativa": "O resultado é o gabarito porque apenas a quebra de seção com desvinculação de cabeçalho/rodapé permite numerações e cabeçalhos distintos entre partes; a quebra de página simples herdaria a numeração e o cabeçalho, quebrando a separação exigida entre preliminares e corpo.",
        "errosFrequentes": [
          "Usar quebra de página simples em vez de quebra de seção, fazendo o corpo herdar a numeração romana e o cabeçalho das preliminares",
          "Esquecer de desmarcar Vincular ao Anterior ao iniciar o corpo, fazendo o rodapé arábico herdar o formato romano da seção anterior",
          "Não reiniciar a numeração arábica em 1 no corpo, fazendo as páginas continuarem a sequência romana"
        ],
        "variacao": "O relatório acrescenta uma terceira seção (apêndice) após o corpo, que deve retomar a numeração arábica contínua a partir do último número do corpo e exibir cabeçalho próprio de apêndice, exigindo nova quebra de seção com desvinculação e configuração independente de cabeçalho."
      },
      {
        "tipo": "erro",
        "problema": "Um relatório pronto é exportado para PDF, mas o sumário aparece vazio após a atualização do campo; o avaliador deve identificar a causa e a correção na ordem certa.",
        "dados": "Relatório com capítulos formatados apenas com negrito e tamanho maior (formatação direta), sem estilos Título 1 aplicados; o sumário foi digitado como texto estático ou inserido como campo antes dos estilos existirem; após editar títulos, o campo do sumário exibe lista vazia.",
        "conceitos": [
          "Estilos de título versus formatação direta na geração de sumário",
          "Sumário como campo que exige estilos de título e atualização explícita"
        ],
        "estrategia": "Diagnosticar em duas frentes: verificar se os capítulos têm estilos Título 1 aplicados (e não apenas formatação direta) e se o sumário é um campo gerado via Referências > Sumário, não texto estático; aplicar os estilos ausentes, excluir o sumário antigo se for estático e reinserir como campo, então atualizar o campo e reexportar o PDF.",
        "execucao": [
          "Verificar se os títulos dos capítulos usam estilo Título 1 na galeria de estilos ou apenas formatação direta (negrito e tamanho maior), aplicando Título 1 onde estiver ausente",
          "Confirmar se o sumário é um campo gerado (Referências > Sumário) ou texto estático digitado; se for estático, excluí-lo e reinserir via Referências > Sumário > Sumário Automático",
          "Selecionar todo o documento com Ctrl+A e pressionar F9, ou clicar no sumário e escolher Atualizar campo > atualizar toda a estrutura, para popular o sumário com base nos estilos aplicados",
          "Reexportar o PDF com as opções de estrutura de acessibilidade, quando disponíveis na versão, e abrir em leitor de tela para confirmar que o sumário agora lista os capítulos corretamente"
        ],
        "resultado": "O sumário passa a exibir a lista correta dos capítulos após aplicar estilos Título 1, reinserir o sumário como campo (quando necessário) e atualizar todos os campos; o PDF reexportado preserva a estrutura para leitores de tela.",
        "justificativa": "O resultado é o gabarito porque o sumário vazio decorre da ausência de estilos de título e/ou de um sumário como texto estático; só a aplicação dos estilos Título 1, a reinserção como campo gerado e a atualização explícita restauram o sumário, pois formatação direta não alimenta o campo de sumário.",
        "errosFrequentes": [
          "Acreditar que negrito e tamanho maior nos títulos são suficientes para o sumário reconhecer os capítulos, ignorando a exigência de estilos Título 1",
          "Assumir que os campos se atualizam sozinhos ao editar títulos, sem executar a atualização explícita (Ctrl+A, F9, atualizar todo o sumário)",
          "Exportar o PDF sem corrigir o sumário, entregando um documento com lista vazia e sem estrutura de acessibilidade"
        ],
        "variacao": "O mesmo relatório apresenta, além do sumário vazio, figuras sem texto alternativo e numeração de página reiniciada indevidamente no corpo; o aluno deve corrigir o sumário, adicionar textos alternativos às figuras e corrigir a quebra de seção na ordem de auditoria prescrita."
      }
    ]
  }
};
