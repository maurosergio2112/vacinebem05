const express = require('express');
const cors = require('cors'); // Importe o pacote CORS
const app = express();
const PORT = process.env.PORT || 3000; // Porta do servidor

// Middleware para lidar com requisições JSON
app.use(express.json());

// Middleware para habilitar o CORS em todas as rotas
app.use(cors());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo ao seu servidor Express!');
});

// Rota para cadastrar usuário
app.post("http://192.168.1.7:3000/api/cadastrarUsuario", (req, res) => {
  const { cpf, nome, email, profissao, senha } = req.body;
  // Aqui você pode inserir os dados no banco de dados
  // e retornar uma resposta adequada
  res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
