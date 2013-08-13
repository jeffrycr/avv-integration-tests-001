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
                browsers: [browser],
                singleRun: true,
                autoWatch: false,
                reporters : ['coverage'],
                preprocessors: {
                    'src/*.js': ['coverage']
                },
                coverageReporter: {
                    type : 'html',
                    dir : 'coverage/',
                    file : 'coverage.html'
                }
            },
            'unit-jasmine': {
                options: {
                    frameworks: ['jasmine'],
                    files: [
                        'node_modules/underscore/underscore.js',
                        'src/*.js',
                        'unit-test/jasmine/*.js'
                    ],
                    coverageReporter: {
                        type : 'html',
                        dir : 'coverage/unit/jasmine'
                    }
                }
            },
            'unit-mocha': {
                options: {
                    frameworks: ['mocha'],
                    files: [
                        'node_modules/underscore/underscore.js',
                        'node_modules/chai/chai.js',
                        'src/*.js',
                        'unit-test/mocha/*.js'
                    ],
                    coverageReporter: {
                        type : 'lcov',
                        dir : 'coverage/unit/mocha'
                    }
                }
            },
            'unit-qunit': {
                options: {
                    frameworks: ['qunit'],
                    files: [
                        'node_modules/underscore/underscore.js',
                        'src/*.js',
                        'unit-test/qunit/*.js'
                    ],
                    coverageReporter: {
                        type : 'html',
                        dir : 'coverage/unit/qunit'
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-ghost');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', ['karma', 'ghost']);
};
