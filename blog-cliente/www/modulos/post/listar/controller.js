angular.module('blogjs.post').controller('ListarPostController', function($scope, $routeParams, posts, usuarios){


  var carregarPosts = function(){
    $scope.posts = posts.listar();
  }

  var carregarUsuario = function(){
    var usuario = usuarios.usuarioLogado();
    if(usuario){
      $scope.usuario = usuario;
    } else {
      alert('Usuario não existe!')
    }

  }

  carregarPosts();
  carregarUsuario();
});
