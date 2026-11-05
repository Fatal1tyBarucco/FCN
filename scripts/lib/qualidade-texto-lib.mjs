/* qualidade-texto-lib.mjs — heurísticas de qualidade de prosa para os lotes.
 *
 * Complementa `artefatos-texto-lib.mjs` (que detecta artefatos de geração)
 * e `quase-duplicatas.mjs` (que detecta repetição). Aqui detectamos:
 *
 *  - "sopa de palavras": sequência de termos sem função sintática nem verbo,
 *    típica de saída degradada de modelo pequeno;
 *  - estrangeirismos: palavras inglesas que escapam da lista do detector;
 *  - erros de digitação por letra duplicada ("pedaggica", "horrios");
 *  - fragmentos: trechos que terminam no meio de uma frase.
 *
 * As heurísticas são sinais de revisão, não veredictos: cada achado deve ser
 * conferido no texto antes de qualquer correção.
 */
'use strict';

/** Palavras funcionais do português: dão densidade sintática à frase. */
export const FUNCAO_PT = new Set([
  'a', 'o', 'as', 'os', 'um', 'uma', 'uns', 'umas', 'de', 'do', 'da', 'dos', 'das',
  'em', 'no', 'na', 'nos', 'nas', 'por', 'pelo', 'pela', 'para', 'com', 'sem',
  'sob', 'sobre', 'entre', 'ate', 'apos', 'contra', 'desde', 'perante',
  'que', 'se', 'como', 'quando', 'onde', 'porque', 'pois', 'mas', 'porém',
  'e', 'ou', 'ainda', 'ja', 'apenas', 'só', 'somente', 'também',
  'cada', 'todo', 'toda', 'todos', 'todas', 'outro', 'outra', 'mesmo', 'mesma',
  'seu', 'sua', 'seus', 'suas', 'este', 'esta', 'estes', 'estas', 'esse', 'essa',
  'ao', 'à', 'às', 'aos', 'é', 'são', 'foi', 'foram', 'ser', 'estar', 'está',
  'estão', 'há', 'havia', 'deve', 'devem', 'precisa', 'precisam', 'pode',
  'podem', 'não', 'antes', 'depois', 'durante', 'mediante', 'conforme',
  'segundo', 'além', 'apesar', 'enquanto', 'sim',
  'serve', 'servem', 'exige', 'exigem', 'permite', 'permitem', 'evita',
  'evitam', 'garante', 'garantem', 'reduz', 'reduzem', 'amplia', 'ampliam',
  'revela', 'revelam', 'mostra', 'mostram', 'indica', 'indicam', 'define',
  'definem', 'significa', 'significam', 'consiste', 'consistem', 'inclui',
  'incluem', 'exclui', 'excluem', 'implica', 'implicam', 'pressupõe',
  'pressupõem', 'cabe', 'cabem', 'são', 'está', 'restringe', 'remove',
  'recomenda', 'recomendam', 'identifica', 'identificam', 'distingue',
  'distinguem', 'depende', 'dependem', 'exige', 'exigem', 'envia', 'anexa',
  'cria', 'define', 'compartilha', 'publica', 'divulga', 'revisa', 'remove',
  'controla', 'impede', 'protege', 'oculta', 'exibe', 'disponibiliza',
  'registra', 'audita', 'revoga', 'monitora', 'implanta', 'planeja',
  'padroniza', 'classifica', 'avalia', 'decide', 'age', 'executa', 'serve'
]);

