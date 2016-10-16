'use strict';

module.exports = {

    runFn: function (app, next) {

        var ZApiRequestHelper = require('../../test/request-helper');
        app.zApiRequestHelper = {};

        for (var config in app.config.zApiRequestHelper) {
            app.zApiRequestHelper[config] = new ZApiRequestHelper(app.config.zApiRequestHelper[config], app.logger);
        }


        app.zApiRequestHelper.exampleApi.get('test', function(error, response){
            console.log(error, response)
        });


        app.zApiRequestHelper.exampleApi.post('test', {}, function(error, response){
            console.log(error, response)
        });

        next();
    }
};