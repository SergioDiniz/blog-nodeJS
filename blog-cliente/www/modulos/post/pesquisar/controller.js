angular.module('blogjs.post').controller('PesquisarTodosOsPostController', function($scope, posts){

  $scope.filtro = "";

  var carregarPosts = function(){
    var promise = posts.listarTodosOsPosts($scope.filtro);

    promise.then(function(resultado){
      $scope.posts = resultado.data;
    });

    promise.catch(function(reulstado){
      alert('Erro ao tentar carregar Posts!');
    })

  }

  $scope.atualizarPostFiltro = function(){
    carregarPosts();
  }

  carregarPosts();

});
