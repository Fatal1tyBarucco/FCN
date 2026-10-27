# Auditoria heurística de qualidade estrutural das questões

Gerado por scripts/audit_question_quality.mjs. Este relatório sinaliza candidatos para revisão; não valida automaticamente a verdade das respostas nem substitui revisão pedagógica independente.

- Questões lidas: **399**.
- IDs duplicados: **0**.
- Questões com pelo menos um alerta heurístico: **0**.
- Pares com contexto + enunciado idênticos: **0**.
- Distribuição por módulo: M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40.
- Distribuição de gabaritos (incluindo C/E): D=48, errado=35, A=80, certo=40, C=69, B=100, E=27.
- Distribuição de gabaritos MC (A-E): A=80, B=100, C=69, D=48, E=27.

## Distribuição de gabaritos MC por módulo

| Módulo | A | B | C | D | E | Total MC |
|---|---:|---:|---:|---:|---:|---:|
| M1|4|11|5|5|1|26|
| M2|8|15|8|3|3|37|
| M3|3|13|11|2|2|31|
| M4|22|22|16|12|12|84|
| M5|13|14|4|5|4|40|
| M6|14|7|7|7|2|37|
| M7|12|5|11|3|2|33|
| M8|4|13|7|11|1|36|
- Distribuição de formato: mc=324, ce=75.

## Alertas

Nenhum alerta heurístico detectado.

## Pares com contexto e enunciado idênticos

Nenhum par idêntico detectado.

## Limitações

- Uma questão sem alerta ainda pode conter erro factual, ambiguidade, gabarito incorreto ou distrator fraco.
- Alertas de fonte, denominação legal e duplicação exigem avaliação humana do contexto.
- A distribuição de letras do gabarito é descritiva e não prova qualidade nem viés por si só.

## Revisão semântica — lote M1 q-m1-21..q-m1-30 (2026-10-27)

- Questões revisadas: 10 (q-m1-21 a q-m1-30). Módulo 1, unidades 2.9–2.13, 4.1, 5.1, 3.3.
- Escopo verificado: enunciado, alternativas, gabarito, justificativa, distratores, fonte; cruzamento com `curriculum.js` (conteúdo base) e simulador documentado.
- Resultado: gabaritos mantidos (B, certo, B, A, certo, B, errado, B, errado, A). Nenhum gabarito alterado.
- Correção aplicada: q-m1-25 (Modo de Compatibilidade) — ajuste de justificativa/trechoDeterminante/analise/pegadinha para alinhar ao currículo: desabilita funcionalidades introduzidas após 2007 (formato .doc legado), removendo a afirmação contraditória de "sem corte universal por ano".
- Demais 9 questões (q-m1-21, 22, 23, 24, 26, 27, 28, 29, 30) sem alteração; fontes Microsoft Support mantidas.
- Validação: `node --check apostila-ia/assets/data/questions.js` → OK.

## Revisão semântica — lote M1 q-m1-31..q-m1-44 (2026-10-27)

- Questões revisadas: 14 (q-m1-31 a q-m1-44). Módulo 1, unidades 3.2–3.6 (Excel/simulador), 4.1 (PowerPoint), 5.1 (OneDrive), 1.1, 2.5/2.14 (Word), 3.1/3.5 (Excel).
- Escopo verificado: enunciado, alternativas, gabarito, justificativa, distratores, fonte; cruzamento com `curriculum.js`/`curriculumPowerPoint14`/`curriculumOneDrive15` e com `assets/js/simulators.js` (cabeçalho "TIPOS E ERROS", "SEPARADOR REGIONAL", "FUNÇÕES SUPORTADAS", `fnProcx`, `ajustarFormulaAoCopiar`).
- Resultado: gabaritos mantidos (B, certo, B, certo, certo, B, errado, certo, B, A, E, C, D, C). Nenhum gabarito alterado.
- Correções aplicadas: nenhuma. Itens verificados individualmente:
  - q-m1-31 (SE): condição 6,0 >= 7 falsa → terceiro argumento "Reprovado"; consistente com a semântica documentada da função.
  - q-m1-32 (escopo do simulador): recusa prévia "ERRO DE ENTRADA" e busca real em PROCX/PROCH/PROCV confirmadas no código.
  - q-m1-33 (ajuste ao copiar): parte relativa A2→A3, absoluta $B$1 preservada; confirmado em `ajustarFormulaAoCopiar`.
  - q-m1-34 (PROCX): correspondência exata por padrão (modo=0) e retorno de `se_não_encontrado` no lugar de #N/A confirmados em `fnProcx`.
  - q-m1-35 (separador regional): SOMA(1,5; 2,5)=4 e SOMA(1,5)=6 conforme cabeçalho "SEPARADOR REGIONAL".
  - q-m1-36/q-m1-37: animação (objeto no slide) × transição (entre slides) e escopo global do Slide Mestre confirmados em `curriculumPowerPoint14`.
  - q-m1-38/q-m1-39: sincronização bidirecional ≠ backup imutável e retenção configurável confirmados em `curriculumOneDrive15`.
  - q-m1-40 a q-m1-44: exportação PDF, cabeçalhos/rodapés ("Primeira Página Diferente"), Tabelas do Excel, filtros/validação/formatação condicional e relatório técnico integrado (estilos, seções, campos, PDF acessível) consistentes com o currículo e fontes Microsoft Support.
