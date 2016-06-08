'use strict'

const GULP = require( 'gulp' )
, PATHS = require( './core-paths' )
, FILES_TO_WATCH_OUT = [
  `${PATHS.dir.styles.source}**/*+(${PATHS.file.lessStylesheets}|${PATHS.file.sassStylesheets})`
  , `${PATHS.dir.variants.source}**/*${PATHS.file.template}`
]

let watchAll = () => GULP.watch( FILES_TO_WATCH_OUT, [ 'build' ], [ 'change' ] ) // https://github.com/floatdrop/gulp-watch#api

GULP.task( 'core-watch', watchAll )
module.export = watchAll
