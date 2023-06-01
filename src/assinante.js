const mongoose = require("mongoose");

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

module.exports = mongoose.model("Assinante", assinanteSchema);
