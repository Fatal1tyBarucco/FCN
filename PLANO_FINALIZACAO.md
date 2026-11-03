# PLANO DE FINALIZAÇÃO — Apostila Web Interativa FCN

**Data:** 2026-11-02  
**Estado atual:** APROVADO COM RESSALVAS (Auditoria Final)  
**Objetivo:** Resolver as 4 limitações remanescentes declaradas na AUDITORIA_FINAL.md e fechar o projeto.

---

## LIMITAÇÕES REMANESCENTES (da AUDITORIA_FINAL.md, Seção 32)

| ID | Limitação | Status | Prioridade |
|---|---|---|---|
| **D4** | Testes em navegador real (dispositivo físico): simuladores interatividade, gráficos interatividade, responsividade, áudio síntese, manifest CORS/SW | ⏳ Pendente | **CRÍTICA** |
| **D3** | Vídeos: 20 IDs validados via oembed; embed nos módulos e disponibilidade regional não testados | ⏳ Pendente | **ALTA** |
| **D5** | Referências: demais resoluções ANPD, demais RFCs (FTP, SMTP, ICMP, ARP, NAT, VPN), demais incisos/parágrafos art. 37 e art. 5º CF | ⏳ Pendente | **MÉDIA** |
| **D6** | Flashcards M3 corrigidos (fc-m3-18/19/21/22) — JÁ RESOLVIDO | ✅ Concluído | — |

---

## TAREFAS DELEGADAS

### AGENTE 1: VALIDAÇÃO EM NAVEGADOR REAL (D4)
**Modelo recomendado:** General-purpose (testes complexos, múltiplos passos)

**Tarefas:**
1. Executar `test-browser-smoke.cjs` e `test-browser-interactions.cjs` em ambiente com Playwright/Chromium real
2. Testar abertura direta `file://` em navegador real (Chrome/Firefox/Edge)
3. Validar interatividade dos 5 simuladores (Excel, Redes, Segurança, Prompts, Dados)
4. Validar interatividade dos 5 gráficos (histograma, linha, barras, dispersão, box plot)
5. Testar síntese de áudio (Web Speech API) com voz pt-BR
6. Testar Service Worker registration e manifest CORS
7. Testar responsividade em breakpoints: 360, 768, 1024, 1440
8. Testar acessibilidade com leitor de tela (NVDA/JAWS/Orca se disponível)
9. Documentar evidências (screenshots, logs, vídeo) em `docs/VALIDACAO_NAVEGADOR_REAL_<data>.md`
10. Atualizar `AUDITORIA_FINAL.md` coluna "Teste realizado" e "Resultado" para D4

**Critério de aceite:** Todos os testes de navegador real passarem sem erros JS não tratados; simuladores e gráficos interativos funcionando; áudio com síntese real; SW registrado; responsividade visual confirmada.

---

### AGENTE 2: EMBED DE VÍDEOS NOS MÓDULOS (D3)
**Modelo recomendado:** General-purpose (manipulação de dados, integração)

**Tarefas:**
1. Ler `referencias/referencias-verificadas.md` Bloco 6 (20 vídeos validados com IDs, canais, URLs)
2. Para cada vídeo, adicionar embed `youtube-nocookie.com` no currículo correspondente (`curriculum_m*.js`)
3. Adicionar seção "Vídeos de apoio" ao final de cada tópico/unidade relevante
4. Incluir alternativa textual completa (resumo do conteúdo essencial) para cada vídeo
5. Verificar se `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"` e `referrerpolicy="strict-origin-when-cross-origin"`
6. Testar embed em navegador real (disponibilidade regional, incorporação permitida)
7. Atualizar `references.js` com metadados de embed (opcional, se não estiver)
8. Documentar em `docs/EMBED_VIDEOS_<data>.md`: vídeo, módulo, tópico, status embed, disponibilidade regional

**Critério de aceite:** 20 vídeos embedados nos módulos corretos; alternativas textuais presentes; embeds funcionam em `file://` e localhost; disponibilidade regional verificada.

---

### AGENTE 3: REFERÊNCIAS RESTANTES (D5)
**Modelo recomendado:** General-purpose (pesquisa, verificação documental)

**Tarefas:**
1. **ANPD Resoluções**: Verificar e documentar Resoluções CD/ANPD além das nº 2/2022 e nº 4/2023 já verificadas
   - Consultar https://www.gov.br/anpd/pt-br/assuntos/regulamentacao/resolucoes
2. **RFCs restantes**: Verificar RFCs de FTP (959, 2228, 4217), SMTP (5321, 5322), ICMP (792), ARP (826), NAT (3022, 2663), VPN (4026, 4364)
3. **CF Art. 37**: Verificar incisos I a XXI, §§1º a 6º (além do caput + II/III/XXI/§1º/§3ºII/§4º/§6º já verificados)
4. **CF Art. 5º**: Verificar incisos além de X/XII/XIV/XXXIII/LXXIX já verificados
5. Para cada referência verificada: registrar título, organização, URL direta, tópico relacionado, data de verificação
6. Atualizar `referencias/referencias-verificadas.md` e `assets/data/references.js`
7. Atualizar `AUDITORIA_FINAL.md` linha 37 (D5)