/** Verbos e locuções verbais muito comuns — sinal de frase, não de lista. */
export const VERBOS_COMUNS = new Set([
  'expor', 'expõe', 'expoem', 'exposição', 'exposições', 'compartilhar',
  'compartilha', 'compartilhamento', 'publicar', 'publica', 'divulgar',
  'divulga', 'divulgação', 'enviar', 'envia', 'anexar', 'anexa', 'convidar',
  'convida', 'criar', 'cria', 'criação', 'ler', 'leitura', 'ver', 'visualizar',
  'revisar', 'revisão', 'restringir', 'restringe', 'restrição', 'remover',
  'remove', 'remoção', 'definir', 'define', 'definido', 'aplicar', 'aplica',
  'aplicação', 'configurar', 'configura', 'configuração', 'permitir', 'permite',
  'proibir', 'proíbe', 'proibido', 'exigir', 'exige', 'exigência', 'controlar',
  'controla', 'controle', 'impedir', 'impede', 'reduzir', 'reduz', 'ampliar',
  'amplia', 'ampliação', 'caber', 'cabe', 'servir', 'serve', 'conter', 'contém',
  'contida', 'guardar', 'guarda', 'armazenar', 'armazena', 'ocorrer', 'ocorre',
  'acontecer', 'acontece', 'depende', 'dependem', 'variar', 'varia', 'variam',
  'basear', 'baseia', 'fundar', 'fundamenta', 'sustentar', 'sustenta',
  'subsistir', 'subsiste', 'consistir', 'consiste', 'referir', 'refere',
  'significar', 'significa', 'fazer', 'faz', 'levar', 'leva',
  'passar', 'passa', 'chegar', 'chega', 'sair', 'sai', 'entrar', 'entra',
  'manter', 'mantém', 'preservar', 'preserva', 'proteger', 'protege',
  'ocultar', 'oculta', 'exibir', 'exibe', 'mostrar', 'mostra', 'disponibilizar',
  'disponibiliza', 'salvar', 'salva', 'registrar', 'registra',
  'auditar', 'audita', 'auditoria', 'revogar', 'revoga', 'monitorar',
  'monitora', 'monitoramento', 'implantar', 'implanta', 'implantação',
  'planejar', 'planeja', 'padronizar', 'padroniza', 'classificar',
  'classifica', 'classificação', 'avaliar', 'avalia', 'avaliação', 'decidir',
  'decide', 'decisão', 'agir', 'age', 'executar', 'executa',
  'veem', 'vejo', 'vêem', 'traz', 'trazem', 'dá', 'dão', 'surge', 'surgem',
  'nasce', 'nascem', 'cresce', 'crescem', 'cai', 'caem', 'sobe', 'sobem',
  'fica', 'ficam', 'gera', 'geram', 'causa', 'causam', 'provoca', 'provocam',
  'filtra', 'filtram', 'valida', 'validam', 'checa', 'documenta', 'documentam',
  'concede', 'concedem', 'bloqueia', 'bloqueiam', 'autoriza', 'autorizam',
  'estabelece', 'estabelecem', 'impõe', 'impoem', 'impedem', 'orienta',
  'orientam', 'informa', 'informam', 'relata', 'relatam', 'denuncia',
  'denunciam', 'comunica', 'comunicam', 'publicam', 'sinaliza', 'evidencia',
  'evidenciam', 'sustentam', 'contraria', 'contrariam', 'disciplina',
  'disciplinam', 'vigia', 'vigiam', 'controlam', 'auditam', 'inspeciona',
  'inspecionam', 'rastreia', 'rastreiam', 'cataloga', 'catalogam', 'arquiva',
  'arquivam', 'elimina', 'eliminam', 'conserva', 'conservam', 'preservam',
  'excluem', 'rejeita', 'rejeitam', 'suspende', 'suspendem'
]);

/** Palavras inglesas que escapam da lista curta do detector de artefatos. */
export const ESTRANGEIRAS_COMUNS = [
  'drastically', 'drastic', 'think', 'thinking', 'better', 'best', 'worst',
  'much', 'very', 'really', 'simply', 'just', 'still', 'also', 'however',
  'therefore', 'because', 'analysis', 'overview', 'summary', 'detail',
  'details', 'next', 'first', 'more', 'less', 'most', 'any',
  'none', 'about', 'after', 'before', 'between', 'during', 'without', 'within',
  'overview', 'lesson', 'course', 'record', ];

