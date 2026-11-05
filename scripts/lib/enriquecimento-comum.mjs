/* enriquecimento-comum.mjs — regras compartilhadas de validação do enriquecimento (Seção 5).
 *
 * Fonte única da verdade usada por:
 *   - scripts/validar-lote.mjs          (validação de um lote parcial)
 *   - scripts/status-lotes.mjs           (panorama dos 160 lotes)
 *   - scripts/auditar-template-didatico.mjs (auditoria final dos overlays)
 *
 * Evitar duplicar regras em três scripts é essencial: quando a regra muda (como a
 * proibição de marcadores técnicos), o comportamento deve ser idêntico nos três.
 */
'use strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

// -------------------------------------------------- placeholders proibidos
// Expressões com fronteira de palavra para não colidir com palavras legítimas
// em português (todo/todos, depende, pendente, preencher, placeholder...).
export const PLACEHOLDER_RE = [
  [/\bTODO\b/, 'TODO'],
  [/\bFIXME\b/, 'FIXME'],
  [/\bXXX\b/, 'XXX'],
  [/\blorem\s+ipsum\b/i, 'Lorem ipsum'],
  [/Adicionar novos exemplos conforme necessário?/i, 'Adicionar novos exemplos conforme necessário'],
  [/Consulte a documentação para saber mais/i, 'Consulte a documentação para saber mais'],
  [/Este tópico será aprofundado posteriormente/i, 'Este tópico será aprofundado posteriormente'],
  [/Existen otros métodos/i, 'Existen otros métodos'],
  [/Entre otros recursos/i, 'Entre otros recursos'],
  [/restante do código/i, 'restante do código'],
  [/implementar depois/i, 'implementar depois'],
  [/adicionar questões/i, 'adicionar questões'],
  // -------------------------------------------------- esqueletos de geração automática
  // Marcas deixadas pelo gerador de esqueleto quando o texto autoral não foi escrito.
  [/\{(titulo|tipo|id|nome|conteudo|exemplo|valor)\}/i, 'placeholder entre chaves'],
  [/Conceito\s+[AB]\b/, 'rótulo genérico "Conceito A/B"'],
  [/\bpalavra\d\b/i, 'palavra-chave genérica (palavra1, palavra2...)'],
  [/Erro típico\s+\d/i, 'erro genérico ("Erro típico 1")'],
  [/\b(Segundo|Terceiro|Quarto) aspecto\b/i, 'aspecto genérico'],
  [/Regra fundamental de aplicação/i, 'regra genérica de esqueleto'],
  [/Descrição do (primeiro|segundo) conceito ligado a/i, 'descrição genérica de esqueleto'],
  [/Diferença essencial para/i, 'diferença genérica de esqueleto'],
  [/Dados concretos para/i, 'dados genéricos de esqueleto'],
  [/Justificativa para (introducao|aplicacao|erro) em/i, 'justificativa genérica de esqueleto'],
  [/Variar os dados de (introducao|aplicacao|erro)/i, 'variação genérica de esqueleto'],
  [/^Passo \d+ de (introducao|aplicacao|erro):/i, 'passo genérico de esqueleto'],
  [/Comparação relacionada a/i, 'comparação genérica de esqueleto'],
  [/Ignora pré-requisitos e limites do método/i, 'explicação genérica de esqueleto'],
  [/Dependendo do algoritmo, a técnica pode ocultar/i, 'explicação genérica de esqueleto']
];

export function temPlaceholder(texto) {
  if (!texto || typeof texto !== 'string') return null;
  for (const [re, rotulo] of PLACEHOLDER_RE) if (re.test(texto)) return rotulo;
  return null;
}

