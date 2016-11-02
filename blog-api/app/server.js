var express = require('express');
var usuarioController = require('./usuario/controller');
var postController = require('./post/controller');
var dobyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var serverConf = require('./serverConf');

var app = express();
app.use(dobyParser.json());
app.use(cors());

mongoose.Promise = global.Promise; //para a mensagem DeprecationWarning: Mongoose: mpromise
mongoose.connect('mongodb://' + serverConf.getdbuser() + ':' + serverConf.getdbpassword() + '@ds139327.mlab.com:39327/blogjs');

app.get('/v1/usuarios', usuarioController.listar);
app.post('/v1/usuarios', usuarioController.cadastrar);
app.post('/v1/usuarios/auth', usuarioController.autenticar);
app.get('/v1/usuarios/buscar/:id', usuarioController.buscar);

app.get('/v1/usuarios/:usuarioId/posts', postController.listar);
app.post('/v1/usuarios/:usuarioId/posts', postController.cadastrarPost);
app.get('/v1/usuarios/:usuarioId/posts/:postId', postController.buscarPostDoUsuario);
app.delete('/v1/usuarios/:usuarioId/posts/:postId', postController.excluirPost);



app.listen(9000, function(){
  console.log('Servidor rodando em: localhost:9000');
})
