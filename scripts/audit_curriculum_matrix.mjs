#!/usr/bin/env node
/**
 * Gera a matriz estrutural de cobertura curricular sem executar os arquivos de dados.
 * Uso, a partir da raiz do repositório: node scripts/audit_curriculum_matrix.mjs
 * Limitação: detecta presença/contagem estrutural; não aprova qualidade pedagógica.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const modules = [
  ["M1", "apostila-ia/assets/data/curriculum.js"],
  ["M2", "apostila-ia/assets/data/curriculum_m2.js"],
  ["M3", "apostila-ia/assets/data/curriculum_m3.js"],
  ["M4", "apostila-ia/assets/data/curriculum_m4.js"],
  ["M5", "apostila-ia/assets/data/curriculum_m5.js"],
  ["M6", "apostila-ia/assets/data/curriculum_m6.js"],
  ["M7", "apostila-ia/assets/data/curriculum_m7.js"],
  ["M8", "apostila-ia/assets/data/curriculum_m8.js"]
];

const header = [
  "id_subtopico", "modulo", "arquivo_origem", "titulo_subtopico",
  "objetivo_presente", "conteudo_presente",
  "quantidade_exemplos_detectados", "quantidade_exercicios_detectados",
  "fontes_presentes", "status_auditoria"
];

function csvCell(value) {
  return '"' + String(value).replaceAll('"', '""') + '"';
}

const rows = [];
const errors = [];
for (const [moduleName, relativePath] of modules) {
  const source = readFileSync(resolve(root, relativePath), "utf8");
  const idPattern = /"id"\s*:\s*"((?:m[2-8]-u\d+-t\d+-s\d+)|(?:modulo-1-unidade-\d+-topico-\d+-sub-\d+))"\s*,\s*"titulo"\s*:\s*"([^"]*)"/g;
  const matches = Array.from(source.matchAll(idPattern));
  if (matches.length === 0) errors.push(moduleName + ": nenhum subtópico reconhecido em " + relativePath);

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const end = index + 1 < matches.length ? matches[index + 1].index : source.length;
    const segment = source.slice(match.index, end);
    const examplesPart = (segment.split(/"exemplos"\s*:\s*\[/)[1] || "").split(/"exercicios"\s*:\s*\[/)[0];
    const exercisesPart = (segment.split(/"exercicios"\s*:\s*\[/)[1] || "").split(/\n\s{8,}\]\s*,?/)[0];
    const examplesCount = (examplesPart.match(/"tipo"\s*:/g) || []).length;
    const exercisesCount = (exercisesPart.match(/"tipo"\s*:/g) || []).length;
    const hasObjective = /"objetivoAprendizagem"\s*:|"objetivo"\s*:/.test(segment);
    const hasContent = /"conteudo"\s*:|"explicacao"\s*:/.test(segment);
    const hasSources = /"fontes?"\s*:|"referencias?"\s*:/.test(segment);

    rows.push([
      match[1], moduleName, relativePath, match[2],
      hasObjective ? "sim" : "não",
      hasContent ? "sim" : "não",
      examplesCount, exercisesCount,
      hasSources ? "identificado" : "não identificado",
      "não revisado qualitativamente"
    ]);
  }
}

const uniqueIds = new Set(rows.map(row => row[0]));
if (uniqueIds.size !== rows.length) errors.push("Há IDs de subtópico duplicados: " + (rows.length - uniqueIds.size));
if (rows.length !== 295) errors.push("Esperados 295 subtópicos; encontrados " + rows.length);

const outputPath = resolve(root, "docs/MATRIZ_COBERTURA.csv");
writeFileSync(outputPath, [header, ...rows].map(row => row.map(csvCell).join(",")).join("\n") + "\n", "utf8");

const examplesTotal = rows.reduce((sum, row) => sum + Number(row[6]), 0);
const exercisesTotal = rows.reduce((sum, row) => sum + Number(row[7]), 0);
console.log(JSON.stringify({
  output: "docs/MATRIZ_COBERTURA.csv",
  subtotalsByModule: Object.fromEntries(modules.map(([name]) => [name, rows.filter(row => row[1] === name).length])),
  subtópicos: rows.length,
  idsUnicos: uniqueIds.size,
  exemplosDetectados: examplesTotal,
  exercíciosDetectados: exercisesTotal,
  erros: errors,
  observacao: "Auditoria estrutural por padrões textuais; não valida qualidade, correção semântica, fontes ou funcionamento da aplicação."
}, null, 2));

if (errors.length > 0) process.exitCode = 1;
