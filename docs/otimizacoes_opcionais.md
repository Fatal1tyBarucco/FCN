# Otimizações opcionais (§7)

## Meta tags SEO

Estado atual em `apostila-ia/index.html`:

- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>` descritivo
- `<meta name="description">` presente
- `<meta name="theme-color" content="#1a73e8">`
- `<link rel="manifest" href="manifest.webmanifest">`

Opcional (não aplicado — fora do escopo obrigatório):
- Open Graph / Twitter Cards (`og:title`, `og:description`, `og:image`, `twitter:card`).
- `canonical` URL para o site publicado.

Justificativa: o app é SPA estática sem roteamento por URL; as tags atuais cobrem SEO básico. Adição de OG/Twitter pode ser feita em PR futuro sem impacto funcional.

## Cache

- Service Worker já implementado (`apostila-ia/service-worker.js`) com precache mínimo não fatal e cache-on-fetch lazy.
- `CACHE_NAME = 'apostila-ia-pwa-v1'`.
- Registro condicional apenas em `http/https` (GitHub Pages e Modo B).
- Nenhuma alteração necessária.

## Favicon

- `<link rel="icon" href="assets/icons/icon-192.png" type="image/png">` presente.
- Ícones PWA 192/512 declarados no manifest.
- Opcional: `favicon.ico` e `apple-touch-icon` para iOS legado. Não aplicado (ícones PNG já cobrem PWA moderno).

## Patches aplicados

Nenhum patch de código foi aplicado nesta etapa para otimizações opcionais. A única edição documentada é a correção de contagens no `README.md` (ver `atualizacao_readme.md`).
