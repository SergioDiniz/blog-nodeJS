var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
  usuario: {
    type: String,
    required: true
  },
  conteudo: {
    type: String,
    required: true
  },
  dataComentario: {
    type: Date,
    default: Date.now
  }
});

var postSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  conteudo: {
    type: String,
    required: true
  },
  tags: [String],
  dataPostagem: {
    type: Date,
    default: Date.now
  },
  comentarios: [comentarioSchema],
  dono: {
    type: String,
    required: true
  }
});

postSchema.plugin(mongoosePaginate);

var Post = mongoose.model('posts', postSchema);

module.exports = Post;
