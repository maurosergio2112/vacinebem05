import { Pool } from 'pg';

export default async function handler(req, res) {
    const pool = new Pool({
        connectionString: 'postgres://default:iYg3Zfn4GyoD@ep-delicate-thunder-a4g418u0-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require',
      });
      

  const { respostas } = req.body;

  try {
    const client = await pool.connect();
    await Promise.all(respostas.map(async (resposta, index) => {
      await client.query('INSERT INTO formulario_vacinas (pergunta_id, resposta) VALUES ($1, $2)', [index + 1, resposta]);
    }));
    client.release();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar respostas:', error);
    res.status(500).json({ error: 'Erro ao salvar respostas' });
  }
}
