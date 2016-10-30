angular.module('blogjs.usuario').factory('usuarios', function($http){

  var cadastrar = function(usuario){
    return $http.post('http://localhost:9000/v1/usuarios', usuario);
  }

  var autenticaUsuario = function(usuario){

    var autenticado = $http.post('http://localhost:9000/v1/usuarios/auth', usuario);

    autenticado.then(function(response){
      var usuario = response.data;
      setUsuarioSession(usuario);
    });

    return autenticado;
  }

  var buscarUsuario = function(id){
    var encontrado = getUsuarios().find(function(obj){
      return obj.id === id;
    });

    return encontrado;
  }


  var usuarioLogado = function(){
    return JSON.parse(localStorage.getItem('usuarioSession'));
  }

  var finalizarSessao = function(){
    return localStorage.removeItem('usuarioSession');
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
    buscarUsuario:buscarUsuario,
    usuarioLogado:usuarioLogado,
    finalizarSessao:finalizarSessao
  }

});
