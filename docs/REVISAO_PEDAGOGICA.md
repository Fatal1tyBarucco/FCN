# Revisão Pedagógica por Amostragem — M1 (incluindo 1.3), M4, M6, M8

**Data:** 2026-10-24
**Escopo:** revisão amostral dos módulos M1 (unidades 1.1 a 1.5, com ênfase em 1.2, 1.3, 1.4, 1.5), M4 (Segurança da Informação e Governança Digital), M6 (Ética e Responsabilidade Digital no Serviço Público) e M8 (Visualização, Análise e Storytelling com Dados).
**Critérios aplicados:** precisão conceitual; presença de ≥3 exemplos resolvidos distintos (introdução/aplicação/erro); ≥2 exercícios; objetivos de aprendizagem claros; ausência de placeholders; ausência de afirmações não verificáveis (ou marcação explícita de não verificação).
**Fontes consultadas:** `apostila-ia/assets/data/curriculum*.js` (código é a fonte de verdade), `referencias/referencias-verificadas.md`, `AGENTS.md`, `Escrita.txt` (prompt mestre).
**Contagem de nós (baseline preservada):** 427 nós (132 tópicos + 295 subtópicos) — sem regressão após as correções.

## Metodologia

1. Leitura integral dos arquivos `curriculum.js` (M1), `curriculum_m4.js`, `curriculum_m6.js` e `curriculum_m8.js`.
2. Validação estrutural automatizada (Node/vm) de todos os subtópicos dos quatro módulos: presença de `objetivoAprendizagem`, `conteudo`, ≥3 exemplos com tipos `introducao`/`aplicacao`/`erro` e ≥2 exercícios; varredura de placeholders literais (`A SER IMPLEMENTADO`, `PARCIAL —`, `TODO:`, `lorem`, `a implementar`).
3. Revisão conceitual amostral dos subtópicos de maior risco (leis, números específicos de produto, fórmulas, estatísticas).
4. Correções pontuais aplicadas somente onde havia defeito claro (precisão, exemplo inconsistente, afirmação não verificável, erro de digitação). IDs preservados. Conteúdo válido preservado.

## Achados categorizados

### A. Corrigido (defeito real, correção aplicada)

| # | Arquivo:subtópico | Defeito | Correção aplicada |
|---|---|---|---|
| 1 | `curriculum.js` (M1 1.1, sub-4 "Armazenamento local e em nuvem") | Erro de digitação "sinconexerência" no campo `conteudo`. | Corrigido para "sincronização" (e "version history" → "histórico de versões"). |
| 2 | `curriculum.js` (M1 1.1, sub-4) | Afirmava "OneDrive (5TB por usuário Enterprise)" — número específico de cota não verificado nesta sessão. | Suavizado para "armazenamento em nuvem por usuário, com cota conforme o plano (planos Enterprise oferecem cotas superiores aos planos pessoais; valor exato depende do plano contratado e deve ser conferido na documentação oficial)". |
| 3 | `curriculum.js` (M1 1.1, sub-6 "Salvamento automático...") | "Histórico de versões: cópias de recuperação por 30 dias padrão" — prazo específico não verificado. | Suavizado para "período padrão conforme o serviço (conferir na documentação oficial do produto)". |
| 4 | `curriculum.js` (M1 1.5, sub-1 "OneDrive: sincronização...") | "30 dias padrão no M365; até 500 versões" — prazos/quantidades específicos não verificados. | Suavizado para "período padrão e quantidade máxima conforme o plano/serviço — conferir na documentação oficial do produto". |
| 5 | `curriculum.js` (M1 1.5, sub-1, exemplo "erro") | "padrão de 30 dias / até 500 versões (configurável por administrador)" — idem. | Suavizado para "o período padrão e a quantidade máxima de versões dependem do plano/serviço (conferir na documentação oficial); a configuração é administrável". |
| 6 | `curriculum.js` (M1 1.1, sub-8 "Permissões, compartilhamento...") | "Lixeira (30 dias)" e exercício "Por quantos dias a lixeira padrão mantém arquivos? A) 15; B) 30; C) 60 → B" — prazo específico não verificado. | Exemplo de aplicação suavizado para "período de retenção conforme o serviço (conferir na documentação oficial)"; exercício substituído por questão conceitual sobre prática correta ao excluir arquivo importante (resposta B). |
| 7 | `curriculum_m6.js` (M6 6.2, sub-2 "LAI: escopo e diretrizes") | "art. 8º-A (incluído pela Lei nº 15.141, de 2025)" — número e ano da lei emendadora não verificados nesta sessão. | Suavizado para "art. 8º-A (incluído por lei posterior — conferir a numeração e a data de vigência em fonte oficial)". O art. 8º-A permanece citado, pois consta da lista de dispositivos verificados em 2026-10-21. |

### B. Aceito (verificado/conforme, mantido sem alteração)

