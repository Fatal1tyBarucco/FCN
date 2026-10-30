# MISSÃO: REDESIGN VISUAL PREMIUM DO FCN
## Reconstrução completa da experiência visual, interface, navegação e apresentação do sistema educacional

**Repositório:** `Fatal1tyBarucco/FCN`  
**Referência visual obrigatória:** arquivo `index_example` existente no repositório  
**Produto:** Apostila Web Interativa de Tecnologia da Informação, Dados e Inteligência Artificial  
**Idioma da interface:** Português brasileiro (pt-BR)  
**Ambiente de publicação:** GitHub Pages  
**Arquitetura existente:** HTML5, CSS3 e JavaScript nativo, sem frameworks e sem etapa de build.

---

# 1. PAPEL E RESPONSABILIDADE

Atue como uma equipe multidisciplinar de especialistas seniores, trabalhando de maneira integrada:

- Diretor de Design Digital especializado em produtos educacionais premium.
- UI/UX Designer especializado em interfaces modernas, intuitivas e visualmente sofisticadas.
- Art Director responsável pela identidade visual, composição, hierarquia e consistência estética.
- Frontend Architect especializado em HTML5, CSS3, JavaScript e aplicações estáticas.
- Engenheiro de acessibilidade com domínio das diretrizes WCAG 2.2.
- Especialista em design systems, tipografia, grids, sistemas de espaçamento e componentes reutilizáveis.
- Especialista em interfaces responsivas, mobile-first e Progressive Web Apps.
- Engenheiro de qualidade especializado em testes de regressão, integração visual e testes funcionais.
- Revisor técnico responsável pela preservação integral da arquitetura, do conteúdo e das funcionalidades preexistentes.

Você não deverá apenas sugerir melhorias, elaborar um protótipo ou produzir recomendações.

**Sua missão é executar efetivamente o redesign no código-fonte do repositório, validar o resultado e entregar uma interface visualmente excepcional, funcional e pronta para publicação.**

Trabalhe de maneira autônoma, seguindo as etapas definidas neste documento. Não interrompa a execução para solicitar aprovação de decisões ordinárias de design ou implementação.

Não declare tarefas concluídas sem evidências verificáveis.

---

# 2. OBJETIVO PRINCIPAL

Transformar completamente a apresentação visual do FCN, eliminando problemas de composição, inconsistência estética, cores mal aplicadas, espaçamentos inadequados, excesso de elementos visuais, tipografia desorganizada e navegação confusa.

O resultado deverá transmitir a qualidade de um produto educacional digital profissional, cuidadosamente projetado e pronto para ser utilizado diariamente.

A interface deverá ser:

- Visualmente impressionante.
- Elegante e contemporânea.
- Organizada e consistente.
- Extremamente legível.
- Intuitiva para novos usuários.
- Eficiente para usuários recorrentes.
- Responsiva em diferentes tamanhos de tela.
- Acessível por teclado e tecnologias assistivas.
- Rápida, leve e compatível com a arquitetura atual.
- Adequada a sessões prolongadas de estudo.
- Consistente em todas as páginas, módulos, ferramentas, simuladores e componentes.

Não confunda sofisticação com excesso de efeitos.

O objetivo é alcançar uma estética refinada por meio de composição, proporção, tipografia, contraste, alinhamento, espaços em branco, consistência e atenção aos detalhes.

**O sistema deve parecer um produto cuidadosamente desenhado por uma equipe profissional de design e engenharia, e não uma página HTML improvisada com estilos adicionados ao longo do tempo.**

---

# 3. REFERÊNCIA VISUAL OBRIGATÓRIA: `index_example`

O arquivo `index_example` é a referência visual prioritária deste trabalho.

Antes de modificar qualquer código, localize e examine integralmente esse arquivo.

## 3.1. Localização e inspeção

1. Inspecione a estrutura do repositório e as branches relevantes.
2. Localize o arquivo `index_example`, independentemente de sua extensão ou diretório.
3. Identifique se ele está presente na branch de trabalho, em outra branch, em um pull request ou em outro local acessível do próprio repositório.
4. Determine se o arquivo contém HTML, CSS, JavaScript, uma página completa ou outro material de referência.
5. Se houver recursos visuais, imagens, fontes ou arquivos CSS associados, identifique suas dependências.
6. Examine o documento integralmente, e não apenas seu cabeçalho.
7. Se houver possibilidade de executar ou renderizar o arquivo, examine o resultado visual em navegador.
8. Compare a estrutura visual do modelo com a interface atual do FCN.

Se o arquivo não puder ser localizado, procure sistematicamente nas branches e nos arquivos acessíveis do próprio repositório.

Não invente características do modelo nem afirme que o examinou se isso não aconteceu.

Se, após a investigação, a referência continuar inacessível, registre explicitamente o impedimento e utilize apenas as evidências visuais efetivamente disponíveis. Não apresente uma reprodução especulativa como se fosse fiel ao modelo original.

## 3.2. Extração do design

Documente os seguintes aspectos do modelo:

