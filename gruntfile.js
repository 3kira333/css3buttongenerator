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
			tasks: ['compass','concat', 'cssmin']
		}
	},
	concat: {
		dist: {
			src: ['css/*.css'],
			dest: 'production/css/all.css',
			stripBanners: {
				options: {
					block: true,
					line: true
				}
			}
		}
	},
	cssmin: {
		dist: {
			src: ['production/css/all.css'],
			dest: 'production/css/all.min.css'
		}
	},
	uncss: {
		dist: {
			options: {
				report: 'min',
				csspath: 'css/',
				stylesheets: ['all.css']
			},
			files: {
				'css/cut.css' : ['index.html']
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
	grunt.registerTask('default', ['compass','concat', 'cssmin', 'watch']);
};