/* corrigir-acentuacao.mjs — restaura acentuação ausente nos lotes.
 *
 * O mesmo dicionário do `artefatos-texto.mjs` é usado aqui, mas invertido:
 * em vez de sinalizar, o script corrige. Uma palavra só é corrigida quando
 *
 *   (a) a forma acentuada existe no currículo validado do projeto; E
 *   (b) a forma sem acento NÃO existe no currículo (ou é raríssima em relação
 *       à forma acentuada).
 *
 * A condição (b) evita casos como "está"→"esta": "esta" é palavra válida em
 * português e o currículo a usa com frequência, então não é tocada.
 *
 * IMPORTANTE: a correção incide SOMENTE sobre valores de string. As CHAVAS do
 * schema (`orientacaoEstrategica`, `competencias`, `classificacao`...) e os
 * valores de enum (`intermediario`, `avancado`, `aplicacao`, `introducao`,
 * `erro`) são identificadores ASCII exigidos pelo contrato e NÃO são tocados.
 *
 * Uso:
 *   node scripts/lib/corrigir-acentuacao.mjs            # aplica em todos os lotes
 *   node scripts/lib/corrigir-acentuacao.mjs --dry-run  # apenas relata
 *   node scripts/lib/corrigir-acentuacao.mjs <arquivo>   # apenas um arquivo
 */
'use strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { FREQ_PT, CORRECOES_ACENTUACAO, corrigirAcentuacao } from './enriquecimento-comum.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const alvo = args.find(a => !a.startsWith('--'));

// Campos enum/identificador: os valores NÃO são prosa e ficam intactos.
const CAMPOS_NAO_PROSA = new Set([
  'dificuldade', 'classificacao', 'tipo', 'relacoes'
]);

// -------------------------------------------------- aplicação
function corrigirObjeto(obj, chavePai, aplicadas) {
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (typeof v === 'string') {
      if (CAMPOS_NAO_PROSA.has(k)) continue;
      const r = corrigirAcentuacao(v);
      if (r.aplicadas.length) {
        obj[k] = r.texto;
        aplicadas.push(...r.aplicadas);
      }
    } else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === 'string') {
          if (CAMPOS_NAO_PROSA.has(chavePai)) return;
          const r = corrigirAcentuacao(item);
          if (r.aplicadas.length) {
            v[i] = r.texto;
            aplicadas.push(...r.aplicadas);
          }
        } else if (item && typeof item === 'object') {
          corrigirObjeto(item, k, aplicadas);
        }
      });
    } else if (v && typeof v === 'object') {
      corrigirObjeto(v, k, aplicadas);
    }
  }
}

// -------------------------------------------------- execução
const loteDir = path.join(repoRoot, 'scripts', 'lotes');
const arquivos = alvo
  ? [path.resolve(process.cwd(), alvo)]
  : fs.readdirSync(loteDir).filter(f => f.endsWith('.js')).map(f => path.join(loteDir, f));

console.log(`Dicionário: ${FREQ_PT.size} palavras; ${CORRECOES_ACENTUACAO.size} correções de acentuação inequívocas.`);

let totalArquivos = 0;
let totalTrocas = 0;
for (const arq of arquivos) {
  const code = fs.readFileSync(arq, 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) { console.log(`[ERRO] ${path.basename(arq)}: const não encontrada`); continue; }
  const nome = m[1];
  let obj;
  try {
    obj = vm.runInContext(`(function(){ ${code}; return ${nome}; })()`, vm.createContext({ console }));
  } catch (e) {
    console.log(`[ERRO] ${path.basename(arq)}: ${e.message}`);
    continue;
  }
  const aplicadas = [];
  corrigirObjeto(obj, '', aplicadas);
  if (!aplicadas.length) continue;
  totalArquivos++;
  totalTrocas += aplicadas.length;
  const resumo = [...new Set(aplicadas)].slice(0, 12).join(', ');
  console.log(`\n${path.basename(arq)}: ${aplicadas.length} palavra(s) corrigida(s)`);
  console.log(`  ${resumo}${aplicadas.length > 12 ? ' ...' : ''}`);
  if (!dryRun) {
    const saida = `const ${nome} = ${JSON.stringify(obj, null, 2)};\n`;
    fs.writeFileSync(arq, saida, 'utf8');
  }
}

console.log(`\nArquivos com correção: ${totalArquivos}/${arquivos.length} | trocas: ${totalTrocas}${dryRun ? ' (dry-run, nada gravado)' : ''}`);
