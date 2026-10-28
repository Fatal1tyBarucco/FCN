# Verificação de URLs — references.js (P2-4)

Data da verificação: 2026-10-27. Escopo: todas as 183 entradas de `apostila-ia/assets/data/references.js`, cada uma com `status: "verificado"` e URL preenchida.

Método: script Node (sem dependências externas) `scripts/verify_urls.mjs`. Para cada URL: tentativa HEAD (timeout 10s); em caso de falha de rede ou status >= 400, fallback GET. Redirects seguidos (follow). Delay de 200 ms entre requisições. User-Agent de navegador (Chrome) para evitar bloqueios anti-bot. Erros de rede (timeout, DNS, TLS, ECONNRESET etc.) registrados como 'fail' com motivo.

Resumo: total 183; OK 149; redirect 6; fail 28.

| # | ID | URL | Status HTTP | URL final | Resultado | Motivo |
|---|---|---|---|---|---|---|
| 1 | ref-lgpd-13709-2018 | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | OK | Sem redirecionamento |
| 2 | ref-conflito-interesses-12813-2013 | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm | OK | Sem redirecionamento |
| 3 | ref-lai-12527-2011 | http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm | OK | Sem redirecionamento |
| 4 | ref-governo-digital-14129-2021 | http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm | OK | Sem redirecionamento |
| 5 | ref-cf-1988-art37-caput-art5-xxxiii | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | OK | Sem redirecionamento |
| 6 | ref-marco-civil-12965-2014 | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm | OK | Sem redirecionamento |
| 7 | video-m1-excel-origem | https://www.youtube.com/watch?v=ZVURQLXZtIc | 200 | https://www.youtube.com/watch?v=ZVURQLXZtIc | OK | Sem redirecionamento |
| 8 | video-m1-excel-funcoes | https://www.youtube.com/watch?v=boUzkJJNOPI | 200 | https://www.youtube.com/watch?v=boUzkJJNOPI | OK | Sem redirecionamento |
| 9 | video-m2-redes-osi | https://www.youtube.com/watch?v=WO1uGJRqrwI | 200 | https://www.youtube.com/watch?v=WO1uGJRqrwI | OK | Sem redirecionamento |
| 10 | video-m2-redes-tcpip | https://www.youtube.com/watch?v=bH29oltn8Cw | 200 | https://www.youtube.com/watch?v=bH29oltn8Cw | OK | Sem redirecionamento |
| 11 | video-m2-redes-ip | https://www.youtube.com/watch?v=XPWd08tLAuo | 200 | https://www.youtube.com/watch?v=XPWd08tLAuo | OK | Sem redirecionamento |
| 12 | video-m3-email-smtp | https://www.youtube.com/watch?v=QtqbaEiwlyU | 200 | https://www.youtube.com/watch?v=QtqbaEiwlyU | OK | Sem redirecionamento |
| 13 | video-m4-criptografia | https://www.youtube.com/watch?v=cWld3rMD7Wk | 200 | https://www.youtube.com/watch?v=cWld3rMD7Wk | OK | Sem redirecionamento |
| 14 | video-m4-firewalls | https://www.youtube.com/watch?v=TbjhWIhLQDU | 200 | https://www.youtube.com/watch?v=TbjhWIhLQDU | OK | Sem redirecionamento |
| 15 | video-m4-lgpd-ti | https://www.youtube.com/watch?v=wlaNFx73qh4 | 200 | https://www.youtube.com/watch?v=wlaNFx73qh4 | OK | Sem redirecionamento |
| 16 | video-m4-engenharia-social | https://www.youtube.com/watch?v=qqgkhvsyL9Q | 200 | https://www.youtube.com/watch?v=qqgkhvsyL9Q | OK | Sem redirecionamento |
| 17 | video-m5-ml-primeiro-codigo | https://www.youtube.com/watch?v=DNegkxwQJuY | 200 | https://www.youtube.com/watch?v=DNegkxwQJuY | OK | Sem redirecionamento |
| 18 | video-m5-deep-learning | https://www.youtube.com/watch?v=M8hoXE24PMo | 200 | https://www.youtube.com/watch?v=M8hoXE24PMo | OK | Sem redirecionamento |
| 19 | video-m5-ml-pratico | https://www.youtube.com/watch?v=JyGGMyR3x5I | 200 | https://www.youtube.com/watch?v=JyGGMyR3x5I | OK | Sem redirecionamento |
| 20 | video-m6-ia-servico-publico | https://www.youtube.com/watch?v=As0A-w1WmPI | 200 | https://www.youtube.com/watch?v=As0A-w1WmPI | OK | Sem redirecionamento |
| 21 | video-m6-linguagem-simples-ia | https://www.youtube.com/watch?v=r7dYNidpM3k | 200 | https://www.youtube.com/watch?v=r7dYNidpM3k | OK | Sem redirecionamento |
| 22 | video-m6-transparencia-ia | https://www.youtube.com/watch?v=75RqMrSbenM | 200 | https://www.youtube.com/watch?v=75RqMrSbenM | OK | Sem redirecionamento |
| 23 | video-m6-governo-digital-14129 | https://www.youtube.com/watch?v=Zjv2mZJkakw | 200 | https://www.youtube.com/watch?v=Zjv2mZJkakw | OK | Sem redirecionamento |
| 24 | video-m7-dados-excel | https://www.youtube.com/watch?v=LmhbPTMaJak | 200 | https://www.youtube.com/watch?v=LmhbPTMaJak | OK | Sem redirecionamento |
| 25 | video-m7-dados-pandas | https://www.youtube.com/watch?v=1JpYOqvDJNU | 200 | https://www.youtube.com/watch?v=1JpYOqvDJNU | OK | Sem redirecionamento |
| 26 | video-m8-visualizacao-dashboards | https://www.youtube.com/watch?v=P6E_Kts9pxE | 200 | https://www.youtube.com/watch?v=P6E_Kts9pxE | OK | Sem redirecionamento |
| 27 | ref-microsoft-learn-m365 | https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide | 200 | https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide | OK | Sem redirecionamento |
| 28 | ref-rfc-791-ipv4 | https://www.rfc-editor.org/info/rfc791/ | 200 | https://www.rfc-editor.org/info/rfc791/ | OK | Sem redirecionamento |
| 29 | ref-rfc-793-tcp | https://www.rfc-editor.org/info/rfc793/ | 200 | https://www.rfc-editor.org/info/rfc793/ | OK | Sem redirecionamento |
| 30 | ref-rfc-1034-dns-concepts | https://www.rfc-editor.org/info/rfc1034/ | 200 | https://www.rfc-editor.org/info/rfc1034/ | OK | Sem redirecionamento |
| 31 | ref-rfc-1035-dns-implementation | https://www.rfc-editor.org/info/rfc1035/ | 200 | https://www.rfc-editor.org/info/rfc1035/ | OK | Sem redirecionamento |
| 32 | ref-rfc-2131-dhcp | https://www.rfc-editor.org/info/rfc2131/ | 200 | https://www.rfc-editor.org/info/rfc2131/ | OK | Sem redirecionamento |
| 33 | ref-rfc-7230-http11-messaging | https://www.rfc-editor.org/info/rfc7230/ | 200 | https://www.rfc-editor.org/info/rfc7230/ | OK | Sem redirecionamento |
| 34 | ref-rfc-7231-http11-semantics | https://www.rfc-editor.org/info/rfc7231/ | 200 | https://www.rfc-editor.org/info/rfc7231/ | OK | Sem redirecionamento |
| 35 | ref-rfc-8446-tls13 | https://www.rfc-editor.org/info/rfc8446/ | 200 | https://www.rfc-editor.org/info/rfc8446/ | OK | Sem redirecionamento |
| 36 | ref-rfc-9110-http-semantics | https://www.rfc-editor.org/info/rfc9110 | 200 | https://www.rfc-editor.org/info/rfc9110/ | redirect | → https://www.rfc-editor.org/info/rfc9110/ |
| 37 | ref-anpd-orgao | https://www.gov.br/anpd/pt-br | 200 | https://www.gov.br/anpd/pt-br | OK | Sem redirecionamento |
| 38 | ref-lgpd-lei-15352-2026 | https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm | OK | Sem redirecionamento |
| 39 | ref-anpd-resolucao-2-2022 | https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/regulamentacoes-da-anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022 | 200 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022 | redirect | → https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022 |
| 40 | ref-anpd-resolucao-4-2023 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-4-de-24-de-fevereiro-de-2023-466146077 | 200 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-4-de-24-de-fevereiro-de-2023-466146077 | OK | Sem redirecionamento |
| 41 | ref-cert-br | https://cert.br/ | 200 | https://cert.br/ | OK | Sem redirecionamento |
| 42 | ref-cf-1988-art37-demais | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | OK | Sem redirecionamento |
| 43 | ref-cf-1988-art5-demais | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | OK | Sem redirecionamento |
| 44 | ref-lei-8429-1992-improbidade | http://www.planalto.gov.br/ccivil_03/leis/l8429.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/l8429.htm | OK | Sem redirecionamento |
| 45 | ref-lei-1079-1950-crimes-responsabilidade | http://www.planalto.gov.br/ccivil_03/leis/l1079.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/l1079.htm | OK | Sem redirecionamento |
| 46 | ref-lei-13146-2015-inclusao | http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm | OK | Sem redirecionamento |
| 47 | ref-lei-10098-2000-acessibilidade | http://www.planalto.gov.br/ccivil_03/leis/l10098.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/l10098.htm | OK | Sem redirecionamento |
| 48 | ref-lei-10741-2003-idoso | https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm | 200 | https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm | OK | Sem redirecionamento |
| 49 | ref-lei-13460-2017-usuario-servicos-publicos | http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13460.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13460.htm | OK | Sem redirecionamento |
| 50 | ref-lei-12682-2012-documentos-eletronicos | http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12682.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12682.htm | OK | Sem redirecionamento |
| 51 | ref-lei-14063-2020-assinaturas-eletronicas | http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm | 200 | http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm | OK | Sem redirecionamento |
| 52 | ref-lcp-101-2000-responsabilidade-fiscal | http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm | OK | Sem redirecionamento |
| 53 | ref-lcp-105-2001-sigilo-financeiro | http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp105.htm | 200 | http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp105.htm | OK | Sem redirecionamento |
| 54 | ref-lgpd-art7-bases-legais | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | 200 | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | OK | Sem redirecionamento |
| 55 | ref-rfc-959-ftp | https://www.rfc-editor.org/info/rfc959/ | 200 | https://www.rfc-editor.org/info/rfc959/ | OK | Sem redirecionamento |
| 56 | ref-rfc-5321-smtp | https://www.rfc-editor.org/info/rfc5321/ | 200 | https://www.rfc-editor.org/info/rfc5321/ | OK | Sem redirecionamento |
| 57 | ref-rfc-792-icmp | https://www.rfc-editor.org/info/rfc792/ | 200 | https://www.rfc-editor.org/info/rfc792/ | OK | Sem redirecionamento |
| 58 | ref-rfc-826-arp | https://www.rfc-editor.org/info/rfc826/ | 200 | https://www.rfc-editor.org/info/rfc826/ | OK | Sem redirecionamento |
| 59 | ref-rfc-3022-nat | https://www.rfc-editor.org/info/rfc3022/ | 200 | https://www.rfc-editor.org/info/rfc3022/ | OK | Sem redirecionamento |
| 60 | ref-rfc-2663-nat-terminology | https://www.rfc-editor.org/info/rfc2663/ | 200 | https://www.rfc-editor.org/info/rfc2663/ | OK | Sem redirecionamento |
| 61 | ref-rfc-4301-ipsec | https://www.rfc-editor.org/info/rfc4301/ | 200 | https://www.rfc-editor.org/info/rfc4301/ | OK | Sem redirecionamento |
| 62 | ref-anpd-resolucao-1-2021 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no1-2021 | 200 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no1-2021 | OK | Sem redirecionamento |
| 63 | ref-anpd-resolucao-5-2023 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-5-de-13-de-marco-de-2023-469722336 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-5-de-13-de-marco-de-2023-469722336 | OK | Sem redirecionamento |
| 64 | ref-anpd-resolucao-10-2023 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-10-de-5-de-dezembro-de-2023-530258528 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-10-de-5-de-dezembro-de-2023-530258528 | OK | Sem redirecionamento |
| 65 | ref-anpd-resolucao-11-2023 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-11-de-27-de-dezembro-de-2023-534947737 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-11-de-27-de-dezembro-de-2023-534947737 | OK | Sem redirecionamento |
| 66 | ref-anpd-resolucao-15-2024 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-15-de-24-de-abril-de-2024-556243024 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-15-de-24-de-abril-de-2024-556243024 | OK | Sem redirecionamento |
| 67 | ref-anpd-resolucao-18-2024 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-18-de-16-de-julho-de-2024-572632074 | 200 | https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-18-de-16-de-julho-de-2024-572632074 | OK | Sem redirecionamento |
| 68 | ref-anpd-resolucao-19-2024 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-19-de-23-de-agosto-de-2024 | 200 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-19-de-23-de-agosto-de-2024 | OK | Sem redirecionamento |
| 69 | ref-anpd-resolucao-23-2024 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-no-23-de-9-de-dezembro-de-2024 | 200 | https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-no-23-de-9-de-dezembro-de-2024 | OK | Sem redirecionamento |
| 70 | ref-anpd-resolucao-30-2025 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-30-de-23-de-dezembro-de-2025-677947163 | 200 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-30-de-23-de-dezembro-de-2025-677947163 | OK | Sem redirecionamento |
| 71 | ref-anpd-resolucao-31-2025 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-31-de-22-de-dezembro-de-2025-677950080 | 200 | https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-31-de-22-de-dezembro-de-2025-677950080 | OK | Sem redirecionamento |
| 72 | ref-anpd-resolucao-32-2026 | https://www.in.gov.br/web/dou/-/resolucao-n-32-de-26-de-janeiro-de-2026-683334547 | 200 | https://www.in.gov.br/web/dou/-/resolucao-n-32-de-26-de-janeiro-de-2026-683334547 | OK | Sem redirecionamento |
| 73 | ref-cf-1988-art37-adicionais-i4 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | OK | Sem redirecionamento |
| 74 | ref-cf-1988-art5-adicionais-i4 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | 200 | http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm | OK | Sem redirecionamento |
| 75 | ref-nist-genai-profile-2024 | https://doi.org/10.6028/NIST.AI.600-1 | 200 | https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf | redirect | → https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf |
| 76 | ref-google-cloud-grounding | https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/chat/chat-prompts | 200 | https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/chat/chat-prompts | OK | Sem redirecionamento |
| 77 | ref-secom-guia-redes-sociais-governo-federal | https://www.gov.br/secom/pt-br/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf | 404 | https://www.gov.br/secom/pt-br/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf | fail | HTTP 404 |
| 78 | ref-w3c-wcag-22 | https://www.w3.org/TR/WCAG22/ | 403 | https://www.w3.org/TR/WCAG22/ | fail | HTTP 403 |
| 79 | ref-saito-rehmsmeier-precision-recall-2015 | https://doi.org/10.1371/journal.pone.0118432 | 503 | https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0118432 | fail | HTTP 503 |
| 80 | ref-rfc-1122-host-requirements | https://www.rfc-editor.org/rfc/rfc1122.html | 200 | https://www.rfc-editor.org/rfc/rfc1122.html | OK | Sem redirecionamento |
| 81 | ref-rfc-1112-ip-multicast | https://www.rfc-editor.org/rfc/rfc1112.html | 200 | https://www.rfc-editor.org/rfc/rfc1112.html | OK | Sem redirecionamento |
| 82 | ref-rfc-4291-ipv6-addressing | https://www.rfc-editor.org/rfc/rfc4291.html | 200 | https://www.rfc-editor.org/rfc/rfc4291.html | OK | Sem redirecionamento |
| 83 | ref-rfc-4632-cidr | https://www.rfc-editor.org/rfc/rfc4632.html | 200 | https://www.rfc-editor.org/rfc/rfc4632.html | OK | Sem redirecionamento |
| 84 | ref-rfc-8314-email-tls | https://www.rfc-editor.org/rfc/rfc8314.html | 200 | https://www.rfc-editor.org/rfc/rfc8314.html | OK | Sem redirecionamento |
| 85 | ref-rfc-9051-imap4rev2 | https://www.rfc-editor.org/rfc/rfc9051.html | 200 | https://www.rfc-editor.org/rfc/rfc9051.html | OK | Sem redirecionamento |
| 86 | ref-rfc-1939-pop3 | https://www.rfc-editor.org/rfc/rfc1939.html | 200 | https://www.rfc-editor.org/rfc/rfc1939.html | OK | Sem redirecionamento |
| 87 | ref-rfc-5322-message-format | https://www.rfc-editor.org/rfc/rfc5322.html | 200 | https://www.rfc-editor.org/rfc/rfc5322.html | OK | Sem redirecionamento |
| 88 | ref-rfc-7208-spf | https://www.rfc-editor.org/rfc/rfc7208.html | 200 | https://www.rfc-editor.org/rfc/rfc7208.html | OK | Sem redirecionamento |
| 89 | ref-rfc-6376-dkim | https://www.rfc-editor.org/rfc/rfc6376.html | 200 | https://www.rfc-editor.org/rfc/rfc6376.html | OK | Sem redirecionamento |
| 90 | ref-rfc-9989-dmarc | https://www.rfc-editor.org/rfc/rfc9989.html | 200 | https://www.rfc-editor.org/rfc/rfc9989.html | OK | Sem redirecionamento |
| 91 | ref-cisco-lan | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-lan-local-area-network.html | 200 | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-lan-local-area-network.html | OK | Sem redirecionamento |
| 92 | ref-cisco-wan | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-wan-wide-area-network.html | 200 | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-wan-wide-area-network.html | OK | Sem redirecionamento |
| 93 | ref-cisco-networking | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-computer-networking.html | 200 | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-computer-networking.html | OK | Sem redirecionamento |
| 94 | ref-cisco-topology | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-topology.html | 200 | https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-topology.html | OK | Sem redirecionamento |
| 95 | ref-cisco-low-latency | https://www.cisco.com/site/us/en/learn/topics/cloud-networking/what-is-low-latency.html | 200 | https://www.cisco.com/site/us/en/learn/topics/cloud-networking/what-is-low-latency.html | OK | Sem redirecionamento |
| 96 | ref-cisa-phishing | https://www.cisa.gov/be-cyber-smart/report-incident | 200 | https://www.cisa.gov/secure-our-world-archive | redirect | → https://www.cisa.gov/secure-our-world-archive |
| 97 | ref-google-meet-host-controls | https://support.google.com/meet/answer/16229038?co=GENIE.Platform%3DDesktop&hl=pt-br | 200 | https://support.google.com/meet/answer/16229038?co=GENIE.Platform%3DDesktop&hl=pt-br | OK | Sem redirecionamento |
| 98 | ref-google-meet-recording | https://support.google.com/meet/answer/9308681?co=GENIE.Platform%3DDesktop&hl=pt-br | 200 | https://support.google.com/meet/answer/9308681?co=GENIE.Platform%3DDesktop&hl=pt-br | OK | Sem redirecionamento |
| 99 | ref-onedrive-version-history | https://support.microsoft.com/pt-br/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive?ad=br&rs=pt-br&ui=pt-br | 200 | https://support.microsoft.com/pt-br/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive?ad=br&rs=pt-br&ui=pt-br | OK | Sem redirecionamento |
| 100 | ref-onedrive-safeguards | https://support.microsoft.com/pt-br/onedrive/how-onedrive-safeguards-your-data-in-the-cloud | 200 | https://support.microsoft.com/pt-br/onedrive/how-onedrive-safeguards-your-data-in-the-cloud | OK | Sem redirecionamento |
| 101 | ref-onedrive-ransomware | https://support.microsoft.com/pt-br/onedrive/how-to-detect-ransomware-and-recover-files-using-onedrive | 200 | https://support.microsoft.com/pt-br/onedrive/how-to-detect-ransomware-and-recover-files-using-onedrive | OK | Sem redirecionamento |
| 102 | ref-word-cross-reference | https://support.microsoft.com/pt-br/word/create-a-cross-reference | 200 | https://support.microsoft.com/pt-br/word/create-a-cross-reference | OK | Sem redirecionamento |
| 103 | ref-word-compare-merge | https://support.microsoft.com/pt-br/word/compare-and-merge-two-versions-of-a-document | 200 | https://support.microsoft.com/pt-br/word/compare-and-merge-two-versions-of-a-document | OK | Sem redirecionamento |
| 104 | ref-word-read-only | https://support.microsoft.com/pt-br/word/make-a-document-read-only-in-word | 200 | https://support.microsoft.com/pt-br/word/make-a-document-read-only-in-word | OK | Sem redirecionamento |
| 105 | ref-word-lists | https://support.microsoft.com/pt-br/word/training/create-a-bulleted-or-numbered-list | 200 | https://support.microsoft.com/pt-br/word/training/create-a-bulleted-or-numbered-list | OK | Sem redirecionamento |
| 106 | ref-word-tab-stops | https://support.microsoft.com/pt-br/word/insert-or-add-tab-stops | 200 | https://support.microsoft.com/pt-br/word/insert-or-add-tab-stops | OK | Sem redirecionamento |
| 107 | ref-word-accessibility | https://support.microsoft.com/pt-br/accessibility/word/make-your-word-documents-accessible-to-everyone-with-accessibility-assistant | 200 | https://support.microsoft.com/pt-br/accessibility/word/make-your-word-documents-accessible-to-everyone-with-accessibility-assistant | OK | Sem redirecionamento |
| 108 | ref-powerpoint-slide-master | https://support.microsoft.com/pt-br/powerpoint/training/customize-a-slide-master | 200 | https://support.microsoft.com/pt-br/powerpoint/training/customize-a-slide-master | OK | Sem redirecionamento |
| 109 | ref-powerpoint-transitions | https://support.microsoft.com/pt-br/powerpoint/training/add-change-or-remove-transitions-between-slides | 403 | https://support.microsoft.com/pt-br/powerpoint/training/add-change-or-remove-transitions-between-slides | fail | HTTP 403 |
| 110 | ref-powerpoint-animation | https://support.microsoft.com/pt-br/powerpoint/training/video-animations-and-transitions-for-powerpoint-web | 403 | https://support.microsoft.com/pt-br/powerpoint/training/video-animations-and-transitions-for-powerpoint-web | fail | HTTP 403 |
| 111 | ref-powerpoint-pdf | https://support.microsoft.com/pt-br/powerpoint/training/save-powerpoint-presentations-as-pdf-files | 403 | https://support.microsoft.com/pt-br/powerpoint/training/save-powerpoint-presentations-as-pdf-files | fail | HTTP 403 |
| 112 | ref-excel-xlookup | https://support.microsoft.com/pt-br/excel/functions/xlookup-function | 403 | https://support.microsoft.com/pt-br/excel/functions/xlookup-function | fail | HTTP 403 |
| 113 | ref-excel-if | https://support.microsoft.com/pt-br/excel/functions/if-function | 403 | https://support.microsoft.com/pt-br/excel/functions/if-function | fail | HTTP 403 |
| 114 | ref-outlook-calendar-sharing | https://support.microsoft.com/pt-br/outlook/calendar-sharing-in-microsoft-365 | 403 | https://support.microsoft.com/pt-br/outlook/calendar-sharing-in-microsoft-365 | fail | HTTP 403 |
| 115 | ref-outlook-time-zones | https://support.microsoft.com/pt-br/outlook/getstarted/manage-time-zone-settings-in-outlook | 403 | https://support.microsoft.com/pt-br/outlook/getstarted/manage-time-zone-settings-in-outlook | fail | HTTP 403 |
| 116 | ref-teams-calendar | https://support.microsoft.com/pt-br/teams/meetings/get-started-with-the-microsoft-teams-calendar | 403 | https://support.microsoft.com/pt-br/teams/meetings/get-started-with-the-microsoft-teams-calendar | fail | HTTP 403 |
| 117 | ref-teams-recording | https://support.microsoft.com/pt-br/teams/meetings/play-share-and-download-meeting-recordings-in-microsoft-teams | 200 | https://support.microsoft.com/pt-br/teams/meetings/play-share-and-download-meeting-recordings-in-microsoft-teams | OK | Sem redirecionamento |
| 118 | ref-cisco-10gbase-t-cat6-cat6a | https://www.cisco.com/c/en/us/products/interfaces-modules/catalyst-6500-16-port-10-gigabit-ethernet-copper-module/index.html | 200 | https://www.cisco.com/c/en/us/products/interfaces-modules/catalyst-6500-16-port-10-gigabit-ethernet-copper-module/index.html | OK | Sem redirecionamento |
| 119 | ref-zoom-webinar-capacity | https://support.zoom.com/hc/pb/article?id=zm_kb&sysparm_article=KB0062412 | 200 | https://support.zoom.com/hc/pb/article?id=zm_kb&sysparm_article=KB0062412 | OK | Sem redirecionamento |
| 120 | ref-zoom-webinar-breakout-rooms | https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057838 | 200 | https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057838 | OK | Sem redirecionamento |
| 121 | ref-google-meet-browser-requirements | https://support.google.com/meet/answer/7317473?hl=pt-BR | 200 | https://support.google.com/meet/answer/7317473?hl=pt-BR | OK | Sem redirecionamento |
| 122 | ref-google-meet-breakout-eligibility | https://support.google.com/google-workspace-individual/answer/10099500?hl=pt-BR | 200 | https://support.google.com/google-workspace-individual/answer/10099500?hl=pt-BR | OK | Sem redirecionamento |
| 123 | ref-ms-word-linked-embedded-objects | https://support.microsoft.com/pt-br/word/linked-objects-and-embedded-objects | 200 | https://support.microsoft.com/pt-br/word/linked-objects-and-embedded-objects | OK | Sem redirecionamento |
| 124 | ref-sharepoint-version-history-limits | https://learn.microsoft.com/pt-br/sharepoint/document-library-version-history-limits | 200 | https://learn.microsoft.com/pt-br/sharepoint/document-library-version-history-limits | OK | Sem redirecionamento |
| 125 | ref-onedrive-restore-deleted-files | https://support.microsoft.com/pt-br/onedrive/restore-deleted-files-or-folders-in-onedrive | 200 | https://support.microsoft.com/pt-br/onedrive/restore-deleted-files-or-folders-in-onedrive | OK | Sem redirecionamento |
| 126 | ref-sharepoint-external-sharing-settings | https://learn.microsoft.com/pt-br/sharepoint/turn-external-sharing-on-or-off | 200 | https://learn.microsoft.com/pt-br/sharepoint/turn-external-sharing-on-or-off | OK | Sem redirecionamento |
| 127 | ref-word-repeat-table-header | https://support.microsoft.com/pt-br/word/repeat-table-header-on-subsequent-pages | 200 | https://support.microsoft.com/pt-br/word/repeat-table-header-on-subsequent-pages | OK | Sem redirecionamento |
| 128 | ref-word-sort-table-content | https://support.microsoft.com/pt-br/word/sort-the-contents-of-a-table | 200 | https://support.microsoft.com/pt-br/word/sort-the-contents-of-a-table | OK | Sem redirecionamento |
| 129 | ref-ms-create-accessible-pdfs | https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs | 200 | https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs | OK | Sem redirecionamento |
| 130 | ref-powerpoint-slide-master-overview | https://support.microsoft.com/pt-br/powerpoint/training/what-is-a-slide-master-in-powerpoint | 200 | https://support.microsoft.com/pt-br/powerpoint/training/what-is-a-slide-master-in-powerpoint | OK | Sem redirecionamento |
| 131 | ref-powerpoint-animate-text-objects | https://support.microsoft.com/pt-br/powerpoint/training/animate-text-or-objects | 403 | https://support.microsoft.com/pt-br/powerpoint/training/animate-text-or-objects | fail | HTTP 403 |
| 132 | ref-onedrive-sync-files-folders | https://support.microsoft.com/pt-BR/onedrive/sync-your-computer-s-files-and-folders-with-onedrive | 403 | https://support.microsoft.com/pt-BR/onedrive/sync-your-computer-s-files-and-folders-with-onedrive | fail | HTTP 403 |
| 133 | ref-onedrive-backup-folders | https://support.microsoft.com/pt-br/onedrive/back-up-your-folders-with-onedrive | 403 | https://support.microsoft.com/pt-br/onedrive/back-up-your-folders-with-onedrive | fail | HTTP 403 |
| 134 | ref-purview-ediscovery-features | https://learn.microsoft.com/en-us/purview/edisc-features-components | 200 | https://learn.microsoft.com/en-us/purview/edisc-features-components | OK | Sem redirecionamento |
| 135 | ref-intune-licensing | https://learn.microsoft.com/pt-br/intune/fundamentals/licensing/ | 200 | https://learn.microsoft.com/pt-br/intune/fundamentals/licensing/ | OK | Sem redirecionamento |
| 136 | ref-word-compatibility-mode | https://support.microsoft.com/pt-br/word/converting-documents-to-a-newer-format | 403 | https://support.microsoft.com/pt-br/word/converting-documents-to-a-newer-format | fail | HTTP 403 |
| 137 | ref-sharepoint-team-site | https://support.microsoft.com/pt-br/sharepoint/sites-in-sharepoint/what-is-a-sharepoint-team-site | 403 | https://support.microsoft.com/pt-br/sharepoint/sites-in-sharepoint/what-is-a-sharepoint-team-site | fail | HTTP 403 |
| 138 | ref-word-pdf-export | https://support.microsoft.com/pt-br/office/collab-files/save-or-convert-to-pdf-or-xps-in-office-desktop-apps | 403 | https://support.microsoft.com/pt-br/office/collab-files/save-or-convert-to-pdf-or-xps-in-office-desktop-apps | fail | HTTP 403 |
| 139 | ref-excel-average-function-ptbr | https://support.microsoft.com/pt-br/excel/functions/average-function | 403 | https://support.microsoft.com/pt-br/excel/functions/average-function | fail | HTTP 403 |
| 140 | ref-word-first-page-header-footer | https://support.microsoft.com/pt-br/word/change-or-delete-a-header-or-footer-on-a-single-page | 403 | https://support.microsoft.com/pt-br/word/change-or-delete-a-header-or-footer-on-a-single-page | fail | HTTP 403 |
| 141 | ref-word-start-page-numbering-later | https://support.microsoft.com/pt-br/word/start-page-numbering-later-in-your-document | 403 | https://support.microsoft.com/pt-br/word/start-page-numbering-later-in-your-document | fail | HTTP 403 |
| 142 | ref-excel-tables-overview | https://support.microsoft.com/pt-br/excel/overview-of-excel-tables | 403 | https://support.microsoft.com/pt-br/excel/overview-of-excel-tables | fail | HTTP 403 |
| 143 | ref-excel-resize-table | https://support.microsoft.com/pt-br/excel/resize-a-table-by-adding-or-removing-rows-and-columns-in-excel | 403 | https://support.microsoft.com/pt-br/excel/resize-a-table-by-adding-or-removing-rows-and-columns-in-excel | fail | HTTP 403 |
| 144 | ref-excel-filter-data | https://support.microsoft.com/pt-br/excel/get-started/filter-data-in-a-range-or-table-in-excel | 403 | https://support.microsoft.com/pt-br/excel/get-started/filter-data-in-a-range-or-table-in-excel | fail | HTTP 403 |
| 145 | ref-excel-data-validation | https://support.microsoft.com/pt-br/excel/get-started/apply-data-validation-to-cells | 403 | https://support.microsoft.com/pt-br/excel/get-started/apply-data-validation-to-cells | fail | HTTP 403 |
| 146 | ref-excel-conditional-formatting | https://support.microsoft.com/pt-br/excel/use-conditional-formatting-to-highlight-information-in-excel | 403 | https://support.microsoft.com/pt-br/excel/use-conditional-formatting-to-highlight-information-in-excel | fail | HTTP 403 |
| 147 | ref-word-table-of-contents | https://support.microsoft.com/pt-br/word/training/insert-a-table-of-contents | 403 | https://support.microsoft.com/pt-br/word/training/insert-a-table-of-contents | fail | HTTP 403 |
| 148 | ref-word-section-breaks | https://support.microsoft.com/pt-br/word/use-section-breaks-to-change-the-layout-or-formatting-in-one-section-of-your-word-document | 403 | https://support.microsoft.com/pt-br/word/use-section-breaks-to-change-the-layout-or-formatting-in-one-section-of-your-word-document | fail | HTTP 403 |
| 149 | ref-office-accessible-pdf | https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs | 403 | https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs | fail | HTTP 403 |
| 150 | ref-rfc-8200-ipv6 | https://www.rfc-editor.org/info/rfc8200/ | 200 | https://www.rfc-editor.org/info/rfc8200/ | OK | Sem redirecionamento |
| 151 | ref-rfc-1918-private-addresses | https://www.rfc-editor.org/info/rfc1918/ | 200 | https://www.rfc-editor.org/info/rfc1918/ | OK | Sem redirecionamento |
| 152 | ref-rfc-4632-cidr-2 | https://www.rfc-editor.org/info/rfc4632/ | 200 | https://www.rfc-editor.org/info/rfc4632/ | OK | Sem redirecionamento |
| 153 | ref-rfc-5952-ipv6-text | https://www.rfc-editor.org/info/rfc5952/ | 200 | https://www.rfc-editor.org/info/rfc5952/ | OK | Sem redirecionamento |
| 154 | ref-rfc-1122-hosts | https://www.rfc-editor.org/info/rfc1122/ | 200 | https://www.rfc-editor.org/info/rfc1122/ | OK | Sem redirecionamento |
| 155 | ref-rfc-4251-ssh-architecture | https://www.rfc-editor.org/info/rfc4251/ | 200 | https://www.rfc-editor.org/info/rfc4251/ | OK | Sem redirecionamento |
| 156 | ref-rfc-950-subnetting | https://www.rfc-editor.org/info/rfc950/ | 200 | https://www.rfc-editor.org/info/rfc950/ | OK | Sem redirecionamento |
| 157 | ref-rfc-1855-netiquette | https://www.rfc-editor.org/info/rfc1855/ | 200 | https://www.rfc-editor.org/info/rfc1855/ | OK | Sem redirecionamento |
| 158 | ref-rfc-7208-spf-2 | https://www.rfc-editor.org/info/rfc7208/ | 200 | https://www.rfc-editor.org/info/rfc7208/ | OK | Sem redirecionamento |
| 159 | ref-rfc-6376-dkim-2 | https://www.rfc-editor.org/info/rfc6376/ | 200 | https://www.rfc-editor.org/info/rfc6376/ | OK | Sem redirecionamento |
| 160 | ref-rfc-7489-dmarc | https://www.rfc-editor.org/info/rfc7489/ | 200 | https://www.rfc-editor.org/info/rfc7489/ | OK | Sem redirecionamento |
| 161 | ref-nist-rdaf-1500-18 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html | 200 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html | OK | Sem redirecionamento |
| 162 | ref-nist-stats-handbook | https://www.itl.nist.gov/div898/handbook/ | 200 | https://www.itl.nist.gov/div898/handbook/ | OK | Sem redirecionamento |
| 163 | ref-nist-ai-rmf-10 | https://www.nist.gov/itl/ai-risk-management-framework | 200 | https://www.nist.gov/itl/ai-risk-management-framework | OK | Sem redirecionamento |
| 164 | ref-owasp-llm-prompt-injection | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | 200 | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | OK | Sem redirecionamento |
| 165 | ref-tableau-help-desktop | https://help.tableau.com/current/pro/desktop/en-us/default.htm | 200 | https://help.tableau.com/current/pro/desktop/en-us/default.htm | OK | Sem redirecionamento |
| 166 | ref-looker-studio-help | https://support.google.com/looker-studio/ | 200 | https://docs.cloud.google.com/data-studio?visit_id=639287060789338335-190487206&rd=1 | redirect | → https://docs.cloud.google.com/data-studio?visit_id=639287060789338335-190487206&rd=1 |
| 167 | ref-rfc-8200-ipv6-2 | https://www.rfc-editor.org/info/rfc8200/ | 200 | https://www.rfc-editor.org/info/rfc8200/ | OK | Sem redirecionamento |
| 168 | ref-rfc-1918-private-addresses-2 | https://www.rfc-editor.org/info/rfc1918/ | 200 | https://www.rfc-editor.org/info/rfc1918/ | OK | Sem redirecionamento |
| 169 | ref-rfc-4632-cidr-3 | https://www.rfc-editor.org/info/rfc4632/ | 200 | https://www.rfc-editor.org/info/rfc4632/ | OK | Sem redirecionamento |
| 170 | ref-rfc-5952-ipv6-text-2 | https://www.rfc-editor.org/info/rfc5952/ | 200 | https://www.rfc-editor.org/info/rfc5952/ | OK | Sem redirecionamento |
| 171 | ref-rfc-1122-hosts-2 | https://www.rfc-editor.org/info/rfc1122/ | 200 | https://www.rfc-editor.org/info/rfc1122/ | OK | Sem redirecionamento |
| 172 | ref-rfc-4251-ssh-architecture-2 | https://www.rfc-editor.org/info/rfc4251/ | 200 | https://www.rfc-editor.org/info/rfc4251/ | OK | Sem redirecionamento |
| 173 | ref-rfc-950-subnetting-2 | https://www.rfc-editor.org/info/rfc950/ | 200 | https://www.rfc-editor.org/info/rfc950/ | OK | Sem redirecionamento |
| 174 | ref-rfc-1855-netiquette-2 | https://www.rfc-editor.org/info/rfc1855/ | 200 | https://www.rfc-editor.org/info/rfc1855/ | OK | Sem redirecionamento |
| 175 | ref-rfc-7208-spf-3 | https://www.rfc-editor.org/info/rfc7208/ | 200 | https://www.rfc-editor.org/info/rfc7208/ | OK | Sem redirecionamento |
| 176 | ref-rfc-6376-dkim-3 | https://www.rfc-editor.org/info/rfc6376/ | 200 | https://www.rfc-editor.org/info/rfc6376/ | OK | Sem redirecionamento |
| 177 | ref-rfc-7489-dmarc-2 | https://www.rfc-editor.org/info/rfc7489/ | 200 | https://www.rfc-editor.org/info/rfc7489/ | OK | Sem redirecionamento |
| 178 | ref-nist-rdaf-1500-18-2 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html | 200 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html | OK | Sem redirecionamento |
| 179 | ref-nist-stats-handbook-2 | https://www.itl.nist.gov/div898/handbook/ | 200 | https://www.itl.nist.gov/div898/handbook/ | OK | Sem redirecionamento |
| 180 | ref-nist-ai-rmf-10-2 | https://www.nist.gov/itl/ai-risk-management-framework | 200 | https://www.nist.gov/itl/ai-risk-management-framework | OK | Sem redirecionamento |
| 181 | ref-owasp-llm-prompt-injection-2 | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | 200 | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | OK | Sem redirecionamento |
| 182 | ref-tableau-help-desktop-2 | https://help.tableau.com/current/pro/desktop/en-us/default.htm | 200 | https://help.tableau.com/current/pro/desktop/en-us/default.htm | OK | Sem redirecionamento |
| 183 | ref-looker-studio-help-2 | https://support.google.com/looker-studio/ | 200 | https://docs.cloud.google.com/data-studio?visit_id=639287060901020614-786637180&rd=1&hl=ja | redirect | → https://docs.cloud.google.com/data-studio?visit_id=639287060901020614-786637180&rd=1&hl=ja |

