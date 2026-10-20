/* charts.js — SIMULADOR DOS 5 GRÁFICOS OBRIGATÓRIOS (Seções 7.5 e 8 do Escrita.txt).
 *
 * ============================================================================
 * DECISÃO ARQUITETURAL — IMPLEMENTAÇÃO PRÓPRIA EM SVG INLINE (sem Chart.js/ECharts)
 * ============================================================================
 * O Escrita.txt Seção 8 autoriza "Chart.js, Apache ECharts ou implementação
 * própria quando tecnicamente apropriado", mas também manda: "bibliotecas
 * externas não deverão ser consideradas disponíveis apenas porque existe uma
 * tag <script>". O requisito absoluto do projeto é que o app funcione em
 * ABERTURA DIRETA file:// offline (Seção 3.2). Uma biblioteca de CDN:
 *   1) falha sem rede/offline — o app inteiro quebraria no Modo A;
 *   2) exigiria estratégia de carregamento/contingência extra;
 *   3) no caso do box plot, exigiria CONFIRMAR o suporte real da biblioteca.
 * Por isso este arquivo usa SVG inline 100% local, gerado por código próprio:
 * funciona em file://, offline, sem dependência externa, e os cálculos
 * (classes, frequências, densidade, quartis, IIQ, bigodes, outliers 1,5×IIQ,
 * Pearson, mínimos quadrados) ficam auditáveis e são unitariamente testáveis.
 *
 * ============================================================================
 * OS 5 TIPOS OBRIGATÓRIOS (Seção 8) — o que este arquivo CALCULA (não decora)
 * ============================================================================
 * 1. HISTOGRAMA — classes de amplitude igual, convenção [inf, sup) com a
 *    última classe incluindo o sup, frequências absolutas/relativas,
 *    densidade = frequência ÷ largura da classe (área total = n), moda da
 *    classe, média/mediana para leitura de assimetria, efeito documentado da
 *    escolha do nº de classes (com sugestão de Sturges: k ≈ 1 + 3,322·log10 n).
 * 2. GRÁFICO DE LINHAS — série temporal preservando a ordem de digitação
 *    (padrão), ordenação alternativa COM AVISO didático, reta de tendência por
 *    mínimos quadrados sobre a posição, variação absoluta/percentual,
 *    contagem de altas/queda.
 * 3. BARRAS/COLUNAS — ordenação (origem/crescente/decrescente), linha de base
 *    em 0 por padrão, detecção de EIXO TRUNCADO (base ≠ 0 → aviso visível e
 *    texto — escalas enganosas), razão maior/menor calculada.
 * 4. DISPERSÃO — n, médias, desvios-padrão amostrais, r de Pearson, reta de
 *    regressão (mínimos quadrados), outliers por resíduo padronizado > 2,
 *    aviso permanente correlação ≠ causalidade.
 * 5. BOX PLOT — Q1/mediana/Q3 por interpolação linear (percentil tipo 7 =
 *    Excel QUARTILE.INC / R default), IIQ, limites Q1−m·IIQ e Q3+m·IIQ
 *    (m configurável: 1,0 | 1,5 | 2,0; padrão 1,5 = convenção de Tukey),
 *    bigodes = extremos DENTRO dos limites, outliers plotados e listados.
 *    A convenção usada é DECLARADA na tela (diferenças entre implementações).
 *
 * Todos os gráficos têm: dados de origem editáveis (tabela), controles de
 * parâmetros, atualização real após interação, eixos/rótulos/unidades/legenda,
 * texto acessível (role="img" + aria-label + descrição visível), explicação
 * dinâmica com os números calculados e botão "Restaurar valores iniciais".
 *
 * ============================================================================
 * PERSISTÊNCIA
 * ============================================================================
 * NADA é gravado no localStorage: o estado do simulador é volátil de propósito
 * (evita poluir a chave apostila-ia-progresso usada por navigation.js,
 * flashcards.js e quiz-engine.js). "Restaurar" recarrega os dados fictícios
 * didáticos embutidos.
 *
 * SEM eval. SEM fetch. SEM módulos ES. Funciona em abertura direta file://.
 * Todo texto vindo do aluno passa por esc() antes de innerHTML; números são
 * aceitos com vírgula ou ponto (conversão documentada em parseNumero).
 * Dados embutidos são FICTÍCIOS e rotulados como tal — nada é apresentado
 * como estatística oficial ou incidência em concurso.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const CONTAINER_ID = 'charts-app';

  /* ---------- Helpers ---------- */
  /* Escapa TODOS os caracteres perigosos para HTML (mesma do flashcards.js). */
  function esc(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* Atributos SVG/HTML exigem ponto decimal — nunca vírgula. */
  function num(v) {
    if (typeof v !== 'number' || !isFinite(v)) return '0';
    return String(Math.round(v * 100) / 100);
  }

  /* Número legível pt-BR (vírgula decimal), com casas decimais. */
  function fmt(v, casas) {
    if (typeof v !== 'number' || !isFinite(v)) return '—';
    const c = typeof casas === 'number' ? casas : 1;
    let txt = v.toFixed(c);
    if (txt.indexOf('.') !== -1) {
      txt = txt.replace(/0+$/, '').replace(/\.$/, '');
      txt = txt.replace('.', ',');
    }
    return txt;
  }

  function fmtPct(fracao) {
    if (typeof fracao !== 'number' || !isFinite(fracao)) return '—';
    return fmt(fracao * 100, 1) + '%';
  }

  /* Aceita "3,5", "3.5", "1.234,5" (pt-BR) e "1234.5" (en). Senão: NaN. */
  function parseNumero(valor) {
    if (typeof valor === 'number') return isFinite(valor) ? valor : NaN;
    if (valor === null || valor === undefined) return NaN;
    let txt = String(valor).trim().replace(/\s/g, '');
    if (!txt) return NaN;
    if (txt.indexOf(',') !== -1) {
      txt = txt.replace(/\./g, '').replace(',', '.'); // vírgula é decimal no pt-BR
    }
    if (!/^-?\d+(\.\d+)?$/.test(txt)) return NaN;
    const n = parseFloat(txt);
    return isFinite(n) ? n : NaN;
  }

  function media(arr) {
    if (!arr.length) return NaN;
    let s = 0;
    for (let i = 0; i < arr.length; i++) s += arr[i];
    return s / arr.length;
  }

  /* Desvio-padrão AMOSTRAL (n−1) — convenção declarada em telas e testes. */
  function desvioPadrao(arr) {
    if (arr.length < 2) return 0;
    const m = media(arr);
    let s = 0;
    for (let i = 0; i < arr.length; i++) s += (arr[i] - m) * (arr[i] - m);
    return Math.sqrt(s / (arr.length - 1));
  }

  function truncar(txt, max) {
    const t = String(txt);
    return t.length > max ? t.slice(0, max - 1) + '…' : t;
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /* ---------- Escala "agradável" (ticks redondos) ---------- */
  function niceNum(range, arredondar) {
    if (!(range > 0)) return 1;
    const exp = Math.floor(Math.log10(range));
    const frac = range / Math.pow(10, exp);
    let nice;
    if (arredondar) {
      nice = frac < 1.5 ? 1 : frac < 3 ? 2 : frac < 7 ? 5 : 10;
    } else {
      nice = frac <= 1 ? 1 : frac <= 2 ? 2 : frac <= 5 ? 5 : 10;
    }
    return nice * Math.pow(10, exp);
  }

  /* Gera { min, max, passo, ticks } com limites e passo "redondos". */
  function escalaNice(min, max, alvoTicks) {
    let lo = typeof min === 'number' && isFinite(min) ? min : 0;
    let hi = typeof max === 'number' && isFinite(max) ? max : 1;
    if (hi < lo) { const t = lo; lo = hi; hi = t; }
    if (hi - lo < 1e-12) {
      if (hi === 0) { lo = -1; hi = 1; }
      else if (hi > 0) { lo = 0; }
      else { hi = 0; }
    }
    const alvo = Math.max(2, alvoTicks || 5);
    const passo = niceNum((hi - lo) / (alvo - 1), true);
    const niceMin = Math.floor(lo / passo) * passo;
    const niceMax = Math.ceil(hi / passo) * passo;
    const ticks = [];
    /* Loop protegido contra erro de ponto flutuante. */
    for (let t = niceMin, guarda = 0; t <= niceMax + passo * 1e-6 && guarda < 100; t += passo, guarda++) {
      ticks.push(Math.round(t * 1e9) / 1e9);
    }
    return { min: niceMin, max: niceMax, passo: passo, ticks: ticks };
  }

  function decimaisDoPasso(passo) {
    if (!(passo > 0)) return 1;
    if (passo >= 1 - 1e-9) return 0;
    if (passo >= 0.1 - 1e-10) return 1;
    return 2;
  }

  /* ---------- Percentis / quartis (interpolação linear — tipo 7) ----------
   * Convenção documentada: posição = p·(n−1) sobre os valores ordenados;
   * entreposto linear entre os vizinhos. É o método do Excel QUARTILE.INC /
   * PERCENTILE.INC e do R (type 7). Outros softwares usam variantes
   * exclusivas — a tela DECLARA a convenção ao aluno (Seção 8: "diferenças
   * entre implementações"). `ordenado` deve estar em ordem crescente. */
  function percentil(ordenado, p) {
    const n = ordenado.length;
    if (!n) return NaN;
    if (n === 1) return ordenado[0];
    const pos = (n - 1) * p;
    const base = Math.floor(pos);
    const resto = pos - base;
    const proximo = base + 1 < n ? ordenado[base + 1] : ordenado[base];
    return ordenado[base] + resto * (proximo - ordenado[base]);
  }

  function calcularQuartis(valores) {
    const ord = valores.slice().sort((a, b) => a - b);
    const q1 = percentil(ord, 0.25);
    const q2 = percentil(ord, 0.5);
    const q3 = percentil(ord, 0.75);
    return { n: ord.length, min: ord[0], max: ord[ord.length - 1], q1: q1, mediana: q2, q3: q3, iiq: q3 - q1, ordenado: ord };
  }

  /* ========================================================================
   * CALCULADORAS PURAS (uma por gráfico) — testáveis sem DOM
   * ====================================================================== */

  /* 1) HISTOGRAMA: classes de largura igual sobre [min, max].
   * Convenção: classe i cobre [inf, sup); a última inclui o limite superior.
   * densidade = freq ÷ largura da classe (soma das áreas = n).
   * Caso degenerado (todos os valores iguais): 1 classe de largura 1
   * centralizada no valor. */
  function calcularHistograma(valores, nClasses) {
    const nums = [];
    for (let i = 0; i < valores.length; i++) {
      if (typeof valores[i] === 'number' && isFinite(valores[i])) nums.push(valores[i]);
    }
    const n = nums.length;
    if (!n) return { erro: 'Sem valores válidos para o histograma. Informe ao menos um número.' };
    const min = Math.min.apply(null, nums);
    const max = Math.max.apply(null, nums);
    const amplitude = max - min;
    let k = typeof nClasses === 'number' && isFinite(nClasses) ? Math.round(nClasses) : 6;
    k = Math.max(2, Math.min(20, k));
    const classes = [];
    let largura;
    if (amplitude === 0) {
      largura = 1;
      classes.push({ inf: min - 0.5, sup: min + 0.5, freq: n });
    } else {
      largura = amplitude / k;
      for (let i = 0; i < k; i++) {
        const inf = min + i * largura;
        const sup = inf + largura;
        let freq = 0;
        for (let j = 0; j < n; j++) {
          if (i === k - 1) {
            if (nums[j] >= inf && nums[j] <= sup) freq += 1; // última inclui sup
          } else if (nums[j] >= inf && nums[j] < sup) {
            freq += 1;
          }
        }
        classes.push({ inf: inf, sup: sup, freq: freq });
      }
    }
    let moda = 0;
    classes.forEach((c, i) => {
      c.freqRel = n > 0 ? c.freq / n : 0;
      c.densidade = c.freq / largura;
      if (c.freq > classes[moda].freq) moda = i;
    });
    const ord = nums.slice().sort((a, b) => a - b);
    const mediana = percentil(ord, 0.5);
    const kSturges = Math.max(2, Math.round(1 + 3.322 * Math.log10(n)));
    return {
      tipo: 'histograma', erro: null,
      n: n, min: min, max: max, amplitude: amplitude,
      nClasses: classes.length, largura: largura,
      classes: classes, modaClasse: moda,
      media: media(nums), mediana: mediana, kSturges: kSturges
    };
  }

  /* 2) LINHAS: preserva ordem (ou ordena com aviso), tendência por mínimos
   * quadrados sobre a POSIÇÃO exibida (0, 1, 2, …). */
  function calcularLinhas(pontos, params) {
    const p = params || {};
    const validos = [];
    let ignorados = 0;
    for (let i = 0; i < pontos.length; i++) {
      if (pontos[i] && typeof pontos[i].valor === 'number' && isFinite(pontos[i].valor)) {
        validos.push({ rotulo: pontos[i].rotulo, valor: pontos[i].valor });
      } else {
        ignorados += 1;
      }
    }
    if (validos.length < 2) {
      return { erro: 'O gráfico de linhas precisa de pelo menos 2 valores válidos.', ignorados: ignorados };
    }
    const lista = validos.slice();
    const ordenacao = p.ordenacao === 'rotulo' ? 'rotulo' : (p.ordenacao === 'valor' ? 'valor' : 'digitado');
    if (ordenacao === 'rotulo') {
      lista.sort((a, b) => String(a.rotulo).localeCompare(String(b.rotulo), 'pt-BR'));
    } else if (ordenacao === 'valor') {
      lista.sort((a, b) => a.valor - b.valor);
    }
    /* Reta de tendência y = a·i + b (mínimos quadrados sobre a posição). */
    const n = lista.length;
    const mij = (n - 1) / 2;
    const mv = media(lista.map((pt) => pt.valor));
    let sxy = 0, sxx = 0;
    for (let i = 0; i < n; i++) { sxy += (i - mij) * (lista[i].valor - mv); sxx += (i - mij) * (i - mij); }
    const a = sxx !== 0 ? sxy / sxx : 0;
    const b = mv - a * mij;
    let altas = 0, quedas = 0;
    for (let i = 1; i < n; i++) {
      if (lista[i].valor > lista[i - 1].valor) altas += 1;
      else if (lista[i].valor < lista[i - 1].valor) quedas += 1;
    }
    let melhor = lista[0], pior = lista[0];
    lista.forEach((pt) => {
      if (pt.valor > melhor.valor) melhor = pt;
      if (pt.valor < pior.valor) pior = pt;
    });
    const primeiro = lista[0], ultimo = lista[n - 1];
    const varAbs = ultimo.valor - primeiro.valor;
    return {
      tipo: 'linhas', erro: null, ignorados: ignorados,
      pontos: lista, n: n, ordenacao: ordenacao,
      primeiro: primeiro, ultimo: ultimo, melhor: melhor, pior: pior,
      min: pior, max: melhor,
      varAbs: varAbs, varPct: primeiro.valor !== 0 ? varAbs / Math.abs(primeiro.valor) : null,
      altas: altas, quedas: quedas,
      tendencia: { declive: a, intercepto: b, tipo: a > 1e-12 ? 'crescente' : (a < -1e-12 ? 'descrescente' : 'estavel') },
      mostrarValores: p.mostrarValores === true
    };
  }

  /* 3) BARRAS: ordenação + linha de base. base 'zero' (padrão) ou 'auto'
   * (trunca em min>0 → escalas enganosas, sinalizadas). */
  function calcularBarras(pares, params) {
    const p = params || {};
    const validos = [];
    let ignorados = 0;
    for (let i = 0; i < pares.length; i++) {
      if (pares[i] && typeof pares[i].valor === 'number' && isFinite(pares[i].valor)) {
        validos.push({ categoria: pares[i].categoria, valor: pares[i].valor });
      } else {
        ignorados += 1;
      }
    }
    if (!validos.length) return { erro: 'Sem valores válidos para o gráfico de barras.', ignorados: ignorados };
    const ordenacao = p.ordenacao === 'crescente' ? 'crescente' : (p.ordenacao === 'decrescente' ? 'decrescente' : 'origem');
    const lista = validos.slice();
    if (ordenacao === 'crescente') lista.sort((a, b) => a.valor - b.valor);
    else if (ordenacao === 'decrescente') lista.sort((a, b) => b.valor - a.valor);
    let maxV = lista[0].valor, minV = lista[0].valor;
    let maior = lista[0], menor = lista[0];
    lista.forEach((par) => {
      if (par.valor > maxV) { maxV = par.valor; maior = par; }
      if (par.valor < minV) { minV = par.valor; menor = par; }
    });
    const baseAuto = p.base === 'auto' && minV > 0;
    const base = baseAuto ? minV : 0;
    return {
      tipo: 'barras', erro: null, ignorados: ignorados,
      pares: lista, n: lista.length, ordenacao: ordenacao,
      base: base, truncado: base !== 0,
      maxValor: maxV, minValor: minV, maior: maior, menor: menor,
      razaoMaiorMenor: menor.valor !== 0 ? maxV / menor.valor : null,
      orientacao: p.orientacao === 'barras' ? 'barras' : 'colunas'
    };
  }

  /* 4) DISPERSSÃO: r de Pearson, regressão y = intercepto + slope·x,
   * outliers = |resíduo| > 2× DP dos resíduos (quando há reta);
   * sem reta, |x−média| > 2·DP(x) ou |y−média| > 2·DP(y). Critério DECLARADO. */
  function calcularDispersao(pares, params) {
    const p = params || {};
    const validos = [];
    let ignorados = 0;
    for (let i = 0; i < pares.length; i++) {
      const par = pares[i];
      if (par && typeof par.x === 'number' && isFinite(par.x) && typeof par.y === 'number' && isFinite(par.y)) {
        validos.push({ x: par.x, y: par.y });
      } else {
        ignorados += 1;
      }
    }
    const n = validos.length;
    if (n < 3) return { erro: 'A dispersão precisa de pelo menos 3 pares (x, y) válidos para correlação e reta.', ignorados: ignorados };
    const xs = validos.map((par) => par.x);
    const ys = validos.map((par) => par.y);
    const mx = media(xs), my = media(ys);
    const sdx = desvioPadrao(xs), sdy = desvioPadrao(ys);
    let sxy = 0, sxx = 0, syy = 0;
    for (let i = 0; i < n; i++) {
      sxy += (xs[i] - mx) * (ys[i] - my);
      sxx += (xs[i] - mx) * (xs[i] - mx);
      syy += (ys[i] - my) * (ys[i] - my);
    }
    const r = (sxx > 0 && syy > 0) ? sxy / Math.sqrt(sxx * syy) : null;
    const temReta = p.reta === true && sxx > 0;
    const slope = temReta ? sxy / sxx : null;
    const intercepto = temReta ? my - slope * mx : null;
    const outliers = [];
    if (temReta) {
      const res = validos.map((par) => par.y - (intercepto + slope * par.x));
      const dpRes = desvioPadrao(res);
      if (dpRes > 0) {
        validos.forEach((par, i) => {
          const z = res[i] / dpRes;
          if (Math.abs(z) > 2) outliers.push({ x: par.x, y: par.y, z: z });
        });
      }
    } else {
      validos.forEach((par) => {
        const zx = sdx > 0 ? Math.abs((par.x - mx) / sdx) : 0;
        const zy = sdy > 0 ? Math.abs((par.y - my) / sdy) : 0;
        if (zx > 2 || zy > 2) outliers.push({ x: par.x, y: par.y, z: Math.max(zx, zy) });
      });
    }
    let forca = 'muito fraca';
    if (r !== null) {
      const ar = Math.abs(r);
      if (ar >= 0.7) forca = 'forte';
      else if (ar >= 0.4) forca = 'moderada';
      else if (ar >= 0.2) forca = 'fraca';
    }
    return {
      tipo: 'dispersao', erro: null, ignorados: ignorados,
      pares: validos, n: n,
      mx: mx, my: my, sdx: sdx, sdy: sdy,
      minX: Math.min.apply(null, xs), maxX: Math.max.apply(null, xs),
      minY: Math.min.apply(null, ys), maxY: Math.max.apply(null, ys),
      r: r, reta: temReta ? { slope: slope, intercepto: intercepto } : null,
      outliers: outliers, forca: forca,
      mostrarReta: temReta
    };
  }

  /* 5) BOX PLOT: quartis (tipo 7), IIQ, limites Q1−m·IIQ / Q3+m·IIQ,
   * bigodes = extremo menor/maior DENTRO dos limites, outliers fora. */
  function calcularBoxPlot(grupos, multiplo) {
    const m = typeof multiplo === 'number' && multiplo > 0 ? multiplo : 1.5;
    return {
      tipo: 'boxplot', erro: null, multiplo: m,
      grupos: grupos.map((g) => {
        const nums = (g.valores || []).filter((v) => typeof v === 'number' && isFinite(v)).sort((a, b) => a - b);
        const n = nums.length;
        if (!n) {
          return { nome: g.nome, n: 0, erro: 'sem valores' };
        }
        const q1 = percentil(nums, 0.25);
        const mediana = percentil(nums, 0.5);
        const q3 = percentil(nums, 0.75);
        const iiq = q3 - q1;
        const limInf = q1 - m * iiq;
        const limSup = q3 + m * iiq;
        const dentro = nums.filter((v) => v >= limInf && v <= limSup);
        const outliers = nums.filter((v) => v < limInf || v > limSup);
        return {
          nome: g.nome, n: n,
          min: nums[0], max: nums[n - 1],
          q1: q1, mediana: mediana, q3: q3, iiq: iiq,
          limiteInferior: limInf, limiteSuperior: limSup,
          bigodeInferior: dentro[0], bigodeSuperior: dentro[dentro.length - 1],
          outliers: outliers
        };
      })
    };
  }

  /* ========================================================================
   * DADOS DE ORIGEM — CONJUNTOS FICTÍCIOS DIDÁTICOS (rotulados na tela)
   * Cada linha é um array de strings cruas (exatamente o que o aluno edita).
   * ====================================================================== */
  const DEFAULTS = {
    histograma: {
      dados: [
        ['52'], ['55'], ['57'], ['58'], ['60'], ['61'], ['62'], ['63'], ['63'], ['65'],
        ['66'], ['67'], ['68'], ['70'], ['70'], ['71'], ['72'], ['74'], ['75'], ['76'],
        ['78'], ['80'], ['82'], ['85'], ['88']
      ],
      params: { nClasses: 6, modoAltura: 'frequencia', unidadeX: 'pontos da prova (0–100)' }
    },
    linhas: {
      dados: [
        ['jan', '120'], ['fev', '135'], ['mar', '128'], ['abr', '150'],
        ['mai', '162'], ['jun', '158'], ['jul', '175'], ['ago', '182'],
        ['set', '170'], ['out', '190'], ['nov', '205'], ['dez', '215']
      ],
      params: { ordenacao: 'digitado', tendencia: true, mostrarValores: false, unidadeY: 'atendimentos por mês' }
    },
    barras: {
      dados: [
        ['Saúde', '42'], ['Educação', '38'], ['Transporte', '27'],
        ['Segurança', '25'], ['Saneamento', '14'], ['Cultura', '9']
      ],
      params: { orientacao: 'colunas', ordenacao: 'origem', base: 'zero', unidadeY: 'R$ milhões (valores fictícios)' }
    },
    dispersao: {
      dados: [
        ['2', '45'], ['3', '52'], ['4', '55'], ['5', '58'], ['6', '64'],
        ['6', '62'], ['7', '70'], ['8', '75'], ['9', '80'], ['10', '84'], ['10', '55']
      ],
      params: { reta: true, unidadeX: 'horas de estudo por semana', unidadeY: 'acertos em simulado (0–100)' }
    },
    boxplot: {
      dados: [
        ['12', '8'], ['14', '9'], ['15', '10'], ['16', '11'], ['16', '11'],
        ['17', '12'], ['18', '12'], ['20', '13'], ['22', '14'], ['100', '15']
      ],
      params: { multiplo: 1.5, unidadeY: 'tempo de resposta (minutos)' }
    }
  };

  /* ========================================================================
   * DESCRIÇÃO DOS 5 GRÁFICOS — CONTEÚDO DIDÁTICO (Seção 8.2 do Escrita.txt)
   * Conteúdo autoral em pt-BR; sem fontes/estatísticas de provas inventadas.
   * ====================================================================== */
  const DIDATICA = {
    histograma: [
      ['Definição e objetivo', 'Representar a DISTRIBUIÇÃO de uma variável quantitativa: os valores são agrupados em classes (intervalos) e a altura de cada barra mostra quantas observações caem em cada classe. As barras são justapostas (coladas), porque as classes contíguas se tocam.'],
      ['Tipo de dado adequado', 'Variável quantitativa contínua (ou discreta com muitos valores distintos), uma por vez. NÃO use histograma para categorias nominais (região, sexo, setor) — essas vão para barras.'],
      ['Como construir', '1) Ordenar os valores. 2) Amplitude = máximo − mínimo. 3) Escolher o número de classes k. 4) Largura da classe = amplitude ÷ k. 5) Contar a frequência de cada classe (convenção usada aqui: classe inclui o limite inferior e exclui o superior; a última inclui os dois). 6) Densidade = frequência ÷ largura da classe (área total = n observações). 7) Plotar barras justapostas com eixo de valores no horizontal.'],
      ['Como interpretar', 'Observe a forma (simétrica ou assimétrica), a classe modal (a mais alta), as caudas e a dispersão. Se a MÉDIA está à direita da MEDIANA, há indício de assimetria à direita (cauda longa à direita); o inverso, assimetria à esquerda.'],
      ['Quando usar / quando evitar', 'Use para mostrar forma e dispersão de uma distribuição. Evite com amostras muito pequenas (prefira tabela ou box plot) e nunca para comparar categorias distintas (use barras).'],
      ['Erros frequentes', 'Deixar espaçamento entre as barras (transformando histograma em gráfico de barras); usar larguras de classes diferentes sem usar densidade; escolher k muito grande (ruído) ou muito pequeno (esconde a forma); esconder dados faltantes sem aviso.'],
      ['Pegadinha de concurso', 'A MESMA amostra pode parecer simétrica ou assimétrica conforme o número de classes escolhido — conclusões sobre a forma dependem dos intervalos e devem ser declaradas. Outro ponto: no histograma de densidade a ALTURA não é a frequência (é frequência por unidade); comparar alturas de classes de larguras diferentes sem densidade é erro.'],
      ['Quando outro gráfico é melhor', 'Categorias nominais → barras/colunas. Comparar dispersões de poucos grupos → box plot. Evolução no tempo → linhas.']
    ],
    linhas: [
      ['Definição e objetivo', 'Representar a EVOLUÇÃO de uma variável quantitativa ao longo de um eixo ordenado (normalmente o tempo). Cada observação é um ponto; os pontos são ligados por segmentos retos para sugerir continuidade da tendência.'],
      ['Tipo de dado adequado', 'Série temporal (ou qualquer sequência com ordem intrínseca): mensal, trimestral, anual, etapas de um processo. O eixo X deve seguir a ordem cronológica — não a ordem de maior para menor valor.'],
      ['Como construir', 'Ordenar os períodos cronologicamente; usar escala temporal uniforme; marcar os pontos medidos; ligar com segmentos retos; manter o eixo Y começando em 0 quando os valores são todos positivos (aqui o padrão já faz isso); opcionalmente traçar a reta de tendência (mínimos quadrados sobre a posição).'],
      ['Como interpretar', 'Leia a tendência geral (sobe, desce, oscila), as variações ponto a ponto (altas e quedas), a variação absoluta e percentual do primeiro ao último período e a coerência entre a reta de tendência e os dados.'],
      ['Quando usar / quando evitar', 'Use para tendências no tempo. Evite para comparar categorias nominais (use barras) e para duas variáveis quantitativas simultâneas (use dispersão).'],
      ['Erros frequentes', 'Ordenar por valor (ou alfabeticamente) e ainda usar linhas — isso corrompe a cronologia; intervalos de tempo desiguais (mês vs. bimestre) sem sinalizar; inflar variação truncando o eixo Y em excesso; ligar períodos sem medição como se houvesse dado entre eles.'],
      ['Pegadinha de concurso', 'A linha pressupõe CONTINUIDADE, mas só os pontos foram medidos: a inclinação entre dois períodos é convenção visual, não medição. E atenção: ordenar meses por extenso alfabeticamente (abril, agosto, dezembro…) destrói a ordem temporal — a "tendência" resultante é artefato do ordenamento.'],
      ['Quando outro gráfico é melhor', 'Comparar magnitudes entre categorias → barras. Distribuição de uma variável → histograma. Associação entre duas variáveis → dispersão.']
    ],
    barras: [
      ['Definição e objetivo', 'Comparar MAGNITUDES entre categorias: o comprimento (ou a altura) de cada barra é proporcional ao valor da categoria. As categorias não têm ordem natural obrigatória — a ordenação é escolha analítica.'],
      ['Tipo de dado adequado', 'Variável quantitativa agregada por categoria nominal (setores, unidades, regiões) ou ordinal. O eixo de categorias NÃO é numérico: as barras são separadas por espaços.'],
      ['Como construir', 'Linha de base (zero) obrigatória para comparação proporcional; larguras iguais; espaçamento uniforme; ordenar por valor quando o objetivo é ranquear; rotular unidades e valores.'],
      ['Como interpretar', 'Compare alturas/comprimentos: com base em 0, barra com o dobro de altura tem o dobro do valor. Leia o maior, o menor e as razões.'],
      ['Quando usar / quando evitar', 'Use para comparar categorias. Evite para séries temporais (linhas), para distribuições contínuas (histograma) e para partes de um todo quando a comparação visual de ângulos atrapalha (prefira barras também).'],
      ['Erros frequentes', 'Eixo truncado sem aviso; ordenação arbitrária que esconde o ranking; cores decorativas sem função; gráficos 3D que distorcem a leitura da altura; partir o eixo de categorias.'],
      ['Pegadinha de concurso', 'ESCALA ENGANOSA: se o eixo Y começa em 40 (e não em 0), diferenças mínicas viram diferenças enormes na tela — 410 parece ~10 vezes 405, mas vale 1,01 vez. Com base diferente de zero, a proporcionalidade visual SOME: dobro de altura ≠ dobro de valor. Este simulador SINALIZA o truncamento com aviso sempre que a base não é zero.'],
      ['Quando outro gráfico é melhor', 'Tendência no tempo → linhas. Duas variáveis por observação → dispersão. Distribuição → histograma.']
    ],
    dispersao: [
      ['Definição e objetivo', 'Cada observação vira um PONTO com coordenadas (x, y), uma para cada uma das duas variáveis quantitativas. Serve para investigar ASSOCIAÇÃO entre elas: direção, forma e força da relação.'],
      ['Tipo de dado adequado', 'Duas variáveis quantitativas medidas nas mesmas observações (dados pareados).'],
      ['Como construir', 'Eixos numéricos com escalas apropriadas (sem truncamento); marcar os pontos; opcionalmente calcular a reta de tendência (mínimos quadrados) e o coeficiente de correlação de Pearson r; identificar pontos atípicos (outliers).'],
      ['Como interpretar', 'Direção: r > 0 (positiva), r < 0 (negativa). Força: |r| próximo de 1 = relação linear forte; próximo de 0 = relação linear fraca (NÃO implica ausência de relação não linear). Forma: nuvem linear, curva, agrupamentos. Outliers podem inflar ou esconder correlação — verifique sempre os pontos isolados.'],
      ['Quando usar / quando evitar', 'Use para associação entre duas variáveis. Evite com categorias no eixo (use barras) e com muitas variáveis de uma vez (use painéis/outras técnicas).'],
      ['Erros frequentes', 'Ler r como "causa"; esquecer outliers que puxam a reta; usar eixo truncado, que muda a inclinação visual; extrapolar a reta além do intervalo dos dados; afirmar "sem relação" com base só em r ≈ 0.'],
      ['Pegadinha de concurso', 'CORRELAÇÃO NÃO IMPLICA CAUSALIDADE: a relação pode refletir uma terceira variável oculta (ex.: terceiro fator que afeta as duas) ou mera coincidência em amostras pequenas. Causalidade exige delineamento adequado (experimento, controle), não só gráfico. E o r de Pearson mede apenas relação LINEAR.'],
      ['Quando outro gráfico é melhor', 'Uma variável só → histograma. Evolução temporal → linhas. Comparar categorias → barras.']
    ],
    boxplot: [
      ['Definição e objetivo', 'Resumo compacto da distribuição de uma variável quantitativa por QUARTIS: a caixa vai de Q1 a Q3 (contém o intervalo interquartil, IIQ), a linha interna marca a MEDIANA, os bigodes estendem-se até os menores e maiores valores ainda DENTRO do limite convencionado, e os valores fora dele são plotados individualmente como outliers.'],
      ['Tipo de dado adequado', 'Variável quantitativa contínua, um ou mais grupos para comparação. Funciona bem mesmo com amostras pequenas, nas quais o histograma ficaria vazio.'],
      ['Como construir (aqui, calculado de verdade)', 'Ordenar os valores; Q1/Q2/Q3 por interpolação linear (percentil tipo 7 — igual ao QUARTILE.INC do Excel); IIQ = Q3 − Q1; limites = Q1 − m·IIQ e Q3 + m·IIQ (m = 1,5 na convenção de Tukey, padrão deste simulador; m editável: 1,0 | 1,5 | 2,0); bigodes = extremo inferior/superior DENTRO dos limites; outliers = valores fora. A convenção adotada é DECLARADA — implementações (software) diferentes divergem no método dos quartis e nos bigodes.'],
      ['Como interpretar', 'Mediana = centro do conjunto; largura da caixa (IIQ) = dispersão da metade central; posição da mediana dentro da caixa indica assimetria; bigodes desiguais também indicam assimetria; outliers são pontos a investigar (não são necessariamente erros).'],
      ['Quando usar / quando evitar', 'Use para comparar distribuições entre grupos (centralidade e dispersão lado a lado). Evite quando o público leigo vai interpretar sozinho sem mediação (prefira barras com média/erro declarado) e com n extremamente pequeno, no qual quartis são instáveis.'],
      ['Erros frequentes', 'Chamar a caixa de "faixa de erro" ou de "intervalo de confiança"; achar que o bigode termina sempre no mínimo/máximo; comparar medianas sem olhar n, IIQ e outliers; usar outra convenção (ex.: 1,0×IIQ) sem declarar.'],
      ['Pegadinha de concurso', 'O limite 1,5×IIQ é CONVENÇÃO (Tukey), não lei estatística: um ponto "outlier" pode ser dado legítimo. E o cálculo de quartis VARIA entre implementações (interpolação tipo 7 vs. métodos exclusivos) — a mesma amostra pode dar Q1 ligeiramente diferente em ferramentas diferentes. Confirme a convenção exigida no enunciado antes de comparar.'],
      ['Quando outro gráfico é melhor', 'Ver forma detalhada da distribuição → histograma. Comparar categorias pontuais → barras. Duas variáveis → dispersão.']
    ]
  };

  /* ========================================================================
   * ESTADO (volátil) E DESCritORES DE COLUNA
   * ====================================================================== */
  const COLUNAS = {
    histograma: [{ rotulo: 'Valor', num: true }],
    linhas: [{ rotulo: 'Período (rótulo)', num: false }, { rotulo: 'Valor', num: true }],
    barras: [{ rotulo: 'Categoria', num: false }, { rotulo: 'Valor', num: true }],
    dispersao: [{ rotulo: 'Variável X', num: true }, { rotulo: 'Variável Y', num: true }],
    boxplot: [
      { rotulo: 'Grupo A — atendimento presencial', num: true },
      { rotulo: 'Grupo B — teleatendimento', num: true }
    ]
  };
  const NOMES = {
    histograma: '1. Histograma',
    linhas: '2. Gráfico de linhas (série temporal)',
    barras: '3. Barras e colunas (comparação de categorias)',
    dispersao: '4. Dispersão (scatter) — duas variáveis',
    boxplot: '5. Box plot (resumo por quartis)'
  };
  const IDS = ['histograma', 'linhas', 'barras', 'dispersao', 'boxplot'];

  function novoEstado() {
    return clone(DEFAULTS);
  }

  const estado = novoEstado();

  /* ========================================================================
   * EXTRACÇÃO DA TABELA → entradas das calculadoras
   * ====================================================================== */
  function extrairDados(id) {
    const dados = estado[id].dados;
    const invalidas = { linhas: 0, celulas: 0, brancas: 0 };
    if (id === 'histograma') {
      const valores = [];
      dados.forEach((linha) => {
        const v = parseNumero(linha[0]);
        if (isFinite(v)) valores.push(v); else invalidas.celulas += 1;
      });
      return { valores: valores, invalidas: invalidas.celulas, brancas: 0 };
    }
    if (id === 'linhas' || id === 'barras') {
      const pares = [];
      dados.forEach((linha) => {
        const rotulo = String(linha[0] === undefined ? '' : linha[0]).trim() || '(sem rótulo)';
        const v = parseNumero(linha[1]);
        if (isFinite(v)) pares.push({ rotulo: rotulo, categoria: rotulo, valor: v });
        else invalidas.linhas += 1;
      });
      return { pares: pares, invalidas: invalidas.linhas, brancas: 0 };
    }
    if (id === 'dispersao') {
      const pares = [];
      dados.forEach((linha) => {
        const x = parseNumero(linha[0]);
        const y = parseNumero(linha[1]);
        if (isFinite(x) && isFinite(y)) pares.push({ x: x, y: y });
        else invalidas.linhas += 1;
      });
      return { pares: pares, invalidas: invalidas.linhas, brancas: 0 };
    }
    // boxplot
    const grupoA = [], grupoB = [];
    dados.forEach((linha) => {
      const a = parseNumero(linha[0]);
      const b = parseNumero(linha[1]);
      if (isFinite(a)) grupoA.push(a);
      if (isFinite(b)) grupoB.push(b);
      if (!isFinite(a) && !isFinite(b)) invalidas.linhas += 1;
      else if ((!isFinite(a) && String(linha[0]).trim() !== '') || (!isFinite(b) && String(linha[1]).trim() !== '')) {
        invalidas.celulas += 1;
      }
    });
    return {
      grupos: [{ nome: 'Grupo A — atendimento presencial', valores: grupoA }, { nome: 'Grupo B — teleatendimento', valores: grupoB }],
      invalidas: invalidas.celulas, linhasVazias: invalidas.linhas
    };
  }

  function calcular(id) {
    const par = estado[id].params;
    const ext = extrairDados(id);
    if (id === 'histograma') {
      const r = calcularHistograma(ext.valores, par.nClasses);
      r.invalidas = ext.invalidas; r.modoDensidade = par.modoAltura === 'densidade'; r.unidadeX = par.unidadeX;
      return r;
    }
    if (id === 'linhas') {
      const r = calcularLinhas(ext.pares, { ordenacao: par.ordenacao, tendencia: par.tendencia, mostrarValores: par.mostrarValores });
      r.invalidas = ext.invalidas; r.unidadeY = par.unidadeY; r.tendenciaAtiva = par.tendencia === true;
      return r;
    }
    if (id === 'barras') {
      const r = calcularBarras(ext.pares, { orientacao: par.orientacao, ordenacao: par.ordenacao, base: par.base });
      r.invalidas = ext.invalidas; r.unidadeY = par.unidadeY;
      return r;
    }
    if (id === 'dispersao') {
      const r = calcularDispersao(ext.pares, { reta: par.reta });
      r.invalidas = ext.invalidas; r.unidadeX = par.unidadeX; r.unidadeY = par.unidadeY;
      return r;
    }
    const r = calcularBoxPlot(ext.grupos, par.multiplo);
    r.invalidas = ext.invalidas; r.linhasVazias = ext.linhasVazias; r.unidadeY = par.unidadeY;
    return r;
  }

  /* ========================================================================
   * RENDERIZAÇÃO SVG PRÓPRIA (sem biblioteca externa — decide-se no cabeçalho)
   * ====================================================================== */
  const W = 680, H = 400;

  function novoQuadro(margens) {
    const x0 = margens.esq;
    const y0 = H - margens.inf;
    return {
      x0: x0, y0: y0,
      larg: W - margens.esq - margens.dir,
      alt: H - margens.sup - margens.inf,
      topo: margens.sup
    };
  }

  function svgInicio(aria) {
    return '<svg class="chart-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(aria) + '" xmlns="http://www.w3.org/2000/svg">';
  }

  function svgTitulo(txt) {
    return '<text class="chart-svg-titulo" x="12" y="20">' + esc(truncar(txt, 80)) + '</text>';
  }

  function svgEixoY(q, escala, yPix, rotuloY) {
    const dec = decimaisDoPasso(escala.passo);
    let s = '';
    escala.ticks.forEach((t) => {
      const y = yPix(t);
      s += '<line class="chart-grid" x1="' + num(q.x0) + '" y1="' + num(y) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(y) + '"/>' +
        '<text class="chart-txt" x="' + num(q.x0 - 8) + '" y="' + num(y + 4) + '" text-anchor="end">' + esc(fmt(t, dec)) + '</text>';
    });
    s += '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0) + '" y2="' + num(q.topo) + '"/>';
    const cy = (q.y0 + q.topo) / 2;
    s += '<text class="chart-txt chart-eixo-rotulo" x="16" y="' + num(cy) + '" text-anchor="middle" transform="rotate(-90 16 ' + num(cy) + ')">' + esc(truncar(rotuloY, 42)) + '</text>';
    return s;
  }

  function svgEixoXLinear(q, escala, xPix, rotuloX) {
    const dec = decimaisDoPasso(escala.passo);
    let s = '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(q.y0) + '"/>';
    escala.ticks.forEach((t) => {
      const x = xPix(t);
      s += '<line class="chart-eixo" x1="' + num(x) + '" y1="' + num(q.y0) + '" x2="' + num(x) + '" y2="' + num(q.y0 + 5) + '"/>' +
        '<text class="chart-txt" x="' + num(x) + '" y="' + num(q.y0 + 19) + '" text-anchor="middle">' + esc(fmt(t, dec)) + '</text>';
    });
    s += '<text class="chart-txt chart-eixo-rotulo" x="' + num(q.x0 + q.larg / 2) + '" y="' + (H - 12) + '" text-anchor="middle">' + esc(truncar(rotuloX, 60)) + '</text>';
    return s;
  }

  function svgRotulosCategorias(q, categorias, xCentro, rotuloX, rotacionar) {
    let s = '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(q.y0) + '"/>';
    categorias.forEach((cat, i) => {
      const x = xCentro(i);
      const txt = esc(truncar(cat, 16));
      if (rotacionar) {
        s += '<text class="chart-txt" transform="rotate(-32 ' + num(x) + ' ' + num(q.y0 + 14) + ')" x="' + num(x) + '" y="' + num(q.y0 + 14) + '" text-anchor="end">' + txt + '</text>';
      } else {
        s += '<text class="chart-txt" x="' + num(x) + '" y="' + num(q.y0 + 19) + '" text-anchor="middle">' + txt + '</text>';
      }
    });
    s += '<text class="chart-txt chart-eixo-rotulo" x="' + num(q.x0 + q.larg / 2) + '" y="' + (H - 12) + '" text-anchor="middle">' + esc(truncar(rotuloX, 60)) + '</text>';
    return s;
  }

  function svgHistograma(res) {
    const q = novoQuadro({ sup: 34, dir: 20, inf: 76, esq: 74 });
    const escX = escalaNice(res.min, res.max, 6);
    const alturas = res.classes.map((c) => (res.modoDensidade ? c.densidade : c.freq));
    let maxAlt = 0;
    alturas.forEach((h) => { if (h > maxAlt) maxAlt = h; });
    if (!(maxAlt > 0)) maxAlt = 1;
    const escY = escalaNice(0, maxAlt, 5);
    const xPix = (v) => q.x0 + (v - escX.min) / (escX.max - escX.min) * q.larg;
    const yPix = (v) => q.y0 - (v - escY.min) / (escY.max - escY.min) * q.alt;
    const rotuloY = res.modoDensidade ? 'densidade (frequência por unidade de valor)' : 'frequência absoluta (nº de observações)';
    let s = svgInicio(descricaoAria('histograma', res)) + svgTitulo('Histograma — ' + res.n + ' observações, ' + res.nClasses + ' classes de largura ' + fmt(res.largura, 2));
    s += svgEixoY(q, escY, yPix, rotuloY);
    res.classes.forEach((c, i) => {
      const xa = xPix(c.inf), xb = xPix(c.sup), h = alturas[i];
      const y = yPix(h);
      s += '<rect class="chart-barra' + (i === res.modaClasse ? ' chart-barra-modada' : '') + '" x="' + num(xa) + '" y="' + num(y) + '" width="' + num(Math.max(0.5, xb - xa)) + '" height="' + num(Math.max(0, q.y0 - y)) + '">' +
        '<title>classe [' + esc(fmt(c.inf, 2)) + '; ' + esc(fmt(c.sup, 2)) + ') — frequência ' + c.freq + '</title></rect>';
      if (h > 0) {
        s += '<text class="chart-txt chart-txt-barra" x="' + num((xa + xb) / 2) + '" y="' + num(y - 5) + '" text-anchor="middle">' + esc(res.modoDensidade ? fmt(h, 2) : String(c.freq)) + '</text>';
      }
    });
    s += svgEixoXLinear(q, escX, xPix, 'valor — ' + (res.unidadeX || 'unidade não informada') + ' (classes de largura ' + fmt(res.largura, 2) + ')');
    s += '</svg>';
    return s;
  }

  function svgLinhas(res) {
    const q = novoQuadro({ sup: 34, dir: 20, inf: res.n > 8 ? 76 : 60, esq: 74 });
    const n = res.pontos.length;
    let lo = Math.min(0, res.min.valor);
    let hi = Math.max(0, res.max.valor);
    const escY = escalaNice(lo, hi, 5);
    const xPix = (i) => q.x0 + (i + 0.5) * q.larg / n;
    const yPix = (v) => q.y0 - (v - escY.min) / (escY.max - escY.min) * q.alt;
    let s = svgInicio(descricaoAria('linhas', res)) + svgTitulo('Linhas — ' + res.n + ' períodos (' + res.ordenacao + ')');
    s += svgEixoY(q, escY, yPix, res.unidadeY || 'unidade não informada');
    let pontosPoly = '';
    res.pontos.forEach((pt, i) => { pontosPoly += num(xPix(i)) + ',' + num(yPix(pt.valor)) + ' '; });
    s += '<polyline class="chart-linha" points="' + pontosPoly.trim() + '"/>';
    if (res.tendenciaAtiva) {
      const yA = yPix(res.tendencia.intercepto);
      const yB = yPix(res.tendencia.intercepto + res.tendencia.declive * (n - 1));
      s += '<line class="chart-tendencia" x1="' + num(xPix(0)) + '" y1="' + num(yA) + '" x2="' + num(xPix(n - 1)) + '" y2="' + num(yB) + '"/>';
    }
    res.pontos.forEach((pt, i) => {
      s += '<circle class="chart-ponto" cx="' + num(xPix(i)) + '" cy="' + num(yPix(pt.valor)) + '" r="4">' +
        '<title>' + esc(pt.rotulo) + ': ' + esc(fmt(pt.valor, 1)) + '</title></circle>';
      if (res.mostrarValores) {
        s += '<text class="chart-txt chart-txt-barra" x="' + num(xPix(i)) + '" y="' + num(yPix(pt.valor) - 9) + '" text-anchor="middle">' + esc(fmt(pt.valor, 0)) + '</text>';
      }
    });
    s += svgRotulosCategorias(q, res.pontos.map((pt) => pt.rotulo), xPix, 'período (ordem exibida: ' + res.ordenacao + ')', n > 8);
    s += '</svg>';
    return s;
  }

  function svgBarras(res) {
    const horizontal = res.orientacao === 'barras';
    const q = horizontal
      ? novoQuadro({ sup: 34, dir: 110, inf: 60, esq: 150 })
      : novoQuadro({ sup: 34, dir: 20, inf: res.n > 4 ? 76 : 60, esq: 74 });
    const n = res.pares.length;
    let lo, hi;
    if (res.minValor >= 0) { lo = Math.min(0, res.base); hi = Math.max(res.maxValor, res.base); }
    else { lo = res.minValor; hi = Math.max(0, res.maxValor); }
    const escala = escalaNice(lo, hi, 6);
    const rotuloBase = res.truncado ? ' eixo TRUNCADO (inicia em ' + fmt(res.base, 1) + ')' : ' base em 0';
    let s = svgInicio(descricaoAria('barras', res)) + svgTitulo('Barras — ' + res.n + ' categorias, ordenação: ' + res.ordenacao + rotuloBase);
    if (horizontal) {
      const xPix = (v) => q.x0 + (v - escala.min) / (escala.max - escala.min) * q.larg;
      const yCentro = (i) => q.y0 - (i + 0.5) * q.alt / n;
      const alturaBarra = q.alt / n * 0.62;
      const dec = decimaisDoPasso(escala.passo);
      escala.ticks.forEach((t) => {
        const x = xPix(t);
        s += '<line class="chart-grid" x1="' + num(x) + '" y1="' + num(q.topo) + '" x2="' + num(x) + '" y2="' + num(q.y0) + '"/>' +
          '<text class="chart-txt" x="' + num(x) + '" y="' + num(q.y0 + 18) + '" text-anchor="middle">' + esc(fmt(t, dec)) + '</text>';
      });
      s += '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.topo) + '" x2="' + num(q.x0) + '" y2="' + num(q.y0) + '"/>';
      res.pares.forEach((par, i) => {
        const y = yCentro(i) - alturaBarra / 2;
        const xa = Math.min(xPix(res.base), xPix(par.valor));
        const larg = Math.abs(xPix(par.valor) - xPix(res.base));
        s += '<rect class="chart-barra" x="' + num(xa) + '" y="' + num(y) + '" width="' + num(Math.max(1, larg)) + '" height="' + num(alturaBarra) + '">' +
          '<title>' + esc(par.categoria) + ': ' + esc(fmt(par.valor, 1)) + '</title></rect>';
        s += '<text class="chart-txt" x="' + num(q.x0 - 8) + '" y="' + num(yCentro(i) + 4) + '" text-anchor="end">' + esc(truncar(par.categoria, 20)) + '</text>';
        s += '<text class="chart-txt chart-txt-barra" x="' + num(xa + larg + 6) + '" y="' + num(yCentro(i) + 4) + '">' + esc(fmt(par.valor, 1)) + '</text>';
      });
      s += '<text class="chart-txt chart-eixo-rotulo" x="' + num(q.x0 + q.larg / 2) + '" y="' + (H - 12) + '" text-anchor="middle">' + esc(truncar((res.unidadeY || 'unidade não informada') + rotuloBase, 60)) + '</text>';
    } else {
      const yPix = (v) => q.y0 - (v - escala.min) / (escala.max - escala.min) * q.alt;
      const xCentro = (i) => q.x0 + (i + 0.5) * q.larg / n;
      const largBarra = Math.min(64, q.larg / n * 0.62);
      s += svgEixoY(q, escala, yPix, (res.unidadeY || 'unidade não informada') + rotuloBase);
      res.pares.forEach((par, i) => {
        const y = Math.min(yPix(par.valor), yPix(res.base));
        const h = Math.abs(yPix(par.valor) - yPix(res.base));
        s += '<rect class="chart-barra" x="' + num(xCentro(i) - largBarra / 2) + '" y="' + num(y) + '" width="' + num(largBarra) + '" height="' + num(Math.max(1, h)) + '">' +
          '<title>' + esc(par.categoria) + ': ' + esc(fmt(par.valor, 1)) + '</title></rect>';
        s += '<text class="chart-txt chart-txt-barra" x="' + num(xCentro(i)) + '" y="' + num(y - 5) + '" text-anchor="middle">' + esc(fmt(par.valor, 1)) + '</text>';
      });
      s += svgRotulosCategorias(q, res.pares.map((par) => par.categoria), xCentro, 'categorias', n > 4);
    }
    if (res.truncado) {
      s += '<text class="chart-aviso-svg" x="' + num(W - 20) + '" y="20" text-anchor="end">⚠ eixo truncado: base em ' + esc(fmt(res.base, 1)) + ', não em 0</text>';
    }
    s += '</svg>';
    return s;
  }

  function svgDispersao(res) {
    const q = novoQuadro({ sup: 34, dir: 20, inf: 76, esq: 74 });
    const escX = escalaNice(res.minX, res.maxX, 6);
    const escY = escalaNice(res.minY, res.maxY, 6);
    const xPix = (v) => q.x0 + (v - escX.min) / (escX.max - escX.min) * q.larg;
    const yPix = (v) => q.y0 - (v - escY.min) / (escY.max - escY.min) * q.alt;
    const decX = decimaisDoPasso(escX.passo);
    let s = svgInicio(descricaoAria('dispersao', res)) + svgTitulo('Dispersão — ' + res.n + ' pares; r de Pearson = ' + (res.r === null ? 'n/d' : fmt(res.r, 2)));
    s += svgEixoY(q, escY, yPix, res.unidadeY || 'unidade não informada');
    escX.ticks.forEach((t) => {
      const x = xPix(t);
      s += '<text class="chart-txt" x="' + num(x) + '" y="' + num(q.y0 + 19) + '" text-anchor="middle">' + esc(fmt(t, decX)) + '</text>';
    });
    s += '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(q.y0) + '"/>';
    s += '<text class="chart-txt chart-eixo-rotulo" x="' + num(q.x0 + q.larg / 2) + '" y="' + (H - 12) + '" text-anchor="middle">' + esc(truncar('X — ' + (res.unidadeX || 'unidade não informada'), 60)) + '</text>';
    if (res.mostrarReta && res.reta) {
      const yA = res.reta.intercepto + res.reta.slope * escX.min;
      const yB = res.reta.intercepto + res.reta.slope * escX.max;
      s += '<line class="chart-tendencia" x1="' + num(xPix(escX.min)) + '" y1="' + num(yPix(yA)) + '" x2="' + num(xPix(escX.max)) + '" y2="' + num(yPix(yB)) + '"/>';
    }
    res.pares.forEach((par) => {
      const ehOutlier = res.outliers.some((o) => o.x === par.x && o.y === par.y);
      s += '<circle class="chart-ponto' + (ehOutlier ? ' chart-outlier' : '') + '" cx="' + num(xPix(par.x)) + '" cy="' + num(yPix(par.y)) + '" r="' + (ehOutlier ? 6 : 4.5) + '">' +
        '<title>x = ' + esc(fmt(par.x, 1)) + ', y = ' + esc(fmt(par.y, 1)) + (ehOutlier ? ' (outlier pelo critério declarado)' : '') + '</title></circle>';
    });
    s += '</svg>';
    return s;
  }

  function svgBoxPlot(res) {
    const q = novoQuadro({ sup: 34, dir: 20, inf: 78, esq: 74 });
    const grupos = res.grupos.filter((g) => g.n > 0);
    const n = grupos.length;
    if (!n) return '';
    let lo = Infinity, hi = -Infinity;
    grupos.forEach((g) => {
      if (g.bigodeInferior < lo) lo = g.bigodeInferior;
      if (g.bigodeSuperior > hi) hi = g.bigodeSuperior;
      g.outliers.forEach((o) => { if (o < lo) lo = o; if (o > hi) hi = o; });
    });
    const escY = escalaNice(lo, hi, 6);
    const yPix = (v) => q.y0 - (v - escY.min) / (escY.max - escY.min) * q.alt;
    const xCentro = (i) => q.x0 + (i + 0.5) * q.larg / n;
    const largCaixa = Math.min(96, q.larg / n * 0.5);
    let s = svgInicio(descricaoAria('boxplot', res)) + svgTitulo('Box plot — convenção: bigodes até ' + fmt(res.multiplo, 1) + '×IIQ (quartis tipo 7)');
    s += svgEixoY(q, escY, yPix, res.unidadeY || 'unidade não informada');
    grupos.forEach((g, i) => {
      const xc = xCentro(i);
      const yQ1 = yPix(g.q1), yQ3 = yPix(g.q3), yMed = yPix(g.mediana);
      s += '<line class="chart-bigode" x1="' + num(xc) + '" y1="' + num(yQ3) + '" x2="' + num(xc) + '" y2="' + num(yPix(g.bigodeSuperior)) + '"/>';
      s += '<line class="chart-bigode" x1="' + num(xc) + '" y1="' + num(yQ1) + '" x2="' + num(xc) + '" y2="' + num(yPix(g.bigodeInferior)) + '"/>';
      s += '<line class="chart-bigode" x1="' + num(xc - largCaixa * 0.25) + '" y1="' + num(yPix(g.bigodeSuperior)) + '" x2="' + num(xc + largCaixa * 0.25) + '" y2="' + num(yPix(g.bigodeSuperior)) + '"/>';
      s += '<line class="chart-bigode" x1="' + num(xc - largCaixa * 0.25) + '" y1="' + num(yPix(g.bigodeInferior)) + '" x2="' + num(xc + largCaixa * 0.25) + '" y2="' + num(yPix(g.bigodeInferior)) + '"/>';
      s += '<rect class="chart-caixa" x="' + num(xc - largCaixa / 2) + '" y="' + num(yQ3) + '" width="' + num(largCaixa) + '" height="' + num(Math.max(1, yQ1 - yQ3)) + '">' +
        '<title>' + esc(g.nome) + ': Q1 ' + esc(fmt(g.q1, 2)) + ', mediana ' + esc(fmt(g.mediana, 2)) + ', Q3 ' + esc(fmt(g.q3, 2)) + '</title></rect>';
      s += '<line class="chart-mediana" x1="' + num(xc - largCaixa / 2) + '" y1="' + num(yMed) + '" x2="' + num(xc + largCaixa / 2) + '" y2="' + num(yMed) + '"/>';
      s += '<text class="chart-txt chart-txt-barra" x="' + num(xc + largCaixa / 2 + 6) + '" y="' + num(yMed + 4) + '">med. ' + esc(fmt(g.mediana, 1)) + '</text>';
      g.outliers.forEach((o) => {
        s += '<circle class="chart-ponto chart-outlier" cx="' + num(xc) + '" cy="' + num(yPix(o)) + '" r="4.5">' +
          '<title>outlier: ' + esc(fmt(o, 1)) + '</title></circle>';
      });
      s += '<text class="chart-txt" x="' + num(xc) + '" y="' + num(q.y0 + 19) + '" text-anchor="middle">' + esc(truncar(g.nome.split(' — ')[0], 14)) + '</text>';
      s += '<text class="chart-txt" x="' + num(xc) + '" y="' + num(q.y0 + 34) + '" text-anchor="middle">(n = ' + g.n + ')</text>';
    });
    s += '<text class="chart-txt chart-eixo-rotulo" x="' + num(q.x0 + q.larg / 2) + '" y="' + (H - 10) + '" text-anchor="middle">grupos — ' + esc(truncar(res.unidadeY || 'unidade não informada', 40)) + '</text>';
    s += '</svg>';
    return s;
  }

  /* ========================================================================
   * DESCRIÇÕES ACESSÍVEIS (aria-label do SVG + parágrafo visível)
   * ====================================================================== */
  function descricaoAria(id, res) {
    if (id === 'histograma') {
      const c = res.classes[res.modaClasse];
      return 'Histograma com ' + res.n + ' observações de ' + (res.unidadeX || 'valor') + ', entre ' + fmt(res.min, 1) + ' e ' + fmt(res.max, 1) +
        ', dividido em ' + res.nClasses + ' classes de largura ' + fmt(res.largura, 2) + '. A classe mais frequente vai de ' +
        fmt(c.inf, 1) + ' a ' + fmt(c.sup, 1) + ' com ' + c.freq + ' observações (' + fmtPct(c.freqRel) + '). Eixo vertical: ' +
        (res.modoDensidade ? 'densidade.' : 'frequência absoluta.');
    }
    if (id === 'linhas') {
      return 'Gráfico de linhas com ' + res.n + ' períodos (' + res.ordenacao + '), de "' + res.primeiro.rotulo + '" (' + fmt(res.primeiro.valor, 1) +
        ') a "' + res.ultimo.rotulo + '" (' + fmt(res.ultimo.valor, 1) + '). Variação de ' + fmt(res.varAbs, 1) + ' ' + (res.unidadeY || '') +
        '; tendência linear ' + res.tendencia.tipo + ' (declive ' + fmt(res.tendencia.declive, 2) + ' por período).';
    }
    if (id === 'barras') {
      return 'Gráfico de ' + (res.orientacao === 'barras' ? 'barras horizontais' : 'colunas') + ' com ' + res.n + ' categorias, ordenação ' + res.ordenacao +
        '. Maior: ' + res.maior.categoria + ' (' + fmt(res.maior.valor, 1) + '); menor: ' + res.menor.categoria + ' (' + fmt(res.menor.valor, 1) + ')' +
        (res.razaoMaiorMenor !== null ? '; o maior é ' + fmt(res.razaoMaiorMenor, 2) + ' vezes o menor.' : '.') +
        (res.truncado ? ' ATENÇÃO: o eixo de valores NÃO começa em zero (inicia em ' + fmt(res.base, 1) + ') — a comparação visual não é proporcional.' : ' O eixo de valores começa em zero.');
    }
    if (id === 'dispersao') {
      return 'Dispersão de ' + res.n + ' pares, X de ' + (res.unidadeX || 'x') + ' e Y de ' + (res.unidadeY || 'y') +
        (res.r === null ? '; correlação não definida (variável sem variação).' : '; r de Pearson = ' + fmt(res.r, 2) + ' (associação linear ' + res.forca + (res.r >= 0 ? ' positiva' : ' negativa') + ').') +
        (res.outliers.length ? ' Outliers identificados: ' + res.outliers.map((o) => '(' + fmt(o.x, 1) + '; ' + fmt(o.y, 1) + ')').join(', ') + '.' : ' Nenhum outlier pelo critério declarado.');
    }
    const gs = res.grupos.filter((g) => g.n > 0).map((g) =>
      g.nome.split(' — ')[0] + ': mediana ' + fmt(g.mediana, 2) + ', Q1 ' + fmt(g.q1, 2) + ', Q3 ' + fmt(g.q3, 2) +
      ', IIQ ' + fmt(g.iiq, 2) + ', bigodes ' + fmt(g.bigodeInferior, 1) + ' e ' + fmt(g.bigodeSuperior, 1) +
      (g.outliers.length ? ', ' + g.outliers.length + ' outlier(s): ' + g.outliers.map((o) => fmt(o, 1)).join(', ') : ', sem outliers'));
    return 'Box plot com ' + res.grupos.filter((g) => g.n > 0).length + ' grupos (convenção ' + fmt(res.multiplo, 1) + '×IIQ, quartis tipo 7): ' + gs.join('. ') + '.';
  }

  /* ========================================================================
   * PAINÉIS HTML — estatísticas, explicação dinâmica e avisos
   * ====================================================================== */
  function htmlTabelaStats(linhas) {
    let h = '<table class="chart-stats"><tbody>';
    linhas.forEach((l) => {
      h += '<tr><th scope="row">' + esc(l[0]) + '</th><td>' + esc(String(l[1])) + '</td></tr>';
    });
    h += '</tbody></table>';
    return h;
  }

  function htmlAviso(txt) {
    return '<p class="chart-aviso" role="note">⚠ ' + esc(txt) + '</p>';
  }

  function htmlStats(id, res) {
    if (id === 'histograma') {
      let h = '<table class="chart-stats"><thead><tr><th>Classe</th><th>Intervalo [inf ; sup)</th><th>Frequência</th><th>Freq. relativa</th><th>Densidade (freq ÷ largura)</th></tr></thead><tbody>';
      res.classes.forEach((c) => {
        h += '<tr><td>' + esc(String(res.classes.indexOf(c) + 1)) + '</td><td>[' + esc(fmt(c.inf, 2)) + ' ; ' + esc(fmt(c.sup, 2)) + ')</td><td>' + c.freq +
          '</td><td>' + esc(fmtPct(c.freqRel)) + '</td><td>' + esc(fmt(c.densidade, 3)) + '</td></tr>';
      });
      h += '</tbody></table>' +
        htmlTabelaStats([
          ['Observações (n)', res.n],
          ['Mínimo / Máximo', fmt(res.min, 1) + ' / ' + fmt(res.max, 1)],
          ['Amplitude total', fmt(res.amplitude, 2)],
          ['Nº de classes (largura)', res.nClasses + ' (' + fmt(res.largura, 2) + ')'],
          ['Média / Mediana', fmt(res.media, 2) + ' / ' + fmt(res.mediana, 2)],
          ['Sugestão de Sturges', 'k ≈ ' + res.kSturges + ' para n = ' + res.n]
        ]);
      return h;
    }
    if (id === 'linhas') {
      return htmlTabelaStats([
        ['Períodos válidos', res.n],
        ['Primeiro → último', res.primeiro.rotulo + ' (' + fmt(res.primeiro.valor, 1) + ') → ' + res.ultimo.rotulo + ' (' + fmt(res.ultimo.valor, 1) + ')'],
        ['Variação absoluta', fmt(res.varAbs, 1) + ' ' + (res.unidadeY || '')],
        ['Variação percentual', res.varPct === null ? 'n/d (base zero)' : fmtPct(res.varPct)],
        ['Maior / menor valor', res.melhor.rotulo + ' (' + fmt(res.melhor.valor, 1) + ') / ' + res.pior.rotulo + ' (' + fmt(res.pior.valor, 1) + ')'],
        ['Altas / quedas', res.altas + ' / ' + res.quedas],
        ['Tendência (mínimos quadrados)', res.tendencia.tipo + ' — declive ' + fmt(res.tendencia.declive, 2) + ' por período']
      ]);
    }
    if (id === 'barras') {
      return htmlTabelaStats([
        ['Categorias válidas', res.n],
        ['Ordenação atual', res.ordenacao],
        ['Base do eixo de valores', fmt(res.base, 1) + (res.truncado ? ' (TRUNCADO — não é zero)' : ' (zero — comparação proporcional)')],
        ['Maior valor', res.maior.categoria + ' (' + fmt(res.maior.valor, 1) + ')'],
        ['Menor valor', res.menor.categoria + ' (' + fmt(res.menor.valor, 1) + ')'],
        ['Razão maior ÷ menor', res.razaoMaiorMenor === null ? 'n/d' : fmt(res.razaoMaiorMenor, 2) + '×']
      ]);
    }
    if (id === 'dispersao') {
      return htmlTabelaStats([
        ['Pares válidos', res.n],
        ['Média de X / Y', fmt(res.mx, 2) + ' / ' + fmt(res.my, 2)],
        ['DP amostral de X / Y', fmt(res.sdx, 2) + ' / ' + fmt(res.sdy, 2)],
        ['Correlação de Pearson (r)', res.r === null ? 'n/d' : fmt(res.r, 3)],
        ['Força da relação linear', res.r === null ? 'n/d' : res.forca + (res.r >= 0 ? ' positiva' : ' negativa')],
        ['Reta (mínimos quadrados)', res.reta ? 'y = ' + fmt(res.reta.intercepto, 2) + ' + ' + fmt(res.reta.slope, 2) + '·x' : 'desativada (parâmetro "mostrar reta")'],
        ['Outliers (|resíduo padronizado| > 2)', res.outliers.length ? res.outliers.map((o) => '(' + fmt(o.x, 1) + '; ' + fmt(o.y, 1) + ')').join(', ') : 'nenhum']
      ]);
    }
    let h = '';
    res.grupos.forEach((g) => {
      if (!g.n) { h += '<p class="chart-aviso">' + esc(g.nome) + ': sem valores válidos.</p>'; return; }
      h += '<h6>' + esc(g.nome) + '</h6>' + htmlTabelaStats([
        ['n (observações)', g.n],
        ['Mínimo / Máximo', fmt(g.min, 1) + ' / ' + fmt(g.max, 1)],
        ['Q1 / Mediana / Q3', fmt(g.q1, 2) + ' / ' + fmt(g.mediana, 2) + ' / ' + fmt(g.q3, 2)],
        ['IIQ (Q3 − Q1)', fmt(g.iiq, 2)],
        ['Limites (' + fmt(res.multiplo, 1) + '×IIQ)', fmt(g.limiteInferior, 2) + ' e ' + fmt(g.limiteSuperior, 2)],
        ['Bigodes (extremos dentro dos limites)', fmt(g.bigodeInferior, 1) + ' e ' + fmt(g.bigodeSuperior, 1)],
        ['Outliers (fora dos limites)', g.outliers.length ? g.outliers.map((o) => fmt(o, 1)).join(', ') : 'nenhum']
      ]);
    });
    return h;
  }

  function htmlExplicacao(id, res) {
    let p = [];
    if (id === 'histograma') {
      const c = res.classes[res.modaClasse];
      const assim = res.media > res.mediana + 0.05 ? 'Média acima da mediana → indício de assimetria à direita (cauda longa à direita).'
        : (res.media < res.mediana - 0.05 ? 'Média abaixo da mediana → indício de assimetria à esquerda.'
          : 'Média e mediana praticamente iguais → distribuição aproximadamente simétrica.');
      p.push('Com ' + res.n + ' observações entre ' + fmt(res.min, 1) + ' e ' + fmt(res.max, 1) + ' (amplitude ' + fmt(res.amplitude, 1) + '), o gráfico usa ' +
        res.nClasses + ' classes de largura ' + fmt(res.largura, 2) + '. A classe modal é [' + fmt(c.inf, 1) + ' ; ' + fmt(c.sup, 1) + ') com ' +
        c.freq + ' observações (' + fmtPct(c.freqRel) + '). ' + assim);
      p.push('Efeito da escolha dos intervalos (exercite-se mudando o nº de classes): a sugestão de Sturges para n = ' + res.n + ' é k ≈ ' + res.kSturges +
        '. Poucas classes escondem a forma da distribuição; muitas, com amostra pequena, quebram a amostra em classes vazias e criam ruído visual. A mesma amostra pode parecer "normal" ou "assimétrica" conforme k — por isso a escolha dos intervalos deve ser declarada em qualquer relatório.');
      if (res.modoDensidade) {
        p.push('Modo densidade ativo: a altura de cada barra é a frequência dividida pela largura da classe (frequência por unidade de valor). A soma das áreas (densidade × largura) recupera o total de ' + res.n + ' observações — use densidade quando as classes tiverem larguras diferentes.');
      }
    } else if (id === 'linhas') {
      p.push('De "' + res.primeiro.rotulo + '" (' + fmt(res.primeiro.valor, 1) + ') a "' + res.ultimo.rotulo + '" (' + fmt(res.ultimo.valor, 1) + '): variação absoluta de ' +
        fmt(res.varAbs, 1) + ' ' + (res.unidadeY || '') + (res.varPct === null ? ' (variação percentual indisponível: primeiro valor é zero).' : ' (' + fmtPct(res.varPct) + ').'));
      p.push('A reta de tendência (mínimos quadrados sobre a ordem exibida) tem declive ' + fmt(res.tendencia.declive, 2) + ' por período — tendência ' + res.tendencia.tipo +
        '. Contagem de passos: ' + res.altas + ' alta(s) e ' + res.quedas + ' queda(s) entre períodos consecutivos; maior valor em "' + res.melhor.rotulo + '" e menor em "' + res.pior.rotulo + '".');
      if (res.ordenacao === 'rotulo' || res.ordenacao === 'valor') {
        p.push('ORDENAÇÃO ARTIFICIAL ATIVA ("' + res.ordenacao + '"): os períodos não estão na ordem cronológica/original — a "tendência" exibida é consequência do ordenamento, não do fenômeno. Para séries temporais use a ordem de digitação (cronológica).');
      }
      p.push('Lembrete de interpretação: os pontos são as ÚNICAS medições; os segmentos entre eles são convenção visual de continuidade — não existem dados medidos entre dois períodos.');
    } else if (id === 'barras') {
      p.push('Maior valor: "' + res.maior.categoria + '" com ' + fmt(res.maior.valor, 1) + '; menor: "' + res.menor.categoria + '" com ' + fmt(res.menor.valor, 1) +
        (res.razaoMaiorMenor !== null ? ' — o maior é ' + fmt(res.razaoMaiorMenor, 2) + ' vezes o menor.' : '.'));
      if (res.truncado) {
        p.push('ESCALA ENGANOSA: o eixo de valores NÃO começa em zero (inicia em ' + fmt(res.base, 1) + '). Diferenças visuais estão ampliadas e a proporção some: uma barra com o dobro de altura NÃO representa o dobro do valor. Sinalize o truncamento sempre que usar base diferente de zero.');
      } else {
        p.push('O eixo de valores começa em zero: a comparação visual é PROPORCIONAL — barra com o dobro de altura tem o dobro do valor. É o padrão recomendado para barras.');
      }
      if (res.ordenacao !== 'origem') {
        p.push('Ordenação "' + res.ordenacao + '" ativa — útil para ranquear; para comparar categorias com nomes próprios, a ordem alfabética/original pode facilitar a localização.');
      }
    } else if (id === 'dispersao') {
      if (res.r === null) {
        p.push('Correlação não calculada: uma das variáveis não varia nos dados válidos (desvio zero).');
      } else {
        p.push('n = ' + res.n + '; r de Pearson = ' + fmt(res.r, 3) + ' → associação linear ' + res.forca + ' ' + (res.r >= 0 ? 'positiva' : 'negativa') +
          (res.reta ? '; reta de mínimos quadrados: y = ' + fmt(res.reta.intercepto, 2) + ' + ' + fmt(res.reta.slope, 2) + '·x.' : '.'));
      }
      p.push(res.outliers.length
        ? 'Outliers (critério: |resíduo padronizado| > 2 quando a reta é exibida): ' + res.outliers.map((o) => '(' + fmt(o.x, 1) + '; ' + fmt(o.y, 1) + ')').join(', ') + '. Investigue-os: eles podem puxar ou esconder a correlação.'
        : 'Nenhum ponto ultrapassou o limite de 2 desvios do critério declarado.');
      p.push('CORRELAÇÃO NÃO IMPLICA CAUSALIDADE: mesmo r alto não demonstra que X causa Y — pode haver variável oculta influenciando as duas ou coincidência amostral. E r ≈ 0 apenas descarta relação LINEAR, não relações curvas.');
    } else {
      const ga = res.grupos[0], gb = res.grupos[1];
      if (ga && ga.n && gb && gb.n) {
        p.push('Mediana de ' + ga.nome.split(' — ')[0] + ': ' + fmt(ga.mediana, 2) + ' (IIQ ' + fmt(ga.iiq, 2) + '); de ' + gb.nome.split(' — ')[0] + ': ' +
          fmt(gb.mediana, 2) + ' (IIQ ' + fmt(gb.iiq, 2) + '). A dispersão central (IIQ) do grupo com caixa mais larga é maior.');
      }
      res.grupos.forEach((g) => {
        if (!g.n) return;
        const assim = g.mediana - g.q1 > g.q3 - g.mediana ? 'mediana mais próxima de Q3 (cauda à esquerda)' : (g.mediana - g.q1 < g.q3 - g.mediana ? 'mediana mais próxima de Q1 (cauda à direita)' : 'mediana centralizada na cauda');
        p.push(g.nome.split(' — ')[0] + ': caixa de ' + fmt(g.q1, 2) + ' a ' + fmt(g.q3, 2) + ', bigodes em ' + fmt(g.bigodeInferior, 1) + ' e ' + fmt(g.bigodeSuperior, 1) +
          (g.outliers.length ? ', outliers: ' + g.outliers.map((o) => fmt(o, 1)).join(', ') : ', sem outliers') + '. A mediana está ' + assim + '.');
      });
      p.push('Convenção declarada: quartis por interpolação linear (tipo 7) e limites de outlier a ' + fmt(res.multiplo, 1) + '×IIQ. O valor 1,5 é CONVENÇÃO de Tukey, não lei: pontos marcados como outliers podem ser dados legítimos — investigue, não exclua automaticamente.');
    }
    return p.map((txt) => '<p>' + esc(txt) + '</p>').join('');
  }

  /* ========================================================================
   * MONTAGEM DA ÁREA DE SAÍDA DE CADA GRÁFICO
   * ====================================================================== */
  function htmlSaida(id) {
    const res = calcular(id);
    let avisos = '';
    if (res.invalidas) {
      avisos += htmlAviso(res.invalidas + ' célula(s) com valor inválido ou vazio foram ignoradas no cálculo.');
    }
    if (res.erro) {
      return avisos + '<p class="chart-erro" role="alert">' + esc(res.erro) + '</p>';
    }
    let svg = '';
    if (id === 'histograma') svg = svgHistograma(res);
    else if (id === 'linhas') svg = svgLinhas(res);
    else if (id === 'barras') svg = svgBarras(res);
    else if (id === 'dispersao') svg = svgDispersao(res);
    else svg = svgBoxPlot(res);
    if (!svg) {
      return avisos + '<p class="chart-erro" role="alert">Nada a desenhar com os dados atuais.</p>';
    }
    const aria = descricaoAria(id, res);
    let html = avisos + '<div class="chart-svg-wrap">' + svg + '</div>';
    html += '<p class="chart-desc" id="desc-' + id + '"><strong>Descrição acessível (também no aria-label do SVG):</strong> ' + esc(aria) + '</p>';
    html += '<h5>Estatísticas calculadas a partir da tabela</h5>' + htmlStats(id, res);
    html += '<h5>O que os dados mostram (explicação dinâmica)</h5>' + htmlExplicacao(id, res);
    if (id === 'barras' && res.truncado) {
      html += htmlAviso('Eixo truncado em uso. Em relatórios, declare o truncamento — sem isso, o leitor compara barras como se a base fosse zero.');
    }
    if (id === 'dispersao') {
      html += htmlAviso('Correlação não implica causalidade. Use experimento/delineamento adequado para afirmar causa.');
    }
    return html;
  }

  /* ========================================================================
   * UI (renderização no #charts-app do index.html)
   * ====================================================================== */
  const container = document.getElementById(CONTAINER_ID);

  function htmlTabela(id) {
    const cols = COLUNAS[id];
    const dados = estado[id].dados;
    let h = '<table class="chart-tabela"><caption>Tabela de entrada (dados fictícios didáticos) — edite as células e o gráfico é recalculado</caption><thead><tr>';
    cols.forEach((c) => { h += '<th scope="col">' + esc(c.rotulo) + '</th>'; });
    h += '</tr></thead><tbody>';
    dados.forEach((linha, i) => {
      h += '<tr>';
      cols.forEach((c, j) => {
        const cel = linha[j] === undefined ? '' : String(linha[j]);
        h += '<td><input type="text" ' + (c.num ? 'inputmode="decimal" ' : '') +
          'value="' + esc(cel) + '" data-celula="' + esc(id + ':' + i + ':' + j) + '" aria-label="' + esc(c.rotulo) + ', linha ' + (i + 1) + '"></td>';
      });
      h += '</tr>';
    });
    h += '</tbody></table>';
    return h;
  }

  function htmlControles(id) {
    return '<div class="chart-controles">' +
      '<button type="button" data-act="add-linha" data-chart="' + esc(id) + '">Adicionar linha</button> ' +
      '<button type="button" data-act="rem-linha" data-chart="' + esc(id) + '"' + (estado[id].dados.length <= 2 ? ' disabled' : '') + '>Remover última linha</button> ' +
      '<button type="button" data-act="restaurar" data-chart="' + esc(id) + '">Restaurar valores iniciais</button>' +
      '</div>';
  }

  function htmlParams(id) {
    const p = estado[id].params;
    let h = '<div class="chart-params">';
    if (id === 'histograma') {
      h += '<label>Nº de classes (2–20): <input type="number" min="2" max="20" step="1" value="' + esc(String(p.nClasses)) + '" data-param="' + esc(id + ':nClasses') + '"></label> ' +
        '<label>Altura das barras: <select data-param="' + esc(id + ':modoAltura') + '">' +
        '<option value="frequencia"' + (p.modoAltura === 'frequencia' ? ' selected' : '') + '>frequência absoluta</option>' +
        '<option value="densidade"' + (p.modoAltura === 'densidade' ? ' selected' : '') + '>densidade (freq ÷ largura)</option></select></label> ' +
        '<label>Rótulo do eixo X: <input type="text" value="' + esc(String(p.unidadeX)) + '" data-param="' + esc(id + ':unidadeX') + '"></label>';
    } else if (id === 'linhas') {
      h += '<label>Ordenação: <select data-param="' + esc(id + ':ordenacao') + '">' +
        '<option value="digitado"' + (p.ordenacao === 'digitado' ? ' selected' : '') + '>como digitado (cronológica — recomendado)</option>' +
        '<option value="rotulo"' + (p.ordenacao === 'rotulo' ? ' selected' : '') + '>por rótulo (alfabética)</option>' +
        '<option value="valor"' + (p.ordenacao === 'valor' ? ' selected' : '') + '>por valor (crescente)</option></select></label> ' +
        '<label><input type="checkbox" data-param="' + esc(id + ':tendencia') + '"' + (p.tendencia ? ' checked' : '') + '> mostrar reta de tendência</label> ' +
        '<label><input type="checkbox" data-param="' + esc(id + ':mostrarValores') + '"' + (p.mostrarValores ? ' checked' : '') + '> mostrar valores nos pontos</label> ' +
        '<label>Rótulo do eixo Y: <input type="text" value="' + esc(String(p.unidadeY)) + '" data-param="' + esc(id + ':unidadeY') + '"></label>';
    } else if (id === 'barras') {
      h += '<label>Orientação: <select data-param="' + esc(id + ':orientacao') + '">' +
        '<option value="colunas"' + (p.orientacao === 'colunas' ? ' selected' : '') + '>colunas (verticais)</option>' +
        '<option value="barras"' + (p.orientacao === 'barras' ? ' selected' : '') + '>barras (horizontais)</option></select></label> ' +
        '<label>Ordenação: <select data-param="' + esc(id + ':ordenacao') + '">' +
        '<option value="origem"' + (p.ordenacao === 'origem' ? ' selected' : '') + '>ordem da tabela</option>' +
        '<option value="crescente"' + (p.ordenacao === 'crescente' ? ' selected' : '') + '>por valor crescente</option>' +
        '<option value="decrescente"' + (p.ordenacao === 'decrescente' ? ' selected' : '') + '>por valor decrescente</option></select></label> ' +
        '<label>Linha de base: <select data-param="' + esc(id + ':base') + '">' +
        '<option value="zero"' + (p.base === 'zero' ? ' selected' : '') + '>em zero (proporcional)</option>' +
        '<option value="auto"' + (p.base === 'auto' ? ' selected' : '') + '>truncar no menor valor (⚠ escala enganosa)</option></select></label> ' +
        '<label>Rótulo do eixo Y: <input type="text" value="' + esc(String(p.unidadeY)) + '" data-param="' + esc(id + ':unidadeY') + '"></label>';
    } else if (id === 'dispersao') {
      h += '<label><input type="checkbox" data-param="' + esc(id + ':reta') + '"' + (p.reta ? ' checked' : '') + '> mostrar reta de tendência e outliers por resíduo</label> ' +
        '<label>Rótulo do eixo X: <input type="text" value="' + esc(String(p.unidadeX)) + '" data-param="' + esc(id + ':unidadeX') + '"></label> ' +
        '<label>Rótulo do eixo Y: <input type="text" value="' + esc(String(p.unidadeY)) + '" data-param="' + esc(id + ':unidadeY') + '"></label>';
    } else {
      h += '<label>Convenção de outlier: <select data-param="' + esc(id + ':multiplo') + '">' +
        '<option value="1"' + (p.multiplo === 1 ? ' selected' : '') + '>1,0 × IIQ</option>' +
        '<option value="1.5"' + (p.multiplo === 1.5 ? ' selected' : '') + '>1,5 × IIQ (padrão de Tukey)</option>' +
        '<option value="2"' + (p.multiplo === 2 ? ' selected' : '') + '>2,0 × IIQ</option></select></label> ' +
        '<label>Rótulo dos eixos: <input type="text" value="' + esc(String(p.unidadeY)) + '" data-param="' + esc(id + ':unidadeY') + '"></label>';
    }
    h += '</div>';
    return h;
  }

  function htmlCard(id) {
    const did = (DIDATICA[id] || []).map((par) =>
      '<dt>' + esc(par[0]) + '</dt><dd>' + esc(par[1]) + '</dd>').join('');
    return '<article class="chart-card" id="card-' + esc(id) + '">' +
      '<h3>' + esc(NOMES[id]) + '</h3>' +
      '<p class="chart-meta">Seção 8 do Escrita.txt · renderização em SVG próprio (100% local, funciona em file://) · dados fictícios didáticos</p>' +
      '<h4>Guia rápido (conteúdo da Seção 8.2)</h4>' +
      '<dl class="chart-didatica">' + did + '</dl>' +
      '<h4>Dados de origem (editáveis)</h4>' +
      htmlControles(id) +
      '<div id="tabela-' + esc(id) + '">' + htmlTabela(id) + '</div>' +
      '<h4>Parâmetros do gráfico</h4>' +
      '<div id="params-' + esc(id) + '">' + htmlParams(id) + '</div>' +
      '<h4>Gráfico e interpretação (atualização real a cada alteração)</h4>' +
      '<div class="chart-saida" id="saida-' + esc(id) + '">' + htmlSaida(id) + '</div>' +
      '</article>';
  }

  function renderSaida(id) {
    const el = document.getElementById('saida-' + id);
    if (el) el.innerHTML = htmlSaida(id);
  }

  function renderTabela(id) {
    const el = document.getElementById('tabela-' + id);
    if (el) el.innerHTML = htmlTabela(id);
  }

  function renderParams(id) {
    const el = document.getElementById('params-' + id);
    if (el) el.innerHTML = htmlParams(id);
  }

  function restaurar(id) {
    if (!DEFAULTS[id]) return;
    estado[id] = clone(DEFAULTS[id]);
    renderTabela(id);
    renderParams(id);
    renderSaida(id);
  }

  function definirParam(id, chave, valor) {
    if (!estado[id] || !estado[id].params) return;
    if (chave === 'nClasses') {
      const k = parseInt(valor, 10);
      estado[id].params.nClasses = isFinite(k) ? Math.max(2, Math.min(20, k)) : DEFAULTS[id].params.nClasses;
    } else if (chave === 'multiplo') {
      const m = parseFloat(valor);
      estado[id].params.multiplo = (m === 1 || m === 1.5 || m === 2) ? m : DEFAULTS[id].params.multiplo;
    } else if (chave === 'tendencia' || chave === 'mostrarValores' || chave === 'reta') {
      estado[id].params[chave] = valor === true || valor === 'true';
    } else {
      estado[id].params[chave] = String(valor === undefined || valor === null ? '' : valor);
    }
    renderSaida(id);
  }

  function definirDados(id, linhas) {
    if (!estado[id] || !Array.isArray(linhas)) return;
    const nCols = COLUNAS[id].length;
    const dados = [];
    linhas.forEach((linha) => {
      const arr = [];
      for (let j = 0; j < nCols; j++) arr.push(linha && linha[j] !== undefined ? String(linha[j]) : '');
      dados.push(arr);
    });
    estado[id].dados = dados;
    renderTabela(id);
    renderSaida(id);
  }

  if (!container) {
    console.warn('Charts: contêiner #' + CONTAINER_ID + ' não encontrado no index.html — UI não montada.');
  } else {
    /* Eventos (delegação; sem eval; todo texto de usuário passa por esc()). */
    container.addEventListener('input', (e) => {
      const alvo = e.target && e.target.getAttribute ? e.target : null;
      if (!alvo) return;
      const cel = alvo.getAttribute('data-celula');
      if (!cel) return;
      const partes = cel.split(':');
      const id = partes[0], linha = parseInt(partes[1], 10), col = parseInt(partes[2], 10);
      if (!estado[id] || !estado[id].dados[linha] || isNaN(linha) || isNaN(col)) return;
      estado[id].dados[linha][col] = alvo.value;
      renderSaida(id); /* atualização real sem recriar os inputs (foco preservado) */
    });

    container.addEventListener('change', (e) => {
      const alvo = e.target && e.target.getAttribute ? e.target : null;
      if (!alvo) return;
      const par = alvo.getAttribute('data-param');
      if (!par) return;
      const partes = par.split(':');
      const valor = alvo.type === 'checkbox' ? alvo.checked : alvo.value;
      definirParam(partes[0], partes[1], valor);
    });

    container.addEventListener('click', (e) => {
      const alvo = e.target && e.target.closest ? e.target.closest('[data-act]') : null;
      if (!alvo) return;
      if (e.preventDefault) e.preventDefault();
      const acao = alvo.getAttribute('data-act');
      const id = alvo.getAttribute('data-chart');
      if (!estado[id]) return;
      if (acao === 'restaurar') {
        restaurar(id);
      } else if (acao === 'add-linha') {
        const nCols = COLUNAS[id].length;
        const linha = [];
        for (let j = 0; j < nCols; j++) linha.push('');
        estado[id].dados.push(linha);
        renderTabela(id);
        renderSaida(id);
      } else if (acao === 'rem-linha') {
        if (estado[id].dados.length > 2) {
          estado[id].dados.pop();
          renderTabela(id);
          renderSaida(id);
        }
      }
    });

    container.innerHTML =
      '<p>Laboratório de visualização com os <strong>cinco gráficos obrigatórios</strong> (histograma, linhas, barras/colunas, dispersão e box plot). ' +
      'Cada gráfico tem <strong>tabela de dados editável</strong>, <strong>controles de parâmetros</strong> e <strong>recalcula de verdade</strong> a cada alteração — ' +
      'os cálculos (classes e densidade, tendência por mínimos quadrados, linha de base, correlação de Pearson, quartis e convenção 1,5×IIQ) estão documentados ' +
      'no cabeçalho de <code>assets/js/charts.js</code> e são verificados por teste. Renderização em <strong>SVG próprio</strong>: sem bibliotecas externas, ' +
      'funciona em <code>file://</code> e offline. Os dados embutidos são <strong>fictícios e didáticos</strong> — nenhum número aqui é estatística oficial.</p>' +
      IDS.map((id) => htmlCard(id)).join('');
    console.log('Charts inicializados —', IDS.length, 'gráficos obrigatórios (SVG próprio).');
  }

  /* API pública para testes (smoke test em Node/vm) e inspeção. */
  window.ChartsApp = {
    versao: 'charts v1 — SVG próprio, Seções 7.5/8 (decisão documentada no cabeçalho)',
    esc: esc,
    parseNumero: parseNumero,
    fmt: fmt,
    escalaNice: escalaNice,
    percentil: percentil,
    calcularQuartis: calcularQuartis,
    calcularHistograma: calcularHistograma,
    calcularLinhas: calcularLinhas,
    calcularBarras: calcularBarras,
    calcularDispersao: calcularDispersao,
    calcularBoxPlot: calcularBoxPlot,
    descricaoAria: descricaoAria,
    htmlSaida: htmlSaida,
    _ui: {
      getEstado: (id) => estado[id],
      restaurar: restaurar,
      definirParam: definirParam,
      definirDados: definirDados,
      renderSaida: renderSaida,
      renderTudo: () => { IDS.forEach((id) => { renderTabela(id); renderParams(id); renderSaida(id); }); },
      ids: IDS,
      DEFAULTS: DEFAULTS
    }
  };
});
