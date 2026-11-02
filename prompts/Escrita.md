PROMPT MESTRE — APOSTILA WEB DEFINITIVA DE TECNOLOGIA DA INFORMAÇÃO, DADOS E INTELIGÊNCIA ARTIFICIAL

1. PAPEL, RESPONSABILIDADE E MISSÃO

Atue simultaneamente como:

- Arquiteto de Software Frontend Sênior.
- Desenvolvedor Fullstack especialista em Single-Page Applications (SPA), JavaScript, HTML5, CSS3 e acessibilidade.
- Designer Instrucional Sênior, especialista em aprendizagem progressiva, aprendizagem ativa, recuperação de memória e repetição espaçada.
- Professor de Tecnologia da Informação, redes, segurança, produtividade digital, inteligência artificial, engenharia e visualização de dados.
- Especialista em concursos públicos brasileiros, com domínio dos estilos de cobrança de CESPE/CEBRASPE, FGV, FCC e VUNESP.
- Revisor técnico responsável pela precisão conceitual, atualização normativa, rastreabilidade das fontes e validação dos exemplos.
- Engenheiro de qualidade responsável por testes funcionais, acessibilidade, compatibilidade, persistência e integridade dos dados.

Sua missão é projetar, implementar, testar e entregar uma Apostila Web Interativa Definitiva de Tecnologia da Informação e Dados, com profundidade de livro-texto técnico, clareza de material didático profissional e rigor de preparação para concursos públicos.

O produto final deverá funcionar como o ambiente autossuficiente de estudos do aluno. A pessoa deverá conseguir aprender os conceitos, compreender os fundamentos, praticar, revisar, testar conhecimentos, identificar lacunas e acompanhar sua evolução sem precisar procurar explicações complementares em outros sites.

As referências externas poderão ser utilizadas para verificar informações e consultar documentação oficial, mas o conteúdo didático essencial deverá estar integralmente incorporado ao projeto.

Não entregue apenas uma interface, um protótipo, um índice de assuntos, um resumo de apostila ou um conjunto de cartões com perguntas e respostas. Entregue um sistema educacional completo, com conteúdo substancial, ferramentas funcionais e critérios verificáveis de qualidade.

2. PRINCÍPIO FUNDAMENTAL: APRENDIZAGEM COMPLETA, NÃO APENAS COBERTURA DE ASSUNTOS

A simples menção de um conceito não significa que ele foi ensinado.

Para considerar um assunto estudado, o conteúdo correspondente deverá permitir que o aluno:

1. Defina o conceito com precisão.
2. Explique por que ele existe e qual problema resolve.
3. Compreenda seus fundamentos e mecanismos de funcionamento.
4. Identifique seus componentes, etapas, propriedades e dependências.
5. Diferencie conceitos semelhantes que costumam ser confundidos.
6. Reconheça vantagens, desvantagens, limitações, exceções e riscos.
7. Execute procedimentos ou resolva problemas relacionados.
8. Interprete exemplos, tabelas, fórmulas, comandos, diagramas e resultados.
9. Identifique erros comuns e armadilhas de provas.
10. Aplique o conhecimento em situações novas.
11. Justifique tecnicamente suas conclusões.
12. Demonstre domínio em exercícios de diferentes níveis de dificuldade.

Regra de completude: nenhum tópico será considerado concluído apenas porque possui título, parágrafo introdutório, imagem, tabela ou questão de memorização.

O conteúdo deve avançar da compreensão inicial até a aplicação e a análise crítica.

Não utilize frases genéricas para substituir conteúdo, como:

- “Existem outros métodos.”
- “Entre outros recursos.”
- “Consulte a documentação para saber mais.”
- “Este tópico será aprofundado posteriormente.”
- “Adicione novos exemplos conforme necessário.”

Quando houver conteúdo relevante dentro do escopo definido, explique-o efetivamente. Quando houver limites reais de escopo, declare-os com precisão e indique quais assuntos não fazem parte do material.

Não alegue cobertura integral de uma disciplina sem demonstrar essa cobertura por meio de um inventário curricular verificável.

3. ESCOPO TÉCNICO E REGRAS DE IMPLEMENTAÇÃO

3.1 Arquitetura obrigatória

A aplicação deverá utilizar:

- HTML5 semântico.
- CSS3 responsivo.
- JavaScript nativo, organizado em módulos quando a arquitetura de entrega permitir.
- IndexedDB para grandes volumes de conteúdo, questões, histórico e dados de aprendizagem, quando necessário.
- localStorage para preferências simples e dados pequenos.
- Service Worker e manifesto PWA opcionais, preparados para evolução offline.
- SVG para ilustrações e diagramas vetoriais.
- Bibliotecas de terceiros somente quando houver justificativa funcional e estratégia de contingência.

A arquitetura deverá priorizar legibilidade, manutenibilidade, desempenho, segurança e independência de serviços externos.

3.2 Execução local

A entrega deverá funcionar de acordo com a seguinte prioridade:

Modo A — abertura direta: o aluno abre "index.html" em um navegador moderno, sem instalar Node.js, iniciar um servidor ou executar build.

Modo B — servidor estático opcional: quando necessário para recursos específicos, como módulos ES, Service Worker ou determinados mecanismos de armazenamento, disponibilize um servidor local simples e instruções completas de execução.

O Modo A é o requisito principal. Nenhum recurso essencial de aprendizagem poderá depender exclusivamente de um servidor, API remota, chave de acesso, assinatura ou conexão externa.

Antes de escolher uma biblioteca, verifique se ela funciona no contexto "file://". Se não funcionar, forneça uma alternativa local real, sem apresentar uma funcionalidade indisponível como operacional.

Não afirme que uma funcionalidade funciona em abertura direta sem testá-la.

3.3 Organização do código

Utilize uma estrutura clara, preferencialmente com arquivos como:

- "index.html"
- "assets/css/styles.css"
- "assets/js/app.js"
- "assets/js/navigation.js"
- "assets/js/search.js"
- "assets/js/progress.js"
- "assets/js/flashcards.js"
- "assets/js/quiz-engine.js"
- "assets/js/simulators.js"
- "assets/js/charts.js"
- "assets/js/storage.js"
- "assets/js/accessibility.js"
- "assets/data/curriculum.js"
- "assets/data/questions.js"
- "assets/data/flashcards.js"
- "assets/data/references.js"
- "assets/images/"
- "manifest.webmanifest"
- "service-worker.js", quando aplicável.

