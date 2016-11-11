var usuarioService = require('./service');
var respostas = require ('../util/respostas');

var cadastrar = function(req, res){
  var usuario = req.body;
  usuarioService.cadastrar(usuario, respostas.created(res), respostas.error(res) );
}

var listar = function(req, res){
  usuarioService.listar(respostas.ok(res), respostas.error(res));
}

var autenticar = function(req, res){
  var usuario = req.body;
  usuarioService.autenticar(usuario, respostas.ok(res), respostas.error(res) );

}

var buscar = function(req, res){
  var id = req.params.id;
  usuarioService.buscar(id,respostas.ok(res), respostas.error(res) );
}

exports.cadastrar = cadastrar;
exports.listar = listar;
exports.autenticar = autenticar;
exports.buscar = buscar;
