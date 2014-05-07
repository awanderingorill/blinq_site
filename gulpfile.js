var gulp = require('gulp');
var _ = require('gulp-load-plugins')();

gulp.task('clean-styles', function () {
  return gulp.src(['assets/*.css'], { read: false }).pipe(_.clean());
});

gulp.task('sass', ['clean-styles'], function () {
  gulp.src('./styles/*.scss')
      .pipe(_.sass())
      .pipe(gulp.dest('./assets/'));
});

// Watch Files
gulp.task('watch', function() {
  gulp.watch('styles/*.scss', ['sass']);
});

// Default
gulp.task('default', function () {
  gulp.start('sass');
  gulp.start('watch');
});
