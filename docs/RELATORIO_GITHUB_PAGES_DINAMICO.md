# Relatório: Transformar GitHub Pages (site estático) em site dinâmico

> Projeto FCN — apostila-ia. Data da pesquisa: 29/10/2026. Fontes listadas ao final de cada seção com URL + data de verificação. Incertezas marcadas explicitamente.

## 1. Premissa: GitHub Pages é hospedagem estática

GitHub Pages serve **apenas arquivos estáticos** (HTML/CSS/JS/assets). Não há execução de código server-side, sem banco de dados nativo, sem cookies dinâmicos controlados pelo servidor, sem sessões. Fonte: GitHub Docs "GitHub Pages limits" (https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits, verificado 29/10/2026).

Limites publicados (verificados 29/10/2026):
- 1 site de usuário/org por conta.
- Repositório fonte recomendado ≤ 1 GB; site publicado ≤ 1 GB.
- Deploy timeout 10 min.
- Banda **soft limit 100 GB/mês**.
- 10 builds/hora (não se aplica com workflow Actions customizado).
- Rate limits podem retornar 429.
- Excesso pode gerar e-mail de suporte sugerindo CDN terceiro ou mudança de host.

Conclusão: "dinamismo" em Pages só pode vir de (a) código client-side (JS no navegador), (b) serviços externos chamados via fetch, ou (c) migração de host. Não existe "Pages dinâmico" nativo.

## 2. Arquiteturas híbridas

### 2.1 Pages (frontend) + backend externo
Frontend permanece no Pages; backend é um serviço separado (REST/GraphQL) chamado via `fetch()`. Exemplos: Firebase (Auth + Firestore + Cloud Functions), Supabase (Postgres + Auth + Edge Functions + Realtime), Appwrite. Fontes: supabase.com (2025-08-20), bootstrap.build (jun/2026).

Vantagens: Pages continua grátis; backend escalável. Desvantagens: CORS, dois deploys, custo do backend, latência cross-origin, gestão de segredos no client (não pode guardar chaves privadas).

### 2.2 Serverless functions (FaaS)
Funções individuais em resposta a eventos: AWS Lambda, Google Cloud Functions, Azure Functions, Vercel/Netlify Functions, Cloudflare Pages Functions, Supabase Edge Functions (Deno). Fonte: turbodocx.com (2026).

Para Pages especificamente, não há FaaS nativo; usar provider externo. Cloudflare Pages Functions é o mais próximo de "Pages + functions" mas é outro host (Cloudflare), não GitHub Pages.

### 2.3 BaaS
Firebase: NoSQL (Firestore), Auth, Storage, Cloud Functions. Supabase: Postgres + Auth + Storage + Realtime + Edge Functions, open-source, portável, self-host. Appwrite: similar, self-host. Fonte: supabase.com/alternatives/supabase-vs-firebase (2025-08-20).

### 2.4 APIs públicas
Chamadas diretas a APIs com CORS habilitado. GitHub Pages retorna `Access-Control-Allow-Origin: *` (verificado em StackOverflow; relatos de alternância — **incerteza**: alguns relatos dizem que CORS no Pages "foi e voltou"; tratar como não garantido e testar). Para APIs sem CORS, usar proxy (ex.: cors.dev, 1 MiB, GET/HEAD grátis) ou GitHub Actions para pré-buscar dados.

## 3. GitHub Actions como "backend leve"

Actions pode executar código em schedule (cron) e commitar resultados (JSON) no repo, que o Pages serve. Caso de uso: pré-computar dados, gerar conteúdo, atualizar leaderboards estáticos. **Não** é backend de requisição em tempo real: latência de minutos, sem estado de sessão, sem resposta por usuário. Fonte: github.com/orgs/community/discussions/187873.

Limitação crítica: não resolve progresso por usuário, ranking em tempo real, sync entre dispositivos.

## 4. WebAssembly / edge functions

WASM roda no navegador (client-side) — útil para CPU pesada (simuladores, parsing) mas não cria dinamismo de dados/conta. Edge functions (Cloudflare Workers, Deno Deploy, Vercel Edge) rodam na borda e podem ser chamadas pelo Pages como backend. Fonte: developers.cloudflare.com/pages/functions/module-support (atualizado 21/04/2026), danbev/wasm-github-pages.

Para GitHub Pages: pode hospedar binário .wasm estático e instanciá-lo no browser (sem backend). Útil para performance, não para persistência compartilhada.

## 5. Limitações do Pages (resumo)

- Sem server-side execution.
- Sem banco nativo.
- Sem cookies/sessões dinâmicos controlados pelo servidor (cookies de terceiros possíveis mas não server-side).
- CORS: Pages serve com CORS aberto (relatos variáveis — incerteza).
- Rate limits 429; banda soft 100 GB/mês.
- Tamanho 1 GB.
- Sem autenticação nativa.
- Secrets não podem ficar no client.

