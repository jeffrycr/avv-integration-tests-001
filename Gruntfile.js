'use strict';
module.exports = function (grunt) {
  // Project configuration.
    grunt.initConfig({
        // Configuration to be run (and then tested).
        ghost: {
        	integration: {
        		filesSrc: ['integration-test/**/*.js']
        	}
        }
    });
    grunt.loadNpmTasks('grunt-ghost');
    grunt.registerTask('test', ['ghost']);
};
