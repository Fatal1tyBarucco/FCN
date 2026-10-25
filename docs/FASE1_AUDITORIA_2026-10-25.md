# Fase 1 — auditoria do estado remoto e inventário de execução

Data da inspeção: 2026-10-25  
Repositório: `Fatal1tyBarucco/FCN`  
Branch-base inspecionada: `main`  
Branch de trabalho: `feat/fase-1-orquestracao-20261025`  
Fonte de requisitos: `Escrita.txt` (raiz; SHA consultado: `a7da4ad0c8905e2f7ece405dfe4a3b95518cbb76`).

## Resultado desta etapa

**Fase 1: inventário inicial consolidado a partir dos artefatos existentes; normalização integral da matriz por subtópico ainda pendente.** Esta é uma auditoria remota de arquivos no GitHub. Não foi executado código do repositório nem navegador nesta etapa, e não se atribuem testes locais a esta inspeção.

### Evidências remotas consultadas

- `Escrita.txt`: prompt mestre acessível na raiz do repositório.
- `README.md`: confirma SPA estática HTML/CSS/JS, sem framework/build, publicada via GitHub Pages a partir de `apostila-ia/`.
- `AGENTS.md`: descreve a estrutura de dados, módulos e restrições operacionais.
- `inventario/INVENTARIO_CURRICULAR.md` e `docs/INVENTARIO_CURRICULAR.md`: declaram 8 módulos, 37 unidades, 132 tópicos, 295 subtópicos, 427 nós, 885 exemplos, 590 exercícios, 404 flashcards e 365 questões.
- `docs/MATRIZ_COBERTURA.csv`: é uma matriz **agregada por módulo** (8 linhas de módulos + total), não uma matriz rastreável por subtópico.
- `apostila-ia/assets/data/curriculum.js`: contém dados curriculares literais do Módulo 1.
- `apostila-ia/assets/data/questions.js`: define esquema de questão com gabarito, justificativa, análise de alternativas, regra e pegadinha; seus comentários registram limitações históricas de cobertura que precisam ser reconciliadas com os arquivos atuais.
- `docs/PLANO_EXECUCAO.md`, `docs/DECISOES_ARQUITETURAIS.md`, `docs/RELATORIO_TESTES.md` e `docs/PENDENCIAS.md`: já existem, mas registram estados/datas diferentes entre si e devem ser reconciliados na próxima atualização.

### Inventário inicial declarado pelo repositório

| Módulo | Disciplina | Unidades | Tópicos | Subtópicos | Flashcards declarados | Questões declaradas | Estado editorial atual |
|---|---|---:|---:|---:|---:|---:|---|
| M1 | Microsoft 365 e aplicações de escritório | 5 | 23 | 37 | 50 | 40 | Parcial segundo o inventário existente |
| M2 | Redes de computadores | 5 | 19 | 52 | 50 | 40 | Declarado completo; requer auditoria por requisito |
| M3 | Comunicação e colaboração | 5 | 14 | 35 | 50 | 40 | Declarado completo; requer auditoria por requisito |
| M4 | Segurança da informação e governança digital | 4 | 13 | 39 | 54 | 85 | Declarado completo; distribuição de questões difere dos demais módulos |
| M5 | Inteligência artificial | 4 | 13 | 35 | 50 | 40 | Declarado completo; requer auditoria por requisito |
| M6 | Ética e responsabilidade digital no serviço público | 6 | 18 | 46 | 50 | 40 | Declarado completo; requer auditoria normativa |
| M7 | Fundamentos e engenharia de dados | 3 | 9 | 23 | 50 | 40 | Declarado completo; requer auditoria por requisito |
| M8 | Visualização, análise e storytelling com dados | 5 | 23 | 28 | 50 | 40 | Declarado completo; requer auditoria por requisito |
| **Total** | — | **37** | **132** | **295** | **404** | **365** | **Números herdados dos documentos; ainda precisam de recálculo reproduzível nesta execução** |

As contagens acima são transcritas dos documentos versionados no repositório, não foram recalculadas nesta inspeção. Portanto, são **valores declarados pelo projeto**, não novos resultados de teste.

## Requisitos de conteúdo a auditar

