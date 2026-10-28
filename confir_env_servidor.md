# Confirmação de ambiente de servidor (Modo B)

## Comando

```bash
cd apostila-ia
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Verificação executada (2026-10-27)

Servidor `python3 -m http.server` iniciado em `apostila-ia/` e consultado via `curl` em `127.0.0.1`:

| Recurso | HTTP | Observação |
|---|---|---|
| `/index.html` | 200 | 70.872 bytes; `Content-Type: text/html` |
| `/manifest.webmanifest` | 200 | JSON válido; `Content-Type` servido pelo SimpleHTTP |
| `/service-worker.js` | 200 | Sintaxe válida; worker inerte em `file://` |

## Service Worker

- Registro condicional no `index.html` apenas quando `location.protocol` é `http:` ou `https:`.
- Em `file://` (Modo A) a API `navigator.serviceWorker` não existe; o app funciona completo sem SW.
- Estratégia de cache: precache mínimo não fatal + cache-on-fetch lazy; `cache.match` com `ignoreSearch: true`.

## Limitações

- SimpleHTTP não envia cabeçalhos de cache agressivos; em produção (GitHub Pages) o cache é gerenciado pela CDN do Pages.
- Testes de instalação PWA (Add to Home Screen) não executados neste ambiente.

## Conclusão

Ambiente de servidor estático confirmado funcional para desenvolvimento e validação. Nenhuma correção de código necessária.
