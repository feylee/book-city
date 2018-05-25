var gulp = require('gulp');
var less = require('gulp-less');
var squence = require('gulp-sequence');
var server = require('gulp-webserver');
var mock = require('./src/data/mock.js');
var babel = require("gulp-babel");
var miniCss = require('gulp-minify-css');
var miniHtml = require('gulp-htmlmin');
var uglify = require('gulp-uglify');



gulp.task('miniH', function() {
    gulp.src('./src/**/*.html')
        .pipe(miniHtml({
            collapseWhitespace: true, //压缩HTML
            minifyJS: true, //压缩页面JS
            minifyCSS: true //压缩页面CSS
        }))
        .pipe(gulp.dest('dist'))
});


gulp.task('minicss', function() {
    gulp.src('./src/css/*.css')
        .pipe(miniCss('style.min.css')) //设置压缩后的文件名
        .pipe(gulp.dest('dist/css'));
});

gulp.task('babel', function() {
    gulp.src(["./src/js/{common,page,lib}/*.js", './src/js/main.js'])
        .pipe(babel({
            presets: 'es2015'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

//var homedata = require('./src/data/home.json')
var url = require('url');
gulp.task('testless', function() {
    gulp.src('./src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest("src/css"))
});
gulp.task('change', function() {
    gulp.watch("./src/css/*.less", ["testless"])
});
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8082,
            host: "localhost",
            // livereload: true,
            // open: true,
            middleware: function(req, res, next) {
                var uname = url.parse(req.url, true);
                // console.log(req.url)
                if (/\/book/g.test(uname.pathname)) {
                    res.end(JSON.stringify(mock(req.url)))
                }
                next();
            }
        }))
});
gulp.task('default', function(cd) {
    squence("change", "server", cd)
})