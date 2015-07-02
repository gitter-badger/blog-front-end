var gulp          = require('gulp'),
    gulp-open     = require('gulp-open'),
    gulp-express  = require('gulp-express'),
    gulp-concat   = require('gulp-concat'),
    gulp-mcss     = require('gulp-mcss'),
    gulp-watch    = require('gulp-watch'),
    gulp-uglify   = require('gulp-uglify');

    // Task of uglify
    gulp.task('compress',function(){
      return gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
    });

    // Task of 
