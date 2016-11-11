var postService = require('./service');
var respostas = require ('../util/respostas');

var listar = function(req, res){
  var usuarioId = req.params.usuarioId;
  postService.listarPostsDeUsuario(usuarioId, respostas.ok(res), respostas.error(res) );
}


var listarTodosOsPosts = function(req, res){
  var filtro = req.query.filtro;
  var nPagina = req.query.pagina || 1;
  var limitePorPagina = parseInt( req.query.limitePorPagina || 3 );
  if (filtro){
    postService.listarPostComFiltro(filtro, nPagina, limitePorPagina, respostas.ok(res), respostas.error(res));
  }else{
    postService.listarTodosOsPosts(nPagina, limitePorPagina, respostas.ok(res), respostas.error(res));
  }
}

var cadastrarPost = function(req, res){
  var post = req.body;
  post.dono = req.params.usuarioId;
  postService.cadastrarPost(post, respostas.created(res), respostas.error(res));
}


var buscarPostDoUsuario = function(req, res){
  var postID = req.params.postId;
  var usuarioID = req.params.usuarioId;
  postService.buscarPostDoUsuario(postID, usuarioID, respostas.ok(res), respostas.error(res));
}


var buscarPostPorId = function(req, res){
  var postID = req.params.postId;
  postService.buscarPostPorId(postID, respostas.ok(res), respostas.error(res));
}

var excluirPost = function(req, res){
  var postID = req.params.postId;
  var usuarioID = req.params.usuarioId;
  postService.excluirPost(postID, usuarioID, respostas.ok(res), respostas.error(res));
}


var adicionarComentario = function(req, res){
  var postId = req.params.postId;
  var comentario = req.body;

  if(comentario && comentario.usuario && comentario.conteudo){
    postService.adicionarComentario(postId, comentario, respostas.ok(res), respostas.error(res) );
  } else {
    res.status(400).json({mensagem:'Comentario Invalido!'});
  }

}

var atualizarPost = function(req, res){
  var postNovo = req.body;
  var postId = req.params.postId;
  var usuarioId = req.params.usuarioId;

  postNovo._id = postId;
  postNovo.dono = usuarioId;

  postService.atualizarPost(postNovo, respostas.ok(res), respostas.error(res) );
}

exports.listar = listar;
exports.cadastrarPost = cadastrarPost;
exports.buscarPostDoUsuario = buscarPostDoUsuario;
exports.buscarPostPorId = buscarPostPorId;
exports.excluirPost = excluirPost;
exports.listarTodosOsPosts = listarTodosOsPosts;
exports.adicionarComentario = adicionarComentario;
exports.atualizarPost = atualizarPost;
