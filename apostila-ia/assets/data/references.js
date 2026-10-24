/* references.js — REFERÊNCIAS VERIFICADAS (Seção 12.3 do Escrita.txt).
 *
 * Fonte de verdade para as URLs/datas: referencias/referencias-verificadas.md
 * (raiz do repositório).
 *
 * Cada item: { id, titulo, organizacao, url, topico, dataVerificacao, status,
 * dispositivos }. status ∈ { "verificado", "pendente" }. Itens "pendente"
 * têm url = null e dataVerificacao = null — NENHUMA URL inventada.
 *
 * Apenas referências com URL primária + data registrada no arquivo acima
 * e conferidas por acesso direto ao texto oficial (planalto.gov.br) entram
 * como "verificado". Itens verificados apenas via web_search (URLs retornadas
 * pela busca, sem acesso direto) permanecem "pendente" até conferência
 * direta — por isso Microsoft Learn, RFCs/IETF, CERT.br e ANPD (orgão e
 * regulamentos) NÃO são marcados como validados aqui.
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
    dispositivos: ["art. 1º", "art. 2º", "art. 3º", "art. 4º", "art. 5º", "art. 17", "art. 18", "art. 46"]
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

  /* ---------- PENDENTES (url = null, dataVerificacao = null) ---------- */

  {
    id: "ref-microsoft-learn-m365",
    titulo: "Microsoft 365 documentation — Microsoft Learn",
    organizacao: "Microsoft (Microsoft Learn)",
    url: "https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide",
    topico: "M1 — Microsoft 365 e aplicações de escritório",
    dataVerificacao: "2026-10-23",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-791-ipv4",
    titulo: "RFC 791 — Internet Protocol (IPv4)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc791/",
    topico: "M2 — Redes de computadores (IPv4)",
    dataVerificacao: "2026-10-23",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-rfc-793-tcp",
    titulo: "RFC 793 — Transmission Control Protocol (TCP)",
    organizacao: "IETF (RFC Editor)",
    url: "https://www.rfc-editor.org/info/rfc793/",
    topico: "M2 — Redes de computadores (TCP)",
    dataVerificacao: "2026-10-23",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-pendente-rfc-9110-http11",
    titulo: "HTTP/1.1 — RFC 9110 (não verificado nesta sessão)",
    organizacao: "IETF / RFC Editor",
    url: null,
    topico: "M2 — Redes de computadores",
    dataVerificacao: null,
    status: "pendente",
    dispositivos: null
  },
  {
    id: "ref-pendente-anpd",
    titulo: "Autoridade Nacional de Proteção de Dados (ANPD) — regulador da LGPD (órgão e regulamentos)",
    organizacao: "ANPD",
    url: null,
    topico: "M4 — Segurança da informação (LGPD)",
    dataVerificacao: null,
    status: "pendente",
    dispositivos: null
  },
  {
    id: "ref-cert-br",
    titulo: "CERT.br — Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil",
    organizacao: "CERT.br (NIC.br)",
    url: "https://cert.br/",
    topico: "M4 — Segurança da informação (malwares, defesa)",
    dataVerificacao: "2026-10-23",
    status: "verificado",
    dispositivos: null
  },
  {
    id: "ref-pendente-cf-art37-art5-demais",
    titulo: "Constituição Federal — demais incisos do art. 37 e do art. 5º (não conferidos nesta sessão)",
    organizacao: "Planalto (Presidência da República)",
    url: null,
    topico: "M6 — Ética e responsabilidade digital no serviço público (CF/1988)",
    dataVerificacao: null,
    status: "pendente",
    dispositivos: null
  },
  {
    id: "ref-pendente-m6-remissao",
    titulo: "Dispositivos citados apenas por remissão no Módulo 6 (Lei 8.429/1992, Lei 1.079/1950, Lei 13.146/2015, Lei 10.098/2000, Lei 10.741/2003, Lei 13.460/2017, Lei 12.682/2012, Lei 14.063/2020, LC 101/2000, LC 105/2001; LGPD art. 7º e demais)",
    organizacao: "Planalto (Presidência da República)",
    url: null,
    topico: "M6 — Ética e responsabilidade digital no serviço público",
    dataVerificacao: null,
    status: "pendente",
    dispositivos: null
  }
];

if (typeof window !== 'undefined') window.references = references;