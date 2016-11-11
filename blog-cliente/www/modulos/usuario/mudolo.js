angular.module('blogjs.usuario', [])

.config(function($routeProvider){

  $routeProvider
    .when('/usuario/cadastro', {
      controller: 'CadastroUsuarioController',
      templateUrl: 'modulos/usuario/cadastro/view.html'
    })

    .when('/login', {
      controller: 'LoginUsuarioController',
      templateUrl: 'modulos/usuario/login/view.html'
    })

})
