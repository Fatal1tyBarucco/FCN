# PROTOCOLO DE AUTORIA — LOTES DE ENRIQUECIMENTO (Seção 5 do prompt mestre)

Você é **agente de autoria de conteúdo didático** do projeto *Apostila Web Interativa FCN*
(`/root/projetos/FCN`). Sua tarefa é produzir, para um lote de subtópicos, o **registro
estruturado da Seção 5** (template didático) que será renderizado na apostila.

Todo o texto é em **português brasileiro formal, técnico e didático**, voltado a concursos
públicos brasileiros (CESPE/CEBRASPE, FGV, FCC, VUNESP).

---

## 1. Fontes de verdade (leia nesta ordem)

1. `docs/CONTRATO_DADOS_ENRIQUECIMENTO.md` — **contrato normativo**: schema do registro,
   mínimos de tamanho, regras de redação, exemplo válido e contraexemplo. Leia integralmente
   antes de escrever.
2. `scripts/lotes/fonte/<LOTE>.fonte.json` — **material de origem** do seu lote:
   - `meta`: módulo, unidade, parte, nome da `const` de saída, caminho do arquivo de saída;
   - `subtopicos[]`: para cada subtópico — `id`, `titulo`, `topicoTitulo`, `unidadeTitulo`,
     `moduloTitulo`, `objetivoAprendizagem`, `conteudo` (texto-base já estruturado com as
     seções da Seção 5), `exemplos` (exemplos do currículo), `exercicios`, `criterioDominio`,
     `videos` e `registroAtual` (o que já existe no overlay do módulo).
3. `apostila-ia/assets/data/curriculum*.js` — currículo completo (consulte apenas se precisar
   conferir o contexto de outro subtópico; **não edite**).

**Regra de ouro:** o `conteudo` base já contém o texto didático validado do subtópico.
Seu trabalho é **estruturá-lo** em campos do schema — reescrevendo em linguagem própria
quando necessário — e **complementar** o que estiver vazio. Não invente fatos, artigos de lei,
URLs, números de versão, IDs de vídeo ou estatísticas de incidência.

## 2. Arquivo de saída

- Caminho: `scripts/lotes/<NOME-DA-CONST>.js` (veja `meta.arquivoSaida`).
- Forma EXATA:

```js
const enriParcialM1U1P1 = {
  "modulo-1-unidade-1-topico-1-sub-1": {
    "orientacaoEstrategica": { ... },
    "niveis": { ... },
    "comparacoes": [ ... ],
    "pegadinhas": [ ... ],
    "resumoEstruturado": { ... },
    "exemplosDetalhados": [ ... ]
  }
};
```

- Uma única `const` no topo. Sem `export`, sem `module.exports`, sem `eval`, sem `fetch`.
- Strings em aspas duplas; escape apenas as aspas duplas internas (`\"`).
  **Não** escape manualmente `<`, `>` e `&` — o renderizador escapa na saída.
- Ordem das chaves conforme o contrato (§2 do contrato).
- IDs das chaves: use **literalmente** os `id` de `meta.idsCompletos` (nunca invente IDs).

## 3. O que preencher

Para **cada** subtópico do lote:

| Bloco | Obrigação |
|---|---|
| `orientacaoEstrategica.porqueImporta` | ≥ 120 caracteres, específico do subtópico |
| `orientacaoEstrategica.preRequisitos` | ≥ 1 item (strings não vazias) |
| `orientacaoEstrategica.objetivosObservaveis` | ≥ 2 itens, verbos de desempenho observável |
| `orientacaoEstrategica.competencias` | ≥ 2 itens |
| `orientacaoEstrategica.dificuldade` | `iniciante` \| `intermediario` \| `avancado` \| `especialista` |
| `orientacaoEstrategica.relacoes` | ≥ 1 item (IDs/descrições de subtópicos realmente existentes) |
| `orientacaoEstrategica.relevanciaConcurso.classificacao` | `alta` \| `media` \| `baixa` |
| `orientacaoEstrategica.relevanciaConcurso.justificativa` | ≥ 80 caracteres, **única por registro** |
| `orientacaoEstrategica.relevanciaConcurso.ressalva` | **NÃO incluir** (campo opcional; omitir evita boilerplate repetido) |
| `niveis.iniciante/intermediario/avancado/especialista` | os 4 presentes, cada um ≥ 180 caracteres |
| `comparacoes` | ≥ 1 item; `tema`, `a.rotulo`, `a.texto`, `b.rotulo`, `b.texto`, `diferencaGabarito` todos preenchidos |
| `pegadinhas` | ≥ 2 itens; `afirmacaoEquivocada`, `porqueErrada`, `versaoCorreta` preenchidos |
| `resumoEstruturado` | `conceitos` ≥ 3, `regras` ≥ 2, `comparacoes` ≥ 1, `fluxos` ≥ 1, `excecoes` ≥ 1, `palavrasChave` ≥ 4, `checklist` ≥ 4 |
| `exemplosDetalhados` | **exatamente 3**, na ordem `introducao` → `aplicacao` → `erro`, cada um com os 9 campos: `problema` ≥ 80, `dados` ≥ 60, `conceitos` ≥ 2, `estrategia` ≥ 80, `execucao` ≥ 3, `resultado` ≥ 60, `justificativa` ≥ 100, `errosFrequentes` ≥ 2, `variacao` ≥ 80 |

