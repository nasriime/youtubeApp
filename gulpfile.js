const gulp = require('gulp')
const sass = require('gulp-sass')
const eslint = require("gulp-eslint")

const src = './assets/'

gulp.task('build', function () {
    return compile();
})

gulp.task('sass',function(){
	gulp.src(src +'styles/scss/custom.scss')
	.pipe(sass())
	.pipe(gulp.dest(src + 'styles/css'))
})

gulp.task('eslint', function () {
    return gulp.src(src + 'js/*.js')
        .pipe(eslint())
        .pipe(eslint.format('stylish'));
})

gulp.task('watch', ['sass'],function(){
	gulp.watch(src +'styles/scss/*.scss',[sass]);
})


gulp.task('default', ['watch'])
