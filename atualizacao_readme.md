# Atualização do README raiz (§6)

## Edição aplicada

Arquivo: `README.md` (raiz do repositório).

Trecho alterado na seção "Estrutura de diretórios":

- Antes: `assets/data/  # currículo (M1–M8, 427 nós), flashcards (460), questões (399/324), referências (72)`
- Depois: `assets/data/  # currículo (M1–M8, 427 nós), flashcards (460), questões (399), referências (183)`

## Justificativa

As contagens antigas (`399/324`, `72` referências) não correspondiam ao estado atual do repositório (399 questões, 183 referências verificadas). A correção alinha o README com `AGENTS.md` e os dados em `assets/data/`.

## Patches aplicados (etapa 8)

- `README.md`: correção de contagens (acima).
- Código de aplicação (`apostila-ia/`): nenhum patch necessário; `node --check` passou para todos os `.js`.

## Verificação

- `git diff -- README.md` confirma alteração de uma linha.
- Nenhum arquivo de código foi modificado.
