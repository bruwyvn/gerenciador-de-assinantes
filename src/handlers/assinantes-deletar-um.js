const Assinante = require("../assinante");

const AssinantesDeletarUm = async (request, response) => {
  try {
    const { codigo } = request.params;
    const assinante = await Assinante.findOneAndDelete({ codigo });

    if (!assinante) {
      return response
        .status(404)
        .json({ message: "Assinante não encontrado." });
    }

    return response.json({ message: "Assinante deletado com sucesso." });
  } catch (err) {
    console.error("Erro ao deletar assinante:", err);
    return response.status(500).json({ message: "Erro ao deletar assinante." });
  }
};

module.exports = AssinantesDeletarUm;
