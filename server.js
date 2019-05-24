const express = require("express");
const body = require("body-parser");
const app = express();

app.use(body.urlencoded({ extended: false }));
app.use(body.json());

let usuarios = [];

app.get("/usuario", (req, res) => {
  res.send(usuarios);
});

app.post("/usuario", (req, res) => {
  let user = {};

  user.nome = req.body.nome;
  user.id = usuarios.length;

  usuarios.push(user);
  res.send("Usuário cadastrado com sucesso!");
});

app.put("/usuario", (req, res) => {
  try {
    const { id, nome } = req.body;
    usuarios[id].nome = nome;
  } catch (error) {
    new Error("Index out of Bounds!");
  }

  res.send("Usuário atualizado com sucesso!");
});

app.delete("/usuario", (req, res) => {
  try {
    const { id } = req.body;
    arr = [];
    for (user of usuarios) {
      if (user.id != id) {
        arr.push(user);
      }
    }
    usuarios = arr;
  } catch (error) {
    new Error("Id não encontrado!");
  }

  res.send("Usuário excluído com sucesso!");
});

const port = process.env.PORT || 3000;
app.listen(port);
