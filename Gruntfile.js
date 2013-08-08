'use strict';
module.exports = function (grunt) {
  // Project configuration.

  var browser = 'PhantomJS';
  //var browser = 'Chrome';

    grunt.initConfig({
        // Configuration to be run (and then tested).
        ghost: {
            integration: {
                filesSrc: ['integration-test/**/*.js']
            }
        },
        karma: {
            options: {
                browsers: ['Chrome'],
                singleRun: true,
                autoWatch: false
            },
            'unit-jasmine': {
                options: {
                    frameworks: ['jasmine'],
                    files: ['src/*.js', 'unit-test/jasmine/*.js']
                }
            },
            'unit-mocha': {
                options: {
                    frameworks: ['mocha'],
                    files: [
                        'node_modules/chai/chai.js',
                        'src/*.js',
                        'unit-test/mocha/*.js'
                    ]
                }
            },
            'unit-qunit': {
                options: {
                    frameworks: ['qunit'],
                    files: ['src/*.js', 'unit-test/qunit/*.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-ghost');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', ['karma:unit-mocha', 'ghost']);
};
