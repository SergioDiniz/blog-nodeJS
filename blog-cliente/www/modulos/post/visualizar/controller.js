angular.module('blogjs.post').controller('VisualizarPostController', function($scope, $location, $routeParams, posts, usuarios){

  var carregarPost = function(){
    var postId = $routeParams.postId;
    var promise = posts.buscarPostPorId(postId);

    promise.then(function(response){
      $scope.post = response.data;
    });

    promise.catch(function(response){
      alert('Erro: Não foi possivel carregar a postagem!');
      $location.path('/posts');
    });
  }

  carregarPost();
});
