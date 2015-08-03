//controller
var controller = require('../controllers/build');

module.exports = [
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.build
    }
];
