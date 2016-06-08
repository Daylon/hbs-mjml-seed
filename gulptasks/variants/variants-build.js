'use strict'

const GULP = require( 'gulp' )
, MJML_ENGINE = require( 'mjml' )
, MJML = require( 'gulp-mjml' )
, HTML_CLEAN = require( 'gulp-htmlclean' )
, HTML_MIN = require( 'gulp-htmlmin' )
, RENAME = require( 'gulp-rename' )
, PATHS = require( '../core/core-paths' )
, ON_ERROR = require( '../core/core-errors' )

let buildVariant = function(){
  console.log( '\n\u001b[38;5;120;1m> MJML \u001b[0m\u001b[38;5;115m Building variant…\u001b[0m')

  return GULP.src( `${PATHS.dir.variants.variants}**/*${PATHS.file.variant}` )
  .pipe( MJML( MJML_ENGINE ) )
  .pipe( HTML_CLEAN() )
  .pipe( HTML_MIN() )
  .pipe( RENAME({
    extname: PATHS.file.production
  }) )
  .pipe( GULP.dest( PATHS.dir.variants.dist ) )
}

GULP.task( 'variants-build', buildVariant )

module.exports = buildVariant
