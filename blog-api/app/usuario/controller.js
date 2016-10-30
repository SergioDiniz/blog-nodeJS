var usuarioService = require('./service');

var cadastrar = function(req, res){
  var usuario = req.body;
  res.status(201).json(usuarioService.cadastrar(usuario));
}

var listar = function(req, res){
  res.status(200).json(usuarioService.listar());
}

var autenticar = function(req, res){
  var usuario = req.body;
  var usuarioAutenticado = usuarioService.autenticar(usuario);
  if (usuarioAutenticado){
    console.log(usuarioAutenticado);
    res.status(200).json(usuarioAutenticado);
  }else{
    res.status(401).end();
  }
}

exports.cadastrar = cadastrar;
exports.listar = listar;
exports.autenticar = autenticar;
