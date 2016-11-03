angular.module('blogjs.post').factory('posts', function($http){

  var cadastrar = function(post, usuarioId){
    return $http.post('http://localhost:9000/v1/usuarios/'+ usuarioId +'/posts', post);
  }

  var listar = function(id){
    return $http.get('http://localhost:9000/v1/usuarios/' + id + '/posts');
  }

  var buscarPost = function(usuarioId, postId){
    return $http.get('http://localhost:9000/v1/usuarios/'+ usuarioId +'/posts/' + postId);
  }

  return {
    cadastrar:cadastrar,
    listar:listar,
    buscarPost:buscarPost
  }

});
