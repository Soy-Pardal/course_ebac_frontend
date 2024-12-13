const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); // Funciona com versão 7.1.0
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

// Caminhos dos arquivos
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'build/styles'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'build/scripts'
  },
  images: {
    src: 'src/images/**/*',
    dest: 'build/images'
  }
};

// Tarefa: Compilação do SASS com Source Maps
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init()) 
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa: Compressão de Imagens
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Tarefa: Compressão de JavaScript
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init()) 
    .pipe(uglify())
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa: Watchers
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.scripts.src, scripts);
}

// Tarefa padrão
exports.default = gulp.series(
  gulp.parallel(styles, images, scripts),
  watch
);
