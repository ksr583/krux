import gulp from 'gulp';

gulp.task('watch', () => {

    // Watch CSS (.css) files
    gulp.watch('src/**/*.css', ['styles']);

});
