'use strict';

module.exports = {
    run: function (app, next) {
        app.filter = {};

        for (var i in app.config.filter) {
            var module = require(app.folderPath.filter + app.config.filter[i])(app);
            app.filter[i] = {};

            for (var j in module) {
                (function (indexI, indexJ) {
                    app.filter[indexI][indexJ] = function (data) {
                        return function (req, res, next) {
                            if (data) {
                                module[indexJ](data, req, res, next);
                            } else {
                                module[indexJ](req, res, next);
                            }
                        }
                    }
                })(i, j);
            }
        }
        next();
    }
};