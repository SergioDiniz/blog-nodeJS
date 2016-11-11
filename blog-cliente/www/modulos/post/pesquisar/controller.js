angular.module('blogjs.post').controller('PesquisarTodosOsPostController', function($scope, posts){

  $scope.filtro = "";

  var carregarPosts = function(){
    var promise = posts.listarTodosOsPosts($scope.filtro, $scope.paginaAtual);

    promise.then(function(resultado){
      var data = resultado.data;
      $scope.paginaAtual = parseInt(data.page);
      $scope.totalDePaginas = parseInt(data.pages);
      $scope.posts = data.docs;
    });

    promise.catch(function(resultado){
      alert('Erro ao tentar carregar Posts!');
    })

  }

  $scope.atualizarPostFiltro = function(){
    if($scope.filtro.length === 0 || $scope.filtro.length >= 3){
      $scope.paginaAtual = 1;
        carregarPosts();
    }
  }

  $scope.mudarPagina = function(pagina){
    if( pagina > 0 && pagina <= $scope.totalDePaginas){
      $scope.paginaAtual = parseInt(pagina);
      carregarPosts();
    }
  }

  $scope.imprimirNumeroDePaginas = function(){
    return new Array($scope.totalDePaginas);
  }

  $scope.init = function(){
    carregarPosts();
  }


});
