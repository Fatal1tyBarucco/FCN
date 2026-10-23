/* service-worker.js — PWA (Seção 3.1 do Escrita.txt).
 *
 * LIMITAÇÃO FUNDAMENTAL (declarada e verdadeira):
 *  - Service Worker NÃO existe em file://. A API `navigator.serviceWorker` só
 *    está disponível em navegadores servidos por http/https. O registro
 *    condicional (somente quando location.protocol for 'http:' ou 'https:') é
 *    feito no index.html (tarefa de wiring). Em file:// este arquivo não é
 *    carregado como worker e NÃO emverá erro algum. O Modo A (abertura direta)
 *    funciona COMPLETO sem service worker — nada do app depende dele.
 *
 * Estratégia de cache:
 *  - precache mínimo e NÃO fatal: apenas index.html, styles.css e o manifest.
 *    Cada recurso é cacheado individualmente com .catch() para que um asset
 *    ausente nunca quebre a instalação (instalação offline-first robusta).
 *  - cache-on-fetch (lazy): demais recursos (dados, JS) são cacheados na
 *    primeira requisição bem-sucedida e servidos da memória em carregamentos
 *    posteriores / offline.
 *  - cache.match usa { ignoreSearch: true } para não quebrar por query string.
 *
 * Este arquivo é puro worker (usa `self`, `caches`, `clients`). node --check só
 * analisa a sintaxe — não executa. Não expõe globals à página.
 */
'use strict';

var CACHE_NAME = 'apostila-ia-pwa-v1';
var PRECACHE = [
  'index.html',
  'assets/css/styles.css',
  'manifest.webmanifest'
];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // cache mínimo; cada add falha isoladamente e é ignorada
      return Promise.all(PRECACHE.map(function (url) {
        return cache.add(url).catch(function () { return null; });
      }));
    }).catch(function () { /* instala mesmo se precache falhar parcialmente */ })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (name) {
        if (name !== CACHE_NAME) { return caches.delete(name); }
        return null;
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (e) {
  // Ignora requisições não-GET (ex.: POST) e requests destrutivos.
  if (!e.request || e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (cached) {
      if (cached) return cached;
      return fetch(e.request).then(function (resp) {
        // cacheia apenas respostas 200 básicas (não opaque/redirect)
        if (resp && resp.status === 200 && resp.type === 'basic') {
          var copy = resp.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request, copy);
          }).catch(function () {}); // falha de escrita no cache não quebra a resposta
        }
        return resp;
      }).catch(function () {
        // offline: tenta o cache como fallback (pode ser vazio → resposta de rede vazia)
        return caches.match(e.request, { ignoreSearch: true });
      });
    })
  );
});

/* Evento de mensagem para forçar atualização de cache (futuro) — descartado
 * silenciosamente se não houver cache. Não lança em file:// (SW inerte aqui). */
self.addEventListener('message', function (e) {
  if (!e || !e.data || !e.data.tipo) return;
});
