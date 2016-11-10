var express = require('express');
var dobyParser = require('body-parser');
var cors = require('cors');
require('./mongodb/connect');
var usuarioRouters = require('./usuario/routers');
var postRouters = require('./post/routers');

var app = express();
app.use(dobyParser.json());
app.use(cors());
app.use(usuarioRouters);
app.use(postRouters);

var porta = process.env.PORT || 9000;
app.listen(porta, function(){
  console.log('Servidor rodando em: localhost:9000');
})
