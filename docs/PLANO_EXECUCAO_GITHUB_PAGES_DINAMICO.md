# Plano de Execução — GitHub Pages dinâmico (projeto FCN / apostila-ia)

> Adaptado ao projeto FCN (SPA vanilla em `apostila-ia/`, host GitHub Pages, sem build). Data: 29/10/2026. Fonte de requisitos: `Escrita.txt` + `AGENTS.md`. Não inventar capacidades; marcar incertezas.

## Princípio

Manter GitHub Pages como host ($0, já publicado). Adicionar dinamismo em camadas: (1) local (PWA/IndexedDB), (2) híbrido (BaaS), (3) migração de host só se necessário. Nunca quebrar o modo `file://` (Seção 3.2 do Escrita.txt) sem aviso.

## Fase 0 — Preparação (curto, 1-2 sprints)

Objetivo: base técnica sem mudança de host.

- [ ] Validar CORS do site publicado: `curl -I https://fatal1tybarucco.github.io/FCN/` e registrar header. (Incerteza: relatos contraditórios.)
- [ ] Auditar estado atual: localStorage chave `apostila-ia-progresso` (progress, flashcards, quizScores, theme). Documentar schema em `docs/`.
- [ ] Adicionar `manifest.webmanifest` + ícone 192px (já mencionado no AGENTS como existente — verificar; se não, criar).
- [ ] Service Worker com cache-first para assets estáticos (offline). Atenção: SW só em HTTPS (Pages ok; `file://` não). Manter degradação graciosa.
- [ ] Export/import de progresso (JSON download/upload) para mitigar perda de dados e permitir "sync manual" entre dispositivos. Sem backend.

Critério de aceite: app funciona offline; progresso persiste; export/import round-trip OK.

## Fase 1 — Dinamismo local (curto-médio, 2-4 sprints)

Objetivo: experiência dinâmica sem conta.

- [ ] Migrar persistência de localStorage para IndexedDB (via `localforage` ou `idb`) para capacidade maior e async. Manter fallback localStorage.
- [ ] Revisão espaçada (SRS) local para flashcards: agendar próxima revisão por desempenho. Tudo client-side.
- [ ] Histórico de simulados com estatísticas (acertos por módulo, tempo). Local.
- [ ] Tema/preferências persistidas (já existe via State).
- [ ] PWA installable (beforeinstallprompt) + aviso de modo privado/file:// limpando dados (já previsto no AGENTS).

Critério: 0 perda de dados em uso normal; offline funcional; sem backend.

## Fase 2 — Híbrido com BaaS (médio, 4-8 sprints)

Objetivo: contas + sync + ranking compartilhado. Decisão de provider antes de codar.

- [ ] Escolher provider: **Supabase recomendado** (Postgres + RLS + open-source + free tier 2 projetos/500 MB; pausa após 7 dias inatividade — risco para baixo tráfego). Alternativas: Firebase (lock-in Google, NoSQL), Appwrite (self-host).
- [ ] Verificar preços/free tiers no momento (incerteza: mudam).
- [ ] Auth: e-mail/senha + OAuth (GitHub/Google). Guardar token em memória, não localStorage (XSS). 
- [ ] Schema DB: users, progress (modulo, topico, status, updated_at), flashcard_reviews, quiz_attempts, leaderboard_entries.
- [ ] RLS por usuário; nunca confiar no client para ranking.
- [ ] Sync: push de progresso local → DB; pull ao login; resolução de conflitos (last-write-wins por updated_at, com aviso).
- [ ] Ranking: calcular server-side (view/materialized ou função) a partir de quiz_attempts; exibir top N.
- [ ] Manter modo offline: fila de sync (Background Sync API) quando voltar online.

Critério: usuário loga em 2 dispositivos e vê progresso sincronizado; ranking não manipulável pelo client.

Riscos: CORS (validar), segredo de service role nunca no client (usar anon key + RLS), free tier pausa (Supabase).

## Fase 3 — Backend leve via GitHub Actions (paralelo/opcional)

Objetivo: dados agregados/batch sem custo.

- [ ] Workflow cron que agrega estatísticas anônimas (ex.: contagem de tentativas por questão) e commita JSON no repo → Pages serve. Útil para "questões mais erradas" sem backend.
- [ ] NÃO usar para progresso por usuário ou ranking em tempo real (latência de minutos, sem sessão).

## Fase 4 — Avaliação de migração de host (longo, condicional)

Só se Fase 2 provar insuficiente (ex.: precisa SSR/edge functions nativas ou latência baixa).

- [ ] Comparar Cloudflare Pages (bandwidth ilimitado, Pages Functions) vs Vercel ($25/mês Pro) vs Netlify vs Firebase Hosting.
- [ ] Custo de migração: adaptar SPA vanilla (sem build) é simples; risk é perder integração Git/Pages.
- [ ] Decisão baseada em métricas reais (tráfego, custo) após Fase 2.

## O que NÃO fazer

- Não declarar "dinâmico" só por JS client-side sem evidência.
- Não guardar segredos/chaves privadas no frontend.
- Não confiar no client para ranking/pontuação oficial.
- Não migrar host prematuramente.
- Não quebrar `file://` sem aviso (AGENTS.md §3.2).

## Métricas de sucesso

- Offline: app carrega sem rede (SW).
- Sync: progresso consistente em 2 dispositivos (Fase 2).
- Ranking: top 10 compartilhado e anti-manipulação (Fase 2).
- Custo: $0 nas Fases 0-1; ≤ free tier na Fase 2.

## Incertezas

- CORS do Pages: validar empiricamente.
- Preços/free tiers: verificar no momento.
- Supabase pausa 7 dias: pode inviabilizar baixo tráfego; considerar ping via cron (Actions) ou provider pago.
- WebAssembly: útil para performance, não para persistência — não substitui backend.
