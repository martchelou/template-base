const { option } = require("grunt");

// Grunt Tasks
module.exports = (grunt) =>
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {style: 'compressed','no-source-map': true},
				files: {'./assets/sass/style.min.css':'./assets/sass/index.scss'}
			}
		}, // end sass
		uglify: {
			options: { mangle: false },
			concatCompress: {
				files: {'./public/js/main.min.js': ['./assets/javascript/*.js']}
			}
		}, // end uglify
		watch: {
			css: {files: ['assets/sass/*.scss'], tasks: ['sass', 'purgecss']},
			js: {files: ['assets/javascript/*.js'], tasks: ['uglify']}
		}, // end watch
		purgecss: {
			options: {
				content: ['./public/*.html'],
			},
			target: {
				files: {
					'./public/css/style.min.css': ['./assets/sass/style.min.css']					
				}
			}

		}
	});
	// task
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-purgecss');
	// alias
	grunt.registerTask('default', ['sass', 'uglify', 'purgecss']);
	grunt.registerTask('dev', ['watch']);
};
