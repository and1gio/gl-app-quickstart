'use strict';

module.exports = {
    runFn: function (app, next) {
        let express = require('express');
        let cookieParser = require('cookie-parser');
        let bodyParser = require('body-parser');

        app.express = express();
        app.express.set('port', app.config.express.port);

        app.express.use(bodyParser.json());
        app.express.use(bodyParser.urlencoded({extended: false}));
        app.express.use(cookieParser());

        next();
    }
};