#!/usr/bin/env node
/**
 * Auditoria estrutural de associação entre tópicos curriculares, flashcards e questões.
 * Executar na raiz do repositório: node scripts/audit_learning_assets.mjs
 * Não avalia qualidade semântica nem executa os arquivos de dados.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const curricula = [["M1", "apostila-ia/assets/data/curriculum.js"], ...Array.from({ length: 7 }, (_, i) => ["M" + (i + 2), "apostila-ia/assets/data/curriculum_m" + (i + 2) + ".js"])];
const cardFiles = Array.from({ length: 8 }, (_, i) => ["FC" + (i + 1), "apostila-ia/assets/data/flashcards_m" + (i + 1) + ".js"]);
const questionFiles = [["Q1-3", "apostila-ia/assets/data/questions.js"], ...Array.from({ length: 5 }, (_, i) => ["Q" + (i + 4), "apostila-ia/assets/data/questions_m" + (i + 4) + ".js"])];

function topicKey(id) {
  let match = id.match(/^modulo-(\d+)-unidade-(\d+)-topico-(\d+)(?:-sub-\d+)?$/);
  if (match) return "m" + match[1] + "-u" + match[2] + "-t" + match[3];
  match = id.match(/^(m\d+-u\d+-t\d+)(?:-s\d+)?$/);
  return match ? match[1] : null;
}
function csvCell(value) {
  return '"' + String(value == null ? "" : value).replaceAll('"', '""') + '"';
}
function read(path) {
  return readFileSync(resolve(root, path), "utf8");
}

const topics = new Map();
const idToKey = new Map();
for (const entry of curricula) {
  const source = read(entry[1]);
  const pattern = /"id"\s*:\s*"([^"]+)"\s*,\s*"titulo"\s*:\s*"([^"]+)"/g;
  for (const match of source.matchAll(pattern)) {
    const id = match[1], title = match[2], key = topicKey(id);
    if (!key) continue;
    idToKey.set(id, key);
    if (!topics.has(key)) topics.set(key, { key, module: "M" + key.match(/^m(\d+)/)[1], title, ids: [] });
    topics.get(key).ids.push(id);
    if (!id.includes("-sub-") && !/-s\d+$/.test(id)) topics.get(key).title = title;
  }
}
function parseAssets(files, kind) {
  const records = [];
  for (const entry of files) {
    const path = entry[1], source = read(path);
    const pattern = /id\s*:\s*"([^"]+)"[\s\S]{0,1000}?topico\s*:\s*"([^"]+)"/g;
    for (const match of source.matchAll(pattern)) {
      const ref = match[2];
      records.push({ id: match[1], ref, key: idToKey.get(ref) || topicKey(ref), kind, path });
    }
  }
  return records;
}
const cards = parseAssets(cardFiles, "flashcard");
const questions = parseAssets(questionFiles, "questao");
const allAssets = cards.concat(questions);
const unknown = allAssets.filter(asset => !asset.key || !topics.has(asset.key));
const rows = [["id_topico", "modulo", "titulo_topico", "ids_curriculares_associados", "quantidade_flashcards", "ids_flashcards", "quantidade_questoes", "ids_questoes", "status_rastreabilidade"]];
const orderedTopics = Array.from(topics.values()).sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
for (const topic of orderedTopics) {
  const topicCards = cards.filter(asset => asset.key === topic.key);
  const topicQuestions = questions.filter(asset => asset.key === topic.key);
  rows.push([topic.key, topic.module, topic.title, topic.ids.join(";"), topicCards.length, topicCards.map(asset => asset.id).join(";"), topicQuestions.length, topicQuestions.map(asset => asset.id).join(";"), "associação por tópico; revisar qualitativamente"]);
}
writeFileSync(resolve(root, "docs/MATRIZ_RASTREABILIDADE_ATIVOS.csv"), rows.map(row => row.map(csvCell).join(",")).join("\n") + "\n", "utf8");

const moduleNames = Array.from(new Set(orderedTopics.map(topic => topic.module))).sort();
const summary = moduleNames.map(module => {
  const moduleTopics = orderedTopics.filter(topic => topic.module === module);
  return {
    module,
    topics: moduleTopics.length,
    cards: cards.filter(asset => moduleTopics.some(topic => topic.key === asset.key)).length,
    questions: questions.filter(asset => moduleTopics.some(topic => topic.key === asset.key)).length,
    noCards: moduleTopics.filter(topic => !cards.some(asset => asset.key === topic.key)).length,
    noQuestions: moduleTopics.filter(topic => !questions.some(asset => asset.key === topic.key)).length
  };
});
const reportLines = [
  "# Auditoria de rastreabilidade dos ativos de aprendizagem", "",
  "Gerado por scripts/audit_learning_assets.mjs. Contagens estruturais; não certificam qualidade semântica.", "",
  "- Tópicos curriculares reconhecidos: **" + topics.size + "**.",
  "- Flashcards reconhecidos pelo padrão: **" + cards.length + "**.",
  "- Questões reconhecidas pelo padrão: **" + questions.length + "**.",
  "- Referências não mapeadas: **" + unknown.length + "**.", "",
  "| Módulo | Tópicos | Flashcards | Questões | Tópicos sem flashcard | Tópicos sem questão |",
  "|---|---:|---:|---:|---:|---:|",
  ...summary.map(item => "|" + item.module + "|" + item.topics + "|" + item.cards + "|" + item.questions + "|" + item.noCards + "|" + item.noQuestions + "|"),
  "", "## Referências não mapeadas", "",
  ...(unknown.length ? unknown.map(asset => "- " + asset.id + " (" + asset.kind + "; " + asset.path + ") -> " + asset.ref) : ["Nenhuma detectada pelo padrão estrutural."]),
  "", "## Limitações", "",
  "- A associação ocorre no nível do tópico-pai e não prova cobertura individual de cada subtópico.",
  "- A extração textual pode precisar de ajustes se o esquema dos arquivos mudar.",
  "- Não avalia conteúdo, gabaritos, fontes, interface, acessibilidade ou execução via file://.", ""
];
writeFileSync(resolve(root, "docs/RELATORIO_RASTREABILIDADE_ATIVOS.md"), reportLines.join("\n"), "utf8");
console.log(JSON.stringify({ topics: topics.size, flashcards: cards.length, questions: questions.length, unmapped: unknown.length, summary }, null, 2));
