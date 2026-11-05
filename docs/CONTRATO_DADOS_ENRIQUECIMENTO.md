# CONTRATO DE DADOS — Enriquecimento por Subtópico (Seção 5)

**Caminho:** `docs/CONTRATO_DADOS_ENRIQUECIMENTO.md`
**Público:** 38 agentes de autoria (lotes parciais).
**Status:** normativo. O auditor `scripts/auditar-template-didatico.mjs` exige exatamente isto.

---

## 1. Formato de arquivo

Cada lote produz UM arquivo parcial chamado `enriquecimento_m<N>.js` (N = 1..8).

Conteúdo do arquivo (exatamente esta forma):

```js
const enriquecimentoM<N> = {
  "<id-subtopico>": { ...registro... },
  "<id-subtopico>": { ...registro... }
};
```

Regras:
- ID do módulo: `modulo-N` com hífen, 1–8, sem saltos (ex.: `modulo-2`).
- ID do subtópico: forma `m<N>-u<U>-t<T>-s<S>` (ex.: `m2-u4-t2-s1`).
- Uma única `const` no topo. Não use `export`, `module.exports`, `eval`, `fetch`.
- As chaves de cada registro devem seguir a **ordem exata** abaixo.
- Strings em JSON: aspas duplas, UTF-8, sem comentários.
- Nenhum campo pode conter placeholders proibidos (ver seção 5).

---

## 2. Estrutura completa de um registro (ordem das chaves)

```
{
  orientacaoEstrategica: {
    porqueImporta: string,              // >= 120 chars
    preRequisitos: string[],            // >= 1 item
    objetivosObservaveis: string[],     // >= 2 itens
    competencias: string[],             // >= 2 itens
    dificuldade: string,                // iniciante|intermediario|avancado|especialista
    relacoes: string[],                 // >= 1 item
    relevanciaConcurso: {
      classificacao: string,            // alta|media|baixa
      justificativa: string,            // >= 80 chars
      ressalva?: string                 // OMITIDA por política (ver 5.1, item 6): a nota metodológica global é fornecida pelo renderizador.
    }
  },
  niveis: {
    iniciante: string,   // >= 180 chars
    intermediario: string, // >= 180 chars
    avancado: string,    // >= 180 chars
    especialista: string // >= 180 chars
  },
  comparacoes: [         // >= 1 item
    {
      tema: string,
      a: { rotulo: string, texto: string },
      b: { rotulo: string, texto: string },
      diferencaGabarito: string
    }
  ],
  pegadinhas: [          // >= 2 itens
    {
      afirmacaoEquivocada: string,
      porqueErrada: string,
      versaoCorreta: string
    }
  ],
  resumoEstruturado: {
    conceitos: string[],   // >= 3
    regras: string[],      // >= 2
    comparacoes: string[], // >= 1
    fluxos: string[],      // >= 1
    excecoes: string[],    // >= 1
    palavrasChave: string[], // >= 4
    checklist: string[]    // >= 4
  },
  exemplosDetalhados: [    // EXATAMENTE 3 itens, nesta ordem
    { tipo: "introducao", ... },   // 9 campos de resolução (ver seção 3)
    { tipo: "aplicacao", ... },
    { tipo: "erro", ... }
  ]
}
```

---

## 3. Exemplos detalhados — 3 itens em ordem obrigatória

Cada exemplo deve ter exatamente estes 9 campos de resolução:

| Campo | Tipo | Mínimo | Obrigatório |
|---|---|---|---|
| tipo | string ("introducao"\|"aplicacao"\|"erro") | — | sim |
| problema | string | 80 chars | sim |
| dados | string | 60 chars | sim |
| conceitos | string[] | 2 itens | sim |
| estrategia | string | 80 chars | sim |
| execucao | string[] | 3 itens | sim |
| resultado | string | 60 chars | sim |
| justificativa | string | 100 chars | sim |
| errosFrequentes | string[] | 2 itens | sim |
| variacao | string | 80 chars | sim |

