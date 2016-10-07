'use strict';

module.exports = function (app) {
    return {
        example1: function (req, res, next) {
            if (req.body.test) {
                next();
            } else {
                res.json({test: false});
            }
        },
        example2: function(data, req, res, next){
            console.log(data);
            next();
        }
    }
};
