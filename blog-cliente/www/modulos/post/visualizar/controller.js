angular.module('blogjs.post').controller('VisualizarPostController', function($scope, $location, $routeParams, posts, usuarios){

  var carregarPost = function(){
    $scope.post = posts.buscarPost(parseInt($routeParams.postId));
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

  carregarPost();
  carregarUsuario();
});