## 6. PWA / offline + IndexedDB / localStorage como "dinamismo local"

Service Worker + Cache API para offline; IndexedDB/localStorage para estado local. Web.dev (learn/pwa/offline-data). bibliotecas: localForage, idb. Permite progresso, flashcards, simulados funcionando offline e "dinamismo" percebido, mas **sem sync entre dispositivos** e sem ranking compartilhado. Dados ficam no navegador do usuário.

## 7. Custos e complexidade

| Abordagem | Custo | Complexidade | Dinamismo real |
|---|---|---|---|
| Pages puro + localStorage/IndexedDB | $0 | Baixa | Local apenas |
| Pages + BaaS (Firebase/Supabase free) | $0 free tier (limites) | Média | Contas + sync + ranking |
| Pages + serverless externo (Vercel/Netlify/CF) | Free tier + overages | Média-Alta | API customizada |
| Migrar host (Vercel/Netlify/CF Pages) | Free→$20+/mês | Alta | Full-stack |
| Actions como backend leve | $0 (minutos) | Baixa-Média | Batch, não tempo real |

Fontes de preço: bootstrap.build comparativos (jun/2026) — Supabase free 2 projetos/500 MB; Firebase Blaze pay-as-you-go; Cloudflare Pages bandwidth ilimitado; Vercel Pro $25/mês. Incerteza: preços mudam; verificar antes de decisão.

Supabase free: projetos pausam após 7 dias de baixa atividade (verificado em supabase.com 29/10/2026).

## 8. Casos de uso para apostila FCN

- Progresso por módulo/tópico: hoje localStorage. Para sync entre dispositivos → precisa conta + backend.
- Flashcards (revisão espaçada): estado local OK para uso individual; sync exige backend.
- Simulados (quiz): pontuação local; ranking compartilhado exige backend + anti-cheat (server-side) — Pages sozinho não garante.
- Ranking: requer backend confiável (não pode confiar no client).
- Sync entre dispositivos: requer auth + DB + (idealmente) realtime.

Conclusão: "dinamismo local" (PWA + IndexedDB) resolve 80% do valor percebido (offline, progresso, flashcards) sem backend. Ranking/sync exigem backend externo.

## 9. Recomendação para FCN

Manter Pages como host (custo $0, já publicado). Evolução incremental:
1. Curto: PWA + IndexedDB + export/import de progresso (sem conta).
2. Médio: integrar BaaS (Supabase recomendado por Postgres + RLS + open-source + free tier) para auth + sync + ranking, mantendo Pages como frontend.
3. Longo: avaliar migração de host apenas se precisar SSR/edge functions nativas; ou manter híbrido.

Não migrar para full-stack agora: custo/complexidade desproporcional ao valor; projeto é SPA vanilla sem build.

## Fontes (verificadas 29/10/2026 salvo indicação)

1. GitHub Pages limits — https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
2. GitHub community discussion #187873 (Actions como backend leve) — https://github.com/orgs/community/discussions/187873
3. CORS no Pages — https://cors.dev/guides/github-pages-cors ; StackOverflow (relatos variáveis)
4. Bootstrap.build comparativos (jun/2026) — https://bootstrap.build/articles/github-pages-alternatives ; https://bootstrap.build/articles/firebase-hosting-alternatives
5. Supabase vs Firebase (20/08/2025) — https://supabase.com/alternatives/supabase-vs-firebase
6. Supabase architecture/pricing — https://supabase.com/ ; https://supabase.com/docs/guides/getting-started/architecture
7. Serverless/BaaS/FaaS — https://www.turbodocx.com/blog/serverless-backend-architecture
8. Cloudflare Pages Functions + Wasm — https://developers.cloudflare.com/pages/functions/module-support/
9. WASM no Pages (exemplo) — https://github.com/danbev/wasm-github-pages
10. PWA offline data — https://web.dev/learn/pwa/offline-data ; localForage — https://github.com/localforage/localforage
11. Estudo cases: fauvault (Next+Neon), Trophy leaderboards, Quiz0r — https://github.com/onur-tellioglu/fauvault ; https://docs.trophy.so/guides/how-to-build-a-leaderboards-feature
12. Incerteza CORS Pages: https://stackoverflow.com/questions/26416727/cross-origin-resource-sharing-on-github-pages/37796722 (relatos contraditórios).

## Incertezas declaradas

- CORS no GitHub Pages: fontes contraditórias (alguns dizem `*` presente, outros não). Validar com `curl -I` no site publicado antes de depender.
- Preços/free tiers mudam; verificar no momento da decisão.
- Supabase free pausa projetos após 7 dias de inatividade — pode ser problema para apostila de baixo tráfego.
- Ranking anti-cheat não é viável só no client; requer server-side.
- WebAssembly no Pages é client-side apenas; não resolve persistência.
