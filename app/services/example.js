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

    bl.test = function (req, res, next) {
        var requestBody = req.body;

        if(requestBody != null){

            console.log(121221);

            var a = 1+2;

            req.localData = a;

            next();
        }else{
            res.status(404).json({message: 'data not found'});
        }
    };

    bl.test2 = function (req, res, next) {
        res.status(200).json({message: req.localData.a});
    };

    return bl;
};