- Identidade visual.
- Paleta de cores.
- Cores de fundo e superfícies.
- Hierarquia tipográfica.
- Famílias tipográficas e pesos.
- Larguras e alinhamentos dos contêineres.
- Distribuição dos elementos.
- Cabeçalho e navegação.
- Menus laterais e menus superiores.
- Organização do conteúdo.
- Cards e agrupamentos.
- Botões e controles.
- Bordas, raios e sombras.
- Ícones.
- Estados interativos.
- Comportamento responsivo.
- Tratamento de tabelas, formulários e conteúdo extenso.
- Composição visual de áreas com alta densidade de informações.

Diferencie características essenciais da identidade visual de elementos específicos que precisam ser adaptados ao conteúdo educacional.

## 3.3. Fidelidade ao modelo

Utilize `index_example` como fonte de verdade visual.

Não substitua essa referência por um template genérico, por uma interface aleatória encontrada na internet ou por uma estética inventada sem relação com o modelo.

A referência define a direção visual; a estrutura curricular determina como essa direção deve ser aplicada ao FCN.

A fidelidade deve ser avaliada por comparação visual, e não apenas pela semelhança nominal de cores ou pela existência de componentes com formatos parecidos.

---

# 4. AUDITORIA TÉCNICA E VISUAL ANTES DAS ALTERAÇÕES

Antes de implementar o redesign, compreenda a aplicação existente.

## 4.1. Inspeção da arquitetura

Examine, no mínimo:

- `README.md`.
- `AGENTS.md`.
- `Escrita.txt`.
- `apostila-ia/index.html`.
- `apostila-ia/assets/css/styles.css`.
- Todos os arquivos JavaScript carregados pela página.
- Todos os arquivos de dados curriculares relevantes.
- Os recursos gráficos e demais arquivos estáticos.
- Os workflows de validação e publicação.
- Os testes existentes.
- A configuração de navegação e inicialização da aplicação.
- O mecanismo de persistência do progresso.
- Os mecanismos de busca, questionários, flashcards, simuladores e gráficos.

Verifique também os diretórios e componentes efetivamente presentes no repositório. Não presuma que a estrutura documentada está integralmente atualizada.

Leia o `Escrita.txt` como referência dos requisitos funcionais e pedagógicos.

Leia o `AGENTS.md` para compreender as decisões anteriores, as restrições técnicas, as tarefas executadas e os problemas conhecidos.

## 4.2. Diagnóstico visual

Avalie o site atual em relação a:

- Hierarquia visual.
- Organização espacial.
- Consistência dos componentes.
- Contraste.
- Legibilidade.
- Densidade informacional.
- Alinhamento.
- Proporção entre conteúdo e navegação.
- Qualidade dos cards.
- Apresentação de títulos e subtítulos.
- Organização dos módulos.
- Aparência dos controles.
- Experiência em dispositivos móveis.
- Estados de interação.
- Estados vazios.
- Mensagens de erro e sucesso.
- Comportamento durante carregamento.
- Acessibilidade.
- Possíveis conflitos de CSS.
- Componentes visualmente inconsistentes.

Procure problemas concretos no código e na interface.

Não faça alterações antes de compreender como o layout atual se relaciona com as funcionalidades existentes.

## 4.3. Linha de base

Registre:

- Branch atual.
- Branch de destino.
- Pull request relacionado, se existente.
- Estado inicial do repositório.
- Arquivos que serão afetados.
- Testes disponíveis.
- Falhas preexistentes.
- Problemas visuais observados.
- Funcionalidades críticas que precisam ser preservadas.

Não descarte alterações preexistentes nem sobrescreva trabalho de outros agentes.

---

# 5. DIREÇÃO DE ARTE E EXPERIÊNCIA VISUAL

O design final deverá combinar a identidade de `index_example` com as exigências de uma plataforma educacional extensa.

A referência define a direção visual; a estrutura curricular determina como essa direção deve ser aplicada.

## 5.1. Sistema visual coerente

Construa ou consolide um sistema de design com tokens reutilizáveis para:

- Cores.
- Tipografia.
- Espaçamentos.
- Larguras máximas.
- Breakpoints.
- Bordas.
- Raios.
- Sombras.
- Elevação.
- Camadas e sobreposições.
- Transições.
- Estados de foco.
- Estados de interação.
- Dimensões dos controles.
- Ícones.
- Densidade visual.

Centralize os tokens em propriedades CSS quando isso for compatível com a implementação existente.

Evite valores arbitrários repetidos por todo o projeto.

Componentes equivalentes devem compartilhar regras visuais.

## 5.2. Paleta de cores

Extraia a paleta da referência.

Estabeleça relações claras entre:

- Fundo principal.
- Superfícies de conteúdo.
- Superfícies secundárias.
- Texto principal.
- Texto auxiliar.
- Bordas.
- Cor de destaque.
- Ações primárias.
- Ações secundárias.
- Estados de sucesso.
- Estados de atenção.
- Estados de erro.
- Estados informativos.
- Elementos desabilitados.

Não introduza cores decorativas sem função.

Evite combinações que prejudiquem a leitura, excesso de cores saturadas, gradientes indiscriminados e contrastes visualmente agressivos.

Não altere arbitrariamente a identidade do modelo para aplicar tendências estéticas que não tenham sido solicitadas.

## 5.3. Tipografia

