#!/usr/bin/env node
/**
 * Heuristic structural audit for the question bank.
 * This flags review candidates; it does not certify semantic correctness.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const files = [
  "apostila-ia/assets/data/questions.js",
  ...Array.from({ length: 5 }, (_, index) => "apostila-ia/assets/data/questions_m" + (index + 4) + ".js")
];
function read(path) { return readFileSync(resolve(root, path), "utf8"); }
function decode(value) {
  try { return JSON.parse('"' + value + '"'); } catch { return value; }
}
function field(segment, name) {
  const match = segment.match(new RegExp("\\b" + name + "\\s*:\\s*\"((?:\\\\.|[^\"\\\\])*)\""));
  return match ? decode(match[1]) : "";
}
function csvCell(value) {
  return '"' + String(value == null ? "" : value).replaceAll('"', '""') + '"';
}
function parseQuestions(path) {
  const source = read(path);
  const starts = [...source.matchAll(/\{\s*id:\s*"(q-[^"]+)"/g)];
  return starts.map((match, index) => {
    const start = match.index;
    const next = starts[index + 1]?.index ?? source.indexOf("\n];", start);
    const segment = source.slice(start, next < 0 ? source.length : next);
    const id = field(segment, "id");
    const alternatives = [...segment.matchAll(/letra:\s*"([A-E])"\s*,\s*texto:\s*"((?:\\.|[^"\\])*)"/g)]
      .map(item => ({ letter: item[1], text: decode(item[2]) }));
    const analysisKeys = [...segment.matchAll(/^\s{6}([A-E]):\s*"/gm)].map(item => item[1]);
    const answer = field(segment, "gabarito");
    const format = field(segment, "formato");
    const topic = field(segment, "topico");
    const subject = field(segment, "assunto");
    const context = field(segment, "contexto");
    const stem = field(segment, "enunciado");
    const justification = field(segment, "justificativa");
    const sourceRef = field(segment, "fonte");
    const allText = [subject, context, stem, justification, sourceRef].join(" ");
    const flags = [];
    if (!id) flags.push("id ausente");
    if (!topic) flags.push("tópico ausente");
    if (!stem.trim()) flags.push("enunciado ausente");
    if (!justification.trim()) flags.push("justificativa ausente");
    if (alternatives.length) {
      if (alternatives.length < 4) flags.push("menos de 4 alternativas");
      if (!alternatives.some(option => option.letter === answer)) flags.push("gabarito não corresponde a alternativa");
      const missingAnalysis = alternatives.filter(option => !analysisKeys.includes(option.letter)).map(option => option.letter);
      if (missingAnalysis.length) flags.push("análise ausente para " + missingAnalysis.join("/"));
      if (new Set(alternatives.map(option => option.text.trim().toLowerCase())).size !== alternatives.length) flags.push("alternativas duplicadas");
    } else if (!["certo", "errado", "true", "false", "c", "e"].includes(answer.toLowerCase())) {
      flags.push("formato sem alternativas e gabarito não reconhecido como C/E");
    }
    if (/LGPD|Lei nº|Lei n\.|LAI|Constituição Federal|ANPD|Marco Civil/i.test(allText) && !sourceRef.trim()) {
      flags.push("questão legal sem campo fonte");
    }
    if (/\bAutoridade Nacional de Proteção de Dados\b/.test(allText) && !/denominação anterior|denominação histórica|historicamente/i.test(allText)) {
      flags.push("possível denominação histórica da ANPD");
    }
    if (/\b(?:TODO|TBD)\b/.test(allText) || /lorem ipsum|texto de preenchimento|preencher aqui|substituir aqui/i.test(allText)) {
      flags.push("possível placeholder ou texto de desenvolvimento");
    }
    return {
      id, module: (id.match(/^q-m(\d+)-/) || [])[1] || "?",
      format: format || (alternatives.length ? "mc" : "ce"),
      answer, topic, subject, context, stem, justification, sourceRef,
      alternatives, analysisKeys, flags, path
    };
  });
}
const questions = files.flatMap(parseQuestions);
const idCounts = new Map();
for (const question of questions) idCounts.set(question.id, (idCounts.get(question.id) || 0) + 1);
for (const question of questions) if ((idCounts.get(question.id) || 0) > 1) question.flags.push("ID duplicado");
const seenContextStem = new Map();
const duplicateContextStems = [];
for (const question of questions) {
  const key = (question.context + " " + question.stem).replace(/\s+/g, " ").trim().toLocaleLowerCase("pt-BR");
  if (!key) continue;
  if (seenContextStem.has(key)) duplicateContextStems.push([seenContextStem.get(key), question.id]);
  else seenContextStem.set(key, question.id);
}
const byModule = {}, answerDistribution = {}, formatDistribution = {};
const multipleChoiceAnswerDistribution = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const moduleMultipleChoiceAnswerDistribution = {};
for (const question of questions) {
  byModule[question.module] = (byModule[question.module] || 0) + 1;
  answerDistribution[question.answer] = (answerDistribution[question.answer] || 0) + 1;
  if (question.alternatives.length && Object.hasOwn(multipleChoiceAnswerDistribution, question.answer)) {
    multipleChoiceAnswerDistribution[question.answer] += 1;
  if (question.alternatives.length) {
    moduleMultipleChoiceAnswerDistribution[question.module] ||= { A: 0, B: 0, C: 0, D: 0, E: 0 };
    if (Object.hasOwn(moduleMultipleChoiceAnswerDistribution[question.module], question.answer)) {
      moduleMultipleChoiceAnswerDistribution[question.module][question.answer] += 1;
    }
  }
  }
  formatDistribution[question.format] = (formatDistribution[question.format] || 0) + 1;
}
const flagged = questions.filter(question => question.flags.length);
const multipleChoiceTotal = Object.values(multipleChoiceAnswerDistribution).reduce((sum, count) => sum + count, 0);
const answerPositionABShare = multipleChoiceTotal
  ? (multipleChoiceAnswerDistribution.A + multipleChoiceAnswerDistribution.B) / multipleChoiceTotal
  : 0;
const csvRows = [[
  "id", "modulo", "formato", "gabarito", "topico", "assunto",
  "quantidade_alternativas", "quantidade_analises", "tem_contexto",
  "tem_justificativa", "tem_fonte", "flags"
]];
for (const question of questions) csvRows.push([
  question.id, "M" + question.module, question.format, question.answer,
  question.topic, question.subject, question.alternatives.length,
  question.analysisKeys.length, Boolean(question.context.trim()),
  Boolean(question.justification.trim()), Boolean(question.sourceRef.trim()),
  question.flags.join("; ")
]);
writeFileSync(resolve(root, "docs/MATRIZ_QUALIDADE_QUESTOES.csv"), csvRows.map(row => row.map(csvCell).join(",")).join("\n") + "\n", "utf8");
const report = [
  "# Auditoria heurística de qualidade estrutural das questões", "",
  "Gerado por scripts/audit_question_quality.mjs. Este relatório sinaliza candidatos para revisão; não valida automaticamente a verdade das respostas nem substitui revisão pedagógica independente.", "",
  "- Questões lidas: **" + questions.length + "**.",
  "- IDs duplicados: **" + [...idCounts.values()].filter(count => count > 1).length + "**.",
  "- Questões com pelo menos um alerta heurístico: **" + flagged.length + "**.",
  "- Pares com contexto + enunciado idênticos: **" + duplicateContextStems.length + "**.",
  "- Distribuição por módulo: " + Object.entries(byModule).sort(([a], [b]) => Number(a) - Number(b)).map(([module, count]) => "M" + module + "=" + count).join(", ") + ".",
  "- Distribuição de gabaritos (incluindo C/E): " + Object.entries(answerDistribution).map(([answer, count]) => answer + "=" + count).join(", ") + ".",
  "- Distribuição de gabaritos MC (A-E): " + Object.entries(multipleChoiceAnswerDistribution).map(([answer, count]) => answer + "=" + count).join(", ") + ".",
  ...(answerPositionABShare >= 0.8 ? ["- Atenção editorial: A/B representam " + (answerPositionABShare * 100).toFixed(1) + "% das questões MC; revisar manualmente a posição das alternativas, sem alterar gabaritos corretos."] : []),
  ...(multipleChoiceAnswerDistribution.D === 0 ? ["- Revisão manual recomendada: nenhuma questão de múltipla escolha tem gabarito D; confirmar a distribuição das posições sem alterar respostas corretas por conveniência."] : []),
  "", "## Distribuição de gabaritos MC por módulo", "",
  "| Módulo | A | B | C | D | E | Total MC |",
  "|---|---:|---:|---:|---:|---:|---:|",
  ...Object.entries(moduleMultipleChoiceAnswerDistribution).sort(([a], [b]) => Number(a) - Number(b)).map(([module, dist]) => "| M" + module + "|" + dist.A + "|" + dist.B + "|" + dist.C + "|" + dist.D + "|" + dist.E + "|" + Object.values(dist).reduce((sum, count) => sum + count, 0) + "|"),
  ...Object.entries(moduleMultipleChoiceAnswerDistribution).filter(([, dist]) => dist.D === 0 || dist.E === 0 || (dist.A + dist.B) / Math.max(1, Object.values(dist).reduce((sum, count) => sum + count, 0)) >= 0.8).map(([module, dist]) => "- Revisão manual de posições recomendada em M" + module + ": A=" + dist.A + ", B=" + dist.B + ", C=" + dist.C + ", D=" + dist.D + ", E=" + dist.E + "."),
  "- Distribuição de formato: " + Object.entries(formatDistribution).map(([format, count]) => format + "=" + count).join(", ") + ".", "",
  "## Alertas", "",
  ...(flagged.length ? flagged.slice(0, 250).map(question => "- " + question.id + " (" + question.path + "): " + question.flags.join("; ")) : ["Nenhum alerta heurístico detectado."]), "",
  "## Pares com contexto e enunciado idênticos", "",
  ...(duplicateContextStems.length ? duplicateContextStems.map(pair => "- " + pair[0] + " / " + pair[1]) : ["Nenhum par idêntico detectado."]), "",
  "## Limitações", "",
  "- Uma questão sem alerta ainda pode conter erro factual, ambiguidade, gabarito incorreto ou distrator fraco.",
  "- Alertas de fonte, denominação legal e duplicação exigem avaliação humana do contexto.",
  "- A distribuição de letras do gabarito é descritiva e não prova qualidade nem viés por si só."
];
writeFileSync(resolve(root, "docs/RELATORIO_QUALIDADE_QUESTOES.md"), report.join("\n") + "\n", "utf8");
console.log(JSON.stringify({
  questions: questions.length,
  duplicateIds: [...idCounts.values()].filter(count => count > 1).length,
  flaggedQuestions: flagged.length,
  duplicateContextStems: duplicateContextStems.length,
  byModule, answerDistribution, multipleChoiceAnswerDistribution, moduleMultipleChoiceAnswerDistribution, formatDistribution,
  outputs: ["docs/MATRIZ_QUALIDADE_QUESTOES.csv", "docs/RELATORIO_QUALIDADE_QUESTOES.md"]
}, null, 2));
