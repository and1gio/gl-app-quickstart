'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    gulpIf = require('gulp-if'),
    webpack = require('webpack'),
    templateCache = require('gulp-angular-templatecache'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
    del = require('del'),
    config = require('./gulp-config.json');

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

gulp.task("webpack", function(cb) {
    webpack(config.webpack, function(err, stats) {
        console.log("[webpack]", stats.toString({}));
        cb(err);
    });
});

/**
 * Copy NPM Libs into public libs folder
 */
gulp.task('copy:npm-libs', function(cb){
    del.sync(['!./public/assets/libs/npm_components/readme.md']);
    var npmComponents = config.copy.npmComponents;
    for(var key in npmComponents){
        gulp.src([key + '/**/*'])
            .pipe(gulp.dest(npmComponents[key]))
            .on('end', function(){
                cb(null);
            });
    }
});

/**
 * Build Tasks
 */
gulp.task('build:sass', function (cb) {
    gulp.src(config.stylesheet.sass.input)
        .pipe(sass({outputStyle: 'nested'}).on('error', function(){
            cb('sass error')
        }))
        .pipe(gulp.dest(config.stylesheet.sass.output))
        .pipe(sass({outputStyle: 'compressed'}).on('error', function(){
            cb('sass error');
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.stylesheet.sass.output))
        .on('end', function(){
            cb(null);
        });
});

gulp.task('build:angular:js', function (cb) {
    webpack(config.webpack.angular, function(err, stats) {
        console.log("[webpack]", stats.toString({}));
        cb(err);
    });
    /*
    gulp.src(paths.angularJs.input)
        .pipe(gulp.dest(paths.angularJs.output))
        .on('end', function(){
            cb(null);
        });
    */
});

gulp.task('build:angular:templates', function (cb) {
    gulp.src(config.template.input)
        .pipe(gulpIf('*.jade', jade({client: false})))
        .pipe(templateCache({standalone: true}))
        .pipe(gulp.dest(config.template.output))
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
        nodemon({script: 'app.js', watch: ['./server', './server-config']});
        done();
    });
});