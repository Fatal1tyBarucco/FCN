# Verificação de URLs — references.js (P2-4, atualizada em FIX-01)

Data da verificação: 2026-10-29. Escopo: todas as 183 entradas de `apostila-ia/assets/data/references.js`.

Método: script Node (sem dependências externas) `scripts/verify_urls.mjs`. Para cada URL: HEAD (timeout 15 s); se HEAD indicar erro de rede ou status ≥ 400, repete como GET. Em caso de bloqueio (401/403/405/429) ou erro de rede, pausa de 2 s e 1 tentativa extra com segundo User-Agent (Chrome Windows/Edge). Redirects seguidos (follow); a URL final reportada é o destino. Delay de 1000 ms entre requisições (bursts mais curtos dispararam rate-limiting em gov.br e support.google.com durante os testes, produzindo 403 em massa que não reflete o estado real dos links).

Limitação conhecida: `bloqueado` pode indicar rate-limiting causado pelo próprio varredor; retestar manualmente em navegador antes de presumir indisponibilidade.

Classificação: `ok` (2xx no destino), `redirect` (3xx na cadeia até 2xx), `bloqueado` (401/403/405/429 — o servidor recusou o cliente automatizado; **não** é prova de link inválido), `quebrado` (404/410 no destino ou erro de DNS/TLS/timeout — defeito real).

Resumo: total 183; ok 167; redirect 8; bloqueado 8; quebrado 0.

