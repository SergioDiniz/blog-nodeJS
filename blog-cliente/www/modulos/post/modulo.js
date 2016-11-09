angular.module('blogjs.post', ['textAngular', 'ngSanitize']);

angular.module('blogjs.post').config(function($routeProvider){

  $routeProvider
    .when('/usuario/:id/posts', {
      controller: 'ListarPostUsuarioController',
      templateUrl: 'modulos/post/listar/view.html'
    })

    .when('/posts', {
      controller: 'PesquisarTodosOsPostController',
      templateUrl: 'modulos/post/pesquisar/view.html'
    })

    .when('/usuario/:id/posts/novo', {
      controller: 'NovoPostController',
      templateUrl: 'modulos/post/cadastro/view.html'
    })

    .when('/posts/:postId', {
      controller: 'VisualizarPostController',
      templateUrl: 'modulos/post/visualizar/view.html'
    })

    .when('/usuario/:id/posts/:postId', {
      controller: 'VisualizarPostUsuarioController',
      templateUrl: 'modulos/post/visualizar_usuario/view.html'
    })

    .otherwise({
      redirectTo: '/posts'
    })

})