Ordem dos tipos: `introducao` → `aplicacao` → `erro`. Não permutar, não pular, não duplicar tipo.

---

## 4. Contagens e longas mínimas resumidas (lista para copy-paste)

Os agentes de autoria devem satisfazer, **por registro**:

**orientacaoEstrategica**
- porqueImporta: string >= 120 chars
- preRequisitos: array >= 1 item (strings não vazias)
- objetivosObservaveis: array >= 2 itens
- competencias: array >= 2 itens
- dificuldade: um de `iniciante` \| `intermediario` \| `avancado` \| `especialista`
- relacoes: array >= 1 item
- relevanciaConcurso.classificacao: `alta` \| `media` \| `baixa`
- relevanciaConcurso.justificativa: string >= 80 chars
- relevanciaConcurso.ressalva: **omitida** em todos os registros (ver 5.1, item 6)

**niveis** (todos 4 obrigatórios, cada um >= 180 chars)
- iniciante, intermediario, avancado, especialista

**comparacoes**: array >= 1 item; cada item: tema, a.rotulo, a.texto, b.rotulo, b.texto, diferencaGabarito (todos não vazios)

**pegadinhas**: array >= 2 itens; cada item: afirmacaoEquivocada, porqueErrada, versaoCorreta (todos não vazios)

**resumoEstruturado**
- conceitos >= 3, regras >= 2, comparacoes >= 1, fluxos >= 1, excecoes >= 1, palavrasChave >= 4, checklist >= 4

**exemplosDetalhados**: exatamente 3, ordem introducao/aplicacao/erro; cada um com os 9 campos acima (problema>=80, dados>=60, conceitos>=2, estrategia>=80, execucao>=3, resultado>=60, justificativa>=100, errosFrequentes>=2, variacao>=80)

**Duplicação proibida:**
- Nenhuma frase >= 120 chars idêntica entre registros distintos.
- Nenhuma frase >= 120 chars idêntica entre campos diferentes do mesmo registro.

**Placeholders proibidos (word boundary):** TODO, FIXME, XXX, Lorem ipsum, "Adicionar novos exemplos conforme necessário", "Consulte a documentação para saber mais", "Este tópico será aprofundado posteriormente", "Existen otros métodos", "Entre otros recursos", "restante do código", "implementar depois", "adicionar questões". Palavras portuguesas legítimas (todo/todos, depende, pendente, preencher, placeholder) NÃO geram falso positivo sozinhas.

---

## 5. Regras de redação (pt-BR formal, técnico e didático)

- Escreva em português brasileiro formal, técnico e didático.
- Não use texto genérico tipo "consulte a documentação", "entre outros recursos", "este tópico será aprofundado posteriormente".
- Não repita frases entre subtópicos distintos (auditor detecta duplicação >= 120 chars).
- Não use placeholders (marcadores proibidos na seção 4).
- Quando houver números ou cálculos, confirme que estão aritmeticamente corretos (ex.: hosts = 2^(32-prefixo) - 2; /24 = 254, /25 = 126, /26 = 62).
- Diferencie "norma" (dispositivo legal/técnico verificado) de "boa prática" (recomendação não obrigatória).
- Informe datas/versões quando o tema exigir (ex.: RFC 4632, RFC 3021, Lei nº 13.709/2018).
- Exemplos de números devem ser aritmeticamente corretos.
- Diferencie exemplos de natureza distinta (introdução, aplicação, interpretação de erro).

### 5.1 Proibições editoriais específicas (obrigatórias)

Estas regras são **normativas** e verificadas pelo auditor e pelas ferramentas de
varredura do repositório:

