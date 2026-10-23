/* ==========================================================================
 * Simulador Redes — Módulo 2 (Seção 7.2 da Escrita.txt)
 * Apostila Web Interativa FCN — incremental, sem build, compatível com file://
 * ==========================================================================
 *
 * ESTE ARQUIVO É
 *   (a) O NÚCLEO já existente: ping (ICMP simulado), traceroute (TTL simulado)
 *       e calcularCIDR (cálculo REAL de sub-redes IPv4). NÃO executa comandos
 *       reais no sistema operacional. (b) A UI declarativa via mount(el) —
 *       idempotente, sem eval/fetch/import/CDN, funciona em file://.
 *
 * NÚCLEO (preservado) — Escopo documentado no header original:
 *   - ping: latências/filtros fictícios (SIMULAÇÃO DIDÁTICA).
 *   - traceroute: saltos fictícios (SIMULAÇÃO DIDÁTICA).
 *   - calcularCIDR: cálculo REAL (binário IP AND máscara; rede/broadcast/hosts).
 *
 * UI DO SIMULADOR (Seção 7.2):
 *   - Resolução de DNS simulada (tabela estática local — sem consulta real).
 *   - Calculadora IPv4/CIDR (consome calcularCIDR — cálculo real).
 *   - ping simulado (consome ping — valores fictícios).
 *   - traceroute simulado (consome traceroute — valores fictícios).
 *   - Visualização de encapsulamento (5 camadas OSI + protocolos — didática).
 *   - Simulação de rotas/portas/falhas (tabela fixa de topologia fictícia).
 *   Deixe explícito que é simulação didática e não executa comandos no SO.
 *
 * AUTO-CONTIDO: injeta <style> escopado por .sim-redes via innerHTML; o
 * destroy limpa o container. Não toca em assets/css/styles.css nem index.html.
 * Todo texto do aluno passa por esc() antes de innerHTML; saídas dinâmicas
 * usam textContent. mount não lança se o container faltar ou se já montado.
 *
 * VERIFICADO: node --check + smoke test em Node (mount(null) e mount(fakeEl)
 * não lançam; retornam { destroy }).
 * ========================================================================== */
