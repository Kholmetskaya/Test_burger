
var gulp = require("gulp"),
  gutil = require("gulp-util"),
  less = require("gulp-less"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  del = require("del"),
  cleancss = require("gulp-clean-css"),
  autoprefixer = require("gulp-autoprefixer"),
  notify = require("gulp-notify"),
  rsync = require("gulp-rsync");

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false
  });
});

gulp.task("styles", function() {
  return (
    gulp
      .src(`./app/styles/*.less`)
	  .pipe(less())
	  .pipe(concat("styles.min.css"))
      .pipe(autoprefixer(["last 15 versions"]))
      .pipe(gulp.dest("app/css"))
	  .pipe(browserSync.stream())
  );
});

gulp.task("js", function() {
  return (
    gulp
      .src([
        "app/libs/*",
        "app/js/common.js" // Always at the end
      ])
      .pipe(concat("scripts.min.js"))
      .pipe(uglify()) // Mifify js (opt.)
      .pipe(gulp.dest("app/js"))
      .pipe(browserSync.reload({ stream: true }))
  );
});

gulp.task("rsync", function() {
  return gulp.src("app/**/*").pipe(
    rsync({
      root: "app/",
      destination: "build",
      exclude: ["**/Thumbs.db", "**/*.DS_Store", "app/libs/**"], // Excludes files from deploy
      recursive: true,
      archive: true,
      silent: false,
      compress: true
    })
  );
});

gulp.task("watch", ["styles", "js", "browser-sync"], function() {
  gulp.watch(`./app/styles/*.less`, ["styles"]);
  gulp.watch(["libs/*.js", "app/js/common.js"], ["js"]);
  gulp.watch("app/*.html", browserSync.reload);
});

gulp.task("build", ["removedist", "styles", "js"], function() {
  var buildFiles = gulp.src(["app/*.html"]).pipe(gulp.dest("build"));

  var buildCss = gulp
    .src(["app/css/styles.min.css"])
    .pipe(gulp.dest("build/css"));

  var buildJs = gulp.src(["app/js/scripts.min.js"]).pipe(gulp.dest("build/js"));

  var buildFonts = gulp.src(["app/fonts/*"]).pipe(gulp.dest("build/fonts"));

  var buildImg = gulp.src(["app/img/*"]).pipe(gulp.dest("build/img"));
});
gulp.task("removedist", function() {
  return del.sync("build");
});
gulp.task("clearcache", function() {
  return cache.clearAll();
});

gulp.task("default", ["watch"]);