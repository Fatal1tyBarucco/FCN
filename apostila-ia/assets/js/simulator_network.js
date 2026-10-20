/* simulator_network.js — Módulo 2: Redes de Computadores
 * Simuladores didáticos: ping, traceroute, calculadora CIDR/IPv4.
 * NÃO executa comandos reais no sistema operacional.
 * Escopo documentado: ping (ICMP simulado), traceroute (TTL simulado), CIDR (cálculo real).
 */

const NetworkSimulator = {
  versaoDeclarada: "simulador didático — não executa comandos reais no SO. Apenas simula comportamento para fins educacionais.",

  // Simular ping (ICMP echo request/reply)
  ping: (destino, count = 4) => {
    if (!destino || typeof destino !== "string") {
      return "ERRO: destino deve ser um hostname ou endereço IP válido.";
    }
    // Simular latência aleatória entre 10ms e 200ms (valor fictício para simulação)
    const resultados = [];
    for (let i = 1; i <= count; i++) {
      const latencia = Math.floor(Math.random() * 190) + 10; // 10-200ms
      const ttl = 64 - Math.floor(Math.random() * 5); // ~60-64
      resultados.push({
        seq: i,
        resposta: `${destino}: bytes=32 tempo=${latencia}ms TTL=${ttl}`,
        latencia: latencia
      });
    }
    const latencias = resultados.map(r => r.latencia);
    const min = Math.min(...latencias);
    const max = Math.max(...latencias);
    const media = Math.floor(latencias.reduce((a, b) => a + b, 0) / latencias.length);
    return {
      destino: destino,
      pacotes_enviados: count,
      pacotes_recebidos: count,
      pacotes_perdidos: 0,
      perda_percent: "0%",
      latencia_min: min,
      latencia_max: max,
      latencia_media: media,
      detalhes: resultados,
      observacao: "SIMULAÇÃO — valores fictícios para fins didáticos. Não reflete rede real."
    };
  },

  // Simular traceroute (TTL incremental)
  traceroute: (destino, maxSaltos = 15) => {
    if (!destino || typeof destino !== "string") {
      return "ERRO: destino deve ser um hostname ou endereço IP válido.";
    }
    // Simular saltos fictícios
    const saltos = [];
    const numSaltos = Math.floor(Math.random() * 8) + 5; // 5-12 saltos
    for (let i = 1; i <= numSaltos; i++) {
      const ip = `${Math.floor(Math.random() * 200) + 10}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255) + 1}`;
      const latencia = Math.floor(Math.random() * 50) + (i * 5);
      saltos.push({
        salto: i,
        ip: ip,
        latencia: latencia + "ms",
        observacao: i === numSaltos ? "destino alcançado" : "roteador intermediário"
      });
    }
    return {
      destino: destino,
      saltos: saltos,
      total_saltos: numSaltos,
      observacao: "SIMULAÇÃO — IPs e latências fictícios. traceroute real usa TTL incremental e ICMP Time Exceeded."
    };
  },

  // Calculadora CIDR/IPv4 — cálculo real
  calcularCIDR: (ip, mascara) => {
    if (!ip || !mascara) {
      return "ERRO: informe IP e máscara (ex: 192.168.1.0/24 ou IP + 255.255.255.0).";
    }
    // Aceitar notação CIDR (/24) ou máscara decimal (255.255.255.0)
    let prefixo;
    if (mascara.startsWith("/")) {
      prefixo = parseInt(mascara.substring(1));
    } else if (mascara.includes(".")) {
      // Converter máscara decimal para prefixo
      const octetos = mascara.split(".").map(Number);
      const binario = octetos.map(o => o.toString(2).padStart(8, "0")).join("");
      prefixo = binario.split("").filter(b => b === "1").length;
    } else {
      return "ERRO: máscara deve ser notação CIDR (/24) ou decimal (255.255.255.0).";
    }

    if (prefixo < 0 || prefixo > 32) {
      return "ERRO: prefixo deve estar entre 0 e 32.";
    }

    // Validar IP
    const ipOctetos = ip.split(".").map(Number);
    if (ipOctetos.length !== 4 || ipOctetos.some(o => isNaN(o) || o < 0 || o > 255)) {
      return "ERRO: IP inválido. Use formato x.x.x.x (0-255).";
    }

    // Calcular endereço de rede
    const ipBinario = ipOctetos.map(o => o.toString(2).padStart(8, "0")).join("");
    const redeBinario = ipBinario.substring(0, prefixo).padEnd(32, "0");
    const broadcastBinario = ipBinario.substring(0, prefixo).padEnd(32, "1");

    const binarioParaIp = (bin) => {
      return bin.match(/.{8}/g).map(b => parseInt(b, 2)).join(".");
    };

    const rede = binarioParaIp(redeBinario);
    const broadcast = binarioParaIp(broadcastBinario);
    const primeiroHost = binarioParaIp(redeBinario.slice(0, 31) + "1");
    const ultimoHost = binarioParaIp(broadcastBinario.slice(0, 31) + "0");
    const totalHosts = Math.pow(2, 32 - prefixo);
    const hostsValidos = totalHosts - 2;

    return {
      ip: ip,
      mascara_decimal: binarioParaIp("1".repeat(prefixo).padEnd(32, "0")),
      prefixo: prefixo,
      endereco_rede: rede,
      endereco_broadcast: broadcast,
      primeiro_host: primeiroHost,
      ultimo_host: ultimoHost,
      total_enderecos: totalHosts,
      hosts_validos: hostsValidos,
      classe: prefixo <= 8 ? "A" : prefixo <= 16 ? "B" : "C",
      observacao: "CÁLCULO REAL — baseado em operação binária IP AND máscara."
    };
  }
};
