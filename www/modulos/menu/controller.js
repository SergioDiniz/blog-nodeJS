angular.module('blogjs').controller('MenuController', function($scope, $location, usuarios){

  var usuarioLogado = function(){
    return usuarios.usuarioLogado();
  }

  $scope.finalizarSessao = function(){
    usuarios.finalizarSessao();
    $location.path('/');
  }

  $scope.usuarioLogado = usuarioLogado();

});
