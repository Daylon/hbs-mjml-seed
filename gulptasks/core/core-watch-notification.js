'use strict'

const GULP = require( 'gulp' )
, PATHS = require( './core-paths' )
, FILES_TO_WATCH_OUT = [
  `${PATHS.dir.styles.source}**/*${PATHS.file.sourceStylesheet}`
  , `${PATHS.dir.variants.source}**/*${PATHS.file.template}`
]

let watchNotification = function(){
  console.log( '\n\u001b[38;5;202;1m( ͡° ͜ʖ ͡°) WATCHED\n\u001b[0m')
  return true
}

GULP.task( 'core-watch-notification', watchNotification )

module.export = watchNotification
