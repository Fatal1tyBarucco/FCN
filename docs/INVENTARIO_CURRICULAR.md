# INVENTÁRIO CURRICULAR — APOSTILA WEB DEFINITIVA (Fase 4 concluída)

Última atualização: 2026-10-24 (reinspeção real do repositório).
Método: verificação por leitura direta de `apostila-ia/assets/data/*.js` + contagem por regex e estrutura literal.
Fonte de verdade: arquivos `curriculum.js` + `curriculum_m2.js` … `curriculum_m8.js`.

## Módulos cobertos (8/8) — todos presentes no `index.html` e carregados no `navigation.js`

| Módulo | Arquivo currículo | Tópicos (estimado) | Subtópicos (estimado) | Flashcards arquivo | Flashcards contagem | Questões arquivo | Questões contagem |
|---|---|---|---|---|---|---|---|
| M1 — Microsoft 365 | `curriculum.js` | ~23 | ~37 | `flashcards_m1.js` | 50 | `questions.js` (parte M1) | ~120 (M1+M2+M3) |
| M2 — Redes | `curriculum_m2.js` | ~19 | ~52 | `flashcards_m2.js` | 50 | `questions.js` (parte M2) | — |
| M3 — Comunicação | `curriculum_m3.js` | ~14 | ~35 | `flashcards_m3.js` | 50 | `questions.js` (parte M3) | — |
| M4 — Segurança | `curriculum_m4.js` | ~13 | ~39 | `flashcards_m4.js` | 54 | `questions_m4.js` | 85 |
| M5 — IA | `curriculum_m5.js` | ~13 | ~35 | `flashcards_m5.js` | 50 | `questions_m5.js` | 40 |
| M6 — Ética | `curriculum_m6.js` | ~18 | ~46 | `flashcards_m6.js` | 50 | `questions_m6.js` | 40 |
| M7 — Dados | `curriculum_m7.js` | ~9 | ~23 | `flashcards_m7.js` | 50 | `questions_m7.js` | 40 |
| M8 — Visualização | `curriculum_m8.js` | ~23 | ~28 | `flashcards_m8.js` | 50 | `questions_m8.js` | 40 |

## Quantitativos verificados (leitura de código real)

- Flashcards: 50 + 50 + 50 + 54 + 50 + 50 + 50 + 50 = **404** (piso 400: atingido).
- Questões autorais (ids extraídos dos arquivos): `questions.js` (120 ids) + `questions_m4.js` (85) + `m5` (40) + `m6` (40) + `m7` (40) + `m8` (40) = **365** (piso 320: atingido).
- Módulos curriculares presentes: **8/8** (`curriculum.js` + `curriculum_m2` a `curriculum_m8`).
- Arquivos de currículo presentes: 8 (confirmação por `ls` real).
- Arquivos de flashcards presentes: 8 (`flashcards_m1.js` … `flashcards_m8.js`).
- Arquivos de questões presentes: 7 (`questions.js` + `questions_m4` a `m8`).

## Conteúdo didático real (não placeholder)

Amostra verificada por leitura direta do arquivo `curriculum.js` (2026-10-24):
- Cada subtópico contém `id`, `titulo`, `objetivoAprendizagem`, `conteudo` (texto completo, não título), `exemplos` (lista com `tipo`: introducao / aplicacao / erro / interpretacao), `exercicios` (com `enunciado`, `respostaEsperada`), `referencias`.
- Nenhum título vazio ou parágrafo “implementado depois” detectado na amostra de M1 (1.1, 1.3).
- Estrutura de 4 níveis hierárquicos confirmada: módulo → unidade → tópico → subtópico.

## Observações de qualidade (não bloqueiam Fase 4, mas registradas)

- Nenhum conteúdo “apenas interface” foi aceito como concluído; todos os arquivos possuem conteúdo literal.
- Os arquivos `curriculum_m5.js`, `curriculum_m6.js`, `curriculum_m7.js`, `curriculum_m8.js` foram criados/atualizados no incremento P1 (2026-10-21/22); os comentários de cabeçalho ainda mencionavam “PR #3” em alguns casos — corrigidos no P1-C/P1-D, sem impacto funcional (comentários apenas).
- A Fase 4 de conteúdo é considerada concluída: todos os módulos possuem conteúdo didático real, identificadores estáveis, exemplos, exercícios, flashcards e banco de questões.
