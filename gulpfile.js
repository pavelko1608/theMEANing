const gulp = require("gulp")
const concat = require('gulp-concat')
const removeUseStrict = require("gulp-remove-use-strict")
 
gulp.task('scripts', () => {
  return gulp.src(['./app/app.js', './app/scripts/controllers/main.js', './app/scripts/controllers/todo.js', "./app/scripts/services/data.js", "./app/scripts/directives/todo.js"])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/'));
})
