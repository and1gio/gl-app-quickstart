'use strict';

module.exports = function (app) {

    var bl = {};

    bl.hello = function (req, cb) {
        /*
         * get request data
         */
        var requestBody = req.body;

        app.logger.info('bl.hello > requestBody', requestBody);

        cb(null, requestBody);
    };

    return bl;
};