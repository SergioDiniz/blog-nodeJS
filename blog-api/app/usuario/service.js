var UsuarioSchema = require('./schema');
var respostas = require ('../util/respostas');

var crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}


var cadastrar = function(usuario, quandoForCadastrar, quandoDerErro){
  usuario.senha = crypto.createHmac('sha256', usuario.senha).digest('hex');
  UsuarioSchema(usuario).save(respostas.tratarRespostaService(quandoForCadastrar, quandoDerErro));
}

var listar = function(paraListar, paraErro){

  UsuarioSchema
    .find()
    .select({nome:true, login:true})
    .exec(respostas.tratarRespostaService(paraListar, quandoDerErro));

}

var autenticar = function(usuario, quandoAutenticar, quandoDerErro){
  usuario.senha = crypto.createHmac('sha256', usuario.senha).digest('hex');
  var query = {login:usuario.login, senha:usuario.senha}
  UsuarioSchema
    .findOne(query)
    .select({nome:true, login:true})
    .exec(function(erro, usuarioAutenticado){
      if(erro){
        quandoDerErro(erro);
      } else if (usuarioAutenticado){
        quandoAutenticar(usuarioAutenticado);
      } else{
        quandoDerErro(new Error("Dados Invalidos!"));
      }
    });

}


var buscar = function(id, quandoEncontrar, quandoDerErro){
  UsuarioSchema
    .findById(id)
    .select({nome:true, login:true})
    .exec(function(erro, usuarioEncontrado){
      if(erro){
        quandoDerErro(erro);
      } else if (usuarioEncontrado){
        quandoEncontrar(usuarioEncontrado);
      } else {
        quandoDerErro(new Error("Usuario não encontrado!"));
      }
    });
}

exports.cadastrar = cadastrar;
exports.listar = listar;
exports.autenticar = autenticar;
exports.buscar = buscar;
