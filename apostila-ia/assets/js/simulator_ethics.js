/* ==========================================================================
 * Simulador Ética — Módulo 6 (Seção 7.6 didática — ética/responsabilidade digital
 * no serviço público). Apostila Web Interativa FCN — incremental, sem build,
 * compatível com file://
 * ==========================================================================
 *
 * ESTE ARQUIVO É
 *   Auto-contido: UI declarativa via mount(el), sem eval/fetch/import/CDN.
 *   Dados fictícios (Seção 4.3). NÃO executa comandos no SO, NÃO chama IA real,
 *   NÃO acessa sistemas externos. Simulação didática local.
 *
 * CENÁRIOS DE DECISÃO ÉTICA:
 *   (i)   pedido de informação (LAI 12.527/2011 — prazo, sigilo, transparência)
 *   (ii)  automação de decisão administrativa (Lei 14.129/2021 + supervisão humana)
 *   (iii) conflito de interesse (Lei 12.813/2013)
 *   (iv)  proteção de dados pessoais (LGPD — arts. 7 e 46)
 *   (v)   princípios do art. 37 CF (legalidade, impessoalidade, moralidade,
 *         publicidade, eficiência)
 *
 * AUTO-CONTIDO: injeta <style> escopado por .sim-etica via innerHTML;
 * destroy limpa o container. Todo texto do aluno passa por esc() antes de
 * innerHTML; saídas dinâmicas usam textContent. mount não lança se o container
 * faltar ou já montado.
 *
 * VERIFICADO: node --check + smoke test em Node (mount(null) e mount(fakeEl)
 * não lançam; retornam { destroy }).
 * ========================================================================== */
