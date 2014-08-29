// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    
    index: {
        handler: function(request, reply){
            
            // Grab the DB from dogwater
            var db = request.server.plugins['dogwater'];
            
            // Look for Stimpy in the cats model
            db.cats.findOne(1)
            .then(function(cat) {
                
                // If you can't find Stimpy, make him
                if (!cat) {
                    
                    return  db.cats.create({id: 1, name: 'Stimpy'})
                            .then(function(cat) {
                                return cat;
                            });
                    
                } else {
                    
                    return cat;
                    
                }
                
            })
            .then(function(cat) {
            
                // Render the view with the custom greeting to Stimpy
                reply.view('index', {
                    title: cat.name + ', you eediot!'
                });
                
            });
            
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