const pool = require('./db'); // Importe a conexão com o banco de dados aqui

// Função para obter todos os usuários
const getUsers = async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(users.rows);
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    res.status(500).json({ error: 'Erro ao obter usuários. Por favor, tente novamente.' });
  }
};

// Função para obter um usuário pelo ID
const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (user.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json(user.rows[0]);
  } catch (error) {
    console.error('Erro ao obter usuário:', error);
    res.status(500).json({ error: 'Erro ao obter usuário. Por favor, tente novamente.' });
  }
};

// Função para atualizar um usuário
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { email, senha } = req.body;
  try {
    const user = await pool.query('UPDATE usuarios SET email = $1, senha = $2 WHERE id = $3 RETURNING *', [email, senha, id]);
    res.status(200).json(user.rows[0]);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro ao atualizar usuário. Por favor, tente novamente.' });
  }
};

// Função para excluir um usuário
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
    res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ error: 'Erro ao excluir usuário. Por favor, tente novamente.' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
