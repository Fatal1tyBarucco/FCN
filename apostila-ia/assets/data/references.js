/* references.js — REFERÊNCIAS VERIFICADAS (Seção 12.3 do Escrita.txt).
 *
 * Fonte de verdade para as URLs/datas: referencias/referencias-verificadas.md
 * (raiz do repositório).
 *
 * Cada item: { id, titulo, organizacao, url, topico, dataVerificacao, status,
 * dispositivos }. status ∈ { "verificado", "pendente" }. Itens "pendente"
 * têm url = null e dataVerificacao = null — NENHUMA URL inventada.
 *
 * Itens conferidos por acesso direto (HTTP/webfetch) em 2026-10-24 entram como
 * "verificado": Microsoft Learn (portal Microsoft 365), RFCs/IETF (RFC 791,
 * 793, 1034, 1035, 2131, 7230, 7231, 8446, 9110) e CERT.br. As RFCs 7230/7231
 * são obsoletas por RFC 9110/9112 (registradas com ressalva de obsolescência
 * no arquivo de referências). Bloco 6 (2026-10-24): ANPD (órgão + Resoluções
 * CD/ANPD nº 2/2022 e nº 4/2023), CF art. 37 (caput + incisos II/III/XXI/
 * §1º/§3ºII/§4º/§6º) e art. 5º (incisos X/XII/XIV/XXXIII/LXXIX), e os
 * dispositivos remissivos do Módulo 6 (Lei 8.429/1992, Lei 1.079/1950,
 * Lei 13.146/2015, Lei 10.098/2000, Lei 10.741/2003, Lei 13.460/2017,
 * Lei 12.682/2012, Lei 14.063/2020, LC 101/2000, LC 105/2001 e LGPD art. 7º)
 * verificados por acesso direto ao planalto.gov.br. Nenhuma entrada "pendente"
 * remanesce neste arquivo.
 *
 * SEM eval. SEM fetch. Funciona em file:// (dados literais).
 */

