const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css'); // minificador de CSS

function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError)) // compila o SCSS
        .pipe(cleanCSS())                        // minifica o CSS
        .pipe(gulp.dest('./dist/css'));          // salva o resultado
}

exports.default = styles;

exports.watch = function () {
    gulp.watch('src/styles/*.scss', gulp.parallel(styles));
};