'use strict';
module.exports = function (grunt) {
  // Project configuration.
    grunt.initConfig({
        // Configuration to be run (and then tested).
        ghost: {
            integration: {
                filesSrc: ['integration-test/**/*.js']
            }
        },
        karma: {
            options: {
                frameworks: ['jasmine', 'mocha', 'qunit'],
                files: ['src/*.js', 'unit-test/**/*.js'],
                runnerPort: 9999,
                browsers: ['PhantomJS']
            },
            unit: {
                singleRun: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-ghost');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', ['ghost']);
    //grunt.registerTask('test', ['karma:unit']);
};
