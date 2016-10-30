var express = require('express');
var usuarioController = require('./usuario/controller');
var dobyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(dobyParser.json());
app.use(cors());



app.get('/v1/usuarios', usuarioController.listar);
app.post('/v1/usuarios', usuarioController.cadastrar);
app.post('/v1/usuarios/auth', usuarioController.autenticar);


app.listen(9000, function(){
  console.log('Servidor rodando em: localhost:9000');
})
