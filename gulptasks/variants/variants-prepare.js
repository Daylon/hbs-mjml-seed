'use strict'

const GULP = require( 'gulp' )
, EVENT_STREAM = require( 'event-stream' )
, RENAME = require( 'gulp-rename' )
, HANDLEBARS = require( 'gulp-compile-handlebars' )
, PATHS = require( '../core/core-paths' )
, TEMPLATES = require( '../core/core-templates' )
, ON_ERROR = require( '../core/core-errors' )


let prepareVariants = function(){
  let variants
  , wrapInIEConditional = ( options ) => ( options.fn ? `<!--[if mso]>${options.fn()}<![endif]-->`: options )
  , tplOptions = {
    ignorePartials: true
    , batch: [ `${PATHS.dir.variants.partials}` ]
    , helpers: { wrapInIEConditional }
  }
  , renderEntry = function( _entry ){
    console.log( `\t> rendering ${_entry.name}…` )

    return GULP.src( `${PATHS.dir.variants.source}*${PATHS.file.template}` )
    .pipe( HANDLEBARS(
      _entry
      , tplOptions
    ))
    .pipe( RENAME({
      prefix: 'email-'
      , basename: _entry.name
      , extname: PATHS.file.variant
    }) )
    .pipe( GULP.dest( `${PATHS.dir.variants.variants}` ) )
  }

  console.log( '\n\u001b[38;5;120;1m> TPL \u001b[0m\u001b[38;5;115m Preparing all variants…\u001b[0m')

  variants = TEMPLATES.data.map( renderEntry )
  return EVENT_STREAM.merge.apply( null, variants )
}

GULP.task( 'variants-prepare', prepareVariants )

module.exports = prepareVariants
