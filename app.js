const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Importe o módulo path
const app = express();
const port = 3000;

// Configuração para usar o body-parser para interpretar JSON
app.use(bodyParser.json());

// Configuração do mecanismo de visualização EJS e diretório de views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuração para servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static("public"));

// Simulação de dados
let usuarios = [
  {
    id: 1,
    nome: "Usuário Padrão",
    email: "usuario@exemplo.com",
    data_nascimento: "2000-01-01",
  },
];

// Rota para exibir a página inicial
app.get("/", (req, res) => {
  res.render("index");
});

// Rota para obter todos os usuários
app.get("/usuarios", (req, res) => {
  res.render("usuarios", { usuarios });
});
7;

// Rota para obter um usuário pelo ID
app.get("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario)
    return res.status(404).json({ error: "Usuário não encontrado" });
  res.render("usuario", { usuario });
});

// Rota para exibir o formulário de criação de usuário
app.get("/usuarios/novo", (req, res) => {
  res.render("form");
});

// Rota para criar um novo usuário
app.post("/usuarios", (req, res) => {
  const novoUsuario = req.body;
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// Rota para atualizar um usuário pelo ID
app.patch("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario)
    return res.status(404).json({ error: "Usuário não encontrado" });

  // Atualiza apenas os campos fornecidos no corpo da solicitação
  Object.assign(usuario, req.body);

  res.json(usuario);
});

// Rota para excluir um usuário pelo ID
app.delete("/usuarios/:id", (req, res) => {
  usuarios = usuarios.filter((u) => u.id !== parseInt(req.params.id));
  res.json({ message: "Usuário removido com sucesso" });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