A matriz de aceite de `Escrita.txt` exige, no mínimo: 8 módulos; conteúdo efetivo para todos os subtópicos; objetivos, explicações, verificações de aprendizagem e pelo menos 3 exemplos resolvidos por unidade; 400 flashcards; 320 questões autorais com justificativas e análise dos distratores; cinco tipos de gráficos; simuladores reais dentro do escopo documentado; busca sobre conteúdo real; áudio com contingências; referências e vídeos sem URLs inventadas; persistência; responsividade; acessibilidade; abertura direta de `index.html` testada; e evidências para cada teste.

## Lacunas documentais identificadas

1. `docs/MATRIZ_COBERTURA.csv` só permite conferir agregados por módulo; não rastreia individualmente os 427 nós curriculares nem associa conteúdo, exemplos, exercícios, flashcards, questões, fontes, testes e status.
2. As contagens de inventário e relatório de testes são datadas de 2026-10-23/24 e não foram reproduzidas nesta inspeção remota.
3. `docs/PLANO_EXECUCAO.md` contém afirmações de status que não são totalmente consistentes entre o resumo inicial e as seções posteriores. Não devem ser interpretadas como evidência de que todos os critérios de aceite passaram.
4. O estado de renderização declarado não prova a profundidade didática nem o funcionamento de cada interação.
5. A matriz de fontes precisa relacionar cada referência a um tópico e a uma data de verificação; a mera contagem de URLs não prova validade ou pertinência.
6. Os critérios de execução em `file://`, armazenamento, áudio, embeds, acessibilidade e navegação precisam de evidência de teste identificável e reproduzível.

## Saída da Fase 1

- Requisitos autoritativos localizados.
- Estrutura atual do produto identificada.
- Contagens existentes transcritas sem alegar recálculo.
- Lacunas e inconsistências documentais registradas.
- Fase 2 deve inspecionar os arquivos completos e executar contagens/testes reproduzíveis antes de modificar código funcional.

## Limites desta evidência

Esta etapa usou leitura de arquivos remotos por meio da integração GitHub. Não houve clone local, execução de JavaScript, teste de interface, validação de navegador, execução de workflow, revisão humana independente de todo o conteúdo ou chamada de subagentes. Nenhuma dessas atividades é declarada concluída.


## Continuação da execução — Fase 2 (2026-10-25)

### Inspeção estática ampliada

Foram consultados os oito arquivos de currículo em `apostila-ia/assets/data/`:

| Módulo | Arquivo | Linhas | IDs de subtópico reconhecidos pelo padrão do arquivo |
|---|---|---:|---:|
| M1 | `curriculum.js` | 824 | 37 |
| M2 | `curriculum_m2.js` | 1.977 | 52 |
| M3 | `curriculum_m3.js` | 811 | 35 |
| M4 | `curriculum_m4.js` | 717 | 39 |
| M5 | `curriculum_m5.js` | 653 | 35 |
| M6 | `curriculum_m6.js` | 878 | 46 |
| M7 | `curriculum_m7.js` | 892 | 23 |
| M8 | `curriculum_m8.js` | 1.165 | 28 |
| **Total** | 8 arquivos | **7.917** | **295** |

Os IDs do M1 seguem o padrão `modulo-1-unidade-N-topico-N-sub-N`; os módulos M2–M8 usam `mN-uN-tN-sN`. A contagem usa padrões específicos de IDs nos arquivos, não executa o JavaScript e não avalia a qualidade semântica dos textos.

### Matriz curricular rastreável

O arquivo `docs/MATRIZ_COBERTURA.csv` foi substituído por uma matriz com uma linha para cada um dos 295 IDs de subtópico encontrados nos oito arquivos. Cada linha registra ID, módulo, arquivo de origem, título capturado e indicadores estáticos para presença de objetivo, conteúdo, array de exemplos, array de exercícios e indício de fonte.

**Limitação importante:** os campos `*_presente` são indicadores de presença textual aproximados, não contagens nem avaliação de qualidade. A coluna `status_auditoria` permanece `não revisado qualitativamente`; a matriz não afirma que os 295 subtópicos estão completos. O indicador de fontes detecta apenas um padrão simples de array/URL e não comprova validade da referência.

### Estado atualizado

