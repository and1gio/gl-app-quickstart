'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    gulpIf = require('gulp-if'),
    templateCache = require('gulp-angular-templatecache'),
    runSequence = require('run-sequence')
    ;

/**
 * Path Configs
 */
var paths = {
    angularJs: {
        input: './client/angular/**/*.js',
        output: './public/assets/js'
    },

    angularTemplate: {
        input: ['./client/angular/templates/**/*.html', './client/angular/templates/**/*.jade'],
        output: './public/assets/templates'
    },

    sass: {
        input: './client/stylesheets/sass/**/*.scss',
        output: './public/assets/css'
    }
};

/**
 * Build Tasks
 */
gulp.task('build:sass', function (cb) {
    gulp.src(paths.sass.input)
        .pipe(sass({outputStyle: 'nested'}).on('error', function(){
            //sass.logError;
            cb('sass error')
        }))
        .pipe(gulp.dest(paths.sass.output))
        .pipe(sass({outputStyle: 'compressed'}).on('error', function(){
            //sass.logError;
            cb('sass error');
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.sass.output))
        .on('end', function(){
            cb(null);
        });
});

gulp.task('build:angular:js', function (cb) {
    gulp.src(paths.angularJs.input)
        .pipe(gulp.dest(paths.angularJs.output))
        .on('end', function(){
            cb(null);
        });
});

gulp.task('build:angular:templates', function (cb) {
    gulp.src(paths.angularTemplate.input)
        .pipe(gulpIf('*.jade', jade({client: false})))
        .pipe(templateCache({standalone: true}))
        .pipe(gulp.dest(paths.angularTemplate.output))
        .on('end', function(){
            cb(null);
        });
});

/**
 * Watch Tasks
 */
gulp.task('watch', function () {
    gulp.watch(paths.sass.input, ['build:sass']);
    gulp.watch(paths.angularJs.input, ['build:angular:js']);
    gulp.watch(paths.angularTemplate.input, ['build:angular:templates']);
});

/**
 * Runner Tasks
 */
gulp.task('build', function(done){
    runSequence('build:sass', 'build:angular:js', 'build:angular:templates', function() {
        done();
    });
});

gulp.task('default', function(done){
    runSequence('build', 'watch', function() {
        done();
    });
});