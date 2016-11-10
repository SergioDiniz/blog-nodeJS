var routers = require('express').Router();
var postController = require('./controller');

routers.get('/v1/usuarios/:usuarioId/posts', postController.listar);
routers.post('/v1/usuarios/:usuarioId/posts', postController.cadastrarPost);
routers.put('/v1/usuarios/:usuarioId/posts/:postId', postController.atualizarPost);
routers.get('/v1/usuarios/:usuarioId/posts/:postId', postController.buscarPostDoUsuario);
routers.delete('/v1/usuarios/:usuarioId/posts/:postId', postController.excluirPost);
routers.get('/v1/posts', postController.listarTodosOsPosts);
routers.get('/v1/posts/:postId', postController.buscarPostPorId);
routers.post('/v1/posts/:postId/comentarios', postController.adicionarComentario);

module.exports = routers;
