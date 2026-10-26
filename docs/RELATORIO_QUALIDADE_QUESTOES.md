# Relatório heurístico de qualidade das questões

**Data:** 2026-10-26  
**Execução:** [GitHub Actions — validação, auditoria heurística e smoke test](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40249392754)  
**Script:** `scripts/audit_question_quality.mjs`

## Resultado estrutural

- Questões lidas: **396**.
- IDs duplicados: **0**.
- Pares com contexto e enunciado idênticos: **0**.
- Alertas heurísticos após correção das regras de falso positivo: **0**.
- Distribuição por módulo: M1=44, M2=54, M3=47, M4=85, M5=42, M6=44, M7=40, M8=40.
- Formatos: 321 questões de múltipla escolha e 75 itens de certo/errado.

## Achado editorial que exige revisão

Distribuição do gabarito nas 321 questões de múltipla escolha:

| Letra correta | Quantidade |
|---|---:|
| A | 145 |
| B | 131 |
| C | 29 |
| D | 8 |
| E | 8 |

As 24 questões novas do lote anterior foram balanceadas em suas posições corretas (A=4, B=5, C=5, D=5, E=5), sem alterar o texto das respostas ou as análises. O banco completo ainda apresenta concentração em A/B: essas letras representam 86,0% das 321 questões de múltipla escolha. Isso pode tornar o padrão previsível e exige revisão editorial do banco legado. A distribuição não prova que as respostas individuais estejam incorretas, mas é uma fragilidade de desenho de avaliação.

**Ação recomendada:** revisar manualmente cada questão e, quando necessário, reorganizar as alternativas sem alterar a resposta correta, a análise individual nem as justificativas que mencionam letras. Não reequilibrar o gabarito automaticamente sem preservar essas relações.

## Escopo e limitações

A auditoria verifica IDs, estrutura básica, alternativas, gabaritos, análises, duplicação de contexto/enunciado e alguns sinais textuais. Não valida automaticamente fatos, fontes, qualidade pedagógica, ambiguidade ou correção semântica. **Zero alertas heurísticos não significa zero erros.**

A matriz completa por questão está disponível no artefato `curriculum-audit-reports` da execução acima.


## Distribuição por módulo — evidência de 2026-10-26

| Módulo | A | B | C | D | E | Total MC |
|---|---:|---:|---:|---:|---:|---:|
| M1 | 3 | 18 | 4 | 1 | 0 | 26 |
| M2 | 8 | 16 | 8 | 2 | 3 | 37 |
| M3 | 3 | 14 | 10 | 2 | 2 | 31 |
| M4 | 38 | 43 | 3 | 0 | 0 | 84 |
| M5 | 24 | 14 | 1 | 1 | 0 | 40 |
| M6 | 30 | 1 | 1 | 1 | 1 | 34 |
| M7 | 29 | 0 | 1 | 1 | 2 | 33 |
| M8 | 10 | 25 | 1 | 0 | 0 | 36 |

A auditoria recomenda revisão manual de posições em M1, M4, M5, M6, M7 e M8. Em M6, 30/34 questões MC ainda têm gabarito A; em M7, o lote controlado reduziu a concentração para A=29/33; em M4, M5 e M8, a concentração em A/B também é extrema. O lote de 24 questões novas do ciclo anterior foi balanceado, mas isso não corrige automaticamente o banco legado.

Evidência e matriz heurística gerada: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.


## Consistência entre gabarito e rótulo da análise — 2026-10-26

A auditoria heurística também comparou os rótulos CORRETA/INCORRETA nas análises por alternativa com o gabarito declarado. Resultado: **0 incompatibilidades detectadas** nas questões que usam esses rótulos. Isso é uma checagem estrutural de consistência, não prova que o gabarito esteja factualmente correto.


## Limitação da revisão de fontes jurídicas — 2026-10-26

A auditoria heurística não avalia se cada artigo citado sustenta a afirmação. A revisão manual encontrou cinco pendências no M6: q-m6-03, q-m6-29, q-m6-31, q-m6-32 e q-m6-38. Os ajustes de q-m6-02 e q-m6-06 foram aplicados e passaram na execução https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250565014. A revisão legal do módulo permanece aberta.


## Balanceamento editorial controlado — piloto M7 — 2026-10-26

