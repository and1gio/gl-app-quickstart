module.exports = {
    runFn: function (app, next) {
        const http = require('http');

        /**
         * Create HTTP server.
         */
        const server = http.createServer(app.express);

        /**
         * Listen on provided port, on all network interfaces.
         */
        server.listen(app.config.express.port);

        server.on('error', onError);
        server.on('listening', onListening);

        /**
         * Event listener for HTTP server "error" event.
         */
        function onError(error) {
            if (error.syscall !== 'listen') {
                throw error;
            }

            var bind = typeof app.config.express.port === 'string'
                ? 'Pipe ' + app.config.express.port
                : 'Port ' + app.config.express.port;

            // handle specific listen errors with friendly messages
            switch (error.code) {
                case 'EACCES':
                    console.error(bind + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(bind + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        }

        /**
         * Event listener for HTTP server "listening" event.
         */
        function onListening() {
            var addr = server.address();
            var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
            console.log('Listening on ', bind);
        }

        /**
         * Event listener for HTTP server "uncaught exception" event handler.
         */
        process.on('uncaughtException', function (error) {
            console.log("!!!!!!!!!!!!!!!!!! UNHANDLED EXCEPTION !!!!!!!!!!!!!!!!!!");
            console.error(error.stack);
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        });

        next();
    }
};
