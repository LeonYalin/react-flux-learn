const gulp = require('gulp');
const connect = require('gulp-connect'); // runs a local dev server
const open = require('gulp-open'); // opens a url in a web browesr
const browserify = require('browserify'); // Bundles js
const reactify = require('reactify'); // transforms JSX to js
const source = require('vinyl-source-stream'); // use conventional text streams with Gulp

const config = {
  port: 4000,
  devBaseUrl: 'http:localhost',
  uri: `${this.devBaseUrl}:${this.port}`,
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    dist: './dist',
  },
};

// start a local development server
gulp.task('connect', () => {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true,
  });
});

// open index.html in the browser
gulp.task('open', ['connect'], () => {
  gulp.src('dist/index.html')
    .pipe(open({ uri: config.uri }));
});

// copy and replace all html src files into dist folder; reload the server.
gulp.task('html', () => {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

// copy and replace all js src files into dist folder; reload the server.
gulp.task('js', () => {
  gulp.src(config.paths.js)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

// watch html files changes
gulp.task('watch', () => {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

// default task, when running 'gulp'
gulp.task('default', ['html', 'js', 'open', 'watch']);
