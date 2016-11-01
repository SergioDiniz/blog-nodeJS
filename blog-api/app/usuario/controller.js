var usuarioService = require('./service');

var cadastrar = function(req, res){
  var usuario = req.body;
  usuarioService.cadastrar(usuario,
    function(resultado){
      res.status(201).json(resultado);
    }
    , function(erro){
      res.status(400).json(erro);
    }
  );
}

var listar = function(req, res){
  usuarioService.listar(
  function(usuarios){
    res.status(200).json(usuarios);
  }
  , function(erro){
    res.status(400).json(erro);
  }
  );
}

var autenticar = function(req, res){
  var usuario = req.body;
  usuarioService.autenticar(usuario,
    function(usuarioAutenticado){
      res.status(201).json(usuarioAutenticado);
    }
    , function(erro){
      res.status(400).json(erro);
    }
  );

}


var buscar = function(req, res){
  var id = req.params.id;
  usuarioService.buscar(id,
    function(usuarioEncontrado){
      res.status(200).json(usuarioEncontrado);
    }
    , function(erro){
      res.status(400).json(erro);
    }
  );
}

exports.cadastrar = cadastrar;
exports.listar = listar;
exports.autenticar = autenticar;
exports.buscar = buscar;
