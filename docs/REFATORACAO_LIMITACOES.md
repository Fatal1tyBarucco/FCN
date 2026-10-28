# LIMITAÇÕES TÉCNICAS — Apostila Web Interativa FCN

Registro honesto das limitações técnicas remanescentes, conforme Seção 19 do
`Escrita.txt` (regras absolutas de entrega: não esconder limitações técnicas;
não inventar resultados de testes; não apresentar conteúdo ilustrativo como
resultado real de simulador). Complementa `docs/REFATORACAO.md`,
`docs/DECISOES_ARQUITETURAIS.md` e `docs/PENDENCIAS.md`.

## 1. Simuladores não executam comandos reais

Nenhum simulador executa comando real no sistema operacional, rede ou serviço
externo. Todos são didáticos, em memória, com dados fictícios.

- `apostila-ia/assets/js/simulator_network.js` — `ping` e `traceroute` são
  simulados; a calculadora IPv4/CIDR calcula de verdade, mas não envia pacotes.
  Declaração no código: `versaoDeclarada` =
  "simulador didático — não executa comandos reais no SO".
- `apostila-ia/assets/js/simulators.js` — simulador Excel avalia fórmulas em
  memória (parser próprio, sem `eval`/`new Function`); não é o Excel real e não
  cobre tabelas estruturadas, R1C1, arrays dinâmicos nem todas as funções.
- `apostila-ia/assets/js/simulator_security.js` — triagem de phishing e
  políticas de backup são simulação didática, não substituem AV/EDR ou
  treinamento corporativo.
- `apostila-ia/assets/js/simulator_prompts.js` — laboratório de prompts é
  local, sem chamada a modelo de IA real; respostas predefinidas não são
  geração real de LLM (Seção 7.4 do `Escrita.txt`).
- `apostila-ia/assets/js/simulator_data.js` e `simulator_ethics.js` — operam
  sobre dados fictícios; não acessam sistemas reais nem executam comandos.
- `apostila-ia/assets/js/simulator_ethics.js` declara explicitamente: "não
  acessa sistemas reais, não executa comandos, não chama IA".

## 2. TTS depende do dispositivo

- `apostila-ia/assets/js/audio.js` usa `SpeechSynthesisUtterance` (Web Speech
  API). A disponibilidade de vozes pt-BR, qualidade e comportamento variam por
  navegador/dispositivo; a indisponibilidade é tratada com mensagem visível, mas
  não foi validada em navegador real (limitação declarada em
  `docs/DECISOES_ARQUITETURAIS.md`, trade-off T7/T8).
- Não se afirma que todos os dispositivos possuem a mesma voz ou qualidade de
  síntese (`Escrita.txt` 12.1).

## 3. Conteúdo e referências não inventados

- Nenhum conteúdo inventado: textos didáticos, questões e flashcards são
  autorais; questões não são atribuídas a bancas reais (Seção 10 do
  `Escrita.txt`).
- Nenhuma referência inventada: `apostila-ia/assets/data/references.js` contém
  entradas com status `verificado` e URL preenchida; IDs de vídeo (20) foram
  validados via oEmbed em 2026-10-24 e permanecem com IDs verificados.
- Vídeos publicados como validados mantêm IDs verificados em 2026-10-24;
  disponibilidade regional e execução dos embeds em navegador real ainda
  precisam de teste (`docs/DECISOES_ARQUITETURAIS.md`).

## 4. Resultados de simulador não apresentados como reais

- Nenhum resultado de simulador é apresentado como execução real. Cada painel
  exibe "Escopo declarado" com `versaoDeclarada` e remete ao contrato no
  cabeçalho do arquivo correspondente (`simulators.js`, `simulator_network.js`,
  etc.).
- Gráficos em `apostila-ia/assets/js/charts.js` usam cálculos reais sobre os
  dados exibidos (SVG próprio, sem biblioteca externa), mas permanecem
  didáticos, sem dados de produção.

## 5. Referências técnicas pendentes

Referências técnicas ainda não verificadas individualmente (não cadastradas no
catálogo ou pendentes de verificação artigo a artigo):

- Microsoft Learn (documentação oficial Microsoft) — referências parciais;
  verificação completa por artigo/seção pendente.
- RFCs (IETF) — apenas as RFCs listadas no catálogo estão verificadas;
  demais RFCs não listadas (FTP, SMTP, ICMP, ARP, NAT, VPN, entre outras)
  permanecem pendentes.
- CERT.br — referência institucional presente; verificação artigo a artigo
  pendente.
- Demais resoluções ANPD (além das cadastradas), demais incisos/parágrafos do
  CF art. 37 e art. 5º não enumerados, e verificação artigo a artigo das leis
  adicionais citadas por remissão no M6.

Fonte: `docs/INVENTARIO_CURRICULAR.md` e `docs/AUDITORIA_FINAL.md`.

## 6. Outras limitações declaradas

- Nenhum teste em navegador real confirmado para este HEAD; verificação limita-se
  a `node --check`, smoke tests em Node/vm e testes estruturais.
  (`docs/DECISOES_ARQUITETURAIS.md` §3.1, `docs/RELATORIO_TESTES.md`.)
- IndexedDB não implementado (decisão documentada T5): dados e progresso em
  memória/localStorage, com limite de ~5MB.
- Acessibilidade parcial (T7): atributos/contraste/teclado implementados, mas
  WCAG com leitor de tela não testado.
- PWA (Service Worker + manifest) não validada em navegador real; registro
  condicional apenas em `http/https` (inerte em `file://`).
- Migração de versão de `storage.js` é nominal (`_v`), sem transformação real.
- `search.js` e `audio.js` carregados com `defer`: dependem da ordem de scripts
  síncronos anteriores; ordem crítica não validada automaticamente.
- Persistência: `navigation.js`, `flashcards.js` e `quiz-engine.js` mantêm
  gravações próprias em `localStorage`; `storage.js` não é fonte única
  (`docs/DECISOES_ARQUITETURAIS.md`, D-ORQ-006).

## 7. Princípio aplicado

Conforme `Escrita.txt` Seção 19: limitações técnicas não são escondidas; nenhum
resultado de teste é inventado; nenhuma funcionalidade é apresentada como
operacional sem teste real. Este documento deve ser atualizado a cada incremento
que altere o estado acima.
