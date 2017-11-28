var gulp = require('gulp'),
	browserSync = require('browser-sync')

gulp.task('serve', function() {
	browserSync({
		server: ['./coverage/report'],
		files: 'coverage/**/*',
		logLevel: 'silent'
	})
})
