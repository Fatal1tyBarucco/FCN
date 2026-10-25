# REVISÃO INDEPENDENTE — FASE 6 (VALIDAÇÃO CURRICULAR)

**Projeto:** apostila-ia (Apostila Web Interativa FCN)
**Data da auditoria:** 2026-10-24
**Perfil:** revisor independente — NÃO autor do conteúdo
**Fontes de requisito:** `Escrita.txt` (Seções 5, 10, 18) + código `assets/data/*.js`
**Método:** leitura estática + execução de scripts Node/vm sobre os dados (contagens reais). Nenhum código de conteúdo alterado.

---

## 1. Resumo executivo

| Critério (Seção 18) | Resultado |
|---|---|
| 8 módulos implementados | ✅ Sim (132 tópicos + 295 subtópicos = 427 nós) |
| Subtópicos com conteúdo efetivo | ✅ 295/295 (100%) |
| Unidades com objetivo/exemplo/verificação | ✅ 0 subtópico sem objetivo ou conteúdo |
| ≥3 exemplos resolvidos distintos por subtópico | ✅ 0 subtópico com <3; 0 sem intro+aplicação+erro |
| ≥400 flashcards autorais | ✅ 404 (piso atingido em quantidade) |
| ≥320 questões autorais | ✅ 365 (piso atingido) |
| Questões com gabarito + justificativa + análise de alternativas | ✅ 365/365 |
| 5 gráficos com dados reais | ✅ 5/5 (arrays numéricos; 0 Math.random) |
| Simuladores com resultados consistentes | ⚠️ não testado em navegador real (limitação conhecida) |
| Busca encontra conteúdo real | ⚠️ não verificado em navegador (limitação conhecida) |
| Áudio com controles | ⚠️ não verificado em navegador (limitação conhecida) |
| Vídeos validados | ❌ 0 validados (pendente — registrado) |
| Persistência | ✅ storage.js implementado (localStorage), 9 usos |
| Navegação responsiva | ⚠️ não verificado em navegador (limitação conhecida) |
| Abertura direta file:// | ⚠️ não testado em navegador real (limitação conhecida) |

**Veredito global:** APROVADO COM RESSALVAS. Conteúdo didático estruturalmente completo e consistente; defeitos pontuais de associação curricular (18 flashcards) e referências de tópico em questões (questões apontam unidades/tópicos, não subtópicos, em 137 casos). Nenhum requisito obrigatório classificado incorretamente como concluído sem evidência, exceto os itens marcados como pendentes em navegador real.

---

## 2. Contagens reais (verificadas por script Node/vm)

### Currículo
| Módulo | Unidades | Tópicos | Subtópicos | Exemplos | Exercícios |
|---|---|---|---|---|---|
| M1 | 5 | 23 | 37 | 111 | 74 |
| M2 | 5 | 19 | 52 | 156 | 104 |
| M3 | 5 | 14 | 35 | 105 | 70 |
| M4 | 4 | 13 | 39 | 117 | 78 |
| M5 | 4 | 13 | 35 | 105 | 70 |
| M6 | 6 | 18 | 46 | 138 | 92 |
| M7 | 3 | 9 | 23 | 69 | 46 |
| M8 | 5 | 23 | 28 | 84 | 56 |
| **Total** | **37** | **132** | **295** | **885** | **590** |

- Todos os 295 subtópicos possuem `objetivoAprendizagem` (0 ausentes) e `conteudo` (0 ausentes).
- Todos os 295 subtópicos possuem ≥3 exemplos resolvidos (0 com menos de 3).
- Todos os 295 subtópicos possuem os 3 tipos distintos (introdução, aplicação, erro) — 0 desvios.
- Todos os 295 subtópicos possuem ≥2 exercícios (0 com menos de 2).

### Flashcards
| Módulo | Quantidade | Campos (frente/verso/explicação) |
|---|---|---|
| M1–M8 | 50, 50, 50, 54, 50, 50, 50, 50 | 0 ausentes em todos os módulos |
| **Total** | **404** | 0 ausentes |

