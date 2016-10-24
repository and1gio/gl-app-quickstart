/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zApp: {
            port: 8000,
            debug: true,
            viewEngine: {
                type: 'pug',
                dir: 'views'
            },
            staticFolder: 'static-files'
        }
    }
};
