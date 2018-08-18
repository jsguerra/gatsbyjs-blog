// Setup constants
const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      autoprefixer = require('autoprefixer'),
      postcss = require('gulp-postcss'),
      browserSync = require('browser-sync');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

// Copy All HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
);

// Minify JS
gulp.task('minify', function(){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sourcepmaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer('last 2 versions', '> 1%')
    ]))
    .pipe(sourcemaps.write(scss + 'maps'))
    .pipe(gulp.dest('dist/css'));
});

// Sync browser with changes
gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "src"
    }
  });
});

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('src/js/*.js', ['minify']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
  gulp.watch('src/*').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);