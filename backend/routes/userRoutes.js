const express = require('express');
const router = express.Router();
const userController = require('./userController');

// Rotas para manipulação de usuários
router.get('/usuarios', userController.getUsers); // Obter todos os usuários
router.get('/usuarios/:id', userController.getUserById); // Obter usuário pelo ID
router.put('/usuarios/:id', userController.updateUser); // Atualizar usuário pelo ID
router.delete('/usuarios/:id', userController.deleteUser); // Excluir usuário pelo ID

module.exports = router;
