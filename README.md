# Codo Eletiva — API de cadastro e vendas

API de estudo para gerenciar usuários, categorias, produtos, clientes e vendas. Construída com Express, TypeScript, TypeORM e PostgreSQL.

## Requisitos

- Node.js compatível com o TypeScript 4 usado pelo projeto
- Yarn
- PostgreSQL

## Configuração local

1. Crie um banco PostgreSQL local.
2. Configure as variáveis abaixo no ambiente do terminal ou em um arquivo .env local (não o envie ao Git):

~~~env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua-senha-local
DB_DATABASE=newApp
JWT_SECRET=gere-um-segredo-aleatorio-longo
~~~

3. Instale dependências e inicie:

~~~sh
yarn install
yarn dev
~~~

A API escuta na porta 3000. Confirme as rotas implementadas em src/routes e use http://localhost:3000 como base local. O projeto possui migrations em src/database/migrations; execute-as com TypeORM antes de testar rotas que dependam do esquema:

~~~sh
yarn typeorm migration:run
~~~

## Testes

Não há script test no package.json, portanto yarn test não está configurado. Verificação manual básica: inicie a API, consulte uma rota existente e valide uma operação CRUD com dados descartáveis no banco local. Adicione testes automatizados antes de confiar em mudanças de autenticação, autorização, validação ou persistência.

## Limitações conhecidas

Projeto de estudo, não pronto para produção. Antes de uso real, implemente testes, validação de entrada, autorização por papel validada no banco, CORS e rate limiting. Não reutilize nem versione credenciais reais.