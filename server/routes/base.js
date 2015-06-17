//controller for default routes
var controller = require('../controllers/base');

module.exports = [
    {
        method: 'GET',
        path: '/',
        config: controller.index
    }
]
