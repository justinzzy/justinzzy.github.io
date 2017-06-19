var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('css', function() {
	return gulp.src('_sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
})

gulp.task('watch', function() {
	gulp.watch('_sass/**/*.scss', ['css'])
})

gulp.task('build', ['css'])

gulp.task('default', ['css', 'watch'])
