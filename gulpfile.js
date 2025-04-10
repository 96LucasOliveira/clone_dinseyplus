const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css'); // minificador de CSS
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError)) // compila o SCSS
        .pipe(cleanCSS())                        // minifica o CSS
        .pipe(gulp.dest('./dist/css'));          // salva o resultado
}

function images (){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
    gulp.watch('src/styles/*.scss', gulp.parallel(styles));
};