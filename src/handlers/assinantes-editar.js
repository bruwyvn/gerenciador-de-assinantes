const Assinante = require("..");

const AssinantesEditar = async (request, response) => {
    try {
        const { codigo } = request.params;
        const {
          nome,
          sobrenome,
          dataNascimento,
          telefone,
          endereco,
          cidade,
          estado,
          status,
          fotoPerfil,
        } = request.body;
    
        // Encontrar o Assinante pelo código
        const assinante = await Assinante.findOne({ codigo });
    
        if (!assinante) {
          return response.status(404).json({ message: "Assinante não encontrado." });
        }
    
        // Atualizar os campos do Assinante
        assinante.nome = nome || assinante.nome;
        assinante.sobrenome = sobrenome || assinante.sobrenome;
        assinante.dataNascimento = dataNascimento || assinante.dataNascimento;
        assinante.telefone = telefone || assinante.telefone;
        assinante.endereco = endereco || assinante.endereco;
        assinante.cidade = cidade || assinante.cidade;
        assinante.estado = estado || assinante.estado;
        assinante.status = status || assinante.status;
    
        // Atualizar a foto de perfil, se fornecida
        if (fotoPerfil) {
          assinante.fotoPerfil = Buffer.from(fotoPerfil, "base64");
        }
    
        // Salvar as alterações no banco de dados
        await assinante.save();
        return res
          .status(200)
          .json({ message: "Assinante atualizado com sucesso." });
      } catch (error) {
        console.error("Erro ao atualizar assinante:", error);
        return response.status(500).json({ message: "Erro ao atualizar assinante." });
      }
}

module.exports = AssinantesEditar