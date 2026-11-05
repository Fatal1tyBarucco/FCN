#!/usr/bin/env node
/* verificar-regras-editoriais.mjs — verificação das REGRAS EDITORIAIS da Seção 5
 * sobre o overlay canônico (`apostila-ia/assets/data/enriquecimento_m1..m8.js`).
 *
 * Complementa `scripts/auditar-template-didatico.mjs` (que valida o SCHEMA e
 * os mínimos) cobrindo as proibições da seção 5.1 de
 * `docs/CONTRATO_DADOS_ENRIQUECIMENTO.md`:
 *
 *   1. citação de banca de concurso;
 *   2. afirmação de frequência/incidência de aparecimento em provas;
 *   3. ID de subtópico fora de `orientacaoEstrategica.relacoes`;
 *   4. ID citado em `relacoes` inexistente no currículo / título divergente;
 *   5. acentuação pt-BR ausente (mapa triado semanticamente);
 *   6. `relevanciaConcurso.ressalva` presente;
 *   7. caracteres fora do alfabeto latino;
 *   8. anglicismos evitáveis.
 *
 * Uso: node scripts/verificar-regras-editoriais.mjs [--json]
 * Saída: exit 0 se tudo zerado; exit 1 se houver achados.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { CORRECOES_ACENTUACAO } from './lib/enriquecimento-comum.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const DATA = path.join(repoRoot, 'apostila-ia', 'assets', 'data');
const asJson = process.argv.includes('--json');

function carregar(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) throw new Error(`const não encontrado em ${file}`);
  return vm.runInContext(`(function(){ ${c}; return ${m[1]}; })()`, vm.createContext({ console }));
}
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();

// Fecha o parêntese por CONTAGEM DE PROFUNDIDADE. O título do currículo pode
// conter parênteses (ex.: "Temas e variações visuais (Design > Temas)"), e
// parar no primeiro ")" trunca o título.
function fecharParen(s, inicio) {
  let depth = 0;
  for (let i = inicio; i < s.length; i++) {
    if (s[i] === '(') depth++;
    else if (s[i] === ')') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

// ---------------------------------------------------------------- currículo
const curriculum = {};
for (const f of ['curriculum.js'].concat([2, 3, 4, 5, 6, 7, 8].map(i => `curriculum_m${i}.js`))) {
  const obj = carregar(path.join(DATA, f));
  for (const mod of Object.values(obj)) {
    if (!mod || !Array.isArray(mod.unidades)) continue;
    for (const u of mod.unidades) {
      for (const t of u.topicos || []) {
        for (const s of t.subtopicos || []) curriculum[norm(s.id)] = { id: s.id, titulo: s.titulo };
      }
    }
  }
}

// ---------------------------------------------------------------- padrões
const BANCAS = /\b(CESPE|CEBRASPE|Cebraspe|Cespe|FGV|FCC|VUNESP|Vunesp|IPCA)\b/;

const FREQUENCIA = [
  // advérbio de frequência + alvo de prova
  /\b(?:frequente(?:mente)?|regularmente|rotineiramente|constantemente)\s+(?:na|em|nos|nas|de)\s+(?:prova|provas|edital|editais|concursos|questões?)\b/i,
  // advérbio de frequência LIGADO a alvo de prova (regra global)
  /\b(?:com\s+frequência|com\s+regularidade|com\s+constância)\b[^.]{0,50}?\b(?:provas?|edital|editais|concursos?|questões?|itens?)\b/i,
  /\b(?:provas?|edital|editais|concursos?|questões?)\b[^.]{0,50}?\b(?:com\s+frequência|com\s+regularidade|com\s+constância)\b/i,
  /\bfrequente(?:mente)?\s+de\s+(?:prova|provas|edital|editais)\b/i,
  // advérbio de frequência aplicado a "aparece"
  /\baparece(?:m)?\s+com\s+(?:frequência|regularidade|constância)\b/i,
  // presença no universo de provas/edital (NÃO em "questões/itens": descrever
  // o tipo de item é permitido; afirmar incidência em provas, não)
  /\baparece(?:m)?\b[^.]{0,60}?\b(?:em|nos|nas|no|na)\b[^.]{0,30}?\b(?:provas?|concursos?|editais?)\b/i,
  /\bpresente(?:s)?\s+em\s+(?:editais?|provas?|concursos?)\b/i,
  /\b(?:mais|menos|pouco|bastante|muito)\s+(?:frequentemente\s+|regularmente\s+|rotineiramente\s+)?cobrad[oa]s?\b/i,
  /\b(?:frequentemente|regularmente|rotineiramente|constantemente|com\s+frequência|com\s+regularidade)\s+(?:cobrad[oa]s?|exigid[oa]s?|avaliad[oa]s?|demandad[oa]s?|testad[oa]s?)\b/i,
  /\brecorrente(?:s)?\s+em\b[^.]{0,40}?\b(?:provas?|concursos?|editais?|questões?)\b/i,
  /\btema\s+recorrente\b/i,
  /\b(?:clássico|clássica)\s+(?:de|dos|das)\s+(?:provas?|concursos?|editais?)\b/i,
  /\bquase\s+sempre\s+cobrad[oa]\b/i,
  /\bquase\s+(?:todo|toda|todos|todas)\s+cena?rio\s+de\s+prova\b/i,
  /\b(?:cobra|cobram|cobrado|cobrada)\s+(?:com\s+|em\s+)?(?:frequência|regularidade|constância)\b/i,
  /\b(?:exige|exigência|exigencias|demandam?|demanda)\s+(?:com\s+)?(?:frequência|regularidade)\b/i,
  /\bprobabilidade\s+de\s+(?:ser\s+)?cobrad[oa]\b/i,
  /\b(?:valoriza|valorizado|valorizada|centraliza|centralizado)\s+(?:em|nos|nas)\s+(?:provas?|concursos?|editais?)\b/i,
  /\b(?:é|e)\s+(?:muito|mais|um\s+dos\s+mais)\s+(?:cobrad[oa]s?|exigid[oa]s?|avaliad[oa]s?)\b/i,
  /\baparece\s+em\s+\d+\s*%/i,
  /\b(?:em|dos?)\s+\d+\s*%\s+dos?\s+(?:provas?|concursos?|editais?)\b/i,
  /\b(?:ponto|pontos|item|itens|questão|questões|tema|temas|conteúdo|conteúdos)\s+(?:frequente|recorrente|clássico|clássica)\b/i,
  /\b(?:alta|média|baixa)\s+incidência\s+em\s+(?:concursos|provas|editais|questões)\b/i
];

// ---------------------------------------------------------------- dano textual
// Resíduo de remoção mecânica de enumerações de banca. Três padrões:
//   1. enumeração vazia: "(, , )", ": , e"
//   2. preposição vazia:   "do , e ,"
//   3. fragmento órfão:   ". cobra", ". e apresentam", ". testa"
//      (frase iniciada por verbo conjugado em minúscula logo após ponto,
//       sem sujeito — típico de "(CESPE, FCC, …)" removido).
const RE_ENUM_VAZIA = /(\(|:)\s*(,\s*){1,}\s*(\)|e\b)/;
const RE_PREP_VAZIA = /\b(?:do|da|de|no|na|em|pelo|pela)\s*,\s*(?:e\s+)?,/i;
const VERBOS_ORFAOS = [
  'cobram', 'cobra', 'cobrou', 'apresentam', 'apresenta', 'testam', 'testa',
  'usam', 'usa', 'avaliam', 'avalia', 'exigem', 'exige', 'pedem', 'pede',
  'distinguem', 'distingue', 'comparam', 'compara', 'verificam', 'verifica',
  'observam', 'observa', 'identificam', 'identifica', 'demonstram', 'demonstra',
  'encontram', 'encontra', 'destacam', 'destaca', 'explicam', 'explica',
  'analisam', 'analisa', 'trabalham', 'trabalha', 'variam', 'varia', 'dependem',
  'depende', 'aparecem', 'aparece', 'existem', 'existe', 'incluem', 'inclui',
  'consideram', 'considera', 'tratam', 'trata', 'medem', 'mede', 'indicam',
  'indica', 'definem', 'define', 'permitem', 'permite', 'abrangem', 'abrange',
  'contemplam', 'contempla', 'surgem', 'surge', 'derivam', 'deriva',
  'pressupõem', 'pressupõe', 'implicam', 'implica', 'refletem', 'reflete',
  'evidenciam', 'evidencia'
];
const RE_VERBO_ORFAO = new RegExp('\\.\\s+(?:e\\s+)?(?:' + VERBOS_ORFAOS.join('|') + ')\\b', 'g');

// Nos campos que treatam da RELEVÂNCIA PARA CONCURSO, qualquer advérbio de
// frequência é violação: o próprio campo afirma incidência. Fora desses
// campos, o advérbio só viola se estiver ligado a alvo de prova (acima) —
// "frequência relativa" (estatística) e "base que muda com frequência"
// (atualização de conhecimento) são usos legítimos.
const FREQUENCIA_RELEVANCIA = /\b(?:com\s+frequência|com\s+regularidade|com\s+constância|frequente(?:mente)?|regularmente|rotineiramente|constantemente)\b/i;
const EH_CAMPO_RELEVANCIA = /^\.orientacaoEstrategica\.(?:relevanciaConcurso(?:\.|$)|porqueImporta$)/;


const ID_SUBTOPICO = /\b(?:m\d+-u\d+-t\d+-s\d+|modulo-\d+-unidade-\d+-topico-\d+-sub-\d+)\b/i;
const NAO_LATINO = /[぀-ヿ㐀-䶿一-鿿가-힯Ѐ-ӿ؀-ۿऀ-ॿ฀-๿]/;

// Campos enum/identificador: o valor não é prosa.
const CAMPOS_NAO_PROSA = [
  /(^|\.)tipo$/, /(^|\.)dificuldade$/, /(^|\.)classificacao$/,
  /(^|\.)orientacaoEstrategica\.relacoes(\[\d+\])?$/
];

// ---------------------------------------------------------------- acentuação
// O mapa triado semanticamente vive em `scripts/lib/enriquecimento-comum.mjs`
// (`CORRECOES_ACENTUACAO`): 1) pares de sufixo com acento obrigatório e
// 2) pares curados por triagem de agente (com precedência).
//
// ATENÇÃO — tokenização: a busca é feita por PALAVRA INTEIRA (`[a-zà-ÿ]+`),
// e não por `\b`. Em JavaScript, `\w` é ASCII, então `\bmedia\b` casaria
// DENTRO de "mediação" (o `ç` não é word-char) e o verificador acusaria um
// falso positivo; a troca por token inteiro evita isso.
const ACENTOS = CORRECOES_ACENTUACAO;
const RE_TOKEN = /[a-zà-ÿ]+/gi;

// ---------------------------------------------------------------- anglicismos
// §5.1, item 5: anglicismos evitáveis. Títulos de subtópico citados em
// `relacoes` reproduzem o currículo — são exentos (o currículo é a fonte de
// verdade), mas o resto do texto não é.
const ANGLICISMOS = new Map([
  ['feedback', 'retorno'], ['dashboard', 'painel'], ['workflow', 'fluxo de trabalho'],
  ['deadline', 'prazo'], ['screening', 'triagem'], ['default', 'padrão'],
  ['meeting', 'reunião'], ['check-list', 'lista de verificação'], ['report', 'relatório'],
  ['staff', 'equipe'], ['dossie', 'dossiê']
]);
// Termos cuja presença é legítima no contexto técnico do material.
const ANGLICISMOS_PERMITIDOS = [
  // títulos de subtópico do currículo citados em `relacoes`
  /^\s*m\d+-u\d+-t\d+-s\d+\s*\(/i
];

// ---------------------------------------------------------------- varredura
const achados = { bancas: [], frequencia: [], idFora: [], idInexistente: [], tituloDivergente: [], acentos: [], ressalva: [], naoLatino: [], anglicismos: [], danoTextual: [] };
let registros = 0, strings = 0;

for (let m = 1; m <= 8; m++) {
  const arquivo = `enriquecimento_m${m}.js`;
  const obj = carregar(path.join(DATA, arquivo));
  for (const [id, rec] of Object.entries(obj)) {
    registros++;
    const rc = rec?.orientacaoEstrategica?.relevanciaConcurso;
    if (rc && 'ressalva' in rc) achados.ressalva.push(`${arquivo} ${id}.orientacaoEstrategica.relevanciaConcurso.ressalva`);

    (function walk(v, caminho) {
      if (typeof v === 'string') {
        strings++;
        const rot = `${arquivo} ${id}${caminho}`;
        if (BANCAS.test(v)) achados.bancas.push(`${rot} :: ${v.slice(0, 100)}`);
        if (FREQUENCIA.some(re => re.test(v))
            || (EH_CAMPO_RELEVANCIA.test(caminho) && FREQUENCIA_RELEVANCIA.test(v))) {
          achados.frequencia.push(`${rot} :: ${v.slice(0, 100)}`);
        }
        // dano textual: resíduos de remoção mecânica de enumerações
        {
          const tipos = [];
          const mE = RE_ENUM_VAZIA.exec(v);
          if (mE) tipos.push(`enumeracaoVazia("${mE[0]}")`);
          const mP = RE_PREP_VAZIA.exec(v);
          if (mP) tipos.push(`preposicaoVazia("${mP[0]}")`);
          RE_VERBO_ORFAO.lastIndex = 0;
          let mV;
          while ((mV = RE_VERBO_ORFAO.exec(v)) !== null) tipos.push(`fragmentoOrfao("${mV[0].trim()}")`);
          if (tipos.length) achados.danoTextual.push(`${rot} :: ${[...new Set(tipos)].join(' | ')} :: ${v.slice(0, 140)}`);
        }
        if (NAO_LATINO.test(v)) achados.naoLatino.push(`${rot} :: ${v.slice(0, 80)}`);
        if (ID_SUBTOPICO.test(v) && !/^\.orientacaoEstrategica\.relacoes(\[\d+\])?$/.test(caminho)) {
          achados.idFora.push(`${rot} :: ${v.slice(0, 100)}`);
        }
        // Acentuação e anglicismos: busca por PALAVRA INTEIRA (ver RE_TOKEN).
        if (!CAMPOS_NAO_PROSA.some(re => re.test(caminho))) {
          let mt;
          const re = new RegExp(RE_TOKEN.source, 'gi');
          while ((mt = re.exec(v)) !== null) {
            const token = mt[0].toLowerCase();
            const correta = ACENTOS.get(token);
            if (correta) {
              achados.acentos.push(`${rot} :: "${mt[0]}" → "${correta}" :: ${v.slice(Math.max(0, mt.index - 40), mt.index + 50)}`);
            }
            const ang = ANGLICISMOS.get(token);
            if (ang) {
              achados.anglicismos.push(`${rot} :: "${mt[0]}" → "${ang}" :: ${v.slice(Math.max(0, mt.index - 40), mt.index + 50)}`);
            }
          }
        } else if (/^\.orientacaoEstrategica\.relacoes(\[\d+\])?$/.test(caminho)) {
          // Em `relacoes`, o TÍTULO entre parênteses reproduz o currículo
          // (fonte de verdade) e pode conter termo técnico; o restante do
          // item é prosa e é verificado normalmente.
          for (const item of (Array.isArray(v) ? v : [v])) {
            if (typeof item !== 'string') continue;
            const mm = /^\s*[^\s(]+\s*\(/.exec(item);
            const fecha = mm ? fecharParen(item, item.indexOf('(', mm[0].length - 1)) : -1;
            const prosa = fecha === -1 ? item : item.slice(fecha + 1);
            let mt;
            const re = new RegExp(RE_TOKEN.source, 'gi');
            while ((mt = re.exec(prosa)) !== null) {
              const token = mt[0].toLowerCase();
              const ang = ANGLICISMOS.get(token);
              if (ang) achados.anglicismos.push(`${rot} :: "${mt[0]}" → "${ang}" :: ${prosa.slice(Math.max(0, mt.index - 40), mt.index + 50)}`);
            }
          }
        }
      } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${caminho}[${i}]`));
      else if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k], `${caminho}.${k}`);
    })(rec, '');

    // conformidade de `relacoes`
    for (const item of rec?.orientacaoEstrategica?.relacoes || []) {
      if (typeof item !== 'string') continue;
      // Formato canônico: "<id> (<título do currículo>) — descrição".
      // O TÍTULO pode conter parênteses (ex.: "Falsificação de remetente
      // (spoofing) e autenticação de e-mail"), então o parêntese é fechado por
      // CONTAGEM DE PROFUNDADE — parar no primeiro ")" trunca o título, e
      // uma regex gulosa (.*) capturaria também a descrição quando ela
      // contém " — " (ex.: "… (três casos completos) — … — …").
      const mm = /^([^\s(]+)\s*\(/.exec(item);
      if (!mm) continue; // item em prosa
      const abre = item.indexOf('(', mm[1].length);
      const fecha = fecharParen(item, abre);
      if (fecha === -1) continue; // parêntese desbalanceado: exige agente
      const rid = mm[1];
      const rtitulo = item.slice(abre + 1, fecha);
      const achado = curriculum[norm(rid)];
      if (!achado) { achados.idInexistente.push(`${arquivo} ${id}.relacoes :: "${rid}" não existe no currículo`); continue; }
      if (norm(rtitulo) !== norm(achado.titulo)) {
        achados.tituloDivergente.push(`${arquivo} ${id}.relacoes :: "${rid}"\n      overlay : ${rtitulo}\n      currículo: ${achado.titulo}`);
      }
    }
  }
}

// ---------------------------------------------------------------- relatório
const ordem = ['bancas', 'frequencia', 'idFora', 'idInexistente', 'tituloDivergente', 'acentos', 'ressalva', 'naoLatino', 'anglicismos', 'danoTextual'];
const rotulos = {
  bancas: 'citação de banca de concurso',
  frequencia: 'afirmação de frequência/incidência em provas',
  idFora: 'ID de subtópico fora de `relacoes`',
  idInexistente: 'ID citado em `relacoes` inexistente no currículo',
  tituloDivergente: 'título em `relacoes` divergente do currículo',
  acentos: 'acentuação pt-BR ausente',
  ressalva: '`ressalva` presente (deve ser omitida)',
  naoLatino: 'caractere fora do alfabeto latino',
  anglicismos: 'anglicismo evitável',
  danoTextual: 'dano textual (resíduo de remoção mecânica)'
};
let total = 0;
for (const k of ordem) total += achados[k].length;

if (asJson) {
  console.log(JSON.stringify({ registros, strings, total, achados }, null, 1));
} else {
  console.log(`Overlay da Seção 5 — registros: ${registros} | strings percorridas: ${strings}`);
  console.log('');
  for (const k of ordem) {
    const n = achados[k].length;
    console.log(`[${n === 0 ? 'OK  ' : '!!  '}] ${rotulos[k]}: ${n}`);
    achados[k].slice(0, 15).forEach(x => console.log('      - ' + x));
    if (n > 15) console.log(`      ... e mais ${n - 15}`);
  }
  console.log('');
  console.log(total === 0
    ? 'REGRAS EDITORIAIS: TODAS ZERADAS'
    : `REGRAS EDITORIAIS: ${total} achado(s)`);
}
process.exitCode = total ? 1 : 0;
