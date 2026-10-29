#!/usr/bin/env node
"use strict";

/**
 * Browser smoke test for the static app in file:// mode.
 * Run in CI after installing Playwright and Chromium.
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
    const appPath = path.resolve("apostila-ia/index.html");
    await page.goto(pathToFileURL(appPath).href, { waitUntil: "load", timeout: 30000 });
    await page.waitForFunction(() =>
      window.apostilaDados &&
      window.apostilaDados.curriculum &&
      document.querySelectorAll("#sidebar-tree-host .tree-modulo").length === 8,
      null,
      { timeout: 15000 }
    );

    const state = await page.evaluate(() => {
      const cardsByModule = window.apostilaDados.flashcards || {};
      const flashcards = Object.values(cardsByModule).reduce((total, value) =>
        total + (Array.isArray(value) ? value.length : 0), 0);
      const simulatorIds = ["excel-app", "redes-app", "seguranca-app", "prompts-app", "dados-app", "etica-app"];
      return {
        title: document.title,
        modules: Object.keys(window.apostilaDados.curriculum).length,
        curriculumModuleNodes: document.querySelectorAll("#sidebar-tree-host .tree-modulo").length,
        flashcards,
        questions: Array.isArray(window.questoesBanco) ? window.questoesBanco.length : 0,
        chartSvgs: document.querySelectorAll("#charts-app svg").length,
        flashcardUiChars: (document.getElementById("flashcards-app")?.innerText || "").trim().length,
        quizUiChars: (document.getElementById("quiz-app")?.innerText || "").trim().length,
        searchUiChars: (document.getElementById("search-app")?.innerText || "").trim().length,
        simulators: simulatorIds.map(id => ({
          id,
          exists: Boolean(document.getElementById(id)),
          textLength: (document.getElementById(id)?.innerText || "").trim().length
        })),
        storageRoundTrip: (() => {
          try {
            localStorage.setItem("__fcn_browser_smoke__", "ok");
            const value = localStorage.getItem("__fcn_browser_smoke__");
            localStorage.removeItem("__fcn_browser_smoke__");
            return value === "ok";
          } catch (_) {
            return false;
          }
        })(),
        accessibilityInventory: (() => {
          const named = element => {
            const ariaLabel = element.getAttribute("aria-label");
            const labelledBy = element.getAttribute("aria-labelledby");
            const title = element.getAttribute("title");
            const text = (element.innerText || element.value || element.alt || "").trim();
            const labels = element.labels ? Array.from(element.labels).some(label => label.innerText.trim()) : false;
            return Boolean((ariaLabel && ariaLabel.trim()) || (labelledBy && labelledBy.trim().split(/\s+/).some(id => document.getElementById(id))) ||
              (title && title.trim()) || text || labels);
          };
          const controls = Array.from(document.querySelectorAll("button, input, select, textarea, [role='button']"));
          const unnamedControls = controls.filter(element => {
            if (element.type === "hidden" || element.getAttribute("aria-hidden") === "true") return false;
            return !named(element);
          }).map(element => ({
            tag: element.tagName.toLowerCase(),
            type: element.getAttribute("type") || "",
            id: element.id || "",
            text: (element.innerText || element.value || "").trim().slice(0, 70)
          }));
          const imagesWithoutAlt = Array.from(document.images)
            .filter(image => !image.hasAttribute("alt"))
            .map(image => image.src.split("/").pop());
          return {
            controls: controls.length,
            unnamedControlCount: unnamedControls.length,
            unnamedControls: unnamedControls.slice(0, 30),
            imagesWithoutAltCount: imagesWithoutAlt.length,
            imagesWithoutAlt: imagesWithoutAlt.slice(0, 20),
            skipLinkPresent: Boolean(document.querySelector(".a11y-skip-link")),
            mainLandmarkCount: document.querySelectorAll("main, [role='main']").length
          };
        })()
      };
    });

    assert.equal(state.title.length > 0, true, "document title must be present");
    assert.equal(state.modules, 8, "eight curriculum modules must be exposed");
    assert.equal(state.curriculumModuleNodes, 8, "eight curriculum module nodes must render");
    assert.equal(state.flashcards, 474, "all 474 flashcards must be connected to the app");
    assert.equal(state.questions, 409, "all 409 questions must be connected to the quiz engine");
    assert.equal(state.accessibilityInventory.mainLandmarkCount, 1, "exactly one main landmark must be present");
    assert.equal(state.accessibilityInventory.unnamedControlCount, 0, "interactive controls must have accessible names");
    assert.ok(state.chartSvgs >= 5, "the five chart SVGs must render");
    assert.ok(state.flashcardUiChars > 0, "flashcard UI must render");
    assert.ok(state.quizUiChars > 0, "quiz UI must render");
    assert.ok(state.searchUiChars > 0, "global search UI must render");
    assert.ok(state.simulators.every(item => item.exists && item.textLength > 0),
      "all six simulator containers must exist and contain rendered UI");
    assert.equal(state.storageRoundTrip, true, "localStorage must round-trip in file:// mode");
    assert.deepEqual(pageErrors, [], "the page must not throw uncaught JavaScript errors");

    console.log(JSON.stringify({ result: "PASS", mode: "file://", ...state, pageErrors }, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error && error.stack ? error.stack : String(error));
  process.exitCode = 1;
});