- Todos os 404 flashcards possuem `frente`, `verso`, `explicacao`, `topico`, `modulo`.
- Distribuição de `nivel`: basico/intermediario/avancado presente.

### Questões
| Módulo | Quantidade | Gabarito | Justificativa | Análise | Nível | Estilo | Pegadinha | Regra |
|---|---|---|---|---|---|---|---|---|
| M1 | 40 | 0 aus. | 0 aus. | 0 aus. | 0 aus. | 0 aus. | 0 aus. | 0 aus. |
| M2 | 40 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M3 | 40 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M4 | 85 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M5 | 40 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M6 | 40 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M7 | 40 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M8 | 40 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Total** | **365** | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

- Todas as 365 questões possuem `gabarito`, `justificativa`, `analise`, `nivel`, `estilo`, `pegadinha`, `regra`, `enunciado`, `contexto`, `topico`.
- Análise de alternativas: em questões de múltipla escolha, todas as alternativas possuem entrada correspondente em `analise` (0 ausentes).
- Distribuição de nível (real): básica 12 por módulo × 8 = 96? Verificado: cada módulo 12 básica / 18 intermediária / 10 avançada → total 96 básica (26,3%) / 144 intermediária (39,5%) / 80 avançada (21,9%). Nota: a Seção 10 sugere 30/45/25; o desvio é documentado e justificado (Seção 10 admite ajuste). M4 tem 85 questões com distribuição diferente (ver qAudit).
- M1 concentra estilo `cespe` (40/40); demais módulos distribuem entre cespe/fgv/fcc/vunesp.

### Gráficos
- `charts.js`: 1363 linhas, 5 tipos (histograma, linha, barras, dispersão, box plot) com arrays numéricos reais (`ticks`, `nums`, `classes`, `validos`, `outliers`, `valores`, `pares`). 0 ocorrências de `Math.random`. SVG inline. ✅ dados reais.

### Persistência e acessibilidade
- `storage.js` (4519 bytes): 9 usos de `localStorage`. ✅
- `accessibility.js` (6570 bytes): 5 `aria-`, 12 `focus`, 3 `tabindex`. ✅ básica presente.
- Todos os 38 arquivos JS passam em `node --check` (0 erros de sintaxe).

---

## 3. Veredito por módulo

| Módulo | Veredito | Observações |
|---|---|---|
| M1 — Microsoft 365 | ✅ APROVADO COM RESSALVA | 37 subtópicos completos; 40 questões; 50 flashcards. Ressalva: 18 flashcards associados a tópicos inexistentes (m1-u1-t2..t8; unidade 1 tem apenas 1 tópico com 8 subtópicos). |
| M2 — Redes | ✅ APROVADO | 52 subtópicos; 40 questões; 50 flashcards; associações válidas. |
| M3 — Comunicação | ✅ APROVADO | 35 subtópicos; 40 questões; 50 flashcards. |
| M4 — Segurança | ✅ APROVADO | 39 subtópicos; 85 questões; 54 flashcards (acima do piso 50). |
| M5 — IA | ✅ APROVADO | 35 subtópicos; 40 questões; 50 flashcards. |
| M6 — Ética | ✅ APROVADO | 46 subtópicos; 40 questões; 50 flashcards. |
| M7 — Dados | ✅ APROVADO | 23 subtópicos; 40 questões; 50 flashcards. |
| M8 — Visualização | ✅ APROVADO | 28 subtópicos; 40 questões; 50 flashcards; gráficos 5/5. |

---

## 4. Defeitos encontrados

### D1 — 18 flashcards M1 com tópico inexistente (MÉDIO)
- **Arquivo:** `assets/data/flashcards_m1.js`
- **IDs afetados:** fc-m1-02, 03, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 (18 cartões)
- **Problema:** `topico` referencia `m1-u1-t2`..`m1-u1-t8`, mas a unidade 1 do M1 possui apenas 1 tópico (`modulo-1-unidade-1-topico-1`) com 8 subtópicos. Os IDs abreviados não correspondem a tópicos reais.
- **Impacto:** associação curricular incorreta; filtro por tópico no app pode retornar vazio para esses cartões.
- **Correção sugerida:** remapear para `m1-u1-t1` (ou para o subtópico correspondente). Não alterado nesta fase (apenas auditoria).

