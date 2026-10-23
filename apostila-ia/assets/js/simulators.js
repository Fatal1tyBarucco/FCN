/* ==========================================================================
 * Simulador Excel — Módulo 1 (Seções 1.3 e 7.1 da Escrita.txt)
 * Apostila Web Interativa FCN — incremental, sem build, compatível com file://
 * ==========================================================================
 *
 * O QUE ESTE ARQUIVO É
 *   Núcleo didático de avaliação de fórmulas em sintaxe pt-BR do Excel.
 *   Parser próprio (tokenizer + descida recursiva + avaliador). NÃO usa
 *   `eval` nem `new Function` em nenhum ponto.
 *
 * FUNÇÕES SUPORTADAS (com busca/cálculo reais — ver smoke test no fim do
 * desenvolvimento; nenhum resultado é "simulado" com string de aviso)
 *   Matemáticas/estatísticas: SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO,
 *     CONT.VALORES.
 *   Lógicas/condicionais: SE, SES, E, OU, NÃO, SEERRO (SE e SEERRO avaliam
 *     preguiçosamente apenas o ramo usado — como o Excel).
 *   Condicional com critério: CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIASE.
 *     Critérios aceitam operadores: >=, <=, <>, >, <, = ou igualdade simples
 *     numérica/textual (ex.: ">=7", "aprovado").
 *   Pesquisa e referência: PROCV (busca vertical real, exata e aproximada),
 *     PROCH (busca horizontal real), PROCX (busca moderna real, exato por
 *     padrão, com argumento "se_não_encontrado"), CORRESP, ÍNDICE.
 *   Data: HOJE (data real do sistema no formato AAAA/MM/DD).
 *   Operadores: + - * / ^ & % (porcentagem) e = <> < > <= >=, com precedência
 *     do Excel (ex.: -2^2 = 4; 2^3^2 = 512; 5+10% = 5,1).
 *
 * ALIASES EM INGLÊS (22 aliases — contagem real de aliasEmingles; apenas os
 *   listados; nomes pt-BR são a sintaxe primária)
 *   SUM=SOMA · AVERAGE=MÉDIA · MEDIAN=MEDIANA · MAX=MÁXIMO · MIN=MÍNIMO ·
 *   COUNTA=CONT.VALORES · IF=SE · AND=E · OR=OU · NOT=NÃO · IFERROR=SEERRO ·
 *   COUNTIF=CONT.SE · COUNTIFS=CONT.SES · SUMIF=SOMASE · SUMIFS=SOMASES ·
 *   AVERAGEIF=MÉDIASE · VLOOKUP=PROCV · HLOOKUP=PROCH · XLOOKUP=PROCX ·
 *   MATCH=CORRESP · INDEX=ÍNDICE · TODAY=HOJE
 *   Nomes são normalizados sem acento e sem ponto ("MÉDIA"="MEDIA",
 *   "CONT.SE"="CONTSE", "NÃO"="NAO").
 *
 * SEPARADOR REGIONAL (regra de desambiguação — declarada e testada)
 *   1. Se a fórmula contiver ";" fora de textos entre aspas, o modo é
 *      "pt-BR": ";" separa argumentos e "," OU "." são decimais.
 *      Ex.: SOMA(1,5; 2,5) = 4 · PROCX(20; A1:A3; B1:B3; "n/a"; 0)
 *   2. Caso contrário o modo é "internacional": "," separa argumentos e
 *      apenas "." é decimal. Ex.: SOMA(1.5, 2.5) = 4.
 *      Consequência declarada: SOMA(1,5) sem ";" = 1+5 = 6 (dois argumentos).
 *   Não há suporte a separador de milhar. Textos ficam entre aspas duplas
 *   ("" para escapar aspas, como no Excel).
 *
 * REFERÊNCIAS E CÉLULAS (Seção 1.3 — referências relativas, absolutas, mistas)
 *   Há SUporte a células via modelo em memória: ExcelSimulator.criarPlanilha()
 *   aceita literais e fórmulas em refs A1, com $A$1 (absoluta), $A1/B$2
 *   (mistas) e intervalos A1:B5. Recálculo é automático: alterar um valor
 *   invalida o cache e a próxima leitura reavalia as fórmulas dependentes.
 *   ExcelSimulator.ajustarFormulaAoCopiar(formula; origem; destino) ajusta
 *   as partes relativas ao copiar uma fórmula (trava $ preservada; mistas
 *   ajustam apenas o eixo relativo) — regra real do Excel.
 *   SEM suporte (limitação declarada, não fingimos ter): tabelas estruturadas
 *   (Tabela1[Coluna]), nomes definidos, referência R1C1, matrizes dinâmicas,
 *   spilling, LET/LAMBDA/PROCVxm, macros, formatação de célula, e fórmulas
 *   que dependam de outro arquivo/pasta de trabalho.
 *
 * TIPOS E ERROS (códigos no padrão Excel)
 *   #N/A   valor não encontrado (PROCV/PROCH/PROCX/CORRESP; PROCV e PROCX
 *          aceitam retorno customizado de "se_não_encontrado" no PROCX).
 *   #REF!  referência inválida (índice fora do intervalo; referência a
 *          célula sem planilha ativa; referência circular detectada).
 *   #VAL!  tipo incompatível (texto não numérico em operação aritmética,
 *          condição não lógica, sintaxe inválida em tempo de execução).
 *   #DIV/0! divisão por zero e média sem números.
 *   #NUM!  operação sem resultado numérico (ex.: MEDIANA sem valores).
 *   Entradas inválidas são REJEITADAS ANTES da execução com mensagem que
 *   começa com "ERRO DE ENTRADA" e explica o motivo (sem comparar strings
 *   como se fosse o mecanismo completo do Excel — Seção 1.3).
 *   Retorno de calcularFormula(): number | string | boolean | ErroExcel |
 *   string "ERRO DE ENTRADA...". Use formatarValor() para exibição pt-BR.
 *
 * DIFERENÇAS DECLARADAS EM RELAÇÃO AO EXCEL REAL
 *   - Correspondência aproximada (PROCV/PROCH padrão; PROCX com modo 1;
 *     CORRESP tipo 1/-1) NÃO valida a ordenação da tabela: segue a semântica
 *     "último valor <= alvo" (crescente) ou "primeiro valor >= alvo"
 *     (decrescente, CORRESP tipo -1), como o Excel — com tabela desordenada
 *     o resultado é imprevisível nos dois.
 *   - Células vazias em critérios (CONT.SE/SOMASE/...): nunca casam com
 *     critérios numéricos (no Excel, vazio conta como 0 em "="0) e equivalem
 *     a texto vazio na igualdade textual.
 *   - Concatenação & formata números com vírgula decimal (padrão pt-BR do
 *     simulador); o Excel usa o formato "Geral" da região.
 *   - Comparações encadeadas (1=1=1) são avaliadas da esquerda para a
 *     direita; o Excel rejeita a sintaxe.
 *   - CONT.VALORES conta células cujo valor é texto vazio como vazias
 *     (diferença pontual em relação ao CONT.VALORES real, que as conta).
 *   - Sem suporte a arrays matriciais dinâmicos: PROCX devolve valor único.
 *
 * PERSISTÊNCIA/EXECUÇÃO
 *   Não executa nada no SO; não usa rede; não usa eval. Núcleo puro em JS.
 *   Verificado com `node --check` e smoke test em Node/vm (arquivo temporário
 *   fora do repositório) — não testado em navegador real neste turno.
 * ========================================================================== */
