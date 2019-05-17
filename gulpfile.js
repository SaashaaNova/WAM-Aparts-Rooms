const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');
const wait = require("gulp-wait");
const webpack = require("webpack");

sass.compiler = require('node-sass');

function showError(err) {

    notifier.notify({
        title: 'Błąd SASS',
        message: err.messageFormatted
      });

    console.log(err.messageFormatted);
    this.emit('end');
}

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false,
    });
});


gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(wait(500))
        .pipe(sourcemaps.init()) 
        .pipe(sass({
        outputStyle: 'compressed'
        }).on('error', showError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task("es6", function(cb) { //https://github.com/webpack/docs/wiki/usage-with-gulp#normal-compilation
    return webpack(require("./webpack.config.js"), function(err, stats) {
        if (err) throw err;
        console.log(stats.toString());
        cb();
        browserSync.reload();
    })
})

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch("src/js/**/*.js", ["es6"]);
    gulp.watch("*.html").on('change', browserSync.reload);
});
   
gulp.task("default", function() {
    console.log("============= Rozpoczynam pracę ============");
    gulp.start(['browser-sync', 'sass', 'watch', "es6"]);
});