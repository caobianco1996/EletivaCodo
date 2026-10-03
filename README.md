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

A API usa a porta 3000 por padrão; configure PORT para escolher outra. O endpoint GET http://localhost:3000/health retorna o estado básico do servidor. Consulte src/routes.ts para as rotas CRUD. O projeto possui migrations em src/database/migrations; execute-as antes de usar rotas que dependam do esquema:

~~~sh
yarn typeorm migration:run
~~~

## Testes

Não há script test no package.json, portanto yarn test não está configurado. Verificação manual básica: consulte /health, valide uma operação CRUD com dados descartáveis no banco local e confira a resposta de erro ao enviar uma entrada inválida. Adicione testes automatizados para autenticação, autorização e persistência antes de confiar em mudanças nessas áreas.

## Limitações conhecidas

Projeto de estudo, não pronto para produção. Antes de uso real, implemente validação de entrada, autorização por papel validada no banco, CORS com origem restrita e rate limiting. Não reutilize nem versione credenciais reais.