const references = [
  {
    id: "ref-lgpd-13709-2018",
    titulo: "Lei Geral de Proteção de Dados Pessoais (LGPD) — Lei nº 13.709, de 14 de agosto de 2018",
    organizacao: "Planalto (Presidência da República)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-20",
    status: "verificado",
    dispositivos: ["art. 1º", "art. 2º", "art. 3º", "art. 4º", "art. 5º", "art. 6º, I a III e X", "art. 17", "art. 18", "art. 37", "art. 46", "art. 48", "art. 49"]
  },
  {
    id: "ref-conflito-interesses-12813-2013",
    titulo: "Lei de Conflito de Interesses — Lei nº 12.813, de 16 de maio de 2013",
    organizacao: "Planalto (Presidência da República)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público (conflito de interesses)",
    dataVerificacao: "2026-10-26",
    status: "verificado",
    dispositivos: ["art. 1º", "art. 2º", "art. 3º, I", "art. 4º", "art. 5º, V", "art. 10"]
  },
  {
    id: "ref-lai-12527-2011",
    titulo: "Lei de Acesso à Informação (LAI) — Lei nº 12.527, de 18 de novembro de 2011",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público (LAI)",
    dataVerificacao: "2026-10-21",
    status: "verificado",
    dispositivos: ["art. 1º", "art. 2º", "art. 3º", "art. 4º", "art. 5º", "art. 6º", "art. 7º", "art. 8º", "art. 8º-A", "art. 8º-B", "art. 10", "art. 11", "art. 12", "art. 13", "art. 14", "art. 15", "art. 16", "art. 21", "art. 22", "art. 23", "art. 24", "art. 25", "art. 26", "art. 27", "art. 28", "art. 29", "art. 30", "art. 31", "art. 32", "art. 34", "art. 38"]
  },
  {
    id: "ref-governo-digital-14129-2021",
    titulo: "Lei de Governo Digital — Lei nº 14.129, de 29 de março de 2021",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público (Governo Digital)",
    dataVerificacao: "2026-10-21",
    status: "verificado",
    dispositivos: ["art. 1º", "art. 2º", "art. 3º", "art. 4º", "art. 5º", "art. 6º", "art. 7º", "art. 8º", "art. 10", "art. 14", "art. 18", "art. 20", "art. 21", "art. 22", "art. 24", "art. 25", "art. 26", "art. 27", "art. 28", "art. 29", "art. 30", "art. 32", "art. 34", "art. 35", "art. 36", "art. 38", "art. 39", "art. 40", "art. 42", "art. 43", "art. 47", "art. 48", "art. 49", "art. 52"]
  },
  {
    id: "ref-cf-1988-art37-caput-art5-xxxiii",
    titulo: "Constituição Federal de 1988 — art. 37, caput, e art. 5º, XXXIII",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público (CF/1988)",
    dataVerificacao: "2026-10-21",
    status: "verificado",
    dispositivos: ["art. 37, caput", "art. 5º, XXXIII"]
  },
  {
    id: "ref-marco-civil-12965-2014",
    titulo: "Marco Civil da Internet — Lei nº 12.965, de 23 de abril de 2014",
    organizacao: "Planalto (Presidência da República)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm",
    topico: "M4 — Segurança da informação (Marco Civil)",
    dataVerificacao: "2026-10-23",
    status: "verificado",
    dispositivos: ["art. 2º", "art. 3º", "art. 7º", "art. 9º, § 3º", "art. 15", "art. 19"]
  },

  /* ---------- VÍDEOS VERIFICADOS (Seção 12.2) ---------- */
  {
    id: "video-m1-excel-origem",
    titulo: "Curso Excel #01 - Como surgiu o Excel?",
    organizacao: "Curso em Vídeo (YouTube)",
    url: "https://www.youtube.com/watch?v=ZVURQLXZtIc",
    topico: "M1 — Microsoft 365 (Excel)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "ZVURQLXZtIc",
    canal: "Curso em Vídeo",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/ZVURQLXZtIc"
  },
  {
    id: "video-m1-excel-funcoes",
    titulo: "Curso Excel #10 - Funções do Excel (Parte 1)",
    organizacao: "Curso em Vídeo (YouTube)",
    url: "https://www.youtube.com/watch?v=boUzkJJNOPI",
    topico: "M1 — Microsoft 365 (Excel)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "boUzkJJNOPI",
    canal: "Curso em Vídeo",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/boUzkJJNOPI"
  },
  {
    id: "video-m2-redes-osi",
    titulo: "Curso de Redes - Vídeo 03 - Modelo OSI",
    organizacao: "Bóson Treinamentos (YouTube)",
    url: "https://www.youtube.com/watch?v=WO1uGJRqrwI",
    topico: "M2 — Redes de computadores (modelo OSI)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "WO1uGJRqrwI",
    canal: "Bóson Treinamentos",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/WO1uGJRqrwI"
  },
  {
    id: "video-m2-redes-tcpip",
    titulo: "Curso de redes - Vídeo 04 - Introdução ao TCP/IP",
    organizacao: "Bóson Treinamentos (YouTube)",
    url: "https://www.youtube.com/watch?v=bH29oltn8Cw",
    topico: "M2 — Redes de computadores (TCP/IP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "bH29oltn8Cw",
    canal: "Bóson Treinamentos",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/bH29oltn8Cw"
  },
  {
    id: "video-m2-redes-ip",
    titulo: "Curso de Redes - Vídeo 05 - Endereço IP",
    organizacao: "Bóson Treinamentos (YouTube)",
    url: "https://www.youtube.com/watch?v=XPWd08tLAuo",
    topico: "M2 — Redes de computadores (endereçamento IP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "XPWd08tLAuo",
    canal: "Bóson Treinamentos",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/XPWd08tLAuo"
  },
  {
    id: "video-m3-email-smtp",
    titulo: "Funcionamento do protocolo SMTP",
    organizacao: "Professor Sylvio Rodrigues - Informática Concursos (YouTube)",
    url: "https://www.youtube.com/watch?v=QtqbaEiwlyU",
    topico: "M3 — Comunicação digital (protocolos de e-mail)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "QtqbaEiwlyU",
    canal: "Professor Sylvio Rodrigues - Informática Concursos",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/QtqbaEiwlyU"
  },
  {
    id: "video-m4-criptografia",
    titulo: "Introdução à Criptografia: Conceitos, Algoritmos e Segurança de Dados",
    organizacao: "Bóson Treinamentos (YouTube)",
    url: "https://www.youtube.com/watch?v=cWld3rMD7Wk",
    topico: "M4 — Segurança da informação (criptografia)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "cWld3rMD7Wk",
    canal: "Bóson Treinamentos",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/cWld3rMD7Wk"
  },
  {
    id: "video-m4-firewalls",
    titulo: "Segurança da informação - Firewalls",
    organizacao: "UNIVESP (YouTube)",
    url: "https://www.youtube.com/watch?v=TbjhWIhLQDU",
    topico: "M4 — Segurança da informação (firewalls)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "TbjhWIhLQDU",
    canal: "UNIVESP",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/TbjhWIhLQDU"
  },
  {
    id: "video-m4-lgpd-ti",
    titulo: "O que a TI tem a ver com a LGPD?!?",
    organizacao: "ConexTI (YouTube)",
    url: "https://www.youtube.com/watch?v=wlaNFx73qh4",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "wlaNFx73qh4",
    canal: "ConexTI",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/wlaNFx73qh4"
  },
  {
    id: "video-m4-engenharia-social",
    titulo: "Como se proteger de golpes de engenharia social – Seu mundo digital mais seguro #Ep3",
    organizacao: "TecMundo (YouTube)",
    url: "https://www.youtube.com/watch?v=qqgkhvsyL9Q",
    topico: "M4 — Segurança da informação (engenharia social)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "qqgkhvsyL9Q",
    canal: "TecMundo",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/qqgkhvsyL9Q"
  },
  {
    id: "video-m5-ml-primeiro-codigo",
    titulo: "Seu primeiro código de Machine Learning com Python!",
    organizacao: "Didática Tech (YouTube)",
    url: "https://www.youtube.com/watch?v=DNegkxwQJuY",
    topico: "M5 — Inteligência Artificial (machine learning)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "DNegkxwQJuY",
    canal: "Didática Tech",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/DNegkxwQJuY"
  },
  {
    id: "video-m5-deep-learning",
    titulo: "Você sabe o que é Deep Learning?",
    organizacao: "Curso em Vídeo (YouTube)",
    url: "https://www.youtube.com/watch?v=M8hoXE24PMo",
    topico: "M5 — Inteligência Artificial (deep learning)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "M8hoXE24PMo",
    canal: "Curso em Vídeo",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/M8hoXE24PMo"
  },
  {
    id: "video-m5-ml-pratico",
    titulo: "Machine Learning: Tutorial prático usando apenas o navegador",
    organizacao: "Filipe Deschamps (YouTube)",
    url: "https://www.youtube.com/watch?v=JyGGMyR3x5I",
    topico: "M5 — Inteligência Artificial (machine learning prático)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "JyGGMyR3x5I",
    canal: "Filipe Deschamps",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/JyGGMyR3x5I"
  },
  {
    id: "video-m6-ia-servico-publico",
    titulo: "Sistemas de IA, IA no serviço público e em infraestruturas críticas",
    organizacao: "Câmara dos Deputados (YouTube)",
    url: "https://www.youtube.com/watch?v=As0A-w1WmPI",
    topico: "M6 — Ética e responsabilidade digital (IA no serviço público)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "As0A-w1WmPI",
    canal: "Câmara dos Deputados",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/As0A-w1WmPI"
  },
  {
    id: "video-m6-linguagem-simples-ia",
    titulo: "Comunicação Descomplicada no Serviço Público: Linguagem Simples, Inteligência Artificial",
    organizacao: "Governança com Inovação e Sustentabilidade (YouTube)",
    url: "https://www.youtube.com/watch?v=r7dYNidpM3k",
    topico: "M6 — Ética e responsabilidade digital (linguagem simples/IA)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "r7dYNidpM3k",
    canal: "Governança com Inovação e Sustentabilidade",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/r7dYNidpM3k"
  },
  {
    id: "video-m6-transparencia-ia",
    titulo: "Transparência e imparcialidade nos usos da inteligência artificial no âmbito do serviço público",
    organizacao: "Thiago Nobrega | Direito Administrativo (YouTube)",
    url: "https://www.youtube.com/watch?v=75RqMrSbenM",
    topico: "M6 — Ética e responsabilidade digital (transparência/imparcialidade IA)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "75RqMrSbenM",
    canal: "Thiago Nobrega | Direito Administrativo",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/75RqMrSbenM"
  },
  {
    id: "video-m6-governo-digital-14129",
    titulo: "1 - Lei 14.129/2021 Governo Digital",
    organizacao: "LexPlay (YouTube)",
    url: "https://www.youtube.com/watch?v=Zjv2mZJkakw",
    topico: "M6 — Ética e responsabilidade digital (Governo Digital)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "Zjv2mZJkakw",
    canal: "LexPlay",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/Zjv2mZJkakw"
  },
  {
    id: "video-m7-dados-excel",
    titulo: "Excel Básico para Análise de Dados",
    organizacao: "Universidade dos Dados (YouTube)",
    url: "https://www.youtube.com/watch?v=LmhbPTMaJak",
    topico: "M7 — Dados (análise de dados com Excel)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "LmhbPTMaJak",
    canal: "Universidade dos Dados",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/LmhbPTMaJak"
  },
  {
    id: "video-m7-dados-pandas",
    titulo: "Te ensino TUDO sobre Pandas para análise de dados com Python",
    organizacao: "Asimov Academy (YouTube)",
    url: "https://www.youtube.com/watch?v=1JpYOqvDJNU",
    topico: "M7 — Dados (pandas/análise de dados)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "1JpYOqvDJNU",
    canal: "Asimov Academy",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/1JpYOqvDJNU"
  },
  {
    id: "video-m8-visualizacao-dashboards",
    titulo: "É o fim do Power BI? Criando Dashboard com Python em 15 minutos",
    organizacao: "Asimov Academy (YouTube)",
    url: "https://www.youtube.com/watch?v=P6E_Kts9pxE",
    topico: "M8 — Visualização de dados (dashboards)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: [],
    formato: "video",
    idVideo: "P6E_Kts9pxE",
    canal: "Asimov Academy",
    urlEmbedNocookie: "https://www.youtube-nocookie.com/embed/P6E_Kts9pxE"
  },

  /* ---------- BLOCO 6 — VERIFICADAS EM 2026-10-24 (RFC 9110, ANPD, CF art. 37/5º, dispositivos remissivos M6) ---------- */

  {
    id: "ref-microsoft-learn-m365",
    titulo: "Microsoft 365 documentation — Microsoft Learn",
    organizacao: "Microsoft (Microsoft Learn)",
    url: "https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide",
    topico: "M1 — Microsoft 365 e aplicações de escritório",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-791-ipv4",
    titulo: "RFC 791 — Internet Protocol (IPv4)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc791/",
    topico: "M2 — Redes de computadores (IPv4)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-793-tcp",
    titulo: "RFC 793 — Transmission Control Protocol (TCP)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc793/",
    topico: "M2 — Redes de computadores (TCP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-1034-dns-concepts",
    titulo: "RFC 1034 — Domain Names: Concepts and Facilities",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc1034/",
    topico: "M2 — Redes de computadores (DNS)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-1035-dns-implementation",
    titulo: "RFC 1035 — Domain Names: Implementation and Specification",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc1035/",
    topico: "M2 — Redes de computadores (DNS)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-2131-dhcp",
    titulo: "RFC 2131 — Dynamic Host Configuration Protocol (DHCP)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc2131/",
    topico: "M2 — Redes de computadores (DHCP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-7230-http11-messaging",
    titulo: "RFC 7230 — HTTP/1.1: Message Syntax and Routing",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc7230/",
    topico: "M2 — Redes de computadores (HTTP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-7231-http11-semantics",
    titulo: "RFC 7231 — HTTP/1.1: Semantics and Content",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc7231/",
    topico: "M2 — Redes de computadores (HTTP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-8446-tls13",
    titulo: "RFC 8446 — The Transport Layer Security (TLS) Protocol Version 1.3",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc8446/",
    topico: "M2 — Redes de computadores (TLS)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-9110-http-semantics",
    titulo: "RFC 9110 — HTTP Semantics (Internet Standard; obsoleta RFCs 7231/7232/7233/7235/2818 e partes de 7230)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc9110",
    topico: "M2 — Redes de computadores (HTTP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-orgao",
    titulo: "Agência Nacional de Proteção de Dados (ANPD) — portal institucional (regulador da LGPD)",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.gov.br/anpd/pt-br",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lgpd-lei-15352-2026",
    titulo: "Lei nº 15.352, de 25 de fevereiro de 2026 — altera a LGPD e atualiza a denominação institucional da ANPD",
    organizacao: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm",
    topico: "M4 — Segurança da informação (LGPD e competências da ANPD)",
    dataVerificacao: "2026-10-25",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-2-2022",
    titulo: "Resolução CD/ANPD nº 2, de 27 de janeiro de 2022 — Regulamento de aplicação da LGPD para agentes de tratamento de pequeno porte",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/regulamentacoes-da-anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-4-2023",
    titulo: "Resolução CD/ANPD nº 4, de 24 de fevereiro de 2023 — Regulamento de Dosimetria e Aplicação de Sanções Administrativas",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-4-de-24-de-fevereiro-de-2023-466146077",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-cert-br",
    titulo: "CERT.br — Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil",
    organizacao: "CERT.br (NIC.br)",
    url: "https://cert.br/",
    topico: "M4 — Segurança da informação (malwares, defesa)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-cf-1988-art37-demais",
    titulo: "Constituição Federal de 1988 — art. 37 (demais incisos e parágrafos relevantes, texto integral conferido)",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público (CF/1988)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: ["art. 37, caput (princípios)", "art. 37, II", "art. 37, III", "art. 37, XXI", "art. 37, § 1º", "art. 37, § 3º, II", "art. 37, § 4º", "art. 37, § 6º"]
  },
  {
    id: "ref-cf-1988-art5-demais",
    titulo: "Constituição Federal de 1988 — art. 5º (demais incisos relevantes, texto integral conferido)",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público (CF/1988)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: ["art. 5º, X", "art. 5º, XII", "art. 5º, XIV", "art. 5º, XXXIII", "art. 5º, LXXIX"]
  },
  {
    id: "ref-lei-8429-1992-improbidade",
    titulo: "Lei nº 8.429, de 2 de junho de 1992 — Improbidade administrativa (redação dada pela Lei nº 14.230/2021)",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/leis/l8429.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: ["art. 1º", "art. 37, § 4º CF (remissão)"]
  },
  {
    id: "ref-lei-1079-1950-crimes-responsabilidade",
    titulo: "Lei nº 1.079, de 10 de abril de 1950 — Crimes de responsabilidade",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/leis/l1079.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lei-13146-2015-inclusao",
    titulo: "Lei nº 13.146, de 6 de julho de 2015 — Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência)",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lei-10098-2000-acessibilidade",
    titulo: "Lei nº 10.098, de 19 de dezembro de 2000 — Normas gerais e critérios básicos de acessibilidade",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/leis/l10098.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lei-10741-2003-idoso",
    titulo: "Lei nº 10.741, de 1º de outubro de 2003 — Estatuto da Pessoa Idosa",
    organizacao: "Planalto (Presidência da República)",
    url: "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lei-13460-2017-usuario-servicos-publicos",
    titulo: "Lei nº 13.460, de 26 de junho de 2017 — Participação, proteção e defesa dos direitos do usuário dos serviços públicos",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13460.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lei-12682-2012-documentos-eletronicos",
    titulo: "Lei nº 12.682, de 9 de julho de 2012 — Elaboração e arquivamento de documentos em meios eletromagnéticos",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12682.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lei-14063-2020-assinaturas-eletronicas",
    titulo: "Lei nº 14.063, de 23 de setembro de 2020 — Uso de assinaturas eletrônicas em interações com entes públicos",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lcp-101-2000-responsabilidade-fiscal",
    titulo: "Lei Complementar nº 101, de 4 de maio de 2000 — Lei de Responsabilidade Fiscal (LRF)",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: ["art. 37, § 4º CF (remissão)"]
  },
  {
    id: "ref-lcp-105-2001-sigilo-financeiro",
    titulo: "Lei Complementar nº 105, de 10 de janeiro de 2001 — Sigilo das operações de instituições financeiras",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp105.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-lgpd-art7-bases-legais",
    titulo: "LGPD — Lei nº 13.709/2018, art. 7º (hipóteses de tratamento de dados pessoais; bases legais)",
    organizacao: "Planalto (Presidência da República)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: ["art. 7º, I a X"]
  },
  /* ---------- I4 — VERIFICADAS EM 2026-10-24 ---------- */

  /* RFCs / IETF (Módulo 2) */
  {
    id: "ref-rfc-959-ftp",
    titulo: "RFC 959 — File Transfer Protocol (FTP) (STD 9)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc959/",
    topico: "M2 — Redes de computadores (FTP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-5321-smtp",
    titulo: "RFC 5321 — Simple Mail Transfer Protocol (SMTP)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc5321/",
    topico: "M2 — Redes de computadores (SMTP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-792-icmp",
    titulo: "RFC 792 — Internet Control Message Protocol (ICMP) (STD 5)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc792/",
    topico: "M2 — Redes de computadores (ICMP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-826-arp",
    titulo: "RFC 826 — An Ethernet Address Resolution Protocol (ARP) (STD 37)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc826/",
    topico: "M2 — Redes de computadores (ARP)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-3022-nat",
    titulo: "RFC 3022 — Traditional IP Network Address Translator (Traditional NAT)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc3022/",
    topico: "M2 — Redes de computadores (NAT)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-2663-nat-terminology",
    titulo: "RFC 2663 — IP Network Address Translator (NAT) Terminology and Considerations",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc2663/",
    topico: "M2 — Redes de computadores (NAT)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-4301-ipsec",
    titulo: "RFC 4301 — Security Architecture for the Internet Protocol (IPsec/VPN)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc4301/",
    topico: "M2 — Redes de computadores (VPN/IPsec)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },

  /* ANPD — resoluções adicionais */
  {
    id: "ref-anpd-resolucao-1-2021",
    titulo: "Resolução CD/ANPD nº 1, de 28 de outubro de 2021 — Regulamento do Processo de Fiscalização e do Processo Administrativo Sancionador",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no1-2021",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-5-2023",
    titulo: "Resolução CD/ANPD nº 5, de 13 de março de 2023 — Agenda de Avaliação de Resultado Regulatório 2023-2026",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-5-de-13-de-marco-de-2023-469722336",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-10-2023",
    titulo: "Resolução CD/ANPD nº 10, de 5 de dezembro de 2023 — Mapa de Temas Prioritários 2024-2025",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-10-de-5-de-dezembro-de-2023-530258528",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-11-2023",
    titulo: "Resolução CD/ANPD nº 11, de 27 de dezembro de 2023 — Alteração da Agenda Regulatória 2023-2024",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-11-de-27-de-dezembro-de-2023-534947737",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-15-2024",
    titulo: "Resolução CD/ANPD nº 15, de 24 de abril de 2024 — Regulamento de Comunicação de Incidente de Segurança",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-15-de-24-de-abril-de-2024-556243024",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-18-2024",
    titulo: "Resolução CD/ANPD nº 18, de 16 de julho de 2024 — Regulamento sobre a atuação do encarregado (DPO)",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-18-de-16-de-julho-de-2024-572632074",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-19-2024",
    titulo: "Resolução CD/ANPD nº 19, de 23 de agosto de 2024 — Regulamento de Transferência Internacional de Dados e cláusulas-padrão contratuais",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-19-de-23-de-agosto-de-2024",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-23-2024",
    titulo: "Resolução CD/ANPD nº 23, de 9 de dezembro de 2024 — Agenda Regulatória 2025-2026",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-no-23-de-9-de-dezembro-de-2024",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-30-2025",
    titulo: "Resolução CD/ANPD nº 30, de 23 de dezembro de 2025 — Mapa de Temas Prioritários 2026-2027",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-30-de-23-de-dezembro-de-2025-677947163",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-31-2025",
    titulo: "Resolução CD/ANPD nº 31, de 22 de dezembro de 2025 — Alteração da Agenda Regulatória 2025-2026",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/web/dou/-/resolucao-cd/anpd-n-31-de-22-de-dezembro-de-2025-677950080",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-anpd-resolucao-32-2026",
    titulo: "Resolução CD/ANPD nº 32, de 26 de janeiro de 2026 — Reconhecimento da União Europeia como organismo internacional com grau de proteção de dados pessoais adequado",
    organizacao: "ANPD (Gov.br)",
    url: "https://www.in.gov.br/web/dou/-/resolucao-n-32-de-26-de-janeiro-de-2026-683334547",
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: null
  },

  /* CF/1988 — incisos/parágrafos adicionais confirmados no texto integral */
  {
    id: "ref-cf-1988-art37-adicionais-i4",
    titulo: "Constituição Federal de 1988 — art. 37 (incisos e parágrafos adicionais confirmados no texto integral)",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público (CF/1988)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: ["art. 37, I", "art. 37, IV", "art. 37, V", "art. 37, VI", "art. 37, VII", "art. 37, VIII", "art. 37, IX", "art. 37, X", "art. 37, XI", "art. 37, XII", "art. 37, XIII", "art. 37, XIV", "art. 37, XV", "art. 37, XVI", "art. 37, XVII", "art. 37, XVIII", "art. 37, XIX", "art. 37, XX", "art. 37, XXII", "art. 37, § 2º", "art. 37, § 3º, I", "art. 37, § 3º, III", "art. 37, § 5º", "art. 37, § 7º", "art. 37, § 8º", "art. 37, § 9º", "art. 37, § 10", "art. 37, § 11", "art. 37, § 12", "art. 37, § 13", "art. 37, § 14", "art. 37, § 15", "art. 37, § 16"]
  },
  {
    id: "ref-cf-1988-art5-adicionais-i4",
    titulo: "Constituição Federal de 1988 — art. 5º (incisos e parágrafos adicionais confirmados no texto integral)",
    organizacao: "Planalto (Presidência da República)",
    url: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    topico: "M6 — Ética e responsabilidade digital no serviço público (CF/1988)",
    dataVerificacao: "2026-10-24",
    status: "verificado",
    dispositivos: ["art. 5º, I", "art. 5º, II", "art. 5º, III", "art. 5º, IV", "art. 5º, V", "art. 5º, VI", "art. 5º, VII", "art. 5º, VIII", "art. 5º, IX", "art. 5º, XI", "art. 5º, XIII", "art. 5º, XV", "art. 5º, XVI", "art. 5º, XVII", "art. 5º, XVIII", "art. 5º, XIX", "art. 5º, XX", "art. 5º, XXI", "art. 5º, XXII", "art. 5º, XXIII", "art. 5º, XXIV", "art. 5º, XXV", "art. 5º, XXVI", "art. 5º, XXVII", "art. 5º, XXVIII", "art. 5º, XXIX", "art. 5º, XXX", "art. 5º, XXXI", "art. 5º, XXXII", "art. 5º, XXXIV", "art. 5º, XXXV", "art. 5º, XXXVI", "art. 5º, XXXVII", "art. 5º, XXXVIII", "art. 5º, XXXIX", "art. 5º, XL", "art. 5º, LXXVIII", "art. 5º, § 1º", "art. 5º, § 2º", "art. 5º, § 3º", "art. 5º, § 4º"]
  },
  {
    id: "ref-nist-genai-profile-2024",
    titulo: "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)",
    organizacao: "National Institute of Standards and Technology (NIST)",
    url: "https://doi.org/10.6028/NIST.AI.600-1",
    topico: "M5 — IA generativa (confabulação/alucinação e gestão de riscos)",
    dataVerificacao: "2026-10-26",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-google-cloud-grounding",
    titulo: "Design chat prompts — Grounding",
    organizacao: "Google Cloud",
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/chat/chat-prompts",
    topico: "M5 — IA generativa (fundamentação por contexto recuperado)",
    dataVerificacao: "2026-10-26",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-secom-guia-redes-sociais-governo-federal",
    titulo: "Guia de Boas Práticas para atuação de redes sociais do Governo Federal",
    organizacao: "Secretaria de Comunicação Social da Presidência da República (Secom)",
    url: "https://www.gov.br/secom/pt-br/central-de-conteudo/redes/2023_secom_guia-boaspraticas_redes.pdf",
    topico: "M6 — Comunicação e conduta digital (redes sociais institucionais)",
    dataVerificacao: "2026-10-26",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-w3c-wcag-22",
    titulo: "Web Content Accessibility Guidelines (WCAG) 2.2",
    organizacao: "W3C",
    url: "https://www.w3.org/TR/WCAG22/",
    topico: "M3 — Comunicação e colaboração (acessibilidade digital)",
    dataVerificacao: "2026-10-26",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-saito-rehmsmeier-precision-recall-2015",
    titulo: "The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets",
    organizacao: "PLOS ONE",
    url: "https://doi.org/10.1371/journal.pone.0118432",
    topico: "M5 — Aprendizado de máquina (métricas de classificação em classes desbalanceadas)",
    dataVerificacao: "2026-10-26",
    status: "verificado",
    dispositivos: null
  },
  {
    "id": "ref-rfc-1122-host-requirements",
    "titulo": "RFC 1122 — Requirements for Internet Hosts: Communication Layers",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc1122.html",
    "topico": "M2 — Redes (arquitetura da Internet e hosts)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-1112-ip-multicast",
    "titulo": "RFC 1112 — Host Extensions for IP Multicasting",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc1112.html",
    "topico": "M2 — Redes (multicast IPv4)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-4291-ipv6-addressing",
    "titulo": "RFC 4291 — IP Version 6 Addressing Architecture",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc4291.html",
    "topico": "M2 — Redes (unicast, anycast, multicast e endereçamento IPv6)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-4632-cidr",
    "titulo": "RFC 4632 — Classless Inter-domain Routing (CIDR)",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc4632.html",
    "topico": "M2 — Redes (CIDR e prefixos IPv4)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-8314-email-tls",
    "titulo": "RFC 8314 — Cleartext Considered Obsolete: TLS for Email Submission and Access",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc8314.html",
    "topico": "M3 — Comunicação (TLS e portas SMTP/POP3/IMAP)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-9051-imap4rev2",
    "titulo": "RFC 9051 — Internet Message Access Protocol (IMAP) Version 4rev2",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc9051.html",
    "topico": "M3 — Comunicação (IMAP)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-1939-pop3",
    "titulo": "RFC 1939 — Post Office Protocol Version 3 (POP3)",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc1939.html",
    "topico": "M3 — Comunicação (POP3)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-5322-message-format",
    "titulo": "RFC 5322 — Internet Message Format",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc5322.html",
    "topico": "M3 — Comunicação (cabeçalhos e destinatários de e-mail)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-7208-spf",
    "titulo": "RFC 7208 — Sender Policy Framework (SPF)",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc7208.html",
    "topico": "M3 — Comunicação (autenticação de e-mail SPF)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-6376-dkim",
    "titulo": "RFC 6376 — DomainKeys Identified Mail (DKIM) Signatures",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc6376.html",
    "topico": "M3 — Comunicação (autenticação de e-mail DKIM)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-rfc-9989-dmarc",
    "titulo": "RFC 9989 — Domain-Based Message Authentication, Reporting, and Conformance (DMARC)",
    "organizacao": "IETF / RFC Editor",
    "url": "https://www.rfc-editor.org/rfc/rfc9989.html",
    "topico": "M3 — Comunicação (DMARC; substitui RFC 7489 e RFC 9091)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-cisco-lan",
    "titulo": "What Is a LAN? Local Area Network",
    "organizacao": "Cisco",
    "url": "https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-lan-local-area-network.html",
    "topico": "M2 — Redes (LAN, cliente-servidor e peer-to-peer)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-cisco-wan",
    "titulo": "What Is a WAN? Wide-Area Network",
    "organizacao": "Cisco",
    "url": "https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-wan-wide-area-network.html",
    "topico": "M2 — Redes (WAN, interconexão e comutação de pacotes)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-cisco-networking",
    "titulo": "What Is Computer Networking?",
    "organizacao": "Cisco",
    "url": "https://www.cisco.com/site/us/en/learn/topics/networking/what-is-computer-networking.html",
    "topico": "M2 — Redes (tipos e componentes de redes)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-cisco-topology",
    "titulo": "What Is Network Topology?",
    "organizacao": "Cisco",
    "url": "https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-topology.html",
    "topico": "M2 — Redes (topologia física/lógica, redundância e pontos de falha)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-cisco-low-latency",
    "titulo": "What Is Low Latency?",
    "organizacao": "Cisco",
    "url": "https://www.cisco.com/site/us/en/learn/topics/cloud-networking/what-is-low-latency.html",
    "topico": "M2 — Redes (latência e jitter)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-cisa-phishing",
    "titulo": "Secure Our World — Recognize and Report Phishing",
    "organizacao": "Cybersecurity and Infrastructure Security Agency (CISA)",
    "url": "https://www.cisa.gov/be-cyber-smart/report-incident",
    "topico": "M3 — Comunicação (phishing e mensagens suspeitas)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-google-meet-host-controls",
    "titulo": "Gerenciar os controles do anfitrião no Google Meet",
    "organizacao": "Google Meet Help",
    "url": "https://support.google.com/meet/answer/16229038?co=GENIE.Platform%3DDesktop&hl=pt-br",
    "topico": "M3 — Comunicação (controle de participantes e moderação)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-google-meet-recording",
    "titulo": "Gravar uma videochamada",
    "organizacao": "Google Meet Help",
    "url": "https://support.google.com/meet/answer/9308681?co=GENIE.Platform%3DDesktop&hl=pt-br",
    "topico": "M3 — Comunicação (gravação de reuniões e consentimento)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-onedrive-version-history",
    "titulo": "Restaurar uma versão anterior de um ficheiro armazenado no OneDrive",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive?ad=br&rs=pt-br&ui=pt-br",
    "topico": "M1 — Microsoft 365 (histórico de versões)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-onedrive-safeguards",
    "titulo": "Como o OneDrive protege seus dados na nuvem",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/onedrive/how-onedrive-safeguards-your-data-in-the-cloud",
    "topico": "M1 — Microsoft 365 (proteção de dados, links e histórico de versões)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-onedrive-ransomware",
    "titulo": "Como detectar ransomware e recuperar arquivos usando o OneDrive",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/onedrive/how-to-detect-ransomware-and-recover-files-using-onedrive",
    "topico": "M1 — Microsoft 365 (detecção/recuperação de ransomware)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-word-cross-reference",
    "titulo": "Criar uma referência cruzada",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/word/create-a-cross-reference",
    "topico": "M1 — Microsoft 365 (Word: campos e referências cruzadas)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-word-compare-merge",
    "titulo": "Comparar e mesclar duas versões de um documento",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/word/compare-and-merge-two-versions-of-a-document",
    "topico": "M1 — Microsoft 365 (Word: revisão e comparação de documentos)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-word-read-only",
    "titulo": "Tornar um documento somente leitura no Word",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/word/make-a-document-read-only-in-word",
    "topico": "M1 — Microsoft 365 (Word: proteção e restrição de edição)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-word-lists",
    "titulo": "Criar uma lista numerada ou com marcadores",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/word/training/create-a-bulleted-or-numbered-list",
    "topico": "M1 — Microsoft 365 (Word: listas)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-word-tab-stops",
    "titulo": "Inserir ou adicionar paradas de tabulação no Word",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/word/insert-or-add-tab-stops",
    "topico": "M1 — Microsoft 365 (Word: tabulações)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-word-accessibility",
    "titulo": "Tornar documentos do Word acessíveis com o Assistente de Acessibilidade",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/accessibility/word/make-your-word-documents-accessible-to-everyone-with-accessibility-assistant",
    "topico": "M1 — Microsoft 365 (Word: acessibilidade)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-powerpoint-slide-master",
    "titulo": "Personalizar um slide mestre",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/powerpoint/training/customize-a-slide-master",
    "topico": "M1 — Microsoft 365 (PowerPoint: slide mestre)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-powerpoint-transitions",
    "titulo": "Adicionar, alterar ou remover transições entre slides",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/powerpoint/training/add-change-or-remove-transitions-between-slides",
    "topico": "M1 — Microsoft 365 (PowerPoint: transições)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-powerpoint-animation",
    "titulo": "Animações e transições para o PowerPoint na Web",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/powerpoint/training/video-animations-and-transitions-for-powerpoint-web",
    "topico": "M1 — Microsoft 365 (PowerPoint: animações e transições)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-powerpoint-pdf",
    "titulo": "Salvar apresentações do PowerPoint como arquivos PDF",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/powerpoint/training/save-powerpoint-presentations-as-pdf-files",
    "topico": "M1 — Microsoft 365 (PowerPoint: exportação para PDF)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-excel-xlookup",
    "titulo": "Função PROCX",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/excel/functions/xlookup-function",
    "topico": "M1 — Microsoft 365 (Excel: PROCX)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-excel-if",
    "titulo": "SE (Função SE)",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/excel/functions/if-function",
    "topico": "M1 — Microsoft 365 (Excel: função SE)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-outlook-calendar-sharing",
    "titulo": "Compartilhamento de calendários no Microsoft 365",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/outlook/calendar-sharing-in-microsoft-365",
    "topico": "M3 — Comunicação (calendários e permissões)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-outlook-time-zones",
    "titulo": "Gerenciar configurações de fuso horário no Outlook",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/outlook/getstarted/manage-time-zone-settings-in-outlook",
    "topico": "M3 — Comunicação (reuniões e fusos horários)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-teams-calendar",
    "titulo": "Introdução ao calendário do Microsoft Teams",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/teams/meetings/get-started-with-the-microsoft-teams-calendar",
    "topico": "M3 — Comunicação (integração Teams/Microsoft 365)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-teams-recording",
    "titulo": "Reproduzir, compartilhar e baixar gravações de reuniões no Microsoft Teams",
    "organizacao": "Microsoft Support",
    "url": "https://support.microsoft.com/pt-br/teams/meetings/play-share-and-download-meeting-recordings-in-microsoft-teams",
    "topico": "M3 — Comunicação (gravação de reuniões)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },,
  {
    "id": "ref-cisco-10gbase-t-cat6-cat6a",
    "titulo": "Cisco Catalyst 6500 16-Port 10 Gigabit Ethernet Copper Module",
    "organizacao": "Cisco",
    "url": "https://www.cisco.com/c/en/us/products/interfaces-modules/catalyst-6500-16-port-10-gigabit-ethernet-copper-module/index.html",
    "topico": "M2 — Redes (Ethernet 10GBASE-T e alcance de cabeamento)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-zoom-webinar-capacity",
    "titulo": "Comparação entre licenças para reuniões e webinars",
    "organizacao": "Zoom Support",
    "url": "https://support.zoom.com/hc/pb/article?id=zm_kb&sysparm_article=KB0062412",
    "topico": "M3 — Comunicação (capacidade e licenciamento de webinars)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-zoom-webinar-breakout-rooms",
    "titulo": "Managing webinar breakout rooms",
    "organizacao": "Zoom Support",
    "url": "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057838",
    "topico": "M3 — Comunicação (salas paralelas em webinars e requisitos)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  },
  {
    "id": "ref-google-meet-browser-requirements",
    "titulo": "Saiba quais requisitos você precisa para usar o Google Meet",
    "organizacao": "Google Meet Help",
    "url": "https://support.google.com/meet/answer/7317473?hl=pt-BR",
    "topico": "M3 — Comunicação (reuniões pelo navegador)",
    "dataVerificacao": "2026-10-26",
    "status": "verificado",
    "dispositivos": null
  }
];
if (typeof window !== 'undefined') window.references = references;
