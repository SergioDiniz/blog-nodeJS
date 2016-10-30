var express = require('express');
var cadastroController = require('./usuario/cadastroController');
var dobyParser = require('body-parser');

var app = express();
app.use(dobyParser.json());



app.get('/v1/usuarios', cadastroController.listar);
app.post('/v1/usuarios', cadastroController.cadastrar);


app.listen(9000, function(){
  console.log('Servidor rodando em: localhost:9000');
})
