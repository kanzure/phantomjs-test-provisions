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

This adds unit testing to PhantomJS modules.

# usage

Write tests in `tests/spectacles.js` like this:

``` js
describe("phantomjs-test-provisions example test", function() {
    mymodule = require("./../../mymodule");

    it("should exist", function() {
        should.exist(mymodule);
    });
});
```

Then run tests like this (if it was installed with `-g` when calling `npm install`):

``` bash
phantomjs-test
```

Using a local binary is also possible and it could be added to a `Gruntfile` or `package.json` like so:

``` bash
./node_modules/phantomjs-test-provision/bin/phantomjs-test
```

# who tests the testers

There is also default example which can run immediately for this project:

``` bash
npm test
```

Also there is an example using grunt (see `Gruntfile.js`):

``` bash
grunt test
```

# license

BSD
