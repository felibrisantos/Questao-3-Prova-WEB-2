# Questão 3 da prova de WEB

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
```

Depois, entre na pasta do projeto e instale as dependências usando o comando:

```bash
npm install
```

## Uso
Para executar o projeto, use o comando:

```bash
   node app.js
```

Isso irá iniciar o servidor na porta 3000. Você pode acessar a aplicação pelo navegador em http://localhost:3000.

## Operações CRUD

Para realizar as operações CRUD, você pode utilizar o seguinte comando no terminal Bash:

```bash
curl -X <método> -H "Content-Type: application/json" -d '{<dados>}' http://localhost:<porta>/alunos
```
Aqui está o significado de cada parte do comando:

- `<método>`: O método HTTP que você deseja executar (POST, GET, PUT ou DELETE).
- `<dados>`: O corpo da solicitação no formato JSON.
- `<porta>`: A porta em que o servidor está sendo executado (normalmente 3000)
Por exemplo, para obter a lista de todos os usuários, você pode usar o seguinte comando:

```bash
curl http://localhost:3000/usuarios
```
Isso irá retornar um array JSON com os usuários cadastrados. 

Para obter os detalhes de um usuário específico, você pode usar o seguinte comando, substituindo o id pelo valor desejado:
```bash
curl http://localhost:3000/usuarios/1
```
Isso irá retornar um objeto JSON com o usuário correspondente ao id informado. 

Para criar um novo usuário, você pode usar o seguinte comando, substituindo os dados pelo valor desejado:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"nome": "Novo Usuário", "email": "novo@exemplo.com", "data_nascimento": "2001-01-01"}' http://localhost:3000/usuarios
```
Isso irá retornar um objeto JSON com uma mensagem de sucesso e o usuário criado. 

Para atualizar um usuário existente, você pode usar o seguinte comando, substituindo o id e os dados pelo valor desejado:
```bash
curl -X PATCH -H "Content-Type: application/json" -d '{"nome": "Usuário Atualizado", "email": "atualizado@exemplo.com", "data_nascimento": "2002-02-02"}' http://localhost:3000/usuarios/1
```
Isso irá retornar um objeto JSON com o usuário atualizado. 

Para remover um usuário existente, você pode usar o seguinte comando, substituindo o id pelo valor desejado:
```bash
curl -X DELETE http://localhost:3000/usuarios/1
```

## Autor

Felipe Brigagão Santos
