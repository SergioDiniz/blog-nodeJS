angular.module('blogjs.post').factory('posts', function($http){

  var cadastrar = function(post){
    post.id = getCurrentPostId() + 1;
    post.dataPostagem = new Date();

    setPost(post);
  }

  var listar = function(id){
    return $http.get('http://localhost:9000/v1/usuarios/' + id + '/posts');
  }

  var buscarPost = function(id){
    var encontrado = getPosts().find(function(bjo){
      return bjo.id === id;
    });

    return encontrado;
  }


  var getPosts = function(){
    var dados = localStorage.getItem('posts');
    if (dados){
      return JSON.parse(dados);
    }else{
      return [];
    }
  }

  var setPost = function(post){
    var posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    setCurrentPostId(post.id);
  }

  var getCurrentPostId = function(){
    var id = localStorage.getItem('postId');
    if (id){
      return parseInt(id);
    } else {
      return 0;
    }
  }

  var setCurrentPostId = function(id){
    localStorage.setItem('postId', id);
  }


  return {
    cadastrar:cadastrar,
    listar:listar,
    buscarPost:buscarPost
  }

});
