const curriculum = {
  "modulo-1": {
    "titulo": "MICROSOFT 365 E APLICAÇÕES DE ESCRITÓRIO",
    "unidades": [
      {
        "id": "modulo-1-unidade-1",
        "titulo": "1.1 Ecossistema Microsoft 365",
        "topicos": [
          {
            "id": "modulo-1-unidade-1-topico-1",
            "titulo": "Diferenças entre Microsoft 365, Office LTSC e versões perpétuas",
            "metadados": {
              "recursosVisuais": [],
              "fontes": [],
              "testes": [
                "node-check",
                "smoke-vm"
              ],
              "estado": "implementado"
            },
            "subtopicos": [
              {
                "id": "modulo-1-unidade-1-topico-1-sub-1",
                "titulo": "Comparação de planos e recursos disponíveis",
                "objetivoAprendizagem": "Aluno diferenciará Microsoft 365, Office LTSC e versões perpétuas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as três formas de obter as aplicações Office — assinatura Microsoft 365, Office LTSC e versões perpétuas de varejo; (b) os critérios que separam os produtos: modelo de pagamento, serviços em nuvem (Teams, OneDrive), política de atualização e público-alvo; (c) a regra de prudência: o conjunto de recursos varia por plano, região e versão. POR QUE O CONHECIMENTO É IMPORTANTE: a questão típica descreve um cenário (precisa de Teams e coautoria; precisa de apps estáveis offline; uso doméstico simples) e pede o produto correto; atribuir a versão perpétua serviços de nuvem, ou prometer novos recursos ao LTSC, muda o gabarito. PRÉ-REQUISITOS: nenhuma além de noções básicas de licenciamento. OBJETIVOS OBSERVÁVEIS: (1) classificar um produto Microsoft a partir de características declaradas; (2) justificar a escolha para um cenário; (3) reconhecer que recursos dependem do plano/licença. COMPETÊNCIAS DESENVOLVIDAS: leitura de requisitos e escolha de produto; prudência técnica ao afirmar disponibilidade de recurso. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópicos 2 (licenciamento por volume) e 4 (armazenamento) da unidade 1.1; Módulo 4 (segurança e conformidade). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: o Office pode ser obtido por três caminhos com lógicas distintas. Microsoft 365: serviço por assinatura que reúne as aplicações Office nas modalidades desktop, web e mobile, serviços em nuvem (OneDrive para armazenamento e Teams para colaboração) e atualizações contínuas de recursos enquanto a assinatura estiver ativa; o conjunto exato de aplicações, serviços e cotas depende do plano (pessoal, familiar, Business, Enterprise) e da região — conferir na documentação oficial antes de afirmar qualquer recurso. Office LTSC (canal de manutenção de longo prazo): licença perpétua (compra única) com aplicações selecionadas, sem Teams e sem OneDrive em nuvem integrados, recebendo atualizações de segurança — sem entrega contínua de novas funcionalidades; destina-se a ambientes que exigem estabilidade e controle de mudança. Versões perpétuas de varejo: compra única com conjunto limitado de aplicações (Word, Excel, PowerPoint), sem serviços de nuvem integrados e sem garantia de atualização de funcionalidades novas; voltadas ao uso doméstico simples. Invariante conceitual: assinatura troca pagamento recorrente por atualização contínua e serviços; compra única troca preço fixo por congelamento de recursos. Critério de decisão: colaboração em nuvem e coautoria → assinatura; apps estáveis offline sem nuvem → LTSC; uso doméstico básico → perpétua de varejo.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir compra única de assinatura com a analogia do livro comprado versus revista assinada (o conteúdo novo só chega na assinatura).\n- Nível intermediário: classificar cenários: quais serviços (Teams, OneDrive) e qual política de atualização acompanham cada produto.\n- Nível avançado: propor divisão de parque (LTSC para back-office estático, assinatura para equipes colaborativas) justificando custo e necessidade.\n- Nível especialista: apontar por que afirmar \"o plano X inclui cota Y\" sem conferir a documentação oficial é erro técnico — recursos e cotas variam por plano, região e período.\n\nCOMPARAÇÕES CRÍTICAS:\n- Assinatura Microsoft 365 x versão perpétua: a assinatura é paga periodicamente e inclui atualizações contínuas de recursos e serviços em nuvem; a perpétua é compra única com recursos congelados — quando a questão pede \"atualizações contínuas\", o gabarito é assinatura.\n- Office LTSC x versão perpétua de varejo: ambos são compra única, mas o LTSC é canal organizacional com apps selecionados e atualizações de segurança, e o de varejo é doméstico com pacote básico — trocar os canais inverte a resposta sobre público-alvo.\n- Assinatura pessoal x organizacional: ambas são Microsoft 365, mas a organizacional traz gestão centralizada e recursos de conformidade; a disponibilidade de recursos específicos depende do plano — a alternativa que promete o mesmo conjunto em todos os planos está errada.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"a versão perpétua inclui Teams e armazenamento em nuvem com cota do plano\" — Motivo: atribui serviços de assinatura a produto de compra única — Versão tecnicamente correta: Teams e OneDrive em nuvem integrados caracterizam o Microsoft 365; a versão perpétua não os inclui.\n- Afirmação errada: \"o Office LTSC recebe novas funcionalidades continuamente\" — Motivo: inverte a política de atualização do canal — Versão tecnicamente correta: o LTSC recebe atualizações de segurança; a entrega contínua de recursos é da assinatura.\n- Afirmação errada: \"todos os planos do Microsoft 365 oferecem exatamente as mesmas aplicações e cotas\" — Motivo: termo absoluto — Versão tecnicamente correta: aplicações, serviços e cotas variam por plano, região e versão; confira na documentação oficial.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: assinatura, licença perpétua, Office LTSC, atualizações contínuas, serviços em nuvem, canal organizacional.\n- Regras e fórmulas: precisa de Teams/OneDrive/coautoria → Microsoft 365; precisa de apps estáveis offline → LTSC; uso doméstico simples → perpétua de varejo.\n- Exceções: conjunto de aplicações, serviços e cotas varia por plano, região e versão — nunca afirmar cota ou recurso sem conferir a documentação oficial.\n- Palavras-chave: Microsoft 365, Office LTSC, versão perpétua, assinatura, atualizações de segurança, coautoria.\n- Checklist de domínio: classifico produto por características; justifico a escolha por cenário; reconheço que cotas e recursos variam por plano; distingo LTSC de perpétua de varejo.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Organização precisa de Teams, armazenamento em nuvem e atualizações contínuas: qual produto e por quê? (2) Qual produto recebe apenas atualizações de segurança e é comprado uma única vez? (3) Um pacote doméstico com Word, Excel e PowerPoint, sem nuvem, é qual categoria? (4) Por que não se pode afirmar uma cota de armazenamento universal para o Microsoft 365? (5) Corrija: \"o LTSC inclui Teams e recebe novos recursos\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar o produto adequado a uma organização que precisa de Teams, de armazenamento em nuvem com cota adequada ao plano e de atualizações contínuas.",
                    "resposta": "Microsoft 365 (assinatura, plano Business/Enterprise): inclui os serviços de nuvem e as atualizações contínuas; o Office LTSC não inclui Teams nem OneDrive em nuvem integrados, e a versão perpétua não oferece assinatura nem atualizações de recursos."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Empresa com 50 estações precisa de Word, Excel e PowerPoint sem colaboração em nuvem e com atualizações apenas de segurança.",
                    "resposta": "Office LTSC (via licenciamento por volume) — preço único, sem Teams e sem OneDrive em nuvem integrados, com atualizações apenas de segurança. Se mais tarde algumas equipes precisarem de coautoria, a prática é combinar o LTSC existente com assinatura apenas para essas equipes, em vez de substituir todo o parque."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Órgão com dois perfis: setor de arquivo (sem internet, apps fixos) e equipe de projetos (coautoria em tempo real). Como distribuir os produtos?",
                    "resposta": "Divisão por perfil: o setor de arquivo usa Office LTSC (estabilidade, apps selecionados, sem nuvem); a equipe de projetos usa Microsoft 365 (assinatura) para ter Teams, OneDrive e coautoria. A justificativa técnica: cada perfil recebe a política de atualização e os serviços que efetivamente usa, evitando custo de assinatura onde não há colaboração e evitando LTSC onde a coautoria é requisito."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um colaborador afirma que a versão perpétua inclui Teams e armazenamento em nuvem com cota definida pelo plano.",
                    "correcao": "Incorreto: a versão perpétua (pacote doméstico) não inclui Teams nem armazenamento em nuvem integrado; essas características pertencem ao Microsoft 365 por assinatura — e a cota exata, quando existente, depende do plano e deve ser conferida na documentação oficial."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O Office LTSC inclui Teams e recebe atualizações de funcionalidades continuamente.",
                    "resposta": "Errado. O LTSC tem apenas as aplicações selecionadas, recebe atualizações de segurança e não inclui Teams nem OneDrive em nuvem integrados; atualizações contínuas de recursos são características da assinatura."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual é a diferença principal entre Microsoft 365 e versão perpétua? A) Preço; B) Modelo de assinatura com atualizações contínuas versus compra única sem garantia de recursos novos; C) Apenas interface.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual característica é exclusiva do modelo de assinatura entre os três produtos? A) Compra única; B) Atualizações contínuas de funcionalidades enquanto a assinatura estiver ativa; C) Funcionar offline.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de classificar um produto Microsoft (Microsoft 365, Office LTSC, versão perpétua) a partir de requisitos de colaboração, atualização e licenciamento e de justificar a escolha, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-2",
                "titulo": "Licenciamento por volume e benefícios organizacionais",
                "objetivoAprendizagem": "Aluno compreenderá modelos de licenciamento por volume.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é licenciamento por volume (Volume Licensing) e para qual perfil de organização ele se destina; (b) os benefícios organizacionais típicos: preços descontados, implantação centralizada, direitos de transferência e programas de upgrade; (c) os modelos citados nesta apostila: Open License, Open Value e Enterprise Agreement; (d) a regra de prudência: condições variam por programa, região e período, e devem ser conferidas na documentação oficial. POR QUE O CONHECIMENTO É IMPORTANTE: questões apresentam cenários organizacionais (escolas, órgãos, empresas com centenas de estações) e exigem distinguir compra no varejo de licenciamento por volume e identificar o programa adequado ao perfil; confundir varejo com volume ou assumir uma forma de pagamento universal muda o gabarito. PRÉ-REQUISITOS: subtópico 1 (Microsoft 365, Office LTSC e versões perpétuas). OBJETIVOS OBSERVÁVEIS: (1) definir licenciamento por volume; (2) associar cada modelo citado a um cenário organizacional compatível; (3) justificar a escolha com base em benefícios e limitações. COMPETÊNCIAS DESENVOLVIDAS: análise de cenários de contratação; leitura de requisitos de licenciamento. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópico 1 (comparação de planos); Módulo 4 (controles e conformidade); Módulo 6 (uso institucional e responsabilização). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média a alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: licenciamento por volume é a modalidade de contratação em que a organização adquire múltiplas licenças por programas voltados a grande quantidade de estações ou usuários, em vez de comprar unidades individuais no varejo. O problema que resolve: sem volume, a organização pagaria preço unitário cheio, manteria chaves espalhadas e não conseguiria padronizar instalações; com volume, obtém preços descontados, implantação centralizada (padronização de instalação e configuração em muitas máquinas), direitos de transferência de licença entre dispositivos e programas de upgrade, sempre conforme os termos do programa contratado. Modelos citados nesta apostila: Open License, Open Value e Enterprise Agreement; eles diferem em porte típico e forma de pagamento — o material registra que Open License corresponde a compra única, enquanto o Enterprise Agreement pode ter pagamento anual, e a escolha depende do programa. O Office LTSC é distribuído a organizações pelo canal de licenciamento por volume, não pelo varejo. Limitações: nomes, requisitos mínimos e condições comerciais variam por programa, região e período; esta apostila não afirma cotas, descontos numéricos ou prazos — confira a documentação oficial do programa vigente antes de decidir.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que volume não é varejo: trata-se de compra organizacional de muitas licenças, com gestão centralizada.\n- Nível intermediário: associar Open License, Open Value e Enterprise Agreement a perfis de organização e à forma de pagamento de cada um.\n- Nível avançado: analisar cenário misto (ex.: Office LTSC para estações sem colaboração em nuvem combinado com assinatura para equipes que precisam de Teams e OneDrive) e justificar a divisão de custos.\n- Nível especialista: diagnosticar erro de contratação (ex.: comprar no varejo em larga escala, ou contratar programa de grande porte sem atender aos requisitos) e listar os benefícios organizacionais perdidos em cada erro.\n\nCOMPARAÇÕES CRÍTICAS:\n- Varejo (retail) x licenciamento por volume: varejo é licença individual, com preço cheio e gestão manual; volume traz desconto e implantação centralizada — em questão sobre organização com muitas estações, a alternativa de compra no varejo está errada.\n- Open License x Enterprise Agreement: compra única x acordo que pode ter pagamento anual, conforme o programa; a forma de pagamento é o traço que decide o gabarito quando a questão contrasta os dois.\n- Licença por volume de apps perpétuos x assinatura Microsoft 365: o volume pode licenciar apps perpétuos (LTSC) sem serviços em nuvem; a assinatura inclui serviços (Teams, OneDrive) e atualizações contínuas de recursos; confundir os modelos leva a errar a disponibilidade de Teams e OneDrive.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"licenciamento por volume sempre exige pagamento mensal por usuário\" — Motivo: generalização falsa; o formato de pagamento depende do programa — Versão tecnicamente correta: Open License é compra única; Enterprise Agreement pode ser anual; não existe regra única para todos os programas.\n- Afirmação errada: \"os direitos de transferência de licença valem sem restrição\" — Motivo: termo absoluto — Versão tecnicamente correta: a transferência entre dispositivos é permitida conforme os termos do programa contratado, que podem impor condições.\n- Afirmação errada: \"qualquer consumidor final pode contratar Enterprise Agreement\" — Motivo: troca de conceitos entre canais de venda — Versão tecnicamente correta: os programas de volume são voltados a organizações; os requisitos de adesão variam por programa e devem ser conferidos na documentação oficial.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: Volume Licensing, implantação centralizada, direitos de transferência, programas de upgrade, canal de licenciamento por volume.\n- Regras e fórmulas: regra prática — organização com muitas estações busca programas de volume; estação isolada usa varejo; LTSC organizações via volume.\n- Exceções: condições, requisitos e preços variam por programa, região e período; nunca afirmar valor numérico sem conferir a documentação oficial.\n- Palavras-chave: Volume Licensing, Open License, Open Value, Enterprise Agreement, Office LTSC, implantação centralizada, transferência de licença.\n- Checklist de domínio: defino licenciamento por volume; distingo os três modelos citados; justifico a escolha para um cenário dado; reconheço que as condições variam por programa.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Uma prefeitura com 200 estações quer desconto e implantação centralizada: qual canal usar e por quê? (2) Qual modelo citado corresponde a compra única e qual pode ter pagamento anual? (3) Cite dois benefícios do licenciamento por volume além do preço. (4) Por qual canal o Office LTSC é distribuído a organizações? (5) Corrija a afirmação \"a transferência de licença entre dispositivos vale sem restrição\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Organização com 200 estações precisa comprar Office com desconto e implantação centralizada.",
                    "resposta": "Open Value ou Enterprise Agreement (licenciamento por volume) — preços descontados e gestão centralizada das instalações. A forma de pagamento depende do programa escolhido: Open License é compra única; Enterprise Agreement pode ser anual."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Escola com 50 computadores precisa de Word, Excel e PowerPoint, sem Teams nem colaboração em nuvem.",
                    "resposta": "Office LTSC via licenciamento por volume — compra única, atualizações apenas de segurança, sem Teams e sem OneDrive em nuvem integrados. Se depois uma equipe precisar de colaboração, a organização pode combinar o LTSC com assinatura apenas para esses usuários, em vez de trocar todo o parque."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Órgão substitui 300 estações antigas e quer reaproveitar as licenças nas máquinas novas.",
                    "resposta": "Passo 1: verificar se o programa contratado prevê direitos de transferência de licença entre dispositivos (benefício típico do licenciamento por volume). Passo 2: desinstalar nas máquinas antigas e ativar nas novas conforme o procedimento do programa. Passo 3: se os termos não ampararem o caso, adquirir licenças adicionais. Decisão final sempre na documentação oficial vigente do programa, pois as condições variam."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um gestor afirma que licenciamento por volume exige pagamento mensal por usuário.",
                    "correcao": "Incorreto: o formato de pagamento depende do programa escolhido — Open License é compra única; Enterprise Agreement pode ser anual. Não existe regra de pagamento única para todos os programas de volume."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual programa de licenciamento por volume é voltado a grandes organizações? A) Open License; B) Enterprise Agreement; C) Retail.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Volume Licensing permite transferência de licenças entre dispositivos.",
                    "resposta": "Certo, conforme os termos do programa contratado — a transferência é um benefício típico, sujeita às condições de cada programa."
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Open License e Enterprise Agreement têm a mesma forma de pagamento.",
                    "resposta": "Errado. O material registra Open License como compra única e Enterprise Agreement com possibilidade de pagamento anual; a forma de pagamento depende do programa escolhido."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de selecionar o modelo de licenciamento por volume adequado a um cenário organizacional, justificando a escolha com benefícios (desconto, implantação centralizada, transferência) e reconhecendo que as condições variam por programa, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-3",
                "titulo": "Aplicações Web, desktop e mobile",
                "objetivoAprendizagem": "Aluno distingirá versões web, desktop e mobile das aplicações Microsoft 365.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as três modalidades das aplicações do Microsoft 365 — Web (navegador), desktop (instalação local) e mobile (aplicativos para iOS/Android); (b) como cada modalidade se instala, se atualiza e se comporta offline; (c) como escolher a modalidade por cenário (tela pequena, ausência de internet, necessidade de recursos completos); (d) a regra de prudência: o conjunto de recursos varia por modalidade e por plano/licença. POR QUE O CONHECIMENTO É IMPORTANTE: a prova apresenta cenários (editar em tablet, trabalhar em voo, abrir no navegador de um quiosque) e pede a modalidade correta; afirmar que a versão mobile tem os recursos da desktop, ou que a web funciona sem internet, muda o gabarito. PRÉ-REQUISITOS: subtópico 1 (formas de obter o Office). OBJETIVOS OBSERVÁVEIS: (1) distinguir as três modalidades por funcionamento e limitações; (2) selecionar a modalidade adequada a um cenário; (3) reconhecer que recursos variam por modalidade e plano. COMPETÊNCIAS DESENVOLVIDAS: decisão de ferramenta por restrição de ambiente. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópicos 4 e 6 da unidade 1.1 (armazenamento e coautoria); unidade 1.5 (OneDrive). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: as três modalidades atendem ao mesmo objetivo — criar e editar documentos — em contextos diferentes. Aplicação Web: roda no navegador, sem instalação; oferece funcionalidades básicas; é atualizada automaticamente pelo serviço (o usuário não gerencia versão); depende de conexão com a internet — em algumas interfaces o trabalho pode iniciar sem rede, mas os recursos completos exigem acesso; o conjunto de recursos varia por navegador e por plano, a conferir na documentação oficial. Aplicação desktop: instalação local no computador; oferece funcionalidades completas; atualizações distribuídas pelo canal de atualização (Microsoft Update/serviço de atualização do Microsoft 365), conforme a versão e o canal configurados; funciona offline para edição — porém o salvamento em OneDrive/SharePoint e a coautoria exigem conexão. Aplicação mobile: aplicativos para iOS e Android otimizados para tela pequena; visão e edição básicas; sincronização com a nuvem; alguns recursos avançados dependem de assinatura e do plano — não afirmar limite ou cota. Ponto-chave: a mesma conta (pessoal ou organizacional) serve às três modalidades; o que muda é o conjunto de recursos por modalidade e por plano. Caso-limite para a prova: coautoria em tempo real exige arquivo em nuvem — arquivo puramente local no desktop não colabora, mesmo com aplicativo completo.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: relacionar cada modalidade ao dispositivo típico: navegador, computador, celular/tablet.\n- Nível intermediário: explicar atualização (automática na web, por canal no desktop, por loja no mobile) e o comportamento offline de cada uma.\n- Nível avançado: resolver cenário misto — editar offline no desktop e depois sincronizar; coautoria exige arquivo na nuvem.\n- Nível especialista: avaliar por que um recurso presente no desktop pode faltar na web ou no mobile (escopo da modalidade e plano/licença) e comunicar essa limitação sem afirmar cota.\n\nCOMPARAÇÕES CRÍTICAS:\n- Web x desktop: a web não exige instalação e atualiza sozinha, mas tem funcionalidades básicas e depende de internet; o desktop tem recursos completos e funciona offline — para \"todas as funções sem internet\", o gabarito é desktop.\n- Desktop x mobile: o desktop edita com recursos completos em tela grande; o mobile otimiza visualização e edição básica — afirmar paridade entre eles torna a alternativa errada.\n- Web x mobile: ambas são leves e sincronizam com a nuvem; a web roda no navegador de qualquer dispositivo e a mobile é aplicativo específico por sistema operacional — a alternativa que troca uma pela outra em cenário de \"navegador sem instalação\" está errada.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"a versão mobile tem todas as funções da versão desktop\" — Motivo: generalização falsa — Versão tecnicamente correta: o mobile oferece funcionalidades simplificadas, voltadas a visualização e edição básica.\n- Afirmação errada: \"a versão web funciona normalmente sem internet\" — Motivo: confunde modalidade web com desktop — Versão tecnicamente correta: a web roda no navegador e depende de conexão para seus recursos; a modalidade offline plena é a desktop.\n- Afirmação errada: \"o desktop dispensa internet para qualquer função\" — Motivo: termo absoluto — Versão tecnicamente correta: a edição local funciona offline, mas salvamento em OneDrive/SharePoint, sincronização e coautoria exigem conexão.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: aplicações Web, desktop e mobile; atualização automática; funcionamento offline; sincronização com a nuvem.\n- Regras e fórmulas: sem instalação e tela qualquer → web; recursos completos e offline → desktop; tela pequena e mobilidade → mobile.\n- Exceções: recursos variam por modalidade, navegador e plano/licença; coautoria exige arquivo em nuvem e conexão.\n- Palavras-chave: Office on the web, Ribbon desktop, aplicativo mobile, offline, sincronização, plano/licença.\n- Checklist de domínio: distingo as três modalidades; escolho a correta por cenário; explico offline por modalidade; não generalizo recursos entre planos.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Usuário precisa editar um documento em tablet sem instalar nada: qual modalidade e qual exigência de rede? (2) Trabalhador em voo sem internet precisa de todas as funções do Excel: qual modalidade? (3) Como a versão web é atualizada e quem gerencia essa atualização? (4) Por que a coautoria não funciona num arquivo salvo apenas localmente? (5) Corrija: \"o aplicativo mobile equivale ao desktop em recursos\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Usuário precisa editar um documento em tablet, sem instalar aplicativos.",
                    "resposta": "Usar a aplicação Web (Office on the web) pelo navegador — funcionalidades básicas e necessidade de conexão com a internet."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Trabalhador embarca em voo de três horas e precisa terminar uma planilha com funções completas do Excel.",
                    "resposta": "Aplicação desktop instalada: funciona offline com recursos completos. Preparação correta: antes de perder a conexão, abrir o arquivo (se estiver no OneDrive com cópia local disponível, ele já está baixado) e, ao recuperar a internet, deixar o cliente sincronizar as alterações. Alternativa: trabalhar em arquivo local e consolidar depois — lembrando que arquivo puramente local não tem coautoria nem histórico em nuvem."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Servidora recebe planilha por e-mail durante atendimento externo e precisa apenas conferir números e ajustar um valor.",
                    "resposta": "Aplicativo mobile: visualização e edição básica atendem ao ajuste simples; a sincronização com a nuvem devolve o arquivo atualizado ao ambiente de trabalho. Se a conferir envolver funções avançadas (tabela dinâmica, validação), a edição completa deve ficar para o desktop — a modalidade mobile não equivale à desktop em recursos."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a versão mobile tem todas as funções da versão desktop.",
                    "correcao": "Incorreto: o mobile oferece funcionalidades simplificadas, voltadas a visualização e edição básica; recursos avançados podem ainda depender de assinatura/plano — conferir na documentação oficial."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual modalidade funciona offline com funcionalidades completas? A) Web; B) Mobile; C) Desktop.",
                    "resposta": "C"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) As aplicações Web do Microsoft 365 são atualizadas automaticamente pelo serviço.",
                    "resposta": "Certo. Na modalidade web o usuário não gerencia versão: a atualização é automática, pois a aplicação roda no navegador a partir do serviço."
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A versão web das aplicações Microsoft 365 exige instalação local do Office.",
                    "resposta": "Errado. A versão web roda no navegador, sem instalação; o que ela exige é conexão com a internet."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir as modalidades Web, desktop e mobile e de escolher a modalidade correta para um cenário com restrição de dispositivo ou de conexão, justificando por funcionamento offline e recursos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-4",
                "titulo": "Armazenamento local e em nuvem",
                "objetivoAprendizagem": "Aluno compreenderá opções de armazenamento do Microsoft 365.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os três ambientes de armazenamento do Microsoft 365: OneDrive (nuvem por usuário), SharePoint (nuvem de equipe) e armazenamento local do dispositivo; (b) o que muda entre eles: acesso remoto, sincronização, histórico de versões e recuperação; (c) a condição para sincronização: cliente configurado (OneDrive Sync); (d) a regra de prudência: cotas dependem do plano/licença. POR QUE O CONHECIMENTO É IMPORTANTE: a prova pede o serviço correto para cada finalidade (arquivo pessoal versus biblioteca de equipe) e cobra a distinção entre local, sincronizado e em nuvem; afirmar cota universal ou supor que pasta local sincroniza sozinha muda o gabarito. PRÉ-REQUISITOS: subtópicos 1 e 3 (planos e modalidades de aplicação). OBJETIVOS OBSERVÁVEIS: (1) associar cada destino de armazenamento ao seu papel; (2) explicar o que a sincronização adiciona ao arquivo local; (3) reconhecer que cotas variam por plano. COMPETÊNCIAS DESENVOLVIDAS: escolha de destino de armazenamento; avaliação de risco de perda de dados. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópicos 6 (salvamento automático e versões) e 8 (permissões); unidade 1.5 (OneDrive); Módulo 4 (backup e continuidade). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: o dado no Microsoft 365 pode residir em três lugares com propriedades distintas. Armazenamento local: arquivos no disco do dispositivo; acesso rápido e funcionamento sem rede, mas sem acesso remoto, sem histórico em nuvem e sujeitos a falha do disco — a recuperação depende de backup externo. OneDrive: armazenamento em nuvem por usuário, integrado ao Microsoft 365; oferece acesso de qualquer dispositivo conectado, histórico de versões e recuperação de arquivos; a cota de armazenamento varia conforme o plano/licença — planos Enterprise costumam oferecer cotas superiores às pessoais, mas o valor exato deve ser conferido na documentação oficial do plano. SharePoint: armazenamento de equipe/colaborativo (bibliotecas de documentos), com permissões geridas por administradores e integração com o trabalho em grupo. Sincronização: o cliente OneDrive (Sync) mantém cópia local alinhada à nuvem, em ambas as direções; sem cliente configurado, uma pasta local não sincroniza com nada — sincronização é comportamento do cliente, não do disco. Fluxo típico: arquivo criado numa pasta sincronizada é gravado localmente, o cliente envia à nuvem e outras máquinas conectadas recebem a atualização. Limitações: sincronização não é backup imutável (alterações se propagam; o tema de backup separado é tratado no Módulo 4); recursos e cotas variam por plano — conferir na documentação oficial.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir \"arquivo no meu computador\" de \"arquivo na nuvem\" e quem consegue ver cada um.\n- Nível intermediário: explicar o papel do cliente de sincronização e o que acontece com um arquivo numa pasta sincronizada após edição offline.\n- Nível avançado: escolher destino por cenário: arquivo pessoal (OneDrive), biblioteca compartilhada com permissões (SharePoint), dado sensível sem nuvem (local com backup externo).\n- Nível especialista: avaliar risco: por que sincronização não substitui backup (propagação de alterações e de ransomware) e como combinar camadas de proteção.\n\nCOMPARAÇÕES CRÍTICAS:\n- OneDrive x SharePoint: OneDrive é espaço por usuário; SharePoint é espaço de equipe com permissões administradas — para \"biblioteca compartilhada de documentos da equipe\", o gabarito é SharePoint.\n- Local x sincronizado: o local existe só no dispositivo; o sincronizado mantém cópia local e nuvem alinhadas — depois de perder o dispositivo, só a cópia sincronizada sobrevive.\n- Sincronização x backup: sincronização propaga alterações (inclusive indesejadas) em ambas as direções; backup é cópia independente — a alternativa que trata OneDrive como backup completo está errada.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"o armazenamento local sincroniza automaticamente com a nuvem\" — Motivo: atribui comportamento de cliente ao disco — Versão tecnicamente correta: sincronizar exige o cliente OneDrive configurado com a pasta; armazenamento puramente local não sincroniza.\n- Afirmação errada: \"a cota do OneDrive é a mesma em todos os planos\" — Motivo: termo absoluto — Versão tecnicamente correta: a cota varia conforme o plano/licença; planos Enterprise costumam ser superiores aos pessoais e o valor exato deve ser conferido na documentação oficial.\n- Afirmação errada: \"guardar no OneDrive dispensa qualquer backup\" — Motivo: confunde sincronização com cópia independente — Versão tecnicamente correta: o OneDrive oferece versões e recuperação, mas não substitui estratégia de backup separada (Módulo 4).\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: armazenamento local, OneDrive (por usuário), SharePoint (equipe), cliente de sincronização, histórico de versões, recuperação de arquivos.\n- Regras e fórmulas: arquivo pessoal e individual → OneDrive; biblioteca de equipe com permissões → SharePoint; sem rede → local (com risco).\n- Exceções: cotas variam por plano/licença; sincronização exige cliente configurado; sincronização não é backup.\n- Palavras-chave: OneDrive, SharePoint, sincronização, cota, plano/licença, histórico de versões, recuperação.\n- Checklist de domínio: atribuo cada destino ao seu papel; explico a condição de sincronização; não afirmo cota sem plano; distingo sincronização de backup.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual serviço oferece armazenamento de equipe com permissões geridas por administradores? (2) O que é preciso para que uma pasta local sincronize com o OneDrive? (3) Um usuário editou offline um arquivo de pasta sincronizada: o que acontece ao reconectar? (4) Por que não se pode afirmar uma cota universal para o OneDrive? (5) Corrija: \"armazenamento local sincroniza sozinho com a nuvem\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Empresa com 100 usuários precisa de armazenamento em nuvem por usuário, com escala organizacional.",
                    "resposta": "OneDrive no contexto organizacional (planos Enterprise): armazenamento por usuário com integração ao Microsoft 365; a cota por usuário varia conforme o plano/licença contratado — planos Enterprise costumam oferecer cotas superiores às pessoais, com o valor exato a confirmar na documentação oficial do plano."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Equipe de 12 pessoas precisa de biblioteca de documentos compartilhada, com permissões definidas pela administração.",
                    "resposta": "SharePoint (biblioteca de documentos de equipe), integrado ao Microsoft 365: as permissões de leitura/edição são geridas no contexto do site de equipe, e o acesso pode ser feito também pelo Teams. Regra prática: documento individual → OneDrive do autor; material de equipe com controle de acesso → SharePoint."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Analista editou durante a viagem um arquivo localizado numa pasta sincronizada com o OneDrive, sem internet.",
                    "resposta": "A edição foi gravada na cópia local; ao reconectar, o cliente OneDrive comparou as versões e enviou as alterações à nuvem, e outros dispositivos conectados receberam a atualização. Precaução: se o dispositivo tivesse sido perdido na viagem, só sobreviveria a última versão sincronizada — daí o valor do histórico de versões e de backup separado para dados críticos."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que o armazenamento local sincroniza automaticamente com a nuvem.",
                    "correcao": "Incorreto: a sincronização exige o cliente OneDrive (Sync) configurado apontando para a pasta; armazenamento puramente local não sincroniza — nem faz parte do histórico de versões em nuvem."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual serviço oferece armazenamento de equipe no Microsoft 365? A) OneDrive pessoal; B) SharePoint; C) Conversa do Teams.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A cota de armazenamento do OneDrive é a mesma em todos os planos.",
                    "resposta": "Errado. A cota varia conforme o plano/licença; planos Enterprise podem ter cotas superiores às pessoais e o valor exato deve ser conferido na documentação oficial do plano."
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Uma pasta local em qualquer computador sincroniza com o OneDrive apenas por estar conectada à internet.",
                    "resposta": "Errado. Conexão não basta: a pasta precisa estar sob a gestão do cliente de sincronização (OneDrive Sync) configurado; pasta local fora do cliente não sincroniza."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de associar OneDrive, SharePoint e armazenamento local aos seus papéis, explicar a condição do cliente de sincronização e reconhecer que cotas variam por plano, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-5",
                "titulo": "Integração entre aplicações",
                "objetivoAprendizagem": "Aluno identificará integrações entre aplicações Microsoft 365.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os mecanismos de integração entre as aplicações do Microsoft 365: vinculação e incorporação de objetos (OLE), copiar especial com vínculo, gráficos ligados ao Excel, Teams como centro de colaboração, Power Automate para automação e APIs REST do Microsoft Graph; (b) a diferença decisiva entre dado estático, objeto incorporado e objeto vinculado; (c) as limitações do vínculo (dependência de acesso ao arquivo-fonte). POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra qual mecanismo mantém o dado atualizado no documento de destino; confundir copiar/colar comum com colar especial vinculado, ou incorporação com vinculação, muda o gabarito. PRÉ-REQUISITOS: noções básicas de Word, Excel e PowerPoint. OBJETIVOS OBSERVÁVEIS: (1) distinguir incorporação de vinculação; (2) escolher o mecanismo adequado a cada cenário; (3) reconhecer as limitações do vínculo. COMPETÊNCIAS DESENVOLVIDAS: montagem de documentos e apresentações com dados vivos; automação de fluxo entre aplicações. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópicos de armazenamento e de coautoria da unidade 1.1; unidade 1.3 (Excel); Módulo 3 (colaboração). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média a alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: integração é o compartilhamento de dados entre aplicações sem redigitação. Os mecanismos formam uma escala de acoplamento. Primeiro, o copiar/colar comum transfere uma cópia estática: o texto ou a tabela no destino não acompanha mudanças na fonte. Segundo, a vinculação e incorporação de objetos (OLE — Object Linking and Embedding) cria um objeto no documento de destino com duas variantes: incorporado, que carrega uma cópia dos dados dentro do próprio documento (não atualiza com a fonte), e vinculado, que mantém uma referência ao arquivo-fonte e reflete as alterações quando o vínculo é atualizado — no Word, por meio de Colar especial > Vincular. Terceiro, o PowerPoint aceita gráfico inserido diretamente (dados de planilha editáveis no próprio PowerPoint) ou gráfico vinculado ao Excel, que atualiza quando a planilha-fonte é recalculada. Quarto, o Teams atua como centro de colaboração: reúne conversas, arquivos das aplicações e serviços num único contexto de equipe. Quinto, o Power Automate automatiza fluxos entre aplicações (por exemplo, registrar em planilha o resultado de um formulário), com disponibilidade conforme o plano/licença. Sexto, as APIs REST do Microsoft Graph permitem integração programática para desenvolvedores. Limitações do vínculo: se o arquivo-fonte for movido, renomeado ou ficar inacessível, o vínculo não resolve e precisa ser reparado; colaboração em tempo real (coautoria) é mecanismo distinto do vínculo e não o substitui.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que copiar/colar comum cria cópia estática, sem relação posterior com a fonte.\n- Nível intermediário: distinguir objeto incorporado de objeto vinculado e executar Colar especial > Vincular no Word.\n- Nível avançado: montar fluxo com Power Automate entre aplicações e avaliar quando a disponibilidade depende do plano/licença.\n- Nível especialista: diagnosticar vínculo quebrado (fonte movida ou inacessível) e escolher entre reparar o vínculo, reincorporar o objeto ou substituir por coautoria no arquivo único.\n\nCOMPARAÇÕES CRÍTICAS:\n- Objeto incorporado x objeto vinculado: incorporado embute uma cópia (não atualiza com a fonte); vinculado mantém referência (atualiza, mas exige acesso à fonte) — quando a questão diz \"alterações no Excel refletem no Word\", o gabarito exige vínculo.\n- Copiar/colar comum x Colar especial vinculado: o primeiro não cria relação; o segundo cria vínculo OLE — trocar um pelo outro inverte a resposta sobre atualização automática.\n- Integração manual (OLE) x automação (Power Automate/Microsoft Graph): OLE resolve documento a documento na interface; automação encadeia aplicações em fluxos e pode exigir plano/licença específico — a alternativa que promete automação via OLE está errada.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"a integração entre as aplicações exige programação\" — Motivo: generalização falsa — Versão tecnicamente correta: a integração básica (colar especial vinculado, gráfico vinculado) é nativa da interface; APIs como o Microsoft Graph servem à automação avançada e ao desenvolvimento.\n- Afirmação errada: \"objeto incorporado se atualiza quando a fonte muda\" — Motivo: troca entre incorporação e vinculação — Versão tecnicamente correta: somente o objeto vinculado reflete mudanças da fonte; o incorporado é uma cópia dentro do documento.\n- Afirmação errada: \"o vínculo continua funcionando mesmo se o arquivo-fonte for movido para outra pasta\" — Motivo: termo absoluto sobre mecanismo dependente de caminho — Versão tecnicamente correta: mover, renomear ou tornar inacessível a fonte rompe o vínculo, que precisa ser reparado.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: OLE, incorporação, vinculação, Colar especial, gráfico vinculado, Teams como centro, Power Automate, Microsoft Graph.\n- Regras e fórmulas: precisa de atualização automática → vínculo (Colar especial > Vincular / gráfico vinculado); precisa de cópia fixa → colar comum ou incorporar.\n- Exceções: vínculo depende de a fonte permanecer acessível; automação e alguns serviços dependem do plano/licença — conferir na documentação oficial.\n- Palavras-chave: OLE, vinculado, incorporado, Colar especial, Power Automate, Microsoft Graph, hub.\n- Checklist de domínio: distingo estático, incorporado e vinculado; escolho o mecanismo por cenário; explico por que um vínculo quebra; sei o papel de Teams e Power Automate.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual mecanismo mantém uma tabela do Excel atualizada dentro de um documento Word? (2) Qual a diferença entre objeto incorporado e vinculado? (3) Um gráfico no PowerPoint precisa refletir a planilha de vendas a cada recálculo: como inserir? (4) Um vínculo parou de atualizar após a movimentação da planilha-fonte: o que ocorreu e como resolver? (5) Qual serviço automatiza fluxos entre aplicações do Microsoft 365 e o que determina sua disponibilidade?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Inserir tabela do Excel em documento Word com atualização automática quando a planilha mudar.",
                    "resposta": "Copiar a tabela no Excel > no Word, Colar especial > Vincular (OLE) — o objeto fica vinculado à fonte e as alterações no Excel refletem no Word quando o vínculo é atualizado."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Relatório mensal em Word deve exibir a tabela de indicadores mantida numa planilha Excel que muda toda semana.",
                    "resposta": "Usar Colar especial > Vincular: a tabela do relatório permanece conectada à planilha-fonte. Rotina mensal: atualizar a planilha, abrir o Word e atualizar o vínculo. Cuidado registrado nas limitações: se a planilha for movida de pasta ou renomeada, o vínculo quebra e precisa ser reparado antes da distribuição do relatório."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Equipe distribui apresentação PowerPoint com o gráfico de orçamento que o setor financeiro recalcula no Excel.",
                    "resposta": "Inserir o gráfico como vinculado ao Excel (Inserir > Gráfico vinculado ou copiar/colar vinculado): quando o financeiro recalcula a planilha, o gráfico da apresentação reflete os novos valores ao ser atualizado. Se a apresentação for enviada para fora e os valores precisarem congelar, é preferível colar como imagem ou incorporar — decisão conforme a finalidade (dado vivo versus dado estático)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a integração entre as aplicações do Microsoft 365 exige programação.",
                    "correcao": "Incorreto: a integração básica (OLE, Colar especial vinculado, gráfico vinculado) é nativa da interface; APIs (Microsoft Graph) são para automação avançada e desenvolvimento, e a disponibilidade de serviços como Power Automate depende do plano/licença."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual mecanismo vincula tabela do Excel em Word com atualização? A) Copiar/colar comum; B) OLE vinculado (Colar especial > Vincular); C) Exportar PDF.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Teams pode atuar como centro de colaboração integrando as aplicações do Microsoft 365.",
                    "resposta": "Certo. O Teams reúne conversas, arquivos e serviços das aplicações num único contexto de equipe, funcionando como hub de colaboração."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Um documento Word exibe tabela que NÃO reflete alterações recentes feitas na planilha Excel de origem. Causa mais provável? A) A tabela foi colada com copiar/colar comum, como cópia estática; B) O histórico de versões está ativo; C) Falta uma fonte de texto no sistema.",
                    "resposta": "A"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir objeto estático, incorporado e vinculado e de escolher o mecanismo de integração adequado a um cenário, justificando a dependência do vínculo em relação ao arquivo-fonte, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-6",
                "titulo": "Salvamento automático, sincronização, colaboração simultânea e histórico de versões",
                "objetivoAprendizagem": "Aluno compreenderá mecanismos de salvamento automático e colaboração em tempo real.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o salvamento automático (autosave) e sua condição: arquivo em OneDrive/SharePoint; (b) sincronização e coautoria: edição simultânea com indicadores de presença; (c) histórico de versões: o que guarda, quando restaurar e a regra de prudência sobre períodos; (d) políticas de retenção definidas por administrador. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve cenários de trabalho colaborativo (dois editores no mesmo documento, restauração de versão) e cobra a condição do autosave e o caráter configurável da retenção; afirmar prazo fixo ou negar coautoria muda o gabarito. PRÉ-REQUISITOS: subtópicos 3 (modalidades) e 4 (armazenamento). OBJETIVOS OBSERVÁVEIS: (1) reconhecer quando o salvamento automático está ativo; (2) descrever o mecanismo de coautoria e seus indicadores; (3) restaurar versão anterior e explicar o que acontece com a atual. COMPETÊNCIAS DESENVOLVIDAS: trabalho colaborativo seguro; recuperação de estado anterior. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópicos 4 (armazenamento) e 8 (permissões); unidade 1.5 (OneDrive); Módulo 4 (continuidade). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: salvamento automático (autosave) é o modo em que o aplicativo grava as alterações continuamente no serviço, com indicador de estado (ativado/desativado) no canto superior esquerdo da janela; a condição essencial é o arquivo estar hospedado em OneDrive/SharePoint — arquivo puramente local não tem autosave contínuo, apenas gravações manuais (Ctrl+S) ou de recuperação automática do aplicativo. Sincronização: o cliente transporta as alterações entre a cópia local e a nuvem. Coautoria: quando o arquivo está na nuvem, múltiplos usuários editam simultaneamente o mesmo documento, com indicadores de presença (nome e cursor colorido de cada autor) e alterações visíveis em tempo real; não é preciso fechar o arquivo para o próximo editor entrar. Histórico de versões: o serviço registra versões anteriores do arquivo, acessíveis pela interface web (ou pelo painel do aplicativo, conforme o produto), permitindo visualizar e restaurar; restaurar uma versão anterior não exclui a atual — ela passa a ser também uma versão no histórico, o que torna a operação reversível. O período padrão e a quantidade máxima de versões dependem do plano/serviço e são configuráveis pelo administrador — conferir na documentação oficial do produto; esta apostila não afirma número de versões nem prazo. Caso-limite: edição feita offline num arquivo local sincronizado depois — na coautoria ativa, o conflito entre alterações offline é resolvido pelo mecanismo de sincronização (regra de última alteração prevalece quando não há coautoria em tempo real).\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: identificar o indicador de salvamento automático e diferenciar arquivo na nuvem de arquivo local.\n- Nível intermediário: explicar a coautoria com presença e cursor; restaurar uma versão anterior pelo histórico.\n- Nível avançado: explicar a reversibilidade da restauração (a versão atual é preservada) e o efeito de políticas de retenção definidas pelo administrador.\n- Nível especialista: diagnosticar perda de trabalho (autosave desativado, arquivo local) e desenhar a rotina correta para documento colaborativo (nuvem + coautoria + histórico).\n\nCOMPARAÇÕES CRÍTICAS:\n- Autosave ativo x arquivo local: o autosave contínuo exige arquivo em OneDrive/SharePoint; no arquivo local, gravação é manual/recuperação automática — em questão sobre \"onde o autosave funciona\", o gabarito é nuvem.\n- Coautoria x edição alternada: a coautoria permite edição simultânea com presença visível; não é necessário fechar o arquivo — a alternativa que exige exclusividade de acesso está errada.\n- Restauração x exclusão: restaurar versão não apaga a versão atual do histórico; a operação é reversível — confundir com exclusão definitiva inverte a resposta.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"o histórico de versões guarda apenas a última versão\" — Motivo: minimiza o mecanismo — Versão tecnicamente correta: o histórico mantém múltiplas versões; o período padrão e a quantidade máxima dependem do plano/serviço e são configuráveis pelo administrador (conferir na documentação oficial).\n- Afirmação errada: \"para outro usuário editar, é preciso fechar o arquivo\" — Motivo: transporta mentalidade de arquivo local — Versão tecnicamente correta: com o arquivo na nuvem, a coautoria permite edição simultânea com indicadores de presença.\n- Afirmação errada: \"restaurar uma versão anterior destrói a versão atual\" — Motivo: confunde restauração com substituição definitiva — Versão tecnicamente correta: a versão atual é preservada no histórico; a restauração pode ser revertida.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: salvamento automático, sincronização, coautoria, presença, cursor colorido, histórico de versões, restauração, retenção configurável.\n- Regras e fórmulas: autosave contínuo → arquivo em nuvem; edição simultânea → coautoria com presença; erro grave → histórico > restaurar versão.\n- Exceções: períodos e quantidades de versão variam por plano/serviço e são administráveis — conferir na documentação oficial; arquivo local não tem coautoria nem autosave contínuo.\n- Palavras-chave: autosave, coautoria, presença, histórico de versões, restauração, retenção, sincronização.\n- Checklist de domínio: identifico a condição do autosave; explico a coautoria; restauro versão sem perder a atual; não afirmo prazos fixos de retenção.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Em que condição o salvamento automático funciona continuamente? (2) Dois usuários editam o mesmo Word na nuvem: o que aparece na tela de cada um? (3) Como restaurar a versão de três dias atrás sem perder a atual? (4) Quem pode configurar políticas de retenção de versões no ambiente organizacional? (5) Corrija: \"para um segundo usuário editar o arquivo, o primeiro precisa fechá-lo\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar se um documento está sendo salvo automaticamente.",
                    "resposta": "Verificar o indicador de salvamento automático no canto superior esquerdo da janela: se ativado, o arquivo está em OneDrive/SharePoint e cada alteração é gravada no serviço; se desativado (ou ausente), o arquivo é local e a gravação é manual (Ctrl+S)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Dois técnicos editam o mesmo documento de especificação ao mesmo tempo, hospedado no OneDrive.",
                    "resposta": "Coautoria em tempo real: cada um vê o nome e o cursor colorido do outro, e as alterações aparecem à medida que são digitadas; não é preciso alternar o acesso. Recomendações operacionais: manter o autosave ativado e, em caso de erro coletivo, usar o histórico de versões para restaurar o estado anterior — a versão corrompida permanece registrada, permitindo reversão."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um relatório foi sobrescrito com conteúdo errado há duas horas; como recuperar o texto correto?",
                    "resposta": "Abrir o arquivo no serviço (web ou painel do aplicativo) > Histórico de versões > visualizar a versão anterior correta > Restaurar. A versão atual (errada) não é destruída: entra no histórico, e a operação pode ser revertida. O período de disponibilidade das versões depende do plano/serviço e da configuração do administrador — conferir na documentação oficial."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que o histórico de versões guarda apenas 1 versão.",
                    "correcao": "Incorreto: o histórico mantém múltiplas versões; o período padrão e a quantidade máxima dependem do plano/serviço e são configuráveis pelo administrador (conferir na documentação oficial do produto)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "O período de retenção do histórico de versões de um arquivo em nuvem é: A) Definido pelo usuário a cada salvamento; B) Variável conforme o plano/serviço em uso, com possibilidade de configuração pelo administrador, devendo ser confirmado na documentação oficial; C) Ilimitado.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A edição simultânea exige fechar o arquivo para outro usuário editar.",
                    "resposta": "Errado. Com o arquivo na nuvem, a coautoria permite edição simultânea, com indicadores de presença e alterações visíveis em tempo real."
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Restaurar uma versão anterior apaga definitivamente a versão atual do histórico.",
                    "resposta": "Errado. A versão atual é preservada no histórico; a restauração é reversível."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de identificar a condição do salvamento automático, explicar a coautoria com indicadores de presença e descrever a restauração de versões como operação reversível, reconhecendo que a retenção depende do plano, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-7",
                "titulo": "Contas pessoais e organizacionais",
                "objetivoAprendizagem": "Aluno diferenciara contas pessoais e organizacionais no Microsoft 365.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a diferença entre contas pessoais e contas organizacionais no ecossistema Microsoft 365; (b) o que cada escopo oferece: gestão centralizada, domínio próprio, políticas de segurança, eDiscovery e gerenciamento de dispositivos no lado organizacional; limite de usuários e foco doméstico no lado pessoal; (c) as consequências práticas da escolha para administração, segurança e conformidade; (d) a regra de prudência: a disponibilidade de recursos específicos depende do plano/licença. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve cenários (família em casa; empresa com 500 funcionários que precisa de eDiscovery) e pede o tipo de conta; atribuir recurso de conformidade a conta pessoal muda o gabarito. PRÉ-REQUISITOS: subtópico 1 (planos e produtos). OBJETIVOS OBSERVÁVEIS: (1) distinguir os dois escopos de conta; (2) associar cada recurso característico ao escopo correto; (3) justificar a escolha por cenário. COMPETÊNCIAS DESENVOLVIDAS: leitura de requisitos de governança; escolha de ambiente de conta. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópicos 2 (licenciamento) e 8 (permissões e compartilhamento); Módulo 4 (segurança e conformidade); Módulo 6 (responsabilização no serviço público). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média a alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: conta pessoal é a identidade individual de uso doméstico (planos do tipo Personal/Family): as licenças cobrem um conjunto limitado de usuários, a administração é do próprio usuário e os recursos concentram-se no uso doméstico — sem centro de administração organizacional. Conta organizacional é a identidade fornecida pela instituição (planos Business/Enterprise) dentro de um locatário (tenant): há gestão centralizada (administrador define políticas para todos), domínios personalizados (endereço institucional em vez de conta de consumidor), políticas de segurança avançadas (autenticação, acesso condicional, conforme o plano), eDiscovery (busca e preservação de conteúdo para fins legais e de auditoria), gerenciamento de dispositivos e recursos de conformidade (retenção, auditoria, rotulagem — disponibilidade conforme o plano/licença). Diferenças estruturais: escopo de administração (individual versus centralizada), modelo de licença (usuários da família versus licenças atribuídas por usuário na organização) e conjunto de recursos de segurança e conformidade. Consequência prática: o mesmo arquivo, num ambiente organizacional, fica sujeito a políticas de retenção e permissões definidas pelo administrador — o usuário individual não decide sozinho. A lista exata de recursos de cada plano varia: conferir sempre na documentação oficial.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir \"conta de casa\" de \"conta do trabalho\" e quem administra cada uma.\n- Nível intermediário: associar recursos (domínio personalizado, eDiscovery, gestão de dispositivos) ao escopo organizacional.\n- Nível avançado: explicar como a conta organizacional muda o comportamento de compartilhamento e retenção (políticas do locatário prevalecem).\n- Nível especialista: analisar risco de usar conta pessoal para dados institucionais (perda de controle administrativo, ausência de eDiscovery e de políticas) e propor a correção.\n\nCOMPARAÇÕES CRÍTICAS:\n- Conta pessoal x organizacional: a pessoal tem limite de usuários e administração individual; a organizacional tem gestão centralizada, domínio próprio e conformidade — em questão com \"eDiscovery\" ou \"políticas de segurança avançadas\", o gabarito é conta organizacional.\n- Administrador x usuário final: na organizacional, políticas de compartilhamento e retenção são definidas pelo administrador do locatário; na pessoal, o próprio usuário decide — confundir os papéis inverte a resposta sobre quem define a política.\n- Plano Business x Enterprise: ambos são organizacionais, mas o conjunto de recursos de conformidade e gestão varia por plano — afirmar que qualquer plano organizacional inclui todos os recursos é alternativa errada.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"contas pessoais têm eDiscovery\" — Motivo: atribuição de recurso organizacional a escopo doméstico — Versão tecnicamente correta: eDiscovery é recurso de contas organizacionais, com disponibilidade conforme o plano/licença.\n- Afirmação errada: \"no ambiente organizacional, cada usuário define as políticas de retenção dos seus arquivos\" — Motivo: confunde escopo pessoal com centralizado — Versão tecnicamente correta: as políticas de retenção e as permissões são definidas pelo administrador do locatário, dentro dos limites do plano.\n- Afirmação errada: \"conta organizacional é apenas uma conta pessoal com mais espaço\" — Motivo: reduz governança a armazenamento — Versão tecnicamente correta: a diferença estrutural é administrativa e de conformidade (domínio, políticas, auditoria, eDiscovery), não apenas cota.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: conta pessoal, conta organizacional, locatário, gestão centralizada, domínio personalizado, eDiscovery, gerenciamento de dispositivos.\n- Regras e fórmulas: família/usuário único → pessoal; instituição com políticas, domínio e conformidade → organizacional.\n- Exceções: a disponibilidade de cada recurso organizacional depende do plano/licença — conferir na documentação oficial.\n- Palavras-chave: conta pessoal, conta organizacional, tenant, eDiscovery, compliance, domínio personalizado.\n- Checklist de domínio: distingo os dois escopos; atribuo recursos ao escopo certo; explico quem define políticas em cada caso; reconheço variação por plano.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Uma família compartilha Office em casa: qual tipo de conta e qual limite típico? (2) Empresa com 500 funcionários precisa de eDiscovery e gestão de dispositivos: qual escopo? (3) Quem define as políticas de retenção num locatário organizacional? (4) Por que usar conta pessoal para dados institucionais é risco de governança? (5) Corrija: \"eDiscovery está disponível em qualquer conta Microsoft\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Família que compartilha o Office em casa entre poucos usuários.",
                    "resposta": "Conta pessoal (plano do tipo Family) — cobre um número limitado de usuários, com foco doméstico e administração feita pelo próprio usuário; não há centro de administração organizacional nem políticas institucionais."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Empresa com 500 funcionários precisa de eDiscovery e de gerenciamento de dispositivos.",
                    "resposta": "Ambiente organizacional (Enterprise, conforme o plano): locatário com gestão centralizada, domínio próprio, políticas de segurança, eDiscovery para busca e preservação de conteúdo e gerenciamento de dispositivos. A composição exata de recursos depende do plano/licença contratado — a contratação deve ser conferida na documentação oficial."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Servidor criou pasta de trabalho institucional na conta pessoal e a saiu da instituição; a equipe perdeu o controle do material.",
                    "resposta": "Diagnóstico: dados institucionais em escopo pessoal ficam fora das políticas do locatário — sem administração central, sem retenção e sem eDiscovery para auditoria. Correção: migrar o material para o OneDrive/SharePoint organizacional, definir permissões e aplicar a política de retenção do locatário; o caso ilustra por que a escolha do escopo de conta é decisão de governança, não apenas de preferência."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que contas pessoais têm eDiscovery.",
                    "correcao": "Incorreto: eDiscovery é recurso de contas organizacionais (Business/Enterprise), com disponibilidade conforme o plano/licença; contas pessoais não possuem centro de administração com ferramentas de conformidade."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual tipo de conta permite domínio personalizado e políticas de segurança avançadas? A) Pessoal; B) Organizacional; C) Ambas.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Contas pessoais e organizacionais têm o mesmo escopo de administração.",
                    "resposta": "Errado. A conta pessoal é administrada pelo próprio usuário, com foco doméstico; a organizacional tem gestão centralizada pelo administrador do locatário, com políticas de segurança e conformidade conforme o plano."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Num locatário organizacional, as políticas de retenção e de compartilhamento de arquivos são definidas por: A) Cada usuário individualmente; B) O administrador do locatário, conforme o plano; C) O aplicativo Word automaticamente.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de diferenciar contas pessoais e organizacionais e de atribuir cada recurso característico (gestão centralizada, domínio, eDiscovery, gestão de dispositivos) ao escopo correto, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-1-topico-1-sub-8",
                "titulo": "Permissões, compartilhamento, privacidade e recuperação de arquivos",
                "objetivoAprendizagem": "Aluno compreenderá modelo de permissões do Microsoft 365.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o modelo de permissões sobre arquivos no Microsoft 365: visualizar, editar, comentar e controlar; (b) formas de compartilhamento: link (com opções de expiração e proteção, conforme o plano) e pessoas específicas; (c) privacidade: configurações do locatário e rotulagem de dados, com disponibilidade conforme o plano; (d) recuperação: lixeira com retenção conforme a configuração, versões anteriores e eDiscovery para administradores. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve cenários de compartilhamento (enviar só leitura, link com prazo) e de recuperação (arquivo excluído) e pede o mecanismo correto; afirmar prazo universal de lixeira ou que o link nunca expira muda o gabarito. PRÉ-REQUISITOS: subtópicos 4 (armazenamento) e 7 (contas). OBJETIVOS OBSERVÁVEIS: (1) aplicar permissões por nível; (2) escolher a forma de compartilhamento adequada; (3) descrever a cadeia de recuperação de um arquivo excluído. COMPETÊNCIAS DESENVOLVIDAS: controle de acesso a documentos; prática de recuperação. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópicos 4 (armazenamento) e 6 (coautoria); unidade 1.5 (OneDrive — compartilhamento e lixeira); Módulo 4 (segurança). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: permissão é o direito concedido sobre um arquivo ou pasta. Níveis típicos: visualizar (abrir e ler, sem alterar), comentar (acrescentar anotações sem editar o conteúdo), editar (alterar o conteúdo) e controlar (gerenciar permissões do item). Compartilhamento por link gera um endereço de acesso cujo comportamento — quem pode abrir, se pode editar, se há expiração e proteção — depende das políticas do locatário e das opções escolhidas no ato do compartilhamento (algumas opções, como expiração e senha no link, dependem do plano/licença); compartilhamento com pessoas específicas restringe o acesso às contas indicadas, que precisam autenticar-se. Privacidade: no ambiente organizacional, as configurações do locatário (definidas pelo administrador) delimitam o que pode ser compartilhado externamente; a rotulagem de dados classifica o documento por sensibilidade, com disponibilidade conforme o plano. Recuperação: a lixeira do serviço guarda itens excluídos pelo período de retenção configurado pela organização/conta — o valor exato varia e deve ser verificado na documentação oficial do produto; dentro do período, o item é restaurado à pasta original; esgotada a lixeira, restam o histórico de versões (para conteúdo alterado) e, no ambiente Enterprise, o eDiscovery conduzido pelo administrador. Princípio prático: compartilhe o menor nível de permissão que atende à finalidade e confirme a retenção vigente antes de confiar só na lixeira.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir visualizar de editar e identificar quem tem acesso a um arquivo.\n- Nível intermediário: compartilhar por link com expiração e por pessoas específicas; restaurar item da lixeira.\n- Nível avançado: explicar como políticas do locatário restringem compartilhamento externo e como a rotulagem interage com permissões (quando disponível no plano).\n- Nível especialista: planejar a cadeia de recuperação completa (lixeira → versões → eDiscovery) e definir prática de backup para o caso de falha em todas as camadas.\n\nCOMPARAÇÕES CRÍTICAS:\n- Link x pessoas específicas: o link depende das políticas do locatário e pode ser transmitido adiante (conforme a opção); pessoas específicas exige autenticação das contas indicadas — para dado sensível, o gabarito é compartilhamento restrito, não link aberto.\n- Visualizar x comentar: comentar permite anotações sem alterar o corpo; visualizar não permite nem comentário — a alternativa que promete comentário num link \"somente leitura\" sem o nível adequado está errada.\n- Lixeira x histórico de versões: a lixeira recupera itens excluídos dentro da retenção; versões recupera conteúdo anterior de arquivos que continuam existindo — confundir os mecanismos inverte a resposta sobre o que se recupera em cada caso.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"um link de compartilhamento nunca expira por padrão\" — Motivo: termo absoluto sobre configuração variável — Versão tecnicamente correta: políticas do locatário podem definir expiração e a opção pode ser configurada ao compartilhar, conforme o plano — conferir na documentação oficial.\n- Afirmação errada: \"os itens ficam na lixeira para sempre\" — Motivo: prazo absoluto sem base — Versão tecnicamente correta: a lixeira mantém itens pelo período de retenção configurado pela organização/conta, que varia — verificar na documentação oficial do produto.\n- Afirmação errada: \"qualquer usuário pode restaurar itens de outros pela lixeira\" — Motivo: generalização de escopo — Versão tecnicamente correta: cada usuário gerencia itens que excluiu; recuperações além disso (ou além da lixeira) dependem do administrador e, no ambiente Enterprise, do eDiscovery conforme o plano.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: níveis de permissão, link de compartilhamento, pessoas específicas, expiração, rotulagem, lixeira, histórico de versões, eDiscovery.\n- Regras e fórmulas: menor privilégio → nível mínimo de permissão; dado sensível → pessoas específicas; arquivo excluído → lixeira dentro da retenção.\n- Exceções: expiração, senha em link e rotulagem dependem do plano; período de lixeira varia conforme a configuração — conferir na documentação oficial.\n- Palavras-chave: permissão, link, expiração, rotulagem, lixeira, retenção, eDiscovery, menor privilégio.\n- Checklist de domínio: aplico níveis de permissão; escolho link versus pessoas específicas; descrevo a cadeia de recuperação; não afirmo prazos sem conferir.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como compartilhar um arquivo para leitura, com prazo de validade do acesso? (2) Qual a diferença entre permissão de comentar e de editar? (3) Um arquivo foi excluído há poucos dias: descreva a cadeia de recuperação. (4) Quem define, no ambiente organizacional, o que pode ser compartilhado externamente? (5) Corrija: \"itens permanecem na lixeira indefinidamente\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Compartilhar um arquivo com permissão de visualização e com expiração de acesso.",
                    "resposta": "Compartilhar > escolher pessoas específicas (ou link, conforme a política) > nível Visualizar > definir expiração quando a opção estiver disponível no plano > enviar. O destinatário abre para leitura e o acesso cessa no prazo configurado."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Arquivo relevante foi excluído há 5 dias por engano; como recuperá-lo?",
                    "resposta": "Passo 1: abrir a lixeira do serviço (OneDrive/SharePoint) > localizar o item > Restaurar — o arquivo volta à pasta original. Passo 2: se o item não estiver mais na lixeira, verificar o histórico de versões do caminho/pasta e, no ambiente Enterprise, acionar o administrador para eDiscovery conforme o plano. Prevenção: confirmar o período de retenção vigente (varia conforme a configuração — conferir na documentação oficial) e manter backup de itens críticos."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Setor precisa distribuir um relatório com dado sensível para auditoria externa, sem permitir edição nem repasse indevido.",
                    "resposta": "Compartilhamento com pessoas específicas (contas autenticadas), nível Visualizar ou Comentar conforme a necessidade; desativar permissão de download quando a opção estiver disponível no plano; registrar o compartilhamento. Regra aplicada: menor privilégio + autenticação explícita em vez de link amplo — e rotulagem de sensibilidade quando o recurso estiver disponível no plano/licença."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que um link de compartilhamento nunca expira por padrão.",
                    "correcao": "Incorreto: políticas do locatário podem definir expiração para links e a opção pode ser configurada no ato do compartilhamento, conforme o plano/licença — conferir na documentação oficial do produto."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "A lixeira do serviço de armazenamento em nuvem mantém arquivos excluídos por um período de retenção (conferir o valor na documentação oficial do produto). Qual prática é correta ao excluir um arquivo importante? A) Confiar apenas na lixeira; B) Verificar a retenção e manter backup independente; C) Desativar a lixeira para economizar espaço.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) As permissões sobre arquivos incluem níveis como visualizar, editar, comentar e controlar.",
                    "resposta": "Certo. Esses níveis definem o que o destinatário pode fazer: ler, anotar, alterar o conteúdo ou gerenciar permissões."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para distribuir documento sensível a pessoas determinadas, sem link amplo, o compartilhamento adequado é: A) Link para qualquer pessoa com o endereço; B) Pessoas específicas, exigindo autenticação das contas indicadas; C) Publicar no site público do órgão.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar níveis de permissão e formas de compartilhamento a um cenário e de descrever a cadeia de recuperação de arquivo excluído (lixeira, versões, eDiscovery), reconhecendo que prazos e recursos variam, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-1-unidade-2",
        "titulo": "1.2 Microsoft Word",
        "topicos": [
          {
            "id": "modulo-1-unidade-2-topico-1",
            "titulo": "Interface, documentos, modelos e formatos",
            "objetivoAprendizagem": "Aluno navegará na interface do Word, criará e gerenciará documentos, modelos e formatos de arquivo.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-1-sub-1",
                "titulo": "Interface do Word e navegação",
                "objetivoAprendizagem": "Aluno identificará os elementos da interface do Word moderno (Ribbon).",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a organização da interface do Word em guias e grupos (faixa de opções/Ribbon); (b) a guia Arquivo como área de gerenciamento (não de edição); (c) a barra de ferramentas de acesso rápido e sua personalização; (d) modos de exibição (impressão, leitura) e a limitação de edição do Modo de Leitura; (e) a régua e o painel de navegação como auxiliares de diagramação e estrutura. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve comandos e pede a guia correta (Inserir, Layout, Referências, Revisão, Exibir); localizar o comando errado na guia errada é erro direto de gabarito — e a pegadinha clássica é atribuir edição ao Modo de Leitura. PRÉ-REQUISITOS: nenhum além do uso básico de computador. OBJETIVOS OBSERVÁVEIS: (1) localizar comandos pelas guias; (2) personalizar a barra de acesso rápido; (3) distinguir modos de exibição e suas finalidades. COMPETÊNCIAS DESENVOLVIDAS: navegação eficiente; localização de recursos. GRAU DE DIFICULDADE: básico. RELAÇÃO COM OUTROS TÓPICOS: todos os tópicos da unidade 1.2 dependem desta organização; interface do Excel/PowerPoint segue o mesmo padrão de guias. RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: a faixa de opções (Ribbon) é a estrutura de comando do Word moderno: funcionalidades agrupadas em guias — Arquivo (abre a área de gerenciamento: salvar, exportar, informações, opções), Início (formatação corrente), Inserir (tabelas, imagens, cabeçalhos, números de página, símbolos), Desenho, Layout (margens, orientação, quebras), Referências (sumário, legendas, citações), Correios (malas diretas), Revisão (ortografia, comentários, controle de alterações) e Exibir (modos de exibição, régua, painel de navegação). Dentro de cada guia, os comandos formam grupos (ex.: grupo Parágrafo na guia Início). Barra de ferramentas de acesso rápido (Quick Access Toolbar): faixa fina acima/abaixo da faixa, personalizável com comandos frequentes (Salvar, Desfazer, Impressão rápida) via seta > Mais Comandos; permanece visível independentemente da guia ativa. Modos de exibição: Exibição de Impressão (edição com paginação), Modo de Leitura (otimiza leitura em tela — reformata o texto e não é destinado à edição; voltar a editar exige retornar ao modo de edição), Layout da Web e Estrutura. Régua (guia Exibir): ajusta recuos, margens e tabulações visualmente. Painel de navegação: lista títulos por estilos, permitindo saltar entre seções — ponte direta com o tópico de estilos e sumários. Observação de escopo: nomes e disposição de comandos podem variar entre versões — confira na versão instalada quando a questão depender de detalhe visual.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: localizar três comandos cotidianos (negrito, tabela, número de página) e nomear as guias.\n- Nível intermediário: personalizar a barra de acesso rápido; alternar modos de exibição e explicar para que serve cada um.\n- Nível avançado: usar régua e painel de navegação para revisar estrutura; justificar por que Arquivo não é guia de edição.\n- Nível especialista: diagnosticar \"comando desaparecido\" (guia errada, faixa recolhida, modo de leitura ativo) e resolver rapidamente em prova prática.\n\nCOMPARAÇÕES CRÍTICAS:\n- Guia Inserir x guia Layout: Inserir coloca objetos (tabela, imagem, número de página); Layout ajusta a página (margens, orientação, quebras) — para \"inserir número de página\" o gabarito é Inserir; para \"mudar orientação\" é Layout.\n- Guia Arquivo x guias de comando: Arquivo gerencia o documento (salvar, exportar, proteger); não traz formatação — alternativa que coloca formatação em Arquivo está errada.\n- Modo de Leitura x Exibição de Impressão: leitura otimiza visualização e não destina-se a editar; impressão edita com paginação — a pegadinha que promete edição no Modo de Leitura é falsa.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"o Modo de Leitura permite editar o documento normalmente\" — Motivo: confunde modos de exibição — Versão tecnicamente correta: o Modo de Leitura otimiza a visualização; para editar, retorna-se ao modo de edição (Exibição de Impressão).\n- Afirmação errada: \"a barra de acesso rápido não pode ser personalizada\" — Motivo: afirmação de impossibilidade falsa — Versão tecnicamente correta: ela é personalizável (seta > Mais Comandos) e mantém os comandos visíveis em qualquer guia.\n- Afirmação errada: \"a guia Referências contém a inserção de tabelas\" — Motivo: troca entre guias — Versão tecnicamente correta: tabelas ficam na guia Inserir; Referências concentra sumário, legendas, citações e índices.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: faixa de opções, guias, grupos, barra de acesso rápido, modos de exibição, régua, painel de navegação.\n- Regras e fórmulas: objeto → Inserir; página → Layout; revisão → Revisão; referências documentais → Referências; modos → Exibir; gerenciamento → Arquivo.\n- Exceções: nomes e disposição variam entre versões; Modo de Leitura não é para edição; faixa pode estar recolhida.\n- Palavras-chave: Ribbon, guia, grupo, acesso rápido, Modo de Leitura, Exibição de Impressão, régua, painel de navegação.\n- Checklist de domínio: mapeio comando à guia; personalizo a barra de acesso rápido; distingo modos de exibição; uso régua e painel de navegação.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Em qual guia está a inserção de tabela e em qual a alteração de margens? (2) O que a guia Arquivo oferece e por que não é guia de edição? (3) Como personalizar a barra de acesso rápido? (4) Qual a finalidade do Modo de Leitura e qual sua limitação? (5) Que recurso lista os títulos do documento para navegação rápida e de que ele depende?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Localizar o comando de verificação ortográfica.",
                    "resposta": "Guia Revisão > Verificação Ortográfica (ou a tecla F7, atalho direto). A guia Revisão concentra ortografia, comentários e controle de alterações."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Secretária usa diariamente os comandos Salvar, Impressão rápida e Ortografia e quer acessá-los sem trocar de guia.",
                    "resposta": "Personalizar a barra de ferramentas de acesso rápido: clicar na seta da barra > Mais Comandos > selecionar cada comando > Adicionar > OK. A barra permanece visível em qualquer guia, reduzindo o tempo de acesso; também aceita comandos pouco visíveis na faixa."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Revisor precisa navegar por um relatório de 80 páginas saltando entre seções sem rolar.",
                    "resposta": "Ativar o painel de navegação (guia Exibir > Painel de Navegação): ele lista os títulos do documento — o que pressupõe estilos de título aplicados (Título 1, Título 2). Clicar no título salta para a seção; arrastar títulos reorganiza seções inteiras. Se o painel ficar vazio, o documento usa formatação direta em vez de estilos (ver tópico 2)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que o Modo de Leitura permite edição.",
                    "correcao": "Incorreto: o Modo de Leitura otimiza a visualização (reformata o texto para leitura); para editar o documento, retorna-se ao modo de edição — Exibição de Impressão."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual guia contém o comando de inserir tabela? A) Início; B) Inserir; C) Layout.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A faixa de opções organiza os comandos em guias e, dentro delas, em grupos.",
                    "resposta": "Certo. Cada guia reúne grupos de comandos relacionados (ex.: grupo Parágrafo na guia Início)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para ajustar margens e orientação da página, utiliza-se a guia: A) Inserir; B) Exibir; C) Layout.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de localizar comandos nas guias corretas da faixa de opções, personalizar a barra de acesso rápido e distinguir os modos de exibição e suas finalidades, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-2-topico-1-sub-2",
                "titulo": "Formatos de documento (.docx, .doc, .pdf, .rtf, .txt)",
                "objetivoAprendizagem": "Aluno compreenderá as diferenças entre os formatos de arquivo do Word e quando usar cada um.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os formatos de documento do Word: .docx (Open XML), .doc (legado binário), .pdf, .rtf e .txt, além dos derivados .docm (macros) e .dotx/.dotm (modelos); (b) o que cada formato preserva e perde; (c) o critério de escolha por finalidade: edição colaborativa, distribuição de leitura, compatibilidade antiga, texto puro; (d) a relação entre formato e macros. POR QUE O CONHECIMENTO É IMPORTANTE: a prova pede o formato correto para cada finalidade (distribuição imutável → PDF; arquivo com macros → .docm; texto sem formatação → .txt) e cobra as propriedades de cada formato; afirmar que .txt preserva formatação ou confundir .doc com .docx muda o gabarito. PRÉ-REQUISITOS: interface do Word (sub-1). OBJETIVOS OBSERVÁVEIS: (1) caracterizar cada formato; (2) escolher o formato por finalidade; (3) explicar o papel dos derivados (.docm, .dotx). COMPETÊNCIAS DESENVOLVIDAS: decisão de formato; proteção de integridade de layout na distribuição. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: compatibilidade .doc x .docx (tópico 13); exportação PDF com acessibilidade (tópico 12); PowerPoint (.ppt x .pptx, unidade 1.4). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: formato é a organização interna do arquivo; determina o que o software pode preservar. .docx: padrão Open XML adotado desde o Office 2007 — conteúdo estruturado em XML comprimido, formato padrão de edição do Word moderno; preserva formatação, estilos, campos e estrutura; suporta macros apenas no derivado .docm (docx com macros habilitadas). .doc: formato binário legado (Word 2003 e anteriores); abre em modo de compatibilidade nas versões recentes, com restrições de recursos novos (detalhado no tópico 13). .pdf: formato portátil voltado à distribuição — preserva layout, fontes e paginação na leitura em qualquer plataforma; não é destinado a edição (alterar exige ferramentas específicas) e, quando exportado com as opções de estrutura, carrega tags de acessibilidade (ver tópico 12). .rtf: Rich Text Format — formato de interoperabilidade entre processadores de texto distintos; preserva formatação básica com maior compatibilidade, perdendo recursos avançados. .txt: texto puro — carrega apenas caracteres, sem qualquer formatação (sem negrito, sem estilos, sem imagens). Critério de escolha: editar/colaborar → .docx; distribuir para leitura com layout intacto → .pdf; trocar com software antigo → .rtf ou .doc; dados brutos → .txt; modelo reutilizável → .dotx (ou .dotm com macros). Invariante: a distribuição final para leitura usa um formato que não altere o layout — por isso o PDF é a recomendação de fechamento de documentos oficiais.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: relacionar finalidade e formato: editar (.docx), distribuir (.pdf), texto puro (.txt).\n- Nível intermediário: explicar por que .doc abre em modo de compatibilidade; identificar que macros exigem .docm (não .docx).\n- Nível avançado: escolher .rtf quando processadores diferentes precisam trocar formatação básica; decidir entre PDF e .docx no fluxo de tramitação de documento oficial.\n- Nível especialista: avaliar perdas por conversão (docx → rtf perde recursos avançados; docx → pdf perde editabilidade) e o risco de macros em .docm na política de segurança (Módulo 4).\n\nCOMPARAÇÕES CRÍTICAS:\n- .docx x .doc: Open XML desde 2007 x binário legado — abrir .doc nas versões recentes ativa modo de compatibilidade; a alternativa que diz que são equivalentes está errada.\n- .docx x .docm: mesmíssima estrutura XML, mas macros só rodam/gravam em .docm — um arquivo com macro salvo como .docx perde a macro.\n- .pdf x .docx na distribuição: PDF congela layout para leitura universal; .docx mantém editabilidade — para \"distribuição somente leitura\", o gabarito é PDF.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \".txt preserva a formatação do documento\" — Motivo: atribui propriedade que o formato não tem — Versão tecnicamente correta: .txt é texto puro, sem formatação de qualquer natureza (fonte, estilos, imagens).\n- Afirmação errada: \".docx e .doc são o mesmo formato com extensão diferente\" — Motivo: troca entre padrões — Versão tecnicamente correta: .docx é Open XML (padrão desde o Office 2007); .doc é formato binário legado, que abre em modo de compatibilidade.\n- Afirmação errada: \"macros funcionam em qualquer formato do Word\" — Motivo: generalização — Versão tecnicamente correta: macros requerem o derivado com macros (.docm; .doc legado também as comportava, mas o .docx não).\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: .docx, .doc, .docm, .dotx/.dotm, .rtf, .txt, .pdf, Open XML, modo de compatibilidade.\n- Regras e fórmulas: editar → .docx; macros → .docm; distribuir → .pdf; interoperabilidade básica → .rtf; texto cru → .txt.\n- Exceções: .docx não carrega macros; .pdf não é destinado a edição; conversões podem perder recursos.\n- Palavras-chave: Open XML, binário, PDF, RTF, texto puro, macros, modelo, compatibilidade.\n- Checklist de domínio: caracterizo os cinco formatos; escolho por finalidade; posiciono .docm e .dotx; explico perdas de conversão.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual formato usar para distribuir documento cujo layout não pode mudar? (2) Onde se gravam macros num arquivo moderno do Word? (3) O que .txt carrega e o que perde? (4) Qual o padrão Open XML desde o Office 2007? (5) Corrija: \".doc e .docx são equivalentes\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Salvar um documento para distribuição em leitura, com layout preservado.",
                    "resposta": "Arquivo > Exportar > Criar PDF/XPS — o PDF preserva layout, fontes e paginação para leitura em qualquer plataforma; mantenha o .docx como arquivo-fonte para edições futuras."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "A equipe recebeu um formulário .doc antigo e precisa continuar editando com todos os recursos do Word 365.",
                    "resposta": "Abrir o .doc (entra em modo de compatibilidade, com recursos novos limitados) > Arquivo > Informações > Converter (ou Salvar como .docx). Depois de converter, todos os recursos modernos ficam disponíveis; conferir elementos críticos após a conversão, pois a conversão preserva o conteúdo mas pode reformular detalhes de formatação."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Departamento de TI criou uma rotina em macro para preenchimento de ofícios; como distribuí-la sem perder a macro?",
                    "resposta": "Salvar como .docm (docx com macros) — o .docx padrão não executa/gravar macros; a conversão para .docx descartaria a rotina. Complemento de segurança (Módulo 4): a distribuição de .docm deve seguir a política institucional sobre macros, pois elas executam código."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que .txt preserva formatação.",
                    "correcao": "Incorreto: .txt é texto puro — carrega apenas caracteres, sem formatação (sem fontes, estilos, negrito, imagens ou estrutura). Para formatação básica entre processadores distintos, o formato de interoperabilidade é o .rtf."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual formato é o padrão Open XML desde o Office 2007? A) .doc; B) .docx; C) .rtf.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) .docm é .docx com macros.",
                    "resposta": "Certo. A mesma estrutura Open XML, com a habilitação de macros; o .docx padrão não carrega macros."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Documento oficial pronto para tramitação, cujo layout não pode ser alterado, deve ser distribuído como: A) .txt; B) .pdf; C) .rtf.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de caracterizar os formatos .docx, .doc, .docm, .rtf, .txt e .pdf e de escolher o formato adequado a cada finalidade (edição, macros, distribuição, interoperabilidade, texto puro), evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-2",
            "titulo": "Formatação direta versus estilos",
            "objetivoAprendizagem": "Aluno utilizará estilos para formatação consistente.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-2-sub-1",
                "titulo": "Formatação direta vs. estilos",
                "objetivoAprendizagem": "Aluno distinguirá formatação direta de estilos e usará estilos para consistência.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a diferença entre formatação direta (atributos aplicados ao trecho selecionado) e estilos (conjuntos nomeados e reutilizáveis de formatação); (b) as consequências de cada abordagem para manutenção, sumários, navegação e acessibilidade; (c) como criar, modificar e salvar estilos em modelos; (d) a regra prática: estrutura por estilos, detalhe pontual por formatação direta. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra que modificar um estilo atualiza todas as ocorrências, que o sumário se alimenta dos estilos de título e que formatação direta não cria estrutura; inverter esses pontos muda o gabarito. PRÉ-REQUISITOS: interface (tópico 1, sub-1). OBJETIVOS OBSERVÁVEIS: (1) distinguir as duas abordagens; (2) criar e modificar um estilo; (3) prever o efeito global da modificação de um estilo; (4) decidir quando cada abordagem é adequada. COMPETÊNCIAS DESENVOLVIDAS: padronização de documentos; manutenção eficiente. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: sumários (tópico 7); acessibilidade (tópico 12); relatório integrado (tópico 14); Slide Mestre no PowerPoint (unidade 1.4 — analogia). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: formatação direta aplica atributos (fonte, tamanho, cor, negrito) diretamente ao texto selecionado, sem nome nem relação com outros trechos — cada ocorrência é independente; alterar a \"regra\" exige editar trecho por trecho. Estilo é um conjunto nomeado de formatações (parágrafo e/ou caractere) registrado no documento ou modelo: Início > Estilos > aplicar com um clique; Criar um Estilo registra o conjunto atual; Modificar altera a definição e o Word propaga a mudança a todo o texto que usa o estilo — essa propagação é a propriedade que muda o gabarito nas questões. Estilos predefinidos: Normal (corpo), Título 1, Título 2... (estrutura), entre outros; podem ser personalizados e salvos no modelo (.dotx) para padronizar novos documentos. Consequências práticas: sumário automático, painel de navegação e leitores de tela dependem dos estilos de título — formatação direta não gera estrutura; a consistência visual de documentos longos é mantida por estilos (mudar a regra uma vez) e não por formatação direta repetida (mudança N vezes com risco de divergência). Caso-limite: herança — o estilo pode se basear em outro (Normal), e a formatação direta aplicada sobre um estilo prevalece localmente sobre o estilo, mascarando a regra; remover a formatação direta (Limpar Formatação) restaura o comportamento do estilo.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: aplicar negrito a uma palavra (direta) e aplicar o estilo Título 1 a um capítulo — observar a diferença no painel de estilos.\n- Nível intermediário: criar um estilo próprio (Destaque), aplicá-lo em vários trechos e modificá-lo uma vez, observando a atualização global.\n- Nível avançado: limpar formatação direta que mascara estilos; salvar estilos no modelo (.dotx) para padronizar novos documentos.\n- Nível especialista: auditar documento que não gera sumário nem navegação (títulos em formatação direta) e migrar para estilos sem perder o visual.\n\nCOMPARAÇÕES CRÍTICAS:\n- Formatação direta x estilos: a direta afeta só o trecho; o estilo nomeia a regra e a propaga — em \"modificou o estilo, o que acontece com o texto que o usa?\", o gabarito é atualização de todas as ocorrências.\n- Estilo de parágrafo x estilo de caractere: o de parágrafo rege o parágrafo inteiro (recuos, espaçamento, fonte); o de caractere rege só o trecho selecionado — confundir os escopos inverte a resposta.\n- Formatação direta sobre estilo: o atributo direto prevalece localmente sobre o estilo e mascara a regra — a pegadinha que diz que o estilo sempre vence sobre o que foi aplicado depois está errada.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"títulos formatados com negrito direto alimentam o sumário automático\" — Motivo: confunde aparência com estrutura — Versão tecnicamente correta: o sumário se gera dos estilos de título (Título 1, Título 2); formatação direta não cria estrutura reconhecível.\n- Afirmação errada: \"modificar um estilo altera apenas a próxima ocorrência\" — Motivo: minimiza a propagação — Versão tecnicamente correta: modificar o estilo atualiza todo o texto já formatado com ele no documento (e em documentos baseados no mesmo modelo, conforme o escopo).\n- Afirmação errada: \"estilos só servem para economia de tempo, sem efeito técnico\" — Motivo: ignora os mecanismos que dependem deles — Versão tecnicamente correta: sumário, painel de navegação, referências cruzadas de títulos e acessibilidade (leitores de tela) dependem dos estilos.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: formatação direta, estilo, estilo de parágrafo, estilo de caractere, estilos predefinidos (Normal, Título 1/2), modelo .dotx, Limpar Formatação.\n- Regras e fórmulas: regra repetida → estilo; detalhe único → formatação direta; modificar estilo → atualização global; sumário/navegação → estilos de título.\n- Exceções: formatação direta prevalece localmente sobre o estilo; estilos podem herdar de outros (base Normal).\n- Palavras-chave: estilo, formatação direta, Título 1, Normal, propagação, modelo, limpar formatação.\n- Checklist de domínio: distingo as abordagens; crio/modifico estilos; prevejo o efeito global; explico por que o sumário depende de estilos; resolvo máscara de formatação direta.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual a diferença essencial entre aplicar negrito diretamente e criar um estilo? (2) O que acontece com o texto existente quando um estilo é modificado? (3) Por que um sumário automático pode sair vazio num documento \"bem formatado\"? (4) Qual estilo rege o parágrafo inteiro e qual rege apenas o trecho? (5) Um trecho \"não obedece\" ao estilo: que mecanismo suspeitar e como corrigir?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Aplicar negrito a uma palavra específica.",
                    "resposta": "Formatação direta: selecionar a palavra > Ctrl+B (ou botão Negrito). Não cria nem altera estilo — o atributo fica preso ao trecho."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um manual usa uma formatação de destaque repetida 60 vezes; a norma mudou e o destaque deve ficar azul.",
                    "resposta": "Se o destaque é estilo (ex.: Destaque): Início > Estilos > clicar com o botão direito em Destaque > Modificar > cor azul > OK — todas as 60 ocorrências atualizam de uma vez. Se o destaque foi aplicado como formatação direta, cada trecho precisa ser editado individualmente (ou selecionar tudo e Limpar Formatação, reapplicando o estilo) — o custo e o risco de divergência são o argumento técnico para estilos."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "A instituição quer que todo novo documento já traga os estilos corporativos (fontes, títulos, parágrafo).",
                    "resposta": "Ajustar os estilos num documento padrão (ou modificar os existentes) e salvar como modelo: Arquivo > Salvar como > .dotx. Documentos criados a partir do modelo herdam os estilos; mudanças futuras na norma podem ser feitas modificando o modelo, propagando para novos documentos (não para os já criados — estes precisam de atualização manual ou de modelo anexado)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário formata todos os títulos com negrito direto e espera que o sumário automático os reconheça.",
                    "correcao": "Incorreto: o sumário automático se gera dos estilos de título (Título 1, Título 2); formatação direta não cria estrutura. Correção: aplicar os estilos de título aos capítulos e reinserir/atualizar o sumário."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso atualiza todo o texto formatado quando sua definição é alterada? A) Formatação direta; B) Estilos; C) Copiar/colar formatação.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Modificar um estilo atualiza todas as ocorrências de texto que o utilizam.",
                    "resposta": "Certo. A definição é única: o Word propaga a mudança a todo o texto que usa o estilo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Um trecho formatado com o estilo Título 2 recebeu cor vermelha aplicada diretamente. O resultado é: A) O estilo impede a cor; B) A formatação direta prevalece localmente sobre o estilo; C) O estilo Título 2 é redefinido.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir formatação direta de estilos, criar e modificar estilos prevendo a atualização global e explicar por que sumário e navegação dependem dos estilos de título, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-3",
            "titulo": "Parágrafos, recuos, tabulações, espaçamento e paginação",
            "objetivoAprendizagem": "Aluno ajustará parágrafos, recuos, tabulações, espaçamento e paginação.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-3-sub-1",
                "titulo": "Parágrafos e recuos",
                "objetivoAprendizagem": "Aluno ajustará parágrafos, recuos e tabulações corretamente.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é um parágrafo no Word e como se marca seu fim; (b) a diferença entre quebra de parágrafo (Enter) e quebra de linha (Shift+Enter); (c) recuos: de primeira linha, à esquerda e à direita, com régua e caixa de diálogo; (d) tabulações: tipos (esquerda, centrada, direita, decimal) e definição de posições; (e) espaçamento: entre linhas, antes e depois do parágrafo. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a diferença Enter x Shift+Enter, o uso correto de recuos e tabulações em vez de espaços, e o significado de cada tipo de tabulador; trocar Enter por Shift+Enter altera o comportamento de todo o parágrafo e muda o gabarito. PRÉ-REQUISITOS: interface do Word (unidade 1.2, tópico 1). OBJETIVOS OBSERVÁVEIS: (1) distinguir quebra de parágrafo de quebra de linha; (2) configurar recuos por régua e por caixa de diálogo; (3) definir tabulações por tipo e posição; (4) escolher espaçamento adequado. COMPETÊNCIAS DESENVOLVIDAS: diagramação de texto técnico; correção de documentos mal formatados. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: formatação direta versus estilos (tópico 2); quebras de página e de seção (tópico 6); listas (tópico 4). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: parágrafo é a unidade estrutural do Word: termina na marca de quebra de parágrafo (inserida por Enter) e carrega formatação própria (recuos, espaçamento, alinhamento) guardada na própria marca — por isso apagar a marca funde o parágrafo com o seguinte e aplica a ela a formatação do último. Quebra de linha manual (Shift+Enter) insere a marca de quebra de linha: o texto passa para a linha seguinte sem encerrar o parágrafo — recuos e espaçamentos continuam valendo para o conjunto, e o estilo permanece o mesmo. Recuos deslocam o texto em relação às margens: recuo de primeira linha (só a primeira linha do parágrafo), recuo à esquerda e recuo à direita (todo o bloco), ajustáveis pela régua (marcadores superior, médio e inferior) ou por Início > Parágrafo > caixa de diálogo (inclusive recuo especial). Tabulações avançam o cursor até posições pré-definidas: tabulador à esquerda, centrado, à direita e decimal (alinha números pelo ponto decimal) — definidas em Parágrafo > Tabulações ou clicando na régua; são o mecanismo correto para colunas alinhadas, no lugar de cadeias de espaços. Espaçamento: entre linhas (simples, 1,5, duplo, conforme unidade configurável) e antes/depois do parágrafo (distância entre blocos), configuráveis no mesmo diálogo. Invariante: alinhamento estrutural deve usar recuos e tabulações — espaços repetidos não alinham de forma consistente entre fontes e tamanhos.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir as duas marcas na tela (parágrafo e linha) com exibição de marcas de formatação ativada.\n- Nível intermediário: configurar recuo de primeira linha pela régua e pelo diálogo; criar tabulação decimal para valores monetários.\n- Nível avançado: diagnosticar documento \"alinhado com espaços\" e substituir por tabulações; controlar espaçamento antes/depois em vez de linhas vazias.\n- Nível especialista: explicar por que apagar a marca de parágrafo altera a formatação do texto fundido e como preservar o estilo pretendido ao unir parágrafos.\n\nCOMPARAÇÕES CRÍTICAS:\n- Enter x Shift+Enter: Enter encerra o parágrafo (nova marca, nova formatação possível); Shift+Enter só quebra a linha dentro do mesmo parágrafo — em questão sobre \"criar nova linha sem novo parágrafo\", o gabarito é Shift+Enter.\n- Recuo x espaçamento: recuo desloca o bloco em relação à margem; espaçamento define distância entre linhas e entre parágrafos — confundir os dois inverte a resposta sobre identação.\n- Tabulação decimal x tabulação à esquerda: a decimal alinha números pelo ponto (para valores monetários); a à esquerda alinha o início do texto — usar a errada desalinha a coluna de valores.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Shift+Enter cria um novo parágrafo\" — Motivo: troca entre as duas marcas — Versão tecnicamente correta: Shift+Enter cria nova linha dentro do mesmo parágrafo; o novo parágrafo é criado por Enter.\n- Afirmação errada: \"é correto usar espaços para alinhar colunas de texto\" — Motivo: prática instável — Versão tecnicamente correta: alinhamento estrutural usa tabulações e recuos; espaços desalinham quando muda a fonte ou o tamanho.\n- Afirmação errada: \"o recuo de primeira linha vale para todo o parágrafo\" — Motivo: confunde recuo especial com recuo do bloco — Versão tecnicamente correta: o recuo de primeira linha afeta apenas a primeira linha; o recuo à esquerda/direita afeta todo o bloco.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: parágrafo, marca de parágrafo, quebra de linha, recuos, tabulações, espaçamento entre linhas e entre parágrafos.\n- Regras e fórmulas: nova linha sem novo parágrafo → Shift+Enter; primeira linha deslocada → recuo especial; coluna de valores → tabulação decimal; separação entre blocos → espaçamento antes/depois, não linhas vazias.\n- Exceções: a formatação do parágrafo reside na marca final — apagá-la funde parágrafos e altera a formatação herdada.\n- Palavras-chave: parágrafo, quebra de linha, recuo, tabulação, tabulador decimal, espaçamento, régua.\n- Checklist de domínio: distingo as duas marcas; configuro recuos pela régua e pelo diálogo; defino tabulações por tipo; evito espaços para alinhar; controlo espaçamento sem linhas vazias.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual tecla cria nova linha dentro do mesmo parágrafo? (2) Como deslocar apenas a primeira linha de cada parágrafo? (3) Que tipo de tabulador alinha valores monetários pelo ponto decimal? (4) Por que espaços não são aceitáveis para alinhar colunas? (5) O que acontece com a formatação quando duas marcas de parágrafo são removidas, unindo os parágrafos?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Recuar a primeira linha de um parágrafo.",
                    "resposta": "Régua > marcador de recuo de primeira linha (ou Início > Parágrafo > Recuo especial: Primeira linha, com o valor desejado). Afeta somente a primeira linha do parágrafo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Numa relação de produtos, a coluna de preços precisa ficar alinhada pelo ponto decimal.",
                    "resposta": "Definir tabulação decimal: Início > Parágrafo > Tabulações > posição (ex.: 8 cm) > alinhamento Decimal > OK; digitar Tab antes de cada valor. O ponto decimal de todos os valores fica alinhado verticalmente; se a fonte mudar, o alinhamento se mantém — o que não ocorreria com espaços."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Documento com parágrafos separados por duas linhas vazias ficou irregular; como padronizar?",
                    "resposta": "Remover as linhas vazias e usar espaçamento entre parágrafos: Início > Parágrafo > Espaçamento > Depois (ex.: 12 pt), além do espaçamento entre linhas (ex.: 1,5). Vantagem: a distância fica uniforme, o estilo pode ser salvo no estilo do parágrafo e a diagramação não quebra quando o texto é editado — linhas vazias criam buracos variáveis conforme a paginação."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário usa espaços para alinhar texto em colunas.",
                    "correcao": "Incorreto: espaços não alinham de forma consistente entre fontes e tamanhos; o mecanismo correto é tabulações (por tipo e posição) e recuos — estruturas que mantêm o alinhamento independente da fonte."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual tecla insere quebra de linha dentro do mesmo parágrafo? A) Enter; B) Shift+Enter; C) Ctrl+Enter.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Shift+Enter cria um novo parágrafo.",
                    "resposta": "Errado. Shift+Enter cria uma nova linha no mesmo parágrafo; o parágrafo novo é criado por Enter (marca de quebra de parágrafo)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para alinhar valores monetários pelo ponto decimal numa coluna, utiliza-se: A) Espaços repetidos; B) Tabulação com alinhamento decimal; C) Recuo à direita de cada parágrafo.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir quebra de parágrafo de quebra de linha, configurar recuos e tabulações por tipo/posição e substituir alinhamento por espaços por tabulações, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-4",
            "titulo": "Listas, listas multinível e numeração automática",
            "objetivoAprendizagem": "Aluno criará e gerenciará listas simples, listas multinível e numeração automática.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-4-sub-1",
                "titulo": "Listas bullet e numeradas",
                "objetivoAprendizagem": "Aluno criará e gerenciará listas bullet e numeradas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a diferença entre listas com marcadores (bullets) e listas numeradas; (b) o critério de escolha: ordem importa ou não; (c) o funcionamento da numeração automática e sua atualização ao inserir/excluir itens; (d) variações de formato (símbolos, numerais, letras) e a ponte para listas multinível. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve documentos (passo a passo, inventário, requisitos) e pede o tipo de lista correto; além disso, cobra o princípio da numeração automática frente à numeração digitada à mão — errar essa distinção muda o gabarito. PRÉ-REQUISITOS: parágrafos e recuos (tópico 3). OBJETIVOS OBSERVÁVEIS: (1) escolher bullet versus numeração por critério de ordem; (2) aplicar e personalizar os formatos; (3) explicar por que numeração manual é falha técnica. COMPETÊNCIAS DESENVOLVIDAS: estruturação de documentos; correção de numeração instável. GRAU DE DIFICULDADE: básico. RELAÇÃO COM OUTROS TÓPICOS: listas multinível (mesmo tópico); estilos (tópico 2); sumários (tópico 7). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: lista é um parágrafo (ou sequência de parágrafos) com marcador ou numeração aplicado por recurso automático do Word. Lista com marcadores (bullets): cada item recebe um símbolo (ponto, círculo, seta — escolhível em Início > Marcadores); indica itens de mesma natureza sem ordem — uma lista de materiais não tem primeiro nem último. Lista numerada: cada item recebe número, letra ou numeral romano sequencial (Início > Numeração, com formatos personalizáveis); indica sequência — instruções de procedimento têm ordem essencial. Mecanismo da numeração automática: os números não são texto digitado; são campos lógicos gerados pelo Word — inserir um item no meio renumera os seguintes, e excluir um item reorganiza a sequência sem intervenção. Propriedade operacional: pressionar Enter encerra um item e começa o próximo; Enter duplo (ou a tecla de finalização) encerra a lista. Limitações: numeração digitada manualmente (\"1.\", \"2.\") é texto comum — não renumera, desalinha ao inserir itens e desgasta a manutenção do documento; a lista automática depende do recurso de lista (não de espaços ou tabs digitados). Caso-limite: reiniciar numeração ou continuar de lista anterior — configuração disponível no menu de contexto da numeração (Reiniciar em 1 / Continuar numeração).\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: criar lista de marcadores e lista numerada; sair da lista com Enter duplo.\n- Nível intermediário: trocar formato de marcador/numeração; inserir item no meio de lista numerada e observar a renumeração automática.\n- Nível avançado: corrigir documento com numeração manual (substituindo por lista automática); controlar reinício e continuação entre listas separadas.\n- Nível especialista: decidir a hierarquia entre listas multinível (bullet + numeração combinados por nível) e justificar por que listas manuais quebram em documentos longos com revisões.\n\nCOMPARAÇÕES CRÍTICAS:\n- Bullet x numerada: bullet para conjuntos sem ordem; numerada para sequências — em \"passos de um procedimento\", a alternativa com bullet está errada.\n- Numeração automática x manual: a automática renumera ao inserir/excluir itens; a manual é texto fixo que desorganiza o documento — a questão que pede \"numeração que se atualiza\" exige o recurso automático.\n- Lista x tabela: lista ordena itens em sequência vertical; tabela cruza atributos em linhas e colunas — para \"itens com valores por mês\", o gabarito é tabela, não lista.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"a ordem dos itens não importa, então qualquer lista serve\" — Motivo: ignora o critério de escolha — Versão tecnicamente correta: quando a ordem importa (procedimentos, classificações), a lista deve ser numerada; sem ordem, marcadores bastam.\n- Afirmação errada: \"digitar 1., 2., 3. manualmente é equivalente à numeração automática\" — Motivo: confunde texto com recurso — Versão tecnicamente correta: a numeração manual não se atualiza ao inserir/excluir itens; apenas a numeração automática reorganiza a sequência.\n- Afirmação errada: \"listas automação não podem combinar símbolos e números\" — Motivo: afirmação de impossibilidade falsa — Versão tecnicamente correta: listas multinível permitem definir, por nível, marcador ou numeração (formato e símbolo) distintos.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: marcadores, numeração automática, formato personalizado, renumeração, reinício/continuação, lista multinível.\n- Regras e fórmulas: ordem importa → numerada; ordem indiferente → bullet; inserir/excluir itens → numeração automática ajusta sozinha.\n- Exceções: numeração digitada manualmente não renumera; reinício e continuação são configurações no menu de contexto da numeração.\n- Palavras-chave: bullet, marcadores, numeração automática, multinível, renumeração, formato de numeração.\n- Checklist de domínio: escolho o tipo por critério de ordem; aplico e personalizo formatos; explico a renumeração automática; substituo numeração manual por automática.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Um documento traz 6 etapas sequenciais de um procedimento: que tipo de lista usar e por quê? (2) O que acontece com uma lista numerada automática quando um item é inserido no meio? (3) Por que digitar \"1.\" manualmente é falha técnica? (4) Como encerrar uma lista e voltar ao parágrafo normal? (5) Listas multinível podem combinar bullets e numeração? Justifique.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Criar uma lista de compras com marcadores.",
                    "resposta": "Início > Marcadores > escolher o símbolo; digitar cada item seguido de Enter; Enter duplo (ou tecla de finalização) para sair da lista e voltar ao parágrafo normal."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Manual de procedimento com 8 etapas; a fiscalização exige que, ao inserir uma nova etapa 3, as demais renumem automaticamente.",
                    "resposta": "Aplicar numeração automática: Início > Numeração > escolher formato. Ao inserir a nova etapa 3, o Word renumera as etapas seguintes (4, 5, 6...) sem edição manual — propriedade que a numeração digitada à mão não tem, pois seria texto fixo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Documento herdado usa \"1.\", \"2.\", \"3.\" digitados à mão e ficou desordenado após revisões (dois itens \"3\", saltos de número).",
                    "resposta": "Diagnóstico: numeração manual é texto comum e não se reorganiza. Correção: selecionar os parágrafos, remover os números digitados e aplicar numeração automática; ajustar reinício/continuação pelo menu de contexto da numeração quando houver listas separadas. Resultado: inserções e exclusões futuras renumeram sozinhas."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário digita \"1.\" manualmente em vez de usar numeração automática.",
                    "correcao": "Incorreto: ao inserir ou excluir itens, a numeração manual não se ajusta e o documento desorganiza; o mecanismo correto é a numeração automática, que gera e reorganiza os números como recurso do Word."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual tipo de lista é adequado quando a ordem dos itens importa? A) Bullet; B) Numerada; C) Ambas, indiferentemente.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Listas multinível podem combinar marcadores e numeração em níveis diferentes.",
                    "resposta": "Certo. Em uma lista multinível, cada nível pode ter seu formato próprio — símbolo (bullet) ou numeração (números, letras, romanos)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Em uma lista numerada automática com 5 itens, ao excluir o item 2, os demais: A) Mantêm os números originais; B) Renumera-se automaticamente (1, 2, 3, 4); C) Ficam sem número.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de escolher entre listas com marcadores e numeradas pelo critério de ordem e de explicar a renumeração automática frente a inserções e exclusões, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-5",
            "titulo": "Cabeçalhos, rodapés, notas e numeração de páginas",
            "objetivoAprendizagem": "Aluno inserirá e gerenciará cabeçalhos, rodapés, notas de página e numeração avançada.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-5-sub-1",
                "titulo": "Cabeçalhos e rodapés",
                "objetivoAprendizagem": "Aluno inserirá e gerenciará cabeçalhos e rodapés em documentos.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que são cabeçalhos e rodapés e o que normalmente contêm; (b) as variações por seção e por página (primeira página diferente, páginas pares e ímpares); (c) a numeração de páginas: formatos (arábico, romano, alfabético), posições e reinício em valor diferente de 1; (d) o vínculo entre seções (Vincular ao Anterior) e o papel da quebra de seção; (e) campos dinâmicos dentro do cabeçalho/rodapé. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve documentos com preliminares numeradas em romano e corpo em arábico, cabeçalho diferente na primeira página e roda o gabarito por quebra de seção e desvinculação; trocar quebra de página por quebra de seção, ou afirmar que o cabeçalho é único e imutável, muda a resposta. PRÉ-REQUISITOS: parágrafos e paginação (tópico 3). OBJETIVOS OBSERVÁVEIS: (1) inserir e editar cabeçalho/rodapé com campo de número de página; (2) configurar variações por seção e por página; (3) reiniciar numeração em seção específica. COMPETÊNCIAS DESENVOLVIDAS: diagramação de documentos formais. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: quebras de página e de seção (tópico 6); relatório integrado (tópico 14). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: cabeçalho é a área no topo de cada página e rodapé a área na base; ambos pertencem a seções do documento e podem conter texto fixo e campos dinâmicos (número de página, número de páginas, data, nome do arquivo). Inserção: Inserir > Cabeçalho/Rodapé (ou número de página com posição: superior/inferior, alinhamento). Numeração de páginas: Inserir > Número de Página escolhe posição; o formato (arábico 1, 2, 3; romano i, ii, iii; alfabético A, B, C) e o reinício (Iniciar em...) são definidos no diálogo de Formatar Números de Página — configurações por seção. Variações: Primeira Página Diferente (omite ou troca o cabeçalho da capa) e Pares e Ímpares Diferentes (espelhamento para encadernação) são propriedades da seção. Vínculo entre seções: cada seção nova, por padrão, herda o cabeçalho/rodapé da anterior (Vincular ao Anterior ativado); para conteúdo distinto por seção, desmarcar o vínculo na seção destino e editar — é o mecanismo que acompanha a quebra de seção (tópico 6). Propriedade essencial: o número de página é campo dinâmico — ao inserir/remover páginas, o número se recalcula sozinho; digitar números manualmente no rodapé é erro técnico que desorganiza o documento. Caso-limite de prova: preliminares em romano e corpo em arábico reiniciando em 1 — exige quebra de seção + desvinculação + formatação/reinício na seção do corpo.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: inserir número de página no rodapé (posição inferior/centro) e reconhecer o campo dinâmico.\n- Nível intermediário: ativar Primeira Página Diferente; formatar numeração romana e reiniciar em 1 numa seção.\n- Nível avançado: desvincular cabeçalho/rodapé entre seções e manter campos distintos; incluir campo de nome do arquivo ou data.\n- Nível especialista: diagnosticar documento em que o corpo herdou o rodapé das preliminares (vínculo não desfeito) e prescrever a correção completa.\n\nCOMPARAÇÕES CRÍTICAS:\n- Cabeçalho x rodapé: posição na página (topo/base); ambos pertencem à seção e aceitam campos — a alternativa que nega campos no rodapé está errada.\n- Quebra de página x quebra de seção para cabeçalhos: quebra de página não permite cabeçalho/rodapé distinto; a quebra de seção sim — em questão sobre \"cabeçalho diferente por parte do documento\", o gabarito é seção.\n- Vincular ao Anterior x seção independente: com vínculo, a seção herda o cabeçalho anterior; desvinculada, edita-se com autonomia — esquecer a desvinculação é o erro que mantém o rodapé duplicado.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"o mesmo cabeçalho vale para todas as seções, obrigatoriamente\" — Motivo: termo absoluto que ignora o vínculo — Versão tecnicamente correta: quebras de seção permitem cabeçalhos/rodapés diferentes por seção, desde que o vínculo (Vincular ao Anterior) seja desmarcado.\n- Afirmação errada: \"é aceitável digitar manualmente os números de página em cada rodapé\" — Motivo: substitui campo dinâmico por texto — Versão tecnicamente correta: o número de página deve ser inserido como campo (Inserir > Número de Página), que se recalcula ao alterar o documento.\n- Afirmação errada: \"a numeração romana nas preliminares exige editar cada página à mão\" — Motivo: ignora formatação por seção — Versão tecnicamente correta: a formatação do número (romano) e o reinício são configurações por seção (Formatar Números de Página).\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: cabeçalho, rodapé, campo de número de página, formatos de numeração, Primeira Página Diferente, Vincular ao Anterior, seção.\n- Regras e fórmulas: número em todas as páginas → campo; parte com formato próprio → quebra de seção + desvinculação + Formatar Números de Página; capa sem cabeçalho → Primeira Página Diferente.\n- Exceções: o campo recalcula sozinho; a seção nova herda o cabeçalho anterior por padrão.\n- Palavras-chave: cabeçalho, rodapé, número de página, romano, arábico, vincular ao anterior, primeira página diferente.\n- Checklist de domínio: insiro campos; configuro formato e reinício por seção; desvinculo seções; uso primeira página diferente; jamais digito número à mão.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como inserir o número de página no rodapé central? (2) Que combinação de recursos permite preliminares em i, ii e corpo em 1, 2? (3) O que é Vincular ao Anterior e quando desmarcá-lo? (4) Como deixar a capa sem cabeçalho? (5) Por que digitar \"12\" no rodapé da página 12 é erro técnico?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Inserir número de página no rodapé, centralizado.",
                    "resposta": "Inserir > Número de Página > Inferior da Página > Central. O número entra como campo dinâmico, recalculando automaticamente ao crescer o documento."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Relatório com folha de rosto e resumo (preliminares) e corpo: preliminares numeradas em romano e corpo em arábico reiniciando em 1.",
                    "resposta": "Inserir quebra de seção (Próxima Página) após as preliminares > com o cursor nas preliminares, Inserir > Número de Página > Formatar Números de Página > formato i, ii, iii > no corpo, desmarcar Vincular ao Anterior no rodapé > Formatar Números de Página > formato 1, 2, 3 > Iniciar em 1. A quebra de seção é o requisito: sem ela, o formato seria único para todo o documento."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Documento institucional exige o logotipo no cabeçalho de todas as páginas, exceto a capa.",
                    "resposta": "Inserir o logotipo no cabeçalho (Inserir > Cabeçalho > Editar) e ativar Primeira Página Diferente (Design do Cabeçalho e Rodapé > marcar a opção); a primeira página passa a ter cabeçalho próprio (vazio), e as demais mantêm o logotipo. Se a capa precisasse de conteúdo próprio, bastaria editá-la no cabeçalho da primeira página."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que o mesmo cabeçalho vale para todas as seções.",
                    "correcao": "Incorreto: quebras de seção permitem cabeçalhos/rodapés diferentes por seção — basta desmarcar Vincular ao Anterior na seção destino e editar o conteúdo; por padrão a seção nova herda o anterior, mas o vínculo é configurável."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Como ter numeração romana nas páginas preliminares e arábica no corpo? A) Alterar o formato por seção, com quebra de seção; B) Editar manualmente cada rodapé; C) Não é possível no Word.",
                    "resposta": "A"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O número de página inserido pelo comando adequado é um campo dinâmico que se recalcula ao alterar o documento.",
                    "resposta": "Certo. O campo recalcula sozinho; digitar o número manualmente no rodapé não acompanha inserções e exclusões de páginas."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para que a capa fique sem cabeçalho e as demais páginas o mantenham, ativa-se: A) Pares e Ímpares Diferentes; B) Primeira Página Diferente; C) Vincular ao Anterior.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de inserir cabeçalho/rodapé com campos de numeração, configurar formatos e reinícios por seção e controlar o vínculo entre seções, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-2-topico-5-sub-2",
                "titulo": "Notas de rodapé e notas de fim",
                "objetivoAprendizagem": "Aluno inserirá notas de rodapé e notas de fim e criará referências cruzadas entre elas.",
                "conteudo": "As notas de rodapé e as notas de fim são recursos de comentário editorial que mantêm informações fora do corpo principal do documento. Inserção: Inserir > Nota de Rodapé (ou Ctrl+Alt+Enter) cria nota de rodapé; Inserir > Nota de Fim cria nota de fim. Numeração: o número é gerado automaticamente e pode ser configurado (formato numérico, alfabético ou romano) nas configurações de notas do documento. Referência cruzada: Inserir > Referência Cruzada > Tipo: Nota de Rodapé ou Nota de Fim > inserir no texto; a referência atualiza conforme a nota. Referências cruzadas entre notas permitem que o autor cite notas em outras partes do documento com atualização automática. A numeração das notas de rodapé e de fim é sequencial e independente entre tipos, podendo ser configurada em letras ou números; a referência cruzada deve apontar ao tipo correto (rodapé ou fim) para exibir a numeração adequada.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um relatório de quarenta páginas cita seis normas técnicas no corpo do texto. O aluno deve registrar as referências completas e numerá-las sem digitar números, de modo que uma inclusão posterior renumere tudo sozinha.",
                    "resposta": "Seis notas de rodapé numeradas automaticamente e a bibliografia em nota de fim com numeração própria; ao inserir uma sétima citação no meio do texto, as seguintes são renumeradas e as referências cruzadas acompanham a mudança."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno recebe um texto com cinco notas de rodapé e precisa acrescentar uma nota de fim que cite a norma principal, mantendo intactas as numerações que já existem.",
                    "resposta": "Documento com cinco notas de rodapé e uma nota de fim, cada sequência numerada de forma independente e estável, sem necessidade de renumerar nada à mão."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um estagiário afirma que, para garantir que o documento fique igual em qualquer computador, deve digitar o número da nota de rodapé no corpo do texto e repetir esse mesmo número na lista de notas ao final.",
                    "correcao": "A afirmação é incorreta. A numeração manual quebra na primeira inserção, enquanto a numeração gerada por comando se mantém coerente em qualquer computador, porque é campo do documento e não texto digitado."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual comando insere nota de rodapé? A) Inserir > Nota de Rodapé; B) Inserir > Citação; C) Inserir > Comentário.",
                    "resposta": "A"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A referência cruzada entre nota e texto atualiza automaticamente.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de inserir notas de rodapé e notas de fim e criará referências cruzadas entre elas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-6",
            "titulo": "Quebras de página e de seção",
            "objetivoAprendizagem": "Aluno distinguirá quebras de página e de seção e aplicará cada uma corretamente.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-6-sub-1",
                "titulo": "Quebra de página vs. quebra de seção",
                "objetivoAprendizagem": "Aluno distinguirá quebra de página e quebra de seção.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) quebra de página: o que faz (avançar conteúdo para a próxima página) e o que não faz (nada muda de formatação); (b) quebra de seção: as variações de formatação que habilita (orientação, margens, colunas, numeração, cabeçalhos/rodapés) e seus tipos (Próxima Página, Contínua, Pares, Ímpares); (c) o critério de escolha entre as duas; (d) a visualização de marcas e a remoção segura. POR QUE O CONHECIMENTO É IMPORTANTE: é a distinção mais cobrada da unidade de paginação — questões oferecem cenários (\"começar capítulo em página nova\" versus \"virar a página para paisagem no meio do documento\") e a alternativa errada troca as quebras; escolher a errada muda o gabarito e quebra o documento real. PRÉ-REQUISITOS: parágrafos e paginação (tópico 3); cabeçalhos e rodapés (tópico 5). OBJETIVOS OBSERVÁVEIS: (1) distinguir as duas quebras por consequência; (2) escolher o tipo correto de quebra de seção para o cenário; (3) aplicar orientação e margens por seção. COMPETÊNCIAS DESENVOLVIDAS: diagramação avançada; correção de documentos quebrados. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: cabeçalhos/rodapés (tópico 5 — vínculo entre seções); orientação/margens por seção (tópico 7 da unidade); relatório integrado (tópico 14). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: quebra de página (Layout > Quebras > Página, ou Ctrl+Enter) insere uma marca que força o conteúdo seguinte a começar na página seguinte; a formatação da página (margens, orientação, colunas, numeração, cabeçalho/rodapé) permanece idêntica — é apenas um avanço físico. Quebra de seção (Layout > Quebras > Quebras de Seção) inicia uma nova seção — unidade administrativa do documento que carrega suas próprias configurações de página: orientação (retrato/paisagem), margens, número de colunas, formato e reinício de numeração, cabeçalhos/rodapés (com desvinculação). Tipos: Próxima Página (a seção começa na página seguinte), Contínua (a seção começa na mesma página — típico para mudar o número de colunas no meio da página), Pares e Ímpares (a seção começa na próxima página par/ímpar, para encadernação). Critério de decisão: só a posição importa → quebra de página; a formatação precisa mudar → quebra de seção. Propriedades operacionais: as marcas são visíveis com as marcas de formatação exibidas; apagar a marca de seção funde as seções — a seção que sobra aplica suas configurações ao texto unido (efeito análogo à marca de parágrafo, mas com escala de página); apagar quebra de página apenas junta o texto, sem efeito de formatação. Caso-limite de prova: página única em paisagem no meio de um documento retrato exige quebra de seção Próxima Página antes e depois da página alvo + mudança de orientação — quebra de página não resolve.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir as duas marcas na tela (com marcas de formatação ativadas) e inserir quebra de página para novo capítulo.\n- Nível intermediário: criar seção Contínua para duas colunas no meio de uma página; explicar por que a página não virou.\n- Nível avançado: montar página única em paisagem com seções antes/depois; ajustar numeração e cabeçalhos entre seções.\n- Nível especialista: diagnosticar documento \"possuído\" por formatação indevida (marca de seção apagada sem critério) e restaurar a estrutura.\n\nCOMPARAÇÕES CRÍTICAS:\n- Quebra de página x quebra de seção: a de página só muda a posição; a de seção habilita mudanças de formatação — em \"mudar orientação no meio do documento\", o gabarito é seção.\n- Próxima Página x Contínua: Próxima Página inicia a seção em página nova; Contínua inicia na mesma página (colunas) — trocar os tipos muda o layout do resultado.\n- Apagar marca de página x marca de seção: apagar a de página apenas junta texto; apagar a de seção funde configurações e pode reformatar páginas inteiras — a alternativa que trata as duas remoções como equivalentes está errada.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"usar quebra de página para mudar as margens de uma parte do documento\" — Motivo: atribui à quebra de página efeito que pertence à seção — Versão tecnicamente correta: mudança de margens (e orientação, colunas, numeração) exige quebra de seção.\n- Afirmação errada: \"a quebra de seção Contínua inicia a nova seção na página seguinte\" — Motivo: troca entre tipos — Versão tecnicamente correta: Contínua inicia a seção na mesma página (ex.: colunas); Próxima Página é que inicia em página nova.\n- Afirmação errada: \"apagar a marca de seção não afeta a formatação\" — Motivo: ignora o carrego das configurações — Versão tecnicamente correta: apagar a marca funde as seções e a seção remanescente aplica suas configurações ao texto unido.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: quebra de página, quebra de seção, Próxima Página, Contínua, Pares/Ímpares, orientação, margens, colunas, numeração por seção.\n- Regras e fórmulas: só pular página → Página (Ctrl+Enter); mudar formatação de página → Seção; colunas no meio da página → seção Contínua; paisagem isolada → seções antes/depois + orientação.\n- Exceções: apagar marca de seção funde configurações; a nova seção herda cabeçalhos até a desvinculação.\n- Palavras-chave: quebra de página, quebra de seção, contínua, próxima página, orientação, margens, colunas, seção.\n- Checklist de domínio: distingo as quebras; escolho o tipo de seção; aplico orientação/margens por seção; prevejo o efeito de remover marcas.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Que quebra permite mudar cabeçalho por parte do documento? (2) Qual atalho insere quebra de página? (3) Como ter uma única página em paisagem dentro de um documento retrato? (4) Para que serve a quebra de seção Contínua? (5) O que acontece com a formatação ao apagar uma marca de seção?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Forçar o início de um novo capítulo na página seguinte.",
                    "resposta": "Layout > Quebras > Página (ou Ctrl+Enter) — o conteúdo seguinte começa na nova página sem qualquer mudança de formatação; se o capítulo também precisasse de cabeçalho/numeração próprios, aí sim entraria a quebra de seção."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Anexo com tabela larga precisa ficar em orientação paisagem no meio de um documento em retrato.",
                    "resposta": "Inserir quebra de seção Próxima Página antes da página do anexo > Layout > Orientação > Paisagem (aplicada à seção atual) > inserir outra quebra de seção Próxima Página após o anexo > voltar orientação Retrato. Resultado: apenas a página do anexo em paisagem; o resto do documento permanece em retrato, com numeração contínua (ajustável por seção)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Boletim precisa de duas colunas de texto apenas num bloco do meio da página, voltando a uma coluna em seguida.",
                    "resposta": "Duas quebras de seção Contínua (antes e depois do bloco) > com o cursor no bloco, Layout > Colunas > Duas. A seção Contínua muda a formatação sem empurrar o texto para outra página — exatamente o caso em que a quebra de página seria o recurso errado."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário usa quebra de página para tentar mudar as margens de uma parte do documento.",
                    "correcao": "Incorreto: quebra de página apenas avança o conteúdo para a próxima página; mudança de margens (como orientação e colunas) exige quebra de seção, que cria uma unidade administrativa com formatação de página própria."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual quebra permite mudar o cabeçalho por parte do documento? A) Quebra de página; B) Quebra de seção; C) Quebra de coluna.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A quebra de seção contínua inicia a nova seção na mesma página.",
                    "resposta": "Certo. Contínua muda a formatação sem virar a página (ex.: colunas); Próxima Página é que inicia a seção em página nova."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para uma única página em paisagem no meio de um documento retrato, usa-se: A) Duas quebras de seção Próxima Página + orientação paisagem na seção central; B) Uma quebra de página + Ctrl+P; C) Reduzir as margens manualmente em cada parágrafo.",
                    "resposta": "A"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir quebra de página de quebra de seção, escolher o tipo correto de seção para o cenário e aplicar orientação/margens/colunas por seção, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-7",
            "titulo": "Sumários automáticos, estilos de títulos e atualização de campos",
            "objetivoAprendizagem": "Aluno gerará e manterá sumários automáticos baseados em estilos de títulos.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-7-sub-1",
                "titulo": "Gerando sumários automáticos",
                "objetivoAprendizagem": "Aluno gerará e atualizará sumários automáticos baseados em estilos de títulos.",
                "conteudo": "O Word pode gerar sumários automaticamente baseando-se nos estilos de títulos aplicados (Título 1, Título 2, etc.). Processo: aplicar estilos de títulos aos tópicos, posicionar cursor onde o sumário será inserido, usar 'Referências > Sumário' e escolher o formato. O sumário é inserido como um campo que pode ser atualizado ('Atualizar campo') sempre que estilos ou estrutura mudarem. Campos podem incluir números de capítulo (ex: '2.3 Visão geral') quando usados heading levels apropriados. É possível personalizar excluindo certos níveis ou adicionando texto personalizado.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Produzir o sumário de uma apostila com três níveis de título, sabendo que capítulos ainda serão inseridos, sem que o sumário precise ser reescrito a cada mudança.",
                    "resposta": "Sumário com doze entradas de nível 1, suas seções e subseções e os números de página corretos; ao inserir um capítulo novo, basta atualizar o campo para que a lista e a paginação sejam recalculadas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa publicar a versão final de um manual cujo sumário foi gerado antes de dois capítulos serem fundidos e de um terceiro ser renomeado.",
                    "resposta": "Sumário com dezessete entradas na nova ordem, título renomeado atualizado e paginação coerente com o corpo do manual, sem edição manual da lista."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um revisor afirma que o sumário ficou vazio porque o recurso está com defeito e que a solução é digitar as entradas manualmente, já que os capítulos aparecem corretamente formatados na tela.",
                    "correcao": "A afirmação é incorreta: o sumário não estava defeituoso, e sim sem títulos estilizados para coletar. Com estilos aplicados, a lista é gerada e passa a se manter atualizada; a digitação manual apenas mascara o problema."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "O sumário automático baseia-se em: A) Formatação direta; B) Estilos de título; C) Marcadores manuais.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O sumário é um campo atualizável.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de gerar e atualizará sumários automáticos baseados em estilos de títulos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-8",
            "titulo": "Referências cruzadas, legendas, índices e citações",
            "objetivoAprendizagem": "Aluno inserirá referências cruzadas, legendas automáticas, índices e gerenciará citações bibliográficas.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-8-sub-1",
                "titulo": "Referências cruzadas e legendas automáticas",
                "objetivoAprendizagem": "Aluno inserirá referências cruzadas e legendas automáticas para figuras e tabelas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) referências cruzadas: vínculos que apontam para elementos do documento (figuras, tabelas, títulos, notas) e se atualizam; (b) legendas automáticas: rotulação numerada de figuras/tabelas/equações e sua ligação com as referências; (c) índice remissivo: geração a partir de marcas de entrada; (d) citações e bibliografia: gestão de fontes com estilos acadêmicos (APA, entre outros) e geração automática. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve documentos que renumeram figuras (inserir figura nova no meio) e pergunta se a menção \"Figura 3\" no texto acompanha; digitar a menção manualmente versus usar referência cruzada é exatamente a pegadinha que muda o gabarito. PRÉ-REQUISITOS: estilos (tópico 2); sumários (tópico 7). OBJETIVOS OBSERVÁVEIS: (1) inserir legenda automática e referência cruzada corretas; (2) gerar e atualizar índice remissivo; (3) gerenciar fontes e gerar bibliografia. COMPETÊNCIAS DESENVOLVIDAS: rigor documental; manutenção de integridade referencial. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: sumários (tópico 7 — mesmo princípio de campo); notas de rodapé (tópico 5, sub-2); relatório integrado (tópico 14). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média a alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: referência cruzada é um campo que aponta para um elemento rotulado do documento (Referências > Referência Cruzada, com tipo e conteúdo do que exibir — ex.: \"Somente número da figura\"); o mecanismo é o mesmo dos sumários: campo que exige atualização (F9/Atualizar campo) após reestruturação. Legenda automática (Referências > Inserir Legenda) rotula a figura/tabela/equação com rótulo (Figura, Tabela), número sequencial e descrição; o número é gerado automaticamente e renumera com inserções/exclusões quando as legendas e referências são atualizadas. Índice remissivo: marca-se cada termo relevante (Referências > Marcar Entrada) e, ao final, o índice é gerado (Referências > Inserir Índice) a partir das marcas; a atualização recompila as entradas. Citações e bibliografia: as fontes são cadastradas (Referências > Gerenciar Fontes) com autor, título, ano etc.; a citação é inserida no texto pelo nome da fonte (campo) e a bibliografia é gerada ao final, podendo alternar o estilo acadêmico (APA e outros); trocar o estilo reformata todas as citações de uma vez. Propriedade integradora: legenda (rotula) + referência cruzada (cita) + atualização de campos = integridade referencial; qualquer menção digitada manualmente (\"Figura 3\") fica órfã quando a figura muda de número. Limitações: os mecanismos exigem que os elementos tenham sido criados pelos recursos automáticos — legenda digitada à mão não alimenta referência cruzada.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: inserir legenda automática numa figura e ver o número gerado.\n- Nível intermediário: referenciar a figura no texto via Referência Cruzada; inserir figura nova no meio e atualizar campos, conferindo a renumeração.\n- Nível avançado: marcar termos e gerar índice remissivo; cadastrar fontes e gerar bibliografia em estilo APA.\n- Nível especialista: auditar documento com menções manuais órfãs e migrar para o sistema legenda + referência cruzada + atualização de campos.\n\nCOMPARAÇÕES CRÍTICAS:\n- Referência cruzada x texto digitado: a cruzada é campo que acompanha a renumeração; o texto digitado fica órfão — em \"inseriu figura nova; as menções atualizam?\", o gabarito exige cruzada + atualização de campos.\n- Legenda automática x legenda digitada: a automática gera número sequencial e alimenta referências; a digitada é texto estático — confundir as duas inverte a resposta sobre renumeração.\n- Sumário x índice remissivo: sumário lista títulos (dos estilos); índice lista termos marcados com as páginas onde ocorrem — trocar os dois mecanismos é erro de gabarito.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"digitar 'Figura 1' no texto é equivalente a usar referência cruzada\" — Motivo: confunde texto com campo — Versão tecnicamente correta: a referência cruzada é campo que se atualiza quando as legendas renumeram; o texto digitado não acompanha.\n- Afirmação errada: \"o índice remissivo é gerado a partir dos estilos de título\" — Motivo: troca entre índice e sumário — Versão tecnicamente correta: o índice remissivo é gerado a partir das marcas de entrada marcadas no texto; o sumário é que se gera dos estilos.\n- Afirmação errada: \"trocar o estilo da bibliografia exige reeditar todas as citações\" — Motivo: minimiza o mecanismo de fonte centralizada — Versão tecnicamente correta: alternar o estilo bibliográfico reformata as citações e a bibliografia geradas de uma vez, pois as fontes estão cadastradas.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: referência cruzada, legenda automática, rótulo, campo, índice remissivo, marca de entrada, citação, bibliografia, estilo APA.\n- Regras e fórmulas: rotular com legenda → citar com referência cruzada → atualizar campos após mudanças; índice = marcas de entrada; bibliografia = fontes cadastradas.\n- Exceções: menções manuais ficam órfãs; legendas digitadas não alimentam referências; campos exigem atualização explícita.\n- Palavras-chave: referência cruzada, legenda, índice, marca de entrada, citação, bibliografia, APA, campo.\n- Checklist de domínio: rotulo com legenda; cito com cruzada; atualizo campos; gero índice por marcas; gerencio fontes e bibliografia.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como rotular uma tabela para que o número seja automático? (2) Inseriu-se uma figura nova antes da Figura 3: o que acontece com as referências cruzadas após atualizar os campos? (3) De que se alimenta o índice remissivo? (4) Como gerar a bibliografia em APA sem redigir à mão? (5) Corrija: \"menções digitadas manualmente acompanham a renumeração\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Inserir referência cruzada para a Figura 1.",
                    "resposta": "Referências > Referência Cruzada > Tipo de referência: Figura > escolher \"Somente rótulo e número\" ou variante > Inserir. A menção entra como campo e atualiza quando a figura muda de número (com Atualizar campo)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Documento técnico com 12 figuras: a diretoria pediu uma nova figura entre as atuais 4 e 5.",
                    "resposta": "Inserir a imagem > Referências > Inserir Legenda (rótulo Figura) — a nova recebe o número 5 e as seguintes deslocam. Em seguida, atualizar os campos: selecionar tudo (Ctrl+A) > F9 — as referências cruzadas do texto passam a apontar os números renumerados. Menções digitadas manualmente (\"Figura 5\") não atualizam: ficam apontando a figura errada — razão pela qual a referência cruzada é obrigatória em documentos com figuras renumeráveis."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Artigo exige citações no estilo APA e bibliografia final coerente.",
                    "resposta": "Referências > Gerenciar Fontes > cadastrar cada fonte (autor, título, ano) > inserir citações pelo nome da fonte (Inserir Citação) > ao final, Referências > Bibliografia > escolher o estilo APA no menu de estilo; alternar o estilo reformata citações e bibliografia de uma vez. A bibliografia gerada é campo: atualiza ao incluir novas fontes."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário digita \"Figura 1\" manualmente no texto.",
                    "correcao": "Incorreto: a menção manual não atualiza quando as legendas renumeram — fica apontando a figura errada; o mecanismo correto é a referência cruzada (Referências > Referência Cruzada), que é campo atualizável."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso gera a bibliografia com estilo APA a partir de fontes cadastradas? A) Referência cruzada; B) Citações e bibliografia (Referências); C) Legenda.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O índice remissivo é gerado a partir de marcas de entrada marcadas ao longo do texto.",
                    "resposta": "Certo. O índice lista os termos marcados (Referências > Marcar Entrada) e as páginas onde ocorrem; o sumário é que se gera dos estilos de título."
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Após inserir uma figura nova no meio do documento, as referências cruzadas existentes se ajustam automaticamente, sem qualquer ação do usuário.",
                    "resposta": "Errado. As referências cruzadas são campos: a renumeração das legendas acontece automaticamente, mas exibir os novos números exige atualizar os campos (ex.: Ctrl+A + F9 ou Atualizar campo)."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de rotular elementos com legendas automáticas, inserir referências cruzadas atualizáveis e gerar índice remissivo e bibliografia a partir de marcas e fontes, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-9",
            "titulo": "Tabelas, imagens, formas e disposição de texto",
            "objetivoAprendizagem": "Aluno criará e formatará tabelas, inserirá imagens e formas, e controlará disposição de texto.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-9-sub-1",
                "titulo": "Tabelas no Word",
                "objetivoAprendizagem": "Aluno criará e formatará tabelas com fórmulas e propriedades avançadas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) criação e estrutura de tabelas no Word (linhas, colunas, células); (b) formatação de tabelas: bordas, sombreamento, estilos, alinhamento e autoajuste; (c) fórmulas integradas de tabela (como =SUM(ABOVE)) e seus limites; (d) propriedades operacionais: repetir linha de cabeçalho, conversão tabela-texto, classificação; (e) por que a tabela do Word não substitui o Excel. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra propriedades específicas (repetir cabeçalho em várias páginas, fórmula =SUM(ABOVE), conversão em texto) e a distinção entre os recursos de tabela do Word e os do Excel; generalizar funções do Excel para o Word muda o gabarito. PRÉ-REQUISITOS: interface do Word (unidade 1.2, tópico 1). OBJETIVOS OBSERVÁVEIS: (1) criar e formatar uma tabela com estilos e propriedades; (2) aplicar fórmula integrada e identificar seu alcance; (3) decidir quando a tarefa exige tabela do Word ou planilha do Excel. COMPETÊNCIAS DESENVOLVIDAS: organização tabular de dados em documento; escolha de ferramenta por capacidade. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópico 2 (objetos e disposição de texto); unidade 1.3 (Excel); unidade 1.2 tópico 14 (relatório integrado). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: a tabela é o recurso do Word para organizar dados em grade de linhas e colunas, em que cada interseção é uma célula. Criação: Inserir > Tabela (seleção da grade, caixa de diálogo com número de linhas e colunas, ou desenho manual). Formatação: estilos de tabela predefinidos (paletas com bordas e sombreamento), cores de fundo por célula/linha, bordas personalizadas, alinhamento do conteúdo, autoajuste de colunas (ao conteúdo, à janela, fixo) e sombreamento de linhas alternadas para leitura. Fórmulas integradas: no contexto de tabela, o comando Fórmula (guia Layout da tabela) aceita funções limitadas — como =SUM(ABOVE), que soma as células acima da célula atual, ou médias — sem a biblioteca completa do Excel; para cálculo complexo, a resposta técnica é usar uma planilha do Excel e inserir/vincular no Word. Propriedades operacionais: repetir como linha de cabeçalho (a primeira linha reaparece em cada página quando a tabela atravessa páginas), permitir quebra de linha entre páginas, converter tabela em texto (e texto em tabela) usando separadores (tabulação, vírgula), classificar linhas por coluna. Limitação conceitual: a tabela do Word é recurso de apresentação com aritmética mínima; a tabela do Excel é motor de cálculo com funções, gráficos e tabelas dinâmicas — a escolha errada da ferramenta é o erro de gabarito clássico.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: criar tabela 3x3 pela grade e preencher células; reconhecer célula, linha e coluna.\n- Nível intermediário: aplicar estilo, sombreamento alternado e a fórmula =SUM(ABOVE); configurar repetir cabeçalho em tabela longa.\n- Nível avançado: converter texto separado por tabulações em tabela e vice-versa; classificar linhas por coluna; explicar quando a fórmula do Word não basta.\n- Nível especialista: diagnosticar documento com tabela atravessando páginas (cabeçalho ausente na página 2) e decidir entre propriedade de repetição, quebra controlada ou migração da parte calculável para o Excel.\n\nCOMPARAÇÕES CRÍTICAS:\n- Tabela do Word x planilha do Excel: a tabela do Word formata e organiza com fórmulas limitadas (=SUM(ABOVE)); o Excel calcula com a biblioteca completa de funções — para \"somar coluna com critério\", o gabarito é Excel, não tabela do Word.\n- Fórmula integrada do Word x função do Excel: =SUM(ABOVE) referencia posição (células acima) dentro da tabela; =SOMA(A1:A10) referencia células por endereço com qualquer função — confundir as sintaxes muda a resposta.\n- Repetir cabeçalho x mesclar células na primeira linha: repetir cabeçalho reproduz a linha em cada página quando a tabela quebra; mesclar não reproduz nada — a alternativa que confunde os dois recursos está errada.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"as tabelas do Word têm todas as funções do Excel\" — Motivo: generalização falsa — Versão tecnicamente correta: as fórmulas integradas de tabela do Word são limitadas (soma, média etc. por posição); cálculos complexos exigem o Excel.\n- Afirmação errada: \"o cabeçalho da tabela aparece automaticamente em todas as páginas\" — Motivo: confunde comportamento padrão com configuração opcional — Versão tecnicamente correta: é preciso ativar a propriedade repetir como linha de cabeçalho na primeira linha da tabela.\n- Afirmação errada: \"não é possível converter uma tabela do Word em texto simples\" — Motivo: afirmação de impossibilidade falsa — Versão tecnicamente correta: a conversão existe, com separador escolhido (tabulação, vírgula, entre outros), e o caminho inverso (texto em tabela) também.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: grade, célula, estilo de tabela, autoajuste, fórmula integrada, repetir cabeçalho, conversão tabela-texto.\n- Regras e fórmulas: =SUM(ABOVE) soma as células acima da atual; cabeçalho em todas as páginas → propriedade repetir como linha de cabeçalho; tabela longa com cálculo complexo → Excel.\n- Exceções: fórmulas do Word são posicionais e limitadas; classificação e filtros do Word são menos completos que os do Excel.\n- Palavras-chave: tabela, célula, estilo de tabela, =SUM(ABOVE), repetir cabeçalho, converter em texto, classificar.\n- Checklist de domínio: crio e formato tabela; aplico =SUM(ABOVE); configuro repetição de cabeçalho; converto tabela em texto; decido Word versus Excel para cálculo.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como fazer a primeira linha de uma tabela reaparecer em cada página? (2) O que faz =SUM(ABOVE) e de que tipo de fórmula ela é exemplo? (3) Uma tabela precisa de SOMASE sobre centenas de linhas: qual ferramenta usar e por quê? (4) Como converter uma tabela em texto separado por tabulações? (5) Corrija: \"a tabela do Word executa qualquer função do Excel\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Criar uma tabela 3x3 num documento.",
                    "resposta": "Inserir > Tabela > selecionar a grade 3x3 (ou usar a caixa de diálogo/desenho); preencher as células; aplicar um estilo de tabela na guia Design da tabela para bordas e sombreamento."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Tabela de despesas com 40 linhas que atravessa duas páginas; a coluna Valor precisa de total.",
                    "resposta": "Total: posicionar o cursor na célula abaixo da coluna Valor > guia Layout da tabela > Fórmula > =SUM(ABOVE) > OK (fórmula integrada posicional). Cabeçalho: selecionar a primeira linha > Layout > Repetir Linhas de Cabeçalho, para que reapareça na página 2. Observação de limite: se fosse preciso somar só as despesas de um tipo (critério), a fórmula do Word não cobre — a parte de cálculo migraria para o Excel."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Relatório recebeu lista de 200 itens separados por tabulação e precisa virar tabela ordenada por valor.",
                    "resposta": "Selecionar o texto > Inserir > Tabela > Converter Texto em Tabela > separador tabulação. Depois, com o cursor na tabela, Layout > Classificar > coluna Valor, decrescente. Se a classificação com múltiplos níveis ou a soma por categoria for necessária, exportar a tabela para o Excel — a tabela do Word classifica, mas o cálculo condicional fica fora do seu escopo."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que as tabelas do Word têm todas as funções do Excel.",
                    "correcao": "Incorreto: as fórmulas integradas de tabela do Word são limitadas e posicionais (como =SUM(ABOVE) para somar células acima); funções com critérios, gráficos e tabelas dinâmicas exigem o Excel, que pode ser vinculado ao documento."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual propriedade repete a linha de cabeçalho em cada página de uma tabela longa? A) Autoajuste; B) Repetir como linha de cabeçalho; C) Sombreamento de linhas alternadas.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Tabelas do Word podem ser convertidas em texto.",
                    "resposta": "Certo. A conversão tabela-texto existe nos dois sentidos, com escolha do separador (tabulação, vírgula, entre outros)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para somar as células acima da célula atual numa tabela do Word, usa-se: A) =SOMA(A1:A10) com endereços de planilha; B) =SUM(ABOVE), fórmula integrada posicional; C) Não é possível somar no Word.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de criar e formatar uma tabela do Word, aplicar a fórmula integrada =SUM(ABOVE), configurar a repetição do cabeçalho entre páginas e decidir corretamente entre tabela do Word e planilha do Excel para um cálculo, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-2-topico-9-sub-2",
                "titulo": "Tabelas com imagens, formas, objetos e disposição de texto",
                "objetivoAprendizagem": "Aluno inserirá imagens, formas e objetos em tabelas e controlará disposição de texto.",
                "conteudo": "A título do tópico 9 (Tabelas, imagens, formas, objetos e disposição de texto), o conteúdo atual trata apenas de tabelas. A inserção de imagens e formas em tabelas, a manipulação de objetos (envoltório/wrap, ordem atrás/em frente, agrupamento) e a vinculação/incorporação de objetos complementam a prática. Imagens em tabelas: Inserir > Imagem dentro da célula ou ao redor; a imagem pode ser envolvida por texto (Layout > Envolver texto). Formas: Inserir > Forma dentro da célula ou sobreposta; agrupar (selecionar objetos > Grupo) une imagem/forma a elementos. Objeto vinculado/incorporado: Colar (incorporado) vs Colar como linka (vinculado) via Colar Especial. Envolvimento (wrap): o texto flui em torno do objeto conforme o tipo de envolvimento (Enquadrar, Barrar, etc.). Ordem (atrás/em frente): selecionar > Enviar para trás/Colar à frente. Disposição de texto: ajustar alinhamento, espaçamento e posicionamento dentro da célula/tabela.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Montar uma ficha técnica em que cada linha da tabela traga a descrição do equipamento e uma foto, mantendo a imagem dentro da célula e o texto legível na coluna vizinha.",
                    "resposta": "Ficha com oito imagens dentro das células, texto da coluna vizinha intacto e imagens ancoradas às suas linhas, de modo que a tabela se desloca como um bloco."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa agrupar uma imagem e uma seta sobre ela para movimentar o conjunto como uma única unidade dentro de um fluxograma feito no editor de texto.",
                    "resposta": "Imagem e seta movidas como uma unidade, sem desalinhamento, e o restante do fluxograma intacto; o conjunto mantém a posição relativa em qualquer movimentação posterior."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que o objeto vinculado se atualiza automaticamente quando o arquivo de origem muda e que, por isso, convém sempre usar vínculo em relatórios que serão enviados por e-mail.",
                    "correcao": "A afirmação é parcialmente incorreta: o objeto vinculado realmente busca a origem, mas deixa de exibir o conteúdo correto quando o arquivo referenciado não está acessível, e o envio por e-mail não transporta o vínculo funcional."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual o mecanismo para vincular objeto do Excel em Word com atualização? A) Colar comum; B) Colar como linka (Colar Especial); C) Exportar PDF.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O envolvimento de texto (wrap) pode ser configurado para imagem/forma.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de inserir imagens, formas e objetos em tabelas e controlará disposição de texto, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-10",
            "titulo": "Revisão, comentários, controle de alterações e comparação de documentos",
            "objetivoAprendizagem": "Aluno utilizará as ferramentas de revisão do Word para colaborar e comparar versões.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-10-sub-1",
                "titulo": "Rastreamento de alterações e comentários",
                "objetivoAprendizagem": "Aluno utilizará rastreamento de alterações e comentários para revisão colaborativa.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) controle de alterações: o que marca (inserções, exclusões, formatação) e para que serve; (b) comentários: anotações vinculadas a trechos, com resolução e remoção — e o fato de não alterarem o texto; (c) comparação de documentos: gerar o conjunto de diferenças entre duas versões; (d) combinação (mesclar): reunir alterações de múltiplas versões num documento resultante; (e) o fluxo de revisão completo (revisar, aceitar/rejeitar, finalizar). POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve fluxos colaborativos e cobra a diferença entre comentário (anotação) e alteração rastreada (mudança no texto), e entre comparar (duas versões) e combinar (múltiplas versões); trocar esses pares muda o gabarito. PRÉ-REQUISITOS: interface (tópico 1). OBJETIVOS OBSERVÁVEIS: (1) ativar/desativar o controle de alterações e interpretar as marcações; (2) gerenciar comentários (inserir, responder, resolver); (3) executar comparar e combinar e escolher o adequado ao cenário. COMPETÊNCIAS DESENVOLVIDAS: revisão colaborativa; auditoria de mudanças. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: proteção e restrições (tópico 11); relatório integrado (tópico 14); coautoria no Microsoft 365 (unidade 1.1, sub-6). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: controle de alterações (Track Changes) é o modo de revisão em que toda edição é registrada como marcação — inserções aparecem destacadas (sublinhado/cor), exclusões permanecem visíveis riscadas (ou na margem, conforme a exibição), e mudanças de formatação são anotadas — com identificação do autor, se disponível; o texto não muda até que alguém aceite ou rejeite cada marcação (Revisão > Aceitar/Rejeitar). Comentários são anotações ancoradas a trechos (Revisão > Novo Comentário): convivem com o texto sem alterá-lo, podem ser respondidos, resolvidos e excluídos; servem para diálogo entre revisores. Comparação de documentos (Revisão > Comparar): recebe o documento original e o revisado e produz um documento resultante legal que exibe as diferenças como marcações — usado quando a revisão não foi rastreada ou as versões circularam fora de controle. Combinação (mesclar): reúne alterações de múltiplos revisores (várias versões) num documento resultante consolidado, permitindo examinar quem mudou o quê. Diferença conceitual: comparar trabalha com um par de versões; combinar trabalha com várias; controle de alterações é regime de edição ativo, enquanto comentário é camada de diálogo. Fluxo de fechamento do ciclo: aceitar/rejeitar tudo, remover comentários resolvidos e finalizar (a versão limpa é a que segue para assinatura/distribuição). Limitação: as marcações (incluindo autor e datas) fazem parte do arquivo até serem aceitas/removidas — distribuir documento com histórico de revisão expõe informações; a prática correta é aceitar tudo e remover comentários antes da versão final.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: ativar o controle de alterações, fazer uma edição e interpretar a marcação.\n- Nível intermediário: inserir/resolver comentários; aceitar e rejeitar alterações seletivamente.\n- Nível avançado: comparar duas versões sem rastreamento; combinar três versões de revisores distintos.\n- Nível especialista: estabelecer rotina institucional de revisão (rastrear desde o início, consolidar por combinação, finalizar sem marcações) e explicar o risco de distribuir documento com histórico embutido.\n\nCOMPARAÇÕES CRÍTICAS:\n- Controle de alterações x comentário: a marcação altera o texto ao ser aceita; o comentário é anotação que nunca altera o corpo — em \"recurso que não modifica o texto\", o gabarito é comentário.\n- Comparar x combinar: comparar recebe duas versões; combinar reúne múltiplas versões — trocar os termos é o distrator padrão.\n- Aceitar x ignorar: a alteração rastreada só sai do documento por aceitação (incorpora) ou rejeição (descarta); nenhum caminho é neutro — a alternativa \"deixar a marcação no arquivo final\" é o erro de higiene documental.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"os comentários alteram o texto do documento\" — Motivo: confunde anotação com edição — Versão tecnicamente correta: comentários são anotações vinculadas a trechos; o corpo do texto só muda por alterações rastreadas aceitas.\n- Afirmação errada: \"comparar e combinar são o mesmo recurso\" — Motivo: troca entre mecanismos com aridades distintas — Versão tecnicamente correta: comparar difunde um par (original x revisado); combinar consolida alterações de múltiplas versões.\n- Afirmação errada: \"marcações de revisão desaparecem sozinhas ao salvar\" — Motivo: termo absoluto — Versão tecnicamente correta: as marcações permanecem no arquivo até serem aceitas/rejeitadas e os comentários removidos; distribuir sem esse fechamento expõe o histórico.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: controle de alterações, marcação, aceitar/rejeitar, comentário, resolução, comparar documentos, combinar versões, documento resultante.\n- Regras e fórmulas: revisão controlada → rastrear ativo; diálogo sem editar → comentário; reconstruir diferenças → comparar (2 versões); consolidar equipe → combinar (n versões).\n- Exceções: marcações e comentários integram o arquivo até a limpeza final; a exibição das marcações é configurável sem alterar o conteúdo.\n- Palavras-chave: Track Changes, aceitar, rejeitar, comentário, comparar, combinar, versão, revisão.\n- Checklist de domínio: rastreio e interpreto marcações; gerencio comentários; escolho comparar x combinar; fecho o ciclo antes de distribuir.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual recurso registra quem incluiu ou excluiu cada trecho e como o texto fica até a decisão? (2) Comentários alteram o texto? O que eles fazem? (3) Duas versões circularam sem rastreamento: que recurso reconstrói as diferenças? (4) Três revisores devolveram versões distintas: comparar ou combinar? (5) Quais fechamentos são obrigatórios antes da versão final e por quê?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Ativar o rastreamento de alterações num documento em revisão.",
                    "resposta": "Revisão > Controlar Alterações > ativar. A partir daí, inserções aparecem destacadas, exclusões ficam riscadas/na margem e mudanças de formatação são anotadas — cada marcação aguarda aceitar/rejeitar."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Três técnicos revisaram cópias distintas do mesmo relatório; a coordenação quer um único documento com todas as contribuições identificadas.",
                    "resposta": "Revisão > Comparar > Combinar: indicar o documento base e as três versões revisadas — o Word produz um documento resultante consolidado, com as alterações de cada revisor como marcações. Em seguida, a coordenação aceita/rejeita marcação por marcação. Se fosse apenas um par de versões (original x revisado), o correto seria Comparar (não Combinar)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Jurídico sinalizou que a versão circulada expunha quem sugeriu cada trecho, com datas.",
                    "resposta": "Diagnóstico: o arquivo distribuído ainda continha as marcações e o histórico de revisão. Rotina correta antes de distribuir: Revisão > aceitar todas as alterações > excluir todos os comentários > conferir que não há marcação pendente (exibir como Final/Sem marcações não remove conteúdo de revisão — a aceitação/remoção é que limpa) > salvar e distribuir. Higiene documental protege autores e evita exposição de rascunhos."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que comentários alteram o texto do documento.",
                    "correcao": "Incorreto: comentários são anotações vinculadas a trechos — servem ao diálogo entre revisores e podem ser respondidos/resolvidos; o texto do corpo só muda por alterações rastreadas que forem aceitas."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso mescla alterações de múltiplas versões num documento resultante? A) Comparar; B) Combinar; C) Controlar alterações.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Comentários podem ser resolvidos pelos revisores.",
                    "resposta": "Certo. Comentários podem ser respondidos, resolvidos e removidos — sem alterar o corpo do texto."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Uma alteração rastreada deixa de constar do documento quando o revisor: A) Salva o arquivo; B) A aceita (incorpora) ou a rejeita (descarta); C) Fecha o Word.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de ativar e interpretar o controle de alterações, gerenciar comentários e escolher corretamente entre comparar (duas versões) e combinar (múltiplas versões), fechando o ciclo de revisão antes da distribuição, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-11",
            "titulo": "Proteção, restrições de edição e permissões",
            "objetivoAprendizagem": "Aluno protegerá documentos contra edições não autorizadas.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-11-sub-1",
                "titulo": "Restrições de edição e senhas",
                "objetivoAprendizagem": "Aluno aplicará restrições de edição e senhas de proteção.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os mecanismos de proteção do Word: restrições de edição (Revisão > Restringir Edição), senha para abrir (criptografia) e senha para modificar; (b) a diferença decisiva entre senha de abertura e senha de modificação; (c) marcas d'água e seu papel sinalizador; (d) permissões em SharePoint/OneDrive como camada complementar, com expiração de link quando disponível no plano; (e) o que a proteção do Word não garante. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve cenários (permitir só comentários; bloquear leitura sem senha; permitir abrir mas não editar) e pede o mecanismo correto; trocar senha de abertura por senha de modificação muda o gabarito. PRÉ-REQUISITOS: subtópicos de interface e formatos (tópico 1). OBJETIVOS OBSERVÁVEIS: (1) aplicar restrição de edição por nível; (2) escolher entre senha de abertura e de modificação; (3) reconhecer a camada de permissões em nuvem e suas condições; (4) avaliar limites da proteção local. COMPETÊNCIAS DESENVOLVIDAS: controle de acesso a documentos; triagem de requisitos de proteção. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.1 sub-8 (permissões e compartilhamento); Módulo 4 (confidencialidade e criptografia); unidade 1.5 (OneDrive). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média a alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: a proteção no Word opera em duas camadas locais. Camada de edição: Revisão > Restringir Edição permite limitar o que o destinatário pode fazer — somente leitura, comentários, preenchimento de formulários ou edição sem restrições em exceções marcadas — ativando a proteção (com senha opcional para liberar); sem senha, a restrição é cooperativa (o usuário pode desativá-la), com senha ela impõe barreira. Camada de conteúdo: Arquivo > Informações > Proteger Documento > Criptografar com Senha define a senha para abrir — sem ela, o arquivo não abre e o conteúdo permanece ilegível (o documento é criptografado); a senha para modificar (salvar como, opções de ferramentas/geral, conforme a versão) permite abrir e ler, mas impede salvar alterações sobre o arquivo original sem a senha. Marca d'água (Design > Marca d'água, como rascunho ou confidencial) é sinalização visual, não bloqueio de ação. Camada de nuvem: permissões do SharePoint/OneDrive controlam quem pode visualizar/editar e podem incluir expiração de link e proteção por senha para links — opções dependentes do plano/licença. Limitações: senha perdida de criptografia implica perda de acesso ao conteúdo; a proteção local não impede capturas de tela nem o repasse do arquivo após liberado, e a rigidez criptográfica real depende da versão e da implementação — para exigências institucionais, conferir as políticas oficiais.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir \"não pode editar\" (restrição) de \"não pode abrir\" (criptografia).\n- Nível intermediário: aplicar restrição de edição por nível (somente comentários) com ativação de proteção; definir senha para abrir.\n- Nível avançado: explicar a senha para modificar (abre e lê, não salva sobre o original) e decidir qual camada atende ao requisito.\n- Nível especialista: compor defesa em camadas (restrição + criptografia + permissões em nuvem), declarar o que a proteção não cobre (capturas, repasse) e o risco de perda por senha esquecida.\n\nCOMPARAÇÕES CRÍTICAS:\n- Senha para abrir x senha para modificar: abrir bloqueia o acesso sem senha; modificar permite leitura e impede salvar alterações — em \"documento pode ser lido por todos, mas não alterado\", o gabarito é senha de modificação (ou restrição de edição).\n- Restrição com senha x sem senha: sem senha, o usuário pode desativar a restrição (cooperativa); com senha, há barreira efetiva — a alternativa que trata restrição sem senha como blindagem está errada.\n- Marca d'água x restrição: marca d'água sinaliza (ex.: RASCUNHO); não impede edição — confundir sinalização com bloqueio inverte a resposta.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"a senha de modificação impede a leitura do documento\" — Motivo: troca entre os dois tipos de senha — Versão tecnicamente correta: a senha para modificar permite abrir e ler, mas impede salvar alterações sem a senha; quem impede a abertura é a criptografia com senha (senha para abrir).\n- Afirmação errada: \"restringir a edição sem senha torna o documento imutável\" — Motivo: ignora o caráter cooperativo — Versão tecnicamente correta: sem a senha de proteção, o próprio usuário pode desativar a restrição; com senha, há barreira real.\n- Afirmação errada: \"a marca d'água impede que o documento seja copiado\" — Motivo: confunde sinalização com controle de acesso — Versão tecnicamente correta: a marca d'água é recurso visual de sinalização; o controle de cópia/edição vem da restrição, da criptografia e das permissões.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: restrição de edição, senha para abrir (criptografia), senha para modificar, marca d'água, permissões em nuvem, expiração de link.\n- Regras e fórmulas: não pode abrir → Criptografar com Senha; abre e não edita → senha para modificar ou Restringir Edição; só anotações → Restringir Edição (nível comentários).\n- Exceções: opções de link (expiração, senha) dependem do plano; senha de criptografia perdida = perda de acesso; marca d'água não bloqueia.\n- Palavras-chave: restringir edição, criptografar com senha, senha de modificação, marca d'água, proteção, permissões.\n- Checklist de domínio: aplico restrição por nível; distingo os dois tipos de senha; posiciono a marca d'água; combino camadas; declaro limites da proteção local.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como permitir que revisores apenas comentem, sem editar o texto? (2) Qual proteção impede a abertura do arquivo sem senha e onde se configura? (3) Qual a diferença entre senha para abrir e senha para modificar? (4) A restrição de edição ativada sem senha pode ser desativada pelo usuário? (5) Corrija: \"a marca d'água impede edição\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Restringir a edição do documento para que os revisores apenas comentem.",
                    "resposta": "Revisão > Restringir Edição > selecionar o nível (comentários) > Ativar Proteção (senha opcional). Sem senha, a restrição é cooperativa (pode ser desativada pelo usuário); com senha, há barreira efetiva."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Documento com dados sigilosos precisa ser enviado a um único destinatário que não deve abrir sem autorização.",
                    "resposta": "Arquivo > Informações > Proteger Documento > Criptografar com Senha: define a senha para abrir; sem ela, o conteúdo permanece ilegível. Transmitir a senha por canal distinto do arquivo. Complemento: se o envio for por SharePoint/OneDrive, restringir o compartilhamento a pessoas específicas — a criptografia local e as permissões em nuvem são camadas complementares."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Modelo de termo deve ser consultado por toda a equipe, mas não pode ser alterado sobre o original.",
                    "resposta": "Combinar camadas conforme o requisito: Restringir Edição (somente leitura) para desencorajar alterações e senha para modificar para impedir que a versão original seja sobrescrita — a leitura permanece livre. Registrando o limite técnico: cópias podem ser salvas como novo arquivo; o controle de circulação pertence às permissões do ambiente em nuvem (quando disponível no plano)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a senha de modificação impede a leitura.",
                    "correcao": "Incorreto: a senha para modificar permite abrir e ler o documento, mas impede salvar alterações sobre o original sem a senha; quem impede a abertura é a senha de criptografia (para abrir)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual proteção exige senha para abrir o arquivo? A) Restrição de edição; B) Criptografia com senha (senha para abrir); C) Marca d'água.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) As permissões do SharePoint/OneDrive controlam visualização e edição, podendo incluir expiração de link.",
                    "resposta": "Certo. Essas opções são a camada de proteção em nuvem; a disponibilidade de expiração e proteção por senha nos links depende do plano/licença."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Restringir Edição ativada SEM senha de proteção significa que: A) Ninguém jamais pode editar; B) O próprio usuário pode desativar a restrição (caráter cooperativo); C) O documento fica criptografado.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar restrições de edição por nível e de escolher corretamente entre senha de abertura, senha de modificação e permissões em nuvem conforme o requisito do cenário, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-12",
            "titulo": "Acessibilidade, verificação ortográfica e exportação para PDF",
            "objetivoAprendizagem": "Aluno garantirá acessibilidade, verificará ortografia e exportará corretamente para PDF.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-12-sub-1",
                "titulo": "Acessibilidade e exportação PDF",
                "objetivoAprendizagem": "Aluno garantirá acessibilidade e exportará documentos para PDF preservando estruturas.",
                "conteudo": "Verificar Acessibilidade (Review > Verificar Acessibilidade) identifica problemas como texto alternativo faltando, uso de estilos de título, contraste, navegação por teclado. Verificação ortográfica (Revisão > Verificação Ortográfica) detecta palavras escritas incorretamente. Exportação para PDF (Arquivo > Exportar > Criar PDF/XPS) preserva layout, com opções para marcas d'água, otimizar tamanho, preservar cametas de acessibilidade (texto alternativo, estruturas de heading) para leitores de tela. Verificar PDF resultante para garantir preservação de elementos essenciais.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Preparar um edital em editor de texto para publicação em PDF que possa ser lido por leitor de tela, identificando o que impede a leitura antes da exportação.",
                    "resposta": "PDF com estrutura de títulos navegável e texto alternativo preservado, permitindo que o leitor de tela anuncie a hierarquia; a verificação no documento de origem não aponta pendências graves."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno recebe a tarefa de revisar um PDF já publicado que foi reprovado em teste com leitor de tela, sem permissão para alterar o conteúdo, apenas o arquivo de origem.",
                    "resposta": "PDF reexportado com navegação por títulos, descrições presentes e tabelas anunciadas com seus cabeçalhos; o teste com leitor de tela percorre o documento na ordem prevista."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um servidor afirma que o PDF sempre preserva a estrutura de títulos do documento e que, portanto, basta salvar como PDF para cumprir o requisito de acessibilidade.",
                    "correcao": "A afirmação é incorreta: o PDF preserva a estrutura somente quando a geração inclui etiquetagem, e a impressão virtual produz páginas sem marcação semântica, ainda que a aparência seja idêntica."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual verificação identifica texto alternativo faltando? A) Ortografia; B) Acessibilidade; C) Contagem de palavras.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Exportação para PDF preserva layout.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de garantir acessibilidade e exportará documentos para PDF preservando estruturas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-13",
            "titulo": "Compatibilidade de formatos e problemas de formatação",
            "objetivoAprendizagem": "Aluno compreenderá questões de compatibilidade entre versões do Word e formatos de arquivo.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-13-sub-1",
                "titulo": "Formatos .doc vs .docx e compatibilidade",
                "objetivoAprendizagem": "Aluno compreenderá questões de compatibilidade entre versões do Word.",
                "conteudo": "Formatos: .doc (legado, binário, Office 2003 e anteriores), .docx (Open XML, padrão desde Office 2007), .docm (docx com macros), .dotx (modelo), .dotm (modelo com macros). Compatibilidade: abrir .doc no Word 365 ativa Modo de Compatibilidade, limitando funcionalidades novas. Converter .doc para .docx geralmente preserva conteúdo mas pode reformatar elementos. Para máxima compatibilidade, recomenda-se salvar em .pdf para distribuição. O Modo de Compatibilidade desabilita funcionalidades introduzidas após 2007 para preservar integridade do conteúdo original.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Receber um modelo antigo em .doc e decidir se convém editá-lo no formato original ou convertê-lo para .docx antes de produzir um contrato novo.",
                    "resposta": "Documento no formato atual, sem modo de compatibilidade, com sumário e campos atualizados e coautoria disponível; o .doc original permanece guardado como referência do estado anterior."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa padronizar quarenta documentos legados de um acervo, todos em formato binário, para que passem a abrir sem restrição de compatibilidade e possam ser editados em conjunto.",
                    "resposta": "Acervo convertido com dois arquivos mantidos no formato com macro, sumários atualizados nos vinte arquivos que os possuíam e tabelas complexas revisadas; os originais permanecem disponíveis como referência."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um colega afirma que .doc e .docx são apenas duas extensões do mesmo formato e que trocar a extensão do arquivo basta para atualizá-lo.",
                    "correcao": "A afirmação é incorreta: a extensão apenas rotula o arquivo, e renomeá-la não altera a estrutura interna. A conversão pelo editor é o procedimento que transforma o formato e preserva os elementos revisados."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual formato suporta macros? A) .docx; B) .docm; C) .doc.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Para distribuição, recomenda-se PDF.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender questões de compatibilidade entre versões do Word, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-2-topico-14",
            "titulo": "Exemplos resolvidos de criação e correção de documentos complexos",
            "objetivoAprendizagem": "Aluno executará exemplos práticos de criação e correção de documentos Word complexos.",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-2-topico-14-sub-1",
                "titulo": "Criação de relatório técnico integrado",
                "objetivoAprendizagem": "Aluno criará um relatório técnico integrando sumário, tabelas, figuras, cabeçalhos diferenciados e exportação para PDF com acessibilidade.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a sequência de construção de um relatório técnico completo no Word: estilos de título, sumário, tabelas com fórmulas, figuras com legendas, seções com cabeçalhos/rodapés distintos, revisão com controle de alterações e exportação para PDF com acessibilidade; (b) como os tópicos da unidade se encaixam num único produto; (c) os pontos de verificação de cada etapa; (d) o papel da validação final em leitor de tela. POR QUE O CONHECIMENTO É IMPORTANTE: questões de integração pedem a ordem correta das etapas e identificam erros de sequência (sumário antes dos estilos, PDF sem tags); montar a ordem errada muda o gabarito. PRÉ-REQUISITOS: estilos, tabelas, cabeçalhos/rodapés, quebras de seção, sumário, revisão e acessibilidade (todos os tópicos anteriores da unidade 1.2). OBJETIVOS OBSERVÁVEIS: (1) ordenar as etapas de produção; (2) executar cada etapa com seu ponto de verificação; (3) diagnosticar relatório com defeito de integração (sumário vazio, numeração inconsistente, PDF sem estrutura). COMPETÊNCIAS DESENVOLVIDAS: gestão de documento complexo; garantia de qualidade e acessibilidade. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: todos os tópicos da unidade 1.2; unidade 1.5 (armazenamento e compartilhamento do produto final); Módulo 6 (transparência e acessibilidade no serviço público). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média a alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: relatório técnico é o produto que integra recursos da unidade 1.2 numa ordem logicamente dependente. Etapa 1 — estilos de título: aplicar Título 1/Título 2 aos capítulos e seções (a base de tudo: sumário, navegação e acessibilidade derivam dos estilos). Etapa 2 — sumário: Referências > Sumário (campo gerado dos estilos; atualizável). Etapa 3 — tabelas: criar tabelas com formatação e fórmulas integradas onde bastam (=SUM(ABOVE)), migrando cálculos complexos ao Excel. Etapa 4 — figuras: inserir imagens/gráficos com legendas automáticas (Referências > Inserir Legenda), que alimentam referências cruzadas. Etapa 5 — seções: quebras de seção para separar preliminares (numeração romana) do corpo (arábica), desvinculando cabeçalhos/rodapés entre seções. Etapa 6 — revisão: ativar controle de alterações durante a revisão, resolver comentários, aceitar/rejeitar e, se preciso, comparar versões. Etapa 7 — exportação: Arquivo > Exportar > Criar PDF/XPS, com opções que preservam estrutura (tags de acessibilidade) quando disponíveis na versão. Etapa 8 — validação: abrir o PDF em leitor de tela/verificador para confirmar texto alternativo, estrutura de títulos e ordem de leitura. Invariantes: o sumário e as referências cruzadas são campos — exigem atualização após qualquer alteração de títulos ou posições; a acessibilidade começa nos estilos, não na exportação; a numeração por seção exige vínculo/desvínculo corretos. Ordem reversa (PDF antes de revisão, sumário antes de estilos) gera retrabalho ou produto defeituoso.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reproduzir o fluxo simples: estilos > sumário > tabela > legenda > PDF.\n- Nível intermediário: configurar duas seções com numerações distintas (romana/arábica) e cabeçalhos diferentes; atualizar todos os campos antes da exportação.\n- Nível avançado: conduzir ciclo de revisão com controle de alterações e comparação de versões, mantendo campos íntegros.\n- Nível especialista: auditar relatório pronto (sumário vazio, figuras sem texto alternativo, numeração reiniciada indevidamente) e prescrever a correção na ordem certa.\n\nCOMPARAÇÕES CRÍTICAS:\n- Estilos antes do sumário x sumário antes dos estilos: o sumário se alimenta dos estilos de título — aplicar o sumário primeiro produz lista vazia; a ordem correta é estilos, depois sumário.\n- PDF com tags x PDF sem tags: exportar com as opções de estrutura preserva títulos e alternativos para leitores de tela; sem elas, o PDF perde a semântica — em questão de acessibilidade, a alternativa sem tags está errada.\n- Quebra de página x quebra de seção na montagem: trocar página não permite numeração/cabeçalho distintos; a separação preliminares/corpo exige seção — o erro de sequência quebra a numeração romana/arábica.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"basta formatar títulos com negrito e tamanho para o sumário reconhecê-los\" — Motivo: confunde formatação direta com estilos — Versão tecnicamente correta: o sumário se gera dos estilos de título (Título 1, Título 2); formatação direta não alimenta campos.\n- Afirmação errada: \"exportar para PDF já garante acessibilidade\" — Motivo: generalização — Versão tecnicamente correta: a acessibilidade depende de estilos e textos alternativos no documento e de exportar com as opções que preservam a estrutura (quando disponíveis na versão); a validação final é abrir o PDF em leitor de tela/verificador.\n- Afirmação errada: \"os campos do sumário se atualizam sozinhos ao editar títulos\" — Motivo: termo absoluto — Versão tecnicamente correta: os campos exigem atualização (Atualizar campo, incluindo toda a estrutura) após alterações de títulos ou posições antes da versão final.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: estilos de título, sumário (campo), legenda automática, quebra de seção, cabeçalho por seção, controle de alterações, PDF com estrutura, validação em leitor de tela.\n- Regras e fórmulas: ordem: estilos → sumário → tabelas/figuras → seções → revisão → PDF → validação; campo alterado → atualizar campo; mudança de página/rodapé por parte → quebra de seção.\n- Exceções: cálculos complexos saem da tabela do Word para o Excel; a validação de acessibilidade é etapa final obrigatória, não opcional.\n- Palavras-chave: sumário automático, legenda, seção, controle de alterações, PDF acessível, atualizar campo, leitor de tela.\n- Checklist de domínio: ordeno as etapas; executo cada verificação; diagnostico sumário vazio; garanto numeração por seção; valido o PDF final.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual a primeira etapa estrutural de um relatório que terá sumário automático e por quê? (2) Como ter numeração romana nas preliminares e arábica no corpo? (3) Depois de renomear capítulos, o que falta antes de distribuir o relatório? (4) Quais cuidados a exportação para PDF exige para preservar acessibilidade? (5) Diagnostique: sumário exibindo apenas \"Nenhum item de sumário encontrado\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Criar relatório com sumário e tabelas simples.",
                    "resposta": "Aplicar estilos Título 1/Título 2 aos capítulos > Referências > Sumário > Sumário Automático > inserir tabela (Inserir > Tabela) com fórmula integrada quando =SUM(ABOVE) bastar > inserir figuras com legendas automáticas > Arquivo > Exportar > Criar PDF/XPS."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Relatório com preliminares (folha de rosto e resumo) numeradas em romanos e corpo numerado em arábicos, com cabeçalhos diferentes.",
                    "resposta": "Inserir quebra de seção (Próxima Página) após as preliminares > nas preliminares, rodapé com Número de Página em formato i, ii, iii > no início do corpo, desvincular do anterior (Vincular ao Anterior desmarcado) e definir formato 1, 2, 3, reiniciando em 1 > editar o cabeçalho de cada seção. A quebra de seção é o que permite formatos por parte; a desvinculação evita que a seção corpo herde o rodapé das preliminares."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Relatório pronto passou por revisão com controle de alterações; antes de distribuir, quais fechamentos executar?",
                    "resposta": "Passo 1: aceitar/rejeitar alterações e resolver comentários (Revisão). Passo 2: atualizar todos os campos — selecionar tudo (Ctrl+A) > F9 ou clicar no sumário > Atualizar campo > atualizar todo o sumário; conferir referências cruzadas e legendas. Passo 3: exportar PDF com as opções de estrutura (tags de acessibilidade) da versão. Passo 4: validar em leitor de tela/verificador (texto alternativo, títulos, ordem de leitura) antes da distribuição."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um relatório exportado em PDF exibe sumário vazio após a atualização do campo.",
                    "correcao": "Diagnóstico em duas frentes: (1) os capítulos não têm estilo Título 1 aplicado (apenas formatação direta) — aplicar os estilos; (2) o \"sumário\" pode ser texto estático digitado, não campo — excluir e reinserir via Referências > Sumário. Após corrigir, atualizar o campo e reexportar o PDF."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual sequência é correta para um relatório acessível? A) Escrever texto > exportar PDF; B) Aplicar estilos > sumário > tabelas/figuras com legendas > revisar > exportar PDF com estrutura > validar; C) Formatação direta nos títulos > PDF.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A formatação direta (negrito + tamanho maior) é suficiente para o sumário automático reconhecer os capítulos.",
                    "resposta": "Errado. O sumário se alimenta dos estilos de título (Título 1, Título 2); formatação direta não gera estrutura de campo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Na montagem do relatório, para ter cabeçalhos e numeração distintos entre preliminares e corpo, usa-se: A) Quebra de página simples; B) Quebra de seção com desvinculação de cabeçalho/rodapé; C) Dois arquivos separados, obrigatoriamente.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de ordenar e executar as etapas de construção de um relatório técnico integrado (estilos, sumário, tabelas, legendas, seções, revisão, PDF acessível) e de diagnosticar defeitos de integração, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-1-unidade-3",
        "titulo": "1.3 Microsoft Excel",
        "topicos": [
          {
            "id": "modulo-1-unidade-3-topico-1",
            "titulo": "Pasta de trabalho, planilhas, células, intervalos e tabelas",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-1-sub-1",
                "titulo": "Células, intervalos e referências de intervalo",
                "objetivoAprendizagem": "Aluno compreenderá a estrutura de pasta de trabalho, planilhas, células e intervalos no Excel.",
                "conteudo": "Pasta de trabalho (workbook) é o arquivo .xlsx que contém uma ou mais planilhas (worksheets). Cada planilha é uma grade de células identificadas por coluna (letra) e linha (número), ex.: A1, B10. Intervalo é um conjunto contínuo de células (A1:B5, A1:A10). Referência de intervalo pode ser usada em fórmulas (SOMA(A1:A10)). O simulador Excel documentado neste projeto (assets/js/simulators.js) suporta referências A1, absolutas ($A$1), mistas ($A1, A$1) e intervalos A1:B5, com recálculo automático; tabelas estruturadas (Tabela1[Coluna]) e nomes definidos não são suportados (limitação declarada).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar a célula na coluna C, linha 5.",
                    "resposta": "C5 (coluna C, linha 5). Intervalo C5:C5 é a própria célula; intervalo C1:C5 inclui C5."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Somar os valores de A1 a A5.",
                    "resposta": "=SOMA(A1:A5) — referência de intervalo contínuo; equivalente a =SOMA(A1;A2;A3;A4;A5) em sintaxe pt-BR."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário escreve =SOMA(A1;B5) esperando somar A1 até B5.",
                    "correcao": "Incorreto: ';' separa argumentos, não define intervalo. Para intervalo contínuo use ':' (=SOMA(A1:B5)). =SOMA(A1;B5) soma apenas A1 e B5."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual referência define um intervalo contínuo de A1 a D10? A) A1;D10; B) A1:D10; C) A1..D10.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Uma pasta de trabalho pode conter várias planilhas.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender a estrutura de pasta de trabalho, planilhas, células e intervalos no Excel, evidenciado por resposta correta a item de verificação associado ao subtópico.",
                "videos": [
                  {
                    "id": "ZVURQLXZtIc",
                    "titulo": "Curso Excel #01 - Como surgiu o Excel?",
                    "canal": "Curso em Vídeo",
                    "urlOriginal": "https://www.youtube.com/watch?v=ZVURQLXZtIc",
                    "embedUrl": "https://www.youtube-nocookie.com/embed/ZVURQLXZtIc",
                    "descricao": "Vídeo introdutório sobre a história e origem do Microsoft Excel, explicando como surgiu a primeira planilha eletrônica (VisiCalc), a evolução para o Lotus 1-2-3 e o desenvolvimento do Excel pela Microsoft. Aborda os conceitos fundamentais de células, linhas, colunas e a revolução que as planilhas trouxeram para o processamento de dados em escritórios.",
                    "dataValidacao": "2026-10-24"
                  }
                ]
              },
              {
                "id": "modulo-1-unidade-3-topico-1-sub-2",
                "titulo": "Tabelas estruturadas e referências estruturadas",
                "objetivoAprendizagem": "Aluno compreenderá tabelas estruturadas (ListObjects) e suas referências estruturadas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é uma tabela estruturada no Excel (conversão de intervalo em tabela com cabeçalho e filtros); (b) o que são referências estruturadas e como diferem das referências A1; (c) o benefício central: fórmulas que acompanham a expansão da tabela; (d) o escopo do simulador Excel deste projeto, que não executa referências estruturadas. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra a sintaxe Tabela[Coluna] e o comportamento de expansão automática; confundir referência estruturada com referência de intervalo, ou prometer suporte inexistente no simulador, muda o gabarito. PRÉ-REQUISITOS: subtópico 1 (células, intervalos e referências). OBJETIVOS OBSERVÁVEIS: (1) converter um intervalo em tabela estruturada; (2) escrever e ler uma referência estruturada; (3) explicar o ganho de manutenção; (4) declarar corretamente a limitação do simulador. COMPETÊNCIAS DESENVOLVIDAS: modelagem de dados tabulares; comunicação honesta de limitações de ferramenta. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópico 1 (intervalos A1); unidade 1.3 tópico 5 (tabelas dinâmicas); unidade 1.3 tópico 6 (simulador e escopo). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: tabela estruturada é um intervalo de dados convertido em objeto de tabela (Inserir > Tabela ou Ctrl+T, marcando que a tabela tem cabeçalhos). A conversão traz: cabeçalhos de coluna fixados, filtros automáticos, formatação consistente e expansão automática — ao digitar na linha imediatamente abaixo, a tabela incorpora a linha, e fórmulas que a referenciam acompanham o crescimento. Referência estruturada é a sintaxe que nomeia a tabela e a coluna em vez de endereços: Tabela1[Quantidade] refere a coluna Quantidade inteira; Tabela1[#Cabeçalhos] e Tabela1[#Totais] são exemplos de partes especiais da tabela. Motivação: fórmulas legíveis e autoreparáveis — =SOMA(Vendas[Quantidade]) continua correta quando a tabela ganha linhas, enquanto =SOMA(A2:A100) exigiria ajuste manual. Propriedade essencial: a referência estruturada aponta ao dado lógico (coluna), não à posição física; mover a tabela não quebra a fórmula. Limitações e condições de validade: o simulador Excel documentado neste projeto suporta referências A1 (relativas, absolutas, mistas) e intervalos, e não suporta tabelas estruturadas nem nomes definidos (limitação declarada em assets/js/simulators.js) — o conteúdo aqui é didático para provas teóricas, e o simulador rejeita essas sintaxes com mensagem de erro.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: converter um intervalo com cabeçalho em tabela (Ctrl+T) e observar os filtros.\n- Nível intermediário: escrever =SOMA(Vendas[Quantidade]) e comparar com =SOMA(A2:A100); adicionar uma linha e verificar qual fórmula acompanhou.\n- Nível avançado: usar partes especiais da tabela e explicar por que a referência estruturada sobrevive a movimentações da tabela.\n- Nível especialista: diagnosticar fórmula que \"perde linhas novas\" (intervalo fixo versus referência estruturada) e decidir quando adotar tabela estruturada como padrão de projeto de planilha.\n\nCOMPARAÇÕES CRÍTICAS:\n- Referência A1 x referência estruturada: A1 aponta posição física (A2:A100) e não acompanha inserções fora do intervalo; a estruturada aponta coluna lógica (Vendas[Quantidade]) e expande junto — em questão sobre fórmula que continua correta após inserção de linhas, o gabarito é a estruturada.\n- Intervalo comum x tabela estruturada: intervalo comum não tem filtros automáticos nem expansão; a tabela traz ambos por construção — trocar os conceitos inverte a resposta sobre comportamento ao adicionar dados.\n- Conceito real x simulador: no Excel real a sintaxe estruturada funciona; no simulador deste projeto ela não é suportada (limitação declarada) — prometer que o simulador executa Tabela1[Coluna] é erro factual.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"as tabelas estruturadas expandem automaticamente em qualquer digitação ao redor\" — Motivo: generalização — Versão tecnicamente correta: a expansão automática ocorre ao digitar na linha/coluna imediatamente adjacente ao corpo da tabela; edições distantes não alteram a tabela.\n- Afirmação errada: \"referência estruturada é o mesmo que intervalo nomeado\" — Motivo: troca de conceitos semelhantes — Versão tecnicamente correta: nome definido aponta um intervalo fixo escolhido pelo usuário; a referência estruturada pertence à tabela e acompanha suas colunas e expansão.\n- Afirmação errada: \"o simulador Excel do projeto calcula =SOMA(Vendas[Quantidade])\" — Motivo: promessa fora do escopo documentado — Versão tecnicamente correta: o simulador suporta referências A1 e intervalos; tabelas estruturadas estão fora do escopo documentado e geram erro de entrada.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: tabela estruturada, cabeçalhos, filtros automáticos, expansão automática, referência estruturada, coluna lógica.\n- Regras e fórmulas: Inserir > Tabela (Ctrl+T); sintaxe Tabela[Coluna]; fórmulas sobre colunas acompanham a expansão.\n- Exceções: expansão ocorre na adjacência imediata; simulador do projeto não suporta tabelas estruturadas nem nomes definidos.\n- Palavras-chave: tabela estruturada, ListObject, referência estruturada, Tabela[Coluna], Ctrl+T, expansão automática.\n- Checklist de domínio: converto intervalo em tabela; escrevo referência estruturada; explico o ganho de manutenção; declaro a limitação do simulador corretamente.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como converter A1:D100 em tabela estruturada e o que muda na planilha? (2) Escreva a fórmula que soma a coluna Quantidade da tabela Vendas. (3) Por que a referência estruturada continua correta após inserir 10 linhas na tabela? (4) Qual a diferença entre nome definido e referência estruturada? (5) O simulador deste projeto executa referências estruturadas? Justifique com o escopo documentado.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Converter o intervalo A1:D100 (com cabeçalhos na linha 1) em tabela estruturada.",
                    "resposta": "Selecionar A1:D100 > Inserir > Tabela (ou Ctrl+T) > confirmar que a tabela tem cabeçalhos > OK. A partir daí a região ganha filtros automáticos, formatação de tabela e passa a aceitar referências estruturadas pelo nome da tabela e das colunas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Planilha de vendas: a tabela chama-se Vendas e recebe 15 novas linhas por mês; o total precisa continuar correto sem manutenção.",
                    "resposta": "Fórmula: =SOMA(Vendas[Quantidade]). Por ser referência estruturada, ela abrange a coluna lógica inteira: quando as 15 linhas forem adicionadas (dentro/adjacentes à tabela), o total atualiza sem editar a fórmula. Com =SOMA(A2:A100), as linhas 101 em diante ficariam fora do intervalo — o total subestimaria as vendas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Auditoria constatou fórmulas de total que \"esquecem\" as linhas novas adicionadas todo mês. Diagnóstico e correção.",
                    "resposta": "Diagnóstico: os totais usam intervalos fixos em A1 (=SOMA(A2:A100)), que não acompanham inserções além da linha 100. Correção: converter o intervalo em tabela estruturada (Ctrl+T) e substituir por =SOMA(Vendas[Quantidade]); a referência à coluna lógica expande junto com a tabela, eliminando a manutenção mensal e o risco de total subestimado."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que referências estruturadas funcionam no simulador Excel deste projeto.",
                    "correcao": "Incorreto: o simulador suporta apenas referências A1 (relativas, absolutas e mistas) e intervalos; tabelas estruturadas e nomes definidos estão fora do escopo documentado (limitação declarada em assets/js/simulators.js) e produzem erro de entrada."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Tabelas estruturadas expandem automaticamente ao adicionar linhas na região imediatamente adjacente à tabela.",
                    "resposta": "Certo. A expansão automática cobre digitações na linha/coluna imediatamente abaixo/ao lado do corpo da tabela; edições distantes não incorporam a tabela."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual sintaxe é de referência estruturada? A) A1:B10; B) Vendas[Quantidade]; C) $A$1.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Após converter o intervalo em tabela \"Vendas\", a fórmula que permanece correta mesmo com 20 linhas novas é: A) =SOMA(A2:A120); B) =SOMA(Vendas[Quantidade]); C) =SOMA($A$2:$A$100).",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de converter um intervalo em tabela estruturada, escrever referências estruturadas no formato Tabela[Coluna] e explicar o ganho de manutenção frente a intervalos fixos, declarando corretamente a limitação do simulador, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-2",
            "titulo": "Referências relativas, absolutas e mistas; operadores",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-2-sub-1",
                "titulo": "Referências relativas, absolutas e mistas",
                "objetivoAprendizagem": "Aluno diferenciará referências relativas, absolutas e mistas no Excel.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as três classes de referência de célula no Excel — relativa, absoluta e mista; (b) a notação com cifrão ($ travando coluna, linha ou ambos); (c) o comportamento de cada classe quando a fórmula é copiada de uma origem para um destino; (d) o método de previsão em três passos (delta, aplicação nos eixos, resultado); (e) o suporte do simulador Excel deste projeto ao ajuste real de fórmulas. POR QUE O CONHECIMENTO É IMPORTANTE: a questão clássica mostra =A1+B1 em B2 e pede o resultado após copiar para C3; errar o eixo travado pelo $ inverte o gabarito; também é a base para tabelas de cálculo com fator fixo (alíquota, taxa). PRÉ-REQUISITOS: subtópico 1 da unidade 1.3 (células, intervalos e referências). OBJETIVOS OBSERVÁVEIS: (1) classificar uma referência pela notação; (2) prever a fórmula resultante após cópia entre origem e destino dados; (3) escolher a classe adequada para cada cenário de tabela. COMPETÊNCIAS DESENVOLVIDAS: raciocínio com coordenadas; análise de dependência entre células. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: subtópico 2 (operadores e precedência); unidade 1.3 (funções de pesquisa); Módulo 8 (leitura de resultados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: referência é a forma de apontar uma célula ou intervalo dentro de uma fórmula. Referência relativa (A1): ao copiar a fórmula, a referência desloca-se na mesma medida em que a fórmula se move — se a fórmula andar uma coluna e uma linha, a referência anda uma coluna e uma linha. Referência absoluta ($A$1): o cifrão trava a coluna e a linha; a referência permanece idêntica em qualquer destino. Referência mista ($A1 ou A$1): trava apenas um eixo — $A1 mantém a coluna A fixa e deixa a linha relativa; A$1 mantém a linha 1 fixa e deixa a coluna relativa. Motivação: reuso de fórmula num intervalo com um fator fixo (taxa de desconto em uma única célula usada por todas as linhas). Método de previsão ao copiar: (1) calcular o delta de colunas e de linhas entre origem e destino; (2) aplicar o delta apenas aos eixos relativos, mantendo os eixos travados pelo $; (3) escrever a fórmula resultante. Propriedades: o $ não altera o valor calculado na célula de origem — $A$1 e A1 valem o mesmo na origem; a diferença aparece somente ao copiar. O simulador Excel deste projeto aplica essas regras reais ao copiar fórmulas (ExcelSimulator.ajustarFormulaAoCopiar): o $ é preservado e eixos mistos ajustam apenas o eixo relativo. Limitação declarada: o simulador não suporta nomes definidos nem referências estruturadas.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que relativa \"acompanha\" a cópia e absoluta \"fica parada\", com a analogia do endereço completo (com CEP) versus \"a casa ao lado\".\n- Nível intermediário: prever resultado de cópia com mistas: aplicar delta só no eixo livre, com dois exercícios de coordenadas.\n- Nível avançado: montar tabela com fator fixo ($D$1) copiada para dezenas de linhas e diagnosticar por que usar A1 solto corrompe o cálculo.\n- Nível especialista: resolver questão que combina cópia com funções (ex.: =PROCV(A2; $F$1:$G$10; 2; FALSO) copiada para baixo) e justificar por que o intervalo de busca deve ser absoluto.\n\nCOMPARAÇÕES CRÍTICAS:\n- Relativa x absoluta: a relativa desloca com a cópia; a absoluta permanece — em questão com taxa fixa, esquecer o $ muda o resultado e o gabarito.\n- Mista $A1 x A$1: $A1 trava a coluna; A$1 trava a linha — inverter os eixos travados é o erro de pegadinha mais cobrado.\n- Absoluta x intervalo nomeado: um nome definido também \"fixa\" um intervalo na prática, mas o simulador deste projeto não suporta nomes (limitação declarada) — para exercícios no simulador, use $.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"A$1 trava a coluna A\" — Motivo: troca dos eixos da notação — Versão tecnicamente correta: A$1 trava a linha 1 e deixa a coluna relativa; $A1 é que trava a coluna.\n- Afirmação errada: \"trocar A1 por $A$1 muda o resultado da fórmula na própria célula\" — Motivo: confunde comportamento na origem com comportamento ao copiar — Versão tecnicamente correta: na origem o valor é idêntico; o $ só altera o ajuste quando a fórmula é copiada.\n- Afirmação errada: \"copiar para cima não altera referências relativas\" — Motivo: supõe que só cópia para baixo/direita desloca — Versão tecnicamente correta: o delta pode ser negativo; copiar =A3 de B3 para B1 produz =A1 (duas linhas para cima).\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: referência relativa, absoluta e mista; eixo travado pelo $; delta de cópia; fator fixo de tabela.\n- Regras e fórmulas: destino = origem + delta nos eixos relativos; $ antes da letra trava coluna; $ antes do número trava linha; $A$1 trava ambos.\n- Exceções: o $ não muda o valor na célula de origem; cópia para cima/esquerda usa delta negativo; nomes definidos não funcionam no simulador.\n- Palavras-chave: relativa, absoluta, mista, cifrão, delta, cópia de fórmula, fator fixo.\n- Checklist de domínio: classifico pela notação; prevo o resultado de uma cópia dada origem e destino; escolho a classe certa para fator fixo; sei o que o simulador suporta.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Copiar =A1+B1 de B2 para C3: qual a fórmula resultante? (2) Qual notação trava apenas a linha? (3) Numa tabela com a taxa em D1 usada por todas as linhas, como referenciar D1 e por quê? (4) Copiar =A$1+B1 de B2 para C2: resultado? (5) Corrija: \"$A1 trava coluna e linha ao mesmo tempo\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Copiar a fórmula =A1+B1 da célula B2 para a célula C3.",
                    "resposta": "=B2+C2 — a cópia desloca uma coluna e uma linha; ambas as referências são relativas e deslocam na mesma medida (delta +1 coluna, +1 linha)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Tabela de 20 produtos: a taxa de desconto está em D1 e a fórmula de preço final =B2*(1-C2*D1) será copiada para baixo nas linhas 3 a 21. Como referenciar D1?",
                    "resposta": "Como $D$1 (absoluta). Ao copiar para baixo, B2 vira B3, B4... e C2 vira C3, C4... (relativas corretas), enquanto $D$1 permanece apontando a taxa única. Sem o $, D1 viria D2, D3... e cada linha usaria uma célula errada como taxa — o cálculo corrompe a partir da segunda linha."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Prever o resultado de copiar =A$1+B1 de B2 para C2.",
                    "resposta": "Delta: +1 coluna, 0 linhas. A$1: coluna relativa (A → B) e linha travada ($1) → B$1. B1: totalmente relativa → C1. Resultado: =B$1+C1."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário copia =A$1+B1 esperando que A$1 não ajuste linha e que B1 não ajuste coluna.",
                    "correcao": "Incorreto: A$1 trava apenas a linha 1 (a coluna A é relativa) e B1 é totalmente relativa. Copiando de B2 para C2 (delta +1 coluna, 0 linhas) o resultado é =B$1+C1; a coluna de A$1 desloca e B1 desloca coluna (a linha de B1 não muda porque o delta de linhas é zero)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual referência trava apenas a coluna A? A) $A1; B) A$1; C) $A$1.",
                    "resposta": "A"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A referência mista $A1 trava coluna e linha.",
                    "resposta": "Errado. $A1 trava apenas a coluna; a linha 1 é relativa e desloca quando a fórmula é copiada verticalmente."
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Ao copiar a fórmula =A3 de B3 para B1, a referência ajusta para A1.",
                    "resposta": "Certo. O delta é de −2 linhas; eixos relativos deslocam na mesma medida: A3 → A1 (a coluna não muda porque o delta de colunas é zero)."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de classificar referências relativas, absolutas e mistas pela notação e de prever a fórmula resultante após uma cópia entre origem e destino informados, aplicando o delta apenas aos eixos relativos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-3-topico-2-sub-2",
                "titulo": "Operadores aritméticos, relacionais, lógicos e de texto; precedência",
                "objetivoAprendizagem": "Aluno identificará operadores do Excel e sua precedência.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os operadores do Excel por classe: aritméticos (+, -, *, /, ^, %), relacionais (=, <>, <, >, <=, >=), lógicos (funções E, OU, NÃO — não símbolos) e de texto (&); (b) a precedência completa e o papel dos parênteses; (c) os comportamentos não intuitivos: potência associativa à direita, percentual como operador, comparações encadeadas; (d) as diferenças declaradas entre o simulador deste projeto e o Excel real. POR QUE O CONHECIMENTO É IMPORTANTE: a questão típica pede o resultado de expressões como -2^2 ou 2^3^2; errar a precedência ou a associatividade muda o gabarito; e confundir operador lógico (função E) com símbolo é erro clássico. PRÉ-REQUISITOS: subtópico 1 (referências). OBJETIVOS OBSERVÁVEIS: (1) classificar operadores por classe; (2) ordenar a avaliação por precedência; (3) calcular expressões com potência, percentual e concatenação; (4) declarar as diferenças do simulador. COMPETÊNCIAS DESENVOLVIDAS: cálculo manual de expressões; previsão de resultados. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: funções lógicas (tópico 3); tratamento de erros (tópico 4); Módulo 8 (leitura de resultados). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: operador é o símbolo que define a operação entre operandos numa fórmula. Aritméticos: soma (+), subtração (-), multiplicação (*), divisão (/), potência (^) e percentual (%) — o % opera sobre o número à sua esquerda, dividindo-o por 100 (5+10% é 5 + 0,1 = 5,1, não 5,5). Relacionais: igual (=), diferente (<>), menor/maior e variantes com igualdade (<=, >=) — retornam VERDADEIRO ou FALSO. Lógicos: no Excel em português, E, OU e NÃO são funções (E(cond1;cond2)), não símbolos — a prova usa essa característica como pegadinha. Texto: & concatena cadeias (=A1&\" \"&B1 une nome e sobrenome com espaço). Precedência (da maior para a menor): percentual (%), potência (^), multiplicação e divisão (* e /), soma e subtração (+ e -), concatenação (&) e, por fim, comparações (=, <>, <, >, <=, >=). Parênteses elevam qualquer operação à frente da ordem natural. Propriedades não intuitivas: a potência é associativa à direita — 2^3^2 é avaliado como 2^(3^2) = 2^9 = 512, não (2^3)^2 = 64; o unário menos na frente da potência obedece à implementação do Excel: -2^2 é avaliado como (-2)^2 = 4; comparações encadeadas são avaliadas da esquerda para a direita no simulador deste projeto (1=1=1 → VERDADEIRO=1 → VERDADEIRO), enquanto o Excel real rejeita a sintaxe — diferença declarada. O simulador segue a precedência do Excel e rejeita entradas inválidas com mensagem de erro útil.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir classes de operadores e aplicar a ordem simples (* e / antes de + e -).\n- Nível intermediário: calcular com percentual (5+10%) e com parênteses alterando a ordem; concatenar com &.\n- Nível avançado: resolver -2^2 e 2^3^2 explicando associatividade e o unário; prever resultado de comparação retornada em célula (VERDADEIRO/FALSO).\n- Nível especialista: auditar fórmula sem parênteses e reescrever com parênteses explícitos sem alterar o resultado; explicar a diferença documentada do simulador nas comparações encadeadas.\n\nCOMPARAÇÕES CRÍTICAS:\n- Operador lógico x função lógica: não existem símbolos E/OU/NÃO como operadores no Excel; são funções (E(a;b)) — a alternativa que usa \"&&\" como E no Excel está errada.\n- % como operador x formato percentual: % numa fórmula divide o valor por 100 na expressão; o formato percentual só muda a exibição — confundir os dois inverte a resposta.\n- Potência associativa à direita x à esquerda: 2^3^2 = 512 (direita), não 64 (esquerda) — a alternativa que aplica associatividade à esquerda é o distrator padrão.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"o operador & é aritmético\" — Motivo: troca entre classes — Versão tecnicamente correta: & é operador de texto (concatenação); os aritméticos são +, -, *, /, ^ e %.\n- Afirmação errada: \"2^3^2 resulta 64\" — Motivo: aplica associatividade à esquerda — Versão tecnicamente correta: a potência é associativa à direita: 2^(3^2) = 2^9 = 512.\n- Afirmação errada: \"5+10% resulta 5,5\" — Motivo: lê o % como \"10 por cento de 5\" — Versão tecnicamente correta: o operador % divide o próprio operando por 100: 5 + (10/100) = 5,1.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: classes de operadores, precedência, parênteses, associatividade da potência, percentual operador, concatenação.\n- Regras e fórmulas: ordem %, ^, */, +-, &, comparações; potência avalia da direita; -2^2 = 4 no Excel.\n- Exceções: E/OU/NÃO são funções; comparações encadeadas diferem entre simulador (esquerda-para-direita) e Excel real (sintaxe rejeitada).\n- Palavras-chave: operador, precedência, associatividade, potência, percentual, concatenação, relacional.\n- Checklist de domínio: classifico operadores; ordeno a avaliação; calculo -2^2, 2^3^2 e 5+10%; concateno com &; declaro a diferença do simulador.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Liste as classes de operadores do Excel e um exemplo de cada. (2) Qual o resultado de -2^2 no Excel e por quê? (3) Qual o resultado de 2^3^2? (4) Como unir nome e sobrenome de A1 e B1 com espaço entre eles? (5) Onde as funções E, OU e NÃO se classificam — operadores ou funções?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular =5+10%.",
                    "resposta": "5,1. O operador % divide o operando à sua esquerda por 100 antes da soma: 5 + (10/100) = 5 + 0,1 = 5,1 — não 5,5."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Montar o nome completo em C1 a partir de nome (A1) e sobrenome (B1), com espaço entre eles.",
                    "resposta": "=A1&\" \"&B1 — o operador & concatena textos; a cadeia de espaço entre aspas duplas garante a separação. Ex.: A1=\"Maria\", B1=\"Silva\" → \"Maria Silva\". Para converter número concatenado em texto com formato, no Excel real usa-se a função TEXTO (fora do escopo do simulador)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Prever o resultado de =-2^2 e de =2^3^2 no Excel e no simulador deste projeto.",
                    "resposta": "=-2^2: o unário aplica antes da potência nessa implementação: (-2)^2 = 4. =2^3^2: potência é associativa à direita: 2^(3^2) = 2^9 = 512 — e não (2^3)^2 = 64. O simulador deste projeto reproduz esses comportamentos (precedência do Excel), e trata comparações encadeadas da esquerda para a direita, diferença declarada em relação ao Excel real, que rejeita a sintaxe."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário espera que 2^3^2 resulte 64 (associatividade à esquerda).",
                    "correcao": "Incorreto: a potência é associativa à direita no Excel e no simulador: 2^(3^2) = 2^9 = 512. Para obter 64, seriam necessários parênteses explícitos: (2^3)^2."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual operador tem maior precedência? A) + ; B) * ; C) ^.",
                    "resposta": "C"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O operador & é um operador aritmético.",
                    "resposta": "Errado. & é operador de texto (concatenação); os aritméticos são +, -, *, /, ^ e %."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "O resultado de =5+10% é: A) 5,5; B) 5,1; C) 0,5.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de classificar operadores por classe, ordenar a avaliação pela precedência e calcular expressões com potência, percentual e concatenação, incluindo os casos -2^2 e 2^3^2, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-3",
            "titulo": "Tipos de dados, datas e funções essenciais",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-3-sub-1",
                "titulo": "Tipos de dados, datas, horários e formatos numéricos",
                "objetivoAprendizagem": "Aluno compreenderá tipos de dados do Excel e o tratamento de datas/horários.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os tipos de dado do Excel: número, texto, lógico (VERDADEIRO/FALSO), data/hora e erro; (b) o mecanismo serial de datas (data como número) e a aritmética que ele permite; (c) formatos numéricos: o que mudam (exibição) e o que não mudam (valor armazenado); (d) os principais códigos de erro e suas causas; (e) o suporte e as limitações do simulador deste projeto. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra que a data é armazenada como número serial, que formato altera apenas a exibição e a causa de erros como #DIV/0! e #VAL!; trocar valor por formato, ou atribuir causa errada a um erro, muda o gabarito. PRÉ-REQUISITOS: células e intervalos (tópico 1). OBJETIVOS OBSERVÁVEIS: (1) classificar o tipo de dado de uma célula; (2) calcular diferença entre datas explicando o mecanismo serial; (3) distinguir formato de valor; (4) associar cada código de erro à sua causa típica. COMPETÊNCIAS DESENVOLVIDAS: diagnóstico de dados inconsistentes; leitura de mensagens de erro. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: funções (tópico 3, sub-2); tratamento de erros (tópico 4, sub-2); formatação (tópico 5). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: tipos de dado determinam o que o Excel pode fazer com o conteúdo da célula. Número (inteiro ou decimal) participa de aritmética; texto é sequência de caracteres — operação aritmética sobre texto não numérico gera erro; lógico é VERDADEIRO/FALSO, produzido por comparações e funções lógicas; data/hora é internamente um número serial: no sistema Windows, a data 01/01/1900 corresponde ao serial 1, e cada dia avança 1 — horários são frações de dia (0,5 = meio-dia); por isso subtrair duas datas retorna dias, e a aritmética de datas é natural. Erro é o tipo produzido quando o cálculo falha: #DIV/0! (divisão por zero ou por célula vazia), #VAL! (tipo incompatível, ex.: texto em operação numérica), #REF! (referência inválida, ex.: célula excluída), #N/A (valor não encontrado em pesquisa), #NUM! (número inválido para a operação). Formato numérico é a máscara de exibição: moeda, percentual, data, casas decimais — altera como o valor aparece, nunca o valor armazenado; por isso 10,5 com formato de zero decimais exibe 11, mas continua sendo 10,5 nos cálculos. O simulador Excel deste projeto armazena datas como seriais e oferece a função HOJE() (data real do sistema, exibida no formato AAAA/MM/DD); ele não implementa formatação de células (limitação declarada) — o conteúdo sobre formatos é teórico para provas.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir número de texto na planilha (alinhamento e comportamento em soma) e reconhecer o erro #DIV/0!.\n- Nível intermediário: calcular diferença entre duas datas (=B2-A2) explicando o serial; aplicar percentual sabendo que o formato não muda o valor.\n- Nível avançado: diagnosticar soma que ignora valores (números gravados como texto) e converter tipos com as funções adequadas do Excel (fora do escopo do simulador).\n- Nível especialista: explicar por que o formato percentual exibe arredondado mas calcula com o valor completo, e associar cada código de erro à sua causa em uma fórmula composta.\n\nCOMPARAÇÕES CRÍTICAS:\n- Formato x valor: formato muda a exibição; valor armazenado permanece — em questão sobre soma após aplicar formato percentual, o cálculo usa o valor completo, não o exibido.\n- Data x texto de data: data real é serial (permite =B2-A2); data digitada como texto não participa de aritmética — a alternativa que soma \"datas em texto\" está errada.\n- #DIV/0! x #VAL!: divisão por zero/célula vazia versus tipo incompatível — atribuir a causa trocada muda a resposta sobre o diagnóstico do erro.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"alterar o formato de número muda o valor armazenado\" — Motivo: confunde exibição com conteúdo — Versão tecnicamente correta: o formato altera apenas a exibição; o valor completo é usado nos cálculos.\n- Afirmação errada: \"datas são textos especiais no Excel\" — Motivo: descreve a intuição, não o mecanismo — Versão tecnicamente correta: datas são números seriais (01/01/1900 = 1 no sistema Windows); por isso se somam e subtraem como números.\n- Afirmação errada: \"#REF! significa que a fórmula dividiu por zero\" — Motivo: troca entre códigos de erro — Versão tecnicamente correta: #REF! indica referência inválida (ex.: célula excluída); #DIV/0! indica divisão por zero ou por célula vazia.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: tipos (número, texto, lógico, data/hora, erro), serial de data, formato de exibição, códigos de erro.\n- Regras e fórmulas: diferença de datas = subtração de seriais; 0,5 = meio-dia; percentual exibido ≠ valor calculado.\n- Exceções: número gravado como texto não soma; simulador não formata células e não executa conversão de texto (limitação declarada).\n- Palavras-chave: serial, data, hora, formato, #DIV/0!, #VAL!, #REF!, #N/A, #NUM!, tipo de dado.\n- Checklist de domínio: classifico tipos; calculo com datas pelo serial; distingo formato de valor; associo erros às causas; conheço os limites do simulador.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como o Excel armazena internamente uma data e qual número corresponde a 01/01/1900 no sistema Windows? (2) Que resultado dá =B2-A2 quando A2 e B2 são datas e por quê? (3) Uma célula exibe 11% mas a fórmula multiplica por 0,105: explique. (4) Qual erro indica divisão por célula vazia e qual indica texto em operação numérica? (5) O simulador deste projeto aplica formatos de célula? Justifique.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular quantos dias se passaram entre 01/05/2024 (A2) e 10/05/2024 (B2).",
                    "resposta": "=B2-A2 retorna 9 (dias), porque datas são números seriais: subtrair dois seriais retorna a diferença em dias. Se as datas estivessem gravadas como texto, a subtração falharia (#VAL!)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Planilha de vencimentos: obter a data atual automaticamente e calcular os dias até o vencimento em B2.",
                    "resposta": "Data atual: =HOJE() (o simulador deste projeto retorna a data real do sistema, exibida no formato AAAA/MM/DD). Dias restantes: =B2-HOJE(), negativo quando vencido. Como HOJE() recalcula a cada abertura/recálculo, o indicador permanece atualizado — e, por ser função volátil, merece cuidado em planilhas grandes (ver tópico 6)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Auditoria: a soma de uma coluna de valores ficou menor que o esperado; alguns valores foram digitados com apóstrofo inicial (texto). Diagnóstico.",
                    "resposta": "Diagnóstico: números gravados como texto não participam de aritmética — SOMA os ignora (e operações diretas gerariam #VAL!). Correção no Excel real: converter o texto em número (funções de conversão ou reentrada do valor, conforme a versão); no simulador deste projeto, garantir o tipo numérico na entrada, pois conversão de texto não está no escopo documentado."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário soma \"10\" (texto) com 5 e espera 15.",
                    "correcao": "Incorreto: texto não numérico em operação aritmética gera #VAL! (no simulador deste projeto e, conforme o contexto, no Excel real). É preciso garantir o tipo numérico — converter com a função VALOR() no Excel real (não suportada no simulador) ou redigitar o valor como número."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Como o Excel armazena internamente uma data? A) Texto formatado; B) Número serial; C) Objeto de calendário.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Alterar o formato de número muda o valor armazenado na célula.",
                    "resposta": "Errado. O formato altera apenas a exibição; o valor armazenado completo é usado nos cálculos."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "A fórmula =A1/B1 retornou #DIV/0!. Causa mais provável? A) A1 contém texto; B) B1 está vazia (ou zero); C) A referência A1 foi excluída.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de classificar tipos de dado, calcular com datas explicando o mecanismo serial, distinguir formato de valor armazenado e associar códigos de erro às suas causas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-3-topico-3-sub-2",
                "titulo": "Funções matemáticas, estatísticas, lógicas, condicionais, textuais e de data",
                "objetivoAprendizagem": "Aluno utilizará as funções essenciais do Excel: SE, SES, E, OU, NÃO, SEERRO, CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIA, MÉDIASE, MÁXIMO, MÍNIMO, CONT.VALORES, entre outras, incluindo funções textuais (CONCATENAR/CONCATENAR, TEXTOJUNTAR/TEXTJOIN, ESQUERDA/LEFT, DIREITA/RIGHT, EXT.TEXTO/EXT.TEXTO, PESQUISAR, LOCALIZAR, ARRUMAR, NUM.CARACT) e de data/hora (HOJE, AGORA, DATA, ANO, MÊS, DIA, DIAS, DIATRABALHOTOTAL, DATADIF).",
                "conteudo": "Funções matemáticas/estatísticas: SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO, CONT.VALORES. Lógicas/condicionais: SE, SES (nesta implementação SES é alias de E — atenção: no Excel real SES é SE com múltiplas condições; aqui SES=E por decisão documentada do simulador), E, OU, NÃO, SEERRO (avalia preguiçosamente apenas o ramo usado). Condicionais com critério: CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIASE (critérios aceitam operadores >=, <=, <>, >, <, = ou igualdade). O simulador suporta essas funções com busca/cálculo reais; SES é alias de E (limitação declarada). Aliases em inglês: SUM, AVERAGE, MAX, MIN, COUNTA, IF, AND, OR, NOT, IFERROR, COUNTIF, COUNTIFS, SUMIF, SUMIFS, AVERAGEIF. Funções textuais: CONCATENAR (CONCAT) justapõe cadeias/intervalos SEM delimitador; TEXTOJUNTAR (TEXTJOIN) insere delimitador (e pode ignorar vazios); ESQUERDA (LEFT) extrai n caracteres a partir do início; DIREITA (RIGHT) extrai a partir do final; EXT.TEXTO (EXT.TEXTO) extrai substring por posição/comprimento; funções auxiliares de comparação e manipulação de caracteres (PESQUISAR, LOCALIZAR, ARRUMAR, NUM.CARACT). Funções de data/hora: HOJE (TODAY), AGORA (NOW), DATA, ANO, MÊS, DIA, DIAS (DAYS), DIATRABALHOTOTAL e DATADIF operam sobre datas/horas; DATADIF calcula a diferença entre duas datas. O simulador NÃO executa as funções textuais nem as funções de data/hora (com exceção de HOJE, que retorna a data real do sistema) — o escopo do simulador documentado (assets/js/simulators.js) é separado do conteúdo didático exigido para provas; demais funções devem ser estudadas como conteúdo teórico, e o simulador deve documentar as funções suportadas e rejeitar entradas inválidas com mensagens úteis.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Média de A1:A5.",
                    "resposta": "=MÉDIA(A1:A5) — soma dos valores numéricos dividida pela quantidade (ignora texto/vazio em intervalos)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Contar valores maiores que 7 em A1:A10.",
                    "resposta": "=CONT.SE(A1:A10; \">7\") — critério com operador relacional."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário espera que SES(cond1; val1; cond2; val2) funcione como SE encadeado.",
                    "correcao": "Incorreto no simulador: SES é alias de E (retorna VERDADEIRO/FALSO). Para SE encadeado use SE aninhado: =SE(cond1; val1; SE(cond2; val2; val3))."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual função retorna a maior valor de um intervalo? A) MÉDIA; B) MÁXIMO; C) SOMA.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) CONT.VALORES conta células vazias.",
                    "resposta": "Errado. CONT.VALORES conta células não vazias (texto, número, lógico, erro); células vazias são ignoradas. Observação documentada: o simulador trata texto vazio como vazio (diferença pontual em relação ao Excel real, que conta texto vazio)."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de utilizar as funções essenciais do Excel: SE, SES, E, OU, NÃO, SEERRO, CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIA, MÉDIASE, MÁXIMO, MÍNIMO, CONT.VALORES, entre outras, incluindo funções textuais (CONCATENAR/CONCATENAR, TEXTOJUNTAR/TEXTJOIN, ESQUERDA/LEFT, DIREITA/RIGHT, EXT.TEXTO/EXT.TEXTO, PESQUISAR, LOCALIZAR, ARRUMAR, NUM.CARACT) e de data/hora (HOJE, AGORA, DATA, ANO, MÊS, DIA, DIAS, DIATRABALHOTOTAL, DATADIF), evidenciado por resposta correta a item de verificação associado ao subtópico.",
                "videos": [
                  {
                    "id": "boUzkJJNOPI",
                    "titulo": "Curso Excel #10 - Funções do Excel (Parte 1)",
                    "canal": "Curso em Vídeo",
                    "urlOriginal": "https://www.youtube.com/watch?v=boUzkJJNOPI",
                    "embedUrl": "https://www.youtube-nocookie.com/embed/boUzkJJNOPI",
                    "descricao": "Vídeo didático sobre as principais funções do Excel, cobrindo funções matemáticas (SOMA, MÉDIA, MÁXIMO, MÍNIMO), estatísticas, lógicas (SE, E, OU), de contagem (CONT.SE, CONT.VALORES) e funções de texto. Explica a sintaxe, argumentos e exemplos práticos de uso de cada função, essenciais para provas de concursos e uso profissional.",
                    "dataValidacao": "2026-10-24"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-4",
            "titulo": "Pesquisa e referência; erros e fórmulas aninhadas",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-4-sub-1",
                "titulo": "PROCV, PROCH, PROCX, ÍNDICE e CORRESP; correspondência exata vs aproximada",
                "objetivoAprendizagem": "Aluno utilizará funções de pesquisa e referência e distinguirá correspondência exata de aproximada.",
                "conteudo": "PROCV (busca vertical), PROCH (busca horizontal), PROCX (busca moderna, exata por padrão, com argumento se_não_encontrado), ÍNDICE (retorna valor por linha/coluna), CORRESP (retorna posição). Correspondência exata: valor procurado deve ser igual. Aproximada: último valor <= alvo (crescente) ou primeiro >= alvo (decrescente) — exige ordenação; sem ordenação o resultado é imprevisível (limitação declarada). O simulador implementa busca real para essas funções. Erros: #N/A (não encontrado), #REF! (índice fora do intervalo), #VAL! (tipo incompatível).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Buscar preço do produto 'Caneta' em tabela (PROCV exato).",
                    "resposta": "=PROCV(\"Caneta\"; A1:B10; 2; FALSO) retorna o valor da 2ª coluna da linha onde a 1ª coluna = 'Caneta'; FALSO = correspondência exata."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Usar PROCX com valor não encontrado customizado.",
                    "resposta": "=PROCX(20; A1:A3; B1:B3; \"não há\") retorna B correspondente a 20 ou \"não há\" se não existir."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário usa PROCV aproximado (VERDADEIRO) em tabela não ordenada.",
                    "correcao": "Incorreto/impredizível: correspondência aproximada exige 1ª coluna numérica em ordem crescente. Em tabela desordenada o resultado pode ser qualquer valor <= alvo. Use FALSO para exata ou ordene a tabela."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual argumento do PROCV ativa correspondência exata? A) VERDADEIRO; B) FALSO; C) 0.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) ÍNDICE retorna a posição de um valor.",
                    "resposta": "Errado. ÍNDICE retorna o valor; CORRESP retorna a posição."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de utilizar funções de pesquisa e referência e distinguirá correspondência exata de aproximada, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-3-topico-4-sub-2",
                "titulo": "Células vazias, erros e fórmulas aninhadas",
                "objetivoAprendizagem": "Aluno tratará células vazias, erros e fórmulas aninhadas no Excel.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o comportamento de células vazias em critérios, aritmética e concatenação; (b) os códigos de erro do Excel e o papel do SEERRO; (c) fórmulas aninhadas: ordem de avaliação de dentro para fora; (d) a avaliação preguiçosa de SE/SEERRO no simulador deste projeto e suas implicações; (e) o padrão SEERRO(PROCV(...); alternativa) como receita de robustez. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra diagnóstico de erros (#N/A, #DIV/0!, #VAL!) e previsão de resultados de fórmulas aninhadas; atribuir causa errada a um erro ou avaliar na ordem errada muda o gabarito. PRÉ-REQUISITOS: tipos de dados (tópico 3, sub-1); funções (tópico 3, sub-2). OBJETIVOS OBSERVÁVEIS: (1) prever o efeito de célula vazia por contexto; (2) associar erro à causa e neutralizá-lo com SEERRO; (3) avaliar fórmula aninhada passo a passo. COMPETÊNCIAS DESENVOLVIDAS: depuração de fórmulas; robustez de planilhas. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: funções de pesquisa (tópico 4, sub-1); desempenho e depuração (tópico 6, sub-2). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: célula vazia assume significados distintos por contexto — o coração das pegadinhas. Em aritmética, vazio vale zero (=A1+B1 com B1 vazia soma 0); em concatenação, vazio vale cadeia vazia (A1&\"x\" com A1 vazia resulta \"x\"); em critérios de funções condicionais (CONT.SE e irmãs), o vazio não casa com critérios numéricos no simulador deste projeto — diferença declarada em relação ao Excel real, no qual vazio pode casar com critério igual a zero; não se generalize de uma implementação para a outra. Erros são valores de tipo erro: #N/A (não encontrado — típico de PROCV/CORRESP), #DIV/0! (divisão por zero ou por vazio), #VAL! (tipo incompatível), #REF! (referência inválida), #NUM! (número inválido). SEERRO(valor; valor_se_erro) avalia o primeiro argumento; se resultar erro, retorna o segundo — a receita canônica =SEERRO(PROCV(\"X\";A1:B10;2;FALSO);\"não encontrado\") transforma #N/A em mensagem legível. Fórmula aninhada é função dentro de função; a avaliação procede de dentro para fora: em =SE(MÉDIA(A1:A5)>=7;\"aprovado\";\"reprovado\"), primeiro MÉDIA, depois a comparação, depois o SE. O simulador deste projeto avalia aninhamentos recursivamente e implementa SE/SEERRO com avaliação preguiçosa — só o ramo realmente usado é executado: num SE, apenas o ramo escolhido pela condição; num SEERRO, se o primeiro argumento não erra, o segundo nem é avaliado. Consequência prática: efeitos esperados de um ramo não avaliado não ocorrem (e erros nele não emergem); por outro lado, erro em argumento avaliado antes (ex.: MÉDIA de texto dentro do SE) é capturado por um SEERRO externo. Erros de entrada (sintaxe inválida detectada antes da execução) não são capturáveis por SEERRO — são rejeitados com mensagem de entrada.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer que vazio soma como zero e que #DIV/0! nasce de divisor zero/vazio.\n- Nível intermediário: encapsular PROCV em SEERRO; avaliar fórmula aninhada escrevendo o valor intermediário de cada camada.\n- Nível avançado: explicar a avaliação preguiçosa e prever quando um erro de um ramo não avaliado NÃO aparece; distinguir erro de execução de erro de entrada.\n- Nível especialista: desenhar política de robustez (SEERRO com mensagens informativas, checagem de vazios antes de divisões) e diagnosticar fórmula aninhada em cascata.\n\nCOMPARAÇÕES CRÍTICAS:\n- Vazio em aritmética x em critérios: vazio soma como 0, mas (no simulador) não casa com critérios numéricos — a alternativa que generaliza \"vazio é sempre zero\" está errada.\n- Erro de execução x erro de entrada: #N/A/#DIV/0! emergem durante o cálculo e são capturáveis por SEERRO; sintaxe inválida é rejeitada antes, com mensagem de entrada — confundir os níveis inverte a resposta sobre o que o SEERRO captura.\n- SE x SEERRO: SE desvia por condição lógica; SEERRO desvia por ocorrência de erro — usar SE para tratar erro exige SEERRO ou detecção prévia (funções de verificação do Excel real, fora do simulador).\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"SEERRO captura qualquer problema, inclusive fórmula mal escrita\" — Motivo: confunde erro de execução com erro de entrada — Versão tecnicamente correta: SEERRO captura erros de execução (#N/A, #DIV/0!...); sintaxe inválida é rejeitada antes da execução com mensagem de entrada.\n- Afirmação errada: \"num SE aninhado, os dois ramos são sempre calculados\" — Motivo: assume avaliação completa — Versão tecnicamente correta: no simulador, SE/SEERRO são preguiçosos — só o ramo escolhido é avaliado; erros no ramo não avaliado não emergem.\n- Afirmação errada: \"célula vazia casa com critério =0 nas funções condicionais\" — Motivo: transporta comportamento do Excel real ao simulador sem restrição — Versão tecnicamente correta: no simulador deste projeto, vazio nunca casa com critérios numéricos (limitação declarada); no Excel real o comportamento difere — não generalizar.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: célula vazia por contexto, códigos de erro, SEERRO, aninhamento, avaliação de dentro para fora, avaliação preguiçosa.\n- Regras e fórmulas: robustez → =SEERRO(PROCV(...);\"mensagem\"); divisão segura → checar divisor antes; diagnóstico → valores intermediários da camada mais interna.\n- Exceções: SEERRO não captura erro de entrada; ramos não avaliados não executam; comportamento de vazio em critérios difere entre simulador e Excel real.\n- Palavras-chave: vazio, #N/A, #DIV/0!, #VAL!, #REF!, SEERRO, aninhamento, preguiçoso, entrada inválida.\n- Checklist de domínio: prevejo vazio por contexto; associo erro à causa; neutralizo com SEERRO; avalio aninhado de dentro para fora; declaro os limites do simulador.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que resulta =A1&\"-fim\" quando A1 está vazia? (2) Qual função transforma #N/A de um PROCV numa mensagem legível e como se escreve? (3) Em =SE(MÉDIA(A1:A5)>=7;\"aprovado\";\"reprovado\"), qual camada avalia primeiro? (4) Um SEERRO externo captura erro de sintaxe? Explique. (5) No simulador, célula vazia casa com critério \">0\"? Justifique com o escopo documentado.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Evitar o #N/A de um PROCV quando o produto não existe na tabela.",
                    "resposta": "=SEERRO(PROCV(\"X\";A1:B10;2;FALSO);\"não encontrado\") — se o PROCV retornar #N/A, o SEERRO devolve a mensagem; se o PROCV encontra, retorna o valor normal. Padrão de robustez para pesquisas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Prever o resultado de =SE(MÉDIA(A1:A5)>=7;\"aprovado\";\"reprovado\") com A1:A5 = 8;7;9;6;8.",
                    "resposta": "Avaliação de dentro para fora: MÉDIA(8;7;9;6;8) = 7,6 → 7,6>=7 é VERDADEIRO → o SE escolhe o ramo \"aprovado\" e NÃO avalia \"reprovado\" (avaliação preguiçosa do simulador). Resultado: aprovado."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Coluna de médias mensais exibe #DIV/0! nos meses sem lançamentos. Como tornar a coluna legível?",
                    "resposta": "Causa: divisor zero/vazio (célula vazia vale 0 na aritmética). Correção: encapsular =SEERRO(MÉDIA(A2:A10);\"sem lançamentos\") — quando não houver valores, a célula exibe a mensagem em vez do erro. Observação de escopo: para checagem explícita de vazio/contagem antes de dividir, o Excel real oferece funções de verificação; no simulador deste projeto, o padrão SEERRO é o recurso documentado para neutralizar erros de execução."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário espera que SEERRO capture #VAL! de texto não numérico e também fórmulas escritas com parêntese faltando.",
                    "correcao": "Parcialmente incorreto: SEERRO captura erros de execução — incluindo #VAL! gerado durante o cálculo (ex.: MÉDIA sobre texto avaliado antes). Mas fórmula com sintaxe inválida (parêntese faltando) é erro de entrada, rejeitado antes da execução com mensagem útil — o SEERRO não chega a ser avaliado nesse caso."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual função captura erros de execução e retorna um valor alternativo? A) SE; B) SEERRO; C) NÃO.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em critérios do simulador deste projeto, célula vazia casa com critério numérico 0.",
                    "resposta": "Errado. Limitação declarada: no simulador, vazio nunca casa com critérios numéricos; o comportamento do Excel real difere — não se generaliza entre implementações."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Em =SEERRO(PROCV(...);\"ausente\"), se o PROCV encontrar o valor, o texto \"ausente\": A) Também é avaliado e descartado; B) Não é avaliado (avaliação preguiçosa); C) Substitui o valor encontrado.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de prever o comportamento de células vazias por contexto, associar códigos de erro às causas, neutralizar erros com SEERRO e avaliar fórmulas aninhadas de dentro para fora considerando a avaliação preguiçosa, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-5",
            "titulo": "Classificação, filtros, validação, formatação condicional e visualização",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-5-sub-1",
                "titulo": "Classificação, filtros, validação de dados e formatação condicional",
                "objetivoAprendizagem": "Aluno aplicará classificação, filtros, validação de dados e formatação condicional.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) classificação (Ordenar): níveis, critério e risco de intervalo parcial; (b) filtros: AutoFiltro e sua função de exibição (não de exclusão); (c) validação de dados: tipos de restrição, mensagens e o limite real (colar ignora validação); (d) formatação condicional: regras, escalas e o princípio de que altera aparência, não valor. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve cenários (restringir entrada a lista; destacar valores acima de limite; ordenar por duas colunas) e cobra a diferença entre validação (entrada) e formatação condicional (exibição), e o caráter de exibição dos filtros; confundir esses mecanismos muda o gabarito. PRÉ-REQUISITOS: estrutura de intervalos (tópico 1). OBJETIVOS OBSERVÁVEIS: (1) ordenar por múltiplos níveis sem fragmentar o intervalo; (2) aplicar filtro e explicar o que acontece com as linhas ocultas; (3) configurar validação com alerta de erro; (4) criar regra de formatação condicional por valor. COMPETÊNCIAS DESENVOLVIDAS: organização de dados; controle de qualidade de entrada. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: tabelas estruturadas (tópico 1, sub-2); tipos de dados (tópico 3); tabelas dinâmicas (tópico 5, sub-2). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: são quatro recursos de organização e controle, com papéis distintos. Classificação (Ordenar): reordena fisicamente as linhas por critério — crescente/decrescente, com múltiplos níveis (ex.: por Região e, dentro dela, por Valor); exige que o intervalo selecionado seja completo (ou o Excel detecte a região circundante), pois ordenar coluna isolada desalinha os registros — erro de integridade clássico. Filtro (AutoFiltro): Dados > Filtro insere setas no cabeçalho; escolher critérios oculta linhas que não casam — os dados continuam lá, apenas fora da exibição, e cálculos com SOMA/MÉDIA continuam considerando as linhas ocultas (funções SUBTOTAL/AGREGAR existem para respeitar o filtro, no Excel real; fora do escopo do simulador). Validação de dados (Dados > Validação de Dados): restringe a digitação — lista de valores, número com intervalo, data, tamanho de texto ou fórmula personalizada — com mensagens de entrada e alerta de erro (estilos Parar/Aviso/Informação); parâmetro essencial: o alerta estilo Parar bloqueia digitação inválida, porém colar um valor sobre a célula pode contornar a validação — a camada definitiva de bloqueio seria proteção/formatação e governança, não apenas validação. Formatação condicional (Início > Formatação Condicional): aplica aparência (preenchimento, cor de fonte, ícones, barras, escalas de cores) conforme regra sobre os valores (ex.: Maior que 7 → verde; escala de 3 cores; fórmula); avalia dinamicamente — muda o valor, muda o formato — sem alterar o valor em si. Relação entre os quatro: validação controla o que entra; classificação e filtro organizam a leitura; formatação condicional comunica padrões visualmente. O simulador Excel deste projeto não executa esses recursos de interface (limitação declarada): são conteúdo teórico para provas; o simulador cobre o cálculo de funções documentadas no tópico 6.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: aplicar filtro por valor e observar linhas ocultas; ordenar uma coluna com o intervalo completo.\n- Nível intermediário: ordenar por dois níveis; criar validação por lista suspensa com alerta de erro estilo Parar; destacar valores com Maior que.\n- Nível avançado: explicar por que SOMA continua contando linhas filtradas (exibição x dados) e por que colar contorna a validação; usar escala de cores para mapa de calor.\n- Nível especialista: desenhar política de qualidade de entrada (validação + proteção + conferência) e diagnosticar intervalo desalinhado por ordenação parcial.\n\nCOMPARAÇÕES CRÍTICAS:\n- Validar x formatar condicionalmente: validação restringe a entrada; formatação condicional muda a aparência sem restringir nada — em \"recurso que impede digitar valor fora da lista\", o gabarito é validação.\n- Filtro x exclusão: o filtro oculta linhas na exibição; os dados permanecem e somas comuns continuam contando-os — a alternativa que diz que o filtro apaga dados está errada.\n- Ordenar intervalo completo x coluna única: ordenar só a coluna desalinha registros; a ordenação deve abranger a região inteira — a pegadinha da integridade de dados.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"a formatação condicional altera o valor da célula\" — Motivo: confunde aparência com conteúdo — Versão tecnicamente correta: a formatação condicional altera apenas a aparência (cor, ícone, barra); o valor permanece.\n- Afirmação errada: \"a validação de dados impede qualquer valor inválido na célula, em qualquer circunstância\" — Motivo: termo absoluto — Versão tecnicamente correta: a validação controla a digitação (com alerta de erro configurável, ex.: estilo Parar), mas colar um valor pode contorná-la; bloqueio definitivo exige proteção/governança adicional.\n- Afirmação errada: \"aplicar filtro exclui as linhas que não casam\" — Motivo: confunde exibição com exclusão — Versão tecnicamente correta: o filtro oculta as linhas; os dados permanecem e são incluídos em cálculos comuns como SOMA.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: classificação, múltiplos níveis, AutoFiltro, ocultação, validação de dados, lista suspensa, alerta de erro, formatação condicional, escala de cores.\n- Regras e fórmulas: entrada controlada → validação; leitura parcial → filtro; padrão visual → formatação condicional; reordenação → ordenar região completa por níveis.\n- Exceções: colar contorna validação; filtro não exclui; formatação condicional não muda valor; simulador não executa esses recursos.\n- Palavras-chave: ordenar, filtro, validação, lista suspensa, alerta de erro, formatação condicional, escala de cores.\n- Checklist de domínio: ordeno por níveis sem desalinhamento; aplico filtro explicando ocultação; configuro validação com alerta Parar; crio regras de formatação condicional.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual recurso restringe a entrada de dados numa célula e onde se configura? (2) A coluna filtrada esconde 30 linhas: o que =SOMA(intervalo) retorna? (3) Por que ordenar apenas uma coluna é perigoso? (4) Que recurso destaca em verde os valores acima de 7 e o que ele altera na célula? (5) Colar um valor inválido num campo validado: o que acontece?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Validar a coluna Status com lista suspensa de valores.",
                    "resposta": "Dados > Validação de Dados > Permitir: Lista > Fonte: Aprovado;Reprovado;Pendente > OK. A célula passa a oferecer lista suspensa; na guia Alerta de Erro, o estilo Parar bloqueia digitações fora da lista."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Tabela de notas: destacar em verde as notas acima de 7 e em vermelho as abaixo de 5, sem alterar valores.",
                    "resposta": "Selecionar o intervalo de notas > Início > Formatação Condicional > Regras de Realce de Células > Maior que > 7 > preenchimento verde > OK; repetir com Menor que > 5 > vermelho. As regras avaliam dinamicamente: corrigida uma nota, a cor acompanha. O valor da célula permanece o mesmo — formatação condicional é camada visual."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Relação de 500 registros precisa ser ordenada por Região (A-Z) e, dentro de cada região, por Valor (decrescente).",
                    "resposta": "Selecionar a região completa (todas as colunas do registro) > Dados > Classificar > nível 1: Região, crescente > Adicionar Nível: Valor, decrescente > OK. Ponto crítico: selecionar o registro inteiro evita o desalinhamento que ocorreria ao ordenar apenas a coluna Valor (nomes sairiam dos seus valores)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a validação de dados impede a digitação de valores inválidos sempre.",
                    "correcao": "Incorreto: a validação controla a digitação e o alerta de erro (ex.: estilo Parar) bloqueia a entrada manual inválida, porém colar um valor sobre a célula pode contornar a validação; bloqueio definitivo exige proteção de planilha/governança adicional."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso restringe a entrada de dados em uma célula? A) Filtro; B) Validação de dados; C) Formatação condicional.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A formatação condicional altera o valor da célula.",
                    "resposta": "Errado. Altera apenas a aparência (cor, ícone, barra); o valor armazenado permanece."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Após aplicar filtro que oculta 30 das 80 linhas, =SOMA(A1:A80) retorna: A) A soma das 50 visíveis; B) A soma das 80 linhas, pois o filtro oculta apenas na exibição; C) Erro.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de ordenar por múltiplos níveis sem fragmentar registros, aplicar filtros explicando a ocultação, configurar validação com alerta de erro e criar formatação condicional sem alterar valores, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-3-topico-5-sub-2",
                "titulo": "Gráficos, tabelas dinâmicas, campos, agregações e segmentações",
                "objetivoAprendizagem": "Aluno compreenderá gráficos, tabelas dinâmicas, campos, agregações e segmentações no Excel.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que gráficos do Excel representam e como escolher o tipo básico; (b) tabela dinâmica (PivotTable): campos de linhas, colunas, valores e filtros; (c) agregações (soma, média, contagem) e campos calculados; (d) segmentação de dados (Slicer) como filtro visual; (e) a atualização da tabela dinâmica frente a mudanças na fonte; (f) o escopo do simulador deste projeto, que não executa esses recursos. POR QUE O CONHECIMENTO É IMPORTANTE: a prova cobra o papel de cada área de campo da tabela dinâmica e a exigência de atualização manual após alterar a fonte; confundir tabela dinâmica com gráfico, ou prometer atualização automática, muda o gabarito. PRÉ-REQUISITOS: estrutura de dados do Excel (tópico 1); funções de agregação (tópico 3). OBJETIVOS OBSERVÁVEIS: (1) montar uma tabela dinâmica com campos corretos; (2) escolher a agregação adequada; (3) usar segmentação de dados; (4) explicar o comportamento de atualização. COMPETÊNCIAS DESENVOLVIDAS: resumo analítico de dados; leitura de painéis. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: tabelas estruturadas (tópico 1); Módulo 8 (visualização — escolha de gráfico e integridade); simulador Excel (tópico 6). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média a alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: gráfico é a representação visual dos dados: no Excel, Inserir > Gráfico oferece colunas, linhas, pizza, dispersão, entre outros; a escolha depende do objetivo analítico (comparação, evolução temporal, composição, relação) — aprofundado no Módulo 8. Tabela dinâmica é o mecanismo de resumo interativo: a partir de uma fonte de dados (intervalo ou tabela estruturada), monta-se uma matriz reorganizável arrastando campos para quatro áreas — Linhas (categorias verticais), Colunas (categorias horizontais), Valores (agregações numéricas: SOMA, MÉDIA, CONTAGEM, entre outras) e Filtros (restrição global). Campos calculados permitem fórmulas sobre os campos resumidos (ex.: valor médio por pedido = Valor/Contagem). Segmentação de dados (Slicer): painel de botões que filtra a tabela dinâmica (e, em versões recentes, tabelas estruturadas) com um clique — cada botão corresponde a um valor do campo. Propriedade operacional decisiva: a tabela dinâmica é um resumo materializado — ao alterar a fonte de dados, ela não se atualiza sozinha; é preciso executar Atualizar (ou Atualizar Tudo) para recalcular a partir da fonte. O simulador Excel documentado neste projeto não executa gráficos, tabelas dinâmicas nem segmentações (limitação declarada): esses recursos são conteúdo teórico para provas; o simulador cobre funções de cálculo documentadas no tópico 6.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: criar tabela dinâmica simples: Região em Linhas, Valor em Valores (soma).\n- Nível intermediário: trocar a agregação de soma para média/contagem; adicionar campo em Colunas e Filtro; inserir segmentação.\n- Nível avançado: criar campo calculado; diagnosticar tabela dinâmica \"desatualizada\" após mudança na fonte e executar Atualizar Tudo.\n- Nível especialista: escolher entre gráfico direto e gráfico alimentado por tabela dinâmica; explicar por que resumo materializado exige disciplina de atualização em relatórios recorrentes.\n\nCOMPARAÇÕES CRÍTICAS:\n- Gráfico x tabela dinâmica: o gráfico visualiza valores; a tabela dinâmica resume e reorganiza dados por campos — para \"vendas por região e por mês com filtros\", o gabarito é a tabela dinâmica (que pode alimentar o gráfico).\n- Soma x contagem como agregação: soma acumula valores; contagem conta registros — para \"quantos pedidos por região\", a alternativa com soma está errada.\n- Atualização manual x automática: a tabela dinâmica não reflete a fonte até receber Atualizar; fórmulas comuns recalculam automaticamente — confundir os dois comportamentos inverte a resposta sobre consistência do relatório.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"a tabela dinâmica atualiza automaticamente ao mudar a fonte de dados\" — Motivo: generaliza o recálculo de fórmulas — Versão tecnicamente correta: a tabela dinâmica é um resumo materializado; é necessário executar Atualizar (ou Atualizar Tudo) para refletir as alterações da fonte.\n- Afirmação errada: \"a segmentação de dados funciona apenas em tabelas dinâmicas\" — Motivo: termo absoluto — Versão tecnicamente correta: em versões recentes do Excel a segmentação também filtra tabelas estruturadas; o escopo exato depende da versão.\n- Afirmação errada: \"o simulador Excel do projeto cria tabelas dinâmicas para praticar agregações\" — Motivo: promessa fora do escopo documentado — Versão tecnicamente correta: o simulador documentado executa funções de cálculo (ver tópico 6) e não executa gráficos, tabelas dinâmicas nem segmentações.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: gráfico, tabela dinâmica, campos (linhas/colunas/valores/filtros), agregações, campo calculado, segmentação de dados.\n- Regras e fórmulas: mudou a fonte → Atualizar Tudo; contagem de registros → agregação contagem; filtro visual por valor de campo → segmentação.\n- Exceções: tabela dinâmica não recalcula sozinha; segmentação também alcança tabelas estruturadas em versões recentes; simulador não executa esses recursos.\n- Palavras-chave: PivotTable, campo, agregação, soma, média, contagem, Slicer, campo calculado, atualizar.\n- Checklist de domínio: monto tabela dinâmica com as quatro áreas; escolho agregação adequada; uso segmentação; explico a atualização; declaro o limite do simulador.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual área da tabela dinâmica recebe o campo numérico a ser somado? (2) Como exibir \"quantidade de pedidos por região\" e não \"soma dos valores por região\"? (3) A fonte da tabela dinâmica mudou e o resumo ficou antigo: qual ação corrige? (4) O que é a segmentação de dados e em que objetos ela atua? (5) Corrija: \"a tabela dinâmica recalcula automaticamente como uma fórmula\".",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Criar uma tabela dinâmica de vendas por região.",
                    "resposta": "Selecionar os dados > Inserir > Tabela Dinâmica > arrastar Região para Linhas e Valor para Valores (agregação SOMA) > OK. A matriz resultante exibe o total de vendas por região e permite reorganizar arrastando campos."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Diretoria quer filtrar o resumo de vendas por Ano com um clique, sem editar filtros de campo.",
                    "resposta": "Selecionar a tabela dinâmica > Inserir Segmentação de Dados > marcar o campo Ano > OK. Os botões da segmentação filtram a tabela dinâmica (e, em versões recentes, também tabelas estruturadas); clicar em um ano restringe todas as áreas do resumo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O relatório mensal usa tabela dinâmica; a equipe digitou as vendas de novembro na fonte e o resumo não mudou.",
                    "resposta": "Diagnóstico: tabela dinâmica é resumo materializado — não recalcula sozinha. Correção: clicar na tabela dinâmica > Atualizar (ou Dados > Atualizar Tudo, quando há várias). Prevenção: rotina operacional de atualizar o resumo após qualquer digitação na fonte; incluir a checagem no checklist do relatório."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a tabela dinâmica atualiza automaticamente ao mudar a fonte de dados.",
                    "correcao": "Incorreto: é necessário atualizar (Atualizar Tudo ou Atualizar) para refletir as alterações na fonte; o recálculo automático é propriedade das fórmulas, não do resumo materializado da tabela dinâmica."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso resume dados por campos com agregações como soma, média e contagem? A) Gráfico; B) Tabela dinâmica; C) Filtro automático.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A segmentação de dados funciona apenas em tabelas dinâmicas.",
                    "resposta": "Errado. Em versões recentes do Excel, a segmentação também filtra tabelas estruturadas; o escopo exato depende da versão."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para exibir \"quantidade de pedidos por região\" numa tabela dinâmica, a agregação do campo Valor deve ser: A) SOMA; B) CONTAGEM; C) MÉDIA.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de montar uma tabela dinâmica atribuindo campos às quatro áreas, escolher a agregação adequada e explicar a necessidade de atualização manual após alterar a fonte, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-1-unidade-3-topico-6",
            "titulo": "Importação, proteção, desempenho e compatibilidade",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-3-topico-6-sub-1",
                "titulo": "Power Query: importação, limpeza e transformação de dados",
                "objetivoAprendizagem": "Aluno compreenderá a importação, limpeza e transformação de dados com Power Query.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é o Power Query e o problema que resolve (importação e transformação repetível de dados externos); (b) as fontes de importação típicas (CSV, web, banco de dados, pasta); (c) as transformações básicas (remover colunas, filtrar, mesclar, acrescentar, definir tipo, coluna personalizada); (d) o modelo de etapas gravadas e a atualização; (e) a relação com ETL e a linguagem M. POR QUE O CONHECIMENTO É IMPORTANTE: a prova descreve cenários de importação e limpeza e pede a ferramenta e o comportamento corretos; afirmar atualização automática ao mudar o arquivo-fonte, ou trocar Power Query por Power Pivot, muda o gabarito. PRÉ-REQUISITOS: estrutura de dados do Excel (tópico 1). OBJETIVOS OBSERVÁVEIS: (1) importar uma fonte e iniciar a transformação; (2) aplicar transformações básicas; (3) explicar o modelo de etapas e a atualização; (4) posicionar o Power Query no fluxo ETL. COMPETÊNCIAS DESENVOLVIDAS: preparação de dados; automação de rotina de importação. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: tabelas estruturadas (tópico 1); Módulo 7 (limpeza e transformação de dados); Módulo 8 (ferramentas — Power Query/Power BI). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média a alta; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas.\n\nFUNDAMENTAÇÃO CONCEITUAL: Power Query é a tecnologia do Excel (e do ecossistema de BI) para obter e transformar dados — no Excel, acessível por Dados > Obter Dados. Fontes típicas: arquivo de texto/CSV, dados da web, banco de dados, pasta com vários arquivos. Fluxo de trabalho: conectar à fonte > Transformar Dados (abre o editor do Power Query) > aplicar transformações > Fechar e Carregar (entrega o resultado numa planilha ou na Tabela Dinâmica do modelo de dados). Transformações básicas: remover colunas, filtrar linhas, alterar tipo de dados (texto, número, data — a definição de tipo é etapa obrigatória para cálculo correto), dividir/renomear colunas, mesclar consultas (junção de duas consultas por coluna-chave, com tipo de junção) e acrescentar consultas (empilhar linhas de fontes iguais). Modelo de etapas: cada transformação é gravada como etapa da consulta; as etapas são reaplicadas, em ordem, sempre que os dados são atualizados — por isso a preparação é repetível: novo arquivo com a mesma estrutura recebe automaticamente as mesmas limpezas ao executar Atualizar. Linguagem M: a linguagem de fórmulas que descreve as etapas por trás da interface gráfica; o usuário comum opera pelas caixas de diálogo, e a edição avançada usa o M. Relação com ETL: o Power Query realiza extração, transformação e carregamento dentro do Excel (visão introdutória de ETL aprofundada no Módulo 7). Limitações: a atualização não é automática ao mudar o arquivo-fonte — é preciso executar Atualizar; a disponibilidade e os conectores dependem da versão/plano. O simulador Excel deste projeto não executa Power Query (limitação declarada): o conteúdo é teórico para provas.\n\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: importar um CSV e carregá-lo numa planilha sem transformar nada.\n- Nível intermediário: remover colunas, filtrar linhas e definir tipos; carregar o resultado; executar Atualizar após trocar o CSV.\n- Nível avançado: mesclar duas consultas por chave e acrescentar consultas iguais; entender as etapas gravadas no editor.\n- Nível especialista: desenhar rotina mensal de importação (pasta de arquivos padronizada) e explicar por que a preparação gravada elimina retrabalho manual; diagnosticar erro de tipo de dado que quebra cálculos.\n\nCOMPARAÇÕES CRÍTICAS:\n- Power Query x Power Pivot: Power Query importa e transforma (ETL de entrada); Power Pivot modela e calcula em modelo de dados — para \"limpar e estruturar CSV recebido mensalmente\", o gabarito é Power Query.\n- Transformação gravada x edição manual: transformação manual na planilha não se repete no próximo arquivo; a consulta do Power Query reaplica as etapas — em questão sobre rotina repetível, o gabarito é a consulta.\n- Atualizar x atualização automática: a consulta reflete o arquivo-fonte apenas ao executar Atualizar — prometer reflexo automático é a pegadinha clássica.\n\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"o Power Query atualiza automaticamente os dados quando o arquivo-fonte muda\" — Motivo: generaliza o recálculo de fórmulas — Versão tecnicamente correta: as etapas gravadas são reaplicadas ao executar Atualizar; sem essa ação, a carga permanece no estado anterior.\n- Afirmação errada: \"Power Query e Power Pivot são a mesma ferramenta\" — Motivo: troca entre ferramentas do ecossistema — Versão tecnicamente correta: Power Query obtém e transforma dados; Power Pivot modela e calcula sobre o modelo de dados.\n- Afirmação errada: \"as transformações do Power Query alteram o arquivo-fonte\" — Motivo: confunde leitura com edição — Versão tecnicamente correta: as transformações ocorrem na cópia em memória da consulta; o arquivo-fonte permanece intacto.\n\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: Obter Dados, editor do Power Query, etapas gravadas, tipos de dados, mesclar/acrescentar consultas, Fechar e Carregar, linguagem M.\n- Regras e fórmulas: rotina repetível = consulta gravada + Atualizar; junção por chave = mesclar; empilhar fontes iguais = acrescentar.\n- Exceções: atualização não é automática; conectores e disponibilidade dependem de versão/plano; simulador não executa Power Query.\n- Palavras-chave: Power Query, Obter Dados, ETL, linguagem M, mesclar, acrescentar, tipo de dado, Atualizar.\n- Checklist de domínio: importo fonte; aplico transformações básicas; explico etapas gravadas e atualização; distingo Query de Pivot; não prometo atualização automática.\n\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual ferramenta do Excel importa e transforma dados de fontes externas? (2) A planilha carregada não reflete o novo CSV entregue hoje: qual ação executa? (3) O que acontece com o arquivo-fonte ao aplicar transformações? (4) Qual a função da linguagem M? (5) Como uma consulta torna a limpeza mensal repetível?",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Importar um arquivo CSV e remover colunas vazias.",
                    "resposta": "Dados > Obter Dados > De Arquivo > De Texto/CSV > selecionar o arquivo > Transformar Dados > no editor, selecionar as colunas vazias > Remover Colunas > Fechar e Carregar. O resultado chega à planilha como tabela, e a consulta guarda as etapas aplicadas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Todo mês chega um CSV de execuções com colunas extras e datas em texto; a análise precisa só de Data, Valor e Status, com Data como tipo data.",
                    "resposta": "Criar a consulta uma vez: Obter Dados > De Texto/CSV > Transformar Dados > remover as colunas desnecessárias > selecionar Data > Alterar Tipo > Data > (Status e Valor, conferir tipos) > Fechar e Carregar. No mês seguinte, substituir o arquivo pela nova versão e executar Atualizar: as etapas gravadas reaplicam sozinhas a remoção e a conversão de tipo — sem retrabalho manual."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Duas planilhas (contratos e pagamentos) precisam ser cruzadas pelo número do processo.",
                    "resposta": "Carregar as duas como consultas > no editor, Página Inicial > Mesclar Consultas > escolher a consulta principal, a secundária e a coluna-chave (número do processo) > selecionar o tipo de junção (interna para casamentos, esquerda para preservar todos os contratos) > expandir as colunas desejadas > Fechar e Carregar. Mesclar junta por chave; Acrescentar empilharia linhas de fontes com a mesma estrutura."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que o Power Query atualiza automaticamente ao mudar o arquivo-fonte.",
                    "correcao": "Incorreto: as etapas gravadas são reaplicadas apenas ao executar Atualizar (Dados > Atualizar Tudo); sem a ação, a carga permanece com os dados anteriores. O arquivo-fonte, por sua vez, nunca é alterado pelas transformações."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual ferramenta do Excel importa e transforma dados de fontes externas? A) Power Pivot; B) Power Query; C) Power View.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O Power Query usa a linguagem M para descrever as transformações.",
                    "resposta": "Certo. As etapas aplicadas na interface são descritas pela linguagem M, visível na barra de fórmulas do editor de consultas."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para unir duas consultas por uma coluna-chave, escolhendo manter todos os registros da primeira, usa-se: A) Acrescentar consultas; B) Mesclar consultas com junção à esquerda; C) Agrupar por coluna.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de importar uma fonte com Power Query, aplicar transformações básicas com definição de tipo e explicar o modelo de etapas gravadas e a necessidade de atualização manual, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-3-topico-6-sub-2",
                "titulo": "Proteção, desempenho, depuração e compatibilidade; simulador Excel",
                "objetivoAprendizagem": "Aluno compreenderá proteção de planilhas, desempenho, depuração e compatibilidade, além do escopo do simulador Excel.",
                "conteudo": "Proteção: proteger planilha (impedir edição de células bloqueadas) e proteger pasta de trabalho (impedir alteração de estrutura). Desempenho: evitar fórmulas voláteis excessivas (AGORA, ALEATÓRIO), usar tabelas estruturadas, limitar intervalos inteiros (A:A). Depuração: Rastrear Precedentes/Dependentes, Avaliar Fórmula, verificação de erros. Compatibilidade: funções de diferentes versões (PROCX disponível em versões recentes; PROCV em todas). Simulador Excel documentado (assets/js/simulators.js): suporta SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO, CONT.VALORES, SE, SES (alias de E), E, OU, NÃO, SEERRO, CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIASE, PROCV, PROCH, PROCX, CORRESP, ÍNDICE, HOJE, operadores aritméticos/relacionais/lógicos/texto, referências A1 relativas/absolutas/mistas e intervalos, com busca/cálculo reais e rejeição de entradas inválidas. Não suporta: tabelas estruturadas, nomes definidos, R1C1, matrizes dinâmicas, spilling, LET/LAMBDA, formatação de célula, arquivos externos. Não testado em navegador real (verificado com node --check e smoke test em Node/vm).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Depurar uma fórmula que retorna #REF!.",
                    "resposta": "Fórmulas > Rastrear Erro > Rastrear Precedentes; identificar célula com referência inválida; corrigir."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Proteger planilha permitindo edição apenas de B2:B10.",
                    "resposta": "Selecionar B2:B10 > Formatar Células > Proteção > desmarcar 'Bloqueada' > Revisar > Proteger Planilha (senha opcional)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que o simulador Excel executa tabelas estruturadas.",
                    "correcao": "Incorreto: o simulador suporta apenas referências A1 e intervalos; tabelas estruturadas estão fora do escopo documentado (limitação declarada em assets/js/simulators.js)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual função é volátil e recalcula a cada alteração? A) SOMA; B) AGORA; C) MÁXIMO.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) PROCX está disponível em todas as versões do Excel.",
                    "resposta": "Errado. PROCX foi introduzido em versões recentes (Microsoft 365/Excel 2021+)."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender proteção de planilhas, desempenho, depuração e compatibilidade, além do escopo do simulador Excel, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-1-unidade-4",
        "titulo": "1.4 Microsoft PowerPoint",
        "topicos": [
          {
            "id": "modulo-1-unidade-4-topico-1",
            "titulo": "Apresentações, layouts, animações e apresentação",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-4-topico-1-sub-1",
                "titulo": "Slide Mestre, layouts, animações, transições e apresentação",
                "objetivoAprendizagem": "Aluno compreenderá Slide Mestre, layouts, animações, transições e modos de apresentação no PowerPoint.",
                "conteudo": "PowerPoint organiza conteúdo em slides com hierarquia de layouts baseados no Slide Mestre (Slide Master). Slide Mestre define tipografia, cores, logotipos e layouts filhos; alterar o mestre propaga para todos os slides vinculados. Layouts (Título, Título e Conteúdo, Comparação, Em branco) determinam a disposição dos placeholders. Tipografia requer contraste adequado (ex.: fundo claro + texto escuro; evitar combinações de baixo contraste como amarelo/claro). Animações aplicam efeitos a objetos individuais (entrada, ênfase, saída) com ordem, duração e gatilhos configuráveis. Transições são efeitos entre slides (fade, push, wipe). Modo de apresentação (Slide Show) inclui exibição do apresentador com notas, cronômetro e navegação; notas não são visíveis ao público por padrão. Acessibilidade exige ordem de leitura lógica (via Painel de Seleção), texto alternativo para imagens, contraste adequado e fontes legíveis. Exportação para PDF preserva layout; para apresentação offline, usar 'Empacotar Apresentação para CD' (Package Presentation) incluindo fontes vinculadas e mídia.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Configurar um Slide Mestre com logotipo, fonte e cor corporativos.",
                    "resposta": "Exibir > Slide Mestre → editar o mestre principal (layout pai) com logotipo, fontes (título: Arial 28pt; corpo: Arial 16pt) e cores; todos os layouts filhos herdam essas propriedades."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Aplicar animação sequencial a uma lista de 4 itens com atraso progressivo.",
                    "resposta": "Selecionar cada item → Animações → Adicionar animação (ex: Aparecer) → Painel de Animação → configurar ordem, duração (0,5s) e atraso progressivo (0,2s entre itens) → gatilho: ao clicar."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que animações e transições são o mesmo conceito.",
                    "correcao": "Incorreto: animações = efeitos dentro de um slide (objetos); transições = efeitos entre slides. Confundir os dois leva a apresentações com ritmo inadequado (excesso de efeitos entre slides quando o objetivo é destacar conteúdo interno)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A alteração do Slide Mestre afeta apenas o slide atual.",
                    "resposta": "Errado. O Slide Mestre afeta todos os slides vinculados ao mestre e seus layouts filhos."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual diferença entre animação e transição? A) Nenhuma; B) Animação = dentro do slide, transição = entre slides; C) Transição = dentro do slide.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender Slide Mestre, layouts, animações, transições e modos de apresentação no PowerPoint, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-4-topico-1-sub-2",
                "titulo": "Temas e variações visuais (Design > Temas)",
                "objetivoAprendizagem": "Aluno aplicar e customizar temas em apresentações do PowerPoint.",
                "conteudo": "O comando Design > Temas aplica a um conjunto de slides um tema que centraliza a identidade visual da apresentação: paleta de cores (cores principais, secundárias e de acento), tipografias (fonte de título e fonte de corpo) e configurações de aparência (fonte de fundo, fonte de texto). O tema pode ser da galeria do PowerPoint, corporativo ou personalizado. A aplicação ocorre sobre os layouts derivados do Slide Mestre; a alteração se propaga para os slides vinculados. A personalização é feita por Design > Cores e fontes > Personalizar cores e fontes e o tema pode ser salvo como arquivo .potx. A consistência visual decorre da aplicação de um único tema em toda a apresentação. A variante de tema escuro/claro altera o fundo e exige novo contraste entre elementos. Em apresentações corporativas, a padronização por tema reduz retrabalho e garante uniformidade.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar o que o recurso Design > Temas controla em uma apresentação.",
                    "resposta": "Controla a paleta de cores, as tipografias (título e corpo) e as configurações de aparência (fundo e texto) aplicadas a todos os slides vinculados ao tema."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Aplicar o tema corporativo ao conjunto de 15 slides da empresa.",
                    "resposta": "Design > Temas > selecionar o tema corporativo > Aplicar — o tema se propaga aos layouts filhos do Slide Mestre."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que alterar a cor de um slide individual redefine a identidade visual da apresentação.",
                    "correcao": "Incorreto: cores, tipografia e aparência são propriedades do tema; alterar slide individual não altera o tema global. Para mudança pontual, aplicar outro tema ou ajustar o slide manualmente."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual recurso aplica a mesma paleta de cores e tipografia a todos os slides de uma apresentação? A) Formatação direta; B) Design > Temas; C) Inserir > Design.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Um único tema aplicado à apresentação garante consistência visual entre slides.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar e customizar temas em apresentações do PowerPoint, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-4-topico-1-sub-3",
                "titulo": "Inserção de mídia, gráficos e objetos em slides",
                "objetivoAprendizagem": "Aluno inserirá mídia, gráficos e objetos em slides e encadeará texto ao redor.",
                "conteudo": "O PowerPoint permite inserir mídia (imagem, vídeo, áudio), tabelas, gráficos e objetos (formas, texto, gráficos do Excel) em slides. Inserção de imagem: Inserir > Imagem > Local ou Online; a imagem entra como objeto com dimensionamento via manipuladores. Inserção de vídeo: Inserir > Vídeo > Local ou Online (YouTube por URL); mídia online exige conexão durante a apresentação. Inserção de áudio: Inserir > Áudio. Tabela: Inserir > Tabela (grade ou desenho manual). Gráfico: Inserir > Gráfico; para manter conexão com dados, usar gráfico vinculado ao Excel. Formas: Inserir > Formas (retângulos, setas, figuras) com texto associado. Encadear texto: selecionar o objeto e usar Layout > Encadear (Enquadrar, Barrar, etc.) ou clicar na borda do objeto. Agrupar: selecionar objetos e aplicar Grupo para movimentar/editar como unidade. Agrupamento e encadear alteram a interação de edição.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Inserir uma imagem local em um slide.",
                    "resposta": "Inserir > Imagem > Localizar imagem; a imagem é inserida como objeto e pode ser dimensionada via manipuladores de borda."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Inserir vídeo do YouTube em um slide a partir de URL.",
                    "resposta": "Inserir > Vídeo > Online Video; colar a URL; o slide passa a exibir o vídeo (exige conexão na apresentação)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a tabela inserida no slide se atualiza automaticamente se a fonte de dados do Excel mudar.",
                    "correcao": "Incorreto: tabela/gráfico inserido de forma estática não se atualiza; para atualização de dados use gráfico vinculado ao Excel."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual comando insere vídeo online em um slide? A) Inserir > Imagem; B) Inserir > Áudio; C) Inserir > Vídeo > Online Video.",
                    "resposta": "C"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O encadear texto (wrap) pode ser aplicado a qualquer objeto de slide.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de inserir mídia, gráficos e objetos em slides e encadeará texto ao redor, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-4-topico-1-sub-4",
                "titulo": "Compatibilidade de fontes, mídia e formatos (.ppt vs .pptx)",
                "objetivoAprendizagem": "Aluno avaliar e garantir compatibilidade de apresentações entre máquinas e versões.",
                "conteudo": "A apresentação deve funcionar em máquinas e versões diferentes. Formato .ppt (binário, PowerPoint 97-2003) e .pptx (Open XML, padrão desde 2007): ao abrir .ppt em versões modernas o arquivo pode ser convertido; a prática recomendada é salvar como .pptx. Fontes: a fonte usada nos slides deve existir na máquina de destino (projetor, outro computador); caso não exista, o PowerPoint aplica fonte substituta, o que pode alterar a aparência. Fontes padrão (Calibri, Arial) reduzem risco de substituição. Mídia: arquivos locais inseridos (imagem, vídeo) devem existir na máquina de destino; mídia online exige conexão. Mídia quebrada: referências podem falhar ao mover o arquivo; testar em máquina de destino. Para apresentação offline: Empacotar Apresentação para CD (Package Presentation) com fontes vinculadas e mídia. Exportação para PDF preserva layout. A compatibilidade também abrange a versão: recursos como animações podem não existir em versões antigas; ao distribuir, registrar a versão mínima exigida.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar o formato recomendado para distribuição de apresentação.",
                    "resposta": ".pptx (Open XML) é o formato padrão desde 2007; o .ppt é binário e legado, com risco de conversão ao abrir em versões modernas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Preparar apresentação para projeção offline em equipamento sem internet.",
                    "resposta": "Empacotar Apresentação para CD (Package Presentation) com fontes vinculadas e mídia; verificar fontes na máquina de destino."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a fonte de título aplicada em um slide será mantida em qualquer máquina de destino.",
                    "correcao": "Incorreto: a fonte deve existir na máquina de destino ou o PowerPoint aplicará substituta; usar fontes padrão para evitar risco."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Ao distribuir uma apresentação para outra máquina, o que deve ser verificado quanto a fontes? A) Que a fonte seja exclusiva do criador; B) Que a fonte usada exista na máquina de destino ou seja substituída de forma previsível; C) Que a fonte seja sempre embutida no arquivo .pptx.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Um arquivo .ppt aberto em versões modernas não pode apresentar incompatibilidades de formato.",
                    "resposta": "Errado. O .ppt pode ser convertido/aberto com limitações em versões modernas; o .pptx é o formato recomendado."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de avaliar e garantir compatibilidade de apresentações entre máquinas e versões, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-4-topico-1-sub-5",
                "titulo": "Erros comuns de organização e legibilidade",
                "objetivoAprendizagem": "Aluno identificar e corrigir erros de excesso de texto, poluição visual, contraste e hierarquia.",
                "conteudo": "Erros comuns de organização: excesso de texto (slides sobrecarregados; usar uma ideia por slide, bullets curtos; dividir conteúdo excessivo); poluição visual (excesso de elementos decorativos, clip arts, cores e gráficos irrelevantes); contraste insuficiente em projetor (projetor projeta em ambiente escuro; texto claro sobre fundo claro; fonte pequena; aumentar tamanho e contraste); hierarquia fraca (todos os slides com mesmo formato; ausência de títulos claros; ausência de subtítulos). Correções: aplicar layout adequado, limpar elementos, reforçar contraste (fundo escuro + texto claro ou vice-versa), usar títulos/subtítulos consistentes. Esses erros degradam a legibilidade e a transmissão do conteúdo. A organização do conteúdo segue princípios de foco: uma mensagem principal por slide, suporte visual com elementos secundários. O diagnóstico desses erros é parte da preparação de apresentação técnica.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar excesso de texto em um slide.",
                    "resposta": "Contar ideias por slide: se houver mais de uma ideia principal ou bullets longos, o slide está sobrecarregado."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Corrigir contraste insuficiente em apresentação preparada para projeção.",
                    "resposta": "Aplicar fundo escuro + texto claro (ou contrário), aumentar fonte e conferir contraste (WCAG AA) antes da projeção."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que hierarquia fraca se resolve com formatação direta de negrito.",
                    "correcao": "Incorreto: hierarquia exige uso consistente de estilos/títulos e subtítulos, não apenas negrito."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual ação reduz excesso de texto em um slide? A) Aumentar fonte; B) Dividir o conteúdo em mais slides; C) Centralizar o texto.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O contraste insuficiente em projetor pode ser resolvido com texto claro sobre fundo claro.",
                    "resposta": "Errado. Deve-se usar contraste adequado (fundo escuro + texto claro ou vice-versa)."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de identificar e corrigir erros de excesso de texto, poluição visual, contraste e hierarquia, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-4-topico-1-sub-6",
                "titulo": "Tipografia, alinhamento e composição visual",
                "objetivoAprendizagem": "Aluno aplicar tipografia, alinhamento e composição adequados em slides.",
                "conteudo": "A tipografia define a hierarquia visual: títulos (fonte grande, negrito), subtítulos e corpo (fonte menor). O tamanho mínimo para legibilidade em projeção costuma ser maior que em tela (títulos ~32-40 pontos; corpo ~18-24 pontos). O espaçamento (line spacing, antes/depois) evita sobrecarga. O alinhamento (esquerda, centralizado, justificado) organiza o texto; o justificado excessivo pode gerar linhas muito irregulares. A composição usa espaços em branco, grid e não polui o slide. A legibilidade à distância depende de tamanho, contraste e simplificação. Ajustes no Slide Mestre padronizam esses atributos; a composição deve priorizar clareza sobre ornamentação. A hierarquia tipográfica deve guiar o olhar do público desde o título até a conclusão. O alinhamento consistente entre slides evita dispersão visual. O espaçamento entre elementos e o uso de espaços em branco sustentam a clareza.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar a hierarquia tipográfica em um slide.",
                    "resposta": "Títulos > subtítulos > corpo com tamanhos progressivos (ex.: 36, 26, 18 pontos)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Aplicar espaçamento e alinhamento consistentes em todos os slides.",
                    "resposta": "Ajustar line spacing e alinhamento via aparência de texto e layout do Slide Mestre para uniformidade."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que caixa alta em todo o texto é a melhor prática para hierarquia.",
                    "correcao": "Incorreto: caixa alta não define hierarquia; usar tamanhos e estilos distintos."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual o tamanho mínimo indicado para legibilidade de títulos em projeção? A) 18 pontos; B) 24-32 pontos; C) 8 pontos.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O justificado excessivo de parágrafos em slides não afeta a legibilidade.",
                    "resposta": "Errado. O justificado excessivo pode gerar linhas irregulares e prejudicar a leitura."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar tipografia, alinhamento e composição adequados em slides, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-1-unidade-5",
        "titulo": "1.5 OneDrive e Colaboração",
        "topicos": [
          {
            "id": "modulo-1-unidade-5-topico-1",
            "titulo": "Sincronização, versionamento, compartilhamento e segurança",
            "subtopicos": [
              {
                "id": "modulo-1-unidade-5-topico-1-sub-1",
                "titulo": "OneDrive: sincronização, coautoria, histórico de versões, compartilhamento e permissões",
                "objetivoAprendizagem": "Aluno compreenderá sincronização, coautoria, histórico de versões, compartilhamento e permissões no OneDrive.",
                "conteudo": "OneDrive é o serviço de armazenamento em nuvem integrado ao M365. Sincronização (Sync): cliente OneDrive baixa cópia local dos arquivos e mantém sincronização bidirecional; alterações locais propagam para a nuvem e vice-versa. Coautoria: múltiplos usuários editam o mesmo arquivo (Word, Excel, PowerPoint) simultaneamente com indicações de presença (nome, cursor colorido) e resolução de conflitos (última alteração prevalece quando offline). Histórico de versões: cada arquivo armazena versões anteriores (período padrão e quantidade máxima conforme o plano/serviço — conferir na documentação oficial do produto); restauração não exclui versão atual — cria cópia restaurada. Compartilhamento: link com permissões (visualizar, editar, revisar, comentar); opções de expiração de link e bloqueio de download; compartilhamento externo requer cuidado com LGPD (ver Módulo 4.1, referência oficial verificada: Lei 13.709/2018 art. 46 — medidas de segurança). Permissões de arquivo/pasta: proprietário, coautor, revisor, visualizador; alteração de permissões é registrada no log de atividades (Audit Log no M365 Admin Center — não implementado neste simulador). Backup: OneDrive NÃO substitui backup corporativo completo; é sincronização, não backup imutável (ransomware pode propagar alterações maliciosas para nuvem). A recomendação oficial (sem inventar estatísticas) é manter backup separado (3-2-1: 3 cópias, 2 mídias, 1 offsite) conforme boas práticas de segurança, sem citar porcentagem não verificada.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Explicar a um colega por que uma planilha compartilhada em serviço de nuvem não cumpre o papel de backup do setor, ainda que apareça como salva na nuvem.",
                    "resposta": "A planilha continua colaborativa e sincronizada, e o setor passa a manter uma cópia independente fora do ambiente sincronizado, com teste periódico de restauração registrado."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa dar acesso de edição a um documento apenas a dois colegas e acesso de leitura a uma equipe inteira, sem que o link de leitura permita alterações.",
                    "resposta": "Dois usuários com edição e doze com leitura restrita à organização; o link não permite alteração e não concede acesso a pessoas de fora, conforme a política."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um colaborador afirma que, como o serviço mantém histórico de versões, qualquer arquivo excluído ou alterado pode ser recuperado integralmente a qualquer momento.",
                    "correcao": "A afirmação é incorreta: a recuperação funciona dentro da janela de retenção configurada, e itens fora dela exigem outra camada, como cópia administrativa ou backup independente."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) OneDrive é um backup imutável e protege automaticamente contra ransomware.",
                    "resposta": "Errado. OneDrive sincroniza; alterações (inclusive maliciosas) propagam. Backup imutável separado é necessário."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual a diferença entre sincronização e backup? A) Nenhuma; B) Sincronização = propagação bidirecional; backup = cópia independente e imutável; C) Sincronização é apenas download.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de compreender sincronização, coautoria, histórico de versões, compartilhamento e permissões no OneDrive, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-5-topico-1-sub-2",
                "titulo": "Arquivos locais versus somente online (Files On-Demand)",
                "objetivoAprendizagem": "Aluno diferenciar estados de arquivos locais, online e sob demanda no OneDrive.",
                "conteudo": "No OneDrive, os arquivos podem estar em diferentes estados: sincronizado (cópia local presente e em dia), somente online (arquivo presente na nuvem, acessível sob demanda sem cópia local — conceito de Files On-Demand) e não sincronizado. O conceito Files On-Demand permite que o cliente mantenha arquivos na nuvem e exponha disponibilidade offline via stub, sem baixar o arquivo integralmente; o acesso ocorre sob demanda. Estados de sincronização são exibidos no painel (tray) do cliente: atualização em andamento, erro, conflito. A configuração de pastas locais versus online é feita em OneDrive > Configurações > Conta > Escolher pastas. Em ambientes organizacionais, políticas podem restringir a disponibilidade. A escolha entre local, online e sob demanda orienta o gerenciamento de espaço e a sincronização; a política de sincronização (por exemplo, permitir somente online) pode ser definida pelo administrador.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um notebook com 256 GB de disco precisa acessar uma biblioteca de 400 GB na nuvem sem esgotar o armazenamento local.",
                    "resposta": "Disco local ocupado por uma fração da biblioteca, com as pastas frequentes disponíveis offline e o restante acessível por download sob demanda."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa liberar espaço em uma estação de trabalho sem perder acesso aos arquivos do projeto e sem interromper a sincronização das pastas de uso diário.",
                    "resposta": "Estação com espaço recuperado, pasta de uso diário íntegra localmente e pasta de projetos acessível por download sob demanda, sem perda de conteúdo."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que um arquivo marcado como somente online precisa ser baixado manualmente antes de ser aberto e editado, e que, por isso, o recurso serve apenas para arquivamento.",
                    "correcao": "A afirmação é incorreta: a abertura dispara a obtenção do conteúdo automaticamente, e a edição gera cópia local sincronizada, sem necessidade de download manual."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual estado representa arquivo presente na nuvem sem cópia local, acessível sob demanda? A) Sincronizado; B) Somente online (Files On-Demand); C) Não sincronizado.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O estado de sincronização é exibido apenas no aplicativo de arquivos local.",
                    "resposta": "Errado. O estado é exibido no painel/tray do cliente de sincronização."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de diferenciar estados de arquivos locais, online e sob demanda no OneDrive, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-5-topico-1-sub-3",
                "titulo": "Lixeira e restauração no OneDrive",
                "objetivoAprendizagem": "Aluno aplicar exclusão e restauração de arquivos na lixeira do OneDrive.",
                "conteudo": "A exclusão de arquivo no OneDrive (cliente ou web) move o arquivo para a lixeira associada ao serviço. A restauração de um arquivo excluído ocorre a partir da lixeira, na qual o arquivo permanece pelo período de retenção configurado pela organização/conta; o período exato deve ser verificado na documentação oficial do produto, pois varia conforme a configuração. Em ambientes corporativos, o SharePoint/OneDrive podem ter políticas de retenção. A lixeira não é o único mecanismo de recuperação: versões anteriores do arquivo podem existir no histórico de versões. A exclusão permanente ocorre após o término do período de retenção, conforme a política. A recuperação deve considerar o histórico de versões como camada adicional; a restauração de versão não equivale à exclusão definitiva enquanto houver retenção ativa.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Recuperar um contrato excluído por engano há dois dias, sabendo que o arquivo também existe em uma pasta compartilhada com a equipe.",
                    "resposta": "Contrato restaurado na pasta de origem, com acesso da equipe restabelecido e o registro da exclusão e da restauração preservado no histórico de atividades."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa recuperar a versão de ontem de um arquivo que foi sobrescrito com conteúdo errado, sem perder a versão atual que também contém trabalho válido.",
                    "resposta": "Arquivo com a base íntegra de ontem e os dois trechos válidos de hoje, com todas as versões anteriores ainda disponíveis no histórico."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que a lixeira do serviço mantém os arquivos para sempre e que, por isso, pode excluir itens antigos sem qualquer consequência.",
                    "correcao": "A afirmação é incorreta: a lixeira retém itens pelo prazo configurado, e o que está fora desse intervalo só pode ser recuperado por outras camadas, quando existirem."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Onde o usuário pode restaurar um arquivo excluído no OneDrive? A) Lixeira do serviço; B) Papel de parede; C) Cache do navegador.",
                    "resposta": "A"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A exclusão de arquivo no OneDrive apaga o arquivo imediatamente do serviço.",
                    "resposta": "Errado. A exclusão move o arquivo para a lixeira, com retenção conforme a política."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar exclusão e restauração de arquivos na lixeira do OneDrive, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-5-topico-1-sub-4",
                "titulo": "Conflitos de sincronização do cliente",
                "objetivoAprendizagem": "Aluno resolver conflitos de sincronização gerados pelo cliente OneDrive.",
                "conteudo": "Quando duas cópias editadas divergentemente (por exemplo, em dispositivos diferentes) precisam sincronizar, o cliente de sincronização pode gerar conflito, sinalizado no painel de sincronização (tray). O cliente cria uma cópia de arquivo em conflito (marcada) e mantém as versões separadas até resolução. A resolução pode ocorrer: abrindo a cópia de conflito, comparando as versões e mantendo a desejada; ou removendo a cópia conflito. Em ambientes com coautoria, a resolução preferida é a última alteração (regra do OneDrive). A prevenção: evitar edição simultânea sem coautoria; usar histórico de versões. A identificação do conflito pode ocorrer pelo painel de sincronização antes da resolução; a comparação entre versões deve considerar a origem (dispositivo) e a sequência temporal. A etapa de resolução deve registrar a versão mantida para fins de auditoria.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Resolver um conflito de sincronização gerado quando o mesmo arquivo foi editado em um notebook offline e em um computador do escritório.",
                    "resposta": "Versão consolidada única, sem cópia de conflito pendente, com os trechos escolhidos preservados e o histórico de versões registrando as duas edições."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa impedir que a equipe volte a gerar conflitos em um relatório editado por três pessoas ao longo do dia, sem proibir o trabalho offline.",
                    "resposta": "Relatório com seções atribuídas, edições offline restritas a trechos exclusivos e nenhum conflito pendente ao final do dia."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um usuário afirma que o conflito de sincronização se resolve sozinho, com a versão mais recente prevalecendo, e que não é necessário comparar as cópias.",
                    "correcao": "A afirmação é incorreta: fora da coautoria, o cliente sinaliza e preserva as duas versões, e o descarte sem comparação elimina trabalho sem aviso."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual o mecanismo para resolver conflito de sincronização? A) Ignorar automaticamente; B) Abrir/editar a cópia de conflito; C) Formatar o disco.",
                    "resposta": "B"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O painel de sincronização permite identificar arquivos em conflito.",
                    "resposta": "Certo."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de resolver conflitos de sincronização gerados pelo cliente OneDrive, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-5-topico-1-sub-5",
                "titulo": "Estudo de caso: perda de acesso, exclusão e recuperação",
                "objetivoAprendizagem": "Aluno aplicar estudos de caso de perda de acesso e recuperação no OneDrive.",
                "conteudo": "Estudo de caso: colaborador com conta desativada ou licença expirada perde acesso aos arquivos; a equipe deve considerar retenção, eDiscovery (administradores Enterprise) e backup. Estudo de caso: exclusão de arquivo relevante → lixeira → restauração conforme política; ou perda sem exclusão → versões anteriores. A recomendação de backup separado (3-2-1) permanece. O estudo de caso deve mapear causas da perda de acesso (conta, licença, colaborador) e definir responsabilidades de recuperação e retenção. O estudo deve também simular a recuperação em cadeia: exclusão, retenção, versão anterior e backup externo, avaliando tempo de recuperação e responsabilidades. O caso deve definir gatilhos de perda (inativação, expiração, desligamento) e o fluxo de retenção e recuperação associado. A avaliação deve incluir teste de restauração e critérios de sucesso mensuráveis.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Planejar a recuperação dos arquivos de um colaborador desligado cuja conta será removida, garantindo que a equipe continue com os documentos do setor.",
                    "resposta": "Documentos do setor preservados em conta ativa, com registro de quem transferiu e para onde, e a conta desligada pode ser removida sem perda de conteúdo necessário."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa recuperar arquivos de um projeto cujo proprietário perdeu a licença, sem que a equipe tenha cópia local dos documentos.",
                    "resposta": "Arquivos do projeto sob titularidade de conta ativa, acessíveis aos três integrantes, com registro da operação e sem dependência da licença do antigo proprietário."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um gestor afirma que a sincronização em nuvem já garante a recuperação dos arquivos do setor em caso de exclusão em massa e que, por isso, não é necessário manter cópia separada nem plano de recuperação.",
                    "correcao": "A afirmação é incorreta: a sincronização propaga a exclusão, e a recuperação fica limitada às janelas de retenção do serviço; itens fora delas exigem cópia independente, que não existia."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "Em perda de acesso por conta desativada, qual recurso ajuda administradores Enterprise? A) eDiscovery; B) Power BI; C) Forms.",
                    "resposta": "A"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A lixeira do OneDrive mantém arquivos para sempre.",
                    "resposta": "Errado. O período de retenção varia conforme a configuração da organização/conta."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar estudos de caso de perda de acesso e recuperação no OneDrive, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "modulo-1-unidade-5-topico-1-sub-6",
                "titulo": "Segurança de arquivos organizacionais",
                "objetivoAprendizagem": "Aluno aplicar segurança de arquivos (rotulagem, DLP, controle de dispositivo) no contexto organizacional.",
                "conteudo": "Arquivos organizacionais podem receber rotulagem de confidencialidade (taxonomia de sensível/confidencial/Interno — vocabulário varia), controle via Microsoft Purview (DLP — Data Loss Prevention) e controle de dispositivo (Intune). Essas medidas dependem do plano/licença contratado; em planos sem o recurso, a organização deve adotar outras salvaguardas. A segurança de arquivos organizacionais complementa permissões e compartilhamento. A implementação depende de controle centralizado (Microsoft 365 admin) e deve estar atrelada a políticas de retenção e auditoria. A avaliação da eficácia deve considerar periodicidade de revisão, testes de recuperação e conformidade com a legislação aplicável. A segurança deve ser avaliada em conjunto com os controles de acesso e a rotulagem vigente, com registro de evidências para auditoria. A periodicidade de revisão e os testes de recuperação devem ser registrados em plano de ação.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Definir como impedir que uma planilha com dados de titulares seja enviada por e-mail para fora da organização, sem depender apenas de orientação verbal à equipe.",
                    "resposta": "Tentativa de envio externo da planilha bloqueada pela política, com aviso ao usuário e registro em log, mantendo o acesso aos quarenta colaboradores autorizados."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O aluno precisa adequar uma pasta departamental para que documentos com dados pessoais recebam classificação e restrição de compartilhamento externo por padrão.",
                    "resposta": "Biblioteca com classificação padrão, acervo revisado, compartilhamento externo bloqueado para o conteúdo classificado e registro do teste de verificação."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Um analista afirma que a política de prevenção à perda de dados está disponível em qualquer plano do serviço e que, portanto, basta ligá-la para que todos os arquivos da organização fiquem protegidos.",
                    "correcao": "A afirmação é incorreta em dois pontos: a disponibilidade depende da licença e a eficácia depende de classificação e política configuradas; ligar o recurso sem esses elementos não protege o acervo."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "multipla",
                    "enunciado": "A segurança de arquivos organizacionais (rotulagem/DLP/controle de dispositivo) depende de: A) sempre do plano; B) apenas do usuário; C) nunca do plano.",
                    "resposta": "A"
                  },
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O controle de dispositivo para arquivos organizacionais é independente do plano.",
                    "resposta": "Errado. Depende do plano/licença contratado."
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar segurança de arquivos (rotulagem, DLP, controle de dispositivo) no contexto organizacional, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      }
    ]
  }
};
