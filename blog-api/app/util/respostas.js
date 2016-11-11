var respostaStatus = function(res, status){
  return function(resultado){
    res.status(status).json(resultado);
  }
}

var ok = function(res){
  return respostaStatus(res, 200);
}

var created = function(res){
  return respostaStatus(res, 201);
}

var error = function(res){
  return respostaStatus(res, 400);
}



var tratarRespostaService = function(tratarResultado, tratarErro){
  return function(erro, resultado){
    if (erro){
      tratarErro(erro);
    } else {
      tratarResultado(resultado);
    }
  }
}




exports.ok = ok;
exports.created = created;
exports.error = error;
exports.tratarRespostaService = tratarRespostaService;