/** Erros de digitação por letra duplicada (forma sem acento, como no defeito). */
export const DUPLICADAS_SUSPEITAS = [
  'pedaggica', 'pedaggico', 'horrios', 'permissaoes', 'informcao',
  'reuniaos', 'configuracoes', 'seguranca', 'responsavel',
  'responsaveis', 'restricoes', 'revisao', 'sincronizacoes', 'classificacoes',
  'exposicoes', 'mitigacoes', 'prevencao', 'protecao', 'informacoes',
  'divulgacao', 'disponibilidades', 'exigencias', 'expiracoes', 'importancias',
  'intencoes', 'minimizacoes', 'necessarias', 'niveis', 'padroes', 'repositorio',
  'repositorios', 'subtopico', 'subtopicos', 'periodicidades',
  'proporcoes', 'referencias', 'consequencias', 'experiencias',
  'consciencia', 'eficiencias', 'evidencias', 'licencas', 'trs', 'mima',
  'reunio', 'educao', 'mitigaes', 'noicao', 'estrategicos', 'estratgicos',
  'contem', 'mantem', 'ninguem', 'titulos', 'ja', 'apos', 'alem', 'padrao',
  'revisaos', 'organizacao', 'organizacoes', 'politicas', 'publicos',
  'restricao', 'restricoes', 'conteudo', 'conteudos', 'analise', 'analises',
  'cenario', 'cenarios', 'informacao',
  'classificacao', 'classificacoes', 'exposicao', 'exposicoes',
  'politica', 'organizacao', 'responsavel', 'restricao', 'seguranca',
  'revisao', 'sincronizacao', 'subtopico', 'protecao', 'prevencao',
  'minimizacao', 'mitigacao', 'expiracao', 'exigencia', 'divulgacao',
  'importancia', 'intencao', 'necessario', 'necessaria',
  'nivel', 'padrao', 'publico', 'repositorio', 'sensivel', 'sensiveis',
  'sincronizacao', 'descricao', 'descricoes', 'configuracao', 'colaboracao',
  'autenticacao', 'audiencia', 'alteracao', 'calendario', 'conteudo',
  'exposicao', 'horario', 'informacao', 'informacoes', 'permissao',
  'permissoes', 'prevencao', 'protecao', 'restricao', ];

/**
 * Avalia uma string de prosa.
 * @param {string} txt
 * @returns {{tipo:string, detalhe:string}[]} achados
 */
