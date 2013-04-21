// setup phantomjs-test-provisions
var testprovisions = require("./../../phantomjs-test-provisions");
var jasmine = testprovisions.jasmine;
var jasmineConsoleReporter = testprovisions.jasmineConsoleReporter;
var chai = testprovisions.chai;
var should = chai.should();
var it = jasmine.it;
var describe = jasmine.describe;

// TODO: search for test/spec js files automatically
phantom.injectJs("./examples.js");

// configure and start jasmine
var jasmineEnv = testprovisions.configureJasmine();
jasmineEnv.execute();
