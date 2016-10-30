var usuarios = [];
var id = 0;

var cadastrar = function(usuario){
  id++;
  usuario.id = id;
  usuarios.push(usuario);
  return usuario;
}

var listar = function(){
  return usuarios;
}

var autenticar = function(usuario){
  var autenticado = usuarios.find(function(obj){
    return obj.login === usuario.login && obj.senha === usuario.senha;
  });

  return autenticado;
}

exports.cadastrar = cadastrar;
exports.listar = listar;
exports.autenticar = autenticar;