Essa estrutura é uma referência arquitetural, não uma obrigação de criar arquivos desnecessários. Caso a abertura direta exija uma distribuição diferente, preserve a modularidade lógica e explique a decisão.

Não coloque todo o sistema em um único arquivo monolítico apenas para facilitar a entrega. Se utilizar um HTML autônomo, organize claramente as seções, os dados e as funções.

Não omita arquivos essenciais, não invente dependências e não entregue código parcial.

4. INVENTÁRIO CURRICULAR E RASTREABILIDADE

Antes de implementar a interface, decomponha todo o conteúdo programático em uma árvore hierárquica:

Disciplina → módulo → unidade → tópico → subtópico → objetivo de aprendizagem → conteúdo → exemplo → exercício → critério de domínio.

Cada subtópico deverá possuir um identificador único e estável.

Mantenha um inventário curricular legível por máquina, permitindo verificar:

- Quantidade de tópicos e subtópicos previstos.
- Objetivos de aprendizagem atendidos.
- Conteúdo didático associado.
- Exemplos resolvidos disponíveis.
- Exercícios e questões vinculados.
- Flashcards associados.
- Recursos visuais presentes.
- Fontes de referência.
- Testes realizados.
- Estado de implementação e validação.

Crie um painel interno de cobertura curricular para detectar assuntos ausentes, incompletos ou sem exercícios.

Não marque automaticamente um tópico como completo porque seus componentes existem no HTML. A conclusão curricular deverá considerar a presença e a qualidade mínima dos componentes exigidos.

Quando uma informação técnica ou normativa precisar de atualização, identifique a data de verificação e a fonte correspondente.

5. TEMPLATE DIDÁTICO OBRIGATÓRIO PARA CADA UNIDADE

Cada unidade de estudo deverá conter, sempre que aplicável ao assunto, os seguintes elementos.

5.1 Orientação estratégica

- O que será aprendido.
- Por que o conhecimento é importante.
- Pré-requisitos necessários.
- Objetivos observáveis.
- Competências desenvolvidas.
- Grau de dificuldade.
- Relação com outros tópicos.
- Relevância para concursos, sem inventar estatísticas de incidência.

Quando não houver dados estatísticos confiáveis de provas anteriores, utilize uma classificação qualitativa de relevância e explique que ela representa uma estimativa pedagógica, não uma frequência estatística comprovada.

5.2 Fundamentação conceitual

Explique detalhadamente:

- Definições formais e intuitivas.
- Origem e motivação do conceito.
- Problema que ele resolve.
- Princípios fundamentais.
- Vocabulário técnico.
- Componentes e arquitetura.
- Funcionamento interno.
- Etapas e fluxos operacionais.
- Relações de causa e efeito.
- Propriedades e invariantes.
- Exemplos e contraexemplos.
- Limitações e condições de validade.

Introduza cada termo técnico antes de utilizá-lo de maneira recorrente.

5.3 Progressão de dificuldade

Nível iniciante: linguagem acessível, analogias, exemplos cotidianos e eliminação de ambiguidades.

Nível intermediário: mecanismos internos, procedimentos, configurações, fórmulas, comparações, cálculos e análise de resultados.

Nível avançado: exceções, casos-limite, arquitetura, decisões técnicas, limitações, implicações de segurança, interoperabilidade e cenários complexos.

Nível especialista: questões integradoras, interpretação crítica, diagnóstico de erros, análise de alternativas e situações que exijam combinar vários conceitos.

Não reduza os níveis avançados a uma lista de termos técnicos sem explicação.

5.4 Exemplos resolvidos

Cada unidade deverá conter, no mínimo:

- Três exemplos resolvidos de natureza distinta.
- Um exemplo introdutório.
- Um exemplo de aplicação prática.
- Um exemplo avançado ou de interpretação de erro.

Para cada exemplo, apresente:

1. Problema proposto.
2. Dados disponíveis.
3. Conceitos aplicáveis.
4. Estratégia de resolução.
5. Execução passo a passo.
6. Resultado esperado.
7. Justificativa técnica.
8. Erros frequentes.
9. Uma variação do problema para testar transferência de aprendizagem.

Quando o assunto envolver cálculos, apresente fórmulas, unidades, substituição dos valores e resultado. Quando envolver comandos ou programação, apresente a entrada, a execução e a saída esperada.

5.5 Comparações e distinções críticas

Inclua tabelas sempre que existirem conceitos próximos, concorrentes ou frequentemente confundidos.

Cada comparação deverá informar, conforme aplicável:

- Definição.
- Finalidade.
- Funcionamento.
- Requisitos.
- Vantagens.
- Limitações.
- Riscos.
- Exemplos.
- Situações de uso.
- Diferenças que alteram o gabarito de uma questão.

5.6 Erros, exceções e pegadinhas

Crie uma seção específica para:

- Generalizações falsas.
- Termos absolutos que tornam alternativas incorretas.
- Trocas de conceitos semelhantes.
- Exceções importantes.
- Condições necessárias e suficientes.
- Confusão entre comportamento padrão e configuração opcional.
- Diferenças entre especificação técnica e implementação comercial.
- Diferenças entre a regra jurídica e sua interpretação prática.

Para cada armadilha, mostre uma afirmação equivocada, explique por que está errada e apresente uma versão tecnicamente correta.

5.7 Resumo estruturado

O resumo deverá permitir revisão rápida sem substituir a leitura completa.

Inclua:

- Conceitos essenciais.
- Regras e fórmulas.
- Comparações críticas.
- Fluxos resumidos.
- Exceções.
- Palavras-chave.
- Checklist de domínio.

5.8 Verificação de aprendizagem

Finalize cada unidade com uma avaliação de recuperação ativa e aplicação.

O aluno deverá demonstrar o conhecimento sem depender de consultar imediatamente a explicação.

---

6. CONTEÚDO PROGRAMÁTICO OBRIGATÓRIO

O inventário deverá contemplar integralmente os oito módulos abaixo. Expanda cada item em todos os subtópicos necessários para ensinar os fundamentos, os procedimentos e as aplicações, sem se limitar às palavras usadas no título.

MÓDULO 1 — MICROSOFT 365 E APLICAÇÕES DE ESCRITÓRIO

1.1 Ecossistema Microsoft 365

- Diferenças entre Microsoft 365, Office LTSC e versões perpétuas do Office.
- Aplicações Web, desktop e mobile.
- Licenciamento e variações de recursos, sem generalizar funcionalidades que dependem do plano.
- Armazenamento local e em nuvem.
- Integração entre aplicações.
- Salvamento automático, sincronização, colaboração simultânea e histórico de versões.
- Contas pessoais e organizacionais.
- Permissões, compartilhamento, privacidade e recuperação de arquivos.

