# FCN — Apostila Web Interativa de TI, Dados e IA

Apostila web interativa em **pt-BR**, voltada a concursos públicos brasileiros, cobrindo 8 módulos obrigatórios: Microsoft 365, Redes, Comunicação, Segurança, IA, Ética, Dados e Visualização.

É uma **SPA estática** construída em HTML/CSS/JS “vanilla”: sem framework, sem build, sem `package.json`. O conteúdo curricular é definido em objetos JS literais.

> Fonte de requisitos: `Escrita.txt` na raiz deste repositório. Ele é a referência autoritativa do que a apostila deve conter.

## Site publicado (GitHub Pages)

`https://fatal1tybarucco.github.io/FCN/`

O site é publicado automaticamente por um workflow do GitHub Actions (`.github/workflows/deploy-pages.yml`) a cada push na branch `main`. A raiz do site publicado é a pasta `apostila-ia/`, ou seja, o endereço acima serve o conteúdo de `apostila-ia/index.html`.

## Como executar localmente

Duas opções, ambas a partir da raiz do repositório:

**Opção A — abrir direto o arquivo**

```bash
open apostila-ia/index.html
```

**Opção B — servidor estático local**

```bash
cd apostila-ia
python3 -m http.server 8080
# abra http://localhost:8080
```

Não há etapa de build ou instalação de dependências.

## Estrutura de diretórios

```
Escrita.txt                 # prompt mestre (fonte de requisitos)
AGENTS.md                   # contexto de agentes do projeto
apostila-ia/                # o app (raiz do site publicado)
  index.html                # entrada da aplicação
  assets/css/styles.css
  assets/js/                # app, navigation, simulators, flashcards, quiz, charts...
  assets/data/              # currículo (M1–M8), flashcards (404), questões (365/320)
inventario/                 # inventário curricular
matriz/                     # matriz de cobertura
referencias/                # referências verificadas (ex.: LGPD)
apostila-web/               # diretório planejado (vazio)
entregas/                   # diretório planejado (vazio)
.github/workflows/          # deploy da GitHub Pages
```

Observação: `apostila-web/` e `entregas/` são estruturas planejadas e ainda vazios.

## Publicação (GitHub Pages)

- O workflow `.github/workflows/deploy-pages.yml` roda em push para `main`.
- Primeiro executa um job de verificação (`node --check` em todos os `.js` de `apostila-ia/assets/`).
- Só se a verificação passar, o job de deploy publica o conteúdo de `apostila-ia/` como site estático.
- O artifact do Pages aponta para `apostila-ia/` (e não para a raiz do repositório) de propósito: assim a raiz do site vira `apostila-ia/index.html`, mantendo a estrutura do app descrita no `AGENTS.md`, sem mover código para a raiz.
