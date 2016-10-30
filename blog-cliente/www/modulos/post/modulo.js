angular.module('blogjs.post', []);

angular.module('blogjs.post').config(function($routeProvider){

  $routeProvider
    .when('/usuario/:id/posts', {
      controller: 'ListarPostController',
      templateUrl: 'modulos/post/listar/view.html'
    })

    .when('/usuario/:id/posts/novo', {
      controller: 'NovoPostController',
      templateUrl: 'modulos/post/cadastro/view.html'
    })

    .when('/usuario/:id/post/:postId', {
      controller: 'VisualizarPostController',
      templateUrl: 'modulos/post/visualizar/view.html'
    })

})