- Fontes: mantidas (Microsoft Support/Learn, RFCs quando aplicável); nenhuma URL inventada ou removida.
- Validação: `node --check apostila-ia/assets/data/questions.js` → OK.

## Revisão semântica — lote M2 q-m2-01..q-m2-10 (2026-10-27)

- Questões revisadas: 10 (q-m2-01 a q-m2-10). Módulo 2, subtópicos m2-u1-t1-s1 (conceitos e componentes), m2-u1-t1-s2 (classificação de redes) e m2-u1-t1-s3 (topologias físicas e lógicas).
- Escopo verificado: enunciado, alternativas, gabarito, justificativa, distratores e fonte; cruzamento com `apostila-ia/assets/data/curriculum_m2.js` (unidade 2.1, tópico 1, subtópicos s1–s3) e exemplos/exercícios registrados.
- Resultado: gabaritos mantidos (B, errado, A, B, C, certo, C, errado, B, errado). Nenhum gabarito alterado.
- Correções aplicadas: nenhuma. Itens verificados individualmente:
  - q-m2-01: função principal do servidor (fornecer recursos/serviços); distratores cobrem cliente, roteamento/WAN e item absurdo (energia).
  - q-m2-02: CE falso por absoluto "nunca"; servidor pode ser cliente de outro servidor (servidor web → banco de dados).
  - q-m2-03: mapeamento nós/enlaces/clientes/servidores do exemplo resolvido do currículo (20 estações, servidor de arquivos e de impressão).
  - q-m2-04: P2P torna papéis dinâmicos, sem eliminá-los; implementações podem usar coordenação/indexação.
  - q-m2-05: prefeitura em uma cidade → MAN; WAN é tentação por "maior".
  - q-m2-06: WLAN é subtipo de LAN (meio sem fio), não categoria autônoma.
  - q-m2-07: São Paulo–Rio de Janeiro → WAN, com VPN ou circuito dedicado; MAN cobre uma única área metropolitana.
  - q-m2-08: intranet (privada/restrita) ≠ Internet (pública global), embora ambas usem TCP/IP.
  - q-m2-09: 12 estações convergindo a switch central → estrela (12 enlaces, não malha completa de 66).
  - q-m2-10: em estrela, falha de nó afeta apenas o nó; falha do central derruba a rede (inversão do enunciado).
- Fontes: mantidas (Cisco LAN/WAN/topologia; IETF RFC 1122 quando aplicável); nenhuma URL inventada ou removida.
- Validação: `node --check apostila-ia/assets/data/questions.js` → OK.

## Revisão semântica — lote M2 q-m2-11..q-m2-20 (2026-10-27)

- Questões revisadas: 10 (q-m2-11 a q-m2-20). Módulo 2, subtópicos m2-u1-t1-s3 (topologias físicas e lógicas), m2-u1-t1-s4 (comutação de circuitos vs. pacotes) e m2-u1-t2-s1 (unicast, broadcast, multicast e anycast).
- Escopo verificado: enunciado, alternativas, gabarito, justificativa, distratores e fonte; cruzamento com `apostila-ia/assets/data/curriculum_m2.js` (unidade 2.1, tópicos 1 e 2, subtópicos s3, s4 e s1) e exemplos/exercícios registrados.
- Resultado: gabaritos mantidos (C, certo, B, B, errado, B, A, certo, C, errado). Nenhum gabarito alterado.
- Correções aplicadas: nenhuma. Itens verificados individualmente:
  - q-m2-11: alta disponibilidade/tolerância a falhas com orçamento para cabos → malha (múltiplos caminhos + redirecionamento), com trade-off de custo; bus/anel/estrela simples refutados.
  - q-m2-12: bus tem backbone como ponto único de falha e colisões frequentes; corte no backbone derruba toda a rede.
  - q-m2-13: Internet usa comutação de pacotes; PSTN usa circuitos; circuitos virtuais (Frame Relay/MPLS) não equivalem a circuito clássico.
  - q-m2-14: principal vantagem dos pacotes é compartilhar largura de banda; latência previsível e ausência de perda/reordenação são atributos do circuito, não do pacote.
  - q-m2-15: "sempre o mesmo caminho" é falso; roteamento independente por pacote; caminho lógico predefinido é de circuitos virtuais.
  - q-m2-16: PSTN = circuito dedicado (latência previsível, banda fixa); VoIP = pacotes competindo com outros tráfegos (jitter/perda mitigáveis com QoS).
  - q-m2-17: acesso web a um site = unicast (1:1); broadcast/multicast/anycast não se aplicam ao caso.
  - q-m2-18: em IPv4, associação a grupos multicast é gerenciada por IGMP; em IPv6, função correspondente é MLD; item certo.
  - q-m2-19: streaming simultâneo do mesmo conteúdo para grupo → multicast (replicação nos pontos de ramificação), quando rede e aplicação suportam.
  - q-m2-20: broadcast é limitado ao domínio de broadcast (sub-rede local); roteadores não encaminham 255.255.255.255 (evita broadcast storm).
- Fontes: mantidas (Cisco topologia/comutação; IETF RFC 1112, RFC 1122 e RFC 4291 quando aplicável); nenhuma URL inventada ou removida.
- Validação: `node --check apostila-ia/assets/data/questions.js` → OK.
