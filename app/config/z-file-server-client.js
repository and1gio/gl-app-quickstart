/**
 *  NODE_ENV = undefined
 */
exports.default = (app) => {
    return {
        zFileServerClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/',
            key:  'secretKey'
        }
    }
};
