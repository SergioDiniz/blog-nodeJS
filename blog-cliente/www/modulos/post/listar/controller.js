angular.module('blogjs.post').controller('ListarPostController', function($scope, $location, $routeParams, posts, usuarios){


  var carregarPosts = function(){
    $scope.posts = posts.listar();
  }

  var carregarUsuario = function(){
    var promise = usuarios.buscarUsuario($routeParams.id);

    promise.then(function(response){
      $scope.usuario = response.data;
    });

    promise.catch(function(response){
      $location.path('/login');
    });
  }

  carregarPosts();
  carregarUsuario();
});
