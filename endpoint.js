const express = require('express');
const bodyParser = require('body-parser');
const { cadastrarUsuario, autenticarUsuario } = require('./funcoes'); // Importando as funções que criamos anteriormente

const app = express();
app.use(bodyParser.json());

// Endpoint para cadastro de usuário
app.post('/api/cadastrar', async (req, res) => {
    const { cpf, nome, email, profissao, senha } = req.body;
    if (!cpf || !nome || !email || !profissao || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    const result = await cadastrarUsuario(cpf, nome, email, profissao, senha);
    if (result.success) {
        res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
    } else {
        res.status(400).json({ error: result.error });
    }
});

// Endpoint para autenticação de usuário
app.post('/api/login', async (req, res) => {
    const { cpf, senha } = req.body;
    if (!cpf || !senha) {
        return res.status(400).json({ error: 'CPF e senha são obrigatórios' });
    }
    const result = await autenticarUsuario(cpf, senha);
    if (result.authenticated) {
        res.status(200).json({ message: 'Login bem-sucedido', userId: result.userId });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
