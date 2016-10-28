angular.module('blogjs.usuario').factory('usuarios', function(){

  var usuarios = [];

  var cadastrar = function(usuario){
    usuarios.push(usuario);
  }

  return {
    cadastrar:cadastrar
  }

});
