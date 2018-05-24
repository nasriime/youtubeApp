const gulp = require('gulp')
const sass = require('gulp-sass')
const eslint = require("gulp-eslint")
const webserver = require('gulp-webserver')


const src = './assets/'

gulp.task('build', function () {
    return compile();
})

gulp.task('sass',function(){
	gulp.src(src +'styles/scss/main.scss')
	.pipe(sass())
	.pipe(gulp.dest(src + 'styles/css'))
})

gulp.task('eslint', function () {
    return gulp.src(src + 'js/*.js')
        .pipe(eslint())
        .pipe(eslint.format('stylish'));
})

gulp.task('serve', function () {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'index.html',
            // livereload: true,
            // directoryListing: true,
            open: true
        }))
})

gulp.task('watch', ['sass'],function(){
	gulp.watch(src +'styles/scss/main.scss',[sass])
})


gulp.task('default', ['watch'])
