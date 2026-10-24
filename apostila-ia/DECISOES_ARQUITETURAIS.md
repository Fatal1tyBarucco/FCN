# DECISÕES ARQUITETURAIS — Apostila Web Interativa FCN

- SPA estática vanilla HTML/CSS/JS; sem build; funciona em file:// (Modo A) e servidor estático (Modo B).
- Navegação dono único: navigation.js registra window.apostilaDados + alias curriculumData; descobre módulos via cadeia typeof (sem eval/fetch).
- Chaves unificadas modulo-N com hífen.
- Persistência localStorage chave apostila-ia-progresso; storage.js valida dados.
- Gráficos em SVG próprio (sem biblioteca externa) para garantir file://.
- Simuladores locais (sem ataques reais, sem IA real, sem comandos no SO).
- Questões autorais (não atribuídas a bancas reais); estilos de cobrança como formato.
- Flashcards SM-2 simplificado (documentado).
- Vídeos: nenhum publicado como validado (decisão intencional).
- PWA condicional: manifest + SW; SW não registra em file://.
- Referências verificadas: LGPD, LAI, Lei 14.129/2021, Marco Civil, CF art. 37/art. 5º.
