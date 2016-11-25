import {join} from 'path';
import {APP_SRC, APP_DEST} from '../config';

export = function buildImagesDev(gulp, plugins) {
  return function () {
    return gulp.src([
        join(APP_SRC, 'static/*'),
      ])
      .pipe(gulp.dest(join(APP_DEST,'static')));
  };
}
