/**
 * Created by John on 17.01.2016.
 */
var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

// SERVER
gulp.task('clean', function(){
    return del('dist');
});

gulp.task('build:server', function () {
    var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
    var tsResult = gulp.src(path.resolve('./server/**/*.ts'))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.resolve('dist')));
});

// CLIENT
/*
 * This is used to convert files from the npm_modules folder into the dist/libs folder.
 *
 * jsNPMDependencies, sometimes order matters here! so be careful!
 * Use the same order as the scripts inside the <head>-tag in the client/index.html file.
 */
var jsNPMDependencies = [
    'es6-shim/es6-shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js'
];

gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)});

    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'));

    //Let's copy our index into dist
    var copyIndex = gulp.src(path.resolve('./client/index.html'))
        .pipe(gulp.dest('dist'));
    return [copyJsNPMDependencies, copyIndex];
});

gulp.task('build:app', function(){
    var tsProject = ts.createProject(path.resolve('./client/tsconfig.json'));
    var tsResult = gulp.src(path.resolve('./client/**/*.ts'))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});




gulp.task('build', function(callback){
    runSequence('clean', 'build:server','build:index','build:app', callback);
});

gulp.task('default', ['build']);