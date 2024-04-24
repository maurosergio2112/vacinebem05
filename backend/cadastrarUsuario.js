import { Pool } from 'pg';

export default async function handler(req, res) {
    const pool = new Pool({
        connectionString: 'postgres://default:iYg3Zfn4GyoD@ep-delicate-thunder-a4g418u0-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require',
      });
      

  const { cpf, nome, email, profissao, senha } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query('INSERT INTO usuario (cpf, nome, email, profissao, senha) VALUES ($1, $2, $3, $4, $5)', [cpf, nome, email, profissao, senha]);
    client.release();
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
}