- Fase 1: inventário inicial e lacunas documentais registrados.
- Fase 2: inspeção estática dos oito arquivos curriculares concluída para extração dos IDs; matriz rastreável inicial gerada.
- Ainda pendente na Fase 2: recálculo dos exemplos, exercícios, flashcards e questões; verificação de IDs duplicados e referências cruzadas; comparação campo a campo com os critérios do prompt mestre; execução de testes locais e de navegador.
- Não houve alteração do código funcional, execução de JavaScript, testes de interface ou delegação a subagentes nesta continuação.


## Continuação da execução — Fase 2 (2026-10-25)

Foram consultados os oito arquivos curriculares: M1 `curriculum.js` (824 linhas, 37 IDs), M2 `curriculum_m2.js` (1.977 linhas, 52 IDs), M3 `curriculum_m3.js` (811 linhas, 35 IDs), M4 `curriculum_m4.js` (717 linhas, 39 IDs), M5 `curriculum_m5.js` (653 linhas, 35 IDs), M6 `curriculum_m6.js` (878 linhas, 46 IDs), M7 `curriculum_m7.js` (892 linhas, 23 IDs) e M8 `curriculum_m8.js` (1.165 linhas, 28 IDs). Total: 7.917 linhas e 295 IDs reconhecidos por padrões de nomenclatura.

`docs/MATRIZ_COBERTURA.csv` foi atualizado para conter uma linha por cada um dos 295 IDs de subtópico identificados. A matriz registra ID, módulo, arquivo de origem, título capturado e indicadores textuais aproximados de objetivo, conteúdo, exemplos, exercícios e indícios de fontes. A coluna de auditoria permanece explicitamente como `nao revisado qualitativamente`.

Limitação: a extração é estática, não executa o JavaScript e não prova suficiência didática, validade de fontes ou funcionamento. Os indicadores de presença são heurísticos. Ainda não foram recalculados exemplos, exercícios, flashcards ou questões; não houve testes de navegador nem revisão por subagentes nesta etapa. A Fase 2 continua em andamento.


## Continuação — inventário de questões e flashcards (2026-10-25)

### Questões

A inspeção dos bancos atuais encontrou 365 registros de questão, distribuídos assim: `questions.js` (120; M1–M3), `questions_m4.js` (85), `questions_m5.js` (40), `questions_m6.js` (40), `questions_m7.js` (40) e `questions_m8.js` (40). Os IDs observados são únicos dentro de cada arquivo. Isso confirma a soma documental de 365 registros, mas não comprova a qualidade dos enunciados, validade dos gabaritos, dificuldade, ausência de duplicatas semânticas ou cobertura integral do currículo. Os módulos M4–M8 usam arquivos separados; não foram encontrados arquivos `questions_m2.js` ou `questions_m3.js` nos caminhos consultados, pois essas questões estão no banco compartilhado `questions.js`.

### Flashcards

Os oito arquivos `flashcards_m1.js` a `flashcards_m8.js` contêm 404 registros: 50 em M1, 50 em M2, 50 em M3, 54 em M4 e 50 em cada um de M5–M8. Os IDs observados são únicos dentro de cada arquivo. A soma confirma a meta numérica declarada de pelo menos 400 flashcards. A distinção semântica, a qualidade das respostas e a cobertura por subtópico ainda precisam de revisão.

### Exemplos e exercícios: ressalva de contagem

A busca textual encontrou 298 arrays chamados `exemplos` e 298 arrays chamados `exercicios` nos oito arquivos de currículo. **Esses números não são quantidades de exemplos ou exercícios**: cada array pode conter vários itens, e a contagem inclui estruturas que ainda precisam ser validadas. A contagem real de itens exige analisar os objetos completos, validar a estrutura de dados e conferir os critérios do `Escrita.txt`. Portanto, os números históricos de 885 exemplos e 590 exercícios continuam não verificados.

### Critérios do prompt mestre relevantes para a próxima etapa

O `Escrita.txt` exige rastreabilidade de disciplina até objetivo, conteúdo, exemplo, exercício e critério de domínio; IDs estáveis; painel de cobertura para assuntos incompletos/sem exercícios; três exemplos resolvidos de naturezas distintas por subtópico conforme aplicável; simulador de planilha com cálculos reais para funções explicitamente suportadas; simuladores defensivos com dados fictícios; e pelo menos 50 flashcards autorais por módulo (mínimo global de 400). Os 404 flashcards atendem ao piso numérico, mas não constituem prova de distinção ou cobertura completa. A inspeção desta etapa não verificou todos os critérios didáticos e funcionais.


