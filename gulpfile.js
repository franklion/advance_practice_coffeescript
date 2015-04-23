/**
 * Created by fg on 15/4/23.
 */
/* 載入外掛 */
var gulp = require('gulp'),
  //minifyHtml = require('gulp-minify-html'),
  minifyCss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  coffee = require('gulp-coffee'),
  coffeelint = require('gulp-coffeelint'),
  autoprefixer = require('gulp-autoprefixer'),
  //imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  fs = require('fs'),
  concat = require('gulp-concat'),
  header = require('gulp-header'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload');


/* coffee task */
gulp.task('compile-coffee', function () {
  gulp.src('js/*.coffee')
    .pipe(coffeelint({
      "max_line_length": {
        "level": "ignore"
      }
    }))
    .pipe(coffeelint.reporter())
    .pipe(coffee())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({message: 'Coffee task complete'}))
    .pipe(livereload());
});

/* clean task */
gulp.task('clean', function () {
  return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img', 'dist/assets/html'], {read: false})
    .pipe(clean());
});

/* watch file */
gulp.task('watch', function () {
  livereload.listen({ basePath: 'dist' });
  gulp.watch('js/**/*.coffee', ['compile-coffee']);
});