// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV

var _ = require('underscore-node');
var path = require('path');
var config = require('./index');

var mainBowerFiles = require('main-bower-files');
var files = mainBowerFiles();

var js = [];
var css = [];

/*
files = _.map(files, function(file, key){

    var relative = path.relative(config.root + '/public', file);

    switch(path.extname(file)){

        case '.js':
            js.push(relative);
            break;

        case '.css':
            console.log('found a css file');
            css.push(relative);
            break;
    }

	return file;
});
*/

var development = {
    js: js.concat([
        'js/app.js'
    ]),
    css: css.concat([
        'css/styles.css'
    ])
}

// prod is a static build
var production = {/*
    js: ['js/scripts.min.js'],
    css: ['css/styles.min.css']
*/}


module.exports = {
    test: development,
    development: development,
    production: production
}