**Critério de aceite:** Todas as referências pendentes verificadas com URL+data primárias; documentadas nos arquivos de referência; questões/currículo que as citam estão alinhados.

---

### AGENTE 4: SINCRONIZAÇÃO DOCS ↔ APOSTILA-IA + COMMIT/PR
**Modelo recomendado:** General-purpose (git, arquivo)

**Tarefas:**
1. Copiar `apostila-ia/INVENTARIO_CURRICULAR.md` → `inventario/INVENTARIO_CURRICULAR.md`
2. Copiar `apostila-ia/matriz/MATRIZ_COBERTURA.md` → `matriz/MATRIZ_COBERTURA.md`
3. Copiar `apostila-ia/MATRIZ_COBERTURA.csv` → `matriz/MATRIZ_COBERTURA.csv`
4. Copiar `apostila-ia/PLANO_EXECUCAO.md` → raiz (se diferente)
5. Copiar `apostila-ia/DECISOES_ARQUITETURAIS.md` → raiz
6. Copiar `apostila-ia/AUDITORIA_FINAL.md` → `docs/AUDITORIA_FINAL.md` (atualizado)
7. Copiar `apostila-ia/PENDENCIAS.md` → `docs/PENDENCIAS.md` (atualizado)
8. Copiar `apostila-ia/RELATORIO_TESTES.md` → `docs/RELATORIO_TESTES.md` (atualizado)
9. Stage arquivos alterados: `git add <caminhos-explicitos>` (NUNCA `git add -A` ou `.`)
10. Commit: `git commit -m "Finalização: D3 embed vídeos, D4 validação navegador, D5 referências, sincronia docs"`
11. Push para branch `feat/finalizacao-projeto` e abrir PR para `main`

**Critério de aceite:** Docs sincronizados; commit limpo; PR aberto; CI passando (node --check + validações).

---

### AGENTE 5: RELATÓRIO FINAL DE CONFORMIDADE
**Modelo recomendado:** General-purpose (redação técnica, consolidação)

**Tarefas:**
1. Consolidar todas as evidências dos Agentes 1-4
2. Atualizar `AUDITORIA_FINAL.md` com resultados finais (todas as linhas "ATENDIDO" sem ressalvas)
3. Criar `docs/RELATORIO_FINAL_CONFORMIDADE_<data>.md` com:
   - Resumo executivo
   - Matriz de conformidade final (19 critérios Seção 18)
   - Evidências por critério
   - Limitações conhecidas (se houver remanescentes honestas)
   - Instruções de uso/manutenção/validação atualizadas
4. Verificar se `README.md` na raiz e em `apostila-ia/` estão atualizados
5. Declarar projeto **CONCLUÍDO** se todos os 19 critérios ATENDIDOS sem classificação incorreta

**Critério de aceite:** Auditoria final 100% ATENDIDA; relatório final publicado; projeto declarado concluído.

---

## ORDEM DE EXECUÇÃO RECOMENDADA

```
┌─────────────────────────────────────────────────────────────┐
│ FASE A (paralelo): Agente 1 (D4) + Agente 2 (D3) + Agente 3 (D5) │
│                    [Podem rodar simultaneamente]             │
├─────────────────────────────────────────────────────────────┤
│ FASE B: Agente 4 (Sincronização + Commit + PR)              │
├─────────────────────────────────────────────────────────────┤
│ FASE C: Agente 5 (Relatório Final + Declaração Conclusão)   │
└─────────────────────────────────────────────────────────────┘
```

---

## COMANDOS DE VALIDAÇÃO LOCAIS (para cada agente rodar antes de entregar)

```bash
# Sintaxe JS
node --check apostila-ia/assets/js/<arquivo>.js
node --check apostila-ia/assets/data/<arquivo>.js

# Estrutura
node verificacao/verificar-estrutura.js

# Simuladores (smoke)
node workspace/phase5_smoke.js

# Browser smoke (requer Playwright)
node verificacao/test-browser-smoke.cjs
node verificacao/test-browser-interactions.cjs
```

---

## ARQUIVOS-CHAVE PARA CONSULTA

- Requisitos: `prompts/Escrita.md` (Seção 18 = 19 critérios de aceite)
- Auditoria atual: `apostila-ia/AUDITORIA_FINAL.md`
- Pendências: `apostila-ia/PENDENCIAS.md`
- Inventário: `apostila-ia/INVENTARIO_CURRICULAR.md`
- Referências: `referencias/referencias-verificadas.md`
- Vídeos validados: `referencias/referencias-verificadas.md` (Bloco 6)
- AGENTS.md: regras de git, estrutura, comandos