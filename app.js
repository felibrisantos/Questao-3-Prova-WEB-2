const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

let usuarios = [
  {
    id: 1,
    nome: "Usuário Padrão",
    email: "usuario@exemplo.com",
    data_nascimento: "2000-01-01",
  },
];

app.get("/", (req, res) => {
  const isCurlRequest = req.get("User-Agent").startsWith("curl");

  if (isCurlRequest) {
    res.json({ message: "Bem-vindo à API de Usuários!" });
  } else {
    res.render("index");
  }
});

app.get("/usuarios", (req, res) => {
  const isCurlRequest = req.get("User-Agent").startsWith("curl");

  if (isCurlRequest) {
    res.json({ usuarios });
  } else {
    res.render("usuarios", { usuarios });
  }
});

app.get("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario)
    return res.status(404).json({ error: "Usuário não encontrado" });

  const isCurlRequest = req.get("User-Agent").startsWith("curl");

  if (isCurlRequest) {
    res.json({ usuario });
  } else {
    res.render("usuario", { usuario });
  }
});

app.post("/usuarios", (req, res) => {
  const novoUsuario = req.body;
  novoUsuario.id = usuarios.length + 1;
  usuarios.push(novoUsuario);

  const isCurlRequest = req.get("User-Agent").startsWith("curl");

  if (isCurlRequest) {
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", usuario: novoUsuario });
  } else {
    res.redirect("/usuarios");
  }
});

app.patch("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario)
    return res.status(404).json({ error: "Usuário não encontrado" });

  Object.assign(usuario, req.body);

  const isCurlRequest = req.get("User-Agent").startsWith("curl");

  if (isCurlRequest) {
    res.json({ usuario });
  } else {
    res.redirect("/usuarios/" + usuario.id);
  }
});

app.delete("/usuarios/:id", (req, res) => {
  usuarios = usuarios.filter((u) => u.id !== parseInt(req.params.id));

  const isCurlRequest = req.get("User-Agent").startsWith("curl");

  if (isCurlRequest) {
    res.json({ message: "Usuário removido com sucesso" });
  } else {
    res.redirect("/usuarios");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
