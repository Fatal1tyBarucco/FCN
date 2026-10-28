# Checklist final — Etapa 8 (validação técnica e auditoria)

Escopo: Etapa 7 (testes técnicos) e Etapa 8 (auditoria final) do protocolo `Escrita.txt`, Seções 17–18. Evidências obtidas no repositório local (HEAD com alterações não commitadas listadas em `git status`).

## 1. Carregamento e sintaxe

- [x] `node --check` em todos os `apostila-ia/assets/**/*.js` — **PASS** (0 erros).
- [x] `index.html` referencia 39 tags `<script src>` (23 dados + 16 JS) — confirmado por leitura.
- [x] Módulos M1–M8 carregados (8 `curriculum*.js`, 8 `flashcards_m*.js`, 6 `questions*.js`, `references.js`).

## 2. Modos de execução

- [x] Modo A (`file://`): estrutura de contingência presente no `index.html` (estilos mínimos).
- [x] Modo B (servidor estático): `python3 -m http.server` serve `index.html` com HTTP 200; manifest e service worker com HTTP 200. Evidência: `confir_env_servidor.md`.

## 3. Navegação e conteúdo

- [x] `navigation.js` dono único da renderização; descoberta dinâmica de módulos via `typeof` (sem `eval`/fetch).
- [x] 427 nós curriculares (132 tópicos + 295 subtópicos) renderizáveis.
- [x] Progresso persistido em `localStorage` chave `apostila-ia-progresso`.

## 4. Funcionalidades

- [x] Simuladores montados nos 6 contêineres (`#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app`, `#dados-app`, `#etica-app`) com guarda tripla.
- [x] Laboratório de gráficos (`#charts-app`) — 5 tipos obrigatórios.
- [x] Busca, flashcards (460) e quiz (399 questões, 15 escopos) carregados.
- [ ] Áudio Web Speech: depende do dispositivo; limitação documentada (não é defeito).
- [ ] WCAG com leitor de tela e responsividade física: não certificadas neste ambiente.

## 5. PWA e cache

- [x] `manifest.webmanifest` válido (JSON).
- [x] `service-worker.js` sintaticamente válido; registro condicional apenas em `http/https`.
- [x] Cache precache mínimo não fatal (cada recurso com `.catch()`).

## 6. Referências e governança

- [x] `references.js`: 183 entradas, todas com status `verificado` e URL preenchida.
- [x] `inventario/` e `matriz/` (raiz) sincronizados com `apostila-ia/` (cópias).
- [x] CI: `deploy-pages.yml` e `validate-curriculum.yml` presentes.

## Limitações conhecidas (não classificadas como concluídas)

1. Testes de navegador real/WCAG/responsividade física não executados neste ambiente.
2. Vídeos: 20 IDs validados via oEmbed (histórico 2026-10-24); revalidação no HEAD atual não repetida aqui.
3. Revisão semântica integral das 399 questões e 460 flashcards permanece como controle editorial (ver backlog).
4. Distribuição de gabaritos: pendência editorial documentada (M7 sem B, M1 sem E).

## Veredito

Aprovado para publicação técnica (deploy Pages) com ressalvas documentadas. Nenhum requisito obrigatório foi reclassificado incorretamente como concluído neste checklist.