## Pendências

- `ref-secom-guia-redes-sociais-governo-federal` — https://www.gov.br/secom/pt-br/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf — HTTP 404
- `ref-w3c-wcag-22` — https://www.w3.org/TR/WCAG22/ — HTTP 403
- `ref-saito-rehmsmeier-precision-recall-2015` — https://doi.org/10.1371/journal.pone.0118432 — HTTP 503
- `ref-powerpoint-transitions` — https://support.microsoft.com/pt-br/powerpoint/training/add-change-or-remove-transitions-between-slides — HTTP 403
- `ref-powerpoint-animation` — https://support.microsoft.com/pt-br/powerpoint/training/video-animations-and-transitions-for-powerpoint-web — HTTP 403
- `ref-powerpoint-pdf` — https://support.microsoft.com/pt-br/powerpoint/training/save-powerpoint-presentations-as-pdf-files — HTTP 403
- `ref-excel-xlookup` — https://support.microsoft.com/pt-br/excel/functions/xlookup-function — HTTP 403
- `ref-excel-if` — https://support.microsoft.com/pt-br/excel/functions/if-function — HTTP 403
- `ref-outlook-calendar-sharing` — https://support.microsoft.com/pt-br/outlook/calendar-sharing-in-microsoft-365 — HTTP 403
- `ref-outlook-time-zones` — https://support.microsoft.com/pt-br/outlook/getstarted/manage-time-zone-settings-in-outlook — HTTP 403
- `ref-teams-calendar` — https://support.microsoft.com/pt-br/teams/meetings/get-started-with-the-microsoft-teams-calendar — HTTP 403
- `ref-powerpoint-animate-text-objects` — https://support.microsoft.com/pt-br/powerpoint/training/animate-text-or-objects — HTTP 403
- `ref-onedrive-sync-files-folders` — https://support.microsoft.com/pt-BR/onedrive/sync-your-computer-s-files-and-folders-with-onedrive — HTTP 403
- `ref-onedrive-backup-folders` — https://support.microsoft.com/pt-br/onedrive/back-up-your-folders-with-onedrive — HTTP 403
- `ref-word-compatibility-mode` — https://support.microsoft.com/pt-br/word/converting-documents-to-a-newer-format — HTTP 403
- `ref-sharepoint-team-site` — https://support.microsoft.com/pt-br/sharepoint/sites-in-sharepoint/what-is-a-sharepoint-team-site — HTTP 403
- `ref-word-pdf-export` — https://support.microsoft.com/pt-br/office/collab-files/save-or-convert-to-pdf-or-xps-in-office-desktop-apps — HTTP 403
- `ref-excel-average-function-ptbr` — https://support.microsoft.com/pt-br/excel/functions/average-function — HTTP 403
- `ref-word-first-page-header-footer` — https://support.microsoft.com/pt-br/word/change-or-delete-a-header-or-footer-on-a-single-page — HTTP 403
- `ref-word-start-page-numbering-later` — https://support.microsoft.com/pt-br/word/start-page-numbering-later-in-your-document — HTTP 403
- `ref-excel-tables-overview` — https://support.microsoft.com/pt-br/excel/overview-of-excel-tables — HTTP 403
- `ref-excel-resize-table` — https://support.microsoft.com/pt-br/excel/resize-a-table-by-adding-or-removing-rows-and-columns-in-excel — HTTP 403
- `ref-excel-filter-data` — https://support.microsoft.com/pt-br/excel/get-started/filter-data-in-a-range-or-table-in-excel — HTTP 403
- `ref-excel-data-validation` — https://support.microsoft.com/pt-br/excel/get-started/apply-data-validation-to-cells — HTTP 403
- `ref-excel-conditional-formatting` — https://support.microsoft.com/pt-br/excel/use-conditional-formatting-to-highlight-information-in-excel — HTTP 403
- `ref-word-table-of-contents` — https://support.microsoft.com/pt-br/word/training/insert-a-table-of-contents — HTTP 403
- `ref-word-section-breaks` — https://support.microsoft.com/pt-br/word/use-section-breaks-to-change-the-layout-or-formatting-in-one-section-of-your-word-document — HTTP 403
- `ref-office-accessible-pdf` — https://support.microsoft.com/pt-br/accessibility/office-accessibility/create-accessible-pdfs — HTTP 403

## Observações gerais

- 6 URLs sofreram redirecionamento (HTTP→HTTPS, barra final, etc.).
- 28 URLs com resultado 'fail'.
- `references.js` não foi alterado nesta verificação.
- Nenhum commit/push realizado.
