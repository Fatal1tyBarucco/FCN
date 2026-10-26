#!/usr/bin/env node
"use strict";

/**
 * Browser interaction regression tests for the static SPA in file:// mode.
 * Complements test-browser-smoke.cjs: checks one real interaction per
 * simulator and verifies that chart input changes recalculate rendered output.
 */
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 } });
  const pageErrors = [];
  page.on("pageerror", error => pageErrors.push(error.message));

  try {
    await page.goto(pathToFileURL(path.resolve("apostila-ia/index.html")).href, {
      waitUntil: "load",
      timeout: 30000
    });
    await page.waitForFunction(() =>
      window.apostilaDados &&
      document.querySelector("#excel-app [data-act='excel-console-calcular']") &&
      document.querySelector("#redes-app [data-act='net-cidr']") &&
      document.querySelector("#seguranca-app [data-act='classificar']") &&
      document.querySelector("#prompts-app [data-act='prom-avaliar']") &&
      document.querySelector("#dados-app #dados-bins") &&
      document.querySelector("#etica-app [data-act='etica-verificar']") &&
      document.querySelector("#charts-app input[data-celula]"),
      null,
      { timeout: 15000 }
    );

    // Excel: evaluate a formula against the simulator's real formula engine.
    await page.locator("#excel-console-fm").fill("=SOMA(1;2)");
    await page.locator("#excel-app [data-act='excel-console-calcular']").click();
    await page.waitForFunction(() =>
      (document.querySelector("#excel-console-res")?.innerText || "").trim().includes("3"),
      null, { timeout: 5000 });
    const excelResult = (await page.locator("#excel-console-res").innerText()).trim();
    assert.match(excelResult, /3/, "Excel formula must calculate SOMA(1;2) as 3");

    // Networks: calculate an IPv4 network from IP and CIDR mask.
    await page.locator("#redes-app [data-act='net-cidr']").click();
    await page.waitForFunction(() =>
      (document.querySelector("#net-cidr-out")?.innerText || "").includes("192.168.1.0"),
      null, { timeout: 5000 });
    const cidrResult = (await page.locator("#net-cidr-out").innerText()).trim();
    assert.match(cidrResult, /192\.168\.1\.0/, "CIDR calculator must derive the /24 network");

    // Security: classify one sample and require feedback.
    await page.locator("#seguranca-app [data-act='classificar'][data-msg='msg1'][data-resp='phishing']").click();
    await page.waitForFunction(() =>
      (document.querySelector("#sec-fb-msg1")?.innerText || "").trim().length > 0,
      null, { timeout: 5000 });
    const securityFeedback = (await page.locator("#sec-fb-msg1").innerText()).trim();
    assert.ok(securityFeedback.length > 0, "security classification must return feedback");

    // Prompt engineering: evaluate a populated prompt and verify feedback changes.
    await page.locator("#prom-ctx").fill("Sou estudante de concurso público de TI.");
    await page.locator("#prom-obj").fill("Explique sub-redes IPv4 com exemplo calculado.");
    await page.locator("#prom-res").fill("Até 150 palavras; não invente dados; indique limites.");
    await page.locator("#prom-fmt").fill("Passos numerados, tabela e conclusão.");
    await page.locator("#prompts-app [data-act='prom-avaliar']").click();
    await page.waitForFunction(() => {
      const text = (document.querySelector("#prom-resultado")?.innerText || "").trim();
      return text.length > 0 && !text.includes("Preencha os campos e clique em Avaliar.");
    }, null, { timeout: 5000 });
    const promptFeedback = (await page.locator("#prom-resultado").innerText()).trim();
    assert.ok(promptFeedback.length > 0, "prompt evaluation must return feedback");

    // Data simulator: open its chart pane, then change histogram class count.
    await page.locator("#dados-app [data-act='nav'][data-target='charts']").click();
    const binsInput = page.locator("#dados-bins");
    await binsInput.waitFor({ state: "visible", timeout: 5000 });
    const histogramBefore = await page.locator("#dados-histograma svg").first().evaluate(el => el.outerHTML);
    await binsInput.fill("7");
    await binsInput.dispatchEvent("change");
    await page.waitForFunction(() => {
      const input = document.querySelector("#dados-bins");
      const svg = document.querySelector("#dados-histograma svg");
      return input && input.value === "7" && svg && svg.querySelectorAll("rect").length > 0;
    }, null, { timeout: 5000 });
    const histogramAfter = await page.locator("#dados-histograma svg").first().evaluate(el => el.outerHTML);
    assert.notEqual(histogramAfter, histogramBefore, "changing histogram bins must recalculate SVG");

    // Ethics: selecting and checking a decision must produce scenario feedback.
    const ethicsChoice = page.locator("#etica-app .sim-etica-bloco input[type='radio']").first();
    await ethicsChoice.check();
    await page.locator("#etica-app [data-act='etica-verificar']").first().click();
    await page.waitForFunction(() =>
      (document.querySelector("#etica-app .sim-etica-fb")?.innerText || "").trim().length > 0,
      null, { timeout: 5000 });
    const ethicsFeedback = (await page.locator("#etica-app .sim-etica-fb").first().innerText()).trim();
    assert.ok(ethicsFeedback.length > 0, "ethics decision must return feedback");

    // Charts: edit a numeric source cell and verify the rendered histogram changes.
    const chartCell = page.locator("#charts-app input[data-celula='histograma:0:0']");
    await chartCell.waitFor({ state: "visible", timeout: 5000 });
    const chartBefore = await page.locator("#saida-histograma svg").evaluate(el => el.outerHTML);
    await chartCell.fill("90");
    await page.waitForFunction(() => {
      const cell = document.querySelector("#charts-app input[data-celula='histograma:0:0']");
      return cell && cell.value === "90";
    }, null, { timeout: 5000 });
    const chartAfter = await page.locator("#saida-histograma svg").evaluate(el => el.outerHTML);
    assert.notEqual(chartAfter, chartBefore, "editing a numeric chart input must recalculate SVG");

    assert.deepEqual(pageErrors, [], "simulator interactions must not throw uncaught JavaScript errors");
    console.log(JSON.stringify({
      result: "PASS",
      mode: "file://",
      checks: {
        excel: excelResult,
        networkCidr: cidrResult,
        securityFeedback: true,
        promptEvaluation: true,
        dataHistogramRecalculation: true,
        ethicsFeedback: true,
        chartsHistogramRecalculation: true
      },
      pageErrors
    }, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error && error.stack ? error.stack : String(error));
  process.exitCode = 1;
});
