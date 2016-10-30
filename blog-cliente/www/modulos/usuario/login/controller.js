angular.module('blogjs.usuario').controller('LoginUsuarioController', function($scope, $rootScope, $location, usuarios){

  $scope.usuario = {};

  $scope.entrar = function(usuario){
    var autenticaUsuario = usuarios.autenticaUsuario(usuario);

    if(autenticaUsuario){
      $location.path('usuario/' + autenticaUsuario.id + '/posts');

      $rootScope.$broadcast('usuario.entrou', autenticaUsuario);
    }else{
      alert('Dados invalidos!');
    }
  }

})
