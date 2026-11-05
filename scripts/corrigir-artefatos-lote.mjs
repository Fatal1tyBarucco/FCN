#!/usr/bin/env node
/* corrigir-artefatos-lote.mjs — repara artefatos de geração em lotes de enriquecimento.
 *
 * Uso:
 *   node scripts/corrigir-artefatos-lote.mjs scripts/lotes/enriParcialM7U3P2.js
 *
 * Aplica correções pontuais (substituições literais) e reporta o que resta.
 * Não inventa texto: apenas troca o trecho corrompido pelo equivalente correto.
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';

/** Substituições literais por arquivo (aplicadas ao texto bruto do arquivo). */
const CORRECOES = {
  'scripts/lotes/enriParcialM7U3P2.js': [
    ['ao citizen,', 'ao cidadão,'],
    ['reunindo cadastro deCadastro, benefícios,-which税费 e equipas de saúde', 'reunindo cadastro de cadastro, benefícios, tributos e equipes de saúde'],
    ['O desenho先行 exige nomear responsáveis', 'O desenho, antes de qualquer consolidateção técnica, exige nomear responsáveis'],
    ['e列表ar os domínios sem responsável', 'e listar os domínios sem responsável'],
    ['sistema de workflow', 'sistema de fluxo de trabalho'],
    ['Os instrumentos入门 são perfil por função', 'Os instrumentos iniciais são perfil por função'],
    ['para reavaliar a necessidade em的未来', 'para reavaliar a necessidade no futuro'],
    ['O analista自己不 usa a base', 'O analista não usa a base'],
    ['se converta em永久 base paralela', 'se converta em base paralela permanente'],
    ['Decisions sem curadoria viram apenas intenção escrita', 'Decisões sem curadoria viram apenas intenção escrita'],
    ['Trocar os dois纸 inverter a governança', 'Trocar os dois inverte a governança'],
    ['Comitê sem mandato, sem registro de decisão e semExecutes de acompanhamento', 'Comitê sem mandato, sem registro de decisão e sem acompanhamento das deliberações'],
    ['Instituição formal não é o mesmo que processo functioning', 'Instituição formal não é o mesmo que processo em funcionamento'],
    ['O que demonstra governança é aExistência de decisões', 'O que demonstra governança é a existência de decisões'],
    ['O que elimina é a simplify', 'O que elimina é a simplificação'],
    ['e um indicador de effectiveness', 'e um indicador de eficácia'],
    ['Duas bases oficiais brings dados inconciliáveis', 'Duas bases oficiais trazem dados inconciliáveis'],
    ['a política de acesso', 'a política de acesso'],
    ['Minimização é proporcionalidade, e nãoSpeed de exclusão', 'Minimização é proporcionalidade, e não velocidade de exclusão'],
    ['She', 'Ela'],
    ['A Applied juntas', 'Aplicadas juntas'],
    ['Privacidade', 'Privacidade'],
    ['não se forget', 'não se esquece'],
    ['a Given', 'a dada'],
    ['o próprio', 'o próprio'],
    ['Regras', 'Regras']
  ]
};

const arquivos = process.argv.slice(2);
if (arquivos.length === 0) {
  console.error('Uso: node scripts/corrigir-artefatos-lote.mjs <arquivo> ...');
  process.exit(2);
}

let total = 0;
for (const rel of arquivos) {
  const abs = path.resolve(process.cwd(), rel);
  if (!fs.existsSync(abs)) {
    console.error(`[ERRO] ${rel}: arquivo não encontrado`);
    process.exitCode = 1;
    continue;
  }
  const chave = path.relative(process.cwd(), abs).split(path.sep).join('/');
  const lista = CORRECOES[chave] || [];
  let code = fs.readFileSync(abs, 'utf8');
  let aplicadas = 0;
  for (const [de, para] of lista) {
    if (de === para) continue;
    const n = code.split(de).length - 1;
    if (n > 0) {
      code = code.split(de).join(para);
      aplicadas += n;
    }
  }
  if (aplicadas > 0) {
    fs.writeFileSync(abs, code, 'utf8');
  }
  console.log(`${chave}: ${aplicadas} substituição(ões)`);
  total += aplicadas;
}
console.log(`Total de substituições: ${total}`);
