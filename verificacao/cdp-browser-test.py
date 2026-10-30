#!/usr/bin/env python3
"""CDP browser test for FCN — validates visual redesign + functional preservation via Chrome DevTools Protocol."""
import asyncio, json, os, subprocess, sys, time, urllib.request
from pathlib import Path
import websockets

ROOT = Path("/data/data/com.termux/files/home/projetos/fcn")
INDEX = str((ROOT / "apostila-ia/index.html").resolve())
CDP_PORT = 9334
BROWSER = None

async def send(ws, method, params=None):
    msg = {"id": 1, "method": method, "params": params or {}}
    await ws.send(json.dumps(msg))
    resp = await asyncio.wait_for(ws.recv(), timeout=15)
    return json.loads(resp)

async def eval_js(ws, expr):
    r = await send(ws, "Runtime.evaluate", {"expression": expr, "returnByValue": True, "awaitPromise": True})
    v = r.get("result", {}).get("result", {})
    if v.get("subtype") == "error":
        return {"error": v.get("description", "?")}
    return v.get("value", None)

async def main():
    global BROWSER
    BROWSER = subprocess.Popen(
        ["chromium-browser", "--headless=new", "--no-sandbox", "--disable-gpu",
         "--disable-dev-shm-usage", f"--remote-debugging-port={CDP_PORT}",
         "--window-size=1366,900", "about:blank"],
        stdout=subprocess.DEVNULL, stderr=subprocess.PIPE
    )
    time.sleep(3)

    try:
        with urllib.request.urlopen(f"http://localhost:{CDP_PORT}/json/list", timeout=5) as r:
            pages = json.loads(r.read())
    except Exception as e:
        print(f"ERROR getting page list: {e}")
        BROWSER.kill()
        sys.exit(1)

    ws_url = None
    for p in pages:
        if p.get("type") == "page" and "webSocketDebuggerUrl" in p:
            ws_url = p["webSocketDebuggerUrl"]
            break

    if not ws_url:
        print(f"ERROR: no websocket URL. Pages: {pages}")
        BROWSER.kill()
        sys.exit(1)

    print(f"Connecting to tab: {ws_url}")
    async with websockets.connect(ws_url) as ws:
        await send(ws, "Page.enable")
        await send(ws, "Runtime.enable")

        errors = []
        # Listen for errors while navigating
        async def collect():
            while True:
                try:
                    r = await asyncio.wait_for(ws.recv(), timeout=0.8)
                    d = json.loads(r)
                    if d.get("method") == "Runtime.exceptionThrown":
                        exc = d.get("params", {}).get("exceptionDetails", {})
                        errors.append(exc.get("exception", {}).get("details", {}).get("description", "unknown"))
                except asyncio.TimeoutError:
                    break
                except Exception:
                    break

        await send(ws, "Page.navigate", {"url": f"file://{INDEX}"})
        for _ in range(60):
            try:
                r = await asyncio.wait_for(ws.recv(), timeout=5)
                d = json.loads(r)
                if d.get("method") == "Page.loadEventFired":
                    break
            except asyncio.TimeoutError:
                break
        await asyncio.sleep(3)
        await collect()

        checks = {}
        checks["title"] = await eval_js(ws, "document.title || ''")
        checks["modules"] = await eval_js(ws, "Object.keys(window.apostilaDados && window.apostilaDados.curriculum || {}).length")
        checks["treeModulos"] = await eval_js(ws, "document.querySelectorAll('#sidebar-tree-host .tree-modulo').length")
        checks["treeModuloLabels"] = await eval_js(ws, "(function(){var nodes=Array.from(document.querySelectorAll('#sidebar-tree-host .tree-modulo-label'));return nodes.map(function(n){return n.textContent.trim()});})()")
        checks["flashcards"] = await eval_js(ws, "(function(){var total=0;var dados=window.apostilaDados||{};if(dados.flashcards){Object.values(dados.flashcards).forEach(function(v){if(Array.isArray(v))total+=v.length;});}return total;})()")
        checks["questions"] = await eval_js(ws, "Array.isArray(window.questoesBanco)?window.questoesBanco.length:0")
        checks["chartSvgs"] = await eval_js(ws, "document.querySelectorAll('#charts-app svg').length")
        checks["storageRoundTrip"] = await eval_js(ws, "(function(){try{localStorage.setItem('__t__','ok');var v=localStorage.getItem('__t__');localStorage.removeItem('__t__');return v==='ok';}catch(e){return false;}})()")
        checks["skipLinkPresent"] = await eval_js(ws, "Boolean(document.querySelector('.skip-link,.a11y-skip-link'))")
        checks["mainLandmarkCount"] = await eval_js(ws, "document.querySelectorAll('main,[role=main]').length")
        checks["unnamedControls"] = await eval_js(ws, "(function(){function named(el){return Boolean((el.getAttribute('aria-label')||'').trim()||(el.getAttribute('title')||'').trim()||(el.innerText||el.value||el.alt||'').trim()||(el.labels&&Array.from(el.labels).some(function(l){return l.innerText.trim();}))||(el.getAttribute('aria-labelledby')&&(el.getAttribute('aria-labelledby')||'').split(/\\s+/).some(function(id){return document.getElementById(id);})));}var c=Array.from(document.querySelectorAll('button,input,select,textarea,[role=button]'));return c.filter(function(e){return e.type!=='hidden'&&e.getAttribute('aria-hidden')!=='true'&&!named(e);}).length;})()")
        checks["theme"] = await eval_js(ws, "document.documentElement.getAttribute('data-theme')")
        checks["headerBg"] = await eval_js(ws, "getComputedStyle(document.getElementById('header')).backgroundColor")
        checks["headerBackdrop"] = await eval_js(ws, "getComputedStyle(document.getElementById('header')).backdropFilter")
        checks["eyebrowColor"] = await eval_js(ws, "getComputedStyle(document.querySelector('.study-eyebrow')).color")
        checks["docWidth"] = await eval_js(ws, "document.documentElement.scrollWidth")
        checks["viewportWidth"] = await eval_js(ws, "window.innerWidth")
        checks["sidebarDisplay"] = await eval_js(ws, "getComputedStyle(document.getElementById('app-sidebar')).display")

        sim_ids = ["excel-app","redes-app","seguranca-app","prompts-app","dados-app","etica-app"]
        sim_checks = {}
        for sid in sim_ids:
            sim_checks[sid] = {
                "exists": await eval_js(ws, f"Boolean(document.getElementById('{sid}'))"),
                "textLength": await eval_js(ws, f"(document.getElementById('{sid}')?.innerText||'').trim().length")
            }
        checks["simulators"] = sim_checks

        for el_id in ["flashcards-app","quiz-app","search-app","audio-app","progress-app","charts-app"]:
            checks[f"{el_id}_chars"] = await eval_js(ws, f"(document.getElementById('{el_id}')?.innerText||'').trim().length")

        print(json.dumps({"checks": checks, "errors": errors}, indent=2, ensure_ascii=False))

        failures = []
        if not checks["title"]: failures.append("Title empty")
        if checks["modules"] != 8: failures.append(f"Expected 8 modules, got {checks['modules']}")
        if checks["treeModulos"] != 8: failures.append(f"Expected 8 tree-modulo nodes, got {checks['treeModulos']}")
        actual_labels = checks.get("treeModuloLabels", [])
        if len(actual_labels) != 8:
            failures.append(f"Expected 8 module labels, got {len(actual_labels)}: {actual_labels}")
        for i, label in enumerate(actual_labels, 1):
            if not label.lower().startswith(f"modulo-{i}"):
                failures.append(f"Expected module label {i} to start with 'modulo-{i}', got '{label}'")
        if checks["flashcards"] != 474: failures.append(f"Expected 474 flashcards, got {checks['flashcards']}")
        if checks["questions"] != 409: failures.append(f"Expected 409 questions, got {checks['questions']}")
        if checks["chartSvgs"] < 5: failures.append(f"Expected >=5 chart SVGs, got {checks['chartSvgs']}")
        if checks["storageRoundTrip"] != True: failures.append("localStorage round-trip failed")
        if checks["skipLinkPresent"] != True: failures.append("Skip link not present")
        if checks["mainLandmarkCount"] != 1: failures.append(f"Expected 1 main landmark, got {checks['mainLandmarkCount']}")
        if checks["unnamedControls"] != 0: failures.append(f"Expected 0 unnamed controls, got {checks['unnamedControls']}")
        if checks["theme"] not in ["dark", None]: failures.append(f"Expected theme 'dark' or null, got '{checks['theme']}'")
        if checks["headerBackdrop"] in ["", "none", None]: failures.append(f"Header backdrop-filter missing: {checks['headerBackdrop']}")
        if checks["eyebrowColor"] == "rgb(0, 0, 0)": failures.append(f"Study-eyebrow still has hardcoded black: {checks['eyebrowColor']}")
        if checks["docWidth"] > checks["viewportWidth"] + 1: failures.append(f"Horizontal overflow: docWidth={checks['docWidth']}, viewport={checks['viewportWidth']}")
        if checks["sidebarDisplay"] in ["none", None]: failures.append(f"Sidebar not visible on desktop: {checks['sidebarDisplay']}")
        for sid, info in sim_checks.items():
            if not info["exists"] or info["textLength"] == 0:
                failures.append(f"Simulator {sid}: exists={info['exists']}, chars={info['textLength']}")
        for el_id, chars in {k:v for k,v in checks.items() if k.endswith('_chars')}.items():
            if chars == 0:
                failures.append(f"{el_id} has no content ({chars} chars)")
        if errors:
            failures.append(f"Page errors ({len(errors)}): {errors[:5]}")

        if failures:
            print("\n=== FAILURES ===")
            for f in failures: print(f"  - {f}")
            sys.exit(1)
        else:
            print("\n=== ALL CHECKS PASSED ===")
            sys.exit(0)

asyncio.run(main())
