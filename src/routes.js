const express = require("express");

// Handlers
const AssinantesCriar = require("./handlers/assinantes-criar");
const AssinantesEditar = require("./handlers/assinantes-editar");
const AssinantesListarTodos = require("./handlers/assinantes-listar-todos");
const AssinantesListarUm = require("./handlers/assinantes-listar-um");
const AssinantesBuscar = require("./handlers/assinantes-buscar");
const AssinantesDeletarUm = require("./handlers/assinantes-deletar-um");

const Routes = express.Router();

// Cadastro de assinante com opção de upload de imagem de perfil
Routes.post("/assinantes", async (request, response) => {
  return AssinantesCriar(request, response);
});

// Edição das informações pessoais do usuário (incluindo status e foto de perfil)
Routes.put("/assinantes/:codigo", async (request, response) => {
  return AssinantesEditar(request, response);
});

// Listar todos os usuários
Routes.get("/assinantes", async (_request, response) => {
  return AssinantesListarTodos(response);
});

// Listar um único usuário por Codigo
Routes.get("/assinantes/:codigo", async (request, response) => {
  return AssinantesListarUm(request, response);
});

// Listar usuários por Nome, Sobrenome, Cidade, Estado e Status
Routes.get("/assinantes/busca", async (request, response) => {
  return AssinantesBuscar(request, response);
});

// Deletar um usuário (Deletar do banco)
Routes.delete("/assinantes/:codigo", async (request, response) => {
  return AssinantesDeletarUm(request, response);
});

module.exports = Routes;