1.2 Microsoft Word

- Interface, documentos, modelos e formatos.
- Formatação direta versus estilos.
- Parágrafos, recuos, tabulações, espaçamento e paginação.
- Listas, listas multinível e numeração automática.
- Cabeçalhos, rodapés, notas e numeração de páginas.
- Quebras de página e de seção.
- Orientação, margens e configurações por seção.
- Sumários automáticos, estilos de títulos e atualização de campos.
- Referências cruzadas, legendas, índices e citações.
- Tabelas, imagens, formas, objetos e disposição de texto.
- Revisão, comentários, controle de alterações e comparação de documentos.
- Proteção, restrições de edição e permissões.
- Acessibilidade, verificação ortográfica e exportação para PDF.
- Compatibilidade de formatos e problemas de formatação.
- Exemplos resolvidos de criação e correção de documentos complexos.

1.3 Microsoft Excel

- Pasta de trabalho, planilhas, células, intervalos e tabelas.
- Referências relativas, absolutas e mistas.
- Operadores aritméticos, relacionais, lógicos e de texto.
- Precedência de operadores.
- Tipos de dados, datas, horários e formatos numéricos.
- Funções matemáticas, estatísticas, lógicas, condicionais, textuais e de data.
- "SE", "SES", "E", "OU", "NÃO", "SEERRO", "CONT.SE", "CONT.SES", "SOMASE", "SOMASES", "MÉDIA", "MÉDIASE", "MÁXIMO", "MÍNIMO", "CONT.VALORES", entre outras pertinentes.
- Pesquisa e referência: "PROCV", "PROCH", "PROCX", "ÍNDICE", "CORRESP".
- Diferenças entre correspondência exata e aproximada.
- Tratamento de células vazias, erros e dados inconsistentes.
- Fórmulas aninhadas e avaliação passo a passo.
- Classificação, filtros, validação de dados e formatação condicional.
- Tabelas estruturadas e referências estruturadas.
- Gráficos, tabelas dinâmicas, campos, agregações e segmentações.
- Importação, limpeza e transformação de dados com Power Query.
- Proteção de planilhas, pastas de trabalho e limitações de segurança.
- Desempenho, rastreamento de dependências e depuração de fórmulas.
- Compatibilidade entre funções de diferentes versões.
- Simulador de planilha capaz de calcular resultados reais para um conjunto explicitamente documentado de funções.

As fórmulas deverão utilizar a sintaxe compatível com o idioma e a versão declarados. Diferencie nomes localizados, separadores regionais e diferenças entre versões.

Não apresente um simulador limitado a comparar strings como se fosse um mecanismo completo do Excel. Documente suas funções suportadas e rejeite entradas inválidas com mensagens úteis.

1.4 Microsoft PowerPoint

- Apresentações, layouts e temas.
- Slide Mestre e hierarquia de layouts.
- Tipografia, alinhamento, contraste e composição visual.
- Inserção de mídia e objetos.
- Transições versus animações.
- Ordem, duração, gatilhos e sequência de efeitos.
- Modos de apresentação, notas e exibição do apresentador.
- Compatibilidade de fontes, mídia e formatos.
- Acessibilidade.
- Exportação, empacotamento e preparação para apresentação offline.
- Erros comuns de organização e legibilidade.

1.5 OneDrive e colaboração

- Arquivos sob demanda e sincronização.
- Arquivos locais versus arquivos somente online.
- Versionamento, restauração e lixeira.
- Compartilhamento por link ou pessoa específica.
- Permissões de leitura e edição.
- Expiração e restrições de compartilhamento, quando suportadas pelo plano.
- Conflitos de sincronização.
- Segurança de arquivos organizacionais.
- Diferenças entre OneDrive, SharePoint e armazenamento local.
- Estudos de caso de perda de acesso, exclusão e recuperação.

MÓDULO 2 — REDES DE COMPUTADORES

2.1 Fundamentos

- Conceitos de rede, nós, enlaces, clientes e servidores.
- LAN, WLAN, MAN, WAN, PAN, intranet e extranet.
- Topologias físicas e lógicas.
- Comutação, roteamento e encaminhamento.
- Unicast, broadcast, multicast e anycast.
- Largura de banda, throughput, latência, jitter e perda de pacotes.
- Comutação por circuitos e por pacotes.
- Ethernet, Wi-Fi e meios de transmissão.
- Endereçamento físico e lógico.

2.2 Modelos OSI e TCP/IP

- Camadas, funções, PDU e encapsulamento.
- Comunicação entre camadas e dispositivos.
- Comparação entre os modelos.
- Protocolos e serviços associados.
- Diferença entre protocolo, serviço, porta e aplicação.
- Exemplos de comunicação completa entre cliente e servidor.
- Limitações da correspondência entre camadas dos dois modelos.

2.3 Protocolos

Explique, de maneira individual e comparativa:

- IPv4 e IPv6.
- TCP e UDP.
- HTTP e HTTPS.
- DNS.
- DHCP.
- FTP, FTPS e SFTP.
- SSH.
- ICMP.
- ARP e Neighbor Discovery.
- SMTP, POP3 e IMAP no contexto de redes.
- TLS.
- NAT e PAT.
- Proxy e VPN.

Para cada protocolo, explique finalidade, fluxo, requisitos, comportamento, portas padrão quando aplicáveis, segurança, limitações e exemplos.

2.4 Endereçamento e sub-redes

- Estrutura IPv4.
- Endereços públicos, privados, loopback e link-local.
- Máscaras de sub-rede.
- Notação CIDR.
- Endereço de rede e broadcast.
- Intervalos de hosts.
- Cálculos de quantidade de sub-redes e hosts.
- VLSM e sumarização de rotas em nível compatível com o escopo.
- IPv6: representação, abreviação, prefixos e tipos de endereço.
- Exercícios numéricos passo a passo.
- Pegadinhas de endereçamento.

2.5 Diagnóstico de redes

- "ping", "traceroute"/"tracert", "ipconfig"/"ifconfig", "ip", "netstat"/"ss", "nslookup" e "dig".
- Finalidade, sintaxe, exemplos, interpretação de saída e limitações.
- Diferenças entre falha de DNS, conectividade, roteamento e aplicação.
- Diagnóstico estruturado por camadas.
- Cenários simulados de falhas.
- Interpretação de mensagens de erro.

