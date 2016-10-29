angular.module('blogjs.usuario').factory('usuarios', function(){

  var cadastrar = function(usuario){
    usuario.id = getCurrentId() + 1;

    setUsuario(usuario);
  }

  var autenticaUsuario = function(usuario){
    var encontrado = getUsuarios().find(function(obj){
      return obj.login === usuario.login && obj.senha === usuario.senha;
    });

    if (encontrado){
      setUsuarioSession(encontrado);
    }

    return encontrado;
  }

  var buscarUsuario = function(id){
    var encontrado = getUsuarios().find(function(obj){
      return obj.id === id;
    });

    return encontrado;
  }


  var getUsuarios = function(){
    var dados = localStorage.getItem('usuarios');
    if (dados){
      return JSON.parse(dados);
    }else{
      return [];
    }
  }

  var setUsuario = function(usuario){
    var usuarios = getUsuarios();
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    setCurrentId(usuario.id);
  }

  var getCurrentId = function(){
    var id = localStorage.getItem('currentId');
    if (id){
      return parseInt(id);
    } else {
      return 0;
    }
  }

  var setCurrentId = function(id){
    localStorage.setItem('currentId', id);
  }


  var setUsuarioSession = function(usuario){
    localStorage.setItem('usuarioSession', JSON.stringify(usuario));
  }

  return {
    cadastrar:cadastrar,
    autenticaUsuario:autenticaUsuario,
    buscarUsuario:buscarUsuario
  }

});
