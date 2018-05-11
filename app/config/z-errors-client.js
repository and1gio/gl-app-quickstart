/**
 *  NODE_ENV = undefined
 */
exports.default = (app) => {
    return {
        zErrorsClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/'
        }
    }
};
