'use strict';

module.exports = {
    run: function (app, next) {

        app.logger.info('example');

        next();
    }
};




