module.exports = {
    runFn: function (app, next) {
        for (var i in app.config.middleware.beforeRoute) {
            require(app.folderPath.middleware.beforeRoute + app.config.middleware.beforeRoute[i])(app);
        }
        next();
    }
};
