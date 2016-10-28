angular.module('blogjs.post', []);

angular.module('blogjs.post').config(function($routeProvider){

  $routeProvider
    .when('/usuario/:id/posts', {
      controller: 'ListarPostController',
      templateUrl: 'modulos/post/listar/view.html'
    });

})
