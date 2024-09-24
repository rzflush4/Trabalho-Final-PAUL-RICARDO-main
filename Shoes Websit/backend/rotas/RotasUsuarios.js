const express = require('express');
const router = express.Router();
const UsuarioController = require('../controlador/Controladorusuario');

// Rota para criar um novo usuario
router.post('/usuarios', UsuarioController.createUsuario);

// Rota para obter todos os usuarios
router.get('/usuarios', UsuarioController.getAllUsuarios);

// Rota para obter um usuario pelo ID
router.get('/usuarios/:id', UsuarioController.getUsuarioById);

// Rota para atualizar um usuario
router.put('/usuarios/:id', UsuarioController.updateUsuario);

// Rota para deletar um usuario
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

// Rota para registrar entrada de estoque
//router.post('/usuarios/:id/entrada', UsuarioController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/usuarios/:id/saida', UsuarioController.registrarSaida);

module.exports = router;