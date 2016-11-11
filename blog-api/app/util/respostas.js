var tratarResposta = function(res, status){
  return function(resultado){
    res.status(status).json(resultado);
  }
}

var ok = function(res){
  return tratarResposta(res, 200);
}

var created = function(res){
  return tratarResposta(res, 201);
}

var error = function(res){
  return tratarResposta(res, 400);
}

exports.ok = ok;
exports.created = created;
exports.error = error;
