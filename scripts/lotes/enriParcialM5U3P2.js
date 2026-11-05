const enriParcialM5U3P2 = {
  "m5-u3-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os modelos de difusão dominam a geração de imagens e trazem consequências que vão além do desenho: a partir de uma saída, em geral não se reconstrói o registro de treino, o que impede garantir que a imagem não reproduza material protegido. Por isso a política de uso institucional precisa tratar licença, marcação de conteúdo sintético e vedação de falsificação. Compreender o mecanismo explica por que a reprodutibilidade depende de registrar parâmetros.",
      "preRequisitos": ["Diferença entre conteúdo gerado e conteúdo recuperado", "Noção de parâmetro de geração, como semente, número de passos e escala de orientação", "Regras de direito autoral e de licença de uso de material de terceiros", "Política de imagem de pessoas e de símbolos institucionais"],
      "objetivosObservaveis": ["Explicar o princípio da difusão, com ruído progressivo no treino e remoção guiada na geração", "Identificar os componentes: processo de ruído, denoiser e condicionamento textual", "Comparar a difusão com a geração textual em relação a parâmetros e reprodutibilidade", "Relacionar a geração de imagens a riscos de falsificação, licença e rastreabilidade"],
      "competencias": ["Análise conceitual do mecanismo de difusão", "Avaliação de risco institucional no uso de imagens geradas", "Formulação de regras de registro e de marcação de conteúdo sintético", "Leitura crítica de termos de uso e de licença da saída"],
      "dificuldade": "intermediario",
      "relacoes": ["m5-u3-t1-s2 (Geração probabilística, Transformer, atenção e fases de construção do modelo) — base de comparação com a geração textual", "m5-u3-t3-s1 (Privacidade, segurança, direitos autorais e avaliação de resultados) — aprofunda direitos autorais e critérios de avaliação", "m5-u3-t1-s1 (Modelos generativos x discriminativos, tokens, embeddings e janela de contexto) — introduz a noção de geração de conteúdo livre"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Modelos de difusão ganham espaço em itens que pedem o princípio de funcionamento ou as implicações de governança da imagem gerada, como licença e falsificação; a classificação é estimativa pedagógica de relevância no conteúdo programático, não frequência estatística."
      }
    },
    "niveis": {
      "iniciante": "O aluno entende, em nível conceitual, que a difusão aprende a adicionar ruído a uma imagem real, em etapas, até obter ruído puro, e aprende também o caminho inverso. Na geração, parte do ruído e o remove passo a passo, guiado pela descrição textual, até formar uma imagem coerente com o pedido. Reconhece que o resultado depende de parâmetros de geração.",
      "intermediario": "O aluno descreve os três componentes conceituais: o processo de ruído, que define o espaço de trabalho; o denoiser, rede que estima o ruído a remover e que é o que se treina; e o condicionamento textual, que orienta a remoção na direção do conteúdo pedido. Compara com a geração textual e conclui que, em ambos os casos, a repetição exige registrar parâmetros.",
      "avancado": "O aluno analisa as implicações de governança: a impossibilidade de inferir o registro de treino de uma imagem gerada, a leitura obrigatória dos termos de uso para saber a licença da saída, o risco de falsificação de pessoa ou de documento e a necessidade de registrar prompt, semente, modelo, data e responsável. Relaciona essas implicações a limitações de custo e de edição local.",
      "especialista": "O aluno projeta a política interna de imagens geradas: vedação de imagem de pessoa real sem autorização documentada, vedação de elemento que pareça documento oficial, marcação de conteúdo sintético quando houver risco de induzir o cidadão a erro, revisão humana antes da publicação, registro completo e verificação da licença do material de referência."
    },
    "comparacoes": [
      {
        "tema": "Geração de imagem por difusão versus geração de texto",
        "a": { "rotulo": "Difusão (imagem)", "texto": "A imagem é construída pelo refinamento sucessivo de uma versão ruidosa, guiado pela descrição textual. Depende de número de passos, escala de orientação e semente, e a repetibilidade exige registrar esses parâmetros." },
        "b": { "rotulo": "Geração textual", "texto": "O texto é construído pela escolha sucessiva de tokens de uma distribuição condicionada ao contexto. A variabilidade vem da amostragem, e a repetibilidade também exige fixar parâmetros e registrar a execução." },
        "diferencaGabarito": "Na difusão, o objeto nasce do ruído e é refinado passo a passo; no texto, nasce token a token de uma distribuição. Em ambos, parâmetros diferentes levam a resultados distintos, e o registro é o que permite reconstruir a saída."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como a imagem foi gerada por modelo, ela é original e não pode violar direito autoral de terceiros.",
        "porqueErrada": "A origem sintética não afasta o risco de reprodução de logotipo, personagem ou obra, nem resolve a licença da saída, definida pelos termos de uso do serviço. A identificabilidade limitada impede garantir que a imagem não reproduza material protegido, o que exige verificação antes do uso.",
        "versaoCorreta": "A origem artificial não confere imunidade autoral: o órgão precisa ler os termos de uso para conhecer a licença da saída e verificar se há semelhança com obra, logotipo ou personagem protegido antes de publicar a imagem."
      },
      {
        "afirmacaoEquivocada": "O resultado de uma difusão é reprodutível sem qualquer registro, bastando repetir a mesma descrição textual.",
        "porqueErrada": "A imagem também depende do número de passos, da escala de orientação e da semente. Repetir apenas a descrição, com parâmetros diferentes, produz imagem distinta; sem registrar esses valores e a versão do modelo, a reprodução deixa de ser possível.",
        "versaoCorreta": "Para reconstruir uma imagem de difusão, é preciso registrar a descrição, a semente, o número de passos, a escala de orientação e a versão do modelo; sem esse conjunto, repetir a descrição não garante a mesma saída."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Modelo de difusão", "Processo direto de adição de ruído", "Processo inverso de remoção de ruído", "Denoiser (rede que estima o ruído)", "Condicionamento textual", "Semente e parâmetros de geração"],
      "regras": ["O treino aprende a adicionar e a remover ruído; a geração parte do ruído", "A descrição textual orienta a remoção do ruído", "A repetição exige registrar semente, passos, escala de orientação e versão do modelo", "A política interna deve vedar imagem de pessoa real sem autorização e falsificação de documento"],
      "comparacoes": ["Difusão refina uma versão ruidosa; geração textual escolhe tokens de uma distribuição", "Imagem gerada dificulta inferir a origem; o registro de parâmetros permite reconstruí-la"],
      "fluxos": ["Treino: imagem real recebe ruído em etapas até virar ruído puro, e o modelo aprende o caminho inverso", "Geração: parte-se do ruído, remove-se guiado pela descrição e obtém-se a imagem final, com registro de parâmetros"],
      "excecoes": ["Em geral não se reconstrói o registro de treino a partir da imagem gerada", "Poucos passos podem reduzir a qualidade da imagem", "A edição local consistente e o custo computacional são limitações"],
      "palavrasChave": ["difusão", "ruído", "denoiser", "condicionamento", "semente", "escala de orientação", "reprodutibilidade", "marcação de conteúdo sintético"],
      "checklist": ["Explicar o processo direto e o inverso da difusão", "Identificar o denoiser e o condicionamento textual", "Registrar prompt, semente, passos, escala e versão do modelo", "Verificar a licença de uso nos termos do serviço", "Vedar imagem de pessoa real sem autorização documentada", "Vedar elemento que pareça documento oficial", "Marcar conteúdo sintético quando houver risco de induzir erro", "Submeter a imagem a revisão humana antes da publicação"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que a difusão é mais sensível à parametrização do que a geração textual em aplicações de conteúdo institucional?",
        "dados": "Uma mesma descrição textual usada para gerar imagem de campanha em três execuções, com semente, número de passos e escala de orientação alterados entre elas.",
        "conceitos": ["parâmetros de geração", "semente", "reprodutibilidade"],
        "estrategia": "Mostrar que a saída depende de um conjunto de parâmetros além da descrição e que, para auditoria e revisão de versão, esse conjunto precisa ser registrado.",
        "execucao": ["1. Fixar a descrição textual e variar semente, passos e escala de orientação.", "2. Observar que cada combinação produz imagem distinta.", "3. Concluir que a descrição, sozinha, não garante repetição.", "4. Registrar prompt, semente, passos, escala e versão do modelo no fluxo de produção."],
        "resultado": "Porque na difusão a construção da imagem depende de um número de passos, de uma escala de guidance e de uma semente: a mesma semente com parâmetros diferentes produz imagens distintas, e a repetição exige registrar os três. Em conteúdo institucional, a reprodutibilidade é requisito, então o registro desses parâmetros é obrigatório no fluxo de produção.",
        "justificativa": "O gabarito sustenta-se em dois pontos: a imagem nasce de um processo que depende de vários parâmetros e o uso institucional exige reprodutibilidade para auditoria; logo, registrar prompt, semente, passos, escala e versão é requisito do fluxo.",
        "errosFrequentes": ["Achar que repetir a descrição textual basta para obter a mesma imagem", "Registrar apenas o prompt e omitir semente, passos e escala de orientação"],
        "variacao": "Se a política exigisse apenas uma imagem final aprovada para publicação, o registro dos parâmetros continuaria necessário para justificar diferenças entre versões ao longo da revisão."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão quer gerar imagens ilustrativas para material de campanha. Quais regras devem constar da política interna?",
        "dados": "Material de campanha com imagens ilustrativas geradas por difusão, publicação voltada ao cidadão e necessidade de revisão interna antes da divulgação.",
        "conceitos": ["política de uso", "direito de imagem", "falsificação", "marcação de conteúdo sintético"],
        "estrategia": "Transformar os riscos identificados em regras objetivas de veto, marcação, revisão e registro, cobrindo pessoas, documentos, licença e autoria.",
        "execucao": ["1. Vedar imagem de pessoa real sem autorização expressa e documentada.", "2. Vedar elemento que possa parecer documento oficial, crachá, certidão ou assinatura.", "3. Exigir marcação de conteúdo sintético quando a publicação puder induzir o cidadão a erro.", "4. Exigir revisão humana antes da publicação.", "5. Registrar prompt, semente, modelo, data e responsável.", "6. Verificar a licença do material de referência e respeitar a política de imagem e de símbolos nacionais."],
        "resultado": "As regras mínimas são: vedar geração de imagens de pessoas reais sem autorização expressa e documentada; vedar qualquer elemento que possa parecer documento oficial, crachá, certidão ou assinatura; exigir marcação de conteúdo sintético quando a publicação puder induzir o cidadão a crer que se trata de registro real; exigir revisão humana antes da publicação; registrar prompt, semente, modelo, data e responsável; verificar a licença de uso do material de referência; e respeitar a política de imagem de servidor público e de símbolos nacionais.",
        "justificativa": "O gabarito converte cada risco em controle: o de imagem pede autorização documentada; o de falsificação, vedação de elemento oficial; o de indução a erro, marcação; o de qualidade e responsabilidade, revisão e registro; o autoral, verificação de licença.",
        "errosFrequentes": ["Publicar imagem de pessoa real gerada sem autorização documentada", "Omitir a marcação de conteúdo sintético quando a imagem pode ser tomada por registro real"],
        "variacao": "Se a campanha pedisse a imagem de um servidor identificável, a regra de autorização documentada seria aplicada pessoa a pessoa, ou a ilustração seria substituída por uma figura genérica."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como a imagem foi gerada por modelo, ela é original e não pode violar direito autoral de terceiros.'",
        "dados": "Imagem gerada por difusão exibindo marca semelhante a logotipo de terceiro; o órgão pretende usá-la em material publicado, sem verificar licença nem semelhança com obra protegida.",
        "conceitos": ["direito autoral", "licença da saída", "risco de similaridade"],
        "estrategia": "Desmontar a suposição de imunidade autoral pela origem sintética, tratando licença, semelhança com obra protegida e termos de uso como verificações prévias obrigatórias.",
        "execucao": ["1. Reconhecer que a origem artificial não afasta o risco de reprodução de obra protegida.", "2. Verificar os termos de uso do serviço para conhecer a licença da saída.", "3. Conferir semelhança com logotipo, personagem ou obra antes do uso.", "4. Concluir que a verificação é obrigatória antes da publicação."],
        "resultado": "Errado. A origem sintética não afasta o risco de reprodução de padrão protegido, de logotipo, de personagem ou de obra; e os termos de uso do serviço definem a licença da saída, que precisa ser lida e aceita pelo órgão.",
        "justificativa": "O gabarito parte de duas frentes: a semelhança com material protegido, que a identificabilidade limitada não descarta, e a licença da saída, definida nos termos de uso; sem conferir as duas, o uso institucional fica exposto.",
        "errosFrequentes": ["Supor que a origem sintética elimina o risco autoral", "Ignorar os termos de uso e a licença da saída antes da publicação"],
        "variacao": "Se a imagem reproduzisse um personagem de desenho bastante conhecido, o uso deveria ser recusado mesmo que a geração fosse nova, pela semelhança com obra protegida."
      }
    ]
  },
  "m5-u3-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A alucinação não é defeito ocasional, mas modo de funcionamento: o modelo foi otimizado para produzir texto plausível e não verifica fatos. Como a janela de contexto é finita, o que está fora dela é invisível, e a incerteza é modelada de forma implícita, sem probabilidade calibrada de acerto. Reconhecer isso é o que permite definir o uso admissível da saída e as técnicas de verificação no serviço público.",
      "preRequisitos": ["Ideia de geração probabilística e de plausibilidade de texto", "Noção de janela de contexto e de recuperação de trechos", "Diferença entre rascunho de apoio e ato administrativo", "Noções de proteção de dados e de sigilo aplicadas à saída do modelo"],
      "objetivosObservaveis": ["Explicar por que modelos generativos produzem alucinações a partir do mecanismo", "Relacionar alucinação a limites de contexto e à amostragem probabilística", "Identificar sinais de alerta de alucinação em uma saída", "Aplicar técnicas de verificação e definir o regime de uso admissível"],
      "competencias": ["Análise técnica das causas de alucinação", "Leitura crítica de saída que aparenta confiança", "Desenho de verificações com fonte obrigatória e resposta que admite ausência", "Tomada de decisão sobre o uso admissível da saída no serviço público"],
      "dificuldade": "avancado",
      "relacoes": ["m5-u3-t2-s2 (RAG, embeddings e bases vetoriais) — a recuperação com trecho exibido é a principal mitigação", "m5-u3-t1-s2 (Geração probabilística, Transformer, atenção e fases de construção do modelo) — explica a origem mecânica da alucinação", "m5-u3-t1-s1 (Modelos generativos x discriminativos, tokens, embeddings e janela de contexto) — define o limite que agrava a alucinação"],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Alucinação e limite de contexto são temas centrais em itens que cobram a diferença entre uso de apoio e uso como fonte de fato, além das técnicas de verificação e do regime de uso admissível; a classificação é estimativa pedagógica de relevância no conteúdo, não contagem de incidência."
      }
    },
    "niveis": {
      "iniciante": "O aluno entende que alucinação é a produção de afirmação falsa apresentada com a mesma segurança de uma verdadeira, porque o modelo foi otimizado para texto plausível e não verifica fatos. Reconhece que a janela de contexto é finita, que o que está fora dela não é visto e que o modelo manifesta confiança no estilo, não na evidência.",
      "intermediario": "O aluno explica as combinações que agravam a alucinação: perguntas sobre evento recente, pergunta que exige dado não fornecido e premissa falsa aceita pelo modelo. Identifica sinais de alerta na saída, como número muito específico sem fonte, citação de documento ausente da base e afirmação sobre fato local sem referência, e reconhece que a mitigação é de processo.",
      "avancado": "O aluno aplica técnicas de verificação: basear a resposta em recuperação de trechos, exigir citação da fonte, permitir que a resposta declare que a base não contém o trecho, restringir o escopo a fontes aprovadas, conferir números, datas e identificadores contra a fonte e revisar por amostragem com indicador de conformidade.",
      "especialista": "O aluno define o regime de uso admissível: rascunho para servidor que revisa e assina, apoio à classificação com critério definido, texto padrão com fonte anexada e busca sobre base própria com trecho exibido. Veda o uso como fonte de fato não verificado em decisão sobre direito, como base de cálculo com dado sensível sem base legal e como saída de dado sigiloso."
    },
    "comparacoes": [
      {
        "tema": "Modelo como fonte de fato versus modelo como gerador de texto",
        "a": { "rotulo": "Modelo como fonte de fato", "texto": "Supõe que a resposta é verdadeira porque soa segura, sem exigir trecho de origem. Trata a saída como prova e dispensa a verificação contra documento, o que expõe a decisão sobre direitos a informação inventada." },
        "b": { "rotulo": "Modelo como gerador de texto", "texto": "Trata a saída como rascunho plausível que precisa de fonte e de conferência. Exige recuperação com trecho exibido, admite a resposta que declara não constar na base e reserva a decisão ao servidor responsável." },
        "diferencaGabarito": "A diferença está em quem sustenta o fato: na primeira leitura, o próprio texto gerado; na segunda, o documento recuperado e citado. Como a alucinação é modo de funcionamento, a verificação é requisito e não tarefa opcional."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A alucinação é um defeito corrigível com um prompt melhor.",
        "porqueErrada": "Prompts melhorados reduzem a frequência de alucinação, mas não a eliminam, porque a causa é estrutural: otimização para plausibilidade e ausência de verificação de fato durante a geração. A confiança no estilo não indica correção do conteúdo.",
        "versaoCorreta": "A alucinação reduz-se de forma confiável por processo, não por prompt isolado: fonte obrigatória, resposta verificável, permissão para declarar que o trecho não consta e revisão humana nos casos que afetam direito."
      },
      {
        "afirmacaoEquivocada": "Se a janela de contexto for grande o suficiente, o modelo deixa de alucinar, porque passa a ver todo o material necessário.",
        "porqueErrada": "Ampliar a janela reduz parte das falhas por falta de informação, mas não elimina a alucinação, já que a causa é a geração plausível sem verificação de fato. Além disso, em contexto muito cheio o desempenho na recuperação de informação relevante tende a cair, e o modelo segue preenchendo lacunas.",
        "versaoCorreta": "A janela maior ajuda a disponibilizar material, mas não elimina a alucinação, que decorre da geração sem verificação de fato; a mitigação combina recuperação, citação de fonte e revisão, e não depende apenas do tamanho do contexto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Alucinação", "Plausibilidade versus verdade", "Limite de janela de contexto", "Incerteza não calibrada", "Verificação com fonte obrigatória", "Resposta que admite ausência na base"],
      "regras": ["O modelo não consulta fontes durante a geração e não verifica fato", "A verificação é requisito, não tarefa opcional", "A resposta deve citar a fonte ou declarar que o trecho não consta", "Não usar a saída como fonte de fato não verificado em decisão sobre direito"],
      "comparacoes": ["Confiança no estilo não indica correção do conteúdo", "Prompt melhor reduz frequência; processo com fonte é o que dá confiabilidade"],
      "fluxos": ["Pergunta, recuperação de trechos aprovados, resposta com citação ou declaração de ausência, conferência de números e identificadores, revisão amostral", "Saída gerada passa por confronto com a fonte, uso como rascunho, revisão e assinatura por servidor"],
      "excecoes": ["Alucinação não se elimina apenas com prompt melhor", "Janela maior não elimina a alucinação", "Contexto cheio pode reduzir a recuperação de informação relevante"],
      "palavrasChave": ["alucinação", "plausibilidade", "janela de contexto", "incerteza", "citação de fonte", "não consta", "verificação", "uso admissível"],
      "checklist": ["Basear a resposta em trechos recuperados de fontes aprovadas", "Exigir citação da fonte no formato definido", "Permitir que a resposta declare que a base não contém o trecho", "Conferir números, datas e identificadores contra a fonte", "Revisar por amostragem com indicador de conformidade", "Reservar o uso como rascunho sujeito a revisão e assinatura", "Vedar uso como fonte de fato não verificado em decisão sobre direito"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um servidor pede ao modelo o prazo de análise de um requerimento. O modelo responde «15 dias úteis», com segurança. Qual o problema?",
        "dados": "Pergunta sobre o prazo de análise de um requerimento, sem trecho normativo fornecido e sem base de recuperação configurada; o modelo responde 15 dias úteis com aparência de certeza.",
        "conceitos": ["alucinação", "uso admissível", "fonte normativa"],
        "estrategia": "Separar dois problemas no caso: a invenção do número, por falta de fonte, e a inadequação de usar geração para prazo que afeta o cidadão, tratando a fonte normativa como obrigatória.",
        "execucao": ["1. Verificar que o número não tem fonte no contexto fornecido.", "2. Reconhecer que o modelo não consulta a base e preenche a lacuna com valor plausível.", "3. Recuperar o trecho normativo ou enviá-lo no contexto.", "4. Exigir que a resposta cite a fonte e usar apenas o prazo confirmado."],
        "resultado": "Há dois problemas: o número não tem fonte no contexto fornecido, portanto é estatisticamente plausível e factualmente vazio, e o prazo que afeta o cidadão precisa vir do ato normativo, não de geração. A conduta correta é fornecer o trecho normativo, ou recuperá-lo, e exigir que a resposta cite a fonte.",
        "justificativa": "O gabarito reúne as duas falhas: o número é plausível e factualmente vazio, e prazo que afeta o cidadão exige ato normativo como fonte; por isso a conduta correta é recuperar o trecho, exigir citação e confirmar o prazo antes de responder.",
        "errosFrequentes": ["Aceitar o número porque a resposta soa segura", "Resolver apenas com prompt melhor, sem fornecer a fonte normativa"],
        "variacao": "Se o prazo constasse de um trecho da base recuperado e citado, a resposta passaria a ser verificável e o uso deixaria de ser alucinação, mantendo a exigência de conferência."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como reduzir alucinações em um assistente interno que responde sobre a legislação do órgão?",
        "dados": "Assistente interno sobre legislação do órgão, com risco de afirmar dispositivo inexistente e necessidade de rastreabilidade da fonte em cada resposta.",
        "conceitos": ["RAG", "citação de fonte", "resposta negativa", "verificação automática"],
        "estrategia": "Combinar recuperação com trecho exibido, citação obrigatória, permissão de resposta negativa, restrição de escopo, conferência automática e revisão amostral com registro.",
        "execucao": ["1. Indexar os atos normativos em embeddings e buscar trechos antes de responder.", "2. Exigir citação no formato definido e bloquear a resposta quando não houver trecho relevante.", "3. Permitir que a resposta declare que a base não contém o trecho.", "4. Restringir o escopo a fontes aprovadas e conferir números, datas e identificadores.", "5. Revisar por amostragem e registrar prompt, resposta e fonte para auditoria."],
        "resultado": "Reduz-se a alucinação com um conjunto de controles: indexar os atos normativos em embeddings e buscar os trechos antes de responder; exigir citação da fonte e bloquear a resposta sem trecho relevante; permitir a resposta negativa, que declara não haver o trecho na base; restringir o escopo a fontes aprovadas; conferir números, datas e identificadores; e revisar por amostragem, registrando prompt, resposta e fonte para auditoria.",
        "justificativa": "O gabarito reúne controles que atacam a causa: recuperação com trecho exibido, citação obrigatória, resposta que admite ausência na base, escopo restrito e conferência automática, com revisão e registro que tornam a mitigação auditável.",
        "errosFrequentes": ["Confiar apenas em ajuste de prompt e dispensar a recuperação com fonte", "Bloquear a resposta negativa e forçar o modelo a completar a lacuna"],
        "variacao": "Se a pergunta envolver norma revogada, a conferência contra a fonte deve verificar a vigência do trecho recuperado, e não apenas a presença do dispositivo na base."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação para julgar: 'A alucinação é um defeito corrigível com um prompt melhor.' Verdadeiro ou falso, e por quê?",
        "dados": "Equipe tenta eliminar alucinação apenas refinando o prompt, sem recuperação de fonte nem revisão, e observa que números e citações continuam aparecendo sem respaldo.",
        "conceitos": ["alucinação estrutural", "limite do prompt", "verificação por processo"],
        "estrategia": "Mostrar que o prompt altera a frequência, mas não a causa, e que a redução confiável decorre de processo com fonte obrigatória e resposta verificável.",
        "execucao": ["1. Reconhecer que a alucinação decorre da geração plausível sem verificação de fato.", "2. Diferenciar redução de frequência de eliminação do problema.", "3. Indicar fonte obrigatória, citação, resposta que admite ausência e revisão humana.", "4. Concluir que o prompt é parte do processo, não a solução isolada."],
        "resultado": "Errado. Prompts melhorados reduzem a frequência de alucinação, mas não a eliminam, porque a causa é estrutural: otimização para plausibilidade e ausência de verificação de fato. A redução confiável vem de processo, com fonte obrigatória, resposta verificável, saída que admite não constar e revisão humana nos casos que afetam direito.",
        "justificativa": "O gabarito separa frequência de causa: o prompt melhora a tendência, mas a garantia vem de processo com fonte, resposta verificável e revisão; sem isso, a afirmação confunde ajuste de comportamento com eliminação do defeito.",
        "errosFrequentes": ["Tratar o prompt como solução definitiva para a alucinação", "Dispensar a fonte obrigatória porque a resposta ficou mais coerente"],
        "variacao": "Se o assistente passasse a exigir trecho de origem e a admitir a resposta não consta, a frequência de alucinação cairia de forma verificável, ainda que o fenômeno não fosse eliminado."
      }
    ]
  }
};
