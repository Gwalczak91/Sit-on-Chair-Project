var gulp = require("gulp"); /* chce miec dostep do paczki gulp*/
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

/*
gulp.task("sample", function () {
    console.log("umc, umc, umc");

}); /!* chce wykorzystac zadania z paczki*!/

gulp.task("bass", function () {
    console.log("jep, jep, jep");
});



gulp.task("default", ["bass", "sample"]); /!*  ustawienia kolejnosci wykonywnia tasków (task default nie potrzbeny jest wypisania go w konsoli)*!/
*/


gulp.task("sass", function () {

    gulp.src("scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
});

gulp.task("watch", function () {

   gulp.watch("scss/**/*.scss", ["sass"]);

});


gulp.task("default", ["sass", "watch"]);