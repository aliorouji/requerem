var appRoot = require('app-root-path');
require('app-module-path').addPath(appRoot.path);

module.exports = function(lib) {
    return require(lib);
};