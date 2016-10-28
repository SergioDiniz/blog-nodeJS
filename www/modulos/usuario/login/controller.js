angular.module('blogjs.usuario').controller('LoginUsuarioController', function($scope, $location, usuarios){

  $scope.usuario = {};

  $scope.entrar = function(usuario){
    var autenticaUsuario = usuarios.autenticaUsuario(usuario);

    if(autenticaUsuario){
      $location.path('usuario/' + autenticaUsuario.id + '/posts');
    }else{
      alert('Dados invalidos!');
    }
  }

})
