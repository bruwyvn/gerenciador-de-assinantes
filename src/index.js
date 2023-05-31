const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Conectar ao banco de dados MongoDB
mongoose
  .connect("mongodb://localhost/assinantes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

// Definir o esquema do Assinante
const assinanteSchema = new mongoose.Schema({
  codigo: String,
  nome: String,
  sobrenome: String,
  dataNascimento: Date,
  telefone: String,
  endereco: String,
  cidade: String,
  estado: String,
  status: { type: String, enum: ["Ativo", "Inativo"] },
  fotoPerfil: Buffer,
});

// Definir o modelo do Assinante
const Assinante = mongoose.model("Assinante", assinanteSchema);

app.use(express.json());

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = Assinante
