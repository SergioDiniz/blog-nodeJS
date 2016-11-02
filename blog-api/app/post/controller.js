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


var cadastrarPost = function(req, res){
  var post = req.body;
  post.dono = req.params.usuarioId;
  postService.cadastrarPost(post,
    function(resultado){
      res.status(201).json(resultado);
    }
    , function(err){
      res.status(400).json(resultado);
    }
  );
}

exports.listar = listar;
exports.cadastrarPost = cadastrarPost;
