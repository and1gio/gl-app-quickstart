exports.default = function (app) {
    return {
        route: {

            /**
             * example { url-to-bind : module-path }
             */
            '/api/example': 'api/example'
        }
    }
};