- Questão alterada: `q-m7-01`.
- A alternativa correta foi movida de A para E por troca apenas das posições de resposta “Dado” e “Metadado”.
- Gabarito atualizado para E; análises A/E remapeadas para manter a correspondência entre alternativa e rótulo CORRETA/INCORRETA.
- Enunciado, contexto, justificativa conceitual, regra, pegadinha e fonte foram preservados.
- O piloto é intencionalmente limitado a uma questão. Expandir a permutação somente após CI confirmar a integridade estrutural e após revisar referências a letras dentro de justificativas.
- A auditoria posterior confirmou o piloto: a distribuição de M7 após `q-m7-01` e o lote seguinte é A=29, B=0, C=1, D=1, E=2 nas 33 questões de múltipla escolha.


## Balanceamento editorial controlado — segundo lote M7 — 2026-10-26

- Questões reposicionadas neste lote: `q-m7-04` (A→E), `q-m7-05` (A→D) e `q-m7-07` (A→C).
- Em cada questão, a alternativa correta e sua análise foram movidas juntas; o texto da resposta, o enunciado, o contexto, a justificativa, a regra, a pegadinha e a fonte foram preservados.
- As alternativas foram reordenadas no array pela letra A–E para manter a ordem de apresentação.
- A inspeção dos três blocos não encontrou referências explícitas a letras nas justificativas. Isso não substitui revisão pedagógica do conteúdo.
- Somando o piloto anterior (`q-m7-01`, A→E), a distribuição esperada para as 33 questões MC de M7 passa a A=29, B=0, C=1, D=1, E=2. A execução de CI no HEAD `4df80216f1b0e6f20329a5345468ad56074f8abd` confirmou a integridade estrutural e a distribuição efetiva.
- O balanceamento segue sendo parcial: não foram alterados gabaritos conceituais, apenas posições de alternativas.


## Revalidação do lote M7 — HEAD `4df80216f1b0e6f20329a5345468ad56074f8abd`

- [CI do PR](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254853715) e [CI do push](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254851951): **success**.
- Sintaxe validada em 39 arquivos JavaScript; auditorias estruturais e heurísticas concluídas; smoke test Playwright/Chromium em `file://` aprovado, sem erros de página.
- Contagens confirmadas pelo artefato `curriculum-audit-reports`: 132 tópicos reconhecidos, 460 flashcards e 389 questões. A auditoria heurística identificou 0 IDs duplicados, 0 pares idênticos de contexto/enunciado e 0 alertas; isso não equivale a validação semântica.
- Distribuição MC atualizada: A=145, B=129, C=27, D=6, E=7; A/B representam 86,0% das 321 questões MC. M7: A=29, B=0, C=1, D=1, E=2 (33 MC). M6 continua A=30/30.
- Artefato com matrizes CSV e relatórios: `curriculum-audit-reports`, gerado na execução de CI do PR.


## Proveniência das questões M8 — 2026-10-26

A auditoria anterior detectou ausência do campo `fonte` em 40/40 questões M8. Foi aplicado um ajuste de proveniência: cada item agora identifica explicitamente o tópico curricular M8 e o assunto que fundamenta a questão, seguindo o padrão já utilizado no M7. Isso torna a origem curricular rastreável; **não representa citação de fonte externa independente** nem valida a correção factual do conteúdo. A auditoria de CI do novo HEAD deve confirmar os campos e a integridade sintática.


## Ampliação da cobertura de tópicos de síntese — 2026-10-26

Foram adicionadas sete questões autorais aos tópicos que a matriz de rastreabilidade identificava sem questão direta: uma em M1 (relatório técnico integrado), duas em M5 (IA generativa e engenharia de prompts) e quatro em M6 (ética/governança, redes sociais institucionais, acessibilidade e método de resolução). A contagem passa a 396 questões (321 MC e 75 itens certo/errado), distribuídas M1=44, M2=54, M3=47, M4=85, M5=42, M6=44, M7=40 e M8=40.

Distribuição MC após as sete inclusões: A=145, B=131, C=29, D=8, E=8. A/B representam 86,0% das 321 questões MC. A revisão editorial da distribuição permanece necessária. A primeira execução após a inclusão encontrou expectativas antigas no verificador e no smoke test; ambos foram atualizados. O CI do HEAD `09d657130a66ea2cfd7390909656ce5a7557e762` passou com 396 questões, 0 reprovadas no validador individual, 0 alertas heurísticos, smoke test em `file://` aprovado e `pageErrors: []`.


## Revalidação da ampliação de cobertura — HEAD `09d657130a66ea2cfd7390909656ce5a7557e762`

