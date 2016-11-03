angular.module('blogjs.post').controller('PesquisarTodosOsPostController', function($scope, posts){


  var carregarPosts = function(){
    var promise = posts.listarTodosOsPosts();

    promise.then(function(resultado){
      $scope.posts = resultado.data;
    });

    promise.catch(function(reulstado){
      alert('Erro ao tentar carregar Posts!');
    })

  }

  carregarPosts();

});
