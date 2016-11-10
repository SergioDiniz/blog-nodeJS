var mongoose = require('mongoose');
var connectConf = require('./connectConfig');

mongoose.Promise = global.Promise; //para a mensagem DeprecationWarning: Mongoose: mpromise
mongoose.connect('mongodb://' + connectConf.getdbuser() + ':' + connectConf.getdbpassword() + '@ds139327.mlab.com:39327/blogjs');
