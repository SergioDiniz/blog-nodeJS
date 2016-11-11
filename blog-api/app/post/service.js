var PostSchema = require('./schema');
var UsuarioSchema = require('../usuario/schema');
var respostas = require ('../util/respostas');


var listarPostsDeUsuario = function(usuarioId, quandoListar, quandoDerErro){
  PostSchema
    .find({dono:usuarioId})
    .sort({dataPostagem:'desc'})
    .exec(respostas.tratarRespostaService(quandoListar, quandoDerErro));
}

var listarTodosOsPosts = function(nPagina, limitePagina, quandoListar, quandoDerErro){
    PostSchema
      .paginate({},
        {
          page: nPagina,
          limit: limitePagina,
          sort: {dataPostagem:'desc'}
        }
        , respostas.tratarRespostaService(quandoListar, quandoDerErro)
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
      , respostas.tratarRespostaService(quandoListar, quandoDerErro));

}

var cadastrarPost = function(post, quandoCadastrar, quandoDerErro){
  PostSchema(post).save(respostas.tratarRespostaService(quandoCadastrar, quandoDerErro));
}

var buscarPostDoUsuario = function(postId, usuarioId, quandoBuscar, quandoDerErro){
  PostSchema
    .findOne({_id:postId, dono:usuarioId})
    .exec(respostas.tratarRespostaService(quandoBuscar, quandoDerErro));
}

var buscarPostPorId = function(postId, quandoBuscar, quandoDerErro){
  PostSchema
    .findById(postId)
    .exec(function(err, post){
      if (err){
        quandoDerErro(err);
      } else {
        UsuarioSchema
          .findById({_id:post.dono})
          .select({nome:true, login:true})
          .exec(function(err, usuario){
            if(err){
              quandoDerErro(err);
            } else {
              post.dono = usuario.nome;
              // console.log(JSON.stringify(usuario));
              quandoBuscar(post);
            }
          });


      }
    })
    // .aggregate({
    //   $lookup:
    //   {
    //     from: 'usuarios',
    //     localField: 'dono',
    //     foreignField: '_id',
    //     as: 'dono'
    //   }
    // });
}

var excluirPost = function(postId, usuarioId, quandoBuscar, quandoDerErro){
  PostSchema
    .findOneAndRemove({_id:postId, dono:usuarioId})
    .exec(respostas.tratarRespostaService(quandoBuscar, quandoDerErro));
}

var adicionarComentario= function(postId, comentario, quandoComentar, quandoDerErro){
  PostSchema
    .findById(postId)
    .exec(function(err, post){
      if(err){
        quandoDerErro(err);
      } else {
        post.comentarios.push({usuario:comentario.usuario, conteudo: comentario.conteudo});

        post.save(respostas.tratarRespostaService(quandoComentar, quandoDerErro));

      }
    });
}


var atualizarPost = function(postNovo, quandoAtualizar, quandoDerErro){
  PostSchema
    .findOne({_id:postNovo._id, dono:postNovo.dono})
    .exec(function(err, post){
      if (err){
        quandoDerErro(err);
      } else{
        post.titulo = postNovo.titulo;
        post.conteudo = postNovo.conteudo;

        post.save(respostas.tratarRespostaService(quandoAtualizar, quandoDerErro));

      }
    })

}


exports.listarPostsDeUsuario = listarPostsDeUsuario;
exports.cadastrarPost = cadastrarPost;
exports.buscarPostDoUsuario = buscarPostDoUsuario;
exports.buscarPostPorId = buscarPostPorId;
exports.excluirPost = excluirPost;
exports.listarTodosOsPosts = listarTodosOsPosts;
exports.listarPostComFiltro = listarPostComFiltro;
exports.adicionarComentario = adicionarComentario;
exports.atualizarPost = atualizarPost;
