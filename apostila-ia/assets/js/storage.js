/* storage.js — PERSISTÊNCIA LOCAL (Seção 14 do Escrita.txt).
 *
 * Infraestrutura de leitura/escrita/mescla para a chave única
 * 'apostila-ia-progresso' (localStorage). Expõe window.ApostilaStorage
 * (alias window.StorageApp) com helpers seguros.
 *
 * ESCOPO HONESTO: este módulo NÃO é consumido pelos módulos existentes
 * (navigation.js, flashcards.js, quiz-engine.js), que continuam a escrever
 * diretamente em localStorage nas suas próprias chaves de namespace
 * (modulo-N, flashcards, questoes). Ele é infraestrutura disponível para
 * novos consumidores e ferramentas de backup; nenhum módulo existente foi
 * alterado. Não apresentar como "storage extra operacional" além disso.
 *
 * Funciona em file:// (localStorage disponível em navegadores modernos).
 * Limitações: modo privado/incógnito pode limpar dados ao fechar a aba;
 * sem criptografia; sem sincronização entre dispositivos; sem servidor.
 * SEM eval. SEM fetch. Entradas sanitizadas (JSON.parse protegido).
 */

(function () {
  'use strict';

  var CHAVE = 'apostila-ia-progresso';
  const VERSAO = 1;

  function disponivel() {
    try {
      if (typeof localStorage === 'undefined' || localStorage === null) return false;
      localStorage.setItem('__probe__', '1');
      localStorage.removeItem('__probe__');
      return true;
    } catch (e) {
      return false;
    }
  }

  function lerTudo() {
    if (!disponivel()) return { _v: VERSAO };
    try {
      var raw = localStorage.getItem(CHAVE);
      if (raw === null || raw === '') return { _v: VERSAO };
      var obj = JSON.parse(raw);
      if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return { _v: VERSAO };
      if (obj._v !== VERSAO) {
        var normalizado = {};
        var chaves = Object.keys(obj);
        for (var i = 0; i < chaves.length; i++) {
          normalizado[chaves[i]] = obj[chaves[i]];
        }
        normalizado._v = VERSAO;
        return normalizado;
      }
      return obj;
    } catch (e) {
      return { _v: VERSAO };
    }
  }

  function escreverTudo(obj) {
    if (!disponivel()) return false;
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
    try {
      obj._v = VERSAO;
      localStorage.setItem(CHAVE, JSON.stringify(obj));
      return true;
    } catch (e) {
      return false;
    }
  }

  function lerNamespace(ns) {
    if (typeof ns !== 'string' || ns === '') return null;
    var tudo = lerTudo();
    var v = tudo[ns];
    if (v && typeof v === 'object') return v;
    return null;
  }

  function escreverNamespace(ns, valor) {
    if (typeof ns !== 'string' || ns === '') return false;
    var tudo = lerTudo();
    tudo[ns] = valor;
    return escreverTudo(tudo);
  }

  function mesclarNamespace(ns, parcial) {
    if (typeof ns !== 'string' || ns === '') return false;
    if (!parcial || typeof parcial !== 'object' || Array.isArray(parcial)) return false;
    var atual = lerNamespace(ns);
    if (!atual || Array.isArray(atual)) atual = {};
    var chaves = Object.keys(parcial);
    for (var i = 0; i < chaves.length; i++) {
      atual[chaves[i]] = parcial[chaves[i]];
    }
    return escreverNamespace(ns, atual);
  }

  function removerNamespace(ns) {
    if (typeof ns !== 'string' || ns === '') return false;
    var tudo = lerTudo();
    if (Object.prototype.hasOwnProperty.call(tudo, ns)) {
      delete tudo[ns];
    }
    return escreverTudo(tudo);
  }

  function exportar() {
    try {
      return JSON.stringify(lerTudo(), null, 2);
    } catch (e) {
      return '{}';
    }
  }

  function importar(json) {
    if (typeof json !== 'string') return false;
    var obj;
    try {
      obj = JSON.parse(json);
    } catch (e) {
      return false;
    }
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
    return escreverTudo(obj);
  }

  function limparTudo() {
    if (!disponivel()) return false;
    try {
      localStorage.removeItem(CHAVE);
      return true;
    } catch (e) {
      return false;
    }
  }

  var api = {
    CHAVE: CHAVE,
    VERSAO: VERSAO,
    VERSAO_STORAGE: VERSAO,
    disponivel: disponivel,
    lerTudo: lerTudo,
    escreverTudo: escreverTudo,
    lerNamespace: lerNamespace,
    escreverNamespace: escreverNamespace,
    mesclarNamespace: mesclarNamespace,
    removerNamespace: removerNamespace,
    exportar: exportar,
    importar: importar,
    limparTudo: limparTudo
  };

  if (typeof window !== 'undefined') {
    window.ApostilaStorage = api;
    window.StorageApp = api;
  }
})();
