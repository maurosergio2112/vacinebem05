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

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('./db'); // Importe a conexão com o banco de dados aqui

const register = async (req, res) => {
  try {
    const { email, senha } = req.body;
    // Verifique se o usuário já está registrado
    const existingUser = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (existingUser.rows.length !== 0) {
      return res.status(400).json({ error: 'Este e-mail já está em uso.' });
    }
    // Criptografe a senha
    const hashedPassword = await bcrypt.hash(senha, 10);
    // Insira o novo usuário no banco de dados
    await pool.query('INSERT INTO usuarios (email, senha) VALUES ($1, $2)', [email, hashedPassword]);
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro ao registrar usuário. Por favor, tente novamente.' });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    // Verifique se o usuário existe
    const user = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas. Por favor, verifique seu e-mail e senha.' });
    }
    // Verifique se a senha está correta
    const validPassword = await bcrypt.compare(senha, user.rows[0].senha);
    if (!validPassword) {
      return res.status(401).json({ error: 'Credenciais inválidas. Por favor, verifique seu e-mail e senha.' });
    }
    // Gere o token JWT
    const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro ao fazer login. Por favor, tente novamente.' });
  }
};

module.exports = {
  register,
  login
};
