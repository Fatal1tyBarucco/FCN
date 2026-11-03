#!/usr/bin/env node
"use strict";

/**
 * Teste de regressão VISUAL e de RESPONSIVIDADE da apostila.
 *
 * Complementa `test-browser-smoke.cjs` (carga/estrutura) e
 * `test-browser-interactions.cjs` (interações/axe): aqui verificamos o
 * resultado computado do design system — contraste, hierarquia, alvos de
 * toque, foco visível, ausência de rolagem horizontal indevida e coerência
 * dos componentes entre os temas claro e escuro.
 *
 * Execução (a partir da raiz do repo):
 *   NODE_PATH=<dir com playwright> node verificacao/test-visual-regression.cjs
 *
 * Evidências (screenshots) são gravadas em `verificacao/evidencias/`
 * (ignorada pelo .gitignore). Use `--no-screenshots` para não gerar imagens.
 */

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const APP = path.resolve(ROOT, "apostila-ia/index.html");
const EVIDENCE_DIR = path.resolve(ROOT, "verificacao/evidencias");
const TAKE_SHOTS = !process.argv.includes("--no-screenshots");

/* Viewports de referência da missão (não são os únicos breakpoints). */
const VIEWPORTS = [
  { nome: "320-smartphone-compacto", width: 320, height: 720 },
  { nome: "375-smartphone", width: 375, height: 812 },
  { nome: "430-smartphone-amplo", width: 430, height: 932 },
  { nome: "768-tablet", width: 768, height: 1024 },
  { nome: "1024-notebook", width: 1024, height: 768 },
  { nome: "1366-desktop", width: 1366, height: 900 },
  { nome: "1920-desktop-amplo", width: 1920, height: 1080 },
];

const THEME_TOKENS = {
  dark: {
    bg: "#0f172a",
    surface: "#1e293b",
    text: "#f8fafc",
    textDim: "#94a3b8",
  },
  light: {
    bg: "#f1f5f9",
    surface: "#ffffff",
    text: "#0f172a",
    textDim: "#475569",
  },
};

/* -------------------------------------------------------------------------- */
/* Utilidades de cor (WCAG 2.x)                                              */
/* -------------------------------------------------------------------------- */
function parseHex(hex) {
  const h = String(hex).trim().replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}