(function (global) {
  "use strict";

  /* ------------------------------------------------------------------
   * 1. Valor de erro (estilo Excel)
   * ------------------------------------------------------------------ */
  function ErroExcel(codigo, detalhe) {
    this.codigo = codigo;
    this.detalhe = detalhe || "";
  }
  ErroExcel.prototype.toString = function () { return this.codigo; };
  function erro(codigo, detalhe) { return new ErroExcel(codigo, detalhe); }
  function isErro(v) { return v instanceof ErroExcel; }

  /* Erros de ENTRADA (antes da execução) — levantados pelo analisador. */
  function ErroEntrada(message, pos) {
    this.name = "ErroEntrada";
    this.message = message + (pos !== undefined ? ` (posição ${pos})` : "");
    this.pos = pos;
  }

  /* ------------------------------------------------------------------
   * 2. Utilidades de valor e nome
   * ------------------------------------------------------------------ */
  function normalizarNome(s) {
    return String(s)
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/\./g, "")
      .toUpperCase();
  }

  /* Converte para número aceitando vírgula ou ponto decimal; NaN se falhar. */
  function converterNumero(v) {
    if (typeof v === "number") return v;
    if (typeof v === "boolean") return v ? 1 : 0;
    if (v === null || v === undefined) return NaN;
    const s = String(v).trim();
    if (s === "") return NaN;
    if (/^-?\d+([.,]\d+)?$/.test(s)) return parseFloat(s.replace(",", "."));
    return NaN;
  }

  function ehInteiro(n) { return typeof n === "number" && Number.isInteger(n); }

  function formatarValor(v) {
    if (isErro(v)) return v.detalhe ? `${v.codigo} — ${v.detalhe}` : v.codigo;
    if (typeof v === "boolean") return v ? "VERDADEIRO" : "FALSO";
    if (typeof v === "number") {
      if (!isFinite(v)) return "#NUM!";
      return String(parseFloat(v.toPrecision(12))).replace(".", ",");
    }
    if (v === null || v === undefined) return "";
    if (v && v.__intervalo) return v.valores.map(formatarValor).join("; ");
    return String(v);
  }

  /* Comparação com semântica simplificada e DECLARADA do Excel:
   * tipos ordenados número < texto < lógico; texto sem distinção de
   * maiúsculas; célula vazia vale 0 em comparação numérica e "" em texto. */
  function tipoComparavel(v) {
    if (v === null || v === undefined || v === "") return "vazio";
    if (typeof v === "number") return "num";
    if (typeof v === "boolean") return "log";
    return "txt";
  }
  function normalizarParaComparacao(v, outro) {
    if (v === null || v === undefined) {
      const t = tipoComparavel(outro);
      if (t === "num") return 0;
      if (t === "log") return false;
      return "";
    }
    if (v === "") {
      const t = tipoComparavel(outro);
      if (t === "num") return 0;
      if (t === "log") return false;
      return "";
    }
    return v;
  }
  function comparar(a, b) {
    const na = normalizarParaComparacao(a, b);
    const nb = normalizarParaComparacao(b, a);
    const ta = tipoComparavel(na) === "vazio" ? "num" : tipoComparavel(na);
    const tb = tipoComparavel(nb) === "vazio" ? "num" : tipoComparavel(nb);
    const ordem = { num: 0, txt: 1, log: 2 };
    if (ta !== tb) return ordem[ta] < ordem[tb] ? -1 : 1;
    if (ta === "num") return na < nb ? -1 : na > nb ? 1 : 0;
    if (ta === "txt") {
      const x = String(na).toLowerCase();
      const y = String(nb).toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    }
    const xa = na ? 1 : 0;
    const xb = nb ? 1 : 0;
    return xa < xb ? -1 : xa > xb ? 1 : 0;
  }
  function igual(a, b) { return comparar(a, b) === 0; }

  /* Coerção aritmética: número direto; lógico vira 1/0; vazio vira 0;
   * texto numérico (aceitando vírgula) é convertido; texto comum -> #VAL!. */
  function paraNumero(v, contexto) {
    if (isErro(v)) return v;
    if (typeof v === "number") return v;
    if (typeof v === "boolean") return v ? 1 : 0;
    if (v === null || v === undefined) return 0;
    const n = converterNumero(v);
    if (!Number.isNaN(n)) return n;
    return erro("#VAL!", `"${v}" não é numérico${contexto ? ` em ${contexto}` : ""}`);
  }

  /* Coerção lógica: lógico direto; número (0 = falso); vazio = falso;
   * texto -> #VAL! (o Excel também recusa texto em SE/E/OU/NÃO). */
  function paraLogico(v, contexto) {
    if (isErro(v)) return v;
    if (typeof v === "boolean") return v;
    if (typeof v === "number") return v !== 0;
    if (v === null || v === undefined) return false;
    return erro("#VAL!", `condição lógica esperada${contexto ? ` em ${contexto}` : ""}, recebido texto "${v}"`);
  }

  /* Intervalo interno: {__intervalo, linhas, colunas, valores[linhas*colunas]} */
  function paraIntervalo(v) {
    if (v && v.__intervalo) return v;
    if (Array.isArray(v)) {
      if (v.length && Array.isArray(v[0])) {
        const linhas = v.length;
        const colunas = v[0].length;
        const plana = [];
        for (let i = 0; i < linhas; i++) {
          if (!Array.isArray(v[i]) || v[i].length !== colunas) {
            return erro("#VAL!", "matriz irregular: todas as linhas devem ter o mesmo tamanho");
          }
          for (let j = 0; j < colunas; j++) plana.push(v[i][j] === undefined ? null : v[i][j]);
        }
        return { __intervalo: true, linhas: linhas, colunas: colunas, valores: plana };
      }
      return { __intervalo: true, linhas: v.length, colunas: 1, valores: v.slice() };
    }
    return erro("#VAL!", "esperado um intervalo (ex.: A1:B5) ou lista de valores");
  }
  function celulaEm(mat, r, c) { return mat.valores[(r - 1) * mat.colunas + (c - 1)]; }
  function listaDe(arg) {
    if (arg && arg.__intervalo) return arg.valores;
    return Array.isArray(arg) ? arg : [arg];
  }

  /* Números a partir de argumentos (como no Excel): texto e vazio em
   * intervalos são ignorados; erro no intervalo propaga; argumento literal
   * não numérico gera #VAL!. */
  function paraNumeros(args) {
    const saida = [];
    for (let k = 0; k < args.length; k++) {
      const arg = args[k];
      const ehIntervalo = (arg && arg.__intervalo) || Array.isArray(arg);
      const lista = listaDe(arg);
      for (let i = 0; i < lista.length; i++) {
        const v = lista[i];
        if (isErro(v)) return v;
        if (v === null || v === undefined || v === "") continue;
        if (typeof v === "number") { saida.push(v); continue; }
        if (typeof v === "boolean") { if (!ehIntervalo) saida.push(v ? 1 : 0); continue; }
        if (!ehIntervalo) {
          const n = converterNumero(v);
          if (Number.isNaN(n)) return erro("#VAL!", `argumento "${v}" não é numérico`);
          saida.push(n);
        }
      }
    }
    return saida;
  }

  /* ------------------------------------------------------------------
   * 3. Critérios (CONT.SE, SOMASE, MÉDIASE, ... )
   * ------------------------------------------------------------------ */
  function criarCriterio(c) {
    if (isErro(c)) return c;
    if (c && (c.__intervalo || Array.isArray(c))) {
      return erro("#VAL!", "critério não pode ser um intervalo");
    }
    if (typeof c === "number" || typeof c === "boolean" || c === null || c === undefined) {
      const alvo = typeof c === "boolean" ? (c ? 1 : 0) : (typeof c === "number" ? c : null);
      return {
        pred: function (v) {
          if (v === null || v === undefined || v === "") return false; // vazio nunca casa com numérico (declarado)
          if (alvo === null) return v === null || v === "";
          const n = converterNumero(v);
          return !Number.isNaN(n) && n === alvo;
        }
      };
    }
    const texto = String(c);
    let op = "=";
    let resto = texto;
    const m = /^(>=|<=|<>|=|>|<)/.exec(texto);
    if (m) { op = m[0]; resto = texto.slice(m[0].length); }
    const alvoNum = converterNumero(resto);
    const alvoNumerico = resto.trim() !== "" && !Number.isNaN(alvoNum);
    if (op === "=" || op === "<>") {
      const negado = op === "<>";
      return {
        pred: function (v) {
          if (alvoNumerico) {
            if (v === null || v === undefined || v === "") return false;
            const n = converterNumero(v);
            if (Number.isNaN(n)) return negado;
            return negado ? n !== alvoNum : n === alvoNum;
          }
          const eq = texto === "" ? (v === null || v === undefined || v === "")
                                  : (typeof v === "string" && v.toLowerCase() === resto.toLowerCase());
          return negado ? !eq : eq;
        }
      };
    }
    /* Operadores relacionais: >=, <=, >, < */
    return {
      pred: function (v) {
        if (v === null || v === undefined || v === "") return false; // vazio ignorado (declarado)
        const cmp = comparar(v, alvoNumerico ? alvoNum : resto);
        if (op === ">=") return cmp >= 0;
        if (op === "<=") return cmp <= 0;
        if (op === ">") return cmp > 0;
        return cmp < 0; // "<"
      }
    };
  }

  /* ------------------------------------------------------------------
   * 4. Funções (chave = nome normalizado sem acento/ponto)
   * ------------------------------------------------------------------ */
  function fnSoma(args) {
    const nums = paraNumeros(args);
    if (isErro(nums)) return nums;
    return nums.reduce(function (s, v) { return s + v; }, 0);
  }
  function fnMedia(args) {
    const nums = paraNumeros(args);
    if (isErro(nums)) return nums;
    if (!nums.length) return erro("#DIV/0!", "MÉDIA sem valores numéricos");
    return nums.reduce(function (s, v) { return s + v; }, 0) / nums.length;
  }
  function fnMediana(args) {
    const nums = paraNumeros(args);
    if (isErro(nums)) return nums;
    if (!nums.length) return erro("#NUM!", "MEDIANA sem valores numéricos");
    const v = nums.slice().sort(function (a, b) { return a - b; });
    const m = Math.floor(v.length / 2);
    return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
  }
  function fnMaximo(args) {
    const nums = paraNumeros(args);
    if (isErro(nums)) return nums;
    return nums.length ? Math.max.apply(null, nums) : 0; // Excel: 0 quando vazio
  }
  function fnMinimo(args) {
    const nums = paraNumeros(args);
    if (isErro(nums)) return nums;
    return nums.length ? Math.min.apply(null, nums) : 0;
  }
  function fnContValores(args) {
    let n = 0;
    for (let k = 0; k < args.length; k++) {
      const lista = listaDe(args[k]);
      for (let i = 0; i < lista.length; i++) {
        if (isErro(lista[i])) return lista[i];
        const v = lista[i];
        if (v !== null && v !== undefined && v !== "") n++;
      }
    }
    return n;
  }
  function fnSe(args) {
    if (args.length < 3) return erro("#VAL!", "SE requer (condição; valor_se_verdadeiro; valor_se_falso)");
    const c = paraLogico(args[0], "SE");
    if (isErro(c)) return c;
    return c ? args[1] : args[2];
  }
  function fnSeErro(args) {
    if (args.length < 2) return erro("#VAL!", "SEERRO requer (valor; valor_se_erro)");
    return isErro(args[0]) ? args[1] : args[0];
  }
  function fnE(args) {
    if (args.length < 1) return erro("#VAL!", "E requer ao menos um argumento");
    let r = true;
    for (let i = 0; i < args.length; i++) {
      for (const v of listaDe(args[i])) {
        const c = paraLogico(v, "E");
        if (isErro(c)) return c;
        if (!c) r = false;
      }
    }
    return r;
  }
  function fnOu(args) {
    if (args.length < 1) return erro("#VAL!", "OU requer ao menos um argumento");
    let r = false;
    for (let i = 0; i < args.length; i++) {
      for (const v of listaDe(args[i])) {
        const c = paraLogico(v, "OU");
        if (isErro(c)) return c;
        if (c) r = true;
      }
    }
    return r;
  }
  function fnNao(args) {
    if (args.length !== 1) return erro("#VAL!", "NÃO requer exatamente um argumento");
    const c = paraLogico(args[0], "NÃO");
    if (isErro(c)) return c;
    return !c;
  }

  function exigirIntervalo(v, nome) {
    if (isErro(v)) return v;
    const mat = paraIntervalo(v);
    if (isErro(mat)) return erro("#VAL!", `${nome} exige um intervalo — ${mat.detalhe}`);
    return mat;
  }
  function fnContSE(args) {
    if (args.length < 2) return erro("#VAL!", "CONT.SE requer (intervalo; critério)");
    const mat = exigirIntervalo(args[0], "CONT.SE");
    if (isErro(mat)) return mat;
    const crit = criarCriterio(args[1]);
    if (isErro(crit)) return crit;
    let n = 0;
    for (let i = 0; i < mat.valores.length; i++) {
      if (isErro(mat.valores[i])) return mat.valores[i];
      if (crit.pred(mat.valores[i])) n++;
    }
    return n;
  }
  function fnContSES(args) {
    if (args.length < 2 || args.length % 2 !== 0) {
      return erro("#VAL!", "CONT.SES requer pares (intervalo; critério; ...)");
    }
    const mats = [];
    const crits = [];
    let tamanho = -1;
    for (let k = 0; k < args.length; k += 2) {
      const mat = exigirIntervalo(args[k], "CONT.SES");
      if (isErro(mat)) return mat;
      if (tamanho === -1) tamanho = mat.valores.length;
      else if (mat.valores.length !== tamanho) return erro("#VAL!", "CONT.SES: intervalos de tamanhos diferentes");
      const crit = criarCriterio(args[k + 1]);
      if (isErro(crit)) return crit;
      mats.push(mat);
      crits.push(crit);
    }
    let n = 0;
    for (let i = 0; i < tamanho; i++) {
      let bate = true;
      for (let k = 0; k < mats.length; k++) {
        const v = mats[k].valores[i];
        if (isErro(v)) return v;
        if (!crits[k].pred(v)) { bate = false; break; }
      }
      if (bate) n++;
    }
    return n;
  }
  function somarOnde(args, nome, requerSomaExplicita) {
    if (args.length < 2) return erro("#VAL!", `${nome} requer ao menos (intervalo; critério)`);
    const mat = exigirIntervalo(args[0], nome);
    if (isErro(mat)) return mat;
    const crit = criarCriterio(args[1]);
    if (isErro(crit)) return crit;
    let matSoma = mat;
    if (args.length >= 3) {
      matSoma = exigirIntervalo(args[2], nome);
      if (isErro(matSoma)) return matSoma;
      if (matSoma.valores.length !== mat.valores.length) {
        return erro("#VAL!", `${nome}: intervalo de soma com tamanho diferente do intervalo de critério`);
      }
    } else if (requerSomaExplicita) {
      return erro("#VAL!", `${nome} requer (intervalo_soma; intervalo; critério; ...)`);
    }
    let soma = 0;
    for (let i = 0; i < mat.valores.length; i++) {
      const vc = mat.valores[i];
      if (isErro(vc)) return vc;
      const vs = matSoma.valores[i];
      if (isErro(vs)) return vs;
      if (!crit.pred(vc)) continue;
      if (typeof vs === "number") soma += vs;
      else if (typeof vs === "boolean") soma += vs ? 1 : 0;
      else if (vs !== null && vs !== undefined && vs !== "") {
        const n = converterNumero(vs);
        if (Number.isNaN(n)) return erro("#VAL!", `"${vs}" não é numérico no intervalo de soma`);
        soma += n;
      }
    }
    return soma;
  }
  function fnSomaSE(args) { return somarOnde(args, "SOMASE", false); }
  function fnSomaSES(args) {
    if (args.length < 3 || args.length % 2 === 0) {
      return erro("#VAL!", "SOMASES requer (intervalo_soma; par_intervalo_critério; ...)");
    }
    const matSoma0 = exigirIntervalo(args[0], "SOMASES");
    if (isErro(matSoma0)) return matSoma0;
    const matSoma = matSoma0;
    const mats = [];
    const crits = [];
    for (let k = 1; k < args.length; k += 2) {
      const mat = exigirIntervalo(args[k], "SOMASES");
      if (isErro(mat)) return mat;
      if (mat.valores.length !== matSoma.valores.length) {
        return erro("#VAL!", "SOMASES: intervalos de tamanhos diferentes");
      }
      const crit = criarCriterio(args[k + 1]);
      if (isErro(crit)) return crit;
      mats.push(mat);
      crits.push(crit);
    }
    let soma = 0;
    for (let i = 0; i < matSoma.valores.length; i++) {
      let bate = true;
      for (let k = 0; k < mats.length; k++) {
        const v = mats[k].valores[i];
        if (isErro(v)) return v;
        if (!crits[k].pred(v)) { bate = false; break; }
      }
      if (!bate) continue;
      const vs = matSoma.valores[i];
      if (isErro(vs)) return vs;
      if (typeof vs === "number") soma += vs;
      else if (typeof vs === "boolean") soma += vs ? 1 : 0;
      else if (vs !== null && vs !== undefined && vs !== "") {
        const n = converterNumero(vs);
        if (Number.isNaN(n)) return erro("#VAL!", `"${vs}" não é numérico no intervalo de soma`);
        soma += n;
      }
    }
    return soma;
  }
  function fnMediaSE(args) {
    if (args.length < 2) return erro("#VAL!", "MÉDIASE requer (intervalo; critério; [intervalo_média])");
    const mat = exigirIntervalo(args[0], "MÉDIASE");
    if (isErro(mat)) return mat;
    const crit = criarCriterio(args[1]);
    if (isErro(crit)) return crit;
    let matMedia = mat;
    if (args.length >= 3) {
      matMedia = exigirIntervalo(args[2], "MÉDIASE");
      if (isErro(matMedia)) return matMedia;
      if (matMedia.valores.length !== mat.valores.length) {
        return erro("#VAL!", "MÉDIASE: intervalo de média com tamanho diferente do intervalo de critério");
      }
    }
    let soma = 0;
    let n = 0;
    for (let i = 0; i < mat.valores.length; i++) {
      const vc = mat.valores[i];
      if (isErro(vc)) return vc;
      const vm = matMedia.valores[i];
      if (isErro(vm)) return vm;
      if (!crit.pred(vc)) continue;
      if (typeof vm === "number") { soma += vm; n++; }
      else if (typeof vm === "boolean") { soma += vm ? 1 : 0; n++; }
      else if (vm !== null && vm !== undefined && vm !== "") {
        const num = converterNumero(vm);
        if (Number.isNaN(num)) return erro("#VAL!", `"${vm}" não é numérico no intervalo de média`);
        soma += num;
        n++;
      }
    }
    if (!n) return erro("#DIV/0!", "MÉDIASE sem valores que atendam ao critério");
    return soma / n;
  }

  /* --- Pesquisa e referência (busca real) --- */
  function validarIndice(idx, maximo, nome) {
    if (isErro(idx)) return idx;
    const n = converterNumero(idx);
    if (Number.isNaN(n) || !ehInteiro(n) || n < 1 || n > maximo) {
      return erro("#REF!", `${nome}: índice ${formatarValor(idx)} fora do intervalo (1–${maximo})`);
    }
    return n;
  }
  /* Último valor numérico <= alvo (correspondência aproximada crescente). */
  function ultimaPosicaoAte(mat, eixo, alvoNum, alvoEhNumerico) {
    let pos = 0;
    const total = eixo === "coluna" ? mat.linhas : mat.colunas;
    for (let i = 1; i <= total; i++) {
      const v = eixo === "coluna" ? celulaEm(mat, i, 1) : celulaEm(mat, 1, i);
      if (isErro(v)) return { erro: v };
      if (typeof v !== "number") continue; // texto/nulo nunca participam da aproximada
      if (alvoEhNumerico && v <= alvoNum) pos = i;
    }
    return { pos: pos };
  }
  function fnProcv(args) {
    if (args.length < 3) {
      return erro("#VAL!", "PROCV requer (valor_procurado; matriz; índice_coluna; [intervalo_verdadeiro])");
    }
    const mat = exigirIntervalo(args[1], "PROCV");
    if (isErro(mat)) return mat;
    if (mat.colunas < 2) return erro("#REF!", "PROCV: matriz precisa de ao menos 2 colunas (1ª busca, demais resultado)");
    const idx = validarIndice(args[2], mat.colunas, "PROCV");
    if (isErro(idx)) return idx;
    let exato = false; // padrão do Excel: aproximado (VERDADEIRO)
    if (args.length >= 4) {
      const l = paraLogico(args[3], "PROCV");
      if (isErro(l)) return l;
      exato = !l;
    }
    const alvo = args[0];
    if (isErro(alvo)) return alvo;
    if (exato) {
      for (let r = 1; r <= mat.linhas; r++) {
        const v = celulaEm(mat, r, 1);
        if (isErro(v)) return v;
        if (igual(v, alvo)) return celulaEm(mat, r, idx);
      }
      return erro("#N/A", `valor ${formatarValor(alvo)} não encontrado na 1ª coluna (correspondência exata)`);
    }
    const alvoNum = converterNumero(alvo);
    const busca = ultimaPosicaoAte(mat, "coluna", alvoNum, !Number.isNaN(alvoNum));
    if (busca.erro) return busca.erro;
    if (!busca.pos) {
      return erro("#N/A", `nenhum valor menor ou igual a ${formatarValor(alvo)} — correspondência aproximada exige 1ª coluna numérica em ordem crescente`);
    }
    return celulaEm(mat, busca.pos, idx);
  }
  function fnProch(args) {
    if (args.length < 3) {
      return erro("#VAL!", "PROCH requer (valor_procurado; matriz; índice_linha; [intervalo_verdadeiro])");
    }
    const mat = exigirIntervalo(args[1], "PROCH");
    if (isErro(mat)) return mat;
    if (mat.linhas < 2) return erro("#REF!", "PROCH: matriz precisa de ao menos 2 linhas (1ª busca, demais resultado)");
    const idx = validarIndice(args[2], mat.linhas, "PROCH");
    if (isErro(idx)) return idx;
    let exato = false;
    if (args.length >= 4) {
      const l = paraLogico(args[3], "PROCH");
      if (isErro(l)) return l;
      exato = !l;
    }
    const alvo = args[0];
    if (isErro(alvo)) return alvo;
    if (exato) {
      for (let c = 1; c <= mat.colunas; c++) {
        const v = celulaEm(mat, 1, c);
        if (isErro(v)) return v;
        if (igual(v, alvo)) return celulaEm(mat, idx, c);
      }
      return erro("#N/A", `valor ${formatarValor(alvo)} não encontrado na 1ª linha (correspondência exata)`);
    }
    const alvoNum = converterNumero(alvo);
    const busca = ultimaPosicaoAte(mat, "linha", alvoNum, !Number.isNaN(alvoNum));
    if (busca.erro) return busca.erro;
    if (!busca.pos) {
      return erro("#N/A", `nenhum valor menor ou igual a ${formatarValor(alvo)} — correspondência aproximada exige 1ª linha numérica em ordem crescente`);
    }
    return celulaEm(mat, idx, busca.pos);
  }
  function fnProcx(args) {
    if (args.length < 3) {
      return erro("#VAL!", "PROCX requer (valor_procurado; intervalo_busca; intervalo_retorno; [se_não_encontrado]; [modo_correspondência])");
    }
    const busca = exigirIntervalo(args[1], "PROCX");
    if (isErro(busca)) return busca;
    const retorno = exigirIntervalo(args[2], "PROCX");
    if (isErro(retorno)) return retorno;
    const buscaEhColuna = busca.colunas === 1 && busca.linhas >= 1;
    const buscaEhLinha = busca.linhas === 1 && busca.colunas >= 1;
    const retornoEhColuna = retorno.colunas === 1;
    const retornoEhLinha = retorno.linhas === 1;
    if (!buscaEhColuna && !buscaEhLinha) {
      return erro("#VAL!", "PROCX: intervalo_busca deve ser uma coluna OU linha única");
    }
    if (buscaEhColuna !== retornoEhColuna || buscaEhLinha !== retornoEhLinha || busca.valores.length !== retorno.valores.length) {
      return erro("#VAL!", "PROCX: intervalo_retorno deve ter a mesma forma e tamanho do intervalo_busca");
    }
    let modo = 0; // padrão do PROCX: exato
    if (args.length >= 5) {
      const m = args[4];
      if (isErro(m)) return m;
      if (typeof m === "boolean") modo = m ? 1 : 0;
      else if (typeof m === "number") modo = m;
      else if (typeof m === "string") {
        const nm = normalizarNome(m);
        if (nm === "EXATO") modo = 0;
        else if (nm === "APROXIMADO") modo = 1;
      }
      if (modo !== 0 && modo !== 1) {
        return erro("#VAL!", "PROCX: modo_correspondência aceita apenas 0 (exato, padrão) ou 1 (aproximado, exige ordenação crescente)");
      }
    }
    const alvo = args[0];
    if (isErro(alvo)) return alvo;
    const total = busca.valores.length;
    if (modo === 0) {
      for (let i = 0; i < total; i++) {
        const v = busca.valores[i];
        if (isErro(v)) return v;
        if (igual(v, alvo)) return retorno.valores[i];
      }
    } else {
      const alvoNum = converterNumero(alvo);
      const mat1 = { __intervalo: true, linhas: buscaEhColuna ? total : 1, colunas: buscaEhColuna ? 1 : total, valores: busca.valores };
      const r = ultimaPosicaoAte(mat1, buscaEhColuna ? "coluna" : "linha", alvoNum, !Number.isNaN(alvoNum));
      if (r.erro) return r.erro;
      if (r.pos) return retorno.valores[r.pos - 1];
    }
    if (args.length >= 4 && args[3] !== undefined) return args[3];
    return erro("#N/A", `valor ${formatarValor(alvo)} não encontrado (PROCX correspondência ${modo === 0 ? "exata" : "aproximada"})`);
  }
  function fnCorresp(args) {
    if (args.length < 2) return erro("#VAL!", "CORRESP requer (valor_procurado; vetor; [tipo])");
    const vet = exigirIntervalo(args[1], "CORRESP");
    if (isErro(vet)) return vet;
    if (!(vet.colunas === 1 || vet.linhas === 1)) {
      return erro("#VAL!", "CORRESP: vetor deve ser uma coluna OU linha única");
    }
    let tipo = 1; // padrão do Excel: aproximado crescente
    if (args.length >= 3) {
      const t = converterNumero(args[2]);
      if (isErro(args[2])) return args[2];
      if (Number.isNaN(t) || ![ -1, 0, 1 ].includes(t)) {
        return erro("#VAL!", "CORRESP: tipo aceita 1 (crescente), 0 (exato) ou -1 (decrescente)");
      }
      tipo = t;
    }
    const alvo = args[0];
    if (isErro(alvo)) return alvo;
    const total = vet.valores.length;
    if (tipo === 0) {
      for (let i = 0; i < total; i++) {
        const v = vet.valores[i];
        if (isErro(v)) return v;
        if (igual(v, alvo)) return i + 1;
      }
      return erro("#N/A", `valor ${formatarValor(alvo)} não encontrado (CORRESP exato)`);
    }
    const alvoNum = converterNumero(alvo);
    if (Number.isNaN(alvoNum)) {
      return erro("#N/A", "CORRESP aproximado exige valor_procurado numérico");
    }
    if (tipo === 1) {
      let pos = 0;
      for (let i = 0; i < total; i++) {
        const v = vet.valores[i];
        if (isErro(v)) return v;
        if (typeof v === "number" && v <= alvoNum) pos = i + 1;
      }
      if (!pos) return erro("#N/A", "nenhum valor menor ou igual (vetor deve estar em ordem crescente)");
      return pos;
    }
    /* tipo -1: decrescente — primeiro valor >= alvo */
    for (let i = 0; i < total; i++) {
      const v = vet.valores[i];
      if (isErro(v)) return v;
      if (typeof v === "number" && v >= alvoNum) return i + 1;
    }
    return erro("#N/A", "nenhum valor maior ou igual (vetor deve estar em ordem decrescente)");
  }
  function fnIndice(args) {
    if (args.length < 2) return erro("#VAL!", "ÍNDICE requer (intervalo; linha; [coluna])");
    const mat = exigirIntervalo(args[0], "ÍNDICE");
    if (isErro(mat)) return mat;
    if (args.length === 2 && (mat.colunas === 1 || mat.linhas === 1)) {
      const idx = validarIndice(args[1], mat.valores.length, "ÍNDICE");
      if (isErro(idx)) return idx;
      return mat.valores[idx - 1];
    }
    const linha = validarIndice(args[1], mat.linhas, "ÍNDICE");
    if (isErro(linha)) return linha;
    const coluna = args.length >= 3 ? validarIndice(args[2], mat.colunas, "ÍNDICE") : 1;
    if (isErro(coluna)) return coluna;
    return celulaEm(mat, linha, coluna);
  }
  function fnHoje() {
    const d = new Date();
    const p = function (x) { return String(x).padStart(2, "0"); };
    return `${d.getFullYear()}/${p(d.getMonth() + 1)}/${p(d.getDate())}`;
  }

  const funcoesSuportadas = {
    SOMA: fnSoma,
    MEDIA: fnMedia,
    MEDIANA: fnMediana,
    MAXIMO: fnMaximo,
    MINIMO: fnMinimo,
    CONTVALORES: fnContValores,
    SE: fnSe,
    SES: fnE,
    E: fnE,
    OU: fnOu,
    NAO: fnNao,
    SEERRO: fnSeErro,
    CONTSE: fnContSE,
    CONTSES: fnContSES,
    SOMASE: fnSomaSE,
    SOMASES: fnSomaSES,
    MEDIASE: fnMediaSE,
    PROCV: fnProcv,
    PROCH: fnProch,
    PROCX: fnProcx,
    CORRESP: fnCorresp,
    INDICE: fnIndice,
    HOJE: fnHoje
  };

  const aliasEmingles = {
    SUM: "SOMA", AVERAGE: "MEDIA", MEDIAN: "MEDIANA", MAX: "MAXIMO", MIN: "MINIMO",
    COUNTA: "CONTVALORES", IF: "SE", AND: "E", OR: "OU", NOT: "NAO",
    IFERROR: "SEERRO", COUNTIF: "CONTSE", COUNTIFS: "CONTSES",
    SUMIF: "SOMASE", SUMIFS: "SOMASES", AVERAGEIF: "MEDIASE",
    VLOOKUP: "PROCV", HLOOKUP: "PROCH", XLOOKUP: "PROCX",
    MATCH: "CORRESP", INDEX: "INDICE", TODAY: "HOJE"
  };

  function resolverFuncao(nome) {
    let chave = normalizarNome(nome);
    if (!funcoesSuportadas[chave]) chave = aliasEmingles[chave] || chave;
    return funcoesSuportadas[chave] ? chave : null;
  }
  function nomesSuportadosTexto() {
    return Object.keys(funcoesSuportadas).join(", ");
  }

  /* ------------------------------------------------------------------
   * 5. Referências A1 / $ (relativas, absolutas, mistas)
   * ------------------------------------------------------------------ */
  function colunaParaNumero(letra) {
    let n = 0;
    const L = letra.toUpperCase();
    for (let i = 0; i < L.length; i++) n = n * 26 + (L.charCodeAt(i) - 64);
    return n;
  }
  function numeroParaColuna(n) {
    let s = "";
    while (n > 0) {
      const r = (n - 1) % 26;
      s = String.fromCharCode(65 + r) + s;
      n = Math.floor((n - 1) / 26);
    }
    return s;
  }
  function interpretarRef(texto) {
    const m = /^\$?([A-Za-z]{1,3})\$?([0-9]{1,7})$/.exec(texto);
    if (!m) return null;
    const col = colunaParaNumero(m[1]);
    const linha = parseInt(m[2], 10);
    if (col < 1 || col > 16384 || linha < 1 || linha > 1048576) return null;
    return {
      absCol: texto.charAt(0) === "$",
      absLinha: /\$[0-9]+$/.test(texto),
      col: col,
      linha: linha,
      letra: m[1].toUpperCase()
    };
  }
  /* Ajusta fórmula ao copiar de `origem` para `destino` (ex.: "B2" -> "C3"):
   * partes relativas deslocam pelo delta; $ trava coluna e/ou linha. */
  function ajustarFormulaAoCopiar(formula, origem, destino) {
    if (typeof formula !== "string") {
      return ExcelSimulator.rejeitaEntradaInvalida("ajustarFormulaAoCopiar", formula);
    }
    const rO = interpretarRef(String(origem));
    const rDest = interpretarRef(String(destino));
    if (!rO || !rDest) {
      return ExcelSimulator.rejeitaEntradaInvalida("ajustarFormulaAoCopiar", `${origem} -> ${destino}`, "origem e destino devem ser refs A1 válidas (ex.: B2, $A$1)");
    }
    const deltaCol = rDest.col - rO.col;
    const deltaLinha = rDest.linha - rO.linha;
    let saida = "";
    let dentroString = false;
    let i = 0;
    const refRe = /\$?[A-Za-z]{1,3}\$?[0-9]{1,7}/y;
    while (i < formula.length) {
      const ch = formula.charAt(i);
      if (ch === '"') { dentroString = !dentroString; saida += ch; i++; continue; }
      if (!dentroString) {
        refRe.lastIndex = i;
        const m = refRe.exec(formula);
        if (m) {
          const r = interpretarRef(m[0]);
          if (r) {
            const novaCol = r.absCol ? r.col : r.col + deltaCol;
            const novaLinha = r.absLinha ? r.linha : r.linha + deltaLinha;
            if (novaCol < 1 || novaLinha < 1 || novaCol > 16384 || novaLinha > 1048576) {
              return `ERRO DE ENTRADA [ajustarFormulaAoCopiar] — cópia de "${origem}" para "${destino}" levaria ${m[0]} além dos limites da planilha (A1..XFD1048576).`;
            }
            saida += (r.absCol ? "$" : "") + numeroParaColuna(novaCol) +
                     (r.absLinha ? "$" : "") + novaLinha;
            i = refRe.lastIndex;
            continue;
          }
        }
      }
      saida += ch;
      i++;
    }
    return saida;
  }

  /* ------------------------------------------------------------------
   * 6. Tokenizador (sem eval) — modo pt-BR (";") ou internacional (",")
   * ------------------------------------------------------------------ */
  function detectarModo(texto) {
    let dentro = false;
    for (let i = 0; i < texto.length; i++) {
      const ch = texto.charAt(i);
      if (ch === '"') {
        if (texto.charAt(i + 1) === '"') { i++; continue; }
        dentro = !dentro;
        continue;
      }
      if (!dentro && ch === ";") {
        return { modo: "pt-BR", sepArgs: ";", aceitaVirgulaDecimal: true };
      }
    }
    return { modo: "internacional", sepArgs: ",", aceitaVirgulaDecimal: false };
  }

  function tokenizar(texto, cfg) {
    const tokens = [];
    let i = 0;
    const n = texto.length;
    const decimais = cfg.aceitaVirgulaDecimal ? [".", ","] : ["."];
    while (i < n) {
      const ch = texto.charAt(i);
      if (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") { i++; continue; }
      if (ch === '"') {
        let j = i + 1;
        let s = "";
        let fechada = false;
        while (j < n) {
          if (texto.charAt(j) === '"') {
            if (texto.charAt(j + 1) === '"') { s += '"'; j += 2; continue; }
            fechada = true;
            break;
          }
          s += texto.charAt(j);
          j++;
        }
        if (!fechada) throw new ErroEntrada("aspas não fechadas no texto literal", i);
        tokens.push({ t: "texto", v: s, pos: i });
        i = j + 1;
        continue;
      }
      if (ch >= "0" && ch <= "9") {
        let j = i;
        while (j < n && texto.charAt(j) >= "0" && texto.charAt(j) <= "9") j++;
        if (j < n && decimais.indexOf(texto.charAt(j)) !== -1 &&
            texto.charAt(j + 1) >= "0" && texto.charAt(j + 1) <= "9") {
          j++;
          while (j < n && texto.charAt(j) >= "0" && texto.charAt(j) <= "9") j++;
        }
        tokens.push({ t: "num", v: parseFloat(texto.slice(i, j).replace(",", ".")), pos: i });
        i = j;
        continue;
      }
      if (/[A-Za-zÀ-ÿ_$]/.test(ch)) {
        const refRe = /^(\$?[A-Za-z]{1,3}\$?[0-9]{1,7})/;
        const mRef = refRe.exec(texto.slice(i));
        if (mRef) {
          const r = interpretarRef(mRef[1]);
          if (!r) throw new ErroEntrada(`referência "${mRef[1]}" fora dos limites da planilha`, i);
          tokens.push({ t: "ref", v: r, texto: mRef[1], pos: i });
          i += mRef[1].length;
          if (texto.charAt(i) === ":") {
            const mRef2 = refRe.exec(texto.slice(i + 1));
            if (mRef2) {
              const r2 = interpretarRef(mRef2[1]);
              if (!r2) throw new ErroEntrada(`referência "${mRef2[1]}" fora dos limites da planilha`, i + 1);
              tokens.push({ t: "doispontos", pos: i });
              i += 1 + mRef2[1].length;
              tokens.push({ t: "ref", v: r2, texto: mRef2[1], pos: i - mRef2[1].length });
              continue;
            }
          }
          continue;
        }
        const mNome = /^([A-Za-zÀ-ÿ_.][A-Za-zÀ-ÿ0-9_.]*)/.exec(texto.slice(i));
        if (mNome) {
          tokens.push({ t: "nome", v: mNome[1], pos: i });
          i += mNome[1].length;
          continue;
        }
      }
      const dois = texto.substr(i, 2);
      if (dois === ">=" || dois === "<=" || dois === "<>") {
        tokens.push({ t: "op", v: dois, pos: i });
        i += 2;
        continue;
      }
      if ("+-*/^&=<>".indexOf(ch) !== -1) {
        tokens.push({ t: "op", v: ch, pos: i });
        i++;
        continue;
      }
      if (ch === "%") { tokens.push({ t: "op", v: "%", pos: i }); i++; continue; }
      if (ch === "(") { tokens.push({ t: "abre", pos: i }); i++; continue; }
      if (ch === ")") { tokens.push({ t: "fecha", pos: i }); i++; continue; }
      if (ch === cfg.sepArgs) { tokens.push({ t: "sep", pos: i }); i++; continue; }
      if (ch === "," || ch === ";") {
        throw new ErroEntrada(
          `separador "${ch}" inesperado — no modo "${cfg.modo}" o separador de argumentos é "${cfg.sepArgs}" ` +
          `(acesitar ";" como separador faz "," ser decimal; sem ";" o modo é internacional e "," separa)`, i);
      }
      throw new ErroEntrada(`caractere não suportado "${ch}"`, i);
    }
    return tokens;
  }

  /* ------------------------------------------------------------------
   * 7. Analisador sintático (descida recursiva) e avaliador
   * ------------------------------------------------------------------ */
  const LENTIOSAS = { SE: true, SEERRO: true };

  function analisar(tokens, textoOriginal) {
    let p = 0;
    function proximo() { return tokens[p]; }
    function consumir() { return tokens[p++]; }
    function esperar(t, oque) {
      const tk = proximo();
      if (!tk || tk.t !== t) {
        throw new ErroEntrada(`esperado ${oque} mas encontrado ${tk ? `"${tk.v !== undefined ? tk.v : tk.t}"` : "fim da fórmula"}`, tk ? tk.pos : textoOriginal.length);
      }
      return consumir();
    }
    function expr() { return comparacao(); }
    function comparacao() {
      let e = concat();
      const tk = proximo();
      if (tk && tk.t === "op" && ["=", "<>", "<", ">", "<=", ">="].indexOf(tk.v) !== -1) {
        consumir();
        const d = concat();
        return { t: "bin", op: tk.v, e: e, d: d };
      }
      return e;
    }
    function concat() {
      let e = adicao();
      while (proximo() && proximo().t === "op" && proximo().v === "&") {
        consumir();
        e = { t: "bin", op: "&", e: e, d: adicao() };
      }
      return e;
    }
    function adicao() {
      let e = multiplicacao();
      while (proximo() && proximo().t === "op" && (proximo().v === "+" || proximo().v === "-")) {
        const op = consumir().v;
        e = { t: "bin", op: op, e: e, d: multiplicacao() };
      }
      return e;
    }
    function multiplicacao() {
      let e = unario();
      while (proximo() && proximo().t === "op" && (proximo().v === "*" || proximo().v === "/")) {
        const op = consumir().v;
        e = { t: "bin", op: op, e: e, d: unario() };
      }
      return e;
    }
    function unario() {
      let neg = false;
      const tk = proximo();
      if (tk && tk.t === "op" && (tk.v === "-" || tk.v === "+")) { neg = tk.v === "-"; consumir(); }
      let base = posfixado();
      if (neg) base = { t: "neg", e: base };
      const nx = proximo();
      if (nx && nx.t === "op" && nx.v === "^") {
        consumir();
        return { t: "bin", op: "^", e: base, d: unario() };
      }
      return base;
    }
    function posfixado() {
      let e = primario();
      while (proximo() && proximo().t === "op" && proximo().v === "%") {
        consumir();
        e = { t: "pct", e: e };
      }
      return e;
    }
    function primario() {
      const tk = proximo();
      if (!tk) throw new ErroEntrada("fim inesperado da fórmula", textoOriginal.length);
      if (tk.t === "num") { consumir(); return { t: "num", v: tk.v }; }
      if (tk.t === "texto") { consumir(); return { t: "texto", v: tk.v }; }
      if (tk.t === "ref") {
        consumir();
        if (proximo() && proximo().t === "doispontos") {
          consumir();
          const fim = esperar("ref", "referência final do intervalo (ex.: B5)");
          return { t: "intervalo", de: tk.v, ate: fim.v, texto: `${tk.texto}:${fim.texto}` };
        }
        return { t: "cel", ref: tk.v, texto: tk.texto };
      }
      if (tk.t === "nome") {
        consumir();
        if (proximo() && proximo().t === "abre") {
          consumir();
          const args = [];
          if (proximo() && proximo().t === "fecha") { consumir(); }
          else {
            for (;;) {
              args.push(expr());
              const nx = proximo();
              if (nx && nx.t === "sep") { consumir(); continue; }
              if (nx && nx.t === "fecha") { consumir(); break; }
              throw new ErroEntrada(`esperado ";" ou ")" nos argumentos de ${tk.v}`, nx ? nx.pos : textoOriginal.length);
            }
          }
          const chave = resolverFuncao(tk.v);
          if (!chave) {
            throw new ErroEntrada(`função "${tk.v}" não suportada — suportadas: ${nomesSuportadosTexto()}`, tk.pos);
          }
          return { t: "fn", nome: chave, nomeOriginal: tk.v, args: args };
        }
        const nomeBool = normalizarNome(tk.v);
        if (nomeBool === "VERDADEIRO" || nomeBool === "TRUE") return { t: "bool", v: true };
        if (nomeBool === "FALSO" || nomeBool === "FALSE") return { t: "bool", v: false };
        throw new ErroEntrada(`nome "${tk.v}" não reconhecido — nomes definidos e tabelas estruturadas estão fora do escopo documentado`, tk.pos);
      }
      if (tk.t === "abre") {
        consumir();
        const e = expr();
        esperar("fecha", '")"');
        return e;
      }
      throw new ErroEntrada(`token inesperado "${tk.v !== undefined ? tk.v : tk.t}"`, tk.pos);
    }
    const ast = expr();
    if (p < tokens.length) {
      const tk = proximo();
      throw new ErroEntrada(`token inesperado "${tk.v !== undefined ? tk.v : tk.t}" após o fim da expressão`, tk.pos);
    }
    return ast;
  }

  function avaliar(no, ctx) {
    switch (no.t) {
      case "num": return no.v;
      case "texto": return no.v;
      case "bool": return no.v;
      case "neg": {
        const v = avaliar(no.e, ctx);
        const n = paraNumero(v, "operador unário -");
        if (isErro(n)) return n;
        return -n;
      }
      case "pct": {
        const v = avaliar(no.e, ctx);
        const n = paraNumero(v, "%");
        if (isErro(n)) return n;
        return n / 100;
      }
      case "bin": return avaliarBin(no, ctx);
      case "cel": {
        if (!ctx.planilha || typeof ctx.planilha._avaliarCelula !== "function") {
          return erro("#REF!", `referência à célula ${no.texto} exige planilha ativa — use ExcelSimulator.criarPlanilha() (limitação declarada: sem planilha, só literais)`);
        }
        return ctx.planilha._avaliarCelula(no.ref, ctx.visitando);
      }
      case "intervalo": {
        if (!ctx.planilha || typeof ctx.planilha._avaliarCelula !== "function") {
          return erro("#REF!", `referência ao intervalo ${no.texto} exige planilha ativa — use ExcelSimulator.criarPlanilha()`);
        }
        const r1 = Math.min(no.de.linha, no.ate.linha);
        const r2 = Math.max(no.de.linha, no.ate.linha);
        const c1 = Math.min(no.de.col, no.ate.col);
        const c2 = Math.max(no.de.col, no.ate.col);
        const valores = [];
        for (let r = r1; r <= r2; r++) {
          for (let c = c1; c <= c2; c++) {
            valores.push(ctx.planilha._avaliarCelula({ col: c, linha: r }, ctx.visitando));
          }
        }
        return { __intervalo: true, linhas: r2 - r1 + 1, colunas: c2 - c1 + 1, valores: valores };
      }
      case "fn": {
        if (LENTIOSAS[no.nome] && no.args.length >= 1) {
          /* SE e SEERRO avaliam apenas o ramo usado (semântica do Excel). */
          if (no.nome === "SE") {
            if (no.args.length !== 3) return erro("#VAL!", "SE requer (condição; valor_se_verdadeiro; valor_se_falso)");
            const cond = avaliar(no.args[0], ctx);
            const l = paraLogico(cond, "SE");
            if (isErro(l)) return l;
            return avaliar(l ? no.args[1] : no.args[2], ctx);
          }
          if (no.nome === "SEERRO") {
            if (no.args.length !== 2) return erro("#VAL!", "SEERRO requer (valor; valor_se_erro)");
            const v = avaliar(no.args[0], ctx);
            if (isErro(v)) return avaliar(no.args[1], ctx);
            return v;
          }
        }
        const args = [];
        for (let k = 0; k < no.args.length; k++) {
          const v = avaliar(no.args[k], ctx);
          if (isErro(v)) return v;
          if (v && v.__intervalo) {
            const eInt = v.valores.find(isErro);
            if (eInt) return eInt;
          }
          args.push(v);
        }
        try {
          return funcoesSuportadas[no.nome](args, ctx);
        } catch (e) {
          return erro("#VAL!", `falha interna em ${no.nomeOriginal}: ${(e && e.message) || e}`);
        }
      }
      default:
        return erro("#VAL!", `nó sintático desconhecido (${no.t})`);
    }
  }

  function avaliarBin(no, ctx) {
    const op = no.op;
    const e = avaliar(no.e, ctx);
    if (isErro(e)) return e;
    const d = avaliar(no.d, ctx);
    if (isErro(d)) return d;
    if (op === "&") {
      return formatarValor(e) + formatarValor(d);
    }
    if (op === "=") return igual(e, d);
    if (op === "<>") return !igual(e, d);
    if (["<", ">", "<=", ">="].indexOf(op) !== -1) {
      const c = comparar(e, d);
      if (op === "<") return c < 0;
      if (op === ">") return c > 0;
      if (op === "<=") return c <= 0;
      return c >= 0;
    }
    const a = paraNumero(e, `operador ${op}`);
    if (isErro(a)) return a;
    const b = paraNumero(d, `operador ${op}`);
    if (isErro(b)) return b;
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") {
      if (b === 0) return erro("#DIV/0!", "divisão por zero");
      return a / b;
    }
    if (op === "^") return Math.pow(a, b);
    return erro("#VAL!", `operador desconhecido "${op}"`);
  }

  /* ------------------------------------------------------------------
   * 8. Planilha em memória (conjunto editável + recálculo — Seção 7.1)
   * ------------------------------------------------------------------ */
  function criarPlanilha() {
    const celulas = new Map(); // "A1" -> { literal, formula, ast, memo, memoVersao }
    let versao = 0;
    function chaveRef(ref) {
      const r = typeof ref === "string" ? interpretarRef(ref.replace(/\$/g, "")) : ref;
      if (!r) return null;
      return numeroParaColuna(r.col) + r.linha;
    }
    function avaliarCelulaRef(refObj, visitando) {
      const chave = numeroParaColuna(refObj.col) + refObj.linha;
      const c = celulas.get(chave);
      if (!c) return null; // célula vazia
      if (visitando.has(chave)) return erro("#REF!", `referência circular detectada (${chave})`);
      if (c.memoVersao === versao) return c.memo;
      visitando.add(chave);
      let v;
      if (c.ast) v = avaliar(c.ast, { planilha: planilha, visitando: visitando });
      else v = c.literal;
      visitando.delete(chave);
      c.memo = v;
      c.memoVersao = versao;
      return v;
    }
    const planilha = {
      definir: function (ref, valor) {
        const chave = chaveRef(ref);
        if (!chave) {
          throw new Error(ExcelSimulator.rejeitaEntradaInvalida("definir", ref, "use refs A1 válidas como A1 ou $B$2"));
        }
        if (typeof valor === "string" && valor.charAt(0) === "=") {
          return planilha.definirFormula(ref, valor);
        }
        /* Auto-conversão de texto numérico -> número (semântica do Excel: ao
         * digitar "7.5" ou "7,5" em uma célula, o Excel armazena o número,
         * não o texto). converterNumero aceita vírgula ou ponto decimal; se
         * não converter (NaN), mantém como texto (ex.: "Ana"). */
        if (typeof valor === "string") {
          const num = converterNumero(valor);
          if (!Number.isNaN(num)) valor = num;
        }
        versao++;
        celulas.set(chave, { literal: valor, ast: null, memo: undefined, memoVersao: -1 });
        return planilha;
      },
      definirFormula: function (ref, formula) {
        const chave = chaveRef(ref);
        if (!chave) {
          throw new Error(ExcelSimulator.rejeitaEntradaInvalida("definirFormula", ref, "use refs A1 válidas como A1 ou $B$2"));
        }
        if (typeof formula !== "string" || !formula.trim()) {
          throw new Error(ExcelSimulator.rejeitaEntradaInvalida("definirFormula", formula));
        }
        const base = formula.trim().replace(/^=/, "");
        const cfg = detectarModo(base);
        let ast;
        try {
          ast = analisar(tokenizar(base, cfg), base);
        } catch (e) {
          if (e instanceof ErroEntrada) {
            throw new Error(`ERRO DE ENTRADA [definirFormula ${chave}] — ${e.message}. Modo detectado: ${cfg.modo} (separador "${cfg.sepArgs}").`);
          }
          throw e;
        }
        versao++;
        celulas.set(chave, { literal: null, ast: ast, memo: undefined, memoVersao: -1 });
        return planilha;
      },
      definirMatriz: function (refTopo, matriz) {
        const topo = typeof refTopo === "string" ? interpretarRef(refTopo.replace(/\$/g, "")) : refTopo;
        if (!topo) {
          throw new Error(ExcelSimulator.rejeitaEntradaInvalida("definirMatriz", refTopo, "use uma ref A1 válida como ponto inicial"));
        }
        if (!Array.isArray(matriz)) {
          throw new Error(ExcelSimulator.rejeitaEntradaInvalida("definirMatriz", matriz, "esperada uma matriz (lista de linhas)"));
        }
        for (let i = 0; i < matriz.length; i++) {
          if (!Array.isArray(matriz[i])) {
            throw new Error(ExcelSimulator.rejeitaEntradaInvalida("definirMatriz", matriz[i], "cada linha deve ser uma lista"));
          }
          for (let j = 0; j < matriz[i].length; j++) {
            planilha.definir(numeroParaColuna(topo.col + j) + (topo.linha + i), matriz[i][j]);
          }
        }
        return planilha;
      },
      obter: function (ref) {
        const chave = chaveRef(ref);
        if (!chave) return erro("#REF!", `"${ref}" não é uma referência A1 válida`);
        return avaliarCelulaRef({ col: colunaParaNumero(chave.match(/^[A-Z]+/)[0]), linha: parseInt(chave.match(/[0-9]+$/)[0], 10) }, new Set());
      },
      recalcular: function () {
        versao++;
        return planilha.listar();
      },
      listar: function () {
        const saida = {};
        celulas.forEach(function (c, chave) {
          saida[chave] = avaliarCelulaRef(
            { col: colunaParaNumero(chave.match(/^[A-Z]+/)[0]), linha: parseInt(chave.match(/[0-9]+$/)[0], 10) },
            new Set()
          );
        });
        return saida;
      },
      copiarFormula: function (formula, origem, destino) {
        return ajustarFormulaAoCopiar(formula, origem, destino);
      },
      _avaliarCelula: avaliarCelulaRef
    };
    return planilha;
  }

  /* ------------------------------------------------------------------
   * 9. API pública (compatível com a superfície anterior: calcular,
   *    calcularFormula, rejeitaEntradaInvalida, funcoesSuportadas)
   * ------------------------------------------------------------------ */

  /* ==================================================================
   * 9b. UI do simulador Excel (Seção 7.1) — montagem via mount(el).
   * ---------------------------------------------------------------
   * UI declarativa que consome a API REAL de ExcelSimulator (nada de
   * eval): grade editável com recálculo ao vivo, console de fórmulas,
   * comparação entre funções, exercícios verificáveis e códigos de
   * erro reais. Montagem é feita por mountExcel(containerEl), chamada
   * pela tarefa de wiredome; idempotente e Node-testável (não toca no
   * DOM fora do container recebido).
   * ================================================================ */
  var excelCols = ["A", "B", "C", "D", "E"];
  var excelDefault = [
    ["Nome", "Nota 1", "Nota 2", "Nota 3", "Média"],
    ["Ana", "7,5", "8", "6,5", "=MÉDIA(B2:D2)"],
    ["Bruno", "6", "7,5", "8", "=MÉDIA(B3:D3)"],
    ["Carla", "9", "8,5", "7", "=MÉDIA(B4:D4)"],
    ["Diego", "5,5", "6", "7,5", "=MÉDIA(B5:D5)"],
    ["Eva", "8", "9", "10", "=MÉDIA(B6:D6)"],
    ["Fábio", "4", "5,5", "6", "=MÉDIA(B7:D7)"],
    ["", "", "", ""]
  ];
  var excelExercicios = [
    { id: "ex1", titulo: "1. Média de Ana", formula: "=MÉDIA(B2:D2)", explicacao: "Média aritmética simples das três notas da linha 2; observe o alinhamento entre a média exibida na grade e o resultado desta fórmula." },
    { id: "ex2", titulo: "2. Classificação com SE", formula: "=SE(7,5>=7;\"APROVADO\";\"REPROVADO\")", explicacao: "7,5 >= 7 é verdadeiro, logo SE devolve APROVADO. Use aspas duplas dentro da fórmula e ; como separador pt-BR." },
    { id: "ex3", titulo: "3. Código de erro real", formula: "=1/0", explicacao: "Divisão por zero produz #DIV/0!, um dos cinco códigos de erro do Excel ( #N/A #REF! #VAL! #DIV/0! #NUM! )." }
  ];
  var excelCss = '<style>' +
    '.sim-excel{max-width:980px;margin:0 auto;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e3e9ff}.sim-excel h3{margin:8px 0 2px}.sim-excel h4{margin:16px 0 6px;color:#cdd4de;font-size:1rem}' +
    '.sim-excel-sub{color:#8b94a5;font-size:.85rem;margin:0 0 12px}.sim-excel-tabela{border-collapse:collapse;width:100%;margin:8px 0}' +
    '.sim-excel-tabela th,.sim-excel-tabela td{border:1px solid #3a4252;padding:4px 6px;text-align:left;font-size:.85rem}' +
    '.sim-excel-tabela th{background:#2a2f3a;color:#cdd4de}.sim-excel-rownum{background:#22262e;color:#8b94a5;width:28px}' +
    ".sim-excel-cel{width:90px;font-family:'Courier New',monospace;font-size:.85rem;background:#1b1e24;color:#e3e9ff;border:1px solid #4a5265;border-radius:3px;padding:2px 4px}" +
    '.sim-excel-res{margin-left:6px;color:#ffd57c;font-weight:600;min-width:48px;display:inline-block}.sim-excel-bloco{background:#1f232c;border:1px solid #333947;border-radius:8px;padding:12px;margin:12px 0}' +
    '.sim-excel-btn{background:#3a4252;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:4px 10px;font-size:.8rem;cursor:pointer;margin-right:6px}.sim-excel-btn:hover{background:#4a5466}' +
    ".sim-excel-console{width:100%;font-family:'Courier New',monospace;font-size:.85rem;background:#1b1e24;color:#e3e9ff;border:1px solid #4a5265;border-radius:4px;padding:6px;resize:vertical}" +
    '.sim-excel-resgrande{margin:8px 0 0;color:#ffd57c;font-family:"Courier New",monospace;font-size:.95rem;min-height:1.4em}' +
    '.sim-excel-comparacao{width:100%;border-collapse:collapse;font-size:.85rem}.sim-excel-comparacao th,.sim-excel-comparacao td{border:1px solid #3a4252;padding:4px 8px;text-align:left}' +
    '.sim-excel-comparacao th{background:#2a2f3a;color:#cdd4de}.sim-excel-exercicio{border-left:3px solid #4a5265;padding:6px 10px;margin:8px 0;background:#1b1e24}' +
    ".sim-excel-exercicio input{width:100%;font-family:'Courier New',monospace;font-size:.85rem;background:#1b1e24;color:#e3efff;border:1px solid #4a5265;border-radius:4px;padding:4px 6px;margin-bottom:6px}" +
    '.sim-excel-fb{display:inline-block;font-size:.85rem}.sim-excel-ok{color:#5ee0a0}.sim-excel-err{color:#ff7b7b}.sim-excel-aviso{color:#8b94a5;font-size:.8rem;margin-top:4px}' +
    '</style>';
  var excelMontados = (typeof WeakSet !== "undefined") ? new WeakSet() : { has: function () { return false; }, add: function () { return true; }, "delete": function () { return true; } };

  // Escapamento HTML local (convenção do projeto: esc). Nenhuma dependência externa.
  function esc(texto) {
    return String(texto == null ? "" : texto)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Formatação de exibição para resultados do ExcelSimulator (números com vírgula, booleans, erros).
  function excelFmt(v) {
    if (v instanceof ErroExcel) return v.codigo + (v.detalhe ? " — " + v.detalhe : "");
    if (typeof v === "boolean") return v ? "VERDADEIRO" : "FALSO";
    if (typeof v === "number") {
      if (!isFinite(v)) return "#NUM!";
      var s = String(parseFloat(v.toPrecision(12)));
      if (s.indexOf(".") !== -1) {
        var partes = s.split(".");
        var dec = partes[1].slice(0, 4).replace(/0+$/, "");
        return partes[0] + (dec ? "," + dec : "");
      }
      return s;
    }
    if (v === null || v === undefined) return "";
    return String(v);
  }

  function excelBuildUI(plan, entradas) {
    return '<div class="sim-excel">' +
      '<h3>Simulador Excel (Seção 7.1)</h3>' +
      '<p class="sim-excel-sub">Excel 365 (pt-BR) — cálculo REAL via ExcelSimulator (sem eval). Edite valores ou fórmulas e veja o recálculo ao vivo. Códigos de erro reais: #N/A, #REF!, #VAL!, #DIV/0!, #NUM!.</p>' +
      excelBuildGrid(entradas) +
      excelBuildConsole() +
      excelBuildComparacao(plan) +
      excelBuildExercicios() +
      excelBuildLimites() +
      "</div>";
  }

  function excelBuildGrid(entradas) {
    var h = '<div class="sim-excel-bloco"><h4>Tabela de dados — recálculo automático</h4><table class="sim-excel-tabela"><thead><tr><th>#</th>';
    excelCols.forEach(function (c) { h += "<th>" + esc(c) + "</th>"; });
    h += "</tr></thead><tbody>";
    for (var i = 0; i < excelDefault.length; i++) {
      h += "<tr><td class='sim-excel-rownum'>" + (i + 1) + "</td>";
      for (var j = 0; j < excelCols.length; j++) {
        var ref = excelCols[j] + (i + 1);
        var raw = (entradas[i] && entradas[i][j] != null) ? entradas[i][j] : "";
        h += "<td><input type='text' class='sim-excel-cel' data-cell='" + esc(ref) + "' value='" + esc(raw) + "' aria-label='célula " + esc(ref) + "' /><span id='excel-res-" + esc(ref) + "' class='sim-excel-res'></span></td>";
      }
      h += "</tr>";
    }
    h += "</tbody></table>";
    h += "<p class='sim-excel-aviso'>Fórmulas iniciam com <code>=</code>. Células vazias não casam com critérios numéricos em CONT.SE/SOMASE — diferença declarada do Excel.</p>";
    h += "</div>";
    return h;
  }

  function excelBuildConsole() {
    var h = '<div class="sim-excel-bloco"><h4>Console de fórmulas (executa contra a tabela acima)</h4>';
    h += "<p>Digite uma fórmula (com ou sem <code>=</code> inicial) e pressione Calcular — veja o resultado ou o código de erro real.</p>";
    h += "<textarea id='excel-console-fm' class='sim-excel-console' rows='2'>=MÉDIA(B2:B7)</textarea>";
    h += "<button type='button' class='sim-excel-btn' data-act='excel-console-calcular'>Calcular</button>";
    h += "<button type='button' class='sim-excel-btn' data-act='excel-console-limpar'>Limpar</button>";
    h += "<p class='sim-excel-resgrande' id='excel-console-res'>—</p>";
    h += "</div>";
    return h;
  }

  var excelComparacao = [
    ["SOMA", "=SOMA(B2:B7)", "excel-cmp-SOMA"],
    ["MÉDIA", "=MÉDIA(B2:B7)", "excel-cmp-MEDIA"],
    ["MÁXIMO", "=MÁXIMO(B2:B7)", "excel-cmp-MAX"],
    ["MÍNIMO", "=MÍNIMO(B2:B7)", "excel-cmp-MIN"],
    ["CONT.VALORES", "=CONT.VALORES(B2:B7)", "excel-cmp-COUNT"]
  ];

  function excelBuildComparacao(plan) {
    var h = '<div class="sim-excel-bloco"><h4>Comparação entre funções — coluna Nota 1 (B2:B7)</h4><table class="sim-excel-comparacao"><thead><tr><th>Função</th><th>Fórmula</th><th>Resultado</th></tr></thead><tbody>';
    for (var i = 0; i < excelComparacao.length; i++) {
      var f = excelComparacao[i];
      var r = ExcelSimulator.calcularFormula(f[1], plan);
      h += "<tr><td>" + esc(f[0]) + "</td><td><code>" + esc(f[1]) + "</code></td><td class='sim-excel-res' id='" + f[2] + "'>" + esc(excelFmt(r)) + "</td></tr>";
    }
    h += "</tbody></table></div>";
    return h;
  }

  function excelBuildExercicios() {
    var h = '<div class="sim-excel-bloco"><h4>Exercícios</h4>';
    for (var i = 0; i < excelExercicios.length; i++) {
      var x = excelExercicios[i];
      h += "<div class='sim-excel-exercicio'><strong>" + esc(x.titulo) + "</strong><p>" + esc(x.pergunta) + "</p>";
      h += "<input id='excel-ex-" + esc(x.id) + "' class='sim-excel-ex-input' type='text' placeholder='digite a fórmula' value='" + esc(x.formula) + "' />";
      h += "<button type='button' class='sim-excel-btn' data-act='excel-ex-verificar' data-ex='" + esc(x.id) + "'>Verificar</button>";
      h += "<span id='excel-fb-" + esc(x.id) + "'></span>";
      h += "</div>";
    }
    h += "</div>";
    return h;
  }

  function excelBuildLimites() {
    var n = (ExcelSimulator.escopo && ExcelSimulator.escopo.funcoes) ? ExcelSimulator.escopo.funcoes.length : 0;
    return '<div class="sim-excel-bloco"><h4>Escopo declarado</h4>' +
      '<p>Este painel consome <code>ExcelSimulator</code>: ' + esc(ExcelSimulator.versaoDeclarada) +
      '. ' + n + ' funções suportadas; veja o contrato completo no cabeçalho de <code>assets/js/simulators.js</code>.</p></div>';
  }

  function mountExcel(containerEl) {
    if (!containerEl || typeof containerEl !== "object") return undefined;
    if (excelMontados.has(containerEl)) return undefined;
    var plan = ExcelSimulator.criarPlanilha();
    var entradas = [];
    for (var i = 0; i < excelDefault.length; i++) {
      entradas.push(excelDefault[i].slice());
      for (var j = 0; j < excelDefault[i].length; j++) {
        plan.definir(excelCols[j] + (i + 1), excelDefault[i][j]);
      }
    }
    try {
      excelMontados.add(containerEl);
      containerEl.innerHTML = excelCss + excelBuildUI(plan, entradas);
      containerEl.addEventListener("input", onExcelInput);
      containerEl.addEventListener("click", onExcelClick);
      var destruido = false;

      function renderValores() {
        var vals = plan.listar();
        excelCols.forEach(function (c) {
          for (var r = 1; r <= excelDefault.length; r++) {
            var span = containerEl.querySelector("#excel-res-" + (c + r));
            if (span) span.textContent = excelFmt(vals[c + r]);
          }
        });
        excelComparacao.forEach(function (f) {
          var sp = containerEl.querySelector("#" + f[2]);
          if (sp) sp.textContent = excelFmt(ExcelSimulator.calcularFormula(f[1], plan));
        });
      }

      function onExcelInput(e) {
        var alvo = e.target;
        if (!alvo || !alvo.getAttribute) return;
        var ref = alvo.getAttribute("data-cell");
        if (!ref) return;
        var col = ref.charAt(0);
        var row = parseInt(ref.slice(1), 10);
        var j = excelCols.indexOf(col);
        var i = row - 1;
        if (i < 0 || i >= entradas.length || j < 0) return;
        entradas[i][j] = alvo.value;
        var span = containerEl.querySelector("#excel-res-" + ref);
        try {
          plan.definir(ref, alvo.value);
          renderValores();
        } catch (err) {
          if (span) span.textContent = "ERRO: " + ((err && err.message) || err);
        }
      }

      function onExcelClick(e) {
        var alvo = e.target;
        if (!alvo || !alvo.getAttribute) return;
        var act = alvo.getAttribute("data-act");
        if (!act) return;
        if (act === "excel-console-calcular") {
          var fm = containerEl.querySelector("#excel-console-fm");
          var out = containerEl.querySelector("#excel-console-res");
          if (!fm || !out) return;
          var txt = (fm.value || "").trim();
          if (!txt) { out.textContent = "—"; return; }
          if (txt.charAt(0) !== "=") txt = "=" + txt;
          out.textContent = excelFmt(ExcelSimulator.calcularFormula(txt, plan));
        } else if (act === "excel-console-limpar") {
          var fm2 = containerEl.querySelector("#excel-console-fm");
          var out2 = containerEl.querySelector("#excel-console-res");
          if (fm2) fm2.value = "";
          if (out2) out2.textContent = "—";
        } else if (act === "excel-ex-verificar") {
          verificarExercicio(alvo.getAttribute("data-ex"));
        }
      }

      function verificarExercicio(id) {
        var inp = containerEl.querySelector("#excel-ex-" + id);
        var fb = containerEl.querySelector("#excel-fb-" + id);
        if (!inp || !fb) return;
        var txt = (inp.value || "").trim();
        if (!txt) { fb.innerHTML = '<span class="sim-excel-fb sim-excel-err">Digite uma fórmula.</span>'; return; }
        if (txt.charAt(0) !== "=") txt = "=" + txt;
        var res = ExcelSimulator.calcularFormula(txt, plan);
        var meta = null;
        for (var k = 0; k < excelExercicios.length; k++) if (excelExercicios[k].id === id) { meta = excelExercicios[k]; break; }
        if (!meta) return;
        var esperado = ExcelSimulator.calcularFormula(meta.formula, plan);
        var ok = conferirExercicio(id, res, esperado);
        var classe = ok ? "sim-excel-ok" : "sim-excel-err";
        var label = ok ? "Correto" : "Incorreto";
        fb.innerHTML = '<span class="sim-excel-fb ' + classe + '">' + esc(label) + " — resultado: " + esc(excelFmt(res)) + "; esperado: " + esc(excelFmt(esperado)) + ". " + esc(meta.explicacao) + "</span>";
      }

      function conferirExercicio(id, res, esperado) {
        if (id === "ex1") return typeof res === "number" && typeof esperado === "number" && Math.abs(res - esperado) < 0.01;
        if (id === "ex2") return typeof res === "string" && typeof res === typeof esperado && res === esperado;
        if (id === "ex3") return ExcelSimulator.isErro(res) && ExcelSimulator.isErro(esperado) && res.codigo === esperado.codigo;
        return false;
      }

      renderValores();
      return {
        destroy: function () {
          if (destruido) return;
          destruido = true;
          try { excelMontados["delete"](containerEl); } catch (e) {}
          try { containerEl.innerHTML = ""; } catch (e) {}
        }
      };
    } catch (e) {
      try { excelMontados["delete"](containerEl); } catch (e2) {}
      if (typeof console !== "undefined" && console.error) console.error("ExcelSimulator.mount: falha —", (e && e.message) || e);
      return undefined;
    }
  }

  const ExcelSimulator = {
    versaoDeclarada: "Excel 365 (pt-BR) didático — 23 funções reais + aliases em inglês; separador ';' (pt-BR) ou ',' com regra declarada; sem eval; busca real em PROCV/PROCH/PROCX",
    escopo: {
      funcoes: Object.keys(funcoesSuportadas).map(function (k) { return k; }),
      aliases: aliasEmingles,
      operadores: ["+", "-", "*", "/", "^", "&", "%", "=", "<>", "<", ">", "<=", ">="],
      separador: "se ';' fora de aspas -> ';' separa e ',' é decimal; senão ',' separa e '.' é decimal",
      referencias: "literais + refs A1/$A$1/mistas via criarPlanilha(); ajuste de cópia com $ preservado (ajustarFormulaAoCopiar)",
      erros: ["#N/A", "#REF!", "#VAL!", "#DIV/0!", "#NUM!"],
      limitacoes: [
        "sem tabelas estruturadas, nomes definidos, R1C1, matrizes dinâmicas, LET/LAMBDA",
        "correspondência aproximada não valida ordenação (mesma semântica do Excel: último <= alvo)",
        "células vazias não casam com critérios numéricos em CONT.SE/SOMASE (diferença declarada do Excel)",
        "sem suporte a separador de milhar",
        "não testado em navegador real neste turno (verificado com node --check e smoke test em Node/vm)"
      ]
    },
    funcoesSuportadas: funcoesSuportadas,
    aliasEmingles: aliasEmingles,
    ErroExcel: ErroExcel,
    isErro: isErro,
    normalizarNome: normalizarNome,
    formatarValor: formatarValor,
    rejeitaEntradaInvalida: function (nome, entrada, detalhe) {
      return `ERRO DE ENTRADA [${nome}] — Entrada rejeitada: "${entrada}". ${detalhe ? detalhe + ". " : ""}` +
        "Este simulador aceita: literais (número com . ou , decimal, texto entre aspas, VERDADEIRO/FALSO), " +
        "operadores (+ - * / ^ & % = <> < > <= >=), fórmulas aninhadas e, com planilha ativa (criarPlanilha), " +
        "refs A1 e intervalos A1:B5 (relativas, absolutas e mistas com $). Não aceita: nomes definidos, " +
        "tabelas estruturadas, referências a outros arquivos, matrizes dinâmicas, separador de milhar, " +
        "nem sintaxe de outra região sem seguir a regra de separador declarada no cabeçalho de simulators.js.";
    },
    calcular: function (nome, args) {
      const chave = resolverFuncao(nome);
      if (!chave) {
        return `ERRO: função "${nome}" não suportada — suportadas: ${nomesSuportadosTexto()}.`;
      }
      try {
        const norm = (args || []).map(function (a) {
          return (a && a.__intervalo) || Array.isArray(a) ? paraIntervalo(a) : a;
        });
        for (let i = 0; i < norm.length; i++) if (isErro(norm[i])) return norm[i];
        return funcoesSuportadas[chave](norm, { planilha: null });
      } catch (e) {
        return erro("#VAL!", `falha interna em ${chave}: ${(e && e.message) || e}`);
      }
    },
    calcularFormula: function (texto, planilha) {
      if (typeof texto !== "string" || !texto.trim()) {
        return ExcelSimulator.rejeitaEntradaInvalida("calcularFormula", texto);
      }
      let base = texto.trim();
      if (base.charAt(0) === "=") base = base.slice(1).trim();
      if (!base) {
        return ExcelSimulator.rejeitaEntradaInvalida("calcularFormula", texto, "a fórmula está vazia após o sinal de =");
      }
      const cfg = detectarModo(base);
      try {
        const ast = analisar(tokenizar(base, cfg), base);
        return avaliar(ast, { planilha: planilha || null, visitando: new Set() });
      } catch (e) {
        if (e instanceof ErroEntrada) {
          return `ERRO DE ENTRADA [calcularFormula] — ${e.message}. Modo detectado: ${cfg.modo} ` +
            `(separador de argumentos "${cfg.sepArgs}"; decimal ${cfg.aceitaVirgulaDecimal ? "vírgula ou ponto" : "ponto"}). ` +
            "Escopo completo documentado no cabeçalho de assets/js/simulators.js.";
        }
        return `ERRO DE EXECUÇÃO [calcularFormula]: ${(e && e.message) || e}`;
      }
    },
    criarPlanilha: criarPlanilha,
    ajustarFormulaAoCopiar: ajustarFormulaAoCopiar,
    mount: mountExcel
  };

  /* Compatibilidade: no navegador expõe global; em Node permite smoke test. */
  global.ExcelSimulator = ExcelSimulator;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = ExcelSimulator;
  }
})(typeof window !== "undefined" ? window : globalThis);