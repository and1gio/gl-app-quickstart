/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zErrorsClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/'
        }
    }
};