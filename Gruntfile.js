'use strict';
module.exports = function (grunt) {
  // Project configuration.
    grunt.initConfig({
        // Configuration to be run (and then tested).
        casperjs: {
            files: ['test/casperjs.js']
        }
    });
    grunt.loadNpmTasks('grunt-casperjs');
};