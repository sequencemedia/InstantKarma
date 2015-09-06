
	var express = require('express'),
		path = require('path'),
		http = require('http'),
		app = express(),
		publicPath = path.resolve(__dirname, 'public'),
		assetsPath = path.resolve(publicPath, 'assets'),
		server = http.createServer(app);

	app.set('port', (process.env.PORT || 5000));
	app.use('/assets', express.static(assetsPath));

	app.get('/', function (req, res) {
	  res.sendFile(path.resolve(publicPath, 'index.html'));
	});

	server.listen(app.get('port'));
