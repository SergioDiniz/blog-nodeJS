var postService = require('./service');

var listar = function(req, res){
  var usuarioId = req.params.usuarioId;
  postService.listarPostsDeUsuario(usuarioId,
    function(posts){
      res.status(200).json(posts);
    }
    , function(err){
      res.status(400).json(err);
    }
  );
}

exports.listar = listar;
