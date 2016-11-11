angular.module('blogjs.usuario').factory('usuarios', function($http, urlApi){

  var cadastrar = function(usuario){
    return $http.post(urlApi + '/v1/usuarios', usuario);
  }

  var autenticaUsuario = function(usuario){

    var autenticado = $http.post(urlApi + '/v1/usuarios/auth', usuario);

    autenticado.then(function(response){
      var usuario = response.data;
      setUsuarioSession(usuario);
    });

    return autenticado;
  }

  var buscarUsuario = function(id){
    return $http.get(urlApi + '/v1/usuarios/buscar/' + id);
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
