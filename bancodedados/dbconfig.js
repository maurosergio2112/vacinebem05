import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    connectionString: 'postgres://default:iYg3Zfn4GyoD@ep-delicate-thunder-a4g418u0-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require',
  });
  

// Função para cadastrar um novo usuário
async function cadastrarUsuario(cpf, nome, email, profissao, senha) {
    try {
        // Verificar se o CPF já está cadastrado
        const cpfExistente = await pool.query('SELECT * FROM usuario WHERE cpf = $1', [cpf]);
        if (cpfExistente.rows.length > 0) {
            return { error: 'CPF já cadastrado' };
        }
        
        // Hash da senha
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Inserir novo usuário no banco de dados
        await pool.query('INSERT INTO usuario (cpf, nome, email, profissao, senha) VALUES ($1, $2, $3, $4, $5)', [cpf, nome, email, profissao, hashedPassword]);
        
        return { success: true };
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        return { error: 'Erro ao cadastrar usuário' };
    }
}

// Função para autenticar um usuário
async function autenticarUsuario(cpf, senha) {
    try {
        // Buscar usuário no banco de dados pelo CPF
        const result = await pool.query('SELECT * FROM usuario WHERE cpf = $1', [cpf]);
        const user = result.rows[0];
        
        // Verificar se o usuário existe e se a senha está correta
        if (!user || !(await bcrypt.compare(senha, user.senha))) {
            return { authenticated: false };
        }

        return { authenticated: true, userId: user.id };
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        return { error: 'Erro ao autenticar usuário' };
    }
}

module.exports = {
    cadastrarUsuario,
    autenticarUsuario
};
