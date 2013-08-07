/*globals JASMINE, JASMINE_ADAPTER, MOCHA, MOCHA_ADAPTER, QUNIT, QUNIT_ADAPTER,*/
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
                files: [
                    JASMINE,
                    JASMINE_ADAPTER,
                    MOCHA,
                    MOCHA_ADAPTER,
                    QUNIT,
                    QUNIT_ADAPTER
                ],
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
    grunt.registerTask('test', ['karma:unit']);
};
