// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {

    index: {
        handler: function(request, reply){

            reply.view('index');
        }
    },

    missing: {
        handler: function(request, reply){
            reply.view('404', {
                title: '404 error!'
            }).code(404);
        }
    }

}