Defina uma escala tipográfica consistente.

Diferencie claramente:

- Títulos de página.
- Títulos de módulos.
- Títulos de seções.
- Subtítulos.
- Texto explicativo.
- Texto de apoio.
- Metadados.
- Rótulos.
- Botões.
- Código.
- Fórmulas.
- Tabelas.
- Mensagens de estado.

Utilize tamanhos, pesos, alturas de linha e larguras de leitura apropriados.

Textos longos precisam permanecer confortáveis de ler.

Evite títulos gigantes sem necessidade, textos excessivamente pequenos, excesso de fontes e combinações tipográficas sem coerência.

Priorize fontes locais já disponíveis ou fontes de sistema adequadas. Caso considere recursos externos, avalie dependência de rede, privacidade, desempenho e funcionamento offline antes de adotá-los.

## 5.4. Espaçamento e composição

Estabeleça uma escala de espaçamento consistente.

Corrija:

- Elementos encostados indevidamente.
- Espaços excessivos.
- Blocos sem separação visual.
- Colunas desproporcionais.
- Cards com alturas inconsistentes.
- Conteúdo excessivamente comprimido.
- Áreas vazias sem propósito.
- Quebras de linha inadequadas.
- Alinhamentos divergentes.
- Contêineres excessivamente largos.
- Conteúdo que não respeita a largura disponível.

Utilize espaços em branco de maneira intencional.

A página deverá ter ritmo visual, com separação clara entre navegação, contexto, conteúdo principal, controles e informações auxiliares.

---

# 6. REDESIGN COMPLETO DA ESTRUTURA DA INTERFACE

Reprojete todas as áreas visuais relevantes, sem limitar o trabalho à primeira dobra da página.

## 6.1. Cabeçalho

Crie um cabeçalho consistente com a referência.

Avalie a necessidade de apresentar:

- Identidade do FCN.
- Nome ou contexto da seção atual.
- Busca global.
- Indicadores de progresso.
- Controles de acessibilidade.
- Ações frequentes.
- Navegação contextual.

Evite concentrar todos os controles no cabeçalho.

O cabeçalho deve ter proporções adequadas, alinhamento rigoroso e comportamento previsível durante a rolagem.

Se for fixo ou aderente ao topo, não poderá encobrir títulos, âncoras ou conteúdo.

## 6.2. Navegação principal

Reprojete a navegação de maneira que o usuário compreenda facilmente:

- Onde está.
- Qual módulo está estudando.
- Qual seção está aberta.
- Como acessar outras seções.
- Como retornar.
- Como localizar conteúdos.
- Como acompanhar sua evolução.

A navegação deve comunicar hierarquia por meio de agrupamento, tipografia, espaçamento, indicadores de seleção e ícones coerentes.

Não utilize cores como único indicador do estado ativo.

Evite menus excessivamente carregados, rótulos truncados, submenus confusos e navegação redundante.

## 6.3. Menu lateral

Se o modelo utilizar menu lateral, reproduza seus princípios visuais e adapte-os à dimensão curricular do FCN.

O menu deverá suportar a estrutura real dos oito módulos educacionais.

Quando apropriado, apresente:

- Nome do módulo.
- Identificação da seção atual.
- Indicadores de expansão.
- Estado de conclusão.
- Progresso.
- Hierarquia dos assuntos.
- Atalhos relevantes.

Em telas menores, o menu deve se adaptar a uma navegação compacta, gaveta ou outra solução coerente com a referência.

Se o menu for recolhível, implemente o controle real, incluindo os estados visuais e acessíveis.

## 6.4. Área principal de conteúdo

Organize a área principal com hierarquia visual clara.

Considere a presença de:

- Breadcrumbs, quando úteis.
- Título e descrição contextual.
- Indicadores de progresso.
- Objetivos de aprendizagem.
- Conteúdo didático.
- Exemplos.
- Blocos de atenção.
- Exercícios.
- Simuladores.
- Resumos.
- Revisões.
- Referências.
- Navegação entre assuntos.

Esses elementos devem ser organizados conforme a estrutura e as funcionalidades reais da aplicação.

Não transforme todas as seções em uma sequência indistinguível de caixas.

O conteúdo deve fluir naturalmente, com agrupamentos visuais que ajudem a compreender o assunto.

## 6.5. Página inicial e visão geral dos estudos

A página inicial deverá apresentar uma visão clara do ambiente de aprendizagem.

Aproveite os dados já disponíveis para representar, quando suportado pela implementação:

- Módulos.
- Progresso real.
- Atividade recente.
- Conteúdos pendentes.
- Revisões.
- Questionários.
- Indicadores de evolução.

Não invente métricas, percentuais ou históricos.

Os indicadores apresentados devem refletir dados reais e respeitar a lógica de persistência existente.

Se alguma informação não estiver disponível, omita-a ou apresente um estado vazio honesto e visualmente adequado.

## 6.6. Cards

Redesenhe os cards para criar consistência em toda a aplicação.

Defina padrões para:

- Cards de módulos.
- Cards de conteúdo.
- Cards de progresso.
- Cards de questionários.
- Cards de flashcards.
- Cards de referências.
- Cards de simuladores.
- Cards informativos.
- Cards de resultados.