MÓDULO 3 — COMUNICAÇÃO E COLABORAÇÃO

- Correio eletrônico: SMTP, POP3 e IMAP.
- Portas usuais, criptografia e diferenças entre TLS implícito e STARTTLS.
- Webmail versus clientes locais.
- Cabeçalhos, destinatários, anexos, listas, cópias e cópias ocultas.
- Spam, phishing e falsificação de remetente.
- Calendários, convites, reuniões e permissões.
- Microsoft Teams, Google Meet e Zoom.
- Reuniões síncronas e colaboração assíncrona.
- Controle de participantes, lobby, autenticação, gravação e compartilhamento de tela.
- Políticas de gravação, consentimento, retenção e proteção de informações.
- Etiqueta digital, acessibilidade e comunicação profissional.
- Estudos de caso de reuniões inseguras e exposição acidental de dados.

As características específicas de cada plataforma deverão ser verificadas em documentação oficial e não deverão ser generalizadas entre planos ou versões.

MÓDULO 4 — SEGURANÇA DA INFORMAÇÃO E GOVERNANÇA DIGITAL

4.1 Fundamentos de segurança

- Confidencialidade, integridade e disponibilidade.
- Autenticidade, responsabilização e não repúdio.
- Ativos, ameaças, vulnerabilidades, riscos e impactos.
- Controles preventivos, detectivos, corretivos e compensatórios.
- Autenticação, autorização, auditoria e princípio do menor privilégio.
- MFA, senhas, gerenciadores e autenticação resistente a phishing.
- Criptografia simétrica e assimétrica, hashes, assinaturas e certificados.
- Backup completo, incremental e diferencial.
- Estratégia 3-2-1, cópias imutáveis e testes de restauração.
- Continuidade de negócios e recuperação de desastres.
- RPO, RTO e análise de impacto.

4.2 Malwares e ferramentas defensivas

- Vírus, worms, trojans, ransomware, spyware, adware, rootkits e botnets.
- Vetores de infecção, propagação, persistência e impacto.
- Antivírus, EDR, antimalware, firewalls e filtragem de tráfego.
- Firewall de pacotes, stateful inspection e firewall de aplicação.
- IDS e IPS.
- Segmentação de rede, atualização, hardening e gestão de vulnerabilidades.
- Defesa em profundidade.
- Monitoramento, registros e resposta a incidentes.

4.3 Ameaças e ataques

- Phishing, spear phishing, whaling e pharming.
- Engenharia social, pretexting, baiting e fraude por impersonação.
- Força bruta, password spraying e credential stuffing.
- DoS, DDoS, interceptação de comunicações e ataques de intermediário.
- Roubo de identidade, vazamento de dados e comprometimento de contas.
- Indicadores de comprometimento.
- Análise segura de mensagens, links e anexos.
- Simulador defensivo de triagem de phishing, com justificativa de cada indicador.
- Estudos de caso e procedimentos de resposta.

Não implemente ferramentas que executem ataques reais. Os simuladores deverão utilizar dados fictícios e ambientes isolados.

4.4 Legislação e conformidade

- LGPD — Lei nº 13.709/2018.
- Marco Civil da Internet — Lei nº 12.965/2014 e regulamentação pertinente.
- Conceitos de controlador, operador, titular, tratamento, bases legais e direitos.
- Princípios da LGPD, segurança e prevenção.
- Incidentes de segurança e responsabilidades.
- Limites entre obrigação legal, orientação técnica e boa prática.
- Estudos de caso com identificação dos dispositivos pertinentes.

Não invente artigos de lei, prazos, obrigações ou sanções. Cite os dispositivos específicos utilizados e verifique sua redação atual em fonte oficial.

MÓDULO 5 — INTELIGÊNCIA ARTIFICIAL

5.1 Fundamentos de IA

- Inteligência artificial, sistemas baseados em regras, aprendizado de máquina e aprendizado profundo.
- Dados, atributos, modelos, parâmetros e inferência.
- Treinamento, validação e teste.
- Generalização, overfitting e underfitting.
- Viés, variância, explicabilidade e limitações.
- Avaliação de desempenho e qualidade.

5.2 Aprendizado de máquina

- Aprendizado supervisionado, não supervisionado e por reforço.
- Classificação e regressão.
- Agrupamento e redução de dimensionalidade.
- Rotulagem, atributos, variáveis-alvo e engenharia de atributos.
- Separação entre treino, validação e teste.
- Vazamento de dados.
- Métricas de classificação: precisão, recall, especificidade, F1 e matriz de confusão.
- Métricas de regressão apropriadas ao escopo.
- Desbalanceamento de classes.
- Exemplos numéricos e interpretação de resultados.

5.3 IA generativa e LLMs

- Modelos generativos versus discriminativos.
- Tokens, embeddings, janelas de contexto e geração probabilística.
- Arquitetura Transformer, atenção e mecanismos de previsão de tokens.
- Treinamento, ajuste fino, alinhamento e inferência em visão conceitual.
- Modelos de difusão para geração de imagens.
- Alucinações, limites de contexto e incerteza.
- RAG, embeddings e bases vetoriais em nível introdutório e intermediário.
- Agentes, ferramentas e fluxos com supervisão.
- Privacidade, segurança, direitos autorais e avaliação de resultados.
- Aplicações reais no setor público e privado, distinguindo exemplos comprovados de hipóteses ilustrativas.

5.4 Engenharia de prompts

- Persona, contexto, tarefa, restrições e formato de saída.
- Delimitação de entradas e saídas.
- Exemplos zero-shot e few-shot.
- Decomposição de tarefas e verificação de resultados.
- Uso de formatos estruturados.
- Critérios de avaliação e iteração.
- Injeção de prompts e tratamento de entradas não confiáveis.
- Proteção de informações sensíveis.
- Limites das técnicas de prompting.
- Laboratório interativo de prompts, com comparação entre versões, critérios explícitos e feedback reproduzível.

Explique raciocínio estruturado e decomposição de tarefas sem exigir a exposição de cadeias privadas de raciocínio. Priorize justificativas verificáveis, passos de cálculo e evidências de saída.

MÓDULO 6 — ÉTICA E RESPONSABILIDADE DIGITAL NO SERVIÇO PÚBLICO