1. **Não citar banca de concurso.** A Seção 5 é material autoral de estudo e não
   menciona `CESPE`, `CEBRASPE`, `Cebraspe`, `Cespe`, `FGV`, `FCC`, `VUNESP`,
   `Vunesp` ou `IPCA` — nem em enumeração entre parênteses. Menções a
   *instituições* (TCU, CGU, STF, Receita Federal) continuam permitidas quando
   descrevem conteúdo técnico ou jurídico, e não a banca que elaborou a prova.
2. **Não afirmar frequência de aparecimento em provas.** É vedado afirmar que um
   tema "é recorrente em provas", "aparece com frequência", "é de alta/média
   incidência em concursos", "é o mais cobrado", "está presente em X% dos
   editais" ou equivalente. A `relevanciaConcurso.justificativa` deve fazer
   **classificação qualitativa** e declarar que se trata de **estimativa
   pedagógica**, não de frequência estatística comprovada.
   Descrever o *tipo de item* ("itens de certo ou errado avaliam…", "questões de
   informática costumam trazer cenários…") **não** é afirmação de frequência e
   permanece permitido, desde que sem banca.
3. **ID de subtópico somente em `relacoes`.** O identificador
   (`m<N>-u<U>-t<T>-s<S>` ou `modulo-N-unidade-U-topico-T-sub-S`) aparece
   **exclusivamente** em `orientacaoEstrategica.relacoes`. Em `preRequisitos` e
   em qualquer outro campo, o pré-requisito é descrito em linguagem natural.
   O ID e o título citados em `relacoes` devem corresponder **exatamente** ao
   currículo (`apostila-ia/assets/data/curriculum*.js`), que é a fonte de verdade.
4. **Acentuação pt-BR obrigatória.** Formas como "configuracao", "protecao",
   "versoes", "conexao", "hipotese" e "publico" são defeitos de redação.
5. **Anglicismos evitáveis.** Prefira "retorno" a *feedback*, "painel" a
   *dashboard*, "fluxo de trabalho" a *workflow*, "prazo" a *deadline*,
   "triagem" a *screening*, "padrão" a *default*, "reunião" a *meeting*,
   "lista de verificação" a *check-list*, "relatório" a *report*.
   Nomes próprios de produto (OneDrive, SharePoint, Power BI, Teams) e cabeçalhos
   HTTP (`Retry-After`, `Content-Type`) são legítimos.
6. **`relevanciaConcurso.ressalva` é omitido** em todos os registros: a nota
   metodológica global é fornecida pelo renderizador
   (`apostila-ia/assets/js/unidade-template.js`).
7. **Caracteres fora do alfabeto latino são proibidos** (ideogramas, cirílico,
   árabe etc.), exceto tipografia comum (seta `→`, aspas tipográficas, travessão).

---

## 6. Exemplo válido (registro real: `m2-u4-t2-s1`, Módulo 2 — Redes)

Registro autoral existente, copiado do enriquecimento `enriquecimento_m2.js`, já
**conforme às proibições da seção 5.1** (sem banca, sem afirmação de frequência,
com declaração de estimativa pedagógica, sem `ressalva`, com ID de subtópico
apenas em `relacoes`). Atende a todos os mínimos do contrato:

```json
{
  "orientacaoEstrategica": {
    "porqueImporta": "O cálculo de endereço de rede e broadcast via CIDR é habilidade técnica central do conteúdo programático de redes, e aparece em itens de dimensionamento de sub-redes, validação de endereçamento, diagnóstico de conectividade e planejamento de VLSM. Dominar a operação AND bit a bit e a identificação de bits de host permite resolver qualquer variação: dado IP/máscara achar rede/broadcast/hosts; verificar se dois IPs estão na mesma sub-rede.",
    "preRequisitos": ["Representação binária de números (8 bits = 0-255)", "Operação lógica AND bit a bit", "Estrutura do endereço IPv4 (32 bits, 4 octetos)", "Noção de máscara de sub-rede (1s contíguos = rede, 0s = host)"],
    "objetivosObservaveis": ["Converter máscara decimal pontuada para prefixo CIDR e vice-versa (ex.: 255.255.255.192 = /26)", "Calcular endereço de rede: IP AND máscara (bit a bit) em cada octeto", "Calcular endereço de broadcast: endereço de rede com todos os bits de host = 1", "Determinar intervalo de hosts válidos: rede+1 até broadcast-1", "Calcular quantidade de hosts: 2^(32-prefixo) - 2 (exceto /31 e /32 per RFC 3021)", "Validar se um IP pertence a uma sub-rede: comparar rede calculada do IP com rede da sub-rede"],
    "competencias": ["Raciocínio binário: operar em base 2 para decisões de rede", "Atenção a detalhes: um bit errado muda toda a sub-rede", "Resolução de problemas sob pressão de tempo (simulado)", "Verificação de plausibilidade: conferir se resultado faz sentido (ex.: broadcast > rede)"],
    "dificuldade": "intermediario",
    "relacoes": ["m2-u4-t1-s3 (Máscaras de sub-rede) — base para conversão decimal↔CIDR", "m2-u4-t2-s2 (Quantidade de sub-redes e hosts) — extensão natural: bits emprestados", "m2-u4-t2-s3 (Intervalos de hosts e validação) — aplicação direta do cálculo de rede"],
    "relevanciaConcurso": {
      "classificacao": "alta",
      "justificativa": "O cálculo de endereçamento é conteúdo nuclear do programa de redes: os itens avaliam a identificação de rede e broadcast a partir do par IP/máscara, a validação de um endereço em uma sub-rede e o dimensionamento de faixas de hosts, com resposta numérica feita sem calculadora. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
    }
  },
  "niveis": { "iniciante": "...>=180 chars...", "intermediario": "...>=180 chars...", "avancado": "...>=180 chars...", "especialista": "...>=180 chars..." },
  "comparacoes": [ { "tema": "...", "a": { "rotulo": "...", "texto": "..." }, "b": { "rotulo": "...", "texto": "..." }, "diferencaGabarito": "..." } ],
  "pegadinhas": [ { "afirmacaoEquivocada": "...", "porqueErrada": "...", "versaoCorreta": "..." }, { ... >= 2 itens } ],
  "resumoEstruturado": { "conceitos": [ ">=3 itens" ], "regras": [ ">=2 itens" ], "comparacoes": [ ">=1 item" ], "fluxos": [ ">=1 item" ], "excecoes": [ ">=1 item" ], "palavrasChave": [ ">=4 itens" ], "checklist": [ ">=4 itens" ] },
  "exemplosDetalhados": [
    { "tipo": "introducao", "problema": ">=80", "dados": ">=60", "conceitos": [ ">=2" ], "estrategia": ">=80", "execucao": [ ">=3" ], "resultado": ">=60", "justificativa": ">=100", "errosFrequentes": [ ">=2" ], "variacao": ">=80" },
    { "tipo": "aplicacao", ...mesmos 9 campos... },
    { "tipo": "erro", ...mesmos 9 campos... }
  ]
}
```

---

## 7. Contraexemplo — esqueleto vazio (O QUE NÃO FAZER)

Este é o esqueleto gerado pelo script `gerar-esqueleto-enriquecimento.mjs` para os 304 registros ainda não autorais. **Não é um registro válido.** Lista do que falta para cada campo:

```json
{
  "orientacaoEstrategica": {
    "porqueImporta": "",                          // FALTA: >= 120 chars
    "preRequisitos": [],                           // FALTA: >= 1 item
    "objetivosObservaveis": ["Definir os conceitos centrais do tópico", "Aplicar o conhecimento em cenários práticos"], // genérico do esqueleto, deve ser reescrito
    "competencias": [],                            // FALTA: >= 2 itens
    "dificuldade": "intermediario",                // preenchido (padrão do esqueleto)
    "relacoes": [],                                // FALTA: >= 1 item
    "relevanciaConcurso": {
      "classificacao": "media",                    // preenchido (padrão)
      "justificativa": "",                         // FALTA: >= 80 chars
      "ressalva": "ESTA É A BOILERPLATE IDÊNTICA (304 registros)" // FALTA: não deve ser idêntica; ausência aceita (nota metodológica global)
    }
  },
  "niveis": { "iniciante": "...conteúdo base...", "intermediario": "", "avancado": "", "especialista": "" }, // FALTA: 3 níveis vazios (cada um >= 180)
  "comparacoes": [ { "tema": "...", "a": { "rotulo": "Conceito A", "texto": "" }, "b": { "rotulo": "Conceito B", "texto": "" }, "diferencaGabarito": "" } ], // FALTA: textos vazios
  "pegadinhas": [ { "afirmacaoEquivocada": "...", "porqueErrada": "", "versaoCorreta": "" } ], // FALTA: apenas 1 item (precisa >= 2) e campos vazios
  "resumoEstruturado": { "conceitos": [], "regras": [], "comparacoes": [], "fluxos": [], "excecoes": [], "palavrasChave": [], "checklist": [] }, // FALTA: todos vazios
  "exemplosDetalhados": [ { "tipo": "introducao", ...campos vazios... }, { "tipo": "aplicacao", ... }, { "tipo": "erro", ... } ] // FALTA: todos os 9 campos de cada exemplo vazios
}
```

**O que falta para transformar o esqueleto em registro válido:**
1. `porqueImporta` (>= 120 chars, específico do subtópico).
2. `preRequisitos` (>= 1 item).
3. `competencias` (>= 2 itens).
4. `relacoes` (>= 1 item, ids reais de outros subtópicos).
5. `relevanciaConcurso.justificativa` (>= 80 chars).
6. `relevanciaConcurso.ressalva`: remover boilerplate idêntica (ou deixar ausente — nota metodológica global).
7. `niveis.intermediario`, `avancado`, `especialista` (>= 180 chars cada).
8. `comparacoes[].a.texto`, `b.texto`, `diferencaGabarito` (não vazios).
9. `pegadinhas`: >= 2 itens, todos os 3 campos preenchidos.
10. `resumoEstruturado`: todos os 7 arrays com os mínimos (conceitos>=3, regras>=2, comparacoes>=1, fluxos>=1, excecoes>=1, palavrasChave>=4, checklist>=4).
11. `exemplosDetalhados`: 3 itens com os 9 campos preenchidos nos mínimos (problema>=80, dados>=60, conceitos>=2, estrategia>=80, execucao>=3, resultado>=60, justificativa>=100, errosFrequentes>=2, variacao>=80).

---

## 8. Instruções para o agente de autoria (gerar arquivo parcial de lote)

1. **Nome do arquivo:** `enriquecimento_m<N>.js` (N = 1..8), dentro de `apostila-ia/assets/data/`. Um arquivo por módulo.
2. **Forma do `const`:** `const enriquecimentoM<N> = { ... };` no topo, uma única declaração.
3. **Ordem das chaves:** siga a ordem da seção 2 (orientacaoEstrategica → niveis → comparacoes → pegadinhas → resumoEstruturado → exemplosDetalhados).
4. **Escaping:** use aspas duplas para strings; escape aspas internas com `\"`; caracteres `<`, `>`, `&` são salvos como texto puro (o renderizador escapa na saída — não escape manualmente no JSON).
5. **Não sobrescreva conteúdo real:** o gerador `scripts/gerar-esqueleto-enriquecimento.mjs --dry-run` é idempotente e preserva campos já preenchidos. Escreva apenas os campos em branco do esqueleto.
6. **Valide antes de entregar:** rode `node scripts/auditar-template-didatico.mjs --lote apostila-ia/assets/data/enriquecimento_m<N>.js` e confirme saída com 0 falhas no seu lote.


