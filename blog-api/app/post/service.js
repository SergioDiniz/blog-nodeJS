var PostSchema = require('./schema');

var listarPostsDeUsuario = function(usuarioId, quandoListar, quandoDerErro){
  PostSchema
    .find({dono:usuarioId})
    .exec(function(err, posts){
       if (err){
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



exports.listarPostsDeUsuario = listarPostsDeUsuario;
exports.cadastrarPost = cadastrarPost;