- **Estrutura didática:** todos os 150 subtópicos amostrados (M1, M4, M6, M8) possuem `objetivoAprendizagem`, `conteudo`, ≥3 exemplos com tipos `introducao`/`aplicacao`/`erro` e ≥2 exercícios. Nenhum placeholder literal (`A SER IMPLEMENTADO`, `PARCIAL —`, `TODO:`, `lorem`, `a implementar`) encontrado no conteúdo de subtópico (as ocorrências em `curriculum.js` são comentários de cabeçalho de arquivo, já superados pelo P1-C).
- **M1 1.3 Excel:** conteúdo consistente com o simulador documentado (`assets/js/simulators.js`); limitações declaradas explicitamente (tabelas estruturadas, nomes definidos, R1C1, matrizes dinâmicas, spilling, LET/LAMBDA, formatação de célula, arquivos externos). Atenção pedagógica mantida: SES é alias de E (limitação declarada), CONT.VALORES trata texto vazio como vazio (diferença declarada), célula vazia nunca casa com critério numérico (diferença declarada).
- **M4 (Segurança/LGPD):** citações legais restritas aos dispositivos verificados em `referencias/referencias-verificadas.md` (LGPD arts. 1º, 2º, 3º, 4º, 5º, 17, 18, 46; Marco Civil arts. 2º, 3º, 7º, 9º §3º, 15, 19). Afirmações não verificáveis são marcadas explicitamente (ex.: prazo de comunicação de incidente; dispositivo específico de comunicação de incidente).
- **M6 (Ética):** citações restritas aos dispositivos verificados (LAI arts. 1º–8º, 8º-A, 8º-B, 10–16, 21–32, 34, 38; Lei 14.129/2021 arts. 1º–8º, 10, 14, 18, 20–22, 24–30, 36, 38–40, 42–43, 47–49, 52; CF art. 37 caput e art. 5º XXXIII; LGPD arts. 1º, 2º, 3º, 4º, 5º, 17, 18, 46). Leis adicionais citadas (13.460/2017, 13.146/2015, 10.741/2003, 8.429/1992, 8.112/1990, 12.965/2014, CTN, LC 105/2001) são leis reais e citadas como referência de escopo; sua verificação integral não foi realizada nesta sessão e está documentada como pendência.
- **M8 (Visualização):** fórmulas e cálculos conferidos (variância, percentis tipo 7, correlação de Pearson, box plot de Tukey). Distinções conceituais corretas (correlação ≠ causalidade; escala log vs. linear; IIQ vs. amplitude). Dados dos estudos de caso marcados como fictícios.
- **Duplicação de exemplos em M1 1.2, tópico 14 (sub-1):** o subtópico contém dois conjuntos de exemplos (introdução/aplicação/erro) e dois conjuntos de exercícios, resultado da migração do complemento autor (I1). Ambos são válidos e consistentes entre si; a duplicação é redundante mas não inconsistente. Decisão: manter (preservar conteúdo válido; a redundância não viola os critérios de aceite).

### C. Pendente (não corrigido nesta sessão — documentado para I6/I7 ou sessões futuras)

1. **Verificação de leis adicionais citadas em M6:** Leis nº 13.460/2017, 13.146/2015, 10.741/2003, 8.429/1992, 8.112/1990, 12.965/2014 (Marco Civil — parcialmente verificada), CTN e LC 105/2001. Apenas os números/anos são citados; as redações específicas dos artigos citados (ex.: art. 19, §único da Lei 14.129/2021 sobre interoperabilidade) foram verificadas apenas no conjunto declarado em 2026-10-21. Recomenda-se conferência artigo a artigo em fonte oficial antes de uso em prova real.
2. **Prazos de retenção do OneDrive/SharePoint** (lixeira, histórico de versões, cotas por plano): suavizados para "conferir na documentação oficial". A verificação específica por plano (Personal, Business, Enterprise) não foi realizada nesta sessão.
3. **M1 1.4 PowerPoint e 1.5 OneDrive:** marcados como "PARCIAL" em cabeçalho de arquivo (comentários). O conteúdo existente é válido e completo para o escopo atual, mas a marcação "PARCIAL" em comentário pode induzir leitor a pensar que o conteúdo não renderiza — ele renderiza (unidades 4 e 5 implementadas). Recomenda-se atualizar os comentários de cabeçalho em I6 (reconciliação de docs).
4. **M1 1.1 sub-4 (armazenamento):** a frase "sinconexerência" foi corrigida; recomenda-se revisão ortográfica completa dos 8 módulos com ferramenta de dicionário (não disponível nesta sessão) para outros possíveis erros de digitação.
5. **M4/M6/M8 — menções a "Constituição Federal de 1988" em M6:** apenas caput do art. 37 e art. 5º XXXIII foram verificados. Outras menções a princípios constitucionais (legalidade, impessoalidade, moralidade, publicidade, eficiência) são citados como princípios do art. 37, sem transcrição literal de outros dispositivos — aceitável, mas deve manter a marcação de escopo.
6. **Sincronização de cópias:** `apostila-ia/inventario/` e `apostila-ia/matriz/` são cópias das versões da raiz; a atualização dessas cópias fica para I7.

## Resultado de validação

- `node --check` em `assets/data/curriculum.js`: OK.
- `node --check` em `assets/data/curriculum_m6.js`: OK.
- `node --check` em todos os `assets/data/curriculum*.js` (8 arquivos): OK (sem erros de sintaxe).
- Contagem de nós: 427 (132 tópicos + 295 subtópicos) — sem regressão.

## Arquivos alterados

- `apostila-ia/assets/data/curriculum.js` — correções 1, 2, 3, 4, 5, 6.
- `apostila-ia/assets/data/curriculum_m6.js` — correção 7.
- `docs/REVISAO_PEDAGOGICA.md` — novo (este arquivo).

## O que não foi alterado

- `questions*.js`, `flashcards_m*.js`, `references.js`, simuladores e demais JS de comportamento — fora do escopo da tarefa I5.
- IDs de tópicos/subtópicos — preservados integralmente.
- Conteúdo válido — preservado; apenas afirmações não verificáveis foram suavizadas e um erro de digitação corrigido.