Cada componente deve ter propósito e hierarquia definidos.

Evite:

- Cards aninhados sem necessidade.
- Bordas excessivas.
- Sombras pesadas.
- Ícones decorativos sem significado.
- Textos comprimidos.
- Botões desalinhados.
- Alturas rígidas incompatíveis com conteúdos variáveis.
- Aparência de componentes copiados de bibliotecas diferentes.

## 6.7. Botões e controles

Estabeleça estilos consistentes para:

- Ação primária.
- Ação secundária.
- Ação terciária.
- Controles de navegação.
- Botões de ícone.
- Botões destrutivos.
- Controles desabilitados.
- Alternadores.
- Campos de formulário.

Todos os controles devem apresentar estados de interação coerentes.

Não utilize elementos visualmente clicáveis sem funcionalidade real.

Não altere o significado de ações existentes.

## 6.8. Ícones

Utilize um sistema de ícones coerente com o modelo visual.

Prefira ícones vetoriais locais, recursos já existentes ou SVGs controlados pelo próprio projeto.

Evite misturar emojis, símbolos Unicode e ícones de bibliotecas distintas como se pertencessem ao mesmo sistema.

Ícones sem texto precisam de nomes acessíveis quando forem controles.

Ícones puramente decorativos devem ser ocultados das tecnologias assistivas quando apropriado.

## 6.9. Rodapé e áreas complementares

Revise a apresentação de:

- Referências.
- Informações institucionais.
- Versão da aplicação, se existente.
- Mensagens de estado.
- Avisos.
- Ajuda contextual.
- Navegação complementar.

Não acrescente informações institucionais fictícias ou funcionalidades que não existam.

---

# 7. REDESIGN DE TODOS OS COMPONENTES EDUCACIONAIS

A transformação deverá alcançar os componentes internos da apostila.

Não aceite uma página inicial bonita com módulos e ferramentas visualmente desorganizados.

## 7.1. Conteúdo didático

Reestruture visualmente:

- Títulos.
- Subtítulos.
- Parágrafos.
- Listas.
- Exemplos.
- Definições.
- Comparações.
- Tabelas.
- Fórmulas.
- Blocos de código.
- Alertas.
- Observações.
- Resumos.
- Referências.
- Questões comentadas.

O design deve facilitar a leitura, a compreensão e a revisão.

Não modifique o conteúdo pedagógico apenas para encaixá-lo em um layout.

Se o conteúdo for extenso, o layout deverá acomodá-lo corretamente.

## 7.2. Tabelas

Tabelas devem permanecer legíveis em telas pequenas.

Implemente, conforme necessário:

- Cabeçalhos distintos.
- Alinhamento coerente.
- Espaçamento adequado.
- Separação visual entre linhas.
- Quebra de texto.
- Rolagem horizontal localizada quando inevitável.
- Semântica HTML correta.

Não permita que uma tabela extensa aumente a largura de toda a página.

## 7.3. Questionários

Redesenhe a experiência de resposta, mantendo integralmente as regras existentes.

Considere:

- Enunciado.
- Alternativas.
- Seleção.
- Confirmação.
- Feedback.
- Explicação da resposta.
- Indicação de acerto ou erro.
- Progresso.
- Resultado.
- Revisão.

Os estados de resposta precisam ser claros, acessíveis e visualmente consistentes.

Não revele respostas antecipadamente quando isso contrariar o comportamento pedagógico existente.

## 7.4. Flashcards

Aprimore:

- Apresentação da pergunta.
- Revelação da resposta.
- Navegação.
- Estados de revisão.
- Marcação de domínio.
- Indicadores de progresso.

Caso existam animações, respeite a preferência por movimento reduzido.

Não dependa exclusivamente de gestos ou animações para revelar conteúdo.

## 7.5. Simuladores interativos

Redesenhe a apresentação visual de todos os simuladores existentes.

Inclua, conforme as funcionalidades reais:

- Entradas.
- Controles.
- Áreas de execução.
- Resultados.
- Feedback.
- Mensagens de erro.
- Estados de sucesso.
- Explicações.
- Reinicialização.

Preserve os algoritmos e os comportamentos existentes.

Não substitua simuladores funcionais por imagens, demonstrações estáticas ou interfaces falsas.

## 7.6. Gráficos e visualização de dados

Revise os componentes gráficos existentes para garantir:

- Legibilidade.
- Contraste.
- Identificação dos eixos.
- Legendas compreensíveis.
- Escalas coerentes.
- Apresentação adequada dos valores.
- Responsividade.
- Alternativas textuais quando necessárias.

Não distorça dados para melhorar a aparência.

Gráficos, tabelas e resultados devem continuar refletindo os dados reais.

## 7.7. Busca

Aprimore a interface de busca existente, preservando seu mecanismo de funcionamento.

Considere:

- Campo de pesquisa.
- Estado de foco.
- Resultados.
- Termos destacados, quando suportados.
- Mensagem sem resultados.
- Navegação até o conteúdo.
- Estados de carregamento.
- Tratamento de consultas inválidas.

Não crie uma busca visualmente atraente que não localize efetivamente o conteúdo.