## Continuação — integridade estrutural dos bancos (2026-10-25)

### Questões: campos estruturais

A contagem textual por arquivo encontrou a mesma quantidade de campos `enunciado`, `gabarito` e `justificativa` para todos os 365 registros: banco compartilhado (120), M4 (85), M5 (40), M6 (40), M7 (40) e M8 (40). Isso é um indicador estrutural positivo, mas não equivale a validar o valor de cada gabarito ou a correção da justificativa. A contagem de campos de alternativas varia por arquivo; como o banco declara mais de um formato de questão, isso precisa ser validado por formato antes de classificar qualquer caso como defeito.

### Carregamento de scripts

A inspeção de `apostila-ia/index.html` encontrou referências explícitas aos oito arquivos de currículo, oito arquivos de flashcards, seis bancos de questões (o compartilhado e M4–M8), referências e módulos JavaScript da interface. A presença de uma tag `<script>` não prova que o arquivo carregue corretamente, que a ordem de inicialização esteja correta em runtime ou que os recursos funcionem via `file://`.

### CI

Na consulta do status combinado e das execuções de workflow para o commit desta atualização, não foram retornados status nem execuções associados. Portanto, CI permanece **sem evidência de execução**, e não deve ser marcado como aprovado.


## Continuação — recálculo de exemplos e exercícios (2026-10-25)

Foi feita uma contagem estática dos objetos de primeiro nível dentro dos arrays `exemplos` e `exercicios` nos oito arquivos curriculares, removendo comentários JavaScript antes da contagem para não incluir blocos legados comentados. O procedimento reconhece os arrays de objetos, mas não executa o código nem valida se cada item é didaticamente completo.

| Módulo | Subtópicos ativos identificados | Exemplos em arrays ativos | Exercícios em arrays ativos |
|---|---:|---:|---:|
| M1 | 37 | 114 | 76 |
| M2 | 52 | 156 | 104 |
| M3 | 35 | 105 | 70 |
| M4 | 39 | 117 | 78 |
| M5 | 35 | 105 | 70 |
| M6 | 46 | 138 | 92 |
| M7 | 23 | 69 | 46 |
| M8 | 28 | 84 | 56 |
| **Total** | **295** | **888** | **592** |

### Divergência em relação ao inventário histórico

O inventário anterior declarava 885 exemplos e 590 exercícios. A contagem estática atual aponta 888 e 592, respectivamente: diferença de **+3 exemplos** e **+2 exercícios**. Os valores históricos não devem ser usados como totais exatos sem atualização. A diferença pode decorrer de contagem anterior, conteúdo adicionado ou critérios diferentes; esta inspeção não determina a causa.

A contagem representa itens estruturados nos arrays curriculares ativos. Não comprova que cada exemplo seja resolvido em três naturezas distintas, nem que cada exercício tenha dificuldade, resposta e explicação adequadas conforme o prompt mestre. A próxima auditoria deve conferir os campos de cada item e a vinculação por subtópico.


## Continuação — integridade de IDs e distribuição temática de flashcards (2026-10-25)

### Integridade de IDs

Foi feita inspeção estática dos oito bancos de flashcards e dos seis arquivos de questões.

- Flashcards: **404 IDs, 404 únicos globalmente**, sem duplicatas identificadas entre arquivos.
- Questões: **365 IDs**, sem duplicatas identificadas dentro de cada arquivo. Os prefixos dos bancos são separados por módulo; a comparação global de todos os 365 IDs será mantida como verificação explícita adicional na próxima rodada.
- Todos os registros inspecionados nesses bancos tinham campo `topico`; isso não comprova que a referência aponte para um nó curricular existente.

### Distribuição de flashcards por referência temática

