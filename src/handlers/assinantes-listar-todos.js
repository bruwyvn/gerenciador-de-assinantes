const Assinante = require("../assinante");

const AssinantesListarTodos = async (response) => {
    try {
        const assinantes = await Assinante.find();
        return response.json(assinantes);
      } catch (err) {
        console.error("Erro ao obter assinantes:", err);
        return response.status(500).json({ message: "Erro ao obter assinantes." });
      }
};

module.exports = AssinantesListarTodos;
