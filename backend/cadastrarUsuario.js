const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Middleware para permitir solicitações CORS
app.use(cors());

// Simulação de um banco de dados de usuários
const usuarios = [];

// Rota para cadastrar usuário
app.post('http://192.168.1.7:3000/api/cadastrarUsuario', (req, res) => {
  const { cpf, nome, email, profissao, senha } = req.body;
  
  // Verifica se todos os campos foram fornecidos
  if (!cpf || !nome || !email || !profissao || !senha) {
    return res.status(400).json({ message: 'Por favor, forneça todos os campos necessários.' });
  }

  // Verifica se o usuário já está cadastrado
  const usuarioExistente = usuarios.find(usuario => usuario.cpf === cpf);
  if (usuarioExistente) {
    return res.status(400).json({ message: 'CPF já cadastrado.' });
  }

  // Salva o usuário no "banco de dados"
  usuarios.push({ cpf, nome, email, profissao, senha });
  
  // Retorna uma resposta de sucesso
  res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
