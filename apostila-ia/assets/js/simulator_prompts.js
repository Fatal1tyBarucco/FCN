/* ==========================================================================
 * Simulador Prompts — Módulo 5 (Seção 7.4 da Escrita.txt)
 * Apostila Web Interativa FCN — incremental, sem build, compatível com file://
 * ==========================================================================
 *
 * ESTE ARQUIVO É
 *   Auto-contido: UI declarativa via mount(el), sem eval/fetch/import/CDN.
 *   NÃO chama modelos de IA reais — todas as "respostas" são SIMULAÇÕES
 *   PREDEFINIDAS, claramente marcadas como simuladas (Seção 7.4:
 *   "Não apresente respostas predefinidas como geração real de modelo de IA";
 *   Seção 5.4: "Simulação local sem API externa").
 *
 * SIMULADOR DE ENGENHARIA DE PROMPTS:
 *   - Editor de prompts com campos contexto / objetivo / restrições / formato
 *   - Comparação entre dois prompts (ruim x bom)
 *   - Avaliação por critérios verificáveis (clareza, especificidade,
 *     completude, segurança)
 *   - Exemplos predefinidos de entrada/saída (simulada)
 *   - Demonstração de ambiguidade e melhoria
 *   - Simulação local de output (sem API externa)
 *
 * AUTO-CONTIDO: injeta <style> escopado por .sim-prompts via innerHTML;
 * destroy limpa o container. Não toca em assets/css/styles.css nem index.html.
 * Todo texto do aluno passa por esc() antes de innerHTML; saídas dinâmicas
 * usam textContent. mount não lança se o container faltar ou já montado.
 *
 * VERIFICADO: node --check + smoke test em Node (mount(null) e mount(fakeEl)
 * não lançam; retornam { destroy }).
 * ========================================================================== */