export function avaliarQualidade(txt, opts = {}) {
  const achados = [];
  if (typeof txt !== 'string') return achados;

  // 0. Notação técnica não é prosa:
  //    - setas de fluxo ("A → B → C");
  //    - comparações rotuladas ("Lei vs. norma técnica");
  //    - listas de campos de planilha ("data_atendimento, unidade_organizacional").
  if (/[→]| -> | ↔ /.test(txt)) return achados;
  if (/(^|[\s(;])vs\.(\s|$)/i.test(txt)) return achados;
  if (/[a-zà-ÿ]+_[a-zà-ÿ_]+/.test(txt)) return achados;

  // 1. Sopa de palavras: muitos termos, pouca sintaxe.
  //    O limiar depende do tipo de campo: uma FRASE precisa de verbo;
  //    um RÓTULO de lista (dados, execucao, fluxos, conceitos) é legitimately
  //    curto e nominal, e só é sinalizado quando está no extremo.
  const tokens = txt.toLowerCase().match(/[a-zà-ÿ]+/g) || [];
  if (tokens.length >= 8) {
    const funcao = tokens.filter(t => FUNCAO_PT.has(t)).length;
    const verbo = tokens.filter(t => VERBOS_COMUNS.has(t)).length;
    const densidade = (funcao + verbo * 2) / tokens.length;
    const limiar = (opts && opts.frase) ? 0.12 : 0.08;
    const minTokens = (opts && opts.frase) ? 10 : 14;
    if (tokens.length >= minTokens && densidade < limiar) {
      achados.push({
        tipo: 'sopa-de-palavras',
        detalhe: `densidade ${densidade.toFixed(2)} (${tokens.length} termos, ${funcao} funcionais, ${verbo} verbos${opts.frase ? ', frase' : ', rótulo'})`
      });
    }
  }

  // 2. Palavras estrangeiras fora da lista do detector de artefatos.
  //    Exceção: cabeçalhos HTTP são nomes de protocolo em inglês e legítimos
  //    ("Retry-After", "Content-Type"); são ignorados quando hifenizados.
  const estrangeiras = [...new Set(tokens.filter(t => ESTRANGEIRAS_COMUNS.includes(t)))]
    .filter(t => !/-(?:after|before|since|until|content|type|length|encoding|transfer|connection|cache|control|location|host|server|range|disposition|encoding|agent)\b/i.test(txt));
  if (estrangeiras.length) {
    achados.push({ tipo: 'palavra-estrangeira', detalhe: estrangeiras.join(', ') });
  }

  // 3. Erros de digitação por letra duplicada.
  const duplicadas = [...new Set(tokens.filter(t => DUPLICADAS_SUSPEITAS.includes(t)))];
  if (duplicadas.length) {
    achados.push({ tipo: 'erro-de-digitacao', detalhe: duplicadas.join(', ') });
  }

  return achados;
}

/**
 * Varre um registro e retorna os campos com problema de qualidade.
 * @param {string} id
 * @param {any} rec
 * @returns {Array<{id,caminho,achados,trecho}>}
 */
export function varrerQualidadeRegistro(id, rec) {
  const CAMPOS_NAO_PROSA = [
    /(^|\.)dificuldade$/,
    /(^|\.)classificacao$/,
    /(^|\.)relacoes(\[\d+\])?$/,
    /(^|\.)tipo$/,
    /(^|\.)tema$/,
    /(^|\.)rotulo$/,
    /(^|\.)palavrasChave(\[\d+\])?$/
  ];
  const CAMPOS_FRASE = [
    /(^|\.)porqueImporta$/,
    /(^|\.)niveis\.(iniciante|intermediario|avancado|especialista)$/,
    /(^|\.)problema$/,
    /(^|\.)resultado$/,
    /(^|\.)justificativa$/,
    /(^|\.)porqueErrada$/,
    /(^|\.)versaoCorreta$/,
    /(^|\.)estrategia$/,
    /(^|\.)variacao$/
  ];
  const saida = [];
  (function walk(v, caminho) {
    if (typeof v === 'string') {
      if (CAMPOS_NAO_PROSA.some(re => re.test(caminho))) return;
      const ehFrase = CAMPOS_FRASE.some(re => re.test(caminho));
      const a = avaliarQualidade(v, { frase: ehFrase });
      const terso = /(resumoEstruturado\.(checklist|palavrasChave|conceitos|regras))(\[\d+\])?$/.test(caminho)
        || /(orientacaoEstrategica\.(preRequisitos|objetivosObservaveis|competencias))(\[\d+\])?$/.test(caminho)
        || /(errosFrequentes)(\[\d+\])?$/.test(caminho);
      if (terso) a.splice(0, a.length, ...a.filter(x => x.tipo !== 'sopa-de-palavras'));
      if (ehFrase && v.length > 80 && !/[.!?:;"')\]»”’…]$/.test(v.trim().slice(-1))) {
        a.push({ tipo: 'fragmento-incompleto', detalhe: `termina em "${v.trim().slice(-28)}"` });
      }
      if (a.length) {
        saida.push({
          id,
          caminho,
          achados: a.map(x => `${x.tipo}: ${x.detalhe}`),
          trecho: v.substring(0, 140)
        });
      }
    } else if (Array.isArray(v)) {
      v.forEach((x, i) => walk(x, `${caminho}[${i}]`));
    } else if (v && typeof v === 'object') {
      for (const k of Object.keys(v)) walk(v[k], caminho ? `${caminho}.${k}` : k);
    }
  })(rec, '');
  return saida;
}
