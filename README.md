# Questao-3-Prova-WEB-2

# API de Usuários

Este projeto é uma API de Usuários que permite realizar operações CRUD (Create, Read, Update, Delete) sobre uma lista de usuários em memória. A API também suporta requisições feitas pelo comando curl, retornando respostas em formato JSON.

## Tecnologias utilizadas

- [Express]: um framework web para Node.js que facilita a criação de aplicações web e APIs.
- [body-parser]: um módulo que permite analisar o corpo das requisições HTTP e extrair os dados enviados pelo cliente.
- [EJS]: um template engine que permite gerar HTML dinâmico a partir de dados e lógica.
- [path]: um módulo nativo do Node.js que fornece utilitários para trabalhar com caminhos de arquivos e diretórios.

## Instalação

Para instalar o projeto, você precisa ter o [Node.js] e o [npm] instalados na sua máquina. Em seguida, clone o repositório do projeto usando o comando:

```bash
git clone https://github.com/seu-usuario/api-usuarios.git

Depois, entre na pasta do projeto e instale as dependências usando o comando:

npm install

Uso
Para executar o projeto, use o comando:

npm start

Isso irá iniciar o servidor na porta 3000. Você pode acessar a aplicação pelo navegador em http://localhost:3000.

A aplicação possui as seguintes rotas:

GET /: exibe uma página inicial com uma mensagem de boas-vindas. Se a requisição for feita pelo comando curl, retorna um objeto JSON com a mesma mensagem.
GET /usuarios: exibe uma página com a lista de todos os usuários cadastrados. Se a requisição for feita pelo comando curl, retorna um array JSON com os mesmos usuários.
GET /usuarios/:id: exibe uma página com os detalhes de um usuário específico, dado o seu id. Se a requisição for feita pelo comando curl, retorna um objeto JSON com o mesmo usuário. Se o id não corresponder a nenhum usuário, retorna um erro 404.
POST /usuarios: cria um novo usuário com os dados enviados no corpo da requisição. O usuário deve ter os campos nome, email e data_nascimento. Se a requisição for feita pelo comando curl, retorna um objeto JSON com uma mensagem de sucesso e o usuário criado. Se a requisição for feita pelo navegador, redireciona para a rota /usuarios.
PATCH /usuarios/:id: atualiza um usuário existente com os dados enviados no corpo da requisição. O usuário deve ter os campos nome, email e data_nascimento. Se a requisição for feita pelo comando curl, retorna um objeto JSON com o usuário atualizado. Se a requisição for feita pelo navegador, redireciona para a rota /usuarios/:id. Se o id não corresponder a nenhum usuário, retorna um erro 404.
DELETE /usuarios/:id: remove um usuário existente, dado o seu id. Se a requisição for feita pelo comando curl, retorna um objeto JSON com uma mensagem de sucesso. Se a requisição for feita pelo navegador, redireciona para a rota /usuarios. Se o id não corresponder a nenhum usuário, retorna um erro 404.
