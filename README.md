# phantomjs-test-provisions

[PhantomJS](http://phantomjs.org/) unit testing module installable through npm.

Makes your PhantomJS javascript spaghetti testable, reusable and maybe even
production-ready.

phantomjs-test-provisions uses a standalone version of Jasmine. This package is
largely based off of code in the upstream PhantomJS repository. As a separate
node module, it's a quick option for developers interested in adding testing to
their PhantomJS outer context (JavaScriptCore environment).

# phantomjs

Note that PhantomJS must be installed and available in `$PATH`.

# install

With [npm](http://npmjs.org/) do:

``` bash
npm install phantomjs-test-provisions
```

This adds unit testing to PhantomJS modules.

# usage

Write tests in `tests/spectacles.js` like this:

``` js
exports.run = function() {
    describe("phantomjs-test-provisions example test", function() {
        var mymodule = require("./../../mymodule");

        it("should exist", function() {
            should.exist(mymodule);
        });
    });
}
```

Then run tests like this (if it was installed through `npm install -g`):

``` bash
phantomjs-test
```

Using the script through a relative path is also possible and it could be added to a `Gruntfile` or `package.json` like so:

``` bash
./node_modules/phantomjs-test-provision/bin/phantomjs-test
```

# who tests the testers?

There is also a default example which can run immediately for this project:

``` bash
npm test
```

Also there is an example using grunt (see `Gruntfile.js`):

``` bash
grunt test
```

or even:

``` bash
./bin/phantomjs-test
```

# license

BSD
