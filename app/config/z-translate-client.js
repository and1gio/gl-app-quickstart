/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zTranslateClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/'
        }
    }
};