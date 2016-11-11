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

  var cancelarEdicao = function(){
    $scope.postSendoEditado = false;
    $scope.postEditado = {};
  }

  var salvarEdicao = function(postEditado){
    var usuarioId = $routeParams.id;
    var postId = $routeParams.postId;
    var postNovo = $scope.postEditado;

    var promise = posts.atualizarPost(postNovo, usuarioId, postId);

    promise.then(function(response){
      $scope.post = response.data;
      cancelarEdicao();
    });

    promise.catch(function(response){
      alert('Erro ao Atualizar!');
      console.log(response.data);
    });

  }


  $scope.init = function(){
    $scope.postSendoEditado = false
    $scope.habilitarEdicao = habilitarEdicao;
    $scope.cancelarEdicao = cancelarEdicao;
    $scope.salvarEdicao = salvarEdicao;
    carregarPost();
    carregarUsuario();
  }
});
