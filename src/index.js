const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const Routes = require("./routes");

// Conectar ao banco de dados MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/gerenciador-de-assinantes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

app.use(express.json());
app.use("/", Routes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
