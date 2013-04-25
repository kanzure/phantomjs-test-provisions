var jasmine = require("jasmine-standalone");
exports.jasmine = jasmine;

var jasmineConsoleReporter = require("./console");
exports.jasmineConsoleReporter = jasmineConsoleReporter;

var waits = jasmine.waits;
exports.waits = waits;

var runs = jasmine.runs;
exports.runs = runs;

var chai = require("chai");
exports.chai = chai;

var should = chai.should();
exports.should = should;

var expect = require("chai").expect;
exports.expect = expect;

var assert = chai.assert;
exports.assert = assert;

var it = jasmine.it;
exports.it = it;

var describe = jasmine.describe;
exports.describe = describe;

// because of test searching and loading
var fs = require("fs");

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

/**
 * Search and load tests from a certain path.
 */
function loadTests(path) {
    var filepaths = fs.list(path);
    for (var i = 0; i < filepaths.length; i += 1) {
        filepath = filepaths[i];
        if (filepath.substr(-3) == ".js" || filepath.substr(-7) == ".coffee") {
            if (filepath.substr(-12) != "run-tests.js") {
                var testmodule = require(path + "/" + filepath);
                testmodule.run();
            }
        }
    }
}
exports.loadTests = loadTests;

// for test examples
exports.math = require("./math");
