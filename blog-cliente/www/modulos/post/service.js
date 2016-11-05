angular.module('blogjs.post').factory('posts', function($http){

  var cadastrar = function(post, usuarioId){
    return $http.post('http://localhost:9000/v1/usuarios/'+ usuarioId +'/posts', post);
  }

  var listarPostDeUsuario = function(id){
    return $http.get('http://localhost:9000/v1/usuarios/' + id + '/posts');
  }

  var listarTodosOsPosts = function(filtro){
    return $http.get('http://localhost:9000/v1/posts?filtro=' + filtro);
  }

  var buscarPost = function(usuarioId, postId){
    return $http.get('http://localhost:9000/v1/usuarios/'+ usuarioId +'/posts/' + postId);
  }

  return {
    cadastrar:cadastrar,
    listarPostDeUsuario:listarPostDeUsuario,
    listarTodosOsPosts:listarTodosOsPosts,
    buscarPost:buscarPost
  }

});
