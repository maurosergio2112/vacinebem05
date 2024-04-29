const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const { cadastrarUsuario } = require('./authController'); // Importe o controlador para cadastrar usuário

// Middleware para permitir solicitações CORS
router.use(cors());

// Middleware para analisar corpos de solicitação JSON
router.use(bodyParser.json());

// Rota para cadastrar usuário
router.post('/cadastrarUsuario', cadastrarUsuario);

module.exports = router;
