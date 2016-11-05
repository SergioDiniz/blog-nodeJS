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

var listarTodosOsPosts = function(quandoListar, quandoDerErro){
    PostSchema
      .find()
      .sort({dataPostagem:'desc'})
      .exec(function(err, posts){
        if (err){
          quandoDerErro(err);
        } else {
          quandoListar(posts);
        }
      });
}

var listarPostComFiltro = function(filtro, quandoListar, quandoDerErro){
  PostSchema
    .find({titulo: new RegExp(filtro, "i")})
    .sort({dataPostagem: 'desc'})
    .exec(function(err, posts){
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


exports.listarPostsDeUsuario = listarPostsDeUsuario;
exports.cadastrarPost = cadastrarPost;
exports.buscarPostDoUsuario = buscarPostDoUsuario;
exports.excluirPost = excluirPost;
exports.listarTodosOsPosts = listarTodosOsPosts;
exports.listarPostComFiltro = listarPostComFiltro;
