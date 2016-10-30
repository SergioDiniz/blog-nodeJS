var usuarioService = require('./service');

var cadastrar = function(req, res){
  var usuario = req.body;
  res.status(201).json(usuarioService.cadastrar(usuario));
}

var listar = function(req, res){
  res.status(200).json(usuarioService.listar());
}

exports.cadastrar = cadastrar;
exports.listar = listar;
