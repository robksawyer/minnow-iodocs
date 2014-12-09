module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
        pkg  : grunt.file.readJSON("package.json"),
        meta : {
            sass : [
                'public/stylesheets/scss/*.scss',
                'public/stylesheets/scss/**/*.scss'
            ],
            grunt : [
              'Gruntfile.js'
            ]
        },
 
        watch: {
            sass : {
              files : '<%= meta.sass %>',
              tasks : ['compass:dev']
            },
            grunt : {
              files : '<%=  meta.grunt %>',
              tasks : ['watch']
            }
        },
 
        compass : {
          dev: {
            options : {
              config : 'config.rb'
            }
          }
        },

 
    });
 
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['watch']);
};