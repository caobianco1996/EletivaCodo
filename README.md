# Codo Eletiva

API de demonstração para cadastro e gerenciamento de usuários, categorias, produtos, clientes e vendas usando Express, TypeScript, TypeORM e PostgreSQL.

## Requisitos

- Node.js compatível com TypeScript 4
- PostgreSQL
- Yarn

## Configuração

Defina as variáveis de ambiente antes de iniciar a aplicação ou executar migrations:

```text
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua-senha-local
DB_DATABASE=newApp
JWT_SECRET=gere-um-segredo-aleatorio-longo
```

Não reutilize credenciais que tenham sido expostas anteriormente. Não versione arquivos de ambiente.

```sh
yarn install
yarn dev
```

A API inicia na porta 3000. O esquema é gerenciado por migrations em `src/database/migrations`; mantenha `synchronize: false`.

## Estado e limitações

Este é um projeto de estudo. Antes de uso real, adicionar testes, validação de entrada, autorização por papel verificada no banco e configuração de CORS/rate limiting. O middleware de administrador deve ser coberto por testes de autorização.
