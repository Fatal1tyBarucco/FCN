# DECISÕES ARQUITETURAIS — FASE 4 (CONTEÚDO)

Data: 2026-10-24.

1. Fonte de verdade do conteúdo: arquivos `.js` literais (`curriculum.js`, `curriculum_m2.js` … `curriculum_m8.js`, `flashcards_m1.js` … `flashcards_m8.js`, `questions.js`, `questions_m4.js` … `questions_m8.js`, `references.js`). Nenhum conteúdo obrigatório vem de API remota ou banco externo.
2. Identificadores estáveis: esquema `modulo-N` com hífen (ex.: `modulo-6`), usado consistentemente nos dados, nos IDs de tópico/subtópico, nos arquivos de flashcards e nas chaves do `localStorage`.
3. Nenhum `eval` é usado para interpretar conteúdo; o conteúdo é passado diretamente para renderização via objeto literal.
4. Nenhum conteúdo foi substituído por placeholder nesta execução; todos os arquivos de conteúdo existentes no repositório foram preservados e verificados.
5. As referências normativas (LGPD, Marco Civil, LAI, Lei de Governo Digital) estão presentes em `references.js` e no `referencias/referencias-verificadas.md` (verificação real no planalto.gov.br em 2026-10-23); as que ainda faltam (Microsoft Learn, RFCs/IETF, CERT.br, demais dispositivos constitucionais) estão registradas como pendentes, não inventadas.

6. Decisão Fase 5 (simuladores + visualização, 2026-10-24):
   - Simulador Dados (simulator_data.js) implementa 5 tipos de gráfico obrigatórios
     via SVG inline próprio (não usa Chart.js, ECharts, nem CDN). Razão: requisito
     Seção 8 + 3.2 (funcionar em file:// sem dependência externa); contingência
     real (não há risco de biblioteca externa indisponível); cálculos consistentes
     com dados editáveis (regra de ouro documentada no cabeçalho).
   - Gráficos validados por código (node --check + 137 ocorrências confirmadas);
     interação visual em navegador real não executada (limitação do ambiente CLI).
   - Todos os 4 simuladores + laboratório de prompts operam localmente:
     nenhum integra API de LLM, nenhum envia dados para serviço remoto,
     nenhum executa comando do SO. Dados fictícios confirmados (Seção 4.3/7.4).
   - Nenhuma substituição de modelo/ferramenta necessária; nenhuma biblioteca
     de terceiro substituída por placeholder.