## 7.8. Formulários e configurações

Padronize rótulos, campos, controles, validações e mensagens.

Garanta que os usuários consigam compreender o estado atual de cada controle.

As configurações devem continuar produzindo os efeitos esperados.

---

# 8. RESPONSIVIDADE DE VERDADE

O projeto deve funcionar adequadamente em diferentes resoluções.

Utilize uma estratégia mobile-first, sem prejudicar a experiência em desktops.

Valide pelo menos as seguintes larguras de viewport:

| Categoria | Largura de referência |
|---|---:|
| Smartphone compacto | 320 px |
| Smartphone | 375 px |
| Smartphone amplo | 430 px |
| Tablet | 768 px |
| Notebook | 1024 px |
| Desktop | 1366 px |
| Desktop amplo | 1920 px |

Essas larguras são referências de teste, não os únicos breakpoints permitidos.

Verifique:

- Ausência de rolagem horizontal global indevida.
- Cabeçalho adaptável.
- Menu funcional.
- Colunas responsivas.
- Cards reorganizados.
- Tipografia escalável.
- Botões utilizáveis por toque.
- Formulários adaptáveis.
- Tabelas extensas.
- Gráficos.
- Modais.
- Simuladores.
- Questionários.
- Conteúdos longos.
- Estados de foco.
- Menus abertos.
- Mensagens de feedback.

Não considere a responsividade concluída apenas porque os elementos diminuem de tamanho.

A interface deve reorganizar sua composição de maneira intencional em cada categoria de dispositivo.

Não esconda funcionalidades importantes simplesmente porque a tela é pequena.

---

# 9. ACESSIBILIDADE E ERGONOMIA

Implemente as melhorias de acessibilidade compatíveis com a arquitetura existente.

Utilize as WCAG 2.2 como referência.

Verifique:

- Estrutura semântica.
- Hierarquia correta de títulos.
- Contraste de texto.
- Contraste de controles.
- Navegação por teclado.
- Indicadores de foco visíveis.
- Ordem de tabulação.
- Nomes acessíveis.
- Rótulos de campos.
- Mensagens de erro compreensíveis.
- Estados acessíveis.
- Alternativas textuais.
- Compatibilidade com leitores de tela.
- Zoom e ampliação.
- Alvos de interação.
- Respeito a `prefers-reduced-motion`.
- Estados de abertura e fechamento de menus.
- Gerenciamento de foco em diálogos.

Não remova indicadores de foco para obter uma aparência minimalista.

Não utilize cores como único meio de transmitir informações.

Não imponha animações que prejudiquem a utilização prolongada.

Acessibilidade deverá fazer parte da implementação, e não ser tratada apenas como uma verificação final.

---

# 10. ARQUITETURA CSS E QUALIDADE DO CÓDIGO

O redesign deverá ser tecnicamente sustentável.

## 10.1. Princípios obrigatórios

- Preserve HTML, CSS e JavaScript nativos.
- Não introduza frameworks de interface.
- Não introduza etapas de build.
- Não crie dependência desnecessária de ferramentas externas.
- Não adicione um `package.json` apenas para implementar o design.
- Preserve a compatibilidade com a abertura direta do `apostila-ia/index.html`.
- Preserve a publicação existente no GitHub Pages.
- Preserve os caminhos relativos.
- Preserve a compatibilidade com os navegadores-alvo.
- Reutilize componentes e padrões existentes quando apropriado.

## 10.2. Organização dos estilos

Examine o CSS atual antes de modificá-lo.

Elimine problemas reais, como:

- Regras duplicadas.
- Seletores excessivamente específicos.
- Conflitos entre componentes.
- Estilos globais acidentais.
- Valores inconsistentes.
- `!important` desnecessários.
- Media queries redundantes.
- Regras obsoletas.
- Dependência de ordem implícita.
- Estilos que vazam para componentes não relacionados.

Organize os estilos de maneira coerente com o tamanho e a arquitetura do projeto.

Uma organização possível, caso seja apropriada à estrutura existente:

1. Tokens de design.
2. Reset e estilos fundamentais.
3. Tipografia.
4. Layout.
5. Cabeçalho.
6. Navegação.
7. Componentes reutilizáveis.
8. Componentes educacionais.
9. Formulários e controles.
10. Estados interativos.
11. Responsividade.
12. Acessibilidade.

Não divida arquivos ou crie abstrações apenas para cumprir essa lista. Priorize uma estrutura simples, compreensível e sustentável.

## 10.3. Integridade funcional

Não modifique a lógica de negócio para resolver problemas puramente visuais.

Se uma alteração estrutural exigir ajustes em JavaScript, documente a necessidade e faça a menor mudança segura.

Preserve:

- IDs utilizados por scripts.
- Classes utilizadas como seletores.
- Atributos `data-*`.
- Contratos entre módulos.
- Eventos.
- Referências globais necessárias.
- Ordem de carregamento.
- Estrutura dos dados.
- Persistência.
- Navegação.
- Histórico, quando existente.
- Acessibilidade funcional.

Antes de renomear ou remover qualquer seletor, pesquise todas as suas referências.

Não substitua componentes funcionais por versões simplificadas.

