/**
 * DB Modules Adapter — Usa os dados REAIS do repo (curriculum*.js, flashcards_m*.js,
 * questions*.js) via navigation.js / window.apostilaDados. Nenhum conteúdo inventado.
 * Regra absoluta: não inventar referências, IDs, vídeos ou resultados.
 */
const DB = {
  modules: [],
  init() {
    // Aguarda o boot de navigation.js que popula window.apostilaDados (se disponível)
    // Fallback defensivo: lê os objetos globais diretamente.
    let base = (typeof window !== 'undefined' && window.apostilaDados) ? window.apostilaDados : null;
    // Se ainda não estiver consolidado, monta manualmente a partir dos objetos globais
    if (!base || !base.curriculum) {
      base = { curriculum: {}, curriculumM2: {}, curriculumM3: {}, curriculumM4: {},
              curriculumM5: {}, curriculumM6: {}, curriculumM7: {}, curriculumM8: {},
              flashcards: {}, references: {}, questions: {} };
      // Copiar objetos globais existentes (defensiva: só se existirem)
      if (typeof curriculum === 'object') base.curriculum = curriculum;
      if (typeof curriculumM2 === 'object') base.curriculumM2 = curriculumM2;
      if (typeof curriculumM3 === 'object') base.curriculumM3 = curriculumM3;
      if (typeof curriculumM4 === 'object') base.curriculumM4 = curriculumM4;
      if (typeof curriculumM5 === 'object') base.curriculumM5 = curriculumM5;
      if (typeof curriculumM6 === 'object') base.curriculumM6 = curriculumM6;
      if (typeof curriculumM7 === 'object') base.curriculumM7 = curriculumM7;
      if (typeof curriculumM8 === 'object') base.curriculumM8 = curriculumM8;

      if (Array.isArray(flashcardsM1)) {
        base.flashcards.m1 = flashcardsM1;
      }
      if (Array.isArray(flashcardsM2)) base.flashcards.m2 = flashcardsM2;
      if (Array.isArray(flashcardsM3)) base.flashcards.m3 = flashcardsM3;
      if (Array.isArray(flashcardsM4)) base.flashcards.m4 = flashcardsM4;
      if (Array.isArray(flashcardsM5)) base.flashcards.m5 = flashcardsM5;
      if (Array.isArray(flashcardsM6)) base.flashcards.m6 = flashcardsM6;
      if (Array.isArray(flashcardsM7)) base.flashcards.m7 = flashcardsM7;
      if (Array.isArray(flashcardsM8)) base.flashcards.m8 = flashcardsM8;
    }

    // Mapeia os 8 módulos com metadados mínimos (não inventa conteúdo didático)
    // Os dados completos permanecem nos .js originais; DB.modules é apenas o índice
    // do SPA para navegação e seleção de abas.
    const mods = [
      { id: 'msoffice',  key: 'curriculum',       label: '1. MS Office 365', icon: '📊', index: 1 },
      { id: 'redes',     key: 'curriculumM2',     label: '2. Redes', icon: '🌐', index: 2 },
      { id: 'comunicacao', key: 'curriculumM3',   label: '3. Comunicação', icon: '📧', index: 3 },
      { id: 'seguranca', key: 'curriculumM4',     label: '4. Segurança', icon: '🔒', index: 4 },
      { id: 'ia',        key: 'curriculumM5',     label: '5. IA e Dados', icon: '🤖', index: 5 },
      { id: 'etica',     key: 'curriculumM6',     label: '6. Ética e Gov. Digital', icon: '⚖️', index: 6 },
      { id: 'dados',     key: 'curriculumM7',     label: '7. Dados', icon: '🗃️', index: 7 },
      { id: 'visualizacao', key: 'curriculumM8',  label: '8. Visualização', icon: '📈', index: 8 },
    ];
    this.modules = mods.map(m => {
      const data = base[m.key];
      // Se o módulo não tiver dados reais ainda, mantém como stub defensivo
      // mas NÃO inventa conteúdo. A renderização usa navigation.js diretamente.
      return {
        id: m.id,
        title: m.label,
        icon: m.icon,
        index: m.index,
        // Metadados mínimos (não substituem o conteúdo real)
        overview: (data && data['modulo-'+m.index] && data['modulo-'+m.index].titulo)
                  ? (data['modulo-'+m.index].titulo || m.label)
                  : m.label
      };
    });
  }
};
