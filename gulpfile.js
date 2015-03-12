var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var del 		= require('del');
var vinylPaths  = require('vinyl-paths');
var typescript 	= require('gulp-typescript');
var concat 		= require('gulp-concat');

gulp.task('hello', function()
{
	console.log('Waaazzuuuuuppp');
});

gulp.task('copyIndex', function()
{
	return gulp.src('src/index.html')
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function()
{
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});

gulp.task('watchFiles', function()
{
	gulp.watch('src/index.html', ['copyIndex']);
	gulp.watch('src/**/*.ts', ['typescriptIt']);
});

gulp.task('typescriptIt', function()
{
	return gulp.src(['src/**/*.ts'])
		.pipe(typescript({
			module: 'commonjs'
		}))
		.pipe(concat('App.js'))
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.reload({stream: true}));
	
});

gulp.task('clean', function()
{
	return gulp.src('./build', {read: false})
			.pipe(vinylPaths(del));
});


gulp.task('default', ['clean', 'copyIndex', 'browserSync', 'watchFiles']);