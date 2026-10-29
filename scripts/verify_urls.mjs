#!/usr/bin/env node
/**
 * Verifica HTTP status de todas as URLs em references.js (sem dependências externas).
 * Executar na raiz: node scripts/verify_urls.mjs
 * Saída: docs/VERIFICACAO_URLS_2026-10-27.md
 *
 * Classificação (FIX-01):
 *   ok        — 2xx no destino final
 *   redirect  — 3xx na cadeia, terminando em 2xx (destino final reportado)
 *   bloqueado — 401/403/405/429 (servidor recusou o cliente automatizado;
 *               NÃO é prova de link inválido) — separado de "quebrado"
 *   quebrado  — 404/410 no destino ou erro de rede (DNS/TLS/timeout) — defeito real
 *
 * Reduções de falso negativo: retry de 1 tentativa extra por URL com segundo
 * User-Agent (em 401/403/405/429 ou erro de rede).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { Script } from "node:vm";

const root = process.cwd();
const refsPath = resolve(root, "apostila-ia/assets/data/references.js");
const outPath = resolve(root, "docs/VERIFICACAO_URLS_2026-10-27.md");

const USER_AGENTS = [
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0",
];

const BLOCKED_CODES = new Set([401, 403, 405, 429]);
const BROKEN_CODES = new Set([404, 410]);

// Carrega references.js (const references = [...]) sem eval global.
const code = readFileSync(refsPath, "utf8") + "\n; globalThis.__references = references;";
const ctx = {};
const script = new Script(code);
script.runInNewContext(ctx);
const refs = ctx.__references;

const entries = refs.map((r) => ({ id: r.id, url: r.url, entradaStatus: r.status }));

function markdownCell(value) {
  return String(value == null ? "" : value)
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\\/g, "\\\\")
    .replace(/\|/g, "\\|")
    .replace(/`/g, "\\`")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]");
}
function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function attempt(url, method, ua) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": ua, Accept: "text/html,*/*" },
    });
    clearTimeout(timer);
    // drena body para liberar socket
    try {
      await res.arrayBuffer();
    } catch {}
    return { ok: true, status: res.status, finalUrl: res.url, redirected: res.redirected };
  } catch (e) {
    clearTimeout(timer);
    let reason = e && e.name === "AbortError" ? "timeout (15s)" : (e && e.message) || String(e);
    if (e && e.cause && e.cause.code) reason += ` (${e.cause.code})`;
    return { ok: false, error: reason };
  }
}

/**
 * Verificação de uma URL.
 * Passada 1 (UA 1): HEAD; se HEAD erro/4xx, HEAD+GET conclui. Resultado de rede
 * estável. Passada 2 (retry, UA 2) só ocorre se a conclusão da passada 1 for
 * "bloqueado" (401/403/405/429) ou erro de rede.
 * Retorna { ok, status, finalUrl, redirected } OU { ok: false, error }.
 */
async function conclusionOf(url, ua) {
  const head = await attempt(url, "HEAD", ua);
  if (head.ok && head.status < 400) {
    return { ok: true, status: head.status, finalUrl: head.finalUrl, redirected: head.redirected };
  }
  const get = await attempt(url, "GET", ua);
  if (get.ok) return { ok: true, status: get.status, finalUrl: get.finalUrl, redirected: get.redirected };
  if (head.ok) {
    // HEAD respondeu 4xx/5xx e o GET falhou na rede: mantém o status do HEAD como evidência
    return { ok: true, status: head.status, finalUrl: url, redirected: false };
  }
  // Ambas fracassaram na rede (HEAD e GET): erro de rede é a conclusão desta passada
  return { ok: false, error: get.error };
}

async function check(url) {
  const first = await conclusionOf(url, USER_AGENTS[0]);
  const shouldRetry =
    !first.ok ||
    (first.ok && BLOCKED_CODES.has(first.status));
  if (!shouldRetry) return first;

  // Pausa maior antes do retry para não somar ao rate-limiting do servidor
  await sleep(2000);
  const second = await conclusionOf(url, USER_AGENTS[1]);
  // Prioriza a segunda tentativa apenas se ela chega a um veredito melhor:
  function rank(r) {
    if (!r.ok) return 0; // erro de rede
    if (BLOCKED_CODES.has(r.status)) return 1; // bloqueado
    if (BROKEN_CODES.has(r.status)) return 2; // quebrado (404/410)
    if (r.status >= 400) return 2; // outro 4xx/5xx → quebrado
    return 3; // 2xx (ok/redirect)
  }
  if (rank(second) > rank(first)) return second;
  if (!first.ok && second.ok) return second;
  if (!second.ok && !first.ok) return { ok: false, error: `${first.error} | retry: ${second.error}` };
  return first;
}

const results = [];
let ok = 0,
  redirect = 0,
  bloqueado = 0,
  quebrado = 0;

for (let i = 0; i < entries.length; i++) {
  const { id, url, entradaStatus } = entries[i];
  const r = await check(url);
  let status, finalUrl, resultado, motivo;
  if (!r.ok) {
    status = "—";
    finalUrl = url;
    resultado = "quebrado";
    motivo = `Erro de rede: ${r.error}`;
    quebrado++;
  } else {
    status = r.status;
    finalUrl = r.finalUrl;
    const redirected = r.redirected || r.finalUrl !== url;
    if (BLOCKED_CODES.has(r.status)) {
      resultado = "bloqueado";
      motivo = `HTTP ${r.status} — servidor recusou o cliente automatizado; não é prova de link inválido`;
      bloqueado++;
    } else if (r.status >= 400) {
      resultado = "quebrado";
      motivo = `HTTP ${r.status} (destino final)`;
      quebrado++;
    } else if (redirected) {
      resultado = "redirect";
      motivo = `→ ${r.finalUrl}`;
      redirect++;
    } else {
      resultado = "ok";
      motivo = "2xx sem redirecionamento";
      ok++;
    }
  }
  results.push({ n: i + 1, id, url, entradaStatus, status, finalUrl, resultado, motivo });
  process.stdout.write(`[${i + 1}/${entries.length}] ${id} -> ${resultado} ${status}\n`);
  // Espaçamento de 1000 ms: bursts curtos dispararam rate-limiting (403 em massa)
  // em gov.br e support.google.com durante os testes (FIX-01) — não refletem o estado do link.
  if (i < entries.length - 1) await sleep(1000);
}

