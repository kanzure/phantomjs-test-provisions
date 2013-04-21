# phantomjs-test-provisions

[PhantomJS](http://phantomjs.org/) unit testing module installable through npm.
Makes your PhantomJS javascript spaghetti testable, reusable and maybe even
production-ready.

Note that PhantomJS must be installed. It is not a directly stated dependency
because many developers choose to install phantomjs separately (outside of
node/npm), and an explicit dependency on PhantomJS would entail downloading an
additional copy of the PhantomJS binary.

phantomjs-test-provisions uses a standalone version of Jasmine. This package is
largely based off of code in the upstream PhantomJS repository. As a separate
node module, it could be a quick option for developers interested in adding
testing to their PhantomJS outer context (JavaScriptCore environment).

# install

With [npm](http://npmjs.org/) do:

``` bash
npm install phantomjs-test-provisions
```

# usage

There is a default example which can run immediately:

``` bash
npm test
```

Also there is an example using grunt (see `Gruntfile.js`):

``` bash
grunt test
```

To add tests to a separate PhantomJS module, add a `tests/run-tests.js` that looks like this:

``` js
// load and setup phantomjs-test-provisions
var testprovisions = require("./../node_modules/phantomjs-test-provisions");
var jasmine = testprovisions.jasmine;
var jasmineConsoleReporter = testprovisions.jasmineConsoleReporter;
var chai = testprovisions.chai;
var should = chai.should();
var it = jasmine.it;
var describe = jasmine.describe;

/* Remember to setup the module if it's expected to be available later. It
could also be required() inside each individual test. */
var mymodule = require("./../../mymodule")

// include the custom test files here
phantom.injectJs("./test-sample.js");

// launch the tests
var jasmineEnv = testprovisions.configureJasmine();
jasmineEnv.execute();
```

Then write tests in `tests/test-sample.js` like:

``` js
describe("phantomjs-test-provisions example test", function() {
    it("should exist", function() {
        should.exist(mymodule);
    });
});
```

# license

BSD