- Princípios constitucionais da Administração Pública.
- Legalidade, impessoalidade, moralidade, publicidade e eficiência.
- Aplicação desses princípios a sistemas e serviços digitais.
- Lei de Acesso à Informação — Lei nº 12.527/2011.
- Lei de Governo Digital — Lei nº 14.129/2021.
- Transparência ativa e passiva.
- Proteção de dados pessoais e informações legalmente protegidas.
- Segurança, rastreabilidade e responsabilização.
- Uso institucional de redes sociais.
- Conflitos de interesse, conduta e netiqueta.
- Acessibilidade e inclusão digital.
- Automação de decisões e supervisão humana.
- Estudos de caso envolvendo publicação indevida, vazamento, uso de ferramentas de IA e transparência administrativa.
- Resolução de questões com análise dos princípios e dispositivos aplicáveis.

Diferencie publicidade administrativa de divulgação irrestrita de dados pessoais. Apresente os limites e as exceções pertinentes.

MÓDULO 7 — FUNDAMENTOS E ENGENHARIA DE DADOS

- Dado, informação, conhecimento e sabedoria: modelo DIKW e suas limitações conceituais.
- Dados estruturados, semiestruturados e não estruturados.
- Dados qualitativos e quantitativos.
- Dados nominais, ordinais, discretos e contínuos.
- Metadados, linhagem, catálogo e ciclo de vida dos dados.
- Qualidade: acurácia, completude, consistência, validade, unicidade e tempestividade.
- Coleta, integração, armazenamento, transformação e consumo.
- ETL e ELT.
- Limpeza e padronização.
- Valores ausentes e estratégias de tratamento.
- Duplicidades, inconsistências e erros de tipo.
- Normalização estatística e normalização de bancos de dados: diferencie explicitamente os dois sentidos.
- Agregação, agrupamento e deduplicação.
- Anonimização, pseudonimização e riscos de reidentificação.
- Governança, acesso, minimização e proteção de dados.
- Exemplos de transformação de conjuntos de dados antes e depois.
- Exercícios com cálculos, tabelas e interpretação de problemas de qualidade.

MÓDULO 8 — VISUALIZAÇÃO, ANÁLISE E STORYTELLING COM DADOS

8.1 Fundamentos visuais

- Propósito da visualização.
- Percepção visual e princípios da Gestalt.
- Proximidade, similaridade, continuidade, fechamento e figura-fundo.
- Cores, contraste, escalas, hierarquia visual e acessibilidade.
- Ruído visual, chartjunk e integridade gráfica.
- Eixos, rótulos, unidades, legendas e fontes.
- Escalas lineares, logarítmicas e eixos truncados.
- Escolha de gráficos conforme o objetivo analítico.

8.2 Gráficos estatísticos

Ensine, no mínimo, histograma, gráfico de linhas, barras/colunas, dispersão e box plot.

Para cada tipo, explique:

- Definição e objetivo.
- Tipo de dado adequado.
- Como construir e interpretar.
- Exemplo numérico completo.
- Vantagens e limitações.
- Quando usar e quando evitar.
- Erros frequentes.
- Pegadinhas de interpretação em concursos.
- Situações nas quais outro gráfico é mais adequado.

No histograma, explique classes, intervalos, frequências, densidade e efeito da escolha dos intervalos.

Em linhas, explique ordenação temporal, continuidade e interpretação de tendências.

Em barras, explique ordenação, comparação, linha de base e risco de escalas enganosas.

Em dispersão, explique associação, correlação, outliers, variáveis ocultas e a diferença entre correlação e causalidade.

Em box plot, explique mediana, quartis, intervalo interquartil, bigodes, convenções de outliers e diferenças entre implementações.

8.3 Estatística aplicada à leitura de gráficos

- Média, mediana, moda e medidas de dispersão.
- Amplitude, variância e desvio padrão.
- Quartis e percentis.
- Distribuições, assimetria e valores extremos.
- Correlação e causalidade.
- Amostragem e vieses.
- Incerteza, agregação e interpretação contextual.
- Exercícios de leitura crítica e detecção de conclusões indevidas.

8.4 Ferramentas

- Power BI, Power Query e fundamentos de DAX.
- Tableau Desktop e Tableau Prep.
- Looker Studio.
- Modelagem analítica básica.
- Dimensões, medidas, filtros e agregações.
- Comparação de recursos, limitações, integração, governança e cenários de uso.
- Diferenças entre recursos gratuitos, comerciais e dependentes de licença.
- Exemplos didáticos que não dependam de contas comerciais.

8.5 Storytelling com dados

- Contexto, conflito, descoberta e recomendação.
- Definição do público e da decisão a apoiar.
- Seleção de métricas relevantes.
- Construção da narrativa.
- Comunicação de incertezas.
- Integridade e transparência.
- Painéis para gestão pública e privada.
- Estudo de caso com dados fictícios, análise, gráficos e recomendação fundamentada.

---

7. SIMULADORES E LABORATÓRIOS FUNCIONAIS

Implemente laboratórios que permitam ao aluno executar ações e observar resultados reais dentro do escopo declarado.

7.1 Excel

- Conjunto de dados editável.
- Fórmulas executáveis.
- Recálculo após alteração dos valores.
- Tratamento de erros.
- Comparação entre funções.
- Exercícios com entradas, resultados esperados e explicações.

7.2 Redes

- Simulador de resolução de DNS.
- Simulador de diagnóstico por camadas.
- Calculadora IPv4/CIDR para sub-redes.
- Visualização do encapsulamento de pacotes.
- Simulação de rotas, portas e falhas.
- Interpretação de comandos e saídas previamente definidas.

Deixe explícito que os laboratórios são simulações didáticas e não executam comandos reais no sistema operacional.

7.3 Segurança

- Triagem de mensagens suspeitas.
- Identificação de indicadores de phishing.
- Classificação de riscos.
- Simulação de políticas de backup.
- Exercícios de autenticação, autorização e privilégio mínimo.
- Feedback com justificativas para cada decisão.

7.4 Engenharia de prompts e IA

- Editor de prompts.
- Campos para contexto, objetivo, restrições e formato.
- Comparação entre prompts.
- Avaliação por critérios verificáveis.
- Exemplos de entradas e saídas predefinidas.
- Demonstração de ambiguidade e melhorias.
- Simulação local sem API externa.

Não apresente respostas predefinidas como geração real de um modelo de IA. Se houver integração real com um modelo externo, ela deverá ser opcional, identificada e protegida por configuração segura.

7.5 Dados e visualização

- Conjunto de dados editável.
- Filtros, agregações e estatísticas básicas.
- Histogramas.
- Gráficos de linha.
- Barras e colunas.
- Dispersão.
- Box plot.
- Manipulação de parâmetros.
- Explicação dinâmica de como os dados alteram a interpretação.

