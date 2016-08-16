var fs = require("fs");

module.exports = function (app, cb) {

    console.log("APPLICATION STARTED");
    console.log("=========================");

    console.log('ROOT FOLDER:', app.folderPath.root);
    console.log('MACHINE ENVIRONMENT:', app.env);

    require("./configs-loader")(app, function(){
        console.log("****************************");
        console.log("CONFIGS LOADED SUCCESSFULLY");
        console.log("****************************");
    });
    console.log("=========================");


    var modules = loadInitializers(app);

    console.log("INITIALIZERS: STARTED");
    console.log("=========================");

    startInitializerChain(app, modules, function (err) {
        console.log("=========================");
        console.log("INITIALIZERS: FINISHED");
        console.log("=========================");
        cb(err);
    });
};

var startInitializerChain = function (app, initializers, cb) {
    var index = 0;
    startInitializer(app, initializers, index, cb);
};

var startInitializer = function (app, initializers, index, cb) {
    var initializer = initializers[index];
    if (!initializer) {
        return cb();
    }

    //if (!initializer.disabled) {
        console.log('INITIALIZING: [' + initializer.name + '].');
        initializer.runFn(app, function (err) {
            if (err) {
                console.log(err);
                process.exit(1);
            }

            index++;
            startInitializer(app, initializers, index, cb);
        });
    //}else{
    //    index++;
    //    startInitializer(app, initializers, index, cb);
    //}
};

var loadInitializers = function (app) {
    var initializers = app.config.initializer;
    var modules = [];

    for(var i in initializers){
        if(initializers[i].enabled){
            var name = initializers[i].name;
            var path = app.folderPath.initializer[initializers[i].type];
            var module = require(path + name);
            module.name = name;
            modules.push(module);
        }
    }

    /*
    fs.readdirSync(dir).forEach(function (file) {
        var name = file.split(".")[0];
        var module = require(dir + "/" + file);
        module.name = name;
        modules.push(module);
    });
    */
    return modules;
};
