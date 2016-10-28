angular.module('blogjs.usuario', []);

angular.module('blogjs.usuario').config(function($routeProvider){

  $routeProvider
    .when('/usuario/cadastro', {
      controller: 'CadastroUsuarioController',
      templateUrl: 'modulos/usuario/cadastro/view.html'
    })

})
