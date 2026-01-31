# Next.js Lamoda Test

Este é um projeto de teste para desenvolvimento de aplicações Next.js, focado em componentes de e-commerce.

This is a test project for Next.js application development, focused on e-commerce components.

## Estrutura de Arquivos / File Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/             # React Components
│   │   ├── Cart/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── ProductCard/
│   │   └── Section/
│   ├── features/               # Feature-based modules
│   │   ├── cart/               # Cart functionality
│   │   └── products/           # Product-related features
│   │       ├── services/       # API services
│   │       └── utils/          # Utility functions
│   ├── mocks/                  # Mock data
│   └── utils/                  # Shared utilities
├── public/                     # Static assets
├── jest.config.ts              # Jest configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Instalação / Installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Scripts Disponíveis / Available Scripts

### Desenvolvimento / Development

```bash
npm run dev
```

Inicia o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000).

Starts the development server on [http://localhost:3000](http://localhost:3000).

### Build / Build

```bash
npm run build
```

Cria uma versão otimizada para produção.

Creates an optimized production build.

### Linting / Linting

```bash
npm run lint
```

Executa o ESLint para verificar problemas de código.

Runs ESLint to check for code issues.

### Formatação / Formatting

```bash
npm run format
```

Formata o código usando Prettier.

Formats code using Prettier.

### Testes / Testing

```bash
npm test
```

Executa todos os testes com Jest.

Runs all tests with Jest.

```bash
npm test -- --coverage
```

Executa os testes e gera relatório de cobertura.

Runs tests and generates coverage report.

### Commits Convencionais / Conventional Commits

Este projeto usa [Conventional Commits](https://conventionalcommits.org/) para padronizar mensagens de commit.

This project uses [Conventional Commits](https://conventionalcommits.org/) to standardize commit messages.

```bash
npm run commitlint
```

Valida as mensagens de commit.

Validates commit messages.

## Cobertura de Testes / Test Coverage

Para visualizar a cobertura de testes, execute:

To view test coverage, run:

```bash
npm test -- --coverage
```

O relatório será gerado na pasta `coverage/`.

The report will be generated in the `coverage/` folder.

## Tecnologias Utilizadas / Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitlint** - Commit message linting

## Scripts Adicionais / Additional Scripts

```bash
npm run start     # Inicia servidor de produção
npm run lint:fix  # Corrige problemas de linting automaticamente
npm run format:check # Verifica formatação sem modificar arquivos
```

## Contribuição / Contributing

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

6. Fork the project
7. Create a feature branch (`git checkout -b feature/new-feature`)
8. Commit your changes (`git commit -m 'feat: add new feature'`)
9. Push to the branch (`git push origin feature/new-feature`)
10. Open a Pull Request
