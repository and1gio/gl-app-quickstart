/**
 *  NODE_ENV = undefined
 */
exports.default = (app) => {
    return {
        zSessionServerClient: {
            host: 'localhost',
            port: 5000,
            path: '/api/',
            secret: 'secret',
            resave: false,
            saveUninitialized: true,
            cookie: {secure: false}
        }
    }
};
