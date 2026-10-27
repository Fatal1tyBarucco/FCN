/* ==========================================================================
 * Simulador Segurança — Módulo 4 (Seção 7.3 da Escrita.txt)
 * Apostila Web Interativa FCN — incremental, sem build, compatível com file://
 * ==========================================================================
 *
 * ESTE ARQUIVO É
 *   Auto-contido: UI declarativa via mount(el), sem eval/fetch/import/CDN.
 *   NÃO executa ataques reais — todos os dados são FICTÍCIOS em ambiente
 *   ISOLADO (Seção 4.3: "Não implemente ferramentas que executem ataques
 *   reais. Os simuladores deverão utilizar dados fictícios e ambientes
 *   isolados.").
 *
 * SIMULADOR DEFENSIVO — triagem de phishing, classificação de riscos,
 * política de backup (regra 3-2-1) e exercícios de autenticação/
 * autorização/princípio do menor privilégio.
 *
 * AUTO-CONTIDO: injeta <style> escopado por .sim-seguranca via innerHTML;
 * destroy limpa o container. Não toca em assets/css/styles.css nem index.html.
 * Todo texto do aluno passa por esc() antes de innerHTML; saídas dinâmicas
 * usam textContent. mount não lança se o container faltar ou já montado.
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
  var securityMontados = (typeof WeakSet !== 'undefined') ? new WeakSet() :
    { has: function () { return false; }, add: function () { return true; }, 'delete': function () { return true; } };

  /* ------------------------------------------------------------------
   * Dados fictícios — ambiente isolado (Seção 4.3).
   * Mensagens de e-mail simuladas com indicadores de phishing reais.
   * ------------------------------------------------------------------ */
  var mensagens = [
    {
      id: 'msg1',
      remetente: 'suporte@bancomoderno.com.br',
      remetenteExibido: 'Banco Moderno <seguranca@bancomoderno.com.br>',
      assunto: 'Atualização de senha urgente - conta bloqueada',
      corpo: 'Sua conta foi bloqueada por motivos de segurança. Clique no link abaixo para desbloquear imediatamente: http://bit.ly/desbloqueie-agora. Voce tem 24h para confirmar ou a conta sera cancelada.',
      ehPhishing: true,
      indicadores: [
        'link encurtado (bit.ly) oculta o destino real — verifique o domínio antes de clicar',
        'linguagem de urgência: "urgente", "imediatamente", "24h"',
        'ameaça de consequência negativa: "conta bloqueada" / "sera cancelada"',
        'domínio do link (bit.ly) não corresponde ao remetente declarado (bancomoderno.com.br)'
      ],
      risco: 'alto',
      justificativa: 'Phishing — link encurtado + pressão psicológica + ameaça de bloqueio.'
    },
    {
      id: 'msg2',
      remetente: 'admin@sistemafederal.gov.br',
      remetenteExibido: 'Sistema Federal <naoresponda@sistemafederal.gov.br>',
      assunto: 'Pagamento de R$ 1.050,00 em anexo',
      corpo: 'Prezado(a) servidor(a), seu pagamento de R$ 1.050,00 foi liberado. Confira os dados em anexo. Agradecemos, Setor de Recursos Humanos.',
      ehPhishing: true,
      indicadores: [
        'anexo inesperado em e-mail corporativo',
        'valor monetário mencionado no anexo — evite abrir arquivos .exe, .scr, .zip de remetentes desconhecidos',
        'remetente genérico (naoresponda) sem nome de contato específico',
        'ausência de CRM, número de protocolo ou identificação pessoal'
      ],
      risco: 'alto',
      justificativa: 'Phishing por anexo — documentos inesperados podem conter ransomware.'
    },
    {
      id: 'msg3',
      remetente: 'mariana.silva@empresa.com.br',
      remetenteExibido: 'Mariana Silva <mariana.silva@empresa.com.br>',
      assunto: 'Relatorio mensal de vendas - Outubro',
      corpo: 'Prezados, segue o relatorio mensal de vendas de outubro. Documento revisado e assinado digitalmente. Acesso: https://intranet.empresa.com/relatorios/outubro.pdf. Duvidas: mariana.silva@empresa.com.br.',
      ehPhishing: false,
      indicadores: [
        'remetente conhecido e verificável (domínio corporativo interno)',
        'link interno institucional (intranet.empresa.com)',
        'não ha ameacas ou pressao para acao imediata',
        'assinatura completa com nome e cargo',
        'conteudo contextualmente plausivel'
      ],
      risco: 'baixo',
      justificativa: 'Mensagem segura — remetente interno verificavel, sem indicios de ameacas.'
    },
    {
      id: 'msg4',
      remetente: 'ti@empresa.com.br',
      remetenteExibido: 'TI Corporativa <ti@empresa.com.br>',
      assunto: 'Reuniao de seguranca - terca-feira 14/01',
      corpo: 'Reuniao de seguranca da informacao na terca-feira, as 10h, na sala 5. Participam apenas colaboradores do setor. Link Teams: https://teams.microsoft.com/l/meetup-join/...',
      ehPhishing: false,
      indicadores: [
        'remetente interno verificavel (ti@empresa.com.br)',
        'conteudo contextualmente plausivel (reuniao de seguranca)',
        'link institucional (teams.microsoft.com)',
        'detalhes concretos (data, hora, sala)',
        'nao ha pressao ou ameacas'
      ],
      risco: 'baixo',
      justificativa: 'Mensagem segura — reuniiao agendada por equipe interna conhecida.'
    },
    {
      id: 'msg5',
      remetente: 'atendimento@cartaodecredito.com',
      remetenteExibido: 'Operadora Cartao <contato@cartaodecredito.com>',
      assunto: 'Actualizacu00e3o de cadastro - pendencia',
      corpo: 'Detectamos irregularidades em sua conta. Atualize seus dados pelo link: http://cartaodecredito.atualize.site/login. Em caso de nao atualizacao sua conta sera cancelada.',
      ehPhishing: true,
      indicadores: [
        'erro de portugues no assunto ("Actualizacu00e3o" em vez de "Atualiza\u00e7\u00e3o")',
        'dominio suspeito (.atualize.site \u2014 n\u00e3o \u00e9 dom\u00ednio oficial da operadora)',
        'amea\u00e3a de cancelamento por n\u00e3o atualizar',
        'press\u00e3o para a\u00e7\u00e3o imediata ("irrevers\u00edvel", "imediatamente")',
        'aus\u00eancia de autentica\u00e7\u00e3o de dois fatores no link'
      ],
      risco: 'medio',
      justificativa: 'Phishing — dom\u00ednio suspeito + erros de portugu\u00eas + press\u00e3o psicol\u00f3gica.'
    }
  ];

  /* Exerc\u00edcios de autentica\u00e7\u00e3o/autoriza\u00e7\u00e3o (princ\u00edpio do menor privil\u00e9gio). */
  var exerciciosAuthz = [
    {
      id: 'authz1',
      titulo: '1. Ajuste de permiss\u00f5es no AD',
      pergunta: 'Um colaborador da \u00e1rea de marketing precisa gerar relat\u00f3rios de campanhas. Qual \u00e9 o conjunto M\u00edNIMO de permiss\u00f5es (princ\u00edpio do menor privil\u00e9gio)?',
      opcoes: [
        'Administrador local de esta\u00e7\u00e3o (acesso total à est\u00e3o de trabalho)',
        'Usu\u00e1rio padr\u00e3o + grupo "Marketing_Relatorios" (leitura de relat\u00f3rios + escrita em pasta de campanhas)',
        'Administrador de dom\u00ednio (Domain Admin)',
        'Usu\u00e1rio padr\u00e3o sem nenhum grupo adicional'
      ],
      correta: 1,
      justificativa: 'O princ\u00edpio do menor privil\u00e9gio diz que o usu\u00e1rio deve receber APENAS as permiss\u00f5es necess\u00e1rias para cumprir sua fun\u00e7\u00e3o. Op\u00e7\u00e3o B (grupo espec\u00edfico de marketing) \u00e9 o m\u00ednimo necess\u00e1rio; as op\u00e7\u00f5es A e C concedem privil\u00e9gios de administrador desnecessariamente.'
    },
    {
      id: 'authz2',
      titulo: '2. MFA em ambiente remoto',
      pergunta: 'Qual \u00e9 a recomenda\u00e7\u00e3o de seguran\u00e7a principal para acesso remoto a sistemas corporativos?',
      opcoes: [
        'Senha forte de 8 caracteres compartilhada por e-mail',
        'Autentica\u00e7\u00e3o de dois fatores (MFA) com fator "algo que sei" + "algo que tenho"',
        'Biometricidade facial sem backup de recupera\u00e7\u00e3o',
        'Token de hardware sem PIN'
      ],
      correta: 1,
      justificativa: 'MFA combina "algo que sei" (senha) com "algo que tenho" (token/app). A senha compartilhada (A) \u00e9 um risco grave; a biometricidade sem backup (C) pode falhar; o token sem PIN (D) pode ser usado se perdido.'
    },
    {
      id: 'authz3',
      titulo: '3. Revoga\u00e7\u00e3o de acesso',
      pergunta: 'Quando um colaborador sai da empresa, qual \u00e9 a a\u00e7\u00e3o correta segundo a "vida \u00fatil da conta" (account lifecycle)?',
      opcoes: [
        'Desativar a conta ap\u00f3s 30 dias \u2014 quando o gestor lembrar',
        'Desativar a conta imediatamente no fim do \u00faltimo dia e revistar permiss\u00f5es em 90 dias',
        'Mant\u00ea-la ativa para o sucessor acessar arquivos temporariamente',
        'Apenas bloquear o e-mail; outras contas podem permanecer'
      ],
      correta: 1,
      justificativa: 'A conta deve ser DESATIVADA imediatamente ao sair (0-day offboarding). Mantendo-a ativa, o colaborador tem janela de tempo para acesso n\u00e3o autorizado. O acesso a arquivos deve ser transferido via processo formal, n\u00e3o mantendo a conta ativa.'
    }
  ];

  /* Backup: regra 3-2-1 (3 c\u00f3pias, 2 m\u00eddias, 1 offsite). */
  var backupRegra = {
    copias: 3, midias: 2, offsite: 1,
    explicacao: '3-2-1: 3 c\u00f3pias dos dados, em 2 m\u00eddias diferentes, com 1 c\u00f3pia offsite (fora do local). C\u00f3pias imut\u00e1veis recomendadas.'
  };

  /* ------------------------------------------------------------------
   * CSS escopado (.sim-seguranca)
   * ------------------------------------------------------------------ */
  var securityCss = '<style>'
    + '.sim-seguranca{max-width:980px;margin:0 auto;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e3e9ff}'
    + '.sim-seguranca h3{margin:8px 0 2px}.sim-seguranca h4{margin:16px 0 6px;color:#cdd4de;font-size:1rem}'
    + '.sim-seguranca-sub{color:#4b5563;font-size:.85rem;margin:0 0 12px}'
    + '.sim-seguranca-bloco{background:#1f232c;border:1px solid #333947;border-radius:8px;padding:12px;margin:12px 0}' +
    '.sim-seguranca-bloco .sim-seguranca-sub{color:#cbd5e1}' +
    '.sim-sgmt-msg{border:1px solid #3a4252;border-radius:6px;padding:10px;margin:8px 0;background:#161a21}'
    + '.sim-sgmt-msg-header{display:flex;justify-content:space-between;align-items:center}'
    + '.sim-sgmt-emit{font-size:.78rem;color:#8b94a5}'
    + '.sim-sgmt-assunto{font-weight:600;color:#e3e9ff;margin:4px 0;font-size:.88rem}'
    + '.sim-sgmt-corpo{font-size:.82rem;color:#b9c0d4;white-space:pre-wrap;margin:6px 0}'
    + '.sim-sgmt-btns{display:flex;gap:8px;margin:8px 0}'
    + '.sim-sec-btn{background:#3a4252;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:6px 14px;font-size:.8rem;cursor:pointer}'
    + '.sim-sec-btn:hover{background:#4a5466}'
    + '.sim-sec-btn:hover{background:#4a5466}'
    + '.sim-sec-ok{background:#1b4d30;border-color:#2e8b57;color:#a0f3c1}'
    + '.sim-sec-err{background:#4d1f1f;border-color:#b91c1c;color:#ffb3b3}'
    + '.sim-sec-aviso{background:#3a3220;border-color:#b8860b;color:#ffd57c}'
    + '.sim-sec-fb{padding:8px 10px;border-radius:4px;margin:6px 0;font-size:.82rem}'
    + '.sim-sec-indicator{list-style:none;padding:0}'
    + '.sim-sec-indicator li{margin:2px 0;font-size:.8rem;color:#c5c9d4}'
    + '.sim-sec-indicator-ok{color:#5ee0a0}'
    + '.sim-sec-opts label{display:block;margin:4px 0;font-size:.82rem}'
    + '.sim-sec-opts input{margin-right:8px}'
    + '.sim-sec-barra-progresso{height:6px;background:#2a2f3a;border-radius:3px;margin:8px 0;overflow:hidden}'
    + '.sim-sec-progress-fill{height:100%;background:#4a94d4;width:0%;transition:width .3s}'
    + '.sim-sec-risco-alto{color:#ff7b7b;font-weight:600}'
    + '.sim-sec-risco-medio{color:#ffd57c;font-weight:600}'
    + '.sim-sec-risco-baixo{color:#5ee0a0;font-weight:600}'
    + '.sim-sec-link{color:#174ea6;cursor:pointer;text-decoration:underline}'
    + '.sim-sec-nav{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.sim-sec-nav-btn{background:#2a2f3a;color:#cdd4de;border:1px solid #3a4252;border-radius:4px;padding:4px 12px;font-size:.8rem;cursor:pointer}'
    + '.sim-sec-nav-btn:hover{background:#3a4252}'
    + '</style>';

  /* ------------------------------------------------------------------
   * UI builders
   * ------------------------------------------------------------------ */
  function securityBuildMsgBox(msg, indice) {
    var riscoVal = (msg.risco === 'alto' || msg.risco === 'medio' || msg.risco === 'baixo') ? msg.risco : 'baixo';
    var riscoClasse = 'sim-sec-risco-' + riscoVal;
    return '<div class="sim-sgmt-msg" data-msg="' + esc(msg.id) + '">'
      + '<div class="sim-sgmt-msg-header">'
      + '<span class="sim-sgmt-emit">De: ' + esc(msg.remetenteExibido) + '</span>'
      + '<span class="sim-sec-risco ' + esc(riscoClasse) + '">Risco: ' + esc(msg.risco.toUpperCase()) + '</span>'
      + '</div>'
      + '<div class="sim-sgmt-assunto">' + esc(msg.assunto) + '</div>'
      + '<div class="sim-sgmt-corpo">' + esc(msg.corpo) + '</div>'
      + '<div class="sim-sgmt-btns">'
      + '<button type="button" class="sim-sec-btn sim-sec-btn-ok" data-act="classificar" data-msg="' + esc(msg.id) + '" data-resp="seguro">Parece seguro</button>'
      + '<button type="button" class="sim-sec-btn sim-sec-btn-err" data-act="classificar" data-msg="' + esc(msg.id) + '" data-resp="phishing">Parece phishing</button>'
      + '<button type="button" class="sim-sec-btn" data-act="mostrar-indicadores" data-msg="' + esc(msg.id) + '">Mostrar indicadores</button>'
      + '</div>'
      + '<div id="sec-fb-' + esc(msg.id) + '" class="sim-sec-fb"></div>'
      + '<div id="sec-ind-' + esc(msg.id) + '" class="sim-sec-indicator" style="display:none"></div>'
      + '</div>';
  }

  function securityBuildPhishing() {
    var html = '<div class="sim-seguranca-bloco"><h4>Triagem defensiva de phishing</h4>';
    html += '<p class="sim-seguranca-sub">ANALISE cada mensagem e classifique como segura ou phishing. Clique em "Mostrar indicadores" para revelar os sinais de alerta. Todos os dados s\u00e3o fict\u00edcios (ambiente isolado — Se\u00e7\u00e3o 4.3).</p>';
    html += '<div class="sim-sec-barra-progresso"><div class="sim-sec-progress-fill" id="sec-progresso"></div></div>';
    for (var i = 0; i < mensagens.length; i++) {
      html += securityBuildMsgBox(mensagens[i], i);
    }
    html += '</div>';
    return html;
  }

  function securityBuildBackup() {
    var html = '<div class="sim-seguranca-bloco"><h4>Pol\u00edtica de backup — regra 3-2-1</h4>';
    html += '<p class="sim-seguranca-sub">Configure sua estrat\u00e9gia de backup e veja se ela atende ao princ\u00edpio 3-2-1.</p>';
    html += '<form id="sec-backup-form" class="sim-sec-opts">';
    html += '<label><input type="number" name="copias" min="1" max="10" value="3"> C\u00f3pias totais</label>';
    html += '<label><input type="number" name="midias" min="1" max="10" value="2"> M\u00eddias diferentes</label>';
    html += '<label><input type="checkbox" name="offsite" value="1" checked> 1 c\u00f3pia offsite (fora do local)</label>';
    html += '<label><input type="checkbox" name="imutavel" value="1"> C\u00f3pia imut\u00e1vel (cibernovela)</label>';
    html += '</form>';
    html += '<button type="button" class="sim-sec-btn" data-act="backup-avaliar">Avaliar pol\u00edtica</button>';
    html += '<div id="sec-backup-fb" class="sim-sec-fb"></div>';
    html += '<hr style="border-color:#333947;margin:10px 0">';
    html += '<p>' + esc(backupRegra.explicacao) + '</p>';
    html += '</div>';
    return html;
  }

  function securityBuildAuthz() {
    var html = '<div class="sim-seguranca-bloco"><h4>Autentica\u00e7\u00e3o, autoriza\u00e7\u00e3o e menor privil\u00e9gio</h4>';
    html += '<p class="sim-seguranca-sub">Responda aos exerc\u00edcios e receba feedback com justificativa.</p>';
    for (var i = 0; i < exerciciosAuthz.length; i++) {
      var ex = exerciciosAuthz[i];
      html += '<div class="sim-sgmt-msg" style="background:#161a21">';
      html += '<div class="sim-sgmt-assunto">' + esc(ex.titulo) + '</div>';
      html += '<div class="sim-sgmt-corpo">' + esc(ex.pergunta) + '</div>';
      for (var j = 0; j < ex.opcoes.length; j++) {
        html += '<label class="sim-sec-opts"><input type="radio" name="authz-' + esc(ex.id) + '" value="' + j + '"> ' + esc(ex.opcoes[j]) + '</label>';
      }
      html += '<button type="button" class="sim-sec-btn" data-act="authz-verificar" data-ex="' + esc(ex.id) + '">Verificar</button>';
      html += '<div id="authz-fb-' + esc(ex.id) + '" class="sim-sec-fb"></div>';
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  function securityBuildLimites() {
    var n = (SecuritySimulator.escopo && SecuritySimulator.escopo.operacoes) ? SecuritySimulator.escopo.operacoes.length : 0;
    return '<div class="sim-seguranca-bloco"><h4>Escopo declarado</h4>'
      + '<p>Este painel consome <code>SecuritySimulator</code>: ' + esc(SecuritySimulator.versaoDeclarada)
      + '. ' + n + ' opera\u00e7\u00f5es declaradas; veja o contrato no header de <code>assets/js/simulator_security.js</code>.</p></div>';
  }

  function securityBuildUI() {
    return '<div class="sim-seguranca">'
      + '<h3>Simulador de Seguran\u00e7a (Se\u00e7\u00e3o 7.3)</h3>'
      + '<p class="sim-seguranca-sub">Simula\u00e7\u00e3o did\u00e1tica e ambiente isolado \u2014 n\u00e3o executa ataques reais. Dados fict\u00edcios (Se\u00e7\u00e3o 4.3).</p>'
      + '<nav class="sim-sec-nav" aria-label="Navegação das seções do simulador de segurança">'
      + '<button type="button" class="sim-sec-nav-btn" data-act="nav" data-target="phishing">1. Triagem de phishing</button>'
      + '<button type="button" class="sim-sec-nav-btn" data-act="nav" data-target="backup">2. Política de backup</button>'
      + '<button type="button" class="sim-sec-nav-btn" data-act="nav" data-target="authz">3. Autenticação e privilégio mínimo</button>'
      + '<button type="button" class="sim-sec-nav-btn" data-act="nav" data-target="limites">4. Escopo declarado</button>'
      + '</nav>'
      + '<div id="sec-pane-phishing" class="sec-pane">' + securityBuildPhishing() + '</div>'
      + '<div id="sec-pane-backup" class="sec-pane" style="display:none">' + securityBuildBackup() + '</div>'
      + '<div id="sec-pane-authz" class="sec-pane" style="display:none">' + securityBuildAuthz() + '</div>'
      + '<div id="sec-pane-limites" class="sec-pane" style="display:none">' + securityBuildLimites() + '</div>'
      + '</div>';
  }

  /* ------------------------------------------------------------------
   * Event handlers
   * ------------------------------------------------------------------ */
  function securityOnNav(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute) return;
    if (alvo.getAttribute('data-act') !== 'nav') return;
    var target = alvo.getAttribute('data-target');
    if (!target) return;
    var panes = containerEl.querySelectorAll('.sec-pane');
    for (var i = 0; i < panes.length; i++) {
      panes[i].style.display = (panes[i].id === 'sec-pane-' + target) ? 'block' : 'none';
    }
    var links = containerEl.querySelectorAll('[data-act="nav"]');
    for (var j = 0; j < links.length; j++) {
      links[j].style.textDecoration = (links[j].getAttribute('data-target') === target) ? 'underline' : 'none';
    }
  }

  function securityOnClassificar(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute) return;
    if (alvo.getAttribute('data-act') !== 'classificar') return;
    var msgId = alvo.getAttribute('data-msg');
    var resp = alvo.getAttribute('data-resp');
    if (!msgId) return;
    var msg = null;
    for (var i = 0; i < mensagens.length; i++) {
      if (mensagens[i].id === msgId) { msg = mensagens[i]; break; }
    }
    if (!msg) return;
    var fb = containerEl.querySelector('#' + CSS.escape('sec-fb-' + msgId));
    if (!fb) return;
    var correto = (resp === 'phishing' && msg.ehPhishing) || (resp === 'seguro' && !msg.ehPhishing);
    var classe = correto ? 'sim-sec-ok' : 'sim-sec-err';
    var label = correto ? 'Correto' : 'Incorreto';
    var html = '<div class="sim-sec-fb ' + esc(classe) + '">' + esc(label) + ': esta mensagem \u00e9 '
      + (msg.ehPhishing ? 'PHISHING' : 'SEGURA') + '. ' + esc(msg.justificativa) + '</div>';
    fb.innerHTML = html;
    securityUpdateProgress(containerEl);
  }

  function securityOnMostrarIndicadores(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute) return;
    if (alvo.getAttribute('data-act') !== 'mostrar-indicadores') return;
    var msgId = alvo.getAttribute('data-msg');
    if (!msgId) return;
    var msg = null;
    for (var i = 0; i < mensagens.length; i++) {
      if (mensagens[i].id === msgId) { msg = mensagens[i]; break; }
    }
    if (!msg) return;
    var box = containerEl.querySelector('#' + CSS.escape('sec-ind-' + msgId));
    if (!box) return;
    if (box.style.display === 'block') {
      box.style.display = 'none';
      alvo.textContent = 'Mostrar indicadores';
    } else {
      var items = '';
      for (var j = 0; j < msg.indicadores.length; j++) {
        items += '<li class="sim-sec-indicator-ok">\u2022 ' + esc(msg.indicadores[j]) + '</li>';
      }
      box.innerHTML = '<strong>Indicadores detectados:</strong><ul class="sim-sec-indicator">' + items + '</ul>';
      box.style.display = 'block';
      alvo.textContent = 'Ocultar indicadores';
    }
  }

  function securityUpdateProgress(containerEl) {
    var fbElements = containerEl.querySelectorAll('[id^="sec-fb-"]');
    var respondidos = 0;
    for (var i = 0; i < fbElements.length; i++) {
      if (fbElements[i].innerHTML.trim() !== '') respondidos++;
    }
    var pct = Math.round((respondidos / mensagens.length) * 100);
    var barra = containerEl.querySelector('#sec-progresso');
    if (barra) barra.style.width = pct + '%';
  }

  function securityOnBackup(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute) return;
    if (alvo.getAttribute('data-act') !== 'backup-avaliar') return;
    var form = containerEl.querySelector('#sec-backup-form');
    var fb = containerEl.querySelector('#sec-backup-fb');
    if (!form || !fb) return;
    var copias = parseInt(form.elements['copias'].value, 10) || 0;
    var midias = parseInt(form.elements['midias'].value, 10) || 0;
    var offsite = form.elements['offsite'].checked ? 1 : 0;
    var imutavel = form.elements['imutavel'].checked ? 1 : 0;
    var erros = [];
    if (copias < 3) erros.push('precisa de pelo menos 3 c\u00f3pias (regra 3-2-1)');
    if (midias < 2) erros.push('precisa de pelo menos 2 m\u00eddias diferentes');
    if (offsite < 1) erros.push('precisa de pelo menos 1 c\u00f3pia offsite');
    var classe = erros.length === 0 ? 'sim-sec-ok' : 'sim-sec-err';
    var label = erros.length === 0 ? 'Pol\u00edtica adequada' : 'Pol\u00edtica incompleta';
    var detalhes = erros.length === 0
      ? 'Sua pol\u00edtica atende ao princ\u00edpio 3-2-1. C\u00f3pia imut\u00e1vel: ' + (imutavel ? 'sim' : 'n\u00e3o (recomendado).') + ' RPO/RTO: defina periodicidade de backup e teste de restaura\u00e7\u00e3o periodicamente.'
      : erros.join(', ') + '. Regra 3-2-1: 3 c\u00f3pias, 2 m\u00eddias, 1 offsite.';
    fb.innerHTML = '<div class="sim-sec-fb ' + esc(classe) + '">' + esc(label) + ': ' + esc(detalhes) + '</div>';
  }

  function securityOnAuthz(e, containerEl) {
    var alvo = e && e.target;
    if (!alvo || !alvo.getAttribute) return;
    if (alvo.getAttribute('data-act') !== 'authz-verificar') return;
    var exId = alvo.getAttribute('data-ex');
    if (!exId) return;
    var ex = null;
    for (var i = 0; i < exerciciosAuthz.length; i++) {
      if (exerciciosAuthz[i].id === exId) { ex = exerciciosAuthz[i]; break; }
    }
    if (!ex) return;
    var allRadios = containerEl.querySelectorAll('input[type="radio"]');
    var radios = [];
    for (var _r = 0; _r < allRadios.length; _r++) { if (allRadios[_r].name === 'authz-' + exId) radios.push(allRadios[_r]); }
    var selecionado = -1;
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) { selecionado = parseInt(radios[j].value, 10); break; }
    }
    var fb = containerEl.querySelector('#' + CSS.escape('authz-fb-' + exId));
    if (!fb) return;
    if (selecionado === -1) {
      fb.innerHTML = '<div class="sim-sec-fb sim-sec-aviso">Selecione uma op\u00e7\u00e3o antes de verificar.</div>';
      return;
    }
    var ok = selecionado === ex.correta;
    var classe = ok ? 'sim-sec-ok' : 'sim-sec-err';
    var label = ok ? 'Correto' : 'Incorreto';
    fb.innerHTML = '<div class="sim-sec-fb ' + esc(classe) + '">' + esc(label) + ': ' + esc(ex.justificativa) + '</div>';
  }

  function securityOnClick(e, containerEl) {
    securityOnNav(e, containerEl);
    securityOnClassificar(e, containerEl);
    securityOnMostrarIndicadores(e, containerEl);
    securityOnBackup(e, containerEl);
    securityOnAuthz(e, containerEl);
  }

  /* ------------------------------------------------------------------
   * mount
   * ------------------------------------------------------------------ */
  function mountSecurity(containerEl) {
    if (!containerEl || typeof containerEl !== 'object') return undefined;
    if (securityMontados.has(containerEl)) return undefined;
    try {
      var destruido = false;
      securityMontados.add(containerEl);
      containerEl.innerHTML = securityCss + securityBuildUI();
      containerEl.addEventListener('click', function (e) { securityOnClick(e, containerEl); });
      var handle = {
        destroy: function () {
          if (destruido) return;
          destruido = true;
          try { securityMontados['delete'](containerEl); } catch (e2) {}
          try { containerEl.innerHTML = ''; } catch (e3) {}
        }
      };
      return handle;
    } catch (e) {
      try { securityMontados['delete'](containerEl); } catch (e2) {}
      if (typeof console !== 'undefined' && console.error) console.error('SecuritySimulator.mount: falha —', (e && e.message) || e);
      return undefined;
    }
  }

  var SecuritySimulator = {
    versaoDeclarada: 'simulador defensivo didático — dados fictícios, ambiente isolado (Seção 4.3). Não ejecuta ataques reais.',
    mount: mountSecurity,
    mensagens: mensagens,
    exerciciosAuthz: exerciciosAuthz,
    backupRegra: backupRegra,
    escopo: {
      operacoes: [
        'triagem de mensagens suspeitas (phishing/simulação)',
        'identificação de indicadores de phishing (ligações, urgência, ameaças, erros)',
        'classificação de riscos (baixo / médio / alto)',
        'simulação de políticas de backup (regra 3-2-1)',
        'exercícios de autenticação, autorização e princípio do menor privilégio'
      ],
      saidas: [
        'classificação phishing / seguro + feedback com justificativa',
        'indicadores detectados por mensagem',
        'nível de risco (baixo/médio/alto) com justificativa',
        'avaliação de política de backup vs regra 3-2-1',
        'resultado de exercícios de auth/authz com justificativa'
      ],
      observacao: 'Todos os dados são fictícios. Phishing/triagem são simulações estáticas — não analisa e-mails reais.'
    },
    limitacoes: [
      'não ejecuta ataques reais — todos os dados são fictícios e estáticos',
      'ambiente isolado — não acessa redes, e-mails ou servidores reais',
      'tabela de indicadores estática — não analisa e-mails em tempo real',
      'simulação didática — não substitui treinamento corporativo ou ferramenta AV/EDR',
      'classificação baseada em regras fixas, não em IA — use apenas como exercício'
    ]
  };

  /* Compatibilidade: navegador (window) + Node (globalThis/module). */
  if (typeof window !== 'undefined') { window.SecuritySimulator = SecuritySimulator; }
  if (typeof globalThis !== 'undefined') { globalThis.SecuritySimulator = SecuritySimulator; }
  if (typeof module !== 'undefined' && module.exports) { module.exports = SecuritySimulator; }
})(typeof window !== 'undefined' ? window : globalThis);
