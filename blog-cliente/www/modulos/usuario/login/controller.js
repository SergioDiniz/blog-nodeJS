angular.module('blogjs.usuario').controller('LoginUsuarioController', function($scope, $rootScope, $location, usuarios){

  $scope.usuario = {};

  $scope.entrar = function(usuario){
    var promise = usuarios.autenticaUsuario(usuario);

    promise.then(function(response){
      var usuario = response.data;
      $rootScope.$broadcast('usuario.entrou', usuario);
      $location.path('usuario/' + usuario._id + '/posts');
    });

    promise.catch(function(response){
      console.error("Error: Status:" + response.status + ", Data: " + response.data);
      alert('Dados invalidos!');
    });
  }

})
