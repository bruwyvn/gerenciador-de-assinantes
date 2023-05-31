const Assinante = require("..");

const AssinantesBuscar = async (request, response) => {
  try {
    const { nome, sobrenome, cidade, estado, status } = request.query;
    const query = {};

    if (nome) {
      query.nome = nome;
    }

    if (sobrenome) {
      query.sobrenome = sobrenome;
    }

    if (cidade) {
      query.cidade = cidade;
    }

    if (estado) {
      query.estado = estado;
    }

    if (status) {
      query.status = status;
    }

    const assinantes = await Assinante.find(query);
    return response.json(assinantes);
  } catch (err) {
    console.error("Erro ao buscar assinantes:", err);
    return response.status(500).json({ message: "Erro ao buscar assinantes." });
  }
};

module.exports = AssinantesBuscar;
