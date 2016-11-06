var PostSchema = require('./schema');

var listarPostsDeUsuario = function(usuarioId, quandoListar, quandoDerErro){
  PostSchema
    .find({dono:usuarioId})
    .sort({dataPostagem:'desc'})
    .exec(function(err, posts){
       if (err){
         quandoDerErro(err);
       } else {
         quandoListar(posts);
       }
    });
}

var listarTodosOsPosts = function(nPagina, limitePagina, quandoListar, quandoDerErro){
    PostSchema
      .paginate({},
        {
          page: nPagina,
          limit: limitePagina,
          sort: {dataPostagem:'desc'}
        }
        , function(err, posts){
            if (err){
              quandoDerErro(err);
            } else {
              quandoListar(posts);
            }
        }
    );
}

var listarPostComFiltro = function(filtro, nPagina, limitePagina, quandoListar, quandoDerErro){
  PostSchema
    .paginate(
      {titulo: new RegExp(filtro, "i")},
      {
        page: nPagina,
        limit: limitePagina,
        sort: {dataPostagem:'desc'}
      }
      , function(err, posts){
          if(err){
            quandoDerErro(err);
          } else {
            quandoListar(posts);
          }
    });

}

var cadastrarPost = function(post, quandoCadastrar, quandoDerErro){
  PostSchema(post).save(function(err, resultado){
    if(err){
      quandoDerErro(err);
    } else {
      quandoCadastrar(resultado);
    }
  });
}

var buscarPostDoUsuario = function(postId, usuarioId, quandoBuscar, quandoDerErro){
  PostSchema
    .findOne({_id:postId, dono:usuarioId})
    .exec(function(err, post){
      if (err){
        quandoDerErro(err);
      } else {
        quandoBuscar(post);
      }
    });
}

var buscarPostPorId = function(postId, quandoBuscar, quandoDerErro){
  PostSchema
    .findById(postId)
    .exec(function(err, post){
      if (err){
        quandoDerErro(err);
      } else {
        quandoBuscar(post);
      }
    });
}

var excluirPost = function(postId, usuarioId, quandoBuscar, quandoDerErro){
  PostSchema
    .findOneAndRemove({_id:postId, dono:usuarioId})
    .exec(function(err, post){
      if (err){
        quandoDerErro(err);
      } else {
        quandoBuscar(post);
      }
    });
}

var adicionarComentario= function(postId, comentario, quandoComentar, quandoDerErro){
  PostSchema
    .findById(postId)
    .exec(function(err, post){
      if(err){
        quandoDerErro(err);
      } else {
        post.comentarios.push({usuario:comentario.usuario, conteudo: comentario.conteudo});
        post.save(function(err){
          if(err){
            quandoDerErro(err);
          } else{
            quandoComentar(post);
          }
        });
      }
    });
}


exports.listarPostsDeUsuario = listarPostsDeUsuario;
exports.cadastrarPost = cadastrarPost;
exports.buscarPostDoUsuario = buscarPostDoUsuario;
exports.buscarPostPorId = buscarPostPorId;
exports.excluirPost = excluirPost;
exports.listarTodosOsPosts = listarTodosOsPosts;
exports.listarPostComFiltro = listarPostComFiltro;
exports.adicionarComentario = adicionarComentario;
