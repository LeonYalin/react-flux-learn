const gulp = require('gulp');
const connect = require('gulp-connect'); // runs a local dev server
const open = require('gulp-open'); // opens a url in a web browesr
const browserify = require('browserify'); // Bundles js
const reactify = require('reactify'); // transforms JSX to js
const source = require('vinyl-source-stream'); // use conventional text streams with Gulp
const concat = require('gulp-concat'); // Concatinates files
// const eslint = require('gulp-eslint'); // eslint for gulp

const config = {
  port: 4000,
  devBaseUrl: 'http://localhost',
  uri: `${this.devBaseUrl}:${this.port}`,
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    jsx: './src/**/*.jsx',
    img: './src/img/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    ],
    mainJs: './src/main.jsx',
    bundleJs: 'bundle.js',
    bundleCss: 'bundle.css',
    dist: './dist',
    distScripts: './dist/scripts',
    distCss: './dist/css',
    distImg: './dist/img',
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

gulp.task('css', () => {
  gulp.src(config.paths.css)
    .pipe(concat(config.paths.bundleCss))
    .pipe(gulp.dest(config.paths.distCss));
});

// copy and replace all js src files into dist folder; reload the server.
gulp.task('js', () => {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source(config.paths.bundleJs))
    .pipe(gulp.dest(config.paths.distScripts))
    .pipe(connect.reload());
});

gulp.task('img', () => {
  gulp.src(config.paths.img)
    .pipe(gulp.dest(config.paths.distImg))
    .pipe(connect.reload());
});

// lints the javascript files
// gulp.task('lint', () => {
//   const res = gulp.src(config.paths.js)
//     .pipe(eslint({ config: '.eslintrc.json' }))
//     .pipe(eslint.format());
//   return res;
// });

// watch html and jsx files changes
gulp.task('watch', () => {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.jsx, ['js']);
  // gulp.watch(config.paths.js, ['js', 'lint']);
});

// default task, when running 'gulp'
gulp.task('default', ['html', 'js', 'css', 'img', 'open', 'watch']);
// gulp.task('default', ['html', 'js', 'css', 'img', 'lint', 'open', 'watch']);
