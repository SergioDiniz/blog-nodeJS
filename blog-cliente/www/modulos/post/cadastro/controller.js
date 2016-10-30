angular.module('blogjs.post').controller('NovoPostController', function($scope, posts, $routeParams, $location){

  $scope.post = {};

  $scope.cadastrar = function(post){
    posts.cadastrar(post);
    $location.path('usuario/' + $routeParams.id + '/posts');
  }

});
