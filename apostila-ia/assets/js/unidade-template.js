/**
 * unidade-template.js — Motor de renderização do Template Didático Obrigatório (Seção 5 do Escrita.md)
 *
 * Expõe window.FCNTemplate com:
 *   - obterEnriquecimento(idSubtopico): mescla overlay com fallback seguro
 *   - renderizarUnidade(subtopico, idSubtopico): devolve HTML completo do template da Seção 5
 *   - esc(texto): escape real de HTML (& < > " ')
 *   - _onChecklistChange(idSubtopico, itemIdx, checked): handler dos checkboxes
 *
 * Requisitos:
 *   - esc() escapa TODA interpolação (&, <, >, " e ') — sem caracteres crus
 *   - Sem eval, sem innerHTML com dados não escapados
 *   - Headings hierárquicos: <h4> título do subtópico, <h5> seções do template
 *   - Tabelas com caption e scope
 *   - Checkboxes de checklist persistidas em localStorage (chave apostila-ia-progresso,
 *     campo checklists), com merge seguro: nunca sobrescreve o progresso alheio
 *   - Degradação graciosa: se não há overlay, usa o conteúdo do currículo
 *
 * DECISÃO ARQUITETURAL (resolução do overlay, 2026-11-03):
 * Os arquivos assets/data/enriquecimento_m*.js declaram `const enriquecimentoM{N} = {...}`.
 * Em script clássico (file:// ou http estático), um `const` no nível superior de um
 * <script> cria um binding no ambiente léxico global (Global Lexical Environment) —
 * NÃO uma propriedade de window. Logo `window['enriquecimentoM1']` é `undefined` no
 * navegador, ainda que `vm.runInContext` do CI resolva o identificador. A resolução
 * portanto usa uma cadeia EXPLÍCITA de `typeof` com identificadores diretos (o padrão
 * já usado em navigation.js e db-modules.js), sem eval e sem indexação dinâmica de
 * binding léxico. O fallback por `window[varName]`/`globalThis[varName]` só é
 * consultado quando o binding léxico não existe, para compatibilidade com quem
 * exportar os dados como propriedade de window no futuro.
 */
