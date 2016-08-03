var express = require('express');
var bodyParser = require('body-parser');
var app=express();

var servers = app.listen(3000, 'localhost', function () {

  var host = servers.address().address
  var port = servers.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {

	/*var buttons = req.getElementsByTagName('button');
	var buttonsCount = buttons.length;
	var idn;
	for (var i = 0; i <= buttonsCount; i += 1)
	    buttons[i].onclick = function(e) {
	        idn = this.id;
	        console.log(idn);
	    };
	//}​
	var ans;
	if(idn == 'add'){
		ans = parseInt(req.body['number1'], 10) + parseInt(req.body['number2'], 10);
	}*/
	var sum = parseInt(req.body['number1'], 10) + parseInt(req.body['number2'], 10);
	res.send('' + sum);
	console.log(sum);
	var obj=JSON.stringify(req.body);
	console.log(obj);
});

module.exports = app;
