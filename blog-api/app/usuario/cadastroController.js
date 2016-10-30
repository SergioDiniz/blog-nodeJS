var cadastrar = function(request, response){
  var usuario = request.body;
  console.log(usuario);
  response.status(200).end();
}

exports.cadastrar = cadastrar;
