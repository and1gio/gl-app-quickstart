/**
 *  NODE_ENV = undefined
 */
exports.default = (app) => {
    return {
        zMiddleware: {
            beforeRoute: {
                rootDir: "middleware/before-route",
                middleware: ['example-before-route']
            },
            afterRoute: {
                rootDir: "middleware/after-route",
                middleware: ['example-after-route', 'error-handler']
            }
        }
    }
};
