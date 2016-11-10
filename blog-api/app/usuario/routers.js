var routers = require('express').Router();
var usuarioController = require('./controller');

routers.get('/v1/usuarios', usuarioController.listar);
routers.post('/v1/usuarios', usuarioController.cadastrar);
routers.post('/v1/usuarios/auth', usuarioController.autenticar);
routers.get('/v1/usuarios/buscar/:id', usuarioController.buscar);

module.exports = routers;