- [Validação curricular e smoke test](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40255954463): **success**.
- [Checks do PR](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40255953600) e [qualidade de código](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40255953485): **success**.
- Sintaxe verificada em 39 arquivos JavaScript; total de 396 questões carregadas, distribuição por módulo conforme acima e zero questões reprovadas pelo validador individual.
- Auditoria heurística: 0 IDs duplicados, 0 pares de contexto/enunciado idênticos e 0 alertas. Resultado estrutural, não prova de correção semântica.
- Smoke test Playwright/Chromium usando `file://`: **PASS**, 396 questões conectadas ao quiz e `pageErrors: []`.
- Revisão editorial adicional: as análises das quatro questões novas M6 foram individualizadas para explicar cada distrator. Ainda é necessária uma revisão semântica independente do conjunto completo de sete questões novas e das respectivas fontes.


## Revisão editorial dirigida das sete questões novas

Triagem manual do texto, gabarito, justificativa e análises por alternativa:

- `q-m1-44`: gabarito C coerente com estilos, quebras de seção e atualização de campos. A justificativa foi detalhada para exigir verificação de marcação estrutural, ordem de leitura, idioma, texto alternativo e teste do PDF exportado; apenas escolher uma opção de exportação não comprova acessibilidade.
- `q-m5-41`: gabarito D coerente com recuperação de atos vigentes, evidência verificável, encaminhamento de lacunas e avaliação de fidelidade.
- `q-m5-42`: gabarito B coerente com fonte/versionamento, formato de saída, evidência, tratamento de lacunas, minimização de dados e avaliação.
- `q-m6-41`: gabarito E é a conduta prudente. O enunciado não conclui automaticamente que existe conflito jurídico; remete o enquadramento ao procedimento e ao regime aplicável.
- `q-m6-42`: gabarito C cobre identidade individual, privilégio mínimo, autenticação, rastreabilidade e aprovação editorial.
- `q-m6-43`: gabarito D trata as barreiras descritas e inclui avaliação por abandono; a implementação deve preservar alternativas de atendimento adequadas.
- `q-m6-44`: gabarito B descreve um método de resolução consistente com a necessidade de identificar contexto, regime e dispositivo aplicável.

**Limite da revisão:** não foi identificado erro evidente de gabarito nesta triagem, mas ela não equivale a revisão jurídica independente nem valida todas as fontes externas. As referências dessas sete questões apontam principalmente para os tópicos curriculares internos; quando usadas como questões de prova com pretensão normativa específica, devem ser complementadas por fontes oficiais pertinentes. A distribuição de gabaritos do banco completo continua sendo um problema editorial separado.
\n\n## Estado de validação após correções de acessibilidade — 2026-10-26\n\nNo HEAD `3ae660db7e23f0594e347e6c59701bd1f61746b2`, a auditoria curricular e o smoke test Chromium/Playwright via `file://` passaram ([execução](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40256956212)). O banco carregou 396 questões; o inventário de controles registrou 465 controles, zero sem nome acessível, zero imagens sem `alt`, link de salto presente, um marco `main` e `pageErrors: []`. O relatório heurístico continua com zero IDs duplicados, zero pares idênticos de contexto/enunciado e zero alertas.\n\nA distribuição de múltipla escolha permanece A=145, B=131, C=29, D=8 e E=8. **Não corrigir essa assimetria com permutações automáticas cegas:** cada candidato exige conferência do texto da alternativa correta, gabarito, justificativa e análise dos distratores. Smoke test e auditoria heurística não são uma validação pedagógica independente.

## Balanceamento editorial M4, M6 e M8 — estado consolidado — 2026-10-26

Foram realizados lotes controlados de reposicionamento das alternativas corretas, preservando o texto da resposta, o gabarito, as análises por alternativa e as referências explícitas às letras:

- **M4:** `q-m4-29`, `q-m4-48`, `q-m4-50`, `q-m4-52`, `q-m4-63`, `q-m4-65`, `q-m4-66`, `q-m4-68`, `q-m4-69`, `q-m4-73` — resposta correta de A para C.
- **M6:** `q-m6-01`, `q-m6-02`, `q-m6-04`, `q-m6-05`, `q-m6-07`, `q-m6-09`, `q-m6-11`, `q-m6-15` — resposta correta de A para C.
- **M8:** `q-m8-15`, `q-m8-21`, `q-m8-25`, `q-m8-37`, `q-m8-40` — resposta correta de A para C.

A distribuição consolidada das **321 questões de múltipla escolha** no HEAD `75a42f115be0305d939d487a481645f166423513` é:

| Gabarito | Quantidade |
|---|---:|
| A | 110 |
| B | 131 |
| C | 64 |
| D | 8 |
| E | 8 |
| **Total** | **321** |

A e B somam 241/321 (75,1%), uma redução em relação aos 86,0% registrados antes dos lotes recentes. A distribuição não é uniforme e ainda exige revisão editorial, especialmente M5 (A=24, B=14) e M8 (B=25). M6 também permanece assimétrico (A=22, C=9). Não se deve perseguir uniformidade artificial se isso exigir distratores ruins ou respostas ambíguas.

