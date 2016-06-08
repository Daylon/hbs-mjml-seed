'use strict'

const GULP = require( 'gulp' )
, DEL = require( 'del' )
, PATHS = require( './core-paths' )

let cleanUp = function(){
  console.log( '\n\u001b[38;5;202mDeleting…\u001b[0m')
  return DEL([
    `${PATHS.dir.variants.variants}**/*`
    , `${PATHS.dir.variants.dist}*`
    , `${PATHS.dir.styles.dist}*`
  ])
}

GULP.task( 'core-clean', cleanUp )

// module.exports = [ 'core']
