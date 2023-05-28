link do app = https://front-end-app-recipes.vercel.app/

## Rodando a aplicação inicial via Docker

<details>
  <summary>Informações importantes</summary>

- Rode esse comando para baixar a imagem do mongoDB, e já criar os containers do banco de dados, do back-end e do front-end, conectar os containers e iniciar a aplicação num passe de mágica => npm run create-population-db

- Você precisa ter o docker & docker-compose instalado na sua máquina.
- OBS: No arquivo .env do back-end esta o email e senha para logar no admin do site, você pode alterar se quiser.
- OBS: Os outros usuários que se cadastrarem no site não terão acesso ao admin e 
algumas funcionalidades do site, como a criação de novos produtos, por exemplo, serão apenas usuários clientes.

</details>


<summary>ARQUIVO .env</summary>
## Configurações do banco de dados e do back-end, arquivo '.env' necessário para rodar o projeto

<details>
- Esse email e senha são para logar no admin do site, você pode alterar se quiser.
- ADMIN_EMAIL="pupy@gmail.com"
- ADMIN_PASSWORD="pupy123456"

- Essa palavra secreta é para gerar o token de autenticação, você pode alterar se quiser também.
- JWT_SECRET="secret"

- Porta do back-end, você pode alterar se quiser.
- PORT=3001

- Url do banco de dados, se quiser usar o banco de dados local, basta alterar a url para => mongodb://localhost:27017/recipes-app
MONGO_DB_URL="mongodb+srv://"nome-aqui":"sua-senha-aqui"@cluster0.vu5bq4e.mongodb.net/"

- ARQUIVO .env
-- ADMIN_EMAIL="pupy@gmail.com"
-- ADMIN_PASSWORD="pupy123456"
-- JWT_SECRET="secret"
-- PORT=3001
-- MONGO_DB_URL="mongodb://localhost:27017/recipes-app" OU "mongodb+srv://<nome-aqui>:<sua-senha-aqui>@cluster0..."
</details>

## Lista de endpoints
```bash
  Alguns endpoints estão no arquivo app-recipes.json, você pode importar esse arquivo no insomnia ou postman ou thunder-client, para testar os endpoints.
```
