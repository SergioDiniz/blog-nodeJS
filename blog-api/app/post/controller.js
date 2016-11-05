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
  var limitePagina = parseInt( req.query.limitePagina || 1 );
  if (filtro){
    postService.listarPostComFiltro(filtro, nPagina, limitePagina,
      function(posts){
        res.status(200).json(posts);
      }
      , function (err){
        res.status(400).json(err);
      }
    );
  }else{
    postService.listarTodosOsPosts(nPagina, limitePagina,
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

exports.listar = listar;
exports.cadastrarPost = cadastrarPost;
exports.buscarPostDoUsuario = buscarPostDoUsuario;
exports.excluirPost = excluirPost;
exports.listarTodosOsPosts = listarTodosOsPosts;
