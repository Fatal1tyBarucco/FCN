#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const args = process.argv.slice(2);
const options = {};

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg.startsWith('--')) {
    const key = arg.slice(2);
    const value = args[i + 1];
    if (['modulo', 'unidade', 'parte', 'saida'].includes(key)) {
      options[key] = value;
      i++;
    } else {
      console.error(`Unknown option ${arg}`);
      process.exit(1);
    }
  } else {
    console.error(`Unexpected argument ${arg}`);
    process.exit(1);
  }
}

if (!options.modulo || !options.unidade) {
  console.error('Both --modulo and --unidade must be provided');
  process.exit(1);
}

const modulo = Number(options.modulo);
const unidade = Number(options.unidade);
const parte = options.parte ? Number(options.parte) : undefined;
const saida = options.saida;

const scriptDir = fileURLToPath(import.meta.url);
const baseDir = path.join(scriptDir, '..', 'apostila-ia', 'assets', 'data');
const curriculumFile = modulo === 1 ? 'curriculum.js' : `curriculum_m${modulo}.js`;
const curriculumPath = path.join(baseDir, curriculumFile);

const code = fs.readFileSync(curriculumPath, 'utf8');
const ctx = {};
vm.runInNewContext(code, ctx, { filename: curriculumPath });

const curriculumName = modulo === 1 ? 'curriculum' : `curriculumM${modulo}`;
const curriculum = ctx[curriculumName];

const modKey = `modulo-${modulo}`;
const modObj = curriculum[modKey];

const unidades = modObj.unidades;
if (unidade < 1 || unidade > unidades.length) {
  console.error(`Invalid unidade ${unidade}`);
  process.exit(1);
}

const unitObj = unidades[unidade - 1];
const unitId = unitObj.id;

const allSubs = [];
for (const topico of unitObj.topicos) {
  const topicoId = topico.id;
  if (Array.isArray(topico.subtopicos)) {
    for (const sub of topico.subtopicos) {
      allSubs.push({
        id: sub.id,
        titulo: sub.titulo,
        modulo,
        unidade,
        topico: topicoId,
        subtopico: sub.id,
        objetivoAprendizagem: sub.objetivoAprendizagem,
        conteudo: sub.conteudo,
        exemplos: sub.exemplos ?? [],
        exercicios: sub.exercicios ?? [],
        criterioDominio: sub.criterioDominio,
        videos: sub.videos ?? []
      });
    }
  }
}

let slice = allSubs;
let partInfo = null;
if (parte !== undefined) {
  if (parte < 1) {
    console.error('--parte must be >= 1');
    process.exit(1);
  }
  const sliceSize = 12;
  const totalSlices = Math.ceil(allSubs.length / sliceSize);
  if (parte > totalSlices) {
    console.error(`Invalid --parte ${parte}; only ${totalSlices} slices`);
    process.exit(1);
  }
  const start = (parte - 1) * sliceSize;
  const end = Math.min(start + sliceSize, allSubs.length);
  slice = allSubs.slice(start, end);
  partInfo = parte;
}

const meta = {
  modulo,
  unidade,
  parte: partInfo,
  totalSubtopicosLote: slice.length,
  idsCompletos: slice.map(s => s.id),
  aviso: 'Os IDs devem ser usados literalmente.'
};

const output = {
  meta,
  data: slice
};

const json = JSON.stringify(output, null, 2) + '\n';

if (saida) {
  fs.writeFileSync(saida, json, 'utf8');
} else {
  process.stdout.write(json);
}
