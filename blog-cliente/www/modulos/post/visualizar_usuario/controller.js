angular.module('blogjs.post').controller('VisualizarPostUsuarioController', function($scope, $location, $routeParams, posts, usuarios){

  var carregarPost = function(){
    var usuarioId = $routeParams.id;
    var postId = $routeParams.postId;
    var promise = posts.buscarPost(usuarioId, postId);

    promise.then(function(response){
      $scope.post = response.data;
    });

    promise.catch(function(response){
      alert('Erro: Não foi possivel carregar a postagem!');
      $location.path('/usuario/' + usuarioId + '/posts');
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


  var habilitarEdicao = function(){
    $scope.postSendoEditado = true;
    $scope.postEditado = angular.copy($scope.post);
  }

  var canselarEdicao = function(){
    $scope.postSendoEditado = false;
    $scope.postEditado = {};
  }

  var salvarEdicao = function(postEditado){

  }

  $scope.postSendoEditado = false
  $scope.habilitarEdicao = habilitarEdicao;
  $scope.canselarEdicao = canselarEdicao;
  $scope.salvarEdicao = salvarEdicao;
  carregarPost();
  carregarUsuario();
});