Não elimine código apenas porque ele parece antigo sem verificar suas dependências.

---

# 11. DESEMPENHO E EXPERIÊNCIA DE USO

A qualidade visual não pode comprometer a velocidade.

Priorize:

- CSS eficiente.
- JavaScript mínimo para interações visuais.
- Ausência de bibliotecas desnecessárias.
- Imagens otimizadas.
- Recursos locais quando apropriado.
- Carregamento previsível.
- Transições discretas.
- Renderização sem alterações abruptas de layout.
- Ausência de dependências externas críticas.
- Compatibilidade com funcionamento offline quando suportado pela implementação.

Evite:

- Animações pesadas.
- Filtros excessivos.
- Desfoques extensos.
- Sombras complexas em grande quantidade.
- Efeitos que provocam repinturas desnecessárias.
- Fontes externas bloqueantes.
- Scripts de terceiros sem justificativa.
- Manipulação excessiva do DOM.
- Grandes efeitos visuais que prejudiquem dispositivos modestos.

Não sacrifique legibilidade, desempenho ou acessibilidade para produzir capturas de tela visualmente chamativas.

---

# 12. ESTADOS VISUAIS E MICROINTERAÇÕES

Cada componente interativo deve apresentar estados visuais coerentes.

Considere:

- Padrão.
- Hover.
- Foco.
- Ativo.
- Selecionado.
- Expandido.
- Recolhido.
- Desabilitado.
- Carregando.
- Sucesso.
- Erro.
- Vazio.

As microinterações devem ser discretas, rápidas e funcionais.

Evite animações decorativas sem finalidade.

As transições precisam respeitar a configuração de movimento reduzido do usuário.

Garanta que o feedback visual não seja a única forma de comunicar o resultado de uma ação.

Não invente estados que não correspondam a comportamentos reais.

---

# 13. PRESERVAÇÃO INTEGRAL DO SISTEMA EDUCACIONAL

Esta é uma restrição crítica.

O redesign não autoriza simplificar, remover, substituir ou enfraquecer os recursos existentes.

Antes de implementar mudanças, inventarie as funcionalidades presentes.

Inclua, quando existentes no código:

- Os oito módulos curriculares.
- A navegação pelos assuntos.
- A apresentação do conteúdo.
- Os exemplos.
- As tabelas.
- Os questionários.
- Os flashcards.
- Os simuladores.
- Os gráficos.
- A busca.
- O progresso.
- A persistência.
- As referências.
- As configurações.
- Os mecanismos de revisão.
- Os recursos de acessibilidade.
- Os componentes de apoio à aprendizagem.

Preserve a integridade dos arquivos de conteúdo curricular e dos bancos de questões.

Não altere a quantidade, a estrutura ou o conteúdo dos dados apenas para facilitar a implementação do layout.

Se uma alteração visual exigir uma adaptação de marcação, mantenha o conteúdo e os contratos funcionais equivalentes.

Não apresente um protótipo como se fosse o sistema completo.

---

# 14. PLANO DE EXECUÇÃO

Execute as etapas em sequência, sem interromper o trabalho para solicitar autorização para decisões técnicas ordinárias.

## Fase 1 — Descoberta

- Inspecionar a branch de trabalho.
- Identificar o pull request relacionado.
- Localizar `index_example`.
- Examinar a referência.
- Ler `AGENTS.md` e `Escrita.txt`.
- Mapear a arquitetura.
- Identificar os componentes existentes.
- Levantar os problemas visuais.
- Registrar a linha de base.

**Entregável:** diagnóstico técnico e visual fundamentado em evidências.

## Fase 2 — Especificação visual

Defina:

- Direção de arte.
- Tokens de design.
- Escala tipográfica.
- Paleta.
- Sistema de espaçamento.
- Estrutura do layout.
- Componentes compartilhados.
- Comportamento responsivo.
- Estados interativos.
- Critérios de aceitação.

**Entregável:** especificação visual coerente com `index_example` e com o conteúdo real do FCN.

## Fase 3 — Implementação estrutural

Implemente o novo layout:

- Cabeçalho.
- Navegação.
- Menu lateral, quando aplicável.
- Área principal.
- Hierarquia dos módulos.
- Contêineres.
- Grids.
- Áreas complementares.
- Comportamento responsivo.

**Entregável:** estrutura visual completa e funcional.

## Fase 4 — Implementação dos componentes

Redesenhe os componentes educacionais e interativos.

Padronize:

- Cards.
- Botões.
- Campos.
- Tabelas.
- Blocos de conteúdo.
- Questionários.
- Flashcards.
- Simuladores.
- Gráficos.
- Mensagens.
- Estados vazios.
- Feedbacks.

**Entregável:** identidade visual consistente em toda a aplicação.

## Fase 5 — Refinamento

Faça uma revisão detalhada de:

- Alinhamentos.
- Proporções.
- Espaçamentos.
- Tipografia.
- Contraste.
- Hierarquia.
- Ícones.
- Bordas.
- Sombras.
- Estados de interação.
- Transições.
- Responsividade.

Corrija os problemas identificados antes de avançar.

**Entregável:** interface refinada, sem inconsistências visuais relevantes.

## Fase 6 — Validação

