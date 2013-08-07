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
                runnerPort: 9999,
                browsers: ['PhantomJS']
            },
            unit: {
                jasmine: {
                    frameworks: ['jasmine'],
                    files: ['src/*.js', 'unit-test/jasmine/*.js']
                },
                mocha: {
                    frameworks: ['mocha'],
                    files: ['src/*.js', 'unit-test/mocha/*.js']
                },
                qunit: {
                    frameworks: ['qunit'],
                    files: ['src/*.js', 'unit-test/qunit/*.js']
                },
                singleRun: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-ghost');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', ['ghost']);
    grunt.registerTask('test', ['karma']);
};
