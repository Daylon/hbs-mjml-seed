'use strict'

const GULP = require( 'gulp' )
, SEQUENCE = require( 'gulp-sequence' )

let build = function(){
  return SEQUENCE(
    'core-clean'
    , 'core-watch-notification'
    , 'variants-prepare'
    , 'style-compile'
    , 'style-inject'
    , 'variants-build'
  )()
}

GULP.task(
  'build'
  , build
)
module.exports = build
