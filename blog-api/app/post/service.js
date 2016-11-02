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



exports.listarPostsDeUsuario = listarPostsDeUsuario;
