const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// Compile and Inject SaaS
gulp.task('sass',function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// Move javascript files to src/js folder
gulp.task('js',function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
});

// Move font-awesome fonts to src/fonts folder
gulp.task('fonts',function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'));
});

// Move font-awesome css to src/css folder
gulp.task('fa',function() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'));
});

// Serve and Watch for Files
gulp.task('serve',['sass'],function() {
    browserSync.init({
        server: './src'
    })

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'],['sass'])
    gulp.watch('src/*.html').on('change',browserSync.reload)
})
// Set the default task
gulp.task('default',['js','fa','fonts','serve']);