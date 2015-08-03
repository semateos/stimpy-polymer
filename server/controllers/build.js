// This is the build controller.
var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    build: {
        handler: {
            directory: { path: rootPath + '/dist' }
        }
    }
}