function relativeLuminance(rgb) {
  const channel = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
}
function contrastRatio(fg, bg) {
  const l1 = relativeLuminance(parseHex(fg));
  const l2 = relativeLuminance(parseHex(bg));
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

/* -------------------------------------------------------------------------- */
/* Relatório                                                                  */
/* -------------------------------------------------------------------------- */
const results = [];
function record(area, name, ok, detail) {
  results.push({ area, name, ok: Boolean(ok), detail: detail || "" });
  const mark = ok ? "PASS" : "FAIL";
  console.log(`  [${mark}] ${area} · ${name}${detail ? " — " + detail : ""}`);
}

/* -------------------------------------------------------------------------- */
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  const pageErrors = [];
  const consoleErrors = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") consoleErrors.push(m.text());
  });

  if (TAKE_SHOTS) fs.mkdirSync(EVIDENCE_DIR, { recursive: true });

  await page.goto(pathToFileURL(APP).href, { waitUntil: "load", timeout: 30000 });
  await page.waitForFunction(
    () => window.apostilaDados && window.apostilaDados.curriculum &&
      document.querySelectorAll("#sidebar-tree-host .tree-modulo").length === 8,
    null,
    { timeout: 15000 }
  );
  await page.waitForTimeout(600);

  /* ---------------------------------------------------------------------- */
  console.log("\n1) INTEGRIDADE DA FOLHA DE ESTILOS (parse + tokens)");
  {
    /* file:// bloqueia cssRules em alguns navegadores; usa-se o servidor local
       apenas para introspecção, sem alterar o app. */
    let sheetInfo = null;
    try {
      const { createServer } = require("node:http");
      const server = createServer((req, res) => {
        const file = path.join(ROOT, "apostila-ia", decodeURIComponent(req.url.split("?")[0]));
        if (!file.startsWith(path.join(ROOT, "apostila-ia")) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
          res.writeHead(404); res.end("not found"); return;
        }
        res.writeHead(200, { "Content-Type": file.endsWith(".css") ? "text/css" : "text/html" });
        res.end(fs.readFileSync(file));
      });
      await new Promise((r) => server.listen(0, "127.0.0.1", r));
      const port = server.address().port;
      await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: "load", timeout: 30000 });
      await page.waitForTimeout(800);
      sheetInfo = await page.evaluate(() => {
        const sheet = [...document.styleSheets].find((s) => (s.href || "").includes("styles.css"));
        if (!sheet) return { error: "folha styles.css não encontrada" };
        const top = [...sheet.cssRules];
        const count = (needle) => top.filter((r) => (r.cssText || "").includes(needle)).length;
        return {
          total: top.length,
          appSidebarTopLevel: top.filter((r) => r.selectorText && /\.app-sidebar/.test(r.selectorText)).length,
          card: count(".card"),
          button: count("button"),
          qzAlt: count(".qz-alt"),
          treeNode: count(".tree-node"),
          modal: count(".modal"),
          tabelaScroll: count(".tabela-scroll"),
        };
      });
      await new Promise((r) => server.close(r));
    } catch (e) {
      sheetInfo = { error: String(e && e.message) };
    }

    if (sheetInfo && sheetInfo.error) {
      record("Estrutura CSS", "folha styles.css acessível", false, sheetInfo.error);
    } else {
      record("Estrutura CSS", "folha styles.css acessível", true, `${sheetInfo.total} regras de topo`);
      record("Estrutura CSS", "regra base .app-sidebar não é engolida pelo parser",
        sheetInfo.appSidebarTopLevel > 0, `${sheetInfo.appSidebarTopLevel} regra(s) de topo`);
      record("Estrutura CSS", ".card preservada", sheetInfo.card >= 13, `${sheetInfo.card} regra(s)`);
      record("Estrutura CSS", "button preservada", sheetInfo.button >= 9, `${sheetInfo.button} regra(s)`);
      record("Estrutura CSS", ".qz-alt preservada", sheetInfo.qzAlt >= 4, `${sheetInfo.qzAlt} regra(s)`);
      record("Estrutura CSS", ".tree-node preservada", sheetInfo.treeNode >= 6, `${sheetInfo.treeNode} regra(s)`);
      record("Estrutura CSS", ".modal preservada", sheetInfo.modal >= 7, `${sheetInfo.modal} regra(s)`);
      record("Estrutura CSS", "wrapper .tabela-scroll presente", sheetInfo.tabelaScroll > 0,
        `${sheetInfo.tabelaScroll} regra(s)`);
    }
  }

  /* ---------------------------------------------------------------------- */
  console.log("\n2) SIDEBAR, CABEÇALHO E SUPERFÍCIES (valores computados)");
  {
    const surfaces = await page.evaluate(() => {
      const g = (sel, props) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const c = getComputedStyle(el);
        const out = {};
        props.forEach((p) => { out[p] = c[p]; });
        return out;
      };
      return {
        sidebar: g(".app-sidebar", ["backgroundColor", "borderRightWidth", "overflowY"]),
        header: g("#header", ["position", "backgroundColor", "backdropFilter", "minHeight"]),
        main: g("#main", ["paddingLeft", "maxWidth"]),
        body: g("body", ["backgroundColor", "color", "fontFamily"]),
      };
    });

    record("Layout", "sidebar tem superfície (fundo opaco)",
      surfaces.sidebar && surfaces.sidebar.backgroundColor !== "rgba(0, 0, 0, 0)",
      surfaces.sidebar ? surfaces.sidebar.backgroundColor : "elemento ausente");
    record("Layout", "sidebar tem borda direita",
      surfaces.sidebar && parseFloat(surfaces.sidebar.borderRightWidth) >= 1,
      surfaces.sidebar ? surfaces.sidebar.borderRightWidth : "—");
    record("Layout", "sidebar tem rolagem própria",
      surfaces.sidebar && /auto|scroll/.test(surfaces.sidebar.overflowY),
      surfaces.sidebar ? surfaces.sidebar.overflowY : "—");
    record("Layout", "cabeçalho é sticky",
      surfaces.header && surfaces.header.position === "sticky",
      surfaces.header ? surfaces.header.position : "—");
    record("Layout", "cabeçalho aplica desfoque de fundo",
      surfaces.header && /blur/.test(surfaces.header.backdropFilter || ""),
      surfaces.header ? surfaces.header.backdropFilter : "—");
    record("Layout", "largura máxima do conteúdo limitada",
      surfaces.main && surfaces.main.maxWidth !== "none",
      surfaces.main ? surfaces.main.maxWidth : "—");
    record("Layout", "fonte do sistema (sem dependência externa)",
      surfaces.body && /system-ui|Segoe UI/.test(surfaces.body.fontFamily),
      surfaces.body ? surfaces.body.fontFamily : "—");
  }

  /* ---------------------------------------------------------------------- */
  console.log("\n3) RESPONSIVIDADE (7 larguras de referência)");
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(300);
    const r = await page.evaluate(() => {
      const de = document.documentElement;
      const offenders = [];
      document.querySelectorAll("body *").forEach((el) => {
        const b = el.getBoundingClientRect();
        if (b.width <= 0 || b.right <= de.clientWidth + 2) return;
        const st = getComputedStyle(el);
        if (st.position === "fixed" || st.visibility === "hidden" || st.display === "none") return;
        if (el.closest("[hidden]")) return;
        offenders.push((el.id ? "#" + el.id : el.tagName.toLowerCase()) +
          (typeof el.className === "string" && el.className.trim()
            ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".") : ""));
      });
      return {
        scrollWidth: de.scrollWidth,
        clientWidth: de.clientWidth,
        offenders: offenders.slice(0, 6),
      };
    });
    const noOverflow = r.scrollWidth <= r.clientWidth + 1;
    record("Responsividade", `${vp.nome} (${vp.width}px) sem rolagem horizontal global`,
      noOverflow, noOverflow ? `scrollWidth=${r.scrollWidth}` :
        `scrollWidth=${r.scrollWidth} > ${r.clientWidth}; excedentes: ${r.offenders.join(", ") || "—"}`);

    if (TAKE_SHOTS && (vp.width === 320 || vp.width === 768 || vp.width === 1366)) {
      await page.screenshot({
        path: path.join(EVIDENCE_DIR, `visual-${vp.nome}.png`),
        fullPage: false,
      });
    }
  }
  await page.setViewportSize({ width: 1366, height: 900 });
  await page.waitForTimeout(300);

  /* ---------------------------------------------------------------------- */
  console.log("\n4) ALVOS DE TOQUE (WCAG 2.2 — mínimo 44px)");
  {
    const targets = await page.evaluate(() => {
      const pick = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return { sel, ausente: true };
        const r = el.getBoundingClientRect();
        return { sel, w: Math.round(r.width), h: Math.round(r.height) };
      };
      return [
        pick(".tree-node"),
        pick(".tree-toggle"),
        pick("#tts-play"),
        pick("#tts-pause"),
        pick("#theme-toggle"),
        pick("#sidebar-toggle"),
        pick(".focus-toggle-btn"),
      ];
    });
    for (const t of targets) {
      if (t.absente) { record("Toque", t.sel, false, "elemento ausente"); continue; }
      /* Controles condicionais (ex.: #sidebar-toggle só existe no layout
         compacto) não são medidos quando estão ocultos. */
      if (t.w === 0 && t.h === 0) {
        record("Toque", `${t.sel} >= 44px`, true, "oculto neste breakpoint (não aplicável)");
        continue;
      }
      const ok = t.h >= 44 || t.w >= 44;
      record("Toque", `${t.sel} >= 44px`, ok, `${t.w}x${t.h}`);
    }
  }

  /* ---------------------------------------------------------------------- */
  console.log("\n5) FOCO VISÍVEL (navegação por teclado)");
  {
    await page.keyboard.press("Tab");
    const first = await page.evaluate(() => {
      const a = document.activeElement;
      if (!a || a === document.body) return null;
      const c = getComputedStyle(a);
      return {
        tag: a.tagName, id: a.id, cls: String(a.className || ""),
        outlineWidth: c.outlineWidth, outlineStyle: c.outlineStyle,
        boxShadow: c.boxShadow,
      };
    });
    const visible = first && (
      (first.outlineStyle !== "none" && parseFloat(first.outlineWidth) > 0) ||
      (first.boxShadow && first.boxShadow !== "none")
    );
    record("Foco", "primeiro elemento focável exibe indicador", Boolean(visible),
      first ? `${first.tag}${first.id ? "#" + first.id : ""} outline=${first.outlineWidth}/${first.outlineStyle} shadow=${first.boxShadow}` : "nenhum elemento focável");

    for (let i = 0; i < 25; i++) await page.keyboard.press("Tab");
    /* Ao entrar no documento interno de um iframe cross-origin, o Chromium
       não dispara focus/focusin no documento pai: a aplicação detecta a
       troca pelo activeElement na tarefa seguinte. Aguarda esse settle
       antes de medir o indicador. */
    await page.waitForTimeout(150);
    const deeper = await page.evaluate(() => {
      const a = document.activeElement;
      if (!a || a === document.body) return null;
      const c = getComputedStyle(a);
      const wrap = a.closest ? a.closest(".video-wrapper, .video-embed-wrap") : null;
      return {
        tag: a.tagName, id: a.id, cls: String(a.className || ""),
        outlineWidth: c.outlineWidth, outlineStyle: c.outlineStyle,
        boxShadow: c.boxShadow,
        wrapClass: wrap ? wrap.className : null,
        wrapOutline: wrap ? getComputedStyle(wrap).outlineWidth + "/" + getComputedStyle(wrap).outlineStyle : null,
        parent: a.parentElement ? a.parentElement.className : null,
      };
    });
    const visible2 = deeper && (
      (deeper.outlineStyle !== "none" && parseFloat(deeper.outlineWidth) > 0) ||
      (deeper.boxShadow && deeper.boxShadow !== "none")
    );
    record("Foco", "indicador persiste ao longo da ordem de tabulação", Boolean(visible2),
      deeper ? `${deeper.tag}${deeper.id ? "#" + deeper.id : ""} outline=${deeper.outlineWidth}/${deeper.outlineStyle} wrap=${deeper.wrapClass} wrapOutline=${deeper.wrapOutline} parent=${deeper.parent}` : "nenhum elemento");
  }

  /* ---------------------------------------------------------------------- */
  console.log("\n6) CONTRASTE (WCAG 2.2 AA) NOS DOIS TEMAS");
  {
    const pairs = [];
    for (const theme of Object.keys(THEME_TOKENS)) {
      await page.evaluate((t) => document.documentElement.setAttribute("data-theme", t), theme);
      await page.waitForTimeout(250);
      const sampled = await page.evaluate(() => {
        const g = (sel) => {
          const el = document.querySelector(sel);
          if (!el) return null;
          const c = getComputedStyle(el);
          return { color: c.color, background: c.backgroundColor };
        };
        return {
          body: g("body"),
          card: g(".card:not(.card-gradient)"),
          h2: g("h2"),
          dim: g(".text-dim, .section-lead"),
          link: g("a"),
        };
      });
      const t = THEME_TOKENS[theme];
      const bgOf = (el) => {
        if (!el) return null;
        const m = /rgba?\(([^)]+)\)/.exec(el.background || "");
        if (!m) return null;
        const parts = m[1].split(",").map((x) => parseFloat(x));
        if (parts.length >= 4 && parts[3] === 0) return null; // transparente
        return "#" + [parts[0], parts[1], parts[2]]
          .map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
      };
      const fgOf = (el) => {
        if (!el) return null;
        const m = /rgba?\(([^)]+)\)/.exec(el.color || "");
        if (!m) return null;
        const parts = m[1].split(",").map((x) => parseFloat(x));
        return "#" + [parts[0], parts[1], parts[2]]
          .map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
      };
      const add = (label, fgEl, bgFallback) => {
        const fg = fgOf(fgEl);
        const bg = bgOf(fgEl) || bgFallback;
        if (!fg || !bg) return;
        pairs.push({ theme, label, fg, bg, ratio: contrastRatio(fg, bg) });
      };
      add("corpo do texto", sampled.body, t.bg);
      add("texto de apoio", sampled.dim, t.bg);
      add("link", sampled.link, t.bg);
      add("título h2", sampled.h2, t.bg);
      add("texto em card", sampled.card, t.surface);
    }
    await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));

    for (const p of pairs) {
      const min = p.label === "título h2" ? 3 : 4.5;
      record("Contraste", `${p.theme} · ${p.label}`, p.ratio >= min,
        `${p.fg} sobre ${p.bg} = ${p.ratio.toFixed(2)}:1 (mín. ${min}:1)`);
    }
  }

  /* ---------------------------------------------------------------------- */
  console.log("\n7) COMPONENTES EDUCACIONAIS (tabs, quiz, tabelas, simuladores)");
  {
    const tabsInfo = await page.evaluate(() => {
      const tabs = [...document.querySelectorAll("#module-tabs .tab")];
      return {
        count: tabs.length,
        allButtons: tabs.every((t) => t.tagName === "BUTTON"),
        allHaveRole: tabs.every((t) => t.getAttribute("role") === "tab"),
        selected: tabs.filter((t) => t.getAttribute("aria-selected") === "true").length,
        tablist: !!document.querySelector('[role="tablist"]'),
        panels: document.querySelectorAll('[role="tabpanel"]').length,
      };
    });
    record("Componentes", "abas do módulo são <button role=tab>", tabsInfo.allButtons && tabsInfo.allHaveRole,
      `${tabsInfo.count} aba(s), tablist=${tabsInfo.tablist}`);
    record("Componentes", "exatamente uma aba com aria-selected=true", tabsInfo.selected === 1,
      `${tabsInfo.selected} selecionada(s)`);
    record("Componentes", "painéis com role=tabpanel", tabsInfo.panels > 0, `${tabsInfo.panels} painel(éis)`);

    const tables = await page.evaluate(() => {
      const all = [...document.querySelectorAll("table")];
      const wrapped = all.filter((t) => t.closest(".tabela-scroll"));
      return { total: all.length, wrapped: wrapped.length };
    });
    record("Componentes", "todas as tabelas dentro de wrapper rolável",
      tables.total === tables.wrapped,
      `${tables.wrapped}/${tables.total} tabelas encapsuladas`);

    const mapa = await page.evaluate(() => {
      const t = [...document.querySelectorAll('[data-tab="mapas"]')][0];
      if (t) t.click();
      return true;
    });
    await page.waitForTimeout(700);
    const mapaState = await page.evaluate(() => {
      /* O host do mapa é #mapas-host (renomeado de #mermaid-host quando o
         renderizador SVG local substituiu o runtime Mermaid). */
      const host = document.querySelector('#mapas-host') || document.querySelector('#mermaid-host');
      if (!host) return { ausente: true };
      const text = host.innerText || "";
      return {
        svg: !!host.querySelector("svg"),
        lista: !!host.querySelector("ul"),
        textoCru: /graph TD|-->|\[[^\]]*\]/.test(text),
        amostra: text.slice(0, 120).replace(/\n/g, " | "),
      };
    });
    record("Componentes", "mapa do módulo renderiza diagrama (não sintaxe Mermaid crua)",
      !mapaState.ausente && !mapaState.textoCru && (mapaState.svg || mapaState.lista),
      mapaState.ausente ? "host ausente" : `svg=${mapaState.svg} lista=${mapaState.lista} cru=${mapaState.textoCru} | ${mapaState.amostra}`);
  }

  /* ---------------------------------------------------------------------- */
  console.log("\n8) ERROS DE EXECUÇÃO");
  record("Execução", "nenhum erro de página (pageerror)", pageErrors.length === 0,
    pageErrors.length ? pageErrors.slice(0, 3).join(" | ") : "0 erros");
  record("Execução", "nenhum erro no console", consoleErrors.length === 0,
    consoleErrors.length ? consoleErrors.slice(0, 3).join(" | ") : "0 erros");

  /* ---------------------------------------------------------------------- */
  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log("\n" + "=".repeat(78));
  console.log(`RESUMO: ${results.length - failed.length}/${results.length} verificações visuais aprovadas`);
  if (failed.length) {
    console.log("FALHAS:");
    failed.forEach((f) => console.log(`  - [${f.area}] ${f.name} — ${f.detail}`));
  }
  console.log("=".repeat(78));
  process.exit(failed.length ? 1 : 0);
})().catch((err) => {
  console.error("FALHA NO TESTE VISUAL:", err);
  process.exit(2);
});
