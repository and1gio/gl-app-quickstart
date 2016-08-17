module.exports = {
    runFn: function (app, next) {
        //console.log(app.config)
        for (var i in app.config.route) {
            var module = require(app.folderPath.route + app.config.route[i]);
            app.express.use(i, module(app));
        }
        next();
    }
};
