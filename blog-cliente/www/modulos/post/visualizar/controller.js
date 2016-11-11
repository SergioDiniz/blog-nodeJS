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


  var comentar = function(comentario){
    var postId = $routeParams.postId;
    var promise = posts.adicionarComentario(postId, comentario);

    promise.then(function(response){
      $scope.post = response.data;
      $scope.comentario = {};
    })

    promise.catch(function(response){
      if (response.data.mensagem) {
        alert('Erro: ' + response.data.mensagem);
      } else{
        alert('Erro: ' + response.data);
      }
    });
  }

  $scope.comentar = comentar;

  $scope.init = function(){
    carregarPost();
  }

});
