// Grunt Tasks
module.exports = (grunt) =>
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {style: 'compressed','no-source-map': true},
				files: {'./public/css/style.min.css':'./assets/sass/index.scss'}
			}
		}, // end sass
		uglify: {
			options: { mangle: false },
			concatCompress: {
				files: {'./public/js/main.min.js': ['./assets/javascript/*.js']}
			}
		}, // end uglify
		watch: {
			css: {files: ['assets/sass/*.scss'], tasks: ['sass']},
			js: {files: ['assets/javascript/*.js'], tasks: ['uglify']}
		} // end watch
	});
	// task
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// alias
	grunt.registerTask('default', ['sass', 'uglify']);
	grunt.registerTask('dev', ['watch']);
};
