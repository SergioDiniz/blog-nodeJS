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


var listarTodosOsPosts = function(req, res){
  var filtro = req.query.filtro;
  var nPagina = req.query.pagina || 1;
  var limitePorPagina = parseInt( req.query.limitePorPagina || 3 );
  if (filtro){
    postService.listarPostComFiltro(filtro, nPagina, limitePorPagina,
      function(posts){
        res.status(200).json(posts);
      }
      , function (err){
        res.status(400).json(err);
      }
    );
  }else{
    postService.listarTodosOsPosts(nPagina, limitePorPagina,
      function(posts){
        res.status(200).json(posts);
      }
      , function (err){
        res.status(400).json(err);
      }
    );
  }
}

var cadastrarPost = function(req, res){
  var post = req.body;
  post.dono = req.params.usuarioId;
  postService.cadastrarPost(post,
    function(resultado){
      res.status(201).json(resultado);
    }
    , function(err){
      res.status(400).json(err);
    }
  );
}


var buscarPostDoUsuario = function(req, res){
  var postID = req.params.postId;
  var usuarioID = req.params.usuarioId;
  postService.buscarPostDoUsuario(postID, usuarioID,
    function(post){
      res.status(200).json(post);
    }
    , function(err){
      res.status(400).json(err);
    }
  );
}


var buscarPostPorId = function(req, res){
  var postID = req.params.postId;
  postService.buscarPostPorId(postID,
    function(post){
      res.status(200).json(post);
    }
    , function(err){
      res.status(400).json(err);
    }
  );
}

var excluirPost = function(req, res){
  var postID = req.params.postId;
  var usuarioID = req.params.usuarioId;
  postService.excluirPost(postID, usuarioID,
    function(post){
      res.status(200).json(post);
    }
    , function(err){
      res.status(400).json(err);
    }
  );
}


var adicionarComentario = function(req, res){
  var postId = req.params.postId;
  var comentario = req.body;

  if(comentario && comentario.usuario && comentario.conteudo){
    postService.adicionarComentario(postId, comentario
      , function(post){
        res.status(201).json(post);
      }
      , function(err){
        res.status(400).json(err);
      }
    );
  } else {
    res.status(400).json({mensagem:'Comentario Invalido!'});
  }

}

exports.listar = listar;
exports.cadastrarPost = cadastrarPost;
exports.buscarPostDoUsuario = buscarPostDoUsuario;
exports.buscarPostPorId = buscarPostPorId;
exports.excluirPost = excluirPost;
exports.listarTodosOsPosts = listarTodosOsPosts;
exports.adicionarComentario = adicionarComentario;
