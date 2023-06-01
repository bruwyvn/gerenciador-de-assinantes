# Gerenciador de Assinantes

Este é um projeto de Gerenciador de Assinantes desenvolvido com Node.js, Express e MongoDB.

## Configuração do Ambiente de Desenvolvimento

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

2. Clone este repositório em sua máquina local.

   ```
   $ git clone https://github.com/bruwyvn/gerenciador-de-assinantes.git
   ```

3. Navegue até o diretório do projeto.

   ```
   $ cd gerenciador-de-assinantes
   ```

4. Instale as dependências do projeto.

   ```
   $ npm install
   ```

5. Inicie o servidor localmente.

   ```
   $ npm run dev
   ```

   O servidor estará em execução em `http://localhost:3000`.

## Documentação da API REST

### Cadastro de Assinante

Cria um novo assinante com os seguintes campos:

- Codigo (String, obrigatório)
- Nome (String, obrigatório)
- Sobrenome (String, obrigatório)
- Data de Nascimento (Date, obrigatório)
- Telefone (String, obrigatório)
- Endereço (String, obrigatório)
- Cidade (String, obrigatório)
- Estado (String, obrigatório)
- Status (String, obrigatório: "Ativo" ou "Inativo")
- Foto de Perfil (Base64, obrigatório)

**Endpoint:** `POST /assinantes`

**Exemplo de solicitação:**

```json
POST /assinantes
Content-Type: application/json

{
  "codigo": "123",
  "nome": "João",
  "sobrenome": "Silva",
  "dataNascimento": "1990-01-01",
  "telefone": "123456789",
  "endereco": "Rua A, 123",
  "cidade": "São Paulo",
  "estado": "SP",
  "status": "Ativo",
  "fotoPerfil": "base64_encoded_image"
}
```

### Edição de Informações Pessoais do Assinante

Atualiza as informações pessoais de um assinante existente.

**Endpoint:** `PUT /assinantes/:codigo`

**Exemplo de solicitação:**

```json
PUT /assinantes/123
Content-Type: application/json

{
  "nome": "João Carlos",
  "sobrenome": "Silva",
  "dataNascimento": "1990-01-01",
  "telefone": "123456789",
  "endereco": "Rua B, 456",
  "cidade": "São Paulo",
  "estado": "SP",
  "status": "Inativo",
  "fotoPerfil": "base64_encoded_image"
}
```

### Listagem de Todos os Assinantes

Obtém a lista de todos os assinantes cadastrados.

**Endpoint:** `GET /assinantes`

### Busca de Assinante por Código

Obtém um único assinante com base no código fornecido.

**Endpoint:** `GET /assinantes/:codigo`

### Busca de Assinantes por Nome, Sobrenome, Cidade, Estado e Status

Obtém uma lista de assinantes com base nos critérios de busca fornecidos.

**Endpoint:** `GET /assinantes/busca?nome=...

&sobrenome=...&cidade=...&estado=...&status=...`

### Exclusão de Assinante

Remove um assinante existente com base no código fornecido.

**Endpoint:** `DELETE /assinantes/:codigo`
