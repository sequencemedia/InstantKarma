# InstantKarma
Karma-Mocha-Chai-Sinon with Gulp

Recipes for Instant Karma in AMD, CommonJS and ES6.

For AMD, use the folder ```amd```.

For CommonJS, use the folder ```cjs```.

For ES6, use the folder ```es6```.

```
npm install
npm start
```

InstantKarma assumes your JS application can be found in ```client/app```.

You can correct that assumption by modifying ```karma.conf.js``` and ```gulp.conf.js``` with the paths used in your application.

You may also need to modify ```webpack.conf.js``` in the folder ```es6```.

Sample modules and sample module specs are included for Angular, React and ordinary JS applications.
