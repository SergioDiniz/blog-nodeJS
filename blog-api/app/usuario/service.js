var Usuario = require('./schema');

var usuarios = [];
var id = 0;

var cadastrar = function(usuario){
  id++;
  usuario.id = id;
  usuarios.push(usuario);
  return usuario;
}

var listar = function(paraListar, paraErro){

  Usuario
  .find()
  .select({nome:true, login:true})
  .exec(function(err, usuarios){
   if(err){
     paraErro(err);
   }else{
     paraListar(usuarios);
   }
  })

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
