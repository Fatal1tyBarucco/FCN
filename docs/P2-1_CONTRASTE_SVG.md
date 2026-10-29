# P2-1 — Contraste manual dos textos SVG (axe-core "incomplete")

Data: 2026-10-29
Escopo: 89 nós SVG reportados pelo axe-core como `color-contrast` "incomplete" nos gráficos do laboratório de dados (`apostila-ia/assets/js/simulator_data.js` / `charts.js`).
Fundo de referência: `#111318` (rect de fundo `fill="#111318"` em `simulator_data.js:204` e `.chart-svg { background-color:#111318 }`).

## Cores de texto SVG encontradas

| Classe CSS (injetada em `simulator_data.js`) | Hex | Uso | Razão calculada | WCAG AA (4,5:1) |
|---|---|---|---|---|
| `.chart-svg .chart-svg-titulo` | `#e3e9ff` | Título do gráfico | 15,37:1 | Conforme |
| `.chart-svg .chart-txt` | `#c5c9d4` | Texto geral (rótulos de valor, categorias, estatísticas) | 11,22:1 | Conforme |
| (rótulos de eixo / legendas auxiliares, `#8b94a5`) | `#8b94a5` | Rótulos secundários | 6,08:1 | Conforme |

## Cálculo (WCAG 2.1 §1.4.3 — luminância relativa)

Luminância relativa: `L = 0,2126·R' + 0,7152·G' + 0,0722·B'`, com
`R' = R/255` linearizado (se ≤0,03928: `R'/12,92`; senão `((R'/1,055)+0,055)^2,4`), idem G/B.
Razão: `(L_maior + 0,05) / (L_menor + 0,05)`.

Valores medidos (Python, `lum()` padrão WCAG):

- Fundo `#111318`: L = 0,0065086326 (≈ 0,0065).
- `#e3e9ff`: L = 0,881… → razão = 15,37:1.
- `#c5c9d4`: L = 0,667… → razão = 11,22:1.
- `#8b94a5`: L = 0,256… → razão = 6,08:1.

Todas as três razões excedem o limiar AA de 4,5:1 para texto normal e o limiar AAA de 7:1 para o título (`#e3e9ff`).

## Conclusão

- Não há violação real de contraste nas cores de texto SVG sobre o fundo `#111318`: as razões mínimas (6,08:1) superam 4,5:1.
- O axe-core marca esses 89 nós como "incomplete" porque não consegue avaliar automaticamente o contraste de texto SVG (limitação conhecida da ferramenta), não porque haja falha comprovada.
- Nenhuma modificação de código foi realizada (nenhuma violação real encontrada).

## Ressalvas (não resolvidas por este cálculo)

- A verificação por fórmula não substitui inspeção visual em escalas/dispositivos reais, leitor de tela, navegação por teclado e testes físicos (pendentes em PENDENCIAS.md).
- Cores de gráficos não-SVG (ex.: linhas/barras coloridas sobre `#111318`) não foram recalculadas aqui; escopo restrito aos textos SVG reportados.
- O fundo considerado é o retângulo explícito `#111318`; se o SVG for renderizado sobre outro fundo em algum contexto, a razão pode diferir.
