angular.module('blogjs.post').controller('NovoPostController', function($scope, posts, $routeParams, $location){

  $scope.post = {};

  $scope.cadastrar = function(post){
    var usuarioId = $routeParams.id;
    var promise = posts.cadastrar(post, usuarioId);

    promise.then(function(response){
      $location.path('usuario/' + usuarioId + '/posts');
    });

    promise.catch(function(response){
      alert('Erro: ' + response.data.errors.conteudo.message);
    });
  }

});