### 3.1. Preservar o que já existe

`registroAtual` traz o que já foi escrito no overlay do módulo. **Regra:** se um campo já
contém texto válido e consistente com o `conteudo` base, **mantenha-o** (reproduza-o no
seu arquivo). Preencha apenas o que estiver vazio, curto ou ausente. Se um campo preenchido
estiver claramente errado (fato contraditório pelo `conteudo` base), corrija-o.

## 4. Qualidade dos 3 exemplos (natureza distinta — §5.4 do prompt mestre)

- **`introducao`**: exemplo introdutório, didático, com o conceito isolado. O aluno ainda
  não domina o tópico; o exemplo explica.
- **`aplicacao`**: aplicação prática com dados concretos (cenário, planilha, rede, lei,
  processo). Mostra o procedimento operando em contexto real.
- **`erro`**: exemplo avançado de **interpretação de erro** — um caso em que a resposta
  aparentemente plausível está errada (ou uma saída de sistema/simulador mal interpretada).
  Explicar por que a leitura ingênua falha.
- Os três exemplos **não** podem ser o mesmo problema com números trocados: devem variar
  escopo, contexto e nível de complexidade.
- `dados` deve trazer os valores/condições concretas do problema (não "os dados são os
 mostrados" nem placeholders): números, endereços, cláusulas, tabelas.
- `execucao` = passos numerados da resolução (≥ 3 itens), no formato de ações.
- `justificativa` = por que o resultado é o gabarito, ligando conceito → evidência.
- `errosFrequentes` = ≥ 2 erros típicos do aluno, cada um explicando a confusão.
- `variacao` = mudança no enunciado que mantém a estrutura e exige nova aplicação.

## 5. Proibições (o auditor reprova)

- Campos vazios, arrays vazios, strings com placeholder (`TODO`, `Lorem ipsum`,
  "Consulte a documentação para saber mais", "implementar depois", etc.).
- **Marcadores técnicos no texto visível**: é PROIBIDO escrever qualquer string do tipo
  `uid:<id>:<tipo>:<i>:<campo>`, `uid_...`, ou repetir o ID do subtópico
  (ex.: `m4-u2-t2-s2`, `modulo-4-unidade-2-topico-2-sub-2`) dentro de `problema`,
  `dados`, `estrategia`, `resultado`, `justificativa`, `variacao`, `niveis.*`,
  `porqueImporta`, `resumoEstruturado.*`, `comparacoes.*` ou `pegadinhas.*`.
  Esses marcadores existem apenas para deduplicação interna e **vazam para a tela
  do aluno**, reprovando o lote. Escreva o texto como o aluno leria.
  **Única exceção:** o campo `orientacaoEstrategica.relacoes`, que por contrato
  lista IDs reais de subtópicos (`"m2-u4-t1-s1 (Máscaras de sub-rede) — ..."`).
- **Frases duplicadas**: nenhuma string ≥ 120 caracteres pode ser idêntica a outra string
  do mesmo lote **ou** a outro campo do mesmo registro. Em particular, `versaoCorreta`
  (pegadinha) e `resultado` (exemplo) não podem ser o mesmo texto — reformule.
- Boilerplate: `justificativa` de `relevanciaConcurso` e cada item de `resumoEstruturado`
  devem ser específicos do subtópico; nada de frases genéricas copiadas entre registros.
- Frases vagas como "consulte a documentação", "existem outros métodos", "será aprofundado
  posteriormente".
- Atribuir incidence statistics sem fonte: use classificação qualitativa e declare que é
  estimativa pedagógica.

### 5.1 Economia de texto (obrigatório)

Escreva **o suficiente para cumprir os mínimos, e nem um caractere a mais**:

- cada string entre **1,2× e 2×** o mínimo exigido (ex.: `porqueImporta` entre 150 e 250
  caracteres; cada `niveis.*` entre 200 e 400 caracteres; `justificativa` do exemplo entre
  120 e 220; `variacao` entre 90 e 180);
- o registro completo deve ter entre **6 KB e 11 KB**; o arquivo do lote entre 12 KB e 22 KB;
- nada de parágrafos de meia página, nem de repetir a mesma ideia em três campos.

Isso evita truncamento da resposta e mantém a apostila objetiva.

## 6. Validação (obrigatória antes de entregar)

```bash
cd /root/projetos/FCN
node --check scripts/lotes/<NOME-DA-CONST>.js
node scripts/validar-lote.mjs scripts/lotes/<NOME-DA-CONST>.js
```

O validador deve imprimir **`FALHAS: 0 — lote conforme o contrato.`**. Corrija e repita
até_zero. Não altere nenhum arquivo fora de `scripts/lotes/`.

## 7. Entrega

Ao final, responda **apenas** com:
1. caminho do arquivo gravado;
2. número de registros gravados;
3. saída final do validador (`FALHAS: 0` ou as pendências que restaram);
4. qualquer decisão editorial relevante (contenção, corte de escopo, recusa de inventar dado).