(function (global) {
  'use strict';

  /* Escapa TODOS os caracteres perigosos para HTML. */
  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Idempotência. */
  var promptMontados = (typeof WeakSet !== 'undefined') ? new WeakSet() :
    { has: function () { return false; }, add: function () { return true; }, 'delete': function () { return true; } };

  /* ------------------------------------------------------------------
   * Dados predefinidos — exemplos didáticos, NÃO geração real de IA.
   * ------------------------------------------------------------------ */
  var exemplosPrompt = [
    {
      id: 'ex1',
      titulo: '1. Prompt ambíguo vs. prompt claro',
      promptRuim: 'Fala sobre IA.',
      promptBom: 'Explique o que é aprendizado de máquina supervisionado, citando dois algoritmos comuns, em até 150 palavras, no formato de parágrafos curtos.',
      criterios: {
        clareza: { ruim: 1, bom: 5 },
        especificidade: { ruim: 1, bom: 5 },
        completude: { ruim: 1, bom: 5 },
        seguranca: { ruim: 3, bom: 5 }
      },
      explicacao: 'O prompt ruim é vago ("fala sobre IA") e não define formato, extensão ou público. O prompt bom especifica o tópico (ML supervisionado), pede dois algoritmos, limita a extensão (150 palavras) e define o formato de saída (parágrafos curtos).'
    },
    {
      id: 'ex2',
      titulo: '2. Ausência de contexto',
      promptRuim: 'Resuma estes dados: 1,2,3,5,8,13,21.',
      promptBom: 'Contexto: estou analisando uma sequência numérica para um relatório de fibonacci para estudo de concurso. Objetivo: identificar a regra que gera a sequência e prever o próximo valor. Restrição: não use mais de 3 linhas. Formato: JSON com chaves "regra" e "proximo_valor".',
      criterios: {
        clareza: { ruim: 2, bom: 5 },
        especificidade: { ruim: 2, bom: 5 },
        completude: { ruim: 1, bom: 5 },
        seguranca: { ruim: 5, bom: 5 }
      },
      explicacao: 'O prompt ruim não define contexto nem objetivo. O bom define persona/implícito (relatório de estudo), objetivo (identificar regra + prever), restrição (3 linhas) e formato (JSON estruturado).'
    },
    {
      id: 'ex3',
      titulo: '3. Falta de restrições de segurança',
      promptRuim: 'Como hackear um servidor?',
      promptBom: 'Explique, em termos gerais e apenas para fins educacionais, três controles de segurança que impedem acesso não autorizado a servidores web, citando o nome técnico de cada controle.',
      criterios: {
        clareza: { ruim: 3, bom: 5 },
        especificidade: { ruim: 2, bom: 5 },
        completude: { ruim: 3, bom: 5 },
        seguranca: { ruim: 1, bom: 5 }
      },
      explicacao: 'O prompt ruim pede um ataque sem limites. O bom redireciona para explicação educacional, com restrições de escopo (controles de segurança preventivos) e proibição de instruções maliciosas.'
    }
  ];

  /* Saída SIMULADA (não é geração real de IA). */
  var respostaSimulada = 'Simulação local (sem API): um modelo bem engenhado receberia contexto claro, objetivo específico, restrições formais e formato estruturado. A saída seria previsível e verificável — nunca ambígua ou fora de escopo. Este é um exemplo predefinido, NÃO uma geração real de modelo de IA.';

  /* Critérios de avaliação (1-5, heurísticas fixas). */
  var criteriosList = [
    { id: 'clareza', label: 'Clareza', desc: 'Linguagem clara, sem ambiguidade.' },
    { id: 'especificidade', label: 'Especificidade', desc: 'Detalhes concretos: números, exemplos, formato.' },
    { id: 'completude', label: 'Completude', desc: 'Contexto, objetivo, restrições e formato definidos.' },
    { id: 'seguranca', label: 'Segurança', desc: 'Evita pedidos maliciosos, dados sensíveis ou instruções perigosas.' }
  ];

  /* ------------------------------------------------------------------
   * Avaliação heurística de um prompt (1-5 por critério).
   * NÃO usa IA — regras fixas.
   * ------------------------------------------------------------------ */
  function avaliarPrompt(texto) {
    var t = String(texto || '');
    var scores = { clareza: 1, especificidade: 1, completude: 1, seguranca: 1 };
    if (t.length < 10) return scores;
    var lower = t.toLowerCase();
    /* Clareza: pontuação e estrutura de frase. */
    if (t.length > 40 && /[.,;:!?\n]/.test(t)) scores.clareza = 3;
    if (t.length > 60 && /[.,;:!?\n]/.test(t) && lower.split(/[ .,;!?\n]+/).length > 8) scores.clareza = 4;
    if (t.length > 80 && /[\.\n]/.test(t)) scores.clareza = 5;
    /* Especificidade: menciona números, formato, exemplos. */
    var specs = 0;
    if (/\b\d+\b/.test(t)) specs++;          /* número */
    if (/formato|json|parágrafo|lista| tabela|markdown/i.test(t)) specs++;
    if (/exemplo|exemplos|cite|citação/i.test(t)) specs++;
    if (/(até|menos de|no máximo|limitado a)/i.test(t)) specs++;
    if (/contexto|objetivo|restrição|regra/i.test(t)) specs++;
    scores.especificidade = Math.min(5, specs + 1);
    /* Completude: campos definidos. */
    var campos = 0;
    if (/contexto/i.test(t)) campos++;
    if (/objetivo/i.test(t)) campos++;
    if (/restriç/i.test(t)) campos++;
    if (/formato/i.test(t)) campos++;
    scores.completude = Math.min(5, campos + 1);
    /* Segurança: não pede ataque, dados pessoais, senhas. */
    var unsafe = 0;
    if (/hackear|invadir|atacar|explorar vulnerabilidade/i.test(t)) unsafe++;
    if (/senha|cpf|credito|cart.?o|dados pessoais/i.test(t)) unsafe++;
    if (/como farecer|instruçã?o passo a passo/i.test(t)) unsafe++;
    if (t.length > 30 && unsafe === 0) scores.seguranca = 4;
    if (t.length > 30 && unsafe === 0 && specs > 0) scores.seguranca = 5;
    if (unsafe > 0) scores.seguranca = Math.max(1, 3 - unsafe);
    return scores;
  }

  function promptScoreTotal(scores) {
    var total = 0;
    var chaves = Object.keys(scores);
    for (var i = 0; i < chaves.length; i++) total += scores[chaves[i]];
    return Math.round((total / (chaves.length * 5)) * 100);
  }

  function promptScoreBar(label, val) {
    var filled = '';
    for (var i = 0; i < 5; i++) {
      filled += i < val ? '\u25a0' : '\u25a1';
    }
    var classe = val >= 4 ? 'sim-prom-ok' : val >= 2 ? 'sim-prom-aviso' : 'sim-prom-err';
    return '<span class="' + esc(classe) + '">' + esc(label) + ': ' + filled + ' (' + val + '/5)</span>';
  }

  /* ------------------------------------------------------------------
   * CSS escopado (.sim-prompts)
   * ------------------------------------------------------------------ */
  var promptCss = '<style>'
    + '.sim-prompts{max-width:980px;margin:0 auto;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e3e9ff}'
    + '.sim-prompts h3{margin:8px 0 2px}.sim-prompts h4{margin:16px 0 6px;color:#cdd4de;font-size:1rem}'
    + '.sim-prompts-sub{color:#4b5563;font-size:.85rem;margin:0 0 12px}'
    + '.sim-prompts-bloco{background:#1f232c;border:1px solid #333947;border-radius:8px;padding:12px;margin:12px 0}' +
    '.sim-prompts-bloco .sim-prompts-sub{color:#cbd5e1}' +
    '.sim-prompts-field{margin-bottom:10px}'
    + '.sim-prompts-label{display:block;font-size:.78rem;color:#9ca3af;margin-bottom:2px}'
    + '.sim-prompts-input{width:100%;font-family:"Courier New",monospace;font-size:.82rem;background:#111318;color:#e3e9ff;border:1px solid #3a4252;border-radius:4px;padding:6px;resize:vertical}'
    + '.sim-prompts-input textarea{width:100%;min-height:60px}'
    + '.sim-prompts-in-sm{width:48%;font-size:.82rem;padding:4px}'
    + '.sim-prompts-btn{background:#3a4252;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:6px 14px;font-size:.8rem;cursor:pointer;margin:4px 4px 4px 0}'
    + '.sim-prompts-btn:hover{background:#4a5466}'
    + '.sim-prompts-ok{color:#5ee0a0}.sim-prompts-err{color:#ff7b7b}.sim-prompts-aviso{color:#ffd57c}'
    + '.sim-prompts-comparacao{display:grid;grid-template-columns:1fr 1fr;gap:12px}'
    + '.sim-prompts-comparacao div{background:#161a21;border:1px solid #333947;border-radius:6px;padding:8px}'
    + '.sim-prompts-sim{background:#1b1e24;border-left:3px solid #4a94d4;margin:8px 0;padding:8px;font-size:.82rem;color:#b9c0d4}'
    + '.sim-prompts-nota{font-size:1.1rem;font-weight:600}'
    + '.sim-prompts-link{color:#174ea6;cursor:pointer;text-decoration:underline}'
    + '.sim-prompts-nav{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.sim-prompts-nav-btn{background:#2a2f3a;color:#cdd4de;border:1px solid #3a4252;border-radius:4px;padding:4px 12px;font-size:.8rem;cursor:pointer}'
    + '.sim-prompts-nav-btn:hover{background:#3a4252}'
    + '.sim-prompts-ponteiro{cursor:col-resize}'
    + '</style>';

  /* ------------------------------------------------------------------
   * UI builders
   * ------------------------------------------------------------------ */
  function promptBuildEditor() {
    var html = '<div class="sim-prompts-bloco"><h4>Editor de prompts</h4>';
    html += '<p class="sim-prompts-sub">Preencha os campos abaixo. A avaliação usa critérios heurísticos fixos (não é IA real).</p>';
    html += '<div class="sim-prompts-field"><label class="sim-prompts-label">Contexto (quem sou eu? quem é o público?)</label>';
    html += '<textarea id="prom-ctx" aria-label="Contexto do prompt" class="sim-prompts-input" placeholder="Ex.: Sou estudante de concurso público. O público é candidatos a TI.">' + esc('') + '</textarea></div>';
    html += '<div class="sim-prompts-field"><label class="sim-prompts-label">Objetivo (o que quero que aconteça?)</label>';
    html += '<textarea id="prom-obj" aria-label="Objetivo do prompt" class="sim-prompts-input" placeholder="Ex.: Explique sub-redes IPv4 em 3 parágrafos.">' + esc('') + '</textarea></div>';
    html += '<div class="sim-prompts-field"><label class="sim-prompts-label">Restrições (limite de palavras, tom, formato de saída?)</label>';
    html += '<textarea id="prom-res" aria-label="Restrições do prompt" class="sim-prompts-input" placeholder="Ex.: Máximo 150 palavras, tom didático, saída em JSON.">' + esc('') + '</textarea></div>';
    html += '<div class="sim-prompts-field"><label class="sim-prompts-label">Formato de saída (como a resposta deve ser estruturada?)</label>';
    html += '<textarea id="prom-fmt" aria-label="Formato de saída do prompt" class="sim-prompts-input" placeholder="Ex.: Parágrafos curtos com exemplo numérico.">' + esc('') + '</textarea></div>';
    html += '<button type="button" class="sim-prompts-btn" data-act="prom-avaliar">Avaliar prompt</button>';
    html += '<button type="button" class="sim-prompts-btn" data-act="prom-simular">Simular saída (local)</button>';
    html += '<button type="button" class="sim-prompts-btn" data-act="prom-reset">Nova avaliação</button>';
    html += '<div id="prom-resultado" class="sim-prompts-aviso" style="margin-top:8px">Preencha os campos e clique em Avaliar.</div>';
    html += '</div>';
    return html;
  }

  function promptBuildComparacao() {
    var html = '<div class="sim-prompts-bloco"><h4>Comparação entre prompts</h4>';
    html += '<p class="sim-prompts-sub">Veja por que um prompt bem estruturado é mais eficaz que um ambíguo.</p>';
    for (var i = 0; i < exemplosPrompt.length; i++) {
      var ex = exemplosPrompt[i];
      html += '<div style="margin-bottom:16px">';
      html += '<strong>' + esc(ex.titulo) + '</strong>';
      html += '<div class="sim-prompts-comparacao">';
      html += '<div><h5 style="margin:4px 0;color:#ff7b7b">Prompt ruim (ambíguo)</h5><pre class="sim-prompts-input" tabindex="0">' + esc(ex.promptRuim) + '</pre>';
      html += '<div style="margin-top:6px"><strong>Pontuação:</strong> ' + esc(promptScoreTotal(avaliarPrompt(ex.promptRuim))) + '%</div></div>';
      html += '<div><h5 style="margin:4px 0;color:#5ee0a0">Prompt bom (engenharia aplicada)</h5><pre class="sim-prompts-input" tabindex="0">' + esc(ex.promptBom) + '</pre>';
      html += '<div style="margin-top:6px"><strong>Pontuação:</strong> ' + esc(promptScoreTotal(avaliarPrompt(ex.promptBom))) + '%</div></div>';
      html += '</div>';
      html += '<button type="button" class="sim-prompts-btn" data-act="prom-mostrar-indicadores" data-ex="' + esc(ex.id) + '" style="margin:6px 0">Mostrar indicadores</button>';
      html += '<div id="prom-ind-' + esc(ex.id) + '" class="sim-prompts-sim" style="display:none">' + esc(ex.explicacao) + '</div>';
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  function promptBuildAmbi() {
    var html = '<div class="sim-prompts-bloco"><h4>Demonstração de ambiguidade</h4>';
    html += '<p class="sim-prompts-sub">Um prompt ambíguo pode ser interpretado de várias formas. Veja como restringir a interpretação:</p>';
    html += '<div class="sim-prompts-sim"><strong>Prompt ambíguo:</strong><pre class="sim-prompts-input" tabindex="0">Me dê informações sobre segurança.</pre>'
      + '<p><strong>Possível interpretação 1:</strong> segurança física (portas, cercas, vigilância).</p>'
      + '<p><strong>Possível interpretação 2:</strong> segurança da informação (firewalls, criptografia, MFA).</p>'
      + '<p><strong>Possível interpretação 3:</strong> segurança de software (vulnerabilidades, patches).</p></div>';
    html += '<div class="sim-prompts-sim"><strong>Prompt restringido:</strong><pre class="sim-prompts-input" tabindex="0">Explique três mecanismos de autenticação multifator (MFA) usados em segurança da informação, com exemplo de cada um, em até 3 frases por mecanismo.</pre>'
      + '<p>Agora o escopo está claro: MFA, segurança da informação, 3 exemplos, formato de saída definido.</p></div>';
    html += '</div>';
    return html;
  }

  function promptBuildLimites() {
    var n = (PromptSimulator.escopo.operacoes) ? PromptSimulator.escopo.operacoes.length : 0;
    return '<div class="sim-prompts-bloco"><h4>Escopo declarado</h4>'
      + '<p>Este painel consome <code>PromptSimulator</code>: ' + esc(PromptSimulator.versaoDeclarada)
      + '. ' + n + ' opera\u00e7\u00f5es declaradas; veja o contrato no header de <code>assets/js/simulator_prompts.js</code>.</p></div>';
  }

  function promptBuildUI() {
    return '<div class="sim-prompts">'
      + '<h3>Simulador de Engenharia de Prompts (Seção 7.4)</h3>'
      + '<p class="sim-prompts-sub">Edite, avalie e compare prompts. <strong>Simulação local — sem API externa.</strong> Nenhuma saída é apresentada como geração real de modelo de IA.</p>'
      + '<nav class="sim-prompts-nav" aria-label="Navegação das seções do simulador de prompts">'
      + '<button type="button" class="sim-prompts-nav-btn" data-act="nav" data-target="editor">1. Editor de prompts</button>'
      + '<button type="button" class="sim-prompts-nav-btn" data-act="nav" data-target="comparacao">2. Comparação entre prompts</button>'
      + '<button type="button" class="sim-prompts-nav-btn" data-act="nav" data-target="ambiguidade">3. Ambiguidade</button>'
      + '<button type="button" class="sim-prompts-nav-btn" data-act="nav" data-target="limites">4. Escopo declarado</button>'
      + '</nav>'
      + '<div id="prom-pane-editor" class="prom-pane">' + promptBuildEditor() + '</div>'
      + '<div id="prom-pane-comparacao" class="prom-pane" style="display:none">' + promptBuildComparacao() + '</div>'
      + '<div id="prom-pane-ambiguidade" class="prom-pane" style="display:none">' + promptBuildAmbi() + '</div>'
      + '<div id="prom-pane-limites" class="prom-pane" style="display:none">' + promptBuildLimites() + '</div>'
      + '</div>';
  }

  /* ------------------------------------------------------------------
   * Event handlers
   * ------------------------------------------------------------------ */
  function promOnNav(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute) return;
    if (alvo.getAttribute('data-act') !== 'nav') return;
    var target = alvo.getAttribute('data-target');
    if (!target) return;
    var panes = containerEl.querySelectorAll('.prom-pane');
    for (var i = 0; i < panes.length; i++) {
      panes[i].style.display = (panes[i].id === 'prom-pane-' + target) ? 'block' : 'none';
    }
  }

  function promOnAvaliar(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-act') !== 'prom-avaliar') return;
    var ctx = containerEl.querySelector('#prom-ctx').value || '';
    var obj = containerEl.querySelector('#prom-obj').value || '';
    var res = containerEl.querySelector('#prom-res').value || '';
    var fmt = containerEl.querySelector('#prom-fmt').value || '';
    var texto = [ctx, obj, res, fmt].filter(function (x) { return x.trim(); }).join('\n\n');
    if (!texto) {
      promSetResult(containerEl, 'Preencha pelo menos um campo.', 'sim-prom-aviso');
      return;
    }
    var scores = avaliarPrompt(texto);
    var pct = promptScoreTotal(scores);
    var html = '<div class="sim-prompts-nota">' + esc('Pontuação: ' + pct + '%') + '</div>';
    var chaves = Object.keys(scores);
    for (var i = 0; i < chaves.length; i++) {
      html += '<div>' + promptScoreBar(criteriosList[i].label, scores[chaves[i]]) + ' — ' + esc(criteriosList[i].desc) + '</div>';
    }
    promSetResult(containerEl, html);
  }

  function promOnSimular(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-act') !== 'prom-simular') return;
    var ctx = containerEl.querySelector('#prom-ctx').value || '';
    var obj = containerEl.querySelector('#prom-obj').value || '';
    if (!obj.trim()) {
      promSetResult(containerEl, 'Defina um objetivo antes de simular a saída.', 'sim-prom-aviso');
      return;
    }
    var html = '<div class="sim-prompts-sim"><strong>Simulação local (sem API) — saída predefinida:</strong></div>';
    html += '<div class="sim-prompts-sim">' + esc(respostaSimulada) + '</div>';
    html += '<div class="sim-prompts-aviso" style="margin-top:6px">Este é um EXEMPLO PREDEFINIDO. Nenhum modelo de IA foi chamado. Em um prompt real bem estruturado, a saída seria mais precisa e consistente.</div>';
    promSetResult(containerEl, html);
  }

  function promOnReset(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-act') !== 'prom-reset') return;
    containerEl.querySelector('#prom-ctx').value = '';
    containerEl.querySelector('#prom-obj').value = '';
    containerEl.querySelector('#prom-res').value = '';
    containerEl.querySelector('#prom-fmt').value = '';
    promSetResult(containerEl, 'Campos limpos. Preencha e clique em Avaliar.', 'sim-prompts-aviso');
  }

  function promOnMostrarIndicadores(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute || alvo.getAttribute('data-act') !== 'prom-mostrar-indicadores') return;
    var exId = alvo.getAttribute('data-ex');
    if (!exId) return;
    var box = containerEl.querySelector('#' + CSS.escape('prom-ind-' + exId));
    if (!box) return;
    if (box.style.display === 'block') {
      box.style.display = 'none';
      alvo.textContent = 'Mostrar indicadores';
    } else {
      box.style.display = 'block';
      alvo.textContent = 'Ocultar indicadores';
    }
  }

  function promSetResult(containerEl, html, classe) {
    var box = containerEl.querySelector('#prom-resultado');
    if (!box) return;
    if (classe) {
      box.innerHTML = '<div class="' + esc(classe) + '">' + html + '</div>';
    } else {
      box.innerHTML = html;
    }
  }

  function promOnClick(e, containerEl) {
    promOnNav(e, containerEl);
    promOnAvaliar(e, containerEl);
    promOnSimular(e, containerEl);
    promOnReset(e, containerEl);
    promOnMostrarIndicadores(e, containerEl);
  }

  /* ------------------------------------------------------------------
   * mount
   * ------------------------------------------------------------------ */
  function mountPrompt(containerEl) {
    if (!containerEl || typeof containerEl !== 'object') return undefined;
    if (promptMontados.has(containerEl)) return undefined;
    try {
      var destruido = false;
      promptMontados.add(containerEl);
      containerEl.innerHTML = promptCss + promptBuildUI();
      containerEl.addEventListener('click', function (e) { promOnClick(e, containerEl); });
      return {
        destroy: function () {
          if (destruido) return;
          destruido = true;
          try { promptMontados['delete'](containerEl); } catch (e2) {}
          try { containerEl.innerHTML = ''; } catch (e3) {}
        }
      };
    } catch (e) {
      try { promptMontados['delete'](containerEl); } catch (e2) {}
      if (typeof console !== 'undefined' && console.error) console.error('PromptSimulator.mount: falha —', (e && e.message) || e);
      return undefined;
    }
  }

  var PromptSimulator = {
    versaoDeclarada: 'simulador didático de engenharia de prompts — avaliação heurística (não IA real); simulação local sem API externa; saídas predefinidas marcadas como simuladas.',
    mount: mountPrompt,
    avaliarPrompt: avaliarPrompt,
    respostaSimulada: respostaSimulada,
    exemplosPrompt: exemplosPrompt,
    escopo: {
      operacoes: [
        'edição de prompts com campos contexto / objetivo / restrições / formato',
        'avaliação heurística por critérios verificáveis (clareza, especificidade, completude, segurança)',
        'comparación entre prompts (ruim x bom) com pontuação e indicadores',
        'demonstração de ambiguidade e restringição de escopo',
        'simulação local de saída (sem API externa — saída predefinida e marcada)'
      ],
      saidas: [
        'pontuação 0-100% + breakdown por critério (1-5)',
        'feedback comparativo entre prompts',
        'explicação de ambiguidade e como restringir interpretação',
        'simulação de saída claramente marcada como não real'
      ],
      observacao: 'Avaliação usa regras fixas (heurísticas), não modelo de IA. Simulação local sem chamadas externas.'
    },
    limitacoes: [
      'não chama modelos de IA reais — todas as saídas são simulações predefinidas',
      'critérios de avaliação são heurísticas fixas, não análise de LLM',
      'exemplos são predefinidos, não gerados dinamicamente',
      'não persiste prompts entre sessões',
      'simulação de saída não reflete capacidade real de modelo algum'
    ]
  };

  /* Compatibilidade: navegador (window) + Node (globalThis/module). */
  if (typeof window !== 'undefined') { window.PromptSimulator = PromptSimulator; }
  if (typeof globalThis !== 'undefined') { globalThis.PromptSimulator = PromptSimulator; }
  if (typeof module !== 'undefined' && module.exports) { module.exports = PromptSimulator; }
})(typeof window !== 'undefined' ? window : globalThis);
