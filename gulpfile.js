var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');

// Run bower for install packages
gulp.task('bower', function () {
    return bower('./bower_components');
});

// Move packages files from brower_components to libs folder
gulp.task('copyLibs', ['bower'], function () {
	//Angular
    gulp.src(['bower_components/angular/angular.min.js'])
        .pipe(gulp.dest('dist/libs/angular'));
  	
    //Jquery
    gulp.src(['bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('dist/libs/jquery'));

  	//Boostrap CSS
    gulp.src(['bower_components/bootstrap/dist/css/*.*'])
        .pipe(gulp.dest('dist/libs/bootstrap'));

    //Boostrap JS
    gulp.src(['bower_components/bootstrap/dist/js/bootstrap.js'])
        .pipe(gulp.dest('dist/libs/bootstrap'));
});

// Join angular files to app file
gulp.task('concat', function () {
    return gulp.src(['app/*/*.js', 'app/*.js'])
    .pipe(concat('minutasApp.js'))
    .pipe(gulp.dest('dist'));
});

// Join css files and move to dist folder
gulp.task('copyCss', function () {
    return gulp.src(['styles/*.css'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyLibs', 'copyCss', 'concat']);
