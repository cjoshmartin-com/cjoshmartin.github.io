module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      inlinecss: {
        main: {
          options: {
          },
          files: {
            'email-inlined.html': 'index.html'
          }
        }
      }

    });

    grunt.loadNpmTasks('grunt-inline-css');

    grunt.registerTask('default',['inlinecss']);

};
