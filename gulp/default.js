var gulp = require('gulp'),
	spawn = require('child_process').spawn;

gulp.task('default', function() {
	var gulpServe = spawn('gulp', ['test']),
		gulpTest = spawn('gulp', ['serve']);

	var killServers = function() {
		console.log('Server Killed');
		gulpServe.kill();
		gulpTest.kill();
		process.exit();
	};

	gulpServe.stdout.on('data', consoleData);
	gulpServe.stderr.on('data', consoleData);
	gulpTest.stdout.on('data', consoleData);
	gulpTest.stderr.on('data', consoleData);

	process.stdin.resume();

	process.on('exit', killServers);
	process.on('SIGINT', killServers);
});

function consoleData(data) {
	process.stdout.write(data.toString());
}
