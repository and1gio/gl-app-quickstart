module.exports = {
    runFn: function (app, next) {
        //console.log(app.config)
        for (var i in app.config.route) {
            console.log(i, "<<<", app.folderPath.route, app.config.route[i]);
            var module = require(app.folderPath.route + app.config.route[i]);
            console.log(module, "??")
            app.express.use(i, module(app));
        }
        next();
    }
};
