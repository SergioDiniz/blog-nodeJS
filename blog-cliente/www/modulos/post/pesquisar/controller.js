angular.module('blogjs.post').controller('PesquisarTodosOsPostController', function($scope, posts){

  $scope.filtro = "";

  var carregarPosts = function(){
    var promise = posts.listarTodosOsPosts($scope.filtro);

    promise.then(function(resultado){
      var data = resultado.data;
      $scope.paginaAtual = parseInt(data.page);
      $scope.totalDePaginas = parseInt(data.pages);
      $scope.posts = data.docs;
    });

    promise.catch(function(reulstado){
      alert('Erro ao tentar carregar Posts!');
    })

  }

  $scope.atualizarPostFiltro = function(){
    if($scope.filtro.length === 0 || $scope.filtro.length >= 3){
        carregarPosts();
    }
  }

  $scope.imprimirNumeroDePaginas = function(){
    return new Array($scope.totalDePaginas);
  }

  carregarPosts();

});