// -------------------------------------------------- marcadores técnicos proibidos
// IDs e marcadores de deduplicação que NUNCA podem aparecer no texto visível ao aluno.
//
// `uid:...` / `uid_...` é SEMPRE proibido, em qualquer campo: é o truque usado para
// burlar a detecção de duplicação inserindo um identificador técnico no meio da frase.
//
// O ID de subtópico (`m4-u2-t2-s2`) é proibido em campos de prosa, mas admitido em
// campos que são listas de referência por natureza:
//   - `orientacaoEstrategica.relacoes`      (exigido pelo contrato: "ids reais")
//
// REGRA OPERATIVA (ver `docs/CONTRATO_DADOS_ENRIQUECIMENTO.md`, seção 5):
// o ID de subtópico aparece EXCLUSIVAMENTE em `orientacaoEstrategica.relacoes`.
// Em `preRequisitos` (e em qualquer outro campo) o pré-requisito é descrito em
// linguagem natural, sem o identificador técnico.
export const MARCADOR_RE = [
  [/\buid[:_]/i, 'marcador uid de deduplicação'],
  [/\bm\d+-u\d+-t\d+-s\d+\b/, 'ID de subtópico dentro do texto'],
  [/\bmodulo-\d+-unidade-\d+-topico-\d+-sub-\d+\b/, 'ID de subtópico dentro do texto']
];

// Campos (por caminho relativo ao registro) onde o ID de subtópico é admissível.
export const CAMPOS_COM_ID_ADMISSIVEL = [
  /(^|\.)relacoes(\[\d+\])?$/
];

/** Normaliza um caminho de campo (ex.: ".orientacaoEstrategica.relacoes[0]"). */
export function caminhoPermiteId(caminho) {
  const c = String(caminho || '');
  return CAMPOS_COM_ID_ADMISSIVEL.some(re => re.test(c));
}

/**
 * Detecta marcador técnico proibido no texto.
 * @param {string} texto
 * @param {string} [caminho] caminho do campo — usado para admitir IDs em campos de referência.
 * @returns {string|null} rótulo do marcador encontrado ou null.
 */
export function temMarcador(texto, caminho = '') {
  if (!texto || typeof texto !== 'string') return null;
  // `uid:` é proibido em qualquer lugar.
  for (const [re, rotulo] of MARCADOR_RE) {
    if (!re.test(texto)) continue;
    const ehUid = /uid/i.test(rotulo);
    if (ehUid || !caminhoPermiteId(caminho)) return rotulo;
  }
  return null;
}

// -------------------------------------------------- helpers de tipo
export function txt(v) { return typeof v === 'string' ? v : ''; }
export function arr(v) { return Array.isArray(v) ? v : []; }

