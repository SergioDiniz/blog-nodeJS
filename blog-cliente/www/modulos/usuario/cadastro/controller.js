angular.module('blogjs.usuario').controller('CadastroUsuarioController', function($scope, $location, usuarios){

  $scope.usuario = {};

  $scope.cadastrar = function(usuario){
    if(valido(usuario)){
      var promise = usuarios.cadastrar(usuario);

      // success
      promise.then(function(response){
        $location.path('login');
      });

      // Error
      promise.catch(function(response){
        console.error("Error: Status:" + response.status + ", Data: " + response.data);
      });

    } else {
      alert('Dados Invalidos!');
    }
  }

  var valido = function(usuario){
    return usuario.nome && usuario.login && usuario.senha;
  }

});
