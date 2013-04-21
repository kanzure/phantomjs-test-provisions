// setup phantomjs-test-provisions
var testprovisions = require("./../../phantomjs-test-provisions");
var jasmine = testprovisions.jasmine;
var jasmineConsoleReporter = testprovisions.jasmineConsoleReporter;
var chai = testprovisions.chai;
var should = testprovisions.should;
var it = testprovisions.it;
var describe = testprovisions.describe;

testprovisions.loadTests("tests/");

// configure and start jasmine
var jasmineEnv = testprovisions.configureJasmine();
jasmineEnv.execute();