| # | ID | URL | Status HTTP | URL final | Resultado | Motivo |
|---|---|---|---|---|---|---|
| 1 | ref-lgpd-13709-2018 | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | ok | 2xx sem redirecionamento |
| 2 | ref-conflito-interesses-12813-2013 | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm | ok | 2xx sem redirecionamento |
| 3 | ref-lai-12527-2011 | http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm | ok | 2xx sem redirecionamento |
| 4 | ref-governo-digital-14129-2021 | http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm | ok | 2xx sem redirecionamento |
| 5 | ref-cf-1988-art37-caput-art5-xxxiii | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | ok | 2xx sem redirecionamento |
| 6 | ref-marco-civil-12965-2014 | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm | ok | 2xx sem redirecionamento |
| 7 | video-m1-excel-origem | https://www.youtube.com/watch?v=ZVURQLXZtIc | 200 | https://www.youtube.com/watch?v=ZVURQLXZtIc | ok | 2xx sem redirecionamento |
| 8 | video-m1-excel-funcoes | https://www.youtube.com/watch?v=boUzkJJNOPI | 200 | https://www.youtube.com/watch?v=boUzkJJNOPI | ok | 2xx sem redirecionamento |
| 9 | video-m2-redes-osi | https://www.youtube.com/watch?v=WO1uGJRqrwI | 200 | https://www.youtube.com/watch?v=WO1uGJRqrwI | ok | 2xx sem redirecionamento |
| 10 | video-m2-redes-tcpip | https://www.youtube.com/watch?v=bH29oltn8Cw | 200 | https://www.youtube.com/watch?v=bH29oltn8Cw | ok | 2xx sem redirecionamento |
| 11 | video-m2-redes-ip | https://www.youtube.com/watch?v=XPWd08tLAuo | 200 | https://www.youtube.com/watch?v=XPWd08tLAuo | ok | 2xx sem redirecionamento |
| 12 | video-m3-email-smtp | https://www.youtube.com/watch?v=QtqbaEiwlyU | 200 | https://www.youtube.com/watch?v=QtqbaEiwlyU | ok | 2xx sem redirecionamento |
| 13 | video-m4-criptografia | https://www.youtube.com/watch?v=cWld3rMD7Wk | 200 | https://www.youtube.com/watch?v=cWld3rMD7Wk | ok | 2xx sem redirecionamento |
| 14 | video-m4-firewalls | https://www.youtube.com/watch?v=TbjhWIhLQDU | 200 | https://www.youtube.com/watch?v=TbjhWIhLQDU | ok | 2xx sem redirecionamento |
| 15 | video-m4-lgpd-ti | https://www.youtube.com/watch?v=wlaNFx73qh4 | 200 | https://www.youtube.com/watch?v=wlaNFx73qh4 | ok | 2xx sem redirecionamento |
| 16 | video-m4-engenharia-social | https://www.youtube.com/watch?v=qqgkhvsyL9Q | 200 | https://www.youtube.com/watch?v=qqgkhvsyL9Q | ok | 2xx sem redirecionamento |
| 17 | video-m5-ml-primeiro-codigo | https://www.youtube.com/watch?v=DNegkxwQJuY | 200 | https://www.youtube.com/watch?v=DNegkxwQJuY | ok | 2xx sem redirecionamento |
| 18 | video-m5-deep-learning | https://www.youtube.com/watch?v=M8hoXE24PMo | 200 | https://www.youtube.com/watch?v=M8hoXE24PMo | ok | 2xx sem redirecionamento |
| 19 | video-m5-ml-pratico | https://www.youtube.com/watch?v=JyGGMyR3x5I | 200 | https://www.youtube.com/watch?v=JyGGMyR3x5I | ok | 2xx sem redirecionamento |
| 20 | video-m6-ia-servico-publico | https://www.youtube.com/watch?v=As0A-w1WmPI | 200 | https://www.youtube.com/watch?v=As0A-w1WmPI | ok | 2xx sem redirecionamento |
| 21 | video-m6-linguagem-simples-ia | https://www.youtube.com/watch?v=r7dYNidpM3k | 200 | https://www.youtube.com/watch?v=r7dYNidpM3k | ok | 2xx sem redirecionamento |
| 22 | video-m6-transparencia-ia | https://www.youtube.com/watch?v=75RqMrSbenM | 200 | https://www.youtube.com/watch?v=75RqMrSbenM | ok | 2xx sem redirecionamento |
| 23 | video-m6-governo-digital-14129 | https://www.youtube.com/watch?v=Zjv2mZJkakw | 200 | https://www.youtube.com/watch?v=Zjv2mZJkakw | ok | 2xx sem redirecionamento |
| 24 | video-m7-dados-excel | https://www.youtube.com/watch?v=LmhbPTMaJak | 200 | https://www.youtube.com/watch?v=LmhbPTMaJak | ok | 2xx sem redirecionamento |
| 25 | video-m7-dados-pandas | https://www.youtube.com/watch?v=1JpYOqvDJNU | 200 | https://www.youtube.com/watch?v=1JpYOqvDJNU | ok | 2xx sem redirecionamento |
| 26 | video-m8-visualizacao-dashboards | https://www.youtube.com/watch?v=P6E_Kts9pxE | 200 | https://www.youtube.com/watch?v=P6E_Kts9pxE | ok | 2xx sem redirecionamento |
| 27 | ref-microsoft-learn-m365 | https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide | 200 | https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide | ok | 2xx sem redirecionamento |
| 28 | ref-rfc-791-ipv4 | https://www.rfc-editor.org/info/rfc791/ | 200 | https://www.rfc-editor.org/info/rfc791/ | ok | 2xx sem redirecionamento |
| 29 | ref-rfc-793-tcp | https://www.rfc-editor.org/info/rfc793/ | 200 | https://www.rfc-editor.org/info/rfc793/ | ok | 2xx sem redirecionamento |
| 30 | ref-rfc-1034-dns-concepts | https://www.rfc-editor.org/info/rfc1034/ | 200 | https://www.rfc-editor.org/info/rfc1034/ | ok | 2xx sem redirecionamento |
| 31 | ref-rfc-1035-dns-implementation | https://www.rfc-editor.org/info/rfc1035/ | 200 | https://www.rfc-editor.org/info/rfc1035/ | ok | 2xx sem redirecionamento |
| 32 | ref-rfc-2131-dhcp | https://www.rfc-editor.org/info/rfc2131/ | 200 | https://www.rfc-editor.org/info/rfc2131/ | ok | 2xx sem redirecionamento |
| 33 | ref-rfc-7230-http11-messaging | https://www.rfc-editor.org/info/rfc7230/ | 200 | https://www.rfc-editor.org/info/rfc7230/ | ok | 2xx sem redirecionamento |
| 34 | ref-rfc-7231-http11-semantics | https://www.rfc-editor.org/info/rfc7231/ | 200 | https://www.rfc-editor.org/info/rfc7231/ | ok | 2xx sem redirecionamento |
| 35 | ref-rfc-8446-tls13 | https://www.rfc-editor.org/info/rfc8446/ | 200 | https://www.rfc-editor.org/info/rfc8446/ | ok | 2xx sem redirecionamento |
| 36 | ref-rfc-9110-http-semantics | https://www.rfc-editor.org/info/rfc9110 | 200 | https://www.rfc-editor.org/info/rfc9110/ | redirect | → https://www.rfc-editor.org/info/rfc9110/ |
| 37 | ref-anpd-orgao | https://www.gov.br/anpd/pt-br | 200 | https://www.gov.br/anpd/pt-br | ok | 2xx sem redirecionamento |
| 38 | ref-lgpd-lei-15352-2026 | https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm | ok | 2xx sem redirecionamento |
| 39 | ref-anpd-resolucao-2-2022 | https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/regulamentacoes-da-anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022 | 200 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022 | redirect | → https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022 |
| 40 | ref-anpd-resolucao-4-2023 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-4-de-24-de-fevereiro-de-2023-466146077 | 200 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-4-de-24-de-fevereiro-de-2023-466146077 | ok | 2xx sem redirecionamento |
| 41 | ref-cert-br | https://cert.br/ | 200 | https://cert.br/ | ok | 2xx sem redirecionamento |
| 42 | ref-cf-1988-art37-demais | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | ok | 2xx sem redirecionamento |
| 43 | ref-cf-1988-art5-demais | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | ok | 2xx sem redirecionamento |
| 44 | ref-lei-8429-1992-improbidade | http://www.planalto.gov.br/ccivil_03/leis/l8429.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/l8429.htm | ok | 2xx sem redirecionamento |
| 45 | ref-lei-1079-1950-crimes-responsabilidade | http://www.planalto.gov.br/ccivil_03/leis/l1079.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/l1079.htm | ok | 2xx sem redirecionamento |
| 46 | ref-lei-13146-2015-inclusao | http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm | ok | 2xx sem redirecionamento |
| 47 | ref-lei-10098-2000-acessibilidade | http://www.planalto.gov.br/ccivil_03/leis/l10098.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/l10098.htm | ok | 2xx sem redirecionamento |
| 48 | ref-lei-10741-2003-idoso | https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm | 200 | https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm | ok | 2xx sem redirecionamento |
| 49 | ref-lei-13460-2017-usuario-servicos-publicos | http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13460.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13460.htm | ok | 2xx sem redirecionamento |
| 50 | ref-lei-12682-2012-documentos-eletronicos | http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12682.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12682.htm | ok | 2xx sem redirecionamento |
| 51 | ref-lei-14063-2020-assinaturas-eletronicas | http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm | ok | 2xx sem redirecionamento |
| 52 | ref-lcp-101-2000-responsabilidade-fiscal | http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm | ok | 2xx sem redirecionamento |
| 53 | ref-lcp-105-2001-sigilo-financeiro | http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp105.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp105.htm | ok | 2xx sem redirecionamento |
| 54 | ref-lgpd-art7-bases-legais | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | ok | 2xx sem redirecionamento |
| 55 | ref-rfc-959-ftp | https://www.rfc-editor.org/info/rfc959/ | 200 | https://www.rfc-editor.org/info/rfc959/ | ok | 2xx sem redirecionamento |
| 56 | ref-rfc-5321-smtp | https://www.rfc-editor.org/info/rfc5321/ | 200 | https://www.rfc-editor.org/info/rfc5321/ | ok | 2xx sem redirecionamento |
| 57 | ref-rfc-792-icmp | https://www.rfc-editor.org/info/rfc792/ | 200 | https://www.rfc-editor.org/info/rfc792/ | ok | 2xx sem redirecionamento |
| 58 | ref-rfc-826-arp | https://www.rfc-editor.org/info/rfc826/ | 200 | https://www.rfc-editor.org/info/rfc826/ | ok | 2xx sem redirecionamento |
| 59 | ref-rfc-3022-nat | https://www.rfc-editor.org/info/rfc3022/ | 200 | https://www.rfc-editor.org/info/rfc3022/ | ok | 2xx sem redirecionamento |
| 60 | ref-rfc-2663-nat-terminology | https://www.rfc-editor.org/info/rfc2663/ | 200 | https://www.rfc-editor.org/info/rfc2663/ | ok | 2xx sem redirecionamento |
| 61 | ref-rfc-4301-ipsec | https://www.rfc-editor.org/info/rfc4301/ | 200 | https://www.rfc-editor.org/info/rfc4301/ | ok | 2xx sem redirecionamento |
| 62 | ref-anpd-resolucao-1-2021 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no1-2021 | 200 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no1-2021 | ok | 2xx sem redirecionamento |
| 63 | ref-anpd-resolucao-5-2023 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-5-de-13-de-marco-de-2023-469722336 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-5-de-13-de-marco-de-2023-469722336 | ok | 2xx sem redirecionamento |
| 64 | ref-anpd-resolucao-10-2023 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-10-de-5-de-dezembro-de-2023-530258528 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-10-de-5-de-dezembro-de-2023-530258528 | ok | 2xx sem redirecionamento |
| 65 | ref-anpd-resolucao-11-2023 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-11-de-27-de-dezembro-de-2023-534947737 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-11-de-27-de-dezembro-de-2023-534947737 | ok | 2xx sem redirecionamento |
| 66 | ref-anpd-resolucao-15-2024 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-15-de-24-de-abril-de-2024-556243024 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-15-de-24-de-abril-de-2024-556243024 | ok | 2xx sem redirecionamento |
| 67 | ref-anpd-resolucao-18-2024 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-18-de-16-de-julho-de-2024-572632074 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-18-de-16-de-julho-de-2024-572632074 | ok | 2xx sem redirecionamento |
| 68 | ref-anpd-resolucao-19-2024 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-19-de-23-de-agosto-de-2024 | 200 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-19-de-23-de-agosto-de-2024 | ok | 2xx sem redirecionamento |
| 69 | ref-anpd-resolucao-23-2024 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-no-23-de-9-de-dezembro-de-2024 | 200 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-no-23-de-9-de-dezembro-de-2024 | ok | 2xx sem redirecionamento |
| 70 | ref-anpd-resolucao-30-2025 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-30-de-23-de-dezembro-de-2025-677947163 | 200 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-30-de-23-de-dezembro-de-2025-677947163 | ok | 2xx sem redirecionamento |
| 71 | ref-anpd-resolucao-31-2025 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-31-de-22-de-dezembro-de-2025-677950080 | 200 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-31-de-22-de-dezembro-de-2025-677950080 | ok | 2xx sem redirecionamento |
| 72 | ref-anpd-resolucao-32-2026 | https://www.in.gov.br/web/dou/-/resolucao-n-32-de-26-de-janeiro-de-2026-683334547 | 200 | https://www.in.gov.br/web/dou/-/resolucao-n-32-de-26-de-janeiro-de-2026-683334547 | ok | 2xx sem redirecionamento |
| 73 | ref-cf-1988-art37-adicionais-i4 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | ok | 2xx sem redirecionamento |
| 74 | ref-cf-1988-art5-adicionais-i4 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | ok | 2xx sem redirecionamento |
| 75 | ref-nist-genai-profile-2024 | https://doi.org/10.6028/NIST.AI.600-1 | 200 | https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf | redirect | → https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf |
| 76 | ref-google-cloud-grounding | https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/chat/chat-prompts | 200 | https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/chat/chat-prompts | ok | 2xx sem redirecionamento |
| 77 | ref-secom-guia-redes-sociais-governo-federal | https://www.gov.br/secom/pt-br/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf | 200 | https://www.gov.br/secom/pt-br/acompanhe-a-secom/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf | redirect | → https://www.gov.br/secom/pt-br/acompanhe-a-secom/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf |
| 78 | ref-w3c-wcag-22 | https://www.w3.org/TR/WCAG22/ | 403 | https://www.w3.org/TR/WCAG22/ | bloqueado | HTTP 403 — servidor recusou o cliente automatizado; não é prova de link inválido |
| 79 | ref-saito-rehmsmeier-precision-recall-2015 | https://doi.org/10.1371/journal.pone.0118432 | 200 | https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0118432 | redirect | → https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0118432 |
| 80 | ref-rfc-1122-host-requirements | https://www.rfc-editor.org/rfc/rfc1122.html | 200 | https://www.rfc-editor.org/rfc/rfc1122.html | ok | 2xx sem redirecionamento |
| 81 | ref-rfc-1112-ip-multicast | https://www.rfc-editor.org/rfc/rfc1112.html | 200 | https://www.rfc-editor.org/rfc/rfc1112.html | ok | 2xx sem redirecionamento |
| 82 | ref-rfc-4291-ipv6-addressing | https://www.rfc-editor.org/rfc/rfc4291.html | 200 | https://www.rfc-editor.org/rfc/rfc4291.html | ok | 2xx sem redirecionamento |
| 83 | ref-rfc-4632-cidr | https://www.rfc-editor.org/rfc/rfc4632.html | 200 | https://www.rfc-editor.org/rfc/rfc4632.html | ok | 2xx sem redirecionamento |
| 84 | ref-rfc-8314-email-tls | https://www.rfc-editor.org/rfc/rfc8314.html | 200 | https://www.rfc-editor.org/rfc/rfc8314.html | ok | 2xx sem redirecionamento |
| 85 | ref-rfc-9051-imap4rev2 | https://www.rfc-editor.org/rfc/rfc9051.html | 200 | https://www.rfc-editor.org/rfc/rfc9051.html | ok | 2xx sem redirecionamento |
| 86 | ref-rfc-1939-pop3 | https://www.rfc-editor.org/rfc/rfc1939.html | 200 | https://www.rfc-editor.org/rfc/rfc1939.html | ok | 2xx sem redirecionamento |
| 87 | ref-rfc-5322-message-format | https://www.rfc-editor.org/rfc/rfc5322.html | 200 | https://www.rfc-editor.org/rfc/rfc5322.html | ok | 2xx sem redirecionamento |
| 88 | ref-rfc-7208-spf | https://www.rfc-editor.org/rfc/rfc7208.html | 200 | https://www.rfc-editor.org/rfc/rfc7208.html | ok | 2xx sem redirecionamento |
| 89 | ref-rfc-6376-dkim | https://www.rfc-editor.org/rfc/rfc6376.html | 200 | https://www.rfc-editor.org/rfc/rfc6376.html | ok | 2xx sem redirecionamento |
| 90 | ref-rfc-9989-dmarc | https://www.rfc-editor.org/rfc/rfc9989.html | 200 | https://www.rfc-editor.org/rfc/rfc9989.html | ok | 2xx sem redirecionamento |
| 91 | ref-cisco-lan | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-lan-local-area-network.html | 200 | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-lan-local-area-network.html | ok | 2xx sem redirecionamento |
| 92 | ref-cisco-wan | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-wan-wide-area-network.html | 200 | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-wan-wide-area-network.html | ok | 2xx sem redirecionamento |
| 93 | ref-cisco-networking | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-computer-networking.html | 200 | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-computer-networking.html | ok | 2xx sem redirecionamento |
| 94 | ref-cisco-topology | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-topology.html | 200 | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-topology.html | ok | 2xx sem redirecionamento |
| 95 | ref-cisco-low-latency | https://www.cisco.com/site/us/en/learn/topics/cloud-networking/what-is-low-latency.html | 200 | https://www.cisco.com/site/us/en/learn/topics/cloud-networking/what-is-low-latency.html | ok | 2xx sem redirecionamento |
| 96 | ref-cisa-phishing | https://www.cisa.gov/be-cyber-smart/report-incident | 200 | https://www.cisa.gov/secure-our-world-archive | redirect | → https://www.cisa.gov/secure-our-world-archive |
| 97 | ref-google-meet-host-controls | https://support.google.com/meet/answer/16229038?co=GENIE.Platform%3DDesktop&hl=pt-br | 200 | https://support.google.com/meet/answer/16229038?co=GENIE.Platform%3DDesktop&hl=pt-br | ok | 2xx sem redirecionamento |
| 98 | ref-google-meet-recording | https://support.google.com/meet/answer/9308681?co=GENIE.Platform%3DDesktop&hl=pt-br | 200 | https://support.google.com/meet/answer/9308681?co=GENIE.Platform%3DDesktop&hl=pt-br | ok | 2xx sem redirecionamento |
| 99 | ref-onedrive-version-history | https://support.microsoft.com/pt-br/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive?ad=br&rs=pt-br&ui=pt-br | 200 | https://support.microsoft.com/pt-br/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive?ad=br&rs=pt-br&ui=pt-br | ok | 2xx sem redirecionamento |
| 100 | ref-onedrive-safeguards | https://support.microsoft.com/pt-br/onedrive/how-onedrive-safeguards-your-data-in-the-cloud | 200 | https://support.microsoft.com/pt-br/onedrive/how-onedrive-safeguards-your-data-in-the-cloud | ok | 2xx sem redirecionamento |
| 101 | ref-onedrive-ransomware | https://support.microsoft.com/pt-br/onedrive/how-to-detect-ransomware-and-recover-files-using-onedrive | 200 | https://support.microsoft.com/pt-br/onedrive/how-to-detect-ransomware-and-recover-files-using-onedrive | ok | 2xx sem redirecionamento |
| 102 | ref-word-cross-reference | https://support.microsoft.com/pt-br/word/create-a-cross-reference | 200 | https://support.microsoft.com/pt-br/word/create-a-cross-reference | ok | 2xx sem redirecionamento |
| 103 | ref-word-compare-merge | https://support.microsoft.com/pt-br/word/compare-and-merge-two-versions-of-a-document | 200 | https://support.microsoft.com/pt-br/word/compare-and-merge-two-versions-of-a-document | ok | 2xx sem redirecionamento |
| 104 | ref-word-read-only | https://support.microsoft.com/pt-br/word/make-a-document-read-only-in-word | 200 | https://support.microsoft.com/pt-br/word/make-a-document-read-only-in-word | ok | 2xx sem redirecionamento |
| 105 | ref-word-lists | https://support.microsoft.com/pt-br/word/training/create-a-bulleted-or-numbered-list | 200 | https://support.microsoft.com/pt-br/word/training/create-a-bulleted-or-numbered-list | ok | 2xx sem redirecionamento |
| 106 | ref-word-tab-stops | https://support.microsoft.com/pt-br/word/insert-or-add-tab-stops | 200 | https://support.microsoft.com/pt-br/word/insert-or-add-tab-stops | ok | 2xx sem redirecionamento |
| 107 | ref-word-accessibility | https://support.microsoft.com/pt-br/accessibility/word/make-your-word-documents-accessible-to-everyone-with-accessibility-assistant | 200 | https://support.microsoft.com/pt-br/accessibility/word/make-your-word-documents-accessible-to-everyone-with-accessibility-assistant | ok | 2xx sem redirecionamento |
| 108 | ref-powerpoint-slide-master | https://support.microsoft.com/pt-br/powerpoint/training/customize-a-slide-master | 200 | https://support.microsoft.com/pt-br/powerpoint/training/customize-a-slide-master | ok | 2xx sem redirecionamento |
| 109 | ref-powerpoint-transitions | https://support.microsoft.com/pt-br/powerpoint/training/add-change-or-remove-transitions-between-slides | 200 | https://support.microsoft.com/pt-br/powerpoint/training/add-change-or-remove-transitions-between-slides | ok | 2xx sem redirecionamento |
| 110 | ref-powerpoint-animation | https://support.microsoft.com/pt-br/powerpoint/training/video-animations-and-transitions-for-powerpoint-web | 200 | https://support.microsoft.com/pt-br/powerpoint/training/video-animations-and-transitions-for-powerpoint-web | ok | 2xx sem redirecionamento |
| 111 | ref-powerpoint-pdf | https://support.microsoft.com/pt-br/powerpoint/training/save-powerpoint-presentations-as-pdf-files | 200 | https://support.microsoft.com/pt-br/powerpoint/training/save-powerpoint-presentations-as-pdf-files | ok | 2xx sem redirecionamento |
| 112 | ref-excel-xlookup | https://support.microsoft.com/pt-br/excel/functions/xlookup-function | 200 | https://support.microsoft.com/pt-br/excel/functions/xlookup-function | ok | 2xx sem redirecionamento |
| 113 | ref-excel-if | https://support.microsoft.com/pt-br/excel/functions/if-function | 200 | https://support.microsoft.com/pt-br/excel/functions/if-function | ok | 2xx sem redirecionamento |
| 114 | ref-outlook-calendar-sharing | https://support.microsoft.com/pt-br/outlook/calendar-sharing-in-microsoft-365 | 200 | https://support.microsoft.com/pt-br/outlook/calendar-sharing-in-microsoft-365 | ok | 2xx sem redirecionamento |
| 115 | ref-outlook-time-zones | https://support.microsoft.com/pt-br/outlook/getstarted/manage-time-zone-settings-in-outlook | 200 | https://support.microsoft.com/pt-br/outlook/getstarted/manage-time-zone-settings-in-outlook | ok | 2xx sem redirecionamento |
| 116 | ref-teams-calendar | https://support.microsoft.com/pt-br/teams/meetings/get-started-with-the-microsoft-teams-calendar | 200 | https://support.microsoft.com/pt-br/teams/meetings/get-started-with-the-microsoft-teams-calendar | ok | 2xx sem redirecionamento |
| 117 | ref-teams-recording | https://support.microsoft.com/pt-br/teams/meetings/play-share-and-download-meeting-recordings-in-microsoft-teams | 200 | https://support.microsoft.com/pt-br/teams/meetings/play-share-and-download-meeting-recordings-in-microsoft-teams | ok | 2xx sem redirecionamento |
| 118 | ref-cisco-10gbase-t-cat6-cat6a | https://www.cisco.com/c/en/us/products/interfaces-modules/catalyst-6500-16-port-10-gigabit-ethernet-copper-module/index.html | 200 | https://www.cisco.com/c/en/us/products/interfaces-modules/catalyst-6500-16-port-10-gigabit-ethernet-copper-module/index.html | ok | 2xx sem redirecionamento |
| 119 | ref-zoom-webinar-capacity | https://support.zoom.com/hc/pb/article?id=zm_kb&sysparm_article=KB0062412 | 200 | https://support.zoom.com/hc/pb/article?id=zm_kb&sysparm_article=KB0062412 | ok | 2xx sem redirecionamento |
| 120 | ref-zoom-webinar-breakout-rooms | https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057838 | 200 | https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057838 | ok | 2xx sem redirecionamento |
| 121 | ref-google-meet-browser-requirements | https://support.google.com/meet/answer/7317473?hl=pt-BR | 200 | https://support.google.com/meet/answer/7317473?hl=pt-BR | ok | 2xx sem redirecionamento |
| 122 | ref-google-meet-breakout-eligibility | https://support.google.com/google-workspace-individual/answer/10099500?hl=pt-BR | 200 | https://support.google.com/google-workspace-individual/answer/10099500?hl=pt-BR | ok | 2xx sem redirecionamento |
| 123 | ref-ms-word-linked-embedded-objects | https://support.microsoft.com/pt-br/word/linked-objects-and-embedded-objects | 200 | https://support.microsoft.com/pt-br/word/linked-objects-and-embedded-objects | ok | 2xx sem redirecionamento |
| 124 | ref-sharepoint-version-history-limits | https://learn.microsoft.com/pt-br/sharepoint/document-library-version-history-limits | 200 | https://learn.microsoft.com/pt-br/sharepoint/document-library-version-history-limits | ok | 2xx sem redirecionamento |
| 125 | ref-onedrive-restore-deleted-files | https://support.microsoft.com/pt-br/onedrive/restore-deleted-files-or-folders-in-onedrive | 200 | https://support.microsoft.com/pt-br/onedrive/restore-deleted-files-or-folders-in-onedrive | ok | 2xx sem redirecionamento |
| 126 | ref-sharepoint-external-sharing-settings | https://learn.microsoft.com/pt-br/sharepoint/turn-external-sharing-on-or-off | 200 | https://learn.microsoft.com/pt-br/sharepoint/turn-external-sharing-on-or-off | ok | 2xx sem redirecionamento |
| 127 | ref-word-repeat-table-header | https://support.microsoft.com/pt-br/word/repeat-table-header-on-subsequent-pages | 200 | https://support.microsoft.com/pt-br/word/repeat-table-header-on-subsequent-pages | ok | 2xx sem redirecionamento |
| 128 | ref-word-sort-table-content | https://support.microsoft.com/pt-br/word/sort-the-contents-of-a-table | 200 | https://support.microsoft.com/pt-br/word/sort-the-contents-of-a-table | ok | 2xx sem redirecionamento |
| 129 | ref-ms-create-accessible-pdfs | https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs | 200 | https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs | ok | 2xx sem redirecionamento |
| 130 | ref-powerpoint-slide-master-overview | https://support.microsoft.com/pt-br/powerpoint/training/what-is-a-slide-master-in-powerpoint | 200 | https://support.microsoft.com/pt-br/powerpoint/training/what-is-a-slide-master-in-powerpoint | ok | 2xx sem redirecionamento |
| 131 | ref-powerpoint-animate-text-objects | https://support.microsoft.com/pt-br/powerpoint/training/animate-text-or-objects | 200 | https://support.microsoft.com/pt-br/powerpoint/training/animate-text-or-objects | ok | 2xx sem redirecionamento |
| 132 | ref-onedrive-sync-files-folders | https://support.microsoft.com/pt-BR/onedrive/sync-your-computer-s-files-and-folders-with-onedrive | 403 | https://support.microsoft.com/pt-BR/onedrive/sync-your-computer-s-files-and-folders-with-onedrive | bloqueado | HTTP 403 — servidor recusou o cliente automatizado; não é prova de link inválido |
| 133 | ref-onedrive-backup-folders | https://support.microsoft.com/pt-br/onedrive/back-up-your-folders-with-onedrive | 200 | https://support.microsoft.com/pt-br/onedrive/back-up-your-folders-with-onedrive | ok | 2xx sem redirecionamento |
| 134 | ref-purview-ediscovery-features | https://learn.microsoft.com/en-us/purview/edisc-features-components | 200 | https://learn.microsoft.com/en-us/purview/edisc-features-components | ok | 2xx sem redirecionamento |
| 135 | ref-intune-licensing | https://learn.microsoft.com/pt-br/intune/fundamentals/licensing/ | 200 | https://learn.microsoft.com/pt-br/intune/fundamentals/licensing/ | ok | 2xx sem redirecionamento |
| 136 | ref-word-compatibility-mode | https://support.microsoft.com/pt-br/word/converting-documents-to-a-newer-format | 200 | https://support.microsoft.com/pt-br/word/converting-documents-to-a-newer-format | ok | 2xx sem redirecionamento |
| 137 | ref-sharepoint-team-site | https://support.microsoft.com/pt-br/sharepoint/sites-in-sharepoint/what-is-a-sharepoint-team-site | 200 | https://support.microsoft.com/pt-br/sharepoint/sites-in-sharepoint/what-is-a-sharepoint-team-site | ok | 2xx sem redirecionamento |
| 138 | ref-word-pdf-export | https://support.microsoft.com/pt-br/office/collab-files/save-or-convert-to-pdf-or-xps-in-office-desktop-apps | 200 | https://support.microsoft.com/pt-br/office/collab-files/save-or-convert-to-pdf-or-xps-in-office-desktop-apps | ok | 2xx sem redirecionamento |
| 139 | ref-excel-average-function-ptbr | https://support.microsoft.com/pt-br/excel/functions/average-function | 200 | https://support.microsoft.com/pt-br/excel/functions/average-function | ok | 2xx sem redirecionamento |
| 140 | ref-word-first-page-header-footer | https://support.microsoft.com/pt-br/word/change-or-delete-a-header-or-footer-on-a-single-page | 200 | https://support.microsoft.com/pt-br/word/change-or-delete-a-header-or-footer-on-a-single-page | ok | 2xx sem redirecionamento |
| 141 | ref-word-start-page-numbering-later | https://support.microsoft.com/pt-br/word/start-page-numbering-later-in-your-document | 200 | https://support.microsoft.com/pt-br/word/start-page-numbering-later-in-your-document | ok | 2xx sem redirecionamento |
| 142 | ref-excel-tables-overview | https://support.microsoft.com/pt-br/excel/overview-of-excel-tables | 200 | https://support.microsoft.com/pt-br/excel/overview-of-excel-tables | ok | 2xx sem redirecionamento |
| 143 | ref-excel-resize-table | https://support.microsoft.com/pt-br/excel/resize-a-table-by-adding-or-removing-rows-and-columns-in-excel | 403 | https://support.microsoft.com/pt-br/excel/resize-a-table-by-adding-or-removing-rows-and-columns-in-excel | bloqueado | HTTP 403 — servidor recusou o cliente automatizado; não é prova de link inválido |
| 144 | ref-excel-filter-data | https://support.microsoft.com/pt-br/excel/get-started/filter-data-in-a-range-or-table-in-excel | 403 | https://support.microsoft.com/pt-br/excel/get-started/filter-data-in-a-range-or-table-in-excel | bloqueado | HTTP 403 — servidor recusou o cliente automatizado; não é prova de link inválido |
| 145 | ref-excel-data-validation | https://support.microsoft.com/pt-br/excel/get-started/apply-data-validation-to-cells | 403 | https://support.microsoft.com/pt-br/excel/get-started/apply-data-validation-to-cells | bloqueado | HTTP 403 — servidor recusou o cliente automatizado; não é prova de link inválido |
| 146 | ref-excel-conditional-formatting | https://support.microsoft.com/pt-br/excel/use-conditional-formatting-to-highlight-information-in-excel | 403 | https://support.microsoft.com/pt-br/excel/use-conditional-formatting-to-highlight-information-in-excel | bloqueado | HTTP 403 — servidor recusou o cliente automatizado; não é prova de link inválido |
| 147 | ref-word-table-of-contents | https://support.microsoft.com/pt-br/word/training/insert-a-table-of-contents | 403 | https://support.microsoft.com/pt-br/word/training/insert-a-table-of-contents | bloqueado | HTTP 403 — servidor recusou o cliente automatizado; não é prova de link inválido |
| 148 | ref-word-section-breaks | https://support.microsoft.com/pt-br/word/use-section-breaks-to-change-the-layout-or-formatting-in-one-section-of-your-word-document | 403 | https://support.microsoft.com/pt-br/word/use-section-breaks-to-change-the-layout-or-formatting-in-one-section-of-your-word-document | bloqueado | HTTP 403 — servidor recusou o cliente automatizado; não é prova de link inválido |
| 149 | ref-office-accessible-pdf | https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs | 200 | https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs | ok | 2xx sem redirecionamento |
| 150 | ref-rfc-8200-ipv6 | https://www.rfc-editor.org/info/rfc8200/ | 200 | https://www.rfc-editor.org/info/rfc8200/ | ok | 2xx sem redirecionamento |
| 151 | ref-rfc-1918-private-addresses | https://www.rfc-editor.org/info/rfc1918/ | 200 | https://www.rfc-editor.org/info/rfc1918/ | ok | 2xx sem redirecionamento |
| 152 | ref-rfc-4632-cidr-2 | https://www.rfc-editor.org/info/rfc4632/ | 200 | https://www.rfc-editor.org/info/rfc4632/ | ok | 2xx sem redirecionamento |
| 153 | ref-rfc-5952-ipv6-text | https://www.rfc-editor.org/info/rfc5952/ | 200 | https://www.rfc-editor.org/info/rfc5952/ | ok | 2xx sem redirecionamento |
| 154 | ref-rfc-1122-hosts | https://www.rfc-editor.org/info/rfc1122/ | 200 | https://www.rfc-editor.org/info/rfc1122/ | ok | 2xx sem redirecionamento |
| 155 | ref-rfc-4251-ssh-architecture | https://www.rfc-editor.org/info/rfc4251/ | 200 | https://www.rfc-editor.org/info/rfc4251/ | ok | 2xx sem redirecionamento |
| 156 | ref-rfc-950-subnetting | https://www.rfc-editor.org/info/rfc950/ | 200 | https://www.rfc-editor.org/info/rfc950/ | ok | 2xx sem redirecionamento |
| 157 | ref-rfc-1855-netiquette | https://www.rfc-editor.org/info/rfc1855/ | 200 | https://www.rfc-editor.org/info/rfc1855/ | ok | 2xx sem redirecionamento |
| 158 | ref-rfc-7208-spf-2 | https://www.rfc-editor.org/info/rfc7208/ | 200 | https://www.rfc-editor.org/info/rfc7208/ | ok | 2xx sem redirecionamento |
| 159 | ref-rfc-6376-dkim-2 | https://www.rfc-editor.org/info/rfc6376/ | 200 | https://www.rfc-editor.org/info/rfc6376/ | ok | 2xx sem redirecionamento |
| 160 | ref-rfc-7489-dmarc | https://www.rfc-editor.org/info/rfc7489/ | 200 | https://www.rfc-editor.org/info/rfc7489/ | ok | 2xx sem redirecionamento |
| 161 | ref-nist-rdaf-1500-18 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html | 200 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html | ok | 2xx sem redirecionamento |
| 162 | ref-nist-stats-handbook | https://www.itl.nist.gov/div898/handbook/ | 200 | https://www.itl.nist.gov/div898/handbook/ | ok | 2xx sem redirecionamento |
| 163 | ref-nist-ai-rmf-10 | https://www.nist.gov/itl/ai-risk-management-framework | 200 | https://www.nist.gov/itl/ai-risk-management-framework | ok | 2xx sem redirecionamento |
| 164 | ref-owasp-llm-prompt-injection | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | 200 | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | ok | 2xx sem redirecionamento |
| 165 | ref-tableau-help-desktop | https://help.tableau.com/current/pro/desktop/en-us/default.htm | 200 | https://help.tableau.com/current/pro/desktop/en-us/default.htm | ok | 2xx sem redirecionamento |
| 166 | ref-looker-studio-help | https://support.google.com/looker-studio/ | 200 | https://docs.cloud.google.com/data-studio?visit_id=639288293532104132-346625677&rd=1 | redirect | → https://docs.cloud.google.com/data-studio?visit_id=639288293532104132-346625677&rd=1 |
| 167 | ref-rfc-8200-ipv6-2 | https://www.rfc-editor.org/info/rfc8200/ | 200 | https://www.rfc-editor.org/info/rfc8200/ | ok | 2xx sem redirecionamento |
| 168 | ref-rfc-1918-private-addresses-2 | https://www.rfc-editor.org/info/rfc1918/ | 200 | https://www.rfc-editor.org/info/rfc1918/ | ok | 2xx sem redirecionamento |
| 169 | ref-rfc-4632-cidr-3 | https://www.rfc-editor.org/info/rfc4632/ | 200 | https://www.rfc-editor.org/info/rfc4632/ | ok | 2xx sem redirecionamento |
| 170 | ref-rfc-5952-ipv6-text-2 | https://www.rfc-editor.org/info/rfc5952/ | 200 | https://www.rfc-editor.org/info/rfc5952/ | ok | 2xx sem redirecionamento |
| 171 | ref-rfc-1122-hosts-2 | https://www.rfc-editor.org/info/rfc1122/ | 200 | https://www.rfc-editor.org/info/rfc1122/ | ok | 2xx sem redirecionamento |
| 172 | ref-rfc-4251-ssh-architecture-2 | https://www.rfc-editor.org/info/rfc4251/ | 200 | https://www.rfc-editor.org/info/rfc4251/ | ok | 2xx sem redirecionamento |
| 173 | ref-rfc-950-subnetting-2 | https://www.rfc-editor.org/info/rfc950/ | 200 | https://www.rfc-editor.org/info/rfc950/ | ok | 2xx sem redirecionamento |
| 174 | ref-rfc-1855-netiquette-2 | https://www.rfc-editor.org/info/rfc1855/ | 200 | https://www.rfc-editor.org/info/rfc1855/ | ok | 2xx sem redirecionamento |
| 175 | ref-rfc-7208-spf-3 | https://www.rfc-editor.org/info/rfc7208/ | 200 | https://www.rfc-editor.org/info/rfc7208/ | ok | 2xx sem redirecionamento |
| 176 | ref-rfc-6376-dkim-3 | https://www.rfc-editor.org/info/rfc6376/ | 200 | https://www.rfc-editor.org/info/rfc6376/ | ok | 2xx sem redirecionamento |
| 177 | ref-rfc-7489-dmarc-2 | https://www.rfc-editor.org/info/rfc7489/ | 200 | https://www.rfc-editor.org/info/rfc7489/ | ok | 2xx sem redirecionamento |
| 178 | ref-nist-rdaf-1500-18-2 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html | 200 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html | ok | 2xx sem redirecionamento |
| 179 | ref-nist-stats-handbook-2 | https://www.itl.nist.gov/div898/handbook/ | 200 | https://www.itl.nist.gov/div898/handbook/ | ok | 2xx sem redirecionamento |
| 180 | ref-nist-ai-rmf-10-2 | https://www.nist.gov/itl/ai-risk-management-framework | 200 | https://www.nist.gov/itl/ai-risk-management-framework | ok | 2xx sem redirecionamento |
| 181 | ref-owasp-llm-prompt-injection-2 | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | 200 | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | ok | 2xx sem redirecionamento |
| 182 | ref-tableau-help-desktop-2 | https://help.tableau.com/current/pro/desktop/en-us/default.htm | 200 | https://help.tableau.com/current/pro/desktop/en-us/default.htm | ok | 2xx sem redirecionamento |
| 183 | ref-looker-studio-help-2 | https://support.google.com/looker-studio/ | 200 | https://docs.cloud.google.com/data-studio?visit_id=639288293775765405-2592179077&rd=1 | redirect | → https://docs.cloud.google.com/data-studio?visit_id=639288293775765405-2592179077&rd=1 |

