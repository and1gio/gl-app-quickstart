

module.exports = {
    runFn: function (app, next) {
        const express = require('express');
        const cookieParser = require('cookie-parser');
        const bodyParser = require('body-parser');

        // const logger = require('morgan');
        // const path = require('path');
        // const favicon = require('serve-favicon');

        app.express = express();
        app.express.set('port', app.config.express.port);

        // TODO - View engine setup
        // app.express.set('views', app.rootFolder + 'views');
        // app.express.set('view engine', 'ejs');

        // Uncomment after placing your favicon in /public
        // app.express.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

        // app.express.use(logger('dev'));

        app.express.use(bodyParser.json());
        app.express.use(bodyParser.urlencoded({extended: false}));
        app.express.use(cookieParser());

        app.express.use(express.static(app.folderPath.public));

        next();
    }
};