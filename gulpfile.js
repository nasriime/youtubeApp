const gulp = require('gulp')
const sass = require('gulp-sass')
const eslint = require("gulp-eslint")
const webserver = require('gulp-webserver')
const autoprefixer = require('gulp-autoprefixer')


const src = './assets/'

gulp.task('build', () => {
    return compile();
})

gulp.task('sass', () =>{
	gulp.src(src +'styles/scss/main.scss')
	.pipe(sass())
	.pipe(gulp.dest(src + 'styles/css'))
})

gulp.task('eslint', () => {
    return gulp.src(src + 'js/*.js')
        .pipe(eslint())
        .pipe(eslint.format('stylish'));
})

gulp.task('autofixer', () => {
    return gulp.src(src +'styles/scss/main.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(src + 'styles/css'))
})

gulp.task('serve', () => {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'index.html',
            // livereload: true,
            // directoryListing: true,
            open: true
        }))
})

gulp.task('watch', ['sass'], () =>{
	gulp.watch(src +'styles/scss/main.scss',[sass])
})


gulp.task('default', ['watch'])
