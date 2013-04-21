module.exports = function(grunt) {
    'use strict';

    // project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        exec: {
            phantomjstest: {
                cmd: "./bin/phantomjs-test"
            }
        }
    });

    grunt.loadNpmTasks("grunt-exec");

    grunt.registerTask("test", ["exec:phantomjstest"]);
    grunt.registerTask("default", ["test"]);
};
