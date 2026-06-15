# Documentação - Testes Automatizados Webdojo (Cypress)

## Sobre o projeto

Este repositório contém os testes automatizados End-to-End (E2E) da aplicação **Webdojo**, desenvolvidos utilizando o **Cypress**. A aplicação Webdojo está localizada no mesmo repositório dos testes.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

Após clonar o repositório, instale as dependências do projeto:

```bash
npm install
```

## Executando a aplicação Webdojo

Como a aplicação Webdojo está no mesmo repositório dos testes, é necessário iniciá-la **antes** de executar os testes. Para isso, rode o comando:

```bash
npm run dev
```

Esse comando utiliza o pacote `serve` para disponibilizar a aplicação (pasta `dist`) na porta `3000`.

> ⚠️ **Importante:** mantenha esse comando em execução em um terminal separado enquanto os testes estiverem rodando, pois o Cypress depende da aplicação estar disponível em `http://localhost:3000`.

## Scripts disponíveis

Os scripts de execução dos testes estão definidos no `package.json`:

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `serve -s dist -p 3000` | Inicia a aplicação Webdojo na porta 3000 |
| `test` | `npx cypress run` | Executa **todos** os testes em modo headless (sem interface gráfica) |
| `test:ui` | `npx cypress open` | Abre a interface gráfica do Cypress, permitindo selecionar e visualizar a execução dos testes |
| `test:login` | `npx cypress run --spec cypress/e2e/login.cy.js` | Executa apenas o spec de login em modo headless |
| `test:login:mobile` | `npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896` | Executa o spec de login simulando viewport mobile (414x896) |

### Exemplos de uso

Rodar todos os testes:

```bash
npm run test
```

Abrir a interface interativa do Cypress:

```bash
npm run test:ui
```

Executar apenas o teste de login:

```bash
npm run test:login
```

Executar o teste de login em viewport mobile:

```bash
npm run test:login:mobile
```

## Estrutura do projeto

A estrutura da pasta `cypress` está organizada da seguinte forma:

```
cypress
├── e2e
├── fixtures
│   ├── 1.pdf
│   ├── cep.json
│   └── consultancy.json
└── support
    ├── actions
    │   └── consultancy.actions.js
    ├── commands.js
    ├── e2e.js
    └── utils.js
```

### Descrição das pastas e arquivos

#### `e2e/`
Contém os arquivos de especificação dos testes (`*.cy.js`), onde ficam os casos de teste end-to-end das funcionalidades da aplicação Webdojo (ex: login, cadastro, fluxos de consultoria, etc.).

#### `fixtures/`
Armazena os dados estáticos (massa de dados) utilizados nos testes:

- **`1.pdf`**: arquivo utilizado em testes que envolvem upload de documentos.
- **`cep.json`**: dados mockados/estáticos relacionados a CEP (endereço), usados para preencher formulários ou validar respostas de API.
- **`consultancy.json`**: dados mockados/estáticos referentes ao fluxo de consultoria.

#### `support/`
Contém arquivos de configuração e suporte aos testes:

- **`actions/consultancy.actions.js`**: agrupa ações (funções reutilizáveis) relacionadas ao fluxo de consultoria, encapsulando interações repetitivas com a interface.
- **`commands.js`**: define comandos customizados do Cypress (`Cypress.Commands.add`), que podem ser reutilizados em diferentes specs.
- **`e2e.js`**: arquivo de configuração carregado automaticamente antes dos testes E2E, geralmente utilizado para importar comandos customizados, configurar hooks globais (`beforeEach`, `afterEach`), etc.
- **`utils.js`**: funções utilitárias gerais (helpers) que auxiliam na escrita dos testes, como formatação de dados, geração de valores aleatórios, etc.

## Fluxo recomendado de execução

1. Instale as dependências: `npm install`
2. Inicie a aplicação Webdojo: `npm run dev`
3. Em outro terminal, execute os testes desejados:
   - Todos os testes: `npm run test`
   - Modo interativo: `npm run test:ui`
   - Teste específico de login: `npm run test:login`
   - Teste de login em mobile: `npm run test:login:mobile`

## Observações

- Os testes assumem que a aplicação está rodando em `http://localhost:3000`. Caso a porta ou URL base seja diferente, ajuste a configuração do `baseUrl` no arquivo `cypress.config.js`.
- Para criar novos testes, recomenda-se seguir o padrão de organização atual: specs em `e2e/`, dados em `fixtures/` e ações/comandos reutilizáveis em `support/`.
