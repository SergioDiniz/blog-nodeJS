angular.module('blogjs.usuario').factory('usuarios', function(){

  var usuarios = [];
  var usuarioId = 0;

  var cadastrar = function(usuario){
    usuarioId++;
    usuario.id = usuarioId;
    usuarios.push(usuario);
  }

  var autenticaUsuario = function(usuario){
    var encontrado = usuarios.find(function(obj){
      return obj.login === usuario.login && obj.senha === usuario.senha;
    });

    return encontrado;
  }

  return {
    cadastrar:cadastrar,
    autenticaUsuario:autenticaUsuario
  }

});
