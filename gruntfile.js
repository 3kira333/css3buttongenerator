module.exports = function(grunt) {
grunt.initConfig({
	compass: {									// Task
		dev: {
			options: {
				sassDir: 'sass',
				cssDir: 'css',
				outputStyle: 'expanded' //CSS output mode. Can be: nested, expanded, compact, compressed.
			}
		}
	},
	watch: {
		options: {
			livereload: true
		},
		scripts: {
			files: ['sass/*.sass'],
			tasks: ['compass', 'uncss', 'concat', 'cssmin']
		}
	},
	concat: {
		dist: {
			src: ['temp/jquery-ui.css', 'temp/jquery-ui.structure.css', 'temp/jquery-ui.theme.css', 'temp/unbootstrap+unstyle.css'],
			dest: 'temp/all.css'
		}
	},
	cssmin: {
		dist: {
			src: ['temp/all.css'],
			dest: 'production/all.min.css'
		},
		options: {
			banner: '/* Created by Andrey Korshunov */'
		}
	},
	uncss: {
		dist: {
			options: {
				ignore : ['.ui-slider',
									'.ui-slider-range',
									'.ui-slider-handle',
									'.has-error',
									'.has-success'
									],
				csspath: 'css/',
				stylesheets  : ['bootstrap.css', 'bootstrap-theme.css', 'style.css']
			},
			files: {
				'temp/unbootstrap+unstyle.css' : ['index.html']
			}
		}
	}
});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-uncss');

	// grunt.registerTask();
	grunt.registerTask('default', ['compass', 'uncss','concat', 'cssmin', 'watch']);
};