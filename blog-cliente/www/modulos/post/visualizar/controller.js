angular.module('blogjs.post').controller('VisualizarPostController', function($scope, $routeParams, posts, usuarios){

  var carregarPost = function(){
    $scope.post = posts.buscarPost(parseInt($routeParams.postId));
  }

  var carregarUsuario = function(){
    var usuario = usuarios.buscarUsuario(parseInt($routeParams.id));
    if(usuario){
      $scope.usuario = usuario;
    } else {
      alert('Usuario não existe!')
    }

  }

  carregarPost();
  carregarUsuario();
});