Execute os testes existentes e os testes necessários para verificar o redesign.

Verifique:

- Carregamento da aplicação.
- Erros no console.
- Recursos ausentes.
- Navegação.
- Funcionamento dos botões.
- Busca.
- Questionários.
- Flashcards.
- Simuladores.
- Gráficos.
- Persistência.
- Layout responsivo.
- Acessibilidade.
- Compatibilidade com GitHub Pages.
- Funcionamento sem etapa de build.

**Entregável:** evidências dos testes executados e lista dos problemas corrigidos.

## Fase 7 — Entrega

- Atualize a documentação pertinente.
- Registre as decisões de design relevantes.
- Documente os testes executados.
- Informe limitações reais.
- Revise o diff completo.
- Faça commit na branch correta, seguindo as regras deste prompt.
- Confirme o estado final do repositório.

**Entregável:** implementação versionada, validada e documentada.

---

# 15. TESTES OBRIGATÓRIOS

## 15.1. Testes estruturais

Verifique:

- Integridade do HTML.
- Referências a arquivos.
- Integridade dos seletores utilizados pelo JavaScript.
- Ausência de recursos essenciais ausentes.
- Integridade dos arquivos curriculares.
- Integridade dos bancos de questões.
- Integridade da ordem de carregamento.
- Ausência de dependências introduzidas indevidamente.

## 15.2. Testes funcionais

Valide os fluxos reais da aplicação.

No mínimo:

1. Abrir a aplicação.
2. Navegar entre módulos.
3. Abrir e fechar o menu.
4. Abrir uma seção de conteúdo.
5. Executar uma busca.
6. Responder a um questionário.
7. Consultar um flashcard.
8. Utilizar os simuladores disponíveis.
9. Visualizar os gráficos existentes.
10. Verificar a persistência do progresso.
11. Atualizar a página e verificar o comportamento dos dados persistidos.
12. Navegar por teclado.
13. Utilizar a interface em viewport móvel.
14. Verificar o carregamento dos recursos estáticos.

Adapte os casos às funcionalidades efetivamente existentes.

Não declare testes aprovados sem executá-los.

## 15.3. Testes visuais

Sempre que o ambiente permitir, utilize navegador real ou ferramenta de automação de navegador para verificar a interface.

Capture evidências de:

- Página inicial.
- Navegação expandida.
- Navegação compacta.
- Página de módulo.
- Conteúdo didático.
- Questionário.
- Simulador.
- Tabela ou gráfico.
- Tela móvel.

Compare os resultados com `index_example`.

Procure:

- Sobreposições.
- Cortes.
- Espaçamentos incorretos.
- Elementos desalinhados.
- Conteúdo ilegível.
- Rolagem horizontal indevida.
- Menus inacessíveis.
- Componentes com estilos divergentes.
- Estados interativos inconsistentes.

Se não houver ambiente de navegador disponível, execute os testes alternativos possíveis e registre claramente o que não pôde ser verificado.

Não confunda validação sintática com validação visual.

---

# 16. CRITÉRIOS DE ACEITAÇÃO

O trabalho somente poderá ser considerado concluído quando os critérios abaixo forem atendidos ou quando eventuais limitações estiverem explicitamente documentadas.

| Critério | Resultado exigido |
|---|---|
| Referência visual | `index_example` localizado e examinado, ou impedimento documentado |
| Identidade visual | Coerente com a referência |
| Layout | Reconstruído de forma consistente |
| Tipografia | Hierarquia clara e legível |
| Espaçamento | Sistema consistente |
| Cores | Paleta coerente e acessível |
| Navegação | Clara e funcional |
| Componentes | Visualmente padronizados |
| Conteúdo | Integralmente preservado |
| Questionários | Funcionamento preservado |
| Simuladores | Funcionamento preservado |
| Flashcards | Funcionamento preservado |
| Gráficos | Dados e comportamento preservados |
| Persistência | Funcionamento preservado |
| Responsividade | Validada em diferentes larguras |
| Acessibilidade | Verificada por testes apropriados |
| Desempenho | Sem regressões relevantes identificadas |
| GitHub Pages | Compatibilidade preservada |
| Testes | Executados e resultados registrados |
| Código | Diff revisado |
| Documentação | Atualizada conforme necessário |
| Versionamento | Commit realizado na branch correta, quando autorizado e tecnicamente possível |

Não utilize avaliações subjetivas como única prova de conclusão.

O resultado deve ser sustentado por código, testes e evidências visuais.

---

# 17. REGRAS DE VERSIONAMENTO E PROTEÇÃO DO REPOSITÓRIO

Antes de realizar qualquer commit:

1. Identifique a branch de trabalho.
2. Verifique se há um pull request aberto relacionado ao trabalho.
3. Determine a branch de origem e a branch de destino do pull request.
4. Preserve o histórico e as alterações preexistentes.
5. Não crie uma branch paralela desnecessariamente.
6. Não faça commits diretamente na branch principal quando o fluxo de trabalho exigir uma branch de desenvolvimento.
7. Não faça merge automaticamente.
8. Não force push.
9. Não descarte alterações de outros agentes.
10. Não inclua arquivos temporários, capturas de teste ou artefatos de execução desnecessários no commit.

