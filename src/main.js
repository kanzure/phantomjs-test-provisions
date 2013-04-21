var jasmine = require("jasmine-standalone");
exports.jasmine = jasmine;

var jasmineConsoleReporter = require("./console");
exports.jasmineConsoleReporter = jasmineConsoleReporter;

var chai = require("chai");
exports.chai = chai;

function configureJasmine() {
    var jasmineEnv = jasmine.jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var reporter = function(message) {
        // print messages straight to console
        console.log(message.replace('\n', ''));
    };

    var onComplete = function(reporter) {
        phantom.exit(reporter.results().failedCount);
    };

    var consoleReporter = new jasmineConsoleReporter.ConsoleReporter(reporter, onComplete, true);

    // add a ConsoleReporter to 1) print with colors on the console 2) exit when finished
    jasmineEnv.addReporter(consoleReporter);

    return jasmineEnv;
}
exports.configureJasmine = configureJasmine;

// for test examples
exports.math = require("./math");
