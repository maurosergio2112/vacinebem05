const express = require('express');
const router = express.Router();
const authController = require('./authController');

// Rota para autenticação de login
router.post('/login', authController.login);

module.exports = router