import gulp from 'gulp';

gulp.task('watch', () => {

    // Watch .css files
    gulp.watch('src/**/*.css', ['styles']);

});
