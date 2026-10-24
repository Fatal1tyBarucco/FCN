# MATRIZ DE COBERTURA — FASE 4 (conteúdo curricular)

Formato: CSV simplificado para auditoria legível por máquina.
Estado: concluído para cobertura obrigatória; testes funcionais (simuladores, gráficos, busca, áudio) permanecem em Fases 5-7.

## Registros de cobertura (cada linha = módulo verificado)

```
modulo,arquivo_curriculo,topicos,subtopicos,flashcards_arquivo,flashcards_n,questoes_arquivo,questoes_n,conteudo_real_verificado,exemplos_min_3,status_fase_4
M1-Microsoft365,curriculum.js,~23,~37,flashcards_m1.js,50,questions.js,120,sim,sim,CONCLUÍDO
M2-Redes,curriculum_m2.js,~19,~52,flashcards_m2.js,50,questions.js,120,sim,sim,CONCLUÍDO
M3-Comunicacao,curriculum_m3.js,~14,~35,flashcards_m3.js,50,questions.js,120,sim,sim,CONCLUÍDO
M4-Seguranca,curriculum_m4.js,~13,~39,flashcards_m4.js,54,questions_m4.js,85,sim,sim,CONCLUÍDO
M5-IA,curriculum_m5.js,~13,~35,flashcards_m5.js,50,questions_m5.js,40,sim,sim,CONCLUÍDO
M6-Etica,curriculum_m6.js,~18,~46,flashcards_m6.js,50,questions_m6.js,40,sim,sim,CONCLUÍDO
M7-Dados,curriculum_m7.js,~9,~23,flashcards_m7.js,50,questions_m7.js,40,sim,sim,CONCLUÍDO
M8-Visualizacao,curriculum_m8.js,~23,~28,flashcards_m8.js,50,questions_m8.js,40,sim,sim,CONCLUÍDO
```

Nota: `questions.js` contém as 120 questões autorais dos módulos M1-M3 combinados (verificado por leitura direta do arquivo e extração de `id` via regex). A contagem individual por módulo M1/M2/M3 dentro de `questions.js` não está separada no arquivo; o total de 120 é verificado pelo arquivo como um todo.

## Dependências e restrições

- Nenhum arquivo de conteúdo essencial está faltando.
- Nenhum arquivo de conteúdo depende de servidor externo para ser lido pelo `index.html`.
- A fonte de verdade para todo conteúdo didático é o arquivo `.js` na pasta `assets/data/`; não há fontes remotas de conteúdo obrigatório.