Se houver um pull request aberto e sua branch de origem for a branch correta para o trabalho, faça os commits nessa mesma branch.

Se a branch de destino não puder ser determinada com segurança, não escolha arbitrariamente uma branch.

O commit deve conter apenas as alterações pertinentes ao redesign, preservando mudanças preexistentes.

---

# 18. REGRAS CONTRA RETRABALHO E IMPLEMENTAÇÕES SUPERFICIAIS

Não execute o trabalho como uma sequência interminável de pequenas alterações independentes.

Organize a implementação por fases, componentes e objetivos visuais.

Antes de alterar um componente:

- Verifique se ele já foi modificado.
- Consulte o código atual.
- Identifique dependências.
- Reaproveite decisões já aprovadas.
- Evite reconstruções redundantes.
- Agrupe mudanças relacionadas.
- Valide o conjunto após a implementação.

Não reescreva um arquivo inteiro quando uma alteração localizada e segura resolver o problema.

Entretanto, não preserve uma estrutura visual ruim apenas para minimizar o tamanho do diff.

O critério é a qualidade final, respeitando a integridade técnica do projeto.

Não entregue apenas:

- Uma nova paleta.
- Uma troca de fontes.
- Um cabeçalho reformulado.
- Um conjunto de cards.
- Uma página inicial bonita.
- Um arquivo CSS novo sem integração.
- Uma captura de tela.
- Uma lista de recomendações.
- Um protótipo não funcional.

**A missão exige o redesign integrado da aplicação inteira, com implementação real e validação.**

---

# 19. DEFINIÇÃO DE QUALIDADE VISUAL

A qualidade deve resultar da integração de todos os elementos.

Avalie a interface como um produto completo.

Pergunte:

- A referência visual é reconhecível no resultado?
- A identidade é consistente em todas as áreas?
- A hierarquia visual facilita a compreensão?
- A composição parece intencional?
- Os espaços estão bem distribuídos?
- A tipografia é confortável?
- As cores possuem propósito?
- Os componentes parecem pertencer ao mesmo sistema?
- O menu é intuitivo?
- A interface continua agradável após várias horas de estudo?
- O conteúdo extenso permanece organizado?
- O sistema funciona bem em dispositivos móveis?
- Os estados interativos são compreensíveis?
- Os recursos continuam funcionando?
- A interface evita elementos desnecessários?
- O resultado está livre de defeitos visuais relevantes?

Corrija os problemas identificados antes de declarar o trabalho concluído.

Não considere a mera ausência de erros de compilação como prova de qualidade visual.

---

# 20. RELATÓRIO FINAL OBRIGATÓRIO

Ao finalizar, apresente um relatório objetivo, baseado exclusivamente no que foi executado.

## A. Referência

- Localização efetiva de `index_example`.
- Características visuais identificadas.
- Como elas foram incorporadas ao FCN.

## B. Implementação

- Arquivos modificados.
- Componentes reconstruídos.
- Melhorias de layout.
- Melhorias responsivas.
- Melhorias de acessibilidade.
- Melhorias técnicas.

## C. Preservação funcional

Informe quais áreas foram verificadas e quais funcionalidades foram preservadas.

## D. Testes

Apresente uma tabela:

| Teste | Resultado | Evidência ou limitação |
|---|---|---|
| Estrutura | Aprovado/Falhou/Não executado | Evidência |
| Funcionalidade | Aprovado/Falhou/Não executado | Evidência |
| Responsividade | Aprovado/Falhou/Não executado | Evidência |
| Acessibilidade | Aprovado/Falhou/Não executado | Evidência |
| Publicação | Aprovado/Falhou/Não executado | Evidência |

Não classifique como aprovado um teste que não foi executado.

## E. Versionamento

Informe:

- Branch utilizada.
- Pull request relacionado, se houver.
- Commit criado.
- Arquivos abrangidos pelo commit.
- Situação final do repositório.

## F. Limitações

Registre os impedimentos e testes pendentes.

Não oculte falhas, não invente resultados e não declare a publicação concluída sem evidências.

---

# 21. INSTRUÇÃO FINAL

Execute o redesign completo do FCN utilizando `index_example` como referência visual prioritária.

Comece pela investigação do repositório e pela compreensão do modelo. Em seguida, defina a direção de arte, implemente o sistema visual, reconstrua a interface, adapte os componentes educacionais, valide a responsividade e execute os testes de regressão.

Trabalhe de maneira autônoma e sistemática, sem interrupções desnecessárias.

Preserve o conteúdo pedagógico, os recursos funcionais, os dados e a arquitetura estática.

Não invente funcionalidades. Não substitua comportamentos reais por demonstrações estáticas. Não esconda falhas. Não considere uma implementação parcial como conclusão.

O resultado deve combinar fidelidade ao modelo, excelência visual, clareza de navegação, qualidade de engenharia e integridade funcional.

**A prioridade é entregar um FCN visualmente excepcional, perfeitamente organizado, consistente em todas as telas e confiável para utilização real como ambiente de estudos.**

Comece pela inspeção completa do repositório e execute todas as fases até alcançar a melhor entrega tecnicamente verificável possível.
