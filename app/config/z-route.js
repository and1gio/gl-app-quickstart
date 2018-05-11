/**
 *  NODE_ENV = undefined
 */

exports.default = (app) => {
    return {
        zRoute: {
            rootDir: 'routes',

            routes: {
                /**
                 * example { url-to-bind : module-path }
                 */
                '/api/example': 'api/example'
            }

        }
    }
};