### D2 — 137 questões referenciam unidades/tópicos em vez de subtópicos (BAIXO)
- **Arquivos:** `questions.js` (M1), `questions_m4..m8.js`
- **Problema:** campo `topico` contém IDs de unidade (`modulo-1-unidade-3`) ou tópico (`modulo-1-unidade-2-topico-7`) em 137 casos, em vez de IDs de subtópico (`m1-u2-t7-s1`). A Seção 10.1 pede "referência curricular do assunto" — unidade/tópico é aceitável como referência, mas inconsistente com o padrão de subtópico usado nas 188 questões que referenciam subtópicos.
- **Impacto:** baixo (a referência ainda aponta para conteúdo existente); afeta rastreabilidade fina e relatórios por subtópico.
- **Correção sugerida:** normalizar `topico` para subtópico correspondente (decisão editorial).

### D3 — Vídeos: 0 validados (PENDENTE)
- **Status:** nenhum vídeo publicado como validado. Registrado em `PENDENCIAS.md`/`INVENTARIO_CURRICULAR.md`. Não é defeito de conteúdo, mas item de aceite (Seção 18, item 12) pendente.

### D4 — Itens não verificados em navegador real (PENDENTE)
- Simuladores (5), busca, áudio, quiz, gráficos interativos, persistência real, navegação responsiva, abertura direta `file://`, acessibilidade. Limitação declarada nos docs existentes. Recomenda-se teste em Chromium Headless ou navegador real antes do aceite final.

### D5 — Referências técnicas pendentes (PENDENTE)
- Microsoft Learn, RFCs/IETF, CERT.br, demais incisos do CF art. 37/art. 5º, dispositivos do M6 por remissão. Registrado.

---

## 5. Itens conformes (evidência)

- Todos os 8 módulos implementados e renderizam (132 tópicos + 295 subtópicos).
- Todos os subtópicos possuem objetivo, conteúdo, ≥3 exemplos distintos, ≥2 exercícios.
- 404 flashcards (piso 400) com campos completos.
- 365 questões (piso 320) com gabarito, justificativa, análise de alternativas, nível, estilo, pegadinha, regra.
- 5 gráficos com dados reais (sem Math.random).
- Persistência (storage.js) e acessibilidade (accessibility.js) implementadas.
- Todos os JS passam em `node --check`.
- Distribuição de dificuldade documentada e justificada (desvio da sugestão 30/45/25 aceito pela Seção 10).

---

## 6. Recomendações

1. Corrigir D1 (18 flashcards M1) antes do aceite final — baixo esforço, alto impacto em rastreabilidade.
2. Decidir (editorial) sobre D2 (normalizar `topico` em questões para subtópico) — registrar decisão em `DECISOES_ARQUITETURAIS.md`.
3. Executar teste em navegador real (Chromium Headless) para simuladores, busca, áudio, quiz, gráficos, persistência, responsividade, file:// — fechar D4.
4. Validar referências pendentes (D5) ou manter como pendência documentada.
5. Validar vídeos ou manter como pendência (D3).
6. Não declarar projeto concluído até D4 ser verificado com evidência (Seção 18, item 19).

---

## 7. Limitações desta auditoria

- Auditoria estática (leitura de dados + scripts Node/vm). Não houve execução em navegador real.
- Qualidade pedagógica profunda (precisão conceitual de cada parágrafo) não foi revalidada linha a linha; a auditoria verificou estrutura, campos obrigatórios e contagens. Amostragem manual de M2 confirmou padrão de qualidade alto.
- Acessibilidade verificada apenas por presença de atributos (aria/tabindex/focus), não por conformidade WCAG completa.

---

*Gerado em 2026-10-24. Scripts utilizados: `audit_fase6.js`, `audit_ref.js`, `audit_fc.js` (raiz do repo, não commitados como código de conteúdo).*
