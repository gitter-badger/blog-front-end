var gulp         = require('gulp'),
    gulpConcat   = require('gulp-concat'),
    gulpMcss     = require('gulp-mcss'),
    gulpUglify   = require('gulp-uglify');

    // Gulp task of the concatanating
    gulp.task('concatJs',function(){
      return gulp.src('js/*.js').pipe(gulpConcat('main.js').pipe(gulp-dest('dist/js/')));

    });

    // Gulp task of the uglify
    gulp.task('uglifyJs',function(){
      return gulp.src('js/*.js').pipe(gulpUglify('main.js').pipe(gulp-dest('dist/js/')));
    });

    // Gulp Mcss
    gulp.task('miniCss',function(){
        return gulp.src('css/*.css').pipe(gulpMcss('main.css').pipe(gulp-dest('dist/css/')));
    });