(function (global) {
  'use strict';

  /* Escapa TODOS os caracteres perigosos para HTML (mesma convenção do
   * flashcards.js / charts.js / simulators.js). Nenhuma dependência externa. */
  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Idempotência: não re-montra no mesmo container. */
  var networkMontados = (typeof WeakSet !== 'undefined') ? new WeakSet() :
    { has: function () { return false; }, add: function () { return true; }, 'delete': function () { return true; } };

  /* ------------------------------------------------------------------
   * Núcleo real (preservado) — NÃO executa comandos no SO.
   * ------------------------------------------------------------------ */
  function _ping(destino, count) {
    if (!destino || typeof destino !== 'string') return 'ERRO: destino deve ser um hostname ou endereço IP válido.';
    count = count || 4;
    var resultados = [];
    for (var i = 1; i <= count; i++) {
      var latencia = Math.floor(Math.random() * 190) + 10; // 10-200ms
      var ttl = 64 - Math.floor(Math.random() * 5); // ~60-64
      resultados.push({ seq: i, resposta: destino + ': bytes=32 tempo=' + latencia + 'ms TTL=' + ttl, latencia: latencia });
    }
    var latencias = resultados.map(function (r) { return r.latencia; });
    return {
      destino: destino, pacotes_enviados: count, pacotes_recebidos: count, pacotes_perdidos: 0, perda_percent: '0%',
      latencia_min: Math.min.apply(null, latencias), latencia_max: Math.max.apply(null, latencias),
      latencia_media: Math.floor(latencias.reduce(function (a, b) { return a + b; }, 0) / latencias.length),
      detalhes: resultados, observacao: 'SIMULAÇÃO — valores fictícios para fins didáticos. Não reflete rede real.'
    };
  }

  function _traceroute(destino, maxSaltos) {
    if (!destino || typeof destino !== 'string') return 'ERRO: destino deve ser um hostname ou endereço IP válido.';
    maxSaltos = maxSaltos || 15;
    var saltos = [];
    var numSaltos = Math.floor(Math.random() * 8) + 5; // 5-12 saltos
    for (var i = 1; i <= numSaltos; i++) {
      var ip = (Math.floor(Math.random() * 200) + 10) + '.' + (Math.floor(Math.random() * 255)) + '.' + (Math.floor(Math.random() * 255)) + '.' + (Math.floor(Math.random() * 255) + 1);
      var latencia = Math.floor(Math.random() * 50) + (i * 5);
      saltos.push({ salto: i, ip: ip, latencia: latencia + 'ms', observacao: i === numSaltos ? 'destino alcançado' : 'roteador intermediário' });
    }
    return { destino: destino, saltos: saltos, total_saltos: numSaltos, observacao: 'SIMULAÇÃO — IPs e latências fictícios. traceroute real usa TTL incremental e ICMP Time Exceeded.' };
  }

  function _calcularCIDR(ip, mascara) {
    if (!ip || !mascara) return 'ERRO: informe IP e máscara (ex: 192.168.1.0/24 ou IP + 255.255.255.0).';
    var prefixo;
    if (mascara.indexOf('/') === 0) {
      prefixo = parseInt(mascara.substring(1), 10);
    } else if (mascara.indexOf('.') !== -1) {
      var octetos = mascara.split('.').map(Number);
      var binario = octetos.map(function (o) { return o.toString(2).padStart(8, '0'); }).join('');
      prefixo = binario.split('').filter(function (b) { return b === '1'; }).length;
    } else {
      return 'ERRO: máscara deve ser notação CIDR (/24) ou decimal (255.255.255.0).';
    }
    if (prefixo < 0 || prefixo > 32) return 'ERRO: prefixo deve estar entre 0 e 32.';
    var ipOctetos = ip.split('.').map(Number);
    if (ipOctetos.length !== 4 || ipOctetos.some(function (o) { return isNaN(o) || o < 0 || o > 255; })) return 'ERRO: IP inválido. Use formato x.x.x.x (0-255).';
    var ipBinario = ipOctetos.map(function (o) { return o.toString(2).padStart(8, '0'); }).join('');
    var redeBinario = ipBinario.substring(0, prefixo).padEnd(32, '0');
    var broadcastBinario = ipBinario.substring(0, prefixo).padEnd(32, '1');
    var binParaIp = function (bin) { return bin.match(/.{8}/g).map(function (b) { return parseInt(b, 2); }).join('.'); };
    var rede = binParaIp(redeBinario);
    var broadcast = binParaIp(broadcastBinario);
    var totalHosts = Math.pow(2, 32 - prefixo);
    return {
      ip: ip, mascara_decimal: binParaIp('1'.repeat(prefixo).padEnd(32, '0')), prefixo: prefixo,
      endereco_rede: rede, endereco_broadcast: broadcast,
      primeiro_host: binParaIp(redeBinario.slice(0, 31) + '1'), ultimo_host: binParaIp(broadcastBinario.slice(0, 31) + '0'),
      total_enderecos: totalHosts, hosts_validos: totalHosts - 2,
      classe: prefixo <= 8 ? 'A' : prefixo <= 16 ? 'B' : 'C',
      observacao: 'CÁLCULO REAL — baseado em operação binária IP AND máscara.'
    };
  }

  /* DNS: tabela estática local (SIMULAÇÃO — sem consulta real ao resolvedor). */
  function dnsResolver(hostname) {
    var tabela = { 'google.com': '8.8.8.8', 'github.com': '140.82.121.4', 'biblioteca.gov.br': '200.142.130.103', 'openai.com': '13.107.136.9', 'chat.openai.com': '34.107.139.105' };
    var k = String(hostname || '').toLowerCase().trim();
    if (Object.prototype.hasOwnProperty.call(tabela, k)) return { ip: tabela[k], origem: 'tabela estática local — SIMULAÇÃO DIDÁTICA de resolução DNS (sem consulta real).' };
    return { erro: 'NXDOMAIN — nome "' + String(hostname) + '" não encontrado na tabela fictícia (simulação).' };
  }

  /* Encapsulamento didático: 5 camadas OSI + protocolos típicos. */
  var encapsulamento = [
    { camada: 1, nome: 'Física', protocolo: '10BASE-T / Wi-Fi (IEEE 802.11)', funcao: 'Transmissão de bits (volts/ondas) pelo meio.' },
    { camada: 2, nome: 'Enlace', protocolo: 'Ethernet (MAC) / PPP / ARP', funcao: 'Quadros entre pares (MAC orig→dest).' },
    { camada: 3, nome: 'Rede', protocolo: 'IP (IPv4/IPv6)', funcao: 'Roteamento de pacotes entre redes (endereços IP).' },
    { camada: 4, nome: 'Transporte', protocolo: 'TCP / UDP', funcao: 'Portas de processo; confiabilidade (TCP) ou rápido (UDP).' },
    { camada: 5, nome: 'Aplicação', protocolo: 'HTTP / DNS / SMTP / SSH', funcao: 'Payload da requisição/resposta do serviço final.' }
  ];

  /* Rotas simuladas (topologia fictícia) — diagnóstico por camadas. */
  var topologia = [
    { origem: '10.0.0.10', destino: '10.0.0.20', saltos: 2, porta: 'Ethernet (porta 1)', status: 'ok' },
    { origem: '10.0.0.10', destino: '192.168.10.5', saltos: 4, porta: 'Wi-Fi (porta 2)', status: 'latência alta' },
    { origem: '172.16.0.8', destino: '10.0.0.20', saltos: 3, porta: 'Ethernet (porta 3)', status: 'perda de pacotes' },
    { origem: '172.16.0.8', destino: '200.142.130.103', saltos: 6, porta: 'VPN túnel', status: 'ok' }
  ];

  var netCss = '<style>' +
    '.sim-redes{max-width:980px;margin:0 auto;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e3e9ff}' +
    '.sim-redes h3{margin:8px 0 2px}.sim-redes h4{margin:16px 0 6px;color:#cdd4de;font-size:1rem}' +
    '.sim-redes-sub{color:#8b94a5;font-size:.85rem;margin:0 0 12px}' +
    '.sim-redes-bloco{background:#1f232c;border:1px solid #333947;border-radius:8px;padding:12px;margin:12px 0}' +
    '.sim-redes-in{width:140px;font-family:Courier New,monospace;font-size:.85rem;background:#1b1e24;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:4px 6px;margin-right:6px}' +
    '.sim-redes-in.small{width:70px}' +
    '.sim-redes-btn{background:#3a4252;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:4px 10px;font-size:.8rem;cursor:pointer}' +
    '.sim-redes-btn:hover{background:#4a5466}' +
    '.sim-redes-out{width:100%;font-family:Courier New,monospace;font-size:.8rem;background:#111318;color:#e3e9ff;border:1px solid #333947;border-radius:4px;padding:6px;white-space:pre-wrap;overflow:auto;min-height:44px;margin-top:6px}' +
    '.sim-redes-ok{color:#5ee0a0}.sim-redes-err{color:#ff7b7b}.sim-redes-aviso{color:#ffd57c;font-size:.8rem}' +
    '.sim-redes-encap th,.sim-redes-encap td{border:1px solid #3a4252;padding:4px 8px;font-size:.82rem}' +
    '.sim-redes-encap th{background:#2a2f3a;color:#cdd4de}.sim-redes-encap td{color:#cdd4de}' +
    '</style>';

  function netSectionDNS() {
    return '<div class="sim-redes-bloco"><h4>Resolução de DNS (simulação)</h4>' +
      '<p>Consulta a uma tabela estática local — sem resolução real via DNS.</p>' +
      '<input id="net-dns-host" type="text" class="sim-redes-in" placeholder="ex.: google.com" value="google.com" />' +
      '<button type="button" class="sim-redes-btn" data-act="net-dns">Resolver</button>' +
      '<pre id="net-dns-out" class="sim-redes-out">—</pre></div>';
  }
  function netSectionCIDR() {
    return '<div class="sim-redes-bloco"><h4>Calculadora IPv4/CIDR (cálculo real)</h4>' +
      '<p>Informe IP e máscara — cálculo binário IP AND máscara (rede, broadcast, hosts).</p>' +
      '<input id="net-cidr-ip" type="text" class="sim-redes-in" placeholder="ex.: 192.168.1.10" value="192.168.1.10" />' +
      '<input id="net-cidr-mask" type="text" class="sim-redes-in small" placeholder="ex.: /24 ou 255.255.255.0" value="/24" />' +
      '<button type="button" class="sim-redes-btn" data-act="net-cidr">Calcular</button>' +
      '<pre id="net-cidr-out" class="sim-redes-out">—</pre></div>';
  }
  function netSectionPing() {
    return '<div class="sim-redes-bloco"><h4>Ping (ICMP simulado)</h4>' +
      '<p>Eco simulado — latências e TTL são valores fictícios (não executa ICMP real).</p>' +
      '<input id="net-ping-host" type="text" class="sim-redes-in" placeholder="ex.: 8.8.8.8" value="8.8.8.8" />' +
      '<input id="net-ping-count" type="number" class="sim-redes-in small" min="1" max="20" value="4" />' +
      '<button type="button" class="sim-redes-btn" data-act="net-ping">Enviar</button>' +
      '<pre id="net-ping-out" class="sim-redes-out">—</pre></div>';
  }
  function netSectionTraceroute() {
    return '<div class="sim-redes-bloco"><h4>Traceroute (TTL simulado)</h4>' +
      '<p>Saltos fictícios por camada — traceroute real usa TTL incremental e ICMP Time Exceeded.</p>' +
      '<input id="net-tr-host" type="text" class="sim-redes-in" placeholder="ex.: 1.1.1.1" value="1.1.1.1" />' +
      '<button type="button" class="sim-redes-btn" data-act="net-traceroute">Rastrear</button>' +
      '<pre id="net-tr-out" class="sim-redes-out">—</pre></div>';
  }
  function netSectionEncap() {
    var linhas = encapsulamento.map(function (e) {
      return '<tr><td>' + esc(e.camada) + '</td><td>' + esc(e.nome) + '</td><td>' + esc(e.protocolo) + '</td><td>' + esc(e.funcao) + '</td></tr>';
    }).join('');
    return '<div class="sim-redes-bloco"><h4>Encapsulamento (visualização didática)</h4><p>Como um pacote HTTP sobe pelas camadas ao sair do host e desce ao chegar ao destino:</p>' +
      '<table class="sim-redes-encap"><thead><tr><th>Camada OSI</th><th>Nome</th><th>Protocolo/tipo</th><th>Função</th></tr></thead><tbody>' + linhas + '</tbody></table>' +
      '<p class="sim-redes-aviso">De cima para baixo (envio): Aplicação→Transporte→Rede→Enlace→Física; de baixo para cima (recepção): física→enlace→rede→transporte→aplicação.</p></div>';
  }
  function netSectionRotas() {
    var opts = topologia.map(function (t) {
      return '<option value="' + esc(t.origem) + '|' + esc(t.destino) + '">' + esc(t.origem) + ' → ' + esc(t.destino) + '</option>';
    }).join('');
    return '<div class="sim-redes-bloco"><h4>Diagnóstico por camadas / rotas (simulação)</h4>' +
      '<p>Selecione origem→destino — rota e estado de porta são simulados (topologia fictícia).</p>' +
      '<select id="net-route-sel" class="sim-redes-in">' + opts + '</select>' +
      '<button type="button" class="sim-redes-btn" data-act="net-route">Diagnosticar</button>' +
      '<pre id="net-route-out" class="sim-redes-out">—</pre></div>';
  }
  function netBuildLimites() {
    var n = (NetworkSimulator.escopo && NetworkSimulator.escopo.operacoes) ? NetworkSimulator.escopo.operacoes.length : 0;
    return '<div class="sim-redes-bloco"><h4>Escopo declarado</h4><p>Este painel consome <code>NetworkSimulator</code>: ' + esc(NetworkSimulator.versaoDeclarada) + '. ' + n + ' operações simuladas/calculadas; veja o contrato no header de <code>assets/js/simulator_network.js</code>.</p></div>';
  }

  function netBuildUI() {
    return '<div class="sim-redes">' +
      '<h3>Simulador de Redes (Seção 7.2)</h3>' +
      '<p class="sim-redes-sub">Cálculo REAL em CIDR (calcularCIDR); ping/traceroute/DNS são <strong>SIMULAÇÕES DIDÁTICAS</strong> — valores fictícios. Não executa comandos no sistema operacional.</p>' +
      netSectionDNS() + netSectionCIDR() + netSectionPing() + netSectionTraceroute() + netSectionEncap() + netSectionRotas() + netBuildLimites() + '</div>';
  }

  function onNetworkClick(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute) return;
    var act = alvo.getAttribute('data-act');
    if (!act) return;
    var out;
    if (act === 'net-dns') {
      var h = containerEl.querySelector('#net-dns-host');
      out = containerEl.querySelector('#net-dns-out');
      if (!h || !out) return;
      var r = dnsResolver(h.value || '');
      out.textContent = r.ip ? (r.ip + '  (' + r.origem + ')') : r.erro;
    } else if (act === 'net-cidr') {
      out = containerEl.querySelector('#net-cidr-out');
      if (!out) return;
      var r = _calcularCIDR(containerEl.querySelector('#net-cidr-ip').value, containerEl.querySelector('#net-cidr-mask').value);
      if (typeof r === 'string') { out.textContent = r; return; }
      out.textContent = ['rede=' + r.endereco_rede, 'broadcast=' + r.endereco_broadcast, 'primeiro=' + r.primeiro_host, 'último=' + r.ultimo_host, 'hosts_validos=' + r.hosts_validos + ' (' + r.total_enderecos + ' endereços)', '', r.observacao].join('\n');
    } else if (act === 'net-ping') {
      out = containerEl.querySelector('#net-ping-out');
      if (!out) return;
      var r = _ping(containerEl.querySelector('#net-ping-host').value, parseInt(containerEl.querySelector('#net-ping-count').value, 10) || 4);
      if (typeof r === 'string') { out.textContent = r; return; }
      var linhas = ['ping ' + r.destino + ' (' + r.pacotes_recebidos + '/' + r.pacotes_enviados + ' recebidos)', 'min=' + r.latencia_min + 'ms max=' + r.latencia_max + 'ms avg=' + r.latencia_media + 'ms'];
      r.detalhes.forEach(function (d) { linhas.push(d.resposta); });
      linhas.push('');
      linhas.push(r.observacao);
      out.textContent = linhas.join('\n');
    } else if (act === 'net-traceroute') {
      out = containerEl.querySelector('#net-tr-out');
      if (!out) return;
      var r = _traceroute(containerEl.querySelector('#net-tr-host').value, 15);
      if (typeof r === 'string') { out.textContent = r; return; }
      var linhas = ['traceroute para ' + r.destino + ' (' + r.total_saltos + ' saltos)'];
      r.saltos.forEach(function (s) { linhas.push(s.salto + '  ' + s.ip + '  ' + s.latencia + '  ' + s.observacao); });
      linhas.push('');
      linhas.push(r.observacao);
      out.textContent = linhas.join('\n');
    } else if (act === 'net-route') {
      out = containerEl.querySelector('#net-route-out');
      if (!out) return;
      var sel = containerEl.querySelector('#net-route-sel').value || '';
      var partes = sel.split('|');
      var orig = partes[0], dest = partes[1];
      var t = null;
      for (var i = 0; i < topologia.length; i++) if (topologia[i].origem === orig && topologia[i].destino === dest) { t = topologia[i]; break; }
      if (!t) { out.textContent = 'rota não encontrada'; return; }
      out.textContent = ['origem=' + t.origem, 'destino=' + t.destino, 'saltos=' + t.saltos, 'porta=' + t.porta, 'status=' + t.status, '', 'SIMULAÇÃO DIDÁTICA — diagnóstico por camadas sobre topologia fictícia.'].join('\n');
    }
  }

  function mountNetwork(containerEl) {
    if (!containerEl || typeof containerEl !== 'object') return undefined;
    if (networkMontados.has(containerEl)) return undefined;
    try {
      var destruido = false;
      networkMontados.add(containerEl);
      containerEl.innerHTML = netCss + netBuildUI();
      containerEl.addEventListener('click', function (e) { onNetworkClick(e, containerEl); });
      return {
        destroy: function () {
          if (destruido) return;
          destruido = true;
          try { networkMontados['delete'](containerEl); } catch (e) { }
          try { containerEl.innerHTML = ''; } catch (e) { }
        }
      };
    } catch (e) {
      try { networkMontados['delete'](containerEl); } catch (e2) { }
      if (typeof console !== 'undefined' && console.error) console.error('NetworkSimulator.mount: falha —', (e && e.message) || e);
      return undefined;
    }
  }

  var NetworkSimulator = {
    versaoDeclarada: 'simulador didático — não executa comandos reais no SO. Apenas simula comportamento para fins educacionais.',
    /* Núcleo real (sem UI) — preservado. */
    ping: function (destino, count) { return _ping(destino, count); },
    traceroute: function (destino, maxSaltos) { return _traceroute(destino, maxSaltos); },
    calcularCIDR: function (ip, mascara) { return _calcularCIDR(ip, mascara); },
    dnsResolver: dnsResolver,
    encapsulamento: encapsulamento,
    topologia: topologia,
    /* UI (Seção 7.2). */
    mount: mountNetwork,
    escopo: {
      operacoes: ['resolução DNS simulada (tabela local)', 'calculadora IPv4/CIDR (cálculo real binário)', 'ping ICMP simulado (latências/filtros fictícios)', 'traceroute TTL simulado (saltos fictícios)', 'visualização de encapsulamento (5 camadas OSI)', 'simulação de rotas/portas/falhas (diagnóstico por camadas)'],
      saidas: ['DNS: IP resolvido ou NXDOMAIN', 'CIDR: rede/broadcast/hosts/máscara/classe', 'ping: replys com seq/latência/TTL', 'traceroute: saltos com IP/latência/observação', 'encapsulamento: camadas+protocolos', 'roteamento: caminho simulado entre hosts'],
      observacao: 'ping/traceroute retornam valores fictícios; CIDR é cálculo real; DNS usa tabela local.'
    },
    limitacoes: [
      'não executa comandos ICMP/TCP/UDP reais no sistema operacional',
      'ping/traceroute retornam valores simulados (latências, IPs, saltos) — não refletem rede real alguma',
      'DNS resolver limitado a uma tabela estática local (sem consulta real a servidores DNS)',
      'simulação de rotas é didática e fixa — não reflete topologia real',
      'encapsulamento é ilustração estática, não captura de pacotes real'
    ]
  };

  /* Compatibilidade: navegador (window) + Node (globalThis/module). */
  if (typeof window !== 'undefined') { window.NetworkSimulator = NetworkSimulator; }
  if (typeof globalThis !== 'undefined') { globalThis.NetworkSimulator = NetworkSimulator; }
  if (typeof module !== 'undefined' && module.exports) { module.exports = NetworkSimulator; }
})(typeof window !== 'undefined' ? window : globalThis);
