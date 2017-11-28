var gulp = require('gulp'),
	karma = require('karma').server

gulp.task('test', function(done) {
	karma.start({
		files: [
			'src/**/*.js',
			'test/stub/**/*.js',
			'test/unit/**/*.spec.js'
		],
		frameworks: ['browserify', 'jasmine'],
		browsers: ['PhantomJS'],
		preprocessors: {
			 'src/**/*.js': ['jshint', 'coverage', 'browserify'],
			 'test/stub/**/*.js': ['jshint', 'coverage', 'browserify'],
			'test/unit/**/*.spec.js': ['jshint', 'browserify']
		},

		reporters: ['spec', 'coverage'],

		coverageReporter: {
			type: 'html',
			dir: 'coverage/',
			subdir: 'report'
		},

		jshint: {
			options: {
				jasmine: true,
				node: true,
				browser: true,
				strict: true,
				latedef: false
			}
		},

		browserify: {
			transform: ['browserify-istanbul']
		}

	})
})
