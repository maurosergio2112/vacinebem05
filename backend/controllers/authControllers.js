const { Pool } = require('pg');

// Configuração do banco de dados (substitua pelas suas credenciais)
const pool = new Pool({
  user: 'default',
  host: 'ep-delicate-thunder-a4g418u0-pooler.us-east-1.aws.neon.tech',
  database: 'verceldb',
  password: 'iYg3Zfn4GyoD',
  ssl: {
    rejectUnauthorized: false
  }
});

// Função para cadastrar um novo usuário
const cadastrarUsuario = async (req, res) => {
  const { cpf, nome, email, profissao, senha } = req.body;
  try {
    const client = await pool.connect();
    // Execute a lógica de inserção no banco de dados com os dados recebidos
    const result = await client.query('INSERT INTO usuarios (cpf, nome, email, profissao, senha) VALUES ($1, $2, $3, $4, $5)', [cpf, nome, email, profissao, senha]);
    client.release();
    // Envie uma resposta de sucesso
    res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    // Se houver um erro, envie uma resposta de erro
    res.status(500).json({ error: 'Erro ao cadastrar usuário. Por favor, tente novamente.' });
  }
};

module.exports = {
  cadastrarUsuario
};