/** Normaliza para comparação de igualdade literal (ignora pontuação e caixa). */
export function norm(s) {
  return String(s).toLowerCase()
    .replace(/[.,;:!?()[\]{}"']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// -------------------------------------------------- duplicação literal (>=120 chars)
export const MIN_LEN_DUPLICATA = 120;

/**
 * Coleta todas as strings com mais de `min` caracteres, com caminho e id do registro.
 * @param {any} obj
 * @param {string} prefixo
 * @param {string} id
 * @param {Array} destino
 */
export function coletarStringsLongas(obj, prefixo, id, destino, min = MIN_LEN_DUPLICATA) {
  if (obj === null || obj === undefined) return;
  if (typeof obj === 'string') {
    const t = obj.trim();
    if (t.length >= min) {
      destino.push({ texto: norm(t), original: t.substring(0, 200), id, campo: prefixo });
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((v, i) => coletarStringsLongas(v, `${prefixo}[${i}]`, id, destino, min));
  } else if (typeof obj === 'object') {
    for (const k of Object.keys(obj)) {
      coletarStringsLongas(obj[k], `${prefixo}.${k}`, id, destino, min);
    }
  }
}

// -------------------------------------------------- quase-duplicatas (boilerplate templático)
// Strings diferentes em um caractere ou dois (ex.: "Justificativa para introducao em X
// liga conceito à evidência..." x "...para aplicacao em X liga conceito à evidência...")
// NÃO são detectadas pela igualdade literal, mas são boilerplate e reprovam na revisão.
const TRIGRAMA = 3;

/** Conjunto de trigramas de caracteres de uma string normalizada. */
export function trigramas(s) {
  const t = ` ${String(s).replace(/\s+/g, ' ').trim().toLowerCase()} `;
  const out = new Set();
  for (let i = 0; i + TRIGRAMA <= t.length; i++) out.add(t.slice(i, i + TRIGRAMA));
  return out;
}

/** Índice de Jaccard entre dois conjuntos de trigramas. */
export function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  const [menor, maior] = a.size <= b.size ? [a, b] : [b, a];
  for (const x of menor) if (maior.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

export const LIMIAR_QUASE_DUPLICATA = 0.82;

// -------------------------------------------------- dicionário de acentuação
// O currículo do projeto (`curriculum*.js`) é conteúdo validado em pt-BR.
// Ele serve de dicionário de referência: se uma palavra aparece SEM acento no
// lote e sua forma acentuada existe no currículo, há indício de texto gerado
// sem revisão ortográfica.
//
// A correção automática só é segura quando a forma SEM acento não existe no
// currículo (`nBase === 0`): nesse caso não há palavra portuguesa válida com
// aquela grafia. Exemplos do risco evitado: "publica" (verbo) x "pública"
// (adjetivo), "referencia" (verbo) x "referência", "calculo" (verbo) x
// "cálculo", "esta" (demonstrativo) x "está" (verbo).
const ARQUIVOS_CURRICULO = [
  'curriculum.js', 'curriculum_m2.js', 'curriculum_m3.js', 'curriculum_m4.js',
  'curriculum_m5.js', 'curriculum_m6.js', 'curriculum_m7.js', 'curriculum_m8.js'
];

function _carregarFrequencias() {
  const freq = new Map();
  const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
  const data = path.join(raiz, 'apostila-ia', 'assets', 'data');
  const arquivos = ['curriculum.js', 'curriculum_m2.js', 'curriculum_m3.js',
    'curriculum_m4.js', 'curriculum_m5.js', 'curriculum_m6.js',
    'curriculum_m7.js', 'curriculum_m8.js'];

  // Percorre apenas VALORES de string (prosa). As CHAVES JSON do currículo são
  // identificadores ASCII em português ("decisao", "modulo", "topico") e
  // poluiriam a contagem, fazendo com que palavras legítimas pareçam "comuns
  // sem acento" — o que desligaria a detecção de acentuação ausente.
  const contar = (v) => {
    if (typeof v === 'string') {
      for (const m of v.toLowerCase().matchAll(/[a-zà-ÿ]+/g)) {
        freq.set(m[0], (freq.get(m[0]) || 0) + 1);
      }
    } else if (Array.isArray(v)) {
      v.forEach(contar);
    } else if (v && typeof v === 'object') {
      for (const k of Object.keys(v)) contar(v[k]);
    }
  };

  for (const f of arquivos) {
    const p = path.join(data, f);
    if (!fs.existsSync(p)) continue;
    const code = fs.readFileSync(p, 'utf8');
    const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
    if (!m) continue;
    try {
      const obj = vm.runInContext(
        `(function(){ ${code}; return ${m[1]}; })()`,
        vm.createContext({ console })
      );
      contar(obj);
    } catch { /* currículo ilegível: segue sem contributes */ }
  }
  return freq;
}

export const FREQ_PT = _carregarFrequencias();

/**
 * Sufixos em que o acento é OBRIGATÓRIO em português. Uma palavra que termina
 * por eles e aparece sem acento está com certeza mal escrita — não há palavra
 * portuguesa válida com essa grafia.
 *
 * "categoria" e "historia" NÃO terminam em "-oria" e, por isso, nunca são
 * tocadas: a regra correspondente é "-ario"/"-aria", não "-oria".
 */
export const SUFIXOS_ACENTO_OBRIGATORIO = [
  ['cao', 'ção'], ['sao', 'são'], ['coes', 'ções'],
  ['encia', 'ência'], ['encias', 'ências'],
  ['ancia', 'ância'], ['ancias', 'âncias'],
  ['atico', 'ático'], ['atica', 'ática'],
  ['avel', 'ável'], ['iveis', 'íveis'], ['ivel', 'ível'],
  ['orio', 'ório'], ['ario', 'ário'],
  ['logico', 'lógico'], ['logica', 'lógica']
];

/**
 * Palavras sem acento obrigatório que NÃO seguem regra de sufixo.
 * Lista revisada palavra a palavra: "publica"/"calcula"/"contem" ficam de fora
 * por serem também formas verbais válidas sem acento.
 */
export const PALAVRAS_ACENTO_OBRIGATORIO = [
  'seguranca', 'governanca', 'informacao', 'informacoes', 'configuracao',
  'configuracoes', 'comunicacao', 'comunicacoes', 'organizacao', 'operacao',
  'operacoes', 'avaliacao', 'avaliacoes', 'aplicacao', 'aplicacoes',
  'integracao', 'executacao', 'implementacao', 'elaboracao', 'preparacao',
  'demonstracao', 'interpretacao', 'autenticacao', 'autorizacao',
  'administracao', 'participacao', 'protecao', 'restricao', 'restricoes',
  'obrigacao', 'obrigacoes', 'proibicao', 'permissao', 'permissoes',
  'transparencia', 'responsabilizacao', 'legislacao', 'regulamentacao',
  'fundamentacao', 'padronizacao', 'migracao', 'documentacao', 'versionamento',
  'implantacao', 'monitoracao', 'automacao', 'virtualizacao', 'orquestracao',
  'observabilidade', 'escalabilidade', 'redundancia', 'resiliencia',
  'recuperacao', 'continuidade', 'disponibilidade', 'confiabilidade',
  'usabilidade', 'acessibilidade', 'funcionalidade', 'compatibilidade',
  'complexidade', 'capacidade', 'rastreabilidade', 'parametrizacao',
  'granularidade', 'priorizacao', 'categorizacao', 'discretizacao',
  'normalizacao', 'minimizacao', 'regularizacao', 'otimizacao', 'validacao',
  'quantificacao', 'notificacao', 'solicitacao', 'requisicao', 'sancao',
  'sancoes', 'fiscalizacao', 'vinculacao', 'classificacao', 'catalogacao',
  'indexacao', 'numeracao', 'rotulacao', 'formatacao', 'sanitizacao',
  'tokenizacao', 'sumarizacao', 'traducao', 'transcricao', 'transposicao',
  'proporcao', 'proporcoes', 'construcao', 'construcoes', 'destruicao',
  'preservacao', 'conservacao', 'prevencao', 'regulacao', 'adaptacao',
  'adequacao', 'alocacao', 'remocao', 'insercao', 'insercoes', 'inclusao',
  'exclusao', 'concessao', 'concessoes', 'revisao', 'revisoes', 'aprovacao',
  'aprovacoes', 'rejeicao', 'suspensao', 'revogacao', 'anulacao',
  'exposicao', 'exposicoes', 'composicao', 'proposicao', 'imposicao',
  'suposicao', 'pressuposicao', 'presenca', 'ausencia', 'consistencia',
  'inconsistencia', 'convergencia', 'divergencia', 'coerencia', 'coesao',
  'contigencia', 'emergencia', 'tendencia', 'contingencia', 'experiencia',
  'ciencia', 'consciencia', 'referencia', 'referencias', 'diferenca',
  'evidencia', 'evidencias', 'preguica', 'criterio', 'criterios', 'principio',
  'principios', 'proprio', 'propria', 'necessario', 'necessaria', 'excecao',
  'excecoes', 'opcao', 'opcoes', 'definicao', 'definicoes', 'execucao',
  'execucoes', 'producao', 'producoes', 'reducao', 'ampliacao', 'duplicacao',
  'verificacao', 'verificacoes', 'publicacao', 'publicacoes', 'divulgacao',
  'promocao', 'comprovacao', 'revogacao', 'planilhamento', 'entendimento',
  'diagnostico', 'diagnosticos', 'sintese', 'sinteses', 'analise', 'analises',
  'analitica', 'analitico', 'estatistica', 'estatistico', 'estatisticas',
  'logica', 'logico', 'logistica', 'pratica', 'praticas', 'pratico',
  'tecnica', 'tecnicas', 'tecnico', 'tecnicos', 'politica', 'politicas',
  'politico', 'publico', 'publicos', 'juridica', 'juridico', 'juridicos',
  'grafico', 'graficos', 'basico', 'basicos', 'basica', 'basicas', 'etica',
  'etico', 'eticos', 'eticas', 'saude', 'util', 'utilizacao', 'nivel', 'niveis',
  'avancado', 'intermediario', 'avancada', 'intermediaria', 'metodo',
  'metodos', 'servico', 'servicos', 'modulo', 'modulos', 'topico', 'topicos',
  'subtopico', 'subtopicos', 'conteudo', 'conteudos', 'objetivo', 'objetivos',
  'comparacao', 'comparacoes', 'fundamento', 'fundamentos', 'enquadramento',
  'limitacao', 'limitacoes', 'hierarquia', 'hierarquias', 'padrao', 'padroes',
  'parametro', 'parametros', 'rotulo', 'rotulos', 'simbolo', 'simbolos',
  'traco', 'tracos', 'relevancia', 'significancia', 'constancia', 'variancia',
  'frequencia', 'frequencias', 'distribuicao', 'distribuicoes', 'correlacao',
  'regressao', 'dispersao', 'precisao', 'economico', 'economica', 'tecnologico',
  'tecnologica', 'academico', 'academica', 'automatico', 'automatica',
  'biometrico', 'biometrica', 'criptografico', 'criptografica', 'generico',
  'generica', 'numerico', 'numerica', 'fisico', 'fisica', 'quimico', 'quimica',
  'logaritmico', 'aritmetico', 'sistematico', 'eletronico', 'eletronica',
  'optico', 'optica', 'acustico', 'magnetico', 'termico', 'atomico',
  'organico', 'sintetico', 'sintetica', 'urgencia', 'presente', 'ausente',
  'suficiente', 'insuficiente', 'eficiente', 'ineficiente', 'coerente',
  'incoerente', 'consistente', 'inconsistente', 'relevante', 'simultaneo',
  'imediato', 'mediato', 'autonomo', 'categorias', 'deterministico',
  'media', 'medias', 'rotulo', 'rotulos', 'referencia', 'referencias',
  'evidencia', 'evidencias', 'estrategia', 'estrategias', 'modulo', 'modulos',
  'topico', 'topicos', 'memoria', 'memorial', 'historia', 'historiografia',
  'criterio', 'criterios', 'principio', 'principios', 'excecao', 'excecoes',
  'opcao', 'opcoes', 'praxe', 'praxes', 'nivel', 'niveis'
];

/** Remove diacríticos preservando o "ç" (NFD não decompõe o cedilha). */
export function semAcento(palavra) {
  return palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/** Indica se a palavra termina por um sufixo de acento obrigatório. */
export function temSufixoAcentoObrigatorio(palavra) {
  return SUFIXOS_ACENTO_OBRIGATORIO.some(([sufixo]) => palavra.endsWith(sufixo));
}

/**
 * Mapa base(sem acento) → forma acentuada, apenas para casos inequívocos.
 *
 * Um caso é inequívoco quando:
 *   (a) a forma acentuada existe no currículo validado; E
 *   (b) a base segue regra de sufixo de acento obrigatório OU está na lista
 *       curada `PALAVRAS_ACENTO_OBRIGATORIO`.
 *
 * A condição (b) impede que formas verbais válidas sem acento sejam
 * "corrigidas" para uma forma nominal: "contem"→"contém" e "comeca"→"começa"
 * seriam corretos, mas "publica"→"pública" e "calcula"→"cálculo"
 * transformariam o verbo em substantivo. Por isso essas formas verbais NÃO
 * seguem nenhuma regra de sufixo e não constam da lista curada.
 */
/**
 * Formas sem acento obrigatório que NÃO constam do vocabulário do currículo
 * (e, por isso, não são derivadas automaticamente de FREQ_PT), mas cujo
 * correto é inequívoco. Cobrem plurais e derivadas de uso corrente.
 */
export const CORRECOES_ACENTUACAO_EXTRAS = new Map([
  ['domestico', 'doméstico'],
  ['historico', 'histórico'],
  ['minoritaria', 'minoritária'],
  ['ruido', 'ruído'],
  ['beneficio', 'benefício'],
  ['beneficiario', 'beneficiário'],
  ['sessoes', 'sessões'],
  ['recalculo', 'recálculo'],
  ['proibem', 'proíbem'],
  ['indexa', 'índexa'],
  ['caracteristico', 'característico'],
  ['minimo', 'mínimo'],
  ['paragrafos', 'parágrafos'],
  ['dialogo', 'diálogo'],
  ['ultimo', 'último'],
  ['celula', 'célula'],
  ['modulo', 'módulo'],
  ['topico', 'tópico'],
  ['cabecalhos', 'cabeçalhos'],
  ['rapido', 'rápido'],
  ['orfao', 'órfão'],
  ['atomicas', 'atômicas'],
  ['multiplos', 'múltiplos'],
  ['praticos', 'práticos'],
  ['iniciara', 'iniciará'],
  ['ambiguo', 'ambíguo'],
  ['produzira', 'produzirá'],
  ['relatorios', 'relatórios'],
  ['integrara', 'integrará'],
  ['definira', 'definirá'],
  ['conclusoes', 'conclusões'],
  ['indice', 'índice'],
  ['arbitrarios', 'arbitrários'],
  ['continuas', 'contínuas'],
  ['caracteristicas', 'características'],
  ['preco', 'preço'],
  ['precos', 'preços'],
  ['avancadas', 'avançadas'],
  ['reconheco', 'reconheço'],
  ['tipicos', 'típicos'],
  ['titulo', 'título'],
  ['espacamentos', 'espaçamentos'],
  ['mudanca', 'mudança'],
  ['exclusoes', 'exclusões'],
  ['proximo', 'próximo'],
  ['raciocinio', 'raciocínio'],
  ['comeca', 'começa'],
  ['enderecos', 'endereços'],
  ['classico', 'clássico'],
  ['fisicos', 'físicos'],
  ['invalido', 'inválido'],
  ['obrigatorios', 'obrigatórios'],
  ['verificaveis', 'verificáveis'],
  ['avaliacoes', 'avaliações'],
  ['deterministicos', 'determinísticos'],
  ['mudancas', 'mudanças'],
  ['varios', 'vários'],
  ['rigido', 'rígido'],
  ['favoraveis', 'favoráveis'],
  ['desfavoraveis', 'desfavoráveis'],
  ['atipica', 'atípica'],
  ['sinteticos', 'sintéticos'],
  ['concentracoes', 'concentrações'],
  ['diferencas', 'diferenças'],
  ['proprios', 'próprios'],
  ['necessarios', 'necessários'],
  ['rapida', 'rápida'],
  ['comecar', 'começar'],
  ['serao', 'serão'],
  ['construidos', 'construídos'],
  ['publicas', 'públicas'],
  ['sistolica', 'sistólica'],
  ['obvio', 'óbvio'],
  ['so', 'só'],
  ['versoes', 'versões'],
  ['paragrafo', 'parágrafo'],
  ['conexao', 'conexão'],
  ['dominio', 'domínio'],
  ['espacos', 'espaços'],
  ['hipoteses', 'hipóteses'],
  ['licenca', 'licença'],
  ['usuarios', 'usuários'],
  ['periodo', 'período'],
  ['decisoes', 'decisões'],
  ['gestao', 'gestão'],
  ['questoes', 'questões'],
  ['excluido', 'excluído'],
  ['tunel', 'túnel'],
  ['metricas', 'métricas'],
  ['unica', 'única'],
  ['entao', 'então'],
  ['numero', 'número'],
  ['espacamento', 'espaçamento'],
  ['video', 'vídeo'],
  ['inicio', 'início'],
  ['explicitos', 'explícitos'],
  ['teorica', 'teórica'],
  ['pedagogica', 'pedagógica'],
  ['excluidos', 'excluídos'],
  ['endereco', 'endereço'],
  ['formacao', 'formação'],
  ['pagina', 'página'],
  ['acuracia', 'acurácia'],
  ['especificos', 'específicos'],
  ['iteracoes', 'iterações'],
  ['funcionarios', 'funcionários'],
  ['familia', 'família'],
  ['conexoes', 'conexões'],
  ['orcamento', 'orçamento'],
  ['hipotese', 'hipótese'],
  ['explicitas', 'explícitas'],
  ['clausula', 'cláusula'],
  ['previo', 'prévio'],
  ['estrategica', 'estratégica'],
  ['mecanica', 'mecânica'],
  ['questao', 'questão'],
  ['perpetua', 'perpétua'],
  ['unico', 'único'],
  ['privilegio', 'privilégio'],
  ['numeros', 'números'],
  ['monetarios', 'monetários'],
  ['regua', 'régua'],
  ['cabecalho', 'cabeçalho'],
  ['probabilistica', 'probabilística'],
  ['multiplas', 'múltiplas'],
  ['retificacao', 'retificação'],
  ['informatica', 'informática'],
  ['pedaggica', 'pedagógica'],
  ['pedaggico', 'pedagógico'],
  ['horrios', 'horários'],
  ['cenarios', 'cenários'],
  ['revisaos', 'revisões'],
  ['reuniaos', 'reuniões'],
  ['permissaoes', 'permissões'],
  ['sincronizacoes', 'sincronizações'],
  ['responsaveis', 'responsáveis'],
  ['experiencias', 'experiências'],
  ['consciencia', 'consciência'],
  ['licencas', 'licenças'],
  ['organizacoes', 'organizações'],
  ['configuracoes', 'configurações'],
  ['restricoes', 'restrições'],
  ['politicas', 'políticas'],
  ['publicos', 'públicos'],
  ['conteudos', 'conteúdos'],
  ['referencias', 'referências'],
  ['consequencias', 'consequências'],
  ['evidencias', 'evidências'],
  ['informacoes', 'informações'],
  ['classificacoes', 'classificações'],
  ['exposicoes', 'exposições'],
  ['mitigacoes', 'mitigações'],
  ['subtopicos', 'subtópicos'],
  ['proporcoes', 'proporções'],
  ['eficiencias', 'eficiências'],
  ['repositorios', 'repositórios'],
  ['descricoes', 'descrições'],
  ['audiencias', 'audiências'],
  ['alteracoes', 'alterações'],
  ['autenticacoes', 'autenticações'],
  ['colaboracoes', 'colaborações'],
  ['apos', 'após'],
  ['ja', 'já'],
  ['alem', 'além'],
  ['mantem', 'mantém'],
  ['ate', 'até'],
  ['voce', 'você'],
  ['ha', 'há'],
  ['saida', 'saída'],
  ['saidas', 'saídas'],
  ['sao', 'são'],
  ['nao', 'não'],
  ['sera', 'será'],
  ['tera', 'terá'],
  ['estao', 'estão'],
  ['tres', 'três'],
  ['voce', 'você'],
  ['reproducible', 'reproduzível'],
  ['regulatoria', 'regulatória'],
  ['obrigatoria', 'obrigatória'],
  ['obrigatorias', 'obrigatórias'],
  ['instancia', 'instância'],
  ['decisoria', 'decisória'],
  ['compartilhavel', 'compartilhável'],
  ['portavel', 'portátil'],
  ['sustentavel', 'sustentável'],
  ['silencia', 'silêncio']
]);

export const CORRECOES_ACENTUACAO = (() => {
  const mapa = new Map();
  for (const [palavra, n] of FREQ_PT) {
    if (!/[à-ÿ]/.test(palavra)) continue;
    const base = semAcento(palavra);
    if (base === palavra) continue;
    if (base.length <= 3) continue;
    const porSufixo = temSufixoAcentoObrigatorio(base);
    const porLista = PALAVRAS_ACENTO_OBRIGATORIO.includes(base);
    if (!porSufixo && !porLista) continue;
    const atual = mapa.get(base);
    if (!atual || n > FREQ_PT.get(atual)) mapa.set(base, palavra);
  }
  for (const [base, correta] of CORRECOES_ACENTUACAO_EXTRAS) {
    // A lista curada tem PRECEDÊNCIA sobre a derivada de FREQ_PT: ela foi
    // triada semanticamente (uso nominal/adjetival confirmado no corpus).
    mapa.set(base, correta);
  }
  return mapa;
})();

/**
 * Indica se a palavra parece estar sem acentuação obrigatória.
 * @param {string} palavra
 */
export function pareceSemAcentuacao(palavra) {
  if (palavra.length < 5) return false;
  if (FREQ_PT.has(palavra)) return false;
  return CORRECOES_ACENTUACAO.has(palavra);
}

/**
 * Aplica as correções de acentuação inequívocas a um texto.
 * @param {string} texto
 * @returns {{texto: string, aplicadas: string[]}}
 */
export function corrigirAcentuacao(texto) {
  const aplicadas = [];
  const novo = String(texto).replace(/[a-zà-ÿ]+/gi, (palavra) => {
    const subst = CORRECOES_ACENTUACAO.get(palavra.toLowerCase());
    if (!subst) return palavra;
    let out = subst;
    if (/^[A-ZÁÀÂÃÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇ]/.test(palavra)) {
      out = subst.charAt(0).toUpperCase() + subst.slice(1);
    }
    aplicadas.push(`${palavra}→${out}`);
    return out;
  });
  return { texto: novo, aplicadas };
}

/**
 * Encontra pares de strings ALTAMENTE similares (boilerplate templático).
 * Usa índice invertido de trigramas para não comparar todos os pares (O(n²)).
 * @param {Array<{texto,original,id,campo}>} stringsLongas
 * @param {number} [limiar]
 */
export function encontrarQuaseDuplicatas(stringsLongas, limiar = LIMIAR_QUASE_DUPLICATA) {
  // Índice invertido: trigrama -> lista de índices das strings que o contêm.
  const indice = new Map();
  const sets = [];
  stringsLongas.forEach((s, i) => {
    const t = trigramas(s.texto);
    sets.push(t);
    for (const g of t) {
      let lista = indice.get(g);
      if (!lista) { lista = []; indice.set(g, lista); }
      lista.push(i);
    }
  });

  // Para cada par candidato, calcula Jaccard. Candidatos = strings que compartilham
  // ao menos MIN_TRIGRAMA_COMUNS trigramas (evita comparar strings sem relação).
  //
  // A contagem é feita por string de origem (i) e não por par global: assim o custo
  // é proporcional ao total de ocorrências de trigramas e não ao quadrado do número
  // de pares, o que estourava a memória (`Map maximum size exceeded`) quando o
  // corpus completo de 300+ registros era varrido de uma vez.
  const MIN_TRIGRAMA_COMUNS = 12;
  const MAX_CANDIDATOS_POR_TRIGRAMA = 400;
  const out = [];
  for (let i = 0; i < stringsLongas.length; i++) {
    const contagem = new Map();
    for (const g of sets[i]) {
      const lista = indice.get(g);
      if (!lista || lista.length < 2 || lista.length > MAX_CANDIDATOS_POR_TRIGRAMA) continue;
      for (const j of lista) {
        if (j <= i) continue;
        contagem.set(j, (contagem.get(j) || 0) + 1);
      }
    }
    for (const [j, comuns] of contagem) {
      if (comuns < MIN_TRIGRAMA_COMUNS) continue;
      const sim = jaccard(sets[i], sets[j]);
      if (sim >= limiar) {
        out.push({
          a: `${stringsLongas[i].id}.${stringsLongas[i].campo}`,
          b: `${stringsLongas[j].id}.${stringsLongas[j].campo}`,
          mesmoRegistro: stringsLongas[i].id === stringsLongas[j].id,
          similaridade: sim,
          trecho: stringsLongas[i].original
        });
      }
    }
  }
  return out;
}

// -------------------------------------------------- mínimos do contrato
export const MIN_EXEMPLO = {
  problema: 80, dados: 60, estrategia: 80, resultado: 60, justificativa: 100, variacao: 80
};

export const MIN_RESUMO = {
  conceitos: 3, regras: 2, comparacoes: 1, fluxos: 1, excecoes: 1, palavrasChave: 4, checklist: 4
};

export const NIVEIS_KEYS = ['iniciante', 'intermediario', 'avancado', 'especialista'];
export const DIFICULDADES = ['iniciante', 'intermediario', 'avancado', 'especialista'];
export const CLASSIFICACOES = ['alta', 'media', 'baixa'];
export const TIPOS_EXEMPLO = ['introducao', 'aplicacao', 'erro'];
