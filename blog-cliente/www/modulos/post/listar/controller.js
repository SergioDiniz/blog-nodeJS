angular.module('blogjs.post').controller('ListarPostUsuarioController', function($scope, $location, $routeParams, posts, usuarios){


  var carregarPosts = function(){
    var promise = posts.listarPostDeUsuario($routeParams.id);

    promise.then(function(response){
      $scope.posts = response.data;
    });

    promise.catch(function(response){
      alert("Erro: " + response.data);
    });
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
