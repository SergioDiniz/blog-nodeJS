angular.module('blogjs.post').factory('posts', function(){

  var posts = [];
  var id = 0;

  var cadastrar = function(post){
    id++;
    post.id = id;
    post.dataPostagem = new Date();
    posts.push(post);
  }

  var listar = function(id){
    return posts;
  }

  return {
    cadastrar:cadastrar,
    listar:listar
  }

});
