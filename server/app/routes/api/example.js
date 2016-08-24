'use strict';

module.exports = function(app) {

    /**
     * import classes
     */
    let Route = require(app.folderPath.class + 'Route');

    let route = new Route(app);
    route.init('post', '/hello', function(req, res, next){
        app.bl.example.hello(req, function (error, data) {
            error ? next(error) : res.json(data);
        });
    });

    return route.getRouter();
};