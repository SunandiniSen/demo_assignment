var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var serv = app.listen(3000, function () {

	var host = serv.address().address;
  	var port = serv.address().port;

  	console.log("host: ",host);
  	console.log("Example app listening at http://%s:%s", host, port);
});

app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
	console.log('inside post');
	var msg = req.body;
	var obj = JSON.stringify(req.body);
	console.log(msg);
	//res.send(msg);
	//res.send(obj);
	res.status(200).send(obj);
});

module.exports = app;