/* progress.js — PAINEL CONSOLIDADO DE PROGRESSO (Seção 14 do Escrita.txt).
 *
 * Lê localStorage['apostila-ia-progresso'] (via StorageApp quando disponível,
 * com fallback direto ao localStorage) e window.apostilaDados (currículo +
 * flashcards) para exibir:
 *   - progresso geral % (unidades concluídas / pendentes, tópicos visitados)
 *   - progresso por módulo
 *   - flashcards dominados / vencidos / pendentes / em revisão
 *   - histórico de simulados (namespace 'questoes')
 * Exportação/importação de backup global (JSON) via botões.
 * Trata indisponibilidade de storage com mensagem visível.
 *
 * Contêiner: #progress-app. Expor window.ProgressApp = { mount, destroy, ... }.
 * SEM eval. SEM fetch. Funciona em file://. Texto de dados passa por esc().
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'apostila-ia-progresso';

  function obterStorage() {
    if (typeof window !== 'undefined' && window.StorageApp && typeof window.StorageApp.lerTudo === 'function') {
      return window.StorageApp;
    }
    if (typeof window !== 'undefined' && window.ApostilaStorage && typeof window.ApostilaStorage.lerTudo === 'function') {
      return window.ApostilaStorage;
    }
    // Fallback direto ao localStorage (mesma semântica mínima).
    return {
      disponivel: function () {
        try {
          if (typeof localStorage === 'undefined' || localStorage === null) return false;
          localStorage.setItem('__probe__', '1');
          localStorage.removeItem('__probe__');
          return true;
        } catch (e) { return false; }
      },
      lerTudo: function () {
        try {
          var raw = localStorage.getItem(STORAGE_KEY);
          if (!raw) return { _v: 1 };
          var obj = JSON.parse(raw);
          return (obj && typeof obj === 'object' && !Array.isArray(obj)) ? obj : { _v: 1 };
        } catch (e) { return { _v: 1 }; }
      },
      escreverTudo: function (obj) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); return true; }
        catch (e) { return false; }
      },
      exportar: function () { try { return JSON.stringify(this.lerTudo(), null, 2); } catch (e) { return '{}'; } },
      importar: function (json) {
        try {
          var obj = JSON.parse(json);
          if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
          return this.escreverTudo(obj);
        } catch (e) { return false; }
      },
      limparTudo: function () { try { localStorage.removeItem(STORAGE_KEY); return true; } catch (e) { return false; } }
    };
  }

  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatarData(iso) {
    if (!iso) return '—';
    try { return new Date(iso).toLocaleString('pt-BR'); }
    catch (e) { return String(iso).slice(0, 19).replace('T', ' '); }
  }

  function formatarPct(n) {
    if (!isFinite(n)) return '0%';
    return (Math.round(n * 10) / 10).toFixed(1) + '%';
  }

  /* ---------- Estado ---------- */
  var estado = { container: null, montado: false, dados: null };

  function dadosCurriculo() {
    if (typeof window !== 'undefined' && window.apostilaDados && window.apostilaDados.curriculum) {
      return window.apostilaDados.curriculum;
    }
    return {};
  }

  function dadosFlashcards() {
    if (typeof window !== 'undefined' && window.apostilaDados && window.apostilaDados.flashcards) {
      return window.apostilaDados.flashcards;
    }
    return {};
  }

  function progresso() {
    var st = obterStorage();
    if (!st.disponivel()) return {};
    try { return st.lerTudo() || {}; }
    catch (e) { return {}; }
  }

  /* ---------- Computação ---------- */
  function modulosOrdenados() {
    var cur = dadosCurriculo();
    var nums = [];
    Object.keys(cur).forEach(function (k) {
      var m = /^modulo-(\d+)$/.exec(k);
      if (m) nums.push(parseInt(m[1], 10));
    });
    nums.sort(function (a, b) { return a - b; });
    return nums;
  }

  function visitadosDoModulo(mod, prog) {
    var p = prog && prog[mod];
    if (!p || typeof p !== 'object' || Array.isArray(p)) return {};
    return p;
  }

  function contarTopicos(modDados) {
    var total = 0;
    var ids = [];
    (modDados.unidades || []).forEach(function (u) {
      (u.topicos || []).forEach(function (t) {
        ids.push(t.id);
        total += 1;
        (t.subtopicos || []).forEach(function (s) {
          ids.push(s.id);
          total += 1;
        });
      });
    });
    return { total: total, ids: ids };
  }

  function contarUnidades(modDados) {
    var unidades = [];
    (modDados.unidades || []).forEach(function (u) {
      var ids = [];
      (u.topicos || []).forEach(function (t) {
        ids.push(t.id);
        (t.subtopicos || []).forEach(function (s) { ids.push(s.id); });
      });
      unidades.push({ titulo: u.titulo, ids: ids });
    });
    return unidades;
  }

  function computeProgresso() {
    var cur = dadosCurriculo();
    var prog = progresso();
    var modulos = modulosOrdenados();
    var resultado = {
      storageDisponivel: obterStorage().disponivel(),
      unidadesTotal: 0,
      unidadesConcluidas: 0,
      topicosTotal: 0,
      topicosVisitados: 0,
      porModulo: [],
      flashcards: { total: 0, dominado: 0, vencido: 0, revisao: 0, pendente: 0, porModulo: [] },
      simulados: { total: 0, mediaNota: null, melhor: null, tentativas: [] }
    };

    modulos.forEach(function (n) {
      var chave = 'modulo-' + n;
      var modDados = cur[chave];
      if (!modDados) return;
      var t = contarTopicos(modDados);
      var units = contarUnidades(modDados);
      var vis = visitadosDoModulo(chave, prog);
      var topicosVisitadosMod = 0;
      t.ids.forEach(function (id) {
        if (vis[id] && vis[id].dataConclusao) topicosVisitadosMod += 1;
      });
      var unidadesConcluidasMod = 0;
      units.forEach(function (u) {
        if (u.ids.length === 0) return;
        var todas = u.ids.every(function (id) { return vis[id] && vis[id].dataConclusao; });
        if (todas) unidadesConcluidasMod += 1;
      });

      resultado.topicosTotal += t.total;
      resultado.topicosVisitados += topicosVisitadosMod;
      resultado.unidadesTotal += units.length;
      resultado.unidadesConcluidas += unidadesConcluidasMod;

      resultado.porModulo.push({
        numero: n,
        chave: chave,
        titulo: modDados.titulo || ('Módulo ' + n),
        topicosTotal: t.total,
        topicosVisitados: topicosVisitadosMod,
        unidadesTotal: units.length,
        unidadesConcluidas: unidadesConcluidasMod
      });
    });

    // Flashcards
    var fcDados = dadosFlashcards();
    var fcProg = (prog && prog.flashcards && typeof prog.flashcards === 'object' && !Array.isArray(prog.flashcards)) ? prog.flashcards : {};
    var agora = new Date();
    Object.keys(fcDados).forEach(function (chave) {
      var cartoes = fcDados[chave];
      if (!Array.isArray(cartoes)) return;
      var modNum = (chave.match(/^modulo-(\d+)$/) || [])[1];
      var modStats = { modulo: chave, numero: modNum ? parseInt(modNum, 10) : null, total: cartoes.length, dominado: 0, vencido: 0, revisao: 0, pendente: 0 };
      cartoes.forEach(function (c) {
        resultado.flashcards.total += 1;

        var reg = fcProg[c.id];
        var classe;
        if (!reg || typeof reg !== 'object' || !reg.ultimaRevisao) classe = 'pendente';
        else {
          var prox = reg.proximaRevisao ? Date.parse(reg.proximaRevisao) : NaN;
          if (!isNaN(prox) && prox <= agora.getTime()) classe = 'vencido';
          else if (typeof reg.intervaloDias === 'number' && reg.intervaloDias >= 21) classe = 'dominado';
          else classe = 'revisao';
        }
        resultado.flashcards[classe] += 1;
        modStats[classe] += 1;
      });
      resultado.flashcards.porModulo.push(modStats);
    });

    // Simulados
    var q = prog && prog.questoes && typeof prog.questoes === 'object' ? prog.questoes : null;
    var tentativas = (q && Array.isArray(q.tentativas)) ? q.tentativas : [];
    resultado.simulados.tentativas = tentativas.slice().reverse().slice(0, 10);
    resultado.simulados.total = tentativas.length;
    if (tentativas.length) {
      var soma = 0;
      var melhor = -Infinity;
      tentativas.forEach(function (t) {
        var nota = (t && typeof t.nota === 'number') ? t.nota : null;
        if (nota !== null) { soma += nota; if (nota > melhor) melhor = nota; }
      });
      // Tempo de estudo (agregado de tentativas de simulado)
      var tempoEstudoMs = 0;
      tentativas.forEach(function (t) {
        if (t && typeof t.tempoTotalMs === 'number') tempoEstudoMs += t.tempoTotalMs;
      });
      resultado.simulados.tempoEstudoMs = tempoEstudoMs;
      var comNota = tentativas.filter(function (t) { return t && typeof t.nota === 'number'; }).length;
      resultado.simulados.mediaNota = comNota ? soma / comNota : null;
      resultado.simulados.melhor = (melhor === -Infinity) ? null : melhor;
    }
    return resultado;
  }

  /* ---------- Render ---------- */
  function render() {
    if (!estado.container) return;
    var st = obterStorage();
    if (!st.disponivel()) {
      estado.container.innerHTML =
        '<div class="pg-aviso">Armazenamento local (<code>localStorage</code>) indisponível neste contexto (modo privado ou restrição do navegador). O progresso não pode ser lido nem salvo. Use um navegador em modo normal ou exporte um backup em outra sessão.</div>';
      return;
    }
    var prog = computeProgresso();
    var pctGeral = prog.unidadesTotal > 0 ? (prog.unidadesConcluidas / prog.unidadesTotal * 100) : 0;
    var pctTopicos = prog.topicosTotal > 0 ? (prog.topicosVisitados / prog.topicosTotal * 100) : 0;

    var html = '';
    html += '<h2>Painel de progresso <span class="label label-ok">CONSOLIDADO</span></h2>';
    html += '<p>Leitura da chave <code>apostila-ia-progresso</code> (currículo, flashcards e simulados) e de <code>window.apostilaDados</code>. Advertência: modo privado/file:// pode limpar dados — use Exportar backup.</p>';

    // Resumo geral
    html += '<div class="pg-resumo">';
    html += '<div class="pg-card"><strong>Progresso geral (unidades)</strong><div class="pg-big">' + formatarPct(pctGeral) + '</div><div class="pg-sub">' + prog.unidadesConcluidas + ' de ' + prog.unidadesTotal + ' unidades concluídas</div></div>';
    html += '<div class="pg-card"><strong>Tópicos visitados</strong><div class="pg-big">' + formatarPct(pctTopicos) + '</div><div class="pg-sub">' + prog.topicosVisitados + ' de ' + prog.topicosTotal + '</div></div>';
    html += '<div class="pg-card"><strong>Flashcards</strong><div class="pg-big">' + prog.flashcards.total + '</div><div class="pg-sub">' + prog.flashcards.dominado + ' dominados · ' + prog.flashcards.vencido + ' vencidos · ' + prog.flashcards.pendente + ' pendentes</div></div>';
    html += '<div class="pg-card"><strong>Simulados</strong><div class="pg-big">' + prog.simulados.total + '</div><div class="pg-sub">' + (prog.simulados.mediaNota === null ? 'sem tentativas' : 'média ' + formatarPct(prog.simulados.mediaNota)) + (prog.simulados.melhor !== null ? ' · melhor ' + formatarPct(prog.simulados.melhor) : '') + '</div></div>';
    html += '</div>';

    // Por módulo
    html += '<h3>Por módulo</h3>';
    html += '<table class="pg-tabela"><thead><tr><th>Módulo</th><th>Título</th><th>Tópicos</th><th>Unidades</th><th>% tópicos</th></tr></thead><tbody>';
    prog.porModulo.forEach(function (m) {
      var pct = m.topicosTotal > 0 ? (m.topicosVisitados / m.topicosTotal * 100) : 0;
      html += '<tr><td>M' + m.numero + '</td><td>' + esc(m.titulo) + '</td><td>' + m.topicosVisitados + '/' + m.topicosTotal + '</td><td>' + m.unidadesConcluidas + '/' + m.unidadesTotal + '</td><td>' + formatarPct(pct) + '</td></tr>';
    });
    html += '</tbody></table>';

    // Flashcards por módulo
    html += '<h3>Flashcards por módulo</h3>';
    html += '<table class="pg-tabela"><thead><tr><th>Módulo</th><th>Total</th><th>Dominados</th><th>Vencidos</th><th>Em revisão</th><th>Pendentes</th></tr></thead><tbody>';
    prog.flashcards.porModulo.forEach(function (m) {
      html += '<tr><td>M' + (m.numero || '?') + '</td><td>' + m.total + '</td><td>' + m.dominado + '</td><td>' + m.vencido + '</td><td>' + m.revisao + '</td><td>' + m.pendente + '</td></tr>';
    });
    html += '</tbody></table>';

    // Histórico simulados
    html += '<h3>Histórico de simulados (últimas 10)</h3>';
    if (prog.simulados.tentativas.length === 0) {
      html += '<p><em>Nenhuma tentativa registrada.</em></p>';
    } else {
      html += '<table class="pg-tabela"><thead><tr><th>Data</th><th>Nota</th><th>Taxa</th><th>Respondidas</th><th>Não resp.</th><th>Tempo</th></tr></thead><tbody>';
      prog.simulados.tentativas.forEach(function (t) {
        html += '<tr><td>' + esc(formatarData(t.dataFim || t.dataInicio || t.data)) + '</td>' +
          '<td>' + (typeof t.nota === 'number' ? formatarPct(t.nota) : '—') + '</td>' +
          '<td>' + (typeof t.taxaAcerto === 'number' ? formatarPct(t.taxaAcerto) : '—') + '</td>' +
          '<td>' + (t.respondidas != null ? esc(t.respondidas) : '—') + '</td>' +
          '<td>' + (t.naoRespondidas != null ? esc(t.naoRespondidas) : '—') + '</td>' +
          '<td>' + (t.tempoTotalMs != null ? Math.round(Number(t.tempoTotalMs) / 1000) + 's' : '—') + '</td></tr>';
      });
      html += '</tbody></table>';
    }

    // Backup
    html += '<div class="pg-backup">';
    html += '<h3>Backup global (JSON)</h3>';
    html += '<p>Exporta/importa TUDO (currículo, flashcards, simulados) na chave <code>apostila-ia-progresso</code>.</p>';
    html += '<button type="button" data-pg="exportar" class="pg-btn">Exportar backup</button> ';
    html += '<label class="pg-btn pg-import">Importar backup <input type="file" accept="application/json,.json" data-pg="importar" hidden></label>';
    html += '<span id="pg-status" class="pg-status"></span>';
    html += '</div>';

    estado.container.innerHTML = html;

    // Handlers
    var btnExp = estado.container.querySelector('[data-pg="exportar"]');
    if (btnExp) btnExp.addEventListener('click', function () { exportarBackup(); });
    var inp = estado.container.querySelector('[data-pg="importar"]');
    if (inp) inp.addEventListener('change', function (e) { importarBackup(e); });
  }

  function setStatus(msg) {
    var el = estado.container ? estado.container.querySelector('#pg-status') : null;
    if (el) el.textContent = msg;
  }

  function exportarBackup() {
    var st = obterStorage();
    var json = st.exportar ? st.exportar() : JSON.stringify(st.lerTudo(), null, 2);
    try {
      var blob = new Blob([json], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'apostila-ia-progresso-backup.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setStatus('Backup exportado.');
    } catch (e) {
      setStatus('Falha ao exportar: ' + (e && e.message ? e.message : e));
    }
  }

  function importarBackup(e) {
    var file = e.target && e.target.files && e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (ev) {
      var st = obterStorage();
      var ok = st.importar ? st.importar(String(ev.target.result)) : false;
      if (!ok) { setStatus('Importação falhou (JSON inválido).'); return; }
      setStatus('Backup importado. Recarregando painel...');
      render();
    };
    reader.onerror = function () { setStatus('Erro ao ler arquivo.'); };
    reader.readAsText(file);
    e.target.value = '';
  }

  /* ---------- Estilos ---------- */
  function injetarEstilos() {
    if (document.getElementById('pg-style')) return;
    var style = document.createElement('style');
    style.id = 'pg-style';
    style.textContent = [
      '.pg-aviso{background:#fce8e6;border:1px solid #f6bbb4;border-radius:8px;padding:.6rem .8rem;color:#a50e0e;}',
      '.pg-resumo{display:flex;flex-wrap:wrap;gap:.6rem;margin:.8rem 0;}',
      '.pg-card{flex:1 1 180px;border:1px solid #dde2e7;border-radius:8px;padding:.6rem .8rem;background:#fff;}',
      '.pg-big{font-size:1.5rem;font-weight:700;color:#174878;}',
      '.pg-sub{font-size:.82rem;color:#374151;}',
      '.pg-tabela{width:100%;border-collapse:collapse;font-size:.88rem;margin:.4rem 0;}',
      '.pg-tabela th,.pg-tabela td{border:1px solid #dde2e7;padding:.25rem .4rem;}',
      '.pg-tabela thead th{background:#e8eaed;}',
      '.pg-backup{margin-top:1rem;border-top:1px dashed #dde2e7;padding-top:.6rem;}',
      '.pg-btn{border-radius:8px;padding:.4rem .7rem;border:1px solid #174878;background:#e8f0fe;color:#174ea6;cursor:pointer;font-size:.9rem;}',
      '.pg-import{display:inline-block;}',
      '.pg-status{margin-left:.6rem;font-size:.88rem;color:#374151;}',
      '@media (prefers-color-scheme: dark){.pg-card{background:#202124;border-color:#374151;}.pg-tabela th,.pg-tabela td{border-color:#374151;}.pg-tabela thead th{background:#3c4043;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function removerEstilos() {
    var s = document.getElementById('pg-style');
    if (s && s.parentNode) s.parentNode.removeChild(s);
  }

  /* ---------- Mount/Destroy ---------- */
  function mount(el) {
    if (!el || typeof el.appendChild === 'undefined') {
      console.warn('ProgressApp: contêiner ausente — mount() ignorado.');
      return false;
    }
    if (estado.montado && estado.container === el) return true;
    if (estado.montado) destroy();
    estado.container = el;
    estado.montado = true;
    injetarEstilos();
    render();
    return true;
  }

  function destroy() {
    if (estado.container) estado.container.innerHTML = '';
    estado.container = null;
    estado.montado = false;
    removerEstilos();
  }

  window.ProgressApp = {
    mount: mount,
    destroy: destroy,
    computeProgresso: computeProgresso,
    render: render,
    exportarBackup: exportarBackup,
    _estado: estado,
    _helpers: { esc: esc, obterStorage: obterStorage }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('progress-app');
    if (el) window.ProgressApp.mount(el);
  });
})();
