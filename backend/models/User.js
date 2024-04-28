const express = require('express');
const router = express.Router();
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

// Rota para cadastrar um novo usuário
router.post('/cadastrarUsuario', async (req, res) => {
  const { cpf, nome, email, profissao, senha } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query('INSERT INTO usuarios (cpf, nome, email, profissao, senha) VALUES ($1, $2, $3, $4, $5)', [cpf, nome, email, profissao, senha]);
    client.release();
    res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário. Por favor, tente novamente.' });
  }
});

module.exports = router;
