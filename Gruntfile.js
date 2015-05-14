'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          cacheLocation: 'public/sass/.sass-cache/'
        },
        files: [{
          expand: true,
          cwd: 'public/sass/',
          src: ['**/*.scss', '**/!_*.scss'],
          dest: 'public/css',
          ext: '.min.css'
        }]
      }
    },
    
    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors: true,
          consolidateMediaQueries: true,
          compress: true,
          lineBreaks: false
        },
        files: [{
          expand: true,
          cwd: 'public/css/',
          src: ['**/*.css'],
          dest: 'public/css'
        }]
      }
    },

    watch: {
      css: {
        files: ['public/sass/**/*.scss'],
        tasks: ['sass', 'cssc']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-cssc');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'cssc', 'watch']);
}