## Defeitos reais (quebrado — 404/410 ou erro de DNS/TLS/timeout)

Nenhuma URL com 404/410 nem erro de rede comprovado.

## Bloqueados (informativo — não é defeito)

- `ref-w3c-wcag-22` — https://www.w3.org/TR/WCAG22/ — HTTP 403 (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)
- `ref-onedrive-sync-files-folders` — https://support.microsoft.com/pt-BR/onedrive/sync-your-computer-s-files-and-folders-with-onedrive — HTTP 403 (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)
- `ref-excel-resize-table` — https://support.microsoft.com/pt-br/excel/resize-a-table-by-adding-or-removing-rows-and-columns-in-excel — HTTP 403 (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)
- `ref-excel-filter-data` — https://support.microsoft.com/pt-br/excel/get-started/filter-data-in-a-range-or-table-in-excel — HTTP 403 (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)
- `ref-excel-data-validation` — https://support.microsoft.com/pt-br/excel/get-started/apply-data-validation-to-cells — HTTP 403 (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)
- `ref-excel-conditional-formatting` — https://support.microsoft.com/pt-br/excel/use-conditional-formatting-to-highlight-information-in-excel — HTTP 403 (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)
- `ref-word-table-of-contents` — https://support.microsoft.com/pt-br/word/training/insert-a-table-of-contents — HTTP 403 (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)
- `ref-word-section-breaks` — https://support.microsoft.com/pt-br/word/use-section-breaks-to-change-the-layout-or-formatting-in-one-section-of-your-word-document — HTTP 403 (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)

## Observações gerais

- 8 URLs sofreram redirecionamento (HTTP→HTTPS, barra final etc.) e terminaram em 2xx.
- 8 URLs devolveram 401/403/405/429 — classificadas como `bloqueado`, não como defeito de link.
- 0 URLs com defeito real (`quebrado`).
- Nenhum commit/push realizado.
- O script não altera `references.js`.
- Tratamento FIX-01 da entrada `ref-secom-guia-redes-sociais-governo-federal`: o PDF oficial respondeu 404 em 2026-10-27 e também em 2026-10-28 (reproduzido por curl e node fetch; horários distintos); o mesmo conteúdo voltou a responder 200 em retestes espaçados no mesmo dia — acesso intermitente. A página do portal que o lista (`/central-de-conteudo/redes/guia`) está restrita a autenticação ("Conteúdo Restrito"). A entrada foi mantida com `status: "indisponivel"` (não-video; o app só filtra `status` em referências de vídeo, e nenhum validador consome `status` de referências técnicas), sem substituto adotado porque não há URL pública no gov.br comprovadamente estável para o mesmo documento.