// Monta relatório
const lines = [];
lines.push("# Verificação de URLs — references.js (P2-4, atualizada em FIX-01)");
lines.push("");
lines.push(`Data da verificação: ${new Date().toISOString().slice(0, 10)}. Escopo: todas as ${entries.length} entradas de \`apostila-ia/assets/data/references.js\`.`);
lines.push("");
lines.push("Método: script Node (sem dependências externas) `scripts/verify_urls.mjs`. Para cada URL: HEAD (timeout 15 s); se HEAD indicar erro de rede ou status ≥ 400, repete como GET. Em caso de bloqueio (401/403/405/429) ou erro de rede, pausa de 2 s e 1 tentativa extra com segundo User-Agent (Chrome Windows/Edge). Redirects seguidos (follow); a URL final reportada é o destino. Delay de 1000 ms entre requisições (bursts mais curtos dispararam rate-limiting em gov.br e support.google.com durante os testes, produzindo 403 em massa que não reflete o estado real dos links).");
lines.push("");
lines.push("Limitação conhecida: `bloqueado` pode indicar rate-limiting causado pelo próprio varredor; retestar manualmente em navegador antes de presumir indisponibilidade.");
lines.push("");
lines.push("Classificação: `ok` (2xx no destino), `redirect` (3xx na cadeia até 2xx), `bloqueado` (401/403/405/429 — o servidor recusou o cliente automatizado; **não** é prova de link inválido), `quebrado` (404/410 no destino ou erro de DNS/TLS/timeout — defeito real).");
lines.push("");
lines.push(`Resumo: total ${entries.length}; ok ${ok}; redirect ${redirect}; bloqueado ${bloqueado}; quebrado ${quebrado}.`);
lines.push("");
lines.push("| # | ID | URL | Status HTTP | URL final | Resultado | Motivo |");
lines.push("|---|---|---|---|---|---|---|");
for (const r of results) {
  lines.push(
    `| ${r.n} | ${markdownCell(r.id)} | ${markdownCell(r.url)} | ${r.status} | ${markdownCell(r.finalUrl)} | ${markdownCell(r.resultado)} | ${markdownCell(r.motivo)} |`
  );
}
lines.push("");

// Defeitos reais (SOMENTE 'quebrado')
lines.push("## Defeitos reais (quebrado — 404/410 ou erro de DNS/TLS/timeout)");
const quebrados = results.filter((r) => r.resultado === "quebrado");
if (quebrados.length === 0) {
  lines.push("");
  lines.push("Nenhuma URL com 404/410 nem erro de rede comprovado.");
} else {
  lines.push("");
  for (const f of quebrados) {
    lines.push(`- \`${markdownCell(f.id)}\` — ${markdownCell(f.url)} — ${markdownCell(f.motivo)}`);
  }
}

// Bloqueados (informativo — NÃO conta como defeito)
lines.push("");
lines.push("## Bloqueados (informativo — não é defeito)");
const bloqueados = results.filter((r) => r.resultado === "bloqueado");
if (bloqueados.length === 0) {
  lines.push("");
  lines.push("Nenhuma URL devolveu 401/403/405/429.");
} else {
  lines.push("");
  for (const f of bloqueados) {
    lines.push(`- \`${markdownCell(f.id)}\` — ${markdownCell(f.url)} — HTTP ${f.status} (recusa a cliente automatizado; retestar manualmente em navegador antes de presumir indisponibilidade)`);
  }
}

lines.push("");
lines.push("## Observações gerais");
lines.push("");
lines.push(`- ${redirect} URLs sofreram redirecionamento (HTTP→HTTPS, barra final etc.) e terminaram em 2xx.`);
lines.push(`- ${bloqueado} URLs devolveram 401/403/405/429 — classificadas como \`bloqueado\`, não como defeito de link.`);
lines.push(`- ${quebrado} URLs com defeito real (\`quebrado\`).`);
lines.push("- Nenhum commit/push realizado.");
lines.push("- O script não altera `references.js`.");
lines.push("- Tratamento FIX-01 da entrada `ref-secom-guia-redes-sociais-governo-federal`: o PDF oficial respondeu 404 em 2026-10-27 e também em 2026-10-28 (reproduzido por curl e node fetch; horários distintos); o mesmo conteúdo voltou a responder 200 em retestes espaçados no mesmo dia — acesso intermitente. A página do portal que o lista (`/central-de-conteudo/redes/guia`) está restrita a autenticação (\"Conteúdo Restrito\"). A entrada foi mantida com `status: \"indisponivel\"` (não-video; o app só filtra `status` em referências de vídeo, e nenhum validador consome `status` de referências técnicas), sem substituto adotado porque não há URL pública no gov.br comprovadamente estável para o mesmo documento.");

writeFileSync(outPath, lines.join("\n") + "\n", "utf8");
console.log(`\nResumo: total ${entries.length}, ok ${ok}, redirect ${redirect}, bloqueado ${bloqueado}, quebrado ${quebrado}`);
console.log(`Relatório salvo em ${outPath}`);