(function () {
  'use strict';

  // -------------------------------------------------- esc() — escape real de HTML
  // A ordem é obrigatória: `&` primeiro, senão os `&` dos escapes seguintes
  // seriam escapados de novo. Aspas simples vão para entidade numérica.
  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // -------------------------------------------------- armazenamento de checklists
  const STORAGE_KEY = 'apostila-ia-progresso';

  /* Leitura tolerante: devolve sempre um objeto. Falha de leitura NÃO autoriza
     escrever `{}` por cima do progresso salvo (ver saveProgresso). */
  function loadProgresso() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const obj = JSON.parse(raw);
      if (obj && typeof obj === 'object' && !Array.isArray(obj)) return obj;
      return {};
    } catch (e) {
      console.error('Erro ao carregar progresso (checklist):', e);
      return {};
    }
  }

  /* Gravação segura: relê o valor atual e faz merge campo a campo, preservando
     tudo o que não é `checklists` (progresso de módulos, tema, flashcards,
     histórico de simulados etc. de outros motores). Se a releitura falhar,
     escreve apenas o pedaço novo em vez de apagar o objeto inteiro. */
  function saveProgresso(parcial) {
    let atual = {};
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const obj = JSON.parse(raw);
        if (obj && typeof obj === 'object' && !Array.isArray(obj)) atual = obj;
      }
    } catch (e) {
      console.error('Progresso existente ilegível; preservando apenas o namespace Checklists:', e);
    }
    if (parcial && typeof parcial === 'object' && !Array.isArray(parcial)) {
      Object.keys(parcial).forEach(function (chave) {
        if (chave === 'checklists') {
          const destino = (atual.checklists && typeof atual.checklists === 'object' && !Array.isArray(atual.checklists))
            ? atual.checklists : {};
          const origem = (parcial.checklists && typeof parcial.checklists === 'object') ? parcial.checklists : {};
          Object.keys(origem).forEach(function (id) {
            destino[id] = origem[id];
          });
          atual.checklists = destino;
        } else {
          atual[chave] = parcial[chave];
        }
      });
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(atual));
    } catch (e) {
      console.error('Erro ao salvar progresso (checklist):', e);
    }
  }

  function getChecklistState(idSubtopico) {
    const prog = loadProgresso();
    return (prog.checklists && prog.checklists[idSubtopico]) || {};
  }

  function setChecklistState(idSubtopico, itemIdx, checked) {
    const estado = {};
    estado[idSubtopico] = {};
    estado[idSubtopico][itemIdx] = !!checked;
    saveProgresso({ checklists: estado });
  }

  // -------------------------------------------------- helpers de renderização
  function renderList(items, ordered = false) {
    if (!Array.isArray(items) || items.length === 0) return '';
    const tag = ordered ? 'ol' : 'ul';
    let html = `<${tag}>`;
    for (const item of items) {
      const texto = String(item == null ? '' : item).trim();
      if (!texto) continue;
      html += `<li>${esc(texto)}</li>`;
    }
    html += `</${tag}>`;
    return html;
  }

  function renderKeyValuePairs(label, items, ordered = false) {
    if (!Array.isArray(items) || items.length === 0) return '';
    return `<p><strong>${esc(label)}:</strong></p>${renderList(items, ordered)}`;
  }

  /* Remove marcador de bullet (-, *, •, –) do início da linha, devolvendo
     null quando a linha não é bullet. */
  function bulletText(linha) {
    const m = /^\s*(?:[-*•–]|\d+[.)])\s+(.*)$/.exec(linha);
    return m ? m[1].trim() : null;
  }

  /* Converte um bloco de texto em HTML acessível.
   * - linha iniciada por `- ` (ou `* `, `• `, `1. `) vira <li> de uma lista real;
   * - linhas comuns viram <p>; blocos pequenos são agrupados em um único <p>
   *   quando são continuação (linha anterior sem pontuação final);
   * - CRLF normalizado e linhas vazias ignoradas. */
  function renderBlocos(texto) {
    const blocos = String(texto == null ? '' : texto).replace(/\r\n?/g, '\n').split(/\n{2,}/);
    let html = '';
    for (const bloco of blocos) {
      const linhas = bloco.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (linhas.length === 0) continue;

      let i = 0;
      while (i < linhas.length) {
        const b = bulletText(linhas[i]);
        if (b !== null) {
          const ordenada = /^\s*\d+[.)]\s+/.test(linhas[i]);
          const tag = ordenada ? 'ol' : 'ul';
          html += `<${tag}>`;
          while (i < linhas.length) {
            const item = bulletText(linhas[i]);
            if (item === null || !!ordenada !== /^\s*\d+[.)]\s+/.test(linhas[i])) break;
            html += `<li>${esc(item)}</li>`;
            i++;
          }
          html += `</${tag}>`;
          continue;
        }
        // Acumula linhas de prosa: param quando a linha anterior termina em
        // pontuação de fim de frase (. ! ? : ;) — torna parágrafos longos legíveis.
        let paragrafo = linhas[i];
        i++;
        while (i < linhas.length && bulletText(linhas[i]) === null && !/[.!?;:]$/.test(paragrafo)) {
          paragrafo += ' ' + linhas[i];
          i++;
        }
        html += `<p>${esc(paragrafo)}</p>`;
      }
    }
    return html;
  }

  /* Compatibilidade: devolve os blocos brutos (usado por consumidores e testes). */
  function splitIntoParagraphs(text) {
    return String(text == null ? '' : text)
      .split(/\n\n+/)
      .map(p => p.trim())
      .filter(p => p.length > 0);
  }

  // -------------------------------------------------- resolução estática do overlay
  /* Cadeia explícita por módulo. Cada ramo usa o identificador literal
     (`enriquecimentoM1`), acessível porque este arquivo é carregado depois dos
     dados no mesmo ambiente léxico global de script. */
  function enriquecimentoPorModulo(moduloNum) {
    switch (moduloNum) {
      case 1: return typeof enriquecimentoM1 !== 'undefined' ? enriquecimentoM1 : null;
      case 2: return typeof enriquecimentoM2 !== 'undefined' ? enriquecimentoM2 : null;
      case 3: return typeof enriquecimentoM3 !== 'undefined' ? enriquecimentoM3 : null;
      case 4: return typeof enriquecimentoM4 !== 'undefined' ? enriquecimentoM4 : null;
      case 5: return typeof enriquecimentoM5 !== 'undefined' ? enriquecimentoM5 : null;
      case 6: return typeof enriquecimentoM6 !== 'undefined' ? enriquecimentoM6 : null;
      case 7: return typeof enriquecimentoM7 !== 'undefined' ? enriquecimentoM7 : null;
      case 8: return typeof enriquecimentoM8 !== 'undefined' ? enriquecimentoM8 : null;
      default: return null;
    }
  }

  function obterEnriquecimento(idSubtopico) {
    if (typeof idSubtopico !== 'string' || !idSubtopico) return null;
    const m = /^(?:modulo-(\d+)-|m(\d+)-)/.exec(idSubtopico);
    if (!m) return null;
    const moduloNum = parseInt(m[1] || m[2], 10);
    if (!(moduloNum >= 1 && moduloNum <= 8)) return null;

    const fonte = enriquecimentoPorModulo(moduloNum);
    if (fonte && typeof fonte === 'object' && fonte[idSubtopico]) return fonte[idSubtopico];

    // Fallback de compatibilidade: só vale se alguém expuser os dados como
    // propriedade de window/globalThis. Nunca é o caminho principal.
    const varName = `enriquecimentoM${moduloNum}`;
    const alvo = (typeof window !== 'undefined' && window) ? window : globalThis;
    const viaWindow = alvo ? alvo[varName] : undefined;
    if (viaWindow && typeof viaWindow === 'object' && viaWindow[idSubtopico]) return viaWindow[idSubtopico];
    return null;
  }

  // -------------------------------------------------- renderizarUnidade — função principal
  function renderizarUnidade(subtopico, idSubtopico) {
    const sub = (subtopico && typeof subtopico === 'object') ? subtopico : {};
    const enr = obterEnriquecimento(idSubtopico);
    const temOverlay = !!enr;

    // ID único para ARIA — restrito a [A-Za-z0-9_-] para não quebrar seletores
    const baseId = esc(String(idSubtopico == null ? '' : idSubtopico).replace(/[^A-Za-z0-9_-]/g, '_'));

    let html = '';

    // ------------------------------------------------ (0) Cabeçalho: título + objetivo de aprendizagem
    const titulo = (typeof sub.titulo === 'string' && sub.titulo.trim()) ? sub.titulo.trim() : '';
    if (titulo) {
      html += `<h4 class="unidade-titulo" id="${baseId}-titulo">${esc(titulo)}</h4>`;
    }
    if (sub.objetivoAprendizagem) {
      html += `<p class="unidade-objetivo"><strong>Objetivo de aprendizagem:</strong> ${esc(sub.objetivoAprendizagem)}</p>`;
    }

    // ------------------------------------------------ (1) Orientação estratégica
    if (temOverlay && enr.orientacaoEstrategica) {
      const oe = enr.orientacaoEstrategica;
      html += `<section class="template-section" aria-labelledby="${baseId}-orientacao">`;
      html += `<h5 id="${baseId}-orientacao">Orientação estratégica</h5>`;

      if (oe.porqueImporta && String(oe.porqueImporta).trim()) {
        html += `<p><strong>Por que importa:</strong> ${esc(oe.porqueImporta)}</p>`;
      }

      if (Array.isArray(oe.preRequisitos) && oe.preRequisitos.length) {
        html += renderKeyValuePairs('Pré-requisitos', oe.preRequisitos);
      }

      if (Array.isArray(oe.objetivosObservaveis) && oe.objetivosObservaveis.length) {
        html += renderKeyValuePairs('Objetivos observáveis', oe.objetivosObservaveis);
      }

      if (Array.isArray(oe.competencias) && oe.competencias.length) {
        html += renderKeyValuePairs('Competências desenvolvidas', oe.competencias);
      }

      if (oe.dificuldade) {
        const difMap = {
          iniciante: 'Iniciante',
          intermediario: 'Intermediário',
          avancado: 'Avançado',
          especialista: 'Especialista'
        };
        html += `<p><strong>Grau de dificuldade:</strong> <span class="label label-info">${esc(difMap[oe.dificuldade] || oe.dificuldade)}</span></p>`;
      }

      if (Array.isArray(oe.relacoes) && oe.relacoes.length) {
        html += renderKeyValuePairs('Relação com outros tópicos', oe.relacoes);
      }

      if (oe.relevanciaConcurso && typeof oe.relevanciaConcurso === 'object') {
        const rc = oe.relevanciaConcurso;
        const clsMap = { alta: 'label-ok', media: 'label-info', baixa: 'label-aviso' };
        const cls = clsMap[rc.classificacao] || 'label-info';
        html += `<p><strong>Relevância para concursos:</strong> <span class="label ${cls}">${esc(rc.classificacao || 'média')}</span></p>`;
        if (rc.justificativa && String(rc.justificativa).trim()) {
          html += `<p>${esc(rc.justificativa)}</p>`;
        }
        if (rc.ressalva && String(rc.ressalva).trim()) {
          html += `<p><em>${esc(rc.ressalva)}</em></p>`;
        }
      }

      html += '</section>';
    }

    // ------------------------------------------------ (2) Fundamentação conceitual
    html += `<section class="template-section" aria-labelledby="${baseId}-fundamentacao">`;
    html += `<h5 id="${baseId}-fundamentacao">Fundamentação conceitual</h5>`;

    if (sub.conteudo && String(sub.conteudo).trim()) {
      html += renderBlocos(sub.conteudo);
    } else if (temOverlay && enr.niveis && enr.niveis.iniciante && String(enr.niveis.iniciante).trim()) {
      // Fallback: usa nível iniciante do overlay se não há conteudo no currículo
      html += renderBlocos(enr.niveis.iniciante);
    } else {
      html += '<p><em>Conteúdo textual não disponível para este subtópico.</em></p>';
    }

    html += '</section>';

    // ------------------------------------------------ (3) Progressão de dificuldade (4 níveis)
    if (temOverlay && enr.niveis) {
      const n = enr.niveis;
      const niveisOrdem = [
        { key: 'iniciante', label: 'Nível iniciante' },
        { key: 'intermediario', label: 'Nível intermediário' },
        { key: 'avancado', label: 'Nível avançado' },
        { key: 'especialista', label: 'Nível especialista' }
      ];

      const niveisPreenchidos = niveisOrdem.filter(nv => n[nv.key] && String(n[nv.key]).trim());
      if (niveisPreenchidos.length > 0) {
        html += `<section class="template-section" aria-labelledby="${baseId}-progressao">`;
        html += `<h5 id="${baseId}-progressao">Progressão de dificuldade</h5>`;

        for (const nv of niveisPreenchidos) {
          html += `<h6>${esc(nv.label)}</h6>`;
          html += renderBlocos(n[nv.key]);
        }

        html += '</section>';
      }
    }

    // ------------------------------------------------ (4) Exemplos resolvidos (9 partes cada)
    const exemplosParaRenderizar = temOverlay && Array.isArray(enr.exemplosDetalhados) && enr.exemplosDetalhados.length > 0
      ? enr.exemplosDetalhados
      : (Array.isArray(sub.exemplos) && sub.exemplos.length > 0
        ? sub.exemplos.map(ex => ({
            tipo: ex.tipo || 'exemplo',
            problema: ex.enunciado || '',
            dados: '',
            conceitos: [],
            estrategia: '',
            execucao: [],
            resultado: ex.resposta || ex.correcao || '',
            justificativa: '',
            errosFrequentes: [],
            variacao: ''
          }))
        : []);

    if (exemplosParaRenderizar.length > 0) {
      html += `<section class="template-section" aria-labelledby="${baseId}-exemplos">`;
      html += `<h5 id="${baseId}-exemplos">Exemplos resolvidos</h5>`;

      for (let i = 0; i < exemplosParaRenderizar.length; i++) {
        const ex = exemplosParaRenderizar[i];
        const tipoLabel = {
          introducao: 'Exemplo introdutório',
          aplicacao: 'Exemplo de aplicação prática',
          erro: 'Exemplo avançado / interpretação de erro'
        }[ex.tipo] || `Exemplo ${i + 1}`;

        html += `<article class="exemplo-detalhado" aria-labelledby="${baseId}-ex-${i}-titulo">`;
        html += `<h6 id="${baseId}-ex-${i}-titulo">${esc(tipoLabel)}</h6>`;

        if (ex.problema) html += `<p><strong>Problema proposto:</strong> ${esc(ex.problema)}</p>`;
        if (ex.dados) html += `<p><strong>Dados disponíveis:</strong> ${esc(ex.dados)}</p>`;
        if (Array.isArray(ex.conceitos) && ex.conceitos.length) {
          html += renderKeyValuePairs('Conceitos aplicáveis', ex.conceitos);
        }
        if (ex.estrategia) html += `<p><strong>Estratégia de resolução:</strong> ${esc(ex.estrategia)}</p>`;
        if (Array.isArray(ex.execucao) && ex.execucao.length) {
          html += renderKeyValuePairs('Execução passo a passo', ex.execucao, true);
        }
        if (ex.resultado) html += `<p><strong>Resultado esperado:</strong> ${esc(ex.resultado)}</p>`;
        if (ex.justificativa) html += `<p><strong>Justificativa técnica:</strong> ${esc(ex.justificativa)}</p>`;
        if (Array.isArray(ex.errosFrequentes) && ex.errosFrequentes.length) {
          html += renderKeyValuePairs('Erros frequentes', ex.errosFrequentes);
        }
        if (ex.variacao) html += `<p><strong>Variação para transferência:</strong> ${esc(ex.variacao)}</p>`;

        html += '</article>';
      }

      html += '</section>';
    }

    // ------------------------------------------------ (5) Comparações e distinções críticas (TABELA)
    if (temOverlay && Array.isArray(enr.comparacoes) && enr.comparacoes.length > 0) {
      html += `<section class="template-section" aria-labelledby="${baseId}-comparacoes">`;
      html += `<h5 id="${baseId}-comparacoes">Comparações e distinções críticas</h5>`;

      for (let i = 0; i < enr.comparacoes.length; i++) {
        const cmp = enr.comparacoes[i];
        const tableId = `${baseId}-cmp-${i}`;

        const rotuloA = (cmp.a && cmp.a.rotulo && String(cmp.a.rotulo).trim()) ? String(cmp.a.rotulo).trim() : 'Conceito A';
        const rotuloB = (cmp.b && cmp.b.rotulo && String(cmp.b.rotulo).trim()) ? String(cmp.b.rotulo).trim() : 'Conceito B';

        html += '<div class="table-wrapper" role="region" aria-label="' + esc(cmp.tema || 'Comparação') + '" tabindex="0">';
        html += `<table id="${tableId}" aria-describedby="${tableId}-caption">`;
        html += `<caption id="${tableId}-caption">${esc(cmp.tema || 'Comparação')}</caption>`;
        html += '<thead><tr>';
        html += '<th scope="col">Critério</th>';
        html += `<th scope="col">${esc(rotuloA)}</th>`;
        html += `<th scope="col">${esc(rotuloB)}</th>`;
        html += '</tr></thead><tbody>';

        html += '<tr>';
        html += '<th scope="row">Definição / Descrição</th>';
        html += `<td>${esc(cmp.a && cmp.a.texto ? cmp.a.texto : '')}</td>`;
        html += `<td>${esc(cmp.b && cmp.b.texto ? cmp.b.texto : '')}</td>`;
        html += '</tr>';

        html += '</tbody></table>';
        html += '</div>';

        if (cmp.diferencaGabarito && String(cmp.diferencaGabarito).trim()) {
          html += `<p class="diferenca-gabarito"><strong>Diferença que altera o gabarito:</strong> ${esc(cmp.diferencaGabarito)}</p>`;
        }
      }

      html += '</section>';
    }

    // ------------------------------------------------ (6) Erros, exceções e pegadinhas
    if (temOverlay && Array.isArray(enr.pegadinhas) && enr.pegadinhas.length > 0) {
      html += `<section class="template-section" aria-labelledby="${baseId}-pegadinhas">`;
      html += `<h5 id="${baseId}-pegadinhas">Erros, exceções e pegadinhas</h5>`;

      for (let i = 0; i < enr.pegadinhas.length; i++) {
        const p = enr.pegadinhas[i];
        html += `<article class="pegadinha-item" aria-labelledby="${baseId}-peg-${i}-titulo">`;
        html += `<h6 id="${baseId}-peg-${i}-titulo">Armadilha ${i + 1}</h6>`;
        if (p.afirmacaoEquivocada) html += `<p><strong>Afirmação equivocada:</strong> ${esc(p.afirmacaoEquivocada)}</p>`;
        if (p.porqueErrada) html += `<p><strong>Por que está errada:</strong> ${esc(p.porqueErrada)}</p>`;
        if (p.versaoCorreta) html += `<p><strong>Versão correta:</strong> ${esc(p.versaoCorreta)}</p>`;
        html += '</article>';
      }

      html += '</section>';
    }

    // ------------------------------------------------ (7) Resumo estruturado + Checklist
    if (temOverlay && enr.resumoEstruturado && typeof enr.resumoEstruturado === 'object') {
      const r = enr.resumoEstruturado;
      const checklistState = getChecklistState(idSubtopico);
      const temConteudoResumo = ['conceitos', 'regras', 'comparacoes', 'fluxos', 'excecoes', 'palavrasChave', 'checklist']
        .some(k => Array.isArray(r[k]) && r[k].length > 0);

      if (temConteudoResumo) {
        html += `<section class="template-section" aria-labelledby="${baseId}-resumo">`;
        html += `<h5 id="${baseId}-resumo">Resumo estruturado</h5>`;

        if (Array.isArray(r.conceitos) && r.conceitos.length) {
          html += renderKeyValuePairs('Conceitos essenciais', r.conceitos);
        }
        if (Array.isArray(r.regras) && r.regras.length) {
          html += renderKeyValuePairs('Regras e fórmulas', r.regras);
        }
        if (Array.isArray(r.comparacoes) && r.comparacoes.length) {
          html += renderKeyValuePairs('Comparações críticas', r.comparacoes);
        }
        if (Array.isArray(r.fluxos) && r.fluxos.length) {
          html += renderKeyValuePairs('Fluxos resumidos', r.fluxos);
        }
        if (Array.isArray(r.excecoes) && r.excecoes.length) {
          html += renderKeyValuePairs('Exceções', r.excecoes);
        }
        if (Array.isArray(r.palavrasChave) && r.palavrasChave.length) {
          html += `<p><strong>Palavras-chave:</strong> ${esc(r.palavrasChave.join(', '))}</p>`;
        }

        // Checklist com checkboxes persistidas
        if (Array.isArray(r.checklist) && r.checklist.length > 0) {
          html += `<p><strong>Checklist de domínio:</strong></p>`;
          html += `<ul class="checklist" role="list" aria-label="Checklist de domínio para ${esc(titulo || idSubtopico)}">`;
          for (let i = 0; i < r.checklist.length; i++) {
            const checked = checklistState[i] ? 'checked' : '';
            const itemId = `${baseId}-chk-${i}`;
            html += '<li>';
            html += `<label for="${itemId}">`;
            html += `<input type="checkbox" id="${itemId}" ${checked} data-subtopico="${baseId}" data-item="${i}" onchange="window.FCNTemplate._onChecklistChange('${baseId}', ${i}, this.checked)">`;
            html += `<span>${esc(r.checklist[i])}</span>`;
            html += '</label>';
            html += '</li>';
          }
          html += '</ul>';
        }

        html += '</section>';
      }
    }

    // ------------------------------------------------ (8) Verificação de aprendizagem (exercícios + critério)
    html += `<section class="template-section" aria-labelledby="${baseId}-verificacao">`;
    html += `<h5 id="${baseId}-verificacao">Verificação de aprendizagem</h5>`;

    if (Array.isArray(sub.exercicios) && sub.exercicios.length > 0) {
      html += renderKeyValuePairs('Exercícios', sub.exercicios.map(function (ex) {
        let line = ex.enunciado || '';
        if (ex.resposta) line += ` — Resposta: ${ex.resposta}`;
        return line;
      }));
    } else {
      html += '<p><em>Nenhum exercício registrado para este subtópico.</em></p>';
    }

    if (sub.criterioDominio) {
      html += `<p><strong>Critério de domínio:</strong> <em>${esc(sub.criterioDominio)}</em></p>`;
    }

    html += '</section>';

    return html;
  }

  // -------------------------------------------------- handler global para checklist (precisa estar no window)
  function _onChecklistChange(idSubtopico, itemIdx, checked) {
    setChecklistState(idSubtopico, itemIdx, checked);
  }

  // -------------------------------------------------- API pública
  window.FCNTemplate = {
    obterEnriquecimento,
    renderizarUnidade,
    esc,
    splitIntoParagraphs,
    _onChecklistChange // exposto para o handler inline do HTML
  };

  console.log('FCNTemplate carregado — template didático Seção 5 disponível');
})();
