/* ==========================================================================
 * Simulador Dados — Módulo 8 (Seção 7.5 e 8 da Escrita.txt)
 * Apostila Web Interativa FCN — incremental, sem build, compatível com file://
 * ==========================================================================
 *
 * ESTE ARQUIVO É
 *   Auto-contido: UI declarativa via mount(el), sem eval/fetch/import/CDN.
 *   NÃO usa Chart.js, ECharts ou outra biblioteca externa — implementação
 *   PRÓPRIA em SVG inline, 100% local (funciona em file://).
 *
 * SIMULADOR DE DADOS E VISUALIZAÇÃO:
 *   - Conjunto de dados editável (tabela de notas)
 *   - Estatísticas básicas (média, mediana, moda, desvio padrão, quartis)
 *   - Histograma (com número configurável de classes)
 *   - Gráfico de linha (notas por aluno x disciplinas)
 *   - Barras/colunas (média por aluno)
 *   - Dispersão (scatter: Nota 1 x Nota 2)
 *   - Box plot (resumo de cinco números)
 *   - Manipulação de parâmetros + explicação dinâmica
 *
 * REGRA DE OURO: os gráficos correspondem DE FATO aos valores. Nenhum
 * desenho é puramente decorativo — todas as coordenadas são calculadas a
 * partir dos dados (Seção 8: "Os gráficos deverão utilizar cálculos
 * consistentes com os dados apresentados. Não desenhe apenas formas
 * decorativas que não correspondam aos valores.")
 *
 * AUTO-CONTIDO: injeta <style> escopado por .sim-dados via innerHTML;
 * destroy limpa o container. Não toca em assets/css/styles.css nem index.html.
 * Todo texto do aluno passa por esc() antes de innerHTML; saídas dinâmicas
 * usam textContent. mount não lança se o container faltar ou já montado.
 *
 * VERIFICADO: node --check + smoke test em Node (mount(null) e mount(fakeEl)
 * não lançam; retornam { destroy }).
 * ========================================================================== */