| Módulo | Cartões | Referências `topico` distintas | Observação |
|---|---:|---:|---|
| M1 | 50 | 15 | Distribuição concentrada: 21 cartões apontam para `m1-u1-t1`; as demais referências têm de 1 a 3 cartões cada. |
| M2 | 50 | 5 | Há 10 cartões para cada uma de cinco referências, uma por unidade (`m2-u1-t1` até `m2-u5-t1`). Cobertura de tópicos dentro das unidades não demonstrada. |
| M3 | 50 | 4 | 25 cartões apontam para `m3-u1-t1`; os outros 25 se distribuem por três referências. Forte concentração temática. |
| M4 | 54 | 13 | Distribuição relativamente regular, com 4 cartões em 11 referências e 6 em duas referências. |
| M5 | 50 | 5 | Referências concentradas nas unidades 1 e 2; não há referências distintas além das cinco observadas. |
| M6 | 50 | 18 | Cobertura temática mais distribuída; frequências de 1 a 7 por referência. |
| M7 | 50 | 9 | Nove referências distintas, com concentração em `m7-u2-t3` (10 cartões). |
| M8 | 50 | 23 | Maior dispersão; frequências de 1 a 5 por referência. |

Os valores de `topico` seguem convenções compactas (`mN-uN-tN`), enquanto os IDs dos subtópicos curriculares podem usar formatos mais longos. Portanto, a contagem de referências distintas mede distribuição declarada, não validação semântica dos vínculos. M2, M3 e M5 são prioridades para conferir se as referências compactas cobrem os tópicos previstos ou se representam cobertura parcial.

### Limite desta etapa

Esta etapa não avalia originalidade, duplicação semântica, precisão factual, qualidade das respostas, nível cognitivo nem aderência individual ao `Escrita.txt`. Nenhum código funcional foi alterado; as descobertas foram registradas para orientar a próxima auditoria.


## Ajuste metodológico — normalização das referências `topico` (2026-10-25)

A comparação inicial por igualdade literal entre `topico` dos flashcards e `id` curricular não é um teste válido para este repositório: os arquivos usam convenções equivalentes distintas. Exemplos observados diretamente nos currículos: `modulo-2-unidade-1-topico-1` e `m2-u1-t1-s1`; nos flashcards, `m2-u1-t1`. Da mesma forma, alguns bancos de questões referenciam a unidade (`modulo-4-unidade-1`), enquanto outros referenciam tópicos ou subtópicos. Portanto, a contagem inicial de zero correspondências exatas não deve ser interpretada como 404 referências quebradas; ela apenas demonstra que a igualdade textual não é adequada.

A validação correta precisa normalizar módulo/unidade/tópico/subtópico, aceitar referências válidas ao nível da unidade ou tópico quando o formato do banco permitir, e verificar a existência da coordenada no currículo correspondente. A distribuição temática reportada anteriormente permanece útil como contagem das strings declaradas, mas qualquer conclusão de lacuna deve aguardar essa normalização. Nenhum ID foi alterado, para evitar reescrever referências válidas sem uma prova de incompatibilidade.


## Continuação — estrutura de exemplos e exercícios (2026-10-25)

A contagem estática dos campos `tipo` nos arquivos curriculares encontrou cinco categorias recorrentes: `introducao`, `aplicacao`, `erro`, `certos_erro` e `multipla`. Nos módulos M2–M8, cada categoria aparece tantas vezes quanto o número de subtópicos identificado no arquivo. Em M1, foram encontrados 38 registros de cada categoria para 37 subtópicos, uma diferença de um registro por categoria que exige reconciliação estrutural antes de considerar a distribuição perfeitamente alinhada.

| Módulo | Subtópicos identificados | Registros `introducao` | `aplicacao` | `erro` | `certos_erro` | `multipla` |
|---|---:|---:|---:|---:|---:|---:|
| M1 | 37 | 38 | 38 | 38 | 38 | 38 |
| M2 | 52 | 52 | 52 | 52 | 52 | 52 |
| M3 | 35 | 35 | 35 | 35 | 35 | 35 |
| M4 | 39 | 39 | 39 | 39 | 39 | 39 |
| M5 | 35 | 35 | 35 | 35 | 35 | 35 |
| M6 | 46 | 46 | 46 | 46 | 46 | 46 |
| M7 | 23 | 23 | 23 | 23 | 23 | 23 |
| M8 | 28 | 28 | 28 | 28 | 28 | 28 |

A estrutura sugere três exemplos (`introducao`, `aplicacao`, `erro`) e dois exercícios (`certos_erro`, `multipla`) por subtópico, em linha com o padrão descrito nos comentários dos arquivos. Entretanto, a contagem por tipo não substitui a leitura individual de cada objeto. Em particular, o exemplo do tipo `erro` pode usar `correcao` em vez de `resposta`; um validador deve aceitar o campo semanticamente adequado e exigir que exista uma solução/correção não vazia, em vez de verificar apenas uma chave fixa.

