/* artefatos-texto-lib.mjs — API reutilizável da detecção de artefatos de texto.
 *
 * Separada de `artefatos-texto.mjs` (que é um CLI) para que outros scripts
 * — como `status-lotes.mjs` e `auditar-template-didatico.mjs` — possam
 * reaproveitar a mesma regra sem duplicá-la.
 */
'use strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FREQ_PT, pareceSemAcentuacao } from './enriquecimento-comum.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

// Alfabetos que jamais aparecem em apostila pt-BR de concurso público.
const ALFABETOS_ESTRANHOS = [
  [/[\u3000-\u303F\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/, 'ideogramas CJK/japonês'],
  [/[\u0400-\u04FF]/, 'cirílico'],
  [/[\u0590-\u05FF]/, 'hebraico'],
  [/[\u0600-\u06FF]/, 'árabe'],
  [/[\uFF01-\uFF60\uFFE0-\uFFE6]/, 'caractere fullwidth'],
  [/[\u2500-\u257F]/, 'caractere de desenho em caixa'],
  [/[\u2580-\u259F]/, 'caractere de bloco'],
  [/[\uE000-\uF8FF]/, 'caractere de uso privado'],
  [/[\uD800-\uDFFF]/, 'surrogato não pareado'],
  [/[\u202A-\u202E\u2066-\u2069]/, 'marcador de direção de texto'],
  [/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/, 'caractere de controle']
];

// Mojibake: sequência típica de UTF-8 decodificado como Latin-1.
const MOJIBAKE = /Ã[\s¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿]|Â[\s¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿]/;

// Termos inequivocamente em inglês (não existem como palavra isolada em pt-BR).
const INGLES_INEQUIVOCO = [
  'the', 'and', 'with', 'without', 'this', 'that', 'which', 'from', 'were',
  'been', 'have', 'has', 'had', 'would', 'should', 'could', 'there', 'these',
  'those', 'their', 'thereupon', 'learning', 'governance', 'supervision',
  'automation', 'citizen', 'privacy', 'compliance', 'dataset', 'workflow',
  'example', 'scenario', 'concept', 'conclusion', 'requirement', 'review'
];

// Anglicismos consagrados no serviço público brasileiro: não são artefato.
const ANGLICISMOS_ACEITOS = [
  'template', 'checklist', 'feedback', 'content', 'level', 'topic', 'data',
  'status', 'dashboard', 'helpdesk', 'backup', 'restore', 'hardware',
  'software', 'networking', 'link', 'switch', 'router', 'server', 'client',
  'browser', 'prompt', 'token', 'tokens', 'machine', 'learning', 'deep',
  'log', 'logs', 'site', 'sites', 'web', 'email', 'chat', 'call', 'cloud',
  'dataset', 'compliance', 'endpoint', 'response', 'detection', 'man',
  'middle', 'spoofing', 'phishing', 'firewall', 'proxy', 'gateway', 'router'
];

// Campos cujo valor é identificador/enum do schema (não prosa).
export const CAMPOS_NAO_PROSA = [
  /(^|\.)dificuldade$/,
  /(^|\.)classificacao$/,
  /(^|\.)relacoes(\[\d+\])?$/,
  /(^|\.)tipo$/
];

// Frases em inglês legítimas no contexto técnico de segurança e de produto.
const FRASES_ACEITAS = [
  'on the web', 'office on the web',
  'man in the middle', 'man-in-the-middle', 'man in-the-middle',
  'endpoint detection and response',
  'the network address', 'the broadcast address', 'the subnet address',
  'bytes from', 'time to live', 'packet loss', 'round trip',
  'single sign-on', 'bring your own device', 'bring your own',
  'least privilege', 'deny by default', 'allow by default',
  'pull request', 'code review', 'machine learning', 'deep learning',
  'big data', 'data science', 'cloud computing', 'web application',
  'web server', 'web service', 'web browser', 'email client'
];

/**
 * Detecta termos em inglês ignorando ocorrências que fazem parte de nome
 * próprio técnico ("Endpoint Detection and Response", "Man in the Middle",
 * campo de e-mail "From") ou de citação literal de RFC/saída de comando.
 */
function termosEmIngles(texto) {
  const achados = [];
  let mascara = String(texto);
  for (const frase of FRASES_ACEITAS) {
    mascara = mascara.replace(new RegExp(frase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), ' ');
  }
  mascara = mascara.replace(/'[^']*'/g, ' ');
  mascara = mascara.replace(/[A-Za-zÀ-ÿ]+(?:-[A-Za-zÀ-ÿ]+)+/g, ' ');

  const re = /\b([A-Za-zà-ÿ]+)\b/g;
  const tokens = [];
  let m;
  while ((m = re.exec(mascara)) !== null) {
    tokens.push({ palavra: m[1], capitalizada: /^[A-ZÁÀÂÃÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇ]/.test(m[1]) });
  }
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    const low = t.palavra.toLowerCase();
    if (!INGLES_INEQUIVOCO.includes(low)) continue;
    if (ANGLICISMOS_ACEITOS.includes(low)) continue;
    if (t.capitalizada) continue;
    const anterior = tokens[i - 1], proximo = tokens[i + 1];
    if (anterior && anterior.capitalizada) continue;
    if (proximo && proximo.capitalizada) continue;
    achados.push(low);
  }
  return [...new Set(achados)];
}

/**
 * Detecta artefatos de geração em um texto.
 * @param {string} txt
 * @param {string} [caminho] caminho do campo (para isolar campos enum).
 * @returns {string[]} lista de achados.
 */
export function detectarArtefatos(txt, caminho = '') {
  const achados = [];
  if (typeof txt !== 'string') return achados;
  for (const [re, rotulo] of ALFABETOS_ESTRANHOS) {
    const m = txt.match(re);
    if (m) {
      const chars = [...new Set(m)].slice(0, 12).map(c => `U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`);
      achados.push(`${rotulo}: ${chars.join(', ')}`);
    }
  }
  if (MOJIBAKE.test(txt)) achados.push('mojibake (UTF-8 decodificado como Latin-1)');
  if (CAMPOS_NAO_PROSA.some(re => re.test(caminho))) return achados;

  const ingles = termosEmIngles(txt);
  if (ingles.length) achados.push(`termo(s) em inglês: ${ingles.join(', ')}`);

  const palavras = txt.toLowerCase().match(/[a-zà-ÿ]+/g) || [];
  const semAcento = [...new Set(palavras.filter(p => pareceSemAcentuacao(p)))];
  if (semAcento.length) achados.push(`palavra(s) sem acentuação: ${semAcento.slice(0, 12).join(', ')}`);
  return achados;
}

/**
 * Varre um registro de enriquecimento e retorna os campos com artefato.
 * @param {string} id
 * @param {any} rec
 * @returns {Array<{id,caminho,achados,trecho}>}
 */
export function varrerArtefatosRegistro(id, rec) {
  const saida = [];
  (function walk(v, caminho) {
    if (typeof v === 'string') {
      const a = detectarArtefatos(v, caminho);
      if (a.length) saida.push({ id, caminho, achados: a, trecho: v.substring(0, 140) });
    } else if (Array.isArray(v)) {
      v.forEach((x, i) => walk(x, `${caminho}[${i}]`));
    } else if (v && typeof v === 'object') {
      for (const k of Object.keys(v)) walk(v[k], `${caminho}.${k}`);
    }
  })(rec, '');
  return saida;
}

export { FREQ_PT };