**Validação automatizada:** no HEAD `75a42f115be0305d939d487a481645f166423513`, auditoria curricular/smoke test, workflow do PR e Code Quality concluíram com sucesso: [auditoria](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40258812457), [PR](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40258810281), [Code Quality](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40258810062). Esses testes verificam estrutura e execução automatizada; não substituem revisão pedagógica independente nem validação jurídica externa.


## Lote editorial M5 — 2026-10-26

Foram revisadas as questões `q-m5-05`, `q-m5-09`, `q-m5-13`, `q-m5-14`, `q-m5-15`, `q-m5-16`, `q-m5-17` e `q-m5-18`. A alternativa correta foi movida de A para C, com remapeamento conjunto das alternativas, gabaritos, análises e menções explícitas a letras. Durante a conferência, a opção correta de `q-m5-14` foi reescrita para distinguir rotulagem, atributos e variável-alvo sem classificá-los genericamente como etapas da coleta.

Após esse lote, a distribuição global recalculada é A=102, B=131, C=72, D=8 e E=8 (321 questões MC). A/B somam 233/321 (72,6%). M5 passa a A=16, B=14, C=9, D=1, E=0 em 40 questões MC. Esses números refletem a contagem estática do banco na branch; a confirmação final de integridade e execução depende dos workflows do HEAD mais recente.

## Revisão semântica dirigida — lote M6 q45–q47 — 2026-10-26

Lote revisado no texto versionado de `apostila-ia/assets/data/questions_m6.js`, após confirmação de que o CI do HEAD anterior estava verde:

- **`q-m6-45` — princípios administrativos e automação:** gabarito C coerente com o cenário e com os distratores. A questão é uma síntese de governança, não uma regra legal específica sobre revisão humana. A fonte foi esclarecida para separar os princípios constitucionais gerais das práticas de documentação, avaliação de risco, revisão e contestação.
- **`q-m6-46` — retificação de informação institucional:** gabarito B coerente. A referência Secom é apoio orientativo; a questão não atribui ao guia uma obrigação legal específica. O registro e a preservação da correção devem seguir o procedimento institucional aplicável.
- **`q-m6-47` — acessibilidade:** gabarito D coerente. A melhora na taxa agregada de conclusão não demonstra conformidade integral; a referência WCAG 2.2 deve ser lida em conjunto com os testes técnicos e com avaliação por usuários diversos. A questão não declara que uma única métrica comprova conformidade.

**Resultado do lote:** não foi identificado erro evidente de gabarito nem ambiguidade que exigisse trocar a alternativa correta. Foi corrigida a explicitação do escopo da fonte de `q-m6-45`. Não se alteraram os textos das alternativas ou os gabaritos das três questões.

**Limites:** revisão semântica focal do enunciado, gabarito, justificativa, análise de alternativas e fonte declarada; não equivale a parecer jurídico, auditoria de acessibilidade completa ou revisão independente de todo o banco. O CI deve ser revalidado após os commits deste lote.

## Revisão semântica dirigida — lote M5 q36–q40 — 2026-10-26

- **`q-m5-36` (underfitting):** definição e gabarito coerentes; erro alto em treinamento e validação é um sinal típico de capacidade insuficiente, considerado junto ao contexto do modelo.
- **`q-m5-37` (validação cruzada):** finalidade corretamente descrita como estimativa mais estável de desempenho em partições distintas; a validação cruzada não cria dados e não substitui automaticamente um conjunto de teste final.
- **`q-m5-38` (curva de aprendizado):** corrigida a descrição anterior, que atribuía queda do erro de treino ao aumento da amostra como padrão geral. O novo cenário descreve erro de treino subindo levemente, erro de validação caindo e curvas se aproximando. A interpretação é apresentada como evidência compatível com melhor generalização, não como garantia.
- **`q-m5-39` (precisão):** fórmula `VP / (VP + FP)` e distinção em relação a recall e acurácia coerentes.
- **`q-m5-40` (RMSE e MAE):** refinada a conclusão para dizer que erros de maior magnitude pesam desproporcionalmente no RMSE. A diferença entre as métricas, isoladamente, não prova que o modelo seja bom em média nem identifica a causa dos erros.

**Resultado do lote:** uma correção conceitual na questão 38 e uma precisão interpretativa na questão 40; os gabaritos foram mantidos porque as alternativas corretas continuam adequadas após a revisão. Revisão focal do conteúdo e das justificativas, não auditoria independente de todas as fontes acadêmicas.

