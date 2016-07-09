/* eslint-env node */

var context;

(context = require.context('./client', true, /\.js$/))
	.keys()
	.forEach(context)
