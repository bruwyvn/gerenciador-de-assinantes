const Assinante = require("..");

const AssinantesCriar = async (request, response) => {
  try {
    const {
      codigo,
      nome,
      sobrenome,
      dataNascimento,
      telefone,
      endereco,
      cidade,
      estado,
      status,
    } = request.body;
    const fotoPerfil = request.body.fotoPerfil;

    // Verificar se todos os campos obrigatórios estão presentes
    if (
      !codigo ||
      !nome ||
      !sobrenome ||
      !dataNascimento ||
      !telefone ||
      !endereco ||
      !cidade ||
      !estado ||
      !status
    ) {
      return response
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    }

    // Verificar se a foto de perfil foi fornecida
    if (!fotoPerfil) {
      return response
        .status(400)
        .json({ message: "A foto de perfil é obrigatória." });
    }

    // Salvar o Assinante no banco de dados
    const assinante = new Assinante({
      codigo,
      nome,
      sobrenome,
      dataNascimento,
      telefone,
      endereco,
      cidade,
      estado,
      status,
      fotoPerfil: Buffer.from(fotoPerfil, "base64"), // Converter a imagem para Buffer
    });

    await assinante.save();
    return response
      .status(201)
      .json({ message: "Assinante cadastrado com sucesso." });
  } catch (error) {
    console.error("Erro ao cadastrar assinante:", error);
    return response.status(500).json({ message: "Erro ao cadastrar assinante." });
  }
};

module.exports = AssinantesCriar;
