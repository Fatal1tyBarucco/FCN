# RELATÓRIO DE CONTAGENS VERIFICÁVEIS POR NODE

Gerado em: 2026-10-23.
Método: carga dos arquivos `apostila-ia/assets/data/*.js` em `vm` (Node.js) + travessia da árvore `unidades → topicos → subtopicos`, sem `eval` no código-fonte.
Evidência: scripts em scratchpad (`count3.js`, `count4.js`, `count5.js`, `count6.js`) + saída capturada.

## 1. Currículo (nós)

| Módulo | Unidades | Tópicos | Subtópicos | Nós | Exemplos | Exercícios |
|---|---:|---:|---:|---:|---:|---:|
| modulo-1 | 5 | 23 | 37 | 60 | 111 | 74 |
| modulo-2 | 5 | 19 | 52 | 71 | 156 | 104 |
| modulo-3 | 5 | 14 | 35 | 49 | 105 | 70 |
| modulo-4 | 4 | 13 | 39 | 52 | 117 | 78 |
| modulo-5 | 4 | 13 | 35 | 48 | 105 | 70 |
| modulo-6 | 6 | 18 | 46 | 64 | 138 | 92 |
| modulo-7 | 3 | 9 | 23 | 32 | 69 | 46 |
| modulo-8 | 5 | 23 | 28 | 51 | 84 | 56 |
| **Total** | **37** | **132** | **295** | **427** | **885** | **590** |

Verificação de IDs: 427 IDs coletados, 427 únicos, 0 duplicatas.
Formatos: M1 usa `modulo-1-unidade-1-topico-1(-sub-N)` (60/60 padrão longo); M2–M8 usam formato longo para tópicos e compacto `mX-uY-tZ-sW` para subtópicos (115 tópicos longos + 258 subtópicos compactos).

## 2. Flashcards

| Módulo | Quantidade |
|---|---:|
| m1 | 50 |
| m2 | 50 |
| m3 | 50 |
| m4 | 54 |
| m5 | 50 |
| m6 | 50 |
| m7 | 50 |
| m8 | 50 |
| **Total** | **404** |

Piso exigido (Escrita.txt Seção 9): ≥400 (≥50 por módulo). **Atingido em quantidade** (m4 possui 54).

## 3. Questões (banco autoral)

| Arquivo | Quantidade |
|---|---:|
| questions.js (M1) | 120 |
| questions_m4.js (M4) | 85 |
| questions_m5.js (M5) | 40 |
| questions_m6.js (M6) | 40 |
| questions_m7.js (M7) | 40 |
| questions_m8.js (M8) | 40 |
| **Total** | **365** |

Por módulo (via id): M1=40, M2=40, M3=40, M4=85, M5=40, M6=40, M7=40, M8=40.
Piso exigido (Seção 10): ≥320 (≥40 por módulo). **Atingido**.

Distribuição real (medida em Node/vm, deduplicada por `id`):
- Níveis: básica 94 (25,8%), intermediária 193 (52,9%), avançada 78 (21,4%).
- Formatos: múltipla escolha 290, Certo/Errado 75.
- Estilos de cobrança: CESPE 216, FGV 58, FCC 52, VUNESP 39 (formato de cobrança; todas autorais, `origem: autoral`).
- IDs únicos: 365/365 (0 duplicatas).

Desvio documentado da sugestão 30/45/25 (Seção 10): intencional e justificado (Seção 10 admite ajuste de distribuição).

## 4. Outros recursos verificados por presença de arquivo/conteúdo

- Simuladores: 5/5 com UI montada (`#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app`, `#dados-app`).
- Gráficos SVG: 5/5 (histograma, linha, barras, dispersão, boxplot).
- Escopos de simulado: 15 (m1..m8 + cum-2..cum-8).
- Vídeos validados: 0 (intencional).
- Testes em navegador real: não realizados (apenas `node --check` + smoke Node/vm).

## 5. Limitações do método

- Contagens obtidas por travessia estática do código; não validam qualidade pedagógica nem renderização em navegador.
- Não foram executados testes de UI/acessibilidade em navegador real.
- IDs de subtópicos não são uniformes entre M1 e M2–M8 (formato compacto); ambos estáveis e únicos — documentado no inventário.
