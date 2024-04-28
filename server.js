const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Porta do servidor

// Middleware para lidar com requisições JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo ao seu servidor Express!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