Os gráficos deverão utilizar cálculos consistentes com os dados apresentados. Não desenhe apenas formas decorativas que não correspondam aos valores.

---

8. SISTEMA DE GRÁFICOS E RECURSOS VISUAIS

Os cinco tipos de gráfico obrigatórios são histograma, linha, barras/colunas, dispersão e box plot.

Para cada gráfico, forneça:

- Dados de origem identificáveis.
- Controles de parâmetros relevantes.
- Atualização real após interação.
- Legendas, rótulos e unidades.
- Texto alternativo ou descrição acessível.
- Explicação dos resultados.
- Opção de restaurar os valores iniciais.

Use Chart.js, Apache ECharts ou implementação própria quando tecnicamente apropriado. Para o box plot, confirme suporte real da biblioteca escolhida ou implemente corretamente o cálculo e a representação.

Bibliotecas externas não deverão ser consideradas disponíveis apenas porque existe uma tag "<script>". Garanta uma estratégia de carregamento, contingência e indicação clara de indisponibilidade.

8.1 Diagramas e infográficos

Cada tópico e subtópico relevante deverá apresentar suporte visual próprio, sem transformar a página em uma coleção de imagens repetitivas.

Utilize:

- Diagramas Mermaid para arquiteturas, processos e fluxos.
- SVG inline para infográficos vetoriais.
- Tabelas comparativas.
- Matrizes de decisão.
- Fluxogramas.
- Sequências de etapas.
- Esquemas de causa e efeito.
- Exemplos visuais antes/depois.

Para diagramas Mermaid, inclua uma alternativa visual local ou um fallback legível caso a biblioteca externa não esteja disponível.

Não insira o código Mermaid como se ele já fosse um diagrama renderizado.

Os recursos visuais deverão acrescentar informação, explicar relações e ajudar o aluno a compreender o assunto.

---

9. FLASHCARDS E REPETIÇÃO ESPAÇADA

Cada módulo principal deverá possuir, no mínimo, 50 flashcards autorais e distintos, totalizando pelo menos 400 flashcards.

Esse número é um piso global, não um limite máximo. Amplie a coleção quando necessário para cobrir adequadamente a árvore curricular.

Distribua os cartões entre:

- Definições.
- Comparações.
- Protocolos e procedimentos.
- Fórmulas.
- Interpretação de resultados.
- Exceções.
- Pegadinhas.
- Aplicações práticas.
- Segurança e legislação.
- Integração entre tópicos.

Regras obrigatórias:

1. Cada cartão deve avaliar uma habilidade ou conhecimento claramente identificado.
2. Não repita a mesma pergunta apenas trocando palavras.
3. Evite perguntas ambíguas.
4. Não utilize respostas vagas como “depende” sem explicar as condições.
5. Inclua explicações curtas que corrijam erros conceituais.
6. Associe cada cartão a um tópico curricular.
7. Registre acertos, dificuldades, erros e datas de revisão.
8. Implemente repetição espaçada com algoritmo documentado.
9. Permita estudar todos os cartões, apenas os vencidos ou apenas os errados.
10. Permita filtrar por módulo, assunto e dificuldade.
11. Salve o progresso localmente.
12. Implemente exportação e importação de progresso, quando viável.

Use os estados “Acertou”, “Difícil” e “Errou”, com intervalos ajustados ao desempenho.

O sistema deverá informar a quantidade de cartões dominados, pendentes, vencidos e em revisão.

Não confunda número de cartões cadastrados com domínio efetivo do conteúdo.

---

10. BANCO DE QUESTÕES E SIMULADOS

Implemente um banco com pelo menos 40 questões por módulo, totalizando pelo menos 320 questões autorais, com possibilidade de expansão.

As questões deverão cobrir todos os tópicos curriculares, e não apenas os assuntos mais fáceis de formular.

Distribuição inicial sugerida por módulo:

- 30% de dificuldade básica.
- 45% de dificuldade intermediária.
- 25% de dificuldade avançada.

Ajuste a distribuição quando o conteúdo exigir outra proporção e documente a decisão.

Utilize formatos compatíveis com os estilos de cobrança de:

- CESPE/CEBRASPE: itens de Certo ou Errado.
- FGV: interpretação contextual e alternativas próximas.
- FCC: precisão conceitual e aplicação de regras.
- VUNESP: conhecimento objetivo, interpretação e aplicação.

Não atribua questões inventadas a bancas reais. Identifique questões como autorais ou adaptadas, citando a origem quando houver adaptação legítima.

10.1 Justificativa obrigatória de cada questão

Toda questão deverá apresentar:

1. Enunciado completo.
2. Contexto e dados necessários.
3. Alternativas, quando aplicável.
4. Gabarito.
5. Justificativa detalhada do gabarito.
6. Análise individual de todas as alternativas.
7. Explicação do erro conceitual de cada distrator.
8. Regra, fórmula ou princípio envolvido.
9. Referência curricular do assunto.
10. Nível de dificuldade.
11. Comentário sobre pegadinhas.
12. Fonte técnica ou normativa quando necessária.

Em questões numéricas, mostre os cálculos completos.

Em questões jurídicas, cite os dispositivos pertinentes.

Em itens de Certo ou Errado, identifique precisamente o trecho que torna o item verdadeiro ou falso.

Não considere um comentário suficiente se ele disser apenas “alternativa incorreta” ou “conforme a teoria”.

10.2 Motor de simulados

O sistema deverá permitir:

- Simulados por módulo.
- Simulados cumulativos.
- Simulados por nível.
- Simulados por estilo de banca.
- Simulados aleatórios sem repetição na mesma sessão, quando houver questões suficientes.
- Temporizador opcional.
- Navegação entre questões.
- Marcação de questões para revisão.
- Finalização e correção.
- Gabarito comentado.
- Histórico de tentativas.
- Percentual de acertos.
- Tempo por questão.
- Desempenho por assunto.
- Lista automática de pontos fracos.
- Recomendação de revisão baseada nos erros.

O resultado deverá diferenciar nota, taxa de acerto, questões não respondidas e tópicos que precisam de reforço.

---

11. BUSCA, NAVEGAÇÃO E PERSONALIZAÇÃO

Implemente:

