const enriParcialM2U2P5 = {
 "m2-u2-t3-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "Conexões persistentes (keep-alive), cache HTTP e compressão são as técnicas que tornam a navegação web rápida: reutilizam a mesma conexão TCP, evitam viagens ao servidor e reduzem o tamanho dos corpos transferidos. Em provas de redes, o gabarito costuma explorar justamente esses efeitos — latência, carga do servidor e conteúdo desatualizado servido por cache mal configurado. Saber quando cada técnica ajuda ou prejudica é o diferencial da questão.",
   "preRequisitos": ["HTTP/HTTPS e porta padrão", "TCP e handshake de três vias"],
   "objetivosObservaveis": ["Explicar como o keep-alive reutiliza uma conexão TCP para múltiplas requisições HTTP", "Descrever o cache controlado por cabeçalhos Cache-Control, ETag, Last-Modified e Expires", "Citar o efeito da compressão gzip/brotli no tamanho do corpo transferido", "Reconhecer limitações: cache desatualizado, custo do keep-alive, compactar já compactado"],
   "competencias": ["Análise de desempenho web", "Configuração de política de cache HTTP"],
   "dificuldade": "intermediario",
   "relacoes": ["m2-u2-t3-s1 (Exemplo de requisição HTTP completa)", "m2-u3-t2-s1 (HTTP e HTTPS: finalidade, fluxo e portas)"],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Classificação qualitativa média como estimativa pedagógica de adequação ao conteúdo programático. Cabeçalhos de cache e keep-alive integram itens de redes, especialmente em cenários de desempenho e conteúdo desatualizado."
   }
  },
  "niveis": {
   "iniciante": "HTTP/1.0 abria uma conexão TCP nova para cada recurso (imagem, estilo, script), repetindo o handshake de cada requisição. O HTTP/1.1 introduziu conexões persistentes (keep-alive), reutilizando a mesma conexão TCP para várias requisições, o que reduz a latência. O cache HTTP guarda respostas no cliente ou em proxies intermediários, controlado por cabeçalhos como Cache-Control, ETag, Last-Modified e Expires: se o recurso ainda é válido, não é preciso ir ao servidor. A compressão (gzip ou brotli) diminui o tamanho do corpo transferido.",
   "intermediario": "O keep-alive elimina múltiplos handshakes TCP e slow starts, mas consome recursos do servidor (conexões abertas por mais tempo). O cache acelera e alivia o servidor, porém pode servir conteúdo desatualizado se a política de validade estiver mal definida; a revalidação usa ETag ou Last-Modified. A compressão reduz o payload, mas compactar conteúdo já comprimido (imagens JPEG/PNG) desperdiça processamento. O desempenho vem do equilíbrio dessas técnicas, não de uma só, e exige política de cache coerente com o tipo de conteúdo servido.",
   "avancado": "O HTTP/2 multiplexa vários fluxos sobre uma única conexão TCP, evitando o bloqueio de linha de cabeça (head-of-line blocking) do HTTP/1.1. O HTTP/3 baseia-se em QUIC, transporte sobre UDP, reduzindo o tempo de estabelecimento da conexão e a recuperação de perdas. Essas versões exigem suporte tanto do cliente quanto do servidor. A escolha da política de cache — máximo de idade, revalidação ou não armazenamento — determina se o usuário recebe conteúdo atualizado ou obsoleto.",
   "especialista": "A política de cache deve diferenciar conteúdo estático (imagens, CSS, JS, com longos max-age e cache agressivo) de conteúdo dinâmico (JSON de API, páginas personalizadas, com no-cache ou revalidação frequente). O keep-alive deve ser dimensionado pelo número de conexões simultâneas do servidor para não esgotar descritores de arquivo. A compressão deve ser aplicada apenas a textos (HTML, CSS, JS, JSON), nunca a binários já comprimidos. O HTTP/3 melhora a latência em redes com perda de pacotes, mas depende de suporte UDP em firewalls e intermediários."
  },
  "comparacoes": [
   {
    "tema": "HTTP/1.0 vs HTTP/1.1",
    "a": { "rotulo": "HTTP/1.0", "texto": "Abre uma nova conexão TCP para cada recurso, repetindo o handshake e o slow start de cada requisição." },
    "b": { "rotulo": "HTTP/1.1", "texto": "Usa conexões persistentes (keep-alive), reutilizando a mesma conexão TCP para múltiplas requisições, reduzindo latência." },
    "diferencaGabarito": "A diferença é a reutilização da conexão TCP: no HTTP/1.0 cada recurso custa um handshake novo; no HTTP/1.1 um único handshake atende vários recursos."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Cache HTTP sempre serve o conteúdo mais recente.",
    "porqueErrada": "O cache guarda a resposta dentro do seu tempo de vida (TTL); se o servidor atualizou o recurso, o cliente pode continuar recebendo a versão antiga até expirar ou revalidar com ETag/Last-Modified.",
    "versaoCorreta": "O cache serve conteúdo válido dentro do TTL; conteúdo atualizado só chega após expiração ou revalidação bem-sucedida."
   },
   {
    "afirmacaoEquivocada": "Compressão reduz o tamanho de qualquer arquivo, inclusive imagens já comprimidas.",
    "porqueErrada": "Imagens como JPEG e PNG já estão comprimidas; aplicar gzip ou brotli nelas não gera ganho e ainda consome processamento do servidor e do cliente.",
    "versaoCorreta": "A compressão é vantajosa para textos (HTML, CSS, JS, JSON), não para conteúdos binários já comprimidos."
   },
   {
    "afirmacaoEquivocada": "HTTP/2 elimina completamente a necessidade de múltiplas conexões TCP.",
    "porqueErrada": "HTTP/2 multiplexa vários fluxos sobre uma única conexão TCP, reduzindo o número de conexões, mas continua usando TCP como transporte; não elimina o TCP em si.",
    "versaoCorreta": "HTTP/2 reduz o número de conexões TCP por meio da multiplexação, mas segue sobre TCP; é o HTTP/3 que migra o transporte para QUIC sobre UDP."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["keep-alive (conexão persistente)", "cache HTTP (Cache-Control, ETag, Last-Modified, Expires)", "compressão (gzip, brotli)", "HTTP/2 (multiplexação)", "HTTP/3 (QUIC sobre UDP)"],
   "regras": ["Menos handshakes + cache válido + compressão = menor latência", "Não comprimir conteúdo já comprimido (imagens JPEG/PNG)", "Revalidar cache com ETag ou Last-Modified antes de servir conteúdo armazenado"],
   "comparacoes": ["HTTP/1.0 sem keep-alive gera mais handshakes que o HTTP/1.1 com keep-alive"],
   "fluxos": ["Requisição HTTP → uso de conexão persistente → verificação de cache → compressão do corpo → resposta ao cliente"],
   "excecoes": ["Cache mal configurado pode servir conteúdo desatualizado ao invés da versão mais recente"],
   "palavrasChave": ["persistência", "validade", "multiplexação", "UDP", "desempenho", "TTL"],
   "checklist": ["Explico o que é keep-alive?", "Descrevo o cache e seus cabeçalhos?", "Cito a compressão gzip/brotli?", "Reconheço as limitações de cada técnica?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Por que HTTP/1.1 carrega uma página com dez imagens mais rápido que HTTP/1.0 para o mesmo usuário?",
    "dados": "Página com HTML mais dez imagens; HTTP/1.0 abre onze conexões TCP separadas, HTTP/1.1 reutiliza uma única conexão persistente (keep-alive).",
    "conceitos": ["keep-alive", "handshake TCP"],
    "estrategia": "Comparar o número de handshakes TCP: HTTP/1.0 exige um por recurso, HTTP/1.1 usa apenas um para todos os recursos da mesma página.",
    "execucao": ["O navegador abre uma conexão TCP com o servidor (handshake)", "Requisita o HTML e as dez imagens sobre essa mesma conexão persistente", "O servidor envia todas as respostas sem fechar a conexão entre elas", "Mede-se a economia de handshakes: onze no HTTP/1.0 contra um no HTTP/1.1"],
    "resultado": "HTTP/1.1 evita dez handshakes TCP adicionais, reduzindo a latência total de carregamento da página.",
    "justificativa": "Cada handshake TCP adiciona ida e volta (round-trip) antes de enviar a requisição; ao reutilizar a conexão, o HTTP/1.1 elimina essa repetição para os recursos seguintes, o que explica a página mais rápida.",
    "errosFrequentes": ["Acreditar que o keep-alive elimina o TCP — ele apenas reutiliza a conexão TCP existente", "Contar apenas o download das imagens e ignorar o custo de estabelecimento de cada conexão"],
    "variacao": "Se a página tivesse vinte imagens, HTTP/1.0 exigiria vinte e um handshakes contra um no HTTP/1.1, ampliando ainda mais a diferença de latência."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um navegador recebe a resposta com o cabeçalho Cache-Control: max-age=3600. Por quanto tempo pode reutilizar o recurso sem consultar o servidor?",
    "dados": "Cabeçalho recebido: Cache-Control: max-age=3600; recurso é uma folha de estilos CSS; cliente é um navegador com cache habilitado.",
    "conceitos": ["cache HTTP", "Cache-Control / max-age"],
    "estrategia": "Interpretar max-age em segundos: o valor indica o tempo máximo em que o cliente pode reutilizar a resposta em cache sem revalidar com o servidor.",
    "execucao": ["Identificar o cabeçalho Cache-Control na resposta HTTP", "Ler o valor de max-age: 3600 segundos", "Converter 3600 segundos em uma hora", "Concluir que o navegador reutiliza o CSS em cache por até uma hora sem nova requisição"],
    "resultado": "O navegador pode reutilizar o recurso do cache por 3600 segundos (uma hora) sem revalidar no servidor.",
    "justificativa": "max-age define o tempo de vida do cache em segundos; 3600 segundos equivalem a uma hora, período durante o qual a resposta é considerada fresca e servida diretamente do cache local.",
    "errosFrequentes": ["Interpretar 3600 como 3600 milissegundos em vez de segundos", "Achar que o recurso expira exatamente ao fim do período e deixa de funcionar, em vez de apenas exigir revalidação"],
    "variacao": "Se o cabeçalho fosse Cache-Control: max-age=7200, o navegador poderia reutilizar o recurso por duas horas sem consultar o servidor."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: 'Cache HTTP sempre serve o conteúdo mais recente do servidor, sem exceção.'",
    "dados": "Recurso em cache com max-age=3600 ainda válido; servidor publica uma versão atualizada do mesmo recurso antes do TTL expirar.",
    "conceitos": ["cache HTTP", "validade / TTL", "revalidação (ETag, Last-Modified)"],
    "estrategia": "Avaliar se o cache garante atualidade: o cache serve a cópia armazenada enquanto estiver dentro do TTL, independentemente de mudanças no servidor.",
    "execucao": ["Verificar que a cópia em cache ainda não expirou (dentro do max-age)", "Observar que o servidor já publicou uma versão mais recente", "Concluir que o cliente recebe a versão antiga do cache, não a mais recente", "Identificar que apenas expiração do TTL ou revalidação (ETag/Last-Modified) traria a versão nova"],
    "resultado": "Errado: enquanto o cache estiver válido, o cliente recebe a versão armazenada, que pode estar desatualizada em relação ao servidor.",
    "justificativa": "O cache prioriza a validade do TTL sobre a atualidade do servidor; somente após a expiração ou uma revalidação bem-sucedida com ETag/Last-Modified o cliente obtém a versão mais recente.",
    "errosFrequentes": ["Confundir 'tem cache' com 'sempre mostra o mais recente'", "Esquecer que a revalidação só acontece após expiração ou solicitação explícita de validação"],
    "variacao": "Se o servidor enviasse Cache-Control: no-cache, o navegador teria de revalidar a cada acesso, garantindo que nunca sirva conteúdo desatualizado sem consultar o servidor."
   }
  ]
 }
};
