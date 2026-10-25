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
      document.querySelectorAll("#curriculum .tree-modulo").length === 8,
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
        curriculumModuleNodes: document.querySelectorAll("#curriculum .tree-modulo").length,
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
        })()
      };
    });

    assert.equal(state.title.length > 0, true, "document title must be present");
    assert.equal(state.modules, 8, "eight curriculum modules must be exposed");
    assert.equal(state.curriculumModuleNodes, 8, "eight curriculum module nodes must render");
    assert.equal(state.flashcards, 460, "all 460 flashcards must be connected to the app");
    assert.equal(state.questions, 365, "all 365 questions must be connected to the quiz engine");
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
