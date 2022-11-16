# Blogs API - Back-End Project

Projeto de uma API e um banco de dados para a produção de conteúdo para um blog!

Aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.
Com endpoints conectados ao banco de dados seguindo os princípios do REST.
Para fazer um post é necessário usuário e login, e validação do login com Json Web Token.

Projeto 23 da [Trybe](https://wwww.betrybe.com), módulo de Back-End.

## O Projeto

* Criação de *Migrations* com **Sequelize** para as tabelas `users`, `categories`, `blog_posts` e `posts_categories`.
* Criação de *Models* com **Sequelize** para as mesmas tabelas.
* Criação do endpoint POST `/login`, com validações e com retorno de um token utilizando o Json Web Token.
* Criação do endpoint POST `/user`, com validações e com retorno de um token utilizando o Json Web Token.
* Criação do endpoint GET `/user`, que só acessado após validar o token.
* Criação do endpoint GET `/user/:id`, que só acessado após validar o token.
* Criação do endpoint POST `/categories`.
* Criação do endpoint GET `/categories`, que só acessado após validar o token.
* Criação do endpoint POST `/post`.
* Criação do endpoint GET `/post`, que só acessado após validar o token.
* Criação do endpoint GET `/post/:id`, que só acessado após validar o token.

## Instalação 

##### 1- Clonar o repositório
```
git clone git@github.com:sallybdiament/Project-23-Blogs-API.git
```
##### 2 - Subir os containers `blogs_api` e `blogs_api_db` utilizando o docker-compose

Na raíz do projeto: ``` docker-compose up -d ```

##### 3 - Abrir o terminal do container `blogs_api`

    ```docker exec -it blogs_api bash```

##### 4 - Instalar as dependências

No terminal do container: ```npm install```

##### 5 - Criar e popular o banco de dados:

Criando as tabelas: ```npm run prestart```

Populando o banco com dados: ```npm run seed```

##### 6 - Executare a aplicação:

    ```npm run dev```

##### Foi utilizado o Thunder Client como cliente de requisições HTTP

## Tecnologias
- Node.js
- Express.js
- Sequelize.js
- Json Web Tokens
- DotEnv
- Joi
- Docker
- MySQL