### Validações ainda necessárias

- Conferir o registro adicional em M1 e identificar a qual nó curricular pertence.
- Validar enunciado e resposta/correção não vazios em cada exemplo e exercício.
- Confirmar três exemplos e dois exercícios por subtópico real, não apenas totais por arquivo.
- Avaliar se os exemplos são realmente distintos e se o nível avançado/interpretação de erro está presente em conteúdo, não apenas no rótulo `tipo`.


## Normalização validada de referências de flashcards — M2 e M3 (2026-10-25)

Foi executada uma comparação estática das referências compactas dos flashcards contra as coordenadas de unidade/tópico extraídas dos currículos M2 e M3. A comparação normalizou os formatos `modulo-N-unidade-N-topico-N` e `mN-uN-tN`; não exigiu igualdade textual literal.

| Módulo | Tópicos curriculares | Cartões analisados | Referências válidas | Tópicos distintos cobertos por referência | Tópicos não representados pelas referências dos cartões |
|---|---:|---:|---:|---:|---:|
| M2 — Redes | 19 | 50 | 50/50 | 5/19 | 14 |
| M3 — Comunicação e colaboração | 14 | 50 | 50/50 | 4/14 | 10 |

Distribuição observada:
- **M2:** 10 cartões em cada uma das referências `m2-u1-t1` a `m2-u5-t1`; todas correspondem ao primeiro tópico de cada unidade. Não foram encontradas referências inválidas entre os 50 cartões analisados.
- **M3:** 25 cartões em `m3-u1-t1`; os outros 25 distribuem-se por `m3-u2-t1` (6), `m3-u2-t2` (11) e `m3-u2-t3` (8). Não foram encontradas referências inválidas entre os 50 cartões analisados.

**Interpretação:** a validação elimina a hipótese de referências inválidas nesses dois bancos, mas evidencia cobertura temática limitada quando comparada com todos os tópicos do currículo. Os tópicos sem referência de flashcard não são necessariamente ausência de conteúdo didático: são uma lacuna específica de distribuição de cartões, a confirmar contra o critério editorial do `Escrita.txt`. A verificação não foi estendida nesta rodada aos módulos M1 e M4–M8, nem aos bancos de questões.

### Próximos passos

1. Aplicar a mesma normalização a M1 e M4–M8 e a todos os 365 registros de questões, aceitando referências válidas em nível de unidade, tópico ou subtópico conforme o esquema.
2. Conferir globalmente a unicidade dos IDs das 365 questões.
3. Decidir, com base no requisito de cobertura do prompt mestre, se os flashcards precisam ser redistribuídos ou complementados para representar tópicos atualmente sem referência.
4. Não considerar esta auditoria estática como teste de execução da aplicação.


## Normalização de referências do banco compartilhado de questões — M1 a M3 (2026-10-25)

O arquivo `apostila-ia/assets/data/questions.js` foi inspecionado por padrão estrutural e as referências foram normalizadas para coordenadas de módulo/unidade/tópico/subtópico, comparando-as com os três currículos correspondentes.

| Módulo | Questões | IDs únicos no banco | Referências distintas | Referências inválidas encontradas |
|---|---:|---:|---:|---:|
| M1 | 40 | 40 | 22 | 0 |
| M2 | 40 | 40 | 7 | 0 |
| M3 | 40 | 40 | 8 | 0 |
| **Total** | **120** | **120** | — | **0** |

Resultado: os 120 registros extraídos têm IDs únicos no banco compartilhado, e todas as referências `topico` verificadas apontam para coordenadas existentes nos currículos M1–M3. A verificação aceita referências em nível de unidade, tópico ou subtópico quando a coordenada corresponde a um nó real. Não foi feita nesta rodada a validação de conteúdo, gabaritos, justificativas, duplicação semântica ou distribuição adequada das questões entre todos os tópicos. Os bancos M4–M8 continuam pendentes de validação por coordenadas e unicidade global.

**Método e limite:** análise estática dos arquivos remotos; o código da aplicação não foi executado. O padrão de extração procura IDs e referências declaradas, mas não é substituto para parsing/execução completa do JavaScript.
