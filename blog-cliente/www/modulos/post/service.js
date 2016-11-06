angular.module('blogjs.post').factory('posts', function($http){

  var cadastrar = function(post, usuarioId){
    return $http.post('http://localhost:9000/v1/usuarios/'+ usuarioId +'/posts', post);
  }

  var listarPostDeUsuario = function(id){
    return $http.get('http://localhost:9000/v1/usuarios/' + id + '/posts');
  }

  var listarTodosOsPosts = function(filtro, pagina){
    var url = '';
    url = pagina ? "http://localhost:9000/v1/posts?pagina=" + pagina + "&filtro=" + filtro
                 : 'http://localhost:9000/v1/posts?filtro=' + filtro;
    return $http.get(url);
  }

  var buscarPost = function(usuarioId, postId){
    return $http.get('http://localhost:9000/v1/usuarios/'+ usuarioId +'/posts/' + postId);
  }

  var buscarPostPorId = function(postId){
    return $http.get('http://localhost:9000/v1/posts/' + postId);
  }

  var adicionarComentario = function(postId, comentario){
    return $http.post('http://localhost:9000/v1/posts/' + postId + '/comentarios', comentario);
  }

  return {
    cadastrar:cadastrar,
    listarPostDeUsuario:listarPostDeUsuario,
    listarTodosOsPosts:listarTodosOsPosts,
    buscarPost:buscarPost,
    buscarPostPorId:buscarPostPorId,
    adicionarComentario:adicionarComentario
  }

});
