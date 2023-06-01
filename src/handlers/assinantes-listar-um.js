const Assinante = require("../assinante");

const AssinantesListarUm = async (request, response) => {
  try {
    const { codigo } = request.params;
    const assinante = await Assinante.findOne({ codigo });

    if (!assinante) {
      return response
        .status(404)
        .json({ message: "Assinante não encontrado." });
    }

    return response.json(assinante);
  } catch (err) {
    console.error("Erro ao obter assinante:", err);
    return response.status(500).json({ message: "Erro ao obter assinante." });
  }
};

module.exports = AssinantesListarUm;
