
	var express = require('express'),
		path = require('path'),
		http = require('http'),
		app = express(),
		assetsPath = path.resolve(__dirname, 'www/assets'),
		server = http.createServer(app);

	app.set('port', (process.env.PORT || 5000));
	app.use('/assets', express.static(assetsPath));

	app.get('/', function (req, res) {
	  res.sendFile(__dirname + '/www/index.html');
	});

	server.listen(app.get('port'));
