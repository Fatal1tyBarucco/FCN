# Revisão de questões / gabaritos — procedimento de auditoria (FCN)

Tema: balanceamento de gabaritos das 399 questões autorais (M1–M8, arquivos `questions*.js`) e revisão semântica do banco.

## Regra de governo (sempre consultar antes de propor alteração)

- `docs/DISTRIBUICAO_GABARITOS_YYYY-MM-DD.md` é o documento de política. Se ele diz "não alterar gabarito apenas para equilibrar; correção somente quando objetivamente errado", a proposta de troca de letra é válida apenas quando: (a) a alternativa correta realmente está num item que deveria ser outra; (b) o conteúdo de `curriculum_mN.js` corrobora a outra letra. Nenhuma troca por viés estatístico puro.
- Se o documento não está atualizado para o HEAD atual, re-verifique com `node` (contagem por `gabarito: "X"`) antes de propor — auditorias defasam.

## Procedimento (ordem)

1. Contagem real por módulo via `node` sobre `apostila-ia/assets/data/questions*.js` (regex `gabarito:\s*"([A-E])"`). Não confiar em contagem do docs/ antigo.
2. Comparar com `docs/DISTRIBUICAO_GABARITOS_*.md` (tabela de % por letra, Zeros, concentracao >30%). Identificar se o viés é estatístico (manter) ou erro de conteúdo (revisar).
3. Se revisão necessária: delegar via `delegate_task` (≤2 subagentes concorrentes, modelos distintos, fallback openrouter/free se fallar). Cada subagente receive: objetivo, arquivos de entrada (leitura), arquivos alteráveis (nenhum — read-only), restricao, criterios objetivos.
4. Subagente de gabaritos: produzir `balanceamento_gabaritos.json` (arquivo, total, letras, %; lista de ids sugeridos para troca + justificativa baseada no curriculum — nunca apenas "para equilibrar"). Subagente de semantica: `semantico.json` (amostra estratificada: 3 por modulo — 1 basico/1 intermediario/1 avancado, ou ajuste se nivel faltante; resultado OK/REVISAR com trecho exato; check de alinhamento justificativa/gabarito/analise).
5. Antes de declarar concluido: confirmar (a) arquivo de evidencia existe; (b) contagem real do subagente bate com a minha; (c) nenhum `.js` alterado sem revisao independente; (d) registrado em `docs/PENDENCIAS.md` se substituido (falha de delegate_task / modelo).

## Evidencia exigida (nunca substitua por descricao)

- Comando: `node -e "..."` ou arquivo temporario + `node` sobre `questions*.js`.
- Saida: numeros de total, letras, % — copiados para o relatorio.
- Arquivos de evidencia no workspace scratch: nomeado claramente (`balanceamento_gabaritos.json`, `semantico.json`).
- Limitacao honesta reportada: se subagente falhou (HTTP 429, parse, modelo), registrar em `docs/PENDENCIAS.md`; nunca classificar como concluido sem evidencia.

## Pitfalls

- Trocar gabarito apenas para reduzir A+B > 60% viola a regra do documento governanca — o subagente deve justificar com referencia ao `curriculum_mN.js`, nao com "balanceamento".
- `delegate_task` pode falhar por plugin `profile_routes`; se ocorrer, registrar substituicao (passos diretos isolados), nao ignorar, nao declarar concluido pelo subagente.
- Modelos Free (openrouter/free, Nous) podem falhar; re-disparar em lote ≤2, aguardar reset. Se todos falharem, continuar com openrouter/free (nunca parar sem relatar ao usuario).
- Nenhum `.js` de questoes alterado sem revisao independente; nenhum merge direto em main (regra AGENTS.md / branch por tarefa).
- Se a contagem real divergir do docs/ (ex: M7 declara 40 MC mas tem 33), documentar divergencia com SHA + comando + saida, nao corrigir o docs sem confirmar o codigo.
