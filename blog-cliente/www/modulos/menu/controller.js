angular.module('blogjs').controller('MenuController', function($scope, $location, usuarios){

  var usuarioLogado = function(){
    console.log('setando usuario inicio.');
    return usuarios.usuarioLogado();
  }

  $scope.usuarioLogado = usuarioLogado();

  $scope.finalizarSessao = function(){
    sair();
  }

  var sair = function(){
    usuarios.finalizarSessao();
    $scope.usuarioLogado = null;
    $location.path('/');
  }

  $scope.$on('usuario.entrou', function(evento, usuario){
    $scope.usuarioLogado = usuario;
  });

  $scope.$on('usuario.saiu', function(evento){
    sair();
  });

});
