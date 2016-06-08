'use strict'

const GULP = require( 'gulp' )
, SEQUENCE = require( 'gulp-sequence' ).use( GULP )

let defaultGulpTask = () => SEQUENCE( 'build', 'core-watch' )()

GULP.start( 'build')

GULP.task(
  'default'
  , defaultGulpTask
)
module.exports = defaultGulpTask
