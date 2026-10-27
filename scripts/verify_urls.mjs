#!/usr/bin/env node
/**
 * Verifica HTTP status de todas as URLs em references.js (sem dependências externas).
 * Executar na raiz: node scripts/verify_urls.mjs
 * Saída: docs/VERIFICACAO_URLS_2026-10-27.md
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { Script } from "node:vm";

const root = process.cwd();
const refsPath = resolve(root, "apostila-ia/assets/data/references.js");
const outPath = resolve(root, "docs/VERIFICACAO_URLS_2026-10-27.md");

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// Carrega references.js (const references = [...]) sem eval global.
const code = readFileSync(refsPath, "utf8") + "\n; globalThis.__references = references;";
const ctx = {};
const script = new Script(code);
script.runInNewContext(ctx);
const refs = ctx.__references;

const entries = refs.map((r) => ({ id: r.id, url: r.url }));

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function attempt(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": UA, Accept: "*/*" },
    });
    clearTimeout(timer);
    // drena body para liberar socket
    try {
      await res.arrayBuffer();
    } catch {}
    return { ok: true, status: res.status, finalUrl: res.url, redirected: res.redirected };
  } catch (e) {
    clearTimeout(timer);
    let reason = e && e.name === "AbortError" ? "timeout (10s)" : (e && e.message) || String(e);
    if (e && e.cause && e.cause.code) reason += ` (${e.cause.code})`;
    return { ok: false, error: reason };
  }
}

async function check(url) {
  let r = await attempt(url, "HEAD");
  // Fallback para GET se HEAD falhar ou retornar >= 400
  if (!r.ok || r.status >= 400) {
    const r2 = await attempt(url, "GET");
    r = r2.ok ? r2 : (r.ok ? r : r2);
    // se HEAD ok mas 4xx e GET também 4xx, mantém GET
    if (r2.ok) r = r2;
  }
  return r;
}

const results = [];
let ok = 0,
  redirect = 0,
  fail = 0;

for (let i = 0; i < entries.length; i++) {
  const { id, url } = entries[i];
  const r = await check(url);
  let status, finalUrl, resultado, motivo;
  if (!r.ok) {
    status = "—";
    finalUrl = url;
    resultado = "fail";
    motivo = r.error;
    fail++;
  } else {
    status = r.status;
    finalUrl = r.finalUrl;
    const redirected = r.redirected || finalUrl !== url;
    if (r.status >= 400) {
      resultado = "fail";
      motivo = `HTTP ${r.status}`;
      fail++;
    } else if (redirected) {
      resultado = "redirect";
      motivo = finalUrl !== url ? `→ ${finalUrl}` : "redirect";
      redirect++;
    } else {
      resultado = "OK";
      motivo = "Sem redirecionamento";
      ok++;
    }
  }
  results.push({ n: i + 1, id, url, status, finalUrl, resultado, motivo });
  process.stdout.write(`[${i + 1}/${entries.length}] ${id} -> ${resultado} ${status}\n`);
  if (i < entries.length - 1) await sleep(200);
}

// Monta relatório
const lines = [];
lines.push("# Verificação de URLs — references.js (P2-4)");
lines.push("");
lines.push(`Data da verificação: 2026-10-27. Escopo: todas as ${entries.length} entradas de \`apostila-ia/assets/data/references.js\`, cada uma com \`status: "verificado"\` e URL preenchida.`);
lines.push("");
lines.push("Método: script Node (sem dependências externas) `scripts/verify_urls.mjs`. Para cada URL: tentativa HEAD (timeout 10s); em caso de falha de rede ou status >= 400, fallback GET. Redirects seguidos (follow). Delay de 200 ms entre requisições. User-Agent de navegador (Chrome) para evitar bloqueios anti-bot. Erros de rede (timeout, DNS, TLS, ECONNRESET etc.) registrados como 'fail' com motivo.");
lines.push("");
lines.push(`Resumo: total ${entries.length}; OK ${ok}; redirect ${redirect}; fail ${fail}.`);
lines.push("");
lines.push("| # | ID | URL | Status HTTP | URL final | Resultado | Motivo |");
lines.push("|---|---|---|---|---|---|---|");
for (const r of results) {
  lines.push(
    `| ${r.n} | ${r.id} | ${r.url} | ${r.status} | ${r.finalUrl} | ${r.resultado} | ${r.motivo} |`
  );
}
lines.push("");
lines.push("## Pendências");
const fails = results.filter((r) => r.resultado === "fail");
if (fails.length === 0) {
  lines.push("");
  lines.push("Nenhuma URL com resultado 'fail'.");
} else {
  lines.push("");
  for (const f of fails) {
    lines.push(`- \`${f.id}\` — ${f.url} — ${f.motivo}`);
  }
}
lines.push("");
lines.push("## Observações gerais");
lines.push("");
lines.push(`- ${redirect} URLs sofreram redirecionamento (HTTP→HTTPS, barra final, etc.).`);
lines.push(`- ${fail} URLs com resultado 'fail'.`);
lines.push("- `references.js` não foi alterado nesta verificação.");
lines.push("- Nenhum commit/push realizado.");

writeFileSync(outPath, lines.join("\n") + "\n", "utf8");
console.log(`\nResumo: total ${entries.length}, OK ${ok}, redirect ${redirect}, fail ${fail}`);
console.log(`Relatório salvo em ${outPath}`);
