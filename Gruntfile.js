module.exports = function(grunt) {
    'use strict';

    // project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        exec: {
            phantomjstest: {
                cmd: "/usr/bin/env phantomjs tests/run-tests.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-exec");

    grunt.registerTask("test", ["exec:phantomjstest"]);
    grunt.registerTask("default", ["test"]);
};
