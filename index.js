
var http = require("http");
var app = require("./lib/application");
var PORT = 3000;

var server = app.listen(PORT, function () {
	console.log("Started server listening");
});