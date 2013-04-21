var jasmine = require("jasmine-standalone");
exports.jasmine = jasmine;

var jasmineConsoleReporter = require("./console");
exports.jasmineConsoleReporter = jasmineConsoleReporter;

var chai = require("chai");
exports.chai = chai;

var should = chai.should();
exports.should = should;

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
 * Build a list of files that are probably tests in a given path.
 */
function findTests(path) {
    if (path.substr(-1) == "/") {
        path = path.slice(0, -1);
    }

    var suspects = [];
    var files = fs.list(path);
    for (var i = 0; i < files.length; i += 1) {
        filename = files[i];
        if (filename.substr(-3) == ".js") {
            suspects.push(path + "/" + filename);
        }
    }

    return suspects;
}

function loadTests(path) {
    filepaths = findTests(path);
    for (var i = 0; i < filepaths.length; i += 1) {
        filepath = filepaths[i];
        if (filepath != "tests/run-tests.js") {
            phantom.injectJs("./" + filepath);
        }
    }
}
exports.loadTests = loadTests;

// for test examples
exports.math = require("./math");