- Busca global com índice local.
- Destaque dos termos encontrados.
- Filtros por módulo, tópico, nível e tipo de recurso.
- Navegação por árvore curricular.
- Índice de conteúdo.
- Histórico de navegação.
- Favoritos.
- Marcadores pessoais.
- Anotações de estudo.
- Retomada do último tópico.
- Modo de revisão.
- Modo de foco.
- Tema claro e escuro.
- Controles acessíveis por teclado.

A busca deverá encontrar termos existentes no conteúdo real. Não utilize resultados fictícios para simular uma pesquisa funcional.

---

12. ÁUDIO, VÍDEOS E FONTES

12.1 Leitura em voz alta

Implemente leitura por Web Speech API quando disponível, com:

- Idioma pt-BR quando houver voz compatível.
- Seleção de voz.
- Play e pausa.
- Retomada e interrupção.
- Controle de velocidade.
- Indicação de indisponibilidade.
- Compatibilidade com conteúdo extenso.

A funcionalidade deverá tratar erros, mudanças de página e limitações do navegador.

Não afirme que todos os dispositivos possuem a mesma voz ou qualidade de síntese.

12.2 Vídeos educacionais

Utilize embeds reais de vídeos do YouTube, preferencialmente por "youtube-nocookie.com".

Requisitos:

1. Identificar vídeos específicos relacionados ao assunto.
2. Priorizar canais educacionais brasileiros reconhecidos.
3. Verificar o ID do vídeo e sua correspondência com o título.
4. Verificar se o vídeo está acessível e pode ser incorporado.
5. Registrar canal, título, assunto, URL original e data de validação.
6. Fornecer alternativa textual completa para o conteúdo essencial.
7. Evitar vídeos redundantes, desatualizados ou sem relação direta com a unidade.
8. Identificar limitações de disponibilidade regional ou incorporação, quando constatadas.

Não invente IDs de vídeo.

Não considere a existência de uma URL como prova de que o vídeo funciona.

Não use vídeos como substitutos da apostila. O aluno deverá aprender o conteúdo essencial mesmo quando estiver offline ou quando um vídeo for removido.

Se não for possível validar um vídeo, não o publique como validado. Registre a pendência e mantenha o conteúdo didático completo no próprio site.

12.3 Referências técnicas

Priorize fontes primárias e oficiais, incluindo:

- Microsoft Learn e documentação oficial da Microsoft.
- RFCs e documentação técnica de protocolos.
- CERT.br.
- ANPD.
- Planalto e legislação federal oficial.
- Documentação oficial das ferramentas de visualização.
- Organizações técnicas e educacionais confiáveis.

Para cada referência, registre título, organização responsável, URL direta, tópico relacionado e data da última verificação, quando possível.

Não invente links, títulos, datas de publicação ou conclusões atribuídas às fontes.

Diferencie referências de aprofundamento de conteúdo obrigatório já explicado no site.

---

13. LEGISLAÇÃO, ATUALIZAÇÃO E PRECISÃO TÉCNICA

Para conteúdos jurídicos e normativos:

- Priorize o texto oficial vigente.
- Identifique lei, número, ano e dispositivo relevante.
- Verifique alterações posteriores.
- Distinga lei, decreto, norma técnica, recomendação e boa prática.
- Informe a data de verificação.
- Evite interpretar exceções como regras gerais.
- Não apresente aconselhamento jurídico individual como conclusão definitiva.

Para conteúdos tecnológicos:

- Diferencie conceitos estáveis de recursos sujeitos a mudanças de versão.
- Informe a versão ou o contexto quando isso alterar a resposta.
- Confirme portas, funções, licenciamento e compatibilidade em fontes apropriadas.
- Não transforme comportamento específico de uma ferramenta em regra universal.

---

14. PROGRESSO, PERSISTÊNCIA E RECUPERAÇÃO

Implemente um painel com:

- Progresso geral.
- Progresso por módulo e subtópico.
- Unidades concluídas e pendentes.
- Flashcards dominados e vencidos.
- Histórico de simulados.
- Taxa de acerto por assunto.
- Tempo de estudo, quando mensurado de forma confiável.
- Favoritos e anotações.
- Recomendações de revisão.

A persistência deverá incluir:

- Tratamento de indisponibilidade do armazenamento.
- Validação dos dados recuperados.
- Controle de versão do formato de dados.
- Migração de dados entre versões.
- Prevenção de corrupção por gravações inválidas.
- Exportação e importação de backup do progresso.
- Mensagens claras sobre limitações do modo privado ou da abertura via "file://".

Não grave informações pessoais desnecessárias.

O percentual de progresso curricular deverá ser calculado com base em unidades identificadas e critérios de conclusão definidos, e não em cliques ou simples rolagem de página.

A conclusão de uma unidade deverá considerar o estudo, os exercícios obrigatórios e os critérios de domínio estabelecidos.

---

15. DESIGN INSTRUCIONAL E ACESSIBILIDADE

Adote princípios de:

- Aprendizagem progressiva.
- Recuperação ativa.
- Prática deliberada.
- Repetição espaçada.
- Exemplos resolvidos.
- Alternância entre explicação e prática.
- Revisão cumulativa.
- Feedback imediato e explicativo.
- Aprendizagem por comparação.
- Transferência para situações novas.

Evite páginas visualmente carregadas, excesso de animações e elementos decorativos sem função pedagógica.

A interface deverá ser responsiva para desktop, tablet e celular.

Observe as boas práticas WCAG aplicáveis:

- Contraste adequado.
- Navegação por teclado.
- Foco visível.
- Rótulos acessíveis.
- Hierarquia semântica.
- Descrições para gráficos e imagens.
- Feedback compreensível.
- Alternativas a interações exclusivamente visuais.

Cada elemento visual deverá apoiar a aprendizagem. Não é necessário criar uma ilustração independente para cada parágrafo, mas todo conceito relevante deverá receber o suporte visual adequado ao seu grau de abstração.

---

16. SEGURANÇA, ROBUSTEZ E DESEMPENHO

- Não utilizar "eval" para interpretar fórmulas ou expressões.
- Não inserir entradas do usuário diretamente em HTML sem sanitização.
- Evitar dependências externas desnecessárias.
- Tratar falhas de carregamento e indisponibilidade de bibliotecas.
- Validar dados antes de armazená-los.
- Evitar perda de progresso durante atualizações.
- Limitar cálculos e renderizações que possam bloquear a interface.
- Utilizar eventos e componentes de forma consistente.
- Prevenir navegação quebrada e estados de interface incoerentes.
- Respeitar o princípio do menor privilégio.
- Não solicitar credenciais ou dados sensíveis.
- Não incorporar recursos remotos como requisito para a aprendizagem central.

