// setup phantomjs-test-provisions
var testprovisions = require("./../../phantomjs-test-provisions");
var jasmine = testprovisions.jasmine;
var jasmineConsoleReporter = testprovisions.jasmineConsoleReporter;
var chai = testprovisions.chai;
var should = chai.should();
var it = jasmine.it;
var describe = jasmine.describe;

// TODO: switch to node_modules version when jasmine-standalone exists
//phantom.injectJs("node_modules/phantomjs-test-provisions/lib/jasmine.js");
//require("./../node_modules/jasmine-standalone");

//var jasmine = require("./../../jasmine-standalone");
//var it = jasmine.it; var describe = jasmine.describe;

// TODO: switch to node_moduels when jasmine-console exists
//phantom.injectJs("node_modules/phantomjs-test-provisions/lib/jasmine-console.js");
//require("./../node_modules/jasmine-console");

//var jasmineConsoleReporter = require("./../../jasmine-console");

// load should
//var chai = require("./../node_modules/chai");
//var should = chai.should();

// TODO: make a package phantomjs-test-provisions to expose jasmine, jasmine-console and chai
// TODO: move launchJasmine into phantomjs-test-provisions ?

// load this example library
//var testprovisions = require("./../../phantomjs-test-provisions");

// TODO: search for test/spec js files automatically
phantom.injectJs("./examples.js");

// configure and start jasmine
var jasmineEnv = testprovisions.configureJasmine();
jasmineEnv.execute();
