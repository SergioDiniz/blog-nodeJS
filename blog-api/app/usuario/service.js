var UsuarioSchema = require('./schema');



var cadastrar = function(usuario, quandoForCadastrar, quandoDerErro){
  new UsuarioSchema(usuario).save(function(erro, resultado){
    if(erro){
      quandoDerErro(erro);
    } else {
      quandoForCadastrar(resultado);
    }
  })
}

var listar = function(paraListar, paraErro){

  UsuarioSchema
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

var autenticar = function(usuario, quandoAutenticar, quandoDerErro){
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