(function (global) {
  'use strict';

  /* --- Escapamento HTML (convenção do projeto) --- */
  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* --- Idempotência --- */
  var dataMontados = (typeof WeakSet !== 'undefined') ? new WeakSet() :
    { has: function () { return false; }, add: function () { return true; }, 'delete': function () { return true; } };

  /* --- SVG / exibição helpers --- */
  var DW = 640, DH = 400;          /* viewBox dimensions */
  var MARGEM = { topo: 34, dir: 24, inf: 68, esq: 76 };

  function num(v) {
    if (typeof v !== 'number' || !isFinite(v)) return '0';
    return String(Math.round(v * 100) / 100);
  }
  function fmt(v, casas) {
    if (typeof v !== 'number' || !isFinite(v)) return '—';
    var c = typeof casas === 'number' ? casas : 1;
    var txt = v.toFixed(c);
    if (txt.indexOf('.') !== -1) {
      txt = txt.replace(/0+$/, '').replace(/\.$/, '').replace('.', ',');
    }
    return txt;
  }
  function parseNumero(valor) {
    if (typeof valor === 'number') return isFinite(valor) ? valor : NaN;
    if (valor === null || valor === undefined) return NaN;
    var txt = String(valor).trim().replace(/\s/g, '');
    if (!txt) return NaN;
    if (txt.indexOf(',') !== -1) { txt = txt.replace(/\./g, '').replace(',', '.'); }
    if (!/^-?\d+(\.\d+)?$/.test(txt)) return NaN;
    var n = parseFloat(txt);
    return isFinite(n) ? n : NaN;
  }

  /* --- Estatísticas (convenção: desvio padrão AMOSTRAL n-1, como charts.js) --- */
  function media(arr) {
    if (!arr.length) return NaN;
    var s = 0;
    for (var i = 0; i < arr.length; i++) s += arr[i];
    return s / arr.length;
  }
  function mediana(arr) {
    if (!arr.length) return NaN;
    var v = arr.slice().sort(function (a, b) { return a - b; });
    var m = Math.floor(v.length / 2);
    return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
  }
  /* Moda — valores mais frequentes. */
  function moda(arr) {
    if (!arr.length) return NaN;
    var contagem = {};
    for (var i = 0; i < arr.length; i++) {
      var k = String(arr[i]);
      contagem[k] = (contagem[k] || 0) + 1;
    }
    var maxFreq = 0;
    var mods = [];
    var chaves = Object.keys(contagem);
    for (var j = 0; j < chaves.length; j++) {
      if (contagem[chaves[j]] > maxFreq) {
        maxFreq = contagem[chaves[j]];
        mods = [Number(chaves[j])];
      } else if (contagem[chaves[j]] === maxFreq) {
        mods.push(Number(chaves[j]));
      }
    }
    return mods.length === chaves.length ? NaN : mods[0];
  }
  function desvioPadrao(arr) {
    if (arr.length < 2) return 0;
    var m = media(arr);
    var s = 0;
    for (var i = 0; i < arr.length; i++) s += (arr[i] - m) * (arr[i] - m);
    return Math.sqrt(s / (arr.length - 1));
  }
  function minimo(arr) { return arr.length ? Math.min.apply(null, arr) : NaN; }
  function maximo(arr) { return arr.length ? Math.max.apply(null, arr) : NaN; }
  /* Quartis — método inclusivo (Tukey). */
  function quartis(arr) {
    if (!arr.length) return { q1: NaN, q3: NaN, mediana: NaN };
    var v = arr.slice().sort(function (a, b) { return a - b; });
    var n = v.length;
    var mid = Math.floor(n / 2);
    var lo = v.slice(0, mid + (n % 2 ? 1 : 0));
    var hi = v.slice(n - mid);
    return {
      q1: mediana(lo),
      q3: mediana(hi),
      mediana: mediana(v)
    };
  }

  /* --- Dataset editável (tabela de notas) --- */
  var COLUNAS = ['Nome', 'Nota 1', 'Nota 2', 'Nota 3', 'Média'];
  var COLUNAS_NUM = [1, 2, 3];  /* índices das colunas numéricas editáveis */
  var dadosDefault = [
    { nome: 'Ana',   n1: 7.5, n2: 8,   n3: 6.5 },
    { nome: 'Bruno', n1: 6,   n2: 7.5, n3: 8   },
    { nome: 'Carla', n1: 9,   n2: 8.5, n3: 7   },
    { nome: 'Diego', n1: 5.5, n2: 6,   n3: 7.5 },
    { nome: 'Eva',   n1: 8,   n2: 9,   n3: 10  },
    { nome: 'Fábio', n1: 4,   n2: 5.5, n3: 6   }
  ];

  function mediaAluno(a) { return (a.n1 + a.n2 + a.n3) / 3; }
  function valoresColuna(dados, col) {
    var vals = [];
    var field = [null, 'n1', 'n2', 'n3', 'media'][col];
    for (var i = 0; i < dados.length; i++) {
      if (field === 'media') vals.push(mediaAluno(dados[i]));
      else vals.push(dados[i][field]);
    }
    return vals;
  }

  /* --- SVG helpers --- */
  function quadro() {
    return {
      x0: MARGEM.esq,
      y0: DH - MARGEM.inf,
      larg: DW - MARGEM.esq - MARGEM.dir,
      alt: DH - MARGEM.topo - MARGEM.inf,
      topo: MARGEM.topo
    };
  }
  function escalaLinear(dmin, dmax, pmin, pmax) {
    var span = dmax - dmin;
    if (span === 0) span = 1;
    return function (v) {
      return pmin + (v - dmin) / span * (pmax - pmin);
    };
  }
  /* Escalas "agradáveis" para ticks no eixo Y. */
  function niceTicks(min, max, n) {
    if (!isFinite(min) || !isFinite(max) || min === max) {
      min = 0; max = 1;
    }
    if (min > max) { var t = min; min = max; max = t; }
    var range = max - min;
    var rawStep = range / Math.max(1, n);
    var mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
    var normalized = rawStep / mag;
    var niceStep;
    if (normalized < 1.5) niceStep = 1;
    else if (normalized < 3) niceStep = 2;
    else if (normalized < 7) niceStep = 5;
    else niceStep = 10;
    var step = niceStep * mag;
    var niceMin = Math.floor(min / step) * step;
    var ticks = [];
    for (var v = niceMin; v <= max + step * 0.5; v += step) {
      ticks.push(Math.round(v * 1000) / 1000);
    }
    return { min: niceMin, max: tickMax(ticks), step: step, ticks: ticks };
  }
  function tickMax(ticks) {
    if (!ticks.length) return 1;
    var last = ticks[ticks.length - 1];
    return last >= maximo(ticks) ? last : maximo(ticks);
  }
  function svgInicio(aria) {
    return '<svg class="chart-svg" viewBox="0 0 ' + DW + ' ' + DH + '" role="img" aria-label="' + esc(aria) + '" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#111318" aria-hidden="true" />';
  }
  function svgTitulo(txt) {
    return '<text class="chart-svg-titulo" x="12" y="20">' + esc(txt) + '</text>';
  }
  function svgEixoY(q, escala, yPix, rotulo) {
    var s = '';
    for (var i = 0; i < escala.ticks.length; i++) {
      var t = escala.ticks[i];
      var y = yPix(t);
      s += '<line class="chart-grid" x1="' + num(q.x0) + '" y1="' + num(y) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(y) + '"/>'
        + '<text class="chart-txt" x="' + num(q.x0 - 6) + '" y="' + num(y + 4) + '" text-anchor="end">' + esc(fmt(t, 0)) + '</text>';
    }
    s += '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0) + '" y2="' + num(q.topo) + '"/>';
    var cy = (q.y0 + q.topo) / 2;
    s += '<text class="chart-txt chart-eixo-rotulo" x="16" y="' + num(cy) + '" text-anchor="middle" transform="rotate(-90 16 ' + num(cy) + ')">' + esc(rotulo) + '</text>';
    return s;
  }

  /* --- Histograma --- */
  function svgHistograma(dados, colIdx, bins) {
    var q = quadro();
    var vals = valoresColuna(dados, colIdx);
    var vmin = minimo(vals);
    var vmax = maximo(vals);
    if (vmin === vmax) { vmin = vmin - 0.5; vmax = vmax + 0.5; }
    var largClasse = (vmax - vmin) / bins;
    var classes = [];
    for (var i = 0; i < bins; i++) {
      classes.push({ inf: vmin + i * largClasse, sup: vmin + (i + 1) * largClasse, freq: 0 });
    }
    for (var j = 0; j < vals.length; j++) {
      var idx = Math.min(bins - 1, Math.floor((vals[j] - vmin) / largClasse));
      if (idx < 0) idx = 0;
      classes[idx].freq++;
    }
    var maxFreq = Math.max.apply(null, classes.map(function (c) { return c.freq; }));
    if (maxFreq === 0) maxFreq = 1;
    var escY = niceTicks(0, maxFreq, 4);
    var escX = niceTicks(vmin, vmax, bins);
    var xPix = escalaLinear(vmin, vmax, q.x0, q.x0 + q.larg);
    var yPix = escalaLinear(escY.min, escY.max, q.y0, q.topo);
    var lab = COLUNAS[colIdx] || ('coluna ' + colIdx);
    var s = svgInicio('Histograma de ' + lab + ' — ' + bins + ' classes, ' + vals.length + ' observações');
    s += svgTitulo('Histograma — ' + esc(lab) + ' (' + bins + ' classes, n=' + vals.length + ')');
    s += svgEixoY(q, escY, yPix, 'frequência');
    for (var k = 0; k < classes.length; k++) {
      var c = classes[k];
      var xa = xPix(c.inf), xb = xPix(c.sup);
      var y = yPix(c.freq);
      var altura = q.y0 - y;
      s += '<rect class="chart-barra" x="' + num(xa) + '" y="' + num(y) + '" width="' + num(Math.max(0.5, xb - xa)) + '" height="' + num(Math.max(0, altura)) + '">'
        + '<title>classe [' + esc(fmt(c.inf, 1)) + '; ' + esc(fmt(c.sup, 1)) + ') — freq ' + c.freq + '</title></rect>';
      if (c.freq > 0) {
        s += '<text class="chart-txt" x="' + num((xa + xb) / 2) + '" y="' + num(y - 4) + '" text-anchor="middle">' + esc(String(c.freq)) + '</text>';
      }
    }
    /* eixo X */
    s += '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(q.y0) + '"/>';
    for (var ti = 0; ti < escX.ticks.length; ti++) {
      var xt = escX.ticks[ti];
      var xp = xPix(xt);
      if (xp >= q.x0 && xp <= q.x0 + q.larg) {
        s += '<text class="chart-txt" x="' + num(xp) + '" y="' + num(q.y0 + 16) + '" text-anchor="middle">' + esc(fmt(xt, 0)) + '</text>';
      }
    }
    s += '<text class="chart-txt chart-eixo-rotulo" x="' + num(q.x0 + q.larg / 2) + '" y="' + (DH - 14) + '" text-anchor="middle">' + esc(lab) + '</text>';
    s += '</svg>';
    return s;
  }

  /* --- Gráfico de linha (notas por aluno x disciplina) --- */
  function svgLinhas(dados) {
    var q = quadro();
    var disciplinas = ['Nota 1', 'Nota 2', 'Nota 3'];
    var escY = niceTicks(0, 10, 5);
    var yPix = escalaLinear(escY.min, escY.max, q.y0, q.topo);
    var nDisc = disciplinas.length;
    var xPix = function (i) { return q.x0 + (i + 0.5) / nDisc * q.larg; };
    var s = svgInicio('Linha — notas por aluno x disciplina');
    s += svgTitulo('Linha — notas por aluno (0–10)');
    s += svgEixoY(q, escY, yPix, 'nota');
    /* eixo X categorias */
    s += '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(q.y0) + '"/>';
    for (var i = 0; i < nDisc; i++) {
      var xp = xPix(i);
      s += '<text class="chart-txt" x="' + num(xp) + '" y="' + num(q.y0 + 16) + '" text-anchor="middle">' + esc(disciplinas[i]) + '</text>';
    }
    /* uma linha por aluno */
    var cores = ['#4a94d4', '#5ee0a0', '#ff7b7b', '#ffd57c', '#a0a0ff', '#f07c7c'];
    for (var a = 0; a < dados.length; a++) {
      var notas = [dados[a].n1, dados[a].n2, dados[a].n3];
      var cor = cores[a % cores.length];
      var path = '';
      for (var p = 0; p < notas.length; p++) {
        var xp = xPix(p);
        var yp = yPix(notas[p]);
        path += (p === 0 ? 'M' : ' L') + num(xp) + ',' + num(yp);
      }
      s += '<polyline points="' + esc(path.replace(/^[ML]/, '').replace(/[ML]/g, ' ').trim()) + '" fill="none" stroke="' + cor + '" stroke-width="2" data-aluno="' + esc(dados[a].nome) + '" />';
      for (var p2 = 0; p2 < notas.length; p2++) {
        var xp2 = xPix(p2);
        var yp2 = yPix(notas[p2]);
        s += '<circle cx="' + num(xp2) + '" cy="' + num(yp2) + '" r="3" fill="' + cor + '"/>';
      }
    }
    s += '</svg>';
    return s;
  }

  /* --- Barras/colunas (média por aluno) --- */
  function svgBarras(dados) {
    var q = quadro();
    var medias = dados.map(function (d) { return (d.n1 + d.n2 + d.n3) / 3; });
    var vmax = maximo(medias);
    if (vmax <= 0) vmax = 1;
    var escY = niceTicks(0, vmax * 1.1, 5);
    var yPix = escalaLinear(escY.min, escY.max, q.y0, q.topo);
    var n = dados.length;
    var barW = q.larg / n * 0.7;
    var gap = q.larg / n * 0.3;
    var xCentro = function (i) { return q.x0 + i * (barW + gap) + (barW + gap) / 2; };
    var s = svgInicio('Barras — média por aluno');
    s += svgTitulo('Barras — média por aluno (0–10)');
    s += svgEixoY(q, escY, yPix, 'média');
    s += '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(q.y0) + '"/>';
    for (var i = 0; i < n; i++) {
      var xc = xCentro(i);
      var y = yPix(medias[i]);
      var h = q.y0 - y;
      s += '<rect class="chart-barra" x="' + num(xc - barW / 2) + '" y="' + num(y) + '" width="' + num(barW) + '" height="' + num(Math.max(1, h)) + '">'
        + '<title>' + esc(dados[i].nome) + ': média ' + esc(fmt(medias[i], 1)) + '</title></rect>';
      s += '<text class="chart-txt" x="' + num(xc) + '" y="' + num(q.y0 + 16) + '" text-anchor="middle">' + esc(dados[i].nome) + '</text>';
      s += '<text class="chart-txt" x="' + num(xc) + '" y="' + num(y - 4) + '" text-anchor="middle">' + esc(fmt(medias[i], 1)) + '</text>';
    }
    s += '</svg>';
    return s;
  }

  /* --- Dispersão (scatter: Nota 1 x Nota 2) --- */
  function svgScatter(dados) {
    var q = quadro();
    var escX = niceTicks(0, 10, 5);
    var escY = niceTicks(0, 10, 5);
    var xPix = escalaLinear(escX.min, escX.max, q.x0, q.x0 + q.larg);
    var yPix = escalaLinear(escY.min, escY.max, q.y0, q.topo);
    var s = svgInicio('Dispersão — Nota 1 x Nota 2');
    s += svgTitulo('Dispersão — Nota 1 (eixo X) × Nota 2 (eixo Y)');
    s += svgEixoY(q, escY, yPix, 'Nota 2');
    /* eixo X */
    s += '<line class="chart-eixo" x1="' + num(q.x0) + '" y1="' + num(q.y0) + '" x2="' + num(q.x0 + q.larg) + '" y2="' + num(q.y0) + '"/>';
    for (var i = 0; i < escX.ticks.length; i++) {
      var xt = escX.ticks[i];
      var xp = xPix(xt);
      if (xp >= q.x0 && xp <= q.x0 + q.larg) {
        s += '<text class="chart-txt" x="' + num(xp) + '" y="' + num(q.y0 + 16) + '" text-anchor="middle">' + esc(fmt(xt, 0)) + '</text>';
      }
    }
    s += '<text class="chart-txt chart-eixo-rotulo" x="' + num(q.x0 + q.larg / 2) + '" y="' + (DH - 14) + '" text-anchor="middle">Nota 1</text>';
    var cores = ['#4a94d4', '#5ee0a0', '#ff7b7b', '#ffd57c', '#a0a0ff', '#f07c7c'];
    for (var a = 0; a < dados.length; a++) {
      var xp = xPix(dados[a].n1);
      var yp = yPix(dados[a].n2);
      s += '<circle cx="' + num(xp) + '" cy="' + num(yp) + '" r="4" fill="' + cores[a % cores.length] + '">'
        + '<title>' + esc(dados[a].nome) + ': N1=' + esc(fmt(dados[a].n1, 1)) + ', N2=' + esc(fmt(dados[a].n2, 1)) + '</title></circle>';
    }
    s += '</svg>';
    return s;
  }

  /* --- Box plot (resumo de cinco números) --- */
  function svgBoxPlot(dados, colIdx, label) {
    var q = quadro();
    var vals = valoresColuna(dados, colIdx);
    var vmin = minimo(vals), vmax = maximo(vals);
    if (vmin === vmax) { vmin = vmin - 0.5; vmax = vmax + 0.5; }
    var escY = niceTicks(vmin < 0 ? vmin : 0, vmax > 10 ? vmax : 10, 5);
    var yPix = escalaLinear(escY.min, escY.max, q.y0, q.topo);
    var qt = quartis(vals);
    var min = vmin, max = vmax;
    var out = '';
    for (var i = 0; i < vals.length; i++) {
      if (vals[i] < qt.q1 - 1.5 * (qt.q3 - qt.q1) || vals[i] > qt.q3 + 1.5 * (qt.q3 - qt.q1)) {
        out += '<circle cx="' + num(q.x0 + q.larg / 2) + '" cy="' + num(yPix(vals[i])) + '" r="3" fill="#ff7b7b"/>';
      }
    }
    var yQ1 = yPix(qt.q1), yQ3 = yPix(qt.q3), yMed = yPix(qt.mediana), yMin = yPix(min), yMax = yPix(max);
    var cx = q.x0 + q.larg / 2;
    var boxW = 40;
    var s = svgInicio('Box plot — ' + label);
    s += svgTitulo('Box plot — ' + esc(label) + ' (n=' + vals.length + ')');
    s += svgEixoY(q, escY, yPix, label);
    /* bigodes (whiskers) */
    s += '<line class="chart-eixo" x1="' + num(cx) + '" y1="' + num(yMin) + '" x2="' + num(cx) + '" y2="' + num(yMax) + '"/>';
    s += '<line class="chart-eixo" x1="' + num(cx - 20) + '" y1="' + num(yMin) + '" x2="' + num(cx + 20) + '" y2="' + num(yMin) + '"/>';
    s += '<line class="chart-eixo" x1="' + num(cx - 20) + '" y1="' + num(yMax) + '" x2="' + num(cx + 20) + '" y2="' + num(yMax) + '"/>';
    /* caixa Q1-Q3 */
    s += '<rect x="' + num(cx - boxW / 2) + '" y="' + num(yQ3) + '" width="' + num(boxW) + '" height="' + num(yQ1 - yQ3) + '" class="chart-barra"/>';
    /* mediana */
    s += '<line class="chart-eixo" x1="' + num(cx - boxW / 2) + '" y1="' + num(yMed) + '" x2="' + num(cx + boxW / 2) + '" y2="' + num(yMed) + '"/>';
    s += out;
    /* legend */
    s += '<text class="chart-txt" x="' + num(cx + 28) + '" y="' + num(yQ1 + 4) + '">Q1=' + esc(fmt(qt.q1, 1)) + '</text>';
    s += '<text class="chart-txt" x="' + num(cx + 28) + '" y="' + num(yMed + 4) + '">Md=' + esc(fmt(qt.mediana, 1)) + '</text>';
    s += '<text class="chart-txt" x="' + num(cx + 28) + '" y="' + num(yQ3 + 10) + '">Q3=' + esc(fmt(qt.q3, 1)) + '</text>';
    s += '</svg>';
    return s;
  }

  /* ------------------------------------------------------------------
   * CSS escopado (.sim-dados)
   * ------------------------------------------------------------------ */
  var dataCss = '<style>'
    + '.sim-dados{max-width:980px;margin:0 auto;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e3e9ff}'
    + '.sim-dados h3{margin:8px 0 2px}.sim-dados h4{margin:16px 0 6px;color:#cdd4de;font-size:1rem}'
    + '.sim-dados-sub{color:#4b5563;font-size:.85rem;margin:0 0 12px}'
    + '.sim-dados-bloco{background:#1f232c;border:1px solid #333947;border-radius:8px;padding:12px;margin:12px 0}' +
    '.sim-dados-bloco .sim-dados-sub{color:#cbd5e1}' +
    '.sim-dados-tabela{border-collapse:collapse;width:100%;margin:8px 0}'
    + '.sim-dados-tabela th,.sim-dados-tabela td{border:1px solid #3a4252;padding:4px 6px;text-align:left;font-size:.85rem}'
    + '.sim-dados-tabela th{background:#2a2f3a;color:#cdd4de}'
    + '.sim-dados-cel{width:70px;font-family:"Courier New",monospace;font-size:.82rem;background:#111318;color:#e3e9ff;border:1px solid #4a5265;border-radius:3px;padding:2px 6px}'
    + '.sim-dados-cel-ro{width:90px}'
    + '.sim-dados-cel-média{background:#1b1e24;color:#4a94d4;font-weight:600}'
    + '.sim-dados-btn{background:#3a4252;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:4px 10px;font-size:.8rem;cursor:pointer;margin:2px}'
    + '.sim-dados-btn:hover{background:#4a5466}'
    + '.sim-dados-btn-ok{background:#1b4d30;border-color:#2e8b57;color:#a0f3c1}'
    + '.sim-dados-ok{color:#5ee0a0}.sim-dados-err{color:#ff7b7b}.sim-dados-info{color:#4a94d4}'
    + '.sim-dados-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;font-size:.82rem}'
    + '.sim-dados-stats div{background:#161a21;border:1px solid #333947;border-radius:4px;padding:4px 8px}'
    + '.sim-dados-stats .sim-dados-stats-label{color:#9ca3af;font-size:.75rem}'
    + '.sim-dados-selector,.sim-dados-input-sm{display:inline-block;font-size:.82rem;background:#1b1e24;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:2px 6px;margin:2px}'
    + '.sim-dados-svg{display:block;margin:8px 0;background:#111318;border:1px solid #333947;border-radius:4px}'
    + '.chart-svg{width:100%;height:auto;background-color:#111318}'
    + '.chart-svg .chart-svg-titulo{font-size:12px;font-weight:600;fill:#e3e9ff}'
    + '.chart-svg .chart-txt{font-size:9px;fill:#c5c9d4;pointer-events:none}'
    + '.chart-svg .chart-eixo{stroke:#3a4252;stroke-width:1}'
    + '.chart-svg .chart-grid{stroke:#2a2f3a;stroke-width:1}'
    + '.chart-svg .chart-barra{fill:#4a94d4}'
    + '.chart-svg .chart-barra-modada{fill:#5ee0a0}'
    + '.chart-svg .chart-eixo-rotulo{font-size:10px;fill:#9ca3af}'
    + '.sim-dados-link{color:#174ea6;cursor:pointer;text-decoration:underline}'
    + '.sim-dados-nav{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.sim-dados-nav-btn{background:#2a2f3a;color:#cdd4de;border:1px solid #3a4252;border-radius:4px;padding:4px 12px;font-size:.8rem;cursor:pointer}'
    + '.sim-dados-nav-btn:hover{background:#3a4252}'
    + '.sim-dados-explicacao{background:#161a21;border-left:3px solid #4a94d4;padding:10px;margin:8px 0;font-size:.82rem;color:#b9c0d4;border-radius:4px}'
    + '</style>';

  /* ------------------------------------------------------------------
   * UI builders
   * ------------------------------------------------------------------ */
  function dataBuildTable(dados) {
    var h = '<div class="sim-dados-bloco"><h4>Conjunto de dados editável</h4><p class="sim-dados-sub">Edite as notas (colunas Nota 1-3). A coluna Média é calculada automaticamente.</p>';
    h += '<table class="sim-dados-tabela"><thead><tr>';
    for (var c = 0; c < COLUNAS.length; c++) h += '<th>' + esc(COLUNAS[c]) + '</th>';
    h += '</tr></thead><tbody>';
    for (var i = 0; i < dados.length; i++) {
      h += '<tr data-linha="' + i + '">';
      h += '<td><input type="text" class="sim-dados-cel sim-dados-cel-ro" data-field="nome" data-linha="' + i + '" value="' + esc(dados[i].nome) + '" readonly aria-label="Nome da linha ' + (i + 1) + ': ' + esc(dados[i].nome) + ' (somente leitura)"/></td>';
      for (var j = 1; j < COLUNAS.length; j++) {
        var field = ['nome', 'n1', 'n2', 'n3', 'media'][j];
        var readOnly = (field === 'media');
        var cls = field === 'media' ? 'sim-dados-cel sim-dados-cel-média' : 'sim-dados-cel';
        var val = field === 'media' ? fmt((dados[i].n1 + dados[i].n2 + dados[i].n3) / 3, 1) : fmt(dados[i][field], 1);
        var ro = readOnly ? ' readonly' : '';
        h += '<td><input type="text" class="' + cls + '" data-field="' + field + '" data-linha="' + i + '" value="' + esc(val) + '"' + ro + ' aria-label="' + esc(field) + ' da linha ' + (i + 1) + '"/></td>';
      }
      h += '</tr>';
    }
    h += '</tbody></table>';
    h += '<button type="button" class="sim-dados-btn sim-dados-btn-ok" data-act="dados-reset">Restaurar valores iniciais</button>';
    h += '</div>';
    return h;
  }

  function dataBuildStats(dados) {
    var medias = dados.map(function (d) { return (d.n1 + d.n2 + d.n3) / 3; });
    var allVals = [];
    for (var i = 0; i < dados.length; i++) {
      allVals.push(dados[i].n1, dados[i].n2, dados[i].n3);
    }
    var m = media(allVals);
    var med = mediana(allVals);
    var mod = moda(allVals);
    var dp = desvioPadrao(allVals);
    var q = quartis(allVals);
    var stats = [
      ['Média geral', fmt(m, 2)],
      ['Mediana', fmt(med, 2)],
      ['Moda', isNaN(mod) ? 'Ausente' : fmt(mod, 2)],
      ['Desvio padrão', fmt(dp, 2)],
      ['Mínimo', fmt(minimo(allVals), 2)],
      ['Máximo', fmt(maximo(allVals), 2)],
      ['Q1 (25%)', fmt(q.q1, 2)],
      ['Q3 (75%)', fmt(q.q3, 2)],
      ['Amplitude', fmt(maximo(allVals) - minimo(allVals), 2)],
      ['Coef. var.', dp && m ? fmt(dp / Math.abs(m) * 100, 1) + '%' : '—']
    ];
    var h = '<div class="sim-dados-bloco"><h4>Estatísticas básicas (todas as notas)</h4>';
    h += '<div class="sim-dados-stats">';
    for (var i = 0; i < stats.length; i++) {
      h += '<div><div class="sim-dados-stats-label">' + esc(stats[i][0]) + '</div><div>' + esc(stats[i][1]) + '</div></div>';
    }
    h += '</div></div>';
    return h;
  }

  function dataBuildCharts(dados, colIdx, bins) {
    var colLabel = COLUNAS[colIdx];
    var h = '<div class="sim-dados-bloco"><h4>Gráficos</h4>';
    h += '<div class="sim-dados-sub">';
    h += '<span>Coluna para histograma/box plot: ';
    h += '<select class="sim-dados-selector" id="dados-col-hist" data-act="dados-change-col">';
    for (var i = 1; i < COLUNAS.length; i++) h += '<option value="' + i + '"' + (i === colIdx ? ' selected' : '') + '>' + esc(COLUNAS[i]) + '</option>';
    h += '</select></span>';
    h += '<span style="margin-left:12px">Classes (histograma): ';
    h += '<input type="number" class="sim-dados-input-sm" id="dados-bins" min="2" max="15" value="' + bins + '" style="width:50px" data-act="dados-change-bins"/></span>';
    h += '</div>';
    h += dataBuildHistogramaContainer(dados, colIdx, bins);
    h += dataBuildLinhaContainer(dados);
    h += dataBuildBarraContainer(dados);
    h += dataBuildScatterContainer(dados);
    h += dataBuildBoxContainer(dados, colIdx, colLabel);
    h += '</div>';
    return h;
  }

  function dataBuildHistogramaContainer(dados, colIdx, bins) {
    return '<div id="dados-histograma" class="sim-dados-svg">' + svgHistograma(dados, colIdx, bins) + '</div>';
  }
  function dataBuildLinhaContainer(dados) {
    return '<div id="dados-linha" class="sim-dados-svg">' + svgLinhas(dados) + '</div>';
  }
  function dataBuildBarraContainer(dados) {
    return '<div id="dados-barra" class="sim-dados-svg">' + svgBarras(dados) + '</div>';
  }
  function dataBuildScatterContainer(dados) {
    return '<div id="dados-scatter" class="sim-dados-svg">' + svgScatter(dados) + '</div>';
  }
  function dataBuildBoxContainer(dados, colIdx, label) {
    return '<div id="dados-boxplot" class="sim-dados-svg">' + svgBoxPlot(dados, colIdx, label) + '</div>';
  }

  function dataBuildExplanation(dados) {
    var allVals = [];
    for (var i = 0; i < dados.length; i++) allVals.push(dados[i].n1, dados[i].n2, dados[i].n3);
    var m = media(allVals);
    var dp = desvioPadrao(allVals);
    var medias = dados.map(function (d) { return (d.n1 + d.n2 + d.n3) / 3; });
    var melhor = dados[0], pior = dados[0];
    for (var i = 1; i < dados.length; i++) {
      if (medias[i] > (melhor.n1 + melhor.n2 + melhor.n3) / 3) melhor = dados[i];
      if (medias[i] < (pior.n1 + pior.n2 + pior.n3) / 3) pior = dados[i];
    }
    var texto = '';
    if (dp > 3) texto += 'A alta dispersão (desvio padrão = ' + fmt(dp, 2) + ') indica grande variabilidade entre os alunos — os dados estão amplamente espalhados em torno da média (' + fmt(m, 2) + '). ';
    else texto += 'A baixa dispersão (desvio padrão = ' + fmt(dp, 2) + ') indica que os alunos têm desempenhos semelhante em torno da média (' + fmt(m, 2) + '). ';
    texto += 'O melhor desempenho m\u00e9dio \u00e9 de ' + esc(melhor.nome) + ' (' + fmt(mediaAluno(melhor), 1) + ') e o mais baixo \u00e9 de ' + esc(pior.nome) + ' (' + fmt(mediaAluno(pior), 1) + '). ';
    if (m < 6) texto += 'A média geral (' + fmt(m, 2) + ') está abaixo de 6 — sinal de alerta pedagógico. ';
    else if (m < 8) texto += 'A média geral (' + fmt(m, 2) + ') está na faixa de aprovação. ';
    else texto += 'A média geral (' + fmt(m, 2) + ') está acima de 8 — desempenho forte. ';
    texto += 'Edite os valores para observar como os gráficos e estatísticas se atualizam em tempo real.';
    return '<div class="sim-dados-bloco"><h4>Explicação dinâmica</h4><div class="sim-dados-explicacao">' + texto + '</div></div>';
  }

  function dataBuildLimites() {
    var n = (DataSimulator.escopo && DataSimulator.escopo.operacoes) ? DataSimulator.escopo.operacoes.length : 0;
    return '<div class="sim-dados-bloco"><h4>Escopo declarado</h4>'
      + '<p>Este painel consome <code>DataSimulator</code>: ' + esc(DataSimulator.versaoDeclarada)
      + '. ' + n + ' opera\u00e7\u00f5es declaradas; veja o contrato no header de <code>assets/js/simulator_data.js</code>.</p></div>';
  }

  function dataBuildUI(dados, state) {
    return '<div class="sim-dados">'
      + '<h3>Simulador de Dados e Visualização (Seção 7.5)</h3>'
      + '<p class="sim-dados-sub">Edite o conjunto de dados à direita — todos os gráficos e estatísticas recalculam em tempo real. Implementação própria em SVG (sem Chart.js).</p>'
      + '<nav class="sim-dados-nav" aria-label="Navegação das seções do simulador de dados">'
      + '<button type="button" class="sim-dados-nav-btn" data-act="nav" data-target="table">1. Dados editáveis</button>'
      + '<button type="button" class="sim-dados-nav-btn" data-act="nav" data-target="stats">2. Estatísticas</button>'
      + '<button type="button" class="sim-dados-nav-btn" data-act="nav" data-target="charts">3. Gráficos</button>'
      + '<button type="button" class="sim-dados-nav-btn" data-act="nav" data-target="explicacao">4. Explicação dinâmica</button>'
      + '<button type="button" class="sim-dados-nav-btn" data-act="nav" data-target="limites">5. Escopo declarado</button>'
      + '</nav>'
      + '<div id="data-pane-table" class="data-pane">' + dataBuildTable(dados) + '</div>'
      + '<div id="data-pane-stats" class="data-pane" style="display:none">' + dataBuildStats(dados) + '</div>'
      + '<div id="data-pane-charts" class="data-pane" style="display:none">' + dataBuildCharts(dados, state.colIdx, state.bins) + '</div>'
      + '<div id="data-pane-explicacao" class="data-pane" style="display:none">' + dataBuildExplanation(dados) + '</div>'
      + '<div id="data-pane-limites" class="data-pane" style="display:none">' + dataBuildLimites() + '</div>'
      + '</div>';
  }

  /* ------------------------------------------------------------------
   * Event handlers
   * ------------------------------------------------------------------ */
  function dataOnNav(e, containerEl, dados, state) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-act') !== 'nav') return;
    var target = alvo.getAttribute('data-target');
    if (!target) return;
    var panes = containerEl.querySelectorAll('.data-pane');
    for (var i = 0; i < panes.length; i++) {
      panes[i].style.display = (panes[i].id === 'data-pane-' + target) ? 'block' : 'none';
    }
  }

  function dataOnInput(e, containerEl, dados, state) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-field') === undefined) return;
    var field = alvo.getAttribute('data-field');
    if (field === 'nome' || field === 'media') return; /* readonly */
    var linha = parseInt(alvo.getAttribute('data-linha'), 10);
    if (isNaN(linha) || linha < 0 || linha >= dados.length) return;
    var num = parseNumero(alvo.value);
    if (isNaN(num) || num < 0 || num > 10) {
      alvo.classList.add('sim-dados-err');
      return;
    }
    alvo.classList.remove('sim-dados-err');
    dados[linha][field] = num;
    /* Atualiza apenas a célula de média desta linha (não reconstrói a tabela). */
    var mediaCell = containerEl.querySelector('input[data-field="media"][data-linha="' + CSS.escape(String(linha)) + '"]');
    if (mediaCell) mediaCell.value = fmt(mediaAluno(dados[linha]), 1);
    dataRefreshVisuals(containerEl, dados, state);
  }

  function dataOnReset(e, containerEl, dados, state) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-act') !== 'dados-reset') return;
    for (var i = 0; i < dadosDefault.length; i++) {
      dados[i] = { nome: dadosDefault[i].nome, n1: dadosDefault[i].n1, n2: dadosDefault[i].n2, n3: dadosDefault[i].n3 };
    }
    state.bins = 5;
    state.colIdx = 1;
    /* Restaura o estado visual dos controles. */
    var sel = containerEl.querySelector('#dados-col-hist');
    if (sel) sel.value = String(state.colIdx);
    var binsInp = containerEl.querySelector('#dados-bins');
    if (binsInp) binsInp.value = String(state.bins);
    dataRefreshVisuals(containerEl, dados, state);
  }

  function dataOnChangeCol(e, containerEl, dados, state) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-act') !== 'dados-change-col') return;
    var val = parseInt(alvo.value, 10);
    if (!isNaN(val) && val >= 1 && val < COLUNAS.length) {
      state.colIdx = val;
      dataRefreshVisuals(containerEl, dados, state);
    }
  }

  function dataOnChangeBins(e, containerEl, dados, state) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-act') !== 'dados-change-bins') return;
    var val = parseInt(alvo.value, 10);
    if (!isNaN(val) && val >= 2 && val <= 15) {
      state.bins = val;
      dataRefreshVisuals(containerEl, dados, state);
    }
  }

  function dataRefreshVisuals(containerEl, dados, state) {
    var histPane = containerEl.querySelector('#dados-histograma');
    var boxPane = containerEl.querySelector('#dados-boxplot');
    var linhaPane = containerEl.querySelector('#dados-linha');
    var barraPane = containerEl.querySelector('#dados-barra');
    var scatterPane = containerEl.querySelector('#dados-scatter');
    if (histPane) histPane.innerHTML = svgHistograma(dados, state.colIdx, state.bins);
    if (boxPane) boxPane.innerHTML = svgBoxPlot(dados, state.colIdx, COLUNAS[state.colIdx]);
    if (linhaPane) linhaPane.innerHTML = svgLinhas(dados);
    if (barraPane) barraPane.innerHTML = svgBarras(dados);
    if (scatterPane) scatterPane.innerHTML = svgScatter(dados);
    /* Atualiza estatísticas e explicação (mantém display do painel). */
    var statsBloco = containerEl.querySelector('#data-pane-stats .sim-dados-bloco');
    if (statsBloco) statsBloco.outerHTML = dataBuildStats(dados);
    var expBloco = containerEl.querySelector('#data-pane-explicacao .sim-dados-bloco');
    if (expBloco) expBloco.outerHTML = dataBuildExplanation(dados);
  }

  function dataOnClick(e, containerEl, dados, state) {
    dataOnNav(e, containerEl, dados, state);
    dataOnInput(e, containerEl, dados, state);
    dataOnReset(e, containerEl, dados, state);
    dataOnChangeCol(e, containerEl, dados, state);
    dataOnChangeBins(e, containerEl, dados, state);
  }

  /* ------------------------------------------------------------------
   * mount
   * ------------------------------------------------------------------ */
  function mountData(containerEl) {
    if (!containerEl || typeof containerEl !== 'object') return undefined;
    if (dataMontados.has(containerEl)) return undefined;
    try {
      var destruido = false;
      dataMontados.add(containerEl);
      /* deep copy dos dados default */
      var dados = [];
      for (var i = 0; i < dadosDefault.length; i++) dados.push({ nome: dadosDefault[i].nome, n1: dadosDefault[i].n1, n2: dadosDefault[i].n2, n3: dadosDefault[i].n3 });
      var state = { colIdx: 1, bins: 5 };
      containerEl.innerHTML = dataCss + dataBuildUI(dados, state);
      /* delegate events */
      containerEl.addEventListener('input', function (e) { dataOnInput(e, containerEl, dados, state); });
      containerEl.addEventListener('change', function (e) {
        dataOnChangeCol(e, containerEl, dados, state);
        dataOnChangeBins(e, containerEl, dados, state);
      });
      containerEl.addEventListener('click', function (e) { dataOnClick(e, containerEl, dados, state); });
      /* store state on container for external access */
      containerEl.__dataSimState = { dados: dados, state: state };
      return {
        destroy: function () {
          if (destruido) return;
          destruido = true;
          try { dataMontados['delete'](containerEl); } catch (e2) {}
          try { containerEl.innerHTML = ''; } catch (e3) {}
          try { delete containerEl.__dataSimState; } catch (e4) {}
        }
      };
    } catch (e) {
      try { dataMontados['delete'](containerEl); } catch (e2) {}
      if (typeof console !== 'undefined' && console.error) console.error('DataSimulator.mount: falha —', (e && e.message) || e);
      return undefined;
    }
  }

  var DataSimulator = {
    versaoDeclarada: 'simulador didático de dados e visualização — implementação própria em SVG (sem Chart.js/ECharts). Sem eval/fetch/import/CDN. Funciona em file://.',
    mount: mountData,
    dadosDefault: dadosDefault,
    COLUNAS: COLUNAS,
    estatisticas: { media: media, mediana: mediana, moda: moda, desvioPadrao: desvioPadrao, minimo: minimo, maximo: maximo, quartis: quartis },
    escopo: {
      operacoes: [
        'edição de conjunto de dados (tabela — notas por aluno x disciplina)',
        'estatísticas básicas: média, mediana, moda, desvio padrão, quartis, amplitude, coef. de variação',
        'histograma (com número configurável de classes — cálculo real de bins)',
        'gráfico de linha (notas por aluno x disciplina, escala 0–10)',
        'barras/colunas (média por aluno)',
        'dispersão (scatter: Nota 1 × Nota 2)',
        'box plot (resumo de cinco números: Q1, mediana, Q3, bigodes, outliers)'
      ],
      saidas: [
        'tabela editável com recálculo automático da média',
        'painel de estatísticas (10 métricas)',
        '5 gráficos SVG (histograma, linha, barras, dispersão, box plot)',
        'explicação dinâmica que muda conforme os dados alteram'
      ],
      observacao: 'Todos os gráficos são calculados a partir dos dados reais da tabela. Gráficos SVG próprios (sem bibliotecas externas). Desvio padrão amostral (n-1).'
    },
    limitacoes: [
      'implementação própria de SVG — sem Chart.js, ECharts ou outra biblioteca',
      'até 6 alunos / 3 disciplinas numéricas (ampliável editando dadosDefault)',
      'sem importação/exportação de dados para arquivo',
      'sem atualização animada — recálculo síncrono após edição',
      'moda: se todos os valores são únicos, retorna "ausente" (amostra sem moda)',
      'não testado em navegador real neste turno (verificado com node --check e smoke test em Node/vm)'
    ]
  };

  /* Compatibilidade: navegador (window) + Node (globalThis/module). */
  if (typeof window !== 'undefined') { window.DataSimulator = DataSimulator; }
  if (typeof globalThis !== 'undefined') { globalThis.DataSimulator = DataSimulator; }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DataSimulator; }
})(typeof window !== 'undefined' ? window : globalThis);