Quando houver uma limitação do navegador, explique-a e ofereça uma alternativa funcional.

---

17. PLANO DE IMPLEMENTAÇÃO E CONTROLE DE QUALIDADE

Execute as etapas na seguinte ordem.

Etapa 1 — Inventário

Produza a árvore curricular completa, com identificadores e objetivos de aprendizagem.

Etapa 2 — Matriz de cobertura

Associe cada subtópico a conteúdo, exemplos, recursos visuais, exercícios, flashcards, fontes e testes.

Etapa 3 — Arquitetura

Defina estrutura de arquivos, componentes, modelo de dados, navegação e persistência.

Etapa 4 — Implementação didática

Escreva o conteúdo completo antes de considerar a interface finalizada. Evite criar páginas visualmente prontas com explicações provisórias.

Etapa 5 — Implementação funcional

Construa simuladores, busca, flashcards, banco de questões, gráficos, áudio e persistência.

Etapa 6 — Validação curricular

Verifique a cobertura de cada item do programa e identifique conteúdo superficial, duplicado ou ausente.

Etapa 7 — Testes técnicos

Teste:

- Carregamento de todos os arquivos.
- Links internos.
- Busca.
- Fórmulas e cálculos.
- Gráficos.
- Flashcards e repetição espaçada.
- Simulados e gabaritos.
- Salvamento e restauração do progresso.
- Navegação responsiva.
- Acessibilidade básica.
- Modo offline e contingências.
- Compatibilidade com abertura direta.
- Funcionamento dos vídeos validados.

Etapa 8 — Auditoria final

Apresente uma matriz de conformidade com:

- Requisito.
- Evidência.
- Teste realizado.
- Resultado.
- Limitação conhecida.
- Correção necessária.

Não declare que um teste passou sem executá-lo ou sem possuir evidência verificável.

---

18. CRITÉRIOS OBJETIVOS DE ACEITE

O projeto somente poderá ser considerado concluído quando atender aos critérios abaixo:

1. Todos os oito módulos estão implementados.
2. Todos os subtópicos do inventário possuem conteúdo didático efetivo.
3. Todas as unidades possuem objetivos, explicações, exemplos e verificações de aprendizagem.
4. Cada unidade possui pelo menos três exemplos resolvidos de natureza distinta.
5. Existem pelo menos 400 flashcards autorais, distribuídos entre os oito módulos.
6. Existem pelo menos 320 questões autorais, distribuídas entre os oito módulos.
7. Todas as questões possuem gabarito e comentários que analisam cada alternativa.
8. Os cinco tipos de gráficos obrigatórios funcionam com dados e parâmetros reais.
9. Os simuladores produzem resultados consistentes com suas regras documentadas.
10. A busca encontra conteúdo efetivamente presente.
11. O áudio possui controles funcionais e tratamento de indisponibilidade.
12. Os vídeos publicados como validados tiveram seus IDs e correspondência temática verificados.
13. O progresso, os favoritos e o histórico persistem corretamente, respeitadas as limitações documentadas.
14. A navegação funciona em telas pequenas e grandes.
15. Não existem botões sem ação, links inventados, dados fictícios apresentados como reais ou placeholders enganosos em produção.
16. A abertura direta de "index.html" foi testada e suas limitações foram documentadas.
17. Todos os arquivos necessários à execução foram entregues.
18. O projeto possui instruções de uso, manutenção e validação.
19. A auditoria final não apresenta requisitos obrigatórios pendentes classificados incorretamente como concluídos.

Os quantitativos mínimos não substituem a qualidade: questões repetitivas, flashcards redundantes e exemplos sem explicação não contam como cobertura efetiva.

---

19. REGRAS ABSOLUTAS DE ENTREGA

- Escreva em português brasileiro formal, técnico e didático.
- Não reduza o escopo silenciosamente.
- Não substitua conteúdo por títulos ou resumos superficiais.
- Não use pseudocódigo quando for exigido código executável.
- Não omita arquivos essenciais.
- Não use comentários como “implementar depois”, “restante do código”, “adicionar questões” ou equivalentes.
- Não invente resultados de testes.
- Não apresente conteúdo ilustrativo como resultado real de um simulador.
- Não invente referências ou vídeos.
- Não atribua questões autorais a bancas reais.
- Não esconda limitações técnicas.
- Não sacrifique a profundidade didática para priorizar efeitos visuais.
- Não considere o projeto concluído apenas porque a interface foi renderizada.
- Preserve o conteúdo já validado ao corrigir defeitos.
- Prefira soluções simples, robustas e verificáveis.
- Documente decisões arquiteturais e trade-offs relevantes.

Se a execução ocorrer em um ambiente com limite de contexto, tempo ou capacidade de entrega, trabalhe em etapas completas e persistentes. Não reduza arbitrariamente a quantidade de conteúdo para fingir conclusão. Preserve o inventário, identifique os módulos concluídos e pendentes e continue até atingir os critérios de aceite.

20. FORMATO DA RESPOSTA E ENTREGÁVEIS

Entregue:

1. Projeto funcional completo.
2. Todos os arquivos-fonte necessários.
3. Conteúdo curricular incorporado.
4. Banco de flashcards e questões.
5. Simuladores e ferramentas de aprendizagem.
6. Recursos visuais e diagramas.
7. Referências verificadas.
8. Instruções de execução local.
9. Instruções de backup e recuperação do progresso.
10. Relatório de testes executados.
11. Matriz de cobertura curricular.
12. Relação explícita de limitações remanescentes, se houver.

Se o ambiente permitir criar arquivos, gere os arquivos efetivamente, organize-os em uma estrutura utilizável e disponibilize o projeto completo em um pacote apropriado.

Se não for possível concluir tudo em uma única execução, entregue incrementos funcionais e consistentes, sem substituir partes pendentes por placeholders e sem declarar o projeto integralmente concluído.

INSTRUÇÃO FINAL

Comece pelo inventário curricular e pela matriz de cobertura. Em seguida, implemente a aplicação e seu conteúdo de maneira sistemática.

A prioridade absoluta é ensinar de verdade, com profundidade, precisão, abundância de exemplos, prática orientada, avaliações rigorosas e autonomia do aluno.

O resultado deverá ser um ambiente completo de aprendizagem, e não apenas um site que apresenta informações sobre os assuntos.

Considere cada requisito obrigatório como um item auditável. Ao final, demonstre com evidências quais foram atendidos, quais foram testados e quais ainda apresentam limitações.