(function (global) {
  'use strict';

  /* Escapa TODOS os caracteres perigosos para HTML (mesma convenção). */
  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Idempotência: não re-montra no mesmo container. */
  var eticaMontados = (typeof WeakSet !== 'undefined') ? new WeakSet() :
    { has: function () { return false; }, add: function () { return true; }, 'delete': function () { return true; } };

  /* ------------------------------------------------------------------
   * Cenários didáticos (dados fictícios — nomes, órgãos e processos inventados).
   * Cada cenário: enunciado, opções (radio), índice da opção correta,
   * princípio/dispositivo e justificativa.
   * ------------------------------------------------------------------ */
  var cenarios = [
    {
      id: 'lai',
      titulo: '1. Pedido de informação (LAI 12.527/2011)',
      enunciado: 'Um cidadão protocolou, em 02/03/2026, pedido de informação (LAI) ao órgão fictício "Secretaria Municipal de Administração" solicitando a planilha de gastos com diárias de 2025. O órgão não respondeu. Em 20/03/2026, o cidadão interpôs recurso. Qual é a providência legal correta do órgão?',
      principio: 'Lei 12.527/2011 (LAI) — arts. 11 (prazo de 20 dias, prorrogável por 10) e 15 (recurso hierárquico).',
      opcoes: [
        'Arquivar o pedido, pois o prazo de 20 dias já expirou e o pedido caducou.',
        'Responder imediatamente ou, se houver justo motivo, prorrogar por mais 10 dias mediante justificativa, e apreciar o recurso no prazo legal.',
        'Encaminhar ao Ministério Público, pois toda omissão é crime de responsabilidade.',
        'Negar o pedido sob o argumento de que diárias são informação sigilosa por natureza.'
      ],
      correta: 1,
      justificativa: 'A LAI (art. 11) estabelece prazo de 20 dias para resposta, prorrogável por até 10 dias mediante justificativa ao requerente; a omissão não extingue o dever de responder. O recurso (art. 15) deve ser apreciado pela autoridade hierarquicamente superior. Diárias de servidores públicos não são sigilosas por natureza — a presunção é de publicidade (art. 3º, caput).'
    },
    {
      id: 'sigilo',
      titulo: '2. Sigilo e transparência (LAI + CF art. 5º, XXXIII)',
      enunciado: 'O órgão fictício "Hospital Público Regional" recebeu pedido de informação sobre o nome e o CPF dos pacientes atendidos na emergência em 2025. Como o órgão deve proceder?',
      principio: 'LAI art. 31 (informação pessoal) + CF art. 5º, XXXIII (segredo de fonte/inviolabilidade) + LGPD (dados sensíveis de saúde).',
      opcoes: [
        'Fornecer a lista completa com nome e CPF, pois a transparência é princípio absoluto.',
        'Negar integralmente, pois toda informação de saúde é sigilosa sem exceção.',
        'Fornecer dados agregados/anonimizados (quantitativos), preservando a identidade dos pacientes (segredo médico e LGPD).',
        'Publicar os dados em portal aberto, com nome parcial (iniciais).'
      ],
      correta: 2,
      justificativa: 'A transparência não é absoluta: a LAI (art. 31) protege informação pessoal, e dados de saúde são sensíveis (LGPD, art. 5º, II). A solução adequada é a anonimização/agregação, preservando o segredo médico e a privacidade, sem impedir o controle social sobre os gastos.'
    },
    {
      id: 'automacao',
      titulo: '3. Automação de decisão administrativa (Lei 14.129/2021)',
      enunciado: 'A "Prefeitura Fictícia de Lagoa Verde" implantou um sistema que indefere automaticamente pedidos de isenção de IPTU com base em renda declarada, sem intervenção humana. Um contribuinte teve o pedido indeferido. Qual é a conduta correta?',
      principio: 'Lei 14.129/2021 (Governo Digital) — arts. 10 e 14 (transparência algorítmica e supervisão humana); CF art. 5º, LIV (devido processo legal).',
      opcoes: [
        'Manter a decisão automática, pois o sistema é mais rápido e eficiente.',
        'Garantir revisão humana, transparência dos critérios e recurso administrativo ao contribuinte.',
        'Suspender todos os sistemas de TI do órgão, pois automação é proibida.',
        'Delegar a revisão ao próprio desenvolvedor do sistema.'
      ],
      correta: 1,
      justificativa: 'A Lei 14.129/2021 (arts. 10 e 14) exige transparência, explicabilidade e supervisão humana em decisões automatizadas, além de recurso administrativo (devido processo legal — CF art. 5º, LIV). A eficiência (art. 37 CF) não dispensa o controle humano nem o direito de defesa.'
    },
    {
      id: 'conflito',
      titulo: '4. Conflito de interesse (Lei 12.813/2013)',
      enunciado: 'O servidor fictício "João", ocupante de cargo de confiança na "Agência Reguladora de Energia", possui participação societária em uma empresa que presta serviços à agência. Ele foi convidado a votar em licitação da qual a empresa participa. O que deve fazer?',
      principio: 'Lei 12.813/2013 (conflito de interesses) — arts. 5º e 6º (impedimento e afastamento).',
      opcoes: [
        'Votar normalmente, declarando apenas verbalmente o vínculo.',
        'Afastar-se do processo, comunicar a autoridade e registrar o impedimento; se necessário, alienar a participação ou renunciar ao cargo.',
        'Pedir que um colega vote em seu lugar, mantendo a influência nos bastidores.',
        'Votar a favor da empresa, pois o conflito é apenas "aparente".'
      ],
      correta: 1,
      justificativa: 'A Lei 12.813/2013 (arts. 5º e 6º) impõe o afastamento do servidor em situação de conflito de interesse, com comunicação à autoridade competente. A mera declaração verbal não basta; a tentativa de contornar o impedimento (voto por procuração) agrava a infração. A alienação da participação ou a renúncia ao cargo são medidas previstas para casos persistentes.'
    },
    {
      id: 'lgpd',
      titulo: '5. Proteção de dados pessoais (LGPD — arts. 7 e 46)',
      enunciado: 'O "Departamento de Recursos Humanos" de um órgão público mantém, em planilha não criptografada e sem controle de acesso, dados de CPF, endereço e dados bancários de todos os servidores, compartilhada por e-mail interno. Houve vazamento. Qual é a conduta correta?',
      principio: 'LGPD — art. 7 (bases legais) e art. 46 (segurança, medidas técnicas e administrativas).',
      opcoes: [
        'Nada a fazer: dados de servidores públicos não são protegidos pela LGPD.',
        'Notificar a ANPD e os titulares, adotar medidas de segurança (criptografia, controle de acesso, minimização) e revisar o fluxo.',
        'Apagar todos os dados para evitar novos vazamentos.',
        'Publicar os dados em portal para "transparência radical".'
      ],
      correta: 1,
      justificativa: 'A LGPD (art. 7) exige base legal para o tratamento e o art. 46 obriga medidas técnicas e administrativas de segurança. Em caso de incidente, a notificação à ANPD e aos titulares (art. 48) é obrigatória. A exclusão total (C) inviabiliza a gestão; a publicação irrestrita (D) viola a LGPD e a LAI (informação pessoal).'
    },
    {
      id: 'art37',
      titulo: '6. Princípios do art. 37 CF (legalidade, impessoalidade, moralidade, publicidade, eficiência)',
      enunciado: 'Um gestor público fictício "prefeito de Nova Cidade" determinou, por ato verbal, a contratação direta de empresa de seu cunhado para reforma de escola, sem licitação e sem publicação. Qual princípio é violado e qual é a providência correta?',
      principio: 'CF art. 37, caput — legalidade, impessoalidade, moralidade, publicidade e eficiência.',
      opcoes: [
        'Nenhum: o gestor tem autonomia para contratar diretamente em emergência.',
        'Violação de legalidade (sem licitação), impessoalidade (favorecimento), moralidade (nepotismo), publicidade (ato não publicado) e eficiência (sem competição). A providência é anular o ato e licitar.',
        'Apenas publicidade: basta publicar depois para regularizar.',
        'Eficiência: a reforma foi rápida, portanto está adequada.'
      ],
      correta: 1,
      justificativa: 'O art. 37, caput, da CF exige legalidade (obediência à lei — licitação), impessoalidade (tratamento igualitário, vedado o favorecimento), moralidade (boa-fé e ética), publicidade (ato público e motivado) e eficiência (melhor resultado com menor custo). A contratação direta de parente viola todos os princípios; a regularização posterior (C) não cura o vício.'
    }
  ];

  /* ------------------------------------------------------------------
   * CSS escopado (.sim-etica)
   * ------------------------------------------------------------------ */
  var eticaCss = '<style>'
    + '.sim-etica{max-width:980px;margin:0 auto;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e3e9ff}'
    + '.sim-etica h3{margin:8px 0 2px}.sim-etica h4{margin:16px 0 6px;color:#cdd4de;font-size:1rem}'
    + '.sim-etica-sub{color:#8b94a5;font-size:.85rem;margin:0 0 12px}'
    + '.sim-etica-bloco{background:#1f232c;border:1px solid #333947;border-radius:8px;padding:12px;margin:12px 0}'
    + '.sim-etica-nav{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}'
    + '.sim-etica-link{color:#4a94d4;cursor:pointer;text-decoration:underline;font-size:.85rem}'
    + '.sim-etica-opts label{display:block;margin:4px 0;font-size:.85rem}'
    + '.sim-etica-opts input{margin-right:8px}'
    + '.sim-etica-btn{background:#3a4252;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:6px 14px;font-size:.8rem;cursor:pointer}'
    + '.sim-etica-btn:hover{background:#4a5466}'
    + '.sim-etica-fb{padding:8px 10px;border-radius:4px;margin:6px 0;font-size:.85rem}'
    + '.sim-etica-ok{background:#1b4d30;border-color:#2e8b57;color:#a0f3c1}'
    + '.sim-etica-err{background:#4d1f1f;border-color:#b91c1c;color:#ffb3b3}'
    + '.sim-etica-aviso{background:#3a3220;border-color:#b8860b;color:#ffd57c}'
    + '.sim-etica-principio{background:#161a21;border:1px solid #3a4252;border-radius:4px;padding:6px 10px;margin:6px 0;font-size:.82rem;color:#cdd4de}'
    + '.sim-etica-progress{height:6px;background:#2a2f3a;border-radius:3px;margin:8px 0;overflow:hidden}'
    + '.sim-etica-progress-fill{height:100%;background:#4a94d4;width:0%;transition:width .3s}'
    + '.sim-etica-pane{display:block}'
    + '</style>';

  /* ------------------------------------------------------------------
   * UI builders
   * ------------------------------------------------------------------ */
  function eticaBuildCenario(cen) {
    var html = '<div class="sim-etica-bloco" data-cenario="' + esc(cen.id) + '">';
    html += '<h4>' + esc(cen.titulo) + '</h4>';
    html += '<p class="sim-etica-sub">' + esc(cen.enunciado) + '</p>';
    html += '<div class="sim-etica-principio"><strong>Dispositivo/princípio:</strong> ' + esc(cen.principio) + '</div>';
    html += '<div class="sim-etica-opts">';
    for (var j = 0; j < cen.opcoes.length; j++) {
      html += '<label><input type="radio" name="etica-' + esc(cen.id) + '" value="' + j + '"> ' + esc(cen.opcoes[j]) + '</label>';
    }
    html += '</div>';
    html += '<button type="button" class="sim-etica-btn" data-act="etica-verificar" data-cenario="' + esc(cen.id) + '">Verificar decisão</button>';
    html += '<div id="etica-fb-' + esc(cen.id) + '" class="sim-etica-fb"></div>';
    html += '</div>';
    return html;
  }

  function eticaBuildUI() {
    var html = '<div class="sim-etica">';
    html += '<h3>Simulador de Ética e Responsabilidade Digital no Serviço Público (Seção 7.6)</h3>';
    html += '<p class="sim-etica-sub">Simulação didática e local — dados fictícios (Seção 4.3). Cenários de decisão ética com feedback justificado por princípio/dispositivo. NÃO é consultoria jurídica.</p>';
    html += '<div class="sim-etica-progress"><div class="sim-etica-progress-fill" id="etica-progresso"></div></div>';
    for (var i = 0; i < cenarios.length; i++) {
      html += eticaBuildCenario(cenarios[i]);
    }
    html += '</div>';
    return html;
  }

  /* ------------------------------------------------------------------
   * Event handlers
   * ------------------------------------------------------------------ */
  function eticaOnVerificar(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute) return;
    if (alvo.getAttribute('data-act') !== 'etica-verificar') return;
    var cenId = alvo.getAttribute('data-cenario');
    if (!cenId) return;
    var cen = null;
    for (var i = 0; i < cenarios.length; i++) {
      if (cenarios[i].id === cenId) { cen = cenarios[i]; break; }
    }
    if (!cen) return;
    var radios = containerEl.querySelectorAll('input[name="etica-' + cenId + '"]');
    var selecionado = -1;
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) { selecionado = parseInt(radios[j].value, 10); break; }
    }
    var fb = containerEl.querySelector('#etica-fb-' + cenId);
    if (!fb) return;
    if (selecionado === -1) {
      fb.innerHTML = '<div class="sim-etica-fb sim-etica-aviso">Selecione uma opção antes de verificar.</div>';
      return;
    }
    var ok = selecionado === cen.correta;
    var classe = ok ? 'sim-etica-ok' : 'sim-etica-err';
    var label = ok ? 'Correto' : 'Incorreto';
    var texto = '<div class="sim-etica-fb ' + classe + '">'
      + esc(label) + ': ' + esc(cen.justificativa)
      + '<br><strong>Princípio/dispositivo:</strong> ' + esc(cen.principio)
      + '</div>';
    fb.innerHTML = texto;
    eticaUpdateProgress(containerEl);
  }

  function eticaUpdateProgress(containerEl) {
    var fbElements = containerEl.querySelectorAll('[id^="etica-fb-"]');
    var respondidos = 0;
    for (var i = 0; i < fbElements.length; i++) {
      if (fbElements[i].innerHTML.trim() !== '') respondidos++;
    }
    var pct = Math.round((respondidos / cenarios.length) * 100);
    var barra = containerEl.querySelector('#etica-progresso');
    if (barra) barra.style.width = pct + '%';
  }

  function eticaOnClick(e, containerEl) {
    eticaOnVerificar(e, containerEl);
  }

  /* ------------------------------------------------------------------
   * mount
   * ------------------------------------------------------------------ */
  function mountEtica(containerEl) {
    if (!containerEl || typeof containerEl !== 'object') return undefined;
    if (eticaMontados.has(containerEl)) return undefined;
    try {
      var destruido = false;
      eticaMontados.add(containerEl);
      containerEl.innerHTML = eticaCss + eticaBuildUI();
      containerEl.addEventListener('click', function (e) { eticaOnClick(e, containerEl); });
      var handle = {
        destroy: function () {
          if (destruido) return;
          destruido = true;
          try { eticaMontados['delete'](containerEl); } catch (e2) {}
          try { containerEl.innerHTML = ''; } catch (e3) {}
        }
      };
      return handle;
    } catch (e) {
      try { eticaMontados['delete'](containerEl); } catch (e2) {}
      if (typeof console !== 'undefined' && console.error) console.error('EthicsSimulator.mount: falha —', (e && e.message) || e);
      return undefined;
    }
  }

  var EthicsSimulator = {
    versaoDeclarada: 'simulador didático de ética e responsabilidade digital — dados fictícios, local (Seção 4.3). Não é consultoria jurídica.',
    mount: mountEtica,
    cenarios: cenarios,
    escopo: {
      operacoes: [
        'cenário de pedido de informação (LAI 12.527/2011 — prazo, sigilo, transparência)',
        'cenário de automação de decisão administrativa (Lei 14.129/2021 + supervisão humana)',
        'cenário de conflito de interesse (Lei 12.813/2013)',
        'cenário de proteção de dados pessoais (LGPD arts. 7 e 46)',
        'cenário de princípios do art. 37 CF (legalidade, impessoalidade, moralidade, publicidade, eficiência)'
      ],
      saidas: [
        'classificação da decisão correta + feedback com justificativa',
        'dispositivo/princípio aplicável',
        'progresso de cenários respondidos'
      ],
      observacao: 'Todos os dados são fictícios e didáticos. Cenários não substituem consultoria jurídica nem treinamento institucional.'
    },
    limitacoes: [
      'não é consultoria jurídica — cenários didáticos com base em dispositivos verificados',
      'dispositivos citados: LAI 12.527/2011, Lei 14.129/2021, Lei 12.813/2013, LGPD 13.709/2018 (arts. 7 e 46) e CF art. 37, caput',
      'não acessa sistemas reais, não executa comandos, não chama IA',
      'classificação baseada em regras fixas, não em IA'
    ]
  };

  /* Compatibilidade: navegador (window) + Node (globalThis/module). */
  if (typeof window !== 'undefined') { window.EthicsSimulator = EthicsSimulator; }
  if (typeof globalThis !== 'undefined') { globalThis.EthicsSimulator = EthicsSimulator; }
  if (typeof module !== 'undefined' && module.exports) { module.exports = EthicsSimulator; }
})(typeof window !== 'undefined' ? window : globalThis);
