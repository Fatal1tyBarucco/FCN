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
const axeCore = require("axe-core");

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
    console.log('DEBUG colorScheme dark:', await page.evaluate(() => window.matchMedia('(prefers-color-scheme: dark)').matches));
    console.log('DEBUG study-eyebrow color:', await page.evaluate(() => getComputedStyle(document.querySelector('.study-eyebrow')).color));
    console.log('DEBUG study-eyebrow bg:', await page.evaluate(() => getComputedStyle(document.querySelector('.study-eyebrow')).backgroundColor));
    console.log('DEBUG study-workspace bg:', await page.evaluate(() => getComputedStyle(document.querySelector('.study-workspace')).backgroundColor));
    console.log('DEBUG surface var:', await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--surface').trim()));
    console.log('DEBUG color-scheme:', await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme));
    console.log('DEBUG study-eyebrow contrast:', await page.evaluate(() => { var el=document.querySelector('.study-eyebrow'); var r=el.getBoundingClientRect(); return {w:r.width,h:r.height}; }));
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

    // Automated WCAG 2.1 A/AA scan on the rendered application.
    await page.addScriptTag({ content: axeCore.source });
    const accessibilityAudit = await page.evaluate(async () => {
      const results = await window.axe.run(document, {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]
        }
      });
      return {
        passes: results.passes.length,
        incomplete: results.incomplete.length,
        incompleteChecks: results.incomplete.map(result => ({
          id: result.id,
          impact: result.impact,
          description: result.description,
          nodeCount: result.nodes.length,
          sampleTargets: result.nodes.slice(0, 20).map(node => node.target)
        })),
        violations: results.violations.map(violation => ({
          id: violation.id,
          impact: violation.impact,
          description: violation.description,
          targets: violation.nodes.map(node => node.target)
        }))
      };
    });
    const blockingAccessibilityViolations = accessibilityAudit.violations.filter(
      violation => violation.impact === "critical" || violation.impact === "serious"
    );
    if (blockingAccessibilityViolations.length) {
      console.error(JSON.stringify({ blockingAccessibilityViolations }, null, 2));
    }
    assert.deepEqual(
      blockingAccessibilityViolations,
      [],
      "WCAG 2.1 A/AA scan must not report critical or serious violations"
    );
    assert.deepEqual(
      accessibilityAudit.violations,
      [],
      "axe-core must not report any WCAG or best-practice violations"
    );

    // Accessibility: keyboard skip link must become visible and move focus to curriculum.
    await page.keyboard.press("Tab");
    const skipState = await page.locator(".a11y-skip-link").evaluate(el => ({
      focused: document.activeElement === el,
      left: getComputedStyle(el).left,
      width: el.getBoundingClientRect().width
    }));
    assert.ok(skipState.focused, "first Tab should focus the skip link");
    assert.equal(skipState.left, "0px", "focused skip link should move into the viewport");
    assert.ok(skipState.width > 0, "focused skip link should have visible dimensions");
    await page.keyboard.press("Enter");
    await page.waitForFunction(() => document.activeElement && document.activeElement.id === "main-content", null, { timeout: 10000 });

    // Accessibility: curriculum tree supports ArrowLeft/ArrowRight expansion by keyboard.
    const firstTreeItem = page.locator("#sidebar-tree-host .curriculum-tree .tree-node[role='treeitem']").first();
    await firstTreeItem.focus();
    assert.equal(await firstTreeItem.getAttribute("aria-expanded"), "true", "first curriculum node should start expanded");
    await page.waitForFunction(() => {
      const item = document.querySelector("#sidebar-tree-host .curriculum-tree .tree-node[role='treeitem']");
      return Boolean(item) && document.activeElement === item;
    }, null, { timeout: 15000 });
    await page.keyboard.press("ArrowLeft");
    assert.equal(await firstTreeItem.getAttribute("aria-expanded"), "false", "ArrowLeft should collapse the focused curriculum node");
    await page.keyboard.press("ArrowRight");
    assert.equal(await firstTreeItem.getAttribute("aria-expanded"), "true", "ArrowRight should expand the focused curriculum node");

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

    // Responsive navigation shell: desktop sidebar, mobile drawer and Escape dismissal.
    await page.setViewportSize({ width: 1440, height: 900 });
    assert.equal(await page.locator("#app-sidebar").isVisible(), true, "desktop sidebar must be visible");
    assert.equal(await page.locator("#sidebar-toggle").isVisible(), false, "desktop layout must not show a redundant menu toggle");
    assert.equal(await page.locator("#sidebar-tree-host .tree-modulo").count(), 8, "all eight curriculum modules must render in the sidebar");

    await page.setViewportSize({ width: 390, height: 844 });
    const menuToggle = page.locator("#sidebar-toggle");
    assert.equal(await menuToggle.isVisible(), true, "mobile menu toggle must be visible");
    await menuToggle.click();
    assert.equal(await menuToggle.getAttribute("aria-expanded"), "true", "mobile menu must report expanded state");
    assert.equal(await page.locator("#app-sidebar").getAttribute("aria-hidden"), "false", "open mobile drawer must be exposed to assistive technology");
    assert.equal(await page.locator("#app-sidebar").evaluate(el => el.inert), false, "open mobile drawer must be interactive");
    assert.equal(await page.locator("body").evaluate(el => el.classList.contains("sidebar-open")), true, "opening the mobile menu must activate the drawer");
    await page.keyboard.press("Shift+Tab");
    assert.equal(await page.locator("#sidebar-tree-host .tree-node[role='treeitem'][tabindex='0']").evaluate(el => el === document.activeElement), true, "Shift+Tab from the first link must wrap to the active roving-tabindex tree item");
    await page.keyboard.press("Tab");
    assert.equal(await page.locator("#app-sidebar .quick-link").first().evaluate(el => el === document.activeElement), true, "Tab from the last sidebar item must wrap to the first link");
    await page.keyboard.press("Escape");
    assert.equal(await menuToggle.getAttribute("aria-expanded"), "false", "Escape must close the mobile menu");
    assert.equal(await page.locator("#app-sidebar").getAttribute("aria-hidden"), "true", "closed mobile drawer must be hidden from assistive technology");
    assert.equal(await page.locator("#app-sidebar").evaluate(el => el.inert), true, "closed mobile drawer must not trap keyboard focus");
    assert.equal(await page.locator("body").evaluate(el => el.classList.contains("sidebar-open")), false, "Escape must remove the drawer state");
    await menuToggle.click();
    await page.locator("#app-sidebar a[href='#flashcards']").click();
    assert.equal(await menuToggle.getAttribute("aria-expanded"), "false", "selecting a section must close the mobile menu");
    await menuToggle.click();
    await page.locator("#sidebar-tree-host .tree-link").first().click();
    await page.waitForFunction(() => {
      const heading = document.querySelector("#study-workspace-title");
      return heading && heading.textContent.trim() !== "Estude um tópico";
    }, null, { timeout: 5000 });
    assert.notEqual((await page.locator("#study-workspace-title").innerText()).trim(), "Estude um tópico", "study heading must follow the selected curriculum topic");
    const mobileLayout = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      mainChildren: Array.from(document.querySelector("#main-content").children).map(element => {
        const rect = element.getBoundingClientRect();
        return {
          selector: element.tagName.toLowerCase() + (element.id ? "#" + element.id : "") + (typeof element.className === "string" && element.className ? "." + element.className.trim().split(/\\s+/).join(".") : ""),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          scrollWidth: element.scrollWidth,
          clientWidth: element.clientWidth,
          overflowX: getComputedStyle(element).overflowX
        };
      }),
      overflowCandidates: Array.from(document.querySelectorAll("body *")).map(element => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return {
          selector: element.tagName.toLowerCase() + (element.id ? "#" + element.id : "") + (typeof element.className === "string" && element.className ? "." + element.className.trim().split(/\\s+/).join(".") : ""),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          position: style.position,
          overflowX: style.overflowX,
          ancestors: Array.from((function* () { let parent = element.parentElement; let depth = 0; while (parent && depth < 5) { yield parent; parent = parent.parentElement; depth++; } })()).map(parent => {
            const parentRect = parent.getBoundingClientRect();
            return {
              selector: parent.tagName.toLowerCase() + (parent.id ? "#" + parent.id : "") + (typeof parent.className === "string" && parent.className ? "." + parent.className.trim().split(/\\s+/).join(".") : ""),
              left: Math.round(parentRect.left),
              right: Math.round(parentRect.right),
              width: Math.round(parentRect.width),
              scrollWidth: parent.scrollWidth,
              clientWidth: parent.clientWidth,
              overflowX: getComputedStyle(parent).overflowX
            };
          })
        };
      }).filter(item => item.right > window.innerWidth + 1 && item.position !== "fixed" && item.position !== "absolute")
        .sort((left, right) => right.right - left.right)
        .slice(0, 20)
    }));
    assert.ok(mobileLayout.documentWidth <= mobileLayout.viewportWidth + 1, "mobile layout must not introduce horizontal overflow: " + JSON.stringify(mobileLayout));

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
      accessibility: {
        passes: accessibilityAudit.passes,
        incomplete: accessibilityAudit.incomplete,
        totalViolations: accessibilityAudit.violations.length,
        blockingViolations: blockingAccessibilityViolations.length,
        violations: accessibilityAudit.violations.map(violation => ({
          id: violation.id,
          impact: violation.impact,
          description: violation.description,
          targets: violation.targets
        })),
        incompleteChecks: accessibilityAudit.incompleteChecks
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
