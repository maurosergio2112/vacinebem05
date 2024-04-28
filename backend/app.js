const express = require('express');
const app = express();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

// Middleware para processar dados JSON
app.use(express.json());

// Rotas de autenticação
app.use('/auth', authRoutes);

// Rotas de usuário
app.use('/user', userRoutes);

// Rota de teste para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor está ativo!');
});

// Porta em que o servidor irá ouvir
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
