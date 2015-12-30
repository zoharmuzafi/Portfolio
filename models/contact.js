var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema({

  name: String,
  email: String,
  message: String
  
});

//export User
var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;