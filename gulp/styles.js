import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

const processors = [
  autoprefixer,
  precss
];

gulp.task('styles', () =>
  gulp
    .src('src/**/*.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss(processors) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('dist/') )
);
