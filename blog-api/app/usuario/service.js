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

exports.cadastrar = cadastrar;
exports.listar = listar;
