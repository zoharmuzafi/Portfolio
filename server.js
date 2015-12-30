//require express 
var express = require("express");
var app = express();

//require body parser
var bodyParser = require("body-parser");

//require mongoose
var mongoose = require("mongoose");

//require hbs for using partial
var hbs = require("hbs");

//connect the data base
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/portfolio-app'
);


var Contact = require("./models/contact");

//apply body parser package
app.use(bodyParser.urlencoded({extended:true}));

//connect public folder
app.use(express.static(__dirname + "/public"));

//defind view engine for handelbars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");


//defind server and connect to local host 3000
var server = app.listen(process.env.PORT || 3000, function(){
	console.log("listening");
});

app.get('/', function (req, res) {
  res.render('index');
});
app.post("/contacts", function(req, res){
	console.log("req" + req);
	var newContact = new Contact(req.body);
	newContact.save(function(err, savedContact){
		console.log(savedContact);
		res.json(savedContact);
	});
});
