var exec = require('cordova/exec');

exports.testMethod = function (arg0, success, error) {
    exec(success, error, 'PhonegapDemoPlugin', 'testMethod', [arg0]);
};
