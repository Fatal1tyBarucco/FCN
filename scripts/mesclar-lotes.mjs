#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(scriptDir), '..');

const args = process.argv.slice(2);
const opts = {};
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--dir') {
    opts.dir = args[++i];
  } else if (arg === '--alvo') {
    opts.alvo = args[++i];
  } else if (arg === '--dry-run') {
    opts.dry = true;
  } else if (arg === '--verificar') {
    opts.verify = true;
  } else {
    console.error(`Unknown option ${arg}`);
    process.exit(1);
  }
}
const loteDir = opts.dir ? path.resolve(repoRoot, opts.dir) : path.join(repoRoot, 'scripts', 'lotes');
const alvoDir = opts.alvo ? path.resolve(repoRoot, opts.alvo) : path.join(repoRoot, 'apostila-ia', 'assets', 'data');

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    const srcVal = source[key];
    const tgtVal = target[key];
    if (srcVal && typeof srcVal === 'object' && !Array.isArray(srcVal) && tgtVal && typeof tgtVal === 'object' && !Array.isArray(tgtVal)) {
      target[key] = deepMerge({ ...tgtVal }, srcVal);
    } else {
      target[key] = srcVal;
    }
  }
  return target;
}

function loadConst(file) {
  const code = fs.readFileSync(file, 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*{/);
  if (!m) throw new Error(`Cannot find const declaration in ${file}`);
  const name = m[1];
  const ctx = vm.createContext({});
  const obj = vm.runInContext(`(function(){ ${code}; return ${name}; })()`, ctx, { filename: file });
  if (!obj) throw new Error(`Variable ${name} not found after eval of ${file}`);
  return { name, obj, file };
}

function parsePartial(name) {
  const m = name.match(/^enriParcialM(\d)U(\d)(?:P(\d))?$/);
  if (!m) throw new Error(`Unexpected variable name ${name}`);
  return { modulo: Number(m[1]), unidade: Number(m[2]), parte: m[3] ? Number(m[3]) : null };
}

function getCurrOrder(modulo) {
  const file = modulo === 1 ? 'curriculum.js' : `curriculum_m${modulo}.js`;
  const pathC = path.join(repoRoot, 'apostila-ia', 'assets', 'data', file);
  const code = fs.readFileSync(pathC, 'utf8');
  const name = modulo === 1 ? 'curriculum' : `curriculumM${modulo}`;
  const ctx = vm.createContext({});
  const cur = vm.runInContext(`(function(){ ${code}; return ${name}; })()`, ctx, { filename: pathC });
  const key = `modulo-${modulo}`;
  const modObj = cur[key];
  const order = [];
  for (const unit of modObj.unidades) {
    for (const topico of unit.topicos) {
      for (const sub of topico.subtopicos) {
        order.push(sub.id);
      }
    }
  }
  return order;
}

function validateRec(rec) {
  const errors = [];
  const oe = rec.orientacaoEstrategica;
  if (!oe || !oe.porqueImporta || oe.porqueImporta.length < 120) {
    errors.push('orientacaoEstrategica.porqueImporta < 120 chars');
  }
  // `objetivosObservaveis`, `competencias`, `preRequisitos` e `relacoes` vivem
  // DENTRO de `orientacaoEstrategica`, conforme o contrato §2. Checá-los na
  // raiz do registro reprovava os 307 registros válidos.
  if (!oe || !Array.isArray(oe.objetivosObservaveis) || oe.objetivosObservaveis.length < 2) {
    errors.push('orientacaoEstrategica.objetivosObservaveis < 2');
  }
  if (!oe || !Array.isArray(oe.competencias) || oe.competencias.length < 2) {
    errors.push('orientacaoEstrategica.competencias < 2');
  }
  if (!oe || !Array.isArray(oe.preRequisitos) || oe.preRequisitos.length < 1) {
    errors.push('orientacaoEstrategica.preRequisitos missing');
  }
  if (!oe || !Array.isArray(oe.relacoes) || oe.relacoes.length < 1) {
    errors.push('orientacaoEstrategica.relacoes missing');
  }
  if (!rec.niveis || typeof rec.niveis !== 'object') {
    errors.push('niveis missing');
  } else {
    const levels = ['iniciante','intermediario','avancado','especialista'];
    for (const l of levels) {
      if (!rec.niveis[l] || typeof rec.niveis[l] !== 'string' || rec.niveis[l].length < 180) {
        errors.push(`niveis.${l} < 180 chars`);
      }
    }
  }
  if (!Array.isArray(rec.comparacoes) || rec.comparacoes.length < 1) {
    errors.push('comparacoes missing');
  } else {
    for (const c of rec.comparacoes) {
      if (!c.a || !c.b || !c.diferencaGabarito) {
        errors.push('comparacoes incomplete');
        break;
      }
    }
  }
  if (!Array.isArray(rec.pegadinhas) || rec.pegadinhas.length < 2) {
    errors.push('pegadinhas < 2');
  } else {
    for (const p of rec.pegadinhas) {
      if (!p.porqueErrada) {
        errors.push('pegadinhas.porqueErrada missing');
        break;
      }
    }
  }
  if (!rec.resumoEstruturado) {
    errors.push('resumoEstruturado missing');
  } else {
    const r = rec.resumoEstruturado;
    if (!Array.isArray(r.conceitos) || r.conceitos.length < 3) errors.push('resumoEstruturado.conceitos < 3');
    if (!Array.isArray(r.regras) || r.regras.length < 2) errors.push('resumoEstruturado.regras < 2');
    if (!Array.isArray(r.comparacoes) || r.comparacoes.length < 1) errors.push('resumoEstruturado.comparacoes < 1');
    if (!Array.isArray(r.fluxos) || r.fluxos.length < 1) errors.push('resumoEstruturado.fluxos < 1');
    if (!Array.isArray(r.excecoes) || r.excecoes.length < 1) errors.push('resumoEstruturado.excecoes < 1');
    if (!Array.isArray(r.palavrasChave) || r.palavrasChave.length < 4) errors.push('resumoEstruturado.palavrasChave < 4');
    if (!Array.isArray(r.checklist) || r.checklist.length < 4) errors.push('resumoEstruturado.checklist < 4');
  }
  if (!Array.isArray(rec.exemplosDetalhados) || rec.exemplosDetalhados.length !== 3) {
    errors.push('exemplosDetalhados != 3');
  } else {
    const types = new Set(['introducao','aplicacao','erro']);
    for (const e of rec.exemplosDetalhados) {
      if (!e.tipo || !types.has(e.tipo)) {
        errors.push('exemplosDetalhados.tipo invalid');
        break;
      }
    }
  }
  return errors;
}

(async () => {
  const partialFiles = fs.readdirSync(loteDir).filter(f => f.endsWith('.js'));
  const byMod = {};
  const orphan = {};
  const totalRec = {};
  for (const f of partialFiles) {
    const fp = path.join(loteDir, f);
    const { name, obj } = loadConst(fp);
    const { modulo, unidade, parte } = parsePartial(name);
    if (!byMod[modulo]) byMod[modulo] = [];
    byMod[modulo].push({ data: obj, file: f, modulo, unidade, parte });
    totalRec[modulo] = (totalRec[modulo] || 0) + Object.keys(obj).length;
  }

  const overlays = {};
  for (let mod = 1; mod <= 8; mod++) {
    const overlayPath = path.join(alvoDir, `enriquecimento_m${mod}.js`);
    const { name, obj } = loadConst(overlayPath);
    overlays[mod] = { varName: name, obj, path: overlayPath };
  }

  // Remove `orientacaoEstrategica.relevanciaConcurso.ressalva` de todos os
  // registros. A nota global é fornecida pelo renderizador (unidade-template.js);
  // o campo é OPCIONAL por registro e o texto antigo era boilerplate idêntico
  // em centenas de registros, o que reprova o auditor de duplicação.
  // Sem esta limpeza, `deepMerge` preservaria a chave antiga do overlay
  // (deepMerge só sobrescreve chaves presentes na origem).
  function removerRessalva(rec) {
    const rc = rec && rec.orientacaoEstrategica && rec.orientacaoEstrategica.relevanciaConcurso;
    if (rc && typeof rc === 'object' && 'ressalva' in rc) delete rc.ressalva;
  }

  // Merge
  for (const mod in byMod) {
    const parts = byMod[mod];
    const overlay = overlays[mod].obj;
    for (const p of parts) {
      for (const id of Object.keys(p.data)) {
        if (!overlay[id]) {
          orphan[mod] = orphan[mod] || new Set();
          orphan[mod].add(id);
        }
        overlay[id] = deepMerge(overlay[id] || {}, p.data[id]);
        removerRessalva(overlay[id]);
      }
    }
  }

  if (opts.dry) {
    console.log('--- DRY RUN PLAN ---');
    for (let mod = 1; mod <= 8; mod++) {
      const partNum = byMod[mod] ? byMod[mod].length : 0;
      const recNum = totalRec[mod] || 0;
      const orphanCnt = orphan[mod] ? orphan[mod].size : 0;
      const recordIds = getCurrOrder(mod);
      const missing = recordIds.filter(id => !overlays[mod].obj[id]);
      console.log(`Módulo ${mod}: ${partNum} lotes, ${recNum} registros, ${orphanCnt} IDs órfãos, ${missing.length} IDs faltantes.`);
    }
    console.log('--- END DRY RUN ---');
    return;
  }

  // Write updated overlays
  for (let mod = 1; mod <= 8; mod++) {
    const overlay = overlays[mod].obj;
    const order = getCurrOrder(mod);
    const orderedObj = {};
    for (const id of order) {
      if (overlay[id]) {
        removerRessalva(overlay[id]);
        orderedObj[id] = overlay[id];
      }
    }
    const outContent = `const ${overlays[mod].varName} = ${JSON.stringify(orderedObj, null, 2)};\n`;
    fs.writeFileSync(path.join(alvoDir, `enriquecimento_m${mod}.js`), outContent, 'utf8');
  }

  if (opts.verify) {
    console.log('--- VALIDATION START ---');
    let ok = true;
    for (let mod = 1; mod <= 8; mod++) {
      const overlay = overlays[mod].obj;
      for (const [id, rec] of Object.entries(overlay)) {
        const err = validateRec(rec);
        if (err.length) {
          ok = false;
          console.error(`Erro no módulo ${mod} ID ${id}:`);
          err.forEach(e => console.error(`  - ${e}`));
        }
      }
    }
    if (!ok) {
      console.error('VALIDATION FAILED.');
      process.exit(1);
    }
    console.log('VALIDATION SUCCESSFUL.');
  }
})();
